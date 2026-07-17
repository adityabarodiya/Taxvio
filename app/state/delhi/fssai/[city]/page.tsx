// app/state/delhi/fssai/[city]/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  CheckCircle, Clock, BadgeCheck, Star, Users, TrendingUp,
  FileText, IndianRupee, AlertCircle, BookOpen, ClipboardList,
  ChefHat, Search,
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
    title: `FSSAI Food License Registration in ${areaName}, Delhi | Taxvio`,
    description: `Expert FSSAI Basic/State/Central registration, license renewal, modification, annual return filing, notice reply, and license verification in ${areaName}, ${district}, Delhi. CA-assisted, 100% online, starting ₹1,499.`,
    keywords: [
      `FSSAI registration ${areaName}`,
      `FSSAI license ${areaName} Delhi`,
      `food license ${areaName}`,
      `FSSAI consultant ${areaName} ${district}`,
      `FSSAI renewal ${areaName}`,
      `FSSAI annual return ${areaName}`,
      `restaurant food license ${areaName}`,
      `FSSAI license verification ${areaName}`,
      `online FSSAI ${areaName} Delhi`,
      `CA FSSAI ${district}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/delhi/fssai/${city}` },
    openGraph: {
      title: `FSSAI Services in ${areaName}, Delhi | Taxvio`,
      description: `FSSAI registration, renewal, modification & annual return in ${areaName}, ${district}, Delhi — CA-assisted, from ₹1,499.`,
      url: `https://www.taxvio.in/state/delhi/fssai/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `FSSAI Services in ${areaName}, Delhi | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Service Content Generator ─────────────────────────────────────────── */
function getServiceContent(areaName: string, district: string, region: string) {
  return [

    /* ── 1. FSSAI Registration (Basic / State / Central) ── */
    {
      slug: "fssai-registration",
      title: `FSSAI Registration (Basic / State / Central) in ${areaName}`,
      price: "₹1,499",
      timeline: "7–30 Working Days",
      icon: "🍽️",
      gradient: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-100",
      accentText: "text-emerald-700",
      features: [
        "Eligibility assessment for your specific business type",
        "Basic Registration — turnover below ₹12 lakh",
        "State License — turnover ₹12 lakh to ₹20 crore",
        "Central License — turnover above ₹20 crore / importers",
        "Complete document preparation & FoSCoS filing",
        "Approval tracking with Delhi Food Safety Department",
      ],
      seoContent: `FSSAI registration is the mandatory first step before operating any food business in ${areaName}, ${district}, Delhi — covering restaurants, cafes, cloud kitchens, sweet shops, food manufacturers, grocery stores, caterers, and food importers/exporters alike. Operating without a valid FSSAI registration or license is a punishable offence under the Food Safety and Standards Act 2006, carrying penalties up to ₹5 lakh and imprisonment up to 6 months. The correct registration category depends entirely on annual turnover and business type: Basic Registration applies to petty food businesses in ${areaName} with turnover below ₹12 lakh — small vendors, home bakers, and single-counter snack stalls; State License applies to medium-scale operations between ₹12 lakh and ₹20 crore turnover, covering most established restaurants, multi-outlet caterers, and mid-size manufacturers; and Central License applies to large manufacturers, multi-state operators, and all food importers regardless of turnover.

Taxvio's FSSAI registration service for ${areaName} businesses begins with a precise eligibility assessment — many business owners default to the wrong category, either over-applying for Central License when State suffices, or under-applying for Basic Registration when actual turnover already crosses into State License territory. We then prepare the complete documentation set required on the FoSCoS portal — PAN, Aadhaar, business address proof specific to your ${areaName} premises, detailed food product/category list, and supporting declarations — and manage the application through to certificate issuance.

For ${areaName} businesses operating in commercial complexes, markets, or shared kitchen spaces, we also handle the nuances of premises documentation that frequently cause delays — rent agreements, NOC from property owners, and layout plans where required for State or Central License categories.`,
    },

    /* ── 2. FSSAI License Renewal ── */
    {
      slug: "fssai-renewal",
      title: `FSSAI License Renewal in ${areaName}`,
      price: "₹999",
      timeline: "7–15 Working Days",
      icon: "🔄",
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-100",
      accentText: "text-blue-700",
      features: [
        "Renewal eligibility check before expiry",
        "Updated business & premises documentation",
        "Online filing on FoSCoS portal",
        "Validity extension — 1, 3, or 5-year options",
        "Late renewal penalty avoidance guidance",
        "Status tracking until renewed certificate issuance",
      ],
      seoContent: `FSSAI license renewal in ${areaName}, ${district}, Delhi must be completed before the existing license or registration expires — typically required to be filed at least 30 days before the expiry date under FoSCoS rules. Missing this window does not automatically close your business, but it does expose you to a steep ₹100 per day late fee and, more importantly, leaves you technically operating without valid food safety authorisation in the interim — a risk that becomes immediately relevant if a food safety inspector visits your ${areaName} premises during the lapsed period or if a customer complaint triggers departmental scrutiny.

Taxvio's renewal service for ${areaName} food businesses tracks license expiry dates proactively and initiates the renewal process well ahead of the deadline — verifying that all existing business details (address, ownership, product categories) remain accurate, updating any details that have changed since the original registration or last renewal, and filing the renewal application on the FoSCoS portal with the appropriate validity period selected (businesses can renew for 1, 2, 3, or up to 5 years at a time, with longer validity periods reducing the administrative burden of frequent renewals).

For ${areaName} businesses that have already missed their renewal deadline, we assess the current compliance gap, calculate the applicable late fee, and expedite the renewal filing to minimise further accumulation of penalty charges. We also flag situations where a business's turnover has grown since the original registration — since renewal is also the natural checkpoint to verify whether an upgrade from Basic Registration to State License, or State to Central License, has become necessary based on current business scale.`,
    },

    /* ── 3. FSSAI License Modification ── */
    {
      slug: "fssai-modification",
      title: `FSSAI License Modification in ${areaName}`,
      price: "₹999",
      timeline: "10–20 Working Days",
      icon: "✏️",
      gradient: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-100",
      accentText: "text-violet-700",
      features: [
        "Core field modification — address, ownership, business name",
        "Non-core field updates — contact details, minor changes",
        "Addition of new food product categories",
        "Business structure change documentation",
        "Document upload & verification support",
        "Approval tracking with Delhi Food Safety Department",
      ],
      seoContent: `FSSAI license modification becomes necessary in ${areaName}, ${district}, Delhi whenever a registered food business changes any material detail recorded in its FSSAI certificate — and like GST or other regulatory registrations, failing to update these details creates a compliance mismatch that complicates renewals, inspections, and any future licensing action. The FSSAI framework distinguishes between core modifications (a change of registered address within ${areaName} or to a different Delhi location, change in business ownership or legal constitution, or change of business name) which typically require fresh document verification, and non-core modifications (updated contact phone number, email, or minor administrative details) which are processed more quickly.

For ${areaName} food businesses that have relocated their kitchen or outlet, expanded into new food categories not covered in the original registration (a sweet shop adding a bakery line, for instance, or a restaurant introducing packaged ready-to-eat products), or undergone a change in proprietorship or partnership structure, Taxvio handles the complete modification application — identifying which fields qualify as core versus non-core, preparing the appropriate supporting documents (updated address proof for the ${areaName} premises, revised product list, ownership transfer documentation), and submitting through the FoSCoS portal with tracking until departmental approval.

A particularly important modification scenario for growing ${areaName} businesses is the category upgrade — moving from Basic Registration to State License as turnover crosses ₹12 lakh, or from State to Central License as turnover crosses ₹20 crore. We monitor this threshold for ongoing clients and proactively initiate the upgrade modification before the business inadvertently operates outside its registered category.`,
    },

    /* ── 4. FSSAI Annual Return Filing ── */
    {
      slug: "fssai-annual-return",
      title: `FSSAI Annual Return Filing (Form D-1) in ${areaName}`,
      price: "₹1,499",
      timeline: "Due 31st May Annually",
      icon: "📅",
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-100",
      accentText: "text-amber-700",
      features: [
        "Form D-1 preparation for manufacturers & importers",
        "Production & sales quantity data compilation",
        "Online filing on FoSCoS before due date",
        "Compliance verification against FSSAI regulations",
        "Late filing penalty guidance & mitigation",
        "Year-on-year filing history tracking",
      ],
      seoContent: `FSSAI Annual Return filing in Form D-1 is a mandatory yearly compliance obligation for food manufacturers and importers operating in ${areaName}, ${district}, Delhi — distinct from, and in addition to, the periodic license renewal cycle. This return must be filed every year by May 31, covering the preceding financial year's production and import data, regardless of whether the FSSAI license itself is up for renewal that year. A significant number of ${areaName} food manufacturers overlook this requirement because it isn't tied to any visible certificate expiry date, making it one of the most commonly missed FSSAI compliance obligations.

The Annual Return requires manufacturers and importers in ${areaName} to declare the quantity of each food product category manufactured or imported during the financial year, cross-referenced against the categories listed in their FSSAI registration or license. This data serves the Food Safety Department's broader regulatory purpose of tracking production volumes against licensed capacity and product categories, and discrepancies between declared Annual Return figures and actual licensed scope can trigger compliance queries.

Taxvio's Annual Return service for ${areaName} manufacturers and importers involves compiling accurate production and sales data from your business records, mapping these figures correctly against your FSSAI product category schedule, preparing and filing Form D-1 on the FoSCoS portal before the May 31 deadline, and maintaining a clean filing history year over year — since a track record of timely Annual Return filing is a positive factor the department considers favourably during license renewal and any subsequent inspection. For businesses that have missed prior-year filings, we assess the applicable penalty exposure and file pending returns to bring compliance current.`,
    },

    /* ── 5. FSSAI Notice Reply & Compliance ── */
    {
      slug: "fssai-notice-reply",
      title: `FSSAI Notice Reply & Compliance in ${areaName}`,
      price: "₹1,999",
      timeline: "As Per Notice Timeline",
      icon: "⚖️",
      gradient: "from-rose-500 to-pink-600",
      accentBg: "bg-rose-50",
      accentBorder: "border-rose-100",
      accentText: "text-rose-700",
      features: [
        "Notice analysis & compliance gap identification",
        "Detailed reply drafting with supporting evidence",
        "Document compilation & submission",
        "Department coordination throughout resolution",
        "Inspection follow-up support if applicable",
        "Corrective action plan preparation",
      ],
      seoContent: `FSSAI notices in ${areaName}, ${district}, Delhi are issued by the Food Safety Department for a range of reasons — discrepancies identified during routine or surprise inspections, consumer complaints lodged against a specific food business, non-filing of Annual Returns, license category mismatches where actual business scale exceeds the registered category, or labelling and packaging violations under the FSS (Labelling & Display) Regulations. The appropriate response depends heavily on the specific nature of the notice, and a poorly drafted or delayed reply can escalate a minor compliance gap into licence suspension or cancellation proceedings.

Taxvio's FSSAI notice reply service for ${areaName} food businesses starts with a careful analysis of the exact allegation or query raised in the notice — distinguishing between procedural issues (missing Annual Return, expired license, incomplete modification) that require straightforward corrective filing, and substantive food safety concerns (hygiene violations, labelling non-compliance, product quality issues) that require a more detailed defence supported by corrective action evidence. We prepare a comprehensive written reply addressing each point raised, compile supporting documentation — license copies, inspection compliance records, corrective measures already implemented at the ${areaName} premises — and submit through the appropriate FoSCoS or departmental channel.

For notices arising from physical inspections of ${areaName} premises, we also assist in preparing for any follow-up inspection by reviewing the specific deficiencies cited and helping the business implement verifiable corrective actions before the inspection team returns. Throughout the process, we maintain direct coordination with the relevant Food Safety Officer until the notice is formally closed, protecting your business from escalation to suspension or cancellation proceedings.`,
    },

    /* ── 6. FSSAI License Search & Verification ── */
    {
      slug: "fssai-search",
      title: `FSSAI License Search & Verification in ${areaName}`,
      price: "Free Tool",
      timeline: "Instant",
      icon: "🔍",
      gradient: "from-teal-500 to-cyan-600",
      accentBg: "bg-teal-50",
      accentBorder: "border-teal-100",
      accentText: "text-teal-700",
      features: [
        "Instant FSSAI license number verification",
        "Business name & registration match check",
        "License validity & expiry status",
        "Registration category confirmation (Basic/State/Central)",
        "Vendor & supplier due-diligence support",
        "Consumer-facing food safety confidence check",
      ],
      seoContent: `FSSAI license search and verification helps businesses, distributors, and consumers in ${areaName}, ${district}, Delhi confirm that a food vendor, supplier, or restaurant's FSSAI license number is genuine, active, and registered to the claimed business name — an increasingly important due-diligence step as Delhi's food delivery, wholesale supply, and B2B catering markets continue to expand. Every valid FSSAI license displays a 14-digit number that should be printed on food packaging, displayed at the business premises, and listed on the entity's FoSCoS registration record.

Taxvio's FSSAI verification tool, used by ${areaName} business owners onboarding new suppliers, by distributors verifying retail partners, and by consumers checking a restaurant's compliance before ordering, instantly checks whether a given license number corresponds to an active, valid registration, confirms the registered business name matches what's displayed, and indicates the registration category (Basic, State, or Central) along with current validity status.

This verification step is especially valuable for ${areaName} businesses in the supply chain — a restaurant sourcing raw materials from a new vendor, a retailer onboarding a new packaged food brand, or a caterer subcontracting food preparation — since transacting with an unlicensed or improperly licensed food business creates downstream liability exposure if a food safety issue later arises. We recommend ${areaName} businesses verify FSSAI status not just at vendor onboarding but periodically thereafter, since licenses can lapse mid-relationship due to missed renewal, and continuing to source from an expired-license vendor exposes your own business to regulatory and reputational risk if discovered during an inspection or food safety incident investigation.`,
    },
  ];
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default async function DelhiFSSAIAreaPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city }  = await params;
  const areaData  = getAreaData(city);
  const areaName  = areaData?.name     ?? formatAreaDisplay(city);
  const district  = areaData?.district ?? areaName;
  const region    = areaData?.region   ?? "Delhi";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need FSSAI services in ${areaName}, ${district}, Delhi.`)}`;

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
    description: `Taxvio provides FSSAI registration, renewal, modification, annual return filing, notice reply, and license verification services in ${areaName}, ${district}, Delhi.`,
    areaServed: [{ "@type": "Place", name: areaName, containedInPlace: { "@type": "City", name: "Delhi" } }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2300" },
    priceRange: "₹999 - ₹1,999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",       item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "FSSAI Delhi", item: "https://www.taxvio.in/state/delhi/fssai" },
      { "@type": "ListItem", position: 3, name: district,     item: `https://www.taxvio.in/state/delhi/fssai#${district.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: `${areaName} FSSAI`, item: `https://www.taxvio.in/state/delhi/fssai/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `FSSAI Services in ${areaName}, Delhi`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.taxvio.in/state/delhi/fssai/${city}#${s.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is FSSAI registration mandatory for small food businesses in ${areaName}, Delhi?`,
        acceptedAnswer: { "@type": "Answer", text: `Yes. Every food business in ${areaName} — including small vendors, home bakers, food stalls, restaurants, and manufacturers — must obtain FSSAI registration or license under the Food Safety and Standards Act 2006, regardless of size. Businesses with turnover below ₹12 lakh need Basic Registration; above that, State or Central License applies based on scale.` },
      },
      {
        "@type": "Question",
        name: `How long does FSSAI registration take in ${areaName}?`,
        acceptedAnswer: { "@type": "Answer", text: `Basic Registration in ${areaName}, ${district} typically takes 7–10 working days. State License takes 15–20 working days, and Central License can take up to 30 working days depending on documentation completeness and Food Safety Department processing time.` },
      },
      {
        "@type": "Question",
        name: `What happens if I don't renew my FSSAI license on time in ${areaName}?`,
        acceptedAnswer: { "@type": "Answer", text: `Operating with an expired FSSAI license in ${areaName} is treated the same as operating without registration, exposing you to penalties up to ₹5 lakh and possible imprisonment under the FSS Act. Late renewal also attracts a ₹100 per day fee. Renewal should be filed at least 30 days before the existing license's expiry date.` },
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
                  { href: "/state/delhi/fssai", label: "FSSAI — Delhi" },
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
                  {areaName}, {district} · Delhi · FSSAI Services
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  FSSAI Food License
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {areaName}, Delhi
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert <strong className="text-white">FSSAI Basic, State &amp; Central registration</strong>,{" "}
                  <strong className="text-white">license renewal &amp; modification</strong>, Annual Return filing,
                  notice reply, and license verification in{" "}
                  <strong className="text-white">{areaName}, {district}, Delhi</strong> —
                  100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹1,499</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA-Assisted" },
                    { icon: Shield,     text: "100% Secure" },
                    { icon: Zap,        text: "7-Day Registration" },
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
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp for FSSAI Help
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

              {/* Right — service menu panel */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}>
                <div className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                  <div>
                    <p className="font-bold text-white text-sm">FSSAI Services — {areaName}</p>
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
                          {svc.title.replace(` in ${areaName}`, "").replace(" (Basic / State / Central)", "")}
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
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹1,499</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Basic Reg in</p>
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
                { icon: BadgeCheck,  label: "CA-Certified Team"      },
                { icon: TrendingUp,  label: "4,500+ Licenses Filed"  },
                { icon: Users,       label: "300+ Delhi Areas"       },
                { icon: IndianRupee, label: "Transparent Pricing"    },
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
              { val: "7–10 Days", label: "Basic Registration", icon: Zap          },
              { val: "4.9★",      label: "Average Rating",     icon: Star         },
              { val: "₹1,499",    label: "Starting Price",     icon: IndianRupee  },
              { val: "6",         label: "FSSAI Services",     icon: ClipboardList },
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
                          FSSAI Service #{String(idx + 1).padStart(2, "0")}
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

        {/* ════════ FSSAI LICENSE TYPE GUIDE ════════ */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Which License Do You Need?
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                FSSAI License Type Guide for {areaName} Food Businesses
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { type: "Basic Registration", turnover: "Below ₹12 Lakh/year", who: "Small vendors, home bakers, single-counter food stalls", color: "from-emerald-500 to-teal-600" },
                { type: "State License", turnover: "₹12 Lakh – ₹20 Crore/year", who: "Restaurants, caterers, mid-size manufacturers", color: "from-blue-500 to-indigo-600" },
                { type: "Central License", turnover: "Above ₹20 Crore/year", who: "Large manufacturers, importers, multi-state operators", color: "from-violet-500 to-purple-600" },
              ].map(({ type, turnover, who, color }) => (
                <div key={type} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className={`bg-gradient-to-r ${color} p-4 text-white`}>
                    <p className="font-extrabold text-sm">{type}</p>
                    <p className="text-white/80 text-xs mt-1">{turnover}</p>
                  </div>
                  <div className="p-4 bg-[#f8fbfd]">
                    <p className="text-xs text-gray-600">{who}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ WHY TAXVIO ════════ */}
        <section className="py-20 bg-[#f8fbfd] border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why {areaName} Food Businesses Choose Taxvio for FSSAI
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users,       title: "FSSAI Compliance Experts",       desc: `Every FSSAI filing for ${areaName} food businesses is handled by professionals who understand FoSCoS portal requirements and Delhi Food Safety Department processing patterns for ${district}.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap,         title: "100% Online — No Office Visit",   desc: `Share business details and documents on WhatsApp from ${areaName}. We handle all FoSCoS filings without requiring an office visit.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: ChefHat,     title: "Right Category, First Time",      desc: `We correctly assess Basic vs State vs Central License needs for ${areaName} businesses, avoiding costly re-applications from wrong category selection.`, color: "bg-amber-100 text-amber-700" },
                { icon: AlertCircle, title: "Proactive Renewal Tracking",      desc: `We monitor your FSSAI expiry date and file renewals 30+ days ahead — protecting ${areaName} businesses from the ₹100/day late renewal penalty.`, color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹999",  desc: `No hidden government fee surprises. Clear, upfront pricing for every FSSAI service in ${areaName} — quoted before we start.`, color: "bg-teal-100 text-teal-700" },
                { icon: Search,      title: "Free FSSAI Verification Tool",   desc: `Instantly verify any vendor's FSSAI license before transacting — protecting ${areaName} businesses from supply chain compliance risk.`, color: "bg-sky-100 text-sky-700" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="group flex items-start gap-4 p-5 bg-white border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                How to Get FSSAI Registration in {areaName}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Share Business Details", desc: "Send your business type, products, and premises proof on WhatsApp" },
                { step: "02", title: "Eligibility Assessment",  desc: "We determine the correct Basic/State/Central category for your business" },
                { step: "03", title: "FoSCoS Filing",           desc: "We prepare and submit your complete application on the FoSCoS portal" },
                { step: "04", title: "License Received",        desc: "Receive your FSSAI registration/license certificate digitally" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative p-5 bg-[#f8fbfd] rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
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
        <section className="py-16 bg-[#f8fbfd] border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">FAQ</span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">FSSAI FAQs for {areaName} Food Businesses</h2>
            </div>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: `Is FSSAI registration mandatory for small food businesses in ${areaName}?`,
                  a: `Yes. Every food business in ${areaName} — including small vendors, home bakers, food stalls, restaurants, and manufacturers — must obtain FSSAI registration or license under the FSS Act 2006, regardless of size. Businesses with turnover below ₹12 lakh need Basic Registration; above that, State or Central License applies based on scale.`,
                },
                {
                  q: `How long does FSSAI registration take in ${areaName}?`,
                  a: `Basic Registration in ${areaName}, ${district} typically takes 7–10 working days. State License takes 15–20 working days, and Central License can take up to 30 working days depending on documentation completeness and Food Safety Department processing time.`,
                },
                {
                  q: `What happens if I don't renew my FSSAI license on time in ${areaName}?`,
                  a: `Operating with an expired FSSAI license in ${areaName} is treated the same as operating without registration, exposing you to penalties up to ₹5 lakh and possible imprisonment under the FSS Act. Late renewal also attracts a ₹100 per day fee. Renewal should be filed at least 30 days before the existing license's expiry date.`,
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
          <section className="py-14 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">{district} &amp; {region}</p>
                  <h2 className="text-lg font-extrabold text-gray-800">FSSAI Services in Nearby Delhi Areas</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {regionAreas.map((c) => (
                  <Link key={c.name}
                    href={`/state/delhi/fssai/${slugifyArea(c.name)}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0" />
                    FSSAI in {c.name}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link href="/state/delhi/fssai"
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
                  Serving food businesses in {areaName}, {district} — 100% online
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Your FSSAI License in {areaName} Today
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  FSSAI registration, renewal, modification, Annual Return filing, and notice reply —
                  all delivered online for businesses in {areaName}, {district}. Starting ₹999. CA-assisted, same-day WhatsApp response.
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