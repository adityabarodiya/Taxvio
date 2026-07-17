 // app/state/madhya-pradesh/gst-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  Globe, CheckCircle, Building2, Receipt, Landmark, Calculator,
  ChevronRight, AlertCircle, RefreshCw, Package, Search,
} from "lucide-react";
import { MP_CITIES, MP_REGIONS, slugifyCity } from "@/data/mp-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST Registration & Return Filing in Madhya Pradesh | Taxvio",
  description:
    "CA-assisted GST registration, GSTR-1, GSTR-3B & GSTR-9 filing, GST LUT for exporters, refund, notice reply, e-invoicing and GST for e-commerce sellers across all 55 districts and 300+ cities of Madhya Pradesh. 100% online, starting ₹999.",
  keywords: [
    "GST registration Madhya Pradesh",
    "GST return filing MP",
    "GSTIN MP districts",
    "GST consultant Madhya Pradesh",
    "GSTR-1 GSTR-3B MP",
    "GST annual return MP",
    "GST notice reply MP",
    "GST LUT filing MP",
    "online GST Madhya Pradesh",
    "CA GST services MP",
    "GST registration Indore Bhopal",
    "GST filing Jabalpur Gwalior",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/madhya-pradesh/gst-services" },
  openGraph: {
    title: "GST Registration & Return Filing in Madhya Pradesh | Taxvio",
    description:
      "CA-assisted GST registration, GSTR filing, LUT, refund & notice reply across 300+ MP cities — 100% online, from ₹999.",
    url: "https://www.taxvio.in/state/madhya-pradesh/gst-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Services in Madhya Pradesh | Taxvio",
    description: "GST registration, GSTR-1/3B/9, LUT, refund & notice reply across MP — from ₹999.",
  },
  robots: { index: true, follow: true },
};

