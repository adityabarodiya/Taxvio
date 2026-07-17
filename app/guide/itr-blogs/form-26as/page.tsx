// app/guide/itr-blogs/form-26as/page.tsx

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
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Form 26AS: What Is It, How to View & Download | Taxvio Guide",
  description:
    "Form 26AS is your consolidated annual tax statement showing TDS, TCS, advance tax, self-assessment tax and high-value transactions. Learn what Form 26AS contains, how to view and download it from the income tax portal, and why it matters for ITR filing.",
  keywords: [
    "Form 26AS",
    "view Form 26AS",
    "download Form 26AS",
    "Form 26AS tax credit statement",
    "Form 26AS income tax",
    "TDS credit Form 26AS",
    "Annual Information Statement AIS",
    "Form 26AS vs AIS",
    "how to check Form 26AS",
    "Form 26AS for ITR filing",
    "Form 26AS TRACES",
    "income tax credit statement",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/form-26as",
  },
  openGraph: {
    title: "Form 26AS: What Is It, How to View & Download | Taxvio",
    description:
      "A complete guide to Form 26AS — your tax credit statement. Learn what it contains, how to view and download it, and why it is critical for ITR filing.",
    url: "https://www.taxvio.in/guide/itr-blogs/form-26as",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Form 26AS: View, Download & Understand Your Tax Credit Statement",
    description:
      "Everything you need to know about Form 26AS — TDS credits, high-value transactions, and how to reconcile before filing your ITR.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const PARTS_OF_26AS = [
  {
    part: "Part A",
    title: "TDS on Salary & Other Income",
    desc: "Details of tax deducted at source by your employer, bank or other deductors — including TAN of the deductor, name, section under which TDS was deducted, total amount paid and TDS deposited.",
    icon: "👔",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    part: "Part A1",
    title: "TDS on Sale of Immovable Property",
    desc: "TDS under Section 194IA deducted by the buyer of property on payments to the seller above ₹50 lakh. Relevant for property sellers checking receipt of TDS credit.",
    icon: "🏠",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    part: "Part A2",
    title: "TDS on Rent of Property (26QC)",
    desc: "Tax deducted at source by tenants paying rent to landlords above ₹50,000 per month under Section 194IB. Filed through Form 26QC.",
    icon: "🏢",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    part: "Part B",
    title: "Tax Collected at Source (TCS)",
    desc: "Tax collected at source under Section 206C — by sellers of specified goods including scrap, motor vehicles above ₹10 lakh, foreign remittance under LRS, and goods sales above ₹50 lakh.",
    icon: "🧾",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    part: "Part C",
    title: "Advance Tax and Self-Assessment Tax",
    desc: "Details of advance tax paid in four instalments and self-assessment tax paid before filing ITR. Shows challan details including BSR code, date and amount.",
    icon: "💰",
    color: "bg-teal-50 border-teal-100 text-teal-700",
  },
  {
    part: "Part D",
    title: "Paid Refunds",
    desc: "Refunds paid to the taxpayer in the relevant assessment year, including the assessment year, amount of refund and interest paid on refund under Section 244A.",
    icon: "↩️",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    part: "Part E",
    title: "High-Value Transactions (AIR / SFT)",
    desc: "Specified Financial Transactions reported by banks, mutual funds, registrars, credit card companies and others — high-value cash deposits, equity purchases, property sales and more.",
    icon: "📊",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    part: "Part F",
    title: "TDS on Sale of Immovable Property by Buyer",
    desc: "Tax deducted and deposited by the buyer through Form 26QB on property purchase transactions above ₹50 lakh, shown in the seller's Form 26AS.",
    icon: "🔑",
    color: "bg-sky-50 border-sky-100 text-sky-700",
  },
  {
    part: "Part G",
    title: "TDS Defaults (Processed Statements Only)",
    desc: "Short deduction, non-deduction, short payment, late deposit and other TDS defaults that have been identified and processed in TRACES against the deductor's TAN.",
    icon: "⚠️",
    color: "bg-orange-50 border-orange-100 text-orange-700",
  },
];

