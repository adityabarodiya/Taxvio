// app/serviceslist/gst/gst-hsn-sac-classification/page.tsx
import type { Metadata } from "next";
import GSTHSNSACClassificationClient from "./GSTHSNSACClassificationClient";

export const metadata: Metadata = {
  title: "GST HSN/SAC Code Classification Advisory Services | Tax Rate Accuracy | Taxvio",
  description:
    "Expert HSN (Harmonized System of Nomenclature) and SAC (Services Accounting Code) classification advisory for goods and services. Ensure accurate GST rate application, compliant invoice format, classification dispute resolution, product-wise tax determination, and avoid wrong tax rate penalties. Starting ₹999. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "HSN code classification",
    "SAC code classification",
    "GST rate determination",
    "HSN code for goods",
    "SAC code for services",
    "correct GST rate",
    "product classification GST",
    "service classification GST",
    "HSN SAC advisory",
    "invoice HSN code",
    "classification dispute GST",
    "HSN code search",
    "SAC code list",
    "GST rate schedule",
    "4-digit HSN code",
    "8-digit HSN code",
    "GST Muzaffarnagar",
    "GST Noida",
    "tax classification India",
    "GST compliance advisory",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-hsn-sac-classification",
  },
  openGraph: {
    title: "GST HSN/SAC Code Classification Advisory | Taxvio",
    description:
      "Expert classification of HSN/SAC codes — accurate GST rates, compliant invoices, dispute resolution. Starting ₹999.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-hsn-sac-classification",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-hsn-sac-classification.jpg",
        width: 1200,
        height: 630,
        alt: "GST HSN/SAC Code Classification Advisory — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST HSN/SAC Code Classification | Taxvio",
    description:
      "Accurate HSN/SAC classification for correct GST rates and compliance. Starting ₹999.",
    images: ["https://www.taxvio.in/og/gst-hsn-sac-classification.jpg"],
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

export default function GSTHSNSACClassificationPage() {
  return <GSTHSNSACClassificationClient />;
}