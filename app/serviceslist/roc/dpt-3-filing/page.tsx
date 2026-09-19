// app/serviceslist/roc/dpt-3-filing/page.tsx
import type { Metadata } from "next";
import DPT3FilingClient from "./DPT3FilingClient";

export const metadata: Metadata = {
  title:
    "DPT-3 Filing Services FY 2025-26 | Return of Deposits | Taxvio",
  description:
    "File your DPT-3 return of deposits for FY 2025-26 accurately and on time with expert compilation and filing support. Auditor certificate, MCA e-filing, penalty calculation. Starting ₹4,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "DPT-3 filing India",
    "return of deposits filing",
    "DPT-3 form MCA",
    "DPT-3 due date 2026",
    "DPT-3 filing deadline",
    "companies act DPT-3",
    "DPT-3 auditor certificate",
    "DPT-3 penalty late filing",
    "DPT-3 online filing",
    "ROC compliance DPT-3",
    "DPT-3 for private limited company",
    "DPT-3 director loans",
    "DPT-3 shareholder loans",
    "MCA e-filing DPT-3",
    "DPT-3 Khatauli",
    "DPT-3 Muzaffarnagar",
    "DPT-3 Meerut",
    "DPT-3 Noida",
    "DPT-3 Delhi NCR",
    "annual ROC filing",
    "CA for DPT-3 filing",
    "company secretary DPT-3",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/dpt-3-filing",
  },
  openGraph: {
    title: "DPT-3 Filing Services FY 2025-26 | Taxvio",
    description:
      "File DPT-3 return of deposits before 30th June. Auditor certificate, MCA filing, penalty-free. ₹4,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/dpt-3-filing",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/dpt-3-filing.jpg",
        width: 1200,
        height: 630,
        alt: "DPT-3 Return of Deposits Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DPT-3 Filing Services | Taxvio",
    description:
      "File DPT-3 for FY 2025-26. Auditor certificate, MCA e-filing, 3-5 days. ₹4,999+.",
    images: ["https://www.taxvio.in/og/dpt-3-filing.jpg"],
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

export default function DPT3FilingPage() {
  return <DPT3FilingClient />;
}