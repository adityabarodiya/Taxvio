// app/serviceslist/roc/llp-to-company-conversion/page.tsx
import type { Metadata } from "next";
import LlpToCompanyConversionClient from "./LlpToCompanyConversionClient";

export const metadata: Metadata = {
  title: "LLP to Private Limited Company Conversion | Taxvio",
  description:
    "Convert your LLP into a private limited company with complete MCA filing and incorporation support. Eligibility assessment, name approval, URC-1 filing, MOA & AOA drafting, and incorporation certificate. Starting ₹19,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "LLP to private limited company conversion",
    "convert LLP to company India",
    "section 366 companies act conversion",
    "URC-1 filing",
    "LLP to company MCA filing",
    "MOA AOA drafting for LLP conversion",
    "LLP equity fundraising conversion",
    "LLP to Pvt Ltd for ESOP",
    "companies authorised to register rules 2014",
    "LLP conversion Muzaffarnagar",
    "LLP conversion Meerut",
    "LLP conversion Noida",
    "LLP conversion Delhi NCR",
    "startup entity structuring services",
    "LLP to company for VC funding",
    "CA for LLP conversion",
    "CS for LLP conversion",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/llp-to-company-conversion",
  },
  openGraph: {
    title: "LLP to Private Limited Company Conversion | Taxvio",
    description:
      "Convert your LLP into a private limited company. URC-1 filing, MOA & AOA drafting, complete MCA incorporation support. ₹19,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/llp-to-company-conversion",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/llp-to-company-conversion.jpg",
        width: 1200,
        height: 630,
        alt: "LLP to Private Limited Company Conversion Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLP to Private Limited Company Conversion | Taxvio",
    description:
      "Convert LLP to a private limited company. URC-1 & MOA/AOA drafting, MCA filing. 15-20 days. ₹19,999+.",
    images: ["https://www.taxvio.in/og/llp-to-company-conversion.jpg"],
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

export default function LlpToCompanyConversionPage() {
  return <LlpToCompanyConversionClient />;
}