// app/serviceslist/income-tax/capital-gains-computation/page.tsx
import type { Metadata } from "next";
import CapitalGainsComputationClient from "./CapitalGainsComputationClient";

export const metadata: Metadata = {
  title: "Capital Gains Tax Computation | Property, Shares & LTCG/STCG | Taxvio",
  description:
    "Accurate capital gains tax computation for property, shares, mutual funds & gold. STCG & LTCG calculation, indexation benefit, exemption under Section 54/54F/54EC, tax liability estimation and ITR-2 filing. Updated for Budget 2024 (12.5% LTCG). Starting ₹2,499. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "capital gains tax computation India",
    "LTCG calculation property",
    "STCG calculation shares",
    "capital gains tax 12.5%",
    "indexation benefit calculation",
    "cost inflation index CII",
    "Section 54 exemption",
    "Section 54F exemption",
    "Section 54EC bonds",
    "capital gains account scheme",
    "property sale tax calculation",
    "LTCG on shares 1.25 lakh",
    "Section 112A grandfathering",
    "Section 50C stamp duty value",
    "capital gains ITR-2 filing",
    "capital loss set off carry forward",
    "capital gains tax Khatauli",
    "capital gains tax Muzaffarnagar",
    "advance tax on capital gains",
    "capital gains notice response",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/income-tax/capital-gains-computation",
  },
  openGraph: {
    title: "Capital Gains Tax Computation | Property & Shares | Taxvio",
    description:
      "Expert STCG & LTCG computation — indexation analysis, Section 54/54F/54EC exemption planning, ITR-2 filing. Updated for Budget 2024. Starting ₹3,499.",
    url: "https://www.taxvio.in/serviceslist/income-tax/capital-gains-computation",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/capital-gains-computation.jpg",
        width: 1200,
        height: 630,
        alt: "Capital Gains Tax Computation Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gains Tax Computation | LTCG & STCG | Taxvio",
    description:
      "Accurate capital gains computation for property & shares — indexation, exemptions, ITR filing. Starting ₹2,499.",
    images: ["https://www.taxvio.in/og/capital-gains-computation.jpg"],
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

export default function CapitalGainsComputationPage() {
  return <CapitalGainsComputationClient />;
}