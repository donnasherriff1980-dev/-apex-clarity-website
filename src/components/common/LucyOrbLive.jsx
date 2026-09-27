import React, { useEffect, useRef, useState } from "react";
import { useChromaKeyedVideo } from "@/hooks/useChromaKeyedVideo";

// LucyOrbLive — Lucy exactly as she appears inside the Apex Clarity
// application: her real idle loop, chroma-keyed per-pixel onto a canvas.
//
// This is NOT a new orb, character or illustration. It is the platform's own
// asset pair, read straight from the app's single source of truth
// (src/components/lucy/lucyMedia.js — POSTER_SRC / IDLE_SRC), keyed with the
// app's own useChromaKeyedVideo hook, copied verbatim.
//
// WHY THIS EXISTS ALONGSIDE LucyOrb.jsx
// LucyOrb.jsx renders only POSTER_SRC — the static still. Inside the product
// that still is deliberately a pre-roll placeholder: the app fades it to
// opacity-0 the instant the idle video paints its first real frame, precisely
// so customers do not perceive "a different Lucy". The website hero was
// therefore showing the placeholder rather than Lucy herself. This component
// completes the same poster -> video handoff the app performs.
//
// LucyOrb.jsx is left untouched, so every other Lucy on the site (Meet Lucy,
// CTA, Product Journey, Platform Tour, Vision, H&S Support) is unchanged.
//
// Degrades safely: if the video cannot load or decode, or the canvas taints,
// or the visitor prefers reduced motion, the poster simply stays visible —
// i.e. identical to the current hero, never a black square.

const POSTER_SRC =
  "https://media.base44.com/images/public/6a483434dad74f643c340531/602c23a79_lucy-idle-still.png";

const IDLE_SRC =
  "https://media.base44.com/videos/public/6a483434dad74f643c340531/1d81c8f8e_lucy-idle-loop-2k.mp4";

// The app hides the source <video> with .lucy-source-video in its own
// stylesheet. Inlined here so the website's index.css stays byte-identical.
const SOURCE_VIDEO_STYLE = {
  clipPath: "inset(50% 0 50% 0)",
  pointerEvents: "none",
};

// Every Lucy on the site renders through this one component, so the orb is
// identical everywhere and only its size and placement vary. The video and
// canvas are always mounted; what the viewport controls is only whether the
// keying loop is running. Off screen the loop is suspended and the canvas
// holds its last frame, so Lucy never drops back to the poster. The poster
// is shown only until the first real frame paints, then cross-fades out for
// good for the rest of the page visit.
export default function LucyOrbLive({ size = 220, className = "" }) {
  const [framePainted, setFramePainted] = useState(false);
  const [inView, setInView] = useState(true);
  const rootRef = useRef(null);
  const { canvasRef, videoRef } = useChromaKeyedVideo(IDLE_SRC, () => setFramePainted(true), inView);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
      data-lucy-state={framePainted ? "live" : "poster"}
      data-lucy-active={inView ? "true" : "false"}
    >
      <div className="lucy-orb-glow" />
      <div className="relative w-full h-full">
        {/* Pre-roll still — visible only until the first real frame has
            painted, then cross-faded out and never shown again. */}
        <img
          src={POSTER_SRC}
          alt=""
          draggable={false}
          className={`absolute inset-0 w-full h-full object-contain rounded-full lucy-orb-alive transition-opacity duration-700 ease-out ${
            framePainted ? "opacity-0" : "opacity-100"
          }`}
          style={{
            maskImage: `url(${POSTER_SRC})`,
            WebkitMaskImage: `url(${POSTER_SRC})`,
            maskMode: "luminance",
            WebkitMaskMode: "luminance",
          }}
        />
        <video
          ref={videoRef}
          src={IDLE_SRC}
          crossOrigin="anonymous"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain"
          style={SOURCE_VIDEO_STYLE}
        />
        <canvas
          ref={canvasRef}
          width={320}
          height={320}
          className={`absolute inset-0 w-full h-full rounded-full transition-opacity duration-700 ease-out ${
            framePainted ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="lucy-orb-rim" />
      <div className="lucy-orb-particles" />
    </div>
  );
}
