// app/serviceslist/income-tax/capital-gains-computation/CapitalGainsComputationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Capital Gains Tax Computation - Property, Shares, Mutual Funds & Assets",
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
    "Professional capital gains tax computation for sale of property, shares, mutual funds, gold, and other capital assets. Accurate STCG & LTCG calculation, indexation benefit, exemption analysis under Section 54/54F/54EC/54B, tax liability estimation and ITR filing. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Capital Gains Tax Computation & Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "3499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "3499",
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
      name: "What is the difference between short-term and long-term capital gains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The classification depends on the holding period of the asset. For immovable property (land/building), holding above 24 months makes it long-term. For listed equity shares and equity mutual funds, holding above 12 months makes it long-term. For unlisted shares, debt mutual funds and other assets, the threshold is 24 months or 36 months depending on asset type. Short-term gains are generally taxed at slab rates (or 20% for listed equity under Section 111A post-July 2024), while long-term gains enjoy concessional rates.",
      },
    },
    {
      "@type": "Question",
      name: "What are the new capital gains tax rates after Budget 2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As per Finance (No. 2) Act 2024, effective 23 July 2024: LTCG on all assets is taxed at a uniform 12.5% without indexation. STCG on listed equity shares and equity mutual funds (Section 111A) is 20%. The LTCG exemption limit for listed equity and equity mutual funds under Section 112A increased from Rs 1 lakh to Rs 1.25 lakh. Resident individuals and HUFs selling land or building acquired before 23 July 2024 may opt for the earlier 20% with indexation if it results in lower tax.",
      },
    },
    {
      "@type": "Question",
      name: "How can I save tax on long-term capital gains from property sale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can claim exemptions under: Section 54 (reinvest LTCG from residential house into another residential house), Section 54F (reinvest entire net sale consideration from any long-term asset into a residential house), Section 54EC (invest up to Rs 50 lakh in NHAI/REC/PFC/IRFC bonds within 6 months), and Section 54B (reinvest gains from agricultural land into new agricultural land). Taxvio provides complete exemption planning and Capital Gains Account Scheme guidance.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function CapitalGainsComputationClient() {
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
          📈 Sold Property or Shares? Compute Capital Gains Correctly & Claim Exemptions Before You Lose Them
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
              <span className="text-white">Capital Gains Computation</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📈 STCG & LTCG Computation
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Capital Gains
                  <br />
                  <span className="text-[#7ecbf0]">Tax Computation</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Sold a <strong className="text-white">property</strong>,{" "}
                  <strong className="text-white">shares</strong>,{" "}
                  <strong className="text-white">mutual funds</strong>, or{" "}
                  <strong className="text-white">gold</strong>? Capital gains tax
                  rules changed significantly from{" "}
                  <strong className="text-white">23 July 2024</strong> — a flat{" "}
                  <strong className="text-white">12.5% LTCG</strong> rate,
                  withdrawal of indexation for most assets, and revised holding
                  periods. One mistake in computation can cost you lakhs.{" "}
                  <strong className="text-white">Taxvio</strong> delivers accurate
                  STCG/LTCG computation, indexation analysis, exemption planning
                  under Sections 54/54F/54EC, and complete ITR-2 filing support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Compute My Gains — ₹3,499 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20Capital%20Gains%20Tax%20Computation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Property & Shares",
                    "✅ Indexation Analysis",
                    "✅ Exemption Planning",
                    "✅ ITR-2 Filing",
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
                    ["📊", "LTCG now 12.5% flat (from 23 Jul 2024)"],
                    ["📉", "STCG on equity: 20% (Sec 111A)"],
                    ["🏠", "Property: 24-month holding for LTCG"],
                    ["💹", "Listed equity: 12-month holding"],
                    ["🎁", "₹1.25 lakh LTCG exempt on equity"],
                    ["🚀", "Computation fee: ₹3,499 onwards"],
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
              { number: "3,000+", label: "Computations Done", icon: "✅" },
              { number: "12.5%", label: "New LTCG Rate", icon: "📊" },
              { number: "₹50 Lakh", label: "54EC Bond Limit", icon: "🏦" },
              { number: "₹3,499", label: "Starting Fee", icon: "💰" },
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
              "✔ Updated Budget 2024 Rules",
              "✔ Exemption Maximisation",
              "✔ Indexation Comparison",
              "✔ ITR-2 Filing Included",
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
          {/* WHAT IS CAPITAL GAINS */}
          <section id="what-is-capital-gains">
            <SectionLabel text="Understanding Capital Gains" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Capital Gains Tax?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Capital gain</strong> is the profit you earn when you
                  transfer (sell, exchange, or relinquish) a{" "}
                  <strong>capital asset</strong> — such as land, building, flat,
                  shares, mutual funds, gold, jewellery, bonds, or intellectual
                  property. This gain is taxable under the head{" "}
                  <strong>"Income from Capital Gains"</strong> as per Sections 45 to
                  55A of the Income Tax Act, 1961.
                </p>
                <p>
                  Capital gains are classified into two categories based on the{" "}
                  <strong>holding period</strong> of the asset:
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    📉 Short-Term Capital Gain (STCG)
                  </p>
                  <p className="text-sm text-gray-700">
                    Gain arising from transfer of an asset held for{" "}
                    <strong>less than the specified period</strong>. Generally taxed
                    at higher rates (slab rates or 20% for listed equity).
                  </p>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    📈 Long-Term Capital Gain (LTCG)
                  </p>
                  <p className="text-sm text-gray-700">
                    Gain arising from transfer of an asset held{" "}
                    <strong>beyond the specified period</strong>. Taxed at
                    concessional rate of <strong>12.5%</strong> (post 23 July 2024)
                    and eligible for exemptions under Sections 54, 54F, 54EC, 54B.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Basic Capital Gains Formula
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3 text-sm">
                    🧮 Computation Structure
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 font-mono bg-white p-4 rounded-xl border border-blue-200">
                    <p>Full Value of Consideration (Sale Price)</p>
                    <p className="text-red-600">
                      (–) Expenses on Transfer (brokerage, stamp duty, legal fees)
                    </p>
                    <p className="border-t pt-2">= Net Sale Consideration</p>
                    <p className="text-red-600">
                      (–) Cost of Acquisition (or Indexed Cost)
                    </p>
                    <p className="text-red-600">
                      (–) Cost of Improvement (or Indexed Cost)
                    </p>
                    <p className="border-t pt-2 font-bold text-[#00416a]">
                      = Gross Capital Gain
                    </p>
                    <p className="text-red-600">
                      (–) Exemptions (Sec 54 / 54F / 54EC / 54B)
                    </p>
                    <p className="border-t pt-2 font-bold text-green-700">
                      = Taxable Capital Gain
                    </p>
                  </div>
                </div>
                <p>
                  Errors in computing indexed cost, forgetting improvement costs,
                  missing exemption deadlines, or wrongly classifying holding period
                  can result in{" "}
                  <strong>tax notices, interest, and penalties</strong> — or in
                  paying far more tax than legally required.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  provides accurate capital gains computation, exemption planning,
                  and ITR-2 filing for property sellers, stock investors, and asset
                  sellers across Uttar Pradesh, Noida, Delhi NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* HOLDING PERIOD */}
          <section id="holding-period">
            <SectionLabel text="Classification Rules" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Holding Period — Short-Term vs Long-Term
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From <strong>23 July 2024</strong>, holding periods were simplified to
              only two buckets — <strong>12 months</strong> (listed securities) and{" "}
              <strong>24 months</strong> (all other assets).
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#00416a] text-white">
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      Asset Type
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      LTCG Holding Period
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      STCG Rate
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      LTCG Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      asset: "Listed Equity Shares (STT paid)",
                      period: "> 12 months",
                      stcg: "20% (Sec 111A)",
                      ltcg: "12.5% above ₹1.25 lakh (Sec 112A)",
                    },
                    {
                      asset: "Equity Mutual Funds (STT paid)",
                      period: "> 12 months",
                      stcg: "20% (Sec 111A)",
                      ltcg: "12.5% above ₹1.25 lakh (Sec 112A)",
                    },
                    {
                      asset: "Listed Bonds / Debentures",
                      period: "> 12 months",
                      stcg: "Slab rate",
                      ltcg: "12.5% (no indexation)",
                    },
                    {
                      asset: "Immovable Property (Land / Building)",
                      period: "> 24 months",
                      stcg: "Slab rate",
                      ltcg: "12.5% (or 20% with indexation — see note)",
                    },
                    {
                      asset: "Unlisted Shares",
                      period: "> 24 months",
                      stcg: "Slab rate",
                      ltcg: "12.5% (no indexation)",
                    },
                    {
                      asset: "Gold, Jewellery, Silver",
                      period: "> 24 months",
                      stcg: "Slab rate",
                      ltcg: "12.5% (no indexation)",
                    },
                    {
                      asset: "Debt Mutual Funds (bought after 1 Apr 2023)",
                      period: "Always short-term",
                      stcg: "Slab rate",
                      ltcg: "Not applicable",
                    },
                    {
                      asset: "Foreign Shares / Assets",
                      period: "> 24 months",
                      stcg: "Slab rate",
                      ltcg: "12.5% (no indexation)",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.asset}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-4 text-sm font-semibold text-gray-800 border-b">
                        {row.asset}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 border-b">
                        {row.period}
                      </td>
                      <td className="px-4 py-4 text-sm text-orange-700 font-medium border-b">
                        {row.stcg}
                      </td>
                      <td className="px-4 py-4 text-sm text-green-700 font-medium border-b">
                        {row.ltcg}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
              <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                Important: The Grandfathering Option for Property
              </p>
              <p className="text-sm text-gray-700 mb-2">
                For <strong>land or building acquired before 23 July 2024</strong>{" "}
                and sold thereafter, a{" "}
                <strong>resident individual or HUF</strong> may choose the lower of:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">→</span>
                  <strong>12.5%</strong> on capital gain{" "}
                  <strong>without indexation</strong>, OR
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">→</span>
                  <strong>20%</strong> on capital gain{" "}
                  <strong>with indexation</strong> benefit
                </li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">
                Taxvio computes <strong>both scenarios</strong> and recommends the
                option that gives you the lowest tax outgo. This option is not
                available to NRIs, companies, LLPs, or firms.
              </p>
            </div>
          </section>

          {/* INDEXATION */}
          <section id="indexation">
            <SectionLabel text="Indexation Benefit" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Cost Inflation Index (CII) & Indexation Computation
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                <strong>Indexation</strong> adjusts your purchase cost for
                inflation, reducing your taxable gain. Although indexation was
                largely withdrawn from 23 July 2024, it remains relevant for the{" "}
                <strong>grandfathering option on property</strong> and for
                transfers made before that date.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <p className="font-bold text-purple-800 mb-3">
                    🧮 Indexed Cost Formula
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200 font-mono text-sm text-gray-800">
                    Indexed Cost of Acquisition = Cost of Acquisition ×{" "}
                    <strong>(CII of Year of Sale ÷ CII of Year of Purchase)</strong>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    * For assets purchased before 1 April 2001, you may substitute
                    Fair Market Value as on 1 April 2001 as the cost of acquisition.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <p className="font-bold text-purple-800 mb-4">
                    📅 Cost Inflation Index (Recent Years, Base 2001-02 = 100)
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["2015-16", "254"],
                      ["2016-17", "264"],
                      ["2017-18", "272"],
                      ["2018-19", "280"],
                      ["2019-20", "289"],
                      ["2020-21", "301"],
                      ["2021-22", "317"],
                      ["2022-23", "331"],
                      ["2023-24", "348"],
                      ["2024-25", "363"],
                      ["2025-26", "376"],
                      ["2001-02", "100"],
                    ].map(([year, cii]) => (
                      <div
                        key={year}
                        className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200"
                      >
                        <p className="text-xs text-gray-600">{year}</p>
                        <p className="font-bold text-purple-800">{cii}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    * CII is notified annually by CBDT. Verify the applicable index
                    for your assessment year before computation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <p className="font-bold text-purple-800 mb-3">
                    💡 Worked Example — Property Sale with Both Options
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-800 text-sm mb-2">
                        Transaction Details
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Purchase year: FY 2015-16 (CII 254)</li>
                        <li>• Purchase price: ₹30,00,000</li>
                        <li>• Sale year: FY 2024-25 (CII 363)</li>
                        <li>• Sale price: ₹80,00,000</li>
                        <li>• Transfer expenses: ₹1,00,000</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 border-2 border-orange-300">
                        <p className="font-bold text-orange-800 text-xs mb-2">
                          Option A: 12.5% WITHOUT Indexation
                        </p>
                        <ul className="space-y-1 text-xs text-gray-700 font-mono">
                          <li>Net Sale = ₹79,00,000</li>
                          <li>Less Cost = ₹30,00,000</li>
                          <li>LTCG = ₹49,00,000</li>
                          <li className="font-bold text-orange-700">
                            Tax @12.5% = ₹6,12,500
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-xl p-4 border-2 border-green-400">
                        <p className="font-bold text-green-800 text-xs mb-2">
                          Option B: 20% WITH Indexation ✅
                        </p>
                        <ul className="space-y-1 text-xs text-gray-700 font-mono">
                          <li>Indexed Cost = 30L × 363/254 = ₹42,87,402</li>
                          <li>Net Sale = ₹79,00,000</li>
                          <li>LTCG = ₹36,12,598</li>
                          <li className="font-bold text-green-700">
                            Tax @20% = ₹7,22,520
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-100 border border-green-300 rounded-xl p-4">
                    <p className="text-sm font-bold text-green-800">
                      ✅ Recommendation: Option A (12.5% without indexation) saves ₹1,10,020
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      The optimal option varies case-by-case. Taxvio computes both
                      for every client and files using the lower-tax option.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EXEMPTIONS */}
          <section id="exemptions">
            <SectionLabel text="Tax Saving Exemptions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Capital Gains Exemptions — Section 54, 54F, 54EC, 54B
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              These exemptions can reduce your LTCG tax liability to{" "}
              <strong>zero</strong> if planned correctly and claimed within the
              statutory timelines.
            </p>

            <div className="space-y-8">
              {/* Section 54 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🏠</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Section 54 — Sale of Residential House
                    </h3>
                    <p className="text-green-700 font-semibold text-sm">
                      Reinvest LTCG into another residential house in India
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-green-200">
                    <p className="font-bold text-green-800 mb-2 text-sm">
                      ✅ Conditions
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Asset sold must be a long-term residential house</li>
                      <li>• Available to Individuals and HUF only</li>
                      <li>
                        • Buy new house 1 year before or 2 years after sale, OR
                        construct within 3 years
                      </li>
                      <li>• New house must be in India</li>
                      <li>
                        • If LTCG ≤ ₹2 crore, you may buy TWO houses (once in
                        lifetime)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-green-200">
                    <p className="font-bold text-red-700 mb-2 text-sm">
                      ⚠️ Limits & Cautions
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • Maximum exemption capped at <strong>₹10 crore</strong>{" "}
                        (from AY 2024-25)
                      </li>
                      <li>• Only the amount of LTCG reinvested is exempt</li>
                      <li>
                        • Unutilised amount must be deposited in Capital Gains
                        Account Scheme before ITR due date
                      </li>
                      <li>
                        • New house must not be sold within 3 years, else exemption
                        is reversed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 54F */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🏘️</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">
                      Section 54F — Sale of Any Long-Term Asset (Other Than House)
                    </h3>
                    <p className="text-blue-700 font-semibold text-sm">
                      Reinvest NET SALE CONSIDERATION into a residential house
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-blue-200">
                    <p className="font-bold text-blue-800 mb-2 text-sm">
                      ✅ Conditions
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • Applies to sale of shares, gold, plot of land, etc.
                        (non-residential-house assets)
                      </li>
                      <li>• Available to Individuals and HUF only</li>
                      <li>
                        • Entire <strong>net sale consideration</strong> (not just
                        gain) must be reinvested for full exemption
                      </li>
                      <li>
                        • Same timeline as Sec 54 (1 year before / 2 years after /
                        3 years construction)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-blue-200">
                    <p className="font-bold text-red-700 mb-2 text-sm">
                      ⚠️ Restrictions
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • Must not own more than ONE residential house (other than
                        the new one) on the date of transfer
                      </li>
                      <li>
                        • Maximum exemption capped at <strong>₹10 crore</strong>
                      </li>
                      <li>
                        • Proportionate exemption if only part of consideration is
                        reinvested
                      </li>
                      <li>• Lock-in of 3 years on the new house</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-white rounded-2xl p-5 border border-blue-200">
                  <p className="font-bold text-blue-800 mb-2 text-sm">
                    🧮 Proportionate Exemption Formula
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 font-mono text-xs text-gray-800">
                    Exemption = LTCG × (Amount Invested in New House ÷ Net Sale
                    Consideration)
                  </div>
                </div>
              </div>

              {/* Section 54EC */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🏦</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-orange-800 mb-2">
                      Section 54EC — Investment in Capital Gain Bonds
                    </h3>
                    <p className="text-orange-700 font-semibold text-sm">
                      Invest LTCG from land/building into NHAI, REC, PFC, IRFC bonds
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-orange-200">
                    <p className="font-bold text-orange-800 mb-2 text-sm">
                      ✅ Key Features
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • Available only for LTCG from{" "}
                        <strong>land or building</strong>
                      </li>
                      <li>
                        • Invest within <strong>6 months</strong> of the date of
                        transfer
                      </li>
                      <li>
                        • Maximum investment: <strong>₹50 lakh</strong> per
                        financial year
                      </li>
                      <li>• Lock-in period: 5 years</li>
                      <li>• Interest approx. 5.25% p.a. (taxable)</li>
                      <li>
                        • Available to all assessees including companies and NRIs
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-orange-200">
                    <p className="font-bold text-red-700 mb-2 text-sm">
                      ⚠️ Cautions
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • ₹50 lakh limit applies across two financial years combined
                        for a single transaction
                      </li>
                      <li>
                        • Premature redemption or loan against bonds reverses the
                        exemption
                      </li>
                      <li>• Interest income is fully taxable at slab rates</li>
                      <li>• 6-month window is strict — no extension permitted</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 54B */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🌾</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-teal-800 mb-2">
                      Section 54B — Sale of Agricultural Land
                    </h3>
                    <p className="text-teal-700 font-semibold text-sm">
                      Reinvest gains into new agricultural land
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-teal-200">
                    <p className="font-bold text-teal-800 mb-2 text-sm">
                      ✅ Conditions
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • Land must have been used for agricultural purposes for at
                        least 2 years before transfer
                      </li>
                      <li>• Available to Individuals and HUF</li>
                      <li>
                        • New agricultural land must be purchased within 2 years of
                        transfer
                      </li>
                      <li>• Applies to both STCG and LTCG</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-teal-200">
                    <p className="font-bold text-red-700 mb-2 text-sm">
                      ⚠️ Note
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • Rural agricultural land is not a capital asset at all — no
                        capital gains tax applies
                      </li>
                      <li>
                        • Section 54B is relevant mainly for urban agricultural land
                      </li>
                      <li>• New land must not be sold within 3 years</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CGAS */}
            <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-red-700 mb-4">
                🏛️ Capital Gains Account Scheme (CGAS) — Critical Deadline
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                If you are unable to reinvest the capital gain before the{" "}
                <strong>ITR filing due date</strong> (usually 31 July), you MUST
                deposit the unutilised amount in a{" "}
                <strong>Capital Gains Account Scheme</strong> account with an
                authorised bank to preserve your exemption.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Deadline",
                    desc: "On or before ITR due date (31 July for non-audit cases)",
                  },
                  {
                    title: "Where",
                    desc: "Any authorised public sector bank branch (Type A savings / Type B term deposit)",
                  },
                  {
                    title: "Consequence of Missing",
                    desc: "Entire exemption is denied — full LTCG becomes taxable in the year of transfer",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-red-200 rounded-xl p-4"
                  >
                    <p className="font-bold text-red-600 text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMPUTATION PROCESS */}
          <section id="process">
            <SectionLabel text="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How Taxvio Computes Your Capital Gains
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Transaction Review & Asset Classification",
                    description:
                      "We review your sale documents to identify the asset type (property, listed shares, unlisted shares, mutual funds, gold), determine the exact date of acquisition and transfer, and classify the gain as short-term or long-term based on the applicable holding period.",
                    duration: "1 day",
                  },
                  {
                    step: 2,
                    title: "Cost of Acquisition Determination",
                    description:
                      "We establish the correct cost base — original purchase price, stamp duty and registration charges, brokerage paid, and where applicable, Fair Market Value as on 1 April 2001 (for pre-2001 assets) or 31 January 2018 grandfathered NAV (for listed equity under Section 112A).",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Cost of Improvement Capture",
                    description:
                      "We compile all capital improvement expenses — construction, additions, major renovations — with supporting bills. Routine repairs and maintenance are excluded. Each improvement is indexed separately based on the year it was incurred (where indexation applies).",
                    duration: "1 day",
                  },
                  {
                    step: 4,
                    title: "Dual Computation (With & Without Indexation)",
                    description:
                      "For eligible property transactions, we compute the tax liability under both the 12.5% without-indexation route and the 20% with-indexation route, then recommend the option that legally minimises your tax outgo.",
                    duration: "1 day",
                  },
                  {
                    step: 5,
                    title: "Exemption Eligibility & Planning",
                    description:
                      "We assess your eligibility under Sections 54, 54F, 54EC and 54B, compute the exact exemption amount, advise on reinvestment timelines, recommend CGAS deposit where reinvestment is pending, and structure the transaction to maximise relief.",
                    duration: "2-3 days",
                  },
                  {
                    step: 6,
                    title: "Set-Off of Capital Losses",
                    description:
                      "We identify current-year and brought-forward capital losses that can be set off against your gains. Short-term losses set off against both STCG and LTCG; long-term losses only against LTCG. Unabsorbed losses are carried forward for 8 assessment years.",
                    duration: "1 day",
                  },
                  {
                    step: 7,
                    title: "Advance Tax & Interest Computation",
                    description:
                      "Capital gains attract advance tax obligations. We compute the applicable instalment, quantify interest under Sections 234B and 234C, and advise on immediate payment to prevent further interest accrual.",
                    duration: "1 day",
                  },
                  {
                    step: 8,
                    title: "ITR-2 Filing with Schedule CG",
                    description:
                      "We prepare and file ITR-2 with complete Schedule CG disclosures — asset-wise breakup, buyer PAN details for property transactions, exemption claims with reinvestment particulars, TDS credit under Section 194-IA, and e-verification.",
                    duration: "2 days",
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
                  Total Turnaround
                </p>
                <p className="text-sm text-gray-700">
                  <strong>7-10 working days</strong> from receipt of complete
                  documents to final computation report and ITR filing. Express
                  service available for urgent cases.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Capital Gains Computation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Property Sale
                </p>
                <ul className="space-y-3">
                  {[
                    "Sale deed / registered conveyance deed (with date and consideration)",
                    "Original purchase deed / allotment letter / builder agreement",
                    "Stamp duty and registration receipts (purchase and sale)",
                    "Cost of improvement bills (construction, renovation) with dates",
                    "Brokerage / commission receipts on sale",
                    "Form 16B / TDS certificate under Section 194-IA (1% TDS by buyer)",
                    "Buyer's PAN and address (mandatory for Schedule CG)",
                    "Home loan interest certificate (if claiming under cost)",
                    "Valuation report as on 1 April 2001 (for pre-2001 properties)",
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
                  For Shares, Mutual Funds & Other Assets
                </p>
                <ul className="space-y-3">
                  {[
                    "Broker's capital gains statement (Zerodha, Groww, ICICI Direct, etc.)",
                    "Demat account transaction statement for the financial year",
                    "Contract notes for buy and sell transactions",
                    "Mutual fund capital gains statement (CAMS / KFintech consolidated)",
                    "NAV as on 31 January 2018 (for grandfathering under Section 112A)",
                    "Gold / jewellery purchase invoice and sale bill",
                    "Unlisted share transfer deed and valuation report",
                    "PAN card and Aadhaar card",
                    "Form 26AS and AIS (Annual Information Statement)",
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

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Capital Gains Computation Mistakes
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              These errors regularly trigger income tax notices under Section 143(1)
              or 148 and result in avoidable tax, interest, and penalty.
            </p>
            <div className="space-y-5">
              {[
                {
                  error: "Ignoring Section 50C — Stamp Duty Value Rule",
                  causes: [
                    "Property sold below the circle rate / stamp duty value",
                    "Assuming actual sale consideration is always accepted",
                    "Not obtaining a valuation report to contest the stamp value",
                  ],
                  solutions: [
                    "Under Section 50C, if sale consideration is less than stamp duty value, the stamp duty value is deemed to be the sale price for computing gains",
                    "A safe harbour of 10% variation is permitted — if actual price is within 10% of stamp value, actual price is accepted",
                    "If stamp value is excessive, request the AO to refer the matter to a Departmental Valuation Officer",
                    "The buyer may also face tax under Section 56(2)(x) on the difference",
                  ],
                },
                {
                  error: "Missing the Section 54EC 6-Month Investment Window",
                  causes: [
                    "Delay in receiving sale proceeds from the buyer",
                    "Assuming the deadline is the ITR filing date",
                    "Bonds unavailable or subscription closed at the time of application",
                  ],
                  solutions: [
                    "The 6-month period runs from the DATE OF TRANSFER, not from receipt of money",
                    "Apply for NHAI/REC/PFC/IRFC bonds immediately after registration of the sale deed",
                    "There is no provision to condone delay — the exemption is lost permanently",
                    "If the window is missed, evaluate Section 54/54F reinvestment as an alternative",
                  ],
                },
                {
                  error: "Not Depositing in Capital Gains Account Scheme",
                  causes: [
                    "New property purchase not finalised before ITR due date",
                    "Unaware that CGAS deposit is mandatory to preserve exemption",
                    "Keeping the sale proceeds in a regular savings account",
                  ],
                  solutions: [
                    "Deposit the unutilised capital gain in a CGAS account before the ITR due date (31 July)",
                    "Open Type A (savings) or Type B (term deposit) account at an authorised bank branch",
                    "Withdraw from CGAS only for the specified purchase or construction",
                    "Unutilised CGAS balance becomes taxable in the year the reinvestment period expires",
                  ],
                },
                {
                  error: "Claiming Routine Repairs as Cost of Improvement",
                  causes: [
                    "Including painting, plumbing, and maintenance expenses",
                    "No supporting bills or invoices retained",
                    "Cash payments without documentary trail",
                  ],
                  solutions: [
                    "Only CAPITAL improvements qualify — additions, new construction, structural changes",
                    "Routine repairs, painting, and maintenance are specifically excluded",
                    "Retain dated invoices, contractor agreements, and bank payment proofs",
                    "Improvements made before 1 April 2001 are entirely ignored",
                  ],
                },
                {
                  error: "Incorrect Grandfathering for Listed Equity (Section 112A)",
                  causes: [
                    "Using original purchase cost for shares bought before 31 January 2018",
                    "Ignoring the highest quoted price as on 31 January 2018",
                    "Not applying the ₹1.25 lakh exemption threshold",
                  ],
                  solutions: [
                    "Cost of acquisition = HIGHER of (a) actual cost, and (b) LOWER of [FMV as on 31-Jan-2018, actual sale consideration]",
                    "Obtain the 31 January 2018 highest quoted price from the exchange website",
                    "Apply the ₹1.25 lakh annual exemption before charging 12.5% tax",
                    "Broker statements often compute this automatically — verify accuracy",
                  ],
                },
                {
                  error: "Failing to Set Off and Carry Forward Capital Losses",
                  causes: [
                    "Not reporting loss-making transactions in the ITR",
                    "Filing a belated return, which forfeits carry-forward rights",
                    "Incorrectly setting off long-term loss against short-term gain",
                  ],
                  solutions: [
                    "Short-term capital loss can be set off against BOTH STCG and LTCG",
                    "Long-term capital loss can be set off ONLY against LTCG",
                    "Unabsorbed losses can be carried forward for 8 assessment years",
                    "Carry-forward is allowed only if the ITR is filed on or before the due date under Section 139(1)",
                  ],
                },
                {
                  error: "Overlooking Advance Tax on Capital Gains",
                  causes: [
                    "Believing that 1% TDS under Section 194-IA covers the entire liability",
                    "Not paying advance tax in the quarter the gain arose",
                    "Assuming tax can be paid at the time of ITR filing",
                  ],
                  solutions: [
                    "1% TDS under 194-IA is only a token deduction — actual LTCG tax is far higher",
                    "Capital gains advance tax must be paid in the instalment falling due after the transaction",
                    "Interest under Section 234C applies for shortfall in the relevant quarter",
                    "Pay self-assessment tax immediately to stop further Section 234B interest",
                  ],
                },
              ].map((item) => (
                <details
                  key={item.error}
                  className="group border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#00416a] transition"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      {item.error}
                    </span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t">
                    <div className="grid md:grid-cols-2 gap-6 pt-5">
                      <div>
                        <p className="font-bold text-red-700 mb-3 text-sm">
                          🔍 Why It Happens
                        </p>
                        <ul className="space-y-2">
                          {item.causes.map((cause, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-red-500 mt-0.5">•</span>
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-green-700 mb-3 text-sm">
                          ✅ Correct Treatment
                        </p>
                        <ul className="space-y-2">
                          {item.solutions.map((solution, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-green-600 mt-0.5">→</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Capital Gains Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From a single share sale to complex multi-property transactions with
              exemption planning — we handle every scenario.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏠",
                  title: "Property Capital Gains Computation",
                  desc: "Complete LTCG/STCG computation for sale of land, flat, house or commercial property. Includes dual computation (with/without indexation), Section 50C analysis, and improvement cost indexing.",
                  price: "₹3,999",
                },
                {
                  icon: "📈",
                  title: "Shares & Mutual Fund Gains",
                  desc: "Computation of STCG/LTCG on listed equity, equity mutual funds, debt funds and unlisted shares. Grandfathering under Section 112A, ₹1.25 lakh exemption, and broker statement reconciliation.",
                  price: "₹3,999",
                },
                {
                  icon: "🎯",
                  title: "Exemption Planning & Advisory",
                  desc: "Strategic analysis of Section 54, 54F, 54EC and 54B eligibility. Reinvestment structuring, timeline mapping, CGAS guidance, and written advisory opinion.",
                  price: "₹3,999",
                },
                {
                  icon: "🧾",
                  title: "ITR-2 Filing with Schedule CG",
                  desc: "End-to-end ITR-2 preparation and filing with complete Schedule CG disclosure, buyer PAN reporting, exemption claims, TDS credit and e-verification.",
                  price: "2,499",
                },
                {
                  icon: "💹",
                  title: "Loss Set-Off & Carry Forward",
                  desc: "Identification and optimisation of current-year and brought-forward capital losses. Tax-loss harvesting advisory and carry-forward documentation for 8 years.",
                  price: "₹2,999",
                },
                {
                  icon: "🏦",
                  title: "CGAS & 54EC Bond Assistance",
                  desc: "Complete support for opening Capital Gains Account Scheme accounts and applying for NHAI/REC/PFC/IRFC bonds within the statutory 6-month window.",
                  price: "₹3,499",
                },
                {
                  icon: "⚖️",
                  title: "Section 50C Valuation Dispute",
                  desc: "Representation where stamp duty value exceeds actual sale consideration. DVO reference request, valuation report coordination and AO submissions.",
                  price: "₹7,999",
                },
                {
                  icon: "📋",
                  title: "Advance Tax Computation",
                  desc: "Quarterly advance tax computation on capital gains, Section 234B/234C interest quantification, and challan payment guidance to minimise interest.",
                  price: "₹1,499",
                },
                {
                  icon: "📨",
                  title: "Capital Gains Notice Response",
                  desc: "Drafting and filing responses to notices under Section 143(1)(a), 139(9) or 148 relating to capital gains mismatch, AIS discrepancy or exemption denial.",
                  price: "₹5,999",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <p className="text-lg font-bold text-[#00416a]">
                    {service.price}
                  </p>
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
                    package: "Basic (Shares/MF)",
                    price: "₹3,499",
                    includes: [
                      "STCG & LTCG computation",
                      "Grandfathering under 112A",
                      "Broker statement reconciliation",
                      "Loss set-off analysis",
                      "Computation report",
                    ],
                  },
                  {
                    package: "Standard (Property)",
                    price: "₹5,999",
                    includes: [
                      "Everything in Basic",
                      "Property LTCG computation",
                      "Dual indexation comparison",
                      "Exemption eligibility check",
                      "ITR-2 filing included",
                    ],
                  },
                  {
                    package: "Premium (Complete)",
                    price: "₹9,999",
                    includes: [
                      "Everything in Standard",
                      "Full exemption planning",
                      "CGAS & 54EC assistance",
                      "Advance tax computation",
                      "1 year notice support",
                    ],
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.package}
                    className="bg-white rounded-xl p-5 border border-green-300"
                  >
                    <p className="font-bold text-green-800 mb-1">{pkg.package}</p>
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
              Real Stories from Our Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Vinod Aggarwal",
                  location: "Muzaffarnagar",
                  text: "I sold ancestral land bought in 1998 and had no idea how to value it. Taxvio arranged the 2001 valuation, computed both indexation options, and structured a 54EC investment. My tax came down from an estimated ₹14 lakh to ₹4.2 lakh — completely legally.",
                },
                {
                  name: "Sneha Rastogi",
                  location: "Noida",
                  text: "My broker statement showed ₹6 lakh LTCG on shares but the grandfathering was applied wrongly. Taxvio recomputed using the 31-Jan-2018 NAV and the correct figure was ₹2.1 lakh. After the ₹1.25 lakh exemption, my tax was barely ₹10,000.",
                },
                {
                  name: "Capt. R. S. Malik",
                  location: "Meerut",
                  text: "I sold my flat and got a 143(1) notice for capital gains mismatch because the buyer's TDS wasn't matching. Taxvio reconciled everything with Form 26AS, filed a rectification, and the demand of ₹3.8 lakh was fully dropped.",
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
              Capital Gains Tax Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides capital gains computation and ITR filing for property
              sellers, stock investors, and asset sellers across{" "}
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
                  title: "NRI Tax Filing",
                  icon: "🌍",
                  link: "/serviceslist/income-tax/nri-tax-filing",
                  desc: "Capital gains for NRI sellers.",
                },
                {
                  title: "Lower TDS Certificate",
                  icon: "💰",
                  link: "/serviceslist/income-tax/lower-tds-certificate",
                  desc: "Reduce TDS on property sale.",
                },
                {
                  title: "ITR Verification",
                  icon: "✅",
                  link: "/serviceslist/income-tax/itr-verification",
                  desc: "Verify your filed return.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Respond to CG mismatch notices.",
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
                    Compute Accurately, Save Legally
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Your Capital Gains Computed Today
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't overpay tax on your property or share sale. Taxvio delivers
                    accurate STCG/LTCG computation, dual indexation comparison,
                    complete exemption planning under Sections 54/54F/54EC, and
                    ITR-2 filing. Starting ₹3,499.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Compute Now — ₹3,499
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20Capital%20Gains%20Tax%20Computation"
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
      q: "Is indexation benefit completely abolished?",
      a: "Not entirely. From 23 July 2024, LTCG on most assets is taxed at a flat 12.5% without indexation. However, a resident individual or HUF selling land or building that was acquired before 23 July 2024 may choose the earlier regime of 20% with indexation if it results in lower tax. This option is not available to NRIs, companies, LLPs or firms, and it does not apply to shares, mutual funds, or gold.",
    },
    {
      q: "How much LTCG on shares is tax-free?",
      a: "Under Section 112A, LTCG from listed equity shares and equity-oriented mutual funds (on which STT is paid) is exempt up to ₹1.25 lakh per financial year. This threshold was raised from ₹1 lakh by the Finance (No. 2) Act 2024. Gains above ₹1.25 lakh are taxed at 12.5% without indexation. This exemption is per person per year, not per transaction.",
    },
    {
      q: "Can I claim both Section 54 and Section 54EC exemptions together?",
      a: "Yes. If you sell a residential house and the LTCG is large, you can reinvest part of it into a new residential house under Section 54 and simultaneously invest up to ₹50 lakh into 54EC bonds within 6 months. Both exemptions can be claimed on the same capital gain, provided the total exemption does not exceed the actual capital gain. Taxvio computes the optimal split between the two.",
    },
    {
      q: "What happens if I sell the new property within 3 years of claiming Section 54?",
      a: "The exemption is reversed. If the new residential house purchased or constructed to claim Section 54 or 54F is transferred within 3 years, the exemption earlier allowed is withdrawn. The amount of exemption claimed is reduced from the cost of acquisition of the new house, effectively increasing the capital gain on the second sale, and it is taxed as short-term capital gain in the year of the second transfer.",
    },
    {
      q: "How is capital gain computed on inherited or gifted property?",
      a: "There is no capital gains tax at the time of inheritance or receiving a gift from a relative. When you eventually sell it, the cost of acquisition is taken as the cost to the previous owner (the person from whom you inherited or received it). Importantly, the holding period of the previous owner is also included in your holding period, which usually makes the gain long-term. For property acquired by the previous owner before 1 April 2001, the Fair Market Value as on 1 April 2001 may be substituted.",
    },
    {
      q: "Do I need to pay advance tax on capital gains?",
      a: "Yes, if your total tax liability after TDS exceeds ₹10,000. However, since capital gains cannot be estimated in advance, the law provides relief: you are required to pay the advance tax on capital gains in the remaining instalments falling due after the date of the transaction. If the entire tax is paid by 31 March of the financial year, no interest under Section 234C is levied for the earlier quarters on that capital gain.",
    },
    {
      q: "Is the 1% TDS deducted by the property buyer my final tax?",
      a: "No. Under Section 194-IA, the buyer deducts only 1% TDS on the sale consideration where the value exceeds ₹50 lakh. This is merely a tax collection mechanism, not your final liability. Your actual LTCG tax at 12.5% or 20% will almost always be much higher. You must compute the correct gain, claim the 1% TDS as credit in your ITR, and pay the balance as self-assessment tax. For NRI sellers, the buyer deducts TDS at 20% under Section 195 instead.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Capital Gains Tax
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