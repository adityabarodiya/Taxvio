// app/serviceslist/roc/private-limited-formation/page.tsx

import type { Metadata } from "next";
import PrivateLimitedClient from "./Privatelimitedclient";

const URL = "https://www.taxvio.in/serviceslist/roc/private-limited-formation";

export const metadata: Metadata = {
  title: "Private Limited Company Registration Online in India — CA-Assisted | Taxvio",
  description:
    "Register a private limited company online with Taxvio: name approval, MOA & AOA drafting, Certificate of Incorporation, PAN & TAN. CA-reviewed, fixed quote upfront, pan-India service.",
  keywords: [
    "private limited company registration",
    "private limited company registration online India",
    "pvt ltd company registration",
    "how to register a private limited company",
    "private limited company registration documents",
    "private limited company registration fees",
    "private limited company registration process",
    "private limited company eligibility",
    "SPICe+ incorporation",
    "MOA AOA drafting",
    "certificate of incorporation",
    "company registration Khatauli",
    "company registration Muzaffarnagar",
    "company registration Uttar Pradesh",
    "private limited vs LLP",
    "CA assisted company incorporation",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Private Limited Company Registration Online — CA-Assisted | Taxvio",
    description:
      "Name approval, MOA & AOA, Certificate of Incorporation, PAN & TAN — handled end to end by a CA-led team. Fixed quote upfront.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Limited Company Registration Online | Taxvio",
    description:
      "CA-assisted private limited company incorporation in India. Name approval, MOA & AOA, Certificate of Incorporation, PAN & TAN.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const FAQS = [
  { q: "What is the minimum capital required to register a private limited company?", a: "There is no minimum paid-up capital requirement. You choose an authorised capital that suits your plans. Government fees and stamp duty vary with that figure and with your state, so they are shown separately in your written quote." },
  { q: "How many directors and shareholders do I need?", a: "A private limited company needs at least two directors and at least two shareholders. The same people can be both. At least one director must be a resident in India, meaning present in India for 182 days or more during the previous financial year." },
  { q: "Can an NRI or foreign national be a director or shareholder?", a: "Yes, a foreign national or NRI can be a director or shareholder, provided at least one director is an Indian resident. Foreign shareholding is also subject to FEMA and foreign investment rules, so share this at the consultation stage." },
  { q: "Can I use my home as the registered office?", a: "Yes. You will need proof of the premises — an electricity or similar utility bill that is recent — and, if the property is not in your own name, a rent agreement and an NOC from the owner." },
  { q: "How long does private limited company registration take?", a: "When documents are complete and the proposed name is accepted at the first attempt, incorporation is usually completed in roughly one to two weeks. Name objections or Registrar queries add time, which is why we check names and paperwork before filing." },
  { q: "How much does it cost?", a: "The cost has two parts: Taxvio's professional fee and government charges (MCA fees and stamp duty), which depend on your authorised capital and state. You get an itemised written quote before we start, with no add-ons introduced later." },
  { q: "Will I receive PAN and TAN with incorporation?", a: "Yes. PAN and TAN are applied for through the same integrated SPICe+ filing, so they are issued along with your Certificate of Incorporation." },
  { q: "What happens if my company name is rejected?", a: "The Registrar can reject names that are identical or too similar to an existing company or a registered trademark. We pre-screen names to lower that risk and propose alternatives if needed." },
  { q: "Do I have to file returns if the company does no business?", a: "Yes. Annual ROC filings, director KYC, statutory audit and the income tax return are due even with zero turnover, and late fees accrue for every day of delay." },
  { q: "Is a private limited company better than an LLP or a proprietorship?", a: "It depends on your goals. A private limited company is usually preferred if you plan to raise equity investment or scale. An LLP or proprietorship can carry lighter compliance for smaller operations. Our CA team compares them for your situation during the free consultation." },
];

export default function PrivateLimitedFormationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Private Limited Company Registration",
      serviceType: "Company incorporation",
      description:
        "Complete incorporation services for private limited companies including name approval, MOA & AOA drafting, Certificate of Incorporation and PAN & TAN application.",
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
        { "@type": "ListItem", position: 4, name: "Private Limited Company Formation", item: URL },
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
      <PrivateLimitedClient faqs={FAQS} />
    </>
  );
}