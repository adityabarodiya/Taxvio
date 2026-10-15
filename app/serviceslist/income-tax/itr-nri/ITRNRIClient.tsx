"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for NRIs (Non-Resident Indians)",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "IN",
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  },
  description: "Professional ITR-2 / ITR-3 filing for Non-Resident Indians. DTAA relief, Tax Residency Certificate & Form 10F, lower/nil TDS certificates, NRO refund claims, and Form 15CA/15CB for fund repatriation. Serving NRIs across the USA, UK, UAE, Canada, Singapore, Australia and pan-India.",
  serviceType: "Income Tax Return Filing for Non-Resident Indians",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "2999", priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "2999", maxPrice: "6999" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which ITR form should an NRI file?", acceptedAnswer: { "@type": "Answer", text: "Most NRIs file ITR-2 for salary, house property, capital gains, and other India-source income. NRIs with business or professional income in India must file ITR-3. ITR-1 and ITR-4 are never available to non-residents." } },
    { "@type": "Question", name: "Is NRE and FCNR account interest taxable in India?", acceptedAnswer: { "@type": "Answer", text: "No. Interest on NRE savings/FD accounts and FCNR deposits is fully exempt under Section 10(4)(ii) as long as NRI status is maintained. Only NRO account interest is taxable, typically with 30% TDS deducted at source." } },
    { "@type": "Question", name: "What is the ITR filing due date for NRIs for FY 2025-26?", acceptedAnswer: { "@type": "Answer", text: "Non-audit cases: 31st July 2026. Cases requiring tax audit (business/professional income exceeding prescribed limits): 31st October 2026, with the audit report due 30th September 2026." } },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function ITRNRIClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