const STEPS_VIEW_INCOME_TAX_PORTAL = [
  {
    step: "01",
    title: "Log in to the Income Tax portal",
    desc: "Visit incometax.gov.in and log in using your PAN, Aadhaar or user ID along with your password.",
  },
  {
    step: "02",
    title: "Go to 'e-File' menu",
    desc: "Click on 'e-File' in the top navigation bar and select 'Income Tax Returns' or navigate to the 'View Form 26AS' option.",
  },
  {
    step: "03",
    title: "Navigate to Annual Tax Statement",
    desc: "Select 'View Annual Tax Statement (Form 26AS / Annual Information Statement)' and confirm the redirect to the TRACES portal.",
  },
  {
    step: "04",
    title: "Login to TRACES",
    desc: "You will be redirected to the TDS Reconciliation Analysis and Correction Enabling System (TRACES) portal. Log in with your PAN credentials.",
  },
  {
    step: "05",
    title: "Select Assessment Year",
    desc: "Choose the assessment year for which you want to view Form 26AS. For income earned in FY 2024-25, select AY 2025-26.",
  },
  {
    step: "06",
    title: "View or download",
    desc: "View Form 26AS online in HTML format or download it as a PDF. The PDF is password-protected. Your date of birth in the format DDMMYYYY is the default password.",
  },
];

