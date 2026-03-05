import type { Metadata } from "next";
import GSTRefundClient from "./GSTRefundClient";

export const metadata: Metadata = {
  title: "GST Refund Application India 2025 — Export, Inverted Duty, ITC Refund | Taxvio",
  description:
    "CA-assisted GST refund filing — export refund (LUT & IGST route), inverted duty structure refund, excess cash ledger refund, SEZ supplier refund, post-cancellation refund. Rule 89 computation, RFD-01 filing, RFD-03 response. Starting ₹2,499. Pan India.",
  keywords: [
    "GST refund application India",
    "GST export refund India",
    "inverted duty structure refund GST",
    "GST ITC refund India",
    "RFD-01 GST refund filing",
    "GST refund LUT route",
    "GST refund IGST paid route",
    "Rule 89 GST refund computation",
    "GST refund 2 year deadline",
    "GST excess cash ledger refund",
    "SEZ supplier GST refund",
    "RFD-03 deficiency memo response",
    "ICEGATE GST refund mismatch",
    "GST refund Section 54 CGST Act",
    "GST refund after cancellation",
    "GST refund Muzaffarnagar",
    "GST refund Uttar Pradesh",
    "GST refund Khatauli",
    "CA assisted GST refund India",
    "FIRC service export GST refund",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-refund",
  },
  openGraph: {
    title: "GST Refund Application India — Export, Inverted Duty, ITC Refund | Taxvio",
    description:
      "Professional GST refund filing — export (LUT & IGST), inverted duty, excess cash, SEZ. Rule 89 computation, RFD-01, RFD-03 response. Starting ₹2,499. CA-assisted, pan India.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-refund",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-refund.jpg",
        width: 1200,
        height: 630,
        alt: "GST Refund Application India — Export Inverted Duty ITC — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Refund India — Export, Inverted Duty, ITC | Taxvio",
    description:
      "CA-assisted GST refund — RFD-01, Rule 89 computation, export & inverted duty. Starting ₹2,499.",
    images: ["https://www.taxvio.in/og/gst-refund.jpg"],
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

export default function GSTRefundPage() {
  return <GSTRefundClient />;
}