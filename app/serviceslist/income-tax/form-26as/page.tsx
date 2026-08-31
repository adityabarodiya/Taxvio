//app/serviceslist/income-tax/form-26as/page.tsx
import type { Metadata } from "next";
import Form26ASClient from "./Form26ASClient";

export const metadata: Metadata = {
  title:
    "Form 26AS Download & Analysis Services | Tax Credit Verification | Taxvio",
  description:
    "Professional Form 26AS download, TDS/TCS verification, mismatch identification and reconciliation services. Complete tax credit analysis for ITR filing, refund claims and compliance. Serving Khatauli, Muzaffarnagar and pan-India.",
  keywords: [
    "Form 26AS download India",
    "Form 26AS analysis service",
    "TDS credit verification Form 26AS",
    "TCS verification Form 26AS",
    "Form 26AS mismatch identification",
    "Form 26AS reconciliation support",
    "tax credit verification service",
    "Form 26AS for ITR filing",
    "download 26AS from TRACES",
    "Form 26AS download assistance",
    "Form 26AS TDS mismatch correction",
    "professional 26AS analysis",
    "Form 26AS Khatauli",
    "Form 26AS Muzaffarnagar",
    "tax credit reconciliation India",
    "TDS verification before ITR",
    "annual tax statement download",
    "Form 26AS consultant India",
    "income tax credit verification",
    "professional tax credit analysis",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/form-26as",
  },
  openGraph: {
    title: "Form 26AS Download & Analysis | Tax Credit Verification | Taxvio",
    description:
      "Expert Form 26AS download, TDS/TCS verification, mismatch identification and reconciliation. Complete tax credit analysis for accurate ITR filing.",
    url: "https://www.taxvio.in/serviceslist/income-tax/form-26as",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/form-26as.jpg",
        width: 1200,
        height: 630,
        alt: "Form 26AS Download and Analysis Services by Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Form 26AS Download & Analysis Services | Taxvio",
    description:
      "Professional Form 26AS download, TDS/TCS verification and tax credit reconciliation support.",
    images: ["https://www.taxvio.in/og/form-26as.jpg"],
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

export default function Form26ASPage() {
  return <Form26ASClient />;
}