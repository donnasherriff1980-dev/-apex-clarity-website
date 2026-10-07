import React from "react";
import { motion } from "framer-motion";
import { TIERS } from "@/lib/pricing";

// The questions directors actually ask before a demo, answered plainly.
// Prices come from the single pricing source so this cannot drift.
function priceLine() {
  const named = TIERS.filter((t) => t.price !== "Talk to us");
  return named.map((t) => `${t.name} ${t.price}`).join(", ");
}

const FAQS = [
  {
    q: "Is this just another H&S system?",
    a: "No. Health and safety is one of five areas. Kenvio runs the job, the people, the approvals and the commercial record as well, in the same place.",
  },
  {
    q: "How long does onboarding take?",
    a: "We onboard Kenvio with you and can bring jobs across in stages, rather than forcing a big-bang change.",
  },
  {
    q: "Can subcontractors and clients use it?",
    a: "Yes. Contractor and client roles see only what you give them access to.",
  },
  {
    q: "What does it cost?",
    a: `${priceLine()} per month + VAT. We'll recommend the right plan based on your team and operation. Enterprise is priced on request, and hands-on H&S support is scoped and quoted separately.`,
  },
  {
    q: "Do I have to move everything on day one?",
    a: "No. Bulk import brings your existing documents in, and jobs can start in Kenvio one at a time.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-canvas">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">Before you book</span>
          <h2 className="text-3xl md:text-4xl font-black text-ink">Questions directors ask us.</h2>
        </div>
        <dl className="space-y-4">
          {FAQS.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-surface-raised rounded-2xl p-6 border border-hairline/10"
            >
              <dt className="font-bold text-ink mb-2">{f.q}</dt>
              <dd className="text-ink-secondary leading-relaxed">{f.a}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
