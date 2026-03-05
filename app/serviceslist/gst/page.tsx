import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import Footar from "@/components/Footar";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "GST Services in India 2025 — Registration, Return Filing, Audit & Compliance | Taxvio",
  description:
    "Complete GST services: GST registration from ₹1,499, GSTR-1/3B monthly return filing, GSTR-9 annual return, GST refund, audit assistance, LUT filing for exporters, e-invoicing, notice reply, and amendment services across India. CA-assisted, 100% online.",
  keywords: [
    "GST registration India",
    "GST return filing GSTR-1 GSTR-3B",
    "GSTR-9 annual return filing",
    "GST refund export ITC",
    "GST audit assistance",
    "GST notice reply",
    "GST LUT filing exporter",
    "GST e-invoicing IRN",
    "GST cancellation revocation",
    "GST amendment registration",
    "GST registration fee India",
    "online GST registration Muzaffarnagar",
    "GST consultant Uttar Pradesh",
    "Taxvio GST services",
  ],
  openGraph: {
    title: "GST Services India — Registration, Returns, Refund & Compliance | Taxvio",
    description:
      "Professional GST registration, return filing, audit, refund, notice reply and complete GST compliance services across India. Starting ₹1,499.",
    url: "https://www.taxvio.in/gst",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og-gst.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Services India | Taxvio",
    description: "End-to-end GST compliance: registration, returns, refund, audit, notice reply — pan India.",
  },
  alternates: { canonical: "https://www.taxvio.in/gst" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

// ─── Structured Data ──────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "GST Compliance Services",
  provider: {
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: "+918937980366",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  areaServed: "India",
  description: "End-to-end GST registration, return filing, audit, refund and compliance services.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the fee for GST registration in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taxvio's GST registration fee starts at ₹1,499. Government fees for GST registration are nil — there are no government charges for obtaining a GSTIN. The fee covers professional assistance, document preparation, Aadhaar OTP authentication, and tracking until GSTIN is issued.",
      },
    },
    {
      "@type": "Question",
      name: "How long does GST registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST registration typically takes 3–7 working days after submission of all documents. If Aadhaar-based authentication is completed, GSTIN can be allotted within 3 working days. In some cases, the GST officer may issue a notice for additional documents under Section 26(2), which can extend the timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Who is required to register under GST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any business with aggregate annual turnover exceeding ₹40 lakh (₹20 lakh for service providers; ₹10 lakh in special category states) must register under GST. Additionally, e-commerce operators, inter-state suppliers, casual taxable persons, NRIs making taxable supplies, and importers must register regardless of turnover.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between GSTR-1 and GSTR-3B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSTR-1 is an outward supply return where you report all sales invoices and debit/credit notes made during the month or quarter. GSTR-3B is a summary self-declaration return where you declare net GST liability and pay taxes. GSTR-1 affects the Input Tax Credit (ITC) available to your buyers in GSTR-2B, while GSTR-3B is used for actual GST payment.",
      },
    },
    {
      "@type": "Question",
      name: "What is GST LUT and who should file it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LUT stands for Letter of Undertaking under Rule 96A of the CGST Rules. Exporters who want to export goods or services without paying IGST (i.e., zero-rated exports without payment of tax) must file LUT annually on the GST portal before making such exports. LUT must be renewed every financial year.",
      },
    },
    {
      "@type": "Question",
      name: "Can Taxvio handle my GST notice reply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Taxvio's CA team drafts professional responses to all types of GST notices including ASMT-10, DRC-01, SCN, notices for mismatch in GSTR-1 vs GSTR-3B, ITC reversal demands, and notices under Section 61, 73, and 74 of the CGST Act. We also represent clients in personal hearing proceedings.",
      },
    },
  ],
};

