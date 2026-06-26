// app/state/delhi/income-tax-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, BookOpen, ClipboardList,
  Calculator, Receipt,
} from "lucide-react";
import {
  DELHI_AREAS, ALL_AREA_SLUGS, slugifyArea,
  getAreaData, formatAreaDisplay,
} from "@/data/delhi-cities";

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
    title: `Income Tax Return Filing in ${areaName}, Delhi | Taxvio`,
    description: `Expert ITR filing for salaried, proprietors, firms & companies; TDS/TCS returns; income tax audit; scrutiny reply; 12A/80G registration; PAN/TAN; and Form 15G/15H in ${areaName}, ${district}, Delhi. CA-assisted, 100% online, starting ₹699.`,
    keywords: [
      `income tax return filing ${areaName}`,
      `ITR filing ${areaName} Delhi`,
      `TDS return ${areaName}`,
      `income tax audit ${areaName}`,
      `income tax consultant ${areaName} ${district}`,
      `12A 80G registration ${areaName}`,
      `PAN card ${areaName}`,
      `IT scrutiny notice ${areaName}`,
      `online ITR ${areaName} Delhi`,
      `CA income tax ${district}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/delhi/income-tax-services/${city}` },
    openGraph: {
      title: `Income Tax Services in ${areaName}, Delhi | Taxvio`,
      description: `ITR filing, TDS returns, tax audit, scrutiny reply & 12A/80G in ${areaName}, ${district}, Delhi — CA-assisted, from ₹699.`,
      url: `https://www.taxvio.in/state/delhi/income-tax-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `Income Tax Services in ${areaName}, Delhi | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(areaName: string, district: string, region: string) {
  return [

    /* ── 1. PAN Card Application ── */
    {
      slug: "pan-card",
      title: `PAN Card Application in ${areaName}`,
      price: "₹299",
      timeline: "7–15 Working Days",
      icon: "🪪",
      gradient: "from-gray-500 to-slate-600",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "New PAN application (Form 49A / 49AA)",
        "PAN correction — name, DOB, address, father's name",
        "Duplicate / reprint PAN for lost or damaged card",
        "Aadhaar-PAN linking support",
        "PAN for companies, firms, trusts & NRIs",
        "Status tracking & dispatch follow-up",
      ],
      seoContent: `PAN (Permanent Account Number) is the foundational identity document for all financial and tax transactions in ${areaName}, ${district}, Delhi — required for opening bank accounts, filing income tax returns, investing in mutual funds or fixed deposits above ₹50,000, registering property, and a wide range of other transactions. For first-time applicants in ${areaName}, the new PAN process involves submitting Form 49A (Indian citizens) or Form 49AA (foreign nationals) with identity proof, address proof, and date of birth proof through the NSDL or UTIITSL portal.

Taxvio handles the complete PAN application process for ${areaName} residents and businesses — preparing the correct category of application (individual, HUF, company, partnership firm, or trust), uploading documents in the prescribed digital format, completing Aadhaar-based e-KYC where applicable, and tracking the application through to physical card dispatch at your ${areaName} address. Processing typically takes 7–15 working days once the application is correctly submitted.

PAN correction is equally important for ${areaName} residents whose existing PAN has errors — a misspelled name, incorrect date of birth, or outdated address — since these mismatches cause failures in Form 26AS reconciliation, banking KYC verification, and TDS credit matching. Aadhaar-PAN linking, now mandatory under current income tax rules, is another frequent requirement we assist with; an unlinked PAN becomes inoperative, triggering higher TDS deduction rates and blocking ITR filing until rectified. We also process PAN applications for companies and LLPs at the time of incorporation, and for NRIs and foreign nationals requiring Form 49AA-based applications with appropriate identity verification documents.`,
    },

    /* ── 2. TAN Application ── */
    {
      slug: "tan-application",
      title: `TAN Application in ${areaName}`,
      price: "₹999",
      timeline: "7–10 Working Days",
      icon: "🔢",
      gradient: "from-orange-500 to-amber-600",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-100",
      accentText: "text-orange-700",
      features: [
        "New TAN (Form 49B) for employers & businesses",
        "TAN correction for name & address changes",
        "Allotment tracking with NSDL",
        "TDS/TCS compliance setup guidance",
        "Multiple TAN consolidation advisory",
        "AO code identification for ${district} jurisdiction",
      ],
      seoContent: `Tax Deduction Account Number (TAN) is a mandatory 10-digit identifier that every employer, company, and business in ${areaName}, ${district}, Delhi responsible for deducting or collecting tax at source must obtain before making the first TDS payment. Quoting an incorrect TAN, or deducting TDS without a valid TAN, attracts a penalty of ₹10,000 under Section 272BB — making correct, timely TAN application a non-negotiable first step for any business with employees, contractor payments, or rent obligations crossing notified thresholds.

Taxvio processes TAN applications for ${areaName} businesses through Form 49B on the NSDL portal — accurately identifying the deductor category (company, individual, HUF, firm, AOP, etc.), entering the legal name exactly as registered in PAN records, and most critically, selecting the correct Assessing Officer (AO) code for the ${district} jurisdiction. An incorrect AO code is one of the most common errors in TAN applications and leads to the TAN being allotted under the wrong jurisdiction, creating downstream complications during TDS return processing and any future assessment.

Once your TAN is allotted, we provide a complete TDS compliance setup briefing for ${areaName} businesses — covering monthly challan deposit timelines (by the 7th of the following month, with a special April 30 deadline for March deductions), quarterly return filing schedules, and TRACES portal registration for accessing Form 16/16A generation tools. We also assist ${areaName} businesses that have inadvertently obtained multiple TANs — a common issue after business restructuring or address changes — by identifying which TAN to retain and properly surrendering duplicates through the TRACES portal to avoid future compliance confusion.`,
    },

    /* ── 3. ITR – Salaried Individual ── */
    {
      slug: "itr-salaried",
      title: `Income Tax Return Filing for Salaried Individuals in ${areaName}`,
      price: "₹699",
      timeline: "1–2 Working Days",
      icon: "👤",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "ITR-1 (Sahaj) for single-employer salary income",
        "ITR-2 for salary + capital gains / multiple properties",
        "Form 16/16A verification & tax computation",
        "Old vs new tax regime (115BAC) comparison",
        "80C, 80D, HRA, LTA deduction optimisation",
        "E-filing with instant Aadhaar OTP verification",
      ],
      seoContent: `Income tax return filing for salaried employees in ${areaName}, ${district}, Delhi is mandatory once gross total income exceeds the basic exemption limit — ₹2.5 lakh under the old regime or ₹3 lakh under the new regime for FY 2024-25. Even employees below this threshold benefit from filing, since it enables refund claims for excess TDS deducted by employers, creates a documented income history for loan applications and visa processing, and maintains a clean compliance record valuable for future financial transactions.

Taxvio's ITR filing service for salaried employees in ${areaName} begins with a thorough cross-check of your Form 16 against actual salary slips, careful verification of HRA exemption calculations (particularly relevant for ${areaName} employees paying market-rate Delhi rents that may differ from employer assumptions), and confirmation that all 80C investments — PF, PPF, life insurance, ELSS — are correctly claimed. We compute your tax liability under both the old regime (with deductions) and the new regime (lower slabs, fewer deductions) for every client, ensuring you select whichever results in lower tax — a comparison many salaried taxpayers in ${areaName} skip and consequently overpay.

For ${areaName} employees with additional income sources — rental income from a second property, savings account or FD interest above ₹10,000, or capital gains from stock/mutual fund sales — we correctly determine whether ITR-1 or ITR-2 applies and ensure Schedule HP, Schedule OS, and Schedule CG are accurately populated. After filing, we handle e-verification through Aadhaar OTP or net banking and respond promptly to any Section 143(1) intimation discrepancies that may arise during processing.`,
    },

    /* ── 4. ITR – Proprietor ── */
    {
      slug: "itr-proprietor",
      title: `ITR Filing for Proprietors in ${areaName}`,
      price: "₹1,999",
      timeline: "2–4 Working Days",
      icon: "🏪",
      gradient: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "ITR-3 for business income with regular books",
        "ITR-4 (Sugam) for presumptive taxation (44AD/44ADA)",
        "Profit & Loss account and Balance Sheet preparation",
        "Depreciation schedule on business assets",
        "GST turnover reconciliation with income tax records",
        "Tax audit coordination if turnover exceeds threshold",
      ],
      seoContent: `Sole proprietors, shop owners, and self-employed professionals in ${areaName}, ${district}, Delhi face significantly more complex income tax filing requirements than salaried employees, since business income computation requires preparing a profit and loss account and balance sheet, and reconciling bank transactions against sales and expense records. Many small business owners in ${areaName} qualify for ITR-4 (Sugam) under presumptive taxation — Section 44AD for traders (8% minimum profit on turnover, or 6% for digital receipts, up to ₹2 crore turnover) or Section 44ADA for professionals (50% minimum profit on gross receipts, up to ₹50 lakh) — which simplifies filing by removing the need for detailed books of accounts.

For ${areaName} proprietors whose actual business profit exceeds the presumptive minimum, or who have significant capital expenditure and depreciation to claim, ITR-3 with complete books of accounts is the more tax-efficient choice. Taxvio prepares the full profit and loss statement and balance sheet from your bank statements and transaction records, correctly categorising legitimate business expenses — rent, staff salaries, utility bills, raw materials, transport — and computing depreciation on business assets per the prescribed Income Tax Act schedules.

A critical compliance trigger for ${areaName} proprietors is the mandatory tax audit under Section 44AB once business turnover crosses ₹1 crore (or professional receipts cross ₹50 lakh), or when income declared falls below the presumptive minimum despite eligibility. Our team monitors this threshold for every client and proactively flags when audit becomes required, conducting the complete audit and Form 3CB-3CD filing well before the due date to avoid the steep penalty of 0.5% of turnover (capped at ₹1.5 lakh) for missed audit compliance.`,
    },

    /* ── 5. ITR – Firm / LLP ── */
    {
      slug: "itr-firm-llp",
      title: `ITR Filing for Partnership Firms & LLPs in ${areaName}`,
      price: "₹2,999",
      timeline: "3–5 Working Days",
      icon: "🤝",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "ITR-5 for partnership firms, LLPs, AOPs, BOIs",
        "Partner capital account reconciliation",
        "Remuneration & interest limits (Sec. 40(b))",
        "Tax audit coordination for turnover above ₹1 crore",
        "Depreciation & business deduction schedules",
        "MCA Form 11/8 coordination for LLPs",
      ],
      seoContent: `Partnership firms and Limited Liability Partnerships registered or operating from ${areaName}, ${district}, Delhi must file ITR-5 annually — a comprehensive return requiring complete financial statements, partner capital account reconciliation, and several detailed schedules covering depreciation, capital gains, and brought-forward losses. Firms in ${areaName} are taxed at a flat 30% rate on total income (plus applicable surcharge and cess), making accurate expense classification and deduction optimisation particularly impactful on the final tax liability.

A frequently overlooked compliance area for ${areaName} firms is the Section 40(b) restriction on partner remuneration and interest deductibility — the firm can only claim a deduction for partner salary/remuneration up to specified limits based on book profits, and interest paid on partner capital is capped at 12% per annum. Taxvio's CA team computes the maximum allowable remuneration and interest for each ${areaName} firm precisely within these limits, ensuring full deduction eligibility without triggering disallowance during assessment.

For LLPs registered in ${areaName}, income tax compliance runs parallel to separate MCA (Ministry of Corporate Affairs) obligations — Form 11 (annual return) and Form 8 (statement of accounts) must be filed with the Registrar of Companies independent of the ITR-5 filing. We manage both income tax and ROC compliance for LLP clients as a coordinated service, ensuring designated partner DSC availability and synchronised filing timelines. Firms and LLPs with turnover crossing ₹1 crore additionally require tax audit under Section 44AB — our team handles the complete audit process, Form 3CA-3CD preparation, and timely portal submission well ahead of the statutory deadline.`,
    },

    /* ── 6. ITR – Trust / Pvt Ltd / Public Ltd ── */
    {
      slug: "itr-trust-company",
      title: `ITR Filing for Trusts & Companies in ${areaName}`,
      price: "₹3,499",
      timeline: "5–7 Working Days",
      icon: "🏢",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "ITR-6 for Private Limited, Public Limited & OPC companies",
        "ITR-7 for Section 8 companies, trusts & NGOs",
        "MAT (Minimum Alternate Tax) computation",
        "Audit coordination & Form 3CA-3CD filing",
        "Section 11/12 trust exemption claims",
        "Notice handling for corporate/trust assessments",
      ],
      seoContent: `Private Limited Companies, Public Limited Companies, and One Person Companies registered or operating from ${areaName}, ${district}, Delhi must file ITR-6 annually with audited financial statements — a process distinct from individual or firm returns due to the multiple tax regime options and statutory schedules involved. Companies in ${areaName} can choose between the concessional 22% tax rate under Section 115BAA (forgoing certain exemptions and deductions) or the standard 25%/30% rate, and Taxvio's CA team computes the comparative tax liability under both regimes to identify the optimal choice for each company's specific deduction profile.

For companies under the regular tax regime, Minimum Alternate Tax (MAT) under Section 115JB applies at 18.5% of book profit, acting as a tax floor that must be carefully computed alongside the regular tax liability — we ensure ${areaName} companies correctly determine whichever liability is higher and claim MAT credit carry-forward where applicable in future years.

Charitable trusts, religious institutions, Section 8 companies, and NGOs operating in ${areaName} — a sector with significant presence across Delhi's civil society and philanthropic ecosystem — follow a fundamentally different compliance path, filing ITR-7 and claiming exemption on income applied for charitable purposes under Sections 11 and 12, subject to registration under Section 12AB. Taxvio handles complete trust ITR-7 filing, verifying the mandatory 85% income application rule, computing permissible accumulation under Section 11(2) where the trust needs to defer spending to a future year, and ensuring corpus donations are correctly excluded from taxable income. Companies and trusts requiring statutory audit under the Companies Act or tax audit under Section 44AB are supported with coordinated Form 3CA-3CD preparation ahead of the relevant due dates.`,
    },

    /* ── 7. Quarterly TDS Return ── */
    {
      slug: "quarterly-tds",
      title: `Quarterly TDS Return Filing (24Q/26Q/27Q) in ${areaName}`,
      price: "₹1,499/quarter",
      timeline: "Before Quarterly Due Date",
      icon: "📊",
      gradient: "from-teal-500 to-cyan-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "Form 24Q — salary TDS (quarterly, with Form 16 at year-end)",
        "Form 26Q — non-salary TDS (contractor, rent, professional fees)",
        "Form 27Q — TDS on payments to non-residents",
        "Challan-to-deductee reconciliation with 26AS",
        "TRACES correction (Conso file) for prior-quarter errors",
        "TDS certificate (Form 16/16A) generation",
      ],
      seoContent: `Every employer and business in ${areaName}, ${district}, Delhi that deducts tax at source must file quarterly TDS returns, and non-compliance triggers severe penalties — ₹200 per day under Section 234E for late filing, plus a separate ₹10,000 to ₹1 lakh penalty under Section 271H for non-filing altogether. Form 24Q covers TDS deducted on employee salaries (due July 31, October 31, January 31, and May 31 across the four quarters), while Form 26Q covers non-salary TDS — contractor payments under Section 194C, professional fees under 194J, rent under 194I, and several other notified categories common to ${areaName}'s diverse business environment.

Taxvio's TDS return filing service for ${areaName} businesses begins with meticulous challan-to-deductee reconciliation — matching every TDS challan (by BSR code, challan serial number, deposit date, and amount) to the correct employee or vendor PAN. This step is critical because mapping errors prevent deductees from seeing their TDS credit reflected in Form 26AS, creating financial hardship for employees and vendors and risking notices for the deducting business. We generate the quarterly return in TRACES-compliant FVU format, validate it through NSDL's File Validation Utility, and submit through the TIN portal within the statutory deadline.

For ${areaName} employers filing the fourth-quarter Form 24Q, our service includes annual salary reconciliation and complete Form 16 preparation — Part A retrieved from TRACES and Part B prepared with accurate deduction and exemption details for each employee. We also handle TRACES correction (Conso file) requests for amending prior-quarter filings, particularly for short deduction errors and PAN mismatches that frequently arise in businesses with high employee or vendor turnover.`,
    },

    /* ── 8. Quarterly TCS Return ── */
    {
      slug: "quarterly-tcs",
      title: `Quarterly TCS Return Filing (Form 27EQ) in ${areaName}`,
      price: "₹1,499/quarter",
      timeline: "Before Quarterly Due Date",
      icon: "🧾",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Form 27EQ quarterly TCS return filing",
        "TCS on goods u/s 206C — scrap, minerals, timber",
        "TCS on motor vehicle sales above ₹10 lakh",
        "TCS on foreign remittance / LRS (206C(1G))",
        "TCS on goods sale above ₹50 lakh (206C(1H))",
        "Form 27D TCS certificate generation",
      ],
      seoContent: `Tax Collected at Source under Section 206C applies to a growing range of sellers and service providers in ${areaName}, ${district}, Delhi — and recent legislative expansions mean more businesses now fall under TCS obligations than ever before. The traditional categories under Section 206C(1) cover scrap dealers (1% TCS), timber and forest produce traders, and dealers in specified minerals. Newer provisions affecting ${areaName} businesses include 1% TCS on motor vehicle sales exceeding ₹10 lakh under Section 206C(1F), TCS on foreign remittances under the Liberalised Remittance Scheme at rates from 0.5% to 20% under Section 206C(1G), and 0.1% TCS on goods sold above ₹50 lakh to a single buyer in a financial year under Section 206C(1H) — a provision that quietly captures many wholesale and B2B traders operating from Delhi's commercial hubs.

Taxvio manages the complete TCS compliance cycle for ${areaName} businesses — starting with eligibility assessment to determine whether your transaction volume triggers TCS obligations and identifying the correct applicable rate, followed by challan deposit using the correct nature-of-payment code, and culminating in quarterly Form 27EQ filing (due July 15, October 15, January 15, and May 15). Errors in collectee PAN mapping or section code selection commonly cause Form 26AS mismatches affecting your buyers' tax records, so our reconciliation-first approach minimises downstream disputes.

After each quarterly filing, we generate Form 27D TCS certificates for all collectees, and provide guidance on common exemption scenarios — including buyers furnishing Form 27C (declaring goods are for manufacturing rather than trading) and lower/NIL TCS certificates obtained under Section 197 for high-volume ${areaName} buyers seeking reduced collection rates.`,
    },

    /* ── 9. Income Tax Audit ── */
    {
      slug: "income-tax-audit",
      title: `Income Tax Audit Assistance in ${areaName}`,
      price: "₹4,999",
      timeline: "Completed Before Due Date",
      icon: "🔍",
      gradient: "from-indigo-500 to-blue-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "Audit applicability assessment (turnover/receipts threshold)",
        "Books of accounts & document compilation",
        "Form 3CA-3CD or 3CB-3CD preparation",
        "All 41 clauses of Form 3CD addressed",
        "GST reconciliation & related-party disclosures",
        "Digital signature & timely e-filing",
      ],
      seoContent: `Income tax audit under Section 44AB becomes mandatory for businesses in ${areaName}, ${district}, Delhi whose annual turnover exceeds ₹1 crore — a threshold relaxed to ₹10 crore for businesses conducting at least 95% of transactions digitally (bank transfers, cheques, UPI, etc.), a provision benefiting the many ${areaName} traders and service businesses that have moved to digital payment acceptance. For professionals — chartered accountants, doctors, lawyers, architects, consultants — the audit threshold is ₹50 lakh in gross receipts.

A frequently overlooked trigger applies to ${areaName} taxpayers who opt for presumptive taxation under Section 44AD or 44ADA but declare income below the prescribed minimum (8%/6% of turnover for traders, 50% of receipts for professionals) while their total income exceeds the basic exemption limit — these taxpayers require audit even if their absolute turnover stays below the standard thresholds, a rule that catches many small businesses and consultants in ${areaName} unaware.

Taxvio's tax audit service for ${areaName} businesses involves thoroughly reviewing books of accounts maintained under Section 44AA, reconciling income tax turnover figures against GST returns and TDS certificates to identify discrepancies before the auditor's report is finalised, verifying compliance with cash transaction limits under Sections 269SS/269T (loans and deposits above ₹20,000 in cash), checking TDS deduction compliance across salary, contractor, professional, and rent payments, and reviewing related-party transactions for arm's-length consistency. All 41 disclosure clauses of Form 3CD are completed with appropriate documentary support, the report is digitally signed with a valid UDIN, and e-filed on the income tax portal — consistently meeting the September 30 due date and avoiding the 0.5%-of-turnover penalty (capped at ₹1.5 lakh) for late or missing audit reports.`,
    },

    /* ── 10. Income Tax Scrutiny & Notice Reply ── */
    {
      slug: "income-tax-scrutiny",
      title: `Income Tax Scrutiny & Notice Reply in ${areaName}`,
      price: "₹2,499",
      timeline: "As Per Notice Timeline",
      icon: "⚖️",
      gradient: "from-rose-500 to-red-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Section 143(1) intimation response",
        "Section 143(2) scrutiny assessment reply",
        "Section 148 reassessment notice handling",
        "Demand notice (Sec. 156) & rectification (Sec. 154)",
        "Online & in-person representation",
        "CIT(A) / ITAT appellate support if required",
      ],
      seoContent: `Income tax notices reach taxpayers in ${areaName}, ${district}, Delhi when the Centralised Processing Centre or the jurisdictional Assessing Officer identifies discrepancies in filed returns — and the consequences of an inadequate or late response range from minor adjustments to substantial additional tax demands. The most common notice, Section 143(1), is a computer-generated intimation from CPC highlighting arithmetic errors, questionable deduction claims, or mismatches against TDS data in Form 26AS and high-value transaction data in the Annual Information Statement.

Section 143(2) represents a more serious scrutiny assessment, issued when a ${areaName} taxpayer's case is selected for detailed examination — either through the risk-based Computer-Aided Scrutiny Selection system or targeted issue-specific scrutiny. Responding properly requires assembling complete supporting documentation — bank statements, investment proofs, contracts, business records — and preparing a structured written response addressing each query the Assessing Officer raises. Taxvio's team prepares this complete documentation package and represents ${areaName} clients in person before the relevant ward office when required, working to minimise additions and close the assessment favourably.

Section 148 reassessment notices are the most consequential, reopening already-completed assessments where the department believes income has escaped taxation — reaching back up to 3 years for cases below ₹50 lakh in escaped income, or up to 10 years for larger amounts. We handle the full reassessment cycle for ${areaName} taxpayers: filing the return in response to the 148 notice, raising legally valid objections to the reopening where applicable, participating in assessment proceedings, and escalating to the Commissioner of Income Tax (Appeals) or Income Tax Appellate Tribunal if the resulting order remains unfavourable after the initial assessment stage.`,
    },

    /* ── 11. 12A Application ── */
    {
      slug: "12a-application",
      title: `12A Registration for Trusts & NGOs in ${areaName}`,
      price: "₹3,999",
      timeline: "30–90 Days",
      icon: "🤝",
      gradient: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "Section 12AB registration (replacing old 12A/12AA)",
        "Trust deed / MOA eligibility review",
        "Form 10A online application filing",
        "Provisional to regular registration conversion",
        "Renewal before 5-year validity expiry",
        "Coordination with 80G application",
      ],
      seoContent: `Section 12A (now restructured as Section 12AB) registration is the essential prerequisite for charitable trusts, religious institutions, NGOs, and Section 8 companies operating in ${areaName}, ${district}, Delhi to receive income tax exemption on income applied for their charitable objects. Without 12AB registration, the entity's income — even when genuinely spent on its stated charitable purpose — remains fully taxable at the maximum marginal rate, severely limiting the funds available for actual programme delivery.

The application process for new 12AB registration in ${areaName} requires filing Form 10A on the income tax portal, accompanied by the trust deed or Memorandum of Association demonstrating that the organisation's objects align with the approved charitable categories under Section 2(15) — education, medical relief, relief of the poor, environmental protection, and other recognised purposes. Following the 2020 reform of the registration framework, new applicants first receive a provisional registration valid for 3 years, after which a regular registration (valid for 5 years) must be obtained through a fresh Form 10AB application before the provisional period expires.

Taxvio assists ${areaName} trusts and NGOs through the complete 12AB process — reviewing constitutional documents for compliance with the approved object categories, preparing and filing the Form 10A or 10AB application with all required supporting documents (activity reports, audited accounts, registered office proof, PAN), and responding to clarification requests from the CIT(Exemptions) office. We track the 5-year regular registration validity for existing clients and proactively file renewal applications well before expiry, since lapsed 12AB registration immediately exposes the organisation's income to full taxation — a costly oversight that's entirely avoidable with proper compliance tracking.`,
    },

    /* ── 12. 80G Application ── */
    {
      slug: "80g-application",
      title: `80G Registration for Donor Tax Benefits in ${areaName}`,
      price: "₹3,999",
      timeline: "30–90 Days",
      icon: "💚",
      gradient: "from-emerald-500 to-green-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "Section 80G(5) registration application",
        "Enables 50%/100% donor tax deduction",
        "Form 10A/10AB online filing",
        "Donation activity & financial disclosure prep",
        "Provisional to regular conversion (5-year validity)",
        "Coordination with 12A registration",
      ],
      seoContent: `80G registration under Section 80G(5) is a powerful fundraising tool for charitable trusts and NGOs based in ${areaName}, ${district}, Delhi, since it allows donors — both individuals and corporate CSR contributors — to claim a 50% or 100% deduction on their donation amount in their own income tax returns. For ${areaName} NGOs competing for limited philanthropic and corporate social responsibility funding within Delhi's dense civil society sector, holding valid 80G registration is frequently the deciding factor for donors choosing between similar organisations.

Following the post-2020 registration overhaul, 80G registration — like 12AB — is now granted in two stages: a provisional registration valid for 3 years for new applicants, followed by a regular registration valid for 5 years once the organisation has demonstrated active charitable operations. Both stages require filing through Form 10A (initial/provisional) or Form 10AB (regular/renewal) on the income tax portal, accompanied by financial statements, activity reports, and — critically — proof of existing 12AB registration, since 80G eligibility is contingent on the organisation already holding valid exemption registration.

Taxvio handles the complete 80G application process for ${areaName} trusts and NGOs — assessing eligibility against the specific conditions under Section 80G(5) (including restrictions on religious-purpose-only trusts and requirements around the percentage of income applied to charitable purposes), preparing the application with all required donation and activity disclosures, filing on the income tax portal, and following up with the CIT(Exemptions) office until approval. We track the 5-year validity for ongoing clients and file renewal applications proactively — protecting your organisation's fundraising capacity from any lapse in donor deduction eligibility.`,
    },

    /* ── 13. Form 15G / 15H ── */
    {
      slug: "15g-15h",
      title: `Form 15G & 15H Filing in ${areaName}`,
      price: "₹199",
      timeline: "Same Day",
      icon: "📋",
      gradient: "from-teal-500 to-emerald-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "Form 15G for individuals below 60 years",
        "Form 15H for senior citizens (60+ years)",
        "Eligibility verification before filing",
        "Submission guidance to bank/post office/FD issuer",
        "TDS refund claim assistance if already deducted",
        "Section 197 lower-TDS certificate advisory",
      ],
      seoContent: `Form 15G and Form 15H are self-declaration forms that residents of ${areaName}, ${district}, Delhi submit to banks, post offices, and other payers to prevent TDS deduction on interest income when their total income falls below the taxable threshold. Form 15G applies to individuals below 60 years (and HUFs) whose estimated total income for the financial year is below the basic exemption limit — ₹2.5 lakh under the old regime or ₹3 lakh under the new regime — with the additional condition that total interest income itself must also stay within this limit. Form 15H applies to senior citizens aged 60 and above, with the simpler condition that tax computed on total income must be nil, without the interest-income sub-limit that applies to Form 15G filers.

For ${areaName} residents holding fixed deposits, savings accounts, post office deposits, NSC investments, or other interest-bearing instruments, these forms matter significantly — banks are required to deduct 10% TDS on aggregate annual interest exceeding ₹40,000 (₹50,000 for senior citizens) under Section 194A, unless a valid Form 15G or 15H is submitted at the start of the financial year. Without timely submission, eligible taxpayers must wait until ITR filing to reclaim the deducted TDS as a refund — an avoidable cash-flow inconvenience.

Taxvio assists ${areaName} residents with Form 15G/15H filing — verifying genuine eligibility by computing estimated total income across all sources (salary, pension, interest, other income) to confirm the nil-tax or below-threshold condition, preparing the correct form for the applicable financial year, and guiding submission to every relevant bank or financial institution where the individual holds interest-bearing deposits. For ${areaName} clients where TDS has already been deducted despite 15G/15H eligibility, we advise on claiming the full refund through ITR filing, and where future-year deductions are a concern, we guide eligible taxpayers toward a Section 197 lower/NIL TDS certificate application as a more durable solution.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function DelhiIncomeTaxAreaPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const areaData  = getAreaData(city);
  const areaName  = areaData?.name     ?? formatAreaDisplay(city);
  const district  = areaData?.district ?? areaName;
  const region    = areaData?.region   ?? "Delhi";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need income tax services in ${areaName}, ${district}, Delhi.`)}`;

  const services = getServiceContent(areaName, district, region);

  const nearbyAreas = DELHI_AREAS
    .filter((c) => c.district === district && slugifyArea(c.name) !== city)
    .slice(0, 6);
  const regionAreas = nearbyAreas.length < 3
    ? DELHI_AREAS.filter((c) => c.region === region && slugifyArea(c.name) !== city).slice(0, 6)
    : nearbyAreas;

  /* ── JSON-LD ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides ITR filing, TDS/TCS returns, income tax audit, scrutiny reply, 12A/80G registration, PAN/TAN, and Form 15G/15H services in ${areaName}, ${district}, Delhi.`,
    areaServed: [{ "@type": "Place", name: areaName, containedInPlace: { "@type": "City", name: "Delhi" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3100" },
    priceRange: "₹199 - ₹4,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Income Tax Delhi", item: "https://www.taxvio.in/state/delhi/income-tax-services" },
      { "@type": "ListItem", position: 3, name: district,        item: `https://www.taxvio.in/state/delhi/income-tax-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${areaName} Income Tax`, item: `https://www.taxvio.in/state/delhi/income-tax-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Income Tax Services in ${areaName}, Delhi`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/delhi/income-tax-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ITR filing due date for individuals in ${areaName}, Delhi?`,
        acceptedAnswer: { "@type": "Answer", text: `For salaried individuals and non-audit cases in ${areaName}, the due date is July 31. For businesses and professionals requiring tax audit under Section 44AB, the due date is October 31. Companies must file by November 30. Belated returns can be filed until December 31 with a late fee.` },
      },
      {
        "@type": "Question",
        name: `Is income tax return filing mandatory in ${areaName} if income is below ₹5 lakh?`,
        acceptedAnswer: { "@type": "Answer", text: `Filing ITR is legally mandatory only when gross total income exceeds the basic exemption limit (₹2.5 lakh below 60 years, ₹3 lakh for 60–80 years, ₹5 lakh for 80+ years). However, ${areaName} taxpayers below this threshold still benefit from filing — claiming TDS refunds, establishing income proof for loans, and maintaining clean compliance history.` },
      },
      {
        "@type": "Question",
        name: `Which ITR form should I use in ${areaName}?`,
        acceptedAnswer: { "@type": "Answer", text: `ITR-1 (Sahaj): salary + single house property + other income ≤₹50L. ITR-2: salary + capital gains/foreign income/multiple properties. ITR-3: business/profession with regular books. ITR-4 (Sugam): presumptive taxation under 44AD/44ADA. ITR-5: firms, LLPs. ITR-6: companies. ITR-7: trusts, NGOs.` },
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
                  { href: "/state/delhi/income-tax-services", label: "Income Tax — Delhi" },
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
                  {areaName}, {district} · Delhi · Income Tax Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Return Filing
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {areaName}, Delhi
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">ITR filing</strong> for salaried, proprietors, firms &amp; companies;{" "}
                  <strong className="text-white">TDS / TCS quarterly returns</strong>; income tax audit; scrutiny reply;
                  12A/80G; PAN/TAN; and Form 15G/15H in{" "}
                  <strong className="text-white">{areaName}, {district}, Delhi</strong> —
                  100% online by CA professionals. Starting <strong className="text-sky-300">₹699</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA-Assisted" },
                    { icon: Shield,     text: "100% Secure" },
                    { icon: Zap,        text: "Same-Day Filing" },
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
                        <span className="truncate">
                          {svc.title
                            .replace(` in ${areaName}`, "")
                            .replace(` for Salaried Individuals`, " – Salaried")
                            .replace(` for Trusts & NGOs`, "")
                            .replace(` for Donor Tax Benefits`, "")
                            .replace(` (24Q/26Q/27Q)`, "")
                            .replace(` (Form 27EQ)`, "")}
                        </span>
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
                { icon: BadgeCheck,  label: "CA-Certified Team"       },
                { icon: TrendingUp,  label: "6,200+ Delhi Businesses" },
                { icon: Users,       label: "300+ Delhi Areas"        },
                { icon: IndianRupee, label: "Transparent Pricing"     },
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
              { val: "1–2 Days", label: "Salaried ITR",      icon: Zap          },
              { val: "4.9★",      label: "Average Rating",   icon: Star         },
              { val: "₹699",      label: "Starting Price",   icon: IndianRupee  },
              { val: "13",        label: "Services Available", icon: ClipboardList },
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
                { icon: Users,       title: "CA-Certified Tax Professionals", desc: `Every ITR and tax compliance service for ${areaName} taxpayers is handled by practising Chartered Accountants — real CA sign-off on every return, not software bots.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap,         title: "100% Online — No Office Visit",   desc: `Share Form 16, bank statements, and investment proofs on WhatsApp from ${areaName}. We prepare, review, and file your ITR with Aadhaar OTP e-verification — no office visit needed.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Calculator,  title: "Old vs New Regime Optimisation", desc: `We compute your tax liability under both regimes for every ${areaName} client before filing — ensuring you always pay the minimum legal tax.`, color: "bg-violet-100 text-violet-700" },
                { icon: AlertCircle, title: "Proactive Notice Management",     desc: `We monitor your income tax dashboard for 143(1) intimations and AIS/TIS discrepancies — alerting ${areaName} clients before a notice becomes a demand.`, color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹699",  desc: `No consultation charges, no surprise fees. Clear pricing for every income tax service in ${areaName} — quoted before we file.`, color: "bg-teal-100 text-teal-700" },
                { icon: Receipt,     title: `Delhi Ward & AO Familiarity`,     desc: `Deep familiarity with Delhi income tax circles and ${district} jurisdiction processing patterns — built from years of filing across the capital.`, color: "bg-sky-100 text-sky-700" },
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
                How to File Your ITR in {areaName} with Taxvio
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
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">Income Tax FAQs for {areaName} Taxpayers</h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `What is the ITR filing due date in ${areaName}, Delhi?`,
                  a: `For salaried individuals and non-audit cases in ${areaName}: July 31. For businesses and professionals requiring tax audit under Section 44AB: October 31. Companies must file by November 30. Belated returns can be filed until December 31 with a late fee of ₹5,000 (₹1,000 for income below ₹5 lakh).`,
                },
                {
                  q: `Should I file ITR even if my income is below ₹5 lakh in ${areaName}?`,
                  a: `Filing ITR is legally mandatory only if gross total income exceeds the basic exemption limit (₹2.5L/₹3L/₹5L depending on age). However, even below-threshold taxpayers in ${areaName} benefit from filing to claim TDS refunds, obtain income proof for bank loans and visas, and maintain a clean compliance track record.`,
                },
                {
                  q: `Which ITR form should I use in ${areaName}?`,
                  a: `ITR-1 (Sahaj): salary + single house property + other income ≤₹50L. ITR-2: salary + capital gains / foreign income / more than one house property. ITR-3: business/profession with regular books. ITR-4 (Sugam): presumptive taxation under 44AD/44ADA. ITR-5: firms, LLPs. ITR-6: companies. ITR-7: trusts, NGOs. Taxvio's CA team advises the correct ITR form for every ${areaName} taxpayer based on income sources.`,
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

        {/* ════════ NEARBY AREAS ════════ */}
        {regionAreas.length > 0 && (
          <section className="py-14 bg-[#f8fbfd] border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">{district} &amp; {region}</p>
                  <h2 className="text-lg font-extrabold text-gray-800">Income Tax Services in Nearby Delhi Areas</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionAreas.map((c) => (
                  <Link key={c.name}
                    href={`/state/delhi/income-tax-services/${slugifyArea(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    ITR in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/delhi/income-tax-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00416a]/30 bg-[#deeef7] px-4 py-2 text-sm font-bold text-[#00416a] hover:shadow-sm transition-all">
                  View All Delhi Areas <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
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
                  Serving ITR clients in {areaName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  File Your ITR in {areaName} — Fast &amp; Accurate
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  ITR filing, TDS returns, income tax audit, scrutiny reply, 12A/80G, PAN/TAN, and Form 15G/15H —
                  all delivered online for taxpayers in {areaName}, {district}. Starting ₹699. CA-assisted, same-day WhatsApp response.
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