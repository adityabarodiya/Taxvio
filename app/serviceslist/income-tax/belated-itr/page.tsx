// app/serviceslist/income-tax/belated-itr/page.tsx
import type { Metadata } from "next";
import BelatedITRClient from "./BelatedITRClient";

export const metadata: Metadata = {
  title: "Belated ITR Filing | File Income Tax Return After Due Date | Section 139(4) | Taxvio",
  description:
    "Expert belated ITR filing services under Section 139(4) for returns filed after the July 31st deadline. Late fee calculation, interest computation, penalty mitigation & complete compliance support. File until Dec 31st. Starting ₹1,499. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "belated ITR filing India",
    "section 139(4) belated return",
    "file ITR after due date",
    "late ITR filing penalty",
    "belated return u/s 139(4)",
    "ITR filing after July 31",
    "late fee for belated ITR",
    "belated ITR deadline India",
    "file late income tax return",
    "belated ITR interest calculation",
    "section 234A interest ITR",
    "belated ITR filing Khatauli",
    "belated ITR filing Muzaffarnagar",
    "CA assisted belated ITR",
    "penalty for late ITR filing",
    "belated return vs revised return",
    "file ITR after deadline India",
    "belated ITR for salary income",
    "belated ITR for business income",
    "professional belated ITR service",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/belated-itr",
  },
  openGraph: {
    title: "Belated ITR Filing | File After Deadline | Section 139(4) | Taxvio",
    description:
      "Professional belated ITR filing — after July 31 deadline, with late fee & interest calculation. File U/s 139(4) until Dec 31. Starting ₹1,499. CA-assisted pan-India service.",
    url: "https://www.taxvio.in/serviceslist/income-tax/belated-itr",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/belated-itr.jpg",
        width: 1200,
        height: 630,
        alt: "Belated ITR Filing Service — Section 139(4) — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belated ITR Filing Service | Section 139(4) | Taxvio",
    description:
      "CA-assisted belated ITR filing — after due date, with penalty & interest calculation. Until Dec 31. Starting ₹1,499.",
    images: ["https://www.taxvio.in/og/belated-itr.jpg"],
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

export default function BelatedITRPage() {
  return <BelatedITRClient />;
}