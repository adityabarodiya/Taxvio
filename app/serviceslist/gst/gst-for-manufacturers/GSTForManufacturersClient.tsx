// app/serviceslist/gst/gst-for-manufacturers/GSTForManufacturersClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";
import InquiryForm from "@/components/InquiryFormButton";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Compliance Services for Manufacturers & Job Workers",
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
    "Specialized GST compliance services for manufacturing units, textile mills, engineering firms, production facilities, and job workers. Complete support for GST registration (single state and multi-state for factories in different locations), input tax credit (ITC) optimization on raw materials, consumables, packing materials, and capital goods (machinery, plant & equipment), job work compliance under Section 143 (ITC-04 return filing, job work challan tracking, principal-to-job worker stock movement), monthly GSTR-1 and GSTR-3B filing with manufacturing-specific entries, e-way bill generation and tracking for goods movement, stock transfer documentation (branch transfers, consignment stock), inter-state supply management, and complete manufacturing GST advisory. Serving manufacturers, textile units, engineering firms across Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "Manufacturing & Job Work GST Compliance",
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
      name: "What is input tax credit (ITC) and how does it benefit manufacturers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Input Tax Credit (ITC) is a mechanism where manufacturers can claim credit for GST paid on inputs (raw materials, consumables, packing materials) and capital goods (machinery, equipment) used in manufacturing. How it works: (1) You purchase raw materials for ₹1,00,000 + ₹18,000 GST (18%) = ₹1,18,000 total. (2) You claim ₹18,000 as ITC (credit in electronic credit ledger). (3) You manufacture finished goods and sell for ₹2,00,000 + ₹36,000 GST (18%) = ₹2,36,000. (4) Your GST liability = ₹36,000 (output tax) - ₹18,000 (ITC) = ₹18,000 net tax payable. Benefit: ITC reduces effective tax burden — you pay GST only on VALUE ADDITION (not on entire output value). For manufacturers with high input costs, ITC can reduce cash tax liability by 60-80%. Proper ITC optimization is CRITICAL for manufacturing profitability.",
      },
    },
    {
      "@type": "Question",
      name: "What is job work under GST and what are the compliance requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Job work under GST (Section 143 of CGST Act) is when a principal manufacturer sends goods (raw materials, semi-finished goods, or capital goods) to a job worker for processing/manufacturing WITHOUT transferring ownership. Example: Textile mill (principal) sends yarn to dyeing unit (job worker) for dyeing, then receives back dyed yarn. Compliance requirements: (1) Principal must file Form ITC-04 (quarterly return) declaring goods sent to/received from job worker. (2) Job work challan (delivery challan, not tax invoice) must be issued for goods movement. (3) E-way bill required if goods value >₹50,000 (even though no sale — stock movement). (4) Processed goods must be RETURNED to principal within prescribed timelines (1 year for inputs, 3 years for capital goods), else ITC reversal. (5) Job worker need not register for GST if only providing job work service (turnover <₹20 lakh). (6) Principal can claim ITC on inputs sent to job worker even before receipt back (subject to compliance).",
      },
    },
    {
      "@type": "Question",
      name: "Do manufacturers need separate GST registration for each factory in different states?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YES. If you have manufacturing units (factories/plants) located in DIFFERENT STATES, you MUST obtain SEPARATE GSTIN for EACH STATE. Example: If you have factories in Uttar Pradesh, Maharashtra, and Tamil Nadu, you need 3 GSTINs (one per state). Each state GSTIN is independent: Separate registration process for each state. Separate monthly return filing (GSTR-1, GSTR-3B) for each state GSTIN. Inter-state stock transfers between your own factories are treated as IGST supplies (must be invoiced and reported). If factories are in the SAME STATE but different locations: You can register under ONE GSTIN with multiple 'Additional Places of Business'. Advantage: Single return filing for all locations in same state. Multi-state GST adds compliance complexity — each state has separate ITC ledger, return deadlines, and audit requirements. Taxvio provides centralized multi-state GST compliance management for manufacturers.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTForManufacturersClient() {
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
          className="bg-blue-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🏭 Manufacturer? Optimize ITC & Stay Compliant — Expert GST Support Available
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
              <span className="text-white">GST for Manufacturers</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏭 Manufacturing GST
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Services for
                  <br />
                  <span className="text-[#7ecbf0]">Manufacturers</span>
                  <br />
                  & Job Workers
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Running a{" "}
                  <strong className="text-white">
                    manufacturing unit, textile mill, engineering firm
                  </strong>
                  , or{" "}
                  <strong className="text-white">job work operation</strong>?
                  Manufacturing GST compliance requires{" "}
                  <strong className="text-white">
                    input tax credit (ITC) optimization, job work tracking
                    (ITC-04), multi-state registration
                  </strong>
                  , e-way bill management, and stock transfer documentation.{" "}
                  <strong className="text-white">Taxvio</strong> specializes in
                  manufacturing GST — registration, ITC maximization on raw
                  materials & capital goods, job work compliance, monthly return
                  filing, and complete advisory.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get Manufacturing GST — ₹4,999/mo →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20GST%20help%20for%20my%20manufacturing%20unit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ ITC Optimization",
                    "✅ Job Work Compliance",
                    "✅ Multi-State Registration",
                    "✅ E-way Bill Support",
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
                  Manufacturing GST Essentials
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["⚙️", "ITC on raw materials & machinery"],
                    ["📋", "ITC-04 quarterly job work return"],
                    ["🚚", "E-way bill for goods movement"],
                    ["🏭", "Multi-state factory registration"],
                    ["📊", "GSTR-1/3B with ITC optimization"],
                    ["🚀", "Service fee: ₹4,999/month"],
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
              { number: "200+", label: "Manufacturers Served", icon: "🏭" },
              { number: "100%", label: "ITC Claim Rate", icon: "💰" },
              { number: "Multi-State", label: "Registration Support", icon: "📍" },
              { number: "₹4,999", label: "Monthly Fee", icon: "🎯" },
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
              "✔ ITC Experts",
              "✔ Job Work Specialists",
              "✔ E-way Bill Support",
              "✔ Multi-State Compliance",
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
          {/* MANUFACTURING GST BASICS */}
          <section id="manufacturing-gst-basics">
            <SectionLabel text="Understanding Manufacturing GST" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              GST Compliance for Manufacturing Units
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Manufacturing units</strong> under GST are classified
                  as <strong>supply of goods</strong> (manufactured products).
                  Manufacturing businesses have UNIQUE compliance requirements
                  compared to traders or service providers — primarily around{" "}
                  <strong>
                    input tax credit (ITC), job work, and multi-location
                    operations
                  </strong>
                  .
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    💰 Input Tax Credit (ITC) for Manufacturers
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    ITC is the BIGGEST benefit for manufacturers — ability to
                    claim credit for GST paid on ALL inputs and capital goods
                    used in manufacturing:
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🧱 ITC on Raw Materials & Inputs
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>
                          • Raw materials (metal, plastic, chemicals, fabric,
                          etc.)
                        </li>
                        <li>
                          • Consumables (lubricants, spares, tools, electrodes)
                        </li>
                        <li>
                          • Packing materials (boxes, cartons, labels, adhesives)
                        </li>
                        <li>
                          • Fuel & power (if used in manufacturing — coal, gas,
                          electricity with GST)
                        </li>
                        <li>• Any goods used/consumed in manufacturing process</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>ITC Claim:</strong> 100% of GST paid on above
                        inputs can be claimed in the month of receipt (as per
                        GSTR-2B).
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        ⚙️ ITC on Capital Goods
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Machinery, plant & equipment</li>
                        <li>• Tools, dies, moulds, jigs & fixtures</li>
                        <li>• Computers, office equipment (used in factory)</li>
                        <li>
                          • Air conditioners, electrical installations (for
                          factory)
                        </li>
                        <li>• Factory building construction (works contract)</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>ITC Claim:</strong> 100% of GST paid on capital
                        goods can be claimed IMMEDIATELY in the month of receipt
                        (no depreciation-based spreading required under GST).
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        📦 ITC on Input Services
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Freight inward (transportation of raw materials)</li>
                        <li>
                          • Job work charges (processing, fabrication, dyeing,
                          printing)
                        </li>
                        <li>
                          • Repairs & maintenance (machinery, factory building)
                        </li>
                        <li>
                          • CA, legal, consulting services (used for business)
                        </li>
                        <li>• Rent (if GST is charged by landlord)</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>ITC Claim:</strong> 100% ITC available on input
                        services used in the course of business.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    📊 ITC Impact on Manufacturing Cost
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="font-bold text-green-700 text-sm mb-3">
                      💡 Example Calculation
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p className="font-bold">Manufacturing Cost Breakdown:</p>
                      <table className="w-full text-xs border border-green-200">
                        <tbody>
                          <tr className="border-b border-green-100">
                            <td className="p-2">Raw materials</td>
                            <td className="p-2 text-right">₹5,00,000</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-2">GST @18%</td>
                            <td className="p-2 text-right">₹90,000 (ITC)</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-2">Packing materials</td>
                            <td className="p-2 text-right">₹50,000</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-2">GST @12%</td>
                            <td className="p-2 text-right">₹6,000 (ITC)</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-2">Job work charges</td>
                            <td className="p-2 text-right">₹1,00,000</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-2">GST @18%</td>
                            <td className="p-2 text-right">₹18,000 (ITC)</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-2">Freight inward</td>
                            <td className="p-2 text-right">₹20,000</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-2">GST @5%</td>
                            <td className="p-2 text-right">₹1,000 (ITC)</td>
                          </tr>
                          <tr className="bg-green-50 font-bold">
                            <td className="p-2">Total ITC Available</td>
                            <td className="p-2 text-right">₹1,15,000</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="mt-3">
                        <strong>Sales:</strong> Finished goods sold for
                        ₹10,00,000 + ₹1,80,000 GST @18%
                        <br />
                        <strong>Net Tax Payable:</strong> ₹1,80,000 (output tax)
                        - ₹1,15,000 (ITC) = <strong>₹65,000 only</strong>
                        <br />
                        <strong>Effective Tax Rate:</strong> 6.5% (instead of 18%
                        — due to ITC benefit)
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Key Takeaway:</strong> Proper ITC optimization can
                    reduce effective tax burden by 60-70% for manufacturers. This
                    is why ITC compliance is CRITICAL.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    🏭 Job Work Under GST (Section 143)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Job work</strong> is a common practice in
                    manufacturing where a <strong>principal manufacturer</strong>{" "}
                    sends goods (raw materials, semi-finished goods, or capital
                    goods) to a <strong>job worker</strong> for
                    processing/manufacturing WITHOUT transferring ownership.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-purple-200 mb-3">
                    <p className="font-bold text-purple-700 text-sm mb-2">
                      📋 Job Work Compliance Requirements
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="font-bold text-purple-700 mb-1">
                          1️⃣ Form ITC-04 (Quarterly Return)
                        </p>
                        <p>
                          Principal must file Form ITC-04 every quarter declaring:
                          <br />• Goods sent to job worker (challan-wise details)
                          <br />• Goods received back from job worker
                          <br />• Goods sold directly from job worker's premises
                          (if allowed)
                          <br />
                          <strong>Deadline:</strong> 25th of month following
                          quarter (e.g., Q1 Apr-Jun → file by 25th July)
                        </p>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="font-bold text-purple-700 mb-1">
                          2️⃣ Job Work Challan (Delivery Challan)
                        </p>
                        <p>
                          When sending goods to job worker, issue DELIVERY CHALLAN
                          (not tax invoice):
                          <br />• Challan number, date
                          <br />• Principal's GSTIN, name, address
                          <br />• Job worker's name, address (GSTIN if registered)
                          <br />• Description & quantity of goods sent
                          <br />• HSN code, taxable value
                          <br />• Mention: "Goods sent for job work under Section
                          143"
                        </p>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="font-bold text-purple-700 mb-1">
                          3️⃣ E-way Bill for Job Work Movement
                        </p>
                        <p>
                          E-way bill is MANDATORY if goods value &gt;₹50,000 (even
                          though no sale — it's stock movement):
                          <br />• Generate e-way bill on GST portal
                          <br />• Sub-supply type: "Job work"
                          <br />• Document type: "Delivery challan"
                          <br />• Valid for distance-based duration (1 day per 200
                          km)
                        </p>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="font-bold text-purple-700 mb-1">
                          4️⃣ Return Timeline Compliance
                        </p>
                        <p>
                          Goods sent to job worker must be RETURNED within:
                          <br />
                          <strong>• Inputs (raw materials):</strong> 1 YEAR from
                          date of sending
                          <br />
                          <strong>• Capital goods (machinery):</strong> 3 YEARS
                          from date of sending
                          <br />
                          <strong>If not returned:</strong> ITC claimed on those
                          goods must be REVERSED + interest
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="font-bold text-orange-700 text-xs mb-1">
                      ⚠️ Job Work ITC Benefit
                    </p>
                    <p className="text-xs text-gray-600">
                      Principal can claim ITC on inputs sent to job worker{" "}
                      <strong>IMMEDIATELY</strong> (even before receiving back
                      processed goods) — subject to ITC-04 compliance. This
                      improves cash flow for manufacturers using job work.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    📍 Multi-State GST Registration for Manufacturers
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    If you have manufacturing units (factories) in MULTIPLE
                    STATES, you need SEPARATE GSTIN for EACH STATE:
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 mb-2 text-sm">
                        🏭 Multi-State Registration Requirements
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>
                          • <strong>Separate GSTIN</strong> for each state (e.g.,
                          UP factory = UP GSTIN, Maharashtra factory = MH GSTIN)
                        </li>
                        <li>
                          • <strong>Separate return filing</strong> for each state
                          (GSTR-1, GSTR-3B for each GSTIN)
                        </li>
                        <li>
                          • <strong>Inter-state stock transfers</strong> between
                          your own factories = IGST supply (must be invoiced)
                        </li>
                        <li>
                          • <strong>Separate ITC ledger</strong> for each state
                          (ITC of UP GSTIN cannot be used for MH GSTIN tax
                          liability)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 mb-2 text-sm">
                        📦 Stock Transfer Between Own Units
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        When you transfer goods from UP factory to MH factory
                        (both your own units but different GSTINs):
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>
                          • Issue <strong>tax invoice</strong> (not delivery
                          challan) — transfer is treated as supply
                        </li>
                        <li>
                          • Charge <strong>IGST</strong> (inter-state supply) at
                          applicable rate
                        </li>
                        <li>
                          • Sending unit (UP) pays IGST in GSTR-3B and reports
                          sale in GSTR-1
                        </li>
                        <li>
                          • Receiving unit (MH) claims IGST as ITC in GSTR-3B
                          (from GSTR-2B)
                        </li>
                        <li>
                          • Generate <strong>e-way bill</strong> for movement
                        </li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>Net effect:</strong> No additional tax burden
                        (IGST paid by one unit = ITC for other unit), but
                        compliance and documentation required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    🚚 E-way Bill for Manufacturing Units
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    E-way bill is MANDATORY for all goods movement (sales, stock
                    transfers, job work) where consignment value &gt;₹50,000:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Sales to customers (inter-state or intra-state)",
                      "Stock transfer between own factories in different states",
                      "Goods sent to job worker for processing",
                      "Goods received back from job worker",
                      "Return of defective goods from customer",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Validity:</strong> 1 day per 200 km distance (e.g.,
                    600 km distance = 3 days validity). E-way bill can be
                    extended if goods are in transit beyond validity period.
                    Taxvio provides e-way bill generation and tracking services.
                  </p>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST compliance for manufacturing units — ITC
                  optimization, job work tracking, multi-state registration, e-way
                  bill management across Uttar Pradesh, Noida, Delhi NCR, and
                  pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* ITC OPTIMIZATION */}
          <section id="itc-optimization">
            <SectionLabel text="Maximize Your ITC" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Input Tax Credit (ITC) Optimization for Manufacturers
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                ITC optimization is the KEY to reducing effective tax burden for
                manufacturers. Here's how we maximize your ITC claims:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "ITC Eligibility Audit (Input-wise Review)",
                    description:
                      "We review ALL your purchases to identify eligible ITC: (1) Raw materials & inputs: All materials directly used in manufacturing → 100% ITC eligible. (2) Capital goods: Machinery, equipment, tools, factory construction → 100% ITC eligible (claim immediately). (3) Input services: Freight inward, job work, repairs, rent → 100% ITC eligible. (4) Common inputs/services: Used for both taxable and exempt supplies → PROPORTIONATE ITC (based on ratio of taxable sales). (5) Blocked credit items: Identify purchases where ITC is NOT allowed (motor vehicles for directors, club memberships, food & beverages for employees, personal use items) → Exclude from ITC claim. We prepare ITC eligibility report for each category of purchase.",
                    benefit:
                      "Ensures 100% eligible ITC is claimed, no valid ITC is missed.",
                  },
                  {
                    step: 2,
                    title: "GSTR-2B Reconciliation (Invoice Matching)",
                    description:
                      "ITC can be claimed ONLY if supplier has filed GSTR-1 (your purchase appears in your GSTR-2B): Download GSTR-2B (auto-populated ITC statement) on 14th of next month. Match GSTR-2B with your purchase register: Check invoice-wise matching (invoice number, date, amount, GSTIN). Identify mismatches: Invoices in your books but NOT in GSTR-2B (supplier hasn't filed GSTR-1 or filed with errors) → Cannot claim ITC. Invoices in GSTR-2B but not in your books (supplier filed, but you haven't recorded purchase) → Can claim ITC if goods received. Contact suppliers for mismatched invoices: Ask supplier to file/amend GSTR-1 if they missed your invoice. Claim ITC in GSTR-3B ONLY for invoices appearing in GSTR-2B (avoid ITC mismatch and reversal).",
                    benefit:
                      "Avoids ITC denial during audit, ensures ITC claim is backed by GSTR-2B.",
                  },
                  {
                    step: 3,
                    title: "Timely ITC Claim (Before Time Limit)",
                    description:
                      "ITC can be claimed within TIME LIMITS — claim before deadline to avoid PERMANENT LOSS of ITC: (1) Normal ITC claim deadline: Earlier of: (a) Due date of GSTR-3B for September of NEXT financial year, OR (b) Date of filing annual return (GSTR-9). Example: FY 2023-24 purchases → ITC can be claimed till GSTR-3B of September 2024 (due 20th Oct 2024) OR till you file GSTR-9 for FY 2023-24 (due 31st Dec 2024). (2) Late claim consequences: ITC claimed after deadline = INELIGIBLE ITC → Department will raise demand + interest + penalty. We track ITC claim deadlines and ensure all eligible ITC is claimed within time limit (especially for invoices received late or supplier filing delays).",
                    benefit:
                      "No ITC loss due to time limit expiry, maximum credit recovery.",
                  },
                  {
                    step: 4,
                    title: "Capital Goods ITC Maximization",
                    description:
                      "Capital goods ITC has special rules — we ensure 100% claim: (1) Immediate claim: Unlike income tax (where depreciation is claimed over years), GST allows 100% ITC on capital goods in the MONTH OF RECEIPT itself. (2) Eligible capital goods: Plant & machinery, Tools, dies, moulds, Computers, AC, electrical fittings (used in factory), Factory building construction/renovation (works contract GST). (3) Documentation required: Tax invoice from supplier (with GSTIN, HSN code, GST amount), Proof of receipt (GRN - Goods Receipt Note, installation certificate), Proof of payment (bank statement showing payment to supplier). (4) ITC claim: Claim full GST paid on capital goods in GSTR-3B Table 4(A)(5) — ITC on capital goods. We review all capital goods purchases (current + past year) and ensure ITC is claimed timely.",
                    benefit:
                      "Large ITC benefit on machinery purchases (can reduce cash tax by lakhs).",
                  },
                  {
                    step: 5,
                    title: "ITC on Input Services (Job Work, Freight, Rent)",
                    description:
                      "Manufacturers often miss ITC on input services — we ensure claim on: (1) Job work charges: GST paid to job worker for processing/fabrication → 100% ITC (if goods are for taxable supplies). (2) Freight inward: Transportation of raw materials to factory → 5% or 18% GST (GTA or other transporter) → 100% ITC. (3) Repairs & maintenance: Machinery repairs, factory building repairs → 18% GST → 100% ITC. (4) Rent: If factory premises is rented and landlord charges GST → 18% GST → 100% ITC. (5) CA/legal/consulting: Professional services used for business → 18% GST → 100% ITC. We review all service invoices and ensure ITC is claimed (often overlooked by manufacturers focused on material ITC).",
                    benefit:
                      "Additional 10-15% ITC recovery from services (often ignored).",
                  },
                  {
                    step: 6,
                    title: "Reversal Avoidance (ITC Already Claimed)",
                    description:
                      "ITC must be REVERSED in certain situations — we help avoid unnecessary reversals: (1) Supplier didn't pay tax: If supplier hasn't deposited GST to government within 180 days of invoice date → You must reverse ITC (can reclaim later if supplier pays). We track supplier GSTR-3B filing to ensure tax is paid. (2) Goods returned to supplier: If you return goods due to defect/rejection → Issue credit note, reverse proportionate ITC. (3) Non-payment to supplier: If you don't pay supplier within 180 days → Reverse ITC (can reclaim after payment). (4) Job work return deadline missed: If goods sent to job worker are not returned within 1 year (inputs) or 3 years (capital goods) → Reverse ITC + interest. We file ITC-04 on time to track job work compliance. By monitoring these triggers, we minimize ITC reversals and protect your cash flow.",
                    benefit:
                      "Avoids cash outflow due to ITC reversal, maintains working capital.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-green-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#00416a] mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.description}
                        </p>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <p className="text-xs text-green-700">
                            <strong>✅ Benefit:</strong> {item.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-green-300 rounded-2xl p-6">
                <p className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  ITC Optimization Impact
                </p>
                <p className="text-sm text-gray-700">
                  Proper ITC optimization can reduce your effective GST rate from
                  18% to 5-8% (depending on input cost ratio). For a manufacturer
                  with ₹1 crore annual sales, ITC optimization can save ₹10-12 lakh
                  per year in cash tax outflow. Taxvio's ITC optimization service
                  pays for itself within the first month!
                </p>
              </div>
            </div>
          </section>

          {/* JOB WORK COMPLIANCE */}
          <section id="job-work-compliance">
            <SectionLabel text="Job Work Tracking" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Job Work Compliance (ITC-04 Filing & Tracking)
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Job work compliance requires meticulous tracking of goods sent to
                and received from job workers. Here's our complete process:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    title: "📋 ITC-04 Quarterly Return Filing",
                    points: [
                      "Track all goods sent to job worker (challan-wise register)",
                      "Track all goods received back from job worker",
                      "Track goods sold directly from job worker's premises (if applicable)",
                      "Prepare ITC-04 form with complete details (job worker name, GSTIN, challan number, date, quantity, HSN)",
                      "File ITC-04 by 25th of month following quarter (Q1 Apr-Jun → 25th July)",
                      "Download acknowledgment and maintain for records",
                    ],
                  },
                  {
                    title: "🚚 Job Work Challan Management",
                    points: [
                      "Issue delivery challan (not tax invoice) when sending goods to job worker",
                      "Challan must contain: Principal GSTIN, Job worker details, Goods description, Quantity, HSN code, Value",
                      "Mention: 'Goods sent for job work under Section 143'",
                      "Generate e-way bill if value >₹50,000 (select 'Job work' as sub-supply type)",
                      "Maintain challan register (sent vs received tracking)",
                      "Reconcile challans quarterly for ITC-04 filing",
                    ],
                  },
                  {
                    title: "⏰ Return Timeline Monitoring",
                    points: [
                      "Track goods sent to job worker date-wise",
                      "Monitor return deadline: 1 year for inputs, 3 years for capital goods",
                      "Set alerts 30 days before deadline expiry",
                      "If goods not returned on time → Reverse ITC + interest",
                      "Maintain job work aging report (goods pending with job worker)",
                      "Coordinate with job worker for timely returns",
                    ],
                  },
                  {
                    title: "🔍 Job Worker GSTIN Verification",
                    points: [
                      "Verify job worker's GSTIN (if registered) on GST portal",
                      "If job worker is unregistered: Allowed (turnover <₹20 lakh exemption for job workers)",
                      "Maintain job worker master list (name, address, GSTIN, contact)",
                      "Obtain job worker declaration (confirming receipt and processing)",
                      "Track multiple job workers (if goods sent to different units)",
                      "Update job worker details in ITC-04 accurately",
                    ],
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-purple-200"
                  >
                    <p className="font-bold text-purple-800 mb-3 text-lg">
                      {item.title}
                    </p>
                    <ul className="space-y-2">
                      {item.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-700 flex items-start gap-2"
                        >
                          <span className="text-purple-600 font-bold mt-0.5">
                            •
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-white border-2 border-purple-300 rounded-2xl p-6">
                <p className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Taxvio's Job Work Service
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  We maintain complete job work register, file ITC-04 quarterly,
                  generate e-way bills for job work movement, and monitor return
                  timelines to avoid ITC reversal. Our job work tracking system
                  integrates with your production planning for seamless compliance.
                </p>
              </div>
            </div>
          </section>

          {/* COMPLIANCE PROCESS */}
          <section id="compliance-process">
            <SectionLabel text="Complete Compliance" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Manufacturing GST Compliance Process
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                End-to-end GST compliance for manufacturing units:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "GST Registration (Single/Multi-State)",
                    description:
                      "Single-state registration: If factory is in one state → One GSTIN. Multi-state registration: If factories in multiple states → Separate GSTIN for each state. Documents: PAN, Aadhaar, factory address proof (rent agreement, property documents), bank statement, photographs, electricity bill (for factory premises), authorization letter (if CA filing). File REG-01 on GST portal for each state separately. Approval timeline: 3-7 working days. For multi-state: We handle parallel filing for all states, coordinate with each state officer separately.",
                    duration: "7-10 days",
                  },
                  {
                    step: 2,
                    title: "ITC Optimization Setup (Purchase Register)",
                    description:
                      "Set up purchase register capturing: Supplier name, GSTIN, Invoice number, date, HSN code, Taxable value, CGST, SGST, IGST amounts, ITC eligibility (eligible/blocked/proportionate). Categorize purchases: Raw materials, Consumables, Packing materials, Capital goods, Input services. Maintain separate accounts for: Domestic purchases (CGST + SGST), Inter-state purchases (IGST), Imports (IGSC + customs duty). Configure accounting software (Tally/ERP) to auto-classify ITC eligibility.",
                    duration: "Initial setup",
                  },
                  {
                    step: 3,
                    title: "Monthly GSTR-2B Review & ITC Reconciliation",
                    description:
                      "On 14th of every month: Download GSTR-2B (auto-populated ITC statement). Match GSTR-2B with purchase register: Invoice-wise matching (GSTIN, invoice number, date, amount). Identify mismatches: Invoices in books but NOT in GSTR-2B → Contact supplier for GSTR-1 filing. Invoices in GSTR-2B but not in books → Verify if goods received, record purchase if valid. Prepare ITC claim summary for GSTR-3B (claim only GSTR-2B invoices). We provide monthly GSTR-2B reconciliation report with mismatch details and supplier follow-up.",
                    duration: "Monthly (14th-18th)",
                  },
                  {
                    step: 4,
                    title: "Monthly GSTR-1 Filing (Outward Supplies)",
                    description:
                      "GSTR-1 due: 11th of next month. Report: B2B sales (invoice-wise details — customer GSTIN, invoice number, value, tax). B2C sales (summary — state-wise, rate-wise total). Stock transfers to other states (treat as B2B supply — invoice your own GSTIN in other state). Exports (with shipping bill number, port code). Credit/Debit notes (if any sales returns, discounts). HSN-wise summary (if turnover >₹5 crore — report 4/6-digit HSN). File GSTR-1 with DSC/EVC, download acknowledgment.",
                    duration: "By 11th of next month",
                  },
                  {
                    step: 5,
                    title: "Monthly GSTR-3B Filing (Tax Payment + ITC Claim)",
                    description:
                      "GSTR-3B due: 20th of next month. Summary return: Table 3.1 — Total outward supplies (from GSTR-1). Table 4 — ITC claimed (from GSTR-2B reconciliation): ITC on inputs, ITC on capital goods, ITC on input services, ITC reversed (if any). Table 6 — Tax liability: Output tax (sales × GST rate), Less: ITC claimed, Less: Cash ledger balance, = Net tax payable. Generate challan (DRC-03) if net tax payable > 0, Pay via net banking, Enter CIN in GSTR-3B. File GSTR-3B with DSC/EVC.",
                    duration: "By 20th of next month",
                  },
                  {
                    step: 6,
                    title: "Quarterly ITC-04 Filing (Job Work Return)",
                    description:
                      "If you send goods to job worker: File ITC-04 quarterly by 25th of month following quarter. Report: Goods sent to job worker (challan-wise details), Goods received back from job worker, Goods sold directly from job worker's premises (if applicable). Details: Job worker name, address, GSTIN (if registered), Challan number, date, Description of goods, Quantity, Value. We maintain job work register and file ITC-04 with complete challan tracking.",
                    duration: "Quarterly (25th)",
                  },
                  {
                    step: 7,
                    title: "E-way Bill Generation (Goods Movement)",
                    description:
                      "Generate e-way bill for all goods movement >₹50,000: Sales to customers (B2B/B2C), Stock transfer between own units in different states, Job work challan (goods sent to job worker), Returns from customers. E-way bill details: From (your GSTIN, address), To (consignee GSTIN, address), Transport details (vehicle number, transporter ID), Document details (invoice/challan number, date, value). Validity: 1 day per 200 km. We provide e-way bill generation service integrated with your invoicing system.",
                    duration: "Real-time",
                  },
                  {
                    step: 8,
                    title: "Annual GSTR-9 + GSTR-9C (Audit & Reconciliation)",
                    description:
                      "GSTR-9 due: 31st December of next FY (e.g., FY 2023-24 → 31st Dec 2024). Annual return: Consolidation of all monthly GSTR-1, GSTR-3B. Reconciliation: Match with books of accounts (sales, purchases, ITC claimed). GSTR-9C (if turnover >₹5 crore): GST audit by CA, Reconciliation statement (GST vs books), Differences explanation (if any), CA certification. We prepare GSTR-9 with detailed reconciliation and GSTR-9C audit certification.",
                    duration: "Annually (by 31st Dec)",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-blue-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-blue-300 rounded-2xl p-6">
                <p className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Compliance Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Monthly:</strong> GSTR-1 by 11th, GSTR-2B review by 14th,
                  GSTR-3B by 20th. <strong>Quarterly:</strong> ITC-04 by 25th (job
                  work return). <strong>Annual:</strong> GSTR-9 + GSTR-9C by 31st
                  December. <strong>Real-time:</strong> E-way bill generation for
                  every consignment. Taxvio handles all deadlines, filings, and ITC
                  optimization — you focus on production!
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Manufacturing GST Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For GST Registration
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card of proprietor/partners/directors",
                    "Aadhaar card (for Aadhaar-based verification)",
                    "Factory address proof (rent agreement, property documents, electricity bill)",
                    "Business ownership proof (NOC from landlord if rented, property tax receipt)",
                    "Bank account statement (last 3 months) + cancelled cheque",
                    "Photographs (proprietor/partners/directors — passport size)",
                    "Digital signature (DSC) or Aadhaar-based e-sign",
                    "Authorization letter (if CA/consultant is filing)",
                    "For multi-state: Separate address proof for each factory location",
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
                  For Monthly Return Filing & ITC Claim
                </p>
                <ul className="space-y-3">
                  {[
                    "Purchase register (invoice-wise details — supplier GSTIN, invoice number, date, amount, GST)",
                    "Sales register (customer-wise invoice details)",
                    "Purchase invoices (original tax invoices with supplier GSTIN)",
                    "Sales invoices issued by you (copies for GSTR-1 reporting)",
                    "GSTR-2B (auto-generated — download from GST portal on 14th)",
                    "Job work challans (delivery challans for goods sent to job worker)",
                    "Stock transfer invoices (between own units in different states)",
                    "E-way bills generated (for all movements >₹50,000)",
                    "Bank statements (showing supplier payments, tax payments)",
                    "Capital goods invoices (machinery, equipment purchases for ITC claim)",
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
                📌 Job Work Specific Documents
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Job work challans (sent to job worker)",
                  "Job work receipt acknowledgment (goods received back)",
                  "Job worker details (name, address, GSTIN if registered)",
                  "Job work register (challan-wise tracking — sent vs received)",
                  "E-way bills for job work movement",
                  "ITC-04 filed for previous quarters (for continuity)",
                  "Job work agreement/contract (terms of processing)",
                  "Job work aging report (goods pending with job worker >6 months)",
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Manufacturing GST Mistakes
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Manufacturing GST compliance has critical pitfalls. Here's what to
                avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Claiming ITC Without GSTR-2B Matching",
                    icon: "📋",
                    problem:
                      "Claiming ITC based on purchase invoices WITHOUT verifying if supplier has filed GSTR-1 (invoice appears in your GSTR-2B). If invoice is NOT in GSTR-2B, ITC claim is INVALID — department will raise demand + interest + penalty during audit. Even if you have physical invoice and paid supplier, ITC cannot be claimed unless supplier reports it in GSTR-1.",
                    solution:
                      "ALWAYS match purchase register with GSTR-2B before claiming ITC in GSTR-3B. Download GSTR-2B on 14th of month. Claim ITC ONLY for invoices appearing in GSTR-2B Table 4 (supplies from registered persons). For mismatched invoices, contact supplier immediately to file/amend GSTR-1. Taxvio provides monthly GSTR-2B reconciliation and supplier follow-up service.",
                  },
                  {
                    mistake: "Not Filing ITC-04 for Job Work (ITC Reversal Risk)",
                    icon: "🏭",
                    problem:
                      "Sending goods to job worker but NOT filing ITC-04 quarterly return. If ITC-04 is not filed and goods are not returned within prescribed timeline (1 year for inputs, 3 years for capital goods), you must REVERSE ITC claimed on those goods + pay 18% interest. Missing ITC-04 = Compliance violation + ITC loss.",
                    solution:
                      "Maintain job work register tracking all goods sent to and received from job workers. File ITC-04 EVERY QUARTER (by 25th of month following quarter) even if only few transactions. Set reminders for goods return timeline (1 year/3 years). Coordinate with job worker for timely returns. Taxvio handles ITC-04 filing with complete challan tracking and timeline monitoring.",
                  },
                  {
                    mistake: "Stock Transfer Without Tax Invoice (ITC Denial)",
                    icon: "🚚",
                    problem:
                      "Transferring goods from one factory to another (different states, different GSTINs) using DELIVERY CHALLAN instead of TAX INVOICE. Inter-state stock transfer is treated as SUPPLY under GST — must be invoiced with IGST. Without tax invoice: Sending unit cannot report in GSTR-1, Receiving unit cannot claim ITC, Department treats it as tax evasion.",
                    solution:
                      "For stock transfer between own units in DIFFERENT STATES: Issue TAX INVOICE (not delivery challan). Charge IGST at applicable rate. Sending unit reports sale in GSTR-1, pays IGST in GSTR-3B. Receiving unit claims IGST as ITC in GSTR-3B (from GSTR-2B). Generate e-way bill for movement. For same-state transfers (same GSTIN): Delivery challan is sufficient (no tax invoice needed).",
                  },
                  {
                    mistake: "Missing Capital Goods ITC (Permanent Loss)",
                    icon: "⚙️",
                    problem:
                      "Not claiming 100% ITC on capital goods (machinery, equipment) in the month of receipt, thinking it should be depreciated over years (like income tax). Under GST, capital goods ITC can be claimed IMMEDIATELY in full. If not claimed within time limit (September GSTR-3B of next FY), ITC is PERMANENTLY LOST.",
                    solution:
                      "Review ALL capital goods purchases (machinery, tools, AC, computers for factory). Verify supplier has filed GSTR-1 (check GSTR-2B). Claim 100% ITC in GSTR-3B Table 4(A)(5) in the MONTH OF RECEIPT itself. Maintain capital goods register for future reference. For past year purchases not claimed, check if still within time limit and claim immediately. Taxvio conducts capital goods ITC audit to maximize recovery.",
                  },
                  {
                    mistake: "E-way Bill Mismatch with Invoice (Penalty Risk)",
                    icon: "📄",
                    problem:
                      "Generating e-way bill with details (value, quantity, HSN) that DON'T MATCH tax invoice. During transit checks, officers verify e-way bill vs physical invoice. Mismatch = Goods detention, Penalty up to 200% of tax amount, Goods release only after penalty payment.",
                    solution:
                      "Ensure e-way bill details EXACTLY match tax invoice: Invoice number, date, Consignor/consignee GSTIN, Taxable value (same as invoice), HSN code, Quantity. Use e-way bill software integrated with invoicing system (auto-populate from invoice). For manual generation, double-check before submission. Carry physical invoice copy in vehicle (for verification). Taxvio provides e-way bill generation linked to your sales invoices for 100% accuracy.",
                  },
                  {
                    mistake: "Not Maintaining Separate ITC Accounts for Multi-State",
                    icon: "📍",
                    problem:
                      "Having factories in multiple states (separate GSTINs) but maintaining SINGLE ITC account/ledger. ITC is STATE-SPECIFIC — ITC of UP GSTIN cannot be used to pay tax liability of Maharashtra GSTIN. Mixing ITC across states = Wrong ITC utilization = Demand + penalty.",
                    solution:
                      "Maintain SEPARATE accounts for each state GSTIN: Separate purchase register (state-wise). Separate ITC ledger (electronic credit ledger is separate on portal for each GSTIN). Separate tax payment (challan for each state). Ensure accounting software has multi-GSTIN functionality (separate books for each state). Taxvio provides centralized multi-state GST compliance with state-wise ITC tracking.",
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
              Taxvio's Manufacturing GST Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Specialized GST compliance for manufacturing units — from
              registration to ITC optimization, job work tracking, and complete
              monthly compliance.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📝",
                  title: "GST Registration (Single/Multi-State)",
                  desc: "Complete GST registration for manufacturing units. Single state or multi-state (separate GSTIN for each factory location). Includes: Document collection, REG-01 filing, follow-up, GSTIN certificate. Multi-state coordination with parallel filing.",
                  price: "₹2,999/state",
                },
                {
                  icon: "💰",
                  title: "Monthly GST Compliance (GSTR-1 + GSTR-3B)",
                  desc: "Complete monthly return filing with ITC optimization. Includes: Purchase & sales data collection, GSTR-2B reconciliation (invoice matching), ITC claim maximization, GSTR-1 filing (by 11th), GSTR-3B filing with tax payment (by 20th). Full manufacturer support.",
                  price: "₹4,999/month",
                },
                {
                  icon: "🔍",
                  title: "ITC Optimization & Audit",
                  desc: "Comprehensive ITC review to maximize credit claims. Includes: Input-wise ITC eligibility audit, GSTR-2B reconciliation & supplier follow-up, Capital goods ITC recovery, Blocked credit identification, ITC reversal avoidance, Monthly ITC optimization report.",
                  price: "₹9,999/quarter",
                },
                {
                  icon: "🏭",
                  title: "Job Work Compliance (ITC-04 Filing)",
                  desc: "Complete job work tracking and ITC-04 quarterly filing. Includes: Job work register maintenance, Challan tracking (sent vs received), Timeline monitoring (1 year/3 years), E-way bill generation for job work, ITC-04 quarterly filing (by 25th), Reversal avoidance support.",
                  price: "₹2,999/quarter",
                },
                {
                  icon: "🚚",
                  title: "E-way Bill Generation Service",
                  desc: "Bulk e-way bill generation for all goods movements. Includes: Integration with invoicing system, Auto-population from invoices, Real-time generation for sales/transfers, Part-B update for transporters, Validity tracking & extension, Consolidated e-way bill for multi-consignment.",
                  price: "₹1,999/month",
                },
                {
                  icon: "📊",
                  title: "Multi-State GST Management",
                  desc: "Centralized compliance for manufacturers with factories in multiple states. Includes: Separate GSTIN registration for each state, State-wise return filing (GSTR-1, GSTR-3B), Inter-state stock transfer documentation, State-wise ITC ledger management, Consolidated compliance reporting.",
                  price: "₹4,999/state/month",
                },
                {
                  icon: "📅",
                  title: "Annual GST Audit (GSTR-9 + GSTR-9C)",
                  desc: "Annual return filing and audit certification (turnover >₹5 cr). Includes: GSTR-9 preparation with reconciliation, GSTR-9C audit (books vs GST returns), Difference explanation & rectification, CA certification, Annual compliance report.",
                  price: "₹19,999/year",
                },
                {
                  icon: "⚙️",
                  title: "Capital Goods ITC Recovery (One-Time)",
                  desc: "Review of past capital goods purchases (machinery, equipment) to claim missed ITC. Includes: Capital goods register preparation, Supplier GSTR-1 verification, ITC eligibility assessment, Claim in GSTR-3B (if within time limit), Documentation support.",
                  price: "₹9,999",
                },
                {
                  icon: "🎓",
                  title: "Manufacturing GST Training (Staff/Accounts Team)",
                  desc: "On-site or online training for factory accounts team (2-3 hours). Topics: Manufacturing GST basics, ITC optimization, Job work compliance, E-way bill generation, Common mistakes to avoid. Certificate provided.",
                  price: "₹9,999",
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
                📦 Manufacturing Compliance Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Startup (Single Factory, Single State)",
                    price: "₹4,999/month",
                    includes: [
                      "Monthly GSTR-1 + GSTR-3B filing",
                      "ITC optimization & GSTR-2B reconciliation",
                      "E-way bill support",
                      "Email support",
                    ],
                  },
                  {
                    package: "Growth (Job Work + Multi-Product)",
                    price: "₹9,999/month",
                    includes: [
                      "Monthly returns with ITC optimization",
                      "Quarterly ITC-04 (job work compliance)",
                      "E-way bill generation (unlimited)",
                      "Capital goods ITC review",
                      "Phone + email support",
                    ],
                  },
                  {
                    package: "Enterprise (Multi-State + Complete Compliance)",
                    price: "₹19,999/month",
                    includes: [
                      "Multi-state registration & returns",
                      "Complete ITC optimization",
                      "Job work + e-way bill",
                      "Dedicated account manager",
                      "Annual GSTR-9 + audit",
                      "Priority support",
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
              Real Stories from Our Manufacturing Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sharma Engineering Works",
                  location: "Muzaffarnagar",
                  text: "We were missing capital goods ITC on machinery purchases. Taxvio reviewed our past 2 years, identified ₹8 lakh unclaimed ITC, and helped us claim within time limit. Their ITC optimization saved us more in one month than their annual fee! Highly recommended for manufacturers.",
                },
                {
                  name: "Textile Mills (Multi-State)",
                  location: "Noida & Surat",
                  text: "We have factories in UP and Gujarat (2 GSTINs). Taxvio handles GST for both states — separate returns, ITC optimization, stock transfer invoicing between units. They also file our quarterly ITC-04 for job work (dyeing). Complete manufacturing GST support!",
                },
                {
                  name: "ABC Manufacturing Pvt. Ltd.",
                  location: "Meerut",
                  text: "Our job work compliance was a mess — missing ITC-04 filings, goods stuck with job workers beyond 1 year. Taxvio set up complete job work register, filed all pending ITC-04, and saved us from ₹5 lakh ITC reversal. They also train our accounts team quarterly. Excellent service!",
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
              Manufacturing GST Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides specialized GST services for manufacturing units, textile
              mills, engineering firms, and production facilities across{" "}
              <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
              <strong>Meerut</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong>, and pan-India (multi-state support).
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
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "GST Registration",
                  icon: "📝",
                  link: "/serviceslist/gst/gst-registration",
                  desc: "New GST registration for businesses.",
                },
                {
                  title: "GST Return Filing",
                  icon: "📊",
                  link: "/serviceslist/gst/gst-return-filing",
                  desc: "Monthly/quarterly GST return filing.",
                },
                {
                  title: "ITC Reconciliation",
                  icon: "🔍",
                  link: "/serviceslist/gst/itc-reconciliation",
                  desc: "Input tax credit matching & optimization.",
                },
                {
                  title: "GST Audit",
                  icon: "📅",
                  link: "/serviceslist/gst/gst-audit",
                  desc: "Annual GST audit & GSTR-9C certification.",
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
                    Focus on Manufacturing, We Handle GST
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Complete GST Compliance for Your Manufacturing Unit
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Running a manufacturing unit, textile mill, or engineering firm?
                    Taxvio provides specialized GST compliance — multi-state
                    registration, ITC optimization (60-80% tax savings), job work
                    tracking (ITC-04 filing), e-way bill generation, and complete
                    monthly return filing. Starting ₹4,999/month. Maximize your ITC
                    claims and stay 100% compliant!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get Started — ₹4,999/mo
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20GST%20help%20for%20my%20manufacturing%20unit"
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
      q: "Can manufacturers claim ITC on ALL inputs including consumables and packing materials?",
      a: "Yes, manufacturers can claim ITC on VIRTUALLY ALL inputs used in manufacturing (subject to certain exceptions): ✅ ELIGIBLE for ITC: (1) Raw materials (metal, plastic, chemicals, fabric — anything used in production), (2) Consumables (lubricants, cutting tools, electrodes, spares, catalysts), (3) Packing materials (boxes, cartons, labels, adhesives, pallets), (4) Fuel & power (if GST is charged — coal, gas, electricity in some cases), (5) Capital goods (machinery, equipment, tools, dies, moulds), (6) Input services (freight inward, job work, repairs, rent), (7) Goods used for testing, quality control, R&D. ❌ BLOCKED from ITC (cannot claim): (1) Motor vehicles (except for specific business use like goods transport, passenger transport business), (2) Food & beverages, outdoor catering (for employees), (3) Club memberships, health/fitness services, (4) Personal use items (not for business), (5) Goods/services received after GST registration cancellation. Taxvio conducts input-wise ITC eligibility audit to ensure maximum eligible ITC is claimed and blocked credits are excluded.",
    },
    {
      q: "What is the time limit to claim ITC on capital goods and raw materials?",
      a: "ITC on BOTH capital goods and raw materials has the SAME time limit: ITC can be claimed within the EARLIER of: (a) Due date of GSTR-3B for September of NEXT financial year following the year of invoice, OR (b) Date of filing annual return (GSTR-9) for the year of invoice. Example timeline: Purchase made: March 2024 (FY 2023-24). ITC claim deadline: GSTR-3B for September 2024 (FY 2024-25) — due date 20th October 2024, OR GSTR-9 for FY 2023-24 — due date 31st December 2024. Whichever is EARLIER. Practical approach: Claim ITC as soon as invoice appears in GSTR-2B (don't wait till deadline). For capital goods, claim 100% ITC immediately in month of receipt (no spreading over years). Track invoices received late (supplier filed GSTR-1 late) — claim ITC before time limit expires. Taxvio tracks ITC claim deadlines and ensures no eligible ITC is lost due to time limit expiry.",
    },
    {
      q: "If job worker is unregistered (no GSTIN), can I still send goods for job work and claim ITC?",
      a: "YES, you can send goods to UNREGISTERED job worker and still claim ITC, subject to compliance: Job workers are EXEMPT from GST registration if: Annual turnover is <₹20 lakh (₹10 lakh for special category states), AND They are ONLY providing job work service (not manufacturing and selling goods on their own). Compliance for unregistered job worker: (1) You (principal) must file ITC-04 quarterly (same as registered job worker), (2) Issue delivery challan when sending goods (mention job worker name, address — no GSTIN), (3) Maintain job work register (challan tracking), (4) Goods must be returned within timeline (1 year for inputs, 3 years for capital goods), (5) E-way bill required if value >₹50,000 (mention job worker as 'unregistered' in e-way bill). ITC benefit: You can claim ITC on inputs sent to unregistered job worker immediately (no restriction) — as long as ITC-04 is filed and return timeline is complied with. Taxvio handles job work compliance for both registered and unregistered job workers.",
    },
    {
      q: "How to handle GST on electricity bills — can manufacturers claim ITC on power consumption?",
      a: "ITC on electricity depends on WHO issues the electricity bill and WHETHER GST is charged: Scenario 1 — Electricity from distribution company (DISCOM) like state electricity board: Usually, NO GST is charged (electricity supply by government DISCOMs is often exempt or zero-rated). No ITC available (since no GST charged). Scenario 2 — Electricity from private generator or solar park (third-party seller): If seller is GST-registered and charges GST on electricity supply → You can claim ITC (18% GST on electricity). ITC eligibility: Electricity used in manufacturing/business operations → 100% ITC allowed. Scenario 3 — Electricity duty/charges (separate from supply): Some states charge electricity duty, meter rent, or fixed charges → Usually NOT eligible for ITC (not GST, but separate duty). Bottom line: Check your electricity bill: If GST is charged (CGST + SGST or IGST) → Claim ITC. If no GST (only basic tariff + duty) → No ITC. Taxvio reviews utility bills to identify eligible ITC on power, water, gas, and other utilities (often overlooked by manufacturers).",
    },
    {
      q: "For multi-state manufacturers, can ITC of one state be used for another state's tax liability?",
      a: "NO. ITC is STATE-SPECIFIC and CANNOT be used across different state GSTINs: How ITC works for multi-state manufacturers: (1) Each state GSTIN has a SEPARATE electronic credit ledger (ITC account). (2) ITC accumulated in UP GSTIN can ONLY be used to pay tax liability of UP GSTIN (CGST, SGST, IGST payable in UP). (3) ITC of Maharashtra GSTIN can ONLY be used for Maharashtra GSTIN tax liability. (4) ITC of one state CANNOT be transferred/adjusted to another state GSTIN. Example: UP factory has ₹5 lakh ITC (excess credit, no sales). Maharashtra factory has ₹3 lakh tax liability (no ITC). You CANNOT use UP's ₹5 lakh ITC to pay Maharashtra's ₹3 lakh liability → Must pay Maharashtra liability in cash (even though UP has excess ITC). Workaround (not recommended): Some businesses try to invoice stock transfers from UP to Maharashtra to 'convert' UP ITC to Maharashtra ITC — but this is complex and may attract scrutiny. Better approach: Plan production and sales to balance ITC across states. Taxvio provides multi-state ITC planning and cash flow optimization for manufacturers.",
    },
    {
      q: "What is the penalty for not filing ITC-04 for job work?",
      a: "ITC-04 is MANDATORY if you send goods to job worker. Not filing ITC-04 has the following consequences: ❌ Penalty under Section 125 of CGST Act: ₹200 per day of delay (₹100 CGST + ₹100 SGST). Maximum penalty: ₹5,000 per return (₹2,500 CGST + ₹2,500 SGST). ❌ ITC Reversal Risk: If goods sent to job worker are NOT returned within prescribed timeline (1 year for inputs, 3 years for capital goods) AND ITC-04 is not filed to track the timeline → You must REVERSE ITC claimed on those goods + pay 18% interest from the date of claiming ITC. ❌ Compliance Flag: Non-filing of ITC-04 raises red flag in GST portal — department may issue notice for non-compliance and ask for explanation. ❌ Audit Issues: During GST audit (GSTR-9C), auditor will check ITC-04 compliance — missing returns can lead to adverse audit observations and demand. Filing timeline: ITC-04 is quarterly return — due by 25th of month following quarter (Q1 Apr-Jun → 25th July). Even if you have only ONE job work transaction in the quarter, you must file ITC-04. Taxvio ensures timely ITC-04 filing with complete job work tracking to avoid penalties and ITC reversal.",
    },
    {
      q: "Can Taxvio help with GST for manufacturers who are also exporters?",
      a: "Yes, absolutely. We provide complete GST compliance for manufacturer-exporters: Export-specific GST support: (1) LUT (Letter of Undertaking) filing: For exporting goods without paying IGST (export under bond). We file LUT (Form GST RFD-11) before first export. (2) Export invoices with compliance: Issue export invoice with 8-digit HSN code (mandatory), mention shipping bill details, port of export. (3) Shipping bill filing coordination: Link GST invoice with shipping bill (customs filing). Ensure GSTIN is mentioned in shipping bill for ITC reconciliation. (4) GSTR-1 export reporting: Report exports in GSTR-1 Table 6A (with shipping bill details) for seamless refund processing. (5) ITC refund for accumulated credit: If you have excess ITC (due to zero-rated exports), we file refund claim (Form GST RFD-01) to recover accumulated ITC. Claim can be filed monthly (for large exporters) or annually. (6) E-way bill for export consignments: Generate e-way bill for movement of export goods from factory to port/ICD. We provide end-to-end export GST compliance — LUT filing, export invoicing, shipping bill compliance, ITC refund claims, and GSTR-1 export reporting.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Manufacturing GST
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