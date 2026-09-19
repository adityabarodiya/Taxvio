// app/guide/itr-blogs/late-filing-fee-waiver-mca/page.tsx

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
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "MCA Late Filing Fee Waiver: LLP FORM-8 & MGT-7 CFSS Scheme 2024 | Taxvio",
  description:
    "Complete guide to MCA late filing fee waiver under CFSS 2024 — eligibility, how to apply, documents required, forms covered (LLP FORM-8, AOC-4, MGT-7), deadline and step-by-step process for Companies and LLPs.",
  keywords: [
    "MCA late filing fee waiver",
    "CFSS scheme 2024",
    "LLP FORM-8 fee waiver",
    "MGT-7 late filing waiver",
    "AOC-4 penalty waiver",
    "MCA condonation scheme",
    "Companies Fresh Start Scheme",
    "MCA penalty waiver 2024",
    "ROC filing fee waiver",
    "MCA late filing relief",
    "Company annual filing waiver",
    "LLP annual return waiver",
    "MCA V3 portal waiver",
    "Strike off removal scheme",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/late-filing-fee-waiver-mca",
  },
  openGraph: {
    title: "MCA Late Filing Fee Waiver — CFSS 2024 Complete Guide | Taxvio",
    description:
      "Step-by-step guide to apply for MCA late filing fee waiver under CFSS 2024 for Companies and LLPs — forms covered, eligibility, application process and deadlines.",
    url: "https://www.taxvio.in/guide/itr-blogs/late-filing-fee-waiver-mca",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCA Late Filing Fee Waiver — CFSS 2024 Guide",
    description:
      "Everything you need to know about MCA late filing fee waiver under Companies Fresh Start Scheme 2024 — eligibility, process and deadline.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const FORMS_COVERED = [
  {
    form: "AOC-4 / AOC-4 XBRL",
    title: "Annual Financial Statements",
    desc: "Filing of financial statements (Balance Sheet, P&L) with ROC. All companies must file AOC-4 within 30 days of AGM or 6 months from FY end (whichever is earlier). Listed companies use AOC-4 XBRL format.",
    icon: "📊",
    color: "bg-blue-50 border-blue-100 text-blue-700",
    applicableTo: "All Companies",
  },
  {
    form: "MGT-7 / MGT-7A",
    title: "Annual Return",
    desc: "Annual return containing details of shareholding, directors, board meetings, etc. MGT-7 for companies (within 60 days of AGM) and MGT-7A for OPCs and small companies (simplified format).",
    icon: "📋",
    color: "bg-violet-50 border-violet-100 text-violet-700",
    applicableTo: "All Companies",
  },
  {
    form: "ADT-1",
    title: "Appointment of Auditor",
    desc: "Form for appointment of statutory auditor and filing with ROC within 15 days of appointment. Required when auditor is appointed at AGM or board meeting.",
    icon: "👔",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    applicableTo: "All Companies",
  },
  {
    form: "LLP FORM-8",
    title: "LLP Annual Return",
    desc: "Annual return for Limited Liability Partnerships containing details of partners, contribution, business activities. Must be filed within 60 days from closure of financial year (by May 30).",
    icon: "🏢",
    color: "bg-amber-50 border-amber-100 text-amber-700",
    applicableTo: "All LLPs",
  },
  {
    form: "LLP FORM-11",
    title: "LLP Annual Accounts",
    desc: "Statement of Account and Solvency for LLPs. Must be filed within 30 days from the end of 6 months of closure of financial year (by October 30).",
    icon: "📈",
    color: "bg-rose-50 border-rose-100 text-rose-700",
    applicableTo: "All LLPs",
  },
  {
    form: "DIR-3 KYC",
    title: "Director KYC",
    desc: "Annual KYC for all directors holding DIN (Director Identification Number). Required to be filed every year to keep DIN active. Non-filing leads to DIN deactivation.",
    icon: "🆔",
    color: "bg-sky-50 border-sky-100 text-sky-700",
    applicableTo: "All Directors",
  },
];

