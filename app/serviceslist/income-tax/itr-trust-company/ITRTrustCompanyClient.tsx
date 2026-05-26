"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for Companies & Trusts",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  },
  description: "Professional ITR-6 for companies and ITR-7 for trusts/NGOs. MAT computation, 12A/80G compliance, tax audit Form 3CA/3CD. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Return Filing for Companies and Trusts",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "2999", priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "2999", maxPrice: "14999" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which ITR form should a private limited company file?", acceptedAnswer: { "@type": "Answer", text: "All private limited companies, public companies, and OPCs must file ITR-6, regardless of turnover or profit/loss. Companies claiming Section 11 exemption must file ITR-7 instead." } },
    { "@type": "Question", name: "What is MAT and when does it apply?", acceptedAnswer: { "@type": "Answer", text: "MAT under Section 115JB applies when regular income tax is less than 15% of book profit. Companies opting for Section 115BAA (22%) are exempt from MAT." } },
    { "@type": "Question", name: "What is the ITR deadline for companies FY 2025-26?", acceptedAnswer: { "@type": "Answer", text: "31st October 2026 for audit cases. Tax audit report (Form 3CA/3CD) must be filed by 30th September 2026." } },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function ITRTrustCompanyClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white text-gray-800 overflow-x-hidden">
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
              <span className="text-white">ITR — Companies & Trusts</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏢 ITR-6 & ITR-7 — Companies, Trusts & NGOs
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  ITR Filing for<br />
                  <span className="text-[#7ecbf0]">Companies & Trusts</span><br />
                  FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  <strong className="text-white">All companies must file ITR-6</strong> — mandatory regardless of
                  turnover or profit. <strong className="text-white">Trusts and NGOs must file ITR-7</strong> —
                  with strict 85% income application rules or face full taxation at 30%+. Taxvio's CA-assisted
                  team handles MAT computation, Section 115BAA regime, 12A/80G compliance, tax audit
                  (Form 3CA/3CD), and timely e-filing — starting ₹2,999.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base">
                    File Company / Trust ITR →
                  </Link>
                  <Link href="tel:+919999999999" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base">
                    📞 Free Consultation
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ ITR-6 & ITR-7 Expert Filing", "✅ MAT / AMT Computation", "✅ 12A / 80G Compliance", "✅ Tax Audit Form 3CA/3CD"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Deadlines</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "ITR-6: All companies mandatory"],
                    ["🕌", "ITR-7: Trusts, NGOs, Sec 8 cos"],
                    ["📅", "Audit ITR due: 31st Oct 2026"],
                    ["🔍", "Tax audit report: 30th Sept 2026"],
                    ["⚠️", "Trust: 85% income must be applied"],
                    ["💰", "Starting fee: ₹2,999"],
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
              { number: "ITR-6", label: "Mandatory for All Companies", icon: "🏢" },
              { number: "ITR-7", label: "For Trusts, NGOs & Sec 8", icon: "🕌" },
              { number: "31 Oct", label: "Company / Trust ITR Deadline", icon: "📅" },
              { number: "₹2,999", label: "Starting Filing Fee", icon: "💰" },
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
            {["✔ CA-Supervised Filing", "✔ MAT Credit Tracking", "✔ 12A/80G Annual Compliance", "✔ DSC-Based e-Filing"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section id="overview">
            <SectionLabel text="ITR-6 & ITR-7 Overview" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              Complete Guide — ITR Filing for Companies & Trusts (FY 2025-26 / AY 2026-27)
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Companies and trusts are among the most complex taxpayer categories in India — each
                  operating under distinct legal frameworks, tax rates, and compliance obligations.
                  A <strong>private limited company, public company, or One Person Company (OPC)</strong>
                  is a separate legal entity entirely distinct from its shareholders and directors.
                  It has its own PAN, files its own income tax return, and pays tax at rates prescribed
                  specifically for companies under the Income Tax Act, 1961.
                  <strong> All companies — whether profit-making or loss-making — must file ITR-6 every year</strong>
                  without exception. There is no turnover threshold or exemption for non-filing.
                </p>
                <p>
                  The most significant tax planning decision for companies is choosing between the
                  <strong> regular 30% rate</strong> (with MAT at 15% of book profit) and the
                  <strong> concessional 22% rate under Section 115BAA</strong> (no MAT applicable,
                  but irrevocable once exercised). New manufacturing companies may opt for
                  <strong> 15% under Section 115BAB</strong>. Choosing the wrong regime can result
                  in significantly higher tax — and unlike individual taxpayers, companies cannot
                  switch back once the concessional regime is opted.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  <strong>Trusts, NGOs, and charitable institutions</strong> operate under an entirely
                  different taxation framework. Entities registered under Section 12A/12AB and approved
                  under Section 80G can claim near-complete exemption from income tax on income applied
                  for charitable purposes. However, this exemption is conditional on strict ongoing
                  compliance — including annual ITR-7 filing, maintaining audited accounts, and ensuring
                  <strong> at least 85% of income is applied</strong> for charitable purposes in the
                  same financial year. Non-compliance can result in cancellation of registration and
                  full taxation of accumulated corpus at 30%+.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides comprehensive
                  ITR-6 and ITR-7 filing services for companies and trusts across Uttar Pradesh and
                  pan-India. Our CA-led team handles MAT computation, 12A/80G annual compliance,
                  tax audit coordination, Form 9A/10 filings, and timely e-filing via DSC — starting
                  ₹2,999.
                </p>
              </div>
            </div>
          </section>

          {/* ITR-6 vs ITR-7 */}
          <section id="itr6-vs-itr7">
            <SectionLabel text="Which Form Applies" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              ITR-6 vs ITR-7 — Which Form Does Your Entity File?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">🏢</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60">For All Companies</p>
                    <h3 className="text-2xl font-extrabold text-[#00416a]">ITR-6</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Mandatory for all private limited companies, public limited companies, One Person Companies (OPCs),
                  and foreign companies operating in India. The only exception is a company claiming income tax
                  exemption under Section 11 — which must file ITR-7 instead.
                </p>
                <ul className="space-y-2">
                  {[
                    "Private Limited Companies (Pvt. Ltd.)",
                    "Public Limited Companies (Ltd.)",
                    "One Person Companies (OPC)",
                    "Section 8 Companies not claiming Sec 11 exemption",
                    "Foreign Companies with Indian operations",
                    "All companies — regardless of turnover or profit/loss",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-[#00416a]/5 border border-[#00416a]/10 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-[#00416a]">📋 Key requirements: Audited financials, MAT computation, Form 3CA/3CD, DSC filing</p>
                </div>
              </div>

              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">🕌</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600/60">For Trusts & Exempt Entities</p>
                    <h3 className="text-2xl font-extrabold text-blue-700">ITR-7</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Filed by entities claiming income tax exemption under Sections 10, 11, or 12 of the
                  Income Tax Act — or required to file under Sections 139(4A), 4B, 4C, or 4D.
                </p>
                <ul className="space-y-2">
                  {[
                    "Charitable & Religious Trusts (12A/12AB registered)",
                    "Section 8 Companies claiming Section 11 exemption",
                    "NGOs & Societies registered under Societies Act",
                    "Political Parties (Section 139(4B))",
                    "Educational Institutions & Hospitals (Section 10(23C))",
                    "Research Associations & Mutual Funds (Section 139(4D))",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-blue-700">📋 Key requirements: 85% income application, Form 9A/10 if accumulating, Form 10B/10BB audit</p>
                </div>
              </div>
            </div>
          </section>

          {/* TAX RATE TABLE */}
          <section id="company-tax-rates">
            <SectionLabel text="Company Tax Rate Structure" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Income Tax Rates for Companies — FY 2025-26 (AY 2026-27)
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Choosing the right tax regime is one of the most impactful decisions for company tax planning.
              Once the concessional regime is opted, it cannot be withdrawn.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Regime / Section", "Applicable To", "Tax Rate", "MAT Applicable?"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Regular Rate (Section 115A)", "All domestic companies (default)", "30%", "Yes — 15% of book profit"],
                    ["Section 115BAA (Concessional)", "Domestic companies — irrevocable option", "22%", "No — MAT not applicable"],
                    ["Section 115BAB (New Mfg. Co.)", "New manufacturing companies post Oct 1, 2019", "15%", "No — MAT not applicable"],
                    ["Foreign Companies", "Foreign companies with India operations", "40%", "Yes"],
                    ["Surcharge (income ₹1–10 Cr)", "All companies", "7%", "—"],
                    ["Surcharge (income > ₹10 Cr)", "All companies", "12%", "—"],
                    ["Health & Education Cess", "All companies", "4%", "—"],
                    ["Effective Rate (115BAA + cess)", "Domestic — concessional", "25.17%", "No MAT"],
                  ].map(([regime, applicable, rate, mat], i) => (
                    <tr key={regime} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{regime}</td>
                      <td className="px-5 py-4 text-gray-700">{applicable}</td>
                      <td className="px-5 py-4 font-bold text-[#00416a]">{rate}</td>
                      <td className="px-5 py-4 text-gray-700">{mat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500 italic">
              * Advance tax for companies: 15% by June 15 | 45% by Sept 15 | 75% by Dec 15 | 100% by March 15. Shortfall attracts interest under Sections 234B and 234C.
            </p>
          </section>

          {/* MAT SECTION */}
          <section id="mat-computation" className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="MAT — Critical for Companies" />
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              MAT (Minimum Alternate Tax) — What Every Company Must Know
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              MAT under Section 115JB is the most frequently misunderstood aspect of company taxation.
              Errors in MAT computation lead to understated tax payments and interest demands.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-blue-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#00416a] mb-4">📊 How MAT Works</h3>
                <ul className="space-y-3">
                  {[
                    "MAT applies when regular income tax < 15% of book profit",
                    "Book profit = Net profit as per P&L adjusted for specific additions and deductions prescribed under Section 115JB",
                    "Common additions: depreciation as per books, provisions for deferred tax, provisions for losses of subsidiary companies",
                    "Common deductions: depreciation as per Section 32, brought-forward losses (whichever is lower of b/f losses or unabsorbed depreciation)",
                    "Final MAT = 15% of computed book profit + surcharge + cess",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-blue-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#00416a] mb-4">💳 MAT Credit — 15-Year Carry Forward</h3>
                <ul className="space-y-3">
                  {[
                    "Excess MAT paid over regular tax becomes MAT credit under Section 115JAA",
                    "MAT credit can be carried forward for 15 assessment years",
                    "MAT credit is utilised in years when regular tax exceeds MAT liability",
                    "Critical: MAT credit must be correctly reported in ITR-6 every year — any error results in permanent loss",
                    "Companies opting for Section 115BAA (22%) are fully exempt from MAT — existing MAT credit lapses on opting 115BAA",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* TRUST EXEMPTION */}
          <section id="trust-exemption">
            <SectionLabel text="Trust & NGO Exemption Framework" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Tax Exemption Framework for Trusts & NGOs — 12AB, 80G & Section 11
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              The trust exemption framework requires active ongoing compliance — not just one-time
              registration. Missing any annual compliance step can trigger full taxation.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Section / Form", "Purpose", "Benefit", "Annual Requirement"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Section 12A / 12AB", "Registration of charitable / religious trust", "Income applied for charitable purposes is exempt", "Re-registration every 5 years — Form 10AB"],
                    ["Section 80G", "Donor deduction approval", "Donors can claim 50%–100% deduction on donations", "Renewal every 5 years — Form 10AB with 12AB"],
                    ["Section 11 & 12", "Primary exemption clauses", "85% income applied for charitable purpose = exempt", "85% application rule must be met annually"],
                    ["Form 10B / 10BB", "Trust audit report", "Mandatory audit for income > ₹5 lakh", "Filed annually along with ITR-7"],
                    ["Form 9A", "Deemed application", "Extends application deadline by 1 year for income not applied", "Filed before ITR due date if applicable"],
                    ["Form 10", "Accumulation statement", "Allows income accumulation for specific purpose for up to 5 years", "Filed before ITR due date if applicable"],
                    ["Form 10BD", "Donor statement (80G cases)", "Reports donor-wise donation details including PAN", "Due by 31st May annually"],
                  ].map(([section, purpose, benefit, annual], i) => (
                    <tr key={section} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-bold text-[#00416a]">{section}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{purpose}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{benefit}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
              <p className="text-sm text-amber-800 font-semibold">
                ⚠️ <strong>Critical:</strong> Trusts that miss the 85% application-of-income threshold and do
                not file Form 9A or Form 10 before the ITR due date will have the unapplied income taxed at
                the maximum marginal rate (30%+). Taxvio tracks this deadline proactively for every trust client.
              </p>
            </div>
          </section>

          {/* COMPANY DEDUCTIONS */}
          <section id="company-deductions">
            <SectionLabel text="Company Deductions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Key Business Deductions Available to Companies (ITR-6)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏗️", title: "IT Act Depreciation", desc: "Block-wise depreciation on plant & machinery, computers, vehicles, and furniture at IT Act rates — separate from Companies Act book depreciation." },
                { icon: "👥", title: "Employee Costs", desc: "Salaries, PF, ESI, gratuity provisions (within limits), ESOPs, and all employee welfare expenses — fully deductible." },
                { icon: "👔", title: "Director Remuneration", desc: "Managerial remuneration paid to directors, subject to Companies Act limits and disclosure requirements in the ITR-6 return." },
                { icon: "🏦", title: "Interest on Borrowings", desc: "Interest on loans, debentures, and working capital facilities. Section 94B thin capitalisation rules may cap deductions for companies with significant foreign borrowings." },
                { icon: "🔬", title: "R&D Expenditure", desc: "100% deduction on revenue expenditure on in-house R&D facilities approved by DSIR under Section 35 — a key benefit for technology companies." },
                { icon: "📉", title: "Brought-Forward Losses", desc: "Business losses carried forward for 8 years, unabsorbed depreciation carried forward indefinitely — subject to continuity-of-ownership conditions under Section 79." },
                { icon: "🚫", title: "CSR Spending — NOT Deductible", desc: "CSR expenditure under Companies Act Section 135 is generally NOT deductible under Section 37(1). This is one of the most common errors in company ITRs — Taxvio checks this." },
                { icon: "🌐", title: "Transfer Pricing Adjustments", desc: "Companies with related-party international transactions must comply with transfer pricing rules. Arms-length pricing documentation required under Sections 92A–92F." },
                { icon: "💳", title: "MAT Credit Utilisation", desc: "MAT credit from previous years can be utilised in the current year when regular tax exceeds MAT — correctly reported in ITR-6 to prevent permanent loss." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-[#00416a] mb-1 text-sm">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONSEQUENCES */}
          <section id="consequences" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Non-Compliance Risk" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Consequences of Non-Compliance for Companies & Trusts
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Companies and trusts face the most severe consequences among all taxpayer categories.
              For trusts, non-compliance can be existential — triggering cancellation of registration.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { risk: "Section 234F Penalty", entity: "Companies & Trusts", penalty: "₹5,000 late filing fee", desc: "Automatic penalty for ITR-6 or ITR-7 filed after the October 31 due date." },
                { risk: "Section 234A/B/C Interest", entity: "Companies", penalty: "1% per month on outstanding tax", desc: "Interest on unpaid tax, advance tax shortfall, and deferment of quarterly instalments." },
                { risk: "Section 271B — Audit Penalty", entity: "Companies & Trusts", penalty: "0.5% of turnover, max ₹1.5L", desc: "Failure to file tax audit report (Form 3CA/3CD or Form 10B/10BB) by 30th September." },
                { risk: "MAT Credit Lapse", entity: "Companies", penalty: "Permanent loss of tax credit", desc: "Incorrect ITR-6 filing can result in MAT credit not being properly recorded — permanently losing up to 15 years of carry-forward benefit." },
                { risk: "Trust Registration Cancellation", entity: "Trusts & NGOs", penalty: "Full corpus taxable at 30%+", desc: "Failure to file ITR-7 or violation of 85% application-of-income rule can lead to 12A/12AB cancellation — effectively destroying the trust's financial structure." },
                { risk: "Section 276CC Prosecution", entity: "Company Directors", penalty: "Imprisonment for directors", desc: "Persistent non-filing of company ITR can trigger prosecution of directors under Section 276CC — a serious personal liability risk." },
              ].map((p) => (
                <div key={p.risk} className="bg-white border border-red-100 rounded-xl p-5">
                  <p className="font-bold text-red-600 text-sm mb-1">⚠️ {p.risk}</p>
                  <p className="text-xs text-red-400 font-semibold mb-1">Entity: {p.entity}</p>
                  <p className="text-xs font-semibold text-red-500 mb-2">{p.penalty}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documents Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Company & Trust ITR Filing
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Prepare these in advance to ensure smooth, accurate, and timely ITR-6 and ITR-7 filing.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#00416a] mb-4">🏢 For Companies (ITR-6)</p>
                <ul className="space-y-2">
                  {[
                    "Audited Balance Sheet, P&L Account, and Notes to Accounts",
                    "Depreciation schedule (both Companies Act and IT Act rates)",
                    "Tax audit report (Form 3CA/3CD) — from statutory auditor",
                    "Form 26AS and AIS for the company PAN",
                    "TDS certificates received (Form 16A from clients/banks)",
                    "Advance tax payment challans (Form 280)",
                    "MAT computation worksheet (book profit reconciliation)",
                    "Previous year's ITR and MAT credit brought-forward details",
                    "Director DIN details and remuneration details",
                    "GST returns — GSTR-1, GSTR-3B, GSTR-9",
                    "DSC of MD/CEO/authorised signatory for e-filing",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>{doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-blue-700 mb-4">🕌 For Trusts / NGOs (ITR-7)</p>
                <ul className="space-y-2">
                  {[
                    "12A / 12AB registration certificate from Income Tax Department",
                    "80G approval certificate (if applicable)",
                    "Audited accounts — Receipt & Payment, Income & Expenditure, Balance Sheet",
                    "Details of all income received (donations, grants, interest) and sources",
                    "Details of income applied for charitable purposes with supporting bills",
                    "Form 9A (if income not applied — intent to apply next year)",
                    "Form 10 (if income accumulated for specific purpose — up to 5 years)",
                    "Form 10B / 10BB audit report (income > ₹5 lakh)",
                    "Form 10BD filed and Form 10BE issued (if 80G approved)",
                    "FCRA registration (if foreign donations received)",
                    "Form 26AS and AIS for the trust PAN",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>{doc}
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
              Taxvio's 6-Step Filing Process for Companies & Trusts
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              ITR-6 and ITR-7 are the most complex returns in the Indian income tax system.
              Our structured process ensures complete accuracy, MAT tracking, and deadline compliance.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Entity Assessment & Tax Regime Identification", desc: "We assess whether ITR-6 (company) or ITR-7 (trust/NGO) applies, verify registration status (12A/12AB/80G for trusts), and identify any tax regime elections — particularly whether Section 115BAA (22% concessional) or 115BAB (15% for new manufacturing) is more beneficial for the company." },
                  { step: "02", title: "Audited Financials Review & MAT Computation", desc: "For companies, we review audited financials and prepare the book profit reconciliation for MAT under Section 115JB — adjusting net profit for all prescribed additions and deductions. We identify MAT credit available from previous years and ensure it is correctly utilised and reported." },
                  { step: "03", title: "Tax Audit Coordination (Form 3CA/3CD)", desc: "We coordinate with the statutory auditor to obtain and review the tax audit report, prepare Form 3CA/3CD schedules covering GST reconciliation, TDS compliance (Clause 34), MSME payments (43B(h)), related party transactions (40A(2)(b)), and all 44 clauses — ensuring upload before 30th September." },
                  { step: "04", title: "Trust Income Application Review (ITR-7)", desc: "For trusts, we verify that at least 85% of income has been applied for charitable purposes, identify any accumulation requirements, prepare Form 9A (deemed application) or Form 10 (specific purpose accumulation) if needed, and verify Form 10B/10BB audit report compliance." },
                  { step: "05", title: "Complete ITR Preparation & Quality Review", desc: "Full ITR-6 or ITR-7 preparation covering all schedules — loss carry-forward, brought-forward depreciation, advance tax reconciliation, audit report linkage, partner/director details, and MAT credit tracking. Internal quality review to prevent defective return notices from the Department." },
                  { step: "06", title: "DSC-Based e-Filing & Post-Filing Compliance", desc: "Companies file ITR-6 using the MD/CEO's DSC. Trusts file ITR-7 using trustee's DSC or EVC. Post-filing, we track 143(1) intimations, assist with rectification, monitor MAT credit utilisation, and proactively prepare for the next year's advance tax schedule and compliance calendar." },
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
          <ITRFeeCalculator />

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Trusted by Companies & Trusts Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rajshree Enterprises Pvt. Ltd.", location: "Khatauli", text: "Taxvio handled our ITR-6 with tax audit seamlessly. MAT computation was accurate and the return was filed well before the October deadline. No notices." },
                { name: "Shri Ram Charitable Trust", location: "Muzaffarnagar", text: "Our 12A trust ITR-7 was filed on time with correct income application workings. Taxvio also helped renew our 80G approval without any issues." },
                { name: "Innovate Tech Solutions Pvt. Ltd.", location: "Meerut", text: "We switched to the 115BAA concessional tax regime with Taxvio's guidance — saving significant tax. The ITR-6 filing was error-free and on time." },
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
              Company & Trust ITR Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides ITR-6 and
              ITR-7 filing for companies and trusts across <strong>Noida</strong>, <strong>Delhi NCR</strong>,
              <strong> Meerut</strong>, <strong>Ghaziabad</strong>, and <strong>Mumbai</strong> — as well as
              pan-India online. Our CA team has handled company ITRs across trading, manufacturing, real
              estate, and technology sectors, and trust ITRs for educational, religious, and social welfare
              organisations across Western UP.
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
                { title: "Income Tax Audit", icon: "🔍", link: "/serviceslist/income-tax/income-tax-audit", desc: "Form 3CA/3CD audit for companies." },
                { title: "12A / 12AB Registration", icon: "🏛️", link: "/serviceslist/income-tax/12a-application", desc: "Trust income tax exemption registration." },
                { title: "80G Registration", icon: "💝", link: "/serviceslist/income-tax/80g-application", desc: "Donor deduction benefit for NGOs." },
                { title: "Income Tax Scrutiny", icon: "⚖️", link: "/serviceslist/income-tax/income-tax-scrutiny", desc: "Notice defence for companies & trusts." },
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
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">File Before 31st October 2026</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File Your Company / Trust ITR<br />Before the Deadline
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Avoid penalties, protect MAT credit, maintain 12A/80G registration, and stay 100%
                    compliant. Taxvio's CA-assisted ITR-6 & ITR-7 filing starts at ₹2,999. Serving
                    Khatauli, Muzaffarnagar, Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Start Filing — ₹2,999 Onwards
                  </Link>
                  <Link href="tel:+919999999999" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
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
    const deadline = new Date("October 31, 2026").getTime();
    const today = new Date().getTime();
    setDaysLeft(Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4" role="alert" aria-live="polite">
      ⏳ Company / Trust ITR Deadline: <strong>31st October 2026</strong> &nbsp;|&nbsp;
      Tax Audit Report (Form 3CA/3CD): <strong>30th September 2026</strong> &nbsp;|&nbsp;
      {daysLeft !== null ? <strong>{daysLeft} Days Left</strong> : "Act Now"}
    </div>
  );
}

function ITRFeeCalculator() {
  const [entityType, setEntityType] = useState<"company" | "trust">("company");
  const [turnover, setTurnover] = useState("");
  const [result, setResult] = useState<{ fee: number; label: string } | null>(null);

  const calculate = () => {
    const t = Number(turnover);
    if (!t) return;

    if (entityType === "company") {
      if (t <= 10000000) {
        setResult({ fee: 4999, label: "ITR-6 — Small Company (Turnover ≤ ₹1 Cr) with Tax Audit" });
      } else if (t <= 100000000) {
        setResult({ fee: 7999, label: "ITR-6 — Mid-size Company with Tax Audit (Form 3CA/3CD) + MAT" });
      } else {
        setResult({ fee: 14999, label: "ITR-6 — Large Company with Tax Audit + MAT + Transfer Pricing" });
      }
    } else {
      if (t <= 500000) {
        setResult({ fee: 2999, label: "ITR-7 — Small Trust / NGO (Income ≤ ₹5 Lakh, No Audit Required)" });
      } else if (t <= 5000000) {
        setResult({ fee: 4999, label: "ITR-7 — Trust / NGO with Form 10B / 10BB Audit Report" });
      } else {
        setResult({ fee: 7999, label: "ITR-7 — Large Trust / Section 8 Company with Complex Compliance" });
      }
    }
  };

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">Estimate Your Company / Trust ITR Filing Fee</h2>
      <p className="text-gray-600 mb-8 max-w-xl">Select entity type and enter turnover/income for an instant fee estimate.</p>

      <div className="bg-gray-50 border rounded-3xl p-8 max-w-2xl">
        <div className="flex gap-3 mb-6">
          {[
            { value: "company" as const, label: "Company (ITR-6)" },
            { value: "trust" as const, label: "Trust / NGO (ITR-7)" },
          ].map((e) => (
            <button key={e.value} onClick={() => { setEntityType(e.value); setResult(null); setTurnover(""); }}
              className={`px-5 py-2.5 rounded-xl font-semibold transition border text-sm ${
                entityType === e.value ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"
              }`}>
              {e.label}
            </button>
          ))}
        </div>

        <label className="block font-semibold text-gray-700 mb-2 text-sm">
          {entityType === "company" ? "Annual Turnover of Company (₹)" : "Annual Income / Receipts of Trust (₹)"}
        </label>
        <input
          type="number"
          placeholder={entityType === "company" ? "e.g. 25000000" : "e.g. 2000000"}
          value={turnover}
          onChange={(e) => { setTurnover(e.target.value); setResult(null); }}
          className="border p-3 rounded-xl w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#00416a] text-sm"
        />
        <button onClick={calculate} disabled={!turnover}
          className="w-full bg-[#00416a] text-white py-3 rounded-xl font-bold hover:bg-[#002b45] transition disabled:opacity-40 text-sm">
          Calculate Filing Fee
        </button>

        {result && (
          <div className="mt-5 border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee: <span className="text-3xl font-extrabold">₹{result.fee.toLocaleString("en-IN")}</span> onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{result.label}</p>
            <p className="text-xs text-gray-400 mt-2">* Includes ITR preparation and e-filing. Tax audit coordination, DSC, transfer pricing documentation, Form 10B/10BB fees additional. GST extra.</p>
            <Link href="/contact" className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition">
              Start Filing Now →
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
    { q: "Which ITR form should a private limited company file?", a: "All private limited companies, public limited companies, and OPCs must file ITR-6, regardless of turnover or profit/loss. The only exception is a company claiming exemption under Section 11 (charitable/religious trusts), which must file ITR-7. Filing the wrong form results in a defective return notice." },
    { q: "Which ITR form should a trust or NGO file?", a: "Trusts registered under Section 12A/12AB, NGOs, Section 8 companies claiming Section 11 exemption, political parties, educational institutions under Section 10(23C), and research associations must file ITR-7. This form requires detailed reporting of income received, income applied for charitable purposes, and accumulation details." },
    { q: "What is the income tax rate for a private limited company in FY 2025-26?", a: "Domestic companies can opt for 22% under Section 115BAA (no MAT, irrevocable) or pay the regular 30% rate with MAT at 15% of book profit. New manufacturing companies incorporated after October 1, 2019 can opt for 15% under Section 115BAB. Effective rates after surcharge and cess: 25.17% (115BAA), 31.2% or higher (regular), and 17.01% (115BAB)." },
    { q: "What is MAT and when does it apply to companies?", a: "MAT (Minimum Alternate Tax) under Section 115JB applies when regular income tax is less than 15% of book profit. The company pays 15% of book profit as tax. Excess MAT over regular tax becomes MAT credit, carried forward for 15 years. Companies opting for Section 115BAA are fully exempt from MAT — but existing MAT credit lapses on opting 115BAA." },
    { q: "What happens if a trust does not apply 85% of income for charitable purposes?", a: "If a trust does not apply at least 85% of its income for charitable or religious purposes in the same year, the unapplied amount becomes taxable at the maximum marginal rate (30%+). The trust can avoid this by filing Form 9A (extending application by 1 year) or Form 10 (accumulation for specific purpose up to 5 years) — both must be filed before the ITR due date." },
    { q: "What is the ITR due date for companies and trusts for FY 2025-26?", a: "For companies and trusts liable to tax audit, the ITR due date is 31st October 2026. The tax audit report (Form 3CA/3CD or Form 10B/10BB) must be filed by 30th September 2026. For trusts not liable to audit (income ≤ ₹5 lakh), the due date is 31st July 2026. Late filing attracts Section 234F penalty (₹5,000) and Section 234A interest." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — ITR Filing for Companies & Trusts
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