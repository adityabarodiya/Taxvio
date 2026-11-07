"use client";

// app/guide/roc/roc-additional-fee-from-original-due-date-aoc-4-mgt-7/AdditionalFeeCliffClient.tsx

import Footar from "@/components/Footar"; // ← adjust path
import Link from "next/link";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* ═════════════════ CONFIG ═════════════════ */

const CFG = {
  "shareText": "After MCA's extension, filing 1 day late can cost 63 days of ROC fees. Try the calculator:",
  "toc": [
    {
      "id": "cliff",
      "label": "The cliff"
    },
    {
      "id": "lab",
      "label": "Fee lab"
    },
    {
      "id": "examples",
      "label": "Worked examples"
    },
    {
      "id": "myths",
      "label": "Myth check"
    },
    {
      "id": "planner",
      "label": "Backwards planner"
    },
    {
      "id": "missed",
      "label": "Already late?"
    },
    {
      "id": "beyond",
      "label": "Beyond the fee"
    },
    {
      "id": "faqs",
      "label": "FAQs"
    }
  ],
  "badge": "🧮 ROC Calculator · Late Fees",
  "crumbs": [
    {
      "name": "Guides",
      "href": "/guide"
    },
    {
      "name": "ROC",
      "href": "/guide/roc"
    }
  ],
  "h1a": "ROC Late Fees After the Extension:",
  "h1b": "One Day Late Can Cost 63 Days of Fees",
  "lede": "Paragraph 4 of General Circular 05/2026 says filings after the relief window are charged from the date they were actually due. Use our fee lab to see the cliff on a chart and plan your filing date backwards.",
  "readMin": 8,
  "cta": {
    "h": "Do not stand at the edge of the cliff",
    "p": "Our CA team files your AOC-4 and MGT-7 with a safety buffer, so the relief window works for you.",
    "label": "Get it filed early",
    "href": "/serviceslist/roc/annual-roc-compliance"
  },
  "side": {
    "h": "File before the cliff",
    "p": "AOC-4 and MGT-7 filed with a buffer by a CA team."
  },
  "takeaways": [
    "Up to 31 Dec 2026 (AOC-4 family) and 31 Jan 2027 (MGT-7 / 7A) no additional fee is charged for FY 2025-26.",
    "After those dates, fees are counted from the original due date, so the charge arrives all at once.",
    "At the reported ₹100 a day, an AOC-4 filed on 1 Jan 2027 for a 30 Sep AGM would carry about ₹6,300.",
    "The additional fee is charged per form, so AOC-4 and MGT-7 are counted separately, and groups multiply it.",
    "Plan a buffer of about two weeks before the last fee-free day."
  ],
  "url": "https://www.taxvio.in/guide/roc/roc-additional-fee-from-original-due-date-aoc-4-mgt-7",
  "modified": "2026-10-25",
  "dateLabel": "25 October 2026",
  "service": "Annual ROC Compliance",
  "related": [
    {
      "label": "Annual ROC Compliance service",
      "href": "/serviceslist/roc/annual-roc-compliance"
    },
    {
      "label": "MCA Circular 05/2026 explained",
      "href": "/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension"
    },
    {
      "label": "AGM not held by 30 September 2026: what happens next",
      "href": "/guide/roc/agm-not-held-by-30-september-2026-roc-consequences"
    },
    {
      "label": "AOC-4, AOC-4 XBRL, CFS, MGT-7 or MGT-7A: which form?",
      "href": "/guide/roc/aoc-4-xbrl-cfs-mgt-7-mgt-7a-which-form-to-file"
    }
  ],
  "sources": [
    {
      "label": "MCA General Circular No. 05/2026 dated 24 Oct 2026 (text supplied by Taxvio; check mca.gov.in)",
      "url": "https://www.mca.gov.in"
    }
  ]
};

/* ═════════════════ SHARED HOOKS & PRIMITIVES ═════════════════ */

function useToday() {
  const [t, setT] = useState<Date | null>(null);
  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setT(d);
  }, []);
  return t;
}

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
const fmtDate = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
const addDays = (d: Date, n: number) => {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
};
const daysBetween = (a: Date, b: Date) => Math.round((a.getTime() - b.getTime()) / 86400000);

