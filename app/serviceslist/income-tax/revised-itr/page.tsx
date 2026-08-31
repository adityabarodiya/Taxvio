// app/serviceslist/income-tax/revised-itr/page.tsx
import type { Metadata } from "next";
import RevisedITRClient from "./RevisedITRClient";

export const metadata: Metadata = {
  title: "Revised ITR Filing | File Corrected Income Tax Return | Section 139(5) | Taxvio",
  description:
    "Expert revised ITR filing services under Section 139(5) for correcting errors, adding missed income, claiming deductions & updating returns. File U/s 139(5) before Dec 31st or before assessment. Starting ₹999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "revised ITR filing India",
    "section 139(5) revised return",
    "file revised income tax return online",
    "correct ITR filing errors",
    "revised ITR u/s 139(5)",
    "update income tax return India",
    "revised ITR filing deadline",
    "add missed income to ITR",
    "claim missed deductions revised ITR",
    "revised ITR for salary income",
    "revised ITR for capital gains",
    "CA assisted revised ITR filing",
    "revised ITR filing Khatauli",
    "revised ITR filing Muzaffarnagar",
    "ITR correction service India",
    "defective return revision",
    "form 26AS mismatch correction",
    "revised ITR time limit India",
    "revised return before assessment",
    "professional revised ITR service",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/revised-itr",
  },
  openGraph: {
    title: "Revised ITR Filing | Correct Income Tax Return Errors | Section 139(5) | Taxvio",
    description:
      "Professional revised ITR filing — correct errors, add missed income, claim deductions. File U/s 139(5) before Dec 31 or assessment. Starting ₹999. CA-assisted pan-India service.",
    url: "https://www.taxvio.in/serviceslist/income-tax/revised-itr",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/revised-itr.jpg",
        width: 1200,
        height: 630,
        alt: "Revised ITR Filing Service — Section 139(5) — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revised ITR Filing Service | Section 139(5) | Taxvio",
    description:
      "CA-assisted revised ITR filing — correct errors, add income, claim deductions. Before Dec 31 or assessment. Starting ₹999.",
    images: ["https://www.taxvio.in/og/revised-itr.jpg"],
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

export default function RevisedITRPage() {
  return <RevisedITRClient />;
}