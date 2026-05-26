import type { Metadata } from "next";
import ITRSalariedClient from "./ITRSalariedClient";

export const metadata: Metadata = {
  title: "ITR Filing for Salaried Individuals | FY 2025-26 | Taxvio",
  description:
    "Professional ITR-1 & ITR-2 filing for salaried employees in India. Old vs New tax regime comparison, maximum deductions under 80C, 80D, HRA, home loan interest, and timely submission. Starting ₹499. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "ITR filing for salaried individuals India",
    "income tax return salaried employee",
    "ITR-1 filing India",
    "ITR-2 filing India",
    "old vs new tax regime FY 2025-26",
    "section 80C deduction salaried",
    "HRA exemption income tax",
    "form 16 ITR filing",
    "salaried ITR filing Khatauli",
    "salaried ITR Muzaffarnagar",
    "CA assisted ITR filing India",
    "income tax refund salaried",
    "ITR filing due date 31 July 2026",
    "TDS refund salary",
    "standard deduction salaried FY 2025-26",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/itr-salaried",
  },
  openGraph: {
    title: "ITR Filing for Salaried Individuals | FY 2025-26 | Taxvio",
    description:
      "Expert ITR-1 & ITR-2 filing for salaried employees. Old vs New regime comparison, max deductions, TDS refund. Starting ₹499. CA-assisted.",
    url: "https://www.taxvio.in/serviceslist/income-tax/itr-salaried",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/itr-salaried.jpg",
        width: 1200,
        height: 630,
        alt: "ITR Filing for Salaried Individuals — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Filing for Salaried Individuals | Taxvio",
    description:
      "CA-assisted ITR-1 & ITR-2 for salaried employees. Old vs New regime, max deductions. Starting ₹499.",
    images: ["https://www.taxvio.in/og/itr-salaried.jpg"],
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

export default function ITRSalariedPage() {
  return <ITRSalariedClient />;
}