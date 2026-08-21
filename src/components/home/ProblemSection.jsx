import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Sector-specific failure modes. Previously this was a generic list
// ("Missed certificates", "Failed audits", "Paper systems") that could have
// belonged to any compliance vendor. These are the things that actually go
// wrong on a social-housing retrofit or M&E contract.
const problems = [
  "RAMS superseded weeks ago, still on site",
  "Permit extended verbally, hand-back never recorded",
  "Toolbox talk delivered, signing sheet lost",
  "Competence evidence held in someone's inbox",
  "COSHH assessment copied from the last job",
  "Client audit lands, fortnight of evidence-hunting begins",
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">The Reality</span>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">
          The work gets done. The evidence goes missing.
        </h2>
        <p className="text-ink-secondary max-w-2xl mx-auto mb-12">
          Contractors rarely lose a contract because the work was unsafe. They lose it because they could not prove, on the day they were asked, that it was not.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14 max-w-2xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-start gap-2.5 bg-surface-raised rounded-xl px-4 py-3.5 border border-hairline/10 text-left transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <span className="text-ink-secondary text-sm font-medium leading-snug">{p}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-teal/50 to-teal mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-bold text-ink leading-snug">
            Apex Clarity makes the evidence<br className="hidden md:block" /> a by-product of the work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
