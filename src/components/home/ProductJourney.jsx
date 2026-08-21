import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import LucyOrb from "@/components/common/LucyOrb";
import {
  Users, Calendar, FileText, ClipboardCheck, ListChecks, ShieldCheck,
  LayoutDashboard, Check, ArrowLeft, ArrowRight, RotateCcw, Briefcase,
} from "lucide-react";

function AppFrame({ label, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 bg-gradient-to-r from-slate-50 to-white shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="ml-2 text-xs font-semibold text-slate-400">{label}</span>
      </div>
      <div className="flex-1 p-5 overflow-hidden">{children}</div>
    </div>
  );
}

function EnquiryStage() {
  return (
    <AppFrame label="Enquiry & Job Intake">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">New Enquiry</span>
        <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">Web Form</span>
      </div>
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-violet-500 font-bold text-sm shrink-0">RC</div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-700 truncate">Retrofit — Cavity Wall</p>
            <p className="text-xs text-slate-400">Received 2 minutes ago</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">Qualified</span>
          <span className="text-[10px] font-semibold bg-slate-100 text-slate-500 px-2 py-1 rounded-full">Unassigned</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 pt-2">
        <span className="text-[10px] font-semibold text-slate-400">Enquiry</span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5">
          <Briefcase className="w-3 h-3 text-violet-500" />
          <span className="text-[10px] font-semibold text-slate-600">Job #2026-014 created</span>
        </div>
      </div>
    </AppFrame>
  );
}

