import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Calendar, ChevronRight, MonitorPlay,
  LayoutGrid, ListChecks, GraduationCap, FolderOpen, ShieldCheck,
  ClipboardCheck, FileCheck2, Sparkles,
} from "lucide-react";
import SEO from "@/components/common/SEO";
import LucyOrb from "@/components/common/LucyOrb";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const DEMO = "/contact?type=demo";

// The Northgate Retrofit & Mechanical Ltd demo environment. Null until it is
// live; when set, the "See Kenvio working" section and the final CTA link
// straight to it instead of the contact form.
const DEMO_ENVIRONMENT_URL = "https://apex-clarity-demo.base44.app";

// Everything below describes what ships today. Nothing here claims a
// capability, an outcome or a customer that cannot be shown on a demo.

// The operational chain the platform connects. This is the page's central
// claim: Kenvio joins the work up rather than storing isolated forms.
const CONNECTED = [
  "Project", "Site", "Job", "People", "Documents & Evidence", "Controls", "Approval / Close-out",
];

// Eight platform areas, deliberately given equal weight. H&S is one of them.
const AREAS = [
  {
    icon: LayoutGrid,
    title: "Projects, Sites & Jobs",
    detail: "Organisations, sites, projects and jobs in one structure, so every record knows the work it belongs to.",
    path: "/solutions/projects",
  },
  {
    icon: ListChecks,
    title: "Work & Actions",
    detail: "Work raised as actions with an owner and a due date, and one view of what is outstanding.",
    path: "/solutions/projects",
  },
  {
    icon: GraduationCap,
    title: "Workforce & Competence",
    detail: "Expected evidence per role, qualifications and licences recorded, gaps surfaced for a competent person to confirm.",
    path: "/solutions/competence",
  },
  {
    icon: FolderOpen,
    title: "Documents & Evidence",
    detail: "Controlled documents held against the organisation, site or job they belong to, with bulk import for existing records.",
    path: "/solutions/documents",
  },
  {
    icon: ShieldCheck,
    title: "Health & Safety Controls",
    detail: "Risk assessments, COSHH, method statements and RAMS, toolbox talks and emergency arrangements on one governed lifecycle.",
    path: "/solutions/health-safety",
  },
  {
    icon: ClipboardCheck,
    title: "Approvals & Governance",
    detail: "A central approvals queue with recorded decision reasons, and a governance overview of everything outstanding.",
    path: "/solutions/audits",
  },
  {
    icon: FileCheck2,
    title: "Permits & Control of Work",
    detail: "Permits raised from templates and taken through issue, extension, suspension and hand-back with completion state recorded.",
    path: "/solutions/permits",
  },
  {
    icon: Sparkles,
    title: "Lucy",
    detail: "A governed assistant that helps people prepare drafts and work through structured tasks. People review and approve.",
    path: "/vision",
  },
];

// Shared by every governed record. Verified against the platform entity
// schemas: draft → review → approved, then a live state ("issued" for
// documents and permits, "active" for competence requirements and permit
// templates), then closed or superseded. Permits close by hand-back rather
// than supersession.
const LIFECYCLE = [
  { stage: "Draft", note: "Authored, not yet submitted for review" },
  { stage: "In review", note: "With a reviewer; comments do not change the stage" },
  { stage: "Approved", note: "Rejection or requested changes carry a recorded reason" },
  { stage: "Issued / active", note: "The live version teams work to" },
  { stage: "Closed / superseded", note: "Replaced by a new version, or closed with a hand-back" },
];

const LUCY_DOES_NOT = ["approve", "certify", "sign off", "replace competent judgement"];

