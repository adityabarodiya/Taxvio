// app/serviceslist/roc/opc-formation/page.tsx

import type { Metadata } from "next";
import OPCFormationClient from "./OPCFormationClient";

const URL = "https://www.taxvio.in/serviceslist/roc/opc-formation";

export const metadata: Metadata = {
  title: "One Person Company (OPC) Registration Online in India — CA-Assisted | Taxvio",
  description:
    "Register a One Person Company online with Taxvio: name approval, MOA & AOA drafting, incorporation certificate and complete MCA compliance for solo entrepreneurs. Fixed quote upfront.",
  keywords: [
    "OPC registration",
    "one person company registration",
    "OPC registration online India",
    "how to register a one person company",
    "OPC registration documents",
    "OPC registration fees",
    "OPC eligibility nominee",
    "OPC vs private limited company",
    "OPC vs proprietorship",
    "OPC annual compliance",
    "solo entrepreneur company registration",
    "OPC registration Khatauli",
    "OPC registration Muzaffarnagar",
    "OPC registration Uttar Pradesh",
    "CA assisted OPC registration",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "One Person Company (OPC) Registration Online — CA-Assisted | Taxvio",
    description:
      "Name approval, MOA & AOA drafting and incorporation certificate for solo entrepreneurs — handled end to end by a CA-led team.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OPC Registration Online | Taxvio",
    description: "CA-assisted One Person Company registration in India: name approval, MOA & AOA, incorporation certificate and compliance support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const FAQS = [
  { q: "What is a One Person Company (OPC)?", a: "An OPC is a company with a single person as its member and director. It is a separate legal entity under the Companies Act, 2013, so the founder gets limited liability and a company identity without needing a partner or a second shareholder." },
  { q: "Who can register an OPC?", a: "An OPC can be incorporated by a natural person who is an Indian citizen and meets the residency requirement under the Companies Act and its rules. Eligibility conditions, including those for NRIs, are updated from time to time, so our CA team confirms your position at the free consultation." },
  { q: "What is a nominee and why is one required?", a: "Because an OPC has only one member, the founder must name a nominee in the MOA. The nominee steps in if the member dies or becomes incapacitated. The nominee must give written consent, and the founder can change the nominee later through a prescribed filing." },
  { q: "Is there a minimum capital requirement?", a: "No minimum paid-up capital is prescribed. You choose an authorised capital to suit your plans. MCA fees and stamp duty depend on that figure and on your state, and are shown separately in your quote." },
  { q: "Which documents are needed for OPC registration?", a: "You need the director's PAN and Aadhaar, a photograph, email ID and mobile number, address proof, proof of the registered office, two or more proposed names, and the nominee's identity and address details with consent." },
  { q: "How long does OPC registration take?", a: "When documents are complete and the name is accepted on the first attempt, registration is usually completed in roughly one to two weeks. Name objections or Registrar queries add time, which is why we pre-check names and paperwork." },
  { q: "Is an OPC better than a proprietorship?", a: "An OPC gives you limited liability, a separate legal identity and better credibility with banks and clients. A proprietorship has lighter compliance but unlimited personal liability. If your business carries risk or deals with larger customers, an OPC is often worth the extra compliance." },
  { q: "Can an OPC raise funding or add more owners later?", a: "An OPC cannot have more than one member while it remains an OPC, and it cannot raise equity from investors in that form. When you want partners or investors, it can be converted into a private limited company. Ask us for the conversion requirements that apply to your case." },
  { q: "What annual compliance does an OPC have?", a: "An OPC files annual financial statements and an annual return with the ROC, completes director KYC, appoints an auditor and files its income tax return, even with zero turnover. It enjoys certain relaxations compared with other companies, such as no AGM requirement." },
  { q: "Is an OPC suitable for a freelancer or consultant?", a: "Often yes. Freelancers, consultants and small service businesses use an OPC to contract with larger clients under a company name and to separate personal assets from business risk. Our CA team can compare an OPC with your other options." },
];

export default function OPCFormationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "One Person Company (OPC) Registration",
      serviceType: "Company incorporation",
      description:
        "OPC registration services for solo entrepreneurs with complete MCA compliance, including name approval, MOA & AOA drafting and incorporation certificate.",
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
        { "@type": "ListItem", position: 4, name: "One Person Company (OPC) Registration", item: URL },
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
      <OPCFormationClient faqs={FAQS} />
    </>
  );
}