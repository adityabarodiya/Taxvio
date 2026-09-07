// app/serviceslist/gst/gst-job-work/GSTJobWorkClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Job Work Compliance & ITC-04 Filing - Principal & Job Worker Support",
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
    "Professional GST job work compliance services under Section 143 of CGST Act. Expert assistance for principal manufacturers sending goods to job workers — quarterly ITC-04 return filing, job work challan tracking and reconciliation, input/capital goods movement monitoring, time-limit compliance (1 year for inputs, 3 years for capital goods), delivery challan preparation, GST registration support for job workers, and ITC reversal computation. Ideal for manufacturers in textile, engineering, pharmaceuticals, food processing, and all sectors using job work model. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "GST Job Work Compliance & ITC-04 Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
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
      name: "What is job work under GST and who is a job worker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Job work under GST (as per Section 2(68) of CGST Act) means any treatment or process undertaken by a person (job worker) on goods belonging to another registered person (principal). The principal sends his inputs, semi-finished goods, or capital goods to the job worker for processing, and the job worker returns the processed goods to the principal. Example: A garment manufacturer (principal) sends raw fabric to a job worker for cutting and stitching. The job worker processes the fabric and returns finished garments. Job worker is defined under Section 2(69) as any person who undertakes any treatment or process on goods belonging to another registered person. Job worker may or may not be registered under GST.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form ITC-04 and when must it be filed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form ITC-04 (Statement of goods or capital goods sent to job worker and received back) is a QUARTERLY return that MUST be filed by every principal manufacturer who sends goods to job workers under Section 143. It contains details of: Goods sent to job workers during the quarter, Goods received back from job workers, Goods sent directly from job worker to customer (without bringing back to principal's premises), Inputs/capital goods lying with job workers at the end of the quarter. ITC-04 must be filed by the 25th of the month following the quarter. Example: For Quarter Jan-Mar 2024, ITC-04 must be filed by 25th April 2024. Late filing attracts penalty of ₹100 per day (₹50 CGST + ₹50 SGST) subject to maximum of ₹5,000.",
      },
    },
    {
      "@type": "Question",
      name: "What is the time limit for goods sent to job workers under GST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As per Section 143(1) of CGST Act, the principal manufacturer must comply with time limits: (1) For INPUTS (raw materials, consumables): Goods must be received back or supplied from job worker's premises within 1 YEAR from the date of sending to job worker. (2) For CAPITAL GOODS (machinery, equipment): Goods must be received back or supplied from job worker's premises within 3 YEARS from the date of sending. If goods are NOT received back within these time limits, it is treated as 'supply' at the time of sending, and the principal must: Pay GST on the value of goods sent (deemed supply), Reverse ITC claimed on those goods (if applicable). ITC-04 helps track these time limits and ensure compliance.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTJobWorkClient() {
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
          className="bg-orange-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⏰ ITC-04 Due 25th of Next Month — Track Job Work Goods & Avoid ITC Reversal
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
              <span className="text-white">GST Job Work Compliance</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏭 Job Work & ITC-04 Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Job Work
                  <br />
                  <span className="text-[#7ecbf0]">Compliance</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Are you a{" "}
                  <strong className="text-white">
                    manufacturer sending goods to job workers
                  </strong>{" "}
                  for processing? Under{" "}
                  <strong className="text-white">
                    Section 143 of CGST Act
                  </strong>
                  , you must file{" "}
                  <strong className="text-white">
                    Form ITC-04 (Quarterly Job Work Return)
                  </strong>{" "}
                  by the{" "}
                  <strong className="text-white">25th of every quarter</strong> to
                  track goods sent, received back, and supplied from job worker's
                  premises. You must also ensure{" "}
                  <strong className="text-white">
                    inputs return within 1 year, capital goods within 3 years
                  </strong>{" "}
                  — failing which ITC must be reversed. Non-filing attracts
                  penalty, and time-limit breach leads to deemed supply (tax
                  liability).{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end job work compliance — ITC-04 filing, challan
                  tracking, time-limit monitoring, and reconciliation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get ITC-04 Filing — ₹2,999/quarter →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20Job%20Work%20Compliance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Quarterly ITC-04 Filing",
                    "✅ Challan Reconciliation",
                    "✅ Time-Limit Tracking",
                    "✅ ITC Reversal Computation",
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
                    ["⏰", "ITC-04 due: 25th of next month (quarterly)"],
                    ["📋", "Mandatory for principals sending goods"],
                    ["🕐", "Inputs: 1-year time limit"],
                    ["⚙️", "Capital goods: 3-year time limit"],
                    ["🚫", "Penalty: ₹100/day for late filing"],
                    ["🚀", "Service fee: ₹2,999/quarter onwards"],
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
              { number: "200+", label: "ITC-04 Returns Filed", icon: "✅" },
              { number: "25th", label: "Quarterly Deadline", icon: "⏰" },
              { number: "100%", label: "Compliance Rate", icon: "📊" },
              { number: "₹2,999", label: "Starting Fee/Quarter", icon: "💰" },
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
              "✔ Job Work Experts",
              "✔ Challan Tracking System",
              "✔ Time-Limit Alerts",
              "✔ ITC Reconciliation",
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
          {/* WHAT IS JOB WORK */}
          <section id="what-is-job-work">
            <SectionLabel text="Understanding Job Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Job Work Under GST?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Job Work</strong> under GST (as per{" "}
                  <strong>Section 2(68) of CGST Act, 2017</strong>) means{" "}
                  <strong>
                    any treatment or process undertaken by a person on goods
                    belonging to another registered person
                  </strong>
                  .
                </p>
                <p>
                  In simple terms: The{" "}
                  <strong>principal manufacturer (you)</strong> sends your raw
                  materials, semi-finished goods, or capital goods (machinery) to
                  a <strong>job worker</strong> for processing/treatment. The job
                  worker performs the required work (cutting, stitching, printing,
                  packaging, etc.). The job worker returns the processed goods to
                  you, OR directly supplies them to your customer (as per your
                  instructions).
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🏭 Who Is a Job Worker?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    As per <strong>Section 2(69)</strong>, a{" "}
                    <strong>job worker</strong> is any person who undertakes any
                    treatment or process on goods belonging to another registered
                    person (principal).
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-blue-200">
                    <p className="font-bold text-blue-700 text-sm mb-2">
                      💡 Key Points
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      {[
                        "Job worker may or may NOT be registered under GST (registration is optional for job workers unless their turnover exceeds threshold)",
                        "Ownership of goods REMAINS with principal — job worker only processes them",
                        "Job worker does NOT purchase goods from principal — it's a service arrangement",
                        "Job worker charges principal for processing service (job work charges) + GST",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    📦 Types of Goods Sent to Job Workers
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    As per Section 143, the following types of goods can be sent
                    to job workers:
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        type: "Inputs (Raw Materials)",
                        desc: "Goods used in manufacture of final products. Example: Fabric sent to job worker for stitching garments.",
                        timeLimit: "1 year",
                      },
                      {
                        type: "Semi-Finished Goods",
                        desc: "Partially processed goods sent for further processing. Example: Cut fabric sent for printing.",
                        timeLimit: "1 year",
                      },
                      {
                        type: "Capital Goods (Machinery)",
                        desc: "Plant, machinery, equipment sent to job worker for use in processing. Example: Embroidery machine sent to job worker.",
                        timeLimit: "3 years",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-4 border border-green-200"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-bold text-green-700 text-sm">
                            {i + 1}. {item.type}
                          </p>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                            {item.timeLimit}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  GST Treatment of Job Work
                </p>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ✅ No GST on Movement of Goods to Job Worker
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Sending goods to job worker is{" "}
                    <strong>NOT treated as 'supply'</strong> under GST (as per
                    Section 143). Therefore:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Principal does NOT pay GST when sending goods to job worker",
                      "Principal issues a Delivery Challan (not Tax Invoice) for goods sent",
                      "ITC (Input Tax Credit) claimed by principal on inputs/capital goods is NOT required to be reversed",
                      "Goods can move to job worker without e-way bill (if value <₹50,000 and movement is within state)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ⏰ Time Limits for Job Work (Section 143)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    To continue availing ITC benefit, the principal MUST comply
                    with time limits:
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-orange-200 mb-3">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      📅 Time Limit Rules
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p>
                        <strong>For INPUTS (raw materials):</strong>
                        <br />
                        Goods must be received back OR supplied from job worker's
                        premises within <strong>1 YEAR</strong> from the date of
                        sending to job worker.
                      </p>
                      <p>
                        <strong>For CAPITAL GOODS (machinery):</strong>
                        <br />
                        Goods must be received back OR supplied from job worker's
                        premises within <strong>3 YEARS</strong> from the date of
                        sending.
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <p className="font-bold text-red-700 text-sm mb-2">
                      🚫 What Happens If Time Limit Expires?
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      {[
                        "Sending of goods to job worker is treated as 'SUPPLY' at the time of original sending",
                        "Principal must pay GST on the value of goods sent (deemed supply)",
                        "Principal must REVERSE ITC claimed on those goods (if any)",
                        "Interest and penalty may apply for delayed compliance",
                        "ITC-04 helps track time limits and avoid this situation",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-600 mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    📋 Delivery Challan for Job Work
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    When sending goods to job worker, principal must issue a{" "}
                    <strong>Delivery Challan</strong> (not tax invoice) as per
                    Rule 55 of CGST Rules. Delivery Challan must contain:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {[
                      "Challan number and date",
                      "Name, address, GSTIN of principal (consignor)",
                      "Name, address, GSTIN of job worker (consignee) — if registered",
                      "HSN code, description, and quantity of goods sent",
                      "Taxable value (for e-way bill purpose, if required)",
                      "Purpose: 'Sent for Job Work'",
                      "Expected date of receipt back (for tracking)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST job work compliance — ITC-04 filing, delivery
                  challan management, time-limit tracking, and ITC reconciliation
                  for manufacturers across Uttar Pradesh, Noida, Delhi NCR, and
                  pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* ITC-04 FILING PROCESS */}
          <section id="itc04-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to File Form ITC-04 (Quarterly Job Work Return)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                ITC-04 is a quarterly return filed on the GST portal by the 25th
                of the month following the quarter. Here's the complete process:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Maintain Job Work Register (Challan Tracking)",
                    description:
                      "Throughout the quarter, maintain a detailed Job Work Register (Excel/ERP) tracking: Goods sent to job workers (date, challan number, quantity, value, job worker name/GSTIN), Goods received back from job workers (date, challan/invoice number, quantity, value), Goods supplied directly from job worker to customers (date, invoice number, customer details, quantity, value), Opening balance (goods lying with job workers at start of quarter), Closing balance (goods lying with job workers at end of quarter). This register is the foundation for ITC-04 filing. Taxvio provides a job work tracking template for easy maintenance.",
                    duration: "Ongoing (monthly)",
                  },
                  {
                    step: 2,
                    title: "Reconcile Challans & Invoices (Quarter-End)",
                    description:
                      "At the end of the quarter: Cross-check delivery challans issued to job workers with goods actually sent. Verify receipt challans/invoices from job workers for goods received back. Reconcile invoices issued by job workers for processing charges (separate from goods movement). Match quantities sent vs. received back vs. supplied from job worker. Identify discrepancies (missing challans, quantity mismatches) and resolve with job worker. Compute opening balance + goods sent - goods received back - goods supplied from job worker = closing balance (goods with job worker at quarter end).",
                    duration: "Last week of quarter",
                  },
                  {
                    step: 3,
                    title: "Login to GST Portal & Access ITC-04",
                    description:
                      "Log in to GST portal (www.gst.gov.in) with your GSTIN and credentials. Go to Services → Returns → Returns Dashboard. Select Financial Year and Return Filing Period (quarter: Apr-Jun, Jul-Sep, Oct-Dec, Jan-Mar). Click on 'ITC-04' tile (Quarterly return for job work). Choose 'Prepare Online' for online filing or download offline tool (Excel) for bulk data upload.",
                    duration: "Before 25th of next month",
                  },
                  {
                    step: 4,
                    title: "Table 4A: Details of Inputs/Capital Goods Sent to Job Worker",
                    description:
                      "This table contains details of ALL goods (inputs and capital goods) sent to job workers during the quarter. For each job worker (GSTIN-wise): Enter job worker's GSTIN (if registered) or 'Unregistered' with address. For each type of goods sent: HSN code, Description of goods, UQC (Unit Quantity Code: KGS, PCS, etc.), Quantity sent, Taxable value. The portal allows: (a) Manual entry (one-by-one), or (b) Bulk upload via JSON/Excel offline tool (recommended for >10 entries). Total quantity and value are auto-summed.",
                    duration: "Data entry phase",
                  },
                  {
                    step: 5,
                    title:
                      "Table 4B: Details of Inputs/Capital Goods Received Back from Job Worker",
                    description:
                      "This table contains details of goods received back from job workers during the quarter (goods returned to your premises after processing). For each job worker (GSTIN-wise): Enter job worker's GSTIN. For each type of goods received back: HSN code, Description, UQC, Quantity received back, Taxable value. Note: Goods received back may be in PROCESSED form (different from original form sent). Example: Fabric sent, garments received back — report as per actual form received.",
                    duration: "Data entry phase",
                  },
                  {
                    step: 6,
                    title:
                      "Table 4C: Details of Goods Supplied from Job Worker to Customer",
                    description:
                      "If you have instructed the job worker to directly supply processed goods to your customers (without bringing them back to your premises), report here. This is called 'Direct Supply from Job Worker Premises'. For each such supply: Job worker's GSTIN, Customer's GSTIN (if B2B), HSN code, Description, Quantity supplied, Taxable value, Tax invoice number and date (issued by YOU, not job worker). Note: Even though goods are supplied from job worker's premises, the TAX INVOICE is issued by YOU (principal) to the customer. You pay GST on this invoice and report it in your GSTR-1.",
                    duration: "Data entry phase",
                  },
                  {
                    step: 7,
                    title:
                      "Table 4D: Details of Inputs/Capital Goods in Stock at Job Worker (Closing Balance)",
                    description:
                      "This is the MOST CRITICAL table — it shows the closing balance of goods lying with job workers at the END of the quarter. For each job worker (GSTIN-wise): Enter job worker's GSTIN. For each type of goods: HSN code, Description, Opening balance (quantity at start of quarter), Goods sent during quarter (from Table 4A), Goods received back during quarter (from Table 4B), Goods supplied from job worker during quarter (from Table 4C), Closing balance = Opening + Sent - Received Back - Supplied from JW. Table 4D is auto-populated based on Tables 4A, 4B, 4C. Verify that closing balance matches your Job Work Register.",
                    duration: "Auto-populated + verification",
                  },
                  {
                    step: 8,
                    title: "Table 5: Time-Limit Compliance Check",
                    description:
                      "This table flags goods that are nearing or have exceeded the time limits (1 year for inputs, 3 years for capital goods). The portal auto-identifies goods in Table 4D where: Date of original sending + time limit < Current date (time limit expired). For such goods, you must: Either bring them back to your premises immediately, OR pay GST on deemed supply and reverse ITC (if applicable). We help you identify time-limit breaches in advance and plan corrective action (bring back goods, pay tax, or extend time by applying to jurisdictional officer if valid reason).",
                    duration: "Compliance check",
                  },
                  {
                    step: 9,
                    title: "Verification, Submission & Filing",
                    description:
                      "After filling all tables, click 'Preview' to verify data accuracy. Cross-check quantities and values with your Job Work Register. Ensure no time-limit violations are pending unresolved. Click 'Submit' (this does NOT file the return — it just saves the data). Now you must FILE the return using: (a) Digital Signature Certificate (DSC) — for companies and LLPs, or (b) EVC (Electronic Verification Code) — Aadhaar-based OTP for others. After DSC/EVC verification, click 'File ITC-04'. Download ARN (Acknowledgment Reference Number) and filed ITC-04 PDF for your records.",
                    duration: "By 25th of next month",
                  },
                  {
                    step: 10,
                    title: "Post-Filing — Update Job Work Register & Continue Tracking",
                    description:
                      "After filing ITC-04, update your Job Work Register: Closing balance of Quarter 1 becomes Opening balance of Quarter 2. Continue tracking goods sent/received during the next quarter. Set reminders for next ITC-04 filing deadline (25th of month following next quarter). Monitor time limits for goods lying with job workers (1 year/3 years) and plan retrieval or supply. Taxvio provides automated alerts for upcoming deadlines and time-limit violations.",
                    duration: "Ongoing",
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
                  Quarterly Deadline & Timeline
                </p>
                <p className="text-sm text-gray-700">
                  ITC-04 must be filed by <strong>25th of the month</strong>{" "}
                  following the quarter. Example: For Quarter Apr-Jun 2024, ITC-04
                  must be filed by 25th July 2024. Late filing attracts penalty of
                  ₹100/day (₹50 CGST + ₹50 SGST) subject to maximum of ₹5,000 per
                  return.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for ITC-04 Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTIN of principal (your GSTIN)",
                    "Job work challans (delivery challans issued to job workers)",
                    "Receipt challans (from job workers for goods received back)",
                    "Job worker details (name, address, GSTIN if registered)",
                    "Goods movement register (Excel/ERP tracking sent/received quantities)",
                    "Invoices issued from job worker premises (if direct supply to customers)",
                    "Opening balance of goods with job workers (as on 1st day of quarter)",
                    "HSN codes and descriptions of all goods sent/received",
                    "GST portal login credentials (username, password, DSC/EVC)",
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
                    "Job work agreement/contract (with job worker)",
                    "Job worker's GSTIN certificate (if registered)",
                    "Transport documents (e-way bills, LR/consignment notes for goods movement)",
                    "Gate entry/exit register (if goods sent from factory premises)",
                    "Processed goods invoices (job worker's invoice for job work charges)",
                    "Customer invoices (if goods supplied from job worker to customers)",
                    "Previous ITC-04 acknowledgments (for opening balance verification)",
                    "Capital goods register (if machinery sent to job worker)",
                    "Time-limit tracker (Excel sheet monitoring 1-year/3-year limits)",
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

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in Job Work Compliance
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Job work compliance errors can lead to ITC reversal, penalty, and
                tax demands. Here are critical mistakes to avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Not Filing ITC-04 (Thinking It's Optional)",
                    icon: "📋",
                    problem:
                      "Many principals assume ITC-04 is optional or can be skipped if no issues. ITC-04 is MANDATORY for every principal sending goods to job workers, even if movement is minimal. Non-filing attracts penalty and raises red flags during audits.",
                    solution:
                      "File ITC-04 EVERY QUARTER by 25th of next month, even if movement is low. If NO job work activity during quarter, file NIL ITC-04 (all tables with zero values). Set quarterly reminders for ITC-04 deadline. Penalty: ₹100/day (max ₹5,000) for late filing.",
                  },
                  {
                    mistake: "Missing Time-Limit Compliance (1 Year/3 Years)",
                    icon: "⏰",
                    problem:
                      "Goods sent to job worker are not brought back or supplied within 1 year (inputs) or 3 years (capital goods). This triggers deemed supply — principal must pay GST on goods sent and reverse ITC claimed earlier.",
                    solution:
                      "Maintain a time-limit tracker in Excel/ERP: Monitor date of sending to job worker, Calculate expiry date (sending date + 1 year or 3 years), Set alerts 2-3 months before expiry, Plan to bring goods back or supply from job worker before deadline. If time limit is expiring, bring goods back immediately or pay GST on deemed supply.",
                  },
                  {
                    mistake: "Incorrect Closing Balance Calculation",
                    icon: "📊",
                    problem:
                      "Table 4D (closing balance) does not match actual goods lying with job workers. Opening balance + Sent - Received Back - Supplied ≠ Actual stock. This creates reconciliation issues and ITC mismatch during audits.",
                    solution:
                      "Reconcile physical stock with job workers at quarter-end: Send stock confirmation request to job workers, Match their confirmation with your records (Table 4D), Investigate discrepancies (missing challans, unreported receipts, losses), Adjust ITC-04 based on actual verified stock. Conduct periodic physical verification (quarterly or half-yearly).",
                  },
                  {
                    mistake: "Not Reporting Direct Supply from Job Worker (Table 4C)",
                    icon: "🚚",
                    problem:
                      "Goods are supplied from job worker directly to customers, but not reported in Table 4C of ITC-04. This creates a mismatch — goods sent (Table 4A) but not received back (Table 4B) or reported as supplied (Table 4C).",
                    solution:
                      "ALWAYS report direct supplies from job worker in Table 4C: Maintain a register of invoices issued from job worker premises, Match invoice quantities with goods sent to job worker, Report full details (customer GSTIN, invoice number, quantity, value) in Table 4C. Cross-check Table 4C entries with GSTR-1 (outward supplies) — they should match.",
                  },
                  {
                    mistake: "Sending Goods Without Delivery Challan",
                    icon: "📝",
                    problem:
                      "Goods are sent to job worker without proper delivery challan or with incomplete challan details. During transport, goods can be seized for lack of documentation, and ITC-04 filing becomes difficult without challan reference.",
                    solution:
                      "ALWAYS issue a proper Delivery Challan as per Rule 55 of CGST Rules: Include all mandatory fields (challan number, date, principal & job worker details, HSN code, quantity, value, purpose). Maintain sequential challan numbering for easy tracking. Keep copies of all delivery challans for ITC-04 reference and audit purposes.",
                  },
                  {
                    mistake: "Not Reconciling Job Worker's ITC-04 (If Registered)",
                    icon: "🔄",
                    problem:
                      "If job worker is also registered under GST and receives goods from multiple principals, their ITC-04 (filed by job worker) should match your ITC-04. Mismatch indicates unreported movements or errors.",
                    solution:
                      "If your job worker is registered and files ITC-04: Download job worker's ITC-04 from GST portal (if publicly available), Cross-check quantities and values reported by job worker for goods received from you, Investigate discrepancies and reconcile with job worker. This two-way reconciliation ensures compliance accuracy.",
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
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's GST Job Work Compliance Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From challan tracking to ITC-04 filing and time-limit monitoring —
              we handle complete job work compliance for manufacturers.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📋",
                  title: "Quarterly ITC-04 Filing",
                  desc: "Complete ITC-04 preparation and filing for the quarter. Includes data compilation from your challans/registers, Tables 4A to 4D filling, online filing with DSC/EVC, and acknowledgment download.",
                  price: "₹2,999/quarter",
                },
                {
                  icon: "📦",
                  title: "Job Work Register Maintenance",
                  desc: "Ongoing maintenance of Job Work Register (Excel/ERP) throughout the quarter. Track goods sent, received back, supplied from job worker. Monthly reconciliation and reporting. Ideal for monthly accounting.",
                  price: "₹1,999/month",
                },
                {
                  icon: "🔄",
                  title: "Challan Reconciliation (Quarter-End)",
                  desc: "Detailed reconciliation of delivery challans, receipt challans, and invoices at quarter-end. Cross-check quantities sent vs. received vs. closing balance. Identify discrepancies and prepare corrective action plan.",
                  price: "₹1,499/quarter",
                },
                {
                  icon: "⏰",
                  title: "Time-Limit Compliance Monitoring",
                  desc: "Continuous monitoring of 1-year (inputs) and 3-year (capital goods) time limits. Automated alerts 3 months before expiry. Planning support to bring back goods or supply before deadline. Prevent deemed supply tax liability.",
                  price: "₹999/quarter",
                },
                {
                  icon: "📝",
                  title: "Delivery Challan Template & Preparation",
                  desc: "GST-compliant delivery challan template as per Rule 55. Challan preparation support for goods sent to job workers. Sequential numbering system setup. Training on challan issuance process.",
                  price: "₹499",
                },
                {
                  icon: "🏭",
                  title: "Job Worker GST Registration Support",
                  desc: "If your job worker is not registered but turnover exceeds threshold, we assist in GST registration. Includes REG-01 filing, GSTIN issuance, and initial compliance setup for job worker.",
                  price: "₹2,999",
                },
                {
                  icon: "📊",
                  title: "Complex/Multi-Location Job Work Compliance",
                  desc: "For manufacturers with multiple factory locations sending goods to multiple job workers across states. Includes consolidated ITC-04 filing, multi-location register maintenance, and centralized reporting.",
                  price: "₹9,999/quarter",
                },
                {
                  icon: "📨",
                  title: "ITC-04 Rectification (Past Quarters)",
                  desc: "If you missed filing ITC-04 for previous quarters or filed with errors, we file rectified ITC-04 with late fee payment, penalty computation, and explanation to department (if required).",
                  price: "₹3,999/quarter",
                },
                {
                  icon: "🔍",
                  title: "Job Work Compliance Audit",
                  desc: "Annual audit of all ITC-04 returns, delivery challans, and job work agreements. Check for time-limit violations, unreported movements, ITC reversal requirements. Compliance report with recommendations.",
                  price: "₹14,999/year",
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
                📦 Quarterly Compliance Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic (Small Manufacturers)",
                    price: "₹4,999/quarter",
                    includes: [
                      "ITC-04 filing (1 location)",
                      "Challan reconciliation",
                      "Time-limit alerts",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard (Medium Manufacturers)",
                    price: "₹9,999/quarter",
                    includes: [
                      "Everything in Basic",
                      "Monthly register maintenance",
                      "Multiple job workers (up to 10)",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Premium (Large/Multi-Location)",
                    price: "₹19,999/quarter",
                    includes: [
                      "Everything in Standard",
                      "Multi-location compliance",
                      "Unlimited job workers",
                      "Dedicated account manager",
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
              Real Stories from Our Job Work Compliance Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sharma Textiles",
                  location: "Muzaffarnagar",
                  text: "We send fabric to 15+ job workers for processing. Tracking challans manually was a nightmare. Taxvio set up a job work register, files our ITC-04 quarterly, and alerts us when goods are nearing 1-year time limit. Zero compliance issues in last 2 years!",
                },
                {
                  name: "Precision Engineering Ltd.",
                  location: "Noida",
                  text: "Our machinery (capital goods) worth ₹50 lakh was sent to a job worker 2.5 years ago. Taxvio alerted us 3 months before the 3-year deadline and helped us bring back the machinery on time. Saved us from ₹9 lakh ITC reversal liability!",
                },
                {
                  name: "FoodPro Industries",
                  location: "Meerut",
                  text: "We had never filed ITC-04 for 8 quarters. GST department issued notice asking for job work details. Taxvio filed all backlog ITC-04 returns in 15 days with late fee payment, prepared reconciliation statement, and responded to notice. Case closed with minimal penalty.",
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
              GST Job Work Compliance Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST job work compliance (ITC-04 filing, challan
              reconciliation, time-limit tracking) for manufacturers across{" "}
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
                  title: "GST Return Filing",
                  icon: "📊",
                  link: "/serviceslist/gst/gst-return-filing",
                  desc: "Monthly GSTR-1, GSTR-3B filing.",
                },
                {
                  title: "GST E-Way Bill",
                  icon: "🚛",
                  link: "/serviceslist/gst/gst-eway-bill",
                  desc: "E-way bill generation and compliance.",
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
                    Ensure Job Work Compliance Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File ITC-04 & Track Job Work Goods
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't risk ITC reversal and penalty — file ITC-04 quarterly by
                    25th and track time limits for goods sent to job workers.
                    Taxvio provides complete job work compliance — ITC-04 filing,
                    challan reconciliation, time-limit monitoring, and delivery
                    challan support. Starting ₹2,999/quarter. Ensure 100%
                    compliance and zero audit issues.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Start Now — ₹2,999/qtr
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20Job%20Work%20Compliance"
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
      q: "Is ITC-04 mandatory even if job work activity is minimal?",
      a: "Yes. ITC-04 is MANDATORY for every principal manufacturer who sends goods to job workers, irrespective of the quantum of activity. Even if you sent goods to job worker only once in the quarter, you MUST file ITC-04. If there was NO job work activity during the quarter (no goods sent or received), you should file a NIL ITC-04 (all tables with zero values) to maintain compliance continuity. Non-filing attracts penalty of ₹100/day (max ₹5,000).",
    },
    {
      q: "Can I send goods to unregistered job worker under GST?",
      a: "Yes. Job workers are NOT mandatorily required to be registered under GST (unless their own turnover exceeds the registration threshold of ₹40 lakh for goods or ₹20 lakh for services). You (the principal) can send goods to UNREGISTERED job workers. However: (1) In ITC-04, instead of job worker's GSTIN, you must enter 'Unregistered' and provide job worker's name and address. (2) You cannot claim ITC on job work charges paid to unregistered job worker (since no GST invoice). (3) Ensure delivery challan mentions job worker's full details (name, address, contact).",
    },
    {
      q: "What if goods are lost/damaged at job worker's premises?",
      a: "If goods sent to job worker are lost, stolen, destroyed, or damaged beyond repair while at job worker's premises: (1) Inform the jurisdictional GST officer immediately (within 7 days of loss/damage). (2) File a loss/damage intimation explaining circumstances (fire, theft, natural calamity, etc.). (3) The officer may ask for: FIR (if theft/burglary), Insurance claim documents, Fire brigade report (if fire), or Any other evidence. (4) Based on your explanation, the officer may: Allow you to write off the loss and reverse ITC on those goods (if already claimed), OR Treat it as deemed supply and ask you to pay GST on lost goods. In ITC-04, such goods should be shown as 'closed' (not in closing balance) with remarks explaining the loss.",
    },
    {
      q: "Can I extend the time limit (1 year/3 years) for goods with job worker?",
      a: "NO. The time limits prescribed under Section 143 (1 year for inputs, 3 years for capital goods) are ABSOLUTE and CANNOT be extended by applying to any authority. These are statutory time limits. If you fail to bring goods back or supply them from job worker within the time limit: (1) Sending of goods to job worker is treated as 'supply' at the time of original sending. (2) You must pay GST on the value of goods sent (deemed supply). (3) You must reverse ITC claimed on those goods (if any). The only exception is if you can prove force majeure (natural calamity, war, etc.) and apply for condonation, but this is extremely rare and not guaranteed.",
    },
    {
      q: "Can goods be sent from one job worker to another job worker directly (without bringing back to principal)?",
      a: "Yes. Section 143(1)(c) allows the principal to send goods from one job worker to ANOTHER job worker directly (without bringing them back to principal's premises). This is useful in multi-stage processing. Process: (1) Principal issues delivery challan from Job Worker A to Job Worker B. (2) Principal informs Job Worker A to send goods to Job Worker B (with challan reference). (3) In ITC-04, report: Goods sent from Job Worker A to Job Worker B in the remarks/notes section. Adjust closing balance of Job Worker A (goods removed), and opening balance of Job Worker B (goods received). Ensure both job workers maintain proper records and challans.",
    },
    {
      q: "If job worker is in another state, do I need to pay IGST on job work charges?",
      a: "Yes, but only on the JOB WORK CHARGES (processing fees), NOT on the value of goods sent to job worker. Example: You send raw materials worth ₹10 lakh to a job worker in another state for processing. Job worker charges you ₹2 lakh as processing fee + 18% GST (₹36,000 IGST). You pay ₹2.36 lakh to job worker. The ₹10 lakh goods sent are NOT subject to GST (as per Section 143 — sending to job worker is not a supply). You only pay 18% IGST on ₹2 lakh job work charges. You can claim ITC of ₹36,000 in your GSTR-3B (if job worker is registered and issues GST invoice).",
    },
    {
      q: "Can Taxvio help with ITC-04 filing for past quarters if we missed filing?",
      a: "Yes. As part of our ITC-04 Rectification service (₹3,999/quarter), we file backlog ITC-04 returns for previous quarters that you missed. Process: (1) We collect all historical data (challans, registers, invoices) for those quarters. (2) Prepare ITC-04 for each missed quarter separately. (3) Compute late fee (₹100/day per return, max ₹5,000) and pay via DRC-03 challan. (4) File ITC-04 on GST portal with late fee details. (5) Download acknowledgments and submit to department if notice was issued. We've successfully filed backlog ITC-04 for clients who missed up to 12 quarters (3 years) of filing.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST Job Work Compliance
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