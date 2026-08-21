import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_STORAGE_KEY = "apex_cookie_consent";

export default function StickyDemo() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [cookieBannerShowing, setCookieBannerShowing] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const idleTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
      setMinimised(true);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setMinimised(false), 700);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    setCookieBannerShowing(!window.localStorage.getItem(COOKIE_STORAGE_KEY));
    const onConsent = () => setCookieBannerShowing(false);
    window.addEventListener("apex-cookie-consent", onConsent);
    return () => window.removeEventListener("apex-cookie-consent", onConsent);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 22 }}
          className={`fixed right-4 sm:right-6 z-50 flex items-center gap-2 transition-[bottom] duration-300 ${
            cookieBannerShowing ? "bottom-40 sm:bottom-28" : "bottom-5"
          }`}
        >
          <Link to="/contact?type=demo" aria-label="Book a Demo">
            <motion.div
              animate={{ width: minimised ? 44 : "auto", paddingLeft: minimised ? 0 : undefined }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              {/* Lower-emphasis outline treatment — deliberately not a filled circle,
                  so this never reads as the platform's plain-filled Lucy floating
                  control. This is a commercial CTA, not a Lucy touchpoint. */}
              <Button className="bg-canvas/90 backdrop-blur-sm text-teal border-2 border-teal hover:bg-teal/10 font-bold shadow-xl h-11 rounded-full text-sm whitespace-nowrap px-0 focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
                <span className={`flex items-center justify-center transition-all duration-200 ${minimised ? "w-11" : "px-5"}`}>
                  <Calendar className="w-4 h-4 shrink-0" />
                  <AnimatePresence>
                    {!minimised && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-2 overflow-hidden"
                      >
                        Book a Demo
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </Button>
            </motion.div>
          </Link>
          {!minimised && (
            <button
              onClick={() => setDismissed(true)}
              className="w-8 h-8 rounded-full bg-canvas/90 text-ink-secondary hover:text-ink flex items-center justify-center border border-hairline/15 shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
