// app/tools/ppf-calculator/client.tsx
"use client";

import Link from "next/link";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  TrendingUp, ArrowRight, ChevronDown, Phone, MessageCircle,
  FileText, Shield, BadgeCheck, Zap, IndianRupee, RefreshCw,
  Info, BarChart3, Target, Calculator, Calendar, PieChart,
  Landmark, Percent, Lock, CreditCard, ArrowUpRight, CheckCircle,
} from "lucide-react";
import Footar from "@/components/Footar";

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE            = "918937980366";
const PPF_RATE_DEFAULT = 7.1;
const MIN_INVESTMENT   = 500;
const MAX_INVESTMENT   = 150000;
const BASE_TENURE      = 15;

// ─── Types ────────────────────────────────────────────────────────────────────
type CalcMode = "basic" | "loan" | "withdrawal";
type Frequency = "yearly" | "monthly";

interface YearRow {
  year         : number;
  openingBal   : number;
  deposit      : number;
  interest     : number;
  closingBal   : number;
  totalDeposited: number;
  loanLimit    : number;
  withdrawLimit: number;
}

interface PPFResult {
  totalInvested   : number;
  totalInterest   : number;
  maturityValue   : number;
  yearlyData      : YearRow[];
  taxSaving       : number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const r2 = (n: number) => Math.round(n * 100) / 100;

function fmtINR(n: number): string {
  return "₹" + Math.max(0, Math.round(n)).toLocaleString("en-IN");
}

function fmtC(n: number): string {
  n = Math.max(0, n);
  if (n >= 10_000_000) return `₹${(n / 10_000_000).toFixed(2)} Cr`;
  if (n >= 100_000)    return `₹${(n / 100_000).toFixed(2)} L`;
  if (n >= 1_000)      return `₹${(n / 1_000).toFixed(1)}K`;
  return fmtINR(n);
}

// ─── PPF Calculation ──────────────────────────────────────────────────────────
// PPF interest is calculated on the minimum balance between 5th and last day
// of each month. For simplicity we use annual compounding (standard model).
function calcPPF(
  annualDeposit : number,
  rate          : number,
  years         : number,
  extensions    : number   // number of 5-year extensions
): PPFResult {
  const totalYears = years + extensions * 5;
  const r          = rate / 100;

  let balance        = 0;
  let totalInvested  = 0;
  const yearlyData: YearRow[] = [];

  for (let y = 1; y <= totalYears; y++) {
    const opening   = balance;
    const deposit   = y <= years || extensions > 0 ? annualDeposit : 0;
    const interest  = r2((opening + deposit) * r);
    balance         = r2(opening + deposit + interest);
    totalInvested  += deposit;

    // Loan: max 25% of balance at end of 2nd year preceding loan year
    // Simplified: 25% of balance 2 years ago (available Y3–Y6)
    const loanLimit = (y >= 3 && y <= 6)
      ? r2((yearlyData[y - 3]?.closingBal ?? 0) * 0.25)
      : 0;

    // Withdrawal: 50% of balance at end of 4th year preceding withdrawal year
    // Available from Y7 onwards; once per year
    const withdrawLimit = y >= 7
      ? r2(Math.min(
          (yearlyData[y - 5]?.closingBal ?? 0) * 0.5,
          (yearlyData[y - 2]?.closingBal ?? 0) * 0.5
        ))
      : 0;

    yearlyData.push({
      year          : y,
      openingBal    : Math.round(opening),
      deposit       : Math.round(deposit),
      interest      : Math.round(interest),
      closingBal    : Math.round(balance),
      totalDeposited: Math.round(totalInvested),
      loanLimit     : Math.round(loanLimit),
      withdrawLimit : Math.round(withdrawLimit),
    });
  }

  const totalInterest = Math.round(balance - totalInvested);
  // Tax saving: 30% slab + 4% cess = 31.2% on min(annual deposit, 150000)
  const taxSaving = Math.round(Math.min(annualDeposit, 150000) * 0.312);

  return {
    totalInvested  : Math.round(totalInvested),
    totalInterest,
    maturityValue  : Math.round(balance),
    yearlyData,
    taxSaving,
  };
}

// ─── Loan Calculation ─────────────────────────────────────────────────────────
function calcLoan(
  loanAmount : number,
  loanRate   : number,   // PPF loan rate = PPF rate + 1%
  months     : number
): { emi: number; totalPayable: number; totalInterest: number } {
  const r   = loanRate / 100 / 12;
  const emi = loanAmount * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
  const totalPayable = r2(emi * months);
  return {
    emi          : Math.round(emi),
    totalPayable : Math.round(totalPayable),
    totalInterest: Math.round(totalPayable - loanAmount),
  };
}

// ─── Bar Chart SVG ────────────────────────────────────────────────────────────
function BarChart({ data }: { data: YearRow[] }) {
  const maxVal = Math.max(...data.map(d => d.closingBal), 1);
  const BW = 26; const GAP = 10; const H = 160; const PB = 28;
  const total = data.length;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${Math.max(total * (BW + GAP) + GAP, 360)} ${H + PB}`}
        className="w-full min-w-[360px]"
        preserveAspectRatio="none"
        aria-label="PPF growth bar chart"
      >
        {/* Grid lines */}
        {[0.25, 0.5, 0.75, 1].map(p => (
          <line key={p}
            x1={0} y1={H - p * H}
            x2={total * (BW + GAP) + GAP} y2={H - p * H}
            stroke="#f1f5f9" strokeWidth="1" />
        ))}

        {data.map((d, i) => {
          const x       = i * (BW + GAP) + GAP;
          const depH    = (d.totalDeposited / maxVal) * H;
          const intH    = (d.closingBal     / maxVal) * H;
          const retH    = intH - depH;

          return (
            <g key={d.year}>
              {/* Deposited (bottom) */}
              <rect x={x} y={H - depH} width={BW} height={depH}
                fill="#00416a" rx="3" />
              {/* Interest (top) */}
              <rect x={x} y={H - intH} width={BW} height={Math.max(retH, 0)}
                fill="#0ea5e9" rx="3" opacity="0.85" />
              {/* Year label */}
              <text x={x + BW / 2} y={H + PB - 4}
                textAnchor="middle" fontSize="8" fill="#94a3b8" fontWeight="600">
                Y{d.year}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="flex items-center justify-center gap-5 mt-3 flex-wrap">
        <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
          <span className="w-3 h-3 rounded bg-[#00416a]" /> Total Deposited
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
          <span className="w-3 h-3 rounded bg-sky-400" /> Interest Earned
        </span>
      </div>
    </div>
  );
}

// ─── Donut Chart SVG ──────────────────────────────────────────────────────────
function Donut({
  invested, interest, size = 120,
}: { invested: number; interest: number; size?: number }) {
  const total = invested + interest || 1;
  const R  = size * 0.36;
  const cx = size / 2; const cy = size / 2;
  const C  = 2 * Math.PI * R;
  const sw = size * 0.13;
  const iD = (invested  / total) * C;
  const rD = (interest  / total) * C;

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
      <text x={cx} y={cy - 5} textAnchor="middle" fontSize={size * 0.1}
        fill="#1e293b" fontWeight="800">
        {total > 0 ? `${Math.round((interest / total) * 100)}%` : "0%"}
      </text>
      <text x={cx} y={cy + size * 0.12} textAnchor="middle"
        fontSize={size * 0.075} fill="#94a3b8">
        interest
      </text>
    </svg>
  );
}

// ─── Slider Row ───────────────────────────────────────────────────────────────
function SliderRow({
  label, value, min, max, step, onChange,
  display, markers, tooltip, unit,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; display: string;
  markers: string[]; tooltip?: string; unit?: string;
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
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 bg-gray-800 text-white text-[10px] rounded-xl p-2.5 opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 leading-relaxed shadow-xl">
                {tooltip}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 bg-[#00416a]/8 border border-[#00416a]/20 rounded-xl px-3 py-1.5">
          <IndianRupee size={11} className="text-[#00416a]" />
          <span className="text-[#00416a] font-extrabold text-sm">{display}</span>
          {unit && (
            <span className="text-[#00416a]/70 text-xs ml-1">{unit}</span>
          )}
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

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is PPF and who should invest in it?",
    a: "Public Provident Fund (PPF) is a long-term, government-backed savings scheme introduced in India in 1968 under the PPF Act. It is one of the most popular tax-saving instruments for Indian individuals due to its EEE (Exempt-Exempt-Exempt) tax status — meaning the investment, interest, and maturity proceeds are all completely tax-free. PPF is ideal for risk-averse investors, salaried individuals looking for guaranteed tax-free returns, and those planning for long-term goals like retirement or children's education. Self-employed professionals, businesspersons, and HUFs (Hindu Undivided Families — HUFs cannot open new accounts post-May 2005) can also invest in PPF.",
  },
  {
    q: "What is the current PPF interest rate and how is it calculated?",
    a: "The current PPF interest rate for Q1 FY 2024-25 is 7.1% per annum, compounded annually. The interest rate is reviewed quarterly by the Finance Ministry and is linked to G-sec yields. PPF interest is calculated on the minimum balance between the 5th day and the last day of each calendar month. This means deposits made before the 5th of a month earn interest for that month, while deposits after the 5th miss that month's interest. Therefore, making your annual PPF deposit before April 5th each year maximizes your interest earnings — earning interest for the full year on the deposited amount.",
  },
  {
    q: "What is the PPF lock-in period and can I withdraw early?",
    a: "PPF has a mandatory lock-in period of 15 years from the end of the financial year of account opening. Premature closure is allowed only after completing 5 years of the account, and only on specific grounds: life-threatening illness of account holder, spouse, dependent children or parents; higher education of account holder or minor child; or change in residency status (NRI). Premature closure attracts a 1% penalty on the interest rate (effective rate becomes 6.1% instead of 7.1%). Complete early withdrawal for any other reason is not permitted — making PPF a long-term, illiquid investment commitment.",
  },
  {
    q: "Can I take a loan against my PPF account?",
    a: "Yes — a loan against PPF is available from the 3rd financial year to the end of the 6th financial year of account opening. The maximum loan amount is 25% of the balance at the end of the 2nd year preceding the loan application year. The loan carries an interest rate of PPF interest rate + 1% (currently 8.1% p.a.) and must be repaid within 36 months (3 years) in maximum 2 installments. If not repaid within 36 months, the interest rate increases to PPF rate + 6% (currently 13.1%). A second loan is available if the first loan is fully repaid and you are still in the 3rd to 6th year window.",
  },
  {
    q: "What are PPF partial withdrawal rules?",
    a: "PPF partial withdrawal is allowed from the 7th financial year of account opening (i.e., after completing 6 full years). You can make one partial withdrawal per financial year. The maximum withdrawal amount is 50% of the balance at the end of the 4th financial year preceding the withdrawal year, OR 50% of the balance at the end of the preceding financial year — whichever is lower. Partial withdrawals from PPF are completely tax-free. There is no restriction on how the withdrawn amount is used, and the account remains active after withdrawal.",
  },
  {
    q: "Can I extend my PPF account after 15 years?",
    a: "Yes — after the initial 15-year maturity, you can extend your PPF account in blocks of 5 years, indefinitely. There are two extension options: (1) Extension with contribution — you continue making deposits and earn interest on the full balance; the account operates normally. (2) Extension without contribution — you stop making deposits but the existing balance continues to earn interest at the prevailing PPF rate. You must submit Form H to your bank/post office within 1 year of maturity to opt for extension with contributions. If you don't submit the form, the account is automatically extended without contributions.",
  },
  {
    q: "Is PPF better than ELSS for tax saving?",
    a: "PPF and ELSS (Equity Linked Savings Scheme) both offer Section 80C deduction up to ₹1.5 lakh, but serve different investor profiles. PPF: 7.1% guaranteed tax-free returns, 15-year lock-in, zero risk, EEE tax status — ideal for conservative investors prioritising capital safety. ELSS: 12–15% historical CAGR (not guaranteed), only 3-year lock-in (shortest among all 80C instruments), equity market linked — ideal for aggressive investors with long horizon. For most salaried individuals, a combination of both is optimal — ELSS for higher growth potential and PPF for guaranteed, tax-free debt component of the portfolio. If you're in a lower tax bracket or approaching retirement, PPF's guaranteed returns are more valuable.",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PPFClient() {

  // ── Core Inputs ──────────────────────────────────────────────────────────
  const [annualDeposit, setAnnualDeposit] = useState(150000);
  const [ppfRate,       setPpfRate]       = useState(PPF_RATE_DEFAULT);
  const [tenure,        setTenure]        = useState(BASE_TENURE);
  const [extensions,    setExtensions]    = useState(0);
  const [mode,          setMode]          = useState<CalcMode>("basic");

  // ── Loan inputs ──────────────────────────────────────────────────────────
  const [loanYear,      setLoanYear]      = useState(3);
  const [loanMonths,    setLoanMonths]    = useState(36);

  // ── Withdrawal inputs ────────────────────────────────────────────────────
  const [withdrawYear,  setWithdrawYear]  = useState(7);

  // ── UI state ─────────────────────────────────────────────────────────────
  const [faqOpen,       setFaqOpen]       = useState<number | null>(null);
  const [showTable,     setShowTable]     = useState(false);

  // ── Results ───────────────────────────────────────────────────────────────
  const result = useMemo(
    () => calcPPF(annualDeposit, ppfRate, tenure, extensions),
    [annualDeposit, ppfRate, tenure, extensions]
  );

  // Loan result
  const loanEligibleRow = result.yearlyData[loanYear - 1];
  const loanAmount = loanYear >= 3 && loanYear <= 6
    ? Math.round((result.yearlyData[loanYear - 3]?.closingBal ?? 0) * 0.25)
    : 0;
  const loanRes = useMemo(
    () => calcLoan(loanAmount, ppfRate + 1, loanMonths),
    [loanAmount, ppfRate, loanMonths]
  );

  // Withdrawal result
  const withdrawRow    = result.yearlyData[withdrawYear - 1];
  const prevY4Row      = result.yearlyData[withdrawYear - 5] ?? null;
  const prevY1Row      = result.yearlyData[withdrawYear - 2] ?? null;
  const withdrawAmount = withdrawYear >= 7 && prevY4Row && prevY1Row
    ? Math.round(Math.min(prevY4Row.closingBal * 0.5, prevY1Row.closingBal * 0.5))
    : 0;

  const tableRows  = showTable ? result.yearlyData : result.yearlyData.slice(0, 10);
  const totalYears = tenure + extensions * 5;

  const handleWA = () => {
    const msg = encodeURIComponent(
      `Hello Taxvio! I used your PPF Calculator. Annual deposit: ${fmtINR(annualDeposit)}, Rate: ${ppfRate}%, Tenure: ${totalYears} yrs. Maturity: ${fmtC(result.maturityValue)}. I need PPF & tax planning help.`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  const MODES = [
    { id: "basic"      as CalcMode, label: "PPF Returns",    icon: TrendingUp,   desc: "Maturity value" },
    { id: "loan"       as CalcMode, label: "PPF Loan",       icon: CreditCard,   desc: "Loan eligibility" },
    { id: "withdrawal" as CalcMode, label: "Withdrawal",     icon: ArrowUpRight, desc: "Partial withdraw" },
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
          <motion.div initial="hidden" animate="visible" variants={stagger}
            className="text-center max-w-3xl mx-auto">

            {/* Breadcrumb */}
            <motion.nav variants={fadeUp}
              className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-white transition">Financial Tools</Link>
              <span>/</span>
              <span className="text-white/80">PPF Calculator</span>
            </motion.nav>

            {/* Badge */}
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide">
              <Landmark size={12} className="text-sky-300" />
              PPF Returns · Loan · Partial Withdrawal · Free Tool
            </motion.span>

            {/* H1 */}
            <motion.h1 variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              PPF Calculator
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                Public Provident Fund 2024-25
              </span>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
              Calculate your PPF maturity value, year-wise interest, loan eligibility,
              and partial withdrawal amount. Current PPF interest rate: <strong className="text-sky-300">7.1% p.a.</strong>
            </motion.p>

            {/* Pills */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                { icon: Zap,       label: "Real-Time Results" },
                { icon: Lock,      label: "EEE Tax Benefit" },
                { icon: BarChart3, label: "Year-wise Schedule" },
                { icon: Shield,    label: "Govt. Guaranteed" },
              ].map(({ icon: Icon, label }) => (
                <span key={label}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Icon size={11} className="text-sky-300" /> {label}
                </span>
              ))}
            </motion.div>

            {/* Current Rate Banner */}
            <motion.div variants={fadeUp}
              className="mt-6 inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-400/20 flex items-center justify-center">
                <Percent size={15} className="text-sky-300" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                  Current PPF Rate · Q1 FY 2024-25
                </p>
                <p className="text-xl font-extrabold text-white">7.1% per annum</p>
              </div>
              <div className="h-8 w-px bg-white/20 mx-1" />
              <div className="text-left">
                <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                  Tax Status
                </p>
                <p className="text-sm font-bold text-emerald-300">EEE — Fully Exempt</p>
              </div>
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
                <button key={id} onClick={() => setMode(id)}
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
                {/* ══ BASIC MODE ══ */}
                {mode === "basic" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <Landmark size={17} /> PPF Maturity Calculator
                    </h2>

                    <SliderRow
                      label="Yearly PPF Investment"
                      value={annualDeposit}
                      min={MIN_INVESTMENT} max={MAX_INVESTMENT} step={500}
                      onChange={setAnnualDeposit}
                      display={fmtC(annualDeposit).replace("₹", "")}
                      markers={["₹500", "₹37.5K", "₹75K", "₹1.12L", "₹1.5L"]}
                      tooltip="Annual deposit in your PPF account. Minimum ₹500, maximum ₹1,50,000 per year."
                    />

                    {/* Quick invest buttons */}
                    <div className="flex flex-wrap gap-2">
                      {[500, 12000, 60000, 150000].map(v => (
                        <button key={v} onClick={() => setAnnualDeposit(v)}
                          className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${annualDeposit === v ? "bg-[#00416a] text-white border-[#00416a]" : "border-gray-200 text-gray-500 hover:border-[#00416a]/30 hover:text-[#00416a]"}`}>
                          {fmtINR(v)}/yr
                        </button>
                      ))}
                    </div>

                    {/* Rate */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            PPF Interest Rate
                          </label>
                          <div className="group relative">
                            <Info size={12} className="text-gray-300 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 bg-gray-800 text-white text-[10px] rounded-xl p-2.5 opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 leading-relaxed shadow-xl">
                              PPF rate is set quarterly by the Finance Ministry. Current rate: 7.1% p.a. for Q1 FY 2024-25.
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-[#00416a]/8 border border-[#00416a]/20 rounded-xl px-3 py-1.5">
                          <span className="text-[#00416a] font-extrabold text-sm">{ppfRate.toFixed(1)}%</span>
                        </div>
                      </div>
                      <input type="range" min={6} max={10} step={0.1} value={ppfRate}
                        onChange={e => setPpfRate(Number(e.target.value))}
                        className="w-full accent-[#00416a] h-1.5 cursor-pointer" />
                      <div className="flex justify-between text-[10px] text-gray-400">
                        <span>6.0%</span><span>7.0%</span><span>7.1% (Current)</span><span>8.0%</span><span>10.0%</span>
                      </div>
                    </div>

                    {/* Tenure */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            PPF Tenure
                          </label>
                        </div>
                        <div className="flex items-center gap-1 bg-[#00416a]/8 border border-[#00416a]/20 rounded-xl px-3 py-1.5">
                          <span className="text-[#00416a] font-extrabold text-sm">15 Years</span>
                          <span className="text-[#00416a]/70 text-xs ml-1">(Fixed)</span>
                        </div>
                      </div>
                      <div className="flex gap-2 bg-blue-50 border border-blue-100 rounded-xl p-3">
                        <Lock size={13} className="text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-700 leading-relaxed">
                          PPF has a mandatory 15-year lock-in. After maturity, you can extend in blocks of <strong>5 years</strong>.
                        </p>
                      </div>
                    </div>

                    {/* Extensions */}
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Extensions after 15 years (optional)
                      </p>
                      <div className="flex gap-2">
                        {[0, 1, 2, 3].map(e => (
                          <button key={e} onClick={() => setExtensions(e)}
                            className={`flex-1 py-2.5 rounded-xl text-xs font-bold border-2 transition-all ${extensions === e ? "bg-[#00416a] border-[#00416a] text-white shadow-sm" : "border-gray-100 bg-gray-50 text-gray-600 hover:border-[#00416a]/30"}`}>
                            {e === 0 ? "None" : `+${e * 5} Yrs`}
                          </button>
                        ))}
                      </div>
                      {extensions > 0 && (
                        <p className="text-[11px] text-emerald-600 mt-2 font-semibold">
                          Total tenure: {totalYears} years (₹ {fmtC(result.maturityValue)} at maturity)
                        </p>
                      )}
                    </div>

                    {/* EEE Info */}
                    <div className="flex gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3.5">
                      <BadgeCheck size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-emerald-700 leading-relaxed">
                        <strong>EEE Tax Status:</strong> PPF investment is deductible under Section 80C (up to ₹1.5L). Interest earned and maturity proceeds are completely tax-free — no tax at any stage.
                      </p>
                    </div>
                  </>
                )}

                {/* ══ LOAN MODE ══ */}
                {mode === "loan" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <CreditCard size={17} /> PPF Loan Calculator
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed -mt-2">
                      Loan against PPF is available from 3rd to 6th financial year. Max 25% of balance 2 years ago.
                    </p>

                    <SliderRow
                      label="Yearly PPF Investment"
                      value={annualDeposit}
                      min={MIN_INVESTMENT} max={MAX_INVESTMENT} step={500}
                      onChange={setAnnualDeposit}
                      display={fmtC(annualDeposit).replace("₹", "")}
                      markers={["₹500", "₹37.5K", "₹75K", "₹1.12L", "₹1.5L"]}
                      tooltip="Your annual PPF deposit used to calculate balance."
                    />

                    {/* Loan Year Selector */}
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Select Year of Loan Application
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {[3, 4, 5, 6].map(y => (
                          <button key={y} onClick={() => setLoanYear(y)}
                            className={`py-2.5 rounded-xl text-sm font-bold border-2 transition-all ${loanYear === y ? "bg-[#00416a] border-[#00416a] text-white shadow-sm" : "border-gray-100 bg-gray-50 text-gray-600 hover:border-[#00416a]/30"}`}>
                            Year {y}
                          </button>
                        ))}
                      </div>
                      {loanAmount > 0 && (
                        <div className="mt-3 p-3 bg-[#f8fbfd] border border-[#deeef7] rounded-xl">
                          <p className="text-xs text-gray-500">
                            Balance at end of Year {loanYear - 2}:{" "}
                            <strong className="text-[#00416a]">
                              {fmtINR(result.yearlyData[loanYear - 3]?.closingBal ?? 0)}
                            </strong>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Maximum loan eligibility (25%): {" "}
                            <strong className="text-[#00416a] text-sm">{fmtINR(loanAmount)}</strong>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Repayment Period */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          Repayment Period
                        </label>
                        <div className="flex items-center gap-1 bg-[#00416a]/8 border border-[#00416a]/20 rounded-xl px-3 py-1.5">
                          <span className="text-[#00416a] font-extrabold text-sm">{loanMonths}</span>
                          <span className="text-[#00416a]/70 text-xs ml-1">Months</span>
                        </div>
                      </div>
                      <input type="range" min={6} max={36} step={6} value={loanMonths}
                        onChange={e => setLoanMonths(Number(e.target.value))}
                        className="w-full accent-[#00416a] h-1.5 cursor-pointer" />
                      <div className="flex justify-between text-[10px] text-gray-400">
                        <span>6 Mo</span><span>12 Mo</span><span>18 Mo</span><span>24 Mo</span><span>30 Mo</span><span>36 Mo</span>
                      </div>
                    </div>

                    {/* Loan Rate Info */}
                    <div className="flex gap-3 bg-amber-50 border border-amber-100 rounded-xl p-3.5">
                      <Info size={14} className="text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-700 leading-relaxed">
                        PPF loan interest rate = PPF rate + 1% = <strong>{(ppfRate + 1).toFixed(1)}%</strong> p.a.
                        If not repaid in 36 months, rate increases to PPF rate + 6% = <strong>{(ppfRate + 6).toFixed(1)}%</strong> p.a.
                      </p>
                    </div>
                  </>
                )}

                {/* ══ WITHDRAWAL MODE ══ */}
                {mode === "withdrawal" && (
                  <>
                    <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                      <ArrowUpRight size={17} /> PPF Partial Withdrawal Calculator
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed -mt-2">
                      Partial withdrawal is allowed from the 7th year onwards. Maximum 50% of balance at end of 4th preceding year.
                    </p>

                    <SliderRow
                      label="Yearly PPF Investment"
                      value={annualDeposit}
                      min={MIN_INVESTMENT} max={MAX_INVESTMENT} step={500}
                      onChange={setAnnualDeposit}
                      display={fmtC(annualDeposit).replace("₹", "")}
                      markers={["₹500", "₹37.5K", "₹75K", "₹1.12L", "₹1.5L"]}
                      tooltip="Your annual PPF deposit amount."
                    />

                    {/* Withdrawal Year */}
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Select Year of Withdrawal
                      </p>
                      <div className="grid grid-cols-5 gap-2">
                        {[7, 8, 9, 10, 11, 12, 13, 14, 15].map(y => (
                          <button key={y} onClick={() => setWithdrawYear(y)}
                            className={`py-2 rounded-xl text-xs font-bold border-2 transition-all ${withdrawYear === y ? "bg-[#00416a] border-[#00416a] text-white shadow-sm" : "border-gray-100 bg-gray-50 text-gray-600 hover:border-[#00416a]/30"}`}>
                            Y{y}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Withdrawal calculation details */}
                    {withdrawAmount > 0 && (
                      <div className="space-y-2 p-4 bg-[#f8fbfd] border border-[#deeef7] rounded-xl">
                        <p className="text-xs font-bold text-[#00416a] mb-2">Withdrawal Calculation — Year {withdrawYear}</p>
                        {[
                          {
                            label: `Balance at end of Year ${withdrawYear - 4}`,
                            value: fmtINR(prevY4Row?.closingBal ?? 0),
                            sub: "4th preceding year balance",
                          },
                          {
                            label: `50% of Year ${withdrawYear - 4} balance`,
                            value: fmtINR((prevY4Row?.closingBal ?? 0) * 0.5),
                            sub: "Limit A",
                          },
                          {
                            label: `Balance at end of Year ${withdrawYear - 1}`,
                            value: fmtINR(prevY1Row?.closingBal ?? 0),
                            sub: "Preceding year balance",
                          },
                          {
                            label: `50% of Year ${withdrawYear - 1} balance`,
                            value: fmtINR((prevY1Row?.closingBal ?? 0) * 0.5),
                            sub: "Limit B",
                          },
                        ].map(({ label, value, sub }) => (
                          <div key={label} className="flex justify-between items-start text-xs">
                            <div>
                              <p className="font-medium text-gray-700">{label}</p>
                              <p className="text-gray-400">{sub}</p>
                            </div>
                            <span className="font-bold text-[#00416a]">{value}</span>
                          </div>
                        ))}
                        <div className="border-t border-[#deeef7] pt-2 flex justify-between items-center">
                          <div>
                            <p className="text-sm font-bold text-[#00416a]">Maximum Withdrawal</p>
                            <p className="text-[11px] text-gray-500">Lower of Limit A and Limit B</p>
                          </div>
                          <span className="text-lg font-extrabold text-[#00416a]">{fmtINR(withdrawAmount)}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3.5">
                      <CheckCircle size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-emerald-700 leading-relaxed">
                        Partial withdrawals from PPF are <strong>completely tax-free</strong>. The account remains active and continues to earn interest on remaining balance.
                      </p>
                    </div>
                  </>
                )}
              </motion.div>

              {/* ── Bar Chart (Basic only) ── */}
              {mode === "basic" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
                >
                  <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                    <BarChart3 size={15} /> Year-wise PPF Growth Chart
                  </h3>
                  <BarChart data={result.yearlyData} />
                </motion.div>
              )}

              {/* ── Comparison: PPF vs FD vs NSC ── */}
              {mode === "basic" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
                >
                  <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                    <RefreshCw size={15} /> PPF vs Other Instruments (₹{fmtC(annualDeposit)}/yr × 15 yrs)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-100">
                          {["Instrument", "Rate", "Lock-in", "Maturity", "Taxability"].map(h => (
                            <th key={h} className={`py-2 text-gray-500 font-bold uppercase tracking-wide text-[10px] ${h === "Instrument" ? "text-left" : "text-right"}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {[
                          {
                            name: "PPF",
                            rate: `${ppfRate}%`,
                            lock: "15 yrs",
                            mat: result.maturityValue,
                            tax: "EEE — Fully Exempt",
                            active: true,
                          },
                          {
                            name: "NSC",
                            rate: "7.7%",
                            lock: "5 yrs",
                            mat: annualDeposit * 15 * Math.pow(1 + 0.077, 5),
                            tax: "Interest taxable (80C eligible)",
                            active: false,
                          },
                          {
                            name: "ELSS SIP",
                            rate: "~12%",
                            lock: "3 yrs",
                            mat: calcPPF(annualDeposit, 12, 15, 0).maturityValue,
                            tax: "LTCG 12.5% above ₹1.25L",
                            active: false,
                          },
                          {
                            name: "Bank FD (5yr)",
                            rate: "6.5–7%",
                            lock: "5 yrs",
                            mat: annualDeposit * 15 * Math.pow(1 + 0.065, 5),
                            tax: "Interest fully taxable at slab",
                            active: false,
                          },
                          {
                            name: "Sukanya (SSY)",
                            rate: "8.2%",
                            lock: "21 yrs",
                            mat: calcPPF(annualDeposit, 8.2, 15, 0).maturityValue,
                            tax: "EEE — Fully Exempt",
                            active: false,
                          },
                        ].map(({ name, rate, lock, mat, tax, active }, i) => (
                          <tr key={name}
                            className={`${active ? "bg-[#00416a]/5" : i % 2 === 0 ? "bg-white" : "bg-gray-50/40"} hover:bg-[#00416a]/4 transition-colors`}>
                            <td className="py-2.5 text-left">
                              <span className={`font-bold text-xs ${active ? "text-[#00416a]" : "text-gray-700"}`}>{name}</span>
                              {active && <span className="ml-1.5 text-[9px] bg-[#00416a] text-white px-1.5 py-0.5 rounded-full">Selected</span>}
                            </td>
                            <td className="py-2.5 text-right font-semibold text-gray-600">{rate}</td>
                            <td className="py-2.5 text-right text-gray-500">{lock}</td>
                            <td className={`py-2.5 text-right font-bold ${active ? "text-[#00416a]" : "text-gray-700"}`}>
                              {fmtC(Math.round(mat))}
                            </td>
                            <td className={`py-2.5 text-right text-[10px] font-medium ${name === "PPF" || name === "Sukanya (SSY)" ? "text-emerald-600" : "text-orange-600"}`}>
                              {tax}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-3">
                    *ELSS and NSC maturity are approximate. FD assumed 5-yr compounding. Sukanya for girl child only.
                  </p>
                </motion.div>
              )}
            </div>

            {/* ─── RIGHT: Sticky Result Panel ─── */}
            <div className="space-y-5 lg:sticky lg:top-24">

              {/* Main Result Card */}
              <motion.div
                key={`res-${mode}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#00416a] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-[#00416a]/25"
              >
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative">

                  {/* ── Basic Result ── */}
                  {mode === "basic" && (
                    <>
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">
                            Maturity Value
                          </p>
                          <p className="text-4xl font-extrabold mt-1">
                            {fmtC(result.maturityValue)}
                          </p>
                          <p className="text-white/50 text-[11px] mt-0.5">
                            after {totalYears} years · {totalYears * 12} months
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                          <Landmark size={22} className="text-sky-300" />
                        </div>
                      </div>

                      {/* Progress bars */}
                      <div className="space-y-2.5 mb-5">
                        {[
                          { label: "Total Invested",    value: result.totalInvested,  pct: (result.totalInvested  / (result.maturityValue || 1)) * 100, color: "bg-sky-400" },
                          { label: "Interest Earned",   value: result.totalInterest,  pct: (result.totalInterest  / (result.maturityValue || 1)) * 100, color: "bg-emerald-400" },
                        ].map(({ label, value, pct, color }) => (
                          <div key={label}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white/70 flex items-center gap-1.5">
                                <span className={`w-2 h-2 rounded-full ${color} shrink-0`} /> {label}
                              </span>
                              <span className="text-white font-semibold">{fmtC(value)}</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className={`h-full ${color} rounded-full transition-all duration-700`}
                                style={{ width: `${Math.min(100, pct)}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Breakdown */}
                      <div className="space-y-2 border-t border-white/10 pt-4">
                        {[
                          { l: "Annual Deposit",    v: fmtINR(annualDeposit) },
                          { l: "Total Invested",    v: fmtINR(result.totalInvested) },
                          { l: "Interest Earned",   v: fmtINR(result.totalInterest) },
                          { l: "Tax Saving (80C)",  v: fmtINR(result.taxSaving) },
                        ].map(({ l, v }) => (
                          <div key={l} className="flex justify-between text-xs">
                            <span className="text-white/60">{l}</span>
                            <span className="text-white font-semibold">{v}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                          <span className="text-white/80 font-bold">Maturity Value</span>
                          <span className="text-white font-extrabold">{fmtC(result.maturityValue)}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-white/60">Absolute Returns</span>
                          <span className="text-emerald-400 font-bold">
                            {result.totalInvested > 0
                              ? `${Math.round((result.totalInterest / result.totalInvested) * 100)}%`
                              : "0%"}
                          </span>
                        </div>
                      </div>

                      {/* Donut */}
                      <div className="mt-5 flex items-center justify-center gap-5 border-t border-white/10 pt-5">
                        <Donut invested={result.totalInvested} interest={result.totalInterest} size={100} />
                        <div className="space-y-2.5 text-xs">
                          {[
                            { label: "Invested",  value: result.totalInvested, color: "bg-[#00416a] border-2 border-white/30" },
                            { label: "Interest",  value: result.totalInterest, color: "bg-sky-400" },
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
                    </>
                  )}

                  {/* ── Loan Result ── */}
                  {mode === "loan" && (
                    <>
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">
                            Loan Eligibility
                          </p>
                          <p className="text-4xl font-extrabold mt-1">{fmtINR(loanAmount)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">
                            25% of Year {loanYear - 2} balance
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                          <CreditCard size={22} className="text-sky-300" />
                        </div>
                      </div>

                      {loanAmount > 0 ? (
                        <>
                          <div className="space-y-2.5 mb-5">
                            {[
                              { label: "Loan Amount",       value: loanAmount,          pct: 100,  color: "bg-sky-400" },
                              { label: "Total Interest",    value: loanRes.totalInterest, pct: (loanRes.totalInterest / (loanRes.totalPayable || 1)) * 100, color: "bg-orange-400" },
                            ].map(({ label, value, pct, color }) => (
                              <div key={label}>
                                <div className="flex justify-between text-xs mb-1">
                                  <span className="text-white/70 flex items-center gap-1.5">
                                    <span className={`w-2 h-2 rounded-full ${color} shrink-0`} /> {label}
                                  </span>
                                  <span className="text-white font-semibold">{fmtINR(value)}</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                  <div className={`h-full ${color} rounded-full transition-all duration-700`}
                                    style={{ width: `${Math.min(100, Math.max(pct, 2))}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-2 border-t border-white/10 pt-4">
                            {[
                              { l: "Loan Amount",        v: fmtINR(loanAmount) },
                              { l: "Loan Rate",          v: `${(ppfRate + 1).toFixed(1)}% p.a.` },
                              { l: "Repayment Period",   v: `${loanMonths} Months` },
                              { l: "Monthly Payment",    v: fmtINR(loanRes.emi) },
                              { l: "Total Interest",     v: fmtINR(loanRes.totalInterest) },
                            ].map(({ l, v }) => (
                              <div key={l} className="flex justify-between text-xs">
                                <span className="text-white/60">{l}</span>
                                <span className="text-white font-semibold">{v}</span>
                              </div>
                            ))}
                            <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                              <span className="text-white/80 font-bold">Total Repayable</span>
                              <span className="text-white font-extrabold">{fmtINR(loanRes.totalPayable)}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="bg-orange-500/20 border border-orange-400/30 rounded-xl p-4 text-center">
                          <p className="text-orange-200 text-sm font-semibold">
                            Loan not available in Year {loanYear}
                          </p>
                          <p className="text-orange-300/70 text-xs mt-1">
                            Select Year 3, 4, 5, or 6 for PPF loan eligibility
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  {/* ── Withdrawal Result ── */}
                  {mode === "withdrawal" && (
                    <>
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">
                            Max Withdrawal — Year {withdrawYear}
                          </p>
                          <p className="text-4xl font-extrabold mt-1">{fmtINR(withdrawAmount)}</p>
                          <p className="text-white/50 text-[11px] mt-0.5">Tax-free withdrawal</p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                          <ArrowUpRight size={22} className="text-sky-300" />
                        </div>
                      </div>

                      <div className="space-y-2.5 mb-5">
                        {[
                          { label: "PPF Balance (Year " + withdrawYear + ")", value: withdrawRow?.closingBal ?? 0, pct: 100, color: "bg-sky-400" },
                          { label: "Withdrawal Amount",  value: withdrawAmount, pct: withdrawRow ? (withdrawAmount / withdrawRow.closingBal) * 100 : 0, color: "bg-emerald-400" },
                        ].map(({ label, value, pct, color }) => (
                          <div key={label}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white/70 flex items-center gap-1.5">
                                <span className={`w-2 h-2 rounded-full ${color} shrink-0`} /> {label}
                              </span>
                              <span className="text-white font-semibold">{fmtINR(value)}</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className={`h-full ${color} rounded-full transition-all duration-700`}
                                style={{ width: `${Math.min(100, Math.max(pct, 2))}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2 border-t border-white/10 pt-4">
                        {[
                          { l: "Total Deposited",       v: fmtINR(withdrawRow?.totalDeposited ?? 0) },
                          { l: "PPF Balance",           v: fmtINR(withdrawRow?.closingBal ?? 0) },
                          { l: `Year ${withdrawYear - 4} Balance`, v: fmtINR(prevY4Row?.closingBal ?? 0) },
                          { l: "50% Eligibility",       v: fmtINR(withdrawAmount) },
                        ].map(({ l, v }) => (
                          <div key={l} className="flex justify-between text-xs">
                            <span className="text-white/60">{l}</span>
                            <span className="text-white font-semibold">{v}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                          <span className="text-white/80 font-bold">Max Withdrawal</span>
                          <span className="text-white font-extrabold">{fmtINR(withdrawAmount)}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>

              {/* CTA Card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 space-y-3">
                <p className="text-sm font-bold text-[#00416a]">Need PPF & Tax Planning Help?</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our CA team helps you maximise 80C deductions, compare PPF vs ELSS vs NPS, plan your ITR with PPF, and file your tax return accurately — from ₹499.
                </p>
                <button onClick={handleWA}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25d366] text-white text-sm font-bold hover:bg-[#1ebe5d] active:scale-[0.97] transition-all shadow-lg shadow-green-500/20">
                  <MessageCircle size={15} /> Ask on WhatsApp
                </button>
                <Link href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00416a] text-white text-sm font-bold hover:bg-[#002b45] active:scale-[0.97] transition-all">
                  Free Consultation <ArrowRight size={14} />
                </Link>
              </div>

              {/* Tax Saving Card */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3">
                <BadgeCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-emerald-700">💡 Annual Tax Saving with PPF</p>
                  <p className="text-[11px] mt-1 leading-relaxed text-emerald-600">
                    Investing ₹{fmtC(annualDeposit)} in PPF saves{" "}
                    <strong>{fmtINR(result.taxSaving)}</strong> in income tax annually (30% slab + 4% cess).
                    Over 15 years, total tax saving: <strong>{fmtINR(result.taxSaving * 15)}</strong>.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <p className="text-xs font-bold text-[#00416a] mb-3">PPF Key Facts</p>
                <div className="space-y-2">
                  {[
                    { label: "Current Rate",       value: "7.1% p.a.",         icon: Percent },
                    { label: "Min. Investment",    value: "₹500 per year",     icon: IndianRupee },
                    { label: "Max. Investment",    value: "₹1,50,000 per year",icon: IndianRupee },
                    { label: "Lock-in Period",     value: "15 Years",          icon: Lock },
                    { label: "Tax Benefit",        value: "Section 80C (EEE)", icon: BadgeCheck },
                    { label: "Loan Available",     value: "Year 3 to Year 6",  icon: CreditCard },
                    { label: "Partial Withdrawal", value: "From Year 7",       icon: ArrowUpRight },
                    { label: "Risk Level",         value: "Zero (Govt. Backed)",icon: Shield },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-gray-500">
                        <Icon size={11} className="text-[#00416a]" /> {label}
                      </span>
                      <span className="font-bold text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ YEAR-WISE TABLE ══════════ */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Growth Schedule
                </span>
                <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                  Year-wise PPF Balance Sheet
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar size={13} />
                <span>{totalYears} year projection</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="bg-[#00416a] text-white text-xs font-bold uppercase tracking-wide px-4 py-3">
                <div className="grid grid-cols-6 gap-2">
                  <span>Year</span>
                  <span className="text-right">Opening Bal</span>
                  <span className="text-right">Deposit</span>
                  <span className="text-right text-sky-300">Interest</span>
                  <span className="text-right">Closing Bal</span>
                  <span className="text-right text-emerald-300">Total Invested</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-50">
                {tableRows.map((row, i) => (
                  <div key={row.year}
                    className={`grid grid-cols-6 gap-2 px-4 py-2.5 text-sm hover:bg-[#00416a]/4 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                    <span className="font-bold text-[#00416a]">Year {row.year}</span>
                    <span className="text-right text-gray-600 font-semibold text-xs">{fmtC(row.openingBal)}</span>
                    <span className="text-right text-gray-700 font-semibold text-xs">{fmtC(row.deposit)}</span>
                    <span className="text-right text-sky-600 font-bold text-xs">{fmtC(row.interest)}</span>
                    <span className="text-right text-[#00416a] font-extrabold text-xs">{fmtC(row.closingBal)}</span>
                    <span className="text-right text-emerald-600 font-semibold text-xs">{fmtC(row.totalDeposited)}</span>
                  </div>
                ))}
              </div>

              {result.yearlyData.length > 10 && (
                <div className="px-4 py-3 border-t border-gray-100 text-center">
                  <button onClick={() => setShowTable(p => !p)}
                    className="text-[#00416a] text-xs font-bold hover:underline transition">
                    {showTable ? "Show Less ↑" : `View All ${result.yearlyData.length} Years ↓`}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SEO CONTENT ══════════ */}
      <section className="py-20 bg-[#f8fbfd] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Complete PPF Guide
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                PPF — Public Provident Fund Complete Guide 2024-25
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                Everything you need to know about PPF investment — interest calculation, tax benefits, withdrawal rules, loan eligibility and extension options.
              </p>
            </motion.div>

            <div className="space-y-14">

              {/* Block 1 */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    What Is PPF &amp; Why Is It India's Most Popular Investment?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    <strong>Public Provident Fund (PPF)</strong> is a long-term, government-backed savings scheme in India, introduced under the PPF Act 1968 and managed by the National Savings Institute under the Ministry of Finance. It remains one of India's most trusted investment instruments for over 50 years due to its unique combination of <strong>guaranteed returns, complete tax exemption, government backing, and accessibility</strong> to all Indian individuals.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    PPF accounts can be opened at any nationalised bank, major private banks (HDFC, ICICI, Axis), post offices, and India Post Payments Bank. The minimum annual deposit is just ₹500, making it accessible to all income groups, while the maximum is ₹1,50,000 per year — which is also the Section 80C deduction limit, making PPF a perfect vehicle for full 80C utilisation.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The PPF's <strong>EEE (Exempt-Exempt-Exempt)</strong> tax status is unmatched: your annual contribution is deductible under Section 80C, the interest credited every year is completely tax-free, and the maturity proceeds are fully exempt from income tax. Even LTCG tax (which now applies to ELSS funds above ₹1.25 lakh) does not apply to PPF. This makes PPF the most tax-efficient guaranteed-return investment available to Indian individuals.
                  </p>
                </div>

                {/* PPF at a Glance Table */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-5 py-3">
                    <p className="text-white font-bold text-sm">PPF at a Glance — FY 2024-25</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["Interest Rate",         "7.1% p.a. (compounded annually)"],
                      ["Interest Calculation",  "Min. balance 5th–last day of month"],
                      ["Minimum Deposit",       "₹500 per financial year"],
                      ["Maximum Deposit",       "₹1,50,000 per financial year"],
                      ["Deposit Frequency",     "Lump sum or 12 instalments"],
                      ["Lock-in Period",        "15 years (from FY of opening)"],
                      ["Extension",             "5-year blocks, unlimited times"],
                      ["Tax Deduction",         "Section 80C (up to ₹1.5L)"],
                      ["Interest Taxability",   "Completely tax-free (EEE)"],
                      ["Maturity Taxability",   "Completely tax-free"],
                      ["Premature Closure",     "After 5 yrs (specific grounds only)"],
                      ["Nominee Facility",      "Yes — individual or multiple nominees"],
                    ].map(([field, value], i) => (
                      <div key={field}
                        className={`grid grid-cols-2 px-4 py-2.5 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                        <span className="font-semibold text-gray-600">{field}</span>
                        <span className="text-gray-700 font-medium text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Block 2 — How Interest Is Calculated */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden order-2 md:order-1">
                  <div className="bg-sky-600 px-5 py-3">
                    <p className="text-white font-bold text-sm">PPF Interest Calculation Example</p>
                  </div>
                  <div className="p-5 space-y-3 text-xs">
                    <div className="bg-[#f8fbfd] border border-[#deeef7] rounded-xl p-3">
                      <p className="font-bold text-[#00416a] mb-1">Scenario: ₹1,50,000 deposited on April 1</p>
                      <div className="space-y-1">
                        {[
                          ["Min. balance (5th–31st March)", "₹1,50,000"],
                          ["Annual interest @ 7.1%",        "₹10,650"],
                          ["Interest credited on 31st March","₹10,650"],
                          ["Opening balance Year 2",         "₹1,60,650"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span className="text-gray-500">{k}</span>
                            <span className="font-bold text-[#00416a]">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-3">
                      <p className="font-bold text-orange-700 mb-1">⚠️ Deposit after 5th April — Loss of interest!</p>
                      <div className="space-y-1">
                        {[
                          ["Deposit on April 10",           "₹1,50,000"],
                          ["Min. balance April (5th–30th)", "₹0 (missed!)"],
                          ["Interest for April",            "₹0"],
                          ["Annual loss",                   "~₹888"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span className="text-orange-600">{k}</span>
                            <span className="font-bold text-orange-700">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                      <p className="text-xs text-emerald-700 font-semibold">
                        ✓ Always deposit before April 5 each year to earn interest for all 12 months. Over 15 years, this discipline can add ₹10,000–₹15,000 in extra interest.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    How PPF Interest Is Calculated — The 5th Rule
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    PPF interest is computed monthly on the <strong>minimum balance between the 5th and last day of each calendar month</strong>. This seemingly technical rule has a crucial implication: if you deposit money into your PPF account before the 5th of a month, it earns interest for that month. If you deposit after the 5th, it misses that month's interest entirely.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Even though interest is calculated monthly, it is <strong>credited to your account only once — on March 31st</strong> (the last day of each financial year). So while you see the balance growing only annually, the computation happens every month. The credited interest in March then becomes part of your balance for the next year, earning further interest — this is the compounding effect.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong>Practical tip:</strong> Set up a standing instruction from your savings bank account to transfer ₹1,50,000 to your PPF account on April 1st each year. This ensures your full annual contribution earns 12 months of interest, maximizing your PPF returns over the 15-year tenure.
                  </p>
                </div>
              </motion.div>

              {/* Block 3 — 80C + Rules */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">
                  PPF Rules — Everything You Need to Know
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Lock,
                      title: "Lock-in & Premature Closure",
                      color: "bg-blue-50 border-blue-100",
                      iconBg: "bg-blue-100", iconColor: "text-blue-600",
                      points: [
                        "15-year mandatory lock-in from FY of opening",
                        "Premature closure allowed after 5 years",
                        "Only for illness, higher education, or NRI status",
                        "Penalty: 1% reduction in interest rate",
                        "Complete withdrawal; account closes",
                      ],
                    },
                    {
                      icon: CreditCard,
                      title: "Loan Against PPF",
                      color: "bg-emerald-50 border-emerald-100",
                      iconBg: "bg-emerald-100", iconColor: "text-emerald-600",
                      points: [
                        "Available from 3rd to 6th financial year",
                        "Maximum: 25% of balance at end of 2nd preceding year",
                        "Interest: PPF rate + 1% (currently 8.1%)",
                        "Repayment: within 36 months",
                        "If not repaid: rate becomes PPF + 6%",
                      ],
                    },
                    {
                      icon: ArrowUpRight,
                      title: "Partial Withdrawal Rules",
                      color: "bg-violet-50 border-violet-100",
                      iconBg: "bg-violet-100", iconColor: "text-violet-600",
                      points: [
                        "Available from 7th financial year onwards",
                        "Once per financial year only",
                        "Max: 50% of balance at end of 4th preceding year or preceding year (lower)",
                        "Completely tax-free",
                        "Account remains active after withdrawal",
                      ],
                    },
                    {
                      icon: RefreshCw,
                      title: "Extension After 15 Years",
                      color: "bg-orange-50 border-orange-100",
                      iconBg: "bg-orange-100", iconColor: "text-orange-600",
                      points: [
                        "Extend in 5-year blocks, unlimited times",
                        "With contribution: deposits continue + interest",
                        "Without contribution: only interest, no deposits",
                        "Submit Form H within 1 year of maturity",
                        "Withdrawals allowed in extended period",
                      ],
                    },
                    {
                      icon: BadgeCheck,
                      title: "Section 80C Tax Benefit",
                      color: "bg-sky-50 border-sky-100",
                      iconBg: "bg-sky-100", iconColor: "text-sky-600",
                      points: [
                        "Deduction under Section 80C up to ₹1,50,000/year",
                        "Available under Old Tax Regime only",
                        "Tax saving: up to ₹46,800 at 30% slab + cess",
                        "Interest is exempt under Section 10(11)",
                        "Maturity is fully exempt — no tax at any stage",
                      ],
                    },
                    {
                      icon: Target,
                      title: "Who Should Invest in PPF?",
                      color: "bg-rose-50 border-rose-100",
                      iconBg: "bg-rose-100", iconColor: "text-rose-600",
                      points: [
                        "Salaried individuals for stable 80C deduction",
                        "Risk-averse investors wanting guaranteed returns",
                        "Long-term retirement planners (15+ year horizon)",
                        "Self-employed / professionals for tax saving",
                        "Parents building corpus for child's education",
                      ],
                    },
                  ].map(({ icon: Icon, title, color, iconBg, iconColor, points }) => (
                    <div key={title} className={`${color} border rounded-2xl p-4`}>
                      <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center mb-3`}>
                        <Icon size={16} className={iconColor} />
                      </div>
                      <p className="text-sm font-extrabold text-[#00416a] mb-3">{title}</p>
                      <ul className="space-y-1.5">
                        {points.map(p => (
                          <li key={p} className="text-xs text-gray-600 flex items-start gap-1.5">
                            <span className="text-[#00416a] mt-0.5 shrink-0">•</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Block 4 — Strategies */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-5">
                    7 Strategies to Maximise PPF Returns
                  </h3>
                  <div className="space-y-3">
                    {[
                      { step: "01", title: "Invest Before April 5 Every Year", desc: "The single most impactful PPF tip. Depositing before April 5 ensures your full amount earns interest for all 12 months. Over 15 years, this can add ₹10,000–₹20,000 extra interest." },
                      { step: "02", title: "Invest the Maximum ₹1,50,000", desc: "Max out PPF every year to utilise full Section 80C benefit and compound the maximum principal. At 7.1% for 15 years, ₹1.5L/year grows to ₹40.68 lakh — vs ₹13.56L for ₹50K/year." },
                      { step: "03", title: "Open a PPF Account Early in Life", desc: "PPF is a 15-year instrument. Opening at age 25 means maturity at 40 — when financial needs are high. You can then extend further. Earlier you start, larger the EEE tax-free corpus at maturity." },
                      { step: "04", title: "Consider PPF for Your Child", desc: "You can open a PPF account in the name of a minor child (you are the guardian). This creates an additional corpus for the child's education/marriage, with separate 80C benefit within the ₹1.5L family limit." },
                      { step: "05", title: "Use PPF Extension Strategically", desc: "After 15 years, if you don't need the money, extend without contributions. Your entire ₹40+ lakh balance earns 7.1% tax-free (≈₹2.88L/year) — a risk-free, tax-free 'income' in retirement." },
                      { step: "06", title: "Combine PPF with ELSS for Balanced Portfolio", desc: "PPF gives guaranteed debt returns; ELSS gives equity growth potential. Together they form the ideal 80C portfolio — conservative stability (PPF) + aggressive growth (ELSS) for total Section 80C utilisation." },
                      { step: "07", title: "Avoid PPF Loan if Possible", desc: "PPF loan at 8.1% (PPF rate + 1%) is cheap but reduces your compounding base. Only use PPF loan for genuine emergencies. The locked corpus should be left undisturbed to maximise 15-year compounding." },
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

                {/* PPF Historical Rates */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-5">Historical PPF Interest Rates</h3>
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                    <div className="bg-[#00416a] px-5 py-3">
                      <p className="text-white font-bold text-sm">PPF Rate History (FY 2000–2025)</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {[
                        ["FY 2000-01 to 2001-02", "11.00%"],
                        ["FY 2002-03",             "9.50%"],
                        ["FY 2003-04 to 2011-12",  "8.00%"],
                        ["FY 2012-13",             "8.80%"],
                        ["FY 2013-14 to 2015-16",  "8.70%"],
                        ["FY 2016-17 (Apr–Sep)",   "8.10%"],
                        ["FY 2016-17 (Oct–Mar)",   "8.00%"],
                        ["FY 2017-18",             "7.90%"],
                        ["FY 2018-19",             "8.00%"],
                        ["FY 2019-20",             "7.90%"],
                        ["FY 2020-21 onwards",     "7.10%"],
                        ["Q1 FY 2024-25",          "7.10% (Current)"],
                      ].map(([period, rate], i) => (
                        <div key={period}
                          className={`grid grid-cols-2 px-4 py-2.5 text-xs ${i === 11 ? "bg-[#00416a]/5 font-bold" : i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                          <span className={`text-gray-600 font-medium ${i === 11 ? "text-[#00416a] font-bold" : ""}`}>{period}</span>
                          <span className={`text-right font-bold ${i === 11 ? "text-[#00416a] text-sm" : "text-gray-700"}`}>{rate}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-400 px-4 py-2">
                      PPF rate has been 7.1% since Jan 2020. Rate is reviewed quarterly but unchanged for 4+ years.
                    </p>
                  </div>
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
                Why Use Taxvio's PPF Calculator?
              </h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Zap,       text: "Real-time results as you adjust sliders — maturity value, interest, tax saving all update instantly without clicking Calculate" },
                { icon: BarChart3, text: "Interactive SVG bar chart showing year-wise invested amount vs. interest earned — visualise the power of compounding clearly" },
                { icon: Target,    text: "3-in-1 calculator — PPF Returns, Loan eligibility (Year 3–6), and Partial Withdrawal (Year 7+) in a single tool" },
                { icon: RefreshCw, text: "Extension modelling — calculate maturity for 15 years + 1, 2, or 3 five-year extensions to see the benefit of staying invested longer" },
                { icon: Calculator,text: "Instrument comparison — PPF vs NSC vs ELSS vs FD vs Sukanya Samriddhi — see which gives the highest maturity value side-by-side" },
                { icon: BadgeCheck,text: "Historical PPF rate data from FY 2000 — understand how the rate has evolved and plan with realistic rate assumptions" },
                { icon: Shield,    text: "April 5 rule highlight — our calculator and guide explains the most commonly missed PPF optimization — depositing before April 5 each year" },
                { icon: FileText,  text: "CA-backed ITR filing — our team claims PPF deduction under Section 80C, verifies 80C limit, and files your return with maximum deductions from ₹499" },
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
      <section className="py-20 bg-[#f8fbfd] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                PPF Calculator — Frequently Asked Questions
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-3"
              itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((f, i) => (
                <motion.div key={i} variants={fadeUp}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${faqOpen === i ? "border-[#00416a]/30 shadow-md" : "border-gray-200"}`}
                  itemScope itemType="https://schema.org/Question">
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-start gap-4 hover:bg-white transition"
                    aria-expanded={faqOpen === i}>
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
                        itemScope itemType="https://schema.org/Answer">
                        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4" itemProp="text">
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
            <motion.p variants={fadeUp}
              className="text-xs font-bold uppercase tracking-widest text-[#00416a] mb-6">
              Related Tools &amp; Services
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "SIP Calculator",          desc: "Monthly SIP returns & goal planning", href: "/tools/sip-calculator",           icon: TrendingUp },
                { title: "Income Tax Calculator",   desc: "FY 2024-25 old & new regime",        href: "/tools/income-tax-calculator",    icon: Calculator },
                { title: "EMI Calculator",          desc: "Home, Car & Personal Loan EMI",       href: "/tools/emi-calculator",           icon: Landmark },
                { title: "ITR Filing – Salaried",   desc: "80C claims & ITR from ₹499",        href: "/serviceslist/income-tax/itr-salaried", icon: FileText },
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

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="py-16 px-6 bg-[#f8fbfd]">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Zap size={11} className="text-sky-300" /> CA-Assisted Tax &amp; Investment Planning
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Maximise Your 80C Benefits This Year
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Taxvio's CA team helps you plan PPF + ELSS + NPS for maximum 80C deduction, compare tax regimes, file your ITR accurately, and save the maximum tax legally — all from ₹499.
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
                PPF Planning · 80C Optimization · ITR Filing · SIP Selection · Old vs New Regime · 100% Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}