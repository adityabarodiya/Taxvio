// app/guide/itr-blogs/how-to-file-tds-return/page.tsx

import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
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
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "How to File TDS Return Online: Complete Step-by-Step Guide | Taxvio",
  description:
    "Learn how to file TDS returns online in India — including which form to use, due dates, TRACES registration, RPU software, FVU validation and penalty for late filing. Complete guide for FY 2024-25.",
  keywords: [
    "how to file TDS return",
    "TDS return filing online",
    "TDS return due dates",
    "Form 24Q TDS return",
    "Form 26Q TDS return",
    "TRACES TDS return",
    "RPU software TDS",
    "FVU validation TDS",
    "TDS return penalty",
    "quarterly TDS return",
    "TDS return filing process",
    "TDS deductor filing",
    "Section 194 TDS return",
    "TDS return AY 2025-26",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/how-to-file-tds-return",
  },
  openGraph: {
    title: "How to File TDS Return Online: Step-by-Step Guide | Taxvio",
    description:
      "A complete guide to filing TDS returns in India — forms, due dates, TRACES, RPU software, FVU validation and penalties explained for FY 2024-25.",
    url: "https://www.taxvio.in/guide/itr-blogs/how-to-file-tds-return",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to File TDS Return Online — Complete Guide FY 2024-25",
    description:
      "Everything you need to know about TDS return filing — forms, due dates, TRACES, RPU, FVU, penalties and corrections explained simply.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const TDS_FORMS = [
  {
    form: "Form 24Q",
    title: "TDS on Salary",
    desc: "Filed by employers who deduct TDS under Section 192 from salary payments made to employees. Contains employee-wise salary breakup, deductions claimed and TDS deposited per quarter.",
    icon: "👔",
    color: "bg-blue-50 border-blue-100 text-blue-700",
    who: "Employers",
  },
  {
    form: "Form 26Q",
    title: "TDS on Non-Salary Payments (Residents)",
    desc: "Filed for TDS deducted under various sections — 194A (interest), 194C (contractors), 194D (insurance), 194H (commission), 194I (rent), 194J (professional fees) and others on payments to residents.",
    icon: "📋",
    color: "bg-violet-50 border-violet-100 text-violet-700",
    who: "All deductors making non-salary payments to residents",
  },
  {
    form: "Form 27Q",
    title: "TDS on Payments to Non-Residents",
    desc: "Filed for TDS deducted under Section 195, 196A, 196B, 196C and 196D on payments made to non-residents and foreign companies — including royalties, technical fees and interest.",
    icon: "🌐",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    who: "Deductors paying non-residents or foreign companies",
  },
  {
    form: "Form 27EQ",
    title: "Tax Collected at Source (TCS)",
    desc: "Filed for TCS collected under Section 206C on sale of specified goods including scrap, alcohol, minerals, motor vehicles above ₹10 lakh, overseas remittance under LRS and foreign travel packages.",
    icon: "🧾",
    color: "bg-amber-50 border-amber-100 text-amber-700",
    who: "Sellers collecting TCS on specified goods",
  },
];

