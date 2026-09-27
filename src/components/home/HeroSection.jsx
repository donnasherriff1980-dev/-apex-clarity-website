import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import LucyOrbLive from "@/components/common/LucyOrbLive";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

export default function HeroSection() {
  useDeclareHeaderSurface("dark");
  return (
    <section className="relative lg:min-h-screen bg-brand-dark flex items-center overflow-hidden">
      {/* Lucy's world — the app's own background treatment, not a website invention */}
      <div className="absolute inset-0 lucy-water" />
      <div className="absolute inset-0 lucy-overlay" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Orb — first on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-2 flex items-center justify-center"
          >
            <LucyOrbLive size="clamp(160px, 38vw, 340px)" />
          </motion.div>

          {/* Text — second on mobile, left column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="order-1 lg:order-1"
          >
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">The Operational Control Platform</span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Control the work.
              <br />
              <span className="gradient-text-brand">Keep the evidence.</span>
            </h1>

            <p className="text-lg text-white/55 leading-relaxed max-w-xl mb-10">
              Kenvio is the operational control platform for UK contractors. Run projects, sites and jobs, drive the work through actions, keep people, documents and approvals connected — and hold your H&amp;S controls in the same system, with the review and approval history recorded as you go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/platform#see-kenvio-working">
                <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-8 text-base rounded-2xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas w-full sm:w-auto">
                  See Kenvio working
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact?type=demo">
                <Button size="lg" variant="outline" className="border-hairline/15 text-white hover:bg-hairline/8 h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-teal rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
