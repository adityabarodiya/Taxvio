// app/state/madhya-pradesh/income-tax-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, Landmark, Calculator,
  Receipt, ClipboardList,
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

  return {
    title: `Income Tax Return Filing & TDS Services in ${cityName}, ${district} | Taxvio`,
    description: `CA-assisted ITR filing for salaried, proprietors, firms, LLPs & companies, quarterly TDS/TCS returns, tax audit (Sec. 44AB), scrutiny notice reply, 12A/80G registration, PAN/TAN application and Form 15G/15H in ${cityName}, ${district}, Madhya Pradesh. 100% online, starting ₹499.`,
    keywords: [
      `income tax return filing ${cityName}`,
      `ITR filing ${cityName}`,
      `TDS return ${cityName} ${district}`,
      `tax audit ${cityName} MP`,
      `income tax consultant ${cityName}`,
      `ITR salaried ${cityName}`,
      `ITR proprietor ${cityName}`,
      `12A 80G registration ${district}`,
      `income tax scrutiny ${cityName}`,
      `CA income tax services ${district}`,
    ],
    alternates: {
      canonical: `https://www.taxvio.in/state/madhya-pradesh/income-tax-services/${city}`,
    },
    openGraph: {
      title: `Income Tax Services in ${cityName}, MP | Taxvio`,
      description: `ITR filing, TDS returns, tax audit & scrutiny reply in ${cityName}, ${district}, MP. CA-assisted, from ₹499.`,
      url: `https://www.taxvio.in/state/madhya-pradesh/income-tax-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Income Tax Services in ${cityName}, MP | Taxvio`,
    },
    robots: { index: true, follow: true },
  };
}

/* ─── Region-aware copy helper ────────────────────────────────────────────── */
function getRegionContext(region: string, cityName: string, district: string): string {
  switch (region) {
    case "Indore Division":
      return `Indore Division businesses and individuals in ${cityName} operate in one of MP's most economically active zones — spanning Indore's IT and startup ecosystem, Pithampur's manufacturing industrial area, garment and pharmaceutical exports, and a large private sector professional workforce. Income tax compliance here frequently involves capital gains from startup equity, foreign income of IT professionals billing overseas clients, advance tax computation for business owners with high quarterly income, and Section 44AD/44ADA presumptive taxation for the region's substantial freelancer and consultant base.`;
    case "Bhopal Division":
      return `Bhopal Division taxpayers in ${cityName} include one of India's highest concentrations of central and state government employees, PSU staff, defence personnel, and judicial officers — all with distinct salary structures, allowances, and exemptions. Common income tax complexities here include correct HRA exemption calculation for government housing allottees, pension income treatment for retired government employees, LTC exemption claims, and correct reporting of leave encashment and gratuity receipts within the exemption limits.`;
    case "Jabalpur Division":
      return `Jabalpur Division taxpayers in ${cityName} include a mix of defence and civilian government employees (Jabalpur is home to major defence establishments), cement and construction sector businesses, forest-based commodity traders, and a growing professional services sector. Income tax considerations specific to this region include correct allowance treatment for armed forces personnel under Section 10, business income computation for high-turnover cement and construction contractors, and agricultural income declarations for timber and forest produce traders across ${district}.`;
    case "Gwalior Division":
      return `Gwalior Division taxpayers in ${cityName} include traders in Gwalior's historic commercial markets, Chanderi handloom weavers, footwear manufacturers, tourism-related businesses, and dairy sector operators. Income tax issues common in this region include cash transaction restrictions under Section 269ST (₹2 lakh cash receipt limit), Section 44AD presumptive taxation for small traders, depreciation computation for manufacturing businesses, and agricultural income declarations from land-owning trading families across ${district}.`;
    case "Ujjain Division":
      return `Ujjain Division taxpayers in ${cityName} operate in MP's most concentrated agro-processing belt — soybean crushing, oilseed trading, pulse processing, and the textile dyeing industry in Nagda. Income tax compliance for businesses in ${district} includes proper P&L preparation for commodity traders with thin margins, advance tax for businesses with lumpy seasonal income, Section 44AB tax audit for high-turnover commodity traders, and agricultural income declarations for land-owning processor-trader families that must be carefully separated from business income in ITR filing.`;
    case "Chambal Division":
      return `Chambal Division taxpayers in ${cityName} operate in a predominantly agricultural economy with a growing trading sector. Income tax compliance here includes careful agricultural income declaration (exempt under Section 10(1) but used for rate purposes in the income tax slab), correct treatment of land sale capital gains (agricultural land in rural areas vs urban land with different tax treatment), and Section 44AD presumptive taxation for the region's small and medium traders across ${district}.`;
    case "Narmadapuram Division":
      return `Narmadapuram Division taxpayers in ${cityName} include railway employees (Itarsi is a major railway junction), sugarcane farmers, agricultural traders, and forest produce dealers. Income tax specifics here include correct treatment of railway employment income with all applicable allowances, agricultural income from sugarcane declared under Section 10(1), and business income for traders at the intersection of agricultural produce and manufactured goods — requiring careful segregation in ITR-3 filings for proprietors in ${district}.`;
    case "Rewa Division":
      return `Rewa Division taxpayers in ${cityName} operate in a resource-rich economy dominated by Singrauli's coal and power sector, Satna's cement industry, and agricultural trading across Rewa, Sidhi, and Mauganj. Income tax specifics include Section 44BB for mining service contractors, correct depreciation for power and mining equipment, advance tax management for cement manufacturers with large quarterly turnover, and salary income treatment for employees of NTPC, SCCL, and other power sector PSUs operating in ${district}.`;
    case "Sagar Division":
      return `Sagar Division taxpayers in ${cityName} include a diverse mix of traders, diamond merchants (Chhatarpur), Bina Petroleum refinery employees and contractors, agricultural commodity dealers, and a significant educational institution sector in Sagar city. Income tax specifics include capital gains on diamond and precious stone transactions, correct allowance treatment for petroleum sector employees, Section 44AD for small traders, and Section 12A/80G compliance for Sagar Division's numerous educational and religious trusts in ${district}.`;
    case "Shahdol Division":
      return `Shahdol Division taxpayers in ${cityName} operate in an economy anchored by coal mining, aluminium manufacturing, forest produce, and tribal economy. Income tax specifics for ${district} include correct salary income treatment for employees of Mahan Aluminium (Hindalco) and South Eastern Coalfields (SECL), tribal income exemptions under Section 10(26), advance tax for high-income coal sector contractors, and correct treatment of Employees' Provident Fund (EPF) contributions and withdrawals for the region's large organised sector workforce.`;
    default:
      return `Madhya Pradesh taxpayers in ${cityName}, ${district} represent a diverse income tax profile — spanning salaried employees, business proprietors, partnership firms, and corporate entities — each with distinct ITR form requirements, deduction optimisation opportunities, and compliance timelines that Taxvio's CA team is equipped to handle end-to-end from ${cityName}.`;
  }
}

