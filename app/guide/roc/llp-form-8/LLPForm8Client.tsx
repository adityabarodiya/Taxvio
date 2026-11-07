"use client";

// app/guide/roc/llp-form-8/LLPForm8Client.tsx

import Footar from "@/components/Footar"; // ← adjust path
import Link from "next/link";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* ═════════════════ CONFIG ═════════════════ */

const CFG = {
  "shareText": "LLP Form 8 is due 30 Oct 2026. Late-fee calculator, audit checker and filing steps:",
  "toc": [
    {
      "id": "due",
      "label": "Due date"
    },
    {
      "id": "fee",
      "label": "Late fee"
    },
    {
      "id": "audit",
      "label": "Audit & small LLP"
    },
    {
      "id": "what",
      "label": "Contents"
    },
    {
      "id": "vs",
      "label": "Form 8 vs 11"
    },
    {
      "id": "steps",
      "label": "How to file"
    },
    {
      "id": "docs",
      "label": "Documents"
    },
    {
      "id": "mistakes",
      "label": "Mistakes"
    },
    {
      "id": "after",
      "label": "After filing"
    },
    {
      "id": "faqs",
      "label": "FAQs"
    }
  ],
  "badge": "⏰ LLP Compliance · FY 2025-26",
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
  "h1a": "LLP Form 8: Due 30 October 2026.",
  "h1b": "Late Fee, Audit Limits & Filing Process",
  "lede": "Every LLP files Form 8 each year, even with no business. Check how many days are left, estimate the additional fee for any delay, see whether you need an audit and follow the filing steps on the MCA portal.",
  "readMin": 10,
  "cta": {
    "h": "Need your LLP Form 8 filed on time?",
    "p": "Our CA team prepares the accounts, checks the solvency declaration, files Form 8 and Form 11 and tracks every due date for you.",
    "label": "File my LLP Form 8",
    "href": "/serviceslist/roc/annual-roc-compliance"
  },
  "side": {
    "h": "LLP annual filing, handled",
    "p": "Form 8 and Form 11 prepared, certified and filed by a CA team."
  },
  "takeaways": [
    "Form 8 for FY 2025-26 is due 30 October 2026, and every LLP files it, including dormant ones.",
    "MCA General Circular 05/2026 covers companies, not LLPs. We are not aware of any extension for Form 8.",
    "Late fee is a slab multiple of the normal fee, charged per form, with lower multiples for small LLPs.",
    "An audit is generally needed if turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh.",
    "File Form 11 first and keep the DSCs of two designated partners valid."
  ],
  "url": "https://www.taxvio.in/guide/roc/llp-form-8",
  "modified": "2026-10-26",
  "dateLabel": "26 October 2026",
  "service": "LLP Form 8 Filing",
  "related": [
    {
      "label": "Annual ROC Compliance service",
      "href": "/serviceslist/roc/annual-roc-compliance"
    },
    {
      "label": "LLP registration",
      "href": "/serviceslist/roc/llp-formation"
    },
    {
      "label": "MCA Circular 05/2026: what it covers for companies",
      "href": "/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension"
    },
    {
      "label": "ROC additional fee from the original due date",
      "href": "/guide/roc/roc-additional-fee-from-original-due-date-aoc-4-mgt-7"
    }
  ],
  "sources": [
    {
      "label": "MCA General Circular No. 05/2026 dated 24 Oct 2026 (companies only; text supplied by Taxvio)",
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

const FORM8_DUE = new Date(2026, 9, 30); // 30 Oct 2026, FY 2025-26
const FORM11_DUE = new Date(2026, 4, 30); // about 60 days after 31 Mar 2026

/** Additional fee multiple of the normal fee, by days of delay (reported slab table). */
const BANDS = [
  { to: 15, label: "Up to 15 days", small: 1, other: 2 },
  { to: 30, label: "16 to 30 days", small: 2, other: 4 },
  { to: 60, label: "31 to 60 days", small: 4, other: 8 },
  { to: 90, label: "61 to 90 days", small: 6, other: 12 },
  { to: 180, label: "91 to 180 days", small: 10, other: 20 },
  { to: 360, label: "181 to 360 days", small: 15, other: 30 },
];

function bandFor(delay: number) {
  if (delay <= 0) return -1;
  const i = BANDS.findIndex((b) => delay <= b.to);
  return i === -1 ? BANDS.length : i; // BANDS.length = beyond 360 days
}

function HeroCard() {
  const today = useToday();
  const st = statusOf(FORM8_DUE, today);
  const diff = today ? daysBetween(FORM8_DUE, today) : null;
  return (
    <div className="bk-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">LLP Form 8 · FY 2025-26</p>
      <p className="font-extrabold text-[#00416a] text-lg mb-4">Due 30 October 2026</p>
      <div className="rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white p-5 text-center">
        <p className="text-5xl font-extrabold tabular-nums">{diff === null ? "–" : diff >= 0 ? diff : Math.abs(diff)}</p>
        <p className="text-sm text-sky-100 mt-1">{diff === null ? "…" : diff > 0 ? "days left" : diff === 0 ? "last day is today" : "days past the date"}</p>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${st.cls}`}>{st.text}</span>
        <span className="text-[11px] text-gray-400">Filing on the date costs no additional fee</span>
      </div>
      <p className="mt-3 text-sm text-gray-600">The company relief in Circular 05/2026 does <b>not</b> name LLPs. Check below before you assume more time.</p>
    </div>
  );
}

function DueStrip() {
  const today = useToday();
  const items = [
    { f: "DIR-3 KYC", d: new Date(2026, 8, 30), n: "Designated partners with a DIN", c: "bg-sky-500" },
    { f: "Form 11", d: FORM11_DUE, n: "Annual return, 60 days after year-end", c: "bg-indigo-500" },
    { f: "Form 8", d: FORM8_DUE, n: "Statement of account and solvency", c: "bg-[#00416a]" },
  ];
  return (
    <Card>
      <ol className="space-y-3">
        {items.map((it) => {
          const s = statusOf(it.d, today);
          return (
            <li key={it.f} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
              <span className={`flex-shrink-0 w-3 h-10 rounded-full ${it.c}`} />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[#00416a]">{it.f}</p>
                <p className="text-xs text-gray-500">{fmtDate(it.d)} · {it.n}</p>
              </div>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${s.cls}`}>{s.text}</span>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-xs text-gray-400">Form 11 shown at 30 May, which is 60 days after 31 March. DIR-3 KYC date shown as commonly reported; confirm it for your DIN.</p>
    </Card>
  );
}

function LateFeeLab() {
  const [filed, setFiled] = useState("2026-10-30");
  const [small, setSmall] = useState(true);
  const [normal, setNormal] = useState(100);
  const [forms, setForms] = useState(1);
  const f = parseD(filed);
  const delay = f ? daysBetween(f, FORM8_DUE) : 0;
  const bi = bandFor(delay);
  const beyond = bi === BANDS.length;
  const mult = bi < 0 ? 0 : beyond ? (small ? 15 : 30) : small ? BANDS[bi].small : BANDS[bi].other;
  const perForm = mult * normal;
  const total = perForm * forms;
  const maxM = small ? 15 : 30;
  const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return (
    <Card>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Date you plan to file Form 8">
          <input type="date" value={filed} onChange={(e) => setFiled(e.target.value)} className={inputCls} />
        </Field>
        <Field label="Normal filing fee on the portal">
          <select value={normal} onChange={(e) => setNormal(+e.target.value)} className={inputCls}>
            {[50, 100, 150, 200].map((n) => (<option key={n} value={n}>{inr(n)}</option>))}
          </select>
        </Field>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {([[true, "Small LLP"], [false, "Other LLP"]] as const).map(([v, l]) => (
          <button key={l} onClick={() => setSmall(v)} aria-pressed={small === v} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${small === v ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:bg-[#00416a]/5"}`}>{l}</button>
        ))}
        <span className="mx-1 text-gray-300">|</span>
        {[1, 2].map((n) => (
          <button key={n} onClick={() => setForms(n)} aria-pressed={forms === n} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${forms === n ? "bg-amber-500 text-white border-amber-500" : "bg-white text-amber-700 border-amber-300 hover:bg-amber-50"}`}>{n === 1 ? "Form 8 only" : "Form 8 and Form 11 both late"}</button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {[["On time", FORM8_DUE], ["+ 10 days", addDays(FORM8_DUE, 10)], ["+ 45 days", addDays(FORM8_DUE, 45)], ["+ 120 days", addDays(FORM8_DUE, 120)]].map(([l, d]) => (
          <button key={l as string} onClick={() => setFiled(iso(d as Date))} className="text-xs font-semibold text-[#00416a] border border-[#00416a]/25 rounded-full px-3 py-1.5 hover:bg-[#00416a]/5 transition">{l as string}</button>
        ))}
      </div>
      <div className="mt-5 grid sm:grid-cols-3 gap-3">
        <Stat k="Days late" v={delay > 0 ? String(delay) : "0"} tone={delay > 0 ? "warn" : "good"} />
        <Stat k="Multiple of normal fee" v={bi < 0 ? "None" : `${mult}×`} tone={bi < 0 ? "good" : "warn"} />
        <Stat k={forms > 1 ? "Additional fee, both forms" : "Additional fee"} v={inr(total)} tone={total > 0 ? "bad" : "good"} />
      </div>
      <div className="mt-6 space-y-2" aria-label="Fee multiple by delay band">
        {BANDS.map((b, i) => {
          const m = small ? b.small : b.other;
          const on = i === bi;
          return (
            <div key={b.label} className="flex items-center gap-3 text-xs">
              <span className={`w-28 flex-shrink-0 ${on ? "font-bold text-[#00416a]" : "text-gray-500"}`}>{b.label}</span>
              <div className="flex-1 h-5 rounded-full bg-gray-100 overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${on ? "bg-amber-500" : "bg-[#00416a]/40"}`} style={{ width: `${(m / maxM) * 100}%` }} />
              </div>
              <span className={`w-8 text-right tabular-nums ${on ? "font-bold text-amber-700" : "text-gray-500"}`}>{m}×</span>
            </div>
          );
        })}
      </div>
      {beyond && <p className="mt-3 text-sm text-red-700 font-semibold">More than 360 days late: a further amount applies on top. Ask us for the exact figure for your case.</p>}
      <p className="mt-4 text-xs text-gray-400">Illustrative. The multiples follow the slab table reported for LLPs since 1 April 2022. The normal fee depends on your contribution slab, so confirm both on the MCA portal before you pay. Separate penalties under the LLP Act are not included.</p>
    </Card>
  );
}

function AuditCheck() {
  const [turn, setTurn] = useState(30);
  const [prev, setPrev] = useState(30);
  const [contrib, setContrib] = useState(10);
  const audit = turn > 40 || contrib > 25;
  const small = contrib <= 25 && prev <= 40;
  const bar = (v: number, lim: number) => Math.min(100, (v / lim) * 100);
  return (
    <Card>
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Turnover this year (₹ lakh)">
          <input type="number" min={0} value={turn} onChange={(e) => setTurn(Math.max(0, +e.target.value || 0))} className={inputCls} />
        </Field>
        <Field label="Turnover last year (₹ lakh)">
          <input type="number" min={0} value={prev} onChange={(e) => setPrev(Math.max(0, +e.target.value || 0))} className={inputCls} />
        </Field>
        <Field label="Contribution (₹ lakh)">
          <input type="number" min={0} value={contrib} onChange={(e) => setContrib(Math.max(0, +e.target.value || 0))} className={inputCls} />
        </Field>
      </div>
      <div className="mt-5 space-y-3">
        {[["Turnover against ₹40 lakh", turn, 40], ["Contribution against ₹25 lakh", contrib, 25]].map(([l, v, lim]) => (
          <div key={l as string}>
            <div className="flex justify-between text-xs text-gray-600 mb-1"><span>{l as string}</span><span className="tabular-nums">{v as number} / {lim as number}</span></div>
            <div className="h-3 rounded-full bg-gray-100 overflow-hidden"><div className={`h-full rounded-full transition-all duration-500 ${(v as number) > (lim as number) ? "bg-red-500" : "bg-emerald-500"}`} style={{ width: `${bar(v as number, lim as number)}%` }} /></div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        <Stat k="LLP-law audit" v={audit ? "Likely required" : "Likely exempt"} tone={audit ? "warn" : "good"} />
        <Stat k="Small LLP status" v={small ? "Likely small LLP" : "Not small"} tone={small ? "good" : "info"} />
      </div>
      <p className="mt-4 text-xs text-gray-400">Reads the limits as ₹40 lakh turnover or ₹25 lakh contribution for audit, and ₹25 lakh contribution with ₹40 lakh previous-year turnover for small LLP status. Limits can be revised and tax audit rules are separate. Your CA confirms the final position.</p>
    </Card>
  );
}

function StepFlow() {
  const steps = [
    ["Close the books", "Finalise accounts to 31 March, reconcile bank and partner balances, and complete the audit if required."],
    ["File Form 11 first", "Contribution and partner details should agree between the two forms."],
    ["Log in to the MCA V3 portal", "Open the LLP forms section and select Form 8. V3 web forms can be saved as drafts."],
    ["Fill Part A and Part B", "Solvency declaration, assets and liabilities, income and expenditure, charges and MSME dues."],
    ["Attach documents and check figures", "Audit report if applicable. Every figure should match your books and your income tax computation."],
    ["Sign with DSC and certify", "Two designated partners sign digitally and the professional certifies as the form requires."],
    ["Pay the fee and submit", "Pay the filing fee, plus any additional fee, then download the SRN receipt and approved form."],
  ];
  const [done, setDone] = useState<Record<number, boolean>>({});
  const [open, setOpen] = useState(0);
  const n = steps.filter((_, i) => done[i]).length;
  return (
    <Card>
      <Progress pct={Math.round((n / steps.length) * 100)} label={`${n} of ${steps.length} steps done`} />
      <ol className="mt-5 space-y-2">
        {steps.map(([t, d], i) => {
          const isOpen = open === i;
          return (
            <li key={t} className={`rounded-2xl border transition ${done[i] ? "bg-emerald-50 border-emerald-200" : isOpen ? "bg-white border-[#00416a]/40 shadow-md" : "bg-gray-50 border-gray-100"}`}>
              <div className="flex items-center gap-3 px-4 py-3">
                <button onClick={() => setDone((x) => ({ ...x, [i]: !x[i] }))} aria-label={`Mark step ${i + 1} done`} className={`flex-shrink-0 w-8 h-8 rounded-full text-sm font-extrabold flex items-center justify-center transition ${done[i] ? "bg-emerald-500 text-white" : "bg-[#00416a] text-white"}`}>{done[i] ? "✓" : i + 1}</button>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex-1 text-left font-bold text-[#00416a]">{t}</button>
                <span className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>⌄</span>
              </div>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden px-4 pl-[3.75rem] text-sm text-gray-600 leading-relaxed"><span className="block pb-4">{d}</span></p>
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
      <Sec id="due" label="Due date" title="The due date: 30 October 2026, and why it is close">
        <P>Form 8 is the <strong>Statement of Account and Solvency</strong> that every Limited Liability Partnership files with the Registrar of Companies each year. The rule is that it must be filed <strong>within 30 days from the end of six months of the financial year</strong>. For the usual 1 April to 31 March year, six months after year-end is 30 September, and thirty days after that is 30 October. For the year ended 31 March 2026, the due date is therefore <strong>30 October 2026</strong>.</P>
        <P>The countdown at the top of this page counts from today. If you are reading this in the last week, the sensible plan is to treat every day as expensive, because the additional fee starts the day after the due date and grows by slab. The sections below show what that costs, who must sign, what documents you need and how to file without surprises.</P>
        <Reveal><DueStrip /></Reveal>
        <P><strong>What about the new MCA circular?</strong> On 24 October 2026 the Ministry issued General Circular 05/2026, which allows companies to file AOC-4 and its variants up to 31 December 2026 and MGT-7 and MGT-7A up to 31 January 2027 without additional fees. The circular speaks of companies under the Companies Act, 2013. It does not mention LLPs or Form 8, and we are not aware of any similar relief for LLP forms this year. Relief for companies has not been extended to LLPs in past years either, so please do not assume that it will be. If you manage both a company and an LLP, our guide on the <Link href="/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension" className="text-[#00416a] font-semibold underline">company circular</Link> shows what moved on the company side.</P>
        <Callout tone="warn" title="Check before relying on any extension">
          Rules and dates change by notification. Before you plan around more time, confirm on the MCA website or with your CA that a circular for LLPs has actually been issued. Filing on or before 30 October removes the question.
        </Callout>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-[480px] w-full text-sm">
              <thead><tr>{["Financial year", "Year-end", "Form 8 due date"].map((h) => <th key={h} className="px-4 py-3 text-left font-bold text-white bg-[#00416a] whitespace-nowrap">{h}</th>)}</tr></thead>
              <tbody>
                <tr><td className="px-4 py-3 border-t border-gray-100">FY 2024-25</td><td className="px-4 py-3 border-t border-gray-100">31 March 2025</td><td className="px-4 py-3 border-t border-gray-100">30 October 2025</td></tr>
                <tr className="bg-sky-50/60"><td className="px-4 py-3 border-t border-gray-100 font-bold text-[#00416a]">FY 2025-26</td><td className="px-4 py-3 border-t border-gray-100">31 March 2026</td><td className="px-4 py-3 border-t border-gray-100 font-bold text-[#00416a]">30 October 2026</td></tr>
                <tr><td className="px-4 py-3 border-t border-gray-100">FY 2026-27</td><td className="px-4 py-3 border-t border-gray-100">31 March 2027</td><td className="px-4 py-3 border-t border-gray-100">30 October 2027</td></tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </Sec>

      <Sec id="fee" label="Late fee" title="What a delay costs: the slab-based additional fee">
        <P>Since 1 April 2022, the MCA has charged an <strong>additional fee that is a multiple of the normal filing fee</strong>, and the multiple rises with the length of delay. A small LLP pays a lower multiple than other LLPs. Many older articles still quote a flat ₹100 per day. That was the earlier position and is no longer how the portal calculates the fee for LLP forms, so treat those figures with caution.</P>
        <P>The normal fee itself depends on the LLP&apos;s contribution and is modest. The multiple is what makes a delay expensive. Use the calculator to pick a filing date, choose whether you are a small LLP and see the band you land in. The bars show how fast the multiple climbs.</P>
        <Reveal><LateFeeLab /></Reveal>
        <P>Two points are easy to miss. First, the fee is charged <strong>per form</strong>. An LLP that is late with both Form 8 and Form 11 pays for each of them, which is why the calculator lets you switch to two forms. Second, beyond 360 days a further amount is added and the additional fee has no overall rupee ceiling, so a long default does not stop growing.</P>
        <P><strong>Separate penalties.</strong> In addition to the additional fee, the LLP Act provides for monetary penalties on the LLP and its designated partners for default. After the 2021 amendment replaced prosecution with penalties, these are reported at ₹100 per day, capped per form, with a lower amount for small LLPs. There is also a relief route where no penalty is imposed if the LLP files within a stated period after the adjudicating officer&apos;s notice. The exact figures and conditions are fixed by law and can change, so your CA should confirm them before you plan around them.</P>
        <P><strong>The larger risks of long default</strong> are not the fees. Designated partners can face DIN-related restrictions, banks and tender authorities can refuse to work with a defaulting LLP, and eventually the Registrar may start action to strike the LLP off the register. Clearing a default early is nearly always cheaper than clearing it later.</P>
      </Sec>

      <Sec id="audit" label="Audit" title="Audit limits and the small LLP: where do you stand?">
        <P>The accounts of an LLP must be audited by a Chartered Accountant if <strong>turnover exceeds ₹40 lakh</strong> or <strong>contribution exceeds ₹25 lakh</strong> in any financial year. If neither limit is crossed, the LLP is generally exempt from this audit, although the partners remain responsible for maintaining correct books. A tax audit under the Income-tax Act has its own thresholds and does not depend on this one.</P>
        <P>The law also recognises a <strong>small LLP</strong>. Since 1 April 2022, an LLP qualifies as small if its contribution does not exceed ₹25 lakh <em>and</em> its turnover in the preceding financial year does not exceed ₹40 lakh. Small LLPs pay lower additional fees for late filing and face reduced penalties, so it is worth checking your status before you pay anything.</P>
        <Reveal><AuditCheck /></Reveal>
        <P>If the checker says your LLP is likely to need an audit and the audit is not yet done, that is the first thing to fix. The audit report is an attachment to the filing, and an audit started on 28 October will not finish on time. The limits can be revised by the government, so confirm them for the year in which you file.</P>
      </Sec>

      <Sec id="what" label="Contents" title="What Form 8 contains">
        <P>The form is a web form on the MCA V3 portal. It has two broad parts, and both are declarations made by the designated partners, so they should rest on real books and not on estimates.</P>
        <Reveal>
          <Tabs tabs={[
            { id: "a", label: "Part A: Solvency", body: <><p className="mb-3">Here the designated partners declare that the LLP has kept proper books of account and state whether, in their opinion, the LLP can pay its debts in full as they become due in the ordinary course of business.</p><p>This is a serious declaration. A false or careless one can expose designated partners to consequences under the LLP Act, so base it on the actual balance sheet, loans and commitments.</p></> },
            { id: "b", label: "Part B: Accounts", body: <><p className="mb-3">Part B reports the position as at 31 March. It covers assets and liabilities, including partners&apos; contribution and loans taken or given, and income and expenditure with turnover and profit or loss.</p><p>It also asks about charges created or satisfied on the LLP&apos;s assets, amounts due to micro and small enterprises, contingent liabilities and other disclosures.</p></> },
            { id: "c", label: "Match with tax", body: <><p className="mb-3">The balance sheet and profit and loss account you prepare for the income tax return should agree with Form 8, because the department compares the figures.</p><p>Differences between the two sets of numbers are a common reason for queries and for later corrections, which cost time and sometimes fees.</p></> },
          ]} />
        </Reveal>
      </Sec>

      <Sec id="vs" label="Form 8 vs 11" title="Form 8 and Form 11: do not mix them up">
        <P>LLPs often confuse the two annual forms. Form 11 is about <em>who the LLP is</em>: its partners and their contributions. Form 8 is about <em>how the LLP is doing</em>: its accounts and solvency. Together they make up the LLP&apos;s annual ROC compliance, and every LLP files both, whether or not it did any business.</P>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead><tr>{["Point", "Form 11", "Form 8"].map((h) => <th key={h} className="px-4 py-3 text-left font-bold text-white bg-[#00416a] whitespace-nowrap">{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ["Name", "Annual Return", "Statement of Account & Solvency"],
                  ["Covers", "Partners, designated partners, contribution, changes", "Assets, liabilities, income, expenditure, solvency"],
                  ["Due date (31 March year-end)", "Within 60 days, about 30 May", "30 October"],
                  ["Signed by", "One designated partner with DSC", "Two designated partners with DSC, plus certification"],
                  ["Applies to", "Every LLP", "Every LLP"],
                ].map((r) => (<tr key={r[0]}><td className="px-4 py-3 border-t border-gray-100 font-bold">{r[0]}</td><td className="px-4 py-3 border-t border-gray-100 text-gray-700">{r[1]}</td><td className="px-4 py-3 border-t border-gray-100 text-gray-700">{r[2]}</td></tr>))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <P>Because Form 11 is due first, file it first. The contribution figures in the two forms should agree, and a mismatch is a common reason for queries. If you have not filed Form 11 for this year yet, do it before or together with Form 8 and include its additional fee in your estimate. Our <Link href="/serviceslist/roc/annual-roc-compliance" className="text-[#00416a] font-semibold underline">annual ROC compliance</Link> service handles both.</P>
      </Sec>

      <Sec id="steps" label="How to file" title="Step by step: filing LLP Form 8 online">
        <P>The process is simple when the books are ready and slow when they are not. Tick each step as you go. The progress ring tracks your position, and each step opens to show what to do.</P>
        <Reveal><StepFlow /></Reveal>
        <P>Once filed, the form is processed by the Registrar. Keep the SRN receipt and the approved form safely, because they are your proof of filing and are often asked for by banks, investors and tender authorities. If the filing is rejected or sent back for correction, the clock does not stop, which is another reason not to file on the last day.</P>
      </Sec>

      <Sec id="docs" label="Documents" title="Documents to keep ready">
        <P>Gather these before you open the portal. A missing item on the final day is the most common cause of a late filing.</P>
        <Reveal>
          <Checklist storeKey="llp8" items={[
            "Balance sheet, profit and loss account and notes as at 31 March 2026",
            "Trial balance and ledgers supporting partners’ capital, loans and fixed assets",
            "Details of charges created or satisfied during the year, if any",
            "Details of dues to micro and small enterprises, if applicable",
            "Valid Digital Signature Certificates of at least two designated partners",
            "LLPIN, PAN and the designated partners’ DPIN",
            "Audit report and auditor details, if the audit limits are crossed",
            "Certification by a practising professional, as the form requires",
            "Form 11 filed or ready, with contribution figures matching",
          ]} />
        </Reveal>
        <P>Check the validity of every DSC at the start of the week. An expired certificate is one of the most common reasons a filing stalls at the last minute, and renewal can take a day or more.</P>
      </Sec>

      <Sec id="mistakes" label="Mistakes" title="Six mistakes that cost LLPs money">
        <P>These are the errors we see most often, and each one is avoidable.</P>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            ["Treating Form 8 as optional for a dormant LLP", "Every LLP files, with or without business. A dormant LLP files nil or minimal figures."],
            ["Filing Form 8 before Form 11, or with mismatched contribution", "Different partner or contribution data in the two forms leads to queries and corrections."],
            ["Letting the DSC expire", "Check every designated partner&apos;s certificate well before the deadline."],
            ["Ignoring the audit limits", "Crossing ₹40 lakh turnover or ₹25 lakh contribution makes an audit mandatory."],
            ["A careless solvency declaration", "Base it on actual numbers, because designated partners carry responsibility for it."],
            ["Relying on old late-fee articles", "The slab-based fee replaced the flat per-day figure that older posts still quote."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="h-full rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                <p className="font-bold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: d }} />
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec id="after" label="After filing" title="After Form 8: what else should an LLP do?">
        <P>Form 8 is one part of a wider annual calendar. After filing it, complete the LLP&apos;s <strong>income tax return</strong> (ITR-5), whose due dates are set separately by the Income Tax Department and are sometimes extended by CBDT circulars. An MCA date and an income tax date are independent, so one never moves the other.</P>
        <P>Designated partners should also confirm that their <strong>DIR-3 KYC</strong> is up to date, because a missed KYC can lead to DIN deactivation and a fee to reactivate it. If your LLP is registered for GST, keep your <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-semibold underline">GST returns</Link> and annual return in step with the books you used for Form 8, since mismatches between GST and accounts attract questions.</P>
        <P>Finally, keep a compliance folder with the filed forms, SRN receipts, the audit report and the financial statements. Banks, investors and tender authorities increasingly ask for the last two or three years&apos; filings, and a tidy record saves days when they do. If you would rather hand the whole calendar to a CA team, that is exactly what our ROC service is for.</P>
      </Sec>
      <Sec id="faqs" label="FAQs" title="Frequently asked questions">
        <Faqs faqs={faqs} />
      </Sec>
    </>
  );
}