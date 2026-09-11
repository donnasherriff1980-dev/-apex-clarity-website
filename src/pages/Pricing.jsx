import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check, Info, LifeBuoy } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";
import {
  PRICING_POSITIONING, TIERS, SUBSCRIPTION_INCLUDES,
  SUBSCRIPTION_EXCLUSION_STATEMENT, PRICING_NOTES,
} from "@/lib/pricing";

const DEMO = "/contact?type=demo";

function SectionLabel({ children }) {
  return <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">{children}</span>;
}

export default function Pricing() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Pricing"
        description="Apex Clarity software pricing — operational control and compliance software for UK contractors. Core £299, Growth £599, Business £999 per month + VAT, and Enterprise on request."
        path="/pricing"
      />

      {/* 1. Hero */}
      <section className="pt-32 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              One platform for your operations,{" "}
              <span className="gradient-text-brand">your compliance and your evidence.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl">
              {PRICING_POSITIONING.supporting}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={DEMO}>
                <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" /> Book a Demo
                </Button>
              </Link>
              <a href="#included">
                <Button size="lg" variant="outline" className="border-hairline/15 text-white hover:bg-hairline/8 h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                  What is included
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Tiers */}
      <section id="plans" className="scroll-mt-24 py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Software Subscription</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Priced by the size of your operation.</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Every tier is the same platform. What changes is the scale and complexity of the operation it is running.
              We will tell you which one fits before you commit to anything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {TIERS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`rounded-2xl p-6 flex flex-col h-full ${
                  t.featured ? "bg-white/8 border-2 border-teal/40" : "bg-white/5 border border-white/10"
                }`}
              >
                {t.featured && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal mb-3">Most popular</span>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{t.name}</h3>
                <p className="text-white/40 text-xs mb-4">{t.fits}</p>
                <div className="mb-1">
                  <span className="text-3xl font-black text-white">{t.price}</span>
                  {t.period && <span className="text-white/40 text-sm">{t.period}</span>}
                </div>
                <p className="text-white/35 text-[11px] mb-5">{t.vat || "Scoped to your organisation"}</p>
                <p className="text-white/55 text-xs leading-relaxed mb-5">{t.summary}</p>
                <ul className="space-y-2 mb-6">
                  {t.bestFor.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-white/60 leading-snug">
                      <Check className="w-3 h-3 text-teal shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
                <Link to={t.ctaPath} className="mt-auto">
                  <Button className={`w-full font-semibold rounded-xl ${
                    t.featured
                      ? "bg-teal text-canvas hover:bg-teal/90"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/15"
                  }`}>
                    {t.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-white/[0.03] border border-white/8 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-4 h-4 text-teal-300" />
              <h3 className="text-white font-bold text-sm">How our pricing works</h3>
            </div>
            <ul className="space-y-2.5">
              {PRICING_NOTES.map((n) => (
                <li key={n} className="flex items-start gap-2 text-xs text-white/50 leading-relaxed">
                  <div className="w-1 h-1 rounded-full bg-white/30 shrink-0 mt-1.5" />{n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. What every subscription includes */}
      <section id="included" className="scroll-mt-24 py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Included In Every Tier</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">The whole platform, on every plan.</h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              We do not hold core compliance capability back behind a higher tier. Everything below ships today.
            </p>
          </div>

          <div className="bg-surface-raised rounded-2xl p-7 md:p-9 border-2 border-teal/25">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {SUBSCRIPTION_INCLUDES.map((c) => (
                <div key={c} className="flex items-start gap-2.5 text-sm text-ink-secondary leading-snug">
                  <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />{c}
                </div>
              ))}
            </div>
          </div>

          <p className="text-ink-secondary text-sm leading-relaxed mt-6 max-w-3xl">
            Lucy assists your people with drafting risk assessments and method statements, and with scope on permit
            templates. She does not give health and safety advice, she does not approve anything, and she does not
            replace a competent person — your people still author, review and approve every governed record.
          </p>
        </div>
      </section>

      {/* 4. H&S Support — the separate, optional offer */}
      <section className="py-24 bg-canvas">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-surface-raised rounded-3xl p-8 md:p-10 border border-hairline/10 shadow-sm">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-5 h-5 text-teal" />
              </div>
              <div>
                <SectionLabel>Optional</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-black text-ink leading-snug">
                  Need people as well as software?
                </h2>
              </div>
            </div>
            <p className="text-ink-secondary leading-relaxed mb-4">
              <span className="font-semibold text-ink">{SUBSCRIPTION_EXCLUSION_STATEMENT}</span> If you also need
              competent H&amp;S support alongside the platform — documents written or reviewed, inspections, contractor
              checks or someone to call — that is available separately as a scoped engagement.
            </p>
            <p className="text-ink-secondary text-sm leading-relaxed mb-7">
              Support is scoped and quoted for your operation. We do not offer unlimited consultancy, and nothing we
              provide transfers your legal duties as duty holder.
            </p>
            <Link to="/hs-support" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all">
              See how H&amp;S support works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-28 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">See it on your own work.</h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            A 30-minute walkthrough against a job that looks like yours, and an honest answer on which tier fits.
          </p>
          <Link to={DEMO}>
            <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 text-base rounded-2xl">
              <Calendar className="w-5 h-5 mr-2" /> Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <p className="text-white/35 text-sm mt-8">No obligation. No hard sell.</p>
        </div>
      </section>
    </>
  );
}
