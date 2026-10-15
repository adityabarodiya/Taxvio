// app/serviceslist/income-tax/lower-tds-certificate/LowerTDSCertificateClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";
import InquiryForm from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lower TDS Certificate (Section 197) - Application & Advisory Services",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  description:
    "Professional assistance for applying Lower TDS Certificate under Section 197 of Income Tax Act. Eligibility assessment, Form 13 preparation, supporting calculations, income estimation, follow-up with tax authorities. Ideal for individuals, contractors, professionals with lower tax liability. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Lower TDS Certificate Application",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "7999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Lower TDS Certificate under Section 197?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Lower TDS Certificate (issued under Section 197 of Income Tax Act) is an official certificate from the Income Tax Department that allows a taxpayer to request deduction of tax at source (TDS) at a lower rate or nil rate, instead of the standard prescribed rates. This is granted when the taxpayer's estimated total tax liability for the financial year is lower than the TDS that would be deducted at normal rates.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible to apply for Lower TDS Certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any resident individual, HUF, firm, or company can apply for Lower TDS Certificate if their estimated tax liability for the year is NIL or lower than the TDS that would be deducted at normal rates. Common applicants include: senior citizens with income below taxable limit, individuals with losses or deductions reducing tax liability, contractors with low profit margins, professionals with high expenses, and investors with income below exemption limit.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a Lower TDS Certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Processing time for Lower TDS Certificate typically ranges from 15 to 45 days from the date of application submission, depending on the workload at the jurisdictional Assessing Officer's office. The certificate is usually valid for one financial year. Taxvio provides complete follow-up support to expedite processing and address any queries from the tax department.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function LowerTDSCertificateClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <InquiryForm />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          💰 Improve Cash Flow — Apply for Lower/Nil TDS Certificate & Reduce Tax Deductions on Your Income
        </div>

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">
                Services
              </Link>
              <span>/</span>
              <Link
                href="/serviceslist/income-tax"
                className="hover:text-white transition"
              >
                Income Tax
              </Link>
              <span>/</span>
              <span className="text-white">Lower TDS Certificate</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  💰 Section 197 Certificate
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Lower TDS Certificate
                  <br />
                  <span className="text-[#7ecbf0]">Section 197</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Are you a <strong className="text-white">contractor</strong>,{" "}
                  <strong className="text-white">professional</strong>, or{" "}
                  <strong className="text-white">investor</strong> facing high TDS
                  deductions despite having{" "}
                  <strong className="text-white">low or NIL tax liability</strong>?
                  A <strong className="text-white">Lower TDS Certificate</strong>{" "}
                  under Section 197 allows you to get TDS deducted at a{" "}
                  <strong className="text-white">reduced rate or zero</strong> —
                  improving your cash flow and reducing refund waiting time.{" "}
                  <strong className="text-white">Taxvio</strong> provides complete
                  application support — eligibility assessment, Form 13 preparation,
                  income estimation, supporting calculations, documentation, and
                  follow-up with tax authorities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Apply for Certificate — ₹2,999 →
                  </Link>
                 
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Eligibility Assessment",
                    "✅ Form 13 Preparation",
                    "✅ Income Calculation",
                    "✅ Authority Follow-Up",
                  ].map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Quick Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "Form 13 application to Assessing Officer"],
                    ["⏱️", "Processing time: 15-45 days"],
                    ["📅", "Valid for current financial year"],
                    ["💰", "Reduces TDS deduction immediately"],
                    ["💼", "Improves cash flow for businesses"],
                    ["🚀", "Application fee: ₹2,999 onwards"],
                  ].map(([icon, text]) => (
                    <li key={text as string} className="flex items-start gap-3">
                      <span className="text-base">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "500+", label: "Certificates Processed", icon: "✅" },
              { number: "15-45 Days", label: "Typical Processing", icon: "⏰" },
              { number: "1 Year", label: "Certificate Validity", icon: "📅" },
              { number: "₹2,999", label: "Starting Fee", icon: "💰" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {s.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ Expert Eligibility Check",
              "✔ Complete Documentation",
              "✔ Authority Follow-Up",
              "✔ Fast Processing",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* WHAT IS LOWER TDS CERTIFICATE */}
          <section id="what-is-certificate">
            <SectionLabel text="Understanding Section 197" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Lower TDS Certificate (Section 197)?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>Lower TDS Certificate</strong> is an official
                  certificate issued by the <strong>Assessing Officer</strong> (AO)
                  under <strong>Section 197 of the Income Tax Act, 1961</strong>,
                  which allows a taxpayer (resident individual, HUF, firm, or
                  company) to request that tax be deducted at source (TDS) at a{" "}
                  <strong>lower rate than the prescribed rates</strong> — or at{" "}
                  <strong>NIL rate</strong> — on specified types of income.
                </p>
                <p>
                  Normally, when you receive certain types of income (salary,
                  interest, rent, professional fees, contractor payments, etc.), the
                  payer (employer, bank, tenant, client) is required to deduct TDS
                  at rates specified in the Income Tax Act (ranging from 1% to 30%
                  depending on the nature of income). This TDS is deposited with the
                  government on your behalf.
                </p>
                <p>
                  However, if your <strong>total estimated tax liability</strong>{" "}
                  for the financial year is <strong>NIL or very low</strong> (due to
                  deductions under Section 80C, 80D, losses, low income, etc.), the
                  standard TDS deduction results in:
                </p>
                <ul className="space-y-2 ml-6">
                  {[
                    "Significant cash flow problems (especially for contractors and professionals)",
                    "Long waiting time for tax refund (up to 12 months)",
                    "Unnecessary blocking of your working capital",
                    "Interest loss on the excess TDS amount",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-red-500 font-bold mt-0.5">⚠</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p>
                  To address this, <strong>Section 197</strong> allows you to apply
                  to the Assessing Officer for a certificate that authorizes the
                  deductor (payer) to deduct TDS at a{" "}
                  <strong>lower rate or zero rate</strong>, based on your actual
                  estimated tax liability for the year.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">📌 Example</p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Mr. Sharma</strong>, a freelance consultant, earns
                    professional fees of ₹10,00,000 in FY 2024-25. His clients are
                    required to deduct <strong>10% TDS</strong> (Section 194J),
                    amounting to <strong>₹1,00,000</strong>.
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    However, Mr. Sharma has business expenses of ₹7,00,000, leaving
                    net income of ₹3,00,000. After deductions under Section 80C
                    (₹1,50,000) and 80D (₹25,000), his taxable income is only{" "}
                    <strong>₹1,25,000</strong>, which falls under the basic
                    exemption limit of ₹2,50,000. His actual tax liability is{" "}
                    <strong>NIL</strong>.
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Without a Lower TDS Certificate, ₹1,00,000 is deducted as TDS,
                    which he can claim as refund only after filing ITR (taking 6-12
                    months). This blocks his working capital.
                  </p>
                  <p className="text-sm font-bold text-green-700">
                    ✅ Solution: Mr. Sharma applies for a{" "}
                    <strong>NIL TDS certificate</strong> under Section 197. Once
                    approved, his clients deduct ZERO TDS, improving his cash flow
                    immediately.
                  </p>
                </div>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in preparing and submitting Lower TDS Certificate
                  applications under Section 197 — for individuals, contractors,
                  professionals, and businesses across Uttar Pradesh, Noida, Delhi
                  NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* ELIGIBILITY */}
          <section id="eligibility">
            <SectionLabel text="Who Can Apply" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Who Is Eligible for Lower TDS Certificate?
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Section 197 is available to <strong>resident taxpayers only</strong>{" "}
              (individuals, HUF, firms, companies). Non-residents are not eligible.
              Here's who typically qualifies:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Senior Citizens",
                  icon: "👴",
                  desc: "Senior citizens (60+ years) whose total income is below the basic exemption limit (₹3,00,000 for 60-80 years, ₹5,00,000 for 80+ years) can apply for NIL TDS certificate on interest income, pension, etc.",
                  examples: [
                    "Fixed deposit interest income ₹2,50,000 — no tax liability, but bank deducts 10% TDS",
                    "Pension income ₹2,00,000 — falls under exemption limit",
                  ],
                },
                {
                  category: "Individuals with Low Income",
                  icon: "👨‍💼",
                  desc: "Individuals whose total income is below ₹2,50,000 (basic exemption limit) or whose tax liability is NIL after deductions (80C, 80D, etc.)",
                  examples: [
                    "Salary ₹3,00,000 + 80C deduction ₹1,50,000 = Taxable income ₹1,50,000 (NIL tax)",
                    "Interest income ₹1,50,000 — below exemption limit",
                  ],
                },
                {
                  category: "Contractors",
                  icon: "🏗️",
                  desc: "Contractors receiving payments under Section 194C (1% or 2% TDS) whose actual profit margin is low, resulting in lower tax liability.",
                  examples: [
                    "Contract receipts ₹50,00,000, expenses ₹48,00,000 = Net profit ₹2,00,000 (low tax liability, but TDS of ₹50,000-₹1,00,000 deducted)",
                  ],
                },
                {
                  category: "Professionals & Freelancers",
                  icon: "💼",
                  desc: "Professionals (doctors, lawyers, consultants, architects) receiving fees under Section 194J (10% TDS) whose actual tax liability is lower due to business expenses and deductions.",
                  examples: [
                    "Professional fees ₹8,00,000, expenses ₹6,00,000 = Net income ₹2,00,000 (tax liability much lower than 10% TDS on ₹8,00,000)",
                  ],
                },
                {
                  category: "Individuals with Business Losses",
                  icon: "📉",
                  desc: "Individuals having brought forward business losses or unabsorbed depreciation that reduce current year's taxable income to NIL or very low.",
                  examples: [
                    "Current year income ₹5,00,000, brought forward loss ₹4,00,000 = Taxable income ₹1,00,000",
                  ],
                },
                {
                  category: "Investors with Low Income",
                  icon: "📈",
                  desc: "Investors receiving interest, dividends, or capital gains, whose total income after deductions is below taxable limit.",
                  examples: [
                    "Interest income ₹2,00,000, dividend ₹50,000 = Total ₹2,50,000 (at exemption limit)",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.category}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">
                        {item.category}
                      </h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-blue-200">
                    <p className="font-bold text-blue-800 text-xs mb-2">
                      📊 Examples
                    </p>
                    <ul className="space-y-1">
                      {item.examples.map((ex, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-blue-600 mt-0.5">•</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
              <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                Important Conditions
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Applicant must be a resident of India",
                  "Application must be submitted BEFORE the TDS is deducted (not applicable retrospectively)",
                  "Estimated income and tax liability must be computed accurately",
                  "Previous ITR filing history is considered by AO",
                  "Certificate is valid only for the financial year applied for",
                  "Non-compliance or incorrect estimation may lead to rejection or penalty",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* APPLICATION PROCESS */}
          <section id="application-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Apply for Lower TDS Certificate (Section 197)
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              The application is submitted via <strong>Form 13</strong> to your
              jurisdictional Assessing Officer. Here's the complete process:
            </p>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Eligibility Assessment",
                    description:
                      "Taxvio analyzes your income sources, deductions, and previous ITR to determine if you qualify for lower/nil TDS certificate. We calculate your estimated tax liability for the current financial year.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Income Estimation & Tax Calculation",
                    description:
                      "We prepare detailed income estimation statement covering all sources (salary, business, professional fees, interest, capital gains, etc.) and compute tax liability after considering deductions (80C, 80D, 80G, business expenses, depreciation, brought forward losses).",
                    duration: "2-3 days",
                  },
                  {
                    step: 3,
                    title: "Form 13 Preparation",
                    description:
                      "We fill Form 13 (Application for certificate for deduction at lower rate) with complete details: PAN, address, income estimation, tax liability calculation, rate of TDS requested (lower rate or NIL), details of deductor(s), financial year for which certificate is required.",
                    duration: "1 day",
                  },
                  {
                    step: 4,
                    title: "Supporting Documentation",
                    description:
                      "We compile all required documents: Copy of PAN card, Previous 2 years' ITRs and acknowledgments, Income estimation statement with supporting calculations, Details of deductors (name, PAN, TAN), Bank statements (if applicable), Proof of deductions claimed (80C, 80D investments), Justification letter explaining why lower TDS is required.",
                    duration: "1-2 days",
                  },
                  {
                    step: 5,
                    title: "Submission to Assessing Officer",
                    description:
                      "Form 13 and supporting documents are submitted to your jurisdictional Assessing Officer (AO) — either online via e-filing portal or physically at the Income Tax Office. We track the submission and obtain acknowledgment.",
                    duration: "1 day",
                  },
                  {
                    step: 6,
                    title: "Follow-Up & Query Resolution",
                    description:
                      "AO may ask for additional documents, clarifications, or attend personal hearing. Taxvio handles all communication, responds to queries, and represents you before the AO (if required).",
                    duration: "7-30 days",
                  },
                  {
                    step: 7,
                    title: "Certificate Issuance",
                    description:
                      "Once AO is satisfied, the Lower TDS Certificate is issued specifying: Rate at which TDS should be deducted (e.g., 2%, 5%, or NIL), Financial year of validity, Details of deductor(s), Type of income covered. Certificate is sent to you and the deductor(s).",
                    duration: "15-45 days (total)",
                  },
                  {
                    step: 8,
                    title: "Certificate Delivery & Implementation",
                    description:
                      "We share the certificate with you and guide you to submit it to your deductors (clients, employer, bank, etc.). Deductors must honor the certificate and deduct TDS at the lower/nil rate specified.",
                    duration: "Immediate",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-green-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-green-300 rounded-2xl p-6">
                <p className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Typical processing time: 15-45 days</strong> from
                  submission to certificate issuance, depending on AO workload and
                  query resolution. Taxvio ensures complete follow-up and expedited
                  processing wherever possible.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Lower TDS Certificate Application
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card (copy)",
                    "Aadhaar card (copy)",
                    "Previous 2 years' ITRs with acknowledgments",
                    "Income estimation statement for current FY",
                    "Detailed tax liability calculation",
                    "Details of deductors (name, PAN, TAN, address)",
                    "Form 13 (duly filled and signed)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-gray-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-gray-100 text-gray-700">
                  Supporting Documents (As Applicable)
                </p>
                <ul className="space-y-3">
                  {[
                    "Bank statements (for interest income)",
                    "Form 16 / Form 16A (for salary/other income)",
                    "Proof of deductions (80C, 80D investments)",
                    "Business expense bills/vouchers (for professionals/contractors)",
                    "Depreciation schedule (for business income)",
                    "Brought forward loss computation (if claiming losses)",
                    "Justification letter explaining need for lower TDS",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-gray-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* BENEFITS */}
          <section id="benefits">
            <SectionLabel text="Key Benefits" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Benefits of Lower TDS Certificate
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "Improved Cash Flow",
                  desc: "Avoid blocking of working capital due to high TDS deductions — get full payment amount in hand.",
                },
                {
                  icon: "⏰",
                  title: "Eliminate Refund Waiting Time",
                  desc: "No need to wait 6-12 months for tax refund processing — TDS deducted matches your actual liability.",
                },
                {
                  icon: "📊",
                  title: "Optimized Tax Planning",
                  desc: "Better align TDS with actual tax liability, reducing year-end tax surprises.",
                },
                {
                  icon: "🏗️",
                  title: "Contractor-Friendly",
                  desc: "Contractors with low profit margins can avoid excessive 1-2% TDS on gross receipts.",
                },
                {
                  icon: "💼",
                  title: "Professional Advantage",
                  desc: "Professionals (doctors, lawyers, consultants) can reduce 10% TDS to match actual profit-based tax liability.",
                },
                {
                  icon: "👴",
                  title: "Senior Citizen Relief",
                  desc: "Senior citizens with income below exemption limit can get NIL TDS on FD interest, avoiding unnecessary deductions.",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* TAXVIO SERVICES */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Lower TDS Certificate Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Complete end-to-end assistance for Section 197 certificate application
              — from eligibility assessment to certificate delivery.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  service: "Eligibility Assessment & Advisory",
                  icon: "🔍",
                  description:
                    "We analyze your income sources, previous ITRs, deductions, and tax liability to determine if you qualify for lower/nil TDS certificate. Includes professional advisory on tax planning and TDS optimization.",
                  price: "Free (included in application fee)",
                },
                {
                  service: "Income Estimation & Tax Calculation",
                  icon: "📊",
                  description:
                    "Detailed computation of estimated income for the current FY from all sources (salary, business, professional fees, interest, capital gains, rent). Calculation of tax liability after deductions (80C, 80D, 80G, business expenses, depreciation, losses). Supporting workings and annexures.",
                  price: "Included in package",
                },
                {
                  service: "Form 13 Preparation & Filing",
                  icon: "📝",
                  description:
                    "Complete preparation of Form 13 with accurate details, income estimation, tax calculation, and deductor information. Online or offline submission to Assessing Officer with acknowledgment tracking.",
                  price: "₹2,999 (basic)",
                },
                {
                  service: "Documentation & Compliance",
                  icon: "📁",
                  description:
                    "Compilation of all mandatory and supporting documents. Preparation of justification letter and covering letter to AO. Ensuring 100% compliance with Income Tax rules and procedural requirements.",
                  price: "Included in package",
                },
                {
                  service: "Follow-Up & Query Resolution",
                  icon: "🔔",
                  description:
                    "Regular follow-up with AO office for status updates. Responding to queries, providing additional documents, and attending personal hearings (if required). Liaison with AO until certificate is issued.",
                  price: "₹1,500 (if queries arise)",
                },
                {
                  service: "Certificate Delivery & Implementation Support",
                  icon: "✅",
                  description:
                    "Delivery of issued certificate to you and your deductors. Guidance on how to submit certificate to clients/employer/bank. Assistance with implementation and TDS compliance by deductors.",
                  price: "Included in package",
                },
              ].map((item) => (
                <div
                  key={item.service}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {item.service}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        {item.description}
                      </p>
                      <p className="text-sm font-bold text-blue-600">
                        💰 {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <p className="font-bold text-green-800 mb-3">
                📦 Complete Package Pricing
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic",
                    price: "₹2,999",
                    includes: [
                      "Eligibility assessment",
                      "Income estimation",
                      "Form 13 preparation",
                      "Document compilation",
                      "Submission to AO",
                    ],
                  },
                  {
                    package: "Standard",
                    price: "₹4,999",
                    includes: [
                      "Everything in Basic",
                      "Follow-up (1 month)",
                      "Query resolution (1 query)",
                      "Certificate delivery",
                      "Implementation guidance",
                    ],
                  },
                  {
                    package: "Premium",
                    price: "₹7,999",
                    includes: [
                      "Everything in Standard",
                      "Follow-up (until issued)",
                      "Unlimited query resolution",
                      "Personal hearing representation",
                      "Multiple deductor support",
                    ],
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.package}
                    className="bg-white rounded-xl p-5 border border-green-300"
                  >
                    <p className="font-bold text-green-800 mb-1">
                      {pkg.package}
                    </p>
                    <p className="text-2xl font-extrabold text-[#00416a] mb-3">
                      {pkg.price}
                    </p>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMMON SCENARIOS */}
          <section id="scenarios">
            <SectionLabel text="Real-World Examples" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Scenarios for Lower TDS Certificate
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Here are typical situations where Lower TDS Certificate provides
              significant benefits:
            </p>

            <div className="space-y-6">
              {[
                {
                  scenario: "Contractor with Low Profit Margin",
                  problem:
                    "A civil contractor receives ₹1 Crore contract payment. Standard TDS @ 2% = ₹2,00,000. However, actual profit after expenses is only ₹5,00,000. Tax liability @ 30% on ₹5 lakh = ₹1,50,000. Excess TDS of ₹50,000 is blocked.",
                  solution:
                    "Apply for Lower TDS Certificate requesting 1.5% TDS rate (matching actual tax liability). TDS deducted = ₹1,50,000 (matching actual tax). Cash flow improved by ₹50,000.",
                },
                {
                  scenario: "Freelance Consultant with High Expenses",
                  problem:
                    "A consultant earns ₹12,00,000 professional fees. Standard TDS @ 10% = ₹1,20,000. Business expenses = ₹8,00,000. Net profit = ₹4,00,000. Tax liability (after deductions) = ₹30,000. Excess TDS = ₹90,000.",
                  solution:
                    "Apply for Lower TDS Certificate requesting 2.5% TDS rate. TDS deducted = ₹30,000 (matching actual tax). Avoid blocking ₹90,000 for 6-12 months.",
                },
                {
                  scenario: "Senior Citizen with FD Interest",
                  problem:
                    "A 70-year-old retiree has FD interest income of ₹2,80,000. Standard TDS @ 10% = ₹28,000. After Section 80TTB deduction (₹50,000), taxable income = ₹2,30,000 (below ₹3 lakh exemption limit). Actual tax = NIL. Entire ₹28,000 TDS is refundable.",
                  solution:
                    "Apply for NIL TDS certificate. Bank deducts ZERO TDS. Full ₹2,80,000 received in hand. No need to file ITR for refund claim.",
                },
                {
                  scenario: "Individual with Brought Forward Losses",
                  problem:
                    "A business owner earns ₹6,00,000 in FY 2024-25 but has brought forward loss of ₹5,00,000 from previous year. Taxable income = ₹1,00,000. Tax liability = NIL (within basic exemption). However, clients deduct 10% TDS on professional income.",
                  solution:
                    "Apply for NIL TDS certificate showing brought forward loss. Clients deduct ZERO TDS. Working capital preserved.",
                },
              ].map((item) => (
                <details
                  key={item.scenario}
                  className="group border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#00416a] transition"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span className="flex items-center gap-3">
                      <span className="text-blue-500">📌</span>
                      {item.scenario}
                    </span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t">
                    <div className="grid md:grid-cols-2 gap-6 pt-5">
                      <div>
                        <p className="font-bold text-red-700 mb-3 text-sm">
                          ⚠️ Problem
                        </p>
                        <p className="text-sm text-gray-600">{item.problem}</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-700 mb-3 text-sm">
                          ✅ Solution
                        </p>
                        <p className="text-sm text-gray-600">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* IMPORTANT NOTES */}
          <section id="important-notes">
            <SectionLabel text="Critical Information" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Important Points to Remember
            </h2>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-8 md:p-10">
              <div className="space-y-4">
                {[
                  {
                    point: "Apply BEFORE TDS is Deducted",
                    detail:
                      "Lower TDS Certificate is NOT applicable retrospectively. It only applies to future TDS deductions after the certificate is issued. Already deducted TDS cannot be reduced — you can only claim refund via ITR.",
                  },
                  {
                    point: "Valid for Current Financial Year Only",
                    detail:
                      "Certificate is valid only for the financial year mentioned in the certificate. You must apply fresh every year if you need continued lower TDS.",
                  },
                  {
                    point: "Deductor is BOUND to Honor Certificate",
                    detail:
                      "Once you submit the Lower TDS Certificate to your deductor (client, employer, bank), they are legally bound to deduct TDS at the rate specified in the certificate. Non-compliance by deductor can lead to penalty.",
                  },
                  {
                    point: "Incorrect Estimation = Consequences",
                    detail:
                      "If your actual income/tax liability turns out to be significantly higher than estimated in the application, you may face: (1) Interest under Section 234B/234C for short deduction, (2) Rejection of future applications, (3) Scrutiny or inquiry by AO. Always make realistic and accurate estimations.",
                  },
                  {
                    point: "File ITR Even with NIL TDS",
                    detail:
                      "Even if you get NIL TDS certificate and no TDS is deducted, you are still required to file Income Tax Return if your income exceeds basic exemption limit or if you fall under mandatory ITR filing criteria (Section 139).",
                  },
                  {
                    point: "Processing Time Varies",
                    detail:
                      "While typical processing time is 15-45 days, it can be longer during peak tax season (March-July) or if AO workload is high. Apply well in advance (beginning of financial year) to avoid delays.",
                  },
                  {
                    point: "No Guarantee of Approval",
                    detail:
                      "AO has discretionary power to approve or reject the application. Rejection can occur if: (1) Income estimation is unrealistic, (2) Past ITR filing compliance is poor, (3) Supporting documents are inadequate. Taxvio ensures professional preparation to maximize approval chances.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-yellow-200 rounded-xl p-5"
                  >
                    <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                      <span className="text-lg">⚠️</span>
                      {item.point}
                    </p>
                    <p className="text-sm text-gray-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Our Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Kumar (Contractor)",
                  location: "Khatauli",
                  text: "I was losing ₹2 lakh every year in TDS that I had to wait 8-10 months to get back as refund. Taxvio helped me get Lower TDS Certificate and now my TDS is only ₹80,000 matching my actual tax. My cash flow has improved dramatically.",
                },
                {
                  name: "Dr. Meera Sharma (Consultant)",
                  location: "Muzaffarnagar",
                  text: "As a medical consultant, I was facing 10% TDS on all my fees even though my actual tax liability was only 3% after business expenses. Taxvio's team prepared perfect income estimation and got me Lower TDS Certificate at 3%. Excellent service.",
                },
                {
                  name: "Mr. Agarwal (Senior Citizen)",
                  location: "Meerut",
                  text: "I am 75 years old with FD interest of ₹2.5 lakh. Bank was deducting ₹25,000 TDS every year. Taxvio helped me get NIL TDS certificate and now I receive full interest without any deduction. Very helpful team.",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">
                    "{r.text}"
                  </p>
                  <p className="font-bold text-[#00416a]">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Our Reach" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Lower TDS Certificate Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides Lower TDS Certificate application support for individuals,
              contractors, professionals, and businesses across{" "}
              <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
              <strong>Meerut</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong>, and pan-India online.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Noida",
                "Delhi NCR",
                "Meerut",
                "Mumbai",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default"
                >
                  📍 {city}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* RELATED SERVICES */}
          <section id="related-services">
            <SectionLabel text="Explore More" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Related Income Tax Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "ITR Filing — Business",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-business",
                  desc: "File ITR-3/ITR-4 for business income.",
                },
                {
                  title: "TDS Return Filing",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tds-return",
                  desc: "File quarterly TDS returns.",
                },
                {
                  title: "Tax Planning",
                  icon: "📈",
                  link: "/serviceslist/income-tax/tax-planning",
                  desc: "Strategic tax saving consultation.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Response to department notices.",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Improve Your Cash Flow Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Apply for Lower TDS Certificate Now
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Stop blocking your working capital in excess TDS. Taxvio provides
                    complete Section 197 certificate application support —
                    eligibility assessment, Form 13 preparation, documentation,
                    follow-up, and implementation. Starting ₹2,999. Expert guidance
                    for contractors, professionals, and individuals.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Apply Now — ₹2,999
                  </Link>
                 
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footar />
      </main>
    </>
  );
}

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I apply for Lower TDS Certificate retrospectively?",
      a: "No. Lower TDS Certificate under Section 197 is NOT applicable retrospectively. It only applies to TDS deductions that occur AFTER the certificate is issued. If TDS has already been deducted at standard rates before the certificate was issued, you cannot get it reduced — you can only claim refund by filing Income Tax Return.",
    },
    {
      q: "What is the validity period of Lower TDS Certificate?",
      a: "Lower TDS Certificate is valid only for the financial year mentioned in the certificate. For example, if issued for FY 2024-25, it expires on March 31, 2025. You must apply fresh for the next financial year if you need continued lower TDS benefit.",
    },
    {
      q: "Can I get Lower TDS Certificate for all types of income?",
      a: "Lower TDS Certificate under Section 197 applies to most TDS sections including: salary (192), interest (194A), contract payments (194C), professional fees (194J), rent (194I), commission (194H), etc. However, it does NOT apply to TDS on winnings (194B), lottery (194BB), and some other specific sections. Consult Taxvio for specific applicability.",
    },
    {
      q: "What happens if my deductor refuses to honor the certificate?",
      a: "If you have submitted a valid Lower TDS Certificate to your deductor and they refuse to honor it by continuing to deduct TDS at higher rates, the deductor is liable for penalty and interest. You can: (1) File complaint with your jurisdictional AO, (2) Provide written notice to deductor citing Section 197, (3) Claim refund of excess TDS via ITR filing. Taxvio can assist with escalation.",
    },
    {
      q: "Do I still need to file ITR if I have NIL TDS certificate?",
      a: "Yes, if you fall under mandatory ITR filing criteria under Section 139(1) — such as total income exceeding basic exemption limit (₹2.5 lakh / ₹3 lakh / ₹5 lakh depending on age), or if you have deposited ₹1 crore or more in bank accounts, or traveled abroad, etc. — you MUST file ITR even if no TDS was deducted. NIL TDS certificate only exempts TDS deduction, not ITR filing obligation.",
    },
    {
      q: "Can a non-resident apply for Lower TDS Certificate?",
      a: "No. Section 197 is applicable only to RESIDENT taxpayers (individuals, HUF, firms, companies). Non-residents cannot apply for Lower TDS Certificate under Section 197. However, non-residents may claim relief under Double Taxation Avoidance Agreement (DTAA) or apply for certificate under Section 195 for specific payments.",
    },
    {
      q: "How many times can I apply for Lower TDS Certificate in a year?",
      a: "You can apply for Lower TDS Certificate multiple times in a financial year if: (1) Your first application was rejected and you reapply with corrections, (2) You need to add additional deductors who were not covered in the original certificate, (3) Your income/tax situation changed significantly. However, repeated frivolous applications may attract AO scrutiny.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Lower TDS Certificate
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) =>
              setOpen((e.target as HTMLDetailsElement).open ? i : null)
            }
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{f.q}</span>
              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─── SHARED ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}