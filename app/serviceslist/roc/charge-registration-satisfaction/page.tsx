// app/serviceslist/roc/charge-registration-satisfaction/page.tsx
import type { Metadata } from "next";
import ChargeRegistrationClient from "./ChargeRegistrationClient";

export const metadata: Metadata = {
  title:
    "Charge Creation & Satisfaction ROC Filing | CHG-1 & CHG-4 | Taxvio",
  description:
    "Register or satisfy charges on company assets with expert CHG-1 and CHG-4 filing support. Mortgage, hypothecation, pledge charges. Lender coordination, MCA e-filing, CERSAI support. Starting ₹5,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "CHG-1 filing India",
    "CHG-4 filing",
    "charge creation ROC",
    "charge satisfaction",
    "mortgage registration MCA",
    "hypothecation charge filing",
    "pledge charge registration",
    "secured loan charge filing",
    "CHG-1 deadline 30 days",
    "CHG-4 after loan closure",
    "charge register maintenance",
    "CERSAI filing",
    "charge on company assets",
    "lien registration",
    "floating charge filing",
    "CHG-1 Khatauli",
    "CHG-1 Muzaffarnagar",
    "CHG-1 Meerut",
    "CHG-1 Noida",
    "CHG-1 Delhi NCR",
    "ROC compliance charges",
    "CA for charge filing",
    "company secretary CHG-1",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/charge-registration-satisfaction",
  },
  openGraph: {
    title: "Charge Creation & Satisfaction ROC Filing | Taxvio",
    description:
      "File CHG-1 & CHG-4 for secured loans. Lender coordination, MCA filing, CERSAI support. ₹5,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/charge-registration-satisfaction",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/charge-registration.jpg",
        width: 1200,
        height: 630,
        alt: "Charge Creation & Satisfaction Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHG-1 & CHG-4 Filing Services | Taxvio",
    description:
      "Register/satisfy charges on assets. Secured loan compliance. MCA filing, 5-7 days. ₹5,999+.",
    images: ["https://www.taxvio.in/og/charge-registration.jpg"],
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

export default function ChargeRegistrationPage() {
  return <ChargeRegistrationClient />;
}