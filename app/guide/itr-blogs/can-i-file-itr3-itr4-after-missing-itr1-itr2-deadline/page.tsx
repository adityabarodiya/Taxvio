// app/guide/itr-blogs/can-i-file-itr3-itr4-after-missing-itr1-itr2-deadline/page.tsx
// app/guide/itr-blogs/can-i-file-itr3-itr4-after-missing-itr1-itr2-deadline/page.tsx

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
  XCircle,
  Ban,
  DollarSign,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Can I File ITR-3/ITR-4 After Missing ITR-1/ITR-2 Deadline? Complete Guide AY 2025-26 | Taxvio",
  description:
    "Missed 31 July ITR-1/ITR-2 deadline? Learn if you can file ITR-3 or ITR-4 by 31 August to avoid penalty, legal implications, Section 139(1) compliance, and correct filing approach for AY 2025-26.",
  keywords: [
    "ITR-3 after ITR-1 deadline",
    "ITR-4 after ITR-2 deadline",
    "missed ITR filing deadline",
    "ITR filing after 31 July",
    "belated return penalty",
    "Section 234F penalty",
    "ITR-1 vs ITR-3",
    "ITR-2 vs ITR-4",
    "wrong ITR form penalty",
    "AY 2025-26 ITR deadline",
    "late ITR filing",
    "can I file wrong ITR form",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/can-i-file-itr3-itr4-after-missing-itr1-itr2-deadline",
  },
  openGraph: {
    title: "Can I File ITR-3/ITR-4 After Missing ITR-1/ITR-2 Deadline? | Taxvio",
    description:
      "Complete guide on whether filing ITR-3 or ITR-4 after missing the 31 July deadline can help avoid penalties — legal position, risks and correct approach for AY 2025-26.",
    url: "https://www.taxvio.in/guide/itr-blogs/can-i-file-itr3-itr4-after-missing-itr1-itr2-deadline",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "File ITR-3/4 After Missing ITR-1/2 Deadline? — AY 2025-26",
    description:
      "Understand the legal and practical implications of filing the wrong ITR form to avoid late filing penalty — risks, consequences and correct options.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const ITR_DEADLINES = [
  {
    form: "ITR-1 (Sahaj)",
    applicability: "Salaried individuals, one house property, other sources income",
    deadline: "31 July 2026",
    color: "bg-blue-50 border-blue-100 text-blue-800",
  },
  {
    form: "ITR-2",
    applicability: "Individuals/HUF with capital gains, multiple house properties, foreign income/assets (no business)",
    deadline: "31 July 2026",
    color: "bg-violet-50 border-violet-100 text-violet-800",
  },
  {
    form: "ITR-3",
    applicability: "Individuals/HUF having income from business/profession",
    deadline: "31 October 2026 (if audit required) or 31 July 2026 (if no audit)",
    color: "bg-amber-50 border-amber-100 text-amber-800",
  },
  {
    form: "ITR-4 (Sugam)",
    applicability: "Individuals/HUF/Firms opting for presumptive taxation under Section 44AD/44ADA/44AE",
    deadline: "31 July 2026",
    color: "bg-emerald-50 border-emerald-100 text-emerald-800",
  },
];

const KEY_POINTS = [
  {
    point: "Filing wrong ITR form does NOT avoid penalty",
    detail: "The Income Tax Act requires you to file the correct ITR form based on your income sources. Filing ITR-3 or ITR-4 when ITR-1 or ITR-2 is applicable is incorrect filing — the return can be deemed defective under Section 139(9).",
    icon: Ban,
    color: "text-rose-600",
  },
  {
    point: "Belated return penalty applies regardless of form",
    detail: "Section 234F penalty of ₹5,000 (₹1,000 if income below ₹5 lakh) applies to any return filed after the due date under Section 139(1), irrespective of which ITR form you use.",
    icon: IndianRupee,
    color: "text-amber-600",
  },
  {
    point: "Department can reject incorrectly filed returns",
    detail: "If you file ITR-3/ITR-4 when you don't have business income or don't qualify for presumptive scheme, the CPC or Assessing Officer can issue a defect notice under Section 139(9) and may reject the return.",
    icon: XCircle,
    color: "text-red-600",
  },
  {
    point: "Correct approach: File belated return in correct form",
    detail: "The legally correct method is to file a belated return under Section 139(4) using the appropriate ITR form (ITR-1 or ITR-2), pay the Section 234F penalty, and ensure compliance.",
    icon: CheckCircle,
    color: "text-emerald-600",
  },
];

