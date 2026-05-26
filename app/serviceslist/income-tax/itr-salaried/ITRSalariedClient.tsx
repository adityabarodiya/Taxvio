"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for Salaried Individuals",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  },
  description: "Professional ITR filing for salaried employees in India. Old vs New tax regime comparison, maximum deductions, and timely submission. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Return Filing for Salaried",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "499", priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "499", maxPrice: "1999" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is ITR filing mandatory for salaried employees?", acceptedAnswer: { "@type": "Answer", text: "Yes. ITR filing is mandatory if gross total income exceeds ₹2.5 lakh (old regime) or ₹3 lakh (new regime). Also mandatory to claim TDS refund, carry forward losses, or for loan/visa applications." } },
    { "@type": "Question", name: "Which ITR form should a salaried employee use?", acceptedAnswer: { "@type": "Answer", text: "ITR-1 (Sahaj) for salary, one house property, and other sources up to ₹50 lakh. ITR-2 if capital gains, multiple properties, or foreign income is involved." } },
    { "@type": "Question", name: "What is the ITR filing deadline for salaried individuals FY 2025-26?", acceptedAnswer: { "@type": "Answer", text: "31st July 2026 for non-audit salaried cases. Late filing attracts ₹5,000 penalty under Section 234F plus interest under 234A." } },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function ITRSalariedClient() {
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
              <span className="text-white">ITR — Salaried</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  👔 ITR Filing — Salaried Employees
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  ITR Filing for<br />
                  <span className="text-[#7ecbf0]">Salaried Individuals</span><br />
                  FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Filing your income tax return is not just a legal obligation — it's how you claim your
                  <strong className="text-white"> TDS refund</strong>, compare old vs new tax regime, and
                  maximise deductions under <strong className="text-white">80C, 80D, HRA, and home loan
                  interest</strong>. Taxvio's CA-assisted service ensures your return is filed accurately,
                  on time, and with every rupee saved — starting ₹499.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base">
                    File My ITR Now — ₹499 →
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base">
                    📞 Free Consultation
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ 2,000+ Returns Filed", "✅ CA-Assisted Service", "✅ 100% Online & Secure", "✅ Maximum Refund Guaranteed"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Facts</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "ITR-1 (up to ₹50L) or ITR-2 (capital gains)"],
                    ["📅", "Due date: 31st July 2026"],
                    ["💸", "Late penalty: up to ₹5,000"],
                    ["🔄", "New regime is default from FY 2023-24"],
                    ["💰", "Standard deduction: ₹75,000 (new regime)"],
                    ["✅", "Starting fee: ₹499"],
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
              { number: "2,000+", label: "Returns Filed Successfully", icon: "📊" },
              { number: "₹499", label: "Starting Filing Fee", icon: "💰" },
              { number: "31 July", label: "FY 2025-26 Deadline", icon: "📅" },
              { number: "15–45 Days", label: "Typical Refund Timeline", icon: "💸" },
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
            {["✔ Old vs New Regime Evaluation", "✔ Maximum Deductions Applied", "✔ TDS Refund Maximised", "✔ Post-Filing Support Included"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section id="overview">
            <SectionLabel text="Why File ITR as a Salaried Employee" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              Complete Guide to ITR Filing for Salaried Employees (FY 2025-26 / AY 2026-27)
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Filing your <strong>Income Tax Return (ITR)</strong> is not just a legal obligation —
                  it is a financial advantage. For salaried individuals in India, ITR filing is mandatory
                  when gross total income exceeds the basic exemption limit. But beyond compliance, filing
                  on time enables you to <strong>claim TDS refunds</strong>, obtain home loans and credit
                  cards effortlessly, apply for visas, and establish a verifiable income history.
                </p>
                <p>
                  Even if your employer has already deducted TDS and deposited it with the government,
                  you are still required to file a return if your income surpasses the threshold. TDS
                  deducted is often based on approximate employer calculations. Filing your ITR allows
                  the Department to reconcile exact tax liability — and if excess tax was deducted,
                  you receive a <strong>refund directly to your pre-validated bank account</strong>.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  The most critical decision for salaried employees is choosing between the
                  <strong> Old Tax Regime</strong> (which allows claiming 80C, 80D, HRA, home loan
                  interest deductions) and the <strong>New Tax Regime</strong> (default since
                  FY 2023-24, with lower slab rates but no deductions). The right choice can save
                  thousands of rupees — and Taxvio evaluates both for every client.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides professional
                  ITR filing services for salaried employees across Uttar Pradesh and pan-India via our
                  secure online platform. Our CA-assisted process ensures accurate preparation, regime
                  optimisation, and e-filing within the due date — starting ₹499.
                </p>
              </div>
            </div>
          </section>

          {/* WHO SHOULD FILE */}
          <section id="who-must-file">
            <SectionLabel text="Mandatory Filing Situations" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              When Is ITR Filing Mandatory for Salaried Individuals?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "💰", title: "Income Exceeds Exemption Limit", desc: "Gross total income exceeds ₹2.5 lakh (old regime) or ₹3 lakh (new regime) before deductions — filing is mandatory." },
                { icon: "💸", title: "TDS Deducted — Want Refund", desc: "If TDS has been deducted by your employer or bank and you want to claim the excess back as a refund." },
                { icon: "📈", title: "Capital Gains Income", desc: "Sold shares, mutual funds, or property during the year — capital gains must be reported even with salary income." },
                { icon: "🏠", title: "Rental or Other Income", desc: "Earning rent from a property, freelance income, interest income from FDs, or any other source alongside salary." },
                { icon: "🌍", title: "Foreign Assets or Income", desc: "Holding foreign bank accounts, investments, or earning income from abroad — mandatory disclosure in ITR." },
                { icon: "🏦", title: "Loan / Visa Requirements", desc: "Home loan, personal loan, or visa application requires ITR acknowledgement as proof of income for the last 2–3 years." },
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

          {/* WHICH ITR FORM */}
          <section id="itr-form-selection">
            <SectionLabel text="Which Form to File" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              ITR-1 vs ITR-2 vs ITR-3 — Which Form Should You File?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  form: "ITR-1 (Sahaj)",
                  icon: "📋",
                  badge: "Most Common",
                  badgeColor: "bg-green-100 text-green-700",
                  border: "border-green-400",
                  applicable: "Salaried individuals with income up to ₹50 lakh",
                  covers: ["Salary and pension income", "One house property income", "Other sources (FD interest, savings interest)", "Agricultural income up to ₹5,000"],
                  notFor: "Capital gains, more than one property, or foreign income",
                },
                {
                  form: "ITR-2",
                  icon: "📊",
                  badge: "Capital Gains",
                  badgeColor: "bg-blue-100 text-blue-700",
                  border: "border-blue-400",
                  applicable: "Salaried individuals with capital gains or complex income",
                  covers: ["All ITR-1 income sources", "Capital gains from shares, MF, property", "Multiple house properties", "Foreign assets or income", "Director in a company"],
                  notFor: "Business or professional income (use ITR-3)",
                },
                {
                  form: "ITR-3",
                  icon: "📈",
                  badge: "Business + Salary",
                  badgeColor: "bg-orange-100 text-orange-700",
                  border: "border-orange-400",
                  applicable: "Salaried + freelance or business income combined",
                  covers: ["Salary income alongside business income", "Freelance / consulting income", "All capital gains types", "Partner in a firm (not LLP)", "Any professional income"],
                  notFor: "Simple salaried cases — overly complex for those with no business income",
                },
              ].map((item) => (
                <div key={item.form} className={`border-t-4 ${item.border} bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="text-xl font-extrabold text-[#00416a]">{item.form}</h3>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 font-semibold">{item.applicable}</p>
                  <p className="text-xs font-bold text-[#00416a] mb-2 uppercase tracking-wide">Covers:</p>
                  <ul className="space-y-1 mb-4">
                    {item.covers.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>{c}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-50 rounded-xl px-3 py-2">
                    <p className="text-xs text-red-600 font-semibold">Not for: {item.notFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* REGIME COMPARISON */}
          <section id="regime-comparison">
            <SectionLabel text="Tax Regime Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Old vs New Tax Regime — Which Is Better for You in FY 2025-26?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Since FY 2023-24, the <strong>New Tax Regime is the default</strong>. Salaried individuals
              can opt for the Old Regime at ITR filing time if it saves more tax.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Particular", "Old Regime", "New Regime (Default)"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Standard Deduction", "₹50,000", "₹75,000 (from FY 2024-25)"],
                    ["Section 80C (LIC, PPF, ELSS)", "Up to ₹1.5 lakh", "Not available"],
                    ["Section 80D (Health Insurance)", "Up to ₹25,000 – ₹1 lakh", "Not available"],
                    ["HRA Exemption", "Available (based on salary + rent)", "Not available"],
                    ["Home Loan Interest 24(b)", "Up to ₹2 lakh (self-occupied)", "Not available (let-out only)"],
                    ["LTA Exemption", "Available (twice in 4-year block)", "Not available"],
                    ["Section 87A Rebate", "Up to ₹12,500 (income ≤ ₹5L)", "Up to ₹25,000 (income ≤ ₹7L)"],
                    ["Tax Slab Rates", "Higher slabs (5%–30%)", "Lower slabs (5%–30% with more brackets)"],
                    ["Best For", "High deductions & investments (>₹3.75L total deductions)", "Fewer deductions — want simplicity & lower rates"],
                  ].map(([particular, old, newR], i) => (
                    <tr key={particular} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-semibold text-gray-800">{particular}</td>
                      <td className="px-5 py-4 text-gray-700">{old}</td>
                      <td className="px-5 py-4 text-gray-700">{newR}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-[#00416a]/5 border border-[#00416a]/10 rounded-2xl px-6 py-5">
              <p className="text-sm text-[#00416a] font-semibold">
                💡 <strong>Taxvio computes both regimes for every client</strong> using actual income and deduction data
                before filing — ensuring you always pay the lowest legally possible tax. A wrong regime choice
                can cost thousands every year.
              </p>
            </div>
          </section>

          {/* DEDUCTIONS */}
          <section id="deductions">
            <SectionLabel text="Key Deductions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Key Deductions Available to Salaried Employees (Old Regime)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "💼", title: "Section 80C — Up to ₹1.5 Lakh", desc: "LIC premiums, EPF, PPF, ELSS mutual funds, NSC, home loan principal, tuition fees for children." },
                { icon: "🏥", title: "Section 80D — Up to ₹1 Lakh", desc: "Health insurance for self, spouse, children (₹25,000) and parents (₹25,000 / ₹50,000 for senior citizen parents)." },
                { icon: "🏠", title: "HRA Exemption", desc: "House Rent Allowance partially or fully exempt based on actual rent paid, salary, and city (50% or 40% of basic)." },
                { icon: "📉", title: "Standard Deduction — ₹50,000", desc: "Available without proof to all salaried employees under the old regime — directly reduces gross salary." },
                { icon: "🏦", title: "Section 24(b) — Home Loan Interest", desc: "Up to ₹2 lakh deduction on interest paid on home loan for self-occupied property each financial year." },
                { icon: "🎓", title: "Section 80E — Education Loan", desc: "Interest on education loan for higher studies is fully deductible for up to 8 years — no upper limit." },
                { icon: "✈️", title: "LTA — Leave Travel Allowance", desc: "Tax exemption on domestic travel with family twice in a block of 4 years — claim with journey proof." },
                { icon: "🎁", title: "Section 80G — Donations", desc: "50% or 100% deduction on donations to 80G-approved NGOs and charitable institutions, subject to AGTI limit." },
                { icon: "🏗️", title: "Section 80EEA — Home Loan (First-Time)", desc: "Additional ₹1.5 lakh interest deduction for first-time home buyers on affordable housing loans (conditions apply)." },
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

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documents Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Salaried ITR Filing
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Keep these ready before initiating the ITR process — having them upfront ensures same-day filing.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#00416a] mb-4">📋 Income & Tax Documents</p>
                <ul className="space-y-2">
                  {[
                    "Form 16 (Part A & Part B) issued by your employer",
                    "Form 26AS, AIS, and TIS from Income Tax e-filing portal",
                    "Bank account statements for full financial year",
                    "Capital gains statement from broker (if shares/MF/property sold)",
                    "Rental income details and tenant PAN (if any)",
                    "PAN card and Aadhaar linked to PAN",
                    "Pre-validated bank account details (account number + IFSC) for refund",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-green-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-green-700 mb-4">💝 Deduction & Investment Proofs</p>
                <ul className="space-y-2">
                  {[
                    "LIC premium receipts, PPF passbook, ELSS statement for Section 80C",
                    "Health insurance premium receipt for Section 80D",
                    "Home loan interest & principal certificate from bank (24(b) & 80C)",
                    "Rent receipts and landlord PAN (for HRA exemption claim)",
                    "Education loan interest certificate for Section 80E",
                    "80G donation receipts for charitable contributions",
                    "LTA claim documents — travel tickets and bills",
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
              Taxvio's 6-Step ITR Filing Process for Salaried Employees
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured, CA-supervised workflow ensures every deduction is applied, the correct
              regime is selected, and your return is filed before the deadline.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Document Collection & AIS Verification", desc: "We collect Form 16, Form 26AS/AIS, investment proofs, bank statements, and all other income details. We cross-verify all income and TDS credits in AIS against your documents to ensure no mismatch triggers a notice." },
                  { step: "02", title: "Old vs New Tax Regime Evaluation", desc: "We compute your exact tax liability under both regimes using your actual income, deductions, and investments — then recommend the regime that results in the lowest tax outgo. This single step saves most clients thousands of rupees." },
                  { step: "03", title: "Accurate Tax Computation with All Deductions", desc: "Taxable income is calculated after applying every eligible deduction — Section 80C, 80D, HRA, standard deduction, home loan interest, and all other applicable provisions. We ensure no eligible deduction is missed." },
                  { step: "04", title: "ITR Form Selection & Return Preparation", desc: "We select the correct ITR form (ITR-1, ITR-2, or ITR-3 based on your income profile) and prepare the complete return with all schedules accurately filled — preventing defective return notices from the Department." },
                  { step: "05", title: "e-Filing & e-Verification", desc: "The return is filed on the official Income Tax e-filing portal and verified immediately via Aadhaar OTP, net banking, or DSC. ITR-V acknowledgement is delivered to you within minutes of successful filing." },
                  { step: "06", title: "Refund Tracking & Post-Filing Support", desc: "After filing, we track your refund status and provide full support for any 143(1) intimations, defective return notices, revised return requests, or refund reissuance — ensuring your refund reaches your bank account without delays." },
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

          {/* PENALTIES */}
          <section id="penalties" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Late Filing Consequences" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Consequences of Not Filing ITR on Time
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Many salaried employees underestimate the consequences of missing the July 31 deadline.
              These are automatic — no exemption unless specifically approved.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { risk: "Section 234F Penalty", penalty: "₹5,000 (₹1,000 if income < ₹5L)", desc: "Flat late filing fee applied automatically for ITR filed after the due date." },
                { risk: "Section 234A Interest", penalty: "1% per month on outstanding tax", desc: "Interest charged on any outstanding tax from the due date until actual payment." },
                { risk: "Loss of Carry-Forward Benefits", penalty: "Capital / business losses forfeited", desc: "Losses under capital gains or business income cannot be carried forward if ITR is filed late — permanently." },
                { risk: "Delayed TDS Refund", penalty: "Months of wait + reduced interest", desc: "Late filing delays refund processing. Section 244A interest on refund may be reduced or nil for late filers." },
                { risk: "Income Tax Notice", penalty: "Section 142(1) or 148 notice", desc: "Non-filers with significant income in AIS data are selected for notices asking them to explain non-filing." },
                { risk: "Loan & Visa Impact", penalty: "Application rejected / delayed", desc: "Banks and embassies require last 3 years' ITR. Missing returns directly impacts approval of home loans and visa applications." },
              ].map((p) => (
                <div key={p.risk} className="bg-white border border-red-100 rounded-xl p-5">
                  <p className="font-bold text-red-600 text-sm mb-1">⚠️ {p.risk}</p>
                  <p className="text-xs font-semibold text-red-400 mb-2">{p.penalty}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FEE CALCULATOR */}
          <ITRFeeCalculator />

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Trusted by Salaried Professionals Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rahul Sharma", location: "Khatauli", text: "Taxvio filed my ITR within 24 hours of sharing my Form 16. Smooth, professional, and completely hassle-free. My refund was credited in 3 weeks." },
                { name: "Priya Verma", location: "Muzaffarnagar", text: "TDS was deducted in excess by my employer. Taxvio identified the exact refund amount and optimised my regime selection. Outstanding service." },
                { name: "Amit Gupta", location: "Meerut", text: "Transparent fees, quick turnaround, and great follow-up. Switched from another CA and the experience is far better. Would highly recommend." },
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
              Salaried ITR Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides ITR-1 and
              ITR-2 filing for salaried employees across <strong>Noida</strong>, <strong>Delhi NCR</strong>,
              <strong> Meerut</strong>, <strong>Ghaziabad</strong>, and <strong>Mumbai</strong> — as well
              as pan-India online. Our 100% digital process means you share documents securely from
              anywhere in India and we handle the rest — no office visit required.
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
                { title: "ITR — Proprietor", icon: "🏪", link: "/serviceslist/income-tax/itr-proprietor", desc: "ITR-3/4 for business owners." },
                { title: "ITR — Firm & LLP", icon: "🤝", link: "/serviceslist/income-tax/itr-firm-llp", desc: "ITR-5 for partnership firms." },
                { title: "Form 15G / 15H", icon: "🏦", link: "/serviceslist/income-tax/15g-15h", desc: "Stop TDS on FD interest." },
                { title: "Income Tax Scrutiny", icon: "⚖️", link: "/serviceslist/income-tax/income-tax-scrutiny", desc: "Expert notice defence." },
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
                    File Your ITR for FY 2025-26<br />— Maximise Your Refund
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Avoid penalties, claim your full TDS refund, and stay 100% compliant. Taxvio's
                    CA-assisted salaried ITR filing starts at ₹499. Serving Khatauli, Muzaffarnagar,
                    Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Start Filing — ₹499 Onwards
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
    const deadline = new Date("July 31, 2026").getTime();
    const today = new Date().getTime();
    setDaysLeft(Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4" role="alert" aria-live="polite">
      ⏳ ITR Filing Deadline: <strong>31st July 2026</strong> &nbsp;|&nbsp;
      {daysLeft !== null ? <strong>{daysLeft} Days Left</strong> : "Act Now"} &nbsp;|&nbsp;
      Avoid ₹5,000 Penalty Under Section 234F!
    </div>
  );
}

function ITRFeeCalculator() {
  const [income, setIncome] = useState("");
  const [result, setResult] = useState<{ fee: number; label: string } | null>(null);

  const calculate = () => {
    const inc = Number(income);
    if (!inc) return;
    if (inc <= 500000) {
      setResult({ fee: 499, label: "ITR-1 — Salary + Other Sources (income ≤ ₹5 lakh)" });
    } else if (inc <= 1000000) {
      setResult({ fee: 999, label: "ITR-1 or ITR-2 — Salary + Investments (income ₹5–10 lakh)" });
    } else {
      setResult({ fee: 1999, label: "ITR-2 — Salary + Capital Gains / Multiple Sources (income > ₹10 lakh)" });
    }
  };

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">ITR Filing Fee Calculator</h2>
      <p className="text-gray-600 mb-8 max-w-xl">Our fees are transparent and based on your annual income. Enter your gross income to get an instant estimate.</p>

      <div className="bg-gray-50 border rounded-3xl p-8 max-w-xl">
        <label className="block font-semibold text-gray-700 mb-2 text-sm">Annual Gross Income (₹)</label>
        <input
          type="number" placeholder="e.g. 750000" value={income}
          onChange={(e) => { setIncome(e.target.value); setResult(null); }}
          className="border p-3 rounded-xl w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#00416a] text-sm"
        />
        <button onClick={calculate} disabled={!income}
          className="w-full bg-[#00416a] text-white py-3 rounded-xl font-bold hover:bg-[#002b45] transition disabled:opacity-40 text-sm">
          Calculate My ITR Fee
        </button>

        {result && (
          <div className="mt-5 border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee: <span className="text-3xl font-extrabold">₹{result.fee.toLocaleString("en-IN")}</span> onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{result.label}</p>
            <p className="text-xs text-gray-400 mt-2">* Inclusive of CA review, regime evaluation, ITR preparation, and e-filing. GST extra.</p>
            <Link href="/contact" className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition">
              File My ITR Now →
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
    { q: "Is ITR filing mandatory for salaried employees in India?", a: "Yes. ITR filing is mandatory if gross total income exceeds ₹2.5 lakh (old regime) or ₹3 lakh (new regime) before deductions. Even if TDS is deducted by your employer, you must file to claim a refund, carry forward losses, or meet requirements for loans, visas, and credit applications." },
    { q: "Which ITR form should a salaried employee use?", a: "Most salaried individuals with income up to ₹50 lakh from salary, one house property, and savings interest should file ITR-1 (Sahaj). ITR-2 is required if you have capital gains from shares or mutual funds, more than one property, or foreign income/assets. ITR-3 applies if you also have freelance or business income." },
    { q: "What is the last date for ITR filing for FY 2025-26?", a: "The due date for salaried individuals for FY 2025-26 (AY 2026-27) is 31st July 2026. Late filing attracts a penalty of ₹5,000 (₹1,000 for income below ₹5 lakh) plus interest under Section 234A on outstanding tax." },
    { q: "Which tax regime is better — old or new for FY 2025-26?", a: "It depends on your deductions. If your eligible deductions (80C, 80D, HRA, home loan interest) total more than ₹3.75 lakh, the old regime usually saves more tax. For those with fewer deductions or wanting simplicity, the new regime with lower slab rates is beneficial. Taxvio computes both and recommends the best option for every client." },
    { q: "How long does it take to get an ITR refund?", a: "After e-filing and e-verification, refunds are typically credited within 15–45 days if the return is filed before the due date and no discrepancies are found in AIS. Having a pre-validated bank account with correct PAN-linked IFSC speeds up the credit. Taxvio tracks your refund status post-filing." },
    { q: "What documents are needed for ITR filing?", a: "Key documents: Form 16 from employer, Form 26AS/AIS/TIS from Income Tax portal, bank statements, investment proofs (LIC, PPF, ELSS) for 80C, health insurance receipts for 80D, home loan certificate for 24(b), rent receipts for HRA, capital gains statement from broker if applicable, and PAN linked to Aadhaar." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — ITR Filing for Salaried Individuals
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