import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";
import { SCREENSHOTS, Screenshot } from "@/lib/screenshots.jsx";

// Hero: one promise, one primary action, then the real product. The Lucy
// orb lives in its own compact section further down the page.
export default function HeroSection() {
  useDeclareHeaderSurface("dark");
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Lucy's world — the app's own background treatment, not a website invention */}
      <div className="absolute inset-0 lucy-water" />
      <div className="absolute inset-0 lucy-overlay" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-12 lg:pt-36 lg:pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">Built for UK contractors</span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Run the work.
            <br />
            <span className="gradient-text-brand">Know where every job stands.</span>
          </h1>

          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            One operational view of the work, the people, the approvals and the evidence. For contractors who have
            outgrown spreadsheets, without the weight of an enterprise construction platform or the narrowness of an
            H&amp;S-only system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=demo">
              <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-8 text-base rounded-2xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas w-full sm:w-auto">
                Book a 30-minute operational review
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/platform#see-kenvio-working">
              <Button size="lg" variant="outline" className="border-hairline/15 text-white hover:bg-hairline/8 h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                See Kenvio in action
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Real product: the Home view from the live demo environment. */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-14 lg:mt-16 max-w-6xl mx-auto"
        >
          <Screenshot shot={SCREENSHOTS.home} />
        </motion.div>
      </div>
    </section>
  );
}
