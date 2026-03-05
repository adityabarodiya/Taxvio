import type { Metadata } from "next";
import GSTSearchClient from "./GSTSearchClient";

export const metadata: Metadata = {
  title: "GSTIN Search & Verification — Free Online GST Number Check | Taxvio",
  description:
    "Free online GSTIN search and verification tool. Enter any 15-digit GST number to instantly check business name, registration status (Active/Cancelled), taxpayer type, registration date, jurisdiction and address. No login required.",
  keywords: [
    "GSTIN search",
    "GST number search",
    "GSTIN verification",
    "verify GSTIN online",
    "GST number check India",
    "GSTIN lookup free",
    "check GST registration status",
    "GSTIN active or cancelled",
    "GST taxpayer details",
    "GST number verification tool",
    "GSTIN status check",
    "verify GST number India",
    "GST registration check",
    "GSTIN registration date",
    "GST state code India",
    "GSTIN search Muzaffarnagar",
    "GST number check Uttar Pradesh",
    "free GSTIN checker India",
    "GST taxpayer type check",
    "ITC verification GSTIN",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-search",
  },
  openGraph: {
    title: "Free GSTIN Search & Verification — Check Any GST Number | Taxvio",
    description:
      "Instantly verify any GSTIN — business name, Active/Cancelled status, taxpayer type, registration date, jurisdiction. Free, no login, real-time GST portal data.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-search",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-search.jpg",
        width: 1200,
        height: 630,
        alt: "Free GSTIN Search and Verification Tool — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free GSTIN Search & Verification | Taxvio",
    description:
      "Instantly verify any GSTIN — status, name, type, date, address. Free, no login.",
    images: ["https://www.taxvio.in/og/gst-search.jpg"],
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

export default function GSTSearchPage() {
  return <GSTSearchClient />;
}