// app/serviceslist/gst/gst-registration/page.tsx

import type { Metadata } from "next";
import GSTRegistrationClient from "./GSTRegistrationClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-registration";

export const metadata: Metadata = {
  title: "GST Registration Online in India — CA-Assisted, Quick & Hassle-Free | Taxvio",
  description:
    "Get GST registration online with Taxvio: eligibility check, document preparation, filing, GSTIN allotment support and post-registration guidance. CA-reviewed, fixed quote upfront, pan-India.",
  keywords: [
    "GST registration",
    "GST registration online India",
    "GST registration process",
    "GST registration documents required",
    "GST registration fees",
    "GST registration threshold limit",
    "who needs GST registration",
    "voluntary GST registration",
    "GST registration for small business",
    "GST registration for e-commerce sellers",
    "GST registration for proprietor",
    "GSTIN allotment",
    "composition scheme registration",
    "GST registration Khatauli",
    "GST registration Muzaffarnagar",
    "GST registration Uttar Pradesh",
    "CA assisted GST registration",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST Registration Online — CA-Assisted & Hassle-Free | Taxvio",
    description:
      "Eligibility consultation, document preparation, filing and GSTIN allotment support — handled end to end by a CA-led team. Fixed quote upfront.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Registration Online | Taxvio",
    description: "Quick, CA-assisted GST registration in India: eligibility check, documents, filing, GSTIN support and post-registration guidance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const FAQS = [
  { q: "Who needs to register for GST in India?", a: "Registration is mandatory when a business's aggregate turnover crosses the prescribed threshold, which is generally ₹40 lakh for suppliers of goods (₹20 lakh in some states) and ₹20 lakh for suppliers of services (₹10 lakh in special category states). Certain businesses must register regardless of turnover, such as those making inter-state supplies of goods or selling through e-commerce operators." },
  { q: "Can I take GST registration voluntarily?", a: "Yes. A business below the threshold can register voluntarily. Many do so to claim input tax credit, to sell to bigger customers who need a GSTIN, or to sell across states and on online marketplaces. Once registered, all GST obligations apply, including return filing." },
  { q: "Which documents are required for GST registration?", a: "Typically the PAN and Aadhaar of the proprietor or partners, a photograph, proof of the business address, bank account details, and constitution documents such as a partnership deed or certificate of incorporation for firms and companies. Our checklist on this page lists what applies to your business type." },
  { q: "How long does GST registration take?", a: "When documents are in order and Aadhaar authentication succeeds, registration is often granted within roughly three to seven working days. If the tax officer raises a query or a physical verification is required, it can take longer. We respond to queries on your behalf." },
  { q: "What does GST registration cost?", a: "There is no government fee for GST registration. The cost is Taxvio's professional fee, which we quote in writing before we start. It depends on your constitution, number of places of business and complexity." },
  { q: "Can I use my home as the business address?", a: "Yes. You can use your residence as the principal place of business with proof such as a recent electricity bill or property tax receipt, and a consent letter or NOC if the property is owned by someone else, along with a rent agreement if rented." },
  { q: "Do I need a separate GST registration for each state?", a: "Yes. GST registration is state-wise and PAN-based. If you supply from more than one state, you generally need a separate registration in each state where you have a place of business. Multiple places of business in one state can be added to a single registration." },
  { q: "What is the composition scheme?", a: "The composition scheme lets eligible small taxpayers pay tax at a low fixed rate on turnover and file simpler returns. The trade-off is that you cannot claim input tax credit or make certain supplies, so it does not suit everyone. We help you choose between regular and composition registration." },
  { q: "Do I need to file returns after getting a GSTIN?", a: "Yes. A registered taxpayer must file periodic returns, such as GSTR-1 and GSTR-3B or the quarterly scheme where eligible, even when there is no business in a period. Late filing attracts late fees and interest, so many clients take our monthly return service." },
  { q: "What happens if I don't register when I should?", a: "Operating without a required registration can lead to a penalty, generally the tax due with a minimum amount, plus tax and interest on past supplies, and higher penalties in cases of deliberate evasion. It is far cheaper to register on time." },
  { q: "Why do GST applications get rejected or queried?", a: "The usual reasons are mismatched names across PAN, Aadhaar and bank records, weak or inconsistent address proof, an incorrectly described business activity, and failed Aadhaar authentication. Careful preparation and a CA review before filing reduce these risks." },
  { q: "Will I get help after the GSTIN is issued?", a: "Yes. Our post-registration guidance covers how to issue compliant invoices, display the GSTIN, link your bank account, and plan your return filing. We can also handle your monthly or quarterly returns." },
];

export default function GSTRegistrationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST Registration",
      serviceType: "GST registration",
      description:
        "End-to-end GST registration services including eligibility assessment, documentation, and approval support.",
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
        { "@type": "ListItem", position: 4, name: "GST Registration", item: URL },
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
      <GSTRegistrationClient faqs={FAQS} />
    </>
  );
}