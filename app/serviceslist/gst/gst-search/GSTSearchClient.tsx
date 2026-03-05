"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone, MessageCircle,
  Shield, Zap, FileText, Search, AlertCircle, Building2, MapPin,
  Calendar, User, RefreshCw, ExternalLink, Info, Copy, Check,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need GST assistance.")}`;
const DARK = { background: "linear-gradient(135deg,#00416a 0%,#003257 55%,#001e36 100%)" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// ─── State Codes ─────────────────────────────────────────────────────────────
const STATE_CODES: Record<string, string> = {
  "01":"Jammu & Kashmir","02":"Himachal Pradesh","03":"Punjab","04":"Chandigarh",
  "05":"Uttarakhand","06":"Haryana","07":"Delhi","08":"Rajasthan",
  "09":"Uttar Pradesh","10":"Bihar","11":"Sikkim","12":"Arunachal Pradesh",
  "13":"Nagaland","14":"Manipur","15":"Mizoram","16":"Tripura",
  "17":"Meghalaya","18":"Assam","19":"West Bengal","20":"Jharkhand",
  "21":"Odisha","22":"Chhattisgarh","23":"Madhya Pradesh","24":"Gujarat",
  "25":"Daman & Diu","26":"Dadra & Nagar Haveli","27":"Maharashtra",
  "28":"Andhra Pradesh (Old)","29":"Karnataka","30":"Goa","31":"Lakshadweep",
  "32":"Kerala","33":"Tamil Nadu","34":"Puducherry","35":"Andaman & Nicobar",
  "36":"Telangana","37":"Andhra Pradesh","38":"Ladakh",
  "97":"Other Territory","99":"Centre Jurisdiction",
};

const PAN_ENTITY: Record<string, string> = {
  P:"Individual / Proprietor", C:"Private / Public Company", H:"Hindu Undivided Family (HUF)",
  F:"Firm / Partnership", A:"Association of Persons (AOP)", T:"Trust",
  B:"Body of Individuals (BOI)", L:"Limited Liability Partnership (LLP)",
  J:"Artificial Juridical Person", G:"Government Entity",
};

const TAXPAYER_TYPE_MAP: Record<string, string> = {
  "Regular":"Regular Taxpayer",
  "Composition":"Composition Scheme Dealer",
  "Casual":"Casual Taxable Person",
  "Input Service Distributor":"Input Service Distributor (ISD)",
  "SEZ Unit":"SEZ Unit",
  "SEZ Developer":"SEZ Developer",
  "Non Resident Online Services Provider":"Non-Resident Online Services Provider",
  "Tax Deductor":"Tax Deductor (TDS)",
  "Tax Collector":"Tax Collector (TCS / E-Commerce Operator)",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function isValidGSTIN(g: string) {
  return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(g);
}

function decodeGSTIN(g: string) {
  if (g.length !== 15) return null;
  return {
    stateCode : g.slice(0, 2),
    stateName : STATE_CODES[g.slice(0, 2)] ?? "Unknown State",
    pan       : g.slice(2, 12),
    entityType: PAN_ENTITY[g[5]] ?? "Other Entity",
    entityNo  : g[12],
    checkDigit: g[14],
  };
}

function buildAddress(addr: any): string {
  if (!addr) return "";
  return [addr.bnm, addr.bno, addr.flno, addr.st, addr.loc, addr.dst, addr.stcd, addr.pncd]
    .filter(Boolean).join(", ");
}

function getStatus(data: any) {
  const s = (data?.sts || data?.gst_in_status || data?.stsCd || "").toLowerCase();
  if (s === "active") return { label: "Active",    bg: "#dcfce7", color: "#15803d", icon: "✅" };
  if (s.includes("cancel")) return { label: "Cancelled", bg: "#fee2e2", color: "#dc2626", icon: "❌" };
  if (s.includes("suspend")) return { label: "Suspended", bg: "#ffedd5", color: "#ea580c", icon: "⚠️" };
  return { label: s || "Unknown", bg: "#f3f4f6", color: "#374151", icon: "ℹ️" };
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function DetailRow({ icon: Icon, label, value, mono }: {
  icon: React.ElementType; label: string; value?: string; mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  if (!value || value.trim() === "" || value === "-") return null;

  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex items-start gap-4 py-3.5 border-b border-gray-100 last:border-0 group">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-blue-50">
        <Icon size={14} className="text-[#00416a]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{label}</p>
        <p className={`text-gray-800 font-semibold text-sm mt-0.5 break-words ${mono ? "font-mono" : ""}`}>
          {value}
        </p>
      </div>
      <button onClick={copy} title="Copy"
        className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1.5 p-1.5 rounded-lg hover:bg-gray-100">
        {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} className="text-gray-400" />}
      </button>
    </div>
  );
}

function SkeletonLoader() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="h-28 bg-gray-200" />
      <div className="p-6 space-y-5">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="flex gap-4">
            <div className="w-8 h-8 bg-gray-200 rounded-lg shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-2.5 bg-gray-200 rounded w-24" />
              <div className="h-4 bg-gray-200 rounded w-48" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── GSTIN Structure diagram chars ────────────────────────────────────────────
const GSTIN_SEGMENTS = [
  { chars: "09",         label: "State Code",   color: "#2563eb" },
  { chars: "AAAAA1234A", label: "PAN",           color: "#7c3aed" },
  { chars: "1",          label: "Entity No.",   color: "#059669" },
  { chars: "Z",          label: "Default",      color: "#ea580c" },
  { chars: "5",          label: "Check Digit",  color: "#dc2626" },
];

const HOW_TO_READ = [
  { pos:"01–02", field:"State Code",    eg:"09",           desc:"Identifies the GST-registered state (09 = UP)" },
  { pos:"03–12", field:"PAN Number",    eg:"AAAAA1234A",   desc:"Taxpayer's 10-digit PAN — links GST to IT records" },
  { pos:"13",    field:"Entity Number", eg:"1",            desc:"Serial no. for multiple registrations under same PAN" },
  { pos:"14",    field:"Default 'Z'",   eg:"Z",            desc:"Reserved character — always 'Z' in every GSTIN" },
  { pos:"15",    field:"Check Digit",   eg:"5",            desc:"Alphanumeric validation digit for the full GSTIN" },
];

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity:[
    { "@type":"Question", name:"What is a GSTIN?",
      acceptedAnswer:{ "@type":"Answer", text:"GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit alphanumeric identifier assigned to every GST-registered taxpayer in India. The first 2 digits are the state code, digits 3–12 are the taxpayer's PAN, digit 13 is an entity number, digit 14 is always Z, and digit 15 is a check digit." }},
    { "@type":"Question", name:"How do I verify a GSTIN for free?",
      acceptedAnswer:{ "@type":"Answer", text:"Use Taxvio's free GSTIN search tool. Enter the 15-digit GSTIN in the search box and click Verify GSTIN. The tool fetches real-time data from the GST portal — showing legal name, trade name, status (Active/Cancelled), taxpayer type, registration date, jurisdiction, and principal place of business." }},
    { "@type":"Question", name:"Why should I verify GSTIN before accepting an invoice?",
      acceptedAnswer:{ "@type":"Answer", text:"GSTIN verification is essential before accepting GST invoices from suppliers. ITC (Input Tax Credit) can only be claimed on invoices from active, valid GSTINs. If the supplier's GSTIN is fake or cancelled, your ITC claim is disallowed under Rule 36 of CGST Rules, and you may face demand notices and penalties from the GST department." }},
    { "@type":"Question", name:"What does GSTIN status Active vs Cancelled mean?",
      acceptedAnswer:{ "@type":"Answer", text:"Active status means the taxpayer is currently registered, can issue valid tax invoices, and you can claim ITC on their invoices. Cancelled status means the registration has been cancelled — invoices issued with a cancelled GSTIN are not valid tax documents, and ITC claimed on them is fully disallowed by the GST department." }},
  ],
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  name:"GSTIN Search and Verification — Free Online Tool",
  serviceType:"GST Verification",
  description:"Free online GSTIN verification tool. Enter any 15-digit GST number to instantly get business name, registration status, taxpayer type, jurisdiction, registration date and address.",
  provider:{ "@type":"ProfessionalService", name:"Taxvio", url:"https://www.taxvio.in", telephone:"+918937980366" },
  areaServed:"India",
  offers:{ "@type":"Offer", price:"0", priceCurrency:"INR" },
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function GSTSearchClient() {
  const [gstin, setGstin]       = useState("");
  const [result, setResult]     = useState<any>(null);
  const [decoded, setDecoded]   = useState<ReturnType<typeof decodeGSTIN>>(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const resultRef               = useRef<HTMLDivElement>(null);

  const handleSearch = async () => {
    const clean = gstin.trim().toUpperCase();
    setError(""); setResult(null); setDecoded(null); setHasSearched(true);

    if (!isValidGSTIN(clean)) {
      setError(
        clean.length !== 15
          ? `GSTIN must be exactly 15 characters. You entered ${clean.length}.`
          : "Invalid GSTIN format. Example: 09AAAAA1234A1Z5"
      );
      return;
    }

    setLoading(true);

    // Scroll to result area
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);

    try {
      // Call our Next.js API route proxy (see /app/api/gstin/route.ts)
      const res = await fetch(`/api/gstin?gstin=${clean}`);
      const json = await res.json();

      if (!res.ok || json.error) {
        setError(json.error || "GSTIN not found. Please verify the number and try again.");
        setLoading(false);
        return;
      }

      setResult(json.data);
      setDecoded(decodeGSTIN(clean));
    } catch {
      setError("Network error. Please check your connection and try again.");
    }

    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleReset = () => {
    setGstin(""); setResult(null); setDecoded(null);
    setError(""); setHasSearched(false);
  };

  const status = result ? getStatus(result) : null;

  // Build nature-of-business tags
  const nba: string[] = result?.nba ?? [];

  // Build all additional places
  const additionalAddresses: string[] = (result?.adadr ?? [])
    .map((a: any) => buildAddress(a?.addr ?? {}))
    .filter(Boolean);

  const gstPortalUrl = `https://services.gst.gov.in/services/searchtp`;

  return (
    <>
      <Script id="gst-search-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-search-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO + LIVE SEARCH BOX ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white pb-20" style={DARK}
          aria-label="Free GSTIN Search and Verification Tool"
          itemScope itemType="https://schema.org/Service">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize:"26px 26px",
          }} />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(45,212,191,0.1) 0%,transparent 65%)" }} />

          <div className="relative max-w-4xl mx-auto px-6 pt-20">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" style={{ color:"rgba(255,255,255,0.5)" }}>
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li style={{ color:"rgba(255,255,255,0.3)" }}>›</li>
                <li><Link href="/serviceslist/gst" className="hover:text-white transition">GST Services</Link></li>
                <li style={{ color:"rgba(255,255,255,0.3)" }}>›</li>
                <li className="text-white font-medium">GSTIN Search</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)" }}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Free · Real-Time · No Login Required
              </motion.div>

              <motion.h1 variants={fadeUp}
                className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-3"
                itemProp="name">
                GSTIN Search &amp; Verification
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl font-medium mb-2" style={{ color:"#7dd3fc" }}>
                Free Online GST Number Check — Instant Result
              </motion.p>
              <motion.p variants={fadeUp} className="text-base max-w-xl mx-auto mb-10"
                style={{ color:"rgba(255,255,255,0.68)" }}>
                Enter any 15-digit GSTIN to instantly verify business name, status,
                taxpayer type, registration date &amp; address from the GST portal.
              </motion.p>

              {/* ── SEARCH CARD ─────────────────────────────────────────────── */}
              <motion.div variants={scaleIn}
                className="max-w-2xl mx-auto rounded-2xl p-6"
                style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)" }}>

                <div className="flex gap-3">
                  {/* Input */}
                  <div className="flex-1 relative">
                    <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      value={gstin}
                      onChange={e => setGstin(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,15))}
                      onKeyDown={handleKeyDown}
                      placeholder="e.g. 09AAAAA1234A1Z5"
                      maxLength={15}
                      spellCheck={false}
                      autoComplete="off"
                      className="w-full pl-10 pr-12 py-4 rounded-xl text-gray-800 text-sm font-mono font-semibold tracking-wider focus:outline-none focus:ring-2 focus:ring-[#00416a] bg-white placeholder:font-sans placeholder:font-normal placeholder:tracking-normal placeholder:text-gray-400"
                      aria-label="Enter 15-digit GSTIN"
                    />
                    {/* live char count */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold"
                      style={{ color: gstin.length === 15 ? "#16a34a" : "#9ca3af" }}>
                      {gstin.length}/15
                    </span>
                  </div>

                  {/* Button */}
                  <button
                    onClick={handleSearch}
                    disabled={loading || gstin.length === 0}
                    className="flex items-center gap-2 px-6 py-4 rounded-xl font-extrabold text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-lg"
                    style={{ background:"#fff", color:"#00416a" }}>
                    {loading
                      ? <><RefreshCw size={15} className="animate-spin" />Checking…</>
                      : <><Search size={15} />Verify</>}
                  </button>
                </div>

                {/* Progress bar while loading */}
                {loading && (
                  <div className="mt-3 h-1 rounded-full overflow-hidden bg-white/20">
                    <motion.div className="h-full rounded-full bg-green-400"
                      initial={{ width:"0%" }}
                      animate={{ width:"85%" }}
                      transition={{ duration: 2.5, ease:"easeInOut" }} />
                  </div>
                )}

                {/* Format hint row */}
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-4"
                  style={{ color:"rgba(255,255,255,0.4)" }}>
                  <span className="text-xs flex items-center gap-1"><Info size={10} /> 2-digit state · 10-digit PAN · entity · Z · check</span>
                </div>
              </motion.div>

              {/* Trust row */}
              <motion.div variants={fadeUp} className="mt-5 flex flex-wrap justify-center gap-5 text-xs"
                style={{ color:"rgba(255,255,255,0.45)" }}>
                <span className="flex items-center gap-1.5"><CheckCircle size={11} />100% Free</span>
                <span className="flex items-center gap-1.5"><Shield size={11} />Live GST portal data</span>
                <span className="flex items-center gap-1.5"><Zap size={11} />No login needed</span>
                <span className="flex items-center gap-1.5"><FileText size={11} />All 38 states &amp; UTs</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ RESULT AREA ══════════════════════════════════════════════════════ */}
        <div ref={resultRef}>
          <AnimatePresence mode="wait">

            {/* Error state */}
            {hasSearched && error && !loading && (
              <motion.section key="error"
                initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                className="py-10 bg-gray-50">
                <div className="max-w-2xl mx-auto px-6">
                  <div className="bg-white border border-red-200 rounded-2xl shadow-sm p-6 flex items-start gap-4">
                    <AlertCircle size={22} className="text-red-500 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-extrabold text-red-700 mb-1">Verification Failed</p>
                      <p className="text-red-600 text-sm">{error}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <button onClick={handleReset}
                          className="inline-flex items-center gap-2 text-sm bg-[#00416a] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#002b45] transition">
                          <RefreshCw size={13} />Try Again
                        </button>
                        <a href={gstPortalUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm border border-gray-200 text-gray-600 px-4 py-2 rounded-xl font-bold hover:bg-gray-50 transition">
                          <ExternalLink size={13} />Verify on GST Portal
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Loading skeleton */}
            {loading && (
              <motion.section key="loading"
                initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                className="py-10 bg-gray-50">
                <div className="max-w-2xl mx-auto px-6">
                  <p className="text-center text-sm text-gray-500 mb-6 font-medium flex items-center justify-center gap-2">
                    <RefreshCw size={14} className="animate-spin text-[#00416a]" />
                    Fetching taxpayer details from GST portal…
                  </p>
                  <SkeletonLoader />
                </div>
              </motion.section>
            )}

            {/* Success result */}
            {!loading && result && decoded && (
              <motion.section key="result"
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                transition={{ duration:0.4 }}
                className="py-10 bg-gray-50"
                aria-label="GSTIN Verification Result">
                <div className="max-w-2xl mx-auto px-6">

                  {/* ── Result Card ─────────────────────────────────────────── */}
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden">

                    {/* Header */}
                    <div className="px-6 py-5" style={{ background:"#00416a" }}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-extrabold text-xl leading-snug break-words">
                            {result.lgnm || result.legal_name_of_business || "—"}
                          </p>
                          {result.tradeNam && result.tradeNam !== (result.lgnm || result.legal_name_of_business) && (
                            <p className="text-sm mt-1" style={{ color:"rgba(255,255,255,0.65)" }}>
                              Trade name: {result.tradeNam}
                            </p>
                          )}
                          {/* GSTIN chip + status */}
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-extrabold tracking-widest rounded-lg px-3 py-1.5 text-white"
                              style={{ background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.25)" }}>
                              {result.gstin || gstin}
                            </span>
                            {status && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold"
                                style={{ background:status.bg, color:status.color }}>
                                {status.icon} {status.label}
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Portal link */}
                        <a href={gstPortalUrl} target="_blank" rel="noopener noreferrer"
                          title="Verify on GST portal"
                          className="shrink-0 flex items-center gap-1 text-xs rounded-xl px-3 py-2 font-semibold transition hover:bg-white/20"
                          style={{ background:"rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.85)" }}>
                          <ExternalLink size={12} />Portal
                        </a>
                      </div>
                    </div>

                    {/* ── Details ─────────────────────────────────────────────── */}
                    <div className="px-6 py-1">
                      <DetailRow icon={Building2} label="Legal Name of Business"
                        value={result.lgnm || result.legal_name_of_business} />
                      <DetailRow icon={FileText}  label="Trade / Business Name"
                        value={result.tradeNam || result.trade_name} />
                      <DetailRow icon={CheckCircle} label="GST Registration Status"
                        value={result.sts || result.gst_in_status || result.stsCd} />
                      <DetailRow icon={User}      label="Taxpayer Type"
                        value={TAXPAYER_TYPE_MAP[result.dty || result.taxpayer_type || ""] || result.dty || result.taxpayer_type} />
                      <DetailRow icon={Calendar}  label="Date of Registration"
                        value={result.rgdt || result.date_of_registration} />
                      {(result.cxdt || result.cancellation_date) && (
                        <DetailRow icon={Calendar} label="Cancellation Date"
                          value={result.cxdt || result.cancellation_date} />
                      )}
                      <DetailRow icon={MapPin}    label="State of Registration"
                        value={`${decoded.stateCode} — ${decoded.stateName}`} />
                      <DetailRow icon={MapPin}    label="Centre Jurisdiction"
                        value={result.ctjCd || result.centre_jurisdiction} />
                      <DetailRow icon={MapPin}    label="State Jurisdiction"
                        value={result.stj || result.ctj || result.state_jurisdiction} />
                      <DetailRow icon={MapPin}    label="Principal Place of Business"
                        value={buildAddress(result.pradr?.addr) || result.pradr?.adr || result.principal_place_of_business} />
                      <DetailRow icon={FileText}  label="PAN (decoded from GSTIN)"
                        value={decoded.pan} mono />
                      <DetailRow icon={Building2} label="Entity Type (from PAN)"
                        value={decoded.entityType} />
                    </div>

                    {/* Nature of Business */}
                    {nba.length > 0 && (
                      <div className="px-6 py-4 border-t border-gray-100">
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                          Nature of Business Activities
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {nba.map((n: string) => (
                            <span key={n}
                              className="text-xs bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1 font-semibold">
                              {n}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional places */}
                    {additionalAddresses.length > 0 && (
                      <div className="px-6 py-4 border-t border-gray-100">
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                          Additional Place(s) of Business
                        </p>
                        {additionalAddresses.map((addr, i) => (
                          <p key={i} className="text-sm text-gray-700 mb-1 flex items-start gap-2">
                            <MapPin size={13} className="text-gray-400 shrink-0 mt-0.5" />{addr}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Footer CTA */}
                    <div className="px-6 py-5 border-t border-gray-100 bg-gray-50 flex flex-wrap gap-3">
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition hover:scale-105">
                        <MessageCircle size={14} />Need GST Help?
                      </a>
                      <button onClick={handleReset}
                        className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition">
                        <RefreshCw size={14} />Search Another GSTIN
                      </button>
                    </div>
                  </div>

                  {/* ITC warning if cancelled */}
                  {status && status.label !== "Active" && (
                    <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
                      className="mt-4 bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-3">
                      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-extrabold text-red-800 text-sm">⚠️ Do Not Accept Invoices from this GSTIN</p>
                        <p className="text-red-700 text-xs mt-1">
                          This GSTIN is <strong>{status.label}</strong>. Invoices issued with a non-active GSTIN
                          are not valid tax documents. Any ITC claimed on such invoices is fully disallowed
                          under Rule 36 of the CGST Rules and may attract demand notices and penalties.
                        </p>
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-3 text-xs bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition">
                          Consult a CA <ArrowRight size={11} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* ══ GSTIN STRUCTURE EXPLAINER ════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="GSTIN Structure Explained">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  How to Read a GSTIN
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GSTIN Structure — What Each Digit Means
                </h2>
              </motion.div>

              {/* Visual segments */}
              <motion.div variants={fadeUp}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-7 mb-8 text-center">
                <p className="text-xs text-gray-500 font-semibold mb-5 uppercase tracking-widest">
                  Example: <span className="font-mono text-[#00416a] normal-case font-bold">09AAAAA1234A1Z5</span>
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {GSTIN_SEGMENTS.map(({ chars, label, color }) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                      <div className="rounded-xl px-4 py-3 font-mono font-extrabold text-white text-base shadow-sm"
                        style={{ background:color, letterSpacing:"0.12em" }}>
                        {chars}
                      </div>
                      <span className="text-[11px] text-gray-500 font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Table */}
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm" aria-label="GSTIN structure table">
                  <thead>
                    <tr style={{ background:"#00416a" }}>
                      {["Position","Field","Example","Description"].map(h => (
                        <th key={h} className="text-left px-5 py-4 text-white font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {HOW_TO_READ.map(({ pos, field, eg, desc }, i) => (
                      <tr key={pos} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3.5 font-mono font-bold text-[#00416a]">{pos}</td>
                        <td className="px-5 py-3.5 font-semibold text-gray-800">{field}</td>
                        <td className="px-5 py-3.5 font-mono text-gray-600">{eg}</td>
                        <td className="px-5 py-3.5 text-gray-600">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO CONTENT ══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="Why Verify GSTIN">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                Why GSTIN Verification is Critical Before Every Business Transaction
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GSTIN verification</strong> is the first step in responsible GST compliance. When you
                  receive a GST invoice from a supplier, the GSTIN on that invoice is the legal basis on which
                  you claim <strong>Input Tax Credit (ITC)</strong> in your GSTR-3B. If the GSTIN is fake,
                  cancelled, or belongs to a different entity, the ITC claim is invalid — and all GST paid on
                  that purchase becomes an unrecoverable cost that the department can demand back with interest
                  and penalty.
                </p>
                <p>
                  Under <strong>Rule 36 of the CGST Rules, 2017</strong>, ITC can only be claimed on invoices
                  issued by a validly registered, active supplier. The GST department&apos;s GSTR-2B
                  auto-populated statement reflects only ITC from active, filing suppliers — meaning ITC from
                  cancelled or non-existent GSTINs is automatically blocked at source. If you&apos;ve already
                  claimed such ITC, an <strong>ASMT-10 notice</strong> under Section 61 will follow, and
                  potentially a demand notice under Section 73 with 10% penalty.
                </p>
                <p>
                  <strong>Fake GSTIN fraud</strong> — where suppliers issue invoices using stolen or fabricated
                  GSTINs, charge GST without filing returns, and pocket the tax — affects thousands of
                  businesses annually. CBIC enforcement data consistently shows GST fraud cases in the hundreds
                  of crores annually. By verifying every new supplier&apos;s GSTIN before transacting, and
                  periodically re-verifying active suppliers, businesses protect themselves from becoming
                  unwitting participants in fraudulent ITC chains.
                </p>
                <p>
                  For <strong>vendor onboarding</strong>, GSTIN verification should be standard alongside PAN
                  verification and bank account confirmation. Many compliant businesses also run quarterly
                  GSTIN re-checks on their existing supplier base to catch registrations that have been
                  suspended or cancelled since onboarding — which would affect ITC on subsequent invoices.
                  Taxvio provides CA-assisted GST compliance services including ITC reconciliation,
                  supplier compliance monitoring, and return filing to keep your GST records clean.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ STATE CODE REFERENCE ════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="GST State Codes India">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Quick Reference
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST State Codes — All States &amp; Union Territories
                </h2>
              </motion.div>
              <motion.div variants={fadeUp}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {Object.entries(STATE_CODES).map(([code, name]) => (
                  <div key={code}
                    className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 hover:border-blue-200 hover:bg-blue-50 transition cursor-default"
                    onClick={() => setGstin(prev => code + prev.slice(2))}>
                    <span className="font-mono font-extrabold text-[#00416a] text-sm w-5 shrink-0">{code}</span>
                    <span className="text-gray-600 text-xs leading-tight">{name}</span>
                  </div>
                ))}
              </motion.div>
              <p className="text-center text-xs text-gray-400 mt-4">
                Click any state code to auto-fill the GSTIN prefix in the search box above.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══ RELATED SERVICES ════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="GST Services by Taxvio">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-[#00416a]">Need CA-Assisted GST Services?</h2>
              <p className="text-gray-500 text-sm mt-2">From registration to compliance — Taxvio handles everything online</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title:"GST Registration",    href:"/serviceslist/gst/gst-registration",  desc:"New GSTIN in 3–7 days — ₹1,499" },
                { title:"GST Return Filing",   href:"/serviceslist/gst/gst-return",        desc:"Monthly GSTR-1 & GSTR-3B — ₹499/month" },
                { title:"GST Notice Reply",    href:"/serviceslist/gst/gst-notice-reply",  desc:"ASMT-10, DRC-01, SCN reply — ₹1,999" },
                { title:"GSTR-9 Annual Return",href:"/serviceslist/gst/gstr-9",            desc:"Annual reconciliation & filing — ₹2,999" },
                { title:"GST Amendment",       href:"/serviceslist/gst/gst-amendment",     desc:"Update GSTIN details, REG-14 — ₹799" },
                { title:"GST Audit Help",      href:"/serviceslist/gst/gst-audit",         desc:"Section 65/66 audit support — ₹3,999" },
              ].map(({ title, href, desc }) => (
                <Link key={title} href={href}
                  className="group flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <ArrowRight size={16} className="text-[#00416a] shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <p className="font-bold text-gray-800 text-sm group-hover:text-[#00416a] transition">{title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═══════════════════════════════════════════════════════ */}
        <section className="py-20 relative overflow-hidden" style={DARK}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle,rgba(56,189,248,0.1) 0%,transparent 70%)" }} />
          <motion.div className="relative max-w-3xl mx-auto px-6 text-center"
            initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white">
              Need Expert GST Assistance?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color:"rgba(255,255,255,0.72)" }}>
              From GST registration to return filing, notice replies, and audit representation —
              Taxvio&apos;s CA team handles everything online. WhatsApp us for a free consultation.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} />WhatsApp — Free Consultation
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                style={{ border:"1px solid rgba(255,255,255,0.3)" }}>
                <Phone size={20} />Call Us
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <Footar />
      </main>
    </>
  );
}