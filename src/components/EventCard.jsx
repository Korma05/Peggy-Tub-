import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function EventCard({ event, onOpen }) {
  return (
    <article className="group overflow-hidden rounded-[28px] bg-paper shadow-card ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <button className="block w-full text-left" onClick={() => onOpen(event.image)} aria-label={`View ${event.title} poster`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          <img src={event.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
          <div className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] backdrop-blur">
            {event.type}
          </div>
        </div>
      </button>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-brick">{event.time}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold">{event.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/60">{event.description}</p>
        <button onClick={() => onOpen(event.image)} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-ink transition group-hover:text-brick">
          View poster <ArrowUpRight size={15}/>
        </button>
      </div>
    </article>
  );
}