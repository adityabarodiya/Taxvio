// app/tools/mutual-fund-calculator/client.tsx
"use client";

import Link from "next/link";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  TrendingUp,
  ArrowRight,
  ChevronDown,
  Phone,
  MessageCircle,
  FileText,
  Shield,
  BadgeCheck,
  Zap,
  IndianRupee,
  RefreshCw,
  Info,
  BarChart3,
  PieChart,
  Wallet,
  Target,
  Calculator,
  Layers,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import Footar from "@/components/Footar";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE = "918937980366";

// ─── Types ────────────────────────────────────────────────────────────────────
type CalcType = "sip" | "lumpsum" | "swp" | "stepup";

interface YearRow {
  year: number;
  invested: number;
  returns: number;
  corpus: number;
}

interface SIPResult {
  totalInvested: number;
  wealthGained: number;
  maturityValue: number;
  yearlyData: YearRow[];
}

interface LumpSumResult {
  totalInvested: number;
  wealthGained: number;
  maturityValue: number;
  yearlyData: YearRow[];
}

interface SWPResult {
  totalInvested: number;
  totalWithdrawn: number;
  remainingCorpus: number;
  yearlyData: { year: number; withdrawal: number; balance: number }[];
}

interface StepUpResult {
  totalInvested: number;
  wealthGained: number;
  maturityValue: number;
  yearlyData: YearRow[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

function fmtCompact(n: number): string {
  if (n >= 10_000_000) return `₹${(n / 10_000_000).toFixed(2)} Cr`;
  if (n >= 100_000) return `₹${(n / 100_000).toFixed(2)} L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}K`;
  return fmt(n);
}

// ─── Calculation Functions ────────────────────────────────────────────────────

function calcSIP(
  monthlyAmount: number,
  annualRate: number,
  years: number
): SIPResult {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const maturityValue =
    monthlyAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const totalInvested = monthlyAmount * n;
  const wealthGained = maturityValue - totalInvested;

  const yearlyData: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    const months = y * 12;
    const corpus =
      monthlyAmount * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    const invested = monthlyAmount * months;
    yearlyData.push({
      year: y,
      invested: Math.round(invested),
      returns: Math.round(corpus - invested),
      corpus: Math.round(corpus),
    });
  }

  return {
    totalInvested: Math.round(totalInvested),
    wealthGained: Math.round(wealthGained),
    maturityValue: Math.round(maturityValue),
    yearlyData,
  };
}

function calcLumpSum(
  principal: number,
  annualRate: number,
  years: number
): LumpSumResult {
  const yearlyData: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    const corpus = principal * Math.pow(1 + annualRate / 100, y);
    yearlyData.push({
      year: y,
      invested: principal,
      returns: Math.round(corpus - principal),
      corpus: Math.round(corpus),
    });
  }
  const maturityValue = principal * Math.pow(1 + annualRate / 100, years);
  return {
    totalInvested: principal,
    wealthGained: Math.round(maturityValue - principal),
    maturityValue: Math.round(maturityValue),
    yearlyData,
  };
}

function calcSWP(
  corpus: number,
  monthlyWithdrawal: number,
  annualRate: number,
  years: number
): SWPResult {
  const r = annualRate / 100 / 12;
  let balance = corpus;
  const yearlyData: { year: number; withdrawal: number; balance: number }[] =
    [];

  for (let y = 1; y <= years; y++) {
    let yearWithdrawn = 0;
    for (let m = 0; m < 12; m++) {
      if (balance <= 0) break;
      balance = balance * (1 + r) - monthlyWithdrawal;
      yearWithdrawn += monthlyWithdrawal;
    }
    yearlyData.push({
      year: y,
      withdrawal: Math.round(yearWithdrawn),
      balance: Math.round(Math.max(balance, 0)),
    });
    if (balance <= 0) break;
  }

  const totalWithdrawn = yearlyData.reduce((s, r) => s + r.withdrawal, 0);

  return {
    totalInvested: corpus,
    totalWithdrawn: Math.round(totalWithdrawn),
    remainingCorpus: Math.round(Math.max(balance, 0)),
    yearlyData,
  };
}

function calcStepUpSIP(
  monthlyAmount: number,
  annualRate: number,
  years: number,
  stepUpPct: number
): StepUpResult {
  const r = annualRate / 100 / 12;
  let corpus = 0;
  let totalInvested = 0;
  const yearlyData: YearRow[] = [];
  let currentMonthly = monthlyAmount;

  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      corpus = corpus * (1 + r) + currentMonthly;
      totalInvested += currentMonthly;
    }
    yearlyData.push({
      year: y,
      invested: Math.round(totalInvested),
      returns: Math.round(corpus - totalInvested),
      corpus: Math.round(corpus),
    });
    currentMonthly = currentMonthly * (1 + stepUpPct / 100);
  }

  return {
    totalInvested: Math.round(totalInvested),
    wealthGained: Math.round(corpus - totalInvested),
    maturityValue: Math.round(corpus),
    yearlyData,
  };
}

