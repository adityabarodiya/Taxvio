import type { Metadata } from "next";
import Script from "next/script";
import OPCFormationClient from "./OPCFormationClient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "One Person Company (OPC) Registration in India — Online, Starting ₹4,999 | Taxvio",
  description:
    "Register your One Person Company (OPC) online in 7–10 working days. Taxvio's CA & CS-assisted service covers name approval, MOA/AOA drafting, DIN/DSC processing, SPICe+ MCA filing, Certificate of Incorporation & PAN/TAN. Starting ₹4,999. Pan-India.",
  keywords: [
    "OPC registration India",
    "one person company registration online",
    "how to register OPC in India",
    "OPC vs private limited company",
    "one person company formation MCA",
    "OPC MOA AOA drafting",
    "OPC nominee director",
    "OPC conversion to private limited",
    "OPC annual compliance India",
    "CA assisted OPC registration",
    "solo founder company registration India",
    "OPC registration fee India",
    "Taxvio OPC registration",
    "one person company registration Muzaffarnagar",
    "OPC registration Meerut Delhi NCR",
    "OPC SPICe+ filing",
  ],
  alternates: { canonical: "https://www.taxvio.in/serviceslist/roc/opc-formation" },
  openGraph: {
    title: "One Person Company (OPC) Registration | Starting ₹4,999 | Taxvio",
    description:
      "CA-assisted OPC registration online — name approval, MOA/AOA, DIN/DSC, SPICe+ filing & Certificate of Incorporation. Starting ₹4,999. 7–10 days.",
    url: "https://www.taxvio.in/serviceslist/roc/opc-formation",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og/opc-formation.jpg", width: 1200, height: 630, alt: "OPC Registration Services India — Taxvio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OPC Registration in India | Taxvio",
    description: "Online One Person Company registration — CA & CS-assisted, starting ₹4,999. 7–10 working days.",
    images: ["https://www.taxvio.in/og/opc-formation.jpg"],
  },
  robots: { index: true, follow: true },
};

/* ─── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "One Person Company (OPC) Registration",
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
  serviceType: "OPC Registration",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Complete One Person Company registration — name approval, MOA & AOA drafting, DIN & DSC processing, SPICe+ MCA filing, nominee director arrangement, Certificate of Incorporation, and PAN/TAN. CA & CS-assisted, 100% online.",
  offers: {
    "@type": "Offer",
    price: "4999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2025-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "278",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
    { "@type": "ListItem", position: 3, name: "ROC Compliance", item: "https://www.taxvio.in/serviceslist/roc" },
    { "@type": "ListItem", position: 4, name: "OPC Registration", item: "https://www.taxvio.in/serviceslist/roc/opc-formation" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a One Person Company (OPC) in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A One Person Company (OPC) is a type of private limited company that can be formed with a single member and one director. Introduced by the Companies Act 2013, it gives solo entrepreneurs the benefits of limited liability and a separate legal identity without requiring a co-founder or second shareholder.",
      },
    },
    {
      "@type": "Question",
      name: "How long does OPC registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OPC registration through Taxvio takes 7–10 working days from the date all documents are submitted. This includes name approval via SPICe+, DIN/DSC processing, MOA/AOA drafting, MCA filing, and issuance of the Certificate of Incorporation.",
      },
    },
    {
      "@type": "Question",
      name: "Who can incorporate an OPC in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only a natural person who is an Indian citizen and resident in India (stayed for at least 182 days in the preceding calendar year) can incorporate an OPC. A person can be a member in only one OPC at a time. Minor, foreign nationals, and body corporates cannot be OPC members.",
      },
    },
    {
      "@type": "Question",
      name: "What is a nominee director in an OPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An OPC must appoint a nominee — another Indian citizen and resident — who will take over as the sole member if the original member becomes incapacitated, dies, or contracts any disease. The nominee does not have any rights over the OPC while the original member is alive and active. The nominee's written consent is filed with MCA at the time of incorporation.",
      },
    },
    {
      "@type": "Question",
      name: "When must an OPC mandatorily convert to a Private Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An OPC must compulsorily convert to a Private Limited Company when its paid-up capital exceeds ₹50 lakh OR its average annual turnover during the preceding three consecutive financial years exceeds ₹2 crore. The OPC must file the conversion application within 6 months of exceeding either threshold.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum capital required for an OPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no minimum paid-up capital requirement for an OPC under the Companies Act 2013. However, the maximum paid-up capital is ₹50 lakh — beyond which the OPC must mandatorily convert to a Private Limited Company.",
      },
    },
    {
      "@type": "Question",
      name: "What annual compliance is required for an OPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An OPC must file AOC-4 (financial statements) within 180 days of the financial year end, MGT-7A (annual return) within 60 days of the financial year end, and ITR-6 for income tax. An OPC with turnover below ₹2 crore is not required to hold an AGM or prepare a cash flow statement — lighter compliance than a standard Private Limited Company.",
      },
    },
    {
      "@type": "Question",
      name: "Can an OPC be converted to a Private Limited Company voluntarily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. An OPC can voluntarily convert to a Private Limited Company after completing 2 years from the date of incorporation, even if the turnover and capital thresholds have not been crossed. The conversion requires bringing in at least one more director and shareholder, passing a special resolution, and filing INC-6 with MCA.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function OPCFormationPage() {
  return (
    <>
      <Script id="opc-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="opc-bc-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="opc-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <OPCFormationClient />
    </>
  );
}