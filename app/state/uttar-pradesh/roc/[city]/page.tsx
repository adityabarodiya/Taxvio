// app/state/uttar-pradesh/roc-services/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, Building2, BookOpen,
  ClipboardList, RefreshCw, Landmark,
} from "lucide-react";
import {
  UP_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay,
} from "@/data/up-gst-cities";

/* ─── Static Params ─────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return ALL_CITY_SLUGS.map((city) => ({ city }));
}

/* ─── Metadata ──────────────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const data   = getCityData(city);
  const cityName = data?.name  ?? formatCityDisplay(city);
  const district = data?.district ?? cityName;

  return {
    title: `Company Registration & ROC Compliance in ${cityName}, ${district}, UP | Taxvio`,
    description: `Expert Private Limited, LLP, OPC & Section 8 company formation; annual ROC compliance (AOC-4, MGT-7); director changes; company name change; capital increase; and company closure in ${cityName}, ${district}, Uttar Pradesh. CA-assisted, 100% online, starting ₹2,999.`,
    keywords: [
      `company registration ${cityName}`,
      `private limited company ${cityName}`,
      `LLP registration ${cityName} UP`,
      `ROC compliance ${cityName}`,
      `OPC registration ${cityName}`,
      `annual filing AOC-4 ${cityName}`,
      `director appointment ${cityName}`,
      `company name change ${cityName}`,
      `MCA filing ${district}`,
      `Taxvio ROC ${cityName}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/uttar-pradesh/roc-services/${city}` },
    openGraph: {
      title: `ROC & Company Registration in ${cityName}, UP | Taxvio`,
      description: `Company formation, LLP, OPC, annual ROC compliance & MCA filings in ${cityName}, ${district}, UP — CA-assisted, from ₹2,999.`,
      url: `https://www.taxvio.in/state/uttar-pradesh/roc-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `ROC & Company Registration in ${cityName}, UP | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(cityName: string, district: string, region: string) {
  return [

    /* ── 1. Private Limited Company ── */
    {
      slug: "private-limited-formation",
      title: `Private Limited Company Registration in ${cityName}`,
      price: "₹6,999",
      timeline: "7–10 Working Days",
      icon: "🏢",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "SPICe+ (INC-32) integrated form — DIN, DSC, name approval, MOA, AOA",
        "Minimum 2 directors & 2 shareholders (can be same persons)",
        "Certificate of Incorporation from RoC Kanpur",
        "PAN, TAN and bank account opening guidance",
        "Digital Signature Certificate (DSC) for all directors",
        "Registered office in ${cityName} — address proof & NOC",
      ],
      seoContent: `Private Limited Company registration in ${cityName}, ${district} is the most popular business structure chosen by entrepreneurs and startups across Uttar Pradesh — because it combines limited liability protection, perpetual existence, ease of raising institutional funding, and high credibility with customers, vendors, and banks. Under the Companies Act 2013, a Private Limited Company requires a minimum of 2 directors (maximum 15) and 2 shareholders (maximum 200), with no mandatory minimum paid-up capital requirement since the Companies Amendment Act 2015 removed the ₹1 lakh minimum.

The incorporation process for a Private Limited Company in ${cityName} begins with the SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) integrated form on the MCA21 portal — a single consolidated application that simultaneously handles Director Identification Number (DIN) allotment for new directors, digital signature procurement, name reservation through RUN (Reserve Unique Name) or SPICe+ PART-A, Memorandum of Association (MOA) and Articles of Association (AOA) filing, PAN and TAN application, EPFO registration, ESIC registration, and GST registration (optional at incorporation stage). The Registrar of Companies for all UP-registered companies is RoC Kanpur, under the Northern Region jurisdiction.

Taxvio handles the complete Private Limited Company registration process for ${cityName} businesses — from the initial name availability check and trademark conflict analysis, to DSC procurement and Aadhaar-based DIN verification, MOA and AOA drafting customised to your industry and business objectives, SPICe+ filing with the correct NIC activity code, and receipt of the Certificate of Incorporation. Post-incorporation, we provide the company PAN card, TAN allotment, and a complete new company compliance checklist covering first board meeting requirements, share certificate issuance (Form SH-1), statutory registers creation, and first year ROC compliance calendar.

${region === "Western UP"
  ? `For businesses in ${cityName} in Western UP, proximity to Delhi NCR means many companies also register for GST, IEC (Import Export Code), and MSME Udyam simultaneously — our integrated service handles all four registrations in a single engagement.`
  : region === "Eastern UP"
  ? `Businesses incorporating in ${cityName} in Eastern UP often benefit from UP Industrial Investment & Employment Promotion Policy incentives — our team guides new companies on MSME registration, Udyam certification, and available sector-specific government schemes.`
  : `Companies registered in ${cityName} in Central UP frequently serve the state capital Lucknow corridor and benefit from UP's single window clearance system — we assist with all ancillary registrations required under the UP Business Reform Action Plan.`}`,
    },

    /* ── 2. LLP Registration ── */
    {
      slug: "llp-formation",
      title: `LLP Registration in ${cityName}`,
      price: "₹5,999",
      timeline: "7–12 Working Days",
      icon: "🤝",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "FiLLiP (Form for incorporation of LLP) filing on MCA portal",
        "DPIN (Designated Partner Identification Number) for all partners",
        "LLP Agreement drafting — profit sharing, rights, duties",
        "LLP Agreement stamping and notarisation (UP stamp duty)",
        "Form 3 — LLP Agreement filing with RoC Kanpur within 30 days",
        "Certificate of Incorporation as LLP",
      ],
      seoContent: `Limited Liability Partnership (LLP) registration in ${cityName}, ${district} offers a uniquely flexible and tax-efficient business structure that combines the operational flexibility of a partnership with the limited liability protection of a company. Under the LLP Act 2008, partners' personal assets are protected from business liabilities — unlike in a traditional partnership firm where partners bear unlimited personal liability. LLPs are particularly popular among CA firms, law firms, consulting businesses, IT service companies, and small-to-medium professional practices in ${cityName} that want legal structure and credibility without the compliance burden of a Private Limited Company.

The LLP incorporation process in ${cityName} uses the FiLLiP (Form for Incorporation of Limited Liability Partnership) on the MCA portal, which integrates DPIN (Designated Partner Identification Number) allotment for new partners, name reservation, and Certificate of Incorporation into a single application. Every LLP must have a minimum of 2 designated partners, at least one of whom must be a resident of India. After incorporation, the LLP Agreement — the foundational document governing partner rights, profit sharing ratios, contribution obligations, decision-making processes, and exit mechanisms — must be filed in Form 3 with the RoC Kanpur within 30 days of incorporation.

Taxvio's LLP registration service for ${cityName} businesses includes complete DPIN and DSC procurement for all designated partners, professionally drafted LLP Agreement tailored to your business model and profit-sharing requirements, assistance with UP stamp duty payment for LLP Agreement execution, Form 3 filing within the statutory deadline, and post-incorporation guidance on annual compliance (Form 11 annual return by May 30, Form 8 statement of accounts by October 30). We also handle the critical post-incorporation step of LLP PAN card application and TAN registration, GST registration for the new LLP entity, and professional tax enrolment in Uttar Pradesh — ensuring your ${cityName} LLP is fully operational from Day 1 without hunting for multiple service providers.`,
    },

    /* ── 3. OPC Registration ── */
    {
      slug: "opc-formation",
      title: `One Person Company (OPC) Registration in ${cityName}`,
      price: "₹5,999",
      timeline: "7–10 Working Days",
      icon: "👤",
      gradient: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "Single-member private company with limited liability protection",
        "Sole director + nominee director (mandatory under Section 149)",
        "INC-3 consent from nominee director",
        "MOA & AOA with OPC-specific restrictive clauses",
        "Automatic conversion to Private Limited when eligible",
        "Exempted from many compliance requirements vs Pvt Ltd",
      ],
      seoContent: `One Person Company (OPC) registration in ${cityName}, ${district} is the ideal corporate structure for solo entrepreneurs who want the credibility and limited liability protection of a Private Limited Company without needing a second member or director. Introduced under the Companies Act 2013, an OPC allows a single natural person who is an Indian citizen and resident to be the sole member and director — with the requirement to appoint a nominee who takes over the company if the member becomes incapacitated or dies. This makes OPC perfect for freelancers, consultants, sole proprietors upgrading to a corporate structure, and professionals in ${cityName} who operate independently but want formal corporate identity.

OPC in ${cityName} offers significant advantages over sole proprietorship: limited liability (personal assets protected from business creditors), separate legal entity status (can own property, enter contracts, sue and be sued in the company's name), easier bank credit access, and perpetual existence. Unlike a Private Limited Company, an OPC is exempt from holding AGMs, certain board meeting requirements are relaxed (one director meeting per half-year suffices if there is only one director), and the cash flow statement is not mandatory. However, OPC cannot engage in Non-Banking Financial Investment activities, issue debentures, or raise equity from investors — and must mandatorily convert to a Private Limited Company when paid-up capital exceeds ₹50 lakh or turnover exceeds ₹2 crore.

Taxvio handles OPC registration in ${cityName} with the same SPICe+ integrated process used for Private Limited Companies — name availability check, DSC procurement, DIN application for the sole director, nominee consent filing in Form INC-3, and MOA/AOA drafting with OPC-specific restrictive clauses (including the clause limiting membership to one person). Post-incorporation, we assist with first board meeting compliance, share certificate issuance, statutory register creation, GST registration, and annual compliance planning — helping ${cityName} solo entrepreneurs hit the ground running with their new corporate entity.`,
    },

    /* ── 4. Section 8 Company ── */
    {
      slug: "section-8-company",
      title: `Section 8 Company Registration in ${cityName}`,
      price: "₹9,999",
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
        "FCRA guidance for organisations receiving foreign contributions",
      ],
      seoContent: `Section 8 Company registration in ${cityName}, ${district} is the preferred corporate structure for non-profit organisations, NGOs, foundations, charitable trusts operating as companies, educational institutions, and social enterprises that wish to operate with a formal corporate identity under the Companies Act 2013. Unlike a charitable trust or society (which are registered under state-specific laws), a Section 8 Company is incorporated under central law — providing uniform legal standing, greater credibility with government agencies, CSR donors, and foreign funding organisations, and access to limited liability protection for its directors and members.

A Section 8 Company is granted a licence by the Central Government (Regional Director or ROC with delegated powers) on the basis that it is formed to promote commerce, art, science, sports, education, research, social welfare, religion, charity, environmental protection, or any other similar object — and intends to apply its profits, if any, for promoting these objectives without distributing dividends to members. The application process involves filing Form INC-12 along with MOA and AOA specifically drafted for the non-profit purpose, a declaration by all proposed directors, and a statement of the sources of income and intended objects.

Taxvio assists NGOs, foundations, and social enterprises in ${cityName} with the complete Section 8 Company registration — from drafting MOA and AOA aligned with the specific charitable or social objectives of the organisation (education, healthcare, environment, rural development, women empowerment, etc.), to preparing the Form INC-12 application, liaising with the RoC Kanpur or Regional Director's office, obtaining the Section 8 licence, and completing the Certificate of Incorporation. Post-registration, we coordinate the essential tax exemption registrations — 12AB (income tax exemption for trust income) and 80G (donor deduction eligibility) — and provide guidance on FCRA registration for ${cityName} organisations that receive or plan to receive foreign contributions.`,
    },

    /* ── 5. Annual ROC Compliance ── */
    {
      slug: "annual-roc-compliance",
      title: `Annual ROC Compliance in ${cityName}`,
      price: "₹3,999/year",
      timeline: "Before Statutory Deadlines",
      icon: "📅",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "AOC-4 — financial statements within 30 days of AGM",
        "MGT-7 / MGT-7A — annual return within 60 days of AGM",
        "AGM minutes, Board meeting minutes & secretarial documents",
        "LLP Form 11 (annual return) by May 30",
        "LLP Form 8 (statement of accounts) by October 30",
        "DIN KYC (DIR-3 KYC) annually for all directors",
      ],
      seoContent: `Annual ROC compliance is a mandatory and recurring obligation for every Private Limited Company, OPC, and LLP registered in ${cityName}, ${district} — and non-compliance carries escalating additional fees and the risk of company ACTIVE status becoming INACTIVE and director disqualification. Under the Companies Act 2013, every company must hold its Annual General Meeting (AGM) within 6 months of the financial year end (i.e., by September 30 for April–March year companies), file AOC-4 (financial statements including Balance Sheet, P&L, Cash Flow Statement, and Notes) within 30 days of AGM, and file MGT-7 or MGT-7A (annual return) within 60 days of AGM — meaning the typical compliance window is September to November for most companies.

The consequences of missing ROC annual filing deadlines for ${cityName} companies are severe and cumulative: additional fees start at ₹100 per day per form (with no cap for AOC-4), meaning a company that misses both AOC-4 and MGT-7 by 6 months can accumulate ₹36,000+ in additional fees before a single rupee of the actual filing fee. Beyond fees, directors of companies that fail to file annual returns for 3 consecutive years are disqualified under Section 164(2) — barring them from being appointed as director in any company for 5 years and rendering their existing DINs inactive. Companies with consistently non-filed returns are liable to be struck off as "defunct companies" under Section 248.

Taxvio's annual ROC compliance service for ${cityName} companies includes a complete compliance calendar with advance deadline alerts, collection of audited financial statements from your statutory auditor, preparation of all board resolutions and AGM minutes, calculation of director and shareholder details for MGT-7, DSC-based filing of both AOC-4 and MGT-7 before deadlines, and DIN KYC (DIR-3 KYC) filing for all directors before September 30. For LLPs registered in ${cityName}, our compliance package covers Form 11 (annual return by May 30) and Form 8 (statement of accounts and solvency by October 30) — keeping your LLP compliant and its designated partners' DPINs active.`,
    },

    /* ── 6. Director Appointment / Resignation ── */
    {
      slug: "director-appointment-resignation",
      title: `Director Appointment & Resignation in ${cityName}`,
      price: "₹1,999",
      timeline: "2–5 Working Days",
      icon: "🔄",
      gradient: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "DIR-12 filing with RoC Kanpur within 30 days",
        "Board resolution for appointment / acceptance of resignation",
        "DIR-2 consent letter from incoming director",
        "DIN application (Form DIR-3) for new directors without DIN",
        "DSC procurement for new directors if required",
        "Update in company's statutory register of directors",
      ],
      seoContent: `Every change in the board of directors of a company registered in ${cityName}, ${district} — whether appointment of a new director, resignation of an existing director, removal of a director, or change in director designation — must be intimated to the Registrar of Companies, Kanpur within 30 days by filing Form DIR-12. Failure to file DIR-12 within the prescribed time attracts late filing fees (₹100 per day) and can create discrepancies in the MCA company master data, causing complications in banking, signatory authority, loan agreements, and GST/income tax registrations where director details must match MCA records.

Appointing a new director in a ${cityName} company requires: a Board Resolution passed in a duly convened board meeting (or through circular resolution if permitted by AOA), the incoming director's consent to act as director in Form DIR-2, verification that the incoming director is not disqualified under Section 164, and DIN (Director Identification Number) — if the incoming director does not already have a DIN, a DIR-3 application must be filed before the appointment. For companies in ${cityName} with at least one existing director, the new director's DIN can also be applied as part of a SPICe+ filing for ongoing registrations. The incoming director must also sign the company's books within 30 days of appointment.

Director resignation in a ${cityName} company requires the resigning director to submit their resignation in writing to the company, the company to accept it via board resolution, and DIR-12 to be filed with RoC Kanpur within 30 days. A common compliance issue arises when the resigning director's resignation is not filed with the ROC — the director's name continues to appear in MCA records, creating potential liability for subsequent company actions. Taxvio handles the complete director change process for ${cityName} companies: board resolution drafting, DIR-2 consent preparation, DIN/DSC coordination for new directors, DIR-12 filing with RoC Kanpur, and updating the company's statutory Register of Directors — ensuring clean and compliant director records in your company's MCA master data.`,
    },

    /* ── 7. Company Name Change ── */
    {
      slug: "company-name-change",
      title: `Company Name Change in ${cityName}`,
      price: "₹3,999",
      timeline: "15–25 Working Days",
      icon: "✏️",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "RUN (Reserve Unique Name) availability check — new name",
        "EGM special resolution under Section 13 — MGT-14 filing",
        "Central Government approval (via ROC for companies below threshold)",
        "Alteration of MOA and AOA — INC-24 application",
        "Fresh Certificate of Incorporation with new name",
        "Update in GST, PAN, TAN, bank accounts, contracts",
      ],
      seoContent: `Company name change in ${cityName}, ${district} is a formal legal process governed by Sections 13 and 16 of the Companies Act 2013 — requiring shareholder approval, government sanction, and amendment of the company's foundational constitutional documents. Businesses in ${cityName} may need to change their company name for various strategic reasons: rebranding after business pivot, merger or acquisition integration, resolving trademark conflicts, complying with trademark registration requirements, or aligning the company name with a new product or service offering.

The company name change process begins with a name availability check on the MCA RUN portal — verifying that the proposed new name is not identical or deceptively similar to an existing company or trademark, does not contain prohibited words requiring special central government approval, and complies with the Companies (Incorporation) Rules 2014. Once name availability is confirmed, an Extraordinary General Meeting (EGM) must be convened with proper notice, and a Special Resolution must be passed by shareholders approving the name change and the consequent alteration of the Memorandum of Association (MOA) — specifically Clause I (name clause).

After the EGM, the company files MGT-14 (filing of resolutions) with RoC Kanpur within 30 days and the INC-24 application for the name change — which requires ROC approval under Section 16. If the ROC is satisfied that the new name complies with all requirements, a fresh Certificate of Incorporation reflecting the new name is issued. This Certificate of Incorporation is the legal proof of the name change and must be updated in all contracts, bank accounts, GST registration (amendment in Form REG-14), income tax records, trademark registrations, and company stationery. Taxvio manages the complete ${cityName} company name change process — from RUN filing and EGM documentation to INC-24 and post-approval update coordination.`,
    },

    /* ── 8. Increase Authorised Capital ── */
    {
      slug: "authorized-capital-increase",
      title: `Increase in Authorised Share Capital in ${cityName}`,
      price: "₹2,999",
      timeline: "5–10 Working Days",
      icon: "📈",
      gradient: "from-indigo-500 to-violet-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "SH-7 filing with RoC Kanpur within 30 days of resolution",
        "Ordinary resolution in EGM or Board Meeting (per AOA)",
        "MOA alteration — Capital Clause (Clause V)",
        "UP stamp duty on SH-7 — computed on increased capital",
        "MGT-14 for filing of ordinary resolution (if required)",
        "Updated share capital structure in company master data",
      ],
      seoContent: `Increasing the authorised share capital of a company registered in ${cityName}, ${district} is a necessary step whenever the company wants to issue new shares — for raising funds from investors, converting loans to equity, ESOPs (Employee Stock Option Plans), or bringing in new shareholders. The authorised share capital (also called registered capital) is the maximum capital limit defined in the company's Memorandum of Association (MOA), Clause V — the company cannot issue shares beyond this ceiling without first increasing it through the formal ROC process.

The process to increase authorised share capital in ${cityName} involves: convening a Board Meeting to recommend the increase and call an EGM (or pass the resolution by board itself if the Articles permit), passing an Ordinary Resolution at the EGM or Board Meeting as per the company's AOA, filing the resolution in MGT-14 with RoC Kanpur if it is an EGM resolution (within 30 days), filing Form SH-7 with RoC Kanpur within 30 days of passing the resolution, and paying the additional ROC stamp duty on the incremental authorised capital. UP has its own stamp duty rates on SH-7 — which must be correctly calculated based on the increased amount and paid through the correct state challan before ROC filing.

After the SH-7 is processed by RoC Kanpur and approved, the company's authorised share capital in the MCA master data is updated, and the company receives a service request completion confirmation. The MOA Capital Clause (Clause V) is considered amended upon the resolution — but the company must maintain updated copies of the amended MOA with the ROC filing acknowledgement. Taxvio handles the complete authorised capital increase process for ${cityName} companies — from board and EGM meeting scheduling and resolution drafting, to UP stamp duty calculation and payment, MGT-14 and SH-7 filing with RoC Kanpur, and update confirmation — enabling your company to proceed with new share allotments without delay.`,
    },

    /* ── 9. Company Closure / Strike Off ── */
    {
      slug: "company-closure",
      title: `Company Closure & Strike Off in ${cityName}`,
      price: "₹4,999",
      timeline: "3–6 Months",
      icon: "🔒",
      gradient: "from-gray-500 to-slate-600",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "STK-2 (Fast Track Exit / FTE scheme) application",
        "Statement of accounts showing NIL assets & liabilities",
        "Indemnity bond by all directors (notarised)",
        "Affidavit confirming company is inoperative",
        "No pending litigation or statutory dues check",
        "MCA strike-off notice period & final closure certificate",
      ],
      seoContent: `Company closure and strike off in ${cityName}, ${district} is the formal legal process of dissolving an inactive company and removing it from the Registrar of Companies register — relieving directors from the annual compliance burden of a company that is no longer operational. An inactive or dormant company with no pending liabilities, no pending litigation, no pending statutory dues, and no outstanding returns can apply for voluntary strike off under Section 248(2) of the Companies Act 2013, using the Fast Track Exit (FTE) scheme through Form STK-2.

To be eligible for voluntary strike off under Section 248 in ${cityName}, a company must satisfy specific conditions: the company must not have commenced business within 1 year of incorporation OR must not have carried on any business for at least 2 immediately preceding financial years and must not have any other pending legal proceedings. Critically, before filing STK-2, the company must file all pending annual returns (MGT-7) and financial statements (AOC-4) — even if the company was dormant with nil operations. Many ${cityName} company owners overlook this and find their STK-2 rejected by RoC Kanpur due to pending annual filings.

The STK-2 application for ${cityName} companies requires: a Statement of Accounts prepared by a CA showing NIL or near-NIL assets and liabilities (not older than 30 days from application date), an Indemnity Bond executed on non-judicial stamp paper by all directors confirming no pending liabilities or litigation, an Affidavit by all directors confirming the company's inoperative status, consent of all shareholders (through board resolution or EGM), and filing of any outstanding annual returns. After STK-2 is filed, RoC Kanpur publishes a public notice in the Official Gazette and its website inviting objections — and if no objections are received, the company name is struck off and the Certificate of Dissolution is issued. Taxvio manages the complete company closure process for ${cityName} — from compliance audit and pending filing clearance, to STK-2 preparation and RoC Kanpur follow-up.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function UPROCCityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const cityData  = getCityData(city);
  const cityName  = cityData?.name     ?? formatCityDisplay(city);
  const district  = cityData?.district ?? cityName;
  const region    = cityData?.region   ?? "Uttar Pradesh";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need ROC / company registration services in ${cityName}, ${district}, UP.`)}`;

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
    description: `Taxvio provides Private Limited, LLP, OPC, Section 8 company formation; annual ROC compliance; director changes; name change; capital increase; and company closure in ${cityName}, ${district}, Uttar Pradesh.`,
    areaServed: [{ "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: "Uttar Pradesh" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2400" },
    priceRange: "₹1,999 - ₹9,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",       item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "ROC UP",     item: "https://www.taxvio.in/state/uttar-pradesh/roc-services" },
      { "@type": "ListItem", position: 3, name: district,     item: `https://www.taxvio.in/state/uttar-pradesh/roc-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${cityName} ROC`, item: `https://www.taxvio.in/state/uttar-pradesh/roc-services/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `ROC & Company Registration Services in ${cityName}, UP`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/uttar-pradesh/roc-services/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does company registration take in ${cityName}?`,
        acceptedAnswer: { "@type": "Answer", text: `Private Limited Company and OPC registration in ${cityName} typically takes 7–10 working days from the date of complete document submission. LLP registration takes 7–12 working days. Section 8 company takes 20–30 working days due to the Central Government licence requirement. The RoC jurisdiction for all UP companies is the Registrar of Companies, Kanpur.` },
      },
      {
        "@type": "Question",
        name: `What is the minimum capital required to register a company in ${cityName}?`,
        acceptedAnswer: { "@type": "Answer", text: `There is no minimum paid-up capital requirement for Private Limited Company, OPC, or LLP registration in ${cityName} since the Companies Amendment Act 2015 removed the ₹1 lakh minimum. You can incorporate with as little as ₹1 authorised and paid-up capital. For LLPs, there is similarly no minimum capital requirement under the LLP Act 2008.` },
      },
      {
        "@type": "Question",
        name: `What annual compliance is required for a company in ${cityName}?`,
        acceptedAnswer: { "@type": "Answer", text: `Every Private Limited Company in ${cityName} must file AOC-4 (financial statements) within 30 days of AGM and MGT-7 (annual return) within 60 days of AGM — both typically due by October/November. AGM must be held by September 30. Directors must also complete DIN KYC (DIR-3 KYC) by September 30 annually. LLPs must file Form 11 by May 30 and Form 8 by October 30. Non-compliance attracts ₹100/day additional fees per form.` },
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
                  { href: "/state/uttar-pradesh/roc-services", label: "ROC — UP" },
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
                  <MapPin size={12} className="text-sky-400 shrink-0" />
                  {cityName}, {district} · Uttar Pradesh · ROC / MCA
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Company Registration &amp; ROC
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Services in {cityName}, UP
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">Private Limited, LLP &amp; OPC formation</strong>,
                  annual ROC compliance (AOC-4, MGT-7), director changes, company name change,
                  authorised capital increase &amp; company strike-off in{" "}
                  <strong className="text-white">{cityName}, {district}, Uttar Pradesh</strong> —
                  100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹2,999</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "MCA-Registered CAs" },
                    { icon: Shield,     text: "RoC Kanpur Experts" },
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
                    <p className="font-bold text-white text-sm">ROC Services — {cityName}</p>
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
                            .replace(` in ${cityName}`, "")
                            .replace(` & ROC Compliance in ${cityName}`, "")
                            .replace(` Registration in ${cityName}`, "")
                            .replace(` (OPC) Registration in ${cityName}`, " (OPC)")
                            .replace(` Company Registration in ${cityName}`, " Company")
                            .replace(` & Strike Off in ${cityName}`, " / Strike Off")
                            .replace(` in Authorised Share Capital in ${cityName}`, "")
                            .replace(` Appointment & Resignation in ${cityName}`, "")}
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
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹2,999</p>
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
                { icon: BadgeCheck, label: "MCA-Registered CAs" },
                { icon: TrendingUp, label: "2,400+ Companies Formed" },
                { icon: Users,      label: "4,800+ UP Businesses" },
                { icon: IndianRupee,label: "RoC Kanpur Jurisdiction" },
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
              { val: "7–10", label: "Days to Incorporate", icon: Zap },
              { val: "4.9★", label: "Average Rating",       icon: Star },
              { val: "₹2,999", label: "Starting Price",     icon: IndianRupee },
              { val: "9",    label: "ROC Services",          icon: ClipboardList },
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

        {/* ════════ SERVICE CARDS ════════ */}
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

                    {/* SEO content */}
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
                Why {cityName} Businesses Choose Taxvio for ROC Compliance
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users,       title: "MCA-Registered CA Team",         desc: `Every company registration and ROC filing for ${cityName} businesses is handled by practising CAs registered with MCA — with deep familiarity of RoC Kanpur's processing timelines and requirements.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap,         title: "100% Online — No Office Visit",   desc: `Send your PAN, Aadhaar, address proof, and business details on WhatsApp from ${cityName}. We handle all portal submissions, DSC procurement, and MCA filings without requiring an office visit.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Landmark,    title: "RoC Kanpur Jurisdiction Experts", desc: `All UP companies fall under RoC Kanpur's jurisdiction. Taxvio's team understands Kanpur RoC's name approval patterns, common objection reasons, and standard processing timelines — avoiding delays.`, color: "bg-violet-100 text-violet-700" },
                { icon: AlertCircle, title: "Proactive Compliance Reminders",  desc: `We maintain a compliance calendar for every ${cityName} company client — sending advance reminders for AGM dates, AOC-4, MGT-7, DIR-3 KYC, and LLP Form 11/8 deadlines to prevent non-compliance.`, color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹2,999", desc: `No hidden RoC filing fee surprises. Clear, upfront pricing for every ROC service. ${cityName} business owners know exactly what they pay — government fees, stamp duty, and our professional fee — before we start.`, color: "bg-teal-100 text-teal-700" },
                { icon: RefreshCw,   title: "End-to-End Post-Incorporation",   desc: `Company formation is just step one. We simultaneously handle GST registration, PAN/TAN, MSME Udyam, and professional tax for new ${cityName} companies — getting you fully operational in one engagement.`, color: "bg-sky-100 text-sky-700" },
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
                How to Register a Company in {cityName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Share Documents",       desc: "Send PAN, Aadhaar, address proof & business details of all directors on WhatsApp" },
                { step: "02", title: "DSC & Name Approval",   desc: "Our CA team procures DSCs, applies for DIN, and reserves company name via RUN/SPICe+" },
                { step: "03", title: "MOA, AOA & SPICe+",     desc: "We draft MOA & AOA, file SPICe+ with RoC Kanpur, and pay government fees" },
                { step: "04", title: "Certificate & Beyond",  desc: "Certificate of Incorporation received. We complete PAN, TAN, GST & compliance setup" },
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
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">Company Registration FAQs — {cityName}</h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `How long does company registration take in ${cityName}?`,
                  a: `Private Limited Company and OPC registration in ${cityName} typically takes 7–10 working days from complete document submission. LLP takes 7–12 working days. Section 8 company requires 20–30 working days due to the Central Government licence process. All UP companies are registered under RoC Kanpur.`,
                },
                {
                  q: `What is the minimum capital for company registration in ${cityName}?`,
                  a: `There is no minimum paid-up capital requirement for Private Limited Company, OPC, or LLP registration in ${cityName} since the Companies Amendment Act 2015 abolished the ₹1 lakh minimum. You can incorporate with just ₹1 authorised capital. LLPs also have no minimum capital requirement under the LLP Act 2008.`,
                },
                {
                  q: `What is the annual compliance cost for a company in ${cityName}?`,
                  a: `Taxvio's annual ROC compliance package for ${cityName} companies starts at ₹3,999/year — covering AOC-4, MGT-7, AGM minutes, board meeting minutes, and secretarial documentation. DIN KYC (DIR-3 KYC) is included. Statutory audit fees are separate and depend on turnover. LLP annual compliance (Form 11 + Form 8) starts at ₹2,999/year.`,
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
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">{district} District &amp; {region}</p>
                  <h2 className="text-lg font-extrabold text-gray-800">ROC Services in Nearby Cities</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link key={c.name}
                    href={`/state/uttar-pradesh/roc-services/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    ROC in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/uttar-pradesh/roc-services"
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
                  Serving company registration clients in {cityName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Register Your Company in {cityName} — Fast &amp; Compliant
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  Private Limited, LLP, OPC, Section 8 formation; annual ROC compliance; director changes;
                  company closure — all delivered online for businesses in {cityName}, {district}.
                  Starting ₹2,999. CA-assisted, same-day WhatsApp response.
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