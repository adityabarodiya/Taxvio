// app/serviceslist/gst/gst-advance-ruling/page.tsx
import type { Metadata } from "next";
import GSTAdvanceRulingClient from "./GSTAdvanceRulingClient";

export const metadata: Metadata = {
  title: "GST Advance Ruling (AAR) Application Services | Classification & Tax Clarity | Taxvio",
  description:
    "Professional GST Advance Ruling (AAR) application services. Expert ARA-01 filing for GST rate, HSN/SAC classification, taxability, ITC, exemption clarity. Hearing representation before Authority for Advance Ruling. Prevent disputes & get binding legal certainty. Starting ₹19,999. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST advance ruling India",
    "AAR application filing",
    "Form ARA-01 filing",
    "GST classification ruling",
    "HSN code advance ruling",
    "GST rate clarification",
    "Authority for Advance Ruling",
    "AAR hearing representation",
    "GST taxability ruling",
    "ITC eligibility ruling",
    "exemption applicability AAR",
    "product classification AAR",
    "AAAR appeal",
    "Section 97 CGST Act",
    "pre-transaction GST clarity",
    "AAR Mumbai",
    "AAR Delhi NCR",
    "AAR Noida",
    "GST consultant for AAR",
    "binding GST ruling",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-advance-ruling",
  },
  openGraph: {
    title: "GST Advance Ruling (AAR) Application | Tax Clarity | Taxvio",
    description:
      "Expert AAR application — classification, rate, taxability clarity. Hearing representation. Starting ₹19,999.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-advance-ruling",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-advance-ruling.jpg",
        width: 1200,
        height: 630,
        alt: "GST Advance Ruling Application Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Advance Ruling (AAR) | Taxvio",
    description:
      "Get binding GST clarity — classification, rate, taxability. AAR application. Starting ₹19,999.",
    images: ["https://www.taxvio.in/og/gst-advance-ruling.jpg"],
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

export default function GSTAdvanceRulingPage() {
  return <GSTAdvanceRulingClient />;
}