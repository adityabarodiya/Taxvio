// app/state/uttar-pradesh/gst-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, Receipt, IndianRupee, AlertCircle, RefreshCw,
  ClipboardList, Package, ExternalLink, Info, Building2,
} from "lucide-react";
import {
  UP_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay, type UPCity,
} from "@/data/up-gst-cities";

/* ─── Static Params ───────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return ALL_CITY_SLUGS.map((city) => ({ city }));
}

/* ─── SEO Metadata ────────────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city);
  const cityName = data?.name ?? formatCityDisplay(city);
  const district = data?.district ?? cityName;
  const region = data?.region ?? "Uttar Pradesh";

  return {
    title: `GST Registration & Return Filing in ${cityName}, ${district} | Taxvio`,
    description: `Expert GST registration, GSTR-1, GSTR-3B & GSTR-9 filing, GST LUT, refund, notice reply and e-invoicing in ${cityName}, ${district}, Uttar Pradesh. CA-assisted, 100% online, starting ₹999. Get your GSTIN in 3–7 days.`,
    keywords: [
      `GST registration ${cityName}`,
      `GST return filing ${cityName}`,
      `GSTIN ${cityName} ${district}`,
      `GST consultant ${cityName} UP`,
      `GSTR-1 GSTR-3B ${cityName}`,
      `GST annual return ${cityName}`,
      `GST notice reply ${cityName}`,
      `GST LUT filing ${cityName}`,
      `online GST ${cityName} Uttar Pradesh`,
      `CA GST services ${district}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/uttar-pradesh/gst-services/${city}` },
    openGraph: {
      title: `GST Services in ${cityName}, UP | Taxvio`,
      description: `GST registration, GSTR filing, LUT, refund & notice reply in ${cityName}, ${district}, UP. CA-assisted, from ₹999.`,
      url: `https://www.taxvio.in/state/uttar-pradesh/gst-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `GST Services in ${cityName}, UP | Taxvio`,
    },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ──────────────────────────────────────────── */
