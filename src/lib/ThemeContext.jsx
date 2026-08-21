import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// ThemeContext — Day/Night for the Apex Clarity website (Batch 3).
//
// Mirrors the Apex Clarity PLATFORM's own ThemeContext architecture
// (three preferences, data-theme attribute, pre-paint inline script in
// index.html) as precedent, per the Batch 3 brief. Uses its own storage
// key — never shared with the platform's `apex-theme`, and never tied to
// `apex_cookie_consent` (this is a display preference, not tracking).
//
// Three preferences: 'system' | 'day' | 'night'.
//   system → follows prefers-color-scheme (dark = Night, light = Day)
//   day    → forces light theme
//   night  → forces dark theme
//
// The resolved theme is applied as data-theme="light"|"dark" on <html>.
// The matching inline script in index.html sets the attribute BEFORE
// first paint, so there is no flash of the wrong theme (FOUC). This
// provider keeps React state in sync with that attribute.
//
// First-time visitors default to 'system'.

const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

const STORAGE_KEY = "apex-website-theme";

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "day" || v === "night" || v === "system" ? v : "system";
  } catch {
    return "system";
  }
}

function getSystemResolved() {
  if (typeof window === "undefined" || !window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolve(preference) {
  if (preference === "day") return "light";
  if (preference === "night") return "dark";
  return getSystemResolved();
}

function applyAttribute(resolved) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", resolved);
}

export function ThemeProvider({ children }) {
  const [preference, setPreferenceState] = useState(() => readStored());
  const [resolved, setResolved] = useState(() => resolve(readStored()));

  // Keep the DOM attribute in sync with React state (covers hot-reload /
  // any edge case where the inline script and initial state could diverge).
  useEffect(() => {
    const r = resolve(preference);
    setResolved(r);
    applyAttribute(r);
  }, [preference]);

  // React to OS colour-scheme changes while in 'system' mode.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (readStored() === "system") {
        const r = getSystemResolved();
        setResolved(r);
        applyAttribute(r);
      }
    };
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);

  const setThemePreference = useCallback((pref) => {
    setPreferenceState(pref);
    try { localStorage.setItem(STORAGE_KEY, pref); } catch { /* device storage unavailable — preference just won't persist */ }
    const r = resolve(pref);
    setResolved(r);
    applyAttribute(r);
  }, []);

  // Simple explicit control: toggling always sets an explicit day/night
  // preference (never re-selects 'system' from the UI — that's only the
  // implicit pre-interaction default), matching standard marketing-site
  // toggle UX while keeping the same three-preference model as precedent.
  const toggleTheme = useCallback(() => {
    setThemePreference(resolved === "dark" ? "day" : "night");
  }, [resolved, setThemePreference]);

  return (
    <ThemeContext.Provider value={{ preference, resolved, setThemePreference, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
