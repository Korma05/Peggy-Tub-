import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { site } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button onClick={() => go("#home")} aria-label="Go to homepage">
          <Logo />
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {site.nav.slice(1).map((item) => (
            <button key={item.href} onClick={() => go(item.href)} className="text-sm font-semibold text-ink/70 transition hover:text-brick">
              {item.label}
            </button>
          ))}
          <button onClick={() => go("#visit")} className="inline-flex items-center gap-2 rounded-full bg-brick px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-brick/15 transition hover:-translate-y-0.5 hover:bg-brick-dark">
            Come & say hello <ArrowUpRight size={15} />
          </button>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-paper px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {site.nav.slice(1).map((item) => (
              <button key={item.href} onClick={() => go(item.href)} className="rounded-xl px-4 py-4 text-left font-semibold hover:bg-cream">
                {item.label}
              </button>
            ))}
            <button onClick={() => go("#visit")} className="mt-2 rounded-xl bg-brick px-4 py-4 text-left font-extrabold text-white">
              Come & say hello
            </button>
          </div>
        </div>
      )}
    </header>
  );
}