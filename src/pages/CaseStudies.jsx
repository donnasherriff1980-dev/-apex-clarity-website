import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, Shield, TrendingUp } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const framework = [
  {
    icon: Shield,
    stage: "Where businesses usually start",
    detail: "Compliance evidence scattered across paper, spreadsheets and inboxes. Certificates tracked from memory. Audits mean a scramble.",
  },
  {
    icon: ClipboardCheck,
    stage: "What we implement",
    detail: "A live platform matched to how the business actually works, with Lucy watching compliance, documents and deadlines continuously.",
  },
  {
    icon: TrendingUp,
    stage: "What changes",
    detail: "Evidence is ready before it's asked for. Leadership can see real operational status without chasing anyone for it.",
  },
];

export default function CaseStudies() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Case Studies"
        description="How Apex Clarity approaches implementation for construction, retrofit and facilities management businesses — and what changes once the platform is live."
        path="/case-studies"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Case Studies</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Published Case Studies<br />Are On Their Way.</h1>
            <p className="text-xl text-white/50">
              We're compiling detailed, named case studies from our current engagements. In the meantime, here's honestly how a typical implementation goes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {framework.map((f, i) => (
              <motion.div key={f.stage} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-surface-raised rounded-2xl p-8 border border-hairline/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-teal" />
                </div>
                <p className="text-xs font-bold text-teal uppercase tracking-widest mb-3">Step {i + 1}</p>
                <h3 className="font-bold text-ink mb-3">{f.stage}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{f.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Want to Be Our Next One?</h2>
          <p className="text-white/50 mb-8">Book a demo and we'll walk through what an implementation would look like for your business.</p>
          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 rounded-2xl">
              Book Free Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
