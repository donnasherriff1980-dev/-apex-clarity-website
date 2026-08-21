import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { SOLUTIONS } from "@/lib/solutions";
import SEO from "@/components/common/SEO";
import LucyOrb from "@/components/common/LucyOrb";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const modules = SOLUTIONS.slice(0, 8).map((s) => ({ icon: s.icon, label: s.title }));

export default function PlatformTour() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Platform Tour"
        description="A guided look at Apex Clarity — risk assessments, RAMS, permits, toolbox talks, competence and emergency arrangements, walked through live against your own workflow."
        path="/platform-tour"
      />
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Platform Tour</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              See Apex Clarity<br /><span className="gradient-text-brand">Guided, Not Generic</span>
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              We walk every demo through your own operations — so a self-serve click-through wouldn't show you much. Here's what a live tour covers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-dark pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 md:p-14 border border-white/10 flex flex-col items-center text-center"
          >
            <LucyOrb size={130} className="mb-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A 30-minute walkthrough, built around your business</h2>
            <p className="text-white/50 max-w-lg mb-10">
              Tell us about your sites, your team and your compliance headaches — we'll show you exactly how Lucy and the platform handle them.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 w-full max-w-lg">
              {modules.map((m) => (
                <div key={m.label} className="flex flex-col items-center gap-2 bg-white/5 border border-white/8 rounded-xl px-3 py-4">
                  <m.icon className="w-4 h-4 text-teal-300" />
                  <span className="text-white/60 text-[11px] font-medium text-center leading-tight">{m.label}</span>
                </div>
              ))}
            </div>

            {/* CTA is a generic commercial button, not Lucy herself — teal, same as
                every other primary CTA sitewide, even though it sits in her card. */}
            <Link to="/contact?type=demo">
              <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 rounded-2xl">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Live Tour
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-white/25 text-sm mt-5">No obligation · 30 minutes · Tailored to your business</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
