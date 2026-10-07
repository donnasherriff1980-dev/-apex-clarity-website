import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Founder-led onboarding is the differentiator a reseller cannot copy, so it
// gets its own block with a named person.
//
// PHOTO REPLACE POINT: FOUNDER_PHOTO is null until a genuine photograph is
// supplied. While null, a plain initials badge renders. Drop the file into
// public/brand/ (for example /brand/donna-sherriff.jpg) and set the path.
const FOUNDER_PHOTO = null;

const POINTS = [
  "Founder-led onboarding.",
  "Direct support from the people who built it.",
  "Optional hands-on H&S support, separately scoped and quoted.",
  "Set up around how your business actually works.",
];

export default function FounderSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[minmax(0,1fr)_280px] gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">How we work with you</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mb-6">
              You won&apos;t be handed a login and left to figure it out.
            </h2>
            <ul className="space-y-3 mb-8">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink">
                  <span className="w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal" />
                  </span>
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink-secondary leading-relaxed">
              Donna leads every onboarding personally, backed by direct support from the Kenvio team.
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
            data-founder-photo={FOUNDER_PHOTO ? "set" : "pending"}
          >
            {FOUNDER_PHOTO ? (
              <img
                src={FOUNDER_PHOTO}
                alt="Donna Sherriff, Founder of Kenvio"
                className="w-56 h-56 rounded-3xl object-cover border border-hairline/10 shadow-xl"
                loading="lazy"
              />
            ) : (
              <div
                className="w-56 h-56 rounded-3xl bg-surface-raised border border-hairline/10 shadow-xl flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-5xl font-black text-teal">DS</span>
              </div>
            )}
            <figcaption className="mt-4">
              <p className="font-bold text-ink">Donna Sherriff</p>
              <p className="text-sm text-ink-secondary">Founder, Kenvio</p>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
