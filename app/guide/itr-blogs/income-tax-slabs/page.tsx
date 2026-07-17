// app/guide/itr-blogs/income-tax-due-dates/page.tsx

import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calendar,
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
  Calculator,
  TrendingDown,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Income Tax Due Dates FY 2025-26 & AY 2026-27: ITR Filing Deadline Calendar | Taxvio",
  description:
    "Check the latest income tax due dates for FY 2025-26 and AY 2026-27. ITR filing deadline 31st July 2026, advance tax payment dates, TDS return due dates, tax audit report deadlines, penalties for late filing and complete tax calendar.",
  keywords: [
    "income tax due dates",
    "ITR filing deadline 2026",
    "income tax due dates FY 2025-26",
    "advance tax payment dates",
    "TDS return due dates",
    "tax audit report deadline",
    "income tax calendar",
    "belated return deadline",
    "Section 234F penalty",
    "ITR filing last date",
    "quarterly TDS return dates",
    "Taxvio tax guide",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/income-tax-due-dates",
  },
  openGraph: {
    title: "Income Tax Due Dates FY 2025-26: Complete ITR Filing Calendar | Taxvio",
    description:
      "ITR filing deadline 31st July 2026, advance tax dates, TDS return deadlines, audit report dates for FY 2025-26 (AY 2026-27). Avoid penalties.",
    url: "https://www.taxvio.in/guide/itr-blogs/income-tax-due-dates",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Due Dates FY 2025-26 | Complete Tax Calendar",
    description:
      "Complete calendar: ITR deadline 31 July 2026, advance tax dates, TDS returns, audit reports. Avoid penalties.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const ITR_DUE_DATES = [
  {
    category: "Individuals & HUFs (No Audit Required)",
    dueDate: "31st July 2026",
    applicableTo: "Salaried employees, pensioners, small businesses, freelancers without audit requirement",
    forms: "ITR-1, ITR-2, ITR-3, ITR-4",
    section: "Section 139(1)",
  },
  {
    category: "Businesses Requiring Tax Audit",
    dueDate: "31st October 2026",
    applicableTo: "Business turnover >₹1 crore, Professional receipts >₹50 lakh (Section 44AB)",
    forms: "ITR-3, ITR-5, ITR-6, ITR-7",
    section: "Section 139(1)",
  },
  {
    category: "Transfer Pricing Cases",
    dueDate: "30th November 2026",
    applicableTo: "Companies/entities with international or specified domestic transactions requiring Form 3CEB",
    forms: "ITR-6 (Companies), ITR-5 (Others)",
    section: "Section 92E",
  },
  {
    category: "Belated Return",
    dueDate: "31st December 2026",
    applicableTo: "Taxpayers who missed the original deadline (₹5,000 late fee applies)",
    forms: "Same as original ITR form",
    section: "Section 139(4)",
  },
  {
    category: "Revised Return",
    dueDate: "31st December 2026",
    applicableTo: "To correct errors in already filed ITR (before assessment)",
    forms: "Same as original ITR form",
    section: "Section 139(5)",
  },
];

const ADVANCE_TAX_SCHEDULE = [
  {
    installment: "1st Installment",
    dueDate: "15th June",
    percentage: "15%",
    cumulativePercentage: "15%",
  },
  {
    installment: "2nd Installment",
    dueDate: "15th September",
    percentage: "45%",
    cumulativePercentage: "60%",
  },
  {
    installment: "3rd Installment",
    dueDate: "15th December",
    percentage: "75%",
    cumulativePercentage: "75%",
  },
  {
    installment: "4th Installment",
    dueDate: "15th March",
    percentage: "100%",
    cumulativePercentage: "100%",
  },
];

