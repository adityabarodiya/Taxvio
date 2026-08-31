// app/serviceslist/income-tax/rectification-request/page.tsx
import type { Metadata } from "next";
import RectificationRequestClient from "./RectificationRequestClient";

export const metadata: Metadata = {
  title:
    "Rectification Request Services | Section 154 | Correct Assessment Order Errors | Taxvio",
  description:
    "Professional rectification request filing under Section 154 for clerical errors, calculation mistakes, wrong TDS credits and errors apparent on record in income tax assessment orders. Expert error identification, application drafting and department follow-up. Nationwide service across India.",
  keywords: [
    "rectification request Section 154 India",
    "Section 154 application filing",
    "correct assessment order errors",
    "rectification of ITR mistakes",
    "clerical error correction income tax",
    "calculation mistake rectification",
    "TDS credit correction Section 154",
    "errors apparent on record",
    "rectification request consultant",
    "CA for rectification request India",
    "income tax rectification service",
    "Section 154 time limit",
    "rectification application drafting",
    "professional rectification service nationwide",
    "mistake in assessment order correction",
    "wrong refund rectification",
    "PAN name mismatch correction",
    "arithmetical error rectification",
    "Section 154 vs Section 263",
    "rectification request follow-up India",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/income-tax/rectification-request",
  },
  openGraph: {
    title:
      "Rectification Request Services | Section 154 | Correct Assessment Errors | Taxvio",
    description:
      "Expert rectification request filing under Section 154 for clerical errors, calculation mistakes and errors apparent on record. Professional application drafting and follow-up. Nationwide service. Starting ₹1,499.",
    url: "https://www.taxvio.in/serviceslist/income-tax/rectification-request",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/rectification-request.jpg",
        width: 1200,
        height: 630,
        alt: "Rectification Request Services - Section 154 by Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rectification Request Services | Section 154 | Taxvio",
    description:
      "Professional rectification request filing for income tax assessment order errors under Section 154 across India.",
    images: ["https://www.taxvio.in/og/rectification-request.jpg"],
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

export default function RectificationRequestPage() {
  return <RectificationRequestClient />;
}