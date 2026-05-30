// app/tools/gst-search/client.tsx
"use client";

import Link from "next/link";
import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Search, ArrowRight, ChevronDown, Phone, MessageCircle,
  FileText, Shield, BadgeCheck, Zap, RefreshCw, Info,
  BarChart3, Calculator, Building2, Landmark, MapPin,
  CheckCircle, XCircle, AlertCircle, Copy, Check,
  User, Calendar, Tag, Hash, Layers, Globe,
  TrendingUp, ClipboardList, CreditCard, Lock,
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
const PHONE = "918937980366";

// ─── State Code Map ───────────────────────────────────────────────────────────
const STATE_CODES: Record<string, string> = {
  "01": "Jammu & Kashmir", "02": "Himachal Pradesh", "03": "Punjab",
  "04": "Chandigarh", "05": "Uttarakhand", "06": "Haryana",
  "07": "Delhi", "08": "Rajasthan", "09": "Uttar Pradesh",
  "10": "Bihar", "11": "Sikkim", "12": "Arunachal Pradesh",
  "13": "Nagaland", "14": "Manipur", "15": "Mizoram",
  "16": "Tripura", "17": "Meghalaya", "18": "Assam",
  "19": "West Bengal", "20": "Jharkhand", "21": "Odisha",
  "22": "Chhattisgarh", "23": "Madhya Pradesh", "24": "Gujarat",
  "25": "Daman & Diu", "26": "Dadra & Nagar Haveli", "27": "Maharashtra",
  "28": "Andhra Pradesh (old)", "29": "Karnataka", "30": "Goa",
  "31": "Lakshadweep", "32": "Kerala", "33": "Tamil Nadu",
  "34": "Puducherry", "35": "Andaman & Nicobar", "36": "Telangana",
  "37": "Andhra Pradesh", "38": "Ladakh", "97": "Other Territory",
  "99": "Centre Jurisdiction",
};

// ─── Taxpayer Type Map ─────────────────────────────────────────────────────────
const TAXPAYER_TYPES: Record<string, string> = {
  Regular: "Regular Taxpayer",
  Composition: "Composition Scheme",
  SEZ: "Special Economic Zone",
  Casual: "Casual Taxable Person",
  ISD: "Input Service Distributor",
  TDS: "Tax Deductor at Source",
  TCS: "Tax Collector at Source",
  "Non-Resident": "Non-Resident Taxable Person",
  "UIN Holders": "UIN Holder",
};

// ─── GSTIN Parser ─────────────────────────────────────────────────────────────
function parseGSTIN(gstin: string) {
  if (!gstin || gstin.length !== 15) return null;
  const stateCode = gstin.slice(0, 2);
  const pan = gstin.slice(2, 12);
  const entityNum = gstin.slice(12, 13);
  const checksum = gstin.slice(14);
  return {
    stateCode,
    stateName: STATE_CODES[stateCode] ?? "Unknown",
    pan,
    panType: pan[4] as string,
    entityNum,
    checksum,
  };
}

// ─── GSTIN Validator ──────────────────────────────────────────────────────────
function validateGSTIN(gstin: string): { valid: boolean; error?: string } {
  if (!gstin) return { valid: false, error: "Please enter a GSTIN." };
  if (gstin.length !== 15) return { valid: false, error: "GSTIN must be exactly 15 characters." };
  if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gstin))
    return { valid: false, error: "Invalid GSTIN format. Check the structure and try again." };
  return { valid: true };
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface GSTData {
  // Core identity fields (ClearTax API + GSTN Portal structure)
  gstin?: string;
  legal_name?: string;
  trade_name?: string;
  status?: string;
  taxpayer_type?: string;
  registration_date?: string;
  cancellation_date?: string;
  last_updated?: string;
  nature_of_business?: string[];
  principal_address?: {
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    district?: string;
  };
  additional_addresses?: Array<{
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
  }>;
  // Filing compliance
  filings?: Array<{
    return_type?: string;
    tax_period?: string;
    status?: string;
    date_of_filing?: string;
  }>;
  // Raw / fallback fields that ClearTax might return
  [key: string]: unknown;
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status?: string }) {
  const s = (status ?? "").toLowerCase();
  if (s === "active")
    return (
      <span className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
        <CheckCircle size={11} /> Active
      </span>
    );
  if (s === "cancelled" || s === "inactive")
    return (
      <span className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
        <XCircle size={11} /> {status}
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
      <AlertCircle size={11} /> {status ?? "Unknown"}
    </span>
  );
}

// ─── Copy Button ──────────────────────────────────────────────────────────────
function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-1.5 p-1 rounded-lg hover:bg-white/20 text-white/60 hover:text-white transition"
      title="Copy to clipboard"
    >
      {copied ? <Check size={12} className="text-emerald-300" /> : <Copy size={12} />}
    </button>
  );
}

