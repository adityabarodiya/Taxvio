import type { Metadata } from "next";
import GSTRegistrationClient from "./GSTRegistrationClient";


export const metadata: Metadata = {
  title: "GST Registration in India 2025 — Get GSTIN Online in 3–7 Days | Taxvio",
  description:
    "CA-assisted GST registration for proprietors, companies, LLPs, e-commerce sellers & exporters. Zero government fee. GSTIN in 3–7 working days. Starting ₹1,499. Serving Muzaffarnagar, Uttar Pradesh & pan-India.",
  keywords: [
    "GST registration India",
    "GST registration online",
    "GSTIN apply online",
    "GST registration fee India",
    "GST registration for proprietorship",
    "GST registration for company",
    "GST registration for LLP",
    "GST registration for e-commerce seller",
    "GST registration for exporter",
    "how to get GST number India",
    "GST registration documents required",
    "GST registration threshold limit India",
    "composition scheme GST registration",
    "casual taxable person GST registration",
    "GST registration Muzaffarnagar",
    "GST registration Uttar Pradesh",
    "GST registration Khatauli",
    "online GST registration CA assisted",
    "GSTR-1 GSTR-3B after registration",
    "new GST registration 2025",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-registration",
  },
  openGraph: {
    title: "GST Registration India — Get GSTIN Online in 3–7 Days | Taxvio",
    description:
      "Professional GST registration for all business types. Zero government fee, CA-assisted, GSTIN in 3–7 days. Starting ₹1,499. Pan India service.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-registration",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-registration.jpg",
        width: 1200,
        height: 630,
        alt: "GST Registration India — Get GSTIN Online — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Registration India — GSTIN in 3–7 Days | Taxvio",
    description:
      "CA-assisted GST registration for all business types. Zero govt fee. Starting ₹1,499.",
    images: ["https://www.taxvio.in/og/gst-registration.jpg"],
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

export default function GSTRegistrationPage() {
  return <GSTRegistrationClient />;
}