// ─── GST Services data ────────────────────────────────────────────────────────
const GST_SERVICES = [
  {
    title: "GST Registration",
    href: "/serviceslist/gst/gst-registration",
    price: "₹999",
    badge: "Most Popular",
    badgeColor: "#16a34a",
    desc: "New GSTIN for businesses, startups, professionals, and e-commerce sellers. Includes document preparation, Aadhaar OTP, and tracking.",
    icon: "🏢",
  },
  {
    title: "GST Return Filing",
    href: "/serviceslist/gst/gst-return",
    price: "₹499/month",
    badge: "High Demand",
    badgeColor: "#2563eb",
    desc: "Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation, QRMP scheme management, and late fee prevention.",
    icon: "📋",
  },
  {
    title: "GSTR-9 Annual Return",
    href: "/serviceslist/gst/gstr-9",
    price: "₹2,999",
    badge: "Deadline Alert",
    badgeColor: "#dc2626",
    desc: "Comprehensive annual GST reconciliation and GSTR-9/GSTR-9C filing with turnover matching and ITC verification.",
    icon: "📊",
  },
  {
    title: "GST Refund",
    href: "/serviceslist/gst/gst-refund",
    price: "₹2,499",
    badge: "",
    badgeColor: "",
    desc: "Export refund under LUT/IGST route, inverted duty structure refund, excess cash ledger refund, and ITC refund claims.",
    icon: "💰",
  },
  {
    title: "GST LUT Filing",
    href: "/serviceslist/gst/gst-lut",
    price: "₹999",
    badge: "Exporters",
    badgeColor: "#7c3aed",
    desc: "Annual LUT filing on GST portal enabling zero-rated export of goods and services without payment of IGST.",
    icon: "✈️",
  },
  {
    title: "GST Notice Reply",
    href: "/serviceslist/gst/gst-notice-reply",
    price: "₹1,999",
    badge: "Urgent",
    badgeColor: "#ea580c",
    desc: "Professional drafting for ASMT-10, DRC-01, SCN, Section 61/73/74 notices with personal hearing representation.",
    icon: "⚖️",
  },
  {
    title: "GST Amendment",
    href: "/serviceslist/gst/gst-amendment",
    price: "₹799",
    badge: "",
    badgeColor: "",
    desc: "Update GST registration details: business address, trade name, bank account, additional place of business, partners/directors.",
    icon: "✏️",
  },
  {
    title: "GST Cancellation",
    href: "/serviceslist/gst/gst-cancellation",
    price: "₹1,499",
    badge: "",
    badgeColor: "",
    desc: "Voluntary GSTIN cancellation and revocation of cancelled registration with final return (GSTR-10) filing.",
    icon: "❌",
  },
  {
    title: "GST E-Invoicing",
    href: "/serviceslist/gst/gst-e-invoicing",
    price: "₹1,999",
    badge: "Mandatory >₹5Cr",
    badgeColor: "#0891b2",
    desc: "IRN generation setup, QR code compliance, ERP/accounting software integration, and e-invoice API configuration.",
    icon: "🔗",
  },
  {
    title: "GST Audit Assistance",
    href: "/serviceslist/gst/gst-audit",
    price: "₹3,999",
    badge: "",
    badgeColor: "",
    desc: "Departmental audit handling, GST audit under Section 65/66, reconciliation of books with GST returns, and representation.",
    icon: "🔍",
  },
  {
    title: "GSTIN Verification",
    href: "/serviceslist/gst/gst-search",
    price: "Free",
    badge: "Free",
    badgeColor: "#059669",
    desc: "Verify supplier GSTIN authenticity, check filing status, validate business details before entering into contracts.",
    icon: "✅",
  },
];

const STATS = [
  { value: "4,800+", label: "GST Clients Served" },
  { value: "3–7", label: "Days Registration" },
  { value: "₹999", label: "Registration Fee" },
  { value: "4.9★", label: "Client Rating" },
];

