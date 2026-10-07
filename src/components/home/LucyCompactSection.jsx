import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import LucyOrb from "@/components/common/LucyOrb";

// Lucy, compact. Governed assistance: she helps people see what needs
// attention, why it matters and where to go. She never approves, certifies
// or signs anything off. This is the only Lucy block on the homepage.
const LINES = [
  "Drafts first versions of risk assessments and method statements from your hazard library.",
  "Flags what is outstanding, overdue or superseded, and where to go next.",
  "Never approves, certifies or signs anything off. A competent person does that.",
];

export default function LucyCompactSection() {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 lucy-water" />
      <div className="absolute inset-0 lucy-overlay" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <LucyOrb size={120} className="shrink-0" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-3 block">Lucy</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-5">Lucy, the governed assistant inside Kenvio.</h2>
            <ul className="space-y-3">
              {LINES.map((l) => (
                <li key={l} className="flex items-start gap-3 text-white/75">
                  <span className="w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal" />
                  </span>
                  <span className="text-sm md:text-base leading-relaxed">{l}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
