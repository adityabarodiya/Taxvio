// app/serviceslist/gst/gst-itc-reconciliation/page.tsx
import type { Metadata } from "next";
import GSTITCReconciliationClient from "./GSTITCReconciliationClient";

export const metadata: Metadata = {
  title: "GST ITC Reconciliation | GSTR-2B Matching & Compliance | Taxvio",
  description:
    "Professional GST Input Tax Credit reconciliation services. Systematic GSTR-2B vs purchase register matching, vendor-wise mismatch identification, ITC eligibility review, reversal advisory. Monthly reconciliation reports, automated matching, notice prevention. Starting ₹2,999/month. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "GST ITC reconciliation India",
    "GSTR-2B matching",
    "input tax credit reconciliation",
    "ITC mismatch resolution",
    "vendor-wise ITC report",
    "GSTR-2B vs books reconciliation",
    "Section 17(5) ITC eligibility",
    "ITC reversal computation",
    "GST notice prevention",
    "Rule 36(4) compliance",
    "monthly ITC reconciliation",
    "automated GST reconciliation",
    "purchase register matching",
    "ITC reclaim tracker",
    "GST ITC Noida",
    "GST ITC Ahamdabad",
    "GSTR-9C reconciliation",
    "Section 61 notice response",
    "ITC audit services",
    "vendor GST compliance",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/gst/gst-itc-reconciliation",
  },
  openGraph: {
    title: "GST ITC Reconciliation | GSTR-2B Matching | Taxvio",
    description:
      "Expert GSTR-2B vs books reconciliation — maximize eligible ITC, prevent notices. Monthly automation. Starting ₹2,999/month.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-itc-reconciliation",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-itc-reconciliation.jpg",
        width: 1200,
        height: 630,
        alt: "GST ITC Reconciliation Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST ITC Reconciliation | GSTR-2B Matching | Taxvio",
    description:
      "Systematic ITC reconciliation — GSTR-2B matching, vendor reports, eligibility audit. Starting ₹2,999/month.",
    images: ["https://www.taxvio.in/og/gst-itc-reconciliation.jpg"],
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

export default function GSTITCReconciliationPage() {
  return <GSTITCReconciliationClient />;
}