"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Search,
  ArrowRight,
  Calculator,
  TrendingUp,
  Tag,
  Shield,
  FileText,
  BarChart2,
  PiggyBank,
  Landmark,
  ChevronRight,
  Zap,
  BadgeCheck,
  Phone,
  MessageCircle,
  Star,
  Users,
  Clock,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  RefreshCw,
  Info,
} from "lucide-react";
import Footar from "@/components/Footar";

// ─── Animations ───────────────────────────────────────────────────────────────
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
  visible: { transition: { staggerChildren: 0.07 } },
};

const PHONE = "918937980366";

// ─── Tool Data ────────────────────────────────────────────────────────────────
const TOOLS = [
  {
    id: "hsn-code-finder",
    title: "HSN Code Finder",
    subtitle: "HSN & SAC Code Search",
    description:
      "Search and find HSN codes, SAC codes and applicable GST rates for any goods or service instantly. Filter by category, type, and rate. Updated for FY 2024-25.",
    href: "/tools/hsn-code-finder",
    icon: Tag,
    badge: "Most Popular",
    badgeColor: "bg-emerald-500",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50 border-sky-100",
    iconBg: "bg-sky-600",
    highlights: [
      "500+ HSN & SAC Codes",
      "CGST / SGST / IGST Breakdown",
      "Filter by Rate & Category",
      "One-Click Copy Codes",
    ],
    tags: ["GST", "Compliance", "Goods", "Services"],
    category: "GST Tools",
    usedBy: "12,000+ businesses",
  },
  {
    id: "gst-calculator",
    title: "GST Calculator",
    subtitle: "Instant GST Computation",
    description:
      "Calculate GST on any amount for all tax slabs — 3%, 5%, 12%, 18%, 28%. Get CGST, SGST, IGST breakdown in seconds. Supports inclusive and exclusive calculation.",
    href: "/tools/gst-calculator",
    icon: Calculator,
    badge: "Free",
    badgeColor: "bg-blue-500",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-600",
    highlights: [
      "All GST Slabs (3%–28%)",
      "Inclusive & Exclusive Mode",
      "CGST + SGST + IGST Split",
      "Instant Calculation",
    ],
    tags: ["GST", "Tax", "Calculator"],
    category: "GST Tools",
    usedBy: "28,000+ users",
  },
  {
    id: "gst-number-search",
    title: "GST Number Search",
    subtitle: "GSTIN Verification Tool",
    description:
      "Verify any GSTIN (GST Number) instantly. Look up business details, registration date, filing status, and HSN codes registered. Validate supplier GSTINs before ITC claims.",
    href: "/tools/gst-number-search",
    icon: Search,
    badge: "Free",
    badgeColor: "bg-blue-500",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 border-violet-100",
    iconBg: "bg-violet-600",
    highlights: [
      "Instant GSTIN Verification",
      "Business Name & State",
      "Registration Date & Status",
      "Filing Status Check",
    ],
    tags: ["GST", "Verification", "GSTIN"],
    category: "GST Tools",
    usedBy: "9,500+ businesses",
  },
  {
    id: "income-tax-calculator",
    title: "Income Tax Calculator",
    subtitle: "Old vs New Tax Regime",
    description:
      "Calculate your income tax liability for FY 2024-25. Compare old regime vs new regime, apply all deductions (80C, 80D, HRA, LTA), and find which regime saves you more tax.",
    href: "/tools/income-tax-calculator",
    icon: FileText,
    badge: "Updated FY25",
    badgeColor: "bg-orange-500",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50 border-orange-100",
    iconBg: "bg-orange-600",
    highlights: [
      "Old vs New Regime Comparison",
      "All Deductions (80C, 80D, HRA)",
      "Surcharge & Cess Included",
      "FY 2024-25 Slabs",
    ],
    tags: ["Income Tax", "ITR", "Deductions"],
    category: "Tax Tools",
    usedBy: "35,000+ taxpayers",
  },
  {
    id: "emi-calculator",
    title: "EMI Calculator",
    subtitle: "Loan EMI & Amortization",
    description:
      "Calculate EMI for home loan, car loan, personal loan or any loan. Get monthly EMI, total interest, and complete amortization schedule. Compare different loan tenures.",
    href: "/tools/emi-calculator",
    icon: TrendingUp,
    badge: "Free",
    badgeColor: "bg-blue-500",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-600",
    highlights: [
      "Home, Car & Personal Loan",
      "Full Amortization Table",
      "Interest vs Principal Split",
      "Compare Tenures",
    ],
    tags: ["Loan", "EMI", "Finance"],
    category: "Financial Tools",
    usedBy: "41,000+ users",
  },
  {
    id: "sip-calculator",
    title: "SIP Calculator",
    subtitle: "Mutual Fund SIP Returns",
    description:
      "Calculate the future value of your SIP (Systematic Investment Plan) investments. Know how much wealth you can build with monthly investments over time with compound growth.",
    href: "/tools/sip-calculator",
    icon: BarChart2,
    badge: "Popular",
    badgeColor: "bg-emerald-500",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50 border-teal-100",
    iconBg: "bg-teal-600",
    highlights: [
      "Compound Interest Projection",
      "Wealth Growth Chart",
      "Inflation Adjusted Returns",
      "Goal-Based Planning",
    ],
    tags: ["SIP", "Mutual Fund", "Investment"],
    category: "Investment Tools",
    usedBy: "22,000+ investors",
  },
  {
    id: "ppf-calculator",
    title: "PPF Calculator",
    subtitle: "Public Provident Fund",
    description:
      "Calculate PPF (Public Provident Fund) maturity amount, year-wise interest, and total returns for 15-year tenure. Plan your tax-free retirement corpus with India's safest investment.",
    href: "/tools/ppf-calculator",
    icon: PiggyBank,
    badge: "Tax Free",
    badgeColor: "bg-emerald-600",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50 border-green-100",
    iconBg: "bg-green-600",
    highlights: [
      "15-Year Maturity Projection",
      "Year-wise Interest Table",
      "80C Deduction Benefit",
      "Extension After Maturity",
    ],
    tags: ["PPF", "Tax Saving", "Retirement"],
    category: "Investment Tools",
    usedBy: "18,000+ savers",
  },
  {
    id: "mutal-fund-calculator",
    title: "Mutual Fund Calculator",
    subtitle: "Lump Sum & SIP Returns",
    description:
      "Calculate mutual fund returns for lump sum and SIP investments. Project CAGR-based growth, compare equity vs debt vs hybrid funds, and plan for financial goals.",
    href: "/tools/mutal-fund-calculator",
    icon: Landmark,
    badge: "Free",
    badgeColor: "bg-blue-500",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50 border-indigo-100",
    iconBg: "bg-indigo-600",
    highlights: [
      "Lump Sum & SIP Mode",
      "CAGR-Based Projection",
      "Equity / Debt / Hybrid",
      "Goal Planner Included",
    ],
    tags: ["Mutual Fund", "CAGR", "Investment"],
    category: "Investment Tools",
    usedBy: "15,000+ investors",
  },
];

