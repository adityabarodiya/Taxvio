// app/state/madhya-pradesh/income-tax-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  CheckCircle, Building2, Landmark, AlertCircle, ChevronRight,
  Receipt, Calculator, ClipboardList, RefreshCw,
} from "lucide-react";
import { MP_CITIES, MP_REGIONS, slugifyCity } from "@/data/mp-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Income Tax Return Filing & TDS Services in Madhya Pradesh | Taxvio",
  description:
    "CA-assisted ITR filing for salaried individuals, proprietors, firms, LLPs & companies, quarterly TDS/TCS returns, tax audit, scrutiny reply, 12A/80G registration, PAN/TAN application, and Form 15G/15H across all 55 districts and 300+ cities of Madhya Pradesh. 100% online, starting ₹499.",
  keywords: [
    "income tax return filing Madhya Pradesh",
    "ITR filing MP",
    "TDS return filing MP",
    "tax audit MP",
    "income tax consultant MP",
    "ITR salaried Madhya Pradesh",
    "ITR proprietor MP",
    "12A 80G registration MP",
    "income tax scrutiny MP",
    "CA income tax services Bhopal Indore",
    "ITR filing Jabalpur Gwalior",
    "PAN TAN application MP",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/state/madhya-pradesh/income-tax-services",
  },
  openGraph: {
    title: "Income Tax Return Filing & TDS Services in Madhya Pradesh | Taxvio",
    description:
      "CA-assisted ITR filing, TDS returns, tax audit & scrutiny reply across 300+ MP cities — 100% online, from ₹499.",
    url: "https://www.taxvio.in/state/madhya-pradesh/income-tax-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Services in Madhya Pradesh | Taxvio",
    description:
      "ITR filing, TDS returns, tax audit & scrutiny reply across MP — from ₹499.",
  },
  robots: { index: true, follow: true },
};

