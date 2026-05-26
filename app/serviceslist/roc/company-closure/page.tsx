// app/company-closure/page.tsx

import type { Metadata } from "next";
import Script from "next/script";
import CompanyClosureClient from "./CompanyClosureClient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Company Closure in India — Strike Off STK-2 Filing Online | Taxvio",
  description:
    "Close your Private Limited Company, OPC or LLP legally in India. Taxvio's CA & CS team handles board resolution, special resolution, STK-2 strike-off filing, indemnity bond, affidavit, bank account closure and MCA coordination. Starting ₹4,999. Pan-India online service.",
  keywords: [
    "company closure India",
    "strike off company India",
    "STK-2 filing online",
    "close private limited company",
    "company strike off MCA",
    "Section 248 strike off Companies Act",
    "voluntary company closure India",
    "defunct company strike off",
    "fast track exit company closure",
    "how to close a company in India",
    "close OPC India",
    "winding up vs strike off",
    "company closure documents India",
    "close company without business",
    "company closure Muzaffarnagar",
    "company closure Noida Delhi NCR",
    "Taxvio company closure",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/company-closure",
  },
  openGraph: {
    title: "Company Closure in India — Strike Off STK-2 Filing | Taxvio",
    description:
      "Close your company legally via STK-2 strike-off. CA & CS-assisted service — board resolution, special resolution, STK-2 filing, indemnity bond and MCA coordination. Starting ₹4,999.",
    url: "https://www.taxvio.in/company-closure",
    siteName: "Taxvio",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/company-closure.jpg",
        width: 1200,
        height: 630,
        alt: "Company Closure Services India — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Closure in India | Taxvio",
    description:
      "Online STK-2 strike-off filing for company closure — CA & CS-assisted, starting ₹4,999.",
    images: ["https://www.taxvio.in/og/company-closure.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* ─── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Company Closure — Strike Off STK-2 Filing",
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
  serviceType: "Company Closure and Strike Off",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "End-to-end company closure service for Private Limited Companies, OPCs and LLPs — covering board resolution, special resolution, bank account closure, indemnity bond, affidavit, STK-2 MCA filing and ROC coordination.",
  offers: {
    "@type": "Offer",
    price: "4999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "165",
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
      name: "Company Closure",
      item: "https://www.taxvio.in/company-closure",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I close a Private Limited Company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Private Limited Company can be closed voluntarily through the Strike Off route under Section 248 of the Companies Act 2013 by filing Form STK-2 with the Registrar of Companies. This requires the company to have NIL assets and liabilities, a closed bank account, board resolution, special resolution or consent of 75% members, indemnity bond, affidavit from directors, and a statement of accounts not older than 30 days.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form STK-2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form STK-2 is the application form filed with the Registrar of Companies (ROC) under Section 248(2) of the Companies Act 2013 to apply for voluntary strike off — effectively closing the company by removing its name from the Register of Companies. It must be signed by a majority of directors and requires attachments including the statement of accounts, indemnity bond and special resolution.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between strike off and winding up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strike off under Section 248 is a simpler, faster administrative process suited for dormant or defunct companies with NIL assets and liabilities — primarily used by companies that never commenced business or ceased operations. Winding up under the Companies Act involves a formal process through the NCLT or voluntary liquidation to settle debts, realise assets and distribute surplus before dissolution. Strike off via STK-2 is the most common route for solo founders, failed startups and idle companies.",
      },
    },
    {
      "@type": "Question",
      name: "Can a company with bank balance apply for strike off?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Before filing STK-2, the company must settle all liabilities, close the company's bank account and ensure NIL assets and liabilities. The statement of accounts filed with STK-2 must show zero balance. Any remaining bank balance must be distributed to shareholders or utilised before the application.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible to apply for company strike off under Section 248?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A company can apply for voluntary strike off if it has not commenced business within one year of incorporation OR has not been carrying on any business or operation for two immediately preceding financial years AND has not applied for dormant company status. All pending ROC filings, ITRs and GST returns must be filed and cleared before applying.",
      },
    },
    {
      "@type": "Question",
      name: "How long does company closure take in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After STK-2 is filed with ROC, the MCA publishes a public notice in the Official Gazette and gives a 30-day window for objections. If no objections are received, the ROC issues the Strike Off Order. The complete process including document preparation, filing and MCA order typically takes 3–6 months from the date of application.",
      },
    },
    {
      "@type": "Question",
      name: "What are the pending compliance requirements to clear before company closure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before filing STK-2, all pending annual filings (AOC-4, MGT-7/MGT-7A), income tax returns (ITR-6), GST returns and TDS returns must be filed. Pending ROC penalties, prosecution notices and outstanding dues to tax authorities must be resolved. The company must also close its bank account and ensure NIL assets and liabilities on the statement of accounts.",
      },
    },
    {
      "@type": "Question",
      name: "Can directors of a struck-off company be held liable later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Directors execute an indemnity bond as part of the STK-2 application declaring that the company has no pending liabilities or legal proceedings. If any undisclosed liability or fraud is discovered after the company is struck off, the ROC can restore the company and directors can be held personally liable for misrepresentation made in the application.",
      },
    },
    {
      "@type": "Question",
      name: "Can an OPC be closed through STK-2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A One Person Company (OPC) can also be closed through the STK-2 strike-off route under Section 248. The process is similar — the sole member provides consent (equivalent to a special resolution), directors execute the indemnity bond and affidavit, the bank account is closed, and STK-2 is filed with a statement of accounts showing NIL assets and liabilities.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to the CIN and company name after strike off?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once the ROC issues the Strike Off Order, the company's name is removed from the Register of Companies. The CIN becomes inactive and the company ceases to exist as a legal entity. The company name may become available for future registration by another party after a specified period.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function CompanyClosurePage() {
  return (
    <>
      <Script
        id="cc-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="cc-bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="cc-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CompanyClosureClient />
    </>
  );
}