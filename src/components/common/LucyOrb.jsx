import React from "react";
import LucyOrbLive from "./LucyOrbLive";

// LucyOrb — the single canonical Lucy for the website. Every placement
// (hero, Meet Lucy, product journey, CTA, Platform, Vision, H&S Support)
// renders the same asset with the same glow, rim and particles through
// LucyOrbLive; only `size` and layout differ. Kept as a named export so
// existing call sites do not change.
export default function LucyOrb({ size = 220, className = "" }) {
  return <LucyOrbLive size={size} className={className} />;
}