/* ─── Income Tax Service Cards Data ────────────────────────────────────────── */
const IT_SERVICES = [
  {
    slug: "pan-card",
    title: "PAN Card",
    icon: "🪪",
    price: "₹199",
    timeline: "3–5 Days",
    gradient: "from-slate-500 to-gray-600",
    accentBg: "bg-slate-50",
    accentText: "text-slate-700",
    accentBorder: "border-slate-100",
    desc: "New PAN card application, correction, reissue, and demographic updates (name, DOB, address) with portal filing support and status tracking.",
    features: [
      "New PAN application",
      "PAN correction & reprint",
      "Name / DOB / address update",
      "PAN status tracking",
    ],
  },
  {
    slug: "tan-application",
    title: "TAN Application",
    icon: "🔢",
    price: "₹299",
    timeline: "3–7 Days",
    gradient: "from-zinc-500 to-slate-600",
    accentBg: "bg-zinc-50",
    accentText: "text-zinc-700",
    accentBorder: "border-zinc-100",
    desc: "New TAN registration and correction of existing TAN for businesses and employers liable to deduct or collect tax at source — with TDS/TCS compliance briefing.",
    features: [
      "New TAN application",
      "Correction in existing TAN",
      "TAN allotment tracking",
      "TDS / TCS compliance guidance",
    ],
  },
  {
    slug: "itr-salaried",
    title: "ITR — Salaried Individual",
    icon: "👔",
    price: "₹499",
    timeline: "24–48 Hours",
    gradient: "from-blue-500 to-indigo-600",
    accentBg: "bg-blue-50",
    accentText: "text-blue-700",
    accentBorder: "border-blue-100",
    desc: "Accurate ITR filing for salaried employees with Form 16 verification, deduction optimisation (80C, 80D, HRA, LTA), and same-day e-filing with acknowledgement.",
    features: [
      "Form 16 verification",
      "Deduction & exemption optimisation",
      "Multiple Form 16s supported",
      "E-filing with ITR-V / AIS check",
    ],
  },
  {
    slug: "itr-proprietor",
    title: "ITR — Individual Proprietor",
    icon: "🏪",
    price: "₹999",
    timeline: "2–3 Days",
    gradient: "from-violet-500 to-purple-600",
    accentBg: "bg-violet-50",
    accentText: "text-violet-700",
    accentBorder: "border-violet-100",
    desc: "ITR filing for proprietors and self-employed professionals with business income — including P&L preparation, balance sheet, tax computation, and presumptive taxation advisory (44AD/44ADA).",
    features: [
      "Business income computation",
      "P&L and balance sheet preparation",
      "44AD / 44ADA presumptive advisory",
      "Tax saving advisory",
    ],
  },
  {
    slug: "itr-firm-llp",
    title: "ITR — Partnership Firm / LLP",
    icon: "🤝",
    price: "₹1,999",
    timeline: "3–5 Days",
    gradient: "from-teal-500 to-cyan-600",
    accentBg: "bg-teal-50",
    accentText: "text-teal-700",
    accentBorder: "border-teal-100",
    desc: "Comprehensive ITR filing for partnership firms and LLPs — partner capital accounts, profit-sharing computation, remuneration and interest to partners, and tax audit coordination.",
    features: [
      "Firm / LLP income computation",
      "Partner capital & profit sharing",
      "Remuneration & interest to partners",
      "Tax audit coordination",
    ],
  },
  {
    slug: "itr-trust-company",
    title: "ITR — Trust / Pvt Ltd / Company",
    icon: "🏢",
    price: "₹2,999",
    timeline: "5–7 Days",
    gradient: "from-emerald-500 to-green-600",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    accentBorder: "border-emerald-100",
    desc: "Specialised ITR filing for private limited companies, public limited companies, and charitable trusts — with audit coordination, MAT computation, and Section 11/12 exemption compliance for trusts.",
    features: [
      "Corporate ITR — ITR-6 filing",
      "Trust ITR — ITR-7 with Section 11/12",
      "MAT / AMT computation",
      "Audit coordination support",
    ],
  },
  {
    slug: "quarterly-tds",
    title: "Quarterly TDS Return",
    icon: "📋",
    price: "₹999/quarter",
    timeline: "Due 31st Jul/Oct/Jan/May",
    gradient: "from-amber-500 to-orange-600",
    accentBg: "bg-amber-50",
    accentText: "text-amber-700",
    accentBorder: "border-amber-100",
    desc: "Quarterly TDS return filing (Form 24Q for salary, 26Q for non-salary, 27Q for foreign payments) with challan reconciliation, deductee PAN verification, and Form 16/16A generation support.",
    features: [
      "Form 24Q — salary TDS",
      "Form 26Q — non-salary TDS",
      "Form 27Q — foreign payment TDS",
      "Challan reconciliation & 16/16A",
    ],
  },
  {
    slug: "quarterly-tcs",
    title: "Quarterly TCS Return",
    icon: "🧮",
    price: "₹999/quarter",
    timeline: "Due 15th after Quarter",
    gradient: "from-orange-500 to-red-500",
    accentBg: "bg-orange-50",
    accentText: "text-orange-700",
    accentBorder: "border-orange-100",
    desc: "Quarterly TCS return filing (Form 27EQ) for businesses collecting tax at source on scrap, minerals, timber, liquor, vehicles, and specified high-value transactions — with challan reconciliation.",
    features: [
      "Form 27EQ — TCS return filing",
      "TCS challan reconciliation",
      "Collector & collectee details",
      "Form 27D certificate generation",
    ],
  },
  {
    slug: "income-tax-audit",
    title: "Income Tax Audit Assistance",
    icon: "🔎",
    price: "₹4,999",
    timeline: "Before 30th Sep",
    gradient: "from-rose-500 to-pink-600",
    accentBg: "bg-rose-50",
    accentText: "text-rose-700",
    accentBorder: "border-rose-100",
    desc: "Complete Section 44AB tax audit support — audit applicability assessment, books of accounts review, Form 3CA/3CB and 3CD preparation, and filing on the income tax portal before the 30th September due date.",
    features: [
      "Section 44AB applicability check",
      "Form 3CA / 3CB preparation",
      "Form 3CD — 44-clause reporting",
      "Books of accounts review",
    ],
  },
  {
    slug: "income-tax-scrutiny",
    title: "Income Tax Scrutiny & Notice Reply",
    icon: "⚖️",
    price: "₹1,999",
    timeline: "Per Statutory Deadline",
    gradient: "from-red-500 to-rose-600",
    accentBg: "bg-red-50",
    accentText: "text-red-700",
    accentBorder: "border-red-100",
    desc: "Professional representation for income tax scrutiny notices (Section 143(2)), demand notices (Section 156), survey and search follow-up, and penalty proceedings — with written reply and hearing representation.",
    features: [
      "Section 143(2) scrutiny reply",
      "Section 156 demand response",
      "Written reply with evidence",
      "Hearing representation — NFAC / CIT(A)",
    ],
  },
  {
    slug: "12a-application",
    title: "12A Registration",
    icon: "🎗️",
    price: "₹2,999",
    timeline: "30–60 Days",
    gradient: "from-sky-500 to-blue-600",
    accentBg: "bg-sky-50",
    accentText: "text-sky-700",
    accentBorder: "border-sky-100",
    desc: "Section 12A/12AB registration for charitable trusts, societies, and NGOs — enabling income tax exemption on income applied for charitable purposes, with Form 10A filing and PCIT/CIT follow-up.",
    features: [
      "Form 10A — new 12AB registration",
      "Re-registration under new regime",
      "PCIT / CIT follow-up",
      "Objects clause and deed review",
    ],
  },
  {
    slug: "80g-application",
    title: "80G Registration",
    icon: "🏅",
    price: "₹2,999",
    timeline: "30–60 Days",
    gradient: "from-indigo-500 to-violet-600",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-700",
    accentBorder: "border-indigo-100",
    desc: "Section 80G registration for trusts and NGOs enabling donors to claim 50% or 100% income tax deduction on donations — with Form 10AC application, activity details, and PCIT follow-up.",
    features: [
      "Form 10AC — 80G application",
      "Donor deduction eligibility setup",
      "80G certificate receipt",
      "Renewal under new regime",
    ],
  },
  {
    slug: "15g-15h",
    title: "Form 15G & 15H",
    icon: "📝",
    price: "₹199",
    timeline: "Same Day",
    gradient: "from-cyan-500 to-teal-600",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-700",
    accentBorder: "border-cyan-100",
    desc: "Preparation and submission of Form 15G (non-senior citizens) and Form 15H (senior citizens) to prevent excess TDS deduction on bank FD interest, recurring deposits, and other qualifying income.",
    features: [
      "Eligibility check — income below threshold",
      "Form 15G for individuals below 60",
      "Form 15H for senior citizens (60+)",
      "Submission guidance to bank / deductor",
    ],
  },
];

