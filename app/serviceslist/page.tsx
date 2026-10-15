// Place this file at: app/serviceslist/page.tsx

import type { Metadata } from "next";
import ServicesListClient from "./ServicesListClient";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust this import path to match where serviceCategories.ts actually lives in your repo

const totalServices = serviceCategories.reduce((sum, cat) => sum + cat.services.length, 0);

export const metadata: Metadata = {
  title: `All Services — GST, Income Tax, ROC & FSSAI Compliance | Taxvio`,
  description: `Browse all ${totalServices}+ CA-led compliance services at Taxvio — GST registration & returns, Income Tax filing & audits, ROC/company law compliance, and FSSAI food licensing. Transparent pricing, pan-India service.`,
  keywords: [
    "Taxvio services",
    "GST services India",
    "income tax services India",
    "ROC compliance services",
    "FSSAI services",
    "company registration services",
    "CA services online",
    "business compliance services India",
    "tax consultant services list",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist",
  },
  openGraph: {
    title: "All Services — GST, Income Tax, ROC & FSSAI | Taxvio",
    description: `Browse all ${totalServices}+ CA-led compliance services at Taxvio across GST, Income Tax, ROC and FSSAI — transparent pricing, pan-India service.`,
    url: "https://www.taxvio.in/serviceslist",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/serviceslist.jpg",
        width: 1200,
        height: 630,
        alt: "Taxvio — All GST, Income Tax, ROC and FSSAI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Services — GST, Income Tax, ROC & FSSAI | Taxvio",
    description: `Browse all ${totalServices}+ CA-led compliance services at Taxvio — transparent pricing, pan-India service.`,
    images: ["https://www.taxvio.in/og/serviceslist.jpg"],
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

export default function ServicesListPage() {
  return <ServicesListClient />;
}