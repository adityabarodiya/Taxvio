// app/serviceslist/gst/gstr-10-final-return/page.tsx
import type { Metadata } from "next";
import GSTRTenFinalReturnClient from "./GSTRTenFinalReturnClient";

export const metadata: Metadata = {
  title: "GSTR-10 Final Return Filing Services | GST Cancellation Closing Return | Taxvio",
  description:
    "Professional GSTR-10 final return filing after GST cancellation. Expert closing stock valuation, ITC reversal computation, liability reconciliation. 3-month deadline compliance. Starting ₹2,999. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GSTR-10 filing India",
    "GST final return filing",
    "GSTR-10 after cancellation",
    "closing stock valuation GST",
    "ITC reversal computation",
    "GST-10 deadline",
    "GSTR-10 penalty",
    "final return GST cancellation",
    "stock reconciliation GSTR-10",
    "capital goods ITC reversal",
    "GSTR-10 filing online",
    "GST cancellation compliance",
    "GSTR-10 late filing",
    "GST closing return",
    "GSTR-10 filing Mumbai",
    "GSTR-10 filing Delhi NCR",
    "GSTR-10 filing Noida",
    "CA for GSTR-10 filing",
    "GSTR-10 stock valuation certificate",
    "GST final compliance closure",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gstr-10-final-return",
  },
  openGraph: {
    title: "GSTR-10 Final Return Filing | GST Cancellation Closing Return | Taxvio",
    description:
      "Expert GSTR-10 filing after GST cancellation. Closing stock valuation, ITC reversal, 3-month deadline compliance. Starting ₹2,999.",
    url: "https://www.taxvio.in/serviceslist/gst/gstr-10-final-return",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gstr-10-final-return.jpg",
        width: 1200,
        height: 630,
        alt: "GSTR-10 Final Return Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSTR-10 Final Return Filing | Taxvio",
    description:
      "File GSTR-10 after GST cancellation — stock valuation, ITC reversal. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/gstr-10-final-return.jpg"],
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

export default function GSTRTenFinalReturnPage() {
  return <GSTRTenFinalReturnClient />;
}