// ─── Info Row ─────────────────────────────────────────────────────────────────
function InfoRow({
  icon: Icon, label, value, highlight,
}: {
  icon: React.ElementType; label: string; value?: string | null; highlight?: boolean;
}) {
  if (!value) return null;
  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl text-sm transition-all ${highlight ? "bg-[#00416a]/8 border border-[#00416a]/15" : "hover:bg-gray-50"}`}>
      <div className="w-7 h-7 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={13} className="text-[#00416a]" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{label}</p>
        <p className={`font-semibold mt-0.5 break-words leading-relaxed ${highlight ? "text-[#00416a] text-base" : "text-gray-800"}`}>{value}</p>
      </div>
    </div>
  );
}

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is a GSTIN and how do I read it?",
    a: "GSTIN (Goods and Services Tax Identification Number) is a unique 15-character alphanumeric identifier assigned to every GST-registered taxpayer in India. The structure is: First 2 digits = State code (01–37), next 10 characters = PAN of the taxpayer, 13th character = Entity number (for multiple registrations under the same PAN in the same state), 14th character = 'Z' (default), 15th character = checksum digit. For example, 27AABCU9603R1ZX — '27' means Maharashtra, 'AABCU9603R' is the PAN, '1' is the entity number, 'Z' is fixed, 'X' is the check digit.",
  },
  {
    q: "What does this GST Number Search tool verify?",
    a: "This tool verifies: (1) Whether the GSTIN is valid and correctly formatted, (2) The legal name and trade name of the registered business, (3) GST registration status — Active, Cancelled, or Suspended, (4) Type of taxpayer — Regular, Composition, SEZ, ISD, etc., (5) Date of registration and cancellation (if applicable), (6) Principal place of business address and state, (7) Nature of business activities registered under GST. All data is fetched live from GST authorities.",
  },
  {
    q: "Why should I verify a GSTIN before making a business payment?",
    a: "Verifying a vendor's GSTIN before payment is critical for Input Tax Credit (ITC) compliance. Under GST law, you can claim ITC only if: the supplier is GST-registered and their GSTIN is active, the invoice carries a valid GSTIN, and the supplier actually files their GST returns (GSTR-1). If you pay GST to a cancelled or fake GSTIN and the supplier doesn't file returns, your ITC claim will be rejected by GSTN, resulting in additional tax liability, interest at 18% p.a., and penalties. Always verify GSTIN before accepting an invoice.",
  },
  {
    q: "What is the difference between Legal Name and Trade Name in GST?",
    a: "Legal Name is the officially registered name of the business entity — the name mentioned in PAN, Certificate of Incorporation, Partnership Deed, etc. This cannot be changed easily and is used in all government records. Trade Name (also called 'Business Name') is the commercial name under which a business operates — for example, a company's legal name may be 'Reliance Industries Limited' but the trade name could be 'Jio' or 'Reliance Retail'. Both names appear on GST certificates. For invoicing and ITC purposes, both names are valid.",
  },
  {
    q: "What are the different GST taxpayer types?",
    a: "GST has multiple taxpayer categories: Regular Taxpayer — standard monthly/quarterly GST filing; Composition Scheme — for businesses with turnover below ₹1.5 crore (quarterly payments, no ITC claim, cannot issue tax invoices to registered buyers); Casual Taxable Person — temporary registrations for seasonal/event businesses; SEZ Unit/Developer — zero-rated supply status; Input Service Distributor (ISD) — distributes input tax credit received at HO to branches; TDS Deductor — government bodies and specified corporates; Non-Resident Taxable Person — foreign businesses supplying in India temporarily.",
  },
  {
    q: "What is GST Composition Scheme and how is it different from Regular?",
    a: "Composition Scheme is a simplified GST option for small businesses with annual turnover below ₹1.5 crore (₹75L for some states). Key differences: Regular taxpayers charge CGST + SGST/IGST on invoices and can claim full ITC; Composition taxpayers pay a flat tax rate (1% for traders, 2% for manufacturers, 5% for restaurants) on turnover, cannot charge GST on invoices (they pay from their own pocket), cannot claim ITC, and cannot supply inter-state goods. Composition taxpayers file only quarterly GSTR-4 instead of monthly GSTR-1 and GSTR-3B.",
  },
  {
    q: "How do I use a GSTIN for ITC (Input Tax Credit) verification?",
    a: "To ensure safe ITC claims: (1) Verify the GSTIN is Active using this tool before accepting any invoice; (2) Match the GSTIN on the invoice with the registered business name; (3) Check that the supplier's GSTR-1 is filed (your purchases appear in GSTR-2B); (4) Ensure the GST amount on invoice matches what appears in GSTR-2B; (5) Pay the invoice amount including GST to the supplier's bank account. The GST Council's GSTR-2B auto-population mechanism now makes unmatched ITC claims automatically ineligible — so vendor GSTIN verification is more critical than ever.",
  },
];

// ─── Sample GSTINs ────────────────────────────────────────────────────────────
const SAMPLE_GSTINS = [
  { gstin: "09DWLPK5811D1ZH", label: "Sample 1" },
  { gstin: "27AABCU9603R1ZX", label: "Sample 2" },
  { gstin: "29AAFCD5862R1ZR", label: "Sample 3" },
  { gstin: "07AAGCM5706D1ZS", label: "Sample 4" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GSTSearchClient() {
  const [input, setInput]         = useState("");
  const [loading, setLoading]     = useState(false);
  const [data, setData]           = useState<GSTData | null>(null);
  const [error, setError]         = useState<string | null>(null);
  const [searched, setSearched]   = useState<string | null>(null);
  const [faqOpen, setFaqOpen]     = useState<number | null>(null);
  const resultRef                 = useRef<HTMLDivElement>(null);

  // ── Search handler ────────────────────────────────────────────────────────
  const handleSearch = useCallback(async (gstin?: string) => {
    const query = (gstin ?? input).trim().toUpperCase();
    const { valid, error: valErr } = validateGSTIN(query);
    if (!valid) { setError(valErr ?? "Invalid GSTIN"); return; }

    setLoading(true);
    setData(null);
    setError(null);
    setSearched(query);

    try {
  //const res  = await fetch(`/api/gst-search?gstin=${query}`);
      const res  = await fetch(`https://cleartax.in/f/compliance-report/${query}`);
      const json = await res.json();

      if (!res.ok || json.error) {
        setError(json.error ?? "Could not fetch GST data. Try again.");
      } else {
        setData(json);
        setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }, [input]);

  // ── Derived values ────────────────────────────────────────────────────────
  const parsed      = searched ? parseGSTIN(searched) : null;
  const inputParsed = input.length === 15 ? parseGSTIN(input.toUpperCase()) : null;

  // Normalise data keys (ClearTax may use snake_case or camelCase)
  const legalName     = (data?.legal_name   ?? data?.legalName   ?? data?.taxpayerName as string  ?? "") as string;
  const tradeName     = (data?.trade_name   ?? data?.tradeName   ?? data?.tradeNam as string      ?? "") as string;
  const status        = (data?.status       ?? data?.sts         ?? data?.gstStatus as string     ?? "") as string;
  const taxpayerType  = (data?.taxpayer_type?? data?.dty         ?? data?.taxpayerType as string  ?? "") as string;
  const regDate       = (data?.registration_date ?? data?.rgdt ?? data?.registrationDate as string ?? "") as string;
  const cancelDate    = (data?.cancellation_date ?? data?.cxdt   ?? "") as string;
  const address       = (data?.principal_address ?? data?.pradr  ?? null) as Record<string,string> | null;
  const filings       = (data?.filings       ?? data?.returnFilings ?? []) as unknown[];

  const handleWA = () => {
    const msg = encodeURIComponent(
      `Hello Taxvio! I searched GST number ${searched ?? ""} using your tool. ${legalName ? `Business: ${legalName}.` : ""} I need GST registration / filing help.`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

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
              <span className="text-white/80">GST Number Search</span>
            </motion.nav>

            {/* Badge */}
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide">
              <Landmark size={12} className="text-sky-300" />
              Free GST Verification · Live GSTN Data · Instant Results
            </motion.span>

            {/* H1 */}
            <motion.h1 variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              GST Number Search
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                Verify Any GSTIN Instantly — Free
              </span>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
              Search and verify any GST Identification Number. Get business name, registration
              status, address, taxpayer type and compliance details — live from GSTN.
            </motion.p>

            {/* Pills */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                { icon: Zap,          label: "Live GSTN Data" },
                { icon: Shield,       label: "GSTIN Validator" },
                { icon: Building2,    label: "Business Details" },
                { icon: BadgeCheck,   label: "100% Free" },
              ].map(({ icon: Icon, label }) => (
                <span key={label}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Icon size={11} className="text-sky-300" /> {label}
                </span>
              ))}
            </motion.div>

            {/* ── Search Box ── */}
            <motion.div variants={fadeUp} className="mt-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 max-w-2xl mx-auto shadow-2xl">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Hash size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      type="text"
                      value={input}
                      onChange={e => {
                        setInput(e.target.value.toUpperCase().replace(/\s/g, ""));
                        setError(null);
                      }}
                      onKeyDown={e => e.key === "Enter" && handleSearch()}
                      placeholder="Enter 15-digit GSTIN  e.g. 09DWLPK5811D1ZH"
                      maxLength={15}
                      className="w-full bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/30 text-sm font-mono font-semibold pl-9 pr-4 py-3.5 outline-none focus:border-sky-400/60 focus:bg-white/15 transition tracking-widest"
                    />
                  </div>
                  <button
                    onClick={() => handleSearch()}
                    disabled={loading}
                    className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/50 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg active:scale-95 shrink-0"
                  >
                    {loading ? (
                      <RefreshCw size={15} className="animate-spin" />
                    ) : (
                      <Search size={15} />
                    )}
                    {loading ? "Searching…" : "Search"}
                  </button>
                </div>

                {/* Live parse preview */}
                {inputParsed && (
                  <div className="mt-2 px-2 pb-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/50">
                    <span>State: <strong className="text-white/80">{inputParsed.stateName}</strong></span>
                    <span>PAN: <strong className="text-white/80">{inputParsed.pan}</strong></span>
                    <span>State Code: <strong className="text-white/80">{inputParsed.stateCode}</strong></span>
                  </div>
                )}
              </div>

              {/* Sample GSTINs */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="text-white/40 text-[11px] font-semibold">Try:</span>
                {SAMPLE_GSTINS.map(({ gstin, label }) => (
                  <button key={gstin}
                    onClick={() => { setInput(gstin); handleSearch(gstin); }}
                    className="text-[11px] font-mono font-semibold bg-white/8 border border-white/15 text-white/60 hover:text-white hover:border-white/30 px-3 py-1 rounded-full transition">
                    {gstin}
                  </button>
                ))}
              </div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-200 text-xs font-semibold px-4 py-2 rounded-xl"
                >
                  <XCircle size={13} /> {error}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
          <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
        </svg>
      </section>

      {/* ══════════ RESULT ══════════ */}
      <AnimatePresence>
        {(loading || data) && (
          <section ref={resultRef} className="py-10 md:py-14">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

              {/* Loading skeleton */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="grid lg:grid-cols-[1fr_340px] gap-6"
                >
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 space-y-3 animate-pulse">
                      <div className="h-4 bg-gray-100 rounded-lg w-1/3" />
                      <div className="h-8 bg-gray-100 rounded-xl w-2/3" />
                      <div className="h-3 bg-gray-100 rounded w-1/2" />
                      <div className="h-3 bg-gray-100 rounded w-3/4" />
                      <div className="h-3 bg-gray-100 rounded w-2/5" />
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Results */}
              {!loading && data && (
                <motion.div
                  initial="hidden" animate="visible" variants={stagger}
                  className="grid lg:grid-cols-[1fr_340px] gap-6 items-start"
                >
                  {/* ─── LEFT ─── */}
                  <div className="space-y-5">

                    {/* Main Business Card */}
                    <motion.div variants={fadeUp}
                      className="bg-[#00416a] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-[#00416a]/25">
                      <div className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                              <Building2 size={22} className="text-sky-300" />
                            </div>
                            <div>
                              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                                Legal Business Name
                              </p>
                              <h2 className="text-xl md:text-2xl font-extrabold mt-0.5 leading-tight">
                                {legalName || "—"}
                              </h2>
                              {tradeName && tradeName !== legalName && (
                                <p className="text-sky-300/80 text-sm font-semibold mt-0.5">
                                  Trade Name: {tradeName}
                                </p>
                              )}
                            </div>
                          </div>
                          <StatusBadge status={status} />
                        </div>

                        {/* GSTIN strip */}
                        <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 mb-5">
                          <Hash size={14} className="text-sky-300 shrink-0" />
                          <span className="font-mono font-extrabold tracking-widest text-base text-white">
                            {searched}
                          </span>
                          {searched && <CopyBtn value={searched} />}
                        </div>

                        {/* Quick stats grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                            {
                              label: "State / UT",
                              value: parsed?.stateName ?? "—",
                              icon: MapPin,
                            },
                            {
                              label: "Taxpayer Type",
                              value: TAXPAYER_TYPES[taxpayerType] ?? taxpayerType ?? "—",
                              icon: Tag,
                            },
                            {
                              label: "Reg. Date",
                              value: regDate || "—",
                              icon: Calendar,
                            },
                            {
                              label: "GST Status",
                              value: status || "—",
                              icon: CheckCircle,
                            },
                          ].map(({ label, value, icon: Icon }) => (
                            <div key={label} className="bg-white/10 border border-white/10 rounded-xl p-3">
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <Icon size={11} className="text-sky-300" />
                                <span className="text-[9px] font-bold text-white/40 uppercase tracking-wide">{label}</span>
                              </div>
                              <p className="text-white font-bold text-sm leading-tight">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* GSTIN Breakdown Card */}
                    <motion.div variants={fadeUp}
                      className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                      <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                        <Layers size={15} /> GSTIN Structure Breakdown
                      </h3>
                      {parsed ? (
                        <div className="space-y-1">
                          {/* Visual breakdown bar */}
                          <div className="flex rounded-xl overflow-hidden font-mono text-xs font-bold mb-4">
                            {[
                              { chars: searched!.slice(0, 2),  label: "State",    bg: "bg-[#00416a]",   text: "text-white" },
                              { chars: searched!.slice(2, 12), label: "PAN",      bg: "bg-sky-500",     text: "text-white" },
                              { chars: searched!.slice(12, 13),label: "Entity",   bg: "bg-teal-500",    text: "text-white" },
                              { chars: searched!.slice(13, 14),label: "Z",        bg: "bg-violet-500",  text: "text-white" },
                              { chars: searched!.slice(14, 15),label: "Check",    bg: "bg-orange-500",  text: "text-white" },
                            ].map(({ chars, label, bg, text }) => (
                              <div key={label}
                                className={`${bg} ${text} flex flex-col items-center justify-center px-2 py-2.5 flex-1 min-w-0`}>
                                <span className="tracking-widest text-sm md:text-base">{chars}</span>
                                <span className="text-[8px] opacity-70 mt-0.5 font-semibold whitespace-nowrap">{label}</span>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { label: "State Code",   value: `${parsed.stateCode} — ${parsed.stateName}`, icon: MapPin },
                              { label: "PAN Number",   value: parsed.pan,         icon: CreditCard },
                              { label: "Entity Number",value: parsed.entityNum,   icon: Hash },
                              { label: "Checksum",     value: searched!.slice(14),icon: Shield },
                            ].map(({ label, value, icon: Icon }) => (
                              <div key={label}
                                className="flex items-center gap-2.5 p-3 bg-gray-50 border border-gray-100 rounded-xl">
                                <div className="w-7 h-7 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0">
                                  <Icon size={12} className="text-[#00416a]" />
                                </div>
                                <div>
                                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">{label}</p>
                                  <p className="text-sm font-bold text-gray-800 font-mono">{value}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-400">Search a GSTIN to see breakdown.</p>
                      )}
                    </motion.div>

                    {/* Business Details */}
                    <motion.div variants={fadeUp}
                      className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                      <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                        <Building2 size={15} /> Business Details
                      </h3>
                      <div className="space-y-1">
                        <InfoRow icon={User}     label="Legal Name"      value={legalName}    highlight />
                        <InfoRow icon={Tag}      label="Trade Name"      value={tradeName || legalName} />
                        <InfoRow icon={Layers}   label="Taxpayer Type"   value={TAXPAYER_TYPES[taxpayerType] ?? taxpayerType} />
                        <InfoRow icon={CheckCircle} label="GST Status"   value={status} />
                        <InfoRow icon={Calendar} label="Registration Date" value={regDate} />
                        {cancelDate && (
                          <InfoRow icon={XCircle} label="Cancellation Date" value={cancelDate} />
                        )}
                        <InfoRow icon={Globe}    label="State / UT"      value={parsed?.stateName} />
                        <InfoRow icon={Hash}     label="State Code"      value={parsed ? `${parsed.stateCode} (${parsed.stateName})` : undefined} />
                        {/* Nature of business */}
                        {Array.isArray(data?.nature_of_business) && (data.nature_of_business as string[]).length > 0 && (
                          <div className="flex items-start gap-3 p-3 rounded-xl text-sm hover:bg-gray-50 transition">
                            <div className="w-7 h-7 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 mt-0.5">
                              <ClipboardList size={13} className="text-[#00416a]" />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Nature of Business</p>
                              <div className="flex flex-wrap gap-1.5 mt-1.5">
                                {(data.nature_of_business as string[]).map(n => (
                                  <span key={n} className="bg-[#00416a]/8 text-[#00416a] text-[11px] font-semibold px-2 py-0.5 rounded-full border border-[#00416a]/10">
                                    {n}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Address Card */}
                    {address && (
                      <motion.div variants={fadeUp}
                        className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                        <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                          <MapPin size={15} /> Principal Place of Business
                        </h3>
                        <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                          <div className="w-9 h-9 rounded-xl bg-[#00416a] flex items-center justify-center shrink-0">
                            <MapPin size={15} className="text-white" />
                          </div>
                          <div className="space-y-0.5">
                            {address.address && (
                              <p className="text-sm font-semibold text-gray-800">{address.address as string}</p>
                            )}
                            {(address.city || address.district) && (
                              <p className="text-sm text-gray-600">{[address.city, address.district].filter(Boolean).join(", ")}</p>
                            )}
                            {address.state && (
                              <p className="text-sm text-gray-600">{address.state as string}</p>
                            )}
                            {address.pincode && (
                              <p className="text-sm font-bold text-[#00416a]">PIN: {address.pincode as string}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Filing History */}
                    {Array.isArray(filings) && filings.length > 0 && (
                      <motion.div variants={fadeUp}
                        className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                        <h3 className="text-sm font-bold text-[#00416a] mb-4 flex items-center gap-2">
                          <BarChart3 size={15} /> GST Return Filing History
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="bg-[#00416a] text-white text-[10px] font-bold uppercase tracking-wide">
                                {["Return Type", "Tax Period", "Filed On", "Status"].map(h => (
                                  <th key={h} className="px-3 py-2.5 text-left first:rounded-tl-xl last:rounded-tr-xl">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                              {(filings as Record<string,string>[]).slice(0, 12).map((f, i) => (
                                <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"} hover:bg-[#00416a]/4 transition-colors`}>
                                  <td className="px-3 py-2 font-bold text-[#00416a]">{f.return_type ?? f.rtntype ?? "—"}</td>
                                  <td className="px-3 py-2 text-gray-600">{f.tax_period ?? f.taxp ?? "—"}</td>
                                  <td className="px-3 py-2 text-gray-600">{f.date_of_filing ?? f.dof ?? "—"}</td>
                                  <td className="px-3 py-2">
                                    {(f.status ?? f.mof ?? "").toLowerCase() === "filed" ? (
                                      <span className="text-emerald-600 font-bold">Filed</span>
                                    ) : (
                                      <span className="text-orange-500 font-bold">{f.status ?? f.mof ?? "—"}</span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* ─── RIGHT: Sticky Panel ─── */}
                  <div className="space-y-5 lg:sticky lg:top-24">

                    {/* Verification Badge */}
                    <motion.div variants={fadeUp}
                      className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${status.toLowerCase() === "active" ? "bg-emerald-100" : "bg-red-100"}`}>
                          {status.toLowerCase() === "active"
                            ? <CheckCircle size={20} className="text-emerald-600" />
                            : <XCircle size={20} className="text-red-500" />}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold">Verification Result</p>
                          <p className={`text-lg font-extrabold ${status.toLowerCase() === "active" ? "text-emerald-600" : "text-red-600"}`}>
                            {status.toLowerCase() === "active" ? "✓ GSTIN Valid & Active" : `⚠ Status: ${status}`}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs border-t border-gray-100 pt-4">
                        {[
                          { l: "GSTIN",          v: searched ?? "—" },
                          { l: "Business Name",  v: legalName || "—" },
                          { l: "Reg. State",     v: parsed?.stateName ?? "—" },
                          { l: "Type",           v: TAXPAYER_TYPES[taxpayerType] ?? taxpayerType ?? "—" },
                          { l: "Registered On",  v: regDate || "—" },
                        ].map(({ l, v }) => (
                          <div key={l} className="flex justify-between gap-2">
                            <span className="text-gray-400 font-semibold shrink-0">{l}</span>
                            <span className="text-gray-800 font-bold text-right truncate">{v}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* ITC Alert */}
                    <motion.div variants={fadeUp}
                      className={`rounded-2xl border p-4 flex items-start gap-3 ${status.toLowerCase() === "active"
                        ? "bg-emerald-50 border-emerald-100"
                        : "bg-red-50 border-red-100"}`}>
                      {status.toLowerCase() === "active"
                        ? <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        : <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />}
                      <div>
                        <p className={`text-xs font-bold ${status.toLowerCase() === "active" ? "text-emerald-700" : "text-red-700"}`}>
                          {status.toLowerCase() === "active"
                            ? "✓ Safe for ITC Claim"
                            : "⚠ ITC Risk — Do Not Proceed"}
                        </p>
                        <p className={`text-[11px] mt-1 leading-relaxed ${status.toLowerCase() === "active" ? "text-emerald-600" : "text-red-600"}`}>
                          {status.toLowerCase() === "active"
                            ? "This GSTIN is active. You may proceed with this vendor for GST invoicing and ITC claims, subject to GSTR-2B matching."
                            : "This GSTIN is not active. Accepting invoices from this party risks your ITC claim rejection and tax liability."}
                        </p>
                      </div>
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div variants={fadeUp}
                      className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 space-y-3">
                      <p className="text-sm font-bold text-[#00416a]">Need GST Registration or Filing Help?</p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Our CA team handles GST registration, monthly/quarterly return filing (GSTR-1, GSTR-3B), ITC reconciliation, and notices — from ₹499.
                      </p>
                      <button onClick={handleWA}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25d366] text-white text-sm font-bold hover:bg-[#1ebe5d] active:scale-[0.97] transition-all shadow-lg shadow-green-500/20">
                        <MessageCircle size={15} /> Ask on WhatsApp
                      </button>
                      <Link href="/contact"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00416a] text-white text-sm font-bold hover:bg-[#002b45] active:scale-[0.97] transition-all">
                        Free Consultation <ArrowRight size={14} />
                      </Link>
                    </motion.div>

                    {/* GST Key Facts */}
                    <motion.div variants={fadeUp}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                      <p className="text-xs font-bold text-[#00416a] mb-3">GST Quick Facts</p>
                      <div className="space-y-2">
                        {[
                          { label: "GSTIN Length",     value: "15 Characters",        icon: Hash },
                          { label: "First 2 Digits",   value: "State Code (01–38)",   icon: MapPin },
                          { label: "Next 10 Chars",    value: "PAN of Business",      icon: CreditCard },
                          { label: "13th Character",   value: "Entity Number",        icon: Layers },
                          { label: "14th Character",   value: "'Z' (Always Fixed)",   icon: Lock },
                          { label: "15th Character",   value: "Checksum Digit",       icon: Shield },
                          { label: "GST Registration", value: "Mandatory > ₹20L",    icon: BadgeCheck },
                          { label: "ITC Eligibility",  value: "Active GSTIN Only",    icon: CheckCircle },
                        ].map(({ label, value, icon: Icon }) => (
                          <div key={label} className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1.5 text-gray-500">
                              <Icon size={11} className="text-[#00416a]" /> {label}
                            </span>
                            <span className="font-bold text-gray-700">{value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                How It Works
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Verify Any GSTIN in 3 Steps
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: Hash,
                  title: "Enter GSTIN",
                  desc: "Type or paste the 15-character GSTIN you want to verify. The tool auto-validates the format before fetching data.",
                  color: "bg-blue-50 border-blue-100",
                  iconBg: "bg-[#00416a]",
                },
                {
                  step: "02",
                  icon: Search,
                  title: "Live GSTN Lookup",
                  desc: "We fetch real-time data from the GSTN database — business name, registration status, address, taxpayer type and filing history.",
                  color: "bg-sky-50 border-sky-100",
                  iconBg: "bg-sky-600",
                },
                {
                  step: "03",
                  icon: BadgeCheck,
                  title: "Get Full Report",
                  desc: "Instantly see the complete GST profile — whether the GSTIN is active, safe for ITC claims, and all registered business details.",
                  color: "bg-emerald-50 border-emerald-100",
                  iconBg: "bg-emerald-600",
                },
              ].map(({ step, icon: Icon, title, desc, color, iconBg }) => (
                <motion.div key={step} variants={fadeUp}
                  className={`${color} border rounded-2xl p-6 relative`}>
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="absolute top-4 right-5 text-5xl font-extrabold text-gray-100 select-none">
                    {step}
                  </div>
                  <p className="text-base font-extrabold text-[#00416a] mb-2">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
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
                GSTIN — Everything You Need to Know
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                A complete reference on GST Identification Numbers — structure, verification, ITC rules, and compliance.
              </p>
            </motion.div>

            <div className="space-y-14">

              {/* Block 1 */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    What Is a GSTIN and Why Does It Matter?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    <strong>GSTIN (Goods and Services Tax Identification Number)</strong> is a unique 15-character alphanumeric number assigned to every business registered under India's Goods and Services Tax regime. Introduced along with GST on July 1, 2017, the GSTIN replaced the earlier VAT TIN, Service Tax Number, and Central Excise Registration under a unified national tax identity.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Every business with an annual turnover exceeding <strong>₹20 lakh</strong> (₹10 lakh in special category states) must obtain a GSTIN. Businesses making inter-state supplies, e-commerce operators, TDS/TCS deductors, and casual taxable persons also require mandatory registration irrespective of turnover.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The GSTIN is critical for <strong>Input Tax Credit (ITC)</strong> — the mechanism that prevents cascading taxation by allowing businesses to offset tax paid on purchases against tax collected on sales. To claim ITC, your supplier's GSTIN must be active, correctly stated on the invoice, and the supplier must file their GSTR-1 returns diligently.
                  </p>
                </div>

                {/* GSTIN Structure Table */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-5 py-3">
                    <p className="text-white font-bold text-sm">GSTIN Structure — Position by Position</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["Position 1–2",   "State Code",           "01–38 (each state/UT has unique code)"],
                      ["Position 3–12",  "PAN Number",           "Permanent Account Number of taxpayer"],
                      ["Position 13",    "Entity Number",        "1–9, A–Z for multiple GSTINs per PAN in same state"],
                      ["Position 14",    "'Z' (Fixed)",          "Always 'Z' — default alphabetic character"],
                      ["Position 15",    "Checksum Digit",       "0–9 or A–Z, validates GSTIN authenticity"],
                    ].map(([pos, field, desc], i) => (
                      <div key={pos}
                        className={`grid grid-cols-1 px-4 py-3 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                        <div className="flex justify-between mb-1">
                          <span className="font-bold text-[#00416a] font-mono">{pos}</span>
                          <span className="font-bold text-gray-700">{field}</span>
                        </div>
                        <p className="text-gray-500">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Block 2 — ITC Rules */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6">
                  GSTIN Verification &amp; ITC Compliance — Key Rules
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      icon: CheckCircle,
                      title: "Always Verify Before Payment",
                      color: "bg-emerald-50 border-emerald-100",
                      iconBg: "bg-emerald-100", iconColor: "text-emerald-600",
                      points: [
                        "Verify GSTIN is Active before accepting any invoice",
                        "Match business name on invoice with GSTN records",
                        "One search = full compliance check in seconds",
                        "Prevents fake GSTIN invoice fraud",
                        "Mandatory best practice for ITC protection",
                      ],
                    },
                    {
                      icon: FileText,
                      title: "ITC Eligibility Rules",
                      color: "bg-blue-50 border-blue-100",
                      iconBg: "bg-blue-100", iconColor: "text-blue-600",
                      points: [
                        "Supplier GSTIN must be Active at time of supply",
                        "Invoice must carry correct GSTIN of supplier",
                        "Supplier must file GSTR-1 for ITC to appear in GSTR-2B",
                        "ITC limited to what appears in your GSTR-2B",
                        "Rule 36(4): max 5% provisional ITC allowed",
                      ],
                    },
                    {
                      icon: AlertCircle,
                      title: "Risks of Fake or Cancelled GSTIN",
                      color: "bg-red-50 border-red-100",
                      iconBg: "bg-red-100", iconColor: "text-red-600",
                      points: [
                        "ITC reversal + 18% interest p.a. on reversed amount",
                        "Penalty under Section 122 of CGST Act",
                        "Prosecution in cases of fraudulent ITC",
                        "GST audit scrutiny and department notices",
                        "Vendor blacklisting from future dealings",
                      ],
                    },
                    {
                      icon: Building2,
                      title: "GST Registration Thresholds",
                      color: "bg-violet-50 border-violet-100",
                      iconBg: "bg-violet-100", iconColor: "text-violet-600",
                      points: [
                        "₹20 lakh turnover: mandatory for service providers",
                        "₹40 lakh: mandatory for goods-only suppliers (most states)",
                        "₹10 lakh: special category states (NE India, Uttarakhand)",
                        "Voluntary registration allowed below threshold",
                        "Composition opt-in available up to ₹1.5 crore",
                      ],
                    },
                    {
                      icon: ClipboardList,
                      title: "Key GST Returns to File",
                      color: "bg-orange-50 border-orange-100",
                      iconBg: "bg-orange-100", iconColor: "text-orange-600",
                      points: [
                        "GSTR-1: Outward supply details (monthly/quarterly)",
                        "GSTR-3B: Monthly summary return with tax payment",
                        "GSTR-2B: Auto-drafted ITC availability (monthly)",
                        "GSTR-9: Annual return (turnover > ₹2 crore)",
                        "GSTR-9C: Reconciliation statement (> ₹5 crore)",
                      ],
                    },
                    {
                      icon: TrendingUp,
                      title: "Benefits of GST Registration",
                      color: "bg-teal-50 border-teal-100",
                      iconBg: "bg-teal-100", iconColor: "text-teal-600",
                      points: [
                        "Legally collect GST from customers",
                        "Claim ITC on all business purchases",
                        "Inter-state supply without restrictions",
                        "Participate in government tenders (GST required)",
                        "Establish credibility with large corporates",
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
                Why Use Taxvio's GST Number Search?
              </h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Zap,          text: "Instant live results from GSTN — no registration, no login, no CAPTCHA. Just enter GSTIN and get full business details in seconds." },
                { icon: Shield,       text: "Format validation before API call — we check GSTIN structure client-side first, preventing unnecessary failed lookups and giving instant feedback." },
                { icon: Layers,       text: "Visual GSTIN breakdown — see exactly which part of the GSTIN represents the state code, PAN, entity number and checksum at a glance." },
                { icon: BadgeCheck,   text: "ITC safety alert — instantly know if a vendor's GSTIN is safe for ITC claims or if there's a risk of rejection, before you make payment." },
                { icon: Building2,    text: "Complete business profile — legal name, trade name, registration date, taxpayer type, nature of business and registered address all in one place." },
                { icon: BarChart3,    text: "Return filing history — view the GST return compliance track record of any business, so you can assess your ITC risk before onboarding a vendor." },
                { icon: Calculator,   text: "100% free, unlimited searches — no subscription, no credits, no limits. Verify as many GSTINs as you need for your business compliance." },
                { icon: FileText,     text: "CA-backed GST services — our team handles GST registration, GSTR-1, GSTR-3B, ITC reconciliation, annual returns and GST notices from ₹499." },
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
                GST Number Search — Frequently Asked Questions
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
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-[#00416a] mb-6">
              Related Tools &amp; Services
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "PPF Calculator",        desc: "PPF maturity, loan & withdrawal",   href: "/tools/ppf-calculator",           icon: Landmark },
                { title: "Income Tax Calculator", desc: "FY 2024-25 old & new regime",       href: "/tools/income-tax-calculator",    icon: Calculator },
                { title: "EMI Calculator",        desc: "Home, Car & Personal Loan EMI",     href: "/tools/emi-calculator",           icon: CreditCard },
                { title: "GST Registration",      desc: "New GST registration from ₹499",   href: "/serviceslist/gst/gst-registration", icon: FileText },
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
                <Zap size={11} className="text-sky-300" /> CA-Assisted GST &amp; Tax Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Need Help with GST Registration or Filing?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Taxvio's CA team handles new GST registration, monthly GSTR-1 &amp; GSTR-3B filing, ITC reconciliation, annual GSTR-9, and GST notice replies — all online, from ₹499.
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
                GST Registration · GSTR-1 / 3B Filing · ITC Reconciliation · Annual Return · GST Notice Reply · 100% Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}