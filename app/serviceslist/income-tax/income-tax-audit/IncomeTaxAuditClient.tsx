"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Income Tax Audit Services under Section 44AB",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  },
  description: "Professional income tax audit under Section 44AB. Form 3CA, 3CB, 3CD preparation, books review, TDS compliance, GST reconciliation. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Audit under Section 44AB",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "4999", priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "4999", maxPrice: "19999" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Who is liable for tax audit under Section 44AB?", acceptedAnswer: { "@type": "Answer", text: "Businesses with turnover > ₹1 crore (₹10 crore if 95%+ digital); professionals with receipts > ₹50 lakh; persons opting out of presumptive taxation declaring lower profit; all companies; and eligible cooperative societies." } },
    { "@type": "Question", name: "What is the due date for tax audit report filing FY 2025-26?", acceptedAnswer: { "@type": "Answer", text: "Tax audit report (Form 3CA/3CB + 3CD) must be filed by 30th September 2026. ITR for audit cases must be filed by 31st October 2026. Late report attracts ₹1.5 lakh penalty under Section 271B." } },
    { "@type": "Question", name: "What is the penalty for not getting accounts audited?", acceptedAnswer: { "@type": "Answer", text: "Section 271B: 0.5% of turnover/gross receipts, maximum ₹1,50,000. Section 271A: ₹25,000 for failure to maintain books. Plus 234F penalty and 234A interest for delayed ITR." } },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function IncomeTaxAuditClient() {
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
              <span className="text-white">Tax Audit</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔍 Income Tax Audit — Section 44AB
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Income Tax Audit<br />
                  <span className="text-[#7ecbf0]">Section 44AB —</span><br />
                  FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  When your turnover crosses ₹1 crore (₹10 crore for digital businesses) or professional
                  receipts exceed ₹50 lakh, a <strong className="text-white">tax audit under Section 44AB</strong>
                  is mandatory. Missing the <strong className="text-white">30th September deadline</strong> attracts
                  a penalty of up to <strong className="text-white">₹1.5 lakh under Section 271B</strong>. Taxvio's
                  CA-led team handles Form 3CA/3CB, all 44 clauses of Form 3CD, books of accounts review, GST
                  reconciliation, and timely portal upload — starting ₹4,999.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base">
                    Start Tax Audit — ₹4,999 Onwards →
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base">
                    📞 Free Audit Applicability Check
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ Form 3CA / 3CB / 3CD Filing", "✅ CA-Conducted Audit", "✅ All 44 Form 3CD Clauses", "✅ GST-Books Reconciliation"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Deadlines</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "Audit Report: 30th Sept 2026"],
                    ["📅", "ITR (Audit): 31st Oct 2026"],
                    ["💸", "271B Penalty: up to ₹1.5 lakh"],
                    ["🏢", "Threshold: ₹1 Cr / ₹10 Cr digital"],
                    ["👨‍💼", "Professional: ₹50 lakh receipts"],
                    ["✅", "Starting fee: ₹4,999"],
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
              { number: "30 Sept", label: "Audit Report Deadline 2026", icon: "📅" },
              { number: "₹1.5L", label: "Max Penalty u/s 271B", icon: "⚠️" },
              { number: "44", label: "Clauses in Form 3CD", icon: "📋" },
              { number: "₹4,999", label: "Starting Audit Fee", icon: "💰" },
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
            {["✔ CA-Conducted & Supervised", "✔ GST-Books Reconciliation", "✔ TDS Clause 34 Verification", "✔ Portal Upload Before Deadline"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* WHAT IS TAX AUDIT */}
          <section id="what-is-tax-audit">
            <SectionLabel text="Understanding Section 44AB" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Income Tax Audit Under Section 44AB?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  An <strong>income tax audit under Section 44AB</strong> of the Income Tax Act, 1961
                  is a mandatory examination of a taxpayer's books of accounts by a practicing Chartered
                  Accountant when prescribed turnover or receipt thresholds are crossed. Unlike a statutory
                  audit under the Companies Act (which is for stakeholder protection), a tax audit is
                  specifically designed to verify the correctness of income and expenditure reported in
                  the ITR, ensure compliance with Income Tax Act provisions, and enable accurate assessment
                  by the Income Tax Department.
                </p>
                <p>
                  The audit culminates in two key documents: <strong>Form 3CA or Form 3CB</strong>
                  (the auditor's main report) and <strong>Form 3CD</strong> — a comprehensive 44-clause
                  statement covering every aspect of financial and tax compliance. These are uploaded
                  by the CA on the Income Tax e-filing portal and must be filed before
                  <strong> 30th September 2026</strong> for FY 2025-26.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Failure to file the audit report by 30th September attracts a penalty of
                  <strong> 0.5% of turnover — up to ₹1,50,000 — under Section 271B</strong>. Since
                  audit-liable taxpayers cannot file their ITR until the audit report is uploaded,
                  audit delays also trigger Section 234F late filing fees and Section 234A interest
                  on outstanding tax.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides end-to-end
                  tax audit services for proprietors, firms, LLPs, and companies. Our CA-led team
                  handles books of accounts review, Form 3CA/3CB and all 44 clauses of Form 3CD,
                  GST-books reconciliation, TDS Clause 34 verification, and timely portal upload
                  — across Uttar Pradesh and pan-India — starting ₹4,999.
                </p>
              </div>
            </div>
          </section>

          {/* WHO IS LIABLE */}
          <section id="who-is-liable">
            <SectionLabel text="Audit Applicability" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Is Liable for Tax Audit Under Section 44AB — FY 2025-26?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏪", title: "Business Turnover > ₹1 Crore", section: "44AB(a)", desc: "Any person carrying on business with total sales, turnover, or gross receipts exceeding ₹1 crore in the FY — proprietors, firms, LLPs, companies." },
                { icon: "💳", title: "Digital Business > ₹10 Crore", section: "44AB(a) proviso", desc: "Enhanced limit of ₹10 crore if aggregate cash receipts ≤ 5% of total receipts AND cash payments ≤ 5% of total payments (95%+ digital transactions)." },
                { icon: "👨‍⚕️", title: "Professional Receipts > ₹50 Lakh", section: "44AB(b)", desc: "Doctors, lawyers, CAs, architects, engineers, film artists, and other specified professionals with gross receipts exceeding ₹50 lakh." },
                { icon: "📊", title: "Presumptive 44AD Opt-Out", section: "44AB(e)", desc: "Person eligible for 44AD who declares profit lower than 6%/8% of turnover. Audit required regardless of turnover level." },
                { icon: "🧑‍💼", title: "Presumptive 44ADA Opt-Out", section: "44AB(e)", desc: "Professional opting for 44ADA who declares income lower than 50% of gross receipts. Books must be maintained and audited." },
                { icon: "🚛", title: "Presumptive 44AE Opt-Out", section: "44AB(e)", desc: "Goods carriage operators under 44AE who declare income lower than the prescribed per-vehicle amount." },
                { icon: "🏭", title: "All Companies", section: "44AB(a)/(d)", desc: "All private limited, public limited, and OPC companies are subject to tax audit — there is no turnover threshold for companies." },
                { icon: "🤝", title: "Cooperative Societies", section: "44AB(d)", desc: "Cooperative societies whose income exceeds the basic exemption limit and are not subject to audit under any cooperative society legislation." },
                { icon: "🏢", title: "LLPs (IT Act Threshold)", section: "44AB(a)", desc: "LLPs with turnover > ₹1 crore (or > ₹10 crore if 95%+ digital) face tax audit under Section 44AB, separate from LLP Act audit requirements." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-[#00416a] mb-0.5">{item.title}</p>
                    <p className="text-xs font-bold text-[#00416a]/50 mb-1">Section {item.section}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* THRESHOLD TABLE */}
          <section id="threshold-table">
            <SectionLabel text="Threshold Reference" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Tax Audit Threshold Limits — Complete Reference (FY 2025-26)
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Audit liability can arise even at low turnover if presumptive taxation is opted out.
              Review every applicable row for your entity type.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Category", "Section", "Threshold / Condition", "Audit Form", "Deadline"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Business (general)", "44AB(a)", "Turnover > ₹1 crore", "3CB + 3CD", "30 Sept 2026"],
                    ["Business (digital — 95% non-cash)", "44AB(a) proviso", "Turnover > ₹10 crore", "3CB + 3CD", "30 Sept 2026"],
                    ["Profession", "44AB(b)", "Gross receipts > ₹50 lakh", "3CB + 3CD", "30 Sept 2026"],
                    ["Presumptive 44AD opt-out", "44AB(e)", "Profit < 6%/8%; any turnover", "3CB + 3CD", "30 Sept 2026"],
                    ["Presumptive 44ADA opt-out", "44AB(e)", "Profit < 50% of receipts; any amount", "3CB + 3CD", "30 Sept 2026"],
                    ["Presumptive 44AE opt-out", "44AB(e)", "Income < prescribed per-vehicle amount", "3CB + 3CD", "30 Sept 2026"],
                    ["Companies (all)", "44AB(a)/(d)", "No threshold — all companies", "3CA + 3CD", "30 Sept 2026"],
                    ["Cooperative Societies", "44AB(d)", "Income > basic exemption, no other audit", "3CB + 3CD", "30 Sept 2026"],
                    ["LLPs — IT Act audit", "44AB(a)", "Turnover > ₹1 Cr (or > ₹10 Cr digital)", "3CB + 3CD", "30 Sept 2026"],
                  ].map(([cat, sec, threshold, form, deadline], i) => (
                    <tr key={cat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{cat}</td>
                      <td className="px-5 py-4 font-bold text-[#00416a]">{sec}</td>
                      <td className="px-5 py-4 text-gray-700">{threshold}</td>
                      <td className="px-5 py-4 font-semibold text-gray-700">{form}</td>
                      <td className="px-5 py-4 font-medium text-red-600">{deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FORMS 3CA vs 3CB */}
          <section id="form-3ca-3cb">
            <SectionLabel text="Which Form Applies" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Form 3CA vs Form 3CB — Which Applies to You?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">🏭</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60">Companies & Statutory Audit Cases</p>
                    <h3 className="text-2xl font-extrabold text-[#00416a]">Form 3CA</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Used when the taxpayer is already required to have accounts audited under <strong>any other
                  law</strong> — primarily companies audited under the Companies Act 2013, or cooperative
                  societies audited under a state cooperative act. The tax auditor relies on the statutory
                  auditor's report and supplements it with Form 3CD.
                </p>
                <div className="bg-[#00416a]/5 border border-[#00416a]/10 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-[#00416a]">Applicable to: Private Ltd, Public Ltd, OPC, Section 8 Companies, Cooperative Societies already audited under co-op laws.</p>
                </div>
              </div>
              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">🏪</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600/60">Proprietors, Firms & LLPs</p>
                    <h3 className="text-2xl font-extrabold text-blue-700">Form 3CB</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Used when the taxpayer's audit obligation arises <strong>only under Section 44AB</strong>
                  — not under any other statute. The tax auditor independently examines and certifies the
                  accounts from scratch, without relying on any prior statutory audit.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-blue-700">Applicable to: Proprietors, HUFs, Partnership Firms, LLPs (if not audited under LLP Act separately), individuals in profession.</p>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
              <p className="text-sm text-amber-800 font-semibold">
                📋 Both Form 3CA and 3CB are always accompanied by <strong>Form 3CD</strong> — the 44-clause detailed statement that is the most scrutinised document in any tax audit. Using the wrong form (3CA instead of 3CB or vice versa) is a common compliance error that Taxvio's team catches during the initial review.
              </p>
            </div>
          </section>

          {/* FORM 3CD */}
          <section id="form3cd">
            <SectionLabel text="Form 3CD Deep Dive" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Form 3CD — Key Clauses Every Taxpayer Must Understand
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Form 3CD contains 44 clauses covering every aspect of tax compliance. Errors in these
              clauses are the primary trigger for scrutiny additions. Here are the most critical groups.
            </p>
            <div className="space-y-5">
              {[
                {
                  group: "Business & Accounting Information (Clauses 1–12)",
                  icon: "📚",
                  color: "border-blue-400",
                  items: [
                    "Basic information — name, address, PAN, nature of business, method of accounting (Clauses 1–8)",
                    "Method of accounting — mercantile vs cash basis and effect of any change in method (Clause 11)",
                    "Valuation of closing stock — method adopted and deviation from standard/consistent practice (Clause 12)",
                  ],
                },
                {
                  group: "Disallowances & Inadmissible Expenses (Clauses 17–26)",
                  icon: "🚫",
                  color: "border-red-400",
                  items: [
                    "Section 40(a) — TDS not deducted or not deposited on payments; payments to non-residents without TDS deduction (Clause 21)",
                    "Section 40A(2)(b) — payments to related parties (directors, relatives, associated enterprises) at above-market rates (Clause 23)",
                    "Section 40A(3) — cash payments exceeding ₹10,000 per day in a single transaction — disallowance of such expenses (Clause 22)",
                    "Section 43B(h) — amounts owed to MSME/Udyam-registered suppliers outstanding beyond 45 days — disallowable (Clause 26)",
                  ],
                },
                {
                  group: "TDS & TCS Compliance (Clause 34) — High Scrutiny Risk",
                  icon: "⚠️",
                  color: "border-orange-400",
                  items: [
                    "Section-wise summary of TDS deducted, deposited, and any shortfall or delayed deposit (Clause 34a)",
                    "TCS collected and deposited — section-wise complete summary (Clause 34b)",
                    "Interest paid under Sections 201(1A) and 206C(7) for delayed TDS/TCS deposit (Clause 34c)",
                    "This is the most commonly scrutinised clause — errors here directly trigger 40(a)(ia) disallowances running into lakhs.",
                  ],
                },
                {
                  group: "Depreciation & Fixed Assets (Clause 18)",
                  icon: "🏗️",
                  color: "border-green-400",
                  items: [
                    "Block-wise depreciation under IT Act rates (different from Companies Act depreciation)",
                    "New asset additions, disposals, and WDV opening/closing reconciliation",
                    "Difference between book depreciation and IT Act depreciation — adjustments in Form 3CD and ITR",
                  ],
                },
                {
                  group: "Other Critical Disclosures (Clauses 28–44)",
                  icon: "📋",
                  color: "border-purple-400",
                  items: [
                    "Deductions claimed under Chapter VI-A (80C, 80D, 80G, 80JJAA etc.) — verified against actual eligible amounts (Clause 19A)",
                    "Brought-forward losses being set off — section and assessment year wise (Clause 42)",
                    "Deemed dividend under Section 2(22)(e) — loans and advances to shareholders of private companies (Clause 36)",
                    "Employee contributions — PF, ESI — whether deducted and deposited within due dates (Clause 20)",
                    "Speculative transactions in shares, commodities, and derivatives (Clause 15)",
                  ],
                },
              ].map((group) => (
                <div key={group.group} className={`border-l-4 ${group.color} bg-white rounded-2xl p-6 hover:shadow-md transition`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{group.icon}</span>
                    <h3 className="text-lg font-bold text-[#00416a]">{group.group}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* BOOKS OF ACCOUNTS */}
          <section id="books-of-accounts">
            <SectionLabel text="Books Required" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Books of Accounts — What Must Be Maintained Under Section 44AA
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Inadequate or missing books of accounts is the most common reason for audit delays.
              These must be maintained throughout the year — not assembled at audit time.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "💵", title: "Cash Book", desc: "Day-to-day record of all cash receipts and payments, entered on the date of transaction." },
                { icon: "📓", title: "Journal", desc: "Record of all non-cash transactions — credit sales, credit purchases, accruals, and adjusting entries." },
                { icon: "📒", title: "Ledger", desc: "Consolidated account-wise summary — party accounts, expense heads, income heads, assets, and liabilities." },
                { icon: "📦", title: "Stock Register", desc: "Item-wise record of opening stock, purchases, sales, and closing stock with rates (for goods businesses)." },
                { icon: "🏗️", title: "Fixed Asset Register", desc: "Record of all capital assets — purchase date, cost, depreciation rate, WDV, and disposal details." },
                { icon: "🏦", title: "Bank Statements", desc: "All bank accounts reconciled with books. Bank reconciliation statements examined during audit." },
                { icon: "🧾", title: "Bills & Vouchers", desc: "Copies of all sales bills, purchase invoices, and supporting vouchers for every expense claim." },
                { icon: "📊", title: "GST Returns", desc: "GSTR-1, GSTR-3B, and GSTR-9 reconciled with books of accounts — a key scrutiny area." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border rounded-2xl p-5 hover:bg-white hover:shadow-md transition">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-semibold text-[#00416a] mb-1 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-gray-50 border rounded-2xl px-6 py-4">
              <p className="text-sm text-gray-700">
                📌 <strong>Retention period:</strong> Books must be preserved for <strong>6 years from the end of the relevant assessment year</strong>
                (8 years if assessments are pending or reassessment notices are received).
              </p>
            </div>
          </section>

          {/* PENALTIES */}
          <section id="penalties" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Penalty Risk" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Penalties for Non-Compliance with Section 44AB
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Non-compliance triggers a cascade of penalties and interest charges that far exceed the
              audit fee itself. Act before the 30th September deadline.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { section: "Section 271B", risk: "No Audit / Late Report", penalty: "0.5% of turnover, max ₹1,50,000", desc: "Levied when audit not conducted or report not filed by 30th September." },
                { section: "Section 271A", risk: "Books Not Maintained", penalty: "₹25,000 penalty", desc: "Failure to maintain books of accounts as required under Section 44AA." },
                { section: "Section 234F", risk: "Late ITR (Audit Case)", penalty: "₹5,000 late filing fee", desc: "Audit delay directly delays ITR filing — triggering automatic 234F penalty." },
                { section: "Section 234A", risk: "Tax Outstanding Interest", penalty: "1% per month interest", desc: "Interest on outstanding tax for every month of delay after due date." },
                { section: "40(a) Disallowance", risk: "TDS Not Deducted", penalty: "Full amount disallowed", desc: "Payments where TDS not deducted/deposited — disallowed during scrutiny." },
                { section: "Section 276CC", risk: "Persistent Non-Filing", penalty: "Criminal prosecution", desc: "Persistent non-filing combined with false reporting can escalate to prosecution." },
              ].map((p) => (
                <div key={p.risk} className="bg-white border border-red-100 rounded-xl p-5">
                  <p className="text-xs font-bold text-[#00416a] mb-1">{p.section}</p>
                  <p className="font-bold text-red-600 text-sm mb-1">⚠️ {p.risk}</p>
                  <p className="text-sm font-semibold text-red-500 mb-2">{p.penalty}</p>
                  <p className="text-xs text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's 6-Step Tax Audit Process — Books to Portal
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              A tax audit is not just a formality — every Form 3CD clause directly affects ITR
              accuracy and scrutiny risk. Our structured process ensures complete accuracy.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Audit Applicability Assessment & Digital Ratio Check", desc: "We assess Section 44AB applicability — by turnover, professional receipts, or presumptive taxation opt-out. We calculate the cash/digital transaction ratio to determine if the ₹10 crore enhanced limit applies, potentially avoiding audit obligation for qualifying businesses." },
                  { step: "02", title: "Books of Accounts Review & Gap Analysis", desc: "Complete review of all books — cash book, journal, ledger, stock register, bank reconciliation, and fixed asset register. Missing records, reconciliation gaps, and accounting errors are identified and corrected before audit procedures begin." },
                  { step: "03", title: "GST-to-Books Reconciliation", desc: "Turnover as per books is reconciled with GSTR-1, GSTR-3B, and GSTR-9. Discrepancies between GST returns and income tax books are identified, explained, and documented — this is a primary risk area in current scrutiny assessments." },
                  { step: "04", title: "TDS / TCS Compliance Verification (Clause 34)", desc: "Complete TDS deducted vs deposited reconciliation across all sections. All payments subject to TDS are verified for correct deduction and timely deposit. Shortfalls are flagged for rectification before Form 3CD Clause 34 reporting — preventing 40(a)(ia) disallowances." },
                  { step: "05", title: "Form 3CD Clause-by-Clause Completion", desc: "All 44 clauses of Form 3CD are completed — disallowances under 40(a) and 40A, cash payment violations under 40A(3), MSME payment compliance under 43B(h), IT Act depreciation schedules, related party transactions, Chapter VI-A deductions, and brought-forward loss set-offs." },
                  { step: "06", title: "Form 3CA / 3CB Preparation, Signing & Portal Upload", desc: "Form 3CA (for company/statutory audit cases) or Form 3CB (for other cases) is prepared, reviewed, and signed by the practicing CA. The complete audit package — 3CA/3CB + 3CD — is uploaded on the Income Tax portal before 30th September with acknowledgement preserved for records." },
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
          <AuditFeeCalculator />

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documents Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Income Tax Audit
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Preparing these before the audit engagement saves significant time and ensures smooth Form 3CD completion. Share these with our team when engaging Taxvio for audit.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#00416a] mb-4">📚 Books & Financial Records</p>
                <ul className="space-y-2">
                  {[
                    "Complete books of accounts — cash book, journal, ledger, stock register, fixed asset register",
                    "Bank statements for all accounts (current, savings, OD, CC) for the full FY",
                    "Bank reconciliation statements for all accounts",
                    "All purchase invoices, sales invoices, and expense vouchers with supporting bills",
                    "Loan account statements — term loans, CC limits, OD facilities",
                    "Fixed asset purchase invoices and disposal documents for the year",
                    "Previous year's Form 3CD — for opening figures and prior year disclosure comparison",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-blue-700 mb-4">📋 Compliance & Tax Records</p>
                <ul className="space-y-2">
                  {[
                    "GST returns — GSTR-1, GSTR-3B, GSTR-9 reconciled with books",
                    "TDS / TCS challans and Form 26AS / AIS of the taxpayer's PAN",
                    "Partnership deed / LLP agreement / MOA (for firms, LLPs, companies)",
                    "Statutory audit report (for companies — required for Form 3CA)",
                    "MSME / Udyam registration certificates of suppliers (for Section 43B(h))",
                    "Related party transaction details — Section 40A(2)(b) specified persons list",
                    "Depreciation schedule (IT Act rates) for all asset blocks for the year",
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

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Trusted for Tax Audit Compliance Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Ramesh Traders", location: "Khatauli", text: "Our turnover crossed ₹1 crore for the first time. Taxvio guided us through the full tax audit — books preparation, Form 3CD, and portal upload — all done before September end." },
                { name: "Sharma & Associates LLP", location: "Muzaffarnagar", text: "Complex audit with multiple partner remuneration and TDS issues. Taxvio identified and corrected Clause 34 gaps before reporting — no disallowances in our assessment." },
                { name: "Tech Solutions Pvt. Ltd.", location: "Meerut", text: "Company audit including GST reconciliation with books. Taxvio completed the full audit — statutory and tax — before the September deadline. Highly professional team." },
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
              Income Tax Audit Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides Section 44AB
              tax audit services for businesses, professionals, firms, LLPs, and companies across
              <strong> Noida</strong>, <strong>Delhi NCR</strong>, <strong>Meerut</strong>,
              <strong> Ghaziabad</strong>, and <strong>Mumbai</strong> — as well as pan-India online.
              Our CA team has extensive experience auditing trading businesses, manufacturers,
              professionals, and service companies across Western UP's sugar, textile, and trading sectors.
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
                { title: "ITR — Proprietor", icon: "🏪", link: "/serviceslist/income-tax/itr-proprietor", desc: "ITR-3/4 filing for business owners." },
                { title: "ITR — Firm & LLP", icon: "🤝", link: "/serviceslist/income-tax/itr-firm-llp", desc: "ITR-5 for partnerships and LLPs." },
                { title: "Income Tax Scrutiny", icon: "⚖️", link: "/serviceslist/income-tax/income-tax-scrutiny", desc: "Expert defence for scrutiny notices." },
                { title: "Quarterly TDS Return", icon: "📋", link: "/serviceslist/income-tax/quarterly-tds", desc: "TDS return filing for employers." },
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
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Deadline: 30th September 2026</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Complete Your Tax Audit<br />Before the September Deadline
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Avoid ₹1.5 lakh Section 271B penalty, prevent scrutiny additions from Form 3CD errors,
                    and stay 100% compliant. Taxvio's CA-led tax audit starts at ₹4,999. Serving Khatauli,
                    Muzaffarnagar, Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Start Tax Audit — ₹4,999 Onwards
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
                    📞 Free Applicability Check
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
    const deadline = new Date("September 30, 2026").getTime();
    const today = new Date().getTime();
    const days = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    setDaysLeft(days);
  }, []);

  const urgency = daysLeft !== null && daysLeft <= 60;

  return (
    <div className={`${urgency ? "bg-red-600" : "bg-red-500"} text-white text-center py-3 font-semibold text-sm px-4`} role="alert" aria-live="polite">
      ⏳ Tax Audit Report Deadline: <strong>30th September 2026</strong> &nbsp;|&nbsp;
      ITR (Audit Cases): <strong>31st October 2026</strong> &nbsp;|&nbsp;
      {daysLeft !== null ? <strong>{daysLeft} Days Left</strong> : "Act Now"} &nbsp;|&nbsp;
      Penalty up to ₹1.5 Lakh Under Section 271B
    </div>
  );
}

function AuditFeeCalculator() {
  const [entityType, setEntityType] = useState("proprietor");
  const [turnover, setTurnover] = useState("");
  const [result, setResult] = useState<{ fee: number; label: string } | null>(null);

  const entities = [
    { value: "proprietor", label: "Proprietor / Individual" },
    { value: "firm", label: "Partnership Firm / LLP" },
    { value: "company", label: "Private Limited / OPC" },
  ];

  const calculate = () => {
    const t = Number(turnover);
    if (!t) return;
    let fee = 4999;
    let label = "";

    if (entityType === "proprietor") {
      if (t <= 10000000) { fee = 4999; label = "Proprietor / Individual (Turnover ≤ ₹1 Cr)"; }
      else if (t <= 50000000) { fee = 7999; label = "Proprietor / Individual (Turnover ₹1–5 Cr)"; }
      else { fee = 12999; label = "Proprietor / Individual (Turnover > ₹5 Cr)"; }
    } else if (entityType === "firm") {
      if (t <= 10000000) { fee = 5999; label = "Partnership Firm / LLP (Turnover ≤ ₹1 Cr)"; }
      else if (t <= 50000000) { fee = 9999; label = "Partnership Firm / LLP (Turnover ₹1–5 Cr)"; }
      else { fee = 14999; label = "Partnership Firm / LLP (Turnover > ₹5 Cr)"; }
    } else {
      if (t <= 10000000) { fee = 7999; label = "Private Limited / OPC (Turnover ≤ ₹1 Cr)"; }
      else if (t <= 100000000) { fee = 12999; label = "Private Limited / OPC (Turnover ₹1–10 Cr)"; }
      else { fee = 19999; label = "Private Limited / OPC (Turnover > ₹10 Cr)"; }
    }
    setResult({ fee, label });
  };

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">Estimate Your Tax Audit Fee</h2>
      <p className="text-gray-600 mb-8 max-w-xl">Select your entity type and enter annual turnover or gross receipts to get an instant estimate.</p>

      <div className="bg-gray-50 border rounded-3xl p-8 max-w-2xl">
        <p className="font-semibold text-gray-700 mb-3 text-sm">Select Entity Type</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {entities.map((e) => (
            <button key={e.value} onClick={() => { setEntityType(e.value); setResult(null); }}
              className={`px-5 py-2.5 rounded-xl font-semibold transition border text-sm ${entityType === e.value ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"}`}>
              {e.label}
            </button>
          ))}
        </div>

        <label className="block font-semibold text-gray-700 mb-2 text-sm">Annual Turnover / Gross Receipts (₹)</label>
        <input
          type="number" placeholder="e.g. 15000000" value={turnover}
          onChange={(e) => { setTurnover(e.target.value); setResult(null); }}
          className="border p-3 rounded-xl w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#00416a] text-sm"
        />

        <button onClick={calculate} disabled={!turnover}
          className="w-full bg-[#00416a] text-white py-3 rounded-xl font-bold hover:bg-[#002b45] transition disabled:opacity-40 text-sm">
          Calculate Audit Fee
        </button>

        {result && (
          <div className="mt-5 border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee: <span className="text-3xl font-extrabold">₹{result.fee.toLocaleString("en-IN")}</span> onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{result.label}</p>
            <p className="text-xs text-gray-400 mt-2">* Includes books review, Form 3CA/3CB & 3CD preparation, and portal upload. ITR filing is additional. Transfer pricing (Section 92E) charged separately. GST extra.</p>
            <Link href="/contact" className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition">
              Start Audit Process →
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
    { q: "What is income tax audit under Section 44AB?", a: "A tax audit requires eligible taxpayers to get books of accounts examined by a practicing CA. The CA submits Form 3CA or 3CB (audit report) along with Form 3CD (44-clause statement) on the Income Tax portal. It verifies income correctness, TDS compliance, disallowable expenses, and ensures accurate ITR filing." },
    { q: "Who is required to get a tax audit for FY 2025-26?", a: "Tax audit is mandatory for: businesses with turnover > ₹1 crore (or > ₹10 crore if 95%+ transactions are digital); professionals with gross receipts > ₹50 lakh; persons opting out of presumptive taxation (44AD/44ADA) and declaring lower profit; all companies; and eligible cooperative societies." },
    { q: "What is the due date for the tax audit report?", a: "Form 3CA/3CB + Form 3CD must be uploaded by 30th September 2026 for FY 2025-26. ITR for audit-liable taxpayers must be filed by 31st October 2026. Late audit report attracts Section 271B penalty (up to ₹1.5 lakh) and delays ITR causing 234F and 234A charges." },
    { q: "What is the difference between Form 3CA and Form 3CB?", a: "Form 3CA is for taxpayers already audited under another law — primarily companies under the Companies Act. Form 3CB is for taxpayers whose audit obligation arises only under Section 44AB — proprietors, firms, HUFs, and LLPs. Both are filed with the same Form 3CD statement." },
    { q: "What is Form 3CD and why is it critical?", a: "Form 3CD is a 44-clause statement that forms the core of every tax audit. It covers disallowances under 40(a) (TDS failures), 40A(2)(b) (related party payments), 40A(3) (cash violations), 43B(h) (MSME payments), depreciation, TDS Clause 34 compliance, brought-forward losses, and Chapter VI-A deductions. Errors here are the primary trigger for scrutiny additions." },
    { q: "What is the penalty for not getting tax audit done?", a: "Section 271B: 0.5% of turnover/gross receipts — maximum ₹1,50,000. Section 271A: ₹25,000 for not maintaining books. Plus Section 234F (₹5,000) and Section 234A interest for delayed ITR caused by audit delay. These combined can significantly exceed the audit fee." },
    { q: "What is the ₹10 crore digital business limit under Section 44AB?", a: "The Section 44AB turnover threshold is raised from ₹1 crore to ₹10 crore if: (a) aggregate cash receipts during the year do not exceed 5% of total receipts, AND (b) aggregate cash payments do not exceed 5% of total payments. Both conditions must be met simultaneously — meaning 95%+ of all transactions are through banking/digital channels." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Income Tax Audit Under Section 44AB
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