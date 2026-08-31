// app/state/gujarat/income-tax-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, BookOpen, ClipboardList,
  Calculator, Briefcase, Building2, Receipt, Package,
} from "lucide-react";
import {
  GJ_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay,
} from "@/data/gj-cites";

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
    title: `Income Tax Filing Services in ${cityName}, Gujarat | ITR, TDS & Tax Audit - Taxvio`,
    description: `Professional ITR filing for individuals, businesses, firms & companies in ${cityName}, ${district}, Gujarat. TDS returns, tax audit under Section 44AB, scrutiny assistance, 12A/80G trust registration, PAN/TAN services. CA-guided from ₹799. Filed in 24-48 hours.`,
    keywords: [
      `income tax filing ${cityName}`,
      `ITR return ${cityName} Gujarat`,
      `TDS filing ${cityName} ${district}`,
      `tax audit services ${cityName}`,
      `CA for income tax ${cityName}`,
      `business tax filing ${cityName}`,
      `ITR consultant ${cityName} Gujarat`,
      `12A 80G registration ${cityName}`,
      `tax notice reply ${cityName}`,
      `PAN card ${district} Gujarat`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/gujarat/income-tax-services/${city}` },
    openGraph: {
      title: `Income Tax Services ${cityName}, Gujarat | Taxvio`,
      description: `Expert ITR filing, TDS returns & tax compliance in ${cityName}, ${district} — CA-assisted from ₹799. Online ITR filing in 24-48 hours.`,
      url: `https://www.taxvio.in/state/gujarat/income-tax-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `Income Tax Services ${cityName}, Gujarat | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(cityName: string, district: string, region: string) {
  return [

    /* ── 1. PAN Card ── */
    {
      slug: "pan-card-application",
      title: `PAN Card Services in ${cityName}`,
      price: "₹199",
      timeline: "3–5 Working Days",
      icon: "🪪",
      gradient: "from-slate-600 to-gray-700",
      accentBg: "bg-slate-50",
      accentBorder: "border-slate-200",
      accentText: "text-slate-700",
      features: [
        "Fresh PAN application for residents & businesses",
        "PAN update for name, DOB, address corrections",
        "Duplicate PAN card for lost/damaged cards",
        "Online submission via NSDL/UTI portals",
        "PAN verification for ${cityName} entities",
        "Complete tracking until delivery",
      ],
      seoContent: `Permanent Account Number (PAN) is the foundational identity document for tax compliance in ${cityName}, ${district}, Gujarat. Whether you're a small trader in ${cityName} market, an entrepreneur launching a startup, or a salaried professional working in Gujarat's thriving industrial sector, obtaining a valid PAN is the first critical step toward meeting your income tax obligations and accessing formal financial services.

In ${cityName}, PAN is mandatory for filing income tax returns, opening current or savings bank accounts, investing in mutual funds or equity markets, purchasing property valued above ₹10 lakh, and conducting high-value cash transactions that trigger reporting requirements. Without a valid PAN, you cannot claim tax deductions, file ITR for refunds, or operate transparently in Gujarat's regulated business environment — which is particularly important given the state's strong emphasis on industrial growth and entrepreneurship.

Taxvio's PAN application service covers end-to-end processing for ${cityName} residents and businesses — preparing Form 49A for Indian citizens or Form 49AA for foreign nationals, uploading mandatory documents (Aadhaar for identity and address proof specific to ${cityName}, date of birth certificate, recent photograph), submitting through NSDL or UTI-ITSL authorized portals, generating acknowledgement slip, and actively tracking application status until the physical PAN card is dispatched to your ${cityName} address within 3–5 working days.

For existing PAN holders in ${cityName} requiring updates — common scenarios include name correction after marriage or legal name change, address update following relocation within Gujarat (especially common for professionals moving between Ahmedabad, Surat, Vadodara, and Rajkot), or date of birth correction due to errors in original application — we file correction requests in Form 49A with appropriate supporting documents and coordinate with processing centers until the updated PAN is issued and reflects accurate information in income tax databases.

Businesses in ${cityName} — including proprietorships, partnership firms, LLPs, private limited companies, and public limited companies — also require PAN for GST registration, TDS/TCS compliance, opening business bank accounts, and vendor registration with government departments and large corporate clients. We handle bulk PAN applications for firms registering multiple partners or directors, ensuring each individual PAN is linked correctly to the business entity. PAN verification services are also provided to ${cityName} employers and businesses needing to validate vendor PANs, employee PANs, or deductee PANs before processing TDS deductions — preventing future compliance disputes and ensuring accurate tax credit matching for stakeholders.`,
    },

    /* ── 2. TAN Registration ── */
    {
      slug: "tan-registration",
      title: `TAN Registration for ${cityName} Businesses`,
      price: "₹299",
      timeline: "3–7 Working Days",
      icon: "🔢",
      gradient: "from-zinc-600 to-slate-700",
      accentBg: "bg-zinc-50",
      accentBorder: "border-zinc-200",
      accentText: "text-zinc-700",
      features: [
        "New TAN for employers & tax deductors",
        "Form 49B online filing via NSDL",
        "TAN allotment within one week",
        "Correction in existing TAN records",
        "Mandatory for TDS/TCS filers",
        "Post-allotment compliance guidance",
      ],
      seoContent: `Tax Deduction and Collection Account Number (TAN) is a 10-digit alphanumeric identifier mandatory for all employers, businesses, and entities in ${cityName}, ${district}, Gujarat that deduct Tax Deducted at Source (TDS) from payments made to employees, contractors, vendors, or service providers, or collect Tax Collected at Source (TCS) on specified goods sales. Without a valid TAN, you cannot file quarterly TDS returns (Form 24Q for salary TDS, Form 26Q for non-salary TDS, Form 27Q for foreign payment TDS) or issue valid TDS certificates to deductees.

In ${cityName}'s dynamic business environment — which includes manufacturing units, trading firms, service providers, IT companies, and professional consultancies — TAN is critical for tax compliance and business credibility. Employers hiring staff in ${cityName} must deduct TDS on salary payments under Section 192 if annual salary exceeds the basic exemption limit, and businesses engaging contractors or consultants must deduct TDS under Section 194C (contractors) or Section 194J (professional fees) when payments exceed specified thresholds. Similarly, landlords receiving commercial rent above ₹2.4 lakh annually, or tenants paying such rent, must obtain TAN for TDS compliance under Section 194I.

Taxvio's TAN registration service for ${cityName} entities covers complete Form 49B preparation — capturing entity name and registered office address in ${cityName}, authorized signatory's PAN and contact details, nature of business or activity, estimated annual TDS/TCS liability — and online submission through the NSDL TIN-FC portal. We upload supporting documents (PAN of the applicant entity, address proof for the ${cityName} office such as electricity bill or rent agreement, and identity proof of the responsible person) and track the application until TAN is allotted, typically within 3–7 working days. The TAN allotment letter is then shared electronically, enabling immediate commencement of TDS compliance activities.

For ${cityName} businesses that have relocated their registered office, changed their legal name (due to rebranding, merger, or conversion from proprietorship to LLP/company), or appointed a new authorized signatory, we handle TAN correction applications to ensure TAN records match current business details. Accurate TAN-PAN linkage is essential to prevent rejection of quarterly TDS returns and ensure smooth processing of TDS certificates — particularly important for ${cityName} businesses serving clients across India who rely on timely Form 16A issuance for their own tax filing.`,
    },

    /* ── 3. ITR — Salaried Individuals ── */
    {
      slug: "itr-salaried-employees",
      title: `ITR Filing for Salaried Professionals in ${cityName}`,
      price: "₹799",
      timeline: "24–48 Hours",
      icon: "👔",
      gradient: "from-blue-600 to-indigo-700",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-200",
      accentText: "text-blue-700",
      features: [
        "ITR-1 or ITR-2 based on income profile",
        "Form 16 analysis & TDS reconciliation",
        "Deduction optimization (80C/80D/HRA)",
        "AIS/TIS cross-verification before filing",
        "Support for multiple employers",
        "E-verification within statutory timeline",
      ],
      seoContent: `Income tax return filing is mandatory for salaried professionals in ${cityName}, ${district}, Gujarat earning gross total income exceeding ₹2.5 lakh (old tax regime) or ₹3 lakh (new default tax regime effective from FY 2023-24). For employees working in Gujarat's vibrant sectors — including pharmaceuticals in Vadodara and Ankleshwar, petrochemicals in Jamnagar, textiles in Surat, diamond and gems in ${cityName}, IT and engineering services in Ahmedabad and Gandhinagar, and FMCG manufacturing across the state — accurate ITR filing ensures full tax credit for TDS deducted by employers and maximizes legitimate deductions to reduce final tax liability.

Taxvio's ITR filing service for ${cityName} salaried employees begins with comprehensive Form 16 verification. We review Part A (employer details, employee PAN, quarterly TDS deducted and deposited under challan with BSR codes) and Part B (detailed salary breakup showing basic salary, dearness allowance, HRA, LTA, perquisites, professional tax deducted, standard deduction of ₹50,000, and employer-reported deductions under Chapter VI-A). We cross-check Form 16 data against actual bank credits to identify any discrepancies — such as delayed salary credit, bonus payments not reflected in Form 16, or employer-side errors in deduction computation — and advise corrective action before filing.

Deduction optimization is central to reducing tax liability for ${cityName} professionals. We maximize claims under Section 80C (investments in Public Provident Fund, Equity Linked Savings Schemes, National Savings Certificates, life insurance premiums, home loan principal repayment, children's tuition fees, up to ₹1.5 lakh aggregate limit), Section 80D (health insurance premiums up to ₹25,000 for self/spouse/children, additional ₹25,000 for parents below 60 years, or ₹50,000 for senior citizen parents, totaling up to ₹75,000 for comprehensive family coverage), and HRA exemption (especially important for ${cityName} employees living in rented accommodation, where exemption is computed as the least of actual HRA received, rent paid minus 10% of basic salary, or 40% of basic salary since ${cityName} is classified as a non-metro city for HRA computation purposes).

For ${cityName} professionals who changed jobs during the financial year — a common scenario in Gujarat's mobile talent market — we consolidate Form 16 from all employers, ensure complete salary income is reported without omission, verify that total TDS claimed matches the sum across all employers, and reconcile your Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) to capture third-party reported data such as interest from savings accounts and fixed deposits, dividend income from equity holdings, and capital gains from mutual fund redemptions. This comprehensive approach prevents automated mismatch notices that can delay refund processing or trigger unnecessary scrutiny inquiries. Whether you're a chemical engineer in Vadodara, a diamond grader in Surat, or an IT professional in Gandhinagar, our CA-reviewed ITR ensures accurate reporting, maximum tax savings, and timely e-verification.`,
    },

    /* ── 4. ITR — Business Owners ── */
    {
      slug: "itr-business-proprietor",
      title: `Business ITR Filing in ${cityName}`,
      price: "₹999",
      timeline: "2–3 Days",
      icon: "🏪",
      gradient: "from-violet-600 to-purple-700",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-200",
      accentText: "text-violet-700",
      features: [
        "ITR-3 or ITR-4 depending on turnover",
        "Complete P&L and balance sheet preparation",
        "Presumptive taxation advisory (44AD/44ADA)",
        "Business expense deduction maximization",
        "Tax audit threshold assessment",
        "GST-ITR reconciliation for traders",
      ],
      seoContent: `Income tax return filing for business owners, proprietors, traders, manufacturers, and self-employed professionals in ${cityName}, ${district}, Gujarat involves specialized compliance requirements distinct from salaried individuals. Whether you operate a textile trading unit, run a chemical manufacturing facility, provide professional consultancy services, or manage a retail store in ${cityName}'s commercial areas, selecting the correct ITR form and accurately computing business income is essential to avoid penalties and optimize tax liability.

Gujarat's business ecosystem is highly diverse — from small traders in local markets to large-scale manufacturers exporting globally. For proprietors in ${cityName} with annual turnover or gross receipts below ₹2 crore (for business under Section 44AD) or ₹50 lakh (for specified professions under Section 44ADA), presumptive taxation offers significant compliance relief. Under this scheme, you declare a deemed profit percentage (8% of turnover for digital receipts or 6% for cash receipts under 44AD; 50% of gross receipts under 44ADA for professionals like architects, doctors, engineers, lawyers, and chartered accountants) without maintaining detailed books of accounts. This approach simplifies record-keeping and allows filing in ITR-4 (Sugam), drastically reducing documentation burden.

However, presumptive taxation is not always advantageous. If your actual business expenses exceed the deemed profit rate — common for capital-intensive businesses or those with high operating costs — you forfeit the ability to claim actual expenses and may end up paying higher tax than necessary. Additionally, once you opt for presumptive taxation, you must continue for at least five consecutive years; exiting early (to claim actual expenses) disqualifies you from re-entering the scheme for the next five years. Taxvio provides detailed advisory on whether presumptive taxation suits your ${cityName} business profile, comparing projected tax liability under both regimes before recommending the optimal approach.

For ${cityName} businesses maintaining regular books and filing ITR-3, we prepare comprehensive Profit & Loss accounts showing gross revenue (including GST-exclusive turnover that must reconcile with GSTR filings to prevent income tax-GST mismatch notices), direct costs (raw material purchases, freight inward, wages), indirect expenses (rent for ${cityName} office or warehouse, utilities, salaries, marketing, repairs, insurance, depreciation on plant and machinery), and net profit before tax. We also prepare balance sheets detailing assets (stock-in-trade, debtors, cash and bank balances, fixed assets like machinery and vehicles) and liabilities (creditors, loans from banks or partners, proprietor's capital account), which are mandatory schedules in ITR-3.

Tax audit applicability under Section 44AB is critical for ${cityName} businesses — mandatory when turnover exceeds ₹1 crore (₹10 crore if at least 95% of transactions are conducted digitally via banking channels) or when a business previously opting for presumptive taxation reports profit below the deemed percentage. We assess your audit requirement well in advance, coordinate with our empaneled Chartered Accountants to complete the audit by 30 September, and ensure timely ITR filing by 31 October to avoid late filing penalties and loss of carry-forward rights for business losses and unabsorbed depreciation.`,
    },

    /* ── 5. ITR — Firms & LLPs ── */
    {
      slug: "itr-partnership-llp",
      title: `Partnership Firm & LLP ITR in ${cityName}`,
      price: "₹1,999",
      timeline: "3–5 Days",
      icon: "🤝",
      gradient: "from-teal-600 to-cyan-700",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-200",
      accentText: "text-teal-700",
      features: [
        "ITR-5 for all partnership firms & LLPs",
        "Partner capital & current account reconciliation",
        "Remuneration under Section 40(b) compliance",
        "Interest to partners — 12% limit verification",
        "Coordination with tax audit (if applicable)",
        "Due date: 31 July (non-audit) / 31 Oct (audit)",
      ],
      seoContent: `Partnership firms and Limited Liability Partnerships (LLPs) operating in ${cityName}, ${district}, Gujarat face unique income tax compliance requirements that differ significantly from sole proprietorships and companies. Partnership entities are taxed at a flat 30% rate (plus applicable surcharge and 4% cess) on their income, and must file ITR-5, which requires detailed disclosure of partner-wise capital contributions, profit-sharing ratios, remuneration and interest paid to partners, and comprehensive schedules of income, expenses, assets, and liabilities.

Gujarat's business landscape includes numerous partnership firms — especially in trading, manufacturing, real estate development, professional services (law firms, CA firms, medical practices), and family-run businesses across ${cityName}, ${district}, and surrounding areas. Unlike companies where director remuneration is governed by the Companies Act, partner remuneration in firms is governed by Section 40(b) of the Income Tax Act, which specifies maximum allowable limits. For book profit up to ₹3 lakh, allowable remuneration is ₹1.5 lakh or 90% of book profit (whichever is higher); for book profit between ₹3 lakh and ₹10 lakh, it is ₹1.5 lakh plus 60% of the amount exceeding ₹3 lakh; for book profit above ₹10 lakh, it is ₹5.7 lakh plus 60% of the amount exceeding ₹10 lakh. Any remuneration paid beyond these limits is disallowed and added back to firm income, increasing tax liability.

Taxvio's ITR-5 filing service for ${cityName} partnership firms and LLPs begins with partner capital account reconciliation — verifying opening balances as of 1 April, additional capital introduced during the year, withdrawals or drawings taken by partners, profit or loss allocated per the partnership deed's specified ratio, salary or remuneration paid to working partners, interest on capital paid to partners (if authorized by the deed and not exceeding 12% simple interest per annum), and closing balances as of 31 March. Each partner's capital account and current account must be accurately maintained to ensure ITR-5 schedules reflect correct data and prevent scrutiny queries.

We prepare detailed Profit & Loss accounts showing all sources of income (business profits, rental income from firm-owned property, interest income, capital gains from sale of firm assets) and allowable expenses, ensuring claimed deductions comply with income tax provisions. Balance sheets are prepared showing firm assets (cash, bank balances, inventory, fixed assets like machinery and real estate, trade receivables), firm liabilities (trade payables, bank loans, partner capital and current accounts), and complete notes to accounts. For ${cityName} firms with turnover exceeding ₹1 crore or professional firms with gross receipts above ₹50 lakh, tax audit under Section 44AB is mandatory — we coordinate audit completion by 30 September and ensure Form 3CD (tax audit report) and ITR-5 are filed by 31 October. Whether your ${cityName} firm is engaged in diamond trading, chemical manufacturing, textile exports, or professional consultancy, our structured approach ensures partner compliance, accurate tax computation, and statutory deadline adherence.`,
    },

    /* ── 6. ITR — Companies & Trusts ── */
    {
      slug: "itr-company-trust",
      title: `Company & Trust ITR Filing in ${cityName}`,
      price: "₹2,999",
      timeline: "5–7 Days",
      icon: "🏢",
      gradient: "from-emerald-600 to-green-700",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-200",
      accentText: "text-emerald-700",
      features: [
        "ITR-6 for private & public limited companies",
        "ITR-7 for charitable trusts & Section 8 companies",
        "MAT computation under Section 115JB",
        "Section 11/12 exemption for trusts",
        "Statutory audit & Form 3CD coordination",
        "Due date: 31 October for all audited entities",
      ],
      seoContent: `Private limited companies, public limited companies, charitable trusts, societies, and Section 8 companies (not-for-profit) in ${cityName}, ${district}, Gujarat have specialized income tax return filing requirements governed by distinct ITR forms and compliance frameworks. Companies file ITR-6, while trusts and non-profit entities file ITR-7 — both requiring extensive disclosures, statutory audit reports, and adherence to specific tax computation rules that differ from individual and partnership taxation.

Gujarat is home to a thriving corporate sector, with thousands of private limited companies operating in manufacturing, IT services, trading, infrastructure development, and professional services across ${cityName}, Ahmedabad, Surat, Vadodara, and Rajkot. Companies are taxed at 25% (for domestic companies with turnover up to ₹400 crore in the previous year) or 30% (for companies exceeding this threshold), plus applicable surcharge based on income level and 4% health and education cess. Additionally, companies must compute Minimum Alternate Tax (MAT) under Section 115JB — levied at 15% of book profit as per audited financial statements when book profit exceeds tax profit computed under normal provisions, ensuring that companies showing high accounting profits but low taxable income due to depreciation and deductions still pay a minimum level of tax.

Taxvio's ITR-6 filing service for ${cityName} companies covers end-to-end corporate tax compliance — preparing detailed income computation under all heads (profits from business or profession, income from house property, capital gains, income from other sources), computing depreciation on assets per Income Tax Act rates (which often differ from Companies Act depreciation), calculating MAT and maintaining MAT credit register for set-off in future years (MAT credit can be carried forward for 15 years and set off against regular income tax when normal tax liability exceeds MAT liability), and coordinating with the company's statutory auditor to ensure income tax audit report (Form 3CD, mandatory for all companies) and financial statements align perfectly with ITR-6 data.

For charitable trusts, religious trusts, educational institutions, and Section 8 companies operating in ${cityName} with objectives of public welfare, education, medical relief, or poverty alleviation, ITR-7 filing requires computing income eligible for exemption under Section 11 and Section 12. Income applied for charitable purposes (with up to 15% allowed for administrative expenses) is exempt, provided the trust holds valid registration under Section 12AB (previously 12A/12AA before April 2021 amendments) and files annual activity report in Form 10B by the due date. We verify that your ${cityName} trust's 12AB registration is active, ensure the trust is not engaged in prohibited activities (commercial business not incidental to charitable objects, accumulation beyond 15% without filing Form 10 for specific approval), and correctly report corpus donations separately from income donations, which are treated differently for exemption computation.

All companies and trusts in ${cityName} require statutory audit under the Companies Act and tax audit under Section 44AB respectively, regardless of turnover. We coordinate the complete audit and filing cycle — preparation and board/trustee approval of financial statements, audit report issuance by 30 September, ITR preparation with all mandatory schedules (including detailed director remuneration disclosure for companies, and trust fund utilization details for trusts), portal filing by 31 October, and post-filing monitoring until the Centralized Processing Centre (CPC) issues the processing intimation confirming acceptance of the return.`,
    },

    /* ── 7. TDS Return Filing ── */
    {
      slug: "tds-return-quarterly",
      title: `TDS Return Filing Services in ${cityName}`,
      price: "₹999/quarter",
      timeline: "Due 31st Jul/Oct/Jan/May",
      icon: "📋",
      gradient: "from-amber-600 to-orange-700",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-200",
      accentText: "text-amber-700",
      features: [
        "Form 24Q — salary TDS (Section 192)",
        "Form 26Q — non-salary TDS (all sections)",
        "Form 27Q — TDS on payments to non-residents",
        "Challan-deductee reconciliation",
        "Form 16/16A issuance post-filing",
        "TRACES monitoring & defect resolution",
      ],
      seoContent: `Quarterly TDS return filing is a statutory obligation for all employers, businesses, and deductors in ${cityName}, ${district}, Gujarat that deduct tax at source from any specified payment — including salary to employees, contractor payments, professional fees to consultants, rent to landlords, interest on deposits or loans, commission to agents, and numerous other categories covered under Chapter XVII-B of the Income Tax Act. TDS returns are filed in Form 24Q (salary TDS under Section 192), Form 26Q (non-salary payments under sections including 194A for interest, 194C for contractors, 194H for commission, 194I for rent, 194J for professional/technical fees, and many others), and Form 27Q (payments to non-residents requiring TDS under Section 195).

The quarterly TDS return filing due dates applicable to ${cityName} deductors are: 31 July for Q1 (April–June), 31 October for Q2 (July–September), 31 January for Q3 (October–December), and 31 May for Q4 (January–March). Late filing attracts a mandatory penalty of ₹200 per day under Section 234E, with the total penalty capped at the actual TDS amount — significantly increasing compliance costs for delayed filers. Persistent non-filing or incorrect filing can also result in prosecution under Section 276B and penalties up to ₹1 lakh under Section 271H, making timely and accurate TDS return filing critical for Gujarat businesses.

Taxvio's TDS return preparation service for ${cityName} employers and businesses covers comprehensive compliance management — challan reconciliation to match each OLTAS challan's BSR code, date, and amount with the TDS liability being reported in the return; PAN verification for all deductees (employees, vendors, landlords) to ensure valid PANs are captured and prevent higher TDS deduction rates and return rejection; section-wise classification of each payment (correctly identifying whether a payment falls under Section 194C, 194J, 194I, or other applicable sections based on the nature of payment and payee status); TDS rate verification to ensure correct rates are applied (considering deductee PAN availability, threshold exemptions, and special rates for senior citizens or specified categories); and generation of the TDS statement file using NSDL's Return Preparation Utility (RPU) software, followed by File Validation Utility (FVU) validation and secure upload to the TRACES portal.

After successful filing and acceptance by TRACES (typically confirmed within 7–10 days after submission), we generate TDS certificates — Form 16 for salary TDS (annual consolidated certificate covering all four quarters, due by 31 May following the financial year end) and Form 16A for non-salary TDS (quarterly certificates, due within 15 days after quarterly return filing) — and deliver these digitally signed certificates to your ${cityName} employees, contractors, vendors, and other deductees. These certificates enable deductees to claim TDS credit while filing their ITR, completing the tax compliance cycle. We also monitor TRACES processing status, promptly address any defect notices or data mismatch queries raised by the income tax department, and ensure your ${cityName} entity maintains full TDS compliance without disruption.`,
    },

    /* ── 8. TCS Return Filing ── */
    {
      slug: "tcs-return-quarterly",
      title: `TCS Return Filing in ${cityName}`,
      price: "₹999/quarter",
      timeline: "Due 15th After Quarter End",
      icon: "🧮",
      gradient: "from-orange-600 to-red-600",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-200",
      accentText: "text-orange-700",
      features: [
        "Form 27EQ for all TCS transactions",
        "Section 206C compliance (scrap, minerals, etc.)",
        "Overseas remittance & tour package TCS",
        "Collectee PAN validation",
        "Form 27D certificate generation",
        "TRACES tracking until acceptance",
      ],
      seoContent: `Tax Collected at Source (TCS) return filing is mandatory for businesses and sellers in ${cityName}, ${district}, Gujarat that collect tax under Section 206C on sale of specified goods and services — including scrap materials (metal, plastic, paper, rubber), minerals (coal, lignite, iron ore, manganese ore), timber obtained from forests, tendu leaves, forest produce (except timber and tendu leaves), alcoholic liquor for human consumption, parking lot and toll plaza services, sale of motor vehicles exceeding ₹10 lakh, and most significantly for urban centers like ${cityName}, overseas remittances under the Liberalized Remittance Scheme (LRS) exceeding ₹7 lakh per financial year and sale of overseas tour packages above ₹7 lakh per financial year.

TCS compliance is particularly relevant for ${cityName} businesses engaged in metal recycling and scrap trading (major scrap collection hubs across Gujarat require 1% TCS on scrap sales), automobile dealerships selling premium vehicles (luxury car sales above ₹10 lakh attract TCS), and travel agencies arranging foreign tours and education consultancies facilitating overseas education (both subject to 5% TCS on amounts exceeding ₹7 lakh). The quarterly TCS return due dates are 15 July (Q1 — April to June), 15 October (Q2 — July to September), 15 January (Q3 — October to December), and 15 May (Q4 — January to March) — one quarter after the end of each quarter, distinct from TDS return due dates which fall at month-end.

Taxvio's TCS return filing service for ${cityName} collectors covers computation of TCS liability under the applicable section and rate (1% on scrap sale, 5% on timber, 1% on sale of motor vehicles above ₹10 lakh, 5% on LRS remittances above ₹7 lakh, and other specified rates), challan reconciliation to ensure each TCS payment made during the quarter is accurately reflected in Form 27EQ, collectee PAN verification to avoid the higher 5% TCS rate that applies when the buyer's PAN is not available or is invalid, and preparation of the TCS statement using the TCS Return Preparation Utility (SPU) software prescribed by NSDL, followed by FVU validation and TRACES portal upload.

After successful TCS return filing and TRACES acceptance, we generate Form 27D — the TCS certificate issued to each buyer/collectee, which is equivalent to Form 16A for TDS and enables the buyer to claim credit for TCS collected when filing their income tax return. Form 27D must be issued within 15 days of TCS return filing. For ${cityName} businesses dealing with multiple buyers — such as scrap traders selling to numerous collectors or travel agencies servicing many clients — we handle bulk Form 27D generation and distribution, ensuring timely certificate delivery and buyer satisfaction. Whether your ${cityName} business is in scrap trading, automobile sales, or travel services, our TCS compliance framework ensures accurate tax collection, timely return filing, proper certificate issuance, and full regulatory adherence.`,
    },

    /* ── 9. Tax Audit Under 44AB ── */
    {
      slug: "tax-audit-section-44ab",
      title: `Tax Audit Services in ${cityName}`,
      price: "₹8,999",
      timeline: "Before 30th September",
      icon: "🔎",
      gradient: "from-rose-600 to-pink-700",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-200",
      accentText: "text-rose-700",
      features: [
        "Audit applicability assessment under Section 44AB",
        "Form 3CA/3CB audit report by practicing CA",
        "Form 3CD — 44-clause detailed annexure",
        "Books review & financial statement reconciliation",
        "Transfer pricing & MSME reporting",
        "Audit report filing by 30th September",
      ],
      seoContent: `Income tax audit under Section 44AB is a mandatory compliance requirement for businesses in ${cityName}, ${district}, Gujarat with annual gross turnover exceeding ₹1 crore (₹10 crore if cash receipts and payments are below 5% of total receipts and payments respectively) and for professionals with gross receipts exceeding ₹50 lakh during the financial year. Tax audit must be conducted by a practicing Chartered Accountant who examines the books of accounts, verifies compliance with accounting standards and income tax provisions, and certifies the correctness of income computation and deductions claimed. The audit report must be uploaded on the income tax e-filing portal by 30 September of the assessment year, ahead of the ITR filing due date of 31 October for audit cases.

Gujarat's industrial and commercial landscape includes thousands of businesses requiring tax audit — manufacturing units in GIDC industrial estates across ${cityName}, ${district}, and neighboring areas, trading firms engaged in domestic and export commerce, service providers in IT/ITES sectors, professional firms (medical clinics, law practices, architectural consultancies, chartered accountant firms), and retail chains. For these entities, tax audit is not merely a compliance formality — it is a comprehensive financial health check that identifies accounting errors, ensures accurate profit computation, validates depreciation claims, confirms deduction eligibility, and prevents future scrutiny issues by pre-emptively addressing potential red flags in the ITR.

Taxvio's tax audit service for ${cityName} businesses begins with audit applicability assessment — confirming whether your business crosses the turnover threshold, verifying the digital payment percentage (since transactions conducted via banking channels — NEFT, RTGS, cheques, UPI, credit/debit cards — count toward the 95% threshold that raises the audit exemption limit from ₹1 crore to ₹10 crore), and determining whether you have claimed profit below the deemed rate under presumptive taxation in the previous year (which mandates audit even if turnover is below the threshold). Once audit requirement is confirmed, we coordinate the audit process — reviewing your books of accounts (cash book, sales and purchase registers, stock records, ledgers, trial balance), financial statements (Profit & Loss account, Balance Sheet, notes to accounts), and supporting vouchers to ensure data integrity and completeness.

The tax audit report consists of two parts: Form 3CA or Form 3CB (the main audit certificate confirming that books have been audited and accounts present a true and fair view) and Form 3CD (a detailed 44-clause annexure requiring disclosures on accounting methods, stock valuation, depreciation computation methodology, capital vs. revenue expenditure classification, related party transactions, payments to specified persons like directors/partners, dues to micro and small enterprises outstanding beyond 45 days, provision for doubtful debts, disallowances under various sections, deemed income inclusions, and transfer pricing compliance for international or specified domestic transactions). Our empaneled Chartered Accountants conduct thorough audits, prepare Form 3CA/3CB and Form 3CD with complete supporting schedules, coordinate CA attestation and UDIN (Unique Document Identification Number) generation, and upload the audit report on the e-filing portal by 30 September. Failure to obtain and file the tax audit report attracts a penalty of ₹1.5 lakh under Section 271B (₹1.5 lakh even if the delay is by a single day), making timely audit completion critical for ${cityName} businesses.`,
    },

    /* ── 10. Scrutiny Notice Reply ── */
    {
      slug: "scrutiny-notice-reply",
      title: `Income Tax Scrutiny Assistance in ${cityName}`,
      price: "₹1,999",
      timeline: "Within 30-Day Notice Period",
      icon: "⚖️",
      gradient: "from-red-600 to-rose-700",
      accentBg: "bg-red-50",
      accentBorder: "border-red-200",
      accentText: "text-red-700",
      features: [
        "Analysis of Section 143(2) scrutiny notice",
        "Section 156 demand notice review & response",
        "AIS/TIS mismatch resolution strategies",
        "Capital gains & rental income defense",
        "Comprehensive written reply with evidence",
        "NFAC/CIT(A) hearing representation",
      ],
      seoContent: `Income tax scrutiny notices are becoming increasingly common for taxpayers in ${cityName}, ${district}, Gujarat as the Income Tax Department's automated risk assessment systems — particularly the Computer-Aided Scrutiny Selection (CASS) framework and the detailed Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) cross-verification mechanisms — identify discrepancies between filed ITR data and third-party financial information reported by banks, mutual fund houses, stock brokers, property registrars, and other reporting entities. Common scrutiny triggers for ${cityName} taxpayers include high-value property transactions (especially real estate purchases in ${district} not matching stamp duty valuation reported by sub-registrar offices), capital gains from sale of equity shares and mutual funds under-reported or computed incorrectly (missing indexation benefits for long-term gains or claiming exempt income that doesn't qualify), business income reported in ITR significantly lower than GST turnover declared in GSTR filings (raising business suppression red flags), foreign remittances under LRS not supported by disclosed income sources, and large deductions under Section 80C, 80D, or 80G without adequate documentary proof.

Section 143(2) is the formal scrutiny notice issued by the Assessing Officer (now typically routed through the National Faceless Assessment Centre or NFAC as part of the faceless assessment scheme) requiring the taxpayer to produce books of accounts, bank statements, investment proofs, property purchase/sale documents, and other evidence to substantiate the income, deductions, and exemptions declared in the filed ITR. The notice allows a response period (typically 30 days, extendable upon request with valid reasons), and failure to respond results in a best-judgement assessment under Section 144, where the Assessing Officer estimates income based on available information and often disallows claimed deductions entirely — resulting in significantly higher tax liability that is far more difficult and costly to contest at appellate stages.

Taxvio's scrutiny notice reply service for ${cityName} taxpayers follows a structured defense strategy — analyzing the specific discrepancy or query mentioned in the notice (income source mismatch, unexplained cash deposit in bank account, excess deduction claimed without proof, capital gains computation error, rental income not disclosed despite property ownership), reviewing your filed ITR alongside all supporting documents (salary slips, Form 16, investment certificates, property sale deed, bank statements, rent receipts), identifying genuine errors versus interpretation differences, preparing a detailed written response with annexures addressing each query point-by-point, and submitting through the compliance portal within the stipulated deadline. For cases where documentary evidence is incomplete or genuinely unavailable, we advise on alternative substantiation methods and negotiate reasonable settlement positions with the Assessing Officer.

Section 156 demand notices — issued after completion of assessment under Section 143(3) or after rectification under Section 154 — require payment of the demanded tax, interest, and penalty within 30 days, failing which recovery proceedings can be initiated (attachment of bank accounts, garnishment of receivables, property attachment). We review demand notices for computational errors, incorrect application of provisions, or procedural irregularities, and advise on whether to pay the demand under protest and file an appeal to the Commissioner of Income Tax (Appeals) [CIT(A)], or to contest the demand directly through rectification application under Section 154 if the error is apparent on record. For ${cityName} taxpayers facing NFAC personal hearings (conducted virtually via video conference), we provide representation services — appearing on behalf of the taxpayer, presenting documentary evidence, responding to queries in real-time, and ensuring your case is defended effectively at every stage of the assessment and appellate process.`,
    },

    /* ── 11. 12A/12AB Registration ── */
    {
      slug: "12a-12ab-registration",
      title: `12A/12AB Registration for Trusts in ${cityName}`,
      price: "₹2,999",
      timeline: "30–60 Days",
      icon: "🎗️",
      gradient: "from-sky-600 to-blue-700",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-200",
      accentText: "text-sky-700",
      features: [
        "Form 10A application for new 12AB registration",
        "Re-registration for old 12A/12AA approved trusts",
        "Charitable objects compliance review",
        "PCIT/CIT hearing representation",
        "Post-registration Form 10B compliance",
        "Annual ITR-7 filing coordination",
      ],
      seoContent: `Section 12A registration (now Section 12AB registration under the amended regime effective from 1 April 2021) is mandatory for charitable trusts, religious trusts, societies, and non-governmental organizations (NGOs) in ${cityName}, ${district}, Gujarat seeking income tax exemption under Section 11 and Section 12 on income applied for charitable or religious purposes. Without valid 12AB registration, all income of the trust — including donations received, corpus funds, property income, and investment returns — is fully taxable at the maximum marginal rate (currently 30% plus applicable surcharge and 4% cess), making registration critical for financial sustainability of trusts and NGOs operating in ${cityName}'s social welfare, education, healthcare, environmental conservation, and poverty alleviation sectors.

The 12AB registration regime introduced in 2021 requires all trusts — including those holding old Section 12A or Section 12AA registration granted before 1 April 2021 — to apply for fresh registration in Form 10A if they have not yet done so or if their old registration has expired. The application must be filed at least 30 days before the start of the financial year from which exemption is sought, although the CBDT has granted multiple deadline extensions for pending re-registration cases. Trusts that were genuinely carrying out charitable activities under their old registrations but failed to re-register within prescribed timelines can still apply, but may face additional scrutiny regarding the gap period.

Taxvio's 12AB registration service for ${cityName} trusts and NGOs covers complete application preparation and follow-up — reviewing the trust deed or society registration documents to ensure charitable objects are clearly defined and compliant with income tax requirements (objects must fall within education, medical relief, relief of poverty, or advancement of general public utility, and must not involve carrying on of any activity in the nature of trade, commerce, or business except where such activity is incidental to the main charitable purpose and does not constitute more than 20% of total receipts), drafting or amending trust objects if the existing deed contains vague or non-compliant language, compiling mandatory documents (trust deed or registered society documents, trust PAN, address proof of the registered office in ${cityName}, list of trustees or managing committee members with their PANs and addresses, audited financial statements for the last 3 years if the trust is already operational, activity report detailing beneficiaries served and projects undertaken), preparing Form 10A with comprehensive narrative on the trust's charitable activities, funding sources, and proposed future programs, and filing on the income tax e-filing portal.

After submission, the application is assigned to the jurisdictional Principal Commissioner of Income Tax (PCIT) or Commissioner of Income Tax (CIT) covering ${district}, Gujarat. The officer reviews the application and may issue queries or summon the trust representatives for a personal hearing (now often conducted virtually) to verify genuineness of charitable activities, assess the trust's capacity to carry out stated objects, and confirm that the trust is not being operated for private benefit of trustees or their relatives. We represent your ${cityName} trust during hearings, submit clarifications and additional evidence as required (bank statements showing donations received and applied for charitable work, beneficiary data, partnership MOUs with government or other NGOs, photographs of events and programs conducted), and follow up persistently until the formal 12AB registration order is issued. Once registered, we also advise on ongoing compliance — filing Form 10B (annual activity and financial statement report) and ITR-7 by 31 October each year to maintain registration validity.`,
    },

    /* ── 12. 80G Registration ── */
    {
      slug: "80g-registration",
      title: `80G Approval for Donors in ${cityName}`,
      price: "₹2,999",
      timeline: "30–60 Days",
      icon: "🏅",
      gradient: "from-indigo-600 to-violet-700",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-200",
      accentText: "text-indigo-700",
      features: [
        "Form 10AC for 80G approval application",
        "50% or 100% deduction eligibility setup",
        "Prerequisite 12AB registration verification",
        "PCIT/CIT approval coordination",
        "Donation receipt format guidance",
        "Renewal for existing 80G approvals",
      ],
      seoContent: `Section 80G registration is a separate approval required by charitable trusts, societies, and NGOs in ${cityName}, ${district}, Gujarat to enable their donors — individuals, HUFs, partnership firms, LLPs, and companies — to claim income tax deduction on donations made to the trust. While Section 12AB registration benefits the trust itself by exempting its income from tax, Section 80G approval benefits the donor by allowing a 50% or 100% deduction (depending on the category of approval granted) on donations made, subject to qualifying limits typically linked to 10% of the donor's adjusted gross total income.

80G approval transforms a ${cityName} trust into a preferred recipient for philanthropic contributions, significantly enhancing fundraising capacity. Individual donors prefer giving to 80G-approved trusts because they can reduce their taxable income while supporting social causes — for example, a donor in the 30% tax bracket donating ₹1 lakh to an 80G-approved trust with 100% deduction eligibility effectively reduces their tax liability by ₹30,000, making the net cost of donation ₹70,000. This tax incentive encourages larger and more frequent donations, which is particularly important for ${cityName} trusts operating education programs, medical camps, skill training centers, environmental projects, or disaster relief initiatives that require sustained funding.

80G approval is granted by the Principal Commissioner of Income Tax (PCIT) or Commissioner of Income Tax (CIT) after application in Form 10AC on the income tax e-filing portal. The trust must already hold valid 12AB registration before applying for 80G — the two registrations serve complementary purposes and are processed separately. The PCIT/CIT evaluates the trust's objects, track record of charitable work, financial transparency (audited statements, proper accounting, and utilization of funds for stated charitable purposes), and genuineness of operations before granting 80G approval. Approval may be granted under different clauses of Section 80G, determining whether donors receive 50% or 100% deduction and whether the deduction is subject to a qualifying limit.

Taxvio's 80G registration service for ${cityName} trusts includes verification of 12AB registration status (ensuring it is active and not expired), preparation of Form 10AC with detailed activity narrative, past 3 years' audited financial statements, evidence of charitable programs conducted (beneficiary lists, program photographs, partnership agreements with government or corporates, impact assessment reports if available), filing on the e-filing portal, and active follow-up with the jurisdictional PCIT/CIT office covering ${district}, Gujarat until the formal 80G approval certificate is issued. Processing typically takes 30–60 days but can extend longer if the trust's objects or activities require additional clarification.

Once your ${cityName} trust receives 80G approval, we provide post-approval advisory on donation receipt issuance — which must be issued for every donation above ₹2,000 (donations above ₹2,000 in cash do not qualify for 80G deduction; only cheque, online transfer, or demand draft donations qualify), must clearly mention the trust's 80G registration number and PAN, must specify the deduction percentage applicable (50% or 100%), and must be digitally signed or stamped by an authorized trustee. Proper receipt format ensures your ${cityName} donors can successfully claim the deduction when filing their ITR, maintaining donor satisfaction and encouraging repeat contributions.`,
    },

    /* ── 13. Form 15G/15H ── */
    {
      slug: "form-15g-15h",
      title: `Form 15G/15H Submission in ${cityName}`,
      price: "₹199",
      timeline: "Same Day Processing",
      icon: "📝",
      gradient: "from-cyan-600 to-teal-700",
      accentBg: "bg-cyan-50",
      accentBorder: "border-cyan-200",
      accentText: "text-cyan-700",
      features: [
        "Form 15G for individuals below 60 years",
        "Form 15H for senior citizens (60+)",
        "Total income threshold verification",
        "Bank/deductor submission coordination",
        "Valid for FD, RD, NSC interest income",
        "Annual renewal required every financial year",
      ],
      seoContent: `Form 15G and Form 15H are self-declaration forms that resident individuals in ${cityName}, ${district}, Gujarat can submit to banks, post offices, cooperative societies, and other financial institutions to prevent Tax Deducted at Source (TDS) on interest income from fixed deposits (FDs), recurring deposits (RDs), National Savings Certificates (NSCs), and other qualifying sources when their total estimated income for the financial year is below the taxable threshold. By submitting these forms proactively at the beginning of the financial year or before making an FD investment, ${cityName} residents can avoid unnecessary TDS deduction that would otherwise require filing an income tax return solely to claim a refund of excess tax deducted.

Form 15G is applicable to resident individuals below 60 years of age whose total income for the financial year (including salary, business income, rental income, and interest from all sources combined) is estimated to not exceed the basic exemption limit — ₹2.5 lakh under the old tax regime or ₹3 lakh under the new default tax regime effective from FY 2023-24. Form 15H is specifically for resident senior citizens (individuals aged 60 years and above) with total estimated income below the applicable threshold — ₹3 lakh under the old regime (₹5 lakh for super senior citizens aged 80 years and above) or ₹3 lakh under the new regime.

Taxvio's Form 15G/15H filing service for ${cityName} residents begins with eligibility assessment — verifying your total estimated income from all sources for the current financial year to confirm it falls below the applicable exemption threshold, reviewing previous year's income tax filing status (Form 15G/15H cannot be submitted if you were required to file ITR in any of the preceding 3 assessment years but did not do so), and determining the correct form (15G for below 60 years, 15H for senior citizens aged 60 and above). We then prepare the form with all mandatory details — your PAN, Aadhaar number, residential address in ${cityName}, estimated total income for the year, estimated income on which TDS would otherwise be deducted (typically interest income from FDs), previous year's income tax status, and declaration that tax on your estimated total income for the current year will be nil.

Form 15G/15H must be submitted to each bank or financial institution separately — if you hold multiple FDs across different banks in ${cityName}, you need to submit separate forms to each bank. Some banks accept a consolidated form covering all FDs held with that bank, while others require individual forms for each FD; we guide you on your bank's specific process. The form is valid only for the financial year in which it is submitted — you must submit fresh forms every year, ideally in April or before making new FD investments, to ensure TDS is not deducted on interest credits throughout the year.

For ${cityName} residents who have already had TDS deducted on interest income despite being eligible for exemption (because Form 15G/15H was not submitted or was submitted late), the only recourse is to file an income tax return claiming refund of excess TDS — we handle this ITR filing and refund claim process, ensuring your Form 26AS (TDS credit statement) reflects all deducted TDS accurately and that the refund is processed and credited to your bank account within the standard CPC processing timeline of 6–8 weeks post-ITR filing. Whether you're a retiree living off FD interest in ${cityName}, a young professional with savings deployed in fixed deposits, or a homemaker with inherited wealth parked in safe instruments, our Form 15G/15H service prevents unnecessary TDS and simplifies your tax compliance.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function GujaratIncomeTaxCityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const cityData  = getCityData(city);
  const cityName  = cityData?.name     ?? formatCityDisplay(city);
  const district  = cityData?.district ?? cityName;
  const region    = cityData?.region   ?? "Gujarat";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need income tax services in ${cityName}, ${district}, Gujarat.`)}`;

  const services = getServiceContent(cityName, district, region);

  const nearbyCities = GJ_CITIES
    .filter((c) => c.district === district && slugifyCity(c.name) !== city)
    .slice(0, 6);
  const regionCities = nearbyCities.length < 3
    ? GJ_CITIES.filter((c) => c.region === region && slugifyCity(c.name) !== city).slice(0, 6)
    : nearbyCities;

  /* ── JSON-LD ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Expert income tax return filing, TDS/TCS compliance, tax audit, scrutiny assistance, and trust registrations in ${cityName}, ${district}, Gujarat by qualified CAs.`,
    areaServed: [{ "@type": "Place", name: cityName, containedInPlace: { "@type": "State", name: "Gujarat" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3200" },
    priceRange: "₹199 - ₹9,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Gujarat Income Tax", item: "https://www.taxvio.in/state/gujarat/income-tax-services" },
      { "@type": "ListItem", position: 3, name: district, item: `https://www.taxvio.in/state/gujarat/income-tax-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${cityName} ITR`, item: `https://www.taxvio.in/state/gujarat/income-tax-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Income Tax Services in ${cityName}, Gujarat`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/gujarat/income-tax-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `When is the ITR filing deadline for ${cityName} taxpayers?`,
        acceptedAnswer: { "@type": "Answer", text: `For individuals and non-audit cases in ${cityName}, Gujarat, the ITR due date is 31 July. For businesses requiring tax audit, it's 31 October. Late filing penalty is ₹5,000 (₹1,000 if income below ₹5 lakh).` },
      },
      {
        "@type": "Question",
        name: `Which ITR form applies to salaried employees in ${cityName}?`,
        acceptedAnswer: { "@type": "Answer", text: `Salaried individuals in ${cityName} with only salary, one house property, and other sources (interest/dividend) file ITR-1. If you have capital gains or foreign income, use ITR-2. Business/professional income requires ITR-3.` },
      },
      {
        "@type": "Question",
        name: `Do ${cityName} businesses need tax audit?`,
        acceptedAnswer: { "@type": "Answer", text: `Tax audit under Section 44AB is mandatory for businesses in ${cityName} with turnover above ₹1 crore (₹10 crore with 95%+ digital payments) or professionals with receipts above ₹50 lakh. Audit report due by 30 September.` },
      },
    ],
  };

  return (
    <>
      <Script id="lb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="sl-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-gradient-to-b from-[#f0f4f8] to-white text-gray-900 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                {[
                  { href: "/", label: "Home" },
                  { href: "/state/gujarat/income-tax-services", label: "Gujarat Income Tax" },
                  { href: null, label: cityName },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-2">
                    {href ? <Link href={href} className="hover:text-white/90 transition">{label}</Link>
                          : <span className="text-white/90 font-semibold">{label}</span>}
                    {i < arr.length - 1 && <span className="text-white/30">›</span>}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold mb-6 backdrop-blur-md border border-white/20 bg-white/10">
                  <MapPin size={13} className="text-blue-200" />
                  {cityName}, {district} · Gujarat · Income Tax Filing
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  Income Tax Services
                  <span className="block mt-3 bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
                    in {cityName}, Gujarat
                  </span>
                </h1>

                <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                  Professional <strong className="text-white">ITR filing</strong> for individuals, businesses, firms & companies,{" "}
                  <strong className="text-white">TDS/TCS returns</strong>, tax audit under Section 44AB, scrutiny assistance,{" "}
                  <strong className="text-white">12A/80G registration</strong>, PAN/TAN services in{" "}
                  <strong className="text-white">{cityName}, {district}</strong> — CA-guided, 100% online from{" "}
                  <strong className="text-blue-200">₹799</strong>.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    { icon: BadgeCheck, text: "CA Certified" },
                    { icon: Shield, text: "100% Secure" },
                    { icon: Zap, text: "24-48 Hr Filing" },
                    { icon: Clock, text: "Mon-Sat Support" },
                    { icon: Star, text: "4.9★ Rated" },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text} className="inline-flex items-center gap-2 text-xs font-bold rounded-full px-4 py-2 backdrop-blur-md border border-white/15 bg-white/10 text-white/85">
                      <Icon size={12} className="text-blue-200" /> {text}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-8 py-4 text-white font-bold shadow-2xl transition-all active:scale-95">
                    <MessageCircle size={18} /> WhatsApp Now
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-blue-900 font-bold shadow-2xl hover:bg-gray-50 transition-all active:scale-95">
                    Free Consultation <ArrowRight size={16} />
                  </Link>
                  <a href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-white/10 px-8 py-4 text-white font-bold hover:bg-white/20 hover:border-white transition-all active:scale-95">
                    <Phone size={16} /> Call Expert
                  </a>
                </div>
              </div>

              {/* Right stats panel */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">Income Tax — {cityName}</p>
                    <p className="text-xs text-white/60 mt-1">{district} · {services.length} services available</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-yellow-300 text-yellow-300" />
                    <span className="text-white font-bold text-sm">4.9</span>
                  </div>
                </div>
                <div className="p-5 space-y-2 max-h-96 overflow-y-auto">
                  {services.map((svc) => (
                    <a href={`#${svc.slug}`} key={svc.slug}
                      className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:bg-white/15 border border-white/10 bg-white/5">
                      <span className="flex items-center gap-3 text-xs font-semibold text-white/85">
                        <span className="text-lg">{svc.icon}</span>
                        <span className="truncate">{svc.title.replace(` in ${cityName}`, "")}</span>
                      </span>
                      <span className="text-xs font-bold text-blue-200 ml-3">{svc.price}</span>
                    </a>
                  ))}
                </div>
                <div className="mx-5 mb-5 mt-3 rounded-2xl px-5 py-4 flex items-center justify-between border border-white/15 bg-white/10">
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-wide">Starting At</p>
                    <p className="text-blue-200 text-3xl font-black">₹799</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/60 font-bold uppercase tracking-wide">Delivery</p>
                    <p className="text-white font-bold text-sm">24-48 Hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats ribbon */}
          <div className="border-t border-white/10 bg-white/5 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {[
                { icon: BadgeCheck, label: "Qualified CAs" },
                { icon: TrendingUp, label: "3,200+ Clients" },
                { icon: Users, label: "750+ Locations" },
                { icon: IndianRupee, label: "Fair Pricing" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/60 text-xs">
                  <Icon size={12} className="text-blue-200" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
            <path d="M0 60L1440 60L1440 30C1200 60 900 0 720 20C540 40 240 60 0 30L0 60Z" fill="#f0f4f8" />
          </svg>
        </section>

        {/* ════════ QUICK STATS ════════ */}
        <section className="py-10 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: "24-48 Hrs", label: "ITR Filing", icon: Zap },
              { val: "4.9★", label: "Client Rating", icon: Star },
              { val: "₹799", label: "Starting Fee", icon: IndianRupee },
              { val: "13", label: "Tax Services", icon: ClipboardList },
            ].map(({ val, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 text-center hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                  <Icon size={16} className="text-blue-700" />
                </div>
                <p className="text-2xl font-black text-blue-900">{val}</p>
                <p className="text-xs text-gray-600 font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ SERVICE CARDS ════════ */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-6 space-y-20">
            {services.map((svc, idx) => (
              <article key={svc.slug} id={svc.slug}
                className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500">

                {/* Header */}
                <div className={`bg-gradient-to-r ${svc.gradient} p-8 md:p-10`}>
                  <div className="flex items-start justify-between gap-5 flex-wrap">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-white/25 border border-white/30 flex items-center justify-center text-4xl">
                        {svc.icon}
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">
                          Service #{String(idx + 1).padStart(2, "0")}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">{svc.title}</h2>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/20 border border-white/30 rounded-xl px-5 py-3 text-center min-w-[100px]">
                        <p className="text-xs text-white/70 font-bold uppercase">Price</p>
                        <p className="text-white font-black text-xl">{svc.price}</p>
                      </div>
                      <div className="bg-white/20 border border-white/30 rounded-xl px-5 py-3 text-center min-w-[100px]">
                        <p className="text-xs text-white/70 font-bold uppercase">Timeline</p>
                        <p className="text-white font-bold text-sm">{svc.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 md:p-10">
                  <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">

                    {/* Content */}
                    <div>
                      <h3 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-5 flex items-center gap-2">
                        <BookOpen size={14} /> About This Service in {cityName}
                      </h3>
                      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                        {svc.seoContent.split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t">
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-green-500/30">
                          <MessageCircle size={15} /> WhatsApp Us
                        </a>
                        <Link href="/contact"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all active:scale-95">
                          Get Quote <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                    {/* Features */}
                    <div className={`${svc.accentBg} rounded-2xl p-6 border ${svc.accentBorder}`}>
                      <p className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-5 flex items-center gap-2">
                        <CheckCircle size={14} /> What's Included
                      </p>
                      <ul className="space-y-3.5">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded-full ${svc.accentBg} border ${svc.accentBorder} flex items-center justify-center shrink-0 mt-0.5`}>
                              <CheckCircle size={12} className={svc.accentText} />
                            </div>
                            <span className="text-xs text-gray-800 font-medium leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-5 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Service Fee</p>
                            <p className={`text-3xl font-black ${svc.accentText}`}>{svc.price}</p>
                          </div>
                          <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all">
                            Start Now <ArrowRight size={12} />
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
        <section className="py-20 bg-white border-y">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 border border-blue-200 px-4 py-2 rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5">
                Why {cityName} Taxpayers Trust Taxvio
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Qualified CA Professionals", desc: `Every ITR and tax return for ${cityName} clients is handled by practicing Chartered Accountants familiar with Gujarat's tax environment.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap, title: "100% Online Process", desc: `Share documents via WhatsApp from anywhere in ${cityName}. No office visits needed — complete CA review, filing, verification online.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Calculator, title: "AIS/TIS Reconciliation", desc: `We cross-verify Annual Information Statement against your ITR to prevent income mismatch notices common for ${district} taxpayers.`, color: "bg-violet-100 text-violet-700" },
                { icon: AlertCircle, title: "Scrutiny Notice Support", desc: `Active monitoring for Section 143(2) notices and demand letters — immediate alerts and comprehensive reply preparation for ${cityName} cases.`, color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing", desc: `Clear upfront fees starting ₹799 for ${cityName} income tax services — no hidden charges or surprise consultation fees.`, color: "bg-teal-100 text-teal-700" },
                { icon: Building2, title: "Gujarat Tax Expertise", desc: `Deep understanding of ${cityName}'s diverse business landscape — from diamond trading to chemical manufacturing and IT services.`, color: "bg-sky-100 text-sky-700" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PROCESS ════════ */}
        <section className="py-18 bg-gradient-to-b from-gray-50 to-white border-b">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 border border-blue-200 px-4 py-2 rounded-full">
                Simple Process
              </span>
              <h2 className="text-3xl font-black text-gray-900 mt-4">
                How to File ITR in {cityName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: "01", title: "Share Documents", desc: "Send Form 16, salary slips, investment proofs via WhatsApp or portal" },
                { step: "02", title: "CA Review", desc: "Our CA team reviews and optimizes deductions within 24 hours" },
                { step: "03", title: "ITR Filing", desc: "We file your return on the income tax portal and send acknowledgement" },
                { step: "04", title: "E-Verification", desc: "Complete verification via Aadhaar OTP. Done in 24-48 hours total" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative p-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm font-black flex items-center justify-center mb-4">
                    {step}
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-2">{title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                  {step !== "04" && (
                    <ArrowRight size={15} className="absolute -right-3 top-1/2 -translate-y-1/2 text-blue-600 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="py-18 bg-white border-b">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 border border-blue-200 px-4 py-2 rounded-full">FAQ</span>
              <h2 className="text-3xl font-black text-gray-900 mt-4">Income Tax FAQs — {cityName}</h2>
            </div>
            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `When is the ITR filing deadline for ${cityName} taxpayers?`,
                  a: `For individuals and non-audit cases in ${cityName}, Gujarat, the ITR due date is 31 July. For businesses requiring tax audit, it's 31 October. Late filing penalty is ₹5,000 (₹1,000 if income below ₹5 lakh).`,
                },
                {
                  q: `Which ITR form applies to salaried employees in ${cityName}?`,
                  a: `Salaried individuals in ${cityName} with only salary, one house property, and other sources (interest/dividend) file ITR-1. If you have capital gains or foreign income, use ITR-2. Business/professional income requires ITR-3.`,
                },
                {
                  q: `Do ${cityName} businesses need tax audit?`,
                  a: `Tax audit under Section 44AB is mandatory for businesses in ${cityName} with turnover above ₹1 crore (₹10 crore with 95%+ digital payments) or professionals with receipts above ₹50 lakh. Audit report due by 30 September.`,
                },
              ].map((f) => (
                <div key={f.q} className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
                  itemScope itemType="https://schema.org/Question">
                  <div className="px-6 py-5 flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                      <FileText size={13} className="text-blue-700" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900" itemProp="name">{f.q}</p>
                      <div itemScope itemType="https://schema.org/Answer">
                        <p className="text-xs text-gray-600 mt-3 leading-relaxed" itemProp="text">{f.a}</p>
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
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-b">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-blue-600 to-blue-800" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700">{district} & {region}</p>
                  <h2 className="text-xl font-black text-gray-900">Income Tax Services in Nearby Cities</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link key={c.name}
                    href={`/state/gujarat/income-tax-services/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md transition-all">
                    <MapPin size={12} className="text-blue-600/50 group-hover:text-blue-600" />
                    ITR in {c.name}
                    <ArrowRight size={12} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/gujarat/income-tax-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-blue-600/40 bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-700 hover:shadow-md transition-all">
                  All Gujarat Cities <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ════════ CTA ════════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-3xl overflow-hidden p-12 md:p-16 text-white text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-xs font-bold mb-6">
                  <MapPin size={12} className="text-blue-200" />
                  Serving {cityName}, {district} — 100% online
                </div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  Professional Income Tax Services in {cityName}
                </h2>
                <p className="mt-5 text-white/80 max-w-2xl mx-auto text-sm leading-relaxed">
                  ITR filing, TDS/TCS returns, tax audit, scrutiny assistance, 12A/80G registration, PAN/TAN services — all delivered online for{" "}
                  {cityName} taxpayers by qualified CAs. Starting ₹799. Same-day WhatsApp support.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-8 py-4 text-white font-bold shadow-2xl transition-all active:scale-95">
                    <MessageCircle size={17} /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-blue-900 font-bold shadow-2xl hover:bg-gray-50 transition-all active:scale-95">
                    Free Consultation <ArrowRight size={16} />
                  </Link>
                  <a href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-white/10 px-8 py-4 text-white font-bold hover:bg-white/20 hover:border-white transition-all active:scale-95">
                    <Phone size={16} /> Call Now
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