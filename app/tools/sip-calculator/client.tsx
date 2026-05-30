// app/tools/sip-calculator/client.tsx
"use client";

import Link from "next/link";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  TrendingUp, ArrowRight, ChevronDown, Phone, MessageCircle,
  FileText, Shield, BadgeCheck, Zap, IndianRupee, RefreshCw,
  Info, BarChart3, Target, Calculator, Layers, Calendar,
  ArrowUpRight, Download, PieChart,
} from "lucide-react";
import Footar from "@/components/Footar";

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const PHONE = "918937980366";

// ─── Types ────────────────────────────────────────────────────────────────────
type CalcMode = "returns" | "target" | "topup";

interface YearRow {
  year: number;
  invested: number;
  returns: number;
  corpus: number;
  inflationAdjusted?: number;
}

interface SIPResult {
  totalInvested: number;
  wealthGained: number;
  maturityValue: number;
  inflationAdjustedValue: number;
  absoluteReturns: number;
  yearlyData: YearRow[];
}

interface TargetResult {
  requiredSIP: number;
  totalInvested: number;
  wealthGained: number;
  yearlyData: YearRow[];
}

interface TopUpResult {
  totalInvested: number;
  wealthGained: number;
  maturityValue: number;
  regularSIPMaturity: number;
  extraWealth: number;
  yearlyData: YearRow[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n: number) => "₹" + Math.round(Math.max(0, n)).toLocaleString("en-IN");

const fmtC = (n: number): string => {
  n = Math.max(0, n);
  if (n >= 10_000_000) return `₹${(n / 10_000_000).toFixed(2)} Cr`;
  if (n >= 100_000)    return `₹${(n / 100_000).toFixed(2)} L`;
  if (n >= 1_000)      return `₹${(n / 1_000).toFixed(1)}K`;
  return fmt(n);
};

// ─── Calc Functions ───────────────────────────────────────────────────────────
function calcSIP(monthly: number, rate: number, years: number, inflation = 6): SIPResult {
  const r = rate / 100 / 12;
  const n = years * 12;
  const maturityValue = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const totalInvested  = monthly * n;
  const wealthGained   = maturityValue - totalInvested;
  const inflAdjusted   = maturityValue / Math.pow(1 + inflation / 100, years);
  const absoluteRet    = totalInvested > 0 ? ((wealthGained / totalInvested) * 100) : 0;

  const yearlyData: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    const m   = y * 12;
    const cor = monthly * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
    const inv = monthly * m;
    yearlyData.push({
      year: y,
      invested: Math.round(inv),
      returns:  Math.round(cor - inv),
      corpus:   Math.round(cor),
      inflationAdjusted: Math.round(cor / Math.pow(1 + inflation / 100, y)),
    });
  }
  return {
    totalInvested: Math.round(totalInvested),
    wealthGained:  Math.round(wealthGained),
    maturityValue: Math.round(maturityValue),
    inflationAdjustedValue: Math.round(inflAdjusted),
    absoluteReturns: Math.round(absoluteRet * 10) / 10,
    yearlyData,
  };
}

function calcTargetSIP(targetAmount: number, rate: number, years: number): TargetResult {
  const r = rate / 100 / 12;
  const n = years * 12;
  const requiredSIP = (targetAmount * r) / (((Math.pow(1 + r, n) - 1) * (1 + r)));
  const totalInvested = requiredSIP * n;
  const wealthGained  = targetAmount - totalInvested;

  const yearlyData: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    const m   = y * 12;
    const cor = requiredSIP * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
    const inv = requiredSIP * m;
    yearlyData.push({
      year: y,
      invested: Math.round(inv),
      returns:  Math.round(cor - inv),
      corpus:   Math.round(cor),
    });
  }
  return {
    requiredSIP:    Math.round(requiredSIP),
    totalInvested:  Math.round(totalInvested),
    wealthGained:   Math.round(wealthGained),
    yearlyData,
  };
}

function calcTopUp(
  monthly: number, rate: number, years: number, stepUpPct: number
): TopUpResult {
  const r = rate / 100 / 12;
  let corpus = 0;
  let totalInvested = 0;
  let currentMonthly = monthly;
  const yearlyData: YearRow[] = [];

  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      corpus = corpus * (1 + r) + currentMonthly;
      totalInvested += currentMonthly;
    }
    yearlyData.push({
      year: y,
      invested: Math.round(totalInvested),
      returns:  Math.round(corpus - totalInvested),
      corpus:   Math.round(corpus),
    });
    currentMonthly = currentMonthly * (1 + stepUpPct / 100);
  }

  // Regular SIP for comparison
  const rr = rate / 100 / 12;
  const n  = years * 12;
  const regularMaturity = monthly * ((Math.pow(1 + rr, n) - 1) / rr) * (1 + rr);

  return {
    totalInvested:       Math.round(totalInvested),
    wealthGained:        Math.round(corpus - totalInvested),
    maturityValue:       Math.round(corpus),
    regularSIPMaturity:  Math.round(regularMaturity),
    extraWealth:         Math.round(corpus - regularMaturity),
    yearlyData,
  };
}

// ─── SVG Donut ────────────────────────────────────────────────────────────────
function Donut({ invested, returns, size = 120 }: { invested: number; returns: number; size?: number }) {
  const total = invested + returns || 1;
  const R     = size * 0.36;
  const cx    = size / 2;
  const cy    = size / 2;
  const C     = 2 * Math.PI * R;
  const sw    = size * 0.13;
  const iP    = (invested / total) * 100;
  const rP    = (returns  / total) * 100;
  const iD    = (iP / 100) * C;
  const rD    = (rP / 100) * C;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#e2e8f0" strokeWidth={sw} />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#00416a" strokeWidth={sw}
        strokeDasharray={`${Math.max(iD - 3, 0)} ${C}`}
        strokeDashoffset={0} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`} />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#0ea5e9" strokeWidth={sw}
        strokeDasharray={`${Math.max(rD - 3, 0)} ${C}`}
        strokeDashoffset={-iD} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`} />
      <text x={cx} y={cy - 5} textAnchor="middle" fontSize={size * 0.1} fill="#1e293b" fontWeight="800">
        {returns > 0 ? `${Math.round(rP)}%` : "0%"}
      </text>
      <text x={cx} y={cy + size * 0.12} textAnchor="middle" fontSize={size * 0.075} fill="#94a3b8">returns</text>
    </svg>
  );
}

