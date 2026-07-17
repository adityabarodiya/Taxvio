"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ArrowRight,
  ChevronDown,
  Phone,
  MessageCircle,
  FileText,
  Shield,
  Zap,
  IndianRupee,
  Info,
  BarChart3,
  Target,
  Calculator,
  Layers,
  Calendar,
  X,
  ChevronUp,
  BadgeCheck,
  PieChart,
} from "lucide-react";
import Footar from "@/components/Footar";

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE = "918937980366";
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
const fmt = (n: number) =>
  "₹" + Math.round(Math.max(0, n)).toLocaleString("en-IN");

const fmtC = (n: number): string => {
  n = Math.max(0, n);
  if (n >= 10_000_000) return `₹${(n / 10_000_000).toFixed(2)} Cr`;
  if (n >= 100_000) return `₹${(n / 100_000).toFixed(2)} L`;
  if (n >= 1_000) return `₹${(n / 1_000).toFixed(1)}K`;
  return fmt(n);
};

// ─── Calculations ─────────────────────────────────────────────────────────────
function calcSIP(
  monthly: number,
  rate: number,
  years: number,
  inflation = 6
): SIPResult {
  const r = rate / 100 / 12;
  const n = years * 12;
  const maturityValue =
    monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const totalInvested = monthly * n;
  const wealthGained = maturityValue - totalInvested;
  const inflAdjusted = maturityValue / Math.pow(1 + inflation / 100, years);
  const absoluteRet =
    totalInvested > 0 ? (wealthGained / totalInvested) * 100 : 0;

  const yearlyData: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    const m = y * 12;
    const cor = monthly * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
    const inv = monthly * m;
    yearlyData.push({
      year: y,
      invested: Math.round(inv),
      returns: Math.round(cor - inv),
      corpus: Math.round(cor),
      inflationAdjusted: Math.round(
        cor / Math.pow(1 + inflation / 100, y)
      ),
    });
  }

  return {
    totalInvested: Math.round(totalInvested),
    wealthGained: Math.round(wealthGained),
    maturityValue: Math.round(maturityValue),
    inflationAdjustedValue: Math.round(inflAdjusted),
    absoluteReturns: Math.round(absoluteRet * 10) / 10,
    yearlyData,
  };
}

function calcTargetSIP(
  targetAmount: number,
  rate: number,
  years: number
): TargetResult {
  const r = rate / 100 / 12;
  const n = years * 12;
  const requiredSIP =
    (targetAmount * r) / (Math.pow(1 + r, n) - 1) / (1 + r);
  const totalInvested = requiredSIP * n;
  const wealthGained = targetAmount - totalInvested;

  const yearlyData: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    const m = y * 12;
    const cor = requiredSIP * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
    const inv = requiredSIP * m;
    yearlyData.push({
      year: y,
      invested: Math.round(inv),
      returns: Math.round(cor - inv),
      corpus: Math.round(cor),
    });
  }

  return {
    requiredSIP: Math.round(requiredSIP),
    totalInvested: Math.round(totalInvested),
    wealthGained: Math.round(wealthGained),
    yearlyData,
  };
}

function calcTopUp(
  monthly: number,
  rate: number,
  years: number,
  stepUpPct: number
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
      returns: Math.round(corpus - totalInvested),
      corpus: Math.round(corpus),
    });
    currentMonthly = currentMonthly * (1 + stepUpPct / 100);
  }

  const n = years * 12;
  const regularMaturity =
    monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

  return {
    totalInvested: Math.round(totalInvested),
    wealthGained: Math.round(corpus - totalInvested),
    maturityValue: Math.round(corpus),
    regularSIPMaturity: Math.round(regularMaturity),
    extraWealth: Math.round(corpus - regularMaturity),
    yearlyData,
  };
}

