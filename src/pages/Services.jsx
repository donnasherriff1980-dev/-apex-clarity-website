import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import SEO from "@/components/common/SEO";
import { SOLUTIONS } from "@/lib/solutions";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

export default function Solutions() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Solutions"
        description="Risk assessments, RAMS, permits and control of work, toolbox talks, competence evidence, COSHH and emergency arrangements — the H&S governance modules Apex Clarity ships today."
        path="/solutions"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Our Solutions</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">The Evidence Your Contracts Depend On</h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Every module below runs on the same controlled lifecycle — drafted, reviewed, approved, issued, and superseded rather than overwritten. Built for UK social-housing retrofit and M&amp;E contractors who have to prove it, not just do it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {SOLUTIONS.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.04, 0.2) }}
              className="bg-surface-raised rounded-2xl border border-hairline/10 hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className={`h-1 bg-gradient-to-r ${s.accent}`} />
              <div className="p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center shrink-0`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <h2 className="text-xl font-bold text-ink">{s.title}</h2>
                    {s.lucy && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal bg-teal/10 border border-teal/20 rounded-full px-2 py-0.5">
                        <Sparkles className="w-2.5 h-2.5" /> Lucy assists
                      </span>
                    )}
                  </div>
                  <p className="text-ink-secondary text-sm leading-relaxed mb-4">{s.summary}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {s.benefits.slice(0, 4).map(b => (
                      <div key={b} className="flex items-center gap-2 text-xs text-ink-secondary font-medium">
                        <div className="w-1 h-1 rounded-full bg-teal shrink-0" />{b}
                      </div>
                    ))}
                  </div>
                </div>
                <Link to={`/solutions/${s.slug}`} className="shrink-0">
                  <Button variant="outline" className="border-hairline/20 text-ink hover:bg-ink hover:text-canvas rounded-xl text-sm h-9">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">See It On Your Own Work</h2>
          <p className="text-white/50 mb-8">Book a demo and we&apos;ll walk these modules through a job that looks like yours.</p>
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
