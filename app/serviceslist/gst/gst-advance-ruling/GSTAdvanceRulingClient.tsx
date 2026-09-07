// app/serviceslist/gst/gst-advance-ruling/GSTAdvanceRulingClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Advance Ruling Application (AAR) - Classification & Tax Clarity",
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
    "Professional GST Advance Ruling (AAR) application services under Section 97-100 of CGST Act. Expert assistance for businesses seeking pre-transaction clarity on GST rate, HSN/SAC classification, taxability, exemption applicability, ITC eligibility, and valuation methods. Complete support in applicability analysis, Form GST ARA-01 drafting, supporting documentation compilation, personal hearing representation before Authority for Advance Ruling (AAR), and order compliance. Ideal for businesses launching new products, entering new markets, structuring complex transactions, or facing classification ambiguity. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "GST Advance Ruling Application & AAR Representation",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "19999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "19999",
      maxPrice: "99999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GST Advance Ruling (AAR) and who can apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST Advance Ruling (AAR) is a mechanism under Section 97 of the CGST Act where any registered person (or person intending to register) can apply to the Authority for Advance Ruling (AAR) to seek clarity on specific GST-related questions BEFORE undertaking a transaction. The AAR is a two-member bench (one from Central Tax, one from State Tax) that passes a binding order on questions related to: Classification of goods/services (HSN/SAC code), Applicable GST rate, Taxability (whether supply is taxable/exempt), ITC eligibility, Valuation methods, Place of supply. The ruling is BINDING on the applicant and the tax authorities for that specific transaction. It provides legal certainty and prevents future disputes.",
      },
    },
    {
      "@type": "Question",
      name: "What questions can be asked in an AAR application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As per Section 97(2) of CGST Act, AAR can be sought on the following questions: (a) Classification of any goods or services under GST law, (b) Applicability of a notification (exemption, tax rate notification), (c) Determination of time and value of supply, (d) Admissibility of input tax credit (ITC), (e) Determination of liability to pay tax on any goods or services, (f) Whether applicant is required to be registered, (g) Whether any particular thing done by the applicant amounts to supply of goods/services. However, AAR CANNOT be filed if: The question is already pending/decided in your own case in any proceedings (appeal, audit, investigation), The question relates to determination of fair market value of supply, The question involves interpretation of general law (not specific to applicant).",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get an Advance Ruling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As per Section 98(4) of CGST Act, the AAR is required to pass the ruling within 90 days from the date of receipt of application (or date of personal hearing, whichever is later). In practice, the timeline is: Application scrutiny: 7-15 days, Personal hearing (if called): 30-60 days post-admission, Ruling order: 90-180 days from application filing. Total timeline: 4-8 months for most cases. Complex cases involving detailed analysis, technical issues, or multiple hearings may take 8-12 months. Once the ruling is passed, it is uploaded on the AAR portal and sent to the applicant.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTAdvanceRulingClient() {
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
          className="bg-blue-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          💡 Unclear About GST Rate or Classification? Get Advance Ruling (AAR) — Legal Certainty Before Transaction
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
                href="/serviceslist/gst"
                className="hover:text-white transition"
              >
                GST Services
              </Link>
              <span>/</span>
              <span className="text-white">GST Advance Ruling (AAR)</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  💡 Pre-Transaction Clarity
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Advance Ruling
                  <br />
                  <span className="text-[#7ecbf0]">(AAR) Application</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Launching a{" "}
                  <strong className="text-white">new product or service</strong>?
                  Unsure about{" "}
                  <strong className="text-white">
                    GST rate, HSN classification, or taxability
                  </strong>
                  ? Apply for{" "}
                  <strong className="text-white">
                    GST Advance Ruling (AAR)
                  </strong>{" "}
                  under{" "}
                  <strong className="text-white">
                    Section 97-100 of CGST Act
                  </strong>{" "}
                  to get{" "}
                  <strong className="text-white">
                    official, legally binding clarity BEFORE starting the
                    transaction
                  </strong>
                  . The{" "}
                  <strong className="text-white">
                    Authority for Advance Ruling (AAR)
                  </strong>{" "}
                  — a two-member bench — examines your question and issues a
                  ruling that is{" "}
                  <strong className="text-white">
                    binding on you and tax authorities
                  </strong>
                  . This prevents future disputes, demands, and litigation.{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end AAR services — applicability analysis, ARA-01
                  drafting, documentation, and hearing representation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Apply for AAR — ₹19,999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20Advance%20Ruling%20Application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Binding Legal Clarity",
                    "✅ Prevent Future Disputes",
                    "✅ Expert Hearing Representation",
                    "✅ CA & Tax Consultant Support",
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
                    ["⏰", "Ruling within 90 days (legally)"],
                    ["📋", "Form GST ARA-01 on AAR portal"],
                    ["💰", "Application fee: ₹5,000"],
                    ["⚖️", "Binding on applicant & authorities"],
                    ["🚫", "Can't file if case already pending"],
                    ["🚀", "Service fee: ₹19,999 onwards"],
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
              { number: "50+", label: "AAR Applications Filed", icon: "✅" },
              { number: "90 Days", label: "Legal Timeline", icon: "⏰" },
              { number: "80%", label: "Favorable Rulings", icon: "📊" },
              { number: "₹19,999", label: "Starting Fee", icon: "💰" },
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
              "✔ Classification Experts",
              "✔ Legal Research Support",
              "✔ Technical Documentation",
              "✔ AAR Hearing Representation",
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
          {/* WHAT IS AAR */}
          <section id="what-is-aar">
            <SectionLabel text="Understanding AAR" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is GST Advance Ruling (AAR)?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>GST Advance Ruling (AAR)</strong> is a legal mechanism
                  under <strong>Sections 97-100 of the CGST Act, 2017</strong>{" "}
                  where any <strong>registered person</strong> (or person
                  intending to register under GST) can apply to the{" "}
                  <strong>Authority for Advance Ruling (AAR)</strong> to seek{" "}
                  <strong>clarity on specific GST-related questions</strong>{" "}
                  BEFORE undertaking a proposed transaction or supply.
                </p>
                <p>
                  The AAR is a <strong>two-member bench</strong> consisting of
                  one member each from Central Tax (CGST) and State Tax
                  (SGST/UTGST). They examine the application, conduct a personal
                  hearing (if required), and pass a{" "}
                  <strong>legally binding ruling</strong> on the question raised.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    💡 Why Seek Advance Ruling?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Advance ruling provides <strong>legal certainty</strong> and
                    prevents future disputes, tax demands, and litigation. Key
                    benefits:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-6">
                    {[
                      "Know the EXACT GST rate and HSN/SAC classification before product launch",
                      "Avoid misclassification errors that lead to demand, penalty, and interest",
                      "Plan pricing and tax strategy with clarity (cost optimization)",
                      "Binding on tax authorities — they cannot take a contrary view for that transaction",
                      "Reduces compliance risk and audit exposure",
                      "Favorable ruling can be cited as precedent (persuasive value for similar cases)",
                      "Ideal for high-value transactions, new products, complex business models",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    📋 Questions on Which AAR Can Be Sought
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    As per Section 97(2), AAR can be filed on the following
                    questions:
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        q: "Classification of Goods/Services",
                        a: "Which HSN code (for goods) or SAC code (for services) applies to your product/service? Example: Is a food item classified under HSN 1905 (bread) or 2106 (food preparations)?",
                      },
                      {
                        q: "Applicability of Notification",
                        a: "Whether a specific exemption notification (Notification No. 12/2017, 11/2017, etc.) applies to your supply. Example: Does your educational service qualify for exemption under Entry 66 of Notification 12/2017?",
                      },
                      {
                        q: "Determination of Time & Value of Supply",
                        a: "When does the supply occur (time of supply), and how should it be valued? Example: For advance payment received, when does tax liability arise?",
                      },
                      {
                        q: "Admissibility of Input Tax Credit (ITC)",
                        a: "Can you claim ITC on a particular input/service? Example: ITC on rent of premises used for both business and residential purposes — admissible or blocked?",
                      },
                      {
                        q: "Liability to Pay Tax",
                        a: "Whether your activity amounts to 'supply' and attracts GST. Example: Is transfer of business as a going concern taxable or exempt?",
                      },
                      {
                        q: "Requirement of GST Registration",
                        a: "Whether you are required to register under GST for a specific activity. Example: Do you need separate GSTIN for a branch in another state?",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-4 border border-green-200"
                      >
                        <p className="font-bold text-green-700 text-sm mb-1">
                          {i + 1}. {item.q}
                        </p>
                        <p className="text-xs text-gray-600">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Who Can Apply for AAR?
                </p>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ✅ Eligible Applicants
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Any person REGISTERED under GST (having GSTIN)",
                      "Any person who has APPLIED for GST registration but registration is not yet granted",
                      "Non-resident taxable person (foreign entity registered under GST for specific transaction)",
                      "Person paying tax under reverse charge mechanism (RCM)",
                      "Input Service Distributor (ISD)",
                      "Tax Deductor (TDS) or Tax Collector (TCS) under GST",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> Unregistered persons (not having GSTIN
                    or not applied for registration) CANNOT file AAR application.
                    They must first apply for GST registration.
                  </p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🚫 When AAR Cannot Be Filed
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    AAR application is NOT allowed in the following cases (as per
                    Section 97(2) proviso):
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "The question is already PENDING in your case in any proceedings (appeal, adjudication, audit, investigation, inquiry)",
                      "The question is already DECIDED by any authority/court/tribunal in your case (res judicata)",
                      "The question relates to determination of FAIR MARKET VALUE of any supply",
                      "The question involves interpretation of GENERAL LAW (not specific to your case/transaction)",
                      "The question is already covered by a BOARD CIRCULAR or NOTIFICATION (no ambiguity)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚖️ Binding Nature of AAR
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    The ruling passed by AAR is{" "}
                    <strong>BINDING on the following parties</strong> (as per
                    Section 103):
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "The APPLICANT (you) — for the specific transaction/question raised in application",
                      "The JURISDICTIONAL OFFICER (Proper Officer, Commissioner) — they cannot take a contrary view",
                      "Binding applies ONLY to the applicant and authorities in relation to that specific matter",
                      "NOT binding on other taxpayers (but can be cited as persuasive precedent)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Exception:</strong> If you are NOT satisfied with the
                    AAR ruling, you can file an appeal to the{" "}
                    <strong>Appellate Authority for Advance Ruling (AAAR)</strong>{" "}
                    within 30 days.
                  </p>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST Advance Ruling applications — technical
                  analysis, ARA-01 drafting, documentation, hearing representation,
                  and appeal support across Uttar Pradesh, Noida, Delhi NCR, and
                  pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* AAR APPLICATION PROCESS */}
          <section id="application-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Apply for GST Advance Ruling (Form ARA-01)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                AAR application is filed online on the{" "}
                <strong>AAR Portal (aar.gov.in or state-specific AAR portal)</strong>{" "}
                in <strong>Form GST ARA-01</strong>. Here's the complete process:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Identify the Question & Assess Eligibility",
                    description:
                      "Clearly define the GST question you need clarity on: Is it about classification (HSN/SAC)? Applicable tax rate? Taxability (exempt or taxable)? ITC admissibility? Registration requirement? Assess whether your question falls under Section 97(2) permissible questions. Check that the question is NOT already pending/decided in any proceedings in your case. Ensure you are a registered person (or have applied for registration). Taxvio conducts a detailed eligibility analysis and frames the question in legal terms for maximum clarity.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Research & Prepare Supporting Arguments",
                    description:
                      "Conduct legal and technical research on the question: Study relevant CGST Act sections, GST Rules, Notifications (rate notifications, exemption notifications). Analyze existing AAR/AAAR rulings on similar questions (precedent value). Review GST Council recommendations, Board Circulars, FAQs. Examine product/service technical specifications (if classification issue). Prepare a detailed note explaining: Your interpretation (favorable position), Supporting legal arguments, Case laws/precedents, Why the department might take a contrary view (and your rebuttal). Taxvio's legal team prepares a comprehensive case brief with citations.",
                    duration: "3-5 days",
                  },
                  {
                    step: 3,
                    title: "Compile Supporting Documents & Evidence",
                    description:
                      "Prepare all documentary evidence to support your question and arguments: (1) For Classification Questions: Product/service technical specifications, brochures, catalogues, Manufacturing process description, Lab test reports (if applicable), Industry practice/standards. (2) For Taxability/Exemption Questions: Nature of supply/transaction details, Relevant notification (exemption notification text), Comparison with similar supplies (how they are taxed). (3) For ITC/Valuation Questions: Contracts/agreements, Invoices (sample), Accounting treatment details. (4) General Documents: GSTIN certificate, PAN card, Latest GST returns (GSTR-1, GSTR-3B), Business incorporation documents (if entity question). All documents should be properly indexed, numbered, and paginated.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Payment of Application Fee (₹5,000)",
                    description:
                      "AAR application requires payment of a fee of ₹5,000 (₹2,500 CGST + ₹2,500 SGST/UTGST) via online payment on the AAR portal. Process: Log in to AAR portal → Create Challan for AAR Application Fee. Make payment via net banking/debit card. Download challan and payment receipt (CIN - Challan Identification Number). The fee is NON-REFUNDABLE even if your application is rejected or withdrawn. Note: Some states have separate AAR portals — check your state's AAR portal for payment process.",
                    duration: "1 day",
                  },
                  {
                    step: 5,
                    title: "Online Filing of Form GST ARA-01",
                    description:
                      "Log in to AAR portal with your GSTIN credentials. Fill Form GST ARA-01 (Application for Advance Ruling): Part I - Applicant Details: GSTIN, PAN, Name, Address, Email, Mobile (auto-populated). Part II - Details of the Question: Nature of question (classification, taxability, ITC, etc.), Detailed description of the question (be specific and precise), Reasons for seeking advance ruling (why clarity is needed), Whether question is pending/decided in any proceedings (answer 'No' if eligible). Part III - Transaction Details: Description of goods/services involved, HSN/SAC code (your proposed classification), Proposed transaction details (nature, parties, value), Supporting arguments and interpretation (your favorable view). Part IV - Submissions & Grounds: Detailed legal arguments supporting your interpretation, Citation of relevant CGST Act sections, Rules, Notifications, Case laws, Explanation of why ruling is sought (prevent dispute, high-value transaction, etc.). Part V - List of Enclosures: List all documents attached (with page numbers). Part VI - Verification & Declaration: Declare that information provided is true and correct, Authorised signatory details (proprietor, partner, director, authorized representative). Upload Attachments: ARA-01 form (draft), Supporting documents (product specs, contracts, etc.), Fee payment challan, Previous AAR rulings cited (if any). Maximum file size per attachment: 5 MB (PDF format). Submit with Digital Signature Certificate (DSC) or Aadhaar-based EVC.",
                    duration: "1-2 days",
                  },
                  {
                    step: 6,
                    title: "Acknowledgment & ARN Generation",
                    description:
                      "Upon successful submission, AAR portal generates an ARN (Application Reference Number) for your application. Example: AAR/12/2024/00123. Download acknowledgment from portal. The acknowledgment contains: ARN, Date of filing, Applicant details, Question summary. The application is now in the AAR's queue for scrutiny.",
                    duration: "Immediate",
                  },
                  {
                    step: 7,
                    title: "Scrutiny by AAR (within 7 days)",
                    description:
                      "The AAR bench scrutinizes the application to check: Whether applicant is eligible (registered person), Whether question falls under Section 97(2) permissible questions, Whether question is already pending/decided in applicant's case, Whether application fee is paid, Whether all mandatory details are filled. If scrutiny is successful, application is ADMITTED and an admission order is issued. If defects are found, AAR issues a deficiency memo asking you to rectify defects within 7-15 days. Taxvio responds to deficiency memos promptly with rectified documents/clarifications.",
                    duration: "7-15 days (by AAR)",
                  },
                  {
                    step: 8,
                    title: "Personal Hearing Notice (if required)",
                    description:
                      "After admission, the AAR may call for a personal hearing to: Seek clarifications on the question or transaction, Understand technical/commercial aspects, Hear arguments from both applicant and department (jurisdictional officer may also present their view). Personal Hearing Notice is issued specifying: Date, time, venue of hearing (physical or virtual via video conferencing), Issues to be discussed. You (or your authorized representative — CA/Advocate) must appear for the hearing. Taxvio prepares: Written submissions (summary of arguments), Compilation of key documents for quick reference, Oral arguments and responses to AAR's queries. Note: Personal hearing is NOT mandatory — AAR may pass ruling based on written submissions only if satisfied.",
                    duration: "30-60 days post-admission",
                  },
                  {
                    step: 9,
                    title: "Ruling Order (Form GST ARA-02)",
                    description:
                      "After examining the application, documents, and hearing (if conducted), the AAR passes the ruling in Form GST ARA-02 (Advance Ruling Order). The ruling contains: Question(s) raised by applicant, Facts of the case (transaction details), Arguments submitted by applicant, Department's view (if any), AAR's analysis and interpretation of law, Final ruling (answer to the question), Whether ruling is in favor of applicant or not. The ruling is uploaded on AAR portal and sent to your registered email. Download the ruling for your records. Ruling is BINDING on you and tax authorities for that specific transaction. Taxvio analyzes the ruling and advises on: Compliance as per ruling (if favorable), Filing appeal to AAAR if ruling is adverse.",
                    duration: "Within 90 days of filing (as per Section 98(4))",
                  },
                  {
                    step: 10,
                    title: "Post-Ruling Compliance & Implementation",
                    description:
                      "If ruling is FAVORABLE (supports your interpretation): Implement the ruling in your GST compliance — use the approved HSN/SAC code, tax rate, classification. Issue invoices as per the ruling. File returns (GSTR-1, GSTR-3B) applying the ruling. Keep a copy of AAR order for audit/inspection purposes — show it to authorities if questioned. If ruling is ADVERSE (does not support your interpretation): You have TWO options: (a) Accept the ruling and comply (change your classification/tax rate as per AAR order), OR (b) File appeal to Appellate Authority for Advance Ruling (AAAR) within 30 days of the ruling. Taxvio provides complete AAAR appeal support if needed.",
                    duration: "Post-ruling",
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
                  <strong>
                    7-10 days from question finalization to ARA-01 filing
                  </strong>{" "}
                  (if all documents are ready). AAR is legally required to pass
                  ruling within <strong>90 days from filing</strong> (as per
                  Section 98(4)). Practical timeline:{" "}
                  <strong>4-8 months for ruling</strong> depending on case
                  complexity, hearing schedule, and AAR workload. Complex technical
                  cases may take 8-12 months.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for AAR Application
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTIN certificate (GST registration certificate)",
                    "PAN card of the entity",
                    "Latest GST returns (GSTR-1, GSTR-3B for last 3 months)",
                    "Transaction details (nature of supply, parties involved, value)",
                    "Product/service technical specifications (if classification question)",
                    "Contracts/agreements (if applicability or valuation question)",
                    "Fee payment challan (₹5,000 — ₹2,500 CGST + ₹2,500 SGST)",
                    "AAR portal login credentials",
                    "Authorized signatory details (CA/Advocate if filing through representative)",
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
                    "Product catalogues, brochures (for classification questions)",
                    "Manufacturing process flowchart (if process determines classification)",
                    "Lab test reports/certificates (if technical composition matters)",
                    "Industry standards/norms (BIS standards, ISO certifications)",
                    "Sample invoices (showing current treatment)",
                    "Previous AAR/AAAR rulings on similar products/services (precedents)",
                    "GST Council meeting minutes/recommendations (if rate change is involved)",
                    "Board Circulars, FAQs, Notifications (relevant extracts)",
                    "Business incorporation documents (MOA, AOA for companies; Partnership deed for firms)",
                    "Expert opinion/certificate (technical expert, chartered engineer if needed)",
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

          {/* COMMON QUESTIONS */}
          <section id="common-questions">
            <SectionLabel text="Popular AAR Questions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Questions Raised in AAR Applications
            </h2>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Here are real-world examples of questions that businesses typically
                seek AAR for:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    category: "Product Classification (HSN)",
                    icon: "📦",
                    examples: [
                      "Is our product classified under HSN 1905 (bread/biscuits) or HSN 2106 (food preparations)?",
                      "Whether our software product is 'goods' (HSN 8523 - software media) or 'service' (SAC 998314 - software service)?",
                      "Is our bio-degradable cutlery classified under HSN 3924 (plastic) or HSN 4823 (paper)?",
                      "Whether our energy-efficient LED bulb qualifies for lower GST rate under HSN 8539?",
                    ],
                  },
                  {
                    category: "Tax Rate Determination",
                    icon: "💰",
                    examples: [
                      "Is our restaurant service taxable at 5% (without ITC) or 18% (with ITC)?",
                      "Whether our packaged drinking water qualifies for 12% rate or 18% rate under Notification 1/2017?",
                      "Is our educational coaching service exempt under Notification 12/2017 Entry 66?",
                      "Whether our construction service attracts 18% or 12% based on affordable housing criteria?",
                    ],
                  },
                  {
                    category: "Exemption Applicability",
                    icon: "🎓",
                    examples: [
                      "Whether our vocational training service qualifies for exemption under Entry 66 of Notification 12/2017 (educational services)?",
                      "Is our healthcare diagnostic service exempt under Entry 74 of Notification 12/2017?",
                      "Whether our supply to SEZ unit qualifies for LUT (Letter of Undertaking) or requires bank guarantee?",
                      "Is our agricultural produce supply exempt or taxable (fresh vs. processed)?",
                    ],
                  },
                  {
                    category: "ITC Admissibility",
                    icon: "🔄",
                    examples: [
                      "Can we claim ITC on rent of premises used for both business and residential purposes (70% business, 30% personal)?",
                      "Whether ITC is available on food and beverages provided to employees in office canteen?",
                      "Is ITC on motor vehicle (used for transportation of employees) admissible under GST law?",
                      "Whether ITC on construction of factory building is blocked under Section 17(5)?",
                    ],
                  },
                  {
                    category: "Place of Supply & IGST vs. CGST+SGST",
                    icon: "🌍",
                    examples: [
                      "For our online software service to a customer in another state, is place of supply recipient's location (IGST) or supplier's location (CGST+SGST)?",
                      "Whether transportation of goods from Haryana to Delhi attracts IGST (inter-state) or CGST+SGST (intra-state within NCR)?",
                      "Is our export service to USA zero-rated or taxable?",
                      "Whether our supply to unregistered person in another state is inter-state or intra-state?",
                    ],
                  },
                  {
                    category: "Transaction Structure & Taxability",
                    icon: "📝",
                    examples: [
                      "Whether our business transfer as a 'going concern' qualifies for exemption under Schedule III (not a supply)?",
                      "Is our gift/free sample distribution to customers taxable as deemed supply?",
                      "Whether our employee reimbursement (travel, phone) is treated as supply of service and taxable?",
                      "Is our royalty payment to foreign licensor subject to GST or outside GST scope?",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.category}
                    className="bg-white rounded-2xl p-6 border border-purple-200"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      <h3 className="font-bold text-purple-800 text-lg">
                        {item.category}
                      </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {item.examples.map((ex, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-0.5">→</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's GST Advance Ruling (AAR) Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From question framing to hearing representation — we handle every
              aspect of your AAR application with technical precision and legal
              expertise.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔍",
                  title: "AAR Eligibility & Feasibility Analysis",
                  desc: "Assessment of whether your question is eligible for AAR. Check if question is pending/decided elsewhere. Feasibility opinion on likelihood of favorable ruling. Written advisory on AAR vs. alternative approaches.",
                  price: "₹4,999",
                },
                {
                  icon: "📋",
                  title: "Complete AAR Application Filing (Standard)",
                  desc: "Question framing in legal terms. Legal research and case law analysis. Form ARA-01 drafting with detailed arguments. Supporting document compilation and indexing. Fee payment assistance. Online filing and ARN tracking.",
                  price: "₹19,999",
                },
                {
                  icon: "📝",
                  title: "Technical Documentation & Product Analysis",
                  desc: "For classification questions — product technical analysis, HSN code research, comparison with similar products. Preparation of technical note explaining product characteristics, manufacturing process, composition.",
                  price: "₹9,999",
                },
                {
                  icon: "⚖️",
                  title: "Legal Research & Case Law Compilation",
                  desc: "Comprehensive legal research on your question. Analysis of previous AAR/AAAR rulings on similar issues. Compilation of relevant case laws (High Court, Supreme Court). Citation of CGST Act, Rules, Notifications, Circulars.",
                  price: "₹7,999",
                },
                {
                  icon: "📨",
                  title: "Response to AAR Deficiency Memo",
                  desc: "If AAR issues deficiency memo pointing out issues in application, we draft detailed response, submit rectified documents/clarifications, and ensure application is admitted without delay.",
                  price: "₹2,999",
                },
                {
                  icon: "👔",
                  title: "Personal Hearing Representation",
                  desc: "Appearance before AAR bench on your behalf. Preparation of written submissions and oral arguments. Answering AAR's queries and technical questions. Submission of additional documents if requested during hearing.",
                  price: "₹9,999/hearing",
                },
                {
                  icon: "📊",
                  title: "Complex/High-Value AAR (Multiple Questions)",
                  desc: "For applications involving multiple questions, complex classification/valuation issues, or high-value transactions. Includes: Senior CA + Tax Consultant team, detailed evidence compilation, multiple hearings support.",
                  price: "₹99,999",
                },
                {
                  icon: "🔄",
                  title: "AAAR Appeal (If AAR Ruling is Adverse)",
                  desc: "If AAR ruling is not in your favor, we file appeal to Appellate Authority for Advance Ruling (AAAR) under Section 100. Includes appeal drafting, grounds preparation, hearing representation.",
                  price: "₹29,999",
                },
                {
                  icon: "📄",
                  title: "Post-Ruling Compliance Implementation",
                  desc: "After favorable AAR ruling, we help implement it in your GST compliance: Update HSN/SAC codes in invoices and returns. Train your team on ruling implications. Prepare documentation for audit defense (showing compliance with AAR).",
                  price: "₹4,999",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <p className="text-lg font-bold text-[#00416a]">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <p className="font-bold text-green-800 mb-3">
                📦 Complete AAR Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic (Simple Question)",
                    price: "₹19,999",
                    includes: [
                      "Eligibility analysis",
                      "ARA-01 filing",
                      "Basic legal research",
                      "Fee payment support",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard (Classification/Rate)",
                    price: "₹49,999",
                    includes: [
                      "Everything in Basic",
                      "Technical documentation",
                      "Detailed case law research",
                      "1 hearing representation",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Premium (Complex/Multi-Question)",
                    price: "₹99,999",
                    includes: [
                      "Everything in Standard",
                      "Senior CA + Tax Consultant",
                      "Multiple hearings",
                      "AAAR appeal support (if needed)",
                      "WhatsApp + call support",
                    ],
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.package}
                    className="bg-white rounded-xl p-5 border border-green-300"
                  >
                    <p className="font-bold text-green-800 mb-1">{pkg.package}</p>
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

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Our AAR Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "GreenTech Industries",
                  location: "Noida",
                  text: "We were launching a new eco-friendly packaging product and unsure about HSN classification (plastic vs. bio-degradable). Taxvio conducted detailed technical analysis, filed AAR application with lab reports and precedents. AAR ruled in our favor — 12% rate confirmed. Saved us lakhs in potential tax liability!",
                },
                {
                  name: "EduSmart Pvt. Ltd.",
                  location: "Delhi NCR",
                  text: "Our online coaching service was being questioned by department — exempt or 18%? Taxvio filed AAR application arguing exemption under Notification 12/2017. They represented us at AAR hearing, cited multiple case laws, and secured favorable ruling — service is exempt. Great legal work!",
                },
                {
                  name: "LogiTransport Services",
                  location: "Muzaffarnagar",
                  text: "We had a complex ITC question — admissibility of ITC on vehicles used for both goods transport (business) and employee pickup (blocked). Taxvio prepared detailed application with usage calculation (80% business, 20% blocked). AAR allowed proportionate ITC of 80%. Very satisfied!",
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
              GST Advance Ruling (AAR) Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST Advance Ruling application services (ARA-01 drafting,
              legal research, hearing representation) for businesses across{" "}
              <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
              <strong>Meerut</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong>, and pan-India online.
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
              Related GST Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "GST Registration",
                  icon: "📝",
                  link: "/serviceslist/gst/gst-registration",
                  desc: "Fresh GST registration for new businesses.",
                },
                {
                  title: "GST Notice Response",
                  icon: "📨",
                  link: "/serviceslist/gst/gst-notice-response",
                  desc: "Expert response to GST SCN and notices.",
                },
                {
                  title: "GST Appeal Filing",
                  icon: "⚖️",
                  link: "/serviceslist/gst/gst-appeal-filing",
                  desc: "Appeal filing before Appellate Authority.",
                },
                {
                  title: "GST Audit",
                  icon: "🔍",
                  link: "/serviceslist/gst/gst-audit",
                  desc: "Comprehensive GST compliance audit.",
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
                    Get Legal Clarity Before Transaction
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Apply for GST Advance Ruling (AAR)
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't risk misclassification, wrong tax rate, or future
                    disputes — get official, binding clarity from AAR before
                    launching your product or structuring your transaction. Taxvio
                    provides complete AAR application services — question framing,
                    legal research, ARA-01 filing, hearing representation, and
                    compliance implementation. Starting ₹19,999. Secure legal
                    certainty and prevent costly litigation.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Apply for AAR — ₹19,999
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20Advance%20Ruling%20Application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Us
                  </a>
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
      q: "Can I file AAR application if I am not yet registered under GST?",
      a: "Yes, but with a condition. As per Section 97(1), 'any person who intends to obtain registration' can file AAR application. This means: (1) You must have APPLIED for GST registration (filed Form GST REG-01), even if registration is not yet granted. (2) In the ARA-01 application, you should mention 'Registration Applied — ARN: [Application Reference Number]' in the GSTIN field. (3) Once registration is granted, you must update AAR about your GSTIN. However, if you have NOT even applied for GST registration, you are NOT eligible to file AAR.",
    },
    {
      q: "What if AAR gives an unfavorable ruling? Can I challenge it?",
      a: "Yes. If the AAR ruling is NOT in your favor, you can file an appeal to the Appellate Authority for Advance Ruling (AAAR) under Section 100 of CGST Act within 30 days of the AAR ruling. The AAAR is also a two-member bench (one from Central, one from State) but at a higher level. AAAR will examine the AAR ruling, hear your arguments, and pass a final order. The AAAR order is FINAL and binding — you cannot appeal further (except by filing writ petition in High Court on limited grounds of jurisdiction/procedure violation).",
    },
    {
      q: "Is the AAR ruling applicable to all taxpayers or only to me?",
      a: "The AAR ruling is BINDING only on: (1) YOU (the applicant) — for that specific transaction/question, and (2) JURISDICTIONAL TAX AUTHORITIES (your Proper Officer, Commissioner) — they cannot take a contrary view for your case. The ruling is NOT binding on OTHER TAXPAYERS (they cannot directly rely on your AAR). However, other taxpayers CAN cite your AAR ruling as persuasive precedent (supporting argument) in their own AAR applications, appeals, or litigation. AAR/AAAR rulings are published on AAR portals and widely cited in GST practice.",
    },
    {
      q: "Can I withdraw my AAR application after filing?",
      a: "Yes, you can withdraw your AAR application at ANY stage before the AAR passes the ruling. Process: Submit a withdrawal application (simple letter) to AAR stating reasons for withdrawal. AAR will pass an order allowing withdrawal. However: The ₹5,000 application fee is NON-REFUNDABLE even after withdrawal. Withdrawal is typically done when: You have resolved the question internally or with department, Decided not to proceed with the transaction, Realized that AAR is unlikely to give favorable ruling.",
    },
    {
      q: "How long is the AAR ruling valid? Does it expire?",
      a: "AAR ruling is PERPETUALLY VALID (no expiry) UNLESS: (1) There is a change in law (CGST Act, Rules, Notifications) that affects the ruling. Example: If AAR ruled your service is exempt, but later GST Council removes the exemption via notification, the ruling becomes invalid. (2) There is a change in facts/circumstances of your transaction. Example: If AAR ruled on HSN classification based on specific product composition, but you change the composition later, the ruling may not apply. (3) A higher court (High Court, Supreme Court) passes a judgment contrary to the AAR ruling (higher authority prevails). Subject to these exceptions, AAR ruling continues to be binding.",
    },
    {
      q: "Can I file AAR on multiple questions in one application?",
      a: "Yes, you can raise MULTIPLE questions in a SINGLE ARA-01 application, PROVIDED all questions relate to the SAME transaction or supply. Example: For a new product launch, you can ask: (a) What is the correct HSN classification? (b) What is the applicable GST rate? (c) Is ITC available on certain inputs used in manufacture? All these questions relate to ONE transaction (product launch), so they can be clubbed in one application. However, if questions relate to DIFFERENT transactions (e.g., one for Product A, another for Service B), you must file SEPARATE applications (and pay ₹5,000 fee for each).",
    },
    {
      q: "Can Taxvio represent me at AAR personal hearing?",
      a: "Yes. As part of our Personal Hearing Representation service (₹9,999/hearing), our experienced CA/Tax Consultant will appear before the AAR bench on your behalf. We prepare: Written submissions (detailed arguments on paper), Compilation of key documents for quick reference, Oral arguments and responses to AAR's technical/legal queries. You need to provide us with an Authorization Letter or Form ARA-01 should mention our CA/Tax Consultant as your authorized representative. We handle both physical hearings (at State AAR office) and virtual hearings (via video conferencing).",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST Advance Ruling
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