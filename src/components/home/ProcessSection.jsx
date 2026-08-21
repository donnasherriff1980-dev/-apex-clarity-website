import React from "react";
import { motion } from "framer-motion";
import { Search, BarChart2, Pen, Play, RefreshCw } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const steps = [
  { icon: Search, title: "Discover", description: "Understand the business, its challenges, and objectives." },
  { icon: BarChart2, title: "Analyse", description: "Identify opportunities for improvement and quick wins." },
  { icon: Pen, title: "Design", description: "Build tailored solutions aligned to your goals." },
  { icon: Play, title: "Implement", description: "Deploy improvements with minimal disruption." },
  { icon: RefreshCw, title: "Optimise", description: "Measure results and continuously refine." },
];

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="A Proven Approach to Transformation"
          description="Our structured methodology ensures every engagement delivers measurable, sustainable results."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Step number & icon */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}