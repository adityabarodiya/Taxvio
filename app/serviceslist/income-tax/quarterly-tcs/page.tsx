// app/serviceslist/income-tax/quarterly-tcs/page.tsx

import type { Metadata } from "next";
import Script from "next/script";
import QuarterlyTCSClient from "./QuarterlyTCSClient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Quarterly TCS Return Filing — Form 27EQ FY 2025-26 | Taxvio",
  description:
    "Professional quarterly TCS return filing in Form 27EQ for businesses, traders, vehicle dealers and tour operators across India. TCS on sale of goods (206C(1H)), LRS foreign remittance (206C(1G)), scrap, minerals, Form 27D generation, challan reconciliation. Starting ₹999/quarter. CA-assisted, pan-India.",
  keywords: [
    "quarterly TCS return filing India",
    "Form 27EQ filing service",
    "TCS on sale of goods 206C(1H)",
    "TCS on foreign remittance LRS 206C(1G)",
    "TCS return filing service India",
    "Form 27D generation TRACES",
    "TCS challan reconciliation",
    "section 206C TCS filing",
    "TCS on motor vehicles 206C(1F)",
    "TCS on scrap minerals India",
    "TCS return due dates FY 2025-26",
    "TCS compliance service India",
    "TCS filing Khatauli",
    "TCS filing Muzaffarnagar",
    "CA assisted TCS return filing",
    "section 234E TCS late filing penalty",
    "TCS vs TDS difference India",
    "TCS on overseas tour package",
    "section 206C(1H) seller turnover 10 crore",
    "LRS TCS 20 percent foreign remittance",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/quarterly-tcs",
  },
  openGraph: {
    title: "Quarterly TCS Return Filing | Form 27EQ FY 2025-26 | Taxvio",
    description:
      "Expert TCS return filing — Form 27EQ, Section 206C(1H), 206C(1G) LRS, Form 27D generation, challan reconciliation. Starting ₹999/quarter. CA-assisted.",
    url: "https://www.taxvio.in/serviceslist/income-tax/quarterly-tcs",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/quarterly-tcs.jpg",
        width: 1200,
        height: 630,
        alt: "Quarterly TCS Return Filing Services — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quarterly TCS Return Filing | Form 27EQ | Taxvio",
    description:
      "Managed TCS compliance — Form 27EQ, 206C(1H) goods, 206C(1G) LRS, Form 27D. Starting ₹999/quarter.",
    images: ["https://www.taxvio.in/og/quarterly-tcs.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

/* ─── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Quarterly TCS Return Filing Services",
  provider: {
    "@type": "AccountingService",
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
  serviceType: "TCS Return Filing",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Professional quarterly TCS return filing services in India — Form 27EQ filing, TCS challan reconciliation, Form 27D generation, TCS on sale of goods (206C(1H)), foreign remittance LRS (206C(1G)), and complete TRACES compliance.",
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "195",
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
      name: "Income Tax",
      item: "https://www.taxvio.in/serviceslist/income-tax",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Quarterly TCS Return Filing",
      item: "https://www.taxvio.in/serviceslist/income-tax/quarterly-tcs",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TCS and who is required to collect it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TCS (Tax Collected at Source) is collected by the seller from the buyer at the time of sale of specified goods or services under Section 206C of the Income Tax Act. Sellers of scrap, minerals, forest produce, tendu leaves, alcohol, vehicle dealers (vehicles > ₹10L), tour operators, authorised dealers for LRS remittances, and any seller with turnover > ₹10 crore on goods sales > ₹50 lakh (Section 206C(1H)) must collect TCS and file quarterly Form 27EQ.",
      },
    },
    {
      "@type": "Question",
      name: "What is the due date for quarterly TCS return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TCS returns in Form 27EQ must be filed quarterly: Q1 (April–June) by 15th July, Q2 (July–September) by 15th October, Q3 (October–December) by 15th January, and Q4 (January–March) by 15th May. These are 15 days earlier than TDS return due dates for non-government deductors.",
      },
    },
    {
      "@type": "Question",
      name: "What is TCS on sale of goods under Section 206C(1H)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 206C(1H) requires a seller whose total sales turnover exceeds ₹10 crore in the previous financial year to collect TCS at 0.1% from every buyer whose purchases from the seller exceed ₹50 lakh in the current financial year. If the buyer has not furnished PAN/Aadhaar, the TCS rate doubles to 1%. Note: if the buyer deducts TDS under Section 194Q, the seller need not collect 206C(1H) TCS.",
      },
    },
    {
      "@type": "Question",
      name: "What is TCS on foreign remittance under LRS (Section 206C(1G))?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 206C(1G) requires authorised dealers to collect TCS on foreign remittances under LRS above ₹7 lakh per year. From October 2023: 20% for general remittances; 0.5% for education via bank loan (Section 80E); 5% for education/medical from own funds above ₹7 lakh; 5% up to ₹7L and 20% above for overseas tour packages (no threshold). The remitter can claim this TCS as credit in their income tax return.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 27D and when should it be issued?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 27D is the TCS certificate issued by the collector (seller) to the collectee (buyer) after filing the quarterly TCS return. It shows the amount of TCS collected and deposited. Form 27D must be issued within 15 days of the due date of the TCS return for each quarter. Buyers use Form 27D to claim TCS credit in their income tax return.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late TCS return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late filing of Form 27EQ attracts a mandatory fee of ₹200 per day under Section 234E from the due date until filing, subject to a maximum of the TCS amount. Additionally, the Assessing Officer can levy a penalty of ₹10,000 to ₹1,00,000 under Section 271H. Interest at 1% per month is charged on late TCS deposit under Section 206C(7). Wilful non-deposit after collection can lead to prosecution under Section 276BB.",
      },
    },
    {
      "@type": "Question",
      name: "Can TDS and TCS both apply on the same transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Section 206C(1H) TCS on sale of goods does not apply to a transaction where the buyer has already deducted TDS under Section 194Q. When a buyer's aggregate purchases from a seller exceed ₹50 lakh and the buyer is liable to deduct 194Q TDS, the seller need not collect 206C(1H) TCS on that portion. The obligation rests on the buyer for TDS in such cases.",
      },
    },
    {
      "@type": "Question",
      name: "What is the TCS rate on motor vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Section 206C(1F), a dealer selling a motor vehicle of value exceeding ₹10 lakh must collect TCS at 1% from the buyer at the time of receipt of sale consideration. If the buyer does not provide PAN/Aadhaar, the rate doubles to 2%. This TCS is deposited by the dealer and the buyer can claim it as credit in their ITR.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function QuarterlyTCSPage() {
  return (
    <>
      <Script
        id="tcs-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="tcs-bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="tcs-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <QuarterlyTCSClient />
    </>
  );
}