// app/city/gst-services/[city]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allCitySlugs,
  cityHref,
  districtCitySlug,
  subDistrictCitySlug,
} from "@/data/city-slugs";
import { resolveCity, type CityLocation } from "@/data/city-lookup";
import { gstCategory } from "@/data/gst-services";
import { getServiceSeoContent } from "@/data/gst-service-seo-content";
import { GST_STATE_CODES } from "@/data/gst-state-codes";
import GstCityClient from "./GstCityClient";

const SITE = "https://taxvio.in";

// output: 'export' needs every page known at build time; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allCitySlugs.map((city) => ({ city }));
}

type Props = { params: Promise<{ city: string }> };

/* ---------- helpers ---------- */

// "The Dadra and Nagar Haveli and Daman and Diu" reads badly mid-sentence
const stateName = (loc: CityLocation) => loc.state.name.replace(/^The /, "");

/** Text that fills {location} in the SEO copy: "Khatauli, Muzaffarnagar" or "Muzaffarnagar" */
const locationLabel = (loc: CityLocation) =>
  loc.kind === "district" ? loc.name : `${loc.name}, ${loc.district.name}`;

function getLocation(slug: string): CityLocation {
  const loc = resolveCity(slug);
  if (!loc) notFound();
  return loc;
}

/* ---------- metadata ---------- */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  const label = locationLabel(loc);
  const state = stateName(loc);
  const url = `${SITE}${cityHref(loc.slug)}`;
  // districts: "Name, State"; sub-districts: "Name, District" (state is in the description)
  const title =
    loc.kind === "district"
      ? `GST Services in ${loc.name}, ${state} | Taxvio`
      : `GST Services in ${label} | Taxvio`;
  const description = `CA-assisted GST registration, return filing, refund, LUT, notice reply and ${
    gstCategory.services.length - 5
  }+ more GST services in ${label}, ${state}.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "Taxvio" },
  };
}

/* ---------- page ---------- */

export default async function GstServicesCityPage({ params }: Props) {
  const { city } = await params;
  const loc = getLocation(city);
  const label = locationLabel(loc);
  const state = stateName(loc);
  const gstCode = GST_STATE_CODES[loc.state.slug];
  const services = gstCategory.services;
  const pageUrl = `${SITE}${cityHref(loc.slug)}`;

  const intro =
    loc.kind === "district"
      ? `${loc.name} is a district in ${state} with ${loc.district.subDistricts.length} tehsils, talukas or sub-districts.`
      : `${loc.name} is a tehsil or sub-district in ${loc.district.name} district, ${state}.`;

  // other areas to link to (internal linking)
  const relatedLinks =
    loc.kind === "district"
      ? loc.district.subDistricts.map((sub) => ({
          key: String(sub.code),
          name: sub.name,
          href: cityHref(subDistrictCitySlug(loc.state, loc.district, sub)),
        }))
      : loc.district.subDistricts
          .filter((sub) => sub.code !== loc.subDistrict?.code)
          .map((sub) => ({
            key: String(sub.code),
            name: sub.name,
            href: cityHref(subDistrictCitySlug(loc.state, loc.district, sub)),
          }));
  const districtHref = cityHref(districtCitySlug(loc.state, loc.district));

  const faqs = [
    {
      q: `Do I need GST registration for my business in ${label}?`,
      a: `Registration is mandatory when your aggregate annual turnover crosses ₹40 lakh for goods or ₹20 lakh for services (lower limits apply in some special category states), and in some cases regardless of turnover, such as inter-state supply of goods or selling through e-commerce platforms. Many small businesses in ${state} also register voluntarily to claim input tax credit.`,
    },
    {
      q: `Can I get GST services in ${label} without visiting an office?`,
      a: `Yes. GST work is done online on the GST portal, so you can share your documents through our contact form or by email and our CA-assisted team handles the filing for businesses in ${label} and across ${state}.`,
    },
    {
      q: "How long does GST registration take?",
      a: "When the application and documents are complete and Aadhaar authentication is done, approval usually comes in about seven working days. If the officer raises a query, the time extends until it is answered.",
    },
    {
      q: "Is there a government fee for GST registration?",
      a: "No. The GST portal does not charge a fee for registration. Any fee you pay is for professional assistance.",
    },
    {
      q: "Which GST returns will I have to file?",
      a: "Regular taxpayers file GSTR-1 (sales) and GSTR-3B (summary and tax payment) every month, or quarterly under the QRMP scheme if eligible. Composition taxpayers file a quarterly payment statement and an annual return, and an annual return GSTR-9 applies to regular taxpayers above the notified turnover.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "GST Services", item: `${SITE}/city/gst-services` },
          { "@type": "ListItem", position: 3, name: label, item: pageUrl },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Taxvio",
        url: SITE,
        description: `CA-assisted GST registration, return filing and compliance services for businesses in ${label}, ${state}.`,
        areaServed: { "@type": "AdministrativeArea", name: `${label}, ${state}` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `GST services in ${label}`,
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.shortDescription },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  // Everything the client needs, as plain serialisable data.
  const serviceViews = services.map((s) => ({
    slug: s.slug,
    title: s.title,
    shortDescription: s.shortDescription,
    features: [...s.features],
    documentsRequired: [...s.documentsRequired],
    idealFor: [...s.idealFor],
    sections: getServiceSeoContent(s.slug, label).map((sec) => ({ heading: sec.heading, body: sec.body })),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <GstCityClient
        locName={loc.name}
        label={label}
        state={state}
        kind={loc.kind}
        districtName={loc.district.name}
        districtHref={districtHref}
        subDistrictCount={loc.district.subDistricts.length}
        gstCode={gstCode ?? null}
        intro={intro}
        services={serviceViews}
        faqs={faqs}
        related={relatedLinks}
      />
    </>
  );
}