/* ─── SEO Sections ──────────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "Income Tax Return Filing in Madhya Pradesh — Who Must File & Which ITR Form",
    body: `Income tax return filing is mandatory in Madhya Pradesh for every individual whose gross total income exceeds the basic exemption limit before deductions — ₹2.5 lakh for individuals below 60 years, ₹3 lakh for senior citizens (60–80 years), and ₹5 lakh for super senior citizens (above 80 years) under the old regime. Under the new default tax regime (Section 115BAC, applicable from FY 2023-24), the basic exemption limit is ₹3 lakh with a rebate under Section 87A making income up to ₹7 lakh effectively tax-free. ITR filing is also mandatory regardless of income for individuals who have deposited more than ₹1 crore in bank accounts, spent above ₹2 lakh on foreign travel, paid electricity bills exceeding ₹1 lakh, or have TDS/TCS deducted in their income.

Madhya Pradesh has a diverse taxpayer base — spanning Bhopal's large government employee and PSU workforce, Indore's private sector professionals and business owners, Jabalpur's defence and civilian employees, Gwalior and Ujjain's trading communities, and the agricultural and self-employed population spread across all 55 districts. Each taxpayer profile requires a different ITR form: ITR-1 (Sahaj) for salaried individuals with income up to ₹50 lakh, ITR-2 for those with capital gains or foreign income, ITR-3 for individuals with business or professional income (proprietors), ITR-4 (Sugam) for presumptive taxpayers under Section 44AD/44ADA/44AE, ITR-5 for partnership firms and LLPs, ITR-6 for companies, and ITR-7 for trusts and political parties claiming exemption.

Taxvio provides ITR filing across all forms for MP taxpayers — from straightforward ITR-1 for Bhopal government employees with a single Form 16, to complex ITR-3 filings for Indore-based consultants with foreign income and capital gains, to ITR-5 for partnership firms in Ujjain's soybean trading sector, to ITR-7 for charitable trusts in Sagar and Rewa divisions. Every ITR is CA-reviewed before filing — with deduction optimisation (Section 80C investments, 80D health insurance, 80G donations, HRA exemption, LTA, and standard deduction), AIS/TIS reconciliation to prevent income mismatch notices, and e-verification within 30 days of filing to complete the process.`,
  },
  {
    heading: "TDS Return Filing in Madhya Pradesh — Employers, Businesses & Compliance",
    body: `Tax Deducted at Source (TDS) is one of the most common compliance obligations for businesses and employers across Madhya Pradesh. Every entity that makes specified payments — salary, contractor payments, rent, professional fees, interest, commission, or property purchase — above the prescribed threshold is required to deduct TDS at the applicable rate, deposit it with the government by the 7th of the following month (or 30th April for March deductions), and file quarterly TDS returns.

Quarterly TDS return due dates in MP (and pan-India) are: 31st July (Q1 — April to June), 31st October (Q2 — July to September), 31st January (Q3 — October to December), and 31st May (Q4 — January to March). Late filing attracts a mandatory fee under Section 234E of ₹200 per day until the return is filed — capped at the total TDS amount. Additionally, incorrect or incomplete filing can attract a penalty of ₹10,000 to ₹1 lakh under Section 271H.

There are three primary TDS return forms: Form 24Q (TDS on salary — filed by all employers in MP deducting salary TDS), Form 26Q (TDS on non-salary payments — contractor payments, rent, professional fees, interest above threshold, property purchase), and Form 27Q (TDS on payments to non-residents — relevant for MP businesses making foreign payments for import of services or goods). For businesses collecting TCS (Tax Collected at Source) — scrap dealers, mineral traders, timber merchants, liquor vendors, and high-value goods sellers — Form 27EQ is filed quarterly.

Common TDS compliance challenges for MP businesses include: ensuring deductees' PAN details are correct to avoid 20% higher TDS deduction and rejected returns, reconciling TDS challans (OLTAS data) with return data to prevent challan mismatch errors, issuing Form 16 (salary TDS) and Form 16A (non-salary TDS) to deductees within prescribed timelines, and handling TDS notices from TRACES for short deduction, mismatch, or non-filing. Taxvio provides end-to-end quarterly TDS return filing for employers, businesses, and companies across all 55 MP districts — including challan reconciliation, PAN verification of all deductees, and Form 16/16A generation after return acceptance.`,
  },
  {
    heading: "Income Tax Audit in Madhya Pradesh — Section 44AB, Form 3CD & Due Dates",
    body: `Income tax audit under Section 44AB is mandatory for businesses in Madhya Pradesh with annual gross turnover exceeding ₹1 crore (₹10 crore if cash receipts and payments are below 5% of total receipts/payments) and for professionals with gross receipts above ₹50 lakh. The tax audit report (Form 3CA/3CB — the audit report, and Form 3CD — the 44-clause detailed annexure) must be filed on the income tax portal by 30th September for the preceding financial year, before filing the ITR for tax audit cases.

Form 3CD is a comprehensive 44-clause document requiring disclosure of significant accounting and tax information: method of accounting followed, inventory valuation method, depreciation computed, deductions claimed under various sections (80IC, 80IB, 80G, etc.), payments to related parties, acceptance and repayment of loans or deposits, TDS compliance position, MSME outstanding payments beyond 45 days, and dozens of other specific disclosures. Errors or omissions in Form 3CD attract scrutiny and can result in penalty under Section 271B (0.5% of turnover, maximum ₹1.5 lakh) for delayed filing.

MP businesses that need to carefully evaluate tax audit applicability include: traders in Ujjain, Dewas, and Mandsaur with large soybean and oilseed turnover; contractors and builders in Bhopal, Indore, and Jabalpur; manufacturing units in Pithampur's industrial area; and professional firms (medical clinics, law firms, CA firms) in all major MP cities. The ₹10 crore threshold (cashless transactions) is particularly relevant for businesses in MP that operate predominantly through banking channels — careful cash vs digital payment tracking determines whether the standard ₹1 crore threshold or the elevated ₹10 crore threshold applies.

Taxvio's CA team provides complete Section 44AB tax audit support for MP businesses — audit applicability assessment, books of accounts review and preparation (if not already maintained), Form 3CA/3CB signing by a practising CA, 44-clause Form 3CD preparation with all required disclosures, and e-filing on the income tax portal well before the 30th September deadline. We also coordinate simultaneous ITR filing for the audit year to ensure the ITR is filed in the same window, since the income tax portal enforces sequential filing for audit cases.`,
  },
  {
    heading: "Income Tax Scrutiny, Notices & 12A/80G Registration in Madhya Pradesh",
    body: `Income tax scrutiny notices are increasingly common for taxpayers across Madhya Pradesh as the Income Tax Department's risk-based assessment systems (CASS — Computer-Aided Scrutiny Selection) and the AIS (Annual Information Statement) cross-verification framework identify discrepancies between ITR data and third-party financial information. Common triggers for scrutiny notices in MP include: high-value cash deposits not matching ITR income, capital gains from property sales under-reported, agricultural income claims disproportionate to landholding size, business turnover significantly lower than GST-declared revenue, and large donations to trusts without verification.

Section 143(2) scrutiny notices require a response within 30 days and lead to a comprehensive assessment of the taxpayer's income, deductions, and tax liability. Failure to respond results in a best-judgement assessment under Section 144 — creating a demand that is significantly harder to set aside than a properly represented Section 143(2) case. Section 156 demand notices — issued after assessment — must be paid within 30 days or challenged through the appellate process (CIT(A), ITAT). Taxvio provides professional scrutiny notice reply, CIT(A) appeal preparation, and NFAC (National Faceless Assessment Centre) representation for MP taxpayers receiving scrutiny notices.

12A and 80G registrations are critical income tax compliance requirements for charitable trusts, societies, and NGOs operating across Madhya Pradesh. The new regime (effective from 1 April 2021) requires all trusts and NGOs to apply for fresh 12AB registration (under amended Section 12A) and 80G approval through Forms 10A and 10AC respectively — even those with old registrations. 12AB registration enables trusts to claim income tax exemption on income applied for charitable purposes (Section 11); 80G approval enables donors making donations to the trust to claim 50% or 100% deduction under Section 80G.

MP has a large charitable sector — covering religious trusts, educational institutions, healthcare NGOs, tribal welfare organisations, and environmental trusts. Taxvio handles 12A/80G applications for trusts and NGOs across all 55 MP districts — including charitable objects review, trust deed drafting assistance, Form 10A/10AC preparation and portal filing, PCIT/CIT follow-up for approval, and renewal applications for trusts that need to re-register under the amended regime.`,
  },
];

/* ─── FAQ Data ──────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is the income tax return filing due date for individuals in Madhya Pradesh?",
    a: "For individuals (salaried and non-audit cases), the ITR filing due date is 31st July of the assessment year. For businesses and individuals whose accounts require audit under Section 44AB, the due date is 31st October. For cases requiring transfer pricing audit, the due date is 30th November. Late filing attracts a fee under Section 234F — ₹5,000 if filed before 31st December, ₹10,000 thereafter (₹1,000 for total income below ₹5 lakh).",
  },
  {
    q: "Which ITR form should a salaried government employee in Madhya Pradesh use?",
    a: "A salaried government employee in MP with income only from salary, one house property, and other sources (like bank FD interest) below ₹50 lakh total income should file ITR-1 (Sahaj). If they have capital gains (from mutual funds, property sale), they must use ITR-2. If they have any business income, ITR-3 is applicable. Form 16 issued by the employer (state or central government) is the primary document needed.",
  },
  {
    q: "Is income tax audit mandatory for all businesses in Madhya Pradesh?",
    a: "Income tax audit under Section 44AB is mandatory for businesses with gross turnover above ₹1 crore (₹10 crore if cash transactions are below 5%). For professionals (doctors, CAs, lawyers, consultants), audit is required if gross receipts exceed ₹50 lakh. Businesses opting for presumptive taxation under Section 44AD/44ADA are exempt from audit if they declare income at the prescribed minimum percentage.",
  },
  {
    q: "What is the TDS return filing due date for employers in MP?",
    a: "Quarterly TDS returns (Form 24Q for salary) are due on: 31st July (Q1), 31st October (Q2), 31st January (Q3), and 31st May (Q4). Late filing attracts a mandatory fee of ₹200 per day under Section 234E, capped at the total TDS amount. Non-filing after the due date can attract a penalty of ₹10,000 to ₹1 lakh under Section 271H.",
  },
  {
    q: "Can a charitable trust in Madhya Pradesh claim income tax exemption without 12A registration?",
    a: "No. A charitable trust or NGO in MP can only claim income tax exemption under Section 11 (income applied for charitable purposes) if it has a valid 12AB registration from the PCIT/CIT. Without registration, the trust's income is taxed at the maximum marginal rate (30% + surcharge). All trusts must apply for fresh 12AB registration under the new regime introduced from 1 April 2021, even if they had the old Section 12A registration.",
  },
  {
    q: "What is the difference between Form 15G and Form 15H for MP bank account holders?",
    a: "Form 15G is for resident individuals below 60 years of age whose estimated total income for the year is below the taxable limit (₹2.5 lakh or ₹3 lakh under new regime) — submitted to the bank to prevent TDS deduction on FD interest. Form 15H is for senior citizens (60 years and above) with income below the taxable limit. Both forms must be submitted at the beginning of each financial year and are valid for that year only.",
  },
];

const TIER1_CITIES = MP_CITIES.filter((c) => c.tier === 1);

/* ─── Schema Markup ─────────────────────────────────────────────────────────── */
const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Income Tax Services in Madhya Pradesh — Taxvio",
  numberOfItems: IT_SERVICES.length,
  itemListElement: IT_SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://www.taxvio.in/state/madhya-pradesh/income-tax-services#${s.slug}`,
    description: s.desc,
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  telephone: "+918937980366",
  email: "support@taxvio.in",
  description:
    "Taxvio provides CA-assisted income tax return filing, TDS/TCS returns, tax audit, scrutiny reply, 12A/80G registration, PAN/TAN application and Form 15G/15H services across all 55 districts and 300+ cities of Madhya Pradesh.",
  areaServed: {
    "@type": "State",
    name: "Madhya Pradesh",
    containedInPlace: { "@type": "Country", name: "India" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2400",
  },
  priceRange: "₹199 - ₹9,999",
  openingHours: "Mo-Sa 09:00-19:00",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",             item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Madhya Pradesh",   item: "https://www.taxvio.in/state/madhya-pradesh" },
    { "@type": "ListItem", position: 3, name: "Income Tax",       item: "https://www.taxvio.in/state/madhya-pradesh/income-tax-services" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function ITServiceCard({ svc }: { svc: (typeof IT_SERVICES)[number] }) {
  return (
    <div
      id={svc.slug}
      className="group bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Card header */}
      <div className={`bg-gradient-to-r ${svc.gradient} p-5 relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="relative flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center text-2xl">
            {svc.icon}
          </div>
          <div className="bg-white/20 border border-white/25 rounded-xl px-3 py-1.5 text-center">
            <p className="text-[9px] text-white/60 font-bold uppercase tracking-wide">From</p>
            <p className="text-white font-extrabold text-sm leading-tight">{svc.price}</p>
          </div>
        </div>
        <h3 className="relative text-base font-extrabold text-white mt-3 leading-tight">
          {svc.title}
        </h3>
        <p className="relative text-white/60 text-[11px] mt-0.5">{svc.timeline}</p>
      </div>

      {/* Card body */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{svc.desc}</p>
        <ul className="space-y-1.5 flex-1 mb-4">
          {svc.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
              <CheckCircle size={10} className="text-emerald-500 shrink-0" /> {f}
            </li>
          ))}
        </ul>
        <Link
          href={`/state/madhya-pradesh/income-tax-services#${svc.slug}`}
          className={`mt-auto flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-bold ${svc.accentText} group-hover:underline`}
        >
          Get This Service in MP
          <ArrowRight
            size={13}
            className="text-gray-300 group-hover:text-current group-hover:translate-x-0.5 transition-all"
          />
        </Link>
      </div>
    </div>
  );
}

function MajorCityCard({
  name,
  district,
  region,
}: {
  name: string;
  district: string;
  region: string;
}) {
  return (
    <Link
      href={`/state/madhya-pradesh/income-tax-services/${slugifyCity(name)}`}
      aria-label={`Income tax services in ${name}, ${district}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-blue-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xl">🏙️</span>
          <ArrowRight
            size={13}
            className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5"
          />
        </div>
        <p className="font-bold text-sm text-white leading-tight group-hover:text-sky-200 transition-colors">
          {name}
        </p>
        <p className="text-[10px] text-white/50 mt-0.5">
          {district} · {region}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {["ITR", "TDS", "Audit", "Notice"].map((t) => (
            <span
              key={t}
              className="text-[9px] font-bold bg-white/10 text-white/70 px-1.5 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name }: { name: string }) {
  return (
    <Link
      href={`/state/madhya-pradesh/income-tax-services/${slugifyCity(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150"
    >
      <MapPin
        size={9}
        className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors"
      />
      <span className="truncate">{name}</span>
    </Link>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 p-5">
        <div className="w-7 h-7 rounded-lg bg-[#00416a] flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-white text-[10px] font-extrabold">{index + 1}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800 leading-snug mb-2">{q}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function MPIncomeTaxServicesPage() {
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    "Hello Taxvio, I need income tax services in Madhya Pradesh."
  )}`;

  return (
    <>
      <Script
        id="mp-it-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="mp-it-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="mp-it-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="mp-it-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════════ HERO ════════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 65%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 65%)" }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-7" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                {[
                  { href: "/",                                    label: "Home"           },
                  { href: "/state/madhya-pradesh",                label: "Madhya Pradesh" },
                  { href: null,                                   label: "Income Tax"     },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5">
                    {href ? (
                      <Link href={href} className="hover:text-white/80 transition">
                        {label}
                      </Link>
                    ) : (
                      <span className="text-white/80 font-semibold">{label}</span>
                    )}
                    {i < arr.length - 1 && (
                      <ChevronRight size={12} className="text-white/25" />
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_300px] gap-10 items-start">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <MapPin size={12} className="text-indigo-300 shrink-0" />
                  Madhya Pradesh · 55 Districts · 300+ Cities · 13 Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Services in
                  <span className="block mt-2 bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    Madhya Pradesh
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  CA-assisted{" "}
                  <strong className="text-white">ITR filing</strong> for salaried individuals,
                  proprietors, firms, LLPs &amp; companies,{" "}
                  <strong className="text-white">quarterly TDS/TCS returns</strong>, tax audit,
                  scrutiny notice reply, <strong className="text-white">12A/80G registration</strong>,
                  PAN/TAN application and Form 15G/15H — across all{" "}
                  <strong className="text-white">55 districts</strong> and{" "}
                  <strong className="text-white">{MP_CITIES.length}+ cities</strong> of Madhya
                  Pradesh. 100% online, starting{" "}
                  <strong className="text-indigo-300">₹499</strong>.
                </p>

                {/* Trust chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck,    text: "CA-Certified Team"    },
                    { icon: Shield,        text: "100% Secure"          },
                    { icon: Zap,           text: "24–48 Hr ITR Filing"  },
                    { icon: Star,          text: "4.9★ Rating"          },
                    { icon: MessageCircle, text: "WhatsApp Support"     },
                  ].map(({ icon: Icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 backdrop-blur-sm"
                      style={{
                        background: "rgba(255,255,255,0.09)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      <Icon size={11} className="text-indigo-300 shrink-0" /> {text}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-4 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for ITR Help
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} className="shrink-0" />
                  </Link>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-7 py-4 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>

              {/* Right — quick nav panel */}
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(255,255,255,0.14)",
                }}
              >
                <div
                  className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <div>
                    <p className="font-bold text-white text-sm">Income Tax — MP</p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      {IT_SERVICES.length} services · all 55 districts
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5 max-h-[380px] overflow-y-auto">
                  {IT_SERVICES.map((svc) => (
                    <a
                      href={`#${svc.slug}`}
                      key={svc.slug}
                      className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/10"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="flex items-center gap-2 text-xs font-semibold text-white/75">
                        <span>{svc.icon}</span>
                        <span className="truncate">{svc.title}</span>
                      </span>
                      <span className="text-[10px] font-bold text-indigo-300 shrink-0 ml-2">
                        {svc.price}
                      </span>
                    </a>
                  ))}
                </div>

                <div
                  className="mx-4 mb-4 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      Starting Price
                    </p>
                    <p className="text-indigo-300 text-2xl font-extrabold leading-tight">₹499</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      ITR Filed in
                    </p>
                    <p className="text-white text-sm font-bold">24–48 Hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats ribbon */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck,  label: "ICAI-Certified CAs"           },
                { icon: TrendingUp,  label: "2.5 Cr+ MP Taxpayers"         },
                { icon: Users,       label: "4,800+ Businesses Served"     },
                { icon: Globe,       label: "55 MP Districts Covered"      },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Icon size={11} className="text-indigo-300 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f8fbfd"
            />
          </svg>
        </section>

        {/* ════════════ STATS RIBBON ════════════ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "24–48 Hrs",           label: "ITR Filing Time",      icon: Zap         },
              { val: "4.9★",                label: "Average Rating",       icon: Star        },
              { val: "₹499",                label: "Starting Price",       icon: IndianRupee },
              { val: `${MP_CITIES.length}+`, label: "MP Cities Served",    icon: MapPin      },
            ].map(({ val, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[#f2f8fc] border border-[#deeef7] text-center hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00416a]/10 flex items-center justify-center">
                  <Icon size={15} className="text-[#00416a]" />
                </div>
                <p className="text-xl font-extrabold text-[#00416a]">{val}</p>
                <p className="text-[11px] text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ ALL 13 SERVICE CARDS ════════════ */}
        <section className="py-20 bg-[#f8fbfd]" aria-label="Income Tax Services in MP">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                13 Income Tax Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Complete Income Tax Compliance for Every MP Taxpayer
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                From first PAN card to annual ITR, quarterly TDS returns, tax audit, scrutiny
                defence, and 12A/80G registration — all CA-managed, 100% online.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {IT_SERVICES.map((svc) => (
                <ITServiceCard key={svc.slug} svc={svc} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ MAJOR CITIES ════════════ */}
        <section
          className="py-16 bg-white border-y border-gray-100"
          aria-label="Major cities for income tax in MP"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-indigo-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">
                  Major Cities
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  Income Tax Services in Key Madhya Pradesh Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {TIER1_CITIES.map((c) => (
                <MajorCityCard
                  key={c.name}
                  name={c.name}
                  district={c.district}
                  region={c.region}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ SEO CONTENT ════════════ */}
        <section
          className="py-20 bg-white border-b border-gray-100"
          aria-label="About income tax services in Madhya Pradesh"
        >
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#00416a] to-indigo-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">
                    {heading}
                  </h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    {body.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ WHY TAXVIO ════════════ */}
        <section
          className="py-20 bg-[#f8fbfd] border-b border-gray-100"
          aria-label="Why Taxvio for income tax in MP"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why Madhya Pradesh Taxpayers Trust Taxvio for Income Tax
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "CA-Certified Income Tax Professionals",
                  desc: "Every ITR, TDS return, and tax audit for MP taxpayers is handled by practising CAs — not software bots. We understand MP's income tax ward and circle structure across Bhopal, Indore, Jabalpur, Gwalior, and all district headquarters.",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Share Form 16, salary slips, and documents via WhatsApp or email from anywhere in MP. CA review, deduction optimisation, e-filing, and ITR-V acknowledgement — all delivered remotely to all ${MP_CITIES.length}+ MP cities.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Calculator,
                  title: "AIS / TIS Reconciliation Before Filing",
                  desc: "We cross-verify your Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) against your ITR data before filing — preventing income mismatch notices which are the most common post-filing issue for MP taxpayers.",
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Scrutiny Management",
                  desc: "We monitor your PAN for Section 143(2) scrutiny notices, demand notices under Section 156, and TDS defaults on TRACES — alerting you immediately and preparing complete replies within the statutory response window.",
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹499",
                  desc: "No hidden consultation fees across any of the 13 income tax services. Clear, upfront pricing for ITR filing, TDS returns, tax audit, scrutiny reply, 12A/80G, and PAN/TAN — quoted before we begin.",
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: Landmark,
                  title: "MP Taxpayer Profile Expertise",
                  desc: "We understand the income tax nuances of MP's diverse taxpayer base — government employees in Bhopal, trading communities in Ujjain, soybean processors in Mandsaur, IT professionals in Indore, and agricultural income declarations across all 55 districts.",
                  color: "bg-sky-100 text-sky-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-5 bg-white border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section
          className="py-20 bg-white border-b border-gray-100"
          aria-label="Income tax FAQs Madhya Pradesh"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Frequently Asked Questions — Income Tax in Madhya Pradesh
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Quick answers to the most common income tax questions for individuals, businesses,
                and organisations across MP.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ ALL CITIES BY REGION ════════════ */}
        <section
          className="py-20 bg-[#f8fbfd]"
          aria-label="All MP cities for income tax services"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                All MP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Income Tax Services Across All Madhya Pradesh Cities &amp; Divisions
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Every city below links to its dedicated income tax service page — ITR filing, TDS
                returns, tax audit, scrutiny reply, and more.
              </p>
            </div>
            <div className="space-y-4">
              {Object.entries(MP_REGIONS).map(([region]) => {
                const regionCities = MP_CITIES.filter((c) => c.region === region);
                if (!regionCities.length) return null;
                return (
                  <div
                    key={region}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-indigo-300 shrink-0" />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionCities.map((c) => (
                        <CityLink key={c.name} name={c.name} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════ CTA BANNER ════════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-indigo-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-sky-400/10 blur-[60px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                  <Zap size={11} className="text-indigo-300" /> Ready to Get Started?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Expert Income Tax Help — Anywhere in Madhya Pradesh
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  ITR filing for salaried, proprietors, firms &amp; companies, quarterly TDS/TCS
                  returns, tax audit, scrutiny reply, 12A/80G, PAN/TAN, and Form 15G/15H —
                  all delivered 100% online across all 55 MP districts. CA-assisted, same-day
                  WhatsApp response. Starting ₹499.
                </p>

                {/* Service quick links */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {IT_SERVICES.slice(0, 6).map((svc) => (
                    <a
                      key={svc.slug}
                      href={`#${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
                    >
                      {svc.icon} {svc.title}
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>

                <p className="mt-6 text-white/40 text-xs">
                  ITR Salaried · ITR Proprietor · ITR Firm/LLP · ITR Company · TDS Returns ·
                  Tax Audit · Scrutiny Reply · 12A/80G · PAN/TAN · 55 Districts · 100% Online
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}

/* ─── Globe icon (inline) ─────────────────────────────────────────────────── */
function Globe({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}