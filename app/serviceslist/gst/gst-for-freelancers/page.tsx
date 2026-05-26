// app/gst-for-freelancer/page.tsx

import type { Metadata } from "next";
import Script from "next/script";
import GstForFreelancerClient from "./GstForFreelancerClient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "GST for Freelancers in India — Registration, LUT, Returns & Foreign Client Billing | Taxvio",
  description:
    "Complete GST guidance for freelancers and independent professionals in India. GST registration, LUT for foreign client invoicing, GSTR-1, GSTR-3B, zero-rated export of services, SAC code mapping, ITC, QRMP scheme and GST notice support. Starting ₹1,499. CA-assisted, pan-India online service.",
  keywords: [
    "GST for freelancers India",
    "GST registration for freelancers",
    "GST for independent professionals India",
    "GST for foreign clients India",
    "LUT GST freelancer",
    "Letter of Undertaking GST export services",
    "zero rated supply export of services GST",
    "GST for IT freelancers",
    "GST for designers freelancers India",
    "GST for consultants India",
    "SAC code for freelancers India",
    "GSTR-1 GSTR-3B freelancer",
    "GST threshold for services India",
    "QRMP scheme freelancer",
    "reverse charge mechanism freelancer India",
    "GST on freelance income India",
    "GST invoice for freelancer India",
    "GST for content writers India",
    "GST for software developers freelance India",
    "Taxvio GST for freelancers",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/gst-for-freelancers",
  },
  openGraph: {
    title: "GST for Freelancers in India — LUT, Returns & Foreign Client Billing | Taxvio",
    description:
      "GST registration, LUT for foreign client invoicing, zero-rated export, SAC codes, GSTR-1, GSTR-3B and GST notices — complete freelancer GST support starting ₹1,499.",
    url: "https://www.taxvio.in/gst-for-freelancers",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-for-freelancers.jpg",
        width: 1200,
        height: 630,
        alt: "GST for Freelancers India — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST for Freelancers India | Taxvio",
    description:
      "Complete freelancer GST — registration, LUT, zero-rated export, GSTR-1, GSTR-3B. Starting ₹1,499.",
    images: ["https://www.taxvio.in/og/gst-for-freelancers.jpg"],
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
  name: "GST for Freelancers and Independent Professionals",
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
  serviceType: "GST Registration and Compliance for Freelancers",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "End-to-end GST support for freelancers — GST registration, Letter of Undertaking (LUT) for foreign client billing, zero-rated export of services, SAC code mapping, GSTR-1, GSTR-3B, QRMP scheme advisory, ITC claims, RCM review and GST notice support.",
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
    reviewCount: "220",
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
      name: "GST for Freelancers",
      item: "https://www.taxvio.in/gst-for-freelancers",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GST mandatory for freelancers in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST registration is mandatory for freelancers if their aggregate turnover from services exceeds ₹20 lakh in a financial year (₹10 lakh for special category states). However, GST registration is compulsory regardless of turnover for freelancers making inter-state taxable supplies of services and for those exporting services to foreign clients who wish to issue zero-rated invoices without paying IGST.",
      },
    },
    {
      "@type": "Question",
      name: "Can a freelancer invoice foreign clients without charging GST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Export of services is zero-rated under Section 16 of the IGST Act. A registered freelancer can invoice foreign clients without charging GST by obtaining a Letter of Undertaking (LUT) by filing Form RFD-11 on the GST portal before the financial year begins. Without an LUT, the freelancer must charge IGST at the applicable rate and then claim a refund.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Letter of Undertaking (LUT) for freelancers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Letter of Undertaking (LUT) is a declaration filed in Form RFD-11 on the GST portal by a registered exporter, including freelancers who supply services to foreign clients. After filing the LUT, the freelancer can issue zero-rated invoices to foreign clients without collecting IGST and without needing to claim a refund.",
      },
    },
    {
      "@type": "Question",
      name: "Which GST returns must a freelancer file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A registered freelancer generally files GSTR-1 for outward supplies and GSTR-3B for monthly tax payment. Freelancers with aggregate turnover up to ₹5 crore can opt for the QRMP scheme — filing GSTR-1 and GSTR-3B quarterly with monthly self-assessed tax payment through PMT-06. Annual return GSTR-9 may also be applicable depending on turnover.",
      },
    },
    {
      "@type": "Question",
      name: "What SAC code should a freelancer use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SAC code depends on the nature of services. Common SAC codes for freelancers include: IT and software services — 998314 or 998313; design services (graphic, UI/UX) — 998392; management consulting — 998311; content writing — 998393; digital marketing — 998361; video and film production — 999611; legal services — 998211; accounting and bookkeeping — 998222.",
      },
    },
    {
      "@type": "Question",
      name: "Can a freelancer claim Input Tax Credit (ITC)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A GST-registered freelancer can claim ITC on goods and services purchased for business purposes — such as laptop, software subscriptions, office supplies, internet charges, professional services, co-working space rent, and advertising costs. ITC reduces the net GST payable. ITC is not available on personal consumption or items specifically blocked under Section 17(5).",
      },
    },
    {
      "@type": "Question",
      name: "What GST rate applies to freelancer services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most professional and business services provided by freelancers attract GST at 18%. This includes IT services, software development, consulting, design, content creation, digital marketing, legal services, accounting, and similar professional services. For export of services to foreign clients under LUT, the rate is 0% (zero-rated).",
      },
    },
    {
      "@type": "Question",
      name: "What is the QRMP scheme for freelancers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Quarterly Return Monthly Payment (QRMP) scheme allows registered taxpayers with aggregate turnover up to ₹5 crore to file GSTR-1 and GSTR-3B on a quarterly basis instead of monthly. However, tax payment is still required monthly through PMT-06 using either the fixed sum method or self-assessment method. QRMP reduces return filing frequency for eligible freelancers.",
      },
    },
    {
      "@type": "Question",
      name: "Does Reverse Charge Mechanism (RCM) apply to freelancers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in some cases. If a freelancer receives notified services from an unregistered person in India or imports services from abroad (such as foreign software subscriptions, cloud services or consulting), RCM may apply. Under RCM, the freelancer as the recipient is liable to pay GST and self-invoice the transaction, even if the supplier did not charge GST.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function GstForFreelancerPage() {
  return (
    <>
      <Script
        id="gst-fl-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="gst-fl-bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="gst-fl-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GstForFreelancerClient />
    </>
  );
}