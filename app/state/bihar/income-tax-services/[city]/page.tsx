// app/state/bihar/income-tax-services/[city]/page.tsx
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
  BIHAR_AREAS, slugifyArea,
} from "@/data/bihar-cities";

/* ─── Helpers ───────────────────────────────────────────────────────────── */
function findArea(slug: string) {
  return BIHAR_AREAS.find((c) => slugifyArea(c.name) === slug) ?? null;
}

/* ─── Static Params ─────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return BIHAR_AREAS.map((c) => ({ city: slugifyArea(c.name) }));
}

/* ─── Metadata ──────────────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const area     = findArea(city);
  const areaName = area?.name     ?? city.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const district = area?.district ?? areaName;

  return {
    title: `Income Tax Return Filing in ${areaName}, Bihar | Taxvio`,
    description: `Expert ITR filing for salaried, proprietors, firms & companies; TDS/TCS returns; income tax audit; scrutiny reply; 12A/80G registration; PAN/TAN; and Form 15G/15H in ${areaName}, ${district}, Bihar. CA-assisted, 100% online, starting ₹699.`,
    keywords: [
      `income tax return filing ${areaName}`,
      `ITR filing ${areaName} Bihar`,
      `TDS return ${areaName}`,
      `income tax audit ${areaName}`,
      `income tax consultant ${areaName} ${district}`,
      `12A 80G registration ${areaName}`,
      `PAN card ${areaName}`,
      `IT scrutiny notice ${areaName}`,
      `online ITR ${areaName} Bihar`,
      `CA income tax ${district} Bihar`,
    ],
    alternates: {
      canonical: `https://www.taxvio.in/state/bihar/income-tax-services/${city}`,
    },
    openGraph: {
      title: `Income Tax Services in ${areaName}, Bihar | Taxvio`,
      description: `ITR filing, TDS returns, tax audit, scrutiny reply & 12A/80G in ${areaName}, ${district}, Bihar — CA-assisted, from ₹699.`,
      url: `https://www.taxvio.in/state/bihar/income-tax-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Income Tax Services in ${areaName}, Bihar | Taxvio`,
    },
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
      seoContent: `PAN (Permanent Account Number) is the foundational identity document for all financial and tax transactions for individuals and businesses in ${areaName}, ${district}, Bihar — required for opening bank accounts, filing income tax returns, investing in fixed deposits above ₹50,000, buying or selling immovable property, and dozens of other notified financial transactions. For residents of ${areaName} applying for a new PAN, the process involves submitting Form 49A (Indian citizens) or Form 49AA (foreign nationals/entities) through the NSDL or UTIITSL portal with identity proof, address proof, and date of birth documentation.

Taxvio handles the complete PAN application process for ${areaName} residents and businesses — accurately categorising the applicant type (individual, HUF, partnership firm, private limited company, trust, or NGO), uploading documents in NSDL-prescribed digital format, completing Aadhaar-based e-KYC where applicable, and tracking the application through to physical card dispatch at the applicant's ${areaName} address. Processing typically takes 7–15 working days from successful portal submission.

For existing PAN holders in ${areaName} whose PAN data contains errors — a misspelled name, incorrect date of birth, or mismatched father's name — PAN correction is equally critical, since these discrepancies cause Form 26AS reconciliation failures, banking KYC rejections, and TDS credit mismatches that delay ITR processing. Aadhaar-PAN linking is now mandatory under current income tax regulations; an inoperative unlinked PAN attracts higher TDS deduction rates and blocks ITR filing until the linkage is completed. We also assist ${areaName} businesses — newly incorporated companies, LLPs, and partnership firms — with entity-level PAN applications, and NRIs with Bihar-origin who require Form 49AA applications with appropriate identity verification documentation.`,
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
        `AO code identification for ${district} jurisdiction`,
      ],
      seoContent: `Tax Deduction Account Number (TAN) is a mandatory 10-digit alphanumeric identifier that every employer, business entity, and individual in ${areaName}, ${district}, Bihar responsible for deducting or collecting tax at source must obtain before making the first TDS deposit. Quoting an incorrect TAN — or deducting TDS without a valid TAN — attracts a penalty of ₹10,000 under Section 272BB of the Income Tax Act, making correct and timely TAN application essential for any ${areaName} business with salaried employees, contractor engagements, rent obligations, or professional fee payments crossing notified thresholds.

Taxvio processes TAN applications for ${areaName} businesses through Form 49B on the NSDL TIN portal — accurately identifying the deductor category (company, individual, HUF, firm, AOP, local authority, etc.), entering the legal name precisely as it appears in PAN records to prevent downstream mismatches, and critically, selecting the correct Assessing Officer (AO) code for the ${district} jurisdiction under the Patna Principal CCIT region. An incorrect AO code is the most common TAN application error and results in the TAN being registered under the wrong income tax ward — creating complications during TDS return processing and any subsequent TDS assessment or notice.

Once your ${areaName} business's TAN is allotted, Taxvio provides a complete TDS compliance onboarding — covering monthly challan deposit deadlines (by the 7th of the following month, with the April 30 special deadline for March deductions), quarterly return schedules (July 31, October 31, January 31, May 31 for 24Q/26Q), TRACES portal registration for Form 16/16A generation, and common compliance pitfalls specific to Bihar's business sector — including Section 194C contractor TDS for construction businesses, 194I rent TDS for commercial property tenants, and 194J professional fees TDS for businesses engaging consultants.`,
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
      seoContent: `Income tax return filing is mandatory for salaried employees in ${areaName}, ${district}, Bihar once gross total income exceeds the basic exemption limit — ₹2.5 lakh under the old regime or ₹3 lakh under the new default regime for FY 2024-25. Bihar has one of India's largest pools of government salaried employees — central government staff, state government employees under the BPSC, Bihar Police, Bihar Power, and education department — alongside private sector employees in manufacturing, food processing, and service industries. Filing ITR, even when below the taxable threshold, is practically essential for Bihar's salaried class for TDS refund claims, income proof for home and personal loan applications, and visa processing.

Taxvio's ITR filing service for ${areaName} salaried taxpayers begins with a careful cross-verification of Form 16 against salary slips, checking whether employer-reported HRA exemption correctly reflects the actual rent paid in ${areaName} (particularly relevant since Bihar's district towns often have lower declared rents in employer records compared to actual market-rate rents), and confirming that all 80C investments — GPF, PPF, life insurance premiums, ELSS, NSC — are fully captured. We compute tax liability under both the old regime (with itemised deductions) and the new regime (lower slab rates, fewer deductions) for every ${areaName} client, recommending whichever produces lower tax outgo — a comparison that many salaried taxpayers in ${district} skip and consequently overpay year after year.

For ${areaName} employees with additional income beyond salary — rental income from agricultural land conversion or residential property, interest on savings accounts, post office FDs, KVP or NSC investments, or capital gains from mutual fund or stock sales — we determine whether ITR-1 or ITR-2 applies and ensure Schedule HP, Schedule OS, and Schedule CG are accurately populated. Post-filing, we e-verify through Aadhaar OTP or net banking linkage and respond to any Section 143(1) intimation discrepancies arising from TDS data mismatches or deduction claims flagged by the Centralised Processing Centre.`,
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
      seoContent: `Sole proprietors, shop owners, traders, and self-employed professionals in ${areaName}, ${district}, Bihar have significantly more complex income tax filing obligations than salaried employees — business income computation requires a profit and loss account, a balance sheet, and reconciliation of banking transactions against sales and expense records. Bihar's proprietor class spans an enormous range — grain traders and commission agents in mandis across ${district}, rice mill owners, small-scale manufacturers, medical practitioners, lawyers, architects, private coaching institutes, and retail traders. Each business type has specific expense categories, GST-income tax reconciliation requirements, and deduction opportunities that require CA-level expertise to optimise correctly.

Many ${areaName} proprietors qualify for ITR-4 (Sugam) under presumptive taxation — Section 44AD for traders and businesses (declaring minimum 8% net profit on turnover, or 6% for digital/banking receipts, up to ₹2 crore), or Section 44ADA for specified professionals (50% net income on gross receipts up to ₹50 lakh). Presumptive taxation eliminates the need for maintaining detailed books of accounts and significantly simplifies ITR filing for eligible ${areaName} small businesses — but is only advantageous when actual profit exceeds the prescribed minimum. Taxvio assesses whether presumptive taxation saves tax for each ${areaName} client or whether filing ITR-3 with actual books is more beneficial.

For ${areaName} proprietors filing ITR-3 with actual accounts, Taxvio prepares the complete profit and loss statement and balance sheet from bank statements and transaction records, correctly categorising business expenses — shop rent, employee wages, utility bills, raw material purchases, transport costs, depreciation on vehicles and equipment — and reconciling income tax turnover figures against GST returns (GSTR-1/GSTR-3B/GSTR-9) to preemptively identify and resolve any discrepancies before ITR submission. Proprietors with business turnover crossing ₹1 crore (₹10 crore for 95%+ digital transactions) trigger mandatory tax audit under Section 44AB — our team monitors this threshold and conducts the complete audit exercise with Form 3CB-3CD preparation well ahead of the October 31 deadline.`,
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
      seoContent: `Partnership firms and Limited Liability Partnerships registered or operating from ${areaName}, ${district}, Bihar must file ITR-5 annually — a comprehensive return covering complete financial statements, partner capital account reconciliation, and multiple detailed schedules for depreciation, capital gains, and loss carry-forward. Bihar's firm landscape includes agricultural trading partnerships, construction firms, food processing joint ventures, medical clinics, private educational institutions, and professional practices — each with distinct income computation requirements and deduction profiles. Partnership firms in ${areaName} are taxed at a flat 30% rate (plus surcharge and cess), making precise expense classification and Section 40(b) remuneration optimisation particularly high-value.

The Section 40(b) restriction on partner remuneration and interest deductibility is one of the most consequential compliance points for ${areaName} firms — the firm can only deduct partner salary/remuneration up to specified limits based on book profit computation (₹3 lakh or 90% of book profit for the first ₹3 lakh of profit, plus 60% of book profit above that), and partner capital interest is capped at 12% per annum. Claiming remuneration above these limits results in automatic disallowance during assessment, increasing taxable income significantly. Taxvio computes the maximum allowable remuneration and interest for every ${areaName} firm client within these statutory ceilings.

For LLPs registered in ${areaName}, income tax compliance under ITR-5 runs parallel to separate MCA obligations — Form 11 (annual return) and Form 8 (statement of accounts and solvency) must be filed with the Registrar of Companies on independent timelines. We manage both income tax and ROC compliance for LLP clients as a coordinated service, tracking designated partner DSC validity and synchronising filing deadlines. ${areaName} firms and LLPs with turnover crossing ₹1 crore require tax audit under Section 44AB — our team conducts the complete audit, prepares Form 3CA-3CD with all 41 clauses addressed, and e-files ahead of the October 31 statutory deadline.`,
    },

    /* ── 6. ITR – Trust / Company ── */
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
      seoContent: `Private Limited Companies, One Person Companies, and public limited entities registered or operating from ${areaName}, ${district}, Bihar must file ITR-6 annually with audited financial statements — a distinct process from individual or firm returns, involving multiple tax regime options, MAT computation, and company-specific disclosure schedules. Bihar's corporate sector has expanded significantly across agri-processing, food manufacturing, real estate, healthcare, and education — with private limited companies in ${district} ranging from small family-held businesses to mid-sized manufacturing enterprises. Taxvio computes the comparative tax liability under the standard 25%/30% rate and the concessional 22% rate under Section 115BAA for each ${areaName} company to identify the optimum regime given the company's specific deduction and exemption profile.

For companies under the regular tax regime, Minimum Alternate Tax under Section 115JB applies at 18.5% on book profit — acting as a tax floor independent of the regular income tax computation. We carefully compute both the MAT liability and regular tax liability for ${areaName} companies, determine whichever is higher, and track MAT credit carry-forward for utilisation in future years when regular tax exceeds MAT — a multi-year tax optimisation exercise that benefits profitable but deduction-heavy companies.

Bihar has a significant and growing charitable sector — religious trusts, educational institutions, welfare foundations, village development trusts, and Section 8 companies operating across ${district} — all required to file ITR-7 and claim exemption on income applied for charitable purposes under Sections 11 and 12, subject to valid Section 12AB registration. Taxvio handles complete ITR-7 filing for ${areaName} trusts, verifying the mandatory 85% income application requirement, computing permissible accumulation under Section 11(2) where deferral of spending is needed, and ensuring corpus donations are correctly excluded from taxable income — coordinating audit under Form 10B where trust accounts require statutory certification.`,
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
        "Form 24Q — salary TDS (with annual Form 16 preparation)",
        "Form 26Q — non-salary TDS (contractor, rent, professional fees)",
        "Form 27Q — TDS on payments to non-residents",
        "Challan-to-deductee reconciliation with Form 26AS",
        "TRACES correction (Conso file) for prior-quarter errors",
        "TDS certificate (Form 16/16A) generation",
      ],
      seoContent: `Every employer and business in ${areaName}, ${district}, Bihar that deducts tax at source is required to file quarterly TDS returns — and non-compliance carries severe financial consequences. Section 234E imposes a late filing fee of ₹200 per day per return (subject to a cap equal to the TDS amount), while Section 271H provides for an additional penalty of ₹10,000 to ₹1 lakh for persistent non-filing. Form 24Q covers salary TDS deductions (due July 31, October 31, January 31, and May 31), while Form 26Q covers all non-salary TDS — contractor payments under Section 194C (highly relevant for Bihar's active construction sector), professional fees under 194J, rent above ₹50,000 per month under 194I, commission payments under 194H, and several other categories common in ${areaName}'s trading and service economy.

Taxvio's quarterly TDS return filing service for ${areaName} businesses begins with thorough challan-to-deductee mapping — matching every TDS challan (identified by BSR code, challan serial number, deposit date, and exact amount) to the correct employee or vendor PAN in the return data. This reconciliation is the most critical step in TDS compliance: mapping errors result in the deductee's TDS credit failing to appear in their Form 26AS, creating financial hardship for employees and vendors — who cannot claim credit for tax already deducted — and exposing the deducting business to TRACES-generated short deduction defaults. We generate the quarterly return in FVU-compliant format, validate through NSDL's File Validation Utility, and submit to the TIN portal within the statutory deadline.

For the fourth-quarter Form 24Q filing — the most comprehensive of the year — our service includes complete annual salary reconciliation for every employee and Form 16 preparation: Part A downloaded and digitally signed from TRACES, Part B prepared with accurate salary breakup, HRA calculations, 80C and 80D deduction details, and old/new regime selection for each individual. We also handle TRACES correction requests (Conso file processing) for amending prior-quarter errors — particularly short deduction adjustments and PAN mismatches common in ${areaName} businesses with seasonal labour and high vendor turnover.`,
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
        "TCS on goods u/s 206C — scrap, minerals, timber, tendu leaves",
        "TCS on motor vehicle sales above ₹10 lakh",
        "TCS on foreign remittance / LRS (206C(1G))",
        "TCS on goods sale above ₹50 lakh (206C(1H))",
        "Form 27D TCS certificate generation",
      ],
      seoContent: `Tax Collected at Source under Section 206C applies to a growing range of sellers and traders in ${areaName}, ${district}, Bihar — and Bihar's agricultural and natural-resource-rich economy means TCS obligations here span a wider set of business types than in many other states. The traditional Section 206C(1) categories — highly relevant to Bihar's economy — include collection from timber/forest produce dealers (2.5%), traders in tendu leaves (5%), scrap dealers (1%), and dealers in specified minerals including coal, lignite, and iron ore. Bihar's active agricultural commodity markets, stone quarrying operations, and forest produce trade create significant TCS compliance requirements for sellers in ${district} and surrounding areas.

More recent TCS provisions that affect ${areaName} businesses include 1% TCS on motor vehicle sales above ₹10 lakh under Section 206C(1F) — relevant to Bihar's expanding auto dealership sector — 0.1% TCS on goods sold above ₹50 lakh to a single buyer in a financial year under Section 206C(1H) (capturing many wholesale and B2B traders in ${areaName}'s grain, fertiliser, and general merchandise markets), and TCS on foreign remittances under the Liberalised Remittance Scheme at rates from 0.5% to 20% under Section 206C(1G) for authorised dealers.

Taxvio manages the complete TCS compliance cycle for ${areaName} businesses — starting with a detailed eligibility assessment identifying which transactions and which buyers trigger TCS obligations, determining the correct rate per applicable section, processing challan deposits using the correct nature-of-payment code, and filing quarterly Form 27EQ (due July 15, October 15, January 15, and May 15) with accurate collectee PAN mapping. After each quarterly filing we generate Form 27D TCS certificates for all collectees, and guide ${areaName} buyers seeking TCS relief on whether Form 27C (manufacturing/processing declaration) can be furnished to reduce or eliminate collection, or whether a Section 197 lower/nil TCS certificate application to the Assessing Officer is the more appropriate route.`,
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
        "Digital signature with valid UDIN & timely e-filing",
      ],
      seoContent: `Income tax audit under Section 44AB is mandatory for businesses in ${areaName}, ${district}, Bihar whose annual turnover exceeds ₹1 crore — with a relaxed threshold of ₹10 crore for businesses conducting at least 95% of their transactions through banking channels, UPI, or other digital modes, a provision increasingly benefiting ${areaName}'s trader community as digital payment adoption spreads across Bihar's markets. For specified professionals — doctors, lawyers, engineers, chartered accountants, architects, technical consultants — the audit threshold is ₹50 lakh in aggregate gross receipts.

A frequently overlooked audit trigger specific to presumptive taxation applies to ${areaName} taxpayers who opt for Section 44AD or 44ADA but declare income below the prescribed minimum (8%/6% of turnover for traders, 50% of receipts for professionals) while their total income still exceeds the basic exemption limit — these taxpayers require audit regardless of whether absolute turnover stays below the standard thresholds. This rule catches many small ${areaName} businesses and independent professionals unaware, particularly in years with high turnover but compressed margins due to input cost increases.

Taxvio's tax audit service for ${areaName} businesses involves a comprehensive review of books of accounts maintained under Section 44AA, reconciliation of income tax turnover figures against GST returns (GSTR-1, GSTR-3B, GSTR-9) and TDS certificates to identify discrepancies before the auditor's report is finalised, verification of compliance with cash transaction restrictions under Sections 269SS and 269T (accepting or repaying loans/deposits above ₹20,000 in cash — a common issue in Bihar's cash-heavy agricultural and trading ecosystem), TDS deduction compliance review across salary, contractor, professional fee, and rent payments, and disclosure of related-party transactions at arm's length. All 41 clauses of Form 3CD are completed with appropriate supporting documentation, the report is digitally signed with a valid UDIN generated in the ICAI portal, and e-filed on the income tax portal — consistently meeting the September 30 due date (or October 31 for specified international transaction cases) to avoid the 0.5%-of-turnover penalty capped at ₹1.5 lakh.`,
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
      seoContent: `Income tax notices reach taxpayers in ${areaName}, ${district}, Bihar when the Centralised Processing Centre or the jurisdictional Assessing Officer identifies discrepancies in filed returns — and the consequences of an inadequate or late response range from minor tax adjustments to substantial demand orders that accrue interest and penalty if unpaid. The most common notice Bihar taxpayers face is the Section 143(1) intimation — a computer-generated communication from CPC flagging arithmetic errors, disallowed deductions, or mismatches between the return data and information in Form 26AS (TDS credits), the Annual Information Statement (AIS), or the Taxpayer Information Summary (TIS).

Section 143(2) represents a more serious development — a formal scrutiny assessment selected either through the risk-based CASS (Computer-Aided Scrutiny Selection) system or targeted issue-specific scrutiny. Responding effectively requires compiling complete supporting documentation — audited accounts, bank statements, contracts, investment proofs, business records — and preparing a structured, factual written response addressing each specific query raised by the Assessing Officer at the relevant ${district} income tax range. Taxvio's CA team prepares this full documentation package, drafts the reply with appropriate legal citations, and accompanies ${areaName} clients for in-person hearings before the ward officer when physical representation is required.

Section 148 reassessment notices are the most consequential, reopening already-completed assessments where the department has reason to believe income has escaped taxation — with a lookback period of 3 years for cases below ₹50 lakh of escaped income, or up to 10 years for larger amounts (post-Finance Act 2021 amendments). We handle the complete reassessment cycle for ${areaName} taxpayers — filing the return in response to the Section 148 notice within the prescribed timeline, legally challenging the reopening if grounds are available (through objections before the Assessing Officer and, if rejected, writ petitions before the Patna High Court), representing in assessment proceedings, and escalating to CIT(Appeals) or the Income Tax Appellate Tribunal if the resulting order remains adverse.`,
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
      seoContent: `Section 12AB registration is the essential prerequisite for charitable trusts, religious institutions, NGOs, and Section 8 companies operating in ${areaName}, ${district}, Bihar to receive income tax exemption on income applied toward their charitable objects under Sections 11 and 12 of the Income Tax Act. Without valid 12AB registration, the organisation's income — even when genuinely spent on relief, education, healthcare, or religious purposes — remains taxable at the maximum marginal rate, drastically reducing the funds available for mission delivery.

Bihar has a substantial and historically significant charitable and religious sector — ashrams and dharmshalas in Gaya and Bodh Gaya, educational trusts running schools and coaching institutes across ${district}, agricultural welfare cooperatives, rural development foundations, and healthcare trusts serving underserved communities across the Magadh, Mithila, and Kosi regions. Organisations in ${areaName} pursuing 12AB registration must ensure their trust deed or Memorandum of Association clearly articulates objects that fall within the approved charitable categories under Section 2(15) — relief of the poor, education, medical relief, preservation of environment, preservation of monuments, or any other object of general public utility.

Following the post-2020 overhaul of the charitable registration framework, new applicants first receive a provisional registration valid for 3 years (through Form 10A), after which — once the organisation has established an active charitable track record — a regular registration valid for 5 years must be applied for through Form 10AB before the provisional period expires. Taxvio assists ${areaName} trusts and NGOs through the entire 12AB registration lifecycle: reviewing constitutional documents for compliance with approved object categories, preparing and filing Form 10A or Form 10AB with all required supporting documents (activity reports, audited accounts, registered office address proof, PAN, incorporation certificate), responding to clarification or inspection queries from the CIT(Exemptions) office, and managing 5-year validity renewal proactively to prevent lapses in exemption eligibility.`,
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
        "Coordination with 12AB registration",
      ],
      seoContent: `80G registration under Section 80G(5) enables charitable trusts and NGOs in ${areaName}, ${district}, Bihar to offer their donors — individual taxpayers and corporate CSR contributors alike — a 50% or 100% deduction on donation amounts in their own income tax returns. For Bihar-based NGOs and charitable organisations competing for philanthropic funding, government grants, and corporate social responsibility allocations, holding valid 80G registration is frequently the decisive factor for donors choosing between similar organisations. Many CSR donors require 80G registration as a mandatory prerequisite before committing contributions.

Following the post-2020 registration reforms, 80G registration — mirroring the 12AB structure — is now issued in two stages: a provisional registration valid for 3 years for newly applying organisations (through Form 10A), followed by a regular registration valid for 5 years (through Form 10AB) once the organisation has demonstrated genuine active charitable operations. Critically, 80G registration is contingent on the organisation already holding valid 12AB registration — organisations that have allowed their 12AB to lapse must renew it before applying or renewing 80G status.

Taxvio handles the complete 80G registration process for ${areaName} trusts and NGOs — assessing eligibility against the specific conditions under Section 80G(5), including restrictions on trusts operating exclusively for the benefit of a specific religious community or caste, and requirements around the proportion of income applied to charitable versus non-charitable purposes. We prepare the Form 10A or 10AB application with full donation activity disclosure, financial statements demonstrating genuine charitable operations, and all required supporting documents, then file on the income tax portal and follow up with the CIT(Exemptions) office — responding to any inspection queries or objections until the registration order is issued. We track the 5-year validity for all ongoing clients and file renewal applications proactively ahead of expiry, ensuring no interruption to donor deduction eligibility.`,
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
      seoContent: `Form 15G and Form 15H are self-declaration forms submitted by residents of ${areaName}, ${district}, Bihar to banks, post offices, cooperative societies, and other payers to prevent TDS deduction on interest income when total annual income falls below the taxable threshold. Bihar has a large population of fixed deposit holders, post office scheme investors (NSC, KVP, Monthly Income Scheme), and savings account holders who earn interest income at or near the TDS trigger threshold — making 15G/15H filing practically important for a significant proportion of ${areaName}'s households.

Form 15G applies to individuals below 60 years of age (and HUFs) whose estimated total income for the financial year does not exceed the basic exemption limit — ₹2.5 lakh under the old regime or ₹3 lakh under the new default regime — with the additional sub-condition that aggregate interest income from the specific payer must also not exceed this limit. Form 15H applies to resident senior citizens aged 60 and above, with the more straightforward condition that the tax computed on estimated total income for the year is nil — without the interest-income sub-limit applicable to Form 15G, making it more accessible for senior citizens with pension and modest interest income.

For ${areaName} residents holding fixed deposits, post office time deposits, KVP, NSC, or savings accounts with annual interest above ₹40,000 (₹50,000 for senior citizens), banks are required to deduct 10% TDS under Section 194A unless a valid Form 15G or 15H is submitted at the beginning of the financial year. Failure to submit timely results in avoidable TDS deductions that must then be reclaimed through ITR filing — an unnecessary compliance burden and cash-flow disruption. Taxvio assists ${areaName} residents with complete 15G/15H filing — computing estimated total income across all sources to confirm genuine nil-tax or below-threshold eligibility (filing an incorrect 15G/15H when not actually eligible constitutes tax evasion under Section 277), preparing the correct form, and guiding submission to every relevant financial institution. For taxpayers where annual 15G/15H submission becomes cumbersome across multiple banks, we advise on Section 197 lower/nil TDS certificate applications as a more durable, single-application alternative.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function BiharIncomeTaxAreaPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const areaData  = findArea(city);
  const areaName  = areaData?.name     ?? city.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const district  = areaData?.district ?? areaName;
  const region    = areaData?.region   ?? "Bihar";

  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hello Taxvio, I need income tax services in ${areaName}, ${district}, Bihar.`
  )}`;

  const services = getServiceContent(areaName, district, region);

  /* ── Nearby areas ── */
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
    description: `Taxvio provides ITR filing, TDS/TCS returns, income tax audit, scrutiny reply, 12A/80G registration, PAN/TAN, and Form 15G/15H services in ${areaName}, ${district}, Bihar.`,
    areaServed: [
      {
        "@type": "Place",
        name: areaName,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: district,
          containedInPlace: { "@type": "State", name: "Bihar" },
        },
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
      reviewCount: "3100",
    },
    priceRange: "₹199 - ₹4,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",             item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Income Tax Bihar", item: "https://www.taxvio.in/state/bihar/income-tax-services" },
      { "@type": "ListItem", position: 3, name: district,           item: `https://www.taxvio.in/state/bihar/income-tax-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${areaName} Income Tax`, item: `https://www.taxvio.in/state/bihar/income-tax-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Income Tax Services in ${areaName}, Bihar`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/bihar/income-tax-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ITR filing due date for individuals in ${areaName}, Bihar?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `For salaried individuals and non-audit cases in ${areaName}: July 31. For businesses and professionals requiring tax audit under Section 44AB: October 31. Companies must file by November 30. Belated returns can be filed until December 31 with a late fee of ₹5,000 (₹1,000 if income is below ₹5 lakh).`,
        },
      },
      {
        "@type": "Question",
        name: `Is ITR filing mandatory in ${areaName} if income is below ₹5 lakh?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Filing is legally mandatory only when gross total income exceeds the basic exemption limit (₹2.5L/₹3L/₹5L depending on age and regime). However, ${areaName} residents below the threshold still benefit from filing to claim TDS refunds, obtain income proof for loans, and maintain a clean compliance record.`,
        },
      },
      {
        "@type": "Question",
        name: `Which ITR form should I use in ${areaName}, Bihar?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `ITR-1 (Sahaj): salary + single house property + other income ≤₹50L. ITR-2: salary + capital gains or foreign income. ITR-3: business/profession with regular books. ITR-4 (Sugam): presumptive taxation 44AD/44ADA. ITR-5: firms and LLPs. ITR-6: companies. ITR-7: trusts and NGOs. Taxvio's CA team determines the correct form for every ${areaName} taxpayer.`,
        },
      },
    ],
  };

  return (
    <>
      <Script id="lb-schema"  type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="bc-schema"  type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="sl-schema"  type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            <nav className="mb-7" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                {[
                  { href: "/",                                       label: "Home" },
                  { href: "/state/bihar/income-tax-services",        label: "Income Tax — Bihar" },
                  { href: null,                                       label: areaName },
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
                  {areaName}, {district} · Bihar · Income Tax Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Return Filing
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {areaName}, Bihar
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">ITR filing</strong> for salaried, proprietors,
                  firms &amp; companies;{" "}
                  <strong className="text-white">TDS / TCS quarterly returns</strong>; income tax audit;
                  scrutiny reply; 12A/80G; PAN/TAN; and Form 15G/15H in{" "}
                  <strong className="text-white">{areaName}, {district}, Bihar</strong> — 100% online
                  by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹699</strong>.
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
                { icon: BadgeCheck,  label: "CA-Certified Team"        },
                { icon: TrendingUp,  label: "3,800+ Bihar Businesses"  },
                { icon: Users,       label: "200+ Bihar Areas"         },
                { icon: IndianRupee, label: "Transparent Pricing"      },
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
              { val: "1–2 Days",  label: "Salaried ITR",        icon: Zap           },
              { val: "4.9★",      label: "Average Rating",      icon: Star          },
              { val: "₹699",      label: "Starting Price",      icon: IndianRupee   },
              { val: "13",        label: "Services Available",  icon: ClipboardList },
            ].map(({ val, label, icon: Icon }) => (
              <div key={label}
                className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[#f2f8fc] border border-[#deeef7] text-center hover:shadow-sm transition-all">
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
                        <h2 className="text-lg md:text-2xl font-extrabold text-white leading-tight">
                          {svc.title}
                        </h2>
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

                    {/* SEO / AI content */}
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
                {
                  icon: Users,
                  title: "CA-Certified Tax Professionals",
                  desc: `Every ITR and compliance service for ${areaName} taxpayers is delivered by practising Chartered Accountants — real CA sign-off on every return, not automated software.`,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Share Form 16, bank statements, and investment proofs on WhatsApp from ${areaName}. We prepare, review, and file your ITR with Aadhaar OTP e-verification — no office visit ever.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Calculator,
                  title: "Old vs New Regime Optimisation",
                  desc: `We compute your tax liability under both regimes for every ${areaName} client before filing — ensuring you always select the lower-tax option.`,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Notice Management",
                  desc: `We monitor your income tax dashboard for 143(1) intimations and AIS/TIS discrepancies — alerting ${areaName} clients before a mismatch becomes a demand notice.`,
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹699",
                  desc: `No consultation charges, no surprise fees. Clear all-inclusive pricing for every income tax service in ${areaName} — quoted before we file.`,
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: Receipt,
                  title: `Bihar Ward & AO Familiarity`,
                  desc: `Deep familiarity with Bihar's income tax circles and ${district} jurisdiction processing patterns — built from years of filing across the Patna CCIT region.`,
                  color: "bg-sky-100 text-sky-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title}
                  className="group flex items-start gap-4 p-5 bg-[#f8fbfd] border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
                { step: "01", title: "Share Documents",       desc: "Send Form 16, bank statement, investment proofs & PAN/Aadhaar on WhatsApp" },
                { step: "02", title: "CA Review & Computation", desc: "Our CA prepares tax computation, compares regimes, and identifies all eligible deductions" },
                { step: "03", title: "Your Approval",          desc: "We share the computed ITR summary for your review and approval before filing" },
                { step: "04", title: "E-Filed & Verified",     desc: "ITR is e-filed and e-verified via Aadhaar OTP. You receive ITR-V acknowledgement instantly" },
              ].map(({ step, title, desc }) => (
                <div key={step}
                  className="relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                Income Tax FAQs for {areaName}, Bihar Taxpayers
              </h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `What is the ITR filing due date in ${areaName}, Bihar?`,
                  a: `For salaried individuals and non-audit cases in ${areaName}: July 31. For businesses requiring tax audit under Section 44AB: October 31. Companies: November 30. Belated returns can be filed until December 31 with a late fee of ₹5,000 (₹1,000 if income is below ₹5 lakh).`,
                },
                {
                  q: `Should I file ITR even if my income is below ₹5 lakh in ${areaName}?`,
                  a: `Filing is legally mandatory only if gross total income exceeds the basic exemption limit. However, even below-threshold taxpayers in ${areaName} benefit from filing to claim TDS refunds, create income proof for bank loans and government schemes, and maintain a clean compliance record.`,
                },
                {
                  q: `Which ITR form should I use in ${areaName}?`,
                  a: `ITR-1 (Sahaj): salary + single house property + other income ≤₹50L. ITR-2: salary + capital gains or foreign income. ITR-3: business/profession with regular books. ITR-4 (Sugam): presumptive 44AD/44ADA. ITR-5: firms and LLPs. ITR-6: companies. ITR-7: trusts and NGOs. Taxvio's CA team advises the correct form for every ${areaName} taxpayer based on income sources.`,
                },
              ].map((f) => (
                <div key={f.q}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
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
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">
                    {district} &amp; {region}
                  </p>
                  <h2 className="text-lg font-extrabold text-gray-800">
                    Income Tax Services in Nearby Bihar Areas
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionAreas.map((c) => (
                  <Link key={c.name}
                    href={`/state/bihar/income-tax-services/${slugifyArea(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    ITR in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/bihar/income-tax-services"
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
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-sky-300" />
                  Serving ITR clients in {areaName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  File Your ITR in {areaName} — Fast &amp; Accurate
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  ITR filing, TDS returns, income tax audit, scrutiny reply, 12A/80G, PAN/TAN, and
                  Form 15G/15H — all delivered online for taxpayers in {areaName}, {district}, Bihar.
                  Starting ₹699. CA-assisted, same-day WhatsApp response.
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