// app/serviceslist/roc/csr-1-registration/page.tsx
import type { Metadata } from "next";
import Csr1RegistrationClient from "./Csr1RegistrationClient";

export const metadata: Metadata = {
  title: "CSR-1 Registration Services | Taxvio",
  description:
    "Register your NGO or Section 8 company on the MCA CSR-1 portal to become eligible for corporate CSR funding. Eligibility verification, CSR-1 form preparation & filing, digital signature coordination, and registration acknowledgement support. Starting ₹4,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "CSR-1 registration India",
    "CSR registration NGO",
    "MCA CSR-1 form filing",
    "CSR registration number",
    "Section 8 company CSR-1",
    "trust CSR-1 registration",
    "society CSR-1 registration",
    "corporate social responsibility rule 4",
    "CSR eligible NGO registration",
    "12A 80G CSR-1",
    "CSR-1 registration Muzaffarnagar",
    "CSR-1 registration Meerut",
    "CSR-1 registration Noida",
    "CSR-1 registration Delhi NCR",
    "NGO CSR funding eligibility",
    "CA for CSR-1 filing",
    "CS for CSR-1 registration",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/roc/csr-1-registration",
  },
  openGraph: {
    title: "CSR-1 Registration Services | Taxvio",
    description:
      "Register your NGO, trust, or Section 8 company on the MCA CSR-1 portal. Eligibility verification, form filing, CA/CS certification. ₹4,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/csr-1-registration",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/csr-1-registration.jpg",
        width: 1200,
        height: 630,
        alt: "CSR-1 Registration Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSR-1 Registration Services | Taxvio",
    description:
      "Register on the MCA CSR-1 portal for corporate CSR funding eligibility. 5-7 days. ₹4,999+.",
    images: ["https://www.taxvio.in/og/csr-1-registration.jpg"],
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

export default function Csr1RegistrationPage() {
  return <Csr1RegistrationClient />;
}