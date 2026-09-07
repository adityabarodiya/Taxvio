// app/serviceslist/gst/gst-for-manufacturers/page.tsx
import type { Metadata } from "next";
import GSTForManufacturersClient from "./GSTForManufacturersClient";

export const metadata: Metadata = {
  title: "GST for Manufacturers & Job Workers | ITC Optimization | Multi-State Registration | Taxvio",
  description:
    "Comprehensive GST compliance services for manufacturing units, textile mills, engineering firms, and job workers. Expert GST registration (single & multi-state), input tax credit (ITC) optimization on raw materials and capital goods, job work compliance (ITC-04 filing, challan tracking, section 143 compliance), GSTR-1/GSTR-3B filing, e-way bill generation, stock transfer documentation, inter-state supply management, and complete manufacturing GST support. Starting ₹4,999/month. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST for manufacturers",
    "manufacturing GST compliance",
    "ITC optimization manufacturing",
    "job work GST",
    "ITC-04 filing",
    "multi-state GST registration",
    "capital goods ITC",
    "raw material input credit",
    "e-way bill manufacturing",
    "stock transfer GST",
    "textile GST compliance",
    "engineering firm GST",
    "factory GST registration",
    "job work challan",
    "section 143 job work",
    "GST Muzaffarnagar manufacturers",
    "GST Noida manufacturing",
    "manufacturing GST India",
    "production unit GST",
    "GST for job workers",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-for-manufacturers",
  },
  openGraph: {
    title: "GST for Manufacturers & Job Workers | ITC Optimization | Taxvio",
    description:
      "Complete GST compliance for manufacturing units — Multi-state registration, ITC optimization, job work tracking. Starting ₹4,999/month.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-for-manufacturers",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-for-manufacturers.jpg",
        width: 1200,
        height: 630,
        alt: "GST for Manufacturers & Job Workers — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST for Manufacturers & Job Workers | Taxvio",
    description:
      "GST compliance for manufacturers — ITC optimization, job work tracking, multi-state registration. Starting ₹4,999/month.",
    images: ["https://www.taxvio.in/og/gst-for-manufacturers.jpg"],
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

export default function GSTForManufacturersPage() {
  return <GSTForManufacturersClient />;
}