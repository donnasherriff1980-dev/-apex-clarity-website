import React, { createContext, useContext, useState, useEffect } from "react";

// HeaderSurfaceContext — lets the section currently sitting at the top of
// the page declare whether it's dark or light, independent of the
// resolved Day/Night theme. The Navbar reads this (only while transparent/
// unscrolled) to choose a foreground that actually contrasts with what's
// really behind it — not the site theme, not the route name, and never a
// runtime DOM colour inspection.
//
// Default is 'dark' because every current page-top section genuinely is
// dark today (Hero's frozen Lucy water, and the legacy bg-brand-dark top
// section on every other page) — an honest default, not a guess. Pages
// that have been migrated declare it explicitly via useDeclareHeaderSurface
// so the mechanism doesn't silently rely on that default forever.

const HeaderSurfaceContext = createContext({ surface: "dark", setSurface: (_surface) => {} });

export const useHeaderSurface = () => useContext(HeaderSurfaceContext);

export function HeaderSurfaceProvider({ children }) {
  const [surface, setSurface] = useState("dark");
  return (
    <HeaderSurfaceContext.Provider value={{ surface, setSurface }}>
      {children}
    </HeaderSurfaceContext.Provider>
  );
}

// Call from the top-most section of a page: useDeclareHeaderSurface('dark' | 'light')
export function useDeclareHeaderSurface(surface) {
  const { setSurface } = useContext(HeaderSurfaceContext);
  useEffect(() => {
    setSurface(surface);
  }, [surface, setSurface]);
}
