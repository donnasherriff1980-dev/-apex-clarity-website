import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Settings2, ClipboardCheck, ShieldCheck } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

/**
 * Previously titled "Published Case Studies Are On Their Way" — a page whose
 * headline advertised the absence of customers. Reframed around what an
 * implementation actually involves, which is the question a prospect is
 * really asking at this point in the journey. Route kept for link stability.
 *
 * No customer names, logos, quotes or outcome figures appear here, because
 * there are none to publish yet. Nothing on this page implies otherwise.
 */
const steps = [
  {
    icon: Search,
    title: "We map how you evidence work today",
    detail: "Where your RAMS actually live, who approves them, how a permit gets closed out, and what a client audit currently costs you in hours. Usually a half-day conversation with the people who do it.",
  },
  {
    icon: Settings2,
    title: "We configure, rather than hand you a blank system",
    detail: "Your hazard library, your permit templates, your competence requirements by role, your organisations and sites. Existing documents can be brought in through bulk import rather than re-typed.",
  },
  {
    icon: ClipboardCheck,
    title: "One live job goes through end to end",
    detail: "A real job, start to finish: risk assessment, method statement, RAMS pack, approval, permit, briefing, hand-back. This is where a team decides whether the system fits how they work.",
  },
  {
    icon: ShieldCheck,
    title: "The governance overview becomes the routine",
    detail: "Once records are flowing, the outstanding-items view is the thing managers open. Audit preparation shifts from assembling evidence to reading a list that is already maintained.",
  },
];

export default function CaseStudies() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="How Implementation Works"
        description="What implementing Apex Clarity involves for a UK social-housing retrofit or M&E contractor — mapping how you evidence work today, configuring your libraries and templates, and running one live job end to end."
        path="/case-studies"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">How It Works</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">What Getting Started<br />Actually Looks Like.</h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Four stages, no big-bang rollout. We would rather one job went through the system properly than fifty went through it badly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-surface-raised rounded-2xl p-8 border border-hairline/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-teal" />
                </div>
                <p className="text-xs font-bold text-teal uppercase tracking-widest mb-3">Stage {i + 1}</p>
                <h2 className="font-bold text-ink mb-3 leading-snug">{f.title}</h2>
                <p className="text-sm text-ink-secondary leading-relaxed">{f.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-12 bg-surface-raised rounded-2xl p-8 border border-teal/20">
            <p className="text-ink leading-relaxed">
              <span className="font-bold">On customer references:</span>{" "}
              Apex Clarity is early. We are working with our first contractors now, and we will publish named case studies with their agreement when there is something real to show — not composite examples or figures we cannot stand behind. If you want to speak to someone using it, ask on the demo and we will tell you honestly where we are.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Start With One Job</h2>
          <p className="text-white/50 mb-8">Book a demo and we will walk your own workflow through the platform.</p>
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
