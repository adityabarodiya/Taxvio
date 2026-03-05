import type { Metadata } from "next";
import GSTLUTClient from "./GSTLUTClient";

export const metadata: Metadata = {
  title: "GST LUT Filing India 2025 — Form RFD-11, Export Without IGST | Taxvio",
  description:
    "CA-assisted GST LUT (Letter of Undertaking) filing in Form RFD-11. Export goods and services without paying IGST. Covers exports, SEZ supplies, service exports. No bank guarantee. Instant ARN. Starting ₹999/year. Pan India.",
  keywords: [
    "GST LUT filing India",
    "letter of undertaking GST",
    "LUT GST export without IGST",
    "Form RFD-11 GST LUT",
    "GST LUT online filing",
    "export without payment of tax GST",
    "GST LUT annual filing",
    "GST LUT SEZ supplies",
    "GST LUT vs bond comparison",
    "GST zero rated supply LUT",
    "IGST exemption export India",
    "Rule 96A CGST LUT",
    "GST LUT service exporter India",
    "GST LUT ARN acknowledgment",
    "GST LUT renewal financial year",
    "GST LUT filing Muzaffarnagar",
    "GST LUT filing Uttar Pradesh",
    "CA assisted LUT filing India",
    "GST LUT ITC refund exporter",
    "export compliance GST India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-lut",
  },
  openGraph: {
    title: "GST LUT Filing India — Export Without IGST, Form RFD-11 | Taxvio",
    description:
      "File GST LUT (Form RFD-11) and export without paying IGST. Covers goods, services & SEZ supplies. No bank guarantee. Instant ARN. Starting ₹999/year. CA-assisted.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-lut",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-lut.jpg",
        width: 1200,
        height: 630,
        alt: "GST LUT Filing India — Export Without IGST — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST LUT Filing India — Form RFD-11 | Taxvio",
    description:
      "File GST LUT, export without IGST — goods, services & SEZ. Instant ARN. Starting ₹999/year.",
    images: ["https://www.taxvio.in/og/gst-lut.jpg"],
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

export default function GSTLUTPage() {
  return <GSTLUTClient />;
}