const FAQS = [
  {
    question: "What is Form 26AS?",
    answer:
      "Form 26AS is a consolidated Annual Tax Credit Statement issued to every PAN holder by the Income Tax Department. It shows TDS deducted and deposited against your PAN by employers, banks and other deductors, TCS collected by sellers, advance tax and self-assessment tax paid by you, refunds received, and high-value financial transactions reported through the Specified Financial Transaction mechanism. It acts as an official confirmation of taxes linked to your PAN in a given assessment year.",
  },
  {
    question: "How is Form 26AS different from AIS?",
    answer:
      "Form 26AS is the older consolidated tax credit statement that primarily shows TDS, TCS, advance tax, self-assessment tax, refunds and high-value transactions (SFT). The Annual Information Statement (AIS) is a more comprehensive document introduced in 2021 that includes all information in Form 26AS along with additional data such as interest, dividend, securities transactions, mutual fund transactions, foreign remittance information and property purchase data. Both documents should be reviewed before filing the ITR.",
  },
  {
    question: "Why does the TDS in Form 26AS not match my Form 16?",
    answer:
      "Mismatches between Form 26AS and Form 16 are common and can occur for several reasons: the deductor may have used the wrong PAN while filing the TDS return, the TDS may have been deducted but not yet deposited, the TDS return may not yet have been processed by TRACES, or there may be errors in the deductor's TDS return that have not been corrected. If the credit does not appear in Form 26AS, you cannot claim it in your ITR — you should ask your deductor to correct the TDS return and verify again before filing.",
  },
  {
    question: "Can I claim TDS credit in ITR if it is not in Form 26AS?",
    answer:
      "The income tax department primarily allows TDS credit only to the extent it appears in Form 26AS. If credit is missing, the deductor must rectify the TDS return first. Filing an ITR with claimed TDS credit not reflected in Form 26AS can lead to a mismatch notice under Section 143(1) and a demand for the difference. Always verify that your Form 26AS is updated before filing.",
  },
  {
    question: "What is Part E of Form 26AS?",
    answer:
      "Part E of Form 26AS shows high-value financial transactions reported by third-party entities under the Specified Financial Transaction (SFT) or Annual Information Return (AIR) mechanism. Examples include cash deposits above ₹10 lakh in savings accounts, purchase of shares or bonds above ₹10 lakh, property purchases above ₹30 lakh, credit card payments above ₹1 lakh (cash) or ₹10 lakh (other mode), and large mutual fund purchases. These transactions are visible to the income tax department and should be accurately reported in the ITR.",
  },
  {
    question: "How do I download Form 26AS as a PDF?",
    answer:
      "Log in to the income tax portal at incometax.gov.in, navigate to the e-File or View Annual Tax Statement option, log in to TRACES, select the relevant assessment year, and choose the PDF download option. The downloaded PDF is password-protected. The default password is your date of birth in the format DDMMYYYY — for example, a person born on 15 March 1985 would use 15031985 as the password.",
  },
  {
    question: "How often is Form 26AS updated?",
    answer:
      "Form 26AS is updated periodically by TRACES as TDS returns filed by deductors are processed. The frequency of updates depends on when the deductor files the quarterly TDS return and how quickly TRACES processes it. Major updates typically occur after each quarterly TDS return due date — July 31, October 31, January 31 and May 31. Self-assessment tax and advance tax payments generally reflect within a few days of challan deposit.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Form 26AS: What Is It, How to View and Download — Complete Guide",
  description:
    "Form 26AS is your consolidated annual tax credit statement. This guide explains what it contains, how to view and download it, how to reconcile with Form 16 and AIS, and how to resolve mismatches before filing your ITR.",
  url: "https://www.taxvio.in/guide/itr-blogs/form-26as",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/form-26as",
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
  wordCount: 2400,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: ["Form 26AS", "TDS credit", "Annual Tax Statement", "ITR filing", "TRACES"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "ITR Guides", item: "https://www.taxvio.in/guide/itr-blogs" },
    { "@type": "ListItem", position: 3, name: "Form 26AS", item: "https://www.taxvio.in/guide/itr-blogs/form-26as" },
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
    blue:  "border-blue-100  bg-blue-50  text-blue-900",
    green: "border-emerald-100 bg-emerald-50 text-emerald-900",
    amber: "border-amber-100 bg-amber-50 text-amber-900",
    rose:  "border-rose-100  bg-rose-50  text-rose-900",
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

export default function Form26ASPage() {
  return (
    <>
      <Script id="form26as-article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="form26as-breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="form26as-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-[#f8fbfd] font-sans text-gray-800">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.14) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.09) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-14 md:pt-28">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <ChevronRight size={11} className="text-white/25" />
                <li><Link href="/guide/itr-blogs" className="hover:text-white transition">ITR Guides</Link></li>
                <ChevronRight size={11} className="text-white/25" />
                <li className="text-white/80 font-semibold">Form 26AS</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Updated for FY 2024-25 · AY 2025-26
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Form 26AS —
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Your Tax Credit Statement
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  <strong className="text-white">Form 26AS</strong> is your
                  consolidated annual tax credit statement — showing every rupee
                  of TDS deducted, TCS collected, advance tax paid, and
                  high-value transactions linked to your PAN. Learn how to
                  view, download, and reconcile it before filing your ITR.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/serviceslist/income-tax/itr-salaried"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    File Your ITR <ArrowRight size={15} />
                  </Link>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all">
                    Ask a Tax Expert <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick highlights card */}
              <div className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  What Form 26AS shows
                </p>
                <div className="space-y-4">
                  {[
                    { icon: FileText,    title: "TDS credits",             text: "All TDS deducted by employers, banks and others" },
                    { icon: IndianRupee, title: "Advance & self-assessment", text: "Taxes paid directly by you via challan" },
                    { icon: Calculator,  title: "TCS collected",           text: "Tax collected at source on specified transactions" },
                    { icon: Eye,         title: "High-value transactions", text: "SFT data reported by banks, mutual funds and others" },
                    { icon: Download,    title: "Refunds received",        text: "Refunds paid in the relevant assessment year" },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="w-9 h-9 rounded-xl bg-sky-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-sky-300" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-white">{title}</p>
                        <p className="text-xs text-white/55 mt-0.5 leading-relaxed">{text}</p>
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
                { icon: BadgeCheck, text: "CA-Assisted Tax Guidance" },
                { icon: Shield,     text: "Secure & Confidential" },
                { icon: Clock,      text: "Simple Explanations" },
                { icon: Star,       text: "4.9★ Taxvio Rating" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-sky-400" /> {text}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
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
                  What Is Form 26AS and Why Is It Important?
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>Form 26AS</strong> is one of the most important
                  documents in the Indian income tax system. It is a consolidated
                  Annual Tax Credit Statement issued under Rule 31AB of the
                  Income Tax Rules, 1962, maintained against every PAN holder
                  in the TRACES (TDS Reconciliation Analysis and Correction
                  Enabling System) database. Before filing any Income Tax Return,
                  reviewing Form 26AS is not optional — it is essential.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Every time tax is deducted from your salary, bank interest,
                  rent, professional income, or property sale — or collected
                  from you at source on specified transactions — that information
                  is reported to the Income Tax Department by the deductor or
                  collector and matched against your PAN. Form 26AS is the
                  official record of all such tax credits. When you file your
                  ITR and claim TDS credits, the department cross-checks your
                  claim against what appears in Form 26AS. A mismatch results
                  in a deficiency notice or demand.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  In 2021, the Income Tax Department launched the{" "}
                  <strong>Annual Information Statement (AIS)</strong> as a more
                  comprehensive companion to Form 26AS, containing even broader
                  financial data. However, Form 26AS continues to remain the
                  primary document for TDS credit matching during ITR processing.
                </p>

                <InfoBox title="AIS vs Form 26AS — quick distinction" color="blue">
                  <p>
                    Form 26AS focuses on tax credit data — TDS, TCS, advance
                    tax and SFT transactions. AIS is broader and includes
                    interest, dividend, securities transactions, mutual fund
                    transactions, foreign remittance data and property purchase
                    details. Both should be reviewed before filing your ITR.
                  </p>
                </InfoBox>
              </div>

              {/* Parts of 26AS */}
              <section id="parts" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Complete breakdown"
                  heading="Parts of Form 26AS — What Each Section Contains"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Form 26AS is divided into multiple parts, each covering a
                  distinct category of tax credit or financial information. Here
                  is what every part means:
                </p>

                <div className="grid gap-4">
                  {PARTS_OF_26AS.map(({ part, title, desc, icon, color }) => (
                    <div key={part}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-11 h-11 rounded-xl ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} flex items-center justify-center text-xl shrink-0`}>
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} ${color.split(" ")[2]}`}>
                              {part}
                            </span>
                            <h3 className="text-sm font-extrabold text-gray-800">{title}</h3>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to view */}
              <section id="how-to-view" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step process"
                  heading="How to View and Download Form 26AS Online"
                  icon={Eye}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Form 26AS can be accessed directly through the income tax
                  portal. The portal redirects to the TRACES portal where you
                  can view or download the statement. Here is the complete
                  process:
                </p>

                <div className="space-y-4">
                  {STEPS_VIEW_INCOME_TAX_PORTAL.map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5">
                      <div className="w-11 h-11 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-800">{title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="PDF password hint" color="amber">
                    <p>
                      The downloaded Form 26AS PDF is password-protected. The
                      default password is your date of birth in the format{" "}
                      <strong>DDMMYYYY</strong>. For example, if your date of
                      birth is 5 July 1990, the password is{" "}
                      <strong>05071990</strong>.
                    </p>
                  </InfoBox>

                  <InfoBox title="Alternative access via Net Banking" color="green">
                    <p>
                      You can also access Form 26AS through the net banking
                      portals of most major Indian banks, provided your PAN
                      is linked to your bank account. Look for the{" "}
                      &apos;Tax Credit Statement&apos; or &apos;Form 26AS&apos;
                      option under the tax section of your banking portal.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Reconciliation */}
              <section id="reconciliation" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Before filing your ITR"
                  heading="How to Reconcile Form 26AS with Form 16 and AIS"
                  icon={Search}
                />

                <p className="text-sm leading-8 text-gray-600">
                  Reconciling Form 26AS before filing is the most critical ITR
                  preparation step. A mismatch between what you claim and what
                  is reflected in Form 26AS is the most common cause of
                  Section 143(1) demand notices. Follow this reconciliation
                  checklist:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Match salary TDS (Part A) with Form 16",
                      detail: "Compare the TDS amount in Part A of Form 26AS with the TDS figure on your Form 16, Part A. The deductor TAN, amount paid and TDS deposited should match. If your employer's TDS does not appear or the amount differs, contact your HR or accounts department before filing.",
                      icon: "👔",
                    },
                    {
                      title: "Check bank TDS on interest income",
                      detail: "Banks deduct TDS under Section 194A on FD and savings account interest exceeding ₹40,000 per year (₹50,000 for senior citizens). Verify that all bank TDS entries appear in Part A and match the Form 16A certificates issued by your bank.",
                      icon: "🏦",
                    },
                    {
                      title: "Verify property sale TDS in Part A1 or F",
                      detail: "If you sold a property, confirm that the buyer's TDS under Section 194IA appears in your Form 26AS. If the buyer has not yet filed Form 26QB, the credit will be missing. You must follow up with the buyer before filing your ITR to claim the credit.",
                      icon: "🏠",
                    },
                    {
                      title: "Cross-check advance and self-assessment tax (Part C)",
                      detail: "All challan-based tax payments including advance tax instalments and self-assessment tax paid before filing must appear in Part C. Confirm BSR code, challan serial number, date and amount match the challan counterfoils you hold.",
                      icon: "💳",
                    },
                    {
                      title: "Review high-value transactions in Part E",
                      detail: "Part E shows SFT data reported by third parties — large cash deposits, property purchases, equity investments, credit card payments and mutual fund transactions. Every entry in Part E is visible to the income tax department. Ensure all such transactions are accounted for in your ITR to avoid income escaping assessment notices.",
                      icon: "📊",
                    },
                    {
                      title: "Compare with AIS for completeness",
                      detail: "After reviewing Form 26AS, download your AIS from the income tax portal. AIS may contain additional entries — interest income, dividend, securities transactions and foreign remittance — not visible in Form 26AS. Reconcile AIS entries and file feedback on any inaccurate entries before the ITR is processed.",
                      icon: "🔍",
                    },
                  ].map(({ title, detail, icon }) => (
                    <div key={title} className="flex gap-4 items-start border border-gray-100 rounded-2xl p-5 bg-white hover:shadow-sm transition-all">
                      <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center text-xl shrink-0">
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-800">{title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-gray-600">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mismatches */}
              <section id="mismatches" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Common problem"
                  heading="Form 26AS Mismatches — Causes and Solutions"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600">
                  Form 26AS mismatches — where the TDS claimed in your ITR does
                  not match the credit shown in Form 26AS — are the most frequent
                  trigger for Income Tax Department notices. Here are the most
                  common causes and the correct resolution path:
                </p>

                <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full min-w-[580px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide">Cause of mismatch</th>
                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide">Resolution</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        ["Wrong PAN used by deductor in TDS return", "Ask your employer or deductor to file a TDS correction (Conso file) via TRACES to correct the PAN. Verify updated Form 26AS after correction."],
                        ["TDS deducted but not yet deposited by deductor", "Escalate to the deductor to deposit the TDS challan and file the quarterly TDS return. The credit will appear after TRACES processing."],
                        ["TDS return not yet filed by deductor", "Remind the deductor to file the pending quarterly TDS return. The due dates are 31 July, 31 October, 31 January and 31 May."],
                        ["Challan details mapped incorrectly", "The deductor must file a TDS correction statement through TRACES to remap the challan to the correct deductee PAN."],
                        ["Self-assessment challan not updated in Form 26AS", "Challan payments typically reflect within 3–5 working days. If not updated, check OLTAS using the BSR code and serial number on the challan counterfoil."],
                        ["PAN not linked to Aadhaar", "An inoperative PAN causes higher TDS deduction and may trigger data issues in TRACES. Link PAN with Aadhaar on the income tax portal immediately."],
                      ].map(([cause, resolution]) => (
                        <tr key={cause} className="border-b border-gray-100 last:border-0">
                          <td className="px-5 py-4 font-semibold text-gray-800 align-top">{cause}</td>
                          <td className="px-5 py-4 text-gray-600 align-top">{resolution}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <InfoBox title="Never file ITR with unresolved mismatches" color="rose">
                  <p>
                    Filing an ITR and claiming TDS credit that is not visible in
                    Form 26AS will result in a Section 143(1) demand for the
                    mismatch amount. Wait until your Form 26AS is updated with
                    the correct credit before submitting your return.
                  </p>
                </InfoBox>
              </section>

              {/* 26AS vs AIS */}
              <section id="26as-vs-ais" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Important comparison"
                  heading="Form 26AS vs Annual Information Statement (AIS)"
                  icon={Calculator}
                />

                <p className="text-sm leading-8 text-gray-600">
                  Since November 2021, the Income Tax Department makes the Annual
                  Information Statement (AIS) available alongside Form 26AS. The
                  two documents serve related but distinct purposes:
                </p>

                <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide">Feature</th>
                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide">Form 26AS</th>
                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide">AIS</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        ["Primary purpose", "Tax credit matching for TDS, TCS, advance tax", "Comprehensive income and transaction reporting"],
                        ["TDS and TCS data", "Yes", "Yes"],
                        ["Interest income", "Partial (via SFT)", "Complete — from all reportable sources"],
                        ["Dividend income", "Not typically", "Yes — from companies and mutual funds"],
                        ["Securities transactions", "Not typically", "Yes — equity, MF, bonds"],
                        ["Foreign remittance", "Not typically", "Yes — LRS and related transactions"],
                        ["Property purchase/sale", "Partial — SFT data", "More comprehensive"],
                        ["Taxpayer feedback", "Not available", "Available — you can submit corrections"],
                        ["Used during ITR processing", "Primary matching source", "Cross-reference and pre-fill source"],
                      ].map(([feature, as26, ais]) => (
                        <tr key={feature} className="border-b border-gray-100 last:border-0">
                          <td className="px-5 py-4 font-semibold text-gray-800">{feature}</td>
                          <td className="px-5 py-4 text-gray-600">{as26}</td>
                          <td className="px-5 py-4 text-gray-600">{ais}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 text-sm leading-8 text-gray-600">
                  In practical terms, you should review Form 26AS for TDS credit
                  confirmation and AIS for a complete picture of all income and
                  transactions the department is aware of. If AIS shows income
                  you believe is inaccurate, submit feedback on the AIS portal
                  before your return is processed to avoid unnecessary notices.
                </p>
              </section>

              {/* High value transactions */}
              <section id="sft" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Compliance awareness"
                  heading="High-Value Transactions in Part E — Why They Matter"
                  icon={Eye}
                />

                <p className="text-sm leading-8 text-gray-600">
                  Part E of Form 26AS is where many taxpayers are surprised.
                  These entries come from Specified Financial Transaction (SFT)
                  reports filed by banks, brokers, mutual fund registrars,
                  post offices, and registrars of properties. The Income Tax
                  Department uses this data to identify income that may not have
                  been reported in ITR filings.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    { transaction: "Cash deposits above ₹10 lakh", reporter: "Bank or post office", section: "SFT-001" },
                    { transaction: "Credit card payments above ₹1 lakh (cash) or ₹10 lakh (total)", reporter: "Credit card company", section: "SFT-004" },
                    { transaction: "Purchase of equity shares above ₹10 lakh", reporter: "Company or registrar", section: "SFT-005" },
                    { transaction: "Purchase of mutual fund units above ₹10 lakh", reporter: "Mutual fund / registrar", section: "SFT-006" },
                    { transaction: "Sale or purchase of property above ₹30 lakh", reporter: "Registrar or sub-registrar", section: "SFT-012" },
                    { transaction: "Cash deposits above ₹10 lakh in current account in a year", reporter: "Bank", section: "SFT-002" },
                  ].map(({ transaction, reporter, section }) => (
                    <div key={transaction} className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-bold text-indigo-900">{transaction}</p>
                        <span className="text-[10px] font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full shrink-0">
                          {section}
                        </span>
                      </div>
                      <p className="mt-2 text-[11px] text-indigo-700">Reported by: {reporter}</p>
                    </div>
                  ))}
                </div>

                <InfoBox title="All Part E transactions are cross-referenced" color="amber">
                  <p>
                    Every high-value transaction in Part E is known to the
                    Income Tax Department. If you have conducted any such
                    transaction, ensure the source of funds is properly
                    explained and reflected in your ITR. Unexplained large
                    transactions that do not appear in the return are a primary
                    trigger for scrutiny assessment.
                  </p>
                </InfoBox>
              </section>

              {/* CTA inside article */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                      Ready to file your ITR?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio reconcile your Form 26AS and file your return
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team checks Form 26AS, AIS, Form 16 and all TDS
                      credits before filing — ensuring your return is accurate
                      and mismatch-free. Starting ₹699.
                    </p>
                  </div>
                  <Link href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#00416a] transition hover:bg-gray-50">
                    Talk to Taxvio <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Frequently asked questions"
                  heading="Form 26AS FAQs"
                  icon={BookOpen}
                />

                <div className="space-y-3">
                  {FAQS.map(({ question, answer }) => (
                    <details key={question}
                      className="group rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5">
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
                  article is for general educational information only. Tax
                  rules, portal procedures and SFT thresholds are subject to
                  change through Finance Acts and departmental notifications.
                  Always verify the current rules on the official income tax
                  portal at incometax.gov.in or consult a qualified tax
                  professional before filing your ITR.
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
                      ["#parts",           "Parts of Form 26AS"],
                      ["#how-to-view",     "How to view & download"],
                      ["#reconciliation",  "Reconciliation checklist"],
                      ["#mismatches",      "Mismatches & solutions"],
                      ["#26as-vs-ais",     "Form 26AS vs AIS"],
                      ["#sft",             "High-value transactions"],
                      ["#faq",             "FAQs"],
                    ].map(([href, label]) => (
                      <a key={href} href={href}
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-blue-50 hover:text-[#00416a]">
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
                    Need ITR help?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    We review your Form 26AS, reconcile TDS credits and file
                    your ITR accurately. CA-assisted, from ₹699.
                  </p>
                  <Link href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#00416a] transition hover:bg-gray-50">
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
                    href: "/serviceslist/income-tax/itr-proprietor",
                    label: "Proprietor ITR",
                    sub: "Business income from ₹1,999",
                    color: "bg-blue-50 border-blue-100",
                    text: "text-blue-700",
                  },
                ].map(({ href, label, sub, color, text }) => (
                  <Link key={href} href={href}
                    className={`group flex items-center justify-between rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${color}`}>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wide ${text}`}>{label}</p>
                      <p className="mt-1 text-sm font-extrabold text-gray-800">{sub}</p>
                    </div>
                    <ArrowRight size={16} className={`${text} transition group-hover:translate-x-1`} />
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
                  title: "Income Tax Slabs FY 2025-26",
                  text: "New vs old regime slab rates, Section 87A rebate and worked examples.",
                },
                {
                  href: "/serviceslist/income-tax/itr-salaried",
                  title: "ITR Filing for Salaried Individuals",
                  text: "CA-assisted Form 16 based filing, deductions and regime comparison.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Tax Expert",
                  text: "Get Form 26AS reconciliation help and complete ITR filing assistance.",
                },
              ].map(({ href, title, text }) => (
                <Link key={title} href={href}
                  className="group rounded-2xl border border-[#dcebf3] bg-[#f8fbfd] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <FileText size={18} className="text-[#00416a]" />
                    <ArrowRight size={15} className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#00416a]" />
                  </div>
                  <h3 className="mt-4 text-sm font-extrabold text-gray-800 group-hover:text-[#00416a]">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{text}</p>
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