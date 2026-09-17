import React, { useState } from "react";
import { ArrowDown, ArrowUpRight, CalendarDays, Coffee, Drum, Gamepad2, MapPin, Music2, ShieldCheck, Trophy, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import Lightbox from "../components/Lightbox";
import { events, gallery } from "../data/site";

const iconMap = { Coffee, Trophy, Music2, Gamepad2 };

export default function Home() {
  const [lightbox, setLightbox] = useState(null);
  const open = (src) => setLightbox(src);

  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const features = [
    { icon: Coffee, title: "Warm & welcoming", text: "A friendly atmosphere built around people, conversation and community." },
    { icon: Trophy, title: "Big-screen sport", text: "Gather with friends for the fixtures everyone is talking about." },
    { icon: Music2, title: "Music & quizzes", text: "Regular entertainment that keeps the week interesting." },
    { icon: Gamepad2, title: "Games & bingo", text: "Easy-going games, bingo and social afternoons for everyone." }
  ];

  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main>
        <section id="home" className="hero-grain relative overflow-hidden bg-cream pt-[76px]">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brick/10 blur-3xl" />
          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-10 lg:py-20">
            <div className="relative z-10 reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-brick/15 bg-white/60 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-brick">
                <span className="h-1.5 w-1.5 rounded-full bg-brick" /> Your local social spot
              </div>
              <h1 className="mt-6 max-w-xl font-display text-6xl font-semibold leading-[.93] tracking-[-.045em] sm:text-7xl lg:text-[86px]">
                Good people.<br /><span className="text-brick">Good times.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-ink/65 sm:text-lg">
                Welcome to The New Peggy Tub — a down-to-earth local place for a drink, a game, the big match, or simply a chat with good company.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scroll("#events")} className="inline-flex items-center justify-center gap-2 rounded-full bg-brick px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-brick/20 transition hover:-translate-y-0.5 hover:bg-brick-dark">
                  See what's on <ArrowUpRight size={17}/>
                </button>
                <button onClick={() => scroll("#visit")} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/50 px-6 py-4 text-sm font-extrabold transition hover:bg-white">
                  Plan a visit <MapPin size={16}/>
                </button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-ink/50">
                <span className="inline-flex items-center gap-2"><Users size={14}/> Community focused</span>
                <span className="inline-flex items-center gap-2"><CalendarDays size={14}/> Regular events</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck size={14}/> Friendly atmosphere</span>
              </div>
            </div>

            <div className="relative reveal [animation-delay:150ms]">
              <div className="absolute -left-4 top-12 z-20 hidden rounded-2xl bg-paper p-4 shadow-soft sm:block animate-float-soft">
                <div className="font-display text-2xl font-bold">What's on?</div>
                <div className="mt-1 text-xs font-semibold text-ink/50">Sport · Games · Music</div>
              </div>
              <div className="relative mx-auto max-w-[620px] overflow-hidden rounded-[34px] bg-ink shadow-soft">
                <img src="/images/exterior-1.jpg" alt="The New Peggy Tub exterior" className="aspect-[1.05/1] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
                  <p className="eyebrow text-amber-light">The New Peggy Tub</p>
                  <p className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">A place to feel at home.</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-2 hidden w-40 overflow-hidden rounded-2xl border-8 border-cream shadow-soft sm:block">
                <img src="/images/friday-slcc.jpg" alt="Friday events poster" className="aspect-[3/4] w-full object-cover" />
              </div>
            </div>
          </div>
          <button onClick={() => scroll("#about")} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-ink/40 md:flex">
            Scroll to explore <ArrowDown size={14}/>
          </button>
        </section>

        <section id="about" className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
              <SectionHeading eyebrow="The Peggy Tub feeling" title="Local, lively, and never trying too hard.">
                The physical venue has its own personality. The website keeps that character intact — just with a cleaner, more modern edge.
              </SectionHeading>
              <div className="grid gap-px overflow-hidden rounded-[28px] bg-black/10 sm:grid-cols-2">
                {features.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-paper p-7 sm:p-8">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-cream text-brick"><Icon size={19}/></div>
                      <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-ink/55">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="bg-cream">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="What's on" title="There’s usually something happening.">
                From weekly Friday entertainment to football nights and community afternoons, these are the kinds of events you can expect.
              </SectionHeading>
              <div className="flex items-center gap-2 text-xs font-bold text-ink/45"><CalendarDays size={15}/> Check posters for dates & times</div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {events.map((event) => <EventCard key={event.title} event={event} onOpen={open} />)}
            </div>
          </div>
        </section>

        <section className="bg-brick text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10 lg:py-20">
            <div>
              <p className="eyebrow text-amber-light">Big nights. Small moments.</p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">Come for the match. Stay for the company.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">Whether you're here for the football, a quiz, bingo or just a catch-up, the point is simple: make yourself comfortable.</p>
            </div>
            <button onClick={() => scroll("#gallery")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-extrabold text-brick transition hover:-translate-y-0.5">
              See the gallery <ArrowUpRight size={16}/>
            </button>
          </div>
        </section>

        <section id="gallery" className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading eyebrow="From the venue" title="A little look around.">
              Real photos, real posters and the unmistakable character of the place.
            </SectionHeading>
            <div className="mt-12 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:grid-cols-4">
              {gallery.map((item, index) => (
                <button
                  key={item.src}
                  onClick={() => open(item.src)}
                  className={`group relative overflow-hidden rounded-2xl bg-cream text-left ${index === 0 ? "col-span-2 row-span-2" : index === 1 ? "row-span-2" : ""}`}
                  aria-label={`Open ${item.alt}`}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute bottom-3 right-3 translate-y-2 rounded-full bg-paper/90 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">View</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="bg-cream">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-10 lg:py-28">
            <div>
              <SectionHeading eyebrow="Come along" title="Make yourself at home.">
                The easiest way to know what's happening is to check the latest posters and updates from the venue. If you're nearby, drop in and say hello.
              </SectionHeading>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@peggytub.example" className="inline-flex items-center gap-2 rounded-full bg-brick px-6 py-4 text-sm font-extrabold text-white hover:bg-brick-dark">Send an email <ArrowUpRight size={16}/></a>
                <a href="#events" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-4 text-sm font-extrabold">View events <CalendarDays size={16}/></a>
              </div>
              <p className="mt-5 text-xs leading-5 text-ink/45">Replace the demo email above with the venue's real contact details before publishing.</p>
            </div>
            <div className="overflow-hidden rounded-[30px] bg-ink shadow-soft">
              <img src="/images/exterior-2.jpg" alt="Wide view of The New Peggy Tub and surrounding area" className="h-full min-h-[380px] w-full object-cover" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}