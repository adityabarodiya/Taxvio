import type { Metadata } from "next";
import Script from "next/script";
import LLPFormationClient from "./Llpformationclient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "LLP Registration in India — Online, Starting ₹5,999 | Taxvio",
  description:
    "Register your Limited Liability Partnership (LLP) online in 7–10 working days. Taxvio's CA & CS-assisted service covers name reservation, LLP agreement drafting, DPIN processing, MCA incorporation certificate & PAN/TAN. Starting ₹5,999. Pan-India.",
  keywords: [
    "LLP registration India",
    "limited liability partnership registration online",
    "how to register LLP in India",
    "LLP formation MCA",
    "LLP agreement drafting India",
    "DPIN registration",
    "LLP vs private limited company",
    "LLP annual compliance India",
    "Form 11 Form 8 LLP filing",
    "LLP incorporation certificate India",
    "LLP registration fee India",
    "CA assisted LLP registration",
    "Taxvio LLP registration",
    "LLP registration Muzaffarnagar",
    "LLP registration Meerut",
    "LLP registration Delhi NCR",
  ],
  alternates: { canonical: "https://www.taxvio.in/serviceslist/roc/llp-formation" },
  openGraph: {
    title: "LLP Registration in India | Starting ₹5,999 | Taxvio",
    description:
      "CA-assisted LLP registration online — name reservation, LLP agreement, DPIN, MCA filing & incorporation certificate. Starting ₹5,999.",
    url: "https://www.taxvio.in/serviceslist/roc/llp-formation",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og/llp-formation.jpg", width: 1200, height: 630, alt: "LLP Registration Services India — Taxvio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLP Registration in India | Taxvio",
    description: "Online LLP registration — CA & CS-assisted, starting ₹5,999. 7–10 working days.",
    images: ["https://www.taxvio.in/og/llp-formation.jpg"],
  },
  robots: { index: true, follow: true },
};

/* ─── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LLP Registration",
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
  serviceType: "LLP Registration",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Complete LLP registration — name reservation, DPIN processing, LLP agreement drafting, MCA FiLLiP filing, incorporation certificate, and PAN/TAN application. CA & CS-assisted, 100% online.",
  offers: {
    "@type": "Offer",
    price: "5999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2025-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
    { "@type": "ListItem", position: 3, name: "ROC Compliance", item: "https://www.taxvio.in/serviceslist/roc" },
    { "@type": "ListItem", position: 4, name: "LLP Registration", item: "https://www.taxvio.in/serviceslist/roc/llp-formation" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does LLP registration take in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LLP registration through Taxvio typically takes 7–10 working days with all documents in order. This covers name reservation via RUN-LLP, DPIN processing, LLP agreement drafting, FiLLiP form filing on MCA, and delivery of the Certificate of Incorporation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum number of partners required to form an LLP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An LLP requires a minimum of 2 designated partners. There is no upper limit on the total number of partners. At least 2 designated partners must be individuals, and at least one of them must be a resident of India (present in India for at least 182 days in the previous calendar year).",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an LLP and a Private Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An LLP (Limited Liability Partnership) is governed by the LLP Act 2008, offers lower compliance burden (no mandatory AGM, no mandatory audit below ₹40 lakh turnover), and cannot raise equity investment. A Private Limited Company is governed by the Companies Act 2013, has higher compliance requirements, but can raise equity funding through shares, issue ESOPs, and has higher credibility with large corporate clients and investors.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Designated Partner Identification Number (DPIN)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A DPIN (Designated Partner Identification Number) is a unique identification number allotted to designated partners of an LLP by MCA. It is similar to a Director Identification Number (DIN) for company directors. If a person already holds a DIN, the same number serves as the DPIN — no separate application is needed.",
      },
    },
    {
      "@type": "Question",
      name: "What annual compliance is required for an LLP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An LLP must file: Form 11 (annual return) by 30 May each year, and Form 8 (statement of accounts and solvency) by 30 October each year. An LLP with turnover above ₹40 lakh or contribution above ₹25 lakh must get its accounts audited by a CA. The LLP must also file ITR-5 for income tax compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can a body corporate (company) be a partner in an LLP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A body corporate — including a Private Limited Company, Public Limited Company, or foreign company — can be a partner in an LLP. However, a body corporate cannot be a designated partner in an LLP. Designated partners must be individuals.",
      },
    },
    {
      "@type": "Question",
      name: "What is the LLP agreement and why is it important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LLP agreement is the foundational document governing the LLP — defining partner rights, obligations, profit-sharing ratios, capital contributions, decision-making processes, and dispute resolution mechanisms. It must be filed with MCA within 30 days of incorporation. A poorly drafted LLP agreement creates operational conflicts and compliance issues. Taxvio drafts customised LLP agreements covering all essential and dispute-prevention clauses.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late filing of LLP annual returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The penalty for late filing of Form 11 or Form 8 is ₹100 per day per form, with no upper limit. Unlike companies, LLP partners are not personally disqualified for non-filing, but persistent non-compliance can lead to the LLP being declared defunct and struck off by MCA, with partners facing legal consequences.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function LLPFormationPage() {
  return (
    <>
      <Script
        id="llp-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="llp-bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="llp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LLPFormationClient />
    </>
  );
}