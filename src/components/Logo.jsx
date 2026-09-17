import React from "react";

export default function Logo({ light = false }) {
  return (
    <div className={`flex items-center gap-3 ${light ? "text-white" : "text-ink"}`} aria-label="The New Peggy Tub">
      <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-current/20 bg-cream text-brick">
        <span className="font-display text-xl font-bold leading-none">P</span>
      </div>
      <div className="leading-none">
        <div className="font-display text-xl font-bold tracking-tight">The New</div>
        <div className="font-sans text-[11px] font-extrabold uppercase tracking-[0.22em] opacity-70">Peggy Tub</div>
      </div>
    </div>
  );
}