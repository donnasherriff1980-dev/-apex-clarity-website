import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PLATFORM_AREAS } from "@/lib/platformAreas";

// The eight platform areas, equal weight. Content comes from the shared
// list so this section cannot drift from the Platform page or the footer.
export default function PlatformModules() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">Platform Areas</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything the operation runs on.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Eight connected areas, one system. Health and safety is one of them, governed the same way as the rest.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLATFORM_AREAS.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                <a.icon className="w-5 h-5 text-teal" />
              </div>
              <h3 className="text-white font-bold leading-tight mb-2">{a.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{a.short}</p>
              <Link to={a.path} className="mt-auto text-xs font-semibold text-teal inline-flex items-center gap-1 hover:gap-1.5 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/platform">
            <Button className="bg-teal text-canvas hover:bg-teal/90 font-bold h-12 px-8 rounded-xl">
              Explore the platform <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
