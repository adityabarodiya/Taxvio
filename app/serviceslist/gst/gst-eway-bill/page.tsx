// app/serviceslist/gst/gst-eway-bill/page.tsx
import type { Metadata } from "next";
import GSTEwayBillClient from "./GSTEwayBillClient";

export const metadata: Metadata = {
  title: "GST E-Way Bill Generation Services | Transit Documentation & Compliance | Taxvio",
  description:
    "Professional GST E-Way Bill generation, validation, and compliance services. Instant generation, vehicle updation, validity extension, bulk processing. Prevent transit delays & seizure. Starting ₹99/bill. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST e-way bill generation India",
    "e-way bill services",
    "online e-way bill generation",
    "bulk e-way bill upload",
    "e-way bill validity extension",
    "Part A Part B e-way bill",
    "vehicle detail updation",
    "transporter ID registration",
    "e-way bill compliance audit",
    "consolidated e-way bill",
    "e-way bill API integration",
    "e-way bill penalty avoidance",
    "inter-state e-way bill",
    "intra-state e-way bill",
    "e-way bill Mumbai",
    "e-way bill Delhi NCR",
    "e-way bill Noida",
    "e-way bill for transporters",
    "e-way bill for manufacturers",
    "GST transit documentation",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-eway-bill",
  },
  openGraph: {
    title: "GST E-Way Bill Generation Services | Transit Compliance | Taxvio",
    description:
      "Expert e-way bill generation, validation, updation & compliance. Prevent seizure & penalties. Starting ₹99/bill.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-eway-bill",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-eway-bill.jpg",
        width: 1200,
        height: 630,
        alt: "GST E-Way Bill Generation Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST E-Way Bill Generation | Taxvio",
    description:
      "Instant e-way bill generation — validity extension, bulk processing. Starting ₹99/bill.",
    images: ["https://www.taxvio.in/og/gst-eway-bill.jpg"],
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

export default function GSTEwayBillPage() {
  return <GSTEwayBillClient />;
}