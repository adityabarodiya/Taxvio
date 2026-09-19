// app/serviceslist/roc/agm-compliance/page.tsx
import type { Metadata } from "next";
import AgmComplianceClient from "./AgmComplianceClient";

export const metadata: Metadata = {
  title: "AGM Compliance Services | Taxvio",
  description:
    "Conduct your company's Annual General Meeting (AGM) with expert compliance support. AGM notice drafting, agenda preparation, Board resolution, minutes documentation, MGT-14 & MGT-15 filing. Starting ₹4,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "AGM compliance",
    "annual general meeting services",
    "AGM notice drafting",
    "section 96 companies act AGM",
    "AGM within 6 months",
    "30 September AGM deadline",
    "MGT-14 filing",
    "MGT-15 filing listed companies",
    "AGM extension application",
    "section 129 financial statements",
    "ordinary resolution approval",
    "directors report AGM",
    "AGM compliance Muzaffarnagar",
    "AGM services Meerut",
    "AGM compliance Noida",
    "AGM Delhi NCR",
    "CA for AGM",
    "CS for AGM compliance",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/roc/agm-compliance",
  },
  openGraph: {
    title: "AGM Compliance Services | Taxvio",
    description:
      "Complete AGM support — notice, resolutions, minutes, MGT-14/MGT-15 filing. Expert CS & CA team. ₹4,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/agm-compliance",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/agm-compliance.jpg",
        width: 1200,
        height: 630,
        alt: "AGM Compliance Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGM Compliance Services | Taxvio",
    description:
      "Complete AGM support from notice to minutes. MGT-14/15 filing included. 5-7 days. ₹4,999+.",
    images: ["https://www.taxvio.in/og/agm-compliance.jpg"],
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

export default function AgmCompliancePage() {
  return <AgmComplianceClient />;
}