const DUE_DATES = [
  {
    quarter: "Q1",
    period: "April – June",
    dueDate: "31 July",
    form24q: "31 July",
    form26q: "31 July",
    color: "bg-sky-50 border-sky-200 text-sky-800",
  },
  {
    quarter: "Q2",
    period: "July – September",
    dueDate: "31 October",
    form24q: "31 October",
    form26q: "31 October",
    color: "bg-violet-50 border-violet-200 text-violet-800",
  },
  {
    quarter: "Q3",
    period: "October – December",
    dueDate: "31 January",
    form24q: "31 January",
    form26q: "31 January",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  {
    quarter: "Q4",
    period: "January – March",
    dueDate: "31 May",
    form24q: "31 May",
    form26q: "31 May",
    color: "bg-amber-50 border-amber-200 text-amber-800",
  },
];

const FILING_STEPS = [
  {
    step: "01",
    title: "Obtain or verify your TAN",
    desc: "Before filing any TDS return, you must have a valid Tax Deduction Account Number (TAN). If you do not have one, apply through Form 49B on the NSDL/Protean portal. TAN is a 10-character alphanumeric number mandatory for all deductors.",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "Register on TRACES portal",
    desc: "Visit traces.gov.in and register as a deductor using your TAN, PAN and other required details. TRACES registration is necessary for viewing challan status, requesting Form 16/16A, and filing correction statements.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Download RPU (Return Preparation Utility)",
    desc: "Download the latest version of the Return Preparation Utility (RPU) from the NSDL/TIN website. RPU is a free offline Java-based tool used to prepare TDS return files in the required format (e.g., 24Q, 26Q). Always use the latest version to avoid validation errors.",
    icon: Download,
  },
  {
    step: "04",
    title: "Prepare the TDS return in RPU",
    desc: "Open RPU and enter all required details: deductor information (TAN, PAN, name, address), challan details (BSR code, challan date, amount, section), and deductee-wise details (PAN, name, amount paid, TDS deducted). Save the file in .fvu format.",
    icon: FileText,
  },
  {
    step: "05",
    title: "Validate using FVU (File Validation Utility)",
    desc: "Download the File Validation Utility (FVU) from NSDL and run it on the prepared return file. FVU checks the file for structural and data errors and generates a validated .fvu file along with an error report. Rectify all errors before proceeding.",
    icon: CheckCircle,
  },
  {
    step: "06",
    title: "Upload the validated file on the income tax portal",
    desc: "Log in to the income tax portal (incometax.gov.in) using your TAN. Navigate to e-File > Income Tax Forms > File Income Tax Forms and upload the validated .fvu file. You will also need to upload a signed form (Form 27A) as a control chart.",
    icon: Upload,
  },
  {
    step: "07",
    title: "Verify and receive acknowledgement",
    desc: "After successful upload, the portal generates a provisional receipt (acknowledgement number). Keep this safe. The TDS return is processed by TRACES over the following days. You can track processing status using your TAN on the TRACES portal.",
    icon: Eye,
  },
];

const PENALTIES = [
  {
    section: "Section 234E",
    title: "Late Filing Fee",
    detail: "₹200 per day for every day of delay after the due date, subject to a maximum of the TDS amount. This is a mandatory fee — it cannot be waived.",
    color: "bg-rose-50 border-rose-100 text-rose-800",
    icon: "⏰",
  },
  {
    section: "Section 271H",
    title: "Penalty for Non-Filing or Incorrect Filing",
    detail: "Penalty between ₹10,000 and ₹1,00,000 for failure to file TDS return, or for furnishing incorrect information in the return. Can be avoided if TDS is deposited with interest and the return is filed within one year of the due date.",
    color: "bg-amber-50 border-amber-100 text-amber-800",
    icon: "⚠️",
  },
  {
    section: "Section 201(1A)",
    title: "Interest on Late Deposit of TDS",
    detail: "Interest at 1.5% per month (or part of month) from the date TDS was deducted to the date it was deposited with the government. Applicable when TDS is deducted but deposited late.",
    color: "bg-orange-50 border-orange-100 text-orange-800",
    icon: "💸",
  },
  {
    section: "Section 271C",
    title: "Penalty for Failure to Deduct TDS",
    detail: "Penalty equal to the amount of TDS not deducted or not paid. This is in addition to interest under Section 201(1A). Applied when the deductor fails to deduct TDS at all.",
    color: "bg-red-50 border-red-100 text-red-800",
    icon: "❌",
  },
];

const FAQS = [
  {
    question: "Who is required to file a TDS return?",
    answer:
      "Every person or entity that is required to deduct tax at source under the Income Tax Act is obligated to file a quarterly TDS return. This includes companies, firms, LLPs, government entities, individuals and HUFs whose accounts are subject to audit, and any other person notified by the government. If you deduct TDS from salary, contractor payments, rent, professional fees, bank interest, or any other payment covered under Sections 192 to 196D, you must file the appropriate TDS return within the due date.",
  },
  {
    question: "What is the difference between RPU and FVU?",
    answer:
      "RPU (Return Preparation Utility) is the tool used to prepare and enter the TDS return data — including challan details, deductee PAN, amount paid, and TDS deducted. It generates an intermediate file. FVU (File Validation Utility) is a separate tool that validates the file prepared in RPU for structural and data accuracy. Both tools are provided free by NSDL/Protean. The FVU-validated file (.fvu) is the file that is actually uploaded to the income tax portal.",
  },
  {
    question: "What is Form 27A and why is it required?",
    answer:
      "Form 27A is a control chart — a summary form that accompanies the TDS return file when submitted physically at TIN-FC (now largely replaced by online submission). It contains totals of TDS deducted, amounts paid, number of deductees and other key figures. While online filing on the income tax portal does not require a separate Form 27A submission in most cases, it is still generated by RPU and should be retained by the deductor for records.",
  },
  {
    question: "Can a TDS return be filed without challan?",
    answer:
      "No. TDS must first be deposited with the government through a valid challan (ITNS 281) and the challan details — BSR code, challan date, challan serial number, section code and amount — must be entered in the TDS return. Filing without valid challan details will result in FVU errors and the return cannot be submitted. Always deposit TDS first and obtain the challan counterfoil before preparing the return.",
  },
  {
    question: "How do I file a TDS correction return?",
    answer:
      "If you have made an error in a filed TDS return — such as wrong PAN, incorrect amount or missing deductee — you must file a TDS correction statement. Log in to TRACES, request a Conso (consolidated) file for the relevant TAN, quarter and FY, download it, open it in RPU, make the required corrections, validate through FVU and re-upload the corrected file on the income tax portal. The correction updates Form 26AS for the affected deductees after processing.",
  },
  {
    question: "What happens if the deductee's PAN is not available or invalid?",
    answer:
      "If the deductee's PAN is not available or is invalid (including PANNOTAVBL, PANAPPLIED or PANINVALID entries), TDS must be deducted at higher rates under Section 206AA — typically 20% or the applicable rate, whichever is higher. Additionally, the deductee will not receive credit in Form 26AS unless a valid PAN is provided and the TDS return is corrected. Always collect valid PAN details from deductees before making payments.",
  },
  {
    question: "Is Aadhaar-based authentication required for TDS return filing?",
    answer:
      "The income tax portal requires login authentication using PAN-based credentials (TAN for TDS return filing). For individual taxpayers, Aadhaar OTP-based verification is available in various contexts, but TDS return filing by deductors is primarily done through TAN-based portal login. Ensure your TAN is registered and active on the income tax portal before attempting to upload the return.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to File TDS Return Online: Step-by-Step Complete Guide",
  description:
    "A comprehensive guide to filing TDS returns online in India — covering which form to use, quarterly due dates, TRACES registration, RPU software preparation, FVU validation, portal upload, and penalties for late or incorrect filing.",
  url: "https://www.taxvio.in/guide/itr-blogs/how-to-file-tds-return",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/how-to-file-tds-return",
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
  wordCount: 2600,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: [
    "TDS return filing",
    "Form 24Q",
    "Form 26Q",
    "TRACES",
    "RPU",
    "FVU",
    "TDS due dates",
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
      name: "How to File TDS Return",
      item: "https://www.taxvio.in/guide/itr-blogs/how-to-file-tds-return",
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

export default function HowToFileTDSReturnPage() {
  return (
    <>
      <Script
        id="tds-return-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="tds-return-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="tds-return-faq-schema"
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
                "radial-gradient(circle,rgba(56,189,248,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(45,212,191,0.09) 0%,transparent 65%)",
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
                  How to File TDS Return
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
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Updated for FY 2024-25 · AY 2025-26
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  How to File
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    TDS Returns Online
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Every deductor — employer, business, or individual required
                  to deduct tax at source — must file{" "}
                  <strong className="text-white">quarterly TDS returns</strong>{" "}
                  using the correct form. This guide covers which form applies
                  to you, the filing process using RPU and FVU, due dates, and
                  how to avoid costly penalties.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get TDS Filing Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/serviceslist/income-tax/itr-salaried"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    File Your ITR <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick highlights card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  TDS return at a glance
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: FileText,
                      title: "Forms available",
                      text: "24Q (salary), 26Q (non-salary residents), 27Q (non-residents), 27EQ (TCS)",
                    },
                    {
                      icon: Calendar,
                      title: "Quarterly filing",
                      text: "Due on 31 July, 31 Oct, 31 Jan and 31 May every year",
                    },
                    {
                      icon: Download,
                      title: "RPU & FVU required",
                      text: "Free utilities from NSDL to prepare and validate the return file",
                    },
                    {
                      icon: Upload,
                      title: "Online upload",
                      text: "Submit validated .fvu file on the income tax portal via TAN login",
                    },
                    {
                      icon: AlertCircle,
                      title: "Late filing penalty",
                      text: "₹200/day under Section 234E — up to the total TDS amount",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-sky-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-sky-300" />
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
                { icon: BadgeCheck, text: "CA-Assisted TDS Filing" },
                { icon: Shield, text: "Secure & Confidential" },
                { icon: Clock, text: "On-Time Filing Guaranteed" },
                { icon: Star, text: "4.9★ Taxvio Rating" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-sky-400" /> {text}
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
                  Income Tax Guide
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  What Is a TDS Return and Who Must File It?
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>Tax Deducted at Source (TDS)</strong> is a mechanism
                  under the Income Tax Act, 1961, through which tax is collected
                  at the point of income generation rather than at year-end. Any
                  person or entity that deducts TDS while making specified
                  payments — salary, rent, contractor fees, professional charges,
                  bank interest, and others — is called a{" "}
                  <strong>deductor</strong> and is legally required to deposit
                  the deducted amount with the government and report it through
                  a <strong>quarterly TDS return</strong>.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  A TDS return is a quarterly statement submitted to the Income
                  Tax Department that details the TDS deducted from payments
                  made during the quarter, the challans used to deposit that
                  TDS, and the PAN-wise details of each deductee. This data is
                  processed by TRACES (TDS Reconciliation Analysis and Correction
                  Enabling System) and reflected in the deductee&apos;s Form
                  26AS, enabling them to claim the TDS credit while filing their
                  Income Tax Return.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Filing TDS returns accurately and on time is a critical
                  compliance obligation. A missed or delayed return triggers
                  mandatory fees under Section 234E and penalties under Section
                  271H. More importantly, an unfiled or incorrect TDS return
                  means the deductee cannot see the TDS credit in their Form
                  26AS, creating reconciliation problems and potential ITR
                  processing issues on their side.
                </p>

                <InfoBox title="TDS return vs TDS payment — two separate obligations" color="blue">
                  <p>
                    Depositing TDS through a challan (ITNS 281) and filing the
                    quarterly TDS return are two separate legal requirements.
                    Depositing TDS without filing the return — or filing the
                    return without depositing TDS — are both non-compliant.
                    Both must be completed within the applicable deadlines.
                  </p>
                </InfoBox>
              </div>

              {/* TDS Forms */}
              <section id="tds-forms" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Which form applies to you"
                  heading="TDS Return Forms — 24Q, 26Q, 27Q and 27EQ Explained"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The correct TDS return form depends on the nature of the
                  payment and the residential status of the deductee. Using the
                  wrong form is a common error that requires subsequent
                  correction. Here is a breakdown of each form:
                </p>

                <div className="grid gap-4">
                  {TDS_FORMS.map(({ form, title, desc, icon, color, who }) => (
                    <div
                      key={form}
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
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color
                                .split(" ")
                                .slice(0, 2)
                                .join(" ")} border ${color.split(" ")[1]} ${
                                color.split(" ")[2]
                              }`}
                            >
                              {form}
                            </span>
                            <h3 className="text-sm font-extrabold text-gray-800">
                              {title}
                            </h3>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {desc}
                          </p>
                          <p className="mt-2 text-[11px] font-semibold text-gray-500">
                            Filed by: {who}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Due Dates */}
              <section id="due-dates" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Quarterly schedule"
                  heading="TDS Return Due Dates for FY 2024-25"
                  icon={Calendar}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  TDS returns must be filed quarterly. Missing the due date
                  attracts a mandatory late filing fee of ₹200 per day under
                  Section 234E, which continues to accrue until the return is
                  filed, subject to a cap equal to the TDS amount. Here are
                  the due dates for FY 2024-25:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {DUE_DATES.map(
                    ({ quarter, period, dueDate, color }) => (
                      <div
                        key={quarter}
                        className={`rounded-2xl border p-5 ${color}`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-extrabold uppercase tracking-widest opacity-60">
                            {quarter}
                          </span>
                          <span className="text-xs font-bold bg-white/60 px-2 py-0.5 rounded-full">
                            {period}
                          </span>
                        </div>
                        <p className="text-2xl font-extrabold">{dueDate}</p>
                        <p className="mt-1 text-xs font-medium opacity-70">
                          Due date — Forms 24Q, 26Q, 27Q & 27EQ
                        </p>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-5 grid md:grid-cols-2 gap-5">
                  <InfoBox title="Government deductors — special rule" color="amber">
                    <p>
                      Government deductors who deposit TDS without challan
                      (Book Entry) have different due dates for Q4 — 30 April
                      instead of 31 May for Form 24Q. Always confirm the
                      applicable due date based on your deductor category.
                    </p>
                  </InfoBox>
                  <InfoBox title="TDS deposit due date is separate" color="blue">
                    <p>
                      TDS must be deposited by the 7th of the following month
                      (April 30 for March deductions). The quarterly{" "}
                      <em>return filing</em> due date is different from the
                      monthly <em>challan deposit</em> due date. Both must be
                      tracked independently.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Step-by-step filing */}
              <section id="filing-steps" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step process"
                  heading="How to File TDS Return Online — Complete Process"
                  icon={Upload}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Filing a TDS return involves preparing the return data using
                  the RPU utility, validating it through the FVU, and uploading
                  the validated file on the income tax portal. Here is the
                  complete step-by-step process:
                </p>

                <div className="space-y-4">
                  {FILING_STEPS.map(({ step, title, desc, icon: Icon }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Icon
                            size={14}
                            className="text-[#0077b6] shrink-0"
                          />
                          <h3 className="text-sm font-bold text-gray-800">
                            {title}
                          </h3>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Always use the latest RPU and FVU versions" color="green">
                  <p>
                    NSDL/Protean regularly releases updated versions of both
                    RPU and FVU. Using an outdated version may cause validation
                    failures or rejection during upload. Before preparing each
                    quarterly return, download the latest version from the
                    official TIN-NSDL website at tin.tin.nsdl.com.
                  </p>
                </InfoBox>
              </section>

              {/* What to enter in RPU */}
              <section id="rpu-details" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="RPU data entry"
                  heading="What Information to Enter in the RPU"
                  icon={Search}
                />

                <p className="text-sm leading-8 text-gray-600">
                  The RPU has three main sections that need to be filled
                  correctly. Errors in any of these sections will cause FVU
                  validation failure or TDS credit mismatches in Form 26AS:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Deductor details",
                      detail:
                        "Enter your TAN, PAN, name, address, type of deductor (company, government, individual, etc.), responsible person details (name, designation, PAN) and contact information. These details must match the TAN registration records exactly.",
                      icon: "🏢",
                      items: [
                        "TAN of deductor",
                        "PAN of deductor",
                        "Name and address",
                        "Responsible person PAN and name",
                        "Financial year and quarter",
                      ],
                    },
                    {
                      title: "Challan details",
                      detail:
                        "For each challan used to deposit TDS during the quarter, enter the BSR code of the bank branch (7 digits), challan deposit date, challan serial number (5 digits), total challan amount, and the section-wise TDS breakup within that challan.",
                      icon: "🏦",
                      items: [
                        "BSR code (7 digits)",
                        "Challan deposit date",
                        "Challan serial number",
                        "Total challan amount",
                        "Section under which TDS deposited",
                      ],
                    },
                    {
                      title: "Deductee-wise details (Annexure I)",
                      detail:
                        "For each payment made during the quarter, enter the deductee's PAN, name, section under which TDS was deducted, amount paid or credited, TDS deducted and TDS deposited. Each deductee entry must be mapped to a valid challan entered above.",
                      icon: "👤",
                      items: [
                        "Deductee PAN",
                        "Deductee name",
                        "Section (e.g., 194C, 194J, 192)",
                        "Amount paid or credited",
                        "TDS deducted amount",
                        "Challan mapping",
                      ],
                    },
                  ].map(({ title, detail, icon, items }) => (
                    <div
                      key={title}
                      className="flex gap-4 items-start border border-gray-100 rounded-2xl p-5 bg-white hover:shadow-sm transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center text-xl shrink-0">
                        {icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800">
                          {title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-gray-600">
                          {detail}
                        </p>
                        <ul className="mt-3 grid sm:grid-cols-2 gap-1">
                          {items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-1.5 text-[11px] text-gray-600"
                            >
                              <CheckCircle
                                size={11}
                                className="text-emerald-500 shrink-0"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Penalties */}
              <section id="penalties" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Consequences of non-compliance"
                  heading="Penalties for Late or Incorrect TDS Return Filing"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600">
                  The Income Tax Act provides for strict penalties against
                  deductors who fail to file TDS returns on time or who file
                  incorrect returns. Understanding these penalties helps
                  appreciate why timely and accurate TDS return filing is
                  non-negotiable:
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {PENALTIES.map(({ section, title, detail, color, icon }) => (
                    <div
                      key={section}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                                color.split(" ")[1]
                              } ${color.split(" ")[2]}`}
                            >
                              {section}
                            </span>
                          </div>
                          <h3 className="mt-2 text-sm font-extrabold text-gray-800">
                            {title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Section 234E fee is automatic and non-waivable" color="rose">
                  <p>
                    Unlike many penalties that require an order from the
                    Assessing Officer, the late filing fee under Section 234E
                    is computed automatically and must be paid before the TDS
                    return is accepted. You cannot request waiver or
                    condonation for Section 234E fees — the only way to stop
                    the fee from accruing is to file the return immediately.
                  </p>
                </InfoBox>
              </section>

              {/* Correction returns */}
              <section id="corrections" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="After filing"
                  heading="How to File a TDS Correction Return"
                  icon={Search}
                />

                <p className="text-sm leading-8 text-gray-600">
                  Errors in filed TDS returns are common — wrong PAN of the
                  deductee, incorrect amount, wrong challan mapped, or missing
                  deductee entries. A TDS correction (revised) return can be
                  filed to fix these errors. Unlike original returns, correction
                  returns must be requested through TRACES. Here is the process:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Login to TRACES and request Conso file",
                      detail:
                        "Go to traces.gov.in, log in with your TAN and request the Consolidated (Conso) file for the specific TAN, financial year and quarter for which you want to file a correction. The Conso file contains all previously accepted data.",
                    },
                    {
                      step: "02",
                      title: "Open Conso file in RPU",
                      detail:
                        "Open the latest version of RPU and load the downloaded Conso file. RPU will display the existing data. Make only the necessary corrections — do not change correct entries unnecessarily. Save the updated file.",
                    },
                    {
                      step: "03",
                      title: "Validate corrected file in FVU",
                      detail:
                        "Run the corrected file through FVU. Resolve any validation errors. The FVU will generate a corrected .fvu file if no errors are found.",
                    },
                    {
                      step: "04",
                      title: "Upload corrected return on income tax portal",
                      detail:
                        "Log in to the income tax portal with your TAN and upload the corrected .fvu file the same way as the original return. After processing, the deductee's Form 26AS will be updated to reflect the corrections.",
                    },
                  ].map(({ step, title, detail }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-800">
                          {title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">
                          {detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Multiple corrections are allowed" color="green">
                  <p>
                    There is no limit on the number of correction returns you
                    can file for a given quarter and financial year. However,
                    each subsequent correction requires downloading an updated
                    Conso file from TRACES, as the file incorporates all
                    previously accepted corrections.
                  </p>
                </InfoBox>
              </section>

              {/* Checklist */}
              <section id="checklist" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Pre-filing verification"
                  heading="TDS Return Filing Checklist"
                  icon={CheckCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Use this checklist before uploading your TDS return to
                  minimise errors and avoid correction returns:
                </p>

                <div className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "TAN is active and registered on income tax portal",
                      "All TDS challans are deposited and BSR codes available",
                      "Latest RPU version downloaded from NSDL",
                      "Latest FVU version downloaded from NSDL",
                      "Deductee PAN verified for each entry (no invalid PAN)",
                      "Challan amounts match TDS deducted amounts",
                      "Correct section codes used for each payment type",
                      "Form 27A details match the return file totals",
                      "FVU shows zero errors before upload",
                      "Acknowledgement receipt saved after successful upload",
                      "Correct financial year and quarter selected",
                      "Return type marked as Regular (C9) not Correction",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs text-gray-700"
                      >
                        <CheckCircle
                          size={13}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA inside article */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                      Need TDS return help?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your TDS return filing
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team manages challan verification, RPU
                      preparation, FVU validation and portal upload — ensuring
                      your quarterly TDS return is accurate and filed on time,
                      every quarter.
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
                  heading="TDS Return Filing FAQs"
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
                  article is for general educational purposes only. TDS
                  provisions, due dates, software versions and portal
                  procedures are subject to change through Finance Acts,
                  CBDT circulars and departmental notifications. Always verify
                  the current rules on the official income tax portal at
                  incometax.gov.in and the NSDL TIN portal, or consult a
                  qualified tax professional for your specific situation.
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
                      ["#tds-forms", "TDS return forms"],
                      ["#due-dates", "Due dates FY 2024-25"],
                      ["#filing-steps", "Step-by-step filing"],
                      ["#rpu-details", "What to enter in RPU"],
                      ["#penalties", "Penalties & fees"],
                      ["#corrections", "Correction returns"],
                      ["#checklist", "Pre-filing checklist"],
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
                    <MessageCircle size={18} className="text-sky-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    TDS filing help?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    We handle 24Q, 26Q, 27Q and 27EQ filing — RPU, FVU,
                    challan matching and TRACES upload. On time, every
                    quarter.
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
                    href: "/serviceslist/income-tax/itr-salaried",
                    label: "ITR Filing",
                    sub: "Salaried from ₹699",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/form-26as",
                    label: "Form 26AS Guide",
                    sub: "Understand your tax credit statement",
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
                Related Income Tax Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/form-26as",
                  title: "Form 26AS — Your Tax Credit Statement",
                  text: "Understand what Form 26AS contains, how to view it, and how to reconcile TDS credits before filing your ITR.",
                },
                {
                  href: "/guide/itr-blogs/income-tax-slabs",
                  title: "Income Tax Slabs FY 2025-26",
                  text: "New vs old regime slab rates, Section 87A rebate and worked examples for salaried individuals.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Tax Expert",
                  text: "Get CA-assisted TDS return filing, Form 26AS reconciliation and complete ITR filing support.",
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