// ─── Donut Chart ──────────────────────────────────────────────────────────────
function Donut({
  invested,
  returns,
}: {
  invested: number;
  returns: number;
}) {
  const total = invested + returns || 1;
  const R = 40;
  const C = 2 * Math.PI * R;
  const iP = (invested / total) * 100;
  const rP = (returns / total) * 100;
  const iD = (iP / 100) * C;
  const rD = (rP / 100) * C;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={R}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="12"
      />
      <circle
        cx="50"
        cy="50"
        r={R}
        fill="none"
        stroke="#00416a"
        strokeWidth="12"
        strokeDasharray={`${iD} ${C}`}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r={R}
        fill="none"
        stroke="#38bdf8"
        strokeWidth="12"
        strokeDasharray={`${rD} ${C}`}
        strokeDashoffset={-iD}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y="48"
        textAnchor="middle"
        fontSize="14"
        fill="#1e293b"
        fontWeight="bold"
      >
        {Math.round(rP)}%
      </text>
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="8"
        fill="#94a3b8"
      >
        returns
      </text>
    </svg>
  );
}

// ─── Bar Chart ────────────────────────────────────────────────────────────────
function BarChart({ data }: { data: YearRow[] }) {
  const maxVal = Math.max(...data.map((d) => d.corpus), 1);
  const display =
    data.length > 15
      ? data.filter(
          (_, i) =>
            i % Math.ceil(data.length / 15) === 0 || i === data.length - 1
        )
      : data;

  return (
    <div className="space-y-2">
      {display.map((d) => {
        const pct = (d.corpus / maxVal) * 100;
        const iPct = (d.invested / maxVal) * 100;
        return (
          <div key={d.year} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-gray-600">Y{d.year}</span>
              <span className="font-bold text-[#00416a]">
                {fmtC(d.corpus)}
              </span>
            </div>
            <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[#00416a] rounded-full"
                style={{ width: `${iPct}%` }}
              />
              <div
                className="absolute left-0 top-0 h-full bg-sky-400 rounded-full"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is SIP and how is return calculated?",
    a: "SIP (Systematic Investment Plan) lets you invest fixed amount monthly in mutual fund. Returns calculated using Future Value formula: FV = P × [(1+r)ⁿ − 1] / r × (1+r). Each instalment earns compound interest for different duration, making SIPs powerful for long-term wealth.",
  },
  {
    q: "What is XIRR and how does it relate to SIP?",
    a: "XIRR (Extended Internal Rate of Return) is most accurate measure of SIP returns as it accounts for timing of each cash flow. Unlike CAGR, XIRR computes effective annualized return for multiple cash flows. Most AMCs report SIP performance in XIRR.",
  },
  {
    q: "What is Step-Up SIP?",
    a: "Step-Up SIP automatically increases monthly amount by fixed % each year, typically aligned with salary increment. Over 20 years at 12% p.a., ₹10K regular SIP grows to ~₹1 Cr, but 10% step-up SIP grows to ₹1.8-2 Cr — nearly double from same fund.",
  },
  {
    q: "Why inflation-adjusted return matters?",
    a: "Nominal maturity value doesn't account for inflation eroding purchasing power. At 6% inflation, ₹1 Cr after 20 years has purchasing power of only ~₹31L today. Our calculator shows both nominal and real (inflation-adjusted) values for realistic planning.",
  },
  {
    q: "How many SIPs can I run?",
    a: "No limit on SIP count. You can run multiple SIPs in different schemes across AMCs. Many investors run 3-5 SIPs for diversification. Only constraint is monthly cash flow — keep total SIP under 40-50% of net income.",
  },
  {
    q: "Can I pause or stop SIP anytime?",
    a: "Yes — SIPs can be paused/stopped anytime online. Most AMCs offer 1-3 month pause. When cancelled, existing investments remain and continue earning. For ELSS, each instalment locked for 3 years individually.",
  },
  {
    q: "What is minimum SIP amount?",
    a: "Minimum varies by fund: most equity funds accept ₹500/month, some ₹1,000/month. Many AMCs now offer ₹100/month SIPs. Index funds typically ₹100-500. No maximum limit.",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SIPClient() {
  const [mode, setMode] = useState<CalcMode>("returns");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showTable, setShowTable] = useState(false);

  // Returns mode
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);
  const [inflation, setInflation] = useState(6);

  // Target mode
  const [targetAmt, setTargetAmt] = useState(10000000);
  const [targetRate, setTargetRate] = useState(12);
  const [targetYrs, setTargetYrs] = useState(15);

  // Top-up mode
  const [tuMonthly, setTuMonthly] = useState(5000);
  const [tuRate, setTuRate] = useState(12);
  const [tuYears, setTuYears] = useState(20);
  const [tuStep, setTuStep] = useState(10);

  const sipRes = useMemo(
    () => calcSIP(monthly, rate, years, inflation),
    [monthly, rate, years, inflation]
  );
  const targetRes = useMemo(
    () => calcTargetSIP(targetAmt, targetRate, targetYrs),
    [targetAmt, targetRate, targetYrs]
  );
  const topupRes = useMemo(
    () => calcTopUp(tuMonthly, tuRate, tuYears, tuStep),
    [tuMonthly, tuRate, tuYears, tuStep]
  );

  const handleWA = () => {
    const msgs: Record<CalcMode, string> = {
      returns: `Hello Taxvio! SIP ${fmt(monthly)}/mo @ ${rate}% for ${years}yrs → ${fmtC(sipRes.maturityValue)}. Need advice.`,
      target: `Hello Taxvio! Need ${fmtC(targetAmt)} in ${targetYrs}yrs → SIP ${fmt(targetRes.requiredSIP)}/mo. Guide me.`,
      topup: `Hello Taxvio! Step-Up SIP ${fmt(tuMonthly)}/mo +${tuStep}% @ ${tuRate}% → ${fmtC(topupRes.maturityValue)}. Need advice.`,
    };
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(msgs[mode])}`,
      "_blank"
    );
  };

  const activeData =
    mode === "returns"
      ? sipRes.yearlyData
      : mode === "target"
      ? targetRes.yearlyData
      : topupRes.yearlyData;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ══════════ HERO ══════════ */}
      <div className="bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white">
              Tools
            </Link>
            <span>/</span>
            <span className="text-white">SIP Calculator</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur">
              <TrendingUp size={20} className="text-sky-300" />
            </div>
            <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Free Tool
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            SIP Calculator
          </h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Calculate SIP returns, find required SIP for target amount, or plan
            step-up SIP with annual increments.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { icon: Zap, label: "Instant" },
              { icon: BarChart3, label: "Charts" },
              { icon: Shield, label: "Accurate" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 backdrop-blur"
              >
                <Icon size={14} className="text-sky-300" />
                <span className="text-xs text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ TABS ══════════ */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto hide-scrollbar">
            {[
              { id: "returns", label: "Returns", icon: TrendingUp },
              { id: "target", label: "Target", icon: Target },
              { id: "topup", label: "Step-Up", icon: Layers },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setMode(id as CalcMode)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition relative flex-shrink-0 ${
                  mode === id ? "text-[#00416a]" : "text-gray-500"
                }`}
              >
                <Icon size={16} />
                {label}
                {mode === id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00416a]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {mode === "returns" && (
            <motion.div
              key="returns"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Amount */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block">
                  Monthly SIP Amount
                </label>
                <div className="relative">
                  <IndianRupee
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="number"
                    value={monthly}
                    onChange={(e) =>
                      setMonthly(Math.max(500, Number(e.target.value) || 0))
                    }
                    className="w-full pl-12 pr-4 py-4 text-2xl font-bold bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#00416a] focus:bg-white outline-none"
                  />
                </div>
                <input
                  type="range"
                  min="500"
                  max="500000"
                  step="500"
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>₹500</span>
                  <span>₹5L</span>
                </div>
              </div>

              {/* Rate */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Expected Return (%)
                  </label>
                  <span className="text-[#00416a] font-bold text-lg">
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Years */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Investment Period
                  </label>
                  <span className="text-[#00416a] font-bold text-lg">
                    {years} {years === 1 ? "Year" : "Years"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1Y</span>
                  <span>40Y</span>
                </div>
              </div>

              {/* Inflation */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Inflation Rate (%)
                  </label>
                  <span className="text-[#00416a] font-bold text-lg">
                    {inflation}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={inflation}
                  onChange={(e) => setInflation(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Result */}
              <div className="bg-gradient-to-br from-[#00416a] to-[#003257] rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-white/60 uppercase mb-1">
                      Maturity Value
                    </div>
                    <div className="text-3xl font-black">
                      {fmtC(sipRes.maturityValue)}
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                    <TrendingUp size={24} className="text-sky-300" />
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3 mb-4">
                  {[
                    { l: "Invested", v: sipRes.totalInvested, c: "bg-white" },
                    { l: "Returns", v: sipRes.wealthGained, c: "bg-sky-400" },
                  ].map(({ l, v, c }) => (
                    <div key={l}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/70">{l}</span>
                        <span className="font-bold">{fmtC(v)}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${c} rounded-full transition-all`}
                          style={{
                            width: `${
                              (v / (sipRes.maturityValue || 1)) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Breakdown */}
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="w-full flex items-center justify-between py-3 border-t border-white/10"
                >
                  <span className="text-sm font-semibold">Details</span>
                  <ChevronDown
                    size={20}
                    className={`transition ${
                      showBreakdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {showBreakdown && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 pt-3">
                        {[
                          { l: "Monthly SIP", v: fmt(monthly) },
                          { l: "Invested", v: fmt(sipRes.totalInvested) },
                          { l: "Returns", v: fmt(sipRes.wealthGained) },
                          { l: "Total", v: fmt(sipRes.maturityValue) },
                          {
                            l: "Inflation Adj.",
                            v: fmt(sipRes.inflationAdjustedValue),
                          },
                        ].map(({ l, v }) => (
                          <div
                            key={l}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-white/70">{l}</span>
                            <span className="font-semibold">{v}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Donut */}
                <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/10">
                  <Donut
                    invested={sipRes.totalInvested}
                    returns={sipRes.wealthGained}
                  />
                  <div className="space-y-2 text-xs">
                    {[
                      {
                        l: "Invested",
                        v: sipRes.totalInvested,
                        c: "bg-[#00416a] border-2 border-white/30",
                      },
                      { l: "Returns", v: sipRes.wealthGained, c: "bg-sky-400" },
                    ].map(({ l, v, c }) => (
                      <div key={l} className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${c}`} />
                        <div>
                          <div className="text-white/60">{l}</div>
                          <div className="font-bold">{fmtC(v)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                  <BarChart3 size={16} /> Year-wise Growth
                </h3>
                <BarChart data={sipRes.yearlyData} />
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold mb-2">Need Expert Advice?</h3>
                <p className="text-sm text-white/90 mb-4">
                  CA-assisted fund selection, tax planning & ITR filing from ₹499
                </p>
                <button
                  onClick={handleWA}
                  className="w-full bg-white text-emerald-600 py-3 rounded-xl font-bold"
                >
                  Talk to Expert
                </button>
              </div>
            </motion.div>
          )}

          {mode === "target" && (
            <motion.div
              key="target"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Target Amount */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block">
                  Target Corpus
                </label>
                <div className="relative">
                  <IndianRupee
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="number"
                    value={targetAmt}
                    onChange={(e) =>
                      setTargetAmt(Math.max(100000, Number(e.target.value) || 0))
                    }
                    className="w-full pl-12 pr-4 py-4 text-2xl font-bold bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#00416a] focus:bg-white outline-none"
                  />
                </div>
                <input
                  type="range"
                  min="100000"
                  max="100000000"
                  step="100000"
                  value={targetAmt}
                  onChange={(e) => setTargetAmt(Number(e.target.value))}
                  className="w-full mt-3"
                />

                {/* Quick Goals */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    { l: "₹25L", v: 2500000 },
                    { l: "₹50L", v: 5000000 },
                    { l: "₹1 Cr", v: 10000000 },
                  ].map(({ l, v }) => (
                    <button
                      key={l}
                      onClick={() => setTargetAmt(v)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-[#00416a] hover:text-white transition"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rate */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Expected Return (%)
                  </label>
                  <span className="text-[#00416a] font-bold text-lg">
                    {targetRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={targetRate}
                  onChange={(e) => setTargetRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Years */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Time Period
                  </label>
                  <span className="text-[#00416a] font-bold text-lg">
                    {targetYrs} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={targetYrs}
                  onChange={(e) => setTargetYrs(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Result */}
              <div className="bg-gradient-to-br from-[#00416a] to-[#003257] rounded-2xl p-6 text-white shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-xs text-white/60 uppercase mb-2">
                    Required Monthly SIP
                  </div>
                  <div className="text-4xl font-black">
                    {fmt(targetRes.requiredSIP)}
                  </div>
                  <div className="text-sm text-white/70 mt-2">
                    for {targetYrs} years to reach {fmtC(targetAmt)}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10 text-sm">
                  {[
                    { l: "Target", v: fmtC(targetAmt) },
                    { l: "You Invest", v: fmt(targetRes.totalInvested) },
                    { l: "Returns", v: fmt(targetRes.wealthGained) },
                  ].map(({ l, v }) => (
                    <div key={l} className="flex justify-between">
                      <span className="text-white/70">{l}</span>
                      <span className="font-bold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-[#00416a] mb-4">
                  Growth Path
                </h3>
                <BarChart data={targetRes.yearlyData} />
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold mb-2">Need Help Selecting Funds?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Our CA team helps you choose right funds for your goals
                </p>
                <button
                  onClick={handleWA}
                  className="w-full bg-white text-emerald-600 py-3 rounded-xl font-bold"
                >
                  Get Expert Guidance
                </button>
              </div>
            </motion.div>
          )}

          {mode === "topup" && (
            <motion.div
              key="topup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Starting Amount */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block">
                  Starting Monthly SIP
                </label>
                <div className="relative">
                  <IndianRupee
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="number"
                    value={tuMonthly}
                    onChange={(e) =>
                      setTuMonthly(Math.max(500, Number(e.target.value) || 0))
                    }
                    className="w-full pl-12 pr-4 py-4 text-2xl font-bold bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#00416a] focus:bg-white outline-none"
                  />
                </div>
                <input
                  type="range"
                  min="500"
                  max="500000"
                  step="500"
                  value={tuMonthly}
                  onChange={(e) => setTuMonthly(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              {/* Step Up */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Annual Step-Up (%)
                  </label>
                  <span className="text-[#00416a] font-bold text-lg">
                    {tuStep}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={tuStep}
                  onChange={(e) => setTuStep(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Your SIP in Year {tuYears}:{" "}
                  <strong>
                    {fmt(
                      Math.round(tuMonthly * Math.pow(1 + tuStep / 100, tuYears - 1))
                    )}
                  </strong>
                </p>
              </div>

              {/* Rate */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Expected Return (%)
                  </label>
                  <span className="text-[#00416a] font-bold text-lg">
                    {tuRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={tuRate}
                  onChange={(e) => setTuRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Years */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Investment Period
                  </label>
                  <span className="text-[#00416a] font-bold text-lg">
                    {tuYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={tuYears}
                  onChange={(e) => setTuYears(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Result */}
              <div className="bg-gradient-to-br from-[#00416a] to-[#003257] rounded-2xl p-6 text-white shadow-lg">
                <div className="mb-6">
                  <div className="text-xs text-white/60 uppercase mb-1">
                    Step-Up SIP Maturity
                  </div>
                  <div className="text-3xl font-black">
                    {fmtC(topupRes.maturityValue)}
                  </div>
                </div>

                {/* Comparison */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { l: "Step-Up", v: topupRes.maturityValue, h: true },
                    { l: "Regular", v: topupRes.regularSIPMaturity, h: false },
                  ].map(({ l, v, h }) => (
                    <div
                      key={l}
                      className={`p-3 rounded-xl text-center ${
                        h ? "bg-white/10 border border-white/20" : "bg-white/5"
                      }`}
                    >
                      <div className="text-xs text-white/70 mb-1">{l}</div>
                      <div className="font-bold">{fmtC(v)}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-lg">
                  <TrendingUp size={16} className="text-emerald-400" />
                  <span className="text-sm font-semibold">
                    Extra: {fmtC(topupRes.extraWealth)}
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-[#00416a] mb-4">
                  Growth Trajectory
                </h3>
                <BarChart data={topupRes.yearlyData} />
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold mb-2">
                  Maximize Your Wealth with Step-Up SIP
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  Learn how to align SIP with salary increments
                </p>
                <button
                  onClick={handleWA}
                  className="w-full bg-white text-emerald-600 py-3 rounded-xl font-bold"
                >
                  Get Strategy Guide
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ══════════ TABLE ══════════ */}
      {activeData.length > 0 && (
        <div className="bg-white py-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => setShowTable(!showTable)}
              className="w-full flex items-center justify-between mb-4"
            >
              <h3 className="text-lg font-bold text-[#00416a] flex items-center gap-2">
                <Calendar size={18} />
                Year-wise Schedule
              </h3>
              <ChevronDown
                size={20}
                className={`transition ${showTable ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {showTable && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2">
                    {activeData.map((row) => (
                      <div
                        key={row.year}
                        className="bg-gray-50 rounded-lg p-3 space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#00416a]">
                            Year {row.year}
                          </span>
                          <span className="font-bold">{fmtC(row.corpus)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <div className="text-gray-500">Invested</div>
                            <div className="font-semibold">
                              {fmtC(row.invested)}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500">Returns</div>
                            <div className="font-semibold text-sky-600">
                              {fmtC(row.returns)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* ══════════ WHY TAXVIO ══════════ */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#00416a] mb-2">
              Why Use This Calculator?
            </h2>
            <p className="text-gray-600 text-sm">
              Accurate, instant, and expert-backed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Real-time", desc: "Instant calculations" },
              {
                icon: Shield,
                title: "Accurate",
                desc: "CA-verified formulas",
              },
              {
                icon: BarChart3,
                title: "Visual",
                desc: "Charts & breakdowns",
              },
              { icon: Target, title: "3-in-1", desc: "Multiple calculators" },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-[#00416a]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#00416a]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ FAQ ══════════ */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#00416a] mb-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
                >
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ RELATED TOOLS ══════════ */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#00416a] mb-6">
            Related Tools
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "EMI Calculator",
                desc: "Loan EMI calculation",
                href: "/tools/emi-calculator",
                icon: Calculator,
              },
              {
                title: "Income Tax Calc",
                desc: "FY 2024-25",
                href: "/tools/income-tax-calculator",
                icon: PieChart,
              },
              {
                title: "GST Calculator",
                desc: "GST computation",
                href: "/tools/gst-calculator",
                icon: FileText,
              },
              {
                title: "ITR Filing",
                desc: "From ₹999",
                href: "/serviceslist/income-tax/itr-salaried",
                icon: BadgeCheck,
              },
            ].map(({ title, desc, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#00416a] hover:text-white transition group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20">
                  <Icon
                    size={20}
                    className="text-[#00416a] group-hover:text-white"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{title}</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/70">
                    {desc}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-gray-400 group-hover:text-white"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ FINAL CTA ══════════ */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003257] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield size={32} className="text-sky-300" />
          </div>
          <h2 className="text-2xl font-bold mb-3">
            Ready to Start Your SIP Journey?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Get CA-assisted fund selection, tax planning & ITR filing. Starting
            ₹499.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleWA}
              className="px-6 py-3 bg-[#25d366] hover:bg-[#1ebe5d] rounded-xl font-bold transition inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Expert
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#00416a] hover:bg-gray-100 rounded-xl font-bold transition inline-flex items-center justify-center gap-2"
            >
              Free Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <Footar />
    </main>
  );
}