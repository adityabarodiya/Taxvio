// app/state/gujarat/roc/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, Building2, BookOpen, ClipboardList,
  Briefcase, AlertCircle, Calculator, Award, Package,
} from "lucide-react";
import {
  GJ_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay,
} from "@/data/gj-cites";

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
    title: `Company Registration & ROC Services in ${cityName}, ${district}, Gujarat | Taxvio`,
    description: `Professional Private Limited company formation, LLP & OPC registration, Section 8 NGO incorporation, annual MCA compliance, director KYC, company restructuring, and voluntary closure in ${cityName}, ${district}, Gujarat. CA & CS assisted, 100% online, starting ₹2,499.`,
    keywords: [
      `company registration ${cityName}`,
      `private limited company ${cityName} Gujarat`,
      `LLP registration ${cityName}`,
      `OPC incorporation ${cityName}`,
      `ROC compliance ${cityName}`,
      `MCA filing ${cityName}`,
      `director appointment ${cityName}`,
      `annual filing ${cityName}`,
      `company strike off ${cityName}`,
      `CA ${district} company formation`,
    ],
    alternates: {
      canonical: `https://www.taxvio.in/state/gujarat/roc/${city}`,
    },
    openGraph: {
      title: `ROC & Company Registration in ${cityName}, Gujarat | Taxvio`,
      description: `Company formation, LLP, OPC, annual ROC compliance in ${cityName}, ${district}, Gujarat — CA & CS assisted, from ₹2,499.`,
      url: `https://www.taxvio.in/state/gujarat/roc/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `ROC Services in ${cityName}, Gujarat | Taxvio`,
    },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(
  cityName: string,
  district: string,
  region: string
) {
  return [

    /* ── 1. Private Limited Company Formation ── */
    {
      slug: "private-limited-company-formation",
      title: `Private Limited Company Registration in ${cityName}`,
      price: "₹4,999",
      timeline: "7–10 Working Days",
      icon: "🏢",
      gradient: "from-blue-600 to-indigo-700",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-200",
      accentText: "text-blue-700",
      features: [
        "SPICe+ Part A name reservation (RUN)",
        "SPICe+ Part B comprehensive incorporation filing",
        "Memorandum of Association (MOA) professional drafting",
        "Articles of Association (AOA) customized preparation",
        "Certificate of Incorporation from RoC Gujarat",
        "PAN & TAN application processed simultaneously",
      ],
      seoContent: `Private Limited company registration is the foundation of formal business operations in ${cityName}, ${district}, Gujarat — offering limited liability protection to shareholders, enabling equity fundraising from angel investors and venture capital firms, establishing a distinct legal entity separate from promoters, and providing a professionally recognized corporate structure essential for B2B contracts, government tenders, and banking relationships. Whether you're launching a technology startup in ${cityName}'s emerging tech ecosystem, establishing a manufacturing unit to serve Gujarat's industrial supply chains, or formalizing a family-run trading business, Private Limited incorporation provides the legal framework for sustainable growth and investor confidence.

The company incorporation process in ${cityName} under the Companies Act 2013 involves multiple sequential steps managed through the Ministry of Corporate Affairs (MCA) portal. Promoters must first obtain Director Identification Number (DIN) for all proposed directors through DIN-3 application, along with Class-2 Digital Signature Certificates (DSC) required for electronic filing. The company name is then reserved through SPICe+ Part A (previously known as RUN — Reserve Unique Name form), which performs automated checks against existing company names, LLP names, and registered trademarks to ensure uniqueness and compliance with MCA naming guidelines — avoiding words suggesting government patronage, international scope without approval, or trademark infringement.

      title: "Gujarat Business Landscape Expertise",

The comprehensive SPICe+ Part B form integrates company incorporation (INC-32), DIN allotment for directors without existing DIN, PAN application (automatic), TAN application (automatic), EPFO registration (if opting for employees), ESIC registration (if applicable), professional tax registration (where applicable in Gujarat), and GST registration application (AGILE-PRO form) — creating a truly unified business registration window. Within 7–10 working days of SPICe+ Part B filing, the Registrar of Companies (RoC Gujarat, headquartered in Ahmedabad with jurisdiction over entire Gujarat state) issues the Certificate of Incorporation along with the Company Identification Number (CIN), PAN, and TAN. Taxvio manages the entire incorporation lifecycle for ${cityName} entrepreneurs — from name reservation to CIN issuance — through a 100% digital, WhatsApp-enabled service model requiring zero physical office visits.`,
    },

    /* ── 2. LLP Registration ── */
    {
      slug: "llp-registration",
      title: `Limited Liability Partnership (LLP) Formation in ${cityName}`,
      price: "₹3,999",
      timeline: "7–10 Working Days",
      icon: "🏛️",
      gradient: "from-violet-600 to-purple-700",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-200",
      accentText: "text-violet-700",
      features: [
        "LLP name reservation through LLP-RUN form",
        "FiLLiP integrated incorporation application",
        "LLP Agreement comprehensive drafting",
        "DPIN for designated partners (if not holding DIN)",
        "Digital Signature Certificate (DSC) coordination",
        "Certificate of Incorporation with unique LLPIN",
      ],
      seoContent: `Limited Liability Partnership (LLP) under the LLP Act 2008 offers the optimal balance between partnership flexibility and corporate liability protection for professional services firms, small-to-medium enterprises, and family businesses in ${cityName}, ${district}, Gujarat. Unlike traditional partnerships where partners bear unlimited personal liability for business debts and obligations, LLP provides statutory limited liability protection — partners' personal assets remain protected from LLP creditors, similar to shareholders in a company. Yet unlike Private Limited companies which face complex regulatory compliance and higher incorporation costs, LLPs enjoy simpler annual filing requirements, no mandatory statutory audit below ₹40 lakh turnover or ₹25 lakh capital contribution, and taxation at a flat 30% rate on LLP income (compared to companies' 22%–30% rate plus dividend distribution tax considerations).

For ${cityName} professional practitioners — Chartered Accountants, Company Secretaries, Cost Accountants, advocates, architects, doctors operating multi-specialty clinics, and consulting firms — LLP is the statutorily mandated or highly preferred business structure. The LLP structure is also advantageous for ${cityName} trading businesses, service providers, and small manufacturing units where promoters want limited liability protection without the governance overhead of board meetings, audit committees, and shareholder resolutions required for companies.

