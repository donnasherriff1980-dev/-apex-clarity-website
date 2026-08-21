import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, ClipboardCheck, Users, Cog, FolderOpen, AlertTriangle, BarChart3, Bot, TrendingUp } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const solutions = {
  "health-safety": {
    icon: Shield, color: "text-blue-400", bg: "bg-blue-400/10",
    title: "Health & Safety Management",
    subtitle: "Digital H&S systems that keep your people safe and your business compliant",
    problem: "Most businesses still manage H&S through paper records, spreadsheets and email. This creates compliance gaps, audit failures and — most critically — unnecessary risk to your workforce.",
    solution: "Our digital H&S platform replaces fragmented paper-based systems with a centralised, mobile-ready solution. From incident reporting to site inspections and toolbox talks, everything is tracked, timestamped and audit-ready.",
    benefits: ["Digital site inspections with mobile capture", "Incident and near-miss reporting (including RIDDOR)", "Toolbox talk management and tracking", "Risk assessment library and templates", "Contractor inductions and compliance", "Automated compliance alerts and escalations"],
    outcome: "Most clients achieve 100% audit readiness within 60 days and see a 35% reduction in H&S incidents within the first year.",
  },
  "compliance": {
    icon: ClipboardCheck, color: "text-emerald-400", bg: "bg-emerald-400/10",
    title: "Compliance Management",
    subtitle: "From reactive firefighting to proactive compliance control",
    problem: "Compliance managed through spreadsheets and emails creates blind spots. Deadlines get missed, audits fail and management have no real-time view of compliance status across the business.",
    solution: "Our compliance platform gives you a live dashboard of compliance status across every regulatory area. Automated alerts ensure deadlines are never missed, and audit-ready reports can be generated instantly.",
    benefits: ["Live compliance status dashboards", "Automated deadline and renewal alerts", "Regulatory requirement tracking library", "Instant audit report generation", "Risk-based compliance prioritisation", "Evidence storage and document management"],
    outcome: "Clients report going from failed audits to 100% compliance within 3 months, with compliance administration reduced by 60%.",
  },
  "crm": {
    icon: Users, color: "text-violet-400", bg: "bg-violet-400/10",
    title: "Client Records",
    subtitle: "A single, organised record of every client, contact and site",
    problem: "Client and site information scattered across email, spreadsheets and memory creates gaps. Details go missing, history is hard to find and there's no shared view of who's linked to what.",
    solution: "Client Records gives your team a single, organised home for every client, contact and site — with linked jobs, documents and communication history all in one place.",
    benefits: ["Client & contact records", "Site and location history", "Communication log", "Linked jobs and documents", "Organisation-level visibility", "Searchable, centralised records"],
    outcome: "Teams spend less time hunting for client information and more time on the work itself, with a single source of truth for every client relationship.",
  },
  "projects": {
    icon: Cog, color: "text-orange-400", bg: "bg-orange-400/10",
    title: "Project Management",
    subtitle: "Full project lifecycle management from kickoff to completion",
    problem: "Projects managed through email threads, spreadsheets and verbal updates run over budget and miss deadlines. There's no single source of truth and leadership have no real visibility.",
    solution: "Our project management platform gives every project a structured home — with Gantt scheduling, resource allocation, budget tracking and stakeholder reporting all connected.",
    benefits: ["Gantt chart project scheduling", "Resource and team allocation", "Budget vs actual cost tracking", "Milestone and deadline management", "Stakeholder reporting dashboards", "Document and communication centralisation"],
    outcome: "Clients achieve 25% faster project delivery on average and significant improvement in budget control.",
  },
  "documents": {
    icon: FolderOpen, color: "text-cyan-400", bg: "bg-cyan-400/10",
    title: "Document Control",
    subtitle: "Centralised document management with full version control",
    problem: "Documents shared via email and stored across multiple systems create version confusion, compliance gaps and significant risk. People work from outdated versions without realising.",
    solution: "Our document control system gives every document a controlled home — with version history, approval workflows, access permissions and automatic expiry alerts.",
    benefits: ["Full version control and audit trail", "Approval and sign-off workflows", "Role-based access permissions", "Document expiry alerts", "Template library management", "Compliance document tracking"],
    outcome: "Clients eliminate document-related compliance issues within 30 days of implementation.",
  },
  "risk": {
    icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-400/10",
    title: "Risk Management",
    subtitle: "Proactive risk management with live registers and automated escalations",
    problem: "Risks tracked in spreadsheets are invisible to leadership until they become incidents. There's no systematic way to score, prioritise and escalate risks across the business.",
    solution: "Our risk management platform gives you live risk registers with automatic scoring matrices, escalation workflows and board-level reporting — so you can manage risk before it manages you.",
    benefits: ["Live risk register management", "Automatic risk scoring and RAG rating", "Escalation and notification workflows", "Risk heat map visualisation", "Board-level risk reporting", "Action and remediation tracking"],
    outcome: "Clients gain full risk visibility within weeks and see a measurable reduction in unmanaged risk incidents.",
  },
  "audits": {
    icon: BarChart3, color: "text-pink-400", bg: "bg-pink-400/10",
    title: "Audits & Inspections",
    subtitle: "Digital audit workflows with mobile capture and instant reporting",
    problem: "Paper-based audits are slow, inconsistent and hard to analyse. Results sit in folders never acted upon. Non-conformances aren't tracked and patterns aren't identified.",
    solution: "Our digital audit platform enables mobile-first inspections with photo evidence, real-time scoring and instant PDF reports. Non-conformances automatically generate action plans with owner assignment.",
    benefits: ["Mobile-first audit and inspection capture", "Photo and video evidence attachment", "Instant scored reports and PDFs", "Non-conformance action tracking", "Trend analysis and reporting", "Scheduled audit calendar management"],
    outcome: "Clients reduce audit preparation time by 50% and close non-conformances 3x faster.",
  },
  "ai-automation": {
    // Categorical module colour (like every other entry in this catalog),
    // not a generic brand-gold usage — moved off the shared gold token to
    // amber so it's clearly its own module identity, not a brand accent.
    icon: Bot, color: "text-amber-400", bg: "bg-amber-400/10",
    title: "AI & Automation",
    subtitle: "Intelligent automation that eliminates repetitive work across your business",
    problem: "Manual data entry, repetitive admin and disconnected systems consume hours of productive time every week. Teams are firefighting instead of focusing on high-value work.",
    solution: "We implement intelligent workflow automation that connects your systems, automates routine tasks and surfaces critical information automatically — powered by AI.",
    benefits: ["End-to-end workflow automation", "AI-powered document processing", "Automated reporting and alerts", "Smart data extraction and routing", "Integration with existing systems", "Predictive analytics and insights"],
    outcome: "Clients save an average of 15-20 hours per week per team in manual administration within 60 days.",
  },
  "reporting": {
    icon: TrendingUp, color: "text-indigo-400", bg: "bg-indigo-400/10",
    title: "Reporting & Analytics",
    subtitle: "Real-time business intelligence for operational leaders",
    problem: "Leaders making decisions based on last month's spreadsheet reports are always behind. Without live data, you're managing in the dark.",
    solution: "Our reporting platform provides real-time dashboards across every area of your business — from operational KPIs to financial performance, compliance status and project health.",
    benefits: ["Custom KPI dashboard builder", "Real-time operational data", "Board-level report generation", "Cross-module data integration", "Automated report scheduling", "Mobile-accessible dashboards"],
    outcome: "Leadership teams go from spending 3 days preparing monthly board reports to generating them in under 2 hours.",
  },
};

export default function ServiceDetail() {
  useDeclareHeaderSurface("dark");
  const { slug } = useParams();
  const sol = solutions[slug];

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
      <SEO title={sol.title} description={sol.subtitle} path={`/solutions/${slug}`} />
      <section className="pt-32 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/solutions" className="text-teal/60 text-sm hover:text-teal mb-8 inline-flex items-center gap-1">← All Solutions</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className={`w-14 h-14 rounded-2xl ${sol.bg} flex items-center justify-center mb-6`}>
              <sol.icon className={`w-7 h-7 ${sol.color}`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{sol.title}</h1>
            <p className="text-xl text-white/50">{sol.subtitle}</p>
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
          <div className="mb-4"><span className="text-xs font-bold text-teal uppercase tracking-widest">Our Solution</span></div>
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

      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-4"><span className="text-xs font-bold text-teal uppercase tracking-widest">Typical Outcome</span></div>
          <p className="text-xl text-white font-medium leading-relaxed">{sol.outcome}</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">See It In Action</h2>
          <p className="text-ink-secondary mb-8">Book a free demo to see this solution configured for your industry and business.</p>
          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-ink text-canvas hover:bg-ink/90 font-bold h-14 px-10 rounded-2xl">
              Book Free Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
