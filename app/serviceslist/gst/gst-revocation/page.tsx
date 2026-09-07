// app/serviceslist/gst/gst-revocation/page.tsx
import type { Metadata } from "next";
import GSTRevocationClient from "./GSTRevocationClient";

export const metadata: Metadata = {
  title: "GST Registration Revocation | REG-21 Filing & GSTIN Restoration | Taxvio",
  description:
    "Professional GST registration revocation services. Expert REG-21 application filing to restore cancelled GSTIN. Suo-moto cancellation reversal, pending return clearance, department liaison. 30/90-day deadline compliance. Starting ₹4,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "GST revocation India",
    "GST registration revocation",
    "Form REG-21 filing",
    "restore cancelled GSTIN",
    "suo-moto cancellation reversal",
    "GST cancellation restoration",
    "30-day revocation deadline",
    "REG-21 application process",
    "GST revocation appeal",
    "pending return clearance",
    "GST department liaison",
    "revocation rejected what to do",
    "fresh GST registration post cancellation",
    "GST revocation Mumbai",
    "GST revocation Ahmedabad",
    "restore GSTIN online",
    "GST compliance restoration",
    "ITC restoration after revocation",
    "personal hearing GST revocation",
    "GST notice response revocation",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-revocation",
  },
  openGraph: {
    title: "GST Registration Revocation | REG-21 Filing | Taxvio",
    description:
      "Expert REG-21 filing to restore cancelled GSTIN. 30-day deadline compliance, pending return clearance. Starting ₹4,999.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-revocation",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-revocation.jpg",
        width: 1200,
        height: 630,
        alt: "GST Registration Revocation Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Revocation | REG-21 Filing | Taxvio",
    description:
      "Restore cancelled GSTIN — REG-21 filing, deadline compliance. Starting ₹4,999.",
    images: ["https://www.taxvio.in/og/gst-revocation.jpg"],
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

export default function GSTRevocationPage() {
  return <GSTRevocationClient />;
}