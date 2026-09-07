// app/serviceslist/income-tax/nri-tax-filing/NRITaxFilingClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "NRI Tax Filing & Compliance - Complete ITR Filing for Non-Resident Indians",
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
    "Specialized tax filing and compliance services for Non-Resident Indians (NRIs) with Indian-source income. Complete ITR-2 filing, TDS refund claims, DTAA benefit application, foreign income reporting, capital gains computation, rental income tax. Expert assistance for NRIs in USA, UK, UAE, Singapore, Canada, Australia. Serving Khatauli, Muzaffarnagar and pan-India online.",
  serviceType: "NRI Income Tax Filing & Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "9999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do NRIs need to file Income Tax Return in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if an NRI has any income earned or accrued in India (rental income, capital gains, interest on NRO accounts, salary from Indian employer, business income), they MUST file ITR in India, regardless of whether tax has been deducted at source (TDS). Filing is mandatory if total Indian income exceeds basic exemption limit (₹2.5 lakh for individuals below 60 years, ₹3 lakh for 60-80 years, ₹5 lakh for 80+ years).",
      },
    },
    {
      "@type": "Question",
      name: "Which ITR form should NRIs file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NRIs typically file ITR-2 (for individuals with capital gains, multiple house properties, foreign income, or income above ₹50 lakh). ITR-3 is used if NRI has business or professional income in India. ITR-1 (Sahaj) is NOT applicable for NRIs as it is only for residents.",
      },
    },
    {
      "@type": "Question",
      name: "Can NRIs claim TDS refund on rental income and FD interest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If TDS deducted on rental income (30% under Section 194-IB/195) or interest on NRO FD (30% under Section 194A) is higher than actual tax liability, NRI can claim refund by filing ITR. With DTAA benefit, TDS can be reduced to treaty rates (10-15%), and excess TDS refunded via ITR filing.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function NRITaxFilingClient() {
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
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🌍 NRIs: File Your Indian ITR Before Deadline — Claim TDS Refund & Avoid Penalties
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
              <span className="text-white">NRI Tax Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🌍 NRI Tax Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  NRI Tax Filing
                  <br />
                  <span className="text-[#7ecbf0]">& Compliance</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Are you an <strong className="text-white">NRI</strong> with{" "}
                  <strong className="text-white">
                    rental income, capital gains, or interest from India
                  </strong>
                  ? Confused about ITR filing, TDS refund, or DTAA benefits?{" "}
                  <strong className="text-white">Taxvio</strong> specializes in{" "}
                  <strong className="text-white">
                    NRI tax filing and compliance
                  </strong>{" "}
                  — from ITR-2 preparation, foreign income reporting, TDS refund
                  claims, DTAA application, to complete tax optimization for NRIs
                  in USA, UK, UAE, Singapore, Canada, and worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File NRI ITR — ₹2,999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20NRI%20tax%20filing%20in%20India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ ITR-2 Filing for NRIs",
                    "✅ TDS Refund Claims",
                    "✅ DTAA Benefits",
                    "✅ Capital Gains Tax",
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
                    ["📋", "ITR-2 form for NRIs with Indian income"],
                    ["💰", "Claim TDS refund on rental, interest, salary"],
                    ["🌍", "DTAA benefits to reduce double taxation"],
                    ["🏠", "Rental income, capital gains, FD interest"],
                    ["📊", "Foreign income reporting (Schedule FA/FSI)"],
                    ["🚀", "Filing fee: ₹2,999 onwards"],
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
              { number: "5,000+", label: "NRI ITRs Filed", icon: "✅" },
              { number: "90+ Countries", label: "NRIs Served", icon: "🌍" },
              { number: "₹50 Cr+", label: "TDS Refunds Claimed", icon: "💰" },
              { number: "₹2,999", label: "Starting Fee", icon: "💼" },
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
              "✔ NRI Tax Experts",
              "✔ DTAA Specialists",
              "✔ TDS Refund Pros",
              "✔ Worldwide Support",
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
          {/* WHO IS NRI */}
          <section id="who-is-nri">
            <SectionLabel text="Understanding NRI Status" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              Who Is Considered an NRI for Income Tax Purposes?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Under the <strong>Income Tax Act, 1961 (Section 6)</strong>, an
                  individual is classified as a{" "}
                  <strong>Non-Resident Indian (NRI)</strong> if they do NOT meet
                  the criteria for being a resident of India during a financial
                  year.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📅 Residential Status Criteria (FY 2024-25 onwards)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    You are <strong>RESIDENT</strong> if you satisfy{" "}
                    <strong>ANY ONE</strong> of the following:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">1.</span>
                      Present in India for <strong>182 days or more</strong>{" "}
                      during the financial year, OR
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">2.</span>
                      Present in India for <strong>60 days or more</strong> during
                      the FY + <strong>365 days or more</strong> in preceding 4
                      years
                    </li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-3">
                    If you <strong>DO NOT</strong> meet either condition, you are{" "}
                    <strong>NON-RESIDENT (NRI)</strong>.
                  </p>
                </div>
                <p className="font-bold text-[#00416a]">
                  Example 1: NRI Classification
                </p>
                <p className="text-sm">
                  <strong>Mr. Sharma</strong> lives and works in the USA. He visits
                  India for 45 days during FY 2024-25 (vacation). In the previous 4
                  years (FY 2020-21 to 2023-24), he was in India for a total of 180
                  days.
                </p>
                <p className="text-sm font-semibold text-green-700">
                  ✅ Status: <strong>NRI</strong> (does not meet 182-day test or
                  60+365 test)
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Example 2: Resident Classification
                </p>
                <p className="text-sm">
                  <strong>Ms. Kapoor</strong> works in Dubai but frequently visits
                  India. She spends 200 days in India during FY 2024-25.
                </p>
                <p className="text-sm font-semibold text-red-700">
                  ❌ Status: <strong>RESIDENT</strong> (meets 182-day test — NOT an
                  NRI for tax purposes)
                </p>

                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mt-4">
                  <p className="font-bold text-yellow-800 mb-2">
                    ⚠️ Special Cases
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">→</span>
                      <strong>Indian citizens working abroad:</strong> 60-day limit
                      increased to <strong>182 days</strong> if total Indian income
                      (excluding foreign income) does not exceed ₹15 lakh
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">→</span>
                      <strong>Deemed Residency:</strong> If you are Indian citizen
                      with total income &gt; ₹15 lakh and NOT liable to tax in ANY
                      other country, you may be deemed resident (even if outside
                      India)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">→</span>
                      <strong>RNOR vs. ROR:</strong> Residents are further
                      classified as Resident Not Ordinarily Resident (RNOR) or
                      Resident Ordinarily Resident (ROR) based on additional
                      criteria
                    </li>
                  </ul>
                </div>

                <p>
                  <strong>Taxvio</strong> provides expert residential status
                  determination for NRIs — analyzing days in India, previous year
                  status, income thresholds, and DTAA implications — ensuring
                  correct tax filing across Khatauli, Muzaffarnagar, Noida, Delhi
                  NCR, and pan-India online.
                </p>
              </div>
            </div>
          </section>

          {/* INCOME SOURCES */}
          <section id="income-sources">
            <SectionLabel text="Taxable Income for NRIs" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              What Income Is Taxable for NRIs in India?
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              NRIs are taxed in India ONLY on{" "}
              <strong>income earned or accrued in India</strong>. Foreign income is
              NOT taxable in India for NRIs (unlike residents who are taxed on
              worldwide income).
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  income: "Rental Income from Indian Property",
                  icon: "🏠",
                  desc: "If you own property in India and rent it out, rental income is taxable in India under 'Income from House Property'. TDS @ 30% is deducted by tenant if annual rent > ₹2.4 lakh (Section 194-IB) or @ 30% by tenant (if NRI) under Section 195.",
                  taxRate: "As per income tax slab after standard deduction (30% of NAV or ₹2 lakh, whichever is lower)",
                  tdsRate: "30% (can be reduced to 10-15% under DTAA)",
                  example:
                    "Annual rent ₹6 lakh → TDS deducted ₹1.8 lakh → Actual tax (after deductions) may be ₹60,000 → Claim ₹1.2 lakh refund via ITR",
                },
                {
                  income: "Capital Gains on Sale of Property/Shares",
                  icon: "📈",
                  desc: "Sale of property or shares in India attracts capital gains tax. Long-term capital gains (LTCG) on property held >24 months taxed @ 20% with indexation benefit. LTCG on listed equity shares/mutual funds >12 months taxed @ 10% (above ₹1 lakh). Short-term capital gains taxed as per slab rates.",
                  taxRate:
                    "LTCG: 20% (property with indexation), 10% (equity); STCG: Slab rates or 15% (equity)",
                  tdsRate:
                    "20% on LTCG (property) under Section 195; 1% TDS on sale proceeds >₹50 lakh (Section 194-IA)",
                  example:
                    "Sold flat for ₹1 crore (bought 10 years ago for ₹30 lakh) → Indexed cost ₹50 lakh → LTCG ₹50 lakh → Tax @ 20% = ₹10 lakh",
                },
                {
                  income: "Interest on NRO Fixed Deposits/Savings Account",
                  icon: "💰",
                  desc: "Interest earned on NRO (Non-Resident Ordinary) bank accounts, fixed deposits, recurring deposits is taxable in India. TDS @ 30% deducted by bank (Section 194A). Interest on NRE (Non-Resident External) and FCNR accounts is TAX-FREE in India.",
                  taxRate: "As per income tax slab (0% to 30%)",
                  tdsRate: "30% (can be reduced to 10-15% under DTAA with Form 10F)",
                  example:
                    "NRO FD interest ₹2 lakh → TDS deducted ₹60,000 → Actual tax (if no other income) ₹0 → Claim ₹60,000 refund",
                },
                {
                  income: "Salary from Indian Employer",
                  icon: "💼",
                  desc: "If you work for an Indian company while being NRI (rare, but possible if services rendered abroad), salary income is taxable in India. If salary is for services rendered IN India (even if you are NRI), it's taxable in India. DTAA provisions apply.",
                  taxRate: "As per income tax slab after standard deduction (₹50,000)",
                  tdsRate: "TDS as per applicable rates under Section 192",
                  example:
                    "Worked in India for 3 months, earned ₹3 lakh → Taxable in India → File ITR-2 to claim deductions/DTAA relief",
                },
                {
                  income: "Business/Professional Income in India",
                  icon: "🏢",
                  desc: "If you run a business or provide professional services in India (even remotely), income is taxable in India. Permanent Establishment (PE) rules under DTAA determine taxability. Freelance income from Indian clients is taxable.",
                  taxRate: "As per slab rates after business expenses and deductions",
                  tdsRate:
                    "10% TDS on professional fees (Section 194J); 2% on contract payments (194C)",
                  example:
                    "Freelance consulting fees ₹10 lakh from Indian clients → TDS ₹1 lakh → Net receipt ₹9 lakh → File ITR-2/ITR-3",
                },
                {
                  income: "Other Income (Dividends, Royalties, etc.)",
                  icon: "💵",
                  desc: "Dividends from Indian companies taxable @ slab rates (dividend distribution tax abolished from FY 2020-21). Royalties, technical fees, director fees from Indian entities taxable. Lottery/gambling winnings taxed @ 30%.",
                  taxRate:
                    "Dividends: Slab rates; Royalties: 10-20% under DTAA; Lottery: 30%",
                  tdsRate:
                    "10% on dividends (Section 194); 10% on royalties (Section 194J)",
                  example:
                    "Dividend income ₹50,000 → TDS ₹5,000 → Taxable as per slab",
                },
              ].map((item) => (
                <div
                  key={item.income}
                  className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        {item.income}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white rounded-xl p-3 border border-green-200">
                      <p className="text-xs font-bold text-green-800 mb-1">
                        📊 Tax Rate
                      </p>
                      <p className="text-xs text-gray-600">{item.taxRate}</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-green-200">
                      <p className="text-xs font-bold text-green-800 mb-1">
                        🔻 TDS Rate
                      </p>
                      <p className="text-xs text-gray-600">{item.tdsRate}</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-green-200">
                      <p className="text-xs font-bold text-green-800 mb-1">
                        💡 Example
                      </p>
                      <p className="text-xs text-gray-600">{item.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ITR FILING PROCESS */}
          <section id="filing-process">
            <SectionLabel text="Filing Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Complete NRI ITR Filing Process (Step-by-Step)
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              NRIs typically file <strong>ITR-2</strong> (for salary, capital gains,
              rental income, foreign income) or <strong>ITR-3</strong> (for business
              income). Here's the complete process:
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Residential Status Determination",
                    description:
                      "Taxvio calculates your days in India (from passport stamps), determines if you are NRI/RNOR/ROR, and assesses tax implications. We identify if you qualify for DTAA benefits based on tax residency in another country.",
                    duration: "1 day",
                  },
                  {
                    step: 2,
                    title: "Income Compilation & Classification",
                    description:
                      "We gather details of ALL Indian-source income: Rental income (rent agreement, tenant details, TDS certificates - Form 16A), Capital gains (sale deed, purchase deed, indexation computation), Interest on NRO accounts (bank interest certificates, Form 26AS), Salary/business income (Form 16, invoices, contracts), Dividends, royalties, other income. Foreign income details (if any) for Schedule FA/FSI reporting.",
                    duration: "2-3 days",
                  },
                  {
                    step: 3,
                    title: "TDS & Tax Paid Verification",
                    description:
                      "We download Form 26AS (Annual Tax Statement) from e-filing portal to verify: TDS deducted by tenants (194-IB/195), bank (194A), buyers (194-IA), employer (192). Advance tax or self-assessment tax paid (if any). We reconcile TDS with actual income and identify discrepancies.",
                    duration: "1 day",
                  },
                  {
                    step: 4,
                    title: "DTAA Benefit Analysis & Application",
                    description:
                      "We analyze applicable DTAA treaty between India and your country of residence (USA, UK, UAE, Singapore, etc.). We compute tax savings under DTAA (reduced TDS rates, exemptions). We prepare Form 10F (self-declaration for DTAA benefit) and supporting documents. If TRC (Tax Residency Certificate) from foreign country is available, we attach it for maximum DTAA benefit.",
                    duration: "2-3 days",
                  },
                  {
                    step: 5,
                    title: "Deduction & Exemption Optimization",
                    description:
                      "We claim all applicable deductions: Section 80C (maximum ₹1.5 lakh - LIC, PPF, ELSS), Section 80D (health insurance premium), Section 80TTA/TTB (interest on savings account), Standard deduction on rental income (30% of NAV or ₹2 lakh), Home loan interest (Section 24b), Capital gains exemptions (Section 54/54EC/54F). We choose between Old Tax Regime vs. New Tax Regime for optimal tax savings.",
                    duration: "1-2 days",
                  },
                  {
                    step: 6,
                    title: "ITR-2 Form Preparation",
                    description:
                      "We prepare ITR-2 with complete details: Personal information, residential status (NRI), Indian income sources, capital gains computation with indexation, rental income with property details, TDS details from Form 26AS, deductions claimed, tax computation, Schedule FA (Foreign Assets - if any), Schedule FSI (Foreign Source Income - if applicable), Form 10F attachment (DTAA benefit). We ensure 100% accuracy and compliance with Income Tax rules.",
                    duration: "2-3 days",
                  },
                  {
                    step: 7,
                    title: "Online ITR Filing & Verification",
                    description:
                      "We file ITR-2 online on Income Tax e-filing portal using your credentials (or we can file using our Digital Signature Certificate - DSC). We obtain ITR acknowledgment number. We verify ITR using Aadhaar OTP, EVC, or physical ITR-V (as applicable for NRIs). ITR must be verified within 30 days of filing.",
                    duration: "1 day",
                  },
                  {
                    step: 8,
                    title: "Refund Claim & Tracking",
                    description:
                      "If excess TDS is deducted, refund is claimed in ITR. We track refund processing on e-filing portal. Refund is directly credited to your pre-validated Indian bank account (NRE/NRO). Typical refund processing time: 2-6 months. We provide regular status updates and follow-up with ITD if delays occur.",
                    duration: "2-6 months",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-blue-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-blue-300 rounded-2xl p-6">
                <p className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>
                    Complete ITR filing: 7-10 days from document submission
                  </strong>{" "}
                  to ITR filing and verification. Refund processing (if applicable)
                  takes 2-6 months depending on ITD workload.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for NRI ITR Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card (copy)",
                    "Passport (copy with visa pages showing entry/exit stamps to India)",
                    "Aadhaar card (if available)",
                    "Form 26AS (downloaded from e-filing portal - shows TDS details)",
                    "Bank account details (NRE/NRO account for refund credit)",
                    "Previous year ITR acknowledgment (if filed)",
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
                  Income-Specific Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Rental income: Rent agreement, tenant PAN/Aadhaar, monthly rent receipts, Form 16A (TDS certificate from tenant)",
                    "Capital gains: Sale deed, purchase deed, indexation calculation, proof of improvements, Form 16A (TDS by buyer)",
                    "Interest income: NRO FD/savings bank interest certificate, Form 16A from bank",
                    "Salary: Form 16 (if salary from Indian employer), salary slips, employment contract",
                    "Foreign income proof: Foreign salary slips, bank statements, tax returns filed abroad (for Schedule FSI)",
                    "DTAA documents: Tax Residency Certificate (TRC) from country of residence, Form 10F self-declaration",
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

          {/* TDS REFUND */}
          <section id="tds-refund">
            <SectionLabel text="TDS Refund Claims" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How NRIs Can Claim TDS Refund
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                NRIs often face <strong>30% TDS</strong> on rental income, NRO
                interest, and capital gains — which is usually{" "}
                <strong>much higher than actual tax liability</strong>. Here's how
                to claim refund:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    📊 TDS Refund Scenario Analysis
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        scenario: "Rental Income - High TDS",
                        income: "Annual rent: ₹6 lakh",
                        tdsDeducted: "TDS @ 30% = ₹1,80,000",
                        actualTax:
                          "After standard deduction (30% of NAV = ₹1.8 lakh) → Taxable income ₹4.2 lakh → Tax @ 20% slab = ₹42,000",
                        refund: "Refund claimable = ₹1,80,000 - ₹42,000 = ₹1,38,000",
                      },
                      {
                        scenario: "NRO FD Interest - Excess TDS",
                        income: "FD interest: ₹2 lakh",
                        tdsDeducted: "TDS @ 30% = ₹60,000",
                        actualTax:
                          "If no other Indian income → Total income ₹2 lakh (below ₹2.5 lakh exemption limit) → Actual tax = ₹0",
                        refund: "Full refund = ₹60,000",
                      },
                      {
                        scenario: "LTCG with DTAA Benefit",
                        income: "Property sale LTCG: ₹20 lakh",
                        tdsDeducted: "TDS @ 20% = ₹4,00,000",
                        actualTax:
                          "With India-UAE DTAA, LTCG taxed @ 10% (treaty rate) = ₹2,00,000",
                        refund: "Refund with DTAA = ₹2,00,000",
                      },
                      {
                        scenario: "Multiple Income Sources",
                        income: "Rent ₹3L + Interest ₹1L + Dividend ₹50K = ₹4.5L",
                        tdsDeducted: "Total TDS = ₹90K + ₹30K + ₹5K = ₹1,25,000",
                        actualTax:
                          "After deductions (80C ₹1.5L, standard deduction on rent) → Taxable ₹2L → Tax ₹10,000",
                        refund: "Refund = ₹1,15,000",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-purple-50 rounded-xl p-4 border border-purple-300"
                      >
                        <p className="font-bold text-purple-800 text-sm mb-2">
                          {item.scenario}
                        </p>
                        <div className="space-y-1 text-xs text-gray-700">
                          <p>
                            <strong>Income:</strong> {item.income}
                          </p>
                          <p className="text-red-600">
                            <strong>TDS Deducted:</strong> {item.tdsDeducted}
                          </p>
                          <p>
                            <strong>Actual Tax:</strong> {item.actualTax}
                          </p>
                          <p className="text-green-700 font-bold">
                            💰 {item.refund}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    ✅ Steps to Claim TDS Refund
                  </h3>
                  <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                    <li>
                      Collect all TDS certificates (Form 16A) from tenant, bank,
                      buyer
                    </li>
                    <li>
                      Verify TDS details in Form 26AS (download from e-filing
                      portal)
                    </li>
                    <li>
                      File ITR-2 claiming all deductions and DTAA benefits (if
                      applicable)
                    </li>
                    <li>
                      In ITR, total tax paid (TDS + advance tax) will be compared
                      with actual tax liability
                    </li>
                    <li>
                      If TDS &gt; actual tax, refund amount is auto-calculated in
                      ITR
                    </li>
                    <li>Verify ITR within 30 days of filing (mandatory for refund)</li>
                    <li>
                      ITD processes refund and credits to your pre-validated bank
                      account (2-6 months)
                    </li>
                    <li>
                      Track refund status on e-filing portal under 'Refund/Demand
                      Status'
                    </li>
                  </ol>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    💡 Pro Tips to Maximize TDS Refund
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Submit Form 10F and TRC from your country of residence to claim DTAA benefits (reduces TDS rate from 30% to 10-15%)",
                      "Request tenant/bank to deduct TDS at lower rate (under Section 197 certificate) — avoids refund waiting time",
                      "Pre-validate your NRE/NRO bank account on e-filing portal to ensure smooth refund credit",
                      "File ITR before July 31 deadline to get faster refund processing (post-deadline filings processed later)",
                      "Claim all applicable deductions (80C, 80D, etc.) even as NRI to reduce tax liability and increase refund",
                      "If refund is delayed beyond 6 months, raise grievance on e-filing portal or contact Assessing Officer",
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5">→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* DTAA BENEFITS */}
          <section id="dtaa-benefits">
            <SectionLabel text="DTAA for NRIs" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              DTAA Benefits for NRIs (Country-Wise)
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Double Taxation Avoidance Agreement (DTAA) allows NRIs to reduce or
              eliminate double taxation on same income in both India and country of
              residence. Here's how DTAA benefits NRIs in popular countries:
            </p>

            <div className="space-y-6">
              {[
                {
                  country: "🇺🇸 India-USA DTAA (for NRIs in USA)",
                  benefits: [
                    {
                      income: "Rental Income from India",
                      withoutDTAA: "30% TDS in India + taxed again in USA",
                      withDTAA:
                        "15% TDS in India (with Form 10F + US TRC) + claim Foreign Tax Credit (FTC) in USA for Indian tax paid",
                    },
                    {
                      income: "Interest on NRO FD",
                      withoutDTAA: "30% TDS in India",
                      withDTAA:
                        "15% TDS in India (with TRC) + claim FTC in USA",
                    },
                    {
                      income: "Capital Gains on Property Sale",
                      withoutDTAA: "20% LTCG tax in India + taxed in USA",
                      withDTAA:
                        "20% LTCG tax in India (as per treaty, India has primary taxing rights) + claim FTC in USA",
                    },
                  ],
                },
                {
                  country: "🇦🇪 India-UAE DTAA (for NRIs in Dubai/UAE)",
                  benefits: [
                    {
                      income: "Rental Income",
                      withoutDTAA: "30% TDS in India (UAE has 0% tax, so no relief)",
                      withDTAA:
                        "12.5% TDS in India (with UAE TRC and Form 10F) — significant savings",
                    },
                    {
                      income: "Interest Income",
                      withoutDTAA: "30% TDS",
                      withDTAA: "12.5% TDS with DTAA",
                    },
                    {
                      income: "Capital Gains",
                      withoutDTAA: "20% LTCG",
                      withDTAA:
                        "10% LTCG (treaty rate) — saves 10% on entire LTCG",
                    },
                  ],
                },
                {
                  country: "🇬🇧 India-UK DTAA (for NRIs in UK)",
                  benefits: [
                    {
                      income: "Rental Income",
                      withoutDTAA: "30% TDS in India + UK tax (20-40%)",
                      withDTAA:
                        "15% TDS in India + claim FTC in UK for Indian tax paid",
                    },
                    {
                      income: "Pension from India",
                      withoutDTAA: "Taxed in both countries",
                      withDTAA:
                        "Taxable only in country of residence (UK) — exempt in India with DTAA claim",
                    },
                  ],
                },
                {
                  country: "🇸🇬 India-Singapore DTAA",
                  benefits: [
                    {
                      income: "Interest Income",
                      withoutDTAA: "30% TDS in India",
                      withDTAA: "15% TDS with TRC",
                    },
                    {
                      income: "Capital Gains on Shares",
                      withoutDTAA: "Taxed in both countries",
                      withDTAA:
                        "Taxable only in country of residence (India or Singapore depending on where shares are located)",
                    },
                  ],
                },
              ].map((treaty) => (
                <details
                  key={treaty.country}
                  className="group border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#00416a] transition"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span className="flex items-center gap-3 text-lg">
                      {treaty.country}
                    </span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-5 space-y-4">
                      {treaty.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="bg-blue-50 rounded-xl p-4 border border-blue-200"
                        >
                          <p className="font-bold text-blue-800 mb-2 text-sm">
                            📊 {benefit.income}
                          </p>
                          <div className="grid md:grid-cols-2 gap-3 text-xs">
                            <div>
                              <p className="font-semibold text-red-700 mb-1">
                                ❌ Without DTAA
                              </p>
                              <p className="text-gray-600">{benefit.withoutDTAA}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-green-700 mb-1">
                                ✅ With DTAA
                              </p>
                              <p className="text-gray-600">{benefit.withDTAA}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
              <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <span className="text-xl">📋</span>
                How to Claim DTAA Benefits
              </p>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                <li>
                  Obtain Tax Residency Certificate (TRC) from your country of
                  residence (USA, UAE, UK, Singapore, etc.)
                </li>
                <li>Fill Form 10F (self-declaration for DTAA benefit)</li>
                <li>
                  Submit TRC + Form 10F to Indian deductor (tenant, bank, buyer)
                  BEFORE TDS is deducted
                </li>
                <li>
                  Deductor will deduct TDS at treaty rate (instead of 30%) as per
                  DTAA
                </li>
                <li>
                  If TDS already deducted at 30%, claim refund by filing ITR-2 with
                  Form 10F and TRC attachment
                </li>
                <li>
                  In ITR, mention DTAA country and article number in Schedule TR
                  (Tax Relief)
                </li>
                <li>
                  If claiming Foreign Tax Credit (FTC) in your country of residence,
                  file Form 67 in India (for residents) or equivalent in foreign
                  country
                </li>
              </ol>
            </div>
          </section>

          {/* TAXVIO SERVICES */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's NRI Tax Filing Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Complete end-to-end NRI tax compliance — from residential status
              determination to ITR filing, DTAA application, and refund tracking.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  service: "NRI Residential Status Assessment",
                  icon: "🔍",
                  description:
                    "Detailed analysis of days in India (passport verification), determination of NRI/RNOR/ROR status, assessment of DTAA applicability, professional opinion on tax residency.",
                  price: "₹999",
                },
                {
                  service: "ITR-2 Filing (Simple - Rental/Interest)",
                  icon: "📝",
                  description:
                    "Complete ITR-2 preparation and filing for NRIs with simple income sources (rental income from 1 property, interest on NRO FD). Includes Form 26AS verification, TDS reconciliation, basic deductions (80C, 80D), online filing, and e-verification.",
                  price: "₹2,999",
                },
                {
                  service: "ITR-2 Filing (Complex - Capital Gains)",
                  icon: "📊",
                  description:
                    "ITR-2 filing for NRIs with capital gains (property sale, shares), multiple properties, business income. Includes indexation calculation, exemption claims (54/54EC/54F), DTAA benefit computation, Form 10F filing.",
                  price: "₹5,999",
                },
                {
                  service: "DTAA Benefit Application & TRC Support",
                  icon: "🌍",
                  description:
                    "Complete DTAA treaty analysis, Form 10F preparation, TRC application assistance (if needed from India), submission guidance to deductors, treaty rate computation, Schedule TR filling in ITR.",
                  price: "₹3,999",
                },
                {
                  service: "TDS Refund Claim & Follow-Up",
                  icon: "💰",
                  description:
                    "Specialized service for NRIs who have excess TDS deducted. We file ITR optimizing all deductions and DTAA benefits to maximize refund. Includes refund tracking and ITD follow-up until credit.",
                  price: "₹1,999 (+ 5% of refund amount)",
                },
                {
                  service: "Form 10F & Lower TDS Certificate",
                  icon: "📋",
                  description:
                    "Preparation of Form 10F for DTAA benefit. Application for Lower TDS Certificate under Section 197 (if applicable). Coordination with tenant/bank for reduced TDS deduction.",
                  price: "₹1,499",
                },
                {
                  service: "Foreign Income Reporting (Schedule FA/FSI)",
                  icon: "💵",
                  description:
                    "If you have foreign assets (bank accounts, property, shares abroad) or foreign income (even if exempt in India), reporting in Schedule FA (Foreign Assets) and Schedule FSI (Foreign Source Income) is mandatory. We prepare accurate disclosures.",
                  price: "₹2,499",
                },
                {
                  service: "NRI Tax Planning & Advisory",
                  icon: "💼",
                  description:
                    "Strategic tax planning for NRIs — optimizing rental income taxation, capital gains exemptions, DTAA benefits, repatriation planning, NRE vs. NRO account strategy, return to India tax planning.",
                  price: "₹4,999",
                },
              ].map((item) => (
                <div
                  key={item.service}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-orange-800 mb-2">
                        {item.service}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        {item.description}
                      </p>
                      <p className="text-sm font-bold text-orange-600">
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
                    package: "Basic NRI Filing",
                    price: "₹2,999",
                    includes: [
                      "Residential status check",
                      "ITR-2 (rental/interest)",
                      "Form 26AS verification",
                      "Basic deductions",
                      "E-filing & verification",
                    ],
                  },
                  {
                    package: "Standard (with DTAA)",
                    price: "₹5,999",
                    includes: [
                      "Everything in Basic",
                      "DTAA benefit analysis",
                      "Form 10F filing",
                      "Capital gains (1 property)",
                      "Refund tracking",
                    ],
                  },
                  {
                    package: "Premium (Complete)",
                    price: "₹9,999",
                    includes: [
                      "Everything in Standard",
                      "Multiple properties/gains",
                      "Foreign income reporting",
                      "Tax planning advisory",
                      "Priority support",
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
                        <li
                          key={i}
                          className="text-xs text-gray-600 flex items-start gap-2"
                        >
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

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from NRIs We've Helped
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Amit Patel (NRI - USA)",
                  location: "California → India",
                  text: "I have 2 rental properties in India. Banks and tenants were deducting 30% TDS (₹3.5 lakh annually). Taxvio helped me file ITR with DTAA benefits and got ₹2.2 lakh refund. They also applied for Lower TDS Certificate for next year. Excellent NRI tax experts!",
                },
                {
                  name: "Priya Sharma (NRI - Dubai)",
                  location: "Dubai → India",
                  text: "Sold my flat in Mumbai and had ₹15 lakh LTCG. Buyer deducted 20% TDS. Taxvio filed my ITR claiming India-UAE DTAA benefit at 10% treaty rate and got me ₹1.5 lakh refund. Very professional and responsive team.",
                },
                {
                  name: "Rajesh Kumar (NRI - UK)",
                  location: "London → India",
                  text: "I was confused about residential status and foreign income reporting. Taxvio clearly explained my NRI status, filed ITR-2 with Schedule FA for my UK bank accounts, and claimed DTAA relief. Refund of ₹85,000 received in 4 months. Highly recommended for NRIs.",
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
              NRI Tax Filing Services — Worldwide Support
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides specialized NRI tax filing services for Indians living in{" "}
              <strong>USA, UK, UAE, Singapore, Canada, Australia</strong> and 90+
              countries worldwide. Complete online support via email, WhatsApp, and
              video calls.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {["USA 🇺🇸", "UK 🇬🇧", "UAE 🇦🇪", "Singapore 🇸🇬", "Canada 🇨🇦", "Australia 🇦🇺"].map(
                (country) => (
                  <div
                    key={country}
                    className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default"
                  >
                    {country}
                  </div>
                )
              )}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* RELATED SERVICES */}
          <section id="related-services">
            <SectionLabel text="Explore More" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Related NRI Tax Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Tax Residency Certificate",
                  icon: "🌍",
                  link: "/serviceslist/income-tax/tax-residency-certificate",
                  desc: "TRC for DTAA benefits.",
                },
                {
                  title: "Form 67 Filing (FTC)",
                  icon: "📋",
                  link: "/serviceslist/income-tax/form-67",
                  desc: "Claim Foreign Tax Credit.",
                },
                {
                  title: "Capital Gains Tax",
                  icon: "📈",
                  link: "/serviceslist/income-tax/capital-gains",
                  desc: "Property & share sale tax.",
                },
                {
                  title: "DTAA Advisory",
                  icon: "📚",
                  link: "/serviceslist/income-tax/dtaa-advisory",
                  desc: "Expert DTAA consultation.",
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
                    File Your NRI ITR Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Complete NRI Tax Filing & Compliance
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Expert ITR-2 filing for NRIs with Indian income. Complete TDS
                    refund claims, DTAA benefit application, foreign income
                    reporting, capital gains computation. Serving NRIs in USA, UK,
                    UAE, Singapore, and worldwide. Starting ₹2,999.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File NRI ITR — ₹2,999
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20NRI%20tax%20filing%20in%20India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Us
                  </a>
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
      q: "What is the ITR filing deadline for NRIs?",
      a: "The ITR filing deadline for NRIs is the SAME as for residents — July 31 of the assessment year (for non-audit cases). For example, for FY 2024-25 (AY 2025-26), the deadline is July 31, 2025. Late filing attracts penalty of ₹5,000 (or ₹1,000 if total income < ₹5 lakh). Missing the deadline also means you cannot carry forward losses.",
    },
    {
      q: "Can NRIs file ITR-1 (Sahaj)?",
      a: "No. ITR-1 (Sahaj) is NOT applicable for NRIs. NRIs must file ITR-2 (for salary, capital gains, rental income, foreign income) or ITR-3 (for business/professional income). Even if an NRI has only salary income, they cannot use ITR-1 — they must use ITR-2.",
    },
    {
      q: "Is it mandatory for NRIs to report foreign assets and income in ITR?",
      a: "If you are classified as RESIDENT (not NRI) for tax purposes, you MUST report foreign assets (bank accounts, property, shares) in Schedule FA and foreign income in Schedule FSI — even if income is exempt or not taxable in India. Failure to report can lead to penalty up to ₹10 lakh. NRIs (non-residents) are NOT required to report foreign assets/income, but if they have any such assets, it's advisable to disclose for transparency.",
    },
    {
      q: "Can NRIs claim deduction under Section 80C, 80D while filing ITR?",
      a: "Yes, NRIs can claim ALL standard deductions available to residents — Section 80C (LIC, PPF, ELSS, NSC up to ₹1.5 lakh), Section 80D (health insurance premium), Section 80TTA/TTB (interest on savings account for senior citizens), etc. However, NRIs cannot invest in certain instruments like PPF (new accounts not allowed for NRIs, but existing PPF can continue).",
    },
    {
      q: "How long does it take to get TDS refund for NRIs?",
      a: "TDS refund processing time for NRIs is typically 2-6 months from the date of ITR verification. Refunds are credited directly to the pre-validated bank account (NRE/NRO) mentioned in the ITR. Delays can occur if: (1) ITR is filed after deadline, (2) Bank account is not pre-validated, (3) Mismatch in TDS details between Form 26AS and ITR. Taxvio provides complete refund tracking and follow-up.",
    },
    {
      q: "Do NRIs need to pay advance tax?",
      a: "Yes, if total tax liability (after TDS) exceeds ₹10,000, NRIs are required to pay advance tax in four installments during the financial year (15% by June 15, 45% by Sept 15, 75% by Dec 15, 100% by March 15). Failure to pay advance tax attracts interest under Section 234B/234C. However, most NRIs have TDS deducted at source (on rent, interest, capital gains), which often covers tax liability, so advance tax is not required.",
    },
    {
      q: "Can Taxvio file ITR on behalf of NRIs if they are abroad?",
      a: "Yes, absolutely. Taxvio specializes in remote NRI tax filing. We handle everything online — you just need to provide documents via email/WhatsApp (scanned copies of PAN, passport, Form 26AS, rent agreement, TDS certificates, etc.). We prepare ITR, file it using your e-filing portal credentials (or our DSC), and you verify using Aadhaar OTP or EVC. No need to visit India. We serve NRIs in USA, UK, UAE, Singapore, Canada, Australia, and 90+ countries.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — NRI Tax Filing
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