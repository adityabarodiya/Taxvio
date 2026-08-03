import type { Metadata } from "next";
import ITRNRIClient from "./ITRNRIClient";

export const metadata: Metadata = {
  title: "ITR Filing for NRI | Non-Resident Indian Tax Return FY 2025-26 | Taxvio",
  description:
    "Expert ITR-2 & ITR-3 filing for Non-Resident Indians (NRI). DTAA relief, Tax Residency Certificate & Form 10F, lower/nil TDS certificate, NRO TDS refund, and Form 15CA/15CB for repatriation. Starting ₹2,999. Serving NRIs in the USA, UK, UAE, Canada, Singapore, Australia & pan-India.",
  keywords: [
    "ITR filing for NRI",
    "NRI income tax return India",
    "NRI ITR-2 filing",
    "NRI ITR-3 filing",
    "NRI residential status",
    "DTAA relief NRI",
    "Tax Residency Certificate India",
    "Form 10F NRI",
    "NRO TDS refund",
    "lower TDS certificate NRI property sale",
    "Section 195 TDS NRI",
    "Form 15CA 15CB filing",
    "NRI capital gains tax India",
    "NRE FCNR interest tax exemption",
    "NRI tax filing FY 2025-26",
    "CA assisted NRI ITR filing",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/itr-nri",
  },
  openGraph: {
    title: "ITR Filing for NRI | Non-Resident Indian Tax Return FY 2025-26 | Taxvio",
    description:
      "CA-assisted ITR-2 & ITR-3 filing for NRIs. DTAA relief, TDS refunds on NRO interest & property sale, Form 15CA/15CB for repatriation. Starting ₹2,999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/itr-nri",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/itr-nri.jpg",
        width: 1200,
        height: 630,
        alt: "ITR Filing for Non-Resident Indians — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Filing for NRI | Taxvio",
    description:
      "CA-assisted ITR-2 & ITR-3 filing for NRIs. DTAA relief, TDS refunds, and repatriation support. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/itr-nri.jpg"],
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

export default function ITRNRIPage() {
  return <ITRNRIClient />;
}