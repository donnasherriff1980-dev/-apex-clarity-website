import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import LucyOrb from "@/components/common/LucyOrb";

export default function CTASection() {
  return (
    <section className="py-32 bg-canvas relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <LucyOrb size={100} className="mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-ink mb-6 leading-tight">
            See it for yourself.
          </h2>
          <p className="text-lg text-ink-secondary mb-10 max-w-xl mx-auto">
            A 30-minute conversation about your operations, your compliance position, and where Apex Clarity fits.
          </p>

          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 text-base rounded-2xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <p className="text-ink-secondary/60 text-sm mt-8">No obligation. No sales pressure.</p>
        </motion.div>
      </div>
    </section>
  );
}