const TDS_RETURN_DATES = [
  {
    quarter: "Q1 (April - June)",
    dueDate: "31st July",
    forms: "24Q, 26Q, 27Q, 27EQ",
    challanDue: "7th of next month",
  },
  {
    quarter: "Q2 (July - September)",
    dueDate: "31st October",
    forms: "24Q, 26Q, 27Q, 27EQ",
    challanDue: "7th of next month",
  },
  {
    quarter: "Q3 (October - December)",
    dueDate: "31st January",
    forms: "24Q, 26Q, 27Q, 27EQ",
    challanDue: "7th of next month",
  },
  {
    quarter: "Q4 (January - March)",
    dueDate: "31st May",
    forms: "24Q, 26Q, 27Q, 27EQ",
    challanDue: "30th April for March",
  },
];

const AUDIT_REPORT_DATES = [
  {
    report: "Tax Audit Report",
    form: "Form 3CA/3CB with 3CD",
    dueDate: "30th September 2026",
    applicability: "Businesses with turnover >₹1 crore, Professionals with receipts >₹50 lakh",
  },
  {
    report: "Transfer Pricing Report",
    form: "Form 3CEB",
    dueDate: "31st October 2026",
    applicability: "Entities with international/domestic transactions >₹1 crore",
  },
  {
    report: "Statement of Financial Transactions",
    form: "Form 61A (SFT)",
    dueDate: "31st May 2026",
    applicability: "Banks, financial institutions reporting high-value transactions",
  },
];

const PENALTIES = [
  {
    penalty: "Late Filing Fee",
    section: "Section 234F",
    amount: "₹5,000 (₹1,000 if income ≤₹5 lakh)",
    applicability: "Filed after due date but before 31st December",
  },
  {
    penalty: "Interest on Tax Due",
    section: "Section 234A",
    amount: "1% per month",
    applicability: "On unpaid tax from due date until payment",
  },
  {
    penalty: "Interest on Advance Tax Shortfall",
    section: "Section 234B",
    amount: "1% per month",
    applicability: "If advance tax paid <90% of actual liability",
  },
  {
    penalty: "Interest on Advance Tax Deferment",
    section: "Section 234C",
    amount: "1% per month on each installment shortfall",
    applicability: "On shortfall in each advance tax installment",
  },
  {
    penalty: "Loss of Carry Forward Benefit",
    section: "Section 80",
    amount: "N/A - Loss cannot be carried forward",
    applicability: "Business and capital losses if ITR filed after due date",
  },
];

