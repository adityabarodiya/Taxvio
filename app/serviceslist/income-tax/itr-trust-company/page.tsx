import type { Metadata } from "next";
import ITRTrustCompanyClient from "./ITRTrustCompanyClient";

export const metadata: Metadata = {
  title: "ITR Filing for Companies & Trusts | ITR-6 & ITR-7 | FY 2025-26 | Taxvio",
  description:
    "Professional ITR-6 filing for private limited companies & OPCs, and ITR-7 for trusts, NGOs & Section 8 companies in India. MAT computation, Section 12A/80G compliance, tax audit Form 3CA/3CD. Starting ₹2,999. CA-assisted. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "ITR-6 filing India",
    "ITR-7 filing trust NGO",
    "company income tax return filing",
    "private limited company ITR",
    "OPC income tax return",
    "trust income tax return India",
    "NGO ITR-7 filing",
    "section 8 company income tax",
    "12A 80G trust compliance",
    "MAT minimum alternate tax companies",
    "section 115BAA tax rate company",
    "tax audit company 44AB",
    "form 3CA 3CD company",
    "ITR filing for charitable trust",
    "form 10B 10BB trust audit",
    "ITR filing Khatauli",
    "ITR filing Muzaffarnagar",
    "CA assisted company ITR India",
    "section 11 12 trust exemption",
    "LLP company trust ITR FY 2025-26",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/itr-trust-company",
  },
  openGraph: {
    title: "ITR Filing for Companies & Trusts | ITR-6 & ITR-7 | FY 2025-26 | Taxvio",
    description:
      "Expert ITR-6 for companies & ITR-7 for trusts/NGOs. MAT, Section 12A/80G compliance, tax audit (3CA/3CD). Starting ₹2,999. CA-assisted pan-India.",
    url: "https://www.taxvio.in/serviceslist/income-tax/itr-trust-company",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/itr-trust-company.jpg",
        width: 1200,
        height: 630,
        alt: "ITR Filing for Companies and Trusts — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR-6 & ITR-7 Filing for Companies & Trusts | Taxvio",
    description:
      "CA-assisted ITR-6 for companies & ITR-7 for trusts/NGOs. MAT, 12A/80G compliance, tax audit. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/itr-trust-company.jpg"],
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

export default function ITRTrustCompanyPage() {
  return <ITRTrustCompanyClient />;
}