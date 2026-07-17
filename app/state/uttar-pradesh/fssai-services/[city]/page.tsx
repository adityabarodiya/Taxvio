// app/state/uttar-pradesh/fssai/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, Receipt, IndianRupee, AlertCircle, RefreshCw,
  ClipboardList, Package, ExternalLink, Info, Building2,
  Search,
} from "lucide-react";
import {
  UP_CITIES, ALL_CITY_SLUGS, slugifyCity,
  getCityData, formatCityDisplay, type UPCity,
} from "@/data/up-gst-cities";

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
    title: `FSSAI Registration & Food License in ${cityName}, ${district} | Taxvio`,
    description: `Apply for FSSAI Basic Registration, State License & Central License in ${cityName}, ${district}, Uttar Pradesh. Expert assistance for renewal, modification, annual return filing & notice reply. 100% online, CA-assisted, starting ₹1,499. License in 7–15 days.`,
    keywords: [
      `FSSAI registration ${cityName}`,
      `food license ${cityName}`,
      `FSSAI license ${cityName} ${district}`,
      `FSSAI state license ${cityName} UP`,
      `FSSAI renewal ${cityName}`,
      `FSSAI annual return ${cityName}`,
      `food business license ${cityName}`,
      `FSSAI consultant ${cityName} UP`,
      `UTFDB license ${district}`,
      `online FSSAI ${cityName} Uttar Pradesh`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/uttar-pradesh/fssai/${city}` },
    openGraph: {
      title: `FSSAI Food License in ${cityName}, UP | Taxvio`,
      description: `FSSAI Basic, State & Central license in ${cityName}, ${district}, UP. CA-assisted, from ₹1,499.`,
      url: `https://www.taxvio.in/state/uttar-pradesh/fssai/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `FSSAI Food License in ${cityName}, UP | Taxvio`,
    },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ──────────────────────────────────────────── */
