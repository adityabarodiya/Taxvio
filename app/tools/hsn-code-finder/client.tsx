// app/tools/hsn-code-finder/client.tsx
"use client";

import Link from "next/link";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Search,
  ArrowRight,
  ChevronDown,
  Phone,
  MessageCircle,
  FileText,
  Shield,
  BadgeCheck,
  Zap,
  RefreshCw,
  Info,
  Tag,
  Package,
  Layers,
  Filter,
  X,
  Copy,
  CheckCheck,
  ExternalLink,
  Calculator,
  TrendingUp,
  BookOpen,
  AlertCircle,
  Menu,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import Footar from "@/components/Footar";
import { HSN_DATA, CATEGORIES, GST_RATES, type HSNEntry } from "./data";

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE = "918937980366";
const PAGE_SIZE = 15;

// ─── GST Rate Badge ───────────────────────────────────────────────────────────
const RATE_COLORS: Record<number, string> = {
  0: "bg-gray-100 text-gray-600 border-gray-200",
  3: "bg-yellow-50 text-yellow-700 border-yellow-200",
  5: "bg-emerald-50 text-emerald-700 border-emerald-200",
  12: "bg-blue-50 text-blue-700 border-blue-200",
  18: "bg-violet-50 text-violet-700 border-violet-200",
  28: "bg-red-50 text-red-700 border-red-200",
};

const RATE_BG_STRONG: Record<number, string> = {
  0: "bg-gray-500",
  3: "bg-yellow-500",
  5: "bg-emerald-500",
  12: "bg-blue-500",
  18: "bg-violet-600",
  28: "bg-red-600",
};

