import type { Metadata } from "next";
import GSTReturnClient from "./GSTReturnClient";

export const metadata: Metadata = {
  title: "GST Return Filing India 2025 — GSTR-1, GSTR-3B, GSTR-9 | Taxvio",
  description:
    "CA-assisted GST return filing for all businesses — GSTR-1, GSTR-3B, GSTR-9 annual return, QRMP scheme, ITC reconciliation, GSTR-9C. Starting ₹499/month. Zero late fees. Serving Muzaffarnagar, Uttar Pradesh & pan-India.",
  keywords: [
    "GST return filing India",
    "GSTR-1 filing online",
    "GSTR-3B filing online",
    "GSTR-9 annual return filing",
    "GST return filing service India",
    "monthly GST return filing",
    "QRMP scheme GST filing",
    "GST ITC reconciliation",
    "GSTR-2B reconciliation service",
    "GST return due date 2025",
    "GST late fee calculator",
    "GSTR-9C reconciliation statement",
    "GST return filing for small business",
    "GST return filing for e-commerce seller",
    "GST return filing Muzaffarnagar",
    "GST return filing Uttar Pradesh",
    "GST return filing Khatauli",
    "CA assisted GST return filing India",
    "nil GST return filing",
    "GST compliance monthly service",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-return",
  },
  openGraph: {
    title: "GST Return Filing India — GSTR-1, GSTR-3B, GSTR-9 | Taxvio",
    description:
      "Professional monthly GST return filing — GSTR-1, GSTR-3B, ITC reconciliation, QRMP management, GSTR-9 annual return. Starting ₹499/month. CA-assisted, pan India.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-return",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-return.jpg",
        width: 1200,
        height: 630,
        alt: "GST Return Filing India — GSTR-1 GSTR-3B GSTR-9 — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Return Filing India — GSTR-1, GSTR-3B, GSTR-9 | Taxvio",
    description:
      "Monthly GST return filing from ₹499/month. GSTR-1, GSTR-3B, ITC reconciliation, QRMP, GSTR-9. CA-assisted, pan India.",
    images: ["https://www.taxvio.in/og/gst-return.jpg"],
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

export default function GSTReturnPage() {
  return <GSTReturnClient />;
}