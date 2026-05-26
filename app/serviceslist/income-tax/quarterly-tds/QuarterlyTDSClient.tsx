"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Quarterly TDS Return Filing — Form 24Q, 26Q, 27Q & 27EQ",
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
    "Professional quarterly TDS return filing — Form 24Q, 26Q, 27Q & 27EQ. TAN registration, challan reconciliation, TRACES correction, lower deduction certificates. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "TDS Return Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "999",
      maxPrice: "3999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is required to file quarterly TDS returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Any person or entity who deducts TDS — including employers, businesses paying contractors, rent payers above ₹50,000/month, and professionals making specified payments — must file quarterly TDS returns using the relevant form (24Q, 26Q, 27Q or 27EQ).",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late TDS return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Section 234E levies ₹200 per day of delay until the return is filed, subject to a maximum of the TDS amount. Section 271H can additionally levy ₹10,000 to ₹1 lakh for non-filing or furnishing incorrect information.",
      },
    },
    {
      "@type": "Question",
      name: "What are the TDS return due dates for FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Q1 (Apr–Jun): 31st July 2025. Q2 (Jul–Sep): 31st October 2025. Q3 (Oct–Dec): 31st January 2026. Q4 (Jan–Mar): 31st May 2026. Government deductors have earlier due dates.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function QuarterlyTDSClient() {
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

      <main className="bg-white text-gray-800 overflow-x-hidden">
        <DeadlineBanner />

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
              <span className="text-white">Quarterly TDS Return</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📋 Quarterly TDS Return — Form 24Q, 26Q, 27Q & 27EQ
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Quarterly TDS<br />
                  <span className="text-[#7ecbf0]">Return Filing</span><br />
                  FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Every business, employer, or professional who deducts Tax at Source (TDS) must
                  file quarterly returns — Form{" "}
                  <strong className="text-white">24Q (salary)</strong>,{" "}
                  <strong className="text-white">26Q (non-salary)</strong>,{" "}
                  <strong className="text-white">27Q (non-residents)</strong>, or{" "}
                  <strong className="text-white">27EQ (TCS)</strong>. Missing the deadline triggers
                  Section 234E penalties of ₹200/day. Taxvio's CA-assisted TDS return service
                  ensures accurate, timely filing — starting ₹999 per quarter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File TDS Return Now — ₹999 →
                  </Link>
                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    📞 Free Consultation
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {[
                    "✅ Form 24Q, 26Q, 27Q & 27EQ",
                    "✅ Challan Reconciliation",
                    "✅ TRACES Correction Support",
                    "✅ TAN Registration Assistance",
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
                  Key Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "4 Forms: 24Q, 26Q, 27Q, 27EQ"],
                    ["📅", "Q4 Due: 31st May 2026"],
                    ["⚠️", "₹200/day penalty under Sec 234E"],
                    ["🔍", "TRACES correction for wrong PAN/amounts"],
                    ["💰", "Interest: 1% (short deduction), 1.5% (short payment)"],
                    ["🏷️", "Starting fee: ₹999 per quarter"],
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
              { number: "4 Forms", label: "24Q · 26Q · 27Q · 27EQ", icon: "📋" },
              { number: "₹200/day", label: "Sec 234E Penalty for Late Filing", icon: "⚠️" },
              { number: "31 May", label: "Q4 FY 2025-26 Due Date", icon: "📅" },
              { number: "₹999", label: "Starting Fee Per Quarter", icon: "💰" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
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
            {[
              "✔ CA-Assisted All Quarters",
              "✔ Challan & PAN Reconciliation",
              "✔ TRACES Correction Support",
              "✔ Justification Report Review",
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

          {/* INTRO */}
          <section id="overview">
            <SectionLabel text="What Is TDS Return Filing" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              Quarterly TDS Return Filing — Complete Guide FY 2025-26
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Tax Deducted at Source (TDS) is India's mechanism of collecting income tax at the
                  point of payment. Any person or entity — company, LLP, partnership firm, sole
                  proprietor, individual (in specified cases), or Hindu Undivided Family (HUF) —
                  who deducts TDS while making payments such as salary, contractor fees, rent,
                  professional charges, or interest, is legally required to{" "}
                  <strong>deposit the deducted amount with the government</strong> and then file a{" "}
                  <strong>quarterly TDS return</strong> declaring all such deductions.
                </p>
                <p>
                  The TDS return is not merely a formality — it is the document basis on which
                  deductees see their TDS credit in <strong>Form 26AS and AIS</strong>. If you
                  deduct TDS but fail to file the return or file it incorrectly, your employees and
                  vendors cannot claim that TDS credit when filing their own ITRs, leading to
                  disputes, demands, and reputational damage for your business.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Quarterly TDS returns are filed using four prescribed forms depending on the
                  nature of payments:{" "}
                  <strong>Form 24Q</strong> for salary payments,{" "}
                  <strong>Form 26Q</strong> for all non-salary domestic payments,{" "}
                  <strong>Form 27Q</strong> for payments to non-residents and foreign companies, and{" "}
                  <strong>Form 27EQ</strong> for Tax Collected at Source (TCS). Each return must be
                  filed every quarter within the prescribed due dates — irrespective of whether TDS
                  was deducted or whether any payment was made.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides
                  end-to-end quarterly TDS return filing for businesses, employers, and
                  professionals — including TAN registration, challan reconciliation, TRACES
                  correction statements, and lower deduction certificate assistance — serving
                  Uttar Pradesh and pan-India, starting ₹999 per quarter.
                </p>
              </div>
            </div>
          </section>

          {/* WHO MUST FILE */}
          <section id="who-must-file">
            <SectionLabel text="Applicability" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Must File Quarterly TDS Returns?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "🏢",
                  title: "Employers & Companies",
                  desc: "Any company or business paying salary to employees must deduct TDS under Section 192 and file Form 24Q every quarter.",
                },
                {
                  icon: "🏪",
                  title: "Proprietors & Partnerships",
                  desc: "Proprietors and firms whose accounts are subject to audit under Section 44AB must deduct TDS on contractor, rent, and professional payments.",
                },
                {
                  icon: "🏗️",
                  title: "Contractors & Sub-Contractors",
                  desc: "Businesses making payments to contractors or sub-contractors above ₹30,000 per transaction (₹1 lakh annual) must deduct TDS under Section 194C and report in Form 26Q.",
                },
                {
                  icon: "🏠",
                  title: "Rent Payers (HUF/Individual)",
                  desc: "Individuals and HUFs paying rent above ₹50,000 per month must deduct TDS at 2% under Section 194-IB and file Form 26QC (challan-cum-statement).",
                },
                {
                  icon: "💻",
                  title: "Businesses Paying Professionals",
                  desc: "Payments to doctors, lawyers, CAs, engineers, architects, or consultants exceeding ₹30,000 per year attract TDS under Section 194J — reported in Form 26Q.",
                },
                {
                  icon: "🌏",
                  title: "Businesses with NRI / Foreign Payments",
                  desc: "Any person making payments to non-residents, foreign companies, or NRIs — including royalties, technical fees, and business income — must deduct TDS and file Form 27Q.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-[#00416a] mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TDS FORMS */}
          <section id="tds-forms">
            <SectionLabel text="Which Form Applies" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Form 24Q vs 26Q vs 27Q vs 27EQ — Which TDS Return Form Do You Need?
            </h2>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Form", "Nature of Payment", "Applicable TDS Sections", "Who Files"].map(
                      (h) => (
                        <th key={h} className="px-5 py-4 text-left font-semibold">
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [
                      "Form 24Q",
                      "Salary payments to resident employees",
                      "Section 192 (Salary TDS)",
                      "All employers — companies, firms, proprietors with employees",
                    ],
                    [
                      "Form 26Q",
                      "All non-salary payments to residents — contractor fees, rent, interest, professional charges, commission, dividends",
                      "Sec 194A, 194C, 194H, 194I, 194J, 194S, 194N & others",
                      "Companies, firms, audit-liable proprietors, government offices",
                    ],
                    [
                      "Form 27Q",
                      "Payments to non-residents, NRIs & foreign companies — royalties, technical fees, business income, dividends",
                      "Sections 195, 196A, 196B, 196C, 196D",
                      "Any person / entity making cross-border payments to NRIs or foreign entities",
                    ],
                    [
                      "Form 27EQ",
                      "Tax Collected at Source (TCS) — scrap, timber, tendu leaves, liquor, vehicles, foreign remittance (LRS), e-commerce",
                      "Section 206C (all sub-sections)",
                      "Sellers, dealers, e-commerce operators, and agents required to collect TCS",
                    ],
                  ].map(([form, nature, sections, filer], i) => (
                    <tr key={form} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-bold text-[#00416a] whitespace-nowrap">
                        {form}
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{nature}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{sections}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{filer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-[#00416a]/5 border border-[#00416a]/10 rounded-2xl px-6 py-5">
              <p className="text-sm text-[#00416a] font-semibold">
                💡 <strong>Note:</strong> Form 26QC (TDS on rent by individuals/HUF), Form 26QB
                (TDS on property purchase), and Form 26QD (TDS on payment to resident contractor
                by individuals) are challan-cum-statement forms — not quarterly returns — but
                Taxvio assists with these as well.
              </p>
            </div>
          </section>

          {/* DUE DATES */}
          <section id="due-dates">
            <SectionLabel text="Quarterly Due Dates" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              TDS Return Due Dates — FY 2025-26 (All Quarters)
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Missing these quarterly deadlines triggers an automatic ₹200/day penalty under
              Section 234E — which starts accumulating the very next day.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  quarter: "Q1",
                  period: "April – June 2025",
                  deadline: "31st July 2025",
                  status: "Filed",
                  color: "green",
                },
                {
                  quarter: "Q2",
                  period: "July – September 2025",
                  deadline: "31st October 2025",
                  status: "Filed",
                  color: "green",
                },
                {
                  quarter: "Q3",
                  period: "October – December 2025",
                  deadline: "31st January 2026",
                  status: "Filed",
                  color: "green",
                },
                {
                  quarter: "Q4",
                  period: "January – March 2026",
                  deadline: "31st May 2026",
                  status: "Due Now",
                  color: "red",
                },
              ].map((q) => (
                <div
                  key={q.quarter}
                  className={`rounded-2xl border-t-4 p-6 bg-white shadow-sm hover:shadow-md transition ${
                    q.color === "red"
                      ? "border-red-500"
                      : "border-green-500"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-extrabold text-[#00416a]">{q.quarter}</span>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        q.color === "red"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {q.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{q.period}</p>
                  <p className="font-bold text-gray-800">{q.deadline}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Applies to Form 24Q, 26Q, 27Q, 27EQ
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
              <p className="text-sm text-amber-800 font-semibold">
                ⚠️ <strong>Government Deductors:</strong> For Central / State Government deductors,
                Q1–Q3 TDS returns are due on 31st October, 31st January, and 30th April respectively.
                Q4 due date remains 15th May. Challan deposit (Book entry) is due on 7th of the
                following month for all deductors (April to February) and 30th April for March.
              </p>
            </div>
          </section>

          {/* KEY TDS SECTIONS */}
          <section id="tds-sections">
            <SectionLabel text="Common TDS Sections" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Most Common TDS Sections for Businesses & Proprietors
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Understanding which section applies to each payment type prevents wrong rate
              deductions — a common reason for TRACES demands and short-deduction notices.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {[
                      "Section",
                      "Nature of Payment",
                      "Threshold",
                      "TDS Rate",
                      "Form",
                    ].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["192", "Salary", "Above basic exemption limit", "Slab rates", "24Q"],
                    ["194A", "Interest (other than securities)", "₹40,000 (₹50,000 for senior citizens)", "10%", "26Q"],
                    ["194C", "Contractor / Sub-contractor payments", "₹30,000 single / ₹1,00,000 annual", "1% (individual/HUF), 2% (others)", "26Q"],
                    ["194H", "Commission or brokerage", "₹15,000", "5%", "26Q"],
                    ["194I", "Rent — land, building, plant & machinery", "₹2,40,000 per year", "2% (machinery), 10% (land & building)", "26Q"],
                    ["194J", "Professional / technical service fees", "₹30,000", "2% (technical), 10% (professional)", "26Q"],
                    ["194Q", "Purchase of goods (buyer's TDS)", "₹50 lakh turnover from seller", "0.1%", "26Q"],
                    ["195", "Payments to non-residents / foreign companies", "No threshold (all payments)", "As per DTAA / applicable rates", "27Q"],
                  ].map(([sec, nature, threshold, rate, form], i) => (
                    <tr key={sec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-bold text-[#00416a]">{sec}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{nature}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{threshold}</td>
                      <td className="px-5 py-4 font-semibold text-[#00416a]">{rate}</td>
                      <td className="px-5 py-4 font-bold text-gray-700">{form}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* PENALTIES */}
          <section
            id="penalties"
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Penalties & Interest" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Penalties & Interest for TDS Non-Compliance — What's at Stake
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              TDS non-compliance compounds quickly. ₹200/day under Section 234E begins the very
              next day after the deadline — and Section 271H penalties are separate and additional.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  trigger: "Late TDS Return Filing — Section 234E",
                  detail:
                    "₹200 per day of delay, from the day after the due date until the return is filed — subject to a ceiling of the total TDS amount. This is automatically computed by the system and demands are raised through TRACES/Justification Reports.",
                  penalty: "₹200/day, max = TDS amount deducted",
                },
                {
                  trigger: "Non-Filing or Incorrect Return — Section 271H",
                  detail:
                    "Penalty levied in addition to Section 234E for failure to file TDS return within 1 year of due date, or for furnishing incorrect PAN, challan details, or deduction amounts. Can be avoided if TDS + interest is deposited within 1 year.",
                  penalty: "₹10,000 to ₹1,00,000",
                },
                {
                  trigger: "Short Deduction of TDS — Section 201(1A)",
                  detail:
                    "If TDS is deducted at a lower rate or not deducted at all, interest at 1% per month (or part) is charged from the date TDS was deductible to the actual deduction date.",
                  penalty: "1% per month (simple interest)",
                },
                {
                  trigger: "Short Payment / Late Deposit — Section 201(1A)",
                  detail:
                    "Once TDS is deducted, it must be deposited within the due date. Delay in depositing deducted TDS attracts interest at 1.5% per month from deduction date to actual payment date.",
                  penalty: "1.5% per month (simple interest)",
                },
                {
                  trigger: "Disallowance of Expense — Section 40(a)(ia)",
                  detail:
                    "If TDS is not deducted on eligible payments (contractor fees, rent, interest, professional charges), 30% of such payments are disallowed as business expenses, increasing your taxable income significantly.",
                  penalty: "30% expense disallowance — higher tax",
                },
                {
                  trigger: "Prosecution under Section 276B",
                  detail:
                    "In cases of habitual non-deposit of deducted TDS or deliberate evasion, prosecution can be initiated with rigorous imprisonment of 3 months to 7 years along with fine.",
                  penalty: "3 months to 7 years imprisonment",
                },
              ].map((item) => (
                <div key={item.trigger} className="bg-white border border-red-100 rounded-2xl p-6">
                  <p className="font-bold text-red-600 mb-2">⚠️ {item.trigger}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.detail}</p>
                  <div className="bg-red-50 rounded-xl px-4 py-2">
                    <p className="text-xs font-semibold text-red-600">
                      Consequence: {item.penalty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CORRECTION STATEMENT */}
          <section
            id="correction-statement"
            className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="TDS Correction" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              TRACES Correction Statement — Fixing Errors in Filed TDS Returns
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Errors in filed TDS returns — wrong PAN, incorrect challan details, mismatched TDS
              amounts — must be corrected promptly. These errors cause mismatches in Form 26AS,
              leading to demands on both the deductor and the deductee.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  type: "Wrong PAN of Deductee",
                  impact: "TDS credit not reflecting in deductee's 26AS — deductee faces tax demand",
                  fix: "Correction via TRACES — C3 type correction",
                },
                {
                  type: "Incorrect Challan Details",
                  impact: "Mismatch between return and deposited TDS — demand notice raised on deductor",
                  fix: "OLTAS challan correction + C2 type correction statement",
                },
                {
                  type: "Wrong TDS Amount Reported",
                  impact: "Under-reported deduction leads to 234E interest demand; over-reported creates AIS mismatch",
                  fix: "C5 type correction with revised amounts",
                },
                {
                  type: "Deductee Entry Missing",
                  impact: "Employee or vendor TDS credit not visible in their Form 26AS — leads to disputes during ITR filing",
                  fix: "Addition of deductee via correction statement",
                },
                {
                  type: "Section Code Error",
                  impact: "TDS mapped to wrong section — creates mismatch and can attract scrutiny",
                  fix: "Section code correction via TRACES portal",
                },
                {
                  type: "Late Filing of Original Return",
                  impact: "Even if TDS was deducted and deposited, late filing still attracts 234E penalty",
                  fix: "File original return immediately to stop penalty accrual — arrears still payable",
                },
              ].map((item) => (
                <div
                  key={item.type}
                  className="bg-white border border-amber-100 rounded-xl p-5"
                >
                  <p className="font-bold text-amber-700 text-sm mb-1">🔧 {item.type}</p>
                  <p className="text-xs text-gray-600 mb-2">
                    <span className="font-semibold text-red-600">Impact:</span> {item.impact}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-green-700">Fix:</span> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documents Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Quarterly TDS Return Filing
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Prepare these details in advance for accurate, penalty-free TDS return preparation
              and e-filing every quarter.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#00416a] mb-4">🏦 Deductor & Challan Records</p>
                <ul className="space-y-2">
                  {[
                    "TAN (Tax Deduction and Collection Account Number) of the deductor",
                    "PAN of the deductor (company, firm, or proprietor)",
                    "TDS challan details — BSR code, challan serial number, date, amount",
                    "Online TDS payment confirmation (via NSDL/income tax portal)",
                    "Bank statement showing TDS deposits for the quarter",
                    "Previous quarter's TDS return acknowledgement (27A) for reference",
                    "TAN registration certificate (for first-time filers)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-green-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-green-700 mb-4">
                  👥 Deductee (Employee / Vendor) Details
                </p>
                <ul className="space-y-2">
                  {[
                    "PAN card of each deductee — employee, contractor, vendor, or professional",
                    "Name and address of each deductee as per PAN records",
                    "Payment amount and TDS deducted for each deductee in the quarter",
                    "Section under which TDS was deducted (194C, 194J, 192, etc.)",
                    "Salary details — gross salary, allowances, deductions (Form 12BB for employees)",
                    "Form 15G / 15H declarations (if applicable — no deduction cases)",
                    "Lower deduction certificates u/s 197 (if any deductee holds one)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
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
              Taxvio's 6-Step Quarterly TDS Return Filing Process
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Accurate TDS return filing requires correct section mapping, challan reconciliation,
              and PAN verification before data entry. Our structured quarterly workflow ensures
              zero-error returns and on-time e-filing every quarter.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Payment & Deduction Data Collection",
                    desc: "We collect all payment details made during the quarter — contractor invoices, salary registers, rent agreements, interest ledgers, and professional fee bills. Each payment is mapped to the correct TDS section to ensure accurate rate application and no over or under deduction.",
                  },
                  {
                    step: "02",
                    title: "TDS Challan Reconciliation with OLTAS",
                    desc: "All TDS challans deposited via bank or online are verified against the OLTAS (Online Tax Accounting System) records. BSR codes, challan serial numbers, dates, and amounts are reconciled to ensure no unmatched challan — a common source of TRACES demand notices.",
                  },
                  {
                    step: "03",
                    title: "Deductee PAN Validation & Data Preparation",
                    desc: "PAN of every deductee (employee or vendor) is validated against the Income Tax database. Payments are mapped to each deductee with the correct section code, amount, and TDS. Form 15G/15H declarations and lower deduction certificates (u/s 197) are incorporated where applicable.",
                  },
                  {
                    step: "04",
                    title: "TDS Return File Preparation (FVU Validation)",
                    desc: "The return data file is prepared using the prescribed format and validated using the FVU (File Validation Utility) provided by NSDL/TIN. Any validation errors — wrong PAN structure, section code mismatch, challan over-utilisation — are corrected before proceeding to filing.",
                  },
                  {
                    step: "05",
                    title: "e-Filing on TRACES / TIN-NSDL Portal",
                    desc: "The validated return file is uploaded on the TIN-NSDL portal or Income Tax TDS portal along with Form 27A (control summary). Acknowledgement with provisional receipt number is generated and shared with you. Post filing, Form 26AS is checked to confirm TDS credits are reflecting correctly for all deductees.",
                  },
                  {
                    step: "06",
                    title: "Form 16 / 16A Generation & Advance Calendar",
                    desc: "After Q4 filing, we generate Form 16 (salary TDS certificate) and Form 16A (non-salary TDS certificate) from TRACES for distribution to employees and vendors. We also provide a TDS compliance calendar for the next financial year — including challan due dates and return deadlines — to prevent any default.",
                  },
                ].map((step, i) => (
                  <div
                    key={step.step}
                    className="relative md:pl-16 flex gap-6 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-md">
                      {i + 1}
                    </div>
                    <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
                      <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">
                        Step {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FEE CALCULATOR */}
          <TDSFeeCalculator />

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Trusted by Businesses & Employers Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Mittal",
                  location: "Khatauli",
                  text: "We have 18 employees and multiple contractor payments every month. Taxvio handles all 4 quarters of 24Q and 26Q without any delay — Form 16 is always ready on time.",
                },
                {
                  name: "Priya Agarwal",
                  location: "Muzaffarnagar",
                  text: "I had a TRACES demand due to wrong challan details in an old TDS return. Taxvio filed the correction statement and got the demand resolved within a week. Very professional.",
                },
                {
                  name: "Anand Kumar",
                  location: "Noida",
                  text: "Our startup pays freelancers across India and abroad. Taxvio manages both 26Q and 27Q each quarter — PAN validation, challan matching, everything is handled seamlessly.",
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
              TDS Return Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides
              quarterly TDS return filing for businesses, employers, contractors, and
              professionals across <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
              <strong>Meerut</strong>, <strong>Ghaziabad</strong>, and{" "}
              <strong>Mumbai</strong> — as well as pan-India online. We have deep familiarity
              with TDS compliance requirements for Western UP businesses — sugar mills, textiles,
              trading, agricultural processing — and the specific payment structures they involve.
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
              Related Income Tax & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "ITR — Proprietor",
                  icon: "🏪",
                  link: "/serviceslist/income-tax/itr-proprietor",
                  desc: "ITR-3 / ITR-4 filing with 44AD & 44ADA evaluation.",
                },
                {
                  title: "Income Tax Audit",
                  icon: "🔍",
                  link: "/serviceslist/income-tax/income-tax-audit",
                  desc: "Section 44AB audit & Form 3CB/3CD preparation.",
                },
                {
                  title: "ITR — Salaried",
                  icon: "👔",
                  link: "/serviceslist/income-tax/itr-salaried",
                  desc: "ITR-1 / ITR-2 filing for salaried employees.",
                },
                {
                  title: "Income Tax Scrutiny",
                  icon: "⚖️",
                  link: "/serviceslist/income-tax/income-tax-scrutiny",
                  desc: "143(2) notice defence & assessment support.",
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
                    Q4 FY 2025-26 Due — 31st May 2026
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File Your Quarterly TDS Return<br />
                    Accurately & On Time
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Stop the ₹200/day Section 234E penalty from accruing. Taxvio's CA-assisted
                    TDS return filing for Form 24Q, 26Q, 27Q & 27EQ starts at ₹999 per quarter.
                    Serving Khatauli, Muzaffarnagar, Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File TDS Return — ₹999 Onwards
                  </Link>
                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    📞 Free Consultation
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

function DeadlineBanner() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const deadline = new Date("May 31, 2026").getTime();
    const today = new Date().getTime();
    setDaysLeft(Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div
      className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
      role="alert"
      aria-live="polite"
    >
      ⏳ TDS Return Deadline — Q4 FY 2025-26:{" "}
      <strong>31st May 2026</strong> | Q1 FY 2026-27:{" "}
      <strong>31st July 2026</strong>
      &nbsp;|&nbsp;{" "}
      {daysLeft !== null ? (
        <strong>{daysLeft} Days Left for Q4 — ₹200/day Penalty Applies After!</strong>
      ) : (
        "Act Now"
      )}
    </div>
  );
}

function TDSFeeCalculator() {
  const [employees, setEmployees] = useState("");
  const [vendors, setVendors] = useState("");
  const [hasNRI, setHasNRI] = useState(false);
  const [result, setResult] = useState<{
    fee: number;
    forms: string;
    label: string;
  } | null>(null);

  const calculate = () => {
    const emp = Number(employees);
    const ven = Number(vendors);
    if (!emp && !ven) return;

    let fee = 0;
    const forms: string[] = [];

    if (emp > 0) {
      fee += emp <= 10 ? 999 : emp <= 50 ? 1499 : 2499;
      forms.push("Form 24Q");
    }
    if (ven > 0) {
      fee += ven <= 10 ? 999 : ven <= 50 ? 1499 : 2499;
      forms.push("Form 26Q");
    }
    if (hasNRI) {
      fee += 1499;
      forms.push("Form 27Q");
    }

    // Combo discount
    if (forms.length > 1) fee = Math.round(fee * 0.85);

    setResult({
      fee,
      forms: forms.join(" + "),
      label:
        forms.length > 1
          ? "Combined quarterly filing — 15% combo discount applied"
          : "Single form quarterly filing",
    });
  };

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Quarterly TDS Filing Fee
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl">
        Enter your deductee count to get an instant per-quarter fee estimate. Combo discount
        applies when multiple forms are required.
      </p>

      <div className="bg-gray-50 border rounded-3xl p-8 max-w-xl">
        <div className="space-y-4 mb-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-2 text-sm">
              Number of Employees (Form 24Q — Salary TDS)
            </label>
            <input
              type="number"
              placeholder="e.g. 5 (enter 0 if none)"
              value={employees}
              onChange={(e) => {
                setEmployees(e.target.value);
                setResult(null);
              }}
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#00416a] text-sm"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2 text-sm">
              Number of Vendors / Contractors (Form 26Q — Non-Salary TDS)
            </label>
            <input
              type="number"
              placeholder="e.g. 12 (enter 0 if none)"
              value={vendors}
              onChange={(e) => {
                setVendors(e.target.value);
                setResult(null);
              }}
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#00416a] text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="nri-check"
              checked={hasNRI}
              onChange={(e) => {
                setHasNRI(e.target.checked);
                setResult(null);
              }}
              className="w-4 h-4 accent-[#00416a]"
            />
            <label
              htmlFor="nri-check"
              className="text-sm font-semibold text-gray-700 cursor-pointer"
            >
              Includes payments to NRI / Foreign company (Form 27Q)
            </label>
          </div>
        </div>
        <button
          onClick={calculate}
          disabled={!employees && !vendors}
          className="w-full bg-[#00416a] text-white py-3 rounded-xl font-bold hover:bg-[#002b45] transition disabled:opacity-40 text-sm"
        >
          Calculate TDS Filing Fee
        </button>

        {result && (
          <div className="mt-5 border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee:{" "}
              <span className="text-3xl font-extrabold">
                ₹{result.fee.toLocaleString("en-IN")}
              </span>{" "}
              per quarter
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {result.forms} — {result.label}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              * Includes data preparation, FVU validation, e-filing & acknowledgement. TRACES
              correction statements and Form 16/16A generation billed separately. GST extra.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition"
            >
              Start TDS Filing Now →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "Who is required to file quarterly TDS returns in India?",
      a: "Any person or entity who deducts TDS while making specified payments must file quarterly TDS returns. This includes companies, LLPs, partnership firms, proprietors whose accounts are audited under Section 44AB, individuals and HUFs paying rent above ₹50,000/month or paying contractors for personal work, and any person making payments to non-residents. TAN registration is mandatory before deducting TDS.",
    },
    {
      q: "What are the due dates for TDS return filing for FY 2025-26?",
      a: "Q1 (April–June 2025): 31st July 2025. Q2 (July–September 2025): 31st October 2025. Q3 (October–December 2025): 31st January 2026. Q4 (January–March 2026): 31st May 2026. These apply to Form 24Q, 26Q, 27Q, and 27EQ. Government deductors follow different Q4 deadlines (15th May). TDS challan deposit is due on 7th of the following month for all quarters except March (April 30th).",
    },
    {
      q: "What is the penalty for late TDS return filing?",
      a: "Section 234E levies a mandatory penalty of ₹200 per day of delay — starting the day after the due date — until the return is filed, subject to a ceiling of the total TDS amount for that quarter. This is automatically computed by the system. Additionally, Section 271H can levy ₹10,000 to ₹1 lakh for non-filing beyond one year or incorrect information. These penalties are separate from interest on late deposit under Section 201(1A).",
    },
    {
      q: "What is the difference between Form 24Q and Form 26Q?",
      a: "Form 24Q is filed by employers for TDS deducted on salary payments to resident employees under Section 192. It is filed quarterly and is the basis for generating Form 16 TDS certificates. Form 26Q is filed for all non-salary domestic payments — contractor fees (194C), professional charges (194J), rent (194I), interest (194A), commission (194H), and others. Form 16A certificates for vendors and contractors are generated from Form 26Q.",
    },
    {
      q: "Can TDS returns be corrected after filing?",
      a: "Yes. TDS returns can be corrected by filing a correction statement on the TRACES portal. Common corrections include wrong PAN of deductee (C3 correction), incorrect challan details (C2 correction after OLTAS correction), wrong TDS amount (C5 correction), and missing deductee entries. However, corrections attract renewed scrutiny and should ideally be done before TRACES generates demand notices. Taxvio provides correction statement filing as a separate service.",
    },
    {
      q: "Is TDS return filing mandatory even if no payment was made in a quarter?",
      a: "If a deductor is registered with TAN and had TDS deductions in any quarter of the year, they must file returns for all four quarters — even quarters with nil transactions. A nil TDS return must be filed to avoid late filing penalties. Deductors who have permanently ceased operations and closed their TAN can request cancellation of TAN to stop the quarterly filing obligation.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Quarterly TDS Return Filing
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

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}