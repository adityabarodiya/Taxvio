// app/serviceslist/income-tax/tax-residency-certificate/page.tsx
import type { Metadata } from "next";
import TaxResidencyCertificateClient from "./TaxResidencyCertificateClient";

export const metadata: Metadata = {
  title: "Tax Residency Certificate (TRC) | DTAA Benefits | Form 10FA Filing | Taxvio",
  description:
    "Professional assistance for Tax Residency Certificate (TRC) application. Complete Form 10FA filing, DTAA benefit guidance, residency assessment, ITD liaison. Ideal for NRIs, expatriates, individuals with foreign income. Starting ₹4,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "tax residency certificate India",
    "TRC application India",
    "Form 10FA filing",
    "DTAA benefits India",
    "double taxation avoidance",
    "tax residency certificate for NRI",
    "TRC for expatriates",
    "India USA DTAA",
    "India UK DTAA",
    "foreign tax credit India",
    "Form 67 filing",
    "tax residency proof",
    "avoid double taxation",
    "TRC for foreign income",
    "income tax residency certificate",
    "TRC Khatauli",
    "TRC Muzaffarnagar",
    "NRI tax residency",
    "apostille TRC India",
    "DTAA treaty benefits",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/tax-residency-certificate",
  },
  openGraph: {
    title: "Tax Residency Certificate (TRC) | DTAA Benefits | Taxvio",
    description:
      "Expert TRC application support — Form 10FA filing, DTAA analysis, residency assessment. Ideal for NRIs, expatriates. Starting ₹4,999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/tax-residency-certificate",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/tax-residency-certificate.jpg",
        width: 1200,
        height: 630,
        alt: "Tax Residency Certificate Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Residency Certificate Application | DTAA Benefits | Taxvio",
    description:
      "Complete TRC application support — Form 10FA, DTAA guidance, residency proof. Starting ₹4,999.",
    images: ["https://www.taxvio.in/og/tax-residency-certificate.jpg"],
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

export default function TaxResidencyCertificatePage() {
  return <TaxResidencyCertificateClient />;
}