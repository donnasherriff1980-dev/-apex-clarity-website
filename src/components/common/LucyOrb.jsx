import React from "react";

// Lucy's real orb asset, read directly from the Apex Clarity application
// (src/components/lucy/lucyMedia.js — POSTER_SRC) and reused as-is here,
// with the same masking technique the app itself uses for this exact
// image (src/components/lucy/LucyOrb.jsx): a plain CSS luminance mask.
// (A prior pass here used a custom SVG chroma-key filter borrowed from the
// app's separate video-canvas keying formula — that formula is for raw
// video frames, not this pre-processed poster, and produced a flatter,
// paler result than the app's own technique. Reverted.)
const POSTER_SRC =
  "https://media.base44.com/images/public/6a483434dad74f643c340531/602c23a79_lucy-idle-still.png";

export default function LucyOrb({ size = 220, className = "" }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <div className="lucy-orb-glow" />
      <div className="relative w-full h-full">
        <img
          src={POSTER_SRC}
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain rounded-full lucy-orb-alive"
          style={{
            maskImage: `url(${POSTER_SRC})`,
            WebkitMaskImage: `url(${POSTER_SRC})`,
            maskMode: "luminance",
            WebkitMaskMode: "luminance",
          }}
        />
      </div>
      <div className="lucy-orb-rim" />
      <div className="lucy-orb-particles" />
    </div>
  );
}