function GSTBadge({ rate }: { rate: number }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold border ${
        RATE_COLORS[rate] ?? "bg-gray-100 text-gray-600 border-gray-200"
      }`}
    >
      {rate === 0 ? "Exempt" : `${rate}%`}
    </span>
  );
}

// ─── Copy Button ──────────────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg hover:bg-gray-100 active:scale-95 transition text-gray-400 hover:text-[#00416a]"
      title="Copy HSN/SAC code"
    >
      {copied ? (
        <CheckCheck size={13} className="text-emerald-600" />
      ) : (
        <Copy size={13} />
      )}
    </button>
  );
}

// ─── Result Card ─────────────────────────────────────────────────────────────
function HSNCard({
  entry,
  isExpanded,
  onToggle,
}: {
  entry: HSNEntry;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className={`border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 ${
        isExpanded
          ? "border-[#00416a]/30 shadow-md"
          : "border-gray-200 hover:border-[#00416a]/20 hover:shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-3 sm:p-4 flex items-start gap-2.5 sm:gap-3 hover:bg-gray-50/60 active:bg-gray-100/50 transition"
      >
        {/* HSN Badge */}
        <div className="shrink-0 mt-0.5">
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center ${
              RATE_BG_STRONG[entry.gstRate] ?? "bg-gray-500"
            }`}
          >
            <span className="text-white text-[9px] sm:text-[10px] font-extrabold leading-tight text-center">
              {entry.gstRate === 0 ? "NIL" : `${entry.gstRate}%`}
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
            <span className="font-mono text-xs sm:text-sm font-extrabold text-[#00416a] tracking-wide">
              {entry.hsn}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-semibold ${
                entry.type === "goods"
                  ? "bg-blue-50 text-blue-600"
                  : "bg-violet-50 text-violet-600"
              }`}
            >
              {entry.type === "goods" ? "📦 Goods" : "🛠️ Service"}
            </span>
            <span className="text-[9px] sm:text-[10px] bg-gray-100 text-gray-500 px-1.5 sm:px-2 py-0.5 rounded-full font-medium hidden sm:inline">
              {entry.category}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug line-clamp-2 text-left">
            {entry.description}
          </p>
          {/* Show category on mobile below description */}
          <p className="text-[9px] text-gray-400 mt-1 sm:hidden">
            {entry.category}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-1 sm:gap-1.5">
          <div className="hidden md:block">
            <GSTBadge rate={entry.gstRate} />
          </div>
          <div
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
              isExpanded ? "bg-[#00416a] rotate-180" : "bg-gray-100"
            }`}
          >
            <ChevronDown
              size={13}
              className={isExpanded ? "text-white" : "text-gray-500"}
            />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-1 border-t border-gray-100">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Left: details */}
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
                      {entry.type === "goods" ? "HSN Code" : "SAC Code"}
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="font-mono font-extrabold text-[#00416a] text-sm">
                        {entry.hsn}
                      </span>
                      <CopyButton text={entry.hsn} />
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                      Description
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                      Chapter / Classification
                    </p>
                    <p className="text-xs text-gray-600 font-medium break-words">
                      {entry.chapter}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                      Category
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      {entry.category}
                    </p>
                  </div>
                </div>

                {/* Right: GST details */}
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="bg-[#f8fbfd] border border-[#deeef7] rounded-xl p-3 sm:p-3.5">
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-2">
                      GST Rate Details
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">GST Rate</span>
                        <GSTBadge rate={entry.gstRate} />
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">CGST</span>
                        <span className="font-bold text-gray-700">
                          {entry.gstRate === 0
                            ? "Nil"
                            : `${entry.gstRate / 2}%`}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">SGST / UTGST</span>
                        <span className="font-bold text-gray-700">
                          {entry.gstRate === 0
                            ? "Nil"
                            : `${entry.gstRate / 2}%`}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">IGST (inter-state)</span>
                        <span className="font-bold text-gray-700">
                          {entry.gstRate === 0 ? "Nil" : `${entry.gstRate}%`}
                        </span>
                      </div>
                      {entry.cess && (
                        <div className="flex justify-between text-xs border-t border-[#deeef7] pt-1.5 mt-1">
                          <span className="text-gray-500">Compensation Cess</span>
                          <span className="font-bold text-orange-600">
                            {entry.cess}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {entry.notes && (
                    <div className="flex gap-2 bg-amber-50 border border-amber-100 rounded-xl p-2.5 sm:p-3">
                      <AlertCircle
                        size={12}
                        className="text-amber-600 shrink-0 mt-0.5"
                      />
                      <p className="text-[11px] text-amber-700 leading-relaxed">
                        <strong>Note:</strong> {entry.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── FAQS ─────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is an HSN code and why is it mandatory in GST?",
    a: "HSN stands for Harmonized System of Nomenclature — a globally standardized 8-digit numeric code developed by the World Customs Organization (WCO) to uniformly classify goods for trade and taxation purposes. Under GST in India, HSN codes are mandatory on tax invoices to ensure uniformity and prevent tax evasion. Businesses with annual turnover above ₹5 crore must use 6-digit HSN codes; turnover ₹1.5–5 crore requires 4-digit codes; up to ₹1.5 crore is exempt from mentioning HSN (optional).",
  },
  {
    q: "What is the difference between HSN code and SAC code?",
    a: "HSN (Harmonized System of Nomenclature) codes are used for goods/commodities — they classify physical products like machinery, chemicals, textiles, electronics, and food items. SAC (Services Accounting Code) codes are used for services — like construction, IT services, healthcare, education, transportation, financial services, etc. SAC codes start with '99' and are typically 6 digits. Both types are required on GST invoices — HSN for goods supplied and SAC for services rendered.",
  },
  {
    q: "What are the current GST tax slabs in India?",
    a: "GST in India has five main tax slabs: 0% (Nil/Exempt) — essential goods and services like fresh vegetables, grains, healthcare, education; 5% — basic necessities like sugar, edible oils, medicines, low-cost footwear, domestic LPG; 12% — standard goods like computers, mobile phones, agricultural equipment, butter, cheese; 18% — most manufactured goods and services — electronics, telecom, financial services, IT services, construction, restaurants with AC; 28% — luxury and sin goods — cars, tobacco, aerated drinks, five-star hotels, casinos. Compensation cess applies on top of 28% for certain goods.",
  },
  {
    q: "How do I find the HSN code for my product?",
    a: "Use the search box above to search by product name, description, or HSN code number. You can also filter by category (electronics, food, textiles, etc.), by type (goods or services), and by GST rate. Start typing the product name — for example 'laptop', 'medicine', 'cement' — and relevant HSN codes with GST rates will appear. For complex products, you may also consult the official GST Rate Schedule on the GST Council's website or seek guidance from a CA.",
  },
  {
    q: "Do small businesses need to mention HSN codes on invoices?",
    a: "HSN code requirements under GST are based on annual aggregate turnover: Turnover up to ₹1.5 crore — HSN mention is optional (exempt); ₹1.5 crore to ₹5 crore — 4-digit HSN code mandatory; Above ₹5 crore — 6-digit HSN code mandatory. For services, SAC codes are required for all registered taxpayers. CBIC has also mandated HSN codes for specific high-risk commodities irrespective of turnover. Incorrect HSN codes can attract scrutiny, penalties and demand notices during GST audit.",
  },
  {
    q: "What is CGST, SGST and IGST in GST invoicing?",
    a: "GST in India is a dual tax: CGST (Central GST) goes to the central government and SGST (State GST) goes to the state government — both are charged on intra-state (within the same state) supplies, with each being 50% of the total GST rate. IGST (Integrated GST) is charged on inter-state supplies (transactions between different states) and equals the full GST rate. For example, an 18% GST item sold within Maharashtra attracts 9% CGST + 9% SGST; sold from Maharashtra to Delhi, it attracts 18% IGST.",
  },
  {
    q: "Are there any goods completely exempt from GST?",
    a: "Yes — a significant number of essential goods are completely exempt from GST (0% rate). These include: fresh/unprocessed food — vegetables, fruits, cereals, pulses, fresh milk, eggs, unbranded honey; healthcare — all medical services by hospitals, doctors, ambulance services; education — schools, colleges, universities (up to recognized degree level); agricultural inputs — seeds, fertilisers, agricultural implements; religious items — kumkum, bindi, sindur, bangles; sanitary napkins and diapers; postal services by India Post; and many others as notified by the GST Council.",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HSNClient() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "goods" | "services">(
    "all"
  );
  const [rateFilter, setRateFilter] = useState<number | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    setPage(1);
    setExpandedId(null);
  }, []);

  const handleClearAll = () => {
    setQuery("");
    setTypeFilter("all");
    setRateFilter("all");
    setCategoryFilter("all");
    setPage(1);
    setExpandedId(null);
    searchRef.current?.focus();
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return HSN_DATA.filter((item) => {
      const matchType = typeFilter === "all" || item.type === typeFilter;
      const matchRate = rateFilter === "all" || item.gstRate === rateFilter;
      const matchCat = categoryFilter === "all" || item.category === categoryFilter;
      const matchQuery =
        !q ||
        item.hsn.includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.chapter.toLowerCase().includes(q);
      return matchType && matchRate && matchCat && matchQuery;
    });
  }, [query, typeFilter, rateFilter, categoryFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const hasActiveFilters =
    query !== "" ||
    typeFilter !== "all" ||
    rateFilter !== "all" ||
    categoryFilter !== "all";

  // Stats
  const stats = useMemo(
    () => ({
      goods: HSN_DATA.filter((d) => d.type === "goods").length,
      services: HSN_DATA.filter((d) => d.type === "services").length,
      exempt: HSN_DATA.filter((d) => d.gstRate === 0).length,
      taxable: HSN_DATA.filter((d) => d.gstRate > 0).length,
    }),
    []
  );

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Taxvio! I need help finding the correct HSN/SAC code and GST rate for my goods/services. Can you assist?"
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  // Rate distribution for bar
  const rateCounts = useMemo(
    () =>
      GST_RATES.map((r) => ({
        rate: r,
        count: HSN_DATA.filter((d) => d.gstRate === r).length,
      })),
    []
  );

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
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-sky-400/10 blur-[80px] sm:blur-[120px] pointer-events-none opacity-60 sm:opacity-100" />
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-teal-400/10 blur-[60px] sm:blur-[80px] pointer-events-none opacity-60 sm:opacity-100" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeUp}
              className="flex items-center justify-center gap-1.5 sm:gap-2 text-white/50 text-[10px] sm:text-xs mb-4 sm:mb-6 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-white transition">
                GST Tools
              </Link>
              <span>/</span>
              <span className="text-white/80">HSN Code Finder</span>
            </motion.nav>

            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 border border-white/20 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold mb-4 sm:mb-5 backdrop-blur-sm uppercase tracking-wide"
            >
              <Tag size={11} className="text-sky-300 hidden sm:inline" />
              <span className="text-center">HSN · SAC · GST Rates · Free Tool</span>
            </motion.span>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight px-2"
            >
              HSN Code List &amp;
              <span className="block mt-1 sm:mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                GST Rate Finder
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 sm:mt-4 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4"
            >
              Search and find HSN codes, SAC codes and applicable GST rates for any
              goods or service instantly. Updated for FY 2024-25.
            </motion.p>

            {/* ── Hero Search Box ── */}
            <motion.div variants={fadeUp} className="mt-6 sm:mt-8 max-w-2xl mx-auto px-4">
              <div className="relative flex items-center bg-white rounded-xl sm:rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
                <div className="pl-3 sm:pl-4 pr-2 py-3 sm:py-4 shrink-0">
                  <Search size={18} className="sm:w-[20px] sm:h-[20px] text-[#00416a]" />
                </div>
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search by product, HSN/SAC code..."
                  className="flex-1 py-3 sm:py-4 pr-2 sm:pr-4 text-gray-800 text-sm font-medium focus:outline-none placeholder:text-gray-400 bg-transparent"
                  autoComplete="off"
                />
                {query && (
                  <button
                    onClick={() => handleSearch("")}
                    className="pr-2 sm:pr-3 text-gray-400 hover:text-gray-600 active:scale-95 transition"
                  >
                    <X size={15} />
                  </button>
                )}
                <button
                  onClick={() => {}}
                  className="mr-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#00416a] text-white text-xs sm:text-sm font-bold rounded-lg sm:rounded-xl hover:bg-[#002b45] active:scale-95 transition shrink-0"
                >
                  Search
                </button>
              </div>

              {/* Quick Search Pills */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4"
              >
                {["laptop", "medicine", "gold", "construction", "8517", "restaurant"].map(
                  (s) => (
                    <button
                      key={s}
                      onClick={() => handleSearch(s)}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 border border-white/20 text-white/80 text-[10px] sm:text-xs font-medium rounded-full hover:bg-white/20 hover:text-white active:scale-95 transition"
                    >
                      {s}
                    </button>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Stats Pills */}
            <motion.div
              variants={fadeUp}
              className="mt-5 sm:mt-7 flex flex-wrap justify-center gap-2 sm:gap-3 px-4"
            >
              {[
                { label: `${HSN_DATA.length}+ Codes`, icon: Tag },
                { label: `${stats.goods} Goods`, icon: Package, hideOnMobile: true },
                { label: `${stats.services} Services`, icon: Layers, hideOnMobile: true },
                { label: "FY 2024-25", icon: BadgeCheck },
              ].map(({ label, icon: Icon, hideOnMobile }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1 sm:gap-1.5 bg-white/10 border border-white/15 text-white/80 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${hideOnMobile ? 'hidden sm:inline-flex' : ''}`}
                >
                  <Icon size={10} className="sm:w-[11px] sm:h-[11px] text-sky-300" />{" "}
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
          <path
            d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
            fill="#f8fbfd"
          />
        </svg>
      </section>

      {/* ══════════ MAIN TOOL AREA ══════════ */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-4 sm:gap-5 lg:gap-6 items-start">
            {/* ── LEFT: RESULTS ── */}
            <div>
              {/* ── Filters Bar ── */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 mb-4 sm:mb-5"
              >
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Type Toggle */}
                      <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg sm:rounded-xl text-xs">
                        {(["all", "goods", "services"] as const).map((t) => (
                          <button
                            key={t}
                            onClick={() => {
                              setTypeFilter(t);
                              setPage(1);
                            }}
                            className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg font-semibold transition-all text-[10px] sm:text-xs ${
                              typeFilter === t
                                ? "bg-[#00416a] text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-700 active:scale-95"
                            }`}
                          >
                            {t === "all"
                              ? "All"
                              : t === "goods"
                              ? "📦 Goods"
                              : "🛠️ Services"}
                          </button>
                        ))}
                      </div>

                      {/* Filter toggle - Desktop */}
                      <button
                        onClick={() => setShowFilters((p) => !p)}
                        className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          showFilters
                            ? "bg-[#00416a]/10 border-[#00416a]/30 text-[#00416a]"
                            : "border-gray-200 text-gray-500 hover:border-gray-300 active:scale-95"
                        }`}
                      >
                        <Filter size={12} />
                        Filters
                        {(rateFilter !== "all" || categoryFilter !== "all") && (
                          <span className="w-4 h-4 bg-[#00416a] text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                            {
                              [
                                rateFilter !== "all",
                                categoryFilter !== "all",
                              ].filter(Boolean).length
                            }
                          </span>
                        )}
                      </button>

                      {/* Filter toggle - Mobile */}
                      <button
                        onClick={() => setShowMobileFilters(true)}
                        className={`sm:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold border transition-all ${
                          (rateFilter !== "all" || categoryFilter !== "all")
                            ? "bg-[#00416a]/10 border-[#00416a]/30 text-[#00416a]"
                            : "border-gray-200 text-gray-500 active:scale-95"
                        }`}
                      >
                        <Filter size={11} />
                        Filter
                        {(rateFilter !== "all" || categoryFilter !== "all") && (
                          <span className="w-3.5 h-3.5 bg-[#00416a] text-white rounded-full text-[8px] font-bold flex items-center justify-center">
                            {
                              [
                                rateFilter !== "all",
                                categoryFilter !== "all",
                              ].filter(Boolean).length
                            }
                          </span>
                        )}
                      </button>
                    </div>

                    {/* Result count + clear */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                        <strong className="text-[#00416a]">{filtered.length}</strong>{" "}
                        results
                      </span>
                      {hasActiveFilters && (
                        <button
                          onClick={handleClearAll}
                          className="flex items-center gap-1 text-[10px] sm:text-xs text-red-500 hover:text-red-700 font-semibold transition active:scale-95"
                        >
                          <X size={10} className="sm:w-[12px] sm:h-[12px]" /> Clear
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Filters - Desktop */}
                  <AnimatePresence>
                    {showFilters && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden hidden sm:block"
                      >
                        <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                          {/* GST Rate */}
                          <div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">
                              Filter by GST Rate
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              <button
                                onClick={() => {
                                  setRateFilter("all");
                                  setPage(1);
                                }}
                                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                                  rateFilter === "all"
                                    ? "bg-[#00416a] text-white border-[#00416a]"
                                    : "border-gray-200 text-gray-600 hover:border-gray-300 active:scale-95"
                                }`}
                              >
                                All Rates
                              </button>
                              {GST_RATES.map((r) => (
                                <button
                                  key={r}
                                  onClick={() => {
                                    setRateFilter(r);
                                    setPage(1);
                                  }}
                                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                                    rateFilter === r
                                      ? "bg-[#00416a] text-white border-[#00416a]"
                                      : `${RATE_COLORS[r]} hover:opacity-80 active:scale-95`
                                  }`}
                                >
                                  {r === 0 ? "Exempt" : `${r}%`}
                                </button>
                              ))}
                            </div>
                          </div>
                          {/* Category */}
                          <div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">
                              Filter by Category
                            </p>
                            <select
                              value={categoryFilter}
                              onChange={(e) => {
                                setCategoryFilter(e.target.value);
                                setPage(1);
                              }}
                              className="w-full text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a]/50 text-gray-700 bg-white"
                            >
                              <option value="all">All Categories</option>
                              {CATEGORIES.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* ── Results List ── */}
              {paginated.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-8 sm:p-12 text-center"
                >
                  <Search size={28} className="sm:w-[32px] sm:h-[32px] text-gray-300 mx-auto mb-3" />
                  <p className="text-sm font-bold text-gray-600 mb-1">
                    No codes found
                  </p>
                  <p className="text-xs text-gray-400">
                    Try different keywords or{" "}
                    <button
                      onClick={handleClearAll}
                      className="text-[#00416a] font-semibold underline"
                    >
                      clear all filters
                    </button>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={page}
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="space-y-2.5 sm:space-y-3"
                >
                  {paginated.map((entry) => (
                    <motion.div key={entry.hsn} variants={fadeUp}>
                      <HSNCard
                        entry={entry}
                        isExpanded={expandedId === entry.hsn}
                        onToggle={() =>
                          setExpandedId(expandedId === entry.hsn ? null : entry.hsn)
                        }
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* ── Pagination ── */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-5 sm:mt-6 gap-2">
                  <button
                    onClick={() => {
                      setPage((p) => Math.max(1, p - 1));
                      setExpandedId(null);
                      window.scrollTo({ top: 200, behavior: "smooth" });
                    }}
                    disabled={page === 1}
                    className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold border border-gray-200 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition"
                  >
                    ← Prev
                  </button>
                  <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-none">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      const p = i + 1;
                      return (
                        <button
                          key={p}
                          onClick={() => {
                            setPage(p);
                            setExpandedId(null);
                            window.scrollTo({ top: 200, behavior: "smooth" });
                          }}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
                            page === p
                              ? "bg-[#00416a] text-white shadow-sm"
                              : "text-gray-500 hover:bg-gray-100 active:scale-95"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                    {totalPages > 5 && (
                      <span className="text-gray-400 text-xs">...</span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setPage((p) => Math.min(totalPages, p + 1));
                      setExpandedId(null);
                      window.scrollTo({ top: 200, behavior: "smooth" });
                    }}
                    disabled={page === totalPages}
                    className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold border border-gray-200 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>

            {/* ── RIGHT: SIDEBAR ── */}
            <div className="space-y-4 sm:space-y-5 lg:sticky lg:top-24">
              {/* GST Rate Distribution */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#00416a] rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl shadow-[#00416a]/25"
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle,#fff 1px,transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative">
                  <p className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-1">
                    Database Overview
                  </p>
                  <p className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4">
                    {HSN_DATA.length}+ HSN / SAC Codes
                  </p>

                  <div className="space-y-2.5 sm:space-y-3">
                    {rateCounts.map(({ rate, count }) => (
                      <div key={rate}>
                        <div className="flex justify-between text-[10px] sm:text-xs mb-1">
                          <span className="text-white/70">
                            {rate === 0 ? "Exempt / NIL (0%)" : `${rate}% GST`}
                          </span>
                          <span className="text-white font-bold">{count} codes</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${RATE_BG_STRONG[rate]}`}
                            style={{
                              width: `${(count / HSN_DATA.length) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10 grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { label: "Goods (HSN)", value: stats.goods, color: "bg-sky-400" },
                      {
                        label: "Services (SAC)",
                        value: stats.services,
                        color: "bg-teal-400",
                      },
                      {
                        label: "Exempt Items",
                        value: stats.exempt,
                        color: "bg-gray-400",
                      },
                      {
                        label: "Taxable Items",
                        value: stats.taxable,
                        color: "bg-orange-400",
                      },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="flex items-center gap-1.5 sm:gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${color} shrink-0`}
                        />
                        <div className="min-w-0">
                          <p className="text-white font-bold text-xs sm:text-sm">
                            {value}
                          </p>
                          <p className="text-white/50 text-[9px] sm:text-[10px] truncate">
                            {label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-4 sm:p-5 space-y-2.5 sm:space-y-3"
              >
                <p className="text-sm font-bold text-[#00416a]">
                  Need GST Filing Help?
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our CA team handles GST registration, GST return filing (GSTR-1, 3B,
                  9), HSN-wise reporting, e-invoicing setup, and GST audit — starting
                  at ₹799/month.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-[#25d366] text-white text-xs sm:text-sm font-bold hover:bg-[#1ebe5d] active:scale-[0.97] transition-all shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={14} className="sm:w-[15px] sm:h-[15px]" /> Ask
                  on WhatsApp
                </button>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-[#00416a] text-white text-xs sm:text-sm font-bold hover:bg-[#002b45] active:scale-[0.97] transition-all"
                >
                  Free Consultation <ArrowRight size={13} className="sm:w-[14px] sm:h-[14px]" />
                </Link>
              </motion.div>

              {/* Quick Rate Guide */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5"
              >
                <p className="text-xs font-bold text-[#00416a] mb-3 flex items-center gap-2">
                  <BookOpen size={13} className="sm:w-[14px] sm:h-[14px]" /> Quick GST Rate
                  Reference
                </p>
                <div className="space-y-1.5 sm:space-y-2">
                  {[
                    {
                      rate: 0,
                      example: "Fresh veg, healthcare, education",
                      color: RATE_COLORS[0],
                    },
                    {
                      rate: 5,
                      example: "Sugar, medicines, LPG",
                      color: RATE_COLORS[5],
                    },
                    {
                      rate: 12,
                      example: "Computers, mobile phones",
                      color: RATE_COLORS[12],
                    },
                    {
                      rate: 18,
                      example: "Electronics, IT services",
                      color: RATE_COLORS[18],
                    },
                    {
                      rate: 28,
                      example: "Cars, tobacco, aerated drinks",
                      color: RATE_COLORS[28],
                    },
                  ].map(({ rate, example, color }) => (
                    <button
                      key={rate}
                      onClick={() => {
                        setRateFilter(rate);
                        setPage(1);
                        setExpandedId(null);
                      }}
                      className="w-full flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-gray-100 hover:border-[#00416a]/20 hover:bg-[#f8fbfd] active:scale-[0.98] transition text-left"
                    >
                      <span
                        className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold border shrink-0 ${color}`}
                      >
                        {rate === 0 ? "NIL" : `${rate}%`}
                      </span>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 leading-tight line-clamp-1">
                        {example}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Tip */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-amber-50 border border-amber-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-start gap-2.5 sm:gap-3"
              >
                <Info size={14} className="sm:w-[15px] sm:h-[15px] text-amber-600 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-amber-700">
                    HSN Code Turnover Requirement
                  </p>
                  <p className="text-[10px] sm:text-[11px] mt-1 leading-relaxed text-amber-600">
                    <strong>≤ ₹1.5 Cr:</strong> HSN optional ·{" "}
                    <strong>₹1.5–5 Cr:</strong> 4-digit HSN ·{" "}
                    <strong>&gt; ₹5 Cr:</strong> 6-digit HSN mandatory.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MOBILE FILTER MODAL ══════════ */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 sm:hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between rounded-t-3xl">
                <h3 className="text-base font-bold text-[#00416a]">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition"
                >
                  <X size={16} className="text-gray-500" />
                </button>
              </div>

              <div className="p-5 space-y-5">
                {/* GST Rate */}
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                    Filter by GST Rate
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setRateFilter("all");
                        setPage(1);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                        rateFilter === "all"
                          ? "bg-[#00416a] text-white border-[#00416a]"
                          : "border-gray-200 text-gray-600 active:scale-95"
                      }`}
                    >
                      All Rates
                    </button>
                    {GST_RATES.map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setRateFilter(r);
                          setPage(1);
                        }}
                        className={`px-3 py-2 rounded-lg text-xs font-bold border transition-all ${
                          rateFilter === r
                            ? "bg-[#00416a] text-white border-[#00416a]"
                            : `${RATE_COLORS[r]} active:scale-95`
                        }`}
                      >
                        {r === 0 ? "Exempt" : `${r}%`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                    Filter by Category
                  </p>
                  <select
                    value={categoryFilter}
                    onChange={(e) => {
                      setCategoryFilter(e.target.value);
                      setPage(1);
                    }}
                    className="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a]/50 text-gray-700 bg-white"
                  >
                    <option value="all">All Categories</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-[#00416a] text-white py-3.5 rounded-xl font-bold text-sm active:scale-[0.98] transition-all shadow-lg"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ══════════ SEO CONTENT ══════════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Complete Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00416a] mt-4 px-4">
                HSN Codes &amp; GST Rates — Complete Guide for India
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed px-4">
                Everything you need to know about HSN codes, SAC codes, GST slabs,
                invoice requirements, and GST compliance for FY 2024-25.
              </p>
            </motion.div>

            <div className="space-y-10 sm:space-y-14">
              {/* Block 1 */}
              <motion.div
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start"
              >
                <div className="order-2 md:order-1 px-4 sm:px-0">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#00416a] mb-3 sm:mb-4">
                    What Is an HSN Code &amp; Why Does It Matter?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4">
                    The <strong>Harmonized System of Nomenclature (HSN)</strong> is a
                    globally standardized 8-digit classification system developed by
                    the World Customs Organization (WCO), used in over 200 countries.
                    In India, HSN codes were adopted under GST to classify goods for
                    taxation, making it easier to determine the correct GST rate and
                    ensure uniform reporting across the supply chain.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4">
                    Under GST, mentioning the correct HSN code on your tax invoice is
                    not just best practice — it is a legal requirement for businesses
                    with specific turnover thresholds. Incorrect HSN codes can lead to
                    mismatched ITC claims, GST audit issues, demand notices, and
                    penalties under Section 122 of the CGST Act.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For services, India uses{" "}
                    <strong>SAC (Services Accounting Code)</strong> — a similar
                    classification system where all service codes begin with '99' and
                    are typically 6 digits long. SAC codes must appear on all service
                    invoices raised by GST-registered taxpayers.
                  </p>
                </div>
                <div className="order-1 md:order-2 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-4 sm:px-5 py-3">
                    <p className="text-white font-bold text-xs sm:text-sm">
                      HSN Code Structure — Example: 8517 12 00
                    </p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      [
                        "Chapter (2-digit)",
                        "85",
                        "Electrical machinery & equipment",
                      ],
                      ["Heading (4-digit)", "8517", "Telephone sets, smartphones"],
                      [
                        "Sub-heading (6-digit)",
                        "8517 12",
                        "Smartphones & mobile phones",
                      ],
                      [
                        "Tariff Item (8-digit)",
                        "8517 12 00",
                        "Complete classification",
                      ],
                    ].map(([level, code, desc], i) => (
                      <div
                        key={level}
                        className={`grid grid-cols-3 gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-xs ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <span className="font-semibold text-gray-600 break-words">
                          {level}
                        </span>
                        <span className="font-mono font-bold text-[#00416a] text-center">
                          {code}
                        </span>
                        <span className="text-gray-500 text-right break-words">
                          {desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Block 2 — GST Slabs */}
              <motion.div variants={fadeUp} className="px-4 sm:px-0">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#00416a] mb-5 sm:mb-6">
                  GST Rate Slabs — What Falls Where?
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    {
                      rate: "0% (Exempt / NIL)",
                      count: `${stats.exempt}+ items`,
                      examples: [
                        "Fresh vegetables & fruits",
                        "Unbranded rice, wheat, pulses",
                        "Fresh milk, eggs, honey",
                        "Healthcare & hospital services",
                        "Education up to degree level",
                        "Sanitary napkins & diapers",
                      ],
                      color: "bg-gray-50 border-gray-200",
                      badge: "bg-gray-200 text-gray-700",
                    },
                    {
                      rate: "5% GST",
                      count: "60+ items",
                      examples: [
                        "Sugar, edible oils, salt",
                        "Branded rice & wheat flour",
                        "Essential medicines",
                        "Domestic LPG cylinders",
                        "Economy class air tickets",
                        "Footwear ≤ ₹1,000 MRP",
                      ],
                      color: "bg-emerald-50 border-emerald-200",
                      badge: "bg-emerald-100 text-emerald-700",
                    },
                    {
                      rate: "12% GST",
                      count: "55+ items",
                      examples: [
                        "Computers & laptops",
                        "Mobile phones",
                        "Butter, cheese, ghee",
                        "Frozen meats & fish",
                        "Agricultural machinery",
                        "Business class tickets",
                      ],
                      color: "bg-blue-50 border-blue-200",
                      badge: "bg-blue-100 text-blue-700",
                    },
                    {
                      rate: "18% GST",
                      count: "175+ items",
                      examples: [
                        "Most electronics & appliances",
                        "Telecom & IT services",
                        "Financial & banking services",
                        "Construction services",
                        "AC restaurant bills",
                        "Capital goods & machinery",
                      ],
                      color: "bg-violet-50 border-violet-200",
                      badge: "bg-violet-100 text-violet-700",
                    },
                    {
                      rate: "28% GST",
                      count: "35+ items",
                      examples: [
                        "Luxury cars, SUVs, bikes",
                        "Aerated drinks & tobacco",
                        "Washing machines & ACs",
                        "Dishwashers, large TVs",
                        "Hotels > ₹7,500/night",
                        "Online gaming & casinos",
                      ],
                      color: "bg-red-50 border-red-200",
                      badge: "bg-red-100 text-red-700",
                    },
                    {
                      rate: "3% GST",
                      count: "Special items",
                      examples: [
                        "Gold, silver, platinum",
                        "Coins of gold & silver",
                        "Jewellery articles",
                        "Goldsmiths' wares",
                        "Precious metal articles",
                        "Imitation jewellery",
                      ],
                      color: "bg-yellow-50 border-yellow-200",
                      badge: "bg-yellow-100 text-yellow-700",
                    },
                  ].map(({ rate, count, examples, color, badge }) => (
                    <div key={rate} className={`${color} border rounded-xl sm:rounded-2xl p-3 sm:p-4`}>
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <p className="text-xs sm:text-sm font-extrabold text-[#00416a]">
                          {rate}
                        </p>
                        <span
                          className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full ${badge}`}
                        >
                          {count}
                        </span>
                      </div>
                      <ul className="space-y-0.5 sm:space-y-1">
                        {examples.map((ex) => (
                          <li
                            key={ex}
                            className="text-[10px] sm:text-xs text-gray-600 flex items-start gap-1.5"
                          >
                            <span className="text-[#00416a] mt-0.5 shrink-0">•</span>
                            <span className="break-words">{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Block 3 — Compliance */}
              <motion.div
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#00416a] mb-3 sm:mb-4">
                    HSN Code Compliance — Mandatory Requirements
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4">
                    From 1st April 2021, CBIC mandated HSN code reporting based on
                    annual aggregate turnover. The requirement was further tightened
                    for e-invoicing and GSTR-1 HSN-wise summary (Table 12) reporting.
                    Non-compliance attracts a penalty of ₹50,000 (₹25,000 CGST +
                    ₹25,000 SGST) under Section 125 of CGST Act.
                  </p>
                  <div className="space-y-2.5 sm:space-y-3">
                    {[
                      {
                        step: "01",
                        title: "Up to ₹1.5 Crore Turnover",
                        desc: "Mentioning HSN code is optional. However, for B2B transactions and e-invoicing, it is recommended to use 4-digit HSN for clarity.",
                      },
                      {
                        step: "02",
                        title: "₹1.5 Crore to ₹5 Crore Turnover",
                        desc: "4-digit HSN code mandatory on all B2B and B2C invoices. Must be reported in GSTR-1 Table 12 HSN summary on a quarterly/monthly basis.",
                      },
                      {
                        step: "03",
                        title: "Above ₹5 Crore Turnover",
                        desc: "6-digit HSN code mandatory on all invoices. 8-digit codes required for export invoices and e-invoices under Rule 46 of CGST Rules.",
                      },
                      {
                        step: "04",
                        title: "E-Invoice Requirement",
                        desc: "Businesses with turnover > ₹5 crore must generate e-invoices via IRP (Invoice Registration Portal). HSN codes are validated against CBIC master data during e-invoice generation.",
                      },
                    ].map(({ step, title, desc }) => (
                      <div
                        key={step}
                        className="flex gap-2.5 sm:gap-3 p-3 sm:p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00416a] text-white text-[10px] sm:text-xs font-extrabold flex items-center justify-center shrink-0">
                          {step}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-gray-800 break-words">
                            {title}
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-relaxed break-words">
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-emerald-600 px-4 sm:px-5 py-3">
                    <p className="text-white font-bold text-xs sm:text-sm">
                      GSTR-1 HSN Reporting — Table 12 Requirements
                    </p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["HSN Code", "4 or 6 digit HSN/SAC"],
                      ["Description", "Product/service description"],
                      ["UOM (Unit)", "NOS, KGS, MTR, LTR, etc."],
                      ["Total Quantity", "Aggregate quantity supplied"],
                      ["Taxable Value", "Total taxable turnover"],
                      ["IGST Amount", "Inter-state tax collected"],
                      ["CGST Amount", "Intra-state central tax"],
                      ["SGST Amount", "Intra-state state tax"],
                      ["Cess Amount", "Applicable cess collected"],
                    ].map(([field, note], i) => (
                      <div
                        key={field}
                        className={`grid grid-cols-2 gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <span className="font-semibold text-gray-700 break-words">
                          {field}
                        </span>
                        <span className="text-gray-500 text-right break-words">
                          {note}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 sm:p-4 bg-blue-50">
                    <p className="text-[10px] sm:text-xs text-blue-700 leading-relaxed">
                      <strong>Note:</strong> HSN-wise summary must be filed for each
                      tax period in GSTR-1. Errors in HSN reporting attract audit
                      scrutiny and ITC reversal notices.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ WHY TAXVIO ══════════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f8fbfd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Taxvio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00416a] mt-4 px-4">
                Why Use Taxvio's HSN Code Finder?
              </h2>
            </motion.div>
            <motion.ul
              variants={stagger}
              className="grid sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                {
                  icon: Search,
                  text: "Instant full-text search across 500+ HSN and SAC codes — search by product name, code number, or category",
                },
                {
                  icon: Filter,
                  text: "Advanced filters — filter by goods/services, GST rate (0–28%), and category for pinpoint accuracy",
                },
                {
                  icon: Tag,
                  text: "Complete CGST/SGST/IGST breakdown for every code — know exact tax amounts for intra-state and inter-state supplies",
                },
                {
                  icon: AlertCircle,
                  text: "Important rate notes and exceptions clearly highlighted — know when special rates or exemptions apply",
                },
                {
                  icon: Copy,
                  text: "One-click copy HSN/SAC codes to clipboard — directly use in your invoices, returns, and software",
                },
                {
                  icon: Shield,
                  text: "Updated for FY 2024-25 with Budget 2024 changes — accurate GST rates including LTCG, compensation cess updates",
                },
                {
                  icon: BadgeCheck,
                  text: "CA-backed guidance — our GST experts verify classification disputes, wrong HSN usage, and GST notices",
                },
                {
                  icon: FileText,
                  text: "Full GST return filing support — GSTR-1, 3B, 9/9C, e-invoicing, HSN-wise reporting from ₹799/month",
                },
              ].map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  className="flex items-start gap-2.5 sm:gap-3.5 p-3 sm:p-4 bg-white border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                    <Icon
                      size={15}
                      className="sm:w-[16px] sm:h-[16px] text-[#00416a] group-hover:text-white transition-all"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mt-0.5 break-words">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00416a] mt-4 px-4">
                HSN Code &amp; GST — Frequently Asked Questions
              </h2>
            </motion.div>
            <motion.div
              variants={stagger}
              className="space-y-2.5 sm:space-y-3"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {FAQS.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 ${
                    faqOpen === i
                      ? "border-[#00416a]/30 shadow-md"
                      : "border-gray-200"
                  }`}
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left p-4 sm:p-5 flex justify-between items-start gap-3 sm:gap-4 hover:bg-gray-50 active:bg-gray-100/50 transition"
                    aria-expanded={faqOpen === i}
                  >
                    <span
                      className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug break-words flex-1"
                      itemProp="name"
                    >
                      {f.q}
                    </span>
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        faqOpen === i ? "bg-[#00416a] rotate-180" : "bg-gray-100"
                      }`}
                    >
                      <ChevronDown
                        size={14}
                        className={`sm:w-[15px] sm:h-[15px] ${faqOpen === i ? "text-white" : "text-gray-500"}`}
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
                          className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 pt-3 sm:pt-4 break-words"
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
      <section className="py-10 sm:py-12 md:py-14 bg-[#f8fbfd] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-widest text-[#00416a] mb-5 sm:mb-6 px-2 sm:px-0"
            >
              Related Tools &amp; Services
            </motion.p>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {[
                {
                  title: "GST Calculator",
                  desc: "Calculate GST on any amount",
                  href: "/tools/gst-calculator",
                  icon: Calculator,
                },
                {
                  title: "EMI Calculator",
                  desc: "Home, Car & Personal Loan EMI",
                  href: "/tools/emi-calculator",
                  icon: TrendingUp,
                },
                {
                  title: "GST Registration",
                  desc: "GSTIN in 3–5 working days",
                  href: "/serviceslist/gst/gst-registration",
                  icon: Shield,
                },
                {
                  title: "GST Return Filing",
                  desc: "GSTR-1, 3B, 9 from ₹799/mo",
                  href: "/serviceslist/gst/gst-return",
                  icon: FileText,
                },
              ].map(({ title, desc, href, icon: Icon }) => (
                <motion.div key={title} variants={fadeUp}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 bg-white border border-gray-100 rounded-xl hover:border-[#00416a]/30 hover:shadow-md active:scale-[0.98] transition-all duration-200"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                      <Icon
                        size={15}
                        className="sm:w-[16px] sm:h-[16px] text-[#00416a] group-hover:text-white transition-all"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition truncate">
                        {title}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-400 truncate">
                        {desc}
                      </p>
                    </div>
                    <ArrowRight
                      size={12}
                      className="sm:w-[13px] sm:h-[13px] text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#00416a] rounded-2xl sm:rounded-3xl overflow-hidden p-8 sm:p-10 md:p-14 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full bg-sky-400/10 blur-[60px] sm:blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full bg-teal-400/10 blur-[50px] sm:blur-[60px] pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-4 sm:mb-5 uppercase tracking-wide">
                <Zap size={10} className="sm:w-[11px] sm:h-[11px] text-sky-300" /> Expert GST
                Compliance Support
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight px-4">
                Need Help with GST Filing &amp; Compliance?
              </h2>
              <p className="mt-3 sm:mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed px-4">
                Taxvio's GST experts handle registration, return filing, HSN
                classification disputes, e-invoicing, e-way bills, annual returns
                (GSTR-9), and GST audit — complete GST compliance from ₹799/month.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 px-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                >
                  <MessageCircle size={14} className="sm:w-[15px] sm:h-[15px]" /> WhatsApp
                  Us
                </button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#00416a] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
                >
                  Free Consultation <ArrowRight size={13} className="sm:w-[14px] sm:h-[14px]" />
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/40 bg-white/5 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                >
                  <Phone size={13} className="sm:w-[14px] sm:h-[14px]" /> Call Now
                </a>
              </div>
              <p className="mt-5 sm:mt-6 text-white/40 text-[10px] sm:text-xs px-4">
                GST Registration · GSTR-1/3B/9 · E-Invoice · HSN Classification ·
                Audit Support · 100% Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}