function GlobalStyles() {
  return (
    <style>{`
      @keyframes bk-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes bk-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      @keyframes bk-pulse { 0% { box-shadow: 0 0 0 0 rgba(251,191,36,.55); } 70% { box-shadow: 0 0 0 12px rgba(251,191,36,0); } 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); } }
      @keyframes bk-ring { 0%,60%,100% { transform: rotate(0); } 10%,30% { transform: rotate(-14deg); } 20%,40% { transform: rotate(14deg); } 50% { transform: rotate(-8deg); } }
      @keyframes bk-shine { 0% { transform: translateX(-120%) skewX(-20deg); } 60%,100% { transform: translateX(260%) skewX(-20deg); } }
      .bk-ring { animation: bk-ring 3.2s ease-in-out infinite; transform-origin: 50% 50%; }
      .bk-shine { animation: bk-shine 3.8s ease-in-out infinite; }
      .bk-aurora { animation: bk-aurora 14s ease-in-out infinite; }
      .bk-float { animation: bk-float 7s ease-in-out infinite; }
      .bk-pulse { animation: bk-pulse 2s infinite; }
      .bk-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .bk-reveal.bk-in { opacity: 1; transform: none; }
      .bk-hide-scroll::-webkit-scrollbar { display: none; }
      .bk-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .bk-aurora, .bk-float, .bk-pulse, .bk-ring, .bk-shine { animation: none !important; }
        .bk-reveal { opacity: 1; transform: none; transition: none; }
      }
    `}</style>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`bk-reveal ${shown ? "bk-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Sec({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-40">
      <Reveal className="mb-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00416a]/70 border border-[#00416a]/15 bg-[#00416a]/5 px-3 py-1.5 rounded-full mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00416a]" />
          {label}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#00416a] leading-tight">{title}</h2>
      </Reveal>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="text-gray-700 leading-[1.85]">{children}</p>
    </Reveal>
  );
}

function Callout({ tone = "info", title, children }: { tone?: "info" | "warn" | "good" | "bad"; title?: string; children: ReactNode }) {
  const map = {
    info: "bg-sky-50 border-sky-200 text-[#00416a]",
    warn: "bg-amber-50 border-amber-200 text-amber-900",
    good: "bg-emerald-50 border-emerald-200 text-emerald-900",
    bad: "bg-red-50 border-red-200 text-red-900",
  } as const;
  const icon = { info: "💡", warn: "⚠️", good: "✅", bad: "🚨" }[tone];
  return (
    <Reveal>
      <div className={`rounded-2xl border px-5 py-4 text-sm leading-relaxed ${map[tone]}`}>
        <p className="font-bold mb-1">{icon} {title}</p>
        <div className="opacity-90">{children}</div>
      </div>
    </Reveal>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm ${className}`}>{children}</div>;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      {children}
    </label>
  );
}
const inputCls = "mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a] bg-white";

function Stat({ k, v, tone = "info" }: { k: string; v: string; tone?: "info" | "warn" | "good" | "bad" | "navy" }) {
  const map = {
    info: "bg-sky-50 border-sky-100 text-[#00416a]",
    warn: "bg-amber-50 border-amber-200 text-amber-900",
    good: "bg-emerald-50 border-emerald-200 text-emerald-900",
    bad: "bg-red-50 border-red-200 text-red-900",
    navy: "bg-[#00416a] border-[#00416a] text-white",
  } as const;
  return (
    <div className={`rounded-2xl border p-4 ${map[tone]}`}>
      <p className="text-[11px] uppercase tracking-widest font-bold opacity-70">{k}</p>
      <p className="text-2xl font-extrabold leading-tight">{v}</p>
    </div>
  );
}

