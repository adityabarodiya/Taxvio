// app/serviceslist/gst/gst-for-real-estate/page.tsx
import type { Metadata } from "next";
import GSTForRealEstateClient from "./GSTForRealEstateClient";

export const metadata: Metadata = {
  title: "GST for Real Estate & Construction | Builders, Developers, Contractors | Taxvio",
  description:
    "Specialized GST compliance services for real estate developers, builders, contractors, and construction companies. Expert advisory on GST rate applicability (affordable housing 1%, regular housing 5%, commercial 12%), ITC eligibility & restrictions on construction inputs, ITC reversal calculations, joint development agreement (JDA) structuring, works contract GST & RCM compliance, RERA-GST linking, land vs construction value bifurcation, TDR/FSI treatment, GSTR-1/GSTR-3B filing for real estate projects, and complete compliance support. Starting ₹9,999/month. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST for real estate",
    "real estate GST compliance",
    "builder GST registration",
    "construction GST",
    "affordable housing GST rate",
    "1% GST housing",
    "5% GST real estate",
    "ITC on construction",
    "works contract GST",
    "RCM construction",
    "joint development agreement GST",
    "RERA GST compliance",
    "land value GST",
    "TDR FSI GST",
    "contractor GST",
    "under construction property GST",
    "GST Noida real estate",
    "GST Delhi NCR builders",
    "real estate GST India",
    "construction GST advisory",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-for-real-estate",
  },
  openGraph: {
    title: "GST for Real Estate & Construction | Builders & Developers | Taxvio",
    description:
      "Complete GST compliance for real estate — Rate advisory, ITC optimization, works contract RCM, JDA structuring. Starting ₹9,999/month.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-for-real-estate",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-for-real-estate.jpg",
        width: 1200,
        height: 630,
        alt: "GST for Real Estate & Construction — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST for Real Estate & Construction | Taxvio",
    description:
      "GST compliance for builders, developers, contractors — Rate advisory, ITC, RCM. Starting ₹9,999/month.",
    images: ["https://www.taxvio.in/og/gst-for-real-estate.jpg"],
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

export default function GSTForRealEstatePage() {
  return <GSTForRealEstateClient />;
}