LLP registration in ${cityName} begins with name reservation through the LLP-RUN (Reserve Unique Name) form on the MCA portal, where the proposed LLP name is checked for similarity with existing LLP/company names and compliance with LLP naming rules (must end with "LLP" or "Limited Liability Partnership"). Taxvio then files the FiLLiP (Form for Incorporation of LLP) — a unified form consolidating DPIN allotment for designated partners (equivalent to directors in companies) who do not already hold DIN, DSC application, and the main LLP incorporation application (Form 2). Unlike company incorporation which requires MOA and AOA, LLP requires an LLP Agreement — equivalent to a partnership deed but with statutory clauses mandated under the LLP Act.

A critical compliance obligation that many ${cityName} LLP promoters overlook is that the LLP Agreement must be filed with the RoC Gujarat through Form 3 within 30 days of incorporation date — failure attracts a penalty of ₹100 per day with no upper cap. Taxvio prepares a comprehensive LLP Agreement covering business objects, capital contribution by each partner (cash, assets, or services), profit-sharing ratio (which can be equal or differential based on partner roles), partner remuneration (if any), admission and retirement procedures for partners, decision-making and voting rights, meeting procedures, and winding-up provisions — and ensures Form 3 is filed immediately post-incorporation to avoid penalties.

Post-incorporation annual compliance for ${cityName} LLPs involves filing Form 11 (Annual Return disclosing partner details, DPIN, capital contribution, and LLP turnover) by 30th May each financial year, and Form 8 (Statement of Account and Solvency — essentially financial statements with partner certification, not requiring statutory audit if turnover below ₹40 lakh and capital contribution below ₹25 lakh) by 30th October. LLPs with higher turnover/capital must additionally obtain statutory audit and tax audit under Section 44AB of Income Tax Act if turnover exceeds ₹1 crore (₹10 crore if 95% digital payments). Taxvio handles the complete annual filing cycle for ${cityName} LLPs — coordinating Form 11 and Form 8 preparation, designated partner DSC-based signing, and MCA portal submission before due dates.`,
    },

    /* ── 3. OPC Registration ── */
    {
      slug: "one-person-company-registration",
      title: `One Person Company (OPC) Incorporation in ${cityName}`,
      price: "₹2,999",
      timeline: "7–10 Working Days",
      icon: "👤",
      gradient: "from-emerald-600 to-teal-700",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-200",
      accentText: "text-emerald-700",
      features: [
        "Single director and single member structure",
        "Mandatory nominee director appointment",
        "SPICe+ integrated incorporation filing",
        "MOA & AOA drafted specifically for OPC",
        "Certificate of Incorporation with unique CIN",
        "PAN, TAN, and GST registration included",
      ],
      seoContent: `One Person Company (OPC) under Section 2(62) of the Companies Act 2013 is purpose-designed for solo entrepreneurs in ${cityName}, ${district}, Gujarat who want to operate with the legal and financial benefits of a corporate structure — limited liability protection, separate legal entity status, perpetual succession, and professional credibility — without the complexity of finding a second shareholder or director. Prior to OPC introduction in 2013, individual entrepreneurs in ${cityName} had to either run as sole proprietors (with unlimited personal liability exposing personal assets to business risks) or bring in a nominal second partner with token shareholding. OPC eliminates this artificial requirement, making it the ideal entry-level corporate vehicle for freelancers, consultants, e-commerce sellers, service providers, and micro-entrepreneurs transitioning from informal business to formal corporate operations.

Eligibility criteria for OPC formation in ${cityName} are specific: Only a natural person who is a resident Indian citizen (physically present in India for at least 182 days in the immediately preceding calendar year) can incorporate an OPC. The sole member cannot be a minor, cannot simultaneously be a member of more than one OPC at any point in time, and cannot act as a nominee in another OPC. Critically, every OPC must appoint a Nominee — a designated person who automatically becomes the sole member of the OPC in the event of the original member's death, incapacity, or resignation — and the nominee's written consent in Form INC-3 must be filed during incorporation. The nominee can be changed subsequently through Form INC-4.

A transformative 2021 amendment to the Companies Act removed two major restrictions on OPCs that previously limited their scalability: (i) the mandatory conversion threshold — earlier, OPCs were required to convert to Private Limited companies once their paid-up capital exceeded ₹50 lakh or annual turnover exceeded ₹2 crore; this compulsory conversion has been abolished, allowing OPCs to grow indefinitely while retaining OPC status; and (ii) the residency requirement relaxation — now, non-resident Indians (NRIs) and foreign nationals can also incorporate OPCs in India, subject to compliance with FEMA regulations and RBI approval where applicable. These changes make OPC a viable long-term structure for ${cityName} entrepreneurs building scalable businesses.

Compliance requirements for OPCs registered in ${cityName} are lighter than full-fledged Private Limited companies: OPCs with annual turnover below ₹2 crore need not hold Annual General Meetings (AGM) — instead, the sole member can approve financial statements through written resolution; Board Meetings can be conducted with relaxed quorum requirements and documented through circular resolutions instead of formal meetings; and smaller OPCs (turnover below ₹2 crore and paid-up capital below ₹2 crore) can file simplified Form MGT-7A instead of the detailed MGT-7 for Annual Return. However, statutory audit by a Chartered Accountant remains mandatory for all OPCs regardless of turnover, and annual ROC filings (AOC-4 and MGT-7A/MGT-7) must be completed within prescribed timelines. Taxvio manages complete OPC compliance for ${cityName} entrepreneurs — from incorporation to annual filing and beyond.`,
    },

    /* ── 4. Section 8 Company Registration ── */
    {
      slug: "section-8-ngo-company",
      title: `Section 8 Company Registration for NGOs in ${cityName}`,
      price: "₹5,999",
      timeline: "15–30 Working Days",
      icon: "🤝",
      gradient: "from-amber-600 to-orange-700",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-200",
      accentText: "text-amber-700",
      features: [
        "Section 8 licence application (Form INC-12)",
        "MOA drafted with charitable/social welfare objects",
        "AOA aligned with non-profit governance restrictions",
        "Certificate of Incorporation with Section 8 endorsement",
        "Post-formation 12AB & 80G registration guidance",
        "CSR funding and FCRA eligibility advisory",
      ],
      seoContent: `Section 8 Company under Section 8 of the Companies Act 2013 is the preferred corporate structure for non-governmental organizations (NGOs), charitable institutions, educational trusts, research foundations, sports promotion bodies, environmental conservation groups, and social welfare organizations in ${cityName}, ${district}, Gujarat that want to operate with the transparency, governance, and credibility of a corporate entity while maintaining non-profit status. Unlike trusts and societies which are governed by state-specific trust/society acts and often face credibility challenges with institutional donors and government agencies, a Section 8 Company is registered and regulated by the Ministry of Corporate Affairs (same authority governing Private Limited companies), providing higher transparency standards, mandatory audit and annual filings, and greater donor confidence — especially for accessing CSR (Corporate Social Responsibility) funds from companies, FCRA (Foreign Contribution Regulation Act) registration for foreign donations, and government grants.

