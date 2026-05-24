"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for Partnership Firms & LLPs",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  },
  description: "Professional ITR-5 filing for partnership firms and LLPs. Section 40(b) compliance, tax audit under 44AB, flat 30% tax. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Return Filing for Firms & LLPs",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "2999", priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "2999", maxPrice: "7999" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which ITR form should a firm or LLP file?", acceptedAnswer: { "@type": "Answer", text: "Partnership firms and LLPs must file ITR-5 — mandatory, regardless of income or loss." } },
    { "@type": "Question", name: "What is the income tax rate for a firm?", acceptedAnswer: { "@type": "Answer", text: "Flat 30% on net taxable income plus 12% surcharge (if income > ₹1 crore) and 4% Health & Education Cess." } },
    { "@type": "Question", name: "Are partners taxed on their share of profit?", acceptedAnswer: { "@type": "Answer", text: "No. Under Section 10(2A), the partner's share of profit from a firm taxed at 30% is fully exempt in their personal ITR. Remuneration and interest are taxable." } },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function ITRFirmLLPClient() {
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
              <span className="text-white">ITR — Firm & LLP</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🤝 ITR-5 for Partnership Firms & LLPs
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  ITR Filing for<br />
                  <span className="text-[#7ecbf0]">Firms & LLPs</span><br />
                  FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Partnership firms and LLPs are taxed at a <strong className="text-white">flat 30%</strong> on
                  net income and must file <strong className="text-white">ITR-5</strong> every year —
                  regardless of profit or loss. Taxvio's CA-assisted service covers ITR-5 preparation,
                  <strong className="text-white"> Section 40(b)</strong> partner remuneration computation,
                  tax audit coordination, and timely e-filing — starting ₹2,999.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base">
                    File Firm / LLP ITR Now →
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base">
                    📞 Free Consultation
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ ITR-5 Expert Filing", "✅ Section 40(b) Compliance", "✅ Tax Audit Support (3CA/3CD)", "✅ CA-Assisted & 100% Online"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Facts</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "ITR Form: ITR-5 (mandatory)"],
                    ["💸", "Tax rate: Flat 30% + surcharge + cess"],
                    ["📅", "Non-audit due: 31st July 2026"],
                    ["🔍", "Audit due: 31st October 2026"],
                    ["🤝", "Partner profit: Exempt u/s 10(2A)"],
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
              { number: "ITR-5", label: "Mandatory Form for All Firms & LLPs", icon: "📋" },
              { number: "30%", label: "Flat Tax Rate on Net Income", icon: "💸" },
              { number: "31 July", label: "Non-Audit ITR Deadline 2026", icon: "📅" },
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
            {["✔ Section 40(b) Precise Computation", "✔ Tax Audit Coordination", "✔ DSC-Based e-Filing", "✔ Carry-Forward Loss Protection"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section id="overview">
            <SectionLabel text="Why Firm/LLP ITR Is Different" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              ITR Filing for Partnership Firms & LLPs — Complete Guide FY 2025-26
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Partnership firms and Limited Liability Partnerships (LLPs) are treated as
                  <strong> separate taxable entities</strong> under the Income Tax Act, 1961. Unlike
                  proprietorships — where business income is taxed in the owner's hands — a firm or LLP
                  pays tax on its own net income at a <strong>flat rate of 30%</strong> plus applicable
                  surcharge and cess, irrespective of how much profit it earns. There is no basic
                  exemption limit or slab rate for firms and LLPs.
                </p>
                <p>
                  Filing ITR-5 is mandatory for every partnership firm and LLP — regardless of whether
                  there is taxable income, a loss, or nil income. Annual return filing maintains the
                  firm's legal standing, enables carry-forward of business losses, satisfies GST audit
                  trail requirements, and is mandatory for accessing bank credit facilities and
                  government tender eligibility.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  The most critical aspect of firm taxation is <strong>Section 40(b)</strong> — the
                  deduction available for partner remuneration and interest on capital. Errors in
                  computing these limits, or a partnership deed lacking the required authorisation
                  clauses, can result in the <strong>entire remuneration and interest deduction
                  being disallowed</strong> during scrutiny assessment — significantly inflating the
                  firm's tax liability.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides comprehensive
                  ITR-5 filing services for partnership firms and LLPs — covering partnership deed review,
                  Section 40(b) computation, books of accounts review, tax audit coordination, and timely
                  e-filing — across Uttar Pradesh and pan-India, starting ₹2,999.
                </p>
              </div>
            </div>
          </section>

          {/* FIRM VS LLP */}
          <section id="firm-vs-llp">
            <SectionLabel text="Entity Comparison" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Partnership Firm vs LLP — Key Differences for Income Tax
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">🤝</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60">Traditional</p>
                    <h3 className="text-2xl font-extrabold text-[#00416a]">Partnership Firm</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    ["⚖️", "Governed by Indian Partnership Act, 1932"],
                    ["⚠️", "Partners have unlimited personal liability"],
                    ["📋", "No ROC annual filing (no Form 11 / Form 8)"],
                    ["🔍", "Tax audit only under Section 44AB thresholds"],
                    ["📝", "Registered with Registrar of Firms (optional)"],
                    ["💸", "Taxed at flat 30% — same as LLP"],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">🏢</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600/60">Modern Structure</p>
                    <h3 className="text-2xl font-extrabold text-blue-700">LLP (Limited Liability Partnership)</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    ["⚖️", "Governed by LLP Act, 2008"],
                    ["🛡️", "Partners have limited liability — personal assets protected"],
                    ["📋", "ROC annual filing required: Form 11 (annual return) + Form 8 (financials)"],
                    ["🔍", "LLP Act audit: turnover > ₹40L or capital > ₹25L (separate from IT audit)"],
                    ["📝", "Registered with MCA — Certificate of Incorporation issued"],
                    ["💸", "Taxed at flat 30% — same as partnership firm"],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* TAX RATE TABLE */}
          <section id="tax-rates">
            <SectionLabel text="Tax Rate Structure" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Income Tax Rate for Firms & LLPs — FY 2025-26 (AY 2026-27)
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Unlike individuals with progressive slabs, firms and LLPs pay a single flat rate.
              Here is the complete tax structure applicable for FY 2025-26.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Component", "Rate", "Remarks"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Income Tax", "30%", "Flat rate on net taxable income — no basic exemption limit or slabs"],
                    ["Surcharge", "12%", "Applicable if total income exceeds ₹1 crore"],
                    ["Health & Education Cess", "4%", "On Income Tax + Surcharge"],
                    ["Effective Tax Rate (income ≤ ₹1 Cr)", "31.2%", "30% + 4% cess"],
                    ["Effective Tax Rate (income > ₹1 Cr)", "34.944%", "30% + 12% surcharge + 4% cess on combined amount"],
                    ["AMT (Alternate Minimum Tax)", "18.5%", "Applicable if regular tax < 18.5% of adjusted total income — rare for most firms"],
                    ["Partner's Share of Profit (Sec 10(2A))", "Exempt", "Firm's profit taxed at firm level; partner's share is fully tax-free in their personal ITR"],
                    ["Partner Remuneration & Interest", "Taxable", "Taxed as business income in partner's individual ITR at applicable slab rates"],
                  ].map(([component, rate, remarks], i) => (
                    <tr key={component} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{component}</td>
                      <td className="px-5 py-4 font-bold text-[#00416a]">{rate}</td>
                      <td className="px-5 py-4 text-gray-600">{remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500 italic">
              * Advance tax is mandatory if estimated tax liability exceeds ₹10,000. Failure to pay on time attracts interest under Sections 234B and 234C.
            </p>
          </section>

          {/* SECTION 40B */}
          <section id="section-40b" className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Critical Deduction" />
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Section 40(b) — Partner Remuneration & Interest Deduction
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              The most impactful — and most commonly miscalculated — aspect of firm taxation.
              Errors in Section 40(b) computation are the primary trigger for large additions during scrutiny.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">💰</span>
                  <h3 className="font-bold text-[#00416a]">Interest on Partner's Capital</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Deductible at up to 12% per annum on capital contributed by each partner",
                    "Must be authorised by the partnership deed / LLP agreement",
                    "Interest exceeding 12% per annum is disallowed and added back to firm's taxable income",
                    "Interest is still taxable as business income in the partner's personal ITR",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🧾</span>
                  <h3 className="font-bold text-[#00416a]">Partner Remuneration (Salary / Bonus)</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Deductible only if authorised in the partnership deed with specific working partner designation",
                    "On first ₹3,00,000 of book profit (or if loss): ₹1,50,000 or 90% of book profit — whichever is higher",
                    "On balance book profit above ₹3,00,000: 60% of such balance amount",
                    "Any remuneration beyond these limits is disallowed at the firm level but still taxable in partner's ITR",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
              <p className="text-sm text-amber-800 font-semibold">
                ⚠️ <strong>Partnership deed clause is mandatory.</strong> If the deed does not specifically authorise
                remuneration and interest — or uses vague language — the entire deduction can be disallowed during
                assessment. Taxvio reviews your deed and alerts you to any deficiencies before filing.
              </p>
            </div>
          </section>

          {/* DEDUCTIONS */}
          <section id="deductions">
            <SectionLabel text="Business Deductions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Business Deductions Available to Partnership Firms & LLPs
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏢", title: "Rent & Premises", desc: "Rent paid for office, factory, shop, or warehouse premises used for business operations." },
                { icon: "👥", title: "Staff Costs", desc: "Employee salaries, PF contributions, ESI, gratuity, and all staff-related benefits." },
                { icon: "🏗️", title: "Depreciation", desc: "Depreciation on plant, machinery, vehicles, computers, and furniture under IT Act rates." },
                { icon: "⚡", title: "Utilities", desc: "Electricity, internet, telephone, and other utility bills for business premises." },
                { icon: "📋", title: "Professional Fees", desc: "CA, legal, audit, consulting, and other professional service fees paid." },
                { icon: "📢", title: "Marketing & Advertising", desc: "Advertisement spend, digital marketing, branding, and business development costs." },
                { icon: "🏦", title: "Bank Interest on Loans", desc: "Interest on term loans, working capital loans, OD/CC facilities from banks and NBFCs." },
                { icon: "✈️", title: "Travel & Conveyance", desc: "Business travel, vehicle fuel, tolls, and conveyance for business purposes." },
                { icon: "🔧", title: "Repairs & Insurance", desc: "Maintenance of business assets and insurance premiums for assets and stock." },
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

          {/* TAX AUDIT */}
          <section id="tax-audit">
            <SectionLabel text="Audit Requirements" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Tax Audit Under Section 44AB for Firms & LLPs
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Tax audit is a critical compliance obligation for firms and LLPs crossing the prescribed
              turnover thresholds. LLPs have an additional statutory audit requirement under the LLP Act.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Category", "Audit Threshold", "Form Required", "Due Date"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Business Firm / LLP (cash transactions)", "Turnover > ₹1 crore", "Form 3CA + 3CD", "30th Sept 2026"],
                    ["Business Firm / LLP (95%+ digital transactions)", "Turnover > ₹10 crore", "Form 3CA + 3CD", "30th Sept 2026"],
                    ["Professional Firm (CA, Law, Medical, Architect)", "Gross receipts > ₹50 lakh", "Form 3CA + 3CD", "30th Sept 2026"],
                    ["LLP Statutory Audit (LLP Act 2008)", "Turnover > ₹40L or capital > ₹25L", "Separate audit report", "ROC filing by 30th Oct"],
                    ["Presumptive taxation opt-out (44AD/44ADA)", "Any turnover — profit below prescribed rate", "Form 3CA + 3CD", "30th Sept 2026"],
                  ].map(([cat, threshold, form, due], i) => (
                    <tr key={cat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{cat}</td>
                      <td className="px-5 py-4 text-gray-700">{threshold}</td>
                      <td className="px-5 py-4 font-semibold text-[#00416a]">{form}</td>
                      <td className="px-5 py-4 font-medium text-red-600">{due}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CONSEQUENCES */}
          <section id="penalties" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Non-Compliance Risk" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Consequences of Late Filing or Non-Compliance
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Late ITR filing for firms and LLPs has uniquely severe consequences — including permanent
              loss of carry-forward losses and Section 40(b) disallowances.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { risk: "Section 234F Penalty", penalty: "₹5,000 late filing fee", desc: "Flat penalty for ITR-5 filed after the due date." },
                { risk: "Section 234A & 234B Interest", penalty: "1% per month on outstanding tax", desc: "Interest on tax not paid by due date and shortfall in advance tax payments." },
                { risk: "Loss of Business Loss Carry-Forward", penalty: "Losses forfeited permanently", desc: "Firm losses cannot be carried forward to offset future profits if ITR is filed late — a critical and irreversible consequence." },
                { risk: "Section 271B — No Tax Audit", penalty: "0.5% of turnover, max ₹1.5 lakh", desc: "Penalty when audit not conducted or audit report not filed by 30th September." },
                { risk: "Section 40(b) Full Disallowance", penalty: "Entire remuneration disallowed", desc: "If deed lacks authorisation or limits are miscalculated, the full partner remuneration and interest deduction is disallowed — inflating taxable income massively." },
                { risk: "LLP Act MCA Penalties", penalty: "₹100/day (Form 11/8 late filing)", desc: "Late filing of LLP annual returns with ROC attracts additional penalties under LLP Act — separate from income tax consequences." },
              ].map((p) => (
                <div key={p.risk} className="bg-white border border-red-100 rounded-xl p-5">
                  <p className="font-bold text-red-600 text-sm mb-1">⚠️ {p.risk}</p>
                  <p className="text-xs font-semibold text-red-400 mb-2">{p.penalty}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documents Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Firm / LLP ITR-5 Filing
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Prepare these in advance for a smooth, accurate, and timely ITR-5 filing.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#00416a] mb-4">📋 Entity & Financial Documents</p>
                <ul className="space-y-2">
                  {[
                    "Partnership Deed / LLP Agreement (with remuneration & interest clauses)",
                    "Audited or unaudited Balance Sheet and Profit & Loss Account for FY 2025-26",
                    "Partner capital account statements and profit-sharing ratio details",
                    "Depreciation schedule for all fixed assets (IT Act rates)",
                    "Fixed asset register — purchases, disposals, WDV",
                    "PAN card of the firm, DSC of designated partner for e-verification",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-blue-700 mb-4">📊 Compliance & Tax Documents</p>
                <ul className="space-y-2">
                  {[
                    "GST returns — GSTR-1, GSTR-3B, and GSTR-9 reconciled with books",
                    "Business current account bank statements for full FY",
                    "TDS certificates — Form 26AS and AIS for the firm's PAN",
                    "Loan account statements and interest certificates from banks/NBFCs",
                    "Tax Audit Report in Form 3CA/3CD (if audit is applicable)",
                    "MCA filings — Form 11 and Form 8 (for LLPs)",
                    "Previous year's ITR-5 and computation for comparison",
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
              Taxvio's 6-Step ITR-5 Filing Process for Firms & LLPs
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our compliance-focused workflow ensures accurate ITR-5 preparation, Section 40(b)
              precision, and timely e-filing — every year, without fail.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Partnership Deed / LLP Agreement Review", desc: "We review the deed or agreement to verify authorisation of partner remuneration, interest on capital, and profit-sharing ratios. If the deed lacks specific clauses or uses vague language, we alert you and recommend corrections — protecting the entire Section 40(b) deduction from disallowance." },
                  { step: "02", title: "Books of Accounts & Financials Review", desc: "We review or assist in preparing the Balance Sheet, Profit & Loss Account, partner capital accounts, stock register, and depreciation schedule as per Income Tax Act requirements — ensuring all financial statements are audit-ready." },
                  { step: "03", title: "Section 40(b) Computation", desc: "Precise calculation of allowable partner remuneration based on book profit formula (₹1.5L or 90% of first ₹3L, then 60% of balance) and interest on capital within the 12% per annum limit. This computation is documented and attached to the ITR for full transparency." },
                  { step: "04", title: "Tax Audit Coordination (if applicable)", desc: "For firms liable to audit under Section 44AB, we coordinate with the auditing CA, prepare Form 3CA/3CD audit schedules with TDS compliance summary (Clause 34), MSME payment verification (43B(h)), and GST-to-books reconciliation — ensuring timely upload before 30th September." },
                  { step: "05", title: "ITR-5 Preparation & Quality Review", desc: "Complete ITR-5 preparation covering all income heads, partner details, capital account schedules, audit report linkage, and advance tax details. An internal quality review is done to prevent defective return notices and computation errors." },
                  { step: "06", title: "DSC-Based e-Filing & Advance Tax Planning", desc: "ITR-5 is filed on the Income Tax e-filing portal using the firm's DSC (Digital Signature Certificate). Acknowledgement (ITR-V) is delivered to you. We also plan next year's advance tax schedule to avoid Section 234B/234C interest." },
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
              Trusted by Partnership Firms & LLPs Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rakesh Bansal & Partners", location: "Khatauli", text: "Our trading firm's ITR-5 was filed with correct 40(b) computations. Taxvio saved us from a potential disallowance that could have cost lakhs in added tax." },
                { name: "Sharma & Verma LLP", location: "Muzaffarnagar", text: "Tax audit and ITR-5 both handled seamlessly. The team coordinated with our CA for the audit report and filed the return well before the October deadline." },
                { name: "Gupta Brothers Partnership", location: "Meerut", text: "Complex capital gains from property sale plus business income. Taxvio handled everything correctly — no notices, no scrutiny issues, no stress." },
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
              Firm & LLP ITR Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides ITR-5 filing
              for partnership firms and LLPs across <strong>Noida</strong>, <strong>Delhi NCR</strong>,
              <strong> Meerut</strong>, <strong>Ghaziabad</strong>, and <strong>Mumbai</strong> — as well
              as pan-India online. Our CA team has deep expertise in trading, manufacturing, and
              professional firms common in Western UP's business landscape.
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
                { title: "ITR — Proprietor", icon: "🏪", link: "/serviceslist/income-tax/itr-proprietor", desc: "ITR-3/4 for sole proprietors." },
                { title: "Income Tax Audit", icon: "🔍", link: "/serviceslist/income-tax/income-tax-audit", desc: "Section 44AB audit & Form 3CD." },
                { title: "Quarterly TDS Return", icon: "📋", link: "/serviceslist/income-tax/quarterly-tds", desc: "TDS return filing for firms." },
                { title: "Income Tax Scrutiny", icon: "⚖️", link: "/serviceslist/income-tax/income-tax-scrutiny", desc: "Notice defence for firms." },
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
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">File Before 31st July 2026</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File Your Firm / LLP ITR-5<br />Accurately & On Time
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Avoid penalties, protect carry-forward losses, and ensure full Section 40(b)
                    compliance. Taxvio's CA-assisted ITR-5 filing starts at ₹2,999. Serving Khatauli,
                    Muzaffarnagar, Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Start ITR-5 — ₹2,999 Onwards
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
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
    const deadline = new Date("July 31, 2026").getTime();
    const today = new Date().getTime();
    setDaysLeft(Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4" role="alert" aria-live="polite">
      ⏳ Firm / LLP ITR Deadline — Non-Audit: <strong>31st July 2026</strong> | Tax Audit: <strong>31st Oct 2026</strong>
      &nbsp;|&nbsp; {daysLeft !== null ? <strong>{daysLeft} Days Left (Non-Audit)</strong> : "Act Now"} — Avoid ₹5,000 Penalty + Loss of Carry-Forward!
    </div>
  );
}

function ITRFeeCalculator() {
  const [turnover, setTurnover] = useState("");
  const [result, setResult] = useState<{ fee: number; label: string } | null>(null);

  const calculate = () => {
    const t = Number(turnover);
    if (!t) return;
    if (t <= 10000000) {
      setResult({ fee: 2999, label: "ITR-5 — No Tax Audit Required (Turnover ≤ ₹1 Cr)" });
    } else if (t <= 50000000) {
      setResult({ fee: 5999, label: "ITR-5 with Tax Audit — Section 44AB (Form 3CA/3CD)" });
    } else {
      setResult({ fee: 7999, label: "ITR-5 with Tax Audit + Complex Financials / LLP Statutory Audit" });
    }
  };

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">Estimate Your Firm / LLP ITR-5 Filing Fee</h2>
      <p className="text-gray-600 mb-8 max-w-xl">Enter your firm or LLP's annual turnover to get an instant fee estimate.</p>

      <div className="bg-gray-50 border rounded-3xl p-8 max-w-xl">
        <label className="block font-semibold text-gray-700 mb-2 text-sm">Annual Turnover / Gross Receipts of Firm or LLP (₹)</label>
        <input
          type="number" placeholder="e.g. 15000000" value={turnover}
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
            <p className="text-xs text-gray-400 mt-2">* Includes ITR-5 preparation, Section 40(b) computation, and e-filing. Tax audit fees additional. DSC and LLP MCA filing charges extra. GST applicable.</p>
            <Link href="/contact" className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition">
              Start Filing →
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
    { q: "Which ITR form should a partnership firm or LLP file?", a: "Partnership firms and LLPs must file ITR-5 — not ITR-3 or any other form. ITR-5 is mandatory regardless of whether the firm has taxable income, a loss, or nil income. It covers all income heads including business income, capital gains, house property income, partner details, and Section 40(b) deduction schedules." },
    { q: "What is the income tax rate for a firm or LLP in FY 2025-26?", a: "Firms and LLPs are taxed at a flat 30% on net taxable income. A 12% surcharge applies if income exceeds ₹1 crore. Health & Education Cess of 4% applies on income tax plus surcharge. Effective rate: 31.2% for income ≤ ₹1 crore and 34.944% for income above ₹1 crore. No basic exemption limit or slab rates." },
    { q: "What are the Section 40(b) limits for partner remuneration?", a: "Partner remuneration is deductible up to: ₹1,50,000 or 90% of book profit (whichever is higher) on the first ₹3 lakh of book profit, and 60% of balance book profit above ₹3 lakh. Interest on partner's capital is deductible at up to 12% per annum. Both must be specifically authorised by the partnership deed or LLP agreement." },
    { q: "Is a partner's share of profit taxable in their personal ITR?", a: "No. Under Section 10(2A), a partner's share of profit from a firm taxed at 30% at the firm level is completely exempt in the partner's individual ITR. However, remuneration (salary, bonus, commission) and interest on capital received from the firm are taxable as business income in the partner's personal income tax return." },
    { q: "When is tax audit mandatory for a firm or LLP?", a: "Tax audit under Section 44AB is mandatory when business turnover exceeds ₹1 crore (or ₹10 crore for 95%+ digital transactions) or professional receipts exceed ₹50 lakh. For LLPs, a separate statutory audit under the LLP Act is also required if turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh." },
    { q: "What is the ITR-5 deadline for FY 2025-26?", a: "For firms not liable to tax audit, ITR-5 is due by 31st July 2026. For firms liable to Section 44AB audit, the extended due date is 31st October 2026. The tax audit report must be filed by 30th September 2026. Late filing attracts Section 234F penalty (₹5,000) plus Section 234A interest, and permanently forfeits the right to carry forward business losses." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — ITR-5 for Partnership Firms & LLPs
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