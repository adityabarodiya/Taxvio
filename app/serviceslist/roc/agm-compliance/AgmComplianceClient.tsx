// app/serviceslist/roc/agm-compliance/AgmComplianceClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Annual General Meeting (AGM) Compliance Services - Complete Statutory Support",
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
    "Professional end-to-end support for conducting a company's Annual General Meeting (AGM) in compliance with Section 96, Section 129, and Section 173 of the Companies Act, 2013. Complete service includes AGM notice drafting (21 clear days' notice), agenda and resolution preparation (adoption of accounts, dividend declaration, director appointment/reappointment, auditor appointment), physical or virtual AGM coordination, minutes preparation and signing, filing of Form MGT-14 (ordinary and special resolutions) with ROC within 30 days, and MGT-15 filing for listed companies. Extension application support under Section 96(1) proviso for companies unable to hold AGM within 6 months of financial year end. Expert CS & CA team ensuring compliance for FY 2025-26 AGMs. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "AGM Compliance & Secretarial Support",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
      maxPrice: "19999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When must a company hold its Annual General Meeting (AGM)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Section 96(1) of the Companies Act, 2013, every company (other than a one-person company) must hold an AGM in each calendar year. The AGM must be held within 6 months from the date of closure of the financial year — so for companies with a financial year ending 31st March (FY 2025-26), the AGM must be held on or before 30th September 2026 (or such extended date as may be allowed by the Registrar of Companies). The gap between two consecutive AGMs must not exceed 15 months, though the Registrar may extend this period by up to 3 months for sufficient cause. For a company holding its first AGM, it must be held within 9 months from the date of closure of the first financial year, and if this first AGM is held within this period, it is not necessary to hold any AGM in the year of incorporation.",
      },
    },
    {
      "@type": "Question",
      name: "What are the mandatory items that must be transacted at every AGM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mandatory 'ordinary business' at every AGM includes: (1) Consideration and adoption of the audited financial statements (Balance Sheet, Profit & Loss Account, and Cash Flow Statement) for the previous financial year, along with the Board's Report (Directors' Report) and the Auditor's Report, as required under Section 129 of the Companies Act. (2) Declaration of dividend, if any, recommended by the Board. (3) Appointment of directors in place of those retiring by rotation (for public companies and private companies that have not opted out of Section 152(6) rotation). (4) Appointment or reappointment of auditors and fixing their remuneration, unless the auditor has already been appointed for a block term. Any business other than these is considered 'special business' and requires an explanatory statement under Section 102 to be annexed to the AGM notice.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for not holding an AGM or not filing MGT-14?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-compliance with AGM requirements attracts multiple penalties: (1) Failure to hold AGM: Under Section 99(3), the company is liable to a penalty of ₹1 lakh, and every officer in default is liable to a penalty of ₹50,000. Additionally, directors may face disqualification under Section 164(2)(b) if the company fails to file financial statements or annual return for a continuous period of three financial years. (2) Failure to file MGT-14 (resolutions): Under Section 117(2), the company is liable to a penalty of ₹1 lakh and ₹500 per day of continuing default, and every officer in default is liable to ₹25,000 and ₹500 per day of continuing default. The Registrar may also initiate prosecution under Section 450-451, and in severe cases, consider strike-off action under Section 248. Beyond statutory penalties, non-compliance affects lender covenants, investor confidence, and director reputation.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function AgmComplianceClient() {
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
      <InquiryForm />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⚠️ FY 2025-26 AGM Deadline: 30th September 2026 (6 Months from Year End)
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
              <span className="text-white">AGM Compliance</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🗓️ Annual Shareholder Meeting
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Annual General Meeting
                  <br />
                  <span className="text-[#7ecbf0]">(AGM) Compliance</span>
                  <br />
                  Complete Support
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Every company must hold an{" "}
                  <strong className="text-white">
                    Annual General Meeting (AGM)
                  </strong>{" "}
                  within{" "}
                  <strong className="text-white">
                    6 months of financial year end
                  </strong>{" "}
                  — for FY 2025-26 (ending 31st March 2026), the AGM deadline is{" "}
                  <strong className="text-white">30th September 2026</strong>{" "}
                  unless extended. Under{" "}
                  <strong className="text-white">
                    Section 96, 129, and 173 of the Companies Act, 2013
                  </strong>
                  , the AGM agenda includes{" "}
                  <strong className="text-white">
                    adoption of audited accounts, dividend declaration, director
                    appointments, and auditor appointment
                  </strong>
                  . Non-holding or delayed AGM attracts{" "}
                  <strong className="text-white">
                    ₹1 lakh penalty on the company and ₹50,000 on every director
                  </strong>
                  , plus potential director disqualification.{" "}
                  <strong className="text-white">Taxvio</strong> manages the
                  entire process —{" "}
                  <strong className="text-white">
                    notice drafting, agenda & resolutions, meeting coordination,
                    minutes, MGT-14/MGT-15 filing
                  </strong>{" "}
                  — ensuring full compliance in{" "}
                  <strong className="text-white">5-7 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get AGM Support — ₹4,999 →
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
                    "✅ 5-7 Days Setup",
                    "✅ Notice + Resolutions",
                    "✅ Minutes Documentation",
                    "✅ CS & CA Team",
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
                    ["📅", "Deadline: 6 months from FY end"],
                    ["📧", "Notice: 21 clear days before AGM"],
                    ["📋", "Mandatory: Accounts + Directors + Auditor"],
                    ["⏰", "MGT-14 filing: Within 30 days"],
                    ["⚖️", "Penalty: ₹1L (company) + ₹50k (directors)"],
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
              { number: "450+", label: "AGMs Conducted", icon: "🗓️" },
              { number: "5-7 Days", label: "Average Timeline", icon: "⏰" },
              { number: "21 Days", label: "Notice Period", icon: "📧" },
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
              "✔ Company Secretaries (CS)",
              "✔ Section 96 Compliance",
              "✔ Virtual AGM Support",
              "✔ MGT-14/15 Filing",
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
          {/* WHAT IS AGM */}
          <section id="what-is-agm">
            <SectionLabel text="Understanding AGM Requirements" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is an Annual General Meeting (AGM)?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  An <strong>Annual General Meeting (AGM)</strong> is a mandatory
                  yearly gathering of a company's shareholders to discuss,
                  review, and approve the company's performance, financial
                  statements, and key decisions for the previous financial year.
                </p>
                <p>
                  Under{" "}
                  <strong>
                    Section 96 of the Companies Act, 2013
                  </strong>
                  , every company (except one-person companies) must hold an AGM
                  once in each calendar year,{" "}
                  <strong>
                    within 6 months from the date of closure of the financial
                    year
                  </strong>
                  , and the gap between two AGMs must not exceed{" "}
                  <strong>15 months</strong>.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🗓️ Key Features of AGM
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Mandatory Annual Requirement",
                        desc: "Every company (private, public, Section 8) except OPCs must hold an AGM once every calendar year, within 6 months of the financial year end.",
                      },
                      {
                        title: "Shareholder Participation & Voting",
                        desc: "All shareholders (members) are entitled to attend the AGM, either in person, through proxy, or via electronic means (for listed companies and companies that opt for e-voting).",
                      },
                      {
                        title: "Adoption of Financial Statements",
                        desc: "The primary purpose of the AGM is to place the audited financial statements (Balance Sheet, Profit & Loss Account, Cash Flow Statement), Board's Report, and Auditor's Report before the shareholders for approval.",
                      },
                      {
                        title: "Dividend Declaration",
                        desc: "If the Board has recommended a dividend, it must be approved by shareholders at the AGM — shareholders can reduce or reject but cannot increase the recommended dividend.",
                      },
                      {
                        title: "Director Appointments & Rotation",
                        desc: "For companies where director rotation applies (public companies and private companies not opting out), directors retiring by rotation must be reappointed at the AGM.",
                      },
                      {
                        title: "Auditor Appointment & Remuneration",
                        desc: "Auditors are appointed or reappointed at the AGM (first auditor by Board, subsequent by shareholders), and their remuneration is fixed by shareholders or as authorized by the Board.",
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
                    ✅ AGM Timeline for FY 2025-26
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Financial Year Ends
                      </p>
                      <p className="text-xs text-gray-700">
                        <strong>31st March 2026</strong> — most Indian companies
                        follow April-March financial year.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        AGM Must Be Held By
                      </p>
                      <p className="text-xs text-gray-700">
                        <strong>30th September 2026</strong> (6 months from 31st
                        March) — unless the Registrar grants an extension of up
                        to 3 months.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Notice Sent At Least
                      </p>
                      <p className="text-xs text-gray-700">
                        <strong>21 clear days</strong> before the AGM date (e.g.,
                        if AGM is on 30th September, notice must be dispatched by
                        8th September at the latest).
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        MGT-14 Filing Deadline
                      </p>
                      <p className="text-xs text-gray-700">
                        <strong>Within 30 days</strong> of the AGM date —
                        resolutions passed at the AGM must be filed with the ROC
                        in Form MGT-14.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📋 Mandatory Business at Every AGM (Ordinary Business)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        1. Adoption of Audited Financial Statements
                      </p>
                      <p className="text-xs text-gray-700">
                        The Board lays the audited financial statements (Balance
                        Sheet, Profit & Loss Account, Cash Flow Statement) for
                        the previous financial year before the shareholders, along
                        with the{" "}
                        <strong>
                          Board's Report (Directors' Report) and Auditor's Report
                        </strong>
                        . Shareholders pass an ordinary resolution to adopt them.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        2. Declaration of Dividend (If Any)
                      </p>
                      <p className="text-xs text-gray-700">
                        If the Board has recommended a dividend, the shareholders
                        approve it by ordinary resolution. Shareholders can reduce
                        or refuse the dividend but cannot increase it beyond the
                        Board's recommendation.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        3. Appointment of Directors (Retiring by Rotation)
                      </p>
                      <p className="text-xs text-gray-700">
                        In public companies and private companies that have not
                        opted out under Section 152(6), at least two-thirds of
                        directors are subject to retirement by rotation — one-third
                        retire at each AGM and may offer themselves for
                        reappointment.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        4. Appointment / Reappointment of Auditors
                      </p>
                      <p className="text-xs text-gray-700">
                        The statutory auditor for the ensuing year is appointed or
                        reappointed at the AGM (unless already appointed for a
                        block term). The shareholders also fix or authorize the
                        Board to fix the auditor's remuneration.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> Any business other than the above four
                    items is considered <strong>"special business"</strong> and
                    requires an explanatory statement under Section 102 to be
                    attached to the AGM notice, explaining the rationale and
                    material facts.
                  </p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🚀 Common Special Business Items (Requiring Explanatory
                    Statement)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Appointment of Additional / Independent Director",
                        desc: "Regularization of an additional director or appointment of an independent director (if not covered under ordinary rotation).",
                      },
                      {
                        title: "Increase in Authorized Capital",
                        desc: "Alteration of the capital clause in the Memorandum of Association to increase the authorized share capital.",
                      },
                      {
                        title: "Director Remuneration Approval",
                        desc: "Approval of managerial remuneration for managing directors, whole-time directors, or managers (if not within the limits prescribed in Schedule V).",
                      },
                      {
                        title: "Loans, Investments, Guarantees Under Section 186",
                        desc: "Ratification of loans, guarantees, investments, or securities given to other bodies corporate beyond the prescribed limits.",
                      },
                      {
                        title: "Related Party Transactions",
                        desc: "Approval of material related party transactions beyond the ordinary course of business or not at arm's length.",
                      },
                      {
                        title: "Alteration of Articles of Association (AOA)",
                        desc: "Amendment to the company's Articles to modify internal governance provisions.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-orange-700 text-sm mb-1">
                          ✓ {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Consequences of Not Holding AGM or Missing the Deadline
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Penalty on Company: ₹1,00,000 under Section 99(3) of the Companies Act, 2013 for failure to hold the AGM.",
                      "Penalty on Every Officer in Default: ₹50,000 each on directors and company secretary (if appointed) responsible for the default.",
                      "Director Disqualification Risk: Under Section 164(2)(b), a director is disqualified if the company fails to file financial statements or annual return for a continuous period of 3 financial years — non-holding of AGM typically leads to delayed financial statement filings.",
                      "ROC Prosecution & Strike-Off: Persistent non-compliance can trigger prosecution under Section 450-451 and strike-off proceedings under Section 248, leading to company dissolution.",
                      "Lender & Investor Covenants: Loan agreements and shareholder agreements often require timely AGM conduct — breach can constitute an event of default, allowing lenders to recall loans or investors to trigger liquidation preferences.",
                      "Reputational & Legal Risk: Failure to hold AGM damages the company's credibility with stakeholders, regulators, and potential business partners, and can lead to derivative shareholder suits.",
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
                    📍 Where Can the AGM Be Held?
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      Under <strong>Section 96(2)</strong>, every AGM must be
                      called during business hours (9 AM to 6 PM) on a day that
                      is not a national holiday, and must be held either:
                    </p>
                    <ul className="space-y-1 ml-4 text-xs">
                      <li>
                        • At the <strong>registered office</strong> of the
                        company, or
                      </li>
                      <li>
                        • At some other place{" "}
                        <strong>within the city, town, or village</strong> in
                        which the registered office is situated, or
                      </li>
                      <li>
                        • At such other place as may be approved by the{" "}
                        <strong>Central Government</strong> (rarely used).
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Virtual AGMs:</strong> Following amendments
                      introduced during COVID-19 and continued under the
                      Companies (Meetings) Rules, companies are now permitted to
                      hold AGMs through{" "}
                      <strong>
                        video-conferencing (VC) or other audio-visual means
                        (OAVM)
                      </strong>
                      , subject to compliance with the prescribed framework
                      (secure VC platform, recording, e-voting, technical support
                      helpdesk, etc.). Taxvio provides full support for both
                      physical and virtual AGMs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AGM PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Complete AGM Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                End-to-end AGM support — from Board meeting to MGT-14/15 filing:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Pre-AGM Board Meeting — Accounts Approval & AGM Notice",
                    description:
                      "Convene a Board meeting to: (a) approve the audited financial statements (Balance Sheet, Profit & Loss Account, Cash Flow Statement) for FY 2025-26, (b) approve the Board's Report (Directors' Report) including annexures (e.g., CSR report, related party disclosures, extract of annual return), (c) recommend dividend, if any, (d) fix the date, time, and venue/mode (physical/virtual) of the AGM, (e) approve the AGM notice and agenda, and (f) authorize a director or company secretary to issue the AGM notice to shareholders. The Board meeting must be held at least 21 clear days before the proposed AGM date to allow time for notice dispatch. Taxvio drafts the Board resolution, prepares the agenda, and coordinates the meeting.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Drafting of AGM Notice & Agenda",
                    description:
                      "Prepare the AGM notice in the prescribed format, including: (a) name, CIN, and registered office of the company, (b) date, time, and place/mode of the AGM, (c) the agenda — ordinary business (adoption of accounts, dividend, director appointments, auditor appointment) and special business (if any), with item numbers, (d) details of voting — poll, postal ballot, e-voting (if applicable), (e) instructions for remote e-voting and participation via VC/OAVM, (f) explanatory statement under Section 102 for all special business items, setting out the material facts, reasons, and Board recommendations, (g) details of directors seeking appointment/reappointment, with their DIN, qualifications, experience, and other directorships, (h) proxy form and attendance slip (for physical AGMs), and (i) route map or VC link. Ensure the notice is clear, legally compliant, and free from ambiguity. Taxvio drafts AGM notices that meet Secretarial Standards (SS-2) and include all statutory disclosures.",
                    duration: "2-3 days",
                  },
                  {
                    step: 3,
                    title: "Dispatch of AGM Notice to Shareholders (21 Clear Days)",
                    description:
                      "Dispatch the AGM notice to all shareholders at least 21 clear days before the AGM date, excluding the date of dispatch and the date of the meeting. Methods of dispatch: (a) for listed companies and companies with e-voting, via email to all shareholders whose email IDs are registered (with a simultaneous hard copy sent by post to those who have not registered email), (b) for unlisted private companies, via registered post or speed post to the registered addresses of all shareholders. Maintain proof of dispatch (courier receipts, email logs) for ROC inspection. For companies with 1,000+ shareholders, uploading the notice on the company website and publishing an advertisement in newspapers (one English, one vernacular) is mandatory. Taxvio coordinates notice dispatch, email sending, and advertisement publication.",
                    duration: "1 day (dispatch) + 21 days (notice period)",
                  },
                  {
                    step: 4,
                    title: "Setup of Remote E-Voting & VC/OAVM Platform (If Applicable)",
                    description:
                      "For listed companies and companies opting for electronic voting, coordinate with an e-voting agency (NSDL, CDSL, or KFintech) to set up remote e-voting for shareholders. The remote e-voting window typically opens 3 days before the AGM and closes 1 day before the AGM, allowing shareholders to vote on resolutions in advance. If the AGM is to be held via video-conferencing (VC) or other audio-visual means (OAVM), engage a certified VC platform provider (Zoom for Business, Microsoft Teams with secure features, or dedicated platforms like Lumi or Computershare) and test the setup well in advance. Upload the AGM notice, financials, and supporting documents on the VC platform for shareholders' review. Provide a dedicated helpdesk email and phone number for technical support. Taxvio coordinates with e-voting and VC platform providers and manages the technical setup.",
                    duration: "3-5 days (setup & testing)",
                  },
                  {
                    step: 5,
                    title: "Conduct of the AGM — Physical or Virtual",
                    description:
                      "On the AGM date, at the notified time: (a) for physical AGMs, ensure quorum is present (minimum 2 members personally present for private companies, 5 for public companies) and record attendance, (b) for virtual AGMs, log shareholders into the VC/OAVM platform and verify attendance electronically, (c) the Chairman (typically the Chairman of the Board or a director nominated by the Board) opens the meeting, confirms quorum, and introduces the agenda, (d) the financial statements, Board's Report, and Auditor's Report are taken as read (since they were circulated with the notice 21 days in advance), (e) the Chairman invites questions and clarifications from shareholders on the accounts, report, and agenda items, and directors/auditors respond, (f) each resolution is put to vote — for companies with e-voting, the Chairman announces that remote e-voting has already taken place and instapoll is open; for others, voting is done by show of hands or poll as demanded, (g) the scrutinizer (a practicing Company Secretary or chartered accountant appointed by the Board) counts the votes and prepares the scrutinizer's report, and (h) the Chairman declares the results of voting on each resolution and closes the meeting. Record the entire AGM (mandatory for VC/OAVM meetings; recommended for physical meetings). Taxvio provides a Company Secretary to chair or attend the AGM, manage the agenda, and oversee voting.",
                    duration: "AGM date (typically 1-2 hours)",
                  },
                  {
                    step: 6,
                    title: "Preparation & Signing of AGM Minutes",
                    description:
                      "Within 30 days of the AGM, prepare the minutes of the meeting in the prescribed format, recording: (a) date, time, and place/mode of the meeting, (b) names of directors and other attendees present, (c) quorum confirmation, (d) summary of the Chairman's opening remarks, (e) summary of questions raised by shareholders and responses given, (f) text of each resolution moved, seconded, and put to vote, (g) voting results (number of votes in favour, against, and invalid, both for remote e-voting and instapoll), (h) declaration of the result by the Chairman, and (i) Chairman's closing remarks and vote of thanks. The minutes are signed by the Chairman of the meeting and countersigned by the Company Secretary (if appointed). Enter the signed minutes in the Minutes Book maintained at the registered office, and file them for inspection by members. Taxvio drafts AGM minutes in full compliance with Secretarial Standard SS-1.",
                    duration: "2-3 days",
                  },
                  {
                    step: 7,
                    title: "Filing of Form MGT-14 with ROC (Within 30 Days)",
                    description:
                      "File Form MGT-14 (Filing of Resolutions and Agreements) with the Registrar of Companies within 30 days of the AGM date, attaching: (a) copies of all ordinary and special resolutions passed at the AGM, (b) a copy of the minutes (certified true copy), (c) explanatory statement under Section 102 (for special business), and (d) the scrutinizer's report (if voting was done by poll or e-voting). Form MGT-14 must be digitally signed by a director and the company secretary (if appointed). Pay the requisite MCA fee (₹200 for resolutions, plus additional fees if delayed). This filing is mandatory for all ordinary and special resolutions passed at the AGM — non-filing attracts a penalty of ₹1 lakh on the company and ₹25,000 on each officer in default, plus ₹500 per day of continuing default. Taxvio prepares and files MGT-14 within the 30-day window to ensure zero penalties.",
                    duration: "Within 30 days of AGM",
                  },
                  {
                    step: 8,
                    title: "Filing of Form MGT-15 (For Listed Companies Only)",
                    description:
                      "If the company is listed on a stock exchange, additionally file Form MGT-15 (Report on Annual General Meeting) with the Registrar within 30 days of the AGM, providing details of the AGM including date, time, venue/mode, attendance, agenda, and resolutions passed. This is a reporting form specific to listed companies under Rule 31 of the Companies (Management and Administration) Rules, 2014. Taxvio handles MGT-15 filing for listed company clients.",
                    duration: "Within 30 days of AGM (listed companies only)",
                  },
                  {
                    step: 9,
                    title: "Update Statutory Registers Post-AGM",
                    description:
                      "Following the AGM, update the company's statutory registers: (a) Register of Directors and KMP: Update appointments/reappointments of directors approved at the AGM, (b) Register of Members: No change unless new shares were allotted (not typical at AGM), (c) Register of Charges: No change unless a new charge was created or modified, and (d) Minutes Book: File the signed AGM minutes. Also update the company's internal governance records, and inform the bankers, lenders, and key stakeholders of any material decisions taken at the AGM (e.g., dividend declaration, director changes).",
                    duration: "Within 7 days of AGM",
                  },
                  {
                    step: 10,
                    title: "Dividend Payment (If Declared)",
                    description:
                      "If a dividend was declared at the AGM, ensure payment is made to shareholders within 30 days of the declaration. Open a separate 'Unpaid Dividend Account' with a scheduled bank and deposit the total dividend amount. Dispatch dividend warrants or credit dividend directly to shareholders' bank accounts (via NECS/RTGS). Dividends that remain unpaid or unclaimed for 7 years must be transferred to the Investor Education and Protection Fund (IEPF) under Section 124 — maintain a register of unclaimed dividends and file Form IEPF-2 annually. Taxvio coordinates with the company's bank and RTA (if any) to ensure timely dividend payment.",
                    duration: "Within 30 days of AGM",
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
                  <strong>5-7 working days</strong> from Board approval to AGM
                  notice dispatch, plus the mandatory 21-day notice period, plus
                  the AGM itself, plus 30 days to file MGT-14. Full cycle: Board
                  meeting (1-2 days) + notice drafting & dispatch (2-3 days) +
                  21-day notice period + AGM setup & conduct (3-5 days) + minutes
                  & MGT-14/15 filing (within 30 days of AGM). Taxvio manages the
                  entire timeline with automated deadline tracking.{" "}
                  <strong>Critical deadlines:</strong> AGM must be held by 30th
                  September 2026 for FY 2025-26 (6 months from 31st March), and
                  MGT-14 must be filed within 30 days of the AGM date.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for AGM Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Board Meeting (Pre-AGM)
                </p>
                <ul className="space-y-3">
                  {[
                    "Audited financial statements for FY 2025-26 (Balance Sheet, P&L, Cash Flow)",
                    "Board's Report (Directors' Report) with all mandatory annexures",
                    "Auditor's Report (Independent Auditor's Report)",
                    "Secretarial Audit Report (if applicable — for listed & large companies)",
                    "Cost Audit Report (if applicable)",
                    "Extract of Annual Return (Form MGT-9, if applicable)",
                    "Draft AGM notice and agenda",
                    "DSC of at least one director (for signing Board resolution)",
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
                  For AGM Notice Dispatch
                </p>
                <ul className="space-y-3">
                  {[
                    "Complete Register of Members (shareholder list with addresses, email IDs)",
                    "AGM notice in prescribed format with agenda",
                    "Explanatory statement under Section 102 (for special business)",
                    "Details of directors seeking appointment/reappointment (DIN, qualification, experience)",
                    "Proxy form and attendance slip (for physical AGMs)",
                    "Route map or VC/OAVM link and instructions",
                    "Proof of dispatch (courier receipts, email logs)",
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
                  For Conducting the AGM
                </p>
                <ul className="space-y-3">
                  {[
                    "Attendance register (physical) or electronic attendance log (virtual)",
                    "Proxy forms submitted by shareholders (if applicable)",
                    "Remote e-voting credentials and results (from e-voting agency)",
                    "VC/OAVM platform login details and recording setup",
                    "Chairman's script or speaking notes for the meeting",
                    "Scrutinizer's appointment letter and scrutinizer's report",
                    "Audio-visual recording of the AGM (mandatory for VC/OAVM)",
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
                  For Post-AGM Filings (MGT-14/15)
                </p>
                <ul className="space-y-3">
                  {[
                    "Signed minutes of the AGM (Chairman's signature + CS countersignature)",
                    "Copies of all resolutions passed (ordinary & special)",
                    "Scrutinizer's report (voting results)",
                    "Explanatory statement under Section 102 (for special resolutions)",
                    "Certified true copy of the minutes (for MGT-14 attachment)",
                    "DSC of director and company secretary (for MGT-14 signing)",
                    "Form MGT-15 details (for listed companies)",
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
                📝 Additional Information Required
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Proposed date, time, and venue/mode (physical/virtual) of the AGM",
                  "Whether the company opts for remote e-voting and/or e-AGM via VC/OAVM",
                  "Details of any special business to be transacted (beyond ordinary business)",
                  "Names of directors retiring by rotation and offering themselves for reappointment",
                  "Whether dividend is to be declared (rate per share, total amount)",
                  "Previous AGM date and MGT-14 SRN (for continuity check)",
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
              Common Mistakes in AGM Compliance
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                AGM compliance requires meticulous documentation and deadline
                tracking — avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Missing the 6-Month Deadline (30th September)",
                    icon: "📅",
                    problem:
                      "Holding the AGM after the statutory deadline — for FY 2025-26 (ending 31st March 2026), failing to hold the AGM by 30th September 2026 unless the Registrar grants an extension. This is the most common AGM default and attracts automatic penalties of ₹1 lakh on the company and ₹50,000 on every director, and can trigger director disqualification under Section 164(2)(b) if repeated.",
                    solution:
                      "Plan the AGM at least 45-60 days in advance of the deadline to allow for Board approval, notice dispatch (21 days), and the AGM itself. Set internal deadline milestones: Board meeting for accounts approval by 31st July, AGM notice dispatch by 31st August, AGM held by mid-September. If you anticipate difficulty (e.g., delayed audit), file an extension application under Section 96(1) proviso with the Registrar well in advance (minimum 30 days before the deadline) stating the reasons and requesting 3 months' extension. Taxvio provides deadline tracking and extension application support.",
                  },
                  {
                    mistake: "Sending Notice with Less Than 21 Clear Days",
                    icon: "📧",
                    problem:
                      "Dispatching the AGM notice to shareholders with insufficient advance notice — for example, sending the notice 18 days before the AGM or counting the dispatch day and the AGM day as part of the 21 days. Section 101 mandates 21 'clear days' — i.e., excluding the day of dispatch and the day of the meeting. Non-compliance renders the AGM invalid, and all resolutions passed may be challenged by shareholders or the ROC.",
                    solution:
                      "Count 21 clear days carefully: if the AGM is on 30th September (Sunday), the latest dispatch date is 8th September (Tuesday) — 21 clear days means 9-29 September excluding both 8th and 30th. Dispatch the notice earlier (25-28 days in advance) to provide a buffer for postal delays and shareholder review time. Maintain proof of dispatch (courier tracking, email server logs, newspaper publication copies) for ROC scrutiny. Taxvio calculates the notice period and coordinates dispatch timing to ensure full compliance.",
                  },
                  {
                    mistake: "No Explanatory Statement for Special Business (Section 102)",
                    icon: "📝",
                    problem:
                      "Including special business items in the AGM agenda (e.g., director remuneration, related party transactions, capital increase) without attaching the mandatory explanatory statement under Section 102. The explanatory statement must set out material facts concerning each special business item and provide context for shareholders to make an informed decision. Omitting it is a serious procedural defect that can invalidate the resolutions and attract penalties.",
                    solution:
                      "For every agenda item beyond the four ordinary business items (accounts, dividend, director rotation, auditor appointment), draft a detailed explanatory statement covering: (a) the nature of the transaction or decision, (b) the financial and legal implications, (c) the Board's rationale and recommendation, (d) related party interest (if any), and (e) any other material information shareholders should know. Attach this statement to the AGM notice. Taxvio drafts Section 102 explanatory statements that meet Secretarial Standards and ROC expectations.",
                  },
                  {
                    mistake: "Not Filing MGT-14 Within 30 Days",
                    icon: "⏰",
                    problem:
                      "Failing to file Form MGT-14 with the Registrar of Companies within 30 days of the AGM date. This filing is mandatory for all ordinary and special resolutions passed at the AGM, and delayed filing attracts penalties of ₹1 lakh on the company and ₹25,000 on each officer in default, plus ₹500 per day of continuing default. Many companies assume MGT-14 is needed only for special resolutions, but it applies to ordinary resolutions as well.",
                    solution:
                      "Prepare the minutes and MGT-14 filing in parallel immediately after the AGM. As soon as the scrutinizer's report is ready (typically within 2-3 days), draft the minutes, obtain the Chairman's signature, and file MGT-14 by the 10th day post-AGM to allow a comfortable buffer. Set a calendar reminder for 'AGM date + 25 days' as the internal deadline. Taxvio files MGT-14 within 7-10 days of the AGM as standard practice, ensuring zero delays.",
                  },
                  {
                    mistake: "Quorum Not Present or Not Recorded",
                    icon: "👥",
                    problem:
                      "Starting the AGM without the requisite quorum being present, or failing to record the quorum in the attendance register and minutes. For private companies, quorum is 2 members personally present (or via VC/OAVM for virtual AGMs); for public companies, quorum is 5 members personally present. If quorum is not present within half an hour of the scheduled time, the meeting must be adjourned to the same day next week (or as decided), and if quorum is not present at the adjourned meeting, the meeting lapses. Proceeding without quorum renders all resolutions void.",
                    solution:
                      "Before opening the AGM, count the number of shareholders present (physically or logged in via VC) and confirm quorum is met. Record the names of shareholders present and the total count in the attendance register and the minutes. If quorum is not present, wait for the full half-hour grace period, then adjourn the meeting formally and issue a fresh notice for the adjourned meeting. For virtual AGMs, use the VC platform's participant list as evidence of quorum. Taxvio coordinates with the company to ensure quorum is planned (e.g., obtaining advance confirmation from key shareholders) and documented properly.",
                  },
                  {
                    mistake: "No Scrutinizer Appointed or Report Not Filed",
                    icon: "🔍",
                    problem:
                      "Not appointing a scrutinizer (a practicing Company Secretary or Chartered Accountant) to oversee the voting process, or failing to obtain the scrutinizer's report on the voting results. While show-of-hands voting for small private companies may not strictly require a scrutinizer, any company using e-voting or conducting a poll (or listed companies) must appoint a scrutinizer, and the scrutinizer's report is a mandatory attachment to Form MGT-14. Missing this renders the MGT-14 filing incomplete.",
                    solution:
                      "Appoint a scrutinizer at the pre-AGM Board meeting (or immediately after the AGM if a poll is demanded). Provide the scrutinizer with access to the e-voting results (if applicable) and the instapoll results. The scrutinizer prepares a consolidated report showing votes in favour, against, and invalid for each resolution, certifies it, and submits it to the Chairman within 48 hours of the AGM. Attach this report to MGT-14. For small private companies with simple show-of-hands voting, the minutes can record the voting result without a formal scrutinizer, but best practice is to appoint one anyway. Taxvio provides scrutinizer appointment and report preparation as part of the AGM package.",
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
              AGM Compliance Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Complete AGM support packages for private, public, and listed
              companies:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹4,999",
                  popular: false,
                  features: [
                    "AGM notice drafting (ordinary business only)",
                    "Board resolution for AGM approval",
                    "Notice dispatch coordination (up to 20 shareholders)",
                    "AGM minutes drafting",
                    "Form MGT-14 filing (ordinary resolutions)",
                    "Email support",
                  ],
                  limitations: [
                    "Special business explanatory statement not included",
                    "No VC/OAVM setup support",
                    "No e-voting coordination",
                    "No scrutinizer appointment",
                  ],
                  ideal:
                    "Small private companies with simple AGM agendas (accounts + dividend + directors)",
                },
                {
                  name: "Standard",
                  price: "₹9,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "AGM agenda with up to 3 special business items",
                    "Section 102 explanatory statements",
                    "Notice dispatch for up to 100 shareholders",
                    "Physical or virtual AGM coordination support",
                    "Scrutinizer appointment & report",
                    "Form MGT-14 filing (ordinary & special resolutions)",
                    "Priority WhatsApp + email support",
                  ],
                  limitations: [
                    "VC/OAVM platform setup offered as add-on",
                    "E-voting coordination offered as add-on",
                  ],
                  ideal:
                    "Most private and unlisted public companies with special business items",
                },
                {
                  name: "Complete",
                  price: "₹19,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Unlimited special business items",
                    "Notice dispatch for unlimited shareholders",
                    "Full VC/OAVM virtual AGM setup & coordination",
                    "Remote e-voting coordination with NSDL/CDSL",
                    "Newspaper advertisement publication (listed companies)",
                    "Form MGT-15 filing (listed companies)",
                    "Dividend payment coordination",
                    "Dedicated CS + CA team with year-round support",
                  ],
                  limitations: [],
                  ideal:
                    "Listed companies, large public companies, or companies with complex AGM agendas",
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
                    <p className="text-sm text-gray-500">Per AGM</p>
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
                    service: "VC/OAVM Virtual AGM Setup",
                    price: "₹4,999",
                    desc: "Full coordination with Zoom/Teams or certified VC platform for virtual AGM",
                  },
                  {
                    service: "Remote E-Voting Coordination",
                    price: "₹3,999",
                    desc: "Setup with NSDL/CDSL e-voting portal, shareholder credential sharing",
                  },
                  {
                    service: "Additional Special Business Item",
                    price: "₹1,999/item",
                    desc: "Section 102 explanatory statement drafting for each extra item",
                  },
                  {
                    service: "AGM Extension Application",
                    price: "₹2,999",
                    desc: "Filing for 3-month extension under Section 96(1) proviso with ROC",
                  },
                  {
                    service: "Dividend Payment Coordination",
                    price: "₹2,999",
                    desc: "Bank coordination, warrant printing, NECS/RTGS processing",
                  },
                  {
                    service: "Annual Compliance Package",
                    price: "₹14,999/year",
                    desc: "AGM + ADT-1 + AOC-4 + MGT-7 + Board/statutory meetings for FY 2026-26",
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
                  name: "Rohit Chawla, Director",
                  company: "Zenith Industries Pvt Ltd",
                  location: "Noida, UP",
                  text: "We were approaching the 30th September deadline and our audit wasn't finished. Taxvio filed an AGM extension application with the ROC on 20th August, got us a 3-month extension by mid-September, and then coordinated the entire AGM in December — notice, resolutions, virtual meeting setup, and MGT-14 filing. Saved us from a ₹1.5 lakh penalty exposure.",
                },
                {
                  name: "Anjali Verma, Company Secretary",
                  company: "Pioneer Logistics Pvt Ltd",
                  location: "Gurgaon, HR",
                  text: "Our first AGM as a newly-converted private company from LLP — we had special business items (director remuneration, Section 186 loan approval) and no idea how to draft the Section 102 explanatory statements. Taxvio's CS drafted them perfectly, coordinated the Board meeting, sent notices to all 12 shareholders, and filed MGT-14 within 5 days of the AGM. Professional and thorough.",
                },
                {
                  name: "Manoj Kumar, CFO",
                  company: "Heritage Constructions Pvt Ltd",
                  location: "Muzaffarnagar, UP",
                  text: "We wanted to hold our AGM virtually to save time and cost since our shareholders are spread across 4 cities. Taxvio set up the entire Zoom AGM — sent login credentials to all shareholders, coordinated the e-voting, managed the scrutinizer's report, and recorded the meeting. Everything was compliant, documented, and filed with zero hitches.",
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
              AGM Compliance Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides online AGM compliance services for private, public, and
              listed companies across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote support for notice
              drafting, virtual AGM coordination, and ROC filings.
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
              Other ROC & Annual Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "AOC-4 Financial Statements",
                  icon: "📊",
                  link: "/serviceslist/roc/aoc-4-filing",
                  desc: "Filing of FY 2025-26 audited financials",
                },
                {
                  title: "MGT-7 Annual Return",
                  icon: "📋",
                  link: "/serviceslist/roc/mgt-7-filing",
                  desc: "Annual return filing for FY 2025-26",
                },
                {
                  title: "ADT-1 Auditor Appointment",
                  icon: "🧑‍💼",
                  link: "/serviceslist/roc/adt-1-auditor-appointment",
                  desc: "Statutory auditor appointment filing",
                },
                {
                  title: "Board Meetings",
                  icon: "📅",
                  link: "/serviceslist/roc/board-meeting-compliance",
                  desc: "Quarterly Board meeting compliance",
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
                    FY 2025-26 AGM Compliance
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Conduct Your AGM Before 30th September 2026
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get complete AGM support — notice drafting, agenda & resolutions,
                    virtual meeting coordination, minutes, and MGT-14/MGT-15 filing —
                    handled by expert CS & CA team. Avoid ₹1.5 lakh penalty exposure.
                    Starting ₹4,999.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get AGM Support — ₹4,999
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

        {/* FIXED WHATSAPP BUTTON */}
        {showWhatsApp && (
          <a
            href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20AGM%20compliance%20for%20FY%202025-26"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-200 z-50 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Need AGM Help? Chat Now!
            </span>
          </a>
        )}
      </main>
    </>
  );
}

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can a one-person company (OPC) skip holding an AGM?",
      a: "YES. Under Section 96(1), one-person companies are exempt from the requirement to hold an Annual General Meeting. However, OPCs must still comply with all other annual compliance requirements — filing of financial statements (AOC-4), annual return (MGT-7), and appointment of auditors (ADT-1 if required). Additionally, if an OPC crosses the paid-up capital or turnover thresholds (₹2 crore paid-up capital or ₹20 crore turnover in the preceding 3 consecutive financial years), it must convert into a private limited company under Section 18(1)(c) within 6 months, and from that point forward, AGM compliance becomes mandatory. The exemption applies only to pure OPCs that remain below the conversion thresholds.",
    },
    {
      q: "Can we hold the AGM earlier than 6 months from the financial year end?",
      a: "YES, you can hold the AGM anytime during the 6-month window — you are not required to wait until the end of the 6-month period. Many companies hold the AGM 3-4 months after the financial year end (e.g., in July or August for a March year-end company) once the audit is complete and the accounts are finalized. Holding the AGM earlier provides a buffer to complete post-AGM filings (MGT-14, AOC-4, MGT-7) well before their respective deadlines. However, you cannot hold the AGM BEFORE the financial year ends (e.g., you cannot hold the FY 2025-26 AGM in February 2026), since the audited accounts for the full financial year would not be available. The earliest practical date is typically 2-3 months after the year end, once the audit is substantially complete.",
    },
    {
      q: "What happens if we cannot hold the AGM by the 6-month deadline — can we get an extension?",
      a: "YES. Under the proviso to Section 96(1), if it is not practicable to hold the AGM within the 6-month period for any sufficient cause, the company can apply to the Registrar of Companies for an extension of up to 3 months. The application must be filed at least 30 days before the expiry of the 6-month deadline (i.e., by 31st August 2026 for a 31st March 2026 year-end company), stating the reasons why the AGM cannot be held on time (e.g., delayed audit, pending litigation, illness of key personnel, non-receipt of documents from subsidiaries). The Registrar has discretion to grant or refuse the extension based on the merits of the case. If granted, the AGM can be held up to 9 months from the financial year end (by 31st December 2026 for a March year-end company). Filing the extension application does NOT automatically extend the deadline — you must wait for the Registrar's approval before relying on the extended timeline. Taxvio assists in drafting and filing the extension application and follows up with the ROC for timely approval.",
    },
    {
      q: "Do we need to file resolutions passed at the AGM even if they are routine (like adoption of accounts)?",
      a: "YES. Under Section 117 read with Rule 24 of the Companies (Management and Administration) Rules, 2014, every ordinary and special resolution passed at the AGM must be filed with the Registrar of Companies in Form MGT-14 within 30 days of the AGM. This includes 'routine' resolutions such as adoption of audited accounts, declaration of dividend, reappointment of retiring directors, and appointment of auditors. The distinction between ordinary and special resolutions affects the quorum and majority required for passing them (ordinary = simple majority; special = 75% majority), but both types must be filed via MGT-14. The only resolutions that are typically NOT filed are procedural or administrative resolutions that do not materially affect the company's constitution or operations (e.g., a resolution to adjourn the meeting, or to appoint a scrutinizer, though the latter is increasingly filed as a matter of best practice). Non-filing attracts penalties, so the safest approach is to file MGT-14 for all substantive resolutions — Taxvio's package includes MGT-14 filing for all resolutions passed at the AGM.",
    },
    {
      q: "Can we hold a virtual AGM (via Zoom/Teams) instead of a physical AGM?",
      a: "YES. Following regulatory changes introduced during COVID-19 and continued under the Companies (Meetings) Rules, companies are permitted to hold AGMs through video-conferencing (VC) or other audio-visual means (OAVM), subject to compliance with the prescribed framework. The key requirements are: (a) use a secure VC/OAVM platform with adequate technical infrastructure, (b) provide shareholders with login credentials and instructions in the AGM notice, (c) ensure the meeting is recorded and the recording is archived for statutory inspection, (d) provide a helpdesk for technical support (email + phone), (e) enable shareholders to ask questions and vote electronically, and (f) appoint a scrutinizer to oversee the voting and prepare a report. Listed companies and companies with 1,000+ shareholders are strongly encouraged (and in some cases required by SEBI) to offer remote e-voting in addition to the virtual AGM. For unlisted private companies, the decision to go physical or virtual is at the Board's discretion, considering shareholder convenience and cost. Virtual AGMs are now mainstream and Taxvio provides full coordination for VC/OAVM AGMs, including platform setup, shareholder communication, and e-voting integration.",
    },
    {
      q: "What is the deadline for filing the financial statements (AOC-4) — is it linked to the AGM deadline?",
      a: "The deadlines are SEPARATE but interlinked. The AGM must be held within 6 months of the financial year end (by 30th September 2026 for a 31st March 2026 year-end). The financial statements (in Form AOC-4) and the annual return (in Form MGT-7) must be filed with the ROC within 30 days of the AGM date. So if you hold the AGM on 25th September 2026, AOC-4 and MGT-7 must be filed by 25th October 2026. The sequencing is critical: you cannot file AOC-4 BEFORE the AGM, because the accounts must first be laid before and adopted by the shareholders at the AGM before they can be filed with the ROC. Many companies make the mistake of holding the AGM close to the 30th September deadline and then scrambling to file AOC-4 and MGT-7 within the subsequent 30 days — the better approach is to hold the AGM earlier (July-August) so that the post-AGM filings can be completed comfortably before the extended deadline. Taxvio's annual compliance package sequences the AGM and post-AGM filings to ensure all deadlines are met with buffers.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — AGM Compliance
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