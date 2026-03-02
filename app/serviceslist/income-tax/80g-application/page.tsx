import type { Metadata } from "next";
import Section80GClient from "./Section80GClient";

export const metadata: Metadata = {
  title: "Section 80G Approval for Trusts & NGOs | Form 10A 10AB 10BD | Taxvio",
  description:
    "Professional Section 80G approval services for charitable trusts, NGOs, societies & Section 8 companies in India. Form 10A / 10AB filing, 50%/100% donor deduction, Form 10BD annual donor statement, Form 10BE donor certificates, 5-year renewal. Starting ₹2,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "section 80G approval trust India",
    "80G registration NGO India",
    "80G approval charitable trust",
    "Form 10A 80G filing",
    "Form 10AB 80G renewal",
    "Form 10BD donor statement filing",
    "Form 10BE donor certificate TRACES",
    "80G deduction for donors India",
    "section 234G penalty Form 10BD",
    "80G approval renewal 5 years",
    "50 percent deduction donation India",
    "100 percent deduction donation fund",
    "CSR 80G approval NGO",
    "80G approval Khatauli",
    "80G approval Muzaffarnagar",
    "CA assisted 80G registration India",
    "80G vs 12AB difference trust",
    "cash donation 80G deduction limit",
    "section 80G qualifying limit AGTI",
    "charitable trust donor tax benefit India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/income-tax/80g-application",
  },
  openGraph: {
    title: "Section 80G Approval for Trusts & NGOs | Form 10BD 10BE | Taxvio",
    description:
      "Expert 80G approval — Form 10A/10AB, 50%/100% donor deduction, Form 10BD & 10BE compliance. Starting ₹2,999. CA-assisted pan-India service.",
    url: "https://www.taxvio.in/income-tax/80g-application",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/80g-application.jpg",
        width: 1200,
        height: 630,
        alt: "Section 80G Approval for Trusts and NGOs — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Section 80G Approval for Trusts & NGOs | Taxvio",
    description:
      "CA-assisted 80G approval — Form 10A/10AB, donor deduction, Form 10BD & 10BE. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/80g-application.jpg"],
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

export default function Section80GPage() {
  return <Section80GClient />;
}