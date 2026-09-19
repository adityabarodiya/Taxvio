// app/guide/itr-blogs/statutory-audit-deadline-penalty/page.tsx

import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";

const phoneNumber = "918937980366";

import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calculator,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  IndianRupee,
  Info,
  MessageCircle,
  Shield,
  Star,
  AlertCircle,
  Eye,
  Download,
  Search,
  Upload,
  Calendar,
  UserCheck,
  Landmark,
  FileWarning,
  Scale,
  Ban,
  Gavel,
  FileCheck,
  RefreshCw,
  Building2,
  Timer,
  DollarSign,
  Award,
  XCircle,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Statutory Audit Deadline & Penalty 2025-26: Companies Act & Income Tax | Taxvio",
  description:
    "Complete guide to statutory audit deadline for FY 2025-26 under Companies Act and Income Tax Act — who needs audit, due dates, penalty for late audit report, tax audit vs statutory audit, consequences of non-compliance.",
  keywords: [
    "statutory audit deadline",
    "statutory audit penalty",
    "audit due date FY 2025-26",
    "Companies Act audit deadline",
    "tax audit deadline",
    "section 44AB audit due date",
    "late audit report penalty",
    "audit completion deadline India",
    "statutory audit vs tax audit",
    "audit report filing deadline",
    "penalty for not conducting audit",
    "chartered accountant audit deadline",
    "business audit requirement",
    "ITR filing audit deadline",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/statutory-audit-deadline-penalty",
  },
  openGraph: {
    title: "Statutory Audit Deadline & Penalty 2025-26 — Complete Guide | Taxvio",
    description:
      "Everything you need to know about statutory audit deadlines under Companies Act & Income Tax Act — who needs audit, due dates, penalties and compliance requirements for FY 2025-26.",
    url: "https://www.taxvio.in/guide/itr-blogs/statutory-audit-deadline-penalty",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Statutory Audit Deadline & Penalty 2025-26",
    description:
      "Complete guide to audit deadlines, penalties and compliance requirements under Companies Act and Income Tax Act for FY 2025-26.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const AUDIT_TYPES = [
  {
    type: "Statutory Audit (Companies Act)",
    desc: "Mandatory audit of financial statements for all companies (Pvt Ltd, Public Ltd, OPC, Section 8) irrespective of turnover or capital. Conducted by a Chartered Accountant appointed under Section 139 of the Companies Act, 2013.",
    icon: "🏢",
    color: "bg-blue-50 border-blue-100 text-blue-700",
    applicableTo: "All Companies",
    deadline: "Before AGM or within 6 months from FY end",
  },
  {
    type: "Tax Audit (Section 44AB)",
    desc: "Audit of business accounts required under Section 44AB of Income Tax Act if turnover exceeds ₹1 crore (business) or ₹50 lakh (profession). Report in Form 3CA/3CB and 3CD must be obtained and submitted with ITR.",
    icon: "📊",
    color: "bg-violet-50 border-violet-100 text-violet-700",
    applicableTo: "Businesses/Professionals above threshold",
    deadline: "30th September (FY end 31st March)",
  },
  {
    type: "GST Audit (Section 35(5) CGST Act)",
    desc: "Annual audit of GST records required for taxpayers with turnover exceeding ₹5 crore. Conducted by CA or CMA, reconciliation of GST returns with financial statements in Form GSTR-9C.",
    icon: "📋",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    applicableTo: "GST taxpayers above ₹5 crore turnover",
    deadline: "31st December (following FY)",
  },
  {
    type: "Internal Audit",
    desc: "Voluntary or mandatory (for certain companies under Rule 13 of Companies Act) periodic examination of internal controls, processes and compliance. Helps detect fraud, ensure efficiency and prepare for statutory audit.",
    icon: "🔍",
    color: "bg-amber-50 border-amber-100 text-amber-700",
    applicableTo: "Large companies / voluntary for others",
    deadline: "As per company policy / quarterly",
  },
];

