// app/state/madhya-pradesh/roc/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, Building2, BookOpen, ClipboardList,
  Briefcase, AlertCircle, Calculator,
} from "lucide-react";
import {
  MP_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay,
} from "@/data/mp-cities";

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
    title: `Company Registration & ROC Services in ${cityName}, ${district}, MP | Taxvio`,
    description: `Expert Private Limited company formation, LLP & OPC registration, Section 8, annual ROC compliance, director changes, company name change, authorised capital increase, and company closure in ${cityName}, ${district}, Madhya Pradesh. CA & CS assisted, 100% online, starting ₹1,999.`,
    keywords: [
      `company registration ${cityName}`,
      `private limited company ${cityName} MP`,
      `LLP registration ${cityName}`,
      `OPC registration ${cityName}`,
      `ROC compliance ${cityName}`,
      `MCA filing ${cityName}`,
      `director appointment ${cityName}`,
      `annual return filing ${cityName}`,
      `company closure ${cityName}`,
      `CA ${district} company registration`,
    ],
    alternates: {
      canonical: `https://www.taxvio.in/state/madhya-pradesh/roc/${city}`,
    },
    openGraph: {
      title: `ROC & Company Registration in ${cityName}, MP | Taxvio`,
      description: `Company formation, LLP, OPC, ROC compliance in ${cityName}, ${district}, MP — CA & CS assisted, from ₹1,999.`,
      url: `https://www.taxvio.in/state/madhya-pradesh/roc/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `ROC Services in ${cityName}, MP | Taxvio`,
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
      slug: "private-limited-formation",
      title: `Private Limited Company Registration in ${cityName}`,
      price: "₹4,999",
      timeline: "7–10 Working Days",
      icon: "🏢",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "Name approval via SPICe+ Part A (RUN)",
        "SPICe+ Part B — INC-32 incorporation form",
        "MOA (Memorandum of Association) drafting",
        "AOA (Articles of Association) drafting",
        "Certificate of Incorporation from MCA",
        "PAN & TAN application included",
      ],
      seoContent: `A Private Limited Company is the most preferred business structure for startups, funded businesses, and professional service firms in ${cityName}, ${district} — because it offers limited liability protection for shareholders, a separate legal identity distinct from its owners, unrestricted ability to raise equity investment, and a well-defined governance framework under the Companies Act 2013. Unlike a proprietorship or partnership, a Private Limited company in ${cityName} can issue shares to investors, hold property and contracts in the company's name, and perpetually exist regardless of changes in ownership.

The incorporation process for a Private Limited company in ${cityName} involves several sequential steps on the Ministry of Corporate Affairs (MCA) portal. First, Directors must obtain Director Identification Number (DIN) and a Class-2 Digital Signature Certificate (DSC). The company name is then reserved through the SPICe+ Part A form (formerly RUN — Reserve Unique Name), which checks the proposed name for similarity with existing registered companies, trademarks, and prohibited words under the Companies Act. Once the name is approved, Taxvio drafts the Memorandum of Association (MOA — defining the company's objects, powers, and liability) and Articles of Association (AOA — governing internal management, meetings, and share transfer rules) specific to your business in ${cityName}.

The complete incorporation application is filed through SPICe+ Part B, which simultaneously handles the INC-32 incorporation form, AGILE-PRO-S form for GST registration, EPFO/ESIC registration, and professional tax registration in MP (where applicable) — making SPICe+ a truly integrated window for new business registration in ${cityName}. Within 7–10 working days of filing, the Registrar of Companies (RoC), Gwalior issues the Certificate of Incorporation with the Company Identification Number (CIN). Taxvio manages the entire process — from name approval to CIN allotment — without any physical visits required from ${cityName} business owners.`,
    },

    /* ── 2. LLP Registration ── */
    {
      slug: "llp-formation",
      title: `LLP Registration in ${cityName}`,
      price: "₹3,999",
      timeline: "7–10 Working Days",
      icon: "🏛️",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "LLP name reservation via LLP-RUN",
        "FiLLiP — integrated LLP incorporation form",
        "LLP Agreement drafting (customised)",
        "DPIN (Designated Partner Identification Number)",
        "Digital Signature Certificate (DSC) for partners",
        "Incorporation Certificate with LLPIN",
      ],
      seoContent: `A Limited Liability Partnership (LLP) is the preferred corporate structure for professional service firms, small businesses, and partnerships in ${cityName}, ${district} that want limited liability protection without the regulatory burden of a Private Limited company. LLPs under the Limited Liability Partnership Act 2008 are taxed at 30% on their total income (like partnership firms) but provide each partner's personal assets protection from business liabilities — unlike a traditional partnership where partners have unlimited personal liability. For ${cityName} professional firms (CA firms, law firms, consulting firms, architecture practices) or trading partnerships converting to a formal entity, LLP offers the ideal combination of operational flexibility and legal protection.

LLP registration in ${cityName} begins with name reservation through the LLP-RUN portal (similar to RUN for companies), where the proposed LLP name is checked for availability and compliance with naming guidelines. Taxvio then files the FiLLiP (Form for Incorporation of LLP) — an integrated form on the MCA portal that handles DPIN allotment for designated partners who don't already have DIN, DSC issuance, and the main incorporation application. Unlike company incorporation, LLP does not require MOA/AOA — instead, the LLP Agreement (equivalent to a partnership deed) defines the profit-sharing ratio, partner rights and obligations, contribution of each partner, meeting procedures, and dispute resolution mechanisms.

A critical compliance point that many ${cityName} LLP promoters miss is that the LLP Agreement must be filed with the MCA within 30 days of incorporation (through Form 3) — failure to do so attracts a penalty of ₹100 per day. Taxvio drafts the LLP Agreement comprehensively, covering business objects, capital contributions, profit sharing, partner remuneration (if any), admission and exit of partners, meeting quorum, and winding-up procedures — and files Form 3 immediately after incorporation. Post-formation, LLPs in ${cityName} must file Form 11 (Annual Return, due May 30) and Form 8 (Statement of Accounts & Solvency, due October 30) each year, plus ITR-5 by the income tax due date — our team handles the complete post-registration compliance calendar.`,
    },

    /* ── 3. OPC Registration ── */
    {
      slug: "opc-formation",
      title: `One Person Company (OPC) Registration in ${cityName}`,
      price: "₹2,999",
      timeline: "7–10 Working Days",
      icon: "👤",
      gradient: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "Sole director & sole member structure",
        "Nominee director appointment (mandatory)",
        "SPICe+ incorporation filing",
        "MOA & AOA drafted for OPC",
        "Certificate of Incorporation with CIN",
        "PAN & TAN included",
      ],
      seoContent: `A One Person Company (OPC) under Section 2(62) of the Companies Act 2013 is specifically designed for solo entrepreneurs in ${cityName}, ${district} who want the benefits of a Private Limited company structure — separate legal identity, limited liability, and a professional corporate profile — without requiring a second shareholder or director. Prior to OPC introduction, solo business owners in ${cityName} had to either operate as proprietors (with unlimited personal liability) or bring in a nominal second partner. OPC eliminates this compulsion, making it the ideal first corporate vehicle for individual entrepreneurs.

Eligibility for OPC in ${cityName}: Only a natural person who is a resident Indian (physically present in India for 182 days or more in the preceding financial year) can form an OPC. The sole member cannot be a minor, cannot simultaneously be a member of more than one OPC, and cannot be a nominee in another OPC. Crucially, every OPC must appoint a Nominee — a person who will become the sole member of the OPC in the event of the original member's death or incapacity — with the nominee's written consent filed in Form INC-3 at the time of incorporation.

A significant 2021 amendment to the Companies Act removed the OPC conversion threshold — previously, an OPC was compulsorily required to convert to a Private Limited company once its turnover exceeded ₹2 crore or paid-up capital exceeded ₹50 lakh. This restriction has been removed, making OPC a permanent option regardless of growth in ${cityName}. The annual compliance requirements for OPCs are also lighter than Private Limited companies — OPCs with turnover below ₹2 crore are exempt from holding Annual General Meetings, and the Board of Directors can pass resolutions by circular rather than formal meetings. Taxvio handles the complete OPC formation process for ${cityName} entrepreneurs — from DIN/DSC to Certificate of Incorporation.`,
    },

    /* ── 4. Section 8 Company ── */
    {
      slug: "section-8-company",
      title: `Section 8 Company Registration in ${cityName}`,
      price: "₹5,999",
      timeline: "15–30 Working Days",
      icon: "🤝",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "Section 8 licence application (INC-12)",
        "Drafting of MOA with charitable objects",
        "AOA aligned with Section 8 restrictions",
        "Certificate of Incorporation with Section 8 status",
        "Guidance on 12A & 80G registration post-formation",
        "FCRA and CSR funding eligibility advisory",
      ],
      seoContent: `A Section 8 Company under Section 8 of the Companies Act 2013 is the corporate equivalent of a non-profit organisation — it is a company formed for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, or any other charitable object, with the intention to apply all profits toward those objects and not distribute dividends to members. For NGOs, charitable institutions, educational foundations, and welfare organisations in ${cityName}, ${district}, a Section 8 Company is often preferred over a trust or society because it provides higher credibility (being regulated by MCA), better access to CSR funds from corporates (as a registered company), and a more defined governance framework.

The Section 8 company registration process in ${cityName} involves an additional step compared to regular company formation — obtaining a special licence from the Central Government (through the RoC, Gwalior) before incorporation. This licence is applied through Form INC-12 along with the draft MOA and AOA, a declaration by professionals, estimated income/expenditure for next 3 years, and details of the proposed charitable objectives. The MOA of a Section 8 company must clearly define the charitable objects under one or more of the specified categories, and the AOA must include a restriction on profit distribution and a dissolution clause (assets to be transferred to another Section 8 company or government on winding up).

Once the Section 8 licence is granted (INC-16 letter), the company is incorporated through the standard SPICe+ process. Post-formation, ${cityName} Section 8 companies must additionally apply for 12AB registration (income tax exemption under Sections 11 and 12) and 80G registration (enabling donors to claim deduction) from the income tax department — both of which Taxvio assists with as part of our comprehensive non-profit formation package. Section 8 companies must also comply with standard annual ROC filings (AOC-4 and MGT-7), but are exempt from certain provisions applicable to normal companies, such as minimum paid-up capital requirements.`,
    },

    /* ── 5. Annual ROC Compliance ── */
    {
      slug: "annual-roc-compliance",
      title: `Annual ROC Compliance Filing in ${cityName}`,
      price: "₹2,999/year",
      timeline: "Before MCA Due Dates",
      icon: "📋",
      gradient: "from-teal-500 to-cyan-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "AOC-4 — financial statements filing (60 days from AGM)",
        "MGT-7 / MGT-7A — annual return (60 days from AGM)",
        "LLP Form 11 (Annual Return — due May 30)",
        "LLP Form 8 (Accounts — due October 30)",
        "Directors' Report drafting",
        "Additional fee avoidance — filed before due date",
      ],
      seoContent: `Annual ROC compliance is a non-negotiable legal obligation for every Private Limited company, OPC, and LLP registered in ${cityName}, ${district} — and consistent non-filing can result in the company being struck off the register, directors being disqualified, and significant financial penalties. Under the Companies Act 2013, every company must hold its Annual General Meeting (AGM) within 6 months of the close of the financial year (i.e., by September 30 for companies following the April–March year). The AGM must adopt the financial statements (audited balance sheet, P&L, and Directors' Report) — and once adopted, Form AOC-4 (financial statements) must be filed with the RoC within 60 days of the AGM (by November 29 in the standard case), and Form MGT-7 (Annual Return) must be filed within 60 days of the AGM.

For OPCs and small companies (turnover below ₹2 crore, paid-up capital below ₹2 crore), MGT-7A (a simplified form) replaces the full MGT-7. Directors' DIN-linked DSCs are required for signing and filing both forms. Late filing of AOC-4 and MGT-7 attracts an additional fee of ₹100 per day per form — for a company that misses the November 29 deadline and files on December 29, this means ₹3,000 in penalties per form (₹6,000 total), with no cap on accumulation. Taxvio's annual compliance service for ${cityName} companies includes a proactive reminder system that tracks your AGM date, coordinates with your statutory auditor for financial statement sign-off, prepares the Directors' Report (including business review, related party transaction disclosure, and corporate governance statements), and files both AOC-4 and MGT-7 well before the due date.

For LLPs in ${cityName}, the compliance calendar differs: Form 11 (Annual Return disclosing partners, DPIN, capital contribution, and turnover) is due by May 30 each year, and Form 8 (Statement of Account & Solvency — which is essentially the financial statements filing for LLPs and does not require statutory audit below ₹40 lakh turnover) is due by October 30. Unlike companies, LLPs do not hold AGMs, making Form 11 and Form 8 the primary annual compliance milestones. Taxvio handles both forms for ${cityName} LLPs — coordinating with designated partners for DSC signing, preparing the complete financial statements if required, and ensuring timely MCA portal submission.`,
    },

    /* ── 6. Director Appointment / Resignation ── */
    {
      slug: "director-appointment-resignation",
      title: `Director Appointment & Resignation ROC Filing in ${cityName}`,
      price: "₹1,999",
      timeline: "3–5 Working Days",
      icon: "👔",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "DIR-12 filing for appointment and cessation",
        "DIR-2 (consent to act as director) preparation",
        "Board resolution drafting for appointment/resignation",
        "DIN application if new director lacks one",
        "DSC assistance for incoming director",
        "MCA portal approval tracking",
      ],
      seoContent: `Changes in the board of directors of a company registered in ${cityName}, ${district} — whether appointment of a new director, resignation of an existing director, or removal under Section 169 — require mandatory ROC filing through Form DIR-12 within 30 days of the change. Non-filing of DIR-12 within the prescribed period attracts late additional fees of ₹100 per day, and continued non-filing can lead to director-level DIN deactivation. For companies in ${cityName} onboarding investor-nominated directors, adding professional directors for bank loan purposes, or processing the exit of a founding director, timely DIR-12 filing is critical to maintaining accurate MCA records.

The DIR-12 filing process involves several preparatory steps. An incoming director who does not already have a DIN must first apply for one through Form DIR-3 (now integrated within SPICe+ for new incorporations or separately for post-incorporation appointments). The new director must also hold a Class-2 DSC in their name for MCA portal filing. A written consent to act as director (DIR-2) must be obtained from the incoming director before their appointment is processed. The board of directors must pass a formal resolution (in a Board Meeting or by circular resolution if permitted under the AOA) approving the appointment or noting the resignation — and the resolution text must be attached to the DIR-12 filing.

For resignation of a director in ${cityName}, both the company (DIR-12) and the resigning director themselves (DIR-11) must file with the MCA — DIR-11 is filed by the resigning director directly to protect their personal records from showing continued directorship in a company they have exited. Taxvio assists both the company and the resigning director with coordinated filing to ensure MCA records are updated simultaneously. For cases where a director has been disqualified under Section 164(2) (for continuous default in annual filing), we also provide DIN reactivation assistance and CFSS (Companies Fresh Start Scheme) guidance where available.`,
    },

    /* ── 7. Company Name Change ── */
    {
      slug: "company-name-change",
      title: `Company Name Change ROC Filing in ${cityName}`,
      price: "₹2,999",
      timeline: "15–20 Working Days",
      icon: "✏️",
      gradient: "from-indigo-500 to-blue-600",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-100",
      accentText: "text-indigo-700",
      features: [
        "Name availability check on MCA portal",
        "RUN form filing for name reservation",
        "Special Resolution (SR) and EGM notice drafting",
        "INC-24 application to RoC for name change",
        "Altered MOA with new name clause",
        "Fresh Certificate of Incorporation (with new name)",
      ],
      seoContent: `Changing a company name registered in ${cityName}, ${district} is a multi-step statutory process under Sections 13 and 16 of the Companies Act 2013 — and unlike a proprietorship where a trade name change is informal, a company name change requires MCA approval, fresh Certificate of Incorporation, and consequential amendment of all statutory documents. Companies in ${cityName} seek name changes for various reasons: rebranding after acquisition or merger, pivot in business model, trademark conflicts with an existing brand, or upgrading from a generic name to a more marketable one.

The name change process begins with availability verification — checking whether the new proposed name is similar to any existing company or LLP name on the MCA master data, and whether it conflicts with any registered trademark under Classes relevant to the company's business. Taxvio conducts this dual check before filing the RUN (Reserve Unique Name) form — avoiding rejection and saving time. Once the name is reserved (valid for 20 days), the company must pass a Special Resolution in an Extraordinary General Meeting (EGM) approving the name change, with appropriate notice period and quorum compliance under Section 100 and applicable AOA provisions.

The Special Resolution must be filed with the RoC through Form MGT-14 within 30 days of passing. The main name change application is filed through Form INC-24 along with the Board Resolution, Special Resolution, and altered MOA (with the new name substituted in the Name Clause / Clause I). On approval, the RoC, Gwalior issues a fresh Certificate of Incorporation with the new name — and Taxvio then advises on consequential changes required: updating the company's common seal (if any), letterheads, invoices, signboards at registered office, GST registration, bank account name, PAN name update, and all other statutory registrations to reflect the new company name.`,
    },

    /* ── 8. Increase in Authorised Share Capital ── */
    {
      slug: "authorized-capital-increase",
      title: `Increase in Authorised Share Capital in ${cityName}`,
      price: "₹2,499",
      timeline: "7–10 Working Days",
      icon: "📈",
      gradient: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-100",
      accentText: "text-sky-700",
      features: [
        "Board resolution for capital increase",
        "Ordinary Resolution at General Meeting",
        "MOA alteration — Capital Clause (Clause V)",
        "SH-7 form filing with RoC",
        "Government fee payment (based on new capital)",
        "Updated capital structure certificate",
      ],
      seoContent: `A company's Authorised Share Capital is the maximum amount of share capital that the company is permitted to issue to shareholders — defined in the Capital Clause (Clause V) of the Memorandum of Association. Every Private Limited company in ${cityName}, ${district} that wishes to allot new shares (for investment, ESOP grants, bonus shares, or rights issues) beyond its existing authorised capital must first increase the authorised capital through the prescribed statutory procedure. Many growing ${cityName} startups and businesses encounter this requirement when bringing in new investors or expanding their shareholding structure.

The authorised capital increase process requires two board and shareholder actions. First, the Board of Directors passes a resolution recommending the increase to the shareholders. Second, the shareholders (in a General Meeting — either EGM or AGM) pass an Ordinary Resolution (simple majority) approving the increase and consequential alteration to the MOA Capital Clause. The authorised capital can be increased to any amount — subject to payment of the additional MCA government fee (which is a slab-based fee on the incremental authorised capital). Taxvio prepares the board resolution, EGM notice, explanatory statement, Ordinary Resolution text, and the altered MOA Capital Clause for ${cityName} companies.

Form SH-7 must be filed with the RoC within 30 days of passing the Ordinary Resolution, along with the altered MOA and certified copy of the resolution. MCA government fees for authorised capital increase follow a slab structure — ₹5,000 for increase up to ₹1 lakh, ₹3,000 for the next ₹4 lakh, ₹2,000 per lakh from ₹5 lakh to ₹100 lakh, and ₹1,000 per lakh above ₹100 lakh. Importantly, the increase in authorised capital does not automatically mean new shares are issued — it merely creates headroom for future allotment. After the SH-7 is approved, the company can then proceed with the actual share allotment (Form PAS-3) to investors or employees, which Taxvio also assists with as part of comprehensive capital structuring services for ${cityName} businesses.`,
    },

    /* ── 9. Company Closure / Strike Off ── */
    {
      slug: "company-closure",
      title: `Company Closure & Strike Off in ${cityName}`,
      price: "₹3,999",
      timeline: "3–6 Months",
      icon: "🔒",
      gradient: "from-gray-500 to-slate-600",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "STK-2 fast-track strike-off application",
        "Indemnity bond and affidavit preparation",
        "Statement of accounts (NIL assets/liabilities)",
        "Special Resolution and Board Resolution drafting",
        "Physical newspaper advertisement (if required)",
        "RoC closure order tracking",
      ],
      seoContent: `When a Private Limited company, OPC, or Section 8 company incorporated in ${cityName}, ${district} ceases business operations or was registered but never commenced business, the legal obligation to file annual ROC returns continues indefinitely — attracting penalties year after year until the company is formally dissolved. The fastest and most cost-effective method of closing an inactive company is the Fast Track Exit (FTE) route — now called Strike Off under Section 248 of the Companies Act 2013, applied through Form STK-2. This voluntary strike-off option is available for companies that have not commenced business within one year of incorporation, or have not been carrying on business for the preceding two financial years and have not applied for dormant company status.

The STK-2 application for ${cityName} companies requires specific pre-conditions: all bank accounts of the company must be closed (with bank closure letters obtained), there must be no assets or liabilities outstanding (a NIL Statement of Accounts and Solvency prepared by the directors is filed as part of STK-2), all outstanding annual returns and financial statements must be filed (or the company must be in default, in which case a separate condonation process may apply), and all charges on the company's assets registered with the RoC must be satisfied. If the company has tax liabilities, GST registration cancellation, and income tax clearance are advisable before filing STK-2.

Taxvio guides ${cityName} business owners through the complete company closure process — preparing the Board Resolution authorising filing of STK-2, drafting the Special Resolution (passed by a majority of at least 3/4 of the members in value) approving the strike-off application, preparing the affidavit (Form STK-3) by each director confirming compliance with Section 248 conditions, preparing the indemnity bond (Form STK-4) with adequate stamp duty (required for companies with paid-up capital above ₹25 lakh), filing the complete STK-2 on the MCA portal, and tracking the RoC, Gwalior's approval — typically received in 3–6 months after satisfying any query from the RoC. Once the company name is published in the Official Gazette as struck off, the company ceases to exist as a legal entity.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function MPROCCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = getCityData(city);
  const cityName = cityData?.name ?? formatCityDisplay(city);
  const district = cityData?.district ?? cityName;
  const region = cityData?.region ?? "Madhya Pradesh";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hello Taxvio, I need ROC services in ${cityName}, ${district}, MP.`
  )}`;

  const services = getServiceContent(cityName, district, region);

  const nearbyCities = MP_CITIES.filter(
    (c) => c.district === district && slugifyCity(c.name) !== city
  ).slice(0, 5);
  const regionCities =
    nearbyCities.length < 3
      ? MP_CITIES.filter(
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
    description: `Taxvio provides company registration, LLP formation, OPC, Section 8, annual ROC compliance, director changes, and company closure services in ${cityName}, ${district}, Madhya Pradesh.`,
    areaServed: [
      {
        "@type": "City",
        name: cityName,
        containedInPlace: {
          "@type": "State",
          name: "Madhya Pradesh",
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
      reviewCount: "2400",
    },
    priceRange: "₹1999 - ₹9999",
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
        name: "ROC Services — MP",
        item: "https://www.taxvio.in/state/madhya-pradesh/roc",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: district,
        item: `https://www.taxvio.in/state/madhya-pradesh/roc#${district.toLowerCase()}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${cityName} ROC Services`,
        item: `https://www.taxvio.in/state/madhya-pradesh/roc/${city}`,
      },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `ROC Services in ${cityName}, MP`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/madhya-pradesh/roc/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does it take to register a Private Limited company in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `With all documents in order, a Private Limited company in ${cityName} can be incorporated in 7–10 working days through the SPICe+ process on the MCA portal. This includes name reservation, DIN/DSC issuance, MOA/AOA filing, and issuance of Certificate of Incorporation by the RoC, Gwalior.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the minimum capital required to register a company in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `There is no minimum paid-up capital requirement for Private Limited companies or OPCs in ${cityName} under the Companies Act 2013 — you can incorporate with as little as ₹1 as paid-up capital. However, you must pay the MCA government fee which is based on the authorised capital declared in the MOA. Most startups in ${cityName} incorporate with ₹1 lakh authorised capital, for which the government fee is ₹5,000.`,
        },
      },
      {
        "@type": "Question",
        name: `What annual compliance is required for a company in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Every Private Limited company in ${cityName} must file Form AOC-4 (financial statements) and MGT-7 / MGT-7A (annual return) with the RoC, Gwalior each year. Additionally, a statutory audit by a Chartered Accountant is mandatory regardless of turnover. Companies must also hold a Board Meeting every quarter, maintain proper board minutes, and file event-based forms (DIR-12 for director changes, SH-7 for capital increase, etc.) as applicable.`,
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
                    href: "/state/madhya-pradesh/roc",
                    label: "ROC Services — MP",
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
                  {cityName}, {district} · Madhya Pradesh · ROC Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Company Registration & ROC Services
                  <span className="block mt-2 bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
                    in {cityName}, MP
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert{" "}
                  <strong className="text-white">
                    Private Limited company formation
                  </strong>
                  ,{" "}
                  <strong className="text-white">LLP & OPC registration</strong>
                  , Section 8, annual ROC compliance, director changes, name
                  change, capital increase &amp; company closure in{" "}
                  <strong className="text-white">
                    {cityName}, {district}, Madhya Pradesh
                  </strong>{" "}
                  — 100% online by CA & CS professionals. Starting{" "}
                  <strong className="text-blue-300">₹1,999</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA & CS Assisted" },
                    { icon: Shield, text: "MCA-Compliant" },
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
                <div className="p-4 space-y-1.5">
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
                    <p className="text-blue-300 text-2xl font-extrabold leading-tight">
                      ₹1,999
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
                { icon: BadgeCheck, label: "ICAI & ICSI Certified Team" },
                { icon: TrendingUp, label: "8,000+ Companies Formed" },
                { icon: Users, label: "4,000+ MP Businesses" },
                { icon: Building2, label: "RoC Gwalior Experts" },
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
              { val: "₹1,999", label: "Starting Price", icon: IndianRupee },
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
                  title: "CA & CS Certified Team",
                  desc: `Every company formation and ROC filing for ${cityName} businesses is handled by practising Chartered Accountants and Company Secretaries — ensuring MCA-compliant documentation and zero-rejection filings.`,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Share your documents on WhatsApp from ${cityName}. We handle name search, DSC issuance, MOA/AOA drafting, and MCA filing without requiring any physical visits. Incorporation certificate delivered digitally.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Briefcase,
                  title: "RoC Gwalior Jurisdiction Expertise",
                  desc: `All MP companies are registered under the RoC, Gwalior. Our team understands the specific filing procedures, naming conventions, and AO codes applicable to ${district} district companies under Gwalior's RoC jurisdiction.`,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Compliance Reminders",
                  desc: `We track your company's annual filing deadlines — AOC-4, MGT-7, Form 11, Form 8, Board Meeting milestones — and alert you well in advance, preventing penalties and director disqualification.`,
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹1,999",
                  desc: `No hidden fees. All government fees, professional charges, and DSC costs are disclosed upfront before we begin. ${cityName} business owners know exactly what they pay for each ROC service.`,
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: MapPin,
                  title: `UP-Based, Serving ${cityName}, MP`,
                  desc: `Headquartered in Khatauli, Muzaffarnagar — we serve businesses across both UP and MP. Our team understands ${region}'s business landscape and the specific needs of ${district} district companies.`,
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
                How to Register Your Company in {cityName} with Taxvio
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Share Requirements",
                  desc: "Tell us the company type, proposed name, directors' details, and business objects on WhatsApp",
                },
                {
                  step: "02",
                  title: "CA/CS Drafting",
                  desc: "We reserve the name, obtain DIN/DSC, and draft MOA, AOA, and all MCA forms",
                },
                {
                  step: "03",
                  title: "Your Approval",
                  desc: "We share all documents for your review and e-signature before submission to MCA",
                },
                {
                  step: "04",
                  title: "CIN Issued",
                  desc: "MCA issues Certificate of Incorporation with CIN. PAN and TAN follow within 2–3 days",
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
                  q: `How long does company registration take in ${cityName}?`,
                  a: `A Private Limited company or OPC in ${cityName} is typically incorporated within 7–10 working days through the SPICe+ process, subject to name availability and timely document submission. LLP registration takes a similar timeframe. Section 8 company registration may take 15–30 working days due to the additional licence application (INC-12) required before incorporation.`,
                },
                {
                  q: `Which ROC (Registrar of Companies) has jurisdiction over ${cityName} companies?`,
                  a: `All companies registered in Madhya Pradesh — including those from ${cityName}, ${district} — fall under the jurisdiction of the Registrar of Companies (RoC), Gwalior. Annual filings (AOC-4, MGT-7), event-based filings (DIR-12, SH-7, INC-24), and any query communications are handled through the MCA portal with the RoC, Gwalior.`,
                },
                {
                  q: `Should I register a Private Limited company or LLP for my ${cityName} business?`,
                  a: `For businesses in ${cityName} planning to raise external investment, hire employees at scale, or build a formal corporate structure, a Private Limited company is preferred — it can issue shares to investors and has a well-defined governance framework. For professional services firms (CA, legal, consulting) or small trading businesses where tax efficiency (30% flat rate vs company's 22%–30%) and operational flexibility are priorities, an LLP may be more suitable. Taxvio advises on the optimal structure for your ${cityName} business after understanding your specific goals.`,
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
                    href={`/state/madhya-pradesh/roc/${slugifyCity(c.name)}`}
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
                  href="/state/madhya-pradesh/roc"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#1a3c5e]/30 bg-[#dce8f5] px-4 py-2 text-sm font-bold text-[#1a3c5e] hover:shadow-sm transition-all"
                >
                  View All MP Cities{" "}
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
                  director changes and more — all delivered online for businesses
                  in {cityName}, {district}. Starting ₹1,999. CA & CS assisted,
                  same-day WhatsApp response.
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