// app/serviceslist/roc/adt-1-auditor-appointment/Adt1AuditorAppointmentClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ADT-1 Statutory Auditor Appointment Filing Services - Complete MCA Compliance",
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
    "Professional filing of Form ADT-1 for appointment or reappointment of statutory auditors under Section 139 of the Companies Act, 2013, applicable for FY 2025-26 annual compliance. Complete service includes auditor consent letter, eligibility certificate verification, Board or AGM resolution drafting, ADT-1 preparation and e-filing with MCA, and auditor tenure tracking for rotation compliance. Expert support for first auditor appointments, casual vacancy fills, and annual reappointments. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "ADT-1 Statutory Auditor Appointment Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "7999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Form ADT-1 and when must it be filed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form ADT-1 is the e-form prescribed under Section 139 of the Companies Act, 2013 to intimate the Registrar of Companies about the appointment, reappointment, or removal of a statutory auditor. Every company (except one-person companies and small companies not required to appoint auditors under certain exemptions) must file ADT-1 within 15 days of the auditor's appointment at the Board meeting (for first auditor) or within 15 days of the AGM where the auditor is appointed or reappointed (for subsequent appointments). For FY 2025-26, companies holding their AGM for FY 2024-25 must file ADT-1 within 15 days of the AGM date to comply with annual auditor appointment requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can the same auditor be reappointed every year indefinitely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For private limited companies and most unlisted public companies, YES — the same auditor (individual or firm) can be reappointed every year without a mandatory rotation limit, as long as the auditor continues to meet the eligibility criteria under Section 141 and provides a fresh consent and eligibility certificate each year. However, for certain categories of companies (listed companies, unlisted public companies with paid-up capital ≥ ₹10 crore or borrowings ≥ ₹50 crore, and all public interest entities), mandatory auditor rotation applies: an individual auditor can serve for a maximum of 5 consecutive years, and an audit firm for a maximum of 10 consecutive years (with a cooling-off period before re-appointment). ADT-1 tracks this tenure automatically via the 'Whether appointed as per rotation' field.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if ADT-1 is not filed within the 15-day deadline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failure to file ADT-1 within 15 days of appointment/reappointment attracts penalties under Section 139(6) and general penalty provisions of the Companies Act: the company is liable to a penalty of ₹300 per day of delay (subject to a maximum), and every officer in default (typically the director and company secretary) is liable to a penalty of ₹50,000 or more. Additionally, the MCA portal may levy additional fees for delayed filing. Beyond financial penalties, non-filing of ADT-1 on time affects the company's compliance status with the ROC, which can impact future filings, director appointments, and third-party due diligence (lenders, investors). It is therefore critical to file ADT-1 promptly after every Board meeting or AGM where the auditor is appointed or reappointed.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function Adt1AuditorAppointmentClient() {
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
          ⚠️ FY 2025-26 Compliance Alert: File ADT-1 Within 15 Days of AGM!
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
              <span className="text-white">ADT-1 Auditor Appointment</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📋 Annual Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  ADT-1 Statutory Auditor
                  <br />
                  <span className="text-[#7ecbf0]">Appointment Filing</span>
                  <br />
                  FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Every company must{" "}
                  <strong className="text-white">
                    appoint or reappoint a statutory auditor
                  </strong>{" "}
                  and file{" "}
                  <strong className="text-white">Form ADT-1</strong> with the{" "}
                  <strong className="text-white">
                    Registrar of Companies within 15 days
                  </strong>{" "}
                  of the Board meeting or AGM where the appointment is approved
                  — as mandated under{" "}
                  <strong className="text-white">
                    Section 139 of the Companies Act, 2013
                  </strong>
                  . For{" "}
                  <strong className="text-white">FY 2025-26 compliance</strong>,
                  companies holding their AGM for FY 2024-25 must file ADT-1
                  immediately after the AGM to avoid{" "}
                  <strong className="text-white">
                    penalties of ₹300/day and officer fines up to ₹50,000
                  </strong>
                  . <strong className="text-white">Taxvio</strong> handles the
                  complete filing —{" "}
                  <strong className="text-white">
                    auditor consent letter, eligibility certificate, Board/AGM
                    resolution drafting, and ADT-1 e-filing
                  </strong>{" "}
                  — ensuring compliance in{" "}
                  <strong className="text-white">2-3 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File ADT-1 Now — ₹2,999 →
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
                    "✅ 2-3 Days Filing",
                    "✅ Auditor Consent Support",
                    "✅ Resolution Drafting",
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
                    ["📅", "Deadline: 15 days from AGM/Board meeting"],
                    ["📝", "Form: ADT-1 e-filing with MCA"],
                    ["🧑‍💼", "Required for: All companies (with exceptions)"],
                    ["⏰", "Filing time: 2-3 working days"],
                    ["⚖️", "Penalty: ₹300/day + officer fine ₹50,000"],
                    ["💼", "Starting fee: ₹2,999"],
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
              { number: "500+", label: "ADT-1 Filings Done", icon: "📋" },
              { number: "2-3 Days", label: "Average Filing Time", icon: "⏰" },
              { number: "15 Days", label: "Statutory Deadline", icon: "📅" },
              { number: "₹2,999", label: "Starting Fee", icon: "💼" },
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
              "✔ Section 139 Experts",
              "✔ Resolution Drafting",
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
          {/* WHAT IS ADT-1 */}
          <section id="what-is-adt1">
            <SectionLabel text="Understanding ADT-1 Filing" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Form ADT-1 and When Is It Required?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Form ADT-1</strong> (Intimation of Appointment,
                  Including Filling of Casual Vacancy of Auditor) is the
                  statutory e-form prescribed under{" "}
                  <strong>
                    Section 139 of the Companies Act, 2013 and Rule 4 of the
                    Companies (Audit and Auditors) Rules, 2014
                  </strong>{" "}
                  for intimating the Registrar of Companies about the{" "}
                  <strong>
                    appointment, reappointment, or filling of casual vacancy of
                    a statutory auditor
                  </strong>
                  .
                </p>
                <p>
                  Every company (except certain exempted categories such as
                  one-person companies opting out of auditor appointment and
                  dormant companies meeting specific conditions) is required to
                  appoint a statutory auditor to audit its financial statements
                  and file{" "}
                  <strong>
                    Form ADT-1 within 15 days of the date of appointment
                  </strong>{" "}
                  — either from the Board meeting (for first auditors and casual
                  vacancies) or from the Annual General Meeting (for regular
                  annual appointments and reappointments).
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📋 Key Features of ADT-1 Filing
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Mandatory for All Companies",
                        desc: "Every private limited, public limited, one-person company (if not exempted), and Section 8 company must file ADT-1 whenever an auditor is appointed, reappointed, or a casual vacancy is filled — irrespective of turnover or paid-up capital.",
                      },
                      {
                        title: "15-Day Filing Deadline",
                        desc: "ADT-1 must be filed within 15 days of the Board meeting or AGM where the auditor's appointment is approved. For FY 2025-26 compliance, companies must file within 15 days of their FY 2024-25 AGM (where the auditor for FY 2025-26 is appointed).",
                      },
                      {
                        title: "Auditor Consent & Eligibility Required",
                        desc: "The appointed auditor must provide a written consent letter and an eligibility certificate (in the prescribed format or as per ICAI norms) confirming they are qualified under Section 141 and not disqualified under Section 141(3) of the Companies Act.",
                      },
                      {
                        title: "Tracks Auditor Tenure for Rotation",
                        desc: "ADT-1 includes fields to indicate whether the auditor is appointed under rotation rules (applicable for listed companies and certain public companies) and to specify the tenure of appointment — helping MCA track compliance with mandatory auditor rotation under Section 139(2).",
                      },
                      {
                        title: "Penalties for Delay or Non-Filing",
                        desc: "Non-filing or delayed filing attracts a penalty of ₹300 per day of delay on the company, and every officer in default (directors, company secretary) is liable to a penalty of up to ₹50,000 under Section 139(6) and general penalty provisions.",
                      },
                      {
                        title: "Part of Annual Compliance Cycle",
                        desc: "ADT-1 filing is a critical step in the annual compliance cycle — typically filed shortly after the AGM, alongside (or before) the annual return (MGT-7) and financial statements (AOC-4) for the preceding financial year.",
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
                    ✅ When Must ADT-1 Be Filed? (FY 2025-26 Timeline)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        For First Auditor Appointment (Newly Incorporated
                        Companies)
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • First auditor must be appointed by the Board of
                          Directors within <strong>30 days of incorporation</strong>
                        </li>
                        <li>
                          • <strong>ADT-1 must be filed within 15 days</strong> of
                          the Board meeting where the auditor is appointed
                        </li>
                        <li>
                          • Auditor holds office until the conclusion of the
                          first AGM (or until expiry of 3 months from the
                          financial year-end, whichever is earlier)
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        For Annual Reappointment (Existing Companies)
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Auditor is appointed or reappointed at the{" "}
                          <strong>Annual General Meeting (AGM)</strong> for FY
                          2024-25, which must be held before{" "}
                          <strong>30th September 2025</strong> (or as extended by
                          MCA)
                        </li>
                        <li>
                          • <strong>ADT-1 must be filed within 15 days</strong> of
                          the AGM date where the auditor for FY 2025-26 is
                          appointed
                        </li>
                        <li>
                          • For example: AGM held on 25th August 2025 → ADT-1
                          filing deadline is <strong>9th September 2025</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        For Filling Casual Vacancy
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • If the existing auditor resigns, is removed, or
                          becomes disqualified during the year, a{" "}
                          <strong>casual vacancy</strong> arises
                        </li>
                        <li>
                          • Board must fill the casual vacancy and file{" "}
                          <strong>ADT-1 within 15 days</strong> of the Board
                          meeting where the new auditor is appointed
                        </li>
                        <li>
                          • The auditor appointed to fill a casual vacancy holds
                          office until the conclusion of the next AGM
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📊 Who Needs to File ADT-1? (Company Categories)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        ✓ Private Limited Companies
                      </p>
                      <p className="text-xs text-gray-600">
                        All private limited companies must appoint a statutory
                        auditor and file ADT-1 every year, unless specifically
                        exempted (e.g., dormant companies meeting conditions under
                        Rule 4 of the Audit Rules).
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        ✓ Public Limited Companies
                      </p>
                      <p className="text-xs text-gray-600">
                        All public limited companies (listed and unlisted) must
                        appoint auditors and file ADT-1. Listed companies and
                        certain unlisted public companies are also subject to
                        mandatory auditor rotation rules (Section 139(2)).
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        ✓ One Person Companies (OPC)
                      </p>
                      <p className="text-xs text-gray-600">
                        OPCs with annual turnover ≥ ₹2 crore or outstanding
                        borrowings ≥ ₹1 crore must appoint an auditor and file
                        ADT-1. Smaller OPCs may be exempted under certain
                        conditions.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        ✓ Section 8 Companies (NPOs)
                      </p>
                      <p className="text-xs text-gray-600">
                        Section 8 companies registered for charitable purposes
                        must appoint auditors and file ADT-1 unless they are
                        dormant and meet specific exemption criteria.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        ✗ Small Companies (Conditional Exemption)
                      </p>
                      <p className="text-xs text-gray-600">
                        Small companies (as defined under Section 2(85): paid-up
                        capital ≤ ₹4 crore and turnover ≤ ₹40 crore) must still
                        appoint auditors and file ADT-1 unless they are dormant
                        and eligible for audit exemption under Rule 4.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🔍 Auditor Eligibility Criteria (Section 141)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    To be eligible for appointment as a statutory auditor, the
                    individual or firm must:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Qualified Chartered Accountant",
                        desc: "Must be a chartered accountant (CA) holding a valid certificate of practice issued by the Institute of Chartered Accountants of India (ICAI).",
                      },
                      {
                        title: "No Disqualifications",
                        desc: "Must NOT be disqualified under Section 141(3) — e.g., not an officer/employee of the company, not indebted to the company beyond ₹5 lakh, not a relative of a director, not holding any security/interest in the company, etc.",
                      },
                      {
                        title: "Peer Review Certificate (For Certain Companies)",
                        desc: "If the company's paid-up capital ≥ ₹10 crore or borrowings ≥ ₹50 crore, or if it is a listed company or a government company, the auditor (individual or firm partner) must have a valid peer review certificate from ICAI.",
                      },
                      {
                        title: "Written Consent",
                        desc: "The auditor must give written consent to the appointment in the prescribed form, confirming eligibility and willingness to accept the appointment.",
                      },
                      {
                        title: "Certificate from the Auditor",
                        desc: "The auditor must provide a certificate stating that they are eligible for appointment and are not disqualified under the Companies Act or any other law, and that the proposed appointment complies with the limits on maximum number of audits (Section 141(3)(g)).",
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
                    ⚠️ Consequences of Not Filing ADT-1
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Penalty on Company: ₹300 per day of delay (subject to maximum under the Act) — can accumulate to significant amounts for prolonged non-filing.",
                      "Penalty on Officers in Default: Every director and company secretary (if appointed) liable to a penalty of up to ₹50,000 under Section 139(6) and general penalty provisions.",
                      "Compliance Status Impact: Non-filing of ADT-1 affects the company's ROC compliance status (active compliance indicator on MCA portal), which can impact director appointments, annual return filing, and third-party due diligence by lenders or investors.",
                      "Potential ROC Action: The ROC may issue notices, initiate prosecution proceedings under Section 450-451 of the Companies Act, and in severe cases, consider strike-off action under Section 248 if the company exhibits a pattern of non-compliance.",
                      "Auditor's Position Unclear: Until ADT-1 is filed, the auditor's appointment is not formally on record with the MCA, which can create ambiguity during statutory audit, income tax assessments, and bank audits.",
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
                    📅 FY 2025-26 ADT-1 Filing Timeline (Typical Company)
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          FY 2024-25 Ends (31st March 2025)
                        </p>
                        <p className="text-xs text-gray-600">
                          Financial year ends; auditor begins audit of FY 2024-25
                          financials.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          Audit Completion & Board Meeting (June-Aug 2025)
                        </p>
                        <p className="text-xs text-gray-600">
                          Auditor submits audit report; Board approves FY 2024-25
                          financials and calls AGM.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          AGM Held (By 30th Sept 2025 or Extended Date)
                        </p>
                        <p className="text-xs text-gray-600">
                          AGM is conducted, FY 2024-25 financials adopted, and
                          auditor for FY 2025-26 appointed/reappointed.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xs">
                        4
                      </div>
                      <div>
                        <p className="font-bold text-green-700 mb-1">
                          File ADT-1 (Within 15 Days of AGM)
                        </p>
                        <p className="text-xs text-gray-600">
                          ADT-1 must be filed with MCA within 15 days of the AGM
                          date — Taxvio ensures on-time filing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ADT-1 FILING PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              ADT-1 Auditor Appointment Filing Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete MCA filing process — from auditor selection to ADT-1
                e-filing:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Selection of Statutory Auditor",
                    description:
                      "Identify a qualified Chartered Accountant (individual or firm) who meets the eligibility criteria under Section 141 of the Companies Act, 2013. Verify that the auditor: (a) holds a valid certificate of practice from ICAI, (b) is not disqualified under Section 141(3) (e.g., not an employee, officer, or relative of a director; not indebted to the company; not holding security or interest in the company), (c) has a valid peer review certificate if required (for companies with paid-up capital ≥ ₹10 crore or borrowings ≥ ₹50 crore, listed companies, or government companies), and (d) confirms they have not reached the maximum limit of audits as prescribed under Section 141(3)(g) (20 companies for individuals, 60 companies for firms with up to 20 partners). For first-time appointments, engage an auditor during the incorporation process itself to avoid last-minute compliance pressure.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Obtain Auditor Consent Letter",
                    description:
                      "Request the selected auditor to provide a written consent letter in the prescribed format (or as per ICAI norms) confirming: (a) their willingness to accept the appointment, (b) their eligibility and non-disqualification under the Companies Act, and (c) compliance with the maximum audit limit. The consent letter should be addressed to the company and signed by the auditor (or authorized partner in case of an audit firm). This consent letter is mandatory for filing ADT-1 and must be uploaded as an attachment (scanned PDF).",
                    duration: "1 day",
                  },
                  {
                    step: 3,
                    title: "Obtain Auditor Eligibility Certificate",
                    description:
                      "Request the auditor to provide an eligibility certificate (also known as a certificate of non-disqualification) certifying that: (a) they are a practicing Chartered Accountant holding a valid certificate of practice, (b) they are not disqualified under Section 141(3) or any other law, (c) the proposed appointment is in accordance with the limits on maximum number of audits, and (d) they hold a valid peer review certificate (if applicable). This certificate is typically issued on the auditor's letterhead and signed by the auditor. Upload this certificate as an attachment to Form ADT-1.",
                    duration: "1 day (parallel with consent letter)",
                  },
                  {
                    step: 4,
                    title: "Convene Board Meeting (For First Auditor or Casual Vacancy)",
                    description:
                      "If appointing the first auditor (within 30 days of incorporation) or filling a casual vacancy (due to resignation, removal, or disqualification of the existing auditor), convene a Board meeting with proper notice (minimum 7 days for Board meetings, unless shorter notice is agreed by all directors). Draft and pass a Board resolution approving the appointment of the auditor, specifying: (a) name of the auditor (individual or firm name), (b) membership number (ICAI membership number), (c) firm registration number (if applicable), (d) remuneration to be paid (fixed or as per separate engagement), (e) tenure of appointment (until the conclusion of the first AGM for first auditors; until the next AGM for casual vacancy fillings). Record this resolution in the Board meeting minutes and obtain signatures of all directors present.",
                    duration: "2-3 days",
                  },
                  {
                    step: 5,
                    title: "Appointment/Reappointment at AGM (For Annual Appointments)",
                    description:
                      "For regular annual appointments or reappointments (for FY 2025-26), the auditor is appointed at the Annual General Meeting (AGM) for FY 2024-25. Include the auditor appointment item on the AGM agenda, along with adoption of accounts, director appointments, dividend declaration (if any), etc. Pass an ordinary resolution at the AGM approving the appointment/reappointment of the auditor for FY 2025-26 and authorizing the Board to fix the remuneration. Record this resolution in the AGM minutes, signed by the chairman of the meeting. For companies following the shorter AGM process (e.g., small private companies), ensure statutory quorum and proper notice requirements are met.",
                    duration: "AGM date (as per statutory timeline)",
                  },
                  {
                    step: 6,
                    title: "Preparation of Form ADT-1",
                    description:
                      "Prepare Form ADT-1 on the MCA portal (www.mca.gov.in) using the company's login credentials (typically via a professional or company secretary). Form ADT-1 requires the following details: (a) CIN of the company, (b) date of Board meeting or AGM where the auditor was appointed, (c) type of appointment (first auditor, reappointment, casual vacancy filling), (d) auditor details (name, membership number, firm registration number, address, email, mobile), (e) tenure of appointment (from date to date), (f) whether appointment is under rotation (Yes/No — applicable for listed companies and certain public companies under Section 139(2)), (g) remuneration or basis of remuneration, (h) date of auditor's consent letter, and (i) attachments: Board/AGM resolution (PDF), auditor consent letter (PDF), auditor eligibility certificate (PDF), and optional: appointment letter or engagement letter (PDF). Ensure all fields are filled accurately — errors in CIN, auditor membership number, or dates can lead to rejection by the MCA system.",
                    duration: "1-2 hours (form preparation)",
                  },
                  {
                    step: 7,
                    title: "Digital Signature & E-Filing of ADT-1",
                    description:
                      "Once Form ADT-1 is prepared and reviewed for accuracy, it must be digitally signed by: (a) a director of the company (using their DSC), and (b) the auditor being appointed (using their DSC — individual CA's DSC or authorized partner's DSC for audit firms). Pre-fill the form, attach all required documents (Board/AGM resolution, consent letter, eligibility certificate), and submit the form on the MCA portal. Pay the requisite government fee (₹300 as of FY 2025-26 for standard filing; additional fees may apply for delayed filing). Upon successful submission, MCA generates a Service Request Number (SRN) — save this SRN for tracking the filing status.",
                    duration: "1-2 hours (DSC signing & e-filing)",
                  },
                  {
                    step: 8,
                    title: "MCA Processing & Acknowledgment",
                    description:
                      "The MCA portal processes the ADT-1 e-form, typically on a real-time or same-day basis if all details are correct and the form is filed within the 15-day deadline. If the form is complete and accurate, MCA issues an acknowledgment with the form registration number. This acknowledgment is the official proof of the auditor appointment being registered with the Registrar of Companies. Download and save the acknowledgment (PDF) from the MCA portal for the company's statutory records and for providing to the auditor as confirmation of their appointment.",
                    duration: "Same day to 1 working day",
                  },
                  {
                    step: 9,
                    title: "Update Statutory Registers & Records",
                    description:
                      "Following successful ADT-1 filing: (a) Update the Register of Auditors (if maintained manually or in statutory software) with the details of the newly appointed auditor, including name, membership number, firm registration number, date of appointment, tenure, and remuneration. (b) Update the company's internal records, accounting system, and communication lists to reflect the new auditor's contact details for coordination on audit planning, documentation requests, and audit reports. (c) Inform the previous auditor (if any) and obtain handover of audit working papers and any pending matters, as per professional standards and the Companies Act. (d) Communicate the auditor appointment to the company's bankers, lenders, and key stakeholders (especially if there is a change in auditor), as lender agreements may require intimation of auditor changes.",
                    duration: "Within 1-2 days of ADT-1 filing",
                  },
                  {
                    step: 10,
                    title: "Auditor Tenure Tracking & Rotation Compliance (If Applicable)",
                    description:
                      "For companies subject to mandatory auditor rotation (listed companies, unlisted public companies with paid-up capital ≥ ₹10 crore or borrowings ≥ ₹50 crore, government companies, and public interest entities), maintain a tracker of auditor tenure to ensure compliance with Section 139(2): an individual auditor can hold office for a maximum of 5 consecutive years, and an audit firm for a maximum of 10 consecutive years (with a cooling-off period before re-appointment). Update this tracker each year when filing ADT-1, and plan for auditor rotation well in advance (6-12 months before the maximum tenure is reached) to allow for smooth transition and handover. Taxvio provides auditor tenure tracking as part of the annual compliance package to help companies avoid last-minute rotation crises.",
                    duration: "Ongoing (annual review)",
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
                  <strong>2-3 working days</strong> from obtaining auditor
                  consent to ADT-1 e-filing and MCA acknowledgment, assuming the
                  Board meeting or AGM has already been held and the auditor's
                  consent and eligibility certificates are obtained promptly.
                  Breakdown: auditor selection & consent (1-2 days) + Board/AGM
                  resolution (if not already done) + ADT-1 preparation & filing
                  (1-2 hours) + MCA processing (same day to 1 day).{" "}
                  <strong>Critical deadline:</strong> File ADT-1 within{" "}
                  <strong>15 days</strong> of the Board meeting or AGM date to
                  avoid penalties.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for ADT-1 Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  From the Company
                </p>
                <ul className="space-y-3">
                  {[
                    "Certificate of Incorporation (CIN for verification)",
                    "Board meeting minutes (for first auditor or casual vacancy)",
                    "AGM minutes (for annual appointment/reappointment)",
                    "Board or AGM resolution approving auditor appointment (PDF scan)",
                    "Previous year's AOC-4 and MGT-7 (for reference, if available)",
                    "Details of proposed auditor: name, membership number, firm registration number, address, email, mobile",
                    "DSC of at least one director (for digitally signing ADT-1)",
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
                  From the Auditor
                </p>
                <ul className="space-y-3">
                  {[
                    "Written consent letter to act as auditor (signed by the auditor)",
                    "Eligibility certificate / certificate of non-disqualification (on auditor's letterhead)",
                    "Copy of ICAI membership certificate (for verification)",
                    "Copy of certificate of practice (valid CoP from ICAI)",
                    "Peer review certificate (if required — for companies with paid-up capital ≥ ₹10 crore, borrowings ≥ ₹50 crore, listed companies, or government companies)",
                    "Firm registration number (if auditor is a firm)",
                    "DSC of the auditor (individual CA or authorized partner of audit firm, for digitally signing ADT-1)",
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

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <p className="font-bold text-blue-800 mb-3">
                📝 Additional Information Required for ADT-1
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Date of Board meeting or AGM where auditor was appointed",
                  "Type of appointment: first auditor, reappointment, or casual vacancy",
                  "Tenure of appointment: from date (start of FY) to date (end of FY or AGM date)",
                  "Whether appointment is under rotation (Yes/No) — for listed and certain public companies",
                  "Remuneration or basis of remuneration (fixed fee, per-day basis, etc.)",
                  "Whether the auditor has confirmed compliance with maximum audit limit (20 for individuals, 60 for firms)",
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
              Common Mistakes in ADT-1 Filing
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                ADT-1 filing has strict compliance requirements — avoid these
                critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Missing the 15-Day Filing Deadline",
                    icon: "⏰",
                    problem:
                      "Filing ADT-1 after the 15-day deadline from the Board meeting or AGM date. This is the most common mistake and attracts immediate penalties: ₹300/day on the company and up to ₹50,000 on directors and company secretary. Even a delay of 1-2 days can result in penalties, and prolonged delays (30+ days) can accumulate significant amounts and trigger ROC notices.",
                    solution:
                      "Set up calendar reminders for the AGM date and the ADT-1 filing deadline (AGM date + 15 days). Ideally, file ADT-1 within 5-7 days of the AGM to allow for any technical issues, DSC problems, or document corrections without breaching the 15-day limit. Taxvio provides automated deadline tracking and reminder services as part of the annual compliance package.",
                  },
                  {
                    mistake: "Filing Without Auditor Consent or Eligibility Certificate",
                    icon: "📄",
                    problem:
                      "Attempting to file ADT-1 without obtaining the auditor's written consent letter or eligibility certificate, or uploading incomplete/unsigned versions of these documents. The MCA system requires these attachments, and ROC scrutiny may reject filings where consent letters are generic, unsigned, or do not specifically reference the company's name and CIN.",
                    solution:
                      "Before preparing ADT-1, confirm that you have received: (a) a properly signed consent letter on the auditor's letterhead, addressed to your company, confirming willingness to act and eligibility, and (b) an eligibility certificate certifying non-disqualification under Section 141(3) and compliance with the maximum audit limit. Scan these as clear PDF files (preferably in color) and attach them to the ADT-1 e-form before submission. Taxvio coordinates with the auditor to ensure these documents are in the correct format and fully compliant.",
                  },
                  {
                    mistake: "Incorrect CIN, Membership Number, or Firm Registration Number",
                    icon: "🔢",
                    problem:
                      "Entering the wrong CIN of the company, or incorrect ICAI membership number or firm registration number of the auditor in the ADT-1 form. These are key identifiers in the MCA system, and errors can lead to rejection of the form, mismatch with existing records, or creation of duplicate/incorrect entries in the MCA database that are difficult to correct later.",
                    solution:
                      "Triple-check the CIN, auditor membership number (6-digit number issued by ICAI), and firm registration number (if applicable) before submitting ADT-1. Cross-verify these details with: (a) the company's Certificate of Incorporation for CIN, (b) the auditor's ICAI membership certificate for membership number, and (c) the auditor's firm registration certificate (if a firm) for firm registration number. Use copy-paste from official documents where possible to avoid manual typing errors. Taxvio performs this verification as part of the standard filing checklist.",
                  },
                  {
                    mistake: "Not Indicating Rotation Correctly for Listed/Public Companies",
                    icon: "🔄",
                    problem:
                      "For companies subject to mandatory auditor rotation (listed companies, unlisted public companies with paid-up capital ≥ ₹10 crore or borrowings ≥ ₹50 crore, government companies), failing to correctly indicate whether the appointment is under rotation, or incorrectly calculating the auditor's tenure. This can lead to unintentional breach of Section 139(2) rotation rules, resulting in the auditor's disqualification and penalties on the company.",
                    solution:
                      "Maintain a clear auditor tenure tracker showing the start date of the current auditor's appointment and the number of consecutive years served. When filing ADT-1, select 'Yes' in the 'Whether appointed as per rotation' field if your company is subject to rotation rules, and ensure the tenure indicated in the form does not exceed the maximum limits (5 years for individuals, 10 years for firms). Plan for auditor rotation at least 6-12 months in advance to allow for smooth transition. Taxvio provides rotation tracking and advance planning support for listed and large public companies.",
                  },
                  {
                    mistake: "Missing or Incorrect Board/AGM Resolution",
                    icon: "📋",
                    problem:
                      "Uploading a Board or AGM resolution that does not specifically mention the auditor appointment, or uploading a generic/template resolution without proper dates, signatures, or company-specific details. The MCA may reject filings where the resolution is not signed by the chairman/directors, is not dated, or does not clearly state the auditor's name, membership number, and tenure of appointment.",
                    solution:
                      "Ensure the Board or AGM resolution: (a) is dated with the actual meeting date, (b) clearly states the auditor's full name (individual or firm), membership number, and firm registration number (if applicable), (c) specifies the tenure of appointment (e.g., 'appointed as statutory auditor for FY 2025-26, to hold office from the conclusion of this AGM until the conclusion of the next AGM'), (d) is signed by the chairman of the meeting and at least one other director (for Board resolutions) or by the chairman of the AGM (for AGM resolutions), and (e) is scanned as a clear, legible PDF. Taxvio drafts compliant resolution templates tailored to your company and ensures all signatures and dates are in place before filing.",
                  },
                  {
                    mistake: "Not Verifying Auditor's Peer Review Certificate (If Required)",
                    icon: "🏅",
                    problem:
                      "For companies requiring peer review (paid-up capital ≥ ₹10 crore, borrowings ≥ ₹50 crore, listed companies, government companies), appointing an auditor who does not have a valid peer review certificate from ICAI, or failing to verify the certificate's validity before filing ADT-1. This renders the auditor ineligible under Section 141(1)(iia), and the appointment may be invalid, leading to penalties and the need to appoint a new auditor mid-year.",
                    solution:
                      "Before appointing an auditor for companies requiring peer review, request a copy of the auditor's (or audit firm partner's) peer review certificate issued by the Peer Review Board of ICAI. Verify the certificate number and validity period (peer review certificates are typically valid for 3 years from the date of issue). Confirm that the certificate is valid as of the date of appointment. Attach a copy of the peer review certificate to the ADT-1 e-form (as an additional attachment or within the eligibility certificate). Taxvio performs this verification for all applicable companies as part of the auditor eligibility check.",
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
              ADT-1 Auditor Appointment Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive auditor appointment and compliance packages for FY
              2025-26:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹2,999",
                  popular: false,
                  features: [
                    "Auditor consent letter coordination",
                    "Eligibility certificate verification",
                    "Board or AGM resolution drafting",
                    "Form ADT-1 preparation & e-filing",
                    "MCA fee payment (₹300 included)",
                    "Acknowledgment download & delivery",
                    "Email support",
                  ],
                  limitations: [
                    "Auditor sourcing not included (you provide auditor details)",
                    "No DSC procurement support",
                    "No auditor tenure tracking",
                  ],
                  ideal:
                    "Companies with an existing auditor relationship reappointing for FY 2025-26",
                },
                {
                  name: "Standard",
                  price: "₹4,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Auditor sourcing assistance (if needed)",
                    "DSC procurement support for director & auditor",
                    "Peer review certificate verification (if applicable)",
                    "Auditor tenure tracking & rotation alert",
                    "Statutory register update (Register of Auditors)",
                    "Priority WhatsApp + email support",
                  ],
                  limitations: [
                    "Annual compliance (AOC-4, MGT-7) offered as add-on",
                  ],
                  ideal:
                    "Companies appointing a new auditor or needing compliance handholding",
                },
                {
                  name: "Complete",
                  price: "₹7,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "First year annual compliance included (AOC-4 + MGT-7 filing)",
                    "Board meeting coordination & minutes drafting",
                    "AGM planning & minutes drafting",
                    "Audit engagement letter drafting",
                    "Audit coordination & query resolution support",
                    "Dedicated CA + CS team with year-round support",
                  ],
                  limitations: [],
                  ideal:
                    "Newly incorporated companies or those wanting full-service compliance",
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
                    service: "Auditor Sourcing & Engagement",
                    price: "₹1,999",
                    desc: "Connect with qualified CAs in your city, coordinate engagement terms",
                  },
                  {
                    service: "DSC for Director",
                    price: "₹1,499/DSC",
                    desc: "Class 3 DSC procurement with 2-year validity",
                  },
                  {
                    service: "DSC for Auditor",
                    price: "₹1,499/DSC",
                    desc: "Class 3 DSC for auditor (individual or firm partner)",
                  },
                  {
                    service: "AOC-4 Financial Statements Filing",
                    price: "₹2,999",
                    desc: "E-filing of FY 2024-25 financials with MCA",
                  },
                  {
                    service: "MGT-7 Annual Return Filing",
                    price: "₹2,499",
                    desc: "E-filing of FY 2024-25 annual return",
                  },
                  {
                    service: "Annual Compliance Package",
                    price: "₹9,999/year",
                    desc: "ADT-1 + AOC-4 + MGT-7 + Board/AGM support for FY 2025-26",
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
                  name: "Rajesh Verma, Director",
                  company: "Skyline Infra Pvt Ltd",
                  location: "Noida, UP",
                  text: "We missed our ADT-1 deadline last year and paid heavy penalties. This year, Taxvio sent us reminders 10 days before the AGM, prepared the resolution, coordinated with our auditor, and filed ADT-1 within 3 days of our AGM. Zero stress, zero penalties. Highly recommend for compliance peace of mind.",
                },
                {
                  name: "Priya Joshi, Company Secretary",
                  company: "GreenTech Solutions Pvt Ltd",
                  location: "Meerut, UP",
                  text: "Our auditor didn't have a valid peer review certificate, which we discovered only 2 days before the ADT-1 deadline. Taxvio's team immediately sourced a new qualified auditor, obtained consent and eligibility certificates, and filed ADT-1 on time. They saved us from a compliance disaster.",
                },
                {
                  name: "Anil Sharma, CFO",
                  company: "Paramount Logistics Pvt Ltd",
                  location: "Ghaziabad, UP",
                  text: "We used Taxvio's Complete package for our first year of operations — they handled DSC procurement, auditor appointment, AOC-4, MGT-7, and all Board/AGM coordination. Made our first annual compliance cycle completely hassle-free. Worth every rupee for a new company.",
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
              ADT-1 Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong>{" "}
              and provides online ADT-1 statutory auditor appointment filing
              services for companies across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote handling with auditor
              coordination, resolution drafting, and MCA e-filing.
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
                  desc: "Filing of FY 2024-25 audited financials",
                },
                {
                  title: "MGT-7 Annual Return",
                  icon: "📋",
                  link: "/serviceslist/roc/mgt-7-filing",
                  desc: "Annual return filing for FY 2024-25",
                },
                {
                  title: "DIR-3 KYC",
                  icon: "👤",
                  link: "/serviceslist/roc/dir-3-kyc",
                  desc: "Director KYC compliance (annual)",
                },
                {
                  title: "Annual Compliance Package",
                  icon: "📦",
                  link: "/serviceslist/roc/annual-compliance",
                  desc: "Complete FY 2025-26 compliance support",
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
                    FY 2025-26 Compliance Alert
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File ADT-1 Before the Deadline — Avoid Penalties!
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get auditor consent, eligibility verification, Board/AGM
                    resolution drafting, and complete ADT-1 e-filing handled by
                    experts. File within 15 days of your AGM to stay compliant
                    and penalty-free. Starting ₹2,999 with CA & CS support.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File ADT-1 Now — ₹2,999
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
      q: "Can a company appoint any CA as its statutory auditor?",
      a: "Not any CA — only a qualified Chartered Accountant holding a valid certificate of practice from ICAI and meeting the eligibility criteria under Section 141 can be appointed as a statutory auditor. The CA must NOT be disqualified under Section 141(3) — i.e., must not be an officer or employee of the company, must not be indebted to the company for more than ₹5 lakh, must not be a relative of a director, must not hold any security or interest in the company (with minor exceptions), and must not have provided certain non-audit services to the company. Additionally, for companies with paid-up capital ≥ ₹10 crore or borrowings ≥ ₹50 crore, listed companies, and government companies, the auditor (individual or audit firm partner) must hold a valid peer review certificate from ICAI. The auditor must also confirm they have not exceeded the maximum audit limit prescribed under Section 141(3)(g) — 20 companies for individuals, 60 companies for firms with up to 20 partners. Taxvio verifies all these eligibility criteria before coordinating auditor appointment.",
    },
    {
      q: "What is the difference between first auditor appointment and annual reappointment in ADT-1?",
      a: "The TYPE of appointment and the authority approving it differ: (1) First Auditor Appointment (for newly incorporated companies): The first auditor must be appointed by the Board of Directors within 30 days of the company's incorporation, and the appointment is valid until the conclusion of the first Annual General Meeting (or until 3 months from the financial year-end, whichever is earlier). ADT-1 must be filed within 15 days of the Board meeting. (2) Annual Appointment/Reappointment (for existing companies): The auditor is appointed or reappointed at the Annual General Meeting (AGM) every year, and the appointment is valid for one financial year (from the conclusion of that AGM until the conclusion of the next AGM). ADT-1 must be filed within 15 days of the AGM. (3) Casual Vacancy Filling: If the existing auditor resigns, is removed, or becomes disqualified during the year, the Board must fill the casual vacancy by appointing a new auditor, and ADT-1 must be filed within 15 days of the Board meeting. In all cases, the form ADT-1 is the same, but the 'type of appointment' field indicates whether it is a first auditor, reappointment, or casual vacancy.",
    },
    {
      q: "Do small companies and one-person companies need to file ADT-1?",
      a: "YES, in most cases. Small companies (defined under Section 2(85) as companies with paid-up capital ≤ ₹4 crore and turnover ≤ ₹40 crore) are still required to appoint a statutory auditor and file ADT-1, unless they are dormant and meet specific conditions for audit exemption under Rule 4 of the Companies (Audit and Auditors) Rules, 2014. One-person companies (OPCs) with annual turnover ≥ ₹2 crore or outstanding borrowings ≥ ₹1 crore MUST appoint an auditor and file ADT-1. Smaller OPCs (turnover < ₹2 crore and borrowings < ₹1 crore) may be exempt from mandatory audit under certain conditions, but if they choose to appoint an auditor voluntarily (for lender/investor requirements or for better financial discipline), they must still file ADT-1. The general rule is: if you are required to (or choose to) appoint a statutory auditor, ADT-1 must be filed within 15 days of the appointment, regardless of company size or type (with very limited exceptions for dormant companies).",
    },
    {
      q: "What happens if the auditor resigns mid-year or is removed?",
      a: "If the statutory auditor resigns or is removed during the financial year (before the next AGM), a CASUAL VACANCY arises. The procedure is: (1) Auditor Resignation: The auditor must file Form ADT-3 (Notice of Resignation) with the Registrar and provide a statement of circumstances leading to resignation. The company must also file ADT-3 within 30 days of receiving the resignation. (2) Filling the Casual Vacancy: The Board of Directors must appoint a new auditor to fill the casual vacancy as soon as practicable (ideally within 30 days). The new auditor holds office until the conclusion of the next AGM. (3) Filing ADT-1 for Casual Vacancy: Within 15 days of the Board meeting where the new auditor is appointed, the company must file Form ADT-1, selecting 'Casual Vacancy' as the type of appointment, and attaching the new auditor's consent, eligibility certificate, and Board resolution. (4) Auditor Removal: If the company wants to remove the auditor (other than at the AGM), it must follow the special notice procedure under Section 140, obtain approval from the Central Government (or Tribunal), and then appoint a new auditor and file ADT-1. Taxvio provides full support for casual vacancy filling and ADT-1/ADT-3 coordination in such scenarios.",
    },
    {
      q: "Can the same auditor be appointed for multiple years at once, or must ADT-1 be filed every year?",
      a: "For private limited companies and most unlisted public companies, the auditor can be REAPPOINTED year after year without any rotation requirement, but ADT-1 must still be filed EVERY YEAR within 15 days of the AGM where the reappointment is approved, even if the same auditor is being reappointed. The appointment is for ONE FINANCIAL YEAR at a time (from one AGM to the next AGM), so a fresh ADT-1 filing is mandatory each year. You cannot file a single ADT-1 covering multiple years in advance. For listed companies and certain public companies subject to mandatory auditor rotation under Section 139(2), the auditor can be appointed for a maximum tenure (5 consecutive years for individuals, 10 consecutive years for firms), but even in these cases, a separate ADT-1 must be filed each year at the time of reappointment at the AGM, until the maximum tenure is reached and rotation becomes mandatory. Taxvio provides annual reminder and filing services to ensure ADT-1 is filed on time every year, avoiding repeated penalties.",
    },
    {
      q: "Is there any penalty waiver or condonation available if we miss the ADT-1 deadline?",
      a: "As of FY 2025-26, there is NO automatic penalty waiver for delayed ADT-1 filing — penalties under Section 139(6) and general penalty provisions apply immediately upon breach of the 15-day deadline. However, the Ministry of Corporate Affairs (MCA) has, in the past, announced limited-time compliance windows or condonation schemes (such as the Companies Fresh Start Scheme, CFSS) that allow companies to file overdue forms with reduced penalties or partial waiver, subject to specific conditions and timelines. These schemes are announced sporadically and for limited periods only (typically a few months), so companies should not rely on them for routine compliance. The best practice is to file ADT-1 ON TIME, within 15 days of the Board meeting or AGM, to avoid penalties altogether. If you have already missed the deadline, Taxvio can assist with immediate filing to minimize penalty accumulation and check for any active MCA condonation schemes that may reduce the penalty burden.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — ADT-1 Auditor Appointment
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