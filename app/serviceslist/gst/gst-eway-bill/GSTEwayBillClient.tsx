// app/serviceslist/gst/gst-eway-bill/GSTEwayBillClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";
import InquiryForm from "@/components/InquiryFormButton";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST E-Way Bill Generation & Compliance - Transit Documentation Support",
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
    "Professional GST E-Way Bill generation and compliance services for seamless movement of goods. Expert assistance in e-way bill creation, validation, updation, vehicle detail management, transporter ID linking, validity extension, Part-A & Part-B filing, consolidated e-way bill generation, and compliance audit for transporters and logistics companies. Prevent transit delays, inspection issues, and penalty with accurate e-way bill documentation. Ideal for manufacturers, wholesalers, interstate traders, transporters, and distribution companies. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "GST E-Way Bill Generation & Transit Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "499",
      maxPrice: "9999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GST E-Way Bill and when is it mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST E-Way Bill (Electronic Way Bill) is a digital document required for movement of goods worth more than ₹50,000 from one place to another (inter-state or intra-state, depending on state rules). It contains details of goods, consignor, consignee, transporter, and vehicle. E-Way Bill is mandatory for: (1) Inter-state movement of goods worth >₹50,000, (2) Intra-state movement if the state has notified the rule (most states have threshold of ₹50,000 or ₹1,00,000), (3) Both taxable and exempt goods (some exemptions apply). It must be generated before goods are moved and remains valid for a specific period based on distance traveled.",
      },
    },
    {
      "@type": "Question",
      name: "What is the validity period of an E-Way Bill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-Way Bill validity depends on the distance to be covered: For distances up to 200 km - 1 day validity, For every additional 200 km or part thereof - 1 additional day. Example: If distance is 450 km, validity = 3 days (1 day for first 200 km + 1 day for next 200 km + 1 day for remaining 50 km). Validity starts from the date and time of generation. If goods cannot reach within validity period, you must extend the e-way bill BEFORE it expires (extension allowed up to 8 hours before or 8 hours after expiry, with valid reasons).",
      },
    },
    {
      "@type": "Question",
      name: "What happens if goods are intercepted without a valid E-Way Bill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your goods are intercepted by GST authorities during transit without a valid e-way bill, consequences include: (1) Seizure of goods and vehicle, (2) Penalty equal to 100% of tax amount or ₹10,000, whichever is higher (as per Section 129 of CGST Act), (3) Goods released only after payment of penalty and tax (if applicable), (4) Detention of vehicle and transport delays, (5) Legal proceedings against consignor/consignee/transporter. Even if e-way bill was generated but has expired, it is treated as 'no e-way bill' and attracts penalty.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTEwayBillClient() {
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
          className="bg-green-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🚛 Moving Goods? Generate E-Way Bill Before Dispatch — Avoid Seizure & ₹10,000+ Penalty
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
              <span className="text-white">GST E-Way Bill</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🚛 Transit Documentation
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST E-Way Bill
                  <br />
                  <span className="text-[#7ecbf0]">Generation</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Moving goods worth more than{" "}
                  <strong className="text-white">₹50,000</strong>? You MUST
                  generate a{" "}
                  <strong className="text-white">GST E-Way Bill</strong> before
                  dispatch to comply with{" "}
                  <strong className="text-white">Rule 138 of CGST Rules</strong>.
                  This electronic document contains details of goods, consignor,
                  consignee, transporter, and vehicle — required for{" "}
                  <strong className="text-white">
                    inter-state and intra-state movement
                  </strong>
                  . Missing or expired e-way bill leads to{" "}
                  <strong className="text-white">
                    goods seizure, vehicle detention, and penalty up to 200% of tax
                  </strong>
                  . <strong className="text-white">Taxvio</strong> provides
                  end-to-end e-way bill services — generation, validation,
                  updation, vehicle detail management, validity extension, and
                  compliance audit for transporters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get E-Way Bill Service — ₹499/month →
                  </Link>
                  
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Instant Generation",
                    "✅ Validity Extension",
                    "✅ Vehicle Updation",
                    "✅ Compliance Audit",
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
                    ["⏰", "Mandatory for goods >₹50,000"],
                    ["📋", "Required for inter-state & intra-state"],
                    ["🚛", "Validity: 1 day per 200 km"],
                    ["💰", "Penalty: ₹10,000 or 100% tax (higher)"],
                    ["🔄", "Extension allowed before expiry"],
                    ["🚀", "Service fee: ₹499/month onwards"],
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
              { number: "5,000+", label: "E-Way Bills Generated", icon: "✅" },
              { number: "200 km", label: "= 1 Day Validity", icon: "⏰" },
              { number: "100%", label: "Transit Compliance", icon: "📊" },
              { number: "₹499", label: "Starting Fee/Month", icon: "💰" },
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
              "✔ 24/7 Generation Support",
              "✔ Bulk E-Way Bill Upload",
              "✔ Validity Tracking",
              "✔ Transporter Compliance",
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
          {/* WHAT IS E-WAY BILL */}
          <section id="what-is-eway-bill">
            <SectionLabel text="Understanding E-Way Bill" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is GST E-Way Bill?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>GST E-Way Bill</strong> (Electronic Way Bill) is a{" "}
                  <strong>digital document</strong> generated on the{" "}
                  <strong>E-Way Bill Portal (ewaybillgst.gov.in)</strong> that
                  must accompany the movement of goods from one place to another
                  when the consignment value exceeds ₹50,000.
                </p>
                <p>
                  It serves as <strong>proof of transit</strong> for goods being
                  transported — containing details of goods, consignor (sender),
                  consignee (receiver), transporter, and vehicle. GST authorities
                  can intercept vehicles during transit and verify the e-way bill
                  to ensure tax compliance.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📋 When E-Way Bill Is Mandatory
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    E-Way Bill is MANDATORY in the following cases:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-6">
                    {[
                      "Inter-state movement of goods (from one state to another) worth >₹50,000",
                      "Intra-state movement of goods (within the same state) if the state government has notified it (most states have ₹50,000 or ₹1,00,000 threshold)",
                      "Movement of goods for supply (sale), job work, export, or any other reason",
                      "Movement of both taxable goods AND exempt goods (some specific exemptions apply)",
                      "Movement of goods even if invoice value is <₹50,000 but aggregate value of all consignments in a vehicle >₹50,000",
                      "Handicraft goods transported by unregistered persons if value >₹50,000",
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
                    🚫 When E-Way Bill Is NOT Required
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Goods value is ≤₹50,000 (per consignment)",
                      "Movement of certain notified goods (e.g., liquor for human consumption, petroleum products before GST applicability, LPG for domestic use)",
                      "Movement of goods within the same premises or between two premises of the same registered person within 10 km",
                      "Goods being transported by non-motorized vehicle (bullock cart, bicycle)",
                      "Goods cleared from Customs port/airport/air cargo complex to Inland Container Depot or Container Freight Station for Customs clearance (specific exemption)",
                      "Movement of empty cargo containers (if not carrying goods)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  E-Way Bill Structure — Part A & Part B
                </p>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📄 Part A — Consignment Details
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Part A contains details of the goods being transported.
                    Generated by the <strong>consignor (supplier/sender)</strong>{" "}
                    or registered recipient:
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-purple-200">
                    <ul className="space-y-1 text-xs text-gray-700">
                      {[
                        "GSTIN of supplier and recipient",
                        "Document number (invoice/challan/bill of supply)",
                        "Document date and type (tax invoice, delivery challan, bill of entry)",
                        "Value of goods (taxable value)",
                        "HSN code of goods",
                        "Reason for transportation (supply, export, job work, etc.)",
                        "From and To addresses (PIN codes)",
                        "Approximate distance (in km)",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🚛 Part B — Transporter & Vehicle Details
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Part B contains vehicle and transporter information. Can be
                    filled by <strong>consignor OR transporter</strong>:
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-orange-200">
                    <ul className="space-y-1 text-xs text-gray-700">
                      {[
                        "Transporter ID (GSTIN of transporter)",
                        "Transporter name (auto-populated from GSTIN)",
                        "Document number (transport document like LR/consignment note)",
                        "Document date",
                        "Vehicle number (registration number of truck/tempo)",
                        "Mode of transport (Road, Rail, Air, Ship)",
                        "Vehicle type (Regular, Over Dimensional Cargo - ODC)",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> Part B can be updated multiple times
                    during transit if vehicle changes (transhipment) — validity of
                    e-way bill does NOT change.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⏰ E-Way Bill Validity Calculation
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-red-200">
                    <p className="font-bold text-red-700 text-sm mb-2">
                      Validity Formula
                    </p>
                    <p className="text-xs text-gray-700 mb-3">
                      <strong>For Normal Cargo:</strong>
                      <br />
                      1 day for every 200 km or part thereof
                      <br />
                      <strong>For Over Dimensional Cargo (ODC):</strong>
                      <br />1 day for every 20 km or part thereof
                    </p>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="font-bold text-red-800 mb-1 text-xs">
                        💡 Examples
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>
                          • Distance: 150 km → Validity: <strong>1 day</strong>
                        </li>
                        <li>
                          • Distance: 250 km → Validity: <strong>2 days</strong>{" "}
                          (1 for 200 km + 1 for 50 km)
                        </li>
                        <li>
                          • Distance: 600 km → Validity: <strong>3 days</strong>
                        </li>
                        <li>
                          • Distance: 850 km → Validity: <strong>5 days</strong>{" "}
                          (1+1+1+1+1)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST E-Way Bill generation and compliance —
                  instant generation, vehicle updation, validity extension, bulk
                  upload, and transporter audit across Uttar Pradesh, Noida, Delhi
                  NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* GENERATION PROCESS */}
          <section id="generation-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Generate GST E-Way Bill
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                E-Way Bill can be generated on the{" "}
                <strong>E-Way Bill Portal (ewaybillgst.gov.in)</strong> or via{" "}
                <strong>SMS, Android App, API integration</strong>. Here's the
                complete online process:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Login to E-Way Bill Portal",
                    description:
                      "Go to https://ewaybillgst.gov.in → Login with your GSTIN (username) and password. If first-time user, register on the portal with GSTIN, mobile number (OTP verification), and email. Note: E-Way Bill credentials are SEPARATE from GST portal credentials (you need to register separately even if you have GSTIN).",
                    duration: "One-time setup",
                  },
                  {
                    step: 2,
                    title: "Select 'Generate New' → 'E-Way Bill'",
                    description:
                      "From the dashboard, click 'e-Waybill' in the top menu. Select 'Generate New' option. You will see two options: (a) 'Generate E-Way Bill' (if you are the consignor/consignee and have Part A + Part B details), or (b) 'Generate Part A Only' (if transporter will fill Part B later). Choose as per your requirement.",
                    duration: "Navigation",
                  },
                  {
                    step: 3,
                    title: "Fill Part A — Consignment Details",
                    description:
                      "Transaction Type: Select 'Outward' (goods going out) or 'Inward' (goods coming in). Sub Type: Select reason — Regular (B2B supply), Export, Job Work, SKD/CKD, Recipient not known, For own use, Exhibition/Fairs, Line Sales, etc. Document Type: Tax Invoice, Bill of Supply, Delivery Challan, Credit Note, Bill of Entry (import), etc. Document No. & Date: Enter invoice/challan number and date. From & To Details: Enter GSTIN/UIN of supplier and recipient (or 'URP' for unregistered person if recipient is unregistered). PIN codes auto-populate addresses. Product Details: Enter HSN code (4/6/8 digits), product description, quantity, unit (KGS, PCS, etc.), taxable value, tax rate, and total value. The system auto-calculates tax amounts. You can add multiple items (multi-line invoice). Transporter Details: If you have transporter GSTIN, enter it. If you will update vehicle later, select 'Vehicle details will be updated later' checkbox.",
                    duration: "5-10 minutes",
                  },
                  {
                    step: 4,
                    title: "Fill Part B — Vehicle Details (if known)",
                    description:
                      "If vehicle details are available at the time of generation: Mode of Transport: Road, Rail, Air, Ship (select as applicable). Vehicle Type: Regular or ODC (Over Dimensional Cargo). Transporter ID: GSTIN of transporter (if hired transport). Transporter Name: Auto-populated from GSTIN. Vehicle Number: Registration number of truck/tempo (e.g., UP14AB1234). Transport Document No. & Date: LR (Lorry Receipt) or Consignment Note number and date. Distance: Approximate distance in km (can be auto-calculated based on PIN codes or entered manually). Note: If vehicle is not yet assigned, you can SKIP Part B and update it later (e-way bill will be generated with Part A only).",
                    duration: "2-5 minutes",
                  },
                  {
                    step: 5,
                    title: "Verify Details & Submit",
                    description:
                      "Review all entered details carefully — GSTIN, invoice number, HSN codes, values, vehicle number. Cross-check with invoice/challan document. Click 'Submit' button. The system validates the data: Checks if supplier/recipient GSTIN is valid and active, Verifies HSN codes and tax rates, Checks if invoice number is already used for e-way bill generation (duplicate check). If validation is successful, e-way bill is generated instantly.",
                    duration: "1 minute",
                  },
                  {
                    step: 6,
                    title: "E-Way Bill Number (EBN) Generated",
                    description:
                      "Upon successful submission, a unique 12-digit E-Way Bill Number (EBN) is generated. Example: 391002345678. The portal displays: EBN, Generated Date & Time, Valid Until Date & Time, Consignment Details Summary. Download the e-way bill in PDF format (you can also print it). The e-way bill PDF contains: Part A (consignment details), Part B (vehicle details if filled), QR code (for quick verification by authorities), EBN and validity. Send a copy of e-way bill PDF to: Transporter/driver (to carry during transit), Consignee (recipient of goods).",
                    duration: "Instant",
                  },
                  {
                    step: 7,
                    title: "SMS Confirmation to Supplier, Recipient & Transporter",
                    description:
                      "The E-Way Bill Portal automatically sends SMS alerts to: Supplier's registered mobile number, Recipient's registered mobile number (if GSTIN provided), Transporter's registered mobile number. SMS contains: EBN, Invoice number, Valid until date & time. This ensures all parties are informed about e-way bill generation.",
                    duration: "Automatic",
                  },
                  {
                    step: 8,
                    title: "Update Part B / Vehicle Details (if not filled initially)",
                    description:
                      "If you generated e-way bill with Part A only (vehicle details pending), you can update Part B later: Login to portal → e-Waybill → Update Part B. Enter EBN (E-Way Bill Number). Fill vehicle number, transporter ID, transport document number, distance. Submit → Part B is updated, and a new e-way bill PDF is generated with vehicle details. This can be done multiple times if vehicle changes during transit (transhipment).",
                    duration: "As needed during transit",
                  },
                  {
                    step: 9,
                    title: "Carry E-Way Bill During Transit (Physical/Digital)",
                    description:
                      "The transporter/driver MUST carry the e-way bill during movement of goods. Acceptable formats: (a) Printed copy of e-way bill PDF, or (b) E-Way Bill number (EBN) — can be shown on mobile phone if authorities verify using EBN. Authorities can verify e-way bill by: Scanning QR code on printed copy, or Entering EBN on e-way bill portal/mobile app. Ensure e-way bill is valid at all times during transit. If expiring during transit, extend validity BEFORE expiry.",
                    duration: "During entire transit",
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
                  E-Way Bill generation takes{" "}
                  <strong>5-15 minutes for online generation</strong> (if all
                  details are ready). Instant generation via SMS (for single-item
                  consignments). Bulk upload via Excel for multiple e-way bills at
                  once (API integration available for ERP systems).
                </p>
              </div>
            </div>
          </section>

          {/* VALIDITY EXTENSION */}
          <section id="validity-extension">
            <SectionLabel text="Extending Validity" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Extend E-Way Bill Validity
            </h2>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                If goods cannot reach the destination within the original validity
                period due to exceptional circumstances (breakdown, accident,
                transshipment delay, natural calamity), you can{" "}
                <strong>extend the validity</strong> of the e-way bill.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-800 mb-3 text-lg">
                    ⏰ When Can You Extend?
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Extension is allowed in the following time windows:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Before expiry: Up to 8 hours BEFORE the validity expires",
                      "After expiry: Up to 8 hours AFTER the validity expires (with valid reason)",
                      "Cannot extend if: More than 8 hours have passed after expiry — e-way bill becomes invalid, and you must generate a NEW e-way bill",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-300 mt-4">
                    <p className="font-bold text-orange-700 text-xs mb-2">
                      💡 Example
                    </p>
                    <p className="text-xs text-gray-600">
                      E-way bill validity: 15th March 2024, 11:59 PM
                      <br />
                      You can extend: From 15th March 4:00 PM (8 hours before) to
                      16th March 8:00 AM (8 hours after)
                      <br />
                      After 16th March 8:00 AM, extension NOT allowed — generate
                      new e-way bill.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-800 mb-3 text-lg">
                    📝 How to Extend E-Way Bill
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 mb-2">
                        Step 1: Login to E-Way Bill Portal
                      </p>
                      <p className="text-xs">
                        Log in with GSTIN and password (only consignor, consignee,
                        or transporter can extend).
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 mb-2">
                        Step 2: Go to 'Extend Validity'
                      </p>
                      <p className="text-xs">
                        e-Waybill Menu → Extend Validity → Enter EBN (E-Way Bill
                        Number).
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 mb-2">
                        Step 3: Enter Extension Details
                      </p>
                      <p className="text-xs">
                        • Reason for extension (dropdown): Transshipment, Accident,
                        Natural Calamity, Law & Order Problem, Trans-border
                        Checkpost Delay, Others
                        <br />
                        • Current Place of Goods (PIN code or address)
                        <br />
                        • Remaining distance to destination (in km)
                        <br />• Remarks (optional explanation)
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 mb-2">
                        Step 4: Submit & Get Extended Validity
                      </p>
                      <p className="text-xs">
                        Submit → System calculates additional validity based on
                        remaining distance (1 day per 200 km). New validity date &
                        time is displayed. Extension confirmation SMS sent to all
                        parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white border-2 border-orange-300 rounded-2xl p-6">
                <p className="font-bold text-orange-800 mb-3">
                  ⚠️ Important Notes on Extension
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Extension can be done MULTIPLE times if goods are still in transit and genuine delays occur",
                    "Each extension is valid for 1 day per 200 km of REMAINING distance (not original distance)",
                    "If e-way bill expires and >8 hours have passed, extension is NOT possible — generate a NEW e-way bill with a new invoice/challan",
                    "Tax authorities may question frequent extensions — maintain supporting documents (breakdown reports, FIR for accident, etc.)",
                    "Extension does NOT change the original e-way bill number (EBN) — only the validity date changes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for E-Way Bill Generation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents/Details
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTIN of supplier (consignor) — your GSTIN",
                    "GSTIN of recipient (consignee) — if registered; otherwise URP (Unregistered Person)",
                    "Tax Invoice / Delivery Challan / Bill of Supply (document number, date, value)",
                    "HSN/SAC code of goods/services (4/6/8 digits as per turnover)",
                    "Quantity and unit of goods (KGS, PCS, MTR, etc.)",
                    "Taxable value and tax rate (CGST, SGST/UTGST, IGST, Cess)",
                    "From address and PIN code (dispatch location)",
                    "To address and PIN code (delivery location)",
                    "Approximate distance (in km) — can be auto-calculated",
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
                  For Part B (Vehicle/Transporter Details)
                </p>
                <ul className="space-y-3">
                  {[
                    "Transporter ID (GSTIN of transporter) — if hired transport",
                    "Transporter name — auto-populated from GSTIN",
                    "Transport Document Number (LR/Consignment Note number)",
                    "Transport Document Date",
                    "Vehicle Registration Number (e.g., UP14AB1234)",
                    "Mode of transport (Road, Rail, Air, Ship)",
                    "Vehicle type (Regular or ODC - Over Dimensional Cargo)",
                    "Driver's mobile number (optional but recommended for SMS alerts)",
                    "E-Way Bill Portal login credentials (if generating online)",
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
              Common Mistakes in E-Way Bill Generation
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                E-Way Bill errors can lead to goods seizure, vehicle detention, and
                penalty. Here are critical mistakes to avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Incorrect HSN Code Entry",
                    icon: "📝",
                    problem:
                      "Entering wrong HSN code (e.g., HSN for finished goods instead of raw materials) or using 2-digit HSN when 4/6/8 digits are required as per turnover threshold.",
                    solution:
                      "Always verify HSN code from invoice and GST HSN directory. For turnover >₹5 crore, 6-digit HSN is mandatory. For turnover >₹1.5 crore, 4-digit HSN is mandatory. Cross-check with GSTR-1 filed data.",
                  },
                  {
                    mistake: "GSTIN Mismatch (Supplier/Recipient)",
                    icon: "🔢",
                    problem:
                      "Entering GSTIN incorrectly (typo) or using old/cancelled GSTIN of supplier/recipient. This causes e-way bill validation failure or mismatch during inspection.",
                    solution:
                      "ALWAYS verify GSTIN on GST portal ('Search Taxpayer' feature) before entering in e-way bill. Check if GSTIN is active. For unregistered recipients, select 'URP' (Unregistered Person) — do NOT enter fake GSTIN.",
                  },
                  {
                    mistake: "Invoice Value Mismatch",
                    icon: "💰",
                    problem:
                      "E-way bill value differs from invoice value shown on tax invoice. Authorities cross-check invoice during inspection — mismatch leads to seizure and penalty.",
                    solution:
                      "Ensure e-way bill taxable value, tax rate, and total value EXACTLY match the tax invoice. Include all line items from the invoice. For multi-invoice consignments, create separate e-way bills or use consolidated e-way bill.",
                  },
                  {
                    mistake: "Expired E-Way Bill During Transit",
                    icon: "⏰",
                    problem:
                      "Goods are intercepted after e-way bill validity has expired. Treated as 'no e-way bill' and attracts penalty of ₹10,000 or 100% tax, whichever is higher.",
                    solution:
                      "Track e-way bill validity using SMS alerts or portal. If transit is delayed, extend validity BEFORE expiry (within 8 hours before/after expiry). Set reminders for long-distance consignments. Use e-way bill tracking apps/software.",
                  },
                  {
                    mistake: "Wrong Vehicle Number Entry",
                    icon: "🚛",
                    problem:
                      "Entering incorrect vehicle registration number (typo, old number, wrong format). If intercepted vehicle number doesn't match e-way bill, goods are seized.",
                    solution:
                      "Double-check vehicle number from RC (Registration Certificate) or with transporter/driver before entering. Format: XX00XX0000 (e.g., UP14AB1234). If vehicle changes during transit, UPDATE Part B immediately on the portal.",
                  },
                  {
                    mistake: "Not Updating Part B for Transhipment",
                    icon: "🔄",
                    problem:
                      "Goods are transferred to a different vehicle during transit (transhipment), but Part B (vehicle details) is not updated on e-way bill portal. Original vehicle number on e-way bill doesn't match current vehicle.",
                    solution:
                      "Whenever vehicle changes, immediately update Part B: Login → e-Waybill → Update Part B → Enter EBN → Enter new vehicle number → Submit. You can update Part B multiple times — validity does NOT change.",
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
              Taxvio's GST E-Way Bill Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From single e-way bill generation to bulk processing and compliance
              audit — we handle complete transit documentation for manufacturers,
              traders, and logistics companies.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📋",
                  title: "Single E-Way Bill Generation",
                  desc: "Manual generation of e-way bill for individual consignments. Includes Part A & Part B filling, validation, EBN generation, and PDF download. Ideal for small businesses with occasional dispatches.",
                  price: "₹99/bill",
                },
                {
                  icon: "📦",
                  title: "Bulk E-Way Bill Generation (Monthly)",
                  desc: "For businesses with high dispatch volume (>50 bills/month). Bulk upload via Excel/CSV, API integration with your ERP/billing software, automated generation, and consolidated reporting.",
                  price: "₹4,999/month",
                },
                {
                  icon: "🔄",
                  title: "Vehicle Detail Updation (Part B)",
                  desc: "Update Part B (vehicle number, transporter details) for already generated e-way bills. Useful for transhipment, vehicle changes, or when Part A was generated without vehicle info.",
                  price: "₹49/update",
                },
                {
                  icon: "⏰",
                  title: "Validity Extension Support",
                  desc: "Monitor e-way bill validity and send alerts before expiry. Extend validity on your behalf with valid reasons, documentation support, and portal filing. Prevent expiry-related penalties.",
                  price: "₹199/extension",
                },
                {
                  icon: "📊",
                  title: "E-Way Bill Compliance Audit (Monthly)",
                  desc: "Monthly review of all generated e-way bills vs. sales invoices. Check for: Missing e-way bills, Expired bills, GSTIN/HSN/value mismatches. Compliance report with rectification recommendations.",
                  price: "₹2,999/month",
                },
                {
                  icon: "🚛",
                  title: "Transporter ID Registration & Management",
                  desc: "Register your entity as 'Transporter' on e-way bill portal (if you provide transport services). Transporter ID (GSTIN) setup, sub-user creation for drivers, and training on Part B filling.",
                  price: "₹1,999",
                },
                {
                  icon: "📱",
                  title: "E-Way Bill Mobile App Setup & Training",
                  desc: "Install and configure e-way bill Android/iOS app for on-the-go generation. Train your dispatch/logistics team on app usage, SMS-based generation, and QR code scanning for verification.",
                  price: "₹999",
                },
                {
                  icon: "🔗",
                  title: "API Integration (ERP/Billing Software)",
                  desc: "Integrate e-way bill portal API with your Tally, SAP, Busy, or custom ERP system. Auto-generate e-way bills from invoices, real-time status sync, and consolidated reporting. One-time setup.",
                  price: "₹9,999",
                },
                {
                  icon: "📨",
                  title: "E-Way Bill Dispute Resolution (Seizure Support)",
                  desc: "If goods are seized due to missing/invalid e-way bill, we assist in: Document verification, Generating rectified e-way bill, Drafting representation to authorities, Follow-up for goods release.",
                  price: "₹4,999/case",
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
                📦 Monthly E-Way Bill Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic (Small Businesses)",
                    price: "₹499/month",
                    includes: [
                      "Up to 20 e-way bills/month",
                      "Manual generation support",
                      "Validity tracking",
                      "Email support",
                      "Basic compliance check",
                    ],
                  },
                  {
                    package: "Standard (Medium Traders)",
                    price: "₹2,999/month",
                    includes: [
                      "Up to 100 e-way bills/month",
                      "Bulk upload via Excel",
                      "Part B updation support",
                      "Monthly compliance audit",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Premium (Manufacturers/Logistics)",
                    price: "₹9,999/month",
                    includes: [
                      "Unlimited e-way bills",
                      "API integration (ERP sync)",
                      "Dedicated account manager",
                      "24/7 generation support",
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
              Real Stories from Our E-Way Bill Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sharma Industries",
                  location: "Muzaffarnagar",
                  text: "We dispatch 200+ consignments monthly across India. Taxvio's bulk e-way bill service via API integration with our Tally ERP has been a game-changer. Zero manual work, auto-generation from invoices, and instant SMS alerts. No transit delays in last 6 months!",
                },
                {
                  name: "Gupta Transport Services",
                  location: "Meerut",
                  text: "As a logistics company handling 50+ clients, managing e-way bills was a nightmare. Taxvio set up our Transporter ID, trained our drivers on mobile app, and now provides 24/7 support for Part B updation and validity extensions. Highly professional!",
                },
                {
                  name: "Rajesh Trading Co.",
                  location: "Noida",
                  text: "Our goods were seized once due to expired e-way bill. Taxvio helped us get goods released within 24 hours, paid the penalty, and now tracks all our e-way bill validity with automated alerts. Peace of mind for inter-state trading!",
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
              E-Way Bill Generation Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST E-Way Bill generation, validation, updation, and
              compliance services for manufacturers, traders, transporters across{" "}
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
                  title: "GST Notice Response",
                  icon: "📨",
                  link: "/serviceslist/gst/gst-notice-response",
                  desc: "Expert response to GST notices and SCNs.",
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
                    Seamless Goods Movement Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Generate E-Way Bills Instantly
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't risk goods seizure and ₹10,000+ penalty — generate valid
                    e-way bills before every dispatch. Taxvio provides end-to-end
                    e-way bill services — instant generation, bulk processing,
                    validity extension, vehicle updation, and compliance audit.
                    Starting ₹99/bill or ₹499/month. Ensure 100% transit compliance
                    and zero inspection issues.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Start Now — ₹499/mo
                  </Link>
                  
                </div>
              </div>
            </div>
          </section>
        </article>
        <InquiryForm />
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
      q: "Can I generate e-way bill after goods have been dispatched?",
      a: "Technically YES, the e-way bill portal allows generation even after dispatch. However, it is ILLEGAL as per GST rules. E-way bill MUST be generated BEFORE the goods are moved. If goods are intercepted without e-way bill (even if you claim it was generated later), it is treated as 'no e-way bill' and attracts penalty. Always generate e-way bill before loading goods for dispatch.",
    },
    {
      q: "Is e-way bill required for courier/parcel services?",
      a: "No, e-way bill is NOT required for goods sent through courier or parcel services (like BlueDart, DTDC, India Post) if each consignment value is ≤₹50,000. The courier company itself generates a consolidated e-way bill for all parcels in their vehicle. However, if you are sending goods via your own vehicle or hired transport (not courier), e-way bill is MANDATORY if value >₹50,000.",
    },
    {
      q: "What if I need to change the destination address during transit?",
      a: "You CANNOT change the destination address (To PIN code) on an already generated e-way bill. If destination changes, you must: (1) CANCEL the existing e-way bill (within 24 hours of generation), and (2) Generate a NEW e-way bill with the correct destination address. Note: E-way bill can be cancelled only if goods have NOT been reported as 'verified in transit' by GST authorities.",
    },
    {
      q: "Can the same e-way bill be used for multiple trips?",
      a: "No. Each e-way bill is valid for ONLY ONE trip/consignment. Once goods reach the destination and are delivered, the e-way bill becomes invalid (even if validity period has not expired). For the next consignment/trip, you must generate a NEW e-way bill with a new invoice/challan. Re-using the same EBN is illegal and detectable during inspection.",
    },
    {
      q: "How do I generate e-way bill for export consignments?",
      a: "For export consignments (goods going out of India), e-way bill generation process is slightly different: (1) Select Transaction Type: 'Outward', Sub Type: 'Export', (2) Document Type: 'Tax Invoice' or 'Bill of Export', (3) Recipient GSTIN: Enter 'URP' (Unregistered Person) as foreign buyer doesn't have Indian GSTIN, (4) To PIN Code: Enter port/airport PIN code where goods will exit India (e.g., Mumbai Port - 400001), (5) Generate e-way bill as usual. Validity is calculated based on distance to port/airport.",
    },
    {
      q: "What is Consolidated E-Way Bill and when is it used?",
      a: "Consolidated E-Way Bill (CEWAYBILL) is used by transporters carrying MULTIPLE consignments (from different consignors) in a SINGLE vehicle. Instead of carrying multiple individual e-way bills, the transporter generates ONE consolidated e-way bill containing all EBNs. Process: (1) Individual consignors generate separate e-way bills for their consignments, (2) Transporter logs in to portal → 'Generate Consolidated EWB', (3) Enter all EBNs, vehicle number, from & to locations, (4) Submit → Consolidated EWB with unique CEWB number is generated. Useful for logistics companies and LTL (Less Than Truckload) transporters.",
    },
    {
      q: "Can Taxvio generate e-way bills on our behalf using our credentials?",
      a: "Yes. Many of our clients provide us with their e-way bill portal login credentials (or create a sub-user account for us) under a service agreement with confidentiality clause. We generate e-way bills on your behalf based on invoice data you share (via email, WhatsApp, or ERP integration). We provide: (a) Instant generation (within 30 minutes of invoice sharing), (b) EBN and PDF sent via email/WhatsApp, (c) Monthly compliance reports. This is ideal for businesses with high dispatch volumes or those without dedicated staff for e-way bill generation.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST E-Way Bill
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