// app/serviceslist/roc/dir-3-kyc/page.tsx
import type { Metadata } from "next";
import Dir3KycClient from "./Dir3KycClient";

export const metadata: Metadata = {
  title:
    "DIR-3 KYC Filing Services FY 2025-26 | DIN KYC Annual Compliance | Taxvio",
  description:
    "Professional DIR-3 KYC filing for Financial Year 2025-26. Keep your DIN active — deadline 30th September 2025. OTP-based filing, DIN status verification, deactivated DIN reactivation support. Avoid ₹5,000 penalty. Starting ₹999. Serving directors across Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "DIR-3 KYC filing FY 2025-26",
    "DIN KYC annual filing",
    "director KYC compliance",
    "30th September 2026 deadline",
    "DIR-3 KYC online filing",
    "DIN deactivation penalty",
    "₹5000 late fee DIR-3 KYC",
    "Aadhaar OTP DIR-3 KYC",
    "PAN-Aadhaar link for DIN",
    "deactivated DIN reactivation",
    "DIR-3 KYC without DSC",
    "KYC-WEB filing",
    "director identification number KYC",
    "MCA DIN KYC",
    "DIR-3 KYC for NRI directors",
    "DIR-3 KYC Noida",
    "DIR-3 KYC Delhi NCR",
    "DIR-3 KYC Mumbai",
    "CA for DIN KYC",
    "DIR-3 KYC help",
    "company director compliance 2026",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/roc/dir-3-kyc",
  },
  openGraph: {
    title: "DIR-3 KYC Filing FY 2025-26 | DIN KYC Compliance | Taxvio",
    description:
      "File DIR-3 KYC before 30 Sept 2026. Avoid ₹5K penalty & DIN deactivation. OTP-based filing. ₹999 only.",
    url: "https://www.taxvio.in/serviceslist/roc/dir-3-kyc",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/dir-3-kyc-fy-2025-26.jpg",
        width: 1200,
        height: 630,
        alt: "DIR-3 KYC Filing FY 2025-26 — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIR-3 KYC Filing FY 2025-26 | Taxvio",
    description:
      "File DIN KYC before 30 Sept 2026. Avoid penalty & deactivation. ₹999.",
    images: ["https://www.taxvio.in/og/dir-3-kyc-fy-2025-26.jpg"],
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

export default function Dir3KycPage() {
  return <Dir3KycClient />;
}