function getServiceContent(cityName: string, district: string, region: string) {
  return [
    /* ── 1. GST Registration ── */
    {
      slug: "gst-registration",
      title: `GST Registration in ${cityName}`,
      price: "₹999",
      timeline: "3–7 Working Days",
      icon: "🧾",
      iconBg: "bg-emerald-50 border-emerald-100",
      gradient: "from-emerald-500 to-teal-600",
      accentColor: "#059669",
      accentBg: "bg-emerald-50",
      accentText: "text-emerald-700",
      features: [
        "GSTIN issued within 3–7 working days",
        "All business types: Proprietor, Partnership, LLP, Pvt Ltd, Company",
        "e-KYC with Aadhaar OTP-based verification",
        "Documents: PAN, Aadhaar, address proof, photograph, bank details",
        "Amendment and additional place of business registration",
        "State Jurisdiction: UP GST Office — Lucknow / Agra / Kanpur circle",
      ],
      seoContent: `GST registration in ${cityName}, ${district} is the first legal step for any business that crosses the annual turnover threshold — ₹40 lakh for goods suppliers and ₹20 lakh for service providers — or engages in interstate supply, e-commerce, or notified categories. Without a valid GSTIN, businesses in ${cityName} cannot legally charge GST on invoices, claim Input Tax Credit on purchases, or participate in B2B supply chains that require tax invoices for ITC eligibility.

Taxvio's CA team provides end-to-end GST registration in ${cityName} — covering pre-registration consultation on business type, HSN/SAC code identification, and whether registration should be under regular scheme, Composition Scheme, or as a Casual Taxable Person. Our team handles complete document preparation, ARN (Application Reference Number) generation, Aadhaar authentication via OTP, and follow-up with the GST officer for final GSTIN allotment.

For businesses in ${cityName} with multiple locations — a godown, factory, or branch office within ${district} or in other UP districts — we also handle registration of Additional Places of Business in the same application. Post-registration, we provide the GST registration certificate (REG-06), help configure the GSTIN on accounting software, explain monthly filing obligations, and set up filing reminders — ensuring you start GST compliance on the right footing from Day 1.

${region === "Western UP" ? `As a Western UP city, ${cityName} businesses benefit from proximity to major trade hubs and need to be especially careful about proper CGST/SGST classification on intra-state supply and IGST on interstate movement to Delhi NCR, Haryana, and Rajasthan.` : region === "Eastern UP" ? `Eastern UP businesses in ${cityName} often deal with agricultural commodities, textiles, and handicrafts that have complex exempt vs taxable classification under GST — our team ensures correct HSN coding and rate application.` : `Central UP businesses in ${cityName} often operate in food processing, manufacturing, and retail — sectors where GST registration and ITC chain maintenance are especially critical for profitability.`}`,
    },

    /* ── 2. GSTR-1 Filing ── */
    {
      slug: "gstr-1-filing",
      title: `GSTR-1 Filing in ${cityName}`,
      price: "₹999/month",
      timeline: "Due 11th Monthly",
      icon: "📄",
      iconBg: "bg-blue-50 border-blue-100",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "#2563eb",
      accentBg: "bg-blue-50",
      accentText: "text-blue-700",
      features: [
        "B2B invoice details with GSTIN-wise reporting",
        "B2C (large & small) aggregated supply details",
        "Export invoices (with/without IGST payment)",
        "HSN/SAC wise summary (mandatory for ₹5Cr+ turnover)",
        "Credit/debit note reporting and amendments",
        "QRMP filers: quarterly GSTR-1 + IFF for first 2 months",
      ],
      seoContent: `GSTR-1 is the outward supplies return that every GST-registered business in ${cityName}, ${district} must file to declare all sales made during the month. Filing GSTR-1 accurately and on time is the single most important GST compliance action for your business — because it directly determines your buyers' Input Tax Credit (ITC). When your GSTR-1 data matches your buyers' GSTR-2B auto-populated statement, they can claim ITC seamlessly. Any mismatch, missing invoice, or late filing causes ITC restrictions for your customers and can damage your business relationships.

Taxvio's GSTR-1 filing service for businesses in ${cityName} covers the complete invoice upload and verification process: B2B invoices with correct GSTIN, invoice number, date, taxable value, GST rate, and CGST/SGST/IGST split; B2C (large) invoices above ₹2.5 lakh to unregistered buyers with state-wise aggregation; B2C (small) aggregate for remaining unregistered sales; export invoices with correct port code, shipping bill details, and IGST payment status; and advances received on which GST is payable (Table 11).

Our reconciliation approach for ${cityName} businesses involves matching your sales register or accounting software export against GSTR-1 before filing — catching duplicate invoices, wrong GSTIN of buyers, incorrect GST rates, and missing invoices. For businesses under the QRMP (Quarterly Return Monthly Payment) scheme in ${cityName}, we handle both the quarterly GSTR-1 and the optional IFF (Invoice Furnishing Facility) for the first two months of each quarter, ensuring your large B2B buyers get timely ITC credit without waiting for the quarterly filing.`,
    },

    /* ── 3. GSTR-3B Filing ── */
    {
      slug: "gstr-3b-filing",
      title: `GSTR-3B Filing in ${cityName}`,
      price: "₹999/month",
      timeline: "Due 20th Monthly",
      icon: "📊",
      iconBg: "bg-violet-50 border-violet-100",
      gradient: "from-violet-500 to-purple-600",
      accentColor: "#7c3aed",
      accentBg: "bg-violet-50",
      accentText: "text-violet-700",
      features: [
        "Net tax liability computation (IGST, CGST, SGST)",
        "ITC reconciliation with GSTR-2B before filing",
        "Reverse Charge Mechanism (RCM) liability",
        "Non-GST and exempt supply reporting",
        "Electronic cash/credit ledger reconciliation",
        "Interest and late fee computation if applicable",
      ],
      seoContent: `GSTR-3B is the monthly summary return that every regular GST-registered taxpayer in ${cityName}, ${district} must file by the 20th of the following month. Unlike GSTR-1 which is an invoice-level outward supply statement, GSTR-3B is a net summary return where you declare aggregated taxable turnover, exempt/non-GST supply, outward tax liability, inward supplies eligible for ITC (from GSTR-2B), and net tax payable after ITC set-off. Filing GSTR-3B accurately is critical — errors in ITC claim, missed RCM liability, or wrong tax head (CGST vs SGST vs IGST) lead to demand notices and interest of 18% per annum.

Taxvio's GSTR-3B filing service for ${cityName} businesses starts with a pre-filing ITC reconciliation — comparing ITC available in GSTR-2B (auto-populated from suppliers' GSTR-1) against your purchase register. Under Rule 36(4), ITC in GSTR-3B cannot exceed 105% of GSTR-2B eligible credit, so any excess claimed attracts reversal notices. Our team identifies mismatches before filing and flags suppliers in ${district} or other UP districts who haven't filed their GSTR-1 — protecting your ITC.

We also correctly compute Reverse Charge Mechanism liability for ${cityName} businesses that purchase from unregistered dealers (URD purchases above threshold), import services, or use specified RCM-liable services like legal services, GTA transport, and director remuneration. After filing, we provide a monthly GST liability MIS report covering opening balance, tax payable, ITC utilised, and cash payment — giving you full visibility into GST cash flow for your ${cityName} business every month.`,
    },

    /* ── 4. GSTR-9 Annual Return ── */
    {
      slug: "gstr-9-annual-return",
      title: `GSTR-9 Annual Return in ${cityName}`,
      price: "₹2,999",
      timeline: "Due 31st December",
      icon: "📅",
      iconBg: "bg-amber-50 border-amber-100",
      gradient: "from-amber-500 to-orange-600",
      accentColor: "#d97706",
      accentBg: "bg-amber-50",
      accentText: "text-amber-700",
      features: [
        "Full-year GSTR-1 vs GSTR-3B reconciliation",
        "ITC availed vs ITC eligible final reconciliation",
        "Unpaid tax identification and late fee calculation",
        "GSTR-9C audit statement (for ₹5Cr+ turnover)",
        "Amendments for prior-year invoices",
        "Auto-drafted data verification and correction",
      ],
      seoContent: `GSTR-9 is the annual GST return that all regular taxpayers in ${cityName}, ${district} with turnover above ₹2 crore must file by 31st December for the previous financial year. It consolidates the entire year's outward supplies (from all GSTR-1 filings), inward supplies eligible for ITC, tax paid, and any adjustments — serving as a comprehensive annual reconciliation that the GST department uses to identify discrepancies between monthly returns and the final annual position.

For businesses in ${cityName}, filing GSTR-9 is also an opportunity to correct mistakes made during the year — missed invoices in GSTR-1, excess ITC claimed in GSTR-3B, or wrong tax rates applied. Amendments to monthly returns are not allowed after a certain date, but GSTR-9 provides a final correction window. Our CA team performs a complete 12-month reconciliation — matching your GSTR-1 B2B supply data against GSTR-3B Table 3 outward liability, verifying ITC claimed in GSTR-3B Table 4 against the eligible amount from GSTR-2B, and identifying any ITC reversal requirements (under Rule 42/43 for personal use, exempt supply, or blocked credits under Section 17(5)).

For ${cityName} businesses with annual turnover above ₹5 crore, GSTR-9C (the reconciliation statement with CA certification) is also mandatory. This requires comparison of audited financial statements (P&L and Balance Sheet) with GSTR-9 data — a detailed exercise covering unreconciled differences in turnover, ITC, and tax paid. Taxvio's UP-based CA team has filed hundreds of GSTR-9 and GSTR-9C returns for UP businesses across all industries — providing accurate, timely filing that protects you from scrutiny and demand notices.`,
    },

    /* ── 5. GST LUT Filing ── */
    {
      slug: "gst-lut-filing",
      title: `GST LUT Filing in ${cityName}`,
      price: "₹999/year",
      timeline: "Before April 1",
      icon: "📤",
      iconBg: "bg-teal-50 border-teal-100",
      gradient: "from-teal-500 to-cyan-600",
      accentColor: "#0d9488",
      accentBg: "bg-teal-50",
      accentText: "text-teal-700",
      features: [
        "Annual LUT (Letter of Undertaking) — Form RFD-11",
        "Enables export without IGST payment",
        "Valid for services exports and goods exports",
        "Renewable every financial year",
        "Required for SEZ supplies as zero-rated supply",
        "Eligible condition: no GST prosecution in 5 years",
      ],
      seoContent: `GST LUT (Letter of Undertaking) is a mandatory filing for businesses in ${cityName}, ${district} that export goods or services and want to do so without paying IGST upfront. Under Section 16(3) of the IGST Act, a registered exporter can either export on payment of IGST (and later claim refund) or file an LUT to export without IGST — the zero-rated supply route. For most exporters, the LUT route is far more cash-flow-friendly since it avoids blocking working capital in IGST refund claims.

LUT must be filed in Form RFD-11 on the GST portal before the beginning of each financial year — ideally before April 1. For businesses in ${cityName} that began exports mid-year, LUT can be filed any time and is valid from the date of acceptance till the end of that financial year. The filing process involves a self-declaration undertaking that you will export within the stipulated time (3 months for goods, 1 year for services) and that you have not been prosecuted under GST or any other fiscal law in the preceding 5 years.

Taxvio handles the complete LUT filing process for ${cityName} exporters — including verification of eligibility, preparation and submission of Form RFD-11, ARN generation, and delivery of the acceptance letter. We also coordinate with your bank and customs broker (CHA) to ensure the LUT reference number is correctly cited in shipping bills and export documents. For IT companies, software exporters, consulting firms, and manufacturing exporters in ${district}, our team also ensures proper zero-rated supply classification in GSTR-1 (Table 6A for exports with LUT) so your export turnover is correctly reported without IGST liability.`,
    },

    /* ── 6. GST Notice Reply ── */
    {
      slug: "gst-notice-reply",
      title: `GST Notice Reply in ${cityName}`,
      price: "₹1,999",
      timeline: "30-day Response Window",
      icon: "⚖️",
      iconBg: "bg-rose-50 border-rose-100",
      gradient: "from-rose-500 to-red-600",
      accentColor: "#e11d48",
      accentBg: "bg-rose-50",
      accentText: "text-rose-700",
      features: [
        "ASMT-10 scrutiny notice — ITC mismatch & turnover discrepancy",
        "DRC-01 demand notice — tax liability with interest & penalty",
        "GSTR-2A vs GSTR-3B ITC gap resolution",
        "DRC-01A pre-demand intimation response",
        "REG-17 show-cause notice for cancellation",
        "Personal hearing representation before GST officer",
      ],
      seoContent: `GST notices are becoming increasingly common for businesses in ${cityName}, ${district} as the GST department's data analytics capabilities improve. The most frequent notice type is ASMT-10 — a scrutiny notice issued when the GST officer identifies discrepancies between your filed returns (GSTR-1 vs GSTR-3B mismatch, excess ITC claim vs GSTR-2B, or turnover under-reporting). Responding to ASMT-10 within the 30-day window is critical — failure to respond leads to assessment under Section 62 and a best-judgement demand order that is much harder to reverse.

DRC-01 is the most serious GST notice — it is the final demand notice issued under Section 73 (without intent to evade) or Section 74 (with intent to evade, fraud) after the pre-show-cause intimation in DRC-01A. DRC-01 demands tax, interest (18% per annum from the due date), and penalty (10% to 100% of tax for Section 73/74 cases). Businesses in ${cityName} receiving DRC-01 must respond with a detailed reply within 30 days — either accepting liability and paying under DRC-03, or filing a detailed response disputing the demand with supporting evidence.

Taxvio's CA team handles GST notice replies for ${cityName} businesses with a structured approach: first analysing the notice to identify the specific discrepancy, then reviewing your filed returns and purchase/sales registers to understand the root cause, preparing a detailed written reply with evidence annexures, and representing you in personal hearings before the GSTN ward officer or Appellate Authority at the ${district} GST office. Our team has successfully resolved ITC mismatch notices, fake invoice notices, and turnover discrepancy notices for hundreds of UP businesses — protecting them from arbitrary demands and penalties.`,
    },

    /* ── 7. GST Refund ── */
    {
      slug: "gst-refund",
      title: `GST Refund in ${cityName}`,
      price: "₹2,999",
      timeline: "60–90 Days",
      icon: "💰",
      iconBg: "bg-sky-50 border-sky-100",
      gradient: "from-sky-500 to-blue-600",
      accentColor: "#0284c7",
      accentBg: "bg-sky-50",
      accentText: "text-sky-700",
      features: [
        "Export refund — IGST paid on exports (Section 16 IGST Act)",
        "ITC refund — inverted duty structure (RFD-01)",
        "Refund for excess cash ledger balance",
        "Wrong head payment rectification and refund",
        "CGST/SGST to IGST adjustment and refund",
        "Refund application tracking with GST officer",
      ],
      seoContent: `GST refund claims are a critical cash flow mechanism for businesses in ${cityName}, ${district} that export goods or services, operate in industries with inverted duty structure (where input tax rate exceeds output tax rate), or have inadvertently made excess GST payments. Section 54 of the CGST Act provides the legal framework for GST refunds, and timely filing of refund applications (within 2 years of the relevant date) is essential — any delay forfeits the refund claim permanently.

The most common GST refund scenario for ${cityName} businesses is the export refund under Section 16 of the IGST Act. If you exported goods with IGST payment (shipping bill serves as refund application), the refund is processed through ICEGATE-GSTN integration and credited directly to your bank account linked with ICES customs. If you exported under LUT without IGST payment, the unutilised ITC refund is claimed through Form RFD-01 manually filed on the GST portal, covering the ITC accumulated on export-linked purchases.

The inverted duty structure refund is critical for UP businesses in industries like textile processing (5% output GST on fabric vs 12–18% input GST on dyes, chemicals), construction materials, and agricultural equipment — where the GST paid on purchases consistently exceeds GST liability on sales. Taxvio handles the complete refund process: calculating eligible refund quantum using the formula prescribed in Rule 89, preparing Form RFD-01 with all statement annexures, responding to RFDE deficiency memos, coordinating with the GST refund processing officer at the ${district} GST office, and ensuring the Refund Sanction Order (RFD-06) is issued within the 60-day statutory timeline.`,
    },

    /* ── 8. GST Cancellation / Revocation ── */
    {
      slug: "gst-cancellation",
      title: `GST Cancellation & Revocation in ${cityName}`,
      price: "₹999",
      timeline: "7–14 Working Days",
      icon: "❌",
      iconBg: "bg-gray-50 border-gray-100",
      gradient: "from-gray-500 to-slate-600",
      accentColor: "#475569",
      accentBg: "bg-gray-50",
      accentText: "text-gray-700",
      features: [
        "Voluntary cancellation when business ceases or turnover drops below threshold",
        "Final return GSTR-10 (within 3 months of cancellation)",
        "Payment of tax on stock-in-hand at time of cancellation",
        "Revocation of cancelled GSTIN (within 30 days)",
        "Application in Form REG-16 for voluntary cancellation",
        "Suo motu cancellation reversal for non-filers",
      ],
      seoContent: `GST registration cancellation in ${cityName}, ${district} becomes necessary when a business closes down, crosses below the turnover threshold and opts out, undergoes a change in business constitution (partnership dissolution, company winding up), or is transferred/merged into another entity. Voluntary cancellation requires filing Form REG-16 on the GST portal — along with the reason for cancellation, date of cessation, and details of pending liabilities and stock.

The critical compliance requirement during cancellation is the final return GSTR-10, which must be filed within 3 months of the cancellation order. GSTR-10 requires declaration of closing stock, computation of ITC reversal on stock (as tax on stock-in-hand is payable as if it were an outward supply), and any pending tax dues. Failure to file GSTR-10 within 3 months results in a best-judgement assessment and system-generated demand — a common problem for ${cityName} businesses that cancel registration but forget the final return obligation.

Revocation of cancelled GSTIN is equally important for ${cityName} businesses whose registration was cancelled suo motu by the GST department for non-filing of returns. With GST department automation, thousands of UP GSTINs are cancelled every month for consecutive non-filing. If your GSTIN is cancelled, you cannot issue valid tax invoices, your buyers cannot claim ITC on purchases from you, and your business credit rating is affected. Taxvio helps file the revocation application (Form REG-21) within 30 days of the cancellation order, along with all pending returns and tax dues — restoring your active GSTIN status promptly.`,
    },

    /* ── 9. E-Invoice & E-Way Bill ── */
    {
      slug: "e-invoice-e-way-bill",
      title: `E-Invoice & E-Way Bill in ${cityName}`,
      price: "₹999",
      timeline: "Setup in 1–2 Days",
      icon: "📱",
      iconBg: "bg-indigo-50 border-indigo-100",
      gradient: "from-indigo-500 to-blue-600",
      accentColor: "#4338ca",
      accentBg: "bg-indigo-50",
      accentText: "text-indigo-700",
      features: [
        "E-invoice IRP registration and IRN setup",
        "QR code generation and invoice printing integration",
        "E-invoice API/offline tool setup for accounting software",
        "E-way bill for goods movement exceeding ₹50,000 value",
        "Bulk e-way bill generation and extension",
        "Consolidated e-way bill for multiple consignments",
      ],
      seoContent: `E-invoicing is now mandatory for all GST-registered businesses in ${cityName}, ${district} with aggregate annual turnover above ₹5 crore (the threshold reduced progressively from ₹500 crore in 2020 to ₹5 crore from August 2023). Under the e-invoicing system, every B2B invoice must be registered on the Invoice Registration Portal (IRP) within 30 days of the invoice date — the IRP generates a unique Invoice Reference Number (IRN) and QR code that must be printed on the invoice. Invoices without a valid IRN are not treated as valid tax invoices under GST law and buyers cannot claim ITC on such invoices.

For businesses in ${cityName} that are approaching the ₹5 crore threshold or have recently crossed it, Taxvio provides complete e-invoice setup — registering your GSTIN on the IRP, configuring your accounting software (Tally, Busy, QuickBooks, or custom ERP) for IRN generation, setting up the QR code printing format, and training your accounts team on the workflow. We also integrate e-invoice data with GSTR-1 auto-population, so your GSTR-1 filing effort reduces significantly after e-invoice implementation.

E-way bills are required for every movement of goods worth more than ₹50,000 within Uttar Pradesh or across state borders — whether the movement is for supply, transfer between branches, return of goods, or job work. For ${cityName} businesses in manufacturing, trading, or distribution with frequent goods movement, managing e-way bill generation, Part-B (vehicle detail) update, and extension for delayed delivery is an ongoing operational challenge. Taxvio provides e-way bill management services including bulk generation, vehicle update, consolidated EWB for multiple consignments, and cancellation — ensuring your logistics operations in ${district} and beyond remain compliant.`,
    },
  ];
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function UPGSTCityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  const cityData = getCityData(city);
  const cityName = cityData?.name ?? formatCityDisplay(city);
  const district = cityData?.district ?? cityName;
  const region = cityData?.region ?? "Uttar Pradesh";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need GST services in ${cityName}, ${district}, UP.`)}`;

  const services = getServiceContent(cityName, district, region);

  // Nearby cities in same district / region
  const nearbyCities = UP_CITIES
    .filter((c) => c.district === district && slugifyCity(c.name) !== city)
    .slice(0, 5);
  const regionCities = nearbyCities.length < 3
    ? UP_CITIES.filter((c) => c.region === region && slugifyCity(c.name) !== city).slice(0, 6)
    : nearbyCities;

  /* ─── JSON-LD Schemas ─── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides GST registration, GSTR-1, GSTR-3B & GSTR-9 filing, LUT, GST refund, notice reply and e-invoicing services in ${cityName}, ${district}, Uttar Pradesh.`,
    areaServed: [{ "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: "Uttar Pradesh" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2400" },
    priceRange: "₹999 - ₹9999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "GST Services UP", item: "https://www.taxvio.in/state/uttar-pradesh/gst-services" },
      { "@type": "ListItem", position: 3, name: district, item: `https://www.taxvio.in/state/uttar-pradesh/gst-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${cityName} GST Services`, item: `https://www.taxvio.in/state/uttar-pradesh/gst-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `GST Services in ${cityName}, Uttar Pradesh`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/uttar-pradesh/gst-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does GST registration take in ${cityName}?`,
        acceptedAnswer: { "@type": "Answer", text: `GST registration in ${cityName}, ${district} typically takes 3–7 working days from the date of document submission on the GST portal. Aadhaar OTP-based verification speeds up the process significantly.` },
      },
      {
        "@type": "Question",
        name: `What is the GST return filing due date for ${cityName} businesses?`,
        acceptedAnswer: { "@type": "Answer", text: `GSTR-1 is due by the 11th of the following month. GSTR-3B is due by the 20th. GSTR-9 (annual) is due by 31st December. For QRMP scheme filers, GSTR-1 is quarterly (13th of month after quarter end) with monthly PMT-06 challan.` },
      },
      {
        "@type": "Question",
        name: `Is GST registration mandatory for small businesses in ${cityName}?`,
        acceptedAnswer: { "@type": "Answer", text: `GST registration is mandatory in ${cityName} for: goods suppliers with annual turnover above ₹40 lakh; service providers above ₹20 lakh; all interstate suppliers; e-commerce sellers; and casual taxable persons — regardless of turnover. Composition Scheme is available for turnover below ₹1.5 crore (goods) or ₹75 lakh (services/mixed).` },
      },
    ],
  };

  return (
    <>
      <Script id="lb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="sl-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════════ HERO ════════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                {[
                  { href: "/", label: "Home" },
                  { href: "/state/uttar-pradesh/gst-services", label: "GST — Uttar Pradesh" },
                  { href: null, label: `${cityName}` },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5">
                    {href
                      ? <Link href={href} className="hover:text-white/80 transition">{label}</Link>
                      : <span className="text-white/80 font-semibold">{label}</span>}
                    {i < arr.length - 1 && <span className="text-white/25">›</span>}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_300px] gap-10 items-start">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <MapPin size={12} className="text-sky-400 shrink-0" />
                  {cityName}, {district} · Uttar Pradesh · GST Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  GST Registration & Filing
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {cityName}, UP
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">GSTR-1 &amp; GSTR-3B monthly filing</strong>,
                  GSTR-9 annual return, GST LUT for exporters, notice reply, refund, and
                  e-invoicing in <strong className="text-white">{cityName}, {district} District, Uttar Pradesh</strong> —
                  100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹999</strong>.
                </p>

                {/* Trust chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA-Assisted" },
                    { icon: Shield, text: "100% Secure" },
                    { icon: Zap, text: "3–7 Day GSTIN" },
                    { icon: Clock, text: "Mon–Sat 9AM–7PM" },
                    { icon: Star, text: "4.9★ Rating" },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                      <Icon size={11} className="text-sky-300 shrink-0" /> {text}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-4 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all">
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for GST Help
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} className="shrink-0" />
                  </Link>
                  <a href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-7 py-4 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all">
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>

              {/* Right — Quick info panel */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}>
                <div className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                  <div>
                    <p className="font-bold text-white text-sm">GST Services — {cityName}</p>
                    <p className="text-[11px] text-white/50 mt-0.5">{district} · {services.length} services</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {services.map((svc) => (
                    <a href={`#${svc.slug}`} key={svc.slug}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-white/10"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <span className="flex items-center gap-2 text-xs font-semibold text-white/75">
                        <span>{svc.icon}</span>
                        <span className="truncate">{svc.title.replace(` in ${cityName}`, "")}</span>
                      </span>
                      <span className="text-[10px] font-bold text-sky-300 shrink-0 ml-2">{svc.price}</span>
                    </a>
                  ))}
                </div>
                <div className="mx-4 mb-4 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Starting Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹999</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">GSTIN in</p>
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
                { icon: BadgeCheck, label: "ICAI-Certified CAs" },
                { icon: TrendingUp, label: "12,000+ GST Returns Filed" },
                { icon: Users, label: "4,800+ UP Businesses" },
                { icon: IndianRupee, label: "₹2.4Cr+ Tax Saved" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Icon size={11} className="text-sky-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </section>

        {/* ════════════ STATS RIBBON ════════════ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "3–7", label: "Days for GSTIN", icon: Zap },
              { val: "4.9★", label: "Average Rating", icon: Star },
              { val: "₹999", label: "Starting Price", icon: IndianRupee },
              { val: "100%", label: "Online Process", icon: Globe },
            ].map(({ val, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[#f2f8fc] border border-[#deeef7] text-center hover:shadow-sm transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#00416a]/10 flex items-center justify-center">
                  <Icon size={15} className="text-[#00416a]" />
                </div>
                <p className="text-xl font-extrabold text-[#00416a]">{val}</p>
                <p className="text-[11px] text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ SERVICE CARDS WITH DEEP SEO CONTENT ════════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-16">

            {services.map((svc, idx) => (
              <article key={svc.slug} id={svc.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">

                {/* Service Header */}
                <div className={`bg-gradient-to-r ${svc.gradient} p-6 md:p-8`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl border border-white/25">
                          {svc.icon}
                        </div>
                        <div>
                          <p className="text-white/70 text-[11px] font-semibold uppercase tracking-wide">
                            GST Service #{String(idx + 1).padStart(2, "0")}
                          </p>
                          <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                            {svc.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                      <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center">
                        <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wide">Price</p>
                        <p className="text-white font-extrabold text-lg leading-tight">{svc.price}</p>
                      </div>
                      <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center">
                        <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wide">Timeline</p>
                        <p className="text-white font-bold text-sm leading-tight">{svc.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">

                    {/* SEO Content */}
                    <div>
                      <h3 className="text-sm font-bold text-[#00416a] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FileText size={14} />
                        About This Service in {cityName}
                      </h3>
                      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        {svc.seoContent.split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>

                      {/* CTA row */}
                      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97] shadow-md shadow-green-500/20">
                          <MessageCircle size={14} /> WhatsApp for {svc.title.split(" in ")[0]}
                        </a>
                        <Link href="/contact"
                          className="inline-flex items-center gap-2 bg-[#00416a] hover:bg-[#002b45] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97]">
                          Get Quote <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Feature List */}
                    <div className={`${svc.accentBg} rounded-2xl p-5 border ${svc.iconBg.split(" ")[1]}`}>
                      <p className="text-xs font-bold text-[#00416a] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle size={13} /> What's Included
                      </p>
                      <ul className="space-y-3">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <div className={`w-5 h-5 rounded-full ${svc.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                              <CheckCircle size={11} className={svc.accentText} />
                            </div>
                            <span className="text-xs text-gray-700 font-medium leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price callout */}
                      <div className="mt-5 pt-4 border-t border-gray-200/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Service Fee</p>
                            <p className={`text-2xl font-extrabold ${svc.accentText}`}>{svc.price}</p>
                          </div>
                          <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#00416a] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#002b45] transition-all">
                            Start Now <ArrowRight size={11} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ════════════ WHY TAXVIO ════════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why {cityName} Businesses Choose Taxvio for GST
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users, title: "CA-Certified GST Professionals", desc: `Every GST service for ${cityName} businesses is handled by practising CAs — not data entry agents. We understand UP GST jurisdiction, SGST vs CGST classification, and ${district} office procedures.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap, title: "100% Online — No Office Visit", desc: `Share all documents via WhatsApp or email from ${cityName}. No need to visit a CA office or GST Seva Kendra. Track your GSTIN application, return filing, and notice status in real-time.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Shield, title: "ITC-First Reconciliation", desc: `Our GST filing process starts with GSTR-2B reconciliation — verifying ITC before every GSTR-3B filing. This protects ${cityName} businesses from ITC mismatch notices and excess ITC reversal demands.`, color: "bg-violet-100 text-violet-700" },
                { icon: AlertCircle, title: "Proactive Notice Management", desc: `We monitor your GSTIN for pending notices, ASMT-10 scrutiny, and DRC-01 demand orders and alert you immediately. For ${cityName} businesses, we handle the entire notice reply process — no stress, no penalties.`, color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹999", desc: `No hidden GST consultation fees, no surprise charges after filing. Clear pricing per service, quoted upfront. ${cityName} businesses know exactly what they pay before we start work.`, color: "bg-teal-100 text-teal-700" },
                { icon: MapPin, title: `Headquartered Near ${region}`, desc: `Taxvio is based in Khatauli, Muzaffarnagar — serving all of Western UP, and the entire state through our online model. We understand the UP business landscape, local trade patterns, and UP GST office workflows.`, color: "bg-sky-100 text-sky-700" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="group flex items-start gap-4 p-5 bg-[#f8fbfd] border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={17} />
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

        {/* ════════════ GST PROCESS STEPS ════════════ */}
        <section className="py-16 bg-[#f8fbfd] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                How to Get GST Registration in {cityName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Share Documents", desc: "Send PAN, Aadhaar, business address proof, bank statement & photo on WhatsApp" },
                { step: "02", title: "Document Review", desc: "Our CA team reviews and prepares your GST application within 24 hours" },
                { step: "03", title: "Aadhaar OTP", desc: "Verify identity via Aadhaar OTP. We handle all portal submission and ARN generation" },
                { step: "04", title: "GSTIN Received", desc: "GSTIN allotted in 3–7 working days. We send you the GST certificate and brief you on filing obligations" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center mb-3">
                    {step}
                  </div>
                  <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  {step !== "04" && (
                    <ArrowRight size={14} className="absolute -right-3 top-1/2 -translate-y-1/2 text-[#00416a] hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ NEARBY CITIES ════════════ */}
        {regionCities.length > 0 && (
          <section className="py-14 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">{district} District & {region}</p>
                  <h2 className="text-lg font-extrabold text-gray-800">GST Services in Nearby Cities</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link key={c.name}
                    href={`/state/uttar-pradesh/gst-services/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0 transition-colors" />
                    GST in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/uttar-pradesh/gst-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00416a]/30 bg-[#deeef7] px-4 py-2 text-sm font-bold text-[#00416a] hover:shadow-sm transition-all">
                  View All UP Cities <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ════════════ CTA BANNER ════════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-sky-300" />
                  Serving GST clients in {cityName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Expert GST Help in {cityName}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  GST registration, GSTR-1/3B monthly filing, GSTR-9 annual return, LUT, refund, and notice reply —
                  all delivered online for businesses in {cityName}, {district}. Starting ₹999. CA-assisted, same-day WhatsApp response.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                  <a href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all">
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}

// Suppress the Globe icon import warning (used in stats ribbon)
function Globe({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}