import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import SEO from "@/components/common/SEO";
import { SOLUTIONS } from "@/lib/solutions";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

// The lifecycle governed records move through. Verified against the platform
// entity schemas: draft -> review -> approved is shared by every governed
// record; the live state is "issued" (risk assessments, method statements,
// toolbox talks, emergency arrangements, permits) or "active" (competence
// requirements, permit templates); the end state is supersession/archival,
// except permits, which suspend, cancel or close via hand-back rather than
// superseding. Do not flatten this into "everything supersedes" — it is not
// what the Permit entity does.
//
// This replaced fabricated percentage bars under a "Live data · Connected"
// indicator, which implied a live tenant connection that never existed.
const LIFECYCLE = [
  { stage: "Draft", note: "Authored, not yet submitted for review" },
  { stage: "In review", note: "With a reviewer; comments do not change the stage" },
  { stage: "Approved", note: "Rejection or requested changes carry a recorded reason" },
  { stage: "Issued / active", note: "The live version site teams work to" },
  { stage: "Ended", note: "Superseded or archived — permits close with a hand-back" },
];

const tabs = SOLUTIONS.filter((s) =>
  ["health-safety", "risk-assessments", "rams", "permits", "toolbox-talks", "competence"].includes(s.slug)
);

export default function Platform() {
  useDeclareHeaderSurface("dark");
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <>
      <SEO
        title="The Platform"
        description="Health & safety governance for UK social-housing retrofit and M&E contractors — risk assessments, RAMS, permits, toolbox talks, competence and emergency arrangements on one controlled lifecycle."
        path="/platform"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">The Platform</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">One Lifecycle.<br />Every Record.</h1>
            <p className="text-xl text-white/50">
              Risk assessments, RAMS, permits, toolbox talks, competence evidence and emergency arrangements are all authored, reviewed and approved the same way — so the evidence behind a job is provable, not assembled afterwards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The lifecycle — the spine of the product */}
      <section className="py-20 bg-brand-dark border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs font-bold text-teal uppercase tracking-widest mb-8 text-center">The Controlled Lifecycle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {LIFECYCLE.map((l, i) => (
              <motion.div
                key={l.stage}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider">Stage {i + 1}</span>
                <p className="text-white font-bold mt-1.5 mb-2">{l.stage}</p>
                <p className="text-white/45 text-xs leading-relaxed">{l.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 mb-12 justify-start lg:justify-center overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap">
            {tabs.map((t, i) => (
              <button key={t.slug} onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                  activeTab === i ? "bg-teal text-canvas shadow-lg" : "bg-surface-raised text-ink-secondary hover:bg-hairline/8"
                }`}>
                <t.icon className={`w-4 h-4 ${activeTab === i ? "text-canvas" : ""}`} />
                {t.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className={`w-14 h-14 rounded-2xl ${tab.bg} flex items-center justify-center mb-6`}>
                  <tab.icon className={`w-7 h-7 ${tab.color}`} />
                </div>
                <h2 className="text-3xl font-black text-ink mb-4">{tab.title}</h2>
                <p className="text-ink-secondary leading-relaxed mb-8">{tab.solution}</p>
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {tab.benefits.map(f => (
                    <div key={f} className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-teal shrink-0" /><span className="text-ink-secondary font-medium text-sm">{f}</span></div>
                  ))}
                </div>
                <Link to={`/solutions/${tab.slug}`}>
                  <Button className="bg-ink text-canvas hover:bg-ink/90 rounded-xl">
                    More on {tab.title} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Capability panel. Deliberately NOT a simulated dashboard:
                  product screenshots are being captured from the platform
                  itself and will replace this. Nothing here presents itself
                  as live tenant data. */}
              <div className="bg-brand-dark rounded-3xl p-7 shadow-2xl">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Module</p>
                    <p className="text-white font-bold text-lg mt-1">{tab.title}</p>
                  </div>
                  {tab.lucy && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal-200 bg-teal-400/10 border border-teal-300/25 rounded-full px-2.5 py-1 shrink-0">
                      <Sparkles className="w-2.5 h-2.5" /> Lucy assists
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{tab.summary}</p>
                <div className="space-y-2.5">
                  {tab.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2.5 bg-white/[0.04] border border-white/8 rounded-xl px-3.5 py-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${tab.color.replace("text-", "bg-")}`} />
                      <span className="text-white/70 text-xs font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">See It On Your Own Work</h2>
          <p className="text-white/50 mb-8">A 30-minute walkthrough against a job that looks like yours — not a generic click-through.</p>
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
