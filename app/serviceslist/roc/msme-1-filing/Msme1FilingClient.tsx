// app/serviceslist/roc/msme-1-filing/Msme1FilingClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MSME-1 Half-Yearly Return Filing Services - Outstanding Payments to Micro & Small Enterprises",
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
    "Professional half-yearly filing of Form MSME-1 (MSME Form I) under Section 405 of the Companies Act, 2013 read with the Specified Companies (Furnishing of Information about Payment to Micro and Small Enterprise Suppliers) Order, 2019. Complete service includes vendor MSME/Udyam status verification, compilation of outstanding payments exceeding 45 days, reason-for-delay documentation, MSME-1 preparation and e-filing with MCA, and half-yearly deadline tracking (31st October and 30th April). Includes advisory on Section 43B(h) of the Income Tax Act disallowance risk for delayed MSME payments. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "MSME-1 Half-Yearly Return Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2499",
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
      name: "Which companies are required to file Form MSME-1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every company that receives goods or services from a micro or small enterprise, and whose payment to such supplier remains outstanding for more than 45 days from the date of acceptance or deemed acceptance of the goods or services, is a 'Specified Company' and must file Form MSME-1. This obligation arises from Section 405 of the Companies Act, 2013 read with the Specified Companies (Furnishing of Information about Payment to Micro and Small Enterprise Suppliers) Order, 2019 dated 22nd January 2019. The requirement applies to all company types — private limited, public limited, one-person companies, and Section 8 companies — irrespective of turnover or paid-up capital. Importantly, the obligation is triggered only where the supplier is registered as a MICRO or SMALL enterprise (holding a valid Udyam Registration); dues to MEDIUM enterprises are not reportable in MSME-1.",
      },
    },
    {
      "@type": "Question",
      name: "What are the due dates for MSME-1 half-yearly filing in FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form MSME-1 is a half-yearly return with two filing windows each financial year. For the first half (April to September), the return must be filed by 31st October of the same year — so for FY 2025-26, the April 2026to September 2026period must be reported by 31st October 2025. For the second half (October to March), the return must be filed by 30th April of the following year — so the October 2026to March 2026 period must be reported by 30th April 2026. The return discloses the amount of payment outstanding to micro and small enterprise suppliers as at the end of the relevant half-year, along with the reasons for the delay. Missing these deadlines attracts penalties under Section 405(4) of the Companies Act, 2013.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for not filing MSME-1 on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failure to file Form MSME-1, or filing incomplete or incorrect information, attracts penalties under Section 405(4) of the Companies Act, 2013. The company is liable to a penalty of ₹20,000, and every officer in default (typically directors, company secretary, and CFO) is also liable to a penalty of ₹20,000 each. In case of continuing failure, a further penalty of ₹1,000 per day of continuing default applies, subject to a maximum of ₹3,00,000 for the company and ₹3,00,000 for each officer in default. Separately, and often more costly, delayed payments to micro and small enterprises also trigger mandatory interest liability under Section 16 of the MSMED Act, 2006 (compound interest at three times the RBI bank rate), and disallowance of the related expenditure under Section 43B(h) of the Income Tax Act, 1961 if payment is not made within the statutory time limit.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function Msme1FilingClient() {
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
          ⚠️ MSME-1 Deadlines FY 2025-26: 31st October 2026(Apr–Sep) & 30th April 2026 (Oct–Mar)
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
              <span className="text-white">MSME-1 Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🧾 Half-Yearly Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  MSME-1 Half-Yearly
                  <br />
                  <span className="text-[#7ecbf0]">Return Filing</span>
                  <br />
                  FY 2025-26
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Does your company buy goods or services from{" "}
                  <strong className="text-white">
                    micro or small enterprise vendors
                  </strong>{" "}
                  and have payments{" "}
                  <strong className="text-white">
                    outstanding beyond 45 days
                  </strong>
                  ? You are a{" "}
                  <strong className="text-white">"Specified Company"</strong> and
                  must file{" "}
                  <strong className="text-white">Form MSME-1</strong> twice every
                  financial year under{" "}
                  <strong className="text-white">
                    Section 405 of the Companies Act, 2013
                  </strong>{" "}
                  read with the{" "}
                  <strong className="text-white">
                    Specified Companies (Furnishing of Information about Payment
                    to Micro and Small Enterprise Suppliers) Order, 2019
                  </strong>
                  . Non-filing attracts{" "}
                  <strong className="text-white">
                    ₹20,000 penalty plus ₹1,000/day (up to ₹3 lakh)
                  </strong>
                  , and delayed MSME payments can also cause{" "}
                  <strong className="text-white">
                    income tax disallowance under Section 43B(h)
                  </strong>
                  . <strong className="text-white">Taxvio</strong> handles it
                  end-to-end —{" "}
                  <strong className="text-white">
                    vendor Udyam verification, outstanding dues compilation,
                    reason-for-delay documentation, and MCA e-filing
                  </strong>{" "}
                  — in{" "}
                  <strong className="text-white">2-3 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File MSME-1 Now — ₹2,499 →
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
                    "✅ Udyam Status Verification",
                    "✅ Deadline Tracking",
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
                    ["⏳", "Trigger: Dues pending beyond 45 days"],
                    ["🏭", "Applies to: Micro & Small vendors only"],
                    ["📅", "H1 (Apr–Sep): Due 31st October"],
                    ["📅", "H2 (Oct–Mar): Due 30th April"],
                    ["⚖️", "Penalty: ₹20,000 + ₹1,000/day"],
                    ["💼", "Starting fee: ₹2,499"],
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
              { number: "350+", label: "MSME-1 Returns Filed", icon: "🧾" },
              { number: "2-3 Days", label: "Average Filing Time", icon: "⏰" },
              { number: "45 Days", label: "Statutory Payment Limit", icon: "⏳" },
              { number: "₹2,499", label: "Starting Fee", icon: "💼" },
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
              "✔ Udyam Verification Experts",
              "✔ 43B(h) Advisory Support",
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
          {/* WHAT IS MSME-1 */}
          <section id="what-is-msme1">
            <SectionLabel text="Understanding MSME-1" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Form MSME-1 and Who Must File It?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Form MSME-1 (MSME Form I)</strong> is a{" "}
                  <strong>half-yearly return</strong> that every{" "}
                  <strong>"Specified Company"</strong> must file with the
                  Registrar of Companies, disclosing{" "}
                  <strong>
                    the amount of payments outstanding to micro and small
                    enterprise suppliers for more than 45 days
                  </strong>{" "}
                  from the date of acceptance (or deemed acceptance) of goods or
                  services.
                </p>
                <p>
                  The obligation flows from{" "}
                  <strong>Section 405 of the Companies Act, 2013</strong>, read
                  with the{" "}
                  <strong>
                    Specified Companies (Furnishing of Information about Payment
                    to Micro and Small Enterprise Suppliers) Order, 2019
                  </strong>{" "}
                  dated 22nd January 2019, and is anchored in{" "}
                  <strong>Section 15 of the MSMED Act, 2006</strong>, which
                  requires buyers to pay micro and small enterprise suppliers
                  within <strong>45 days</strong> (or the agreed credit period,
                  whichever is shorter).
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🧾 Key Features of MSME-1 Filing
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Half-Yearly, Not Annual",
                        desc: "MSME-1 is filed TWICE a financial year — once for the April-September half (due 31st October) and once for the October-March half (due 30th April of the following year).",
                      },
                      {
                        title: "Only Micro & Small Enterprises Count",
                        desc: "Dues to MEDIUM enterprises are NOT reportable. Only suppliers registered as micro or small enterprises (holding a valid Udyam Registration in those categories) trigger MSME-1 reporting.",
                      },
                      {
                        title: "45-Day Trigger from Acceptance",
                        desc: "The clock starts from the day of acceptance of goods/services (or deemed acceptance if no written objection is raised within 15 days of delivery) — not merely from the invoice date.",
                      },
                      {
                        title: "Reason for Delay Is Mandatory",
                        desc: "For each outstanding amount, the form requires the company to state the reason for delay in payment — a qualitative disclosure that the ROC and MSME Samadhaan authorities can review.",
                      },
                      {
                        title: "Applies to All Company Types",
                        desc: "Private limited, public limited, OPC, and Section 8 companies are all covered — there is no turnover or paid-up capital threshold exemption for MSME-1.",
                      },
                      {
                        title: "Linked to Income Tax Section 43B(h)",
                        desc: "Amounts disclosed as overdue in MSME-1 often correspond to expenditure that may be disallowed under Section 43B(h) of the Income Tax Act if not paid within the statutory time limit — making accurate tracking doubly important.",
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
                    ✅ Are You a "Specified Company"? (Applicability Test)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Test 1: Do You Buy from MSMEs?
                      </p>
                      <p className="text-xs text-gray-700">
                        Your company receives goods or services from one or more
                        suppliers that are registered as{" "}
                        <strong>micro or small enterprises</strong> under the
                        MSMED Act, 2006 (evidenced by a valid{" "}
                        <strong>Udyam Registration Certificate</strong> showing
                        "Micro" or "Small" classification).
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Test 2: Is Payment Outstanding Beyond 45 Days?
                      </p>
                      <p className="text-xs text-gray-700">
                        Payment to such a supplier remains{" "}
                        <strong>unpaid for more than 45 days</strong> from the
                        date of acceptance or deemed acceptance of the goods or
                        services.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Result: Both Tests Yes → File MSME-1
                      </p>
                      <p className="text-xs text-gray-700">
                        If both conditions are satisfied at any point during the
                        half-year, your company is a{" "}
                        <strong>Specified Company</strong> and must file MSME-1
                        for that half-year, reporting each such outstanding
                        amount, supplier-wise, along with the reason for delay.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        If No Dues Are Overdue
                      </p>
                      <p className="text-xs text-gray-700">
                        If your company has <strong>no</strong> micro/small
                        enterprise dues outstanding beyond 45 days at the end of
                        the half-year, the strict reading of the 2019 Order is
                        that the reporting obligation does not arise. However,
                        many companies file a{" "}
                        <strong>NIL / no-outstanding return</strong> as a matter
                        of documented compliance practice — Taxvio advises on the
                        approach best suited to your risk posture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ MSME Classification — Who Counts for MSME-1?
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Category</th>
                          <th className="p-2 text-left">Investment</th>
                          <th className="p-2 text-left">Turnover</th>
                          <th className="p-2 text-left">MSME-1?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            cat: "Micro",
                            inv: "Up to ₹2.5 cr",
                            to: "Up to ₹10 cr",
                            rep: "Yes",
                            good: true,
                          },
                          {
                            cat: "Small",
                            inv: "Up to ₹25 cr",
                            to: "Up to ₹100 cr",
                            rep: "Yes",
                            good: true,
                          },
                          {
                            cat: "Medium",
                            inv: "Up to ₹125 cr",
                            to: "Up to ₹500 cr",
                            rep: "No",
                            good: false,
                          },
                          {
                            cat: "Unregistered",
                            inv: "No Udyam",
                            to: "No Udyam",
                            rep: "No",
                            good: false,
                          },
                          {
                            cat: "Trader (Udyam)",
                            inv: "As notified",
                            to: "As notified",
                            rep: "Check status",
                            good: false,
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.cat}</td>
                            <td className="p-2 text-gray-600">{row.inv}</td>
                            <td className="p-2 text-gray-600">{row.to}</td>
                            <td
                              className={`p-2 font-bold ${
                                row.good ? "text-green-700" : "text-gray-500"
                              }`}
                            >
                              {row.rep}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> Investment and turnover limits were
                    enhanced with effect from 1st April 2025. Always rely on the{" "}
                    <strong>
                      classification stated on the vendor's Udyam Registration
                      Certificate
                    </strong>{" "}
                    (and the Udyam portal verification) rather than estimating it
                    yourself. Traders registered on Udyam are generally eligible
                    only for limited benefits — verify the delayed-payment
                    applicability for such vendors before reporting.
                  </p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💸 Why MSME-1 Matters Beyond ROC Compliance
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Income Tax Disallowance — Section 43B(h)",
                        desc: "Under Section 43B(h) of the Income Tax Act, any sum payable to a micro or small enterprise that is not paid within the time limit specified in Section 15 of the MSMED Act is allowed as a deduction only in the year of actual payment — potentially inflating your taxable income for the year.",
                      },
                      {
                        title: "Mandatory Interest Under MSMED Act",
                        desc: "Section 16 of the MSMED Act, 2006 imposes compound interest (monthly rests) at three times the RBI notified bank rate on delayed payments to micro and small enterprises — payable irrespective of any contrary contract, and not deductible for income tax purposes.",
                      },
                      {
                        title: "MSME Samadhaan Complaints",
                        desc: "Aggrieved suppliers can file delayed-payment complaints on the MSME Samadhaan portal, leading to proceedings before the Micro and Small Enterprises Facilitation Council (MSEFC) — where your MSME-1 disclosures can become evidence.",
                      },
                      {
                        title: "Audit & Disclosure Requirements",
                        desc: "Statutory auditors report MSME dues in the notes to accounts and, where applicable, comment under CARO — inconsistencies between your books, MSME-1 filings, and audit disclosures are a common query area.",
                      },
                      {
                        title: "Due Diligence Red Flag",
                        desc: "Lenders, investors, and acquirers routinely check MSME-1 filing history and overdue MSME balances as an indicator of working-capital stress and compliance discipline.",
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
                    ⚠️ Penalties for Non-Filing or Incorrect Filing
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Penalty on Company: ₹20,000 under Section 405(4) of the Companies Act, 2013 for failure to file MSME-1 or for furnishing incomplete/incorrect information.",
                      "Penalty on Every Officer in Default: ₹20,000 each on directors, company secretary, and CFO responsible for the default.",
                      "Continuing Default: Further penalty of ₹1,000 per day of continuing failure, subject to a maximum of ₹3,00,000 for the company and ₹3,00,000 for each officer in default.",
                      "MSMED Act Interest Exposure: Independent of ROC penalties, compound interest at 3× the RBI bank rate accrues on the overdue amount under Section 16 of the MSMED Act — and is expressly non-deductible for income tax.",
                      "Income Tax Impact: Section 43B(h) disallowance can shift the deduction to a later year, increasing current-year taxable income and advance tax outflow.",
                      "Reputational & Relationship Cost: Persistent overdue MSME balances damage vendor relationships and can trigger supply disruptions or Samadhaan complaints.",
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
                    📅 MSME-1 Filing Calendar — FY 2025-26
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        H1
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          April 2026– September 2025
                        </p>
                        <p className="text-xs text-gray-600">
                          Report micro/small enterprise dues outstanding beyond
                          45 days as at 30th September 2025.{" "}
                          <strong>Due date: 31st October 2025.</strong>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        H2
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          October 2026– March 2026
                        </p>
                        <p className="text-xs text-gray-600">
                          Report micro/small enterprise dues outstanding beyond
                          45 days as at 31st March 2026.{" "}
                          <strong>Due date: 30th April 2026.</strong>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <p className="font-bold text-green-700 mb-1">
                          Best Practice: Start 3 Weeks Early
                        </p>
                        <p className="text-xs text-gray-600">
                          Begin vendor ageing and Udyam verification by the 10th
                          of October / 10th of April so the return is filed
                          comfortably before the deadline, with time to resolve
                          vendor data gaps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              MSME-1 Half-Yearly Filing Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete MSME-1 process — from vendor identification to MCA
                acknowledgment:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Extract Vendor Master & Trade Payables Ledger",
                    description:
                      "Export the complete vendor master and trade payables (sundry creditors) ledger from your accounting system for the relevant half-year. Capture, for each vendor: legal name, PAN, GSTIN, address, invoice-wise amounts, invoice dates, goods/service acceptance dates, agreed credit terms, payments made, and closing balance as at the half-year end (30th September or 31st March). This raw dataset is the foundation of the MSME-1 return — incomplete or unreconciled ledgers are the single biggest cause of MSME-1 errors.",
                    duration: "1 day",
                  },
                  {
                    step: 2,
                    title: "Vendor MSME / Udyam Status Verification",
                    description:
                      "For every vendor with an outstanding balance, determine whether they are registered as a MICRO or SMALL enterprise. Verify using: (a) the Udyam Registration Certificate (URC) obtained from the vendor, showing the Udyam Registration Number (URN) and enterprise classification, (b) verification of the URN on the official Udyam portal to confirm the certificate is live and the classification is current, and (c) the vendor's own written declaration of MSME status with effective date. Important: a vendor may have changed category (e.g., from Small to Medium) during the period — the classification applicable during the relevant transaction period governs reporting. Taxvio performs bulk Udyam verification across your vendor base.",
                    duration: "1-3 days (depends on vendor count)",
                  },
                  {
                    step: 3,
                    title: "Determine the 45-Day Due Date for Each Invoice",
                    description:
                      "Under Section 15 of the MSMED Act, payment must be made on or before the date agreed in writing, and in any case not later than 45 days from the day of acceptance or deemed acceptance. Apply the rule invoice-wise: (a) identify the date of acceptance of goods/services; if no written objection was raised within 15 days of delivery, the delivery date becomes the date of deemed acceptance, (b) if a written credit period shorter than 45 days is agreed, that shorter period applies, (c) if no written agreement exists, the statutory period is 15 days from acceptance/deemed acceptance for Section 43B(h) purposes — while the MSME-1 trigger is framed around the 45-day outer limit. Compute the due date and the days overdue as at the half-year end for each invoice.",
                    duration: "1-2 days",
                  },
                  {
                    step: 4,
                    title: "Compile Outstanding Amounts Beyond 45 Days",
                    description:
                      "Filter the ledger to isolate only those micro and small enterprise invoices where the amount remained unpaid for more than 45 days as at the end of the half-year. Prepare a supplier-wise summary showing: name of the supplier, PAN of the supplier, amount outstanding, and the date from which the amount is due. Where a single supplier has multiple overdue invoices, the form is typically completed with the aggregate amount and the earliest date from which the amount is due, with invoice-level backup retained in your records for audit and ROC scrutiny.",
                    duration: "1 day",
                  },
                  {
                    step: 5,
                    title: "Document the Reason for Delay",
                    description:
                      "Form MSME-1 requires the company to state the reason for delay in payment for the reported amounts. Prepare a clear, factual, and consistent reason for each supplier or category of suppliers — common legitimate reasons include: pending quality inspection or acceptance, disputed quantity or rate, pending debit/credit note adjustment, non-receipt of complete invoice or e-way bill documentation, contractual milestone not achieved, or working-capital constraints. Avoid vague or contradictory wording — the reason is a substantive disclosure and may be examined if the supplier files a Samadhaan complaint. Taxvio helps draft defensible, accurate reason statements.",
                    duration: "Half day",
                  },
                  {
                    step: 6,
                    title: "Reconcile with Books, Audit Notes & 43B(h) Workings",
                    description:
                      "Before filing, reconcile the MSME-1 figures with: (a) the trade payables schedule in your books as at the half-year end, (b) the MSME disclosure in the notes to accounts and any CARO reporting by the statutory auditor, and (c) the Section 43B(h) disallowance working prepared for income tax purposes. Inconsistencies between these three sets of numbers are a frequent trigger for auditor qualifications and departmental queries. Resolve differences (typically arising from unrecorded credit notes, advance adjustments, or timing of acceptance) and document the reconciliation.",
                    duration: "1 day",
                  },
                  {
                    step: 7,
                    title: "Prepare Form MSME-1 on the MCA Portal",
                    description:
                      "Prepare the MSME-1 e-form on the MCA portal with: (a) CIN and basic details of the company, auto-populated on CIN entry, (b) the half-year period for which the return is being filed (April-September or October-March), (c) total outstanding amount due to micro and small enterprise suppliers as at the end of the half-year, (d) supplier-wise particulars — name, PAN, amount outstanding, and date from which the amount is due, and (e) the reasons for delay in payment. Where the number of suppliers is large, use the prescribed attachment/annexure facility so that every reportable supplier is captured. Review all figures against the compiled schedule before proceeding to signing.",
                    duration: "2-4 hours",
                  },
                  {
                    step: 8,
                    title: "Digital Signature & E-Filing",
                    description:
                      "The form must be digitally signed by a director, company secretary, CFO, or other authorised signatory of the company using a valid Class 3 DSC registered on the MCA portal. Upload the form along with any annexures, submit, and complete the payment of applicable MCA fees. On successful submission, the portal generates a Service Request Number (SRN) — record this SRN in your compliance register for tracking and future reference.",
                    duration: "1-2 hours",
                  },
                  {
                    step: 9,
                    title: "MCA Processing & Acknowledgment Archival",
                    description:
                      "Track the SRN on the MCA portal until the filing is taken on record. Download the acknowledgment / challan and the filed copy of the form, and archive them together with the supporting schedule (supplier-wise ageing, Udyam certificates, reason-for-delay notes, and the books reconciliation) in the company's compliance file. These records should be readily retrievable for statutory audit, internal audit, ROC inspection, and any MSEFC or Samadhaan proceedings.",
                    duration: "Same day to 1 working day",
                  },
                  {
                    step: 10,
                    title: "Set Up Ongoing Tracking for the Next Half-Year",
                    description:
                      "MSME-1 is a recurring obligation, so convert the exercise into a continuous process: (a) capture and store the Udyam Registration Number and classification in the vendor master at onboarding, with periodic re-verification, (b) configure an MSME flag and a 45-day ageing report in your accounting/ERP system, (c) obtain annual written confirmations of MSME status from all vendors, since classification can change, (d) set calendar reminders for 10th October and 10th April to begin compilation, and (e) align the ageing report with the Section 43B(h) working so tax and ROC positions stay consistent. Taxvio provides a vendor-master template, an ageing tracker, and automated deadline reminders as part of the Standard and Complete packages.",
                    duration: "Ongoing (half-yearly cycle)",
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
                  <strong>2-3 working days</strong> where the vendor ledger is
                  clean and Udyam details are already on file. For companies with
                  large or unverified vendor bases, allow{" "}
                  <strong>5-10 working days</strong> for Udyam verification and
                  ledger reconciliation. Breakdown: ledger extraction (1 day) +
                  Udyam verification (1-3 days) + 45-day ageing & compilation
                  (1-2 days) + reason drafting and reconciliation (1 day) + form
                  preparation, DSC signing and filing (half day) + MCA
                  acknowledgment (same day to 1 day).{" "}
                  <strong>Critical deadlines:</strong> 31st October 2026for
                  April-September 2026, and 30th April 2026 for October
                  2025-March 2026.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for MSME-1 Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  From the Company
                </p>
                <ul className="space-y-3">
                  {[
                    "Certificate of Incorporation (CIN for verification)",
                    "Vendor master list (name, PAN, GSTIN, address, payment terms)",
                    "Trade payables / sundry creditors ledger for the half-year",
                    "Invoice-wise purchase register with invoice dates and amounts",
                    "Goods/service acceptance records (GRN, service acceptance notes)",
                    "Payment records / bank statements showing settlements made",
                    "Outstanding dues ageing report as at the half-year end",
                    "DSC of authorised signatory (director, CS, or CFO)",
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
                  From Each MSME Vendor
                </p>
                <ul className="space-y-3">
                  {[
                    "Udyam Registration Certificate (URC) with Udyam Registration Number",
                    "Enterprise classification shown on the certificate (Micro / Small / Medium)",
                    "PAN of the supplier (mandatory field in MSME-1)",
                    "Written declaration of MSME status with effective date",
                    "Intimation of any change in MSME classification during the period",
                    "Agreed credit terms / purchase order or supply agreement (if in writing)",
                    "Vendor balance confirmation as at the half-year end (recommended)",
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
                  Working Papers to Prepare
                </p>
                <ul className="space-y-3">
                  {[
                    "Supplier-wise schedule of amounts outstanding beyond 45 days",
                    "Invoice-level ageing showing acceptance date, due date, and days overdue",
                    "Reason-for-delay note for each supplier or category of suppliers",
                    "Reconciliation of MSME-1 figures with trade payables in the books",
                    "Cross-check with MSME disclosure in notes to accounts and CARO reporting",
                    "Section 43B(h) disallowance working for income tax alignment",
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
                  For MCA E-Filing
                </p>
                <ul className="space-y-3">
                  {[
                    "Half-year period being reported (Apr-Sep or Oct-Mar)",
                    "Total outstanding amount due to micro & small suppliers",
                    "Supplier-wise particulars: name, PAN, amount, date from which due",
                    "Reasons for delay in payment (as disclosed in the form)",
                    "Annexure/attachment where the number of suppliers is large",
                    "Valid Class 3 DSC registered on the MCA portal",
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
                  "Whether any written agreement specifies a credit period shorter than 45 days",
                  "Whether any written objection to goods/services was raised within 15 days of delivery",
                  "Details of disputed invoices, debit notes, or quality rejections affecting the balance",
                  "Details of advances paid to MSME vendors and their adjustment status",
                  "Whether any MSME Samadhaan complaint or MSEFC proceeding is pending",
                  "Prior half-year MSME-1 filing details (SRN) for continuity and comparison",
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
              Common Mistakes in MSME-1 Filing
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                MSME-1 looks simple but depends entirely on accurate vendor data
                — avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Including Medium Enterprises in the Return",
                    icon: "🏭",
                    problem:
                      "Reporting dues payable to MEDIUM enterprises along with micro and small enterprises. The Specified Companies Order, 2019 and Section 15 of the MSMED Act delayed-payment provisions cover only MICRO and SMALL enterprises. Including medium enterprise balances overstates the reported figure, creates an inconsistency with the notes to accounts and the Section 43B(h) working, and invites auditor and departmental queries.",
                    solution:
                      "Segregate your MSME vendors into Micro, Small, and Medium based strictly on the classification printed on each vendor's Udyam Registration Certificate, and report only the Micro and Small balances. Maintain the Medium enterprise balances in a separate schedule for internal reference. Taxvio's vendor verification output tags each vendor by category so that only reportable balances flow into MSME-1.",
                  },
                  {
                    mistake: "Relying on Vendor Claims Without Udyam Verification",
                    icon: "🔍",
                    problem:
                      "Accepting a vendor's verbal claim, an old EM-II / UAM number, or an invoice footer stating 'MSME registered' as sufficient proof of micro or small enterprise status. Vendors may be unregistered, may have migrated categories, or may have had their registration updated — leading to either over-reporting (including non-MSMEs) or under-reporting (omitting genuine MSMEs, which is the more serious risk).",
                    solution:
                      "Obtain the Udyam Registration Certificate from every vendor and independently verify the Udyam Registration Number on the official Udyam portal to confirm it is live and to read the current classification. Record the URN and category in the vendor master, and refresh the confirmation at least annually and at the start of each half-year. Taxvio performs bulk Udyam verification and returns a verified, category-tagged vendor list.",
                  },
                  {
                    mistake: "Counting 45 Days from the Invoice Date",
                    icon: "📆",
                    problem:
                      "Computing the 45-day period from the invoice date instead of the date of acceptance or deemed acceptance of the goods or services. Where goods are delivered earlier than invoicing, or where acceptance occurs on delivery because no written objection was raised within 15 days, using the invoice date understates the days overdue and can wrongly exclude invoices from the return.",
                    solution:
                      "Build the ageing from the acceptance date: use the documented acceptance date (GRN, inspection report, service acceptance note) where available; otherwise use the date of delivery as the deemed acceptance date if no written objection was raised within 15 days. Where a written agreement specifies a shorter credit period, apply that shorter period. Taxvio configures the ageing logic invoice-wise and documents the basis used for each line.",
                  },
                  {
                    mistake: "Missing the 31st October / 30th April Deadline",
                    icon: "⏰",
                    problem:
                      "Treating MSME-1 as an annual filing or forgetting it entirely because it sits outside the familiar AOC-4 / MGT-7 cycle. Because MSME-1 is half-yearly, companies frequently file one half and miss the other. Each default attracts ₹20,000 on the company and ₹20,000 on each officer in default, plus ₹1,000 per day of continuing default up to ₹3,00,000.",
                    solution:
                      "Add both MSME-1 deadlines (31st October and 30th April) to the statutory compliance calendar alongside a preparation trigger on the 10th of October and 10th of April. Assign a named owner in finance for vendor ageing and a named owner in secretarial for the filing. Taxvio's compliance calendar issues automated reminders at T-21, T-10, and T-3 days for both half-years.",
                  },
                  {
                    mistake: "Vague or Contradictory Reasons for Delay",
                    icon: "📝",
                    problem:
                      "Entering generic reasons such as 'delay' or 'as per terms', or stating a reason in MSME-1 that contradicts the company's own records — for example, citing a quality dispute where no debit note or written objection exists, or citing 'as per agreed credit terms' for a period longer than 45 days, which is not a valid justification under Section 15 of the MSMED Act.",
                    solution:
                      "Draft a specific, factual reason for each supplier that is supported by documentation on file — pending inspection with inspection log reference, quantity dispute with debit note reference, incomplete documentation with the specific document pending, or working-capital constraint. Ensure the stated reason is consistent with your books, correspondence with the vendor, and audit disclosures. Taxvio reviews and drafts defensible reason statements as part of the filing.",
                  },
                  {
                    mistake: "Ignoring the Section 43B(h) Income Tax Linkage",
                    icon: "🧮",
                    problem:
                      "Filing MSME-1 as a standalone ROC formality without reconciling it to the Section 43B(h) disallowance working prepared at the year end. Mismatches between the overdue MSME balance disclosed to the ROC, the figure in the notes to accounts, and the amount disallowed in the tax computation are a visible inconsistency that assessing officers and auditors can pick up, and may indicate an under-provided tax liability.",
                    solution:
                      "Use a single source of truth: one MSME vendor ageing dataset that feeds MSME-1, the notes to accounts disclosure, and the Section 43B(h) working. Perform a documented three-way reconciliation at each half-year end and again at the financial year end, explaining any differences (typically timing of acceptance, credit notes, or advances). Taxvio's Complete package includes a Section 43B(h) review and a signed three-way reconciliation.",
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
              MSME-1 Filing Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Half-yearly MSME compliance packages for companies with MSME vendor
              bases:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹2,499",
                  popular: false,
                  features: [
                    "Single half-yearly MSME-1 filing",
                    "Udyam verification for up to 15 vendors",
                    "45-day ageing computation from your ledger",
                    "Supplier-wise outstanding schedule preparation",
                    "Reason-for-delay drafting support",
                    "Form MSME-1 preparation & e-filing",
                    "Acknowledgment download & delivery",
                    "Email support",
                  ],
                  limitations: [
                    "Covers one half-year only (not both)",
                    "Ledger clean-up / reconciliation not included",
                    "No Section 43B(h) review",
                    "No ongoing deadline tracking",
                  ],
                  ideal:
                    "Companies with a small MSME vendor base filing for one half-year",
                },
                {
                  name: "Standard",
                  price: "₹4,499",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "BOTH half-yearly filings for FY 2025-26 (Oct + Apr)",
                    "Udyam verification for up to 60 vendors",
                    "Vendor master MSME tagging template",
                    "Trade payables reconciliation with MSME-1 figures",
                    "Automated deadline reminders (T-21, T-10, T-3 days)",
                    "Vendor declaration letter templates",
                    "Priority WhatsApp + email support",
                  ],
                  limitations: [
                    "Section 43B(h) detailed review offered as add-on",
                  ],
                  ideal:
                    "Most companies purchasing regularly from MSME vendors across the year",
                },
                {
                  name: "Complete",
                  price: "₹8,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Unlimited vendor Udyam verification",
                    "Full vendor master audit & MSME flag setup in your ERP",
                    "Section 43B(h) disallowance review & working",
                    "Three-way reconciliation (MSME-1 ↔ books ↔ tax computation)",
                    "MSME disclosure support for notes to accounts & CARO",
                    "MSMED Act interest exposure computation",
                    "Dedicated CA + CS team with year-round advisory",
                  ],
                  limitations: [],
                  ideal:
                    "Companies with large MSME vendor bases or material 43B(h) exposure",
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
                    <p className="text-sm text-gray-500">
                      {pkg.name === "Basic"
                        ? "Per half-yearly filing"
                        : "For FY 2025-26 (both halves)"}
                    </p>
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
                    service: "Additional Half-Yearly Filing",
                    price: "₹1,999",
                    desc: "One extra MSME-1 filing beyond the package inclusion",
                  },
                  {
                    service: "Bulk Udyam Verification",
                    price: "₹2,999",
                    desc: "Portal verification & category tagging for up to 100 vendors",
                  },
                  {
                    service: "Section 43B(h) Review",
                    price: "₹4,999",
                    desc: "Disallowance working + three-way reconciliation with books",
                  },
                  {
                    service: "Belated MSME-1 Filing",
                    price: "₹3,499",
                    desc: "Catch-up filing for missed past half-years with penalty guidance",
                  },
                  {
                    service: "DPT-3 Return Filing",
                    price: "₹2,999",
                    desc: "Annual return of deposits and exempted receipts",
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
                  name: "Sandeep Aggarwal, Director",
                  company: "Shivalik Auto Components Pvt Ltd",
                  location: "Muzaffarnagar, UP",
                  text: "We buy from over 80 small fabrication and machining vendors and had no idea which of them were actually Udyam registered. Taxvio verified our entire vendor list on the Udyam portal, tagged them Micro/Small/Medium, and filed our October MSME-1 correctly. They also caught that we had been wrongly including two medium enterprises in earlier disclosures.",
                },
                {
                  name: "Kavita Nair, Finance Manager",
                  company: "Orbit Packaging Industries Pvt Ltd",
                  location: "Pune, MH",
                  text: "Our biggest worry was the 43B(h) disallowance at year end. Taxvio built one ageing report that feeds our MSME-1, our notes to accounts, and our tax computation — so all three numbers finally match. Our statutory auditor raised zero queries on MSME disclosures this year, which has never happened before.",
                },
                {
                  name: "Harish Bansal, CFO",
                  company: "Novacore Engineering Pvt Ltd",
                  location: "Ghaziabad, UP",
                  text: "We had missed two half-yearly MSME-1 filings without realising it was a twice-a-year form. Taxvio completed the belated filings, advised us on the penalty exposure under Section 405(4), and set up reminders for both deadlines. We have not missed a filing since. Clear, practical, no-nonsense support.",
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
              MSME-1 Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides online MSME-1 half-yearly return filing services for
              manufacturing, trading, and service companies across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote handling with vendor
              Udyam verification, ageing computation, and MCA e-filing.
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
                  title: "ADT-1 Auditor Appointment",
                  icon: "📋",
                  link: "/serviceslist/roc/adt-1-auditor-appointment",
                  desc: "Statutory auditor appointment filing",
                },
                {
                  title: "DPT-3 Deposit Return",
                  icon: "🏦",
                  link: "/serviceslist/roc/dpt-3-filing",
                  desc: "Annual return of deposits & exempted receipts",
                },
                {
                  title: "AOC-4 Financial Statements",
                  icon: "📊",
                  link: "/serviceslist/roc/aoc-4-filing",
                  desc: "Filing of FY 2024-25 audited financials",
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
                    Half-Yearly MSME Compliance
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File MSME-1 On Time — Avoid ₹3 Lakh Penalty Exposure
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get vendor Udyam verification, 45-day ageing computation,
                    reason-for-delay drafting, and MCA e-filing handled
                    end-to-end for both half-years. We also align your MSME-1
                    figures with Section 43B(h) and your audit disclosures.
                    Starting ₹2,499 with expert CA & CS team.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File MSME-1 Now — ₹2,499
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
            href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20MSME-1%20half-yearly%20return%20filing%20for%20FY%202025-26"
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
              Need MSME-1 Help? Chat Now!
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
      q: "Which companies are required to file Form MSME-1?",
      a: "Every company that receives goods or services from a micro or small enterprise, and whose payment to that supplier remains outstanding for more than 45 days from the date of acceptance or deemed acceptance, is a 'Specified Company' and must file Form MSME-1. This flows from Section 405 of the Companies Act, 2013 read with the Specified Companies (Furnishing of Information about Payment to Micro and Small Enterprise Suppliers) Order, 2019. There is no turnover, paid-up capital, or company-type exemption — private limited, public limited, one-person companies, and Section 8 companies are all covered. The two conditions that must be satisfied together are: (1) the supplier is registered as a MICRO or SMALL enterprise (evidenced by a valid Udyam Registration Certificate showing that classification), and (2) the payment has remained unpaid beyond 45 days. If your company buys only from medium enterprises, large enterprises, or unregistered suppliers, the reporting obligation does not arise — but you should still document the verification you performed to reach that conclusion.",
    },
    {
      q: "Do we need to file a NIL MSME-1 return if there are no overdue payments?",
      a: "On a strict reading of the Specified Companies Order, 2019, the filing obligation is triggered only where there are amounts outstanding to micro or small enterprise suppliers beyond 45 days — so where there are genuinely no such overdue amounts at the end of the half-year, the obligation arguably does not arise. However, practice varies: many companies and professionals prefer to file a NIL or 'no amount outstanding' return as documented evidence that the position was assessed, particularly where the company has a large MSME vendor base and wants an audit trail showing that the half-yearly review was performed. The conservative approach is especially advisable for companies under lender or investor scrutiny, or where the statutory auditor expects to see evidence of the review. Regardless of whether you file, you should maintain the supporting workings — the vendor Udyam verification list and the 45-day ageing report showing nil overdue — in your compliance file. Taxvio advises on the approach best suited to your risk posture and prepares the supporting documentation either way.",
    },
    {
      q: "Does MSME-1 apply to dues payable to medium enterprises?",
      a: "NO. Form MSME-1 covers only outstanding payments to MICRO and SMALL enterprises. Medium enterprises are outside the scope of both the Specified Companies Order, 2019 and the delayed-payment protection under Section 15 of the MSMED Act, 2006. This is one of the most commonly misunderstood points, because vendors often describe themselves simply as 'MSME registered' without specifying their category. The consequence of getting this wrong runs both ways: including medium enterprise balances overstates your disclosed figure and creates inconsistency with your notes to accounts and Section 43B(h) working, while omitting genuine micro or small enterprises understates the return and exposes you to penalty. The only reliable way to classify is to obtain each vendor's Udyam Registration Certificate and read the category stated on it, then verify the Udyam Registration Number on the official portal to confirm it is current — vendors do migrate categories as they grow.",
    },
    {
      q: "How exactly is the 45-day period calculated?",
      a: "The 45-day period runs from the date of ACCEPTANCE or DEEMED ACCEPTANCE of the goods or services — not from the invoice date, which is where most companies go wrong. The mechanics under Section 2(b) and Section 15 of the MSMED Act are: (1) If the buyer accepts the goods or services on delivery, the acceptance date is the delivery date. (2) If the buyer raises a written objection about the goods or services within 15 days of delivery, the acceptance date is the date on which that objection is resolved. (3) If the buyer raises no written objection within 15 days of delivery, the delivery date becomes the date of DEEMED acceptance. From that acceptance or deemed acceptance date, payment must be made on or before the date agreed in writing between the parties, and in no case later than 45 days — meaning that if the written agreement provides a 30-day credit period, 30 days applies, and if the agreement provides 90 days, the statutory 45-day cap still applies because any agreement exceeding 45 days is not enforceable for this purpose. Note separately that for Section 43B(h) of the Income Tax Act, where there is no written agreement, the applicable limit is 15 days from acceptance — so the tax deadline can be shorter than the MSME-1 trigger. Taxvio configures the ageing logic invoice-wise and documents the basis used for each line so the position is defensible.",
    },
    {
      q: "What is the connection between MSME-1 and Section 43B(h) of the Income Tax Act?",
      a: "They are two separate obligations arising from the same underlying facts, and they must be kept consistent. MSME-1 is a ROC disclosure requirement under the Companies Act that reports overdue micro and small enterprise balances half-yearly. Section 43B(h) of the Income Tax Act, 1961 (inserted by the Finance Act, 2023) is a tax provision stating that any sum payable to a micro or small enterprise, which is not paid within the time limit specified in Section 15 of the MSMED Act, is allowed as a deduction only in the previous year in which the payment is actually made — regardless of the accrual method of accounting. The practical impact is that an expense you have booked may be disallowed in the current year and shifted to a later year, increasing current-year taxable income and advance tax outflow. Because both provisions draw on the same vendor ageing data, assessing officers and statutory auditors increasingly cross-check the overdue MSME figure disclosed in MSME-1 against the amount disallowed in the tax computation and the amount disclosed in the notes to accounts. Any mismatch is a visible red flag. The right approach is to maintain a single MSME vendor ageing dataset that feeds all three, with a documented three-way reconciliation at each half-year and financial year end — which is included in Taxvio's Complete package.",
    },
    {
      q: "What happens if we discover we have missed MSME-1 filings for past half-years?",
      a: "You should file the missed returns as soon as possible, because the penalty under Section 405(4) of the Companies Act, 2013 includes a continuing-default component of ₹1,000 per day (subject to a maximum of ₹3,00,000 for the company and ₹3,00,000 for each officer in default), on top of the base penalty of ₹20,000 on the company and ₹20,000 on each officer in default. Every day of delay increases the exposure, so early rectification materially limits the damage and demonstrates good faith. The practical steps are: (1) reconstruct the vendor ageing position as at each missed half-year end from your books, (2) verify the Udyam status of the relevant vendors as applicable to those periods, (3) prepare and file the belated MSME-1 for each missed half-year in chronological order, and (4) document the reason for the delay and the remedial process put in place. You should also assess whether the same underlying overdue balances create a Section 43B(h) disallowance exposure for the corresponding assessment years, since a missed MSME-1 often indicates the tax position was also not computed. Taxvio offers a belated MSME-1 catch-up service that covers reconstruction, filing, penalty exposure guidance, and setting up recurring deadline tracking so the lapse does not repeat.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — MSME-1 Half-Yearly Filing
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