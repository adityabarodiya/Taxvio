// app/state/delhi/roc/[city]/page.tsx
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
    title: `Company Registration & ROC Compliance in ${areaName}, Delhi | Taxvio`,
    description: `Expert Private Limited, LLP, OPC & Section 8 Company formation; annual ROC compliance (AOC-4, MGT-7); director changes; company name change; capital increase; and company closure in ${areaName}, ${district}, Delhi. CA-assisted, 100% online, starting ₹3,999.`,
    keywords: [
      `company registration ${areaName}`,
      `private limited company ${areaName} Delhi`,
      `LLP registration ${areaName}`,
      `ROC compliance ${areaName}`,
      `OPC registration ${areaName}`,
      `Section 8 company ${areaName}`,
      `annual filing AOC-4 ${areaName}`,
      `director appointment ${areaName}`,
      `company name change ${areaName}`,
      `MCA filing ${district}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/delhi/roc/${city}` },
    openGraph: {
      title: `ROC & Company Registration in ${areaName}, Delhi | Taxvio`,
      description: `Company formation, LLP, OPC, annual ROC compliance & MCA filings in ${areaName}, ${district}, Delhi — CA-assisted, from ₹3,999.`,
      url: `https://www.taxvio.in/state/delhi/roc/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `ROC & Company Registration in ${areaName}, Delhi | Taxvio` },
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
        "Certificate of Incorporation from RoC Delhi",
        "PAN, TAN and bank account opening guidance",
        "Digital Signature Certificate for all directors",
        "Registered office documentation for your ${areaName} address",
      ],
      seoContent: `Private Limited Company registration is the most widely chosen business structure for entrepreneurs and startups establishing operations in ${areaName}, ${district}, Delhi — offering limited liability protection, a separate legal identity, easier access to institutional funding, and significantly higher credibility with banks, vendors, and corporate clients compared to a sole proprietorship. Under the Companies Act 2013, a Private Limited Company requires a minimum of 2 directors (maximum 15) and 2 shareholders (maximum 200), and since the 2015 amendment removed the ₹1 lakh minimum capital requirement, incorporation in ${areaName} can begin with as little as ₹1 in paid-up capital.

The incorporation process uses the SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) integrated form on the MCA21 portal, which combines Director Identification Number (DIN) allotment, digital signature procurement, name reservation via RUN or SPICe+ Part A, MOA and AOA filing, and PAN/TAN application into a single consolidated application. All companies incorporated with a registered office in ${areaName} fall under the jurisdiction of the Registrar of Companies, Delhi (RoC Delhi) — one of India's busiest ROC offices, given the sheer density of incorporations across the capital.

Taxvio handles the complete process for ${areaName} businesses — from name availability and trademark conflict checks, to DSC procurement and Aadhaar-based DIN verification, industry-specific MOA and AOA drafting, SPICe+ filing with the correct NIC activity code, and receipt of the Certificate of Incorporation. Post-incorporation, we provide the company PAN card, TAN allotment, and a complete first-year compliance checklist covering the first board meeting, share certificate issuance, and statutory register setup — so your ${areaName} company is fully operational from Day 1, not weeks later.`,
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
      seoContent: `Limited Liability Partnership registration offers entrepreneurs and professionals in ${areaName}, ${district}, Delhi the operational flexibility of a partnership combined with the limited liability protection of a company — making it especially popular among CA firms, law practices, design studios, and small-to-medium consulting businesses across Delhi's professional services sector. Under the LLP Act 2008, partners' personal assets remain protected from business liabilities, a meaningful upgrade over traditional partnership firms where partners carry unlimited personal liability for business debts.

The incorporation process in ${areaName} uses the FiLLiP (Form for Incorporation of Limited Liability Partnership) on the MCA portal, integrating DPIN (Designated Partner Identification Number) allotment, name reservation, and Certificate of Incorporation into one application. Every LLP requires at least 2 designated partners, with at least one being an Indian resident. Following incorporation, the LLP Agreement — covering partner contribution ratios, profit-sharing arrangements, decision-making authority, and exit provisions — must be filed in Form 3 with RoC Delhi within 30 days, along with payment of applicable stamp duty.

