import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileEdit, Search, Eye, MessageSquareText, AlertTriangle, UserCheck, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: FileEdit,
    title: "Drafts",
    description: "Lucy prepares the first version of RAMS, reports and documentation — ready for your team to check.",
  },
  {
    icon: Search,
    title: "Finds",
    description: "Ask for a certificate, a policy, a past inspection — Lucy surfaces it in seconds, not a folder search.",
  },
  {
    icon: Eye,
    title: "Monitors",
    description: "Certificates, deadlines and site activity are watched continuously, not checked once a quarter.",
  },
  {
    icon: MessageSquareText,
    title: "Explains",
    description: "Plain-language answers about your compliance position — no need to interpret a dashboard yourself.",
  },
  {
    icon: AlertTriangle,
    title: "Flags Risk",
    description: "Emerging risk is surfaced early, while there's still time to act on it.",
  },
  {
    icon: UserCheck,
    title: "Humans Approve",
    description: "Lucy prepares and monitors. Your competent people always make the final call.",
  },
];

// Representative card surface for Batch 3 — this section is fully
// theme-reactive (canvas/surface/ink tokens) to demonstrate the Day/Night
// system on a normal content section, distinct from Lucy's own frozen
// Hero/Meet-Lucy atmospheric backdrop.
export default function WhySection() {
  return (
    <section className="py-24 bg-canvas relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-teal-400/30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">Why Lucy Matters</span>
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">
            Lucy Never Replaces<br className="hidden md:block" /> Competent People.
          </h2>
          <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
            She helps them work faster — handling the watching and the searching, so your team can focus on judgement calls only people should make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-2xl p-7 border border-hairline/10 hover:border-teal/30 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-teal/12">
                <p.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-ink font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-ink-secondary text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/vision" className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold hover:gap-2.5 transition-all">
            Read why Lucy exists <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
