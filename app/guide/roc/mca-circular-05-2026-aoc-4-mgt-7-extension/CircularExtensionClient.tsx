"use client";

// app/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension/CircularExtensionClient.tsx

import Footar from "@/components/Footar"; // ← adjust path
import Link from "next/link";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* ═════════════════ CONFIG ═════════════════ */

const CFG = {
  "shareText": "MCA extends AOC-4 to 31 Dec 2026 and MGT-7 to 31 Jan 2027 (General Circular 05/2026). What it covers and what it doesn't:",
  "toc": [
    {
      "id": "summary",
      "label": "At a glance"
    },
    {
      "id": "checker",
      "label": "Am I covered?"
    },
    {
      "id": "dates",
      "label": "My dates"
    },
    {
      "id": "relay",
      "label": "Timeline"
    },
    {
      "id": "agm",
      "label": "AGM catch"
    },
    {
      "id": "fees",
      "label": "After the window"
    },
    {
      "id": "plan",
      "label": "Action plan"
    },
    {
      "id": "faqs",
      "label": "FAQs"
    }
  ],
  "badge": "🚨 ROC Update · General Circular 05/2026",
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
  "h1a": "MCA Extends AOC-4 to 31 December 2026,",
  "h1b": "MGT-7 to 31 January 2027: What It Really Means",
  "lede": "General Circular 05/2026 gives companies more time for FY 2025-26 annual filings without additional fees. It is a fee relief, not an AGM extension, and the fee clock restarts from the original due date after the window closes.",
  "readMin": 9,
  "cta": {
    "h": "Let a CA own your annual ROC filing",
    "p": "We check your AGM date, accounts, DINs and signatures, then file AOC-4 and MGT-7 well before the relief ends.",
    "label": "Talk to our ROC team",
    "href": "/serviceslist/roc/annual-roc-compliance"
  },
  "side": {
    "h": "Annual ROC filing, handled",
    "p": "AOC-4, MGT-7 and ADT-1 filed by a CA team that watches the dates for you."
  },
  "takeaways": [
    "AOC-4 (all five variants) can be filed without additional fees up to 31 December 2026 for FY 2025-26.",
    "MGT-7 and MGT-7A have a separate, later window: 31 January 2027.",
    "The relief covers additional fees only. Normal filing fees still apply, and the AGM deadline was not extended.",
    "File after the window and fees are charged from the original due date, not from the extended date.",
    "ADT-1, DIR-3 KYC, MSME-1, DPT-3 and LLP forms are not named in the circular. Check each separately."
  ],
  "url": "https://www.taxvio.in/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension",
  "modified": "2026-10-25",
  "dateLabel": "25 October 2026",
  "service": "Annual ROC Compliance",
  "related": [
    {
      "label": "Annual ROC Compliance service",
      "href": "/serviceslist/roc/annual-roc-compliance"
    },
    {
      "label": "AGM not held by 30 September 2026: what happens next",
      "href": "/guide/roc/agm-not-held-by-30-september-2026-roc-consequences"
    },
    {
      "label": "ROC additional fee from the original due date: the cliff",
      "href": "/guide/roc/roc-additional-fee-from-original-due-date-aoc-4-mgt-7"
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

function HeroCard() {
  const today = useToday();
  const row = (label: string, sub: string, target: Date, total: number) => {
    const left = today ? daysBetween(target, today) : null;
    const elapsed = today ? Math.max(0, Math.min(total, daysBetween(today, CIRCULAR))) : 0;
    const pct = Math.round((elapsed / total) * 100);
    return (
      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{label}</p>
            <p className="font-extrabold text-[#00416a]">{sub}</p>
          </div>
          <div className="text-right">
            <p className={`text-3xl font-extrabold tabular-nums leading-none ${left !== null && left < 0 ? "text-red-600" : left !== null && left <= 14 ? "text-amber-600" : "text-[#00416a]"}`}>{left === null ? "–" : Math.abs(left)}</p>
            <p className="text-[11px] font-semibold text-gray-500">{left !== null && left < 0 ? "days past" : "days left"}</p>
          </div>
        </div>
        <div className="mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-[#00416a] to-amber-400 transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
      </div>
    );
  };
  return (
    <div className="bk-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">General Circular 05/2026</p>
      <p className="font-extrabold text-[#00416a] text-lg mb-4">No additional fee until…</p>
      <div className="space-y-3">
        {row("AOC-4 family", "31 Dec 2026", RELIEF_AOC, daysBetween(RELIEF_AOC, CIRCULAR))}
        {row("MGT-7 / MGT-7A", "31 Jan 2027", RELIEF_MGT, daysBetween(RELIEF_MGT, CIRCULAR))}
      </div>
      <p className="mt-4 text-[11px] text-gray-400 leading-relaxed">FY 2025-26 only. The AGM deadline was not extended.</p>
    </div>
  );
}

function Glance() {
  const items = [
    { k: "AOC-4 family", v: "31 Dec 2026", n: "AOC-4, AOC-4 CFS, AOC-4 XBRL, AOC-4 NBFC (Ind AS), AOC-4 CFS NBFC (Ind AS)", tone: "navy" as const },
    { k: "MGT-7 and MGT-7A", v: "31 Jan 2027", n: "Annual return, a separate and later window than the AOC-4", tone: "info" as const },
    { k: "Relief type", v: "Fee only", n: "Filing allowed “without payment of additional fees”", tone: "good" as const },
    { k: "AGM timelines", v: "Not extended", n: "Para 3: companies that missed them remain liable under the Act", tone: "warn" as const },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((i, idx) => (
        <Reveal key={i.k} delay={idx * 70}>
          <div className={`h-full rounded-2xl border p-5 ${i.tone === "navy" ? "bg-[#00416a] border-[#00416a] text-white" : i.tone === "info" ? "bg-sky-50 border-sky-100 text-[#00416a]" : i.tone === "good" ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-amber-50 border-amber-200 text-amber-900"}`}>
            <p className="text-[11px] uppercase tracking-widest font-bold opacity-70">{i.k}</p>
            <p className="text-2xl font-extrabold mt-1">{i.v}</p>
            <p className={`text-xs mt-2 leading-relaxed ${i.tone === "navy" ? "text-sky-100/90" : "opacity-80"}`}>{i.n}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

type Cov = { id: string; label: string; verdict: "yes" | "no" | "agm"; title: string; text: string };
const COVERAGE: Cov[] = [
  { id: "aoc4", label: "AOC-4", verdict: "yes", title: "Covered: file by 31 December 2026", text: "Financial statements for FY 2025-26 can be filed without additional fees up to 31 December 2026." },
  { id: "aoc4cfs", label: "AOC-4 CFS", verdict: "yes", title: "Covered: file by 31 December 2026", text: "Consolidated financial statements get the same 31 December 2026 window." },
  { id: "xbrl", label: "AOC-4 XBRL", verdict: "yes", title: "Covered: file by 31 December 2026", text: "The XBRL version is named in the circular. Allow extra days for taxonomy validation." },
  { id: "nbfc", label: "AOC-4 NBFC (Ind AS)", verdict: "yes", title: "Covered: file by 31 December 2026", text: "Both the standalone and the CFS version for NBFCs under Ind AS are named." },
  { id: "mgt7", label: "MGT-7", verdict: "yes", title: "Covered: file by 31 January 2027", text: "The annual return has its own, later window. It does not follow the AOC-4 date." },
  { id: "mgt7a", label: "MGT-7A", verdict: "yes", title: "Covered: file by 31 January 2027", text: "Small companies and One Person Companies file this simplified annual return in the same window." },
  { id: "adt1", label: "ADT-1", verdict: "no", title: "Not named in the circular", text: "Auditor appointment is not in the list of covered forms. Treat its own due date, 15 days from the AGM, as unchanged and ask your CA." },
  { id: "kyc", label: "DIR-3 KYC", verdict: "no", title: "Not mentioned", text: "Director KYC is outside the circular. A missed KYC deactivates the DIN, which can block a director from signing the very forms you want to file." },
  { id: "msme", label: "MSME-1", verdict: "no", title: "Not named in the circular", text: "The half-yearly MSME return is not covered. Check it separately." },
  { id: "dpt3", label: "DPT-3", verdict: "no", title: "Not named in the circular", text: "Return of deposits is not covered. Its own date and rules apply." },
  { id: "llp", label: "LLP Form 8 / 11", verdict: "no", title: "Not covered: this is a Companies Act circular", text: "LLPs are governed by the LLP Act. The circular is addressed to companies, so LLP forms are outside it." },
  { id: "agm", label: "Holding the AGM", verdict: "agm", title: "Explicitly not extended", text: "Paragraph 3 says the circular does not extend the statutory time for AGMs. Missing the AGM date is a separate default." },
];

function CoverageChecker() {
  const [sel, setSel] = useState("aoc4");
  const cur = COVERAGE.find((c) => c.id === sel) ?? COVERAGE[0];
  const tone = cur.verdict === "yes" ? "good" : cur.verdict === "agm" ? "bad" : "warn";
  const tint = { good: "bg-emerald-50 border-emerald-200 text-emerald-900", warn: "bg-amber-50 border-amber-200 text-amber-900", bad: "bg-red-50 border-red-200 text-red-900" }[tone];
  const icon = { good: "✅", warn: "⚠️", bad: "🚨" }[tone];
  return (
    <Card>
      <p className="font-bold text-[#00416a] mb-1">Does the circular cover my filing?</p>
      <p className="text-sm text-gray-500 mb-4">Tap a form or obligation.</p>
      <div className="flex flex-wrap gap-2">
        {COVERAGE.map((c) => (
          <button key={c.id} onClick={() => setSel(c.id)} aria-pressed={sel === c.id}
            className={`px-3.5 py-2 rounded-full text-sm font-semibold border transition ${sel === c.id ? "bg-[#00416a] text-white border-[#00416a] shadow-md shadow-[#00416a]/20" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>{c.label}</button>
        ))}
      </div>
      <div key={cur.id} className={`mt-5 rounded-2xl border px-5 py-4 ${tint}`}>
        <p className="font-extrabold">{icon} {cur.title}</p>
        <p className="text-sm mt-1.5 leading-relaxed opacity-90">{cur.text}</p>
      </div>
    </Card>
  );
}

function DateFinder() {
  const today = useToday();
  const [agm, setAgm] = useState("2026-09-30");
  const d = parseD(agm);
  const r = d ? formDates(d) : null;
  const cell = (label: string, statutory: Date, free: Date) => {
    const s = statusOf(free, today);
    const extended = free.getTime() > statutory.getTime();
    return (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/60">{label}</p>
        <p className="text-sm text-gray-500 mt-2">Normal due date</p>
        <p className={`font-bold ${extended ? "text-gray-400 line-through" : "text-[#00416a]"}`}>{fmtDate(statutory)}</p>
        <p className="text-sm text-gray-500 mt-2">No additional fee up to</p>
        <p className="text-xl font-extrabold text-[#00416a]">{fmtDate(free)}</p>
        <span className={`inline-block mt-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${s.cls}`}>{s.text}</span>
      </div>
    );
  };
  return (
    <Card>
      <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-end">
        <Field label="Date your members adopted the accounts at the AGM">
          <input type="date" value={agm} onChange={(e) => setAgm(e.target.value)} className={inputCls} />
        </Field>
        <button onClick={() => setAgm("2026-09-30")} className="text-sm font-semibold text-[#00416a] border border-[#00416a]/25 rounded-xl px-4 py-2.5 hover:bg-[#00416a]/5 transition">Use 30 Sep 2026</button>
      </div>
      {r && (
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          {cell("AOC-4 family", r.aocDue, r.aocFree)}
          {cell("MGT-7 / MGT-7A", r.mgtDue, r.mgtFree)}
        </div>
      )}
      {d && d.getTime() > AGM_LIMIT.getTime() && (
        <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-900">
          This AGM date is after 30 September 2026. The circular does not excuse that. See the section on AGM defaults below.
        </div>
      )}
      <p className="mt-4 text-xs text-gray-400">Indicative. Where your own AGM + 30 or + 60 days falls later than the relief date, the later date is shown. Confirm with your CA or CS.</p>
    </Card>
  );
}

function RelayTimeline() {
  const today = useToday();
  const ev = [
    { d: new Date(2026, 8, 30), t: "AGM deadline (not extended)", n: "Six months from 31 Mar 2026. The circular does not move it.", bad: true },
    { d: new Date(2026, 9, 24), t: "General Circular 05/2026 issued", n: "Relief announced; MCA also confirmed it on X.", bad: false },
    { d: new Date(2026, 9, 30), t: "Old AOC-4 date (30 Sep AGM)", n: "Would have been AGM + 30 days.", bad: false },
    { d: new Date(2026, 10, 29), t: "Old MGT-7 date (30 Sep AGM)", n: "Would have been AGM + 60 days.", bad: false },
    { d: RELIEF_AOC, t: "AOC-4 family relief ends", n: "Filing after this attracts fees from the original due date.", bad: false },
    { d: RELIEF_MGT, t: "MGT-7 / MGT-7A relief ends", n: "Same rule for the annual return.", bad: false },
  ];
  return (
    <Card>
      <p className="font-bold text-[#00416a] mb-1">The relief window, step by step</p>
      <p className="text-sm text-gray-500 mb-5">Old dates assume an AGM held on 30 September 2026.</p>
      <ol className="relative space-y-4 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
        {ev.map((e) => {
          const s = statusOf(e.d, today);
          const dot = e.bad ? "bg-red-500" : s.kind === "past" ? "bg-gray-400" : s.kind === "soon" || s.kind === "now" ? "bg-amber-400 bk-pulse" : "bg-emerald-500";
          return (
            <li key={e.t} className="relative flex gap-4">
              <span className={`relative z-10 mt-1 w-9 h-9 rounded-full ${dot} text-white flex items-center justify-center text-xs font-bold ring-4 ring-white`}>{e.d.getDate()}</span>
              <div className="flex-1 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold text-[#00416a]">{e.t}</p>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${s.cls}`}>{s.text}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{fmtDate(e.d)} · {e.n}</p>
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
      <Sec id="summary" label="At a glance" title="What the Ministry actually announced on 24 October 2026">
        <P>On Saturday, 24 October 2026, the Ministry of Corporate Affairs issued <strong>General Circular No. 05/2026</strong> (File No. Policy-17/111/2022-CL-V-MCA), signed by the Deputy Director (Policy) and addressed to the DGCoA, all Regional Directors, all Registrars of Companies and all stakeholders. The stated reason is simple: the Ministry received representations from stakeholders asking for more time to file the annual statutory forms for <strong>financial year 2025-26</strong>.</P>
        <P>The decision, set out in paragraph 2, has two parts. Companies may file the financial statements in <strong>AOC-4, AOC-4 (CFS), AOC-4 (XBRL), AOC-4 NBFC (Ind AS) and AOC-4 CFS NBFC (Ind AS)</strong> up to <strong>31 December 2026</strong>. And they may file the annual return in <strong>MGT-7 and MGT-7A</strong> up to <strong>31 January 2027</strong>. In both cases the filing is allowed &ldquo;without payment of additional fees&rdquo;.</P>
        <Glance />
        <P>Read that last phrase carefully, because it is where most of the confusion will come from. The relief is about <em>additional</em> fees, the daily late charge. It is not a waiver of the normal filing fee that every company pays on every filing, and it is not a general amnesty for other defaults. It is also a relaxation for a single financial year. Earlier years that are still pending are not covered by this circular.</P>
        <Callout tone="warn" title="This is a fee relief, not a licence to relax">
          The circular gives you breathing room on the filing fee clock. It does not give you breathing room on the AGM, on director KYC, or on the other annual forms. Those are covered one by one in the sections below.
        </Callout>
      </Sec>

      <Sec id="checker" label="Am I covered?" title="Which forms and obligations the circular covers, and which it does not">
        <P>The circular names seven forms: the five AOC-4 variants and the two annual return forms. Anything that is not on that list should be assumed to be outside the relief until your Company Secretary or CA confirms otherwise. Tap through the common ones to see where each stands.</P>
        <Reveal><CoverageChecker /></Reveal>
        <P>The practical point is that an annual compliance cycle is rarely just two forms. Most companies also deal with the auditor appointment filing (ADT-1), the half-yearly MSME return, director KYC, and, for some, the deposits return. None of these is named in the circular, so each keeps its own date and its own late fee. A company that reads &ldquo;MCA extended the deadline&rdquo; in a headline and stops there can easily miss one of them.</P>
        <P>Director KYC deserves a special mention. A director whose KYC lapses sees the DIN deactivated, and a director with a deactivated DIN can run into trouble signing and filing the very forms the circular is trying to help you file. Check KYC status before you start, not after the AOC-4 is stuck.</P>
      </Sec>

      <Sec id="dates" label="My dates" title="Find your own fee-free date in ten seconds">
        <P>The original due dates are not fixed calendar dates. They run from your AGM. The financial statements are due within 30 days of the AGM, and the annual return within 60 days of the AGM. A company that held its AGM on 30 September 2026 would therefore have faced 30 October 2026 for the AOC-4 and 29 November 2026 for the MGT-7. The circular pushes those to 31 December 2026 and 31 January 2027.</P>
        <P>If your AGM was held earlier or later, your original dates were different. Enter your AGM date and the tool shows the normal due date, the relief date, and where each stands against today.</P>
        <Reveal><DateFinder /></Reveal>
        <P>One more subtlety. The relief is a date up to which no additional fee is charged. It was never designed to <em>shorten</em> anyone&apos;s time. If your own AGM-based due date is later than the relief date, for example because the AGM was held in December, the tool shows the later date. This is our reading of how the relief interacts with the normal timelines, so confirm it for your own case.</P>
      </Sec>

      <Sec id="relay" label="Timeline" title="The relief window, step by step">
        <P>It helps to see the whole sequence on one line. The AGM date is the foundation, because every other date hangs from it. The circular then sits on top of the original dates and moves the fee-free point further out, but only for the two form families.</P>
        <Reveal><RelayTimeline /></Reveal>
        <P>Two windows, two dates. The January date applies to the annual return only. A company that files its MGT-7 on 15 January but has not yet filed its AOC-4 has not used the January window for the accounts. The AOC-4 relief ended on 31 December.</P>
      </Sec>

      <Sec id="agm" label="AGM catch" title="Paragraph 3: the AGM deadline was not extended">
        <P>Paragraph 3 of the circular is short but important. It says the circular should not be construed as conferring any extension of statutory time for holding AGMs, and that companies which have not adhered to the relevant statutory timelines remain liable under the relevant provisions of the Act. The circular does not name those provisions.</P>
        <P>As public references summarise the position, a company must hold its AGM within six months of the close of the financial year, which for FY 2025-26 meant by <strong>30 September 2026</strong>, and the gap between two AGMs must not exceed 15 months. The Registrar may extend the time by up to three months for a special reason, but that has to be applied for, and it is not available for the first AGM. Failure to comply is reported to attract a fine of up to ₹1,00,000 on the company and on each officer in default, with a further fine of up to ₹5,000 for each day of continuing default.</P>
        <Callout tone="bad" title="An AGM missed is a separate default">
          If your AGM was not held by 30 September 2026, the circular does not cure that. It only means the filing fee clock on AOC-4 and MGT-7 is relaxed. Talk to your CS about the right way to hold the meeting now and about the exposure for the delay. We cover this in our separate guide on <Link href="/guide/roc/agm-not-held-by-30-september-2026-roc-consequences" className="underline font-semibold">what happens when the AGM is not held on time</Link>.
        </Callout>
        <P>There is a quieter consequence as well. Because the AOC-4 and MGT-7 timelines are counted from the AGM, a company that holds its AGM very late is moving its own filing dates later at the same time. That is a normal mechanical effect, not a benefit. The AGM default stays on the record.</P>
      </Sec>

      <Sec id="fees" label="After the window" title="Paragraph 4: what happens if you file after the relief date">
        <P>Paragraph 4 is the one to circulate in your finance team. It says that any filing made after the currency of the circular attracts payment of all fees, including additional fees, as provided in the Companies (Registration Offices and Fees) Rules, 2014, <strong>from the date when such filings were actually due under the Act</strong>.</P>
        <P>In plain words, the extension does not reset the clock. It pauses the meter. If you file inside the window, the meter never ran. If you file one day after the window, the meter is applied backwards to the original due date.</P>
        <P>Here is a worked example using public references for the rate. Public references report the additional fee at ₹100 per day per form with no cap. Suppose a company held its AGM on 30 September 2026, so its AOC-4 was originally due on 30 October 2026. It files on 5 January 2027. That is 67 days after the original due date, so the reported additional fee would be about ₹6,700 on that form alone, even though the filing was only five days after the relief ended. The MGT-7 has its own separate calculation.</P>
        <Callout tone="warn" title="Verify the exact mechanics on the portal">
          We are reading paragraph 4 as written. How the MCA21 portal computes the fee for a filing made after the window is something your CA should confirm at the time of filing.
        </Callout>
        <P>The additional fee is also not the only exposure. Late financial statements and late annual returns can carry fines on the company and officers under the Act, and long-running non-filing can lead to director disqualification and strike-off proceedings. Amounts reported by public references vary and we have not independently verified them, so we leave the numbers to your professional.</P>
        <P>One question the circular does not answer: what happens to a company that has <em>already</em> filed and paid additional fees before 24 October. The circular says nothing about refunds, and the sources we reviewed do not either. Do not assume a refund. Ask your CA whether anything can be done.</P>
      </Sec>

      <Sec id="plan" label="Action plan" title="Use the extra weeks, do not spend them">
        <P>An extension is a gift of time, but time has a way of vanishing. Boards that were already late on 30 October now have two more months, and the temptation is to wait. The better approach is to set an internal deadline well before the relief date, because the last week of December is also the week when auditors, signatories and portals are at their busiest.</P>
        <P>A sensible internal target is mid-December for the AOC-4 and early January for the MGT-7. That leaves a buffer for a rejected form, a digital signature that has expired, an XBRL validation error, or a director who is travelling. Tick off the list below as you go.</P>
        <Reveal>
          <Checklist storeKey="c1" items={[
            "AGM held and minutes signed (note the actual date)",
            "Audited financial statements signed by auditors and the board",
            "Auditor appointment filed in ADT-1",
            "All directors’ KYC done and DINs active",
            "Valid digital signatures for directors, auditor and CS or CFO",
            "XBRL or consolidated statements prepared, if applicable",
            "Annual return data prepared and shareholding confirmed",
            "Internal filing date fixed well before the relief date",
          ]} />
        </Reveal>
        <P>If your company is behind on more than one year, or your AGM was late, or your books are not finalised, the circular is not a solution by itself. It is one input into a plan, and the plan is better drawn up with a professional who has seen the pattern before. That is exactly what our annual ROC compliance team does, and you can read how the service works on our <Link href="/serviceslist/roc/annual-roc-compliance" className="text-[#00416a] font-semibold underline">Annual ROC Compliance</Link> page.</P>
      </Sec>
      <Sec id="faqs" label="FAQs" title="Frequently asked questions">
        <Faqs faqs={faqs} />
      </Sec>
    </>
  );
}