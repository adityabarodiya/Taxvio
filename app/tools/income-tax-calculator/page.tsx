"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Phone,
  MessageCircle,
  FileText,
  Shield,
  BadgeCheck,
  Zap,
  IndianRupee,
  TrendingDown,
  Info,
  RefreshCw,
  Download,
  PieChart,
} from "lucide-react";
import Footar from "@/components/Footar";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const PHONE = "918937980366";

// ─── Tax Calculation Logic ────────────────────────────────────────────────────
type Regime = "new" | "old";
type AgeGroup = "below60" | "60to80" | "above80";

interface TaxInput {
  regime: Regime;
  ageGroup: AgeGroup;
  grossIncome: number;
  // Old regime deductions
  section80C: number;
  section80D: number;
  hra: number;
  lta: number;
  homeLoanInterest: number;
  nps80CCD: number;
  otherDeductions: number;
  // New regime
  standardDeduction: number;
}

interface TaxResult {
  grossIncome: number;
  totalDeductions: number;
  taxableIncome: number;
  basicTax: number;
  surcharge: number;
  healthEduCess: number;
  totalTax: number;
  effectiveRate: number;
  inHandIncome: number;
  slabBreakdown: { slab: string; tax: number; rate: string }[];
}

function calculateTax(input: TaxInput): TaxResult {
  const { regime, ageGroup, grossIncome } = input;

  // Compute deductions
  let totalDeductions = 0;
  if (regime === "old") {
    const stdDed = Math.min(50000, grossIncome); // Standard deduction for salaried
    const sec80C = Math.min(input.section80C, 150000);
    const sec80D = Math.min(input.section80D, ageGroup === "below60" ? 25000 : 50000);
    const nps = Math.min(input.nps80CCD, 50000);
    totalDeductions = stdDed + sec80C + sec80D + input.hra + input.lta +
      Math.min(input.homeLoanInterest, 200000) + nps + input.otherDeductions;
  } else {
    // New regime: only standard deduction of ₹75,000 (FY 2024-25)
    totalDeductions = Math.min(75000, grossIncome);
  }

  const taxableIncome = Math.max(0, grossIncome - totalDeductions);

  // Compute basic tax
  let basicTax = 0;
  const slabBreakdown: { slab: string; tax: number; rate: string }[] = [];

  if (regime === "new") {
    // New tax regime slabs FY 2024-25
    const slabs = [
      { limit: 300000, rate: 0, label: "Up to ₹3,00,000" },
      { limit: 700000, rate: 0.05, label: "₹3,00,001 – ₹7,00,000" },
      { limit: 1000000, rate: 0.10, label: "₹7,00,001 – ₹10,00,000" },
      { limit: 1200000, rate: 0.15, label: "₹10,00,001 – ₹12,00,000" },
      { limit: 1500000, rate: 0.20, label: "₹12,00,001 – ₹15,00,000" },
      { limit: Infinity, rate: 0.30, label: "Above ₹15,00,000" },
    ];

    // Rebate u/s 87A: if taxable income ≤ ₹7,00,000 → full tax rebate
    let prev = 0;
    for (const slab of slabs) {
      if (taxableIncome > prev) {
        const taxable = Math.min(taxableIncome, slab.limit) - prev;
        const slabTax = taxable * slab.rate;
        if (slab.rate > 0 || taxableIncome > prev) {
          slabBreakdown.push({ slab: slab.label, tax: slabTax, rate: `${slab.rate * 100}%` });
        }
        basicTax += slabTax;
        prev = slab.limit;
      }
    }
    // Rebate u/s 87A (new regime): taxable income ≤ 7,00,000 → rebate up to ₹25,000
    if (taxableIncome <= 700000) {
      basicTax = Math.max(0, basicTax - Math.min(basicTax, 25000));
    }
  } else {
    // Old tax regime slabs
    let slabs: { limit: number; rate: number; label: string }[];
    if (ageGroup === "above80") {
      slabs = [
        { limit: 500000, rate: 0, label: "Up to ₹5,00,000" },
        { limit: 1000000, rate: 0.20, label: "₹5,00,001 – ₹10,00,000" },
        { limit: Infinity, rate: 0.30, label: "Above ₹10,00,000" },
      ];
    } else if (ageGroup === "60to80") {
      slabs = [
        { limit: 300000, rate: 0, label: "Up to ₹3,00,000" },
        { limit: 500000, rate: 0.05, label: "₹3,00,001 – ₹5,00,000" },
        { limit: 1000000, rate: 0.20, label: "₹5,00,001 – ₹10,00,000" },
        { limit: Infinity, rate: 0.30, label: "Above ₹10,00,000" },
      ];
    } else {
      slabs = [
        { limit: 250000, rate: 0, label: "Up to ₹2,50,000" },
        { limit: 500000, rate: 0.05, label: "₹2,50,001 – ₹5,00,000" },
        { limit: 1000000, rate: 0.20, label: "₹5,00,001 – ₹10,00,000" },
        { limit: Infinity, rate: 0.30, label: "Above ₹10,00,000" },
      ];
    }

    let prev = 0;
    for (const slab of slabs) {
      if (taxableIncome > prev) {
        const taxable = Math.min(taxableIncome, slab.limit) - prev;
        const slabTax = taxable * slab.rate;
        slabBreakdown.push({ slab: slab.label, tax: slabTax, rate: `${slab.rate * 100}%` });
        basicTax += slabTax;
        prev = slab.limit;
      }
    }
    // Rebate u/s 87A (old regime): taxable income ≤ 5,00,000 → rebate up to ₹12,500
    if (taxableIncome <= 500000) {
      basicTax = Math.max(0, basicTax - Math.min(basicTax, 12500));
    }
  }

  // Surcharge
  let surchargeRate = 0;
  if (taxableIncome > 50000000) surchargeRate = regime === "new" ? 0.25 : 0.37;
  else if (taxableIncome > 20000000) surchargeRate = 0.25;
  else if (taxableIncome > 10000000) surchargeRate = 0.15;
  else if (taxableIncome > 5000000) surchargeRate = 0.10;
  const surcharge = basicTax * surchargeRate;

  // Health & Education Cess: 4% on (tax + surcharge)
  const healthEduCess = (basicTax + surcharge) * 0.04;
  const totalTax = basicTax + surcharge + healthEduCess;
  const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
  const inHandIncome = grossIncome - totalTax;

  return {
    grossIncome,
    totalDeductions,
    taxableIncome,
    basicTax,
    surcharge,
    healthEduCess,
    totalTax,
    effectiveRate,
    inHandIncome,
    slabBreakdown,
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

function InputField({
  label, value, onChange, tooltip, max,
}: {
  label: string; value: number; onChange: (v: number) => void; tooltip?: string; max?: number;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5">
        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{label}</label>
        {tooltip && (
          <div className="group relative">
            <Info size={12} className="text-gray-300 cursor-help" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-gray-800 text-white text-[10px] rounded-lg p-2 opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 leading-relaxed">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <IndianRupee size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="number"
          value={value === 0 ? "" : value}
          onChange={(e) => onChange(Math.max(0, Math.min(max ?? Infinity, Number(e.target.value) || 0)))}
          placeholder="0"
          className="w-full pl-8 pr-3 py-2.5 text-sm font-semibold text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a]/50 transition placeholder:text-gray-300"
        />
      </div>
    </div>
  );
}

const FAQS = [
  {
    q: "What is the difference between old and new tax regime in FY 2024-25?",
    a: "The old tax regime allows taxpayers to claim deductions under Section 80C (up to ₹1.5 lakh), Section 80D (health insurance), HRA exemption, LTA, home loan interest (Section 24B), and other deductions to reduce taxable income. The new tax regime (default from FY 2023-24) offers lower slab rates but does not allow most deductions. From FY 2024-25, the standard deduction under the new regime has been increased to ₹75,000, and the rebate under Section 87A covers income up to ₹7 lakh.",
  },
  {
    q: "Who is eligible for Section 87A rebate in FY 2024-25?",
    a: "Under the new tax regime, individual taxpayers with taxable income up to ₹7,00,000 are eligible for a rebate of up to ₹25,000 under Section 87A, effectively making income up to ₹7 lakh tax-free. Under the old tax regime, the rebate of ₹12,500 applies to taxable income up to ₹5,00,000. The rebate reduces tax payable to nil — it does not create a refund if tax is already zero.",
  },
  {
    q: "What are the income tax slab rates under the new regime for FY 2024-25?",
    a: "Under the new tax regime for FY 2024-25: income up to ₹3 lakh is nil; ₹3–7 lakh at 5%; ₹7–10 lakh at 10%; ₹10–12 lakh at 15%; ₹12–15 lakh at 20%; above ₹15 lakh at 30%. A standard deduction of ₹75,000 applies for salaried individuals. The new regime is now the default — taxpayers must explicitly opt for the old regime when filing ITR.",
  },
  {
    q: "Which tax regime is better — old or new?",
    a: "The new regime is generally better if your total deductions (80C, 80D, HRA, home loan interest, etc.) are less than approximately ₹3.75 lakh for income above ₹15 lakh. The old regime is beneficial if you have high investments under 80C, health insurance premiums, HRA claims, and home loan interest. Use Taxvio's calculator above to compare both regimes and determine which saves more tax for your specific income and deduction profile.",
  },
  {
    q: "What is the surcharge on income tax in India?",
    a: "Surcharge is levied on the tax payable (not on income) when taxable income exceeds ₹50 lakh: 10% surcharge for income between ₹50 lakh and ₹1 crore; 15% for ₹1–2 crore; 25% for ₹2–5 crore; 37% for above ₹5 crore (old regime only — capped at 25% under new regime). Health & Education Cess of 4% is levied on tax plus surcharge for all taxpayers.",
  },
  {
    q: "How is HRA exemption calculated?",
    a: "HRA (House Rent Allowance) exemption under Section 10(13A) is the minimum of: (1) actual HRA received from employer; (2) 50% of basic salary + DA for metro cities (40% for non-metro); (3) actual rent paid minus 10% of basic salary + DA. The exemption is only available to salaried individuals living in rented accommodation under the old tax regime. Under the new regime, HRA exemption is not available.",
  },
  {
    q: "What documents are needed to file ITR after calculating tax?",
    a: "To file your ITR accurately, you need: Form 16 (salary certificate from employer), Form 26AS and AIS (Annual Information Statement from Income Tax portal), bank statements, investment proofs (ELSS, PPF, LIC, home loan certificate), rent receipts if claiming HRA, health insurance premium receipts for Section 80D, and capital gains statements from broker (if applicable). Taxvio's CA team collects and processes all documents and files your ITR within 24–48 hours.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function IncomeTaxCalculatorPage() {
  const [regime, setRegime] = useState<Regime>("new");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  const [grossIncome, setGrossIncome] = useState(1200000);
  const [section80C, setSection80C] = useState(150000);
  const [section80D, setSection80D] = useState(25000);
  const [hra, setHra] = useState(120000);
  const [lta, setLta] = useState(20000);
  const [homeLoanInterest, setHomeLoanInterest] = useState(0);
  const [nps80CCD, setNps80CCD] = useState(50000);
  const [otherDeductions, setOtherDeductions] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showSlabs, setShowSlabs] = useState(false);

  const result = calculateTax({
    regime, ageGroup, grossIncome, section80C, section80D,
    hra, lta, homeLoanInterest, nps80CCD, otherDeductions,
    standardDeduction: 75000,
  });

  // Compare both regimes
  const newResult = calculateTax({
    regime: "new", ageGroup, grossIncome, section80C, section80D,
    hra, lta, homeLoanInterest, nps80CCD, otherDeductions,
    standardDeduction: 75000,
  });
  const oldResult = calculateTax({
    regime: "old", ageGroup, grossIncome, section80C, section80D,
    hra, lta, homeLoanInterest, nps80CCD, otherDeductions,
    standardDeduction: 50000,
  });

  const betterRegime = newResult.totalTax <= oldResult.totalTax ? "new" : "old";
  const taxSaving = Math.abs(newResult.totalTax - oldResult.totalTax);

  const reset = () => {
    setGrossIncome(1200000); setSection80C(150000); setSection80D(25000);
    setHra(120000); setLta(20000); setHomeLoanInterest(0);
    setNps80CCD(50000); setOtherDeductions(0);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Taxvio, I used your Income Tax Calculator. My gross income is ${fmt(grossIncome)} and total tax is ${fmt(result.totalTax)}. I need help filing my ITR.`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  // Donut chart segments
  const total = result.grossIncome || 1;
  const taxPct = (result.totalTax / total) * 100;
  const dedPct = (result.totalDeductions / total) * 100;
  const inHandPct = (result.inHandIncome / total) * 100;

  return (
    <main className="min-h-screen bg-[#f8fbfd] font-sans text-gray-800">

      {/* ════════════ HERO ════════════ */}
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
            <motion.nav variants={fadeUp} className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-white transition">Tax Tools</Link>
              <span>/</span>
              <span className="text-white/80">Income Tax Calculator</span>
            </motion.nav>

            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide">
              <Calculator size={12} className="text-sky-300" />
              FY 2024-25 · AY 2025-26 · Updated
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Income Tax Calculator
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                FY 2024-25 — Old &amp; New Regime
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
              Calculate your exact income tax liability for FY 2024-25 (AY 2025-26) under both old and new tax regimes. Compare regimes, maximise deductions, and get CA-assisted ITR filing from just ₹499.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                { icon: Zap, label: "Instant Calculation" },
                { icon: RefreshCw, label: "Old & New Regime" },
                { icon: BadgeCheck, label: "FY 2024-25 Updated" },
                { icon: Shield, label: "100% Accurate" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Icon size={11} className="text-sky-300" /> {label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
        </svg>
      </section>

      {/* ════════════ CALCULATOR ════════════ */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_400px] gap-6 items-start">

            {/* ── LEFT — INPUTS ── */}
            <div className="space-y-5">

              {/* Regime & Age selector */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-5">
                <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                  <Calculator size={17} className="text-[#00416a]" />
                  Basic Information
                </h2>

                {/* Regime Toggle */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                    Tax Regime
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-2xl">
                    {([["new", "New Regime", "FY 2024-25 default"], ["old", "Old Regime", "More deductions"]] as const).map(
                      ([val, title, sub]) => (
                        <button
                          key={val}
                          onClick={() => setRegime(val)}
                          className={`py-3 px-4 rounded-xl text-left transition-all duration-200 ${
                            regime === val
                              ? "bg-[#00416a] text-white shadow-lg shadow-[#00416a]/20"
                              : "text-gray-600 hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <p className={`text-sm font-bold ${regime === val ? "text-white" : "text-gray-800"}`}>{title}</p>
                          <p className={`text-[10px] mt-0.5 ${regime === val ? "text-white/70" : "text-gray-400"}`}>{sub}</p>
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Age Group */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Age Group</label>
                  <div className="grid grid-cols-3 gap-2">
                    {([
                      ["below60", "Below 60", "General"],
                      ["60to80", "60 – 80", "Senior"],
                      ["above80", "Above 80", "Super Senior"],
                    ] as const).map(([val, label, sub]) => (
                      <button
                        key={val}
                        onClick={() => setAgeGroup(val)}
                        className={`py-2.5 px-3 rounded-xl text-left border-2 transition-all ${
                          ageGroup === val
                            ? "border-[#00416a] bg-[#00416a]/5 text-[#00416a]"
                            : "border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-200"
                        }`}
                      >
                        <p className="text-xs font-bold">{label}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gross Income */}
                <InputField
                  label="Annual Gross Income"
                  value={grossIncome}
                  onChange={setGrossIncome}
                  tooltip="Total annual income before any deductions — includes salary, business income, capital gains, rental income, etc."
                />

                {/* Slider */}
                <div>
                  <input
                    type="range"
                    min={0}
                    max={10000000}
                    step={50000}
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(Number(e.target.value))}
                    className="w-full accent-[#00416a] h-1.5"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>₹0</span>
                    <span>₹25L</span>
                    <span>₹50L</span>
                    <span>₹75L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>

              {/* Deductions — only for old regime */}
              <AnimatePresence>
                {regime === "old" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                          <TrendingDown size={17} />
                          Deductions &amp; Exemptions
                        </h2>
                        <button
                          onClick={reset}
                          className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#00416a] transition"
                        >
                          <RefreshCw size={11} /> Reset
                        </button>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <InputField label="Section 80C" value={section80C} onChange={setSection80C} max={150000}
                          tooltip="PPF, ELSS, LIC premium, EPF, NSC, home loan principal, school fees — max ₹1,50,000" />
                        <InputField label="Section 80D (Health Insurance)" value={section80D} onChange={setSection80D} max={100000}
                          tooltip="Health insurance premium for self, family, and parents. Max ₹25,000 (below 60) or ₹50,000 (senior citizens)" />
                        <InputField label="HRA Exemption" value={hra} onChange={setHra}
                          tooltip="House Rent Allowance exempt amount. Based on rent paid, HRA received, and city (metro/non-metro)" />
                        <InputField label="LTA Exemption" value={lta} onChange={setLta}
                          tooltip="Leave Travel Allowance — exempt for domestic travel with family, twice in a block of 4 years" />
                        <InputField label="Home Loan Interest (Sec 24B)" value={homeLoanInterest} onChange={setHomeLoanInterest} max={200000}
                          tooltip="Interest paid on home loan for self-occupied property. Max deduction ₹2,00,000 per year" />
                        <InputField label="NPS (Section 80CCD(1B))" value={nps80CCD} onChange={setNps80CCD} max={50000}
                          tooltip="Additional NPS contribution over and above 80C limit. Max ₹50,000 deduction" />
                        <div className="sm:col-span-2">
                          <InputField label="Other Deductions (80G, 80E, etc.)" value={otherDeductions} onChange={setOtherDeductions}
                            tooltip="Donations to charities (80G), education loan interest (80E), savings bank interest (80TTA), royalty income (80QQB), etc." />
                        </div>
                      </div>

                      <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
                        <BadgeCheck size={15} className="text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-700 leading-relaxed">
                          Standard deduction of <strong>₹50,000</strong> is automatically applied for salaried individuals under the old regime.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {regime === "new" && (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5">
                  <div className="flex gap-3">
                    <Info size={16} className="text-[#00416a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#00416a] mb-1">New Regime — Standard Deduction of ₹75,000</p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Under the new tax regime (FY 2024-25), a standard deduction of <strong>₹75,000</strong> is automatically applied
                        for salaried individuals. Most other deductions (80C, HRA, home loan interest) are not available.
                        The new regime is the default from FY 2023-24 onwards.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Regime Comparison */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                  <RefreshCw size={15} />
                  Regime Comparison — Which Saves More?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {([
                    ["New Regime", newResult, "from-blue-500 to-indigo-600"],
                    ["Old Regime", oldResult, "from-emerald-500 to-teal-600"],
                  ] as const).map(([label, res, grad]) => (
                    <div
                      key={label}
                      className={`relative rounded-2xl p-4 overflow-hidden ${
                        (label === "New Regime" ? betterRegime === "new" : betterRegime === "old")
                          ? "ring-2 ring-[#00416a]"
                          : "border border-gray-100"
                      }`}
                    >
                      {(label === "New Regime" ? betterRegime === "new" : betterRegime === "old") && (
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${grad}`} />
                      )}
                      <p className="text-xs font-bold text-gray-500 mb-2">{label}</p>
                      <p className="text-lg font-extrabold text-[#00416a]">{fmt(res.totalTax)}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Total tax payable</p>
                      <p className="text-xs font-semibold text-gray-600 mt-1.5">{res.effectiveRate.toFixed(1)}% effective</p>
                      {(label === "New Regime" ? betterRegime === "new" : betterRegime === "old") && (
                        <span className="inline-block mt-2 text-[10px] font-bold text-[#00416a] bg-[#00416a]/8 px-2 py-0.5 rounded-full">
                          ✓ Better for you
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className={`mt-3 flex items-center gap-2 p-3 rounded-xl ${taxSaving > 0 ? "bg-green-50 border border-green-100" : "bg-gray-50 border border-gray-100"}`}>
                  <TrendingDown size={15} className="text-green-600 shrink-0" />
                  <p className="text-xs font-semibold text-green-700">
                    {taxSaving > 0
                      ? `${betterRegime === "new" ? "New" : "Old"} regime saves you ${fmt(taxSaving)} in taxes`
                      : "Both regimes have the same tax liability for your inputs"}
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT — RESULTS ── */}
            <div className="space-y-5 lg:sticky lg:top-24">

              {/* Main result card */}
              <div className="bg-[#00416a] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-[#00416a]/25">
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Total Tax Payable</p>
                      <p className="text-4xl font-extrabold mt-1">{fmt(result.totalTax)}</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                      <Calculator size={22} className="text-sky-300" />
                    </div>
                  </div>

                  {/* Mini donut visualizer */}
                  <div className="space-y-2.5 mb-5">
                    {[
                      { label: "In-hand Income", value: result.inHandIncome, pct: inHandPct, color: "bg-emerald-400" },
                      { label: "Deductions", value: result.totalDeductions, pct: dedPct, color: "bg-sky-400" },
                      { label: "Tax + Cess", value: result.totalTax, pct: taxPct, color: "bg-orange-400" },
                    ].map(({ label, value, pct, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white/70 flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                            {label}
                          </span>
                          <span className="text-white font-semibold">{fmt(value)}</span>
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
                      { label: "Gross Income", value: result.grossIncome },
                      { label: "Total Deductions", value: result.totalDeductions },
                      { label: "Taxable Income", value: result.taxableIncome },
                      { label: "Basic Tax", value: result.basicTax },
                      ...(result.surcharge > 0 ? [{ label: "Surcharge", value: result.surcharge }] : []),
                      { label: "Health & Edu Cess (4%)", value: result.healthEduCess },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between text-xs">
                        <span className="text-white/60">{label}</span>
                        <span className="text-white font-semibold">{fmt(value)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm border-t border-white/20 pt-2 mt-1">
                      <span className="text-white/80 font-bold">Total Tax</span>
                      <span className="text-white font-extrabold">{fmt(result.totalTax)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Effective Tax Rate</span>
                      <span className="text-sky-300 font-bold">{result.effectiveRate.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Monthly Tax (approx.)</span>
                      <span className="text-white font-semibold">{fmt(result.totalTax / 12)}</span>
                    </div>
                  </div>

                  {/* Slab breakdown toggle */}
                  <button
                    onClick={() => setShowSlabs(!showSlabs)}
                    className="mt-4 w-full flex items-center justify-between text-xs text-white/60 hover:text-white transition py-2 border-t border-white/10"
                  >
                    <span className="font-semibold">View Slab-wise Breakdown</span>
                    <ChevronDown size={14} className={`transition-transform ${showSlabs ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {showSlabs && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-1.5">
                          {result.slabBreakdown.map((s, i) => (
                            <div key={i} className="flex justify-between items-center text-[11px] bg-white/5 rounded-lg px-3 py-2">
                              <span className="text-white/60">{s.slab} ({s.rate})</span>
                              <span className="text-white font-semibold">{fmt(s.tax)}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 space-y-3">
                <p className="text-sm font-bold text-[#00416a]">File Your ITR with a CA — Starting ₹499</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our CA team files your ITR with 100% accuracy, maximises deductions, and handles your complete compliance — in 24–48 hours.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25d366] text-white text-sm font-bold hover:bg-[#1ebe5d] active:scale-[0.97] transition-all shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={15} /> Share & Get CA Help
                </button>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00416a] text-white text-sm font-bold hover:bg-[#002b45] active:scale-[0.97] transition-all"
                >
                  Free Consultation <ArrowRight size={14} />
                </Link>
              </div>

              {/* Regime badge */}
              <div className={`rounded-2xl p-4 flex items-start gap-3 ${betterRegime === "new" ? "bg-blue-50 border border-blue-100" : "bg-emerald-50 border border-emerald-100"}`}>
                <BadgeCheck size={16} className={betterRegime === "new" ? "text-blue-500 shrink-0 mt-0.5" : "text-emerald-500 shrink-0 mt-0.5"} />
                <div>
                  <p className={`text-xs font-bold ${betterRegime === "new" ? "text-blue-700" : "text-emerald-700"}`}>
                    Recommended: {betterRegime === "new" ? "New" : "Old"} Tax Regime
                  </p>
                  <p className={`text-[11px] mt-0.5 leading-relaxed ${betterRegime === "new" ? "text-blue-600" : "text-emerald-600"}`}>
                    Based on your inputs, the {betterRegime === "new" ? "new" : "old"} regime saves you {fmt(taxSaving)} in taxes. Our CA team will verify this before filing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SEO CONTENT — TAX GUIDE ════════════ */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Income Tax Guide
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Income Tax in India — Complete Guide for FY 2024-25
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                Everything you need to know about income tax slabs, deductions, regimes, and filing for Assessment Year 2025-26.
              </p>
            </motion.div>

            {/* Content blocks */}
            <div className="space-y-14">
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    Income Tax Slabs FY 2024-25 — New Tax Regime
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    The new tax regime is the default for FY 2024-25 (AY 2025-26). The Budget 2024 increased the standard deduction for salaried individuals from ₹50,000 to <strong>₹75,000</strong> under the new regime, and the Section 87A rebate threshold remains at ₹7,00,000 — making income up to ₹7 lakh effectively tax-free for most salaried individuals.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The new regime does not allow deductions under Section 80C, 80D, HRA exemption, LTA, home loan interest under Section 24B, or most other exemptions. However, it offers lower slab rates and reduced compliance burden — making it ideal for individuals with limited investments or who are in their early career stages.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-5 py-3">
                    <p className="text-white font-bold text-sm">New Regime — Tax Slabs FY 2024-25</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["Up to ₹3,00,000", "Nil", "0%"],
                      ["₹3,00,001 – ₹7,00,000", "₹0 – ₹20,000*", "5%"],
                      ["₹7,00,001 – ₹10,00,000", "₹20,000 – ₹50,000", "10%"],
                      ["₹10,00,001 – ₹12,00,000", "₹50,000 – ₹80,000", "15%"],
                      ["₹12,00,001 – ₹15,00,000", "₹80,000 – ₹1,40,000", "20%"],
                      ["Above ₹15,00,000", "₹1,40,000 + 30% above", "30%"],
                    ].map(([range, tax, rate], i) => (
                      <div key={i} className={`grid grid-cols-3 px-4 py-3 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                        <span className="font-medium text-gray-700">{range}</span>
                        <span className="text-gray-500 text-center">{tax}</span>
                        <span className="font-bold text-[#00416a] text-right">{rate}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 px-4 py-2">*After Section 87A rebate of ₹25,000 for income ≤ ₹7 lakh</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden order-2 md:order-1">
                  <div className="bg-emerald-600 px-5 py-3">
                    <p className="text-white font-bold text-sm">Old Regime — Tax Slabs FY 2024-25 (Below 60)</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["Up to ₹2,50,000", "Nil", "0%"],
                      ["₹2,50,001 – ₹5,00,000", "Up to ₹12,500*", "5%"],
                      ["₹5,00,001 – ₹10,00,000", "₹1,00,000 + 20% above 5L", "20%"],
                      ["Above ₹10,00,000", "₹2,00,000 + 30% above 10L", "30%"],
                    ].map(([range, tax, rate], i) => (
                      <div key={i} className={`grid grid-cols-3 px-4 py-3 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                        <span className="font-medium text-gray-700">{range}</span>
                        <span className="text-gray-500 text-center">{tax}</span>
                        <span className="font-bold text-emerald-700 text-right">{rate}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 px-4 py-2">*After Section 87A rebate of ₹12,500 for income ≤ ₹5 lakh</p>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    Old Regime — Maximise Deductions
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    The old tax regime remains available for taxpayers who actively invest in tax-saving instruments. The combined deduction limit under Section 80C alone is ₹1,50,000 — covering PPF, ELSS mutual funds, LIC premiums, EPF contributions, home loan principal repayment, children's school fees, and NSC investments.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    For a salaried individual with a home loan, the old regime can offer deductions exceeding ₹4–5 lakh annually: ₹50,000 (standard deduction) + ₹1,50,000 (80C) + ₹2,00,000 (home loan interest under Section 24B) + ₹25,000 (80D) + ₹50,000 (NPS under 80CCD(1B)) = ₹4,75,000 total deductions. At a 30% slab, this translates to over ₹1.4 lakh in tax savings.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The key break-even point: if your total deductions exceed approximately ₹3.75 lakh (for income above ₹15 lakh), the old regime saves more tax. Our calculator automatically computes both and highlights the better option.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">
                  Key Deductions Available Under Old Tax Regime
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      section: "Section 80C", limit: "₹1,50,000",
                      items: "PPF, ELSS, LIC premium, EPF, NSC, home loan principal, 5-year FD, school fees",
                      color: "bg-blue-50 border-blue-100",
                    },
                    {
                      section: "Section 80D", limit: "₹25,000–₹1,00,000",
                      items: "Health insurance premium for self, spouse, children (₹25,000) and parents (additional ₹25,000–₹50,000)",
                      color: "bg-emerald-50 border-emerald-100",
                    },
                    {
                      section: "Section 24B", limit: "₹2,00,000",
                      items: "Interest paid on home loan for self-occupied property. Unlimited deduction for let-out property",
                      color: "bg-violet-50 border-violet-100",
                    },
                    {
                      section: "HRA Exemption", limit: "Actual / 50%-40% basic",
                      items: "House Rent Allowance exempt from tax — minimum of actual HRA, 50%/40% of basic, or rent minus 10% of basic",
                      color: "bg-orange-50 border-orange-100",
                    },
                    {
                      section: "Section 80CCD(1B)", limit: "₹50,000",
                      items: "Additional NPS contribution over and above the ₹1.5 lakh 80C limit — extra ₹50,000 deduction",
                      color: "bg-sky-50 border-sky-100",
                    },
                    {
                      section: "Section 80G", limit: "50%–100% of donation",
                      items: "Donations to approved charitable institutions and funds — PM Relief Fund, NGOs, hospitals, educational institutions",
                      color: "bg-rose-50 border-rose-100",
                    },
                  ].map(({ section, limit, items, color }) => (
                    <div key={section} className={`${color} border rounded-2xl p-4`}>
                      <p className="text-sm font-bold text-[#00416a] mb-1">{section}</p>
                      <p className="text-[11px] font-semibold text-gray-500 mb-2">Max: {limit}</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{items}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                  How to File Income Tax Return After Calculating Tax
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Once you've calculated your income tax liability using this calculator, the next step is filing your <strong>Income Tax Return (ITR)</strong> on the Income Tax e-filing portal (incometax.gov.in) by the due date — generally <strong>July 31</strong> for individuals not liable to tax audit.
                    </p>
                    <p>
                      The ITR form applicable depends on your income type: <strong>ITR-1 (Sahaj)</strong> for salaried individuals with income up to ₹50 lakh from one house property and other sources; <strong>ITR-2</strong> for capital gains, multiple house properties, or foreign income; <strong>ITR-3</strong> for business or professional income; <strong>ITR-4 (Sugam)</strong> for presumptive taxation under Section 44AD/44ADA.
                    </p>
                    <p>
                      Before filing, reconcile your income with <strong>Form 26AS</strong> (tax credit statement) and <strong>AIS</strong> (Annual Information Statement) available on the IT portal. Any discrepancy between reported income and AIS can trigger a scrutiny notice under Section 143(2). Taxvio's CA team handles complete AIS reconciliation as part of our ITR filing service.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { step: "01", title: "Gather Documents", desc: "Form 16, Form 26AS, AIS, bank statements, investment proofs, rent receipts" },
                      { step: "02", title: "Choose Correct ITR Form", desc: "ITR-1/2/3/4 based on income sources and business activities" },
                      { step: "03", title: "Choose Regime", desc: "Compare old vs new regime using this calculator and select the beneficial one" },
                      { step: "04", title: "File & E-Verify", desc: "File ITR online and e-verify using Aadhaar OTP, net banking, or DSC" },
                    ].map(({ step, title, desc }) => (
                      <div key={step} className="flex gap-3 p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                          {step}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">{title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ WHY FILE WITH TAXVIO ════════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Choose Taxvio
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Why File ITR with Taxvio?</h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                { icon: BadgeCheck, text: "ICAI-certified Chartered Accountants handle your ITR — not automated software" },
                { icon: Zap, text: "ITR filed within 24–48 hours of document submission" },
                { icon: TrendingDown, text: "Maximum deductions identified — clients save ₹10,000–₹1,50,000+ in tax" },
                { icon: Shield, text: "AIS/TIS/Form 26AS reconciliation to prevent mismatch notices" },
                { icon: FileText, text: "Correct ITR form selection — ITR-1, 2, 3, 4, 5, 6, 7 all covered" },
                { icon: MessageCircle, text: "WhatsApp-first support — real-time updates, no waiting queues" },
                { icon: RefreshCw, text: "Post-filing support — scrutiny notices, revised returns, refund follow-up" },
                { icon: IndianRupee, text: "Transparent pricing from ₹499 — no hidden charges, no surprises" },
              ].map(({ icon: Icon, text }) => (
                <motion.li key={text} variants={fadeUp} className="flex items-start gap-3.5 p-4 bg-white border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all group">
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

      {/* ════════════ FAQ ════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Income Tax — Frequently Asked Questions</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((f, i) => (
                <motion.div key={i} variants={fadeUp} className={`border rounded-2xl overflow-hidden transition-all duration-200 ${faqOpen === i ? "border-[#00416a]/30 shadow-md" : "border-gray-200"}`}
                  itemScope itemType="https://schema.org/Question">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-start gap-4 hover:bg-gray-50 transition"
                    aria-expanded={faqOpen === i}
                  >
                    <span className="text-sm font-semibold text-gray-800 leading-snug" itemProp="name">{f.q}</span>
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
                        itemScope itemType="https://schema.org/Answer"
                      >
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

      {/* ════════════ RELATED TOOLS ════════════ */}
      <section className="py-14 bg-[#f8fbfd] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-[#00416a] mb-6">Related Services</motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "ITR Filing – Salaried", desc: "Form 16 based ITR from ₹499", href: "/serviceslist/income-tax/itr-salaried", icon: FileText },
                { title: "ITR Filing – Proprietor", desc: "Business income ITR from ₹1,999", href: "/serviceslist/income-tax/itr-proprietor", icon: Calculator },
                { title: "TDS Return Filing", desc: "Quarterly 24Q / 26Q returns", href: "/serviceslist/income-tax/quarterly-tds", icon: PieChart },
                { title: "Tax Audit (44AB)", desc: "Form 3CA/3CB/3CD filing", href: "/serviceslist/income-tax/income-tax-audit", icon: Shield },
              ].map(({ title, desc, href, icon: Icon }) => (
                <motion.div key={title} variants={fadeUp}>
                  <Link href={href} className="group flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#00416a]/30 hover:shadow-md transition-all duration-200">
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

      {/* ════════════ CTA ════════════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Zap size={11} className="text-sky-300" />
                File ITR in 24–48 Hours
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Ready to File Your ITR for FY 2024-25?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Let Taxvio's CA team handle your ITR filing — maximum deductions, 100% accurate, AIS reconciliation included. Share your documents on WhatsApp and get it done in 24 hours.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                >
                  <MessageCircle size={15} /> WhatsApp Us
                </button>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#00416a] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all">
                  Free Consultation <ArrowRight size={14} />
                </Link>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all">
                  <Phone size={14} /> Call Now
                </a>
              </div>
              <p className="mt-6 text-white/40 text-xs">Starting ₹499 · ITR-1, 2, 3, 4, 5, 6, 7 · CA-Assisted · 100% Online</p>
            </div>
          </div>
        </div>
      </section>
<Footar/>
    </main>
  );
}