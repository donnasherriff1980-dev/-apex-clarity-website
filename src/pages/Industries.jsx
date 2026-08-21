import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, Wrench, Building2, Home, Leaf, Users } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const industries = [
  { icon: HardHat, label: "Construction", accent: "from-orange-500 to-amber-500", textColor: "text-orange-400",
    description: "From H&S management to project delivery, compliance and tendering — we give construction businesses the systems to work smarter and safer.",
    challenges: ["Complex H&S compliance across multiple sites", "Manual project tracking and reporting", "Subcontractor management gaps", "Tender win rate under pressure"],
    solutions: ["Digital H&S management system", "Project management platform", "Contractor compliance portal", "Tender management tools"],
  },
  { icon: Building2, label: "Facilities Management", accent: "from-cyan-500 to-blue-500", textColor: "text-cyan-400",
    description: "Managing compliance and maintenance across dozens of sites needs one source of truth — not a spreadsheet per building.",
    challenges: ["Compliance visibility across many sites", "Reactive maintenance eating capacity", "SLA and contract tracking", "Engineer and job scheduling"],
    solutions: ["Portfolio-wide compliance dashboard", "Planned maintenance workflows", "SLA and contract reporting", "Mobile job management"],
  },
  { icon: Wrench, label: "Retrofit", accent: "from-teal-500 to-emerald-500", textColor: "text-teal-400",
    description: "Retrofit compliance is unforgiving — PAS 2035 evidence, multi-trade coordination and funder audits all have to line up. We build the systems that keep it that way.",
    challenges: ["PAS 2035 documentation burden", "Coordinating multiple trades per property", "Funder and TrustMark compliance evidence", "Quality assurance at scale"],
    solutions: ["Retrofit compliance tracking", "Trade and schedule coordination tools", "Centralised evidence and document control", "Digital quality inspections"],
  },
  { icon: Leaf, label: "Renewables", accent: "from-emerald-500 to-green-500", textColor: "text-emerald-400",
    description: "Support rapid growth with scalable systems for project delivery, installer accreditation, compliance and supply chain management.",
    challenges: ["Complex project delivery", "Installer accreditation tracking", "Supply chain risk", "Tender management"],
    solutions: ["Project lifecycle management", "Accreditation and compliance tracking", "Risk register and monitoring", "Bid management tools"],
  },
  { icon: Home, label: "Property Services", accent: "from-blue-500 to-indigo-500", textColor: "text-blue-400",
    description: "Manage your entire property portfolio — from compliance and maintenance to client reporting — in one connected platform.",
    challenges: ["Portfolio-wide compliance visibility", "Fragmented maintenance scheduling", "Disconnected client systems", "Manual reporting processes"],
    solutions: ["Asset management dashboard", "Planned maintenance workflows", "Client-facing reporting", "Automated compliance alerts"],
  },
  { icon: Users, label: "Social Housing Contractors", accent: "from-violet-500 to-purple-500", textColor: "text-violet-400",
    description: "Purpose-built systems for contractors working with registered providers — covering compliance, resident safety evidence and regulatory reporting.",
    challenges: ["Regulatory compliance complexity", "Resident safety evidence", "Asset management across estates", "Audit and inspection readiness"],
    solutions: ["Compliance management system", "Digital inspection workflows", "Asset register and tracking", "Board-ready reporting"],
  },
];

export default function Industries() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Apex Clarity is built for construction, retrofit, facilities management, property services, renewables and social housing contractors."
        path="/industries"
      />
      <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Industries</span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">Built For Your Sector</h1>
            <p className="text-xl text-white/50 leading-relaxed">
              We work exclusively with construction, retrofit and facilities management businesses — so the platform is shaped around your operations, not stretched to fit everyone.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {industries.map((ind, i) => (
            <motion.div key={ind.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-surface-raised rounded-3xl overflow-hidden border border-hairline/10 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`h-1.5 bg-gradient-to-r ${ind.accent}`} />
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-80 shrink-0">
                    <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${ind.accent} text-white text-sm font-bold px-4 py-2 rounded-2xl mb-4`}>
                      <ind.icon className="w-4 h-4" /> {ind.label}
                    </div>
                    <p className="text-ink-secondary leading-relaxed text-sm">{ind.description}</p>
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-ink-secondary mb-4">Challenges We Solve</h4>
                      <div className="space-y-2.5">
                        {ind.challenges.map(c => (
                          <div key={c} className="flex items-start gap-2 text-sm text-ink-secondary"><div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0 mt-2" />{c}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-ink-secondary mb-4">Our Solutions</h4>
                      <div className="space-y-2.5">
                        {ind.solutions.map(s => (
                          <div key={s} className="flex items-start gap-2 text-sm font-medium text-ink"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />{s}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Don&apos;t See Your Exact Trade?</h2>
          <p className="text-white/50 mb-8">If you work in construction, retrofit or facilities management, we can likely help. Book a call to discuss your specific needs.</p>
          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 rounded-2xl">
              Book Discovery Call <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
