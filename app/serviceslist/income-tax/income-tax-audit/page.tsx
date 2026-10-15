import type { Metadata } from "next";
import IncomeTaxAuditClient from "./IncomeTaxAuditClient";

export const metadata: Metadata = {
  title: "Income Tax Audit Section 44AB — Due Date Extended to 21 Oct 2026 | Taxvio",
  description:
    "CBDT has extended the AY 2026-27 tax audit due date to 21st October 2026 and the ITR filing deadline (audit cases) to 21st November 2026. Taxvio provides CA-led income tax audit under Section 44AB — Form 3CA, 3CB, 3CD preparation for businesses, professionals, firms, LLPs & companies. Books review, TDS compliance, GST reconciliation. Starting ₹7,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "income tax audit section 44AB",
    "tax audit due date extended 2026",
    "CBDT extends tax audit due date AY 2026-27",
    "tax audit report deadline 21 october 2026",
    "ITR filing deadline 21 november 2026 audit cases",
    "tax audit services India",
    "Form 3CA 3CB 3CD filing",
    "tax audit report filing FY 2025-26",
    "section 44AB audit threshold",
    "tax audit for proprietor India",
    "tax audit for firm LLP",
    "tax audit for company India",
    "Form 3CD clauses India",
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
    title: "Income Tax Audit Section 44AB — CBDT Extends Due Date to 21 Oct 2026 | Taxvio",
    description:
      "CBDT extended the tax audit due date for AY 2026-27 to 21st October 2026 and ITR filing (audit cases) to 21st November 2026. CA-led audit — Form 3CA/3CB/3CD, books review, TDS Clause 34, GST reconciliation. Starting ₹7,999. Pan-India service.",
    url: "https://www.taxvio.in/serviceslist/income-tax/income-tax-audit",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/income-tax-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Income Tax Audit Services Under Section 44AB — Due Date Extended to 21 Oct 2026 — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Audit Due Date Extended to 21 Oct 2026 | Taxvio",
    description:
      "CBDT extends AY 2026-27 tax audit deadline to 21 Oct 2026 and ITR filing (audit cases) to 21 Nov 2026. CA-led Form 3CA/3CB/3CD, books review, TDS Clause 34, GST reconciliation. Starting ₹7,999.",
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