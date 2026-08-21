import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import SEO from "@/components/common/SEO";
import { SOLUTIONS_BY_SLUG, LEGACY_SOLUTION_SLUGS } from "@/lib/solutions";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

export default function ServiceDetail() {
  useDeclareHeaderSurface("dark");
  const { slug } = useParams();

  // Previously-published slugs redirect rather than 404 — several were
  // indexed in the old sitemap.
  const legacy = LEGACY_SOLUTION_SLUGS[slug];
  if (legacy) return <Navigate to={`/solutions/${legacy}`} replace />;

  const sol = SOLUTIONS_BY_SLUG[slug];

  if (!sol) {
    return (
      <div className="pt-32 pb-24 text-center bg-brand-dark min-h-screen">
        <h1 className="text-3xl font-bold text-white">Solution not found</h1>
        <Link to="/solutions" className="text-teal mt-4 inline-block hover:underline">View all solutions</Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={sol.title} description={sol.summary} path={`/solutions/${slug}`} />
      <section className="pt-32 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/solutions" className="text-teal/60 text-sm hover:text-teal mb-8 inline-flex items-center gap-1">← All Solutions</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className={`w-14 h-14 rounded-2xl ${sol.bg} flex items-center justify-center mb-6`}>
              <sol.icon className={`w-7 h-7 ${sol.color}`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{sol.title}</h1>
            <p className="text-xl text-white/50">{sol.summary}</p>
            {sol.lucy && (
              <span className="inline-flex items-center gap-1.5 text-xs text-teal-200 bg-teal-400/10 border border-teal-300/20 rounded-full px-3 py-1.5 mt-6">
                <Sparkles className="w-3 h-3" /> Lucy provides drafting assistance on this module
              </span>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-2"><span className={`text-xs font-bold ${sol.color} uppercase tracking-widest`}>The Problem</span></div>
          <p className="text-xl text-ink font-medium leading-relaxed">{sol.problem}</p>
        </div>
      </section>

      <section className="py-20 bg-surface-raised">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-4"><span className="text-xs font-bold text-teal uppercase tracking-widest">How Apex Clarity Handles It</span></div>
          <p className="text-lg text-ink-secondary leading-relaxed mb-10">{sol.solution}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {sol.benefits.map(b => (
              <div key={b} className="flex items-start gap-3 bg-surface rounded-xl p-4">
                <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span className="text-ink font-medium text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was "Typical Outcome" carrying quantified performance claims. Apex
          Clarity has no published customer outcomes to substantiate figures,
          so this section describes what the module changes about the way the
          work is evidenced — no numbers, no implied benchmark. */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-4"><span className="text-xs font-bold text-teal uppercase tracking-widest">What This Changes</span></div>
          <p className="text-xl text-white font-medium leading-relaxed">{sol.whatChanges}</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">See It On Your Own Work</h2>
          <p className="text-ink-secondary mb-8">Book a demo and we&apos;ll walk this module through a job that looks like yours.</p>
          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-ink text-canvas hover:bg-ink/90 font-bold h-14 px-10 rounded-2xl">
              Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