function SectionLabel({ children, light = false }) {
  return (
    <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${light ? "text-teal" : "text-teal"}`}>
      {children}
    </span>
  );
}

// Reserved slot in the product-demo frame. Renders a labelled, clearly
// non-live placeholder until real product visuals are dropped in.
function DemoSlot({ label, className = "" }) {
  return (
    <div className={`rounded-lg border border-dashed border-white/15 bg-white/[0.03] flex items-center justify-center ${className}`}>
      <span className="text-[11px] font-semibold uppercase tracking-widest text-white/30">{label}</span>
    </div>
  );
}

export default function Platform() {
  useDeclareHeaderSurface("dark");
  const demoHref = DEMO_ENVIRONMENT_URL || DEMO;

  return (
    <>
      <SEO
        title="The Platform"
        description="Kenvio connects projects, sites, jobs, people, documents and governed controls in one operational system for UK contractors — so teams know what needs doing, what is approved and what evidence exists."
        path="/platform"
      />

      {/* 1. Hero */}
      <section className="pt-32 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <SectionLabel>The Platform</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Control the work.{" "}
              <span className="gradient-text-brand">Keep the evidence.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl">
              Kenvio connects projects, sites, jobs, people, documents and governed controls in one operational
              system — so teams know what needs doing, what&apos;s approved and what evidence exists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#see-kenvio-working">
                <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                  <MonitorPlay className="w-5 h-5 mr-2" /> See Kenvio working
                </Button>
              </a>
              <Link to={DEMO}>
                <Button size="lg" variant="outline" className="border-hairline/15 text-white hover:bg-hairline/8 h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" /> Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Product / demo */}
      <section id="see-kenvio-working" className="scroll-mt-24 py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionLabel>Product</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">See Kenvio working</h2>
            <p className="text-lg text-white/55 leading-relaxed">
              A guided contractor workflow: one job followed from project set-up to close-out, the way your teams
              would see it — what is outstanding, what is waiting on approval, and what evidence sits behind the work.
            </p>
          </div>

          {/* Reserved product-demo frame. Slots are labelled placeholders, not
              screenshots; real product visuals from the Northgate demo replace
              them. Nothing here presents itself as live data. */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 md:p-4 shadow-2xl">
            <div className="flex items-center gap-2 px-2 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-[11px] font-semibold text-white/35 truncate">Northgate Retrofit &amp; Mechanical Ltd — demo environment</span>
              <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-teal bg-teal/10 border border-teal/25 rounded-full px-2 py-0.5">Preview being prepared</span>
            </div>
            <div className="grid gap-3" style={{ gridTemplateRows: "auto 1fr" }}>
              <DemoSlot label="Attention strip" className="h-11" />
              <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-3">
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {["Operational intelligence", "KPI", "KPI", "KPI"].map((l, i) => (
                      <DemoSlot key={i} label={l} className="h-20" />
                    ))}
                  </div>
                  <DemoSlot label="Dashboard view" className="h-64 md:h-80" />
                </div>
                <DemoSlot label="Focus Rail" className="h-40 md:h-auto md:min-h-[26rem]" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-white/45 max-w-xl">
              The walkthrough is being prepared. Until it is published here, we will show you the same workflow live,
              against a job that looks like yours.
            </p>
            <Link to={demoHref} className="sm:ml-auto">
              <Button className="bg-white/10 text-white hover:bg-white/15 border border-white/15 font-semibold rounded-xl h-11 px-6">
                {DEMO_ENVIRONMENT_URL ? "Open the demo environment" : "Book a live walkthrough"} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Connected operation */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Connected Operation</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">One operation, connected end to end.</h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              Kenvio connects the work rather than storing isolated forms. Every record attaches to the project, site
              and job it belongs to, so the evidence is already where someone will look for it.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-3">
            {CONNECTED.map((step, i) => (
              <React.Fragment key={step}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="bg-surface-raised border border-hairline/12 rounded-full px-4 py-2 text-sm font-semibold text-ink shadow-sm"
                >
                  {step}
                </motion.span>
                {i < CONNECTED.length - 1 && <ChevronRight className="w-4 h-4 text-teal mx-1.5 shrink-0" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core platform areas */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Platform Areas</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">Everything the operation runs on.</h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              Eight connected areas, one system. Health and safety is one of them — governed the same way as the rest.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AREAS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.3) }}
                className="bg-surface-raised rounded-2xl p-6 border border-hairline/10 flex flex-col hover:shadow-xl transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <a.icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-bold text-ink mb-2 leading-snug">{a.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed mb-5">{a.detail}</p>
                <Link to={a.path} className="mt-auto inline-flex items-center gap-1 text-teal text-sm font-semibold hover:gap-2 transition-all">
                  More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Controlled lifecycle */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel light>Controlled Lifecycle</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Governed records move through controlled states.</h2>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              Risk assessments, method statements, permits, toolbox talks, competence requirements and emergency
              arrangements all follow the same path, with the review and approval history recorded against each one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LIFECYCLE.map((l, i) => (
              <motion.div
                key={l.stage}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <span className="text-[10px] font-bold text-teal uppercase tracking-wider">Stage {i + 1}</span>
                <p className="text-white font-bold mt-1.5 mb-2">{l.stage}</p>
                <p className="text-white/45 text-xs leading-relaxed">{l.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lucy — compact */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-surface-raised rounded-3xl border border-hairline/10 p-8 md:p-10 flex flex-col md:flex-row items-start gap-8">
            <LucyOrb size={96} className="shrink-0" />
            <div>
              <SectionLabel>Lucy</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-black text-ink mb-3">A governed assistant inside Kenvio.</h2>
              <p className="text-ink-secondary leading-relaxed mb-5">
                Lucy helps people prepare drafts and work through structured tasks — a first version of a risk
                assessment or method statement from your hazard library, or the scope of a permit template — so they
                are editing rather than starting from a blank page.
              </p>
              <p className="text-sm font-semibold text-ink mb-2">Lucy does not:</p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {LUCY_DOES_NOT.map((d) => (
                  <li key={d} className="text-xs font-medium text-ink-secondary bg-hairline/8 border border-hairline/12 rounded-full px-3 py-1">{d}</li>
                ))}
              </ul>
              <Link to="/vision" className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold hover:gap-2.5 transition-all">
                Why Lucy exists <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-28 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">See Kenvio on a real contractor workflow</h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            A 30-minute walkthrough against a job that looks like yours, and an honest answer on which tier fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={DEMO}>
              <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 text-base rounded-2xl w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" /> Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            {DEMO_ENVIRONMENT_URL && (
              <a href={DEMO_ENVIRONMENT_URL}>
                <Button size="lg" variant="outline" className="border-hairline/15 text-white hover:bg-hairline/8 h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                  <MonitorPlay className="w-5 h-5 mr-2" /> Open the Northgate demo
                </Button>
              </a>
            )}
          </div>
          <p className="text-white/35 text-sm mt-8">No obligation. No hard sell.</p>
        </div>
      </section>
    </>
  );
}
