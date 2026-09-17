import React from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:px-10 lg:py-20">
        <div>
          <Logo light />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
            A local place for good company, big-screen sport, games and community events. Come as you are.
          </p>
        </div>
        <div>
          <p className="eyebrow text-amber-light">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
            <a href="#events" className="hover:text-white">What's on</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#visit" className="hover:text-white">Visit</a>
          </div>
        </div>
        <div>
          <p className="eyebrow text-amber-light">Stay in the loop</p>
          <p className="mt-5 text-sm leading-6 text-white/60">For the latest posters, fixtures and event updates, keep an eye on the venue's social channels.</p>
          <a href="#visit" className="mt-5 inline-flex items-center gap-2 font-bold text-white">Get in touch <ArrowUpRight size={15}/></a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>© {new Date().getFullYear()} The New Peggy Tub. All rights reserved.</span>
          <span className="inline-flex items-center gap-1">Made for the local community <Heart size={12} className="fill-current"/></span>
        </div>
      </div>
    </footer>
  );
}