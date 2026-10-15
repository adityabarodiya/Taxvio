// app/serviceslist/roc/llp-closure/LlpClosureClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LLP Closure / Strike Off Services - Form 24 Filing & MCA Deregistration",
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
    "Professional assistance for winding up and striking off an inactive or non-operational Limited Liability Partnership (LLP) from the MCA register under Rule 37 of the LLP (Winding up and Dissolution) Rules, 2012, including eligibility assessment, partner consent documentation, NIL statement of accounts certification, affidavit and indemnity bond drafting, pending return clearance, Form 24 preparation and filing, and closure confirmation follow-up. Complete end-to-end support for defunct LLPs and non-operational partnerships to formally close and avoid accumulating non-filing penalties. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "LLP Closure / Strike Off",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "5999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "5999",
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
      name: "What is Form 24 and when can it be used to close an LLP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 24 is the application prescribed under Rule 37 of the LLP (Winding up and Dissolution) Rules, 2012 for striking off the name of a defunct LLP from the register maintained by the Registrar of LLPs. It can be used where the LLP has either not commenced any business since incorporation, or has ceased to carry on business or commercial operations for a period of at least one year, and has no outstanding liabilities. This is the standard voluntary route for closing a genuinely inactive LLP without the need for a formal winding-up process.",
      },
    },
    {
      "@type": "Question",
      name: "Can an LLP with pending liabilities be closed using Form 24?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NO. Form 24 strike-off is available only for LLPs with NIL assets and NIL liabilities as on the date of the statement of accounts filed with the application. If the LLP has outstanding loans, dues to creditors, or unresolved obligations, these must be settled and closed BEFORE filing Form 24. If the LLP has significant unresolved liabilities or disputes, a formal winding-up process (voluntary or through the NCLT) rather than a simple Form 24 strike-off may be the appropriate route — Taxvio can assess which applies to your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to file pending Form 8 and Form 11 before closing the LLP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends. If the LLP never commenced any business since incorporation, pending annual filings (Form 8 - Statement of Account & Solvency, and Form 11 - Annual Return) are generally not required before applying for strike-off. However, if the LLP did commence business at some point and subsequently ceased operations, all overdue Form 8 and Form 11 filings up to the date the LLP ceased carrying on business must typically be completed before Form 24 can be filed, along with a certified NIL statement of accounts for the period thereafter.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function LlpClosureClient() {
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
          🗂️ Inactive LLP Racking Up Penalties? Close It Legally Before Non-Filing Fees Pile Up!
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
              <span className="text-white">LLP Closure / Strike Off</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🗂️ Entity Closure
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  LLP Closure
                  <br />
                  <span className="text-[#7ecbf0]">/ Strike Off Service</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Running an{" "}
                  <strong className="text-white">
                    inactive or non-operational LLP
                  </strong>{" "}
                  that's still racking up{" "}
                  <strong className="text-white">
                    late filing penalties
                  </strong>
                  ? Legally close it through{" "}
                  <strong className="text-white">
                    Form 24 strike-off
                  </strong>{" "}
                  under{" "}
                  <strong className="text-white">
                    Rule 37 of the LLP (Winding up and Dissolution) Rules,
                    2012
                  </strong>
                  . <strong className="text-white">Taxvio</strong> handles
                  the complete closure process —{" "}
                  <strong className="text-white">
                    Form 24 preparation & filing, partner consent
                    documentation, pending return clearance, and closure
                    confirmation follow-up
                  </strong>{" "}
                  — so you can{" "}
                  <strong className="text-white">
                    stop future compliance costs
                  </strong>{" "}
                  and formally deregister the entity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Close My LLP — ₹5,999 →
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
                    "✅ Form 24 Filing",
                    "✅ NIL Statement Certification",
                    "✅ Partner Consent Handled",
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
                    ["📄", "Form 24 under LLP Rules, 2012"],
                    ["🧾", "NIL assets & liabilities required"],
                    ["🗳️", "Consent of all partners needed"],
                    ["⏰", "Typical timeline: 3-4 months"],
                    ["🏦", "Bank account must be closed first"],
                    ["💼", "Starting fee: ₹5,999"],
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
              { number: "300+", label: "LLPs Closed", icon: "🗂️" },
              { number: "3-4 Months", label: "Average Timeline", icon: "⏰" },
              { number: "NIL", label: "Assets & Liabilities Required", icon: "🧾" },
              { number: "₹5,999", label: "Starting Fee", icon: "💼" },
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
              "✔ Form 24 Filing Experts",
              "✔ NIL Statement Coordination",
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
          {/* WHAT IS LLP CLOSURE */}
          <section id="what-is-closure">
            <SectionLabel text="Understanding LLP Closure" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is LLP Closure / Strike Off?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>LLP Closure / Strike Off</strong> is the formal
                  process of removing a{" "}
                  <strong>defunct or non-operational LLP</strong> from the
                  register maintained by the Registrar of LLPs, under{" "}
                  <strong>
                    Rule 37 of the LLP (Winding up and Dissolution) Rules,
                    2012
                  </strong>
                  . It is the standard route for LLPs that have{" "}
                  <strong>
                    never commenced business, or have ceased operations
                  </strong>{" "}
                  and no longer wish to continue as a registered entity.
                </p>
                <p>
                  The closure is carried out by filing{" "}
                  <strong>Form 24</strong> with the Registrar of LLPs, along
                  with a{" "}
                  <strong>
                    NIL statement of accounts, partner consent, an affidavit,
                    and an indemnity bond
                  </strong>{" "}
                  from the designated partners. Once processed, the
                  Registrar publishes a strike-off notice, and the LLP's name
                  is permanently removed from the register — ending all
                  future compliance obligations and penalties associated
                  with the entity.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🗂️ Key Features of LLP Closure
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "NIL Assets & Liabilities Requirement",
                        desc: "Form 24 can only be filed where the LLP has NIL assets and NIL liabilities as on the date of a statement of accounts certified by a practicing Chartered Accountant, not older than 30 days from filing.",
                      },
                      {
                        title: "All Partners' Consent",
                        desc: "Every partner of the LLP must give their written consent to the closure — this is filed as an attachment to Form 24, along with an authorization for one or more designated partners to make the application.",
                      },
                      {
                        title: "Bank Account Must Be Closed",
                        desc: "The LLP must close all its bank accounts before applying for strike-off, and obtain a closure confirmation/certificate from the bank as supporting evidence.",
                      },
                      {
                        title: "Affidavit & Indemnity Bond",
                        desc: "The designated partners must file a notarized affidavit confirming the LLP has ceased business (or never commenced it) and has no liabilities, along with an indemnity bond protecting third parties against any future claims.",
                      },
                      {
                        title: "One-Month Public Notice",
                        desc: "Before striking off the name, the Registrar publishes a general notice — typically for one month — inviting objections from the public, creditors, or other stakeholders.",
                      },
                      {
                        title: "Permanent Dissolution",
                        desc: "Once struck off, the LLP is dissolved and ceases to exist as a legal entity from the date mentioned in the notice, ending all future statutory filing obligations.",
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
                        Before Filing Form 24
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>LLP has not commenced business</strong>{" "}
                          since incorporation, OR{" "}
                          <strong>
                            has ceased business/commercial operations for at
                            least 1 year
                          </strong>
                        </li>
                        <li>
                          • <strong>NIL assets and NIL liabilities</strong> as
                          on the date of the statement of accounts
                        </li>
                        <li>
                          • <strong>Bank account(s) closed</strong> with
                          closure confirmation obtained
                        </li>
                        <li>
                          • <strong>Consent of all partners</strong> for the
                          closure
                        </li>
                        <li>
                          • <strong>No pending litigation</strong> or
                          disputes involving the LLP
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Filing Requirements
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Pending Form 8 & Form 11</strong> (if the
                          LLP commenced business) filed up to the date
                          operations ceased
                        </li>
                        <li>
                          • <strong>Statement of Accounts</strong> certified
                          NIL by a CA, not older than 30 days from filing
                          Form 24
                        </li>
                        <li>
                          • <strong>Notarized affidavit</strong> and{" "}
                          <strong>indemnity bond</strong> from designated
                          partners
                        </li>
                        <li>
                          • <strong>Form 24</strong> filed with the
                          jurisdictional Registrar of LLPs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ Form 24 Strike-Off vs Formal Winding Up
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Feature</th>
                          <th className="p-2 text-left">Form 24 Strike-Off</th>
                          <th className="p-2 text-left">Formal Winding Up</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Applicable When",
                            f24: "NIL assets & liabilities, defunct LLP",
                            wu: "LLP has assets/liabilities to be settled",
                          },
                          {
                            feature: "Authority",
                            f24: "Registrar of LLPs",
                            wu: "NCLT (compulsory) or Registrar (voluntary)",
                          },
                          {
                            feature: "Process Complexity",
                            f24: "Simple, form-based",
                            wu: "Detailed, involves liquidator/creditors",
                          },
                          {
                            feature: "Typical Timeline",
                            f24: "3-4 months",
                            wu: "6-18 months or more",
                          },
                          {
                            feature: "Cost",
                            f24: "Lower",
                            wu: "Higher (liquidator & legal fees)",
                          },
                          {
                            feature: "Best For",
                            f24: "Inactive, debt-free LLPs",
                            wu: "LLPs with unresolved dues or disputes",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.feature}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.f24}
                            </td>
                            <td className="p-2 text-gray-600">{row.wu}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Advantages of Formal Closure
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Stops Accumulating Penalties",
                        desc: "An inactive LLP still accrues late filing fees for pending Form 8/Form 11 every year it remains on the register — formal closure stops this permanently.",
                      },
                      {
                        title: "Protects Designated Partners",
                        desc: "Designated partners of a non-compliant LLP can face penalties and potential disqualification from future directorships/designated partnerships — closure removes this ongoing exposure.",
                      },
                      {
                        title: "Clean Legal Record",
                        desc: "A formally dissolved LLP (versus one struck off involuntarily by the Registrar for non-filing) reflects a properly closed-out entity in the partners' compliance history.",
                      },
                      {
                        title: "Lower Cost Than Continued Compliance",
                        desc: "The one-time cost of closure is typically far lower than years of accumulating annual filing fees, penalties, and professional charges for a business that is no longer operating.",
                      },
                      {
                        title: "Frees Up the Name",
                        desc: "Once dissolved, the LLP's name becomes available for future use (subject to standard name-availability rules) if the partners wish to start a new venture.",
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
                      "Not for LLPs with Liabilities: If the LLP has outstanding loans, dues, or disputes, these must be settled first — Form 24 strike-off requires a NIL position.",
                      "Pending Returns May Still Be Needed: If the LLP ever commenced business, overdue Form 8/Form 11 filings up to the cessation date are usually required before applying.",
                      "Public Objection Window: The Registrar publishes a notice inviting objections before finalising the strike-off — this adds to the overall timeline.",
                      "Partner Consent Is Mandatory: All partners must consent; disagreement among partners can delay or block the closure application.",
                      "Records Should Be Retained: Even after dissolution, partners should retain LLP records, bank statements, and filings for future reference, as certain liabilities can still be pursued post-dissolution in specific circumstances.",
                      "Not Reversible Without NCLT: Once struck off, reviving the LLP requires an NCLT restoration application — closure should be a considered, final decision.",
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
                    🎯 When to Choose LLP Closure?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Form 24 strike-off is ideal if:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "The LLP has never commenced business, or has been inactive for a year or more",
                      "All partners agree there is no future plan to revive the LLP's operations",
                      "The LLP has no outstanding debts, contracts, or ongoing litigation",
                      "You want to stop accumulating annual non-filing penalties on a dormant entity",
                      "The LLP's bank account can be (or has been) closed with a NIL balance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Not Recommended if:</strong> The LLP has
                    unresolved assets, liabilities, or disputes — in such
                    cases, a formal winding-up process (rather than a simple
                    Form 24 strike-off) is the appropriate route. Taxvio can
                    advise which applies to your situation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CLOSURE PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              LLP Closure Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete Form 24 strike-off process — from eligibility check
                to closure confirmation:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Eligibility Assessment",
                    description:
                      "Confirm the LLP either never commenced business since incorporation, or has ceased business/commercial operations for at least 1 year, and has no pending litigation or disputes. Review the LLP's filing history (Form 8, Form 11) and financial position to determine if Form 24 strike-off is the right route, or whether a formal winding-up process is more appropriate.",
                    duration: "2-3 days",
                  },
                  {
                    step: 2,
                    title: "Settle Outstanding Liabilities & Cease Operations",
                    description:
                      "Clear any pending dues, loans, or obligations owed by the LLP, terminate ongoing contracts, and formally cease all business or commercial activity. The LLP must reach a genuine NIL assets and NIL liabilities position before proceeding.",
                    duration: "Varies (as required)",
                  },
                  {
                    step: 3,
                    title: "Close the LLP's Bank Account(s)",
                    description:
                      "Approach the bank(s) where the LLP holds current or savings accounts and formally close them, obtaining a closure confirmation letter or certificate. This is a mandatory precondition for Form 24 filing.",
                    duration: "5-10 days",
                  },
                  {
                    step: 4,
                    title: "Obtain Consent of All Partners",
                    description:
                      "Collect written consent from every partner of the LLP approving the closure, along with an authorization for one or more designated partners to sign and file the Form 24 application on behalf of the LLP.",
                    duration: "2-5 days",
                  },
                  {
                    step: 5,
                    title: "File Pending Form 8 & Form 11 (If Applicable)",
                    description:
                      "If the LLP had commenced business at any point, all overdue Statement of Account & Solvency (Form 8) and Annual Return (Form 11) filings up to the date business ceased must be completed with the Registrar of LLPs, along with any applicable additional fees.",
                    duration: "5-15 days (if pending returns exist)",
                  },
                  {
                    step: 6,
                    title: "Prepare NIL Statement of Accounts",
                    description:
                      "A statement of accounts disclosing NIL assets and NIL liabilities, certified by a practicing Chartered Accountant, is prepared. This statement must NOT be older than 30 days from the date of filing Form 24.",
                    duration: "2-4 days",
                  },
                  {
                    step: 7,
                    title: "Draft Affidavit & Indemnity Bond",
                    description:
                      "Designated partners execute a notarized affidavit confirming the LLP has ceased business (or never commenced it) and has no outstanding liabilities, along with an indemnity bond (individually or jointly by all/any designated partners) indemnifying against any losses or claims that may arise post-closure.",
                    duration: "2-3 days",
                  },
                  {
                    step: 8,
                    title: "Filing of Form 24 with Registrar of LLPs",
                    description:
                      "Form 24 is filed with the jurisdictional Registrar of LLPs, along with attachments: PAN of the LLP, statement of accounts (NIL, CA-certified), copy of the latest Income Tax Return acknowledgment (if applicable), consent of all partners, affidavit, indemnity bond, and bank account closure confirmation. The application is digitally signed by the designated partner(s).",
                    duration: "3-5 days to prepare & file",
                  },
                  {
                    step: 9,
                    title: "Registrar Processing & Public Notice",
                    description:
                      "The Registrar examines the application and, if satisfied, publishes a general notice — typically on the MCA website/Official Gazette for around one month — inviting objections from the public, creditors, or other interested parties before finalising the strike-off.",
                    duration: "~30 days (public notice period)",
                  },
                  {
                    step: 10,
                    title: "Strike Off & Dissolution",
                    description:
                      "If no objections are received (or objections are resolved), the Registrar strikes off the LLP's name from the register and publishes a notice of dissolution. From this date, the LLP ceases to exist as a legal entity and all future statutory compliance obligations end.",
                    duration: "Following the notice period",
                  },
                  {
                    step: 11,
                    title: "Closure Confirmation Follow-Up",
                    description:
                      "Confirm the LLP's status has been updated to 'Struck Off/Defunct' on the MCA portal, and retain copies of the Form 24 acknowledgment, strike-off notice, and all supporting documents for future reference by the partners.",
                    duration: "Within 15 days of strike off",
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
                  <strong>3-4 months</strong> on average from starting the
                  process to the LLP's name being struck off, primarily
                  driven by the Registrar's ~30-day public notice period.
                  Breakdown: preparation, bank closure & consent (2-3 weeks)
                  + pending return clearance if applicable (1-3 weeks) + Form
                  24 filing (3-5 days) + Registrar processing & public notice
                  (~4-8 weeks).
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for LLP Closure
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Core LLP Records
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card of the LLP",
                    "Certificate of Incorporation of the LLP",
                    "LLP Agreement (and any supplementary agreements)",
                    "Latest Form 11 & Form 8 filed (if any)",
                    "Copy of the latest Income Tax Return acknowledgment (if applicable)",
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
                  Partner Documentation
                </p>
                <ul className="space-y-3">
                  {[
                    "Written consent letters from all partners",
                    "PAN & Aadhaar of designated partners",
                    "Authorization for designated partner(s) to sign and file",
                    "Notarized affidavit from designated partners",
                    "Notarized indemnity bond from designated partners",
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
                  Financial Documentation
                </p>
                <ul className="space-y-3">
                  {[
                    "Statement of accounts (NIL) certified by a CA — not older than 30 days from filing",
                    "Bank account closure confirmation letter/certificate",
                    "Books of accounts or working papers to confirm NIL position",
                    "Proof of settlement of any prior liabilities",
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
                  If the LLP Commenced Business
                </p>
                <ul className="space-y-3">
                  {[
                    "All pending Form 8 filings up to cessation of business",
                    "All pending Form 11 filings up to cessation of business",
                    "Details of the date business operations ceased",
                    "Reasons/circumstances for ceasing operations",
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
                  "Date of incorporation and date business ceased (if applicable)",
                  "Confirmation that all partners agree to the closure",
                  "Registered office address for determining jurisdictional Registrar",
                  "Number of pending Form 8/Form 11 years, if applicable",
                  "Confirmation of NIL bank balance and account closure status",
                  "Any pending litigation or disputes involving the LLP",
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
              Common Mistakes in LLP Closure
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Form 24 has strict eligibility conditions — avoid these
                critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Filing While Liabilities Are Still Pending",
                    icon: "💸",
                    problem:
                      "Applying for closure while the LLP still has outstanding loans, dues to vendors, or unresolved obligations. Form 24 strictly requires a NIL assets and NIL liabilities position — filing with unsettled liabilities typically leads to rejection or, worse, future disputes after dissolution.",
                    solution:
                      "Fully settle and close out all liabilities BEFORE preparing the statement of accounts and filing Form 24. Where liabilities cannot be resolved, consider a formal winding-up route instead. Taxvio verifies the NIL position before proceeding with the filing.",
                  },
                  {
                    mistake: "Not Obtaining Consent from Every Partner",
                    icon: "🗳️",
                    problem:
                      "Filing the closure application without documented consent from all partners. Even one dissenting or unreachable partner can create legal complications or grounds for objection during the closure process.",
                    solution:
                      "Collect signed written consent from every partner before initiating the filing, and keep copies as part of the permanent record. Taxvio prepares standardized consent documentation for all partners to sign.",
                  },
                  {
                    mistake: "Using an Outdated Statement of Accounts",
                    icon: "📊",
                    problem:
                      "Filing Form 24 with a NIL statement of accounts that is older than the prescribed 30-day window from the filing date. This is a common technical defect that leads to Registrar queries and refiling delays.",
                    solution:
                      "Get the statement certified by a practicing Chartered Accountant as close as possible to the actual filing date, and file Form 24 promptly thereafter to stay within the 30-day limit. Taxvio coordinates the timing between CA certification and filing.",
                  },
                  {
                    mistake: "Not Closing the Bank Account First",
                    icon: "🏦",
                    problem:
                      "Applying for strike-off while the LLP's bank account remains open. An open account with any balance is inconsistent with the NIL position required for Form 24, and can delay or derail the application.",
                    solution:
                      "Formally close all LLP bank accounts and obtain a closure confirmation letter from the bank before filing Form 24. Ensure account balances are withdrawn or transferred appropriately beforehand.",
                  },
                  {
                    mistake: "Skipping Pending Form 8 / Form 11 Filings",
                    icon: "📋",
                    problem:
                      "Assuming that because the LLP is now inactive, past-due Form 8 and Form 11 filings can simply be skipped. If the LLP had commenced business, these pending filings (up to the date operations ceased) are generally required before Form 24 can be accepted.",
                    solution:
                      "Review the LLP's complete filing history and clear all pending Form 8/Form 11 returns up to the cessation date before applying for strike-off. Taxvio's Standard and Complete packages include this pending return clearance.",
                  },
                  {
                    mistake: "Not Retaining Records After Closure",
                    icon: "🗄️",
                    problem:
                      "Discarding LLP records, bank statements, and filings immediately after the strike-off is confirmed. Certain claims or verification requests can arise even after dissolution, and partners without access to records may struggle to respond.",
                    solution:
                      "Retain copies of the LLP Agreement, financial records, Form 24 acknowledgment, and the strike-off notice for several years after closure, even though the entity itself has ceased to exist. Taxvio provides a complete document package upon closure for this purpose.",
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
              LLP Closure Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive closure and compliance packages for inactive
              LLPs:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹5,999",
                  popular: false,
                  features: [
                    "Eligibility assessment",
                    "Partner consent documentation",
                    "NIL statement of accounts coordination with CA",
                    "Affidavit & indemnity bond drafting",
                    "Form 24 preparation & filing",
                    "Closure confirmation follow-up",
                    "Email & phone support",
                  ],
                  limitations: [
                    "Pending Form 8/Form 11 filing not included",
                    "Bank account closure coordination not included",
                    "Notarization charges billed separately",
                  ],
                  ideal:
                    "LLPs that never commenced business and have no pending returns",
                },
                {
                  name: "Standard",
                  price: "₹9,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Pending Form 8 & Form 11 filing for up to 1 year",
                    "Bank account closure coordination",
                    "Registrar query response support",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: [
                    "Additional pending years billed as add-on",
                  ],
                  ideal:
                    "LLPs that commenced business but became inactive within the last year",
                },
                {
                  name: "Complete",
                  price: "₹14,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Pending Form 8 & Form 11 filing for up to 3 years",
                    "Final Income Tax Return filing coordination",
                    "GST cancellation/surrender assistance (if registered)",
                    "Dedicated CA + CS team with end-to-end follow-up",
                    "Complete document package retained post-closure",
                  ],
                  limitations: [],
                  ideal:
                    "LLPs with multiple pending years of returns needing full handholding through closure",
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
                    service: "Additional Pending Year Filing",
                    price: "₹2,499/year",
                    desc: "Form 8 & Form 11 for each extra pending financial year",
                  },
                  {
                    service: "Final Income Tax Return Filing",
                    price: "₹2,999",
                    desc: "Last-year ITR filing for the LLP before closure",
                  },
                  {
                    service: "GST Cancellation",
                    price: "₹1,999",
                    desc: "Surrender of GST registration, if applicable",
                  },
                  {
                    service: "Bank Closure Letter Drafting",
                    price: "₹999",
                    desc: "Formal request letter for account closure",
                  },
                  {
                    service: "Indemnity Bond Notarization Coordination",
                    price: "₹999",
                    desc: "Assistance arranging notarization of the bond",
                  },
                  {
                    service: "Annual Compliance (Interim Years)",
                    price: "₹9,999/year",
                    desc: "If the LLP needs to remain compliant during closure processing",
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
                  name: "Ashok Bansal, Designated Partner",
                  company: "Formerly Vertex Consulting LLP",
                  location: "Meerut, UP",
                  text: "We registered an LLP for a project that never took off and it sat inactive for two years, racking up late fees. Taxvio reviewed our situation, confirmed we had a genuine NIL position, and got Form 24 filed within a couple of weeks. The whole closure was confirmed in about 3 months.",
                },
                {
                  name: "Reema Singhal, Designated Partner",
                  company: "Formerly Coral Interiors LLP",
                  location: "Noida, UP",
                  text: "We had one year of pending Form 8 and Form 11 filings before we could close our dormant LLP. Taxvio's Standard package handled the pending returns, bank account closure coordination, and the Form 24 filing itself — smooth process with clear updates throughout.",
                },
                {
                  name: "Manoj Tyagi, Designated Partner",
                  company: "Formerly Skyline Traders LLP",
                  location: "Ghaziabad, UP",
                  text: "Our LLP had three years of pending filings after we quietly stopped operating. Taxvio's Complete package cleared all the backlog, handled our final ITR, and got the closure confirmed without us having to chase anything. Money well spent to finally close the chapter.",
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
              LLP Closure Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong>{" "}
              and provides online LLP closure and strike-off services for
              inactive partnerships across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote handling with
              document collection, CA certification coordination, and Form
              24 filing.
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
              Other ROC & Entity Closure Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Annual ROC Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4 and other ROC compliance",
                },
                {
                  title: "LLP to Company Conversion",
                  icon: "🔄",
                  link: "/serviceslist/roc/llp-to-company-conversion",
                  desc: "Convert an active LLP into a Private Limited Company",
                },
                {
                  title: "Company Revival & Restoration",
                  icon: "⚖️",
                  link: "/serviceslist/roc/company-revival-restoration",
                  desc: "Restore a struck-off company via NCLT",
                },
                {
                  title: "Private to Public Conversion",
                  icon: "🏢",
                  link: "/serviceslist/roc/company-conversion-private-to-public",
                  desc: "Convert Private Ltd to Public Ltd company",
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
                    Stop Paying for an Inactive Entity
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Close Your LLP — Formally & Permanently
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get Form 24 preparation & filing, partner consent
                    documentation, pending return clearance, and closure
                    confirmation follow-up handled end-to-end. Stop
                    accumulating non-filing penalties on a dormant LLP.
                    Starting ₹5,999 with expert CA & CS team.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Close My LLP — ₹5,999
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
      q: "What is Form 24 and when can it be used to close an LLP?",
      a: "Form 24 is the application prescribed under Rule 37 of the LLP (Winding up and Dissolution) Rules, 2012 for striking off the name of a defunct LLP from the register maintained by the Registrar of LLPs. It applies where the LLP has either not commenced any business since incorporation, or has ceased carrying on business/commercial operations for at least 1 year, and has NIL assets and NIL liabilities. This is the standard voluntary route for closing a genuinely inactive, debt-free LLP without going through a formal winding-up process.",
    },
    {
      q: "Can an LLP with pending liabilities be closed using Form 24?",
      a: "NO. Form 24 requires the LLP to have NIL assets and NIL liabilities as confirmed in a statement of accounts certified by a practicing Chartered Accountant. Any outstanding loans, dues to creditors, or unresolved obligations must be settled BEFORE filing. If the LLP has substantial unresolved liabilities or disputes, a formal winding-up process (rather than a simple Form 24 strike-off) is usually the appropriate route — Taxvio can help assess which applies to your situation.",
    },
    {
      q: "Do we need to file pending Form 8 and Form 11 before closing the LLP?",
      a: "It depends on the LLP's history. If it never commenced any business since incorporation, pending annual filings are generally not required before applying for strike-off. However, if the LLP did commence business at some point and later became inactive, all overdue Form 8 (Statement of Account & Solvency) and Form 11 (Annual Return) filings up to the date operations ceased typically need to be completed before Form 24 can be accepted.",
    },
    {
      q: "How long does the LLP closure process take?",
      a: "On average, the complete process takes 3-4 months from starting preparation to the LLP's name being struck off, largely because of the Registrar's roughly one-month public notice period, which invites objections before finalising the strike-off. Cases requiring pending Form 8/Form 11 clearance can take somewhat longer depending on how many years need to be filed.",
    },
    {
      q: "What is the difference between LLP strike-off (Form 24) and formal winding up?",
      a: "Form 24 strike-off is a simplified, form-based route available only for defunct LLPs with NIL assets and liabilities — filed with the Registrar of LLPs and typically completed in 3-4 months. Formal winding up (voluntary or compulsory through the NCLT) is a more detailed legal process used when the LLP has assets to be realised, liabilities to be settled, or disputes among partners/creditors that need to be resolved through a liquidator — this route is more time-consuming and costly, often taking 6-18 months or more.",
    },
    {
      q: "Can a struck-off LLP be reopened or restored later?",
      a: "Once an LLP is struck off and dissolved, it can generally only be restored through an application before the NCLT, similar to the restoration process available for companies. This requires demonstrating valid grounds for restoration (such as the strike-off being erroneous or the LLP genuinely needing to resume operations) and is a separate legal process with its own costs and timelines. Closure should therefore be treated as a considered, largely final decision.",
    },
    {
      q: "Is a NIL statement of accounts mandatory for LLP closure?",
      a: "YES. A statement of accounts disclosing NIL assets and NIL liabilities, certified by a practicing Chartered Accountant and not older than 30 days from the date of filing Form 24, is a mandatory attachment. This statement is the Registrar's primary basis for confirming that the LLP has no remaining financial position that would be affected by the strike-off, so it must be accurate and current at the time of filing.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — LLP Closure
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