// app/serviceslist/gst/gst-amendment/page.tsx

import type { Metadata } from "next";
import GSTAmendmentClient from "./GSTAmendmentClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-amendment";

export const metadata: Metadata = {
  title: "GST Amendment Services — Change Address, Name & Details in GST Registration | Taxvio",
  description:
    "Update your GST registration with CA support: core and non-core field amendments, address and business name changes, document upload and approval tracking. Fixed quote upfront, pan-India online service.",
  keywords: [
    "GST amendment","GST registration amendment","change address in GST registration","change business name in GST",
    "GST core field amendment","GST non-core field amendment","add additional place of business GST","change mobile number email GST",
    "GST amendment documents required","GST amendment time limit","GST amendment Khatauli","GST amendment Muzaffarnagar",
    "GST amendment Uttar Pradesh","CA assisted GST amendment",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST Amendment / Update Services | Taxvio",
    description: "Core and non-core GST registration changes, document upload and approval tracking by a CA-led team.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GST Amendment Services | Taxvio", description: "Change address, name and contact details in your GST registration with professional support." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "What is a GST amendment?", a: "A GST amendment is an update to the details in your GST registration, such as business name, address, partners or directors, contact details or business activity. It is filed on the GST portal and, for some fields, needs approval from the tax officer." },
  { q: "What is the difference between core and non-core fields?", a: "Core fields, such as legal name of the business, principal place of business and additional places of business, generally require the officer's approval. Non-core fields, such as contact details, are generally updated without approval. Our CA confirms how each change is treated." },
  { q: "Is there a time limit to amend my registration?", a: "Changes are generally required to be reported within a prescribed period, commonly fifteen days of the change. Because the period and treatment depend on the field, please confirm with our team as soon as a change happens." },
  { q: "How long does approval take?", a: "For core fields, the officer reviews the application and may ask for clarification. Timelines vary by case and by tax office, so we track the application and respond to queries on your behalf." },
  { q: "Which documents are needed for an address change?", a: "Typically proof of the new address such as a recent electricity bill or rent agreement with the owner's consent, along with your GSTIN and identity details. Our checklist on this page lists what applies to your change." },
  { q: "Can I change my PAN or state through amendment?", a: "No. GST registration is tied to PAN and state. If you move your business to another state or the PAN changes, a fresh registration is generally needed rather than an amendment." },
  { q: "Can I change my business name?", a: "Yes. A change of trade name and a change of legal name are both possible, and they are treated differently. A change of legal name usually needs supporting documents and the officer's approval." },
  { q: "How do I add or remove a partner or director?", a: "Changes to partners, directors or authorised signatories are made through the amendment application with the relevant documents, such as the revised deed, board resolution and photographs. Core-field rules may apply." },
  { q: "What happens if I do not update my details?", a: "Outdated details can lead to rejected filings, notices at the old address, supplier and buyer mismatches and possible penalties for failing to report changes. It is better to update promptly." },
  { q: "Will my GSTIN change after the amendment?", a: "No. Your GSTIN stays the same. A revised registration certificate with the updated details is generated once the amendment is approved." },
  { q: "Can you also update my returns and invoices after the change?", a: "Yes. We guide you on updating invoice templates, displaying the new details and filing returns with the correct information after approval." },
];

export default function GSTAmendmentPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST Amendment / Update",
      serviceType: "GST registration amendment",
      description:
        "Update GST registration details such as address, business name and contact details with proper filing support.",
      url: URL,
      areaServed: { "@type": "Country", name: "India" },
      provider: {
        "@type": "ProfessionalService",
        name: "Taxvio",
        url: "https://www.taxvio.in",
        address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
        { "@type": "ListItem", position: 3, name: "GST Services", item: "https://www.taxvio.in/serviceslist#gst" },
        { "@type": "ListItem", position: 4, name: "GST Amendment / Update", item: URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      <GSTAmendmentClient faqs={FAQS} />
    </>
  );
}