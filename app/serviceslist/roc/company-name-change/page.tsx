// app/company-name-change/page.tsx

import type { Metadata } from "next";
import CompanyNameChangeClient from "./CompanyNameChangeClient";

export const metadata: Metadata = {
  title: "Company Name Change in India — MCA Filing | Taxvio",
  description:
    "Change your company name legally with MCA in 15–20 working days. Taxvio's CA & CS team handles board resolution, special resolution, RUN form, INC-24 filing, and fresh Certificate of Incorporation — ₹3,999 all-inclusive.",
  keywords: [
    "company name change India",
    "MCA company name change",
    "change private limited company name",
    "INC-24 filing",
    "RUN form name change",
    "ROC name change procedure",
    "company name change certificate",
    "change OPC name",
    "company name change Muzaffarnagar",
    "company name change Noida",
    "company name change Delhi NCR",
    "Taxvio company name change",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/company-name-change",
  },
  openGraph: {
    title: "Company Name Change in India — MCA Filing | Taxvio",
    description:
      "Change your registered company name with MCA in 15–20 working days. Board resolution, special resolution, RUN approval, INC-24, and new Certificate of Incorporation — ₹3,999.",
    url: "https://www.taxvio.in/company-name-change",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/company-name-change.jpg",
        width: 1200,
        height: 630,
        alt: "Company Name Change India — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Name Change in India | Taxvio",
    description:
      "MCA-compliant company name change in 15–20 working days. CA & CS assisted. ₹3,999 all-inclusive.",
    images: ["https://www.taxvio.in/og/company-name-change.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function CompanyNameChangePage() {
  return <CompanyNameChangeClient />;
}