const PHONE = "918937980366";
const WA_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST services.")}`;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GSTMainPage() {
  return (
    <>
      <Script id="gst-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden text-white"
          style={{ background: "linear-gradient(135deg, #00416a 0%, #003257 55%, #001e36 100%)" }}
          aria-label="GST Services India — Hero"
          itemScope itemType="https://schema.org/Service"
        >
          {/* Radial glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 65%)" }} />

          {/* Dot matrix pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li className="text-white font-medium">GST Services</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  CA-Assisted · 100% Online · Pan India
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.12] tracking-tight text-white" itemProp="name">
                  Complete GST Services &amp; Compliance Solutions
                  <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                    for Businesses Across India
                  </span>
                </h1>

                <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                  From GST registration and monthly return filing to annual GSTR-9, export LUT, e-invoicing setup, refund claims, and notice replies — Taxvio's CA team handles every aspect of your GST compliance, 100% online.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-[#00416a] px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                    Get Free GST Consultation →
                  </Link>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                    💬 WhatsApp Now
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["✅ GSTIN in 3–7 Days", "✅ Starting ₹1,499", "✅ No Hidden Charges", "✅ All States Covered"].map(t => (
                    <span key={t} className="rounded-full px-4 py-1.5 text-sm"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats column */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="rounded-2xl p-6 text-center"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <p className="text-3xl font-extrabold text-white">{value}</p>
                    <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES GRID ════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="All GST Services">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                All GST Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4">
                11 GST Services — Registration to Compliance
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Every GST need — from day-one registration to annual returns, export LUT, e-invoicing, refund claims, notice replies, and audit support — handled by our CA-led team.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {GST_SERVICES.map(({ title, href, price, badge, badgeColor, desc, icon }) => (
                <Link key={title} href={href}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  itemScope itemType="https://schema.org/Service">
                  {badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold text-white px-2 py-0.5 rounded-full uppercase tracking-wide"
                      style={{ background: badgeColor }}>
                      {badge}
                    </span>
                  )}
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-extrabold text-gray-800 group-hover:text-[#00416a] transition text-base leading-tight mb-2" itemProp="name">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1" itemProp="description">{desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-[#00416a] text-sm">{price}</span>
                    <span className="text-[#00416a] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY TAXVIO STRIP ═════════════════════════════════════════════════ */}
        <section className="py-14" style={{ background: "#00416a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              {[
                { icon: "🧑‍⚖️", title: "CA-Led Team", sub: "Not software — real experts" },
                { icon: "📱", title: "100% Online", sub: "No office visit needed" },
                { icon: "⚡", title: "Fast Delivery", sub: "GSTIN in 3–7 working days" },
                { icon: "🔒", title: "Confidential", sub: "Secure document handling" },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{icon}</span>
                  <p className="font-bold text-sm">{title}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SEO CONTENT — 1500+ WORDS ════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="GST Compliance Guide India">
          <div className="max-w-4xl mx-auto px-6 space-y-12">

            {/* Block 1 — What is GST */}
            <div itemScope itemType="https://schema.org/Article">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST and Why Does Compliance Matter for Your Business?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" itemProp="articleBody">
                <p>
                  <strong>Goods and Services Tax (GST)</strong> is a unified, destination-based indirect tax levied on the supply of goods and services across India. Introduced on 1 July 2017, GST replaced a complex web of central and state levies — Central Excise Duty, Service Tax, VAT, CST, Entry Tax, Octroi, and several others — with a single, streamlined tax framework structured around four rates: 5%, 12%, 18%, and 28%.
                </p>
                <p>
                  For businesses, GST compliance is not optional — it is a legal obligation enforced by the <strong>Central Board of Indirect Taxes &amp; Customs (CBIC)</strong>. Non-compliance leads to interest on late payment at 18% per annum, late fees of ₹50 per day (₹20 for nil returns), blocking of Input Tax Credit (ITC), and in serious cases, suspension or cancellation of GSTIN and even prosecution under Sections 122 and 132 of the CGST Act.
                </p>
                <p>
                  Beyond avoiding penalties, accurate GST compliance directly impacts your <strong>Input Tax Credit</strong> — the mechanism by which you reclaim GST paid on purchases from the tax you collect on sales. Every mismatch between your GSTR-1 and your buyer's GSTR-2B, or between your purchases and GSTR-3B, reduces your ITC claim and increases your net tax outgo. Precise, timely compliance is therefore both a legal requirement and a direct financial benefit.
                </p>
              </div>
            </div>

            {/* Block 2 — GST Registration */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                GST Registration in India — Who Needs It, Threshold Limits &amp; How to Apply
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST registration</strong> is mandatory for any business whose aggregate annual turnover exceeds ₹40 lakh (₹20 lakh for service providers; ₹10 lakh in specified special category states including Jammu &amp; Kashmir, Himachal Pradesh, Uttarakhand, and northeastern states). Registration is also compulsory — regardless of turnover — for e-commerce operators, inter-state suppliers of goods, casual taxable persons, non-resident taxable persons, importers, and anyone required to pay tax under the reverse charge mechanism.
                </p>
                <p>
                  The GST registration process is entirely online through the <strong>GST Common Portal (gst.gov.in)</strong>. The application (Form REG-01) requires details including PAN, Aadhaar, business constitution, principal place of business address proof, bank account details, and authorised signatory details. Upon successful Aadhaar authentication, GSTIN can be allotted within <strong>3 working days</strong>. In cases where documents need verification, a GST officer may issue a notice (FORM REG-03) within 3 working days, and registration is completed within 7 working days after the applicant's response.
                </p>
                <p>
                  Once registered, a business receives a <strong>15-digit GSTIN</strong> — the first two digits represent the state code, the next ten represent the PAN, and the remaining three are entity and checksum codes. Taxvio manages the entire registration process — from document collection and GSTD preparation to Aadhaar OTP assistance, officer query response, and GSTIN delivery — at a professional fee starting at just ₹1,499.
                </p>
              </div>
            </div>

            {/* Block 3 — Returns */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                GST Return Filing — GSTR-1, GSTR-3B, GSTR-9 &amp; QRMP Scheme Explained
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Every GST-registered business is required to file periodic returns. The <strong>GSTR-1</strong> return captures all outward supplies (sales) made during a tax period. For monthly filers, GSTR-1 is due on the 11th of the following month; quarterly filers (under the QRMP scheme) file on the 13th of the month following the quarter. <strong>GSTR-3B</strong> is a monthly or quarterly self-declaration return where you summarise net GST liability, claim ITC, and make the actual tax payment. For most businesses, GSTR-3B is due on the 20th of the following month.
                </p>
                <p>
                  The <strong>QRMP (Quarterly Return Monthly Payment)</strong> scheme, available to taxpayers with aggregate turnover up to ₹5 crore, allows quarterly filing of GSTR-1 and GSTR-3B while making monthly tax payments through a simplified challan. This reduces the compliance burden significantly while ensuring monthly cash flow to the government. Selecting and managing the QRMP scheme correctly requires understanding B2B vs B2C invoice reporting and Invoice Filing Facility (IFF) usage for GSTR-1 in months 1 and 2 of each quarter.
                </p>
                <p>
                  The <strong>GSTR-9 Annual Return</strong> is a comprehensive reconciliation of all monthly/quarterly returns filed during a financial year. It reconciles outward supplies (as per GSTR-1) with tax payments (as per GSTR-3B), and ITC claimed against GSTR-2A/2B. Taxpayers with turnover above ₹5 crore must also file <strong>GSTR-9C</strong> — a reconciliation statement certified by a Chartered Accountant. Errors in GSTR-9 can trigger departmental scrutiny, so professional assistance is strongly recommended.
                </p>
                <p>
                  Taxvio's GST return filing service covers GSTR-1, GSTR-3B, QRMP management, IFF filing, GSTR-9 and GSTR-9C preparation — with proactive reminders, reconciliation reports, and late fee prevention monitoring, starting at ₹499/month.
                </p>
              </div>
            </div>

            {/* Block 4 — Refund + LUT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                GST Refund Claims &amp; LUT Filing for Exporters
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Exporters and businesses with an inverted tax structure (where the GST rate on inputs is higher than the rate on output supplies) are entitled to claim refunds of unutilised ITC from the government. <strong>GST refund</strong> applications are filed through Form RFD-01 on the GST portal and must typically be filed within 2 years from the relevant date. The GST officer is required to process refund applications within 60 days; if not processed within 60 days, interest at 6% becomes payable.
                </p>
                <p>
                  Exporters have two routes for zero-rated supplies: the <strong>IGST route</strong> (pay IGST on exports and claim refund from ICEGATE) or the <strong>LUT route</strong> (export without payment of IGST under a Letter of Undertaking). The LUT route is generally preferred as it preserves working capital. Under Rule 96A of the CGST Rules, eligible exporters — registered taxpayers other than those with prosecution cases — can file LUT annually on the GST portal. The LUT must be filed for each financial year before making the export supply.
                </p>
                <p>
                  Taxvio handles GST refund applications for export refunds, inverted duty structure refunds, excess cash ledger refunds, and refunds on account of finalisation of provisional assessment — along with annual LUT filing to enable seamless zero-rated exports.
                </p>
              </div>
            </div>

            {/* Block 5 — Notice + Audit */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                GST Notices, Audits &amp; Departmental Proceedings — How Taxvio Helps
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The GST department issues several types of notices and initiates scrutiny of returns through the automated compliance management system. Common notices include <strong>ASMT-10</strong> (scrutiny notice pointing out discrepancies in returns), <strong>DRC-01A/01</strong> (pre-notice intimation and demand for tax), notices under <strong>Section 61</strong> (return scrutiny), and <strong>Section 73/74</strong> (demand for tax not paid or short paid). Ignoring GST notices leads to ex-parte orders and demand crystallisation with interest and penalty.
                </p>
                <p>
                  Departmental <strong>GST audits</strong> under Section 65 (officer audit) and Section 66 (special audit by CA/Cost Accountant) require businesses to provide complete books of accounts, invoices, contracts, and reconciliation statements. Taxvio's CA team assists in audit preparation, drafts responses to audit queries, prepares reconciliation of ITC as per books vs GSTR-2A/2B, and represents clients in personal hearings before the GST officer.
                </p>
                <p>
                  <strong>E-invoicing</strong> under the GST framework is now mandatory for all businesses with aggregate annual turnover exceeding ₹5 crore (as of August 2023). Under the e-invoicing mandate, specified taxpayers must upload B2B invoices to the <strong>Invoice Registration Portal (IRP)</strong> and obtain an <strong>Invoice Reference Number (IRN)</strong> and QR code before issuing the invoice. Taxvio helps businesses set up e-invoicing — including API integration with accounting software like Tally, Zoho, Busy, and others — and manages ongoing IRN generation compliance.
                </p>
              </div>
            </div>

            {/* Block 6 — Taxvio Advantage */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                Why Choose Taxvio for GST Compliance Services?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Taxvio is a <strong>CA-assisted online tax and compliance consultancy</strong> headquartered in Khatauli, Muzaffarnagar, Uttar Pradesh, serving 4,800+ businesses and individuals across all states in India. Unlike software-only platforms, Taxvio combines professional CA expertise with a seamless, 100% online process — giving you both accuracy and convenience.
                </p>
                <p>
                  Our GST practice covers the complete compliance lifecycle: registration → monthly/quarterly returns → annual GSTR-9 → ITC reconciliation → refund claims → notice replies → audit support → e-invoicing. All services are delivered online — you share documents via WhatsApp or email, our team prepares and files, and you receive confirmation with acknowledgement.
                </p>
                <p>
                  We serve a wide range of clients: proprietors and traders registering for GST for the first time, exporters filing LUT and claiming IGST refunds, e-commerce sellers on Amazon/Flipkart managing multiple-state GST compliance, manufacturing firms managing ITC on capital goods, service providers under the QRMP scheme, and enterprises receiving GST audit notices. Regardless of size or complexity, Taxvio delivers accurate, timely, and affordable GST compliance support.
                </p>
                <p>
                  Our pricing is transparent — ₹1,499 for registration, ₹499/month for return filing, ₹2,999 for GSTR-9, ₹999 for LUT, ₹1,999 for notice replies — with no hidden charges and no surprises. For businesses requiring comprehensive annual support, we offer bundled GST compliance packages covering registration, monthly returns, annual return, and notice handling under a single annual retainer.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ══ GST COMPLIANCE CHECKLIST ═════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                Quick Reference
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                GST Return Due Dates &amp; Compliance Calendar 2024–25
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm" aria-label="GST Return Due Dates">
                <thead>
                  <tr style={{ background: "#00416a" }}>
                    <th className="text-left px-5 py-4 text-white font-semibold">Return / Form</th>
                    <th className="text-left px-5 py-4 text-white font-semibold">Who Files</th>
                    <th className="text-left px-5 py-4 text-white font-semibold">Due Date</th>
                    <th className="text-left px-5 py-4 text-white font-semibold">Late Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["GSTR-1 (Monthly)", "Turnover > ₹5 Cr", "11th of next month", "₹50/day (₹20 nil)"],
                    ["GSTR-1 (Quarterly / QRMP)", "Turnover ≤ ₹5 Cr", "13th of month after quarter", "₹50/day (₹20 nil)"],
                    ["GSTR-3B (Monthly)", "Monthly filers", "20th of next month", "₹50/day + 18% interest"],
                    ["GSTR-3B (Quarterly)", "QRMP filers", "22nd/24th after quarter", "₹50/day + 18% interest"],
                    ["GSTR-9 (Annual)", "All registered (turnover > ₹2 Cr)", "31st December", "₹200/day"],
                    ["GSTR-9C (Reconciliation)", "Turnover > ₹5 Cr", "31st December", "Per GSTR-9 late fee"],
                    ["GSTR-10 (Final)", "After cancellation", "3 months from cancellation", "₹200/day"],
                    ["LUT Filing", "Exporters (zero-rated)", "Before first export of FY", "—"],
                  ].map(([form, who, due, fee], i) => (
                    <tr key={form} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3.5 font-semibold text-[#00416a]">{form}</td>
                      <td className="px-5 py-3.5 text-gray-600">{who}</td>
                      <td className="px-5 py-3.5 text-gray-600">{due}</td>
                      <td className="px-5 py-3.5 text-red-600 font-medium text-xs">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Due dates subject to CBIC notifications. Check gst.gov.in for latest extensions.
            </p>
          </div>
        </section>

        {/* ══ FAQ ═════════════════════════════════════════════════════════════= */}
        <section className="py-20 bg-white" aria-label="GST Frequently Asked Questions"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                Frequently Asked Questions — GST Services
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Detailed answers to the most common GST registration and compliance questions.
              </p>
            </div>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6"
                  itemScope itemType="https://schema.org/Question">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-start gap-3" itemProp="name">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#00416a] text-white text-xs flex items-center justify-center font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {faq.name}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p className="text-gray-600 text-sm leading-relaxed pl-9" itemProp="text">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═══════════════════════════════════════════════════════ */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #00416a 0%, #003257 55%, #001e36 100%)" }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)" }} />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
              ⚡ We reply within 15 minutes on WhatsApp
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Sort Your GST Compliance?
            </h2>
            <p className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Whether you need a fresh GST registration, ongoing return filing, or resolution of a GST notice — our CA team is ready. Starting at ₹1,499.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#00416a] px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                Book Free Consultation →
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                💬 WhatsApp Us — Free
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              <span>🔒 100% Confidential</span>
              <span>🧑‍⚖️ CA-Assisted</span>
              <span>📱 100% Online</span>
              <span>⭐ 4.9★ Rated</span>
            </div>
          </div>
        </section>

        <Footar />
      </main>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
        style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <Link href="/contact"
          className="inline-flex items-center gap-2 bg-white text-[#00416a] px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
          Free GST Consultation
        </Link>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
          💬 WhatsApp Now
        </a>
      </div>
    </>
  );
}