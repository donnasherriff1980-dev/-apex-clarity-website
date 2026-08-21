import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "apex_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    if (!existing) setVisible(true);
  }, []);

  const choose = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent("apex-cookie-consent", { detail: value }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 22 }}
          className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto glass rounded-2xl border border-white/15 p-5 sm:p-6 shadow-2xl bg-brand-dark/95">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <p className="text-sm text-white/70 leading-relaxed">
                  We use essential cookies to run this site. We do not currently run analytics or advertising cookies.{" "}
                  <Link to="/cookie-policy" className="text-teal hover:underline">Read our Cookie Policy</Link>.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  onClick={() => choose("rejected")}
                  variant="outline"
                  className="border-white/15 text-white hover:bg-white/8 h-9 text-xs px-4 rounded-lg"
                >
                  Decline
                </Button>
                <Button
                  onClick={() => choose("accepted")}
                  className="bg-teal text-canvas hover:bg-teal/90 font-semibold h-9 text-xs px-4 rounded-lg"
                >
                  Got it
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
