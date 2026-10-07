import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-32 bg-canvas relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/10 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-6 leading-tight">
            Want to see what Kenvio would look like across your operation?
          </h2>
          <p className="text-lg text-ink-secondary mb-10 max-w-xl mx-auto">
            A live walkthrough on a job that looks like yours, with Donna.
          </p>

          <Link to="/contact?type=demo">
            <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 text-base rounded-2xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
              <Calendar className="w-5 h-5 mr-2" />
              Book a 30-minute operational review
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
