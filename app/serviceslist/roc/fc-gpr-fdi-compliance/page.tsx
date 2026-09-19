// app/serviceslist/roc/fc-gpr-fdi-compliance/page.tsx
import type { Metadata } from "next";
import FcGprFdiComplianceClient from "./FcGprFdiComplianceClient";

export const metadata: Metadata = {
  title: "FC-GPR Filing & FDI Compliance Services | Taxvio",
  description:
    "Complete FDI compliance for companies receiving foreign investment. FC-GPR filing on RBI FIRMS portal, FDI pricing guideline review, valuation report coordination, PAS-3 share allotment filing. Starting ₹9,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "FC-GPR filing",
    "FDI compliance India",
    "foreign direct investment compliance",
    "FIRMS portal filing",
    "RBI foreign investment reporting",
    "FEMA compliance FDI",
    "PAS-3 share allotment",
    "foreign investor KYC",
    "FDI pricing guidelines",
    "valuation report FDI",
    "FIRC foreign inward remittance",
    "downstream investment reporting",
    "automatic route FDI",
    "government route FDI",
    "FC-GPR Muzaffarnagar",
    "FDI compliance Meerut",
    "foreign investment Noida",
    "startup FDI Delhi NCR",
    "CA for FDI compliance",
    "CS for FC-GPR filing",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/fc-gpr-fdi-compliance",
  },
  openGraph: {
    title: "FC-GPR Filing & FDI Compliance Services | Taxvio",
    description:
      "Complete FDI compliance — FC-GPR filing on FIRMS, pricing review, valuation coordination, PAS-3 filing. ₹9,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/fc-gpr-fdi-compliance",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/fc-gpr-fdi-compliance.jpg",
        width: 1200,
        height: 630,
        alt: "FC-GPR Filing & FDI Compliance Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC-GPR Filing & FDI Compliance Services | Taxvio",
    description:
      "FC-GPR filing on RBI FIRMS portal + FDI pricing compliance. Complete support. 7-10 days. ₹9,999+.",
    images: ["https://www.taxvio.in/og/fc-gpr-fdi-compliance.jpg"],
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

export default function FcGprFdiCompliancePage() {
  return <FcGprFdiComplianceClient />;
}