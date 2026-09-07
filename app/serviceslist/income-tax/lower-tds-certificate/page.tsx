// app/serviceslist/income-tax/lower-tds-certificate/page.tsx
import type { Metadata } from "next";
import LowerTDSCertificateClient from "./LowerTDSCertificateClient";

export const metadata: Metadata = {
  title: "Lower TDS Certificate (Section 197) | Application & Advisory | Taxvio",
  description:
    "Professional assistance for Lower TDS Certificate under Section 197. Eligibility assessment, Form 13 preparation, income estimation, documentation, AO follow-up. Ideal for contractors, professionals, senior citizens. Starting ₹2,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "lower TDS certificate India",
    "Section 197 certificate",
    "nil TDS certificate",
    "Form 13 application",
    "TDS at lower rate",
    "lower TDS certificate for contractors",
    "lower TDS certificate for professionals",
    "senior citizen nil TDS certificate",
    "TDS certificate application process",
    "how to apply for lower TDS certificate",
    "eligibility for lower TDS certificate",
    "benefits of lower TDS certificate",
    "TDS cash flow improvement",
    "lower TDS certificate Khatauli",
    "lower TDS certificate Muzaffarnagar",
    "Section 197 Income Tax Act",
    "TDS reduction certificate",
    "nil TDS on FD interest",
    "contractor TDS certificate",
    "professional TDS optimization",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/lower-tds-certificate",
  },
  openGraph: {
    title: "Lower TDS Certificate (Section 197) | Application Support | Taxvio",
    description:
      "Expert assistance for Lower/Nil TDS Certificate — Form 13 preparation, eligibility assessment, AO follow-up. Ideal for contractors, professionals, seniors. Starting ₹2,999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/lower-tds-certificate",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/lower-tds-certificate.jpg",
        width: 1200,
        height: 630,
        alt: "Lower TDS Certificate Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lower TDS Certificate Application | Section 197 | Taxvio",
    description:
      "Complete support for Lower/Nil TDS Certificate — eligibility check, Form 13, documentation. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/lower-tds-certificate.jpg"],
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

export default function LowerTDSCertificatePage() {
  return <LowerTDSCertificateClient />;
}