/* ─── GST Service Cards Data ───────────────────────────────────────────────── */
const GST_SERVICES = [
  {
    slug: "gst-registration",
    title: "GST Registration",
    icon: "🧾",
    price: "₹999",
    timeline: "3–7 Days",
    gradient: "from-emerald-500 to-teal-600",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    accentBorder: "border-emerald-100",
    desc: "End-to-end GSTIN registration for proprietors, partnerships, LLPs, and companies across all 55 MP districts — with Aadhaar OTP verification and document support.",
    features: ["All business types", "Aadhaar OTP e-KYC", "3–7 working days", "Amendment support"],
  },
  {
    slug: "gst-return",
    title: "GST Return Filing",
    icon: "📄",
    price: "₹999/mo",
    timeline: "11th & 20th",
    gradient: "from-blue-500 to-indigo-600",
    accentBg: "bg-blue-50",
    accentText: "text-blue-700",
    accentBorder: "border-blue-100",
    desc: "Monthly GSTR-1 and GSTR-3B filing with ITC reconciliation against GSTR-2B — ensuring zero mismatch notices for MP businesses.",
    features: ["GSTR-1 / GSTR-3B", "GSTR-2B reconciliation", "QRMP scheme", "RCM compliance"],
  },
  {
    slug: "gstr-9",
    title: "GST Annual Return (GSTR-9)",
    icon: "📅",
    price: "₹2,999",
    timeline: "31st Dec",
    gradient: "from-amber-500 to-orange-600",
    accentBg: "bg-amber-50",
    accentText: "text-amber-700",
    accentBorder: "border-amber-100",
    desc: "Full-year GSTR-1 vs GSTR-3B reconciliation, ITC eligibility review, and GSTR-9C audit statement (for ₹5Cr+ turnover) filed by experienced CAs.",
    features: ["12-month reconciliation", "ITC final review", "GSTR-9C audit statement", "Prior-year corrections"],
  },
  {
    slug: "gst-lut",
    title: "GST LUT Filing",
    icon: "📤",
    price: "₹999/yr",
    timeline: "Before April 1",
    gradient: "from-teal-500 to-cyan-600",
    accentBg: "bg-teal-50",
    accentText: "text-teal-700",
    accentBorder: "border-teal-100",
    desc: "Annual Letter of Undertaking (Form RFD-11) for exporters to supply goods and services without IGST payment — essential for software and service exporters in Indore and Bhopal.",
    features: ["Form RFD-11 filing", "Export without IGST", "SEZ supplies", "Annual renewal"],
  },
  {
    slug: "gst-refund",
    title: "GST Refund Application",
    icon: "💰",
    price: "₹2,999",
    timeline: "60–90 Days",
    gradient: "from-sky-500 to-blue-600",
    accentBg: "bg-sky-50",
    accentText: "text-sky-700",
    accentBorder: "border-sky-100",
    desc: "Export IGST refund, inverted duty structure refund (critical for MP's textile, agro-processing and soybean sectors), and excess cash ledger refund — end-to-end via RFD-01.",
    features: ["Export IGST refund", "Inverted duty structure", "Excess cash ledger", "RFD-01 filing"],
  },
  {
    slug: "gst-notice-reply",
    title: "GST Notice Reply & Compliance",
    icon: "⚖️",
    price: "₹1,999",
    timeline: "30-Day Window",
    gradient: "from-rose-500 to-red-600",
    accentBg: "bg-rose-50",
    accentText: "text-rose-700",
    accentBorder: "border-rose-100",
    desc: "ASMT-10 scrutiny notice and DRC-01 demand notice reply — with detailed written responses, ITC reconciliation support, and representation before MP Commercial Tax officers.",
    features: ["ASMT-10 reply", "DRC-01 / DRC-01A", "ITC mismatch resolution", "Personal hearing"],
  },
  {
    slug: "gst-cancellation",
    title: "GST Cancellation & Revocation",
    icon: "❌",
    price: "₹999",
    timeline: "7–14 Days",
    gradient: "from-gray-500 to-slate-600",
    accentBg: "bg-gray-50",
    accentText: "text-gray-700",
    accentBorder: "border-gray-100",
    desc: "Voluntary cancellation (REG-16), GSTR-10 final return, ITC reversal on closing stock, and revocation of suo motu cancelled GSTINs — fully managed online.",
    features: ["REG-16 filing", "GSTR-10 final return", "Stock ITC reversal", "Suo motu revocation"],
  },
  {
    slug: "gst-amendment",
    title: "GST Amendment / Update",
    icon: "✏️",
    price: "₹999",
    timeline: "3–7 Days",
    gradient: "from-violet-500 to-purple-600",
    accentBg: "bg-violet-50",
    accentText: "text-violet-700",
    accentBorder: "border-violet-100",
    desc: "Core and non-core GST registration amendments — address changes, additional places of business, change in business name, or partner/director updates across all MP districts.",
    features: ["Core field amendment", "Non-core field update", "Additional place of business", "Approval tracking"],
  },
  {
    slug: "gst-e-invoicing",
    title: "GST E-Invoicing Setup & Compliance",
    icon: "📱",
    price: "₹999",
    timeline: "1–2 Days Setup",
    gradient: "from-indigo-500 to-blue-600",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-700",
    accentBorder: "border-indigo-100",
    desc: "IRP registration, IRN and QR code generation setup, accounting software integration (Tally/Busy/ERP), and e-way bill management for MP businesses above ₹5Cr turnover.",
    features: ["IRP registration", "IRN / QR code setup", "Software integration", "E-way bill management"],
  },
  {
    slug: "gst-search",
    title: "GSTIN Search & Verification",
    icon: "🔍",
    price: "₹199",
    timeline: "Same Day",
    gradient: "from-cyan-500 to-teal-600",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-700",
    accentBorder: "border-cyan-100",
    desc: "Real-time GSTIN verification — legal name, registration status, taxpayer type, jurisdiction, and return filing status — for vendor due diligence and ITC eligibility checks.",
    features: ["GSTIN status check", "Legal name verification", "Taxpayer type & jurisdiction", "Fraud prevention"],
  },
  {
    slug: "gst-for-e-commerce",
    title: "GST for E-Commerce Sellers",
    icon: "🛒",
    price: "₹1,999",
    timeline: "Ongoing",
    gradient: "from-orange-500 to-amber-600",
    accentBg: "bg-orange-50",
    accentText: "text-orange-700",
    accentBorder: "border-orange-100",
    desc: "Complete GST compliance for Amazon, Flipkart, Meesho, Shopify and D2C sellers — marketplace reconciliation, TCS credit matching (Section 52), GSTR-8, and Zomato/Swiggy Section 9(5) advisory.",
    features: ["Marketplace reconciliation", "TCS credit matching", "GSTR-8 for ECOs", "Section 9(5) advisory"],
  },
  {
    slug: "gst-for-freelancers",
    title: "GST for Freelancers & Professionals",
    icon: "💻",
    price: "₹1,999",
    timeline: "Ongoing",
    gradient: "from-pink-500 to-rose-600",
    accentBg: "bg-pink-50",
    accentText: "text-pink-700",
    accentBorder: "border-pink-100",
    desc: "GST registration, LUT filing for zero-rated foreign client billing, SAC code mapping, GSTR-1/3B, ITC on business tools, and RCM review for IT developers, consultants and designers.",
    features: ["LUT for foreign billing", "SAC code mapping", "ITC on tools & software", "RCM review"],
  },
];

