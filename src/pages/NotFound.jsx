import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

export default function NotFound() {
  useDeclareHeaderSurface("dark");
  return (
    <>
      <SEO title="Page Not Found" description="The page you were looking for could not be found." noIndex />
      <section className="pt-40 pb-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">404</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">We couldn&apos;t find that page.</h1>
          <p className="text-lg text-white/55 mb-10">
            It may have moved, or the link may be out of date. Everything on the Kenvio site is a click away from here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                Back to home <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact?type=demo">
              <Button size="lg" variant="outline" className="border-hairline/15 text-white hover:bg-hairline/8 h-14 px-8 text-base rounded-2xl w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" /> Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
