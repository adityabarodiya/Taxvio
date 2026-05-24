"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for Proprietors & Self-Employed Individuals",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  },
  description: "Professional ITR-3 / ITR-4 filing for proprietors, freelancers, and self-employed. Presumptive taxation under 44AD & 44ADA, books of accounts, audit support. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Return Filing for Proprietors",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "1499", priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "1499", maxPrice: "4999" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which ITR form should a proprietor file?", acceptedAnswer: { "@type": "Answer", text: "File ITR-4 if opting for presumptive taxation (44AD/44ADA) within limits. File ITR-3 if maintaining regular books, exceeding presumptive limits, or liable to tax audit." } },
    { "@type": "Question", name: "What is presumptive taxation under Section 44AD?", acceptedAnswer: { "@type": "Answer", text: "Section 44AD allows eligible small businesses with turnover up to ₹3 crore (digital) or ₹2 crore (cash) to declare 6% or 8% as profit without maintaining detailed books." } },
    { "@type": "Question", name: "What is the ITR filing due date for proprietors FY 2025-26?", acceptedAnswer: { "@type": "Answer", text: "Non-audit: 31st July 2026. Tax audit cases: 31st October 2026. Audit report due: 30th September 2026." } },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function ITRProprietorClient() {
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
              <span className="text-white">ITR — Proprietor</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏪 ITR Filing — Proprietors & Self-Employed
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  ITR Filing for<br />
                  <span className="text-[#7ecbf0]">Proprietors &</span><br />
                  Self-Employed — FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  As a sole proprietor, freelancer, or trader, your business and personal income are taxed
                  together under your individual PAN. Choosing the right ITR form —
                  <strong className="text-white"> ITR-3 or ITR-4</strong> — and the correct tax scheme
                  (regular vs <strong className="text-white">presumptive under 44AD/44ADA</strong>) can
                  make a significant difference in your tax outgo. Taxvio's CA-assisted service handles it
                  all — starting ₹1,499.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base">
                    File My ITR Now — ₹1,499 →
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base">
                    📞 Free Consultation
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ ITR-3 & ITR-4 Expert Filing", "✅ 44AD / 44ADA Evaluation", "✅ Tax Audit Support", "✅ GST + Income Tax Together"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Facts</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "ITR-4 (presumptive) or ITR-3 (books)"],
                    ["💸", "Taxed at individual slab rates"],
                    ["📅", "Non-audit due: 31st July 2026"],
                    ["🔍", "Audit due: 31st October 2026"],
                    ["⚠️", "Late = lose business loss carry-forward"],
                    ["💰", "Starting fee: ₹1,499"],
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
              { number: "ITR-3/4", label: "Correct Form for Proprietors", icon: "📋" },
              { number: "44AD/ADA", label: "Presumptive Tax Relief Schemes", icon: "💡" },
              { number: "31 July", label: "Non-Audit Deadline 2026", icon: "📅" },
              { number: "₹1,499", label: "Starting Filing Fee", icon: "💰" },
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
            {["✔ CA-Assisted All Filings", "✔ 44AD vs Regular Evaluation", "✔ Tax Audit Coordination", "✔ Maximum Deduction Review"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section id="overview">
            <SectionLabel text="Why Proprietor ITR Is Different" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              ITR Filing for Proprietors & Self-Employed — Complete Guide FY 2025-26
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  As a sole proprietor, freelancer, trader, or self-employed professional in India, your
                  income tax obligations are more complex than those of a salaried employee. A proprietorship
                  has <strong>no separate legal tax identity</strong> — the owner and the business are one
                  for tax purposes. Your business income, salary, rental income, and capital gains are all
                  consolidated and taxed under your individual PAN at applicable slab rates.
                </p>
                <p>
                  Filing ITR accurately is critical for proprietors because it serves multiple purposes
                  beyond compliance. It establishes <strong>business income proof</strong> for bank loans
                  and overdraft facilities, enables carry-forward of business losses to offset future
                  profits, allows claiming all legitimate business expenses, and protects you from
                  scrutiny notices triggered by GST-to-ITR mismatches.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  The most important decision for every proprietor is choosing between
                  <strong> presumptive taxation (ITR-4)</strong> and <strong>regular taxation with
                  books of accounts (ITR-3)</strong>. Presumptive taxation under Section 44AD (for
                  businesses) and 44ADA (for professionals) eliminates the need for detailed accounts
                  and audit — but only if turnover is within the prescribed limits and the declared
                  profit meets the minimum percentage.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides end-to-end
                  ITR filing for proprietors and self-employed individuals — from scheme evaluation and
                  books review to tax audit coordination and advance tax planning — across Uttar Pradesh
                  and pan-India, starting ₹1,499.
                </p>
              </div>
            </div>
          </section>

          {/* WHO SHOULD FILE */}
          <section id="who-should-file">
            <SectionLabel text="Applicability" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Is a Sole Proprietor for Income Tax — And Who Must File?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🛒", title: "Traders & Shopkeepers", desc: "Retail, wholesale, or online sellers running business under their own name or trade name — grocery, textiles, hardware, electronics." },
                { icon: "👨‍⚕️", title: "Doctors & Medical Professionals", desc: "Private practice doctors, dentists, physiotherapists, and other medical practitioners earning from consultations and procedures." },
                { icon: "⚖️", title: "Lawyers & Legal Professionals", desc: "Advocates, legal consultants, and notaries earning from client fees, retainers, and professional services." },
                { icon: "💻", title: "Freelancers & Digital Entrepreneurs", desc: "Content creators, IT consultants, web developers, graphic designers, and social media managers earning from Indian or international clients." },
                { icon: "🏗️", title: "Contractors & Commission Agents", desc: "Civil contractors, event organisers, and individuals earning commission income or executing work orders in their own name." },
                { icon: "📚", title: "Tutors, Trainers & Service Providers", desc: "Coaching centres, fitness trainers, photographers, transporters, and any individual running an unregistered service business." },
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

          {/* ITR FORM SELECTION */}
          <section id="itr-form-selection">
            <SectionLabel text="Which Form Applies" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              ITR-3 vs ITR-4 — Which Form Should You File?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-green-500 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">📋</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-600/60">Simpler Filing — Presumptive</p>
                    <h3 className="text-2xl font-extrabold text-green-700">ITR-4 (Sugam)</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  For proprietors and professionals who opt for <strong>presumptive taxation</strong> under
                  Section 44AD (business), 44ADA (professionals), or 44AE (transport operators). No need
                  to maintain detailed books of accounts — declare a fixed % of turnover as profit.
                </p>
                <ul className="space-y-2">
                  {[
                    "Business turnover within 44AD limits (₹2–3 crore)",
                    "Professional receipts within 44ADA limits (₹50–75 lakh)",
                    "No tax audit requirement",
                    "No capital gains from shares/property in the same year",
                    "Resident individual / HUF / Firm (not LLP)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">📊</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60">Detailed Filing — Regular Books</p>
                    <h3 className="text-2xl font-extrabold text-[#00416a]">ITR-3</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  For proprietors who maintain regular books of accounts, have turnover exceeding presumptive
                  limits, are liable to tax audit under Section 44AB, or have capital gains alongside
                  business income. Requires balance sheet and P&L account.
                </p>
                <ul className="space-y-2">
                  {[
                    "Turnover exceeds 44AD / 44ADA limits",
                    "Tax audit mandatory under Section 44AB",
                    "Capital gains from shares, property, or MF redemption",
                    "Multiple income sources — salary + business + capital gains",
                    "Opted out of presumptive taxation in a previous year",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* PRESUMPTIVE TAX */}
          <section id="presumptive-taxation">
            <SectionLabel text="Tax Relief Schemes" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Presumptive Taxation — Section 44AD, 44ADA & 44AE Explained
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              These schemes eliminate the need for detailed bookkeeping for eligible small businesses
              and professionals — declaring a fixed % of turnover as profit.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Section", "Applicable To", "Turnover Limit", "Deemed Profit %", "ITR Form"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["44AD", "Eligible small businesses — traders, contractors, retailers", "Up to ₹3 crore (digital); ₹2 crore (cash)", "8% (cash) / 6% (digital receipts)", "ITR-4"],
                    ["44ADA", "Specified professionals — doctors, lawyers, CAs, architects, engineers, consultants", "Up to ₹75 lakh (digital); ₹50 lakh (cash)", "50% of gross receipts", "ITR-4"],
                    ["44AE", "Goods carriage vehicle owners (up to 10 vehicles)", "No specific turnover limit", "₹1,000 per ton / month per vehicle", "ITR-4"],
                    ["Regular Taxation", "All others — exceeding above limits or opting out of presumptive", "No limit", "Actual profit (books of accounts required)", "ITR-3"],
                  ].map(([section, applicable, limit, profit, form], i) => (
                    <tr key={section} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-bold text-[#00416a]">{section}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{applicable}</td>
                      <td className="px-5 py-4 text-gray-700">{limit}</td>
                      <td className="px-5 py-4 font-semibold text-[#00416a]">{profit}</td>
                      <td className="px-5 py-4 font-bold text-gray-700">{form}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
              <p className="text-sm text-amber-800 font-semibold">
                ⚠️ <strong>5-Year Lock-In Rule:</strong> If you opt out of presumptive taxation after availing it,
                you cannot re-enter the scheme for the next 5 years. Taxvio evaluates whether presumptive or regular
                taxation is more beneficial based on your actual profit margins before advising on scheme selection.
              </p>
            </div>
          </section>

          {/* DEDUCTIONS */}
          <section id="deductions">
            <SectionLabel text="Business Deductions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Business Expenses Claimable by Proprietors Under ITR-3
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Proprietors filing ITR-3 with regular books can claim all genuine business expenses —
              only the net profit after deductions is taxable.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏢", title: "Rent & Utilities", desc: "Office/shop rent, electricity, water, internet, and telephone bills for business premises." },
                { icon: "👥", title: "Staff Salaries & EPF", desc: "Employee salaries, wages, bonus, and PF/ESI contributions paid by the proprietorship." },
                { icon: "🏗️", title: "Depreciation on Assets", desc: "Depreciation on computers, machinery, vehicles, and furniture per Income Tax Act rates." },
                { icon: "📦", title: "Purchases & Stock", desc: "Cost of goods purchased for resale or raw materials used in manufacturing or services." },
                { icon: "📋", title: "Professional Fees", desc: "Fees paid to CAs, lawyers, tax consultants, and other professionals for business purposes." },
                { icon: "📢", title: "Advertising & Marketing", desc: "Advertisement spend, digital marketing, printing, promotions, and business development." },
                { icon: "🏦", title: "Interest on Business Loans", desc: "Interest paid on loans taken for business purposes — fully deductible against business income." },
                { icon: "✈️", title: "Travel & Conveyance", desc: "Business travel, vehicle fuel, tolls, and lodging for genuine business purposes." },
                { icon: "🛡️", title: "Insurance Premiums", desc: "Premiums for business asset insurance, trade credit insurance, and professional indemnity." },
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
            <div className="mt-5 bg-[#00416a]/5 border border-[#00416a]/10 rounded-2xl px-6 py-5">
              <p className="text-sm text-[#00416a] font-semibold">
                💡 In addition to business deductions, proprietors can also claim personal deductions under
                <strong> Section 80C</strong> (up to ₹1.5 lakh), <strong>80D</strong> (health insurance),
                <strong> 80E</strong> (education loan interest) — just like salaried individuals — since all
                income is taxed in the proprietor's individual hands.
              </p>
            </div>
          </section>

          {/* TAX AUDIT */}
          <section id="tax-audit" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Audit Requirement" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Tax Audit Under Section 44AB — When Is It Mandatory for Proprietors?
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Crossing any one of these thresholds makes tax audit mandatory — there is no discretion.
              The audit report (Form 3CB/3CD) must be filed before ITR.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { trigger: "Business turnover > ₹1 crore", detail: "Standard threshold for all business proprietors (raised to ₹10 crore if 95%+ transactions are digital/banking).", penalty: "Section 271B — 0.5% of turnover, max ₹1.5 lakh" },
                { trigger: "Professional receipts > ₹50 lakh", detail: "For doctors, lawyers, CAs, architects, engineers, and other Section 44ADA specified professionals.", penalty: "Section 271B — 0.5% of receipts, max ₹1.5 lakh" },
                { trigger: "Opting out of 44AD/44ADA with lower profit", detail: "If you declare profit below the presumptive % (6%/8% for 44AD; 50% for 44ADA), books must be maintained and audited.", penalty: "Section 271B applies if audit not done" },
                { trigger: "Business loss + carry-forward desired", detail: "If the proprietor has incurred a business loss and wishes to carry it forward to offset future profits, audit is required.", penalty: "Loss cannot be carried forward without audit in certain cases" },
              ].map((item) => (
                <div key={item.trigger} className="bg-white border border-red-100 rounded-2xl p-6">
                  <p className="font-bold text-red-600 mb-2">⚠️ {item.trigger}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.detail}</p>
                  <div className="bg-red-50 rounded-xl px-4 py-2">
                    <p className="text-xs font-semibold text-red-600">Penalty if not done: {item.penalty}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONSEQUENCES */}
          <section id="consequences" className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Late Filing Risk" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Consequences of Late or Non-Filing for Proprietors
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Late filing for proprietors has uniquely severe consequences — particularly the permanent
              loss of business loss carry-forward, which cannot be restored for that year.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { risk: "Section 234F Penalty", penalty: "₹5,000 (₹1,000 if income < ₹5L)", desc: "Flat penalty for ITR filed after the due date — applies regardless of tax liability." },
                { risk: "Section 234A & 234B Interest", penalty: "1% per month on outstanding tax", desc: "Interest on unpaid tax from due date and shortfall in advance tax payments." },
                { risk: "Business Loss Carry-Forward Lost", penalty: "Permanent and irreversible", desc: "Business losses for FY 2025-26 CANNOT be carried forward if ITR is filed late. Future-year profits cannot be offset — resulting in permanently higher tax." },
                { risk: "Section 271B Audit Penalty", penalty: "0.5% of turnover, max ₹1.5L", desc: "Failure to conduct mandatory tax audit or file audit report by 30th September." },
                { risk: "GST-to-ITR Scrutiny Notice", penalty: "143(2) scrutiny notice", desc: "The IT Department cross-verifies GSTR-1/GSTR-3B turnover with ITR. Non-filers or late filers are frequently selected for scrutiny." },
                { risk: "Bank Credit Impact", penalty: "Loan application rejected", desc: "Banks require last 2–3 years' ITR for loan approvals. Late or missing ITR directly impacts access to working capital and business loans." },
              ].map((p) => (
                <div key={p.risk} className="bg-white border border-amber-100 rounded-xl p-5">
                  <p className="font-bold text-amber-700 text-sm mb-1">⚠️ {p.risk}</p>
                  <p className="text-xs font-semibold text-amber-500 mb-2">{p.penalty}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documents Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Proprietor ITR Filing
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Prepare these in advance for a smooth, accurate, and timely ITR-3 or ITR-4 filing.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#00416a] mb-4">📊 Business & Financial Records</p>
                <ul className="space-y-2">
                  {[
                    "GST registration certificate and all returns (GSTR-1, GSTR-3B, GSTR-9)",
                    "Business current account and savings account bank statements for full FY",
                    "Purchase invoices, sales invoices, and expense bills/vouchers",
                    "Rent agreement for office or shop (if claimed as deduction)",
                    "Loan account statements and interest certificates for business loans",
                    "Depreciation schedule for business assets (computers, vehicles, machinery)",
                    "Balance Sheet and Profit & Loss Account (for ITR-3 / audit cases)",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-green-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-green-700 mb-4">📋 Tax & Personal Documents</p>
                <ul className="space-y-2">
                  {[
                    "TDS certificates — Form 26AS, AIS, and TIS from Income Tax portal",
                    "Investment proofs — LIC, PPF, ELSS for Section 80C deduction",
                    "Health insurance premium receipt for Section 80D",
                    "Capital gains statement if shares, MFs, or property sold during the year",
                    "PAN card, Aadhaar linked to PAN, pre-validated bank account for refund",
                    "Previous year's ITR and computation (for comparison and carry-forward details)",
                    "Tax Audit Report Form 3CB/3CD (for audit-liable proprietors)",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
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
              Taxvio's 6-Step ITR Filing Process for Proprietors
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Business ITR filing involves more decisions than salaried returns. Our structured workflow
              ensures accurate preparation, optimal scheme selection, and timely e-filing every year.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Business Income Assessment & Turnover Verification", desc: "We review your GST returns, bank statements, and invoices to determine gross turnover, verify income from all sources, and identify the applicable ITR form (ITR-3 or ITR-4). We also cross-check AIS data to ensure no income is missed or mismatched." },
                  { step: "02", title: "Presumptive vs Regular Taxation Evaluation", desc: "We compare presumptive taxation (44AD/44ADA) against regular taxation with books — calculating actual tax under both scenarios based on your expense profile and profit margins. We recommend the scheme that minimises tax liability while maintaining compliance simplicity." },
                  { step: "03", title: "Books of Accounts & P&L Preparation (ITR-3)", desc: "For regular taxation filers, we assist in preparing or reviewing the balance sheet, profit & loss account, and depreciation schedule as per Income Tax Act requirements — ensuring all records are audit-ready." },
                  { step: "04", title: "Tax Audit Coordination (if applicable)", desc: "For businesses requiring audit under Section 44AB, we coordinate with the CA auditor, prepare Form 3CB/3CD audit schedules with GST reconciliation, TDS compliance (Clause 34), and MSME payment verification — ensuring upload before 30th September." },
                  { step: "05", title: "ITR Preparation with All Deductions Optimised", desc: "Your return is prepared with all business income, capital gains, personal deductions (80C, 80D, 80E), and applicable schedules accurately filled. An internal quality review is done to prevent defective return notices and computation errors." },
                  { step: "06", title: "e-Filing, Verification & Advance Tax Planning", desc: "Return is filed on the Income Tax e-filing portal and verified via Aadhaar OTP or EVC. ITR-V acknowledgement is delivered to you. We also provide advance tax schedule for FY 2026-27 to avoid Section 234B/234C interest throughout the year." },
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
              Trusted by Proprietors & Business Owners Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Vikram Agarwal", location: "Khatauli", text: "I run a wholesale grocery business. Taxvio handled my ITR-4 under 44AD seamlessly — no hassle of maintaining accounts, everything done in 2 days." },
                { name: "Dr. Neha Sharma", location: "Muzaffarnagar", text: "As a doctor with private practice, I was confused about 44ADA. Taxvio explained everything clearly and filed my ITR with optimum tax saving." },
                { name: "Suresh Yadav", location: "Meerut", text: "My turnover exceeded ₹1 crore this year and audit was required. Taxvio managed the entire audit and ITR filing professionally and on time." },
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
              Proprietor ITR Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides ITR-3 and
              ITR-4 filing services for proprietors, freelancers, traders, and professionals across
              <strong> Noida</strong>, <strong>Delhi NCR</strong>, <strong>Meerut</strong>,
              <strong> Ghaziabad</strong>, and <strong>Mumbai</strong> — as well as pan-India online.
              We have deep familiarity with the business landscape in Western UP — sugar, textiles,
              trading, and agricultural businesses — and the specific income patterns they present.
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
                { title: "ITR — Salaried", icon: "👔", link: "/serviceslist/income-tax/itr-salaried", desc: "ITR-1/2 filing for salaried employees." },
                { title: "Income Tax Audit", icon: "🔍", link: "/serviceslist/income-tax/income-tax-audit", desc: "Section 44AB audit & Form 3CD." },
                { title: "Quarterly TDS Return", icon: "📋", link: "/serviceslist/income-tax/quarterly-tds", desc: "TDS return for businesses with employees." },
                { title: "Income Tax Scrutiny", icon: "⚖️", link: "/serviceslist/income-tax/income-tax-scrutiny", desc: "Notice defence for proprietors." },
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
                    File Your Proprietorship ITR<br />Accurately & On Time
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Avoid penalties, protect carry-forward losses, and stay 100% compliant. Taxvio's
                    CA-assisted proprietor ITR filing starts at ₹1,499. Serving Khatauli, Muzaffarnagar,
                    Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Start ITR Filing — ₹1,499 Onwards
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
      ⏳ ITR Filing Deadline — Non-Audit: <strong>31st July 2026</strong> | Tax Audit: <strong>31st Oct 2026</strong>
      &nbsp;|&nbsp; {daysLeft !== null ? <strong>{daysLeft} Days Left (Non-Audit)</strong> : "Act Now"} — Late Filing = Loss of Business Loss Carry-Forward!
    </div>
  );
}

function ITRFeeCalculator() {
  const [turnover, setTurnover] = useState("");
  const [result, setResult] = useState<{ fee: number; label: string } | null>(null);

  const calculate = () => {
    const t = Number(turnover);
    if (!t) return;
    if (t <= 2000000) {
      setResult({ fee: 1499, label: "ITR-4 — Presumptive Taxation (44AD / 44ADA)" });
    } else if (t <= 10000000) {
      setResult({ fee: 2999, label: "ITR-3 — Regular Books of Accounts (no audit)" });
    } else {
      setResult({ fee: 4999, label: "ITR-3 with Tax Audit — Section 44AB (Form 3CB/3CD)" });
    }
  };

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">Estimate Your Proprietor ITR Filing Fee</h2>
      <p className="text-gray-600 mb-8 max-w-xl">Enter your annual business turnover or gross receipts to get an instant fee estimate.</p>

      <div className="bg-gray-50 border rounded-3xl p-8 max-w-xl">
        <label className="block font-semibold text-gray-700 mb-2 text-sm">Annual Business Turnover / Gross Receipts (₹)</label>
        <input
          type="number" placeholder="e.g. 5000000" value={turnover}
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
            <p className="text-xs text-gray-400 mt-2">* Includes CA review, ITR preparation, and e-filing. Tax audit fees additional where applicable. GST extra.</p>
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
    { q: "Which ITR form should a proprietor or self-employed person file?", a: "File ITR-4 if opting for presumptive taxation (turnover within 44AD/44ADA limits) without capital gains or multiple income sources. File ITR-3 if maintaining regular books, exceeding presumptive limits, having capital gains alongside business income, or if tax audit is required. Choosing the wrong form results in a defective return notice." },
    { q: "What is presumptive taxation under Section 44AD for businesses?", a: "Section 44AD allows eligible small businesses with turnover up to ₹3 crore (digital) or ₹2 crore (cash) to declare 6% or 8% of turnover as profit respectively — without maintaining detailed books of accounts. This simplifies compliance significantly. However, opting out after one year means you cannot re-enter the scheme for the next 5 years." },
    { q: "What is the Section 44ADA limit for professionals in FY 2025-26?", a: "For FY 2025-26, specified professionals (doctors, lawyers, CAs, architects, engineers, interior designers, technical consultants, film artists, etc.) with gross receipts up to ₹75 lakh (if 95% receipts are digital) or ₹50 lakh (cash) can opt for 44ADA and declare 50% of receipts as profit without maintaining detailed books." },
    { q: "Is tax audit mandatory for my proprietorship?", a: "Tax audit under Section 44AB is mandatory if business turnover exceeds ₹1 crore (₹10 crore for 95% digital transactions) or professional receipts exceed ₹50 lakh. It is also required if you opt out of presumptive taxation and declare lower profit than the prescribed rate. The audit report (Form 3CB/3CD) must be filed by 30th September." },
    { q: "What is the ITR filing due date for proprietors for FY 2025-26?", a: "Non-audit proprietors: 31st July 2026. Tax audit cases: 31st October 2026. Tax audit report (Form 3CB/3CD): 30th September 2026. Filing after these dates attracts Section 234F penalty (up to ₹5,000) plus Section 234A interest — and permanently forfeits business loss carry-forward for that year." },
    { q: "Can I carry forward business loss if I miss the ITR deadline?", a: "No. Business losses (other than house property loss and unabsorbed depreciation) cannot be carried forward if the ITR is filed after the due date. This is one of the most severe consequences of late filing for proprietors — the ability to offset future profits is permanently lost for that year, resulting in higher tax in subsequent years." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — ITR Filing for Proprietors & Self-Employed
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