<InquiryForm />
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
              <span className="text-white">ITR — NRI</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🌍 ITR Filing — Non-Resident Indians (NRI)
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Income Tax Return<br />
                  <span className="text-[#7ecbf0]">Filing for NRIs</span><br />
                  — FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  As a Non-Resident Indian, you're taxed only on income that arises or is received in
                  India — not your global income. But between{" "}
                  <strong className="text-white">NRO account TDS at 30%</strong>, property sale
                  deductions under Section 195, and claiming{" "}
                  <strong className="text-white">DTAA relief</strong> with a Tax Residency Certificate,
                  getting it wrong means overpaying tax or facing a defective return. Taxvio's CA-assisted
                  NRI ITR filing handles residential status, TDS refunds, and DTAA — starting ₹4,999.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base">
                    File My NRI ITR — ₹4,999 →
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base">
                    📞 Free Consultation
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ ITR-2 & ITR-3 Expert Filing", "✅ DTAA & TRC / Form 10F", "✅ Lower TDS Certificate (197)", "✅ Form 15CA/15CB for Repatriation"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Facts</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "ITR-2 (no business) or ITR-3 (business)"],
                    ["💸", "Taxed only on India-sourced income"],
                    ["📅", "Non-audit due: 31st July 2026"],
                    ["🔍", "Audit due: 31st October 2026"],
                    ["🌍", "DTAA relief via TRC + Form 10F"],
                    ["💰", "Starting fee: ₹4,999"],
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
              { number: "ITR-2/3", label: "Correct Form for NRIs", icon: "📋" },
              { number: "90+", label: "Countries With DTAA Network", icon: "🌍" },
              { number: "31 July", label: "Non-Audit Deadline 2026", icon: "📅" },
              { number: "₹4,999", label: "Starting Filing Fee", icon: "💰" },
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
            {["✔ DTAA & TRC Assistance", "✔ Lower/Nil TDS Certificate", "✔ Form 15CA/15CB Filing", "✔ NRO Refund Recovery"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section id="overview">
            <SectionLabel text="Why NRI Filing Is Different" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              ITR Filing for NRIs — Complete Guide FY 2025-26
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Unlike a resident Indian, a Non-Resident Indian is taxed in India only on income that is
                  <strong> received in India or accrues/arises in India</strong> — rental income from an
                  Indian property, capital gains on Indian shares or property, interest on an NRO account,
                  or salary for services rendered in India. Your foreign salary, foreign business profits,
                  and overseas investment income are outside the scope of Indian tax entirely.
                </p>
                <p>
                  This makes NRI filing simpler in one sense — no global income to report, and no
                  requirement to disclose foreign assets in Schedule FA, which applies only to
                  <strong> Resident and Ordinarily Resident (ROR)</strong> taxpayers. But it also introduces
                  its own complications: banks and tenants routinely deduct TDS at flat, non-slab rates
                  (30% on NRO interest, up to 20%+ on property sale value), and getting that money back
                  requires an accurately filed ITR.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Two decisions matter most for every NRI: correctly determining your{" "}
                  <strong>residential status</strong> for the financial year (it's recalculated every
                  year based on days spent in India, not your visa or citizenship), and choosing between
                  the <strong>correct ITR form</strong> — ITR-2 for salary, house property, capital gains
                  and other sources, or <strong>ITR-3</strong> if you run a business or profession in
                  India. ITR-1 and ITR-4 are never valid for a non-resident, even for the simplest income
                  profile — filing either results in a defective return notice under Section 139(9).
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), files NRI returns for
                  clients across the <strong>USA, UK, UAE, Canada, Singapore and Australia</strong> as well
                  as pan-India — handling residential status determination, DTAA relief, TDS refund claims,
                  and repatriation certification, starting ₹4,999.
                </p>
              </div>
            </div>
          </section>

          {/* WHO IS AN NRI */}
          <section id="residential-status">
            <SectionLabel text="Residential Status" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Is an NRI for Income Tax — And How Is It Determined?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "✈️", title: "182-Day Rule", desc: "You are a resident if you stay in India for 182 days or more in the financial year. Stay below this and you are a non-resident, subject to the second test below." },
                { icon: "📆", title: "60+365 Day Rule", desc: "A resident if present 60 days or more in the FY AND 365 days or more across the preceding 4 years. This 60-day limit extends to 182 days for Indian citizens/PIOs visiting India, or leaving India for employment abroad." },
                { icon: "💼", title: "Deemed Residency (₹15L+ Rule)", desc: "An Indian citizen with total Indian income exceeding ₹15 lakh who is not liable to tax in any other country may be deemed a resident (RNOR) even without meeting the day-count tests." },
                { icon: "🧳", title: "Working Abroad on Employment", desc: "Indian citizens who leave India during the year for employment outside India get the relaxed 182-day threshold instead of 60 days for that year." },
                { icon: "🎓", title: "Students & Long-Term Residents Abroad", desc: "Indian citizens studying or settled abroad for an extended period, and OCI/PIO cardholders based overseas, are assessed under the same day-count rules — citizenship or OCI status alone does not decide it." },
                { icon: "⚓", title: "Seafarers (Merchant Navy)", desc: "Special rules apply for determining the period spent 'outside India' for crew members on Indian ships, based on the Continuous Discharge Certificate (CDC)." },
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
                💡 Residential status is determined <strong>separately for every financial year</strong> —
                you can be resident one year and non-resident the next purely based on days spent in
                India. Getting this test wrong is the single most common error in NRI tax filing, since
                every subsequent calculation depends on it.
              </p>
            </div>
          </section>

          {/* INCOME TAXABILITY TABLE */}
          <section id="taxable-income">
            <SectionLabel text="What Gets Taxed" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Which Income Is Taxable in India for NRIs?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Only India-sourced income is taxable — here's how the most common income types are treated.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Income Type", "Taxable in India?", "Typical TDS", "Notes"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["NRE Savings / FD Interest", "Exempt", "Nil", "Exempt under Sec 10(4)(ii) while NRI status continues"],
                    ["FCNR Deposit Interest", "Exempt", "Nil", "Remains exempt until re-designated on return to India"],
                    ["NRO Account Interest", "Taxable", "30% flat", "DTAA can lower this with a TRC + Form 10F on file"],
                    ["Rental Income (Indian property)", "Taxable", "30% by tenant", "Net of municipal taxes and standard deduction"],
                    ["LTCG — Listed Shares / Equity MF", "Taxable", "N/A (self-paid)", "Flat 12.5% under Sec 112A above ₹1.25 lakh/year"],
                    ["Capital Gains — Property Sale", "Taxable", "12.5%–20%+ by buyer", "TDS often on full sale value under Sec 195 — refundable"],
                    ["Salary for Services in India", "Taxable", "Per slab by employer", "Sourced/accrued-in-India rule applies regardless of payer location"],
                    ["Dividend from Indian Companies", "Taxable", "20% (subject to DTAA)", "Reducible via TRC + Form 10F"],
                  ].map(([type, taxable, tds, notes], i) => (
                    <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-bold text-[#00416a]">{type}</td>
                      <td className="px-5 py-4 text-gray-700">{taxable}</td>
                      <td className="px-5 py-4 text-gray-700">{tds}</td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
              <p className="text-sm text-amber-800 font-semibold">
                ⚠️ Even if your India income is below the basic exemption limit, filing an ITR is often the
                only way to claim a refund of TDS already deducted by your bank or tenant — banks routinely
                deduct 30% on NRO interest regardless of your actual tax liability.
              </p>
            </div>
          </section>

          {/* ITR FORM SELECTION */}
          <section id="itr-form-selection">
            <SectionLabel text="Which Form Applies" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              ITR-2 vs ITR-3 — Which Form Should an NRI File?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-green-500 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">📋</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-600/60">Most NRIs File This</p>
                    <h3 className="text-2xl font-extrabold text-green-700">ITR-2</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  For NRIs with salary, house property income, capital gains, and other sources (interest,
                  dividends) — but <strong>no business or professional income</strong> in India.
                </p>
                <ul className="space-y-2">
                  {[
                    "Salary, rental income, capital gains, or interest income",
                    "Foreign assets/income disclosure not required (Schedule FA is for residents only)",
                    "Claiming DTAA relief or NRO TDS refund",
                    "No tax audit requirement",
                    "Covers Resident, RNOR, and Non-Resident status in one form",
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
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60">Business Income Only</p>
                    <h3 className="text-2xl font-extrabold text-[#00416a]">ITR-3</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  For NRIs running a business or profession in India — such as a partnership share, a
                  proprietorship left running back home, or professional consulting billed to Indian
                  clients. Requires business income schedules and, where applicable, an audit report.
                </p>
                <ul className="space-y-2">
                  {[
                    "Business or professional income sourced in India",
                    "Partner's share of profit from an Indian partnership firm",
                    "Tax audit required if turnover/receipts exceed prescribed limits",
                    "Also covers capital gains, salary, and house property alongside business income",
                    "ITR-1 and ITR-4 are never valid for a non-resident, regardless of income simplicity",
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

          {/* DTAA */}
          <section id="dtaa">
            <SectionLabel text="Avoiding Double Taxation" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              DTAA Relief — Tax Residency Certificate & Form 10F
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              India has Double Taxation Avoidance Agreements with 90+ countries, including the US, UK,
              UAE, Canada, Singapore, and Australia — preventing the same income from being taxed twice.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: "📄", title: "Step 1 — Tax Residency Certificate", desc: "Obtain a TRC from the tax authority of your country of residence, confirming you are a tax resident there for the relevant year." },
                { icon: "💻", title: "Step 2 — File Form 10F Online", desc: "Submit Form 10F electronically on the Indian income tax e-filing portal along with a self-declaration, before your bank, tenant, or company deducts TDS." },
                { icon: "⚖️", title: "Step 3 — Choose Exemption or Credit Method", desc: "Depending on the treaty, income is either taxed in one country only (exemption method) or taxed in both with a Foreign Tax Credit allowed in the country of residence." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md transition">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-semibold text-[#00416a] mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-[#00416a]/5 border border-[#00416a]/10 rounded-2xl px-6 py-5">
              <p className="text-sm text-[#00416a] font-semibold">
                💡 DTAA benefits must be claimed proactively — submitting the TRC and Form 10F{" "}
                <strong>before</strong> TDS is deducted secures the lower treaty rate at source. Missing
                this window still allows a refund claim through your ITR, but ties up your money until
                processing is complete.
              </p>
            </div>
          </section>

          {/* TDS / LOWER DEDUCTION */}
          <section id="tds-lower-deduction" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Avoiding Over-Deduction" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              TDS Over-Deduction & Lower/Nil Deduction Certificate (Section 197)
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Unlike TDS on payments to residents, tax deducted on NRI income is frequently far higher than
              the actual tax liability — because it's often calculated on the gross amount, not the net gain.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { trigger: "Property Sale — TDS on Full Sale Value", detail: "The buyer must deduct TDS under Section 195, commonly at 12.5%–20% plus surcharge and cess — often computed on the entire sale consideration rather than just the capital gain.", penalty: "Excess TDS locked up until refund is processed via ITR" },
                { trigger: "NRO Interest — Flat 30% TDS", detail: "Banks deduct TDS at a flat 30% on NRO account interest regardless of your actual slab rate or DTAA entitlement, unless a lower-rate certificate or DTAA documentation is on file.", penalty: "Refund claimable only by filing ITR-2" },
                { trigger: "Rental Income — 30% TDS by Tenant", detail: "Tenants paying rent to an NRI landlord must deduct TDS at 30% under Section 195, even though the actual tax due (after standard deduction and municipal taxes) is usually lower.", penalty: "Refund claimable only by filing ITR-2" },
                { trigger: "Solution — Form 13 / Section 197 Certificate", detail: "NRIs can apply in advance for a Lower or Nil Deduction Certificate from the Assessing Officer, which caps TDS at your actual estimated tax liability instead of the statutory flat rate.", penalty: "Avoids the refund wait entirely when approved before the transaction" },
              ].map((item) => (
                <div key={item.trigger} className="bg-white border border-red-100 rounded-2xl p-6">
                  <p className="font-bold text-red-600 mb-2">⚠️ {item.trigger}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.detail}</p>
                  <div className="bg-red-50 rounded-xl px-4 py-2">
                    <p className="text-xs font-semibold text-red-600">{item.penalty}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DEDUCTIONS */}
          <section id="deductions">
            <SectionLabel text="Deductions & Exemptions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Deductions Available to NRIs — And What's Restricted
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              NRIs can claim most common deductions against Indian income, with a few notable exceptions.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "📜", title: "Section 80C", desc: "LIC premiums, ELSS mutual funds, tuition fees, and principal repayment on an Indian home loan — up to ₹1.5 lakh." },
                { icon: "🏥", title: "Section 80D", desc: "Health insurance premiums for self, spouse, children, and parents, subject to prescribed limits." },
                { icon: "🏠", title: "Section 24(b)", desc: "Interest on a home loan for an Indian property, deductible against house property income." },
                { icon: "🎓", title: "Section 80E", desc: "Interest paid on an education loan taken for higher studies, with no upper limit for a fixed number of years." },
                { icon: "❤️", title: "Section 80G", desc: "Donations to eligible relief funds and charitable institutions, per the applicable deduction percentage." },
                { icon: "💵", title: "Section 80TTA", desc: "Interest on a savings bank account, up to ₹10,000 per year." },
                { icon: "👔", title: "Standard Deduction", desc: "Available against salary income under both the old and new tax regimes, same as for residents." },
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
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
              <p className="text-sm text-amber-800 font-semibold">
                ⚠️ <strong>Section 87A rebate is not available to NRIs</strong> under either tax regime —
                this benefit is restricted to resident individuals only. NRIs also cannot invest fresh
                amounts into PPF or NSC, so 80C claims are usually limited to insurance, ELSS, tuition
                fees, and home loan principal.
              </p>
            </div>
          </section>

          {/* REPATRIATION */}
          <section id="repatriation">
            <SectionLabel text="Moving Funds Abroad" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Repatriating Funds Abroad — Form 15CA & Form 15CB
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Transferring money out of an NRO account requires certification that applicable tax has
              been paid on the underlying income before the bank processes the remittance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#00416a] mb-3">📝 Form 15CA</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A self-declaration filed online by the remitter (or their bank), confirming the nature
                  and tax treatment of the funds being sent abroad — required for most NRO-to-foreign
                  transfers above the prescribed threshold.
                </p>
              </div>
              <div className="border-t-4 border-green-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-green-700 mb-3">📋 Form 15CB</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A certificate issued by a Chartered Accountant after reviewing the source of funds —
                  sale deed, rental agreement, capital gains computation, or TDS proof — confirming the
                  correct tax has been accounted for before remittance.
                </p>
              </div>
            </div>
          </section>

          {/* CONSEQUENCES */}
          <section id="consequences" className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Late Filing Risk" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Consequences of Late or Non-Filing for NRIs
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Beyond the standard penalties every taxpayer faces, NRIs risk losing access to their own
              TDS refunds and delaying fund repatriation.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { risk: "Section 234F Penalty", penalty: "₹5,000 (₹1,000 if income < ₹5L)", desc: "Flat late-filing penalty applies once your total income exceeds the basic exemption limit." },
                { risk: "Section 234A/B/C Interest", penalty: "1% per month on outstanding tax", desc: "Interest accrues on unpaid tax from the due date, and on any shortfall in advance tax." },
                { risk: "TDS Refund Delayed or Forfeited", penalty: "Refund window is time-bound", desc: "Excess TDS on NRO interest, rent, or property sale can only be recovered by filing ITR within the applicable time limit." },
                { risk: "DTAA Relief Denied", penalty: "Full domestic-rate tax applies", desc: "Without a timely-filed return supported by TRC and Form 10F, treaty relief cannot be claimed for that year." },
                { risk: "Repatriation Delays", penalty: "Form 15CB queries from CA/bank", desc: "Banks and CAs may seek proof of past compliance before certifying fresh remittances if prior-year filings are missing." },
                { risk: "Notices on Property/High-Value Transactions", penalty: "Scrutiny under Section 143(2)", desc: "Large property sales, NRO credits, or foreign remittances reported to the tax department can trigger notices if no matching ITR is on record." },
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
              Documents Required for NRI ITR Filing
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Gather these in advance for accurate residential-status assessment and timely e-filing.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#00416a] mb-4">📊 Income & Bank Records</p>
                <ul className="space-y-2">
                  {[
                    "PAN card and Aadhaar (linked, where applicable)",
                    "NRO and NRE bank account statements for the full FY",
                    "Form 16 / Form 16A for salary and TDS on other income",
                    "Form 26AS and Annual Information Statement (AIS)",
                    "Rental agreement and property tax receipts (if renting out property)",
                    "Capital gains statement — property sale deed, or broker/MF statement",
                    "Passport with entry/exit stamps, for residential status verification",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-green-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-green-700 mb-4">🌍 DTAA & Repatriation Documents</p>
                <ul className="space-y-2">
                  {[
                    "Tax Residency Certificate (TRC) from country of residence",
                    "Form 10F self-declaration (filed online)",
                    "Investment proofs — 80C, 80D, 80E, 80G",
                    "Lower/Nil TDS certificate (Form 13), if already obtained",
                    "Foreign bank account details for refund credit, if applicable",
                    "Previous year's ITR and computation, for continuity",
                    "Source documentation for Form 15CA/15CB (sale deed, TDS proof)",
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
              Taxvio's 6-Step NRI ITR Filing Process
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              NRI returns hinge on residential status and treaty claims — our workflow is built around
              getting both right before a single figure is filed.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Residential Status Determination", desc: "We review your travel history and days spent in India to determine your status — Resident, RNOR, or Non-Resident — for the relevant financial year, since every subsequent step depends on this." },
                  { step: "02", title: "India-Source Income Mapping & TDS Reconciliation", desc: "We map every India-source income — NRO interest, rent, capital gains, salary — against Form 26AS and AIS to identify all TDS already deducted, and flag any over-deduction to claim back." },
                  { step: "03", title: "DTAA Applicability & Documentation", desc: "Where a treaty applies, we help you obtain or apply your Tax Residency Certificate and file Form 10F, choosing the exemption or credit method that reduces your effective tax outgo." },
                  { step: "04", title: "Lower/Nil TDS Certificate Filing (if needed)", desc: "For upcoming property sales or large NRO credits, we help you apply for a Section 197 Lower/Nil Deduction Certificate in advance, so tax deducted matches your actual liability rather than the flat statutory rate." },
                  { step: "05", title: "ITR-2 / ITR-3 Preparation With Full Refund Claim", desc: "Your return is prepared with correct capital gains computation, deductions under 80C/80D/80E/80G, and full TDS credit claimed — reviewed internally to prevent defective-return notices." },
                  { step: "06", title: "e-Filing, Verification & Repatriation Support", desc: "Return is filed and e-verified via Aadhaar OTP, net banking, or DSC. Once refund is processed, we assist with Form 15CA/15CB certification for repatriating funds abroad." },
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
          <NRIFeeCalculator />

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Trusted by NRIs Across the Globe
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rohan Malhotra", location: "Dubai, UAE", text: "My bank deducted 30% TDS on my NRO fixed deposit interest. Taxvio filed my ITR-2, claimed the DTAA rate, and got most of it refunded within weeks." },
                { name: "Priya Nair", location: "London, UK", text: "I sold an inherited flat in India and TDS was deducted on the full sale value. Taxvio helped me apply for a lower deduction certificate and handled the entire filing." },
                { name: "Arjun Reddy", location: "Toronto, Canada", text: "Between NRE exemption, rental income, and Form 15CB for repatriation, I had no idea where to start. Taxvio explained everything clearly and managed it end to end." },
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

          {/* GLOBAL / LOCAL SEO */}
          <section id="global-reach">
            <SectionLabel text="Our Reach" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              NRI ITR Filing Services — Wherever You Are
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and files NRI returns
              entirely online for clients across <strong>the USA</strong>, <strong>the UK</strong>,
              <strong> the UAE</strong>, <strong>Canada</strong>, <strong>Singapore</strong>, and{" "}
              <strong>Australia</strong> — along with NRIs whose families and property are back home in
              <strong> Uttar Pradesh</strong>, <strong>Delhi NCR</strong>, and <strong>Mumbai</strong>.
              Every step, from document collection to e-verification, works over email, WhatsApp, and
              video call across time zones.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {["USA", "UK", "UAE", "Canada", "Singapore", "Australia"].map((place) => (
                <div key={place} className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default">
                  🌍 {place}
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
                { title: "ITR — Proprietor", icon: "🏪", link: "/serviceslist/income-tax/itr-proprietor", desc: "ITR-3/4 for proprietors & self-employed." },
                { title: "Quarterly TDS Return", icon: "📋", link: "/serviceslist/income-tax/quarterly-tds", desc: "TDS return filing & refund reconciliation." },
                { title: "Income Tax Scrutiny", icon: "⚖️", link: "/serviceslist/income-tax/income-tax-scrutiny", desc: "Notice defence for NRI assessees." },
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
                    File Your NRI ITR<br />From Anywhere in the World
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Claim your TDS refund, secure DTAA relief, and stay fully compliant — entirely online.
                    Taxvio's CA-assisted NRI ITR filing starts at ₹4,999, for clients across the globe.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Start ITR Filing — ₹4,999 Onwards
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
      ⏳ NRI ITR Filing Deadline — Non-Audit: <strong>31st July 2026</strong> | Tax Audit: <strong>31st Oct 2026</strong>
      &nbsp;|&nbsp; {daysLeft !== null ? <strong>{daysLeft} Days Left (Non-Audit)</strong> : "Act Now"} — File to Claim Your TDS Refund!
    </div>
  );
}

function NRIFeeCalculator() {
  const options = [
    { id: "basic", label: "Salary / Interest Income Only", fee: 2999, form: "ITR-2 — No Capital Gains" },
    { id: "capgains", label: "With Capital Gains (Shares / MF / Property Sale)", fee: 4999, form: "ITR-2 — Capital Gains Schedule" },
    { id: "business", label: "With Business / Professional Income in India", fee: 5999, form: "ITR-3 — Business Income" },
    { id: "dtaa", label: "With DTAA Relief + Lower TDS Certificate", fee: 6999, form: "ITR-2/3 — Full DTAA & Form 13 Support" },
  ];
  const [selected, setSelected] = useState<string | null>(null);
  const active = options.find((o) => o.id === selected) || null;

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">Estimate Your NRI ITR Filing Fee</h2>
      <p className="text-gray-600 mb-8 max-w-xl">Select the option that best matches your income profile to get an instant fee estimate.</p>

      <div className="bg-gray-50 border rounded-3xl p-8 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-3 mb-2">
          {options.map((o) => (
            <button
              key={o.id}
              onClick={() => setSelected(o.id)}
              className={`text-left p-4 rounded-xl border text-sm font-medium transition ${
                selected === o.id
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]/40"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>

        {active && (
          <div className="mt-5 border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee: <span className="text-3xl font-extrabold">₹{active.fee.toLocaleString("en-IN")}</span> onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{active.form}</p>
            <p className="text-xs text-gray-400 mt-2">* Includes CA review, ITR preparation, and e-filing. Form 15CA/15CB and tax audit fees additional where applicable.</p>
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
    { q: "Which ITR form should an NRI file?", a: "Most NRIs file ITR-2, which covers salary, house property income, capital gains, and other sources such as interest and dividends. NRIs with business or professional income in India must file ITR-3 instead. ITR-1 and ITR-4 are never available to a non-resident, regardless of how simple the income is — filing either results in a defective return notice." },
    { q: "Is interest on my NRE or FCNR account taxable in India?", a: "No. Interest earned on NRE savings/FD accounts and FCNR deposits is fully exempt under Section 10(4)(ii), as long as your NRI status is maintained. Only interest on an NRO account is taxable, and banks typically deduct TDS at a flat 30% on it regardless of your actual liability." },
    { q: "Do NRIs need to disclose foreign assets in their Indian ITR?", a: "No. Schedule FA, which requires disclosure of foreign assets and income, applies only to Resident and Ordinarily Resident (ROR) taxpayers. Non-residents are not required to report foreign bank accounts, property, or investments in their Indian return." },
    { q: "How much TDS applies when an NRI sells property in India?", a: "The buyer is required to deduct TDS under Section 195, commonly in the range of 12.5% to 20% plus applicable surcharge and cess — often calculated on the full sale value rather than just the capital gain, which frequently results in significant over-deduction. NRIs can apply in advance for a Lower or Nil Deduction Certificate under Section 197 to cap TDS at the actual tax liability, or claim a refund by filing ITR-2 after the sale." },
    { q: "How does DTAA help NRIs avoid double taxation?", a: "If your country of residence has a Double Taxation Avoidance Agreement with India, you can claim relief on income like NRO interest and dividends by submitting a Tax Residency Certificate (TRC) and Form 10F. Depending on the treaty, either the income is taxed in only one country (exemption method), or you receive a Foreign Tax Credit in your country of residence for tax already paid in India (credit method)." },
    { q: "What is the ITR filing due date for NRIs for FY 2025-26?", a: "Non-audit cases: 31st July 2026. Cases requiring a tax audit — typically NRIs with business income exceeding the prescribed turnover limits — must file by 31st October 2026, with the tax audit report due by 30th September 2026." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — ITR Filing for NRIs
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