const ELIGIBILITY_CRITERIA = [
  {
    criteria: "Companies / LLPs with pending annual filings",
    desc: "Any company or LLP that has defaulted in filing AOC-4, MGT-7, LLP FORM-8, LLP FORM-11 or other covered forms for FY 2022-23 or earlier financial years is eligible.",
    icon: Building2,
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    criteria: "Entities facing additional fees or penalties",
    desc: "Companies/LLPs that are liable to pay additional fees due to delayed filing under the Companies Act, 2013 or LLP Act, 2008 can apply for waiver under CFSS 2024.",
    icon: DollarSign,
    color: "bg-amber-50 border-amber-200 text-amber-800",
  },
  {
    criteria: "Struck off companies seeking revival",
    desc: "Companies that have been struck off under Section 248 due to non-filing can apply for restoration along with CFSS waiver, subject to approval by ROC and payment of basic filing fees.",
    icon: RefreshCw,
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  {
    criteria: "Active and compliant from cutoff date",
    desc: "The scheme is available only if all filings due after the cutoff date mentioned in the notification are completed or filed simultaneously with the waiver application.",
    icon: CheckCircle,
    color: "bg-violet-50 border-violet-200 text-violet-800",
  },
];

const SCHEME_TIMELINE = [
  {
    stage: "Notification Issued",
    desc: "Ministry of Corporate Affairs (MCA) issues notification announcing the Companies Fresh Start Scheme (CFSS) or LLP Settlement Scheme with specific applicability, covered forms and deadlines.",
    icon: FileWarning,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    date: "Scheme Start Date",
  },
  {
    stage: "Window Period Opens",
    desc: "MCA V3 portal is updated to allow applications under the scheme. Companies and LLPs can start filing pending forms with normal fees (additional fees and penalties are automatically waived).",
    icon: Upload,
    color: "bg-sky-50 border-sky-200 text-sky-800",
    date: "Day 1 of Scheme",
  },
  {
    stage: "File Pending Forms",
    desc: "Entities must file all pending forms covered under the scheme on MCA portal. Payment is required only for basic filing fees. Additional fees section will show ₹0 or be auto-waived during the scheme period.",
    icon: FileCheck,
    color: "bg-violet-50 border-violet-200 text-violet-800",
    date: "During Scheme Period",
  },
  {
    stage: "Payment of Normal Fees",
    desc: "Pay only the normal (base) filing fees for each form. Additional fees and penalties are waived. For struck off companies, restoration application and fees must also be paid separately.",
    icon: IndianRupee,
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    date: "Before Deadline",
  },
  {
    stage: "ROC Processing",
    desc: "Registrar of Companies (ROC) processes the filed forms. If all documents are in order and fees paid, the forms are approved and the entity becomes compliant. Scrutiny may be done for struck off companies.",
    icon: Search,
    color: "bg-amber-50 border-amber-200 text-amber-800",
    date: "Post Filing",
  },
  {
    stage: "Scheme Closes",
    desc: "After the deadline, the scheme window closes. Any forms filed after the deadline will attract full additional fees and penalties as per normal rules. No further waiver is available.",
    icon: XCircle,
    color: "bg-red-50 border-red-200 text-red-800",
    date: "Scheme End Date",
  },
];

const APPLICATION_STEPS = [
  {
    step: "01",
    title: "Identify all pending forms and financial years",
    desc: "Login to MCA portal (mca.gov.in) using your company/LLP credentials. Check 'View Company/LLP Master Data' to see pending filings, due dates and applicable additional fees. Make a list of all forms pending for FY 2022-23 and earlier.",
    icon: Search,
  },
  {
    step: "02",
    title: "Prepare financial statements and required documents",
    desc: "For AOC-4 and MGT-7, prepare audited financial statements, board resolutions, AGM minutes. For LLP forms, prepare statements of accounts, partner details. Ensure all documents are signed by authorized signatories and certified by CA/CS where required.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Login to MCA V3 portal and start e-filing",
    desc: "Go to MCA Services > E-filing > Company/LLP Forms. Select the appropriate form (e.g., AOC-4, MGT-7, LLP FORM-8). The portal will show the CFSS scheme is active and additional fees will be auto-waived during the scheme period.",
    icon: Upload,
  },
  {
    step: "04",
    title: "Fill form details and attach documents",
    desc: "Enter all mandatory details in the e-form. Attach required attachments (financials, resolutions, certificates). Ensure DSC (Digital Signature Certificate) of authorized signatories is available and valid.",
    icon: FileCheck,
  },
  {
    step: "05",
    title: "Pre-scrutiny and fee calculation",
    desc: "Click 'Pre-scrutinize' to check for errors. After successful pre-scrutiny, proceed to fee payment. The system will show only normal filing fees. Additional fees and penalty will be ₹0 or waived automatically under the scheme.",
    icon: Calculator,
  },
  {
    step: "06",
    title: "Pay normal fees and submit form",
    desc: "Pay the base filing fees via payment gateway (credit/debit card, net banking, challan). After payment, digitally sign the form using DSC and submit. Download and save the acknowledgment receipt (SRN).",
    icon: CheckCircle,
  },
  {
    step: "07",
    title: "Track status and obtain approval",
    desc: "Track filing status on MCA portal under 'Track Your Payment/SRN Status'. ROC will process the form and approve it if all details are correct. Once approved, the entity's compliance status is updated and penalty is waived.",
    icon: Eye,
  },
];

const FEE_COMPARISON = [
  {
    form: "AOC-4 (Non-listed company)",
    normalFee: "₹200 – ₹600",
    additionalFee: "Up to ₹1,00,000",
    underScheme: "₹200 – ₹600 only",
    savings: "Up to ₹99,400",
  },
  {
    form: "MGT-7",
    normalFee: "₹200 – ₹600",
    additionalFee: "Up to ₹1,00,000",
    underScheme: "₹200 – ₹600 only",
    savings: "Up to ₹99,400",
  },
  {
    form: "LLP FORM-8",
    normalFee: "₹200",
    additionalFee: "Up to ₹1,00,000",
    underScheme: "₹200 only",
    savings: "Up to ₹99,800",
  },
  {
    form: "LLP FORM-11",
    normalFee: "₹200",
    additionalFee: "Up to ₹1,00,000",
    underScheme: "₹200 only",
    savings: "Up to ₹99,800",
  },
];

const IMPORTANT_POINTS = [
  {
    point: "Scheme is time-bound — do not miss the deadline",
    detail:
      "CFSS and similar schemes are announced for a limited period only (typically 2-3 months). Once the scheme closes, full additional fees and penalties apply. File all pending forms before the last date mentioned in the notification.",
    icon: "⏰",
    color: "bg-red-50 border-red-100 text-red-800",
  },
  {
    point: "Waiver applies only to additional fees, not normal fees",
    detail:
      "You must still pay the base filing fees for each form. Only the additional fees (delay charges) and penalties are waived. For example, if AOC-4 normal fee is ₹200 and additional fee is ₹10,000, you pay only ₹200 under the scheme.",
    icon: "💰",
    color: "bg-amber-50 border-amber-100 text-amber-800",
  },
  {
    point: "All pending forms must be filed together or in sequence",
    detail:
      "If you have pending filings for multiple years (e.g., FY 2020-21, 2021-22, 2022-23), you must file them in chronological order. You cannot skip years. File all years to become fully compliant.",
    icon: "📅",
    color: "bg-blue-50 border-blue-100 text-blue-800",
  },
  {
    point: "Struck off companies must file separate restoration application",
    detail:
      "If your company has been struck off under Section 248, simply filing pending forms under CFSS is not enough. You must also file Form STK-2 for restoration/revival along with required fees and documents.",
    icon: "🔄",
    color: "bg-violet-50 border-violet-100 text-violet-800",
  },
  {
    point: "Digital signature (DSC) of directors/partners is mandatory",
    detail:
      "All MCA e-forms require digital signature. Ensure that DSC of at least one director (for companies) or designated partner (for LLPs) is active and valid. DSC renewal takes 3-5 days if expired.",
    icon: "🔐",
    color: "bg-emerald-50 border-emerald-100 text-emerald-800",
  },
  {
    point: "Scheme does not waive prosecution or disqualification",
    detail:
      "While CFSS waives additional fees and penalties, it does not grant immunity from prosecution under Section 447 (fraud) or remove director disqualification under Section 164(2). Legal proceedings can continue separately.",
    icon: "⚖️",
    color: "bg-rose-50 border-rose-100 text-rose-800",
  },
];

const FAQS = [
  {
    question: "What is the Companies Fresh Start Scheme (CFSS)?",
    answer:
      "The Companies Fresh Start Scheme (CFSS) is a one-time compliance window provided by the Ministry of Corporate Affairs (MCA) that allows companies and LLPs to file their pending annual returns, financial statements and other statutory forms with waiver of additional fees and penalties. The scheme is announced periodically (last schemes were in 2020, 2022) to help entities become compliant and reduce the backlog of pending filings. Under the scheme, only normal filing fees are payable; all additional fees, late filing fees and penalties are waived.",
  },
  {
    question: "Which forms are covered under the MCA late filing fee waiver scheme?",
    answer:
      "The forms covered vary depending on the specific scheme notification. Typically, the following forms are covered: AOC-4/AOC-4 XBRL (financial statements), MGT-7/MGT-7A (annual return), ADT-1 (auditor appointment), MSC-1 (registered office address), DIR-12 (director changes), LLP FORM-8 (LLP annual return), LLP FORM-11 (LLP statement of accounts), and DIR-3 KYC (director KYC). Always check the latest MCA notification for the exact list of forms covered under the current scheme.",
  },
  {
    question: "Is there a deadline to apply for the late filing fee waiver?",
    answer:
      "Yes. Each CFSS or similar scheme is announced with a specific start date and end date (typically 2-3 months window). For example, if a scheme is announced on January 1, 2024 with a deadline of March 31, 2024, all pending forms must be filed on or before March 31, 2024 to avail the waiver. After the deadline, the portal reverts to normal mode and full additional fees and penalties apply. MCA does not extend deadlines except in rare cases. Therefore, it is critical to file before the last date.",
  },
  {
    question: "Can struck off companies also avail the fee waiver scheme?",
    answer:
      "Yes, struck off companies (companies removed from the register under Section 248 due to non-filing) can file for restoration and simultaneously avail the CFSS waiver. However, they must file Form STK-2 for restoration along with all pending annual filings. The waiver applies to the additional fees on annual forms (AOC-4, MGT-7, etc.), but the restoration application fee and other compliance fees must be paid separately. The Registrar will review the restoration application and may approve it if all filings are up-to-date and fees are paid.",
  },
  {
    question: "Do I need to file all pending years or only the most recent one?",
    answer:
      "You must file all pending years in chronological order. MCA does not allow you to skip years. For example, if you have not filed AOC-4 and MGT-7 for FY 2020-21, 2021-22 and 2022-23, you must file all three years — starting from 2020-21, then 2021-22, then 2022-23. You cannot file only 2022-23 and skip earlier years. The scheme allows waiver of additional fees for all these pending years if filed during the scheme period.",
  },
  {
    question: "What documents are required to file under the waiver scheme?",
    answer:
      "The documents required depend on the form being filed. For AOC-4: audited financial statements (balance sheet, P&L, notes), board resolution approving financials, auditor's report, director's report. For MGT-7: annual return with details of shareholding, directors, board meetings, AGM details, board resolution. For LLP FORM-8: partner details, contribution statement, business activity details. For LLP FORM-11: statement of accounts and solvency, partner certification. Additionally, you need active DSC of authorized signatories and, if applicable, digital signature of statutory auditor (for AOC-4).",
  },
  {
    question: "Will filing under CFSS remove director disqualification?",
    answer:
      "No. Filing pending forms under CFSS will make the company compliant and waive additional fees, but it does not automatically remove director disqualification under Section 164(2). According to Section 164(2), if a director fails to file financial statements or annual returns for three consecutive financial years, they are disqualified from being appointed as a director in any company for the next five years. To remove the disqualification, the director must file Form DIR-3 KYC, ensure all pending filings are completed, and wait for the compliance to reflect on the MCA system. In some cases, a separate application or condonation may be required.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MCA Late Filing Fee Waiver — CFSS 2024 Complete Guide",
  description:
    "A comprehensive guide to MCA late filing fee waiver under Companies Fresh Start Scheme (CFSS) 2024 — covering eligibility, forms covered, application process, documents required, fee comparison and deadline for companies and LLPs.",
  url: "https://www.taxvio.in/guide/itr-blogs/late-filing-fee-waiver-mca",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/late-filing-fee-waiver-mca",
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
  wordCount: 2900,
  inLanguage: "en-IN",
  articleSection: "Corporate Compliance",
  keywords: [
    "MCA fee waiver",
    "CFSS 2024",
    "LLP FORM-8 waiver",
    "AOC-4 penalty waiver",
    "MGT-7 late filing",
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
      name: "MCA Late Filing Fee Waiver",
      item: "https://www.taxvio.in/guide/itr-blogs/late-filing-fee-waiver-mca",
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

export default function MCALateFeeWaiverPage() {
  return (
    <>
      <Script
        id="mca-waiver-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="mca-waiver-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="mca-waiver-faq-schema"
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
                "radial-gradient(circle,rgba(34,197,94,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(59,130,246,0.09) 0%,transparent 65%)",
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
                  MCA Late Filing Fee Waiver
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
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  Limited Time Scheme · CFSS 2024
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  MCA Late Filing
                  <span className="block mt-2 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                    Fee Waiver Scheme
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  The <strong className="text-white">Companies Fresh Start Scheme (CFSS)</strong> and
                  LLP Settlement Scheme allow companies and LLPs to file pending
                  annual returns and financial statements with{" "}
                  <strong className="text-white">complete waiver of additional fees and penalties</strong>.
                  This guide covers eligibility, forms covered, step-by-step
                  application process and important deadlines.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get Filing Assistance <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#application-steps"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    View Process <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick highlights card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Scheme highlights
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Award,
                      title: "100% penalty waiver",
                      text: "Complete waiver of additional fees and late filing penalties on covered forms",
                    },
                    {
                      icon: FileText,
                      title: "Forms covered",
                      text: "AOC-4, MGT-7, LLP FORM-8, LLP FORM-11, ADT-1, DIR-3 KYC and more",
                    },
                    {
                      icon: Timer,
                      title: "Limited time window",
                      text: "Scheme is valid for 2-3 months only — file before the deadline",
                    },
                    {
                      icon: Building2,
                      title: "Who can apply",
                      text: "All companies, LLPs and even struck off entities seeking restoration",
                    },
                    {
                      icon: CheckCircle,
                      title: "Simple process",
                      text: "File pending forms on MCA portal — waiver is applied automatically",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-emerald-300" />
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
                { icon: BadgeCheck, text: "Expert ROC Filing Support" },
                { icon: Shield, text: "100% Compliance Guarantee" },
                { icon: Clock, text: "Quick Turnaround Time" },
                { icon: Star, text: "4.9★ Client Rating" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-emerald-400" /> {text}
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
                  Corporate Compliance Guide
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  What Is the MCA Late Filing Fee Waiver Scheme?
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  The <strong>Companies Fresh Start Scheme (CFSS)</strong> and
                  similar <strong>LLP Settlement Schemes</strong> are periodic
                  compliance windows announced by the Ministry of Corporate Affairs
                  (MCA) that allow companies and Limited Liability Partnerships
                  (LLPs) to file their pending statutory annual returns, financial
                  statements and other mandatory forms with complete waiver of
                  additional fees, late filing fees and penalties that would
                  otherwise be applicable for delayed filing.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Under normal circumstances, when a company or LLP fails to file
                  mandatory forms such as AOC-4 (financial statements), MGT-7
                  (annual return), or LLP FORM-8 (LLP annual return) within the
                  prescribed due dates, the MCA imposes{" "}
                  <strong>additional fees</strong> that escalate with the delay —
                  ranging from ₹10,000 to ₹1,00,000 or more depending on the
                  authorized capital/turnover and duration of delay. Directors and
                  partners can also face disqualification and prosecution.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The CFSS provides a one-time opportunity to regularize all such
                  pending filings by paying only the{" "}
                  <strong>normal (base) filing fees</strong> — typically between
                  ₹200 and ₹600 per form — while the entire additional fee
                  component is waived. This results in significant cost savings
                  (often ₹50,000 to ₹3,00,000 per entity) and allows businesses to
                  become compliant, avoid prosecution, and restore their active
                  status with the Registrar of Companies (ROC).
                </p>

                <InfoBox title="Scheme is announced periodically — not always available" color="amber">
                  <p>
                    MCA announces CFSS or similar schemes once every 1-2 years,
                    typically for a 2-3 month window. The most recent schemes
                    were in 2020 and 2022. There is no guarantee when the next
                    scheme will be announced. When a scheme is active, it is
                    critical to file all pending forms before the deadline —
                    missing the deadline means you pay full penalties.
                  </p>
                </InfoBox>
              </div>

              {/* Forms Covered */}
              <section id="forms-covered" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Eligible filings"
                  heading="Forms Covered Under the Fee Waiver Scheme"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The exact list of forms covered varies with each scheme
                  notification. However, the following forms are typically
                  included in CFSS and LLP Settlement Schemes:
                </p>

                <div className="grid gap-4">
                  {FORMS_COVERED.map(({ form, title, desc, icon, color, applicableTo }) => (
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
                          <div className="flex items-center gap-2 flex-wrap mb-2">
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
                          <p className="text-xs leading-relaxed text-gray-600 mb-2">
                            {desc}
                          </p>
                          <p className="text-[11px] font-semibold text-gray-500">
                            Applicable to: {applicableTo}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Check the official notification for your scheme" color="blue">
                  <p>
                    Each CFSS or LLP scheme is announced via a separate MCA
                    notification (General Circular). The notification specifies
                    the exact forms covered, the financial years eligible, the
                    start and end date of the scheme, and any special conditions.
                    Always refer to the latest notification on mca.gov.in before
                    filing.
                  </p>
                </InfoBox>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Who can apply"
                  heading="Eligibility Criteria for Fee Waiver Scheme"
                  icon={CheckCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Not all entities are automatically eligible for the scheme.
                  Here are the key eligibility conditions:
                </p>

                <div className="space-y-4">
                  {ELIGIBILITY_CRITERIA.map(({ criteria, desc, icon: Icon, color }) => (
                    <div
                      key={criteria}
                      className={`flex gap-4 items-start rounded-2xl border p-5 ${color}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
                        <Icon size={18} className={color.split(" ")[2]} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 mb-1">
                          {criteria}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-600">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="Active companies vs struck off companies" color="green">
                    <p>
                      <strong>Active companies</strong> can directly file pending
                      forms and avail the waiver. <strong>Struck off companies</strong>
                      (removed under Section 248) must first file Form STK-2 for
                      restoration and then file all pending forms. Both can avail
                      the fee waiver if done within the scheme period.
                    </p>
                  </InfoBox>
                  <InfoBox title="LLPs with pending accounts" color="blue">
                    <p>
                      LLPs that have not filed LLP FORM-8 (annual return) or LLP
                      FORM-11 (statement of accounts) for one or more financial
                      years are eligible. The scheme waives penalties for all
                      pending years, but you must file them in chronological order
                      starting from the earliest pending year.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Timeline */}
              <section id="timeline" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Scheme lifecycle"
                  heading="How the Fee Waiver Scheme Works — Timeline"
                  icon={Calendar}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here is the typical timeline from scheme announcement to
                  closure:
                </p>

                <div className="space-y-4">
                  {SCHEME_TIMELINE.map(({ stage, desc, icon: Icon, color, date }) => (
                    <div
                      key={stage}
                      className={`flex gap-4 items-start rounded-2xl border p-5 ${color}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
                        <Icon size={18} className={color.split(" ")[2]} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h3 className="text-sm font-bold text-gray-800">
                            {stage}
                          </h3>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white/70 text-gray-700">
                            {date}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-600">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="No extensions are granted — plan ahead" color="rose">
                  <p>
                    MCA does not extend the scheme deadline except in very rare
                    circumstances (e.g., technical portal issues affecting all
                    users). Do not wait until the last day to file. Start
                    preparing documents at least 2-3 weeks before the deadline.
                    Portal congestion on the last day can cause submission
                    failures.
                  </p>
                </InfoBox>
              </section>

              {/* Application Steps */}
              <section id="application-steps" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step process"
                  heading="How to Apply for MCA Late Filing Fee Waiver"
                  icon={Upload}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Follow these steps to file your pending forms under the fee
                  waiver scheme:
                </p>

                <div className="space-y-4">
                  {APPLICATION_STEPS.map(({ step, title, desc, icon: Icon }) => (
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

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="DSC (Digital Signature) is mandatory" color="amber">
                    <p>
                      All MCA e-forms require digital signature of at least one
                      director (for companies) or designated partner (for LLPs).
                      If your DSC has expired, apply for renewal immediately —
                      it takes 3-5 working days. Without valid DSC, you cannot
                      submit any form.
                    </p>
                  </InfoBox>
                  <InfoBox title="File in chronological order" color="green">
                    <p>
                      If you have pending filings for multiple years (e.g., FY
                      2020-21, 2021-22, 2022-23), you must file them in
                      chronological order. Start with the earliest year and
                      proceed sequentially. MCA system will not accept later
                      years if earlier years are pending.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Fee Comparison */}
              <section id="fee-comparison" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Cost savings"
                  heading="Fee Comparison — Normal vs Under Scheme"
                  icon={IndianRupee}
                />

                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Here's how much you save by filing under the fee waiver scheme:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Form
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Normal Fee
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Additional Fee (Delay)
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Under Scheme
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {FEE_COMPARISON.map(({ form, normalFee, additionalFee, underScheme, savings }) => (
                        <tr key={form} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">
                            {form}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">
                            {normalFee}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-red-600 font-semibold">
                            {additionalFee}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-emerald-600 font-semibold">
                            {underScheme}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-emerald-700 font-bold">
                            {savings}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <InfoBox title="Example: Company with 3 years pending filings" color="blue">
                  <p>
                    A private limited company with pending AOC-4 and MGT-7 for FY
                    2020-21, 2021-22 and 2022-23 would normally pay approximately
                    ₹6,00,000 in additional fees (₹1,00,000 per form × 2 forms ×
                    3 years). Under CFSS, they pay only ₹1,200 to ₹3,600 (normal
                    fees for 6 forms). Total savings: <strong>₹5,96,400 to
                    ₹5,98,800</strong>.
                  </p>
                </InfoBox>
              </section>

              {/* Important Points */}
              <section id="important-points" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Key considerations"
                  heading="Important Points to Remember"
                  icon={AlertCircle}
                />

                <div className="space-y-4 mt-6">
                  {IMPORTANT_POINTS.map(({ point, detail, icon, color }) => (
                    <div
                      key={point}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <h3 className="text-sm font-extrabold text-gray-800 mb-2">
                            {point}
                          </h3>
                          <p className="text-xs leading-relaxed text-gray-600">
                            {detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Documents Required */}
              <section id="documents" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Required attachments"
                  heading="Documents Required for Filing"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-6">
                  The documents required depend on the form being filed:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      form: "AOC-4 (Financial Statements)",
                      docs: [
                        "Audited Balance Sheet and Profit & Loss Account",
                        "Director's Report",
                        "Auditor's Report",
                        "Notes to Accounts",
                        "Board Resolution approving financials",
                        "Digital signature of Director and Auditor",
                      ],
                    },
                    {
                      form: "MGT-7 (Annual Return)",
                      docs: [
                        "Annual return data (shareholding, directors, meetings)",
                        "Certificate from Company Secretary or Director",
                        "Details of AGM (date, time, venue, attendance)",
                        "Board Resolution approving annual return",
                        "Digital signature of Director",
                      ],
                    },
                    {
                      form: "LLP FORM-8 (LLP Annual Return)",
                      docs: [
                        "Details of all partners and their contribution",
                        "Details of LLP's business and accounts",
                        "Designated partner certificate",
                        "Digital signature of Designated Partner",
                      ],
                    },
                    {
                      form: "LLP FORM-11 (Statement of Accounts)",
                      docs: [
                        "Statement of Assets and Liabilities",
                        "Statement of Income and Expenditure",
                        "Statement of Solvency",
                        "Certification by Designated Partner",
                        "CA certification (if accounts are required to be audited)",
                      ],
                    },
                  ].map(({ form, docs }) => (
                    <div
                      key={form}
                      className="border-l-4 border-[#00416a] bg-[#f8fbfd] p-5 rounded-r-2xl"
                    >
                      <h3 className="text-sm font-bold text-gray-800 mb-3">
                        {form}
                      </h3>
                      <ul className="space-y-1.5">
                        {docs.map((doc) => (
                          <li
                            key={doc}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <CheckCircle
                              size={12}
                              className="text-emerald-500 shrink-0 mt-0.5"
                            />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA inside article */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Need help with MCA filings?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your ROC compliance
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our expert team prepares and files all pending annual
                      returns, financial statements and statutory forms under
                      CFSS — ensuring you save maximum penalties and become
                      fully compliant before the deadline.
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
                  heading="MCA Fee Waiver Scheme — FAQs"
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
                  article is for general educational purposes only. MCA schemes,
                  notifications, covered forms and deadlines are subject to
                  change. Always refer to the latest official notification on
                  mca.gov.in before filing. The fee waiver scheme does not grant
                  immunity from prosecution under Sections 447, 448 or other
                  penal provisions of the Companies Act, 2013. Consult a
                  qualified Company Secretary (CS) or Chartered Accountant (CA)
                  for your specific compliance situation.
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
                      ["#forms-covered", "Forms covered"],
                      ["#eligibility", "Eligibility criteria"],
                      ["#timeline", "Scheme timeline"],
                      ["#application-steps", "Application process"],
                      ["#fee-comparison", "Fee comparison"],
                      ["#important-points", "Important points"],
                      ["#documents", "Documents required"],
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
                    <MessageCircle size={18} className="text-emerald-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    MCA filing help?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Expert CS/CA team to file all pending ROC forms under CFSS
                    scheme — save penalties and become compliant.
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
                    href: "/serviceslist/compliance/company-registration",
                    label: "Company Registration",
                    sub: "Pvt Ltd, LLP, OPC filing",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/annual-compliance",
                    label: "Annual Compliance",
                    sub: "ROC filing guide",
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
                Related Corporate Compliance Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/annual-roc-filing",
                  title: "Annual ROC Filing Requirements",
                  text: "Complete guide to AOC-4, MGT-7 and other mandatory annual filings for companies and LLPs.",
                },
                {
                  href: "/guide/itr-blogs/director-kyc",
                  title: "DIR-3 KYC Filing Guide",
                  text: "Step-by-step process to file annual director KYC and avoid DIN deactivation.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Compliance Expert",
                  text: "Get CS/CA-assisted ROC filing, company registration and annual compliance support.",
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
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20help%20with%20MCA%20late%20filing%20fee%20waiver%20scheme`}
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