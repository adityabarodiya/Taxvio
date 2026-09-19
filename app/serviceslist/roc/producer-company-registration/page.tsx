// app/serviceslist/roc/producer-company-registration/page.tsx
import type { Metadata } from "next";
import ProducerCompanyRegistrationClient from "./ProducerCompanyRegistrationClient";

export const metadata: Metadata = {
  title:
    "Producer Company Registration Services | FPO/FPC Registration | Taxvio",
  description:
    "Professional Producer Company (FPO/FPC) registration for farmers & artisans. SPICe+ filing, ₹5 lakh capital, MOA/AOA with producer objectives, NABARD/SFAC subsidy support. Complete MCA registration in 15-20 days. Starting ₹24,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "producer company registration India",
    "FPO registration",
    "FPC registration",
    "farmer producer organization",
    "farmer producer company",
    "register producer company online",
    "producer company MCA filing",
    "Part IXA company registration",
    "NABARD producer company subsidy",
    "SFAC FPO support",
    "agricultural producer company",
    "artisan producer company",
    "₹5 lakh capital producer company",
    "producer company Muzaffarnagar",
    "producer company Meerut",
    "producer company Noida",
    "producer company Delhi NCR",
    "farmer collective registration",
    "primary producer company",
    "CA for producer company",
    "CS for producer company",
    "producer company compliance",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/producer-company-registration",
  },
  openGraph: {
    title: "Producer Company Registration | FPO/FPC | Taxvio",
    description:
      "Register Producer Company (FPO/FPC) in 15-20 days. NABARD/SFAC eligible. ₹24,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/producer-company-registration",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/producer-company-registration.jpg",
        width: 1200,
        height: 630,
        alt: "Producer Company Registration Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Producer Company Registration | Taxvio",
    description:
      "Register FPO/FPC for farmers. NABARD/SFAC eligible. 15-20 days. ₹24,999+.",
    images: ["https://www.taxvio.in/og/producer-company-registration.jpg"],
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

export default function ProducerCompanyRegistrationPage() {
  return <ProducerCompanyRegistrationClient />;
}