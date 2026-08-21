import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const problems = [
  "Missed certificates",
  "Failed audits",
  "Lost contracts",
  "Paper systems",
  "Too many spreadsheets",
  "Disconnected software",
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-light">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-gold uppercase tracking-widest mb-4 block">The Reality</span>
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-12">
          It usually starts small.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14 max-w-2xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-border text-left transition-shadow duration-300 hover:shadow-lg hover:border-red-200/60"
            >
              <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <span className="text-brand-mid text-sm font-medium">{p}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/50 to-gold mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-bold text-brand-dark leading-snug">
            Apex Clarity replaces chaos<br className="hidden md:block" /> with certainty.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