// ─── Category Groups ──────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "gst",
    label: "GST Tools",
    icon: Shield,
    color: "text-sky-600",
    bg: "bg-sky-50",
    tools: TOOLS.filter((t) => t.category === "GST Tools"),
  },
  {
    id: "tax",
    label: "Tax Tools",
    icon: FileText,
    color: "text-orange-600",
    bg: "bg-orange-50",
    tools: TOOLS.filter((t) => t.category === "Tax Tools"),
  },
  {
    id: "finance",
    label: "Financial Tools",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    tools: TOOLS.filter((t) => t.category === "Financial Tools"),
  },
  {
    id: "invest",
    label: "Investment Tools",
    icon: BarChart2,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    tools: TOOLS.filter((t) => t.category === "Investment Tools"),
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "8+", label: "Free Tools", icon: Calculator },
  { value: "1.5L+", label: "Monthly Users", icon: Users },
  { value: "100%", label: "Free Forever", icon: BadgeCheck },
  { value: "FY25", label: "Always Updated", icon: RefreshCw },
];

// ─── Why Use Taxvio Tools ─────────────────────────────────────────────────────
const WHY_FEATURES = [
  {
    icon: Zap,
    title: "Instant Results",
    desc: "Get accurate calculations instantly — no sign-up, no login, no hidden fees. All tools are fully free and browser-based.",
  },
  {
    icon: BadgeCheck,
    title: "CA-Verified Accuracy",
    desc: "Every tool is reviewed and verified by Chartered Accountants. All tax slabs, rates, and formulas follow CBIC and IT Department guidelines.",
  },
  {
    icon: RefreshCw,
    title: "Always Up-to-Date",
    desc: "Updated for every Budget and GST Council notification. All calculators reflect FY 2024-25 rules, rates, and exemptions.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "All calculations happen in your browser — no data is stored, no tracking, no ads. Your financial information stays private.",
  },
  {
    icon: Clock,
    title: "Save Time & Money",
    desc: "Eliminate costly errors with our tools. Avoid penalties, wrong ITC claims, and miscalculations that cost businesses lakhs every year.",
  },
  {
    icon: BookOpen,
    title: "Expert Support",
    desc: "Behind every tool is our CA team. If you need help beyond the calculator — GST filing, ITR, compliance — we're one WhatsApp away.",
  },
];

