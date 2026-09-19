// app/serviceslist/roc/nidhi-company-registration/page.tsx
import type { Metadata } from "next";
import NidhiCompanyRegistrationClient from "./NidhiCompanyRegistrationClient";

export const metadata: Metadata = {
  title:
    "Nidhi Company Registration Services | Mutual Benefit Society | Taxvio",
  description:
    "Professional Nidhi Company registration under Section 406 — SPICe+ filing, ₹5 lakh capital compliance, MOA/AOA with Nidhi objectives, NDH-1/NDH-4 filing, 200 members support. Complete MCA registration in 15-20 days. Starting ₹29,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "nidhi company registration India",
    "mutual benefit society registration",
    "nidhi company incorporation",
    "section 406 company registration",
    "nidhi rules 2014 compliance",
    "register nidhi company online",
    "nidhi company MCA filing",
    "NDH-1 filing",
    "NDH-4 declaration",
    "200 members nidhi company",
    "₹5 lakh capital nidhi",
    "nidhi company vs NBFC",
    "nidhi company Muzaffarnagar",
    "nidhi company Meerut",
    "nidhi company Noida",
    "nidhi company Delhi NCR",
    "community lending business",
    "thrift society registration",
    "savings and credit cooperative",
    "CA for nidhi company",
    "CS for nidhi company",
    "nidhi annual compliance",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/nidhi-company-registration",
  },
  openGraph: {
    title: "Nidhi Company Registration | Mutual Benefit Society | Taxvio",
    description:
      "Register Nidhi Company in 15-20 days. MCA filing, ₹5L capital, NDH-1/NDH-4, 200 members support. ₹29,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/nidhi-company-registration",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/nidhi-company-registration.jpg",
        width: 1200,
        height: 630,
        alt: "Nidhi Company Registration Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Company Registration | Taxvio",
    description:
      "Register Nidhi for community lending. MCA, NDH-1/4, 200 members. 15-20 days. ₹29,999+.",
    images: ["https://www.taxvio.in/og/nidhi-company-registration.jpg"],
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

export default function NidhiCompanyRegistrationPage() {
  return <NidhiCompanyRegistrationClient />;
}