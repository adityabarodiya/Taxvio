import type { Metadata } from "next";
import AdvanceTaxClient from "./AdvanceTaxClient";

export const metadata: Metadata = {
  title:
    "Advance Tax Calculation & Payment Services | Avoid Interest Penalties | Taxvio",
  description:
    "Professional advance tax calculation, installment planning, challan generation and payment assistance for self-employed, businesses and professionals. Avoid Section 234B and 234C interest penalties. Serving Khatauli, Muzaffarnagar and pan-India.",
  keywords: [
    "advance tax calculation India",
    "advance tax payment service",
    "advance tax installment calculation",
    "Section 234B interest penalty",
    "Section 234C interest penalty",
    "advance tax challan generation",
    "advance tax due dates India",
    "advance tax for self-employed",
    "advance tax for business owners",
    "advance tax payment assistance",
    "advance tax calculator India",
    "professional advance tax service",
    "advance tax Khatauli",
    "advance tax Muzaffarnagar",
    "tax liability estimation service",
    "quarterly advance tax payment",
    "advance tax compliance India",
    "avoid advance tax penalty",
    "advance tax consultant India",
    "CA for advance tax calculation",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/income-tax/advance-tax-calculation",
  },
  openGraph: {
    title:
      "Advance Tax Calculation & Payment Services | Avoid Penalties | Taxvio",
    description:
      "Expert advance tax calculation, installment planning and payment support. Avoid Section 234B and 234C interest penalties. Starting ₹999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/advance-tax-calculation",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/advance-tax-calculation.jpg",
        width: 1200,
        height: 630,
        alt: "Advance Tax Calculation and Payment Services by Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advance Tax Calculation & Payment Services | Taxvio",
    description:
      "Professional advance tax calculation, installment planning and payment assistance to avoid interest penalties.",
    images: ["https://www.taxvio.in/og/advance-tax-calculation.jpg"],
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

export default function AdvanceTaxPage() {
  return <AdvanceTaxClient />;
}