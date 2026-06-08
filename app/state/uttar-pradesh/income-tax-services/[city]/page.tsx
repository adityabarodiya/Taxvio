// app/state/uttar-pradesh/income-tax-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, Calculator,
  Building2, Receipt, BookOpen, ClipboardList,
} from "lucide-react";
import {
  UP_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay,
} from "@/data/up-gst-cities";

/* ─── Static Params ─────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return ALL_CITY_SLUGS.map((city) => ({ city }));
}

/* ─── SEO Metadata ──────────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city);
  const cityName = data?.name ?? formatCityDisplay(city);
  const district = data?.district ?? cityName;

  return {
    title: `Income Tax Return Filing in ${cityName}, ${district}, UP | Taxvio`,
    description: `Expert ITR filing for salaried, proprietors, firms & companies; TDS/TCS returns; tax audit (Sec. 44AB); 12A/80G registration; PAN/TAN; and income tax scrutiny reply in ${cityName}, ${district}, Uttar Pradesh. CA-assisted, 100% online, starting ₹499.`,
    keywords: [
      `income tax return filing ${cityName}`,
      `ITR filing ${cityName} UP`,
      `TDS return ${cityName}`,
      `tax audit ${cityName}`,
      `income tax consultant ${cityName} ${district}`,
      `12A 80G registration ${cityName}`,
      `PAN card ${cityName}`,
      `IT scrutiny notice ${cityName}`,
      `online ITR ${cityName} Uttar Pradesh`,
      `CA income tax ${district}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/uttar-pradesh/income-tax-services/${city}` },
    openGraph: {
      title: `Income Tax Services in ${cityName}, UP | Taxvio`,
      description: `ITR filing, TDS returns, tax audit & 12A/80G in ${cityName}, ${district}, UP — CA-assisted, from ₹499.`,
      url: `https://www.taxvio.in/state/uttar-pradesh/income-tax-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `Income Tax Services in ${cityName}, UP | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(cityName: string, district: string, region: string) {
  return [

    /* ── 1. ITR – Salaried ── */
    {
      slug: "itr-salaried",
      title: `Income Tax Return Filing for Salaried Individuals in ${cityName}`,
      price: "₹499",
      timeline: "1–2 Working Days",
      icon: "💼",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "ITR-1 (Sahaj) for single-employer salary income",
        "ITR-2 for salary + capital gains / foreign income / more than one property",
        "Form 16 / 16A verification and tax computation",
        "Old tax regime vs new tax regime (115BAC) comparison",
        "80C, 80D, 80CCD(1B), HRA, LTA exemption optimisation",
        "E-filing on income tax portal with ITR-V acknowledgement",
      ],
      seoContent: `Income tax return filing for salaried individuals in ${cityName}, ${district} is mandatory for all employees whose gross total income exceeds the basic exemption limit — ₹2.5 lakh under the old regime and ₹3 lakh under the new tax regime (FY 2024-25). Even below-threshold salaried employees in ${cityName} benefit from filing ITR to obtain refunds of excess TDS deducted by employers, build a documented income history for home loans and visas, and maintain a clean compliance record.

Taxvio's ITR filing service for ${cityName} salaried employees starts with a thorough Form 16 analysis — cross-checking the employer's TDS certificate against your salary slips, verifying HRA exemption calculation (especially for employees who rent in ${district} where actual rents may differ from employer assumptions), and confirming 80C investments actually claimed. We compare both old and new tax regimes for every client to determine the lower tax option — factoring in your 80C investments, 80D health insurance premiums, home loan interest under Section 24(b), and National Pension System contribution under 80CCD(1B).

For ${cityName} employees with income from multiple sources — such as house property rental income, fixed deposit interest, savings account interest above ₹10,000, or mutual fund / equity capital gains — we correctly classify ITR-2 vs ITR-1 and ensure Schedule CG, Schedule OS, and Schedule HP are accurately populated. Post-filing, we provide the ITR-V acknowledgement, assist with e-verification via Aadhaar OTP or net banking, and handle any Section 143(1) intimation discrepancies — giving salaried taxpayers in ${cityName} end-to-end peace of mind for their annual tax compliance.`,
    },

    /* ── 2. ITR – Proprietor / Freelancer ── */
    {
      slug: "itr-proprietor",
      title: `ITR Filing for Proprietors & Freelancers in ${cityName}`,
      price: "₹1,499",
      timeline: "2–4 Working Days",
      icon: "🏪",
      gradient: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "ITR-3 for business/profession with regular accounts",
        "ITR-4 (Sugam) for presumptive taxation under 44AD / 44ADA / 44AE",
        "Profit & Loss account and Balance Sheet preparation",
        "Depreciation schedule and capital additions",
        "GST turnover reconciliation with income tax turnover",
        "Section 44AD / 44ADA presumptive income computation",
      ],
      seoContent: `Proprietors, self-employed professionals, and freelancers in ${cityName}, ${district} face more complex income tax filing requirements than salaried employees — because business income computation requires preparing profit and loss accounts, balance sheets, and reconciling bank statements with sales and expense records. ITR-4 (Sugam) under the presumptive taxation scheme (Section 44AD for traders and Section 44ADA for professionals) simplifies this for eligible taxpayers with turnover below ₹2 crore (traders) or ₹50 lakh (professionals) — declaring income at a minimum 8% or 50% of turnover respectively, without maintaining detailed books.

For ${cityName} proprietors whose business income is higher than the presumptive minimum, or who have capital expenditure and depreciation claims, ITR-3 with complete books of accounts is more advantageous. Taxvio's CA team prepares the full P&L and Balance Sheet from your bank statements, purchase/sales records, and expense vouchers — correctly categorising business expenses (rent, staff salaries, electricity, raw material, freight) as allowable deductions, computing depreciation on plant, machinery, and vehicles under the Income Tax Act schedules, and calculating the actual taxable business income before applying applicable deductions.

A critical compliance requirement for ${cityName} proprietors with business turnover above ₹1 crore (or professional receipts above ₹50 lakh) is the mandatory tax audit under Section 44AB. Our CA team conducts the complete audit, prepares Form 3CB-3CD with all required clauses including GST reconciliation, related party transactions, and loans/advances disclosures, and files the audit report on the income tax portal by the due date — protecting you from the 0.5% of turnover penalty (maximum ₹1.5 lakh) for late or missed audit filing.`,
    },

    /* ── 3. ITR – Firm / LLP ── */
    {
      slug: "itr-firm-llp",
      title: `ITR Filing for Partnership Firms & LLPs in ${cityName}`,
      price: "₹2,499",
      timeline: "3–5 Working Days",
      icon: "🏛️",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "ITR-5 for partnership firms, LLPs, AOPs, BOIs",
        "Partner capital account reconciliation",
        "Profit sharing ratio and remuneration computation",
        "Interest on partner capital (Section 40(b) limits)",
        "Tax audit coordination (if turnover > ₹1Cr)",
        "Depreciation and business deduction schedules",
      ],
      seoContent: `Partnership firms and Limited Liability Partnerships (LLPs) registered or operating in ${cityName}, ${district} must file ITR-5 annually. Unlike individual ITR forms, ITR-5 requires a complete set of financial statements — profit & loss account, balance sheet with partner capital accounts, and all schedules covering depreciation (Schedule DPM), capital gains (Schedule CG), other income (Schedule OS), deductions (Schedule VI-A), and brought-forward losses (Schedule BFLAs).

Partnership firms in ${cityName} are taxed at a flat rate of 30% on their total income (plus surcharge and cess). A critical compliance point under Section 40(b) is the cap on partner remuneration and interest that the firm can deduct — remuneration is allowable up to specified limits based on book profits, and interest on partner capital is capped at 12% per annum. Taxvio's CA team correctly computes allowable partner remuneration and interest for ${cityName} firms, ensuring the firm's deductions are maximised without triggering disallowances under Section 40(b).

For LLPs in ${cityName}, the additional compliance requirement is the annual filing of Form 11 and Form 8 with the Ministry of Corporate Affairs (MCA) — separate from the income tax ITR-5. Our team handles both income tax and ROC compliance for LLPs as a bundled service, ensuring designated partner signatures, DPIN-linked DSC availability, and timely MCA portal filing. Firms and LLPs with turnover above ₹1 crore are also required to get their accounts audited under Section 44AB — our CA team coordinates the complete tax audit, Form 3CA-3CD preparation, and portal submission.`,
    },

    /* ── 4. ITR – Company / Trust / NGO ── */
    {
      slug: "itr-company-trust",
      title: `ITR Filing for Companies & Trusts in ${cityName}`,
      price: "₹3,499",
      timeline: "5–7 Working Days",
      icon: "🏢",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "ITR-6 for Private Limited, Public Limited, OPC companies",
        "ITR-7 for Section 8 companies, trusts, political parties",
        "MAT (Minimum Alternate Tax) / AMT computation",
        "Deferred tax asset / liability computation",
        "Audit coordination — Form 3CA-3CD filing",
        "Section 10, 11, 12 trust exemption claims",
      ],
      seoContent: `Private Limited companies, One Person Companies (OPCs), and public companies registered or operating in ${cityName}, ${district} must file ITR-6 annually with audited financial statements. Companies are taxed at 22% under the new concessional regime (Section 115BAA, available to domestic companies forgoing exemptions and deductions) or 25% / 30% under the regular regime depending on turnover. Taxvio's CA team assists ${cityName} companies in choosing the optimal tax regime, computing correct Minimum Alternate Tax (MAT) under Section 115JB (18.5% of book profit as a floor for regular-regime companies), and filing the complete ITR-6 with all required schedules including Schedule BP (book profit computation), Schedule SI (income at special rates), and Schedule CG.

For charitable trusts, religious trusts, Section 8 companies, and NGOs in ${cityName} — the income tax compliance structure is fundamentally different. Trusts registered under Section 12A or 12AB are exempt from income tax on income applied for charitable purposes, but must file ITR-7 annually, maintain audited accounts under Form 10B, and submit a Statement of Application and Accumulation. Taxvio handles complete trust ITR-7 filing — verifying 85% application of income rule, computing accumulation under Section 11(2) where needed, filing Form 9A for application in future years, and ensuring corpus donations are correctly segregated from applicable income.

${cityName} companies that are required to get accounts audited under the Companies Act 2013 must also file their tax audit report under Section 44AB by September 30. Our team coordinates with the statutory auditor, prepares the tax audit report in Form 3CA-3CD covering all 41 disclosure clauses, files the signed report on the income tax portal, and ensures the company's ITR-6 is filed by October 31 — meeting both the tax audit and ITR due dates for corporate taxpayers.`,
    },

    /* ── 5. Quarterly TDS Return ── */
    {
      slug: "tds-return",
      title: `TDS Return Filing (24Q / 26Q / 27Q) in ${cityName}`,
      price: "₹999/quarter",
      timeline: "Before Quarterly Due Date",
      icon: "📊",
      gradient: "from-teal-500 to-cyan-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "Form 24Q — salary TDS (Q1: Jul 31, Q2: Oct 31, Q3: Jan 31, Q4: May 31)",
        "Form 26Q — non-salary TDS (payments to contractors, rent, commission, etc.)",
        "Form 27Q — TDS on payments to non-residents",
        "Challan validation and 26AS reconciliation",
        "TRACES Conso file correction for prior quarter errors",
        "TDS certificate (Form 16 / 16A) generation and distribution",
      ],
      seoContent: `Every employer, company, and business in ${cityName}, ${district} that deducts tax at source is required to file quarterly TDS returns — and non-compliance attracts severe penalties. Form 24Q covers TDS on salary payments (due July 31, October 31, January 31, and May 31 for the four quarters), while Form 26Q covers TDS on non-salary payments like contractor payments under Section 194C, professional fees under 194J, rent under 194I, interest under 194A, commission under 194H, and many other specified payment categories. Late filing attracts ₹200 per day penalty under Section 234E, plus ₹10,000 to ₹1 lakh penalty under Section 271H for non-filing.

Taxvio's TDS return service for ${cityName} businesses begins with a complete challan-to-deductee reconciliation — matching every TDS challan deposited (BSR code, challan serial number, date, and amount) against the correct deductee PAN and deduction details. This is critical because errors in challan mapping prevent employees and vendors from seeing their TDS credit in Form 26AS and TRACES, leading to hardship for deductees and potential notices for the deductor. Our team generates the quarterly return in TRACES-compliant FVU format, validates it against NSDL's File Validation Utility, and submits the return through the TIN portal.

For ${cityName} employers filing Form 24Q, the fourth quarter return (Q4) requires additional care — it includes the annual salary reconciliation, computation of final tax liability for each employee, and Part-B of Form 16 preparation. Our team prepares and distributes Form 16 (Part A from TRACES and Part B manually prepared) for all employees after Q4 filing, ensuring employees can use accurate figures for their ITR filing. For Form 26Q corrections and TRACES Conso file requests (for amending prior-quarter filed returns), our team handles the complete correction cycle including short deduction and PAN error rectifications.`,
    },

    /* ── 6. Quarterly TCS Return ── */
    {
      slug: "tcs-return",
      title: `TCS Return Filing (Form 27EQ) in ${cityName}`,
      price: "₹999/quarter",
      timeline: "Before Quarterly Due Date",
      icon: "🧾",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Form 27EQ quarterly TCS return filing",
        "TCS on goods u/s 206C: scrap, minerals, timber, tendu leaves",
        "TCS on sale of motor vehicles above ₹10 lakh (206C(1F))",
        "TCS on foreign remittance and LRS (206C(1G))",
        "TCS on goods sale above ₹50 lakh (206C(1H))",
        "Form 27D TCS certificate generation for collectees",
      ],
      seoContent: `Tax Collected at Source (TCS) under Section 206C applies to sellers of specified goods and services in ${cityName}, ${district} — and with the expansion of TCS provisions in recent years, more businesses than ever are liable for TCS collection and quarterly Form 27EQ returns. The original TCS categories under Section 206C(1) include scrap (1%), minerals like lignite and coal (1%), timber from forest leases (2.5%), and tendu leaves (5%). More recently added provisions include TCS on sale of motor vehicles exceeding ₹10 lakh at 1% under Section 206C(1F), TCS on foreign remittance through Liberalised Remittance Scheme (LRS) at 0.5% to 20% under Section 206C(1G), and TCS on sale of goods exceeding ₹50 lakh to a single buyer in a financial year at 0.1% under Section 206C(1H).

Taxvio handles the complete TCS compliance cycle for ${cityName} businesses — from initial eligibility assessment (determining whether your sales/receipts cross the threshold triggering TCS, and identifying the correct TCS rate for each category), to challan deposit using correct BSR code and nature of payment, and finally quarterly Form 27EQ return filing before the due date (July 15, October 15, January 15, and May 15). Form 27EQ requires accurate collectee PAN mapping, correct section codes for each TCS category, and challan-to-collectee reconciliation — errors result in Form 26AS mismatches for your buyers and TRACES mismatch notices for you.

Our team also handles TCS correction returns (Conso file based amendments from TRACES), generates Form 27D TCS certificates for all collectees after quarterly filing, and provides guidance on TCS exemption scenarios — such as buyers furnishing Form 27C (goods purchased for manufacturing, not trading), or situations where the buyer has obtained a lower/NIL TCS certificate under Section 197. For ${cityName} businesses handling high volumes of vehicle sales, foreign remittance, or bulk goods sales, our TCS compliance service provides end-to-end peace of mind.`,
    },

    /* ── 7. Income Tax Audit (Sec. 44AB) ── */
    {
      slug: "income-tax-audit",
      title: `Income Tax Audit (Section 44AB) in ${cityName}`,
      price: "₹4,999",
      timeline: "Completed Before Due Date",
      icon: "🔍",
      gradient: "from-indigo-500 to-blue-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "Business audit: turnover above ₹1 crore (₹10 crore if 95%+ digital)",
        "Profession audit: gross receipts above ₹50 lakh",
        "Form 3CA-3CD (where statutory audit applicable)",
        "Form 3CB-3CD (where statutory audit not applicable)",
        "All 41 clauses of Form 3CD including GST reconciliation",
        "Digital signature and e-filing of audit report",
      ],
      seoContent: `Income tax audit under Section 44AB is mandatory for businesses in ${cityName}, ${district} whose total sales, turnover, or gross receipts exceed ₹1 crore in a financial year. The threshold is relaxed to ₹10 crore for businesses where at least 95% of receipts and payments are in digital mode (bank transfers, cheques, etc.) — a provision that benefits many UP traders and manufacturers who have adopted digital banking. For professionals in ${cityName} — doctors, lawyers, engineers, consultants, and architects — the audit threshold is ₹50 lakh in gross professional receipts.

Additionally, taxpayers in ${cityName} who declare income lower than the presumptive rate under Section 44AD (below 8% of turnover for cash or 6% for digital receipts) or Section 44ADA (below 50% of gross professional receipts) and whose income exceeds the basic exemption limit are also required to get their accounts audited — even if their absolute turnover is below the ₹1 crore / ₹50 lakh threshold. This is a commonly overlooked provision that catches many small business owners and professionals off guard.

Taxvio's tax audit service for ${cityName} businesses involves a comprehensive examination of financial records: verification of books of accounts maintained under Section 44AA, reconciliation of income tax turnover with GST returns and TDS certificates, review of all deductions claimed, verification of loan and deposit transactions above ₹20,000 in cash (Section 269SS/269T), checking TDS compliance on salary, contractor, professional, and rent payments, and reviewing related party transactions and arm's-length pricing. All 41 clauses of Form 3CD are completed with documentary support, the report is digitally signed by a CA with valid UDIN, and e-filed on the income tax portal — meeting the September 30 due date consistently.`,
    },

    /* ── 8. Income Tax Scrutiny & Notice Reply ── */
    {
      slug: "it-scrutiny-notice",
      title: `Income Tax Scrutiny & Notice Reply in ${cityName}`,
      price: "₹2,499",
      timeline: "As Per Notice Timeline",
      icon: "⚖️",
      gradient: "from-rose-500 to-red-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Section 143(1) intimation — prima facie adjustment response",
        "Section 143(2) — scrutiny assessment notice reply",
        "Section 148 — income escaping assessment (reassessment)",
        "Section 156 — demand notice and rectification under 154",
        "CASS-selected and manual scrutiny case handling",
        "Appellate proceedings — CIT(A) and ITAT representation",
      ],
      seoContent: `Income tax scrutiny notices are issued to taxpayers in ${cityName}, ${district} when the Centralised Processing Centre (CPC) or the Assessing Officer detects discrepancies in filed returns — and responding accurately within the stipulated timeframe is critical to avoiding arbitrary additions and excessive tax demands. The most common notice taxpayers in ${cityName} receive is Section 143(1), which is a computer-generated intimation from CPC pointing out arithmetic errors, incorrect deduction claims, or mismatches between ITR data and information available with the income tax department (TDS data from 26AS, high-value transaction data from Annual Information Statement, and third-party SFT data).

Section 143(2) is the scrutiny assessment notice — issued by the jurisdictional Assessing Officer when the case is selected for detailed examination under the Computer-Aided Scrutiny Selection (CASS) system or for specific issue-based scrutiny. Responding to 143(2) requires submitting all relevant books of accounts, bank statements, contracts, invoices, investment evidence, and a structured written response addressing each issue raised by the AO. Our CA team prepares the complete reply with documentary annexures, appears before the ${district} income tax officer on your behalf if required, and ensures the assessment is completed with minimum additions.

Section 148 (reassessment) notices are particularly serious — they reopen completed assessments for years where the income tax department believes income has escaped assessment. This can go back up to 3 years (cases below ₹50 lakh escaped income) or up to 10 years (cases above ₹50 lakh) from the end of the relevant assessment year. Taxvio's team handles the complete reassessment cycle — filing the return in response to Section 148 notice, submitting objections to reopening where legally valid, participating in assessment proceedings, and filing appeals before the Commissioner of Income Tax (Appeals) or Income Tax Appellate Tribunal (ITAT) if the assessment order is unsatisfactory.`,
    },

    /* ── 9. 12A & 80G Registration ── */
    {
      slug: "12a-80g-registration",
      title: `12A & 80G Registration for Trusts & NGOs in ${cityName}`,
      price: "₹3,999",
      timeline: "30–90 Days",
      icon: "🤝",
      gradient: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "Section 12AB fresh registration (replacing old 12A/12AA)",
        "80G registration for donor tax deduction eligibility",
        "Form 10A online filing on income tax portal",
        "Trust deed / MOA review for compliance with 12A/80G conditions",
        "Renewal of provisional 12AB/80G to regular registration",
        "FCRA registration guidance for foreign contributions",
      ],
      seoContent: `Charitable trusts, religious trusts, Section 8 companies, and other non-profit organisations in ${cityName}, ${district} that wish to receive tax-exempt status under the Income Tax Act must obtain registration under Section 12A (now 12AB after the 2020 amendment). Without 12A/12AB registration, the trust's income — even if genuinely applied for charitable purposes — is taxable at the maximum marginal rate. With 12AB registration, income applied for the objects of the trust (education, medical relief, relief of poverty, environment, etc.) is exempt under Sections 11 and 12, making 12AB registration a fundamental prerequisite for sustainable non-profit operations in ${cityName}.

The 80G registration under Section 80G(5) enables donors to your organisation to claim a 50% or 100% deduction of their donation amount in their own income tax return — making your NGO or trust significantly more attractive to corporate and individual donors. Post the 2020 Budget amendments, both 12AB and 80G registrations are now granted first as provisional registrations (valid for 3 years) and then as regular registrations (valid for 5 years) — with renewal applications required before expiry under Form 10AB.

Taxvio assists trusts and NGOs in ${cityName} with the complete 12A/80G registration process: reviewing the trust deed or MOA to verify alignment with approved charitable objects under Section 2(15); preparing the application in Form 10A (for fresh registration or conversion from old provisional to regular); uploading required documents (trust deed, activity reports, accounts, PAN, registered office proof); responding to queries from the CIT(Exemptions) office; and obtaining the provisional registration letter. We also provide guidance on FCRA (Foreign Contribution Regulation Act) registration for ${cityName} NGOs that receive or plan to receive foreign contributions — a separate application to the Ministry of Home Affairs.`,
    },

    /* ── 10. PAN Card Application ── */
    {
      slug: "pan-card",
      title: `PAN Card Application & Correction in ${cityName}`,
      price: "₹199",
      timeline: "7–15 Working Days",
      icon: "🪪",
      gradient: "from-gray-500 to-slate-600",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "New PAN application — Form 49A (Indian citizens) / 49AA (foreign nationals)",
        "PAN correction: name, date of birth, address, father's name",
        "Duplicate / reprint PAN for lost or damaged card",
        "Aadhaar-PAN linking (mandatory, penalty ₹1,000 if not linked)",
        "PAN for companies, trusts, firms, and NRIs",
        "PAN status tracking and dispatch follow-up",
      ],
      seoContent: `Permanent Account Number (PAN) is the foundational tax identity for every taxpayer in ${cityName}, ${district} — and its accurate maintenance is critical for seamless income tax compliance, banking, investment, and high-value transaction reporting. PAN is mandatory for income tax return filing, TDS certificate matching in Form 26AS, opening bank accounts, fixed deposits above ₹50,000, mutual fund investments, property transactions above ₹10 lakh, and a wide range of financial transactions. The linking of PAN with Aadhaar became mandatory in 2023 — inoperative PAN (not linked with Aadhaar) results in TDS being deducted at higher rates (20% instead of applicable rates) and inability to file ITR, with a ₹1,000 late fee for belated linking.

For individuals in ${cityName} applying for a new PAN (Form 49A), the process involves submitting proof of identity, proof of address, and date of birth proof through the NSDL/UTIITSL portal with biometric or Aadhaar-based e-KYC. Taxvio handles the complete application — selecting the correct category (individual, HUF, company, firm, trust), uploading documents in the prescribed format, making the application fee payment, tracking the processing status, and coordinating the physical card dispatch to the ${district} address.

PAN corrections are equally important — errors in PAN records (wrong name, incorrect date of birth, wrong address, or father's name mismatch) cause failures in Form 26AS matching, TRACES operations, and banking KYC processes. Taxvio handles PAN correction/reissue applications for ${cityName} residents with the correct supporting documents — ensuring the correction is processed within the NSDL/UTIITSL turnaround time and the updated PAN card is received. We also assist with special PAN categories: PAN for NRIs using Form 49AA, PAN for companies and partnership firms at incorporation, and PAN for trusts and societies.`,
    },

    /* ── 11. TAN Application ── */
    {
      slug: "tan-application",
      title: `TAN Application & Registration in ${cityName}`,
      price: "₹499",
      timeline: "7–10 Working Days",
      icon: "🔢",
      gradient: "from-orange-500 to-amber-600",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-100",
      accentText: "text-orange-700",
      features: [
        "New TAN (Form 49B) for employers and businesses deducting TDS",
        "TAN correction application for name, address changes",
        "TAN allotment tracking with NSDL",
        "TDS compliance setup after TAN allotment",
        "Multiple TAN consolidation guidance",
        "Compliance reminders for quarterly TDS due dates",
      ],
      seoContent: `Tax Deduction Account Number (TAN) is a 10-digit alphanumeric identifier that every person or entity in ${cityName}, ${district} responsible for deducting or collecting tax at source must obtain before making the first TDS payment. Failure to obtain TAN before deducting TDS, or quoting an incorrect TAN on TDS challans and returns, attracts a penalty of ₹10,000 under Section 272BB. Every employer in ${cityName} with salaried employees, every business making contractor payments exceeding ₹30,000 (or ₹1 lakh aggregate) under Section 194C, every company paying rent above ₹2.4 lakh annually under 194I, and every professional firm paying fees to other professionals under Section 194J must have a valid TAN.

Taxvio processes TAN applications for ${cityName} businesses through Form 49B at the NSDL portal — the form requires the deductor category (company, individual, HUF, firm, AOP, etc.), full legal name exactly as in PAN records, address, contact details, and the Assessing Officer (AO) code corresponding to the ${district} income tax jurisdiction. The AO code is determined based on your city, ward, range, and the type of taxpayer — an incorrect AO code leads to TAN allocation in the wrong jurisdiction and subsequent assessment transfer complications.

After TAN allotment, Taxvio provides a complete TDS compliance setup guide for ${cityName} businesses — covering challan deposit procedures (OLTAS payment via bank or online), monthly deposit due dates (7th of following month, April 30 for March deductions), quarterly return filing schedules, Form 16/16A certificate preparation, and TRACES account registration for online TDS services. We also help businesses that have inadvertently obtained multiple TANs (common after multiple registrations or migrations) by identifying the TAN to retain and surrendering duplicates through the proper TRACES surrender process.`,
    },

    /* ── 12. Form 15G / 15H ── */
    {
      slug: "form-15g-15h",
      title: `Form 15G & 15H Filing in ${cityName}`,
      price: "₹199",
      timeline: "Same Day",
      icon: "📋",
      gradient: "from-emerald-500 to-green-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "Form 15G for individuals below 60 years with income below taxable limit",
        "Form 15H for senior citizens (60+) — no income threshold condition",
        "Submission to bank, EPFO, post office, company FDs",
        "Eligibility verification before filing",
        "Guidance on correct financial year and estimated income",
        "Assistance in case of wrong TDS already deducted",
      ],
      seoContent: `Form 15G and Form 15H are self-declaration forms submitted by taxpayers in ${cityName}, ${district} to request that the payer — typically a bank, NBFC, or company — not deduct TDS on specified income payments. Form 15G is for individuals below 60 years of age, HUFs, and trusts whose estimated total income for the financial year is below the basic exemption limit (₹2.5 lakh for FY 2024-25 under old regime, ₹3 lakh under new regime) — provided the total interest income also does not exceed the basic exemption. Form 15H is for resident individuals aged 60 years or above (senior citizens), for whom there is no condition that total income must be below the exemption limit — only that the tax computed on total income must be nil.

These forms are particularly important for ${cityName} residents who have bank fixed deposits, savings account interest, EPF withdrawals, post office deposits, NSC interest, or other income subject to TDS. Banks must deduct TDS at 10% (Section 194A) on aggregate interest income above ₹40,000 per financial year (₹50,000 for senior citizens) — but if a valid Form 15G or 15H is submitted at the beginning of the financial year, TDS deduction is waived, saving the taxpayer from the inconvenience of claiming refund while filing ITR.

Taxvio provides Form 15G/15H filing assistance for ${cityName} residents — verifying eligibility, computing estimated total income including all sources (salary, pension, FD interest, other sources) to confirm the nil-tax condition, preparing the correct form for the applicable financial year, and guiding submission to all relevant payers. We also assist residents where TDS has already been deducted despite eligibility for 15G/15H — advising on claiming the full TDS refund through ITR filing and, in some cases, applying for lower/nil TDS certificate under Section 197 for future payments.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function UPIncomeTaxCityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  const cityData = getCityData(city);
  const cityName = cityData?.name ?? formatCityDisplay(city);
  const district = cityData?.district ?? cityName;
  const region = cityData?.region ?? "Uttar Pradesh";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need income tax services in ${cityName}, ${district}, UP.`)}`;

  const services = getServiceContent(cityName, district, region);

  const nearbyCities = UP_CITIES
    .filter((c) => c.district === district && slugifyCity(c.name) !== city)
    .slice(0, 5);
  const regionCities = nearbyCities.length < 3
    ? UP_CITIES.filter((c) => c.region === region && slugifyCity(c.name) !== city).slice(0, 6)
    : nearbyCities;

  /* ── JSON-LD ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides ITR filing, TDS/TCS returns, tax audit, 12A/80G registration, PAN/TAN, and income tax scrutiny reply in ${cityName}, ${district}, Uttar Pradesh.`,
    areaServed: [{ "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: "Uttar Pradesh" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2400" },
    priceRange: "₹199 - ₹9999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Income Tax UP", item: "https://www.taxvio.in/state/uttar-pradesh/income-tax-services" },
      { "@type": "ListItem", position: 3, name: district, item: `https://www.taxvio.in/state/uttar-pradesh/income-tax-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${cityName} Income Tax`, item: `https://www.taxvio.in/state/uttar-pradesh/income-tax-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Income Tax Services in ${cityName}, UP`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/uttar-pradesh/income-tax-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ITR filing due date for individuals in ${cityName}?`,
        acceptedAnswer: { "@type": "Answer", text: `The ITR filing due date for individuals (salaried, proprietors not requiring audit) in ${cityName} is July 31 for each financial year. For businesses and professionals requiring tax audit under Section 44AB, the due date is October 31. Belated return can be filed until December 31 with a late fee of ₹5,000 (₹1,000 if income is below ₹5 lakh).` },
      },
      {
        "@type": "Question",
        name: `Is it compulsory to file ITR in ${cityName} if income is below ₹5 lakh?`,
        acceptedAnswer: { "@type": "Answer", text: `ITR filing is mandatory in ${cityName} if gross total income exceeds the basic exemption limit — ₹2.5 lakh (below 60 years), ₹3 lakh (60–80 years senior citizens), or ₹5 lakh (super senior citizens above 80 years). Even below-threshold taxpayers benefit from filing ITR to claim TDS refund, establish income proof for loans, and maintain compliance records.` },
      },
      {
        "@type": "Question",
        name: `What documents are needed for ITR filing in ${cityName}?`,
        acceptedAnswer: { "@type": "Answer", text: `For salaried employees in ${cityName}: Form 16, salary slips, bank statement, investment proofs (80C, 80D), rent receipts for HRA. For proprietors: business bank statements, sales and purchase records, GST returns. For all: PAN card, Aadhaar, and previous year's ITR acknowledgement.` },
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
                  { href: "/state/uttar-pradesh/income-tax-services", label: "Income Tax — UP" },
                  { href: null, label: cityName },
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
                  {cityName}, {district} · Uttar Pradesh · Income Tax
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Return Filing
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {cityName}, UP
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">ITR filing</strong> for salaried, proprietors, firms &amp; companies;{" "}
                  <strong className="text-white">TDS / TCS quarterly returns</strong>; tax audit; 12A/80G; PAN/TAN;
                  and income tax scrutiny replies in{" "}
                  <strong className="text-white">{cityName}, {district}, Uttar Pradesh</strong> —
                  100% online by CA professionals. Starting <strong className="text-sky-300">₹499</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA-Assisted" },
                    { icon: Shield, text: "100% Secure" },
                    { icon: Zap, text: "Same-Day Filing" },
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

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-4 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all">
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for ITR Help
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

              {/* Right — services panel */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}>
                <div className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                  <div>
                    <p className="font-bold text-white text-sm">Income Tax Services — {cityName}</p>
                    <p className="text-[11px] text-white/50 mt-0.5">{district} · {services.length} services</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  {services.map((svc) => (
                    <a href={`#${svc.slug}`} key={svc.slug}
                      className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/10"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <span className="flex items-center gap-2 text-xs font-semibold text-white/75">
                        <span>{svc.icon}</span>
                        <span className="truncate text-[11px]">
                          {svc.title.replace(` in ${cityName}`, "").replace(` for Salaried Individuals in ${cityName}`, " – Salaried").replace(` for Proprietors & Freelancers in ${cityName}`, " – Proprietor").replace(` for Partnership Firms & LLPs in ${cityName}`, " – Firm/LLP").replace(` for Companies & Trusts in ${cityName}`, " – Company").replace(` (24Q / 26Q / 27Q) in ${cityName}`, "").replace(` (Form 27EQ) in ${cityName}`, "").replace(` (Section 44AB) in ${cityName}`, "").replace(` & Notice Reply in ${cityName}`, "").replace(` for Trusts & NGOs in ${cityName}`, "").replace(` Application & Correction in ${cityName}`, "").replace(` Application & Registration in ${cityName}`, "").replace(` Filing in ${cityName}`, "")}
                        </span>
                      </span>
                      <span className="text-[10px] font-bold text-sky-300 shrink-0 ml-2">{svc.price}</span>
                    </a>
                  ))}
                </div>
                <div className="mx-4 mb-4 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Starting Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹499</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Same-day</p>
                    <p className="text-white text-sm font-bold">Response</p>
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
                { icon: TrendingUp, label: "12,000+ Returns Filed" },
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

        {/* ════════ STATS RIBBON ════════ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "1–2 Days", label: "Salaried ITR", icon: Zap },
              { val: "4.9★", label: "Average Rating", icon: Star },
              { val: "₹499", label: "Starting Price", icon: IndianRupee },
              { val: "12", label: "Services Available", icon: ClipboardList },
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

        {/* ════════ SERVICE CARDS WITH DEEP SEO CONTENT ════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-16">
            {services.map((svc, idx) => (
              <article key={svc.slug} id={svc.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">

                {/* Header */}
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

                    {/* SEO Content */}
                    <div>
                      <h3 className="text-xs font-bold text-[#00416a] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <BookOpen size={13} />About This Service in {cityName}
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

                    {/* Features Sidebar */}
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
                Why {cityName} Taxpayers Choose Taxvio for Income Tax
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users, title: "ICAI-Certified CA Team", desc: `Every ITR and tax compliance service for ${cityName} taxpayers is handled by practising Chartered Accountants — not software bots or data entry operators. Real CA sign-off on every return.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap, title: "100% Online — No Office Visit", desc: `Share Form 16, bank statements, and investment proofs on WhatsApp from ${cityName}. We prepare, review, and file your ITR without requiring an office visit. E-verification via Aadhaar OTP.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Calculator, title: "Old vs New Regime Optimisation", desc: `We compute your tax liability under both old (with deductions) and new (lower slab) tax regimes for every ${cityName} client before filing — ensuring you always pay the minimum legal tax.`, color: "bg-violet-100 text-violet-700" },
                { icon: AlertCircle, title: "Proactive Notice Management", desc: `We monitor your income tax dashboard for Section 143(1) intimations, AIS/TIS discrepancies, and outstanding demands — alerting you before a notice becomes a demand, and responding promptly.`, color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹499", desc: `No consultation charges, no surprise fees. Clear pricing for every income tax service — quoted before we start. ${cityName} taxpayers know exactly what they pay before we file.`, color: "bg-teal-100 text-teal-700" },
                { icon: MapPin, title: `UP-Based, Serving ${cityName}`, desc: `Headquartered in Khatauli, Muzaffarnagar — we understand UP income tax jurisdiction, AO ward assignments for ${district}, and local business patterns across every UP region.`, color: "bg-sky-100 text-sky-700" },
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
                How to File Your ITR in {cityName} with Taxvio
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Share Documents", desc: "Send Form 16, bank statement, investment proofs & PAN/Aadhaar on WhatsApp" },
                { step: "02", title: "CA Review & Computation", desc: "Our CA prepares tax computation, compares regimes, and identifies all eligible deductions" },
                { step: "03", title: "Your Approval", desc: "We share the computed ITR summary for your review and approval before filing" },
                { step: "04", title: "E-Filed & Verified", desc: "ITR is e-filed and e-verified via Aadhaar OTP. You receive ITR-V acknowledgement instantly" },
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
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">Income Tax FAQs for {cityName} Taxpayers</h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `What is the ITR filing due date in ${cityName}?`,
                  a: `For salaried individuals and non-audit cases in ${cityName}: July 31. For businesses and professionals requiring tax audit under Section 44AB: October 31. Belated returns can be filed until December 31 with a late fee of ₹5,000 (₹1,000 for income below ₹5 lakh). Companies must file by November 30.`,
                },
                {
                  q: `Should I file ITR even if my income is below ₹5 lakh in ${cityName}?`,
                  a: `Filing ITR is legally mandatory only if gross total income exceeds the basic exemption limit (₹2.5L/₹3L/₹5L depending on age). However, even below-threshold taxpayers in ${cityName} benefit from filing to claim TDS refunds, obtain income proof for bank loans and visas, and maintain a clean compliance track record. ITR is also mandatory if you have foreign assets, signing authority in foreign accounts, or deposited ₹1 crore+ in current accounts.`,
                },
                {
                  q: `Which ITR form should I use in ${cityName}?`,
                  a: `ITR-1 (Sahaj): salary + single house property + other income ≤₹50L. ITR-2: salary + capital gains / foreign income / more than one house property. ITR-3: business/profession with regular books. ITR-4 (Sugam): presumptive taxation under 44AD/44ADA. ITR-5: firms, LLPs, AOPs. ITR-6: companies. ITR-7: trusts, political parties, NGOs. Taxvio's CA team advises the correct ITR form for every ${cityName} taxpayer based on income sources.`,
                },
              ].map((f) => (
                <div key={f.q} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
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

        {/* ════════ NEARBY CITIES ════════ */}
        {regionCities.length > 0 && (
          <section className="py-14 bg-[#f8fbfd] border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">{district} & {region}</p>
                  <h2 className="text-lg font-extrabold text-gray-800">Income Tax Services in Nearby Cities</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link key={c.name}
                    href={`/state/uttar-pradesh/income-tax-services/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    ITR in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/uttar-pradesh/income-tax-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00416a]/30 bg-[#deeef7] px-4 py-2 text-sm font-bold text-[#00416a] hover:shadow-sm transition-all">
                  View All UP Cities <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
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
                  Serving ITR clients in {cityName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  File Your ITR in {cityName} — Fast & Accurate
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  ITR filing, TDS returns, tax audit, 12A/80G, PAN/TAN and notice replies — all delivered online
                  for taxpayers in {cityName}, {district}. Starting ₹499. CA-assisted, same-day WhatsApp response.
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