/* ─── SEO Sections — 300+ words, AI Overview optimised ────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "GST Registration in Madhya Pradesh — Who Needs It & How to Apply",
    body: `GST registration is mandatory for every business in Madhya Pradesh that crosses the annual turnover threshold — ₹40 lakh for goods suppliers and ₹20 lakh for service providers — or engages in interstate supply, e-commerce selling, or notified categories requiring mandatory registration regardless of turnover. Without a valid GSTIN, businesses in MP cannot legally issue tax invoices, charge GST on sales, claim Input Tax Credit on purchases, or participate in B2B supply chains where buyers require GST invoices for ITC claims.

Madhya Pradesh's economy is highly diverse — spanning Indore's pharmaceutical and garment manufacturing clusters, Bhopal's government services and IT sector, Jabalpur's cement and defence manufacturing, Pithampur's industrial area (one of India's major auto-component zones), Ujjain's religious tourism and small-scale manufacturing, Soybean and agro-processing across the Malwa plateau, forest-based produce and tribal economy in Balaghat, Mandla, Dindori, and Alirajpur, and soybean, wheat, and gram commodity trading across Ujjain, Sagar, and Rewa divisions.

Taxvio's CA team provides GST registration across all 55 districts and 10 divisions of Madhya Pradesh — covering every business type including proprietors, Hindu Undivided Families (HUFs), partnerships, LLPs, private limited companies, trust-managed organisations, and casual taxable persons. GST registration in MP is processed on the central GST portal (gst.gov.in) with Aadhaar OTP-based e-verification, and GSTINs are typically allotted within 3–7 working days. For businesses with multiple locations across MP — a factory in Pithampur and a trading office in Indore, or a manufacturing unit in Betul and warehouses in Bhopal — we handle Additional Place of Business registration in a single consolidated application.

Post-registration, Taxvio ensures every newly registered MP business understands its filing obligations: whether to opt for the regular scheme or the Composition Scheme (available for goods traders and manufacturers below ₹1.5 crore turnover), which GSTIN to quote on which type of supply, how to configure GST on accounting software, and what the monthly due dates are for GSTR-1 and GSTR-3B.`,
  },
  {
    heading: "GST Return Filing in Madhya Pradesh — GSTR-1, GSTR-3B & GSTR-9",
    body: `Every GST-registered business in Madhya Pradesh has three primary return filing obligations: GSTR-1 (outward supply statement, due by the 11th of the following month), GSTR-3B (monthly summary return with net tax payment, due by the 20th), and GSTR-9 (annual return, due by 31st December for the preceding financial year). For businesses enrolled under the QRMP (Quarterly Return Monthly Payment) scheme — available for taxpayers with annual turnover up to ₹5 crore — GSTR-1 is filed quarterly (by the 13th of the month after each quarter) with optional IFF (Invoice Furnishing Facility) for the first two months of each quarter.

The most critical compliance discipline for MP businesses is GSTR-2B reconciliation before every GSTR-3B filing. GSTR-2B is the auto-populated Input Tax Credit statement generated from suppliers' GSTR-1 filings — it shows exactly how much ITC is available to claim in a given month. Under Rule 36(4), ITC claimed in GSTR-3B cannot exceed 105% of GSTR-2B eligible ITC, and any excess claim triggers DRC-01A pre-demand intimation from the GST department. Taxvio's return filing process for MP businesses always begins with GSTR-2B reconciliation — identifying missing supplier invoices, incorrect GSTINs, and rate discrepancies before filing, so our clients never receive ITC mismatch notices.

For GSTR-9 (annual return), Taxvio provides a complete 12-month reconciliation — cross-verifying annual outward turnover between GSTR-1 and GSTR-3B, finalising ITC claims against GSTR-2B, identifying any ITC reversals required under Rule 42/43 (for exempt or personal-use inputs), and computing any unpaid tax liability with interest and late fee. For MP businesses with annual turnover above ₹5 crore, the GSTR-9C reconciliation statement (requiring CA certification) is also prepared and filed — comparing audited financial statement figures with GSTR-9 data for completeness and accuracy.`,
  },
  {
    heading: "GST for Madhya Pradesh's Key Industries — Soybean, Pharma, E-Commerce & Exports",
    body: `Madhya Pradesh has several industry clusters with GST compliance requirements that go beyond standard monthly return filing — requiring specialised knowledge of ITC chain management, inverted duty structures, export procedures, and sector-specific GST provisions.

Agro-processing and soybean sector businesses in Malwa, Ujjain, and Dewas districts face a persistent inverted duty structure issue — the GST rate on finished soy oil (5%) is lower than the GST on inputs like packaging materials, chemical solvents, and capital goods (12–18%). This accumulated ITC is eligible for refund under Section 54(3) of the CGST Act via Form RFD-01. Taxvio helps agro-processing businesses in Ujjain, Dewas, Mandsaur, and Ratlam districts calculate and claim their inverted duty refunds correctly — often representing significant working capital recovery.

Pharmaceutical companies in Pithampur's industrial corridor and IT/software exporters in Indore and Bhopal have LUT (Letter of Undertaking) as a critical annual filing requirement. Without a valid LUT, exports must be made on payment of IGST and the refund claimed later — blocking working capital unnecessarily. Taxvio handles LUT filing (Form RFD-11) for all MP exporters before each financial year's April 1 deadline.

E-commerce sellers from MP — selling on Amazon, Flipkart, Meesho, or D2C through Shopify — face unique GST compliance challenges including marketplace settlement reconciliation, TCS credit matching from GSTR-2B (marketplace operators deduct 1% TCS under Section 52), and GSTR-1 invoice-level reporting that must match the platform's settlement reports. Taxvio provides end-to-end GST compliance for MP's growing e-commerce community, ensuring settlement data matches return data and TCS credits are accurately claimed every month.

Freelancers and independent professionals in Indore's growing IT and consulting sector who bill foreign clients need LUT filing and zero-rated export invoice setup under IGST — plus RCM compliance for foreign software subscriptions (AWS, Google Workspace, Adobe CC) and clarity on ITC eligibility for business tools and home-office expenses.`,
  },
  {
    heading: "GST Notices in Madhya Pradesh — ASMT-10, DRC-01 & How Taxvio Resolves Them",
    body: `GST notices are increasingly common for Madhya Pradesh businesses as the Commercial Tax Department integrates GSTN data analytics into its scrutiny process. The MP GST department uses system-generated ASMT-10 scrutiny notices to flag discrepancies between filed returns — typically ITC claimed in GSTR-3B that exceeds the amount auto-populated in GSTR-2B, outward turnover mismatch between GSTR-1 and GSTR-3B, or annual GSTR-9 data inconsistent with the total of monthly filings.

ASMT-10 requires a written reply within 30 days — failure to respond leads to a best-judgement assessment order under Section 62, which creates a demand that is far harder to set aside than a well-drafted ASMT-10 reply. DRC-01 (demand notice) is the most serious GST notice, demanding tax, 18% per annum interest from the original due date, and penalty of 10% to 100% of the tax amount depending on whether the section invoked is 73 (without fraud intent) or 74 (with intent to evade).

Taxvio's CA team handles GST notice replies for Madhya Pradesh businesses with a structured process: complete analysis of the notice and the specific rule or section invoked, a review of all filed returns and underlying purchase/sales registers to understand the root cause, preparation of a detailed written reply with evidence annexures (reconciliation statements, purchase invoices, bank statements, supplier confirmation), and where required, personal hearing representation before the GST officer at the relevant Commercial Tax office across Bhopal, Indore, Jabalpur, Gwalior, or any other MP district headquarters. We have successfully resolved ITC mismatch notices, turnover discrepancy notices, and DRC-01 demands for businesses across all 10 divisions of Madhya Pradesh.`,
  },
];

/* ─── FAQ Data ─────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is the cost of GST registration in Madhya Pradesh?",
    a: "GST registration in Madhya Pradesh through Taxvio starts at ₹999 (professional fees). Government fees for GST registration on the GST portal are nil. Your GSTIN is typically issued within 3–7 working days of submitting complete documents including PAN, Aadhaar, address proof, bank details, and business photograph.",
  },
  {
    q: "What is the GST return filing due date for MP businesses?",
    a: "GSTR-1 is due by the 11th of the following month (or 13th for quarterly QRMP filers). GSTR-3B is due by the 20th of the following month (or via PMT-06 challan for QRMP filers). GSTR-9 annual return is due by 31st December each year for the preceding financial year.",
  },
  {
    q: "Which GST office / jurisdiction covers Madhya Pradesh?",
    a: "Madhya Pradesh has its own state GST administration under the Commercial Tax Department, Government of MP (CTD MP). Central GST is administered by CBIC's Bhopal Zone, which covers Bhopal, Indore, Jabalpur, and Gwalior commissionerates. State GST enforcement is handled by district-level commercial tax offices across all 55 MP districts.",
  },
  {
    q: "Do soybean and agro-processing businesses in MP get GST refunds?",
    a: "Yes. Agro-processing businesses in Madhya Pradesh (soybean crushing, oil refining, pulses processing) often have an inverted duty structure — inputs taxed at 12–18% GST vs outputs at 5%. Accumulated ITC on such inputs is eligible for refund under Section 54(3) via Form RFD-01. Taxvio handles these refund applications for businesses in Ujjain, Dewas, Mandsaur, Ratlam, and other MP processing belts.",
  },
  {
    q: "Is GST registration required for e-commerce sellers in Madhya Pradesh?",
    a: "Yes. E-commerce sellers on Amazon, Flipkart, Meesho, or any electronic commerce operator are mandatorily required to register for GST regardless of annual turnover — the normal ₹40 lakh / ₹20 lakh threshold exemption does not apply to e-commerce sellers. This is one of the most common compliance gaps for new MP sellers on online marketplaces.",
  },
  {
    q: "Can freelancers in Indore or Bhopal billing foreign clients avoid paying IGST?",
    a: "Yes. Freelancers and independent professionals in MP billing foreign clients can file a GST LUT (Letter of Undertaking, Form RFD-11) annually to export services without payment of IGST — treating the supply as zero-rated. Without a valid LUT, IGST at 18% must be paid on foreign invoices and later claimed as refund, which is a significant cash-flow burden. Taxvio handles LUT filing for MP freelancers starting at ₹999 per year.",
  },
];

const TIER1_CITIES = MP_CITIES.filter((c) => c.tier === 1);

/* ─── Schema Markup ────────────────────────────────────────────────────────── */
const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GST Services in Madhya Pradesh — Taxvio",
  numberOfItems: GST_SERVICES.length,
  itemListElement: GST_SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://www.taxvio.in/state/madhya-pradesh/gst-services#${s.slug}`,
    description: s.desc,
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  telephone: "+918937980366",
  email: "support@taxvio.in",
  description:
    "Taxvio provides CA-assisted GST registration, GSTR-1, GSTR-3B & GSTR-9 filing, GST LUT, refund, notice reply, e-invoicing, and GST for e-commerce sellers across 300+ cities in Madhya Pradesh.",
  areaServed: {
    "@type": "State",
    name: "Madhya Pradesh",
    containedInPlace: { "@type": "Country", name: "India" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2400",
  },
  priceRange: "₹999 - ₹9,999",
  openingHours: "Mo-Sa 09:00-19:00",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Madhya Pradesh", item: "https://www.taxvio.in/state/madhya-pradesh" },
    { "@type": "ListItem", position: 3, name: "GST Services", item: "https://www.taxvio.in/state/madhya-pradesh/gst-services" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function GSTServiceCard({ svc }: { svc: (typeof GST_SERVICES)[number] }) {
  return (
    <div
      id={svc.slug}
      className="group bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Card header */}
      <div className={`bg-gradient-to-r ${svc.gradient} p-5 relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="relative flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center text-2xl">
            {svc.icon}
          </div>
          <div className="bg-white/20 border border-white/25 rounded-xl px-3 py-1.5 text-center">
            <p className="text-[9px] text-white/60 font-bold uppercase tracking-wide">From</p>
            <p className="text-white font-extrabold text-sm leading-tight">{svc.price}</p>
          </div>
        </div>
        <h3 className="relative text-base font-extrabold text-white mt-3 leading-tight">
          {svc.title}
        </h3>
        <p className="relative text-white/60 text-[11px] mt-0.5">{svc.timeline}</p>
      </div>

      {/* Card body */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{svc.desc}</p>
        <ul className="space-y-1.5 flex-1 mb-4">
          {svc.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
              <CheckCircle size={10} className="text-emerald-500 shrink-0" /> {f}
            </li>
          ))}
        </ul>
        <Link
          href={`/state/madhya-pradesh/gst-services#${svc.slug}`}
          className={`mt-auto flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-bold ${svc.accentText} group-hover:underline`}
        >
          Get This Service in MP
          <ArrowRight
            size={13}
            className="text-gray-300 group-hover:text-current group-hover:translate-x-0.5 transition-all"
          />
        </Link>
      </div>
    </div>
  );
}

function MajorCityCard({
  name,
  district,
  region,
}: {
  name: string;
  district: string;
  region: string;
}) {
  return (
    <Link
      href={`/state/madhya-pradesh/gst-services/${slugifyCity(name)}`}
      aria-label={`GST services in ${name}, ${district}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xl">🏙️</span>
          <ArrowRight
            size={13}
            className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5"
          />
        </div>
        <p className="font-bold text-sm text-white leading-tight group-hover:text-sky-200 transition-colors">
          {name}
        </p>
        <p className="text-[10px] text-white/50 mt-0.5">
          {district} · {region}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {["GST Reg", "GSTR-1", "GSTR-3B", "GSTR-9"].map((t) => (
            <span
              key={t}
              className="text-[9px] font-bold bg-white/10 text-white/70 px-1.5 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name }: { name: string }) {
  return (
    <Link
      href={`/state/madhya-pradesh/gst-services/${slugifyCity(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150"
    >
      <MapPin
        size={9}
        className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors"
      />
      <span className="truncate">{name}</span>
    </Link>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 p-5">
        <div className="w-7 h-7 rounded-lg bg-[#00416a] flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-white text-[10px] font-extrabold">{index + 1}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800 leading-snug mb-2">{q}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function MPGSTServicesPage() {
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need GST services in Madhya Pradesh.")}`;

  return (
    <>
      <Script
        id="mp-gst-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="mp-gst-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="mp-gst-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="mp-gst-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════════ HERO ════════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-7" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                {[
                  { href: "/", label: "Home" },
                  { href: "/state/madhya-pradesh", label: "Madhya Pradesh" },
                  { href: null, label: "GST Services" },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5">
                    {href ? (
                      <Link href={href} className="hover:text-white/80 transition">
                        {label}
                      </Link>
                    ) : (
                      <span className="text-white/80 font-semibold">{label}</span>
                    )}
                    {i < arr.length - 1 && (
                      <ChevronRight size={12} className="text-white/25" />
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_300px] gap-10 items-start">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <MapPin size={12} className="text-sky-400 shrink-0" />
                  Madhya Pradesh · 55 Districts · 300+ Cities · 12 GST Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  GST Services in
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Madhya Pradesh
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  CA-assisted{" "}
                  <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">GSTR-1 &amp; GSTR-3B monthly filing</strong>,
                  GSTR-9 annual return, LUT for exporters, refund, notice reply, e-invoicing, and
                  GST for e-commerce sellers — across all{" "}
                  <strong className="text-white">55 districts</strong> and{" "}
                  <strong className="text-white">{MP_CITIES.length}+ cities</strong> of Madhya Pradesh.
                  100% online, starting{" "}
                  <strong className="text-sky-300">₹999</strong>.
                </p>

                {/* Trust chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck,    text: "CA-Certified Team"     },
                    { icon: Shield,        text: "100% Secure"           },
                    { icon: Zap,           text: "3–7 Day GSTIN"         },
                    { icon: Star,          text: "4.9★ Rating"           },
                    { icon: MessageCircle, text: "WhatsApp Support"      },
                  ].map(({ icon: Icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 backdrop-blur-sm"
                      style={{
                        background: "rgba(255,255,255,0.09)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      <Icon size={11} className="text-sky-300 shrink-0" /> {text}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-4 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for GST Help
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} className="shrink-0" />
                  </Link>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-7 py-4 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>

              {/* Right — quick nav panel */}
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(255,255,255,0.14)",
                }}
              >
                <div
                  className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <div>
                    <p className="font-bold text-white text-sm">GST Services — MP</p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      {GST_SERVICES.length} services · all 55 districts
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>
                <div className="p-4 space-y-1.5 max-h-[360px] overflow-y-auto">
                  {GST_SERVICES.map((svc) => (
                    <a
                      href={`#${svc.slug}`}
                      key={svc.slug}
                      className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/10"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="flex items-center gap-2 text-xs font-semibold text-white/75">
                        <span>{svc.icon}</span>
                        <span className="truncate">{svc.title}</span>
                      </span>
                      <span className="text-[10px] font-bold text-sky-300 shrink-0 ml-2">
                        {svc.price}
                      </span>
                    </a>
                  ))}
                </div>
                <div
                  className="mx-4 mb-4 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      Starting Price
                    </p>
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹999</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      GSTIN in
                    </p>
                    <p className="text-white text-sm font-bold">3–7 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats ribbon */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck,  label: "ICAI-Certified CAs"         },
                { icon: TrendingUp,  label: "12,000+ GST Returns Filed"  },
                { icon: Users,       label: "4,800+ Businesses Served"   },
                { icon: Globe,       label: "55 MP Districts Covered"    },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Icon size={11} className="text-sky-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f8fbfd"
            />
          </svg>
        </section>

        {/* ════════════ STATS RIBBON ════════════ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "3–7",             label: "Days for GSTIN",        icon: Zap         },
              { val: "4.9★",            label: "Average Rating",        icon: Star        },
              { val: "₹999",            label: "Starting Price",        icon: IndianRupee },
              { val: `${MP_CITIES.length}+`, label: "MP Cities Served", icon: MapPin      },
            ].map(({ val, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[#f2f8fc] border border-[#deeef7] text-center hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00416a]/10 flex items-center justify-center">
                  <Icon size={15} className="text-[#00416a]" />
                </div>
                <p className="text-xl font-extrabold text-[#00416a]">{val}</p>
                <p className="text-[11px] text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ ALL 12 GST SERVICE CARDS ════════════ */}
        <section className="py-20 bg-[#f8fbfd]" aria-label="GST Services in MP">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                12 GST Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Complete GST Compliance for Every MP Business
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                From first GSTIN to annual return, refund recovery, e-commerce compliance, and notice
                resolution — all managed by our CA team, 100% online.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {GST_SERVICES.map((svc) => (
                <GSTServiceCard key={svc.slug} svc={svc} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ MAJOR CITIES ════════════ */}
        <section
          className="py-16 bg-white border-y border-gray-100"
          aria-label="Major cities for GST services in MP"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">
                  Major Cities
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  GST Services in Key Madhya Pradesh Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {TIER1_CITIES.map((c) => (
                <MajorCityCard
                  key={c.name}
                  name={c.name}
                  district={c.district}
                  region={c.region}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ SEO CONTENT ════════════ */}
        <section
          className="py-20 bg-white border-b border-gray-100"
          aria-label="About GST services in Madhya Pradesh"
        >
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">
                    {heading}
                  </h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    {body.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ WHY TAXVIO ════════════ */}
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100" aria-label="Why Taxvio for GST in MP">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why Madhya Pradesh Businesses Trust Taxvio for GST
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "CA-Certified GST Professionals",
                  desc: "Every GST service for MP businesses is handled by practising CAs — not data entry agents. We understand MP's Commercial Tax Department jurisdiction, SGST vs CGST classification, and district-level GST office procedures.",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Share all documents via WhatsApp or email from anywhere in MP. We handle portal filing, officer follow-up, and acknowledgement delivery entirely online — no queues, no travel, no matter which of the ${MP_CITIES.length}+ MP cities you're in.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Shield,
                  title: "GSTR-2B Reconciliation First",
                  desc: "Our GSTR-3B filing always starts with ITC reconciliation against GSTR-2B — verifying every rupee of ITC before claiming it. This protects MP businesses from the most common GST notice type: ITC mismatch under Rule 36(4).",
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Notice Monitoring",
                  desc: "We monitor your MP GSTIN for ASMT-10 scrutiny notices, DRC-01A pre-demand intimations, and suo motu cancellation risks — alerting you immediately and preparing complete replies within the prescribed window.",
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹999",
                  desc: "No hidden fees across any of the 12 GST services. Clear pricing quoted upfront before we begin — registration, returns, annual filing, refunds, notice reply, and e-invoicing all have fixed, published rates.",
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: Landmark,
                  title: "MP Industry Expertise",
                  desc: "We understand the GST nuances of MP's key sectors — inverted duty refunds for soybean and agro-processing, LUT filing for Pithampur exporters, e-commerce TCS reconciliation for Indore sellers, and RCM for freelancers billing foreign clients.",
                  color: "bg-sky-100 text-sky-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-5 bg-white border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section
          className="py-20 bg-white border-b border-gray-100"
          aria-label="Frequently asked questions about GST in MP"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Frequently Asked Questions — GST in Madhya Pradesh
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Quick answers to the most common questions about GST registration, filing, and
                compliance for businesses across MP.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ ALL CITIES BY REGION ════════════ */}
        <section className="py-20 bg-[#f8fbfd]" aria-label="All MP cities for GST services">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All MP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                GST Services Across All Madhya Pradesh Cities &amp; Divisions
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Every city below links to its dedicated GST service page — registration, GSTR-1/3B,
                GSTR-9, LUT, refund, notice reply, and e-invoicing.
              </p>
            </div>
            <div className="space-y-4">
              {Object.entries(MP_REGIONS).map(([region]) => {
                const regionCities = MP_CITIES.filter((c) => c.region === region);
                if (!regionCities.length) return null;
                return (
                  <div
                    key={region}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-sky-300 shrink-0" />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionCities.map((c) => (
                        <CityLink key={c.name} name={c.name} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════ CTA BANNER ════════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                  <Zap size={11} className="text-sky-300" /> Ready to Get Started?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Expert GST Help — Anywhere in Madhya Pradesh
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  GST registration, GSTR-1/3B monthly filing, GSTR-9 annual return, LUT, refund,
                  notice reply, e-invoicing, and GST for e-commerce sellers — all delivered 100%
                  online across all 55 MP districts. CA-assisted, same-day WhatsApp response.
                  Starting ₹999.
                </p>

                {/* Service quick links */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {GST_SERVICES.slice(0, 6).map((svc) => (
                    <a
                      key={svc.slug}
                      href={`#${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
                    >
                      {svc.icon} {svc.title}
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
                <p className="mt-6 text-white/40 text-xs">
                  GST Registration · GSTR-1 · GSTR-3B · GSTR-9 · LUT · Refund · Notice Reply ·
                  E-Invoicing · E-Commerce GST · 55 Districts · 100% Online
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}