The core distinguishing feature of a Section 8 Company is its objects clause — it must be formed for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, or any other similar charitable purpose, with the explicit intention to apply all profits and income solely toward achieving these objects and prohibiting distribution of any dividend to members. The MOA of a Section 8 company must include a clause stating that profits (if any) will be applied in promoting the objects, and upon winding up, any surplus assets will be transferred to another Section 8 company or entity with similar objects — ensuring permanent dedication of assets to charitable purposes.

Section 8 company registration in ${cityName} involves an additional pre-incorporation step compared to regular company formation: obtaining a special licence from the Central Government (delegated to RoC Gujarat) before the company can be incorporated. This licence application is filed through Form INC-12 along with the draft MOA and AOA, a declaration by advocates/chartered accountants/company secretaries certifying that the documents are in order, details of proposed directors (minimum 2 directors required, minimum 3 for public charitable companies), estimated income and expenditure for the next 3 financial years demonstrating financial viability, and a detailed explanation of the proposed charitable activities showing genuine intent and capacity to carry out stated objects.

Once the Section 8 licence is granted through Form INC-16 (typically takes 15–30 days depending on RoC queries and document completeness), the company is incorporated through the standard SPICe+ process similar to a Private Limited company, but with "(Section 8)" appended to the company name. Post-incorporation, ${cityName} Section 8 companies must apply for 12AB registration (successor to 12A/12AA registration under the amended income tax regime effective April 2021) through Form 10A to claim income tax exemption under Sections 11 and 12 on income applied for charitable purposes, and 80G registration through Form 10AC to enable donors to claim 50% or 100% income tax deduction on donations made to the Section 8 company — both applications filed with the Principal Commissioner of Income Tax (PCIT) or Commissioner of Income Tax (CIT) having jurisdiction over ${district}, Gujarat.

Annual compliance for Section 8 companies in ${cityName} includes all standard company filings (AOC-4 financial statements and MGT-7 annual return by November 29 for financial year ending March 31, assuming AGM held by September 30), plus additional income tax filings (Form 10B annual activity report and ITR-7 by October 31) to maintain 12AB registration validity. Section 8 companies are exempt from certain provisions applicable to regular companies — such as the requirement to prefix "Private Limited" in the name (only "(Section 8)" suffix required), minimum paid-up capital requirements, and certain managerial remuneration restrictions — but must comply strictly with restrictions on profit distribution and object clause modifications. Taxvio provides end-to-end Section 8 company formation and compliance services for ${cityName} NGOs — from licence application to annual ROC and income tax filings.`,
    },

    /* ── 5. Annual ROC Compliance ── */
    {
      slug: "annual-roc-compliance-filing",
      title: `Annual ROC Compliance & MCA Filing in ${cityName}`,
      price: "₹2,999/year",
      timeline: "Before Statutory Due Dates",
      icon: "📋",
      gradient: "from-teal-600 to-cyan-700",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-200",
      accentText: "text-teal-700",
      features: [
        "Form AOC-4 financial statements filing (60 days from AGM)",
        "Form MGT-7 / MGT-7A annual return (60 days from AGM)",
        "LLP Form 11 annual return (due 30th May)",
        "LLP Form 8 statement of accounts (due 30th October)",
        "Directors' Report comprehensive preparation",
        "Penalty avoidance through timely pre-deadline filing",
      ],
      seoContent: `Annual ROC (Registrar of Companies) compliance is a statutory obligation for every Private Limited company, OPC, Section 8 company, and LLP registered in ${cityName}, ${district}, Gujarat — and consistent non-compliance can result in accumulating late filing penalties (₹100 per day per form with no cap), director disqualification under Section 164(2) for defaults exceeding 3 financial years, company being marked 'Active Non-Compliant' in MCA records (affecting bank operations, GST compliance, and business credibility), and ultimately strike-off under Section 248 leading to loss of corporate identity and restrictions on directors from incorporating new companies for 5 years.

For companies (Private Limited, OPC, Section 8) in ${cityName}, the primary annual compliance obligations are: (i) conducting the Annual General Meeting (AGM) within 6 months from the close of the financial year (by September 30 for companies following the standard April–March financial year), where shareholders adopt the audited financial statements (Balance Sheet, Profit & Loss Account, Cash Flow Statement), Directors' Report, and Auditor's Report; (ii) filing Form AOC-4 (containing the complete financial statements in XBRL format as per Schedule III of Companies Act and attachments including auditor's report, directors' report with annexures covering business review, director appointments, related party transactions, corporate social responsibility if applicable, board meetings, and internal control systems) within 60 days of the AGM date; and (iii) filing Form MGT-7 (Annual Return disclosing shareholding pattern, director details with DIN, changes during the year, board/committee meetings held, remuneration to directors and KMP, and compliance certifications) or MGT-7A (simplified form for small companies and OPCs with turnover below ₹2 crore) within 60 days of the AGM.

Late filing of AOC-4 or MGT-7 attracts automatic additional fees calculated at ₹100 per day per form — meaning a company in ${cityName} that holds its AGM on September 30 and misses the November 29 filing deadline for both forms, filing them on December 29 instead, incurs ₹3,000 penalty for AOC-4 and ₹3,000 for MGT-7 (₹6,000 total for just 30 days delay), with penalties continuing to accumulate until filing. For companies with continuous defaults for 3 years, all directors are automatically disqualified from being appointed as directors in any other company for 5 years under Section 164(2)(a), creating significant personal and professional consequences for ${cityName} business promoters.

For LLPs registered in ${cityName}, the annual compliance framework is different: (i) Form 11 (Annual Return) must be filed by 30th May each financial year, disclosing designated partners and their DPINs, capital contribution by each partner, total LLP contribution, total LLP obligation, and LLP turnover/revenue for the year — this is a simple disclosure form not requiring statutory audit; and (ii) Form 8 (Statement of Account and Solvency) must be filed by 30th October, containing the LLP's financial statements (essentially the balance sheet and P&L) certified by designated partners — statutory audit by a CA is only mandatory if LLP turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh; below these thresholds, designated partners can self-certify Form 8.