// ─── SVG Bar Chart ────────────────────────────────────────────────────────────
function BarChartSVG({ data }: { data: YearRow[] }) {
  const maxCorpus = Math.max(...data.map((d) => d.corpus), 1);
  const displayData =
    data.length > 15 ? data.filter((_, i) => i % Math.ceil(data.length / 15) === 0 || i === data.length - 1) : data;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${Math.max(displayData.length * 40, 400)} 200`}
        className="w-full"
        preserveAspectRatio="none"
        aria-label="Growth chart"
      >
        {displayData.map((d, i) => {
          const barWidth = 28;
          const gap = 12;
          const totalBar = barWidth + gap;
          const x = i * totalBar + gap / 2;
          const investedH = (d.invested / maxCorpus) * 160;
          const corpusH = (d.corpus / maxCorpus) * 160;
          const returnsH = corpusH - investedH;

          return (
            <g key={d.year}>
              {/* Returns (top portion) */}
              <rect
                x={x}
                y={200 - corpusH - 30}
                width={barWidth}
                height={Math.max(returnsH, 0)}
                fill="#0ea5e9"
                rx="3"
                opacity="0.85"
              />
              {/* Invested (bottom portion) */}
              <rect
                x={x}
                y={200 - investedH - 30}
                width={barWidth}
                height={investedH}
                fill="#00416a"
                rx="3"
              />
              {/* Year label */}
              <text
                x={x + barWidth / 2}
                y={195}
                textAnchor="middle"
                fontSize="8"
                fill="#9ca3af"
                fontWeight="600"
              >
                Y{d.year}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="flex items-center justify-center gap-5 mt-2">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-[#00416a]" />
          <span className="text-[10px] text-gray-500 font-medium">Invested</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-sky-400" />
          <span className="text-[10px] text-gray-500 font-medium">Returns</span>
        </div>
      </div>
    </div>
  );
}

// ─── Donut Chart ──────────────────────────────────────────────────────────────
function DonutChart({
  invested,
  returns,
  size = 140,
}: {
  invested: number;
  returns: number;
  size?: number;
}) {
  const total = invested + returns || 1;
  const R = size * 0.38;
  const cx = size / 2;
  const cy = size / 2;
  const circ = 2 * Math.PI * R;
  const investedPct = (invested / total) * 100;
  const returnsPct = (returns / total) * 100;
  const investedDash = (investedPct / 100) * circ;
  const returnsDash = (returnsPct / 100) * circ;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label="Invested vs Returns">
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#e2e8f0" strokeWidth={size * 0.12} />
      {/* Invested */}
      <circle
        cx={cx} cy={cy} r={R}
        fill="none"
        stroke="#00416a"
        strokeWidth={size * 0.12}
        strokeDasharray={`${Math.max(investedDash - 2, 0)} ${circ}`}
        strokeDashoffset={0}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      {/* Returns */}
      <circle
        cx={cx} cy={cy} r={R}
        fill="none"
        stroke="#0ea5e9"
        strokeWidth={size * 0.12}
        strokeDasharray={`${Math.max(returnsDash - 2, 0)} ${circ}`}
        strokeDashoffset={-investedDash}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize={size * 0.09} fill="#374151" fontWeight="800">
        {returnsPct.toFixed(0)}%
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize={size * 0.07} fill="#9ca3af">
        returns
      </text>
    </svg>
  );
}

// ─── Slider Input Row ─────────────────────────────────────────────────────────
function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  markers,
  tooltip,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  markers: string[];
  tooltip?: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            {label}
          </label>
          {tooltip && (
            <div className="group relative">
              <Info size={12} className="text-gray-300 cursor-help" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-gray-800 text-white text-[10px] rounded-lg p-2.5 opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 leading-relaxed shadow-xl">
                {tooltip}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 bg-[#00416a]/8 border border-[#00416a]/20 rounded-xl px-3 py-1.5">
          {prefix && <span className="text-[#00416a] font-bold text-sm">{prefix}</span>}
          <span className="text-[#00416a] font-extrabold text-sm">{display}</span>
          {suffix && <span className="text-[#00416a] font-bold text-sm">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#00416a] h-1.5 cursor-pointer"
        aria-label={label}
      />
      <div className="flex justify-between text-[10px] text-gray-400">
        {markers.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  );
}

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is a SIP and how does it work?",
    a: "A Systematic Investment Plan (SIP) is a method of investing a fixed amount in a mutual fund scheme at regular intervals — typically monthly. Each SIP instalment buys units of the mutual fund at the prevailing NAV (Net Asset Value). The key advantage of SIP is rupee cost averaging: when NAV is low, you buy more units; when NAV is high, you buy fewer units — averaging out your purchase cost over time. SIPs also benefit from the power of compounding, where returns generated in earlier periods earn returns in subsequent periods.",
  },
  {
    q: "What is the difference between SIP and Lump Sum investment?",
    a: "In a SIP, you invest a fixed amount regularly (monthly/quarterly) over time, making it suitable for salaried individuals who invest from regular income. In a lump sum investment, you invest a large one-time amount. Lump sum investments perform better when markets are at low valuations, while SIPs are better for investors who cannot time the market and want to average out volatility. Our calculator lets you compute returns for both methods so you can compare outcomes for the same expected return and tenure.",
  },
  {
    q: "What is the expected rate of return for mutual funds?",
    a: "Historical average returns vary by fund category: Large-cap equity funds have delivered 10–12% CAGR over 10+ years; Mid/small-cap funds 12–18% CAGR (with higher volatility); Debt/liquid funds 5–8%; Hybrid/balanced funds 9–12%. These are historical averages and not guaranteed future returns. For conservative planning, financial advisors in India typically use 10–12% p.a. for equity SIPs and 6–7% for debt funds. Always use a realistic rate that matches your fund category.",
  },
  {
    q: "What is SWP (Systematic Withdrawal Plan)?",
    a: "A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount from your mutual fund corpus at regular intervals — typically monthly. It is commonly used by retirees to create a steady income stream from their accumulated corpus. The remaining corpus continues to earn returns, potentially extending the longevity of the fund. Our SWP calculator shows how long your corpus lasts given a monthly withdrawal amount and expected return rate.",
  },
  {
    q: "What is a Step-Up SIP and why is it beneficial?",
    a: "A Step-Up SIP (also called Top-Up SIP) automatically increases your SIP amount by a fixed percentage each year — aligned with salary increments. For example, if you start with a ₹5,000 SIP and step up 10% annually, your SIP becomes ₹5,500 in Year 2, ₹6,050 in Year 3, and so on. This dramatically increases your final corpus — in some cases by 40–60% more than a regular SIP — because you invest more in later years when compounding is at its strongest.",
  },
  {
    q: "Are mutual fund returns taxable in India?",
    a: "Yes. For equity mutual funds (held > 1 year): Long Term Capital Gains (LTCG) above ₹1 lakh per year are taxed at 12.5% (from FY 2024-25 Budget). Short Term Capital Gains (STCG, held < 1 year) are taxed at 20%. For debt mutual funds (post April 2023): gains are added to income and taxed at slab rates regardless of holding period. ELSS (Equity Linked Savings Scheme) has a 3-year lock-in and qualifies for Section 80C deduction up to ₹1.5 lakh. Taxvio's CA team helps you optimize mutual fund taxation and file ITR with capital gains.",
  },
  {
    q: "What is XIRR and how is it different from CAGR?",
    a: "CAGR (Compound Annual Growth Rate) measures returns for a single lump sum investment over time. XIRR (Extended Internal Rate of Return) is used for SIP investments where multiple cash flows happen at different dates — giving a more accurate measure of actual returns. A mutual fund showing 15% XIRR means your SIP investments have grown at an effective annual rate of 15%, accounting for the timing of each instalment. Our SIP calculator uses the standard SIP future value formula which closely approximates XIRR for regular monthly investments.",
  },
];

// ─── CALC CONFIG ──────────────────────────────────────────────────────────────
const CALC_TABS: { type: CalcType; label: string; icon: React.ElementType; desc: string }[] = [
  { type: "sip", label: "SIP", icon: TrendingUp, desc: "Monthly investment" },
  { type: "lumpsum", label: "Lump Sum", icon: Wallet, desc: "One-time investment" },
  { type: "swp", label: "SWP", icon: ArrowUpRight, desc: "Monthly withdrawal" },
  { type: "stepup", label: "Step-Up SIP", icon: Layers, desc: "Increasing SIP" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MutualFundClient() {
  const [calcType, setCalcType] = useState<CalcType>("sip");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showFullTable, setShowFullTable] = useState(false);

  // SIP state
  const [sipMonthly, setSipMonthly] = useState(10000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(15);

  // Lump Sum state
  const [lsAmount, setLsAmount] = useState(500000);
  const [lsRate, setLsRate] = useState(12);
  const [lsYears, setLsYears] = useState(10);

  // SWP state
  const [swpCorpus, setSwpCorpus] = useState(5000000);
  const [swpMonthly, setSwpMonthly] = useState(30000);
  const [swpRate, setSwpRate] = useState(8);
  const [swpYears, setSwpYears] = useState(20);

  // Step-Up SIP state
  const [suMonthly, setSuMonthly] = useState(5000);
  const [suRate, setSuRate] = useState(12);
  const [suYears, setSuYears] = useState(20);
  const [suStepUp, setSuStepUp] = useState(10);

  const handleTabChange = useCallback((type: CalcType) => {
    setCalcType(type);
    setShowFullTable(false);
  }, []);

  // Results
  const sipResult = useMemo(
    () => calcSIP(sipMonthly, sipRate, sipYears),
    [sipMonthly, sipRate, sipYears]
  );
  const lsResult = useMemo(
    () => calcLumpSum(lsAmount, lsRate, lsYears),
    [lsAmount, lsRate, lsYears]
  );
  const swpResult = useMemo(
    () => calcSWP(swpCorpus, swpMonthly, swpRate, swpYears),
    [swpCorpus, swpMonthly, swpRate, swpYears]
  );
  const suResult = useMemo(
    () => calcStepUpSIP(suMonthly, suRate, suYears, suStepUp),
    [suMonthly, suRate, suYears, suStepUp]
  );

  // Regular SIP for comparison in step-up tab
  const regularSipForComparison = useMemo(
    () => calcSIP(suMonthly, suRate, suYears),
    [suMonthly, suRate, suYears]
  );

  const handleWhatsApp = () => {
    let msg = "";
    if (calcType === "sip")
      msg = `Hello Taxvio! I used your SIP Calculator. Monthly SIP: ${fmt(sipMonthly)}, Rate: ${sipRate}%, Tenure: ${sipYears} yrs. Maturity: ${fmtCompact(sipResult.maturityValue)}. I need help with mutual fund planning.`;
    else if (calcType === "lumpsum")
      msg = `Hello Taxvio! I used your Lump Sum Calculator. Amount: ${fmt(lsAmount)}, Rate: ${lsRate}%, Tenure: ${lsYears} yrs. Maturity: ${fmtCompact(lsResult.maturityValue)}. I need help with mutual fund planning.`;
    else if (calcType === "swp")
      msg = `Hello Taxvio! I used your SWP Calculator. Corpus: ${fmt(swpCorpus)}, Monthly withdrawal: ${fmt(swpMonthly)}, Rate: ${swpRate}%. I need help planning retirement income.`;
    else
      msg = `Hello Taxvio! I used your Step-Up SIP Calculator. Monthly SIP: ${fmt(suMonthly)}, Step-Up: ${suStepUp}%, Rate: ${suRate}%, Tenure: ${suYears} yrs. Maturity: ${fmtCompact(suResult.maturityValue)}. I need help.`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  // Active result for display
  const activeResult =
    calcType === "sip"
      ? sipResult
      : calcType === "lumpsum"
      ? lsResult
      : calcType === "stepup"
      ? suResult
      : null;

  const tableData =
    calcType === "sip"
      ? sipResult.yearlyData
      : calcType === "lumpsum"
      ? lsResult.yearlyData
      : calcType === "stepup"
      ? suResult.yearlyData
      : [];

  const displayedTable = showFullTable ? tableData : tableData.slice(0, 10);

  return (
    <main className="min-h-screen bg-[#f8fbfd] font-sans text-gray-800">

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-[#00416a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.nav
              variants={fadeUp}
              className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-white transition">Financial Tools</Link>
              <span>/</span>
              <span className="text-white/80">Mutual Fund Calculator</span>
            </motion.nav>

            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide"
            >
              <TrendingUp size={12} className="text-sky-300" />
              SIP · Lump Sum · SWP · Step-Up SIP · Free Tool
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Mutual Fund Calculator
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                SIP, Lump Sum, SWP &amp; Step-Up SIP
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-white/70 text-base md:text-lg leading-relaxed"
            >
              Calculate your mutual fund investment returns instantly. Plan your
              wealth with year-wise growth schedules, compounding projections,
              and real-time charts — completely free.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap justify-center gap-2"
            >
              {[
                { icon: Zap, label: "Real-Time Results" },
                { icon: BarChart3, label: "Year-wise Schedule" },
                { icon: Target, label: "Goal Planning" },
                { icon: Shield, label: "100% Accurate" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <Icon size={11} className="text-sky-300" />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
          <path
            d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
            fill="#f8fbfd"
          />
        </svg>
      </section>

      {/* ══════════ CALCULATOR SECTION ══════════ */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* ── Tab Bar ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-7"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-2xl mx-auto">
              {CALC_TABS.map(({ type, label, icon: Icon, desc }) => (
                <button
                  key={type}
                  onClick={() => handleTabChange(type)}
                  className={`py-3 px-3 rounded-xl text-left transition-all duration-200 ${
                    calcType === type
                      ? "bg-[#00416a] text-white shadow-lg shadow-[#00416a]/20"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <Icon
                    size={15}
                    className={`mb-1 ${calcType === type ? "text-sky-300" : "text-gray-400"}`}
                  />
                  <p className={`text-xs font-bold leading-tight ${calcType === type ? "text-white" : "text-gray-800"}`}>
                    {label}
                  </p>
                  <p className={`text-[10px] mt-0.5 ${calcType === type ? "text-white/60" : "text-gray-400"}`}>
                    {desc}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">

            {/* ── LEFT — INPUTS ── */}
            <div className="space-y-5">
              <motion.div
                key={calcType}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-6"
              >
                {/* ── SIP ── */}
                {calcType === "sip" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <TrendingUp size={17} />
                      SIP — Systematic Investment Plan
                    </h2>
                    <SliderRow
                      label="Monthly SIP Amount"
                      value={sipMonthly}
                      min={500}
                      max={200000}
                      step={500}
                      onChange={setSipMonthly}
                      display={fmtCompact(sipMonthly).replace("₹", "")}
                      markers={["₹500", "₹50K", "₹1L", "₹1.5L", "₹2L"]}
                      prefix="₹"
                      tooltip="Fixed amount you invest every month in the mutual fund scheme."
                    />
                    <SliderRow
                      label="Expected Annual Return"
                      value={sipRate}
                      min={1}
                      max={30}
                      step={0.5}
                      onChange={setSipRate}
                      display={`${sipRate}%`}
                      markers={["1%", "8%", "15%", "22%", "30%"]}
                      tooltip="Expected annual return from your mutual fund. Historical equity fund CAGR: 10–15% p.a."
                    />
                    <SliderRow
                      label="Investment Duration"
                      value={sipYears}
                      min={1}
                      max={40}
                      step={1}
                      onChange={setSipYears}
                      display={`${sipYears}`}
                      suffix={sipYears === 1 ? " Year" : " Years"}
                      markers={["1 Yr", "10 Yrs", "20 Yrs", "30 Yrs", "40 Yrs"]}
                      tooltip="Total period for which you want to continue the SIP."
                    />
                    <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3.5">
                      <Info size={15} className="text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-700 leading-relaxed">
                        ELSS SIP investments up to{" "}
                        <strong>₹1,50,000/year</strong> qualify for Section 80C
                        deduction — saving up to ₹46,800 in tax annually at 30%
                        slab.
                      </p>
                    </div>
                  </>
                )}

                {/* ── LUMP SUM ── */}
                {calcType === "lumpsum" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <Wallet size={17} />
                      Lump Sum — One-Time Investment
                    </h2>
                    <SliderRow
                      label="One-Time Investment Amount"
                      value={lsAmount}
                      min={5000}
                      max={50000000}
                      step={5000}
                      onChange={setLsAmount}
                      display={fmtCompact(lsAmount).replace("₹", "")}
                      markers={["₹5K", "₹12.5L", "₹25L", "₹37.5L", "₹5Cr"]}
                      prefix="₹"
                      tooltip="One-time lump sum amount to invest in a mutual fund scheme."
                    />
                    <SliderRow
                      label="Expected Annual Return (CAGR)"
                      value={lsRate}
                      min={1}
                      max={30}
                      step={0.5}
                      onChange={setLsRate}
                      display={`${lsRate}%`}
                      markers={["1%", "8%", "15%", "22%", "30%"]}
                      tooltip="Expected Compound Annual Growth Rate (CAGR). Large-cap funds: 10–12%; Mid-cap: 12–18%."
                    />
                    <SliderRow
                      label="Investment Duration"
                      value={lsYears}
                      min={1}
                      max={40}
                      step={1}
                      onChange={setLsYears}
                      display={`${lsYears}`}
                      suffix={lsYears === 1 ? " Year" : " Years"}
                      markers={["1 Yr", "10 Yrs", "20 Yrs", "30 Yrs", "40 Yrs"]}
                      tooltip="Total investment holding period for the lump sum."
                    />
                    <div className="flex gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3.5">
                      <Info size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-emerald-700 leading-relaxed">
                        Lump sum investments work best when markets are at low valuations. Consider investing in tranches (Systematic Transfer Plan) to reduce timing risk.
                      </p>
                    </div>
                  </>
                )}

                {/* ── SWP ── */}
                {calcType === "swp" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <ArrowUpRight size={17} />
                      SWP — Systematic Withdrawal Plan
                    </h2>
                    <SliderRow
                      label="Initial Corpus (Investment)"
                      value={swpCorpus}
                      min={100000}
                      max={100000000}
                      step={100000}
                      onChange={setSwpCorpus}
                      display={fmtCompact(swpCorpus).replace("₹", "")}
                      markers={["₹1L", "₹25L", "₹50L", "₹75L", "₹10Cr"]}
                      prefix="₹"
                      tooltip="Your accumulated corpus from which you want to start monthly withdrawals."
                    />
                    <SliderRow
                      label="Monthly Withdrawal Amount"
                      value={swpMonthly}
                      min={1000}
                      max={500000}
                      step={1000}
                      onChange={setSwpMonthly}
                      display={fmtCompact(swpMonthly).replace("₹", "")}
                      markers={["₹1K", "₹1.25L", "₹2.5L", "₹3.75L", "₹5L"]}
                      prefix="₹"
                      tooltip="Fixed monthly amount you want to withdraw from your mutual fund corpus."
                    />
                    <SliderRow
                      label="Expected Return on Corpus"
                      value={swpRate}
                      min={1}
                      max={20}
                      step={0.5}
                      onChange={setSwpRate}
                      display={`${swpRate}%`}
                      markers={["1%", "5%", "10%", "15%", "20%"]}
                      tooltip="Annual return your remaining corpus earns while you withdraw. Conservative: 6–8% for hybrid/debt funds."
                    />
                    <SliderRow
                      label="Withdrawal Period"
                      value={swpYears}
                      min={1}
                      max={40}
                      step={1}
                      onChange={setSwpYears}
                      display={`${swpYears}`}
                      suffix={swpYears === 1 ? " Year" : " Years"}
                      markers={["1 Yr", "10 Yrs", "20 Yrs", "30 Yrs", "40 Yrs"]}
                      tooltip="How long you plan to withdraw from the corpus."
                    />
                    <div className="flex gap-3 bg-violet-50 border border-violet-100 rounded-xl p-3.5">
                      <Info size={15} className="text-violet-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-violet-700 leading-relaxed">
                        <strong>Tip:</strong> Ensure monthly withdrawal is less than monthly returns on corpus to preserve capital. Monthly return = Corpus × Rate / 12.
                      </p>
                    </div>
                  </>
                )}

                {/* ── STEP-UP SIP ── */}
                {calcType === "stepup" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <Layers size={17} />
                      Step-Up SIP — Annual Increment
                    </h2>
                    <SliderRow
                      label="Initial Monthly SIP"
                      value={suMonthly}
                      min={500}
                      max={200000}
                      step={500}
                      onChange={setSuMonthly}
                      display={fmtCompact(suMonthly).replace("₹", "")}
                      markers={["₹500", "₹50K", "₹1L", "₹1.5L", "₹2L"]}
                      prefix="₹"
                      tooltip="Your starting monthly SIP amount in Year 1."
                    />
                    <SliderRow
                      label="Annual Step-Up Rate"
                      value={suStepUp}
                      min={1}
                      max={50}
                      step={1}
                      onChange={setSuStepUp}
                      display={`${suStepUp}%`}
                      markers={["1%", "12%", "25%", "37%", "50%"]}
                      tooltip="Percentage by which you increase your SIP amount every year. Typically aligned with annual salary hike."
                    />
                    <SliderRow
                      label="Expected Annual Return"
                      value={suRate}
                      min={1}
                      max={30}
                      step={0.5}
                      onChange={setSuRate}
                      display={`${suRate}%`}
                      markers={["1%", "8%", "15%", "22%", "30%"]}
                      tooltip="Expected annual return from your mutual fund."
                    />
                    <SliderRow
                      label="Investment Duration"
                      value={suYears}
                      min={1}
                      max={40}
                      step={1}
                      onChange={setSuYears}
                      display={`${suYears}`}
                      suffix={suYears === 1 ? " Year" : " Years"}
                      markers={["1 Yr", "10 Yrs", "20 Yrs", "30 Yrs", "40 Yrs"]}
                      tooltip="Total period of Step-Up SIP investment."
                    />

                    {/* Step-Up vs Regular comparison */}
                    <div className="bg-[#f8fbfd] border border-[#deeef7] rounded-xl p-4">
                      <p className="text-xs font-bold text-[#00416a] mb-3 flex items-center gap-1.5">
                        <RefreshCw size={13} /> Step-Up vs Regular SIP Comparison
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#00416a]/5 border border-[#00416a]/15 rounded-xl p-3 text-center">
                          <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide mb-1">
                            Step-Up SIP
                          </p>
                          <p className="text-base font-extrabold text-[#00416a]">
                            {fmtCompact(suResult.maturityValue)}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">Maturity Value</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center">
                          <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide mb-1">
                            Regular SIP
                          </p>
                          <p className="text-base font-extrabold text-gray-600">
                            {fmtCompact(regularSipForComparison.maturityValue)}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">Maturity Value</p>
                        </div>
                      </div>
                      {suResult.maturityValue > regularSipForComparison.maturityValue && (
                        <div className="mt-3 flex items-center gap-2 p-2.5 bg-emerald-50 border border-emerald-100 rounded-lg">
                          <TrendingUp size={13} className="text-emerald-600 shrink-0" />
                          <p className="text-xs font-semibold text-emerald-700">
                            Step-Up SIP gives{" "}
                            {fmtCompact(
                              suResult.maturityValue - regularSipForComparison.maturityValue
                            )}{" "}
                            more than Regular SIP!
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </motion.div>

              {/* ── Bar Chart ── */}
              {calcType !== "swp" && activeResult && activeResult.yearlyData.length > 0 && (
                <motion.div
                  key={`chart-${calcType}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
                >
                  <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                    <BarChart3 size={15} />
                    Year-wise Growth Chart
                  </h3>
                  <BarChartSVG data={activeResult.yearlyData} />
                </motion.div>
              )}

              {/* ── SWP Balance Chart ── */}
              {calcType === "swp" && (
                <motion.div
                  key="swp-chart"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
                >
                  <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                    <BarChart3 size={15} />
                    Corpus Balance Over Time
                  </h3>
                  <div className="w-full overflow-x-auto">
                    <svg viewBox={`0 0 ${Math.max(swpResult.yearlyData.length * 40, 300)} 180`} className="w-full" preserveAspectRatio="none">
                      {swpResult.yearlyData.map((d, i) => {
                        const maxBal = swpCorpus;
                        const barW = 28;
                        const gap = 12;
                        const x = i * (barW + gap) + gap / 2;
                        const h = Math.max((d.balance / maxBal) * 140, 2);
                        return (
                          <g key={d.year}>
                            <rect x={x} y={150 - h} width={barW} height={h} fill="#00416a" rx="3" opacity={0.7 + (d.balance / maxBal) * 0.3} />
                            <text x={x + barW / 2} y={170} textAnchor="middle" fontSize="7" fill="#9ca3af" fontWeight="600">Y{d.year}</text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    Corpus balance decreasing year by year as withdrawals are made
                  </p>
                </motion.div>
              )}
            </div>

            {/* ── RIGHT — RESULT PANEL ── */}
            <div className="space-y-5 lg:sticky lg:top-24">

              {/* Main Result Card */}
              <motion.div
                key={`result-${calcType}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="bg-[#00416a] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-[#00416a]/25"
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }}
                />
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      {calcType === "sip" && (
                        <>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Maturity Value</p>
                          <p className="text-4xl font-extrabold mt-1">{fmtCompact(sipResult.maturityValue)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">after {sipYears} years</p>
                        </>
                      )}
                      {calcType === "lumpsum" && (
                        <>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Maturity Value</p>
                          <p className="text-4xl font-extrabold mt-1">{fmtCompact(lsResult.maturityValue)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">after {lsYears} years</p>
                        </>
                      )}
                      {calcType === "swp" && (
                        <>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Total Withdrawn</p>
                          <p className="text-4xl font-extrabold mt-1">{fmtCompact(swpResult.totalWithdrawn)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">over {swpYears} years</p>
                        </>
                      )}
                      {calcType === "stepup" && (
                        <>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Maturity Value</p>
                          <p className="text-4xl font-extrabold mt-1">{fmtCompact(suResult.maturityValue)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">after {suYears} years</p>
                        </>
                      )}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                      <TrendingUp size={22} className="text-sky-300" />
                    </div>
                  </div>

                  {/* Progress Bars */}
                  {calcType !== "swp" && activeResult && (
                    <div className="space-y-2.5 mb-5">
                      {[
                        {
                          label: "Total Invested",
                          value: activeResult.totalInvested,
                          pct: (activeResult.totalInvested / (activeResult.maturityValue || 1)) * 100,
                          color: "bg-sky-400",
                        },
                        {
                          label: "Wealth Gained",
                          value: activeResult.wealthGained,
                          pct: (activeResult.wealthGained / (activeResult.maturityValue || 1)) * 100,
                          color: "bg-emerald-400",
                        },
                      ].map(({ label, value, pct, color }) => (
                        <div key={label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/70 flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                              {label}
                            </span>
                            <span className="text-white font-semibold">{fmtCompact(value)}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${Math.min(100, pct)}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {calcType === "swp" && (
                    <div className="space-y-2.5 mb-5">
                      {[
                        { label: "Initial Corpus", value: swpCorpus, pct: 100, color: "bg-sky-400" },
                        { label: "Total Withdrawn", value: swpResult.totalWithdrawn, pct: (swpResult.totalWithdrawn / (swpCorpus || 1)) * 100, color: "bg-orange-400" },
                        { label: "Remaining Corpus", value: swpResult.remainingCorpus, pct: (swpResult.remainingCorpus / (swpCorpus || 1)) * 100, color: "bg-emerald-400" },
                      ].map(({ label, value, pct, color }) => (
                        <div key={label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/70 flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                              {label}
                            </span>
                            <span className="text-white font-semibold">{fmtCompact(value)}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${Math.min(100, Math.max(pct, 2))}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Breakdown rows */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {calcType === "sip" && (
                      <>
                        {[
                          { label: "Monthly SIP", value: fmt(sipMonthly) },
                          { label: "Total Invested", value: fmt(sipResult.totalInvested) },
                          { label: "Wealth Gained", value: fmt(sipResult.wealthGained) },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex justify-between text-xs">
                            <span className="text-white/60">{label}</span>
                            <span className="text-white font-semibold">{value}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                          <span className="text-white/80 font-bold">Maturity Value</span>
                          <span className="text-white font-extrabold">{fmtCompact(sipResult.maturityValue)}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-white/60">Absolute Returns</span>
                          <span className="text-emerald-400 font-bold">
                            {sipResult.totalInvested > 0 ? ((sipResult.wealthGained / sipResult.totalInvested) * 100).toFixed(1) : 0}%
                          </span>
                        </div>
                      </>
                    )}

                    {calcType === "lumpsum" && (
                      <>
                        {[
                          { label: "Investment", value: fmt(lsAmount) },
                          { label: "Wealth Gained", value: fmt(lsResult.wealthGained) },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex justify-between text-xs">
                            <span className="text-white/60">{label}</span>
                            <span className="text-white font-semibold">{value}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                          <span className="text-white/80 font-bold">Maturity Value</span>
                          <span className="text-white font-extrabold">{fmtCompact(lsResult.maturityValue)}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-white/60">Absolute Returns</span>
                          <span className="text-emerald-400 font-bold">
                            {lsAmount > 0 ? ((lsResult.wealthGained / lsAmount) * 100).toFixed(1) : 0}%
                          </span>
                        </div>
                      </>
                    )}

                    {calcType === "swp" && (
                      <>
                        {[
                          { label: "Monthly Withdrawal", value: fmt(swpMonthly) },
                          { label: "Total Withdrawn", value: fmtCompact(swpResult.totalWithdrawn) },
                          { label: "Remaining Corpus", value: fmtCompact(swpResult.remainingCorpus) },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex justify-between text-xs">
                            <span className="text-white/60">{label}</span>
                            <span className="text-white font-semibold">{value}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-xs border-t border-white/20 pt-2">
                          <span className="text-white/60">Corpus sustainability</span>
                          <span className={`font-bold ${swpResult.remainingCorpus > 0 ? "text-emerald-400" : "text-orange-400"}`}>
                            {swpResult.remainingCorpus > 0 ? "✓ Sustainable" : "⚠ Exhausted"}
                          </span>
                        </div>
                      </>
                    )}

                    {calcType === "stepup" && (
                      <>
                        {[
                          { label: "Starting SIP", value: fmt(suMonthly) },
                          { label: "Annual Step-Up", value: `${suStepUp}%` },
                          { label: "Total Invested", value: fmtCompact(suResult.totalInvested) },
                          { label: "Wealth Gained", value: fmtCompact(suResult.wealthGained) },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex justify-between text-xs">
                            <span className="text-white/60">{label}</span>
                            <span className="text-white font-semibold">{value}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                          <span className="text-white/80 font-bold">Maturity Value</span>
                          <span className="text-white font-extrabold">{fmtCompact(suResult.maturityValue)}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Donut */}
                  {calcType !== "swp" && activeResult && (
                    <div className="mt-5 flex items-center justify-center gap-6 border-t border-white/10 pt-5">
                      <DonutChart
                        invested={activeResult.totalInvested}
                        returns={activeResult.wealthGained}
                        size={110}
                      />
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#00416a] border-2 border-white/30 shrink-0" />
                          <div>
                            <p className="text-white/60">Invested</p>
                            <p className="text-white font-bold">{fmtCompact(activeResult.totalInvested)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-sky-400 shrink-0" />
                          <div>
                            <p className="text-white/60">Returns</p>
                            <p className="text-white font-bold">{fmtCompact(activeResult.wealthGained)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* CTA Card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 space-y-3">
                <p className="text-sm font-bold text-[#00416a]">
                  Need Expert Mutual Fund Advice?
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our CA team helps you select the right funds, plan ELSS for
                  tax saving, optimize capital gains taxation, and file your ITR
                  with mutual fund transactions — all in one place.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25d366] text-white text-sm font-bold hover:bg-[#1ebe5d] active:scale-[0.97] transition-all shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={15} /> Share &amp; Get CA Advice
                </button>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00416a] text-white text-sm font-bold hover:bg-[#002b45] active:scale-[0.97] transition-all"
                >
                  Free Consultation <ArrowRight size={14} />
                </Link>
              </div>

              {/* Tax Tip */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                <BadgeCheck size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-blue-700">💡 ELSS — Tax Saving + Wealth Creation</p>
                  <p className="text-[11px] mt-0.5 leading-relaxed text-blue-600">
                    ELSS mutual funds offer Section 80C deduction up to ₹1.5L p.a. + equity-like returns of 12–15% CAGR + shortest lock-in (3 years) among all 80C instruments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ GROWTH SCHEDULE TABLE ══════════ */}
      {calcType !== "swp" && tableData.length > 0 && (
        <section className="py-10 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Growth Schedule
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                    Year-wise Investment Growth
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar size={13} />
                  <span>{tableData.length} year projection</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="grid bg-[#00416a] text-white text-xs font-bold uppercase tracking-wide px-4 py-3">
                  <div className="grid grid-cols-4 gap-2">
                    <span>Year</span>
                    <span className="text-right">Invested</span>
                    <span className="text-right">Est. Returns</span>
                    <span className="text-right">Total Value</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-50">
                  {displayedTable.map((row, i) => {
                    const growthPct = row.invested > 0 ? ((row.returns / row.invested) * 100).toFixed(1) : "0";
                    return (
                      <div
                        key={row.year}
                        className={`grid grid-cols-4 gap-2 px-4 py-3 text-sm hover:bg-[#00416a]/4 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                      >
                        <span className="font-bold text-[#00416a]">Year {row.year}</span>
                        <span className="text-right font-semibold text-gray-600">
                          {fmtCompact(row.invested)}
                        </span>
                        <span className="text-right font-semibold text-sky-600">
                          {fmtCompact(row.returns)}{" "}
                          <span className="text-[10px] text-emerald-500">+{growthPct}%</span>
                        </span>
                        <span className="text-right font-bold text-[#00416a]">
                          {fmtCompact(row.corpus)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {tableData.length > 10 && (
                  <div className="px-4 py-3 border-t border-gray-100 text-center">
                    <button
                      onClick={() => setShowFullTable((p) => !p)}
                      className="text-[#00416a] text-xs font-bold hover:underline transition"
                    >
                      {showFullTable ? "Show Less ↑" : `View All ${tableData.length} Years ↓`}
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* SWP Schedule Table */}
      {calcType === "swp" && swpResult.yearlyData.length > 0 && (
        <section className="py-10 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Withdrawal Schedule
                </span>
                <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                  Year-wise Withdrawal &amp; Balance
                </h2>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-[#00416a] text-white text-xs font-bold uppercase tracking-wide px-4 py-3">
                  <div className="grid grid-cols-3 gap-2">
                    <span>Year</span>
                    <span className="text-right">Amount Withdrawn</span>
                    <span className="text-right">Remaining Balance</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-50">
                  {swpResult.yearlyData.map((row, i) => (
                    <div
                      key={row.year}
                      className={`grid grid-cols-3 gap-2 px-4 py-3 text-sm hover:bg-[#00416a]/4 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      <span className="font-bold text-[#00416a]">Year {row.year}</span>
                      <span className="text-right font-semibold text-orange-500">{fmt(row.withdrawal)}</span>
                      <span className={`text-right font-bold ${row.balance > 0 ? "text-[#00416a]" : "text-red-500"}`}>
                        {row.balance > 0 ? fmtCompact(row.balance) : "Exhausted"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════ SEO CONTENT ══════════ */}
      <section className="py-20 bg-[#f8fbfd] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Complete Guide
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Mutual Fund Investment Guide for India
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                Everything you need to know about SIP, Lump Sum, SWP, Step-Up
                SIP, taxation, and smart mutual fund strategies for Indian
                investors.
              </p>
            </motion.div>

            <div className="space-y-14">

              {/* Block 1 */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    Why SIP Is India's Favourite Investment Method
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    A <strong>Systematic Investment Plan (SIP)</strong> has
                    transformed retail investing in India. AMFI data shows that
                    monthly SIP inflows have crossed ₹20,000 crore — a testament
                    to how deeply SIPs have penetrated the Indian investment
                    landscape. The popularity stems from three key advantages:{" "}
                    <strong>rupee cost averaging</strong>,{" "}
                    <strong>power of compounding</strong>, and{" "}
                    <strong>financial discipline</strong>.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Rupee cost averaging means that when markets fall, your fixed
                    SIP amount buys more units at a lower NAV — reducing your
                    average cost per unit over time. This removes the need to
                    time the market, making SIPs ideal for investors without
                    expertise in market cycles.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The compounding effect is particularly powerful over long
                    horizons. A monthly SIP of just ₹5,000 at 12% p.a. for 30
                    years grows to over ₹1.75 crore — from a total investment of
                    just ₹18 lakh. The remaining ₹1.57 crore is pure compounding
                    returns.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-5 py-3">
                    <p className="text-white font-bold text-sm">
                      Power of Compounding — ₹10,000 SIP @ 12% p.a.
                    </p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["5 Years", "₹6,00,000", "₹8,16,697", "36%"],
                      ["10 Years", "₹12,00,000", "₹23,23,391", "94%"],
                      ["15 Years", "₹18,00,000", "₹50,45,760", "180%"],
                      ["20 Years", "₹24,00,000", "₹99,91,479", "316%"],
                      ["25 Years", "₹30,00,000", "₹1,89,76,351", "532%"],
                      ["30 Years", "₹36,00,000", "₹3,52,99,138", "880%"],
                    ].map(([tenure, invested, maturity, returns], i) => (
                      <div
                        key={tenure}
                        className={`grid grid-cols-4 px-4 py-3 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                      >
                        <span className="font-bold text-[#00416a]">{tenure}</span>
                        <span className="text-gray-500">{invested}</span>
                        <span className="font-bold text-gray-800">{maturity}</span>
                        <span className="text-emerald-600 font-bold text-right">{returns}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 px-4 py-2">
                    *Illustrative only. Actual returns vary based on fund performance.
                  </p>
                </div>
              </motion.div>

              {/* Block 2 — Fund Categories */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">
                  Mutual Fund Categories — Which Is Right for You?
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Equity Funds",
                      risk: "High Risk",
                      returns: "10–18% CAGR",
                      horizon: "5+ Years",
                      examples: "Large Cap, Mid Cap, Small Cap, Flexi Cap, ELSS",
                      who: "Young investors, long-term wealth creation, tax saving",
                      color: "bg-blue-50 border-blue-100",
                      badge: "bg-blue-100 text-blue-700",
                    },
                    {
                      title: "Debt Funds",
                      risk: "Low-Medium Risk",
                      returns: "5–8% CAGR",
                      horizon: "1–3 Years",
                      examples: "Liquid, Ultra Short, Short Duration, Corporate Bond",
                      who: "Conservative investors, emergency fund, short-term goals",
                      color: "bg-emerald-50 border-emerald-100",
                      badge: "bg-emerald-100 text-emerald-700",
                    },
                    {
                      title: "Hybrid Funds",
                      risk: "Medium Risk",
                      returns: "8–12% CAGR",
                      horizon: "3–5 Years",
                      examples: "Balanced Advantage, Aggressive Hybrid, Arbitrage",
                      who: "First-time investors, medium-term goals, retirees",
                      color: "bg-violet-50 border-violet-100",
                      badge: "bg-violet-100 text-violet-700",
                    },
                  ].map(({ title, risk, returns, horizon, examples, who, color, badge }) => (
                    <div key={title} className={`${color} border rounded-2xl p-5`}>
                      <p className="text-sm font-extrabold text-[#00416a] mb-2">{title}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge}`}>{risk}</span>
                      <div className="mt-3 space-y-1.5">
                        {[
                          ["Expected Returns", returns],
                          ["Ideal Horizon", horizon],
                          ["Examples", examples],
                          ["Best For", who],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">{k}</p>
                            <p className="text-xs text-gray-700 font-medium">{v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Block 3 — Taxation */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden order-2 md:order-1">
                  <div className="bg-emerald-600 px-5 py-3">
                    <p className="text-white font-bold text-sm">
                      Mutual Fund Taxation — FY 2024-25
                    </p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["Equity LTCG (> 1 yr)", "12.5% above ₹1.25L/yr", "New from Budget 2024"],
                      ["Equity STCG (< 1 yr)", "20%", "Updated from Budget 2024"],
                      ["Debt Fund Gains", "Slab rate", "Post April 2023"],
                      ["ELSS Gains", "12.5% above ₹1.25L", "3-yr lock-in"],
                      ["Dividend Income", "Slab rate (TDS 10%)", "Added to income"],
                    ].map(([type, tax, note], i) => (
                      <div key={type} className={`grid grid-cols-3 px-4 py-3 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                        <span className="font-medium text-gray-700">{type}</span>
                        <span className="text-emerald-700 font-bold text-center">{tax}</span>
                        <span className="text-gray-400 text-right">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    Mutual Fund Taxation in India — FY 2024-25
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Budget 2024 brought significant changes to mutual fund taxation. LTCG tax on equity funds was revised from 10% to{" "}
                    <strong>12.5%</strong> (above ₹1.25 lakh per year — increased from ₹1 lakh), while STCG was revised from 15% to{" "}
                    <strong>20%</strong>. Indexation benefit for debt funds was removed from April 2023, making debt fund gains taxable at slab rates.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    For tax-efficient wealth creation, <strong>ELSS funds</strong> remain the best option — offering Section 80C deduction of up to ₹1.5 lakh per year, equity-like returns, and the shortest lock-in period of just 3 years among all 80C instruments.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Properly computing capital gains from mutual fund SIP redemptions (using the FIFO method) is complex — our CA team handles all mutual fund ITR computations, including LTCG/STCG statements from CAMS and KFintech.
                  </p>
                </div>
              </motion.div>

              {/* Block 4 — How to invest */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">
                  How to Start a SIP in India — Step by Step
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { step: "01", title: "Complete KYC", desc: "KYC is mandatory for all mutual fund investments in India. Complete it online via KRA portals (CAMS KRA, KFintech) using PAN, Aadhaar, and a selfie — takes less than 10 minutes." },
                    { step: "02", title: "Choose Fund Category", desc: "Match your fund category to your goal and risk appetite. Equity funds for long-term (5+ years) wealth creation; debt funds for short-term goals; hybrid for medium-term stability." },
                    { step: "03", title: "Select Specific Fund", desc: "Within a category, evaluate 3-year and 5-year CAGR, Sharpe ratio, fund manager track record, expense ratio (prefer direct plans < 1%), and AUM (above ₹500 crore)." },
                    { step: "04", title: "Choose Direct vs Regular Plan", desc: "Always prefer Direct Plans — they have lower expense ratios (0.5–1% less than regular plans). This seemingly small difference compounds significantly over 10–20 years." },
                    { step: "05", title: "Set Up Auto-Debit SIP", desc: "Register your bank account for ECS/NACH auto-debit. Your monthly SIP will be debited automatically on the chosen date — maintaining financial discipline effortlessly." },
                    { step: "06", title: "Review Annually & Step Up", desc: "Review portfolio performance annually — not daily. Increase SIP amount every year with your salary increment (use Step-Up SIP). Rebalance if equity allocation drifts significantly from your target." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-3 p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ WHY TAXVIO ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Taxvio
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Why Use Taxvio's Mutual Fund Calculator?
              </h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Zap, text: "4 calculators in one — SIP, Lump Sum, SWP, and Step-Up SIP with real-time results" },
                { icon: BarChart3, text: "Interactive bar chart & donut chart for visual understanding of your corpus growth" },
                { icon: Target, text: "Year-wise growth schedule — see exactly how your wealth compounds each year" },
                { icon: RefreshCw, text: "Step-Up SIP vs Regular SIP comparison — instantly see the extra wealth from annual increments" },
                { icon: Shield, text: "Precise SIP formula (future value of annuity due) — same as AMFI and SEBI calculators" },
                { icon: BadgeCheck, text: "CA-backed guidance on ELSS tax saving, fund selection, and capital gains ITR filing" },
                { icon: FileText, text: "Mutual fund capital gains ITR filing — LTCG, STCG, CAMS/KFintech statement processing" },
                { icon: MessageCircle, text: "100% free, no login required — calculate unlimited scenarios without any data storage" },
              ].map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  className="flex items-start gap-3.5 p-4 bg-white border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all group"
                >
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
      <section className="py-20 bg-[#f8fbfd] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Mutual Fund Calculator — FAQs
              </h2>
            </motion.div>
            <motion.div
              variants={stagger}
              className="space-y-3"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {FAQS.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${faqOpen === i ? "border-[#00416a]/30 shadow-md" : "border-gray-200"}`}
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-start gap-4 hover:bg-white transition"
                    aria-expanded={faqOpen === i}
                  >
                    <span className="text-sm font-semibold text-gray-800 leading-snug" itemProp="name">
                      {f.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${faqOpen === i ? "bg-[#00416a] rotate-180" : "bg-gray-100"}`}>
                      <ChevronDown size={15} className={faqOpen === i ? "text-white" : "text-gray-500"} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                        itemScope
                        itemType="https://schema.org/Answer"
                      >
                        <p
                          className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4"
                          itemProp="text"
                        >
                          {f.a}
                        </p>
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
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-[#00416a] mb-6">
              Related Tools &amp; Services
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "SIP Calculator", desc: "Monthly SIP returns", href: "/tools/mutual-fund-calculator", icon: TrendingUp },
                { title: "EMI Calculator", desc: "Home, Car & Personal Loan", href: "/tools/emi-calculator", icon: Calculator },
                { title: "Income Tax Calculator", desc: "FY 2024-25 old & new regime", href: "/tools/income-tax-calculator", icon: PieChart },
                { title: "ITR Filing – Salaried", desc: "Capital gains ITR from ₹999", href: "/serviceslist/income-tax/itr-salaried", icon: FileText },
              ].map(({ title, desc, href, icon: Icon }) => (
                <motion.div key={title} variants={fadeUp}>
                  <Link
                    href={href}
                    className="group flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#00416a]/30 hover:shadow-md transition-all duration-200"
                  >
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

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="py-16 px-6 bg-[#f8fbfd]">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Zap size={11} className="text-sky-300" />
                CA-Assisted Tax &amp; Investment Guidance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Taxvio's CA team helps you select the right mutual funds, maximize ELSS tax deductions, compute capital gains, and file your ITR accurately — all in one place from ₹499.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                >
                  <MessageCircle size={15} /> WhatsApp Us
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#00416a] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
                >
                  Free Consultation <ArrowRight size={14} />
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
              <p className="mt-6 text-white/40 text-xs">
                ELSS Tax Saving · Capital Gains ITR · Fund Selection · SIP Planning · 100% Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}