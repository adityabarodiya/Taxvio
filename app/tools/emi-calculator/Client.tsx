// app/tools/emi-calculator/client.tsx
"use client";

import Link from "next/link";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  ChevronDown,
  Phone,
  MessageCircle,
  FileText,
  Shield,
  BadgeCheck,
  Zap,
  IndianRupee,
  TrendingDown,
  RefreshCw,
  PieChart,
  Home,
  Car,
  Briefcase,
  Info,
  BarChart3,
  Landmark,
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
type LoanType = "home" | "car" | "personal";

interface AmortizationRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

interface YearlyRow {
  year: number;
  principal: number;
  interest: number;
  balance: number;
}

interface EMIResult {
  emi: number;
  totalInterest: number;
  totalPayable: number;
  amortization: AmortizationRow[];
}

// ─── Loan Config ──────────────────────────────────────────────────────────────
const LOAN_CONFIG = {
  home: {
    label: "Home Loan",
    icon: Home,
    minAmount: 500000,
    maxAmount: 100000000,
    defaultAmount: 3000000,
    stepAmount: 100000,
    minRate: 6.0,
    maxRate: 20.0,
    defaultRate: 8.5,
    minTenure: 1,
    maxTenure: 30,
    defaultTenure: 20,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    activeBg: "bg-[#00416a]",
  },
  car: {
    label: "Car Loan",
    icon: Car,
    minAmount: 100000,
    maxAmount: 10000000,
    defaultAmount: 800000,
    stepAmount: 25000,
    minRate: 7.0,
    maxRate: 18.0,
    defaultRate: 9.0,
    minTenure: 1,
    maxTenure: 8,
    defaultTenure: 5,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    activeBg: "bg-[#00416a]",
  },
  personal: {
    label: "Personal Loan",
    icon: Briefcase,
    minAmount: 10000,
    maxAmount: 5000000,
    defaultAmount: 500000,
    stepAmount: 10000,
    minRate: 8.0,
    maxRate: 36.0,
    defaultRate: 14.0,
    minTenure: 1,
    maxTenure: 7,
    defaultTenure: 3,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    activeBg: "bg-[#00416a]",
  },
} as const;

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is EMI and how is it calculated?",
    a: "EMI (Equated Monthly Instalment) is the fixed monthly payment made to a lender to repay a loan. It is calculated using the formula: EMI = [P × r × (1+r)ⁿ] / [(1+r)ⁿ − 1], where P is the principal loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the loan tenure in months. Our calculator uses this same reducing-balance formula used by all RBI-regulated banks and NBFCs in India.",
  },
  {
    q: "What is the difference between a fixed and floating interest rate loan?",
    a: "A fixed-rate loan has an interest rate that remains constant throughout the tenure, keeping your EMI unchanged. A floating-rate loan (common for home loans linked to MCLR or RBI repo rate) has an interest rate that fluctuates with market conditions — your EMI or tenure may change accordingly. This calculator computes EMI for a fixed rate. For floating-rate loans, use the current rate as an estimate and recalculate when the rate changes.",
  },
  {
    q: "What is an amortization schedule?",
    a: "An amortization schedule is a detailed month-by-month table showing how each EMI payment is split between principal repayment and interest charges, along with the outstanding loan balance after each payment. In the early months of a loan, a larger portion of the EMI goes toward interest. Over time, the principal component increases while the interest component decreases — this is the reducing-balance effect. Taxvio's EMI Calculator provides both monthly and yearly amortization schedules.",
  },
  {
    q: "Does prepayment help reduce my total interest burden?",
    a: "Yes — significantly. Making partial prepayments (lump sum payments over and above your regular EMI) directly reduces the outstanding principal. Since interest is calculated on the reducing balance, a lower principal means less interest in all future months. Prepayment in the early years of a loan saves far more interest than prepaying in later years. Most banks allow part-prepayment on home loans (with no penalty after a few years) and on personal/car loans as per the loan agreement.",
  },
  {
    q: "What is the ideal EMI-to-income ratio?",
    a: "Financial experts and most lenders in India recommend keeping your total EMI obligations (all loans combined) below 40–50% of your net monthly take-home salary. For home loans specifically, many banks cap eligibility at 50–55% of net income. A lower ratio ensures you maintain healthy cash flow for savings, emergencies, and daily expenses. Use this calculator to check whether your proposed EMI fits within this limit before applying for a loan.",
  },
  {
    q: "Which loan type has the lowest EMI for the same loan amount?",
    a: "Home loans typically have the lowest EMI for the same principal amount because they offer the longest tenure (up to 30 years) and lowest interest rates (currently 8–9% p.a. for top banks). Car loans are mid-range (7–18% p.a., up to 8 years). Personal loans carry the highest EMI due to higher interest rates (8–36% p.a.) and shorter tenures (up to 7 years). Use Taxvio's loan type tabs above to instantly compare EMIs across all three loan types.",
  },
  {
    q: "Can I get a home loan with a balance transfer to reduce my EMI?",
    a: "Yes. A home loan balance transfer (also called refinancing) allows you to shift your outstanding loan to a new lender offering a lower interest rate. Even a 0.5–1% reduction in rate can save lakhs of rupees in interest on a large home loan over a long tenure. The best time to do a balance transfer is in the first half of the tenure, when the outstanding principal is still high. Taxvio can help you evaluate balance transfer options and connect you with suitable lenders.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

function fmtCompact(n: number): string {
  if (n >= 10_000_000) return `₹${(n / 10_000_000).toFixed(2)} Cr`;
  if (n >= 100_000) return `₹${(n / 100_000).toFixed(2)} L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
  return fmt(n);
}

// ─── EMI Calculation ──────────────────────────────────────────────────────────
function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): EMIResult {
  if (principal <= 0 || annualRate <= 0 || tenureMonths <= 0)
    return { emi: 0, totalInterest: 0, totalPayable: 0, amortization: [] };

  const r = annualRate / 12 / 100;
  const emi =
    (principal * r * Math.pow(1 + r, tenureMonths)) /
    (Math.pow(1 + r, tenureMonths) - 1);

  let balance = principal;
  const amortization: AmortizationRow[] = [];

  for (let m = 1; m <= tenureMonths; m++) {
    const interest = balance * r;
    const principalPaid = emi - interest;
    balance = Math.max(balance - principalPaid, 0);
    amortization.push({
      month: m,
      emi: Math.round(emi),
      principal: Math.round(principalPaid),
      interest: Math.round(interest),
      balance: Math.round(balance),
    });
  }

  const totalPayable = Math.round(emi * tenureMonths);
  const totalInterest = totalPayable - principal;

  return {
    emi: Math.round(emi),
    totalInterest,
    totalPayable,
    amortization,
  };
}

// ─── Subcomponents ────────────────────────────────────────────────────────────

// Slider Row
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
          <IndianRupee size={11} className="text-[#00416a]" />
          <span className="text-[#00416a] font-extrabold text-sm">{display}</span>
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

// ─── Main Component ───────────────────────────────────────────────────────────
export default function EMICalculatorClient() {
  const [loanType, setLoanType] = useState<LoanType>("home");
  const [loanAmount, setLoanAmount] = useState<number>(LOAN_CONFIG.home.defaultAmount);
  const [interestRate, setInterestRate] = useState<number>(LOAN_CONFIG.home.defaultRate);
  const [tenureYears, setTenureYears] = useState<number>(LOAN_CONFIG.home.defaultTenure);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [scheduleTab, setScheduleTab] = useState<"monthly" | "yearly">("yearly");
  const [showAll, setShowAll] = useState(false);

  const cfg = LOAN_CONFIG[loanType];

  const handleLoanTypeChange = useCallback((type: LoanType) => {
    const c = LOAN_CONFIG[type];
    setLoanType(type);
    setLoanAmount(c.defaultAmount);
    setInterestRate(c.defaultRate);
    setTenureYears(c.defaultTenure);
    setShowAll(false);
  }, []);

  const result = useMemo(
    () => calculateEMI(loanAmount, interestRate, tenureYears * 12),
    [loanAmount, interestRate, tenureYears]
  );

  const yearlyRows: YearlyRow[] = useMemo(() => {
    const rows: YearlyRow[] = [];
    for (let y = 1; y <= tenureYears; y++) {
      const slice = result.amortization.slice((y - 1) * 12, y * 12);
      rows.push({
        year: y,
        principal: slice.reduce((s, r) => s + r.principal, 0),
        interest: slice.reduce((s, r) => s + r.interest, 0),
        balance: slice[slice.length - 1]?.balance ?? 0,
      });
    }
    return rows;
  }, [result.amortization, tenureYears]);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Taxvio! I used your EMI Calculator. Loan: ${fmtCompact(loanAmount)}, Rate: ${interestRate}%, Tenure: ${tenureYears} yrs. My EMI is ${fmt(result.emi)}. I need guidance on this loan.`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  // Donut SVG
  const totalForDonut = result.totalPayable || 1;
  const principalPct = (loanAmount / totalForDonut) * 100;
  const interestPct = (result.totalInterest / totalForDonut) * 100;

  const R = 70;
  const CX = 90;
  const CY = 90;
  const circumference = 2 * Math.PI * R;
  const principalDash = (principalPct / 100) * circumference;
  const interestDash = (interestPct / 100) * circumference;

  const displayedMonthly = showAll
    ? result.amortization
    : result.amortization.slice(0, 12);

  return (
    <main className="min-h-screen bg-[#f8fbfd] font-sans text-gray-800">

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-[#00416a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeUp}
              className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-white transition">Financial Tools</Link>
              <span>/</span>
              <span className="text-white/80">EMI Calculator</span>
            </motion.nav>

            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide"
            >
              <Calculator size={12} className="text-sky-300" />
              Home · Car · Personal Loan · Free Tool
            </motion.span>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              EMI Calculator
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                Home, Car &amp; Personal Loan
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-white/70 text-base md:text-lg leading-relaxed"
            >
              Instantly calculate your monthly EMI, total interest payable, and get a
              complete amortization schedule for any loan — all in real time, 100% free.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap justify-center gap-2"
            >
              {[
                { icon: Zap, label: "Instant Results" },
                { icon: BarChart3, label: "Amortization Schedule" },
                { icon: RefreshCw, label: "Compare Tenures" },
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

        {/* Wave */}
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path
            d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
            fill="#f8fbfd"
          />
        </svg>
      </section>

      {/* ══════════ CALCULATOR SECTION ══════════ */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* ── Loan Type Tabs ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mb-7"
          >
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-lg mx-auto"
            >
              {(Object.entries(LOAN_CONFIG) as [LoanType, typeof LOAN_CONFIG.home][]).map(
                ([type, c]) => {
                  const Icon = c.icon;
                  return (
                    <button
                      key={type}
                      onClick={() => handleLoanTypeChange(type)}
                      className={`py-3 px-3 rounded-xl text-left transition-all duration-200 ${
                        loanType === type
                          ? "bg-[#00416a] text-white shadow-lg shadow-[#00416a]/20"
                          : "text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={`mb-1 ${loanType === type ? "text-sky-300" : "text-gray-400"}`}
                      />
                      <p
                        className={`text-xs font-bold leading-tight ${
                          loanType === type ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {c.label}
                      </p>
                    </button>
                  );
                }
              )}
            </motion.div>
          </motion.div>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">

            {/* ── LEFT — INPUTS ── */}
            <div className="space-y-5">

              {/* Input Card */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-6"
              >
                <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                  <Landmark size={17} className="text-[#00416a]" />
                  Loan Details
                </h2>

                {/* Loan Amount */}
                <SliderRow
                  label="Loan Amount"
                  value={loanAmount}
                  min={cfg.minAmount}
                  max={cfg.maxAmount}
                  step={cfg.stepAmount}
                  onChange={setLoanAmount}
                  display={fmtCompact(loanAmount).replace("₹", "")}
                  markers={
                    loanType === "home"
                      ? ["₹5L", "₹25L", "₹50L", "₹75L", "₹1Cr+"]
                      : loanType === "car"
                      ? ["₹1L", "₹25L", "₹50L", "₹75L", "₹1Cr"]
                      : ["₹10K", "₹12.5L", "₹25L", "₹37.5L", "₹50L"]
                  }
                  tooltip="Total loan amount you wish to borrow from the bank or NBFC."
                />

                {/* Interest Rate */}
                <SliderRow
                  label="Annual Interest Rate"
                  value={interestRate}
                  min={cfg.minRate}
                  max={cfg.maxRate}
                  step={0.05}
                  onChange={setInterestRate}
                  display={`${interestRate.toFixed(2)}%`}
                  markers={[
                    `${cfg.minRate}%`,
                    `${((cfg.minRate + cfg.maxRate) / 2).toFixed(0)}%`,
                    `${cfg.maxRate}%`,
                  ]}
                  tooltip="Annual interest rate offered by your bank or NBFC. Compare rates across lenders before deciding."
                />

                {/* Tenure */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Loan Tenure
                      </label>
                      <div className="group relative">
                        <Info size={12} className="text-gray-300 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-gray-800 text-white text-[10px] rounded-lg p-2.5 opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 leading-relaxed shadow-xl">
                          Longer tenure = lower EMI but higher total interest.
                          Shorter tenure = higher EMI but lower interest cost overall.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#00416a]/8 border border-[#00416a]/20 rounded-xl px-3 py-1.5">
                      <span className="text-[#00416a] font-extrabold text-sm">
                        {tenureYears} {tenureYears === 1 ? "Year" : "Years"}
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={cfg.minTenure}
                    max={cfg.maxTenure}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-[#00416a] h-1.5 cursor-pointer"
                    aria-label="Loan tenure"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>{cfg.minTenure} Yr</span>
                    <span>{Math.round((cfg.minTenure + cfg.maxTenure) / 2)} Yrs</span>
                    <span>{cfg.maxTenure} Yrs</span>
                  </div>
                </div>

                {/* Formula info */}
                <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3.5">
                  <Info size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-blue-700 mb-0.5">
                      EMI Formula (Reducing Balance Method)
                    </p>
                    <code className="text-[11px] text-blue-600 font-mono">
                      EMI = [P × r × (1+r)ⁿ] / [(1+r)ⁿ − 1]
                    </code>
                    <p className="text-[10px] text-blue-500 mt-0.5">
                      P = Principal · r = Monthly rate · n = Tenure (months)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Comparison Card — Tenure Impact */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
              >
                <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                  <RefreshCw size={15} />
                  Tenure Impact — Compare EMI vs Total Interest
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-2 pr-4 text-gray-500 font-semibold uppercase tracking-wide">
                          Tenure
                        </th>
                        <th className="text-right py-2 pr-4 text-gray-500 font-semibold uppercase tracking-wide">
                          Monthly EMI
                        </th>
                        <th className="text-right py-2 text-gray-500 font-semibold uppercase tracking-wide">
                          Total Interest
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[5, 10, 15, 20, 25, 30]
                        .filter((y) => y >= cfg.minTenure && y <= cfg.maxTenure)
                        .map((y) => {
                          const r = calculateEMI(loanAmount, interestRate, y * 12);
                          const isActive = y === tenureYears;
                          return (
                            <tr
                              key={y}
                              onClick={() => setTenureYears(y)}
                              className={`cursor-pointer transition-all ${
                                isActive
                                  ? "bg-[#00416a]/5"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <td
                                className={`py-2.5 pr-4 font-bold ${
                                  isActive ? "text-[#00416a]" : "text-gray-700"
                                }`}
                              >
                                {y} Yrs
                                {isActive && (
                                  <span className="ml-1.5 text-[9px] bg-[#00416a] text-white px-1.5 py-0.5 rounded-full">
                                    Selected
                                  </span>
                                )}
                              </td>
                              <td
                                className={`py-2.5 pr-4 text-right font-bold ${
                                  isActive ? "text-[#00416a]" : "text-gray-600"
                                }`}
                              >
                                {fmt(r.emi)}
                              </td>
                              <td
                                className={`py-2.5 text-right font-semibold ${
                                  isActive ? "text-red-600" : "text-gray-500"
                                }`}
                              >
                                {fmtCompact(r.totalInterest)}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-gray-400 mt-3 text-center">
                  Click any row to select that tenure
                </p>
              </motion.div>
            </div>

            {/* ── RIGHT — RESULTS (STICKY) ── */}
            <div className="space-y-5 lg:sticky lg:top-24">

              {/* Main Result Card */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#00416a] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-[#00416a]/25"
              >
                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle,#fff 1px,transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">
                        Monthly EMI
                      </p>
                      <p className="text-4xl font-extrabold mt-1">{fmt(result.emi)}</p>
                      <p className="text-white/50 text-[11px] mt-0.5">
                        for {tenureYears} {tenureYears === 1 ? "year" : "years"}
                        &nbsp;·&nbsp;{tenureYears * 12} months
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                      <Calculator size={22} className="text-sky-300" />
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-2.5 mb-5">
                    {[
                      {
                        label: "Principal Amount",
                        value: loanAmount,
                        pct: (loanAmount / (result.totalPayable || 1)) * 100,
                        color: "bg-sky-400",
                      },
                      {
                        label: "Total Interest",
                        value: result.totalInterest,
                        pct:
                          (result.totalInterest / (result.totalPayable || 1)) * 100,
                        color: "bg-orange-400",
                      },
                    ].map(({ label, value, pct, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white/70 flex items-center gap-1.5">
                            <span
                              className={`w-2 h-2 rounded-full ${color} shrink-0`}
                            />
                            {label}
                          </span>
                          <span className="text-white font-semibold">
                            {fmtCompact(value)}
                          </span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${color} rounded-full transition-all duration-700`}
                            style={{ width: `${Math.min(100, pct)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Breakdown rows */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {[
                      { label: "Principal Amount", value: loanAmount },
                      { label: "Total Interest", value: result.totalInterest },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between text-xs">
                        <span className="text-white/60">{label}</span>
                        <span className="text-white font-semibold">{fmt(value)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                      <span className="text-white/80 font-bold">Total Payable</span>
                      <span className="text-white font-extrabold">
                        {fmt(result.totalPayable)}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Interest / Principal Ratio</span>
                      <span className="text-sky-300 font-bold">
                        {result.totalPayable > 0
                          ? (
                              (result.totalInterest / loanAmount) *
                              100
                            ).toFixed(1) + "%"
                          : "—"}
                      </span>
                    </div>
                  </div>

                  {/* Mini Donut */}
                  <div className="mt-4 flex items-center justify-center gap-6 border-t border-white/10 pt-4">
                    <svg
                      width="90"
                      height="90"
                      viewBox="0 0 180 180"
                      aria-label="Principal vs Interest chart"
                    >
                      <circle
                        cx={CX} cy={CY} r={R}
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="24"
                      />
                      {/* Interest arc */}
                      <circle
                        cx={CX} cy={CY} r={R}
                        fill="none"
                        stroke="#fb923c"
                        strokeWidth="24"
                        strokeDasharray={`${Math.max(0, interestDash - 3)} ${circumference}`}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${CX} ${CY})`}
                      />
                      {/* Principal arc */}
                      <circle
                        cx={CX} cy={CY} r={R}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="24"
                        strokeDasharray={`${Math.max(0, principalDash - 3)} ${circumference}`}
                        strokeDashoffset={-interestDash}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${CX} ${CY})`}
                      />
                    </svg>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-sky-400 shrink-0" />
                        <div>
                          <p className="text-white/60">Principal</p>
                          <p className="text-white font-bold">
                            {result.totalPayable > 0
                              ? ((loanAmount / result.totalPayable) * 100).toFixed(1)
                              : 0}
                            %
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-orange-400 shrink-0" />
                        <div>
                          <p className="text-white/60">Interest</p>
                          <p className="text-white font-bold">
                            {result.totalPayable > 0
                              ? (
                                  (result.totalInterest / result.totalPayable) *
                                  100
                                ).toFixed(1)
                              : 0}
                            %
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 space-y-3"
              >
                <p className="text-sm font-bold text-[#00416a]">
                  Need Help with Loan or Tax Planning?
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our CA team helps you evaluate the best loan options, plan
                  home loan tax deductions under Section 24B & 80C, and file
                  your ITR — all in one place.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25d366] text-white text-sm font-bold hover:bg-[#1ebe5d] active:scale-[0.97] transition-all shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={15} />
                  Share EMI &amp; Get CA Help
                </button>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00416a] text-white text-sm font-bold hover:bg-[#002b45] active:scale-[0.97] transition-all"
                >
                  Free Consultation <ArrowRight size={14} />
                </Link>
              </motion.div>

              {/* Tip Card */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3"
              >
                <BadgeCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-emerald-700">
                    💡 Home Loan Tax Benefit
                  </p>
                  <p className="text-[11px] mt-0.5 leading-relaxed text-emerald-600">
                    Principal repayment is deductible under Section 80C (up to
                    ₹1.5L) and interest under Section 24B (up to ₹2L p.a.) —
                    saving you up to ₹1.05L in tax annually under the old
                    regime.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ AMORTIZATION SCHEDULE ══════════ */}
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
                  Repayment Schedule
                </span>
                <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                  Amortization Schedule
                </h2>
              </div>
              <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
                {(["yearly", "monthly"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => { setScheduleTab(tab); setShowAll(false); }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      scheduleTab === tab
                        ? "bg-[#00416a] text-white shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Table header */}
              <div className="grid bg-[#00416a] text-white text-xs font-bold uppercase tracking-wide px-4 py-3">
                {scheduleTab === "yearly" ? (
                  <div className="grid grid-cols-4 gap-2">
                    <span>Year</span>
                    <span className="text-right">Principal Paid</span>
                    <span className="text-right">Interest Paid</span>
                    <span className="text-right">Balance</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-5 gap-2">
                    <span>Month</span>
                    <span className="text-right">EMI</span>
                    <span className="text-right">Principal</span>
                    <span className="text-right">Interest</span>
                    <span className="text-right">Balance</span>
                  </div>
                )}
              </div>

              {/* Table body */}
              <div className="divide-y divide-gray-50">
                {scheduleTab === "yearly"
                  ? yearlyRows.map((row, i) => (
                      <div
                        key={row.year}
                        className={`grid grid-cols-4 gap-2 px-4 py-3 text-sm hover:bg-[#00416a]/4 transition-colors ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <span className="font-bold text-[#00416a]">
                          Year {row.year}
                        </span>
                        <span className="text-right font-semibold text-sky-600">
                          {fmt(row.principal)}
                        </span>
                        <span className="text-right font-semibold text-orange-500">
                          {fmt(row.interest)}
                        </span>
                        <span className="text-right text-gray-500">
                          {fmt(row.balance)}
                        </span>
                      </div>
                    ))
                  : displayedMonthly.map((row, i) => (
                      <div
                        key={row.month}
                        className={`grid grid-cols-5 gap-2 px-4 py-3 text-xs hover:bg-[#00416a]/4 transition-colors ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <span className="font-bold text-[#00416a]">
                          M{row.month}
                        </span>
                        <span className="text-right font-semibold text-gray-700">
                          {fmt(row.emi)}
                        </span>
                        <span className="text-right font-semibold text-sky-600">
                          {fmt(row.principal)}
                        </span>
                        <span className="text-right font-semibold text-orange-500">
                          {fmt(row.interest)}
                        </span>
                        <span className="text-right text-gray-500">
                          {fmt(row.balance)}
                        </span>
                      </div>
                    ))}
              </div>

              {/* Show more */}
              {scheduleTab === "monthly" &&
                result.amortization.length > 12 && (
                  <div className="px-4 py-3 border-t border-gray-100 text-center">
                    <button
                      onClick={() => setShowAll((p) => !p)}
                      className="text-[#00416a] text-xs font-bold hover:underline transition"
                    >
                      {showAll
                        ? "Show Less ↑"
                        : `View All ${result.amortization.length} Months ↓`}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Complete EMI Guide
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Everything You Need to Know About EMI
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                A complete guide to understanding Equated Monthly Instalments,
                amortization, and smart loan repayment strategies in India.
              </p>
            </motion.div>

            <div className="space-y-14">

              {/* Block 1 */}
              <motion.div
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-8 items-start"
              >
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    What Is an EMI & How Is It Calculated?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    An <strong>Equated Monthly Instalment (EMI)</strong> is the
                    fixed amount a borrower pays to the lender every month until
                    the loan is fully repaid. Each EMI has two components —
                    the <strong>principal repayment</strong> and the{" "}
                    <strong>interest charge</strong>. The ratio of these two
                    components changes every month — in the early months, the
                    interest portion is higher, while in later months, more of
                    the EMI goes toward reducing the principal. This is called
                    the <strong>reducing-balance method</strong>, the standard
                    used by all banks and RBI-regulated NBFCs in India.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our EMI Calculator uses the standard formula:{" "}
                    <code className="bg-blue-50 text-[#00416a] px-1.5 py-0.5 rounded text-xs font-mono">
                      EMI = [P × r × (1+r)ⁿ] / [(1+r)ⁿ − 1]
                    </code>{" "}
                    where P is the principal, r is the monthly rate, and n is
                    the tenure in months — giving you results identical to your
                    bank's loan offer letter.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-5 py-3">
                    <p className="text-white font-bold text-sm">
                      EMI Example — ₹30L Home Loan @ 8.5% for 20 Years
                    </p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["Loan Amount", "₹30,00,000"],
                      ["Interest Rate", "8.5% p.a."],
                      ["Tenure", "20 Years (240 months)"],
                      ["Monthly EMI", "₹26,093"],
                      ["Total Interest", "₹32,62,320"],
                      ["Total Payable", "₹62,62,320"],
                    ].map(([label, value], i) => (
                      <div
                        key={label}
                        className={`grid grid-cols-2 px-4 py-3 text-xs ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <span className="font-medium text-gray-600">
                          {label}
                        </span>
                        <span className="font-bold text-[#00416a] text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 px-4 py-2">
                    *Total interest ≈ 109% of principal — illustrating the real
                    cost of long-tenure borrowing
                  </p>
                </div>
              </motion.div>

              {/* Block 2 — Loan Types */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">
                  Home Loan vs Car Loan vs Personal Loan — Key Differences
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Home,
                      title: "Home Loan",
                      rate: "8% – 10% p.a.",
                      tenure: "Up to 30 Years",
                      amount: "Up to ₹10 Crore",
                      tax: "Section 80C (principal) + Section 24B (interest)",
                      color: "bg-blue-50 border-blue-100",
                      iconColor: "text-blue-600",
                      iconBg: "bg-blue-100",
                    },
                    {
                      icon: Car,
                      title: "Car Loan",
                      rate: "7% – 18% p.a.",
                      tenure: "Up to 8 Years",
                      amount: "Up to ₹1 Crore",
                      tax: "No direct tax benefit",
                      color: "bg-emerald-50 border-emerald-100",
                      iconColor: "text-emerald-600",
                      iconBg: "bg-emerald-100",
                    },
                    {
                      icon: Briefcase,
                      title: "Personal Loan",
                      rate: "8% – 36% p.a.",
                      tenure: "Up to 7 Years",
                      amount: "Up to ₹50 Lakh",
                      tax: "Tax benefit if used for business",
                      color: "bg-violet-50 border-violet-100",
                      iconColor: "text-violet-600",
                      iconBg: "bg-violet-100",
                    },
                  ].map(
                    ({
                      icon: Icon,
                      title,
                      rate,
                      tenure,
                      amount,
                      tax,
                      color,
                      iconColor,
                      iconBg,
                    }) => (
                      <div
                        key={title}
                        className={`${color} border rounded-2xl p-5`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-3`}
                        >
                          <Icon size={18} className={iconColor} />
                        </div>
                        <p className="text-sm font-extrabold text-[#00416a] mb-3">
                          {title}
                        </p>
                        {[
                          ["Interest Rate", rate],
                          ["Max Tenure", tenure],
                          ["Loan Amount", amount],
                          ["Tax Benefit", tax],
                        ].map(([k, v]) => (
                          <div key={k} className="mb-1.5">
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
                              {k}
                            </p>
                            <p className="text-xs text-gray-700 font-semibold">
                              {v}
                            </p>
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Block 3 — Tips */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">
                  7 Smart Tips to Reduce Your Total Loan Cost
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      step: "01",
                      title: "Maximise Your Down Payment",
                      desc: "A larger down payment directly reduces your principal and all future interest. For a home loan, a 20–30% down payment can save lakhs in total interest.",
                    },
                    {
                      step: "02",
                      title: "Negotiate Your Interest Rate",
                      desc: "Your CIBIL score is your biggest bargaining chip. A score above 750 qualifies you for the lowest rates. Even 0.5% lower rate on ₹50L for 20 years saves ₹5–7 lakh.",
                    },
                    {
                      step: "03",
                      title: "Choose Optimal Tenure",
                      desc: "Don't always pick the longest tenure just for a lower EMI. Use this calculator to find the sweet spot where EMI is affordable but total interest is minimized.",
                    },
                    {
                      step: "04",
                      title: "Make Annual Prepayments",
                      desc: "Prepay using your annual bonus or windfall income. Prepaying ₹1 lakh extra in Year 1 on a ₹50L, 20-year loan saves ~₹3.5L in total interest.",
                    },
                    {
                      step: "05",
                      title: "Consider Balance Transfer",
                      desc: "If RBI cuts repo rates and new loan rates fall, consider shifting your home loan to a lender offering a lower rate. Even 1% reduction can save significant interest.",
                    },
                    {
                      step: "06",
                      title: "Claim All Tax Benefits",
                      desc: "Home loan borrowers can save up to ₹1.05L/year in taxes: ₹1.5L principal under 80C (30% slab = ₹45K) + ₹2L interest under 24B (30% slab = ₹60K).",
                    },
                    {
                      step: "07",
                      title: "Avoid Multiple Loans Simultaneously",
                      desc: "Multiple EMIs strain cash flow and reduce eligibility for future credit. Pay off high-interest personal/car loans before taking a home loan.",
                    },
                    {
                      step: "08",
                      title: "Set Up Auto-Debit for EMI",
                      desc: "Missing an EMI damages your CIBIL score and incurs late payment penalties. Set up an ECS/NACH auto-debit mandate to ensure on-time payment every month.",
                    },
                  ].map(({ step, title, desc }) => (
                    <div
                      key={step}
                      className="flex gap-3 p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {desc}
                        </p>
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Taxvio
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Why Use Taxvio's EMI Calculator?
              </h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: Zap,
                  text: "Real-time calculation as you move sliders — no page reload, no delay",
                },
                {
                  icon: BarChart3,
                  text: "Complete amortization schedule — both monthly and yearly views with one click",
                },
                {
                  icon: RefreshCw,
                  text: "Tenure comparison table — instantly see EMI and interest for all tenures side by side",
                },
                {
                  icon: Shield,
                  text: "Uses standard RBI-compliant reducing-balance formula — 100% accurate results",
                },
                {
                  icon: Home,
                  text: "Supports Home Loan, Car Loan, and Personal Loan with realistic configurable ranges",
                },
                {
                  icon: TrendingDown,
                  text: "Visual principal vs. interest donut chart — instantly see your true borrowing cost",
                },
                {
                  icon: BadgeCheck,
                  text: "CA-backed advice — connect with our team via WhatsApp to optimize your loan strategy",
                },
                {
                  icon: MessageCircle,
                  text: "100% free, no registration required, no data stored — use it unlimited times",
                },
              ].map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  className="flex items-start gap-3.5 p-4 bg-white border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                    <Icon
                      size={16}
                      className="text-[#00416a] group-hover:text-white transition-all"
                    />
                  </div>
                  <span className="text-sm text-gray-700 font-medium leading-relaxed mt-0.5">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 bg-[#f8fbfd] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                FAQ
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                EMI Calculator — Frequently Asked Questions
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
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    faqOpen === i
                      ? "border-[#00416a]/30 shadow-md"
                      : "border-gray-200"
                  }`}
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-start gap-4 hover:bg-white transition"
                    aria-expanded={faqOpen === i}
                  >
                    <span
                      className="text-sm font-semibold text-gray-800 leading-snug"
                      itemProp="name"
                    >
                      {f.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        faqOpen === i
                          ? "bg-[#00416a] rotate-180"
                          : "bg-gray-100"
                      }`}
                    >
                      <ChevronDown
                        size={15}
                        className={faqOpen === i ? "text-white" : "text-gray-500"}
                      />
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-widest text-[#00416a] mb-6"
            >
              Related Tools &amp; Services
            </motion.p>
            <motion.div
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                {
                  title: "Income Tax Calculator",
                  desc: "FY 2024-25 old & new regime",
                  href: "/tools/income-tax-calculator",
                  icon: Calculator,
                },
                {
                  title: "ITR Filing – Salaried",
                  desc: "Form 16 based ITR from ₹499",
                  href: "/serviceslist/income-tax/itr-salaried",
                  icon: FileText,
                },
                {
                  title: "Home Loan Tax Benefit",
                  desc: "Sec 24B + 80C deductions",
                  href: "/serviceslist/income-tax/itr-salaried",
                  icon: Home,
                },
                {
                  title: "GST Registration",
                  desc: "GSTIN in 3–5 working days",
                  href: "/serviceslist/gst/gst-registration",
                  icon: Shield,
                },
              ].map(({ title, desc, href, icon: Icon }) => (
                <motion.div key={title} variants={fadeUp}>
                  <Link
                    href={href}
                    className="group flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#00416a]/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                      <Icon
                        size={16}
                        className="text-[#00416a] group-hover:text-white transition-all"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition truncate">
                        {title}
                      </p>
                      <p className="text-xs text-gray-400 truncate">{desc}</p>
                    </div>
                    <ArrowRight
                      size={13}
                      className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto"
                    />
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
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle,#fff 1px,transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Zap size={11} className="text-sky-300" />
                CA-Assisted Tax &amp; Loan Guidance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Need Help with Your Loan or Tax Filing?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Taxvio's CA team helps you maximize home loan tax deductions,
                file your ITR accurately, and navigate GST & company compliance
                — all in one place, starting at just ₹499.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
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
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
              <p className="mt-6 text-white/40 text-xs">
                ITR Filing · GST · Company Registration · Loan Guidance · 100%
                Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}