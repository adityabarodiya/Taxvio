// app/state/madhya-pradesh/gst-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, Building2, Landmark,
} from "lucide-react";
import {
  MP_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay, type MPCity,
} from "@/data/mp-cities";

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
  const region = data?.region ?? "Madhya Pradesh";

  return {
    title: `GST Registration & Return Filing in ${cityName}, ${district} | Taxvio`,
    description: `Expert GST registration, GSTR-1, GSTR-3B & GSTR-9 filing, GST LUT, refund, notice reply, e-invoicing and GST for e-commerce sellers in ${cityName}, ${district}, Madhya Pradesh. CA-assisted, 100% online, starting ₹999. GSTIN in 3–7 days.`,
    keywords: [
      `GST registration ${cityName}`,
      `GST return filing ${cityName}`,
      `GSTIN ${cityName} ${district}`,
      `GST consultant ${cityName} MP`,
      `GSTR-1 GSTR-3B ${cityName}`,
      `GST annual return ${cityName}`,
      `GST notice reply ${cityName}`,
      `GST LUT filing ${cityName}`,
      `online GST ${cityName} Madhya Pradesh`,
      `CA GST services ${district}`,
    ],
    alternates: {
      canonical: `https://www.taxvio.in/state/madhya-pradesh/gst-services/${city}`,
    },
    openGraph: {
      title: `GST Services in ${cityName}, MP | Taxvio`,
      description: `GST registration, GSTR filing, LUT, refund & notice reply in ${cityName}, ${district}, MP. CA-assisted, from ₹999.`,
      url: `https://www.taxvio.in/state/madhya-pradesh/gst-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `GST Services in ${cityName}, MP | Taxvio`,
    },
    robots: { index: true, follow: true },
  };
}

/* ─── Region-aware copy helper ────────────────────────────────────────────── */
function getRegionContext(region: string, cityName: string, district: string): string {
  switch (region) {
    case "Indore Division":
      return `Indore Division businesses in ${cityName} operate within one of India's fastest-growing commercial zones — encompassing Indore's pharmaceutical manufacturing clusters, Pithampur's auto-component industrial area, garment exports, and a booming IT and startup ecosystem. GST compliance here demands particular attention to e-invoicing (mandatory for high-turnover pharma and manufacturing units), LUT filing for software and service exporters, and marketplace reconciliation for the region's growing e-commerce seller base.`;
    case "Bhopal Division":
      return `Bhopal Division businesses in ${cityName} operate in a state capital-centric economy — spanning government contracting, IT services, healthcare, real estate, construction, and education. GST nuances common here include works contract GST (18%), RCM on legal and GTA services, and correct GSTIN jurisdiction alignment between the Central GST Bhopal Commissionerate and the MP Commercial Tax Department's state GST wing.`;
    case "Jabalpur Division":
      return `Jabalpur Division businesses in ${cityName} operate in a diverse economy spanning cement manufacturing, defence sector supply chains, forest-based produce, and the Chhindwara agricultural belt. GST exemptions and reduced rates applicable to forest produce, tribal craft, and agricultural commodities require careful rate mapping — a common source of GST notices for businesses in ${district} that incorrectly charge GST on exempt forest-origin supplies.`;
    case "Gwalior Division":
      return `Gwalior Division businesses in ${cityName} operate in an economy anchored by historical trade routes, tourism, manufacturing, and dairy — with the Chanderi handloom and Gwalior footwear industries having specific GST classification requirements for textile and footwear products subject to rate changes. Businesses in ${district} involved in interstate supply to Delhi, Rajasthan, and UP must pay particular attention to IGST vs CGST/SGST classification on every invoice.`;
    case "Ujjain Division":
      return `Ujjain Division businesses in ${cityName} are at the heart of Madhya Pradesh's soybean processing, oilseed crushing, and agro-commodity trading economy — alongside Ujjain's significant religious tourism and Nagda's textile dyeing industry. The inverted duty structure in soybean processing (5% output GST on oil vs 12–18% on inputs) makes GST refund eligibility under Section 54(3) critical for businesses in ${district} to understand and claim proactively every quarter.`;
    case "Chambal Division":
      return `Chambal Division businesses in ${cityName} operate in a predominantly agricultural and small-scale trading economy — with revenue patterns that are often seasonal and turnover levels that sit close to the GST registration threshold. Businesses in ${district} crossing the ₹40 lakh (goods) or ₹20 lakh (services) threshold mid-year must register within 30 days of crossing the limit, and Composition Scheme eligibility (for turnover below ₹1.5 crore in goods) is an important cost-reduction option worth evaluating.`;
    case "Narmadapuram Division":
      return `Narmadapuram Division businesses in ${cityName} operate in an economy shaped by the Narmada river basin's agriculture, sugarcane processing, timber trade, and Itarsi's railway junction commercial activity. Businesses in ${district} in the agricultural commodity trading segment must correctly apply GST exemption rules for unprocessed agricultural produce and the 5% rate on processed food items — distinctions that regularly generate ASMT-10 notices when applied incorrectly.`;
    case "Rewa Division":
      return `Rewa Division businesses in ${cityName} operate in an economy anchored by Singrauli's coal and power sector, Satna's cement and limestone industry, and agricultural trading across Rewa, Mauganj, and Sidhi. Coal supply chains and power sector transactions have complex GST and entry tax implications — and businesses in ${district} supplying to power utilities or mining operations must manage RCM, e-way bills for bulk mineral movement, and correct HSN code classification for mineral commodities.`;
    case "Sagar Division":
      return `Sagar Division businesses in ${cityName} operate in an economy that includes Sagar's educational and administrative services, Bina's oil refinery supply chain, Chhatarpur's diamond mining and Khajuraho tourism, and agricultural commodity trading across Tikamgarh and Damoh. Businesses in ${district} connected to the Bina Petroleum Complex or diamond processing must pay particular attention to GST on mining services, refinery inputs, and precious stone classification under Chapter 71 HSN codes.`;
    case "Shahdol Division":
      return `Shahdol Division businesses in ${cityName} operate in a resource-rich economy dominated by coal mining (Singrauli-adjacent), forest produce, aluminium smelting (Anuppur's Mahan Aluminium), and tribal handcraft economy. Businesses in ${district} engaged in forest produce trading or tribal artisan supply chains must correctly apply GST exemptions under Schedule I and the reverse charge provisions applicable to purchases from unregistered tribal suppliers — a common source of compliance uncertainty.`;
    default:
      return `Madhya Pradesh businesses in ${cityName}, ${district} operate in a diverse state economy spanning agriculture, manufacturing, trading, and services — each with distinct GST registration, return filing, and compliance requirements that Taxvio's CA team is equipped to handle end-to-end.`;
  }
}

