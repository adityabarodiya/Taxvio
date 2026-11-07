"use client";

// app/guide/roc/aoc-4-xbrl-cfs-mgt-7-mgt-7a-which-form-to-file/WhichFormClient.tsx

import Footar from "@/components/Footar"; // ← adjust path
import Link from "next/link";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* ═════════════════ CONFIG ═════════════════ */

const CFG = {
  "shareText": "AOC-4, XBRL, CFS, MGT-7 or MGT-7A? Find the right ROC annual forms for FY 2025-26 in a minute:",
  "toc": [
    {
      "id": "overview",
      "label": "Overview"
    },
    {
      "id": "finder",
      "label": "Form finder"
    },
    {
      "id": "xbrl",
      "label": "XBRL"
    },
    {
      "id": "cfs",
      "label": "Consolidated"
    },
    {
      "id": "mgt",
      "label": "Annual return"
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
      "id": "checklist",
      "label": "Checklist"
    },
    {
      "id": "faqs",
      "label": "FAQs"
    }
  ],
  "badge": "📝 ROC Guide · FY 2025-26 forms",
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
  "h1a": "AOC-4, XBRL, CFS, MGT-7 or MGT-7A:",
  "h1b": "Which Annual Form Must You File for FY 2025-26?",
  "lede": "The MCA relief names seven forms with two different fee-free windows. A wrong variant means a rejected filing and lost days. Answer a few questions and see which forms apply to your company.",
  "readMin": 9,
  "cta": {
    "h": "Not sure which form applies to you?",
    "p": "Our CA team classifies the company, prepares the right variants and files them before the fee-free window ends.",
    "label": "Get the right forms filed",
    "href": "/serviceslist/roc/annual-roc-compliance"
  },
  "side": {
    "h": "Right form, first time",
    "p": "We confirm the variant, prepare the attachments and file AOC-4 and MGT-7 for you."
  },
  "takeaways": [
    "General Circular 05/2026 names five AOC-4 variants (to 31 Dec 2026) and two annual return forms, MGT-7 and MGT-7A (to 31 Jan 2027).",
    "XBRL filing depends on listing, size and Ind AS status. Confirm it before you finalise accounts.",
    "A company with subsidiaries, associates or joint ventures generally files a separate consolidated AOC-4 CFS.",
    "MGT-7A is for OPCs and small companies only. Your classification decides, not your preference.",
    "File at least two weeks before the last fee-free date to leave room for rejections."
  ],
  "url": "https://www.taxvio.in/guide/roc/aoc-4-xbrl-cfs-mgt-7-mgt-7a-which-form-to-file",
  "modified": "2026-10-25",
  "dateLabel": "25 October 2026",
  "service": "Annual ROC Compliance",
  "related": [
    {
      "label": "Annual ROC Compliance service",
      "href": "/serviceslist/roc/annual-roc-compliance"
    },
    {
      "label": "MCA Circular 05/2026: what it covers",
      "href": "/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension"
    },
    {
      "label": "ROC additional fee from the original due date",
      "href": "/guide/roc/roc-additional-fee-from-original-due-date-aoc-4-mgt-7"
    },
    {
      "label": "AGM not held by 30 September 2026",
      "href": "/guide/roc/agm-not-held-by-30-september-2026-roc-consequences"
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

function HeroCard() {
  const today = useToday();
  const chips = [
    { f: "AOC-4", d: "31 Dec" },
    { f: "AOC-4 CFS", d: "31 Dec" },
    { f: "AOC-4 XBRL", d: "31 Dec" },
    { f: "AOC-4 NBFC", d: "31 Dec" },
    { f: "AOC-4 CFS NBFC", d: "31 Dec" },
    { f: "MGT-7", d: "31 Jan" },
    { f: "MGT-7A", d: "31 Jan" },
  ];
  const l1 = today ? daysBetween(RELIEF_AOC, today) : null;
  const l2 = today ? daysBetween(RELIEF_MGT, today) : null;
  return (
    <div className="bk-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Seven forms in the circular</p>
      <p className="font-extrabold text-[#00416a] text-lg mb-4">Two windows, one right form</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <span key={c.f} className={`text-xs font-bold px-3 py-1.5 rounded-full border ${c.d === "31 Dec" ? "bg-[#00416a]/5 text-[#00416a] border-[#00416a]/20" : "bg-amber-50 text-amber-800 border-amber-200"}`}>{c.f} · {c.d}</span>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-3 text-center"><p className="text-3xl font-extrabold text-[#00416a] tabular-nums">{l1 === null ? "–" : Math.max(0, l1)}</p><p className="text-[11px] font-semibold text-gray-500">days to 31 Dec</p></div>
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-3 text-center"><p className="text-3xl font-extrabold text-amber-600 tabular-nums">{l2 === null ? "–" : Math.max(0, l2)}</p><p className="text-[11px] font-semibold text-gray-500">days to 31 Jan</p></div>
      </div>
    </div>
  );
}

type Opt = { v: string; l: string };
type Q = { id: string; q: string; hint?: string; opts: Opt[]; show: (a: Record<string, string>) => boolean };
const QUESTIONS: Q[] = [
  {
    id: "type", q: "What kind of company is it?", opts: [
      { v: "pvt", l: "Private limited" },
      { v: "pub", l: "Public, unlisted" },
      { v: "listed", l: "Listed company" },
      { v: "opc", l: "One Person Company" },
      { v: "nbfc", l: "NBFC" },
    ], show: () => true,
  },
  {
    id: "small", q: "Does it qualify as a small company?", hint: "As defined in Section 2(85), on the limits currently in force. Not sure? Pick that and ask your CS.",
    opts: [{ v: "yes", l: "Yes" }, { v: "no", l: "No" }, { v: "unsure", l: "Not sure" }], show: (a) => a.type === "pvt",
  },
  {
    id: "indas", q: "Is it required to follow Ind AS?", opts: [{ v: "yes", l: "Yes" }, { v: "no", l: "No" }], show: (a) => ["pvt", "pub", "nbfc"].includes(a.type),
  },
  {
    id: "size", q: "Paid-up capital of ₹5 crore or more, or turnover of ₹100 crore or more?", hint: "Turnover of the immediately preceding financial year, as the references describe it.",
    opts: [{ v: "yes", l: "Yes" }, { v: "no", l: "No" }], show: (a) => ["pvt", "pub", "opc"].includes(a.type) && a.indas !== "yes",
  },
  {
    id: "cons", q: "Does it have subsidiaries, associates or joint ventures that require consolidated statements?", opts: [{ v: "yes", l: "Yes" }, { v: "no", l: "No" }], show: (a) => a.type !== "opc",
  },
];

function FormFinder() {
  const [ans, setAns] = useState<Record<string, string>>({});
  const visible = QUESTIONS.filter((q) => q.show(ans));
  const next = visible.find((q) => !ans[q.id]);
  const answered = visible.filter((q) => ans[q.id]).length;
  const pct = Math.round((answered / visible.length) * 100);

  const back = () => {
    const last = [...visible].reverse().find((q) => ans[q.id]);
    if (!last) return;
    setAns((a) => {
      const c = { ...a };
      delete c[last.id];
      return c;
    });
  };

  let result: ReactNode = null;
  if (!next) {
    const isNbfc = ans.type === "nbfc";
    const indas = ans.indas === "yes";
    const xbrl = ans.type === "listed" || (!isNbfc && (indas || ans.size === "yes"));
    const cons = ans.cons === "yes";
    let fs = "AOC-4";
    if (isNbfc && indas) fs = "AOC-4 NBFC (Ind AS)";
    else if (xbrl) fs = "AOC-4 XBRL";
    let cfs = "";
    if (cons) cfs = isNbfc && indas ? "AOC-4 CFS NBFC (Ind AS)" : "AOC-4 CFS";
    const small = ans.type === "opc" || ans.small === "yes";
    const ar = small ? "MGT-7A" : "MGT-7";
    result = (
      <div className="mt-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#00416a] text-white p-5">
            <p className="text-[11px] uppercase tracking-widest font-bold opacity-70">Financial statements</p>
            <p className="text-2xl font-extrabold mt-1">{fs}</p>
            {cfs && <p className="text-base font-bold mt-1">+ {cfs}</p>}
            <p className="text-sm mt-3 text-sky-100">No additional fee up to <b>31 Dec 2026</b></p>
          </div>
          <div className="rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 p-5">
            <p className="text-[11px] uppercase tracking-widest font-bold opacity-70">Annual return</p>
            <p className="text-2xl font-extrabold mt-1">{ar}</p>
            <p className="text-sm mt-3">No additional fee up to <b>31 Jan 2027</b></p>
          </div>
        </div>
        <div className="rounded-2xl bg-sky-50 border border-sky-100 px-5 py-4 text-sm text-[#00416a] space-y-1.5">
          {xbrl && <p>• XBRL tagging is likely to apply. Allow extra days for the taxonomy and validation.</p>}
          {isNbfc && !indas && <p>• NBFCs are reported to be exempt from XBRL unless notified, so the standard AOC-4 is shown. Confirm with your CA.</p>}
          {ans.small === "unsure" && <p>• You were not sure about the small company status. It decides between MGT-7 and MGT-7A, so confirm it first.</p>}
          {cons && <p>• The consolidated statements are a separate form with a separate filing. Check whether it is also required in XBRL.</p>}
          {!small && <p>• Larger companies may also need a practising CS to certify the annual return. Ask your CS.</p>}
          <p>• This result covers the two form families only. ADT-1, DIR-3 KYC and MSME-1 are separate.</p>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <p className="font-bold text-[#00416a]">Form finder</p>
        <span className="text-xs font-semibold text-gray-400 tabular-nums">{answered}/{visible.length} answered</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden mb-5">
        <div className="h-full rounded-full bg-gradient-to-r from-[#00416a] to-emerald-400 transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      {next && (
        <div key={next.id}>
          <p className="font-bold text-gray-800">{next.q}</p>
          {next.hint && <p className="text-xs text-gray-500 mt-1">{next.hint}</p>}
          <div className="mt-4 flex flex-wrap gap-2">
            {next.opts.map((o) => (
              <button key={o.v} onClick={() => setAns((a) => ({ ...a, [next.id]: o.v }))} className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-[#00416a]/20 text-[#00416a] bg-white hover:bg-[#00416a] hover:text-white hover:shadow-md transition">{o.l}</button>
            ))}
          </div>
        </div>
      )}
      {result}
      <div className="mt-5 flex gap-4 text-sm font-semibold">
        <button onClick={back} disabled={answered === 0} className="text-[#00416a] disabled:opacity-30">← Back</button>
        <button onClick={() => setAns({})} disabled={answered === 0} className="text-gray-500 hover:text-[#00416a] disabled:opacity-30">Start over</button>
      </div>
      <p className="mt-4 text-xs text-gray-400">A general guide based on public references. The thresholds and exemptions change, so your CA or CS should confirm the form before you file.</p>
    </Card>
  );
}

function XbrlTable() {
  const rows = [
    ["Listed companies and their Indian subsidiaries", "Yes", "Regardless of size"],
    ["Paid-up capital ₹5 crore or more", "Yes", "Public or private"],
    ["Turnover ₹100 crore or more (preceding year)", "Yes", "Public or private"],
    ["Companies required to follow Ind AS", "Yes", "As the references describe"],
    ["NBFCs, housing finance, banking, insurance", "Exempt", "Unless the MCA notifies otherwise"],
    ["Everyone else", "No", "Voluntary filing is possible, but later filings then follow it"],
  ];
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#00416a] text-white text-left">
            <th className="px-4 py-3 font-semibold">Company</th>
            <th className="px-4 py-3 font-semibold">XBRL?</th>
            <th className="px-4 py-3 font-semibold">Note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[0]} className={i % 2 ? "bg-gray-50" : "bg-white"}>
              <td className="px-4 py-3 text-gray-800 font-medium">{r[0]}</td>
              <td className="px-4 py-3"><span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r[1] === "Yes" ? "bg-sky-100 text-sky-800" : r[1] === "Exempt" ? "bg-amber-100 text-amber-800" : "bg-gray-100 text-gray-600"}`}>{r[1]}</span></td>
              <td className="px-4 py-3 text-gray-500">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-4 py-3 text-xs text-gray-400">Summarised from public references. Verify against the XBRL rules in force for the year.</p>
    </div>
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
      <Sec id="overview" label="Overview" title="Seven forms, two windows: why choosing the right form matters now">
        <P>General Circular 05/2026 names seven forms. Five of them belong to the AOC-4 family and carry a fee-free window up to <strong>31 December 2026</strong>: AOC-4, AOC-4 (CFS), AOC-4 (XBRL), AOC-4 NBFC (Ind AS) and AOC-4 CFS NBFC (Ind AS). The other two, <strong>MGT-7</strong> and <strong>MGT-7A</strong>, carry a window up to <strong>31 January 2027</strong>. The relief applies to FY 2025-26 only and covers additional fees, not the normal filing fee.</P>
        <P>With the extra weeks, the temptation is to start late. But the first task is not to file anything. It is to be sure which form your company is actually required to file. Using the wrong variant leads to rejected filings, wasted fees and, in the worst case, a form that has to be redone after the window has closed. Since fees after the window are counted from the original due date, a wrong-form mistake in late December can be expensive.</P>
        <P>The good news is that the form is decided by a handful of facts about the company, and you can usually work it out in a couple of minutes. The finder below asks those questions in order, hides the ones that do not apply to you, and ends with the two forms you should expect to file.</P>
      </Sec>

      <Sec id="finder" label="Form finder" title="Answer a few questions and get your forms">
        <Reveal><FormFinder /></Reveal>
        <P>Treat the result as a starting point. It uses the criteria that public references describe, and it assumes you have answered each question accurately. Where you chose &ldquo;not sure&rdquo; on the small company question, settle that first, because it decides between the full annual return and the shorter one. Your Company Secretary can confirm it from your paid-up capital and turnover in a few minutes.</P>
      </Sec>

      <Sec id="xbrl" label="XBRL" title="When does AOC-4 need to be filed in XBRL?">
        <P>XBRL stands for eXtensible Business Reporting Language. In practice it means that the numbers in the balance sheet, profit and loss account and notes are tagged to a standard taxonomy, so that the data can be read by machines and not only by people. A company that falls within the XBRL rules must file the financial statements in that format, using the AOC-4 XBRL variant.</P>
        <P>As public references summarise the rules, XBRL filing is required for listed companies and their Indian subsidiaries, for companies with paid-up capital of ₹5 crore or more or turnover of ₹100 crore or more, and for companies that must follow Ind AS. Non-banking finance companies, housing finance companies and companies engaged in banking or insurance are described as exempt unless the MCA notifies otherwise. The references also say that a company outside the mandatory categories can file in XBRL voluntarily, and that once it does, its later filings are expected to follow the same format.</P>
        <Reveal><XbrlTable /></Reveal>
        <Callout tone="warn" title="Give XBRL extra days">
          XBRL filings take longer than ordinary ones, because the data has to be mapped to the taxonomy and then validated. A company that plans to finish its accounts on the last day of the window has not planned for XBRL. Start the tagging as soon as the audited figures are final.
        </Callout>
      </Sec>

      <Sec id="cfs" label="Consolidated" title="AOC-4 CFS and the NBFC variants">
        <P>A company that has subsidiaries, associates or joint ventures is generally required to prepare consolidated financial statements, in addition to its own standalone statements. Those are filed in <strong>AOC-4 CFS</strong>. They are a separate filing from the standalone AOC-4, with their own attachments, and, as reported, their own additional fee count if filed late.</P>
        <P>NBFCs that follow Ind AS use their own forms, <strong>AOC-4 NBFC (Ind AS)</strong> for the standalone statements and <strong>AOC-4 CFS NBFC (Ind AS)</strong> for the consolidated ones. The circular names both, which is a useful reminder that the relief is not limited to the ordinary AOC-4. If you are an NBFC that does not follow Ind AS, the references suggest that the standard AOC-4 applies, but you should confirm it with your CA.</P>
        <P>One practical point for groups: the consolidated statements depend on the subsidiaries&apos; accounts. If a subsidiary is late with its audit, the parent is late with the consolidation, and the fee clock on the parent is running while it waits. Set the subsidiary deadline earlier than the parent deadline, and review it weekly in the last month.</P>
      </Sec>

      <Sec id="mgt" label="Annual return" title="MGT-7 or MGT-7A: which annual return?">
        <P>The annual return is the company&apos;s record of its structure and people for the year: registered office, directors and key managerial personnel, shareholders and shareholding changes, meetings held and attendance, remuneration and the status of charges and loans. It is filed on <strong>MGT-7</strong> for most companies and on the simpler <strong>MGT-7A</strong> for One Person Companies and small companies.</P>
        <P>The difference is real. MGT-7A asks for less, which makes it faster to prepare and cheaper to review. But the classification matters: a company that is not a small company cannot use MGT-7A just because it would prefer to. The classification follows the definition in Section 2(85) and the limits in force, which the Ministry has changed from time to time, so check the current limits with your CS before you decide.</P>
        <P>Companies above certain size or listing thresholds are also expected to have the annual return certified by a practising Company Secretary. The thresholds are set in the rules and should be confirmed by your CS, because they decide whether you need that certification before the MGT-7 can be filed.</P>
        <Callout tone="info" title="The AOC-4 date is not the MGT-7 date">
          The two windows are separate. The January date is for the annual return only. A company that files its MGT-7 early has not met the AOC-4 date, and a company that has met the AOC-4 date still has to file its annual return.
        </Callout>
      </Sec>

      <Sec id="docs" label="Documents" title="What goes into each filing">
        <P>Each form comes with its own bundle of documents. The details differ by company, so the tabs below show the typical attachments and what to prepare ahead of time. Your CA or CS will give you the exact list.</P>
        <Reveal>
          <Tabs tabs={[
            { id: "aoc", label: "AOC-4", body: <><p className="mb-3">The audited balance sheet, profit and loss account, cash flow statement where required, and notes. The auditor&apos;s report, including the reports on internal financial controls and the Order on reporting where it applies. The board&apos;s report with its annexures.</p><p>Everything must match what was adopted at the AGM, and the signatures must be those of the authorised persons.</p></> },
            { id: "cfs", label: "AOC-4 CFS", body: <><p className="mb-3">The consolidated financial statements with the auditor&apos;s report on them, and the supporting statements about subsidiaries, associates and joint ventures.</p><p>Collect each subsidiary&apos;s signed accounts early, because the consolidation cannot be finished before they arrive.</p></> },
            { id: "xbrl", label: "XBRL", body: <><p className="mb-3">The same financial information as the AOC-4, tagged to the taxonomy in an instance document, with the validation report. Mapping errors are the usual cause of delay.</p><p>Keep the version of the accounts that was approved, and tag from that version only.</p></> },
            { id: "mgt", label: "MGT-7 / 7A", body: <><p className="mb-3">The shareholder list and shareholding pattern as at the year end, the director and key managerial personnel details, the list of meetings and attendance, and the details of remuneration and any charges.</p><p>Larger companies add the practising CS certification. OPCs and small companies file the shorter MGT-7A.</p></> },
          ]} />
        </Reveal>
        <P>The practical rule is that every figure and date in the forms should be traceable to a signed document. If the AGM date on the form, in the minutes and in the board&apos;s report do not agree, the filing is at risk of being returned, and a return in the last week of the window is the situation you want to avoid.</P>
      </Sec>

      <Sec id="mistakes" label="Common mistakes" title="Why filings get rejected, and how to avoid it">
        <P>A rejection costs time, and when the window is about to close it can cost money. These are the problems we see most often. Open each one to see the fix.</P>
        <Faqs faqs={[
          { q: "The wrong form variant was chosen", a: "Filing a plain AOC-4 when XBRL is required, or MGT-7 when the company is small, leads to rejection or a re-filing. Settle the variant first, using the finder above and a check with your CS." },
          { q: "Numbers do not match across documents", a: "The balance sheet, the auditor’s report, the board’s report and the form must agree. Reconcile them before upload, not after." },
          { q: "A digital signature is expired or wrongly mapped", a: "Check that each signatory has a valid digital signature registered on the portal. Replacing one in the last week is slow." },
          { q: "A director’s KYC has lapsed", a: "A director with a deactivated DIN may not be able to sign. Check every DIN before you start." },
          { q: "The AGM date is inconsistent", a: "The date on the form, in the minutes and in the notice should be the same. A mismatch also affects the due date you calculated." },
          { q: "Waiting for the last day", a: "The portal can be slow and a rejection takes days to fix. Set an internal deadline at least two weeks before the fee-free date." },
        ]} />
        <P>If you would like a second pair of eyes before you submit, our team can review the package, confirm the form variant and file it for you. See our <Link href="/serviceslist/roc/annual-roc-compliance" className="text-[#00416a] font-semibold underline">Annual ROC Compliance</Link> service, or read what the circular means in our <Link href="/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension" className="text-[#00416a] font-semibold underline">Circular 05/2026 guide</Link>.</P>
      </Sec>

      <Sec id="checklist" label="Checklist" title="Before you press submit">
        <P>Run through the list below once the form is ready. Each tick is a rejection or a late fee you have avoided.</P>
        <Reveal>
          <Checklist storeKey="c4" items={[
            "Form variant confirmed with CS or CA (AOC-4, XBRL, CFS, NBFC, MGT-7 or MGT-7A)",
            "AGM date matches the notice, the minutes and the board’s report",
            "Audited accounts signed by the auditor and the board",
            "Digital signatures valid for every signatory",
            "All director KYC done and DINs active",
            "XBRL validation passed, if applicable",
            "Subsidiary accounts received, if consolidation applies",
            "Filing fee and challan arrangements ready",
            "Internal filing date at least two weeks before the fee-free date",
          ]} />
        </Reveal>
        <P>If you can tick every line, you are in good shape. If several are open, the extra weeks the circular gave you are probably the right amount of time to close them, as long as you start now.</P>
      </Sec>
      <Sec id="faqs" label="FAQs" title="Frequently asked questions">
        <Faqs faqs={faqs} />
      </Sec>
    </>
  );
}