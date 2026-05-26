// app/serviceslist/roc/authorized-capital-increase/page.tsx

import type { Metadata } from "next";
import Script from "next/script";
import AuthorizedCapitalIncreaseClient from "./AuthorizedCapitalIncreaseClient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Increase Authorised Share Capital — SH-7 ROC Filing Online | Taxvio",
  description:
    "Increase authorised share capital of your Private Limited, OPC, or Public Limited Company with Taxvio. CA & CS-assisted service covers AOA check, board resolution, shareholder approval, altered MOA, SH-7 filing, stamp duty and ROC coordination. Starting ₹2,999 + government fees.",
  keywords: [
    "increase authorised share capital",
    "authorized capital increase India",
    "SH-7 filing online",
    "ROC filing for authorised capital increase",
    "increase authorized capital private limited company",
    "authorised share capital increase MCA",
    "Form SH-7 ROC filing",
    "Section 61 Companies Act authorised capital",
    "Section 64 SH-7 filing",
    "alteration of capital clause MOA",
    "board resolution for authorised capital increase",
    "ordinary resolution authorised capital increase",
    "Taxvio SH-7 filing",
    "authorized capital increase Muzaffarnagar",
    "authorized capital increase Delhi NCR",
    "increase authorised capital Meerut Noida",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/authorized-capital-increase",
  },
  openGraph: {
    title: "Increase Authorised Share Capital | SH-7 ROC Filing | Taxvio",
    description:
      "Need to issue more shares? Increase your company’s authorised share capital with CA & CS-assisted SH-7 ROC filing. Starting ₹2,999 + government fees.",
    url: "https://www.taxvio.in/serviceslist/roc/authorized-capital-increase",
    siteName: "Taxvio",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/authorized-capital-increase.jpg",
        width: 1200,
        height: 630,
        alt: "Authorised Share Capital Increase Services India — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Increase Authorised Share Capital | Taxvio",
    description:
      "Online SH-7 filing for authorised capital increase — CA & CS-assisted, starting ₹2,999 + government fees.",
    images: ["https://www.taxvio.in/og/authorized-capital-increase.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Authorised Share Capital Increase",
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
  serviceType: "ROC Filing for Increase in Authorised Share Capital",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Complete authorised share capital increase service covering AOA review, board resolution, shareholder approval, altered MOA preparation, Form SH-7 filing, stamp duty calculation and ROC coordination for Private Limited Companies, OPCs and Public Limited Companies.",
  offers: {
    "@type": "Offer",
    price: "2999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "210",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.taxvio.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.taxvio.in/serviceslist",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ROC Compliance",
      item: "https://www.taxvio.in/serviceslist/roc",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Authorised Capital Increase",
      item: "https://www.taxvio.in/serviceslist/roc/authorized-capital-increase",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is authorised share capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Authorised share capital is the maximum amount of share capital that a company is permitted to issue to shareholders as stated in the Capital Clause of its Memorandum of Association. If a company wants to issue shares beyond the existing authorised capital limit, it must first increase authorised share capital and file Form SH-7 with ROC.",
      },
    },
    {
      "@type": "Question",
      name: "When does a company need to increase authorised share capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A company needs to increase authorised share capital when it plans to issue new shares but the existing authorised capital limit in the MOA is insufficient. This commonly happens before fundraising, rights issue, private placement, ESOP expansion, bonus issue, merger consideration, or promoter capital infusion.",
      },
    },
    {
      "@type": "Question",
      name: "Which ROC form is filed for increase in authorised share capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form SH-7 is filed with the Registrar of Companies for alteration of share capital, including increase in authorised share capital. It must be filed within 30 days from the date of alteration, along with the altered Memorandum of Association and applicable fees.",
      },
    },
    {
      "@type": "Question",
      name: "Is ordinary resolution or special resolution required for authorised capital increase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, an ordinary resolution is required to increase authorised share capital under Section 61 if the Articles of Association already authorise such increase. However, if the Articles must also be altered, a special resolution under Section 14 may be required and MGT-14 filing may become applicable.",
      },
    },
    {
      "@type": "Question",
      name: "Is MGT-14 required for authorised capital increase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MGT-14 is not required merely because authorised capital is increased by ordinary resolution. However, if the company passes a special resolution, alters its Articles of Association, or the specific case otherwise triggers Section 117 filing, MGT-14 must be filed within the prescribed timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Does increasing authorised capital increase paid-up capital automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Authorised capital is only the maximum limit up to which shares can be issued. Paid-up capital increases only when the company actually allots shares and receives consideration. After authorised capital increase, a separate share allotment process and PAS-3 filing may be required.",
      },
    },
    {
      "@type": "Question",
      name: "How long does authorised capital increase take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through Taxvio, authorised capital increase usually takes 3–7 working days after receiving complete documents and DSC access, subject to ROC processing, stamp duty payment, shareholder approval timeline and MCA portal availability.",
      },
    },
    {
      "@type": "Question",
      name: "What is the government fee for increasing authorised share capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Government fee depends on the amount of authorised capital being increased and the company category. Stamp duty may also vary depending on the state of incorporation and share capital structure. Taxvio calculates the exact ROC fee and stamp duty before filing SH-7.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function AuthorizedCapitalIncreasePage() {
  return (
    <>
      <Script
        id="aci-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="aci-bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="aci-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AuthorizedCapitalIncreaseClient />
    </>
  );
}