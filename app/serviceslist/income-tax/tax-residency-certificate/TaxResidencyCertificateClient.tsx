// app/serviceslist/income-tax/tax-residency-certificate/TaxResidencyCertificateClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tax Residency Certificate (TRC) - Application & DTAA Benefit Services",
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
    "Professional assistance for Tax Residency Certificate (TRC) application to claim benefits under Double Taxation Avoidance Agreement (DTAA). Complete support for NRIs, expatriates, individuals with foreign income. Form 10FA preparation, supporting documentation, ITD filing, certificate tracking. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Tax Residency Certificate Application",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
      maxPrice: "12999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Tax Residency Certificate (TRC) and why is it required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax Residency Certificate (TRC) is an official certificate issued by the tax authorities of a country certifying that an individual or entity is a tax resident of that country for a specific period. In India, TRC is issued by the Income Tax Department. It is required to claim benefits under Double Taxation Avoidance Agreement (DTAA) between India and other countries — allowing you to avoid paying tax on the same income in both countries or claim reduced tax rates.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs a Tax Residency Certificate in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax Residency Certificate is required by: (1) Indian residents earning foreign income who want to claim DTAA benefits in foreign countries, (2) Non-Resident Indians (NRIs) earning income in India who want to claim DTAA benefits to reduce TDS, (3) Expatriates working in India who need to prove tax residency for home country tax filing, (4) Individuals receiving salary, interest, royalty, or capital gains from foreign sources.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a Tax Residency Certificate in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Processing time for Tax Residency Certificate typically ranges from 15 to 60 days from the date of application submission, depending on the workload at the Income Tax Department and completeness of documents. Taxvio provides complete application support, documentation, and follow-up to expedite processing.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function TaxResidencyCertificateClient() {
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
      <InquiryForm />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🌍 Avoid Double Taxation — Get Tax Residency Certificate & Claim DTAA Benefits on Foreign Income
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
              <span className="text-white">Tax Residency Certificate</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🌍 TRC & DTAA Benefits
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Tax Residency
                  <br />
                  <span className="text-[#7ecbf0]">Certificate (TRC)</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Are you an <strong className="text-white">NRI</strong>,{" "}
                  <strong className="text-white">expatriate</strong>, or{" "}
                  <strong className="text-white">
                    individual with foreign income
                  </strong>
                  ? Do you pay tax on the same income in both India and another
                  country? A <strong className="text-white">
                    Tax Residency Certificate (TRC)
                  </strong>{" "}
                  helps you claim benefits under{" "}
                  <strong className="text-white">
                    Double Taxation Avoidance Agreement (DTAA)
                  </strong>{" "}
                  — allowing you to avoid double taxation or claim reduced tax
                  rates. <strong className="text-white">Taxvio</strong> provides
                  complete TRC application support — Form 10FA preparation,
                  eligibility assessment, supporting documentation, ITD filing, and
                  certificate tracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Apply for TRC — ₹4,999 →
                  </Link>
                
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ DTAA Benefit Guidance",
                    "✅ Form 10FA Filing",
                    "✅ Document Preparation",
                    "✅ Certificate Tracking",
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
                    ["📋", "Issued by Income Tax Department"],
                    ["⏱️", "Processing time: 15-60 days"],
                    ["🌍", "Valid for DTAA claim purposes"],
                    ["💰", "Reduces tax on foreign income"],
                    ["📄", "Form 10FA application required"],
                    ["🚀", "Application fee: ₹4,999 onwards"],
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
              { number: "100+", label: "TRCs Processed", icon: "✅" },
              { number: "15-60 Days", label: "Typical Processing", icon: "⏰" },
              { number: "90+ Countries", label: "DTAA Coverage", icon: "🌍" },
              { number: "₹4,999", label: "Starting Fee", icon: "💰" },
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
              "✔ DTAA Expert Guidance",
              "✔ Complete Documentation",
              "✔ ITD Liaison",
              "✔ Fast Processing",
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
          {/* WHAT IS TRC */}
          <section id="what-is-trc">
            <SectionLabel text="Understanding TRC" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Tax Residency Certificate (TRC)?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>Tax Residency Certificate (TRC)</strong> is an official
                  document issued by the{" "}
                  <strong>tax authorities of a country</strong> (in India, the
                  Income Tax Department) that certifies an individual or entity is a{" "}
                  <strong>tax resident</strong> of that country for a specific
                  financial year or period.
                </p>
                <p>
                  Tax residency is determined based on criteria such as:
                </p>
                <ul className="space-y-2 ml-6">
                  {[
                    "Physical presence in the country (number of days)",
                    "Residential status as per tax laws",
                    "Domicile or permanent home",
                    "Center of vital interests (economic and personal ties)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-[#00416a] font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  TRC is primarily used to claim benefits under{" "}
                  <strong>
                    Double Taxation Avoidance Agreement (DTAA)
                  </strong>{" "}
                  — bilateral treaties between two countries that prevent the same
                  income from being taxed in both countries.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">🌍 DTAA Benefits</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Exemption from tax in one country (source or residence)",
                      "Reduced tax rate on specific incomes (dividends, interest, royalties)",
                      "Tax credit in one country for tax paid in another",
                      "Avoidance of double taxation on the same income",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <p>
                  <strong>Example Scenario:</strong>
                </p>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Mr. Patel</strong>, an Indian resident, works remotely
                    for a US company and earns salary of $60,000 (₹50 lakh). The US
                    company withholds 30% tax (US source income tax) on his salary,
                    amounting to $18,000 (₹15 lakh).
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Mr. Patel is also liable to pay tax in India on his worldwide
                    income (as he is a resident). Without DTAA relief, he would pay
                    tax TWICE on the same $60,000 income.
                  </p>
                  <p className="text-sm font-bold text-green-700 mb-2">
                    ✅ Solution with TRC:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">→</span>
                      Mr. Patel obtains TRC from India certifying he is an Indian
                      tax resident
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">→</span>
                      He submits TRC to US company along with Form W-8BEN
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">→</span>
                      Under India-US DTAA, tax rate on salary is reduced to 15%
                      (instead of 30%)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">→</span>
                      US tax withheld = $9,000 (₹7.5 lakh)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">→</span>
                      Mr. Patel claims Foreign Tax Credit (FTC) in India for
                      $9,000 paid in US
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">→</span>
                      Net result: Total tax paid = Indian tax liability (no double
                      taxation)
                    </li>
                  </ul>
                </div>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in TRC applications for NRIs, expatriates, and
                  individuals with foreign income — across Uttar Pradesh, Noida,
                  Delhi NCR, and pan-India online.
                </p>
              </div>
            </div>
          </section>

          {/* WHO NEEDS TRC */}
          <section id="who-needs-trc">
            <SectionLabel text="Who Needs TRC" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Who Needs a Tax Residency Certificate?
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              TRC is required by individuals and entities who have income taxable in
              multiple countries and want to claim DTAA benefits. Here's a detailed
              breakdown:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Indian Residents with Foreign Income",
                  icon: "🇮🇳",
                  desc: "Indian residents who earn income from foreign sources (salary, business, professional fees, interest, dividends, royalties, capital gains) need TRC to claim DTAA benefits in the foreign country — reducing withholding tax or avoiding double taxation.",
                  examples: [
                    "Software professionals working remotely for US/UK/Europe companies",
                    "Freelancers receiving payments from foreign clients",
                    "Investors earning dividend/interest from foreign stocks/bonds",
                    "Authors/musicians earning royalties from abroad",
                  ],
                },
                {
                  category: "Non-Resident Indians (NRIs)",
                  icon: "🌍",
                  desc: "NRIs who earn income in India (rental income, interest on NRE/NRO accounts, capital gains on property/shares) and want to reduce TDS in India by claiming DTAA benefits. TRC from the country of residence (e.g., USA, UAE, UK) is required.",
                  examples: [
                    "NRI earning rental income in India — TDS @ 30% can be reduced to 10-15% under DTAA",
                    "Interest on NRO fixed deposits — TDS can be reduced from 30% to treaty rate",
                    "Capital gains on sale of property/shares — DTAA relief available",
                  ],
                },
                {
                  category: "Expatriates Working in India",
                  icon: "👨‍💼",
                  desc: "Foreign nationals working in India on employment visas who need to prove tax residency in India for filing tax returns in their home country, claiming Foreign Earned Income Exclusion (FEIE), or avoiding double taxation.",
                  examples: [
                    "US citizens working in India claiming FEIE on Form 2555",
                    "UK nationals needing proof of Indian tax residency for HMRC filing",
                    "European expatriates claiming social security treaty benefits",
                  ],
                },
                {
                  category: "Individuals with Dual Residency",
                  icon: "🔄",
                  desc: "Individuals who qualify as tax residents in both India and another country (due to tie-breaker rules or transitional periods). TRC helps establish primary residency and determine which country has the right to tax.",
                  examples: [
                    "Person spending 183+ days in both India and USA in the same year",
                    "Individual relocating from India to abroad mid-year",
                    "Returning NRIs transitioning from NRI to resident status",
                  ],
                },
                {
                  category: "Businesses with Cross-Border Operations",
                  icon: "🏢",
                  desc: "Companies, LLPs, and partnerships operating in multiple countries that need TRC to claim DTAA benefits on business income, royalties, technical fees, or to establish Permanent Establishment (PE) status.",
                  examples: [
                    "Indian IT companies earning from foreign projects",
                    "Foreign companies with branch offices in India",
                    "Consultancy firms providing cross-border services",
                  ],
                },
                {
                  category: "Pension Recipients",
                  icon: "👴",
                  desc: "Retirees receiving pension from foreign countries (e.g., US Social Security, UK State Pension) who are Indian residents. TRC helps claim DTAA benefits to avoid double taxation on pension income.",
                  examples: [
                    "Retired US citizens living in India receiving Social Security benefits",
                    "UK pensioners residing in India receiving UK pension",
                    "NRIs returning to India after retirement",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.category}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">
                        {item.category}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-blue-200">
                    <p className="font-bold text-blue-800 text-xs mb-2">
                      📊 Examples
                    </p>
                    <ul className="space-y-1">
                      {item.examples.map((ex, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-blue-600 mt-0.5">•</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* APPLICATION PROCESS */}
          <section id="application-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Apply for Tax Residency Certificate in India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              TRC application in India is submitted via{" "}
              <strong>Form 10FA</strong> to the Income Tax Department. Here's the
              complete process:
            </p>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Eligibility Assessment",
                    description:
                      "Taxvio analyzes your residential status as per Income Tax Act (Section 6) — number of days in India, previous year status, RNOR/ROR classification. We determine if you qualify as an Indian tax resident for the relevant financial year.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "DTAA Treaty Analysis",
                    description:
                      "We identify the relevant DTAA treaty between India and the country where you have foreign income (or where you need to submit TRC). We analyze treaty provisions for income type (salary, business, interest, royalty, capital gains) and applicable tax rates/exemptions.",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Form 10FA Preparation",
                    description:
                      "We prepare Form 10FA (Statement for claiming treaty benefit) with complete details: Personal information (name, PAN, Aadhaar, address, nationality), Residential status determination, Period for which TRC is required, Details of foreign country and treaty, Nature of income and treaty article applicable, Supporting tax residency computation.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Supporting Documentation",
                    description:
                      "We compile all required documents: Copy of PAN card and Aadhaar card, Passport (visa pages showing entry/exit stamps), Previous 2 years' ITRs with acknowledgments, Proof of residential address in India, Employment contract / business documents (for income source), Foreign income details (Form 16, salary slips, bank statements), Computation of days in India (for residency proof), Other proofs as applicable (lease agreement, utility bills, etc.).",
                    duration: "2-3 days",
                  },
                  {
                    step: 5,
                    title: "Application Submission to ITD",
                    description:
                      "Form 10FA and supporting documents are submitted to the Income Tax Department via: (1) Online submission through e-filing portal (preferred), or (2) Physical submission at the jurisdictional Assessing Officer's office. We obtain acknowledgment and application reference number.",
                    duration: "1 day",
                  },
                  {
                    step: 6,
                    title: "Follow-Up & Query Resolution",
                    description:
                      "ITD may ask for additional documents, clarifications, or proof of residency. Taxvio handles all communication, responds to queries, and provides additional supporting evidence as required.",
                    duration: "7-45 days",
                  },
                  {
                    step: 7,
                    title: "TRC Issuance",
                    description:
                      "Once ITD is satisfied, the Tax Residency Certificate is issued certifying: Name and PAN of applicant, Period of tax residency (financial year), Status as tax resident of India, Date of issue and validity. TRC is issued in PDF format (digitally signed) or physical format.",
                    duration: "15-60 days (total)",
                  },
                  {
                    step: 8,
                    title: "Certificate Delivery & Usage Guidance",
                    description:
                      "We share TRC with you and guide on how to use it: Submit to foreign employer/payer for reduced withholding tax, Attach with Form W-8BEN (for US income), File with tax authorities in foreign country, Claim DTAA benefit in ITR filing (using Form 67 in India). We also assist with apostille/attestation if required for foreign use.",
                    duration: "Immediate",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-green-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-green-300 rounded-2xl p-6">
                <p className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Typical processing time: 15-60 days</strong> from
                  submission to TRC issuance, depending on ITD workload and
                  completeness of documents. Taxvio ensures complete follow-up and
                  expedited processing wherever possible.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for TRC Application
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card (copy)",
                    "Aadhaar card (copy)",
                    "Passport (with visa pages showing entry/exit stamps for residency proof)",
                    "Previous 2 years' ITRs with acknowledgments",
                    "Residential address proof in India (Aadhaar, utility bill, lease agreement)",
                    "Form 10FA (duly filled and signed)",
                    "Computation of days in India (for residency determination)",
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
                  Supporting Documents (As Applicable)
                </p>
                <ul className="space-y-3">
                  {[
                    "Foreign income details (Form 16, salary slips, contract agreement)",
                    "Bank statements (showing foreign remittances)",
                    "Employment contract or appointment letter (for salaried individuals)",
                    "Business registration documents (for self-employed/business income)",
                    "Details of foreign payer (name, address, TIN/tax ID)",
                    "Previous year's TRC (if applying for renewal)",
                    "Proof of tax paid in India (advance tax, self-assessment tax receipts)",
                    "Letter explaining purpose of TRC and DTAA benefit sought",
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

          {/* DTAA BENEFITS */}
          <section id="dtaa-benefits">
            <SectionLabel text="DTAA Benefits" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How DTAA Benefits Work (Country-Wise Examples)
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              India has signed DTAA treaties with 90+ countries. Here's how TRC helps
              claim benefits under popular treaties:
            </p>

            <div className="space-y-6">
              {[
                {
                  country: "🇺🇸 India-USA DTAA",
                  benefits: [
                    {
                      income: "Salary/Employment Income",
                      withoutDTAA: "30% withholding tax in USA",
                      withDTAA:
                        "Taxable only in country where services are performed. If working in USA, taxed in USA. If working remotely from India, taxed in India (with TRC, US withholding reduced to 0%)",
                    },
                    {
                      income: "Interest Income",
                      withoutDTAA: "30% withholding in USA on bank interest",
                      withDTAA: "15% withholding (with TRC)",
                    },
                    {
                      income: "Dividends",
                      withoutDTAA: "30% withholding in USA",
                      withDTAA:
                        "15% if shareholding < 10%, 25% if shareholding ≥ 10% (with TRC)",
                    },
                    {
                      income: "Royalties & Technical Fees",
                      withoutDTAA: "30% withholding",
                      withDTAA: "10-15% withholding (with TRC)",
                    },
                  ],
                },
                {
                  country: "🇬🇧 India-UK DTAA",
                  benefits: [
                    {
                      income: "Salary",
                      withoutDTAA: "UK tax at progressive rates (20-45%)",
                      withDTAA:
                        "Taxable in country where employment is exercised. TRC allows claiming exemption in one country.",
                    },
                    {
                      income: "Interest",
                      withoutDTAA: "20% UK withholding",
                      withDTAA: "15% withholding (with TRC)",
                    },
                    {
                      income: "Pension",
                      withoutDTAA: "Taxed in both countries",
                      withDTAA:
                        "Taxable only in country of residence (with TRC, UK pension can be taxed only in India if resident in India)",
                    },
                  ],
                },
                {
                  country: "🇸🇬 India-Singapore DTAA",
                  benefits: [
                    {
                      income: "Capital Gains on Shares",
                      withoutDTAA: "Taxable in both countries",
                      withDTAA:
                        "Taxable only in country of residence (with TRC, Indian resident selling Singapore shares taxed only in India)",
                    },
                    {
                      income: "Interest",
                      withoutDTAA: "15% Singapore withholding",
                      withDTAA: "10-15% withholding (with TRC)",
                    },
                  ],
                },
                {
                  country: "🇦🇪 India-UAE DTAA",
                  benefits: [
                    {
                      income: "Salary",
                      withoutDTAA: "UAE has no income tax, but India taxes worldwide income",
                      withDTAA:
                        "With TRC from UAE, Indian NRIs working in UAE can claim that salary is taxed in UAE (even though UAE has 0% tax), thus avoiding Indian tax",
                    },
                    {
                      income: "Interest on NRO Account in India",
                      withoutDTAA: "30% TDS in India",
                      withDTAA:
                        "12.5% TDS (with TRC from UAE submitted to Indian bank)",
                    },
                  ],
                },
              ].map((treaty) => (
                <details
                  key={treaty.country}
                  className="group border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#00416a] transition"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span className="flex items-center gap-3 text-lg">
                      {treaty.country}
                    </span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-5 space-y-4">
                      {treaty.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="bg-blue-50 rounded-xl p-4 border border-blue-200"
                        >
                          <p className="font-bold text-blue-800 mb-2 text-sm">
                            📊 {benefit.income}
                          </p>
                          <div className="grid md:grid-cols-2 gap-3 text-xs">
                            <div>
                              <p className="font-semibold text-red-700 mb-1">
                                ❌ Without DTAA/TRC
                              </p>
                              <p className="text-gray-600">{benefit.withoutDTAA}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-green-700 mb-1">
                                ✅ With DTAA + TRC
                              </p>
                              <p className="text-gray-600">{benefit.withDTAA}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
              <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span>
                Important Note
              </p>
              <p className="text-sm text-gray-700">
                DTAA benefits vary significantly between countries and income types.
                Always consult the specific treaty provisions and consult Taxvio for
                accurate analysis of your situation. TRC is a prerequisite to claim
                most DTAA benefits.
              </p>
            </div>
          </section>

          {/* TAXVIO SERVICES */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Tax Residency Certificate Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Complete end-to-end assistance for TRC application and DTAA benefit
              optimization.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  service: "Residency Status Assessment",
                  icon: "🔍",
                  description:
                    "Detailed analysis of your residential status as per Income Tax Act Section 6 — computation of days in India, RNOR/ROR status determination, tie-breaker rules under DTAA. Professional opinion on tax residency.",
                  price: "₹1,999",
                },
                {
                  service: "DTAA Treaty Analysis & Advisory",
                  icon: "📚",
                  description:
                    "Identification of applicable DTAA treaty between India and relevant country. Analysis of treaty provisions for your specific income type (salary, business, interest, royalty, capital gains). Computation of tax savings and optimal DTAA benefit strategy.",
                  price: "₹2,999",
                },
                {
                  service: "Form 10FA Preparation & Filing",
                  icon: "📝",
                  description:
                    "Complete preparation of Form 10FA with accurate details, residency computation, treaty article citation. Online or offline submission to Income Tax Department with acknowledgment tracking.",
                  price: "₹4,999 (basic)",
                },
                {
                  service: "Supporting Documentation",
                  icon: "📁",
                  description:
                    "Compilation of all mandatory and supporting documents. Preparation of residency proof, days-in-India computation, income source documentation. Letter explaining DTAA benefit sought and justification.",
                  price: "Included in package",
                },
                {
                  service: "ITD Liaison & Follow-Up",
                  icon: "🔔",
                  description:
                    "Regular follow-up with Income Tax Department for status updates. Responding to queries, providing additional documents, attending hearings (if required). Liaison until TRC is issued.",
                  price: "₹2,500 (if queries arise)",
                },
                {
                  service: "TRC Delivery & Usage Guidance",
                  icon: "✅",
                  description:
                    "Delivery of issued TRC (digital and/or physical). Guidance on how to submit TRC to foreign employer/payer. Assistance with apostille/attestation for foreign use. Form 67 filing support for claiming DTAA benefit in ITR.",
                  price: "Included in package",
                },
                {
                  service: "Foreign Tax Credit (FTC) Advisory",
                  icon: "💰",
                  description:
                    "Guidance on claiming Foreign Tax Credit in India for tax paid abroad. Form 67 preparation and filing with ITR. Computation of allowable FTC as per DTAA and Section 90/91.",
                  price: "₹3,999",
                },
                {
                  service: "Apostille & Attestation Services",
                  icon: "🌍",
                  description:
                    "If TRC needs to be submitted to foreign tax authorities, we arrange apostille (for Hague Convention countries) or embassy attestation (for non-Hague countries). End-to-end coordination with MEA and embassies.",
                  price: "₹4,999 onwards",
                },
              ].map((item) => (
                <div
                  key={item.service}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-purple-800 mb-2">
                        {item.service}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        {item.description}
                      </p>
                      <p className="text-sm font-bold text-purple-600">
                        💰 {item.price}
                      </p>
                    </div>
                  </div>
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
                    package: "Basic TRC",
                    price: "₹4,999",
                    includes: [
                      "Residency assessment",
                      "Form 10FA preparation",
                      "Document compilation",
                      "ITD submission",
                      "TRC delivery",
                    ],
                  },
                  {
                    package: "Standard (TRC + DTAA)",
                    price: "₹7,999",
                    includes: [
                      "Everything in Basic",
                      "DTAA treaty analysis",
                      "Tax savings computation",
                      "Follow-up (1 month)",
                      "Usage guidance",
                    ],
                  },
                  {
                    package: "Premium (Complete)",
                    price: "₹12,999",
                    includes: [
                      "Everything in Standard",
                      "Unlimited follow-up",
                      "Query resolution",
                      "Form 67 filing (FTC)",
                      "Apostille arrangement",
                    ],
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.package}
                    className="bg-white rounded-xl p-5 border border-green-300"
                  >
                    <p className="font-bold text-green-800 mb-1">
                      {pkg.package}
                    </p>
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

          {/* IMPORTANT NOTES */}
          <section id="important-notes">
            <SectionLabel text="Critical Information" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Important Points About TRC & DTAA
            </h2>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-8 md:p-10">
              <div className="space-y-4">
                {[
                  {
                    point: "TRC Alone Does NOT Guarantee DTAA Benefit",
                    detail:
                      "TRC is only proof of tax residency. To claim DTAA benefit, you must: (1) Submit TRC to the foreign payer/tax authority, (2) File Form W-8BEN (for US) or equivalent treaty claim form, (3) Meet all conditions under the treaty article. Simply having TRC does not automatically reduce tax — you must proactively claim the benefit.",
                  },
                  {
                    point: "Validity Period of TRC",
                    detail:
                      "TRC is typically issued for a specific financial year (e.g., FY 2024-25). If you need TRC for multiple years or future years, you must apply separately for each year. Some foreign authorities may accept TRC for previous years, but confirm requirements with the specific country.",
                  },
                  {
                    point: "Residency Tie-Breaker Rules",
                    detail:
                      "If you are deemed tax resident in BOTH India and another country (dual residency), DTAA provides tie-breaker rules to determine primary residency based on: (1) Permanent home, (2) Center of vital interests, (3) Habitual abode, (4) Nationality. Consult Taxvio for accurate determination.",
                  },
                  {
                    point: "Form 67 Filing for Foreign Tax Credit",
                    detail:
                      "If you have paid tax abroad and want to claim Foreign Tax Credit (FTC) in India to avoid double taxation, you MUST file Form 67 along with your ITR. TRC from the foreign country is required as supporting document for Form 67. Taxvio provides complete Form 67 filing support.",
                  },
                  {
                    point: "DTAA Override vs. Domestic Law",
                    detail:
                      "As per Section 90(2) of Income Tax Act, provisions of DTAA override domestic tax law to the extent they are MORE BENEFICIAL to the taxpayer. Always compare domestic tax rates vs. DTAA rates and choose the more favorable option. TRC is required to claim DTAA benefit.",
                  },
                  {
                    point: "Apostille/Attestation for Foreign Use",
                    detail:
                      "If submitting TRC to foreign tax authorities (e.g., IRS in USA, HMRC in UK), you may need to get TRC apostilled (for Hague Convention countries like USA, UK, Australia) or attested by the concerned embassy (for non-Hague countries). Taxvio arranges apostille/attestation services.",
                  },
                  {
                    point: "Keep Tax Residency Records",
                    detail:
                      "Maintain detailed records of your physical presence in India (passport entry/exit stamps, boarding passes, hotel bookings, lease agreements). This is crucial for: (1) Proving tax residency if ITD asks, (2) Defending residency status in case of audit, (3) Supporting TRC renewal applications.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-yellow-200 rounded-xl p-5"
                  >
                    <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                      <span className="text-lg">⚠️</span>
                      {item.point}
                    </p>
                    <p className="text-sm text-gray-700">{item.detail}</p>
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
                  name: "Priya Sharma (Software Engineer)",
                  location: "Noida → USA",
                  text: "I work remotely for a US company from India. They were deducting 30% tax from my salary. Taxvio helped me get TRC and submit Form W-8BEN. Now my US tax is reduced to 15% under India-US DTAA. I save ₹3 lakh every year!",
                },
                {
                  name: "Rajesh Patel (NRI - Dubai)",
                  location: "Dubai → India",
                  text: "I have rental income in India and was paying 30% TDS. Taxvio got me TRC from UAE and helped reduce my TDS to 12.5% under India-UAE DTAA. Very smooth process and expert guidance throughout.",
                },
                {
                  name: "John Davis (UK Expatriate)",
                  location: "UK → India",
                  text: "I needed TRC from India to prove my tax residency for UK HMRC filing and claim Foreign Earned Income Exclusion. Taxvio handled everything — documents, Form 10FA, ITD follow-up. Certificate issued in 25 days. Excellent service.",
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
              Tax Residency Certificate Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides TRC application support for NRIs, expatriates, and individuals
              with foreign income across <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Meerut</strong>,{" "}
              <strong>Ghaziabad</strong>, <strong>Mumbai</strong>, and pan-India
              online.
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
                  desc: "Complete tax filing for NRIs.",
                },
                {
                  title: "Foreign Income Tax",
                  icon: "💵",
                  link: "/serviceslist/income-tax/foreign-income",
                  desc: "Tax planning for foreign income.",
                },
                {
                  title: "Form 67 Filing (FTC)",
                  icon: "📋",
                  link: "/serviceslist/income-tax/form-67",
                  desc: "Claim Foreign Tax Credit.",
                },
                {
                  title: "DTAA Advisory",
                  icon: "📚",
                  link: "/serviceslist/income-tax/dtaa-advisory",
                  desc: "Expert DTAA consultation.",
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
                    Claim DTAA Benefits Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Apply for Tax Residency Certificate Now
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Avoid double taxation on your foreign income. Taxvio provides
                    complete TRC application support — residency assessment, Form
                    10FA filing, DTAA analysis, ITD follow-up, and certificate
                    delivery. Starting ₹4,999. Expert guidance for NRIs, expatriates,
                    and cross-border taxpayers.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Apply Now — ₹4,999
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

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is TRC mandatory to claim DTAA benefits?",
      a: "Yes, in most cases. While DTAA provisions are automatic under law, foreign tax authorities (e.g., IRS in USA, HMRC in UK) require TRC as documentary proof of your tax residency before granting reduced withholding rates or exemptions. Without TRC, the foreign payer will deduct tax at standard rates (often 30% or higher). Similarly, to claim Foreign Tax Credit in India via Form 67, you need TRC from the foreign country.",
    },
    {
      q: "Can I get TRC for multiple countries simultaneously?",
      a: "No. You can only be a tax resident of ONE country at a time as per DTAA tie-breaker rules (based on permanent home, center of vital interests, habitual abode, nationality). However, if you genuinely qualify as resident in one country for one period and another country for a different period (e.g., you relocated mid-year), you can apply for TRC from both countries for their respective periods.",
    },
    {
      q: "What if my TRC application is rejected?",
      a: "Rejection can occur if: (1) You don't meet residency criteria (less than 182 days in India, or fail tie-breaker test), (2) Documents are incomplete or inconsistent, (3) ITD suspects tax evasion or misuse of DTAA. If rejected, Taxvio helps you: (1) Understand rejection reasons, (2) Rectify issues and reapply, (3) File appeal if rejection is unjustified, (4) Explore alternate residency proof options.",
    },
    {
      q: "How is TRC different from Residential Status Certificate?",
      a: "Residential Status Certificate is a general proof of residence (often issued by local authorities for visa, bank account, etc.). TRC is specifically for TAX residency, issued by tax authorities (Income Tax Department in India), and is the ONLY document accepted for claiming DTAA benefits. Always request TRC, not residential certificate, for tax purposes.",
    },
    {
      q: "Can I use old TRC for current year DTAA claim?",
      a: "No. TRC is year-specific. Foreign tax authorities require TRC for the SAME year in which income is earned. For example, if you earn foreign income in FY 2024-25, you need TRC for FY 2024-25 issued by Indian ITD. Using TRC from FY 2023-24 will not be accepted. Apply for fresh TRC each year.",
    },
    {
      q: "Do I need TRC if I'm claiming DTAA benefit in India (not abroad)?",
      a: "If you are an NRI claiming DTAA benefit in INDIA (e.g., to reduce TDS on Indian income like rent, interest, capital gains), you need TRC from your COUNTRY OF RESIDENCE (e.g., TRC from USA if you are US resident). You submit this foreign TRC to the Indian deductor (tenant, bank, buyer) along with Form 10F and self-declaration to claim lower TDS under DTAA.",
    },
    {
      q: "What is the cost of TRC application in India (government fee)?",
      a: "There is NO government fee for TRC application in India. It is a FREE service provided by the Income Tax Department. You only pay professional fees to tax consultants like Taxvio for preparing Form 10FA, compiling documents, submitting application, and follow-up. Taxvio's fee starts from ₹4,999 (not including government fee, as there is none).",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Tax Residency Certificate
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