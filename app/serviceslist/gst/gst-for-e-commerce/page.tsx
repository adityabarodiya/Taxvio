// app/gst-for-e-commerce/page.tsx

import type { Metadata } from "next";
import Script from "next/script";
import GstForEcommerceClient from "./GstForEcommerceClient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "GST for E-Commerce Sellers & Operators — Amazon, Flipkart, Meesho GST | Taxvio",
  description:
    "Complete GST compliance for e-commerce sellers and operators in India. GST registration, Amazon/Flipkart/Meesho seller GST setup, GSTR-1, GSTR-3B, GSTR-8, GST TCS reconciliation, Section 52, Section 9(5), marketplace settlement matching and notice support. Starting ₹1,499. Pan-India online service.",
  keywords: [
    "GST for e-commerce sellers",
    "GST registration for Amazon sellers",
    "GST for Flipkart sellers",
    "GST for Meesho sellers",
    "GST for e-commerce business India",
    "GSTR-8 filing for e-commerce operators",
    "GST TCS e-commerce Section 52",
    "GST TCS reconciliation Amazon Flipkart",
    "GST return filing for online sellers",
    "GST for Shopify sellers India",
    "GST for D2C brands",
    "GST for online marketplace sellers",
    "GST for Zomato Swiggy restaurants",
    "Section 9(5) GST e-commerce operator",
    "GST registration exemption e-commerce small seller",
    "Notification 34/2023 GST e-commerce",
    "Amazon seller GST compliance",
    "Flipkart GST return filing",
    "e-commerce GST notice support",
    "Taxvio GST for e-commerce",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/gst-for-e-commerce",
  },
  openGraph: {
    title: "GST for E-Commerce Sellers & Operators | Taxvio",
    description:
      "GST registration, monthly returns, TCS reconciliation, GSTR-8, Amazon/Flipkart/Meesho compliance and marketplace settlement matching — starting ₹1,499.",
    url: "https://www.taxvio.in/gst-for-e-commerce",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-for-e-commerce.jpg",
        width: 1200,
        height: 630,
        alt: "GST for E-Commerce Sellers and Operators — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST for E-Commerce Sellers | Taxvio",
    description:
      "GST setup for Amazon, Flipkart, Meesho, Shopify and D2C sellers — registration, returns, TCS reconciliation and notices.",
    images: ["https://www.taxvio.in/og/gst-for-e-commerce.jpg"],
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
  name: "GST for E-Commerce Sellers and Operators",
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
  serviceType: "GST Registration and Compliance for E-Commerce",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "End-to-end GST compliance for e-commerce sellers and operators — GST registration, marketplace seller GST setup, GSTR-1, GSTR-3B, GSTR-8, GST TCS reconciliation, marketplace settlement matching, Section 52 compliance, Section 9(5) advisory and GST notice support.",
  offers: {
    "@type": "Offer",
    price: "1499",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "240",
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
      name: "GST",
      item: "https://www.taxvio.in/serviceslist/gst",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "GST for E-Commerce",
      item: "https://www.taxvio.in/gst-for-e-commerce",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GST registration mandatory for e-commerce sellers in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST registration is generally required for sellers supplying through e-commerce operators such as Amazon, Flipkart, Meesho and similar marketplaces, especially where the marketplace is required to collect TCS under Section 52. However, small suppliers of goods may be exempt from registration under Notification 34/2023 subject to conditions such as turnover below the threshold, no inter-state supply, PAN-based enrolment and supply through an ECO in only one State or Union Territory.",
      },
    },
    {
      "@type": "Question",
      name: "What is GST TCS for e-commerce sellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST TCS is Tax Collected at Source by an e-commerce operator under Section 52 of the CGST Act on the net value of taxable supplies made through its platform. The ECO collects TCS from seller payouts and files GSTR-8. Sellers can claim the TCS credit in their electronic cash ledger after the operator files GSTR-8.",
      },
    },
    {
      "@type": "Question",
      name: "What is the current GST TCS rate for e-commerce operators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With effect from 10 July 2024, the GST TCS rate for e-commerce operators is 0.5% overall — 0.25% CGST plus 0.25% SGST/UTGST for intra-state supplies, or 0.5% IGST for inter-state supplies.",
      },
    },
    {
      "@type": "Question",
      name: "Which GST returns must e-commerce sellers file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A registered e-commerce seller generally files GSTR-1 for outward supplies and GSTR-3B for summary tax payment. Depending on turnover and registration type, annual return GSTR-9 may also apply. Sellers must also reconcile marketplace settlement reports, GSTR-2B, TCS credit and GSTR-1/GSTR-3B turnover to avoid GST notices.",
      },
    },
    {
      "@type": "Question",
      name: "What is GSTR-8 and who files it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSTR-8 is the monthly statement filed by e-commerce operators who are required to collect GST TCS under Section 52. It reports supplier-wise supplies made through the platform and TCS collected. GSTR-8 is generally due by the 10th day of the succeeding month.",
      },
    },
    {
      "@type": "Question",
      name: "Can small sellers sell online without GST registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small suppliers of goods may sell through e-commerce operators without GST registration only if they satisfy the conditions of Notification 34/2023 — turnover below the registration threshold, no inter-state supply, no supply through ECOs in more than one State or Union Territory, PAN declaration and enrolment number on the GST portal. The relaxation is not a blanket exemption for all online sellers.",
      },
    },
    {
      "@type": "Question",
      name: "What is Section 9(5) under GST for e-commerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 9(5) shifts GST payment liability to the e-commerce operator for notified services supplied through the platform, such as passenger transport, accommodation, housekeeping and restaurant services. In these cases, the ECO pays GST as if it is the supplier for those notified services, while sellers must report such supplies correctly to avoid double taxation.",
      },
    },
    {
      "@type": "Question",
      name: "Why do e-commerce sellers receive GST mismatch notices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-commerce sellers commonly receive GST notices due to mismatch between marketplace sales, GSTR-1, GSTR-3B, GSTR-2B, TCS credit, cancellations, returns, discounts and settlement reports. Regular marketplace reconciliation helps identify differences before the department issues ASMT-10 or DRC notices.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function GstForEcommercePage() {
  return (
    <>
      <Script
        id="gst-ecom-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="gst-ecom-bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="gst-ecom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GstForEcommerceClient />
    </>
  );
}