// app/serviceslist/income-tax/tds-certificate/page.tsx
import type { Metadata } from "next";
import TDSCertificateClient from "./TDSCertificateClient";

export const metadata: Metadata = {
  title:
    "TDS Certificate Generation Services | Form 16 & Form 16A | Taxvio",
  description:
    "Professional Form 16 and Form 16A preparation, validation and issuance services for employers, companies and businesses. TRACES support, bulk certificate generation and TDS compliance assistance. Serving Khatauli, Muzaffarnagar and pan-India.",
  keywords: [
    "TDS certificate generation services",
    "Form 16 preparation India",
    "Form 16A generation service",
    "Form 16 download from TRACES",
    "Form 16 issuance employer",
    "Form 16A for vendors",
    "TDS certificate preparation",
    "TDS certificate validation",
    "bulk Form 16 generation",
    "bulk Form 16A generation",
    "TDS certificate correction",
    "Form 16 mismatch correction",
    "Form 16A vendor certificate",
    "TDS certificate compliance India",
    "TDS certificate Khatauli",
    "TDS certificate Muzaffarnagar",
    "TDS consultant for companies",
    "TDS return and certificate service",
    "TRACES Form 16 assistance",
    "professional TDS certificate service",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/tds-certificate",
  },
  openGraph: {
    title: "TDS Certificate Generation | Form 16 & Form 16A | Taxvio",
    description:
      "CA-assisted Form 16 and Form 16A preparation, validation and issuance for employers and businesses. Bulk certificate support and TRACES assistance.",
    url: "https://www.taxvio.in/serviceslist/income-tax/tds-certificate",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/tds-certificate.jpg",
        width: 1200,
        height: 630,
        alt: "Form 16 and Form 16A TDS Certificate Services by Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Form 16 & Form 16A Generation Services | Taxvio",
    description:
      "Professional TDS certificate preparation, validation and issuance for employers, companies and vendors.",
    images: ["https://www.taxvio.in/og/tds-certificate.jpg"],
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

export default function TDSCertificatePage() {
  return <TDSCertificateClient />;
}