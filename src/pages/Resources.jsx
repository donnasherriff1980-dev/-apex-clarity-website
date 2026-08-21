import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const categories = ["All", "Operations", "Compliance", "AI & Automation", "H&S", "Project Management", "Growth"];

const articles = [
  { title: "The Business Operating System: Why Growing Businesses Need More Than Software", excerpt: "Discover why successful scaling businesses replace ad-hoc tools with integrated operating systems.", category: "Operations", readTime: "6 min", date: "June 2026" },
  { title: "H&S Compliance in Construction: Moving Beyond Spreadsheets", excerpt: "How digital H&S systems are reducing incidents, improving compliance and saving hours per week.", category: "H&S", readTime: "5 min", date: "June 2026" },
  { title: "AI Automation: What It Actually Means For Your Business in 2026", excerpt: "Cut through the hype. Practical AI automation that delivers real ROI for operations teams.", category: "AI & Automation", readTime: "7 min", date: "May 2026" },
  { title: "Compliance Management: From Reactive to Proactive", excerpt: "How to transform compliance from a burden into a competitive advantage.", category: "Compliance", readTime: "6 min", date: "May 2026" },
  { title: "Project Management Systems: Beyond Gantt Charts", excerpt: "Modern project management platforms that give you real financial and operational control.", category: "Project Management", readTime: "8 min", date: "Apr 2026" },
  { title: "Building a Growth Strategy That Connects to Operations", excerpt: "Why most growth strategies fail — and how to build one that drives operational results.", category: "Growth", readTime: "5 min", date: "Apr 2026" },
];

export default function Resources() {
  useDeclareHeaderSurface("dark");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = articles.filter(a => {
    const catMatch = activeCategory === "All" || a.category === activeCategory;
    const searchMatch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <>
      <SEO
        title="Resources"
        description="Practical insights on operations, compliance, AI and business transformation for construction, retrofit and facilities management businesses."
        path="/resources"
      />
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Resources</span>
            <h1 className="text-5xl font-black text-white mb-6">Insights & Expertise</h1>
            <p className="text-white/50 text-lg">Practical insights on operations, AI, compliance and business transformation from the Apex Clarity team.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-surface border-b border-hairline/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-secondary" />
              <Input placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10 w-72 h-10 rounded-xl bg-surface-raised text-ink border-hairline/15" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button key={cat} size="sm" onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg h-8 text-xs font-semibold ${activeCategory === cat ? "bg-teal text-canvas hover:bg-teal/90" : "bg-transparent text-ink-secondary border border-hairline/20 hover:bg-surface-raised"}`}>
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a, i) => (
              <motion.article key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-surface-raised rounded-2xl overflow-hidden border border-hairline/10 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="h-44 bg-gradient-to-br from-brand-dark to-brand-mid flex items-center justify-center">
                  <div className="text-teal/20 text-7xl font-black">{a.category[0]}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-ink/5 text-ink-secondary border-0 text-xs font-medium">{a.category}</Badge>
                    <span className="text-xs text-ink-secondary flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                  </div>
                  <h3 className="font-bold text-ink mb-2 group-hover:text-teal transition-colors leading-snug">{a.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">{a.excerpt}</p>
                  <span className="text-sm font-bold text-teal flex items-center gap-1.5">Read More <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
