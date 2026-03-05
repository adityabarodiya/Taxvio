import type { Metadata } from "next";
import GSTR9Client from "./GSTR9Client";

export const metadata: Metadata = {
  title: "GSTR-9 Annual Return Filing India 2025 — GST Annual Reconciliation | Taxvio",
  description:
    "CA-assisted GSTR-9 and GSTR-9C filing — annual reconciliation of GSTR-1 vs GSTR-3B, ITC vs GSTR-2B, HSN-wise summary, late fee minimisation. Mandatory for turnover >₹2 crore. Due 31 December. Starting ₹2,999. Pan India.",
  keywords: [
    "GSTR-9 filing India",
    "GST annual return filing",
    "GSTR-9 due date 2025",
    "GSTR-9 late fee calculator",
    "GSTR-9C reconciliation statement",
    "GSTR-9 annual reconciliation",
    "GSTR-1 GSTR-3B reconciliation",
    "ITC GSTR-2B reconciliation",
    "GSTR-9 mandatory turnover limit",
    "GSTR-9 HSN wise summary",
    "GSTR-9 table 8 ITC reconciliation",
    "Section 44 CGST annual return",
    "GSTR-9C self certified",
    "GSTR-9 optional below 2 crore",
    "GST annual return deadline",
    "GSTR-9 filing Muzaffarnagar",
    "GSTR-9 filing Uttar Pradesh",
    "GSTR-9 filing Khatauli",
    "CA assisted GSTR-9 India",
    "GSTR-9 amnesty late fee waiver",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gstr-9",
  },
  openGraph: {
    title: "GSTR-9 Annual Return Filing India — GST Reconciliation & GSTR-9C | Taxvio",
    description:
      "GSTR-9 & GSTR-9C filing with full annual reconciliation — GSTR-1 vs 3B, ITC vs GSTR-2B, HSN summary. Late fee calculator. Starting ₹2,999. CA-assisted, pan India.",
    url: "https://www.taxvio.in/serviceslist/gst/gstr-9",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gstr-9.jpg",
        width: 1200,
        height: 630,
        alt: "GSTR-9 Annual Return Filing India — GST Reconciliation — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSTR-9 Annual Return India — Reconciliation & GSTR-9C | Taxvio",
    description:
      "CA-assisted GSTR-9 filing with ITC reconciliation & GSTR-9C. Late fee calculator. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/gstr-9.jpg"],
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

export default function GSTR9Page() {
  return <GSTR9Client />;
}