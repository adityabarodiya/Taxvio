// app/state/bihar/gst-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, BookOpen, ClipboardList,
  ShoppingCart, Laptop, Search,
} from "lucide-react";
import {
  BIHAR_AREAS, ALL_AREA_SLUGS, slugifyArea,
  getAreaData, formatAreaDisplay,
} from "@/data/bihar-cities";

/* ─── Static Params ─────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return ALL_AREA_SLUGS.map((city) => ({ city }));
}

/* ─── Metadata ──────────────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const data     = getAreaData(city);
  const areaName = data?.name     ?? formatAreaDisplay(city);
  const district = data?.district ?? areaName;

  return {
    title: `GST Registration & Return Filing in ${areaName}, Bihar | Taxvio`,
    description: `Expert GST registration, GSTR-1/GSTR-3B filing, GST refund, LUT filing, GSTIN verification, e-commerce GST and freelancer GST in ${areaName}, ${district}, Bihar. CA-assisted, 100% online, starting ₹1,499. Get your GSTIN in 3–7 days.`,
    keywords: [
      `GST registration ${areaName}`,
      `GST return filing ${areaName} Bihar`,
      `GSTIN ${areaName} ${district}`,
      `GST consultant ${areaName} Bihar`,
      `GST refund ${areaName}`,
      `GST for e-commerce ${areaName}`,
      `GST for freelancers ${areaName}`,
      `GSTIN verification ${areaName}`,
      `online GST ${areaName} Bihar`,
      `CA GST services ${district}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/bihar/gst-services/${city}` },
    openGraph: {
      title: `GST Services in ${areaName}, Bihar | Taxvio`,
      description: `GST registration, GSTR filing, refund, LUT, e-commerce & freelancer GST in ${areaName}, ${district}, Bihar — CA-assisted, from ₹1,499.`,
      url: `https://www.taxvio.in/state/bihar/gst-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `GST Services in ${areaName}, Bihar | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(areaName: string, district: string, region: string) {
  return [

    /* ── 1. GST Registration ── */
    {
      slug: "gst-registration",
      title: `GST Registration in ${areaName}`,
      price: "₹1,499",
      timeline: "3–7 Working Days",
      icon: "🧾",
      gradient: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "End-to-end GST eligibility consultation",
        "Document preparation & FoSCoS/GST portal filing",
        "GSTIN allotment within 3–7 working days",
        "Aadhaar OTP-based e-KYC authentication",
        "Post-registration guidance & accounting setup",
        "All Bihar GST ward jurisdictions covered",
      ],
      seoContent: `GST registration is mandatory in ${areaName}, ${district}, Bihar for any business whose annual turnover crosses ₹40 lakh (goods) or ₹20 lakh (services), or that supplies goods/services interstate, sells through e-commerce marketplaces, or falls under any notified category — regardless of turnover. Taxvio provides complete GST registration for businesses in ${areaName} with GSTIN typically issued within 3–7 working days.

A registered GSTIN allows your ${areaName} business to legally charge GST on invoices, claim Input Tax Credit on business purchases, and be eligible for B2B contracts that require tax invoices. Without it, you cannot issue GST-compliant invoices, and any B2B buyer purchasing from you cannot claim ITC — a serious commercial disadvantage in Bihar's growing trade and manufacturing economy, particularly in ${district}'s active business zones.

Taxvio's registration process for ${areaName} businesses starts with an eligibility consultation to determine the correct registration category — Regular Scheme, Composition Scheme (for turnover below ₹1.5 crore in goods or ₹50 lakh in services), or Casual Taxable Person for temporary business activity. We then prepare and submit all required documents — PAN, Aadhaar, business address proof specific to ${areaName} (rent agreement, electricity bill, or property tax receipt), bank account details, and photographs of the proprietor or partners — through the GST portal, generate the Application Reference Number (ARN), complete Aadhaar OTP authentication, and follow up with the jurisdictional ward officer covering ${district} until GSTIN allotment.

Once your GSTIN is issued, we configure it correctly in your accounting or billing software, explain your specific monthly/quarterly filing obligations based on turnover and scheme, and set up automated filing reminders — so your ${areaName} business starts GST compliance correctly from day one rather than discovering gaps after the first missed deadline.`,
    },

    /* ── 2. GST Return Filing ── */
    {
      slug: "gst-return-filing",
      title: `GST Return Filing (GSTR-1 & GSTR-3B) in ${areaName}`,
      price: "₹999/month",
      timeline: "Monthly, before 11th & 20th",
      icon: "📄",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "GSTR-1 (outward supplies) — due 11th monthly",
        "GSTR-3B (summary return) — due 20th monthly",
        "Invoice-level reconciliation before filing",
        "ITC vs GSTR-2B matching to avoid mismatch notices",
        "Late fee & interest computation when applicable",
        "QRMP scheme support for small taxpayers",
      ],
      seoContent: `GST return filing is the recurring monthly or quarterly compliance obligation for every GST-registered business in ${areaName}, ${district}, Bihar — and missing a deadline triggers automatic late fees, interest at 18% per annum, and risk of GSTIN suspension after repeated defaults. GSTR-1 (declaring all outward sales) is due by the 11th of the following month, and GSTR-3B (the summary return declaring net tax liability and ITC claimed) is due by the 20th.

Taxvio's monthly GST return filing service for ${areaName} businesses begins with reconciling your sales register against GSTR-1 data — catching duplicate invoices, incorrect buyer GSTINs, and wrong tax rates before submission. We then verify ITC eligibility by matching your purchase records against GSTR-2B (the auto-populated statement from your suppliers' filings), since under Rule 36(4) you cannot claim ITC beyond what your suppliers have actually reported — claiming excess triggers automatic ASMT-10 mismatch notices from the Bihar GST department.

For small and medium businesses in ${areaName} that qualify for the QRMP (Quarterly Return Monthly Payment) scheme — turnover up to ₹5 crore — we manage the quarterly GSTR-1 filing alongside the monthly PMT-06 tax payment challan, reducing your compliance frequency while keeping cash flow predictable. We track every filing deadline specific to your registration scheme and send proactive reminders well before due dates.

Whether your ${areaName} business is a retail shop, a wholesale trading firm in ${district}'s commercial markets, or a growing services company, our reconciliation-first approach to GST return filing means fewer notices, accurate ITC claims, and a clean compliance history — which matters directly for loan eligibility, government tenders, and vendor onboarding with larger corporate buyers across Bihar.`,
    },

    /* ── 3. GST Refund Application ── */
    {
      slug: "gst-refund",
      title: `GST Refund Application in ${areaName}`,
      price: "₹2,499",
      timeline: "60 Days (statutory)",
      icon: "💰",
      gradient: "from-sky-500 to-cyan-600",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "Refund eligibility analysis under Section 54 CGST Act",
        "Export refund (with/without IGST payment)",
        "Inverted duty structure ITC refund",
        "RFD-01 application preparation & filing",
        "Deficiency memo (RFD-03) response support",
        "Refund tracking until sanction & disbursement",
      ],
      seoContent: `A GST refund becomes due in ${areaName}, ${district}, Bihar whenever accumulated Input Tax Credit exceeds the GST liability paid on outward supplies — most commonly for exporters, businesses with an inverted duty structure (input tax rate higher than output tax rate), or those with excess balance in the electronic cash ledger. Under Section 54 of the CGST Act, refund applications must be filed within 2 years of the relevant date, and the GST department is statutorily required to process eligible refunds within 60 days.

Taxvio's GST refund service for ${areaName} businesses starts with a detailed eligibility and quantum analysis — calculating the exact refundable amount using the formula prescribed under Rule 89, whether your case involves zero-rated exports (with IGST paid, refunded automatically via shipping bill data matched to ICEGATE) or exports under LUT (requiring manual RFD-01 filing for accumulated ITC). For ${areaName} traders and manufacturers in Bihar's growing industrial sectors — common in food processing, textile manufacturing, and agricultural product trading concentrated in ${district} — we compute the refund eligible on input goods versus output supply rates.

We prepare and file Form RFD-01 with all required statement annexures, respond promptly to deficiency memos (RFD-03) that the GST officer may issue requesting additional documents or clarification, and track the application status with the jurisdictional refund processing officer covering ${district} until the Refund Sanction Order (RFD-06) is issued and the amount is credited to your bank account.

Many ${areaName} businesses lose eligible refunds simply due to incomplete documentation or missed deadlines — our structured, document-first approach minimises rejection risk and keeps your working capital flowing rather than locked up as unclaimed ITC.`,
    },

    /* ── 4. GST Cancellation ── */
    {
      slug: "gst-cancellation",
      title: `GST Cancellation in ${areaName}`,
      price: "₹999",
      timeline: "7–15 Working Days",
      icon: "❌",
      gradient: "from-gray-500 to-slate-600",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "Eligibility check before filing cancellation",
        "Application filing in Form REG-16",
        "Final return (GSTR-10) preparation & filing",
        "Stock-on-hand tax computation if applicable",
        "Cancellation order follow-up with ward officer",
        "Revocation support if GSTIN was suo motu cancelled",
      ],
      seoContent: `GST cancellation is required in ${areaName}, ${district}, Bihar when a business closes down, turnover falls below the threshold and the owner chooses to deregister, or the legal structure changes (e.g., proprietorship converting to a Private Limited Company, requiring fresh registration in the new entity's name). Voluntary cancellation is filed in Form REG-16 on the GST portal, and the most commonly overlooked requirement is the final return — GSTR-10 — which must be filed within 3 months of the cancellation order, declaring closing stock and the tax payable on stock-in-hand as if it were a final outward supply.

Taxvio handles the complete GST cancellation process for ${areaName} businesses — first verifying eligibility (no pending tax dues, all returns filed up to the cancellation date), preparing the REG-16 application with reason and effective date of cancellation, and following up with the jurisdictional ward officer until the formal Cancellation Order is issued. We then prepare and file GSTR-10 within the statutory deadline, accurately computing any tax liability on remaining stock to avoid a best-judgement assessment under Section 62, which is common for ${areaName} businesses that cancel registration but forget the final return obligation.

We also assist ${areaName} businesses whose GSTIN was cancelled suo motu by the department for non-filing — a frequent issue for dormant or seasonal businesses in Bihar's agricultural and trading sectors. Revocation requires filing Form REG-21 within 30 days of the cancellation order, along with clearance of all pending returns and dues. Operating with a cancelled GSTIN means you cannot issue valid tax invoices and your buyers cannot claim ITC on purchases from you — making prompt revocation critical for businesses that intend to continue operating in ${district}.`,
    },

    /* ── 5. GST Amendment / Update ── */
    {
      slug: "gst-amendment",
      title: `GST Amendment & Registration Update in ${areaName}`,
      price: "₹999",
      timeline: "7–15 Working Days",
      icon: "✏️",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "Core field amendment — address, name, business constitution",
        "Non-core field updates — email, phone, bank details",
        "Addition of new place of business in ${areaName}",
        "Addition of new authorised signatory or partner",
        "Document upload & verification support",
        "Approval tracking with jurisdictional ward officer",
      ],
      seoContent: `GST amendment is required whenever a registered business in ${areaName}, ${district}, Bihar changes any material detail recorded in its GST registration — and failing to update these details within the prescribed timeline creates compliance mismatches that can complicate renewals, audits, and even ITC claims for your buyers. The GST framework distinguishes between core field amendments (business name, principal place of business address, addition/deletion of partners or directors) which require ward officer approval, and non-core field amendments (email, mobile number, bank account details) which are typically auto-approved after submission.

For ${areaName} businesses that have relocated within ${district}, expanded to a second premises, changed their registered business name following a rebranding, or added a new partner or authorised signatory, Taxvio handles the complete amendment application — identifying whether the change is core or non-core, preparing the correct supporting documents (new address proof for ${areaName}, updated partnership deed, board resolution, etc.), and submitting the amendment through the GST portal with appropriate tracking until the ward officer's approval is received for core changes.

A particularly common amendment scenario for growing ${areaName} businesses is adding an Additional Place of Business — required when you open a second shop, warehouse, or office within the same GSTIN rather than obtaining a fresh registration. We also handle bank account detail updates, which are now mandatory to keep current for refund processing and e-way bill generation. Keeping your GST registration details accurate and current protects your business from processing delays during annual return filing, refund applications, and any departmental verification or audit in Bihar.`,
    },

    /* ── 6. GSTIN Search & Verification ── */
    {
      slug: "gstin-search-verification",
      title: `GSTIN Search & Verification in ${areaName}`,
      price: "Free Tool",
      timeline: "Instant",
      icon: "🔍",
      gradient: "from-teal-500 to-emerald-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "Instant 15-digit GSTIN format validation",
        "Real-time registration status check (Active/Cancelled)",
        "Legal name & trade name verification",
        "Taxpayer type & registration date details",
        "Jurisdiction details — state & central",
        "Vendor due-diligence support for ITC protection",
      ],
      seoContent: `GSTIN search and verification helps businesses in ${areaName}, ${district}, Bihar confirm that a vendor, customer, or business partner's GST number is genuine, active, and correctly registered before transacting — a critical due-diligence step for protecting Input Tax Credit claims. Every 15-digit GSTIN encodes the state code, PAN of the entity, and a check digit; verifying it confirms the registration is active and matches the claimed business name.

Taxvio's GSTIN verification tool, used widely by ${areaName} accountants, business owners, and procurement teams, instantly checks the format validity of any GSTIN, retrieves the live registration status from the GST department's database (Active, Cancelled, or Suspended), confirms the legal and trade name registered against that GSTIN, and displays the taxpayer type (Regular, Composition, Casual, etc.), original registration date, and jurisdiction (Central or State, and the specific ward/circle).

This is especially important for ${areaName} businesses purchasing from new vendors — under GST law, if your supplier's GSTIN is later found to be cancelled or fraudulent at the time of transaction, your Input Tax Credit claim on that purchase can be denied even though you paid the GST in good faith. Verifying GSTIN before onboarding any new vendor, especially for high-value purchases common in ${district}'s trading networks, is one of the simplest and most effective fraud-prevention steps available to ${areaName} businesses.

We recommend ${areaName} businesses verify GSTIN periodically for existing long-term vendors as well — registrations can be cancelled mid-relationship due to non-filing on the vendor's end, and continuing to claim ITC on invoices from a cancelled GSTIN creates retrospective compliance risk for your business operating in Bihar.`,
    },

    /* ── 7. GST LUT Filing ── */
    {
      slug: "gst-lut-filing",
      title: `GST LUT Filing in ${areaName}`,
      price: "₹999/year",
      timeline: "Before April 1, Annually",
      icon: "📤",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "Form RFD-11 — Letter of Undertaking filing",
        "Enables zero-rated export without IGST payment",
        "Valid for goods exports and service exports",
        "Annual renewal required before April 1",
        "Eligibility: no GST prosecution in past 5 years",
        "Required for SEZ supplies treated as exports",
      ],
      seoContent: `GST LUT (Letter of Undertaking) filing allows exporters in ${areaName}, ${district}, Bihar to ship goods or supply services internationally without paying IGST upfront — a far more cash-flow-friendly route than paying IGST and later claiming a refund. LUT is filed in Form RFD-11 on the GST portal and must be renewed every financial year, ideally before April 1, to maintain continuous zero-rated export eligibility.

${areaName}'s growing export sector — particularly in agricultural products, processed foods, handicrafts, and services — relies heavily on LUT filing. This is especially relevant for businesses in ${district} engaged in export-oriented manufacturing and trading. Without a valid LUT, exporters must pay IGST on every export invoice and then file a separate refund application — locking up working capital for the 60+ days it typically takes for refund processing.

Taxvio handles the complete LUT filing process for ${areaName} exporters — verifying eligibility (the applicant must not have been prosecuted for tax evasion exceeding ₹2.5 crore under the CGST Act or any existing law in the preceding 5 years), preparing and submitting Form RFD-11 with the required self-declaration, obtaining the ARN and acceptance, and ensuring the LUT reference number is correctly used on all export invoices going forward.

We also track your LUT's annual expiry and proactively file the renewal before April 1 each year — a deadline many ${areaName} export businesses miss, inadvertently exposing themselves to IGST liability on exports made after expiry until a fresh LUT or bond is obtained.`,
    },

    /* ── 8. GSTR-9 Annual Return ── */
    {
      slug: "gstr-9-annual-return",
      title: `GSTR-9 Annual Return Filing in ${areaName}`,
      price: "₹2,999",
      timeline: "Due 31st December",
      icon: "📅",
      gradient: "from-orange-500 to-red-600",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-100",
      accentText: "text-orange-700",
      features: [
        "Mandatory for turnover above ₹2 crore",
        "Full-year GSTR-1 vs GSTR-3B reconciliation",
        "ITC availed vs eligible final comparison",
        "GSTR-9C audit statement (turnover above ₹5 crore)",
        "Correction window for missed monthly invoices",
        "Late fee avoidance — ₹200/day (₹100 CGST+₹100 SGST)",
      ],
      seoContent: `GSTR-9 is the consolidated annual GST return that businesses in ${areaName}, ${district}, Bihar with turnover above ₹2 crore must file by December 31 every year, summarising the entire financial year's outward supplies, inward supplies eligible for ITC, and tax paid — reconciled against all twelve months of GSTR-1 and GSTR-3B filings. It serves as the Bihar GST department's primary tool to identify discrepancies between monthly filings and the actual annual financial position.

Filing GSTR-9 accurately matters significantly for ${areaName} businesses because it is also the final opportunity to correct errors made during the year — a missed invoice in a monthly GSTR-1, an incorrect tax rate applied, or excess ITC inadvertently claimed in GSTR-3B can all be rectified through GSTR-9 before the correction window closes. Taxvio's annual return service starts with a complete 12-month reconciliation: matching GSTR-1 outward supply data against GSTR-3B Table 3 liability, comparing ITC claimed in GSTR-3B against the eligible amount shown in GSTR-2B, and identifying any required ITC reversals under Rule 42/43 for exempt supplies or personal use, or blocked credits under Section 17(5).

For ${areaName} businesses with annual turnover exceeding ₹5 crore, GSTR-9C — a reconciliation statement comparing audited financial statements against GSTR-9 figures, certified by a Chartered Accountant — is additionally mandatory. Late filing of GSTR-9 attracts a penalty of ₹200 per day (₹100 each under CGST and SGST), capped at 0.25% of turnover in the relevant state — making timely filing a meaningful cost-avoidance exercise for growing businesses in ${district}, not just a compliance formality.`,
    },

    /* ── 9. GST Notice Reply ── */
    {
      slug: "gst-notice-reply",
      title: `GST Notice Reply & Compliance in ${areaName}`,
      price: "₹1,999",
      timeline: "Within 30-Day Notice Window",
      icon: "⚖️",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "ASMT-10 scrutiny notice analysis & reply",
        "DRC-01 demand notice response",
        "GSTR-1 vs GSTR-3B mismatch resolution",
        "ITC mismatch (GSTR-2A/2B vs 3B) defence",
        "Document compilation & evidence annexures",
        "Personal hearing representation if required",
      ],
      seoContent: `GST notices are increasingly common for businesses in ${areaName}, ${district}, Bihar as the department's data analytics flag discrepancies between filed returns — and the most frequent type, ASMT-10 (scrutiny notice), is typically issued for mismatches between GSTR-1 and GSTR-3B, excess ITC claimed beyond what GSTR-2B shows as eligible, or turnover reported in GST returns not matching income tax or e-way bill data. Responding within the 30-day window is critical: ignoring an ASMT-10 leads to assessment under Section 62, resulting in a best-judgement tax demand that is significantly harder to contest after the fact.

DRC-01 is a more serious demand notice, issued under Section 73 (where there's no allegation of fraud) or Section 74 (where fraud or wilful suppression is alleged), following the preliminary intimation in DRC-01A. A DRC-01 demands tax along with 18% annual interest and a penalty ranging from 10% to 100% of the tax amount depending on the section invoked. ${areaName} businesses receiving DRC-01 have two paths: accept the liability and pay via DRC-03, or contest it with a detailed written response supported by evidence.

Taxvio's notice reply service for ${areaName} businesses follows a structured process — first analysing the exact discrepancy alleged in the notice, then reviewing your filed returns, sales/purchase registers, and bank statements to establish the correct factual position, preparing a comprehensive written reply with supporting annexures, and representing you in personal hearings before the GST ward officer covering ${district} if the matter proceeds that far. We've successfully resolved ITC mismatch notices, turnover discrepancy allegations, and fake-invoice-related notices for businesses across Bihar — protecting clients from arbitrary or excessive demands.`,
    },

    /* ── 10. GST Audit Assistance ── */
    {
      slug: "gst-audit-assistance",
      title: `GST Audit Assistance in ${areaName}`,
      price: "₹4,999",
      timeline: "As Per Audit Notice Timeline",
      icon: "🔎",
      gradient: "from-indigo-500 to-blue-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "Audit applicability assessment",
        "Sales & purchase register reconciliation",
        "Books of accounts vs GST return matching",
        "Audit report & query response preparation",
        "Department coordination throughout audit",
        "Post-audit demand reply if needed",
      ],
      seoContent: `GST audit (departmental audit under Section 65 or special audit under Section 66) can be initiated for businesses in ${areaName}, ${district}, Bihar at the discretion of the GST Commissioner, typically targeting taxpayers with significant turnover, irregular ITC claims, or industries flagged for risk-based scrutiny. Unlike the now-largely-discontinued GSTR-9C self-certified reconciliation (replaced by self-certification for most taxpayers since 2021), a full departmental audit is a comprehensive, in-person or document-based examination of your business's complete GST compliance for the relevant period.

For ${areaName} businesses notified for GST audit, Taxvio's audit assistance service begins with a thorough internal review to anticipate what the audit will scrutinise — comparing GSTR-1, GSTR-3B, and GSTR-9 filings against your actual books of accounts, verifying that all ITC claimed has corresponding valid tax invoices and genuine supplier GSTINs, checking HSN/SAC code accuracy and applicable tax rates, and reviewing any Reverse Charge Mechanism liabilities that may have been missed.

We compile all required documentation — sales registers, purchase registers, stock records, e-way bills, bank statements — into the format the auditing officer expects, draft responses to specific audit queries (ADT-01 notices and subsequent communications), and represent your ${areaName} business in coordination meetings with the audit team throughout the process. If the audit results in a demand notice (typically issued as ADT-02 followed by formal proceedings under Section 73/74), we seamlessly transition into demand response and, if necessary, appellate representation — ensuring continuity of defence rather than starting fresh with a new advisor mid-process.`,
    },

    /* ── 11. GST E-Invoicing Setup ── */
    {
      slug: "gst-e-invoicing-setup",
      title: `GST E-Invoicing Setup & Compliance in ${areaName}`,
      price: "₹999",
      timeline: "Setup in 1–3 Days",
      icon: "📱",
      gradient: "from-cyan-500 to-blue-600",
      accentBg: "bg-cyan-50",
      accentBorder: "border-cyan-100",
      accentText: "text-cyan-700",
      features: [
        "IRP (Invoice Registration Portal) registration",
        "IRN & QR code generation setup",
        "Accounting software / ERP integration",
        "Bulk e-invoice tool configuration",
        "Auto-population into GSTR-1 setup",
        "Compliance monitoring & exception handling",
      ],
      seoContent: `E-invoicing is mandatory for GST-registered businesses in ${areaName}, ${district}, Bihar with aggregate annual turnover above ₹5 crore (a threshold progressively lowered from ₹500 crore at launch in 2020 to ₹5 crore from August 2023) — meaning a steadily growing number of mid-sized businesses across Bihar's commercial districts now fall under this requirement. Under e-invoicing, every B2B invoice must be registered on the government's Invoice Registration Portal (IRP) within 30 days of issue, which generates a unique Invoice Reference Number (IRN) and QR code that must appear on the printed or digital invoice. Invoices without a valid IRN are not legally valid tax invoices, and buyers cannot claim ITC against them.

Taxvio sets up complete e-invoicing compliance for ${areaName} businesses crossing or approaching the ₹5 crore threshold — registering your GSTIN on the IRP system, configuring your existing accounting software (Tally, Busy, Zoho Books, or custom ERP) to automatically generate IRN requests for every invoice, setting up the QR code printing format on your invoice templates, and training your accounts team on the day-to-day workflow.

A significant practical benefit for ${areaName} businesses adopting e-invoicing properly is the dramatic reduction in GSTR-1 filing effort — since e-invoice data auto-populates into your GSTR-1, the manual invoice entry burden largely disappears, and discrepancy risk between your issued invoices and filed returns drops substantially. We also set up exception handling for cancelled invoices, credit/debit notes, and bulk upload scenarios common in high-volume Bihar trading and distribution businesses operating in ${district}.`,
    },

    /* ── 12. GST for E-Commerce Sellers & Operators ── */
    {
      slug: "gst-for-e-commerce",
      title: `GST for E-Commerce Sellers & Operators in ${areaName}`,
      price: "₹1,499",
      timeline: "Registration in 3–7 Days",
      icon: "🛒",
      gradient: "from-fuchsia-500 to-purple-600",
      accentBg: "bg-fuchsia-50",
      accentBorder: "border-fuchsia-100",
      accentText: "text-fuchsia-700",
      features: [
        "GST registration & marketplace GSTIN setup",
        "Monthly GSTR-1 & GSTR-3B filing",
        "Marketplace settlement report reconciliation",
        "GST TCS credit matching (Section 52)",
        "GSTR-8 compliance for e-commerce operators",
        "Section 9(5) advisory for food delivery platforms",
      ],
      seoContent: `GST compliance for e-commerce sellers and operators in ${areaName}, ${district}, Bihar has unique requirements beyond standard GST registration — driven by the Tax Collected at Source (TCS) mechanism under Section 52, which requires every e-commerce operator (Amazon, Flipkart, Meesho, etc.) to deduct 1% TCS on the net value of taxable supplies made through their platform and deposit it with the government on the seller's behalf. Sellers operating from ${areaName} — particularly in Bihar's growing online retail and artisan product sectors concentrated in ${district} — must claim this TCS as credit against their GST liability, which requires careful reconciliation between marketplace settlement reports and GSTR-3B filings.

Taxvio's e-commerce GST service for ${areaName} sellers covers GST registration with correct marketplace-linked GSTIN setup, monthly GSTR-1 filing reconciled against actual marketplace sales (not just bank settlement amounts, which differ due to commission, shipping fee, and return deductions), GSTR-3B filing with accurate TCS credit claimed from Form 26AS-equivalent GST TCS statements, and ongoing reconciliation between Amazon/Flipkart/Meesho settlement reports and your GST returns to prevent ITC and TCS mismatches.

For ${areaName} businesses that are themselves e-commerce operators (not just sellers) — including platforms facilitating other sellers' transactions — we handle GSTR-8 filing, the specific return for TCS collected and deposited. We also advise restaurant and food businesses in ${areaName} on Section 9(5) compliance, under which platforms like Zomato and Swiggy are deemed the supplier for GST purposes on certain restaurant services, shifting tax liability and invoicing responsibility in ways that frequently confuse new sellers onboarding to these platforms in Bihar.`,
    },

    /* ── 13. GST for Freelancers & Independent Professionals ── */
    {
      slug: "gst-for-freelancers",
      title: `GST for Freelancers & Independent Professionals in ${areaName}`,
      price: "₹1,499",
      timeline: "Registration in 3–7 Days",
      icon: "💻",
      gradient: "from-pink-500 to-rose-600",
      accentBg: "bg-pink-50",
      accentBorder: "border-pink-100",
      accentText: "text-pink-700",
      features: [
        "GST registration tailored for freelancers",
        "LUT filing (Form RFD-11) for foreign clients",
        "Zero-rated export invoice format setup",
        "SAC code identification for IT/design/consulting",
        "ITC claims on laptops, software & tools",
        "RCM review for foreign SaaS subscriptions",
      ],
      seoContent: `${areaName}, in Bihar's emerging freelance and independent-professional economy, hosts a growing population of software developers, designers, content writers, consultants, and digital marketers — many of whom are unaware that GST registration becomes mandatory once aggregate annual turnover (including domestic and export billing) exceeds ₹20 lakh, even when most or all income comes from foreign clients. A common and costly misconception among ${areaName} freelancers is believing that billing only foreign clients exempts them from GST registration — it does not; it only changes how GST is applied (zero-rated, with LUT, rather than charged to the client).

Taxvio's GST service for freelancers in ${areaName} covers registration with the correct SAC (Services Accounting Code) for your specific service category — software development, graphic design, consulting, content writing, or digital marketing each have distinct codes that affect invoice format and audit risk if misclassified. We then file LUT (Letter of Undertaking, Form RFD-11) so you can invoice foreign clients without charging IGST, treating the export as zero-rated supply — essential for maintaining price competitiveness when billing US, UK, or EU clients who would not accept an Indian GST line item on their invoice.

We also handle the monthly GSTR-1 and GSTR-3B filing with correct zero-rated export classification, claim Input Tax Credit on legitimate business expenses (laptops, software subscriptions, co-working space rent, internet bills), and review Reverse Charge Mechanism obligations for foreign SaaS tools (where applicable under specific notified categories). For ${areaName} freelancers nearing the QRMP threshold, we also advise on the quarterly filing scheme to reduce compliance frequency while maintaining accurate reporting in Bihar's growing digital economy.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function BiharGSTAreaPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const areaData  = getAreaData(city);
  const areaName  = areaData?.name     ?? formatAreaDisplay(city);
  const district  = areaData?.district ?? areaName;
  const region    = areaData?.region   ?? "Bihar";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need GST services in ${areaName}, ${district}, Bihar.`)}`;

  const services = getServiceContent(areaName, district, region);

  const nearbyAreas = BIHAR_AREAS
    .filter((c) => c.district === district && slugifyArea(c.name) !== city)
    .slice(0, 6);
  const regionAreas = nearbyAreas.length < 3
    ? BIHAR_AREAS.filter((c) => c.region === region && slugifyArea(c.name) !== city).slice(0, 6)
    : nearbyAreas;

  /* ── JSON-LD ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides GST registration, GSTR-1/GSTR-3B filing, refund, LUT, e-commerce GST and freelancer GST services in ${areaName}, ${district}, Bihar.`,
    areaServed: [{ "@type": "Place", name: areaName, containedInPlace: { "@type": "City", name: "Bihar" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3100" },
    priceRange: "₹999 - ₹4,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",        item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "GST Bihar",   item: "https://www.taxvio.in/state/bihar/gst-services" },
      { "@type": "ListItem", position: 3, name: district,      item: `https://www.taxvio.in/state/bihar/gst-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${areaName} GST`, item: `https://www.taxvio.in/state/bihar/gst-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `GST Services in ${areaName}, Bihar`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/bihar/gst-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does GST registration take in ${areaName}, Bihar?`,
        acceptedAnswer: { "@type": "Answer", text: `GST registration in ${areaName}, ${district} typically takes 3–7 working days from document submission, using Aadhaar OTP-based authentication for faster processing through the GST portal.` },
      },
      {
        "@type": "Question",
        name: `What is the GST return due date for businesses in ${areaName}?`,
        acceptedAnswer: { "@type": "Answer", text: `GSTR-1 is due by the 11th of the following month. GSTR-3B is due by the 20th. GSTR-9 (annual return, for turnover above ₹2 crore) is due by December 31. QRMP scheme filers in ${areaName} file GSTR-1 quarterly with monthly PMT-06 tax payments.` },
      },
      {
        "@type": "Question",
        name: `Do freelancers in ${areaName} need GST registration even with only foreign clients?`,
        acceptedAnswer: { "@type": "Answer", text: `Yes. GST registration becomes mandatory once a freelancer's aggregate annual turnover (including export/foreign billing) exceeds ₹20 lakh, regardless of whether clients are domestic or foreign. Foreign billing can be done as zero-rated export under LUT, avoiding IGST charges, but registration itself is still required above the threshold.` },
      },
    ],
  };

  return (
    <>
      <Script id="lb-schema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="bc-schema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="sl-schema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
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
                  { href: "/state/bihar/gst-services", label: "GST — Bihar" },
                  { href: null, label: areaName },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5">
                    {href ? <Link href={href} className="hover:text-white/80 transition">{label}</Link>
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
                  {areaName}, {district} · Bihar · GST Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  GST Registration &amp; Filing
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {areaName}, Bihar
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">GSTR-1 &amp; GSTR-3B filing</strong>, GST refund, LUT for exporters,
                  e-commerce GST, freelancer GST, and GSTIN verification in{" "}
                  <strong className="text-white">{areaName}, {district}, Bihar</strong> —
                  100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹1,499</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA-Assisted" },
                    { icon: Shield,     text: "100% Secure" },
                    { icon: Zap,        text: "3–7 Day GSTIN" },
                    { icon: Clock,      text: "Mon–Sat 9AM–7PM" },
                    { icon: Star,       text: "4.9★ Rating" },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                      <Icon size={11} className="text-sky-300 shrink-0" /> {text}
                    </span>
                  ))}
                </div>

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

              {/* Right — service menu panel */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}>
                <div className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                  <div>
                    <p className="font-bold text-white text-sm">GST Services — {areaName}</p>
                    <p className="text-[11px] text-white/50 mt-0.5">{district} · {services.length} services</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>
                <div className="p-4 space-y-1.5 max-h-[420px] overflow-y-auto">
                  {services.map((svc) => (
                    <a href={`#${svc.slug}`} key={svc.slug}
                      className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/10"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <span className="flex items-center gap-2 text-[11px] font-semibold text-white/75">
                        <span>{svc.icon}</span>
                        <span className="truncate">{svc.title.replace(` in ${areaName}`, "")}</span>
                      </span>
                      <span className="text-[10px] font-bold text-sky-300 shrink-0 ml-2">{svc.price}</span>
                    </a>
                  ))}
                </div>
                <div className="mx-4 mb-4 mt-2 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Starting Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹1,499</p>
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
                { icon: BadgeCheck,  label: "CA-Certified Team"      },
                { icon: TrendingUp,  label: "3,800+ Bihar Businesses"},
                { icon: Users,       label: "180+ Bihar Areas"       },
                { icon: IndianRupee, label: "Transparent Pricing"    },
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

        {/* ════════ STATS RIBBON ════════ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "3–7 Days", label: "GSTIN Issued",      icon: Zap          },
              { val: "4.9★",      label: "Average Rating",   icon: Star         },
              { val: "₹1,499",    label: "Starting Price",   icon: IndianRupee  },
              { val: "13",        label: "GST Services",     icon: ClipboardList },
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

        {/* ════════ SERVICE CARDS WITH DEEP SEO/AI CONTENT ════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-16">
            {services.map((svc, idx) => (
              <article key={svc.slug} id={svc.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">

                {/* Coloured header */}
                <div className={`bg-gradient-to-r ${svc.gradient} p-6 md:p-8`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl border border-white/25 shrink-0">
                        {svc.icon}
                      </div>
                      <div>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                          GST Service #{String(idx + 1).padStart(2, "0")}
                        </p>
                        <h2 className="text-lg md:text-2xl font-extrabold text-white leading-tight">{svc.title}</h2>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                      <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center min-w-[90px]">
                        <p className="text-[10px] text-white/60 font-bold uppercase tracking-wide">Price</p>
                        <p className="text-white font-extrabold text-lg leading-tight">{svc.price}</p>
                      </div>
                      <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center min-w-[90px]">
                        <p className="text-[10px] text-white/60 font-bold uppercase tracking-wide">Timeline</p>
                        <p className="text-white font-bold text-sm leading-tight">{svc.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">

                    {/* SEO/AI Overview content */}
                    <div>
                      <h3 className="text-xs font-bold text-[#00416a] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <BookOpen size={13} /> About This Service in {areaName}
                      </h3>
                      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        {svc.seoContent.split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97] shadow-md shadow-green-500/20">
                          <MessageCircle size={14} /> WhatsApp Us
                        </a>
                        <Link href="/contact"
                          className="inline-flex items-center gap-2 bg-[#00416a] hover:bg-[#002b45] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97]">
                          Get Quote <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Features sidebar */}
                    <div className={`${svc.accentBg} rounded-2xl p-5 border ${svc.accentBorder}`}>
                      <p className="text-[11px] font-bold text-[#00416a] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle size={13} /> What&apos;s Included
                      </p>
                      <ul className="space-y-3">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <div className={`w-5 h-5 rounded-full ${svc.accentBg} border ${svc.accentBorder} flex items-center justify-center shrink-0 mt-0.5`}>
                              <CheckCircle size={11} className={svc.accentText} />
                            </div>
                            <span className="text-xs text-gray-700 font-medium leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-4 border-t border-gray-200/60">
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

        {/* ════════ WHY TAXVIO ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why {areaName} Businesses Choose Taxvio for GST
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users,       title: "CA-Certified GST Professionals", desc: `Every GST service for ${areaName} businesses is handled by practising CAs — not data entry agents. We understand Bihar GST ward jurisdiction and processing patterns for ${district}.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap,         title: "100% Online — No Office Visit",   desc: `Share documents on WhatsApp from anywhere in ${areaName}. We handle all portal submissions, payments, and department follow-ups without requiring an office visit.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: ShoppingCart,title: "E-Commerce & Marketplace Expert", desc: `Deep familiarity with Amazon, Flipkart, and Meesho settlement reconciliation for ${areaName} sellers — TCS credit matching done right, every month.`, color: "bg-fuchsia-100 text-fuchsia-700" },
                { icon: Laptop,      title: "Freelancer & Export GST Specialists", desc: `LUT filing, zero-rated invoicing, and SAC code mapping for ${areaName}'s freelance and consulting professionals billing foreign clients.`, color: "bg-pink-100 text-pink-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹999",  desc: `No hidden fees, no surprise charges. Clear, upfront pricing for every GST service in ${areaName} — quoted before we start work.`, color: "bg-teal-100 text-teal-700" },
                { icon: Search,      title: "Free GSTIN Verification Tool",   desc: `Instantly verify any vendor's GSTIN before transacting — protecting ${areaName} businesses from ITC denial due to fraudulent or cancelled registrations.`, color: "bg-sky-100 text-sky-700" },
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

        {/* ════════ PROCESS STEPS ════════ */}
        <section className="py-16 bg-[#f8fbfd] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                How to Get GST Registration in {areaName}
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

        {/* ════════ FAQ ════════ */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">FAQ</span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">GST FAQs for {areaName} Businesses</h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `How long does GST registration take in ${areaName}, Bihar?`,
                  a: `GST registration in ${areaName}, ${district} typically takes 3–7 working days from complete document submission. Using Aadhaar OTP-based authentication speeds up the verification process significantly on the GST portal.`,
                },
                {
                  q: `What is the GST return due date for businesses in ${areaName}?`,
                  a: `GSTR-1 is due by the 11th of the following month. GSTR-3B is due by the 20th. GSTR-9 (annual return, for turnover above ₹2 crore) is due by December 31. QRMP scheme filers in ${areaName} file GSTR-1 quarterly with monthly PMT-06 challan payments instead.`,
                },
                {
                  q: `Do freelancers in ${areaName} need GST even with only foreign clients?`,
                  a: `Yes — GST registration becomes mandatory once a freelancer's aggregate annual turnover (including foreign/export billing) crosses ₹20 lakh, regardless of whether clients are Indian or foreign. With a valid LUT, foreign billing is treated as zero-rated export, meaning no IGST is charged — but registration above the threshold is still required.`,
                },
              ].map((f) => (
                <div key={f.q} className="border border-gray-100 rounded-2xl bg-white shadow-sm"
                  itemScope itemType="https://schema.org/Question">
                  <div className="px-5 py-4 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#00416a]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={11} className="text-[#00416a]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800" itemProp="name">{f.q}</p>
                      <div itemScope itemType="https://schema.org/Answer">
                        <p className="text-xs text-gray-600 mt-2 leading-relaxed" itemProp="text">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ NEARBY AREAS ════════ */}
        {regionAreas.length > 0 && (
          <section className="py-14 bg-[#f8fbfd] border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">{district} &amp; {region}</p>
                  <h2 className="text-lg font-extrabold text-gray-800">GST Services in Nearby Bihar Areas</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionAreas.map((c) => (
                  <Link key={c.name}
                    href={`/state/bihar/gst-services/${slugifyArea(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    GST in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/bihar/gst-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00416a]/30 bg-[#deeef7] px-4 py-2 text-sm font-bold text-[#00416a] hover:shadow-sm transition-all">
                  View All Bihar Areas <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ════════ CTA BANNER ════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-sky-300" />
                  Serving GST clients in {areaName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Expert GST Help in {areaName}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  GST registration, monthly GSTR-1/3B filing, refund, LUT, e-commerce GST, and freelancer GST —
                  all delivered online for businesses in {areaName}, {district}. Starting ₹999. CA-assisted, same-day WhatsApp response.
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