Taxvio's LLP registration service for ${areaName} businesses includes complete DPIN and DSC procurement for designated partners, a professionally drafted LLP Agreement tailored to your specific business arrangement, stamp duty payment coordination, and timely Form 3 filing within the statutory window. We also handle the critical post-incorporation steps — LLP PAN and TAN application, GST registration where applicable, and a clear briefing on the ongoing annual compliance calendar (Form 11 by May 30 and Form 8 by October 30) — so your ${areaName} LLP starts and stays compliant from incorporation onward.`,
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
      seoContent: `One Person Company (OPC) registration is purpose-built for solo entrepreneurs in ${areaName}, ${district}, Delhi who want the credibility and limited liability of a corporate structure without needing a second director or shareholder. Introduced under the Companies Act 2013, an OPC permits a single Indian citizen and resident to be the sole member and director — with a mandatory nominee appointed to take over the company in the event of the member's death or incapacity. This structure suits freelancers, consultants, and proprietors in ${areaName} who operate independently but want a formal corporate identity for banking, contracting, and tax purposes.

OPC offers meaningful advantages over sole proprietorship for ${areaName} entrepreneurs — limited liability protecting personal assets, separate legal entity status enabling the company to own property and enter contracts independently, easier business credit access, and perpetual existence. Compliance is also somewhat lighter than standard Private Limited companies — OPCs are exempt from holding AGMs, and board meeting frequency requirements are relaxed when there is only one director. However, an OPC must mandatorily convert to a Private Limited Company once paid-up capital exceeds ₹50 lakh or annual turnover exceeds ₹2 crore, and cannot raise equity from external investors or issue debentures while in OPC form.

Taxvio registers OPCs in ${areaName} using the same SPICe+ process applied to Private Limited Companies — name check, DSC procurement, DIN application for the sole director, nominee consent filing in Form INC-3, and MOA/AOA drafting with the required OPC-specific restrictive clauses. Post-incorporation, we guide ${areaName} solo entrepreneurs through first board meeting compliance, share certificate issuance, GST registration, and annual compliance planning — getting the new entity fully operational quickly.`,
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
      seoContent: `Section 8 Company registration is the preferred legal structure for NGOs, foundations, and social enterprises establishing a formal presence in ${areaName}, ${district}, Delhi — a city with one of India's largest concentrations of registered non-profits, given its proximity to government bodies, international organisations, and CSR-deploying corporate headquarters. Unlike charitable trusts or societies registered under state-specific laws, a Section 8 Company is incorporated under central law (Companies Act 2013), providing uniform legal standing nationwide and significantly greater credibility with institutional and foreign donors.

A Section 8 Company is granted a licence by the Central Government — processed through RoC Delhi with delegated authority — once the applicant demonstrates that the company is formed to promote commerce, education, art, science, sports, research, social welfare, religion, charity, or environmental protection, and intends to apply any profits toward these objectives without distributing dividends to members. The application requires Form INC-12 along with an MOA and AOA specifically drafted to reflect the charitable purpose, declarations from proposed directors, and a statement of anticipated income sources and objects.

Taxvio manages the complete Section 8 Company registration process for ${areaName} NGOs and social enterprises — drafting MOA and AOA aligned precisely with the organisation's specific charitable focus (education, healthcare, environmental, community development, etc.), preparing the Form INC-12 application, coordinating with RoC Delhi through to licence issuance and Certificate of Incorporation, and subsequently arranging the essential follow-on registrations — 12AB for income tax exemption and 80G for donor deduction eligibility — and advising on FCRA registration where the ${areaName} organisation plans to receive foreign contributions.`,
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
      seoContent: `Annual ROC compliance is a continuous, recurring obligation for every Private Limited Company, OPC, and LLP registered with RoC Delhi for a business operating in ${areaName}, ${district} — and missing these deadlines carries escalating, uncapped additional fees plus the serious risk of director disqualification. Companies must hold their Annual General Meeting within 6 months of financial year end (by September 30 for standard April–March companies), file AOC-4 (financial statements) within 30 days of AGM, and file MGT-7 or MGT-7A (annual return) within 60 days of AGM — placing the typical compliance window between September and November for most companies.

The financial consequences of missed deadlines for ${areaName} companies are substantial: additional fees of ₹100 per day per form, with no upper cap on AOC-4, meaning a six-month delay across both forms can accumulate well over ₹36,000 in penalties before the original filing fee is even considered. Beyond fees, directors of companies that fail to file annual returns for 3 consecutive years are disqualified under Section 164(2) — barred from directorship in any company for 5 years, with their existing DIN rendered inactive across all their directorships.

Taxvio's annual ROC compliance service for ${areaName} companies includes a proactive compliance calendar with advance deadline alerts, collection and review of audited financial statements, board and AGM minute drafting, calculation of director/shareholder details for MGT-7, DSC-based filing of AOC-4 and MGT-7 before deadlines, and DIR-3 KYC filing for all directors before September 30. For LLPs registered in ${areaName}, our package covers Form 11 (by May 30) and Form 8 (by October 30) — keeping designated partners' DPINs active and the LLP's RoC Delhi status consistently in good standing.`,
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
        "DIR-12 filing with RoC Delhi within 30 days",
        "Board resolution for appointment / resignation acceptance",
        "DIR-2 consent letter from incoming director",
        "DIN application (Form DIR-3) for new directors",
        "DSC procurement where required",
        "Statutory Register of Directors update",
      ],
      seoContent: `Every change in a company's board of directors — whether appointment of a new director, resignation, removal, or designation change — must be reported to RoC Delhi within 30 days via Form DIR-12, for any company with its registered office in ${areaName}, ${district}, Delhi. Late filing attracts additional fees of ₹100 per day, and beyond the financial cost, unfiled director changes create discrepancies between your company's actual governance and MCA's official records — a mismatch that complicates banking signatory updates, loan documentation, and regulatory filings where director details must align across systems.

Appointing a new director in your ${areaName} company requires a board resolution passed at a properly convened meeting (or circular resolution where the AOA permits), the incoming director's written consent in Form DIR-2, confirmation that the individual is not disqualified under Section 164, and a valid DIN — applied fresh via Form DIR-3 if the person doesn't already hold one. The newly appointed director must also countersign the company's statutory registers within 30 days of taking office, a procedural step frequently overlooked by ${areaName} companies in the rush to file DIR-12.

Director resignation requires the outgoing director to submit written resignation, the company to formally accept it via board resolution, and DIR-12 filing with RoC Delhi within 30 days. A common compliance gap among ${areaName} companies is failing to file DIR-12 after a director has informally stepped back from involvement — the individual's name continues appearing in official MCA records, creating ongoing exposure to liability for company actions taken after their actual departure. Taxvio handles the complete director change process — resolution drafting, DIR-2/DIR-3 preparation, DSC coordination, DIR-12 filing, and statutory register updates.`,
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
        "RoC Delhi approval for the new name",
        "MOA and AOA alteration via INC-24",
        "Fresh Certificate of Incorporation with new name",
        "Update coordination across GST, PAN, banking, contracts",
      ],
      seoContent: `Company name change is a formal legal process for companies registered in ${areaName}, ${district}, Delhi governed by Sections 13 and 16 of the Companies Act 2013 — requiring shareholder approval, RoC Delhi sanction, and amendment of the company's foundational MOA. Businesses in ${areaName} commonly initiate a name change for strategic reasons: rebranding after a market repositioning, integrating identity following a merger or acquisition, resolving a trademark conflict identified after incorporation, or aligning the corporate name with an evolved product or service focus.

The process begins with checking new name availability via the MCA RUN portal — confirming the proposed name isn't identical or deceptively similar to an existing registered company or trademark, and doesn't contain restricted words requiring special Central Government clearance. Once availability is confirmed, an Extraordinary General Meeting must be convened with proper notice, and shareholders must pass a Special Resolution approving the change and the consequent alteration to the MOA's name clause (Clause I).

Following the EGM, the ${areaName} company files MGT-14 (resolution filing) with RoC Delhi within 30 days, alongside the INC-24 application requesting formal name change approval under Section 16. If RoC Delhi is satisfied the new name complies with all naming guidelines, a fresh Certificate of Incorporation reflecting the updated name is issued — the definitive legal proof of the change. This certificate must then be reflected across all bank accounts, GST registration (via REG-14 amendment), income tax records, trademark filings, vendor contracts, and company letterhead. Taxvio manages the complete process for ${areaName} companies — from RUN filing and EGM documentation through to INC-24 approval and coordinated post-approval updates across all linked registrations.`,
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
        "SH-7 filing with RoC Delhi within 30 days of resolution",
        "Ordinary resolution (EGM or Board, per AOA)",
        "MOA alteration — Capital Clause (Clause V)",
        "Stamp duty computation on increased capital",
        "MGT-14 filing where EGM resolution applies",
        "Updated capital structure in MCA master data",
      ],
      seoContent: `Increasing the authorised share capital of a company registered in ${areaName}, ${district}, Delhi becomes necessary whenever the business wants to issue new shares beyond its existing ceiling — required for raising investor funding, converting outstanding loans into equity, implementing Employee Stock Option Plans, or bringing in additional shareholders. The authorised share capital is the maximum limit specified in the company's Memorandum of Association, Clause V, and no shares can be issued beyond this figure without first formally increasing it through the prescribed ROC process.

For ${areaName} companies, the process involves a Board Meeting recommending the increase and convening an EGM (or passing the resolution directly through the Board where the AOA permits), an Ordinary Resolution approving the increase, filing the resolution in MGT-14 with RoC Delhi within 30 days where an EGM resolution was used, and filing Form SH-7 with RoC Delhi within 30 days of the resolution date. Delhi has its own applicable stamp duty rates on SH-7, calculated based on the incremental authorised capital — getting this calculation correct before filing prevents processing delays and rejection.

Once SH-7 is processed and approved by RoC Delhi, the company's authorised capital figure updates in the MCA master data, and the MOA's Capital Clause is considered amended from the date of the resolution — though the company should retain updated MOA copies along with the filing acknowledgement for its records. Taxvio handles the complete authorised capital increase process for ${areaName} companies — from board/EGM scheduling and resolution drafting, to Delhi stamp duty calculation, MGT-14 and SH-7 filing, and confirmation tracking — clearing the path for your company to proceed with new share allotments without delay.`,
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
      seoContent: `Company closure and strike off is the formal legal process of dissolving an inactive company registered in ${areaName}, ${district}, Delhi and removing it from RoC Delhi's official register — freeing directors from the ongoing burden of annual compliance for a company no longer in operation. A company with no pending liabilities, no active litigation, and no outstanding statutory dues can apply for voluntary strike off under Section 248(2) using the Fast Track Exit scheme via Form STK-2.

Eligibility for voluntary strike off requires the company to either not have commenced business within 1 year of incorporation, or not to have carried on any business for the preceding 2 financial years, with no pending legal proceedings against it. A critical and frequently missed prerequisite is that all pending annual returns (MGT-7) and financial statements (AOC-4) must be filed before STK-2 is submitted — even for companies that were entirely dormant throughout that period. ${areaName} company owners regularly discover their STK-2 application rejected by RoC Delhi precisely because of unfiled annual returns sitting in arrears.

The STK-2 application requires a Statement of Accounts (prepared by a CA, not older than 30 days from filing) showing NIL or near-NIL assets and liabilities, an Indemnity Bond on non-judicial stamp paper executed by all directors confirming no pending liabilities, an Affidavit confirming the company's inoperative status, and shareholder consent through board resolution or EGM. Once filed, RoC Delhi publishes a public notice inviting objections, and absent any, the company name is struck off and a Certificate of Dissolution is issued. Taxvio manages the complete closure process for ${areaName} companies — from compliance audit and pending filing clearance through to STK-2 preparation and RoC Delhi follow-up until final dissolution.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function DelhiROCAreaPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const areaData  = getAreaData(city);
  const areaName  = areaData?.name     ?? formatAreaDisplay(city);
  const district  = areaData?.district ?? areaName;
  const region    = areaData?.region   ?? "Delhi";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need ROC / company registration services in ${areaName}, ${district}, Delhi.`)}`;

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
    description: `Taxvio provides Private Limited, LLP, OPC, Section 8 company formation; annual ROC compliance; director changes; name change; capital increase; and company closure in ${areaName}, ${district}, Delhi.`,
    areaServed: [{ "@type": "Place", name: areaName, containedInPlace: { "@type": "City", name: "Delhi" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3100" },
    priceRange: "₹2,499 - ₹10,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "ROC Delhi",  item: "https://www.taxvio.in/state/delhi/roc" },
      { "@type": "ListItem", position: 3, name: district,     item: `https://www.taxvio.in/state/delhi/roc#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${areaName} ROC`, item: `https://www.taxvio.in/state/delhi/roc/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `ROC & Company Registration Services in ${areaName}, Delhi`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/delhi/roc/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does company registration take in ${areaName}, Delhi?`,
        acceptedAnswer: { "@type": "Answer", text: `Private Limited Company and OPC registration in ${areaName} typically takes 7–10 working days from complete document submission. LLP registration takes 7–12 working days. Section 8 company takes 20–30 working days due to the Central Government licence process. All companies registered with an office in ${areaName} fall under RoC Delhi.` },
      },
      {
        "@type": "Question",
        name: `What is the minimum capital required for company registration in ${areaName}?`,
        acceptedAnswer: { "@type": "Answer", text: `There is no minimum paid-up capital requirement for Private Limited Company, OPC, or LLP registration in ${areaName} since the Companies Amendment Act 2015 removed the ₹1 lakh minimum. Incorporation can begin with as little as ₹1 authorised and paid-up capital.` },
      },
      {
        "@type": "Question",
        name: `What annual compliance is required for a company in ${areaName}?`,
        acceptedAnswer: { "@type": "Answer", text: `Every Private Limited Company in ${areaName} must file AOC-4 (financial statements) within 30 days of AGM and MGT-7 (annual return) within 60 days of AGM — both typically due by October/November. AGM must be held by September 30. LLPs file Form 11 by May 30 and Form 8 by October 30. Non-compliance attracts ₹100/day additional fees per form, with no cap on AOC-4.` },
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
                  { href: "/state/delhi/roc", label: "ROC — Delhi" },
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
                  {areaName}, {district} · Delhi · ROC / MCA
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Company Registration &amp; ROC
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Services in {areaName}, Delhi
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">Private Limited, LLP &amp; OPC formation</strong>,
                  annual ROC compliance (AOC-4, MGT-7), director changes, company name change,
                  authorised capital increase &amp; company strike-off in{" "}
                  <strong className="text-white">{areaName}, {district}, Delhi</strong> —
                  100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹3,999</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "MCA-Registered CAs" },
                    { icon: Shield,     text: "RoC Delhi Experts" },
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
                      <span className="text-[10px] font-bold text-sky-300 shrink-0 ml-2">{svc.price}</span>
                    </a>
                  ))}
                </div>
                <div className="mx-4 mb-4 mt-2 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Starting Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹3,999</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Incorporation</p>
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
                { icon: BadgeCheck, label: "MCA-Registered CAs"     },
                { icon: TrendingUp, label: "3,100+ Companies Formed" },
                { icon: Users,      label: "300+ Delhi Areas"        },
                { icon: IndianRupee,label: "RoC Delhi Jurisdiction"  },
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
              { val: "7–10", label: "Days to Incorporate", icon: Zap          },
              { val: "4.9★", label: "Average Rating",      icon: Star         },
              { val: "₹3,999",label: "Starting Price",     icon: IndianRupee  },
              { val: "9",    label: "ROC Services",         icon: ClipboardList },
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
                          ROC Service #{String(idx + 1).padStart(2, "0")}
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
                Why {areaName} Businesses Choose Taxvio for ROC Compliance
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users,       title: "MCA-Registered CA Team",         desc: `Every company registration and ROC filing for ${areaName} businesses is handled by practising CAs registered with MCA — with deep familiarity of RoC Delhi's processing timelines and requirements.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap,         title: "100% Online — No Office Visit",   desc: `Send PAN, Aadhaar, address proof, and business details on WhatsApp from ${areaName}. We handle all portal submissions, DSC procurement, and MCA filings without requiring an office visit.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Landmark,    title: "RoC Delhi Jurisdiction Experts", desc: `Every Delhi-based company falls under RoC Delhi's processing. We understand its name approval patterns, common objection reasons, and standard timelines — avoiding delays for ${areaName} businesses.`, color: "bg-violet-100 text-violet-700" },
                { icon: AlertCircle, title: "Proactive Compliance Reminders",  desc: `We maintain a compliance calendar for every ${areaName} company client — advance reminders for AGM dates, AOC-4, MGT-7, DIR-3 KYC, and LLP Form 11/8 deadlines.`, color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹3,999", desc: `No hidden RoC filing fee surprises. Clear, upfront pricing for every ROC service. ${areaName} business owners know exactly what they pay before we start.`, color: "bg-teal-100 text-teal-700" },
                { icon: RefreshCw,   title: "End-to-End Post-Incorporation",   desc: `Company formation is just step one. We simultaneously handle GST registration, PAN/TAN, and professional tax for new ${areaName} companies — getting you fully operational in one engagement.`, color: "bg-sky-100 text-sky-700" },
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
                How to Register a Company in {areaName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Share Documents",      desc: "Send PAN, Aadhaar, address proof & business details of all directors on WhatsApp" },
                { step: "02", title: "DSC & Name Approval",  desc: "Our CA team procures DSCs, applies for DIN, and reserves company name via RUN/SPICe+" },
                { step: "03", title: "MOA, AOA & SPICe+",    desc: "We draft MOA & AOA, file SPICe+ with RoC Delhi, and pay government fees" },
                { step: "04", title: "Certificate & Beyond", desc: "Certificate of Incorporation received. We complete PAN, TAN, GST & compliance setup" },
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
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">Company Registration FAQs — {areaName}</h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `How long does company registration take in ${areaName}, Delhi?`,
                  a: `Private Limited Company and OPC registration in ${areaName} typically takes 7–10 working days from complete document submission. LLP takes 7–12 working days. Section 8 company requires 20–30 working days due to the Central Government licence process. All Delhi-based companies are registered under RoC Delhi.`,
                },
                {
                  q: `What is the minimum capital for company registration in ${areaName}?`,
                  a: `There is no minimum paid-up capital requirement for Private Limited Company, OPC, or LLP registration in ${areaName} since the Companies Amendment Act 2015 abolished the ₹1 lakh minimum. You can incorporate with just ₹1 authorised capital. LLPs also have no minimum capital requirement under the LLP Act 2008.`,
                },
                {
                  q: `What is the annual compliance cost for a company in ${areaName}?`,
                  a: `Taxvio's annual ROC compliance package for ${areaName} companies starts at ₹4,999/year — covering AOC-4, MGT-7, AGM minutes, board meeting minutes, and secretarial documentation. DIN KYC (DIR-3 KYC) is included. Statutory audit fees are separate and depend on turnover. LLP annual compliance (Form 11 + Form 8) starts at ₹3,999/year.`,
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
                  <h2 className="text-lg font-extrabold text-gray-800">ROC Services in Nearby Delhi Areas</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionAreas.map((c) => (
                  <Link key={c.name}
                    href={`/state/delhi/roc/${slugifyArea(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    ROC in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/delhi/roc"
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
                  Serving company registration clients in {areaName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Register Your Company in {areaName} — Fast &amp; Compliant
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  Private Limited, LLP, OPC, Section 8 formation; annual ROC compliance; director changes;
                  company closure — all delivered online for businesses in {areaName}, {district}.
                  Starting ₹3,999. CA-assisted, same-day WhatsApp response.
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