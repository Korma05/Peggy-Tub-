import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-5">
      <div className="max-w-md text-center">
        <p className="eyebrow text-brick">404</p>
        <h1 className="mt-3 font-display text-6xl font-semibold">That page has left the building.</h1>
        <p className="mt-5 text-sm leading-6 text-ink/55">The page you're looking for doesn't exist. Let's get you back to the main room.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brick px-6 py-4 text-sm font-extrabold text-white">
          <ArrowLeft size={16}/> Back home
        </Link>
      </div>
    </main>
  );
}