import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyDemo from "../common/StickyDemo";
import ScrollToTop from "../ScrollToTop";
import CookieConsent from "../common/CookieConsent";
import { HeaderSurfaceProvider } from "@/lib/HeaderSurfaceContext";

export default function SiteLayout() {
  return (
    <HeaderSurfaceProvider>
      <ScrollToTop />
      <Navbar />
      <main className="bg-canvas">
        <Outlet />
      </main>
      <Footer />
      <StickyDemo />
      <CookieConsent />
    </HeaderSurfaceProvider>
  );
}