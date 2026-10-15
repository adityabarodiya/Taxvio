// app/serviceslist/roc/sbo-ben-2-filing/SboBen2FilingClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Significant Beneficial Owner (SBO) Declaration & BEN-2 Filing Services - Complete Compliance Support",
  provider: {
    "@type": "ProfessionalService",
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
    "Professional identification of significant beneficial owners (SBOs) and filing of Form BEN-2 under Section 90 of the Companies Act, 2013 and the Companies (Significant Beneficial Owners) Rules, 2018. Complete service includes SBO threshold analysis (10% or more shareholding/voting rights/right to receive dividend), indirect shareholding structure mapping, collection of BEN-1 declarations from individuals, BEN-2 preparation and e-filing with MCA, and maintenance of Register of Significant Beneficial Owners. Expert compliance support for companies with layered ownership structures, holding companies, trusts, partnerships, and body corporates in the shareholding chain. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "SBO Declaration & BEN-2 Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
      maxPrice: "14999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Significant Beneficial Owner (SBO) and why must it be declared?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Significant Beneficial Owner (SBO) is an individual who, acting alone or together with other individuals or through one or more body corporates or in any other manner, holds or controls, directly or indirectly, not less than 10% of the shares, voting rights, or right to receive or participate in the dividend or any other distribution payable in a financial year, in a reporting company. The concept is designed to identify the 'real' natural persons who ultimately own or control a company, even if they do so through layers of holding companies, trusts, partnerships, or other intermediate entities. Under Section 90 of the Companies Act, 2013 and the Companies (Significant Beneficial Owners) Rules, 2018, every individual who is an SBO must file a declaration in Form BEN-1 with the company, and the company must in turn file Form BEN-2 with the Registrar of Companies within 30 days of receiving the BEN-1, disclosing the details of all SBOs. This transparency measure aims to prevent money laundering, tax evasion, and beneficial ownership concealment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 10% threshold and how is it calculated for SBO determination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 10% threshold for SBO determination applies to THREE parameters: (1) Shareholding: 10% or more of the total shares of the company (by number or value), (2) Voting Rights: 10% or more of the total voting rights in the company, and (3) Right to Receive Dividend/Distribution: 10% or more of the right to receive or participate in the dividend or any other distribution payable in a financial year. If an individual, acting alone or together (acting in concert), directly or indirectly holds or controls 10% or more in ANY ONE of these three parameters, they qualify as an SBO. Indirect holding means holding through body corporates, trusts, partnerships, or any other entity or arrangement — for example, if Person A holds 100% of Company X, and Company X holds 15% of Company Y, then Person A indirectly holds 15% of Company Y and is an SBO of Company Y. The calculation involves tracing the ultimate individual(s) through the entire ownership chain, which can be complex for multi-layered structures.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for non-compliance with SBO disclosure norms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-compliance with SBO disclosure norms attracts severe penalties under Section 90 of the Companies Act, 2013: (1) On the Individual (SBO): If an individual who is an SBO fails to file the declaration in Form BEN-1 with the company, or provides false information, they are liable to a penalty of ₹1 lakh to ₹10 lakh and/or imprisonment up to 1 year. Additionally, the shares or voting rights in respect of which the individual is a significant beneficial owner may have their rights suspended (no voting, no dividend, no transfer) until the declaration is filed. (2) On the Company: If the company fails to file Form BEN-2 with the Registrar within 30 days of receiving BEN-1, or fails to take adequate steps to identify and obtain BEN-1 from SBOs, the company is liable to a penalty of ₹1 lakh to ₹10 lakh, and every officer in default (directors, company secretary) is liable to a penalty of ₹50,000 to ₹2 lakh and/or imprisonment up to 6 months. Given the stringent penalties and the reputational risk, it is critical for companies with complex shareholding structures to proactively identify SBOs and ensure timely BEN-1 and BEN-2 filings.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function SboBen2FilingClient() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

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
      <InquiryFormButton />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⚠️ Layered Shareholding? Identify Your SBOs & File BEN-2 to Avoid Penalties!
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
                href="/serviceslist/roc"
                className="hover:text-white transition"
              >
                ROC Services
              </Link>
              <span>/</span>
              <span className="text-white">SBO & BEN-2 Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔍 Beneficial Ownership Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Significant Beneficial Owner
                  <br />
                  <span className="text-[#7ecbf0]">Declaration & BEN-2</span>
                  <br />
                  Filing Services
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Does your company have{" "}
                  <strong className="text-white">
                    layered shareholding, holding companies, trusts, or
                    partnerships
                  </strong>{" "}
                  in the ownership chain? Under{" "}
                  <strong className="text-white">
                    Section 90 of the Companies Act, 2013
                  </strong>{" "}
                  and the{" "}
                  <strong className="text-white">
                    Companies (Significant Beneficial Owners) Rules, 2018
                  </strong>
                  , you must identify{" "}
                  <strong className="text-white">
                    all individuals who indirectly hold or control 10% or more
                  </strong>{" "}
                  of shares, voting rights, or dividend rights — and file{" "}
                  <strong className="text-white">Form BEN-2</strong> with the
                  Registrar of Companies within{" "}
                  <strong className="text-white">
                    30 days of receiving their BEN-1 declarations
                  </strong>
                  . Non-compliance attracts{" "}
                  <strong className="text-white">
                    penalties up to ₹10 lakh and suspension of shareholder
                    rights
                  </strong>
                  . <strong className="text-white">Taxvio</strong> provides
                  complete SBO compliance —{" "}
                  <strong className="text-white">
                    threshold analysis, ownership structure mapping, BEN-1
                    collection, BEN-2 filing, and Register of SBOs maintenance
                  </strong>{" "}
                  — ensuring full transparency in{" "}
                  <strong className="text-white">5-7 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File BEN-2 Now — ₹4,999 →
                  </Link>
                  <Link
                    href="#process"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    How It Works ↓
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 5-7 Days Filing",
                    "✅ SBO Threshold Analysis",
                    "✅ BEN-1 Collection Support",
                    "✅ CA & CS Team",
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
                    ["📊", "SBO threshold: 10% or more"],
                    ["📝", "Forms: BEN-1 (individual) + BEN-2 (company)"],
                    ["⏰", "Deadline: 30 days from BEN-1 receipt"],
                    ["🔗", "Applies to: Indirect/layered shareholding"],
                    ["⚖️", "Penalty: ₹1L-₹10L + rights suspension"],
                    ["💼", "Starting fee: ₹4,999"],
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
              { number: "200+", label: "SBO Disclosures Filed", icon: "📋" },
              { number: "5-7 Days", label: "Average Filing Time", icon: "⏰" },
              { number: "10%", label: "SBO Threshold", icon: "📊" },
              { number: "₹4,999", label: "Starting Fee", icon: "💼" },
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
              "✔ MCA Registered Agents",
              "✔ Section 90 Experts",
              "✔ Ownership Structure Analysis",
              "✔ CA & CS Support",
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
          {/* WHAT IS SBO */}
          <section id="what-is-sbo">
            <SectionLabel text="Understanding SBO Compliance" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Significant Beneficial Owner (SBO) Declaration?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Significant Beneficial Owner (SBO)</strong> is an
                  individual who, acting alone or together with other
                  individuals or through one or more body corporates or in any
                  other manner, holds or controls,{" "}
                  <strong>directly or indirectly</strong>, not less than{" "}
                  <strong>
                    10% of the shares, voting rights, or right to receive
                    dividend or distribution
                  </strong>{" "}
                  in a reporting company.
                </p>
                <p>
                  The SBO disclosure framework under{" "}
                  <strong>
                    Section 90 of the Companies Act, 2013 and the Companies
                    (Significant Beneficial Owners) Rules, 2018
                  </strong>{" "}
                  is designed to identify the{" "}
                  <strong>"real" natural persons</strong> who ultimately own or
                  control a company, even if they hold their interest through{" "}
                  <strong>
                    layers of holding companies, trusts, partnerships, LLPs, or
                    other intermediate entities
                  </strong>
                  .
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🔍 Key Features of SBO Disclosure
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Transparency in Ultimate Ownership",
                        desc: "SBO rules mandate disclosure of the ultimate individual(s) who benefit from the company's shares, profits, or control — cutting through complex ownership structures to reveal the 'real owners'.",
                      },
                      {
                        title: "10% Threshold (Three Parameters)",
                        desc: "An individual is an SBO if they hold or control ≥10% of: (a) shares (by number or value), (b) voting rights, or (c) right to receive dividend/distribution in a financial year — calculated directly or indirectly.",
                      },
                      {
                        title: "Two-Step Disclosure Process",
                        desc: "Step 1: The individual SBO files Form BEN-1 (declaration) with the company. Step 2: The company files Form BEN-2 with the Registrar of Companies within 30 days of receiving BEN-1, disclosing all SBOs.",
                      },
                      {
                        title: "Applies to All Reporting Companies",
                        desc: "Every company (except government companies and wholly-owned subsidiaries of foreign companies) is a 'reporting company' under the SBO Rules and must identify and declare SBOs, if any.",
                      },
                      {
                        title: "Indirect Holding Through Body Corporates",
                        desc: "If a body corporate (company, LLP, trust, partnership, etc.) holds shares in the reporting company, the company must trace through the ownership chain to identify the ultimate individual(s) holding ≥10% indirectly.",
                      },
                      {
                        title: "Severe Penalties for Non-Compliance",
                        desc: "Non-filing of BEN-1 by the individual attracts penalties of ₹1 lakh to ₹10 lakh + imprisonment + suspension of shareholder rights. Non-filing of BEN-2 by the company attracts ₹1 lakh to ₹10 lakh on the company and ₹50,000 to ₹2 lakh on officers.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-blue-700 text-sm mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    ✅ Who Qualifies as an SBO? (Three Criteria)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Criterion 1: Shareholding ≥ 10%
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        An individual holds or controls, directly or indirectly,{" "}
                        <strong>10% or more of the shares</strong> (by number or
                        value) of the reporting company.
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        Example: Person A holds 100% of Company X, which holds
                        15% of Company Y → Person A indirectly holds 15% of
                        Company Y → Person A is an SBO of Company Y.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Criterion 2: Voting Rights ≥ 10%
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        An individual holds or controls{" "}
                        <strong>10% or more of the voting rights</strong> in the
                        reporting company, directly or indirectly (through body
                        corporates, voting agreements, proxies, etc.).
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        Example: Person B holds 8% shares directly + 3% through a
                        trust = 11% voting rights → Person B is an SBO.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Criterion 3: Right to Receive Dividend/Distribution ≥
                        10%
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        An individual has the{" "}
                        <strong>
                          right to receive or participate in 10% or more of the
                          dividend or any other distribution
                        </strong>{" "}
                        payable in a financial year, directly or indirectly.
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        Example: Person C is the sole beneficiary of a trust that
                        holds 12% shares in Company Z → Person C has a 12% right
                        to dividend → Person C is an SBO.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> If an individual meets ANY ONE of the
                    above criteria (≥10% in shares, voting rights, or
                    dividend/distribution rights), they are a Significant
                    Beneficial Owner and must file BEN-1.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    🏢 What Are "Reporting Companies"?
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        ✓ All Companies (With Limited Exceptions)
                      </p>
                      <p className="text-xs text-gray-600">
                        Every company incorporated in India — private limited,
                        public limited, one-person companies, Section 8 companies
                        — is a 'reporting company' under the SBO Rules and must
                        comply with SBO disclosure requirements.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        ✗ Government Companies
                      </p>
                      <p className="text-xs text-gray-600">
                        Companies in which 51% or more of the paid-up capital is
                        held by the Central Government, State Government(s), or
                        both, are exempted from SBO disclosure norms.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        ✗ Wholly-Owned Subsidiaries of Foreign Companies
                      </p>
                      <p className="text-xs text-gray-600">
                        Indian companies that are 100% subsidiaries of a foreign
                        company registered in a country notified by the Central
                        Government (countries with adequate SBO disclosure laws)
                        are exempted — as of 2025, no such countries have been
                        notified, so this exemption is currently not applicable.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Practical Implication:</strong> Unless your company
                    is a government company, you must assume it is a reporting
                    company and comply with SBO disclosure if you have layered or
                    indirect shareholding.
                  </p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🔗 What Is "Indirect Holding" for SBO Purposes?
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <strong>Indirect holding</strong> means holding shares,
                      voting rights, or dividend rights in the reporting company
                      through one or more intermediate entities — body
                      corporates, trusts, partnerships, LLPs, or any other entity
                      or arrangement.
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-orange-200">
                      <p className="font-bold text-orange-700 mb-2">
                        Examples of Indirect Holding:
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Person A → 100% of Company X → Company X holds 20%
                          of Company Y → Person A indirectly holds 20% of
                          Company Y
                        </li>
                        <li>
                          • Person B → 50% of Trust T → Trust T holds 25% of
                          Company Z → Person B indirectly holds 12.5% of Company
                          Z
                        </li>
                        <li>
                          • Person C → 60% of LLP L → LLP L holds 18% of Company
                          M → Person C indirectly holds 10.8% of Company M
                        </li>
                        <li>
                          • Multi-layer: Person D → 100% of Holdco 1 → Holdco 1
                          holds 80% of Holdco 2 → Holdco 2 holds 15% of Company
                          N → Person D indirectly holds 12% (80% × 15%) of
                          Company N
                        </li>
                      </ul>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      <strong>Key Rule:</strong> The company must trace the
                      ownership chain through all intermediate entities until it
                      reaches the ultimate individual(s), and if the ultimate
                      individual's indirect holding is ≥10%, they are an SBO.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Consequences of Non-Compliance
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Penalty on Individual (SBO): ₹1 lakh to ₹10 lakh + imprisonment up to 1 year for failure to file BEN-1 or providing false information (Section 90(10)).",
                      "Suspension of Shareholder Rights: Shares or voting rights in respect of which the individual is an SBO may be suspended — no voting, no dividend, no transfer — until BEN-1 is filed (Section 90(6)).",
                      "Penalty on Company: ₹1 lakh to ₹10 lakh on the company for failure to file BEN-2 or failure to take adequate steps to identify SBOs (Section 90(11)).",
                      "Penalty on Officers in Default: Every director, company secretary, and KMP liable to ₹50,000 to ₹2 lakh + imprisonment up to 6 months for company's non-compliance (Section 90(11)).",
                      "ROC Action & Prosecution: The ROC may initiate prosecution proceedings, and repeated non-compliance can lead to director disqualification or even strike-off action.",
                      "Due Diligence Impact: Lenders, investors, and acquirers conducting due diligence will flag SBO non-compliance as a major red flag, potentially derailing transactions.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <p className="font-bold text-yellow-800 mb-3">
                    🎯 When Must Companies File BEN-2?
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          Initial Identification (One-Time)
                        </p>
                        <p className="text-xs text-gray-600">
                          Every reporting company must, as a one-time exercise,
                          identify all existing SBOs in its shareholding as of
                          the date the SBO Rules came into force (13th June 2018
                          for most companies) and file BEN-2 for all such SBOs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          On Receipt of BEN-1 (30-Day Deadline)
                        </p>
                        <p className="text-xs text-gray-600">
                          Whenever the company receives a BEN-1 declaration from
                          an individual (existing or new SBO), it must file BEN-2
                          with the Registrar{" "}
                          <strong>within 30 days of receipt of BEN-1</strong>.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          On Changes in SBO Details
                        </p>
                        <p className="text-xs text-gray-600">
                          If there is any change in the particulars of an
                          existing SBO (e.g., change in address, PAN, percentage
                          of holding), the SBO must file a revised BEN-1 within
                          30 days of the change, and the company must file BEN-2
                          within 30 days of receiving the revised BEN-1.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        4
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          On Cessation of SBO Status
                        </p>
                        <p className="text-xs text-gray-600">
                          If an individual ceases to be an SBO (e.g., their
                          indirect holding falls below 10%), they must inform the
                          company, and the company must file BEN-2 updating the
                          cessation within 30 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BEN-2 FILING PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              SBO Identification & BEN-2 Filing Process
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete SBO compliance process — from ownership structure
                analysis to BEN-2 e-filing:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Shareholding Pattern & Ownership Structure Mapping",
                    description:
                      "Obtain the company's current shareholding pattern (list of all shareholders with their shareholding percentage, voting rights, and dividend rights). For each shareholder that is a body corporate (company, LLP, trust, partnership, etc.), obtain their shareholding/ownership structure to identify the ultimate individual(s) behind them. Create an ownership structure chart/diagram showing the layers of shareholding — e.g., Individual A → 100% of Holdco X → Holdco X holds 20% of Reporting Company Y. This mapping is critical for determining who the SBOs are and must be done accurately to avoid missing any SBOs.",
                    duration: "2-3 days",
                  },
                  {
                    step: 2,
                    title: "SBO Threshold Analysis (10% Test)",
                    description:
                      "For each ultimate individual identified in the ownership structure, calculate their indirect holding in the reporting company by multiplying the ownership percentages across the chain. Example: Individual A holds 100% of Holdco X, which holds 15% of Company Y → A's indirect holding = 100% × 15% = 15% → A is an SBO. Apply the 10% threshold test to THREE parameters: (a) Shareholding (by number or value): ≥10%? (b) Voting rights: ≥10%? (c) Right to receive dividend/distribution: ≥10%? If ANY ONE parameter is ≥10%, the individual is an SBO. Include individuals who, acting together (e.g., family members, persons acting in concert under shareholders' agreements), collectively hold ≥10%. Prepare a list of all identified SBOs with their holding percentages and supporting calculations.",
                    duration: "2-3 days (complex structures may take longer)",
                  },
                  {
                    step: 3,
                    title: "Notice to Individuals & BEN-1 Declaration Collection",
                    description:
                      "Once SBOs are identified, the company must send a written notice to each individual (via registered post or email with acknowledgment) informing them that they qualify as an SBO and requesting them to file Form BEN-1 (declaration by the individual to the company) within 30 days of receipt of the notice. Form BEN-1 requires the individual's details: name, father's name, date of birth, nationality, PAN, Aadhaar, residential address, email, mobile number, details of shares/voting rights/dividend rights held indirectly, details of body corporates/entities through which the holding is indirect, and a declaration that the information provided is true. The individual must sign BEN-1 and submit it to the company along with copies of PAN card, Aadhaar card, and passport (if foreign national). Taxvio can assist in drafting the notice to individuals and coordinating the BEN-1 collection process.",
                    duration: "30 days (statutory time for individual to respond)",
                  },
                  {
                    step: 4,
                    title: "Verification of BEN-1 Declarations",
                    description:
                      "Upon receipt of BEN-1 from each SBO, verify the details provided by the individual against the company's shareholding records and ownership structure analysis. Check for: (a) accuracy of shareholding/voting/dividend percentage calculations, (b) correctness of PAN, Aadhaar, and other identity documents, (c) completeness of details of intermediate entities (body corporates) through which the holding is indirect, and (d) signature and date of the BEN-1 form. If there are discrepancies or missing information, request the individual to file a revised BEN-1. Ensure all BEN-1s are received within the 30-day deadline (or as extended by agreement) to allow timely BEN-2 filing by the company.",
                    duration: "1-2 days per BEN-1",
                  },
                  {
                    step: 5,
                    title: "Preparation of Form BEN-2",
                    description:
                      "Form BEN-2 (Return of Significant Beneficial Owner) is filed by the company with the Registrar of Companies to declare all SBOs. The form requires: (a) CIN of the reporting company, (b) details of each SBO: name, father's name, nationality, date of birth, PAN, Aadhaar number, address, email, mobile, (c) details of shares/voting rights/dividend rights held by the SBO (percentage and absolute numbers), (d) details of the body corporate(s) or entity(ies) through which the individual holds the beneficial interest (name, CIN/registration number, country of incorporation, percentage of holding at each layer), (e) date of receipt of BEN-1 from the individual, (f) attachments: copies of BEN-1 declarations, PAN cards, Aadhaar cards, and supporting documents for ownership structure (shareholding certificates, extracts from statutory registers of intermediate entities). Prepare BEN-2 carefully, ensuring consistency between the BEN-1 declarations and the BEN-2 disclosures — errors can lead to ROC queries or penalties.",
                    duration: "2-3 days (complex structures with multiple SBOs may take longer)",
                  },
                  {
                    step: 6,
                    title: "Digital Signature & E-Filing of BEN-2",
                    description:
                      "Form BEN-2 must be digitally signed by a director of the company (using their DSC). Pre-fill the form on the MCA portal, attach all required documents (BEN-1s, PAN/Aadhaar copies, ownership structure documents), and submit the form. Pay the requisite government fee (₹5,000 as of FY 2025-26 for standard filing; additional fees for delayed filing). Upon successful submission, MCA generates a Service Request Number (SRN) — save this for tracking. BEN-2 must be filed within 30 days of the date of receipt of BEN-1 from the individual(s) — missing this deadline attracts penalties.",
                    duration: "1-2 hours (DSC signing & e-filing)",
                  },
                  {
                    step: 7,
                    title: "MCA Processing & Acknowledgment",
                    description:
                      "The MCA portal processes the BEN-2 e-form. If the form is complete and accurate, MCA issues an acknowledgment (typically within 1-2 working days). Download the acknowledgment from the MCA portal and save it in the company's statutory records. The acknowledgment is the official proof that the SBO disclosure has been filed with the Registrar of Companies. If the ROC has queries or requires clarifications (e.g., discrepancies in shareholding calculations, missing documents, incorrect PAN/Aadhaar), respond promptly via the MCA portal to avoid rejection or penalties.",
                    duration: "1-2 working days",
                  },
                  {
                    step: 8,
                    title: "Maintenance of Register of Significant Beneficial Owners",
                    description:
                      "Every reporting company must maintain a Register of Significant Beneficial Owners in Form BEN-3, recording the details of all SBOs as disclosed in the BEN-2 filings. The register must be kept at the company's registered office and must be open for inspection by members (shareholders) of the company during business hours. Update the register whenever: (a) a new SBO is identified and BEN-2 is filed, (b) an existing SBO's details change (and revised BEN-1/BEN-2 is filed), or (c) an individual ceases to be an SBO (and BEN-2 is filed updating the cessation). Taxvio provides templates for the Register of SBOs and assists in maintaining it as part of the standard statutory registers package.",
                    duration: "Within 7 days of BEN-2 acknowledgment",
                  },
                  {
                    step: 9,
                    title: "Annual Review & Update of SBO Status",
                    description:
                      "At least once every financial year (ideally at the time of annual return preparation), review the company's shareholding pattern and ownership structure to check for any changes that may affect SBO status: (a) new shareholders who may be holding indirectly through body corporates, (b) changes in the shareholding of intermediate entities that may increase or decrease an individual's indirect holding, (c) individuals whose indirect holding has increased to ≥10% (becoming new SBOs), or (d) individuals whose indirect holding has fallen below 10% (ceasing to be SBOs). If any changes are identified, request the affected individuals to file BEN-1 (or inform the company of cessation), and file BEN-2 within 30 days. Maintain documentation of this annual review for compliance records and ROC inspection.",
                    duration: "Ongoing (annual review)",
                  },
                  {
                    step: 10,
                    title: "Handling Non-Responsive Individuals & Section 90(4) Notice",
                    description:
                      "If the company sends a notice to an individual whom it believes is an SBO, but the individual does not respond or file BEN-1 within 30 days, the company must take additional steps: (a) Send a SECOND notice via registered post with acknowledgment due, reiterating the requirement to file BEN-1 and warning of the consequences (penalty, rights suspension). (b) If the individual still does not respond within 30 days of the second notice, the company may file an application with the National Company Law Tribunal (NCLT) under Section 90(7) seeking an order to direct the individual to file BEN-1 and/or to suspend the rights attached to the shares in respect of which the individual is an SBO (no voting, no dividend, no transfer). (c) In the meantime, the company should file BEN-2 to the extent of the information it has (based on the shareholding structure analysis), noting that the individual has not filed BEN-1, and maintain records of all notices sent and follow-up actions taken. This protects the company from being penalized for the individual's non-compliance. Taxvio provides legal coordination and NCLT filing support for such cases.",
                    duration: "60+ days (if individual is non-responsive)",
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
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {item.description}
                      </p>
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
                  <strong>5-7 working days</strong> for a straightforward case
                  (company with 1-2 layers of shareholding and 1-2 SBOs),
                  assuming prompt receipt of BEN-1 declarations from the
                  individuals. For complex multi-layered structures or companies
                  with multiple SBOs, the process can take{" "}
                  <strong>2-4 weeks</strong>. Breakdown: ownership structure
                  mapping & threshold analysis (2-3 days) + notice to individuals
                  & BEN-1 collection (30 days statutory time, may be shorter if
                  individuals are cooperative) + BEN-1 verification & BEN-2
                  preparation (2-3 days) + BEN-2 e-filing & acknowledgment (1-2
                  days). <strong>Critical deadline:</strong> File BEN-2 within{" "}
                  <strong>30 days of receipt of BEN-1</strong> to avoid
                  penalties. Taxvio expedites the process through proactive
                  individual coordination and parallel processing of BEN-1
                  verifications.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for SBO & BEN-2 Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  From the Company
                </p>
                <ul className="space-y-3">
                  {[
                    "Certificate of Incorporation (CIN for verification)",
                    "Current shareholding pattern (list of all shareholders with percentage)",
                    "Register of Members extract (as on date)",
                    "Details of body corporate shareholders (name, CIN/registration number, registered office address)",
                    "Shareholding structure of each body corporate shareholder (one level up or until ultimate individual is identified)",
                    "MOA & AOA (for understanding voting rights and dividend rights provisions)",
                    "Shareholders' agreements or voting agreements (if any, affecting control/voting)",
                    "DSC of at least one director (for digitally signing BEN-2)",
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
                  From Each SBO (Individual)
                </p>
                <ul className="space-y-3">
                  {[
                    "Form BEN-1 (declaration by the individual to the company, signed and dated)",
                    "PAN card (mandatory — Indian nationals and eligible foreign nationals)",
                    "Aadhaar card (for Indian nationals) or Passport (for foreign nationals)",
                    "Proof of residential address (utility bill, bank statement, passport, Aadhaar — <2 months old)",
                    "Email ID and mobile number (for MCA communication)",
                    "Details of body corporate(s) through which the individual holds the beneficial interest (name, CIN, percentage of holding at each layer)",
                    "Supporting documents for indirect holding (share certificates, extracts from Register of Members of intermediate entities, trust deeds if applicable)",
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

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-purple-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-purple-100 text-purple-700">
                  For Intermediate Entities (Body Corporates)
                </p>
                <ul className="space-y-3">
                  {[
                    "Certificate of Incorporation or registration certificate",
                    "Shareholding pattern or ownership structure (showing who holds shares in the intermediate entity)",
                    "Register of Members extract (if the intermediate entity is a company)",
                    "Partnership deed (if the intermediate entity is a partnership/LLP)",
                    "Trust deed and details of beneficiaries (if the intermediate entity is a trust)",
                    "Board resolution or consent (if the intermediate entity needs to provide information/documents to the reporting company)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-purple-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-orange-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-orange-100 text-orange-700">
                  For BEN-2 Filing (MCA Attachments)
                </p>
                <ul className="space-y-3">
                  {[
                    "All BEN-1 declarations received from SBOs (scanned PDF copies)",
                    "PAN cards of all SBOs (scanned copies)",
                    "Aadhaar cards (or passports for foreign nationals) of all SBOs (scanned copies)",
                    "Ownership structure chart/diagram (visual representation of the shareholding layers)",
                    "Shareholding certificates or extracts from Register of Members of intermediate entities (supporting the indirect holding calculations)",
                    "Board resolution of the reporting company authorizing the filing of BEN-2 (recommended, though not strictly mandatory)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-orange-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <p className="font-bold text-blue-800 mb-3">
                📝 Additional Information Required for SBO Analysis
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Total number of shares issued by the reporting company (for calculating percentages)",
                  "Total voting rights in the company (may differ from shareholding if there are preference shares or differential voting rights)",
                  "Dividend distribution policy or patterns (for calculating right to receive dividend percentage)",
                  "Details of any shareholders' agreements, voting agreements, or family arrangements affecting control",
                  "Information on whether any shareholders are 'acting in concert' (persons who agree to act together to acquire or exercise control)",
                  "Timeline of shareholding changes in the past 12 months (to identify when SBO status arose or ceased)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Critical Errors to Avoid" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in SBO & BEN-2 Filing
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                SBO compliance involves complex ownership analysis — avoid these
                critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Incomplete Ownership Structure Mapping",
                    icon: "🔗",
                    problem:
                      "Failing to trace the ownership chain all the way to the ultimate individual(s), especially in multi-layered structures with 3 or more levels of body corporates, trusts, or partnerships. Companies often stop at the immediate shareholder (e.g., 'Holdco X holds 20%') without identifying who holds Holdco X, thus missing the SBO entirely. This is the most common reason for non-identification of SBOs and consequent penalties.",
                    solution:
                      "For EVERY body corporate shareholder, obtain their shareholding structure and continue tracing upwards until you reach individual(s). If Holdco X is owned by Holdco Y, find out who owns Holdco Y, and so on, until you reach natural persons. Create a visual ownership chart/diagram showing all layers. If an intermediate entity refuses to provide information, send a formal notice under Section 90(3) requiring them to provide the information within 30 days — failure to provide can result in penalties on that entity. Taxvio uses professional ownership structure mapping tools and templates to ensure no SBOs are missed.",
                  },
                  {
                    mistake: "Incorrect Calculation of Indirect Holding Percentage",
                    icon: "📊",
                    problem:
                      "Miscalculating the indirect holding percentage, especially in complex structures. For example: Person A holds 50% of Holdco X, and Holdco X holds 25% of Company Y — the correct indirect holding of Person A in Company Y is 50% × 25% = 12.5%, NOT 25%. Errors in multiplication across layers, or failing to account for partial ownership at intermediate levels, lead to incorrect SBO determinations (either missing SBOs or wrongly identifying non-SBOs).",
                    solution:
                      "Use a systematic calculation method: multiply the ownership percentages at each layer to arrive at the ultimate indirect holding. Example: A → 60% of B → B holds 80% of C → C holds 15% of Reporting Company → A's indirect holding = 60% × 80% × 15% = 7.2% (A is NOT an SBO in this case). Document all calculations in a spreadsheet or ownership analysis report. For companies with complex structures, engage a CA or CS to perform the calculations and certify the accuracy. Taxvio provides detailed SBO threshold analysis reports with calculations for all individuals in the ownership chain.",
                  },
                  {
                    mistake: "Not Considering All Three Parameters (Shares, Voting, Dividend)",
                    icon: "📋",
                    problem:
                      "Checking only the shareholding percentage (e.g., 'Person B holds 8% indirectly, so not an SBO') without considering whether the person holds ≥10% of voting rights or dividend rights separately. In companies with preference shares, differential voting rights, or special dividend distribution arrangements, an individual may be below 10% in shareholding but above 10% in voting or dividend rights, thus qualifying as an SBO. Missing this leads to non-compliance.",
                    solution:
                      "Apply the 10% threshold test to ALL THREE parameters for each individual: (1) Shareholding (number or value of shares), (2) Voting rights (total votes the individual can exercise, directly or indirectly), (3) Right to receive dividend/distribution in a financial year (percentage of total dividend payable). If the individual is ≥10% in ANY ONE parameter, they are an SBO. Review the company's MOA, AOA, shareholders' agreements, and any special rights attached to preference shares or founder shares to accurately determine voting and dividend rights. Taxvio's SBO analysis includes a three-parameter checklist for every identified individual.",
                  },
                  {
                    mistake: "Delayed or Missing BEN-1 Collection from Individuals",
                    icon: "⏰",
                    problem:
                      "Identifying the SBOs correctly but failing to obtain BEN-1 declarations from them in a timely manner (or at all). Individuals may be unresponsive, unaware of their obligations, or unwilling to disclose their status. If the company files BEN-2 without receiving BEN-1 from the individual, or misses the 30-day BEN-2 filing deadline due to delays in BEN-1 collection, both the company and the individual can be penalized.",
                    solution:
                      "Immediately upon identifying an individual as an SBO, send them a formal written notice (via registered post + email) explaining their SBO status, their obligation to file BEN-1 within 30 days, and the consequences of non-filing (penalties, rights suspension). Provide the individual with a draft BEN-1 form pre-filled with the company's knowledge, along with instructions on how to complete and submit it. Follow up via phone/email after 15 days if BEN-1 is not received. If the individual is still non-responsive after 30 days, send a second notice and consider NCLT proceedings under Section 90(7) to compel compliance. Keep records of all notices and follow-ups to demonstrate the company's good-faith efforts. Taxvio handles the entire BEN-1 collection process, including drafting notices, coordinating with individuals, and following up for timely submission.",
                  },
                  {
                    mistake: "Filing BEN-2 After the 30-Day Deadline",
                    icon: "📅",
                    problem:
                      "Filing Form BEN-2 more than 30 days after receiving BEN-1 from the individual. This is a strict statutory deadline under Rule 6(1) of the SBO Rules, and delayed filing attracts automatic penalties on the company (₹1 lakh to ₹10 lakh) and on every officer in default (₹50,000 to ₹2 lakh). Even if the delay is due to the individual's late submission of BEN-1, the company is still liable once it receives BEN-1.",
                    solution:
                      "Maintain a tracker/register recording the date of receipt of each BEN-1 and the corresponding BEN-2 filing deadline (receipt date + 30 days). Set calendar reminders for 7 days before the deadline to prepare and file BEN-2. If you anticipate difficulty meeting the deadline (e.g., pending document verification, DSC issues), file BEN-2 on or before the 30th day even if some minor details are pending, and file a revised BEN-2 later if needed. Taxvio's compliance calendar system automatically tracks BEN-1 receipt dates and BEN-2 deadlines, ensuring on-time filing.",
                  },
                  {
                    mistake: "Not Maintaining or Updating the Register of SBOs (Form BEN-3)",
                    icon: "📖",
                    problem:
                      "Failing to maintain the Register of Significant Beneficial Owners in Form BEN-3 at the registered office, or failing to update it when new SBOs are identified, existing SBO details change, or individuals cease to be SBOs. The register is a statutory requirement under Rule 7, and its absence or non-maintenance can lead to penalties during ROC inspections or member inspections (shareholders have the right to inspect the SBO register).",
                    solution:
                      "Immediately after each BEN-2 filing, update the Register of SBOs (Form BEN-3) with the details of the SBO(s) disclosed in that BEN-2. Maintain the register in physical or electronic form at the registered office, and ensure it is accessible for inspection by members during business hours (9 AM to 6 PM on working days, or as per company policy). When an SBO's details change or they cease to be an SBO, update the register accordingly within 7 days of filing the updated BEN-2. Taxvio provides a template for Form BEN-3 and maintains the register as part of the statutory registers package, with automatic updates synchronized with BEN-2 filings.",
                  },
                ].map((item) => (
                  <div
                    key={item.mistake}
                    className="bg-white rounded-2xl p-6 border border-red-200"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-3xl">{item.icon}</div>
                      <h3 className="font-bold text-red-700 text-lg">
                        {item.mistake}
                      </h3>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-3">
                      <p className="font-bold text-red-600 text-xs mb-2">
                        ⚠️ Problem
                      </p>
                      <p className="text-xs text-gray-700">{item.problem}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <p className="font-bold text-green-700 text-xs mb-2">
                        ✅ Solution
                      </p>
                      <p className="text-xs text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="Our Packages" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              SBO & BEN-2 Filing Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive SBO compliance packages for companies with layered
              ownership:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹4,999",
                  popular: false,
                  features: [
                    "Shareholding pattern analysis (single-layer structure)",
                    "SBO threshold calculation (up to 2 individuals)",
                    "Notice to individuals for BEN-1",
                    "BEN-1 verification & collection support",
                    "Form BEN-2 preparation & e-filing (single filing)",
                    "MCA fee payment (₹5,000 included)",
                    "Acknowledgment download & delivery",
                    "Email support",
                  ],
                  limitations: [
                    "Multi-layer ownership structures not included (>2 layers)",
                    "No Register of SBOs maintenance",
                    "No annual SBO review",
                  ],
                  ideal:
                    "Companies with simple shareholding structures (1-2 body corporate shareholders, 1-2 SBOs)",
                },
                {
                  name: "Standard",
                  price: "₹9,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Multi-layer ownership structure mapping (up to 4 layers)",
                    "Comprehensive SBO threshold analysis (up to 5 individuals)",
                    "BEN-1 collection coordination (multiple SBOs)",
                    "Multiple BEN-2 filings (if SBOs file BEN-1 at different times)",
                    "Register of Significant Beneficial Owners (Form BEN-3) setup",
                    "Statutory register update",
                    "Priority WhatsApp + email support",
                  ],
                  limitations: [
                    "Annual SBO review offered as add-on",
                  ],
                  ideal:
                    "Companies with layered shareholding (holding companies, trusts, partnerships in the chain)",
                },
                {
                  name: "Complete",
                  price: "₹14,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Complex multi-layer structure analysis (5+ layers, 10+ entities)",
                    "Comprehensive ownership chart/diagram preparation",
                    "Legal notice drafting for non-responsive individuals",
                    "NCLT proceedings support (if required under Section 90(7))",
                    "Annual SBO review & update (included for 1 year)",
                    "Register of SBOs maintenance (ongoing for 1 year)",
                    "Dedicated CA + CS team with year-round support",
                  ],
                  limitations: [],
                  ideal:
                    "Companies with highly complex ownership structures, offshore entities, or multiple trusts/partnerships",
                },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative border-2 rounded-3xl p-8 ${
                    pkg.popular
                      ? "border-[#00416a] shadow-2xl scale-105"
                      : "border-gray-200 shadow-lg"
                  } bg-white`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00416a] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#00416a] mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-4xl font-extrabold text-gray-800 mb-1">
                      {pkg.price}
                    </p>
                    <p className="text-sm text-gray-500">One-time fee</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">
                      Included Services
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-600 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.limitations.length > 0 && (
                    <div className="mb-6 bg-gray-50 rounded-xl p-4">
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                        Not Included
                      </p>
                      <ul className="space-y-1">
                        {pkg.limitations.map((limit) => (
                          <li
                            key={limit}
                            className="flex items-start gap-2 text-xs text-gray-500"
                          >
                            <span className="text-red-400 mt-0.5">✗</span>
                            {limit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6 bg-blue-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-blue-700 mb-1">
                      Ideal For
                    </p>
                    <p className="text-xs text-gray-600">{pkg.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl font-bold transition ${
                      pkg.popular
                        ? "bg-[#00416a] text-white hover:bg-[#002b45]"
                        : "bg-gray-100 text-[#00416a] hover:bg-gray-200"
                    }`}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
              <p className="font-bold text-purple-800 mb-4">
                💼 Add-On Services (Optional)
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    service: "Annual SBO Review & Update",
                    price: "₹4,999/year",
                    desc: "Annual review of shareholding changes, updated SBO analysis, revised BEN-2 filing if needed",
                  },
                  {
                    service: "Additional BEN-2 Filing",
                    price: "₹2,999/filing",
                    desc: "For new SBOs identified mid-year or changes in existing SBO details",
                  },
                  {
                    service: "Register of SBOs Maintenance",
                    price: "₹1,999/year",
                    desc: "Ongoing maintenance and updating of Form BEN-3 register at registered office",
                  },
                  {
                    service: "NCLT Proceedings Support",
                    price: "₹19,999+",
                    desc: "Legal coordination and filing for non-responsive SBOs under Section 90(7)",
                  },
                  {
                    service: "Offshore Entity Tracing",
                    price: "₹9,999+",
                    desc: "For identifying SBOs behind foreign holding companies or offshore trusts",
                  },
                  {
                    service: "DSC for Director",
                    price: "₹1,499/DSC",
                    desc: "Class 3 DSC procurement for BEN-2 digital signing",
                  },
                ].map((addon) => (
                  <div
                    key={addon.service}
                    className="bg-white rounded-xl p-4 border border-purple-200"
                  >
                    <p className="font-bold text-purple-700 text-sm mb-1">
                      {addon.service}
                    </p>
                    <p className="text-2xl font-extrabold text-[#00416a] mb-2">
                      {addon.price}
                    </p>
                    <p className="text-xs text-gray-600">{addon.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Success Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Amit Gupta, Director",
                  company: "TechVentures Pvt Ltd",
                  location: "Noida, UP",
                  text: "Our company had 3 layers of holding companies, and we had no idea who our SBOs were. Taxvio mapped our entire ownership structure, identified 4 SBOs across different branches, coordinated BEN-1 collection from all of them, and filed BEN-2 within the deadline. They even maintained our Register of SBOs. Saved us from massive penalties.",
                },
                {
                  name: "Neha Sharma, Company Secretary",
                  company: "Global Infra Holdings Pvt Ltd",
                  location: "Gurgaon, HR",
                  text: "We had two SBOs who were non-responsive to our notices. Taxvio drafted formal legal notices, coordinated follow-ups, and when one SBO still didn't respond, they helped us file an NCLT application under Section 90(7). The NCLT order compelled the SBO to file BEN-1, and we were compliant. Professional and persistent service.",
                },
                {
                  name: "Rajiv Mehta, CFO",
                  company: "Heritage Estates Pvt Ltd",
                  location: "Mumbai, MH",
                  text: "Our ownership structure involved a family trust with 6 beneficiaries, and we couldn't figure out if all of them were SBOs or just some. Taxvio did a detailed threshold analysis, calculated indirect holdings for each beneficiary, and correctly identified only 2 of them as SBOs (≥10% each). Filed BEN-2 accurately with zero ROC queries. Highly recommended for complex trust structures.",
                },
              ].map((testimonial, i) => (
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
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-[#00416a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Service Locations" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              SBO & BEN-2 Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong>{" "}
              and provides online SBO identification and BEN-2 filing services
              for companies with layered shareholding across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote handling with ownership
              structure analysis, BEN-1 coordination, and MCA filing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Meerut",
                "Noida",
                "Delhi NCR",
                "Mumbai",
                "Pune",
                "Ahmedabad",
                "Surat",
                "Ghaziabad",
                "Gurgaon",
                "Lucknow",
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
            <SectionLabel text="Related Services" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Other ROC & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "DIR-3 KYC",
                  icon: "👤",
                  link: "/serviceslist/roc/dir-3-kyc",
                  desc: "Director KYC filing (annual)",
                },
                {
                  title: "Annual Return (MGT-7)",
                  icon: "📋",
                  link: "/serviceslist/roc/mgt-7-filing",
                  desc: "Annual return filing for FY 2024-25",
                },
                {
                  title: "Change in Directors",
                  icon: "🔄",
                  link: "/serviceslist/roc/change-in-directors",
                  desc: "DIR-12 filing for director appointments/resignations",
                },
                {
                  title: "Share Transfer",
                  icon: "📊",
                  link: "/serviceslist/roc/share-transfer",
                  desc: "SH-4 filing for share transfer registration",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
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
                    Beneficial Ownership Transparency
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Identify Your SBOs & File BEN-2 — Stay Compliant
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get complete ownership structure analysis, SBO threshold
                    calculation, BEN-1 collection support, and BEN-2 filing
                    handled by experts. Avoid penalties up to ₹10 lakh and
                    shareholder rights suspension. Starting ₹4,999 with CA & CS
                    team.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File BEN-2 Now — ₹4,999
                  </Link>
                  <Link
                    href="#our-services"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    View Packages
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
      q: "Do all companies need to identify and declare SBOs?",
      a: "Almost all companies incorporated in India are 'reporting companies' under the SBO Rules and must comply with SBO disclosure requirements — this includes private limited companies, public limited companies, one-person companies, and Section 8 companies. The ONLY exceptions are: (1) Government companies (where ≥51% paid-up capital is held by Central/State Government), and (2) Wholly-owned subsidiaries of foreign companies registered in a country notified by the Central Government (as of 2025, no such countries have been notified, so this exemption is not applicable). If your company has any body corporate shareholders (other companies, LLPs, trusts, partnerships holding shares), or if there are any shareholders whose ultimate beneficial ownership is unclear, you should assume SBO compliance applies and conduct an SBO identification exercise. Even if your company has only individual direct shareholders with no indirect holding, it is advisable to document this fact and maintain records showing that there are no SBOs, in case of ROC inspection or member queries.",
    },
    {
      q: "What if our company has only foreign body corporate shareholders — do SBO rules still apply?",
      a: "YES. SBO rules apply regardless of whether the body corporate shareholders are Indian or foreign. If a foreign company (e.g., a Singapore-incorporated holding company or a Mauritius-based fund) holds shares in your Indian company, you must trace through the ownership structure of that foreign entity to identify the ultimate individual(s) who hold ≥10% indirectly in your Indian company, and those individuals are SBOs who must file BEN-1, and you must file BEN-2. This can be complex for offshore structures with multiple layers of foreign holding companies, trusts in tax havens, or private equity/venture capital funds, but the obligation to identify SBOs remains. Taxvio has experience in tracing offshore ownership structures and coordinating with foreign entities and fund administrators to obtain the necessary information and BEN-1 declarations from ultimate individual investors/beneficiaries.",
    },
    {
      q: "Can a body corporate (company, trust, partnership, LLP) be an SBO?",
      a: "NO. By definition, a Significant Beneficial Owner must be an INDIVIDUAL (natural person). Body corporates, trusts, partnerships, LLPs, and other entities CANNOT be SBOs — they are treated as INTERMEDIATE ENTITIES through which individuals hold beneficial interests. The purpose of the SBO framework is to pierce through layers of entities and identify the real human beings who ultimately benefit from the company's ownership and profits. So if a company's shareholder is 'XYZ Holding Pvt Ltd', XYZ Holding itself is not an SBO — you must trace who holds/controls XYZ Holding (individuals, other companies, trusts, etc.) and continue tracing until you reach individual(s), and if those individuals indirectly hold ≥10% of your company, they are the SBOs. This is why ownership structure mapping through all layers is critical.",
    },
    {
      q: "What is 'acting together' or 'persons acting in concert' for SBO purposes?",
      a: "Individuals are considered to be 'acting together' or 'persons acting in concert' if they have an agreement, arrangement, or understanding (formal or informal) to acquire, hold, or exercise rights in relation to shares or voting rights in a manner that gives them collective control or influence over the company. Common examples include: (1) Family members (spouses, parents, children, siblings) who collectively hold shares and coordinate their voting or dividend rights, (2) Co-founders or business partners who have entered into a shareholders' agreement to act jointly, (3) Individuals who together nominate directors to the Board, (4) Persons who pool their shares under a voting trust or voting agreement. When individuals are acting together, their shareholdings/voting rights/dividend rights are AGGREGATED for the purpose of the 10% SBO threshold test. Example: Person A holds 6% individually, Person B (A's spouse) holds 5% — if they are acting together, their combined holding is 11%, and BOTH A and B are SBOs. It is important to review shareholders' agreements, family arrangements, and voting patterns to identify persons acting in concert. If individuals claim they are NOT acting together despite being related or having agreements, the company should obtain written declarations to that effect and maintain them on record.",
    },
    {
      q: "How do we handle trusts in the ownership structure for SBO identification?",
      a: "Trusts are common intermediate entities in SBO structures, especially in family-owned businesses or estate planning arrangements. For SBO identification purposes: (1) If a trust holds shares in your company, identify the BENEFICIARIES of the trust (the individuals who have the right to receive income or corpus from the trust). (2) Calculate each beneficiary's percentage share of the trust's beneficial interest (as per the trust deed), and then calculate their indirect holding in your company by multiplying: (Beneficiary's % in Trust) × (Trust's % in Your Company). (3) If a beneficiary's indirect holding is ≥10%, that beneficiary is an SBO. Example: ABC Family Trust holds 30% of Company Y. The trust has 2 beneficiaries: Person P (50% beneficial interest) and Person Q (50% beneficial interest). Person P's indirect holding in Company Y = 50% × 30% = 15% → P is an SBO. Person Q's indirect holding = 50% × 30% = 15% → Q is also an SBO. (4) Obtain BEN-1 from both beneficiaries, and file BEN-2 for both. Special cases: Discretionary trusts (where the trustee has discretion to distribute to multiple beneficiaries) require careful analysis — if the trust deed gives equal rights to all beneficiaries, treat them equally; if the trustee has documented a distribution pattern, use that. Taxvio can review trust deeds and advise on beneficiary identification for SBO purposes.",
    },
    {
      q: "Is there any grace period or exemption for companies incorporated before the SBO Rules came into force?",
      a: "NO grace period or permanent exemption. The Companies (Significant Beneficial Owners) Rules, 2018 came into force on 13th June 2018, and apply to ALL reporting companies — including those incorporated before this date. Companies incorporated before 13th June 2018 were required to conduct a one-time SBO identification exercise and file BEN-2 for all existing SBOs as soon as practicable after the Rules came into force (the MCA had given a transition period until late 2018 for initial compliance, which has long passed). As of 2025, if a company has not yet filed BEN-2 for its existing SBOs, it is in non-compliance and should file immediately to avoid or minimize penalties. For companies incorporated after 13th June 2018, SBO compliance is mandatory from inception — if there are body corporate shareholders or indirect holdings at the time of incorporation, SBO identification and BEN-2 filing should be done within 30 days of the first shareholder(s) becoming SBOs (typically within 30-60 days of incorporation). There is no 'small company' or 'startup' exemption from SBO rules — even if your company is a small private limited company with ₹1 lakh paid-up capital, if you have layered shareholding, SBO compliance applies.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — SBO & BEN-2 Filing
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