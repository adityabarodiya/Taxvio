import type { Metadata } from "next";
import GSTAmendmentClient from "./GSTAmendmentClient";

export const metadata: Metadata = {
  title: "GST Amendment in India 2025 — Update GST Registration Details | Taxvio",
  description:
    "CA-assisted GST amendment services — update business name, address, bank account, authorised signatory, partners/directors, and all core & non-core fields via Form REG-14. Starting ₹799. Serving Muzaffarnagar, Uttar Pradesh & pan-India.",
  keywords: [
    "GST amendment India",
    "GST registration amendment online",
    "update GST details India",
    "core amendment GST",
    "non-core amendment GST",
    "GST address change",
    "GST business name change",
    "GST bank account update",
    "GST authorised signatory change",
    "Form REG-14 GST amendment",
    "GST partner addition removal",
    "GST director change",
    "GST amendment processing time",
    "GST amendment documents required",
    "GST principal place of business change",
    "GST amendment Muzaffarnagar",
    "GST amendment Uttar Pradesh",
    "GST amendment Khatauli",
    "CA assisted GST amendment India",
    "GST REG-15 amended certificate",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-amendment",
  },
  openGraph: {
    title: "GST Amendment India — Update GST Registration Details | Taxvio",
    description:
      "Professional GST amendment for all core and non-core fields — name, address, bank account, signatory, partners. Form REG-14 filing. Starting ₹799. CA-assisted, pan India.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-amendment",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-amendment.jpg",
        width: 1200,
        height: 630,
        alt: "GST Amendment India — Update GST Registration Details — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Amendment India — Update GST Details | Taxvio",
    description:
      "CA-assisted GST amendment — core & non-core fields, Form REG-14, starting ₹799. Pan India.",
    images: ["https://www.taxvio.in/og/gst-amendment.jpg"],
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

export default function GSTAmendmentPage() {
  return <GSTAmendmentClient />;
}