const FAQS = [
  {
    question: "What is the ITR filing due date for FY 2025-26?",
    answer:
      "The ITR filing due date for individuals and HUFs (non-audit cases) is 31st July 2026. For businesses requiring tax audit under Section 44AB, the deadline is 31st October 2026. Transfer pricing cases must file by 30th November 2026.",
  },
  {
    question: "What happens if I miss the ITR filing deadline?",
    answer:
      "If you miss the 31st July 2026 deadline, you can file a belated return under Section 139(4) by 31st December 2026. However, you will have to pay a late fee of ₹5,000 (₹1,000 if total income is ≤₹5 lakh) under Section 234F and interest under Section 234A. You will also lose the ability to carry forward business and capital losses.",
  },
  {
    question: "When are advance tax installments due for FY 2025-26?",
    answer:
      "Advance tax for FY 2025-26 is payable in four installments: 15th June 2025 (15%), 15th September 2025 (cumulative 60%), 15th December 2025 (cumulative 75%), and 15th March 2026 (100%). Presumptive taxation taxpayers can pay entire advance tax by 15th March 2026 in one installment.",
  },
  {
    question: "What is the TDS return filing due date?",
    answer:
      "TDS returns are filed quarterly. Q1 (Apr-Jun) by 31st July, Q2 (Jul-Sep) by 31st October, Q3 (Oct-Dec) by 31st January, and Q4 (Jan-Mar) by 31st May. Forms 24Q (salary), 26Q (non-salary), 27Q (non-residents), and 27EQ (TCS) must be filed.",
  },
  {
    question: "Can I revise my ITR after filing?",
    answer:
      "Yes, you can file a revised return under Section 139(5) if you discover any errors or omissions in your original ITR. The revised return must be filed before 31st December 2026 or before the assessment is completed, whichever is earlier. There is no late fee for revising a return that was filed on time.",
  },
  {
    question: "What is the penalty for late TDS return filing?",
    answer:
      "Late filing of TDS returns attracts a penalty of ₹200 per day under Section 234E until the return is filed. The penalty continues to accrue daily. For complete non-filing or significant delays, additional penalties ranging from ₹10,000 to ₹1,00,000 may be levied.",
  },
  {
    question: "When is the tax audit report due for FY 2025-26?",
    answer:
      "Tax audit report (Form 3CA/3CB with Form 3CD) must be uploaded on the income tax portal by 30th September 2026 for FY 2025-26. Transfer pricing report (Form 3CEB) is due by 31st October 2026. Entities must upload audit reports before filing their ITR.",
  },
  {
    question: "What is Section 234F penalty for late ITR filing?",
    answer:
      "Section 234F levies a late filing fee of ₹5,000 if ITR is filed after the due date but before 31st December. For taxpayers with total income not exceeding ₹5 lakh, the late fee is reduced to ₹1,000. This fee is mandatory and auto-computed during ITR filing.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Income Tax Due Dates FY 2025-26 & AY 2026-27: Complete ITR Filing Calendar",
  description:
    "Complete guide to income tax due dates for FY 2025-26 including ITR filing deadlines, advance tax dates, TDS return dates, audit report submission timelines and penalties for late filing.",
  url: "https://www.taxvio.in/guide/itr-blogs/income-tax-due-dates",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/income-tax-due-dates",
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
  datePublished: "2026-01-15T10:00:00+05:30",
  dateModified: "2026-07-11T10:00:00+05:30",
  wordCount: 2800,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: [
    "income tax due dates",
    "ITR filing deadline",
    "advance tax dates",
    "TDS return dates",
    "FY 2025-26",
    "AY 2026-27",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.taxvio.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ITR Guides",
      item: "https://www.taxvio.in/guide/itr-blogs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Income Tax Due Dates",
      item: "https://www.taxvio.in/guide/itr-blogs/income-tax-due-dates",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

/* ─── Reusable Components ───────────────────────────────────────────────── */

function DueDateTable({
  rows,
  title,
  subtitle,
}: {
  rows: {
    category?: string;
    installment?: string;
    quarter?: string;
    report?: string;
    penalty?: string;
    dueDate?: string;
    [key: string]: any;
  }[];
  title: string;
  subtitle: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#dcebf3] bg-white shadow-sm">
      <div className="bg-gradient-to-r from-[#00416a] to-[#0077b6] px-5 py-4">
        <h3 className="text-base font-extrabold text-white">{title}</h3>
        <p className="mt-1 text-xs text-white/65">{subtitle}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-[#f3f8fb]">
              {Object.keys(rows[0]).filter(key => key !== 'note' && rows[0][key as keyof typeof rows[0]]).map((key) => (
                <th key={key} scope="col" className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#00416a]">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-0">
                {Object.entries(row).filter(([key]) => key !== 'note').map(([key, value], cellIdx) => {
                  if (key === 'dueDate') {
                    return (
                      <td key={cellIdx} className="px-5 py-3.5">
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#00416a]">
                          {value as string}
                        </span>
                      </td>
                    );
                  }
                  if (cellIdx === 0) {
                    return (
                      <td key={cellIdx} className="px-5 py-3.5 text-sm font-semibold text-gray-800">
                        {value as string}
                      </td>
                    );
                  }
                  return (
                    <td key={cellIdx} className="px-5 py-3.5 text-xs text-gray-500">
                      {value as string}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

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

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function IncomeTaxDueDatesPage() {
  return (
    <>
      <Script
        id="income-tax-due-dates-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="income-tax-due-dates-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="income-tax-due-dates-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f8fbfd] font-sans text-gray-800">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle,rgba(56,189,248,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle,rgba(45,212,191,0.09) 0%,transparent 65%)",
            }}
          />

          <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-20 md:pt-28">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li>
                  <Link
                    href="/guide/itr-blogs"
                    className="transition hover:text-white"
                  >
                    ITR Guides
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li className="font-semibold text-white/80">
                  Income Tax Due Dates
                </li>
              </ol>
            </nav>

            <div className="grid items-center gap-12 md:grid-cols-[1fr_360px]">
              <div>
                <div
                  className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                  Updated for FY 2025-26 · AY 2026-27
                </div>

                <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
                  Income Tax Due Dates
                  <span className="mt-2 block bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    FY 2025-26 &amp; AY 2026-27
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                  Complete calendar of{" "}
                  <strong className="text-white">ITR filing deadlines</strong>,
                  advance tax payment dates, TDS return due dates and audit
                  report submission timelines. Understand penalties and avoid
                  late filing with this comprehensive tax compliance guide.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/serviceslist/income-tax/itr-salaried"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#00416a] shadow-xl transition-all hover:bg-gray-50 active:scale-[0.97]"
                  >
                    File Your ITR <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10 active:scale-[0.97]"
                  >
                    Ask a Tax Expert <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  Key deadlines FY 2025-26
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    {
                      icon: FileText,
                      title: "31st July 2026",
                      text: "ITR filing deadline (non-audit cases)",
                    },
                    {
                      icon: IndianRupee,
                      title: "15th March 2026",
                      text: "Last advance tax installment (100%)",
                    },
                    {
                      icon: Calendar,
                      title: "31st October 2026",
                      text: "ITR deadline for audit cases",
                    },
                    {
                      icon: AlertCircle,
                      title: "31st December 2026",
                      text: "Belated/revised ITR deadline",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-400/15">
                        <Icon size={16} className="text-sky-300" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-white">
                          {title}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-white/55">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4">
              {[
                { icon: BadgeCheck, text: "CA-Verified Information" },
                { icon: Shield, text: "100% Compliant" },
                { icon: Clock, text: "Updated Regularly" },
                { icon: Star, text: "4.9★ Taxvio Rating" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-xs text-white/55"
                >
                  <Icon size={12} className="text-sky-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="block w-full">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f8fbfd"
            />
          </svg>
        </section>

        {/* ════════ ARTICLE LAYOUT ════════ */}
        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_280px]">

            {/* Article */}
            <article className="min-w-0 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">

              {/* Intro */}
              <div className="border-b border-gray-100 pb-10">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0077b6]">
                  Tax Compliance Calendar
                </p>
                <h2 className="text-2xl font-extrabold leading-tight text-[#00416a] md:text-3xl">
                  Why Income Tax Due Dates Matter for FY 2025-26
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  Meeting income tax deadlines is crucial for compliance and
                  avoiding penalties. The <strong>income tax due dates</strong>{" "}
                  calendar for FY 2025-26 (AY 2026-27) includes ITR filing
                  deadlines, advance tax payment schedules, TDS return
                  submission dates and audit report upload timelines. Missing
                  these deadlines can result in late fees, interest charges and
                  loss of carry-forward benefits for losses.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The most critical deadline for most taxpayers is{" "}
                  <strong>31st July 2026</strong> — the ITR filing due date for
                  individuals and HUFs who do not require a tax audit. Businesses
                  and professionals requiring audit under Section 44AB have until
                  31st October 2026. This guide covers all important tax
                  compliance dates with explanations of penalties and practical
                  filing tips.
                </p>

                <InfoBox title="Important: Late filing consequences" color="amber">
                  <p>
                    Filing ITR after the due date attracts a penalty of ₹5,000
                    under Section 234F (₹1,000 if income ≤₹5 lakh), interest
                    under Section 234A, and permanent loss of carry-forward
                    benefit for business and capital losses.
                  </p>
                </InfoBox>
              </div>

              {/* ITR Dates */}
              <section id="itr-dates" className="scroll-mt-24 pt-10">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00416a]/10">
                    <FileText size={17} className="text-[#00416a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                      Return filing deadlines
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#00416a] md:text-2xl">
                      ITR Filing Due Dates for FY 2025-26 (AY 2026-27)
                    </h2>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-8 text-gray-600">
                  Income Tax Return filing deadlines vary based on taxpayer
                  category, business turnover, professional receipts and whether
                  tax audit is required under Section 44AB. Each category has
                  specific due dates and applicable ITR forms.
                </p>

                <DueDateTable
                  title="ITR Filing Due Dates — FY 2025-26"
                  subtitle="Deadlines vary by taxpayer category and audit requirement"
                  rows={ITR_DUE_DATES}
                />

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <InfoBox title="Belated return deadline" color="rose">
                    <p>
                      If you miss the original due date, you can file a belated
                      return under Section 139(4) by 31st December 2026 with a
                      penalty of ₹5,000. However, you cannot carry forward
                      business or capital losses.
                    </p>
                  </InfoBox>

                  <InfoBox title="Revised return option" color="green">
                    <p>
                      You can file a revised return under Section 139(5) to
                      correct errors in your original ITR. The deadline is 31st
                      December 2026 or before assessment completion, whichever
                      is earlier. No late fee applies.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Advance Tax */}
              <section id="advance-tax" className="scroll-mt-24 pt-12">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00416a]/10">
                    <IndianRupee size={17} className="text-[#00416a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                      Quarterly tax payments
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#00416a] md:text-2xl">
                      Advance Tax Payment Schedule for FY 2025-26
                    </h2>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-8 text-gray-600">
                  Advance tax must be paid in four installments during the
                  financial year if your tax liability exceeds ₹10,000 after TDS.
                  Failure to pay correct advance tax installments attracts
                  interest under Section 234B and Section 234C.
                </p>

                <DueDateTable
                  title="Advance Tax Schedule — FY 2025-26"
                  subtitle="Four quarterly installments for advance tax payment"
                  rows={ADVANCE_TAX_SCHEDULE}
                />

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <InfoBox title="Presumptive taxation" color="blue">
                    <p>
                      Taxpayers opting for presumptive taxation under Section
                      44AD or 44ADA can pay entire advance tax by 15th March
                      2026 in one installment instead of four installments.
                    </p>
                  </InfoBox>

                  <InfoBox title="Interest on shortfall" color="amber">
                    <p>
                      Section 234B levies 1% per month interest if advance tax
                      paid is less than 90% of actual liability. Section 234C
                      charges 1% monthly interest on shortfall in each
                      installment.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* TDS Dates */}
              <section id="tds-dates" className="scroll-mt-24 pt-12">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00416a]/10">
                    <Calendar size={17} className="text-[#00416a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                      Quarterly compliance
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#00416a] md:text-2xl">
                      TDS Return Filing Due Dates
                    </h2>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-8 text-gray-600">
                  TDS returns must be filed quarterly by deductors for salary
                  (Form 24Q), non-salary payments (Form 26Q), payments to
                  non-residents (Form 27Q), and TCS (Form 27EQ). The TDS challan
                  must be deposited by the 7th of the following month.
                </p>

                <DueDateTable
                  title="TDS Return Due Dates — Quarterly"
                  subtitle="Forms 24Q, 26Q, 27Q, 27EQ filing deadlines"
                  rows={TDS_RETURN_DATES}
                />

                <InfoBox title="Penalty for late TDS return" color="rose">
                  <p>
                    Late filing of TDS returns attracts penalty of ₹200 per day
                    under Section 234E until the return is filed. The penalty
                    continues to accrue daily. For non-filing, additional
                    penalties of ₹10,000 to ₹1,00,000 may apply.
                  </p>
                </InfoBox>
              </section>

              {/* Audit Dates */}
              <section id="audit-dates" className="scroll-mt-24 pt-12">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00416a]/10">
                    <Calculator size={17} className="text-[#00416a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                      For audited entities
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#00416a] md:text-2xl">
                      Tax Audit & Report Submission Deadlines
                    </h2>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-8 text-gray-600">
                  Entities requiring tax audit under Section 44AB must upload
                  audit reports on the income tax portal before filing their ITR.
                  Transfer pricing cases must also submit Form 3CEB before the
                  ITR deadline.
                </p>

                <DueDateTable
                  title="Audit Report Submission Dates"
                  subtitle="Upload deadlines for various audit reports"
                  rows={AUDIT_REPORT_DATES}
                />
              </section>

              {/* Penalties */}
              <section id="penalties" className="scroll-mt-24 pt-12">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00416a]/10">
                    <AlertCircle size={17} className="text-[#00416a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                      Consequences of missing deadlines
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#00416a] md:text-2xl">
                      Penalties and Interest for Late Filing
                    </h2>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-8 text-gray-600">
                  Missing income tax deadlines attracts various penalties,
                  interest charges and loss of tax benefits. The most significant
                  consequence is the permanent loss of carry-forward benefit for
                  business and capital losses if ITR is filed after the due date.
                </p>

                <DueDateTable
                  title="Penalties for Late Compliance"
                  subtitle="Late fees, interest and other consequences"
                  rows={PENALTIES}
                />

                <InfoBox title="File early to avoid penalties" color="green">
                  <p>
                    Filing your ITR before the deadline avoids Section 234F late
                    fee, preserves loss carry-forward benefits and minimizes
                    Section 234A interest. Even if you cannot pay all the tax,
                    file the return on time to avoid higher penalties.
                  </p>
                </InfoBox>
              </section>

              {/* CTA */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 text-white md:p-9">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                      File before the deadline
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio file your ITR on time
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our expert CA team ensures accurate and timely ITR filing
                      for FY 2025-26. Avoid penalties and file with confidence.
                    </p>
                  </div>
                  <Link
                    href="/serviceslist/income-tax/itr-salaried"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    File ITR Now <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24 pt-12">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00416a]/10">
                    <BookOpen size={17} className="text-[#00416a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                      Frequently asked questions
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#00416a] md:text-2xl">
                      Income Tax Due Dates FAQs
                    </h2>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map(({ question, answer }) => (
                    <details
                      key={question}
                      className="group rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-gray-800 marker:hidden">
                        <span className="flex items-start gap-3">
                          <span className="mt-0.5 text-[#00416a]">Q.</span>
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
              <div className="mt-12 border-t border-gray-100 pt-7">
                <p className="text-xs leading-6 text-gray-500">
                  <strong className="text-gray-700">Disclaimer:</strong> This
                  article provides general educational information about income
                  tax due dates for FY 2025-26 based on current tax laws.
                  Deadlines may change through Finance Acts and CBDT
                  notifications. Always verify current due dates on
                  incometax.gov.in or consult a qualified CA before filing.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-2xl border border-[#dcebf3] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]">
                    On this page
                  </p>
                  <nav className="mt-4 space-y-1.5">
                    {[
                      ["#itr-dates", "ITR filing dates"],
                      ["#advance-tax", "Advance tax schedule"],
                      ["#tds-dates", "TDS return dates"],
                      ["#audit-dates", "Audit report dates"],
                      ["#penalties", "Penalties & interest"],
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

                <div className="rounded-2xl bg-[#00416a] p-5 text-white shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <MessageCircle size={18} className="text-sky-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    Need help with ITR filing?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    File your ITR before the deadline with CA assistance from
                    Taxvio. Avoid penalties.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    Contact Taxvio <ArrowRight size={13} />
                  </Link>
                </div>

                <Link
                  href="/serviceslist/income-tax/itr-salaried"
                  className="group flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                      ITR Filing
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-gray-800">
                      File ITR from ₹699
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-emerald-600 transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ════════ RELATED GUIDES ════════ */}
        <section className="border-t border-gray-100 bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                Explore more
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#00416a]">
                Related Income Tax Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/income-tax-slabs",
                  title: "Income Tax Slabs FY 2025-26",
                  text: "New vs old regime tax rates, rebate and deductions.",
                },
                {
                  href: "/guide/itr-blogs/form-26as",
                  title: "Form 26AS Guide",
                  text: "View and verify your tax credit statement.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Tax Expert",
                  text: "Get CA assistance for ITR filing before deadline.",
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

        <Footar />
      </main>
    </>
  );
}