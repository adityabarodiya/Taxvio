// app/serviceslist/gst/gst-composition-to-regular/page.tsx
import type { Metadata } from "next";
import GSTCompositionToRegularClient from "./GSTCompositionToRegularClient";

export const metadata: Metadata = {
  title: "GST Composition to Regular Scheme Transition Services | ITC-01 Filing | Taxvio",
  description:
    "Expert GST Composition Scheme to Regular Scheme transition services. Complete support for CMP-04 withdrawal filing, ITC-01 stock credit claim, transition return filing, eligibility review, and regular scheme migration. Maximize input tax credit on stock. Starting ₹4,999. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST composition to regular transition",
    "CMP-04 withdrawal",
    "ITC-01 stock credit claim",
    "composition scheme exit",
    "regular scheme migration GST",
    "stock ITC claim composition",
    "GST transition return",
    "composition scheme turnover limit",
    "opt out of composition scheme",
    "regular GST scheme benefits",
    "ITC-01 filing online",
    "composition to normal taxpayer",
    "GST scheme change",
    "CMP-02 to regular",
    "stock credit transition",
    "GST Muzaffarnagar",
    "GST Noida",
    "GST Delhi NCR",
    "CA for composition exit",
    "GST transition support India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-composition-to-regular",
  },
  openGraph: {
    title: "GST Composition to Regular Scheme Transition | Taxvio",
    description:
      "Expert transition from Composition to Regular GST — CMP-04 filing, ITC-01 stock credit, seamless migration. Starting ₹4,999.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-composition-to-regular",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-composition-to-regular.jpg",
        width: 1200,
        height: 630,
        alt: "GST Composition to Regular Scheme Transition — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Composition to Regular Transition | Taxvio",
    description:
      "Seamless migration from Composition to Regular GST — ITC-01 stock credit claim. Starting ₹4,999.",
    images: ["https://www.taxvio.in/og/gst-composition-to-regular.jpg"],
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

export default function GSTCompositionToRegularPage() {
  return <GSTCompositionToRegularClient />;
}