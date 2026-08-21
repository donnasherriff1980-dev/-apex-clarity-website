import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ShieldAlert, FileText, Briefcase, BarChart3, X, GraduationCap, ArrowRight } from "lucide-react";
import SEO from "@/components/common/SEO";
import CTASection from "@/components/home/CTASection";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const fragmentedSystems = [
  { icon: Users, label: "Customers" },
  { icon: ShieldAlert, label: "Health & Safety" },
  { icon: FileText, label: "Documents" },
  { icon: Briefcase, label: "Jobs" },
  { icon: BarChart3, label: "Reporting" },
];

export default function About() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Our Story"
        description="Why Apex Clarity exists — built from years working in construction, renewable energy and retrofit, not from a boardroom."
        path="/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Our Story</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              We didn&apos;t build Apex Clarity because the industry needed another piece of software.
              <br /><br />
              <span className="gradient-text-brand">We built it because the people doing the work deserved something better.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* The problem I saw */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-ink leading-relaxed mb-10">
            Apex Clarity wasn&apos;t created because I wanted to build another CRM. It was created because I spent years working in construction, renewable energy and retrofit, and saw the same problems in businesses of every size.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="border-l-2 border-teal pl-6 md:pl-8 py-2 my-12"
          >
            <p className="text-2xl md:text-3xl font-bold text-ink leading-snug">
              Good people were trying to do the right thing, but they were fighting paperwork instead of doing their jobs.
            </p>
          </motion.blockquote>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg text-ink-secondary leading-relaxed mb-10">
            Small businesses were expected to meet the same compliance standards as much larger organisations, yet they rarely had the budget, the dedicated teams or the systems to support them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-surface-raised rounded-3xl p-8 md:p-10 border border-hairline/10 shadow-sm"
          >
            <p className="text-lg text-ink leading-relaxed font-medium">
              I worked in one of those businesses. I understand what it&apos;s like when deadlines are tight, paperwork is everywhere and everyone is trying to remember what still needs to be done.
              <br /><br />
              I wanted to build something that genuinely helped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Five systems, one job */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg text-white/60 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            While researching the industry, I realised another problem. Most companies needed four or five different software systems just to manage one project.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12 max-w-3xl mx-auto">
            {fragmentedSystems.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-5 text-center"
              >
                <s.icon className="w-5 h-5 text-white/40" />
                <span className="text-white/60 text-xs font-medium">{s.label}</span>
                <X className="w-3 h-3 text-red-400/60" />
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white/60 leading-relaxed text-center max-w-2xl mx-auto mb-14">
            Nothing truly worked together. Instead of helping people, these systems created duplicated work, more administration and more opportunities for something important to be missed.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-teal/50 to-teal mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug max-w-2xl mx-auto">
              That&apos;s when Apex Clarity became much more than another compliance platform.
              <br />
              <span className="gradient-text-brand">It became a complete operational platform.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built on real experience */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-start gap-4 bg-surface-raised rounded-2xl p-6 border border-hairline/10 shadow-sm mb-14"
          >
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-teal" />
            </div>
            <p className="text-ink-secondary leading-relaxed">
              Smaller businesses were often the ones struggling hardest with this — the standards didn&apos;t shrink to match the budget. That&apos;s part of what motivated me to enrol on my NEBOSH qualification while continuing to build Apex Clarity, so I understood Health &amp; Safety properly myself, not just the software around it.
            </p>
          </motion.div>

          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-2xl md:text-4xl font-black text-ink leading-snug mb-3">
              Every workflow has been designed around how construction, retrofit, facilities management and property services companies actually work.
            </p>
            <p className="text-xl md:text-2xl font-bold text-teal">
              Not how software companies think they should work.
            </p>
          </motion.blockquote>

          <div className="text-center mt-14">
            <Link to="/vision" className="inline-flex items-center gap-2 text-ink font-semibold hover:gap-3 transition-all border-b-2 border-teal pb-1">
              Read our vision for the industry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
