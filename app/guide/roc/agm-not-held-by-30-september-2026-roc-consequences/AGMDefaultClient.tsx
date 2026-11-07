"use client";

// app/guide/roc/agm-not-held-by-30-september-2026-roc-consequences/AGMDefaultClient.tsx

import Footar from "@/components/Footar"; // ← adjust path
import Link from "next/link";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* ═════════════════ CONFIG ═════════════════ */

const CFG = {
  "shareText": "MCA extended AOC-4/MGT-7 but NOT the AGM deadline. What a missed AGM means and how to fix it:",
  "toc": [
    {
      "id": "situation",
      "label": "Your position"
    },
    {
      "id": "rules",
      "label": "The rules"
    },
    {
      "id": "exposure",
      "label": "Exposure"
    },
    {
      "id": "gap",
      "label": "15-month gap"
    },
    {
      "id": "filings",
      "label": "Knock-on filings"
    },
    {
      "id": "recovery",
      "label": "Recovery plan"
    },
    {
      "id": "faqs",
      "label": "FAQs"
    }
  ],
  "badge": "⚠️ ROC Alert · AGM Compliance",
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
  "h1a": "AGM Not Held by 30 September 2026?",
  "h1b": "What It Costs and How to Fix It",
  "lede": "The Ministry extended AOC-4 and MGT-7 filing, but paragraph 3 of the circular says AGM timelines are untouched. Here is what a missed or late AGM means, how it shifts your other filings, and a practical plan to close the gap.",
  "readMin": 9,
  "cta": {
    "h": "Missed the AGM? Let us help you close it cleanly",
    "p": "We review your timeline, prepare notice and minutes, and file the dependent forms so the default does not grow.",
    "label": "Talk to our ROC team",
    "href": "/serviceslist/roc/annual-roc-compliance"
  },
  "side": {
    "h": "AGM and ROC help",
    "p": "Notice, minutes, ADT-1, AOC-4 and MGT-7 handled by a CA team."
  },
  "takeaways": [
    "General Circular 05/2026 did not extend the statutory time for holding AGMs. 30 September 2026 stands for a 31 March year end.",
    "Reported penalty: up to ₹1,00,000 on the company and each officer in default, plus up to ₹5,000 a day for continuing default.",
    "The gap between two AGMs cannot exceed 15 months. The earlier of the two limits is the one that binds.",
    "A late AGM moves your AOC-4 (AGM + 30 days) and MGT-7 (AGM + 60 days) dates later, but the default stays on record.",
    "A Registrar extension needs an application before the deadline and an order. It cannot be assumed."
  ],
  "url": "https://www.taxvio.in/guide/roc/agm-not-held-by-30-september-2026-roc-consequences",
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
    },
   
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
  const days = today ? daysBetween(today, AGM_LIMIT) : null;
  const over = days !== null && days > 0;
  return (
    <div className="bk-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">AGM deadline for FY 2025-26</p>
      <p className="font-extrabold text-[#00416a] text-lg">30 September 2026</p>
      <div className="mt-4 flex items-end gap-3">
        <span className={`text-6xl font-extrabold tabular-nums leading-none ${over ? "text-red-600" : "text-[#00416a]"}`}>{days === null ? "–" : Math.abs(days)}</span>
        <span className="pb-1.5 text-sm font-semibold text-gray-500">{over ? "days since the deadline" : "days to the deadline"}</span>
      </div>
      <div className="mt-4 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-900">
        <p className="font-bold">Circular 05/2026 did not extend it</p>
        <p className="text-xs mt-1 opacity-80">Para 3: AGM timelines remain as the Act provides.</p>
      </div>
      <p className="mt-3 text-[11px] text-gray-400">Applies to companies other than One Person Companies.</p>
    </div>
  );
}

