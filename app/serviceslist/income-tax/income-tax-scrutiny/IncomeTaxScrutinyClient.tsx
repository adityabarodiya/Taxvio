"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Income Tax Scrutiny & Notice Handling Services",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  },
  description: "Professional income tax scrutiny and notice handling in India. Response to notices under Section 143(1), 143(2), 148, 142(1), 156, 271, and faceless assessment. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Scrutiny & Notice Response",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "1999", priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "1999", maxPrice: "14999" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a Section 143(2) scrutiny notice?", acceptedAnswer: { "@type": "Answer", text: "Section 143(2) is a formal scrutiny notice issued by the Assessing Officer when the ITR is selected for detailed examination. It requires the taxpayer to produce books, documents, and information to verify the correctness of income and deductions reported in the ITR." } },
    { "@type": "Question", name: "What is a Section 148 reassessment notice?", acceptedAnswer: { "@type": "Answer", text: "Section 148 is issued when the AO has reason to believe income has escaped assessment. It can go back up to 3 years (or 10 years for large income/foreign assets). The taxpayer must file a fresh ITR in response." } },
    { "@type": "Question", name: "What is faceless assessment?", acceptedAnswer: { "@type": "Answer", text: "Faceless Assessment under Section 144B eliminates face-to-face interaction. All notices, responses, and hearings are conducted digitally through the Income Tax portal. Cases are assigned to AOs at random locations." } },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function IncomeTaxScrutinyClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white text-gray-800 overflow-x-hidden">

        {/* ── URGENCY BANNER ── */}
        <div className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4" role="alert">
          ⚠️ Received a Tax Notice? Do NOT Ignore It — Missing the Response Deadline Leads to Best Judgement Assessment & Large Tax Demands. Act Today.
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
              <span className="text-white">Scrutiny & Notice Handling</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  ⚖️ Income Tax Scrutiny & Notice Handling
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Income Tax<br />
                  <span className="text-[#7ecbf0]">Scrutiny & Notice</span><br />
                  Handling — India
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Every income tax notice has a deadline — missing it results in
                  <strong className="text-white"> Best Judgement Assessment with arbitrary large additions</strong>.
                  Taxvio's CA and legal expert team handles all notice types — Section 143(1), 143(2), 148, 142(1),
                  156, 270A, 271 — plus Faceless Assessment representation and CIT(A) / ITAT appeals.
                  Don't face it alone. Starting ₹1,999.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base">
                    Get Immediate Notice Help →
                  </Link>
                  <Link href="#notice-types" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base">
                    🔍 Identify My Notice
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                  {["✅ All Notice Types Handled", "✅ Faceless Assessment Support", "✅ CIT(A) & ITAT Appeals", "✅ CA + Legal Expert Team"].map(t => (
                    <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">⚠️ Act Immediately</p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📋", "11 notice types covered"],
                    ["⏰", "Strict response deadlines"],
                    ["🖥️", "Faceless assessment experts"],
                    ["📁", "Complete documentation support"],
                    ["⚖️", "CIT(A) & ITAT appeal filing"],
                    ["💰", "Starting ₹1,999"],
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
              { number: "11+", label: "Notice Types Handled", icon: "📋" },
              { number: "30 Days", label: "CIT(A) Appeal Window", icon: "⏰" },
              { number: "100%", label: "Digital Faceless Process", icon: "🖥️" },
              { number: "₹1,999", label: "Starting Notice Fee", icon: "💰" },
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
            {["✔ CA & Legal Team Supervised", "✔ Faceless Assessment Experts", "✔ Deadline-Driven Process", "✔ Appeal Filing & Representation"].map((t) => (
              <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section id="overview">
            <SectionLabel text="Why Notices Happen" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              Why the Income Tax Department Issues Scrutiny Notices
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Receiving an income tax notice is one of the most stressful experiences for any taxpayer.
                  However, <strong>a notice is not always a cause for panic</strong>. Many notices are routine
                  communications requiring a prompt, well-documented response. What truly escalates a notice
                  into a serious tax demand is either <strong>ignoring it</strong> or responding without proper
                  documentation and legal grounding.
                </p>
                <p>
                  ITR scrutiny is now driven by AI-powered risk assessment systems — the Department's
                  <strong> Computer Aided Scrutiny Selection (CASS)</strong> and Annual Information Statement
                  (AIS) cross-verify your ITR against bank data, GST returns, registrar records, and TDS
                  certificates. Any mismatch or anomaly triggers an automated notice — often before a human
                  officer even reviews the case.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Since 2021, the Income Tax Department has implemented <strong>Faceless Assessment under
                  Section 144B</strong> — all scrutiny proceedings are now conducted entirely digitally through
                  the Income Tax portal, without face-to-face meetings. This makes written response quality and
                  supporting documentation more critical than ever — there is no opportunity to clarify verbally.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP), provides comprehensive income
                  tax notice handling and scrutiny representation for individuals, proprietors, firms, LLPs, and
                  companies across Uttar Pradesh and pan-India. Our CA and legal expert team handles every stage
                  — from notice review to AO representation to CIT(A) and ITAT appeals.
                </p>
              </div>
            </div>
          </section>

          {/* WHY NOTICES ARE TRIGGERED */}
          <section id="notice-triggers">
            <SectionLabel text="Common Triggers" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Why Was Your ITR Selected for Scrutiny?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "📊", title: "TDS / Form 26AS Mismatch", desc: "Income reported in ITR doesn't match TDS credits in Form 26AS or AIS — the most common trigger for 143(1) demands and 143(2) scrutiny." },
                { icon: "🏦", title: "High-Value Transactions Not Reported", desc: "SFT data from banks, registrars, and mutual funds showing large property purchases, cash deposits, share sales, or FD interest not reflected in ITR." },
                { icon: "📉", title: "Sudden Income Drop or Large Loss", desc: "Significant reduction in declared income vs previous years, or large business losses that reduce tax to zero — both trigger automated scrutiny." },
                { icon: "💼", title: "Large Deductions or Exemptions Claimed", desc: "HRA exemptions, 80C/80D deductions, or capital gain exemptions (54/54F) that appear disproportionate to declared income level." },
                { icon: "💵", title: "High Cash Sales or Demonetisation Deposits", desc: "Large cash deposits during demonetisation periods or cash-heavy businesses attract scrutiny for potential unreported income." },
                { icon: "🧾", title: "GST Turnover vs ITR Turnover Mismatch", desc: "Department cross-verifies GSTR-1/GSTR-3B turnover with ITR business income. Any unexplained gap directly triggers notices." },
                { icon: "🌍", title: "Foreign Assets or Foreign Income", desc: "Any foreign bank accounts, investments, or income not disclosed in ITR Schedule FA triggers high-priority scrutiny by the Department." },
                { icon: "🎲", title: "Random CASS Selection", desc: "A percentage of returns are selected for scrutiny at random by Computer Aided Scrutiny Selection (CASS) even without specific risk flags." },
                { icon: "📋", title: "Previous Year Additions Not Disclosed", desc: "Additions made in earlier assessments that were not carried forward or disclosed correctly in subsequent year returns." },
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

          {/* NOTICE TYPES TABLE */}
          <section id="notice-types">
            <SectionLabel text="Notice Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Types of Income Tax Notices — Section-Wise Complete Guide
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Every notice has a section number that tells you exactly what the Department wants.
              Identify your notice type below to understand what's required.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Section", "Notice Type", "What It Means", "Response Required", "Urgency"].map((h) => (
                      <th key={h} className="px-4 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["143(1)", "Intimation after ITR processing", "ITR processed — demand raised, refund due, or accepted as filed", "Pay demand / accept refund / file rectification if error", "Medium"],
                    ["143(2)", "Scrutiny notice", "ITR selected for detailed examination by Assessing Officer", "Produce books, documents, and answer questionnaire fully", "High"],
                    ["142(1)", "Pre-assessment enquiry", "AO requires specific information or documents before completing assessment", "Furnish all information and documents within time given", "High"],
                    ["148", "Reassessment — income escaping", "AO believes income was not reported or under-reported in original ITR", "File fresh ITR and respond with complete documentation", "Very High"],
                    ["148A", "Pre-reassessment show cause", "Show cause before issuing 148 — AO must give opportunity to explain", "Submit explanation with evidence why reassessment is not warranted", "Very High"],
                    ["156", "Tax demand notice", "Tax, interest, or penalty payable following assessment order", "Pay demand or file appeal within 30 days", "Very High"],
                    ["245", "Refund vs demand adjustment", "Department proposes to adjust pending refund against outstanding demand", "Accept or object within 30 days through portal", "Medium"],
                    ["139(9)", "Defective return notice", "ITR filed is incomplete or contains errors making it defective", "Correct and re-file ITR within 15 days", "Medium"],
                    ["131", "Summons", "AO summoning taxpayer or third party to attend or produce documents", "Attend personally or produce required documents on specified date", "Very High"],
                    ["271(1)(c)", "Penalty — concealment", "Penalty for concealment of income or furnishing inaccurate particulars", "Submit reply contesting penalty with evidence of bona fide disclosure", "High"],
                    ["270A", "Penalty — under-reporting", "Penalty at 50% (under-reporting) or 200% (misreporting) of tax on added income", "Contest by proving income was reported correctly or showing reasonable cause", "High"],
                  ].map(([section, type, meaning, response, urgency], i) => (
                    <tr key={section} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-4 font-bold text-[#00416a] whitespace-nowrap">Sec {section}</td>
                      <td className="px-4 py-4 font-medium text-gray-800">{type}</td>
                      <td className="px-4 py-4 text-gray-600 text-xs">{meaning}</td>
                      <td className="px-4 py-4 text-gray-600 text-xs">{response}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          urgency === "Very High" ? "bg-red-100 text-red-700" :
                          urgency === "High" ? "bg-orange-100 text-orange-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>{urgency}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500 italic">
              * All notices arrive on your registered email and are visible on the IT portal under "Pending Actions → e-Proceedings". Ensure email and mobile are updated on the portal.
            </p>
          </section>

          {/* FACELESS ASSESSMENT */}
          <section id="faceless-assessment">
            <SectionLabel text="Faceless Assessment" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Faceless Assessment Under Section 144B — How It Works
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Since 2021, all scrutiny assessments are conducted digitally under the Faceless Assessment
              scheme — making professional written representation more critical than ever.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🎲", title: "Random Case Assignment", desc: "Once selected for scrutiny, the case is assigned to an AO at a National Faceless Assessment Centre (NFAC) at a random location — not the taxpayer's jurisdiction. No face-to-face meeting." },
                { icon: "🖥️", title: "100% Digital Process", desc: "All notices, questionnaires, Show Cause Notices (SCN), and draft assessment orders are served digitally through the Income Tax e-filing portal. All responses must be uploaded electronically." },
                { icon: "🔍", title: "Peer Review of Draft Orders", desc: "Before issuing a final order, the draft is reviewed by a separate Review Unit and Technical Unit — ensuring consistency and accuracy in additions proposed." },
                { icon: "📹", title: "Video Conference Hearings", desc: "If a personal hearing is requested, it is conducted via video conference — not in person. The request must be explicitly made through the portal by the taxpayer." },
                { icon: "📄", title: "Final Assessment Order", desc: "Final order under Section 143(3) is passed and served digitally. If tax demands arise, a Section 156 demand notice is issued simultaneously." },
                { icon: "✍️", title: "Written Response is Everything", desc: "In faceless assessment, there is no verbal explanation — every response is permanently on record. A comprehensive, well-documented written response is your only defence." },
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

          {/* SCRUTINY STAGES */}
          <section id="scrutiny-stages">
            <SectionLabel text="Scrutiny Timeline" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              The Scrutiny Assessment Process — Stage by Stage
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Understanding the full scrutiny timeline helps you respond correctly at each stage and
              prevents escalation to best judgement assessment.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-8">
                {[
                  { stage: "Stage 1", title: "Section 143(2) Notice", color: "border-blue-400", desc: "Issued within 6 months from the end of the assessment year in which the ITR was filed. Formally selects the return for scrutiny and requires the taxpayer to appear or submit documents." },
                  { stage: "Stage 2", title: "Section 142(1) Questionnaire", color: "border-yellow-400", desc: "AO issues a detailed questionnaire seeking specific information — source of income, investments, party-wise expenses, bank reconciliation. Each question must be answered with supporting documents." },
                  { stage: "Stage 3", title: "Show Cause Notice (SCN)", color: "border-orange-400", desc: "If the AO proposes additions or disallowances, a draft assessment order with SCN is issued. The taxpayer has a final opportunity to contest the proposed additions before the order is finalised." },
                  { stage: "Stage 4", title: "Final Assessment Order (Section 143(3) or 144)", color: "border-red-400", desc: "AO passes the final order. If taxpayer cooperated: order under 143(3) (regular assessment). If taxpayer didn't respond: ex-parte order under Section 144 (best judgement) with large arbitrary additions." },
                  { stage: "Stage 5", title: "Section 156 Demand Notice", color: "border-red-600", desc: "If the assessment results in a tax demand, a Section 156 demand notice is issued simultaneously specifying the amount and due date. Must be paid or appealed within 30 days." },
                  { stage: "Stage 6", title: "Appeal to CIT(A) — Within 30 Days", color: "border-green-400", desc: "If you disagree with the order, appeal to Commissioner of Income Tax (Appeals) within 30 days. Stay of demand can be requested. Taxvio handles complete appeal preparation and representation." },
                ].map((step, i) => (
                  <div key={step.stage} className="relative md:pl-16 flex gap-6 items-start">
                    <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-md">
                      {i + 1}
                    </div>
                    <div className={`bg-white border-l-4 ${step.color} rounded-2xl p-6 hover:shadow-md transition flex-1`}>
                      <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">{step.stage}</span>
                      <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PENALTY NOTICES */}
          <section id="penalty-notices">
            <SectionLabel text="Penalty Provisions" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Penalty & Prosecution Notices — Rates & Defence Strategy
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              If scrutiny results in income additions, the AO may initiate separate penalty proceedings.
              Here are the key provisions and how Taxvio helps contest them.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Section", "Offence", "Penalty Rate", "Defence / Mitigation"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["270A", "Under-reporting of income", "50% of tax on under-reported income", "Show income reported correctly or difference is due to disputed legal interpretation"],
                    ["270A", "Misreporting of income", "200% of tax on misreported income", "Prove disclosure was bona fide — no intention to misreport"],
                    ["271(1)(c)", "Concealment (pre-AY 2017-18)", "100%–300% of tax on concealed income", "Prove bona fide disclosure and concealment was not deliberate"],
                    ["271B", "No audit / late audit report", "0.5% of turnover — max ₹1.5 lakh", "Prove reasonable cause — illness, natural disaster, etc."],
                    ["272A", "Non-compliance with notices", "₹10,000 per default (continuing)", "Show notice not properly served or compliance made subsequently"],
                    ["276C", "Wilful tax evasion", "Prosecution — 6 months to 7 years + fine", "Prove no wilful intent — distinguish bona fide error from deliberate evasion"],
                    ["276CC", "Wilful failure to file ITR", "Prosecution — 3 months to 7 years", "Prove failure was not wilful; late filing before prosecution initiated"],
                  ].map(([section, offence, penalty, defence], i) => (
                    <tr key={`${section}-${i}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-bold text-[#00416a]">Sec {section}</td>
                      <td className="px-5 py-4 text-gray-700">{offence}</td>
                      <td className="px-5 py-4 font-bold text-red-600">{penalty}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs">{defence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* APPEALS */}
          <section id="appeals">
            <SectionLabel text="Appeal Hierarchy" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Income Tax Appeals — CIT(A), ITAT & High Court
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { level: "1st Appeal", body: "CIT(A) / JCIT(A)", deadline: "30 days from order", icon: "🏛️", color: "border-blue-400", desc: "File Form 35 before Commissioner of Income Tax (Appeals). Fee ₹250–₹1,000. CIT(A) can confirm, modify, or delete AO's additions. Since 2023, faceless appeal proceedings conducted digitally." },
                { level: "2nd Appeal", body: "ITAT", deadline: "60 days from CIT(A) order", icon: "⚖️", color: "border-indigo-400", desc: "Income Tax Appellate Tribunal. File Form 36. Quasi-judicial body — proceedings more formal. ITAT decisions binding on AO and CIT(A). ₹50L tax effect threshold for Department appeals." },
                { level: "High Court", body: "HC under Section 260A", deadline: "120 days from ITAT order", icon: "🏗️", color: "border-purple-400", desc: "Appeal on substantial questions of law only — not on factual disputes. Filed before the relevant High Court with senior tax advocate representation." },
                { level: "Stay of Demand", body: "AO / CIT(A)", deadline: "File with appeal", icon: "⏸️", color: "border-green-400", desc: "During pending appeal, apply for stay of demand (suspension of tax collection). Typically 20% of disputed demand must be paid as precondition for stay grant." },
              ].map((item) => (
                <div key={item.level} className={`border-t-4 ${item.color} bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition`}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-xs font-bold text-[#00416a]/60 uppercase tracking-widest mb-1">{item.level}</p>
                  <h3 className="font-bold text-[#00416a] mb-1">{item.body}</h3>
                  <p className="text-xs font-semibold text-red-500 mb-3">Deadline: {item.deadline}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="common-mistakes" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="What Not to Do" />
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Common Mistakes That Turn Notices Into Large Tax Demands
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              These mistakes consistently escalate manageable notices into large assessments. Every one
              of these is preventable with professional guidance.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { mistake: "Ignoring the notice", risk: "Bank attachment / salary deduction", desc: "Even a 143(1) intimation ignored too long can be enforced through coercive recovery — bank account attachment or salary deduction." },
                { mistake: "Responding after the deadline", risk: "Best judgement assessment", desc: "Missing response deadline in 143(2) or 142(1) results in AO passing Section 144 order — estimating income arbitrarily with massive additions." },
                { mistake: "Incomplete documentation", risk: "Additions on unanswered queries", desc: "Partially answering the questionnaire leaves open issues. Every query must be answered with supporting evidence — no partial responses." },
                { mistake: "Not verifying AIS before responding", risk: "Contradiction used as concealment", desc: "AIS data from banks is cross-verified. Contradictions between your response and AIS records are used as evidence of deliberate concealment." },
                { mistake: "Paying disputed demand without appeal", risk: "Acceptance of assessment", desc: "Paying a demand without filing appeal is treated as acceptance. Always appeal unjustified additions within 30 days — then negotiate." },
                { mistake: "Books not preserved", risk: "Best judgement + Section 271A penalty", desc: "AO can require books up to 6 years old. Missing books result in arbitrary assessment and ₹25,000 Section 271A penalty for non-maintenance." },
              ].map((p) => (
                <div key={p.mistake} className="bg-white border border-red-100 rounded-xl p-5">
                  <p className="font-bold text-red-600 text-sm mb-1">❌ {p.mistake}</p>
                  <p className="text-xs font-semibold text-red-400 mb-2">Risk: {p.risk}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's 6-Step Notice Handling & Scrutiny Response Process
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured, deadline-driven process ensures every notice is responded to with complete
              documentation and legal precision — minimising additions and protecting your tax position.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  { step: "01", title: "Notice Review & Urgency Assessment", desc: "We review your notice — identify the section, assessment year involved, nature of query raised, and exact response deadline. We classify urgency immediately and advise on the documents needed for a complete response, so not a single day is wasted." },
                  { step: "02", title: "AIS / Form 26AS Reconciliation", desc: "We cross-verify all income, TDS credits, high-value transactions, and financial data in your AIS and Form 26AS against your ITR and books — identifying every mismatch that triggered the notice and preparing explanations with supporting evidence for each." },
                  { step: "03", title: "Document Collection & Response Drafting", desc: "We collect all required documents — bank statements, purchase/sale invoices, TDS certificates, loan statements, investment proofs — and prepare a comprehensive, legally sound written response for each query raised by the AO." },
                  { step: "04", title: "Portal Submission & Acknowledgement", desc: "The complete response with all supporting documents is submitted through the Income Tax e-filing portal under e-Proceedings within the deadline. Submission acknowledgement is preserved as permanent proof of compliance." },
                  { step: "05", title: "Show Cause Notice (SCN) Response", desc: "If the AO issues an SCN before passing the assessment order, we prepare a detailed reply contesting proposed additions — citing relevant case laws, judicial precedents, CBDT circulars, and correct legal interpretation of every disputed item." },
                  { step: "06", title: "Appeal Filing & Representation (CIT(A) / ITAT)", desc: "If the final order contains unjustified additions, we file an appeal in Form 35 before CIT(A) within 30 days — drafting detailed grounds of appeal, preparing the complete paper book, requesting stay of demand, and representing at CIT(A) hearings." },
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
              Trusted for Notice Resolution Across India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Sanjeev Agarwal", location: "Khatauli", text: "Received a Section 143(2) scrutiny notice for AY 2022-23. Taxvio prepared a thorough response with all documents. The AO accepted our reply and passed the order without any additions." },
                { name: "Priya Constructions Pvt. Ltd.", location: "Muzaffarnagar", text: "Section 148 reassessment for cash deposits. Taxvio handled everything — fresh ITR, detailed response, portal submissions — demand ultimately reduced to nil." },
                { name: "Ramesh & Co. Partnership Firm", location: "Meerut", text: "GST vs ITR turnover mismatch triggered 143(2). Taxvio reconciled our books, prepared a detailed reconciliation statement, and the scrutiny was closed without additions." },
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
              Income Tax Notice Handling Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides income tax
              scrutiny and notice handling services for individuals, businesses, firms, LLPs, and companies
              across <strong>Noida</strong>, <strong>Delhi NCR</strong>, <strong>Meerut</strong>,
              <strong> Ghaziabad</strong>, and <strong>Mumbai</strong> — as well as pan-India online.
              Since all scrutiny proceedings are now faceless and digital, geography is no barrier to
              receiving expert representation.
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
                { title: "ITR Filing — Salaried", icon: "👔", link: "/serviceslist/income-tax/itr-salaried", desc: "Accurate ITR filing for individuals." },
                { title: "Income Tax Audit", icon: "🔍", link: "/serviceslist/income-tax/income-tax-audit", desc: "Section 44AB audit and Form 3CD." },
                { title: "ITR — Proprietor", icon: "🏪", link: "/serviceslist/income-tax/itr-proprietor", desc: "ITR-3/4 for business owners." },
                { title: "Quarterly TDS Return", icon: "📋", link: "/serviceslist/income-tax/quarterly-tds", desc: "TDS compliance for employers." },
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
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">⚠️ Don't Wait — Act Before the Deadline</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Received a Tax Notice?<br />Act Now — Don't Wait.
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Every day of delay increases your risk of large tax additions. Taxvio's CA and legal
                    team handles all notice types — 143(1), 143(2), 148, penalty, and appeals. Service
                    starts at ₹1,999. Serving Khatauli, Muzaffarnagar, Meerut and all of India online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link href="/contact" className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center">
                    Get Immediate Help Now
                  </Link>
                  <Link href="tel:+918937980366" className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
                    📞 Free Notice Review
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

  const options = [
    { value: "143_1", label: "Section 143(1) — Intimation / Demand", fee: 1999, desc: "AIS reconciliation + rectification or response filing" },
    { value: "139_9", label: "Section 139(9) — Defective Return", fee: 1499, desc: "ITR correction and refiling within 15 days" },
    { value: "245", label: "Section 245 — Refund Adjustment", fee: 1999, desc: "Objection filing or verification of outstanding demand" },
    { value: "143_2", label: "Section 143(2) — Scrutiny Notice", fee: 4999, desc: "Full scrutiny response — documents, questionnaire, portal submission" },
    { value: "142_1", label: "Section 142(1) — Pre-Assessment Enquiry", fee: 3999, desc: "Detailed query response with supporting documentation" },
    { value: "148", label: "Section 148 — Reassessment Notice", fee: 7999, desc: "Fresh ITR filing + complete reassessment representation" },
    { value: "271", label: "Section 271 / 270A — Penalty Notice", fee: 5999, desc: "Penalty contest reply with legal grounds and case law precedents" },
    { value: "appeal_cita", label: "CIT(A) Appeal Filing", fee: 9999, desc: "Grounds of appeal, paper book, CIT(A) representation" },
    { value: "appeal_itat", label: "ITAT Appeal", fee: 14999, desc: "ITAT appeal drafting + coordination with senior tax advocate" },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">Estimate Your Notice Handling Fee</h2>
      <p className="text-gray-600 mb-8 max-w-xl">Select the type of notice you received for an instant fee estimate.</p>

      <div className="bg-gray-50 border rounded-3xl p-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {options.map((opt) => (
            <button key={opt.value}
              onClick={() => { setSelected(opt.value); setFee(opt.fee); setDesc(opt.desc); }}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                selected === opt.value ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"
              }`}>
              <span className="font-semibold block mb-1">{opt.label}</span>
              <span className={`text-xs ${selected === opt.value ? "text-gray-200" : "text-gray-500"}`}>
                Starting ₹{opt.fee.toLocaleString("en-IN")}
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
            <p className="text-xs text-gray-400 mt-2">* Fees vary based on complexity, number of assessment years, and documentation volume. GST extra.</p>
            <Link href="/contact" className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition">
              Get Started Now →
            </Link>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">Select a notice type above to see an estimated fee.</p>
        )}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What should I do immediately after receiving an income tax notice?", a: "Do not ignore it. Identify the section number on the notice. Check the response deadline — most give 15–30 days. Log in to the Income Tax portal under 'Pending Actions → e-Proceedings' to see the full notice. Then engage a tax professional immediately — every day of delay reduces your response quality and increases risk of adverse additions." },
    { q: "What is the difference between Section 143(1) and Section 143(2)?", a: "Section 143(1) is an automated intimation after ITR processing — it accepts the return, raises a demand (due to TDS mismatch, arithmetic error, or deduction disallowance), or confirms a refund. It is not a scrutiny. Section 143(2) is a formal scrutiny notice issued by an AO for detailed examination — requiring books, documents, and explanations to verify the correctness of income and deductions reported." },
    { q: "What is a Section 148 reassessment notice?", a: "Section 148 is issued when the AO has 'reason to believe' income has escaped assessment. Before issuing 148, the AO must now issue a Section 148A notice giving the taxpayer an opportunity to explain. Reassessment can go back 3 years (or 10 years for large income/foreign assets). The taxpayer must file a fresh ITR in response and fully support all income declarations." },
    { q: "What is faceless assessment and do I still need a CA?", a: "Faceless Assessment under Section 144B means all scrutiny proceedings are conducted digitally — no face-to-face meetings with the AO. Professional representation is even more important because every written response becomes the permanent record. A well-prepared written response with complete documentation can mean the difference between nil additions and large demands worth lakhs." },
    { q: "Can I appeal if I disagree with the assessment order?", a: "Yes. If the assessment order contains unjustified additions, file an appeal before CIT(A) within 30 days in Form 35. If CIT(A) order is adverse, further appeal to ITAT within 60 days. During pending appeal, request stay on 20% of disputed demand. Taxvio handles the complete appeal process — drafting grounds, paper book preparation, and hearing representation." },
    { q: "What is the penalty for under-reporting of income?", a: "Under Section 270A, under-reporting attracts 50% of tax on under-reported income. Misreporting (deliberate concealment, false documents) attracts 200% penalty. These are separate from the tax and interest on the additions themselves. A proper response during scrutiny can prevent both the addition and the resulting penalty — making professional representation cost-effective." },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Income Tax Scrutiny & Notice Handling
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details key={i} className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}>
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

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}