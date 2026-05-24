import type { Metadata } from "next";
import Script from "next/script";
import PrivateLimitedClient from "./Privatelimitedclient";

/* ─── SEO Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Private Limited Company Registration in India — Online, Starting ₹6,999 | Taxvio",
  description:
    "Register your Private Limited Company online in 7–10 working days. Taxvio's CA-assisted service covers name approval, MOA/AOA drafting, DIN/DSC, SPICe+ filing, Certificate of Incorporation & PAN/TAN. Starting ₹6,999.",
  keywords: [
    "private limited company registration India",
    "pvt ltd company registration online",
    "how to register private limited company India",
    "company registration SPICe+",
    "MCA company incorporation",
    "private limited company formation cost India",
    "online company registration CA assisted",
    "MOA AOA drafting India",
    "DIN DSC company registration",
    "certificate of incorporation India",
    "Taxvio company registration",
  ],
  alternates: { canonical: "https://www.taxvio.in/serviceslist/roc/private-limited-formation" },
  openGraph: {
    title: "Private Limited Company Registration | Taxvio",
    description:
      "Register your Pvt Ltd company online in 7–10 days. CA-assisted, all-inclusive, starting ₹6,999.",
    url: "https://www.taxvio.in/serviceslist/roc/private-limited-formation",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og-pvtltd.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Limited Company Registration | Taxvio",
    description: "Online Pvt Ltd incorporation — CA-assisted, starting ₹6,999.",
  },
  robots: { index: true, follow: true },
};

/* ─── JSON-LD Schemas ────────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Private Limited Company Registration",
  provider: {
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: "+918937980366",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  serviceType: "Company Registration",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Complete Private Limited Company incorporation — name approval, MOA/AOA drafting, DIN/DSC processing, SPICe+ filing, Certificate of Incorporation, and PAN/TAN application. 100% online, CA-assisted.",
  offers: {
    "@type": "Offer",
    price: "6999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2025-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "486",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
    { "@type": "ListItem", position: 3, name: "ROC Compliance", item: "https://www.taxvio.in/serviceslist/roc" },
    { "@type": "ListItem", position: 4, name: "Private Limited Company Registration", item: "https://www.taxvio.in/serviceslist/roc/private-limited-formation" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does Private Limited Company registration take in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With all documents in order, Taxvio completes the incorporation process in 7–10 working days. This includes name approval via SPICe+, DIN/DSC processing, MCA verification, and issuance of the Certificate of Incorporation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum capital required to start a Private Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no minimum paid-up capital requirement for a Private Limited Company under the Companies Act 2013. You can start with as little as ₹1 as authorised capital, though most companies start with ₹1 lakh for practical banking and operational purposes.",
      },
    },
    {
      "@type": "Question",
      name: "How many directors are required for a Private Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Private Limited Company requires a minimum of 2 directors and can have a maximum of 15. At least one director must be an Indian resident — meaning they must have stayed in India for at least 182 days in the previous calendar year.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for Private Limited Company registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need: PAN and Aadhaar of all directors and shareholders, passport-size photographs, proof of registered office address (utility bill not older than 2 months), NOC from office owner (if rented), and Digital Signature Certificates (DSC) for all directors. Taxvio assists with DSC procurement as part of the package.",
      },
    },
    {
      "@type": "Question",
      name: "Can a foreign national be a director in an Indian Private Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Foreign nationals can be directors in an Indian Private Limited Company. They need a valid passport, a DIN (Director Identification Number), and a DSC. However, at least one director must be an Indian resident. Foreign nationals do not need a visa to become a director, but they do for actual business operations in India.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between authorised capital and paid-up capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Authorised capital is the maximum amount of share capital a company is registered to issue. Paid-up capital is the amount actually paid by shareholders for the shares they hold. A company with ₹10 lakh authorised capital may have only ₹1 lakh paid-up capital if only 10% of shares have been issued and paid for.",
      },
    },
    {
      "@type": "Question",
      name: "What annual compliance is required after incorporating a Private Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual compliance for a Pvt Ltd company includes: 4 board meetings per year, 1 Annual General Meeting (AGM) within 6 months of financial year end, filing AOC-4 (financial statements) within 30 days of AGM, filing MGT-7 (annual return) within 60 days of AGM, statutory audit, income tax return (ITR-6), and TDS returns if applicable.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert my sole proprietorship or partnership to a Private Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A sole proprietorship or partnership firm can be converted into a Private Limited Company through a slump sale or business transfer agreement. The process involves incorporating a new Pvt Ltd company and then transferring the business assets and liabilities. Taxvio's CA team handles both the incorporation and the conversion documentation.",
      },
    },
  ],
};

/* ─── Page (Server Component) ───────────────────────────────────────────────── */
export default function PrivateLimitedFormationPage() {
  return (
    <>
      <Script
        id="pvtltd-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="pvtltd-bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="pvtltd-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PrivateLimitedClient />
    </>
  );
}