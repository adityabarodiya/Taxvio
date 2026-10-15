"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tax Appeal Filing Services - CIT(A), ITAT and High Court",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  },
  description:
    "Professional income tax appeal filing services before Commissioner of Income Tax (Appeals), Income Tax Appellate Tribunal and High Court. Expert grounds of appeal drafting, legal documentation, hearing representation, stay of demand petition and complete follow-up till disposal for adverse assessment orders, penalty orders and demand notices.",
  serviceType: "Income Tax Appeal Filing and Representation",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "9999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "9999",
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
      name: "What is the time limit to file an appeal against income tax assessment order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An appeal before CIT(A) must be filed within 30 days from the date of receipt of the assessment order, demand notice or penalty order. Delay can be condoned by the CIT(A) if sufficient cause is shown, but it's best to file within the original 30-day deadline.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between CIT(A), ITAT and High Court appeals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CIT(A) is the first appellate authority where appeals against Assessing Officer's orders are filed. ITAT (Income Tax Appellate Tribunal) is the second appellate authority where appeals against CIT(A) orders are filed. High Court is the third appellate level where appeals on substantial questions of law are filed against ITAT orders. Each level requires different procedures, fees and documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to pay the tax demand while filing an appeal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should pay the admitted tax liability. For disputed portions, you can file a stay of demand petition before CIT(A) along with the appeal. If stay is granted, you typically need to pay only 15-20% of the disputed demand until the appeal is decided. Without stay, full demand must be paid to avoid recovery proceedings.",
      },
    },
    {
      "@type": "Question",
      name: "What are the chances of success in a tax appeal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Success depends on merits of the case, quality of documentation, legal grounds, applicable case laws and effective representation. Well-prepared appeals with strong legal grounds and supporting evidence have significantly higher success rates. Professional assistance from experienced CAs and tax consultants improves chances of favorable outcome.",
      },
    },
  ],
};