function getServiceContent(cityName: string, district: string, region: string) {
  return [
    /* ── 1. FSSAI Registration ── */
    {
      slug: "fssai-registration",
      title: `FSSAI Registration in ${cityName}`,
      price: "₹1,499",
      timeline: "7–15 Working Days",
      icon: "🥗",
      iconBg: "bg-orange-50 border-orange-100",
      gradient: "from-orange-500 to-amber-600",
      accentColor: "#ea580c",
      accentBg: "bg-orange-50",
      accentText: "text-orange-700",
      features: [
        "Eligibility assessment — Basic, State, or Central",
        "FSSAI Basic Registration (turnover up to ₹12 lakh)",
        "FSSAI State License — UTFDB filing (₹12 lakh to ₹20 crore)",
        "FSSAI Central License — FoSCoS portal (above ₹20 crore / importers)",
        "Complete document preparation and portal submission",
        "Approval tracking with UTFDB / FSSAI HQ",
      ],
      seoContent: `FSSAI registration or license is mandatory for every food business operator (FBO) in ${cityName}, ${district} before commencing any food-related activity — whether manufacturing, processing, packaging, trading, retailing, or serving food. The Food Safety and Standards Act, 2006 (FSSA) and the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011 specify three categories of FSSAI authorisation based on annual turnover and business type: Basic Registration, State License, and Central License.

FSSAI Basic Registration is applicable for food businesses in ${cityName} with an annual turnover up to ₹12 lakh — including petty food manufacturers, small traders, home-based food sellers, tiffin services, and small dhabas. The registration is issued by the local Designated Officer under the Food Safety Department of Uttar Pradesh and is processed on the FoSCoS (Food Safety Compliance System) portal. Basic registration is relatively straightforward but requires correct categorisation of food products, declaration of premises, and the annual fee payment.

FSSAI State License is required for ${cityName} businesses with annual turnover between ₹12 lakh and ₹20 crore — covering most mid-sized restaurants, cloud kitchens, food manufacturers, processors, traders, and distributors. In Uttar Pradesh, State Licenses are issued by UTFDB (Uttar Pradesh Food and Drug Administration Bureau) through its district and regional offices. The State License application requires significantly more documentation including site plan of the food premises, machinery and equipment list, water quality test report, and product category details.

FSSAI Central License is mandatory for businesses with turnover above ₹20 crore, food importers, exporters, businesses supplying to central government establishments, and those operating in multiple states. Central Licenses are issued by FSSAI headquarters in New Delhi through the FoSCoS portal.

Taxvio provides complete FSSAI registration and licensing assistance for ${cityName} businesses — starting with a free eligibility assessment to determine the correct license category, followed by document preparation, portal filing, fee payment guidance, and regular follow-up with UTFDB's ${district} office or FSSAI HQ for approval. ${region === "Western UP" ? `Western UP's vibrant food economy — dairy processing, sugarcane-based products, and agricultural commodities — means many ${cityName} businesses in this sector require careful product category mapping under FSSAI schedules to ensure all manufactured or traded products are covered under the license.` : region === "Eastern UP" ? `Eastern UP's traditional food sector — including murabba, chikki, namkeen, regional sweets, and street food items — requires careful FSSAI product category selection and correct FBO type declaration in ${cityName} to avoid rejection or modification requirements post-approval.` : `Central UP's diverse food sector in ${cityName} — spanning packaged food, restaurant services, and food distribution — requires precise matching of business activity to FSSAI license conditions to remain compliant throughout the license validity period.`}`,
    },

    /* ── 2. FSSAI Renewal ── */
    {
      slug: "fssai-renewal",
      title: `FSSAI License Renewal in ${cityName}`,
      price: "₹999",
      timeline: "5–10 Working Days",
      icon: "🔄",
      iconBg: "bg-teal-50 border-teal-100",
      gradient: "from-teal-500 to-cyan-600",
      accentColor: "#0d9488",
      accentBg: "bg-teal-50",
      accentText: "text-teal-700",
      features: [
        "Renewal application on FoSCoS portal before expiry",
        "FSSAI Basic Registration renewal (1-year or 5-year)",
        "FSSAI State & Central License renewal",
        "Updated business details and document upload",
        "Annual fee computation and payment",
        "Renewal certificate receipt and delivery",
      ],
      seoContent: `FSSAI license renewal is one of the most time-sensitive compliance obligations for food businesses in ${cityName}, ${district}. Unlike many other registrations that can be renewed after expiry with a penalty, an expired FSSAI license means your food business is operating without valid authorisation — which can lead to immediate suspension of operations by the Food Safety Officer, seizure of food products, and prosecution under Section 63 of the FSSA (penalty up to ₹5 lakh for operating without a valid license). Renewal must be initiated at least 30 days before the expiry date to avoid any operational disruption.

FSSAI licenses are typically issued for 1 to 5 years (the FBO's choice at the time of application, subject to fee payment for the chosen period). For ${cityName} businesses that opted for a 1-year license, annual renewal is a recurring obligation. The renewal process on the FoSCoS portal requires login with the existing FSSAI registration number, verification of current business details, update of any changed information (address, product categories, key managerial persons), upload of fresh supporting documents if details have changed, and online fee payment based on license type and renewal period.

A common complication for ${cityName} food businesses is that details may have changed since the original license — a new branch, additional product categories, change in FBO name due to proprietorship succession or partnership changes, or change in business address within ${district}. If these changes are not updated at renewal, the renewed license will carry incorrect details, creating compliance risks during UTFDB inspections.

Taxvio handles FSSAI renewal for ${cityName} businesses with a structured pre-renewal audit: reviewing the existing license for accuracy, identifying any details that need modification (better done simultaneously with renewal to save fees), computing the correct renewal fee based on FBO type and license category, filing the renewal application on FoSCoS, and tracking it through to the final renewal certificate. We also maintain renewal reminders for all our ${cityName} FSSAI clients — sending advance alerts 60 days before expiry so no business faces the risk of operating with an expired food license.`,
    },

    /* ── 3. FSSAI Modification ── */
    {
      slug: "fssai-modification",
      title: `FSSAI License Modification in ${cityName}`,
      price: "₹999",
      timeline: "7–12 Working Days",
      icon: "✏️",
      iconBg: "bg-violet-50 border-violet-100",
      gradient: "from-violet-500 to-purple-600",
      accentColor: "#7c3aed",
      accentBg: "bg-violet-50",
      accentText: "text-violet-700",
      features: [
        "Core field modification — FBO name, address, license category",
        "Non-core field modification — product categories, machinery",
        "Additional product addition to existing license",
        "Change of FBO type (proprietor to partnership etc.)",
        "Additional place of business (branch/unit addition)",
        "Approval tracking with UTFDB ${district} office",
      ],
      seoContent: `FSSAI license modification is required whenever there is a material change in the food business operations of ${cityName} businesses that differs from the details recorded in the existing FSSAI license. Operating a food business with incorrect or outdated license details is a compliance violation — UTFDB food safety inspectors in ${district} routinely check whether actual business operations match the declared activities, product categories, and premises in the FSSAI license.

FSSAI modifications are classified into two types: Core modifications and Non-core modifications. Core modifications affect fundamental license attributes — changes in name of the FBO, business address (shifting premises within ${cityName} or to another area of ${district}), change in license category (upgrading from Basic to State License as turnover grows, or from State to Central as the business expands), or change in the nature of food business activity. Core modifications require approval from the licensing authority (UTFDB for State License, FSSAI HQ for Central License) and typically take 7–12 working days.

Non-core modifications are simpler changes that don't affect the fundamental nature of the license — additions to the product category list, change in installed capacity, addition of machinery, or minor address changes within the same premises. Non-core modifications are self-declared on the FoSCoS portal and typically take effect within 2–5 working days without formal inspection.

For food businesses in ${cityName} that have grown beyond their original license scope — adding new food products, opening a new kitchen or production unit, or crossing the ₹12 lakh or ₹20 crore turnover thresholds — timely modification is critical. UTFDB inspectors in ${district} are increasingly cross-referencing GST return turnover data with FSSAI license categories, making it important for ${cityName} businesses to proactively upgrade from Basic Registration to State License or from State to Central License before inspections occur. Taxvio manages the complete modification process — identifying which changes qualify as core vs non-core, preparing the modification application with all required documents, and following up with the UTFDB ${district} office for approval.`,
    },

    /* ── 4. FSSAI Annual Return ── */
    {
      slug: "fssai-annual-return",
      title: `FSSAI Annual Return Filing in ${cityName}`,
      price: "₹1,499",
      timeline: "Before 31st May",
      icon: "📅",
      iconBg: "bg-blue-50 border-blue-100",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "#2563eb",
      accentBg: "bg-blue-50",
      accentText: "text-blue-700",
      features: [
        "Form D-1 preparation and online filing on FoSCoS",
        "Production, import & sales data compilation",
        "Product-wise tonnage and value reporting",
        "Compliance with FSSAI Regulation 2.1.13",
        "Mandatory for all manufacturers and importers",
        "Penalty avoidance for late/non-filing (₹100/day)",
      ],
      seoContent: `FSSAI Annual Return (Form D-1) is a mandatory compliance requirement for all food manufacturers and importers in ${cityName}, ${district} holding a State or Central FSSAI License. Under Regulation 2.1.13 of the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011, every manufacturer and importer must file the annual return by 31st May for the preceding financial year (April to March). The penalty for non-filing or late filing of the FSSAI Annual Return is ₹100 per day — a relatively modest amount per day, but non-compliance can trigger inspection, license suspension proceedings, and broader regulatory scrutiny from UTFDB in ${district}.

Form D-1 requires detailed reporting of food products manufactured or imported during the financial year — organised product-category wise as per the FSSAI license schedule. For each product category, the annual return requires declaration of quantity produced (in metric tonnes), quantity imported (for importers), quantity sold (in quantity and value), and closing inventory. For businesses in ${cityName} manufacturing multiple food products — such as dairy processors, bakery manufacturers, packaged food companies, or namkeen and snacks manufacturers — the data compilation from production and sales registers across 12 months is a significant exercise that requires careful reconciliation.

An important nuance for ${cityName} manufacturers: the FSSAI Annual Return is separate from GST annual return (GSTR-9) and income tax return, though all three use financial year data. However, turnover declared in Form D-1 must be broadly consistent with GST return turnover for the same products — UTFDB and FSSAI HQ are increasingly using GST data for cross-verification, and significant discrepancies between FSSAI and GST turnover can trigger inspection or show-cause notices.

Taxvio provides FSSAI Annual Return filing for ${cityName} manufacturers and importers — including data compilation guidance, Form D-1 preparation, portal filing on FoSCoS before the 31st May deadline, and acknowledgement receipt. For businesses that missed previous year filings, we also handle late filing with accurate penalty computation and simultaneous compliance regularisation to prevent license cancellation proceedings. ${region === "Western UP" ? `Western UP's large dairy, sugarcane, and food processing sector means many ${cityName} businesses in this region have high-volume Form D-1 data requiring careful product tonnage reconciliation — our team is well-versed in handling FSSAI returns for UP's food manufacturing clusters.` : `For ${cityName} businesses in the food manufacturing or import sector, timely Form D-1 filing is an important indicator of regulatory compliance that UTFDB inspectors reference during periodic license inspections.`}`,
    },

    /* ── 5. FSSAI Notice Reply ── */
    {
      slug: "fssai-notice-reply",
      title: `FSSAI Notice Reply & Compliance in ${cityName}`,
      price: "₹1,999",
      timeline: "15–30 Day Response Window",
      icon: "⚖️",
      iconBg: "bg-rose-50 border-rose-100",
      gradient: "from-rose-500 to-red-600",
      accentColor: "#e11d48",
      accentBg: "bg-rose-50",
      accentText: "text-rose-700",
      features: [
        "Show-cause notice (SCN) reply — license cancellation threats",
        "Improvement Notice (Form B) response and compliance",
        "Food sampling dispute and lab report challenge",
        "Annual return non-compliance notice response",
        "Inspection memo rectification and compliance undertaking",
        "Personal hearing representation before UTFDB officer",
      ],
      seoContent: `FSSAI notices from UTFDB (Uttar Pradesh Food and Drug Administration Bureau) and FSSAI central authorities are serious compliance events for food businesses in ${cityName}, ${district}. Unlike GST or income tax notices which are primarily financial in nature, FSSAI notices can directly threaten the right to operate — a suspension or cancellation of FSSAI license means the food business must cease operations immediately. Responding accurately, completely, and within the prescribed timeline is therefore critical for every ${cityName} food business that receives an FSSAI notice.

The most common FSSAI notice types faced by ${cityName} food businesses include: Improvement Notice (Form B) — issued when a Food Safety Officer (FSO) conducting a premises inspection finds violations of hygiene, labelling, or food safety standards and gives 14 days to rectify; Show-Cause Notice (SCN) for license cancellation — issued in more serious cases of repeated non-compliance, expired license operation, or failure to respond to an Improvement Notice; Food Sample Failure Notice — issued when a food sample drawn from your business during inspection fails chemical, microbiological, or adulteration testing under the FSSAI Food Standards Regulations; and Annual Return Non-Compliance Notice — issued for non-filing of Form D-1 by manufacturers and importers.

Responding to an FSSAI Improvement Notice (Form B) requires preparation of a Compliance Report detailing each violation cited and the corrective action taken — supported by photographs, invoices for rectification work, updated SOPs, and staff training records where hygiene violations were cited. The compliance report must be submitted within 14 days of the Improvement Notice to avoid escalation to a Show-Cause Notice.

Taxvio's compliance team handles FSSAI notice replies for ${cityName} food businesses with expertise in FSSAI Regulations, UTFDB's inspection protocols, and ${district}'s Food Safety office procedures. Our approach: thorough analysis of the notice to identify the specific regulatory provision cited, a compliance audit of the food premises against the notice allegations, preparation of a detailed written reply with all supporting documents, and where required, personal representation before the Designated Officer or Appellate Authority at the UTFDB ${district} office. We have successfully resolved Improvement Notices, food sample failure notices, and show-cause notices for food businesses across Uttar Pradesh — helping them retain their FSSAI licenses and regularise compliance.`,
    },

    /* ── 6. FSSAI License Search & Verification ── */
    {
      slug: "fssai-search",
      title: `FSSAI License Search & Verification in ${cityName}`,
      price: "₹499",
      timeline: "Same Day",
      icon: "🔍",
      iconBg: "bg-sky-50 border-sky-100",
      gradient: "from-sky-500 to-blue-600",
      accentColor: "#0284c7",
      accentBg: "bg-sky-50",
      accentText: "text-sky-700",
      features: [
        "FSSAI license number authenticity verification",
        "Business name and FBO type confirmation",
        "License category (Basic / State / Central) check",
        "License validity and expiry status verification",
        "Product category coverage under the license",
        "Fraud prevention and vendor due diligence support",
      ],
      seoContent: `FSSAI license verification is an essential due diligence step for businesses, distributors, retailers, and institutional buyers in ${cityName}, ${district} that source food products from manufacturers, traders, or vendors. Under the Food Safety and Standards Act, any food business operator who purchases or sells food products from an unlicensed or incorrectly licensed entity becomes complicit in regulatory non-compliance — and can face proceedings from UTFDB inspectors. Verifying a supplier's FSSAI license before entering into a supply arrangement is a simple but critical step.

The FSSAI maintains a public license verification database on the FoSCoS (Food Safety Compliance System) portal, where any FSSAI license number can be searched to verify the registered FBO name, business address, license category (Basic, State, or Central), food product categories covered under the license, license validity period, and current status (active, expired, suspended, or cancelled). For ${cityName} businesses sourcing from multiple vendors across ${district} and other parts of Uttar Pradesh, systematic vendor FSSAI verification is an important part of supply chain compliance.

Beyond vendor verification, FSSAI license search is important in the following scenarios common for ${cityName} businesses: before purchasing a food business or franchise (verifying the transferability and validity of the existing license), during investor or lender due diligence on a food company, by hotel procurement departments verifying caterers and food suppliers, by e-commerce food delivery platforms onboarding restaurant partners, and by consumers who want to verify the authenticity of packaged food products carrying an FSSAI license number on the label.

Taxvio provides FSSAI license search and verification services for ${cityName} businesses and individuals — conducting FoSCoS database searches, cross-referencing FSSAI license details against physical label declarations or contract representations, identifying discrepancies between declared and licensed product categories, and providing a concise written verification report. For ${cityName} businesses managing multiple vendors in ${district} and across UP, we also offer bulk vendor FSSAI verification — a cost-effective way to ensure your entire supply chain is FSSAI-compliant before your own UTFDB inspection.`,
    },
  ];
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function UPFSSAICityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  const cityData = getCityData(city);
  const cityName = cityData?.name ?? formatCityDisplay(city);
  const district = cityData?.district ?? cityName;
  const region = cityData?.region ?? "Uttar Pradesh";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need FSSAI license services in ${cityName}, ${district}, UP.`)}`;

  const services = getServiceContent(cityName, district, region);

  const nearbyCities = UP_CITIES
    .filter((c) => c.district === district && slugifyCity(c.name) !== city)
    .slice(0, 5);
  const regionCities = nearbyCities.length < 3
    ? UP_CITIES.filter((c) => c.region === region && slugifyCity(c.name) !== city).slice(0, 6)
    : nearbyCities;

  /* ─── JSON-LD Schemas ─── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: `+${PHONE}`,
    email: "support@taxvio.in",
    description: `Taxvio provides FSSAI Basic Registration, State License, Central License, renewal, modification, annual return filing and notice reply services in ${cityName}, ${district}, Uttar Pradesh.`,
    areaServed: [
      {
        "@type": "City",
        name: cityName,
        containedInPlace: { "@type": "State", name: "Uttar Pradesh" },
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
    priceRange: "₹499 - ₹4,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "FSSAI Services UP", item: "https://www.taxvio.in/state/uttar-pradesh/fssai-services" },
      { "@type": "ListItem", position: 3, name: district, item: `https://www.taxvio.in/state/uttar-pradesh/fssai-services#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${cityName} FSSAI Services`, item: `https://www.taxvio.in/state/uttar-pradesh/fssai/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `FSSAI Services in ${cityName}, Uttar Pradesh`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/uttar-pradesh/fssai/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What type of FSSAI license does a restaurant in ${cityName} need?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A restaurant in ${cityName}, ${district} with annual turnover up to ₹12 lakh needs FSSAI Basic Registration. Turnover between ₹12 lakh and ₹20 crore requires an FSSAI State License issued by UTFDB, the Uttar Pradesh food safety authority. Businesses with turnover above ₹20 crore or those engaged in import/export require a Central License from FSSAI HQ.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does FSSAI registration take in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `FSSAI Basic Registration in ${cityName} typically takes 7–10 working days. FSSAI State License through UTFDB's ${district} office typically takes 10–15 working days from document submission, subject to inspection scheduling. Central License takes 20–30 working days.`,
        },
      },
      {
        "@type": "Question",
        name: `Who needs to file FSSAI Annual Return in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `All food manufacturers and importers in ${cityName} holding a State or Central FSSAI License must file the FSSAI Annual Return in Form D-1 by 31st May every year. Retailers, restaurants, and traders holding Basic Registration are generally exempt from annual return filing. Non-filing attracts a penalty of ₹100 per day.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the penalty for operating without a valid FSSAI license in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Operating a food business in ${cityName} without a valid FSSAI license is punishable under Section 63 of the Food Safety and Standards Act — with imprisonment up to 6 months and a fine up to ₹5 lakh. UTFDB food safety officers in ${district} conduct surprise inspections and can immediately seal non-compliant food premises.`,
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="fssai-lb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="fssai-bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="fssai-sl-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="fssai-faq-schema"
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
            style={{ background: "radial-gradient(circle,rgba(251,146,60,0.10) 0%,transparent 65%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.07) 0%,transparent 65%)" }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-7" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                {[
                  { href: "/", label: "Home" },
                  { href: "/state/uttar-pradesh/fssai-services", label: "FSSAI — Uttar Pradesh" },
                  { href: null, label: cityName },
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
                  <MapPin size={12} className="text-orange-300 shrink-0" />
                  {cityName}, {district} · Uttar Pradesh · FSSAI Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  FSSAI Registration &amp; Food License
                  <span className="block mt-2 bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                    in {cityName}, UP
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert{" "}
                  <strong className="text-white">FSSAI Basic Registration</strong>,{" "}
                  <strong className="text-white">State &amp; Central License</strong>, renewal,
                  modification, annual return (Form D-1) filing, and notice reply in{" "}
                  <strong className="text-white">
                    {cityName}, {district} District, Uttar Pradesh
                  </strong>{" "}
                  — 100% online by CA professionals. Starting{" "}
                  <strong className="text-orange-300">₹1,499</strong>.
                </p>

                {/* Trust chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck,    text: "CA-Assisted"        },
                    { icon: Shield,        text: "100% Secure"        },
                    { icon: Zap,           text: "7–15 Day License"   },
                    { icon: Clock,         text: "Mon–Sat 9AM–7PM"   },
                    { icon: Star,          text: "4.9★ Rating"        },
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
                      <Icon size={11} className="text-orange-300 shrink-0" /> {text}
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
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for FSSAI Help
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

              {/* Right — Quick nav panel */}
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
                      FSSAI Services — {cityName}
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
                <div className="p-4 space-y-2">
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
                      <span className="text-[10px] font-bold text-orange-300 shrink-0 ml-2">
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
                    <p className="text-orange-300 text-2xl font-extrabold leading-tight">₹1,499</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">
                      License in
                    </p>
                    <p className="text-white text-sm font-bold">7–15 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats ribbon */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck,  label: "FSSAI-Trained Professionals"  },
                { icon: TrendingUp,  label: "3,200+ Licenses Filed"         },
                { icon: Users,       label: "4,800+ UP Businesses"          },
                { icon: Shield,      label: "UTFDB-Aware Filing"            },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Icon size={11} className="text-orange-300 shrink-0" /> {label}
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
              { val: "7–15",   label: "Days for License",  icon: Zap         },
              { val: "4.9★",   label: "Average Rating",    icon: Star        },
              { val: "₹1,499", label: "Starting Price",    icon: IndianRupee },
              { val: "100%",   label: "Online Process",    icon: Globe       },
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

        {/* ════════════ SERVICE CARDS WITH DEEP SEO CONTENT ════════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-16">
            {services.map((svc, idx) => (
              <article
                key={svc.slug}
                id={svc.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${svc.gradient} p-6 md:p-8`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl border border-white/25">
                          {svc.icon}
                        </div>
                        <div>
                          <p className="text-white/70 text-[11px] font-semibold uppercase tracking-wide">
                            FSSAI Service #{String(idx + 1).padStart(2, "0")}
                          </p>
                          <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                            {svc.title}
                          </h2>
                        </div>
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

                    {/* Feature List */}
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why {cityName} Food Businesses Choose Taxvio for FSSAI
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "FSSAI-Trained Compliance Team",
                  desc: `Every FSSAI application for ${cityName} businesses is handled by professionals trained in FSSAI Regulations, FoSCoS portal workflows, and UTFDB's ${district} office procedures — not generic data entry staff.`,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Share all documents via WhatsApp or email from ${cityName}. We handle FoSCoS portal filing, UTFDB follow-up, and fee payment coordination entirely online — no queues, no travel.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Shield,
                  title: "UTFDB-Aware Filing Process",
                  desc: `We understand UTFDB's inspection norms and documentation requirements for UP's food sector. Our pre-submission document audit reduces rejection risk for ${cityName} FSSAI applications significantly.`,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Renewal Reminders",
                  desc: `We track FSSAI license expiry dates for all ${cityName} clients and send advance renewal alerts 60 days before expiry — ensuring no food business faces the risk of operating with an expired license.`,
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹1,499",
                  desc: `No hidden FSSAI consultation fees. Clear pricing for Basic Registration, State License, Central License, renewal, and annual return — quoted upfront before we begin any work.`,
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: MapPin,
                  title: "UP Food Economy Expertise",
                  desc: `Headquartered in Khatauli, Muzaffarnagar, Taxvio understands UP's diverse food sector — dairy, sugar, namkeen, restaurants, cloud kitchens — and the specific product category mapping each business type needs.`,
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                How to Get FSSAI License in {cityName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Share Business Details",
                  desc: "Send PAN, Aadhaar, business address proof, food product list & premises photo on WhatsApp",
                },
                {
                  step: "02",
                  title: "Eligibility Assessment",
                  desc: "Our team determines the correct license category (Basic / State / Central) and prepares your application within 24 hours",
                },
                {
                  step: "03",
                  title: "FoSCoS Filing",
                  desc: "We file your FSSAI application on FoSCoS portal, make fee payment, and handle UTFDB follow-up for inspection scheduling",
                },
                {
                  step: "04",
                  title: "License Received",
                  desc: "FSSAI license issued in 7–15 working days. We send the license certificate and brief you on annual return and renewal obligations",
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
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-orange-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">
                    {district} District &amp; {region}
                  </p>
                  <h2 className="text-lg font-extrabold text-gray-800">
                    FSSAI Services in Nearby Cities
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionCities.map((c) => (
                  <Link
                    key={c.name}
                    href={`/state/uttar-pradesh/fssai/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-orange-50 hover:text-[#00416a] hover:shadow-sm transition-all"
                  >
                    <MapPin
                      size={11}
                      className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0 transition-colors"
                    />
                    FSSAI in {c.name}
                    <ArrowRight
                      size={11}
                      className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                ))}
                <Link
                  href="/state/uttar-pradesh/fssai-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#00416a]/30 bg-[#deeef7] px-4 py-2 text-sm font-bold text-[#00416a] hover:shadow-sm transition-all"
                >
                  View All UP Cities{" "}
                  <ArrowRight
                    size={11}
                    className="group-hover:translate-x-0.5 transition-all"
                  />
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
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-orange-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-amber-400/10 blur-[60px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-orange-300" />
                  Serving FSSAI clients in {cityName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Expert FSSAI Help in {cityName}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  FSSAI Basic Registration, State &amp; Central License, renewal, modification, annual
                  return (Form D-1), and notice reply — all delivered online for food businesses in{" "}
                  {cityName}, {district}. Starting ₹1,499. CA-assisted, same-day WhatsApp response.
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
                  FSSAI Basic Registration · State License · Central License · Renewal · Annual Return · Notice Reply · {district} District · 100% Online
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

/* ─── Globe icon (inline — avoids import warning) ────────────────────────── */
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