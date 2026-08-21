import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat, Wrench, Building2, Home, Leaf, Users, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: HardHat,
    label: "Construction",
    path: "/industries",
    challenges: ["H&S compliance across sites", "Multi-site project tracking", "Subcontractor management", "Tender win rate"],
    solutions: ["Digital H&S system", "Centralised project dashboard", "Contractor compliance portal", "Bid management tools"],
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: Building2,
    label: "Facilities Management",
    path: "/industries",
    challenges: ["Compliance across many sites", "Reactive maintenance visibility", "SLA and contract tracking", "Engineer scheduling"],
    solutions: ["Portfolio compliance dashboard", "Planned maintenance workflows", "SLA and contract reporting", "Mobile job management"],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Wrench,
    label: "Retrofit",
    path: "/industries",
    challenges: ["PAS 2035 documentation", "Multi-trade coordination", "Funder compliance evidence", "Quality assurance at scale"],
    solutions: ["Retrofit compliance tracking", "Trade & schedule coordination", "Evidence and document control", "Digital quality inspections"],
    accent: "from-teal-500 to-emerald-500",
  },
  {
    icon: Leaf,
    label: "Renewables",
    path: "/industries",
    challenges: ["Project delivery complexity", "Installer accreditation tracking", "Supply chain risk", "Tender management"],
    solutions: ["Project lifecycle tools", "Accreditation & compliance tracking", "Risk registers", "Tender management system"],
    accent: "from-emerald-500 to-green-500",
  },
  {
    icon: Home,
    label: "Property Services",
    path: "/industries",
    challenges: ["Portfolio visibility gaps", "Compliance across assets", "Maintenance scheduling", "Client reporting"],
    solutions: ["Asset management system", "Compliance dashboard", "Planned maintenance workflows", "Automated client reporting"],
    accent: "from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    label: "Social Housing Contractors",
    path: "/industries",
    challenges: ["Regulatory compliance", "Resident safety evidence", "Asset management", "Audit readiness"],
    solutions: ["Compliance management", "Digital inspection workflows", "Asset register", "Board-ready audit reporting"],
    accent: "from-violet-500 to-purple-500",
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const ind = industries[active];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-gold uppercase tracking-widest mb-4 block">Built For Your Sector</span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">Who We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apex Clarity is built specifically for construction, retrofit and facilities management businesses — not a generic tool stretched to fit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Selector */}
          <div className="space-y-2">
            {industries.map((item, i) => (
              <button
                key={item.label}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 group hover:-translate-y-0.5 ${
                  active === i
                    ? "bg-brand-dark text-white shadow-xl"
                    : "bg-brand-light hover:bg-brand-dark/5 hover:shadow-md text-brand-mid"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.accent} bg-opacity-20 shrink-0`}>
                  <item.icon className={`w-5 h-5 ${active === i ? "text-white" : "text-brand-mid"}`} />
                </div>
                <span className="font-semibold">{item.label}</span>
                {active === i && <ArrowRight className="w-4 h-4 ml-auto text-gold" />}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-dark rounded-3xl p-8 h-full"
              >
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${ind.accent} text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6`}>
                  <ind.icon className="w-4 h-4" />
                  {ind.label}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">Common Challenges</h4>
                    <div className="space-y-3">
                      {ind.challenges.map((c) => (
                        <div key={c} className="flex items-center gap-2 text-white/60 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">How Apex Clarity Helps</h4>
                    <div className="space-y-3">
                      {ind.solutions.map((s) => (
                        <div key={s} className="flex items-center gap-2 text-white text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/8">
                  <Link to={ind.path} className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                    More on {ind.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
