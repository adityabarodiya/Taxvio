// app/serviceslist/roc/company-revival-restoration/page.tsx
import type { Metadata } from "next";
import CompanyRevivalRestorationClient from "./CompanyRevivalRestorationClient";

export const metadata: Metadata = {
  title: "Company Revival & Restoration Services | Taxvio",
  description:
    "Restore your struck-off company through NCLT application with expert documentation and follow-up support. Strike-off order review, NCLT restoration petition (Section 252), pending return clearance, and restoration order follow-up. Starting ₹24,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "company revival restoration India",
    "struck off company restoration",
    "NCLT restoration application",
    "section 252 companies act restoration",
    "restore struck off company",
    "company restoration Form INC-28",
    "NCLT company petition restoration",
    "LLP restoration struck off",
    "reactivate struck off company MCA",
    "company restoration Muzaffarnagar",
    "company restoration Meerut",
    "company restoration Noida",
    "company restoration Delhi NCR",
    "director disqualification restoration",
    "pending ROC filings after restoration",
    "CA for company restoration",
    "CS for NCLT restoration",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/company-revival-restoration",
  },
  openGraph: {
    title: "Company Revival & Restoration Services | Taxvio",
    description:
      "Restore your struck-off company through NCLT application. Petition drafting, pending return clearance, restoration order follow-up. ₹24,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/company-revival-restoration",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/company-revival-restoration.jpg",
        width: 1200,
        height: 630,
        alt: "Company Revival & Restoration Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Revival & Restoration Services | Taxvio",
    description:
      "Restore your struck-off company via NCLT. Petition drafting, pending returns, order follow-up. 3-6 months. ₹24,999+.",
    images: ["https://www.taxvio.in/og/company-revival-restoration.jpg"],
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

export default function CompanyRevivalRestorationPage() {
  return <CompanyRevivalRestorationClient />;
}