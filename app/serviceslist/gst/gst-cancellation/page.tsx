import type { Metadata } from "next";
import GSTCancellationClient from "./GSTCancellationClient";

export const metadata: Metadata = {
  title: "GST Cancellation & Revocation India 2025 — REG-16, REG-21, GSTR-10 | Taxvio",
  description:
    "CA-assisted GST cancellation (REG-16) and revocation (REG-21) services. Voluntary cancellation, suo motu cancellation response, GSTR-10 final return, ITC reversal under Rule 44. Starting ₹1,499. Muzaffarnagar, Uttar Pradesh & pan-India.",
  keywords: [
    "GST cancellation India",
    "GST registration cancellation online",
    "voluntary GST cancellation",
    "suo motu GST cancellation",
    "REG-16 GST cancellation form",
    "GSTR-10 final return GST",
    "GST revocation India",
    "REG-21 revocation application",
    "restore cancelled GSTIN India",
    "GST cancellation ITC reversal",
    "Rule 44 ITC reversal GST",
    "GST cancellation GSTR-10 filing",
    "compulsory GST cancellation",
    "GST revocation 90 days",
    "cancel GSTIN online India",
    "GST cancellation Muzaffarnagar",
    "GST cancellation Uttar Pradesh",
    "GST cancellation Khatauli",
    "CA assisted GST cancellation India",
    "GST registration surrender India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-cancellation",
  },
  openGraph: {
    title: "GST Cancellation & Revocation India — REG-16, GSTR-10, REG-21 | Taxvio",
    description:
      "Professional GST cancellation and revocation — REG-16 filing, ITC reversal, GSTR-10 final return, REG-21 revocation. Starting ₹1,499. CA-assisted, pan India.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-cancellation",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-cancellation.jpg",
        width: 1200,
        height: 630,
        alt: "GST Cancellation Revocation India REG-16 REG-21 — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Cancellation & Revocation India | Taxvio",
    description:
      "CA-assisted REG-16 cancellation, GSTR-10, ITC reversal & REG-21 revocation. Starting ₹1,499.",
    images: ["https://www.taxvio.in/og/gst-cancellation.jpg"],
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

export default function GSTCancellationPage() {
  return <GSTCancellationClient />;
}