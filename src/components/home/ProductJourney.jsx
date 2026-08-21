import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import LucyOrb from "@/components/common/LucyOrb";
import {
  Building2, ClipboardCheck, ClipboardList, CheckCircle2, FileCheck2,
  Megaphone, LayoutDashboard, Check, ArrowLeft, ArrowRight, RotateCcw, Sparkles,
} from "lucide-react";

/**
 * One retrofit job, followed through the platform's real path:
 * site/job → risk assessment → method statement & RAMS → review and
 * approval → permit → toolbox talk → hand-back and audit readiness.
 *
 * The previous version ended on a "Reporting · Dashboard" stage with a KPI
 * bar chart and a "+12%" trend. There is no reporting/BI module in the
 * platform, so that stage was replaced with the governance overview, which
 * is what actually exists.
 *
 * These frames are illustrative interface sketches, labelled as such below.
 * Real screenshots captured from the platform will replace them.
 */

function AppFrame({ label, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 bg-gradient-to-r from-slate-50 to-white shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="ml-2 text-[11px] sm:text-xs font-semibold text-slate-400 truncate">{label}</span>
      </div>
      <div className="flex-1 p-4 sm:p-5 overflow-hidden">{children}</div>
    </div>
  );
}

function Row({ children, tone = "slate" }) {
  const tones = {
    slate: "bg-slate-50 border-slate-100",
    teal: "bg-teal-50 border-teal-100",
    amber: "bg-amber-50 border-amber-100",
    emerald: "bg-emerald-50 border-emerald-100",
  };
  return <div className={`rounded-lg p-3 border ${tones[tone]}`}>{children}</div>;
}

function Stage({ label }) {
  return <span className="text-[10px] sm:text-[11px] font-semibold bg-slate-100 text-slate-500 px-2 py-1 rounded-full shrink-0">{label}</span>;
}

function SiteStage() {
  return (
    <AppFrame label="Sites &amp; Jobs">
      <div className="flex items-center justify-between mb-4 gap-2">
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">New job</span>
        <Stage label="Retrofit programme" />
      </div>
      <Row>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
            <Building2 className="w-4 h-4 text-violet-500" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-slate-700 truncate">External wall insulation</p>
            <p className="text-[11px] text-slate-400">Linked to site and organisation</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">Site linked</span>
          <span className="text-[10px] font-semibold bg-slate-100 text-slate-500 px-2 py-1 rounded-full">Evidence: none yet</span>
        </div>
      </Row>
    </AppFrame>
  );
}

function RiskStage() {
  const hazards = ["Work at height — scaffold", "Manual handling — board lifts", "Dust — mechanical fixing"];
  return (
    <AppFrame label="Risk Assessments">
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">From hazard library</span>
        <Stage label="Draft" />
      </div>
      <div className="space-y-2">
        {hazards.map((h) => (
          <Row key={h}>
            <div className="flex items-center gap-2.5">
              <ClipboardCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="text-[12px] text-slate-600 truncate">{h}</span>
            </div>
          </Row>
        ))}
      </div>
    </AppFrame>
  );
}

function RamsStage() {
  const steps = ["1. Scaffold inspected and tagged", "2. Fixings set out and marked", "3. Boards fixed, dust extraction on"];
  return (
    <AppFrame label="Method Statement">
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">Sequence of work</span>
        <Stage label="Draft" />
      </div>
      <div className="space-y-2">
        {steps.map((st) => (
          <Row key={st}>
            <div className="flex items-center gap-2.5">
              <ClipboardList className="w-3.5 h-3.5 text-teal-500 shrink-0" />
              <span className="text-[12px] text-slate-600 truncate">{st}</span>
            </div>
          </Row>
        ))}
      </div>
      <div className="mt-3 inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 text-[11px] font-semibold px-2.5 py-1.5 rounded-full">
        Combines into a RAMS pack
      </div>
    </AppFrame>
  );
}

