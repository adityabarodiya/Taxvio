// app/serviceslist/gst/gst-for-importers-exporters/page.tsx
import type { Metadata } from "next";
import GstImportExportClient from "./GstImportExportClient";

export const metadata: Metadata = {
  title: "GST for Importers & Exporters | Taxvio",
  description:
    "Specialized GST compliance for import-export businesses. IGST on imports, Bill of Entry reconciliation, export documentation, LUT filing, refund coordination, RCM on import of services. Starting ₹4,999/month. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "GST for importers exporters",
    "IGST on imports",
    "Bill of Entry GST reconciliation",
    "export invoice GST",
    "shipping bill GST matching",
    "LUT for exports",
    "GST refund on exports",
    "zero rated supply GST",
    "import of services RCM",
    "GSTR-1 export reporting",
    "GSTR-3B IGST credit",
    "GST refund for exporters",
    "IEC code GST compliance",
    "customs duty GST integration",
    "GST Muzaffarnagar importers",
    "GST Meerut exporters",
    "GST Noida traders",
    "import export GST Delhi NCR",
    "CA for import export GST",
    "CS for customs GST",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/gst/gst-for-importers-exporters",
  },
  openGraph: {
    title: "GST for Importers & Exporters | Taxvio",
    description:
      "Complete GST compliance for import-export businesses. IGST advisory, Bill of Entry reconciliation, LUT, refunds. ₹4,999/month onwards.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-for-importers-exporters",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-import-export.jpg",
        width: 1200,
        height: 630,
        alt: "GST for Importers & Exporters Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST for Importers & Exporters | Taxvio",
    description:
      "GST compliance for import-export businesses. IGST, Bill of Entry, LUT, refunds. ₹4,999/month+.",
    images: ["https://www.taxvio.in/og/gst-import-export.jpg"],
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

export default function GstImportExportPage() {
  return <GstImportExportClient />;
}