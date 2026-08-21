import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

// ThemeToggle — the website's explicit Day/Night control (Batch 3).
// Native <button>, accessible name states the action (not just current
// state), aria-pressed reflects Night as the "on" state, visible focus
// ring via the new teal focus token, keyboard-operable by default.
//
// `inverse`: pass true when this toggle is rendered inside the Navbar's
// transparent state over a declared-dark surface — same reasoning as the
// Navbar's own fg logic (see Navbar.jsx), so the icon stays visible
// against Hero/legacy-dark page tops regardless of the resolved theme.
export default function ThemeToggle({ className = "", inverse = false }) {
  const theme = useTheme();
  if (!theme) return null;
  const { resolved, toggleTheme } = theme;
  const isNight = resolved === "dark";

  const colourClasses = inverse
    ? "border-ink-on-dark/20 text-ink-on-dark/70 hover:text-teal hover:border-teal/40"
    : "border-hairline/20 text-ink-secondary hover:text-teal hover:border-teal/40";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isNight ? "Switch to Day mode" : "Switch to Night mode"}
      aria-pressed={isNight}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${colourClasses} ${className}`}
    >
      {isNight ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
}
