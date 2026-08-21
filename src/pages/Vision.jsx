import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileEdit, MessageSquareText, FileSearch, AlertTriangle, ClipboardList, Clock, UserCheck } from "lucide-react";
import SEO from "@/components/common/SEO";
import LucyOrb from "@/components/common/LucyOrb";
import CTASection from "@/components/home/CTASection";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const connectedFlow = [
  "From customer enquiry through to project completion.",
  "From Health & Safety to compliance.",
  "From documentation to reporting.",
  "From planning to evidence.",
];

const promises = ["Prove compliance", "Protect contracts", "Reduce risk", "Spend less time chasing paperwork"];

const lucyCapabilities = [
  { icon: FileEdit, label: "Help prepare RAMS" },
  { icon: MessageSquareText, label: "Answer Health & Safety questions" },
  { icon: FileSearch, label: "Identify missing documentation" },
  { icon: AlertTriangle, label: "Highlight compliance gaps" },
  { icon: ClipboardList, label: "Guide site teams through required paperwork" },
  { icon: Clock, label: "Help managers stay ahead of deadlines" },
  { icon: UserCheck, label: "Support competent persons before final approval" },
];

export default function Vision() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Why Apex Clarity Exists"
        description="Why Apex Clarity exists, why Lucy was built, and our vision for construction, retrofit, facilities management and property services businesses."
        path="/vision"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Our Vision</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Why Apex Clarity Exists</h1>
            <p className="text-xl text-white/50">Helping businesses stay organised, compliant and in control.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Apex Clarity exists */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-ink leading-relaxed mb-10 text-center">
            Construction businesses don&apos;t need another disconnected system. They need one platform that connects every stage of a project.
          </motion.p>

          <div className="relative pl-8 mb-12 space-y-6">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-teal/30" />
            {connectedFlow.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-teal border-4 border-surface" />
                <p className="text-lg text-ink-secondary font-medium">{line}</p>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold text-ink text-center mb-14">
            Everything should work together.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-raised rounded-3xl p-8 md:p-10 border border-hairline/10 shadow-sm">
            <p className="text-lg text-ink font-medium leading-relaxed mb-6">
              Apex Clarity exists to replace operational chaos with operational clarity.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {promises.map((p) => (
                <div key={p} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal shrink-0" />
                  <span className="text-ink-secondary font-medium text-sm">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Lucy exists — genuine Lucy attribution throughout; teal/champagne
          treatment here was already correct and is untouched. */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <LucyOrb size={110} className="mb-8" />
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-4 block">Why Lucy Exists</span>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-white leading-snug max-w-xl">
              Lucy wasn&apos;t created to replace people.
              <br />
              <span className="gradient-text-teal">She was created to support them.</span>
            </motion.p>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white/55 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Construction and Health &amp; Safety can be overwhelming, particularly for smaller businesses and less experienced staff. Lucy acts as an intelligent assistant that helps guide people through the work they are already doing.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-3 mb-14 max-w-2xl mx-auto">
            {lucyCapabilities.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <c.icon className="w-4 h-4 text-teal-300 shrink-0" />
                <span className="text-white/70 text-sm font-medium">{c.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-teal-300/20 text-center max-w-2xl mx-auto"
          >
            <p className="text-white font-semibold leading-relaxed">
              Lucy never replaces the competent person. She doesn&apos;t approve, certify or sign work off — that stays with the business and the person responsible for it.
              <br />
              <span className="text-teal-300">Lucy&apos;s job is simply to help make sure nothing important gets missed along the way.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our vision */}
      <section className="py-28 bg-brand-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/8 rounded-full blur-[100px]" />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-8 block">Our Vision</span>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Our vision is simple: every construction, retrofit, facilities management and property services business — regardless of size — deserves software that genuinely helps them work better.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Not more systems. Not more paperwork. Not more administration.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Just one platform that keeps projects organised, helps teams stay compliant, and gives people confidence that nothing important has been missed — because when operations are organised, people can focus on delivering quality work safely.
            </p>
            <p className="text-2xl md:text-3xl font-black gradient-text-brand pt-2">
              That is why Apex Clarity exists.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