function ApprovalStage() {
  return (
    <AppFrame label="Approvals">
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">RAMS pack</span>
        <Stage label="In review" />
      </div>
      <div className="space-y-2.5">
        <Row tone="amber">
          <p className="text-[12px] font-semibold text-slate-700 mb-1">Reviewer comment</p>
          <p className="text-[11px] text-slate-500 leading-relaxed">Confirm scaffold inspection interval before issue.</p>
          <p className="text-[10px] text-amber-600 font-semibold mt-1.5">Comment only — stage unchanged</p>
        </Row>
        <Row tone="emerald">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="text-[12px] font-semibold text-slate-700">Approved by competent person</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Approver and timestamp recorded</p>
        </Row>
      </div>
    </AppFrame>
  );
}

function PermitStage() {
  return (
    <AppFrame label="Permits">
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">From template</span>
        <Stage label="Issued" />
      </div>
      <Row>
        <div className="flex items-center gap-2.5 mb-2">
          <FileCheck2 className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="text-[13px] font-semibold text-slate-700 truncate">Hot works permit</span>
        </div>
        <p className="text-[11px] text-slate-500">Scope guidance applied from the permit template.</p>
      </Row>
      <div className="mt-3 space-y-1.5">
        {["Extension requires a reason", "Suspension requires a reason", "Hand-back records completion state"].map((t) => (
          <div key={t} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
            <span className="text-[11px] text-slate-500">{t}</span>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function ToolboxStage() {
  const crew = ["Attendance recorded", "Questions raised logged", "Session notes saved"];
  return (
    <AppFrame label="Toolbox Talks">
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">Delivery session</span>
        <Stage label="Delivered" />
      </div>
      <Row>
        <div className="flex items-center gap-2.5">
          <Megaphone className="w-4 h-4 text-violet-500 shrink-0" />
          <span className="text-[13px] font-semibold text-slate-700 truncate">Working at height briefing</span>
        </div>
      </Row>
      <div className="mt-3 space-y-2">
        {crew.map((c) => (
          <div key={c} className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded bg-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-[12px] text-slate-500 truncate">{c}</span>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function GovernanceStage() {
  const rows = [
    { l: "Overdue reviews", tone: "emerald", v: "None" },
    { l: "Permits awaiting hand-back", tone: "emerald", v: "None" },
    { l: "Missing attendance", tone: "emerald", v: "None" },
    { l: "Competence evidence gaps", tone: "amber", v: "1 to confirm" },
  ];
  return (
    <AppFrame label="Governance Overview">
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">Outstanding items</span>
        <Stage label="Read-only" />
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.l} className="flex items-center justify-between gap-2 bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-100">
            <span className="text-[12px] text-slate-600 truncate">{r.l}</span>
            <span className={`text-[11px] font-semibold shrink-0 ${r.tone === "emerald" ? "text-emerald-600" : "text-amber-600"}`}>{r.v}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-slate-400 mt-3 leading-relaxed">Not a compliance score. Every item requires human review.</p>
    </AppFrame>
  );
}

const STAGES = [
  { id: "site", label: "Job & Site", title: "The job exists before the paperwork does", desc: "A job is raised against a real site and organisation, so every piece of evidence that follows attaches to the work itself.", icon: Building2, Visual: SiteStage },
  { id: "risk", label: "Risk", title: "Risk assessment drafted from your hazard library", desc: "Hazards are pulled from a library you control, so the same hazard is described the same way on every job.", icon: ClipboardCheck, Visual: RiskStage, lucyLine: "I can put a first draft together from your hazard library — you review it." },
  { id: "rams", label: "RAMS", title: "Method statement written and combined into a RAMS pack", desc: "The sequence of work is set out step by step, then combined with its risk assessments into the pack the client will ask for.", icon: ClipboardList, Visual: RamsStage, lucyLine: "Same here — I draft, your competent person decides." },
  { id: "approval", label: "Approval", title: "Reviewed and approved by a competent person", desc: "Reviewers can comment without changing the stage. Rejections and requested changes carry a recorded reason.", icon: CheckCircle2, Visual: ApprovalStage },
  { id: "permit", label: "Permit", title: "Permit issued against the approved method", desc: "Raised from a permit template, with extensions and suspensions each requiring a reason.", icon: FileCheck2, Visual: PermitStage },
  { id: "toolbox", label: "Briefing", title: "Crew briefed, attendance recorded", desc: "The talk is delivered as a session with its own attendance record, notes and questions raised.", icon: Megaphone, Visual: ToolboxStage },
  { id: "governance", label: "Hand-back", title: "Handed back, and the evidence already stands up", desc: "The permit closes with its completion state recorded, and the governance overview shows what is still outstanding across every module.", icon: LayoutDashboard, Visual: GovernanceStage },
];

export default function ProductJourney() {
  const [index, setIndex] = useState(0);
  const stage = STAGES[index];
  const isFirst = index === 0;
  const isLast = index === STAGES.length - 1;

  const goTo = (i) => setIndex(Math.max(0, Math.min(STAGES.length - 1, i)));

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <section className="pt-28 lg:pt-40 pb-24 lg:pb-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-teal/30" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">See Apex In Action</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">One retrofit job, from site to hand-back.</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Follow the evidence trail the way a client audit would: the job, the risk assessment, the RAMS pack, the approval, the permit, the briefing, and what is left outstanding at the end.
          </p>
        </div>

        {/* Desktop stepper */}
        <div className="hidden md:flex items-start justify-between mb-10 relative">
          <div className="absolute left-4 right-4 top-4 h-px bg-white/10" />
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="relative z-10 flex flex-col items-center gap-2 group px-1"
              aria-current={i === index ? "step" : undefined}
              aria-label={`Go to step ${i + 1}: ${s.label}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                i === index ? "bg-teal border-teal text-brand-dark" : i < index ? "bg-teal-400/20 border-teal-300/50 text-teal-300" : "bg-brand-dark border-white/15 text-white/30 group-hover:border-white/30"
              }`}>
                <s.icon className="w-3.5 h-3.5" />
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap ${i === index ? "text-teal" : "text-white/30"}`}>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile progress */}
        <div className="md:hidden mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-teal uppercase tracking-wide">{stage.label}</span>
            <span className="text-xs text-white/30">{index + 1} / {STAGES.length}</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-teal rounded-full" animate={{ width: `${((index + 1) / STAGES.length) * 100}%` }} transition={{ duration: 0.3 }} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              aria-live="polite"
            >
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-3 block">Step {index + 1} of {STAGES.length}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{stage.title}</h3>
              <p className="text-white/50 mb-6">{stage.desc}</p>

              {stage.lucyLine && (
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                  <LucyOrb size={32} className="shrink-0" />
                  <div className="pt-0.5">
                    <p className="text-sm text-white/80 leading-relaxed">{stage.lucyLine}</p>
                    <p className="text-[10px] text-white/35 mt-1.5 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> Lucy assists with drafting only — she does not approve or sign off
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={() => goTo(index - 1)}
                  disabled={isFirst}
                  aria-label="Previous step"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                {!isLast ? (
                  <Button onClick={() => goTo(index + 1)} className="bg-teal text-canvas hover:bg-teal/90 font-bold rounded-xl h-10 px-6">
                    Next Step <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={() => goTo(0)} className="bg-white/10 text-white hover:bg-white/15 font-bold rounded-xl h-10 px-6 border border-white/15">
                    <RotateCcw className="w-4 h-4 mr-2" /> Replay
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${stage.id}-visual`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="h-[360px] sm:h-[380px]"
            >
              <stage.Visual />
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-center text-white/25 text-xs mt-10">
          Illustrative interface sketches showing the real workflow — not a live connection to an account, and not screenshots.
        </p>
      </div>
    </section>
  );
}
