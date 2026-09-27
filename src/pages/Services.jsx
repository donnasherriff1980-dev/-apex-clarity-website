import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import SEO from "@/components/common/SEO";
import { SOLUTIONS_BY_SLUG } from "@/lib/solutions";

// The overview is organised around what the platform does for an operation.
// Health & Safety is one group of four, not the page's spine; module depth
// stays on the individual /solutions/:slug pages.
const GROUPS = [
  { label: "Run the work", title: "Projects, jobs and actions", blurb: "The operational spine everything else attaches to.", slugs: ["projects"] },
  { label: "Keep the evidence", title: "Documents and people", blurb: "Controlled documents and competence evidence held against the work.", slugs: ["documents", "competence"] },
  { label: "Govern it", title: "Approvals and control of work", blurb: "Recorded decisions, permits through their full life, and one view of what is outstanding.", slugs: ["audits", "permits"] },
  { label: "Health & Safety controls", title: "Built into the platform", blurb: "H&S records governed on the same lifecycle as everything else.", slugs: ["health-safety", "risk-assessments", "rams", "toolbox-talks", "emergency-arrangements"] },
];
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

export default function Solutions() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Solutions"
        description="Every Kenvio capability, grouped by what it does: running the work, keeping the evidence, governing approvals and permits, and the health and safety controls built into the platform."
        path="/solutions"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Solutions</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Everything Kenvio does, by area</h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Kenvio runs the work and keeps the evidence. Every capability below is live today and shares one controlled lifecycle. Health and safety is one group of it, not the whole of it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="mb-6">
                <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-1">{g.label}</span>
                <h2 className="text-2xl md:text-3xl font-black text-ink">{g.title}</h2>
                <p className="text-ink-secondary text-sm mt-1 max-w-2xl">{g.blurb}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {g.slugs.map((slug) => SOLUTIONS_BY_SLUG[slug]).filter(Boolean).map((s, i) => (
                  <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.04, 0.2) }}
                    className="bg-surface-raised rounded-2xl border border-hairline/10 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className={`h-1 bg-gradient-to-r ${s.accent}`} />
                    <div className="p-7 flex gap-5 items-start">
                      <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center shrink-0`}>
                        <s.icon className={`w-5 h-5 ${s.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                          <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                          {s.lucy && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal bg-teal/10 border border-teal/20 rounded-full px-2 py-0.5">
                              <Sparkles className="w-2.5 h-2.5" /> Lucy assists
                            </span>
                          )}
                        </div>
                        <p className="text-ink-secondary text-sm leading-relaxed mb-4">{s.summary}</p>
                        <Link to={`/solutions/${s.slug}`} className="inline-flex items-center gap-1 text-teal text-sm font-semibold hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">See It On Your Own Work</h2>
          <p className="text-white/50 mb-8">See these working together on the <Link to="/platform#see-kenvio-working" className="text-teal hover:underline">Platform page</Link>, or book a demo on a job that looks like yours.</p>
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
