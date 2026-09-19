// app/serviceslist/roc/csr-1-registration/Csr1RegistrationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CSR-1 Registration Services - MCA CSR Portal Registration for NGOs, Trusts & Section 8 Companies",
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
    "Professional CSR-1 registration services under Rule 4 of the Companies (Corporate Social Responsibility Policy) Rules, 2014, for NGOs, registered public trusts, registered societies, and Section 8 companies to become eligible for receiving corporate CSR funding. Includes eligibility verification against the 3-year track record and 12A/80G requirements, CSR-1 form preparation and filing, digital signature coordination for the authorized signatory and certifying professional, and registration acknowledgement support to obtain a unique CSR Registration Number. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "CSR-1 Registration",
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
      name: "What is Form CSR-1 and who needs to file it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form CSR-1 is the electronic registration form prescribed under Rule 4 of the Companies (Corporate Social Responsibility Policy) Rules, 2014, which every entity intending to undertake Corporate Social Responsibility (CSR) activities on behalf of companies must file with the Registrar of Companies. This applies to Section 8 companies, registered public trusts, and registered societies (with valid 12A and 80G registration under the Income Tax Act, 1961), as well as entities established by an Act of Parliament, State legislature, or the Central/State Government. Filing CSR-1 is mandatory for any such entity to be eligible to receive CSR funding from companies with effect from 1st April 2021.",
      },
    },
    {
      "@type": "Question",
      name: "Is 12A and 80G registration mandatory before filing CSR-1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For registered public trusts and registered societies (that are not established by the Central or State Government), valid registration under Section 12A and Section 80G of the Income Tax Act, 1961 is a mandatory precondition for CSR-1 eligibility. Entities established by an Act of Parliament, State legislature, or directly by the government are generally exempt from this requirement. Section 8 companies must also independently hold valid 12A and 80G registration to be eligible, unless established directly by the government.",
      },
    },
    {
      "@type": "Question",
      name: "What is the '3-year track record' requirement for CSR-1 registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Rule 4(2) of the CSR Policy Rules, 2014, an entity (other than one established directly by the Central or State Government) must have an established track record of at least 3 years in undertaking similar activities to be eligible for CSR-1 registration. This is typically evidenced through audited financial statements, annual reports, or activity records demonstrating the entity's charitable or developmental work over the preceding 3 financial years.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function Csr1RegistrationClient() {
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

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🤝 Want to Receive Corporate CSR Funding? Register Your NGO / Trust on the MCA CSR-1 Portal Today!
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
              <span className="text-white">CSR-1 Registration</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🤝 CSR Eligibility Registration
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  CSR-1
                  <br />
                  <span className="text-[#7ecbf0]">Registration Service</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Want your{" "}
                  <strong className="text-white">
                    NGO, trust, society, or Section 8 company
                  </strong>{" "}
                  to become eligible for{" "}
                  <strong className="text-white">
                    corporate CSR funding
                  </strong>
                  ? Register on the{" "}
                  <strong className="text-white">MCA CSR-1 portal</strong>{" "}
                  under{" "}
                  <strong className="text-white">
                    Rule 4 of the Companies (Corporate Social Responsibility
                    Policy) Rules, 2014
                  </strong>
                  . Without a valid{" "}
                  <strong className="text-white">
                    CSR Registration Number
                  </strong>
                  , companies{" "}
                  <strong className="text-white">
                    cannot legally route their CSR spending to your
                    organization
                  </strong>
                  . <strong className="text-white">Taxvio</strong> handles
                  the complete registration —{" "}
                  <strong className="text-white">
                    eligibility verification, CSR-1 form preparation &
                    filing, digital signature coordination, and registration
                    acknowledgement support
                  </strong>{" "}
                  — so your organization is{" "}
                  <strong className="text-white">
                    CSR-funding ready
                  </strong>{" "}
                  in <strong className="text-white">5-7 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Register Now — ₹4,999 →
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
                    "✅ 5-7 Days Registration",
                    "✅ Unique CSR Registration Number",
                    "✅ CA/CS Certification Handled",
                    "✅ CA & CS Supported",
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
                    ["🏢", "For Section 8 companies, trusts & societies"],
                    ["📜", "Valid 12A & 80G registration usually needed"],
                    ["📅", "3-year track record requirement"],
                    ["⏰", "Registration time: 5-7 working days"],
                    ["🖊️", "CA/CS/CMA certification mandatory"],
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
              { number: "250+", label: "CSR-1 Registrations Filed", icon: "🤝" },
              { number: "5-7 Days", label: "Average Timeline", icon: "⏰" },
              { number: "3 Years", label: "Track Record Required", icon: "📅" },
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
              "✔ CSR-1 Filing Experts",
              "✔ 12A/80G Verification Support",
              "✔ CA & CS Team",
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
          {/* WHAT IS CSR-1 */}
          <section id="what-is-csr1">
            <SectionLabel text="Understanding CSR-1 Registration" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is CSR-1 Registration?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>CSR-1 Registration</strong> is the mandatory
                  process by which{" "}
                  <strong>
                    NGOs, registered public trusts, registered societies, and
                    Section 8 companies
                  </strong>{" "}
                  register themselves with the Registrar of Companies (MCA)
                  under{" "}
                  <strong>
                    Rule 4 of the Companies (Corporate Social Responsibility
                    Policy) Rules, 2014
                  </strong>{" "}
                  to become{" "}
                  <strong>
                    eligible to receive Corporate Social Responsibility (CSR)
                    funding from companies
                  </strong>
                  .
                </p>
                <p>
                  With effect from{" "}
                  <strong>1st April 2021</strong>, every company undertaking
                  CSR activities must route its CSR spending{" "}
                  <strong>
                    only to implementing agencies that hold a valid CSR
                    Registration Number
                  </strong>{" "}
                  obtained by filing Form CSR-1. Without this registration,
                  an NGO or Section 8 company cannot legally be engaged as an
                  implementing partner for a company's CSR budget, regardless
                  of its charitable credentials or past work.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🤝 Key Features of CSR-1 Registration
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Unique CSR Registration Number",
                        desc: "On successful filing, the Registrar generates a unique alphanumeric CSR Registration Number, which companies verify before routing CSR funds to the entity.",
                      },
                      {
                        title: "Eligible Entity Types",
                        desc: "Section 8 companies, registered public trusts, and registered societies (with valid 12A/80G registration), and entities established by an Act of Parliament, State legislature, or the government.",
                      },
                      {
                        title: "3-Year Track Record",
                        desc: "Entities not established directly by the government must demonstrate at least 3 years of established track record undertaking similar charitable or developmental activities.",
                      },
                      {
                        title: "12A & 80G Registration",
                        desc: "Registered trusts and societies (and typically Section 8 companies) must hold valid registration under Section 12A and Section 80G of the Income Tax Act, 1961 as a precondition.",
                      },
                      {
                        title: "Dual Digital Certification",
                        desc: "Form CSR-1 must be digitally signed by an authorized representative of the entity (director/trustee/CEO/CS/authorized member) AND certified by a practicing Chartered Accountant, Company Secretary, or Cost Accountant.",
                      },
                      {
                        title: "One-Time Registration",
                        desc: "CSR-1 is filed once and the CSR Registration Number remains valid for the entity's operations, subject to keeping underlying registrations (12A/80G) current and reporting requirements met.",
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
                    ✅ Eligibility & Requirements (FY 2025-26)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Eligible Entity Categories
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • A <strong>Section 8 company</strong> established
                          by the company itself, or its holding/subsidiary/
                          associate company, or an unrelated company
                        </li>
                        <li>
                          • A <strong>registered public trust</strong> with
                          valid 12A and 80G registration
                        </li>
                        <li>
                          • A <strong>registered society</strong> with valid
                          12A and 80G registration
                        </li>
                        <li>
                          • An entity established under an{" "}
                          <strong>Act of Parliament</strong> or a{" "}
                          <strong>State legislature</strong>
                        </li>
                        <li>
                          • An entity established by the{" "}
                          <strong>
                            Central Government or State Government
                          </strong>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Core Preconditions
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>3-year established track record</strong>{" "}
                          of undertaking similar activities (unless
                          government-established)
                        </li>
                        <li>
                          • <strong>Valid 12A & 80G registration</strong>{" "}
                          under the Income Tax Act, 1961
                        </li>
                        <li>
                          • <strong>PAN of the entity</strong> and complete
                          governing body details
                        </li>
                        <li>
                          • <strong>Certification</strong> by a practicing
                          CA, CS, or CMA
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ Entity Types — Comparison
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Entity Type</th>
                          <th className="p-2 text-left">Governing Law</th>
                          <th className="p-2 text-left">12A/80G Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            entity: "Section 8 Company",
                            law: "Companies Act, 2013",
                            req: "Yes",
                          },
                          {
                            entity: "Registered Public Trust",
                            law: "Trust laws / State Acts",
                            req: "Yes",
                          },
                          {
                            entity: "Registered Society",
                            law: "Societies Registration Act, 1860",
                            req: "Yes",
                          },
                          {
                            entity: "Statutory Body (Act of Parliament/State)",
                            law: "Specific enabling Act",
                            req: "Generally not required",
                          },
                          {
                            entity: "Government-Established Entity",
                            law: "Government order/notification",
                            req: "Not required",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.entity}</td>
                            <td className="p-2 text-gray-600">{row.law}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.req}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Advantages of CSR-1 Registration
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Access to Corporate CSR Budgets",
                        desc: "Companies with mandatory CSR spending obligations under Section 135 can only fund CSR-1-registered entities, opening a significant and recurring funding stream.",
                      },
                      {
                        title: "Enhanced Credibility",
                        desc: "A valid CSR Registration Number signals a verified, compliant organization to potential corporate partners, foundations, and donors evaluating due diligence.",
                      },
                      {
                        title: "Broader Partnership Opportunities",
                        desc: "Many CSR foundations and corporate giving programs specifically shortlist only CSR-1-registered NGOs and trusts for grant applications and partnerships.",
                      },
                      {
                        title: "One-Time Compliance Effort",
                        desc: "Unlike annual filings, CSR-1 registration is a one-time process (subject to maintaining underlying 12A/80G validity), providing long-term eligibility once completed.",
                      },
                      {
                        title: "Supports Multi-Year CSR Projects",
                        desc: "Registered entities can be engaged for ongoing or multi-year CSR implementation projects, which many companies prefer for sustained impact.",
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
                    ⚠️ Points to Keep in Mind
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Not a Guarantee of Funding: CSR-1 registration only makes an entity ELIGIBLE to receive CSR funds — it does not guarantee that any specific company will fund it.",
                      "3-Year History Required: Newly formed entities without an established 3-year track record generally cannot register until this threshold is met.",
                      "12A/80G Must Stay Current: Under the revised Income Tax regime, 12A and 80G registrations require periodic renewal — allowing these to lapse can jeopardize CSR-1 eligibility.",
                      "Governing Body Accuracy Matters: Incorrect or outdated details of trustees/directors/governing body members in the filing can lead to processing delays or future compliance mismatches.",
                      "Professional Certification Is Mandatory: The form cannot be filed without certification by a practicing CA, CS, or CMA, adding a dependency on professional availability.",
                      "Separate from Section 8/Trust Registration: CSR-1 does not replace the entity's underlying incorporation or trust/society registration — it is an additional eligibility filing.",
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
                    🎯 When to Register for CSR-1?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    CSR-1 registration is essential if you want to:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "Receive CSR funding from companies for your NGO, trust, or Section 8 company",
                      "Get shortlisted for corporate CSR grant programs and partnerships",
                      "Formalize your organization's eligibility ahead of pitching to potential corporate donors",
                      "Expand fundraising beyond individual donations into structured corporate CSR budgets",
                      "Support multi-year implementation projects that require verified CSR eligibility",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Not Yet Eligible if:</strong> Your organization
                    is less than 3 years old (and not government-established)
                    or does not yet hold valid 12A and 80G registration — in
                    such cases, these must be secured first before CSR-1 can
                    be filed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* REGISTRATION PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              CSR-1 Registration Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete CSR-1 registration process — from eligibility check
                to your CSR Registration Number:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Eligibility Verification",
                    description:
                      "Confirm the entity type (Section 8 company, registered public trust, registered society, or statutory body), verify at least 3 years of established track record in similar activities (unless government-established), and check the validity of existing 12A and 80G registration under the Income Tax Act, 1961.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Document Compilation",
                    description:
                      "Gather core documents: PAN of the entity, Section 8 license / registered trust deed / society registration certificate, 12A and 80G registration certificates, governing body/board of trustees details (names, addresses, PAN, DIN where applicable), and evidence of the 3-year track record (audited financial statements, annual reports, or activity records).",
                    duration: "3-5 days",
                  },
                  {
                    step: 3,
                    title: "Digital Signature Coordination",
                    description:
                      "Obtain or verify the Digital Signature Certificate (DSC) of the authorized representative who will sign the form on behalf of the entity — a director, trustee, chairperson, CEO, Company Secretary, or authorized member. Also coordinate the DSC of the certifying practicing professional (CA/CS/CMA) required for the form.",
                    duration: "2-4 days",
                  },
                  {
                    step: 4,
                    title: "Preparation of Form CSR-1",
                    description:
                      "The form is prepared with complete details: entity name, registered address, PAN, type of entity and applicable registration number, date of registration, main objects, details of every governing body member (name, designation, DIN/PAN, address), and 12A/80G registration particulars, along with the required self-declaration confirming eligibility.",
                    duration: "2-3 days",
                  },
                  {
                    step: 5,
                    title: "Digital Signing & Professional Certification",
                    description:
                      "The form is digitally signed by the entity's authorized representative and then certified by a practicing Chartered Accountant, Company Secretary, or Cost Accountant, who verifies the accuracy of the details furnished and the entity's eligibility.",
                    duration: "1-2 days",
                  },
                  {
                    step: 6,
                    title: "Filing of Form CSR-1 with the Registrar",
                    description:
                      "The completed and certified Form CSR-1 is filed electronically with the Registrar of Companies through the MCA portal, along with the applicable government fee and supporting attachments.",
                    duration: "Same day as preparation completion",
                  },
                  {
                    step: 7,
                    title: "Registrar Processing",
                    description:
                      "The Registrar processes the filing and verifies the submitted details and attachments. Since CSR-1 is largely a straight-through electronic process, approval is generally quicker than incorporation-related filings, barring discrepancies requiring clarification.",
                    duration: "2-4 working days",
                  },
                  {
                    step: 8,
                    title: "Generation of CSR Registration Number",
                    description:
                      "On successful processing, a unique alphanumeric CSR Registration Number is generated and displayed on the acknowledgement. This number is what companies verify before routing CSR funds to the entity, and should be prominently referenced in future CSR partnership discussions and proposals.",
                    duration: "Immediately upon approval",
                  },
                  {
                    step: 9,
                    title: "Registration Acknowledgement Support",
                    description:
                      "Download and retain the CSR-1 acknowledgement and the generated CSR Registration Number for the entity's records. This documentation should be readily available whenever a corporate CSR partner requests proof of eligibility during their own due diligence process.",
                    duration: "Same day as approval",
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
                  <strong>5-7 working days</strong> from document submission
                  to receiving the CSR Registration Number. Breakdown:
                  eligibility check & document compilation (3-5 days) + DSC
                  coordination (2-4 days, can run in parallel) + form
                  preparation, signing & certification (3-5 days) + Registrar
                  processing (2-4 days). Delays typically stem from
                  incomplete governing body details or lapsed 12A/80G status.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for CSR-1 Registration
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Core Entity Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card of the entity",
                    "Section 8 company licence / Certificate of Incorporation, OR",
                    "Registered Trust Deed, OR",
                    "Society Registration Certificate (as applicable)",
                    "Memorandum & Articles of Association / Trust Deed / Bye-laws",
                    "Registered office address proof",
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
                  Tax Registration Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Section 12A registration certificate",
                    "Section 80G registration certificate",
                    "Latest Income Tax Return acknowledgment",
                    "Audited financial statements for the last 3 years",
                    "Annual reports for the last 3 years (activity evidence)",
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
                  Governing Body Details
                </p>
                <ul className="space-y-3">
                  {[
                    "Names of all directors/trustees/governing body members",
                    "PAN and, where applicable, DIN of each member",
                    "Address and designation of each governing body member",
                    "Email ID and mobile number of the authorized representative",
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
                  Filing & Certification Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "DSC of the authorized representative filing the form",
                    "DSC of the certifying practicing professional (CA/CS/CMA)",
                    "Self-declaration of eligibility",
                    "Board/trustee resolution authorizing the CSR-1 filing (recommended)",
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
                  "Entity type (Section 8 company / trust / society / statutory body)",
                  "Date of establishment/incorporation",
                  "Summary of the entity's main charitable/developmental objects",
                  "Description of similar activities undertaken over the last 3 years",
                  "Current 12A and 80G registration validity/expiry details",
                  "Registered office address for jurisdictional determination",
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
              Common Mistakes in CSR-1 Registration
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                CSR-1 has specific eligibility and documentation requirements
                — avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Filing Without Valid 12A & 80G Registration",
                    icon: "📜",
                    problem:
                      "Applying for CSR-1 while the entity's 12A or 80G registration has lapsed, is pending renewal, or was never obtained. Since these registrations require periodic renewal under the current Income Tax regime, entities sometimes discover a lapse only at the time of CSR-1 filing, causing delays or rejection.",
                    solution:
                      "Verify the current validity of 12A and 80G registration BEFORE initiating CSR-1 filing, and renew promptly if nearing expiry or already lapsed. Taxvio checks registration status as the first step of the engagement.",
                  },
                  {
                    mistake: "Insufficient Evidence of 3-Year Track Record",
                    icon: "📅",
                    problem:
                      "Submitting the eligibility declaration without adequate supporting documentation — audited financials, annual reports, or activity records — demonstrating at least 3 years of established work in similar activities. Weak or missing evidence can lead to Registrar queries or rejection.",
                    solution:
                      "Compile audited financial statements and annual reports covering the full 3-year period before filing, clearly showing the entity's ongoing charitable or developmental activities. Taxvio helps organize this evidence in the required format.",
                  },
                  {
                    mistake: "Name/Detail Mismatches with PAN or Registration Certificate",
                    icon: "🔤",
                    problem:
                      "Entering the entity's name, address, or registration details in Form CSR-1 that don't exactly match the PAN card or the underlying Section 8 licence / trust deed / society certificate. Even minor discrepancies (spelling, address formatting) commonly trigger Registrar queries.",
                    solution:
                      "Cross-verify every field in the form against the entity's PAN and registration documents before submission, ensuring exact consistency. Taxvio performs a detailed cross-check as part of form preparation.",
                  },
                  {
                    mistake: "Skipping Mandatory Professional Certification",
                    icon: "🖊️",
                    problem:
                      "Attempting to file Form CSR-1 without arranging certification by a practicing Chartered Accountant, Company Secretary, or Cost Accountant. This certification is a mandatory field in the form and the filing cannot be completed without it.",
                    solution:
                      "Engage a practicing CA, CS, or CMA early in the process and obtain their DSC-based certification before attempting to submit the form. Taxvio's packages include this professional certification as standard.",
                  },
                  {
                    mistake: "Incomplete Governing Body Details",
                    icon: "👥",
                    problem:
                      "Leaving out PAN, DIN, or address details for one or more directors/trustees/governing body members, or listing outdated members who have since resigned or been replaced. Incomplete or inaccurate governing body information is a common cause of processing delays.",
                    solution:
                      "Compile a complete, current list of all governing body members with their PAN, DIN (where applicable), address, and designation before form preparation begins. Taxvio verifies this list against the entity's latest records.",
                  },
                  {
                    mistake: "Not Updating Records After Governance Changes",
                    icon: "🔄",
                    problem:
                      "Failing to keep the entity's registration details current after a change in trustees, directors, or governing body composition. This can create mismatches during a corporate CSR partner's own due diligence, potentially delaying or jeopardizing funding discussions.",
                    solution:
                      "Maintain updated internal records of governance changes and ensure the entity's underlying registrations (12A/80G, Section 8 licence, trust deed amendments) reflect the current governing body at all times. Taxvio can advise on the appropriate update process when changes occur.",
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
              CSR-1 Registration Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive registration and compliance packages for NGOs,
              trusts, societies, and Section 8 companies:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹4,999",
                  popular: false,
                  features: [
                    "Eligibility verification",
                    "CSR-1 form preparation",
                    "Digital signature coordination for authorized signatory",
                    "Filing of Form CSR-1 with Registrar",
                    "Registration acknowledgement support",
                    "Email & phone support",
                  ],
                  limitations: [
                    "CA/CS/CMA certification fee billed separately",
                    "12A/80G status verification not included",
                    "Governing body documentation compilation not included",
                  ],
                  ideal:
                    "Entities that already have valid 12A/80G registration and organized governing body records",
                },
                {
                  name: "Standard",
                  price: "₹7,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "CA/CS/CMA certification coordination included",
                    "12A & 80G registration status verification",
                    "Governing body documentation compilation",
                    "3-year track record document review",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: [
                    "12A/80G renewal (if lapsed) offered as add-on",
                  ],
                  ideal:
                    "Most NGOs, trusts, and Section 8 companies applying for CSR-1 for the first time",
                },
                {
                  name: "Complete",
                  price: "₹12,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "12A/80G renewal assistance (if lapsed or nearing expiry)",
                    "3-year track record documentation compilation from source records",
                    "Governing body resolution drafting",
                    "Post-registration compliance guidance",
                    "Dedicated CA + CS team with end-to-end follow-up",
                  ],
                  limitations: [],
                  ideal:
                    "Entities needing full handholding, including 12A/80G renewal and documentation compilation",
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
                    service: "12A & 80G Registration / Renewal",
                    price: "₹14,999",
                    desc: "Fresh registration or renewal under the Income Tax Act",
                  },
                  {
                    service: "Trust Deed Drafting",
                    price: "₹9,999",
                    desc: "Draft a compliant trust deed for a new public trust",
                  },
                  {
                    service: "Society Registration",
                    price: "₹12,999",
                    desc: "Register a new society under the Societies Registration Act",
                  },
                  {
                    service: "Section 8 Company Incorporation",
                    price: "₹14,999",
                    desc: "Incorporate a new NGO as a Section 8 company",
                  },
                  {
                    service: "NGO Annual Compliance Package",
                    price: "₹19,999/year",
                    desc: "Annual filings, audit coordination, and ROC/IT compliance",
                  },
                  {
                    service: "Additional DSC",
                    price: "₹1,500/person",
                    desc: "For additional governing body members or certifying professionals",
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
                  name: "Anita Deshmukh, Trustee",
                  company: "Prerna Welfare Trust",
                  location: "Meerut, UP",
                  text: "We'd been running education programs for 5 years but had never registered for CSR-1, so companies kept turning us away for CSR partnerships. Taxvio verified our 12A/80G status, compiled our track record, and got our CSR Registration Number in about a week. We closed our first corporate CSR grant within two months of registering.",
                },
                {
                  name: "Rajiv Malhotra, Director",
                  company: "Udaan Foundation (Section 8 Company)",
                  location: "Noida, UP",
                  text: "Our 80G registration had actually lapsed without us realizing it, which would have blocked our CSR-1 filing. Taxvio caught this early, helped us renew it, and then completed the CSR-1 registration smoothly. Their Complete package handled everything from documentation to certification.",
                },
                {
                  name: "Sunita Chawla, Secretary",
                  company: "Asha Sewa Samiti",
                  location: "Ghaziabad, UP",
                  text: "As a registered society working in rural healthcare, we needed our governing body details compiled properly for CSR-1. Taxvio organized everything, coordinated the CA certification, and our registration went through without any Registrar queries. Very professional and responsive team.",
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
              CSR-1 Registration Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong>{" "}
              and provides online CSR-1 registration services for NGOs,
              trusts, societies, and Section 8 companies across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote handling with
              document collection, CA/CS certification coordination, and MCA
              filing.
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
              Other ROC & NGO Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Section 8 Company Registration",
                  icon: "🎗️",
                  link: "/serviceslist/roc/section-8-company",
                  desc: "NGO/Non-profit company registration",
                },
                {
                  title: "Annual ROC Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4 and other ROC compliance",
                },
                {
                  title: "Nidhi Company Registration",
                  icon: "🏦",
                  link: "/serviceslist/roc/nidhi-company-registration",
                  desc: "Mutual benefit society incorporation",
                },
                {
                  title: "Company Revival & Restoration",
                  icon: "⚖️",
                  link: "/serviceslist/roc/company-revival-restoration",
                  desc: "Restore a struck-off company via NCLT",
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
                    Become Eligible for Corporate CSR Funding
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Register for CSR-1 — Open the Door to CSR Partnerships
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get eligibility verification, CSR-1 form preparation &
                    filing, digital signature coordination, and registration
                    acknowledgement support handled end-to-end. Obtain your
                    CSR Registration Number in 5-7 working days. Starting
                    ₹4,999 with expert CA & CS team.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Register Now — ₹4,999
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
            href="https://wa.me/918937980366?text=Hi%2C%20I%20want%20to%20register%20for%20CSR-1"
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
              Need Help? Chat Now!
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
      q: "What is Form CSR-1 and who needs to file it?",
      a: "Form CSR-1 is the electronic registration form prescribed under Rule 4 of the Companies (Corporate Social Responsibility Policy) Rules, 2014, which every entity intending to implement CSR activities on behalf of companies must file with the Registrar. This applies to Section 8 companies, registered public trusts, registered societies (with valid 12A/80G registration), and entities established by an Act of Parliament, State legislature, or the government. Filing CSR-1 has been mandatory for CSR eligibility since 1st April 2021.",
    },
    {
      q: "Who is eligible to register for CSR-1?",
      a: "Eligible entities include: a Section 8 company established by the funding company itself, its group entities, or an unrelated company; a registered public trust with valid 12A and 80G registration; a registered society with valid 12A and 80G registration; and entities established under an Act of Parliament, State legislature, or by the Central/State Government. Except for government-established entities, applicants must also demonstrate at least 3 years of established track record in undertaking similar activities.",
    },
    {
      q: "Is 12A and 80G registration mandatory before filing CSR-1?",
      a: "For registered public trusts and registered societies not established by the government, valid 12A and 80G registration under the Income Tax Act, 1961 is a mandatory precondition. Section 8 companies must similarly hold valid 12A and 80G registration unless directly established by the government. If either registration has lapsed or was never obtained, it must be secured (or renewed) before CSR-1 can be filed.",
    },
    {
      q: "How long does it take to get a CSR Registration Number?",
      a: "On average, the complete process — from document compilation to receiving the CSR Registration Number — takes about 5-7 working days, assuming all documentation (12A/80G validity, governing body details, track record evidence) is in order. Since CSR-1 is largely a straight-through electronic filing, approval is typically quicker than incorporation-type filings, though discrepancies in submitted details can extend the timeline.",
    },
    {
      q: "Can a newly formed Section 8 company without 3 years of history register for CSR-1?",
      a: "Generally, no — Rule 4(2) requires entities (other than those established directly by the government) to have an established track record of at least 3 years in undertaking similar activities. A newly incorporated Section 8 company without this history would typically need to wait until it accumulates the required track record, supported by audited financial statements and activity records, before it becomes eligible to file CSR-1.",
    },
    {
      q: "What is the cost of CSR-1 registration?",
      a: "Professional service fees for CSR-1 registration typically start around ₹4,999 for straightforward cases where the entity already holds valid 12A/80G registration and has organized governing body records. Additional costs may apply for CA/CS/CMA certification, 12A/80G renewal (if lapsed), or compiling multi-year track record documentation from scratch — Taxvio's packages range from ₹4,999 to ₹12,999 depending on the level of support required.",
    },
    {
      q: "Does CSR-1 registration guarantee CSR funding from companies?",
      a: "No. CSR-1 registration only makes an entity ELIGIBLE to be considered by companies for their CSR spending — it is a mandatory precondition, not a guarantee of funding. Companies independently evaluate potential implementing partners based on their track record, project proposals, geographic focus, and alignment with the company's CSR policy, so registered entities still need to actively pursue and pitch for CSR partnerships.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — CSR-1 Registration
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