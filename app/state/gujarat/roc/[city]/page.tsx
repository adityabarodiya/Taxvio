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
import InquiryFormButton from "@/components/InquiryFormButton";

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
function getServiceContent(areaName: string, district: string, region: string) {
  return [

    /* ── 1. Private Limited Company Formation ── */
    {
      slug: "private-limited-formation",
      title: `Private Limited Company Formation in ${areaName}`,
      price: "₹7,999",
      timeline: "7–10 Working Days",
      icon: "🏢",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "SPICe+ integrated form — DIN, DSC, name approval, MOA, AOA",
        "Minimum 2 directors & 2 shareholders (can be same persons)",
        "Certificate of Incorporation from RoC Patna",
        "PAN, TAN and bank account opening guidance",
        "Digital Signature Certificate for all directors",
        `Registered office documentation for your ${areaName} address`,
      ],
      seoContent: `Private Limited Company registration is the most widely adopted business structure for entrepreneurs establishing formal operations in ${areaName}, ${district}, Bihar — offering limited liability protection for directors and shareholders, a separate corporate legal identity, significantly easier access to bank credit and institutional funding, and superior credibility with government departments, large vendors, and corporate clients compared to a sole proprietorship. Bihar's growing business landscape — spanning agri-processing in Muzaffarpur and Darbhanga, construction in Patna, food manufacturing across the Tirhut and Kosi divisions, healthcare and diagnostics in district headquarters, and the rapidly expanding education and coaching sector concentrated in Patna — has seen a meaningful rise in Private Limited Company incorporations as entrepreneurs formalise previously informal or proprietorship-based businesses.

Under the Companies Act 2013 as amended, a Private Limited Company requires a minimum of 2 directors (maximum 15) and 2 shareholders (maximum 200), and the 2015 amendment eliminated the earlier ₹1 lakh minimum paid-up capital requirement entirely — meaning a ${areaName} entrepreneur can incorporate with as little as ₹1 in authorised and paid-up capital. Every company incorporated with a registered office address in ${areaName}, ${district} falls under the jurisdiction of the Registrar of Companies, Patna (RoC Patna), which administers corporate registrations across Bihar and Jharkhand.

The incorporation process uses the SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) integrated form on the MCA21 V3 portal — combining Director Identification Number (DIN) allotment, Digital Signature Certificate procurement, name reservation via RUN (Reserve Unique Name) or SPICe+ Part A, industry-specific MOA and AOA drafting, and simultaneous PAN and TAN application into a single consolidated filing. Taxvio handles the complete process for ${areaName} businesses — from name availability and trademark conflict checks, to DSC procurement, Aadhaar-based DIN e-KYC, SPICe+ Part A and Part B filing, and receipt of the Certificate of Incorporation. Post-incorporation, we deliver the company PAN card, TAN allotment letter, and a complete first-year compliance checklist covering the statutory first board meeting, share certificate issuance, and registers of members and directors setup.`,
    },

    /* ── 2. LLP Registration ── */
    {
      slug: "llp-formation",
      title: `LLP Registration in ${areaName}`,
      price: "₹6,999",
      timeline: "7–12 Working Days",
      icon: "🤝",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "FiLLiP form filing on MCA portal",
        "DPIN for all designated partners",
        "LLP Agreement drafting — profit sharing, rights, duties",
        "Stamp duty payment for LLP Agreement",
        "Form 3 filing within 30 days of incorporation",
        "Certificate of Incorporation as LLP",
      ],
      seoContent: `Limited Liability Partnership (LLP) registration offers professionals and business partners in ${areaName}, ${district}, Bihar the operational flexibility of a traditional partnership combined with the limited liability protection characteristic of a company — making it particularly well-suited for CA firms, law practices, medical partnerships, architectural consultancies, trading partnerships transitioning from traditional firm structures, and small-to-medium professional services businesses across Bihar's district commercial centres. Under the LLP Act 2008, every partner's personal assets remain protected from the LLP's business liabilities — a meaningful structural upgrade over conventional partnership firms where partners carry unlimited personal liability for all business debts and obligations.

The LLP incorporation process in ${areaName} uses the FiLLiP (Form for Incorporation of Limited Liability Partnership) on the MCA portal, which integrates DPIN (Designated Partner Identification Number) allotment, name reservation via RUN, and Certificate of Incorporation into a single application. Every LLP requires a minimum of 2 designated partners, with at least one being a resident of India. Following incorporation, the LLP Agreement — covering partner contribution amounts, profit and loss sharing ratios, decision-making authority, meeting procedures, and exit or dissolution provisions — must be filed in Form 3 with RoC Patna within 30 days of the incorporation date, along with payment of applicable Bihar stamp duty computed on the LLP Agreement.

Taxvio's LLP registration service for ${areaName} businesses includes DPIN and DSC procurement for all designated partners, professionally drafted LLP Agreement tailored to your specific business arrangement and partner expectations, Bihar stamp duty payment coordination, and timely Form 3 filing within the statutory 30-day window. We also handle critical post-incorporation steps — LLP PAN and TAN application, GST registration where the LLP's business warrants it, professional tax registration if applicable, and a clear briefing on the ongoing annual compliance calendar: Form 11 (annual return) due by May 30 and Form 8 (statement of accounts and solvency) due by October 30 each financial year — ensuring your ${areaName} LLP starts and remains compliant from the moment of incorporation.`,
    },

    /* ── 3. OPC Registration ── */
    {
      slug: "opc-formation",
      title: `One Person Company (OPC) Registration in ${areaName}`,
      price: "₹6,999",
      timeline: "7–10 Working Days",
      icon: "👤",
      gradient: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "Single-member private company with limited liability",
        "Sole director + mandatory nominee director",
        "INC-3 consent from nominee director",
        "MOA & AOA with OPC-specific restrictive clauses",
        "Automatic conversion to Pvt Ltd when eligible",
        "Relaxed compliance vs standard Pvt Ltd",
      ],
      seoContent: `One Person Company (OPC) registration is specifically designed for solo entrepreneurs in ${areaName}, ${district}, Bihar who want the limited liability, separate legal identity, and institutional credibility of a corporate structure without needing a second director, co-founder, or external shareholder. Introduced under the Companies Act 2013, an OPC permits a single Indian citizen and resident to be the sole member and director — alongside a mandatory nominee who is named to take over the company in the event of the member's death or incapacity. This structure is particularly valuable for the growing population of consultants, freelancers, small traders, independent contractors, and proprietors in ${areaName} who operate independently but seek the formal corporate structure needed for bank loans, government contracts, and professional contracts with institutional clients.

Compared to continuing as a sole proprietorship, an OPC in ${areaName} provides clear advantages — personal assets are protected from business liabilities, the company can own property and enter contracts independently of its member, credit access from banks and NBFCs improves significantly with a formal company registration, and the business's legal continuity is assured beyond the individual founder's personal circumstances. Compliance requirements for OPCs are somewhat lighter than standard Private Limited Companies — an OPC with a single director is exempt from holding AGMs, and some board meeting frequency requirements are relaxed — though AOC-4 (financial statements) and MGT-7A (simplified annual return for OPCs) must still be filed annually with RoC Patna.

Taxvio registers OPCs in ${areaName} using the same SPICe+ process applied to Private Limited Companies — name availability check, DSC procurement, DIN allotment for the sole director, INC-3 consent letter from the nominee director, and MOA and AOA drafting with OPC-specific restrictive clauses (restricting transferability of shares and limiting membership to one person). Post-incorporation, we guide ${areaName} solo entrepreneurs through the statutory first board meeting, share certificate issuance, GST registration, and annual compliance planning — including the mandatory conversion process to a Private Limited Company once paid-up capital crosses ₹50 lakh or annual turnover exceeds ₹2 crore.`,
    },

    /* ── 4. Section 8 Company Registration ── */
    {
      slug: "section-8-company",
      title: `Section 8 Company Registration in ${areaName}`,
      price: "₹10,999",
      timeline: "20–30 Working Days",
      icon: "💚",
      gradient: "from-teal-500 to-cyan-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "Non-profit company under Section 8, Companies Act 2013",
        "Central Government licence — Form INC-12",
        "MOA & AOA drafted for charitable/social objects",
        "No minimum paid-up capital requirement",
        "12A/80G registration coordination post-incorporation",
        "FCRA guidance for foreign contributions",
      ],
      seoContent: `Section 8 Company registration is the preferred legal structure for NGOs, foundations, welfare trusts, and social enterprises establishing a formal institutional presence in ${areaName}, ${district}, Bihar — a state with an extensive and historically significant social sector spanning educational foundations, rural development organisations, women's self-help group federations, agricultural welfare cooperatives, and religious charitable institutions. Unlike trusts and societies registered under Bihar state laws (Bihar Hindu Religious Trusts Act, Societies Registration Act), a Section 8 Company is incorporated under the central Companies Act 2013 — providing uniform legal standing across all states and significantly greater credibility with institutional donors, corporate CSR departments, foreign funding agencies, and government grant programmes.

A Section 8 Company is granted a licence by the Central Government — processed through RoC Patna under delegated authority from the Regional Director — once the application demonstrates that the company is formed to promote education, art, science, sports, research, social welfare, religion, charity, environmental protection, or any other object of general public utility, and that any income or profits will be applied solely toward these objectives without distributing dividends to members or promoters. The application requires Form INC-12 along with an MOA and AOA specifically and carefully drafted to reflect the organisation's charitable purpose, declarations from all proposed directors, estimated income and expenditure projections, and a list of proposed activities.

Taxvio manages the complete Section 8 Company registration process for ${areaName} NGOs, welfare organisations, and social enterprises — drafting MOA and AOA that precisely align with the organisation's specific charitable focus (rural education, healthcare access, agricultural support, environmental conservation, community development, etc.), preparing the Form INC-12 application, coordinating correspondence with RoC Patna and the Regional Director's office through to licence approval and Certificate of Incorporation, and subsequently arranging the critical follow-on registrations — 12AB for income tax exemption on applied income, and 80G for donor deduction eligibility — that transform the incorporated entity into a fully functional fundraising and grant-receiving organisation.`,
    },

    /* ── 5. Annual ROC Compliance ── */
    {
      slug: "annual-roc-compliance",
      title: `Annual ROC Compliance in ${areaName}`,
      price: "₹4,999/year",
      timeline: "Before Statutory Deadlines",
      icon: "📅",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "AOC-4 — financial statements within 30 days of AGM",
        "MGT-7 / MGT-7A — annual return within 60 days of AGM",
        "AGM minutes, board minutes & secretarial documents",
        "LLP Form 11 by May 30 & Form 8 by October 30",
        "DIN KYC (DIR-3 KYC) annually for all directors",
        "Compliance calendar with advance reminders",
      ],
      seoContent: `Annual ROC compliance is a continuous, non-negotiable obligation for every Private Limited Company, OPC, and LLP registered with RoC Patna with operations or a registered office in ${areaName}, ${district}, Bihar — and missing these statutory deadlines triggers escalating additional fees and the serious risk of director disqualification that disrupts business operations and damages credit standing. Companies must hold their Annual General Meeting within 6 months of the financial year end (by September 30 for companies following the standard April–March year), file AOC-4 (financial statements, signed by the statutory auditor and at least one director) within 30 days of the AGM, and file MGT-7 or MGT-7A (annual return) within 60 days of the AGM — placing the typical compliance window for most Bihar companies between September and November each year.

The financial consequences of missing these deadlines for ${areaName} companies are severe and accumulate rapidly. Additional fees under the Companies Act stand at ₹100 per day per form — with no upper cap on AOC-4 — meaning a six-month delay across both AOC-4 and MGT-7 can cost over ₹36,000 in additional fees before the base filing fee is even considered. More seriously, directors of companies that remain in default of annual filings for 3 consecutive financial years face disqualification under Section 164(2) of the Companies Act — barred from acting as director of any company for 5 years, and their existing DINs rendered inactive across all their other directorships, including in separate unrelated companies.

Taxvio's annual ROC compliance service for ${areaName} companies covers the full compliance cycle: advance deadline alerts built into a proactive compliance calendar shared with every client, collection and review of audited financial statements from the company's statutory auditor, board meeting and AGM minute preparation and approval, accurate computation of director and shareholder details for MGT-7, DSC-based filing of AOC-4 and MGT-7 before statutory deadlines, and DIR-3 KYC filing for all directors before September 30 annually. For LLPs registered in ${areaName}, our package covers Form 11 (annual return, due May 30) and Form 8 (statement of accounts and solvency, due October 30) — keeping all designated partner DPINs active and the LLP's RoC Patna status consistently in good standing throughout the year.`,
    },

    /* ── 6. Director Appointment / Resignation ── */
    {
      slug: "director-appointment-resignation",
      title: `Director Appointment & Resignation in ${areaName}`,
      price: "₹2,499",
      timeline: "2–5 Working Days",
      icon: "🔄",
      gradient: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "DIR-12 filing with RoC Patna within 30 days",
        "Board resolution for appointment / resignation acceptance",
        "DIR-2 consent letter from incoming director",
        "DIN application (Form DIR-3) for new directors",
        "DSC procurement where required",
        "Statutory Register of Directors update",
      ],
      seoContent: `Every change in a company's board of directors — whether appointment of a new director, resignation, removal, or change in director designation — must be formally reported to RoC Patna within 30 days via Form DIR-12, for any company with its registered office in ${areaName}, ${district}, Bihar. Late filing of DIR-12 attracts additional fees of ₹100 per day, and unfiled director changes create legally problematic discrepancies between the company's actual governance structure and MCA's official records — mismatches that consistently create obstacles when updating bank account signatories, executing loan documentation, filing GST amendments, and undergoing legal or regulatory due diligence.

Appointing a new director to your ${areaName} company requires a formally convened Board Meeting at which a board resolution is passed (or a valid circular resolution where the AOA permits), the proposed director's written consent to act in Form DIR-2, a verification that the person is not disqualified from directorship under Section 164, and a valid Director Identification Number — which must be applied fresh via Form DIR-3 on the MCA portal if the individual does not already hold one. The newly appointed director must also file Form DIR-8 (a disclosure of non-disqualification) and must sign the statutory Register of Directors within 30 days.

Director resignation in your ${areaName} company requires the director to formally tender written resignation to the company, the company's board to formally accept it via board resolution, and DIR-12 to be filed with RoC Patna within 30 days of resignation acceptance. A common compliance gap Taxvio encounters among Bihar companies is the failure to file DIR-12 when a director has informally stepped away from the business — the individual's name continues appearing in all MCA official records including the company master data, creating ongoing exposure to statutory liability for all company acts taken after the intended departure date. Taxvio handles the complete director change process for ${areaName} companies — from resolution drafting and DIR-2 preparation through to DIR-12 filing with RoC Patna, statutory register updates, and confirmation tracking.`,
    },

    /* ── 7. Company Name Change ── */
    {
      slug: "company-name-change",
      title: `Company Name Change in ${areaName}`,
      price: "₹4,999",
      timeline: "15–25 Working Days",
      icon: "✏️",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "RUN (Reserve Unique Name) availability check",
        "EGM special resolution under Section 13 — MGT-14 filing",
        "RoC Patna approval for the new name",
        "MOA and AOA alteration via INC-24",
        "Fresh Certificate of Incorporation with new name",
        "Update coordination across GST, PAN, banking, contracts",
      ],
      seoContent: `Company name change is a formal legal process for companies registered in ${areaName}, ${district}, Bihar — governed by Sections 13 and 16 of the Companies Act 2013 — requiring shareholder approval through a Special Resolution, formal sanction from RoC Patna, and amendment of the company's Memorandum of Association. Bihar businesses commonly initiate name change proceedings for strategic reasons: rebranding after a business pivot or market repositioning, resolving a trademark conflict identified after incorporation, aligning the corporate name with an evolved product or service portfolio, or integrating identity following a business merger or acquisition where the acquired entity's name must change.

The process begins with a name availability check via the MCA's RUN (Reserve Unique Name) portal — confirming the proposed new name is not identical or deceptively similar to any existing registered company or registered trademark in India, does not contain words requiring special Central Government approval (such as "Bank", "Insurance", "National", "Government"), and complies with the Companies (Incorporation) Rules naming guidelines. Once name availability is confirmed, an Extraordinary General Meeting must be convened with prescribed notice, and shareholders must pass a Special Resolution approving the name change and the consequent alteration to Clause I (Name Clause) of the MOA.

Following the EGM, the ${areaName} company files MGT-14 (special resolution filing) with RoC Patna within 30 days, alongside the INC-24 application formally requesting RoC Patna's approval of the name change under Section 16. Upon RoC Patna's satisfaction with compliance across all naming guidelines and procedural requirements, a fresh Certificate of Incorporation reflecting the changed name is issued — the authoritative legal document confirming the name change. This Certificate must then be reflected across all linked registrations and records: GST registration amendment (Form REG-14), income tax PAN name update, trademark filing updates, vendor and customer contracts, company letterhead and website, and bank account records. Taxvio manages the entire process for ${areaName} companies — from RUN filing and EGM documentation through to INC-24 approval and coordinated post-approval updates.`,
    },

    /* ── 8. Increase Authorised Capital ── */
    {
      slug: "authorized-capital-increase",
      title: `Increase in Authorised Share Capital in ${areaName}`,
      price: "₹3,499",
      timeline: "5–10 Working Days",
      icon: "📈",
      gradient: "from-indigo-500 to-violet-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "SH-7 filing with RoC Patna within 30 days of resolution",
        "Ordinary resolution (EGM or Board, per AOA)",
        "MOA alteration — Capital Clause (Clause V)",
        "Stamp duty computation on increased capital",
        "MGT-14 filing where EGM resolution applies",
        "Updated capital structure in MCA master data",
      ],
      seoContent: `Increasing a company's authorised share capital becomes necessary whenever a company registered in ${areaName}, ${district}, Bihar wants to issue new equity shares beyond its existing MOA ceiling — a requirement that arises for ${areaName} businesses in several common business situations: raising equity funding from angel investors or venture capital, converting outstanding director or promoter loans into equity shares, implementing Employee Stock Option Plans to retain key staff, bringing in new shareholders as business partners, or fulfilling equity contribution covenants in bank loan agreements. The authorised share capital specified in Clause V of the company's Memorandum of Association is the absolute maximum beyond which no shares can be issued without first formally increasing it through the prescribed MCA process.

For companies registered in ${areaName}, the authorised capital increase process involves a Board Meeting recommending the increase and either convening an EGM for the authorising Ordinary Resolution, or where the company's AOA specifically grants the Board authority to increase capital within prescribed limits, passing the resolution at Board level directly. Where an EGM is convened, the EGM Ordinary Resolution must be filed in MGT-14 with RoC Patna within 30 days of the meeting. Form SH-7 — the primary MCA form for reporting authorised capital increase — must be filed with RoC Patna within 30 days of the resolution date, along with payment of the applicable stamp duty computed on the incremental capital amount added.

Bihar's stamp duty applicable on SH-7 filings is computed based on the incremental authorised capital amount and the applicable stamp duty schedule — an amount that varies depending on the extent of the capital increase and must be calculated correctly before filing to avoid processing rejection and refiling delays. Once RoC Patna processes and approves the SH-7 filing, the company's authorised capital figure updates in the MCA company master data automatically, clearing the legal path for the company to proceed with new share allotments and associated Form PAS-3 / Form SH-1 filings. Taxvio manages the complete process for ${areaName} companies — from board and EGM scheduling and resolution drafting, to Bihar-specific stamp duty computation, MGT-14 and SH-7 filing with RoC Patna, and confirmation tracking until updated capital is reflected in MCA master data.`,
    },

    /* ── 9. Company Closure / Strike Off ── */
    {
      slug: "company-closure",
      title: `Company Closure & Strike Off in ${areaName}`,
      price: "₹5,999",
      timeline: "3–6 Months",
      icon: "🔒",
      gradient: "from-gray-500 to-slate-600",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "STK-2 (Fast Track Exit / FTE) application",
        "Statement of accounts — NIL assets & liabilities",
        "Indemnity bond by all directors (notarised)",
        "Affidavit confirming inoperative status",
        "Pending litigation & statutory dues clearance",
        "MCA public notice period & final closure certificate",
      ],
      seoContent: `Company closure and voluntary strike off is the formal legal process of dissolving an inactive company registered in ${areaName}, ${district}, Bihar and removing it permanently from RoC Patna's official register of companies — relieving directors of ongoing annual compliance obligations (AOC-4, MGT-7, DIN KYC) for a company that is no longer operational. An inactive company in ${areaName} carrying unfiled annual returns accumulates escalating additional fees (₹100 per day per form, uncapped for AOC-4), which can run into hundreds of thousands of rupees over several years — making timely strike off application far more economical than indefinitely maintaining a dormant company.

A company with a registered office in ${areaName} qualifies for voluntary strike off under Section 248(2) using the Fast Track Exit (FTE) scheme via Form STK-2, subject to satisfying specific eligibility conditions: the company must either not have commenced any business within 1 year of its incorporation date, or must not have carried on any business activity for the preceding 2 financial years — with no pending litigation, no outstanding statutory dues (GST, income tax, ESI, PF), and no active bank accounts or assets remaining in its name. The Central Government public notice period under Section 248(1) applies before the final strike off is effected.

A critically important and frequently overlooked eligibility condition for ${areaName} companies is that all pending annual returns (MGT-7) and financial statement filings (AOC-4) must be brought fully current before the STK-2 application is submitted — even for completely dormant companies that conducted zero business throughout the years in question. RoC Patna routinely rejects STK-2 applications that have unfiled annual compliance in arrears. Taxvio conducts a complete compliance audit for every ${areaName} company seeking closure — clearing all pending annual filings, preparing the required Statement of Accounts (certified by a CA, dated not more than 30 days before STK-2 filing, showing NIL or negligible assets and liabilities), coordinating the notarised Indemnity Bond and Affidavit from all directors, obtaining bank account closure proof, and managing the STK-2 filing and RoC Patna correspondence through to the final Dissolution Certificate.`,
    },
    /* ── 10. Public Limited Company Formation ── */
    {
      slug: "public-limited-company-formation",
      title: `Public Limited Company Formation in ${areaName}`,
      price: "₹14,999",
      timeline: "15–20 Working Days",
      icon: "🏛️",
      gradient: "from-blue-600 to-cyan-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "SPICe+ integrated incorporation — minimum 7 shareholders, 3 directors",
        "MOA & AOA drafted for public company governance norms",
        "Certificate of Incorporation with 'Limited' suffix",
        "Statutory registers & minute books setup",
        "Guidance on IPO/listing pathway where applicable",
        "Compliance roadmap for enhanced disclosure requirements",
      ],
      seoContent: `Public Limited Company formation suits larger-scale businesses in ${areaName}, ${district}, Bihar planning significant capital raises, multiple institutional investors, or an eventual path toward public listing — a structure that permits unrestricted share transferability and an unlimited number of shareholders, distinguishing it from the restrictive 200-member cap applicable to private companies. Under the Companies Act 2013, a Public Limited Company requires a minimum of 7 shareholders and 3 directors, and its name must end with "Limited" rather than "Private Limited." While still relatively uncommon among ${areaName}'s predominantly small and mid-sized enterprise base, this structure is increasingly relevant for established Bihar businesses in manufacturing, infrastructure, and processing sectors seeking larger-scale institutional capital or planning a future public offering.

Incorporation follows the same SPICe+ integrated framework used for private companies — name reservation, DIN allotment, DSC procurement, and MOA/AOA filing — but with materially enhanced governance obligations built in from day one: mandatory independent directors above certain capital thresholds, more rigorous board composition norms, enhanced related-party transaction disclosure, and statutory requirement to hold an AGM with proper public notice. RoC Patna processes these incorporations with the same SPICe+ workflow applicable across Bihar and Jharkhand, though scrutiny of MOA object clauses and governance provisions tends to be more detailed given the public capital-raising intent.

Taxvio guides ${areaName} promoters through the complete Public Limited Company formation process — structuring the minimum shareholder and director composition, drafting MOA and AOA aligned with public company governance standards, securing DSC and DIN for all directors, and managing the SPICe+ filing through to Certificate of Incorporation. We also brief founders on the materially higher ongoing compliance burden — board meeting frequency, statutory auditor rotation rules, and enhanced AOC-4/MGT-7 disclosure requirements — ensuring the business is governance-ready from incorporation rather than discovering compliance gaps later.`,
    },

    /* ── 11. Nidhi Company Registration ── */
    {
      slug: "nidhi-company-registration",
      title: `Nidhi Company Registration in ${areaName}`,
      price: "₹12,999",
      timeline: "15–25 Working Days",
      icon: "🏦",
      gradient: "from-green-500 to-emerald-600",
      accentBg: "bg-green-50",
      accentBorder: "border-green-100",
      accentText: "text-green-700",
      features: [
        "Minimum 7 shareholders, 3 directors — public company structure",
        "MOA & AOA restricted to member lending/borrowing objects",
        "NDH-4 declaration filing within 1 year",
        "Minimum 200 members within 1 year of incorporation",
        "Net Owned Funds (NOF) & deposit ratio compliance guidance",
        "RBI-exempt mutual benefit structure",
      ],
      seoContent: `Nidhi Company registration offers a regulator-recognised structure for community-based savings and lending mutual benefit societies in ${areaName}, ${district}, Bihar — a model historically popular in Tamil Nadu but increasingly relevant to Bihar's close-knit community and cooperative lending traditions, particularly in semi-urban and rural pockets where formal banking penetration remains uneven. A Nidhi Company operates exclusively for the purpose of cultivating thrift and savings among its members, and lending only to its own members — a structure that is specifically exempted from the core provisions of the RBI Act applicable to NBFCs, provided it strictly confines its business to borrowing from and lending to members only.

Incorporating a Nidhi Company in ${areaName} requires a minimum of 7 shareholders and 3 directors at formation — structured as a public limited company under Section 406 of the Companies Act 2013 read with the Nidhi Rules 2014 — with the MOA and AOA carefully restricted to member-only deposit and lending objects, excluding any provision for chit funds, hire purchase, insurance, or leasing business, which Nidhi Companies are expressly barred from conducting. Within one year of incorporation, the company must achieve a minimum of 200 members, Net Owned Funds of at least ₹20 lakh, an NOF-to-deposits ratio of not more than 1:20, and unencumbered term deposits of not less than 10% of outstanding deposits — all certified and declared via Form NDH-4 filed with the Regional Director.

Taxvio manages the complete Nidhi Company incorporation process for ${areaName} promoters — structuring the founding shareholder and director base, drafting restrictive MOA and AOA objects compliant with Nidhi Rules, coordinating SPICe+ filing through RoC Patna, and subsequently guiding the business through the critical first-year compliance milestones: member enrolment tracking, Net Owned Funds computation, and timely NDH-4 filing — without which the company risks losing its Nidhi status and associated RBI exemption.`,
    },

    /* ── 12. Producer Company Registration ── */
    {
      slug: "producer-company-registration",
      title: `Producer Company Registration in ${areaName}`,
      price: "₹13,999",
      timeline: "20–30 Working Days",
      icon: "🌾",
      gradient: "from-lime-500 to-green-600",
      accentBg: "bg-lime-50",
      accentBorder: "border-lime-100",
      accentText: "text-lime-700",
      features: [
        "Minimum 10 producer-members (individuals) or 2 producer institutions",
        "MOA & AOA drafted for collective production/marketing objects",
        "Certificate of Incorporation as a Producer Company",
        "Member share structuring & patronage bonus framework",
        "FPO scheme & NABARD funding linkage guidance",
        "Board structured with minimum 5, maximum 15 directors",
      ],
      seoContent: `Producer Company registration is a purpose-built corporate structure for farmers, agriculturists, artisans, and primary producers in ${areaName}, ${district}, Bihar to collectively formalise procurement, processing, marketing, and value-addition activities — directly relevant to Bihar's overwhelmingly agrarian economy spanning paddy and wheat cultivation in the Gangetic plains, litchi and mango orchards in Muzaffarpur and Darbhanga, makhana production in Mithilanchal, and vegetable and dairy farming clusters across nearly every district. Governed by Part IXA (now Sections 378A–378ZU) of the Companies Act, a Producer Company combines cooperative society principles — one-member-one-vote regardless of shareholding, restricted share transferability, patronage-based bonus distribution — with the corporate governance rigor, legal personality, and institutional credibility of a company structure.

A Producer Company in ${areaName} can be incorporated by a minimum of 10 individual producers, or 2 or more producer institutions, or a combination of both — with no upper limit on membership, making it uniquely scalable for large farmer-producer organisations (FPOs) aggregating hundreds of smallholder farmers. The MOA must restrict the company's objects to specified producer activities — production, harvesting, procurement, grading, pooling, handling, marketing, selling, or export of members' primary produce, along with activities like manufacturing, processing, and the supply of inputs like seeds, fertilisers, and farm machinery. The Board must comprise between 5 and 15 directors, and the structure enables access to targeted government schemes — NABARD's FPO Promotion Scheme, SFAC equity grants, and Bihar state agricultural department subsidies specifically channelled through registered Producer Companies.

Taxvio supports ${areaName} farmer groups, cooperatives, and producer collectives through the complete Producer Company registration process — member eligibility structuring, MOA and AOA drafting aligned with the intended produce and processing activities, SPICe+ filing with RoC Patna, and post-incorporation guidance on patronage bonus policy, member share certificate issuance, and documentation required for NABARD and SFAC funding applications that are frequently the primary motivation behind FPO formation.`,
    },

    /* ── 13. Change in Registered Office Address ── */
    {
      slug: "registered-office-change",
      title: `Change in Registered Office Address in ${areaName}`,
      price: "₹3,999",
      timeline: "7–15 Working Days",
      icon: "📍",
      gradient: "from-orange-500 to-red-500",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-100",
      accentText: "text-orange-700",
      features: [
        "INC-22 filing within 15/30 days of the change",
        "Board resolution for intra-city/intra-state shift",
        "Special resolution & RD approval for inter-state shift",
        "New address proof & NOC documentation",
        "MOA situation clause update where state changes",
        "Statutory register and stationery update guidance",
      ],
      seoContent: `Changing a company's registered office address requires formal RoC filing regardless of whether the shift is within the same city in ${areaName}, to a different city within ${district}, or across state lines — with the procedural complexity and approval authority varying significantly based on the nature and extent of the move. For a shift within the local limits of the same city, town, or village, only a Board Resolution and Form INC-22 (filed within 15 days, supported by new address proof and a No Objection Certificate from the property owner) is required. A move to a different city within the same RoC jurisdiction — still under RoC Patna if remaining within Bihar — additionally requires a Special Resolution passed by shareholders.

A registered office shift that crosses state lines — for instance, relocating a company's registered office out of ${areaName}, Bihar to another state, or vice versa — is considerably more involved, requiring a Special Resolution, alteration of the MOA's State Clause, and formal approval from the Regional Director under Section 13(4) before the change can be registered with the destination RoC. The Regional Director application must demonstrate that the move does not prejudice creditors or employees, and a public notice period and objection window applies before approval is granted — extending the overall timeline for inter-state shifts considerably compared to intra-city or intra-state moves.

Taxvio handles registered office changes for ${areaName} companies across all three scenarios — preparing board and shareholder resolutions, drafting the NOC and address proof documentation, filing INC-22 within statutory timelines, and where an inter-state shift is involved, preparing and prosecuting the Regional Director application through to final approval. We also coordinate the downstream administrative updates every address change triggers — GST registration amendment, PAN/TAN address update, bank account records, and letterhead and signage changes — ensuring the transition is complete and consistent across every statutory record.`,
    },

    /* ── 14. DIN KYC (DIR-3 KYC) Filing ── */
    {
      slug: "dir-3-kyc",
      title: `DIN KYC (DIR-3 KYC) Filing in ${areaName}`,
      price: "₹999/director",
      timeline: "1–2 Working Days",
      icon: "🪪",
      gradient: "from-sky-500 to-indigo-500",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "DIR-3 KYC / Web-KYC filing before September 30 deadline",
        "OTP-based mobile & email verification",
        "DIN status check and deactivation review",
        "Reactivation filing for already-deactivated DINs",
        "Applicable for FY 2025-26 annual KYC cycle",
        "Late fee avoidance — ₹5,000 per DIN if missed",
      ],
      seoContent: `DIR-3 KYC filing is a mandatory annual compliance requirement for every individual holding a Director Identification Number (DIN) with a status of "Approved" — applicable to all directors of companies and designated partners of LLPs with any connection to ${areaName}, ${district}, Bihar, regardless of whether the company itself is actively operating. Introduced by the MCA to maintain an accurate and current database of all individuals holding directorships across India, the filing must be completed every year by September 30, and a director's DIN is automatically marked "Deactivated due to non-filing of DIR-3 KYC" the moment this deadline passes without compliance — immediately preventing that individual from being appointed as a director in any new company and blocking their signing authority on filings for all their existing directorships.

For the FY 2025-26 compliance cycle, every director who obtained a DIN on or before March 31, 2025 must complete DIR-3 KYC by the September 30, 2025 deadline. First-time KYC filers, or directors whose personal details (mobile number, email, address, or PAN) have changed since the last filing, must complete the full DIR-3 KYC e-form with fresh OTP verification of both mobile number and email ID. Directors who filed in the previous year with no change in particulars may instead use the simpler DIR-3 KYC-WEB service, which only requires OTP re-verification. Missing the deadline attracts a flat late fee of ₹5,000 per DIN for reactivation, regardless of how many days late the filing occurs.

Taxvio provides efficient DIR-3 KYC filing support for directors and designated partners connected to ${areaName} companies and LLPs — verifying current DIN status on the MCA portal, preparing and filing the appropriate form (full KYC or KYC-WEB) before the statutory deadline, and for directors who have already missed a prior year's deadline, managing the reactivation filing along with the applicable late fee payment to restore active DIN status promptly.`,
    },

    /* ── 15. Return of Deposits (DPT-3) Filing ── */
    {
      slug: "dpt-3-filing",
      title: `Return of Deposits (DPT-3) Filing in ${areaName}`,
      price: "₹2,999",
      timeline: "3–5 Working Days",
      icon: "💰",
      gradient: "from-yellow-500 to-amber-600",
      accentBg: "bg-yellow-50",
      accentBorder: "border-yellow-100",
      accentText: "text-yellow-700",
      features: [
        "Applicability assessment for your company structure",
        "Compilation of loans, advances & deposits as on March 31",
        "Auditor certificate coordination for applicable thresholds",
        "DPT-3 filing by June 30 annual deadline",
        "Covers FY 2025-26 annual return of deposits",
        "Exempt-deposit classification guidance",
      ],
      seoContent: `Form DPT-3 is an annual return that every company (other than a Government Company) registered in ${areaName}, ${district}, Bihar must file with RoC Patna, disclosing details of outstanding loans, advances, and monies received that are not classified as "deposits" under the Companies (Acceptance of Deposits) Rules 2014 — covering director loans, unsecured loans from shareholders and promoters, inter-corporate loans, advances against supply of goods or services, and share application money pending allotment, among several other specifically exempted categories. The filing is required annually by June 30, covering the position as of the preceding financial year ending March 31 — meaning for FY 2025-26 compliance, companies must report figures as of March 31, 2025 by the June 30, 2025 deadline, with the cycle repeating each subsequent year.

Many ${areaName} business owners mistakenly believe DPT-3 applies only to companies that have accepted public deposits in the conventional sense — but the MCA's broad definition captures routine transactions common across nearly every small and mid-sized company, including unsecured director loans used for working capital, outstanding inter-company loans within group structures, and even advances received from customers against future supply where the supply has not been completed within 365 days. This broad scope means the large majority of active private companies in Bihar have at least some disclosure obligation under DPT-3 each year, even where the company has never accepted a "deposit" in the commonly understood sense.

Taxvio conducts a thorough applicability assessment for every ${areaName} company client, reviewing loan ledgers, advance receipts, and inter-company balances to correctly classify amounts under the appropriate DPT-3 categories, coordinates the statutory auditor's certificate required where outstanding amounts exceed specified thresholds, and files the completed DPT-3 return well ahead of the June 30 deadline — avoiding both the compliance risk of non-filing and the common error of misclassifying genuinely exempt transactions as reportable deposits.`,
    },

    /* ── 16. Charge Creation & Satisfaction ── */
    {
      slug: "charge-registration-satisfaction",
      title: `Charge Creation & Satisfaction Filing in ${areaName}`,
      price: "₹3,499",
      timeline: "5–10 Working Days",
      icon: "🔗",
      gradient: "from-stone-500 to-neutral-600",
      accentBg: "bg-stone-50",
      accentBorder: "border-stone-100",
      accentText: "text-stone-700",
      features: [
        "CHG-1 filing within 30 days of charge creation",
        "CHG-4 filing on full repayment/satisfaction",
        "Lender coordination for sanction letter & agreement",
        "Register of Charges maintenance",
        "Condonation application for delayed filings",
        "Charge status verification on MCA portal",
      ],
      seoContent: `Every charge — mortgage, hypothecation, or pledge — created by a company in ${areaName}, ${district}, Bihar on its assets to secure a loan, whether from a bank, NBFC, or any other secured lender, must be registered with RoC Patna via Form CHG-1 within 30 days of creation under Section 77 of the Companies Act 2013. This registration is not merely an administrative formality — an unregistered charge is void against the liquidator and other creditors in the event of company insolvency, meaning the lender effectively loses its secured priority status and is reduced to an unsecured creditor if the charge was never properly filed with the ROC. For ${areaName} businesses availing working capital loans, term loans, or equipment financing secured against company assets, timely CHG-1 filing is therefore a critical condition that most lenders independently verify before and after loan disbursement.

Once a secured loan is fully repaid, the corresponding charge must be formally released through Form CHG-4 (satisfaction of charge), also filed with RoC Patna — typically within 30 days of the full and final repayment, supported by a no-dues or satisfaction letter from the lending bank or institution. Many ${areaName} companies that have closed out old loans years ago continue to carry "open" charges on their MCA master data simply because CHG-4 was never filed — an oversight that creates unnecessary complications during due diligence for subsequent fundraising, asset sales, or new loan applications, where the presence of an apparently unsatisfied historical charge raises immediate red flags for the new lender or investor's legal team.

Taxvio manages the complete charge compliance lifecycle for ${areaName} companies — coordinating with lenders for the loan agreement, sanction letter, and security documents needed for CHG-1 filing at the time of loan disbursement, and separately, obtaining the satisfaction or no-dues certificate and filing CHG-4 promptly upon loan closure. Where historical charges remain unsatisfied on MCA records despite the underlying loan being repaid years earlier, we also handle the condonation application process required for delayed CHG-4 filings beyond the normal statutory window.`,
    },

    /* ── 17. Share Transfer & Transmission ── */
    {
      slug: "share-transfer",
      title: `Share Transfer & Transmission in ${areaName}`,
      price: "₹2,999",
      timeline: "5–7 Working Days",
      icon: "📜",
      gradient: "from-purple-500 to-fuchsia-600",
      accentBg: "bg-purple-50",
      accentBorder: "border-purple-100",
      accentText: "text-purple-700",
      features: [
        "Share transfer deed (Form SH-4) drafting & stamping",
        "Board resolution approving transfer",
        "Share certificate endorsement / reissue",
        "Register of Members update",
        "Transmission documentation for inheritance cases",
        "Stamp duty computation on consideration value",
      ],
      seoContent: `Share transfer and transmission procedures formalise changes in company ownership for Private Limited Companies registered in ${areaName}, ${district}, Bihar — whether arising from a sale of shares between existing shareholders, induction of a new investor or business partner, an internal family restructuring, or transmission of shares to legal heirs following a shareholder's death. A voluntary share transfer requires execution of Form SH-4 (the share transfer deed) by both the transferor and transferee, duly stamped with Bihar stamp duty computed at 0.25% of the consideration value or the market value of the shares, whichever is higher, followed by Board approval and endorsement on the physical share certificate reflecting the new owner's name.

Transmission of shares — which occurs automatically by operation of law upon a shareholder's death, insolvency, or lunacy, rather than through a voluntary transaction — follows a materially different process. Here, the legal heir or successor must submit a transmission request supported by a succession certificate, probate, letter of administration, or legal heir certificate (as applicable under the circumstances), along with the original share certificate and the deceased shareholder's death certificate. Unlike a transfer, transmission does not require a stamped transfer deed, since no sale transaction has occurred — the Board simply approves recording the legal successor as the new member based on the supporting legal documentation.

Taxvio manages both processes for ${areaName} companies with full attention to procedural accuracy — drafting the SH-4 transfer deed and computing correct Bihar stamp duty for voluntary transfers, preparing board resolution documentation for either transfer or transmission approval, updating the statutory Register of Members, and arranging endorsement or reissue of share certificates reflecting the ownership change. We also advise on AOA restrictions — many private companies include pre-emption rights or board-approval conditions on share transfers that must be satisfied before a transfer can be validly registered, and we verify compliance with these provisions before proceeding.`,
    },

    /* ── 18. Private to Public Company Conversion ── */
    {
      slug: "company-conversion-private-to-public",
      title: `Private to Public Company Conversion in ${areaName}`,
      price: "₹9,999",
      timeline: "20–30 Working Days",
      icon: "🔓",
      gradient: "from-blue-500 to-sky-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "Eligibility & shareholder/director structure review",
        "Special resolution — MOA & AOA alteration",
        "MGT-14 filing for altered AOA",
        "INC-27 application for conversion",
        "Fresh Certificate of Incorporation as Public Company",
        "Post-conversion governance compliance briefing",
      ],
      seoContent: `Converting a Private Limited Company to a Public Limited Company becomes a strategic necessity for growing businesses in ${areaName}, ${district}, Bihar that have outgrown the 200-shareholder cap applicable to private companies, or that are preparing for larger institutional fundraising rounds, strategic investor entry, or an eventual public listing pathway. The conversion requires the company to first satisfy the baseline eligibility conditions for a public company — minimum 7 shareholders and 3 directors — and formally remove the restrictive clauses from its Articles of Association that define it as a private company: the restriction on share transferability, the 200-member cap, and the prohibition on public invitation to subscribe for securities.

The conversion process begins with a Board Meeting recommending the change, followed by an Extraordinary General Meeting at which shareholders pass a Special Resolution approving alteration of the AOA to remove all private company restrictive clauses. This Special Resolution must be filed with RoC Patna in Form MGT-14 within 30 days. The company then files Form INC-27 — the specific application form for conversion from private to public or vice versa — along with the altered AOA, the EGM resolution, and a list confirming the increased shareholder and director count where applicable. Once RoC Patna approves the application, a fresh Certificate of Incorporation is issued confirming the company's new status as a Public Limited Company, and the word "Private" is dropped from the company name across all records.

Taxvio guides ${areaName} companies through the complete conversion process — assessing readiness against public company eligibility norms, drafting the altered AOA and EGM resolution, managing MGT-14 and INC-27 filings with RoC Patna, and critically, briefing the board on the substantially elevated compliance obligations that apply immediately upon conversion — including enhanced related-party transaction norms, statutory auditor rotation requirements, and more rigorous board composition rules that private companies are otherwise exempted from.`,
    },

    /* ── 19. LLP to Private Limited Company Conversion ── */
    {
      slug: "llp-to-company-conversion",
      title: `LLP to Private Limited Company Conversion in ${areaName}`,
      price: "₹11,999",
      timeline: "25–35 Working Days",
      icon: "🔃",
      gradient: "from-violet-500 to-indigo-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "Eligibility assessment & partner consent collection",
        "Name reservation via SPICe+ Part A",
        "Form URC-1 filing with RoC Patna",
        "MOA & AOA drafting for the converted entity",
        "Statement of accounts & asset/liability transfer",
        "Fresh Certificate of Incorporation as Pvt Ltd",
      ],
      seoContent: `Converting an LLP to a Private Limited Company is an increasingly common growth transition for professional partnerships and LLPs in ${areaName}, ${district}, Bihar that have reached a stage where raising equity funding from investors becomes necessary — a structural need the LLP form cannot accommodate, since LLPs cannot issue equity shares, cannot have investors as non-managing stakeholders in the conventional sense, and are generally viewed less favourably by venture capital and private equity investors who require a share-based capital structure to invest formally. The conversion is governed by Section 366 of the Companies Act 2013 read with the Companies (Authorised to Register) Rules 2014, and results in a completely new corporate entity — a new PAN, new CIN, and new Certificate of Incorporation — with all assets, liabilities, interests, rights, and obligations of the erstwhile LLP vesting automatically in the converted company.

The conversion process for an ${areaName} LLP begins with obtaining consent from all partners, publishing a public notice in a local newspaper (with circulation in ${district}) and the Official Gazette inviting objections, and securing a No Objection Certificate from the Registrar of LLPs. Following this, name reservation is secured via SPICe+ Part A, and the core conversion application is filed in Form URC-1, accompanied by a statement of consideration, a list of partners, the LLP's latest financial statements, and a statement of assets and liabilities certified by a practising Chartered Accountant. MOA and AOA for the newly formed company must also be drafted and filed as part of the SPICe+ Part B process.

Taxvio manages the complete LLP-to-Company conversion journey for ${areaName} businesses — from partner consent documentation and public notice publication, through URC-1 and SPICe+ filing with RoC Patna, to receipt of the fresh Certificate of Incorporation. We also handle the essential post-conversion steps frequently overlooked in this transition — fresh GST registration under the new PAN, bank account migration, employee and vendor contract novation, and transfer of existing statutory registrations (Shops & Establishment, Professional Tax, MSME Udyam) to the newly incorporated company.`,
    },

    /* ── 20. Statutory Auditor Appointment (ADT-1) ── */
    {
      slug: "adt-1-auditor-appointment",
      title: `Statutory Auditor Appointment (ADT-1) in ${areaName}`,
      price: "₹1,999",
      timeline: "2–4 Working Days",
      icon: "🧾",
      gradient: "from-cyan-500 to-blue-500",
      accentBg: "bg-cyan-50",
      accentBorder: "border-cyan-100",
      accentText: "text-cyan-700",
      features: [
        "Auditor eligibility & consent letter (Form ADT-1)",
        "Board resolution for first auditor appointment",
        "AGM resolution for reappointment/rotation",
        "ADT-1 filing within 15 days of appointment",
        "Covers FY 2025-26 auditor compliance cycle",
        "Auditor tenure & rotation tracking",
      ],
      seoContent: `Appointment of a statutory auditor is mandatory for every company registered in ${areaName}, ${district}, Bihar, and must be formally reported to RoC Patna through Form ADT-1 within 15 days of the appointment being made — whether this is the company's first auditor appointed by the Board within 30 days of incorporation, or a subsequent appointment or reappointment made by shareholders at the Annual General Meeting under Section 139 of the Companies Act 2013. The first auditor holds office until the conclusion of the first AGM, after which auditors are typically appointed for a term of 5 years, subject to ratification considerations and, for specific categories of larger companies, mandatory auditor rotation requirements.

For the FY 2025-26 compliance cycle, ${areaName} companies holding their AGM for FY 2024-25 (by September 30, 2025 for most companies) must ensure the auditor appointment or reappointment resolution is passed at that AGM, and ADT-1 filed with RoC Patna within the subsequent 15-day window — meaning by mid-October 2025 for most Bihar companies following the standard financial year. A frequently overlooked compliance gap among smaller ${areaName} companies is the assumption that auditor reappointment is "automatic" year to year — in reality, while the Companies Act does not require a fresh ADT-1 filing every single year once an auditor is appointed for a 5-year term (subject to ratification language removed by 2018 amendment), any change in auditor, whether due to resignation, removal, or the end of the 5-year term, triggers a fresh ADT-1 filing obligation that is frequently missed.

Taxvio manages the complete auditor appointment compliance process for ${areaName} companies — collecting the auditor's written consent and eligibility certificate confirming they are not disqualified under Section 141, drafting the Board or AGM resolution as applicable, and filing Form ADT-1 with RoC Patna within the statutory 15-day window. We also maintain auditor tenure tracking across our client base, proactively flagging when a 5-year term is approaching completion so that reappointment or fresh appointment processes begin well ahead of the relevant AGM date.`,
    },

    /* ── 21. SBO Declaration & BEN-2 Filing ── */
    {
      slug: "sbo-ben-2-filing",
      title: `SBO Declaration & BEN-2 Filing in ${areaName}`,
      price: "₹3,999",
      timeline: "7–10 Working Days",
      icon: "🔍",
      gradient: "from-red-500 to-rose-600",
      accentBg: "bg-red-50",
      accentBorder: "border-red-100",
      accentText: "text-red-700",
      features: [
        "SBO threshold analysis (10%+ ownership/control)",
        "BEN-1 declaration collection from identified SBOs",
        "BEN-2 e-form preparation & filing with RoC Patna",
        "Register of Significant Beneficial Owners maintenance",
        "Layered shareholding structure review",
        "BEN-4 notice drafting where disclosure is withheld",
      ],
      seoContent: `Significant Beneficial Owner (SBO) identification and BEN-2 filing is a beneficial ownership transparency requirement applicable to companies registered in ${areaName}, ${district}, Bihar wherever an individual — who may not appear as a direct registered shareholder at all — exercises significant influence or control through indirect holdings, layered corporate structures, trusts, partnership interests, or agreements. Under Section 90 of the Companies Act 2013 and the Companies (Significant Beneficial Owners) Rules 2018, an individual qualifies as an SBO if, acting alone or with others, they hold 10% or more of shares, voting rights, or rights to receive distributable dividends, whether held directly or indirectly through other corporate entities, partnership firms, trusts, or pooled investment vehicles.

While most straightforward ${areaName} private companies with simple, direct shareholding structures have no SBOs beyond their directly registered shareholders, SBO filing becomes genuinely relevant and often complex where a company's shares are held by another company, an LLP, a trust, or a layered holding structure — common in group company arrangements, family business restructurings, and investments routed through holding entities. In such cases, the ultimate individual exercising control through that intermediate layer must be identified, issue a BEN-1 declaration confirming their SBO status, and the company must file this declaration with RoC Patna in Form BEN-2 within 30 days of receiving the declaration.

Taxvio conducts a thorough shareholding structure analysis for ${areaName} companies to determine whether any SBO reporting obligation exists — tracing indirect holdings through intermediate corporate or trust layers, collecting BEN-1 declarations from identified significant beneficial owners, preparing and filing Form BEN-2 with RoC Patna, and maintaining the statutory Register of Significant Beneficial Owners. Where a company reasonably believes an SBO exists but the individual has not come forward with the required declaration, we also assist in drafting and issuing the Form BEN-4 notice compelling disclosure, as required under the Rules.`,
    },

    /* ── 22. MSME-1 Half-Yearly Return Filing ── */
    {
      slug: "msme-1-filing",
      title: `MSME-1 Half-Yearly Return Filing in ${areaName}`,
      price: "₹1,999/half-year",
      timeline: "2–3 Working Days",
      icon: "🏭",
      gradient: "from-amber-500 to-yellow-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "Vendor MSME (Udyam) status verification",
        "Overdue payment identification (beyond 45 days)",
        "MSME-1 filing for April–September by October 31",
        "MSME-1 filing for October–March by April 30",
        "Applicable for FY 2025-26 half-yearly cycles",
        "Vendor ledger reconciliation support",
      ],
      seoContent: `MSME-1 is a half-yearly return that companies registered in ${areaName}, ${district}, Bihar must file with RoC Patna whenever they have outstanding payments to micro or small enterprise suppliers that remain unpaid for more than 45 days from the date of acceptance of goods or services — a disclosure requirement introduced specifically to improve payment discipline toward India's MSME supplier base, which forms the backbone of Bihar's manufacturing, trading, and services supply chains. The return must be filed twice yearly — covering the April to September period by October 31, and the October to March period by April 30 — for every financial year, including the FY 2025-26 cycle currently applicable to all companies with qualifying overdue dues.

The obligation applies specifically to payments owed to suppliers registered under the Udyam Registration portal as Micro or Small enterprises (Medium enterprises are excluded from this specific reporting requirement), and the 45-day computation runs from the date of acceptance of goods or services, or the date deemed accepted under the terms of the purchase agreement, in line with Section 15 of the MSMED Act 2006. For ${areaName} companies sourcing raw materials, components, packaging, or services from small local vendors and manufacturers — common across Bihar's food processing, textile, and light engineering sectors — accurate tracking of supplier MSME status and payment ageing is essential to correctly identify reportable dues each half-year.

Taxvio supports ${areaName} companies with the complete MSME-1 compliance cycle — verifying Udyam registration status for all active vendors through the government MSME database, reconciling purchase and payment ledgers to identify genuinely overdue amounts beyond the 45-day threshold, preparing accurate MSME-1 disclosures, and filing with RoC Patna before each half-yearly deadline. We also advise on practical measures to reduce future reportable dues — adjusting vendor payment cycles and purchase order terms to stay within the 45-day window wherever commercially feasible.`,
    },

    /* ── 23. Annual General Meeting (AGM) Compliance ── */
    {
      slug: "agm-compliance",
      title: `Annual General Meeting (AGM) Compliance in ${areaName}`,
      price: "₹4,499",
      timeline: "10–15 Working Days",
      icon: "🗓️",
      gradient: "from-teal-500 to-green-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "AGM notice drafting with statutory 21-day notice period",
        "Agenda & ordinary/special resolution preparation",
        "Minutes drafting & signing coordination",
        "Extension application (INC/GNL filings) where needed",
        "Shorter notice consent documentation",
        "Proxy & attendance register preparation",
      ],
      seoContent: `Holding the Annual General Meeting (AGM) within statutory timelines is a core governance obligation for every Private Limited Company, Public Limited Company, and OPC (where applicable) registered in ${areaName}, ${district}, Bihar — required to be convened within 6 months of the close of the financial year (by September 30 for companies following the April–March year), with the gap between two consecutive AGMs not exceeding 15 months. The AGM is the forum at which shareholders formally approve the company's audited financial statements, consider the Director's Report and Auditor's Report, appoint or reappoint statutory auditors, declare dividends where applicable, and approve any other business requiring shareholder sanction, including director appointments and remuneration matters.

Proper AGM compliance for an ${areaName} company requires a formally issued notice to all shareholders, directors, and the statutory auditor at least 21 clear days before the meeting date — reducible to shorter notice only with the written consent of shareholders holding at least 95% of voting rights — along with a clearly drafted agenda and explanatory statement for any special business items. Following the meeting, minutes must be drafted within 30 days, circulated, and entered into the statutory Minutes Book, with the Chairman's signature confirming accuracy. Where a company genuinely cannot convene its AGM within the 6-month window due to exceptional circumstances, an extension application can be filed with RoC Patna seeking additional time, though such extensions are granted only in limited circumstances and are not available for the first AGM after incorporation.

Taxvio provides complete, done-for-you AGM compliance support for ${areaName} companies — preparing the AGM notice with correct notice period computation, drafting the agenda and resolutions (ordinary and special, as applicable) covering financial statement adoption, auditor appointment, and any other scheduled business, coordinating minutes drafting and Minutes Book maintenance post-meeting, and where circumstances require it, preparing and filing the extension application with RoC Patna. We ensure every ${areaName} company's AGM is conducted with full procedural compliance — avoiding the governance and penalty risks that arise from informally conducted or undocumented shareholder meetings.`,
    },

    /* ── 24. Revival / Restoration of Struck-Off Company ── */
    {
      slug: "company-revival-restoration",
      title: `Revival of Struck-Off Company in ${areaName}`,
      price: "₹19,999",
      timeline: "2–4 Months",
      icon: "⚖️",
      gradient: "from-slate-600 to-gray-700",
      accentBg: "bg-slate-50",
      accentBorder: "border-slate-100",
      accentText: "text-slate-700",
      features: [
        "Strike-off order & case merit review",
        "NCLT restoration petition drafting (Section 252)",
        "Pending AOC-4 / MGT-7 clearance pre-filing",
        "Representation before NCLT Patna Bench",
        "Restoration order follow-up with RoC Patna",
        "Post-restoration compliance regularisation",
      ],
      seoContent: `Revival and restoration of a company struck off by RoC Patna is a legal remedy available to ${areaName}, ${district}, Bihar businesses that discover their company — often one they believed was dormant or forgotten — has been forcibly removed from the register of companies, typically due to prolonged non-filing of annual returns, or occasionally removed in error by the ROC itself. A struck-off status is deeply problematic for any business reason requiring the company's continued legal existence — ongoing contracts become unenforceable, bank accounts get frozen, pending litigation in the company's name stalls, and any property or assets held by the company become legally frozen in an entity that technically no longer exists.

Under Section 252 of the Companies Act 2013, an application for restoration can be filed before the National Company Law Tribunal (NCLT) by the company itself, any member, creditor, or workman, within 20 years of the strike-off date — though applications are generally far more successful when filed promptly, with strong evidence that the company was genuinely operational, held valid assets, or had ongoing business obligations that the strike-off has unfairly disrupted. The NCLT Patna Bench, which has jurisdiction over companies registered in Bihar including ${areaName}, examines whether the strike off was just, and where restoration is granted, directs RoC Patna to restore the company's name to the register and treat it as if it had never been struck off.

Taxvio manages the complete restoration process for ${areaName} companies — reviewing the strike-off order and underlying circumstances to assess the strength of the restoration case, preparing and filing the NCLT petition with supporting evidence of the company's continued business activity or legitimate interest in restoration, representing the matter before the NCLT Patna Bench, and following through with RoC Patna to ensure the company's status is actually updated in MCA records once the restoration order is passed. Critically, we also clear all pending annual filings that accumulated during the struck-off period and regularise the company's ongoing compliance position immediately after restoration, preventing a repeat strike-off cycle.`,
    },

    /* ── 25. LLP Closure / Strike Off ── */
    {
      slug: "llp-closure",
      title: `LLP Closure & Strike Off in ${areaName}`,
      price: "₹4,999",
      timeline: "2–4 Months",
      icon: "📪",
      gradient: "from-neutral-500 to-stone-600",
      accentBg: "bg-neutral-50",
      accentBorder: "border-neutral-100",
      accentText: "text-neutral-700",
      features: [
        "Form 24 application for LLP strike off",
        "Partner consent & indemnity documentation",
        "NIL asset/liability statement of accounts",
        "Pending Form 8 / Form 11 clearance",
        "Bank account closure coordination",
        "Final closure confirmation from RoC Patna",
      ],
      seoContent: `LLP closure through the strike off route under Rule 37 of the LLP Rules 2009 allows partners of an inactive or non-operational LLP registered in ${areaName}, ${district}, Bihar to formally dissolve the entity and stop accumulating ongoing compliance obligations — Form 11 annual returns and Form 8 statement of accounts — that continue to apply year after year even for an LLP conducting zero business activity. Much like dormant companies, an inactive ${areaName} LLP that simply stops filing without formally closing continues to attract additional fees of ₹100 per day per form indefinitely, with no upper cap, making voluntary strike off a far more economical path than prolonged inaction.

To qualify for strike off via Form 24, the LLP must not have commenced business or must have discontinued operations, must have no outstanding liabilities, no pending litigation, and critically, all overdue Form 11 and Form 8 filings up to the date of cessation of business must be brought current — the same compliance-clearing prerequisite that applies to company strike-off applications. The application must be accompanied by a Statement of Accounts showing NIL assets and liabilities (certified by a Chartered Accountant and dated within 30 days of the application), an affidavit from all designated partners confirming the LLP has no pending obligations, consent from all partners, and in certain cases, an indemnity bond protecting against any future liabilities that may surface.

Taxvio handles the complete LLP closure process for ${areaName} businesses — conducting a full compliance review to identify and clear any pending Form 11 or Form 8 filings, preparing the NIL Statement of Accounts and supporting affidavits and indemnity documentation from designated partners, coordinating bank account closure proof, and filing Form 24 with RoC Patna through to receipt of final confirmation that the LLP has been struck off the register — formally ending all ongoing compliance obligations for the partners.`,
    },

    /* ── 26. CSR-1 Registration ── */
    {
      slug: "csr-1-registration",
      title: `CSR-1 Registration in ${areaName}`,
      price: "₹2,999",
      timeline: "5–7 Working Days",
      icon: "🤲",
      gradient: "from-pink-500 to-rose-500",
      accentBg: "bg-pink-50",
      accentBorder: "border-pink-100",
      accentText: "text-pink-700",
      features: [
        "Eligibility check — Section 8 company, trust, or society",
        "CSR-1 e-form preparation with CA/CS/CWA certification",
        "DSC coordination for authorised signatory",
        "Registration number allotment for CSR fund eligibility",
        "Governing body & activity documentation review",
        "Guidance on corporate CSR partnership approach",
      ],
      seoContent: `CSR-1 registration is a mandatory prerequisite under the Companies (CSR Policy) Amendment Rules 2021 for any NGO, Section 8 Company, registered trust, or registered society in ${areaName}, ${district}, Bihar that wishes to receive Corporate Social Responsibility (CSR) funding from companies mandated to spend on CSR activities under Section 135 of the Companies Act 2013. Without a valid CSR-1 registration and the unique CSR Registration Number it generates, an otherwise genuinely well-run and impactful ${areaName} NGO or charitable entity is simply ineligible to be a recipient of corporate CSR funds — regardless of how established or effective its social programs may be, making this registration a gateway requirement for Bihar's non-profit sector to access the substantial CSR funding pools that large corporates across India are statutorily required to deploy.

The CSR-1 registration process requires the applicant entity to have been registered for at least 3 years under its respective governing statute (Societies Registration Act, Indian Trusts Act, or Section 8 of the Companies Act) — though certain exceptions and relaxations apply for entities established by the Central or State Government, or entities set up jointly with another Section 8 company or registered trust that itself already has an established CSR track record. The form requires certification by a practising Chartered Accountant, Company Secretary, or Cost Accountant confirming the entity's legal status, governing structure, and eligibility, along with the Digital Signature Certificate of the entity's authorised signatory and key governing body details.

Taxvio assists ${areaName} NGOs, Section 8 Companies, trusts, and societies through the complete CSR-1 registration process — verifying eligibility against the 3-year operational history requirement, preparing the necessary governance and activity documentation, coordinating professional certification, and filing Form CSR-1 on the MCA portal to secure the CSR Registration Number. Once registered, we also advise on positioning your organisation effectively to corporate CSR teams — a step that meaningfully determines whether registration translates into actual funding partnerships for Bihar-focused social programs.`,
    },

    /* ── 27. Foreign Investment (FC-GPR) Compliance ── */
    {
      slug: "fc-gpr-fdi-compliance",
      title: `Foreign Investment (FC-GPR) Compliance in ${areaName}`,
      price: "₹8,999",
      timeline: "15–20 Working Days",
      icon: "🌐",
      gradient: "from-indigo-500 to-blue-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "FDI sectoral cap & pricing guideline compliance check",
        "FIRC & KYC coordination for foreign investor",
        "Valuation report from a SEBI-registered merchant banker",
        "FC-GPR filing on RBI FIRMS portal within 30 days",
        "Share allotment & PAS-3 filing with RoC Patna",
        "FEMA compliance documentation and record-keeping",
      ],
      seoContent: `Companies in ${areaName}, ${district}, Bihar receiving equity investment from a foreign individual or entity must comply with Foreign Exchange Management Act (FEMA) regulations and Reserve Bank of India reporting norms — a compliance requirement that applies irrespective of the investment amount, becoming increasingly relevant as Bihar's startup ecosystem, particularly in Patna's technology, agri-tech, and education-sector startups, attracts overseas angel investors, diaspora investment from the significant Bihari community abroad, and in some cases, institutional foreign venture capital. The core reporting obligation is Form FC-GPR (Foreign Currency-Gross Provisional Return), filed on the RBI's FIRMS (Foreign Investment Reporting and Management System) portal within 30 days of allotment of shares to the foreign investor.

Before shares can even be allotted, several foundational compliance steps must be satisfied — confirming the business sector permits foreign investment under the automatic route or identifying whether government approval route requirements apply, verifying pricing guidelines are met (shares must be issued to foreign investors at a price not less than fair value as determined by a SEBI-registered merchant banker or chartered accountant using an internationally accepted valuation methodology), obtaining the Foreign Inward Remittance Certificate (FIRC) confirming the funds were received through proper banking channels, and completing KYC documentation for the foreign investor as prescribed by RBI.

Once share allotment is complete, the FC-GPR filing on the FIRMS portal must include the valuation report, FIRC, KYC report from the investor's bank, and board/shareholder resolution approving the allotment — following which the company must also file Form PAS-3 with RoC Patna reporting the share allotment under the Companies Act. Taxvio manages the complete FDI compliance process for ${areaName} companies — from sectoral cap verification and valuation report coordination, through FIRC and KYC collection, to FC-GPR filing on the FIRMS portal and the corresponding PAS-3 filing with RoC Patna — ensuring your company's foreign investment is fully compliant with both FEMA/RBI and Companies Act requirements, protecting against the compounding penalties that apply to unreported or improperly structured foreign investment transactions.`,
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
                 
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#1a3c5e] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} className="shrink-0" />
                  </Link>
                  
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
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#1a3c5e] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
                <InquiryFormButton/>
        <Footar />
      </main>
    </>
  );
}