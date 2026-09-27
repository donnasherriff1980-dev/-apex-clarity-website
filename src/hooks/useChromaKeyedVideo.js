import { useEffect, useRef } from 'react';

// useChromaKeyedVideo — copied verbatim from the Apex Clarity application
// (src/hooks/useChromaKeyedVideo.js). Not a website invention: this is the
// exact per-pixel keying the platform itself uses to render Lucy, so the
// orb on the website is the same orb customers meet inside the product.
//
// Plays a hidden <video> loop and keys out the pure-black background
// per-pixel, painting only the luminant orb onto the returned canvas with
// transparent alpha. The canvas replaces the <video> visually, so there is
// NEVER a black square — no reliance on mix-blend-mode or stacking contexts.
//
// The video CDN sends `Access-Control-Allow-Origin: *`, so the canvas is not
// tainted and getImageData works. If tainting ever occurs, the loop stops
// and the canvas is cleared so no black frame is ever left visible.
//
// Disabled (canvas left clear) under prefers-reduced-motion.
//
// `onFirstFrame` (optional) fires exactly once, the first time a real
// chroma-keyed frame is actually drawn onto the canvas — the caller's
// signal that this instance has genuinely become visible.
// `active` (default true): while false the paint loop is suspended — the
// canvas keeps its last painted frame (Lucy stays Lucy, just still) and no
// work is done. Setting it true again resumes the loop where it left off.
// The very first frame is always painted regardless of `active`, so an
// off-screen orb is already Lucy by the time it scrolls into view.
export function useChromaKeyedVideo(src, onFirstFrame, active = true) {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const activeRef = useRef(active);
  activeRef.current = active;
  const resumeRef = useRef(null);
  // Read via a ref inside the paint loop rather than depending on
  // `onFirstFrame` in the effect below — an inline arrow function passed
  // by the caller on every render must never restart the video/paint loop.
  const onFirstFrameRef = useRef(onFirstFrame);
  onFirstFrameRef.current = onFirstFrame;

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !src) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let raf = null;
    let stopped = false;
    let direction = 1;
    let last = 0;
    let firstFrameFired = false;

    const paint = (now) => {
      if (stopped) return;
      if (!activeRef.current && firstFrameFired) {
        // Suspend: leave the last frame on the canvas, drop the timer so
        // there is no time jump on resume, and let resume() restart us.
        raf = null;
        last = 0;
        return;
      }
      if (!last) last = now;
      const dt = (now - last) / 1000;
      last = now;
      if (video.readyState >= 2) {
        // Take over from autoPlay on the first ready frame: pause and reset,
        // then ping-pong scrub currentTime so the clip reverses at each end
        // (no jump back to frame 0 — no skip every few seconds).
        if (!video.paused) { video.pause(); video.currentTime = 0; last = now; }
        if (video.duration && canvas.width > 0 && canvas.height > 0) {
          let t = video.currentTime + direction * dt * 0.5;
          if (t >= video.duration) { t = video.duration; direction = -1; }
          else if (t <= 0) { t = 0; direction = 1; }
          if (Math.abs(t - video.currentTime) > 0.0005) video.currentTime = t;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            try {
              const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
              const d = img.data;
              for (let i = 0; i < d.length; i += 4) {
                // Rec. 601 luma. Smooth luminance key with a 60 floor: pure black AND
                // dark grey patches → transparent; bright orb → opaque.
                const lum = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
                d[i + 3] = Math.min(255, Math.max(0, (lum - 60) * 6));
              }
              ctx.putImageData(img, 0, 0);
              if (!firstFrameFired) {
                firstFrameFired = true;
                onFirstFrameRef.current?.();
              }
            } catch (e) {
              // Canvas taints (CORS change) → stop and clear so we never leave a black frame.
              stopped = true;
              if (raf) cancelAnimationFrame(raf);
              ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
          }
        }
      }
      raf = requestAnimationFrame(paint);
    };

    resumeRef.current = () => {
      // Never spin before the clip has a decodable frame (readyState >= 2):
      // a resume request that arrives earlier is satisfied by 'loadeddata'.
      if (stopped || reduceMotion || raf !== null || video.readyState < 2) return;
      raf = requestAnimationFrame(paint);
    };
    // The loop only starts once the clip has a decodable frame, so nothing
    // spins while the video is still downloading (or never arrives — then
    // the poster simply stays). autoPlay loads the clip; the paint loop
    // pauses it on the first ready frame and takes over with the ping-pong
    // scrub (no video.play() here).
    const onReady = () => resumeRef.current?.();
    if (!reduceMotion) {
      if (video.readyState >= 2) onReady();
      else video.addEventListener('loadeddata', onReady, { once: true });
    }

    return () => {
      stopped = true;
      resumeRef.current = null;
      video.removeEventListener('loadeddata', onReady);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [src]);

  useEffect(() => {
    if (active) resumeRef.current?.();
  }, [active]);

  return { canvasRef, videoRef };
}
