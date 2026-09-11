import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check, X, Info, Users2, Sparkles } from "lucide-react";
import SEO from "@/components/common/SEO";
import LucyOrb from "@/components/common/LucyOrb";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";
import {
  POSITIONING, PROBLEMS, SERVICES, DELIVERY_LABELS, PLATFORM_LIVE,
  CONSULTANCY_DELIVERED, FUTURE_CAPABILITY_NOTE, SECTORS, WHY_APEX,
  ENGAGEMENT_MODEL, SUPPORT_NOTES, SPECIALIST_EXCLUSIONS, COMPETENCE_STATEMENT,
} from "@/lib/consultancy";
import { SUBSCRIPTION_EXCLUSION_STATEMENT } from "@/lib/pricing";

const CTA = "/contact?type=consultation";

function SectionLabel({ children }) {
  return <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">{children}</span>;
}

export default function HSSupport() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="H&S Support"
        description="Optional health, safety and compliance support alongside the Apex Clarity platform — for UK construction, trades, property maintenance, retrofit, renewables, M&E and facilities businesses. Scoped and quoted, never sold as an off-the-shelf package."
        path="/hs-support"
      />

      {/* 1. Hero */}
      <section className="pt-32 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <SectionLabel>H&amp;S Support — Optional</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Competent H&amp;S support,{" "}
              <span className="gradient-text-brand">alongside the platform.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl">
              {POSITIONING.supporting}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={CTA}>
                <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" /> Discuss your requirements
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="border-hairline/15 text-white hover:bg-hairline/8 h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                  How support works
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The boundary — software first, support optional */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-ink leading-snug">
            Apex Clarity is a compliance and operations platform first. H&amp;S support is something you can add — not
            something you have to buy.
          </p>
          <p className="text-ink-secondary mt-6 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-ink">{SUBSCRIPTION_EXCLUSION_STATEMENT}</span> Plenty of our customers
            run the platform entirely with their own people. Where there is a genuine gap in competence or capacity, our
            consultants can cover the parts you agree with us — and the records land in your own platform either way.
          </p>
          <div className="mt-8">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all">
              See software pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Problems we solve */}
      <section className="py-24 bg-canvas">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>When Support Helps</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-ink">Sound familiar?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {PROBLEMS.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex items-start gap-2.5 bg-surface rounded-xl px-4 py-3.5 border border-hairline/10"
              >
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-400" />
                </div>
                <span className="text-ink-secondary text-sm font-medium leading-snug">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Support services */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>What We Can Cover</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">H&amp;S Support Services</h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              Take the parts you cannot cover in-house. Nothing here is bundled into the software subscription — each is
              scoped and quoted separately.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.25) }}
                className="bg-surface-raised rounded-2xl p-6 border border-hairline/10 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-bold text-ink mb-2 leading-snug">{s.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed mb-4">{s.summary}</p>
                <span className="mt-auto text-[10px] font-semibold uppercase tracking-wide text-ink-secondary/70 bg-hairline/8 rounded-full px-2.5 py-1 self-start">
                  {DELIVERY_LABELS[s.delivery]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How support works */}
      <section id="how-it-works" className="scroll-mt-24 py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Scoped, quoted, then delivered into your platform.
            </h2>
            <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              We do not sell H&amp;S support as an off-the-shelf package, and we do not publish fixed consultancy prices.
              What you need depends on your sites, your team and your contracts — so we work it out with you first.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGAGEMENT_MODEL.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <p className="text-white font-bold text-sm mb-1.5">{m.title}</p>
                <p className="text-white/45 text-xs leading-relaxed">{m.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-white/[0.03] border border-white/8 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-4 h-4 text-teal-300" />
              <h3 className="text-white font-bold text-sm">What to expect on scope and price</h3>
            </div>
            <ul className="space-y-2.5">
              {SUPPORT_NOTES.map((n) => (
                <li key={n} className="flex items-start gap-2 text-xs text-white/50 leading-relaxed">
                  <div className="w-1 h-1 rounded-full bg-white/30 shrink-0 mt-1.5" />{n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Software vs support — the honest split */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4">
            <SectionLabel>Software And Support</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">
              What the platform does.<br className="hidden md:block" /> What people do.
            </h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              We think you should know exactly which parts are software you subscribe to, and which parts are people you
              engage separately. Here is the split, honestly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-14">
            <div className="bg-surface-raised rounded-2xl p-7 border-2 border-teal/25">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-teal" />
                <h3 className="font-bold text-ink">In your software subscription</h3>
              </div>
              <p className="text-xs text-ink-secondary/70 mb-5">Live in the platform today, on every tier.</p>
              <ul className="space-y-2.5">
                {PLATFORM_LIVE.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-ink-secondary leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-1.5" />{c}
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all mt-6">
                See software pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-surface-raised rounded-2xl p-7 border border-hairline/10">
              <div className="flex items-center gap-2 mb-2">
                <Users2 className="w-4 h-4 text-ink-secondary/60" />
                <h3 className="font-bold text-ink">Delivered by people, quoted separately</h3>
              </div>
              <p className="text-xs text-ink-secondary/70 mb-5">Only if you engage H&amp;S support, and only within the scope you agree.</p>
              <ul className="space-y-2.5">
                {CONSULTANCY_DELIVERED.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-ink-secondary leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-ink-secondary/50 shrink-0 mt-1.5" />{c}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-6 bg-surface-raised rounded-2xl p-7 border border-teal/15 max-w-4xl mx-auto">
            <p className="text-ink-secondary leading-relaxed">{FUTURE_CAPABILITY_NOTE}</p>
          </div>

          <div className="mt-6 flex items-start gap-4 bg-surface-raised rounded-2xl p-6 border border-hairline/10 max-w-4xl mx-auto">
            <LucyOrb size={44} className="shrink-0" />
            <p className="text-sm text-ink-secondary leading-relaxed">
              <span className="font-semibold text-ink">A note on Lucy.</span> Lucy is the governed AI assistant built
              into Apex Clarity. She helps your people — and ours — get a first draft of a risk assessment or method
              statement down faster. She does not give health and safety advice, she does not approve anything, and she
              does not act as your competent person. A competent person does.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Industries served */}
      <section className="py-24 bg-canvas">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel>Who We Work With</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">Built around your sector</h2>
          <p className="text-ink-secondary max-w-2xl mx-auto mb-12">
            We work with contractor-heavy SMEs that need competent H&amp;S support but do not justify a full internal
            department. We are not generalist consultants for every industry.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SECTORS.map((s) => (
              <span key={s} className="bg-surface border border-hairline/12 rounded-full px-5 py-2.5 text-sm font-medium text-ink-secondary">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/industries" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all">
              More on the sectors we serve <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Why Apex */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Why Apex</SectionLabel>
            <h2 className="text-4xl font-black text-ink">Why contractors choose us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {WHY_APEX.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-surface-raised rounded-2xl p-7 border border-hairline/10"
              >
                <h3 className="font-bold text-ink mb-3 text-lg leading-snug">{w.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed">{w.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Consultation CTA */}
      <section className="py-28 bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-6">Start with a conversation.</h2>
          <p className="text-lg text-ink-secondary mb-10 max-w-xl mx-auto">
            Tell us about your sites, your team and where compliance currently hurts. We will tell you honestly what we
            would take on, what we would not, and what it would cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={CTA}>
              <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 text-base rounded-2xl w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" /> Discuss your requirements <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact?type=demo">
              <Button size="lg" variant="outline" className="border-hairline/20 text-ink hover:bg-hairline/8 h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                <Sparkles className="w-5 h-5 mr-2" /> Book a platform demo
              </Button>
            </Link>
          </div>
          <p className="text-ink-secondary/60 text-sm mt-8">No obligation. No hard sell.</p>
        </div>
      </section>

      {/* 10. Scope, competence and exclusions */}
      <section className="py-20 bg-surface border-t border-hairline/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionLabel>Scope &amp; Competence</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-6">What we do, and what we do not</h2>
          <p className="text-ink-secondary leading-relaxed mb-8">{COMPETENCE_STATEMENT}</p>

          <div className="bg-surface-raised rounded-2xl p-7 border border-hairline/10">
            <h3 className="font-bold text-ink mb-2 text-sm">Outside our standard service</h3>
            <p className="text-ink-secondary text-sm mb-5 leading-relaxed">
              The following require specialist professional competence. They are not covered by an H&amp;S support
              engagement, and they are not covered by the software subscription. We will identify where they apply and
              refer you to, or bring in, an appropriately competent specialist.
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {SPECIALIST_EXCLUSIONS.map((e) => (
                <div key={e} className="flex items-start gap-2 text-sm text-ink-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />{e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
