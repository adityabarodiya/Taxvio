import type { Metadata } from "next";
import QuarterlyTCSClient from "./QuarterlyTCSClient";

export const metadata: Metadata = {
  title: "Quarterly TCS Return Filing Services | Form 27EQ | FY 2025-26 | Taxvio",
  description:
    "Professional quarterly TCS return filing in Form 27EQ for businesses, traders, vehicle dealers & tour operators in India. TCS on sale of goods (206C(1H)), LRS foreign remittance (206C(1G)), scrap, minerals, Form 27D generation. Starting ₹999/quarter. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "quarterly TCS return filing India",
    "Form 27EQ filing service",
    "TCS on sale of goods 206C(1H)",
    "TCS on foreign remittance LRS 206C(1G)",
    "TCS return filing service India",
    "Form 27D generation TRACES",
    "TCS challan reconciliation",
    "section 206C TCS filing",
    "TCS on motor vehicles 206C(1F)",
    "TCS on scrap minerals India",
    "TCS return due dates FY 2025-26",
    "TCS compliance service India",
    "TCS filing Khatauli",
    "TCS filing Muzaffarnagar",
    "CA assisted TCS return filing",
    "section 234E TCS late filing penalty",
    "TCS vs TDS difference India",
    "TCS on overseas tour package",
    "section 206C(1H) seller turnover 10 crore",
    "LRS TCS 20 percent foreign remittance",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/quarterly-tcs",
  },
  openGraph: {
    title: "Quarterly TCS Return Filing | Form 27EQ | FY 2025-26 | Taxvio",
    description:
      "Expert TCS return filing — Form 27EQ, Section 206C(1H), 206C(1G) LRS, Form 27D generation, challan reconciliation. Starting ₹999/quarter. CA-assisted.",
    url: "https://www.taxvio.in/serviceslist/income-tax/quarterly-tcs",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/quarterly-tcs.jpg",
        width: 1200,
        height: 630,
        alt: "Quarterly TCS Return Filing Services — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quarterly TCS Return Filing | Form 27EQ | Taxvio",
    description:
      "Managed TCS compliance — Form 27EQ, 206C(1H) goods, 206C(1G) LRS, Form 27D. Starting ₹999/quarter.",
    images: ["https://www.taxvio.in/og/quarterly-tcs.jpg"],
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

export default function QuarterlyTCSPage() {
  return <QuarterlyTCSClient />;
}