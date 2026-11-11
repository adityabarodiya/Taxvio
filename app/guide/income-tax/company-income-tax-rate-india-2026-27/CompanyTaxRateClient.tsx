"use client";

// app/guide/income-tax/company-income-tax-rate-india-2026-27/CompanyTaxRateClient.tsx

import Footar from "@/components/Footar"; // ← adjust path
import Link from "next/link";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* ═════════════════ CONFIG ═════════════════ */

const CFG = {
  "shareText": "Company income tax rates in India, 22% vs normal regime, MAT 14% and surcharge, with a live calculator:",
  "toc": [
    {
      "id": "rates",
      "label": "Rates"
    },
    {
      "id": "regimes",
      "label": "Regimes"
    },
    {
      "id": "surcharge",
      "label": "Surcharge"
    },
    {
      "id": "calc",
      "label": "Calculator"
    },
    {
      "id": "mat",
      "label": "MAT"
    },
    {
      "id": "newact",
      "label": "2025 Act"
    },
    {
      "id": "others",
      "label": "Compare"
    },
    {
      "id": "advance",
      "label": "Advance tax"
    },
    {
      "id": "choose",
      "label": "Choosing"
    },
    {
      "id": "mistakes",
      "label": "Mistakes"
    },
    {
      "id": "faqs",
      "label": "FAQs"
    }
  ],
  "badge": "📊 Corporate Tax · Updated 11 Nov 2026",
  "crumbs": [
    {
      "name": "Guides",
      "href": "/guide"
    },
    {
      "name": "Income Tax",
      "href": "/guide/income-tax"
    }
  ],
  "h1a": "Income Tax Rate for Companies in India:",
  "h1b": "22% vs Normal Regime, MAT and Surcharge",
  "lede": "Effective rates after surcharge and cess, the 22% regime against the 25% and 30% normal regime, MAT at 15% moving to 14%, and what the Income-tax Act 2025 changes. With a live calculator and an advance tax planner.",
  "modified": "2026-11-11",
  "dateLabel": "11 November 2026",
  "readMin": 11,
  "cta": {
    "h": "Which regime is cheaper for your company?",
    "p": "Our CA team models the 22% regime, normal regime and MAT on your numbers before you elect on Form 10-IC.",
    "label": "Talk to a tax CA",
    "href": "/serviceslist/income-tax/income-tax-audit"
  },
  "side": {
    "h": "Corporate tax help",
    "p": "Regime choice, Form 10-IC, advance tax and returns, handled by a CA team."
  },
  "takeaways": [
    "22% regime: 25.17% effective with a flat 10% surcharge and 4% cess, and no MAT.",
    "Normal regime: 25% if base-year turnover was up to ₹400 crore, otherwise 30%, plus 7% or 12% surcharge and 4% cess.",
    "MAT is 15% for FY 2025-26 and reported at 14% from tax year 2026-27. Confirm the enacted wording.",
    "The 22% choice is made on Form 10-IC and is generally irrevocable. Test several years of profit first.",
    "The Income-tax Act 2025 renumbers the sections: 115BAA as 200, 115BAB as 201 and 115JB as 206, as reported."
  ],
  "url": "https://www.taxvio.in/guide/income-tax/company-income-tax-rate-india-2026-27",
  "service": "Corporate Income Tax",
  "related": [
    {
      "label": "Income tax audit service",
      "href": "/serviceslist/income-tax/income-tax-audit"
    },
    {
      "label": "Annual ROC Compliance service",
      "href": "/serviceslist/roc/annual-roc-compliance"
    },
    {
      "label": "AOC-4, XBRL, CFS, MGT-7 or MGT-7A: which form?",
      "href": "/guide/roc/aoc-4-xbrl-cfs-mgt-7-mgt-7a-which-form-to-file"
    }
  ],
  "sources": [
    {
      "label": "TaxGarden: corporate tax rates in India",
      "url": "https://taxgarden.in"
    },
    {
      "label": "EY: Union Budget 2026 tax alert",
      "url": "https://www.ey.com/en_in"
    },
    {
      "label": "Income Tax Department, Government of India",
      "url": "https://incometaxindia.gov.in"
    },
    {
      "label": "India Briefing: return due date extensions",
      "url": "https://www.india-briefing.com"
    },
    {
      "label": "SetIndiBiz: company tax rates and MAT",
      "url": "https://www.setindiabiz.com"
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

const CR = 10000000;
const LAKH = 100000;

type Slab = { above: number; pct: number }[];
const DOM_SLABS: Slab = [{ above: 1 * CR, pct: 0.07 }, { above: 10 * CR, pct: 0.12 }];
const FOR_SLABS: Slab = [{ above: 1 * CR, pct: 0.02 }, { above: 10 * CR, pct: 0.05 }];
const FLAT10 = 0.1;

/** Tax + surcharge (with marginal relief) + 4% cess. `flat` is a surcharge that applies at every income level. */
function taxOn(income: number, rate: number, slabs: Slab, flat?: number) {
  if (income <= 0) return { base: 0, surcharge: 0, cess: 0, total: 0, eff: 0 };
  const base = income * rate;
  let pct = 0;
  let idx = -1;
  if (flat !== undefined) pct = flat;
  else slabs.forEach((s, i) => { if (income > s.above) { pct = s.pct; idx = i; } });
  let sur = base * pct;
  if (flat === undefined && idx >= 0) {
    const th = slabs[idx].above;
    const prev = idx > 0 ? slabs[idx - 1].pct : 0;
    const cap = th * rate * (1 + prev) + (income - th); // marginal relief
    if (base + sur > cap) sur = Math.max(0, cap - base);
  }
  const pre = base + sur;
  const cess = pre * 0.04;
  const total = pre + cess;
  return { base, surcharge: sur, cess, total, eff: total / income };
}

const pctTxt = (x: number) => (x * 100).toFixed(x * 100 >= 10 ? 2 : 2).replace(/\.?0+$/, "") + "%";

function parseD(v: string): Date | null {
  if (!v) return null;
  const d = new Date(v + "T00:00:00");
  return isNaN(d.getTime()) ? null : d;
}

function statusOf(date: Date, today: Date | null) {
  if (!today) return { text: "…", cls: "bg-gray-100 text-gray-500", diff: 0 };
  const diff = daysBetween(date, today);
  if (diff < 0) return { text: `Passed ${Math.abs(diff)}d ago`, cls: "bg-gray-100 text-gray-600", diff };
  if (diff === 0) return { text: "Due today", cls: "bg-amber-200 text-amber-900", diff };
  if (diff <= 30) return { text: `${diff} days left`, cls: "bg-amber-100 text-amber-800", diff };
  return { text: `${diff} days left`, cls: "bg-emerald-100 text-emerald-700", diff };
}

/* ───── Hero card ───── */

function HeroCard() {
  const rows = [
    { l: "22% regime (Sec 115BAA / 200)", v: "25.17%", c: "bg-emerald-50 border-emerald-200 text-emerald-800" },
    { l: "Normal, turnover up to ₹400 cr", v: "26% – 29.12%", c: "bg-sky-50 border-sky-200 text-[#00416a]" },
    { l: "Normal, other companies", v: "31.2% – 34.94%", c: "bg-sky-50 border-sky-200 text-[#00416a]" },
    { l: "MAT from tax year 2026-27", v: "14%", c: "bg-amber-50 border-amber-200 text-amber-900" },
  ];
  return (
    <div className="bk-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Domestic companies</p>
      <p className="font-extrabold text-[#00416a] text-lg mb-4">Effective rates, with surcharge &amp; cess</p>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.l} className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-sm ${r.c}`}>
            <span className="font-medium">{r.l}</span>
            <span className="font-extrabold tabular-nums whitespace-nowrap">{r.v}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11px] text-gray-400">New Income-tax Act 2025 applies from tax year 2026-27. Base rates unchanged.</p>
    </div>
  );
}

/* ───── Rate table with income band toggle ───── */

const BANDS = [
  { id: "a", label: "Up to ₹1 crore", income: 50 * LAKH, note: "₹50 lakh" },
  { id: "b", label: "₹1 to ₹10 crore", income: 5 * CR, note: "₹5 crore" },
  { id: "c", label: "Above ₹10 crore", income: 20 * CR, note: "₹20 crore" },
];

function RateTable() {
  const [band, setBand] = useState("b");
  const b = BANDS.find((x) => x.id === band) ?? BANDS[1];
  const rows = [
    { who: "Domestic company, concessional regime", sec: "115BAA / 200", base: 0.22, slabs: [] as Slab, flat: FLAT10, badge: "Opt-in", tone: "good" },
    { who: "Domestic, new manufacturing company", sec: "115BAB / 201", base: 0.15, slabs: [] as Slab, flat: FLAT10, badge: "Closed to new entrants", tone: "warn" },
    { who: "Domestic, normal regime, turnover up to ₹400 cr", sec: "Normal provisions", base: 0.25, slabs: DOM_SLABS, flat: undefined, badge: "Default", tone: "info" },
    { who: "Domestic, normal regime, other companies", sec: "Normal provisions", base: 0.30, slabs: DOM_SLABS, flat: undefined, badge: "Default", tone: "info" },
    { who: "Foreign company, normal income", sec: "Normal provisions", base: 0.35, slabs: FOR_SLABS, flat: undefined, badge: "Foreign", tone: "info" },
  ];
  const bd: Record<string, string> = { good: "bg-emerald-100 text-emerald-700", warn: "bg-amber-100 text-amber-800", info: "bg-sky-100 text-sky-700" };
  return (
    <Card>
      <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Income band">
        {BANDS.map((x) => (
          <button key={x.id} role="tab" aria-selected={band === x.id} onClick={() => setBand(x.id)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${band === x.id ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:bg-[#00416a]/5"}`}>{x.label}</button>
        ))}
      </div>
      <div className="overflow-x-auto -mx-2">
        <table className="min-w-[640px] w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="px-2 py-2">Category</th><th className="px-2 py-2">Section (1961 / 2025 Act)</th><th className="px-2 py-2">Base</th><th className="px-2 py-2">Surcharge</th><th className="px-2 py-2">Cess</th><th className="px-2 py-2 text-right">Effective</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const t = taxOn(b.income, r.base, r.slabs, r.flat);
              const sp = t.base ? t.surcharge / t.base : 0;
              return (
                <tr key={r.who} className="border-t border-gray-100">
                  <td className="px-2 py-3"><p className="font-semibold text-gray-800">{r.who}</p><span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${bd[r.tone]}`}>{r.badge}</span></td>
                  <td className="px-2 py-3 text-gray-600">{r.sec}</td>
                  <td className="px-2 py-3 tabular-nums">{pctTxt(r.base)}</td>
                  <td className="px-2 py-3 tabular-nums">{sp > 0 ? pctTxt(Math.round(sp * 1000) / 1000) : "Nil"}</td>
                  <td className="px-2 py-3 tabular-nums">4%</td>
                  <td className="px-2 py-3 text-right font-extrabold text-[#00416a] tabular-nums">{pctTxt(t.eff)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-400">Effective rate shown for income of {b.note}. Close to a threshold, marginal relief lowers the surcharge. The 22% and 15% regimes carry a flat 10% surcharge, as reported by public references.</p>
    </Card>
  );
}

/* ───── Surcharge chart ───── */

function SurchargeChart() {
  const W = 640, H = 300, pl = 48, pb = 40, pt = 16, pr = 14;
  const lo = Math.log10(10 * LAKH), hi = Math.log10(5000 * LAKH);
  const sx = (inc: number) => pl + ((Math.log10(inc) - lo) / (hi - lo)) * (W - pl - pr);
  const yMin = 0.2, yMax = 0.4;
  const sy = (v: number) => H - pb - ((v - yMin) / (yMax - yMin)) * (H - pb - pt);
  const lines = [
    { id: "22", label: "22% regime", color: "#10b981", f: (i: number) => taxOn(i, 0.22, [], FLAT10).eff },
    { id: "25", label: "Normal 25%", color: "#0a6aa8", f: (i: number) => taxOn(i, 0.25, DOM_SLABS).eff },
    { id: "30", label: "Normal 30%", color: "#6366f1", f: (i: number) => taxOn(i, 0.30, DOM_SLABS).eff },
    { id: "35", label: "Foreign 35%", color: "#f59e0b", f: (i: number) => taxOn(i, 0.35, FOR_SLABS).eff },
  ];
  const [hover, setHover] = useState<number | null>(null);
  const pts: number[] = [];
  for (let k = 0; k <= 160; k++) pts.push(Math.pow(10, lo + (k / 160) * (hi - lo)));
  const ticks = [10 * LAKH, 50 * LAKH, 1 * CR, 5 * CR, 10 * CR, 50 * CR];
  const tl = (v: number) => (v >= CR ? `₹${v / CR} cr` : `₹${v / LAKH} L`);
  const hoverInc = hover === null ? null : pts[hover];
  return (
    <Card>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Effective tax rate against income for each company regime" onMouseLeave={() => setHover(null)}
        onMouseMove={(e) => {
          const r = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width) * W;
          const k = Math.round(((x - pl) / (W - pl - pr)) * 160);
          setHover(k >= 0 && k <= 160 ? k : null);
        }}>
        {[0.2, 0.25, 0.3, 0.35, 0.4].map((t) => (
          <g key={t}><line x1={pl} x2={W - pr} y1={sy(t)} y2={sy(t)} stroke="#e5e7eb" /><text x={pl - 8} y={sy(t) + 4} textAnchor="end" fontSize="11" fill="#6b7280">{Math.round(t * 100)}%</text></g>
        ))}
        {ticks.map((t) => (
          <g key={t}><line x1={sx(t)} x2={sx(t)} y1={pt} y2={H - pb} stroke="#f3f4f6" /><text x={sx(t)} y={H - 16} textAnchor="middle" fontSize="11" fill="#6b7280">{tl(t)}</text></g>
        ))}
        {lines.map((l) => (
          <path key={l.id} d={pts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p).toFixed(1)},${sy(l.f(p)).toFixed(1)}`).join(" ")} fill="none" stroke={l.color} strokeWidth="2.6" strokeLinejoin="round" />
        ))}
        {hover !== null && hoverInc !== null && (
          <g>
            <line x1={sx(hoverInc)} x2={sx(hoverInc)} y1={pt} y2={H - pb} stroke="#00416a" strokeDasharray="4 4" />
            {lines.map((l) => (<circle key={l.id} cx={sx(hoverInc)} cy={sy(l.f(hoverInc))} r="4.5" fill={l.color} stroke="#fff" strokeWidth="2" />))}
          </g>
        )}
      </svg>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
        {lines.map((l) => (<span key={l.id} className="inline-flex items-center gap-2 text-xs text-gray-600"><span className="h-2.5 w-5 rounded-full" style={{ background: l.color }} />{l.label}</span>))}
      </div>
      <div className="mt-3 min-h-[2.5rem] rounded-xl bg-gray-50 border border-gray-100 px-4 py-2.5 text-sm text-gray-700" aria-live="polite">
        {hoverInc === null ? "Move over the chart to read the effective rate at any income." : (
          <span><b className="text-[#00416a]">{tl(Math.round(hoverInc / LAKH) * LAKH < CR ? Math.round(hoverInc / LAKH) * LAKH : Math.round(hoverInc / (CR / 10)) * (CR / 10))}</b>: {lines.map((l) => `${l.label} ${pctTxt(l.f(hoverInc))}`).join("  ·  ")}</span>
        )}
      </div>
      <p className="mt-3 text-xs text-gray-400">Effective rate includes surcharge with marginal relief and 4% cess. The 22% line is flat because its surcharge is a flat 10%.</p>
    </Card>
  );
}