// ─── SVG Bar Chart ────────────────────────────────────────────────────────────
function BarChart({ data, showInflation = false }: { data: YearRow[]; showInflation?: boolean }) {
  const maxVal  = Math.max(...data.map(d => d.corpus), 1);
  const display = data.length > 20
    ? data.filter((_, i) => i % Math.ceil(data.length / 20) === 0 || i === data.length - 1)
    : data;
  const BW = 26; const GAP = 10; const H = 160; const PB = 30;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${Math.max(display.length * (BW + GAP) + GAP, 360)} ${H + PB}`}
        className="w-full min-w-[360px]"
        preserveAspectRatio="none"
        aria-label="SIP growth bar chart"
      >
        {/* Grid lines */}
        {[0.25, 0.5, 0.75, 1].map(p => (
          <line key={p}
            x1={0} y1={H - p * H} x2={display.length * (BW + GAP) + GAP} y2={H - p * H}
            stroke="#f1f5f9" strokeWidth="1" />
        ))}
        {display.map((d, i) => {
          const x   = i * (BW + GAP) + GAP;
          const iH  = (d.invested / maxVal) * H;
          const cH  = (d.corpus   / maxVal) * H;
          const rH  = cH - iH;
          const inH = d.inflationAdjusted ? (d.inflationAdjusted / maxVal) * H : 0;

          return (
            <g key={d.year}>
              {/* invested */}
              <rect x={x} y={H - iH} width={BW} height={iH} fill="#00416a" rx="3" />
              {/* returns */}
              <rect x={x} y={H - cH} width={BW} height={Math.max(rH, 0)} fill="#0ea5e9" rx="3" opacity="0.85" />
              {/* inflation line marker */}
              {showInflation && d.inflationAdjusted && (
                <circle cx={x + BW / 2} cy={H - inH} r="3" fill="#f97316" />
              )}
              {/* label */}
              <text x={x + BW / 2} y={H + PB - 4} textAnchor="middle" fontSize="8" fill="#94a3b8" fontWeight="600">
                Y{d.year}
              </text>
            </g>
          );
        })}
        {/* Orange inflation connect line */}
        {showInflation && (
          <polyline
            points={display
              .filter(d => d.inflationAdjusted)
              .map((d, i) => {
                const x = i * (BW + GAP) + GAP + BW / 2;
                const y = H - ((d.inflationAdjusted ?? 0) / maxVal) * H;
                return `${x},${y}`;
              }).join(" ")}
            fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8"
          />
        )}
      </svg>

      <div className="flex items-center justify-center gap-5 mt-3 flex-wrap">
        <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
          <span className="w-3 h-3 rounded bg-[#00416a]" /> Invested
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
          <span className="w-3 h-3 rounded bg-sky-400" /> Returns
        </span>
        {showInflation && (
          <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
            <span className="w-3 h-3 rounded-full bg-orange-400" /> Inflation-adjusted
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Slider Row ───────────────────────────────────────────────────────────────
function SliderRow({
  label, value, min, max, step, onChange, display, markers, tooltip, unit,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; display: string; markers: string[];
  tooltip?: string; unit?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{label}</label>
          {tooltip && (
            <div className="group relative">
              <Info size={12} className="text-gray-300 cursor-help" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 bg-gray-800 text-white text-[10px] rounded-xl p-2.5 opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 leading-relaxed shadow-xl">
                {tooltip}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 bg-[#00416a]/8 border border-[#00416a]/20 rounded-xl px-3 py-1.5">
          <IndianRupee size={11} className="text-[#00416a]" />
          <span className="text-[#00416a] font-extrabold text-sm">{display}</span>
          {unit && <span className="text-[#00416a]/70 text-xs ml-1">{unit}</span>}
        </div>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-[#00416a] h-1.5 cursor-pointer"
        aria-label={label}
      />
      <div className="flex justify-between text-[10px] text-gray-400">
        {markers.map((m, i) => <span key={i}>{m}</span>)}
      </div>
    </div>
  );
}

// ─── Number Input ─────────────────────────────────────────────────────────────
function NumberInput({
  label, value, onChange, min, max, prefix, suffix, tooltip,
}: {
  label: string; value: number; onChange: (v: number) => void;
  min?: number; max?: number; prefix?: string; suffix?: string; tooltip?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5">
        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{label}</label>
        {tooltip && (
          <div className="group relative">
            <Info size={12} className="text-gray-300 cursor-help" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 bg-gray-800 text-white text-[10px] rounded-xl p-2.5 opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 leading-relaxed shadow-xl">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">{prefix}</span>
        )}
        <input
          type="number" value={value || ""}
          onChange={e => {
            const v = Number(e.target.value) || 0;
            onChange(Math.max(min ?? 0, Math.min(max ?? Infinity, v)));
          }}
          className={`w-full py-2.5 text-sm font-bold text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a]/50 transition placeholder:text-gray-300 ${prefix ? "pl-8 pr-3" : suffix ? "pl-3 pr-10" : "px-3"}`}
          placeholder="0"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">{suffix}</span>
        )}
      </div>
    </div>
  );
}

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is SIP and how is its return calculated?",
    a: "SIP (Systematic Investment Plan) lets you invest a fixed amount monthly in a mutual fund. Returns are calculated using the Future Value of Annuity Due formula: FV = P × [(1+r)ⁿ − 1] / r × (1+r), where P = monthly SIP, r = monthly rate (annual rate ÷ 12 ÷ 100), n = total months. Because each instalment earns compound interest for a different duration, SIPs benefit enormously from the power of compounding — especially over 10+ year horizons.",
  },
  {
    q: "What is XIRR and how does it relate to SIP returns?",
    a: "XIRR (Extended Internal Rate of Return) is the most accurate measure of SIP returns because it accounts for the timing of each cash flow. Unlike CAGR (which assumes a single lump sum), XIRR computes the effective annualised return for multiple cash flows at different dates. A fund showing 15% XIRR means your SIP investments — accounting for the timing of each monthly instalment — have grown at 15% per year. Most AMCs report SIP performance in XIRR. Our calculator uses the standard SIP FV formula which closely approximates XIRR for regular monthly SIPs.",
  },
  {
    q: "What is a Step-Up SIP and how much extra corpus does it create?",
    a: "A Step-Up SIP (also called Top-Up SIP) automatically increases your monthly SIP amount by a fixed percentage each year — typically aligned with your annual salary increment. For example, starting with ₹10,000/month and stepping up 10% annually: Year 1 = ₹10,000, Year 2 = ₹11,000, Year 3 = ₹12,100, and so on. Over 20 years at 12% p.a., a regular SIP of ₹10,000 grows to ₹ ~1 crore, but a 10% step-up SIP grows to ₹1.8–2 crore — nearly double the corpus from the same fund, purely due to increased contributions aligned with income growth.",
  },
  {
    q: "What is inflation-adjusted SIP return and why does it matter?",
    a: "The nominal SIP maturity value (e.g., ₹1 crore after 20 years) does not account for inflation eroding purchasing power. Inflation-adjusted return (also called real return) discounts the maturity value at the prevailing inflation rate to show what your corpus is worth in today's money. At 6% inflation, ₹1 crore after 20 years has the purchasing power of only about ₹31 lakhs today. Our SIP calculator shows both the nominal maturity value and the inflation-adjusted (real) value, helping you plan realistically for retirement, children's education, and other long-term goals.",
  },
  {
    q: "How many SIPs can I have simultaneously?",
    a: "There is no regulatory limit on the number of SIPs you can run simultaneously. You can have separate SIPs in multiple mutual fund schemes — large-cap, mid-cap, ELSS, debt, international funds — across different AMCs. Many investors run 3–5 SIPs in parallel to diversify across fund categories. The only practical constraint is your monthly cash flow — ensure all SIP EMIs combined are less than 40–50% of your net monthly income to maintain healthy finances.",
  },
  {
    q: "Can I pause or stop my SIP anytime?",
    a: "Yes — SIPs can be paused or stopped anytime online through your AMC's app, CAMS, KFintech, MF Central, or your broker app (Zerodha, Groww, Kuvera, etc.). Most AMCs offer a 1–3 month SIP pause without cancellation. When you cancel a SIP, existing investments remain in the fund and continue to earn returns — only future instalments stop. For ELSS SIPs, each instalment is locked for 3 years individually — so you can stop new SIPs but cannot redeem locked units.",
  },
  {
    q: "What is the minimum SIP amount in India?",
    a: "The minimum SIP amount varies by fund and AMC: most equity mutual funds accept SIPs from ₹500/month; some debt funds from ₹1,000/month; ELSS funds typically from ₹500/month. Certain AMCs have recently introduced ₹100/month SIPs to encourage small investors. For index funds and ETFs, the minimum SIP amount is typically ₹100–500. There is no maximum limit — you can invest any amount as a SIP.",
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SIPClient() {
  const [mode, setMode]             = useState<CalcMode>("returns");
  const [faqOpen, setFaqOpen]       = useState<number | null>(null);
  const [showTable, setShowTable]   = useState(false);
  const [showInflation, setShowInflation] = useState(true);

  // Returns mode
  const [monthly, setMonthly]   = useState(10000);
  const [rate,    setRate]      = useState(12);
  const [years,   setYears]     = useState(15);
  const [inflation, setInflation] = useState(6);

  // Target mode
  const [targetAmt,  setTargetAmt]  = useState(10000000);
  const [targetRate, setTargetRate] = useState(12);
  const [targetYrs,  setTargetYrs]  = useState(15);

  // Top-up mode
  const [tuMonthly, setTuMonthly] = useState(5000);
  const [tuRate,    setTuRate]    = useState(12);
  const [tuYears,   setTuYears]   = useState(20);
  const [tuStep,    setTuStep]    = useState(10);

  const sipRes    = useMemo(() => calcSIP(monthly, rate, years, inflation), [monthly, rate, years, inflation]);
  const targetRes = useMemo(() => calcTargetSIP(targetAmt, targetRate, targetYrs), [targetAmt, targetRate, targetYrs]);
  const topupRes  = useMemo(() => calcTopUp(tuMonthly, tuRate, tuYears, tuStep), [tuMonthly, tuRate, tuYears, tuStep]);

  const handleWA = () => {
    const msgs: Record<CalcMode, string> = {
      returns: `Hello Taxvio! SIP of ${fmt(monthly)}/mo @ ${rate}% for ${years} yrs → Maturity: ${fmtC(sipRes.maturityValue)}. Need investment advice.`,
      target:  `Hello Taxvio! I need ${fmtC(targetAmt)} in ${targetYrs} yrs @ ${targetRate}% → Need SIP of ${fmt(targetRes.requiredSIP)}/mo. Please guide me.`,
      topup:   `Hello Taxvio! Step-Up SIP of ${fmt(tuMonthly)}/mo + ${tuStep}% annual step-up @ ${tuRate}% for ${tuYears} yrs → ${fmtC(topupRes.maturityValue)}. Need advice.`,
    };
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msgs[mode])}`, "_blank");
  };

  // Active data for chart/table
  const activeData = mode === "returns" ? sipRes.yearlyData
    : mode === "target" ? targetRes.yearlyData
    : topupRes.yearlyData;

  const tableRows = showTable ? activeData : activeData.slice(0, 10);

  // Milestone markers
  const milestones = useMemo(() => {
    if (mode !== "returns") return [];
    const targets = [1_000_000, 5_000_000, 10_000_000, 50_000_000, 100_000_000];
    return targets
      .map(t => ({ target: t, row: sipRes.yearlyData.find(r => r.corpus >= t) }))
      .filter(m => m.row !== undefined && m.target <= sipRes.maturityValue * 1.05);
  }, [mode, sipRes]);

  const MODES = [
    { id: "returns" as CalcMode, label: "SIP Returns",    icon: TrendingUp, desc: "Calculate maturity" },
    { id: "target"  as CalcMode, label: "Target Amount",  icon: Target,     desc: "Find required SIP" },
    { id: "topup"   as CalcMode, label: "Top-Up SIP",     icon: Layers,     desc: "Annual step-up" },
  ];

  return (
    <main className="min-h-screen bg-[#f8fbfd] font-sans text-gray-800">

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-[#00416a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto">

            {/* Breadcrumb */}
            <motion.nav variants={fadeUp} className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-white transition">Financial Tools</Link>
              <span>/</span>
              <span className="text-white/80">SIP Calculator</span>
            </motion.nav>

            {/* Pill */}
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide">
              <TrendingUp size={12} className="text-sky-300" />
              SIP Returns · Target SIP · Step-Up SIP · Free Tool
            </motion.span>

            {/* H1 */}
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              SIP Calculator
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                Plan Your Wealth with SIP
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
              Calculate SIP maturity value, find monthly SIP needed for your target corpus,
              or plan a Step-Up SIP with annual increments — with real-time charts &amp;
              year-wise growth schedules.
            </motion.p>

            {/* Feature Pills */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                { icon: Zap,      label: "Instant Results" },
                { icon: BarChart3, label: "Year-wise Growth Chart" },
                { icon: Target,   label: "Goal-based Planning" },
                { icon: Shield,   label: "100% Accurate" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Icon size={11} className="text-sky-300" /> {label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
          <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
        </svg>
      </section>

      {/* ══════════ CALCULATOR ══════════ */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* ── Mode Tabs ── */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-7">
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-xl mx-auto">
              {MODES.map(({ id, label, icon: Icon, desc }) => (
                <button key={id} onClick={() => { setMode(id); setShowTable(false); }}
                  className={`py-3 px-3 rounded-xl text-left transition-all duration-200 ${mode === id ? "bg-[#00416a] shadow-lg shadow-[#00416a]/20" : "text-gray-500 hover:bg-gray-50"}`}>
                  <Icon size={15} className={`mb-1 ${mode === id ? "text-sky-300" : "text-gray-400"}`} />
                  <p className={`text-xs font-bold leading-tight ${mode === id ? "text-white" : "text-gray-800"}`}>{label}</p>
                  <p className={`text-[10px] mt-0.5 ${mode === id ? "text-white/60" : "text-gray-400"}`}>{desc}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">

            {/* ─── LEFT: Inputs ─── */}
            <div className="space-y-5">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-6"
              >
                {/* ── RETURNS MODE ── */}
                {mode === "returns" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <TrendingUp size={17} /> SIP Return Calculator
                    </h2>
                    <SliderRow label="Monthly SIP Amount" value={monthly} min={500} max={500000} step={500}
                      onChange={setMonthly} display={fmtC(monthly).replace("₹", "")}
                      markers={["₹500","₹1.25L","₹2.5L","₹3.75L","₹5L"]}
                      tooltip="Fixed monthly amount you invest in a mutual fund SIP." />
                    <SliderRow label="Expected Annual Return" value={rate} min={1} max={30} step={0.5}
                      onChange={setRate} display={`${rate}%`}
                      markers={["1%","8%","15%","22%","30%"]}
                      tooltip="Expected annualised return from your mutual fund. Historical equity CAGR: 10–15% p.a." />
                    <SliderRow label="Investment Duration" value={years} min={1} max={40} step={1}
                      onChange={setYears} display={`${years}`} unit={years === 1 ? "Year" : "Years"}
                      markers={["1 Yr","10 Yrs","20 Yrs","30 Yrs","40 Yrs"]}
                      tooltip="Total period for which you continue the SIP." />
                    <SliderRow label="Expected Inflation Rate" value={inflation} min={1} max={15} step={0.5}
                      onChange={setInflation} display={`${inflation}%`}
                      markers={["1%","4%","8%","12%","15%"]}
                      tooltip="Inflation erodes purchasing power. India's long-term average is around 5–7%." />

                    {/* ELSS tip */}
                    <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3.5">
                      <Info size={14} className="text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-700 leading-relaxed">
                        <strong>ELSS SIP Tax Saving:</strong> Investments up to ₹1,50,000/year qualify for Section 80C deduction — saving up to ₹46,800 in tax annually at the 30% slab + cess.
                      </p>
                    </div>
                  </>
                )}

                {/* ── TARGET MODE ── */}
                {mode === "target" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <Target size={17} /> Target Amount Calculator
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed -mt-2">
                      Enter your financial goal corpus — we'll calculate the exact monthly SIP needed.
                    </p>

                    <SliderRow label="Target Corpus (Goal Amount)" value={targetAmt} min={100000} max={100000000} step={100000}
                      onChange={setTargetAmt} display={fmtC(targetAmt).replace("₹", "")}
                      markers={["₹1L","₹25L","₹50L","₹75L","₹10Cr"]}
                      tooltip="The total corpus you want to accumulate — e.g., ₹1 Cr for retirement, ₹50L for child's education." />
                    <SliderRow label="Expected Annual Return" value={targetRate} min={1} max={30} step={0.5}
                      onChange={setTargetRate} display={`${targetRate}%`}
                      markers={["1%","8%","15%","22%","30%"]}
                      tooltip="Expected CAGR from your chosen mutual fund category." />
                    <SliderRow label="Time to Achieve Goal" value={targetYrs} min={1} max={40} step={1}
                      onChange={setTargetYrs} display={`${targetYrs}`} unit={targetYrs === 1 ? "Year" : "Years"}
                      markers={["1 Yr","10 Yrs","20 Yrs","30 Yrs","40 Yrs"]}
                      tooltip="How many years you have to reach your financial goal." />

                    {/* Goal quick-sets */}
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">Quick Goals</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { label: "₹25L — Child Education", amount: 2500000, yrs: 10 },
                          { label: "₹50L — House Down Payment", amount: 5000000, yrs: 8 },
                          { label: "₹1 Cr — Retirement Nest Egg", amount: 10000000, yrs: 20 },
                          { label: "₹5 Cr — Retirement Corpus", amount: 50000000, yrs: 25 },
                        ].map(g => (
                          <button key={g.label}
                            onClick={() => { setTargetAmt(g.amount); setTargetYrs(g.yrs); }}
                            className="text-[11px] px-3 py-1.5 bg-[#f8fbfd] border border-[#deeef7] rounded-full font-medium text-[#00416a] hover:bg-[#00416a]/10 hover:border-[#00416a]/30 transition">
                            {g.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3.5">
                      <Info size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-emerald-700 leading-relaxed">
                        <strong>Pro tip:</strong> Increase the expected return rate slightly to account for choosing actively-managed funds, or lower it for conservative index fund planning.
                      </p>
                    </div>
                  </>
                )}

                {/* ── TOP-UP SIP MODE ── */}
                {mode === "topup" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <Layers size={17} /> Step-Up / Top-Up SIP Calculator
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed -mt-2">
                      Increase your SIP every year by a fixed % (aligned with salary hike) — watch your corpus grow dramatically.
                    </p>

                    <SliderRow label="Starting Monthly SIP" value={tuMonthly} min={500} max={500000} step={500}
                      onChange={setTuMonthly} display={fmtC(tuMonthly).replace("₹", "")}
                      markers={["₹500","₹1.25L","₹2.5L","₹3.75L","₹5L"]}
                      tooltip="Your initial SIP amount in Year 1." />
                    <SliderRow label="Annual Step-Up Rate" value={tuStep} min={1} max={50} step={1}
                      onChange={setTuStep} display={`${tuStep}%`}
                      markers={["1%","12%","25%","37%","50%"]}
                      tooltip="% by which your SIP increases every year. Typically equals your annual salary increment." />
                    <SliderRow label="Expected Annual Return" value={tuRate} min={1} max={30} step={0.5}
                      onChange={setTuRate} display={`${tuRate}%`}
                      markers={["1%","8%","15%","22%","30%"]}
                      tooltip="Expected annualised return from your mutual fund." />
                    <SliderRow label="Investment Duration" value={tuYears} min={1} max={40} step={1}
                      onChange={setTuYears} display={`${tuYears}`} unit={tuYears === 1 ? "Year" : "Years"}
                      markers={["1 Yr","10 Yrs","20 Yrs","30 Yrs","40 Yrs"]}
                      tooltip="Total SIP investment period." />

                    {/* Comparison box */}
                    <div className="bg-[#f8fbfd] border border-[#deeef7] rounded-xl p-4">
                      <p className="text-xs font-bold text-[#00416a] mb-3 flex items-center gap-1.5">
                        <RefreshCw size={13} /> Step-Up vs Regular SIP Comparison
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Step-Up SIP", value: topupRes.maturityValue, highlight: true },
                          { label: "Regular SIP",  value: topupRes.regularSIPMaturity, highlight: false },
                        ].map(({ label, value, highlight }) => (
                          <div key={label} className={`rounded-xl p-3 text-center border ${highlight ? "bg-[#00416a]/5 border-[#00416a]/20" : "bg-gray-50 border-gray-200"}`}>
                            <p className={`text-[10px] font-bold uppercase tracking-wide mb-1 ${highlight ? "text-[#00416a]" : "text-gray-500"}`}>{label}</p>
                            <p className={`text-base font-extrabold ${highlight ? "text-[#00416a]" : "text-gray-500"}`}>{fmtC(value)}</p>
                          </div>
                        ))}
                      </div>
                      {topupRes.extraWealth > 0 && (
                        <div className="mt-3 flex items-center gap-2 p-2.5 bg-emerald-50 border border-emerald-100 rounded-lg">
                          <TrendingUp size={13} className="text-emerald-600 shrink-0" />
                          <p className="text-xs font-semibold text-emerald-700">
                            Step-Up SIP gives {fmtC(topupRes.extraWealth)} more than Regular SIP!
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </motion.div>

              {/* ── Bar Chart ── */}
              <motion.div
                key={`chart-${mode}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-sm font-bold text-[#00416a] flex items-center gap-2">
                    <BarChart3 size={15} /> Year-wise Growth Chart
                  </h3>
                  {mode === "returns" && (
                    <button
                      onClick={() => setShowInflation(p => !p)}
                      className={`flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all ${showInflation ? "bg-orange-50 border-orange-200 text-orange-700" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-orange-400" />
                      {showInflation ? "Inflation line ON" : "Show inflation line"}
                    </button>
                  )}
                </div>
                <BarChart data={activeData} showInflation={mode === "returns" && showInflation} />
              </motion.div>

              {/* ── Milestones (returns mode only) ── */}
              {mode === "returns" && milestones.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                    <Target size={15} /> Wealth Milestones
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {milestones.map(({ target, row }) => row && (
                      <div key={target} className="flex items-center gap-3 p-3 bg-[#f8fbfd] border border-[#deeef7] rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0">
                          <Target size={14} className="text-[#00416a]" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-[#00416a]">{fmtC(target)} Milestone</p>
                          <p className="text-[11px] text-gray-500">Achieved in Year {row.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* ─── RIGHT: Result Panel ─── */}
            <div className="space-y-5 lg:sticky lg:top-24">

              {/* Main Result Card */}
              <motion.div
                key={`res-${mode}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#00416a] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-[#00416a]/25"
              >
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      {mode === "returns" && (
                        <>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Maturity Value</p>
                          <p className="text-4xl font-extrabold mt-1">{fmtC(sipRes.maturityValue)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">after {years} {years === 1 ? "year" : "years"} · {years * 12} months</p>
                        </>
                      )}
                      {mode === "target" && (
                        <>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Required Monthly SIP</p>
                          <p className="text-4xl font-extrabold mt-1">{fmt(targetRes.requiredSIP)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">per month for {targetYrs} years</p>
                        </>
                      )}
                      {mode === "topup" && (
                        <>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Step-Up SIP Maturity</p>
                          <p className="text-4xl font-extrabold mt-1">{fmtC(topupRes.maturityValue)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">after {tuYears} years</p>
                        </>
                      )}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                      <TrendingUp size={22} className="text-sky-300" />
                    </div>
                  </div>

                  {/* Progress Bars */}
                  {mode === "returns" && (
                    <div className="space-y-2.5 mb-5">
                      {[
                        { label: "Total Invested", value: sipRes.totalInvested, pct: (sipRes.totalInvested / (sipRes.maturityValue || 1)) * 100, color: "bg-sky-400" },
                        { label: "Wealth Gained",  value: sipRes.wealthGained,  pct: (sipRes.wealthGained  / (sipRes.maturityValue || 1)) * 100, color: "bg-emerald-400" },
                      ].map(({ label, value, pct, color }) => (
                        <div key={label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/70 flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${color} shrink-0`} /> {label}
                            </span>
                            <span className="text-white font-semibold">{fmtC(value)}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${Math.min(100, pct)}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {mode === "topup" && (
                    <div className="space-y-2.5 mb-5">
                      {[
                        { label: "Total Invested",  value: topupRes.totalInvested, pct: (topupRes.totalInvested / (topupRes.maturityValue || 1)) * 100, color: "bg-sky-400" },
                        { label: "Wealth Gained",   value: topupRes.wealthGained,  pct: (topupRes.wealthGained  / (topupRes.maturityValue || 1)) * 100, color: "bg-emerald-400" },
                      ].map(({ label, value, pct, color }) => (
                        <div key={label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/70 flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${color} shrink-0`} /> {label}
                            </span>
                            <span className="text-white font-semibold">{fmtC(value)}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${Math.min(100, pct)}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Breakdown rows */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {mode === "returns" && <>
                      {[
                        { l: "Monthly SIP",        v: fmt(monthly) },
                        { l: "Total Invested",     v: fmt(sipRes.totalInvested) },
                        { l: "Wealth Gained",      v: fmt(sipRes.wealthGained) },
                      ].map(({ l, v }) => (
                        <div key={l} className="flex justify-between text-xs">
                          <span className="text-white/60">{l}</span>
                          <span className="text-white font-semibold">{v}</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                        <span className="text-white/80 font-bold">Maturity Value</span>
                        <span className="text-white font-extrabold">{fmtC(sipRes.maturityValue)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">Absolute Returns</span>
                        <span className="text-emerald-400 font-bold">{sipRes.absoluteReturns}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">Inflation-Adjusted Value</span>
                        <span className="text-orange-300 font-bold">{fmtC(sipRes.inflationAdjustedValue)}</span>
                      </div>
                    </>}

                    {mode === "target" && <>
                      {[
                        { l: "Target Corpus",    v: fmtC(targetAmt) },
                        { l: "Total Invested",   v: fmt(targetRes.totalInvested) },
                        { l: "Wealth Gained",    v: fmt(targetRes.wealthGained) },
                        { l: "Investment Period",v: `${targetYrs} Years` },
                      ].map(({ l, v }) => (
                        <div key={l} className="flex justify-between text-xs">
                          <span className="text-white/60">{l}</span>
                          <span className="text-white font-semibold">{v}</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                        <span className="text-white/80 font-bold">Required Monthly SIP</span>
                        <span className="text-white font-extrabold">{fmt(targetRes.requiredSIP)}</span>
                      </div>
                    </>}

                    {mode === "topup" && <>
                      {[
                        { l: "Starting SIP",      v: fmt(tuMonthly) },
                        { l: `SIP in Year ${tuYears}`, v: fmt(Math.round(tuMonthly * Math.pow(1 + tuStep / 100, tuYears - 1))) },
                        { l: "Total Invested",    v: fmtC(topupRes.totalInvested) },
                        { l: "Wealth Gained",     v: fmtC(topupRes.wealthGained) },
                      ].map(({ l, v }) => (
                        <div key={l} className="flex justify-between text-xs">
                          <span className="text-white/60">{l}</span>
                          <span className="text-white font-semibold">{v}</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                        <span className="text-white/80 font-bold">Maturity Value</span>
                        <span className="text-white font-extrabold">{fmtC(topupRes.maturityValue)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">Extra vs Regular SIP</span>
                        <span className="text-emerald-400 font-bold">+{fmtC(topupRes.extraWealth)}</span>
                      </div>
                    </>}
                  </div>

                  {/* Donut */}
                  {mode !== "target" && (
                    <div className="mt-5 flex items-center justify-center gap-5 border-t border-white/10 pt-5">
                      <Donut
                        invested={mode === "returns" ? sipRes.totalInvested : topupRes.totalInvested}
                        returns={mode === "returns"  ? sipRes.wealthGained  : topupRes.wealthGained}
                        size={100}
                      />
                      <div className="space-y-2.5 text-xs">
                        {[
                          { label: "Invested", value: mode === "returns" ? sipRes.totalInvested : topupRes.totalInvested, color: "bg-[#00416a] border-2 border-white/30" },
                          { label: "Returns",  value: mode === "returns" ? sipRes.wealthGained  : topupRes.wealthGained,  color: "bg-sky-400" },
                        ].map(({ label, value, color }) => (
                          <div key={label} className="flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${color} shrink-0`} />
                            <div>
                              <p className="text-white/60">{label}</p>
                              <p className="text-white font-bold">{fmtC(value)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* CTA Card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 space-y-3">
                <p className="text-sm font-bold text-[#00416a]">Need Expert SIP & Investment Advice?</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our CA team helps you select the right funds, plan ELSS for tax saving under 80C, compute capital gains, and file ITR with mutual fund transactions.
                </p>
                <button onClick={handleWA}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25d366] text-white text-sm font-bold hover:bg-[#1ebe5d] active:scale-[0.97] transition-all shadow-lg shadow-green-500/20">
                  <MessageCircle size={15} /> Share &amp; Get CA Advice
                </button>
                <Link href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00416a] text-white text-sm font-bold hover:bg-[#002b45] active:scale-[0.97] transition-all">
                  Free Consultation <ArrowRight size={14} />
                </Link>
              </div>

              {/* ELSS Tip */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                <BadgeCheck size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-blue-700">💡 ELSS — Best Tax-Saving SIP</p>
                  <p className="text-[11px] mt-0.5 leading-relaxed text-blue-600">
                    ELSS = Section 80C deduction (₹1.5L) + equity-like returns (12–15% CAGR) + shortest lock-in (3 years). Best SIP for dual benefit of wealth creation &amp; tax saving.
                  </p>
                </div>
              </div>

              {/* Inflation Note (returns only) */}
              {mode === "returns" && (
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-start gap-3">
                  <Info size={15} className="text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-orange-700">Real Value of Your Corpus</p>
                    <p className="text-[11px] mt-0.5 leading-relaxed text-orange-600">
                      At {inflation}% inflation, your {fmtC(sipRes.maturityValue)} maturity value has the purchasing power of{" "}
                      <strong>{fmtC(sipRes.inflationAdjustedValue)}</strong> in today's money after {years} years.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ YEAR-WISE TABLE ══════════ */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Growth Schedule
                </span>
                <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                  Year-wise SIP Growth Schedule
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar size={13} />
                <span>
                  {mode === "returns" ? years : mode === "target" ? targetYrs : tuYears} year projection
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-[#00416a] text-white text-xs font-bold uppercase tracking-wide px-4 py-3">
                <div className={`grid gap-2 ${mode === "returns" ? "grid-cols-5" : "grid-cols-4"}`}>
                  <span>Year</span>
                  <span className="text-right">Amount Invested</span>
                  <span className="text-right">Est. Returns</span>
                  {mode === "returns" && <span className="text-right text-orange-300">Infl.-Adjusted</span>}
                  <span className="text-right">Total Value</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-50">
                {tableRows.map((row, i) => {
                  const growthPct = row.invested > 0 ? ((row.returns / row.invested) * 100).toFixed(1) : "0";
                  return (
                    <div key={row.year}
                      className={`grid gap-2 px-4 py-3 text-sm hover:bg-[#00416a]/4 transition-colors ${mode === "returns" ? "grid-cols-5" : "grid-cols-4"} ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <span className="font-bold text-[#00416a]">Year {row.year}</span>
                      <span className="text-right font-semibold text-gray-600">{fmtC(row.invested)}</span>
                      <span className="text-right font-semibold text-sky-600">
                        {fmtC(row.returns)}
                        <span className="text-[10px] text-emerald-500 ml-1">+{growthPct}%</span>
                      </span>
                      {mode === "returns" && (
                        <span className="text-right font-semibold text-orange-500">{fmtC(row.inflationAdjusted ?? 0)}</span>
                      )}
                      <span className="text-right font-bold text-[#00416a]">{fmtC(row.corpus)}</span>
                    </div>
                  );
                })}
              </div>

              {activeData.length > 10 && (
                <div className="px-4 py-3 border-t border-gray-100 text-center">
                  <button onClick={() => setShowTable(p => !p)}
                    className="text-[#00416a] text-xs font-bold hover:underline transition">
                    {showTable ? "Show Less ↑" : `View All ${activeData.length} Years ↓`}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SIP COMPARISON TABLE ══════════ */}
      <section className="py-12 bg-[#f8fbfd] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Quick Reference
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-4">
                Power of Compounding — ₹10,000 SIP @ 12% p.a.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#00416a] text-white text-xs font-bold uppercase tracking-wide px-4 py-3">
                <div className="grid grid-cols-4 gap-2">
                  <span>Tenure</span>
                  <span className="text-right">Total Invested</span>
                  <span className="text-right">Wealth Gained</span>
                  <span className="text-right">Maturity Value</span>
                </div>
              </div>
              <div className="divide-y divide-gray-50">
                {[5,10,15,20,25,30,35,40].map((y, i) => {
                  const r = calcSIP(10000, 12, y);
                  return (
                    <div key={y}
                      className={`grid grid-cols-4 gap-2 px-4 py-3 text-sm hover:bg-[#00416a]/4 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <span className="font-bold text-[#00416a]">{y} Years</span>
                      <span className="text-right text-gray-600 font-semibold">{fmtC(r.totalInvested)}</span>
                      <span className="text-right text-sky-600 font-semibold">{fmtC(r.wealthGained)}</span>
                      <span className="text-right text-[#00416a] font-extrabold">{fmtC(r.maturityValue)}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-[10px] text-gray-400 px-4 py-2 border-t border-gray-100">
                *Illustrative only. Actual returns depend on fund performance and market conditions. Past performance is not indicative of future returns.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SEO CONTENT ══════════ */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Complete SIP Guide</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                SIP Investment Guide — Everything You Need to Know
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                A comprehensive guide to SIP investments — how SIP works, calculation formula, benefits, taxation, and strategies for maximising returns in India.
              </p>
            </motion.div>

            <div className="space-y-14">

              {/* Block 1 */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">How Does SIP Work? The Compounding Advantage</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    A <strong>Systematic Investment Plan (SIP)</strong> allows you to invest a fixed amount in a mutual fund scheme at regular intervals — typically monthly. Each SIP instalment purchases units of the fund at the prevailing NAV (Net Asset Value). The total number of units accumulated over time, multiplied by the final NAV, gives your maturity corpus.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    The real magic of SIP lies in <strong>rupee cost averaging</strong> combined with <strong>compounding</strong>. When NAV is low (market correction), your fixed SIP amount buys more units. When NAV is high, it buys fewer units. Over a full market cycle, this averaging reduces your effective purchase cost — called the average cost of acquisition.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The compounding effect is exponential: early SIP instalments earn returns for the longest period. A ₹10,000 SIP in month 1 of a 20-year SIP earns returns for 240 months; the last instalment earns for just 1 month. This time-weighted compounding is why SIP returns accelerate dramatically in the later years — the "hockey stick" growth curve you see in our bar chart above.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                    <div className="bg-[#00416a] px-5 py-3">
                      <p className="text-white font-bold text-sm">SIP Formula Explained</p>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-center">
                        <code className="text-xs text-[#00416a] font-mono font-bold">
                          FV = P × [(1+r)ⁿ − 1] / r × (1+r)
                        </code>
                      </div>
                      {[
                        ["FV", "Future Value — maturity corpus"],
                        ["P",  "Monthly SIP amount (₹)"],
                        ["r",  "Monthly rate = Annual Rate ÷ 12 ÷ 100"],
                        ["n",  "Total months = Years × 12"],
                        ["(1+r)", "Annuity due factor — SIP paid at start of month"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex gap-3 text-xs">
                          <span className="font-mono font-bold text-[#00416a] w-12 shrink-0">{k}</span>
                          <span className="text-gray-600">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Block 2 — Types */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">Types of SIP — Which One is Right for You?</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Regular SIP", icon: TrendingUp, color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100", iconColor: "text-blue-600",
                      desc: "Fixed monthly SIP amount, same date every month. Best for salaried individuals with stable income who want automated, disciplined investing without any manual effort." },
                    { title: "Step-Up / Top-Up SIP", icon: Layers, color: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-100", iconColor: "text-emerald-600",
                      desc: "SIP amount increases by a fixed % each year — typically aligned with annual salary hike (10–15%). Creates significantly higher corpus than regular SIP from same starting amount." },
                    { title: "Flexible SIP", icon: RefreshCw, color: "bg-violet-50 border-violet-100", iconBg: "bg-violet-100", iconColor: "text-violet-600",
                      desc: "SIP amount can be varied based on available cash flow. Suitable for freelancers, business owners, or anyone with variable monthly income who still wants to invest regularly." },
                    { title: "Trigger SIP", icon: Target, color: "bg-orange-50 border-orange-100", iconBg: "bg-orange-100", iconColor: "text-orange-600",
                      desc: "SIP instalment is triggered only when the market or NAV hits a pre-defined level. Advanced strategy for experienced investors who want to invest more during market corrections." },
                    { title: "Perpetual SIP", icon: Calendar, color: "bg-sky-50 border-sky-100", iconBg: "bg-sky-100", iconColor: "text-sky-600",
                      desc: "SIP with no end date — continues until you manually stop it. Ideal for long-term goals like retirement where you don't want to worry about renewing the SIP mandate periodically." },
                    { title: "ELSS SIP", icon: Shield, color: "bg-rose-50 border-rose-100", iconBg: "bg-rose-100", iconColor: "text-rose-600",
                      desc: "SIP in Equity Linked Savings Scheme — the only mutual fund with Section 80C tax benefit. Each instalment has 3-year lock-in. Combines tax saving + wealth creation in one instrument." },
                  ].map(({ title, icon: Icon, color, iconBg, iconColor, desc }) => (
                    <div key={title} className={`${color} border rounded-2xl p-4`}>
                      <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center mb-3`}>
                        <Icon size={16} className={iconColor} />
                      </div>
                      <p className="text-sm font-extrabold text-[#00416a] mb-2">{title}</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Block 3 — Tips */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-5">8 Proven Strategies to Maximise SIP Returns</h3>
                  <div className="space-y-3">
                    {[
                      { step: "01", title: "Start Early — Time is Your Biggest Asset", desc: "Starting a ₹5,000 SIP at age 25 vs. 35 can result in 2–3x higher corpus at retirement at the same rate — purely due to extra compounding years." },
                      { step: "02", title: "Increase SIP Every Year (Step-Up)", desc: "Match your SIP increment to your salary increment. A 10% annual step-up on a ₹5,000 SIP can build 60–80% more corpus than a regular SIP over 20 years." },
                      { step: "03", title: "Stay Invested Through Market Cycles", desc: "Never stop SIP during market corrections — this is when you accumulate maximum units at lowest prices. 'Bear markets are the friend of long-term SIP investors'." },
                      { step: "04", title: "Choose Direct Plans", desc: "Direct plan SIPs have no distributor commission — expense ratios are 0.5–1% lower. This seemingly small difference compounds to lakhs over 20 years." },
                      { step: "05", title: "Diversify Across Fund Categories", desc: "Run parallel SIPs in large-cap (stability), mid-cap (growth), and international funds (currency diversification) for optimal risk-adjusted returns." },
                      { step: "06", title: "Review Annually — Not Daily", desc: "Check SIP portfolio performance once a year against its benchmark and category peers. Avoid panic-stopping SIPs based on short-term market volatility." },
                      { step: "07", title: "Reinvest Dividends as Growth Option", desc: "Always choose Growth option (not IDCW) for SIPs — dividends in Growth option are reinvested automatically, accelerating compounding significantly." },
                      { step: "08", title: "Use Windfall for Lump Sum Top-Up", desc: "Whenever you receive a bonus, incentive, or inheritance, invest it as a lump sum in your existing SIP fund — this boosts corpus without increasing monthly commitment." },
                    ].map(({ step, title, desc }) => (
                      <div key={step} className="flex gap-3 p-3 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all">
                        <div className="w-8 h-8 rounded-lg bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">{step}</div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">{title}</p>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SIP Taxation Table */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-5">SIP Taxation — FY 2024-25</h3>
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden mb-4">
                    <div className="bg-emerald-600 px-5 py-3">
                      <p className="text-white font-bold text-sm">Equity SIP Capital Gains Tax (Budget 2024)</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {[
                        ["Holding Period", "< 1 Year", "> 1 Year"],
                        ["Tax Category",   "STCG", "LTCG"],
                        ["Tax Rate",       "20%",  "12.5%"],
                        ["Exemption Limit","—",    "₹1.25L/year"],
                        ["Indexation",    "No",   "No (removed)"],
                      ].map(([label, a, b], i) => (
                        <div key={label} className={`grid grid-cols-3 px-4 py-2.5 text-xs ${i === 0 ? "bg-gray-50 font-bold text-gray-600" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                          <span className={i === 0 ? "" : "text-gray-600 font-medium"}>{label}</span>
                          <span className={`text-center font-bold ${i === 0 ? "text-gray-600" : "text-orange-600"}`}>{a}</span>
                          <span className={`text-right font-bold ${i === 0 ? "text-gray-600" : "text-emerald-600"}`}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden mb-4">
                    <div className="bg-violet-600 px-5 py-3">
                      <p className="text-white font-bold text-sm">Debt Fund SIP Taxation (Post April 2023)</p>
                    </div>
                    <div className="p-4 text-sm text-gray-600 leading-relaxed">
                      <p>All gains from debt mutual fund SIPs — irrespective of holding period — are now <strong>taxed at income tax slab rates</strong>. Indexation benefit removed from April 2023. Debt SIP gains are added to total income and taxed accordingly.</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3">
                    <Info size={15} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amber-700">FIFO Method for SIP Redemption</p>
                      <p className="text-[11px] mt-1 leading-relaxed text-amber-600">
                        For equity SIPs, each instalment is treated as a separate purchase. Redemption follows FIFO (First In, First Out) — the oldest units are redeemed first. Each lot's holding period and gain is computed separately for STCG/LTCG classification. Our CA team handles all these computations for ITR filing.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ WHY TAXVIO ══════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Why Taxvio</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Why Use Taxvio's SIP Calculator?</h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Zap,      text: "Real-time results as you move sliders — maturity value, wealth gained, inflation-adjusted corpus all update instantly" },
                { icon: BarChart3,text: "Interactive SVG bar chart with inflation-adjusted overlay line — see exactly how your corpus grows year by year" },
                { icon: Target,   text: "3 calculators in one — SIP Returns, Target Amount (reverse SIP), and Step-Up SIP with annual increment comparison" },
                { icon: Calendar, text: "Wealth Milestones tracker — automatically marks when your corpus crosses ₹10L, ₹50L, ₹1Cr, ₹5Cr targets" },
                { icon: RefreshCw,text: "Step-Up vs Regular SIP comparison — instantly see how much extra corpus the annual increment creates" },
                { icon: Shield,   text: "Uses standard Future Value of Annuity Due formula — identical to results from AMC official SIP calculators" },
                { icon: BadgeCheck,text: "CA-backed guidance on ELSS selection, capital gains ITR filing, CAMS/KFintech statement computation" },
                { icon: FileText, text: "100% free, no login required, no data storage — calculate unlimited SIP scenarios completely privately" },
              ].map(({ icon: Icon, text }) => (
                <motion.li key={text} variants={fadeUp}
                  className="flex items-start gap-3.5 p-4 bg-white border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                    <Icon size={16} className="text-[#00416a] group-hover:text-white transition-all" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium leading-relaxed mt-0.5">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">SIP Calculator — Frequently Asked Questions</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((f, i) => (
                <motion.div key={i} variants={fadeUp}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${faqOpen === i ? "border-[#00416a]/30 shadow-md" : "border-gray-200"}`}
                  itemScope itemType="https://schema.org/Question">
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-start gap-4 hover:bg-gray-50 transition"
                    aria-expanded={faqOpen === i}>
                    <span className="text-sm font-semibold text-gray-800 leading-snug" itemProp="name">{f.q}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${faqOpen === i ? "bg-[#00416a] rotate-180" : "bg-gray-100"}`}>
                      <ChevronDown size={15} className={faqOpen === i ? "text-white" : "text-gray-500"} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                        className="overflow-hidden" itemScope itemType="https://schema.org/Answer">
                        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4" itemProp="text">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ RELATED TOOLS ══════════ */}
      <section className="py-14 bg-[#f8fbfd] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-[#00416a] mb-6">
              Related Tools &amp; Services
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Mutual Fund Calculator", desc: "SIP, Lump Sum, SWP & Step-Up", href: "/tools/mutual-fund-calculator", icon: TrendingUp },
                { title: "EMI Calculator",          desc: "Home, Car & Personal Loan",     href: "/tools/emi-calculator",          icon: Calculator },
                { title: "Income Tax Calculator",   desc: "FY 2024-25 old & new regime",  href: "/tools/income-tax-calculator",   icon: PieChart },
                { title: "ITR Filing",              desc: "Capital gains ITR from ₹999",  href: "/serviceslist/income-tax/itr-salaried", icon: FileText },
              ].map(({ title, desc, href, icon: Icon }) => (
                <motion.div key={title} variants={fadeUp}>
                  <Link href={href}
                    className="group flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#00416a]/30 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                      <Icon size={16} className="text-[#00416a] group-hover:text-white transition-all" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition truncate">{title}</p>
                      <p className="text-xs text-gray-400 truncate">{desc}</p>
                    </div>
                    <ArrowRight size={13} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Zap size={11} className="text-sky-300" /> CA-Assisted SIP &amp; Tax Planning
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Ready to Start Your SIP Journey?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Taxvio's CA team helps you choose the right mutual funds, plan ELSS for maximum 80C benefit, compute SIP capital gains, and file your ITR accurately — all from ₹499.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button onClick={handleWA}
                  className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg active:scale-[0.97] transition-all">
                  <MessageCircle size={15} /> WhatsApp Us
                </button>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#00416a] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all">
                  Free Consultation <ArrowRight size={14} />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all">
                  <Phone size={14} /> Call Now
                </a>
              </div>
              <p className="mt-6 text-white/40 text-xs">
                ELSS Tax Saving · SIP Capital Gains ITR · Fund Selection · Retirement Planning · 100% Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}