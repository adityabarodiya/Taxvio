// app/serviceslist/roc/sbo-ben-2-filing/page.tsx
import type { Metadata } from "next";
import SboBen2FilingClient from "./SboBen2FilingClient";

export const metadata: Metadata = {
  title: "SBO Declaration & BEN-2 Filing Services | Taxvio",
  description:
    "Identify significant beneficial owners and file BEN-2 with MCA. Complete compliance support for beneficial ownership disclosure norms under Section 90 of Companies Act. SBO threshold analysis, BEN-1 collection, BEN-2 filing. Starting ₹4,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "SBO declaration",
    "BEN-2 filing",
    "significant beneficial owner disclosure",
    "section 90 companies act",
    "beneficial ownership norms",
    "BEN-1 declaration",
    "register of SBOs",
    "indirect shareholding disclosure",
    "layered ownership structure",
    "SBO threshold 10%",
    "beneficial interest disclosure",
    "BEN-2 filing Muzaffarnagar",
    "SBO compliance Meerut",
    "BEN-2 filing Noida",
    "beneficial ownership Delhi NCR",
    "CA for SBO filing",
    "CS for BEN-2 compliance",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/sbo-ben-2-filing",
  },
  openGraph: {
    title: "SBO Declaration & BEN-2 Filing Services | Taxvio",
    description:
      "Identify significant beneficial owners and file BEN-2 for compliance. SBO threshold analysis, BEN-1 collection, register maintenance. ₹4,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/sbo-ben-2-filing",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/sbo-ben-2-filing.jpg",
        width: 1200,
        height: 630,
        alt: "SBO Declaration & BEN-2 Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SBO Declaration & BEN-2 Filing Services | Taxvio",
    description:
      "File BEN-2 for significant beneficial owner disclosure. Complete SBO compliance support. 5-7 days. ₹4,999+.",
    images: ["https://www.taxvio.in/og/sbo-ben-2-filing.jpg"],
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

export default function SboBen2FilingPage() {
  return <SboBen2FilingClient />;
}