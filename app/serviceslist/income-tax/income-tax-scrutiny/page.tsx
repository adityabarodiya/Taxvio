import type { Metadata } from "next";
import IncomeTaxScrutinyClient from "./IncomeTaxScrutinyClient";

export const metadata: Metadata = {
  title: "Income Tax Scrutiny & Notice Handling | Section 143 148 | Taxvio",
  description:
    "Expert income tax scrutiny assessment and notice handling in India. Response to notices under Section 143(1), 143(2), 148, 142(1), 156, 270A & 271. Faceless assessment representation, CIT(A) & ITAT appeals. Starting ₹1,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "income tax scrutiny notice handling India",
    "section 143(2) scrutiny notice response",
    "section 148 reassessment notice India",
    "income tax notice response service",
    "faceless assessment representation India",
    "section 143(1) demand notice response",
    "CIT(A) appeal filing India",
    "ITAT appeal income tax",
    "income tax notice handling Khatauli",
    "income tax notice Muzaffarnagar",
    "section 142(1) notice response",
    "section 270A penalty notice",
    "section 271 penalty income tax",
    "income escaping assessment section 148",
    "tax scrutiny CA representation India",
    "defective return notice 139(9)",
    "section 156 demand notice payment",
    "best judgement assessment section 144",
    "AIS mismatch income tax notice",
    "GST ITR turnover mismatch notice",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/income-tax/income-tax-scrutiny",
  },
  openGraph: {
    title: "Income Tax Scrutiny & Notice Handling | Section 143 148 | Taxvio",
    description:
      "Expert handling of all income tax notices — Section 143(1), 143(2), 148, 142(1). Faceless assessment, CIT(A) & ITAT appeals. Starting ₹1,999.",
    url: "https://www.taxvio.in/income-tax/income-tax-scrutiny",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/income-tax-scrutiny.jpg",
        width: 1200,
        height: 630,
        alt: "Income Tax Scrutiny and Notice Handling Services — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Scrutiny & Notice Handling | Taxvio",
    description:
      "Expert response to Section 143(1), 143(2), 148, 142(1) notices. Faceless assessment, appeals. Starting ₹1,999.",
    images: ["https://www.taxvio.in/og/income-tax-scrutiny.jpg"],
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

export default function IncomeTaxScrutinyPage() {
  return <IncomeTaxScrutinyClient />;
}