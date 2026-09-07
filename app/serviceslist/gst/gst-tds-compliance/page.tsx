// app/serviceslist/gst/gst-tds-compliance/page.tsx
import type { Metadata } from "next";
import GSTTDSComplianceClient from "./GSTTDSComplianceClient";

export const metadata: Metadata = {
  title: "GST TDS Compliance & GSTR-7 Filing Services | Section 51 TDS Deduction | Taxvio",
  description:
    "Professional GST TDS compliance for government departments, PSUs & local authorities. Expert GSTR-7 monthly filing, TDS certificate (GSTR-7A) issuance, deductee reconciliation. 2% TDS deduction support. Starting ₹1,999/month. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST TDS compliance India",
    "GSTR-7 filing",
    "Section 51 GST TDS",
    "GST TDS deduction",
    "GSTR-7A certificate",
    "government GST TDS",
    "PSU GST compliance",
    "local authority TDS",
    "2% GST TDS rate",
    "TDS deductor GSTR-7",
    "monthly GSTR-7 filing",
    "GST TDS payment",
    "deductee reconciliation",
    "GSTR-7 deadline 10th",
    "GST TDS for government",
    "GSTR-7 filing Mumbai",
    "GSTR-7 filing Delhi NCR",
    "GSTR-7 filing Noida",
    "CA for GSTR-7 filing",
    "GST TDS compliance consultant",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-tds-compliance",
  },
  openGraph: {
    title: "GST TDS Compliance & GSTR-7 Filing | Section 51 TDS | Taxvio",
    description:
      "Expert GST TDS compliance for govt departments & PSUs. GSTR-7 filing, TDS certificate issuance, deductee reconciliation. Starting ₹1,999/month.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-tds-compliance",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-tds-compliance.jpg",
        width: 1200,
        height: 630,
        alt: "GST TDS Compliance & GSTR-7 Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST TDS Compliance & GSTR-7 Filing | Taxvio",
    description:
      "Complete GST TDS compliance — GSTR-7 filing, TDS certificates. Starting ₹1,999/month.",
    images: ["https://www.taxvio.in/og/gst-tds-compliance.jpg"],
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

export default function GSTTDSCompliancePage() {
  return <GSTTDSComplianceClient />;
}