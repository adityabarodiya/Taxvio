import type { Metadata } from "next";
import ITRProprietorClient from "./ITRProprietorClient";

export const metadata: Metadata = {
  title: "ITR Filing for Proprietors & Self-Employed | FY 2025-26 | Taxvio",
  description:
    "Professional ITR-3 & ITR-4 filing for sole proprietors, freelancers, traders & self-employed professionals in India. Presumptive tax under 44AD & 44ADA, tax audit support, maximum deductions. Starting ₹1,499. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "ITR filing for proprietor",
    "proprietor income tax return",
    "ITR-3 filing India",
    "ITR-4 filing India",
    "section 44AD presumptive tax",
    "section 44ADA professional tax",
    "self employed ITR filing",
    "freelancer income tax return",
    "tax audit section 44AB",
    "business ITR filing FY 2025-26",
    "sole proprietorship income tax",
    "ITR filing Khatauli",
    "ITR filing Muzaffarnagar",
    "CA assisted ITR filing India",
    "income tax return for traders",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/itr-proprietor",
  },
  openGraph: {
    title: "ITR Filing for Proprietors & Self-Employed | FY 2025-26 | Taxvio",
    description:
      "Expert ITR-3 & ITR-4 filing for proprietors, freelancers & self-employed. Presumptive taxation under 44AD & 44ADA, tax audit support. Starting ₹1,499.",
    url: "https://www.taxvio.in/serviceslist/income-tax/itr-proprietor",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/itr-proprietor.jpg",
        width: 1200,
        height: 630,
        alt: "ITR Filing for Proprietors and Self-Employed — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Filing for Proprietors & Self-Employed | Taxvio",
    description:
      "CA-assisted ITR-3 & ITR-4 filing for proprietors. Presumptive tax under 44AD/44ADA. Tax audit support. Starting ₹1,499.",
    images: ["https://www.taxvio.in/og/itr-proprietor.jpg"],
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

export default function ITRProprietorPage() {
  return <ITRProprietorClient />;
}