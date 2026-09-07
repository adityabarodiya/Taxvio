// app/serviceslist/gst/gst-appeal-filing/page.tsx
import type { Metadata } from "next";
import GSTAppealFilingClient from "./GSTAppealFilingClient";

export const metadata: Metadata = {
  title: "GST Appeal Filing Services | Appellate Authority Representation | Taxvio",
  description:
    "Professional GST appeal filing services before First Appellate Authority. Expert APL-01 drafting, pre-deposit computation, grounds of appeal preparation, hearing representation. Challenge adverse demand, penalty, refund orders. Starting ₹9,999. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST appeal filing India",
    "Form APL-01 filing",
    "GST Appellate Authority",
    "GST demand appeal",
    "challenge GST order",
    "GST pre-deposit",
    "Section 107 CGST Act",
    "GST Commissioner Appeals",
    "grounds of appeal GST",
    "GST hearing representation",
    "appeal against penalty",
    "GST refund rejection appeal",
    "ITC denial appeal",
    "GST cancellation appeal",
    "condonation of delay GST",
    "GST appeal Mumbai",
    "GST appeal Delhi NCR",
    "GST appeal Noida",
    "CA for GST appeal",
    "GST litigation support",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-appeal-filing",
  },
  openGraph: {
    title: "GST Appeal Filing Services | Appellate Representation | Taxvio",
    description:
      "Expert GST appeal filing — APL-01 drafting, pre-deposit, hearing representation. Challenge adverse orders. Starting ₹9,999.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-appeal-filing",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-appeal-filing.jpg",
        width: 1200,
        height: 630,
        alt: "GST Appeal Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Appeal Filing | Taxvio",
    description:
      "Challenge GST orders — APL-01 filing, hearing representation. Starting ₹9,999.",
    images: ["https://www.taxvio.in/og/gst-appeal-filing.jpg"],
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

export default function GSTAppealFilingPage() {
  return <GSTAppealFilingClient />;
}