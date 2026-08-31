import type { Metadata } from "next";
import IncomeTaxRefundClient from "./IncomeTaxRefundClient";

export const metadata: Metadata = {
  title:
    "Income Tax Refund Status Tracking & Processing Services | Expedite Refunds | Taxvio",
  description:
    "Professional income tax refund tracking, claim assistance, defective return rectification, reissue request support and CPC follow-up. Expedite delayed refunds and resolve processing issues. Serving Khatauli, Muzaffarnagar and pan-India.",
  keywords: [
    "income tax refund status India",
    "income tax refund tracking",
    "expedite income tax refund",
    "income tax refund processing delay",
    "defective return rectification",
    "income tax refund claim assistance",
    "refund reissue request India",
    "income tax refund not received",
    "CPC refund follow-up service",
    "income tax refund consultant",
    "track refund status online",
    "income tax refund Khatauli",
    "income tax refund Muzaffarnagar",
    "professional refund assistance India",
    "refund status check service",
    "delayed refund resolution",
    "income tax refund grievance",
    "ITR refund processing help",
    "refund challan reissue",
    "CA for refund follow-up",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/income-tax/income-tax-refund",
  },
  openGraph: {
    title:
      "Income Tax Refund Tracking & Processing Services | Expedite Refunds | Taxvio",
    description:
      "Expert income tax refund status tracking, claim assistance, defective return rectification and CPC follow-up. Expedite delayed refunds. Starting ₹499.",
    url: "https://www.taxvio.in/serviceslist/income-tax/income-tax-refund",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/income-tax-refund.jpg",
        width: 1200,
        height: 630,
        alt: "Income Tax Refund Status Tracking and Processing Services by Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Refund Tracking & Processing Services | Taxvio",
    description:
      "Professional refund status tracking, claim assistance and CPC follow-up to expedite delayed income tax refunds.",
    images: ["https://www.taxvio.in/og/income-tax-refund.jpg"],
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

export default function IncomeTaxRefundPage() {
  return <IncomeTaxRefundClient />;
}