type Sit = { id: string; label: string; tone: "good" | "warn" | "bad"; title: string; text: string; steps: string[] };
const SITS: Sit[] = [
  {
    id: "held",
    label: "Held on or before 30 Sep",
    tone: "good",
    title: "You met the AGM deadline",
    text: "The AGM default is not an issue. Your AOC-4 and MGT-7 dates run from the AGM date and now enjoy the circular’s fee-free window.",
    steps: ["Confirm the AGM date on the signed minutes.", "File ADT-1 if the auditor was appointed or reappointed.", "File AOC-4 by 31 Dec 2026 and MGT-7 by 31 Jan 2027, and plan to be well ahead."],
  },
  {
    id: "late",
    label: "Held after 30 Sep",
    tone: "warn",
    title: "AGM held late: a default is likely on record",
    text: "The meeting is done, so the continuing default has stopped, but the delay itself can still be treated as a default under the Act. Your filings now run from the later AGM date.",
    steps: ["Get the exact delay in days from the minutes.", "Ask your CS whether to approach the Registrar or consider compounding.", "File ADT-1, AOC-4 and MGT-7 on the dates that follow from the actual AGM date."],
  },
  {
    id: "notyet",
    label: "Not held yet",
    tone: "bad",
    title: "Default is continuing: hold the AGM now",
    text: "Every extra day is a continuing default. The priority is to hold a valid AGM as early as the notice rules allow.",
    steps: ["Fix a date and issue notice that follows the Act’s notice rules.", "Get the accounts audited and signed so they can be adopted.", "Do not leave the filing plan until after the meeting. Prepare AOC-4 and MGT-7 in parallel."],
  },
  {
    id: "ext",
    label: "Applied for Registrar extension",
    tone: "warn",
    title: "An extension depends on the Registrar’s order",
    text: "The Registrar can extend the time for an AGM by up to three months for special reasons, but only if you applied in time and an order was passed. An application alone is not an extension.",
    steps: ["Check you have the Registrar’s order or approval.", "Hold the AGM within the extended period.", "If no order came, treat the position as ‘late’ and speak to your CS."],
  },
];

