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
  Info,
  Plus,
  Trash2,
  Copy,
  CheckCheck,
  ArrowUpDown,
  Tag,
  Building2,
  Receipt,
  Percent,
  AlertCircle,
  BarChart3,
  X,
  ChevronUp,
  Edit3,
} from "lucide-react";
import Footar from "@/components/Footar";

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE = "918937980366";
const GST_RATES = [0, 3, 5, 12, 18, 28] as const;
type GSTRate = 0 | 3 | 5 | 12 | 18 | 28;
type CalcMode = "add" | "remove";
type TaxType = "intra" | "inter";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const round2 = (n: number) => Math.round(n * 100) / 100;

function fmtINR(n: number, decimals = 2): string {
  return (
    "₹" +
    Math.max(0, n).toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
}

function fmtC(n: number): string {
  n = Math.max(0, n);
  if (n >= 10_000_000) return `₹${(n / 10_000_000).toFixed(2)} Cr`;
  if (n >= 100_000) return `₹${(n / 100_000).toFixed(2)} L`;
  if (n >= 1_000) return `₹${(n / 1_000).toFixed(1)}K`;
  return fmtINR(n, 0);
}

// ─── GST Calculation ──────────────────────────────────────────────────────────
interface GSTResult {
  taxableAmount: number;
  gstAmount: number;
  cgst: number;
  sgst: number;
  igst: number;
  totalAmount: number;
  effectiveRate: number;
}

function computeGST(
  amount: number,
  rate: number,
  mode: CalcMode,
  taxType: TaxType
): GSTResult {
  let taxableAmount: number;
  let gstAmount: number;

  if (mode === "add") {
    taxableAmount = amount;
    gstAmount = round2((amount * rate) / 100);
  } else {
    taxableAmount = round2((amount * 100) / (100 + rate));
    gstAmount = round2(amount - taxableAmount);
  }

  const totalAmount = round2(taxableAmount + gstAmount);
  const halfGST = round2(gstAmount / 2);
  const cgst = taxType === "intra" ? halfGST : 0;
  const sgst = taxType === "intra" ? round2(gstAmount - halfGST) : 0;
  const igst = taxType === "inter" ? gstAmount : 0;
  const effectiveRate =
    taxableAmount > 0 ? round2((gstAmount / taxableAmount) * 100) : 0;

  return {
    taxableAmount,
    gstAmount,
    cgst,
    sgst,
    igst,
    totalAmount,
    effectiveRate,
  };
}

// ─── Rate colors ──────────────────────────────────────────────────────────────
const RATE_CONFIG: Record<number, { bg: string; text: string; badge: string }> = {
  0: { bg: "bg-gray-500", text: "text-gray-700", badge: "bg-gray-100 border-gray-200" },
  3: { bg: "bg-yellow-500", text: "text-yellow-700", badge: "bg-yellow-50 border-yellow-200" },
  5: { bg: "bg-emerald-500", text: "text-emerald-700", badge: "bg-emerald-50 border-emerald-200" },
  12: { bg: "bg-blue-600", text: "text-blue-700", badge: "bg-blue-50 border-blue-200" },
  18: { bg: "bg-violet-600", text: "text-violet-700", badge: "bg-violet-50 border-violet-200" },
  28: { bg: "bg-red-600", text: "text-red-700", badge: "bg-red-50 border-red-200" },
};

// ─── Types for multi-item ─────────────────────────────────────────────────────
interface LineItem {
  id: string;
  description: string;
  qty: number;
  price: number;
  rate: GSTRate;
}

// ─── Copy button ──────────────────────────────────────────────────────────────
function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition"
    >
      {copied ? (
        <CheckCheck size={16} className="text-emerald-600" />
      ) : (
        <Copy size={16} className="text-gray-400" />
      )}
    </button>
  );
}

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is the difference between CGST, SGST and IGST?",
    a: "GST in India is a dual-levy system. CGST (Central GST) goes to central government and SGST (State GST) goes to state government — both are levied on intra-state supplies (within same state). Each is 50% of total GST rate. IGST (Integrated GST) is levied on inter-state supplies (between different states) and equals the full GST rate. For example, 18% GST within Maharashtra: CGST = 9% + SGST = 9%. From Maharashtra to Delhi: IGST = 18%.",
  },
  {
    q: "How is reverse GST calculated?",
    a: "When price is GST-inclusive, taxable value = Inclusive Price × 100 / (100 + GST Rate). Example: If inclusive price is ₹1,180 and GST is 18%: Taxable = ₹1,180 × 100 / 118 = ₹1,000. GST = ₹180. Use 'Add GST' for base price, 'Remove GST' for inclusive price.",
  },
  {
    q: "Who needs GST registration?",
    a: "Mandatory if turnover exceeds ₹40 lakh for goods (₹20L for services, ₹10L for special states). Also mandatory for: inter-state supply, e-commerce sellers, RCM applicability, input service distributors, casual/non-resident taxpayers. Voluntary registration allowed below threshold.",
  },
  {
    q: "What is GST composition scheme?",
    a: "Simplified option for businesses with turnover up to ₹1.5 crore (₹75L for services). Pay flat rate (1% traders, 2% manufacturers, 5% restaurants) instead of standard GST. File quarterly returns. Cannot collect GST, claim ITC, or supply inter-state.",
  },
  {
    q: "What is Input Tax Credit (ITC)?",
    a: "ITC allows reducing GST paid on purchases from GST payable on sales. Example: Pay ₹1,800 GST on materials, collect ₹3,600 GST on sales → pay only ₹1,800 net. Available only with: valid invoice, goods/services received, supplier filed returns, you filed returns. Not available on: personal consumption, food, employee benefits, blocked credits under Section 17(5).",
  },
  {
    q: "GST return filing due dates?",
    a: "GSTR-1: 11th/13th of next month. GSTR-3B: 20th/22nd/24th. GSTR-9: 31st Dec next FY. GSTR-9C: 31st Dec (turnover > ₹5 Cr). Late fees: ₹50/day (₹25 CGST + ₹25 SGST) for tax returns, ₹20/day for nil returns, max ₹10,000.",
  },
  {
    q: "What is e-invoicing under GST?",
    a: "Mandatory for businesses with turnover > ₹5 crore. Generate B2B invoices on IRP (Invoice Registration Portal) which assigns unique IRN and QR code. Auto-populates GSTR-1. Without valid IRN, buyers cannot claim ITC.",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GSTClient() {
  const [amount, setAmount] = useState<number>(10000);
  const [gstRate, setGstRate] = useState<GSTRate>(18);
  const [mode, setMode] = useState<CalcMode>("add");
  const [taxType, setTaxType] = useState<TaxType>("intra");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showRateSheet, setShowRateSheet] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(true);

  const [items, setItems] = useState<LineItem[]>([
    { id: "1", description: "Product A", qty: 2, price: 5000, rate: 18 },
    { id: "2", description: "Service B", qty: 1, price: 3000, rate: 18 },
  ]);
  const [multiTaxType, setMultiTaxType] = useState<TaxType>("intra");
  const [showMultiCalc, setShowMultiCalc] = useState(false);

  const result = useMemo(
    () => computeGST(amount || 0, gstRate, mode, taxType),
    [amount, gstRate, mode, taxType]
  );

  const lineResults = useMemo(
    () =>
      items.map((item) => {
        const lineAmount = item.qty * item.price;
        const r = computeGST(lineAmount, item.rate, "add", multiTaxType);
        return { ...item, lineAmount, ...r };
      }),
    [items, multiTaxType]
  );

  const multiSummary = useMemo(
    () => ({
      totalTaxable: round2(lineResults.reduce((s, r) => s + r.taxableAmount, 0)),
      totalCGST: round2(lineResults.reduce((s, r) => s + r.cgst, 0)),
      totalSGST: round2(lineResults.reduce((s, r) => s + r.sgst, 0)),
      totalIGST: round2(lineResults.reduce((s, r) => s + r.igst, 0)),
      totalGST: round2(lineResults.reduce((s, r) => s + r.gstAmount, 0)),
      grandTotal: round2(lineResults.reduce((s, r) => s + r.totalAmount, 0)),
    }),
    [lineResults]
  );

  const addItem = () =>
    setItems((p) => [
      ...p,
      {
        id: Date.now().toString(),
        description: "New Item",
        qty: 1,
        price: 1000,
        rate: 18,
      },
    ]);

  const removeItem = (id: string) => setItems((p) => p.filter((i) => i.id !== id));

  const updateItem = useCallback(
    <K extends keyof LineItem>(id: string, field: K, value: LineItem[K]) => {
      setItems((p) => p.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
    },
    []
  );

  const handleWA = () => {
    const msg = encodeURIComponent(
      `Hello Taxvio! I used your GST Calculator. Amount: ${fmtINR(
        amount
      )}, Rate: ${gstRate}%, GST: ${fmtINR(result.gstAmount)}, Total: ${fmtINR(
        result.totalAmount
      )}. Need GST filing help.`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  const rateExamples: Record<number, string> = {
    0: "Fresh veg, healthcare, education",
    3: "Gold, silver, jewellery",
    5: "Sugar, LPG, medicines",
    12: "Phones, computers, dairy",
    18: "Electronics, IT, banking",
    28: "Cars, tobacco, aerated drinks",
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ══════════ HERO ══════════ */}
      <div className="bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <span>/</span>
            <span className="text-white">GST Calculator</span>
          </nav>

          {/* Title */}
          <motion.div initial="hidden" animate="visible" variants={slideUp}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur">
                <Calculator size={20} className="text-sky-300" />
              </div>
              <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Free Tool
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              GST Calculator
            </h1>
            <p className="text-white/70 text-sm max-w-2xl">
              Calculate GST instantly across all rates (0%-28%). Add/Remove GST, get
              CGST/SGST/IGST split, and create multi-item invoices.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: Zap, label: "Instant" },
                { icon: Shield, label: "Accurate" },
                { icon: Receipt, label: "Multi-Item" },
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
          </motion.div>
        </div>
      </div>

      {/* ══════════ CALCULATOR TABS ══════════ */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setShowMultiCalc(false)}
              className={`flex-shrink-0 px-4 py-3 text-sm font-semibold transition relative ${
                !showMultiCalc
                  ? "text-[#00416a]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Calculator size={16} className="inline mr-2" />
              Simple Calculator
              {!showMultiCalc && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00416a]" />
              )}
            </button>
            <button
              onClick={() => setShowMultiCalc(true)}
              className={`flex-shrink-0 px-4 py-3 text-sm font-semibold transition relative ${
                showMultiCalc
                  ? "text-[#00416a]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Receipt size={16} className="inline mr-2" />
              Multi-Item Invoice
              {showMultiCalc && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00416a]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {!showMultiCalc ? (
            /* ══════════ SIMPLE CALCULATOR ══════════ */
            <motion.div
              key="simple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Mode selector */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block">
                  Calculation Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setMode("add")}
                    className={`p-4 rounded-xl border-2 transition text-left ${
                      mode === "add"
                        ? "border-[#00416a] bg-[#00416a]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Plus size={16} className="text-[#00416a]" />
                      <span className="font-bold text-sm">Add GST</span>
                    </div>
                    <p className="text-xs text-gray-500">Base price → Total</p>
                  </button>
                  <button
                    onClick={() => setMode("remove")}
                    className={`p-4 rounded-xl border-2 transition text-left ${
                      mode === "remove"
                        ? "border-[#00416a] bg-[#00416a]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <ArrowUpDown size={16} className="text-[#00416a]" />
                      <span className="font-bold text-sm">Remove GST</span>
                    </div>
                    <p className="text-xs text-gray-500">Total → Base price</p>
                  </button>
                </div>
              </div>

              {/* Supply type */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block">
                  Supply Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTaxType("intra")}
                    className={`p-3 rounded-xl border-2 transition ${
                      taxType === "intra"
                        ? "border-[#00416a] bg-[#00416a]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="text-2xl mb-1">🏙️</div>
                    <div className="font-bold text-xs">Intra-State</div>
                    <div className="text-[10px] text-gray-500">CGST + SGST</div>
                  </button>
                  <button
                    onClick={() => setTaxType("inter")}
                    className={`p-3 rounded-xl border-2 transition ${
                      taxType === "inter"
                        ? "border-[#00416a] bg-[#00416a]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="text-2xl mb-1">🗺️</div>
                    <div className="font-bold text-xs">Inter-State</div>
                    <div className="text-[10px] text-gray-500">IGST only</div>
                  </button>
                </div>
              </div>

              {/* Amount input */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block">
                  {mode === "add" ? "Base Amount (₹)" : "Total Amount (₹)"}
                </label>
                <div className="relative">
                  <IndianRupee
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="number"
                    value={amount || ""}
                    onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-4 text-2xl font-bold bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#00416a] focus:bg-white outline-none transition"
                  />
                </div>

                {/* Quick amounts */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[1000, 5000, 10000, 50000].map((v) => (
                    <button
                      key={v}
                      onClick={() => setAmount(v)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        amount === v
                          ? "bg-[#00416a] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      ₹{v.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>

              {/* GST Rate */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block">
                  GST Rate
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {GST_RATES.map((r) => (
                    <button
                      key={r}
                      onClick={() => setGstRate(r as GSTRate)}
                      className={`p-3 rounded-xl border-2 transition ${
                        gstRate === r
                          ? `${RATE_CONFIG[r].bg} text-white border-transparent`
                          : `${RATE_CONFIG[r].badge} border-gray-200`
                      }`}
                    >
                      <div
                        className={`text-lg font-black ${
                          gstRate === r ? "text-white" : RATE_CONFIG[r].text
                        }`}
                      >
                        {r === 0 ? "NIL" : `${r}%`}
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>Example:</strong> {rateExamples[gstRate]}
                </p>
              </div>

              {/* Result Card */}
              <div className="bg-gradient-to-br from-[#00416a] to-[#003257] rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-white/60 uppercase mb-1">
                      {mode === "add" ? "Total Amount" : "Base Amount"}
                    </div>
                    <div className="text-3xl font-black">
                      {mode === "add"
                        ? fmtC(result.totalAmount)
                        : fmtC(result.taxableAmount)}
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur">
                    <Percent size={24} className="text-sky-300" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      gstRate === 0 ? "bg-white/20" : "bg-white/30"
                    }`}
                  >
                    {gstRate === 0 ? "EXEMPT" : `${gstRate}% GST`}
                  </div>
                  <div className="text-xs text-white/60">
                    {taxType === "intra" ? "Intra-State" : "Inter-State"}
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3 mb-4">
                  {[
                    {
                      label: "Taxable",
                      value: result.taxableAmount,
                      color: "bg-sky-400",
                    },
                    { label: "GST", value: result.gstAmount, color: "bg-emerald-400" },
                  ].map(({ label, value, color }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/70">{label}</span>
                        <span className="font-bold">{fmtINR(value)}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${color} transition-all duration-700`}
                          style={{
                            width: `${
                              (value / (result.totalAmount || 1)) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Breakdown toggle */}
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="w-full flex items-center justify-between py-3 border-t border-white/10"
                >
                  <span className="text-sm font-semibold">Detailed Breakdown</span>
                  <ChevronDown
                    size={20}
                    className={`transition ${showBreakdown ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {showBreakdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 pt-3">
                        {[
                          {
                            l: "Taxable Amount",
                            v: result.taxableAmount,
                          },
                          { l: "GST Amount", v: result.gstAmount },
                          ...(taxType === "intra"
                            ? [
                                { l: `CGST (${gstRate / 2}%)`, v: result.cgst },
                                { l: `SGST (${gstRate / 2}%)`, v: result.sgst },
                              ]
                            : [{ l: `IGST (${gstRate}%)`, v: result.igst }]),
                        ].map(({ l, v }) => (
                          <div
                            key={l}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="text-white/70">{l}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{fmtINR(v)}</span>
                              <CopyBtn text={v.toString()} />
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-between items-center pt-2 border-t border-white/10 font-bold">
                          <span>Total</span>
                          <span className="text-lg">{fmtINR(result.totalAmount)}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* All rates comparison */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <button
                  onClick={() => setShowRateSheet(!showRateSheet)}
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 size={18} className="text-[#00416a]" />
                    <span className="font-bold text-sm">Compare All GST Rates</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition ${
                      showRateSheet ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {showRateSheet && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 mt-4">
                        {GST_RATES.map((r) => {
                          const res = computeGST(amount || 0, r, mode, "intra");
                          return (
                            <div
                              key={r}
                              onClick={() => setGstRate(r as GSTRate)}
                              className={`p-3 rounded-lg cursor-pointer transition ${
                                gstRate === r
                                  ? "bg-[#00416a]/5 border-2 border-[#00416a]"
                                  : "bg-gray-50 border-2 border-transparent hover:border-gray-200"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div
                                  className={`px-2.5 py-1 rounded-full text-xs font-bold ${RATE_CONFIG[r].badge} border`}
                                >
                                  {r === 0 ? "NIL" : `${r}%`}
                                </div>
                                <div className="text-right">
                                  <div className="text-xs text-gray-500">Total</div>
                                  <div className="font-bold text-sm">
                                    {fmtINR(res.totalAmount, 0)}
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-xs">
                                <div>
                                  <div className="text-gray-500">Taxable</div>
                                  <div className="font-semibold">
                                    {fmtINR(res.taxableAmount, 0)}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-gray-500">GST</div>
                                  <div className="font-semibold text-[#00416a]">
                                    {fmtINR(res.gstAmount, 0)}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-gray-500">CGST</div>
                                  <div className="font-semibold">
                                    {fmtINR(res.cgst, 0)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Need GST Filing Help?</h3>
                    <p className="text-sm text-white/90">
                      CA-assisted registration, returns & compliance from ₹999/month
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleWA}
                  className="w-full bg-white text-emerald-600 py-3 rounded-xl font-bold hover:bg-emerald-50 transition"
                >
                  Talk to Expert on WhatsApp
                </button>
              </div>
            </motion.div>
          ) : (
            /* ══════════ MULTI-ITEM CALCULATOR ══════════ */
            <motion.div
              key="multi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Tax type selector */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <label className="text-xs font-bold text-gray-500 uppercase mb-3 block">
                  Invoice Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setMultiTaxType("intra")}
                    className={`p-3 rounded-xl border-2 transition ${
                      multiTaxType === "intra"
                        ? "border-[#00416a] bg-[#00416a]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="font-bold text-sm">Intra-State</div>
                    <div className="text-xs text-gray-500">CGST + SGST</div>
                  </button>
                  <button
                    onClick={() => setMultiTaxType("inter")}
                    className={`p-3 rounded-xl border-2 transition ${
                      multiTaxType === "inter"
                        ? "border-[#00416a] bg-[#00416a]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="font-bold text-sm">Inter-State</div>
                    <div className="text-xs text-gray-500">IGST</div>
                  </button>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {lineResults.map((item, idx) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <input
                        value={item.description}
                        onChange={(e) =>
                          updateItem(item.id, "description", e.target.value)
                        }
                        className="flex-1 font-semibold text-sm border-b-2 border-transparent hover:border-gray-200 focus:border-[#00416a] outline-none px-1 py-1"
                        placeholder="Item description"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg ml-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div>
                        <label className="text-[10px] text-gray-500 font-semibold uppercase block mb-1">
                          Qty
                        </label>
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "qty",
                              Math.max(1, Number(e.target.value) || 1)
                            )
                          }
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-center font-bold focus:border-[#00416a] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 font-semibold uppercase block mb-1">
                          Price
                        </label>
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "price",
                              Math.max(0, Number(e.target.value) || 0)
                            )
                          }
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-center font-bold focus:border-[#00416a] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 font-semibold uppercase block mb-1">
                          GST%
                        </label>
                        <select
                          value={item.rate}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "rate",
                              Number(e.target.value) as GSTRate
                            )
                          }
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-center font-bold focus:border-[#00416a] outline-none"
                        >
                          {GST_RATES.map((r) => (
                            <option key={r} value={r}>
                              {r === 0 ? "NIL" : `${r}%`}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Taxable</span>
                        <span className="font-semibold">
                          {fmtINR(item.taxableAmount, 0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">GST</span>
                        <span className="font-semibold text-[#00416a]">
                          {fmtINR(item.gstAmount, 0)}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-200 font-bold">
                        <span>Total</span>
                        <span>{fmtINR(item.totalAmount, 0)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add item */}
              <button
                onClick={addItem}
                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-[#00416a] hover:text-[#00416a] hover:bg-[#00416a]/5 transition font-semibold"
              >
                <Plus size={20} className="inline mr-2" />
                Add Item
              </button>

              {/* Summary */}
              <div className="bg-gradient-to-br from-[#00416a] to-[#003257] rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Receipt size={20} />
                  Invoice Summary
                </h3>

                <div className="space-y-3">
                  {[
                    { label: "Taxable Value", value: multiSummary.totalTaxable },
                    ...(multiTaxType === "intra"
                      ? [
                          { label: "CGST", value: multiSummary.totalCGST },
                          { label: "SGST", value: multiSummary.totalSGST },
                        ]
                      : [{ label: "IGST", value: multiSummary.totalIGST }]),
                    { label: "Total GST", value: multiSummary.totalGST },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-white/70">{label}</span>
                      <span className="font-semibold">{fmtINR(value)}</span>
                    </div>
                  ))}

                  <div className="flex justify-between pt-3 border-t border-white/20 text-lg font-bold">
                    <span>Grand Total</span>
                    <span>{fmtINR(multiSummary.grandTotal)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ══════════ WHY TAXVIO ══════════ */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#00416a] mb-2">
              Why Use This Calculator?
            </h2>
            <p className="text-gray-600 text-sm">
              Fast, accurate, and built by CA experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Zap,
                title: "Instant Results",
                desc: "Real-time calculation as you type",
              },
              {
                icon: Shield,
                title: "100% Accurate",
                desc: "CA-verified formulas",
              },
              {
                icon: Receipt,
                title: "Multi-Item",
                desc: "Build complete invoices",
              },
              {
                icon: Copy,
                title: "Easy Copy",
                desc: "One-click copy all values",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-[#00416a]/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={24} className="text-[#00416a]" />
                </div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
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
                    className={`text-gray-400 transition flex-shrink-0 ${
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
            Related Tools & Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "HSN Code Finder",
                desc: "Find HSN/SAC codes",
                href: "/tools/hsn-code-finder",
                icon: Tag,
              },
              {
                title: "Income Tax Calc",
                desc: "FY 2024-25",
                href: "/tools/income-tax-calculator",
                icon: Calculator,
              },
              {
                title: "GST Registration",
                desc: "GSTIN in 3-5 days",
                href: "/serviceslist/gst/gst-registration",
                icon: Building2,
              },
              {
                title: "GST Filing",
                desc: "From ₹999/month",
                href: "/serviceslist/gst/gst-return",
                icon: FileText,
              },
            ].map(({ title, desc, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#00416a] hover:text-white transition"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20">
                  <Icon size={20} className="text-[#00416a] group-hover:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate">{title}</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/70 truncate">
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
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur">
            <Shield size={32} className="text-sky-300" />
          </div>
          <h2 className="text-2xl font-bold mb-3">
            Need Professional GST Help?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our CA team handles complete GST compliance — registration, filing,
            notices, audits. Starting ₹999/month.
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