Taxvio's annual ROC compliance service for ${cityName} businesses includes proactive reminder systems tracking your company/LLP's incorporation date, financial year-end, AGM due date (for companies), and form filing deadlines; coordination with your statutory auditor for timely audit completion and financial statement sign-off; preparation of comprehensive Directors' Report covering all mandatory disclosures under Section 134 and applicable rules; drafting of board resolutions and AGM minutes approving accounts adoption; preparation of AOC-4 in XBRL format (Extensible Business Reporting Language — the mandated digital format for financial statements filing); preparation and e-filing of MGT-7/MGT-7A and Form 11/Form 8; and DSC-based electronic signing by directors/designated partners, ensuring your ${cityName} entity remains fully compliant and penalty-free year after year.`,
    },

    /* ── 6. Director Appointment / Resignation ── */
    {
      slug: "director-change-roc-filing",
      title: `Director Appointment & Resignation in ${cityName}`,
      price: "₹1,999",
      timeline: "3–5 Working Days",
      icon: "👔",
      gradient: "from-rose-600 to-pink-700",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-200",
      accentText: "text-rose-700",
      features: [
        "Form DIR-12 for director appointment/cessation",
        "DIR-2 consent to act as director",
        "Board resolution professional drafting",
        "DIN-3 application for directors without DIN",
        "DSC coordination for new directors",
        "MCA portal status tracking until approval",
      ],
      seoContent: `Changes in the board composition of a company registered in ${cityName}, ${district}, Gujarat — whether appointment of an additional director, resignation of an existing director, cessation due to disqualification or death, or removal through board/shareholder resolution — require mandatory intimation to the Registrar of Companies (RoC Gujarat) through Form DIR-12 within 30 days of the change event. Non-filing of DIR-12 attracts additional fees of ₹100 per day (no maximum cap), and prolonged non-filing can lead to the director's DIN (Director Identification Number) being marked inactive on the MCA master data, creating obstacles for the director's appointment in other companies and affecting their professional standing.

For ${cityName} companies onboarding investor-nominated directors as part of funding rounds (common in startups raising institutional capital), adding independent directors to meet governance standards for bank credit facilities, appointing professional directors with industry expertise, or processing the exit of founding directors transitioning to advisory roles, timely and accurate DIR-12 filing is critical to maintaining clean MCA records and avoiding future complications during audits, compliance reviews, or due diligence by investors and acquirers.

The director appointment process involves several sequential steps: (i) the incoming director must already possess a DIN — if they don't have one, a fresh DIN application must be filed through Form DIN-3 (DIN application is now integrated within SPICe+ for new company incorporations; for post-incorporation director appointments, standalone DIN-3 is required); (ii) the incoming director must obtain a Class-2 Digital Signature Certificate (DSC) in their name, issued by licensed Certifying Authorities, required for electronically signing MCA forms; (iii) the incoming director must provide written consent to act as director of the company through Form DIR-2, confirming they are not disqualified under Section 164 and will abide by directorial duties; (iv) the Board of Directors must pass a formal resolution (in a duly convened Board Meeting with proper quorum, or through circular resolution if permitted under the company's AOA and applicable laws) approving the appointment — the resolution must specify the appointment date, category of directorship (executive/non-executive, independent/non-independent), and remuneration/sitting fees if any; and (v) for certain categories of directors (such as independent directors, or directors appointed to fill casual vacancies), shareholder approval through Ordinary Resolution in a General Meeting is also required.

Form DIR-12 must be filed within 30 days from the date of appointment or cessation, attaching the board resolution, DIR-2 consent form, and proof of identity/address of the incoming director. For resignation cases, both the company (through DIR-12) and the resigning director personally (through DIR-11) must file with the MCA — the dual filing protects the resigning director's personal records by formally notifying the MCA that they are no longer associated with the company and should not be held liable for future defaults. Taxvio handles the complete director change process for ${cityName} companies — coordinating DIN/DSC if required, drafting board resolutions and DIR-2 consent, preparing and filing DIR-12 and DIR-11, and tracking MCA approval until the director change is reflected in the public MCA master data.`,
    },

    /* ── 7. Company Name Change ── */
    {
      slug: "company-name-change-mca",
      title: `Company Name Change ROC Filing in ${cityName}`,
      price: "₹2,999",
      timeline: "15–20 Working Days",
      icon: "✏️",
      gradient: "from-indigo-600 to-blue-700",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-200",
      accentText: "text-indigo-700",
      features: [
        "MCA master data name availability verification",
        "SPICe+ Part A (RUN) name reservation",
        "Special Resolution in EGM drafting",
        "Form INC-24 application to RoC Gujarat",
        "MOA alteration with new name clause",
        "Fresh Certificate of Incorporation issued",
      ],
      seoContent: `Company name change for entities registered in ${cityName}, ${district}, Gujarat is a formal statutory procedure governed by Sections 13 and 16 of the Companies Act 2013 requiring MCA approval, shareholder consent through Special Resolution (75% majority), and consequent amendment of the Memorandum of Association (MOA). Unlike informal business name changes in sole proprietorships where a trade name can be modified at will, a company's legal name as registered in the Certificate of Incorporation can only be changed through the prescribed regulatory process involving RoC Gujarat approval and issuance of a fresh Certificate of Incorporation reflecting the new name.

${cityName} companies seek name changes for various strategic and operational reasons: rebranding following acquisition or merger with another entity; pivot in business model requiring a name that better reflects new product/service focus; resolution of trademark conflicts or passing-off disputes with existing brands; upgrading from a generic/functional name to a more distinctive and marketable brand identity; or compliance with regulatory requirements (such as adding "India" or removing it based on FDI regulations, or changing language/script to comply with Gujarat state requirements). The name change process also applies to companies changing their corporate form — such as a Private Limited company converting to a Public Limited company (requiring removal of "Private" and addition of "Limited" as suffix).

The name change procedure begins with availability verification — conducting a comprehensive search to ensure the proposed new name is not identical or deceptively similar to any existing company or LLP name registered in India (checked through MCA master data search), does not infringe any registered trademarks in the relevant class of goods/services (checked through IPRS — Intellectual Property India database maintained by the Controller General of Patents, Designs & Trade Marks), and complies with MCA naming guidelines (avoiding words suggesting government patronage like "National", "Indian", or "Bharat" without approval; avoiding restricted words like "Bank", "Insurance", or "Stock Exchange" without sectoral regulator approval; and ensuring the name is not offensive, obscene, or undesirable under Section 4 of the Companies Act).

Taxvio conducts this dual verification before filing the RUN (Reserve Unique Name) application — now filed as SPICe+ Part A on the MCA portal — which reserves the proposed name for 20 days if approved by RoC Gujarat. During this 20-day validity window, the company must pass a Special Resolution in an Extraordinary General Meeting (EGM) of shareholders approving the name change, with compliance to Section 100 (special business requiring explanatory statement in the EGM notice), Section 114 (minimum 21 days clear notice), and quorum requirements under the AOA. The Special Resolution must be filed with RoC through Form MGT-14 within 30 days of passing.

The main name change application is filed through Form INC-24 along with the board resolution recommending the name change, Special Resolution passed by shareholders, and altered MOA (with the new name substituted in the Name Clause / Clause I, retaining all other clauses unchanged). On approval by RoC Gujarat, a fresh Certificate of Incorporation bearing the new name is issued — and from this date, the company must use only the new name in all dealings, contracts, and statutory records. Taxvio then advises on consequential changes required across all statutory and operational platforms: updating the company's common seal (if any) with the new name and CIN, modifying letterheads, invoices, website, email signatures, signboards at registered office in ${cityName}, GST registration name update (through amendment on GST portal), PAN name update (through online PAN correction application or physical request to NSDL), TAN name update, bank account name change with all banks where the company holds accounts, trademark registrations in the company's name, domain name ownership records, ISO certifications, and all other licenses and registrations held by the company.`,
    },

    /* ── 8. Increase in Authorised Capital ── */
    {
      slug: "authorized-share-capital-increase",
      title: `Authorised Share Capital Increase in ${cityName}`,
      price: "₹2,499",
      timeline: "7–10 Working Days",
      icon: "📈",
      gradient: "from-sky-600 to-blue-700",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-200",
      accentText: "text-sky-700",
      features: [
        "Board resolution recommending capital increase",
        "Ordinary Resolution at General Meeting",
        "MOA Capital Clause (Clause V) alteration",
        "Form SH-7 e-filing with RoC Gujarat",
        "MCA government fee payment (slab-based)",
        "Updated capital structure certificate",
      ],
      seoContent: `Authorised Share Capital is the maximum amount of share capital that a company is legally permitted to issue to shareholders, as declared in the Capital Clause (Clause V) of the Memorandum of Association (MOA) at the time of incorporation. Every Private Limited company, OPC, or Section 8 company in ${cityName}, ${district}, Gujarat planning to allot new shares — for bringing in fresh equity investment from angel investors or venture capital funds, issuing Employee Stock Option Plans (ESOPs) to employees, allotting bonus shares to existing shareholders, conducting rights issues to raise working capital, or restructuring shareholding for merger/demerger purposes — must ensure that the total issued and subscribed capital after the proposed allotment does not exceed the authorised capital. If the proposed share allotment would cause issued capital to exceed authorised capital, the company must first increase its authorised capital through the statutory procedure prescribed under Section 61 of the Companies Act.

Many ${cityName} startups and growth-stage companies encounter the authorised capital constraint during fundraising — a company incorporated with ₹1 lakh authorised capital (the most common initial authorised capital for Private Limited companies, requiring ₹5,000 MCA government fee) wanting to allot shares worth ₹10 lakh to a new investor must first increase authorised capital to at least ₹11 lakh (covering the existing issued capital plus the new allotment) before proceeding with the actual share issuance. The authorised capital increase itself does not involve issuing new shares or bringing in money — it merely creates the legal headroom in the MOA for future allotment.

The authorised capital increase process requires actions at both board and shareholder levels: (i) the Board of Directors passes a resolution recommending the increase to the shareholders, typically specifying the current authorised capital, proposed increased authorised capital, and the business rationale (such as facilitating a planned fundraise or ESOP pool creation); (ii) the shareholders pass an Ordinary Resolution (simple majority, i.e., more than 50% of votes cast) in a General Meeting (either EGM or the next AGM) approving the increase and the consequent alteration to the MOA Capital Clause; and (iii) the altered MOA reflecting the new authorised capital is prepared, with Clause V restated to show the increased amount and the corresponding number of equity shares of face value ₹10 or ₹100 or other denominations.

Form SH-7 (Notice to Registrar of any alteration of share capital) must be filed with RoC Gujarat within 30 days of passing the Ordinary Resolution, attaching the altered MOA, certified true copy of the board resolution and Ordinary Resolution, and form fee. Additionally, MCA government fee (stamp duty) must be paid on the incremental authorised capital, calculated according to the slab rates in Annexure A of the Companies (Registration Offices and Fees) Rules: ₹5,000 for authorised capital up to ₹1 lakh; ₹3,000 for every ₹1 lakh or part thereof in excess of ₹1 lakh and up to ₹5 lakh (total ₹17,000 for ₹5 lakh authorised capital); ₹2,000 for every ₹1 lakh or part thereof in excess of ₹5 lakh and up to ₹1 crore; and ₹1,000 for every ₹1 lakh or part thereof in excess of ₹1 crore. For a ${cityName} company increasing authorised capital from ₹1 lakh to ₹10 lakh (increment of ₹9 lakh), the total MCA fee would be ₹5,000 (for first ₹1 lakh) + ₹12,000 (for next ₹4 lakh at ₹3,000 per lakh) + ₹10,000 (for next ₹5 lakh at ₹2,000 per lakh) = ₹27,000.

Once SH-7 is approved by RoC Gujarat (typically within 7–10 working days), the company's authorised capital as reflected in the MCA master data is updated, and the company can proceed with the actual share allotment (through Form PAS-3 for private limited companies) to investors, employees under ESOP schemes, or existing shareholders in rights/bonus issues. Taxvio provides end-to-end authorised capital increase services for ${cityName} companies — drafting board and shareholder resolutions, preparing altered MOA, calculating and arranging payment of MCA fees, filing SH-7, and coordinating subsequent share allotment filings for funded startups and growing businesses.`,
    },

    /* ── 9. Company Closure / Strike Off ── */
    {
      slug: "company-closure-strike-off",
      title: `Company Closure & Voluntary Strike Off in ${cityName}`,
      price: "₹3,999",
      timeline: "3–6 Months",
      icon: "🔒",
      gradient: "from-gray-600 to-slate-700",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-200",
      accentText: "text-gray-700",
      features: [
        "Form STK-2 fast-track strike-off application",
        "Indemnity bond and statutory affidavit",
        "NIL assets/liabilities statement preparation",
        "Special Resolution and Board Resolution",
        "Newspaper advertisement publication (if required)",
        "RoC Gujarat closure order tracking",
      ],
      seoContent: `Company closure through voluntary strike-off under Section 248 of the Companies Act 2013 is the fastest and most cost-effective method for dissolving a Private Limited company, OPC, or Section 8 company in ${cityName}, ${district}, Gujarat that has ceased operations, never commenced business, or wishes to wind up without undergoing the lengthy and expensive tribunal-based liquidation process under Sections 271–272. Without formal closure, a non-operating company in ${cityName} continues to exist as a legal entity on the MCA register indefinitely — attracting ongoing annual compliance obligations (AOC-4 and MGT-7 filings), accumulating late filing penalties at ₹100 per day per form, potential director disqualification under Section 164(2) for continued defaults, and periodic notices from RoC Gujarat questioning the company's status — creating perpetual legal and financial liabilities for promoters.

The voluntary strike-off mechanism (officially called Fast Track Exit or FTE, now filed through Form STK-2) is available to ${cityName} companies that satisfy specific eligibility criteria: (i) the company has not commenced business within one year of incorporation, or has not been carrying on any business or operation for the immediately preceding two financial years and has not made any application for dormant company status under Section 455; (ii) the company has no assets and liabilities (NIL balance sheet) — all bank accounts must be closed, all assets must be distributed or transferred, all outstanding liabilities must be settled, and all charges registered with the RoC must be satisfied (or the secured creditor must provide No Objection Certificate); (iii) the company has not defaulted in filing outstanding statutory returns with RoC (or has filed all outstanding returns before STK-2 application, with additional fees paid for late filings); and (iv) the company is not under any investigation by regulatory authorities, no prosecution or legal proceedings are pending, and the company has obtained tax clearance from income tax and GST departments (ITR NIL returns filed, GST registration cancelled, NOC from tax authorities showing no outstanding demands).

The STK-2 application for ${cityName} companies requires several supporting documents and declarations: (i) Form STK-3 — Affidavit by each director confirming that the company has no assets or liabilities, has not carried on business for two years, has filed all statutory returns, and is not under investigation; (ii) Form STK-4 — Indemnity Bond executed by all directors (on non-judicial stamp paper of adequate stamp duty value as per Gujarat stamp duty rules — typically ₹100 for companies with paid-up capital up to ₹25 lakh, scaling up for higher capital) undertaking to indemnify all persons against any loss arising from dissolution and agreeing to meet any outstanding liabilities that may surface post-dissolution; (iii) Board Resolution authorizing filing of STK-2, passed in a duly convened Board Meeting; (iv) Special Resolution passed by members (requiring 75% majority) approving the application for strike-off, passed in a General Meeting with proper notice; (v) Statement of Accounts prepared by directors showing NIL assets and liabilities as on the date of application; and (vi) bank closure letters from all banks where the company held accounts.

Form STK-2 is filed on the MCA portal with digital signatures of all directors. The RoC Gujarat processes the application, conducts verification checks including querying other government departments and regulatory authorities, and if satisfied that all conditions are met and no objections are received, publishes a notice in the Official Gazette stating the intention to strike off the company's name. If no objections are received within 30 days of Gazette publication, the RoC issues the final strike-off order, and the company's name is removed from the Register of Companies — the company ceases to exist as a legal entity from the date of strike-off published in the Gazette. The entire process typically takes 3–6 months from STK-2 filing to final strike-off, depending on RoC workload and completeness of documentation.

Taxvio manages the complete company closure process for ${cityName} businesses — advising on eligibility, coordinating clearance of all outstanding statutory filings (AOC-4, MGT-7, Form 11, Form 8, ITR, GST returns), assisting with bank account closure, preparing board resolution and Special Resolution, drafting STK-3 affidavit and STK-4 indemnity bond with adequate stamp duty, preparing NIL statement of accounts, filing STK-2 on MCA portal with all attachments, and actively tracking the application through RoC queries, Gazette publication, objection period, and final strike-off order — ensuring complete and compliant closure for promoters ready to exit the corporate structure.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function GJROCCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = getCityData(city);
  const cityName = cityData?.name ?? formatCityDisplay(city);
  const district = cityData?.district ?? cityName;
  const region = cityData?.region ?? "Gujarat";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hello Taxvio, I need ROC services in ${cityName}, ${district}, Gujarat.`
  )}`;

  const services = getServiceContent(cityName, district, region);

  const nearbyCities = GJ_CITIES.filter(
    (c) => c.district === district && slugifyCity(c.name) !== city
  ).slice(0, 5);
  const regionCities =
    nearbyCities.length < 3
      ? GJ_CITIES.filter(
          (c) => c.region === region && slugifyCity(c.name) !== city
        ).slice(0, 6)
      : nearbyCities;

  /* ── JSON-LD ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides company registration, LLP formation, OPC, Section 8, annual ROC compliance, director changes, and company closure services in ${cityName}, ${district}, Gujarat.`,
    areaServed: [
      {
        "@type": "City",
        name: cityName,
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
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
      reviewCount: "2600",
    },
    priceRange: "₹2499 - ₹9999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.taxvio.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "ROC Services — Gujarat",
        item: "https://www.taxvio.in/state/gujarat/roc",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: district,
        item: `https://www.taxvio.in/state/gujarat/roc#${district.toLowerCase()}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${cityName} ROC Services`,
        item: `https://www.taxvio.in/state/gujarat/roc/${city}`,
      },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `ROC Services in ${cityName}, Gujarat`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/gujarat/roc/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does company registration take in ${cityName}, Gujarat?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `With complete documentation, a Private Limited company or OPC in ${cityName} can be incorporated in 7–10 working days through the SPICe+ integrated process. This includes name approval, DIN/DSC issuance, MOA/AOA filing, and Certificate of Incorporation from RoC Gujarat.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the minimum capital required for company registration in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `There is no minimum paid-up capital requirement for Private Limited companies or OPCs in ${cityName} under the Companies Act 2013. You can incorporate with ₹1 paid-up capital. However, MCA government fees are based on authorised capital declared in the MOA. Most startups choose ₹1 lakh authorised capital (₹5,000 government fee).`,
        },
      },
      {
        "@type": "Question",
        name: `Which annual filings are mandatory for companies in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Every Private Limited company in ${cityName} must file Form AOC-4 (audited financial statements) and MGT-7/MGT-7A (annual return) with RoC Gujarat each year. Additionally, statutory audit by a CA is mandatory, quarterly board meetings must be held, and event-based forms (DIR-12 for director changes, SH-7 for capital increase, etc.) must be filed as applicable.`,
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="lb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="sl-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f5f8fd] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#1a3c5e] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3c5e] via-[#12304f] to-[#091e33]" />
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
            style={{
              background:
                "radial-gradient(circle,rgba(96,165,250,0.12) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(52,211,153,0.08) 0%,transparent 65%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                {[
                  { href: "/", label: "Home" },
                  {
                    href: "/state/gujarat/roc",
                    label: "ROC Services — Gujarat",
                  },
                  { href: null, label: cityName },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5">
                    {href ? (
                      <Link
                        href={href}
                        className="hover:text-white/80 transition"
                      >
                        {label}
                      </Link>
                    ) : (
                      <span className="text-white/80 font-semibold">
                        {label}
                      </span>
                    )}
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
                  <MapPin size={12} className="text-blue-400 shrink-0" />
                  {cityName}, {district} · Gujarat · ROC Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Company Registration & ROC Services
                  <span className="block mt-2 bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
                    in {cityName}, Gujarat
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Professional{" "}
                  <strong className="text-white">
                    Private Limited company formation
                  </strong>
                  ,{" "}
                  <strong className="text-white">LLP & OPC registration</strong>
                  , Section 8 NGO incorporation, annual MCA compliance, director appointments, capital restructuring &amp; company closure in{" "}
                  <strong className="text-white">
                    {cityName}, {district}, Gujarat
                  </strong>{" "}
                  — 100% online by CA & CS professionals. Starting{" "}
                  <strong className="text-blue-300">₹2,499</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA & CS Certified" },
                    { icon: Shield, text: "MCA Compliant" },
                    { icon: Zap, text: "Same-Day Response" },
                    { icon: Clock, text: "Mon–Sat 9AM–7PM" },
                    { icon: Star, text: "4.9★ Rating" },
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
                      <Icon size={11} className="text-blue-300 shrink-0" />{" "}
                      {text}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-4 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp
                    for ROC Help
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#1a3c5e] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
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

              {/* Right — services panel */}
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
                      ROC Services — {cityName}
                    </p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      {district} · {services.length} services
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>
                <div className="p-4 space-y-1.5 max-h-[420px] overflow-y-auto">
                  {services.map((svc) => (
                    <a
                      href={`#${svc.slug}`}
                      key={svc.slug}
                      className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/10"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="flex items-center gap-2 text-xs font-semibold text-white/75">
                        <span>{svc.icon}</span>
                        <span className="truncate text-[11px]">
                          {svc.title.replace(` in ${cityName}`, "")}
                        </span>
                      </span>
                      <span className="text-[10px] font-bold text-blue-300 shrink-0 ml-2">
                        {svc.price}
                      </span>
                    </a>
                  ))}
                </div>
                <div
                  className="mx-4 mb-4 mt-2 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      Starting Price
                    </p>
                    <p className="text-blue-300 text-2xl font-extrabold leading-tight">
                      ₹2,499
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      Same-day
                    </p>
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
                { icon: BadgeCheck, label: "ICAI & ICSI Certified" },
                { icon: TrendingUp, label: "10,000+ Companies" },
                { icon: Users, label: "6,000+ Gujarat Businesses" },
                { icon: Building2, label: "RoC Gujarat Experts" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-white/45 text-xs"
                >
                  <Icon size={11} className="text-blue-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f5f8fd"
            />
          </svg>
        </section>

        {/* ════════ STATS RIBBON ════════ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "7–10 Days", label: "Company Formation", icon: Zap },
              { val: "4.9★", label: "Average Rating", icon: Star },
              { val: "₹2,499", label: "Starting Price", icon: IndianRupee },
              { val: "9", label: "ROC Services", icon: ClipboardList },
            ].map(({ val, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[#f0f5fb] border border-[#dce8f5] text-center hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1a3c5e]/10 flex items-center justify-center">
                  <Icon size={15} className="text-[#1a3c5e]" />
                </div>
                <p className="text-xl font-extrabold text-[#1a3c5e]">{val}</p>
                <p className="text-[11px] text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ SERVICE CARDS WITH DEEP SEO CONTENT ════════ */}
        <section className="py-20 bg-[#f5f8fd]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-16">
            {services.map((svc, idx) => (
              <article
                key={svc.slug}
                id={svc.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${svc.gradient} p-6 md:p-8`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl border border-white/25 shrink-0">
                        {svc.icon}
                      </div>
                      <div>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                          ROC Service #{String(idx + 1).padStart(2, "0")}
                        </p>
                        <h2 className="text-lg md:text-2xl font-extrabold text-white leading-tight">
                          {svc.title}
                        </h2>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                      <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center min-w-[90px]">
                        <p className="text-[10px] text-white/60 font-bold uppercase tracking-wide">
                          Price
                        </p>
                        <p className="text-white font-extrabold text-lg leading-tight">
                          {svc.price}
                        </p>
                      </div>
                      <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center min-w-[90px]">
                        <p className="text-[10px] text-white/60 font-bold uppercase tracking-wide">
                          Timeline
                        </p>
                        <p className="text-white font-bold text-sm leading-tight">
                          {svc.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
                    {/* SEO Content */}
                    <div>
                      <h3 className="text-xs font-bold text-[#1a3c5e] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <BookOpen size={13} />
                        About This Service in {cityName}
                      </h3>
                      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        {svc.seoContent.split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
                        <a
                          href={WA}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97] shadow-md shadow-green-500/20"
                        >
                          <MessageCircle size={14} /> WhatsApp Us
                        </a>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-[#1a3c5e] hover:bg-[#0f2640] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97]"
                        >
                          Get Quote <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Features Sidebar */}
                    <div
                      className={`${svc.accentBg} rounded-2xl p-5 border ${svc.accentBorder}`}
                    >
                      <p className="text-[11px] font-bold text-[#1a3c5e] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle size={13} /> What&apos;s Included
                      </p>
                      <ul className="space-y-3">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <div
                              className={`w-5 h-5 rounded-full ${svc.accentBg} border ${svc.accentBorder} flex items-center justify-center shrink-0 mt-0.5`}
                            >
                              <CheckCircle
                                size={11}
                                className={svc.accentText}
                              />
                            </div>
                            <span className="text-xs text-gray-700 font-medium leading-relaxed">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-4 border-t border-gray-200/60">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
                              Service Fee
                            </p>
                            <p
                              className={`text-2xl font-extrabold ${svc.accentText}`}
                            >
                              {svc.price}
                            </p>
                          </div>
                          <a
                            href={WA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#1a3c5e] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#0f2640] transition-all"
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

        {/* ════════ WHY TAXVIO ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3c5e] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3c5e] mt-4">
                Why {cityName} Businesses Choose Taxvio for ROC Services
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "Qualified CA & CS Professionals",
                  desc: `Every company formation and ROC filing for ${cityName} businesses is handled by practising Chartered Accountants and Company Secretaries with deep MCA expertise — ensuring zero-rejection filings and compliant documentation.`,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Digital — No Office Visit",
                  desc: `Share documents on WhatsApp from anywhere in ${cityName}. We handle name search, DSC, MOA/AOA drafting, and MCA filing remotely. Certificate delivered digitally to your inbox.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Briefcase,
                  title: "RoC Gujarat Jurisdiction Expertise",
                  desc: `All Gujarat companies register under RoC Gujarat (Ahmedabad). Our team understands state-specific filing procedures, naming rules, and compliance timelines for ${district} district companies.`,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Compliance Alerts",
                  desc: `We track your company's annual filing deadlines (AOC-4, MGT-7, Form 11/8, board meetings) and alert you well before due dates — preventing penalties and director disqualification.`,
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹2,499",
                  desc: `Clear upfront fees. All government charges, professional fees, and DSC costs disclosed before starting. ${cityName} entrepreneurs know exactly what they pay for each ROC service.`,
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: Award,
                  title: "Gujarat Business Landscape Expertise",
                  desc: `Deep understanding of ${cityName}'s business ecosystem — from GIFT City fintech to Morbi ceramics and Surat diamonds. We provide contextually relevant corporate structuring advice.`,
                  color: "bg-sky-100 text-sky-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-5 bg-[#f5f8fd] border border-[#dce8f5] rounded-2xl hover:border-[#1a3c5e]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PROCESS STEPS ════════ */}
        <section className="py-16 bg-[#f5f8fd] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3c5e] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#1a3c5e] mt-3">
                How to Register Your Company in {cityName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Share Requirements",
                  desc: "Tell us company type, proposed name, directors' details, and business objects via WhatsApp",
                },
                {
                  step: "02",
                  title: "CA/CS Drafting",
                  desc: "We reserve name, obtain DIN/DSC, draft MOA/AOA, and prepare all MCA forms",
                },
                {
                  step: "03",
                  title: "Your Approval",
                  desc: "Review all documents, approve, and e-sign before MCA submission",
                },
                {
                  step: "04",
                  title: "CIN Issued",
                  desc: "RoC Gujarat issues Certificate of Incorporation. PAN/TAN follow within 2–3 days",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1a3c5e] text-white text-sm font-extrabold flex items-center justify-center mb-3">
                    {step}
                  </div>
                  <p className="font-bold text-gray-800 text-sm mb-1">
                    {title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  {step !== "04" && (
                    <ArrowRight
                      size={14}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 text-[#1a3c5e] hidden md:block"
                    />
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3c5e] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-2xl font-extrabold text-[#1a3c5e] mt-3">
                ROC & Company Registration FAQs for {cityName}
              </h2>
            </div>
            <div
              className="space-y-3"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {[
                {
                  q: `How long does company registration take in ${cityName}, Gujarat?`,
                  a: `With complete documentation, a Private Limited company or OPC in ${cityName} can be incorporated in 7–10 working days through the SPICe+ integrated process. This includes name approval, DIN/DSC issuance, MOA/AOA filing, and Certificate of Incorporation from RoC Gujarat.`,
                },
                {
                  q: `What is the minimum capital required for company registration in ${cityName}?`,
                  a: `There is no minimum paid-up capital requirement for Private Limited companies or OPCs in ${cityName} under the Companies Act 2013. You can incorporate with ₹1 paid-up capital. However, MCA government fees are based on authorised capital declared in the MOA. Most startups choose ₹1 lakh authorised capital (₹5,000 government fee).`,
                },
                {
                  q: `Which annual filings are mandatory for companies in ${cityName}?`,
                  a: `Every Private Limited company in ${cityName} must file Form AOC-4 (audited financial statements) and MGT-7/MGT-7A (annual return) with RoC Gujarat each year. Additionally, statutory audit by a CA is mandatory, quarterly board meetings must be held, and event-based forms (DIR-12 for director changes, SH-7 for capital increase, etc.) must be filed as applicable.`,
                },
              ].map((f) => (
                <div
                  key={f.q}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <div className="px-5 py-4 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1a3c5e]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={11} className="text-[#1a3c5e]" />
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold text-gray-800"
                        itemProp="name"
                      >
                        {f.q}
                      </p>
                      <div
                        itemScope
                        itemType="https://schema.org/Answer"
                      >
                        <p
                          className="text-xs text-gray-600 mt-2 leading-relaxed"
                          itemProp="text"
                        >
                          {f.a}
                        </p>
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
          <section className="py-14 bg-[#f5f8fd] border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#1a3c5e] to-blue-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#1a3c5e]">
                    {district} & {region}
                  </p>
                  <h2 className="text-lg font-extrabold text-gray-800">
                    ROC Services in Nearby Cities
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link
                    key={c.name}
                    href={`/state/gujarat/roc/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#1a3c5e]/30 hover:bg-blue-50 hover:text-[#1a3c5e] hover:shadow-sm transition-all"
                  >
                    <MapPin
                      size={11}
                      className="text-[#1a3c5e]/50 group-hover:text-[#1a3c5e] shrink-0"
                    />
                    ROC in {c.name}
                    <ArrowRight
                      size={11}
                      className="text-gray-300 group-hover:text-[#1a3c5e] group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                ))}
                <Link
                  href="/state/gujarat/roc"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#1a3c5e]/30 bg-[#dce8f5] px-4 py-2 text-sm font-bold text-[#1a3c5e] hover:shadow-sm transition-all"
                >
                  View All Gujarat Cities{" "}
                  <ArrowRight
                    size={11}
                    className="group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ════════ CTA BANNER ════════ */}
        <section className="py-16 px-6 bg-[#f5f8fd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#1a3c5e] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a3c5e] to-[#091e33]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-400/10 blur-[80px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-blue-300" />
                  Serving businesses in {cityName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Register Your Company in {cityName} — Fast & Compliant
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  Private Limited, LLP, OPC, Section 8, annual ROC compliance,
                  director changes and more — all delivered online for {cityName} businesses.
                  Starting ₹2,499. CA & CS assisted, same-day WhatsApp response.
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
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#1a3c5e] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
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
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}