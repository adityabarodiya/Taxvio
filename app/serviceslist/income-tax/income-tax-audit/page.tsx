import type { Metadata } from "next";
import IncomeTaxAuditClient from "./IncomeTaxAuditClient";

export const metadata: Metadata = {
  title: "Income Tax Audit Under Section 44AB | Form 3CA 3CB 3CD | FY 2025-26 | Taxvio",
  description:
    "Professional income tax audit services under Section 44AB in India. Form 3CA, 3CB, 3CD preparation for businesses, professionals, firms, LLPs & companies. Books of accounts review, TDS compliance, GST reconciliation. Starting ₹4,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "income tax audit section 44AB",
    "tax audit services India",
    "Form 3CA 3CB 3CD filing",
    "tax audit report filing FY 2025-26",
    "section 44AB audit threshold",
    "tax audit for proprietor India",
    "tax audit for firm LLP",
    "tax audit for company India",
    "Form 3CD clauses India",
    "tax audit due date 30 September",
    "section 271B penalty tax audit",
    "books of accounts section 44AA",
    "GST books reconciliation audit",
    "TDS clause 34 Form 3CD",
    "tax audit Khatauli",
    "tax audit Muzaffarnagar",
    "CA assisted tax audit India",
    "presumptive taxation opt out audit 44AD",
    "section 40a disallowance tax audit",
    "MSME payment 43B(h) tax audit",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/income-tax-audit",
  },
  openGraph: {
    title: "Income Tax Audit Under Section 44AB | Form 3CA 3CB 3CD | FY 2025-26 | Taxvio",
    description:
      "CA-led tax audit under Section 44AB. Form 3CA/3CB/3CD filing, books review, TDS Clause 34, GST reconciliation. Starting ₹4,999. Pan-India service.",
    url: "https://www.taxvio.in/serviceslist/income-tax/income-tax-audit",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/income-tax-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Income Tax Audit Services Under Section 44AB — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Audit Under Section 44AB | Taxvio",
    description:
      "CA-led tax audit — Form 3CA/3CB/3CD, books review, TDS Clause 34, GST reconciliation. Starting ₹4,999.",
    images: ["https://www.taxvio.in/og/income-tax-audit.jpg"],
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

export default function IncomeTaxAuditPage() {
  return <IncomeTaxAuditClient />;
}