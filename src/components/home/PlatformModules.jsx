import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { SOLUTIONS } from "@/lib/solutions";

// The six modules that carry the Health & Safety story, in the order a
// contractor meets them on a job. Content comes from the shared solutions
// catalogue so this section cannot drift from /solutions.
//
// The previous version of this section rendered seven simulated product
// screenshots — invented client names, invented filenames, invented KPI
// bars and a fabricated "+12%" trend. Those were removed: real screenshots
// are being captured from the platform and will take their place here.
const FEATURED = ["risk-assessments", "rams", "permits", "toolbox-talks", "competence", "emergency-arrangements"];
const panels = FEATURED.map((slug) => SOLUTIONS.find((s) => s.slug === slug)).filter(Boolean);

export default function PlatformModules() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">The Platform</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The evidence a contract audit<br className="hidden md:block" /> actually asks for.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Six modules, one way of working. Drafted, reviewed, approved and issued — then replaced by a new version rather than quietly overwritten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {panels.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.06, 0.3) }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-white/8 hover:border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center shrink-0`}>
                  <p.icon className={`w-5 h-5 ${p.color}`} />
                </div>
                <h3 className="text-white font-bold leading-tight">{p.title}</h3>
              </div>

              <p className="text-white/45 text-sm leading-relaxed mb-5">{p.summary}</p>

              <div className="space-y-2 mb-5">
                {p.benefits.slice(0, 3).map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <div className={`w-1 h-1 rounded-full shrink-0 ${p.color.replace("text-", "bg-")}`} />
                    <span className="text-white/55 text-xs">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3">
                <Link to={`/solutions/${p.slug}`} className={`text-xs font-semibold ${p.color} inline-flex items-center gap-1 hover:gap-1.5 transition-all`}>
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
                {p.lucy && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal-200 bg-teal-400/10 border border-teal-300/20 rounded-full px-2 py-0.5 shrink-0">
                    <Sparkles className="w-2.5 h-2.5" /> Lucy assists
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/platform">
            <Button className="bg-teal text-canvas hover:bg-teal/90 font-bold h-12 px-8 rounded-xl">
              Explore the Full Platform <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
