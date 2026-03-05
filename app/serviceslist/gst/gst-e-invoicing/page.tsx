import type { Metadata } from "next";
import GSTEInvoicingClient from "./GSTEInvoicingClient";

export const metadata: Metadata = {
  title: "GST E-Invoicing Setup India 2025 — IRN, QR Code & ERP Integration | Taxvio",
  description:
    "CA-assisted GST e-invoicing setup — IRP registration, IRN generation, QR code compliance, Tally/Zoho/Busy/SAP integration, GSTR-1 auto-population. Mandatory for turnover > ₹5 crore. Starting ₹1,999. Pan India.",
  keywords: [
    "GST e-invoicing India",
    "e-invoice setup India",
    "IRN generation GST",
    "Invoice Reference Number India",
    "GST e-invoicing applicability",
    "GST e-invoicing turnover limit",
    "IRP registration India",
    "e-invoice QR code compliance",
    "Tally e-invoicing integration",
    "Zoho Books e-invoicing",
    "GST e-invoicing ERP integration",
    "e-invoicing mandatory ₹5 crore",
    "GST e-invoice penalty",
    "CBIC e-invoicing notification",
    "GSTR-1 auto population e-invoice",
    "GST e-invoicing Muzaffarnagar",
    "GST e-invoicing Uttar Pradesh",
    "GST e-invoicing Khatauli",
    "CA assisted e-invoicing setup",
    "e-invoice cancellation IRN",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-e-invoicing",
  },
  openGraph: {
    title: "GST E-Invoicing Setup India — IRN, QR Code & ERP Integration | Taxvio",
    description:
      "Complete GST e-invoicing setup — IRP registration, IRN generation, QR code, Tally/Zoho/SAP integration. Mandatory for ₹5 crore+ businesses. Starting ₹1,999. CA-assisted, pan India.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-e-invoicing",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-e-invoicing.jpg",
        width: 1200,
        height: 630,
        alt: "GST E-Invoicing Setup India — IRN QR Code ERP — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST E-Invoicing Setup India — IRN, QR Code | Taxvio",
    description:
      "E-invoicing setup — IRP registration, IRN, QR code, ERP integration. Starting ₹1,999.",
    images: ["https://www.taxvio.in/og/gst-e-invoicing.jpg"],
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

export default function GSTEInvoicingPage() {
  return <GSTEInvoicingClient />;
}