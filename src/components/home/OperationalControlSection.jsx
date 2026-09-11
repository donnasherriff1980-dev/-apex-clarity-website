import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutGrid, ListChecks, ShieldCheck, FileCheck2,
  GraduationCap, Users2, History, Sparkles, ArrowRight,
} from "lucide-react";

/**
 * What Apex Clarity actually is: the system an organisation runs its work and
 * its compliance in. This section exists because the site previously led with
 * an outsourced-H&S proposition and never stated the operational half of the
 * product at all.
 *
 * Every capability below ships today — verified against the platform entity
 * schemas. Nothing here claims the software delivers or certifies compliance:
 * it holds and governs the evidence, and people still approve.
 */
const CAPABILITIES = [
  {
    icon: LayoutGrid,
    title: "Projects, sites and jobs",
    detail: "Your organisations, sites, projects and jobs in one structure — so every record knows the work it belongs to.",
  },
  {
    icon: ListChecks,
    title: "Actions and work management",
    detail: "Work raised as actions with an owner and a due date, and a single view of what is outstanding across the business.",
  },
  {
    icon: ShieldCheck,
    title: "H&S governance",
    detail: "Risk assessments, RAMS, permits, toolbox talks and emergency arrangements on one controlled lifecycle: draft, review, approve, issue.",
  },
  {
    icon: FileCheck2,
    title: "Documents and approvals",
    detail: "Document control with expiry dates, and an approvals queue where every decision carries a recorded reason.",
  },
  {
    icon: GraduationCap,
    title: "Competence and evidence",
    detail: "Competence requirements and evidence records with expiry dates, so you know who is qualified to do what, today.",
  },
  {
    icon: Users2,
    title: "Contractor compliance",
    detail: "Contractor and supply-chain records held in the same system as the work, rather than tracked from memory.",
  },
  {
    icon: History,
    title: "Audit trail and proof",
    detail: "A full audit trail behind every governed record — issued versions are replaced, not quietly overwritten.",
  },
  {
    icon: Sparkles,
    title: "Lucy, your governed AI assistant",
    detail: "Lucy helps your people draft risk assessments and method statements. She does not advise, approve or sign anything off — a competent person does.",
  },
];

export default function OperationalControlSection() {
  return (
    <section className="py-24 lg:py-32 bg-canvas relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">Operational Control</span>
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">
            One platform to control the work,<br className="hidden md:block" /> manage compliance and hold the evidence.
          </h2>
          <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
            Apex Clarity is the system your teams work in day to day — not a folder you fill in afterwards. The
            compliance record is produced by running the job, which is why it is there when someone asks for it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              whileHover={{ y: -4 }}
              className="bg-surface-raised rounded-2xl p-6 border border-hairline/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-bold text-ink mb-2 leading-snug">{c.title}</h3>
              <p className="text-ink-secondary text-sm leading-relaxed">{c.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
          <Link to="/platform" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all">
            Explore the platform <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 text-ink-secondary font-semibold text-sm hover:text-ink hover:gap-3 transition-all">
            See pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
