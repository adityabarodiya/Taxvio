// app/serviceslist/gst/gst-job-work/page.tsx
import type { Metadata } from "next";
import GSTJobWorkClient from "./GSTJobWorkClient";

export const metadata: Metadata = {
  title: "GST Job Work Compliance & ITC-04 Filing Services | Section 143 Support | Taxvio",
  description:
    "Professional GST job work compliance services. Expert ITC-04 quarterly return filing, challan tracking, time-limit monitoring (1 year/3 years), delivery challan preparation, ITC reversal computation. For manufacturers sending goods to job workers. Starting ₹2,999/quarter. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST job work compliance India",
    "ITC-04 filing",
    "job work challan tracking",
    "Section 143 CGST Act",
    "job worker GST",
    "delivery challan job work",
    "1 year time limit inputs",
    "3 year time limit capital goods",
    "job work register",
    "ITC reversal job work",
    "principal manufacturer GST",
    "job work agreement GST",
    "job work for manufacturers",
    "textile job work compliance",
    "engineering job work GST",
    "ITC-04 Mumbai",
    "ITC-04 Delhi NCR",
    "ITC-04 Noida",
    "CA for job work compliance",
    "quarterly job work return",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-job-work",
  },
  openGraph: {
    title: "GST Job Work Compliance & ITC-04 Filing | Taxvio",
    description:
      "Expert ITC-04 filing, challan tracking, time-limit monitoring. For manufacturers. Starting ₹2,999/quarter.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-job-work",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-job-work.jpg",
        width: 1200,
        height: 630,
        alt: "GST Job Work Compliance Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Job Work & ITC-04 Filing | Taxvio",
    description:
      "Complete job work compliance — ITC-04 filing, time-limit tracking. Starting ₹2,999/quarter.",
    images: ["https://www.taxvio.in/og/gst-job-work.jpg"],
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

export default function GSTJobWorkPage() {
  return <GSTJobWorkClient />;
}