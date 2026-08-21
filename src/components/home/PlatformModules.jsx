import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sparkles, ClipboardCheck, Shield, Cog, Users, Layers, TrendingUp, ArrowRight, Check, FileText
} from "lucide-react";

const panels = [
  {
    icon: Sparkles,
    label: "Lucy",
    accent: "text-teal-300",
    bg: "bg-teal-400/10",
    caption: "Your embedded AI assistant — always watching, always ready to help.",
    path: "/platform",
    visual: "lucy",
  },
  {
    icon: ClipboardCheck,
    label: "Compliance",
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
    caption: "Live status across every regulatory requirement you carry.",
    path: "/solutions/compliance",
    visual: "compliance",
  },
  {
    icon: Shield,
    label: "Health & Safety",
    accent: "text-blue-400",
    bg: "bg-blue-400/10",
    caption: "Digital inspections, incidents and toolbox talks, in one place.",
    path: "/solutions/health-safety",
    visual: "hs",
  },
  {
    icon: Cog,
    label: "Projects",
    accent: "text-orange-400",
    bg: "bg-orange-400/10",
    caption: "Every job tracked from kickoff to completion.",
    path: "/solutions/projects",
    visual: "projects",
  },
  {
    icon: Users,
    label: "Client Records",
    accent: "text-violet-400",
    bg: "bg-violet-400/10",
    caption: "Every client, contact and site in one place, without the spreadsheets.",
    path: "/solutions/crm",
    visual: "crm",
  },
  {
    icon: Layers,
    label: "Operations",
    accent: "text-cyan-400",
    bg: "bg-cyan-400/10",
    caption: "Documents, risk and audits — controlled, not scattered.",
    path: "/solutions",
    visual: "operations",
  },
  {
    icon: TrendingUp,
    label: "Reporting",
    accent: "text-indigo-400",
    bg: "bg-indigo-400/10",
    caption: "The view leadership actually needs, in real time.",
    path: "/solutions/reporting",
    visual: "reporting",
  },
];

function MockChrome({ children }) {
  return (
    <div className="relative h-36 rounded-2xl bg-[#0a1512] border border-white/8 overflow-hidden mb-5 p-3">
      <div className="flex gap-1.5 mb-2.5">
        <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
      </div>
      {children}
    </div>
  );
}

function LucyMock() {
  return (
    <MockChrome>
      <div className="space-y-2">
        <div className="flex items-start gap-1.5">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-300 to-teal-600 shrink-0 mt-0.5" />
          <div className="bg-white/8 rounded-lg rounded-tl-sm px-2.5 py-1.5 text-[9px] text-white/70 max-w-[80%]">3 certificates expire next month</div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gold/15 border border-gold/20 rounded-lg rounded-tr-sm px-2.5 py-1.5 text-[9px] text-white/70">Prepare the list</div>
        </div>
        <div className="flex items-center gap-1 pl-5">
          <span className="w-1 h-1 rounded-full bg-teal-300/70 animate-pulse" />
          <span className="w-1 h-1 rounded-full bg-teal-300/70 animate-pulse [animation-delay:150ms]" />
          <span className="w-1 h-1 rounded-full bg-teal-300/70 animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </MockChrome>
  );
}

function ComplianceMock() {
  return (
    <MockChrome>
      <div className="flex items-center gap-3">
        <svg width="44" height="44" viewBox="0 0 44 44" className="shrink-0">
          <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
          <circle cx="22" cy="22" r="18" fill="none" stroke="#34d399" strokeWidth="4" strokeDasharray="113" strokeDashoffset="12" strokeLinecap="round" transform="rotate(-90 22 22)" />
          <text x="22" y="26" textAnchor="middle" className="fill-white text-[10px] font-bold">94%</text>
        </svg>
        <div className="flex-1 space-y-1.5">
          <div className="flex items-center justify-between text-[9px]"><span className="text-white/50">Fire Safety</span><span className="text-emerald-400 font-semibold">Live</span></div>
          <div className="flex items-center justify-between text-[9px]"><span className="text-white/50">H&S Checks</span><span className="text-emerald-400 font-semibold">Live</span></div>
          <div className="flex items-center justify-between text-[9px]"><span className="text-white/50">ISO 9001</span><span className="text-amber-400 font-semibold">Due soon</span></div>
        </div>
      </div>
    </MockChrome>
  );
}

