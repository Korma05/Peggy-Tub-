import React from "react";

export default function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${light ? "text-amber-light" : "text-brick"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {children && <p className={`mt-5 text-base leading-7 ${light ? "text-white/65" : "text-ink/60"}`}>{children}</p>}
    </div>
  );
}