// ─── Featured Tool Card ───────────────────────────────────────────────────────
function FeaturedToolCard({ tool }: { tool: (typeof TOOLS)[0] }) {
  const Icon = tool.icon;
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={tool.href}
        className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-[#00416a]/25 hover:shadow-xl hover:shadow-[#00416a]/5 transition-all duration-300"
      >
        {/* Top gradient bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${tool.color}`} />

        <div className="p-6 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl ${tool.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={22} className="text-white" />
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full text-white ${tool.badgeColor} shadow-sm`}>
              {tool.badge}
            </span>
          </div>

          {/* Title */}
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">{tool.subtitle}</p>
          <h3 className="text-lg font-extrabold text-[#00416a] mb-2 group-hover:text-sky-700 transition-colors">
            {tool.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-4">{tool.description}</p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-5">
            {tool.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                <span className="text-[11px] text-gray-600 font-medium">{h}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tool.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <Users size={11} className="text-gray-400" />
              <span className="text-[10px] text-gray-400 font-medium">{tool.usedBy}</span>
            </div>
            <div className="flex items-center gap-1 text-[#00416a] font-bold text-xs group-hover:gap-2 transition-all">
              Use Tool
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Compact Tool Row ─────────────────────────────────────────────────────────
function ToolRow({ tool }: { tool: (typeof TOOLS)[0] }) {
  const Icon = tool.icon;
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={tool.href}
        className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-[#00416a]/25 hover:shadow-md hover:shadow-[#00416a]/5 transition-all duration-200"
      >
        <div className={`w-10 h-10 rounded-xl ${tool.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
          <Icon size={18} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition truncate">{tool.title}</p>
          <p className="text-xs text-gray-400 truncate">{tool.subtitle}</p>
        </div>
        <ArrowRight size={14} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all shrink-0" />
      </Link>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ToolsPage() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello Taxvio! I need expert help with my GST/Tax compliance. Can you assist?");
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

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
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-sky-400/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-[90px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeUp}
              className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">GST & Tax Tools</span>
            </motion.nav>

            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide"
            >
              <Zap size={12} className="text-sky-300" />
              8 Free Tools · Always Updated · CA-Verified
            </motion.span>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Free GST & Tax
              <span className="block mt-2 bg-gradient-to-r from-sky-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Calculator Tools
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              India's most comprehensive suite of free GST, income tax, loan, and investment calculators — built by CAs, updated every Budget, trusted by 1.5 lakh+ taxpayers and businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href="#tools"
                className="px-7 py-3.5 bg-white text-[#00416a] rounded-xl text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all flex items-center gap-2"
              >
                <Calculator size={15} /> Explore All Tools
              </a>
              <button
                onClick={handleWhatsApp}
                className="px-7 py-3.5 bg-[#25d366] hover:bg-[#1ebe5d] text-white rounded-xl text-sm font-bold shadow-lg flex items-center gap-2 active:scale-[0.97] transition-all"
              >
                <MessageCircle size={15} /> Ask a CA Expert
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {STATS.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3 backdrop-blur-sm"
                >
                  <Icon size={14} className="text-sky-300 mx-auto mb-1" />
                  <p className="text-2xl font-extrabold text-white">{value}</p>
                  <p className="text-white/50 text-[10px] font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 56" fill="none" className="w-full block">
          <path
            d="M0 56L1440 56L1440 28C1200 56 900 0 720 18C540 36 240 56 0 28L0 56Z"
            fill="#f8fbfd"
          />
        </svg>
      </section>

      {/* ══════════ TOOL CATEGORIES ══════════ */}
      <section id="tools" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Quick Category Nav */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            {CATEGORIES.map(({ id, label, icon: Icon, color, bg }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center gap-2 px-4 py-2.5 ${bg} border border-gray-100 rounded-full text-xs font-bold ${color} hover:shadow-md transition-all`}
              >
                <Icon size={13} />
                {label}
              </a>
            ))}
          </motion.div>

          {/* ── GST Tools ── */}
          <div id="gst" className="mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 bg-sky-600 rounded-xl flex items-center justify-center">
                  <Shield size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600">Category</p>
                  <h2 className="text-2xl font-extrabold text-[#00416a]">GST Tools</h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-sky-100 to-transparent ml-4" />
              </motion.div>

              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {CATEGORIES[0].tools.map((tool) => (
                  <FeaturedToolCard key={tool.id} tool={tool} />
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Tax Tools ── */}
          <div id="tax" className="mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center">
                  <FileText size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-600">Category</p>
                  <h2 className="text-2xl font-extrabold text-[#00416a]">Tax Tools</h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-100 to-transparent ml-4" />
              </motion.div>

              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {CATEGORIES[1].tools.map((tool) => (
                  <FeaturedToolCard key={tool.id} tool={tool} />
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Financial Tools ── */}
          <div id="finance" className="mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <TrendingUp size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Category</p>
                  <h2 className="text-2xl font-extrabold text-[#00416a]">Financial Tools</h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-100 to-transparent ml-4" />
              </motion.div>

              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {CATEGORIES[2].tools.map((tool) => (
                  <FeaturedToolCard key={tool.id} tool={tool} />
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Investment Tools ── */}
          <div id="invest" className="mb-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <BarChart2 size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">Category</p>
                  <h2 className="text-2xl font-extrabold text-[#00416a]">Investment Tools</h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-100 to-transparent ml-4" />
              </motion.div>

              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {CATEGORIES[3].tools.map((tool) => (
                  <FeaturedToolCard key={tool.id} tool={tool} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ ALL TOOLS QUICK LIST ══════════ */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Quick Access
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">All Tools at a Glance</h2>
              <p className="text-gray-500 mt-2 text-sm">Jump to any tool instantly</p>
            </motion.div>

            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-3">
              {TOOLS.map((tool) => (
                <ToolRow key={tool.id} tool={tool} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ WHY TAXVIO TOOLS ══════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Why Taxvio Tools Are Different
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Every tool is built with real-world compliance in mind — not just math, but accurate, CA-verified, up-to-date calculations you can trust.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_FEATURES.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-white border border-[#deeef7] rounded-2xl p-5 hover:border-[#00416a]/30 hover:shadow-md hover:shadow-[#00416a]/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center mb-4 group-hover:bg-[#00416a] transition-all">
                    <Icon size={18} className="text-[#00416a] group-hover:text-white transition-all" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#00416a] mb-2">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SEO CONTENT ══════════ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Complete Guide
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                India's Most Comprehensive GST & Tax Tool Suite
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                A detailed breakdown of every tool, how to use it, and why it matters for your compliance and financial planning.
              </p>
            </motion.div>

            <div className="space-y-16">

              {/* Block 1 */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    GST Tools — Built for Every Business
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Goods and Services Tax (GST) compliance is mandatory for every registered business in India. Yet, incorrect HSN codes, wrong tax rates, and GSTIN mismatches lead to thousands of crores in penalties and ITC reversals every year. Our GST tool suite eliminates these errors.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    The <strong>HSN Code Finder</strong> lets you instantly search the correct Harmonized System of Nomenclature code for any product or service — with CGST, SGST, and IGST breakdowns. The <strong>GST Calculator</strong> handles all five tax slabs (3%, 5%, 12%, 18%, 28%) with both inclusive and exclusive modes. The <strong>GST Number Search</strong> tool lets you verify any supplier's GSTIN before claiming Input Tax Credit.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Avoid penalties from wrong HSN codes (up to ₹50,000 penalty per error)",
                      "Verify supplier GSTINs before ITC claims to avoid reversals",
                      "Calculate exact CGST + SGST for intra-state and IGST for inter-state supplies",
                      "Updated for every GST Council notification and Budget amendment",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-5 py-3">
                    <p className="text-white font-bold text-sm">GST Tool Quick Reference</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["HSN Code Finder", "Find code + GST rate for any product/service"],
                      ["GST Calculator", "Calculate tax for any amount across all slabs"],
                      ["GST Number Search", "Verify GSTIN, name, filing status instantly"],
                      ["Rate Reference", "Quick guide to 0%, 5%, 12%, 18%, 28% items"],
                      ["CGST/SGST Split", "Auto-calculates intra-state vs inter-state tax"],
                      ["Copy & Export", "Copy codes directly to invoices & returns"],
                    ].map(([tool, use], i) => (
                      <div
                        key={tool}
                        className={`grid grid-cols-2 px-4 py-3 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                      >
                        <span className="font-semibold text-gray-700">{tool}</span>
                        <span className="text-gray-500 text-right">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Block 2 */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-10 items-start">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden order-2 md:order-1">
                  <div className="bg-orange-600 px-5 py-3">
                    <p className="text-white font-bold text-sm">Income Tax Calculator — Key Features</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      ["Old Regime", "With all deductions (80C, 80D, HRA, LTA, etc.)"],
                      ["New Regime", "Simplified slabs, higher standard deduction"],
                      ["Regime Comparison", "Side-by-side savings analysis"],
                      ["Surcharge", "Applicable for income > ₹50 lakh"],
                      ["Health & Education Cess", "4% on tax + surcharge"],
                      ["FY 2024-25 Slabs", "Post-Budget 2024 rates applied"],
                    ].map(([feature, detail], i) => (
                      <div
                        key={feature}
                        className={`grid grid-cols-2 px-4 py-3 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                      >
                        <span className="font-semibold text-gray-700">{feature}</span>
                        <span className="text-gray-500 text-right">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-extrabold text-[#00416a] mb-4">
                    Income Tax Tools — Old vs New Regime
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Since Budget 2020 introduced the New Tax Regime — and Budget 2023 made it the default — millions of salaried individuals, freelancers, and business owners are confused about which regime to opt for. Our Income Tax Calculator makes this decision simple.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Enter your gross salary, claim all eligible deductions under the old regime (Section 80C investments, health insurance under 80D, HRA, LTA, home loan interest), and our calculator instantly shows you the tax under both regimes — so you can choose what saves you the most.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For FY 2024-25, the new regime offers a standard deduction of ₹75,000, a basic exemption of ₹3 lakh, and tax rebate under Section 87A for income up to ₹7 lakh — making it attractive for those with fewer deductions. Our tool does the math in seconds.
                  </p>
                </div>
              </motion.div>

              {/* Block 3 */}
              <motion.div variants={fadeUp}>
                <h3 className="text-xl font-extrabold text-[#00416a] mb-6 text-center">
                  Investment & Loan Calculators — Plan Your Financial Future
                </h3>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    {
                      title: "EMI Calculator",
                      icon: TrendingUp,
                      color: "bg-emerald-600",
                      desc: "India has over 8 crore active loan accounts. Whether it's a home loan, car loan, or personal loan, knowing your exact EMI before signing helps you budget accurately. Our EMI calculator uses the standard reducing balance formula and shows a complete month-wise amortization table — exactly how banks calculate it.",
                      points: ["Precise EMI via reducing balance", "Month-by-month amortization", "Total interest vs principal breakdown", "Compare 5yr vs 10yr vs 20yr tenures"],
                    },
                    {
                      title: "SIP Calculator",
                      icon: BarChart2,
                      color: "bg-teal-600",
                      desc: "Systematic Investment Plan (SIP) in mutual funds is the most popular investment method for Indian retail investors. Our SIP calculator shows you the power of compounding — how ₹5,000/month at 12% CAGR for 20 years grows to ₹49.46 lakh from just ₹12 lakh invested.",
                      points: ["Compound growth projection", "Inflation-adjusted return view", "Step-up SIP calculation", "Goal-based wealth planning"],
                    },
                    {
                      title: "PPF Calculator",
                      icon: PiggyBank,
                      color: "bg-green-600",
                      desc: "Public Provident Fund (PPF) is India's most trusted tax-free investment — Section 80C deduction on deposit, tax-free interest (currently 7.1% p.a.), and fully exempt maturity amount under EEE category. Our PPF calculator shows year-wise interest accrual and maturity value for 15 years.",
                      points: ["Year-wise interest table (15 yr)", "7.1% p.a. rate (Q3 2024-25)", "80C tax deduction benefit", "Extension scenarios (5-yr blocks)"],
                    },
                  ].map(({ title, icon: Icon, color, desc, points }) => (
                    <div key={title} className={`bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all`}>
                      <div className={`${color} px-5 py-3 flex items-center gap-2`}>
                        <Icon size={16} className="text-white" />
                        <p className="text-white font-bold text-sm">{title}</p>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">{desc}</p>
                        <ul className="space-y-1.5">
                          {points.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-[11px] text-gray-500">
                              <CheckCircle2 size={11} className="text-emerald-500 shrink-0 mt-0.5" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ TRUST INDICATORS ══════════ */}
      <section className="py-16 bg-[#f8fbfd] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-[#00416a]">Trusted by Businesses Across India</h2>
              <p className="text-gray-500 mt-2 text-sm">From freelancers to enterprises — Taxvio tools power smarter compliance decisions</p>
            </motion.div>

            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { stat: "1.5 Lakh+", label: "Monthly Active Users", icon: Users, color: "text-sky-600", bg: "bg-sky-50" },
                { stat: "500+", label: "HSN/SAC Codes Covered", icon: Tag, color: "text-violet-600", bg: "bg-violet-50" },
                { stat: "₹499/mo", label: "GST Filing Starting From", icon: Shield, color: "text-emerald-600", bg: "bg-emerald-50" },
                { stat: "4.9★", label: "Average User Rating", icon: Star, color: "text-amber-600", bg: "bg-amber-50" },
              ].map(({ stat, label, icon: Icon, color, bg }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className={`${bg} border border-gray-100 rounded-2xl p-5 text-center`}
                >
                  <Icon size={20} className={`${color} mx-auto mb-2`} />
                  <p className={`text-2xl font-extrabold ${color}`}>{stat}</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonials */}
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4">
              {[
                {
                  name: "Rajesh Sharma",
                  role: "GST Consultant, Delhi",
                  text: "The HSN code finder saves me hours every week. I use it to quickly verify codes for clients before filing GSTR-1. The CGST/SGST breakdown is exactly what I need.",
                  stars: 5,
                },
                {
                  name: "Priya Menon",
                  role: "Chartered Accountant, Bengaluru",
                  text: "Best free GST calculator I've found. The inclusive/exclusive mode is super helpful. The income tax calculator's old vs new regime comparison is a lifesaver for client advisory.",
                  stars: 5,
                },
                {
                  name: "Amit Agarwal",
                  role: "E-commerce Seller, Mumbai",
                  text: "As a Flipkart seller, I need to quickly find HSN codes for new products. This tool is fast, accurate, and the copy button is perfect. Highly recommended!",
                  stars: 5,
                },
              ].map(({ name, role, text, stars }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 italic">"{text}"</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#00416a]/10 flex items-center justify-center text-xs font-extrabold text-[#00416a]">
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{name}</p>
                      <p className="text-[10px] text-gray-400">{role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SERVICES SECTION ══════════ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Beyond Calculators
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Need Expert Help? We've Got You Covered
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Our CA team handles everything from GST registration to income tax filing, company registration to trademark — complete compliance support, 100% online.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "GST Registration",
                  desc: "GSTIN in 3–5 working days. All states covered.",
                  href: "/serviceslist/gst/gst-registration",
                  icon: Shield,
                  price: "From ₹999",
                  color: "bg-sky-600",
                },
                {
                  title: "GST Return Filing",
                  desc: "GSTR-1, 3B, 9, 9C — monthly or quarterly.",
                  href: "/serviceslist/gst/gst-return",
                  icon: FileText,
                  price: "From ₹499/mo",
                  color: "bg-violet-600",
                },
                {
                  title: "Income Tax Filing",
                  desc: "ITR for salaried, business, freelancer & NRI.",
                  href: "/serviceslist/income-tax",
                  icon: Calculator,
                  price: "From ₹799",
                  color: "bg-orange-600",
                },
                {
                  title: "Company Registration",
                  desc: "Pvt Ltd, LLP, OPC — MCA filing included.",
                  href: "/serviceslist/company",
                  icon: Landmark,
                  price: "From ₹4,999",
                  color: "bg-emerald-600",
                },
              ].map(({ title, desc, href, icon: Icon, price, color }) => (
                <motion.div key={title} variants={fadeUp}>
                  <Link
                    href={href}
                    className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#00416a]/25 hover:shadow-lg transition-all duration-200"
                  >
                    <div className={`${color} px-5 py-4 flex items-center gap-3`}>
                      <Icon size={18} className="text-white" />
                      <p className="text-white font-bold text-sm">{title}</p>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-4">{desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[#00416a]">{price}</span>
                        <span className="flex items-center gap-1 text-xs text-[#00416a] font-bold group-hover:gap-2 transition-all">
                          Get Started <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ INFO BANNER ══════════ */}
      <section className="py-10 bg-amber-50 border-y border-amber-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-start gap-4"
          >
            <Info size={20} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-xs text-amber-700 leading-relaxed">
                All tools on Taxvio are for informational and educational purposes. While we strive to keep all calculators accurate and up-to-date with the latest CBIC notifications, GST Council decisions, and Union Budget amendments, the results should not be used as a substitute for professional CA advice. Tax laws change frequently — always consult a qualified Chartered Accountant for filing obligations, audit compliance, and major financial decisions. GST rates, HSN classifications, and tax slabs are subject to change by the government without notice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-16 px-6 bg-[#f8fbfd]">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-16 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Zap size={11} className="text-sky-300" /> Expert CA Support Available
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Tools Are Great. Expert Advice Is Better.
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Use our free tools for quick calculations, then let our CA team handle the actual filing, compliance, and strategy — GST, ITR, company registration, and more.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                >
                  <MessageCircle size={15} /> WhatsApp Us Now
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
                  <Phone size={14} /> Call Us
                </a>
              </div>
              <p className="mt-6 text-white/40 text-xs">
                GST · ITR · Company Registration · Trademark · Accounting · Payroll · 100% Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}
