import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ClipboardCheck, Users, Cog, FolderOpen, AlertTriangle, BarChart3, Bot, TrendingUp } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const solutions = [
  { icon: Shield, title: "Health & Safety", slug: "health-safety", color: "text-blue-400", bg: "bg-blue-400/10", accent: "from-blue-500 to-cyan-500",
    description: "Digital H&S management, incident reporting, toolbox talks, site inspections and compliance tracking.",
    benefits: ["Reduce H&S incidents", "Audit-ready at all times", "Digital site inspections", "Automated compliance alerts"],
  },
  { icon: ClipboardCheck, title: "Compliance Management", slug: "compliance", color: "text-emerald-400", bg: "bg-emerald-400/10", accent: "from-emerald-500 to-green-500",
    description: "Automated compliance monitoring with live dashboards, regulatory alerts and audit-ready reporting.",
    benefits: ["Live compliance status", "Regulatory deadline alerts", "Instant audit reports", "Risk-based prioritisation"],
  },
  { icon: Users, title: "Client Records", slug: "crm", color: "text-violet-400", bg: "bg-violet-400/10", accent: "from-violet-500 to-purple-500",
    description: "A single, organised record of every client, contact and site — instead of scattered spreadsheets and inboxes.",
    benefits: ["Client & contact records", "Site and location history", "Communication log", "Linked jobs and documents"],
  },
  { icon: Cog, title: "Project Management", slug: "projects", color: "text-orange-400", bg: "bg-orange-400/10", accent: "from-orange-500 to-amber-500",
    description: "Full project lifecycle management from inception to completion with Gantt charts and P&L tracking.",
    benefits: ["Gantt chart scheduling", "Budget vs actual tracking", "Resource allocation", "Stakeholder reporting"],
  },
  { icon: FolderOpen, title: "Document Control", slug: "documents", color: "text-cyan-400", bg: "bg-cyan-400/10", accent: "from-cyan-500 to-blue-500",
    description: "Centralised document management with version control, approval workflows and access permissions.",
    benefits: ["Version control", "Approval workflows", "Access permissions", "Document templates"],
  },
  { icon: AlertTriangle, title: "Risk Management", slug: "risk", color: "text-amber-400", bg: "bg-amber-400/10", accent: "from-amber-500 to-orange-500",
    description: "Live risk registers with automatic scoring, escalation workflows and management reporting.",
    benefits: ["Live risk registers", "Automatic risk scoring", "Escalation alerts", "Board reporting"],
  },
  { icon: BarChart3, title: "Audits & Inspections", slug: "audits", color: "text-pink-400", bg: "bg-pink-400/10", accent: "from-pink-500 to-rose-500",
    description: "Digital audit and inspection workflows with mobile capture, photo evidence and instant reporting.",
    benefits: ["Mobile audit capture", "Photo evidence", "Instant reports", "Action tracking"],
  },
  { icon: Bot, title: "AI & Automation", slug: "ai-automation", color: "text-amber-400", bg: "bg-amber-400/10", accent: "from-amber-400 to-orange-400",
    description: "Intelligent workflow automation that eliminates repetitive tasks and surfaces critical insights.",
    benefits: ["Workflow automation", "AI-powered reporting", "Smart alerts", "Predictive analytics"],
  },
  { icon: TrendingUp, title: "Reporting & Analytics", slug: "reporting", color: "text-indigo-400", bg: "bg-indigo-400/10", accent: "from-indigo-500 to-blue-500",
    description: "Unified business intelligence with real-time dashboards, KPI tracking and board-level reporting.",
    benefits: ["Live dashboards", "Custom KPI tracking", "Board reports", "Export tools"],
  },
];

export default function Solutions() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Solutions"
        description="Health & Safety, Compliance, Client Records, Projects, Document Control, Risk, Audits and Reporting — the modules Apex Clarity builds around your operations."
        path="/solutions"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Our Solutions</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Systems Built Around How You Work</h1>
            <p className="text-xl text-white/50 leading-relaxed">
              A connected suite of modules, configured to your operations — with Lucy watching over compliance across every one of them.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {solutions.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="bg-surface-raised rounded-2xl border border-hairline/10 hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className={`h-1 bg-gradient-to-r ${s.accent}`} />
              <div className="p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center shrink-0`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-ink mb-2">{s.title}</h2>
                  <p className="text-ink-secondary text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {s.benefits.map(b => (
                      <div key={b} className="flex items-center gap-2 text-xs text-ink-secondary font-medium">
                        <div className={`w-1 h-1 rounded-full ${s.bg}`} />{b}
                      </div>
                    ))}
                  </div>
                </div>
                <Link to={`/solutions/${s.slug}`} className="shrink-0">
                  <Button variant="outline" className="border-hairline/20 text-ink hover:bg-ink hover:text-canvas rounded-xl text-sm h-9">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Want to See the Platform?</h2>
          <p className="text-white/50 mb-8">Book a free demo and see all modules working together in your industry context.</p>
          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 rounded-2xl">
              Book Free Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
