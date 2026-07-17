// app/state/madhya-pradesh/fssai/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, BookOpen, ClipboardList,
  AlertCircle,
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
    title: `FSSAI Registration & Food License in ${cityName}, ${district}, MP | Taxvio`,
    description: `Expert FSSAI Basic, State & Central food license registration, renewal, modification, annual return filing, notice reply, and license verification in ${cityName}, ${district}, Madhya Pradesh. Expert-assisted, 100% online, starting ₹999.`,
    keywords: [
      `FSSAI registration ${cityName}`,
      `food license ${cityName} MP`,
      `FSSAI license ${cityName}`,
      `state food license ${cityName}`,
      `central food license ${cityName}`,
      `FSSAI renewal ${cityName}`,
      `FSSAI annual return ${cityName}`,
      `food business license ${district}`,
      `FSSAI notice reply ${cityName}`,
      `food safety registration ${cityName} Madhya Pradesh`,
    ],
    alternates: {
      canonical: `https://www.taxvio.in/state/madhya-pradesh/fssai/${city}`,
    },
    openGraph: {
      title: `FSSAI Food License in ${cityName}, MP | Taxvio`,
      description: `FSSAI registration, renewal, annual return & notice reply in ${cityName}, ${district}, MP — expert-assisted, from ₹999.`,
      url: `https://www.taxvio.in/state/madhya-pradesh/fssai/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `FSSAI Services in ${cityName}, MP | Taxvio`,
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

    /* ── 1. FSSAI Registration ── */
    {
      slug: "fssai-registration",
      title: `FSSAI Registration (Basic / State / Central) in ${cityName}`,
      price: "From ₹999",
      timeline: "7–30 Working Days",
      icon: "🍽️",
      gradient: "from-green-600 to-emerald-700",
      accentBg: "bg-green-50",
      accentBorder: "border-green-100",
      accentText: "text-green-700",
      features: [
        "Eligibility assessment — Basic vs State vs Central",
        "Basic Registration (turnover < ₹12 lakh)",
        "State License (turnover ₹12L–₹20Cr)",
        "Central License (turnover > ₹20Cr / multi-state)",
        "Complete documentation and FoSCoS portal filing",
        "FSSAI registration number / license certificate",
      ],
      seoContent: `FSSAI registration or license is mandatory for every food business operator (FBO) in ${cityName}, ${district} under the Food Safety and Standards Act, 2006 — including restaurants, hotels, dhabas, cloud kitchens, home bakers, food manufacturers, processors, traders, distributors, importers, exporters, and even small street food vendors. Operating a food business in ${cityName} without a valid FSSAI registration or license is punishable by imprisonment up to 6 months and a fine up to ₹5 lakh, and the food safety authority can seal the premises. The 14-digit FSSAI registration number or license number must be displayed prominently at the business premises and printed on all food labels, menus, and packaging.

The type of FSSAI registration required depends on the annual turnover and nature of the food business in ${cityName}. **Basic FSSAI Registration** (₹100 government fee per year) is required for petty food business operators with annual turnover below ₹12 lakh — this covers small home bakers, pan shops, small tea stalls, street vendors, and cottage food producers in ${cityName}. **State FSSAI License** (government fee ₹2,000–₹5,000 per year depending on category) is required for food businesses with turnover between ₹12 lakh and ₹20 crore — this covers most restaurants, hotels, cloud kitchens, medium-sized manufacturers, and food traders in ${cityName}. **Central FSSAI License** (government fee ₹7,500 per year) is required for large manufacturers with turnover above ₹20 crore, importers, exporters, food businesses with operations in more than one state, and food business operators in airports, seaports, and border check posts.

Taxvio's FSSAI registration service for ${cityName} food businesses begins with an eligibility assessment — correctly categorising your business type (manufacturer, storage, retailer, distributor, transporter, marketer, e-commerce operator, etc.) and determining the applicable license category and government fee slab. We then prepare the complete application with all required documents — proprietor/director PAN and Aadhaar, business address proof, food category list, premises plan layout, water test report (if required), NOC from municipality (if required), and product details — and file on the FoSCoS (Food Safety Compliance System) portal. For State and Central licenses, we track the application through the inspection and approval stages, respond to any department queries, and ensure the license certificate is received without unnecessary delays.`,
    },

    /* ── 2. FSSAI Renewal ── */
    {
      slug: "fssai-renewal",
      title: `FSSAI License Renewal in ${cityName}`,
      price: "₹1,499",
      timeline: "7–15 Working Days",
      icon: "🔄",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "Renewal for Basic, State & Central licenses",
        "Pre-expiry filing — up to 30 days before expiry",
        "Document update if business details changed",
        "Government fee calculation and payment",
        "FoSCoS portal tracking until renewal order",
        "Penalty avoidance — ₹100/day for expired operation",
      ],
      seoContent: `An FSSAI food license or registration in ${cityName}, ${district} is granted for a period of 1 to 5 years (chosen at the time of initial registration/licensing) and must be renewed before expiry to continue lawful food business operations. Operating a food business in ${cityName} with an expired FSSAI license attracts a penalty of ₹100 per day under Section 31(1) of the FSS Act — and the food safety officer can issue an improvement notice, suspension, or cancellation order. Renewal applications should ideally be filed 30 days before the expiry date to ensure continuity, as the FoSCoS portal processing time can vary from 7 to 30 working days depending on whether a physical inspection is required.

The FSSAI renewal process for ${cityName} food businesses involves submitting the renewal application through the FoSCoS portal with updated business details — any changes in address, ownership, installed capacity, or food categories since the last license issuance must be incorporated at the time of renewal (as a modification concurrent with renewal). The renewal government fee is the same as the annual license fee — ₹100/year for Basic Registration, and the applicable slab for State and Central licenses based on business category and production capacity. For multi-year licenses (e.g., a 3-year or 5-year license), the total fee is paid at the time of renewal application for the entire renewal period chosen.

Taxvio's FSSAI renewal service for ${cityName} includes a pre-renewal check of your existing license — verifying that all business details (address, food category, installed capacity, owner details) in the FSSAI portal match the current operational reality, updating any details that have changed, calculating the correct renewal fee, and filing the renewal application well before the expiry date. We track the renewal application through FoSCoS, respond to any queries from the food safety officer, and ensure the renewed license certificate is downloaded and provided to you promptly. For ${cityName} food businesses that have already been operating with an expired license, we also advise on condonation and re-registration procedures.`,
    },

    /* ── 3. FSSAI Modification ── */
    {
      slug: "fssai-modification",
      title: `FSSAI License Modification in ${cityName}`,
      price: "₹1,299",
      timeline: "10–20 Working Days",
      icon: "✏️",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "Core field modifications — address, installed capacity, business type",
        "Non-core field updates — contact, email, additional food categories",
        "Ownership or proprietor name change",
        "Addition of new manufacturing premises",
        "Document upload and FoSCoS filing",
        "Department approval tracking",
      ],
      seoContent: `When a food business in ${cityName}, ${district} undergoes changes — relocation of premises, expansion of product categories, change in installed capacity, change in business ownership, addition of a new branch or manufacturing unit — the FSSAI license must be updated through a formal modification application on the FoSCoS portal. Operating with an FSSAI license that has incorrect or outdated details is treated as a violation under FSS Act regulations, and during inspections by the food safety officer, mismatches between the license details and actual business operations can result in improvement notices or cancellation proceedings.

FSSAI modifications are categorised into two types: **Core Field Modifications** and **Non-Core Field Modifications**. Core field modifications involve changes that materially affect the food business — change of business address or location, change in installed production capacity, change in type of business (e.g., from manufacturer to manufacturer-cum-retailer), change in food categories (e.g., adding dairy products to a bakery license), or change in name of the business. Core modifications require fresh documentary evidence and go through a review process by the food safety authority — and in many cases, an inspection of the new premises or updated facility may be required before the modified license is issued.

Non-core field modifications are administrative updates — change of contact number, email address, proprietor/director contact details, or addition of categories that don't affect the fundamental nature of the business. These are processed faster on FoSCoS and typically don't require physical inspection. Taxvio handles FSSAI modification applications for ${cityName} food businesses of both types — correctly classifying the modification (to avoid rejection due to wrong form selection), preparing the supporting documents (new premises proof, updated business details, NOC where required), filing the modification application on FoSCoS, and tracking the approval until the modified license certificate is issued. We also advise ${cityName} businesses on whether their changes trigger the need to upgrade from Basic Registration to State License, or from State to Central License.`,
    },

    /* ── 4. FSSAI Annual Return ── */
    {
      slug: "fssai-annual-return",
      title: `FSSAI Annual Return Filing in ${cityName}`,
      price: "₹1,499",
      timeline: "Before May 31 Deadline",
      icon: "📊",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "Form D-1 preparation for manufacturers & importers",
        "Annual return due date: May 31 each year",
        "Product-wise production and sales data compilation",
        "Raw material procurement data",
        "FoSCoS portal filing and acknowledgement",
        "Penalty guidance for delayed or missed filing",
      ],
      seoContent: `FSSAI annual return filing is a mandatory compliance obligation for food manufacturers and food importers in ${cityName}, ${district} who hold a State or Central FSSAI license. Under Regulation 2.1.13 of the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011, every licensed food manufacturer and importer must file Form D-1 (Annual Return) with the food safety authority by May 31 for the preceding financial year (April–March). Non-filing or late filing of the FSSAI annual return can attract penalty proceedings under Section 32 of the FSS Act, and repeated defaults can result in license suspension.

Form D-1 requires detailed product-wise data — for each food product manufactured or imported, the return must disclose the quantity produced or imported, the quantity sold, the closing stock, the selling price, and the raw materials or inputs used. For ${cityName} food manufacturers who produce multiple product categories (e.g., a bakery producing breads, biscuits, and cakes; or a spice manufacturer processing multiple varieties), each product category must be reported separately. Importers must additionally disclose the country of origin for each imported food product. The data must be compiled from the food business's production records, purchase registers, sales records, and inventory logs.

Taxvio's FSSAI annual return filing service for ${cityName} food businesses includes a pre-filing data compilation exercise — helping you organise production logs, sales data, purchase records, and inventory statements from your existing accounting records into the Form D-1 format. We verify that the quantities reported are consistent with GST return data (to avoid mismatches that could trigger food safety authority scrutiny), calculate product-wise consumption and yield ratios, and file the complete Form D-1 on FoSCoS before the May 31 deadline. For ${cityName} manufacturers who have missed prior year filings, we also advise on condonation applications and late filing fee computation to regularise the compliance position.`,
    },

    /* ── 5. FSSAI Notice Reply ── */
    {
      slug: "fssai-notice-reply",
      title: `FSSAI Notice Reply & Compliance in ${cityName}`,
      price: "₹1,999",
      timeline: "As Per Notice Timeline",
      icon: "⚖️",
      gradient: "from-rose-500 to-red-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Show cause notice (SCN) analysis and reply drafting",
        "Improvement notice compliance plan",
        "FSSAI inspection deficiency response",
        "Prohibition and cancellation order appeal",
        "Supporting document compilation and submission",
        "Food safety officer coordination and follow-up",
      ],
      seoContent: `Food businesses in ${cityName}, ${district} that receive notices from the Food Safety and Standards Authority of India or the Madhya Pradesh food safety department must respond promptly and accurately — failing to respond within the stipulated time or submitting an inadequate reply can result in license suspension, cancellation, financial penalties, or even criminal prosecution under the FSS Act. The most common notices that ${cityName} food business operators receive include: Improvement Notices (under Section 32 of the FSS Act) directing the business to rectify identified non-compliances within a specified period; Show Cause Notices (SCNs) asking the business to explain why license cancellation or penalty should not be imposed; and deficiency letters from the FoSCoS system requesting additional documents or clarifications for pending license or renewal applications.

Show Cause Notices from the Designated Officer or Food Safety Commissioner in MP are typically issued following inspection reports that identify violations — presence of substandard or unsafe food, label non-compliances (missing mandatory declarations like FSSAI license number, ingredients, net weight, best before date), manufacturing process deviations, hygiene and sanitation deficiencies, or failure to maintain prescribed records. Responding to an SCN requires careful analysis of the inspection report, a factual and legal reply addressing each ground of the notice, and supporting documentation (food testing reports, corrective action evidence, facility improvement photographs, record maintenance proof).

Taxvio's FSSAI notice reply service for ${cityName} food businesses begins with a thorough review of the notice and the underlying inspection report — identifying the specific provisions of the FSS Act and Regulations allegedly violated, assessing the strength of the department's case, and developing a response strategy. Our team drafts the complete written reply with documentary annexures, prepares an affidavit where required, and coordinates with the food safety officer or commissioner's office for personal hearing appointments. Where the notice relates to product quality (adulteration, sub-standard quality claim), we coordinate with accredited NABL laboratories in MP for re-testing of product samples, which can be submitted as counter-evidence. For ${cityName} businesses facing cancellation orders, we also file appeals before the appropriate appellate authority under Section 32(4) of the FSS Act.`,
    },

    /* ── 6. FSSAI License Search & Verification ── */
    {
      slug: "fssai-search",
      title: `FSSAI License Search & Verification in ${cityName}`,
      price: "₹299",
      timeline: "Same Day",
      icon: "🔍",
      gradient: "from-gray-600 to-slate-700",
      accentBg: "bg-gray-50",
      accentBorder: "border-gray-100",
      accentText: "text-gray-700",
      features: [
        "14-digit FSSAI license number verification",
        "Business name and registered address check",
        "License validity date and status confirmation",
        "Food categories and license type verification",
        "Multi-vendor batch verification for distributors",
        "Counterfeit and fraudulent license detection",
      ],
      seoContent: `FSSAI license verification is an essential due diligence step for food businesses in ${cityName}, ${district} that source products from manufacturers, processors, or distributors — ensuring that your supply chain partners are legally compliant food business operators with valid FSSAI registration or license. As per the FSS Act, selling or distributing food products from an unlicensed manufacturer makes the distributor or retailer in ${cityName} equally liable for the violation. With the rise of counterfeit FSSAI license numbers (fake 14-digit numbers printed on packaging to appear compliant), verification through the official FoSCoS database is increasingly critical.

The FSSAI license verification process checks the 14-digit license or registration number against the Food Safety and Standards Authority of India's official database to confirm: whether the number is genuine and registered; the name and address of the food business operator to whom it was issued; the type of license (Basic Registration, State License, or Central License); the validity period (start date and expiry date); and the food categories and business activities covered under the license. A food business in ${cityName} that purchases from a supplier who has an expired license, a license that doesn't cover the product category being supplied, or a license registered under a different address than the actual manufacturing facility — is accepting significant legal and commercial risk.

Taxvio's FSSAI verification service for ${cityName} businesses offers both single-vendor verification (checking one FSSAI number) and multi-vendor batch verification (for distributors and wholesalers in ${cityName} dealing with 10–50+ suppliers). Our team accesses the official FoSCoS portal database, generates a structured verification report with license details, validity status, and compliance flag for each vendor, and highlights any anomalies — such as a license number that shows a different business name than the invoice, a license that has expired, or a license that doesn't include the product category being procured. This verification report can be maintained as documentary evidence of your supply chain due diligence, which is particularly useful during FSSAI inspections of your own premises in ${cityName}.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function MPFSSAICityPage({
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
    `Hello Taxvio, I need FSSAI services in ${cityName}, ${district}, MP.`
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
    description: `Taxvio provides FSSAI Basic, State & Central food license registration, renewal, modification, annual return filing, and notice reply services in ${cityName}, ${district}, Madhya Pradesh.`,
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
    priceRange: "₹299 - ₹3999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "FSSAI — MP", item: "https://www.taxvio.in/state/madhya-pradesh/fssai" },
      { "@type": "ListItem", position: 3, name: district, item: `https://www.taxvio.in/state/madhya-pradesh/fssai#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${cityName} FSSAI`, item: `https://www.taxvio.in/state/madhya-pradesh/fssai/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `FSSAI Services in ${cityName}, MP`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/madhya-pradesh/fssai/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is FSSAI registration mandatory for all food businesses in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, FSSAI registration or license is mandatory for every food business operator in ${cityName} — including restaurants, cloud kitchens, home bakers, food manufacturers, distributors, traders, and even street vendors. Operating without FSSAI registration can result in penalties up to ₹5 lakh and imprisonment up to 6 months. The type of registration (Basic, State, or Central) depends on the annual turnover and nature of the food business.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the difference between FSSAI Basic Registration and State License in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `FSSAI Basic Registration is for petty food businesses in ${cityName} with annual turnover below ₹12 lakh — such as small home bakers, pan shops, and street vendors. State License is required for food businesses with turnover between ₹12 lakh and ₹20 crore — covering most restaurants, manufacturers, and traders. Central License is for businesses with turnover above ₹20 crore or multi-state operations. Taxvio assesses your specific business to recommend the correct registration type.`,
        },
      },
      {
        "@type": "Question",
        name: `What documents are required for FSSAI registration in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `For FSSAI registration in ${cityName}, you need: PAN card and Aadhaar card of the proprietor/director, business address proof (electricity bill, rent agreement, or property documents), food business details (type of business, food categories handled), product list, and a passport-size photograph. For State and Central licenses, additional documents include premises plan/layout, water test report, NOC from municipality or local authority, and equipment/machinery list for manufacturers.`,
        },
      },
    ],
  };

  return (
    <>
      <Script id="lb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="sl-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-[#f3faf4] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#14532d] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#14532d] via-[#0f4023] to-[#052e16]" />
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
                "radial-gradient(circle,rgba(134,239,172,0.12) 0%,transparent 65%)",
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
                  { href: "/state/madhya-pradesh/fssai", label: "FSSAI — MP" },
                  { href: null, label: cityName },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5">
                    {href ? (
                      <Link href={href} className="hover:text-white/80 transition">
                        {label}
                      </Link>
                    ) : (
                      <span className="text-white/80 font-semibold">{label}</span>
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
                  <MapPin size={12} className="text-green-400 shrink-0" />
                  {cityName}, {district} · Madhya Pradesh · FSSAI
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  FSSAI Registration &amp; Food License
                  <span className="block mt-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                    in {cityName}, MP
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert{" "}
                  <strong className="text-white">
                    Basic, State &amp; Central FSSAI registration
                  </strong>
                  ,{" "}
                  <strong className="text-white">
                    renewal &amp; modification
                  </strong>
                  , annual return filing, notice reply &amp; license verification
                  in{" "}
                  <strong className="text-white">
                    {cityName}, {district}, Madhya Pradesh
                  </strong>{" "}
                  — 100% online. Starting{" "}
                  <strong className="text-green-300">₹999</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "FSSAI Experts" },
                    { icon: Shield, text: "FoSCoS Certified" },
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
                      <Icon size={11} className="text-green-300 shrink-0" />{" "}
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
                    for FSSAI Help
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#14532d] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation{" "}
                    <ArrowRight size={15} className="shrink-0" />
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
                      FSSAI Services — {cityName}
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
                      <span className="text-[10px] font-bold text-green-300 shrink-0 ml-2">
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
                    <p className="text-green-300 text-2xl font-extrabold leading-tight">
                      ₹999
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
                { icon: BadgeCheck, label: "FSSAI Compliance Experts" },
                { icon: TrendingUp, label: "6,000+ Licenses Obtained" },
                { icon: Users, label: "3,500+ MP Food Businesses" },
                { icon: ClipboardList, label: "FoSCoS Portal Specialists" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-white/45 text-xs"
                >
                  <Icon size={11} className="text-green-400 shrink-0" />{" "}
                  {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f3faf4"
            />
          </svg>
        </section>

        {/* ════════ STATS RIBBON ════════ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "7–30 Days",  label: "License Timeline",    icon: Zap },
              { val: "4.9★",       label: "Average Rating",       icon: Star },
              { val: "₹999",       label: "Starting Price",       icon: IndianRupee },
              { val: "6",          label: "FSSAI Services",       icon: ClipboardList },
            ].map(({ val, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[#f0faf2] border border-[#d1fae5] text-center hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#14532d]/10 flex items-center justify-center">
                  <Icon size={15} className="text-[#14532d]" />
                </div>
                <p className="text-xl font-extrabold text-[#14532d]">{val}</p>
                <p className="text-[11px] text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ SERVICE CARDS WITH DEEP SEO CONTENT ════════ */}
        <section className="py-20 bg-[#f3faf4]">
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
                          FSSAI Service #
                          {String(idx + 1).padStart(2, "0")}
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
                      <h3 className="text-xs font-bold text-[#14532d] uppercase tracking-widest mb-4 flex items-center gap-2">
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
                          className="inline-flex items-center gap-2 bg-[#14532d] hover:bg-[#0f3d21] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97]"
                        >
                          Get Quote <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Features Sidebar */}
                    <div
                      className={`${svc.accentBg} rounded-2xl p-5 border ${svc.accentBorder}`}
                    >
                      <p className="text-[11px] font-bold text-[#14532d] uppercase tracking-widest mb-4 flex items-center gap-2">
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
                            className="inline-flex items-center gap-1.5 bg-[#14532d] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#0f3d21] transition-all"
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#14532d] bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#14532d] mt-4">
                Why {cityName} Food Businesses Choose Taxvio for FSSAI
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "FSSAI Compliance Specialists",
                  desc: `Every FSSAI application and compliance filing for ${cityName} food businesses is handled by professionals with deep expertise in FoSCoS portal processes, MP state food safety authority procedures, and FSS Act provisions.`,
                  color: "bg-green-100 text-green-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: `Share your documents on WhatsApp from ${cityName}. We prepare the application, upload to FoSCoS, track approval, and deliver your license certificate digitally — without any physical visits required.`,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: ClipboardList,
                  title: "Correct Category Every Time",
                  desc: `We assess your ${cityName} food business turnover, type, and operations to recommend the exact right FSSAI category — preventing costly over-licensing or penalty-attracting under-licensing.`,
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Renewal Reminders",
                  desc: `We track expiry dates for all FSSAI licenses issued through Taxvio and send reminders 60 days before expiry — ensuring ${cityName} food businesses never operate with an expired license.`,
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹999",
                  desc: `No hidden fees. Government fees, professional charges, and documentation costs are disclosed upfront. ${cityName} food business owners know exactly what they pay before we begin.`,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: MapPin,
                  title: `Serving ${cityName}, MP`,
                  desc: `We understand the ${region} food business landscape — from tribal food producers in the eastern districts to large soya processors in the Malwa plateau — and tailor FSSAI compliance accordingly.`,
                  color: "bg-sky-100 text-sky-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-5 bg-[#f3faf4] border border-[#d1fae5] rounded-2xl hover:border-[#14532d]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
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
        <section className="py-16 bg-[#f3faf4] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#14532d] bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#14532d] mt-3">
                How to Get FSSAI License in {cityName} with Taxvio
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Share Business Details",
                  desc: "Tell us your food business type, turnover, and product categories on WhatsApp — we determine the right FSSAI category",
                },
                {
                  step: "02",
                  title: "Document Preparation",
                  desc: "We prepare all required documents, cross-check completeness, and upload to FoSCoS portal on your behalf",
                },
                {
                  step: "03",
                  title: "Inspection Support",
                  desc: "For State and Central licenses, we guide you through inspection preparation and respond to any department queries",
                },
                {
                  step: "04",
                  title: "License Received",
                  desc: "FSSAI registration certificate or license issued and delivered digitally. Display number at premises immediately",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#14532d] text-white text-sm font-extrabold flex items-center justify-center mb-3">
                    {step}
                  </div>
                  <p className="font-bold text-gray-800 text-sm mb-1">
                    {title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  {step !== "04" && (
                    <ArrowRight
                      size={14}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 text-[#14532d] hidden md:block"
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#14532d] bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-2xl font-extrabold text-[#14532d] mt-3">
                FSSAI FAQs for {cityName} Food Businesses
              </h2>
            </div>
            <div
              className="space-y-3"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {[
                {
                  q: `Is FSSAI registration mandatory for all food businesses in ${cityName}?`,
                  a: `Yes — every food business operator in ${cityName} must have FSSAI registration or license regardless of size. This includes restaurants, cloud kitchens, home bakers, caterers, food manufacturers, distributors, and street vendors. Operating without FSSAI can result in penalties up to ₹5 lakh and imprisonment up to 6 months under the Food Safety and Standards Act, 2006.`,
                },
                {
                  q: `Which FSSAI license type do I need for my ${cityName} food business?`,
                  a: `The license type depends on your annual turnover: Basic Registration (turnover below ₹12 lakh) for petty food businesses like small vendors and home bakers in ${cityName}; State License (₹12 lakh to ₹20 crore) for restaurants, mid-sized manufacturers, and traders; Central License (above ₹20 crore or multi-state operations) for large manufacturers, importers, and e-commerce food operators. Taxvio assesses your specific ${cityName} business and recommends the correct category.`,
                },
                {
                  q: `What happens if FSSAI license expires for my ${cityName} food business?`,
                  a: `Operating with an expired FSSAI license in ${cityName} attracts a penalty of ₹100 per day under the FSS Act. The food safety officer can issue an improvement notice, suspension order, or initiate cancellation proceedings. You should file the renewal application at least 30 days before the license expiry date. If the license has already expired, Taxvio advises on condonation and re-registration procedures to regularise your compliance status.`,
                },
              ].map((f) => (
                <div
                  key={f.q}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <div className="px-5 py-4 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#14532d]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={11} className="text-[#14532d]" />
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold text-gray-800"
                        itemProp="name"
                      >
                        {f.q}
                      </p>
                      <div itemScope itemType="https://schema.org/Answer">
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
          <section className="py-14 bg-[#f3faf4] border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#14532d] to-green-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#14532d]">
                    {district} &amp; {region}
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
                    href={`/state/madhya-pradesh/fssai/${slugifyCity(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#14532d]/30 hover:bg-green-50 hover:text-[#14532d] hover:shadow-sm transition-all"
                  >
                    <MapPin
                      size={11}
                      className="text-[#14532d]/50 group-hover:text-[#14532d] shrink-0"
                    />
                    FSSAI in {c.name}
                    <ArrowRight
                      size={11}
                      className="text-gray-300 group-hover:text-[#14532d] group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                ))}
                <Link
                  href="/state/madhya-pradesh/fssai"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#14532d]/30 bg-[#d1fae5] px-4 py-2 text-sm font-bold text-[#14532d] hover:shadow-sm transition-all"
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
        <section className="py-16 px-6 bg-[#f3faf4]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#14532d] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14532d] to-[#052e16]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-green-400/10 blur-[80px] pointer-events-none" />
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
                  <MapPin size={11} className="text-green-300" />
                  Serving food businesses in {cityName}, {district} — 100%
                  online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Your FSSAI License in {cityName} — Fast &amp; Compliant
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  FSSAI registration, renewal, modification, annual return &
                  notice reply — all delivered online for food businesses in{" "}
                  {cityName}, {district}. Starting ₹999. Expert-assisted,
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
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#14532d] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
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