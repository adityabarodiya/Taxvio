"use client";

// app/city/gst-services/PageExtras.tsx

import { useEffect, useState } from "react";
import Footar from "@/components/Footar"; // ← remove if your layout already renders the footer
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

function CountUp({ to }: { to: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{v.toLocaleString("en-IN")}</>;
}

export function StatsStrip({ states, districts, subDistricts }: { states: number; districts: number; subDistricts: number }) {
  const items = [
    { k: "States & UTs", n: states },
    { k: "Districts", n: districts },
    { k: "Tehsils & sub-districts", n: subDistricts },
  ];
  return (
    <dl className="mx-auto grid max-w-2xl grid-cols-3 gap-3">
      {items.map((i) => (
        <div key={i.k} className="rounded-2xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur">
          <dt className="order-2 text-[10px] uppercase tracking-widest text-sky-200/80 sm:text-xs">{i.k}</dt>
          <dd className="text-2xl font-extrabold tabular-nums sm:text-3xl">
            <CountUp to={i.n} />+
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Extras() {
  return (
    <>
      <style>{`
        @keyframes gx-pulse { 0% { box-shadow: 0 0 0 0 rgba(251,191,36,.55); } 70% { box-shadow: 0 0 0 12px rgba(251,191,36,0); } 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); } }
        @keyframes gx-ring { 0%,60%,100% { transform: rotate(0); } 10%,30% { transform: rotate(-14deg); } 20%,40% { transform: rotate(14deg); } 50% { transform: rotate(-8deg); } }
        @keyframes gx-shine { 0% { transform: translateX(-120%) skewX(-20deg); } 60%,100% { transform: translateX(260%) skewX(-20deg); } }
        .gx-pulse { animation: gx-pulse 2s infinite; }
        .gx-ring { animation: gx-ring 3.2s ease-in-out infinite; transform-origin: 50% 50%; }
        .gx-shine { animation: gx-shine 3.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .gx-pulse, .gx-ring, .gx-shine { animation: none !important; } }
      `}</style>
      <InquiryFormButton />
      <button
        type="button"
        onClick={() => openInquiryForm("GST Services in India")}
        aria-label="Contact Taxvio: talk to a CA, free callback"
        className="gx-pulse group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-[70] flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 py-2 pl-2 pr-4 sm:pr-5 text-[#00416a] shadow-xl ring-2 ring-white/70 transition hover:scale-105 active:scale-95"
      >
        <span aria-hidden className="gx-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-sm" />
        <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#00416a] text-white shadow-inner">
          <svg viewBox="0 0 24 24" className="gx-ring h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </span>
        <span className="relative text-left leading-tight">
          <span className="block text-[10px] font-bold uppercase tracking-widest opacity-70">Free CA callback</span>
          <span className="block text-sm font-extrabold">Contact Us</span>
        </span>
      </button>
      <Footar />
    </>
  );
}