// app/state/haryana/income-tax-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, BookOpen, ClipboardList,
  Calculator, Building, Briefcase,
} from "lucide-react";
import {
  HARYANA_AREAS, ALL_AREA_SLUGS, slugifyArea,
  getAreaData, formatAreaDisplay,
} from "@/data/haryana-cities";

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
    title: `Income Tax Return Filing & ITR Services in ${areaName}, Haryana | Taxvio`,
    description: `Expert ITR filing for salaried, proprietors, firms & companies; quarterly TDS/TCS returns; income tax audit; scrutiny & notice reply; 12A/80G registration; PAN/TAN services in ${areaName}, ${district}, Haryana. CA-assisted, 100% online, starting ₹699.`,
    keywords: [
      `income tax filing ${areaName}`,
      `ITR filing ${areaName} Haryana`,
      `income tax consultant ${areaName}`,
      `TDS return ${areaName} ${district}`,
      `tax audit ${areaName}`,
      `PAN card ${areaName}`,
      `TAN application ${areaName}`,
      `12A 80G ${areaName}`,
      `CA ${areaName} Haryana`,
      `online ITR ${areaName}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/haryana/income-tax-services/${city}` },
    openGraph: {
      title: `Income Tax Services in ${areaName}, Haryana | Taxvio`,
      description: `ITR filing, TDS returns, tax audit, scrutiny reply & 12A/80G in ${areaName}, ${district}, Haryana — CA-assisted, from ₹699.`,
      url: `https://www.taxvio.in/state/haryana/income-tax-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `Income Tax Services in ${areaName}, Haryana | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(areaName: string, district: string, region: string) {
  return [

    /* ── 1. PAN Card ── */
    {
      slug: "pan-card-application",
      title: `PAN Card Application in ${areaName}`,
      price: "₹299",
      timeline: "7–15 Working Days",
      icon: "🪪",
      gradient: "from-gray-500 to-slate-600",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "New PAN application (Form 49A)",
        "PAN correction & reprint service",
        "Name, DOB & address update",
        "PAN status tracking & follow-up",
        "Physical & e-PAN delivery",
        "All Haryana addresses accepted",
      ],
      seoContent: `PAN (Permanent Account Number) is mandatory for every individual and entity engaging in financial transactions above specified limits in ${areaName}, ${district}, Haryana — including salary receipt, business income, property transactions, bank account opening, and mutual fund investments. Without a valid PAN, businesses in ${areaName} cannot open current accounts, file GST returns, or receive high-value payments, and salaried individuals face TDS deduction at the maximum marginal rate on income that would otherwise qualify for lower tax slabs.

Taxvio's PAN application service for ${areaName} residents and businesses covers new PAN applications under Form 49A (for Indian citizens) with complete document preparation, online submission through the NSDL/UTIITSL portals, application status tracking, and delivery coordination for both physical PAN cards and instant e-PAN downloads. We also handle PAN correction requests for errors in name spelling, date of birth, father's name, or address — common issues that create mismatches during ITR filing or refund processing and require formal rectification through the income tax department.

For ${areaName} businesses that have lost or damaged their original PAN card, we process PAN reprint applications with updated address details if the registered address has changed since original issuance. PAN is a lifelong identifier and remains valid across state boundaries, so individuals relocating to ${areaName} from other parts of India do not need a new PAN — only an address update if they want correspondence sent to their Haryana address.`,
    },

    /* ── 2. TAN Application ── */
    {
      slug: "tan-application",
      title: `TAN Application in ${areaName}`,
      price: "₹999",
      timeline: "7–15 Working Days",
      icon: "🔢",
      gradient: "from-orange-500 to-amber-600",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-100",
      accentText: "text-orange-700",
      features: [
        "New TAN for employers & businesses",
        "Form 49B preparation & e-filing",
        "TAN correction in existing registration",
        "Allotment certificate download",
        "TDS/TCS compliance guidance",
        "All Haryana business addresses",
      ],
      seoContent: `TAN (Tax Deduction and Collection Account Number) is mandatory for every business, employer, or entity in ${areaName}, ${district}, Haryana that deducts TDS (Tax Deducted at Source) from salary, contractor payments, professional fees, rent, or interest, or that collects TCS (Tax Collected at Source) on specified goods like scrap, minerals, or motor vehicles. Operating without TAN when required triggers penalties under Section 272BB (₹10,000), and any TDS/TCS returns filed without a valid TAN are rejected by the income tax system.

Taxvio's TAN application service for ${areaName} businesses covers new TAN allotment through Form 49B, which we prepare, verify, and submit online through the NSDL TIN portal, tracking the application until the TAN allotment advice is issued and available for download. TAN is location-specific to the extent that it must match the principal place of business registered with the income tax department, so businesses opening new branches or shifting their head office to ${areaName} may need to update the address linked to their TAN to ensure correspondence reaches the correct location.

We also handle TAN correction applications for ${areaName} businesses where the originally allotted TAN certificate contains errors in the business name, address, or responsible person details — corrections that must be completed before quarterly TDS/TCS returns can be filed without validation errors. For first-time employers in ${areaName}, we provide post-TAN guidance on quarterly TDS return filing obligations (Form 24Q for salary, 26Q for other payments, 27Q for non-residents) to ensure compliance from the first deduction onward.`,
    },

    /* ── 3. ITR — Salaried ── */
    {
      slug: "itr-salaried-individual",
      title: `ITR Filing — Salaried Individual in ${areaName}`,
      price: "₹699",
      timeline: "Filing within 3–5 Days",
      icon: "👤",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "ITR-1 / ITR-2 filing with Form 16",
        "Deduction & exemption optimisation",
        "Old vs new tax regime comparison",
        "HRA, 80C, 80D claim review",
        "E-filing with acknowledgement",
        "Refund tracking if applicable",
      ],
      seoContent: `Salaried individuals in ${areaName}, ${district}, Haryana — whether employed in Gurgaon's corporate sector, Faridabad's manufacturing units, government departments, or educational institutions — must file an income tax return (ITR) if total income exceeds the basic exemption limit (₹2.5 lakh for individuals below 60, ₹3 lakh for senior citizens 60–80, ₹5 lakh for super senior citizens above 80). Even when income falls below these thresholds, filing ITR is often necessary to claim TDS refunds, apply for loans, obtain visas, or participate in government tenders.

Taxvio's salaried ITR filing service for ${areaName} residents begins with Form 16 verification (the TDS certificate issued by your employer), cross-checking salary income, allowances, perquisites, and TDS deducted against your payslips and bank statements to ensure accuracy. We then optimise deductions under Chapter VI-A — including Section 80C (PPF, ELSS, life insurance, tuition fees, home loan principal up to ₹1.5 lakh), 80D (health insurance premiums), 80E (education loan interest), and HRA exemption for ${areaName} residents paying rent — and compare the tax liability under the old regime (with deductions) versus the new regime (lower rates, no deductions) to identify the financially superior option.

For ${areaName} salaried individuals with additional income sources — interest from savings accounts or fixed deposits, capital gains from equity/mutual fund redemptions, rental income from property, or freelance/consulting income — we file ITR-2 instead of the simpler ITR-1, ensuring all income heads are correctly reported and inter-head set-off of losses (if any) is claimed. Post-filing, we track refund status if TDS deducted exceeds final tax liability, and handle any income tax notices related to mismatches flagged during automated processing.`,
    },

    /* ── 4. ITR — Proprietor ── */
    {
      slug: "itr-proprietor",
      title: `ITR Filing — Proprietor in ${areaName}`,
      price: "₹1,999",
      timeline: "Filing within 5–7 Days",
      icon: "🏪",
      gradient: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "Business income computation (ITR-3/ITR-4)",
        "Profit & loss and balance sheet preparation",
        "Presumptive taxation (44AD/44ADA) evaluation",
        "Tax saving advisory & advance tax planning",
        "Books of accounts review",
        "E-filing & verification with DSC/Aadhaar OTP",
      ],
      seoContent: `Proprietors operating businesses in ${areaName}, ${district}, Haryana — spanning retail shops, manufacturing units, wholesale trading, professional practices (doctors, CAs, architects), and service providers — must file income tax returns under either the regular books-of-accounts regime or the presumptive taxation schemes under Section 44AD (for business) or 44ADA (for professionals), depending on turnover and business structure. Filing the wrong ITR form or choosing the incorrect taxation scheme triggers processing delays, notice issuance, and potential denial of legitimate expense claims.

Taxvio's proprietor ITR filing service for ${areaName} businesses starts with a turnover and receipts analysis to determine scheme eligibility: businesses with turnover up to ₹2 crore can opt for Section 44AD presumptive taxation (declaring 8% of turnover for digital receipts, 6% otherwise, as income without maintaining detailed books), while professionals with gross receipts up to ₹50 lakh can use Section 44ADA (50% of receipts as presumptive income). For ${areaName} proprietors exceeding these limits or preferring actual-income computation to claim legitimate business expenses, we prepare a complete profit & loss account and balance sheet, verify expense vouchers, reconcile bank statements against sales and purchase records, and file ITR-3 with audited or unaudited financials as applicable.

We also advise ${areaName} proprietors on advance tax payment obligations (mandatory if final tax liability exceeds ₹10,000, payable in four quarterly instalments), depreciation claims on business assets (computers, vehicles, machinery), and expense disallowances under Section 40A (cash payments above ₹10,000 to a single party in a day), ensuring the filed return withstands scrutiny if selected for assessment by the ${district} income tax office.`,
    },

    /* ── 5. ITR — Firm/LLP ── */
    {
      slug: "itr-firm-llp",
      title: `ITR Filing — Firm / LLP in ${areaName}`,
      price: "₹2,999",
      timeline: "Filing within 7–10 Days",
      icon: "🤝",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "Partnership firm / LLP income computation",
        "Partner capital accounts & profit sharing",
        "Tax audit coordination if required",
        "ITR-5 filing with balance sheet & P&L",
        "Partner remuneration compliance (Sec. 40(b))",
        "E-verification with partner DSC",
      ],
      seoContent: `Partnership firms and Limited Liability Partnerships (LLPs) operating in ${areaName}, ${district}, Haryana — common structures for family businesses, professional practices (CA firms, law firms, medical clinics), and trading operations — are taxed as separate entities at a flat rate of 30% (plus applicable surcharge and cess), with partners additionally taxed on their share of profit at individual slab rates. Correct allocation of profit among partners, compliance with Section 40(b) limits on partner remuneration, and timely ITR-5 filing are critical to avoid double taxation and penalty notices.

Taxvio's ITR filing service for ${areaName} firms and LLPs begins with partnership deed verification to confirm profit-sharing ratios, partner capital contributions, and remuneration terms, ensuring alignment with Section 40(b) deduction limits (which cap allowable partner remuneration based on book profit). We prepare the complete financial statements — profit & loss account, balance sheet, and partner capital accounts — reconcile them against the firm's GST returns and TDS filings to catch discrepancies before the tax department does, and file ITR-5 with digital signature certificates of authorised partners.

For ${areaName} firms crossing the Section 44AB audit threshold (turnover above ₹1 crore for business, ₹50 lakh for professionals, or where presumptive taxation was claimed in prior year but not current year), we coordinate with the statutory auditor to ensure the tax audit report (Form 3CA/3CB and Form 3CD) is completed and uploaded before the ITR filing deadline. Post-filing, we handle any mismatch notices related to TDS credit claims, advance tax payments, or partner remuneration disallowances flagged during automated processing by the income tax system.`,
    },

    /* ── 6. ITR — Trust/Company ── */
    {
      slug: "itr-trust-company",
      title: `ITR Filing — Trust / Company in ${areaName}`,
      price: "₹3,499",
      timeline: "Filing within 10–15 Days",
      icon: "🏢",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "ITR-6 for Private Limited / Public Limited companies",
        "ITR-7 for charitable trusts & NGOs (12A/80G entities)",
        "MAT/AMT computation if applicable",
        "Audit report coordination (Form 3CA/3CB-3CD)",
        "Tax notice handling & assessment defence",
        "E-filing with director/trustee DSC",
      ],
      seoContent: `Companies (Private Limited, Public Limited, Section 8) and trusts (charitable, religious, educational) registered in ${areaName}, ${district}, Haryana face distinct and significantly more complex income tax filing obligations than individuals or firms — including mandatory tax audit regardless of turnover, detailed disclosure schedules for related-party transactions, transfer pricing documentation for international dealings, and Minimum Alternate Tax (MAT) or Alternate Minimum Tax (AMT) computations even when book profit shows a loss. Filing ITR-6 (companies) or ITR-7 (trusts) without proper audit coordination or MAT calculations triggers processing failures and penalty notices.

Taxvio's company ITR filing service for ${areaName} covers complete ITR-6 preparation for Private Limited and Public Limited companies, including reconciliation of book profit per financial statements against taxable income computed under the Income Tax Act, MAT credit computation and carry-forward, advance tax and TDS credit verification, and filing with director digital signatures. For ${areaName} companies with turnover or capital/reserves above specified limits, we coordinate with the statutory auditor to ensure the tax audit report (Form 3CA-3CD) reflects all required disclosures under Section 44AB, including details of loans/deposits, cash payments exceeding limits, and related-party transactions.

For charitable trusts, educational institutions, and religious bodies in ${areaName} registered under Section 12A/12AA and holding 80G certification, we file ITR-7 with complete disclosure of corpus fund utilisation, application of income for charitable purposes (minimum 85% application requirement), and accumulation of surplus under Section 11(2). Post-filing, we respond to any income tax notices questioning exemption claims, related-party transactions, or application-of-income shortfalls — common scrutiny areas for Haryana-based NGOs and trusts.`,
    },

    /* ── 7. Quarterly TDS Return ── */
    {
      slug: "quarterly-tds-return",
      title: `Quarterly TDS Return Filing in ${areaName}`,
      price: "₹1,499/quarter",
      timeline: "Before Quarterly Due Date",
      icon: "📊",
      gradient: "from-teal-500 to-cyan-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "Form 24Q — TDS on salary (employees)",
        "Form 26Q — TDS on payments other than salary",
        "Form 27Q — TDS on payments to non-residents",
        "TDS computation & challan reconciliation",
        "Deductee detail accuracy & PAN validation",
        "Late fee & interest minimisation",
      ],
      seoContent: `Quarterly TDS return filing is a recurring compliance obligation for every employer, business, and professional practice in ${areaName}, ${district}, Haryana that deducts tax at source from salary payments to employees (Form 24Q), contractor/professional fees (Form 26Q under sections like 194C, 194J), rent payments above ₹2.4 lakh annually (194-I), or payments to non-resident parties (Form 27Q). Late or incorrect TDS filing triggers automatic late fees (₹200 per day, Section 234E), interest charges (Section 201(1A) at 1% to 1.5% per month), and denial of expense deduction under Section 40(a)(ia) if TDS is not deposited or returns not filed by the due date.

Taxvio's quarterly TDS return filing service for ${areaName} deductors covers TDS computation verification (ensuring correct rates applied under the relevant sections), challan reconciliation (matching deposited TDS amounts against actual deductions and correcting mismatches through correction statements), deductee detail accuracy (validating PAN of each recipient to prevent invalid PAN surcharges and refund processing delays), and timely e-filing through the TRACES portal before the quarterly due dates (31st July, 31st October, 31st January, 31st May for the four quarters).

For ${areaName} businesses facing TDS demand notices due to short deduction, non-deduction, or late deposit identified during processing of prior quarters' returns, we prepare and file rectification requests, detailed explanations, and, where necessary, represent the deductor before the TDS Assessing Officer to contest excessive or erroneous demands. Proper TDS compliance protects both the deductor (by avoiding penalties) and deductees (by ensuring TDS credit appears correctly in their Form 26AS for claiming in their ITR).`,
    },

    /* ── 8. Quarterly TCS Return ── */
    {
      slug: "quarterly-tcs-return",
      title: `Quarterly TCS Return Filing in ${areaName}`,
      price: "₹1,499/quarter",
      timeline: "Before Quarterly Due Date",
      icon: "🧾",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Form 27EQ — TCS on specified goods",
        "TCS computation under Section 206C",
        "Collectee detail accuracy & PAN validation",
        "Challan reconciliation & correction",
        "Quarterly filing before due dates",
        "Compliance tracking & penalty avoidance",
      ],
      seoContent: `Quarterly TCS (Tax Collected at Source) return filing applies to businesses in ${areaName}, ${district}, Haryana that collect tax on sale of specified goods — including scrap (Section 206C(1H)), minerals, motor vehicles above ₹10 lakh, and foreign remittances under the Liberalised Remittance Scheme — or operate as e-commerce operators required to collect TCS at 1% (lowered to 0.1% in many cases) on net sales value for sellers on their platform. TCS filing obligations are less common than TDS but carry identical penalty provisions: late fees under Section 234E (₹200/day) and interest under Section 206C(7) at 1% per month for delayed deposit.

Taxvio's quarterly TCS return filing service for ${areaName} businesses covers TCS computation verification (ensuring correct rates are applied based on the nature of goods sold and the buyer's PAN availability), collectee detail accuracy (verifying PAN and address of each buyer from whom TCS was collected), challan reconciliation (matching deposited TCS with collected amounts), and timely e-filing of Form 27EQ through the TRACES portal before quarterly due dates.

For ${areaName} businesses penalised for short collection, non-collection, or late deposit of TCS identified during processing of prior quarters' returns, we file rectification statements, respond to demand notices with documented explanations, and represent the business before the jurisdictional TCS officer to minimise or contest penalties. Proper TCS compliance ensures that buyers (collectees) receive correct credit in their Form 26AS, enabling them to claim the collected tax against their final income tax liability.`,
    },

    /* ── 9. Income Tax Audit ── */
    {
      slug: "income-tax-audit",
      title: `Income Tax Audit (Section 44AB) in ${areaName}`,
      price: "₹4,999",
      timeline: "Before 30th September",
      icon: "🔍",
      gradient: "from-indigo-500 to-blue-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "Audit applicability assessment (44AB threshold)",
        "Document preparation & books reconciliation",
        "Form 3CA/3CB-3CD (41-clause report) filing",
        "Audit coordination with CA on record",
        "Department query response if needed",
        "Post-audit ITR filing support",
      ],
      seoContent: `Income tax audit under Section 44AB is mandatory for businesses in ${areaName}, ${district}, Haryana with turnover/gross receipts exceeding specified limits: ₹1 crore for businesses (₹10 crore if 95% or more receipts are digital and 95% or more payments are digital/banking), or ₹50 lakh for professionals (doctors, CAs, architects, consultants, etc.). Additionally, businesses or professionals who claim presumptive taxation under Section 44AD/44ADA in any year, but whose actual profit falls below the presumed percentage, must get their books audited even if turnover is below the general threshold. Missing the 30th September audit report filing deadline triggers a penalty of 0.5% of turnover/gross receipts or ₹1.5 lakh, whichever is lower.

Taxvio's income tax audit service for ${areaName} businesses starts with audit applicability determination (confirming whether your turnover, receipts, or prior-year presumptive claim triggers the audit requirement), followed by preparation of complete financial statements — profit & loss account and balance sheet — from your books of accounts, vouchers, and bank statements. We then coordinate with a qualified Chartered Accountant (if you do not already have one on retainer) to conduct the statutory audit, prepare Form 3CA/3CB (audit report) and Form 3CD (particulars across 41 clauses covering everything from cash payments exceeding limits to related-party transactions), and e-file the report before the deadline.

For ${areaName} businesses undergoing audit for the first time, we provide pre-audit preparation guidance — cleaning up incomplete vouchers, reconciling bank and cash book entries, verifying expense classifications, and identifying disallowable expenses (like cash payments above ₹10,000 per day under Section 40A(3)) before the auditor begins work, significantly reducing audit time and fees. Post-audit, we file the ITR incorporating audit adjustments and handle any income tax notices questioning specific audit report disclosures.`,
    },

    /* ── 10. Income Tax Scrutiny & Notice Reply ── */
    {
      slug: "income-tax-scrutiny-notice-reply",
      title: `Income Tax Scrutiny & Notice Reply in ${areaName}`,
      price: "₹2,499",
      timeline: "Within Notice Response Window",
      icon: "⚖️",
      gradient: "from-rose-500 to-red-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Notice analysis — 143(1), 143(2), 143(3), 148, 156",
        "Detailed written reply preparation",
        "Supporting document compilation",
        "Online & offline representation before AO",
        "Assessment order review & appeal support",
        "Penalty mitigation under Section 270A",
      ],
      seoContent: `Income tax scrutiny notices are increasingly common for taxpayers in ${areaName}, ${district}, Haryana, driven by the department's automated data analytics that flag discrepancies between ITR filings, TDS credits (Form 26AS), Annual Information Statement (AIS), and third-party data sources like property registrations, high-value transactions, and foreign remittances. The most frequent notice types are Section 143(1) intimations (automated processing adjustments, typically issued within 9–12 months of filing), Section 143(2) scrutiny notices (requiring detailed examination and personal hearing), and Section 148 reassessment notices (issued when income is believed to have escaped assessment in prior years, within 3–10 years depending on the alleged amount).

Taxvio's income tax scrutiny and notice reply service for ${areaName} taxpayers begins with notice classification and deadline identification — different notice types carry different response timelines (143(1) can be contested via rectification request, 143(2) requires response within specified date in notice, 148 requires filing of return within 15 days or as extended). We then analyse the specific discrepancies or queries raised — common issues include unexplained cash deposits, mismatch between ITR-declared income and AIS-reported interest/dividends, disallowed deductions, or additions for undisclosed property purchases — and prepare a point-by-point written reply with supporting documentation (bank statements, sale deeds, gift deeds, Form 26AS, employer certificates, etc.).

For cases proceeding to personal hearings before the Assessing Officer at the ${district} income tax office, we provide representation support — either accompanying the taxpayer or appearing on their behalf with authorisation — presenting the case, responding to queries, and negotiating assessment conclusions. If the final assessment order includes additions or disallowances that we believe are legally incorrect, we file appeals before the Commissioner (Appeals) and, if necessary, the Income Tax Appellate Tribunal, maintaining continuity of defence throughout the appellate process.`,
    },

    /* ── 11. 12A Application ── */
    {
      slug: "12a-application",
      title: `12A Registration Application in ${areaName}`,
      price: "₹3,999",
      timeline: "Processing 3–6 Months",
      icon: "🤝",
      gradient: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "Eligibility evaluation for charitable trusts/NGOs",
        "Form 10A document preparation",
        "Online application filing on portal",
        "CIT(Exemption) query response",
        "Registration certificate follow-up",
        "Post-registration compliance guidance",
      ],
      seoContent: `Section 12A registration (previously 12AA, now unified as 12AB post-amendment) is mandatory for charitable trusts, religious institutions, educational societies, and NGOs in ${areaName}, ${district}, Haryana seeking income tax exemption on their surplus/profits under Section 11. Without 12A registration, any income earned by the trust — whether from donations, corpus contributions, property rentals, or program fees — is fully taxable as income of an Association of Persons (AOP) at the maximum marginal rate, eliminating the financial sustainability of most charitable operations.

Taxvio's 12A registration service for ${areaName} trusts and NGOs begins with eligibility assessment — confirming that the trust deed or memorandum of association specifies charitable, religious, or educational objectives (as defined under Section 2(15)), that the trust is registered under the applicable state trusts act or Societies Registration Act, and that governing documents include the mandatory dissolution clause directing residual assets to another charitable entity. We then prepare and file Form 10A online through the income tax e-filing portal, uploading the trust deed, registration certificate, details of trustees/managing committee, and first-year financials or projected budgets.

The 12A application is examined by the Commissioner of Income Tax (Exemptions) covering the ${district} jurisdiction, who may issue queries regarding the genuineness of activities, source of initial corpus, or compliance with trust deed objectives. We draft detailed replies, provide additional documentation as requested, and, if required, represent the trust in personal hearings before the CIT(E) to secure registration approval. Post-registration, we guide ${areaName} trusts on annual compliance obligations — including filing ITR-7 by the due date, maintaining separate books of accounts, and ensuring at least 85% of income is applied for charitable purposes each year to maintain exemption eligibility.`,
    },

    /* ── 12. 80G Application ── */
    {
      slug: "80g-application",
      title: `80G Certification Application in ${areaName}`,
      price: "₹3,999",
      timeline: "Processing 4–6 Months",
      icon: "💚",
      gradient: "from-emerald-500 to-green-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "Eligibility assessment (post-12A requirement)",
        "Form 10G application preparation",
        "Online submission & document upload",
        "CIT(Exemption) coordination & queries",
        "80G certificate issuance follow-up",
        "Donor deduction advisory for fundraising",
      ],
      seoContent: `Section 80G certification enables donors who contribute to a charitable trust or NGO in ${areaName}, ${district}, Haryana to claim income tax deductions on their donations — either 50% or 100% of the donated amount (with or without a qualifying limit), depending on the specific 80G sub-category granted. For the trust or NGO, holding 80G certification dramatically increases fundraising capacity, as individual and corporate donors are far more willing to contribute when they can reduce their taxable income by claiming the donation as a deduction. 80G can only be obtained after 12A registration is already in place, and requires separate application and approval.

Taxvio's 80G application service for ${areaName} charitable entities begins with 12A registration verification (confirming that your trust already holds valid 12A/12AB registration, a mandatory prerequisite for 80G), followed by preparation and online filing of Form 10G through the income tax portal. We compile required documents — trust deed, 12A registration certificate, audited financial statements for at least one prior year (showing actual charitable activities and fund utilisation), bank account details, and particulars of trustees — and submit the application to the jurisdictional Commissioner of Income Tax (Exemptions).

The CIT(E) examines the application to verify that the trust's activities align with 80G eligibility criteria (charitable purposes as defined under Section 2(15), genuine utilisation of funds, proper governance) and may issue queries or call for a personal hearing. We handle all correspondence, provide clarifications, and represent the trust during hearings to secure 80G certification. Post-approval, we advise ${areaName} NGOs on issuing valid 80G donation receipts to donors (including mandatory details like donor PAN, donation amount, and 80G registration number) and maintaining records to satisfy future audits or renewal requirements.`,
    },

    /* ── 13. Form 15G/15H ── */
    {
      slug: "form-15g-15h",
      title: `Form 15G / 15H Filing in ${areaName}`,
      price: "₹199",
      timeline: "Same Day Filing",
      icon: "📋",
      gradient: "from-gray-500 to-slate-600",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "Eligibility verification (no tax liability condition)",
        "Form 15G for individuals below 60 years",
        "Form 15H for senior citizens (60+ years)",
        "Bank / FD submission guidance",
        "Annual renewal tracking",
        "TDS exemption compliance confirmation",
      ],
      seoContent: `Form 15G (for individuals below 60 years) and Form 15H (for senior citizens aged 60 and above) are self-declarations submitted to banks, post offices, and financial institutions in ${areaName}, ${district}, Haryana to request non-deduction of TDS on interest income — applicable when the individual's total income for the financial year is below the taxable limit and thus no tax liability is expected. Without submitting 15G/15H, banks and institutions deduct TDS at applicable rates (10% on interest above ₹40,000 for most individuals, ₹50,000 for senior citizens), requiring the taxpayer to file ITR to claim a refund of the excess TDS — a process that takes months and locks up liquidity unnecessarily.

Taxvio's Form 15G/15H service for ${areaName} residents covers eligibility verification (confirming that your estimated total income including salary, business income, capital gains, and interest will remain below the basic exemption limit after claiming applicable deductions), form preparation with accurate declaration of estimated income and previous year's tax status, and guidance on submitting the completed form to each bank or institution where you hold fixed deposits or savings accounts. Both forms are typically submitted at the beginning of each financial year (April) and remain valid for that year only, requiring renewal annually.

For ${areaName} senior citizens with multiple FDs across different banks, we track submission deadlines and ensure 15H is filed with each institution before interest accrual begins, preventing TDS deduction from the first quarter itself. If TDS has already been deducted before 15G/15H submission, we assist with ITR filing to claim the refund, demonstrating that total income was indeed below the taxable threshold and that the deducted TDS represents an overpayment to be returned.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function HaryanaIncomeTaxAreaPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const areaData  = getAreaData(city);
  const areaName  = areaData?.name     ?? formatAreaDisplay(city);
  const district  = areaData?.district ?? areaName;
  const region    = areaData?.region   ?? "Haryana";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need income tax services in ${areaName}, ${district}, Haryana.`)}`;

  const services = getServiceContent(areaName, district, region);

  const nearbyAreas = HARYANA_AREAS
    .filter((c) => c.district === district && slugifyArea(c.name) !== city)
    .slice(0, 6);
  const regionAreas = nearbyAreas.length < 3
    ? HARYANA_AREAS.filter((c) => c.region === region && slugifyArea(c.name) !== city).slice(0, 6)
    : nearbyAreas;

  /* ── JSON-LD ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides income tax return filing, TDS/TCS returns, tax audit, scrutiny & notice reply, 12A/80G registration, and PAN/TAN services in ${areaName}, ${district}, Haryana.`,
    areaServed: [{ "@type": "Place", name: areaName, containedInPlace: { "@type": "City", name: "Haryana" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3100" },
    priceRange: "₹299 - ₹4,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",              item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Income Tax Haryana", item: "https://www.taxvio.in/state/haryana/income-tax-services" },
      { "@type": "ListItem", position: 3, name: district,             item: `https://www.taxvio.in/state/haryana/income-tax-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${areaName} ITR`,    item: `https://www.taxvio.in/state/haryana/income-tax-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Income Tax Services in ${areaName}, Haryana`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/haryana/income-tax-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ITR filing deadline for ${areaName} taxpayers?`,
        acceptedAnswer: { "@type": "Answer", text: `For individuals (salaried, proprietors) in ${areaName}, the ITR filing deadline is 31st July of the assessment year. For businesses requiring audit, the deadline is 31st October. Late filing attracts a penalty of up to ₹5,000 under Section 234F.` },
      },
      {
        "@type": "Question",
        name: `Do I need to file ITR in ${areaName} if my income is below the tax limit?`,
        acceptedAnswer: { "@type": "Answer", text: `Filing is not mandatory if income is below the basic exemption limit (₹2.5 lakh for individuals below 60, ₹3 lakh for senior citizens). However, filing is advisable to claim TDS refunds, apply for loans, or obtain visas — and is mandatory if total TDS deducted exceeds ₹25,000/50,000 in certain cases.` },
      },
      {
        "@type": "Question",
        name: `How long does tax audit take for ${areaName} businesses?`,
        acceptedAnswer: { "@type": "Answer", text: `Tax audit under Section 44AB for ${areaName} businesses typically takes 2–4 weeks, depending on the completeness of books of accounts and availability of vouchers. The audit report (Form 3CA/3CB-3CD) must be filed by 30th September, and ITR by 31st October for audited cases.` },
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
                  { href: "/state/haryana/income-tax-services", label: "Income Tax — Haryana" },
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
                  {areaName}, {district} · Haryana · Income Tax Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Filing &amp; Services
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {areaName}, Haryana
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">ITR filing</strong> for salaried, proprietors, firms &amp; companies,{" "}
                  <strong className="text-white">quarterly TDS/TCS returns</strong>, tax audit, scrutiny reply,
                  12A/80G, PAN/TAN in{" "}
                  <strong className="text-white">{areaName}, {district}, Haryana</strong> —
                  100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹699</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA-Assisted" },
                    { icon: Shield,     text: "100% Secure" },
                    { icon: Zap,        text: "Same-Day Response" },
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
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for Tax Help
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
                    <p className="font-bold text-white text-sm">Income Tax Services — {areaName}</p>
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
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹699</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">ITR Filing</p>
                    <p className="text-white text-sm font-bold">3–5 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats ribbon */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck,  label: "CA-Certified Team"         },
                { icon: TrendingUp,  label: "4,800+ Haryana Businesses" },
                { icon: Users,       label: "200+ Haryana Areas"        },
                { icon: IndianRupee, label: "Transparent Pricing"       },
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
              { val: "3–5 Days", label: "ITR Filing",        icon: Zap          },
              { val: "4.9★",      label: "Average Rating",   icon: Star         },
              { val: "₹699",      label: "Starting Price",   icon: IndianRupee  },
              { val: "13",        label: "Tax Services",     icon: ClipboardList },
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
                          Income Tax Service #{String(idx + 1).padStart(2, "0")}
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
                Why {areaName} Taxpayers Choose Taxvio for Income Tax
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users,      title: "CA-Certified Tax Professionals", desc: `Every ITR filing and tax service for ${areaName} taxpayers is handled by practising CAs — not data entry agents. We understand Haryana income tax jurisdictions and AO query patterns for ${district}.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap,        title: "100% Online — No Office Visit",   desc: `Share Form 16, bank statements, and documents on WhatsApp from anywhere in ${areaName}. We handle all portal submissions, computations, and department coordination without requiring an office visit.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Calculator, title: "Old vs New Regime Analysis",      desc: `We compute tax liability under both old regime (with deductions) and new regime (lower rates) for ${areaName} taxpayers, helping you choose the option that minimises tax and maximises refunds.`, color: "bg-violet-100 text-violet-700" },
                { icon: Building,   title: "Corporate & Trust Tax Experts",   desc: `ITR-5 (firms/LLPs), ITR-6 (companies), ITR-7 (trusts/NGOs), and MAT/AMT computations for ${areaName} businesses — with audit coordination and assessment defence.`, color: "bg-amber-100 text-amber-700" },
                { icon: CheckCircle,title: "Transparent Pricing from ₹299",   desc: `No hidden fees, no surprise charges. Clear, upfront pricing for every income tax service in ${areaName} — PAN (₹299), ITR-Salaried (₹699), Audit (₹4,999).`, color: "bg-teal-100 text-teal-700" },
                { icon: Briefcase,  title: "TDS/TCS Compliance Specialists",  desc: `Quarterly TDS return filing (24Q/26Q/27Q) and TCS returns (27EQ) for ${areaName} employers and businesses — with challan reconciliation and late fee minimisation.`, color: "bg-sky-100 text-sky-700" },
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
                How to File ITR in {areaName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Share Documents", desc: "Send Form 16, bank statements, investment proofs & previous ITR on WhatsApp" },
                { step: "02", title: "Tax Computation", desc: "Our CA team computes tax, optimises deductions & compares old vs new regime" },
                { step: "03", title: "Review & Approve", desc: "We share draft computation. You review, approve, and we file ITR on portal" },
                { step: "04", title: "ITR Filed & Verified", desc: "ITR acknowledgement sent. We track refund (if any) and handle notices" },
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
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">Income Tax FAQs for {areaName} Taxpayers</h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `What is the ITR filing deadline for ${areaName} taxpayers?`,
                  a: `For individuals (salaried, proprietors) in ${areaName}, the ITR filing deadline is 31st July of the assessment year. For businesses requiring audit, the deadline is 31st October. Late filing attracts a penalty of up to ₹5,000 under Section 234F.`,
                },
                {
                  q: `Do I need to file ITR in ${areaName} if my income is below the tax limit?`,
                  a: `Filing is not mandatory if income is below the basic exemption limit (₹2.5 lakh for individuals below 60, ₹3 lakh for senior citizens). However, filing is advisable to claim TDS refunds, apply for loans, or obtain visas — and is mandatory if total TDS deducted exceeds ₹25,000/50,000 in certain cases.`,
                },
                {
                  q: `How long does tax audit take for ${areaName} businesses?`,
                  a: `Tax audit under Section 44AB for ${areaName} businesses typically takes 2–4 weeks, depending on the completeness of books of accounts and availability of vouchers. The audit report (Form 3CA/3CB-3CD) must be filed by 30th September, and ITR by 31st October for audited cases.`,
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
                  <h2 className="text-lg font-extrabold text-gray-800">Income Tax Services in Nearby Haryana Areas</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionAreas.map((c) => (
                  <Link key={c.name}
                    href={`/state/haryana/income-tax-services/${slugifyArea(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    ITR in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/haryana/income-tax-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00416a]/30 bg-[#deeef7] px-4 py-2 text-sm font-bold text-[#00416a] hover:shadow-sm transition-all">
                  View All Haryana Areas <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
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
                  Serving tax clients in {areaName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Expert Income Tax Help in {areaName}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  ITR filing, quarterly TDS/TCS returns, tax audit, scrutiny reply, 12A/80G, PAN/TAN —
                  all delivered online for taxpayers in {areaName}, {district}. Starting ₹299. CA-assisted, same-day WhatsApp response.
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