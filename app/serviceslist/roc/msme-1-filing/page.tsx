// app/serviceslist/roc/msme-1-filing/page.tsx
import type { Metadata } from "next";
import Msme1FilingClient from "./Msme1FilingClient";

export const metadata: Metadata = {
  title: "MSME-1 Filing Services FY 2025-26 | Taxvio",
  description:
    "File your half-yearly MSME-1 return for FY 2025-26 disclosing overdue payments to micro and small enterprises. Complete vendor verification, payment compilation, and MCA filing. Starting ₹3,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "MSME-1 filing",
    "half-yearly MSME return",
    "MSME vendor payment disclosure",
    "Section 9 MSMED Act",
    "outstanding payments beyond 45 days",
    "MSME-1 filing FY 2025-26",
    "MSME compliance",
    "vendor MSME status",
    "delayed vendor payments",
    "MSME-1 MCA filing",
    "MSME-1 form",
    "MSME vendor disclosure",
    "MSME-1 filing Muzaffarnagar",
    "MSME-1 filing Meerut",
    "MSME-1 filing Noida",
    "MSME-1 filing Delhi NCR",
    "CA for MSME-1 filing",
    "CS for MSME-1 compliance",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/roc/msme-1-filing",
  },
  openGraph: {
    title: "MSME-1 Filing Services FY 2025-26 | Taxvio",
    description:
      "File MSME-1 half-yearly return disclosing overdue payments to micro and small enterprises. Vendor verification, payment compilation, MCA filing. ₹3,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/msme-1-filing",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/msme-1-filing.jpg",
        width: 1200,
        height: 630,
        alt: "MSME-1 Half-Yearly Return Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSME-1 Filing Services FY 2025-26 | Taxvio",
    description:
      "File MSME-1 half-yearly return for FY 2025-26. Disclose overdue payments to MSME vendors. 3-5 days. ₹3,999+.",
    images: ["https://www.taxvio.in/og/msme-1-filing.jpg"],
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

export default function Msme1FilingPage() {
  return <Msme1FilingClient />;
}