const SCENARIOS = [
  {
    scenario: "Salaried individual who missed 31 July deadline",
    correctForm: "ITR-1 (Sahaj)",
    wrongApproach: "Filing ITR-3 claiming fictitious business income",
    risk: "Defective return notice, penalty under Section 270A for misreporting, possible prosecution under Section 277 for false statement, and scrutiny assessment.",
    correctApproach: "File belated ITR-1 under Section 139(4) before 31 December 2025, pay ₹5,000 penalty (or ₹1,000 if total income below ₹5 lakh).",
    color: "bg-rose-50 border-rose-100",
  },
  {
    scenario: "Individual with capital gains who missed 31 July deadline",
    correctForm: "ITR-2",
    wrongApproach: "Filing ITR-4 claiming presumptive business under Section 44AD without actual business",
    risk: "Return treated as defective, disallowance of presumptive scheme benefit, interest under Section 234A/B/C, and potential addition of unexplained investment.",
    correctApproach: "File belated ITR-2 under Section 139(4), declare capital gains correctly, pay applicable tax and penalty.",
    color: "bg-amber-50 border-amber-100",
  },
  {
    scenario: "Freelancer with professional income who genuinely needs ITR-3",
    correctForm: "ITR-3",
    wrongApproach: "Not applicable — this person should file ITR-3",
    risk: "None — ITR-3 is the correct form",
    correctApproach: "File ITR-3 by 31 July 2026 (if no audit required) or by 31 October 2026 (if Section 44AB audit required). If missed, file belated ITR-3 under Section 139(4).",
    color: "bg-emerald-50 border-emerald-100",
  },
];

const PENALTIES_TABLE = [
  {
    section: "Section 234F",
    penalty: "Late Filing Fee",
    amount: "₹5,000 (if total income > ₹5 lakh) or ₹1,000 (if total income ≤ ₹5 lakh)",
    applicability: "Applicable to any return filed after due date under Section 139(1), regardless of ITR form used.",
  },
  {
    section: "Section 234A",
    penalty: "Interest on Tax Due",
    amount: "1% per month from due date till date of filing",
    applicability: "Charged on the tax payable as reduced by TDS/TCS/advance tax. Applies to belated and revised returns.",
  },
  {
    section: "Section 234B",
    penalty: "Interest on Shortfall in Advance Tax",
    amount: "1% per month on shortfall",
    applicability: "If advance tax paid is less than 90% of assessed tax. Computed automatically and cannot be avoided by filing wrong form.",
  },
  {
    section: "Section 270A",
    penalty: "Penalty for Misreporting/Under-reporting",
    amount: "50% of tax on under-reported income (200% if misreporting)",
    applicability: "Applies if wrong form filing leads to lower tax liability or false disclosure. Can be levied in scrutiny assessments.",
  },
];

