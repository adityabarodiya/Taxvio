// app/serviceslist/gst/gst-for-importers-exporters/GstImportExportClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Compliance for Importers & Exporters - IGST, LUT, Export Documentation & Refund Services",
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
    "Specialized GST compliance services for import-export businesses, trading companies, and merchant exporters. Complete service includes IGST payment advisory on imports (Section 3(7) IGST Act), Bill of Entry to GSTR-2A/2B reconciliation, export invoice preparation with shipping bill matching, LUT (Letter of Undertaking) filing for zero-rated supplies, GST refund coordination for accumulated ITC on exports, RCM (Reverse Charge Mechanism) compliance on import of services from non-resident vendors, GSTR-1 export reporting (with/without payment of tax), GSTR-3B reconciliation for IGST credit, monthly/quarterly return filing, and coordination with customs brokers and shipping lines. Expert CA team ensuring compliance with CGST Act, IGST Act, Customs Act, and DGFT regulations. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Chennai and pan-India.",
  serviceType: "GST for Import-Export Businesses",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
      maxPrice: "24999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is IGST on imports and how is it different from customs duty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IGST (Integrated Goods and Services Tax) on imports is levied under Section 3(7) of the IGST Act, 2017 on all goods imported into India, and is charged at the same rate as the domestic GST rate applicable to that product (e.g., 5%, 12%, 18%, or 28%). IGST is calculated on the Assessable Value, which is the CIF value (Cost + Insurance + Freight) plus Basic Customs Duty plus any other applicable duties. Unlike customs duty (which is a Central levy and is not available as input tax credit), IGST paid on imports is available as Input Tax Credit (ITC) to the importer, provided the imported goods are used for business purposes and the importer has a valid GSTIN. The importer can claim this ITC in their GSTR-3B return and utilize it to set off their output GST liability on domestic sales. IGST on imports is collected by the Customs department at the time of clearance via the Bill of Entry, and the credit appears in the importer's GSTR-2A/2B (auto-populated from ICEGATE). This integration of GST with customs ensures seamless credit flow and eliminates the cascading effect of taxes on imported goods.",
      },
    },
    {
      "@type": "Question",
      name: "What is LUT and when must exporters file it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LUT (Letter of Undertaking) is a declaration filed by exporters with the GST authorities, undertaking that they will export goods or services without payment of IGST (under the zero-rated supply provisions of Section 16 of the IGST Act). Once an LUT is filed and accepted, the exporter can make exports without paying GST, and can claim a refund of accumulated Input Tax Credit attributable to the zero-rated supplies (exports). LUT is filed annually (valid for one financial year) and must be filed on the GST portal (in Form GST RFD-11) before making the first export in that financial year. Eligibility: Exporters with a clean compliance record (no prosecution or investigation pending for tax evasion >₹2.5 crore in the preceding 5 years) can file LUT. New exporters and exporters with good compliance can file LUT; those with a history of defaults may be required to furnish a bond instead. The LUT must be filed separately for each GSTIN (if the exporter has multiple registrations). Non-filing of LUT means the exporter must pay IGST on exports and then claim a refund, which delays cash flow — hence LUT filing is critical for exporters.",
      },
    },
    {
      "@type": "Question",
      name: "How do I claim GST refund on exports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exporters can claim a refund of unutilized Input Tax Credit (ITC) accumulated due to zero-rated supplies (exports) under Section 54 of the CGST Act. The process is: (1) Export goods/services under LUT (without payment of IGST) or with payment of IGST, (2) Ensure the shipping bill is filed and the export is reflected in your GSTR-1, (3) File GSTR-3B claiming the eligible ITC, (4) On the GST portal, file Form GST RFD-01 (Refund Application) along with Form GST RFD-01A (Statement of exports and ITC claimed), selecting 'Refund of unutilized ITC on account of exports' as the refund type, (5) Attach supporting documents: shipping bills, export invoices, FIRC/BRC (Bank Realization Certificate for exports with payment), CA certificate (if refund exceeds ₹2 lakh), and a statement reconciling ITC claimed with exports, (6) The GST officer processes the refund (typically within 60 days) and credits the refund amount (90% provisional refund first, balance after final verification) to the bank account on record. Key challenges: Refund is only allowed to the extent of ITC attributable to exports (common input credit must be apportioned), and any ITC on blocked credits (Section 17(5) items like motor vehicles, food & beverages, etc.) is not refundable. Taxvio prepares the refund application, CA certificate, and handles the entire refund coordination.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GstImportExportClient() {
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
          ⚠️ Import-Export GST Compliance: IGST Credit, LUT Filing & Refund Coordination — Get Expert Support!
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
              <span className="text-white">GST for Importers & Exporters</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🌍 Import-Export GST
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Compliance for
                  <br />
                  <span className="text-[#7ecbf0]">Importers & Exporters</span>
                  <br />
                  Complete Support
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Running an{" "}
                  <strong className="text-white">
                    import-export business, trading company, or merchant export
                    firm
                  </strong>
                  ? GST compliance for cross-border trade involves specialized
                  rules —{" "}
                  <strong className="text-white">
                    IGST on imports (Section 3(7) IGST Act)
                  </strong>
                  , reconciling{" "}
                  <strong className="text-white">
                    Bill of Entry with GSTR-2A/2B for ITC
                  </strong>
                  , filing{" "}
                  <strong className="text-white">
                    LUT (Letter of Undertaking)
                  </strong>{" "}
                  for zero-rated exports, preparing{" "}
                  <strong className="text-white">
                    export invoices matched with shipping bills
                  </strong>
                  , claiming{" "}
                  <strong className="text-white">
                    GST refunds on accumulated ITC
                  </strong>
                  , and complying with{" "}
                  <strong className="text-white">
                    RCM on import of services
                  </strong>
                  . Errors in IGST credit reconciliation or delayed refund claims
                  can block crores in working capital.{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end GST support for import-export —{" "}
                  <strong className="text-white">
                    IGST advisory, Bill of Entry reconciliation, LUT filing,
                    export documentation, refund coordination, and monthly return
                    filing
                  </strong>{" "}
                  — starting{" "}
                  <strong className="text-white">₹4,999/month</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get GST Support — ₹4,999/mo →
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
                    "✅ IGST Credit Reconciliation",
                    "✅ LUT Filing",
                    "✅ Export Refund Claims",
                    "✅ CA Team Support",
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
                    ["💰", "IGST: Input credit on imports"],
                    ["📄", "LUT: Annual filing for exporters"],
                    ["📦", "Bill of Entry: GSTR-2A reconciliation"],
                    ["🚢", "Shipping Bill: Export invoice matching"],
                    ["💸", "Refund: ITC on zero-rated exports"],
                    ["💼", "Starting: ₹4,999/month"],
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
              { number: "80+", label: "Import-Export Clients", icon: "🌍" },
              { number: "₹15 Cr+", label: "Refunds Processed", icon: "💸" },
              { number: "Monthly", label: "Compliance Support", icon: "📅" },
              { number: "₹4,999", label: "Starting Fee/Month", icon: "💼" },
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
              "✔ IGST Credit Experts",
              "✔ LUT Filing Support",
              "✔ Refund Coordination",
              "✔ CA Team",
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
          {/* WHAT IS IMPORT-EXPORT GST */}
          <section id="what-is-import-export-gst">
            <SectionLabel text="Understanding Import-Export GST" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is GST for Importers & Exporters?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>GST for Importers & Exporters</strong> is a specialized
                  area of GST compliance that deals with the tax treatment of{" "}
                  <strong>
                    cross-border transactions — imports (bringing goods/services
                    into India from abroad) and exports (sending goods/services
                    out of India to foreign buyers)
                  </strong>
                  .
                </p>
                <p>
                  The framework is governed by the{" "}
                  <strong>
                    Integrated Goods and Services Tax (IGST) Act, 2017
                  </strong>
                  , read with the{" "}
                  <strong>Customs Act, 1962 and DGFT regulations</strong>, and
                  involves unique compliances such as IGST payment on imports, LUT
                  filing for zero-rated exports, Bill of Entry reconciliation,
                  shipping bill matching, and refund claims.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🌍 Key Components of Import-Export GST
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "IGST on Imports (Section 3(7) IGST Act)",
                        desc: "All goods imported into India are subject to IGST, levied at the same rate as the domestic GST rate for that product (5%, 12%, 18%, or 28%). IGST is calculated on the Assessable Value (CIF + Basic Customs Duty + other duties) and is collected by Customs at the time of clearance. The IGST paid is available as Input Tax Credit (ITC) to the importer.",
                      },
                      {
                        title: "Zero-Rated Exports (Section 16 IGST Act)",
                        desc: "Exports of goods or services are treated as 'zero-rated supplies' — the exporter can supply without payment of GST (under LUT) or with payment of IGST (and claim refund later). Zero-rating ensures no GST cost is embedded in exports, making them internationally competitive.",
                      },
                      {
                        title: "LUT (Letter of Undertaking)",
                        desc: "Exporters file an annual LUT (Form GST RFD-11) undertaking to export goods/services without payment of IGST. LUT is valid for one financial year and must be renewed annually. Filing LUT avoids the need to pay and reclaim IGST, improving cash flow.",
                      },
                      {
                        title: "Bill of Entry (BOE) for Imports",
                        desc: "A Bill of Entry is the customs declaration filed by the importer for clearance of imported goods. The BOE contains details of IGST and customs duty paid, and this data flows into the importer's GSTR-2A/2B (auto-populated from ICEGATE) for ITC claim.",
                      },
                      {
                        title: "Shipping Bill for Exports",
                        desc: "A Shipping Bill is the customs declaration filed by the exporter for clearance of export goods. The Shipping Bill number and date must be mentioned in the export invoice and GSTR-1, and the export must be reported in Table 6A of GSTR-1 to claim refund or LUT benefits.",
                      },
                      {
                        title: "GST Refund on Exports",
                        desc: "Exporters can claim a refund of accumulated ITC (unutilized input credit) attributable to zero-rated supplies by filing Form GST RFD-01. The refund amount is calculated using a formula linking ITC to export turnover, and is typically processed within 60 days.",
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
                    ✅ IGST on Imports — How It Works
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Step 1: Goods Arrive at Indian Port
                      </p>
                      <p className="text-xs text-gray-700">
                        The importer or their customs broker files a{" "}
                        <strong>Bill of Entry (BOE)</strong> with Indian Customs,
                        declaring the nature, quantity, and value of the goods.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Step 2: IGST & Customs Duty Calculated
                      </p>
                      <p className="text-xs text-gray-700">
                        Customs calculates:{" "}
                        <strong>
                          (a) Basic Customs Duty (BCD) on CIF value, (b) IGST =
                          GST rate × (CIF value + BCD + any other duties)
                        </strong>
                        . For example: CIF ₹1,00,000 + BCD @10% = ₹10,000 →
                        Assessable Value = ₹1,10,000 → IGST @18% = ₹19,800.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Step 3: Payment via ICEGATE
                      </p>
                      <p className="text-xs text-gray-700">
                        The importer pays BCD + IGST (+ GST Compensation Cess, if
                        applicable) via the ICEGATE portal (integrated with the
                        GST portal). Payment is typically made electronically
                        (internet banking or debit card).
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Step 4: Goods Cleared, IGST Credit Auto-Populated
                      </p>
                      <p className="text-xs text-gray-700">
                        After payment, Customs clears the goods. The IGST payment
                        details flow from ICEGATE to the GST portal and appear in
                        the importer's <strong>GSTR-2A/2B</strong> (under the IGST
                        on imports section). The importer can claim this as Input
                        Tax Credit in their <strong>GSTR-3B</strong>.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Key Benefit:</strong> IGST paid on imports is fully
                    creditable (unlike customs duty, which is not), provided the
                    imported goods are used for business purposes and the importer
                    has a valid GSTIN.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    🚢 Zero-Rated Exports — LUT vs Payment Route
                  </p>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      Exporters have <strong>two options</strong> for reporting
                      exports of goods or services:
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        Option 1: Export Under LUT (Without Payment of IGST)
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Exporter files an annual{" "}
                          <strong>
                            LUT (Form GST RFD-11) on the GST portal
                          </strong>{" "}
                          before the first export
                        </li>
                        <li>
                          • LUT undertakes that goods/services will be exported
                          and the exporter will comply with export regulations
                        </li>
                        <li>
                          • Export invoice is issued{" "}
                          <strong>without charging IGST</strong> (shown as
                          "Zero-rated supply under LUT" or "Supply meant for
                          export without payment of tax")
                        </li>
                        <li>
                          • No IGST payment → no cash outflow → better working
                          capital
                        </li>
                        <li>
                          • Exporter can claim{" "}
                          <strong>
                            refund of accumulated ITC (input credit)
                          </strong>{" "}
                          via Form GST RFD-01
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        Option 2: Export With Payment of IGST (Refund Route)
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Export invoice is issued{" "}
                          <strong>with IGST charged</strong> at the applicable rate
                          (5%, 12%, 18%, 28%)
                        </li>
                        <li>
                          • Exporter pays the IGST to the government via{" "}
                          <strong>GSTR-3B</strong>
                        </li>
                        <li>
                          • After shipment and receipt of export proceeds (FIRC/BRC
                          from bank), exporter files{" "}
                          <strong>Form GST RFD-01</strong> to claim a refund of the
                          IGST paid on exports
                        </li>
                        <li>
                          • Refund is typically processed within 60 days, but ties
                          up working capital in the interim
                        </li>
                      </ul>
                    </div>
                    <p className="text-xs text-gray-600 mt-3">
                      <strong>Recommended:</strong> LUT route (Option 1) for most
                      exporters with regular export activity and good compliance,
                      as it avoids upfront IGST payment and speeds up cash flow.
                      Payment route (Option 2) is used where LUT eligibility is
                      uncertain or for one-off exports.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    📦 Bill of Entry vs Shipping Bill — Key Differences
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-orange-100">
                          <th className="p-2 text-left">Aspect</th>
                          <th className="p-2 text-left">Bill of Entry (BOE)</th>
                          <th className="p-2 text-left">Shipping Bill</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            aspect: "Purpose",
                            boe: "Import clearance",
                            sb: "Export clearance",
                          },
                          {
                            aspect: "Filed By",
                            boe: "Importer (or customs broker)",
                            sb: "Exporter (or customs broker)",
                          },
                          {
                            aspect: "GST Treatment",
                            boe: "IGST paid (available as ITC)",
                            sb: "IGST nil (LUT) or refund claim",
                          },
                          {
                            aspect: "Reconciliation",
                            boe: "With GSTR-2A/2B for ITC",
                            sb: "With GSTR-1 Table 6A for export",
                          },
                          {
                            aspect: "Portal",
                            boe: "ICEGATE (Customs)",
                            sb: "ICEGATE (Customs)",
                          },
                          {
                            aspect: "GST Impact",
                            boe: "Increases ITC (inward credit)",
                            sb: "Enables refund of ITC",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.aspect}</td>
                            <td className="p-2 text-gray-600">{row.boe}</td>
                            <td className="p-2 text-gray-600">{row.sb}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Common GST Issues for Import-Export Businesses
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "BOE Not Appearing in GSTR-2A/2B: ICEGATE to GST portal sync delays (typically 3-5 days) or mismatch in GSTIN on the BOE vs actual GSTIN — resulting in ITC not flowing.",
                      "Shipping Bill Not Reflecting in GSTR-1: Incorrect GSTIN or shipping bill number entered on the export invoice, or delay in customs clearance — causing issues in refund claim.",
                      "LUT Not Filed / Expired: Exporting without a valid LUT forces payment of IGST, tying up working capital — many exporters miss the annual renewal deadline (before 31st March).",
                      "ITC on Imports Not Claimed Timely: Due to delayed BOE reconciliation or uncertainty about ITC eligibility (e.g., imported goods used for exempt supplies or personal use) — blocking credit.",
                      "Refund Claim Rejected: Due to insufficient documentation (missing FIRC/BRC, incorrect export invoice format, or mismatch between GSTR-1 and shipping bills) — leading to cash flow stress.",
                      "RCM on Import of Services Ignored: Businesses importing software, consulting, or digital services from abroad often forget to pay GST under Reverse Charge Mechanism (Section 5(3) IGST Act) — attracting interest and penalty.",
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
                    📋 Documents Required for Import-Export GST Compliance
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-bold text-yellow-700 mb-1">For Imports:</p>
                    <ul className="space-y-1 text-xs ml-4">
                      <li>• IEC (Import Export Code) issued by DGFT</li>
                      <li>• GSTIN of the importing entity</li>
                      <li>
                        • Bill of Entry (BOE) — customs declaration with IGST
                        payment details
                      </li>
                      <li>
                        • Commercial invoice from the foreign supplier (with HS
                        code, CIF value)
                      </li>
                      <li>• Bill of Lading (BL) or Airway Bill (AWB)</li>
                      <li>
                        • Packing list and insurance documents (for CIF
                        calculation)
                      </li>
                      <li>
                        • ICEGATE payment receipt (IGST + BCD payment proof)
                      </li>
                    </ul>
                    <p className="font-bold text-yellow-700 mb-1 mt-3">
                      For Exports:
                    </p>
                    <ul className="space-y-1 text-xs ml-4">
                      <li>• IEC (Import Export Code)</li>
                      <li>• GSTIN of the exporting entity</li>
                      <li>
                        • LUT (Form GST RFD-11) filed and accepted on GST portal
                      </li>
                      <li>
                        • Export invoice (with shipping bill number, port code,
                        "Supply under LUT")
                      </li>
                      <li>• Shipping Bill — customs export declaration</li>
                      <li>• Bill of Lading (BL) or Airway Bill (AWB)</li>
                      <li>• Packing list</li>
                      <li>
                        • FIRC/BRC (Foreign Inward Remittance Certificate / Bank
                        Realization Certificate) for export proceeds received
                      </li>
                      <li>• Export order / contract with the foreign buyer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMPLIANCE PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Compliance" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Monthly GST Compliance Process for Import-Export Businesses
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete monthly compliance cycle for importers & exporters:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Collect Import & Export Documentation",
                    description:
                      "At the start of the month (for the previous month's transactions), collect: (a) All Bills of Entry (BOE) for imports cleared during the month, along with ICEGATE payment receipts and commercial invoices from foreign suppliers, (b) All export invoices raised during the month, along with the corresponding shipping bills, Bills of Lading/Airway Bills, and export orders, (c) FIRC/BRC for export proceeds received during the month (even if the export was in an earlier month), (d) Any purchase invoices for domestic inputs used in manufacturing/processing goods meant for export (to trace ITC eligibility), and (e) Any import of services invoices (digital services, consultancy, etc. from non-resident vendors requiring RCM compliance). Organize these by transaction date and type (import goods, export goods, import of services). Taxvio provides a document collection checklist for import-export clients.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "BOE to GSTR-2A/2B Reconciliation (Import ITC)",
                    description:
                      "Download your GSTR-2A (auto-populated ITC) and GSTR-2B (system-computed ITC) for the month from the GST portal. In the 'IGST on Imports' section, verify that all your Bills of Entry appear with the correct IGST amounts. Cross-check: (a) BOE number and date from your customs clearance records, (b) IGST amount paid as per ICEGATE payment receipt, vs (c) IGST amount shown in GSTR-2A/2B. Common mismatches: BOE not appearing (ICEGATE to GST portal sync delay — typically 3-5 days after customs clearance), incorrect GSTIN on the BOE (if the customs broker used a wrong GSTIN), or BOE appearing under a different GSTIN if you have multiple registrations. For mismatches, coordinate with your customs broker to rectify the BOE on ICEGATE (via amendment) and wait for the corrected data to flow into GSTR-2B. Only after this reconciliation should you claim the IGST ITC in your GSTR-3B. Taxvio performs BOE reconciliation and flags discrepancies for rectification.",
                    duration: "2-3 days",
                  },
                  {
                    step: 3,
                    title: "Export Invoice to Shipping Bill Matching",
                    description:
                      "For all exports made during the month, match each export invoice with its corresponding shipping bill. Verify: (a) Shipping bill number and date mentioned on the export invoice are correct, (b) Port code mentioned on the export invoice matches the actual port of export, (c) Invoice value (FOB or CIF, as applicable) matches the value declared in the shipping bill, and (d) HS code (tariff classification) is consistent between the invoice and the shipping bill. This matching is critical for GSTR-1 reporting (Table 6A for exports) and for refund claims (where the refund application requires shipping bill-wise details). If mismatches are found, coordinate with your customs broker to amend the shipping bill on ICEGATE before filing GSTR-1. Taxvio maintains an export invoice-shipping bill master register for all clients.",
                    duration: "1-2 days",
                  },
                  {
                    step: 4,
                    title: "RCM Compliance on Import of Services",
                    description:
                      "If you have imported any services from non-resident vendors (outside India, no GSTIN) during the month — e.g., software subscriptions (SaaS), consulting fees, digital marketing services, royalty/license fees — you must pay GST under Reverse Charge Mechanism (RCM) as per Section 5(3) of the IGST Act. Calculate: IGST = Service value in INR (converted at the bank exchange rate on the payment date) × applicable GST rate (typically 18% for most services). Pay the IGST via DRC-03 (challan) on the GST portal and report the import of services in your GSTR-3B (Table 3.1(d) — inward supplies liable to reverse charge). You can claim the same IGST as ITC in the same GSTR-3B (Table 4A(3)), provided the services are for business purposes. Many import-export businesses miss this RCM compliance, especially for small-value foreign digital services — it is a common audit observation. Taxvio tracks all foreign service payments and ensures RCM compliance.",
                    duration: "1 day (if applicable)",
                  },
                  {
                    step: 5,
                    title: "Prepare & File GSTR-1 (Outward Supplies)",
                    description:
                      "Prepare GSTR-1 for the month, reporting all outward supplies (sales): (a) B2B domestic sales (Table 4A/4B), (b) B2C domestic sales (Table 5/7), (c) Exports of goods under LUT or with payment of IGST (Table 6A — with shipping bill number, port code, and invoice details), (d) Deemed exports, if any (Table 6B), and (e) Export of services (Table 6A, marked as 'Services'). Special care for exports: Ensure every export invoice is reported in Table 6A with the correct shipping bill number and date — this data is critical for refund processing and is cross-verified by the GST/Customs departments. File GSTR-1 by the 11th of the following month (for monthly filers) or by the 13th of the month following the quarter (for quarterly filers under QRMP scheme). Taxvio prepares and files GSTR-1 with export documentation verified.",
                    duration: "1-2 days (GSTR-1 deadline: 11th of next month)",
                  },
                  {
                    step: 6,
                    title: "Prepare & File GSTR-3B (Summary Return & ITC Claim)",
                    description:
                      "Prepare GSTR-3B (summary return) consolidating: (a) Outward supplies (total sales, including exports — reported as zero-rated supplies), (b) Inward supplies liable to reverse charge (if any — import of services RCM), (c) Eligible ITC — from GSTR-2B, including IGST on imports (from BOE reconciliation), domestic purchases (from supplier invoices in GSTR-2B), and RCM ITC (from import of services), and (d) Tax payable (Output GST liability minus ITC, plus any RCM payment). Pay any net GST liability via challan (PMT-06) before filing GSTR-3B. File GSTR-3B by the 20th of the following month (monthly filers) or by the 22nd/24th of the month following the quarter (QRMP filers). Common error: claiming ITC on BOE before it appears in GSTR-2B — wait for BOE to reflect in GSTR-2B before claiming, or risk interest and penalty. Taxvio reconciles ITC, files GSTR-3B, and provides a detailed tax computation summary.",
                    duration: "2-3 days (GSTR-3B deadline: 20th of next month)",
                  },
                  {
                    step: 7,
                    title: "LUT Renewal (Annual — Before 31st March)",
                    description:
                      "LUT (Letter of Undertaking) is valid for one financial year (1st April to 31st March). Before the start of the new financial year, file a fresh LUT on the GST portal (Form GST RFD-11) to continue exporting without payment of IGST. Best practice: file the LUT by mid-March (before the last export of the current financial year) so that it is accepted before 31st March. If you miss the LUT renewal and the new financial year starts, you will have to export with payment of IGST (and claim refund later) until the new LUT is filed and accepted — this can block significant working capital. Taxvio sends automated LUT renewal reminders in February/March each year and handles the filing.",
                    duration: "Half day (Annual filing in March)",
                  },
                  {
                    step: 8,
                    title: "GST Refund Application (Quarterly or Monthly)",
                    description:
                      "Exporters can claim a refund of accumulated ITC (Input Tax Credit) attributable to zero-rated supplies (exports) by filing Form GST RFD-01 (Refund Application) along with Form GST RFD-01A (Statement of exports). Timing: Typically filed quarterly (after the quarter's GSTR-3B is filed) or monthly for large exporters. Refund formula: Refund Amount = (Export Turnover / Total Turnover) × Net ITC — subject to the condition that the refund is limited to ITC attributable to inputs and input services used in the exported goods/services. Supporting documents required: (a) Shipping bill-wise details of all exports in the refund period, (b) Export invoices, (c) FIRC/BRC (proof of receipt of export proceeds) — mandatory for refund of IGST paid on exports; not mandatory for ITC refund on LUT exports but recommended, (d) CA certificate (if refund amount exceeds ₹2 lakh) certifying the correctness of the refund claim and that no ineligible ITC is included, and (e) Reconciliation statement showing the link between ITC claimed and exports made. File RFD-01 on the GST portal and track the refund status. Typical processing time: 60 days from the date of filing (provisional refund of 90% may be credited within 7 days if the application is complete). Taxvio prepares the refund application, obtains the CA certificate, and coordinates with the GST department until the refund is credited.",
                    duration: "Quarterly or monthly (depending on export volume)",
                  },
                  {
                    step: 9,
                    title: "Monthly Compliance Review & Advisory",
                    description:
                      "At the end of each month's compliance cycle, review: (a) Any pending BOE reconciliation issues (BOEs not appearing in GSTR-2B), (b) Export invoices pending shipping bill matching or FIRC receipt, (c) Accumulated ITC balance (if growing significantly, plan a refund application), (d) Any GST notices or queries from the department (especially on export claims or ITC mismatches), and (e) Upcoming compliance deadlines (GSTR-1, GSTR-3B, quarterly return if applicable). Taxvio provides a monthly compliance summary report for import-export clients, highlighting ITC claimed, exports reported, refunds filed, and any pending actions. This ensures no compliance gap and optimal working capital management (by timely refund claims).",
                    duration: "Ongoing (monthly review)",
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
                  Monthly Compliance Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Key Deadlines:</strong> (1) GSTR-1 — 11th of next month
                  (monthly) or 13th of next month (quarterly QRMP), (2) GSTR-3B —
                  20th of next month (monthly) or 22nd/24th (quarterly QRMP), (3)
                  LUT renewal — before 31st March (annual), (4) Refund application
                  (RFD-01) — no fixed deadline, but typically filed quarterly
                  within 2 years of the relevant tax period. Taxvio manages the
                  entire cycle with automated deadline tracking, document
                  collection reminders, and monthly compliance dashboards showing
                  ITC utilized, exports filed, and refunds in progress.
                </p>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section id="our-services">
            <SectionLabel text="Our Packages" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              GST Compliance Packages for Import-Export Businesses
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Monthly retainer packages for ongoing compliance and refund support:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹4,999",
                  popular: false,
                  features: [
                    "Monthly GSTR-1 & GSTR-3B filing (up to 20 transactions)",
                    "BOE to GSTR-2A/2B reconciliation (up to 5 BOEs/month)",
                    "Export invoice-shipping bill matching (up to 10 exports/month)",
                    "RCM on import of services (up to 3 transactions/month)",
                    "Email support",
                  ],
                  limitations: [
                    "LUT filing support not included (offered as add-on)",
                    "No refund application support",
                    "No customs broker coordination",
                  ],
                  ideal:
                    "Small import-export traders with low transaction volume",
                },
                {
                  name: "Standard",
                  price: "₹9,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Monthly transactions: up to 100 (imports + exports + domestic)",
                    "BOE reconciliation: up to 20 BOEs/month",
                    "Export matching: up to 50 exports/month",
                    "LUT filing & annual renewal support",
                    "Quarterly GST refund application (RFD-01 + CA certificate)",
                    "Customs broker & freight forwarder coordination",
                    "Priority WhatsApp + email support",
                  ],
                  limitations: [
                    "Refund limited to 1 application per quarter",
                  ],
                  ideal:
                    "Most import-export businesses with regular monthly shipments",
                },
                {
                  name: "Complete",
                  price: "₹24,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Unlimited monthly transactions (imports + exports + domestic)",
                    "Unlimited BOE & shipping bill reconciliation",
                    "Monthly GST refund applications (if eligible)",
                    "Dedicated import-export GST compliance manager",
                    "Customs duty optimization advisory",
                    "DGFT & FTP compliance advisory (IEC, EPCG, Advance Authorization)",
                    "Audit defense & litigation support for export refund disputes",
                    "Dedicated CA + customs consultant team",
                  ],
                  limitations: [],
                  ideal:
                    "Large trading houses, merchant exporters, or manufacturers with significant import-export volumes",
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
                    <p className="text-sm text-gray-500">Per Month</p>
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
                    service: "LUT Filing (One-Time)",
                    price: "₹999",
                    desc: "Annual LUT filing on GST portal (Form GST RFD-11)",
                  },
                  {
                    service: "GST Refund Application (RFD-01)",
                    price: "₹2,999/application",
                    desc: "Preparation, CA certificate, filing, follow-up",
                  },
                  {
                    service: "IEC Registration (DGFT)",
                    price: "₹2,499",
                    desc: "Import Export Code application & issuance",
                  },
                  {
                    service: "Customs Duty Optimization",
                    price: "₹9,999",
                    desc: "HS code classification, FTA benefit, duty drawback advisory",
                  },
                  {
                    service: "EPCG License / Advance Authorization",
                    price: "₹14,999+",
                    desc: "Application for duty exemption schemes under FTP",
                  },
                  {
                    service: "GST Audit Defense (Import-Export)",
                    price: "₹29,999+",
                    desc: "Response to SCN, personal hearing, litigation support",
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
                  name: "Ramesh Jain, Director",
                  company: "Global Textiles Exports Pvt Ltd",
                  location: "Meerut, UP",
                  text: "We export garments to Europe and the Middle East — our biggest challenge was claiming GST refunds on ITC. Taxvio files our quarterly RFD-01 with perfect shipping bill matching and CA certificates, and we've received ₹2.3 crore in refunds over the past year with zero rejections. Their BOE reconciliation also helped us claim ₹18 lakh in IGST credit we had missed.",
                },
                {
                  name: "Priya Menon, CFO",
                  company: "TechSource India Pvt Ltd",
                  location: "Noida, UP",
                  text: "We import electronic components from China and Taiwan. Taxvio's BOE to GSTR-2B reconciliation service caught a GSTIN mismatch on 3 BOEs worth ₹45 lakh IGST — we coordinated with our customs broker to rectify it and claimed the credit in the next month. They also handle our RCM on imported software licenses, which we had been ignoring earlier.",
                },
                {
                  name: "Vikram Singh, Partner",
                  company: "Sunrise Agro Exports",
                  location: "Muzaffarnagar, UP",
                  text: "We export rice and wheat to African countries. Our LUT had lapsed in April 2024 and we didn't realize until we tried to export — ended up paying ₹12 lakh IGST unnecessarily. Taxvio now sends us LUT renewal reminders every February, handles the filing, and ensures our export invoices are always compliant. Huge relief.",
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
              GST for Import-Export Businesses Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides specialized GST compliance for import-export businesses
              across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Chennai, Bangalore
              </strong>
              , and all cities in India. Complete remote support for IGST, LUT,
              refunds, and BOE reconciliation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Meerut",
                "Noida",
                "Delhi NCR",
                "Mumbai",
                "Chennai",
                "Bangalore",
                "Pune",
                "Ahmedabad",
                "Kolkata",
                "Hyderabad",
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
              Other GST & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "GST Registration",
                  icon: "📝",
                  link: "/serviceslist/gst/gst-registration",
                  desc: "New GSTIN registration in 3-5 days",
                },
                {
                  title: "GST Return Filing",
                  icon: "📊",
                  link: "/serviceslist/gst/gst-return-filing",
                  desc: "Monthly/Quarterly GSTR-1 & GSTR-3B",
                },
                {
                  title: "GST Annual Return",
                  icon: "📅",
                  link: "/serviceslist/gst/gst-annual-return",
                  desc: "GSTR-9 & GSTR-9C filing",
                },
                {
                  title: "IEC Registration",
                  icon: "🌍",
                  link: "/serviceslist/other/iec-registration",
                  desc: "Import Export Code (DGFT)",
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
                    Import-Export GST Compliance
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Maximize ITC, File Refunds, Stay Compliant
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get complete GST support for import-export businesses — IGST
                    credit reconciliation, LUT filing, export invoice matching,
                    refund applications, and RCM compliance. Unlock crores in
                    working capital blocked in ITC. Starting ₹4,999/month with
                    expert CA team.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get GST Support — ₹4,999/mo
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
            href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20for%20import-export%20business"
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
              Need Import-Export GST Help? Chat Now!
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
      q: "Can I claim ITC on IGST paid on personal imports (e.g., laptop for personal use)?",
      a: "NO. Input Tax Credit (ITC) on IGST paid on imports is available only if the imported goods or services are used for 'business purposes' — i.e., in the course or furtherance of the registered person's business. Imports for personal use, consumption by employees (unless it's a business expense like employee uniforms or safety equipment), or for non-business activities (CSR, gifts, etc.) do not qualify for ITC. Additionally, Section 17(5) of the CGST Act blocks ITC on certain categories even if used for business — e.g., motor vehicles (unless used for specified purposes like transportation of goods, passenger transport service, or driving training), food and beverages (unless it's an input for outward taxable supply, like a restaurant), and goods/services for construction of immovable property (unless it's plant & machinery). If you import a laptop for office use by employees, ITC is available; if you import it for personal use by a director (not for business), ITC is blocked. Maintain clear documentation (purchase order, usage log, capitalization in books as business asset) to support ITC claims on imported assets.",
    },
    {
      q: "What is the difference between 'export under LUT' and 'export with payment of IGST' in terms of refund timelines?",
      a: "The key difference is CASH FLOW. (1) Export Under LUT (Without Payment of IGST): You do not pay IGST on the export invoice → No upfront cash outflow. You claim a refund of accumulated ITC (input credit on domestic purchases and imports used in the exported goods) by filing Form GST RFD-01. The refund application is typically filed quarterly, and the refund is processed within 60 days (provisional refund of 90% may be credited within 7 days if the application is complete). Since you did not pay any IGST on the export itself, the refund amount is limited to ITC attributable to the export turnover. (2) Export With Payment of IGST (Payment Route): You charge and pay IGST on the export invoice via GSTR-3B → Immediate cash outflow. After the export is completed and you receive the export proceeds (FIRC/BRC from the bank), you file Form GST RFD-01 to claim a refund of the IGST paid on the export. The refund is typically processed faster (within 30-45 days) because you are claiming a refund of tax actually paid (not ITC), and the refund amount is straightforward (the exact IGST paid). However, the payment route ties up working capital — for example, if you export goods worth ₹1 crore with 18% IGST, you must pay ₹18 lakh upfront and wait for the refund. Hence, the LUT route is almost always preferred by exporters with regular export activity and good compliance, as it avoids the upfront IGST payment and improves cash flow, even though the refund timeline is similar.",
    },
    {
      q: "If my Bill of Entry (BOE) does not appear in GSTR-2A/2B, can I still claim the IGST credit in GSTR-3B?",
      a: "TECHNICALLY YES, but it is RISKY and NOT RECOMMENDED in practice. The CGST Act allows you to claim ITC on the strength of valid documents (in this case, the Bill of Entry and ICEGATE payment receipt), even if the details have not yet auto-populated in GSTR-2A/2B, as long as the underlying tax has been paid to the government (which it has been, via Customs). However, the GST portal's auto-matching system and departmental scrutiny primarily rely on GSTR-2A/2B — if you claim ITC in GSTR-3B for a BOE that does not appear in GSTR-2B, the claim will be flagged as a 'mismatch' in the departmental analytics, and you are likely to receive a notice asking you to reconcile or reverse the ITC. The SAFER practice is: (1) Wait for the BOE to appear in GSTR-2A/2B (typically 3-5 days after customs clearance, but can take up to 15 days in some cases due to ICEGATE to GST portal sync delays). (2) Once it appears, claim the ITC in the next month's GSTR-3B. (3) If the BOE does not appear even after 15-20 days, coordinate with your customs broker to check if the GSTIN on the BOE is correct and matches your registration. If there is a mismatch (e.g., wrong GSTIN entered by the broker), get the BOE amended on ICEGATE, and the corrected data will flow into your GSTR-2B. (4) If the BOE is correct but still not appearing (rare system glitch), you can claim the ITC in GSTR-3B and maintain the BOE copy, ICEGATE payment receipt, and a note explaining the delay — but be prepared to respond to a departmental notice. Taxvio tracks BOE to GSTR-2B reconciliation for all import clients and advises on the timing of ITC claims to minimize scrutiny.",
    },
    {
      q: "Can I export services (e.g., software development, consulting) under LUT, or is LUT only for goods?",
      a: "YES, LUT applies to BOTH export of goods and export of services. The zero-rated supply provisions of Section 16 of the IGST Act cover 'supply of goods or services or both' — so if you are a service provider exporting services to a foreign client (e.g., IT services, consulting, design services, digital marketing), you can file an LUT and provide the services without charging IGST, and then claim a refund of ITC on inputs and input services used in providing those export services. Conditions for export of services under LUT (Section 2(6) of IGST Act): (1) The supplier and recipient are in different countries (place of supply is outside India), (2) The recipient is not merely an establishment of the supplier (i.e., it's a genuine third-party export, not supply to your own branch abroad), (3) The payment for the service is received in convertible foreign exchange (or in Indian Rupees if permitted under RBI regulations, e.g., for services to SEZ units), and (4) The supplier and recipient are not merely related persons where the transaction is not at arm's length (to prevent abuse). If all conditions are met, you can export services under LUT without paying IGST and claim ITC refund. The export must be reported in GSTR-1 Table 6A with the foreign client's details and the export invoice particulars (no shipping bill is required for services, but you must have proof of export — contract, invoice, FIRC for payment receipt).",
    },
    {
      q: "What is the maximum time limit for claiming a GST refund on exports — is there a deadline?",
      a: "YES. Under Section 54(1) of the CGST Act, a refund application must be filed 'within two years from the relevant date'. For refund of ITC on account of zero-rated supplies (exports), the 'relevant date' is the end of the quarter in which the exports were made (for quarterly filers under QRMP) or the end of the month (for monthly filers). Example: If you made exports in July 2024 (and you are a monthly filer), the relevant date is 31st July 2024, and the refund application for those exports must be filed by 31st July 2026 (2 years). For exports under LUT (without payment of tax), this 2-year limit is critical because if you miss the deadline, you permanently lose the right to claim the refund of ITC attributable to those exports — even though the ITC was legitimately earned and the exports were genuine. For exports with payment of IGST (payment route), the same 2-year limit applies for claiming refund of the IGST paid. Practical implication: Many exporters delay filing refund applications (due to documentation gaps, pending FIRC, or simply lack of awareness), and by the time they wake up, the 2-year window has closed for earlier export periods. Taxvio's import-export GST packages include proactive refund tracking — we monitor your export turnover and accumulated ITC each quarter, and file refund applications within 3-6 months of the export period to ensure maximum recovery and avoid the 2-year time-bar.",
    },
    {
      q: "If I import raw materials and use them to manufacture goods for domestic sale (not export), can I still claim ITC on the IGST paid on imports?",
      a: "YES, absolutely. ITC on IGST paid on imports is available for use in ANY taxable supply — whether the final product is sold domestically or exported. The only conditions are: (1) The imported goods/services are used in the course or furtherance of your business (business purpose), (2) You have a valid GSTIN, (3) The goods/services are used for making taxable supplies (not exempt supplies), and (4) The goods/services are not covered under the blocked credit categories of Section 17(5). Example: You import steel worth ₹10 lakh (CIF) + ₹1 lakh BCD + ₹1.98 lakh IGST @18% = total ₹12.98 lakh paid at customs. You can claim the ₹1.98 lakh IGST as ITC in your GSTR-3B (once it appears in GSTR-2B from the BOE). You use the imported steel to manufacture furniture, which you sell domestically in India for ₹50 lakh + 18% GST = ₹9 lakh output GST. You can set off the ₹1.98 lakh IGST ITC against the ₹9 lakh output GST, and pay only ₹7.02 lakh net GST. This is the core benefit of GST — seamless credit across the value chain, including imports. The same logic applies if you import machinery, spare parts, packaging materials, or any other inputs/capital goods for your business — the IGST paid is fully creditable (subject to the usual ITC conditions). The ONLY situation where ITC on imports would not be available is if the imported goods are used for exempt supplies (e.g., you import grains and sell them as agricultural produce, which is exempt from GST) or for non-business purposes.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST for Import-Export
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