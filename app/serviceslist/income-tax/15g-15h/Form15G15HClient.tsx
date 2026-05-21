"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Form 15G and Form 15H Filing Services",
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
    "Professional Form 15G and Form 15H filing services in India. Stop TDS deduction on interest income from FD, RD, savings accounts, EPF, and dividends. Eligibility check, declaration filing, and annual renewal. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Form 15G 15H TDS Exemption Declaration",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "499",
      maxPrice: "1999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Form 15G?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 15G is a self-declaration filed by resident individuals below 60 years of age, HUFs, and trusts to prevent TDS on interest income. The declarant certifies their total income does not exceed the basic exemption limit.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 15H?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 15H is a self-declaration for resident senior citizens aged 60 or above. Unlike Form 15G, the only condition is that tax on total income is nil — income can exceed the basic exemption limit if deductions bring tax to zero.",
      },
    },
    {
      "@type": "Question",
      name: "When should Form 15G or 15H be submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit at the start of each financial year (April 1) before any interest is credited. TDS already deducted cannot be reversed by the bank — it can only be claimed as a refund in the ITR.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function Form15G15HClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white text-gray-800 overflow-x-hidden">

        {/* ── DEADLINE BANNER ── */}
        <DeadlineBanner />

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
              <span className="text-white">Form 15G / 15H</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏦 Form 15G & 15H — TDS Prevention
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Form 15G & 15H —<br />
                  <span className="text-[#7ecbf0]">Stop TDS on FD</span><br />
                  & Interest Income
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Banks deduct <strong className="text-white">TDS at 10%</strong> on FD interest
                  exceeding ₹40,000 (₹50,000 for senior citizens) — even when your total income is
                  below the taxable limit. Filing <strong className="text-white">Form 15G</strong>
                  (below 60 years) or <strong className="text-white">Form 15H</strong> (senior citizens 60+)
                  at the start of each financial year legally prevents this deduction. Taxvio verifies
                  eligibility, prepares declarations, and submits to all your banks — starting ₹499.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File 15G / 15H — ₹499 Onwards →
                  </Link>
                  <Link
                    href="#eligibility-checker"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    🔍 Check My Eligibility Free
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ Form 15G — Below 60 Years", "✅ Form 15H — Senior Citizens 60+", "✅ All Banks & Post Offices", "✅ Annual Renewal Support"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Facts</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["🏦", "TDS threshold: ₹40,000 (₹50,000 sr.)"],
                    ["📋", "15G: below 60 | 15H: 60 & above"],
                    ["📅", "Valid 1 financial year — renew April"],
                    ["⚠️", "False filing: Section 277 prosecution"],
                    ["💰", "Starting at ₹499 per declaration"],
                    ["🔄", "Multi-bank submission covered"],
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
              { number: "₹499", label: "Starting Fee Per Declaration", icon: "💰" },
              { number: "10%", label: "TDS Rate Saved on FD Interest", icon: "📉" },
              { number: "Annual", label: "Renewal — File Every April", icon: "📅" },
              { number: "PAN India", label: "Multi-Bank Service Coverage", icon: "🗺️" },
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
            {["✔ Eligibility Check Included", "✔ Multi-Bank Submission", "✔ Senior Citizen Specialists", "✔ Annual Renewal Reminders"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section id="overview">
            <SectionLabel text="Why This Matters" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              Why Banks Deduct TDS on FD Interest — And How to Stop It
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Every financial year, millions of bank depositors and senior citizens in India have
                  <strong> TDS deducted at 10%</strong> on their fixed deposit, recurring deposit, and
                  savings account interest — even when their total annual income is well below the taxable
                  threshold. Banks, post offices, and financial institutions are legally required to deduct
                  TDS under <strong>Section 194A of the Income Tax Act</strong> when interest income exceeds
                  ₹40,000 per year (₹50,000 for senior citizens). This reduces the net interest credited —
                  even for taxpayers who owe absolutely zero income tax.
                </p>
                <p>
                  The solution is straightforward: <strong>Form 15G</strong> (for individuals below 60
                  years of age and HUFs) and <strong>Form 15H</strong> (for senior citizens aged 60 and
                  above) are self-declaration forms under Sections 197A(1) and 197A(1C) of the Income Tax
                  Act. When submitted at the beginning of the financial year, these forms legally obligate
                  the payer — bank, post office, or company — to <strong>not deduct TDS</strong> on the
                  specified income, ensuring the full interest amount is credited to the depositor's account.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  The critical rule is timing: <strong>Form 15G/15H must be submitted before the first
                  interest credit</strong> of the financial year — ideally on April 1 or as early as possible
                  in April. TDS already deducted by the bank <strong>cannot be reversed</strong> — it can
                  only be claimed as a refund while filing the income tax return. Missing the April deadline
                  means waiting until ITR filing to recover the deducted amount, sometimes months later.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides complete Form
                  15G and 15H services — eligibility verification, total income computation across all
                  sources, declaration preparation, and submission to all banks, post offices, and
                  institutions where the client holds income-generating deposits. We also send annual
                  renewal reminders and handle multi-bank submission for clients with FDs at multiple
                  institutions — starting at just ₹499.
                </p>
              </div>
            </div>
          </section>

          {/* 15G vs 15H ELIGIBILITY */}
          <section id="eligibility">
            <SectionLabel text="Eligibility Conditions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Form 15G vs Form 15H — Who Can File Which Form?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 15G */}
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">👤</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60">Below 60 Years</p>
                    <h3 className="text-2xl font-extrabold text-[#00416a]">Form 15G</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Self-declaration under <strong>Sections 197A(1) and 197A(1A)</strong> for resident individuals
                  below 60 years, HUFs, Trusts, and AOPs. ALL conditions below must be satisfied simultaneously.
                </p>
                <ul className="space-y-3">
                  {[
                    ["✅", "Resident individual below 60 years, OR HUF, Trust, or AOP"],
                    ["✅", "Total income from ALL sources must not exceed ₹2.5 lakh (old regime) or ₹3 lakh (new regime)"],
                    ["✅", "Tax computed on total income must be nil after all deductions"],
                    ["✅", "Must be resident — NRIs cannot file Form 15G"],
                    ["✅", "Must be renewed every financial year (valid only for one FY)"],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 mt-0.5">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-amber-800 font-semibold">⚠️ Key trap: Total income must include ALL sources — salary, rent, other FDs, capital gains. Not just the FD where 15G is being filed.</p>
                </div>
              </div>

              {/* 15H */}
              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">👴</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600/60">60 Years & Above</p>
                    <h3 className="text-2xl font-extrabold text-blue-700">Form 15H</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Self-declaration under <strong>Section 197A(1C)</strong> exclusively for resident senior
                  citizens. Has a more relaxed condition than Form 15G — making it accessible to more seniors.
                </p>
                <ul className="space-y-3">
                  {[
                    ["✅", "Resident individual aged 60 years or above at any time during the FY"],
                    ["✅", "Tax calculated on total income must be NIL — income CAN exceed basic exemption if deductions bring tax to zero"],
                    ["✅", "Pension + interest + rental income can still qualify if 80C, 80D, standard deduction etc. eliminate tax"],
                    ["✅", "Must be resident — NRI senior citizens cannot file Form 15H"],
                    ["✅", "Must be renewed every financial year (valid only for one FY)"],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 mt-0.5">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-blue-800 font-semibold">✅ Key advantage: A senior citizen with ₹6–7 lakh income can still file 15H if deductions bring tax to nil — unlike Form 15G which requires income itself to be below ₹2.5L.</p>
                </div>
              </div>
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section id="comparison-table">
            <SectionLabel text="Side-by-Side Comparison" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Form 15G vs Form 15H — Complete Comparison
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Filing the wrong form means TDS will still be deducted. Use this table to confirm which form applies to you.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Parameter", "Form 15G", "Form 15H"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Who can file", "Resident individual < 60 yrs, HUF, Trust, AOP", "Resident individual aged 60 or above"],
                    ["Age requirement", "Below 60 at any time during FY", "60 or above at any time during FY"],
                    ["Income condition", "Total income must NOT exceed ₹2.5L (old) / ₹3L (new)", "Tax on total income must be Nil — income can exceed basic exemption"],
                    ["Can HUF file?", "Yes — HUF can file Form 15G", "No — Form 15H is for individuals only"],
                    ["Can NRI file?", "No — only residents eligible", "No — only residents eligible"],
                    ["Section under IT Act", "Section 197A(1) and 197A(1A)", "Section 197A(1C)"],
                    ["EPF withdrawal", "Yes — Section 192A (premature withdrawal)", "Not applicable for EPF"],
                    ["Validity period", "1 financial year — renew every April", "1 financial year — renew every April"],
                    ["Penalty for false filing", "Section 277 — imprisonment 3 months to 3 years", "Section 277 — imprisonment 3 months to 3 years"],
                  ].map(([param, g, h], i) => (
                    <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-semibold text-gray-800">{param}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{g}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* TDS THRESHOLD TABLE */}
          <section id="tds-thresholds">
            <SectionLabel text="When TDS Applies" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              TDS Thresholds — When Is Form 15G / 15H Required?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              TDS kicks in when income crosses these thresholds. Filing 15G/15H before the threshold is
              reached ensures zero deduction for the full year.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Income Type", "Section", "Threshold (Non-Senior)", "Threshold (Senior 60+)", "TDS Rate", "Form Required"].map((h) => (
                      <th key={h} className="px-4 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["FD / RD Interest — Bank", "194A", "₹40,000 per bank per FY", "₹50,000 per bank per FY", "10%", "15G / 15H"],
                    ["FD Interest — Post Office", "194A", "₹40,000 per FY", "₹50,000 per FY", "10%", "15G / 15H"],
                    ["FD Interest — Company / NBFC", "194A", "₹5,000 per FY", "₹5,000 per FY", "10%", "15G / 15H"],
                    ["Dividend — MF / Stocks", "194 / 194K", "₹5,000 per FY", "₹5,000 per FY", "10%", "15G / 15H"],
                    ["NSS Withdrawal", "194EE", "₹2,500 per FY", "₹2,500 per FY", "10%", "15G only"],
                    ["EPF Withdrawal (< 5 yrs)", "192A", "₹50,000", "₹50,000", "10%", "15G only"],
                    ["LIC / Insurance Maturity", "194DA", "₹1,00,000 per FY", "₹1,00,000 per FY", "5%", "15G / 15H"],
                    ["SCSS / MIS Post Office Interest", "194A", "₹40,000 per FY", "₹50,000 per FY", "10%", "15H (60+)"],
                  ].map(([income, sec, ns, sr, rate, form], i) => (
                    <tr key={income} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-4 font-medium text-gray-800">{income}</td>
                      <td className="px-4 py-4 font-bold text-[#00416a]">{sec}</td>
                      <td className="px-4 py-4 text-gray-700">{ns}</td>
                      <td className="px-4 py-4 text-gray-700">{sr}</td>
                      <td className="px-4 py-4 font-bold text-red-600">{rate}</td>
                      <td className="px-4 py-4 text-gray-700 font-medium">{form}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* WHERE TO SUBMIT */}
          <section id="where-to-submit">
            <SectionLabel text="Submission Destinations" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Where Must Form 15G / 15H Be Submitted?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏦", title: "Banks — FD / RD / Savings", desc: "Each bank branch where FDs are held needs a separate declaration. Many banks accept online 15G/15H through net banking or mobile app." },
                { icon: "📮", title: "Post Offices", desc: "For interest on Post Office Time Deposits, Senior Citizens Savings Scheme (SCSS), Monthly Income Scheme (MIS), and NSC maturity." },
                { icon: "🏢", title: "Companies / NBFCs", desc: "For TDS on interest paid on company fixed deposits, non-convertible debentures (NCDs), and corporate bonds under Section 194A." },
                { icon: "💼", title: "EPFO / Employer", desc: "For TDS on EPF withdrawals before completing 5 years of service (Section 192A). Only Form 15G — not 15H — applies here." },
                { icon: "🛡️", title: "Insurance Companies", desc: "For TDS on life insurance maturity proceeds (Section 194DA) where premium paid exceeded 10% or 20% of the sum assured." },
                { icon: "📊", title: "Mutual Funds", desc: "For TDS on dividends paid by mutual funds (Section 194K) exceeding ₹5,000 per financial year per AMC." },
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

          {/* CRITICAL RULES */}
          <section id="critical-rules" className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Must-Know Rules" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Critical Rules for Filing Form 15G / 15H — Avoid These Mistakes
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Incorrect filing is one of the most common tax compliance errors. These rules prevent both
              illegal filing (false declaration) and missed TDS prevention.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: "📊", rule: "Include ALL income sources", desc: "Total income must include salary, rent, all FDs across all banks, capital gains, and other income — not just the FD where 15G is being filed." },
                { icon: "📅", rule: "Submit before first interest credit", desc: "File on or before April 1. TDS already deducted cannot be reversed by the bank — only claimable as ITR refund." },
                { icon: "🏦", rule: "Submit to every bank separately", desc: "A 15G at one bank does not protect FDs at other banks. Separate declarations needed for each institution and often each branch." },
                { icon: "🔄", rule: "Renew every financial year", desc: "A form submitted in April 2025 is not valid for FY 2026-27. Fresh declarations must be filed every April without exception." },
                { icon: "🔢", rule: "Aggregate all interest in Part I", desc: "Part I of the form requires the TOTAL estimated interest income from all payers — this aggregate is what must be below the exemption limit." },
                { icon: "📋", rule: "Payer reports to IT Department", desc: "Banks report all 15G/15H declarations quarterly to the Income Tax Department. These are cross-verified with your ITR — mismatches trigger scrutiny." },
              ].map((item) => (
                <div key={item.rule} className="bg-white border border-amber-100 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="font-bold text-amber-800">{item.rule}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CONSEQUENCES */}
          <section id="consequences" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Legal Risk" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Consequences of Filing False Form 15G / 15H
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Form 15G and 15H are legal declarations — filing them when ineligible is a criminal offence
              under the Income Tax Act with serious consequences.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { risk: "Section 277 Prosecution", penalty: "Imprisonment 3 months to 3 years", desc: "Knowingly making a false declaration is a criminal offence. If tax evaded exceeds ₹25 lakh, imprisonment extends to 7 years." },
                { risk: "TDS Demand on Bank", penalty: "Bank treated as defaulter", desc: "The payer (bank) is treated as assessee in default and liable for TDS not deducted plus interest under Section 201(1A)." },
                { risk: "Interest & Penalty", penalty: "Sections 234B and 234C interest", desc: "The declarant faces demand for income tax on full interest income plus interest for non-payment of advance tax." },
                { risk: "ITR Scrutiny Notice", penalty: "Section 143(2) notice", desc: "AIS cross-verification of bank interest vs ITR is a primary trigger for scrutiny. Large interest income with false 15G is easily detected." },
              ].map((p) => (
                <div key={p.risk} className="bg-white border border-red-100 rounded-xl p-5">
                  <p className="font-bold text-red-600 text-sm mb-1">⚠️ {p.risk}</p>
                  <p className="text-xs font-semibold text-red-400 mb-2">{p.penalty}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's 5-Step Form 15G / 15H Filing Process
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured process ensures correct eligibility, accurate income computation, and
              timely multi-bank submission — so your FD interest is never reduced by TDS.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Eligibility Verification & Form Selection", desc: "We verify your age, residential status, and estimated total income from ALL sources — salary/pension, all FDs across all banks, savings account interest, rental income, and capital gains. For 15G, we confirm income is within the exemption limit. For 15H (senior citizens), we verify tax on total income is nil after all applicable deductions. This step prevents false declaration risk." },
                  { step: "02", title: "Consolidated Income Estimation Across All FDs", desc: "We compile estimated interest income from all FDs, RDs, savings accounts, and other interest-bearing instruments across all your banks and financial institutions. This consolidated annual estimate is a mandatory requirement in Part I of both Form 15G and 15H — it must reflect the total from all payers, not just one." },
                  { step: "03", title: "Declaration Preparation (Form 15G or 15H)", desc: "We prepare the Form 15G or 15H with all required details — your PAN, estimated income from this specific payer, aggregate estimated income from all sources, number and total amount of 15G/15H forms filed previously in the same year, and all other mandatory fields. The form is checked for accuracy before submission." },
                  { step: "04", title: "Submission to All Banks & Payers", desc: "The completed declarations are submitted to each bank branch, post office, mutual fund, EPFO, insurance company, or other payer where income is earned. We guide online submission through net banking where available and assist with physical submission for banks and post offices that require in-person filing." },
                  { step: "05", title: "Annual Renewal Reminder & Re-filing", desc: "Form 15G/15H validity expires on March 31 every year. We send renewal reminders to all clients in March and assist with fresh declarations for the new financial year — ensuring submissions happen before April's first interest credits. Clients with multiple FDs receive a consolidated renewal checklist." },
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

          {/* ELIGIBILITY CHECKER */}
          <EligibilityChecker />

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Helping Depositors & Senior Citizens Save TDS Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Savitri Devi (Age 67)", location: "Khatauli", text: "My bank was deducting TDS on my FD interest even though I pay no tax. Taxvio filed Form 15H and now I get full interest credited. Very helpful for senior citizens." },
                { name: "Rakesh Sharma", location: "Muzaffarnagar", text: "I had FDs in 3 banks and TDS was being deducted from all three. Taxvio filed Form 15G across all banks and saved me from claiming refund every year in my ITR." },
                { name: "Geeta HUF", location: "Meerut", text: "As an HUF with FD income below the exemption limit, Taxvio filed Form 15G and ensured no TDS deduction. Very quick service and the fee was very reasonable." },
              ].map((r, i) => (
                <div key={i} className="border rounded-2xl p-6 hover:shadow-lg transition bg-white">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}
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
              Form 15G / 15H Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and assists individuals,
              HUFs, and senior citizens with Form 15G and 15H filings across <strong>Noida</strong>,
              <strong> Delhi NCR</strong>, <strong>Meerut</strong>, <strong>Ghaziabad</strong>, and
              <strong> Mumbai</strong> — as well as pan-India online. We have particular experience
              helping retired senior citizens in semi-urban areas who have significant FD interest income
              but no tax liability, navigate the annual 15H process with their banks.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"].map((city) => (
                <div key={city} className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default">
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
                { title: "ITR Filing — Salaried", icon: "👔", link: "/serviceslist/income-tax/itr-salaried", desc: "File your annual income tax return accurately." },
                { title: "Quarterly TDS Return", icon: "📋", link: "/serviceslist/income-tax/quarterly-tds", desc: "TDS return filing for employers and businesses." },
                { title: "Income Tax Scrutiny", icon: "⚖️", link: "/serviceslist/income-tax/income-tax-scrutiny", desc: "Expert defence for scrutiny notices." },
                { title: "ITR — Proprietor", icon: "🏪", link: "/serviceslist/income-tax/itr-proprietor", desc: "ITR for self-employed & business owners." },
              ].map((s) => (
                <Link key={s.title} href={s.link} className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">Learn More →</span>
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
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">File Before April — Save Full Year TDS</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Stop Losing FD Interest to TDS —<br />File 15G / 15H Today
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't let banks deduct TDS on interest income you don't owe tax on. Taxvio's
                    eligibility check and Form 15G / 15H filing service starts at just ₹499.
                    Multi-bank submissions, annual renewal reminders, and senior citizen support included.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    File 15G / 15H — ₹499 Onwards
                  </Link>
                  <Link href="tel:+919999999999" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
                    📞 Free Eligibility Check
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
  const [msg, setMsg] = useState("File Form 15G / 15H at the Start of Every Financial Year to Prevent TDS on FD & Interest Income");

  useEffect(() => {
    const today = new Date();
    const fyStart = new Date(`April 1, ${today.getFullYear()}`);
    const daysIntoFY = Math.floor((today.getTime() - fyStart.getTime()) / (1000 * 60 * 60 * 24));
    if (today < fyStart) {
      setMsg("⏰ File Before April 1 — Prevent Full Year TDS on FD Interest Income");
    } else if (daysIntoFY <= 30) {
      setMsg("⚠️ April Deadline — File Now Before First Interest Credit to Prevent TDS Deduction");
    } else if (daysIntoFY <= 90) {
      setMsg("⚠️ Q1 Interest Credit Approaching — File Form 15G / 15H Now to Stop TDS");
    } else {
      setMsg("⏰ TDS May Already Be Deducted — File Now to Prevent Deduction on Remaining Year Credits");
    }
  }, []);

  return (
    <div className="bg-amber-500 text-white text-center py-3 font-semibold text-sm px-4" role="alert" aria-live="polite">
      {msg}
    </div>
  );
}

function EligibilityChecker() {
  const [age, setAge] = useState<string>("");
  const [totalIncome, setTotalIncome] = useState<string>("");
  const [taxNil, setTaxNil] = useState<string>("");
  const [result, setResult] = useState<{ eligible: boolean; form: string; message: string; fee: number } | null>(null);

  const check = () => {
    const ageNum = parseInt(age);
    const incomeNum = parseInt(totalIncome);
    if (!ageNum || !incomeNum) return;

    if (ageNum >= 60) {
      if (taxNil === "yes") {
        setResult({ eligible: true, form: "Form 15H", message: `You are eligible to file Form 15H as a senior citizen (age ${ageNum}). Your tax on total income is nil — satisfying the key condition. File before interest is credited in April.`, fee: 499 });
      } else if (taxNil === "no") {
        setResult({ eligible: false, form: "Not Eligible", message: `You are a senior citizen (age ${ageNum}) but tax on your total income is not nil. You cannot file Form 15H. TDS will be deducted — claim it as a credit while filing your ITR to get a refund.`, fee: 0 });
      }
    } else {
      if (incomeNum <= 250000) {
        setResult({ eligible: true, form: "Form 15G", message: `You are eligible to file Form 15G. Your estimated total income of ₹${incomeNum.toLocaleString("en-IN")} is within the ₹2.5 lakh basic exemption limit. File at the start of the financial year (April 1).`, fee: 499 });
      } else {
        setResult({ eligible: false, form: "Not Eligible for 15G", message: `Your total income of ₹${incomeNum.toLocaleString("en-IN")} exceeds the ₹2.5 lakh limit for Form 15G. Filing 15G would be a false declaration under Section 277. File your ITR instead and claim any deducted TDS as a refund.`, fee: 0 });
      }
    }
  };

  const isSenior = parseInt(age) >= 60;

  return (
    <section id="eligibility-checker">
      <SectionLabel text="Free Eligibility Check" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Am I Eligible for Form 15G or 15H?
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl">Answer a few quick questions to find out which form applies to you — and whether you qualify.</p>

      <div className="bg-gray-50 border rounded-3xl p-8 max-w-2xl">
        <div className="space-y-5 mb-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2 text-sm">Your Age (as of today)</label>
            <input
              type="number" placeholder="e.g. 58" min={18} max={100} value={age}
              onChange={(e) => { setAge(e.target.value); setResult(null); setTaxNil(""); }}
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#00416a] text-sm"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2 text-sm">Estimated Total Annual Income from ALL Sources (₹)</label>
            <input
              type="number" placeholder="e.g. 200000" value={totalIncome}
              onChange={(e) => { setTotalIncome(e.target.value); setResult(null); }}
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#00416a] text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">Include salary, pension, ALL FD interest, rent, dividends — all sources combined</p>
          </div>

          {isSenior && age && (
            <div>
              <p className="font-semibold text-gray-700 mb-2 text-sm">Is your total tax liability NIL after all deductions (80C, 80D, standard deduction etc.)?</p>
              <div className="flex gap-3">
                {[["yes", "Yes — Tax is Nil"], ["no", "No — Tax is Payable"]].map(([val, label]) => (
                  <button key={val} onClick={() => { setTaxNil(val); setResult(null); }}
                    className={`flex-1 px-4 py-3 rounded-xl border text-sm font-semibold transition ${taxNil === val ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={check}
          disabled={!age || !totalIncome || (isSenior && !taxNil)}
          className="w-full bg-[#00416a] text-white py-3 rounded-xl font-bold hover:bg-[#002b45] transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Check My Eligibility
        </button>

        {result && (
          <div className={`mt-6 p-5 rounded-2xl border ${result.eligible ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`} aria-live="polite">
            <p className={`text-base font-bold mb-2 ${result.eligible ? "text-green-700" : "text-red-700"}`}>
              {result.eligible ? `✅ Eligible — ${result.form}` : `❌ ${result.form}`}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{result.message}</p>
            {result.eligible && (
              <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                <p className="text-[#00416a] font-semibold text-sm">Professional Filing: ₹{result.fee} per declaration</p>
                <Link href="/contact" className="bg-[#00416a] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-[#002b45] transition">
                  File Now →
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What is Form 15G and who should file it?", a: "Form 15G is a self-declaration filed by resident individuals below 60 years, HUFs, trusts, and AOPs to prevent TDS on interest income (FD, RD, savings), dividends, and EPF withdrawals. The declarant certifies that total income from ALL sources does not exceed the basic exemption limit (₹2.5L under old regime / ₹3L under new regime) and that tax on total income is nil." },
    { q: "Who should file Form 15H and what is the key condition?", a: "Form 15H is exclusively for resident senior citizens aged 60 or above. The only condition is that tax on their total income must be nil — income can exceed the basic exemption limit if deductions (80C, 80D, standard deduction etc.) bring the final tax to zero. This makes 15H more accessible than 15G for seniors with pension and interest income." },
    { q: "When should I file Form 15G or 15H?", a: "File at the very beginning of the financial year — ideally on or before April 1. Banks deduct TDS quarterly or on interest credits — if you file after the first credit, TDS already deducted cannot be reversed. Filing in April ensures full-year TDS prevention. The form must be renewed every year." },
    { q: "Do I need to file Form 15G/15H at every bank?", a: "Yes. Form 15G / 15H must be submitted separately to every bank branch, post office, company, or institution where income is earned. A single submission to one bank does not cover FDs at other banks. If FDs are in different branches of the same bank, some banks accept one submission at the home branch — check with your specific bank." },
    { q: "What if TDS was already deducted before I submitted Form 15G / 15H?", a: "TDS already deducted cannot be reversed by the bank — it must be claimed as a credit while filing your income tax return (ITR). The TDS will appear in your Form 26AS and AIS. When you file ITR, this TDS is adjusted against your total tax liability, and if total tax is nil, the entire TDS amount is refunded by the Income Tax Department." },
    { q: "Is it illegal to file Form 15G when I am not eligible?", a: "Yes. Filing Form 15G or 15H when your income exceeds the eligibility limit is a false declaration punishable under Section 277 with imprisonment of 3 months to 3 years (up to 7 years if tax evaded exceeds ₹25 lakh) plus fine. The Income Tax Department cross-verifies 15G/15H declarations with ITR data through AIS and detects ineligible filings." },
    { q: "Can an HUF file Form 15G?", a: "Yes. An HUF (Hindu Undivided Family) can file Form 15G provided its total income from all sources does not exceed the basic exemption limit (₹2.5 lakh under old tax regime). HUFs cannot file Form 15H — that is exclusively for individual senior citizens." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Form 15G & Form 15H
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details key={i} className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}>
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{f.q}</span>
              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">+</span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">{f.a}</div>
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