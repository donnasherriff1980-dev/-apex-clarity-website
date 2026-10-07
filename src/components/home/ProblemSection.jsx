import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

// Four recognisable failures, each answered by what Kenvio does today.
// Every answer is a live capability on the platform; nothing here is roadmap.
const PAIRS = [
  {
    problem: "RAMS, permits, evidence and approvals chased by email and WhatsApp.",
    answer: "One governed record from job set-up to sign-off, with every approval and its reason recorded.",
  },
  {
    problem: "Training and competence scattered across folders, expiring unnoticed.",
    answer: "Competence by role, inductions by QR code, and expiry surfaced before the person is on site.",
  },
  {
    problem: "Site issues, inspections and actions discovered too late.",
    answer: "Inspections and incidents logged from the phone, actions with owners and due dates, and a notification when something is waiting on you.",
  },
  {
    problem: "No single view of what the job is, who is on it, what is approved and what it is costing.",
    answer: "Job, site, people, documents, controls and the commercial record on one screen.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">The Reality</span>
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">
            Your operation shouldn&apos;t live across five systems and three spreadsheets.
          </h2>
          <p className="text-ink-secondary max-w-2xl mx-auto">
            Contractors rarely lose work because the work was bad. They lose it because nobody could show, on the day
            they were asked, what was done, who did it, what was approved and what it cost.
          </p>
        </div>

        <div className="space-y-3">
          {PAIRS.map((p, i) => (
            <motion.div
              key={p.problem}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid md:grid-cols-2 gap-3"
            >
              <div className="flex items-start gap-3 bg-surface-raised rounded-xl px-5 py-4 border border-hairline/10">
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-400" />
                </div>
                <span className="text-ink-secondary text-sm font-medium leading-snug">{p.problem}</span>
              </div>
              <div className="flex items-start gap-3 bg-teal/5 rounded-xl px-5 py-4 border border-teal/20">
                <div className="w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-teal" />
                </div>
                <span className="text-ink text-sm font-medium leading-snug">{p.answer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
