import type { Metadata } from "next";
import Form15G15HClient from "./Form15G15HClient";

export const metadata: Metadata = {
  title: "Form 15G & Form 15H Filing — Stop TDS on FD Interest | FY 2025-26 | Taxvio",
  description:
    "Professional Form 15G and Form 15H filing services in India. Stop TDS deduction on FD interest, RD interest, savings account, EPF withdrawal, and dividend income. Eligibility check for individuals below 60 and senior citizens. Starting ₹499. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "Form 15G filing service India",
    "Form 15H filing senior citizen India",
    "stop TDS on FD interest India",
    "15G 15H eligibility check",
    "TDS exemption FD interest India",
    "Form 15G for HUF India",
    "Form 15H senior citizen bank",
    "TDS on FD interest section 194A",
    "15G 15H annual renewal",
    "how to file Form 15G online",
    "Form 15H for pension income",
    "Form 15G for EPF withdrawal",
    "false 15G declaration section 277",
    "Form 15G 15H Khatauli",
    "Form 15G 15H Muzaffarnagar",
    "TDS refund FD interest ITR",
    "basic exemption limit 15G 2025-26",
    "Form 15G for post office FD",
    "senior citizen TDS exemption interest",
    "15G 15H multi bank submission",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/income-tax/15g-15h",
  },
  openGraph: {
    title: "Form 15G & Form 15H Filing — Stop TDS on FD Interest | Taxvio",
    description:
      "Stop TDS on FD interest, savings, dividends & EPF withdrawal. Expert 15G/15H eligibility check and filing. Starting ₹499. Senior citizen support.",
    url: "https://www.taxvio.in/income-tax/15g-15h",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/15g-15h.jpg",
        width: 1200,
        height: 630,
        alt: "Form 15G and Form 15H Filing Services — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Form 15G & Form 15H Filing — Stop TDS on FD | Taxvio",
    description:
      "Expert 15G/15H eligibility check and filing. Stop TDS on FD, RD, dividends, EPF. Starting ₹499.",
    images: ["https://www.taxvio.in/og/15g-15h.jpg"],
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

export default function Form15G15HPage() {
  return <Form15G15HClient />;
}