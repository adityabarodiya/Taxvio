// app/state/bihar/roc/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, BookOpen, ClipboardList,
  Building2, RefreshCw, Landmark,
} from "lucide-react";
import { BIHAR_AREAS, slugifyArea } from "@/data/bihar-cities";

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
    title: `Company Registration & ROC Compliance in ${areaName}, Bihar | Taxvio`,
    description: `Expert Private Limited, LLP, OPC & Section 8 Company formation; annual ROC compliance (AOC-4, MGT-7); director changes; company name change; capital increase; and company closure in ${areaName}, ${district}, Bihar. CA-assisted, 100% online, starting ₹3,999.`,
    keywords: [
      `company registration ${areaName}`,
      `private limited company ${areaName} Bihar`,
      `LLP registration ${areaName}`,
      `ROC compliance ${areaName}`,
      `OPC registration ${areaName}`,
      `Section 8 company ${areaName}`,
      `annual filing AOC-4 ${areaName}`,
      `director appointment ${areaName}`,
      `company name change ${areaName}`,
      `MCA filing ${district} Bihar`,
    ],
    alternates: {
      canonical: `https://www.taxvio.in/state/bihar/roc/${city}`,
    },
    openGraph: {
      title: `ROC & Company Registration in ${areaName}, Bihar | Taxvio`,
      description: `Company formation, LLP, OPC, annual ROC compliance & MCA filings in ${areaName}, ${district}, Bihar — CA-assisted, from ₹3,999.`,
      url: `https://www.taxvio.in/state/bihar/roc/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `ROC & Company Registration in ${areaName}, Bihar | Taxvio`,
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
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function BiharROCAreaPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const areaData  = findArea(city);
  const areaName  = areaData?.name     ?? city.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const district  = areaData?.district ?? areaName;
  const region    = areaData?.region   ?? "Bihar";

  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hello Taxvio, I need ROC / company registration services in ${areaName}, ${district}, Bihar.`
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
    description: `Taxvio provides Private Limited, LLP, OPC, Section 8 company formation; annual ROC compliance; director changes; name change; capital increase; and company closure in ${areaName}, ${district}, Bihar.`,
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
    priceRange: "₹2,499 - ₹10,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "ROC Bihar", item: "https://www.taxvio.in/state/bihar/roc" },
      { "@type": "ListItem", position: 3, name: district,    item: `https://www.taxvio.in/state/bihar/roc#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${areaName} ROC`, item: `https://www.taxvio.in/state/bihar/roc/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `ROC & Company Registration Services in ${areaName}, Bihar`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/bihar/roc/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does company registration take in ${areaName}, Bihar?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Private Limited Company and OPC registration in ${areaName} typically takes 7–10 working days from complete document submission. LLP registration takes 7–12 working days. Section 8 company requires 20–30 working days due to the Central Government licence process. All companies registered with an office in ${areaName} fall under RoC Patna.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the minimum capital required for company registration in ${areaName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `There is no minimum paid-up capital requirement for Private Limited Company, OPC, or LLP registration in ${areaName} since the Companies Amendment Act 2015 removed the ₹1 lakh minimum. Incorporation can begin with as little as ₹1 authorised and paid-up capital.`,
        },
      },
      {
        "@type": "Question",
        name: `What annual compliance is required for a company in ${areaName}, Bihar?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Every Private Limited Company in ${areaName} must file AOC-4 (financial statements) within 30 days of AGM and MGT-7 (annual return) within 60 days of AGM — both typically due by October/November. AGM must be held by September 30. LLPs file Form 11 by May 30 and Form 8 by October 30. Non-compliance attracts ₹100/day additional fees per form, with no cap on AOC-4. All filings go to RoC Patna.`,
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
                  { href: "/",                    label: "Home" },
                  { href: "/state/bihar/roc",     label: "ROC — Bihar" },
                  { href: null,                   label: areaName },
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
                  {areaName}, {district} · Bihar · ROC / MCA
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Company Registration &amp; ROC
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Services in {areaName}, Bihar
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert{" "}
                  <strong className="text-white">
                    Private Limited, LLP &amp; OPC formation
                  </strong>
                  , annual ROC compliance (AOC-4, MGT-7), director changes,
                  company name change, authorised capital increase &amp; company
                  strike-off in{" "}
                  <strong className="text-white">
                    {areaName}, {district}, Bihar
                  </strong>{" "}
                  — 100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹3,999</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "MCA-Registered CAs" },
                    { icon: Shield,     text: "RoC Patna Experts" },
                    { icon: Zap,        text: "7-Day Incorporation" },
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
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for ROC Help
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

              {/* Right — service menu */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}>
                <div className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                  <div>
                    <p className="font-bold text-white text-sm">ROC Services — {areaName}</p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      {district} · {services.length} services
                    </p>
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
                      <span className="flex items-center gap-2 text-[11px] font-semibold text-white/75">
                        <span>{svc.icon}</span>
                        <span className="truncate">
                          {svc.title
                            .replace(` in ${areaName}`, "")
                            .replace(` & ROC Compliance`, "")
                            .replace(` Registration`, "")
                            .replace(` (OPC)`, " (OPC)")
                            .replace(` & Strike Off`, " / Strike Off")
                            .replace(` in Authorised Share Capital`, "")
                            .replace(` Appointment & Resignation`, "")}
                        </span>
                      </span>
                      <span className="text-[10px] font-bold text-sky-300 shrink-0 ml-2">
                        {svc.price}
                      </span>
                    </a>
                  ))}
                </div>
                <div className="mx-4 mb-4 mt-2 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      Starting Price
                    </p>
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹3,999</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      Incorporation
                    </p>
                    <p className="text-white text-sm font-bold">7–10 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats ribbon */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck,  label: "MCA-Registered CAs"      },
                { icon: TrendingUp,  label: "1,800+ Companies Formed"  },
                { icon: Users,       label: "200+ Bihar Areas"         },
                { icon: IndianRupee, label: "RoC Patna Jurisdiction"   },
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
              { val: "7–10",   label: "Days to Incorporate", icon: Zap           },
              { val: "4.9★",   label: "Average Rating",      icon: Star          },
              { val: "₹3,999", label: "Starting Price",      icon: IndianRupee   },
              { val: "9",      label: "ROC Services",        icon: ClipboardList },
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

                {/* Coloured header */}
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
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
                              Service Fee
                            </p>
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
                Why {areaName} Businesses Choose Taxvio for ROC Compliance
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "MCA-Registered CA Team",
                  desc: `Every company registration and ROC filing for ${areaName} businesses is handled by practising CAs registered with MCA — with direct familiarity of RoC Patna's name approval patterns and processing requirements.`,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Send PAN, Aadhaar, address proof, and business details on WhatsApp from ${areaName}. We handle all MCA portal submissions, DSC procurement, and RoC Patna filings without any physical visit.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Landmark,
                  title: "RoC Patna Jurisdiction Experts",
                  desc: `Every Bihar-based company falls under RoC Patna's administration. We understand its name approval objection patterns, common documentation requirements, and standard processing timelines — minimising delays for ${areaName} businesses.`,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Compliance Reminders",
                  desc: `We maintain a shared compliance calendar for every ${areaName} company client — advance reminders for AGM dates, AOC-4, MGT-7, DIR-3 KYC, and LLP Form 11/8 deadlines before penalties accrue.`,
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹3,999",
                  desc: `No hidden RoC filing fee surprises. Clear, all-inclusive upfront pricing for every ROC service in ${areaName}. Business owners know exactly what they pay before we start.`,
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: RefreshCw,
                  title: "End-to-End Post-Incorporation",
                  desc: `Company formation is just the beginning. We simultaneously handle GST registration, PAN/TAN allotment, and professional tax for new ${areaName} companies — getting you fully operational in one engagement.`,
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
                How to Register a Company in {areaName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Share Documents",     desc: "Send PAN, Aadhaar, address proof & business details of all directors on WhatsApp" },
                { step: "02", title: "DSC & Name Approval", desc: "Our CA team procures DSCs, applies for DIN, and reserves company name via RUN/SPICe+" },
                { step: "03", title: "MOA, AOA & SPICe+",   desc: "We draft MOA & AOA, file SPICe+ with RoC Patna, and pay applicable government fees" },
                { step: "04", title: "Certificate & Beyond",desc: "Certificate of Incorporation received. We complete PAN, TAN, GST & compliance setup" },
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
                Company Registration FAQs — {areaName}, Bihar
              </h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `How long does company registration take in ${areaName}, Bihar?`,
                  a: `Private Limited Company and OPC registration in ${areaName} typically takes 7–10 working days from complete document submission. LLP takes 7–12 working days. Section 8 company requires 20–30 working days due to the Central Government licence process. All Bihar-based companies are registered under RoC Patna, which covers both Bihar and Jharkhand.`,
                },
                {
                  q: `What is the minimum capital for company registration in ${areaName}?`,
                  a: `There is no minimum paid-up capital requirement for Private Limited Company, OPC, or LLP registration in ${areaName} since the Companies Amendment Act 2015 abolished the ₹1 lakh minimum. You can incorporate with just ₹1 authorised and paid-up capital. LLPs also have no minimum capital requirement under the LLP Act 2008.`,
                },
                {
                  q: `What is the annual compliance cost for a company in ${areaName}, Bihar?`,
                  a: `Taxvio's annual ROC compliance package for ${areaName} companies starts at ₹4,999/year — covering AOC-4, MGT-7/MGT-7A, AGM and board meeting minutes, and secretarial documentation. DIN KYC (DIR-3 KYC) is included. Statutory audit fees are separate and depend on turnover. LLP annual compliance (Form 11 + Form 8 with RoC Patna) starts at ₹3,999/year.`,
                },
              ].map((f) => (
                <div key={f.q}
                  className="border border-gray-100 rounded-2xl bg-white shadow-sm"
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
                    ROC Services in Nearby Bihar Areas
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionAreas.map((c) => (
                  <Link key={c.name}
                    href={`/state/bihar/roc/${slugifyArea(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    ROC in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/bihar/roc"
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
                  Serving company registration clients in {areaName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Register Your Company in {areaName} — Fast &amp; Compliant
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  Private Limited, LLP, OPC, Section 8 formation; annual ROC compliance;
                  director changes; company closure — all delivered online for businesses
                  in {areaName}, {district}, Bihar. Starting ₹3,999. CA-assisted,
                  same-day WhatsApp response.
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