// app/gst-for-e-commerce/GstForEcommerceClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Shield,
  Users,
  Zap,
  Clock,
  FileText,
  Phone,
  MessageCircle,
  Star,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Search,
  Calculator,
  ShoppingCart,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I need GST compliance support for my e-commerce business. Please guide me."
)}`;

/* ─── Who needs GST e-commerce support ──────────────────────────────────────── */
const WHO_NEEDS = [
  {
    icon: "📦",
    title: "Amazon, Flipkart & Meesho Sellers",
    section: "Marketplace Sellers",
    desc: "Online sellers receiving marketplace settlements, TCS credit, return adjustments, commission invoices and shipping fee deductions need monthly GST reconciliation to avoid mismatch notices.",
  },
  {
    icon: "🛍️",
    title: "Shopify & D2C Brands",
    section: "Own Website Sales",
    desc: "D2C brands selling from their own website need correct GST registration, invoicing, HSN mapping, state-wise supply reporting, ITC tracking and return filing across all sales channels.",
  },
  {
    icon: "🍔",
    title: "Restaurants on Zomato / Swiggy",
    section: "Section 9(5)",
    desc: "Restaurant and cloud kitchen sales through ECOs are treated differently under Section 9(5). Correct reporting prevents double payment of GST and mismatch between platform data and GST returns.",
  },
  {
    icon: "🚚",
    title: "ONDC & Multi-Platform Sellers",
    section: "Multiple ECOs",
    desc: "Sellers operating on multiple marketplaces require platform-wise reconciliation because each ECO may report TCS separately and settlement cycles may not match invoice or return periods.",
  },
  {
    icon: "🏪",
    title: "Small Online Sellers",
    section: "Exemption Review",
    desc: "Small sellers may qualify for limited registration exemption only if strict conditions are met. Taxvio checks whether you can sell without GST registration or need GST from day one.",
  },
  {
    icon: "💻",
    title: "E-Commerce Operators",
    section: "GSTR-8 / TCS",
    desc: "Platforms that collect consideration on behalf of sellers must evaluate Section 52 TCS, GSTR-8, supplier reporting, seller onboarding controls and Section 9(5) liability where applicable.",
  },
];

/* ─── What's included ───────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  {
    icon: "🪪",
    title: "GST Registration & Marketplace Setup",
    desc: "GST registration for Amazon, Flipkart, Meesho, Myntra, JioMart, Shopify and D2C sellers — including business address review, bank proof, Aadhaar authentication and marketplace GSTIN update.",
  },
  {
    icon: "📊",
    title: "Monthly GSTR-1 & GSTR-3B Filing",
    desc: "Return filing with correct taxable value, tax rate, B2C/B2B classification, credit notes, sales returns, cancellations, marketplace discounts and ITC reporting.",
  },
  {
    icon: "🔍",
    title: "Marketplace Settlement Reconciliation",
    desc: "Amazon/Flipkart/Meesho settlement reports matched against sales register, GST invoices, TCS, commission, shipping fee, return charges and net payout received in bank.",
  },
  {
    icon: "🏛",
    title: "GST TCS Credit Reconciliation",
    desc: "TCS collected by marketplaces is matched with GSTR-8 data and GSTR-2B/electronic cash ledger. Missing TCS credits are tracked and escalated before return finalisation.",
  },
  {
    icon: "🍽️",
    title: "Section 9(5) Reporting Advisory",
    desc: "For restaurants, cloud kitchens, accommodation and notified services supplied through ECOs, we help report ECO-paid GST supplies correctly and avoid double tax in GSTR-3B.",
  },
  {
    icon: "📩",
    title: "GST Notice & Mismatch Support",
    desc: "ASMT-10, DRC-01A, GSTR-1 vs 3B mismatch, TCS mismatch, GSTR-2B ITC mismatch and platform turnover differences — reviewed and replied professionally.",
  },
];

/* ─── Process steps ─────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Business Model & Platform Review",
    desc: "We first understand whether you sell on marketplaces, your own Shopify/D2C website, ONDC, food aggregator platforms, or operate an e-commerce platform yourself. GST treatment changes based on this model.",
  },
  {
    step: "02",
    title: "GST Registration / Exemption Decision",
    desc: "We check whether GST registration is mandatory or whether small-seller exemption can apply. For registered businesses, we handle GST application, Aadhaar authentication and GSTIN activation.",
  },
  {
    step: "03",
    title: "HSN, Tax Rate & Invoice Setup",
    desc: "Your products or services are mapped to correct HSN/SAC codes and GST rates. We help configure invoices, shipping charges, discounts, packing charges and marketplace fee tax treatment.",
  },
  {
    step: "04",
    title: "Monthly Data Collection",
    desc: "Every month, you share marketplace settlement reports, sales registers, purchase invoices, expense bills and bank statements. We consolidate platform-wise data and prepare GST-ready working files.",
  },
  {
    step: "05",
    title: "Reconciliation & Return Filing",
    desc: "Marketplace sales, GST liability, TCS credit, ITC and settlements are reconciled. GSTR-1 and GSTR-3B are filed with correct reporting to reduce future mismatch notices.",
  },
  {
    step: "06",
    title: "Compliance Dashboard & Advisory",
    desc: "You receive a clear monthly summary — taxable sales, GST payable, ITC claimed, TCS credit, platform charges and key risk areas. Taxvio also advises on e-invoicing, e-way bills and annual return applicability.",
  },
];

/* ─── Key comparison table ─────────────────────────────────────────────────── */
const COMPARISON = [
  {
    point: "Who You Are",
    seller: "Seller using Amazon / Flipkart / Meesho",
    operator: "Platform collecting payment for sellers",
    own: "Brand selling through own website",
  },
  {
    point: "Main GST Risk",
    seller: "TCS credit and sales mismatch",
    operator: "GSTR-8 and Section 52 TCS",
    own: "Invoicing, rate and ITC errors",
  },
  {
    point: "Common Returns",
    seller: "GSTR-1, GSTR-3B, GSTR-9 if applicable",
    operator: "GSTR-8, GSTR-1, GSTR-3B",
    own: "GSTR-1, GSTR-3B",
  },
  {
    point: "TCS Impact",
    seller: "Credit appears after ECO files GSTR-8",
    operator: "Collect and deposit TCS monthly",
    own: "No Section 52 TCS if selling own goods directly",
  },
  {
    point: "Section 9(5)",
    seller: "Applies to notified service sellers",
    operator: "Pays GST for notified services",
    own: "Usually not applicable",
  },
  {
    point: "Taxvio Support",
    seller: "Marketplace reconciliation + returns",
    operator: "TCS/GSTR-8 compliance setup",
    own: "D2C GST setup + return filing",
  },
];

/* ─── Compliance cards ─────────────────────────────────────────────────────── */
const COMPLIANCE = [
  {
    icon: "🧾",
    title: "GSTR-1 Reporting",
    tag: "Outward Supply",
    badgeColor: "bg-blue-500",
    desc: "Platform sales, B2C supplies, B2B invoices, credit notes, returns and amendments must be reported correctly. Wrong reporting creates mismatch with marketplace data and buyer ITC.",
  },
  {
    icon: "💳",
    title: "GSTR-3B Payment",
    tag: "Monthly Tax",
    badgeColor: "bg-emerald-500",
    desc: "GST liability must be paid after adjusting ITC and TCS credit. For e-commerce sellers, TCS credit often appears later depending on GSTR-8 filing by the marketplace.",
  },
  {
    icon: "🏛",
    title: "GSTR-8 for Operators",
    tag: "10th Due Date",
    badgeColor: "bg-red-500",
    desc: "E-commerce operators required to collect TCS under Section 52 file GSTR-8 monthly by the 10th of the succeeding month, reporting supplier-wise taxable supplies and TCS.",
  },
  {
    icon: "🔄",
    title: "Settlement Reconciliation",
    tag: "Critical",
    badgeColor: "bg-violet-500",
    desc: "Gross sales, returns, cancellations, commission, shipping, ads, penalties, TCS and net payout rarely match directly. Monthly reconciliation prevents ASMT-10 and DRC notices.",
  },
];

/* ─── Documents required ───────────────────────────────────────────────────── */
const DOCS = [
  {
    category: "Business & KYC",
    icon: "🪪",
    items: [
      "PAN of proprietor / firm / company",
      "Aadhaar and mobile linked with Aadhaar",
      "Photograph of proprietor / partners / directors",
      "Email ID and mobile number",
      "Business constitution proof, if applicable",
    ],
  },
  {
    category: "Business Place",
    icon: "🏢",
    items: [
      "Electricity bill / rent agreement / ownership proof",
      "NOC from owner if premises are rented",
      "Warehouse / pickup address details",
      "Principal and additional place of business details",
      "Marketplace pickup location confirmation",
    ],
  },
  {
    category: "E-Commerce Data",
    icon: "📦",
    items: [
      "Amazon / Flipkart / Meesho seller reports",
      "Marketplace settlement statements",
      "Sales and return reports",
      "Commission and shipping fee invoices",
      "Bank statement showing payouts",
    ],
  },
];

/* ─── Mistakes ─────────────────────────────────────────────────────────────── */
const MISTAKES = [
  {
    icon: "🚫",
    title: "Treating Net Bank Payout as Sales",
    desc: "Marketplace payout is after commission, shipping charges, TCS, penalties, ads and returns. GST turnover must usually be based on gross taxable supply, not net bank credit.",
  },
  {
    icon: "⚠️",
    title: "Ignoring TCS Credit",
    desc: "Marketplace TCS should be tracked in GST cash ledger and adjusted. If not reconciled, sellers either overpay GST or face mismatch between portal data and books.",
  },
  {
    icon: "📉",
    title: "Wrong Return Period for Sales Returns",
    desc: "Returns and cancellations must be mapped to the correct tax period with credit notes. Incorrect timing causes mismatch between GSTR-1, GSTR-3B and marketplace reports.",
  },
  {
    icon: "🍽️",
    title: "Double Paying GST on Section 9(5) Supplies",
    desc: "Restaurants and notified service providers often mistakenly pay GST again even when the ECO is liable under Section 9(5). Correct reporting avoids double tax.",
  },
];

/* ─── Why Taxvio ───────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  {
    icon: Users,
    title: "CA-Assisted E-Commerce GST",
    desc: "Every e-commerce GST file is reviewed by qualified professionals who understand marketplace reports, TCS credits, ITC and settlement mismatches.",
  },
  {
    icon: Search,
    title: "Marketplace Reconciliation",
    desc: "We do not blindly file returns. We reconcile gross sales, returns, commission, TCS, TDS, shipping and payouts platform-wise.",
  },
  {
    icon: Zap,
    title: "Amazon / Flipkart / Meesho Ready",
    desc: "Seller account GST setup, GSTIN updates, HSN mapping, invoice review and settlement reconciliation — all handled online.",
  },
  {
    icon: FileText,
    title: "Notice Prevention Focus",
    desc: "Most GST notices arise from data mismatch. Our monthly reconciliation reduces mismatch risk before the department flags it.",
  },
  {
    icon: RefreshCw,
    title: "Monthly Compliance Calendar",
    desc: "GSTR-1, GSTR-3B, TCS credit tracking, ITC matching and annual return advisory — Taxvio keeps your compliance calendar under control.",
  },
  {
    icon: Shield,
    title: "Confidential & Founder-Friendly",
    desc: "Perfect for small sellers, D2C founders, cloud kitchens and growing online brands that need professional GST without enterprise-level cost.",
  },
];

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "We sell on Amazon and Flipkart. Earlier our GST returns never matched marketplace payouts. Taxvio built a clean reconciliation sheet and now filings are smooth every month.",
    name: "Riya Fashion Store",
    location: "Noida",
  },
  {
    stars: 5,
    text: "Our cloud kitchen was confused about Zomato and Swiggy GST under Section 9(5). Taxvio corrected our reporting and helped avoid double payment.",
    name: "Urban Tandoor Kitchen",
    location: "Meerut",
  },
  {
    stars: 5,
    text: "Meesho TCS credit and settlement reports were very confusing. Taxvio handles monthly GST, TCS reconciliation and notices professionally.",
    name: "Sharma Home Decor",
    location: "Muzaffarnagar",
  },
];

/* ─── FAQs ─────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "Is GST mandatory for Amazon, Flipkart and Meesho sellers?",
    a: "GST registration is generally required for sellers supplying through e-commerce operators that collect TCS under Section 52, especially where inter-state supply is involved. However, small suppliers of goods may get registration exemption under Notification 34/2023 only if they satisfy strict conditions such as turnover below threshold, no inter-state supplies, supply through an ECO in only one State/UT, PAN declaration and enrolment number on the GST portal.",
  },
  {
    q: "What is GST TCS for e-commerce sellers?",
    a: "GST TCS is Tax Collected at Source by an e-commerce operator under Section 52 on the net value of taxable supplies made through its platform. From 10 July 2024, the overall TCS rate is 0.5% — 0.25% CGST + 0.25% SGST/UTGST for intra-state supplies or 0.5% IGST for inter-state supplies. Sellers can claim this TCS as credit after the ECO files GSTR-8.",
  },
  {
    q: "What GST returns do e-commerce sellers need to file?",
    a: "Registered e-commerce sellers generally file GSTR-1 for outward supplies and GSTR-3B for monthly tax payment. They must also reconcile TCS credit, marketplace settlement reports, commission invoices, returns, cancellations and ITC. Annual return GSTR-9 may apply depending on turnover and current thresholds.",
  },
  {
    q: "What is GSTR-8 and who files it?",
    a: "GSTR-8 is filed by e-commerce operators who are required to collect TCS under Section 52. It reports supplier-wise sales made through the platform and TCS collected. The due date is generally the 10th of the succeeding month. Sellers rely on this filing to receive TCS credit in their electronic cash ledger.",
  },
  {
    q: "Can I sell on my own Shopify website without GST?",
    a: "If you sell only through your own website and do not cross the normal GST registration threshold, GST may not be mandatory unless another compulsory registration trigger applies. However, if you sell through marketplaces like Amazon/Flipkart/Meesho or make inter-state taxable supplies, the analysis changes. Taxvio checks your exact model before advising.",
  },
  {
    q: "Why does marketplace payout not match GST turnover?",
    a: "Marketplace payout is net of commission, shipping charges, ads, penalties, returns, TCS and other deductions. GST turnover is based on taxable supply value, not the final bank credit. This is why e-commerce sellers need monthly settlement reconciliation before filing GST returns.",
  },
  {
    q: "What is Section 9(5) GST for Zomato and Swiggy sellers?",
    a: "Section 9(5) makes the e-commerce operator liable to pay GST for notified services such as restaurant services supplied through platforms. Restaurants and cloud kitchens must report such sales correctly but should avoid paying GST again on ECO-paid supplies. Incorrect reporting can cause double tax or mismatch notices.",
  },
  {
    q: "Can Taxvio handle GST notices for e-commerce mismatch?",
    a: "Yes. Taxvio assists with ASMT-10, DRC-01A, GSTR-1 vs GSTR-3B mismatch, TCS mismatch, ITC mismatch, marketplace sales mismatch and e-commerce settlement reconciliation. We prepare working papers, explanations and replies based on marketplace reports and GST portal data.",
  },
];

/* ─── FAQ accordion ────────────────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      itemScope
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="font-bold text-gray-800 text-sm leading-snug flex items-start gap-3"
          itemProp="name"
        >
          <span className="w-5 h-5 rounded-full bg-[#00416a] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">
            Q
          </span>
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-[#00416a] mt-0.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="px-6 pb-5 pl-14"
          itemScope
          itemType="https://schema.org/Answer"
          itemProp="acceptedAnswer"
        >
          <p className="text-gray-600 text-xs leading-relaxed" itemProp="text">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Fee Estimator ────────────────────────────────────────────────────────── */
function EcommerceFeeEstimator() {
  const [platforms, setPlatforms] = useState(1);
  const [monthlyOrders, setMonthlyOrders] = useState(50);
  const [noticeSupport, setNoticeSupport] = useState(false);

  const base =
    monthlyOrders <= 100
      ? 999
      : monthlyOrders <= 500
      ? 1999
      : monthlyOrders <= 1500
      ? 2999
      : 4999;

  const platformExtra = Math.max(platforms - 1, 0) * 500;
  const noticeExtra = noticeSupport ? 1500 : 0;
  const fee = base + platformExtra + noticeExtra;

  return (
    <section className="py-20 bg-gray-50" aria-label="E-commerce GST fee estimator">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Fee Estimator
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
            Estimate Your E-Commerce GST Monthly Fee
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
            Pricing depends on order volume, number of platforms and whether
            notice support or advanced reconciliation is required.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-bold text-gray-700 text-sm mb-2">
                Number of Marketplaces / Sales Channels
              </label>
              <input
                type="number"
                min={1}
                value={platforms}
                onChange={(e) => setPlatforms(Number(e.target.value))}
                className="border border-gray-200 p-3 rounded-xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a]"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700 text-sm mb-2">
                Approx. Monthly Orders
              </label>
              <input
                type="number"
                min={0}
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                className="border border-gray-200 p-3 rounded-xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a]"
              />
            </div>
          </div>

          <button
            onClick={() => setNoticeSupport(!noticeSupport)}
            className={`mt-5 px-4 py-2 rounded-xl text-xs font-semibold transition border ${
              noticeSupport
                ? "bg-[#00416a] text-white border-[#00416a]"
                : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#00416a]/50"
            }`}
            aria-pressed={noticeSupport}
          >
            Include GST Notice / Mismatch Support
          </button>

          <div className="mt-8 bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-5">
            <p className="text-sm text-gray-600 font-medium mb-1">
              Estimated professional fee
            </p>
            <p className="text-[#00416a] font-extrabold" aria-live="polite">
              <span className="text-3xl">₹{fee.toLocaleString("en-IN")}</span>
              <span className="text-sm font-semibold text-gray-500 ml-2">
                / month
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Indicative pricing only. Final quote depends on platform reports,
              turnover, GSTIN count, return frequency, data quality and pending
              mismatches. GST extra.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition active:scale-[0.97]"
            >
              <MessageCircle size={13} /> Get Exact Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Client Component ─────────────────────────────────────────────────────── */
export default function GstForEcommerceClient() {
  return (
    <main className="bg-white text-gray-800">
      {/* ══════ ALERT BANNER ══════ */}
      <div className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
        ⚡ Selling online? Marketplace payout is <strong>not</strong> your GST
        turnover | Reconcile sales, returns, commission, shipping, TCS and bank
        payout before filing GSTR-3B
      </div>

      {/* ══════ HERO ══════ */}
      <section
        aria-label="GST for e-commerce sellers and operators — Taxvio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
              {[
                { href: "/", label: "Home" },
                { href: "/serviceslist", label: "Services" },
                { href: "/serviceslist/gst", label: "GST" },
                { href: null, label: "GST for E-Commerce" },
              ].map(({ href, label }, i, arr) => (
                <li key={label} className="flex items-center gap-1.5">
                  {href ? (
                    <Link href={href} className="hover:text-white/80 transition">
                      {label}
                    </Link>
                  ) : (
                    <span className="text-white/75 font-medium">{label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <ChevronRight size={12} className="text-white/25" />
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 text-sky-300"
            style={{
              background: "rgba(56,189,248,0.12)",
              border: "1px solid rgba(56,189,248,0.25)",
            }}
          >
            🛒 GST for E-Commerce — Amazon · Flipkart · Meesho · Shopify
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                GST for E-Commerce
                <span className="block mt-2 text-sky-300">
                  Sellers & Operators
                </span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Complete GST setup and monthly compliance for{" "}
                <strong className="text-white">
                  Amazon, Flipkart, Meesho, Shopify, D2C brands, restaurants
                  and e-commerce operators
                </strong>
                . Taxvio handles GST registration, GSTR-1, GSTR-3B, GSTR-8,
                marketplace settlement reconciliation,{" "}
                <strong className="text-white">GST TCS credit matching</strong>{" "}
                and GST notice support. Starting{" "}
                <strong className="text-white">₹1,499</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "✅ GST Registration",
                  "📊 Marketplace Reconciliation",
                  "🔒 TCS Credit Matching",
                  "📩 GST Notice Support",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold rounded-full px-3 py-1.5"
                    style={{
                      background: "rgba(255,255,255,0.09)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  <MessageCircle size={16} /> Start GST Setup — ₹1,499
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                {[
                  "Amazon / Flipkart / Meesho",
                  "GSTR-1 + GSTR-3B",
                  "GSTR-8 for Operators",
                  "Section 9(5) Advisory",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-sky-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Facts Card */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <p className="font-bold text-white text-sm">
                  E-Commerce GST — Key Facts
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  Current rules · CA assisted
                </p>
              </div>

              <div className="p-5 space-y-3.5">
                {[
                  { label: "Seller Returns", val: "GSTR-1 + GSTR-3B" },
                  { label: "Operator Return", val: "GSTR-8" },
                  { label: "GSTR-8 Due Date", val: "10th of next month" },
                  { label: "GST TCS Rate", val: "0.5% overall" },
                  { label: "TCS Section", val: "Section 52" },
                  { label: "ECO-Paid GST", val: "Section 9(5)" },
                  { label: "Setup Time", val: "3–7 working days" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">{label}</span>
                    <span className="font-bold text-white text-xs text-right">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <div
                  className="rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div>
                    <p className="text-white text-xs font-bold">
                      Starting From
                    </p>
                    <p className="text-sky-300 text-2xl font-extrabold">
                      ₹1,499
                    </p>
                    <p className="text-white/40 text-[10px] mt-0.5">
                      GST setup · Returns from ₹999/mo
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(240+)</span>
                  </div>
                </div>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 hover:bg-green-600 py-3 text-white text-sm font-bold transition-all active:scale-[0.97] mt-3"
                >
                  <MessageCircle size={14} /> Get Started on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STATS STRIP ══════ */}
      <section className="bg-[#00416a] py-8" aria-label="Taxvio e-commerce GST statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "240+", label: "E-Commerce Clients" },
            { val: "3–7", label: "GST Setup Days" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹1,499", label: "Starting Price" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">
                {val}
              </p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ WHO NEEDS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Who needs GST for e-commerce">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Applicability
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            Who Needs E-Commerce GST Compliance?
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            GST treatment changes depending on whether you are a marketplace
            seller, D2C brand, restaurant, cloud kitchen, service provider or
            e-commerce operator.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_NEEDS.map(({ icon, title, section, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#00416a] mb-0.5">
                      {section}
                    </p>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHAT INCLUDED ══════ */}
      <section className="py-20 bg-white" aria-label="What is included in e-commerce GST service">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Complete GST Support for Online Sellers
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              GST registration, marketplace setup, return filing, TCS credit
              matching and settlement reconciliation — handled end to end.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_INCLUDED.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPARISON TABLE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="E-commerce seller versus operator GST comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Role-Based GST
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Seller vs E-Commerce Operator vs Own Website — GST Difference
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              The same online sale can have different GST treatment depending on
              who collects payment and who owns the platform.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">Parameter</th>
                  <th className="px-4 py-3.5 text-left font-bold">
                    Marketplace Seller
                  </th>
                  <th className="px-4 py-3.5 text-left font-bold">
                    E-Commerce Operator
                  </th>
                  <th className="px-4 py-3.5 text-left font-bold">
                    Own Website / D2C
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON.map(({ point, seller, operator, own }, i) => (
                  <tr
                    key={point}
                    className={`hover:bg-blue-50/20 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-700">
                      {point}
                    </td>
                    <td className="px-4 py-3 text-gray-700 font-medium">
                      {seller}
                    </td>
                    <td className="px-4 py-3 text-gray-500">{operator}</td>
                    <td className="px-4 py-3 text-gray-600">{own}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-[#00416a] leading-relaxed">
              <strong>Quick rule:</strong> If a marketplace collects customer
              payment and settles it to sellers, Section 52 TCS may apply. If
              you sell only your own goods through your own website, Section 52
              TCS generally does not apply — but normal GST registration and
              return rules may still apply.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ PROCESS ══════ */}
      <section className="py-20 bg-white" aria-label="Taxvio e-commerce GST process">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step E-Commerce GST Process
          </h2>

          <div className="space-y-4">
            {STEPS.map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex gap-5 items-start bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-[#00416a]/15 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-md">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPLIANCE POINTS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="E-commerce GST compliance requirements">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Compliance Reference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Critical GST Compliance for E-Commerce
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Online sellers face more data points than offline businesses:
              platform reports, TCS, returns, cancellations, commissions and
              GST portal records.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {COMPLIANCE.map(({ icon, title, tag, badgeColor, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-xl shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug">
                      {title}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full shrink-0 ${badgeColor}`}
                  >
                    {tag}
                  </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-red-50 border border-red-100 rounded-2xl p-5 flex items-start gap-3">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700 leading-relaxed">
              <strong>Important:</strong> Do not file GST returns using only
              marketplace net payout. GST department notices commonly arise when
              gross marketplace sales in platform reports do not match turnover
              declared in GSTR-1 and GSTR-3B.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DOCUMENTS ══════ */}
      <section className="py-20 bg-white" aria-label="Documents required for e-commerce GST registration and returns">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Documents Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Documents Required for E-Commerce GST
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Documents can be shared online. For monthly returns, marketplace
              reports and settlement files are the most important inputs.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {DOCS.map(({ category, icon, items }) => (
              <div
                key={category}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#00416a] flex items-center justify-center text-base">
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">
                    {category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-gray-600"
                    >
                      <CheckCircle
                        size={10}
                        className="text-green-500 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ MISTAKES ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Common e-commerce GST mistakes">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Avoid These Mistakes
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Common GST Mistakes Online Sellers Make
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Most e-commerce GST notices are not caused by tax evasion — they
              are caused by mismatched data across marketplace reports and GST
              filings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {MISTAKES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-red-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-4">
            <ShoppingCart size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-[#00416a]">Taxvio tip:</strong> Maintain
              a monthly platform-wise reconciliation file for Amazon, Flipkart,
              Meesho, Shopify and offline sales separately. This makes GST
              return filing cleaner and notice replies much stronger.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section
        className="py-20 bg-white"
        aria-label="Complete guide to GST for e-commerce sellers in India"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-14">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              GST for E-Commerce Sellers in India — Complete Guide
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                GST compliance for e-commerce sellers is more complex than
                ordinary retail GST because online sellers deal with multiple
                data sources: customer invoices, marketplace sales reports,
                settlement statements, commission invoices, shipping deductions,
                sales returns, cancellations, ad charges and GST TCS credit.
                Filing returns only from bank credits or net settlement values
                is one of the biggest mistakes online sellers make.
              </p>
              <p>
                If you sell on Amazon, Flipkart, Meesho, Myntra, JioMart or
                similar platforms, the marketplace may collect consideration
                from the customer and release payout after deducting its charges.
                The marketplace may also collect GST TCS under Section 52. This
                TCS does not automatically reduce your GST liability unless it
                appears in your electronic cash ledger and is properly adjusted
                while filing GSTR-3B.
              </p>
              <p>
                Taxvio's e-commerce GST service is designed specifically for
                online sellers. We help with GST registration, marketplace GSTIN
                setup, HSN mapping, monthly GSTR-1 and GSTR-3B filing, TCS
                credit matching, settlement reconciliation and GST notice
                support. The goal is simple: your marketplace sales, GST
                returns, cash ledger and books should speak the same language.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              GST Registration for Online Sellers — Mandatory or Exempt?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                GST registration for e-commerce sellers depends on the exact
                business model. Sellers supplying through e-commerce operators
                that collect TCS under Section 52 have traditionally been under
                compulsory registration provisions. However, a limited
                relaxation exists for small suppliers of goods through ECOs,
                subject to strict conditions such as turnover below threshold,
                no inter-state supply, supply through an ECO in only one State
                or Union Territory, PAN declaration and GST portal enrolment.
              </p>
              <p>
                This means a small local seller may not automatically need GST
                registration merely because they sell goods online, but the
                exemption is not universal. If you sell inter-state through a
                marketplace, operate in more than one State, cross the threshold,
                supply taxable services, or fail the enrolment conditions, GST
                registration may still be required.
              </p>
              <p>
                For D2C brands selling through their own Shopify or WooCommerce
                website, the analysis is different because there may be no ECO
                collecting consideration on behalf of third-party sellers. In
                such cases, normal GST registration thresholds and compulsory
                registration triggers must be reviewed.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              GST TCS Under Section 52 — What Sellers Must Reconcile
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Under Section 52, an e-commerce operator required to collect
                consideration from buyers collects TCS on the net value of
                taxable supplies made through the platform. From 10 July 2024,
                the rate is 0.5% overall — 0.25% CGST plus 0.25% SGST/UTGST
                for intra-state supplies, or 0.5% IGST for inter-state
                supplies.
              </p>
              <p>
                From a seller's perspective, this TCS is not a cost if properly
                reconciled. It becomes available as credit in the electronic
                cash ledger after the e-commerce operator files GSTR-8. But
                problems arise when the marketplace delays GSTR-8 filing, files
                incorrect taxable value, reports under the wrong GSTIN, or when
                seller books do not match platform data.
              </p>
              <p>
                Every month, Taxvio reconciles platform TCS statements with GST
                portal data and settlement reports. This helps ensure that TCS
                credit is actually available and correctly adjusted against GST
                liability.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Section 9(5) — Zomato, Swiggy, Cloud Kitchens and Notified Services
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Section 9(5) is a special rule where the e-commerce operator is
                treated as the supplier liable to pay GST for notified services.
                The most common example is restaurant service supplied through
                platforms like Zomato and Swiggy. Other notified categories
                include passenger transport, accommodation and housekeeping
                services supplied through ECOs.
              </p>
              <p>
                For restaurants and cloud kitchens, this creates a practical
                reporting issue. Platform sales on which the ECO is liable
                should not be taxed again by the restaurant in the same manner
                as direct dine-in or takeaway sales. However, those sales still
                need correct disclosure in GST returns. Incorrect reporting may
                lead to double payment or mismatch notices.
              </p>
              <p>
                Taxvio helps food businesses segregate direct sales, aggregator
                sales, platform-paid GST supplies, commission invoices and ITC
                restrictions so returns remain consistent with platform data.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Why Monthly Marketplace Reconciliation Prevents GST Notices
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                GST notices for e-commerce sellers commonly arise from mismatch
                between GSTR-1, GSTR-3B, GSTR-2B, marketplace sales reports and
                bank statements. Returns, cancelled orders, cashbacks, platform
                discounts, seller-funded discounts, shipping recoveries,
                commission invoices and ad invoices all affect the final
                computation.
              </p>
              <p>
                A clean reconciliation starts with gross marketplace sales and
                then maps every adjustment: returns, credit notes, commission,
                logistics, payment gateway fee, TCS, TDS, ads, penalties and
                final net payout. Only then should the GST liability and ITC be
                finalised.
              </p>
              <p>
                Taxvio prepares platform-wise monthly workings so founders can
                understand what they actually sold, what GST was payable, what
                ITC was claimed, how much TCS was credited and why the bank
                payout differs from GST turnover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EcommerceFeeEstimator />

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-white" aria-label="Why choose Taxvio for e-commerce GST">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why Online Sellers Trust Taxvio
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Professional GST compliance for e-commerce sellers — without
              confusing jargon or enterprise-level pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00416a]/8 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#00416a]" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{title}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Client reviews for e-commerce GST service">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Trusted by E-Commerce Sellers Across India
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ stars, text, name, location }) => (
              <div
                key={name}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-xs leading-relaxed mb-5 italic">
                  "{text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#00416a] flex items-center justify-center text-white font-extrabold text-xs shrink-0">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-xs">{name}</p>
                    <p className="text-gray-400 text-[10px]">📍 {location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-20 bg-white" aria-label="GST for e-commerce FAQs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — GST for E-Commerce
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════ REACH ══════ */}
      <section
        className="py-14 bg-gray-50 border-t border-gray-100"
        aria-label="GST for e-commerce services across India"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">
              GST for E-Commerce Sellers Across India
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in{" "}
            <strong>Khatauli, Muzaffarnagar, Uttar Pradesh</strong> and
            provides GST registration, monthly GST return filing, marketplace
            reconciliation and GST notice support for Amazon, Flipkart, Meesho,
            Shopify and D2C sellers across{" "}
            <strong>
              Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai,
              Bangalore
            </strong>{" "}
            and all of India. Our process is 100% online.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Khatauli",
              "Muzaffarnagar",
              "Meerut",
              "Noida",
              "Delhi NCR",
              "Ghaziabad",
              "Lucknow",
              "Jaipur",
              "Mumbai",
              "Bangalore",
              "Hyderabad",
              "Chennai",
              "Pune",
              "Surat",
            ].map((city) => (
              <Link
                key={city}
                href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150"
              >
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section
        className="py-14 bg-white border-t border-gray-100"
        aria-label="Related GST and income tax services"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">
              Explore More — Related Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "GST Registration",
                desc: "Get GSTIN in 3–7 days — ₹1,499",
                href: "/serviceslist/gst/gst-registration",
                icon: "🧾",
              },
              {
                title: "GST Return Filing",
                desc: "GSTR-1 & GSTR-3B — ₹999/month",
                href: "/serviceslist/gst/gst-return",
                icon: "📋",
              },
              {
                title: "Quarterly TCS Filing",
                desc: "Form 27EQ filing — ₹999/quarter",
                href: "/serviceslist/income-tax/quarterly-tcs",
                icon: "🏛",
              },
              {
                title: "Private Limited Registration",
                desc: "Start your D2C brand — ₹6,999",
                href: "/serviceslist/roc/private-limited-formation",
                icon: "🏢",
              },
            ].map(({ title, desc, href, icon }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs group-hover:text-[#00416a] transition">
                    {title}
                  </p>
                  <p className="text-gray-500 text-[11px] mt-0.5 leading-snug">
                    {desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00416a] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight size={9} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section
        className="py-20 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] relative overflow-hidden"
        aria-label="Start e-commerce GST compliance with Taxvio"
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm">
                ⚡ Marketplace GST Alert
              </p>
              <p className="text-white/65 text-xs mt-0.5">
                Reconcile <strong className="text-white">gross sales</strong>,
                not just payout. TCS credit, returns and commissions must match
                before filing.
              </p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]"
            >
              <MessageCircle size={13} /> Start GST Review
            </a>
          </div>

          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <TrendingUp size={12} className="text-sky-400" />
              240+ E-Commerce Clients · 4.9★ Rating · Starting ₹1,499
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Sell Online Without GST Stress —
              <span className="block mt-1 text-sky-300">
                Start E-Commerce GST Setup from ₹1,499
              </span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              GST registration, Amazon/Flipkart/Meesho setup, GSTR-1, GSTR-3B,
              GSTR-8, TCS credit matching, settlement reconciliation and GST
              notice support — all handled by Taxvio's CA team. 100% online,
              pan-India.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <MessageCircle size={16} /> Start GST Setup — ₹1,499
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                Free Consultation <ArrowRight size={15} />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <Phone size={15} /> Call Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Shield size={12} /> 100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} /> CA Assisted
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={12} /> Marketplace Ready
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} /> Mon–Sat · 9 AM–7 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}