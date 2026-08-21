import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES as industries } from "@/lib/industries";

export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const ind = industries[active];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">Built For Your Sector</span>
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">Who We Build For</h2>
          <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
            Apex Clarity is built for UK social-housing retrofit and M&amp;E contractors first — the sectors where the evidence behind the work is inspected hardest.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-2">
            {industries.map((item, i) => (
              <button
                key={item.label}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 group hover:-translate-y-0.5 ${
                  active === i
                    ? "bg-brand-dark text-white shadow-xl"
                    : "bg-surface-raised hover:shadow-md text-ink-secondary border border-hairline/10"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.accent} shrink-0`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-sm">{item.label}</span>
                {active === i && <ArrowRight className="w-4 h-4 ml-auto text-teal shrink-0" />}
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-dark rounded-3xl p-8 h-full"
              >
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${ind.accent} text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5`}>
                  <ind.icon className="w-4 h-4" />
                  {ind.label}
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl">{ind.context}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">What You Have To Prove</h4>
                    <div className="space-y-3">
                      {ind.challenges.map((c) => (
                        <div key={c} className="flex items-start gap-2 text-white/60 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0 mt-1.5" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">What Apex Clarity Holds</h4>
                    <div className="space-y-3">
                      {ind.evidence.map((s) => (
                        <div key={s} className="flex items-start gap-2 text-white text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/8">
                  <Link to={ind.path} className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all">
                    More on {ind.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
