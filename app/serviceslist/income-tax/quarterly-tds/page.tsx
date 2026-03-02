import type { Metadata } from "next";
import QuarterlyTDSClient from "./QuarterlyTDSClient";

export const metadata: Metadata = {
  title: "Quarterly TDS Return Filing Services | Form 24Q 26Q 27Q | FY 2025-26 | Taxvio",
  description:
    "Professional quarterly TDS return filing for businesses, companies, firms & proprietors in India. Form 24Q, 26Q, 27Q & 27EQ filing, challan reconciliation, Form 16/16A generation, TRACES correction statements. Starting ₹999/quarter. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "quarterly TDS return filing India",
    "TDS return filing service",
    "Form 24Q filing",
    "Form 26Q filing",
    "Form 27Q filing",
    "Form 27EQ TCS return filing",
    "TDS challan reconciliation",
    "Form 16 generation service",
    "Form 16A generation TRACES",
    "TDS correction statement filing",
    "section 234E late filing fee TDS",
    "TDS return due dates FY 2025-26",
    "TDS compliance service India",
    "TDS filing Khatauli",
    "TDS filing Muzaffarnagar",
    "CA assisted TDS return filing",
    "TRACES TDS correction statement",
    "TDS on salary 192 return",
    "TDS on professional fees 194J",
    "TDS on contractor 194C filing",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/income-tax/quarterly-tds",
  },
  openGraph: {
    title: "Quarterly TDS Return Filing | Form 24Q 26Q 27Q | FY 2025-26 | Taxvio",
    description:
      "Expert quarterly TDS return filing — Form 24Q, 26Q, 27Q & 27EQ. Challan reconciliation, Form 16/16A, TRACES corrections. Starting ₹999/quarter.",
    url: "https://www.taxvio.in/serviceslist/income-tax/quarterly-tds",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/serviceslist/og/quarterly-tds.jpg",
        width: 1200,
        height: 630,
        alt: "Quarterly TDS Return Filing Services — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quarterly TDS Return Filing | Form 24Q 26Q 27Q | Taxvio",
    description:
      "Managed TDS compliance — Form 24Q, 26Q, 27Q, 27EQ filing, Form 16/16A, TRACES corrections. Starting ₹999/quarter.",
    images: ["https://www.taxvio.in/og/quarterly-tds.jpg"],
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

export default function QuarterlyTDSPage() {
  return <QuarterlyTDSClient />;
}