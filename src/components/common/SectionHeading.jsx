import React from "react";

export default function SectionHeading({ label, title, description, light = false, centered = true }) {
  return (
    <div className={`${centered ? "text-center" : ""} max-w-3xl ${centered ? "mx-auto" : ""} mb-16`}>
      {label && (
        <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        light ? "text-white" : "text-navy"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-lg leading-relaxed ${
          light ? "text-white/60" : "text-muted-foreground"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}