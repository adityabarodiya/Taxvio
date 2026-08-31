// app/state/maharashtra/income-tax-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, BookOpen, ClipboardList,
  Calculator, Briefcase, Building2, Receipt,
} from "lucide-react";
import {
  MH_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay,
} from "@/data/mh-cities";

/* ─── Static Params ─────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return ALL_CITY_SLUGS.map((city) => ({ city }));
}

/* ─── Metadata ──────────────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const data     = getCityData(city);
  const cityName = data?.name     ?? formatCityDisplay(city);
  const district = data?.district ?? cityName;

  return {
    title: `Income Tax Return Filing & TDS Services in ${cityName}, Maharashtra | Taxvio`,
    description: `Expert ITR filing for salaried, proprietors, firms, LLPs & companies, quarterly TDS/TCS returns, tax audit, scrutiny reply, 12A/80G registration, PAN/TAN application in ${cityName}, ${district}, Maharashtra. CA-assisted, 100% online, starting ₹799. ITR filed in 24-48 hours.`,
    keywords: [
      `ITR filing ${cityName}`,
      `income tax return ${cityName} Maharashtra`,
      `TDS return filing ${cityName} ${district}`,
      `tax audit ${cityName}`,
      `income tax consultant ${cityName} Maharashtra`,
      `ITR salaried ${cityName}`,
      `ITR proprietor ${cityName}`,
      `12A 80G registration ${cityName}`,
      `income tax scrutiny ${cityName}`,
      `CA income tax services ${district}`,
      `PAN TAN application ${cityName}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/maharashtra/income-tax-services/${city}` },
    openGraph: {
      title: `Income Tax Services in ${cityName}, Maharashtra | Taxvio`,
      description: `ITR filing, TDS returns, tax audit & scrutiny reply in ${cityName}, ${district}, Maharashtra — CA-assisted, from ₹799.`,
      url: `https://www.taxvio.in/state/maharashtra/income-tax-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `Income Tax Services in ${cityName}, Maharashtra | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(cityName: string, district: string, region: string) {
  return [

    /* ── 1. PAN Card ── */
    {
      slug: "pan-card",
      title: `PAN Card Application in ${cityName}`,
      price: "₹199",
      timeline: "3–5 Days",
      icon: "🪪",
      gradient: "from-slate-500 to-gray-600",
      accentBg: "bg-slate-50",
      accentBorder: "border-slate-100",
      accentText: "text-slate-700",
      features: [
        "New PAN application for individuals & entities",
        "PAN correction — name, DOB, address update",
        "PAN reprint for lost or damaged cards",
        "Portal filing & NSDL/UTI-ITSL tracking",
        "Demographic change request support",
        "Status tracking until PAN card delivery",
      ],
      seoContent: `PAN (Permanent Account Number) card is a mandatory identity document for every taxpayer in ${cityName}, ${district}, Maharashtra — required for filing income tax returns, opening bank accounts, buying mutual funds or property above ₹10 lakh, and any financial transaction that triggers tax compliance. Without a PAN, you cannot file an ITR, and many banks and financial institutions will not process high-value transactions.

Taxvio provides complete PAN card application services for individuals, Hindu Undivided Families (HUFs), partnership firms, LLPs, and companies in ${cityName} — covering new PAN issuance, corrections to existing PAN cards (name spelling, date of birth, address update), and PAN reprint for lost or damaged cards. We prepare and submit Form 49A (for Indian citizens) or Form 49AA (for foreign citizens) through the NSDL or UTI-ITSL portals, upload all required documents (Aadhaar, address proof specific to ${cityName}, date of birth proof, photograph), generate the acknowledgement number, and track the application until the PAN card is dispatched to your ${cityName} address.

For ${cityName} residents who already have a PAN but need corrections — common scenarios include name change after marriage, address update after relocation within Maharashtra, or date of birth correction due to errors during original issuance — we file the correction request (Form 49A with 'Changes or Correction in existing PAN data' option selected) with supporting documents and follow up with the processing centre until the updated PAN card is received.

PAN verification is also critical for employers, businesses, and financial institutions in ${cityName} — we provide bulk PAN verification services to ensure vendor PANs, employee PANs, and deductee PANs are valid and active before processing TDS deductions, preventing future compliance issues.`,
    },

    /* ── 2. TAN Application ── */
    {
      slug: "tan-application",
      title: `TAN Application & Correction in ${cityName}`,
      price: "₹299",
      timeline: "3–7 Days",
      icon: "🔢",
      gradient: "from-zinc-500 to-slate-600",
      accentBg: "bg-zinc-50",
      accentBorder: "border-zinc-100",
      accentText: "text-zinc-700",
      features: [
        "New TAN registration for employers & businesses",
        "Form 49B filing on NSDL TIN portal",
        "TAN allotment within 3–7 working days",
        "Correction in existing TAN details",
        "TDS/TCS compliance briefing after TAN allotment",
        "Mandatory for all entities deducting or collecting tax",
      ],
      seoContent: `TAN (Tax Deduction and Collection Account Number) is a mandatory 10-character alphanumeric identifier required for any person or entity in ${cityName}, ${district}, Maharashtra that deducts Tax Deducted at Source (TDS) from employee salaries, contractor payments, rent, professional fees, or interest, or collects Tax Collected at Source (TCS) on specified goods. Without a valid TAN, you cannot file quarterly TDS returns (Form 24Q, 26Q, 27Q) or TCS returns (Form 27EQ), and you cannot issue valid TDS certificates (Form 16, Form 16A) to deductees.

Taxvio handles complete TAN registration for businesses, employers, and organizations in ${cityName} — filing Form 49B on the NSDL TIN-FC portal with all required details (name and address of the ${cityName} entity, responsible person's PAN, nature of business, estimated tax deduction/collection), uploading supporting documents (PAN of the applicant entity, address proof for the ${cityName} office, and authorized signatory details), and tracking the application through to TAN allotment, which typically takes 3–7 working days.

Common scenarios requiring TAN in ${cityName} include: companies and LLPs hiring employees (TDS on salary under Section 192), businesses engaging contractors or consultants (TDS under Section 194C on contractor payments or Section 194J on professional fees), landlords or property management firms (TDS under Section 194I if annual rent exceeds ₹2.4 lakh), and traders or manufacturers collecting TCS on sale of scrap, minerals, or other notified goods under Section 206C.

We also handle TAN correction applications for ${cityName} entities that have changed their registered office address, legal name (due to rebranding or conversion to a different legal structure), or responsible person — ensuring TAN records match current business details and preventing rejection of TDS returns due to TAN-PAN mismatch.`,
    },

    /* ── 3. ITR — Salaried ── */
    {
      slug: "itr-salaried",
      title: `ITR Filing for Salaried Individuals in ${cityName}`,
      price: "₹799",
      timeline: "24–48 Hours",
      icon: "👔",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "ITR-1 (Sahaj) or ITR-2 filing based on income sources",
        "Form 16 verification & reconciliation",
        "Section 80C, 80D, HRA, LTA deduction optimization",
        "AIS/TIS reconciliation before filing",
        "Multiple Form 16 support (job changes)",
        "E-verification within 30 days of filing",
      ],
      seoContent: `Income tax return filing for salaried individuals in ${cityName}, ${district}, Maharashtra is mandatory if gross total income before deductions exceeds ₹2.5 lakh under the old regime or ₹3 lakh under the new default tax regime introduced from FY 2023-24. For ${cityName} professionals working in IT, finance, manufacturing, healthcare, education, or government sectors, filing the correct ITR form and claiming all eligible deductions can save thousands of rupees in tax every year.

Taxvio's ITR filing service for ${cityName} salaried employees begins with Form 16 verification — we review Part A (employer TAN, employee PAN, TDS deducted and deposited) and Part B (salary breakup, exemptions, deductions), cross-check against bank credits and payslips, and identify common errors like incorrect HRA exemption computation, missed LTA claims, or excess standard deduction claimed. We then optimize deductions under Chapter VI-A: Section 80C (PPF, ELSS, life insurance premium, tuition fees, home loan principal repayment up to ₹1.5 lakh), Section 80D (health insurance premium for self, spouse, children, and parents up to ₹75,000), Section 80G (donations to eligible trusts and funds), and other applicable deductions.

For ${cityName} employees who changed jobs during the financial year — a common scenario in Mumbai, Pune, and Thane's dynamic job market — we consolidate Form 16 from multiple employers, ensure all salary income is correctly reported, and verify that total TDS claimed matches the aggregate across all employers. We also reconcile your Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) available on the income tax portal to ensure all third-party data (bank interest, dividend, capital gains from mutual fund/equity sales) matches your return data — preventing automated mismatch notices that are increasingly common post-filing.

Whether you're an IT professional in Pune, a finance executive in Mumbai, a manufacturing engineer in Aurangabad, or a healthcare worker in Nagpur, our CA-reviewed ITR filing ensures accurate reporting, maximum legitimate tax savings, and timely e-verification to complete the process within the statutory 30-day window after acknowledgement.`,
    },

    /* ── 4. ITR — Proprietor ── */
    {
      slug: "itr-proprietor",
      title: `ITR Filing for Proprietors & Self-Employed in ${cityName}`,
      price: "₹999",
      timeline: "2–3 Days",
      icon: "🏪",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "ITR-3 or ITR-4 (Sugam) based on turnover & scheme",
        "Profit & Loss statement preparation",
        "Balance sheet for ITR-3 filers",
        "Presumptive taxation advisory (44AD/44ADA/44AE)",
        "Business expense deduction optimization",
        "Tax audit applicability assessment",
      ],
      seoContent: `Income tax return filing for proprietors, freelancers, consultants, and self-employed professionals in ${cityName}, ${district}, Maharashtra requires either ITR-3 (for those maintaining regular books of accounts or with turnover above the presumptive threshold) or ITR-4 (Sugam, for those opting for presumptive taxation under Section 44AD for business, Section 44ADA for specified professions, or Section 44AE for goods carriage). The choice between ITR-3 and ITR-4 significantly impacts compliance burden, tax liability, and documentation requirements.

Taxvio's ITR filing service for ${cityName} proprietors covers complete business income computation — preparing Profit & Loss statements showing gross receipts, direct expenses (raw materials, purchase of stock-in-trade, freight), indirect expenses (rent, utilities, salaries, marketing, depreciation), and net profit before tax. For ${cityName} traders, manufacturers, and service providers filing ITR-3, we also prepare a balance sheet showing assets (cash, stock, debtors, fixed assets) and liabilities (creditors, loans, proprietor's capital), which is mandatory for ITR-3.

For smaller proprietors in ${cityName} — such as consultants, freelance designers, tutors, medical practitioners, chartered accountants, advocates, and small traders — who qualify for presumptive taxation (annual turnover/gross receipts up to ₹2 crore for Section 44AD business or ₹50 lakh for Section 44ADA professions), we advise on whether opting for ITR-4 is beneficial. Under presumptive schemes, you declare a deemed profit (8% of turnover for digital receipts, 6% for cash receipts under 44AD; 50% of gross receipts under 44ADA) without maintaining detailed books — significantly simplifying compliance. However, you cannot claim actual expenses if they exceed the deemed percentage, and you cannot carry forward business losses under presumptive schemes.

We assess tax audit applicability under Section 44AB — mandatory for ${cityName} businesses with turnover above ₹1 crore (₹10 crore if digital transactions are above 95%) or professionals with gross receipts above ₹50 lakh — and coordinate with our audit team if required. Whether your ${cityName} business is a small retail shop, a growing consultancy, or a mid-sized trading firm, our structured approach ensures accurate income computation, legitimate expense deductions, and timely filing.`,
    },

    /* ── 5. ITR — Firm/LLP ── */
    {
      slug: "itr-firm-llp",
      title: `ITR Filing for Partnership Firms & LLPs in ${cityName}`,
      price: "₹1,999",
      timeline: "3–5 Days",
      icon: "🤝",
      gradient: "from-teal-500 to-cyan-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "ITR-5 filing for partnership firms and LLPs",
        "Partner capital accounts & profit-sharing computation",
        "Remuneration to partners — Section 40(b) compliance",
        "Interest to partners — allowable limits",
        "Tax audit coordination (Section 44AB)",
        "Due date: 31 July (non-audit) or 31 October (audit)",
      ],
      seoContent: `Income tax return filing for partnership firms and Limited Liability Partnerships (LLPs) in ${cityName}, ${district}, Maharashtra requires ITR-5, which is significantly more complex than individual returns due to partner-specific disclosures, capital account maintenance, profit-sharing ratio reporting, and partner remuneration/interest deduction limitations under Section 40(b). Partnership firms and LLPs are taxed at a flat 30% (plus applicable surcharge and cess) on their net income after deducting allowable partner remuneration and interest.

Taxvio's ITR-5 filing service for ${cityName} firms and LLPs begins with partner capital account reconciliation — verifying opening balances, additional capital introduced during the year, drawings withdrawn by partners, profit/loss allocated per the partnership deed's profit-sharing ratio, and closing balances. We compute allowable remuneration to working partners under Section 40(b) — ₹1.5 lakh or 90% of book profit (whichever is higher) for book profit up to ₹3 lakh, scaling up to 60% of book profit above ₹10 lakh — and ensure claimed remuneration does not exceed these limits, preventing disallowance and tax addition.

Interest paid to partners on capital or loans is allowable as a deduction only if authorized by the partnership deed and only up to 12% per annum (simple interest, not compound) — we verify interest computation and ensure compliance to avoid disallowance. We prepare the complete Profit & Loss account and Balance Sheet showing firm assets, liabilities, income, expenses, and partner-wise capital and current accounts, which are mandatory schedules in ITR-5.

For ${cityName} partnership firms and LLPs with annual turnover exceeding ₹1 crore (₹10 crore if digital payments exceed 95%) or professional firms with gross receipts above ₹50 lakh, tax audit under Section 44AB is mandatory. We coordinate audit completion and Form 3CD filing by 30 September, followed by ITR-5 filing by 31 October. Whether your ${cityName} firm is in trading, manufacturing, professional services, or real estate, our structured ITR-5 filing ensures partner compliance, correct tax computation, and timely submission.`,
    },

    /* ── 6. ITR — Trust/Company ── */
    {
      slug: "itr-trust-company",
      title: `ITR Filing for Trusts, Pvt Ltd & Public Companies in ${cityName}`,
      price: "₹2,999",
      timeline: "5–7 Days",
      icon: "🏢",
      gradient: "from-emerald-500 to-green-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "ITR-6 for private limited & public limited companies",
        "ITR-7 for trusts, NGOs & Section 8 companies",
        "Section 11/12 exemption computation for trusts",
        "MAT/AMT computation for companies",
        "Audit coordination & Form 3CD filing",
        "Due date: 31 October (all entities requiring audit)",
      ],
      seoContent: `Income tax return filing for private limited companies, public limited companies, charitable trusts, societies, NGOs, and Section 8 companies in ${cityName}, ${district}, Maharashtra involves specialized ITR forms and unique compliance requirements. Companies file ITR-6, while trusts and NGOs (including those registered under Section 12A/12AB and 80G) file ITR-7. Both forms require comprehensive schedules for income sources, deductions, audit details, and tax computation.

Taxvio's ITR-6 filing service for ${cityName} companies covers complete corporate tax compliance — computing income under all heads (profits from business or profession, income from house property, capital gains, income from other sources), calculating allowable depreciation under the Companies Act and Income Tax Act, computing Minimum Alternate Tax (MAT) under Section 115JB (applicable when book profit exceeds tax profit, requiring payment of 15% tax on book profit with MAT credit carry-forward for 15 years), and coordinating with the statutory auditor to ensure the tax audit report (Form 3CD) and financial statements match ITR-6 data.

For ${cityName} charitable trusts, societies, and NGOs filing ITR-7, we compute income eligible for exemption under Section 11 (income applied for charitable purposes, with up to 15% allowed for administrative expenses and specific accumulation allowed under Section 11(2) if filed in Form 10) and Section 12 (income from property held for charitable purposes). We verify that the trust's 12A/12AB registration is active, ensure the trust is not engaged in prohibited activities (business not incidental to charitable objects, accumulation beyond the allowed 15% without Form 10 approval), and correctly report corpus donations separately from income donations.

All companies and trusts in ${cityName} require tax audit under Section 44AB regardless of turnover, with the audit report due by 30 September and ITR due by 31 October. We coordinate the complete filing cycle — audit report preparation, board/trustee approval of financials, ITR preparation and portal filing, and post-filing tracking until processing is completed by the CPC (Centralized Processing Centre).`,
    },

    /* ── 7. Quarterly TDS Return ── */
    {
      slug: "quarterly-tds",
      title: `Quarterly TDS Return Filing in ${cityName}`,
      price: "₹999/quarter",
      timeline: "Due 31st Jul/Oct/Jan/May",
      icon: "📋",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "Form 24Q — TDS on salary (Section 192)",
        "Form 26Q — TDS on non-salary payments",
        "Form 27Q — TDS on foreign payments",
        "Challan reconciliation & deductee PAN verification",
        "Form 16 / Form 16A generation after filing",
        "Late fee computation & TRACES follow-up",
      ],
      seoContent: `Quarterly TDS return filing is a mandatory compliance requirement for every employer, business, and organization in ${cityName}, ${district}, Maharashtra that deducts tax at source from salary, contractor payments, rent, professional fees, interest, commission, brokerage, or any other specified payment. TDS returns are filed in Form 24Q (for salary TDS under Section 192), Form 26Q (for non-salary TDS under various sections like 194A, 194C, 194H, 194I, 194J, and others), and Form 27Q (for TDS on payments to non-residents under Section 195).

The quarterly TDS return due dates for ${cityName} businesses are: 31 July (Q1 — April to June), 31 October (Q2 — July to September), 31 January (Q3 — October to December), and 31 May (Q4 — January to March). Late filing attracts a mandatory fee of ₹200 per day under Section 234E, capped at the total TDS amount, and can result in a penalty of ₹10,000 to ₹1 lakh under Section 271H for persistent non-filing or incorrect filing.

Taxvio's TDS return filing service for ${cityName} employers and businesses covers end-to-end compliance — challan reconciliation (matching BSR code, date, and amount of each OLTAS challan paid during the quarter with the TDS liability being reported), deductee PAN verification (ensuring every employee, vendor, or payee PAN is valid to avoid higher TDS deduction and return rejection), section-wise TDS breakup (correctly classifying each payment under the applicable section — 194C for contractors, 194J for professional fees, 194I for rent, etc.), and generation of the TDS return file using NSDL's Return Preparation Utility (RPU) software, followed by FVU (File Validation Utility) validation and upload to the TRACES portal.

After successful filing and acceptance of the TDS return by TRACES, we generate Form 16 (for salary TDS, due by 31 May each year for the preceding financial year) and Form 16A (for non-salary TDS, due within 15 days of quarterly return filing) and deliver these certificates to your ${cityName} employees and vendors, enabling them to claim TDS credit while filing their ITR. We also track return processing status and handle any defect notices or discrepancy queries from TRACES.`,
    },

    /* ── 8. Quarterly TCS Return ── */
    {
      slug: "quarterly-tcs",
      title: `Quarterly TCS Return Filing in ${cityName}`,
      price: "₹999/quarter",
      timeline: "Due 15th after Quarter",
      icon: "🧮",
      gradient: "from-orange-500 to-red-500",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-100",
      accentText: "text-orange-700",
      features: [
        "Form 27EQ — TCS return filing",
        "TCS collection under Section 206C",
        "Challan reconciliation & collectee PAN verification",
        "Form 27D certificate generation",
        "Scrap, minerals, timber, liquor, vehicle TCS",
        "LRS & foreign travel package TCS",
      ],
      seoContent: `Quarterly TCS (Tax Collected at Source) return filing is mandatory for sellers and collectors in ${cityName}, ${district}, Maharashtra who are required to collect tax under Section 206C on the sale of specified goods — scrap, minerals (including coal, lignite, iron ore), timber, tendu leaves, forest produce, alcoholic liquor for human consumption, parking lot services, toll plaza services, sale of motor vehicles above ₹10 lakh, and, most significantly for Mumbai and Pune's outbound travel market, foreign remittances under the Liberalized Remittance Scheme (LRS) and overseas tour packages exceeding ₹7 lakh per financial year.

TCS return filing is done in Form 27EQ on the TRACES portal, with due dates falling on the 15th of the month following the end of each quarter — 15 July (Q1), 15 October (Q2), 15 January (Q3), and 15 May (Q4). Late filing attracts a daily penalty of ₹200 under Section 234E, similar to TDS returns, capped at the total TCS amount.

Taxvio's TCS return filing service for ${cityName} businesses covers TCS computation under the applicable section and rate (1% on scrap sale, 5% on timber, 1% on motor vehicle sale above ₹10 lakh, 5% on LRS remittances above ₹7 lakh within a financial year), challan reconciliation (ensuring each TCS challan is correctly reflected in the return), collectee PAN verification (avoiding 5% higher TCS rate where PAN is not available), and Form 27EQ preparation and filing through TRACES using the TCS Statement Preparation Utility (SPU).

After successful filing, we generate Form 27D — the TCS certificate issued to the buyer/collectee, similar to Form 16A for TDS — which the buyer can use to claim credit for the TCS collected while filing their ITR. Whether your ${cityName} business is in scrap trading, mineral sales, vehicle dealership, or foreign exchange/travel services, our TCS compliance ensures timely filing, correct tax collection, and proper certificate issuance to buyers.`,
    },

    /* ── 9. Income Tax Audit ── */
    {
      slug: "income-tax-audit",
      title: `Income Tax Audit Assistance in ${cityName}`,
      price: "₹8,999",
      timeline: "Before 30th Sep",
      icon: "🔎",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Section 44AB audit applicability check",
        "Form 3CA/3CB audit report signing by CA",
        "Form 3CD — 44-clause detailed disclosure",
        "Books of accounts review & reconciliation",
        "Transfer pricing, MSME compliance reporting",
        "Due date: 30th September for audit report",
      ],
      seoContent: `Income tax audit under Section 44AB is mandatory for businesses in ${cityName}, ${district}, Maharashtra with annual gross turnover exceeding ₹1 crore (₹10 crore if cash receipts and payments are below 5% of total receipts/payments) and for professionals with gross receipts above ₹50 lakh. The tax audit must be completed by a practicing Chartered Accountant, and the audit report must be filed on the income tax portal by 30 September of the assessment year, before the ITR for audit cases (due 31 October).

The tax audit report consists of Form 3CA or Form 3CB (the main audit certificate) and Form 3CD — a detailed 44-clause annexure requiring comprehensive disclosure of accounting practices, depreciation computation, deductions claimed, related party transactions, payments to specified persons (directors, partners), outstanding payments to micro and small enterprises (MSME) beyond 45 days, provision for doubtful debts, and transfer pricing compliance for international or specified domestic transactions.

Taxvio's tax audit service for ${cityName} businesses covers audit applicability assessment (confirming whether your turnover/receipts cross the threshold and whether the digital payment condition applies), books of accounts review (ensuring your accounting records, stock registers, purchase and sales registers, and financial statements are complete and accurate), Form 3CD preparation (compiling all 44 clauses with supporting schedules and ensuring disclosures are accurate and complete), and audit report signing by a practicing CA empaneled with Taxvio, followed by e-filing on the income tax portal.

Common audit scenarios in ${cityName} include: manufacturing units in MIDC areas with turnover above ₹1 crore, traders in APMC markets, exporters through JNPT and Mumbai Port, IT services companies in Pune and Mumbai, professional firms (medical clinics, law firms, CA firms), and real estate developers. Our CA team understands Maharashtra's industry-specific compliance nuances and ensures your ${cityName} business's audit report is filed accurately and on time, avoiding the ₹1.5 lakh penalty under Section 271B for non-filing or delayed filing.`,
    },

    /* ── 10. Income Tax Scrutiny & Notice Reply ── */
    {
      slug: "income-tax-scrutiny",
      title: `Income Tax Scrutiny & Notice Reply in ${cityName}`,
      price: "₹1,999",
      timeline: "Within 30-Day Notice Window",
      icon: "⚖️",
      gradient: "from-red-500 to-rose-600",
      accentBg: "bg-red-50",
      accentBorder: "border-red-100",
      accentText: "text-red-700",
      features: [
        "Section 143(2) scrutiny notice analysis",
        "Section 156 demand notice response",
        "AIS/TIS mismatch resolution",
        "Capital gains under-reporting defence",
        "Written reply with documentary evidence",
        "NFAC / CIT(A) personal hearing representation",
      ],
      seoContent: `Income tax scrutiny notices are increasingly common for taxpayers in ${cityName}, ${district}, Maharashtra as the Income Tax Department's risk-based assessment systems (CASS — Computer-Aided Scrutiny Selection) and the AIS/TIS cross-verification framework identify discrepancies between filed ITR data and third-party financial information reported by banks, financial institutions, property registrars, stock brokers, and other reporting entities. Common triggers for scrutiny in ${cityName} include high-value property transactions (especially in Mumbai, Pune, and Thane) not matching stamp duty valuation data, capital gains from equity and mutual fund sales under-reported or computed incorrectly, business turnover reported in ITR significantly lower than GST-declared revenue, foreign remittances and overseas income not disclosed, and large deductions under Section 80C, 80D, or 80G without supporting documentation.

Section 143(2) is the formal scrutiny notice issued by the Assessing Officer (now routed through the National Faceless Assessment Centre or NFAC) requiring the taxpayer to produce books of accounts, vouchers, bank statements, and other evidence to substantiate the income and deductions declared in the ITR. The notice typically allows 30 days for response, and failure to respond results in a best-judgement assessment under Section 144, creating a tax demand that is significantly harder to contest later.

Taxvio's scrutiny notice reply service for ${cityName} taxpayers follows a structured process — analyzing the specific discrepancy alleged in the notice (income mismatch, excess deduction, unexplained cash deposit, capital gains computation error), reviewing your filed ITR, supporting documents, bank statements, investment proofs, and sale deeds, preparing a comprehensive written response with annexures (sale deed for capital gains, Form 16 for salary, 80C investment proofs, rent agreement for HRA), and representing you in personal hearings before the Assessing Officer (now conducted virtually through NFAC video conferencing) if the matter proceeds beyond written response.

Section 156 demand notices — issued after completion of assessment, often following a Section 143(3) intimation or a Section 154 rectification order — require payment within 30 days or filing an appeal to the Commissioner of Income Tax (Appeals) [CIT(A)]. We handle both demand payment coordination (advising on whether to pay under protest and appeal, or to contest directly) and CIT(A) appeal preparation, ensuring your ${cityName} case is defended at every stage.`,
    },

    /* ── 11. 12A Registration ── */
    {
      slug: "12a-application",
      title: `12A Registration for Trusts & NGOs in ${cityName}`,
      price: "₹2,999",
      timeline: "30–60 Days",
      icon: "🎗️",
      gradient: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "Form 10A — new 12AB registration application",
        "Re-registration for trusts with old 12A approval",
        "Charitable objects review & deed analysis",
        "PCIT/CIT approval follow-up & hearing representation",
        "Section 11/12 income tax exemption enabling",
        "Annual compliance advisory post-registration",
      ],
      seoContent: `Section 12A registration (now called Section 12AB registration under the amended regime effective from 1 April 2021) is a mandatory prerequisite for charitable trusts, societies, and NGOs in ${cityName}, ${district}, Maharashtra to claim income tax exemption under Section 11 and Section 12 on income applied for charitable or religious purposes. Without 12AB registration, the trust's income is taxed at the maximum marginal rate (currently 30% plus applicable surcharge and 4% cess), making registration critical for financial viability.

The new 12AB registration regime requires all trusts — even those that had old Section 12A or Section 12AA registration granted before 1 April 2021 — to apply for fresh registration in Form 10A if they have not already done so. The application must be filed at least 30 days before the start of the previous year (financial year) from which exemption is sought, although the CBDT has extended timelines multiple times for pending old registrations.

Taxvio's 12AB registration service for ${cityName} trusts and NGOs covers complete application preparation — reviewing the trust deed or society registration documents to ensure charitable objects are clearly defined and compliant (education, medical relief, relief of poverty, advancement of general public utility not involving trade/business/commerce), drafting or amending objects if required, compiling required documents (trust deed, registration certificate, PAN, address proof of the ${cityName} registered office, audited financial statements for the last 3 years if the trust is already operational, list of trustees/managing committee members), preparing Form 10A with detailed activity description and financial projections, and filing on the income tax e-filing portal.

After submission, the application is assigned to the jurisdictional Principal Commissioner of Income Tax (PCIT) or Commissioner of Income Tax (CIT) covering ${district}. The officer may issue a query or call for a personal hearing to understand the trust's activities and genuineness. We represent your ${cityName} trust in these hearings, submit additional clarifications or documents as required, and follow up until the formal registration order is issued. Once registered, we also advise on annual compliance — filing Form 10B (annual activity and financial statement) and ITR-7 by the due date to maintain the registration.`,
    },

    /* ── 12. 80G Registration ── */
    {
      slug: "80g-application",
      title: `80G Registration for Trusts & NGOs in ${cityName}`,
      price: "₹2,999",
      timeline: "30–60 Days",
      icon: "🏅",
      gradient: "from-indigo-500 to-violet-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "Form 10AC — 80G approval application",
        "Donor deduction eligibility setup (50% or 100%)",
        "PCIT/CIT approval & certificate issuance",
        "Renewal application for existing 80G approvals",
        "Mandatory 12AB registration prerequisite check",
        "Post-approval donation receipt format guidance",
      ],
      seoContent: `Section 80G registration is a separate approval required by charitable trusts, societies, and NGOs in ${cityName}, ${district}, Maharashtra to enable donors making donations to the trust to claim 50% or 100% income tax deduction under Section 80G while filing their ITR. Unlike 12AB registration (which benefits the trust by exempting its income), 80G registration benefits the donor — making it a powerful fundraising tool for ${cityName} NGOs, educational trusts, and social welfare organizations seeking individual and corporate donations.

80G approval is granted by the Principal Commissioner of Income Tax (PCIT) or Commissioner of Income Tax (CIT) after application in Form 10AC on the income tax e-filing portal. The trust must already have a valid 12AB registration before applying for 80G — the two registrations serve complementary purposes (12AB for trust income exemption, 80G for donor deduction eligibility). The PCIT/CIT evaluates the trust's objects, activities, genuineness, and track record before granting 80G approval.

Taxvio's 80G registration service for ${cityName} trusts covers the complete application process — verifying 12AB registration status, preparing Form 10AC with detailed activity description, past 3 years' audited financial statements, evidence of charitable work (beneficiary data, project reports, impact documentation), filing on the e-filing portal, and following up with the jurisdictional PCIT/CIT office covering ${district} until the formal 80G certificate is issued.

Once your ${cityName} trust receives 80G approval, donors making donations above ₹2,000 (cash donations above ₹2,000 are not eligible for 80G deduction — only cheque, online transfer, or demand draft donations qualify) can claim either 50% or 100% deduction (depending on the specific category under which your trust is approved) subject to qualifying limits (typically 10% of adjusted gross total income). We also provide post-approval guidance on donation receipt format — which must clearly mention the trust's 80G registration number, PAN, and the deductible percentage — to ensure your ${cityName} donors can successfully claim the deduction without issues.`,
    },

    /* ── 13. Form 15G & 15H ── */
    {
      slug: "15g-15h",
      title: `Form 15G & 15H Filing in ${cityName}`,
      price: "₹199",
      timeline: "Same Day",
      icon: "📝",
      gradient: "from-cyan-500 to-teal-600",
      accentBg: "bg-cyan-50",
      accentBorder: "border-cyan-100",
      accentText: "text-cyan-700",
      features: [
        "Form 15G for individuals below 60 years",
        "Form 15H for senior citizens (60 years & above)",
        "Eligibility check — total income below taxable limit",
        "Submission to bank/deductor to prevent TDS",
        "Valid for FD interest, RD interest, NSC interest",
        "Annual renewal required before FY start",
      ],
      seoContent: `Form 15G and Form 15H are self-declaration forms that individuals in ${cityName}, ${district}, Maharashtra can submit to banks, post offices, and other deductors to prevent TDS (Tax Deducted at Source) on interest income from fixed deposits, recurring deposits, National Savings Certificates, and other qualifying sources when their total income for the year is estimated to be below the taxable limit. This prevents unnecessary TDS deduction and the subsequent need to file ITR solely to claim refund of excess TDS.

Form 15G is for resident individuals below 60 years of age whose estimated total income for the financial year (including the interest on which TDS would otherwise be deducted) does not exceed the basic exemption limit — ₹2.5 lakh under the old tax regime or ₹3 lakh under the new default regime effective from FY 2023-24. Form 15H is for resident senior citizens (60 years and above) with income below the taxable limit — ₹3 lakh under the old regime (₹5 lakh for super senior citizens above 80 years) or ₹3 lakh under the new regime.

Taxvio's Form 15G/15H filing service for ${cityName} residents covers eligibility assessment (confirming your total estimated income including salary, pension, FD interest, rental income, and other sources is below the applicable threshold), form preparation with all required details (PAN, Aadhaar, residential address in ${cityName}, estimated total income, estimated income on which TDS would be deducted, previous year's income tax status), and guidance on submission to your bank or deductor.

Form 15G/15H must be submitted at the beginning of each financial year (ideally by April or before the first interest credit/payment) and is valid only for that financial year. If your bank has multiple FDs, you may need to submit separate forms for each FD or a consolidated form covering all FDs, depending on the bank's process. We also advise ${cityName} taxpayers on situations where Form 15G/15H cannot be used — such as when TDS is deducted under sections other than 194A (interest other than securities), when income exceeds the threshold, or when the taxpayer has not filed ITR for the previous 3 assessment years despite being required to do so.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function MaharashtraIncomeTaxCityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const cityData  = getCityData(city);
  const cityName  = cityData?.name     ?? formatCityDisplay(city);
  const district  = cityData?.district ?? cityName;
  const region    = cityData?.region   ?? "Maharashtra";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need income tax services in ${cityName}, ${district}, Maharashtra.`)}`;

  const services = getServiceContent(cityName, district, region);

  const nearbyCities = MH_CITIES
    .filter((c) => c.district === district && slugifyCity(c.name) !== city)
    .slice(0, 6);
  const regionCities = nearbyCities.length < 3
    ? MH_CITIES.filter((c) => c.region === region && slugifyCity(c.name) !== city).slice(0, 6)
    : nearbyCities;

  /* ── JSON-LD ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides ITR filing, TDS returns, tax audit, scrutiny reply, 12A/80G registration, PAN/TAN application services in ${cityName}, ${district}, Maharashtra.`,
    areaServed: [{ "@type": "Place", name: cityName, containedInPlace: { "@type": "State", name: "Maharashtra" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3200" },
    priceRange: "₹199 - ₹9,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",                  item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Income Tax Maharashtra", item: "https://www.taxvio.in/state/maharashtra/income-tax-services" },
      { "@type": "ListItem", position: 3, name: district,                item: `https://www.taxvio.in/state/maharashtra/income-tax-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${cityName} ITR`,       item: `https://www.taxvio.in/state/maharashtra/income-tax-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Income Tax Services in ${cityName}, Maharashtra`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/maharashtra/income-tax-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ITR filing due date for individuals in ${cityName}, Maharashtra?`,
        acceptedAnswer: { "@type": "Answer", text: `For salaried individuals and non-audit cases in ${cityName}, ${district}, the ITR filing due date is 31 July. For businesses requiring tax audit under Section 44AB, the due date is 31 October. Late filing attracts a fee of ₹5,000 (₹1,000 if income below ₹5 lakh).` },
      },
      {
        "@type": "Question",
        name: `Which ITR form should a salaried employee in ${cityName} use?`,
        acceptedAnswer: { "@type": "Answer", text: `Salaried employees in ${cityName} with income only from salary, one house property, and other sources (interest, dividend) should file ITR-1 (Sahaj). If you have capital gains from equity/mutual funds or foreign income, use ITR-2. For freelance/business income, use ITR-3.` },
      },
      {
        "@type": "Question",
        name: `Do ${cityName} businesses need tax audit under Section 44AB?`,
        acceptedAnswer: { "@type": "Answer", text: `Tax audit is mandatory for ${cityName} businesses with turnover above ₹1 crore (₹10 crore if digital payments >95%) or professionals with receipts above ₹50 lakh. The audit report must be filed by 30 September, and ITR by 31 October.` },
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
            style={{ background: "radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                {[
                  { href: "/", label: "Home" },
                  { href: "/state/maharashtra/income-tax-services", label: "Income Tax — Maharashtra" },
                  { href: null, label: cityName },
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
                  <MapPin size={12} className="text-indigo-300 shrink-0" />
                  {cityName}, {district} · Maharashtra · Income Tax Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Return Filing
                  <span className="block mt-2 bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    in {cityName}, Maharashtra
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">ITR filing</strong> for salaried, proprietors, firms, LLPs &amp; companies,{" "}
                  <strong className="text-white">quarterly TDS/TCS returns</strong>, tax audit, scrutiny notice reply,{" "}
                  <strong className="text-white">12A/80G registration</strong>, PAN/TAN application, and Form 15G/15H in{" "}
                  <strong className="text-white">{cityName}, {district}, Maharashtra</strong> —
                  100% online by CA professionals. Starting{" "}
                  <strong className="text-indigo-300">₹799</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA-Assisted" },
                    { icon: Shield,     text: "100% Secure" },
                    { icon: Zap,        text: "24–48 Hr ITR" },
                    { icon: Clock,      text: "Mon–Sat 9AM–7PM" },
                    { icon: Star,       text: "4.9★ Rating" },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                      <Icon size={11} className="text-indigo-300 shrink-0" /> {text}
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

              {/* Right — service menu panel */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}>
                <div className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                  <div>
                    <p className="font-bold text-white text-sm">Income Tax — {cityName}</p>
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
                        <span className="truncate">{svc.title.replace(` in ${cityName}`, "")}</span>
                      </span>
                      <span className="text-[10px] font-bold text-indigo-300 shrink-0 ml-2">{svc.price}</span>
                    </a>
                  ))}
                </div>
                <div className="mx-4 mb-4 mt-2 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Starting Price</p>
                    <p className="text-indigo-300 text-2xl font-extrabold leading-tight">₹799</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">ITR Filed in</p>
                    <p className="text-white text-sm font-bold">24–48 Hrs</p>
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
                { icon: TrendingUp,  label: "3,200+ MH Taxpayers"        },
                { icon: Users,       label: "750+ MH Locations"          },
                { icon: IndianRupee, label: "Transparent Pricing"        },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Icon size={11} className="text-indigo-300 shrink-0" /> {label}
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
              { val: "24–48 Hrs", label: "ITR Filing Time",     icon: Zap          },
              { val: "4.9★",      label: "Average Rating",      icon: Star         },
              { val: "₹799",      label: "Starting Price",      icon: IndianRupee  },
              { val: "13",        label: "Income Tax Services", icon: ClipboardList },
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
                        <BookOpen size={13} /> About This Service in {cityName}
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
                          className="inline-flex items-center gap-2 bg-[#00416a] hover:bg-[#002347] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97]">
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
                            className="inline-flex items-center gap-1.5 bg-[#00416a] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#002347] transition-all">
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why {cityName} Taxpayers Choose Taxvio for Income Tax
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users,       title: "CA-Certified Income Tax Professionals", desc: `Every ITR, TDS return, and tax audit for ${cityName} taxpayers is handled by practising CAs. We understand Maharashtra's income tax ward structure for ${district}.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap,         title: "100% Online — No Office Visit",         desc: `Share Form 16 and documents on WhatsApp from anywhere in ${cityName}. CA review, deduction optimization, e-filing — all delivered remotely.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Calculator,  title: "AIS / TIS Reconciliation",              desc: `We cross-verify Annual Information Statement against your ITR data before filing — preventing income mismatch notices common for ${cityName} taxpayers.`, color: "bg-violet-100 text-violet-700" },
                { icon: AlertCircle, title: "Proactive Scrutiny Management",         desc: `We monitor your PAN for Section 143(2) scrutiny notices and demand notices — alerting you immediately and preparing complete replies for ${district} cases.`, color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹799",         desc: `No hidden consultation fees. Clear, upfront pricing for every income tax service in ${cityName} — quoted before we begin.`, color: "bg-teal-100 text-teal-700" },
                { icon: Building2,   title: "Maharashtra Taxpayer Expertise",        desc: `We understand ${cityName}'s income tax nuances — IT professionals, manufacturing units, traders, and agricultural income declarations across ${district}.`, color: "bg-sky-100 text-sky-700" },
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                How to File ITR in {cityName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Share Documents", desc: "Send Form 16, salary slips, investment proofs on WhatsApp" },
                { step: "02", title: "CA Review", desc: "Our CA team reviews and optimizes deductions within 24 hours" },
                { step: "03", title: "E-Filing", desc: "We file your ITR on the income tax portal and send acknowledgement" },
                { step: "04", title: "E-Verification", desc: "Complete e-verification via Aadhaar OTP. Process complete in 24–48 hours" },
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">FAQ</span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">Income Tax FAQs for {cityName} Taxpayers</h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `What is the ITR filing due date for individuals in ${cityName}, Maharashtra?`,
                  a: `For salaried individuals and non-audit cases in ${cityName}, ${district}, the ITR filing due date is 31 July. For businesses requiring tax audit under Section 44AB, the due date is 31 October. Late filing attracts a fee of ₹5,000 (₹1,000 if income below ₹5 lakh).`,
                },
                {
                  q: `Which ITR form should a salaried employee in ${cityName} use?`,
                  a: `Salaried employees in ${cityName} with income only from salary, one house property, and other sources (interest, dividend) should file ITR-1 (Sahaj). If you have capital gains from equity/mutual funds or foreign income, use ITR-2. For freelance/business income, use ITR-3.`,
                },
                {
                  q: `Do ${cityName} businesses need tax audit under Section 44AB?`,
                  a: `Tax audit is mandatory for ${cityName} businesses with turnover above ₹1 crore (₹10 crore if digital payments >95%) or professionals with receipts above ₹50 lakh. The audit report must be filed by 30 September, and ITR by 31 October.`,
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

        {/* ════════ NEARBY CITIES ════════ */}
        {regionCities.length > 0 && (
          <section className="py-14 bg-[#f8fbfd] border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-indigo-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">{district} &amp; {region}</p>
                  <h2 className="text-lg font-extrabold text-gray-800">Income Tax Services in Nearby Maharashtra Cities</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link key={c.name}
                    href={`/state/maharashtra/income-tax-services/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    ITR in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/maharashtra/income-tax-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00416a]/30 bg-indigo-50 px-4 py-2 text-sm font-bold text-[#00416a] hover:shadow-sm transition-all">
                  View All Maharashtra Cities <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
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
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-indigo-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-indigo-300" />
                  Serving income tax clients in {cityName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Expert Income Tax Help in {cityName}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  ITR filing for salaried, proprietors, firms, companies, quarterly TDS/TCS returns, tax audit, scrutiny reply, 12A/80G, PAN/TAN —
                  all delivered online for taxpayers in {cityName}, {district}. Starting ₹799. CA-assisted, same-day WhatsApp response.
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