function JobStage() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <AppFrame label="Projects · Scheduling">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Job #2026-014</span>
        <span className="text-[10px] font-semibold bg-amber-50 text-amber-600 px-2 py-1 rounded-full">Survey Booked</span>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-4">
        {days.map((d, i) => (
          <div key={i} className="text-center">
            <p className="text-[9px] text-slate-300 font-semibold mb-1">{d}</p>
            <div className={`h-8 rounded-md flex items-center justify-center text-xs font-semibold ${i === 3 ? "bg-teal-500 text-white" : "bg-slate-50 text-slate-400"}`}>
              {12 + i}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-3">
        <Calendar className="w-4 h-4 text-teal-500 shrink-0" />
        <div className="min-w-0">
          <p className="text-xs font-semibold text-slate-700 truncate">Site Survey — Thu, 10:00</p>
          <p className="text-[10px] text-slate-400">Assigned: J. Ahmed</p>
        </div>
      </div>
    </AppFrame>
  );
}

function DocumentsStage() {
  const files = [
    { name: "Site_Photos.zip", pct: 100 },
    { name: "EPC_Certificate.pdf", pct: 100 },
    { name: "Property_Survey.pdf", pct: 62 },
  ];
  return (
    <AppFrame label="Documents · Job #2026-014">
      <div className="space-y-2.5">
        {files.map((f) => (
          <div key={f.name} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
              <span className="text-xs font-medium text-slate-600 truncate">{f.name}</span>
              {f.pct === 100 && <Check className="w-3.5 h-3.5 text-emerald-500 ml-auto shrink-0" />}
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${f.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function ComplianceStage() {
  const items = [
    { l: "Gas Safety Certificate", status: "amber", note: "Expires in 12 days" },
    { l: "Public Liability Insurance", status: "amber", note: "Expires in 19 days" },
    { l: "Installer Accreditation", status: "green", note: "Valid" },
  ];
  return (
    <AppFrame label="Compliance · Job #2026-014">
      <div className="space-y-2.5">
        {items.map((it) => (
          <div key={it.l} className="flex items-center justify-between gap-2 bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`w-2 h-2 rounded-full shrink-0 ${it.status === "green" ? "bg-emerald-400" : "bg-amber-400"}`} />
              <span className="text-xs font-medium text-slate-600 truncate">{it.l}</span>
            </div>
            <span className={`text-[10px] font-semibold shrink-0 ${it.status === "green" ? "text-emerald-600" : "text-amber-600"}`}>{it.note}</span>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function ActionsStage() {
  const items = [
    { l: "RAMS — Roof Access", status: "pending", who: "M. Osei" },
    { l: "Toolbox Talk Scheduled", status: "done", who: "J. Ahmed" },
    { l: "PPE Check", status: "done", who: "J. Ahmed" },
  ];
  return (
    <AppFrame label="Actions · RAMS">
      <div className="space-y-2.5">
        {items.map((it) => (
          <div key={it.l} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${it.status === "done" ? "bg-emerald-400" : "border-2 border-amber-400"}`}>
              {it.status === "done" && <Check className="w-2.5 h-2.5 text-white" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-600 truncate">{it.l}</p>
              <p className="text-[10px] text-slate-400">{it.who}</p>
            </div>
            {it.status === "pending" && (
              <span className="text-[9px] font-semibold bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full shrink-0">Awaiting approval</span>
            )}
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function EvidenceStage() {
  const items = ["Site inspection signed off", "RAMS approved", "Installation photos verified"];
  return (
    <AppFrame label="Health & Safety · Sign-off">
      <div className="space-y-2.5 mb-4">
        {items.map((l) => (
          <div key={l} className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded bg-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-xs text-slate-500 line-through decoration-slate-300 truncate">{l}</span>
          </div>
        ))}
      </div>
      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-2 rounded-full">
        <ShieldCheck className="w-3.5 h-3.5" /> Evidence approved
      </div>
    </AppFrame>
  );
}

function HandoverStage() {
  const bars = [55, 70, 60, 85, 75, 95];
  return (
    <AppFrame label="Reporting · Dashboard">
      <div className="flex items-end gap-2 h-20 mb-4">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-teal-400 to-teal-200" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-slate-700 truncate">Job #2026-014</p>
          <p className="text-[10px] text-slate-400">Handed over today</p>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 text-[10px] font-bold px-2.5 py-1.5 rounded-full shrink-0">
          <ShieldCheck className="w-3 h-3" /> Audit ready
        </span>
      </div>
    </AppFrame>
  );
}

const STAGES = [
  { id: "enquiry", label: "Enquiry", title: "Customer enquiry received", desc: "A new enquiry lands and becomes a job — no inbox digging.", icon: Users, Visual: EnquiryStage },
  { id: "job", label: "Job & Survey", title: "Job created, survey booked", desc: "One click turns the enquiry into a scheduled job.", icon: Calendar, Visual: JobStage },
  { id: "documents", label: "Documents", title: "Documents uploaded", desc: "Photos, certificates and surveys land in one controlled place.", icon: FileText, Visual: DocumentsStage },
  { id: "compliance", label: "Compliance", title: "Compliance automatically checked", desc: "Every certificate and requirement is checked against the job.", icon: ClipboardCheck, Visual: ComplianceStage, lucyLine: "I've noticed two certificates expire before installation." },
  { id: "actions", label: "Actions", title: "Manager assigns actions", desc: "Lucy flags what's missing; the manager assigns who fixes it.", icon: ListChecks, Visual: ActionsStage, lucyLine: "Risk Assessment still requires approval." },
  { id: "evidence", label: "Evidence", title: "Work completed, evidence approved", desc: "The installer completes the job; evidence is reviewed and signed off.", icon: ShieldCheck, Visual: EvidenceStage },
  { id: "handover", label: "Handover", title: "Project handed over", desc: "The dashboard updates automatically — nothing to chase.", icon: LayoutDashboard, Visual: HandoverStage, lucyLine: "The job is now audit ready." },
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section className="pt-28 lg:pt-40 pb-24 lg:pb-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/30" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-gold uppercase tracking-widest mb-4 block">See Apex In Action</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Follow one job from first enquiry to final handover.</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            See how Apex Clarity keeps work moving, highlights what needs attention and helps teams maintain a complete evidence trail at every stage.
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
                i === index ? "bg-gold border-gold text-brand-dark" : i < index ? "bg-teal-400/20 border-teal-300/50 text-teal-300" : "bg-brand-dark border-white/15 text-white/30 group-hover:border-white/30"
              }`}>
                <s.icon className="w-3.5 h-3.5" />
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap ${i === index ? "text-gold" : "text-white/30"}`}>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile progress */}
        <div className="md:hidden mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wide">{stage.label}</span>
            <span className="text-xs text-white/30">{index + 1} / {STAGES.length}</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gold rounded-full" animate={{ width: `${((index + 1) / STAGES.length) * 100}%` }} transition={{ duration: 0.3 }} />
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
                  <p className="text-sm text-white/80 leading-relaxed pt-1.5">{stage.lucyLine}</p>
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
                  <Button onClick={() => goTo(index + 1)} className="bg-gold text-brand-dark hover:bg-gold/90 font-bold rounded-xl h-10 px-6">
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
              className="h-[340px] sm:h-[380px]"
            >
              <stage.Visual />
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-center text-white/25 text-xs mt-10">
          An illustrative walkthrough of how Apex Clarity works — not a live connection to a real account.
        </p>
      </div>
    </section>
  );
}
