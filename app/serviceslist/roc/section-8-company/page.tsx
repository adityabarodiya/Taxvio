// app/serviceslist/roc/section-8-company/page.tsx

import type { Metadata } from "next";
import Section8Client from "./Section8Client";

const URL = "https://www.taxvio.in/serviceslist/roc/section-8-company";

export const metadata: Metadata = {
  title: "Section 8 Company Registration Online in India — NGO Registration | Taxvio",
  description:
    "Register a Section 8 non-profit company online with Taxvio: name approval, MOA & AOA drafting and Section 8 licence for NGOs and charitable institutions. CA-reviewed, fixed quote upfront.",
  keywords: [
    "section 8 company registration",
    "section 8 company registration online India",
    "NGO registration",
    "non profit company registration",
    "how to register a section 8 company",
    "section 8 company documents required",
    "section 8 company registration fees",
    "section 8 licence INC-12",
    "section 8 company vs trust vs society",
    "12A 80G registration for NGO",
    "CSR eligible NGO registration",
    "section 8 company compliance",
    "NGO registration Khatauli",
    "NGO registration Muzaffarnagar",
    "NGO registration Uttar Pradesh",
    "CA assisted section 8 company registration",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Section 8 Company Registration Online — NGO Registration | Taxvio",
    description:
      "Name approval, MOA & AOA drafting and Section 8 licence for NGOs and charitable institutions — handled end to end by a CA-led team.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Section 8 Company Registration Online | Taxvio",
    description: "CA-assisted Section 8 non-profit company registration in India: name approval, MOA & AOA and Section 8 licence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const FAQS = [
  { q: "What is a Section 8 company?", a: "A Section 8 company is a company incorporated under Section 8 of the Companies Act, 2013 for charitable or social purposes such as promoting commerce, art, science, sports, education, research, social welfare, religion, charity or protection of the environment. It applies its profits to its objects and does not pay dividends to its members." },
  { q: "Who should register a Section 8 company?", a: "NGOs, charitable institutions, foundations, trade or industry associations, sports and cultural bodies, and education or research organisations commonly choose it. It suits organisations that want a formal, regulated structure with strong credibility with donors and corporate funders." },
  { q: "Can a Section 8 company earn a profit?", a: "It can earn surplus, but the surplus must be applied only to promote its objects. It cannot distribute dividends to its members, and on winding up, remaining assets generally go to another entity with similar objects rather than to members." },
  { q: "What is the Section 8 licence?", a: "Before incorporation, the proposed company applies to the MCA for a licence confirming that it meets the conditions of Section 8. Once the licence is granted, the Certificate of Incorporation is issued. Taxvio prepares the licence application, objects statement and supporting documents." },
  { q: "How many directors and members are required?", a: "A private Section 8 company needs at least two directors and two members, and a public one needs more. At least one director must be resident in India. Our team confirms the exact requirement for your structure at the free consultation." },
  { q: "Which documents are needed for registration?", a: "The core documents are the directors' PAN and Aadhaar and proof of the registered office. You will also need photographs, email and mobile details, address proofs, proposed names, a statement of your objects, and estimated income and expenditure for the coming years." },
  { q: "How long does Section 8 registration take?", a: "Because a licence application is involved, it usually takes longer than a standard company incorporation. Timelines depend on completeness of documents and the Registrar's review. Queries or clarifications can add time, so a well-prepared file matters." },
  { q: "Does registration give income tax exemption automatically?", a: "No. Incorporation is separate from tax benefits. To claim exemptions and allow donors to claim deductions, the organisation applies separately for registration under Section 12A and approval under Section 80G of the Income Tax Act. We can help with both after incorporation." },
  { q: "Can a Section 8 company receive CSR funds or foreign donations?", a: "Corporate CSR funding typically requires the NGO to hold the prescribed registrations, including a CSR-1 registration. Receiving foreign contributions requires registration or prior permission under the FCRA. We can guide you on both once your company is incorporated." },
  { q: "What annual compliance does a Section 8 company have?", a: "It files annual financial statements and an annual return with the ROC, holds an AGM, completes director KYC, gets its accounts audited and files its income tax return. These are due even when activity is low, and late fees run daily." },
];

export default function Section8Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Section 8 Company Registration",
      serviceType: "Non-profit company incorporation",
      description:
        "Formation of non-profit Section 8 companies for charitable and social objectives, including name approval, MOA & AOA drafting and Section 8 licence.",
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
        { "@type": "ListItem", position: 3, name: "ROC / Company Law", item: "https://www.taxvio.in/serviceslist#roc" },
        { "@type": "ListItem", position: 4, name: "Section 8 Company Registration", item: URL },
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
      <Section8Client faqs={FAQS} />
    </>
  );
}