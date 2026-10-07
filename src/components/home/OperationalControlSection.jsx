import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Users, ShieldCheck, PoundSterling, ListChecks, ArrowRight } from "lucide-react";
import { SCREENSHOTS, Screenshot } from "@/lib/screenshots.jsx";

/**
 * The five operational areas Kenvio connects. Every line describes a
 * capability that is live on the platform today. Commercial is stated as
 * the live job record (contract value, variations, cost entries, committed
 * cost): budget, forecast and margin reporting are not claimed.
 */
const PILLARS = [
  { icon: Briefcase, title: "Work", detail: "Jobs, projects, sites, schedule, drawings, RFIs and submittals." },
  { icon: Users, title: "People", detail: "Competence, inductions, responsibilities and who is on which job." },
  { icon: ShieldCheck, title: "Compliance", detail: "RAMS, risk, COSHH, permits, toolbox talks, inspections, incidents and the evidence behind them." },
  { icon: PoundSterling, title: "Commercial", detail: "Contract value, variations, cost entries and committed cost on the job record." },
  { icon: ListChecks, title: "Control", detail: "Actions, approvals, notifications, audit trail and reports to PDF and CSV." },
];

export default function OperationalControlSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">One operational view</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything the operation runs on, connected.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Five areas, one record of the work. Health and safety sits inside it, governed the same way as everything else.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-teal" />
              </div>
              <h3 className="text-white font-bold text-lg leading-tight mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <Screenshot shot={SCREENSHOTS.healthSafety} />
        </motion.div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
          <Link to="/platform" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all">
            Explore the platform <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 text-white/60 font-semibold text-sm hover:text-white hover:gap-3 transition-all">
            See pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
