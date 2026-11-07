// app/serviceslist/roc/llp-formation/page.tsx

import type { Metadata } from "next";
import LlpFormationClient from "./Llpformationclient";

const URL = "https://www.taxvio.in/serviceslist/roc/llp-formation";

export const metadata: Metadata = {
  title: "LLP Registration Online in India — CA-Assisted Services | Taxvio",
  description:
    "Register your LLP online with Taxvio: name reservation, LLP agreement drafting, incorporation certificate and ROC compliance support. CA-reviewed, fixed quote upfront, pan-India service.",
  keywords: [
    "LLP registration",
    "LLP registration online India",
    "limited liability partnership registration",
    "how to register an LLP",
    "LLP registration documents",
    "LLP registration fees",
    "LLP registration process",
    "LLP agreement drafting",
    "LLP vs private limited company",
    "LLP annual compliance Form 11 Form 8",
    "FiLLiP incorporation",
    "LLP registration Khatauli",
    "LLP registration Muzaffarnagar",
    "LLP registration Uttar Pradesh",
    "CA assisted LLP registration",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "LLP Registration Online — CA-Assisted | Taxvio",
    description:
      "Name reservation, LLP agreement drafting and incorporation certificate — handled end to end by a CA-led team. Fixed quote upfront.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLP Registration Online | Taxvio",
    description: "CA-assisted LLP registration in India: name reservation, LLP agreement, incorporation certificate and ROC compliance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const FAQS = [
  { q: "What is an LLP and how is it different from a partnership firm?", a: "A Limited Liability Partnership (LLP) is a separate legal entity registered under the LLP Act, 2008. Unlike a traditional partnership, a partner is not personally liable for the other partners' wrongful acts or the LLP's debts beyond their agreed contribution, though each partner remains liable for their own acts." },
  { q: "How many partners are needed to register an LLP?", a: "An LLP needs at least two partners, and at least two of them must be designated partners who are individuals. At least one designated partner must be resident in India, meaning present in India for 182 days or more during the previous year. There is no upper limit on the number of partners." },
  { q: "Is there a minimum capital requirement?", a: "No minimum contribution is prescribed. Partners decide their contributions, which can be in cash or in kind. MCA fees and stamp duty on the LLP agreement depend on the contribution and on your state, so we show them separately in the quote." },
  { q: "Which documents are required for LLP registration?", a: "The core documents are PAN and Aadhaar of the partners and proof of the registered office. You will also need a photograph, email ID and mobile number of each partner, address proof, and two proposed names. Foreign partners need passport-based documents." },
  { q: "How long does LLP registration take?", a: "When documents are complete and the name is accepted on the first attempt, registration is usually completed in roughly one to two weeks. Name objections or Registrar queries can add time, which is why we pre-check the name and the paperwork." },
  { q: "What is the LLP agreement and is it mandatory?", a: "The LLP agreement sets out each partner's rights, duties, contribution and profit share. It must be filed with the Registrar within 30 days of incorporation. If you do not have one, the default rules of the LLP Act apply, which rarely suit a real business." },
  { q: "What annual filings does an LLP have to make?", a: "Every LLP files Form 11 (annual return) and Form 8 (statement of account and solvency) each year, plus an income tax return. An audit is required when turnover or contribution crosses the prescribed limits. These are due even if the LLP had no business." },
  { q: "Is an LLP taxed differently from a company?", a: "An LLP is taxed as a firm on its profits, and the partners' share of profit is not taxed again in their hands. Rates and surcharge change with the Finance Act, so our CA team confirms the current position for your case." },
  { q: "Can an LLP raise equity funding from investors?", a: "An LLP has no shares, so it cannot issue equity the way a company can. If you expect to raise venture or angel equity, a private limited company is usually the better fit. Our CA team can compare both for you." },
  { q: "Can I convert my partnership firm or private company into an LLP?", a: "Yes. A partnership firm, and in some cases a private company, can be converted into an LLP through the prescribed process. Taxvio can handle the conversion; ask us for the specific requirements for your entity." },
];

export default function LlpFormationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "LLP Registration",
      serviceType: "LLP incorporation",
      description:
        "Professional LLP registration services with MCA compliance and documentation support, including name reservation, LLP agreement drafting and incorporation certificate.",
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
        { "@type": "ListItem", position: 4, name: "LLP Registration", item: URL },
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
      <LlpFormationClient faqs={FAQS} />
    </>
  );
}