const DEADLINES_COMPANIES_ACT = [
  {
    entity: "Private Limited Company",
    auditCompletion: "Before AGM",
    agmDeadline: "Within 6 months from FY end (30th Sept)",
    filingDeadline: "AOC-4 within 30 days of AGM",
    example: "For FY 2025-26 (ended 31st Mar 2026): AGM by 30th Sept 2026",
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    entity: "Public Limited Company",
    auditCompletion: "Before AGM",
    agmDeadline: "Within 6 months from FY end (30th Sept)",
    filingDeadline: "AOC-4 within 30 days of AGM",
    example: "For FY 2025-26: AGM by 30th Sept 2026, AOC-4 by 30th Oct 2026",
    color: "bg-violet-50 border-violet-200 text-violet-800",
  },
  {
    entity: "One Person Company (OPC)",
    auditCompletion: "Before filing AOC-4",
    agmDeadline: "Not mandatory (can skip AGM)",
    filingDeadline: "AOC-4 within 180 days from FY end (30th Sept)",
    example: "For FY 2025-26: AOC-4 filing by 30th Sept 2026",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  {
    entity: "Small Company",
    auditCompletion: "Before AGM",
    agmDeadline: "Within 6 months from FY end",
    filingDeadline: "AOC-4 within 30 days of AGM (can use simplified format)",
    example: "Small cos: paid-up capital ≤₹2Cr & turnover ≤₹20Cr",
    color: "bg-sky-50 border-sky-200 text-sky-800",
  },
];

const DEADLINES_INCOME_TAX = [
  {
    scenario: "Business with turnover > ₹1 Crore",
    auditType: "Tax Audit u/s 44AB",
    auditDeadline: "30th September",
    itrDeadline: "31st October",
    form: "Form 3CA-3CD / 3CB-3CD",
    color: "bg-rose-50 border-rose-200 text-rose-800",
  },
  {
    scenario: "Profession with gross receipts > ₹50 Lakh",
    auditType: "Tax Audit u/s 44AB",
    auditDeadline: "30th September",
    itrDeadline: "31st October",
    form: "Form 3CA-3CD / 3CB-3CD",
    color: "bg-orange-50 border-orange-200 text-orange-800",
  },
  {
    scenario: "Presumptive taxation u/s 44AD with lower profit",
    auditType: "Tax Audit u/s 44AB",
    auditDeadline: "30th September",
    itrDeadline: "31st October",
    form: "Required if profit < 8% (business) or 6% (digital receipts)",
    color: "bg-amber-50 border-amber-200 text-amber-800",
  },
  {
    scenario: "Transfer pricing / international transaction",
    auditType: "TP Audit u/s 92E",
    auditDeadline: "31st October",
    itrDeadline: "30th November",
    form: "Form 3CEB (Transfer Pricing report)",
    color: "bg-violet-50 border-violet-200 text-violet-800",
  },
];

const PENALTIES_COMPANIES_ACT = [
  {
    violation: "Non-appointment of auditor",
    section: "Section 139(1)",
    penalty: "Auditor must be appointed within 30 days of incorporation (first auditor) or at first AGM (subsequent). Penalty: ₹25,000 to company + ₹5,000 per officer in default.",
    icon: "❌",
    color: "bg-red-50 border-red-100 text-red-800",
  },
  {
    violation: "Non-conduct of statutory audit",
    section: "Section 143",
    penalty: "Failure to get books audited or obtain audit report. Company and every officer liable to fine up to ₹25,000. Director disqualification possible under Section 164(2).",
    icon: "⚠️",
    color: "bg-orange-50 border-orange-100 text-orange-800",
  },
  {
    violation: "Late filing of AOC-4 (audited financials)",
    section: "Section 137",
    penalty: "Additional filing fees: ₹100/day (up to ₹1 lakh for companies with capital ≤₹1Cr) or ₹100/day (up to ₹5 lakh for others). Plus normal filing fees.",
    icon: "💰",
    color: "bg-amber-50 border-amber-100 text-amber-800",
  },
  {
    violation: "Non-holding of AGM or late AGM",
    section: "Section 96 / 99",
    penalty: "Fine up to ₹1,00,000 on company + ₹5,000 per officer. If AGM not held for consecutive years, director disqualification u/s 164(2) for 5 years.",
    icon: "⏰",
    color: "bg-rose-50 border-rose-100 text-rose-800",
  },
  {
    violation: "Fraud or misrepresentation in audit report",
    section: "Section 447",
    penalty: "If auditor is party to fraud: imprisonment from 6 months to 10 years + fine (minimum equal to fraud amount). Auditor can be debarred by NFRA.",
    icon: "🚨",
    color: "bg-red-50 border-red-100 text-red-800",
  },
];

const PENALTIES_INCOME_TAX = [
  {
    violation: "Failure to get books audited u/s 44AB",
    section: "Section 271B",
    penalty: "Minimum penalty: 0.5% of total sales/turnover/gross receipts, subject to a maximum of ₹1,50,000. Penalty is mandatory and cannot be waived.",
    icon: "📊",
    color: "bg-rose-50 border-rose-100 text-rose-800",
  },
  {
    violation: "Late filing of tax audit report",
    section: "Section 234E (ITR delay fee)",
    penalty: "No separate penalty for late audit report, but late ITR filing attracts fee u/s 234E: ₹5,000 (if filed after due date but before 31st Dec) or ₹10,000 (if filed after 31st Dec).",
    icon: "⏳",
    color: "bg-orange-50 border-orange-100 text-orange-800",
  },
  {
    violation: "Non-furnishing of audit report with ITR",
    section: "Section 271B",
    penalty: "If tax audit report (Form 3CD) is not uploaded or attached with ITR, penalty u/s 271B applies: 0.5% of turnover (max ₹1,50,000).",
    icon: "📄",
    color: "bg-amber-50 border-amber-100 text-amber-800",
  },
  {
    violation: "Misrepresentation or false information in audit report",
    section: "Section 277",
    penalty: "Criminal prosecution: imprisonment from 6 months to 7 years + fine. Applies to both taxpayer and auditor if fraudulent audit report is furnished.",
    icon: "⚖️",
    color: "bg-red-50 border-red-100 text-red-800",
  },
];

const AUDIT_CHECKLIST = [
  {
    category: "Before audit begins",
    tasks: [
      "Appoint statutory auditor (CA firm) and obtain acceptance letter",
      "Ensure all accounting books and records are up-to-date",
      "Reconcile bank statements with cash book",
      "Prepare trial balance and draft financial statements",
      "Organize all invoices, bills, vouchers and supporting documents",
      "Complete stock/inventory verification and physical count",
    ],
    icon: "📋",
    color: "bg-blue-50 border-blue-100",
  },
  {
    category: "During audit process",
    tasks: [
      "Provide auditor with access to all books, records and documents",
      "Respond to auditor queries and provide clarifications promptly",
      "Facilitate physical verification of assets if required",
      "Provide board resolutions, contracts and legal agreements",
      "Confirm bank balances, debtors and creditors balances",
      "Assist in preparation of audit adjustments and notes",
    ],
    icon: "🔍",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    category: "After audit completion",
    tasks: [
      "Review draft audit report and discuss any qualifications",
      "Approve final audited financial statements at board meeting",
      "Conduct AGM within 6 months from FY end (if applicable)",
      "File AOC-4 (audited financials) with ROC within 30 days of AGM",
      "File ITR with tax audit report (if applicable) by 31st October",
      "Maintain audit file and working papers for statutory period (8 years)",
    ],
    icon: "✅",
    color: "bg-violet-50 border-violet-100",
  },
];

const FAQS = [
  {
    question: "What is the difference between statutory audit and tax audit?",
    answer:
      "Statutory audit is mandatory for all companies under the Companies Act, 2013 (Section 143) irrespective of turnover or profit. It examines the financial statements (balance sheet, P&L) and provides an independent opinion on whether they give a true and fair view. Tax audit, on the other hand, is required under Section 44AB of the Income Tax Act only if business turnover exceeds ₹1 crore (or ₹10 crore if 95%+ digital receipts) or professional receipts exceed ₹50 lakh. Tax audit examines the correctness of accounts, compliance with tax provisions and requires a detailed report in Form 3CD. Companies above the tax audit threshold need both audits.",
  },
  {
    question: "Who can conduct a statutory audit in India?",
    answer:
      "Only a Chartered Accountant (CA) holding a valid Certificate of Practice from the Institute of Chartered Accountants of India (ICAI) can conduct a statutory audit. For companies, the auditor must also be eligible under Section 141 of the Companies Act (not disqualified). A CA firm can also be appointed. The same CA who maintains the books or is an employee/officer of the company cannot be appointed as statutory auditor due to conflict of interest. For tax audit under Income Tax Act, only a CA can conduct the audit.",
  },
  {
    question: "What is the deadline to complete statutory audit for FY 2025-26?",
    answer:
      "For companies (Pvt Ltd, Public Ltd), the statutory audit must be completed before the Annual General Meeting (AGM), which must be held within 6 months from the end of the financial year. For FY 2025-26 (ended 31st March 2026), the AGM deadline is 30th September 2026. Therefore, the audit must be completed before the AGM date. For tax audit under Income Tax Act, the deadline is 30th September 2026. ITR filing deadline for audited cases is 31st October 2026. One Person Companies (OPC) can skip AGM but must file audited AOC-4 by 30th September 2026.",
  },
  {
    question: "What happens if I miss the audit deadline?",
    answer:
      "Missing the audit deadline has multiple consequences: (1) Under Companies Act: late AGM attracts penalty up to ₹1 lakh on company + ₹5,000 per officer; late filing of AOC-4 attracts additional fees (₹100/day, up to ₹1-5 lakh); director disqualification possible if AGM not held for 3 consecutive years. (2) Under Income Tax Act: failure to conduct tax audit attracts mandatory penalty u/s 271B of 0.5% of turnover (max ₹1.5 lakh); late ITR filing (post-October 31 for audited cases) attracts late fee u/s 234E (₹5,000-₹10,000) and also results in loss of carry forward of certain losses.",
  },
  {
    question: "Can the audit deadline be extended?",
    answer:
      "Under the Companies Act, there is no automatic extension for audit or AGM deadlines. However, if there is a genuine reason (e.g., national emergency, natural calamity, change in management), the company can apply to the Registrar of Companies (ROC) for extension of AGM under Section 96 using Form GNL-1, which may be granted at ROC's discretion. For Income Tax Act, the Central Board of Direct Taxes (CBDT) has occasionally extended the tax audit and ITR filing deadlines during extraordinary situations (e.g., COVID-19 pandemic). No extension is granted for individual cases.",
  },
  {
    question: "Is audit mandatory for small businesses and startups?",
    answer:
      "It depends on the legal structure and turnover. If your business is registered as a Private Limited Company, OPC or LLP, statutory audit under Companies Act is mandatory regardless of size. Even a startup with zero revenue must conduct audit and file audited financials. If you are a sole proprietorship or partnership (not LLP), audit is required only if: (a) turnover exceeds ₹1 crore (business) or ₹50 lakh (profession) under Section 44AB (tax audit), or (b) you opt for presumptive taxation u/s 44AD but declare profit less than 8%/6%. Many startups incorporate as Pvt Ltd for funding and credibility, which makes audit mandatory.",
  },
  {
    question: "What documents does the auditor need to complete the audit?",
    answer:
      "The auditor typically requires: (1) All accounting books — ledgers, journals, cash book, bank book; (2) Bank statements and bank reconciliation; (3) All invoices (sales and purchase), bills, vouchers and receipts; (4) Stock register and inventory records; (5) Fixed asset register with depreciation schedule; (6) GST returns (GSTR-1, GSTR-3B), TDS returns, income tax challans; (7) Board minutes and resolutions; (8) Agreements, contracts, loan documents, legal papers; (9) Salary register, PF/ESI records; (10) Previous year's audit report and tax returns. The auditor may also request confirmation letters from banks, debtors and creditors.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Statutory Audit Deadline & Penalty 2025-26: Complete Compliance Guide",
  description:
    "A comprehensive guide to statutory audit deadlines and penalties for FY 2025-26 — covering Companies Act requirements, Income Tax Act tax audit, due dates, penalties for non-compliance and difference between audit types.",
  url: "https://www.taxvio.in/guide/itr-blogs/statutory-audit-deadline-penalty",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/statutory-audit-deadline-penalty",
  },
  author: {
    "@type": "Organization",
    name: "Taxvio",
    url: "https://www.taxvio.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Taxvio",
    url: "https://www.taxvio.in",
  },
  dateModified: "2025-04-01",
  wordCount: 3200,
  inLanguage: "en-IN",
  articleSection: "Audit & Compliance",
  keywords: [
    "statutory audit deadline",
    "tax audit penalty",
    "Companies Act audit",
    "section 44AB",
    "audit compliance",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "ITR Guides",
      item: "https://www.taxvio.in/guide/itr-blogs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Statutory Audit Deadline & Penalty",
      item: "https://www.taxvio.in/guide/itr-blogs/statutory-audit-deadline-penalty",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

/* ─── Reusable Components ───────────────────────────────────────────────── */

function InfoBox({
  title,
  children,
  color = "blue",
}: {
  title: string;
  children: React.ReactNode;
  color?: "blue" | "green" | "amber" | "rose";
}) {
  const styles = {
    blue: "border-blue-100 bg-blue-50 text-blue-900",
    green: "border-emerald-100 bg-emerald-50 text-emerald-900",
    amber: "border-amber-100 bg-amber-50 text-amber-900",
    rose: "border-rose-100 bg-rose-50 text-rose-900",
  };
  return (
    <div className={`rounded-2xl border p-5 ${styles[color]}`}>
      <div className="mb-2 flex items-center gap-2">
        <Info size={15} className="shrink-0" />
        <h3 className="text-sm font-extrabold">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  heading,
  icon: Icon,
}: {
  eyebrow: string;
  heading: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00416a]/10">
        <Icon size={17} className="text-[#00416a]" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-xl font-extrabold text-[#00416a] md:text-2xl">
          {heading}
        </h2>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function StatutoryAuditDeadlinePenaltyPage() {
  return (
    <>
      <Script
        id="audit-deadline-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="audit-deadline-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="audit-deadline-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f8fbfd] font-sans text-gray-800">

        {/* ════════ HERO ════════ */}
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
            className="absolute top-0 right-0 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(249,115,22,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(239,68,68,0.09) 0%,transparent 65%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-14 md:pt-28">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li>
                  <Link
                    href="/guide/itr-blogs"
                    className="hover:text-white transition"
                  >
                    ITR Guides
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li className="text-white/80 font-semibold">
                  Statutory Audit Deadline & Penalty
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
                  FY 2025-26 · Important Deadlines
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Statutory Audit Deadline
                  <span className="block mt-2 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                    & Penalty Guide 2025-26
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Understand <strong className="text-white">statutory audit deadlines</strong> under
                  Companies Act and <strong className="text-white">tax audit requirements</strong> under
                  Income Tax Act — who needs audit, due dates, penalties for
                  late completion, and the difference between various audit types.
                  Stay compliant and avoid costly penalties.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get Audit Assistance <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#deadlines"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    View Deadlines <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick highlights card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Key deadlines at a glance
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Building2,
                      title: "Companies Act Audit",
                      text: "Before AGM — within 6 months from FY end (30th Sept for Mar FY)",
                    },
                    {
                      icon: Calculator,
                      title: "Tax Audit (Section 44AB)",
                      text: "30th September 2026 for FY 2025-26 — mandatory if turnover >₹1Cr",
                    },
                    {
                      icon: FileText,
                      title: "ITR Filing (Audited Cases)",
                      text: "31st October 2026 — extended deadline for tax audit cases",
                    },
                    {
                      icon: AlertCircle,
                      title: "Late Audit Penalty",
                      text: "₹25,000 to ₹1.5 lakh under Companies Act & Income Tax Act",
                    },
                    {
                      icon: Ban,
                      title: "Director Disqualification",
                      text: "If audit/AGM not done for 3 consecutive years — 5 year ban",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-orange-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-orange-300" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-white">
                          {title}
                        </p>
                        <p className="text-xs text-white/55 mt-0.5 leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, text: "Expert CA Audit Services" },
                { icon: Shield, text: "100% Compliance Guaranteed" },
                { icon: Clock, text: "On-Time Audit Completion" },
                { icon: Star, text: "4.9★ Client Rating" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-orange-400" /> {text}
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

        {/* ════════ ARTICLE + SIDEBAR ════════ */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">

            {/* ── Main Article ── */}
            <article className="min-w-0 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">

              {/* Introduction */}
              <div className="pb-10 border-b border-gray-100">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0077b6] mb-4">
                  Audit Compliance Guide
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  What Is Statutory Audit and Why Is It Mandatory?
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>Statutory audit</strong> is an independent examination
                  of the financial statements, books of accounts, and records of
                  a business entity by a qualified Chartered Accountant (CA) to
                  provide an opinion on whether the financial statements present
                  a true and fair view of the financial position and performance
                  of the entity. The term "statutory" means it is mandated by
                  law — primarily under the <strong>Companies Act, 2013</strong>{" "}
                  for all companies (regardless of size or turnover) and under
                  the <strong>Income Tax Act, 1961</strong> (Section 44AB) for
                  businesses and professionals exceeding specified turnover
                  thresholds.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The objective of statutory audit is to provide assurance to
                  shareholders, investors, lenders, regulators and other
                  stakeholders that the financial statements are free from
                  material misstatement, comply with applicable accounting
                  standards (Ind AS / Accounting Standards), and adhere to the
                  provisions of the Companies Act, Income Tax Act and other
                  relevant laws. The auditor issues an <strong>audit report</strong>{" "}
                  containing their opinion — unqualified (clean report),
                  qualified (with reservations), adverse, or disclaimer — along
                  with observations and qualifications if any.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Failure to conduct statutory audit or comply with audit
                  deadlines attracts <strong>severe penalties</strong> — monetary
                  fines ranging from ₹25,000 to ₹5,00,000, director
                  disqualification for up to 5 years, and in cases of fraud,
                  criminal prosecution with imprisonment. Understanding the audit
                  types, deadlines and compliance requirements is critical for
                  every business owner, director and finance professional.
                </p>

                <InfoBox title="Statutory audit is non-negotiable for companies" color="rose">
                  <p>
                    Unlike sole proprietorships or partnerships (which need audit
                    only if turnover exceeds threshold), <strong>all companies</strong> —
                    Private Limited, Public Limited, One Person Company (OPC),
                    Section 8 Company — must conduct statutory audit every year
                    irrespective of turnover, profit or size. There is no exemption.
                  </p>
                </InfoBox>
              </div>

              {/* Audit Types */}
              <section id="audit-types" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Understanding different audits"
                  heading="Types of Audits — Statutory, Tax, GST and Internal"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Different laws mandate different types of audits. Here are the
                  four main audit types applicable to Indian businesses:
                </p>

                <div className="grid gap-4">
                  {AUDIT_TYPES.map(({ type, desc, icon, color, applicableTo, deadline }) => (
                    <div
                      key={type}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl ${color
                            .split(" ")
                            .slice(0, 2)
                            .join(" ")} border ${
                            color.split(" ")[1]
                          } flex items-center justify-center text-xl shrink-0`}
                        >
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-extrabold text-gray-800 mb-2">
                            {type}
                          </h3>
                          <p className="text-xs leading-relaxed text-gray-600 mb-3">
                            {desc}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2 text-[11px]">
                            <p className="text-gray-500">
                              <strong>Applicable to:</strong> {applicableTo}
                            </p>
                            <p className="text-gray-500">
                              <strong>Deadline:</strong> {deadline}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="Can the same CA do statutory and tax audit?" color="blue">
                    <p>
                      Yes. The same Chartered Accountant or CA firm can conduct
                      both statutory audit (u/s 143 Companies Act) and tax audit
                      (u/s 44AB Income Tax Act) for the same entity, provided
                      they are not disqualified under Section 141 of Companies
                      Act (e.g., not an employee, officer or debtor of the company).
                    </p>
                  </InfoBox>
                  <InfoBox title="GST audit is separate from statutory/tax audit" color="green">
                    <p>
                      GST audit (u/s 35(5) CGST Act) is a separate compliance
                      requirement for taxpayers with turnover above ₹5 crore.
                      It reconciles GST returns with financial statements and is
                      filed in Form GSTR-9C. A CA or Cost Accountant (CMA) can
                      conduct GST audit. Deadline is 31st December.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Deadlines - Companies Act */}
              <section id="deadlines" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Companies Act compliance"
                  heading="Statutory Audit Deadlines Under Companies Act"
                  icon={Calendar}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The statutory audit deadline for companies is linked to the
                  Annual General Meeting (AGM) and financial statement filing
                  requirements. Here are the key deadlines:
                </p>

                <div className="space-y-4">
                  {DEADLINES_COMPANIES_ACT.map(({ entity, auditCompletion, agmDeadline, filingDeadline, example, color }) => (
                    <div
                      key={entity}
                      className={`flex gap-4 items-start rounded-2xl border p-5 ${color}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
                        <Building2 size={18} className={color.split(" ")[2]} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                          {entity}
                        </h3>
                        <div className="space-y-1 text-xs text-gray-600">
                          <p><strong>Audit completion:</strong> {auditCompletion}</p>
                          <p><strong>AGM deadline:</strong> {agmDeadline}</p>
                          <p><strong>Filing deadline:</strong> {filingDeadline}</p>
                          <p className="text-[11px] text-gray-500 mt-2 italic">
                            {example}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="AGM and audit are inseparable for most companies" color="amber">
                  <p>
                    For Private and Public Limited Companies, the audited
                    financial statements must be approved at the AGM before they
                    can be filed with ROC. Therefore, audit must be completed
                    <em>before</em> the AGM, which must be held within 6 months
                    from FY end. Only OPCs and certain small companies can skip AGM.
                  </p>
                </InfoBox>
              </section>

              {/* Deadlines - Income Tax */}
              <section id="tax-audit-deadlines" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Income Tax Act compliance"
                  heading="Tax Audit Deadlines Under Section 44AB"
                  icon={Calculator}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Tax audit under Section 44AB is mandatory for certain
                  businesses and professionals. The deadlines are uniform
                  regardless of entity type:
                </p>

                <div className="space-y-4">
                  {DEADLINES_INCOME_TAX.map(({ scenario, auditType, auditDeadline, itrDeadline, form, color }) => (
                    <div
                      key={scenario}
                      className={`flex gap-4 items-start rounded-2xl border p-5 ${color}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
                        <Calculator size={18} className={color.split(" ")[2]} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                          {scenario}
                        </h3>
                        <div className="space-y-1 text-xs text-gray-600">
                          <p><strong>Audit type:</strong> {auditType}</p>
                          <p><strong>Audit deadline:</strong> {auditDeadline}</p>
                          <p><strong>ITR filing deadline:</strong> {itrDeadline}</p>
                          <p className="text-[11px] text-gray-500 mt-2">
                            <strong>Form required:</strong> {form}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="New turnover limit for digital receipts" color="blue">
                    <p>
                      From AY 2025-26 onwards, if 95% or more of your business
                      receipts are through digital modes (banking channels, UPI,
                      cards) and 95% or more of payments are digital, the tax
                      audit threshold is ₹10 crore instead of ₹1 crore. This
                      relaxation aims to encourage digital transactions.
                    </p>
                  </InfoBox>
                  <InfoBox title="ITR filing cannot be done without tax audit report" color="rose">
                    <p>
                      If you are liable for tax audit under Section 44AB, you
                      cannot file your ITR without uploading the audit report
                      (Form 3CA/3CB-3CD). The ITR utility will not allow
                      submission. Late or non-filing of audit report attracts
                      penalty u/s 271B.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Penalties - Companies Act */}
              <section id="penalties-companies" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Non-compliance consequences"
                  heading="Penalties Under Companies Act for Audit Non-Compliance"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-6">
                  The Companies Act, 2013 imposes strict penalties for audit and
                  AGM-related violations:
                </p>

                <div className="space-y-4">
                  {PENALTIES_COMPANIES_ACT.map(({ violation, section, penalty, icon, color }) => (
                    <div
                      key={violation}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <h3 className="text-sm font-extrabold text-gray-800">
                              {violation}
                            </h3>
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color
                                .split(" ")
                                .slice(0, 2)
                                .join(" ")} border ${color.split(" ")[1]} ${
                                color.split(" ")[2]
                              }`}
                            >
                              {section}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-gray-600">
                            {penalty}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Penalties - Income Tax */}
              <section id="penalties-income-tax" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Tax audit penalties"
                  heading="Penalties Under Income Tax Act for Tax Audit Violations"
                  icon={IndianRupee}
                />

                <p className="text-sm leading-8 text-gray-600 mb-6">
                  The Income Tax Act has specific penalty provisions for tax
                  audit non-compliance:
                </p>

                <div className="space-y-4">
                  {PENALTIES_INCOME_TAX.map(({ violation, section, penalty, icon, color }) => (
                    <div
                      key={violation}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <h3 className="text-sm font-extrabold text-gray-800">
                              {violation}
                            </h3>
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color
                                .split(" ")
                                .slice(0, 2)
                                .join(" ")} border ${color.split(" ")[1]} ${
                                color.split(" ")[2]
                              }`}
                            >
                              {section}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-gray-600">
                            {penalty}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Section 271B penalty is mandatory — no discretion" color="rose">
                  <p>
                    Unlike many other penalties which are at the discretion of
                    the Assessing Officer, penalty under Section 271B (failure to
                    get books audited or furnish tax audit report) is{" "}
                    <strong>mandatory</strong>. The AO has no option but to levy
                    the penalty once the default is established. Only way to avoid
                    is to ensure audit is done and report is filed before ITR
                    deadline.
                  </p>
                </InfoBox>
              </section>

              {/* Checklist */}
              <section id="checklist" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Compliance roadmap"
                  heading="Audit Compliance Checklist — Before, During & After"
                  icon={CheckCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Follow this comprehensive checklist to ensure smooth audit
                  completion and timely compliance:
                </p>

                <div className="space-y-4">
                  {AUDIT_CHECKLIST.map(({ category, tasks, icon, color }) => (
                    <div
                      key={category}
                      className={`rounded-2xl border p-5 ${color}`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{icon}</span>
                        <h3 className="text-sm font-bold text-gray-800">
                          {category}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {tasks.map((task) => (
                          <li
                            key={task}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <CheckCircle
                              size={12}
                              className="text-emerald-500 shrink-0 mt-0.5"
                            />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Reference Table */}
              <section id="quick-reference" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Quick reference"
                  heading="Audit Deadlines at a Glance — FY 2025-26"
                  icon={Calendar}
                />

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Audit Type
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Applicable Law
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Due Date
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Penalty if Missed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">
                          Statutory Audit (Pvt/Public Ltd)
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-gray-600">
                          Companies Act, 2013
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-blue-700 font-semibold">
                          Before AGM (30 Sept 2026)
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-red-600">
                          ₹25,000 + director penalty
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">
                          Tax Audit (Section 44AB)
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-gray-600">
                          Income Tax Act, 1961
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-blue-700 font-semibold">
                          30 September 2026
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-red-600">
                          0.5% of turnover (max ₹1.5L)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">
                          ITR Filing (Audited Cases)
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-gray-600">
                          Income Tax Act, 1961
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-blue-700 font-semibold">
                          31 October 2026
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-red-600">
                          ₹5,000-₹10,000 u/s 234E
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">
                          GST Audit (Turnover &gt; ₹5Cr)
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-gray-600">
                          CGST Act, 2017
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-blue-700 font-semibold">
                          31 December 2026
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-red-600">
                          Late fees + penalty u/s 125
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">
                          AOC-4 Filing (Audited Financials)
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-gray-600">
                          Companies Act, 2013
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-blue-700 font-semibold">
                          30 days after AGM
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-red-600">
                          ₹100/day (max ₹1-5 lakh)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA inside article */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-300">
                      Need audit assistance?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your statutory & tax audit
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our expert CA team conducts comprehensive statutory audits,
                      tax audits and GST audits — ensuring full compliance,
                      timely completion and error-free audit reports for your
                      business.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    Talk to Taxvio <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Frequently asked questions"
                  heading="Statutory Audit Deadline & Penalty — FAQs"
                  icon={BookOpen}
                />

                <div className="space-y-3">
                  {FAQS.map(({ question, answer }) => (
                    <details
                      key={question}
                      className="group rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-gray-800 marker:hidden">
                        <span className="flex items-start gap-3">
                          <span className="text-[#00416a] mt-0.5">Q.</span>
                          {question}
                        </span>
                      </summary>
                      <p className="mt-4 border-t border-gray-200 pt-4 text-sm leading-7 text-gray-600">
                        {answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="mt-12 pt-7 border-t border-gray-100">
                <p className="text-xs leading-6 text-gray-500">
                  <strong className="text-gray-700">Disclaimer:</strong> This
                  article is for general educational purposes only. Audit
                  requirements, deadlines and penalties are subject to change
                  through amendments, notifications and circulars issued by MCA,
                  CBDT and other regulatory authorities. Specific audit
                  applicability depends on the facts and circumstances of each
                  case. Always consult a qualified Chartered Accountant (CA) or
                  Company Secretary (CS) for your entity's audit compliance
                  obligations. Taxvio and its authors are not liable for any
                  consequences arising from reliance on this article.
                </p>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">

                {/* TOC */}
                <div className="rounded-2xl border border-[#dcebf3] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]">
                    On this page
                  </p>
                  <nav className="mt-4 space-y-1.5">
                    {[
                      ["#audit-types", "Types of audits"],
                      ["#deadlines", "Companies Act deadlines"],
                      ["#tax-audit-deadlines", "Tax audit deadlines"],
                      ["#penalties-companies", "Companies Act penalties"],
                      ["#penalties-income-tax", "Income Tax penalties"],
                      ["#checklist", "Compliance checklist"],
                      ["#quick-reference", "Quick reference table"],
                      ["#faq", "FAQs"],
                    ].map(([href, label]) => (
                      <a
                        key={href}
                        href={href}
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-blue-50 hover:text-[#00416a]"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Promo card */}
                <div className="rounded-2xl bg-[#00416a] p-5 text-white shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <MessageCircle size={18} className="text-orange-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    Audit assistance?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Expert CA team for statutory audit, tax audit, GST audit —
                    on-time completion guaranteed.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    Contact Taxvio <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Quick service links */}
                {[
                  {
                    href: "/serviceslist/income-tax/itr-business",
                    label: "ITR Filing (Business)",
                    sub: "Tax audit & ITR-3/4 filing",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/annual-compliance",
                    label: "Annual Compliance",
                    sub: "Complete guide for companies",
                    color: "bg-blue-50 border-blue-100",
                    text: "text-blue-700",
                  },
                ].map(({ href, label, sub, color, text }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`group flex items-center justify-between rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${color}`}
                  >
                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-wide ${text}`}
                      >
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-extrabold text-gray-800">
                        {sub}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`${text} transition group-hover:translate-x-1`}
                    />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ════════ RELATED GUIDES ════════ */}
        <section className="bg-white border-t border-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                Explore more
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#00416a]">
                Related Audit & Compliance Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/tax-audit-section-44ab",
                  title: "Section 44AB Tax Audit — Complete Guide",
                  text: "Detailed guide on who needs tax audit, turnover limits, audit process and Form 3CD filing.",
                },
                {
                  href: "/guide/itr-blogs/itr-filing-deadline",
                  title: "ITR Filing Deadline FY 2025-26",
                  text: "Complete schedule of ITR filing due dates, late filing penalties and extension provisions.",
                },
                {
                  href: "/contact",
                  title: "Talk to an Audit Expert",
                  text: "Get CA-assisted statutory audit, tax audit, GST audit and complete compliance support.",
                },
              ].map(({ href, title, text }) => (
                <Link
                  key={title}
                  href={href}
                  className="group rounded-2xl border border-[#dcebf3] bg-[#f8fbfd] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <FileText size={18} className="text-[#00416a]" />
                    <ArrowRight
                      size={15}
                      className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#00416a]"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-extrabold text-gray-800 group-hover:text-[#00416a]">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FIXED WHATSAPP BUTTON ════════ */}
        <a
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20help%20with%20statutory%20audit%20and%20compliance`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
            <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 group-hover:pr-5">
              <div className="w-14 h-14 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-xs group-hover:mr-1">
                Chat with us
              </span>
            </div>
          </div>
        </a>

        <Footar />
      </main>
    </>
  );
}