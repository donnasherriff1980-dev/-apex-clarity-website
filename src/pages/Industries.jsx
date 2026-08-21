import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/common/SEO";
import { INDUSTRIES } from "@/lib/industries";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

export default function Industries() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Apex Clarity is built for UK social-housing retrofit contractors and M&E contractors, and for the principal contractors, FM providers, renewables installers and specialist subcontractors working alongside them."
        path="/industries"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Industries</span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">Built For Your Sector</h1>
            <p className="text-xl text-white/50 leading-relaxed">
              We build for UK social-housing retrofit and M&amp;E contractors first. Everything below describes the evidence these regimes ask you to produce — Apex Clarity holds and governs that evidence, it does not certify compliance on your behalf.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.slug}
              id={ind.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.2) }}
              className="scroll-mt-28 bg-surface-raised rounded-3xl overflow-hidden border border-hairline/10 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`h-1.5 bg-gradient-to-r ${ind.accent}`} />
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-80 shrink-0">
                    <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${ind.accent} text-white text-sm font-bold px-4 py-2 rounded-2xl mb-4`}>
                      <ind.icon className="w-4 h-4" /> {ind.label}
                    </div>
                    <p className="text-ink-secondary leading-relaxed text-sm">{ind.context}</p>
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-ink-secondary mb-4">What You Have To Prove</h4>
                      <div className="space-y-2.5">
                        {ind.challenges.map(c => (
                          <div key={c} className="flex items-start gap-2 text-sm text-ink-secondary"><div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0 mt-2" />{c}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-ink-secondary mb-4">What Apex Clarity Holds</h4>
                      <div className="space-y-2.5">
                        {ind.evidence.map(s => (
                          <div key={s} className="flex items-start gap-2 text-sm font-medium text-ink"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />{s}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Not Sure You Fit?</h2>
          <p className="text-white/50 mb-8">If your next contract depends on producing evidence someone else will inspect, it is worth a conversation.</p>
          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 rounded-2xl">
              Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
