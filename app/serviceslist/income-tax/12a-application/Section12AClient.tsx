"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Section 12A / 12AB Registration for Trusts & NGOs",
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
    "Professional Section 12A and 12AB registration services for charitable trusts, NGOs, and Section 8 companies in India. Form 10A / 10AB filing, provisional & regular registration, 80G approval. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Section 12A / 12AB Trust Registration",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "3999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "3999",
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
      name: "What is Section 12A / 12AB registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 12AB registration is mandatory income tax registration for charitable and religious trusts, NGOs, and Section 8 companies in India to avail tax exemption. Income applied for charitable or religious purposes is exempt under Sections 11 and 12, provided at least 85% is applied in the same year.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Section 12A and Section 12AB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 12A was the original provision. The Finance Act 2020 replaced it with Section 12AB — a new system with mandatory 5-year renewals. All new registrations and renewals are now under Section 12AB using Form 10AB.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a trust does not renew its 12AB registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If 12AB registration lapses, the trust's entire income — including accumulated corpus — becomes taxable at the maximum marginal rate (30%+). Applications for renewal must be filed at least 6 months before expiry.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function Section12AClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white text-gray-800 overflow-x-hidden">

        {/* ── URGENCY BANNER ── */}
        <div className="bg-amber-500 text-white text-center py-3 font-semibold text-sm px-4" role="alert">
          ⚠️ 12AB Renewal Due? Apply at Least 6 Months Before Expiry — Lapsed Registration = Full Tax on Entire Trust Income
        </div>

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
              <span className="text-white">12A / 12AB Registration</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏛️ Section 12A / 12AB Registration
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Section 12AB<br />
                  <span className="text-[#7ecbf0]">Trust & NGO</span><br />
                  Registration
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Without <strong className="text-white">Section 12AB registration</strong>, your trust or NGO pays
                  income tax at <strong className="text-white">30%+ on all donations and grants</strong> — even money
                  spent on charitable work. Taxvio's CA-supervised team handles Form 10A / 10AB filing, provisional
                  and regular registration, 80G approval, and 5-year renewals — end-to-end, across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Apply for 12AB — ₹3,999 Onwards →
                  </Link>
                  <Link
                    href="tel:+919999999999"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    📞 Free Eligibility Check
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {["✅ Form 10A / 10AB Filing", "✅ Provisional & Regular", "✅ 5-Year Renewal", "✅ 80G Bundled"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Facts</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["⚖️", "Governed by Income Tax Act, 1961"],
                    ["🏛️", "Valid 5 years (3 for provisional)"],
                    ["💰", "Starting ₹3,999 all-inclusive"],
                    ["📋", "Form 10A (fresh) / 10AB (renewal)"],
                    ["🔄", "Renew 6 months before expiry"],
                    ["💝", "80G approval processed together"],
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
              { number: "200+", label: "Trusts & NGOs Registered", icon: "🏛️" },
              { number: "₹3,999", label: "Starting Fee (Provisional)", icon: "💰" },
              { number: "5 Years", label: "Regular Registration Validity", icon: "📅" },
              { number: "PAN India", label: "Service Coverage", icon: "🗺️" },
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
            {["✔ CA-Supervised Filing", "✔ PCIT Follow-Up Included", "✔ 80G Bundled at No Extra Cost", "✔ Renewal Reminders Included"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* WHAT IS 12AB */}
          <section id="what-is-12ab">
            <SectionLabel text="Understanding 12AB" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Section 12A / 12AB Registration and Why Is It Mandatory?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Section 12AB registration</strong> under the Income Tax Act, 1961 is the most critical
                  income tax compliance step for any charitable trust, NGO, society, or Section 8 company
                  operating in India. Without this registration, the trust's income — donations, grants,
                  interest, rental income — is fully taxable at the <strong>maximum marginal rate of 30%+</strong>,
                  regardless of how much is actually spent on charitable activities.
                </p>
                <p>
                  With a valid Section 12AB registration, income applied for charitable or religious purposes
                  is completely exempt from income tax under <strong>Sections 11 and 12</strong> of the
                  Income Tax Act — as long as at least <strong>85% of income is applied</strong> for the
                  trust's stated objects in the same financial year. This effectively means most well-run
                  trusts and NGOs pay zero income tax on their donations and grants.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Section 12A was the original registration provision. The <strong>Finance Act 2020</strong> overhauled
                  this framework and introduced Section 12AB — a more robust, transparent system with
                  <strong> mandatory 5-year renewals</strong> and stricter compliance requirements. All trusts
                  holding old 12A registrations were required to re-register under 12AB. Today, all fresh
                  registrations and renewals are exclusively under Section 12AB.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides complete Section 12AB
                  registration services — from eligibility assessment and document preparation to Form 10A/10AB
                  portal filing, PCIT follow-up, and combined 80G approval — across Uttar Pradesh and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* EXEMPTION FRAMEWORK */}
          <section id="exemption-framework">
            <SectionLabel text="Tax Exemption Provisions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Income Tax Exemption Under 12AB — Sections 11 & 12 Explained
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              The exemption available through Section 12AB flows through the following provisions of the
              Income Tax Act. Understanding these is essential for correct compliance.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  section: "Section 11(1)",
                  icon: "🏛️",
                  title: "Primary Charitable Income Exemption",
                  desc: "Income derived from property held under trust for charitable/religious purposes, to the extent applied for such purposes in India, is exempt. Up to 15% of income can be freely accumulated without stating a specific purpose.",
                },
                {
                  section: "Section 11(2)",
                  icon: "📦",
                  title: "Accumulated Income (5-Year Rule)",
                  desc: "Income not applied in the current year can be accumulated for up to 5 years for a specific charitable purpose, by filing Form 10 before the ITR-7 due date. The specific purpose must be stated and adhered to.",
                },
                {
                  section: "Section 11(1A)",
                  icon: "🏗️",
                  title: "Capital Gains Exemption",
                  desc: "Capital gains on transfer of a capital asset held under trust are exempt if the entire sale proceeds are reinvested in another capital asset to be used for charitable or religious purposes.",
                },
                {
                  section: "Section 12",
                  icon: "💝",
                  title: "Voluntary Contributions (Donations)",
                  desc: "Voluntary contributions — donations — received by the trust are treated as income and are eligible for the same exemption under Section 11, subject to the same conditions of application and accumulation.",
                },
              ].map((item) => (
                <div key={item.section} className="border rounded-2xl p-6 bg-white hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-bold bg-[#00416a]/10 text-[#00416a] px-3 py-1 rounded-full">{item.section}</span>
                  </div>
                  <h3 className="font-bold text-[#00416a] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* WHO CAN APPLY */}
          <section id="eligibility">
            <SectionLabel text="Eligibility" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Can Apply for Section 12AB Registration?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🤲", title: "Public Charitable Trusts", desc: "Trusts registered under state trust laws (e.g., UP Public Trust Act) with objects like education, medical relief, poverty alleviation, or general public utility." },
                { icon: "🕌", title: "Religious Trusts", desc: "Trusts for religious purposes — temple committees, mosque trusts, gurudwara management, church trusts — established for the benefit of the public at large." },
                { icon: "🏫", title: "Registered Societies", desc: "Societies registered under the Societies Registration Act, 1860 with charitable objects — educational societies, welfare organisations, cultural bodies." },
                { icon: "🏢", title: "Section 8 Companies", desc: "Not-for-profit companies incorporated under Section 8 of the Companies Act, 2013 for promotion of art, science, education, sports, research, or charity." },
                { icon: "🌿", title: "NGOs & Voluntary Organisations", desc: "Any organisation working for public charitable purposes through grants, donations, and volunteer activities, formally constituted under any applicable law." },
                { icon: "📚", title: "Educational & Medical Institutions", desc: "Hospitals, schools, colleges, and research institutions operating on a non-profit basis and constituted for public charitable benefit." },
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

          {/* REGISTRATION TYPES TABLE */}
          <section id="registration-types">
            <SectionLabel text="Registration Categories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Types of 12AB Registration — Form 10A vs Form 10AB
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Under the revised framework effective April 2021, the following registration categories exist.
              Choosing the correct type and form is critical to a successful application.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Registration Type", "Applicable For", "Form", "Validity", "Processing Time"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Fresh Regular Registration", "Operational trusts with existing activities (> 1 year)", "Form 10A", "5 Years", "1–3 Months"],
                    ["Provisional Registration", "Newly constituted trusts yet to commence activities", "Form 10A", "3 Years", "~1 Month"],
                    ["Provisional → Regular Conversion", "Trusts converting provisional to regular after activity commencement", "Form 10AB", "5 Years", "1–3 Months"],
                    ["Renewal of Existing 12AB", "Trusts approaching 5-year expiry of current 12AB registration", "Form 10AB", "5 Years", "1–3 Months"],
                    ["Old 12A Re-registration", "Trusts that held old 12A and missed the 12AB transition deadline", "Form 10AB", "5 Years", "1–3 Months"],
                    ["80G Fresh Approval", "Trusts applying for donor deduction benefit (filed with 12AB together)", "Form 10A", "5 Years", "1–3 Months"],
                    ["80G Renewal", "Trusts renewing 80G approval along with 12AB renewal", "Form 10AB", "5 Years", "1–3 Months"],
                  ].map(([type, who, form, validity, time], i) => (
                    <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">{type}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs">{who}</td>
                      <td className="px-5 py-4 font-bold text-[#00416a]">{form}</td>
                      <td className="px-5 py-4 text-gray-700">{validity}</td>
                      <td className="px-5 py-4 text-gray-700">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 80G SECTION */}
          <section id="80g-approval" className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Bundled Benefit" />
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Section 80G Approval — Processed Together With 12AB
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Since the Finance Act 2020, Section 80G approval is now processed and renewed simultaneously
              with Section 12AB registration. Both are valid for the same 5-year period. Here is what
              80G approval means for your trust and your donors.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🎁", title: "Donor Tax Deduction", desc: "Donors to 80G-approved trusts can claim 50% or 100% deduction on donations from their taxable income — making your trust far more attractive for fundraising." },
                { icon: "📋", title: "Form 10BD — Donor Statement", desc: "Annual filing by 31st May reporting donor-wise donation details including PAN. Failure attracts ₹200/day penalty under Section 234G." },
                { icon: "📄", title: "Form 10BE — Donor Certificates", desc: "Certificate of donation issued to each donor by 31st May — downloaded from TRACES — enabling donors to claim the deduction in their ITR." },
                { icon: "🏦", title: "CSR Eligibility", desc: "Companies directing CSR funds to external agencies require those agencies to hold valid 12AB + 80G. Without it, your trust cannot receive corporate CSR contributions." },
                { icon: "🌍", title: "FCRA Compatibility", desc: "FCRA registration and renewal for foreign contributions requires active 12AB. Combined 12AB + 80G strengthens your trust's credibility for international donors." },
                { icon: "🔄", title: "5-Year Renewal Together", desc: "Both 12AB and 80G are renewed together every 5 years via Form 10AB, filed at least 6 months before expiry. Taxvio sets renewal reminders automatically." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-blue-100 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-blue-800 mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CONSEQUENCES */}
          <section id="consequences" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Risk of Non-Registration" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Consequences of Operating Without 12AB Registration
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Trusts and NGOs that have not obtained or renewed 12AB registration face severe and often
              irreversible financial and operational consequences.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { risk: "Full taxation at 30%+", desc: "Entire income including donations and grants taxed at maximum marginal rate — wiping out funds meant for charitable work." },
                { risk: "No 80G donor benefit", desc: "Donors cannot claim any deduction — severely impacting fundraising from corporate and high-net-worth donors." },
                { risk: "Corpus taxation on lapse", desc: "Entire accumulated corpus of the trust can be taxed in the year of registration lapse — potentially crores of tax liability." },
                { risk: "FCRA complications", desc: "Active 12AB is required for FCRA registration and renewal. Loss of 12AB can halt all foreign funding pipelines." },
                { risk: "CSR eligibility loss", desc: "Companies cannot direct CSR funds to a trust without valid 12AB + 80G. Loss of registration means loss of corporate donors." },
                { risk: "ITR-7 non-filing penalties", desc: "Even without taxable income, annual ITR-7 filing is mandatory. Non-filing can lead to cancellation of registration itself." },
              ].map((p) => (
                <div key={p.risk} className="bg-white border border-red-100 rounded-xl p-5">
                  <p className="font-bold text-red-600 text-sm mb-1">⚠️ {p.risk}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Paperwork Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for 12AB Registration
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Document requirements differ for fresh registration (Form 10A) and renewal (Form 10AB).
              Our team provides a tailored checklist based on your entity type and registration stage.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Form 10A — Fresh / Provisional Registration
                </p>
                <ul className="space-y-3">
                  {[
                    "Trust deed / MOA and rules & regulations / Incorporation certificate",
                    "PAN card of the trust / society / Section 8 company",
                    "Registration certificate (trust deed / society / MCA incorporation)",
                    "List of trustees / governing body members with PAN & Aadhaar",
                    "Activity report detailing charitable activities (for operational trusts)",
                    "Audited financial statements for last 3 years (or projected for new trusts)",
                    "Details of assets and liabilities of the trust",
                    "Registered office address proof (utility bill or rent agreement)",
                    "Self-certified copy confirming charitable nature of objects",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-blue-50 text-blue-700">
                  Form 10AB — Renewal / Conversion / Re-registration
                </p>
                <ul className="space-y-3">
                  {[
                    "All documents required for Form 10A (above)",
                    "Existing 12AB registration certificate",
                    "Audited accounts for all years under current registration",
                    "ITR-7 acknowledgements for all years during registration period",
                    "Form 10B / 10BB audit reports for all applicable years",
                    "Year-wise activities conducted under each charitable object",
                    "Bank statements showing application of income for charitable purposes",
                    "Form 10BD filed and Form 10BE issued (if 80G was applicable)",
                    "Annual report of activities (if maintained by the organisation)",
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
              Taxvio's 6-Step 12AB Registration Process
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured end-to-end process ensures accurate filing, complete documentation,
              and proactive PCIT follow-up — minimising delays and maximising approval chances.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Eligibility & Objects Review", desc: "We review the trust deed, MOA, or constitution to confirm the objects qualify as 'charitable purpose' under Section 2(15) of the IT Act. We determine whether fresh, provisional, or renewal registration applies and which form to file." },
                  { step: "02", title: "Document Preparation & Verification", desc: "We prepare and verify all required documents — trust deed, registration certificate, trustee list with PAN/Aadhaar, activity report, audited accounts, and address proof — ensuring completeness before filing to prevent rejection." },
                  { step: "03", title: "Form 10A / 10AB Preparation", desc: "We prepare the complete application in Form 10A (fresh/provisional) or Form 10AB (renewal/conversion), accurately entering trust objects, activities, financial summary, and trustee information with all required attachments." },
                  { step: "04", title: "Online Filing on Income Tax Portal", desc: "The completed form is filed on the Income Tax e-filing portal under the trust's PAN login with all document attachments. Application reference number is obtained and preserved for tracking and future correspondence." },
                  { step: "05", title: "PCIT Query Response & Active Follow-Up", desc: "The Principal Commissioner of Income Tax may raise queries or request additional documents. We monitor application status continuously, respond to all PCIT queries promptly, and follow up until the registration order is issued." },
                  { step: "06", title: "Certificate Delivery & Ongoing Compliance Setup", desc: "On registration approval, we deliver your 12AB and 80G certificates. We then set up your ongoing compliance calendar — annual ITR-7, Form 10BD (donor statement by May 31), Form 10BE (donor certificates), Form 10B/10BB audit report, and 5-year renewal reminder." },
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
              Trusted by Trusts & NGOs Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Shri Balaji Charitable Trust", location: "Khatauli", text: "Our new trust needed 12AB registration before we could receive donations. Taxvio got us provisional registration in 3 weeks and 80G approval followed. Excellent, professional service." },
                { name: "Jan Kalyan Society", location: "Muzaffarnagar", text: "Our old 12A registration had lapsed and we were paying heavy taxes on donations. Taxvio re-registered us under 12AB and recovered our exempt status. Highly recommended." },
                { name: "Divya Prakash Education Foundation", location: "Meerut", text: "Taxvio handles our annual Form 10BD, ITR-7, and Form 10B audit. Since 80G registration, our corporate donors have increased significantly." },
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
              12AB Registration Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides Section 12AB
              registration and annual compliance services for trusts and NGOs across <strong>Noida</strong>,
              <strong> Delhi NCR</strong>, <strong>Meerut</strong>, <strong>Ghaziabad</strong>, and
              <strong> Mumbai</strong> — as well as pan-India online. Our team has handled registrations
              for educational trusts, religious organisations, welfare societies, and Section 8 companies
              across multiple states.
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
                { title: "80G Registration", icon: "💝", link: "/serviceslist/income-tax/80g-application", desc: "Donor deduction benefit for NGOs." },
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
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Get Registered Today</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Register Your Trust Under 12AB<br />& Start Saving Tax
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Protect your trust's income from taxation, attract more donors with 80G deduction
                    benefits, and stay 100% compliant. Taxvio's CA-assisted 12AB registration starts
                    at ₹3,999. Serving Khatauli, Muzaffarnagar, Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Apply Now — ₹3,999 Onwards
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

function FeeCalculator() {
  const [selected, setSelected] = useState<string>("");
  const [fee, setFee] = useState<number | null>(null);
  const [desc, setDesc] = useState("");

  const services = [
    { value: "provisional", label: "Provisional Registration (New Trust)", fee: 3999, desc: "Form 10A for newly established trust — provisional 3-year registration + 80G" },
    { value: "fresh_regular", label: "Fresh Regular Registration (Form 10A)", fee: 5999, desc: "Form 10A for operational trust — 5-year regular registration + 80G" },
    { value: "renewal", label: "Renewal of 12AB (Form 10AB)", fee: 4999, desc: "Form 10AB renewal before expiry — 5-year renewal with 80G" },
    { value: "conversion", label: "Provisional → Regular Conversion", fee: 4999, desc: "Converting provisional to regular 5-year registration" },
    { value: "reregistration", label: "Old 12A → 12AB Re-registration", fee: 5999, desc: "Lapsed old 12A re-registration under new 12AB framework" },
    { value: "bundle", label: "12AB + 80G Bundle (Fresh)", fee: 7999, desc: "Combined fresh registration — Section 12AB + Section 80G" },
    { value: "bundle_renewal", label: "12AB + 80G Bundle (Renewal)", fee: 6999, desc: "Combined renewal — Section 12AB + Section 80G renewal together" },
    { value: "compliance", label: "Annual Trust Compliance Package", fee: 9999, desc: "ITR-7 + Form 10B audit + Form 10BD donor statement + Form 10BE certificates" },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your 12AB Registration Fee
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
            <p className="text-xs text-gray-400 mt-2">* Government filing fees are NIL for most 12AB applications. Professional fees above cover document preparation, form filing & follow-up. GST applicable.</p>
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
    {
      q: "What is Section 12A / 12AB registration and why is it necessary?",
      a: "Section 12AB is mandatory income tax registration for charitable trusts, NGOs, societies, and Section 8 companies to avail tax exemption. Without it, the trust's entire income — donations, grants, interest — is taxable at 30%+. With valid 12AB registration, income applied for charitable purposes is completely exempt under Sections 11 and 12, as long as at least 85% of income is applied for the trust's objects in the same financial year.",
    },
    {
      q: "What is the difference between provisional and regular 12AB registration?",
      a: "Provisional registration (valid 3 years) is for newly established trusts that have not yet commenced charitable activities. It allows the trust to avail tax exemption while setting up operations. Regular registration (valid 5 years) is for operational trusts with existing activity records. Provisional holders must convert to regular by filing Form 10AB before the provisional period expires.",
    },
    {
      q: "What form is used to apply for 12AB registration?",
      a: "Form 10A is used for fresh regular registration by operational trusts, and for provisional registration by newly established trusts. Form 10AB is used for renewal of existing 12AB registrations, conversion of provisional to regular registration, and re-registration by trusts that missed the earlier transition from old 12A to 12AB.",
    },
    {
      q: "How long does it take to get 12AB registration approved?",
      a: "Provisional registration is typically granted within 1 month. Regular registration and renewals take 1–3 months depending on document completeness and any queries raised by the Principal Commissioner of Income Tax (PCIT). Taxvio monitors and responds to all PCIT queries promptly to minimise delays.",
    },
    {
      q: "What happens if my 12AB registration expires and I don't renew?",
      a: "If 12AB registration lapses, the trust immediately loses its income tax exemption. Income for the year in which registration expired — including accumulated corpus — becomes taxable at the maximum marginal rate. Additionally, the trust cannot issue 80G certificates, loses CSR eligibility, and FCRA foreign contribution may be impacted. Applications must be filed at least 6 months before expiry.",
    },
    {
      q: "Does 12AB registration also cover Section 80G approval for donors?",
      a: "Yes — since Finance Act 2020, Section 80G approval is processed and renewed together with Section 12AB registration. Both are valid for the same 5-year period. Trusts with 80G approval must additionally file Form 10BD (donor statement) by 31st May each year and issue Form 10BE (donation certificates) to donors.",
    },
    {
      q: "What are the annual compliance requirements after 12AB registration?",
      a: "After registration, the trust must: (1) File ITR-7 annually, (2) Get accounts audited and file Form 10B or 10BB if total income exceeds ₹5 lakh, (3) File Form 10BD (donor statement) by 31st May if 80G-approved, (4) Issue Form 10BE donor certificates by 31st May, (5) Apply at least 85% of income for charitable purposes, and (6) Apply for renewal at least 6 months before the 5-year registration expires.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Section 12A / 12AB Registration
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}
          >
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

/* ─── SHARED ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}