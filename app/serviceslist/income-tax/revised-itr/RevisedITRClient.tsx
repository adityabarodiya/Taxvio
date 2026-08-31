// app/serviceslist/income-tax/revised-itr/RevisedITRClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Revised Income Tax Return Filing - Section 139(5)",
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
    "Professional revised ITR filing services under Section 139(5) of the Income Tax Act for correcting errors, adding missed income, claiming additional deductions, and updating originally filed returns. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Revised Income Tax Return Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "999",
      maxPrice: "4999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a revised income tax return under Section 139(5)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A revised return under Section 139(5) is filed to correct any mistake, error, or omission in the originally filed ITR. It allows taxpayers to add missed income, claim additional deductions, correct TDS mismatches, update bank accounts, or rectify any other inaccuracies discovered after filing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the deadline for filing a revised ITR under Section 139(5)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A revised return can be filed before the end of the relevant assessment year (December 31st) or before the completion of assessment, whichever is earlier. For FY 2023-24 (AY 2024-25), the deadline is December 31, 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file a revised ITR if I forgot to claim a deduction in my original return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Section 139(5) allows you to file a revised return to claim deductions you missed in your original return — such as 80C, 80D, home loan interest, or any other eligible deduction — as long as you file before December 31st of the assessment year or before assessment completion.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function RevisedITRClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white text-gray-800 overflow-x-hidden">

        {/* ── URGENCY BANNER ── */}
        <div className="bg-amber-500 text-white text-center py-3 font-semibold text-sm px-4" role="alert">
          ⏰ Deadline Alert: File Revised ITR Before December 31st of Assessment Year or Before Assessment Completion — Don't Lose Your Refund or Deductions
        </div>

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <Link href="/serviceslist/income-tax" className="hover:text-white transition">Income Tax</Link>
              <span>/</span>
              <span className="text-white">Revised ITR Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📝 Revised ITR Filing — Section 139(5)
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Revised ITR<br />
                  <span className="text-[#7ecbf0]">Filing Service</span><br />
                  U/s 139(5)
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Made a mistake in your original ITR? Forgot to add income, claim a deduction, or report TDS?
                  <strong className="text-white"> Section 139(5)</strong> gives you a second chance to correct
                  errors and update your return — but only until <strong className="text-white">December 31st
                  of the assessment year</strong> or before assessment completion. Taxvio's CA-supervised
                  team ensures accurate revised filing — protecting your refund, preventing notices, and
                  maximising legitimate tax savings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File Revised ITR — ₹999 Onwards →
                  </Link>
                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    📞 Free Error Assessment
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {["✅ Error Correction", "✅ Missed Income Addition", "✅ Deduction Claims", "✅ TDS Mismatch Fix"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Facts</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["⚖️", "Governed by Section 139(5), IT Act"],
                    ["📅", "File before Dec 31 of AY or assessment"],
                    ["💰", "Starting ₹999 all-inclusive"],
                    ["🔄", "Can be revised multiple times"],
                    ["📋", "Same ITR form as original return"],
                    ["⏱️", "Processing in 2–5 working days"],
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
              { number: "5000+", label: "Revised ITRs Filed", icon: "📝" },
              { number: "₹999", label: "Starting Fee", icon: "💰" },
              { number: "2-5 Days", label: "Average Processing Time", icon: "⏱️" },
              { number: "PAN India", label: "Service Coverage", icon: "🗺️" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">{s.number}</p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {["✔ CA-Supervised Review", "✔ Error-Free E-Filing", "✔ Form 26AS Reconciliation", "✔ Refund Protection"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* WHAT IS REVISED ITR */}
          <section id="what-is-revised-itr">
            <SectionLabel text="Understanding Revised Returns" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is a Revised Income Tax Return Under Section 139(5)?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>revised income tax return</strong> under <strong>Section 139(5)</strong> of
                  the Income Tax Act, 1961 is a corrected version of an originally filed return. It allows
                  taxpayers to rectify any mistake, error, or omission discovered after the original ITR
                  was filed and verified. Common scenarios include adding missed income sources, claiming
                  forgotten deductions, correcting TDS/TCS entries, updating bank account details, or
                  fixing computational errors.
                </p>
                <p>
                  The revised return completely <strong>replaces the original return</strong>. Once
                  processed, the Income Tax Department considers only the revised return for assessment
                  purposes. This provision is a taxpayer-friendly mechanism that ensures honest mistakes
                  don't result in tax notices, interest charges, or loss of legitimate refunds.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  You can file a revised return <strong>before the end of the assessment year</strong>
                  (December 31st of the year following the financial year) <strong>or before the completion
                  of assessment</strong>, whichever is earlier. For example, for FY 2023-24 (AY 2024-25),
                  the deadline is December 31, 2025 — unless your case is selected for assessment before
                  that date.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides complete revised
                  ITR filing services — from error identification and document review to corrected return
                  preparation, e-filing, and acknowledgment tracking — across Uttar Pradesh and pan-India.
                  Our CA-supervised team ensures your revised return is accurate, complete, and filed within
                  the statutory deadline.
                </p>
              </div>
            </div>
          </section>

          {/* WHEN TO FILE */}
          <section id="when-to-file">
            <SectionLabel text="Common Scenarios" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              When Should You File a Revised ITR?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              The following situations typically require filing a revised return under Section 139(5).
              Early correction prevents notices, interest, and penalties.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "💼",
                  title: "Missed Income Source",
                  desc: "You forgot to add rental income, capital gains, freelance income, interest income, or any other taxable income in your original return.",
                },
                {
                  icon: "💰",
                  title: "Unclaimed Deductions",
                  desc: "You missed claiming Section 80C (PPF, ELSS, LIC), 80D (health insurance), home loan interest, or any other eligible deduction that would reduce tax liability.",
                },
                {
                  icon: "📊",
                  title: "TDS / TCS Mismatch",
                  desc: "Form 26AS shows TDS credits that you didn't claim in the original return, or TDS amounts are mismatched due to incorrect employer/deductor details.",
                },
                {
                  icon: "🏦",
                  title: "Wrong Bank Account",
                  desc: "You entered the wrong bank account for refund credit, or need to update to a pre-validated account after filing the original return.",
                },
                {
                  icon: "🧮",
                  title: "Mathematical Errors",
                  desc: "Computational mistakes in income calculation, tax calculation, deduction limits, exemption claims, or advance tax/self-assessment tax entries.",
                },
                {
                  icon: "📋",
                  title: "Incorrect ITR Form Selected",
                  desc: "You filed ITR-1 but should have filed ITR-2 (capital gains) or ITR-3 (business income), or vice versa — requiring re-filing in the correct form.",
                },
                {
                  icon: "🏠",
                  title: "Property Sale Not Reported",
                  desc: "Capital gains from property sale or mutual fund redemption were not reported, or long-term/short-term classification was incorrect.",
                },
                {
                  icon: "👨‍👩‍👧",
                  title: "Dependent / Regime Change",
                  desc: "You need to add dependent details for standard deduction, or switch between old and new tax regimes after realising which is more beneficial.",
                },
                {
                  icon: "🔍",
                  title: "Defective Return Notice (U/s 139(9))",
                  desc: "Income Tax Department issued a notice declaring your return defective due to missing information, incorrect schedules, or non-attachment of required forms — requires immediate revision.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-[#00416a] mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DEADLINE & TIME LIMITS */}
          <section id="deadline">
            <SectionLabel text="Critical Deadlines" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Time Limit for Filing Revised ITR Under Section 139(5)
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Understanding the statutory deadline is critical. Missing the deadline means you cannot
              file a revised return and must bear the consequences of the original return's errors.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">📅 Revised ITR Filing Deadline</h3>
              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 border border-blue-100">
                  <p className="font-bold text-blue-800 mb-2">End of Assessment Year</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A revised return can be filed <strong>before the end of the relevant assessment year</strong>.
                    The assessment year is the year immediately following the financial year. It ends on
                    <strong> March 31st</strong>, but for revised return purposes, Section 139(5) allows
                    filing up to <strong>December 31st of the assessment year</strong>.
                  </p>
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Example:</p>
                    <p className="text-sm text-gray-700">
                      For <strong>FY 2023-24 (AY 2024-25)</strong>, the revised ITR deadline is
                      <strong> December 31, 2025</strong>.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-blue-100">
                  <p className="font-bold text-blue-800 mb-2">Before Completion of Assessment</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    If your case is selected for scrutiny or assessment under Section 143(3), you can
                    file a revised return only <strong>before the assessment order is passed</strong>.
                    Once the assessing officer completes the assessment, the window for revision closes
                    — even if December 31st has not arrived yet.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-blue-100">
                  <p className="font-bold text-blue-800 mb-2">Whichever is Earlier</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Section 139(5) clearly states the deadline is <strong>"before the end of the relevant
                    assessment year or before the completion of the assessment, whichever is earlier."</strong>
                    This means if assessment is completed in November 2025, you cannot file a revised
                    return even though December 31, 2025 has not passed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BENEFITS */}
          <section id="benefits">
            <SectionLabel text="Why Revise Your ITR" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Benefits of Filing a Revised Income Tax Return
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "💵", title: "Claim Missing Refund", desc: "Add TDS credits or excess advance tax payments you forgot to claim, increasing your refund amount or reducing tax payable." },
                { icon: "🛡️", title: "Avoid Notices & Penalties", desc: "Correct errors proactively before the department issues a notice. Voluntary correction under 139(5) shows good faith and avoids Section 270A penalty." },
                { icon: "📉", title: "Reduce Tax Liability", desc: "Claim missed deductions (80C, 80D, 80G, home loan interest) to lower taxable income and reduce the tax you owe." },
                { icon: "✅", title: "Fix TDS Mismatches", desc: "Reconcile Form 26AS with your ITR to ensure all TDS credits are correctly claimed, preventing mismatch notices and refund delays." },
                { icon: "🏦", title: "Update Bank Account", desc: "Correct bank account details to ensure refunds are credited to the right account — critical if you changed banks after filing." },
                { icon: "🔄", title: "Switch Tax Regime", desc: "If you initially chose the new regime but later realised the old regime is more beneficial (or vice versa), you can switch via revised return." },
                { icon: "📊", title: "Add Unreported Income", desc: "Voluntarily disclose income you missed in the original return, avoiding future scrutiny and demonstrating honest compliance." },
                { icon: "📝", title: "Correct Form Selection", desc: "File in the correct ITR form (ITR-2 instead of ITR-1, or ITR-3 instead of ITR-2) if you selected the wrong form initially." },
                { icon: "🎯", title: "Peace of Mind", desc: "Eliminate stress and uncertainty by ensuring your return is accurate and complete, with all income reported and all eligible deductions claimed." },
              ].map((item) => (
                <div key={item.title} className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="Paperwork Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Filing Revised ITR
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              The documents needed depend on what you're correcting. Our team will provide a tailored
              checklist after reviewing your original return and the corrections needed.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory for All Revisions
                </p>
                <ul className="space-y-3">
                  {[
                    "Original ITR acknowledgement (ITR-V or e-filing confirmation)",
                    "PAN card copy",
                    "Aadhaar card copy",
                    "Form 26AS (Annual Tax Statement) for the relevant AY",
                    "AIS (Annual Information Statement) from e-filing portal",
                    "Bank account statement showing TDS credits",
                    "Details of corrections to be made (income, deductions, TDS, etc.)",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-blue-50 text-blue-700">
                  Additional Documents (Based on Correction Type)
                </p>
                <ul className="space-y-3">
                  {[
                    "Form 16 / 16A (if correcting salary or TDS from employer)",
                    "Investment proofs for Section 80C, 80D deductions",
                    "Home loan interest certificate (if claiming housing loan deduction)",
                    "Capital gains computation worksheet (if adding property/MF sale)",
                    "Rent receipts / HRA proof (if claiming HRA exemption)",
                    "Donation receipts for Section 80G (if adding charitable donations)",
                    "Interest certificates for savings account, FD, bonds",
                    "Business books of accounts (if correcting business income in ITR-3/4)",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's 5-Step Revised ITR Filing Process
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our streamlined process ensures accurate correction, complete reconciliation, and
              error-free e-filing — protecting your refund and preventing future notices.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Original Return Review & Error Identification",
                    desc: "We download and review your originally filed ITR, compare it with Form 26AS, AIS, Form 16, and investment proofs to identify all errors, omissions, and missed claims. We prepare a detailed error report with recommended corrections.",
                  },
                  {
                    step: "02",
                    title: "Document Collection & Verification",
                    desc: "We collect all corrected documents — updated Form 16, investment proofs, bank statements, TDS certificates, capital gains worksheets, and any other relevant documents. Each document is verified for authenticity and accuracy.",
                  },
                  {
                    step: "03",
                    title: "Corrected Return Preparation",
                    desc: "We prepare the revised ITR in the same form as your original return (ITR-1, ITR-2, ITR-3, or ITR-4), incorporating all corrections — added income, claimed deductions, TDS reconciliation, updated bank account, and regime change if applicable. All schedules and annexures are accurately filled.",
                  },
                  {
                    step: "04",
                    title: "E-Filing & Acknowledgment",
                    desc: "The revised return is filed on the Income Tax e-filing portal using your credentials or via our registered intermediary account. We download the revised ITR acknowledgement and submit it to you for verification via Aadhaar OTP, EVC, or physical ITR-V.",
                  },
                  {
                    step: "05",
                    title: "Processing Tracking & Refund Follow-Up",
                    desc: "We monitor the processing status on the e-filing portal. If refund is due, we track refund status and follow up with the CPC in case of delays. We notify you immediately when the revised return is processed and refund (if any) is issued.",
                  },
                ].map((step, i) => (
                  <div key={step.step} className="relative md:pl-16 flex gap-6 items-start">
                    <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-md">
                      {i + 1}
                    </div>
                    <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
                      <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">Step {step.step}</span>
                      <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FEE CALCULATOR */}
          <FeeCalculator />

          {/* CONSEQUENCES OF NOT REVISING */}
          <section id="consequences" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Risk of Ignoring Errors" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              What Happens If You Don't File a Revised Return?
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Ignoring errors in your originally filed ITR can lead to serious financial and legal
              consequences. The Income Tax Department has access to comprehensive third-party data
              and will eventually detect discrepancies.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  risk: "Loss of Refund",
                  desc: "Unclaimed TDS or advance tax remains with the government. You lose money that rightfully belongs to you, which could have been recovered via revised return.",
                },
                {
                  risk: "Tax Demand Notices",
                  desc: "If you under-reported income, the department will issue a demand notice under Section 143(1) or after scrutiny under 143(3), requiring you to pay additional tax plus interest.",
                },
                {
                  risk: "Interest Under Section 234A/B/C",
                  desc: "Late payment or short payment of tax attracts interest at 1% per month from the due date until actual payment — significantly increasing your tax liability.",
                },
                {
                  risk: "Penalty Under Section 270A",
                  desc: "Under-reporting income or misreporting can attract a penalty of 50% to 200% of the tax on under-reported income, depending on whether it's deemed wilful or inadvertent.",
                },
                {
                  risk: "Scrutiny Assessment Risk",
                  desc: "Returns with mismatches in TDS, income, or deductions are flagged for scrutiny. A voluntary revised return avoids this risk by correcting errors proactively.",
                },
                {
                  risk: "Prosecution in Extreme Cases",
                  desc: "Wilful tax evasion or concealment of income exceeding certain thresholds can lead to prosecution under Section 276C, with imprisonment up to 7 years and heavy fines.",
                },
              ].map((p) => (
                <div key={p.risk} className="bg-white border border-red-100 rounded-xl p-5">
                  <p className="font-bold text-red-600 text-sm mb-1">⚠️ {p.risk}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Taxpayers Who Revised Their ITR
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Kumar",
                  location: "Khatauli",
                  text: "I forgot to add my rental income in my original ITR-2. Taxvio filed a revised return within 3 days and saved me from a future tax notice. Very professional service.",
                },
                {
                  name: "Priya Sharma",
                  location: "Muzaffarnagar",
                  text: "I missed claiming my Section 80D health insurance premium. Taxvio's team identified it, filed a revised ITR, and I got an additional ₹18,000 refund. Highly recommend!",
                },
                {
                  name: "Amit Verma",
                  location: "Meerut",
                  text: "My Form 26AS had TDS entries that I didn't claim. Taxvio reconciled everything, filed revised ITR, and I received my full refund in 2 weeks. Excellent work.",
                },
              ].map((r, i) => (
                <div key={i} className="border rounded-2xl p-6 hover:shadow-lg transition bg-white">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">"{r.text}"</p>
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
              Revised ITR Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides revised ITR
              filing services for salaried individuals, business owners, and professionals across
              <strong> Noida</strong>, <strong>Delhi NCR</strong>, <strong>Meerut</strong>,
              <strong> Ghaziabad</strong>, <strong>Mumbai</strong>, and pan-India online.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"].map((city) => (
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
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">Related Income Tax Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "ITR Filing — Salary",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-salary",
                  desc: "File original ITR for salaried individuals.",
                },
                {
                  title: "ITR Filing — Business",
                  icon: "🏢",
                  link: "/serviceslist/income-tax/itr-business",
                  desc: "ITR-3 and ITR-4 for business income.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Response to scrutiny and demand notices.",
                },
                {
                  title: "TDS Return Filing",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tds-return",
                  desc: "Quarterly TDS return preparation.",
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
                    Correct Your Return Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File Revised ITR Before It's Too Late
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't lose your refund or face tax notices due to filing errors. Taxvio's CA-supervised
                    revised ITR filing ensures accuracy, maximises refunds, and keeps you 100% compliant.
                    Starting ₹999 — file before December 31st.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File Revised ITR — ₹999 Onwards
                  </Link>
                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    📞 Free Error Check
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

function FeeCalculator() {
  const [selected, setSelected] = useState<string>("");
  const [fee, setFee] = useState<number | null>(null);
  const [desc, setDesc] = useState("");

  const services = [
    {
      value: "itr1",
      label: "ITR-1 Revised (Salary Income)",
      fee: 999,
      desc: "Revising ITR-1 for salaried individuals — TDS correction, deduction claims, or bank account update",
    },
    {
      value: "itr2",
      label: "ITR-2 Revised (Capital Gains / Multiple Sources)",
      fee: 1499,
      desc: "Revising ITR-2 for capital gains, house property, or multiple income sources",
    },
    {
      value: "itr3",
      label: "ITR-3 Revised (Business / Profession)",
      fee: 2499,
      desc: "Revising ITR-3 for business income, professional income, or partnership income",
    },
    {
      value: "itr4",
      label: "ITR-4 Revised (Presumptive Taxation)",
      fee: 1999,
      desc: "Revising ITR-4 for businesses under presumptive taxation (Section 44AD/44ADA/44AE)",
    },
    {
      value: "defective",
      label: "Defective Return Revision (U/s 139(9))",
      fee: 1499,
      desc: "Correcting and re-filing return declared defective by the Income Tax Department",
    },
    {
      value: "regime_change",
      label: "Tax Regime Change (Old ↔ New)",
      fee: 1299,
      desc: "Switching between old and new tax regimes after comparing tax liability",
    },
    {
      value: "complex",
      label: "Complex Revision (Multiple Errors)",
      fee: 3499,
      desc: "Comprehensive revision involving multiple income sources, deductions, TDS mismatches, and capital gains",
    },
    {
      value: "urgent",
      label: "Urgent Revision (24–48 Hours)",
      fee: 4999,
      desc: "Express processing for deadline-critical situations — filed within 1–2 working days",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Revised ITR Filing Fee
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl">
        Select the type of revision you need for an instant professional fee estimate.
      </p>

      <div className="bg-gray-50 border rounded-3xl p-8">
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {services.map((s) => (
            <button
              key={s.value}
              onClick={() => {
                setSelected(s.value);
                setFee(s.fee);
                setDesc(s.desc);
              }}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                selected === s.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"
              }`}
            >
              <span className="font-semibold block mb-1">{s.label}</span>
              <span
                className={`text-xs ${
                  selected === s.value ? "text-gray-200" : "text-gray-500"
                }`}
              >
                ₹{s.fee.toLocaleString("en-IN")} onwards
              </span>
            </button>
          ))}
        </div>

        {fee !== null ? (
          <div className="border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee:{" "}
              <span className="text-3xl font-extrabold">
                ₹{fee.toLocaleString("en-IN")}
              </span>{" "}
              onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
            <p className="text-xs text-gray-400 mt-2">
              * There is no government fee for filing revised ITR. Professional fees above cover
              error review, document verification, corrected return preparation & e-filing. GST
              applicable.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition"
            >
              Get Started — Contact Us →
            </Link>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">
            Select a service above to see an estimated fee.
          </p>
        )}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the difference between revised return and updated return?",
      a: "A revised return under Section 139(5) is filed to correct errors in an originally filed return, before the end of the assessment year or before assessment completion. An updated return under Section 139(8A) (introduced in Budget 2022) can be filed even after the assessment year ends — up to 24 months from the end of the relevant assessment year — but it attracts additional tax payment requirements and cannot reduce tax liability.",
    },
    {
      q: "Can I file a revised ITR multiple times?",
      a: "Yes, you can file a revised return multiple times for the same assessment year, as long as you file before the deadline (December 31st of AY or before assessment completion). Each revised return replaces the previous one. However, frequent revisions may attract scrutiny, so it's best to ensure accuracy before filing.",
    },
    {
      q: "Will I get a refund if I file a revised return claiming more TDS?",
      a: "Yes, if your revised return shows higher TDS credits than claimed in the original return, and the result is excess tax paid, you will receive a refund. The refund will be processed by the CPC (Centralized Processing Centre) after the revised return is processed, typically within 2–4 weeks.",
    },
    {
      q: "Can I switch from new tax regime to old tax regime in a revised return?",
      a: "Yes, you can switch between old and new tax regimes in a revised return filed under Section 139(5), subject to eligibility conditions. However, once you opt for the new regime for business income (ITR-3), you cannot switch back to the old regime for subsequent years. For salary income, switching is allowed each year.",
    },
    {
      q: "What happens if I miss the December 31st deadline for revised ITR?",
      a: "If you miss the deadline, you cannot file a revised return under Section 139(5). Your only option is to file an updated return under Section 139(8A) within 24 months from the end of the assessment year, but this attracts additional tax payment and cannot reduce tax liability. Alternatively, you may have to wait for a notice from the department and respond during assessment proceedings.",
    },
    {
      q: "Do I need to re-verify a revised ITR after filing?",
      a: "Yes, a revised ITR must be verified just like the original return — via Aadhaar OTP, EVC (Electronic Verification Code), net banking, or by sending a signed physical ITR-V to CPC Bangalore within 30 days of filing. The return is considered invalid if not verified within this period.",
    },
    {
      q: "Can I file a revised return if my original return was filed after the due date?",
      a: "Yes, you can file a revised return even if your original return was a belated return (filed after the July 31st due date under Section 139(4)). The revised return deadline remains the same — before December 31st of the assessment year or before assessment completion, whichever is earlier.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Revised ITR Filing
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