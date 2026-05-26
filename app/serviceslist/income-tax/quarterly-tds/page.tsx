import type { Metadata } from "next";
import QuarterlyTDSClient from "./QuarterlyTDSClient";

export const metadata: Metadata = {
  title: "Quarterly TDS Return Filing — Form 24Q, 26Q, 27Q & 27EQ | FY 2025-26 | Taxvio",
  description:
    "Professional quarterly TDS return filing — Form 24Q (salary), 26Q (non-salary), 27Q (NRI payments) & 27EQ (TCS). Challan reconciliation, TRACES correction, Form 16/16A generation. Starting ₹999/quarter. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "quarterly TDS return filing",
    "TDS return filing India",
    "Form 24Q filing",
    "Form 26Q filing",
    "Form 27Q filing",
    "Form 27EQ filing",
    "TDS return due date FY 2025-26",
    "Section 234E penalty TDS",
    "TRACES correction statement",
    "TDS challan reconciliation",
    "Form 16 generation",
    "Form 16A generation",
    "TAN registration India",
    "TDS return filing Khatauli",
    "TDS return filing Muzaffarnagar",
    "CA assisted TDS return India",
    "employer TDS return filing",
    "contractor TDS 194C return",
    "professional fee TDS 194J",
    "salary TDS return Section 192",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/quarterly-tds",
  },
  openGraph: {
    title: "Quarterly TDS Return Filing — Form 24Q, 26Q, 27Q & 27EQ | Taxvio",
    description:
      "Expert quarterly TDS return filing for employers and businesses. Form 24Q, 26Q, 27Q & 27EQ. Challan reconciliation, TRACES corrections, Form 16/16A. Starting ₹999/quarter.",
    url: "https://www.taxvio.in/serviceslist/income-tax/quarterly-tds",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/quarterly-tds.jpg",
        width: 1200,
        height: 630,
        alt: "Quarterly TDS Return Filing — Form 24Q, 26Q, 27Q & 27EQ — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quarterly TDS Return Filing | Form 24Q, 26Q, 27Q & 27EQ | Taxvio",
    description:
      "CA-assisted quarterly TDS return filing. Form 24Q, 26Q, 27Q & 27EQ. Challan reconciliation, TRACES correction support. Starting ₹999/quarter.",
    images: ["https://www.taxvio.in/og/quarterly-tds.jpg"],
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

export default function QuarterlyTDSPage() {
  return <QuarterlyTDSClient />;
}