/* ───── 22% vs normal regime calculator (with MAT) ───── */

function RegimeCalculator() {
  const [inc, setInc] = useState(500); // ₹ lakh, income under the 22% regime
  const [lost, setLost] = useState(40); // ₹ lakh deductions only available in the normal regime
  const [book, setBook] = useState(480); // ₹ lakh book profit for MAT
  const [small, setSmall] = useState(true); // turnover up to ₹400 crore
  const [yr, setYr] = useState<"fy2526" | "ty2627">("ty2627");

  const i22 = inc * LAKH;
  const iNorm = Math.max(0, (inc - lost) * LAKH);
  const t22 = taxOn(i22, 0.22, [], FLAT10);
  const rate = small ? 0.25 : 0.30;
  const tn = taxOn(iNorm, rate, DOM_SLABS);
  const matRate = yr === "fy2526" ? 0.15 : 0.14;
  const tm = taxOn(book * LAKH, matRate, DOM_SLABS);
  const matApplies = tm.total > tn.total;
  const normalPay = Math.max(tn.total, tm.total);
  const diff = normalPay - t22.total; // positive = 22% saves
  const max = Math.max(t22.total, normalPay, 1);
  const num = (setter: (n: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => setter(Math.max(0, Number(e.target.value) || 0));

  return (
    <Card>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Total income under the 22% regime (₹ lakh)">
          <input type="number" min={0} value={inc} onChange={num(setInc)} className={inputCls} />
        </Field>
        <Field label="Deductions you would claim only in the normal regime (₹ lakh)">
          <input type="number" min={0} value={lost} onChange={num(setLost)} className={inputCls} />
        </Field>
        <Field label="Book profit for MAT (₹ lakh)">
          <input type="number" min={0} value={book} onChange={num(setBook)} className={inputCls} />
        </Field>
        <Field label="Year">
          <select value={yr} onChange={(e) => setYr(e.target.value as "fy2526" | "ty2627")} className={inputCls}>
            <option value="fy2526">FY 2025-26 (1961 Act, MAT 15%)</option>
            <option value="ty2627">Tax year 2026-27 (2025 Act, MAT 14%)</option>
          </select>
        </Field>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {([[true, "Turnover up to ₹400 crore (25% base)"], [false, "Turnover above ₹400 crore (30% base)"]] as const).map(([v, l]) => (
          <button key={l} onClick={() => setSmall(v)} aria-pressed={small === v} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${small === v ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:bg-[#00416a]/5"}`}>{l}</button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {[
          { l: "22% regime", v: t22.total, c: "bg-emerald-500", s: `${pctTxt(t22.eff)} effective` },
          { l: matApplies ? "Normal regime (MAT applies)" : "Normal regime", v: normalPay, c: matApplies ? "bg-amber-500" : "bg-[#0a6aa8]", s: `${pctTxt(i22 > 0 ? normalPay / i22 : 0)} of income under the 22% regime` },
        ].map((r) => (
          <div key={r.l}>
            <div className="flex justify-between text-sm mb-1"><span className="font-semibold text-gray-800">{r.l}</span><span className="tabular-nums font-bold text-[#00416a]">{inr(r.v)}</span></div>
            <div className="h-3.5 rounded-full bg-gray-100 overflow-hidden"><div className={`h-full rounded-full transition-all duration-500 ${r.c}`} style={{ width: `${(r.v / max) * 100}%` }} /></div>
            <p className="text-xs text-gray-400 mt-1">{r.s}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid sm:grid-cols-3 gap-3">
        <Stat k="Tax, 22% regime" v={inr(t22.total)} tone="good" />
        <Stat k="Tax, normal regime" v={inr(normalPay)} tone={matApplies ? "warn" : "info"} />
        <Stat k={diff >= 0 ? "22% regime saves" : "Normal regime saves"} v={inr(Math.abs(diff))} tone={diff >= 0 ? "good" : "navy"} />
      </div>

      <div className={`mt-4 rounded-2xl border px-5 py-4 text-sm leading-relaxed ${diff >= 0 ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-sky-50 border-sky-200 text-[#00416a]"}`} aria-live="polite">
        <p className="font-bold mb-1">{diff >= 0 ? "On these numbers, the 22% regime costs less." : "On these numbers, the normal regime costs less."}</p>
        {matApplies ? "MAT is higher than normal tax here, so MAT is what the normal-regime company would pay. For tax year 2026-27 onwards it is described as a final tax with no new credit. " : ""}
        {lost > 0 ? `Giving up ${inr(lost * LAKH)} of deductions raises the 22% regime income, which is already counted.` : "You entered no deductions to give up, which is why the 22% regime usually wins."}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <button onClick={() => openInquiryForm(CFG.service)} className="bg-[#00416a] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#002b45] active:scale-95 transition">Get a CA to model my company →</button>
        <p className="text-xs text-gray-400">Illustrative. Ignores brought-forward losses, MAT credit, capital gains, special-rate income and Form 10-IC timing. The 22% choice is irrevocable, so confirm before opting.</p>
      </div>
    </Card>
  );
}

/* ───── Advance tax planner ───── */

function AdvanceTaxPlanner() {
  const today = useToday();
  const [liab, setLiab] = useState(50); // ₹ lakh
  const [yr, setYr] = useState(2026); // financial year starting
  const L = liab * LAKH;
  const sched = [
    { d: new Date(yr, 5, 15), cum: 0.15, l: "15 June" },
    { d: new Date(yr, 8, 15), cum: 0.45, l: "15 September" },
    { d: new Date(yr, 11, 15), cum: 0.75, l: "15 December" },
    { d: new Date(yr + 1, 2, 15), cum: 1, l: "15 March" },
  ];
  return (
    <Card>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Estimated tax liability for the year (₹ lakh)">
          <input type="number" min={0} value={liab} onChange={(e) => setLiab(Math.max(0, Number(e.target.value) || 0))} className={inputCls} />
        </Field>
        <Field label="Financial year">
          <select value={yr} onChange={(e) => setYr(+e.target.value)} className={inputCls}>
            <option value={2025}>FY 2025-26</option>
            <option value={2026}>FY 2026-27 (tax year 2026-27)</option>
          </select>
        </Field>
      </div>
      <ol className="mt-5 space-y-3">
        {sched.map((s, i) => {
          const st = statusOf(s.d, today);
          const prev = i === 0 ? 0 : sched[i - 1].cum;
          return (
            <li key={s.l} className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-bold text-[#00416a]">{s.l} {s.d.getFullYear()}</p>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${st.cls}`}>{st.text}</span>
              </div>
              <div className="mt-2 h-2.5 rounded-full bg-gray-200 overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#00416a] to-emerald-500 transition-all duration-500" style={{ width: `${s.cum * 100}%` }} /></div>
              <p className="mt-2 text-sm text-gray-600">Cumulative <b>{Math.round(s.cum * 100)}%</b> = <b>{inr(L * s.cum)}</b> · this instalment <b>{inr(L * (s.cum - prev))}</b></p>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-xs text-gray-400">Companies pay advance tax in four instalments at 15%, 45%, 75% and 100% of the estimated liability. A shortfall or delay attracts interest, reported at 1% a month. Confirm the position for your case.</p>
    </Card>
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
      <Sec id="rates" label="Rates at a glance" title="Company income tax rates in India: the short answer">
        <P>India does not tax every company at one rate. The rate a company pays depends on whether it is domestic or foreign, whether it has opted for a concessional regime, and, under the normal regime, how large its turnover was in a base year. On top of the base rate come a surcharge (which depends on income) and a 4% health and education cess.</P>
        <P>For a domestic company, the figure most owners want is the effective rate under the 22% regime: <b>25.17%</b> after the flat 10% surcharge and 4% cess. Under the normal regime, a company whose turnover in the base year was up to ₹400 crore pays 25% plus surcharge and cess, which comes to <b>26%</b> at income up to ₹1 crore and rises to about <b>29.12%</b> above ₹10 crore. Other domestic companies pay 30%, which works out to <b>31.2%</b> to about <b>34.94%</b>.</P>
        <P>Use the toggle to see how the same base rate behaves at different income bands. The effective rates are calculated live from the base rate, the surcharge slab and the cess, so they will match your own arithmetic.</P>
        <Reveal><RateTable /></Reveal>
        <Callout tone="info" title="Check the year before you quote a rate">
          The rates above are the ones in public references for FY 2025-26 and for tax year 2026-27. The new Income-tax Act, 2025 applies from 1 April 2026 and renames the assessment year and previous year into a single &quot;tax year&quot;. Base rates for companies have been carried over, but section numbers have changed. Your CA should confirm the position for your filing.
        </Callout>
      </Sec>

      <Sec id="regimes" label="The regimes" title="Normal regime, 22% regime and 15% regime explained">
        <P>Three domestic-company regimes sit side by side. They are not three rates for three kinds of income. They are three different ways of computing and taxing the whole of a company&apos;s business income, and a company is under exactly one of them for a year.</P>
        <Tabs tabs={[
          { id: "normal", label: "Normal regime", body: (
            <div className="space-y-3 text-[15px] leading-relaxed text-gray-700">
              <p>This is the default. A domestic company pays <b>25%</b> if its total turnover or gross receipts in the base year (FY 2022-23) did not exceed ₹400 crore, and <b>30%</b> otherwise. Surcharge applies at 7% above ₹1 crore and 12% above ₹10 crore of income, and cess is 4%.</p>
              <p>The price of the lower-looking rate is not the rate itself but what surrounds it. The company keeps access to area-based and investment-linked deductions, and it can carry forward and set off losses and unabsorbed depreciation in the usual way. In return it is exposed to <b>Minimum Alternate Tax</b>, which can push the tax above the normal computation when book profit is high and taxable income is low.</p>
            </div>
          ) },
          { id: "r22", label: "22% regime", body: (
            <div className="space-y-3 text-[15px] leading-relaxed text-gray-700">
              <p>Section 115BAA of the 1961 Act, reported as section 200 of the 2025 Act, lets a domestic company opt for <b>22%</b>. The surcharge is a flat <b>10%</b> whatever the income, and cess is 4%, so the effective rate is <b>25.168%</b>.</p>
              <p>The cost is that the company gives up specified deductions and exemptions, including most profit-linked and area-based incentives and additional depreciation, and cannot set off brought-forward losses or depreciation that arose from those deductions. In return, <b>MAT does not apply</b>. The option is made by filing Form 10-IC on or before the due date for the return, and as generally understood it cannot be withdrawn once exercised.</p>
            </div>
          ) },
          { id: "r15", label: "15% regime", body: (
            <div className="space-y-3 text-[15px] leading-relaxed text-gray-700">
              <p>Section 115BAB, reported as section 201 of the 2025 Act, offered <b>15%</b> to new domestic manufacturing companies set up after 1 October 2019 that began manufacturing within the prescribed window. With a flat 10% surcharge and 4% cess, the effective rate is <b>17.16%</b>.</p>
              <p>The window to start production has closed, so this is relevant only to companies that already qualified. Treat it as a legacy regime and ask your CA before relying on it, because the conditions on business activity are strict.</p>
            </div>
          ) },
        ]} />
        <Callout tone="good" title="Why most profitable companies end up at 22%">
          If a company does not use area-based or profit-linked deductions and expects to be profitable, the 22% regime usually costs less than the normal 25% or 30% structure and removes MAT from the picture. The exception is a company with large brought-forward losses or deductions that the normal regime would let it use. That is a question for a calculation, not a rule of thumb.
        </Callout>
      </Sec>

      <Sec id="surcharge" label="Surcharge and cess" title="Surcharge, marginal relief and cess: where the effective rate really comes from">
        <P>A base rate on its own is misleading. The surcharge is a percentage of the income tax, not of income, and it steps up once income crosses ₹1 crore and again at ₹10 crore. Cess then applies at 4% on tax plus surcharge.</P>
        <P><b>Marginal relief</b> is the reason a company does not pay more in extra tax than the extra income it earned above a threshold. If income is ₹1.01 crore, the surcharge is limited so that tax plus surcharge does not exceed the tax at ₹1 crore plus the ₹1 lakh by which income exceeds it. That is why the lines in the chart below bend smoothly rather than jump.</P>
        <P>The 22% and 15% regimes are different. Their surcharge is flat at 10%, so their effective rate does not climb as income grows. That is why, at ₹10 crore and above, the gap between the 22% regime and the normal 25% regime widens to roughly four percentage points.</P>
        <Reveal><SurchargeChart /></Reveal>
        <Card>
          <h3 className="font-extrabold text-[#00416a] mb-3">Effective rates by base rate and income</h3>
          <div className="overflow-x-auto -mx-2">
            <table className="min-w-[520px] w-full text-sm">
              <thead><tr className="text-left text-xs uppercase tracking-wide text-gray-500"><th className="px-2 py-2">Base rate</th><th className="px-2 py-2">Up to ₹1 cr</th><th className="px-2 py-2">₹1 to ₹10 cr</th><th className="px-2 py-2">Above ₹10 cr</th></tr></thead>
              <tbody className="tabular-nums">
                {[["22% (Sec 115BAA / 200)", "25.17%", "25.17%", "25.17%"], ["25% (normal, turnover up to ₹400 cr)", "26.00%", "27.82%", "29.12%"], ["30% (normal, other companies)", "31.20%", "33.38%", "34.94%"], ["35% (foreign company)", "36.40%", "37.13%", "38.22%"]].map((r) => (
                  <tr key={r[0]} className="border-t border-gray-100">{r.map((c, i) => (<td key={i} className={`px-2 py-3 ${i === 0 ? "font-semibold text-gray-800" : "text-[#00416a] font-bold"}`}>{c}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">Rounded to two decimals, before marginal relief. Verify against the Finance Act in force for your year.</p>
        </Card>
      </Sec>

      <Sec id="calc" label="Calculator" title="22% regime or normal regime: which costs your company less?">
        <P>This calculator compares the two regimes for the same company. Enter income under the 22% regime, the deductions you would claim only in the normal regime, and your book profit for MAT. It applies surcharge with marginal relief, cess, and the MAT test, and shows which regime produces the lower bill.</P>
        <Reveal><RegimeCalculator /></Reveal>
        <Callout tone="warn" title="What the calculator leaves out">
          It treats the business income as the only income, ignores carried-forward losses and MAT credit, and does not model capital gains or other special-rate income. The 22% choice is made on Form 10-IC and is irrevocable, so run the full numbers with your CA before filing.
        </Callout>
      </Sec>

      <Sec id="mat" label="Minimum Alternate Tax" title="MAT: 15% for FY 2025-26, 14% from tax year 2026-27">
        <P>MAT exists to ensure that a company which reports book profit to shareholders does not pay little or no tax because deductions have wiped out its taxable income. Under the normal regime, the company pays the higher of its regular tax and MAT, calculated as a percentage of book profit under section 115JB (reported as section 206 of the 2025 Act).</P>
        <P>For FY 2025-26 the rate is <b>15%</b> of book profit. Public references on the Union Budget 2026 report a reduction to <b>14%</b> from tax year 2026-27, along with a change that treats MAT as a final tax so that no fresh MAT credit is generated. Because secondary sources differ on the exact wording, confirm the enacted text before you plan around it.</P>
        <Callout tone="info" title="Who does not pay MAT">
          A company under the 22% or 15% regime is outside MAT. That is one of the strongest practical reasons for companies with substantial book profit and few deductions to choose the concessional regime. Some categories, such as certain companies in financial services and those in IFSC units, have their own rules, so check the exemptions that apply.
        </Callout>
        <Card>
          <h3 className="font-extrabold text-[#00416a] mb-3">MAT effective rate, including surcharge and cess</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Stat k="Book profit up to ₹1 cr" v="15.60% / 14.56%" tone="info" />
            <Stat k="₹1 cr to ₹10 cr" v="16.69% / 15.57%" tone="info" />
            <Stat k="Above ₹10 cr" v="17.47% / 16.30%" tone="info" />
          </div>
          <p className="mt-3 text-xs text-gray-400">First figure at 15% (FY 2025-26), second at 14% (tax year 2026-27), before marginal relief.</p>
        </Card>
      </Sec>

      <Sec id="newact" label="Income-tax Act, 2025" title="What changes with the Income-tax Act, 2025">
        <P>The Income-tax Act, 2025 replaces the 1961 Act for tax years beginning on or after 1 April 2026. Three changes matter to anyone reading an older article on company tax rates.</P>
        <ul className="space-y-3 mb-2">
          {[
            ["One \"tax year\"", "The assessment year and previous year are replaced by a single tax year. Income earned in the twelve months to 31 March 2027 is taxed in tax year 2026-27."],
            ["New section numbers", "The concessional regimes appear under new numbers: 115BAA is reported as section 200, 115BAB as section 201, and 115JB as section 206. Notices, Form 10-IC references and software labels may use either numbering during the transition."],
            ["Same economics, in most places", "Public summaries describe the company rate structure as carried forward. Do not assume that every condition is identical. Ask your CA to confirm each one for your own facts."],
          ].map(([t, d]) => (
            <li key={t} className="flex gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#00416a]" />
              <p className="text-[15px] leading-relaxed text-gray-700"><b className="text-[#00416a]">{t}.</b> {d}</p>
            </li>
          ))}
        </ul>
        <Callout tone="warn" title="Do not mix the numbering in filings">
          If you quote a section in a board note, tax audit report or advance-tax computation, use the one for the year you are dealing with. A 1961 reference for a 2026-27 computation can confuse the reader and delay an approval.
        </Callout>
      </Sec>

      <Sec id="others" label="Other entities" title="How other entities compare with a company">
        <P>Many readers ask about companies when their actual question is which structure to choose. The comparison below sets out the headline rates in public references, so that you can see where a company sits against the alternatives. Rates for non-company entities are the headline base rate, before surcharge and cess.</P>
        <Card>
          <div className="overflow-x-auto -mx-2">
            <table className="min-w-[560px] w-full text-sm">
              <thead><tr className="text-left text-xs uppercase tracking-wide text-gray-500"><th className="px-2 py-2">Entity</th><th className="px-2 py-2">Headline base rate</th><th className="px-2 py-2">Note</th></tr></thead>
              <tbody>
                {[
                  ["Domestic company, 22% regime", "22%", "Flat 10% surcharge, no MAT, Form 10-IC"],
                  ["Domestic company, normal regime", "25% or 30%", "Depends on base-year turnover; MAT applies"],
                  ["Foreign company", "35%", "On non-treaty business income; treaty rates may differ"],
                  ["LLP and partnership firm", "30%", "12% surcharge above ₹1 crore; AMT may apply to LLPs"],
                  ["New domestic manufacturing company", "15%", "Legacy regime; commencement window has closed"],
                  ["Co-operative society, concessional", "22%", "Under the co-operative regime, subject to conditions"],
                ].map((r) => (<tr key={r[0]} className="border-t border-gray-100"><td className="px-2 py-3 font-semibold text-gray-800">{r[0]}</td><td className="px-2 py-3 text-[#00416a] font-bold">{r[1]}</td><td className="px-2 py-3 text-gray-600">{r[2]}</td></tr>))}
              </tbody>
            </table>
          </div>
        </Card>
        <P>A company also has a second layer of tax that a firm does not. Profits taxed in the company are later distributed as dividend, which is taxed in the shareholder&apos;s hands at their slab rate. When you compare a company with an LLP, compare the combined burden on the money that reaches the owner, not only the company-level rate.</P>
      </Sec>

      <Sec id="advance" label="Advance tax" title="Advance tax for companies: four instalments">
        <P>A company whose estimated tax for the year is above ₹10,000 pays advance tax during the year. The instalments are cumulative: 15% by 15 June, 45% by 15 September, 75% by 15 December and 100% by 15 March. A shortfall or delay attracts interest, which public references put at 1% a month, so the cheapest tax planning is often just paying on time.</P>
        <Reveal><AdvanceTaxPlanner /></Reveal>
        <Callout tone="info" title="Return dates move, advance tax dates do not">
          Return due dates for a financial year are sometimes extended by notification, and reports mention extensions this year for returns that need an audit or transfer pricing report. Advance tax dates and interest on late payment are a separate matter and are not moved by those extensions. Check the notification applicable to your case.
        </Callout>
      </Sec>

      <Sec id="choose" label="Choosing" title="How to choose a regime in four steps">
        <ol className="space-y-3">
          {[
            ["Estimate five years of profit", "A regime is not a one-year decision. The 22% option is irrevocable, so test it against a realistic range of profits, not only this year."],
            ["List the deductions you actually use", "Add up area-based, profit-linked and additional-depreciation claims. Those are what you give up under the 22% regime."],
            ["Check brought-forward losses and MAT credit", "Old losses and credit may be worth more under the normal regime. They can be lost or stranded if you switch."],
            ["File Form 10-IC on time", "The option must be exercised on or before the due date for the return. Missing it can lock a company out of the regime for that year."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4 rounded-2xl border border-gray-100 bg-white px-4 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00416a] text-sm font-bold text-white">{i + 1}</span>
              <p className="text-[15px] leading-relaxed text-gray-700"><b className="text-[#00416a]">{t}.</b> {d}</p>
            </li>
          ))}
        </ol>
        <Reveal>
          <Checklist storeKey="ctr" items={[
            "Base-year turnover (FY 2022-23) checked against the ₹400 crore line",
            "Five-year profit projection prepared",
            "Deductions and incentives we would lose under 22% listed",
            "Brought-forward losses and MAT credit schedule reviewed",
            "Form 10-IC filed or scheduled before the return due date",
            "Advance tax instalments planned for 15 Jun, 15 Sep, 15 Dec, 15 Mar",
            "Board note records the regime decision and the reasoning",
          ]} />
        </Reveal>
      </Sec>

      <Sec id="mistakes" label="Avoid these" title="Common mistakes with company tax rates">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Quoting 25% and forgetting surcharge and cess", "The effective rate at income above ₹10 crore is about 29% under the normal 25% regime, not 25%."],
            ["Choosing 22% without testing losses", "Opting in can strand brought-forward losses and credits that the normal regime would have let you use."],
            ["Missing Form 10-IC", "The option is time-bound. A late election is treated as no election."],
            ["Using the wrong section number", "1961 Act and 2025 Act numbers differ. Quote the right one for the year."],
            ["Ignoring MAT under the normal regime", "A company with high book profit and low taxable income can pay more than its normal computation suggests."],
            ["Assuming return extensions move advance tax", "Extensions concern returns and reports. Advance tax interest follows its own dates."],
          ].map(([t, d]) => (
            <Reveal key={t}><div className="h-full rounded-2xl border border-red-100 bg-red-50/60 p-4"><p className="font-bold text-red-900 mb-1">{t}</p><p className="text-sm text-red-900/80 leading-relaxed">{d}</p></div></Reveal>
          ))}
        </div>
        <Callout tone="bad" title="Not tax advice">
          This guide is general information based on public references as of 11 November 2026. Rates, thresholds and section numbers can change by Finance Act or notification. A Chartered Accountant should confirm the position for your company before you file or elect a regime.
        </Callout>
      </Sec>

      <Sec id="faqs" label="FAQs" title="Frequently asked questions">
        <Faqs faqs={faqs} />
      </Sec>
    </>
  );
}