export default function TaxAppealFilingClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <InquiryForm />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* URGENCY BANNER */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⏰ Appeal Deadline: File Within 30 Days of Assessment Order to Protect
          Your Rights — Late Filing May Result in Loss of Appeal Rights
        </div>

        {/* HERO */}
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
              <span className="text-white">Tax Appeal Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  ⚖️ Tax Appeal Services
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Tax Appeal
                  <br />
                  <span className="text-[#7ecbf0]">Filing Services</span>
                  <br />
                  CIT(A), ITAT, HC
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Received an unfavorable{" "}
                  <strong className="text-white">assessment order, penalty
                  order or demand notice</strong>? Don't accept it without a fight.
                  Taxvio provides professional{" "}
                  <strong className="text-white">tax appeal filing
                  services</strong> before CIT(A), ITAT and High Court — expert
                  grounds drafting, complete legal documentation, effective hearing
                  representation and proactive follow-up till final disposal across
                  India.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File Tax Appeal — ₹9,999 →
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    📞 Free Case Review
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ CIT(A) Appeals",
                    "✅ ITAT Appeals",
                    "✅ High Court Appeals",
                    "✅ Stay of Demand",
                  ].map((text) => (
                    <span
                      key={text}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Quick Facts
                </p>

                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["⏰", "30-day filing deadline from order"],
                    ["⚖️", "Three appeal levels: CIT(A), ITAT, HC"],
                    ["📋", "Expert grounds drafting included"],
                    ["👨‍💼", "Professional representation"],
                    ["🛡️", "Stay of demand support"],
                    ["💰", "Starting ₹9,999"],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-3">
                      <span>{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "2,000+", label: "Appeals Filed", icon: "⚖️" },
              { number: "₹9,999", label: "Starting Fee", icon: "💰" },
              { number: "85%", label: "Success Rate", icon: "✅" },
              { number: "All India", label: "Service Coverage", icon: "🇮🇳" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {item.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BADGES */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ Expert Legal Grounds",
              "✔ Case Law Research",
              "✔ Complete Documentation",
              "✔ Appellate Representation",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* MAIN CONTENT */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* WHAT IS TAX APPEAL */}
          <section id="what-is-appeal">
            <SectionLabel text="Understanding Appeals" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is a Tax Appeal and When Should You File One?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>tax appeal</strong> is a legal remedy available to
                  taxpayers to challenge adverse orders passed by income tax
                  authorities. If you disagree with an{" "}
                  <strong>assessment order</strong>, <strong>demand
                  notice</strong>, <strong>penalty order</strong> or{" "}
                  <strong>refund rejection</strong>, you have the right to file an
                  appeal before higher appellate authorities.
                </p>

                <p>
                  The Indian income tax appellate system has{" "}
                  <strong>three levels</strong>: (1){" "}
                  <strong>Commissioner of Income Tax (Appeals) — CIT(A)</strong>,
                  the first appellate authority, (2){" "}
                  <strong>Income Tax Appellate Tribunal — ITAT</strong>, the
                  second appellate authority, and (3){" "}
                  <strong>High Court</strong>, the third appellate authority (on
                  substantial questions of law).
                </p>

                <p>
                  Each appellate authority has the power to review, modify, cancel
                  or confirm the lower authority's order. A well-prepared appeal
                  with strong legal grounds, supporting evidence and effective
                  representation can significantly reduce tax liability, interest
                  and penalties.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  You should file an appeal when the Assessing Officer has made
                  incorrect additions to income, disallowed legitimate deductions,
                  rejected exemption claims, imposed excessive penalties, issued
                  demand based on wrong interpretation of law, or made procedural
                  errors in the assessment process.
                </p>

                <p>
                  The appeal must be filed <strong>within 30 days</strong> of
                  receipt of the order. Late filing is allowed with condonation of
                  delay if sufficient cause is shown, but it's best to file within
                  the original deadline to avoid complications.
                </p>

                <p>
                  Taxvio provides complete tax appeal filing services across India
                  — from initial case analysis and grounds drafting to
                  documentation, filing, hearing representation, stay of demand
                  petitions and follow-up till final disposal at all appellate
                  levels.
                </p>
              </div>
            </div>
          </section>

          {/* APPELLATE AUTHORITIES */}
          <section id="appellate-authorities">
            <SectionLabel text="Appeal Levels" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Three Levels of Income Tax Appeals in India
            </h2>

            <p className="text-gray-600 mb-10 max-w-3xl">
              Understanding the appellate hierarchy, procedures and requirements
              for each level is essential for effective appeal strategy.
            </p>

            <div className="space-y-6">
              {[
                {
                  level: "First Appeal",
                  authority: "Commissioner of Income Tax (Appeals) — CIT(A)",
                  icon: "📋",
                  color: "blue",
                  appealFrom: "Orders of Assessing Officer",
                  orderTypes: [
                    "Assessment orders under Section 143(3) or 144",
                    "Reassessment orders under Section 147/148",
                    "Penalty orders under Section 271, 271AAB, etc.",
                    "Orders refusing to allow relief under Section 89",
                    "Orders refusing to grant registration/approval (certain cases)",
                    "Demand notices under Section 156",
                  ],
                  timeLimit: "30 days from date of receipt of order",
                  appealFee:
                    "NIL (free of cost for appeals before CIT(A))",
                  procedure:
                    "File Form 35 (appeal memorandum) along with copies of assessment order, grounds of appeal and supporting documents. CIT(A) will fix hearing dates and pass appellate order.",
                  stayProvision:
                    "Stay of demand can be granted by CIT(A) on filing stay petition. Typically 15-20% of disputed demand must be paid.",
                  averageTime: "12–24 months for disposal",
                },
                {
                  level: "Second Appeal",
                  authority: "Income Tax Appellate Tribunal — ITAT",
                  icon: "⚖️",
                  color: "purple",
                  appealFrom: "Orders of CIT(A)",
                  orderTypes: [
                    "Appellate orders passed by CIT(A)",
                    "Appeals filed by both taxpayer and Department",
                    "Cross objections by either party",
                    "Orders of Dispute Resolution Panel (DRP) in certain cases",
                  ],
                  timeLimit: "60 days from date of receipt of CIT(A) order",
                  appealFee:
                    "₹500 (if total income ≤ ₹5 lakh), ₹1,500 (if total income > ₹5 lakh), ₹10,000 (for companies, firms, etc.)",
                  procedure:
                    "File Form 36 (appeal memorandum) before ITAT bench (in the city having jurisdiction). Pay appeal fee. ITAT will schedule hearing before a two-member bench (Judicial Member + Accountant Member).",
                  stayProvision:
                    "ITAT can grant stay of demand on filing stay application. Generally requires payment of 15-20% of disputed demand.",
                  averageTime: "18–36 months for disposal",
                },
                {
                  level: "Third Appeal",
                  authority: "High Court",
                  icon: "🏛️",
                  color: "red",
                  appealFrom: "Orders of ITAT",
                  orderTypes: [
                    "ITAT orders involving substantial questions of law",
                    "Appeals on legal interpretation, not factual matters",
                    "Questions of constitutional validity",
                    "Conflicting ITAT decisions requiring clarity",
                  ],
                  timeLimit: "120 days from date of receipt of ITAT order",
                  appealFee:
                    "Varies by High Court — typically ₹5,000–₹25,000 (court fees as per High Court rules)",
                  procedure:
                    "File appeal petition under Section 260A before jurisdictional High Court. The appeal must raise substantial questions of law. High Court will admit appeal if substantial question is found, and hear arguments.",
                  stayProvision:
                    "High Court can grant stay on application. Conditions vary based on merits and amount involved.",
                  averageTime: "2–5 years for disposal (varies significantly)",
                },
              ].map((item) => (
                <div
                  key={item.level}
                  className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 border-2 border-${item.color}-200 rounded-3xl p-8 md:p-10`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                        {item.level}
                      </p>
                      <h3 className={`text-2xl font-bold text-${item.color}-800`}>
                        {item.authority}
                      </h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-5 border border-gray-200">
                        <p className="font-bold text-gray-800 mb-2 text-sm">
                          Appeal From
                        </p>
                        <p className="text-sm text-gray-700">{item.appealFrom}</p>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-gray-200">
                        <p className="font-bold text-gray-800 mb-3 text-sm">
                          Types of Orders
                        </p>
                        <ul className="space-y-1">
                          {item.orderTypes.map((type, i) => (
                            <li key={i} className="text-xs text-gray-700 flex gap-2">
                              <span>•</span>
                              <span>{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-gray-200">
                        <p className="font-bold text-gray-800 mb-2 text-sm">
                          Time Limit
                        </p>
                        <p className="text-sm text-gray-700">{item.timeLimit}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-5 border border-gray-200">
                        <p className="font-bold text-gray-800 mb-2 text-sm">
                          Appeal Fee
                        </p>
                        <p className="text-sm text-gray-700">{item.appealFee}</p>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-gray-200">
                        <p className="font-bold text-gray-800 mb-2 text-sm">
                          Procedure
                        </p>
                        <p className="text-sm text-gray-700">{item.procedure}</p>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-gray-200">
                        <p className="font-bold text-gray-800 mb-2 text-sm">
                          Stay of Demand
                        </p>
                        <p className="text-sm text-gray-700">{item.stayProvision}</p>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-gray-200">
                        <p className="font-bold text-gray-800 mb-2 text-sm">
                          Average Disposal Time
                        </p>
                        <p className="text-sm text-gray-700">{item.averageTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Note:</strong> After High Court, a final appeal to the
                Supreme Court of India is possible under Article 136 of the
                Constitution, but only in exceptional cases involving significant
                legal questions or substantial public interest. Supreme Court
                appeals require specialized legal representation.
              </p>
            </div>
          </section>

          {/* GROUNDS OF APPEAL */}
          <section id="grounds-of-appeal">
            <SectionLabel text="Legal Grounds" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Grounds of Appeal Against Assessment Orders
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              Strong, legally sound grounds are the foundation of a successful
              appeal. Here are the most common grounds used in tax appeals.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "📊",
                  ground: "Incorrect Addition to Income",
                  desc: "Assessing Officer added income that was not earned, already disclosed, or exempt under law.",
                },
                {
                  icon: "🚫",
                  ground: "Wrongful Disallowance of Deductions",
                  desc: "Legitimate business expenses, depreciation or other deductions wrongly disallowed without valid reason.",
                },
                {
                  icon: "📉",
                  ground: "Rejection of Exemption Claims",
                  desc: "Exemptions under Section 10, 11, 54, 54EC or other provisions rejected despite fulfilling all conditions.",
                },
                {
                  icon: "⚖️",
                  ground: "Misinterpretation of Law",
                  desc: "Assessing Officer applied incorrect legal provisions or misinterpreted applicable sections.",
                },
                {
                  icon: "📋",
                  ground: "Procedural Irregularities",
                  desc: "Assessment order passed without following due process, issuing proper notices or providing reasonable opportunity.",
                },
                {
                  icon: "🔍",
                  ground: "Lack of Evidence",
                  desc: "Additions made without sufficient evidence or on mere suspicion/presumption.",
                },
                {
                  icon: "📈",
                  ground: "Excessive Estimation of Income",
                  desc: "Income estimated at unreasonably high rates without basis in facts or comparable cases.",
                },
                {
                  icon: "💰",
                  ground: "Invalid Penalty Levy",
                  desc: "Penalty imposed without establishing concealment of income or furnishing of inaccurate particulars.",
                },
                {
                  icon: "📅",
                  ground: "Time-Barred Reassessment",
                  desc: "Reassessment notice issued beyond statutory time limits or without valid reasons to believe income escaped assessment.",
                },
                {
                  icon: "🧾",
                  ground: "Non-Consideration of Submissions",
                  desc: "Assessing Officer ignored documents, evidence or explanations submitted during assessment proceedings.",
                },
                {
                  icon: "📖",
                  ground: "Judicial Precedents Ignored",
                  desc: "Relevant Supreme Court, High Court or Tribunal decisions supporting taxpayer's case were not considered.",
                },
                {
                  icon: "🔄",
                  ground: "Double Taxation",
                  desc: "Same income taxed twice — once as business income and again under another head, or in multiple years.",
                },
              ].map((item) => (
                <div
                  key={item.ground}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {item.ground}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* STAY OF DEMAND */}
          <section
            id="stay-of-demand"
            className="bg-green-50 border border-green-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Stay of Demand" />

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Stay of Demand Petition — Protect Your Assets During Appeal
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              When you file an appeal, the tax demand does not automatically get
              stayed. Without a stay order, the department can initiate recovery
              proceedings. Filing a stay petition protects you during the appeal
              process.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  What Is Stay of Demand?
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  A stay of demand is an order passed by the appellate authority
                  (CIT(A) or ITAT) directing the Assessing Officer to not recover
                  the disputed tax demand until the appeal is decided. It prevents
                  bank account attachment, property seizure and other recovery
                  actions.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Stay is granted on the condition that the taxpayer pays a
                  portion of the demand (typically 15–20% of the disputed amount)
                  and demonstrates a prima facie case in their favor.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  How to File Stay Petition
                </h3>
                <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                  <li>File appeal before CIT(A) or ITAT</li>
                  <li>
                    Simultaneously file a separate stay petition/application
                  </li>
                  <li>
                    Provide detailed grounds showing financial hardship and prima
                    facie case
                  </li>
                  <li>
                    Pay the portion of demand directed by the appellate authority
                    (usually 15-20%)
                  </li>
                  <li>
                    Attend stay hearing and present arguments supporting stay
                  </li>
                  <li>
                    Obtain stay order — submit copy to Assessing Officer to halt
                    recovery
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-6 bg-white border border-green-200 rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-green-800">Important:</strong> Stay
                petitions must be filed promptly after filing appeal. Delay in
                filing stay petition can result in recovery actions being
                initiated. Professional assistance ensures timely and effective
                stay petition preparation and presentation.
              </p>
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="Required Documentation" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Tax Appeal Filing
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Basic Documents (All Appeals)
                </p>

                <ul className="space-y-3">
                  {[
                    "Copy of assessment order / penalty order / demand notice",
                    "PAN card",
                    "Aadhaar card",
                    "Filed ITR for the assessment year",
                    "ITR acknowledgement (ITR-V)",
                    "Form 26AS for relevant year",
                    "All correspondence with Assessing Officer",
                    "Reply submitted during assessment (if any)",
                    "Previous orders (if any) for same or related years",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-blue-50 text-blue-700">
                  Supporting Documents (Case-Specific)
                </p>

                <ul className="space-y-3">
                  {[
                    "Books of accounts, vouchers, ledgers",
                    "Bank statements for all accounts",
                    "Investment proofs and certificates",
                    "Property documents (for capital gains cases)",
                    "Loan agreements, interest certificates",
                    "Business contracts, agreements, invoices",
                    "TDS certificates, Form 16/16A",
                    "Audit reports (tax audit, statutory audit)",
                    "Expert reports, valuation reports (if applicable)",
                    "Case laws supporting your position",
                    "Previous appellate orders (if similar issue decided)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-blue-600 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* OUR PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Help" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Tax Appeal Filing Process
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl">
              Our comprehensive, professional approach ensures legally sound
              appeals with strong grounds, complete documentation and effective
              representation at all appellate levels.
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Case Analysis & Merit Assessment",
                    desc: "We thoroughly review the assessment order, identify errors, evaluate legal grounds, assess chances of success and determine appeal strategy.",
                  },
                  {
                    step: "02",
                    title: "Legal & Case Law Research",
                    desc: "We research applicable legal provisions, relevant Supreme Court and High Court judgments, ITAT decisions and circulars supporting your case.",
                  },
                  {
                    step: "03",
                    title: "Grounds of Appeal Drafting",
                    desc: "We prepare detailed, legally sound grounds of appeal addressing each addition, disallowance or error in the assessment order with supporting legal arguments.",
                  },
                  {
                    step: "04",
                    title: "Documentation & Appeal Preparation",
                    desc: "We compile all supporting documents, prepare appeal memorandum (Form 35/36), organize evidence systematically and ensure compliance with procedural requirements.",
                  },
                  {
                    step: "05",
                    title: "Filing & Stay of Demand Petition",
                    desc: "We file the appeal before CIT(A)/ITAT within deadline, pay applicable fees, file stay of demand petition, and obtain acknowledgment and reference numbers.",
                  },
                  {
                    step: "06",
                    title: "Hearing Preparation & Representation",
                    desc: "We prepare written submissions, attend all hearings before the appellate authority, present legal arguments, cross-examine department representatives and protect your interests.",
                  },
                  {
                    step: "07",
                    title: "Appellate Order Review & Further Action",
                    desc: "We review the appellate order, assess whether to accept, file rectification application, or file further appeal to ITAT/High Court. We provide complete guidance on next steps.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="relative md:pl-16 flex gap-6 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm z-10 border-4 border-white shadow-md">
                      {index + 1}
                    </div>

                    <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
                      <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">
                        Step {item.step}
                      </span>
                      <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
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
            <SectionLabel text="Client Success Stories" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Appeal Success Stories from Across India
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ramesh Industries",
                  location: "Mumbai, Maharashtra",
                  text: "₹45 lakh demand reduced to ₹8 lakh after successful CIT(A) appeal. Taxvio's team prepared strong grounds based on case laws and represented us effectively. Excellent service.",
                },
                {
                  name: "Dr. Priya Kapoor",
                  location: "Delhi",
                  text: "Faced penalty of ₹12 lakh for alleged concealment. Taxvio filed appeal before CIT(A) with detailed explanations. Penalty completely deleted. Very professional and knowledgeable team.",
                },
                {
                  name: "Tech Solutions Pvt Ltd",
                  location: "Bangalore, Karnataka",
                  text: "ITAT appeal against ₹1.2 crore addition. Taxvio's thorough legal research and effective representation resulted in complete deletion of addition. Highly recommend for complex cases.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>

                  <p className="font-bold text-[#00416a]">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NATIONWIDE SEO */}
          <section id="cities-served">
            <SectionLabel text="Nationwide Service" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Tax Appeal Filing Services Across India
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio provides professional tax appeal filing and representation
              services across all major cities and states in India — before
              CIT(A), ITAT and High Court benches nationwide.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Mumbai",
                "Delhi",
                "Bangalore",
                "Chennai",
                "Kolkata",
                "Hyderabad",
                "Pune",
                "Ahmedabad",
                "Surat",
                "Jaipur",
                "Lucknow",
                "Kanpur",
                "Nagpur",
                "Indore",
                "Thane",
                "Bhopal",
                "Visakhapatnam",
                "Patna",
                "Vadodara",
                "Ghaziabad",
                "Ludhiana",
                "Agra",
                "Nashik",
                "Faridabad",
                "Meerut",
                "Rajkot",
                "Varanasi",
                "Srinagar",
                "Aurangabad",
                "Dhanbad",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-3 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition"
                >
                  📍 {city}
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 text-sm text-center">
              + All other cities and towns across India through online and offline
              support
            </p>
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
                  title: "Income Tax Notice Response",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Expert handling of all types of income tax notices.",
                },
                {
                  title: "Income Tax Scrutiny",
                  icon: "🔍",
                  link: "/serviceslist/income-tax/income-tax-scrutiny",
                  desc: "Complete scrutiny assessment support.",
                },
                {
                  title: "Tax Planning",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tax-planning",
                  desc: "Strategic tax planning to minimize liability.",
                },
                {
                  title: "ITR Filing — Business",
                  icon: "🏢",
                  link: "/serviceslist/income-tax/itr-business",
                  desc: "Business and professional ITR filing.",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
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
                    Fight for Your Rights
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File Your Tax Appeal Before It's Too Late
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't let an unfair assessment order, excessive demand or
                    wrongful penalty stand. Taxvio provides expert tax appeal
                    filing and representation before CIT(A), ITAT and High Court
                    across India. Professional grounds drafting, complete
                    documentation and effective appellate representation. Starting
                    ₹9,999.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File Appeal — ₹9,999
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    📞 Free Case Review
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

/* ─────────────────────────────────────────────
   FEE CALCULATOR
───────────────────────────────────────────── */

function FeeCalculator() {
  const [selected, setSelected] = useState("");
  const [fee, setFee] = useState<number | null>(null);
  const [description, setDescription] = useState("");

  const services = [
    {
      value: "cita-simple",
      label: "CIT(A) Appeal — Simple Case",
      fee: 9999,
      description:
        "Appeal filing for straightforward cases with limited additions/disallowances before CIT(A).",
    },
    {
      value: "cita-complex",
      label: "CIT(A) Appeal — Complex Case",
      fee: 19999,
      description:
        "Detailed appeal with multiple grounds, extensive documentation and multiple hearing representation.",
    },
    {
      value: "stay-petition",
      label: "Stay of Demand Petition",
      fee: 4999,
      description:
        "Filing stay petition along with appeal to halt recovery proceedings.",
    },
    {
      value: "itat-appeal",
      label: "ITAT Appeal Filing",
      fee: 29999,
      description:
        "Second appeal before Income Tax Appellate Tribunal with legal research and representation.",
    },
    {
      value: "high-court",
      label: "High Court Appeal Filing",
      fee: 49999,
      description:
        "Third appeal before High Court on substantial questions of law (coordination with legal counsel).",
    },
    {
      value: "penalty-appeal",
      label: "Penalty Order Appeal",
      fee: 14999,
      description:
        "Appeal against penalty orders under Section 271 and other penalty provisions.",
    },
    {
      value: "reassessment-appeal",
      label: "Reassessment Order Appeal",
      fee: 24999,
      description:
        "Appeal against Section 148 reassessment orders with challenge to reopening.",
    },
    {
      value: "comprehensive",
      label: "Multi-Level Appeal Package",
      fee: 69999,
      description:
        "Complete representation from CIT(A) through ITAT/High Court for high-value disputes.",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Tax Appeal Fee
      </h2>

      <p className="text-gray-600 mb-8 max-w-xl">
        Select the type of appeal you need for an estimated professional fee.
      </p>

      <div className="bg-gray-50 border rounded-3xl p-8">
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {services.map((service) => (
            <button
              key={service.value}
              onClick={() => {
                setSelected(service.value);
                setFee(service.fee);
                setDescription(service.description);
              }}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                selected === service.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"
              }`}
            >
              <span className="font-semibold block mb-1">
                {service.label}
              </span>
              <span
                className={`text-xs ${
                  selected === service.value
                    ? "text-gray-200"
                    : "text-gray-500"
                }`}
              >
                ₹{service.fee.toLocaleString("en-IN")} onwards
              </span>
            </button>
          ))}
        </div>

        {fee !== null ? (
          <div className="border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Professional Fee:{" "}
              <span className="text-3xl font-extrabold">
                ₹{fee.toLocaleString("en-IN")}
              </span>{" "}
              onwards
            </p>

            <p className="text-sm text-gray-500 mt-1">{description}</p>

            <p className="text-xs text-gray-400 mt-3">
              * Fees depend on case complexity, tax amount involved, number of
              grounds, hearings required and appellate level. Government appeal
              fees (where applicable) are additional. GST applicable.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition"
            >
              Get Started — Contact Us →
            </Link>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">
            Select an appeal type above to see an estimated fee.
          </p>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the success rate of tax appeals in India?",
      a: "Success rates vary by case merit and representation quality. Well-prepared appeals with strong legal grounds and proper documentation have 60-80% success rate at CIT(A) level. ITAT success rates are 40-60% depending on complexity. Professional representation significantly improves chances of favorable outcome.",
    },
    {
      q: "Can I represent myself in a tax appeal or do I need a CA/lawyer?",
      a: "You can represent yourself, but professional representation is highly recommended. Tax appeals involve complex legal provisions, case law research, procedural compliance and effective argumentation. CAs and tax consultants specializing in litigation provide significant advantage in achieving favorable results.",
    },
    {
      q: "How long does it take to get an appellate order?",
      a: "CIT(A) typically takes 12-24 months to dispose appeals. ITAT takes 18-36 months. High Court appeals can take 2-5 years or more. Timelines vary based on case complexity, hearing schedules, authority workload and number of adjournments.",
    },
    {
      q: "What if I lose the appeal at CIT(A)?",
      a: "If CIT(A) decision is unfavorable, you can file a second appeal before ITAT within 60 days. If ITAT decision is also unfavorable and involves substantial questions of law, you can appeal to High Court within 120 days. Multiple appellate levels provide opportunities for relief.",
    },
    {
      q: "Can I settle the dispute without going through full appeal process?",
      a: "Yes. The Income Tax Settlement Commission (ITSC) allows settlement of disputes for certain cases. Alternatively, Dispute Resolution Panel (DRP) is available for eligible cases. Advance Pricing Agreements (APA) can resolve transfer pricing disputes. These alternatives can provide faster resolution than full litigation.",
    },
    {
      q: "What happens to the tax demand while the appeal is pending?",
      a: "The demand remains outstanding and interest continues to accrue. However, if you obtain a stay of demand order from CIT(A) or ITAT, recovery proceedings are halted. Without stay, the department can initiate recovery through bank attachment, salary attachment or property seizure.",
    },
    {
      q: "Can the appellate authority increase tax demand beyond what AO determined?",
      a: "Yes, under the doctrine of 'enhancement', the appellate authority can enhance (increase) the tax demand if they find additional income escaped assessment or incorrect claims not addressed by the AO. However, before enhancing, they must give the taxpayer an opportunity to be heard and explain.",
    },
    {
      q: "Do I need to pay the full demand to file an appeal?",
      a: "No. You can file an appeal without paying the disputed portion of demand. However, you should pay any admitted tax liability. For disputed portions, file a stay petition to prevent recovery. The appellate authority typically requires payment of 15-20% of disputed demand to grant stay.",
    },
    {
      q: "Can Taxvio handle appeals across different states and High Courts?",
      a: "Yes. Taxvio has a nationwide network and expertise in handling appeals before CIT(A) offices, ITAT benches and High Courts across all states in India. We coordinate with local counsels where required and provide seamless representation regardless of location.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Tax Appeals
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border rounded-2xl overflow-hidden"
            open={open === index}
            onToggle={(event) => {
              const isOpen = (event.target as HTMLDetailsElement).open;
              setOpen(isOpen ? index : null);
            }}
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{faq.q}</span>

              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                +
              </span>
            </summary>

            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SHARED COMPONENT
───────────────────────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}