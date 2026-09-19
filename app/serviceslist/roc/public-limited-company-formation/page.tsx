// app/serviceslist/roc/public-limited-company-formation/page.tsx

import type { Metadata } from "next";
import PublicLimitedCompanyFormationClient from "./PublicLimitedCompanyFormationClient";

export const metadata: Metadata = {
  title:
    "Public Limited Company Registration Services | MCA Filing & IPO Ready | Taxvio",
  description:
    "Professional Public Limited Company registration — INC-33/INC-34 filing, ₹5 lakh capital compliance, MOA/AOA with SEBI clauses, Certificate of Incorporation, INC-20A. Complete MCA registration in 20-30 days. Starting ₹49,999. Serving Khatauli, Muzaffarnagar, Mumbai, Delhi NCR, Bangalore & pan-India.",
  keywords: [
    "public limited company registration India",
    "public ltd company formation",
    "MCA public company registration",
    "INC-33 filing",
    "INC-34 AGILE-PRO",
    "public company incorporation",
    "register public limited company",
    "IPO ready company structure",
    "stock exchange listing company",
    "public company MCA filing",
    "₹5 lakh paid up capital company",
    "certificate of commencement of business",
    "INC-20A filing",
    "public company Mumbai",
    "public company Bangalore",
    "public company Delhi NCR",
    "SEBI compliant company registration",
    "7 shareholders company",
    "3 directors company",
    "CA for public company registration",
    "CS for public company",
    "public company annual compliance",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/public-limited-company-formation",
  },
  openGraph: {
    title:
      "Public Limited Company Registration | IPO Ready Structure | Taxvio",
    description:
      "Register Public Ltd company in 20-30 days. MCA INC-33/INC-34 filing, ₹5L capital, Certificate of Incorporation, INC-20A. ₹49,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/public-limited-company-formation",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/public-limited-company-registration.jpg",
        width: 1200,
        height: 630,
        alt: "Public Limited Company Registration Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Public Limited Company Registration | Taxvio",
    description:
      "Register Public Ltd company for IPO. MCA filing, ₹5L capital, INC-20A. 20-30 days. ₹49,999 onwards.",
    images: [
      "https://www.taxvio.in/og/public-limited-company-registration.jpg",
    ],
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

export default function PublicLimitedCompanyFormationPage() {
  return <PublicLimitedCompanyFormationClient />;
}