// app/tools/gst-calculator/client.tsx
"use client";

import Link from "next/link";
import { useState, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Calculator, ArrowRight, ChevronDown, Phone, MessageCircle,
  FileText, Shield, BadgeCheck, Zap, IndianRupee, RefreshCw,
  Info, Plus, Trash2, Copy, CheckCheck, TrendingUp, PieChart,
  ArrowUpDown, Tag, Package, Building2, Receipt, Percent,
  AlertCircle, BarChart3,
} from "lucide-react";
import Footar from "@/components/Footar";

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE   = "918937980366";
const GST_RATES = [0, 3, 5, 12, 18, 28] as const;
type GSTRate  = 0 | 3 | 5 | 12 | 18 | 28;
type CalcMode = "add" | "remove";
type TaxType  = "intra" | "inter";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const round2 = (n: number) => Math.round(n * 100) / 100;

function fmtINR(n: number, decimals = 2): string {
  return "₹" + Math.max(0, n).toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function fmtC(n: number): string {
  n = Math.max(0, n);
  if (n >= 10_000_000) return `₹${(n / 10_000_000).toFixed(2)} Cr`;
  if (n >= 100_000)    return `₹${(n / 100_000).toFixed(2)} L`;
  if (n >= 1_000)      return `₹${(n / 1_000).toFixed(1)}K`;
  return fmtINR(n);
}

// ─── GST Calculation ──────────────────────────────────────────────────────────
interface GSTResult {
  taxableAmount : number;
  gstAmount     : number;
  cgst          : number;
  sgst          : number;
  igst          : number;
  totalAmount   : number;
  effectiveRate : number;
}

function computeGST(
  amount: number,
  rate: number,
  mode: CalcMode,
  taxType: TaxType
): GSTResult {
  let taxableAmount: number;
  let gstAmount    : number;

  if (mode === "add") {
    taxableAmount = amount;
    gstAmount     = round2(amount * rate / 100);
  } else {
    // Remove / reverse — extract GST from GST-inclusive price
    taxableAmount = round2(amount * 100 / (100 + rate));
    gstAmount     = round2(amount - taxableAmount);
  }

  const totalAmount = round2(taxableAmount + gstAmount);
  const halfGST     = round2(gstAmount / 2);
  const cgst        = taxType === "intra" ? halfGST : 0;
  const sgst        = taxType === "intra" ? round2(gstAmount - halfGST) : 0;
  const igst        = taxType === "inter" ? gstAmount : 0;
  const effectiveRate = taxableAmount > 0
    ? round2((gstAmount / taxableAmount) * 100)
    : 0;

  return { taxableAmount, gstAmount, cgst, sgst, igst, totalAmount, effectiveRate };
}

// ─── Rate color helpers ────────────────────────────────────────────────────────
const RATE_COLOR: Record<number, string> = {
  0:  "bg-gray-100 text-gray-600 border-gray-200",
  3:  "bg-yellow-50 text-yellow-700 border-yellow-200",
  5:  "bg-emerald-50 text-emerald-700 border-emerald-200",
  12: "bg-blue-50 text-blue-700 border-blue-200",
  18: "bg-violet-50 text-violet-700 border-violet-200",
  28: "bg-red-50 text-red-700 border-red-200",
};
const RATE_BG: Record<number, string> = {
  0:  "bg-gray-400",  3:  "bg-yellow-500",
  5:  "bg-emerald-500", 12: "bg-blue-500",
  18: "bg-violet-600",  28: "bg-red-600",
};
const RATE_SOLID: Record<number, string> = {
  0:  "bg-gray-500 text-white",   3:  "bg-yellow-500 text-white",
  5:  "bg-emerald-500 text-white", 12: "bg-blue-600 text-white",
  18: "bg-violet-600 text-white",  28: "bg-red-600 text-white",
};

// ─── Types for multi-item ─────────────────────────────────────────────────────
interface LineItem {
  id         : string;
  description: string;
  qty        : number;
  price      : number;
  rate       : GSTRate;
}

// ─── Copy button ──────────────────────────────────────────────────────────────
function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      title="Copy value"
      className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-400 hover:text-[#00416a]"
    >
      {copied
        ? <CheckCheck size={13} className="text-emerald-600" />
        : <Copy size={13} />}
    </button>
  );
}

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is the difference between CGST, SGST and IGST?",
    a: "GST in India is a dual-levy system. CGST (Central Goods and Services Tax) is collected by the central government, and SGST (State Goods and Services Tax) is collected by the state government — both are levied on intra-state supplies (transactions within the same state). Each is exactly 50% of the total GST rate. IGST (Integrated Goods and Services Tax) is levied by the central government on inter-state supplies (transactions between two different states or union territories) and equals the full GST rate. For example, on an 18% GST invoice within Maharashtra: CGST = 9% + SGST = 9%. On an invoice from Maharashtra to Delhi: IGST = 18%.",
  },
  {
    q: "How is reverse GST (removing GST from inclusive price) calculated?",
    a: "When a price is GST-inclusive (total price already includes GST), the taxable value is calculated as: Taxable Value = Inclusive Price × 100 / (100 + GST Rate). For example, if the GST-inclusive price is ₹1,180 and GST rate is 18%: Taxable Value = ₹1,180 × 100 / 118 = ₹1,000. GST Amount = ₹1,180 − ₹1,000 = ₹180. Our GST calculator handles both scenarios — use 'Add GST' when you have the base/taxable price and want to find the total, or 'Remove GST' when you have the MRP/inclusive price and want to find the base value and GST component.",
  },
  {
    q: "Who needs to register for GST in India?",
    a: "GST registration is mandatory if your annual aggregate turnover exceeds ₹40 lakh for goods suppliers (₹20 lakh for service providers; ₹10 lakh for special category states like Manipur, Mizoram, Nagaland, Tripura). Additionally, regardless of turnover, registration is mandatory for: businesses making inter-state supply of goods; e-commerce operators and sellers on platforms like Amazon, Flipkart; persons liable to pay GST under Reverse Charge Mechanism (RCM); input service distributors; casual taxable persons; and non-resident taxable persons. Voluntary registration is also permitted for businesses below the threshold.",
  },
  {
    q: "What is the GST composition scheme?",
    a: "The GST Composition Scheme is a simplified compliance option for small businesses with annual turnover up to ₹1.5 crore (₹75 lakh for service providers). Under this scheme, businesses pay GST at a flat reduced rate (1% for traders, 2% for manufacturers, 5% for restaurants) on their turnover instead of the standard GST rates, and file only quarterly returns instead of monthly ones. The key limitation is that composition dealers cannot collect GST from customers, cannot claim Input Tax Credit (ITC), and cannot supply goods between states.",
  },
  {
    q: "What is Input Tax Credit (ITC) under GST?",
    a: "Input Tax Credit (ITC) allows a GST-registered business to reduce the GST paid on purchases (inputs) from the GST payable on sales (output). For example, if you pay ₹1,800 GST on raw materials and collect ₹3,600 GST on finished goods sold, you pay only ₹1,800 (₹3,600 − ₹1,800) net GST to the government. ITC is available only if: you have a valid GST invoice from a registered supplier; goods/services have been received; supplier has paid GST and filed GSTR-1; and you have filed your own GST returns. ITC is not available on personal consumption, food & beverages, employee benefits, and certain blocked credits under Section 17(5) of CGST Act.",
  },
  {
    q: "What are the due dates for GST return filing?",
    a: "GSTR-1 (outward supply details): 11th of next month for monthly filers (turnover > ₹5 crore); quarterly for others (13th of month after quarter-end under QRMP scheme). GSTR-3B (summary return with tax payment): 20th of next month for large taxpayers; 22nd/24th for quarterly filers. GSTR-9 (annual return): 31st December of next financial year. GSTR-9C (reconciliation statement for turnover > ₹5 crore): 31st December. Late filing attracts late fees of ₹50/day (₹25 CGST + ₹25 SGST) for tax payable returns, and ₹20/day for nil returns, capped at ₹10,000.",
  },
  {
    q: "What is the e-invoicing requirement under GST?",
    a: "E-invoicing (Electronic Invoicing) under GST requires businesses above specified turnover thresholds to generate all B2B tax invoices on the GST Invoice Registration Portal (IRP) — which assigns a unique IRN (Invoice Reference Number) and QR code. As of October 2023, e-invoicing is mandatory for businesses with aggregate annual turnover exceeding ₹5 crore in any preceding financial year. The IRP auto-populates GSTR-1, reducing manual data entry errors and improving GST compliance. E-invoices without a valid IRN are not considered valid tax documents and buyers cannot claim ITC on them.",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GSTClient() {

  // ── Simple calculator state ───────────────────────────────────────────────
  const [amount,   setAmount]   = useState<number>(10000);
  const [gstRate,  setGstRate]  = useState<GSTRate>(18);
  const [mode,     setMode]     = useState<CalcMode>("add");
  const [taxType,  setTaxType]  = useState<TaxType>("intra");
  const [faqOpen,  setFaqOpen]  = useState<number | null>(null);

  // ── Multi-item calculator state ────────────────────────────────────────────
  const [items, setItems] = useState<LineItem[]>([
    { id: "1", description: "Product A", qty: 2, price: 5000, rate: 18 },
    { id: "2", description: "Service B", qty: 1, price: 3000, rate: 18 },
  ]);
  const [multiTaxType, setMultiTaxType] = useState<TaxType>("intra");

  // ── Simple result ──────────────────────────────────────────────────────────
  const result = useMemo(
    () => computeGST(amount || 0, gstRate, mode, taxType),
    [amount, gstRate, mode, taxType]
  );

  // ── Multi-item results ────────────────────────────────────────────────────
  const lineResults = useMemo(() =>
    items.map(item => {
      const lineAmount = item.qty * item.price;
      const r = computeGST(lineAmount, item.rate, "add", multiTaxType);
      return { ...item, lineAmount, ...r };
    }), [items, multiTaxType]);

  const multiSummary = useMemo(() => ({
    totalTaxable : round2(lineResults.reduce((s, r) => s + r.taxableAmount, 0)),
    totalCGST    : round2(lineResults.reduce((s, r) => s + r.cgst,  0)),
    totalSGST    : round2(lineResults.reduce((s, r) => s + r.sgst,  0)),
    totalIGST    : round2(lineResults.reduce((s, r) => s + r.igst,  0)),
    totalGST     : round2(lineResults.reduce((s, r) => s + r.gstAmount, 0)),
    grandTotal   : round2(lineResults.reduce((s, r) => s + r.totalAmount, 0)),
  }), [lineResults]);

  // ── Multi-item handlers ───────────────────────────────────────────────────
  const addItem = () => setItems(p => [...p, {
    id: Date.now().toString(), description: "New Item", qty: 1, price: 1000, rate: 18,
  }]);

  const removeItem = (id: string) => setItems(p => p.filter(i => i.id !== id));

  const updateItem = useCallback(<K extends keyof LineItem>(
    id: string, field: K, value: LineItem[K]
  ) => {
    setItems(p => p.map(i => i.id === id ? { ...i, [field]: value } : i));
  }, []);

  const handleWA = () => {
    const msg = encodeURIComponent(
      `Hello Taxvio! I used your GST Calculator. Amount: ${fmtINR(amount)}, GST Rate: ${gstRate}%, GST: ${fmtINR(result.gstAmount)}, Total: ${fmtINR(result.totalAmount)}. I need GST filing help.`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  // ── Rate distribution for sidebar ─────────────────────────────────────────
  const rateExamples: Record<number, string> = {
    0:  "Fresh vegetables, healthcare, education",
    3:  "Gold, silver, jewellery",
    5:  "Sugar, LPG, medicines, economy class flights",
    12: "Mobile phones, computers, dairy products",
    18: "Electronics, telecom, IT services, banking",
    28: "Cars, AC, tobacco, aerated drinks",
  };

  // Donut SVG for simple calc
  const total = result.totalAmount || 1;
  const taxPct   = (result.gstAmount     / total) * 100;
  const basePct  = (result.taxableAmount / total) * 100;
  const R = 52; const CX = 64; const CY = 64;
  const C = 2 * Math.PI * R;
  const baseDash = (basePct / 100) * C;
  const taxDash  = (taxPct  / 100) * C;

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

            <motion.nav variants={fadeUp} className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-white transition">GST Tools</Link>
              <span>/</span>
              <span className="text-white/80">GST Calculator</span>
            </motion.nav>

            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide">
              <Calculator size={12} className="text-sky-300" />
              Add GST · Remove GST · Multi-Item Invoice · Free Tool
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              GST Calculator
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                Add, Remove &amp; Compute GST Instantly
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
              Calculate GST for any amount across all slabs — 0%, 3%, 5%, 12%, 18%, 28%.
              Get CGST / SGST / IGST split, reverse GST extraction, and multi-item invoice totals. Updated FY 2024-25.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                { icon: Zap,      label: "Instant Results" },
                { icon: ArrowUpDown, label: "Add & Remove GST" },
                { icon: Receipt,  label: "Multi-Item Invoice" },
                { icon: Shield,   label: "100% Accurate" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Icon size={11} className="text-sky-300" /> {label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
          <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
        </svg>
      </section>

      {/* ══════════ SIMPLE CALCULATOR ══════════ */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">

            {/* ─── LEFT: Input Panel ─── */}
            <div className="space-y-5">
              <motion.div initial="hidden" animate="visible" variants={fadeUp}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-6">

                <h2 className="text-base font-bold text-[#00416a] flex items-center gap-2">
                  <Calculator size={17} /> GST Calculator
                </h2>

                {/* ── Mode Toggle ── */}
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">Calculation Type</p>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-2xl">
                    {([
                      ["add",    "➕ Add GST",    "Base price → Total"],
                      ["remove", "➖ Remove GST", "Inclusive price → Base"],
                    ] as const).map(([val, title, sub]) => (
                      <button key={val} onClick={() => setMode(val)}
                        className={`py-3 px-4 rounded-xl text-left transition-all duration-200 ${mode === val ? "bg-[#00416a] text-white shadow-lg shadow-[#00416a]/20" : "text-gray-600 hover:bg-white hover:shadow-sm"}`}>
                        <p className={`text-sm font-bold ${mode === val ? "text-white" : "text-gray-800"}`}>{title}</p>
                        <p className={`text-[10px] mt-0.5 ${mode === val ? "text-white/70" : "text-gray-400"}`}>{sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Tax Type ── */}
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">Supply Type</p>
                  <div className="grid grid-cols-2 gap-2">
                    {([
                      ["intra", "🏙️ Intra-State", "CGST + SGST"],
                      ["inter", "🗺️ Inter-State",  "IGST only"],
                    ] as const).map(([val, title, sub]) => (
                      <button key={val} onClick={() => setTaxType(val)}
                        className={`py-2.5 px-3 rounded-xl text-left border-2 transition-all ${taxType === val ? "border-[#00416a] bg-[#00416a]/5 text-[#00416a]" : "border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-200"}`}>
                        <p className="text-xs font-bold">{title}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Amount Input ── */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {mode === "add" ? "Base / Taxable Amount (₹)" : "GST-Inclusive / Total Amount (₹)"}
                  </label>
                  <div className="relative">
                    <IndianRupee size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number" value={amount || ""}
                      onChange={e => setAmount(Math.max(0, Number(e.target.value) || 0))}
                      placeholder="Enter amount"
                      className="w-full pl-9 pr-4 py-3 text-lg font-bold text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a]/50 transition placeholder:text-gray-300"
                    />
                  </div>
                  {/* Quick amount chips */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[1000, 5000, 10000, 25000, 50000, 100000].map(v => (
                      <button key={v} onClick={() => setAmount(v)}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all ${amount === v ? "bg-[#00416a] text-white border-[#00416a]" : "border-gray-200 text-gray-500 hover:border-[#00416a]/30 hover:text-[#00416a]"}`}>
                        ₹{v.toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── GST Rate ── */}
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">GST Rate</p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {GST_RATES.map(r => (
                      <button key={r} onClick={() => setGstRate(r as GSTRate)}
                        className={`py-2.5 rounded-xl text-sm font-extrabold border-2 transition-all ${gstRate === r ? `${RATE_SOLID[r]} border-transparent shadow-sm` : `${RATE_COLOR[r]} hover:opacity-80`}`}>
                        {r === 0 ? "Nil" : `${r}%`}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2">
                    <span className="font-semibold text-gray-500">Example:</span> {rateExamples[gstRate]}
                  </p>
                </div>

                {/* Info box */}
                <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3.5">
                  <Info size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-700 leading-relaxed">
                    {mode === "add"
                      ? <><strong>Add GST:</strong> Enter the base/taxable price (before GST). We'll calculate the GST amount and total payable.</>
                      : <><strong>Remove GST:</strong> Enter the MRP or invoice total (GST included). We'll extract the base price and GST component.</>}
                  </p>
                </div>
              </motion.div>

              {/* ── Rate Comparison Table ── */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                  <BarChart3 size={15} /> GST Comparison — All Rates for ₹{(amount || 0).toLocaleString("en-IN")}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {["GST Rate", "Taxable Value", "GST Amount", "CGST", "SGST/UTGST", "Total"].map(h => (
                          <th key={h} className={`py-2 text-gray-500 font-bold uppercase tracking-wide ${h === "GST Rate" ? "text-left" : "text-right"}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {GST_RATES.map((r, i) => {
                        const res = computeGST(amount || 0, r, mode, "intra");
                        const isActive = r === gstRate;
                        return (
                          <tr key={r} onClick={() => setGstRate(r as GSTRate)}
                            className={`cursor-pointer transition-colors ${isActive ? "bg-[#00416a]/5" : i % 2 === 0 ? "bg-white" : "bg-gray-50/40"} hover:bg-[#00416a]/5`}>
                            <td className="py-2.5">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${RATE_COLOR[r]}`}>
                                {r === 0 ? "NIL" : `${r}%`}
                              </span>
                              {isActive && <span className="ml-1.5 text-[9px] bg-[#00416a] text-white px-1.5 py-0.5 rounded-full">Selected</span>}
                            </td>
                            <td className="py-2.5 text-right font-semibold text-gray-700">{fmtINR(res.taxableAmount)}</td>
                            <td className="py-2.5 text-right font-bold text-[#00416a]">{fmtINR(res.gstAmount)}</td>
                            <td className="py-2.5 text-right text-sky-600 font-semibold">{fmtINR(res.cgst)}</td>
                            <td className="py-2.5 text-right text-teal-600 font-semibold">{fmtINR(res.sgst)}</td>
                            <td className="py-2.5 text-right font-extrabold text-gray-800">{fmtINR(res.totalAmount)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-gray-400 mt-3">Click any row to select that GST rate above.</p>
              </motion.div>
            </div>

            {/* ─── RIGHT: Result Sticky Panel ─── */}
            <div className="space-y-5 lg:sticky lg:top-24">

              {/* Main Result Card */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp}
                className="bg-[#00416a] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-[#00416a]/25">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">
                        {mode === "add" ? "Total Amount (with GST)" : "Base Amount (ex-GST)"}
                      </p>
                      <p className="text-4xl font-extrabold mt-1">
                        {mode === "add" ? fmtC(result.totalAmount) : fmtC(result.taxableAmount)}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${gstRate === 0 ? "bg-gray-500" : "bg-white/20"} text-white`}>
                          {gstRate === 0 ? "GST EXEMPT" : `${gstRate}% GST`}
                        </span>
                        <span className="text-white/50 text-[11px]">
                          {taxType === "intra" ? "Intra-State" : "Inter-State"}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                      <Percent size={22} className="text-sky-300" />
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-2.5 mb-5">
                    {[
                      { label: "Taxable Value", value: result.taxableAmount, pct: (result.taxableAmount / (result.totalAmount || 1)) * 100, color: "bg-sky-400" },
                      { label: "GST Amount",    value: result.gstAmount,     pct: (result.gstAmount     / (result.totalAmount || 1)) * 100, color: "bg-emerald-400" },
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
                            style={{ width: `${Math.min(100, Math.max(pct, gstRate === 0 ? 0 : 2))}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Breakdown rows */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {[
                      { l: "Taxable Amount",  v: fmtINR(result.taxableAmount), copy: result.taxableAmount.toString() },
                      { l: "GST Amount",      v: fmtINR(result.gstAmount),     copy: result.gstAmount.toString() },
                      ...(taxType === "intra" ? [
                        { l: `CGST (${gstRate / 2}%)`,          v: fmtINR(result.cgst),  copy: result.cgst.toString() },
                        { l: `SGST / UTGST (${gstRate / 2}%)`,  v: fmtINR(result.sgst),  copy: result.sgst.toString() },
                      ] : [
                        { l: `IGST (${gstRate}%)`,              v: fmtINR(result.igst),  copy: result.igst.toString() },
                      ]),
                    ].map(({ l, v, copy }) => (
                      <div key={l} className="flex justify-between items-center text-xs">
                        <span className="text-white/60">{l}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-white font-semibold">{v}</span>
                          <CopyBtn text={copy} />
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between items-center text-sm border-t border-white/20 pt-2 mt-1">
                      <span className="text-white/80 font-bold">Total Amount</span>
                      <div className="flex items-center gap-1">
                        <span className="text-white font-extrabold">{fmtINR(result.totalAmount)}</span>
                        <CopyBtn text={result.totalAmount.toString()} />
                      </div>
                    </div>
                  </div>

                  {/* Donut */}
                  {gstRate > 0 && result.totalAmount > 0 && (
                    <div className="mt-5 flex items-center justify-center gap-5 border-t border-white/10 pt-5">
                      <svg width="128" height="128" viewBox="0 0 128 128" aria-hidden>
                        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="16" />
                        {/* base */}
                        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#38bdf8" strokeWidth="16"
                          strokeDasharray={`${Math.max(baseDash - 2, 0)} ${C}`}
                          strokeDashoffset={0} strokeLinecap="round"
                          transform={`rotate(-90 ${CX} ${CY})`} />
                        {/* gst */}
                        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#34d399" strokeWidth="16"
                          strokeDasharray={`${Math.max(taxDash - 2, 0)} ${C}`}
                          strokeDashoffset={-baseDash} strokeLinecap="round"
                          transform={`rotate(-90 ${CX} ${CY})`} />
                        <text x={CX} y={CY - 5} textAnchor="middle" fontSize="11" fill="white" fontWeight="800">
                          {Math.round(taxPct)}%
                        </text>
                        <text x={CX} y={CY + 10} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)">
                          tax
                        </text>
                      </svg>
                      <div className="space-y-2.5 text-xs">
                        {[
                          { label: "Base Price", value: result.taxableAmount, color: "bg-sky-400" },
                          { label: "GST Amount", value: result.gstAmount,     color: "bg-emerald-400" },
                        ].map(({ label, value, color }) => (
                          <div key={label} className="flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${color} shrink-0`} />
                            <div>
                              <p className="text-white/60">{label}</p>
                              <p className="text-white font-bold">{fmtINR(value)}</p>
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
                <p className="text-sm font-bold text-[#00416a]">Need GST Registration or Filing Help?</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our CA team handles GST registration, GSTR-1/3B/9 filing, e-invoicing, e-way bills, ITC reconciliation and GST audits — from ₹499/month.
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

              {/* Quick Guide */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-xs font-bold text-[#00416a] mb-3 flex items-center gap-2">
                  <Tag size={13} /> GST Rate Quick Guide
                </p>
                <div className="space-y-2">
                  {GST_RATES.map(r => (
                    <button key={r} onClick={() => setGstRate(r as GSTRate)}
                      className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border transition-all text-left ${gstRate === r ? "border-[#00416a]/30 bg-[#00416a]/5" : "border-gray-100 hover:border-[#00416a]/20 hover:bg-[#f8fbfd]"}`}>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${RATE_COLOR[r]}`}>
                        {r === 0 ? "NIL" : `${r}%`}
                      </span>
                      <p className="text-[11px] text-gray-500 leading-tight">{rateExamples[r]}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tip */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
                <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-700">RCM — Reverse Charge Mechanism</p>
                  <p className="text-[11px] mt-1 leading-relaxed text-amber-600">
                    In certain cases (GTA services, legal services by advocates, import of services), the recipient — not the supplier — is liable to pay GST under RCM. Taxvio's CA team helps you identify and comply with RCM requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MULTI-ITEM CALCULATOR ══════════ */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Invoice Builder
                </span>
                <h2 className="text-2xl font-extrabold text-[#00416a] mt-3 flex items-center gap-2">
                  <Receipt size={22} /> Multi-Item GST Calculator
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Add multiple line items with different GST rates — get full invoice totals with CGST / SGST / IGST.
                </p>
              </div>
              {/* Intra / Inter toggle */}
              <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-xl shrink-0">
                {([["intra","Intra-State"],["inter","Inter-State"]] as const).map(([v, l]) => (
                  <button key={v} onClick={() => setMultiTaxType(v)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${multiTaxType === v ? "bg-[#00416a] text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
                    {l}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="bg-[#00416a] text-white text-xs font-bold uppercase tracking-wide px-4 py-3 hidden sm:block">
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-3">Description</span>
                  <span className="col-span-1 text-right">Qty</span>
                  <span className="col-span-2 text-right">Unit Price (₹)</span>
                  <span className="col-span-1 text-right">GST %</span>
                  <span className="col-span-1 text-right">Taxable</span>
                  <span className="col-span-1 text-right text-sky-300">{multiTaxType === "intra" ? "CGST" : "IGST"}</span>
                  {multiTaxType === "intra" && <span className="col-span-1 text-right text-teal-300">SGST</span>}
                  <span className={`${multiTaxType === "intra" ? "col-span-1" : "col-span-2"} text-right`}>Total</span>
                  <span className="col-span-1 text-right">Del</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-50">
                {lineResults.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`px-4 py-3 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                  >
                    {/* Mobile layout */}
                    <div className="block sm:hidden space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <input value={item.description}
                          onChange={e => updateItem(item.id, "description", e.target.value)}
                          className="flex-1 text-sm font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30" />
                        <button onClick={() => removeItem(item.id)}
                          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold mb-1">QTY</p>
                          <input type="number" value={item.qty}
                            onChange={e => updateItem(item.id, "qty", Math.max(1, Number(e.target.value) || 1))}
                            className="w-full text-sm font-bold text-center border border-gray-200 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold mb-1">PRICE</p>
                          <input type="number" value={item.price}
                            onChange={e => updateItem(item.id, "price", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full text-sm font-bold text-center border border-gray-200 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold mb-1">GST%</p>
                          <select value={item.rate}
                            onChange={e => updateItem(item.id, "rate", Number(e.target.value) as GSTRate)}
                            className="w-full text-sm font-bold border border-gray-200 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 bg-white">
                            {GST_RATES.map(r => <option key={r} value={r}>{r === 0 ? "NIL" : `${r}%`}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex justify-between p-2 bg-[#f8fbfd] rounded-lg">
                          <span className="text-gray-500">Taxable</span>
                          <span className="font-bold text-gray-700">{fmtINR(item.taxableAmount)}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-[#f8fbfd] rounded-lg">
                          <span className="text-gray-500">GST</span>
                          <span className="font-bold text-[#00416a]">{fmtINR(item.gstAmount)}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-[#f8fbfd] rounded-lg col-span-2">
                          <span className="text-gray-500">Total</span>
                          <span className="font-extrabold text-gray-800">{fmtINR(item.totalAmount)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden sm:grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-3">
                        <input value={item.description}
                          onChange={e => updateItem(item.id, "description", e.target.value)}
                          className="w-full text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30" />
                      </div>
                      <div className="col-span-1">
                        <input type="number" value={item.qty}
                          onChange={e => updateItem(item.id, "qty", Math.max(1, Number(e.target.value) || 1))}
                          className="w-full text-sm font-bold text-right border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30" />
                      </div>
                      <div className="col-span-2">
                        <input type="number" value={item.price}
                          onChange={e => updateItem(item.id, "price", Math.max(0, Number(e.target.value) || 0))}
                          className="w-full text-sm font-bold text-right border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30" />
                      </div>
                      <div className="col-span-1">
                        <select value={item.rate}
                          onChange={e => updateItem(item.id, "rate", Number(e.target.value) as GSTRate)}
                          className="w-full text-xs font-bold border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 bg-white text-center">
                          {GST_RATES.map(r => <option key={r} value={r}>{r === 0 ? "NIL" : `${r}%`}</option>)}
                        </select>
                      </div>
                      <span className="col-span-1 text-right text-xs font-semibold text-gray-600">{fmtINR(item.taxableAmount)}</span>
                      <span className="col-span-1 text-right text-xs font-bold text-sky-600">{fmtINR(multiTaxType === "intra" ? item.cgst : item.igst)}</span>
                      {multiTaxType === "intra" && (
                        <span className="col-span-1 text-right text-xs font-bold text-teal-600">{fmtINR(item.sgst)}</span>
                      )}
                      <span className={`${multiTaxType === "intra" ? "col-span-1" : "col-span-2"} text-right text-xs font-extrabold text-gray-800`}>
                        {fmtINR(item.totalAmount)}
                      </span>
                      <div className="col-span-1 flex justify-end">
                        <button onClick={() => removeItem(item.id)}
                          className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Add Item + Summary */}
              <div className="p-4 border-t border-gray-100">
                <button onClick={addItem}
                  className="flex items-center gap-2 text-sm font-bold text-[#00416a] hover:text-[#002b45] transition py-2 px-3 rounded-xl hover:bg-[#00416a]/5">
                  <Plus size={16} /> Add Item
                </button>
              </div>

              {/* Summary Bar */}
              <div className="bg-[#f8fbfd] border-t border-gray-200 px-4 py-4">
                <div className={`grid gap-3 text-sm ${multiTaxType === "intra" ? "grid-cols-2 sm:grid-cols-5" : "grid-cols-2 sm:grid-cols-4"}`}>
                  {[
                    { l: "Taxable Value",  v: multiSummary.totalTaxable, color: "text-gray-700" },
                    ...(multiTaxType === "intra" ? [
                      { l: "CGST",           v: multiSummary.totalCGST,   color: "text-sky-600" },
                      { l: "SGST / UTGST",  v: multiSummary.totalSGST,   color: "text-teal-600" },
                    ] : [
                      { l: "IGST",           v: multiSummary.totalIGST,   color: "text-sky-600" },
                    ]),
                    { l: "Total GST",     v: multiSummary.totalGST,    color: "text-[#00416a] font-bold" },
                    { l: "Grand Total",   v: multiSummary.grandTotal,  color: "text-gray-900 font-extrabold" },
                  ].map(({ l, v, color }) => (
                    <div key={l} className="text-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide mb-1">{l}</p>
                      <p className={`text-base font-extrabold ${color}`}>{fmtINR(v)}</p>
                    </div>
                  ))}
                </div>
              </div>
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
                Complete GST Guide
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                GST in India — Complete Guide for FY 2024-25
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                Everything you need to know about GST rates, CGST/SGST/IGST, registration, return filing, Input Tax Credit, and compliance in India.
              </p>
            </motion.div>

            <div className="space-y-14">

              {/* Block 1 */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    What Is GST &amp; How Does It Work?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    <strong>Goods and Services Tax (GST)</strong> is India's comprehensive indirect tax that replaced a complex web of central and state taxes — including Central Excise, Service Tax, VAT, CST, Entry Tax, Octroi and over 17 other levies — on 1st July 2017. It is a <strong>destination-based, consumption tax</strong> levied at every stage of the supply chain, with seamless Input Tax Credit (ITC) flow from manufacturer to consumer.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    GST in India operates as a <strong>dual-levy system</strong>: the central government and state governments both levy GST simultaneously. On intra-state transactions, CGST (Central GST) and SGST (State GST) are each 50% of the total rate. On inter-state transactions, IGST (Integrated GST) equals the full rate and is collected by the centre, with the consuming state's share transferred from the IGST pool.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The GST Council — a constitutional body comprising the Union Finance Minister and all State Finance Ministers — decides GST rates, exemptions, and policy changes. The 53rd GST Council meeting in June 2024 made significant rate rationalisation changes, and further rate consolidation is expected in upcoming meetings.
                  </p>
                </div>
                {/* GST Structure Table */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-5 py-3">
                    <p className="text-white font-bold text-sm">GST Tax Structure at a Glance</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["GST Rate", "CGST", "SGST/UTGST", "IGST"],
                      ["0% (Exempt)", "0%", "0%", "0%"],
                      ["3%",  "1.5%", "1.5%", "3%"],
                      ["5%",  "2.5%", "2.5%", "5%"],
                      ["12%", "6%",   "6%",   "12%"],
                      ["18%", "9%",   "9%",   "18%"],
                      ["28%", "14%",  "14%",  "28%"],
                    ].map(([rate, cgst, sgst, igst], i) => (
                      <div key={rate}
                        className={`grid grid-cols-4 px-4 py-2.5 text-xs ${i === 0 ? "bg-gray-50 font-bold text-gray-600" : i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                        <span className={i === 0 ? "" : "font-extrabold text-[#00416a]"}>{rate}</span>
                        <span className={`text-center ${i > 0 ? "text-sky-600 font-semibold" : ""}`}>{cgst}</span>
                        <span className={`text-center ${i > 0 ? "text-teal-600 font-semibold" : ""}`}>{sgst}</span>
                        <span className={`text-right ${i > 0 ? "text-violet-600 font-semibold" : ""}`}>{igst}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 px-4 py-2">
                    *Plus Compensation Cess applicable on certain goods (tobacco, vehicles, aerated drinks)
                  </p>
                </div>
              </motion.div>

              {/* Block 2 — ITC */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden order-2 md:order-1">
                  <div className="bg-emerald-600 px-5 py-3">
                    <p className="text-white font-bold text-sm">Input Tax Credit — How ITC Works</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex gap-3 p-3 bg-[#f8fbfd] border border-[#deeef7] rounded-xl">
                      <div className="w-7 h-7 rounded-lg bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">1</div>
                      <div>
                        <p className="text-xs font-bold text-gray-700">Manufacturer buys raw materials</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">Pays ₹1,800 GST on ₹10,000 purchase (18%)</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-[#f8fbfd] border border-[#deeef7] rounded-xl">
                      <div className="w-7 h-7 rounded-lg bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">2</div>
                      <div>
                        <p className="text-xs font-bold text-gray-700">Manufacturer sells finished goods</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">Collects ₹3,600 GST on ₹20,000 sale (18%)</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-[#f8fbfd] border border-[#deeef7] rounded-xl">
                      <div className="w-7 h-7 rounded-lg bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">3</div>
                      <div>
                        <p className="text-xs font-bold text-gray-700">Net GST payable to government</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">₹3,600 − ₹1,800 ITC = <strong className="text-[#00416a]">₹1,800 net GST</strong></p>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                      <p className="text-xs text-emerald-700 font-semibold">
                        ✓ No tax on tax — ITC ensures GST is levied only on the value added at each stage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    Input Tax Credit (ITC) — The GST Backbone
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    <strong>Input Tax Credit (ITC)</strong> is what makes GST non-cascading — it prevents tax-on-tax. At each stage of supply, a registered business can claim credit for GST paid on inputs (purchases) and set it off against GST payable on output (sales), paying only the net difference to the government.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    ITC is available only when: (1) you are GST-registered; (2) you hold a valid tax invoice or debit note; (3) goods/services have been received; (4) your supplier has paid the GST and filed GSTR-1/GSTR-3B; (5) you have filed your own return. The matching of ITC claimed in GSTR-3B with GSTR-2B (auto-populated from supplier's GSTR-1) is critical — mismatches trigger ITC reversal demands with interest.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong>Blocked credits under Section 17(5)</strong> — ITC cannot be claimed on: motor vehicles for personal use, food & beverages, employee club memberships, beauty treatment, health & fitness services, life/health insurance (except mandatory by law), and goods/services used for personal consumption or construction of immovable property for personal use.
                  </p>
                </div>
              </motion.div>

              {/* Block 3 — GST Returns */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">GST Return Filing Calendar — FY 2024-25</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      form: "GSTR-1",
                      title: "Outward Supply Details",
                      due: "11th of next month (Monthly) / 13th of next month after quarter (QRMP)",
                      who: "All regular GST-registered businesses",
                      color: "bg-blue-50 border-blue-100",
                      badge: "bg-blue-100 text-blue-700",
                    },
                    {
                      form: "GSTR-3B",
                      title: "Summary Return + Tax Payment",
                      due: "20th / 22nd / 24th of next month based on state and turnover",
                      who: "All regular taxpayers, QRMP filers",
                      color: "bg-emerald-50 border-emerald-100",
                      badge: "bg-emerald-100 text-emerald-700",
                    },
                    {
                      form: "GSTR-4",
                      title: "Composition Scheme Annual Return",
                      due: "30th April of next financial year",
                      who: "Composition scheme taxpayers",
                      color: "bg-violet-50 border-violet-100",
                      badge: "bg-violet-100 text-violet-700",
                    },
                    {
                      form: "GSTR-9",
                      title: "Annual Return (GST)",
                      due: "31st December of next financial year",
                      who: "All regular taxpayers (optional for turnover < ₹2Cr)",
                      color: "bg-orange-50 border-orange-100",
                      badge: "bg-orange-100 text-orange-700",
                    },
                    {
                      form: "GSTR-9C",
                      title: "Annual Reconciliation Statement",
                      due: "31st December of next financial year",
                      who: "Taxpayers with turnover > ₹5 crore",
                      color: "bg-red-50 border-red-100",
                      badge: "bg-red-100 text-red-700",
                    },
                    {
                      form: "GSTR-7",
                      title: "TDS Deductor Return",
                      due: "10th of next month",
                      who: "Government entities deducting TDS under GST",
                      color: "bg-sky-50 border-sky-100",
                      badge: "bg-sky-100 text-sky-700",
                    },
                  ].map(({ form, title, due, who, color, badge }) => (
                    <div key={form} className={`${color} border rounded-2xl p-4`}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-extrabold text-[#00416a]">{form}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge}`}>GST Return</span>
                      </div>
                      <p className="text-xs font-bold text-gray-700 mb-1">{title}</p>
                      <p className="text-[11px] text-gray-500 mb-2"><strong className="text-gray-600">Due:</strong> {due}</p>
                      <p className="text-[11px] text-gray-500"><strong className="text-gray-600">Who:</strong> {who}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Block 4 — Registration Steps */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">
                  How to Register for GST — Step by Step
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { step: "01", title: "Check Eligibility & Threshold", desc: "Verify if your annual aggregate turnover exceeds ₹40 lakh for goods (₹20L for services, ₹10L for special states). Also check if mandatory registration applies — inter-state supply, e-commerce, RCM applicability, etc." },
                    { step: "02", title: "Gather Required Documents", desc: "PAN card, Aadhaar, business address proof, bank account details (cancelled cheque), digital signature (for companies), constitution document (partnership deed / MOA), and authorised signatory details." },
                    { step: "03", title: "File Part-A on GST Portal", desc: "Visit gstin.gov.in → Services → Registration → New Registration. Enter PAN, mobile, email. An OTP-based TRN (Temporary Reference Number) is generated for Part-B completion." },
                    { step: "04", title: "Complete Part-B & Upload Documents", desc: "Log in with TRN, complete full business details — principal place of business, additional places, business nature, HSN codes, bank account details. Upload all supporting documents." },
                    { step: "05", title: "Aadhaar Authentication / Physical Verification", desc: "Complete Aadhaar-based e-KYC authentication online (faster processing, no field visit) or opt for physical verification by a GST officer at the business premises." },
                    { step: "06", title: "Receive GSTIN in 3-7 Working Days", desc: "Upon approval, your 15-digit GSTIN (GST Identification Number) is issued. Format: 2-digit state code + 10-digit PAN + 1 entity code + 1 check digit. Taxvio handles the complete registration process in 3–5 working days." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-3 p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">{step}</div>
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Why Taxvio</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Why Use Taxvio's GST Calculator?</h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Zap,        text: "Real-time calculation — results update instantly as you type, no page reload or 'Calculate' button needed" },
                { icon: ArrowUpDown,text: "Add & Remove GST both supported — calculate from base price or reverse-calculate from GST-inclusive MRP" },
                { icon: Receipt,    text: "Multi-item invoice builder — add unlimited line items with different GST rates, get complete CGST/SGST/IGST invoice totals" },
                { icon: Building2,  text: "Intra-state (CGST+SGST) and inter-state (IGST) both handled — auto-splits tax between the two components" },
                { icon: BarChart3,  text: "All-rate comparison table — see GST amounts, CGST, SGST and total for all 6 GST slabs simultaneously" },
                { icon: Copy,       text: "One-click copy for all values — taxable amount, CGST, SGST, IGST, and total amount copied to clipboard instantly" },
                { icon: Shield,     text: "Accurate reverse GST formula: Taxable = Inclusive × 100 / (100 + Rate) — certified CA-verified calculation" },
                { icon: BadgeCheck, text: "CA-backed GST compliance — registration, GSTR filing, e-invoicing, ITC reconciliation & audit support from ₹499/month" },
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
                GST Calculator — Frequently Asked Questions
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((f, i) => (
                <motion.div key={i} variants={fadeUp}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${faqOpen === i ? "border-[#00416a]/30 shadow-md" : "border-gray-200"}`}
                  itemScope itemType="https://schema.org/Question">
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-start gap-4 hover:bg-white transition"
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
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-[#00416a] mb-6">
              Related Tools &amp; Services
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "HSN Code Finder",      desc: "Find HSN/SAC codes & GST rates",  href: "/tools/hsn-code-finder",        icon: Tag },
                { title: "Income Tax Calculator", desc: "FY 2024-25 old & new regime",    href: "/tools/income-tax-calculator",  icon: Calculator },
                { title: "GST Registration",      desc: "GSTIN in 3–5 working days",       href: "/serviceslist/gst/gst-registration", icon: Building2 },
                { title: "GST Return Filing",     desc: "GSTR-1, 3B, 9 from ₹499/mo",    href: "/serviceslist/gst/gst-return",  icon: FileText },
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
      <section className="py-16 px-6 bg-[#f8fbfd]">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Zap size={11} className="text-sky-300" /> Expert GST Compliance Support
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Need Help with GST Registration or Filing?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Taxvio's GST experts handle registration, GSTR-1/3B/9 return filing, e-invoicing setup, e-way bill compliance, ITC reconciliation, and GST audit — complete compliance from ₹499/month.
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
                GST Registration · GSTR-1/3B/9 · E-Invoice · ITC Reconciliation · Audit Support · 100% Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}