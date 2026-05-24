"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Section 80G Approval for Trusts & NGOs",
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
    "Professional Section 80G approval services for charitable trusts, NGOs, and Section 8 companies. Form 10A/10AB filing, donor deduction, Form 10BD & 10BE compliance, 5-year renewal. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Section 80G Approval for Charitable Organisations",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "8999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Section 80G approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 80G allows donors to claim 50% or 100% deduction on donations made to approved charitable organisations. When a trust obtains 80G approval, its donors can deduct the donated amount from their taxable income, making the organisation more attractive for fundraising.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 10BD and why is it mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 10BD is the annual Statement of Donations received, filed by 80G-approved trusts by 31st May. It reports donor-wise details including PAN. Late filing attracts ₹200/day penalty under Section 234G with no upper cap. Without it, donors cannot claim 80G deductions.",
      },
    },
    {
      "@type": "Question",
      name: "How often does 80G approval need to be renewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "80G approval must be renewed every 5 years along with Section 12AB registration via Form 10AB, filed at least 6 months before expiry.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function Section80GClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white text-gray-800 overflow-x-hidden">

        {/* ── URGENCY BANNER ── */}
        <UrgencyBanner />

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
              <span className="text-white">80G Approval</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  💝 Section 80G Approval for Trusts & NGOs
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Section 80G<br />
                  <span className="text-[#7ecbf0]">NGO & Trust</span><br />
                  Donor Deduction
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  With <strong className="text-white">Section 80G approval</strong>, donors to your trust
                  or NGO can claim <strong className="text-white">50% or 100% tax deduction</strong> on
                  their contributions — making your organisation significantly more attractive for
                  individual donors, corporate CSR funds, and institutional grants. Taxvio handles
                  the complete 80G lifecycle: Form 10A/10AB filing, PCIT follow-up, annual Form 10BD
                  donor statement, Form 10BE certificates, and 5-year renewal — starting ₹2,999.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Apply for 80G — ₹2,999 Onwards →
                  </Link>
                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    📞 Free Eligibility Check
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ Form 10A / 10AB Filing", "✅ 50% / 100% Donor Deduction", "✅ Form 10BD Annual Filing", "✅ Form 10BE Donor Certificates"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Facts</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["💝", "50% / 100% donor deduction available"],
                    ["🔗", "Bundled with 12AB — one application"],
                    ["📋", "Form 10BD due 31st May annually"],
                    ["⚠️", "₹200/day penalty if 10BD missed"],
                    ["🔄", "Valid 5 years — renew 6 months early"],
                    ["💰", "Starting ₹2,999 all-inclusive"],
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
              { number: "₹2,999", label: "Starting Fee for 80G Approval", icon: "💰" },
              { number: "50%–100%", label: "Donor Tax Deduction Available", icon: "📉" },
              { number: "5 Years", label: "80G Approval Validity", icon: "📅" },
              { number: "31st May", label: "Annual Form 10BD Deadline", icon: "⚠️" },
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
            {["✔ Bundled with 12AB Registration", "✔ PCIT Follow-Up Included", "✔ Form 10BD & 10BE Managed", "✔ Renewal Reminders Included"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section id="what-is-80g">
            <SectionLabel text="Understanding 80G" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Section 80G Approval and Why Every NGO Needs It
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Section 80G of the Income Tax Act, 1961</strong> is a powerful fundraising tool
                  for charitable organisations in India. When a trust, NGO, or Section 8 company obtains
                  80G approval from the Principal Commissioner of Income Tax (PCIT), its donors —
                  individuals, HUFs, firms, and companies — become eligible to claim a deduction of
                  <strong> 50% or 100% of the donated amount</strong> from their taxable income. This
                  tax benefit makes donating significantly more attractive, especially for corporate
                  CSR donors and high-net-worth individuals.
                </p>
                <p>
                  Prior to the Finance Act 2020, 80G approvals were granted indefinitely. The new
                  framework introduced <strong>periodic renewal every 5 years</strong> and bundled 80G
                  approval with Section 12AB registration. A trust can now obtain both income tax
                  exemption (12AB) and donor deduction eligibility (80G) through a
                  <strong> single combined application</strong>, valid for the same 5-year period.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  The bundled system also introduced two new annual compliance obligations —
                  <strong> Form 10BD</strong> (donor-wise statement of donations, due 31st May)
                  and <strong>Form 10BE</strong> (individual donor certificates downloaded from
                  TRACES) — that every 80G-approved trust must complete every year. Without
                  these, donors cannot claim their deductions and the trust faces ₹200/day
                  penalty under Section 234G with no upper cap.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides complete
                  80G approval services — fresh applications, Form 10BD annual filings, Form 10BE
                  generation, renewals, and ongoing compliance — across Uttar Pradesh and pan-India.
                  Our CA-assisted team ensures your organisation is always 80G compliant so donors
                  can always claim their deductions without issues.
                </p>
              </div>
            </div>
          </section>

          {/* 80G vs 12AB */}
          <section id="80g-vs-12ab">
            <SectionLabel text="Key Distinction" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Section 80G vs Section 12AB — What's the Difference?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">🏛️</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60">Trust's Own Benefit</p>
                    <h3 className="text-2xl font-extrabold text-[#00416a]">Section 12AB</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Exempts the <strong>trust's own income</strong> from income tax. Income applied for
                  charitable purposes under Sections 11 and 12 is tax-free — the trust pays zero or
                  minimal income tax on donations, grants, and investment income.
                </p>
                <div className="bg-[#00416a]/5 border border-[#00416a]/10 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-[#00416a]">Primary beneficiary: The trust itself — its income is protected from tax.</p>
                </div>
              </div>
              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">💝</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600/60">Donors' Benefit</p>
                    <h3 className="text-2xl font-extrabold text-blue-700">Section 80G</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Allows <strong>donors to the trust</strong> to claim income tax deductions (50% or 100%)
                  on their donations. The trust itself does not pay less tax due to 80G — but it attracts
                  more donors because giving becomes cheaper for them.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-blue-700">Primary beneficiary: Donors — they reduce their own tax liability by donating.</p>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
              <p className="text-sm text-amber-800 font-semibold">
                ✅ A trust ideally needs BOTH — 12AB to protect its own income, and 80G to attract more donors.
                Since both are now processed together in one Form 10A application, applying simultaneously is standard practice. Taxvio handles both in one engagement.
              </p>
            </div>
          </section>

          {/* WHO NEEDS 80G */}
          <section id="who-needs-80g">
            <SectionLabel text="Why 80G Matters" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Should Obtain 80G Approval — and Why It's Essential
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "👤", title: "Individual Donors", desc: "Salaried employees and business owners can reduce their net donation cost by 15–30% depending on tax bracket — making them far more willing to give larger amounts." },
                { icon: "🏢", title: "Corporate CSR Donors", desc: "Companies directing CSR funds under Companies Act Section 135 require recipient NGOs to hold valid 80G approval. Without it, corporates cannot route CSR to your organisation." },
                { icon: "👨‍👩‍👧", title: "HUFs & Partnership Firms", desc: "HUFs, partnership firms, and LLPs making charitable donations can also claim 80G deductions — but only if the recipient holds valid approval." },
                { icon: "🏦", title: "Institutional Funders", desc: "Many domestic foundations and grant-making bodies require both 12AB and 80G as prerequisites for funding applications and due diligence." },
                { icon: "🌍", title: "FCRA & International Credibility", desc: "While FCRA governs foreign contributions, domestic 80G approval enhances credibility with international grant bodies and their Indian counterparts." },
                { icon: "📊", title: "Large Donation Campaigns", desc: "For fundraising drives, telethons, and crowdfunding — 80G approval allows you to advertise the tax benefit, dramatically increasing donor conversion rates." },
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

          {/* DEDUCTION RATES TABLE */}
          <section id="deduction-table">
            <SectionLabel text="Deduction Categories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Section 80G Deduction Rates — Category-Wise Guide
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              The deduction rate and qualifying limit depend on the category of the recipient fund or institution.
              Most NGOs and trusts fall under the 50% deduction with qualifying limit category.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Category", "Examples", "Deduction Rate", "Qualifying Limit"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["100% — No Qualifying Limit", "PM National Relief Fund, PM Cares, National Defence Fund, National Foundation for Communal Harmony, Clean Ganga Fund", "100%", "Full donation — no cap"],
                    ["50% — No Qualifying Limit", "PM Drought Relief Fund, Jawaharlal Nehru Memorial Fund, Indira Gandhi Memorial Trust, Rajiv Gandhi Foundation", "50%", "50% of full donation — no cap"],
                    ["100% — With Qualifying Limit", "Approved local authority / government institutions for family planning, notified temples, mosques etc.", "100%", "10% of adjusted gross total income"],
                    ["50% — With Qualifying Limit", "Most 80G-approved NGOs, charitable trusts, societies & Section 8 companies — the most common category for new applicants", "50%", "10% of adjusted gross total income"],
                  ].map(([category, examples, rate, limit], i) => (
                    <tr key={category} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-semibold text-gray-800">{category}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{examples}</td>
                      <td className="px-5 py-4 font-extrabold text-[#00416a] text-lg">{rate}</td>
                      <td className="px-5 py-4 text-gray-700">{limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-blue-50 border border-blue-200 rounded-2xl px-6 py-5">
              <h3 className="font-bold text-[#00416a] mb-2">How the Qualifying Limit Works</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                For Category 3 & 4 donations, the maximum deductible amount is the <strong>lower of</strong>:
                (a) 50% of donation, or (b) 10% of Adjusted Gross Total Income (AGTI). AGTI = Gross Total Income
                minus all Chapter VI-A deductions (except 80G) minus long-term capital gains. Example: AGTI ₹10L,
                donation ₹3L to standard NGO — 50% of ₹3L = ₹1.5L vs 10% of ₹10L = ₹1L. Deductible = ₹1L (the lower).
                Excess cannot be carried forward.
              </p>
            </div>
          </section>

          {/* FORM 10BD & 10BE */}
          <section id="form-10bd-10be" className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Annual Compliance Obligations" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Form 10BD & Form 10BE — Mandatory Annual Compliance for All 80G Trusts
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Since FY 2021-22, every trust with 80G approval must complete two annual steps.
              Missing either one prevents donors from claiming deductions and attracts heavy penalties.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-amber-100 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📋</span>
                  <div>
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Due: 31st May Annually</p>
                    <h3 className="text-xl font-bold text-[#00416a]">Form 10BD — Statement of Donations</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Filed annually by the trust on the Income Tax portal",
                    "Reports donor-wise: name, PAN/Aadhaar, address, amount, mode, date",
                    "Covers ALL donations received during the financial year",
                    "Late filing penalty: ₹200/day under Section 234G — NO upper cap",
                    "Without 10BD, donor's 80G deduction claim is automatically rejected",
                    "Even a single donation received requires Form 10BD filing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-amber-600 font-bold mt-0.5 flex-shrink-0">⚠️</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-amber-100 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📄</span>
                  <div>
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Issue to donors by 31st May</p>
                    <h3 className="text-xl font-bold text-[#00416a]">Form 10BE — Donation Certificate</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Issued by the trust to each donor based on Form 10BD data",
                    "Downloaded from the TRACES portal by the trust (requires TRACES login)",
                    "Contains unique reference number — donor must quote in their ITR",
                    "Replaces the old manual receipt-based system entirely",
                    "Failure to issue Form 10BE makes donor's 80G claim unclaimable",
                    "Donor complaints and reputational damage result from missing certificates",
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

          {/* ELIGIBILITY */}
          <section id="eligibility">
            <SectionLabel text="Eligibility Conditions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Eligibility Conditions for Section 80G Approval
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "📜", title: "Valid 12AB Registration Required", desc: "Must hold valid Section 12AB registration. Since 80G is bundled with 12AB, both are applied simultaneously. A trust without 12AB cannot obtain 80G." },
                { icon: "🤲", title: "Purely Charitable Objects", desc: "Objects must be charitable under Section 2(15). Organisations with objects benefiting specific religious communities or castes do not qualify for 80G (though they may qualify for 12AB)." },
                { icon: "📊", title: "Regular Books of Accounts", desc: "Must maintain proper books of accounts, get them audited (Form 10B/10BB), and file ITR-7 annually. Non-filing leads to cancellation of 80G approval." },
                { icon: "🚫", title: "No Community-Specific Benefit", desc: "Income must not be applied for the benefit of a particular religious community or caste. General religious trusts serving all communities may qualify." },
                { icon: "💼", title: "Business Income Rule", desc: "Business income is allowed but must be maintained in a separate account and not constitute the primary activity. Must be applied for charitable purposes." },
                { icon: "⚖️", title: "No Violation of Trust Deed", desc: "Income must be applied strictly per the trust's stated charitable objects. Violations, improper transfers, or failure to comply lead to PCIT cancellation." },
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

          {/* CONSEQUENCES */}
          <section id="consequences" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Non-Compliance Risk" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Consequences of 80G Non-Compliance for Approved Trusts
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Maintaining 80G compliance is an ongoing obligation. Non-compliance has serious
              consequences for both the trust and its donors.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { risk: "Section 234G Penalty — Form 10BD Late Filing", penalty: "₹200/day — NO upper cap", desc: "100-day delay = ₹20,000 penalty. Full-year delay = ₹73,000. Unlike most penalties, there is no maximum." },
                { risk: "Donor Deduction Rejected", penalty: "All 80G claims fail", desc: "If 10BD not filed or donor PAN incorrect, donor's 80G claim is automatically rejected during ITR processing — causing donor complaints." },
                { risk: "Cancellation by PCIT", penalty: "Loss of 80G status", desc: "PCIT can cancel if trust violates objects, applies income for non-charitable purposes, or fails to file ITR-7 or maintain accounts." },
                { risk: "Loss of CSR Eligibility", penalty: "Removed from CSR list", desc: "Companies cannot route CSR to a trust without valid 80G. Cancellation or lapse removes the trust from all eligible CSR recipient lists." },
                { risk: "Renewal Lapse", penalty: "Future donations ineligible", desc: "If renewal not filed 6 months before expiry, 80G lapses. Donations post-lapse cannot be claimed by donors — seriously hurting fundraising." },
                { risk: "Cash Donation Ineligibility", penalty: "₹2,000+ cash not deductible", desc: "Donations of ₹2,000+ in cash are ineligible for 80G under Section 80G(5D). Trusts must advise donors to use banking channels." },
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
            <SectionLabel text="Paperwork Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Section 80G Approval
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Since 80G is applied with 12AB, most documents are common. Below are the specific requirements for 80G approval and annual Form 10BD compliance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Form 10A — 80G Fresh Approval
                </p>
                <ul className="space-y-3">
                  {[
                    "Trust deed / MOA with exclusively charitable objects (no community-specific restrictions)",
                    "PAN of trust and valid 12AB registration certificate (or simultaneous 12AB application)",
                    "Audited financial statements for last 3 years (or projected for new trusts)",
                    "Activity evidence — beneficiary details, programme reports, photographs",
                    "Declaration confirming no income applied for specific religious community or caste",
                    "Declaration regarding business income (if any) and separate account maintenance",
                    "List of trustees / governing body with PAN, Aadhaar, and disqualification declaration",
                    "Bank statements showing donation receipts and charitable expenditure",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-amber-400 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-amber-50 text-amber-700">
                  Annual Compliance — Form 10BD & 10BE
                </p>
                <ul className="space-y-3">
                  {[
                    "Complete donor register for the financial year — name, PAN/Aadhaar, address, amount, date, mode",
                    "Bank statements showing all donation credits received during the year",
                    "Donation receipts / acknowledgements issued to donors during the year",
                    "TRACES login credentials of the trust for Form 10BE download",
                    "ITR-7 acknowledgement for the year (filed before Form 10BD)",
                    "Form 10B / 10BB audit report for the year (if applicable)",
                    "Previous year's Form 10BE reference numbers for renewal donors",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-amber-600 font-bold mt-0.5 flex-shrink-0">✓</span>
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
              Taxvio's 6-Step 80G Approval & Compliance Process
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              From initial application to annual donor compliance — Taxvio manages the complete
              80G lifecycle so your donors never face a rejected deduction claim.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Eligibility Check & 12AB Status Verification", desc: "We verify your trust holds valid 12AB registration (or is applying simultaneously) and confirm the trust's objects are purely charitable — without caste or community-specific restrictions that disqualify 80G eligibility. We also verify there are no outstanding compliance failures that could jeopardise approval." },
                  { step: "02", title: "Document Preparation & Activity Evidence", desc: "We prepare all required documents — trust deed, activity report with beneficiary evidence, audited accounts, trustee details, and declarations regarding non-application of income for community-specific purposes. Thorough documentation is the primary factor in successful 80G approval." },
                  { step: "03", title: "Form 10A / 10AB Filing (80G + 12AB Together)", desc: "We file Form 10A (fresh) or Form 10AB (renewal) on the Income Tax e-filing portal with 80G details included alongside the 12AB application. Both are filed simultaneously for coordinated, efficient processing by the PCIT." },
                  { step: "04", title: "PCIT Query Response & Follow-Up", desc: "The Principal Commissioner may raise queries regarding the charitable nature of activities or request additional evidence of past activities. We prepare detailed, professionally documented responses and follow up until the 80G certificate is issued." },
                  { step: "05", title: "80G Certificate Delivery & Donor Communication", desc: "On approval, we deliver the 80G certificate with your trust's unique registration number. We also prepare a donor communication template explaining the deduction benefit and instructions for claiming it — ready for you to circulate to existing and prospective donors." },
                  { step: "06", title: "Annual Form 10BD & 10BE Compliance Management", desc: "Each year, Taxvio files Form 10BD (donor statement) by 31st May, downloads Form 10BE donor certificates from TRACES, and assists with their distribution to donors. We also track the 5-year renewal timeline and initiate the renewal application process 6 months before expiry." },
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
          <FeeCalculator />

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Trusted for 80G Compliance by NGOs Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Aastha Charitable Trust", location: "Khatauli", text: "Taxvio got us 80G approval along with 12AB in one application. Our corporate donors immediately increased contributions because they could claim the tax deduction." },
                { name: "Udaan NGO", location: "Muzaffarnagar", text: "We were struggling with Form 10BD — didn't know how to collect PAN from all donors. Taxvio set up our donor tracking system and filed 10BD before the May deadline." },
                { name: "Gyan Prakash Society", location: "Meerut", text: "Our 80G had lapsed due to non-renewal. Taxvio re-applied within weeks and our donors got their donation certificates for the current year. Outstanding turnaround." },
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
              80G Approval Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides Section 80G
              approval and annual compliance services for trusts and NGOs across <strong>Noida</strong>,
              <strong> Delhi NCR</strong>, <strong>Meerut</strong>, <strong>Ghaziabad</strong>, and
              <strong> Mumbai</strong> — as well as pan-India online. We handle Form 10BD filings for
              organisations with anywhere from 5 to 500+ donors, with structured donor data management
              and TRACES certificate generation.
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
                { title: "12A / 12AB Registration", icon: "🏛️", link: "/serviceslist/income-tax/12a-application", desc: "Trust income tax exemption registration." },
                { title: "ITR Filing — Trust & Company", icon: "🏢", link: "/serviceslist/income-tax/itr-trust-company", desc: "Annual ITR-7 filing for trusts." },
                { title: "Income Tax Audit", icon: "🔍", link: "/serviceslist/income-tax/income-tax-audit", desc: "Form 10B/10BB audit report preparation." },
                { title: "Income Tax Scrutiny", icon: "⚖️", link: "/serviceslist/income-tax/income-tax-scrutiny", desc: "Notice defence and assessment support." },
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
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Attract More Donors</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get 80G Approval & Let Your<br />Donors Save Tax Too
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Enable 50% tax deduction on donations, unlock CSR funding, and stay compliant with
                    Form 10BD & 10BE. Taxvio's CA-assisted 80G service starts at ₹2,999. Serving
                    Khatauli, Muzaffarnagar, Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Apply for 80G — ₹2,999 Onwards
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
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

function UrgencyBanner() {
  const [msg, setMsg] = useState("⚠️ Form 10BD (Donor Statement) Due 31st May — ₹200/Day Penalty Under Section 234G (No Upper Limit)");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    let due = new Date(`May 31, ${year}`);
    if (due.getTime() < today.getTime()) due = new Date(`May 31, ${year + 1}`);
    const days = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (days <= 30) {
      setMsg(`🚨 URGENT: Form 10BD Due in ${days} Days — File Now to Avoid ₹200/Day Penalty Under Section 234G`);
    } else if (days <= 90) {
      setMsg(`⚠️ Form 10BD (Donor Statement) Due 31st May — ${days} Days Left | Late Filing: ₹200/Day No Upper Cap`);
    } else {
      setMsg("⚠️ Form 10BD (Donor Statement) Due 31st May Annually — Late Filing Penalty ₹200/Day Under Section 234G");
    }
  }, []);

  return (
    <div className="bg-amber-500 text-white text-center py-3 font-semibold text-sm px-4" role="alert" aria-live="polite">
      {msg}
    </div>
  );
}

function FeeCalculator() {
  const [selected, setSelected] = useState<string>("");
  const [fee, setFee] = useState<number | null>(null);
  const [desc, setDesc] = useState("");

  const services = [
    { value: "fresh_with_12ab", label: "80G Fresh Approval (with 12AB)", fee: 3999, desc: "80G applied simultaneously with 12AB fresh registration — Form 10A" },
    { value: "standalone", label: "Standalone 80G Application", fee: 2999, desc: "80G application for trust already holding valid 12AB registration" },
    { value: "renewal", label: "80G Renewal (with 12AB Renewal)", fee: 4999, desc: "Combined 80G + 12AB renewal before 5-year expiry — Form 10AB" },
    { value: "form_10bd_small", label: "Annual Form 10BD Filing (up to 50 donors)", fee: 1999, desc: "Donor statement filing by 31st May — up to 50 donors" },
    { value: "form_10bd_large", label: "Annual Form 10BD (50+ Donors)", fee: 3499, desc: "Donor statement — 50 to 500 donors with data validation" },
    { value: "form_10be", label: "Form 10BE Generation & Issuance", fee: 999, desc: "TRACES download and issuance of donation certificates to all donors" },
    { value: "annual_package", label: "Annual 80G Compliance Package", fee: 5999, desc: "ITR-7 + Form 10B + Form 10BD + Form 10BE — complete annual compliance" },
    { value: "full_bundle", label: "Full Bundle: 12AB + 80G + Annual", fee: 8999, desc: "Fresh 12AB + 80G application + first year full annual compliance package" },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your 80G Approval & Compliance Fee
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl">Select the service you need for an instant professional fee estimate.</p>

      <div className="bg-gray-50 border rounded-3xl p-8">
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {services.map((s) => (
            <button
              key={s.value}
              onClick={() => { setSelected(s.value); setFee(s.fee); setDesc(s.desc); }}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                selected === s.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"
              }`}
            >
              <span className="font-semibold block mb-1">{s.label}</span>
              <span className={`text-xs ${selected === s.value ? "text-gray-200" : "text-gray-500"}`}>
                ₹{s.fee.toLocaleString("en-IN")} onwards
              </span>
            </button>
          ))}
        </div>

        {fee !== null ? (
          <div className="border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee: <span className="text-3xl font-extrabold">₹{fee.toLocaleString("en-IN")}</span> onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
            <p className="text-xs text-gray-400 mt-2">* Government fees for 80G application are NIL. Professional fees cover document preparation, portal filing, PCIT follow-up, and compliance. GST extra.</p>
            <Link href="/contact" className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition">
              Get Started — Contact Us →
            </Link>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">Select a service above to see an estimated fee.</p>
        )}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { q: "What is Section 80G and how does it benefit donors?", a: "Section 80G allows donors to claim income tax deductions on donations to approved charitable organisations. Depending on the category, donors can deduct 50% or 100% of the donated amount (subject to 10% of AGTI limit for most NGOs). For a 30% tax-bracket donor donating ₹1 lakh to a 50% deduction NGO — effective tax saving is ₹15,000, making the net cost just ₹85,000." },
    { q: "Can a trust apply for 80G without 12AB registration?", a: "No. Section 80G requires valid Section 12AB registration as a prerequisite. Since Finance Act 2020, both 12AB and 80G are processed together and valid for the same period. A trust without 12AB cannot obtain 80G. Taxvio files both applications simultaneously to minimise delays and ensure coordinated approval." },
    { q: "What is Form 10BD and what happens if it is not filed?", a: "Form 10BD is the annual statement of donations received, filed by 31st May on the IT portal. It reports donor-wise details including PAN. If not filed, donors cannot claim their 80G deduction in their ITR — causing donor dissatisfaction. The trust also faces ₹200/day penalty under Section 234G with no maximum cap whatsoever." },
    { q: "What is Form 10BE and who issues it?", a: "Form 10BE is the certificate of donation issued by the trust to each donor. It is generated from the TRACES portal after filing Form 10BD and must be issued by 31st May. Donors must quote the unique reference number on Form 10BE in their ITR. Without Form 10BE, the 80G deduction claim is rejected during ITR processing." },
    { q: "How often does 80G approval need to be renewed?", a: "80G approval is valid for 5 years (3 years for provisional) and must be renewed along with 12AB registration by filing Form 10AB at least 6 months before expiry. Failure to renew results in loss of 80G status — all donations received after the lapse date become ineligible for donor deduction, severely impacting fundraising." },
    { q: "Can donors claim 80G deduction on cash donations?", a: "No. As per Section 80G(5D), donations of ₹2,000 or more made in cash are not eligible for 80G deduction. Only donations made by cheque, demand draft, net banking, UPI, or other digital modes qualify. Trusts should actively advise all donors to make contributions of ₹2,000+ through banking channels." },
    { q: "Is 80G approval available for religious trusts?", a: "80G approval is generally not available for trusts whose activities exclusively benefit a specific religious community or caste. However, general religious trusts that serve all communities — like those managing public temples, mosques, or gurudwaras open to everyone — may qualify. The key test is whether the charitable activity benefits the public at large, irrespective of religion or caste." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Section 80G Approval & Compliance
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