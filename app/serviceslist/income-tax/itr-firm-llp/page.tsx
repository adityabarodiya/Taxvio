import type { Metadata } from "next";
import ITRFirmLLPClient from "./ITRFirmLLPClient";

export const metadata: Metadata = {
  title: "ITR Filing for Partnership Firms & LLPs | ITR-5 | FY 2025-26 | Taxvio",
  description:
    "Professional ITR-5 filing for partnership firms and LLPs in India. Section 40(b) partner remuneration, tax audit under 44AB, flat 30% tax rate compliance. Starting ₹2,999. CA-assisted. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "ITR filing for partnership firm",
    "LLP income tax return filing",
    "ITR-5 filing India",
    "partnership firm tax return",
    "LLP ITR-5 filing",
    "section 40b partner remuneration",
    "tax audit firm 44AB",
    "LLP tax audit India",
    "partnership firm tax rate 30%",
    "ITR filing for LLP FY 2025-26",
    "form 3CA 3CD filing",
    "ITR filing Khatauli",
    "ITR filing Muzaffarnagar",
    "CA assisted firm ITR India",
    "LLP annual compliance income tax",
    "partner interest deduction 40b",
    "section 10(2A) partner profit exempt",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/itr-firm-llp",
  },
  openGraph: {
    title: "ITR Filing for Partnership Firms & LLPs | ITR-5 | FY 2025-26 | Taxvio",
    description:
      "Expert ITR-5 filing for firms & LLPs. Section 40(b) compliance, tax audit support (Form 3CA/3CD), flat 30% tax rate. Starting ₹2,999. CA-assisted.",
    url: "https://www.taxvio.in/serviceslist/income-tax/itr-firm-llp",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/itr-firm-llp.jpg",
        width: 1200,
        height: 630,
        alt: "ITR Filing for Partnership Firms and LLPs — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR-5 Filing for Firms & LLPs | Taxvio",
    description:
      "CA-assisted ITR-5 for partnership firms & LLPs. Section 40(b) remuneration, tax audit under 44AB. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/itr-firm-llp.jpg"],
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

export default function ITRFirmLLPPage() {
  return <ITRFirmLLPClient />;
}