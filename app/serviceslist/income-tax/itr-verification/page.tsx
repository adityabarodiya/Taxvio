// app/serviceslist/income-tax/itr-verification/page.tsx
import type { Metadata } from "next";
import ITRVerificationClient from "./ITRVerificationClient";

export const metadata: Metadata = {
  title: "ITR Verification | EVC, Aadhaar OTP & Physical ITR-V | Complete Guide | Taxvio",
  description:
    "Expert ITR verification assistance through Aadhaar OTP, EVC (net banking, demat, bank account), and physical ITR-V. Complete within 30 days of filing. Troubleshooting for failed verification, invalid EVC & mobile issues. Starting ₹299. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "ITR verification India",
    "Aadhaar OTP ITR verification",
    "EVC ITR verification",
    "ITR-V verification methods",
    "verify ITR online",
    "ITR verification deadline 30 days",
    "failed ITR verification help",
    "ITR verification through net banking",
    "ITR verification demat account",
    "physical ITR-V submission",
    "ITR verification status check",
    "ITR verification Khatauli",
    "ITR verification Muzaffarnagar",
    "ITR verification assistance",
    "invalid EVC error solution",
    "mobile number not linked ITR",
    "bank account verification ITR",
    "ITR verification for senior citizens",
    "ITR verification troubleshooting",
    "complete ITR verification support",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/itr-verification",
  },
  openGraph: {
    title: "ITR Verification | Aadhaar OTP, EVC & Physical ITR-V | Complete Guide | Taxvio",
    description:
      "Expert ITR verification support — Aadhaar OTP, EVC (net banking/demat/bank), physical ITR-V. Complete within 30 days. Troubleshooting included. Starting ₹299.",
    url: "https://www.taxvio.in/serviceslist/income-tax/itr-verification",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/itr-verification.jpg",
        width: 1200,
        height: 630,
        alt: "ITR Verification Service — Complete Guide — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Verification Service | Aadhaar OTP & EVC | Taxvio",
    description:
      "Complete ITR verification assistance — all methods, troubleshooting, within 30 days. Starting ₹299.",
    images: ["https://www.taxvio.in/og/itr-verification.jpg"],
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

export default function ITRVerificationPage() {
  return <ITRVerificationClient />;
}