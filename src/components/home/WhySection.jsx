import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileEdit, ClipboardList, FileCheck2, Eye, AlertTriangle, UserCheck, ArrowRight } from "lucide-react";

/**
 * Lucy's claims on this site are deliberately narrow.
 *
 * Lucy ships field assistance on Risk Assessments and Method Statements,
 * and scope guidance on Permit Templates. That is the whole of it today.
 *
 * Surfacing overdue reviews, expiring permits, missing attendance and
 * competence evidence gaps is the platform's governance overview doing the
 * work — not Lucy — so it is attributed to the platform below. The previous
 * version of this section credited Lucy with continuous monitoring,
 * document retrieval and plain-language explanation of a compliance
 * position; none of those are shipped, and they have been removed.
 */
const lucyToday = [
  {
    icon: FileEdit,
    title: "Drafting assistance on risk assessments",
    description: "Lucy helps get a first version down, working from your hazard library. A competent person still writes, reviews and approves it.",
  },
  {
    icon: ClipboardList,
    title: "Drafting assistance on method statements",
    description: "The same assistance on method statements and the RAMS packs they combine into.",
  },
  {
    icon: FileCheck2,
    title: "Scope guidance on permit templates",
    description: "Lucy assists when a permit template's scope is being defined — not when a live permit is issued.",
  },
];

const platformDoes = [
  {
    icon: Eye,
    title: "The platform surfaces what is outstanding",
    description: "Drafts, items awaiting review, items approved but not issued, overdue reviews, expiring permits, pending hand-backs, missing attendance and competence evidence gaps.",
  },
  {
    icon: AlertTriangle,
    title: "The platform warns on superseded links",
    description: "When a linked record moves to superseded or archived, the records pointing at it raise a warning rather than carrying on quietly.",
  },
  {
    icon: UserCheck,
    title: "People approve. Always.",
    description: "Lucy does not approve, certify or sign anything off. The governance overview states plainly that it is not a compliance score and that every item needs human review.",
  },
];

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
            We would rather tell you exactly what she does today than imply she does more. Here is the honest split.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <h3 className="text-xs font-bold text-teal uppercase tracking-widest mb-5">What Lucy Does Today</h3>
            <div className="space-y-4">
              {lucyToday.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-surface rounded-2xl p-6 border border-teal/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 bg-teal/12">
                    <p.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h4 className="text-ink font-bold mb-2 leading-snug">{p.title}</h4>
                  <p className="text-ink-secondary text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-ink-secondary uppercase tracking-widest mb-5">What The Platform Does</h3>
            <div className="space-y-4">
              {platformDoes.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-surface rounded-2xl p-6 border border-hairline/10 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 bg-hairline/10">
                    <p.icon className="w-5 h-5 text-ink-secondary" />
                  </div>
                  <h4 className="text-ink font-bold mb-2 leading-snug">{p.title}</h4>
                  <p className="text-ink-secondary text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