function AgmStatus() {
  const [sel, setSel] = useState("held");
  const cur = SITS.find((s) => s.id === sel) ?? SITS[0];
  const tint = { good: "bg-emerald-50 border-emerald-200 text-emerald-900", warn: "bg-amber-50 border-amber-200 text-amber-900", bad: "bg-red-50 border-red-200 text-red-900" }[cur.tone];
  return (
    <Card>
      <p className="font-bold text-[#00416a] mb-1">Where does your company stand?</p>
      <p className="text-sm text-gray-500 mb-4">Pick the closest situation.</p>
      <div className="flex flex-wrap gap-2">
        {SITS.map((s) => (
          <button key={s.id} onClick={() => setSel(s.id)} aria-pressed={sel === s.id}
            className={`px-3.5 py-2 rounded-full text-sm font-semibold border transition ${sel === s.id ? "bg-[#00416a] text-white border-[#00416a] shadow-md shadow-[#00416a]/20" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>{s.label}</button>
        ))}
      </div>
      <div key={cur.id} className={`mt-5 rounded-2xl border px-5 py-4 ${tint}`}>
        <p className="font-extrabold">{cur.title}</p>
        <p className="text-sm mt-1.5 leading-relaxed opacity-90">{cur.text}</p>
        <ul className="mt-3 space-y-1.5 text-sm">
          {cur.steps.map((x) => (
            <li key={x} className="flex gap-2"><span className="font-bold">→</span><span>{x}</span></li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function ExposureEstimator() {
  const today = useToday();
  const [agm, setAgm] = useState("");
  useEffect(() => {
    if (today && !agm) {
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      setAgm(`${y}-${m}-${dd}`);
    }
  }, [today, agm]);
  const d = parseD(agm);
  const delay = d ? Math.max(0, daysBetween(d, AGM_LIMIT)) : 0;
  const cont = delay * 5000;
  const base = delay > 0 ? 100000 : 0;
  const f = d ? formDates(d) : null;
  return (
    <Card>
      <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-end">
        <Field label="Date the AGM was held, or will be held">
          <input type="date" value={agm} onChange={(e) => setAgm(e.target.value)} className={inputCls} />
        </Field>
        <button onClick={() => setAgm("2026-09-30")} className="text-sm font-semibold text-[#00416a] border border-[#00416a]/25 rounded-xl px-4 py-2.5 hover:bg-[#00416a]/5 transition">On time (30 Sep)</button>
      </div>
      <div className="mt-5 grid sm:grid-cols-3 gap-3">
        <Stat k="Days after 30 Sep" v={String(delay)} tone={delay > 0 ? "warn" : "good"} />
        <Stat k="Statutory ceiling, one person" v={inr(base + cont)} tone={delay > 0 ? "bad" : "good"} />
        <Stat k="Of which daily component" v={inr(cont)} tone="info" />
      </div>
      {f && d && (
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/60">AOC-4 · no additional fee up to</p>
            <p className="text-xl font-extrabold text-[#00416a] mt-1">{fmtDate(f.aocFree)}</p>
            <p className="text-xs text-gray-500">AGM + 30 days is {fmtDate(f.aocDue)}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/60">MGT-7 · no additional fee up to</p>
            <p className="text-xl font-extrabold text-[#00416a] mt-1">{fmtDate(f.mgtFree)}</p>
            <p className="text-xs text-gray-500">AGM + 60 days is {fmtDate(f.mgtDue)}</p>
          </div>
        </div>
      )}
      <p className="mt-4 text-xs text-gray-400">The ceiling combines the reported maximum fine of ₹1,00,000 with up to ₹5,000 for each day of continuing default. It is the upper limit in the statute as reported, not a prediction of what will be imposed, and it can apply to the company and to each officer in default. Confirm with your CS.</p>
    </Card>
  );
}

function GapChecker() {
  const today = useToday();
  const [last, setLast] = useState("2025-09-30");
  const d = parseD(last);
  const fyLimit = AGM_LIMIT;
  const gapLimit = d ? (() => { const x = new Date(d); x.setMonth(x.getMonth() + 15); return x; })() : null;
  const binding = gapLimit ? (gapLimit.getTime() < fyLimit.getTime() ? gapLimit : fyLimit) : fyLimit;
  const which = gapLimit && gapLimit.getTime() < fyLimit.getTime() ? "15-month gap" : "six months from year end";
  const st = statusOf(binding, today);
  return (
    <Card>
      <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-end">
        <Field label="Date of your previous AGM">
          <input type="date" value={last} onChange={(e) => setLast(e.target.value)} className={inputCls} />
        </Field>
        <button onClick={() => setLast("2025-09-30")} className="text-sm font-semibold text-[#00416a] border border-[#00416a]/25 rounded-xl px-4 py-2.5 hover:bg-[#00416a]/5 transition">Use 30 Sep 2025</button>
      </div>
      <div className="mt-5 grid sm:grid-cols-3 gap-3">
        <Stat k="Six-month limit" v={fmtDate(fyLimit)} tone="info" />
        <Stat k="15-month gap limit" v={gapLimit ? fmtDate(gapLimit) : "–"} tone="info" />
        <Stat k={`Binding: ${which}`} v={fmtDate(binding)} tone="navy" />
      </div>
      <span className={`inline-block mt-4 text-[11px] font-bold px-2.5 py-1 rounded-full ${st.cls}`}>{st.text}</span>
      <p className="mt-3 text-xs text-gray-400">The earlier of the two limits is the one that matters. Any Registrar extension is separate and needs an order.</p>
    </Card>
  );
}

function RecoverySteps() {
  const steps = [
    { t: "Confirm the facts", d: "Write down the last AGM date, the date the accounts were signed by the auditor, and whether any application was made to the Registrar. Every later step depends on these three facts." },
    { t: "Fix the meeting date and notice", d: "The Act requires a minimum notice period for an AGM, generally 21 clear days, with a shorter notice possible only if the required majority of members consent. Your CS will confirm what applies to your company and prepare the notice." },
    { t: "Hold the AGM and adopt the accounts", d: "Pass the ordinary business, adopt the financial statements, and record the auditor’s appointment or reappointment where due. Keep the signed minutes and the attendance record safe." },
    { t: "File ADT-1 and prepare AOC-4", d: "File the auditor appointment form within the time the Act allows from the AGM, and prepare the AOC-4 and MGT-7 in parallel, so that nothing waits for the other." },
    { t: "File AOC-4 and MGT-7 inside the fee-free window", d: "Check your own dates in the estimator above. If your dates fall inside the circular’s window, no additional fee should arise. If not, the fee is counted from your original due date." },
    { t: "Deal with the AGM default itself", d: "Ask your CS about the right route, such as a suo moto approach or compounding, for the delay. Keep the board informed, because officers in default are exposed along with the company." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <Card>
      <ol className="space-y-3">
        {steps.map((s, i) => {
          const on = open === i;
          return (
            <li key={s.t}>
              <button onClick={() => setOpen(on ? -1 : i)} aria-expanded={on} className={`w-full text-left flex items-center gap-4 rounded-2xl border px-4 py-3 transition ${on ? "border-[#00416a]/40 bg-[#00416a]/5" : "border-gray-200 bg-white hover:border-[#00416a]/25"}`}>
                <span className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold ${on ? "bg-[#00416a] text-white" : "bg-[#00416a]/10 text-[#00416a]"}`}>{i + 1}</span>
                <span className="font-bold text-[#00416a]">{s.t}</span>
              </button>
              <div className={`grid transition-all duration-300 ease-out ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden"><p className="px-5 pt-3 pb-1 text-sm text-gray-600 leading-relaxed">{s.d}</p></div>
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
      <Sec id="situation" label="Your position" title="30 September has passed. Where does your company stand?">
        <P>For a company whose financial year ended on 31 March 2026, the annual general meeting had to be held by <strong>30 September 2026</strong>. That date has gone, and on 24 October the Ministry of Corporate Affairs issued General Circular 05/2026, which gave companies extra time to file AOC-4 and MGT-7 without additional fees. Many founders read the headline and concluded that the pressure was off. It is not, and paragraph 3 of the circular says why.</P>
        <P>That paragraph states that the circular should not be construed as extending the statutory time for holding AGMs, and that companies which have not adhered to the relevant timelines remain liable under the Act. In other words, the Ministry has moved the <em>filing fee</em> goalposts. It has not moved the <em>meeting</em> goalposts. Choose the situation closest to yours.</P>
        <Reveal><AgmStatus /></Reveal>
        <P>Most late AGMs we see are not the result of anyone ignoring the law. They happen because the auditor is waiting for a stock count, a director is abroad, the board is waiting for a shareholder, or the founder assumes the AGM can be done later along with the filing. All of those are understandable, and none of them is a defence on its own. The better question to ask is how to close the gap now and keep the next year clean.</P>
      </Sec>

      <Sec id="rules" label="The rules" title="What the Companies Act says about AGM timing">
        <P>As public references summarise Section 96 of the Companies Act, 2013, every company other than a One Person Company must hold an AGM every year. Three rules matter. The first AGM must be held within nine months of the close of the first financial year, and no AGM is needed in the year of incorporation. Later AGMs must be held within <strong>six months of the close of the financial year</strong>, which is why 30 September is the date for a 31 March year end. And the gap between two AGMs must not exceed <strong>15 months</strong>.</P>
        <P>The Registrar of Companies can extend the time for holding an AGM, other than the first one, by up to three months for a special reason. This is a discretionary relief that has to be requested before the deadline passes and supported by an order. It is not something a company can assume or backdate.</P>
        <P>The consequence of default is set out in Section 99. As reported by public references, the company and every officer in default may be fined up to ₹1,00,000, and where the default continues, a further fine of up to ₹5,000 may apply for each day. The words &ldquo;officer in default&rdquo; matter, because the exposure is not only the company&apos;s. Directors and other officers who are responsible can be named individually.</P>
        <Callout tone="warn" title="Numbers to verify">
          We have taken the penalty amounts from secondary public references and they have not been checked against the statute for this article. Treat them as the ceiling the law is reported to provide and ask your CS what applies to your case.
        </Callout>
        <P>It is also worth separating three things that are often mixed up. The AGM date, the date accounts are adopted, and the filing dates are linked, but they are different obligations with different consequences. A company can hold its AGM on time and file late, or hold the AGM late and then file promptly. The circular touches only the filing side.</P>
      </Sec>

      <Sec id="exposure" label="Exposure" title="Estimate the statutory ceiling and see your new filing dates">
        <P>Enter the date on which your AGM was held, or the date you plan to hold it. The estimator counts the days after 30 September, shows the statutory ceiling for one person, and then shows how your AOC-4 and MGT-7 dates move because they are counted from the AGM.</P>
        <Reveal><ExposureEstimator /></Reveal>
        <P>The ceiling can look frightening, and it is meant to show the shape of the risk rather than a bill. In real cases, defaults of this kind are dealt with through the Registrar&apos;s adjudication or through compounding, and the amount depends on the facts, the length of delay, the size of the company and the conduct of the officers. The sensible response is neither panic nor silence. It is to hold the meeting, document the reasons for the delay honestly, and let a professional guide the process.</P>
        <P>Note how the filing dates change as well. If you hold the AGM on 15 December, for instance, your AOC-4 would normally fall due 30 days later, which is after the circular&apos;s 31 December date. In that case the later date is shown, because we read the relief as a cap on the fee-free period and not as a shortening of your normal time. Check this with your CA before relying on it.</P>
      </Sec>

      <Sec id="gap" label="15-month gap" title="The second clock that catches companies out">
        <P>Founders usually think only about the six-month rule, but there is a second clock. Even where six months have not passed, the gap between two consecutive AGMs cannot be more than 15 months. If your last AGM was early, the 15-month limit might be the earlier of the two, and you would be late without realising it.</P>
        <Reveal><GapChecker /></Reveal>
        <P>For most companies that held last year&apos;s AGM close to 30 September, the six-month limit is the binding one. For companies that held their previous AGM very early, say in June, the 15-month rule can bite first. Run your own date through the tool each year, and put the earlier of the two on the board calendar.</P>
      </Sec>

      <Sec id="filings" label="Knock-on filings" title="How a late AGM moves AOC-4, MGT-7 and ADT-1">
        <P>Because the AOC-4 is counted from the AGM, a late AGM delays the whole filing chain. The tabs below show how the dates shift under three scenarios, using the circular&apos;s relief of 31 December 2026 for AOC-4 and 31 January 2027 for MGT-7. Dates are rounded for the example and the later of the two dates is shown as the fee-free point.</P>
        <Reveal>
          <Tabs tabs={[
            { id: "nov", label: "AGM on 15 Nov 2026", body: <><p className="mb-3">AOC-4 would normally be due on 15 December 2026 and MGT-7 on 14 January 2027. Both fall inside the circular&apos;s windows, so the fee-free points are <strong>31 December 2026</strong> and <strong>31 January 2027</strong>.</p><p>ADT-1, if an auditor was appointed at the meeting, is a separate form with its own date and is not covered by the circular.</p></> },
            { id: "dec", label: "AGM on 15 Dec 2026", body: <><p className="mb-3">AOC-4 would normally be due on 14 January 2027, which is after 31 December. Our reading is that the later date applies, so there is no extra benefit from the circular. MGT-7 would normally be due on 13 February 2027, again later than 31 January 2027.</p><p>This is the scenario in which the circular helps least, and where early preparation matters most.</p></> },
            { id: "jan", label: "AGM on 15 Jan 2027", body: <><p className="mb-3">AOC-4 would normally be due on 14 February 2027 and MGT-7 on 16 March 2027. The relief dates have passed, so the normal AGM-based dates control.</p><p>The AGM would also be about three and a half months late against the 30 September deadline, a considerable continuing default.</p></> },
          ]} />
        </Reveal>
        <P>How financial statements are to be filed in a year where the AGM itself has not been held is a technical question on which you need your CS. The route, any explanatory statement and the way the Registrar records the filing can differ from the ordinary case. Do not leave that question to the last week of December.</P>
      </Sec>

      <Sec id="recovery" label="Recovery plan" title="A six-step plan to close the AGM gap">
        <P>The goal is to reach a clean position as quickly as practical, with every document in order. Tap each step to see what it involves.</P>
        <Reveal><RecoverySteps /></Reveal>
        <P>Two habits prevent the same problem next year. First, fix next year&apos;s AGM date on the board calendar before this year&apos;s paperwork is finished, and tell the auditor early. Second, treat the AGM as the start of a 60-day filing sprint and not as the finish line. The AGM triggers the ADT-1, the AOC-4 and the MGT-7, so a company that holds it on the last day has the least time to file.</P>
        <P>If you are already late, or you are unsure whether you are, our team can review the timeline with you, speak to your auditor, draft the notice and minutes, and file the dependent forms. You can read how the service works on our <Link href="/serviceslist/roc/annual-roc-compliance" className="text-[#00416a] font-semibold underline">Annual ROC Compliance</Link> page, or read what the circular means for the filings in our guide to <Link href="/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension" className="text-[#00416a] font-semibold underline">MCA Circular 05/2026</Link>.</P>
      </Sec>
      <Sec id="faqs" label="FAQs" title="Frequently asked questions">
        <Faqs faqs={faqs} />
      </Sec>
    </>
  );
}