/* ─── Service Content Generator ──────────────────────────────────────────── */
function getServiceContent(cityName: string, district: string, region: string) {
  const regionCtx = getRegionContext(region, cityName, district);

  return [
    /* ── 1. PAN Card ── */
    {
      slug: "pan-card",
      title: `PAN Card Services in ${cityName}`,
      price: "₹199",
      timeline: "3–5 Working Days",
      icon: "🪪",
      iconBg: "bg-slate-50 border-slate-100",
      gradient: "from-slate-500 to-gray-600",
      accentColor: "#475569",
      accentBg: "bg-slate-50",
      accentText: "text-slate-700",
      features: [
        "New PAN application — Form 49A (Indian citizens)",
        "PAN correction — name, DOB, address, father's name",
        "Duplicate PAN reprint (lost / damaged card)",
        "PAN-Aadhaar linking status and assistance",
        "PAN status tracking post-application",
        "e-PAN (digital PDF) and physical card options",
      ],
      seoContent: `PAN (Permanent Account Number) is India's foundational tax identification number — a 10-character alphanumeric identifier issued by the Income Tax Department that is mandatory for filing income tax returns, opening bank accounts, making high-value financial transactions, receiving salary, buying or selling immovable property, and conducting dozens of other regulated financial activities. For businesses and individuals in ${cityName}, ${district}, obtaining a PAN card is the first step before any tax compliance — GST registration, ITR filing, TDS deduction, or opening a current account all require a valid PAN.

New PAN applications in ${cityName} are processed through the NSDL e-Gov or UTIITSL portals using Form 49A (for Indian citizens and entities) or Form 49AA (for foreign citizens). The application requires identity proof (Aadhaar card is the preferred document for Aadhaar-based PAN allotment which is instant), address proof, and date of birth proof. For business entities — partnership firms, LLPs, private limited companies, or trusts — a separate PAN must be obtained using the entity's incorporation or registration documents. Taxvio handles new PAN applications for individuals and entities in ${cityName} — including document preparation, portal filing, and tracking until the physical PAN card is dispatched.

PAN correction is required when the existing PAN card has errors — incorrect spelling of name, wrong date of birth, wrong address, or incorrect father's name. PAN corrections are also needed when a taxpayer's name changes (marriage, court order) and the ITR filing name must match bank records. Incorrect PAN details cause TDS mismatch issues: if the name on your PAN does not match the name in your employer's TDS records, Form 16 validation fails and ITR refunds are delayed. Taxvio processes PAN correction requests for ${cityName} taxpayers with correct documentation to avoid multiple rejection rounds.

${regionCtx}

PAN-Aadhaar linking is now mandatory for all PAN holders — failure to link (deadline: 31st May 2024 with penalty) results in PAN becoming inoperative, which means TDS will be deducted at 20% (higher rate) on all transactions involving that PAN. For ${cityName} residents who have not yet linked PAN and Aadhaar, Taxvio provides linking assistance — checking current linkage status on the income tax portal and initiating the linking process with correct OTP verification.`,
    },

    /* ── 2. TAN Application ── */
    {
      slug: "tan-application",
      title: `TAN Application in ${cityName}`,
      price: "₹299",
      timeline: "3–7 Working Days",
      icon: "🔢",
      iconBg: "bg-zinc-50 border-zinc-100",
      gradient: "from-zinc-500 to-slate-600",
      accentColor: "#52525b",
      accentBg: "bg-zinc-50",
      accentText: "text-zinc-700",
      features: [
        "New TAN application — Form 49B",
        "Correction in existing TAN details",
        "TAN allotment and acknowledgement tracking",
        "TAN-PAN linkage verification",
        "TDS / TCS compliance guidance post-TAN",
        "Applicable for employers, companies, firms, and contractors",
      ],
      seoContent: `TAN (Tax Deduction and Collection Account Number) is a 10-character alphanumeric identifier mandatory for every person or entity that deducts or collects tax at source — employers deducting salary TDS, businesses making contractor or professional fee payments above threshold, landlords paying rent above ₹50,000 per month to any person, buyers of immovable property above ₹50 lakh, and businesses collecting TCS on specified goods. Without a valid TAN, TDS/TCS deposits cannot be made on the OLTAS challan and quarterly returns cannot be filed on TRACES — making TAN the fundamental compliance prerequisite for any ${cityName} business that deducts tax from payments.

TAN applications in ${cityName} are processed through the NSDL portal using Form 49B. The application requires the applicant's PAN, business address in ${district}, business category (company, firm, individual, government, etc.), designation of the responsible person, and authorised signatory details. For companies and LLPs, the TAN is obtained in the entity's name with a director or partner as the responsible person. For individual proprietors in ${cityName} who make contractor or rent payments subject to TDS, the TAN is in the proprietor's individual name. Taxvio handles new TAN applications for employers, businesses, and individuals in ${cityName} — including Form 49B preparation, portal submission, and TAN acknowledgement follow-up.

A common requirement for ${cityName} businesses is TAN correction — when the existing TAN has incorrect business name, address, or category details that cause TRACES return filing rejections. Incorrect TAN-PAN linkage (where the PAN cited on TDS challans does not match TRACES records for that TAN) is another frequent issue that generates demand notices from the TDS Centralised Processing Cell (TDS-CPC). Taxvio identifies and resolves these mismatches as part of the TAN correction process.

For ${cityName} employers and businesses obtaining TAN for the first time, Taxvio provides a post-TAN compliance briefing: explaining TDS deduction rates for salary (as per income tax slabs), contractor payments (1–2%), professional fees (10%), rent (10%), and property purchases (1%); the OLTAS challan deposit process and due dates (7th of following month); quarterly TDS return due dates; and Form 16/16A generation obligations. This compliance orientation prevents the most common TDS defaults that new TAN holders in ${district} encounter in their first year — missed quarterly returns, incorrect challan mapping, and wrong section codes in TDS returns.`,
    },

    /* ── 3. ITR — Salaried Individual ── */
    {
      slug: "itr-salaried",
      title: `ITR Filing for Salaried Individuals in ${cityName}`,
      price: "₹499",
      timeline: "24–48 Hours",
      icon: "👔",
      iconBg: "bg-blue-50 border-blue-100",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "#2563eb",
      accentBg: "bg-blue-50",
      accentText: "text-blue-700",
      features: [
        "ITR-1 / ITR-2 as applicable",
        "Form 16 verification and reconciliation with AIS",
        "Deduction optimisation — 80C, 80D, HRA, LTA",
        "Multiple Form 16s from different employers",
        "Capital gains from MF / shares (ITR-2)",
        "E-filing with ITR-V and e-verification",
      ],
      seoContent: `Income tax return filing for salaried individuals in ${cityName}, ${district} is the most common tax compliance requirement — and also the one most frequently done incorrectly. While the process appears straightforward (upload Form 16, submit pre-filled ITR), the reality involves several critical decisions and reconciliation steps that determine both tax liability accuracy and compliance safety. Taxvio's CA team files ITR for salaried employees in ${cityName} with a structured review process — not just portal data entry.

The first step in every salaried ITR filing is verification of Form 16 against the Annual Information Statement (AIS). The AIS is the Income Tax Department's consolidated view of all income and financial transactions related to your PAN — drawn from employer TDS data, bank interest reports (SFT-001), mutual fund dividend and redemption data (SFT-005), property purchase data, and dozens of other sources. If the income declared in your ITR is lower than what appears in AIS/TIS (Taxpayer Information Summary), the ITR processing system generates a defective return notice or a high-value transaction mismatch communication. For ${cityName} salaried taxpayers with multiple income sources — bank FD interest, dividend income, rental income from a second property, or capital gains from mutual fund redemptions — this AIS reconciliation is especially important.

Deduction optimisation is the second critical step for ${cityName} salaried taxpayers. Many employees are unaware of all deductions available to them: Section 80C investments (PPF, ELSS, life insurance premium, home loan principal, Sukanya Samriddhi — up to ₹1.5 lakh), Section 80D health insurance premium (₹25,000 for self/family, additional ₹25,000 or ₹50,000 for parents depending on age), Section 80G donations to registered trusts, HRA exemption calculation (minimum of three conditions — actual HRA received, 50%/40% of basic salary, actual rent paid minus 10% of basic), and standard deduction of ₹75,000 (from FY 2024-25 under new regime) or ₹50,000 under old regime. Our CA team analyses your specific employer allowance structure and investment portfolio to maximise legitimate deductions before filing.

${regionCtx}

For salaried employees in ${cityName} who changed jobs during the year, the ITR filing process requires aggregating income from all employers — declaring total salary from all Form 16s, verifying that TDS deposited by each employer matches Form 26AS, and ensuring no duplicate standard deduction or deduction claims. If an employer has incorrectly deducted excess or insufficient TDS, the ITR filing process is how that is rectified — either resulting in a refund or in additional self-assessment tax payment before filing.`,
    },

    /* ── 4. ITR — Individual Proprietor ── */
    {
      slug: "itr-proprietor",
      title: `ITR Filing for Proprietors in ${cityName}`,
      price: "₹999",
      timeline: "2–3 Working Days",
      icon: "🏪",
      iconBg: "bg-violet-50 border-violet-100",
      gradient: "from-violet-500 to-purple-600",
      accentColor: "#7c3aed",
      accentBg: "bg-violet-50",
      accentText: "text-violet-700",
      features: [
        "ITR-3 for regular business income",
        "ITR-4 (Sugam) for 44AD / 44ADA presumptive income",
        "P&L account and balance sheet preparation",
        "Depreciation schedule for business assets",
        "Advance tax computation and challan guidance",
        "Tax saving advisory — 80C, 80D, NPS, HRA",
      ],
      seoContent: `Income tax return filing for individual proprietors and self-employed professionals in ${cityName}, ${district} is significantly more complex than salaried ITR — requiring preparation of financial statements, business income computation, correct ITR form selection, and advance tax compliance throughout the year. Proprietors in ${cityName} operating shops, trading businesses, service businesses, or professional practices (doctors, lawyers, CAs, consultants) must file ITR-3 (for regular business income with books of accounts) or ITR-4 (Sugam) for those opting for presumptive taxation under Section 44AD (business) or 44ADA (specified professionals).

Section 44AD presumptive taxation is a significant simplification for eligible ${cityName} business owners — allowing declaration of 8% of gross turnover (6% for digital transactions) as income without maintaining detailed books of accounts, eliminating the tax audit requirement below ₹1 crore turnover, and simplifying ITR filing to a single-page ITR-4 Sugam form. However, opting for 44AD has implications: the taxpayer cannot claim business expense deductions separately (the 8% is a final rate), and once opted, the scheme must be continued for 5 years (or tax audit becomes mandatory for the entire 5-year period if opted out). Taxvio advises ${cityName} proprietors on whether 44AD is beneficial based on their actual profit margin versus the 8% presumptive rate.

For ${cityName} proprietors with actual books of accounts — trading businesses with inventory, manufacturing units, service businesses with significant employee costs — ITR-3 is filed with a complete P&L account and balance sheet. The balance sheet must show all business assets (fixed assets, stock, debtors, bank balances) and liabilities (creditors, loans, capital account). Depreciation on business assets — shop fixtures, machinery, vehicles, computers, and furniture — is computed under the Income Tax Act's WDV method (different from Companies Act straight-line depreciation) and must be correctly reflected in both the P&L and the depreciation schedule attached to ITR-3.

For ${cityName} professionals under Section 44ADA (presumptive scheme for specified professions including medical practitioners, lawyers, engineers, architects, CAs, and interior designers with gross receipts below ₹75 lakh), 50% of gross receipts is declared as income — higher than 44AD's 8% but still typically lower than actual expenses for high-cost professional practices. Our CA team compares the 44ADA declared income against actual profit to determine the most tax-efficient approach for each ${cityName} professional client.

Advance tax is a critical obligation for ${cityName} proprietors with annual tax liability above ₹10,000 — payable in four quarterly instalments (15th June: 15%, 15th September: 45%, 15th December: 75%, 15th March: 100%). Missing advance tax instalments attracts interest under Sections 234B (default in advance tax) and 234C (deferment of advance tax) at 1% per month. Taxvio computes advance tax quarterly for all proprietor clients in ${cityName} and sends due date reminders.`,
    },

    /* ── 5. ITR — Firm / LLP ── */
    {
      slug: "itr-firm-llp",
      title: `ITR Filing for Firms & LLPs in ${cityName}`,
      price: "₹1,999",
      timeline: "3–5 Working Days",
      icon: "🤝",
      iconBg: "bg-teal-50 border-teal-100",
      gradient: "from-teal-500 to-cyan-600",
      accentColor: "#0d9488",
      accentBg: "bg-teal-50",
      accentText: "text-teal-700",
      features: [
        "ITR-5 for partnership firms and LLPs",
        "Partner capital accounts and profit sharing",
        "Remuneration and interest to partners — Section 40(b) limits",
        "Tax audit coordination — Section 44AB",
        "AMT computation for LLPs",
        "Partner ITR-3 coordination for pass-through income",
      ],
      seoContent: `Partnership firms and Limited Liability Partnerships (LLPs) in ${cityName}, ${district} are separate taxable entities for income tax purposes — taxed at a flat 30% on their net income plus applicable surcharge and cess, regardless of the amount of income. Unlike companies (which have a lower 22% tax rate under Section 115BAA for domestic companies), firms and LLPs do not benefit from reduced tax rates — making tax planning through remuneration, interest to partners, and legitimate expense deductions particularly important for ${cityName} firm and LLP clients.

ITR-5 is the income tax return form for partnership firms, LLPs, Association of Persons (AoP), Body of Individuals (BoI), and artificial juridical persons. For ${cityName} firms and LLPs, ITR-5 requires reporting: gross turnover or gross receipts, business income computed after all deductions, partner-wise capital accounts, remuneration paid to working partners (deductible under Section 40(b) up to specified limits), interest paid to partners on capital (deductible up to 12% per annum under Section 40(b)), and tax liability computation including advance tax paid.

Section 40(b) limits are critical for ${cityName} firms — partner remuneration is deductible only up to: ₹3 lakh or 90% of book profit (whichever is higher) on the first ₹3 lakh of book profit, and 60% of the balance book profit. Interest to partners is deductible only up to 12% per annum on partner capital balances. Any remuneration or interest paid above these limits is disallowed and added back to firm income — a common error in self-filed ITR-5 returns that attracts scrutiny and demand notices for ${cityName} firms.

For LLPs in ${cityName} with total income below ₹20 lakh, Alternative Minimum Tax (AMT) at 18.5% of Adjusted Total Income (ATI) must be computed under Section 115JC — with AMT credit carried forward if actual tax exceeds AMT in any subsequent year. For most small LLPs, this computation results in no additional liability, but the mandatory Form 29C certification by a CA for AMT purposes means LLPs above certain income levels require CA involvement even if not otherwise audit-required.

Section 44AB tax audit is mandatory for ${cityName} firms and LLPs with gross turnover above ₹1 crore (₹10 crore for cashless businesses) or gross professional receipts above ₹50 lakh. For audit-required firms, the Form 3CA/3CD tax audit report must be filed before ITR-5 filing — and the combined deadline is 31st October. Taxvio coordinates the tax audit, ITR-5 preparation, and partner ITR-3 filings (for partners declaring their share of firm income) simultaneously to ensure all interconnected filings are completed before the unified deadline.`,
    },

    /* ── 6. ITR — Trust / Company ── */
    {
      slug: "itr-trust-company",
      title: `ITR Filing for Trusts & Companies in ${cityName}`,
      price: "₹2,999",
      timeline: "5–7 Working Days",
      icon: "🏢",
      iconBg: "bg-emerald-50 border-emerald-100",
      gradient: "from-emerald-500 to-green-600",
      accentColor: "#059669",
      accentBg: "bg-emerald-50",
      accentText: "text-emerald-700",
      features: [
        "ITR-6 — Private / Public Limited Companies",
        "ITR-7 — Trusts, Political Parties, Section 8 Companies",
        "MAT computation — Section 115JB (companies)",
        "AMT computation — Section 115JC (trusts/AoP)",
        "Section 11/12 charitable income exemption",
        "Audit coordination — Sections 44AB, 12A compliance",
      ],
      seoContent: `Private limited companies, public limited companies, and charitable trusts in ${cityName}, ${district} have the most complex income tax filing obligations — requiring coordination between the statutory audit (under the Companies Act / Trust deed), the tax audit (under Section 44AB), and the ITR filing deadline, each with separate but interdependent timelines. Taxvio manages all three layers of compliance for corporate and trust clients in ${cityName}.

ITR-6 is filed by all companies registered under the Companies Act 2013 (or its predecessors) — including private limited companies, public limited companies, OPCs, and Section 8 non-profit companies. For domestic companies with turnover up to ₹400 crore, the income tax rate under the regular regime is 25% (plus surcharge and cess). Companies opting for Section 115BAA (no deductions, exemptions regime) pay at 22% and those newly incorporated under Section 115BAB for new manufacturing companies pay at 15%. All companies must compute Minimum Alternate Tax (MAT) at 15% of Book Profit under Section 115JB and pay the higher of regular tax or MAT — with MAT credit carried forward for 15 years.

For charitable trusts in ${cityName} with valid Section 12AB registration — educational institutions, hospitals, religious trusts, welfare organisations — ITR-7 is filed declaring income applied for charitable purposes as exempt under Section 11, with the balance (if any) taxed at the maximum marginal rate. The Section 11 exemption requires that at least 85% of income is applied for charitable objectives during the year — or accumulated for up to 5 years with a specific statement filed under Section 11(2). Taxvio ensures ${cityName} trust ITR-7 filings correctly reflect applied income, accumulated income with proper Form 9A / Form 10 notices, and investment of accumulated funds in prescribed modes under Section 11(5).

The combined filing sequence for ${cityName} companies and audit-required trusts is: (1) completion of statutory audit and issuance of audited financial statements, (2) Form 3CA/3CD tax audit preparation and CA signing before 30th September, (3) ITR-6 or ITR-7 filing using audited figures before 31st October, and (4) for companies liable to transfer pricing, Form 3CEB certification and 30th November deadline. Missing any step in this sequence causes cascading deadline violations. Taxvio coordinates all deadlines for ${cityName} corporate and trust clients — with advance reminders and parallel processing of audit and ITR preparation to ensure on-time filing every year.`,
    },

    /* ── 7. Quarterly TDS Return ── */
    {
      slug: "quarterly-tds",
      title: `Quarterly TDS Return Filing in ${cityName}`,
      price: "₹999/quarter",
      timeline: "31st Jul / Oct / Jan / May",
      icon: "📋",
      iconBg: "bg-amber-50 border-amber-100",
      gradient: "from-amber-500 to-orange-600",
      accentColor: "#d97706",
      accentBg: "bg-amber-50",
      accentText: "text-amber-700",
      features: [
        "Form 24Q — quarterly salary TDS return",
        "Form 26Q — TDS on non-salary payments",
        "Form 27Q — TDS on payments to non-residents",
        "OLTAS challan reconciliation before filing",
        "Deductee PAN verification — prevent 20% default",
        "Form 16 / 16A generation post-return acceptance",
      ],
      seoContent: `Quarterly TDS (Tax Deducted at Source) return filing is a mandatory recurring compliance obligation for every employer, business, and individual in ${cityName}, ${district} that deducts tax from payments above the prescribed threshold limits. TDS is one of the income tax department's primary revenue collection mechanisms — and non-compliance (missed returns, incorrect PAN, wrong section codes, or challan mismatches) results in automatic Section 234E late fees (₹200/day), Section 271H penalties (₹10,000 to ₹1 lakh), and interest under Section 201(1A) (1.5% per month for late deposit).

There are three primary TDS return forms for ${cityName} businesses: Form 24Q (TDS on salary — mandatory for all employers deducting TDS from employee salaries under Section 192), Form 26Q (TDS on all non-salary payments — contractor fees under Section 194C, professional fees under Section 194J, rent under Section 194I, interest under Section 194A, property purchase under Section 194IA, and dozens of other specified payment categories), and Form 27Q (TDS on payments to non-residents under Section 195 — relevant for ${cityName} businesses making foreign payments for import of services, royalties, or technical fees).

Quarterly TDS return due dates are: Q1 (April–June): 31st July; Q2 (July–September): 31st October; Q3 (October–December): 31st January; Q4 (January–March): 31st May. These are hard deadlines — TRACES (TDS Reconciliation Analysis and Correction Enabling System) enforces Section 234E late fees from the day after the deadline with no waiver provision, unlike other income tax penalties which may be contested.

The most critical pre-filing step for ${cityName} employers and businesses is OLTAS (Online Tax Accounting System) challan reconciliation — verifying that all TDS challans deposited during the quarter match the amounts in the TDS return exactly. Challan mismatches (wrong TAN, wrong amount, wrong assessment year, or wrong nature of payment code) cause TRACES return rejection or generate demand notices for short payment. Taxvio reconciles all OLTAS challan data against the quarterly TDS return before filing — ensuring zero challan mismatch errors for all ${cityName} TDS clients.

Deductee PAN verification is equally critical: if a deductee's PAN is incorrect in the TDS return, TDS is required to be deducted at 20% (higher rate under Section 206AA) and the TDS credit does not reflect in the deductee's Form 26AS — causing grievances from employees and vendors whose TDS credit is lost. Taxvio validates all deductee PAN details against the Income Tax Department's PAN verification API before filing each quarterly return for ${cityName} businesses.`,
    },

    /* ── 8. Quarterly TCS Return ── */
    {
      slug: "quarterly-tcs",
      title: `Quarterly TCS Return Filing in ${cityName}`,
      price: "₹999/quarter",
      timeline: "15th After Quarter End",
      icon: "🧮",
      iconBg: "bg-orange-50 border-orange-100",
      gradient: "from-orange-500 to-red-500",
      accentColor: "#ea580c",
      accentBg: "bg-orange-50",
      accentText: "text-orange-700",
      features: [
        "Form 27EQ — quarterly TCS return",
        "TCS on scrap, minerals, timber, liquor sales",
        "TCS on motor vehicles above ₹10 lakh",
        "TCS on LRS / overseas remittance (Section 206C(1G))",
        "OLTAS TCS challan reconciliation",
        "Form 27D — TCS certificate to collectees",
      ],
      seoContent: `TCS (Tax Collected at Source) is a mechanism under which specified sellers are required to collect tax from buyers at the time of sale and deposit it with the government — functioning as a prepayment of income tax by the buyer, creditable against their final tax liability. Form 27EQ is the quarterly TCS return filed by all tax collectors (persons collecting TCS) in ${cityName}, ${district} — due by the 15th of the month after each quarter end (15th July, 15th October, 15th January, and 15th May).

The primary TCS categories applicable to businesses in ${cityName} include: Section 206C(1) TCS on sale of scrap at 1% (highly relevant for manufacturing businesses, metalwork fabricators, and scrap dealers across ${district}); TCS on timber obtained under forest lease at 2.5%; TCS on tendu leaves at 5%; TCS on minerals (coal, lignite, iron ore) at 1% — important for Rewa Division businesses near coal and mineral zones; TCS on liquor sales at 1%; and TCS on sale of motor vehicles above ₹10 lakh at 1% under Section 206C(1F) — relevant for automobile dealers in ${cityName}.

Section 206C(1G) introduced TCS on Liberalised Remittance Scheme (LRS) remittances — applicable for authorised dealers collecting LRS remittances above ₹7 lakh in a financial year. With the rate increased to 20% for most LRS purposes (except education and medical treatment) from October 2023, this has become a significant compliance requirement for banks and money changers. Similarly, Section 206C(1H) applies TCS at 0.1% on receipt from a buyer of goods if the seller's turnover exceeds ₹10 crore and the buyer's total purchases from that seller exceed ₹50 lakh in a year — making this applicable to large trading businesses and manufacturers in ${cityName} who supply to high-volume buyers.

Taxvio handles quarterly TCS return (Form 27EQ) filing for ${cityName} businesses — including TCS computation for each transaction category, OLTAS challan reconciliation, verification of collectee PAN (to prevent 5% higher TCS under Section 206CC for missing PAN), and generation of Form 27D (TCS certificate issued to collectees, similar to Form 16A for TDS). We also advise ${cityName} businesses on TCS applicability assessment — a common source of confusion between TDS and TCS provisions for business-to-business transactions.`,
    },

    /* ── 9. Income Tax Audit ── */
    {
      slug: "income-tax-audit",
      title: `Income Tax Audit Assistance in ${cityName}`,
      price: "₹4,999",
      timeline: "Due 30th September",
      icon: "🔎",
      iconBg: "bg-rose-50 border-rose-100",
      gradient: "from-rose-500 to-pink-600",
      accentColor: "#e11d48",
      accentBg: "bg-rose-50",
      accentText: "text-rose-700",
      features: [
        "Section 44AB applicability assessment",
        "Form 3CA (for entities already audited under other law)",
        "Form 3CB (for entities not otherwise audited)",
        "Form 3CD — 44-clause detailed statement",
        "Books of accounts review and preparation",
        "E-filing on income tax portal before 30th September",
      ],
      seoContent: `Income tax audit under Section 44AB is one of the most significant compliance obligations for ${cityName}, ${district} businesses — mandatory for traders and manufacturers with gross turnover above ₹1 crore (or ₹10 crore if aggregate cash receipts and payments do not exceed 5% of total), professionals with gross receipts above ₹50 lakh, and certain other specified categories including individuals declaring income under the presumptive scheme (44AD/44ADA) at lower than the prescribed minimum rate.

The income tax audit process requires a practising Chartered Accountant to examine the books of accounts of the business, verify that the books present a true and fair view of the financial position, and prepare two forms: Form 3CA (for entities already audited under the Companies Act, LLP Act, or any other statute — where the statutory audit is already complete) or Form 3CB (for entities not otherwise required to audit under any statute — most proprietorship businesses and partnership firms), and the critically important Form 3CD.

Form 3CD is a 44-clause detailed statement covering virtually every aspect of the business's income tax position: the method of accounting used (cash vs mercantile), inventory valuation method, land and building values, partners' remuneration and interest (Section 40(b) limits), payments to related parties, amounts deemed as income under various provisions, depreciation computed under the Income Tax Act, deductions under Chapter VIA (80IC, 80IB, 80G, 80JJAA etc.), MSME payments pending beyond 45 days (Section 43B(h)), TDS compliance position for all TDS categories, acceptance and repayment of loans or deposits above ₹20,000 (Section 269SS/269T), and more. The level of disclosure in Form 3CD has expanded significantly in recent years — making expert CA preparation essential to avoid errors that trigger scrutiny.

The tax audit report must be filed on the income tax portal by 30th September — and the ITR (for audit cases) must be filed by 31st October. For ${cityName} businesses that also have a statutory audit requirement (companies, LLPs), the statutory audit must be completed before the tax audit can begin — creating a tight timeline from the close of the financial year (31st March) to the 30th September tax audit deadline. Taxvio plans the audit calendar for ${cityName} audit-required clients from April — beginning books review in April/May to ensure the tax audit is completed and filed well before the deadline rather than in a last-minute September rush.`,
    },

    /* ── 10. Income Tax Scrutiny ── */
    {
      slug: "income-tax-scrutiny",
      title: `Income Tax Scrutiny & Notice Reply in ${cityName}`,
      price: "₹1,999",
      timeline: "Per Statutory Deadline",
      icon: "⚖️",
      iconBg: "bg-red-50 border-red-100",
      gradient: "from-red-500 to-rose-600",
      accentColor: "#dc2626",
      accentBg: "bg-red-50",
      accentText: "text-red-700",
      features: [
        "Section 143(1) intimation — mismatch response",
        "Section 143(2) scrutiny notice reply",
        "Section 148 reassessment notice response",
        "Section 156 demand notice — payment or appeal",
        "CIT(A) appeal preparation and filing",
        "NFAC hearing representation — online and offline",
      ],
      seoContent: `Income tax notices are increasingly common for taxpayers across ${cityName}, ${district} as the Income Tax Department's CASS (Computer-Aided Scrutiny Selection) system, AIS cross-verification, and third-party financial data integration identify discrepancies between ITR declarations and external financial information. Understanding the type of notice received is critical — each notice type has a different nature, a different response requirement, and a different consequence for non-response.

Section 143(1) intimation is the most common communication — it is not a notice but an automated processing communication generated after ITR is processed by the Centralised Processing Centre (CPC). It shows whether the ITR was processed as filed, or whether there are adjustments (disallowances, additional income, or arithmetic errors) and resulting demands or refunds. If the 143(1) intimation shows a demand due to TDS mismatch, income addition from AIS, or deduction disallowance, a rectification request under Section 154 must be filed within 45 days of intimation — Taxvio handles these rectification filings for ${cityName} taxpayers.

Section 143(2) scrutiny notice is a formal notice requiring the ${cityName} taxpayer to appear before the assessing officer (AO) and produce evidence for specified items in the ITR. The notice must be issued within 6 months of the end of the assessment year (by 30th September). Scrutiny selection is either CASS-based (automated risk scoring) or manual (based on specific intelligence inputs). Common triggers for ${cityName} taxpayers include: large cash deposits inconsistent with declared income, high-value property purchase without corresponding ITR income, excessive deductions (large 80G donations, unusual 80C claims), significant capital gains under-reporting, or business turnover significantly different from GST-declared revenue. Non-response to 143(2) within the response date leads to ex parte assessment under Section 144 — the most unfavourable outcome.

Section 148 reassessment notice is issued when the AO has reason to believe that income has escaped assessment in prior years — with a 3-year limitation for smaller cases (escaped income below ₹50 lakh) and 10 years for larger cases (escaped income above ₹50 lakh involving serious fraud). With the CBDT's expanded use of third-party data from SEBI, FIU-IND, and GSTN, reassessment notices for historical years are becoming more frequent for ${cityName} taxpayers who had unreported income, undisclosed foreign assets, or large unexplained cash transactions.

Taxvio provides professional income tax notice reply and representation for all notice types for ${cityName} taxpayers — structured around complete notice analysis, evidence gathering (bank statements, investment proofs, contract documents, GST returns), preparation of detailed written submissions, and personal representation before the AO at the ${district} income tax office or the NFAC (National Faceless Assessment Centre) for faceless assessment proceedings. For CIT(A) appeals against assessment orders, we prepare detailed grounds of appeal with supporting case law citations.`,
    },

    /* ── 11. 12A Application ── */
    {
      slug: "12a-application",
      title: `12A Registration for Trusts in ${cityName}`,
      price: "₹2,999",
      timeline: "30–60 Working Days",
      icon: "🎗️",
      iconBg: "bg-sky-50 border-sky-100",
      gradient: "from-sky-500 to-blue-600",
      accentColor: "#0284c7",
      accentBg: "bg-sky-50",
      accentText: "text-sky-700",
      features: [
        "Form 10A — new 12AB registration (from FY 2021-22)",
        "Re-registration for trusts with old 12A certificates",
        "Charitable objects review and deed compliance check",
        "PCIT / CIT follow-up for registration order",
        "Provisional registration (3 years) for new trusts",
        "Section 11/12 income exemption guidance",
      ],
      seoContent: `Section 12A (now 12AB under the amended regime effective from 1 April 2021) registration is the foundational income tax compliance requirement for charitable trusts, societies, religious trusts, and non-profit organisations in ${cityName}, ${district} that want to claim income tax exemption on income applied for charitable or religious purposes. Without valid 12AB registration, every rupee of income received by the trust — donations, grants, programme revenue, rental income from trust property — is taxed at the maximum marginal rate of 30% plus surcharge and cess, making tax a significant drain on charitable resources.

Section 11 income tax exemption (available only with valid 12AB registration) allows trusts to exclude from taxable income: income derived from property held for charitable or religious purposes (to the extent it is applied for those purposes during the year), accumulation of income up to 15% of total income for future charitable application without formal notice, and accumulation of additional income for up to 5 years with a specific Section 11(2) statement filed in Form 10 before the due date of ITR filing.

The new 12AB registration regime (introduced by the Finance Act 2020) requires all trusts — including those with old Section 12A registrations that were previously permanent — to apply for fresh 12AB registration through Form 10A. The new regime introduced a 5-year renewable registration (replacing the earlier permanent registration) and stricter application requirements including verification of charitable activities, compliance with Section 13 restrictions (no benefit to specified persons), and confirmation of investment of trust funds in prescribed modes under Section 11(5).

For new trusts being formed in ${cityName}, Taxvio provides provisional 12AB registration (valid for 3 years from the assessment year of application) — allowing new trusts to commence charitable activities with income tax exemption while the substantive registration process unfolds. The provisional registration is converted to regular 12AB registration after the trust demonstrates actual charitable activity for at least one year. We assist with the complete 12AB registration process: trust deed review for charitable objects compliance, Form 10A preparation with activity details and financial statements, filing on the income tax portal, and follow-up with the Principal Commissioner / Commissioner of Income Tax (PCIT/CIT) jurisdictional authority for the ${district} area for the registration order.`,
    },

    /* ── 12. 80G Application ── */
    {
      slug: "80g-application",
      title: `80G Registration for NGOs in ${cityName}`,
      price: "₹2,999",
      timeline: "30–60 Working Days",
      icon: "🏅",
      iconBg: "bg-indigo-50 border-indigo-100",
      gradient: "from-indigo-500 to-violet-600",
      accentColor: "#4338ca",
      accentBg: "bg-indigo-50",
      accentText: "text-indigo-700",
      features: [
        "Form 10AC — 80G approval application",
        "50% or 100% deduction eligibility determination",
        "Donor deduction eligibility and receipt format",
        "80G certificate validity (5 years, renewable)",
        "PCIT / CIT follow-up for approval order",
        "Section 80G compliance guidance for receipts",
      ],
      seoContent: `Section 80G registration enables donors making contributions to approved charitable organisations in ${cityName}, ${district} to claim income tax deductions on their donations — 50% of the donated amount (for most charitable organisations) or 100% (for specifically approved high-impact organisations like PM Relief Fund, National Defence Fund, Clean Ganga Fund, etc.) from their taxable income. For a donor in the 30% tax bracket donating ₹1 lakh to an 80G-approved trust, the effective tax saving is ₹15,000 (50% deduction × 30% tax rate) — making 80G approval a significant incentive that drives donor engagement for ${cityName} NGOs.

80G approval is granted alongside or after 12AB registration — a trust must first have valid 12AB registration before applying for 80G. The application is filed in Form 10AC on the income tax portal, and the approval (Form 10AC certificate) is valid for 5 years from the assessment year of grant. All ${cityName} trusts and NGOs with 80G approval granted before FY 2021-22 under the old regime must apply for fresh 80G approval under the new regime using Form 10AC — old 80G certificates are no longer valid for donors claiming deduction.

For donors claiming Section 80G deduction, the trust must issue a prescribed donation receipt containing: trust name, 80G registration number, PAN of the trust, Aadhaar of the donor (if individual) or PAN of the donor, amount donated (cash donations above ₹2,000 are not eligible for 80G deduction — only non-cash payments qualify), and the charitable purpose for which the donation was received. From FY 2021-22, 80G-approved trusts must also file a quarterly or annual statement of donations received (Form 10BD) and issue Form 10BE (donation certificates) to each donor — failure to file Form 10BD disqualifies donors from claiming the Section 80G deduction even if they have a receipt.

Taxvio provides complete 80G registration services for trusts and NGOs in ${cityName} — including 12AB registration coordination (if not already done), Form 10AC preparation, activity and donation records compilation, PCIT/CIT follow-up for the 80G certificate, and post-approval compliance setup (Form 10BD quarterly statement system and Form 10BE donor certificate template). We also advise ${cityName} trusts on the correct donor receipt format to ensure donors' deduction claims are not rejected at ITR filing stage.`,
    },

    /* ── 13. Form 15G & 15H ── */
    {
      slug: "15g-15h",
      title: `Form 15G & 15H in ${cityName}`,
      price: "₹199",
      timeline: "Same Day",
      icon: "📝",
      iconBg: "bg-cyan-50 border-cyan-100",
      gradient: "from-cyan-500 to-teal-600",
      accentColor: "#0891b2",
      accentBg: "bg-cyan-50",
      accentText: "text-cyan-700",
      features: [
        "Form 15G — non-senior citizens (below 60 years)",
        "Form 15H — senior citizens (60 years and above)",
        "Eligibility check — income below taxable limit",
        "Bank FD, RD, NSS, and dividend income coverage",
        "Annual submission guidance to bank / deductor",
        "Multiple bank / FD account coverage",
      ],
      seoContent: `Form 15G and Form 15H are self-declaration forms submitted by eligible individuals to banks, post offices, and other deductors to prevent TDS deduction on interest income, dividend income, or other specified income when the individual's total income for the year is below the taxable threshold. For ${cityName} residents with fixed deposit interest as a significant income source, timely submission of 15G or 15H at the beginning of each financial year prevents unnecessary TDS deduction that would otherwise require a refund claim through ITR filing — saving both cash flow and compliance effort.

Form 15G is available to resident individuals below 60 years of age and Hindu Undivided Families (HUFs) — where two conditions must both be satisfied: (1) the estimated total income for the current financial year is nil (i.e., below the basic exemption limit of ₹2.5 lakh under old regime or ₹3 lakh under new regime), and (2) the total interest income for the year does not exceed the basic exemption limit. This second condition is frequently overlooked — individuals with FD interest of ₹3 lakh but other income of zero can still file 15G since both conditions are met, but individuals with salary income of ₹1.5 lakh and FD interest of ₹1.5 lakh (total ₹3 lakh) cannot file 15G since the total income does not exceed the limit but the filing is still valid.

Form 15H is available exclusively to senior citizens (resident individuals aged 60 years or above) — with a simpler single condition: estimated total income for the year is nil (i.e., below the basic exemption limit of ₹3 lakh for those aged 60–80 years or ₹5 lakh for super senior citizens above 80 years). Importantly, there is no condition on the absolute amount of interest income for Form 15H — unlike Form 15G, a senior citizen in ${cityName} with FD interest of ₹4 lakh but no other income can file Form 15H if they are 75 years old (basic exemption ₹5 lakh exceeds income of ₹4 lakh).

Both forms must be submitted freshly at the beginning of each financial year — they are not valid across years. ${cityName} bank account holders with FDs at multiple branches must submit a separate form to each branch. Post offices, cooperative banks, NBFC FDs, and companies paying dividends above ₹5,000 also require 15G/15H before TDS is triggered. Taxvio prepares and reviews 15G/15H declarations for ${cityName} clients — verifying eligibility, computing estimated total income accurately, and providing the completed form for submission to the relevant deductor.`,
    },
  ];
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function MPIncomeTaxCityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  const cityData = getCityData(city);
  const cityName = cityData?.name ?? formatCityDisplay(city);
  const district = cityData?.district ?? cityName;
  const region = cityData?.region ?? "Madhya Pradesh";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hello Taxvio, I need income tax services in ${cityName}, ${district}, Madhya Pradesh.`
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
    description: `Taxvio provides CA-assisted ITR filing, TDS/TCS returns, tax audit, scrutiny reply, 12A/80G registration, PAN/TAN and Form 15G/15H services in ${cityName}, ${district}, Madhya Pradesh.`,
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
    priceRange: "₹199 - ₹9,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",                  item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Madhya Pradesh",        item: "https://www.taxvio.in/state/madhya-pradesh" },
      { "@type": "ListItem", position: 3, name: "Income Tax MP",         item: "https://www.taxvio.in/state/madhya-pradesh/income-tax-services" },
      { "@type": "ListItem", position: 4, name: `${cityName} Income Tax`, item: `https://www.taxvio.in/state/madhya-pradesh/income-tax-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Income Tax Services in ${cityName}, Madhya Pradesh — Taxvio`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/madhya-pradesh/income-tax-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ITR filing due date for individuals in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `For salaried and non-audit individuals in ${cityName}, ${district}, the ITR filing due date is 31st July of the assessment year. For businesses and professionals whose accounts require tax audit under Section 44AB, the due date is 31st October. Late filing attracts a fee under Section 234F — ₹5,000 if filed after 31st July but before 31st December, and ₹10,000 thereafter (₹1,000 for total income below ₹5 lakh).`,
        },
      },
      {
        "@type": "Question",
        name: `Is income tax audit mandatory for businesses in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Income tax audit under Section 44AB is mandatory for businesses in ${cityName}, ${district} with gross turnover above ₹1 crore (₹10 crore if cash receipts and payments are below 5%). For professionals (doctors, CAs, lawyers, architects, engineers), audit is required if gross receipts exceed ₹50 lakh. Businesses under Section 44AD/44ADA presumptive scheme declaring minimum prescribed income are generally exempt from audit below the threshold.`,
        },
      },
      {
        "@type": "Question",
        name: `What documents are needed for ITR filing in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `For salaried individuals in ${cityName}: Form 16 from employer, PAN card, Aadhaar card, bank statement for FY, investment proofs (80C, 80D), and AIS/TIS from income tax portal. For proprietors: additionally business bank statements, sales and expense records, P&L account, and previous ITR. For firms/companies: partnership deed/MOA, audited financial statements, and all TDS challans.`,
        },
      },
      {
        "@type": "Question",
        name: `Can a charitable trust in ${cityName} claim income tax exemption without 12A registration?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `No. A trust or NGO in ${cityName}, ${district} can only claim income tax exemption under Section 11 on income applied for charitable purposes if it holds valid Section 12AB registration from the PCIT/CIT. Without registration, all trust income is taxed at 30% (maximum marginal rate). All trusts must obtain fresh 12AB registration under the new regime (Form 10A) introduced from 1 April 2021, even if they had old Section 12A certificates.`,
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="mp-it-city-lb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="mp-it-city-bc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="mp-it-city-sl"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="mp-it-city-faq"
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
            style={{ background: "radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 65%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 65%)" }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-7" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                {[
                  { href: "/",                                                   label: "Home"           },
                  { href: "/state/madhya-pradesh",                               label: "Madhya Pradesh" },
                  { href: "/state/madhya-pradesh/income-tax-services",           label: "Income Tax"     },
                  { href: null,                                                  label: cityName         },
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
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <MapPin size={12} className="text-indigo-300 shrink-0" />
                  {cityName}, {district} · Madhya Pradesh · Income Tax Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Return Filing
                  <span className="block mt-2 bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    in {cityName}, MP
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  CA-assisted{" "}
                  <strong className="text-white">ITR filing</strong> for salaried, proprietors,
                  firms, LLPs &amp; companies,{" "}
                  <strong className="text-white">TDS/TCS returns</strong>, tax audit,
                  scrutiny notice reply, <strong className="text-white">12A/80G registration</strong>,
                  PAN/TAN and Form 15G/15H in{" "}
                  <strong className="text-white">
                    {cityName}, {district} District, Madhya Pradesh
                  </strong>{" "}
                  — 100% online. Starting{" "}
                  <strong className="text-indigo-300">₹499</strong>.
                </p>

                {/* Trust chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck,    text: "CA-Certified"          },
                    { icon: Shield,        text: "100% Secure"           },
                    { icon: Zap,           text: "24–48 Hr ITR Filing"   },
                    { icon: Clock,         text: "Mon–Sat 9AM–7PM"      },
                    { icon: Star,          text: "4.9★ Rating"           },
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
                      <Icon size={11} className="text-indigo-300 shrink-0" /> {text}
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
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for ITR Help
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
                    <p className="font-bold text-white text-sm">
                      Income Tax — {cityName}
                    </p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      {district} · {services.length} services
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5 max-h-[380px] overflow-y-auto">
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
                      <span className="text-[10px] font-bold text-indigo-300 shrink-0 ml-2">
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
                    <p className="text-indigo-300 text-2xl font-extrabold leading-tight">₹499</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      ITR Filed in
                    </p>
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
                { icon: BadgeCheck,  label: "ICAI-Certified CAs"          },
                { icon: TrendingUp,  label: "2.5 Cr+ MP Taxpayers"        },
                { icon: Users,       label: "4,800+ Businesses Served"    },
                { icon: IndianRupee, label: "₹2.4Cr+ Tax Refunds Claimed" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Icon size={11} className="text-indigo-300 shrink-0" /> {label}
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
              { val: "24–48 Hrs", label: "ITR Filing Time",    icon: Zap         },
              { val: "4.9★",      label: "Average Rating",     icon: Star        },
              { val: "₹499",      label: "Starting Price",     icon: IndianRupee },
              { val: "100%",      label: "Online Process",     icon: Globe       },
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
                          Income Tax Service #{String(idx + 1).padStart(2, "0")}
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why {cityName} Taxpayers Choose Taxvio for Income Tax
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "CA-Certified Income Tax Professionals",
                  desc: `Every ITR, TDS return, and tax audit for ${cityName} taxpayers is handled by practising CAs — not software bots. We understand ${region}'s income tax ward and circle structures, AO jurisdiction for ${district}, and local taxpayer profiles.`,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Share Form 16, salary slips, and documents via WhatsApp or email from ${cityName}. CA review, AIS/TIS reconciliation, deduction optimisation, e-filing, and ITR-V acknowledgement — all delivered remotely.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Calculator,
                  title: "AIS / TIS Reconciliation Before Filing",
                  desc: `We cross-verify your Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) against ITR data before filing — preventing income mismatch notices which are the most common post-filing issue for ${cityName} taxpayers.`,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Notice Management",
                  desc: `We monitor your PAN for Section 143(2) scrutiny notices, demand notices under Section 156, and TDS defaults on TRACES — alerting you immediately and preparing complete, CA-reviewed replies within the statutory response window.`,
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹499",
                  desc: `No hidden consultation fees across any of the 13 income tax services. Clear, upfront pricing for ITR filing, TDS returns, audit, scrutiny reply, 12A/80G, PAN/TAN and 15G/15H — quoted before we begin.`,
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: Landmark,
                  title: `${region} Taxpayer Expertise`,
                  desc: `We understand the income tax nuances specific to ${region} — ${region.includes("Indore") ? "IT professional foreign income, capital gains, startup equity" : region.includes("Bhopal") ? "government employee allowances, PSU salary structures, pension income" : region.includes("Ujjain") ? "agro-trader P&L, commodity income, agricultural vs business income" : region.includes("Rewa") ? "coal sector salary, mining contractor income, cement manufacturer audit" : "trading business P&L, agricultural income, Section 44AD advisory"}.`,
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                How to File ITR in {cityName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Share Documents",
                  desc: `Send Form 16, PAN, Aadhaar, bank statements, and investment proofs on WhatsApp from ${cityName} — we confirm a full document checklist upfront`,
                },
                {
                  step: "02",
                  title: "CA Review & AIS Check",
                  desc: "Our CA reconciles your AIS/TIS, verifies all income sources, optimises deductions under 80C/80D/HRA/LTA, and prepares the ITR computation within 24 hours",
                },
                {
                  step: "03",
                  title: "Your Approval",
                  desc: "We share the computed ITR with tax liability / refund amount for your review and approval before e-filing — no surprises",
                },
                {
                  step: "04",
                  title: "E-Filing & Acknowledgement",
                  desc: `ITR e-filed and e-verified within 24–48 hours of document receipt. ITR-V acknowledgement delivered to your ${cityName} address or email`,
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
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-indigo-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">
                    {district} District &amp; {region}
                  </p>
                  <h2 className="text-lg font-extrabold text-gray-800">
                    Income Tax Services in Nearby Cities
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link
                    key={c.name}
                    href={`/state/madhya-pradesh/income-tax-services/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-indigo-50 hover:text-[#00416a] hover:shadow-sm transition-all"
                  >
                    <MapPin
                      size={11}
                      className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0 transition-colors"
                    />
                    ITR in {c.name}
                    <ArrowRight
                      size={11}
                      className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                ))}
                <Link
                  href="/state/madhya-pradesh/income-tax-services"
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
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-indigo-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-sky-400/10 blur-[60px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-indigo-300" />
                  Serving income tax clients in {cityName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Expert Income Tax Help in {cityName}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  ITR filing for salaried, proprietors, firms, LLPs &amp; companies, quarterly
                  TDS/TCS returns, Section 44AB tax audit, scrutiny reply, 12A/80G registration,
                  PAN/TAN and Form 15G/15H — all delivered online for taxpayers in {cityName},{" "}
                  {district}. Starting ₹499. CA-assisted, same-day WhatsApp response.
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
                  PAN · TAN · ITR Salaried · ITR Proprietor · ITR Firm/LLP · ITR Company ·
                  TDS Return · TCS Return · Tax Audit · Scrutiny Reply · 12A · 80G ·
                  15G/15H · {district} District · 100% Online
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