function Progress({ pct, label }: { pct: number; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16 flex-shrink-0">
        <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
          <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
          <circle cx="18" cy="18" r="15.5" fill="none" stroke="#00416a" strokeWidth="3.5" strokeLinecap="round" strokeDasharray={`${(pct / 100) * 97.4} 97.4`} className="transition-all duration-500" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-[#00416a]">{pct}%</span>
      </div>
      <p className="font-bold text-[#00416a]">{label}</p>
    </div>
  );
}

function Checklist({ items, storeKey }: { items: string[]; storeKey: string }) {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const done = items.filter((i) => on[storeKey + i]).length;
  const pct = Math.round((done / items.length) * 100);
  return (
    <Card>
      <Progress pct={pct} label={`${done} of ${items.length} ready`} />
      <ul className="mt-5 space-y-2.5">
        {items.map((it) => {
          const v = !!on[storeKey + it];
          return (
            <li key={it}>
              <label className={`flex items-center gap-3 cursor-pointer rounded-xl border px-4 py-3 transition-all ${v ? "bg-emerald-50 border-emerald-200" : "bg-gray-50 border-gray-200 hover:border-[#00416a]/30"}`}>
                <input type="checkbox" checked={v} onChange={() => setOn((c) => ({ ...c, [storeKey + it]: !v }))} className="w-5 h-5 accent-[#00416a]" />
                <span className={`text-sm font-medium ${v ? "text-emerald-800 line-through decoration-emerald-400" : "text-gray-800"}`}>{it}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <div className={`mt-5 rounded-2xl px-5 py-4 text-sm flex flex-col sm:flex-row sm:items-center gap-3 ${pct === 100 ? "bg-emerald-50 text-emerald-900" : "bg-sky-50 text-[#00416a]"}`}>
        <span className="flex-1 font-medium">{pct === 100 ? "🎉 You are ready to file." : "Missing something? Our CA team can tell you the quickest way to get it."}</span>
        <button onClick={() => openInquiryForm(CFG.service)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">{pct === 100 ? "File with a CA →" : "Ask us →"}</button>
      </div>
    </Card>
  );
}

function Tabs({ tabs }: { tabs: { id: string; label: string; body: ReactNode }[] }) {
  const [t, setT] = useState(tabs[0].id);
  const cur = tabs.find((x) => x.id === t) ?? tabs[0];
  return (
    <Card>
      <div className="flex flex-wrap gap-2 mb-5" role="tablist">
        {tabs.map((x) => (
          <button key={x.id} role="tab" aria-selected={t === x.id} onClick={() => setT(x.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${t === x.id ? "bg-[#00416a] text-white border-[#00416a] shadow-md shadow-[#00416a]/20" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>
            {x.label}
          </button>
        ))}
      </div>
      <div key={cur.id} className="text-sm text-gray-700 leading-relaxed">{cur.body}</div>
    </Card>
  );
}

function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={f.q} delay={Math.min(i, 5) * 40}>
            <div className={`rounded-2xl border bg-white transition-all duration-300 ${isOpen ? "border-[#00416a]/40 shadow-lg shadow-[#00416a]/10" : "border-gray-200 hover:border-[#00416a]/25"}`}>
              <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                <span className={`font-bold ${isOpen ? "text-[#00416a]" : "text-gray-800"}`}>{f.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${isOpen ? "bg-[#00416a] text-white rotate-45" : "bg-[#00416a]/10 text-[#00416a]"}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden"><p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p></div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  const href = () => (typeof window !== "undefined" ? window.location.href : CFG.url);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(href());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };
  const btn = "inline-flex items-center gap-2 text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur px-3.5 py-2 rounded-full transition";
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={copy} className={btn}>{copied ? "✓ Link copied" : "🔗 Copy link"}</button>
      <a className={btn} target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${encodeURIComponent(CFG.shareText + " " + CFG.url)}`}>💬 WhatsApp</a>
      <a className={btn} target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(CFG.url)}`}>in LinkedIn</a>
    </div>
  );
}

/* ═════════════════ BLOG-SPECIFIC WIDGETS ═════════════════ */

const CIRCULAR = new Date(2026, 9, 24); // General Circular 05/2026
const AGM_LIMIT = new Date(2026, 8, 30); // usual six-month AGM limit for FY 2025-26
const RELIEF_AOC = new Date(2026, 11, 31); // AOC-4 family, no additional fee up to this date
const RELIEF_MGT = new Date(2027, 0, 31); // MGT-7 / MGT-7A, no additional fee up to this date

function parseD(v: string): Date | null {
  if (!v) return null;
  const d = new Date(v + "T00:00:00");
  return isNaN(d.getTime()) ? null : d;
}
const maxD = (a: Date, b: Date) => (a.getTime() >= b.getTime() ? a : b);

function statusOf(date: Date, today: Date | null) {
  if (!today) return { text: "…", cls: "bg-gray-100 text-gray-500", diff: 0, kind: "none" as const };
  const diff = daysBetween(date, today);
  if (diff < 0) return { text: `Passed ${Math.abs(diff)}d ago`, cls: "bg-red-100 text-red-700", diff, kind: "past" as const };
  if (diff === 0) return { text: "Last day today", cls: "bg-amber-200 text-amber-900", diff, kind: "now" as const };
  if (diff <= 14) return { text: `${diff} days left`, cls: "bg-amber-100 text-amber-800", diff, kind: "soon" as const };
  return { text: `${diff} days left`, cls: "bg-emerald-100 text-emerald-700", diff, kind: "ok" as const };
}

/** Statutory dates counted from the AGM, and the date up to which no additional fee is charged for FY 2025-26. */
function formDates(agm: Date) {
  const aocDue = addDays(agm, 30);
  const mgtDue = addDays(agm, 60);
  return {
    aocDue,
    mgtDue,
    aocFree: maxD(aocDue, RELIEF_AOC),
    mgtFree: maxD(mgtDue, RELIEF_MGT),
  };
}

const RATE = 100; // reported additional fee, ₹ per day per form

/** Fee for one form: zero up to the fee-free date, otherwise counted from the ORIGINAL due date. */
function feeFor(orig: Date, free: Date, filed: Date, rate: number) {
  if (filed.getTime() <= free.getTime()) return { days: 0, fee: 0 };
  const days = Math.max(0, daysBetween(filed, orig));
  return { days, fee: days * rate };
}

function HeroCard() {
  const today = useToday();
  const orig = addDays(AGM_LIMIT, 30);
  const lastDay = feeFor(orig, RELIEF_AOC, RELIEF_AOC, RATE);
  const dayAfter = feeFor(orig, RELIEF_AOC, addDays(RELIEF_AOC, 1), RATE);
  const now = today ? feeFor(orig, RELIEF_AOC, today, RATE) : null;
  return (
    <div className="bk-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">The AOC-4 cliff</p>
      <p className="font-extrabold text-[#00416a] text-lg mb-4">Example: AGM on 30 Sep 2026</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
          <p className="text-[11px] uppercase tracking-widest font-bold text-emerald-700/70">File on 31 Dec</p>
          <p className="text-3xl font-extrabold text-emerald-800">{inr(lastDay.fee)}</p>
        </div>
        <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
          <p className="text-[11px] uppercase tracking-widest font-bold text-red-700/70">File on 1 Jan</p>
          <p className="text-3xl font-extrabold text-red-700">{inr(dayAfter.fee)}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600">One day later costs <b>{dayAfter.days} days</b> of fee, because the meter runs from the original due date.</p>
      {now && <p className="mt-2 text-[11px] text-gray-400">Filed today, this example would cost {inr(now.fee)}.</p>}
      <p className="mt-2 text-[11px] text-gray-400">Illustrative at the reported ₹100 a day.</p>
    </div>
  );
}

function FeeLab() {
  const today = useToday();
  const [agm, setAgm] = useState("2026-09-30");
  const [aocFiled, setAocFiled] = useState("2026-12-31");
  const [mgtFiled, setMgtFiled] = useState("2027-01-31");
  const [rate, setRate] = useState(RATE);
  const [cos, setCos] = useState(1);
  const a = parseD(agm);
  const fa = parseD(aocFiled);
  const fm = parseD(mgtFiled);
  const dates = a ? formDates(a) : null;
  const aoc = dates && fa ? feeFor(dates.aocDue, dates.aocFree, fa, rate) : null;
  const mgt = dates && fm ? feeFor(dates.mgtDue, dates.mgtFree, fm, rate) : null;
  const total = ((aoc?.fee ?? 0) + (mgt?.fee ?? 0)) * Math.max(1, cos);
  const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  // chart: fee for AOC-4 against filing date
  const W = 600, H = 250, padL = 52, padB = 34, padT = 16, padR = 12;
  let chart: ReactNode = null;
  if (dates) {
    const start = addDays(dates.aocFree, -20);
    const span = 110;
    const pts: { x: number; y: number }[] = [];
    let maxFee = 0;
    for (let i = 0; i <= span; i++) {
      const d = addDays(start, i);
      const f = feeFor(dates.aocDue, dates.aocFree, d, rate).fee;
      pts.push({ x: i, y: f });
      maxFee = Math.max(maxFee, f);
    }
    maxFee = Math.max(maxFee, 1000);
    const sx = (i: number) => padL + (i / span) * (W - padL - padR);
    const sy = (v: number) => H - padB - (v / maxFee) * (H - padB - padT);
    const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)}`).join(" ");
    const cliffI = daysBetween(dates.aocFree, start);
    const cur = fa ? daysBetween(fa, start) : null;
    chart = (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Additional fee against filing date for AOC-4, with a jump after the fee-free date">
        {[0, 0.5, 1].map((t) => (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={sy(maxFee * t)} y2={sy(maxFee * t)} stroke="#e5e7eb" />
            <text x={padL - 8} y={sy(maxFee * t) + 4} textAnchor="end" fontSize="11" fill="#6b7280">{inr(maxFee * t)}</text>
          </g>
        ))}
        <rect x={padL} y={padT} width={sx(cliffI) - padL} height={H - padB - padT} fill="#10b981" opacity="0.07" />
        <rect x={sx(cliffI)} y={padT} width={W - padR - sx(cliffI)} height={H - padB - padT} fill="#ef4444" opacity="0.06" />
        <path d={path} fill="none" stroke="#00416a" strokeWidth="3" strokeLinejoin="round" />
        <line x1={sx(cliffI)} x2={sx(cliffI)} y1={padT} y2={H - padB} stroke="#ef4444" strokeDasharray="5 4" />
        <text x={sx(cliffI) + 6} y={padT + 14} fontSize="11" fontWeight="700" fill="#b91c1c">Fee-free date ends</text>
        <text x={padL} y={H - 10} fontSize="11" fill="#6b7280">{fmtDate(start)}</text>
        <text x={W - padR} y={H - 10} textAnchor="end" fontSize="11" fill="#6b7280">{fmtDate(addDays(start, span))}</text>
        {cur !== null && cur >= 0 && cur <= span && (
          <circle cx={sx(cur)} cy={sy(feeFor(dates.aocDue, dates.aocFree, fa as Date, rate).fee)} r="6" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
        )}
      </svg>
    );
  }

  return (
    <Card>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Date of your AGM">
          <input type="date" value={agm} onChange={(e) => setAgm(e.target.value)} className={inputCls} />
        </Field>
        <Field label="Number of companies in the group">
          <input type="number" min={1} max={50} value={cos} onChange={(e) => setCos(Math.max(1, Math.min(50, +e.target.value || 1)))} className={inputCls} />
        </Field>
        <Field label="Planned AOC-4 filing date">
          <input type="date" value={aocFiled} onChange={(e) => setAocFiled(e.target.value)} className={inputCls} />
        </Field>
        <Field label="Planned MGT-7 filing date">
          <input type="date" value={mgtFiled} onChange={(e) => setMgtFiled(e.target.value)} className={inputCls} />
        </Field>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button onClick={() => { if (dates) { setAocFiled(iso(dates.aocFree)); setMgtFiled(iso(dates.mgtFree)); } }} className="text-xs font-semibold text-emerald-700 border border-emerald-300 bg-emerald-50 rounded-full px-3 py-1.5 hover:bg-emerald-100 transition">Last fee-free day</button>
        <button onClick={() => { if (dates) { setAocFiled(iso(addDays(dates.aocFree, 1))); setMgtFiled(iso(addDays(dates.mgtFree, 1))); } }} className="text-xs font-semibold text-red-700 border border-red-300 bg-red-50 rounded-full px-3 py-1.5 hover:bg-red-100 transition">One day after</button>
        <button onClick={() => { if (today) { setAocFiled(iso(today)); setMgtFiled(iso(today)); } }} className="text-xs font-semibold text-[#00416a] border border-[#00416a]/25 rounded-full px-3 py-1.5 hover:bg-[#00416a]/5 transition">File today</button>
      </div>
      <div className="mt-4">
        <Field label={`Additional fee per day per form: ₹${rate} (reported rate)`}>
          <input type="range" min={50} max={300} step={50} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full mt-3 accent-[#00416a]" />
        </Field>
      </div>
      <div className="mt-5 grid sm:grid-cols-3 gap-3">
        <Stat k="AOC-4 days charged" v={aoc ? String(aoc.days) : "–"} tone={aoc && aoc.days > 0 ? "warn" : "good"} />
        <Stat k="MGT-7 days charged" v={mgt ? String(mgt.days) : "–"} tone={mgt && mgt.days > 0 ? "warn" : "good"} />
        <Stat k={cos > 1 ? `Total, ${cos} companies` : "Total additional fee"} v={inr(total)} tone={total > 0 ? "bad" : "good"} />
      </div>
      {chart && <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-3 sm:p-4">{chart}<p className="text-xs text-gray-500 px-2">AOC-4 fee against the date you file. The orange dot is your chosen date.</p></div>}
      <p className="mt-4 text-xs text-gray-400">Our reading of paragraph 4 of the circular: filings inside the window carry no additional fee, and later filings are charged from the original due date. The ₹100 a day figure is as reported by public references. Normal fees, penalties and the portal&apos;s own calculation are separate. Confirm before filing.</p>
    </Card>
  );
}

function MythCards() {
  const items = [
    { m: "“The deadline moved, so the late-fee meter starts on 1 January.”", f: "Paragraph 4 says fees run from the date the filing was actually due under the Act. The extension is a pause, not a reset." },
    { m: "“The circular waives all fees on annual filings.”", f: "It relaxes additional fees only. The normal filing fee and professional charges still apply." },
    { m: "“A company with two forms pays one fee.”", f: "Public references describe the additional fee as charged per form. AOC-4 and MGT-7 are separate forms, each with its own count of days." },
    { m: "“The portal will remind me before the cliff.”", f: "Do not rely on it. Set an internal date, because the portal can be slow in the last week of the window." },
  ];
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((it, i) => {
        const on = !!open[i];
        return (
          <button key={it.m} onClick={() => setOpen((o) => ({ ...o, [i]: !on }))} aria-pressed={on}
            className={`text-left rounded-2xl border p-5 transition-all duration-300 min-h-[9rem] ${on ? "bg-emerald-50 border-emerald-200 shadow-md" : "bg-white border-gray-200 hover:border-[#00416a]/30 hover:shadow-md"}`}>
            <p className={`text-[11px] uppercase tracking-widest font-bold mb-2 ${on ? "text-emerald-700" : "text-red-600"}`}>{on ? "Fact" : "Myth · tap to check"}</p>
            <p className={`text-sm leading-relaxed ${on ? "text-emerald-900 font-medium" : "text-gray-800 font-semibold"}`}>{on ? it.f : it.m}</p>
          </button>
        );
      })}
    </div>
  );
}

function BackwardsPlanner() {
  const today = useToday();
  const [buffer, setBuffer] = useState(14);
  const [form, setForm] = useState<"aoc" | "mgt">("aoc");
  const free = form === "aoc" ? RELIEF_AOC : RELIEF_MGT;
  const target = addDays(free, -buffer);
  const steps = [
    { t: "Books final and auditor sign-off", d: addDays(target, -14), n: "Nothing in the accounts should still be moving." },
    { t: "Board approval and AGM paperwork checked", d: addDays(target, -10), n: "Minutes, notice and attendance in one folder." },
    { t: "Signatures, KYC and DINs verified", d: addDays(target, -7), n: "Digital signatures valid for every signatory." },
    { t: "Draft form prepared and reviewed", d: addDays(target, -3), n: "XBRL or consolidated data validated if applicable." },
    { t: "Target filing date", d: target, n: "Leaves your buffer for a rejection or a portal delay." },
    { t: "Fee-free date ends", d: free, n: "After this, the meter runs from the original due date." },
  ];
  return (
    <Card>
      <div className="flex flex-wrap gap-2 mb-4">
        {([["aoc", "AOC-4 family"], ["mgt", "MGT-7 / 7A"]] as const).map(([k, l]) => (
          <button key={k} onClick={() => setForm(k)} aria-pressed={form === k} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${form === k ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>{l}</button>
        ))}
      </div>
      <Field label={`Safety buffer before the fee-free date: ${buffer} days`}>
        <input type="range" min={3} max={30} value={buffer} onChange={(e) => setBuffer(+e.target.value)} className="w-full mt-3 accent-[#00416a]" />
      </Field>
      <ol className="mt-5 space-y-3">
        {steps.map((s, i) => {
          const st = statusOf(s.d, today);
          const last = i === steps.length - 1;
          return (
            <li key={s.t} className={`flex items-start gap-4 rounded-2xl border px-4 py-3 ${last ? "bg-red-50 border-red-200" : "bg-gray-50 border-gray-100"}`}>
              <span className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold ${last ? "bg-red-500 text-white" : "bg-[#00416a] text-white"}`}>{i + 1}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold text-[#00416a]">{s.t}</p>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${st.cls}`}>{st.text}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{fmtDate(s.d)} · {s.n}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Card>
  );
}



/* ═════════════════ FLOATING CONTACT BUTTON (fixed, bottom-right) ═════════════════ */

function FloatingCTA() {
  return (
    <button
      type="button"
      onClick={() => openInquiryForm(CFG.service)}
      aria-label="Contact Taxvio: talk to a CA, free callback"
      className="bk-pulse group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-[70] flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 py-2 pl-2 pr-4 sm:pr-5 text-[#00416a] shadow-xl ring-2 ring-white/70 transition hover:scale-105 active:scale-95"
    >
      <span aria-hidden className="bk-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-sm" />
      <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#00416a] text-white shadow-inner">
        <svg viewBox="0 0 24 24" className="bk-ring h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
      </span>
      <span className="relative text-left leading-tight">
        <span className="block text-[10px] font-bold uppercase tracking-widest opacity-70">Free CA callback</span>
        <span className="block text-sm font-extrabold">Contact Us</span>
      </span>
    </button>
  );
}

/* ═════════════════ ROOT ═════════════════ */

export default function Client({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [active, setActive] = useState<string>(CFG.toc[0].id);
  const [pct, setPct] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
      setShowTop(h.scrollTop > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = CFG.toc.map((n: { id: string }) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const activeIdx = CFG.toc.findIndex((n: { id: string }) => n.id === active);

  return (
    <main className="bg-slate-50 text-gray-800 overflow-x-clip">
      <GlobalStyles />
      <InquiryFormButton />
      <div className="fixed top-0 left-0 right-0 h-1 z-[80] bg-transparent">
        <div className="h-full bg-gradient-to-r from-sky-400 via-[#00416a] to-emerald-400 transition-[width] duration-150" style={{ width: `${pct}%` }} />
      </div>

      {/* HERO */}
      <header className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
        <div className="bk-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
        <div className="bk-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at 25% 40%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 25% 40%, black 20%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-12 pb-24 md:pt-16 md:pb-28 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60 flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-white transition">Home</Link>
              {CFG.crumbs.map((c: { name: string; href: string }) => (
                <span key={c.href} className="flex items-center gap-2"><span>/</span><Link href={c.href} className="hover:text-white transition">{c.name}</Link></span>
              ))}
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">{CFG.badge}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
              {CFG.h1a}{" "}
              <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">{CFG.h1b}</span>
            </h1>
            <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-6">{CFG.lede}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-sky-100/80 mb-6">
              <span>By <b className="text-white">Taxvio Editorial Team</b></span>
              <span>Updated <time dateTime={CFG.modified}>{CFG.dateLabel}</time></span>
              <span>⏱ {CFG.readMin} min read</span>
            </div>
            <ShareBar />
          </div>
          <div className="lg:justify-self-end w-full max-w-md">
            <HeroCard />
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-10 text-slate-50" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,60 L0,30 Q360,-10 720,25 T1440,20 L1440,60 Z" />
        </svg>
      </header>

      {/* MOBILE CHIP NAV */}
      <div className="lg:hidden sticky top-[72px] z-40 bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
        <div className="px-4 py-2.5 flex items-center gap-1.5 overflow-x-auto bk-hide-scroll">
          {CFG.toc.map((n: { id: string; label: string }) => (
            <a key={n.id} href={`#${n.id}`} className={`flex-shrink-0 text-sm font-semibold px-3.5 py-2 rounded-full transition-all whitespace-nowrap ${active === n.id ? "bg-[#00416a] text-white shadow-md shadow-[#00416a]/25" : "text-[#00416a]/80 hover:bg-[#00416a]/5"}`}>{n.label}</a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid lg:grid-cols-[1fr_320px] gap-10">
        <article className="min-w-0 max-w-3xl space-y-14 md:space-y-16">
          <Takeaways />
          <Body faqs={faqs} />
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white px-6 py-10 sm:px-10 shadow-2xl">
              <div className="bk-aurora absolute -top-16 -right-16 w-60 h-60 rounded-full bg-sky-400/25 blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">{CFG.cta.h}</h2>
                <p className="text-sky-100/90 leading-relaxed mb-6 max-w-xl">{CFG.cta.p}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={() => openInquiryForm(CFG.service)} className="bg-white text-[#00416a] px-7 py-3.5 rounded-xl font-bold shadow-lg hover:scale-105 transition">{CFG.cta.label} →</button>
                  <Link href={CFG.cta.href} className="border-2 border-white/50 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition text-center">View service</Link>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl bg-white border border-gray-200 p-5 text-sm text-gray-600 leading-relaxed">
              <p className="font-bold text-[#00416a] mb-2">Related reading</p>
              <ul className="list-disc pl-5 space-y-1 mb-5">
                {CFG.related.map((r: { label: string; href: string }) => (
                  <li key={r.href}><Link href={r.href} className="text-[#00416a] hover:underline">{r.label}</Link></li>
                ))}
              </ul>
              <p className="font-bold text-[#00416a] mb-2">Sources &amp; disclaimer</p>
              <p className="mb-3">Compiled on {CFG.dateLabel} from public references. These are secondary sources, so verify dates and fees against the official MCA circular or portal before acting.</p>
              <ul className="list-disc pl-5 space-y-1">
                {CFG.sources.map((s: { label: string; url: string }) => (
                  <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-[#00416a] hover:underline">{s.label}</a></li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-gray-400">General information only, not legal or professional advice. Please consult a Company Secretary or Chartered Accountant for your specific case.</p>
            </div>
          </Reveal>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <nav aria-label="Table of contents" className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-[#00416a] text-sm">In this guide</p>
                <span className="text-xs font-semibold text-gray-400 tabular-nums">{Math.round(pct)}% read</span>
              </div>
              <ol className="relative space-y-1 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
                {CFG.toc.map((n: { id: string; label: string }, i: number) => {
                  const cur = n.id === active;
                  const past = i < activeIdx;
                  return (
                    <li key={n.id} className="relative">
                      <a href={`#${n.id}`} className={`flex items-center gap-3 py-1.5 text-sm transition ${cur ? "text-[#00416a] font-bold" : "text-gray-500 hover:text-[#00416a]"}`}>
                        <span className={`relative z-10 w-[19px] h-[19px] rounded-full border-2 flex items-center justify-center text-[9px] ${cur ? "bg-[#00416a] border-[#00416a] text-white" : past ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-gray-300"}`}>{past ? "✓" : ""}</span>
                        {n.label}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#002b45] text-white p-5 shadow-lg">
              <div className="bk-aurora absolute -top-10 -right-10 w-32 h-32 rounded-full bg-sky-400/25 blur-2xl" />
              <div className="relative">
                <p className="font-extrabold mb-1">{CFG.side.h}</p>
                <p className="text-sm text-sky-100/85 mb-4">{CFG.side.p}</p>
                <button onClick={() => openInquiryForm(CFG.service)} className="w-full bg-white text-[#00416a] font-bold py-2.5 rounded-lg hover:scale-[1.02] active:scale-95 transition">Get a Free Quote →</button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#00416a] text-white shadow-xl hover:scale-110 transition">↑</button>
      )}
      <FloatingCTA />
      <Footar />
    </main>
  );
}

/* ═════════════════ ARTICLE BODY ═════════════════ */

function Takeaways() {
  return (
    <Reveal>
      <div className="rounded-3xl bg-white border border-[#00416a]/15 shadow-lg shadow-[#00416a]/5 p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-4">Key takeaways</p>
        <ul className="space-y-3">
          {CFG.takeaways.map((t: string) => (
            <li key={t} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function Body({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <Sec id="cliff" label="The cliff" title="Why the new deadline is a cliff, not a ramp">
        <P>When a due date is extended, most people imagine a gentle slope. File on the new last day and everything is fine. File a few days later and you pay for a few days. General Circular 05/2026 does not work that way, and the reason sits in a single sentence in paragraph 4.</P>
        <P>The paragraph says that any filing made after the currency of the circular attracts payment of all fees, including additional fees, as provided in the Companies (Registration Offices and Fees) Rules, 2014, <strong>from the date when such filings were actually due under the Act</strong>. The key words are &ldquo;actually due under the Act&rdquo;. They point back to the original statutory date, which for most companies is 30 days after the AGM for the AOC-4 and 60 days after the AGM for the MGT-7.</P>
        <P>So the relief behaves like a switch. Up to 31 December 2026 for the AOC-4 family, and up to 31 January 2027 for MGT-7 and MGT-7A, the additional fee is zero. One day after, the fee is calculated as if the extension had never existed. The company does not pay for one late day. It pays for every day since the original due date, all at once.</P>
        <Callout tone="bad" title="The cost of one day can be two months of fees">
          For an AGM held on 30 September 2026, the original AOC-4 date was 30 October. Filing on 1 January 2027 is 63 days after that date. At the reported ₹100 a day, that is ₹6,300 for a form that was one day beyond the relief.
        </Callout>
      </Sec>

      <Sec id="lab" label="Fee lab" title="Try your own dates and see the cliff on a chart">
        <P>Enter your AGM date and the dates on which you plan to file each form. The lab applies the circular as we read it, then draws the AOC-4 fee against the filing date. The red line is the edge of the cliff. If you run a group, enter the number of companies and the total will multiply accordingly.</P>
        <Reveal><FeeLab /></Reveal>
        <P>The fee rate is adjustable because public references describe the additional fee as ₹100 per day per form without an upper cap, and you should confirm the current rate on the portal for your form. The point of the chart is the shape, not the exact number: flat at zero, then a sudden jump, then a straight climb.</P>
      </Sec>

      <Sec id="examples" label="Worked examples" title="Four real-looking cases, worked through">
        <P>Numbers are easier to remember than rules, so here are four examples for a company that held its AGM on 30 September 2026. That makes the original AOC-4 date 30 October 2026 and the original MGT-7 date 29 November 2026. Fees assume the reported rate of ₹100 per day per form.</P>
        <Reveal>
          <Tabs tabs={[
            { id: "e1", label: "AOC-4 on 31 Dec", body: <><p className="mb-3">Filed on the last day of the window. Days charged: <strong>0</strong>. Additional fee: <strong>₹0</strong>.</p><p>Only the normal filing fee applies. This is the outcome the circular intended, but it leaves no room for a rejection or a portal slow-down.</p></> },
            { id: "e2", label: "AOC-4 on 1 Jan", body: <><p className="mb-3">Filed one day after the window. Days from the original date of 30 October: <strong>63</strong>. Additional fee: <strong>₹6,300</strong>.</p><p>The extension does not soften this. The meter is applied from the original date.</p></> },
            { id: "e3", label: "AOC-4 on 31 Jan", body: <><p className="mb-3">Filed a month late. Days from 30 October: <strong>93</strong>. Additional fee: <strong>₹9,300</strong>.</p><p>Compare this with a company that had simply filed in December: the same filing, nine thousand rupees apart.</p></> },
            { id: "e4", label: "MGT-7 on 1 Feb", body: <><p className="mb-3">Annual return filed one day after the 31 January window. Days from 29 November: <strong>64</strong>. Additional fee: <strong>₹6,400</strong>.</p><p>Add the AOC-4 charge if that was also late, because each form is counted separately.</p></> },
          ]} />
        </Reveal>
        <P>Now scale it. A group with five subsidiaries, each filing a late AOC-4 and a late MGT-7, multiplies the figure by five. And if a consolidated AOC-4 CFS is also required, public references suggest it is a separate form with its own count. Confirm with your CA how the portal treats each form in your case.</P>
      </Sec>

      <Sec id="myths" label="Myth check" title="Four things people are getting wrong this week">
        <P>Within hours of the circular, several half-truths started circulating on WhatsApp groups and social media. Tap each card to see what the circular actually says.</P>
        <MythCards />
        <P>The common thread is that people read the headline and skip the paragraph that carries the condition. A circular is a legal document. It deserves a slow read of every numbered paragraph, and if your finance team only has the headline, send them the full text.</P>
      </Sec>

      <Sec id="planner" label="Backwards planner" title="Plan from the cliff, not from the date you feel ready">
        <P>The safest way to use an extension is to treat the last fee-free day as the edge of a cliff and plan a safe distance back from it. Pick the form and a buffer, and the planner works backwards to show the dates by which each internal step should be done.</P>
        <Reveal><BackwardsPlanner /></Reveal>
        <P>A buffer of two weeks is a sensible starting point. It protects you against the things that routinely happen at the end of a window: a digital signature that has expired, a signatory who is out of reach, an XBRL validation error, a form that is sent back for correction, or a portal that slows down when thousands of companies file on the same days.</P>
        <P>Companies that use the buffer well tend to look boring from the outside. They finalise accounts early, they check signatories before they start, and they file two weeks ahead of the last day. That is exactly the habit a CA-led process builds.</P>
      </Sec>

      <Sec id="missed" label="Already late?" title="If you have already crossed the line, act today">
        <P>Some readers of this guide are not early. Their AOC-4 or MGT-7 is already beyond even the original due date, and the circular simply means they now have a window in which the meter is paused. If that is you, the window is the best deal you will get, so use it fully and do not let the last week arrive.</P>
        <P>If you have missed the relief window itself, the position is different but the advice is the same: file as soon as you can. The additional fee is counted per day, so every further day adds to the bill, and nothing in the circular promises any further relief. Before you pay, ask your CA to check the amount the portal computes against your own calculation. Mistakes in the date used for the AGM, or in the form count, are the most common reasons for a bill that looks too high.</P>
        <P>Three small habits help at this stage. Keep the SRN and the payment challan for every attempt, even a rejected one, because they help if there is a later query. Record in a board note why the filing was delayed and what is being done to prevent a repeat. And do not leave one form waiting for another: file the AOC-4 and the MGT-7 as soon as each is ready, because each form carries its own count of days.</P>
      </Sec>

      <Sec id="beyond" label="Beyond the fee" title="The additional fee is not the only cost of filing late">
        <P>It is tempting to treat the additional fee as the whole price of delay. It is only the most visible part. As public references summarise, late financial statements and late annual returns can also expose the company and its officers to fines under the Act, and the fines are described as much larger than the daily fee. We have not independently verified the amounts, so we leave them to your professional.</P>
        <P>A longer pattern of non-filing carries more serious consequences. Public references describe director disqualification where a company has not filed financial statements or annual returns for a continuous run of years, and the possibility of the Registrar removing the company from the register. A director disqualified from one company can also be barred from acting in others, which is why this is a founder-level risk and not only a company-level one.</P>
        <Callout tone="warn" title="Check your signatories as well">
          If a director&apos;s KYC has lapsed and the DIN is deactivated, that director may be unable to sign. The company then discovers the problem on the last day. Check KYC status before you plan the filing date, not after.
        </Callout>
        <P>Finally, the circular covers only the forms it names. ADT-1, MSME-1, DPT-3 and the director KYC are separate obligations, and none of them gains from the relief. Our guide to <Link href="/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension" className="text-[#00416a] font-semibold underline">Circular 05/2026</Link> lists what is and is not covered, and the guide on <Link href="/guide/roc/agm-not-held-by-30-september-2026-roc-consequences" className="text-[#00416a] font-semibold underline">AGM defaults</Link> explains the AGM position.</P>
        <P>If you would rather not run the calendar yourself, our team handles the whole annual cycle. See our <Link href="/serviceslist/roc/annual-roc-compliance" className="text-[#00416a] font-semibold underline">Annual ROC Compliance</Link> service, or tap the button at the bottom right of this page to talk to a CA.</P>
      </Sec>
      <Sec id="faqs" label="FAQs" title="Frequently asked questions">
        <Faqs faqs={faqs} />
      </Sec>
    </>
  );
}