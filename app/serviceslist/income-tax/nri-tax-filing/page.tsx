// app/serviceslist/income-tax/nri-tax-filing/page.tsx
import type { Metadata } from "next";
import NRITaxFilingClient from "./NRITaxFilingClient";

export const metadata: Metadata = {
  title: "NRI Tax Filing & Compliance | ITR-2, TDS Refund, DTAA Benefits | Taxvio",
  description:
    "Expert NRI income tax filing services. Complete ITR-2 filing, TDS refund claims, DTAA benefit application, rental income, capital gains, foreign income reporting. Specialized support for NRIs in USA, UK, UAE, Singapore. Starting ₹2,999. Serving worldwide.",
  keywords: [
    "NRI tax filing India",
    "ITR for NRI",
    "NRI income tax return",
    "ITR-2 filing for NRI",
    "NRI TDS refund",
    "DTAA benefits for NRI",
    "NRI rental income tax",
    "NRI capital gains tax",
    "Form 10F for NRI",
    "NRI tax consultant",
    "USA NRI tax filing",
    "UAE NRI tax filing",
    "UK NRI tax filing",
    "Singapore NRI tax filing",
    "NRI tax compliance",
    "foreign income reporting India",
    "Schedule FA filing",
    "NRI tax residency",
    "NRO FD interest tax",
    "NRI property sale tax",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/nri-tax-filing",
  },
  openGraph: {
    title: "NRI Tax Filing & Compliance | ITR-2, TDS Refund, DTAA | Taxvio",
    description:
      "Expert NRI tax filing services — ITR-2, TDS refund claims, DTAA benefits, rental income, capital gains. Worldwide support. Starting ₹2,999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/nri-tax-filing",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/nri-tax-filing.jpg",
        width: 1200,
        height: 630,
        alt: "NRI Tax Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Tax Filing Services | ITR-2 & DTAA Benefits | Taxvio",
    description:
      "Complete NRI tax filing — TDS refund, DTAA, rental income, capital gains. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/nri-tax-filing.jpg"],
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

export default function NRITaxFilingPage() {
  return <NRITaxFilingClient />;
}