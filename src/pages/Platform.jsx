import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Users, AlertTriangle, ClipboardCheck, TrendingUp, Cog, ArrowRight, CheckCircle } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const tabs = [
  { label: "Compliance", icon: ClipboardCheck, color: "text-emerald-400", bg: "bg-emerald-400/10",
    description: "Live compliance dashboards with automated tracking, deadline alerts and audit-ready reporting.",
    features: ["Real-time compliance status", "Automated deadline alerts", "Regulatory requirement library", "Instant audit reports", "Risk-based prioritisation"],
    visual: { title: "Compliance Dashboard", metric: "94%", metricLabel: "Overall Compliance", items: [{ l: "Fire Safety", v: 100, c: "bg-emerald-400" }, { l: "H&S Checks", v: 88, c: "bg-blue-400" }, { l: "Environmental", v: 95, c: "bg-emerald-400" }, { l: "ISO 9001", v: 82, c: "bg-amber-400" }] },
  },
  { label: "H&S", icon: Shield, color: "text-blue-400", bg: "bg-blue-400/10",
    description: "Digital health and safety management with mobile inspections, incident logging and toolbox talks.",
    features: ["Digital site inspections", "Incident reporting & RIDDOR", "Toolbox talk management", "COSHH assessments", "Contractor inductions"],
    visual: { title: "H&S Command Centre", metric: "142", metricLabel: "Checks This Month", items: [{ l: "Site Inspections", v: 95, c: "bg-blue-400" }, { l: "Risk Assessments", v: 78, c: "bg-emerald-400" }, { l: "Toolbox Talks", v: 90, c: "bg-violet-400" }, { l: "Incident Rate", v: 15, c: "bg-red-400" }] },
  },
  { label: "Client Records", icon: Users, color: "text-violet-400", bg: "bg-violet-400/10",
    description: "A single, organised record of every client, contact and site — with linked jobs and documents in one place.",
    features: ["Client & contact records", "Site and location history", "Communication log", "Linked jobs and documents", "Organisation-level visibility"],
    visual: { title: "Client Records", metric: "128", metricLabel: "Organisations On File", items: [{ l: "Organisations", v: 100, c: "bg-violet-400" }, { l: "Contacts", v: 80, c: "bg-blue-400" }, { l: "Sites", v: 65, c: "bg-amber-400" }, { l: "Linked Jobs", v: 50, c: "bg-emerald-400" }] },
  },
  { label: "Projects", icon: Cog, color: "text-orange-400", bg: "bg-orange-400/10",
    description: "Full project lifecycle management from kickoff to completion with resource planning and P&L tracking.",
    features: ["Gantt chart scheduling", "Resource allocation", "Budget vs actual tracking", "Milestone management", "Stakeholder reporting"],
    visual: { title: "Project Overview", metric: "8/10", metricLabel: "On Track", items: [{ l: "On Track", v: 80, c: "bg-emerald-400" }, { l: "At Risk", v: 15, c: "bg-amber-400" }, { l: "Over Budget", v: 5, c: "bg-red-400" }, { l: "Completed", v: 95, c: "bg-blue-400" }] },
  },
  { label: "Risk", icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-400/10",
    description: "Proactive risk management with live risk registers, scoring matrices and automated escalations.",
    features: ["Live risk register", "Automated risk scoring", "Escalation workflows", "Risk heat maps", "Board-level reporting"],
    visual: { title: "Risk Register", metric: "3 High", metricLabel: "Risks Requiring Action", items: [{ l: "Critical", v: 5, c: "bg-red-400" }, { l: "High", v: 20, c: "bg-orange-400" }, { l: "Medium", v: 45, c: "bg-amber-400" }, { l: "Low", v: 30, c: "bg-emerald-400" }] },
  },
  { label: "Reporting", icon: TrendingUp, color: "text-indigo-400", bg: "bg-indigo-400/10",
    description: "Unified analytics and KPI reporting giving leadership complete business visibility in real time.",
    features: ["Custom KPI dashboards", "Board-level reporting", "Automated report generation", "Data export tools", "Trend analysis"],
    visual: { title: "Business Intelligence", metric: "87%", metricLabel: "KPI Performance Score", items: [{ l: "Revenue KPIs", v: 92, c: "bg-emerald-400" }, { l: "Operational KPIs", v: 85, c: "bg-blue-400" }, { l: "Compliance KPIs", v: 94, c: "bg-violet-400" }, { l: "Project KPIs", v: 78, c: "bg-amber-400" }] },
  },
];

export default function Platform() {
  useDeclareHeaderSurface("dark");
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <>
      <SEO
        title="The Platform"
        description="Compliance, H&S, client records, projects, risk and reporting — explore the Apex Clarity platform, with Lucy embedded throughout."
        path="/platform"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">The Platform</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">One Platform.<br />Complete Control.</h1>
            <p className="text-xl text-white/50">An integrated business operating system built for organisations that want full operational visibility and control.</p>
          </motion.div>
        </div>
      </section>

      {/* Platform showcase */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {tabs.map((t, i) => (
              <button key={t.label} onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === i ? "bg-teal text-canvas shadow-lg" : "bg-surface-raised text-ink-secondary hover:bg-hairline/8"
                }`}>
                <t.icon className={`w-4 h-4 ${activeTab === i ? "text-canvas" : ""}`} />
                {t.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Description */}
              <div>
                <div className={`w-14 h-14 rounded-2xl ${tab.bg} flex items-center justify-center mb-6`}>
                  <tab.icon className={`w-7 h-7 ${tab.color}`} />
                </div>
                <h2 className="text-3xl font-black text-ink mb-4">{tab.label} Module</h2>
                <p className="text-ink-secondary leading-relaxed mb-8">{tab.description}</p>
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {tab.features.map(f => (
                    <div key={f} className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-teal shrink-0" /><span className="text-ink-secondary font-medium text-sm">{f}</span></div>
                  ))}
                </div>
                <Link to="/contact?type=demo">
                  <Button className="bg-ink text-canvas hover:bg-ink/90 rounded-xl">
                    See {tab.label} Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Mock dashboard — illustrative product UI, deliberately theme-invariant
                  (reads as "a screenshot of the product", not page chrome) */}
              <div className="bg-brand-dark rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/30 text-xs">Module</p>
                    <p className="text-white font-bold">{tab.visual.title}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-black ${tab.color}`}>{tab.visual.metric}</p>
                    <p className="text-white/30 text-xs">{tab.visual.metricLabel}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {tab.visual.items.map(item => (
                    <div key={item.l}>
                      <div className="flex justify-between text-xs text-white/40 mb-1.5"><span>{item.l}</span><span>{item.v}%</span></div>
                      <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${item.v}%` }} transition={{ duration: 0.8, ease: "easeOut" }} className={`h-full ${item.c} rounded-full`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
                  <span className="text-white/25 text-xs">Live data</span>
                  <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /><span className="text-emerald-400 text-xs">Connected</span></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">See It In Action</h2>
          <p className="text-white/50 mb-8">Book a personalised demo and see how the platform can transform your specific operations.</p>
          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 rounded-2xl">
              Book Platform Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