/* ─── Service Content Generator ──────────────────────────────────────────── */
function getServiceContent(cityName: string, district: string, region: string) {
  const regionCtx = getRegionContext(region, cityName, district);

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
        "All business types: Proprietor, Partnership, LLP, Pvt Ltd",
        "Aadhaar OTP-based e-KYC verification",
        "Documents: PAN, Aadhaar, address proof, bank details",
        "Additional place of business registration",
        "State Jurisdiction: MP Commercial Tax Department",
      ],
      seoContent: `GST registration in ${cityName}, ${district} is the foundational legal step for any business that crosses the annual turnover threshold — ₹40 lakh for goods suppliers and ₹20 lakh for service providers — or engages in interstate supply, e-commerce selling, import of services, or any of the notified categories that require mandatory registration regardless of turnover. Without a valid GSTIN, businesses in ${cityName} cannot legally issue GST tax invoices, charge CGST/SGST or IGST on sales, claim Input Tax Credit on business purchases, or participate in B2B supply chains where buyers require valid GSTINs for their own ITC eligibility.

Madhya Pradesh's GST ecosystem is administered at the state level by the MP Commercial Tax Department (CTD MP) for state GST, and at the central level by the CBIC's Bhopal Zone (covering four commissionerates — Bhopal, Indore, Jabalpur, and Gwalior) for central GST. For businesses in ${cityName}, the relevant state GST ward is determined by the business address in ${district} and the type of business activity — understanding this jurisdictional mapping is important for responding to any future GST notices or personal hearing calls from the right officer.

Taxvio's CA team handles end-to-end GST registration for ${cityName} businesses: starting with a pre-registration consultation to determine the correct GST scheme (Regular vs Composition, Casual Taxable Person, or Non-Resident Taxable Person), identify the correct HSN codes (for goods) or SAC codes (for services) for your primary business activities, and determine if Additional Place of Business registration is needed for any branch offices, godowns, or factories within ${district} or elsewhere in MP. Our team then handles the complete portal filing on gst.gov.in — PAN-Aadhaar linking verification, application submission, ARN generation, Aadhaar OTP authentication, and follow-up with the GST officer for final GSTIN allotment. GSTINs for MP businesses are typically issued within 3–7 working days of Aadhaar OTP verification.

${regionCtx}

Post-registration, Taxvio provides the GST Registration Certificate (Form REG-06), helps configure the new GSTIN on your accounting software (Tally, Busy, or any other), explains monthly and quarterly filing due dates, and sets up filing reminders — ensuring your ${cityName} business starts GST compliance correctly from Day 1 without missing any early deadlines that attract late fees.`,
    },

    /* ── 2. GSTR-1 & GSTR-3B Return Filing ── */
    {
      slug: "gst-return",
      title: `GST Return Filing in ${cityName}`,
      price: "₹999/month",
      timeline: "11th & 20th Monthly",
      icon: "📄",
      iconBg: "bg-blue-50 border-blue-100",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "#2563eb",
      accentBg: "bg-blue-50",
      accentText: "text-blue-700",
      features: [
        "GSTR-1 — invoice-level outward supply by 11th",
        "GSTR-3B — monthly summary with net tax payment by 20th",
        "GSTR-2B reconciliation before every GSTR-3B filing",
        "QRMP scheme filing — quarterly GSTR-1 + IFF",
        "HSN/SAC summary — mandatory for ₹5Cr+ turnover",
        "RCM liability computation and reporting",
      ],
      seoContent: `GST return filing is the ongoing compliance obligation for every GST-registered business in ${cityName}, ${district} — beginning the month after GSTIN registration and continuing every month until cancellation. There are two monthly returns: GSTR-1 (outward supply statement, due by the 11th of the following month) and GSTR-3B (monthly summary return with net tax payment, due by the 20th of the following month). Missing either return attracts late fees — ₹50 per day for regular taxpayers and ₹20 per day for nil filers — which accumulate quickly and block future return filings through the GST portal's enforced compliance mechanism.

GSTR-1 is the invoice-level outward supply declaration — every B2B invoice issued to GST-registered buyers must be reported with the buyer's GSTIN, invoice number and date, taxable value, applicable GST rate, and CGST/SGST/IGST split. This data flows directly into the buyer's GSTR-2B auto-populated ITC statement, meaning your timely and accurate GSTR-1 filing directly determines whether your B2B customers in ${district} and across MP can claim Input Tax Credit on their purchases from you. Any error, missing invoice, or late filing causes ITC restriction for your customers and can damage commercial relationships.

GSTR-3B is the net summary return where your ${cityName} business declares aggregated outward taxable turnover, tax liability, Input Tax Credit (from GSTR-2B), and net tax payable — paid via the electronic cash ledger. The single most important pre-filing step is GSTR-2B reconciliation: comparing ITC available in your auto-populated GSTR-2B against your purchase register to verify every ITC claim. Under Rule 36(4), ITC in GSTR-3B cannot exceed 105% of GSTR-2B eligible credit — any excess triggers a DRC-01A pre-demand intimation. Taxvio's return filing process for ${cityName} always begins with GSTR-2B reconciliation, identifying mismatches and flagging suppliers who haven't filed their GSTR-1.

For ${cityName} businesses with annual turnover up to ₹5 crore enrolled in the QRMP (Quarterly Return Monthly Payment) scheme, GSTR-1 is filed quarterly (by the 13th of the month after each quarter end) with an optional IFF (Invoice Furnishing Facility) for the first two months of each quarter — ensuring large B2B buyers get timely ITC without waiting for the quarterly GSTR-1. Monthly tax payment under QRMP is made via PMT-06 challan by the 25th. Taxvio advises ${cityName} businesses on whether QRMP is beneficial based on their buyer profile and manages all QRMP filings if opted.`,
    },

    /* ── 3. GSTR-9 Annual Return ── */
    {
      slug: "gstr-9",
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
        "Unpaid tax and late fee computation",
        "GSTR-9C audit statement — for ₹5Cr+ turnover",
        "Prior-year invoice amendment window",
        "Auto-drafted data verification and correction",
      ],
      seoContent: `GSTR-9 is the mandatory annual GST return for all regular taxpayers in ${cityName}, ${district} with annual aggregate turnover above ₹2 crore — due by 31st December for the preceding financial year (April–March). It consolidates the entire year's outward supplies (from all GSTR-1 filings), inward supplies eligible for ITC, tax paid across all 12 months, and any year-end adjustments. GSTR-9 is the primary mechanism through which the GST department verifies consistency between monthly returns and the business's annual financial position — making accuracy critical.

For ${cityName} businesses, GSTR-9 is also the most important compliance opportunity of the year — it provides a final window to correct mistakes made in monthly returns. Invoices missed in GSTR-1, excess ITC claimed in GSTR-3B, wrong tax rates applied during the year, or outward supply discrepancies between GSTR-1 and GSTR-3B can all be addressed in GSTR-9 (within the limits permitted by GST law). Amendments to monthly returns are not possible after the GSTR-9 filing deadline — so missing this annual correction window locks in errors permanently.

Taxvio's GSTR-9 filing process for ${cityName} businesses starts with a comprehensive 12-month reconciliation: matching annual outward supply turnover from the consolidated GSTR-1 filings against GSTR-3B Table 3 liability, verifying annual ITC claimed in GSTR-3B Table 4 against the cumulative GSTR-2B eligible amount, identifying ITC required to be reversed (Rule 42 for inputs used in exempt supply, Rule 43 for capital goods, and Section 17(5) blocked credits), and computing any unpaid tax with 18% interest. We then prepare Form GSTR-9 with accurate table-by-table entries, verify the auto-populated data against our reconciliation, and file before the 31st December deadline.

For ${cityName} businesses with annual turnover above ₹5 crore, the GSTR-9C reconciliation statement is also mandatory. GSTR-9C is a CA-certified document that reconciles the audited financial statements (P&L and Balance Sheet) with GSTR-9 data — covering unreconciled differences in declared turnover versus audited revenue, ITC claimed versus ITC as per books, and tax paid versus tax as per audited accounts. Our UP-based CA team (covering all of India including MP) has prepared hundreds of GSTR-9C reconciliation statements and understands the common reconciliation items for each of MP's key industry sectors — including manufacturing, trading, services, and agro-processing businesses in ${district}.`,
    },

    /* ── 4. GST LUT Filing ── */
    {
      slug: "gst-lut",
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
        "Annual LUT — Form RFD-11 on GST portal",
        "Export of goods and services without IGST payment",
        "Valid for goods exporters and service exporters",
        "SEZ supplies treated as zero-rated under LUT",
        "Renewable every financial year before April 1",
        "Eligibility: no GST prosecution in preceding 5 years",
      ],
      seoContent: `GST LUT (Letter of Undertaking) is the annual filing that enables exporters and SEZ suppliers in ${cityName}, ${district} to make zero-rated supplies without paying IGST upfront. Under Section 16(3) of the IGST Act, a registered exporter can either: pay IGST on exports and claim refund via shipping bill (for goods) or Form RFD-01 (for services), or file an LUT and export without IGST payment entirely. For most ${cityName} exporters, the LUT route is significantly more cash-flow efficient — avoiding the need to block working capital in IGST refund claims that can take 60–90 days to process.

LUT is filed in Form RFD-11 on the GST portal before the start of each financial year — ideally by March 31. For ${cityName} businesses that begin exports during the year, LUT can be filed at any time and takes effect from the date of acceptance. The filing requires a self-declaration undertaking that exports will be completed within the prescribed time limits (3 months for goods, 1 year for services) and that the taxpayer has not been prosecuted under the CGST Act, IGST Act, or any other fiscal law (Customs, FEMA, Income Tax) during the preceding 5 years.

For IT companies, software exporters, BPO and KPO units, and management consultants in ${cityName} billing foreign clients — LUT is not optional, it is essential. Without a valid LUT, every foreign invoice would require 18% IGST payment followed by a refund application, creating a persistent 60–90 day working capital gap. Taxvio files LUT for all ${cityName} exporters before the April 1 deadline each year — handling Form RFD-11 preparation, portal submission, ARN generation, and delivery of the LUT acceptance letter.

Post-LUT filing, we also ensure correct GSTR-1 reporting of export invoices: zero-rated supply without payment of tax must be reported in Table 6A (export with LUT) — distinct from Table 6B (export with payment of IGST). Incorrect table selection causes GSTR-2B issues for SEZ buyers and can trigger export refund delays or scrutiny notices. For ${cityName} businesses in ${region} that supply to Special Economic Zones within MP or in other states, the same LUT covers SEZ supplies — with the SEZ buyer's unit approval number required on the invoice.`,
    },

    /* ── 5. GST Refund ── */
    {
      slug: "gst-refund",
      title: `GST Refund Application in ${cityName}`,
      price: "₹2,999",
      timeline: "60–90 Days",
      icon: "💰",
      iconBg: "bg-sky-50 border-sky-100",
      gradient: "from-sky-500 to-blue-600",
      accentColor: "#0284c7",
      accentBg: "bg-sky-50",
      accentText: "text-sky-700",
      features: [
        "Export IGST refund — goods and services",
        "Inverted duty structure ITC refund (RFD-01)",
        "Excess cash ledger balance refund",
        "Wrong head payment rectification and refund",
        "Refund application tracking with GST officer",
        "RFDE deficiency memo response and resolution",
      ],
      seoContent: `GST refund claims are a critical working capital recovery mechanism for businesses in ${cityName}, ${district} that export goods or services, operate in industries where input tax rates exceed output tax rates (inverted duty structure), or have made excess GST payments into the wrong tax head. Section 54 of the CGST Act provides the statutory framework for GST refunds — with a 2-year limitation period from the "relevant date" (date of export, end of tax period for ITC accumulation, or date of payment for excess payments). Any refund not claimed within 2 years is permanently forfeited.

Madhya Pradesh has several industry clusters in ${region} where GST refund claims are particularly significant. Inverted duty structure refunds are critical for agro-processing businesses — soybean oil manufacturers in Ujjain Division, pulse processors in Sagar and Rewa divisions, and textile dyeing units in Nagda (Ujjain District) — where the GST rate on outputs (5% on food, 5% on fabrics) is consistently lower than the GST on inputs like packaging, chemicals, dyes, and capital goods (12–18%). The accumulated ITC on these inputs cannot be utilised against low-rate outputs, making periodic RFD-01 refund applications essential for cash-flow management. The eligible refund quantum is calculated using the formula prescribed in Rule 89(5): (Net ITC ÷ Adjusted Total Turnover) × Turnover of Inverted Rated Supply.

For export refunds, Taxvio handles both the automatic ICEGATE-linked refund route (for goods exported with IGST payment, where the shipping bill and GSTR-1 matching triggers automatic bank credit) and the manual RFD-01 route (for services exported with/without IGST, or unutilised ITC on goods exported under LUT). The RFD-01 process involves filing the refund application with Statement 3/3A (for services) or Statement 4 (for exports under LUT), responding to any RFDE (Refund Deficiency Memo) from the GST officer, and following up with the ${district} Commercial Tax office or the relevant Central GST Commissionerate for the Refund Sanction Order (RFD-06) within the 60-day statutory processing timeline.`,
    },

    /* ── 6. GST Notice Reply ── */
    {
      slug: "gst-notice-reply",
      title: `GST Notice Reply in ${cityName}`,
      price: "₹1,999",
      timeline: "30-Day Response Window",
      icon: "⚖️",
      iconBg: "bg-rose-50 border-rose-100",
      gradient: "from-rose-500 to-red-600",
      accentColor: "#e11d48",
      accentBg: "bg-rose-50",
      accentText: "text-rose-700",
      features: [
        "ASMT-10 scrutiny — ITC mismatch & turnover discrepancy",
        "DRC-01 demand notice — tax, interest & penalty reply",
        "DRC-01A pre-demand intimation response",
        "GSTR-2A vs GSTR-3B ITC gap resolution",
        "REG-17 show-cause for cancellation reply",
        "Personal hearing before MP Commercial Tax officer",
      ],
      seoContent: `GST notices from the MP Commercial Tax Department (CTD MP) and CBIC's Bhopal Zone are a growing compliance risk for businesses in ${cityName}, ${district} as the GST department deploys increasingly sophisticated data analytics to identify return discrepancies. The most common notice type is ASMT-10 (scrutiny notice under Section 61) — issued when the system detects discrepancies between GSTR-1 and GSTR-3B (outward supply mismatch), excess ITC claimed in GSTR-3B versus GSTR-2B auto-populated credit, under-declared turnover compared to e-way bill data or third-party information, or GSTR-9 annual figures inconsistent with monthly return totals. Failure to respond to ASMT-10 within 30 days leads to a best-judgement assessment under Section 62 — an ex parte order that is significantly harder to contest than a properly defended ASMT-10 reply.

DRC-01 is the most serious GST notice — it is the formal demand notice issued after the adjudication process under Section 73 (no fraud intent, 3-year limitation) or Section 74 (with intent to evade, 5-year limitation). DRC-01 demands the principal tax liability plus interest at 18% per annum from the original due date and penalty of 10% (Section 73) to 100% (Section 74) of the tax amount. For ${cityName} businesses receiving DRC-01, the response options are: paying the full demand under DRC-03 to avoid penalty escalation, filing a detailed written reply disputing the entire demand with supporting evidence, or filing a partial payment with reply for the undisputed portion.

DRC-01A is the pre-show-cause intimation introduced by the Finance Act 2020 — businesses receiving DRC-01A have an opportunity to pay the intimated demand voluntarily before a formal show-cause notice is issued, avoiding the Section 73/74 adjudication process entirely. Taxvio strongly recommends prompt professional review of every DRC-01A to assess whether voluntary payment (with only 10% penalty under Section 73) is preferable to contesting the demand.

Taxvio handles GST notice replies for ${cityName} businesses with a structured, CA-driven process: thorough notice analysis, complete return and purchase register review, preparation of detailed written reply with reconciliation statements and supporting evidence, and personal hearing representation before the relevant ward officer at the ${district} Commercial Tax office or the appropriate CGIC Commissionerate (Bhopal, Indore, Jabalpur, or Gwalior based on your jurisdiction). We have successfully defended ITC mismatch notices, turnover discrepancy notices, and DRC-01 demands for businesses across all 10 divisions of Madhya Pradesh.`,
    },

    /* ── 7. GST Cancellation & Revocation ── */
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
        "Voluntary cancellation — Form REG-16",
        "Final return GSTR-10 within 3 months of cancellation",
        "ITC reversal on closing stock computation",
        "Revocation of suo motu cancelled GSTIN (Form REG-21)",
        "Pending return filing before revocation",
        "Business constitution change-linked cancellation",
      ],
      seoContent: `GST cancellation becomes necessary for ${cityName} businesses that have closed operations, dropped below the turnover threshold and chosen to deregister, changed their business constitution (dissolution of partnership, company winding up, sole proprietor succession), or transferred/merged into another entity. Voluntary cancellation requires filing Form REG-16 on the GST portal — stating the reason for cancellation, effective date of business closure, details of stock-in-hand, and any pending tax liabilities. The GST officer reviews the application and may conduct a verification before issuing the cancellation order (Form REG-19).

The most critical compliance obligation post-cancellation is the final return GSTR-10 — mandatory for every cancelled GST taxpayer, due within 3 months of the cancellation order date. GSTR-10 requires declaration of closing stock at the time of cancellation and computation of tax payable on that stock (as if it were sold on the cancellation date). ITC previously claimed on the stock-in-hand must be reversed, and the resultant tax liability must be paid. Non-filing of GSTR-10 within 3 months leads to a GSTR-10 best-judgement assessment and system-generated demand — a common problem for ${cityName} businesses that complete the cancellation process but overlook the final return requirement.

Revocation of cancelled GSTIN is increasingly urgent for ${cityName} businesses whose registration was cancelled suo motu by the GST department for consecutive non-filing of returns. Under the GST department's automated compliance enforcement, GSTINs across MP are cancelled monthly for persistent non-filers — and a cancelled GSTIN means the business cannot issue valid tax invoices, buyers cannot claim ITC on purchases, and supply chain participation is cut off. Form REG-21 (revocation application) must be filed within 30 days of the cancellation order — along with all pending GST returns (GSTR-1 and GSTR-3B for every missed period) and full payment of outstanding tax, interest, and late fees.

Taxvio handles the complete GST cancellation and revocation process for ${cityName} businesses — including REG-16 preparation, GSTR-10 computation and filing, ITC reversal calculation on closing stock, and revocation applications with all pending return filing. We also advise on whether cancellation or suspension is the more appropriate route for businesses that are temporarily non-operational but plan to resume — as voluntary cancellation and re-registration is more complex than maintaining a dormant GSTIN with nil return filings.`,
    },

    /* ── 8. GST Amendment ── */
    {
      slug: "gst-amendment",
      title: `GST Amendment & Update in ${cityName}`,
      price: "₹999",
      timeline: "3–7 Working Days",
      icon: "✏️",
      iconBg: "bg-violet-50 border-violet-100",
      gradient: "from-violet-500 to-purple-600",
      accentColor: "#7c3aed",
      accentBg: "bg-violet-50",
      accentText: "text-violet-700",
      features: [
        "Core field amendment — legal name, address, business type",
        "Non-core field update — mobile, email, bank details",
        "Additional place of business (branch/godown/factory)",
        "Partner or director addition / removal",
        "HSN / commodity change in registration",
        "Approval tracking with MP Commercial Tax office",
      ],
      seoContent: `GST registration amendments are required whenever there is a material change in the business details of a ${cityName} registered taxpayer that differs from what is recorded in the GST registration certificate (Form REG-06). Operating a business with incorrect or outdated GST registration details — wrong address, old partner details, changed business name, or expanded business activities not reflected in the registration — is a compliance risk: GST officers conducting field verification and e-way bill inspectors cross-check invoice details against GSTIN records, and mismatches create immediate enforcement issues.

GST amendments are classified as core modifications and non-core modifications. Core modifications affect the fundamental attributes of the registration — legal name of the business, principal place of business address, addition or removal of partners/directors, or change in the category of registered person. Core amendments require approval by the GST officer (typically 7–10 working days after application) and may require physical verification of the new address for address changes. Non-core modifications are self-certified changes — mobile number, email address, additional bank account, authorised signatory details — effective from the date of filing without officer approval (typically reflected within 24–48 hours).

For ${cityName} businesses that have expanded — opening a new godown, adding a factory in an industrial area of ${district}, or setting up a branch office elsewhere in MP — Adding an Additional Place of Business (APOB) to the GST registration is mandatory. Sales from or purchases to an unregistered additional place attract reconciliation mismatches in GSTR-1 and GSTR-3B and can trigger e-way bill violations if goods are dispatched from an unlisted address. Taxvio identifies all APOB addition requirements during our annual GSTR-9 reconciliation review — catching address gaps before they become scrutiny triggers.

Partner and director changes are another common amendment requirement — when a partnership firm in ${cityName} adds a new partner, or when a private limited company changes its directors. GST law requires the new partner/director to be added to the registration within 15 days of the change, with supporting documents (DIN for directors, Aadhaar and PAN for partners). Failure to update within 15 days is a technical violation that can be cited during officer verification. Taxvio handles all categories of GST amendment for ${cityName} businesses — including simultaneous amendments for multiple changes to avoid multiple separate applications and processing delays.`,
    },

    /* ── 9. E-Invoicing & E-Way Bill ── */
    {
      slug: "gst-e-invoicing",
      title: `GST E-Invoicing & E-Way Bill in ${cityName}`,
      price: "₹999",
      timeline: "Setup in 1–2 Days",
      icon: "📱",
      iconBg: "bg-indigo-50 border-indigo-100",
      gradient: "from-indigo-500 to-blue-600",
      accentColor: "#4338ca",
      accentBg: "bg-indigo-50",
      accentText: "text-indigo-700",
      features: [
        "IRP registration and IRN generation setup",
        "QR code printing configuration for invoices",
        "Tally / Busy / ERP API integration support",
        "E-way bill for goods movement above ₹50,000",
        "Bulk e-way bill generation and vehicle update",
        "Consolidated e-way bill for multi-consignment",
      ],
      seoContent: `E-invoicing is mandatory for all GST-registered businesses in ${cityName}, ${district} with aggregate annual turnover above ₹5 crore (the threshold that has progressively reduced from ₹500 crore in October 2020 to ₹5 crore from August 2023). Under the e-invoicing system, every B2B invoice, B2G invoice, and export invoice must be registered on the Invoice Registration Portal (IRP — operated by NIC, Clear, or other authorised IRPs) within 30 days of the invoice date. The IRP validates the invoice data against the GSTN database, generates a unique Invoice Reference Number (IRN) — a 64-character hash — and returns a signed JSON with a QR code that must be printed on every e-invoice. B2B invoices issued without a valid IRN are not legally valid tax invoices under GST law, and buyers cannot claim ITC on such invoices.

For ${cityName} businesses approaching the ₹5 crore annual turnover threshold or that have recently crossed it, Taxvio provides complete e-invoice implementation: IRP registration, API credentials setup, configuration of your accounting software (Tally.ERP 9, TallyPrime, Busy Accounting, QuickBooks India, or any custom ERP) for automated IRN generation on invoice save, QR code printing format configuration for your invoice template, and staff training on the e-invoice workflow. After e-invoice implementation, GSTR-1 filing becomes significantly simpler — all IRN-registered invoices auto-populate in GSTR-1 via the GST portal's e-invoice data pull, reducing manual data entry and eliminating invoice-level errors.

E-way bills are required for every movement of goods valued above ₹50,000 within Madhya Pradesh or across state borders — whether the movement is for a taxable supply, branch transfer, return of goods, job work, or exhibition display. For manufacturing businesses in ${cityName}'s industrial areas, traders with multiple warehouses across ${district}, or distributors moving goods across MP and into adjacent states (UP, Rajasthan, Gujarat, Maharashtra, Chhattisgarh), e-way bill compliance is a daily operational requirement. Taxvio provides e-way bill management services including bulk EWB generation from invoice data, Part-B (vehicle number) update after transporter confirmation, validity extension for delayed transit, cancellation of incorrect EWBs, and consolidated EWB for shipments where one vehicle carries goods for multiple consignees.

For ${region} businesses in manufacturing, commodity trading, or distribution with high-volume goods movement, Taxvio also advises on the e-way bill compliance calendar to ensure no movement occurs without a valid EWB — since intercepted vehicles without valid e-way bills attract penalty under Section 129 (detention, seizure, and 200% of tax as penalty) which is one of the most disproportionately costly GST enforcement actions for businesses in ${district}.`,
    },

    /* ── 10. GSTIN Search & Verification ── */
    {
      slug: "gst-search",
      title: `GSTIN Search & Verification in ${cityName}`,
      price: "₹199",
      timeline: "Same Day",
      icon: "🔍",
      iconBg: "bg-cyan-50 border-cyan-100",
      gradient: "from-cyan-500 to-teal-600",
      accentColor: "#0891b2",
      accentBg: "bg-cyan-50",
      accentText: "text-cyan-700",
      features: [
        "GSTIN authenticity and format validation",
        "Real-time registration status (Active / Cancelled / Suspended)",
        "Legal name and trade name verification",
        "Taxpayer type and composition status",
        "Registration date and jurisdiction details",
        "Return filing status — last filed period",
      ],
      seoContent: `GSTIN verification is a critical due diligence step for businesses in ${cityName}, ${district} before entering into purchase transactions, vendor agreements, or contractual supply arrangements. Under GST law, Input Tax Credit (ITC) is only available to buyers on purchases from GST-registered suppliers with an active, valid GSTIN — purchases from cancelled, suspended, or fraudulent GSTINs do not generate eligible ITC, and buyers who claim ITC on such purchases face demand notices, ITC reversal orders, and 18% interest from the original filing date.

The most common GSTIN verification scenarios for ${cityName} businesses include: pre-onboarding vendor due diligence before adding a new supplier to the purchase register, verifying a GSTIN quoted on an invoice received to ensure it matches the seller's registered name and address, validating a GSTIN before paying GST TDS under Section 51 (applicable to certain government entities and notified businesses), checking a potential business partner's GST registration status during commercial due diligence, and verifying competitor or counterparty details for contractual purposes.

The GST portal's GSTIN Search tool (gst.gov.in/commonprd/search) provides real-time information on any GSTIN: the legal name of the registered taxpayer, trade name (if different), principal place of business address, registration date, taxpayer type (Regular, Composition, UIN, etc.), and current status (Active, Cancelled, Suspended). However, the portal does not show return filing compliance status — whether the supplier is regularly filing GSTR-1 and GSTR-3B is visible only on the GSTR-2B statement of the buyer (if they've purchased from that supplier) or through the supplier's HSN summary data.

For bulk vendor verification — businesses in ${cityName} managing purchase rosters with dozens or hundreds of suppliers across ${district} and other MP districts — Taxvio provides systematic GSTIN verification services: cross-referencing every active vendor GSTIN against the GST portal database, identifying cancelled or inactive GSTINs in your vendor master, flagging GSTINs with GSTIN-PAN mismatches (a red flag for fake invoice fraud), and providing a clean verified vendor GSTIN list for your accounts team. This proactive verification prevents the ITC loss and penalty exposure that arises when purchases are made from suppliers with non-compliant or fraudulent GSTINs.`,
    },

    /* ── 11. GST for E-Commerce Sellers ── */
    {
      slug: "gst-for-e-commerce",
      title: `GST for E-Commerce Sellers in ${cityName}`,
      price: "₹1,999",
      timeline: "Ongoing Monthly",
      icon: "🛒",
      iconBg: "bg-orange-50 border-orange-100",
      gradient: "from-orange-500 to-amber-600",
      accentColor: "#ea580c",
      accentBg: "bg-orange-50",
      accentText: "text-orange-700",
      features: [
        "GST registration for marketplace sellers (mandatory, no threshold)",
        "Monthly GSTR-1 & GSTR-3B with settlement reconciliation",
        "Marketplace TCS credit matching — Section 52",
        "GSTR-8 compliance for e-commerce operators (ECOs)",
        "Section 9(5) advisory — Zomato / Swiggy restaurant GST",
        "Amazon / Flipkart / Meesho / Shopify D2C seller support",
      ],
      seoContent: `E-commerce sellers in ${cityName}, ${district} face a unique and often misunderstood set of GST compliance obligations — distinct from ordinary trading or service businesses in several important ways. The most critical difference: e-commerce sellers on any electronic commerce operator (ECO) — Amazon, Flipkart, Meesho, Snapdeal, Myntra, JioMart, or any other marketplace — are mandatorily required to register for GST regardless of their annual turnover. The normal ₹40 lakh (goods) / ₹20 lakh (services) threshold exemption does not apply to e-commerce sellers. This is one of the most common compliance gaps for new sellers from ${cityName} starting on online marketplaces — many operate for months or years without GST registration under the mistaken belief that the turnover threshold applies to them.

The second major complexity for ${cityName} marketplace sellers is GST TCS (Tax Collected at Source) under Section 52 of the CGST Act. Marketplace operators (Amazon, Flipkart, Meesho) are required to collect 1% TCS (0.5% CGST + 0.5% SGST for intra-state supply, or 1% IGST for interstate supply) on the net value of taxable supplies made by sellers through their platform. This TCS is deducted from seller settlement amounts and deposited with the government by the marketplace operator — appearing in the seller's GSTR-2B as a credit. Matching marketplace settlement reports (showing TCS deducted) against GSTR-2B TCS credit entries is a monthly reconciliation exercise that many ${cityName} sellers overlook, resulting in unclaimed TCS credits accumulating over multiple quarters.

Taxvio provides complete GST compliance for e-commerce sellers in ${cityName}: GST registration, monthly GSTR-1 filing (with invoice-level data matching the marketplace's transaction reports), GSTR-3B filing with accurate ITC claim (including TCS credits) and liability computation, annual GSTR-9, and proactive notice management for any marketplace ITC mismatch notices. For sellers on Zomato, Swiggy, and other food delivery platforms, we also advise on the Section 9(5) reverse charge implication — where the food delivery platform is liable to pay GST on restaurant services (not the restaurant itself, if the restaurant has turnover below the registration threshold). For D2C brands from ${cityName} selling through Shopify, WooCommerce, or their own website, we handle GST registration, invoicing setup, monthly return filing, and LUT for export orders.`,
    },

    /* ── 12. GST for Freelancers & Professionals ── */
    {
      slug: "gst-for-freelancers",
      title: `GST for Freelancers & Professionals in ${cityName}`,
      price: "₹1,999",
      timeline: "Ongoing Monthly",
      icon: "💻",
      iconBg: "bg-pink-50 border-pink-100",
      gradient: "from-pink-500 to-rose-600",
      accentColor: "#e11d48",
      accentBg: "bg-pink-50",
      accentText: "text-pink-700",
      features: [
        "GST registration for freelancers and consultants",
        "LUT filing for zero-rated foreign client invoicing",
        "SAC code identification for service classification",
        "Monthly GSTR-1 & GSTR-3B with ITC on tools",
        "QRMP scheme advisory and quarterly filing",
        "RCM compliance for foreign software subscriptions",
      ],
      seoContent: `Freelancers, independent consultants, and self-employed professionals in ${cityName}, ${district} are among the fastest-growing GST registrant categories in Madhya Pradesh — driven by Indore's expanding IT and startup ecosystem, Bhopal's growing digital services sector, and the nationwide shift toward remote work and independent professional practice across all MP cities. GST registration is mandatory for freelancers and independent professionals with annual service revenue above ₹20 lakh — and for those billing foreign clients (export of services), registration is advisable even below the threshold to enable LUT filing and zero-rated export invoicing.

The most important GST compliance action for ${cityName} freelancers billing foreign clients — IT developers, UI/UX designers, content writers, digital marketers, management consultants, chartered accountants, and lawyers providing cross-border services — is the annual LUT (Letter of Undertaking) filing. Without a valid LUT, every foreign invoice requires payment of 18% IGST (since the place of supply for most cross-border services is the location of the recipient), followed by a refund application under RFD-01 — blocking significant working capital in a refund process that takes 60–90 days. With a valid LUT, the same foreign invoice is treated as zero-rated supply with no IGST payment required. Taxvio handles LUT filing (Form RFD-11) for ${cityName} freelancers every year before April 1, at ₹999 per annual filing.

SAC (Service Accounting Code) classification is critical for freelancers in ${cityName} — each type of professional service has a specific SAC code that determines the applicable GST rate (typically 18% for most professional services) and the correct tax head (CGST + SGST for Indian clients, IGST for interstate clients, zero-rated for foreign clients). Common SAC codes for MP freelancers include: 998314 (IT software development), 998311 (management consulting), 999293 (creative and content writing), and 998361 (graphic design). Incorrect SAC classification causes rate mismatches in GSTR-1 that generate ASMT-10 scrutiny notices.

RCM (Reverse Charge Mechanism) is a frequently overlooked compliance area for ${cityName} professionals: foreign cloud subscriptions (AWS, Google Cloud, Microsoft Azure), SaaS tools (Adobe Creative Cloud, Figma, Slack, Notion), and overseas professional services are treated as import of services under GST — attracting 18% GST on the subscription amount under RCM, payable by the Indian recipient (the freelancer). This RCM liability must be declared in GSTR-3B Table 3.1(d), paid in cash, and simultaneously claimed as ITC in Table 4 (if the tool is used exclusively for taxable business purposes) — creating a GST-neutral cash flow in the same period. Taxvio handles all RCM computation and declaration for ${cityName} freelancers to ensure this compliance area is covered completely.`,
    },
  ];
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function MPGSTCityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  const cityData = getCityData(city);
  const cityName = cityData?.name ?? formatCityDisplay(city);
  const district = cityData?.district ?? cityName;
  const region = cityData?.region ?? "Madhya Pradesh";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hello Taxvio, I need GST services in ${cityName}, ${district}, Madhya Pradesh.`
  )}`;

  const services = getServiceContent(cityName, district, region);

  const nearbyCities = MP_CITIES
    .filter((c) => c.district === district && slugifyCity(c.name) !== city)
    .slice(0, 5);
  const regionCities = nearbyCities.length < 3
    ? MP_CITIES.filter((c) => c.region === region && slugifyCity(c.name) !== city).slice(0, 6)
    : nearbyCities;

  /* ─── JSON-LD Schemas ─── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides GST registration, GSTR-1, GSTR-3B & GSTR-9 filing, LUT, refund, notice reply, e-invoicing and GST for e-commerce sellers in ${cityName}, ${district}, Madhya Pradesh.`,
    areaServed: [
      {
        "@type": "City",
        name: cityName,
        containedInPlace: { "@type": "State", name: "Madhya Pradesh" },
      },
    ],
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
      { "@type": "ListItem", position: 1, name: "Home",                 item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "GST Services MP",      item: "https://www.taxvio.in/state/madhya-pradesh/gst-services" },
      { "@type": "ListItem", position: 3, name: district,               item: `https://www.taxvio.in/state/madhya-pradesh/gst-services#${district.toLowerCase().replace(/\s+/g, "-")}` },
      { "@type": "ListItem", position: 4, name: `${cityName} GST`,      item: `https://www.taxvio.in/state/madhya-pradesh/gst-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `GST Services in ${cityName}, Madhya Pradesh — Taxvio`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/madhya-pradesh/gst-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does GST registration take in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `GST registration in ${cityName}, ${district} typically takes 3–7 working days from document submission on the GST portal. Aadhaar OTP-based verification speeds up the process. Your GSTIN is issued by the MP Commercial Tax Department for state GST and CBIC's Bhopal Zone for central GST, depending on the nature of your business.`,
        },
      },
      {
        "@type": "Question",
        name: `What are the GST return filing due dates for ${cityName} businesses?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `GSTR-1 is due by the 11th of the following month (13th for quarterly QRMP filers). GSTR-3B is due by the 20th of the following month (25th via PMT-06 for QRMP filers). GSTR-9 annual return is due by 31st December each year for the preceding financial year. Late fees apply from the day after the due date.`,
        },
      },
      {
        "@type": "Question",
        name: `Is GST registration mandatory for e-commerce sellers in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. E-commerce sellers on Amazon, Flipkart, Meesho, or any online marketplace in ${cityName} must register for GST regardless of annual turnover — the standard ₹40 lakh / ₹20 lakh threshold exemption does not apply to marketplace sellers. Failure to register attracts penalty under Section 122 of the CGST Act.`,
        },
      },
      {
        "@type": "Question",
        name: `What GST jurisdiction covers ${cityName}, ${district}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${cityName}, ${district} falls under the state GST jurisdiction of the MP Commercial Tax Department (CTD MP) and the central GST jurisdiction of CBIC's ${region.includes("Indore") ? "Indore" : region.includes("Jabalpur") ? "Jabalpur" : region.includes("Gwalior") ? "Gwalior" : "Bhopal"} Commissionerate under the Bhopal Zone. GST notices, personal hearings, and refund processing for ${cityName} businesses are handled through the relevant district-level commercial tax office in ${district}.`,
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="mp-gst-city-lb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="mp-gst-city-bc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="mp-gst-city-sl"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="mp-gst-city-faq"
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
                  { href: "/",                                              label: "Home"              },
                  { href: "/state/madhya-pradesh",                          label: "Madhya Pradesh"    },
                  { href: "/state/madhya-pradesh/gst-services",             label: "GST Services"      },
                  { href: null,                                             label: cityName            },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5">
                    {href
                      ? <Link href={href} className="hover:text-white/80 transition">{label}</Link>
                      : <span className="text-white/80 font-semibold">{label}</span>}
                    {i < arr.length - 1 && (
                      <span className="text-white/25">›</span>
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
                  {cityName}, {district} · Madhya Pradesh · GST Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  GST Registration &amp; Filing
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {cityName}, MP
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert{" "}
                  <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">GSTR-1 &amp; GSTR-3B monthly filing</strong>,
                  GSTR-9 annual return, LUT for exporters, refund, notice reply, e-invoicing, and
                  GST for e-commerce sellers in{" "}
                  <strong className="text-white">
                    {cityName}, {district} District, Madhya Pradesh
                  </strong>{" "}
                  — 100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹999</strong>.
                </p>

                {/* Trust chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck,    text: "CA-Certified"        },
                    { icon: Shield,        text: "100% Secure"         },
                    { icon: Zap,           text: "3–7 Day GSTIN"       },
                    { icon: Clock,         text: "Mon–Sat 9AM–7PM"    },
                    { icon: Star,          text: "4.9★ Rating"         },
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
                    <p className="font-bold text-white text-sm">GST Services — {cityName}</p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      {district} · {services.length} services
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5 max-h-[360px] overflow-y-auto">
                  {services.map((svc) => (
                    <a
                      href={`#${svc.slug}`}
                      key={svc.slug}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-white/10"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="flex items-center gap-2 text-xs font-semibold text-white/75">
                        <span>{svc.icon}</span>
                        <span className="truncate">
                          {svc.title.replace(` in ${cityName}`, "")}
                        </span>
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
                { icon: BadgeCheck,  label: "ICAI-Certified CAs"        },
                { icon: TrendingUp,  label: "12,000+ GST Returns Filed"  },
                { icon: Users,       label: "4,800+ MP Businesses"       },
                { icon: IndianRupee, label: "₹2.4Cr+ Tax Saved"          },
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
              { val: "3–7",  label: "Days for GSTIN",    icon: Zap         },
              { val: "4.9★", label: "Average Rating",    icon: Star        },
              { val: "₹999", label: "Starting Price",    icon: IndianRupee },
              { val: "100%", label: "Online Process",    icon: Globe       },
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

        {/* ════════════ SERVICE ARTICLES ════════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-16">
            {services.map((svc, idx) => (
              <article
                key={svc.slug}
                id={svc.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Service header */}
                <div className={`bg-gradient-to-r ${svc.gradient} p-6 md:p-8`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
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
                    <div className="flex flex-wrap gap-3 shrink-0">
                      <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center">
                        <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wide">
                          Price
                        </p>
                        <p className="text-white font-extrabold text-lg leading-tight">
                          {svc.price}
                        </p>
                      </div>
                      <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center">
                        <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wide">
                          Timeline
                        </p>
                        <p className="text-white font-bold text-sm leading-tight">
                          {svc.timeline}
                        </p>
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
                        <a
                          href={WA}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97] shadow-md shadow-green-500/20"
                        >
                          <MessageCircle size={14} />{" "}
                          WhatsApp for {svc.title.split(" in ")[0]}
                        </a>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-[#00416a] hover:bg-[#002b45] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97]"
                        >
                          Get Quote <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Feature checklist */}
                    <div
                      className={`${svc.accentBg} rounded-2xl p-5 border ${svc.iconBg.split(" ")[1]}`}
                    >
                      <p className="text-xs font-bold text-[#00416a] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle size={13} /> What's Included
                      </p>
                      <ul className="space-y-3">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <div
                              className={`w-5 h-5 rounded-full ${svc.iconBg} flex items-center justify-center shrink-0 mt-0.5`}
                            >
                              <CheckCircle size={11} className={svc.accentText} />
                            </div>
                            <span className="text-xs text-gray-700 font-medium leading-relaxed">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Price callout */}
                      <div className="mt-5 pt-4 border-t border-gray-200/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
                              Service Fee
                            </p>
                            <p className={`text-2xl font-extrabold ${svc.accentText}`}>
                              {svc.price}
                            </p>
                          </div>
                          <a
                            href={WA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#00416a] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#002b45] transition-all"
                          >
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
                {
                  icon: Users,
                  title: "CA-Certified GST Professionals",
                  desc: `Every GST service for ${cityName} businesses is handled by practising CAs — not data entry agents. We understand MP Commercial Tax Department jurisdiction, ${region} industry GST nuances, and ${district} office procedures.`,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Share all documents via WhatsApp or email from ${cityName}. No need to visit a CA office or GST Seva Kendra. GSTIN applications, return filings, refund applications, and notice replies — all handled remotely.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Shield,
                  title: "GSTR-2B Reconciliation First",
                  desc: `Our GSTR-3B filing always starts with ITC reconciliation against GSTR-2B — verifying every rupee before claiming. This protects ${cityName} businesses from ITC mismatch notices under Rule 36(4), the most common GST notice type in MP.`,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Notice Monitoring",
                  desc: `We monitor your GSTIN for ASMT-10 scrutiny, DRC-01A pre-demand intimations, and suo motu cancellation risks — alerting you immediately and preparing complete replies within the statutory response window.`,
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹999",
                  desc: `No hidden fees across any of the 12 GST services. Clear, upfront pricing for registration, returns, GSTR-9, LUT, refund, notice reply, e-invoicing, and specialist e-commerce / freelancer GST — quoted before we start.`,
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: Landmark,
                  title: `${region} Industry Expertise`,
                  desc: `We understand the specific GST needs of ${region}'s dominant industries — ${region.includes("Ujjain") ? "soybean processing inverted duty refunds, agro-trading ITC chains" : region.includes("Indore") ? "pharma export LUT, e-commerce TCS, IT freelancer RCM" : region.includes("Jabalpur") ? "cement supply chains, forest produce exemptions, defence sector GST" : region.includes("Rewa") ? "coal and power sector RCM, cement and stone GST" : "agricultural commodity GST, trading ITC compliance"} — and beyond.`,
                  color: "bg-sky-100 text-sky-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-5 bg-[#f8fbfd] border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
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

        {/* ════════════ PROCESS STEPS ════════════ */}
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
                {
                  step: "01",
                  title: "Share Documents",
                  desc: `Send PAN, Aadhaar, business address proof, bank statement & proprietor photo on WhatsApp from ${cityName}`,
                },
                {
                  step: "02",
                  title: "CA Review",
                  desc: "Our CA team reviews documents, determines correct GST scheme and HSN/SAC codes, and prepares your application within 24 hours",
                },
                {
                  step: "03",
                  title: "Aadhaar OTP",
                  desc: "Verify identity via Aadhaar OTP. We handle portal submission, ARN generation, and follow-up with the MP GST officer",
                },
                {
                  step: "04",
                  title: "GSTIN Received",
                  desc: `GSTIN allotted in 3–7 working days. We send the GST certificate and brief you on monthly filing obligations for ${cityName}`,
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center mb-3">
                    {step}
                  </div>
                  <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  {step !== "04" && (
                    <ArrowRight
                      size={14}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 text-[#00416a] hidden md:block"
                    />
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
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">
                    {district} District &amp; {region}
                  </p>
                  <h2 className="text-lg font-extrabold text-gray-800">
                    GST Services in Nearby Cities
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link
                    key={c.name}
                    href={`/state/madhya-pradesh/gst-services/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all"
                  >
                    <MapPin
                      size={11}
                      className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0 transition-colors"
                    />
                    GST in {c.name}
                    <ArrowRight
                      size={11}
                      className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                ))}
                <Link
                  href="/state/madhya-pradesh/gst-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00416a]/30 bg-[#deeef7] px-4 py-2 text-sm font-bold text-[#00416a] hover:shadow-sm transition-all"
                >
                  View All MP Cities{" "}
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
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
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-sky-300" />
                  Serving GST clients in {cityName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Expert GST Help in {cityName}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  GST registration, GSTR-1/3B monthly filing, GSTR-9 annual return, LUT, refund,
                  notice reply, e-invoicing, GST for e-commerce sellers, and GST for freelancers —
                  all delivered online for businesses in {cityName}, {district}. Starting ₹999.
                  CA-assisted, same-day WhatsApp response.
                </p>
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
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
                <p className="mt-6 text-white/40 text-xs">
                  GST Registration · GSTR-1 · GSTR-3B · GSTR-9 · LUT · Refund · Notice Reply ·
                  E-Invoicing · E-Commerce GST · Freelancer GST · {district} District · 100% Online
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

/* ─── Globe icon (inline) ─────────────────────────────────────────────────── */
function Globe({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}