const FAQS = [
  {
    question: "Can I file ITR-3 instead of ITR-1 to get extra time till 31 October?",
    answer:
      "No. ITR-3 with a 31 October due date applies only to taxpayers whose accounts are required to be audited under Section 44AB. If you are a salaried individual without business income and no audit requirement, filing ITR-3 is incorrect. The return may be treated as defective under Section 139(9), and you will still be liable for late filing penalty. Moreover, the extended deadline of 31 October for ITR-3 is only for those subject to tax audit — not for general taxpayers trying to avoid the 31 July deadline.",
  },
  {
    question: "What happens if I file ITR-4 instead of ITR-2 after 31 July?",
    answer:
      "ITR-4 (Sugam) is meant for taxpayers opting for presumptive taxation under Sections 44AD, 44ADA or 44AE. If you do not have business or professional income eligible for presumptive taxation, filing ITR-4 is incorrect. The CPC may issue a defect notice under Section 139(9) asking you to file the correct form. If you do not rectify within 15 days, your return can be treated as invalid. Additionally, you will still be liable for Section 234F penalty as the return was filed after the original due date of 31 July.",
  },
  {
    question: "Will filing the wrong ITR form help me avoid Section 234F penalty?",
    answer:
      "No. Section 234F penalty applies to any return filed after the due date specified in Section 139(1), irrespective of the ITR form number used. The due date is determined by your income type and applicability, not by which form you choose to file. Filing an incorrect form does not reset or extend the due date — it only creates additional compliance issues and the risk of defective return proceedings.",
  },
  {
    question: "Can the Income Tax Department reject my return if I file the wrong ITR form?",
    answer:
      "Yes. Under Section 139(9), if a return is found to be defective — which includes filing the wrong ITR form or omitting material information — the CPC or Assessing Officer can issue a notice giving you 15 days to rectify the defect. If the defect is not rectified, the return is treated as an invalid return. This means you are deemed to have not filed any return at all, leading to potential prosecution under Section 276CC for failure to file return, in addition to penalties and interest.",
  },
  {
    question: "What is the correct way to file ITR after missing the 31 July deadline?",
    answer:
      "The correct and legal way is to file a belated return under Section 139(4) using the appropriate ITR form based on your actual income sources. For example, if you are a salaried individual, file ITR-1; if you have capital gains, file ITR-2; if you have business income, file ITR-3; if you qualify for presumptive taxation, file ITR-4. Belated returns can be filed up to 31 December of the assessment year. You will have to pay Section 234F penalty and interest under Sections 234A/B/C as applicable, but your return will be valid and compliant.",
  },
  {
    question: "What are the consequences of falsely showing business income to file ITR-3?",
    answer:
      "Showing fictitious or inflated business income to justify filing ITR-3 when you don't have actual business income is considered misreporting under Section 270A. This can attract penalty of 50% to 200% of tax on misreported income. Additionally, it can lead to scrutiny assessment, addition of unexplained income, and even prosecution under Section 277 for furnishing false information. The risk far outweighs any perceived benefit of extending the filing deadline.",
  },
  {
    question: "Can I file ITR-4 by showing presumptive income under Section 44AD if I missed ITR-1 deadline?",
    answer:
      "Only if you genuinely have business income and meet the eligibility criteria for Section 44AD (turnover below ₹2 crore, not in specified professions, and opt for presumptive scheme). You cannot artificially create business income just to file ITR-4. The Income Tax Department cross-verifies business income claims with GST returns, bank statements, and TDS data. False claims can result in disallowance, penalty, and prosecution. If you are a salaried person without business income, you must file ITR-1 as a belated return.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Can I File ITR-3 or ITR-4 After Missing ITR-1/ITR-2 Deadline to Avoid Penalty?",
  description:
    "A comprehensive legal analysis of whether filing ITR-3 or ITR-4 after missing the 31 July deadline for ITR-1 or ITR-2 can help avoid late filing penalty — covering Section 139, defective returns, penalties, and correct belated filing approach for AY 2025-26.",
  url: "https://www.taxvio.in/guide/itr-blogs/can-i-file-itr3-itr4-after-missing-itr1-itr2-deadline",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/can-i-file-itr3-itr4-after-missing-itr1-itr2-deadline",
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
  datePublished: "2025-06-15",
  dateModified: "2025-06-15",
  wordCount: 3200,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: [
    "ITR deadline",
    "belated return",
    "Section 234F",
    "wrong ITR form",
    "ITR-3 after deadline",
    "AY 2025-26",
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
      name: "ITR-3/ITR-4 After Missing Deadline",
      item: "https://www.taxvio.in/guide/itr-blogs/can-i-file-itr3-itr4-after-missing-itr1-itr2-deadline",
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

export default function ITRDeadlineMissedPage() {
  return (
    <>
      <Script
        id="itr-deadline-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="itr-deadline-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="itr-deadline-faq-schema"
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
                "radial-gradient(circle,rgba(239,68,68,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(251,191,36,0.09) 0%,transparent 65%)",
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
                  ITR-3/ITR-4 After Missing Deadline
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.25)",
                  }}
                >
                  <AlertCircle size={13} className="text-rose-300" />
                  Critical Compliance Issue — AY 2025-26
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Can I File ITR-3 or ITR-4
                  <span className="block mt-2 bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent">
                    After Missing ITR-1/ITR-2 Deadline?
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Missed the 31 July 2026 deadline for ITR-1 or ITR-2? Many
                  taxpayers wonder if filing{" "}
                  <strong className="text-white">ITR-3 or ITR-4</strong> by 31
                  October can help avoid the ₹5,000 late filing penalty. This
                  guide covers the <strong className="text-white">legal reality</strong>, risks, penalties and the{" "}
                  <strong className="text-white">correct approach</strong> to
                  belated filing.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get Expert ITR Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/serviceslist/income-tax/itr-salaried"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    File Belated Return <Clock size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick answer card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(239,68,68,0.12)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                    <XCircle size={20} className="text-rose-300" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                    Short Answer
                  </p>
                </div>
                
                <h3 className="text-lg font-extrabold text-white mb-4">
                  No — Filing the Wrong ITR Form Does NOT Help
                </h3>

                <div className="space-y-3">
                  {[
                    "Section 234F penalty applies regardless of which ITR form you use",
                    "Filing wrong form = defective return under Section 139(9)",
                    "CPC can reject the return and treat it as not filed",
                    "Risk of penalty under Section 270A for misreporting",
                    "Correct approach: File belated return in the right form",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 text-xs text-white/80"
                    >
                      <Ban size={13} className="text-rose-400 shrink-0 mt-0.5" />
                      {point}
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
                { icon: BadgeCheck, text: "CA-Verified Information" },
                { icon: Shield, text: "Section 139 Compliant" },
                { icon: Clock, text: "Updated for AY 2025-26" },
                { icon: Star, text: "10,000+ Belated Returns Filed" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-rose-400" /> {text}
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
                  Income Tax Compliance
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Understanding the ITR Filing Deadline Dilemma
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  Every year, thousands of taxpayers miss the <strong>31 July
                  deadline</strong> for filing ITR-1 (Sahaj) or ITR-2. Faced with
                  the prospect of paying a <strong>₹5,000 late filing fee</strong> under
                  Section 234F, many search for ways to avoid the penalty. A common
                  misconception circulating online and through word-of-mouth is
                  that filing <strong>ITR-3</strong> (which has a due date of 31 October
                  for audited cases) or <strong>ITR-4</strong> instead can provide extra
                  time and help escape the penalty.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This guide provides a <strong>legally accurate</strong> answer to
                  the question: <em>Can I file ITR-3 or ITR-4 after missing the
                  ITR-1/ITR-2 deadline to save on penalty?</em> We will examine the
                  relevant provisions of the Income Tax Act, the concept of defective
                  returns, the penalties involved, and the correct procedure for
                  filing a belated return.
                </p>

                <InfoBox title="Deadline reality for AY 2025-26" color="rose">
                  <p className="mb-2">
                    <strong>ITR-1 and ITR-2:</strong> Due date is <strong>31 July 2026</strong> for
                    individual taxpayers (not subject to audit).
                  </p>
                  <p className="mb-2">
                    <strong>ITR-3:</strong> Due date is <strong>31 August 2026</strong> if no audit
                    is required. If your accounts are required to be audited under
                    Section 44AB, the due date is <strong>31 October 2026</strong>.
                  </p>
                  <p>
                    <strong>ITR-4 (Sugam):</strong> Due date is <strong>31 August 2026</strong> for
                    taxpayers opting for presumptive taxation (Sections 44AD/44ADA/44AE).
                  </p>
                </InfoBox>
              </div>

              {/* ITR Deadlines Overview */}
              <section id="deadlines" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Due dates AY 2025-26"
                  heading="ITR Form-Wise Filing Deadlines"
                  icon={Calendar}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The due date for filing an Income Tax Return is determined by
                  the nature of your income, not by which ITR form number you
                  choose to use. Here's the breakdown for AY 2025-26 (FY 2024-25):
                </p>

                <div className="grid gap-4">
                  {ITR_DEADLINES.map(({ form, applicability, deadline, color }) => (
                    <div
                      key={form}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color
                                .split(" ")
                                .slice(0, 2)
                                .join(" ")} border ${
                                color.split(" ")[1]
                              } ${color.split(" ")[2]}`}
                            >
                              {form}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-gray-600 mb-3">
                            {applicability}
                          </p>
                          <div className="flex items-center gap-2">
                            <Clock size={13} className="text-gray-400" />
                            <p className="text-xs font-bold text-gray-700">
                              Due date: {deadline}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Tax audit determines ITR-3 deadline — not your choice" color="amber">
                  <p>
                    The 31 October deadline for ITR-3 applies <strong>only if</strong> your
                    accounts are required to be audited under Section 44AB (business
                    turnover exceeds ₹1 crore, or professional receipts exceed ₹50 lakh,
                    or you opt out of presumptive taxation). If you are not subject to
                    tax audit, your ITR-3 due date is still 31 July — the same as ITR-1/2/4.
                  </p>
                </InfoBox>
              </section>

              {/* Key legal points */}
              <section id="key-points" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Legal position"
                  heading="Why Filing Wrong ITR Form Does Not Help — Four Critical Points"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here are the core legal and practical reasons why filing ITR-3 or
                  ITR-4 instead of ITR-1 or ITR-2 after missing the deadline is not
                  a valid penalty-avoidance strategy:
                </p>

                <div className="space-y-4">
                  {KEY_POINTS.map(({ point, detail, icon: Icon, color }) => (
                    <div
                      key={point}
                      className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0`}>
                        <Icon size={18} className={color} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                          {point}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-600">
                          {detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 139 Explanation */}
              <section id="section-139" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Legal framework"
                  heading="Section 139 — Return Filing and Defective Returns"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600">
                  Section 139 of the Income Tax Act, 1961 is the master provision
                  governing the filing of Income Tax Returns. Understanding its
                  sub-sections is critical to appreciating why filing the wrong
                  ITR form is non-compliant:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      sub: "Section 139(1)",
                      title: "Return of income — due date",
                      detail:
                        "Every person whose total income exceeds the basic exemption limit must file a return of income on or before the due date. The due date is 31 July for individuals not subject to audit, and 31 October for those requiring audit under Section 44AB. This is a mandatory filing, and the return must be in the prescribed form applicable to the assessee's income.",
                    },
                    {
                      sub: "Section 139(4)",
                      title: "Belated return",
                      detail:
                        "If you fail to file the return within the due date specified in Section 139(1), you can file a belated return at any time before the end of the relevant assessment year (i.e., before 31 March 2026 for AY 2025-26) or before completion of assessment, whichever is earlier. However, a belated return attracts late filing fee under Section 234F.",
                    },
                    {
                      sub: "Section 139(5)",
                      title: "Revised return",
                      detail:
                        "If you discover any omission or wrong statement in a return already filed, you can file a revised return. A revised return must be filed within the time limit specified — currently before the end of the assessment year or before completion of assessment. A revised return does not apply when the original return was not filed at all.",
                    },
                    {
                      sub: "Section 139(9)",
                      title: "Defective return",
                      detail:
                        "If a return filed under Section 139 is found to be defective — meaning it does not comply with the provisions of Section 139(1), such as using the wrong ITR form, omitting material information, not attaching required documents, or failing to report all income — the Assessing Officer or CPC may issue a notice treating the return as defective. The taxpayer is given 15 days to rectify the defect. If not rectified, the return is treated as an invalid return — meaning it is deemed never to have been filed.",
                    },
                  ].map(({ sub, title, detail }) => (
                    <div
                      key={sub}
                      className="border border-gray-100 rounded-2xl p-5 bg-white hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#00416a] text-white">
                          {sub}
                        </span>
                        <h3 className="text-sm font-bold text-gray-800">
                          {title}
                        </h3>
                      </div>
                      <p className="text-xs leading-relaxed text-gray-600">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                <InfoBox title="Wrong ITR form = defective return" color="rose">
                  <p>
                    Rule 12 of the Income Tax Rules, 1962 prescribes which ITR form
                    is applicable for which category of taxpayer. Filing a return
                    in the wrong ITR form — for example, filing ITR-3 when you have
                    only salary income — is a violation of Rule 12 and makes your
                    return defective under Section 139(9). The CPC routinely issues
                    defect notices for such cases.
                  </p>
                </InfoBox>
              </section>

              {/* Real scenarios */}
              <section id="scenarios" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Practical examples"
                  heading="Common Scenarios — What Happens When You File the Wrong Form"
                  icon={Search}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Let's examine what happens in real-world scenarios when taxpayers
                  attempt to file ITR-3 or ITR-4 instead of the correct form after
                  missing the 31 July deadline:
                </p>

                <div className="space-y-4">
                  {SCENARIOS.map(({ scenario, correctForm, wrongApproach, risk, correctApproach, color }) => (
                    <div
                      key={scenario}
                      className={`rounded-2xl border p-5 ${color}`}
                    >
                      <h3 className="text-sm font-extrabold text-gray-800 mb-3">
                        {scenario}
                      </h3>

                      <div className="space-y-3 text-xs leading-relaxed text-gray-600">
                        <div>
                          <span className="font-bold text-emerald-700">✓ Correct form:</span>{" "}
                          {correctForm}
                        </div>
                        <div>
                          <span className="font-bold text-rose-700">✗ Wrong approach:</span>{" "}
                          {wrongApproach}
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 border border-rose-100">
                          <span className="font-bold text-rose-700">⚠ Risk:</span>{" "}
                          {risk}
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 border border-emerald-100">
                          <span className="font-bold text-emerald-700">✓ Correct approach:</span>{" "}
                          {correctApproach}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Penalties table */}
              <section id="penalties" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Financial consequences"
                  heading="Penalties and Interest for Late or Wrong ITR Filing"
                  icon={DollarSign}
                />

                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Filing a belated return or filing the wrong ITR form can attract
                  multiple penalties and interest charges. Here's a comprehensive
                  breakdown:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 rounded-xl">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="p-3 text-left font-bold">Section</th>
                        <th className="p-3 text-left font-bold">Type</th>
                        <th className="p-3 text-left font-bold">Amount</th>
                        <th className="p-3 text-left font-bold">Applicability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PENALTIES_TABLE.map(({ section, penalty, amount, applicability }, idx) => (
                        <tr
                          key={section}
                          className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="p-3 font-bold text-[#00416a]">{section}</td>
                          <td className="p-3 font-semibold text-gray-800">{penalty}</td>
                          <td className="p-3 text-gray-700">{amount}</td>
                          <td className="p-3 text-gray-600 leading-relaxed">{applicability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <InfoBox title="Section 234F is automatic" color="amber">
                    <p>
                      Unlike penalties under Section 271 or 270A which require an
                      order from the Assessing Officer, Section 234F fee is computed
                      automatically and must be paid at the time of filing the belated
                      return. The portal will not accept your return until the fee is paid.
                    </p>
                  </InfoBox>

                  <InfoBox title="Interest cannot be avoided" color="rose">
                    <p>
                      Sections 234A, 234B and 234C interest are mandatory and
                      calculated automatically based on the tax liability and timing
                      of payment. Filing the wrong ITR form does not exempt you from
                      interest — it only adds the risk of additional penalties.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Correct approach */}
              <section id="correct-approach" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Compliance roadmap"
                  heading="The Correct Way to File a Belated Return"
                  icon={CheckCircle}
                />

                <p className="text-sm leading-8 text-gray-600">
                  If you have missed the 31 July 2026 deadline for ITR-1 or ITR-2,
                  here is the legally compliant and risk-free approach:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Determine the correct ITR form",
                      detail:
                        "Identify which ITR form applies to your income profile. Use ITR-1 if you have salary, one house property and other sources. Use ITR-2 if you have capital gains, multiple house properties or foreign assets/income (but no business income). Use ITR-3 if you have business or professional income. Use ITR-4 only if you have business/professional income and qualify for presumptive taxation under Sections 44AD/44ADA/44AE.",
                    },
                    {
                      step: "02",
                      title: "Login to the income tax e-filing portal",
                      detail:
                        "Visit incometax.gov.in and log in using your PAN and password. Navigate to e-File > Income Tax Returns > File Income Tax Return.",
                    },
                    {
                      step: "03",
                      title: "Select the correct ITR form and AY 2025-26",
                      detail:
                        "Choose the appropriate ITR form based on step 1. Select Assessment Year 2025-26 (Financial Year 2024-25). Choose Filing Type as 'Original' if this is your first return for this AY. Select Mode of Filing as 'Online' (for ITR-1/4) or upload JSON/XML (for ITR-2/3).",
                    },
                    {
                      step: "04",
                      title: "Fill in all income details accurately",
                      detail:
                        "Enter all income sources — salary (as per Form 16), house property income, capital gains, other sources like bank interest, dividend, etc. Ensure all TDS credits from Form 26AS are correctly claimed. Report any exempt income in the appropriate schedule.",
                    },
                    {
                      step: "05",
                      title: "Compute tax liability and pay Section 234F fee",
                      detail:
                        "The portal will automatically compute your tax liability and applicable interest under Sections 234A/B/C. If you are filing after 31 July 2025, Section 234F late filing fee (₹5,000 or ₹1,000 depending on total income) will be added. Pay the total tax, interest and fee using Challan 280 before submitting the return.",
                    },
                    {
                      step: "06",
                      title: "Verify the return within 30 days",
                      detail:
                        "After submitting the return, you must verify it within 30 days. Verification can be done through Aadhaar OTP, EVC (Electronic Verification Code) via net banking, or by sending a signed ITR-V to CPC Bengaluru by post. An unverified return is treated as not filed.",
                    },
                    {
                      step: "07",
                      title: "Track processing on the portal",
                      detail:
                        "Once verified, your return is sent for processing to the Centralized Processing Centre (CPC). Processing typically takes 2–4 weeks. You will receive an intimation under Section 143(1) confirming acceptance or highlighting any discrepancies. Check your registered email and portal dashboard regularly.",
                    },
                  ].map(({ step, title, detail }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-emerald-50 border border-emerald-100 rounded-2xl p-5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-1">
                          {title}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-600">
                          {detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Belated return deadline: 31 December 2025" color="green">
                  <p>
                    For AY 2025-26, a belated return under Section 139(4) can be filed
                    up to <strong>31 December 2025</strong> (end of the assessment year)
                    or before completion of assessment, whichever is earlier. Do not
                    delay beyond this date — after 31 December, you cannot file a return
                    for AY 2025-26 unless the department issues a notice under Section
                    148 (reassessment).
                  </p>
                </InfoBox>
              </section>

              {/* CTA inside article */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                      Missed the deadline?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      File your belated return with Taxvio
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team will help you file the correct ITR form, compute
                      all penalties and interest accurately, and ensure your belated
                      return is accepted without defect notices — all within 24 hours.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    Get Started Now <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Frequently asked questions"
                  heading="Belated ITR Filing FAQs"
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

              {/* Summary checklist */}
              <section id="checklist" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Quick reference"
                  heading="Belated ITR Filing Checklist"
                  icon={CheckCircle}
                />

                <div className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Determine correct ITR form based on income type",
                      "Do NOT file wrong form to get extended deadline",
                      "Login to incometax.gov.in with PAN credentials",
                      "Select AY 2025-26 and correct ITR form",
                      "Report all income as per Form 16 and Form 26AS",
                      "Claim all eligible deductions under Chapter VI-A",
                      "Compute tax liability using portal calculator",
                      "Pay Section 234F penalty (₹5,000 or ₹1,000)",
                      "Pay any tax due plus interest under 234A/B/C",
                      "Submit return and note acknowledgement number",
                      "Verify return within 30 days (Aadhaar OTP or ITR-V)",
                      "Track processing status on e-filing portal",
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

              {/* Disclaimer */}
              <div className="mt-12 pt-7 border-t border-gray-100">
                <p className="text-xs leading-6 text-gray-500">
                  <strong className="text-gray-700">Disclaimer:</strong> This
                  article is for general educational and informational purposes
                  only. Tax laws, ITR forms, due dates and penalties are subject
                  to change through Finance Acts, CBDT notifications and judicial
                  decisions. The information provided here is based on the Income
                  Tax Act, 1961 and Rules as applicable for Assessment Year
                  2025-26. For personalized tax advice specific to your situation,
                  consult a qualified Chartered Accountant or tax professional.
                  Taxvio does not assume legal liability for actions taken based
                  solely on this content.
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
                      ["#deadlines", "ITR deadlines AY 2025-26"],
                      ["#key-points", "Why wrong form doesn't help"],
                      ["#section-139", "Section 139 explained"],
                      ["#scenarios", "Real-world scenarios"],
                      ["#penalties", "Penalties & interest"],
                      ["#correct-approach", "How to file belated return"],
                      ["#checklist", "Filing checklist"],
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
                    <Clock size={18} className="text-rose-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    File belated return today
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Expert CA assistance for belated ITR filing — correct form
                    selection, penalty computation and hassle-free e-filing in
                    24 hours.
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
                    label: "ITR-1 Filing",
                    sub: "Salaried from ₹699",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/income-tax-slabs",
                    label: "Tax Slabs AY 25-26",
                    sub: "New vs old regime rates",
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
                  href: "/guide/itr-blogs/income-tax-slabs",
                  title: "Income Tax Slabs AY 2025-26",
                  text: "Complete new vs old regime comparison, Section 87A rebate and tax computation examples.",
                },
                {
                  href: "/guide/itr-blogs/form-26as",
                  title: "Form 26AS — Tax Credit Statement",
                  text: "Understand TDS credits, how to download and reconcile before filing your ITR.",
                },
                {
                  href: "/contact",
                  title: "Get Expert ITR Filing Help",
                  text: "CA-assisted belated return filing, penalty computation and compliance support.",
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