function HSMock() {
  const items = [{ l: "Site inspection", done: true }, { l: "Toolbox talk", done: true }, { l: "RAMS review", done: false }];
  return (
    <MockChrome>
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it.l} className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 ${it.done ? "bg-blue-400" : "bg-white/10 border border-white/15"}`}>
              {it.done && <Check className="w-2.5 h-2.5 text-brand-dark" />}
            </div>
            <span className={`text-[9px] ${it.done ? "text-white/40 line-through" : "text-white/70"}`}>{it.l}</span>
          </div>
        ))}
        <div className="inline-flex items-center gap-1 bg-blue-400/10 text-blue-300 text-[8px] font-semibold px-2 py-1 rounded-full mt-1">0 incidents this month</div>
      </div>
    </MockChrome>
  );
}

function ProjectsMock() {
  const cols = [{ l: "To Do", n: 2, c: "bg-white/10" }, { l: "In Progress", n: 3, c: "bg-orange-400/25" }, { l: "Done", n: 5, c: "bg-emerald-400/25" }];
  return (
    <MockChrome>
      <div className="grid grid-cols-3 gap-1.5 h-full">
        {cols.map((col) => (
          <div key={col.l} className="bg-white/[0.03] rounded-lg p-1.5 flex flex-col gap-1">
            <span className="text-[7px] text-white/40 font-semibold uppercase">{col.l}</span>
            {Array.from({ length: col.n }).map((_, i) => (
              <div key={i} className={`h-3 rounded ${col.c}`} />
            ))}
          </div>
        ))}
      </div>
    </MockChrome>
  );
}

function ClientRecordsMock() {
  const clients = [{ name: "Greenfield Ltd", sites: 3 }, { name: "Oakwood FM", sites: 5 }, { name: "Riverside Retrofit", sites: 2 }];
  return (
    <MockChrome>
      <div className="space-y-1.5">
        {clients.map((c) => (
          <div key={c.name} className="flex items-center gap-2 bg-white/[0.03] rounded-md px-2 py-1.5">
            <div className="w-4 h-4 rounded-full bg-violet-400/20 border border-violet-300/30 flex items-center justify-center shrink-0">
              <span className="text-[7px] text-violet-300 font-semibold">{c.name.charAt(0)}</span>
            </div>
            <span className="text-[8px] text-white/60 truncate flex-1">{c.name}</span>
            <span className="text-[7px] text-white/30">{c.sites} sites</span>
          </div>
        ))}
      </div>
    </MockChrome>
  );
}

function OperationsMock() {
  const docs = ["RAMS_SiteA.pdf", "Insurance_2026.pdf", "H&S_Policy.pdf"];
  return (
    <MockChrome>
      <div className="space-y-1.5">
        {docs.map((d) => (
          <div key={d} className="flex items-center gap-2 bg-white/[0.03] rounded-md px-2 py-1.5">
            <FileText className="w-2.5 h-2.5 text-cyan-300 shrink-0" />
            <span className="text-[8px] text-white/50 truncate">{d}</span>
            <Check className="w-2.5 h-2.5 text-emerald-400 ml-auto shrink-0" />
          </div>
        ))}
      </div>
    </MockChrome>
  );
}

function ReportingMock() {
  const bars = [40, 65, 50, 80, 60, 90];
  return (
    <MockChrome>
      <div className="flex items-end gap-1.5 h-16 mb-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-indigo-500/70 to-indigo-300/70" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex justify-between text-[7px] text-white/30"><span>KPI trend</span><span className="text-emerald-400">+12%</span></div>
    </MockChrome>
  );
}

const VISUALS = {
  lucy: LucyMock,
  compliance: ComplianceMock,
  hs: HSMock,
  projects: ProjectsMock,
  crm: ClientRecordsMock,
  operations: OperationsMock,
  reporting: ReportingMock,
};

export default function PlatformModules() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-gold uppercase tracking-widest mb-4 block">The Platform</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything your operation needs,<br className="hidden md:block" /> connected in one place.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Explore the core areas that bring projects, people, compliance, documents and reporting together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {panels.map((p, i) => {
            const Visual = VISUALS[p.visual];
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl p-5 border border-white/8 hover:border-white/20 hover:shadow-2xl transition-all duration-300 ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
              >
                <Visual />
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`w-8 h-8 rounded-lg ${p.bg} flex items-center justify-center`}>
                    <p.icon className={`w-4 h-4 ${p.accent}`} />
                  </div>
                  <h3 className="text-white font-bold">{p.label}</h3>
                </div>
                <p className="text-white/45 text-sm leading-relaxed mb-3">{p.caption}</p>
                <Link to={p.path} className={`text-xs font-semibold ${p.accent} inline-flex items-center gap-1 hover:gap-1.5 transition-all`}>
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/platform">
            <Button className="bg-gold text-brand-dark hover:bg-gold/90 font-bold h-12 px-8 rounded-xl">
              Explore the Full Platform <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
