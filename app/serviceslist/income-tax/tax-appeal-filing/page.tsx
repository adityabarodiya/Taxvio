import type { Metadata } from "next";
import TaxAppealFilingClient from "./TaxAppealFilingClient";

export const metadata: Metadata = {
  title:
    "Tax Appeal Filing Services | CIT(A), ITAT & High Court Appeals | Expert Representation | Taxvio",
  description:
    "Professional tax appeal filing services before CIT(A), ITAT and High Court for adverse income tax assessment orders. Expert grounds drafting, legal documentation, hearing representation and follow-up till disposal. Nationwide service across India.",
  keywords: [
    "tax appeal filing India",
    "CIT(A) appeal filing service",
    "ITAT appeal filing India",
    "High Court tax appeal",
    "income tax appeal consultant",
    "appeal against assessment order",
    "Section 143(3) appeal",
    "Section 148 appeal",
    "demand notice appeal",
    "penalty appeal India",
    "tax litigation services India",
    "appeal representation before ITAT",
    "CA for tax appeal",
    "tax lawyer alternative India",
    "grounds of appeal drafting",
    "tax appeal documentation",
    "appellate authority representation",
    "tax dispute resolution India",
    "stay of demand petition",
    "professional tax appeal service nationwide",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/income-tax/tax-appeal-filing",
  },
  openGraph: {
    title:
      "Tax Appeal Filing Services | CIT(A), ITAT & High Court | Expert Representation | Taxvio",
    description:
      "Expert tax appeal filing before CIT(A), ITAT and High Court. Professional grounds drafting, documentation and representation for income tax disputes. Nationwide service. Starting ₹9,999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/tax-appeal-filing",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/tax-appeal-filing.jpg",
        width: 1200,
        height: 630,
        alt: "Tax Appeal Filing Services - CIT(A), ITAT, High Court by Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Appeal Filing Services | CIT(A), ITAT, High Court | Taxvio",
    description:
      "Professional tax appeal filing and representation for income tax disputes across India. Expert grounds drafting and appellate support.",
    images: ["https://www.taxvio.in/og/tax-appeal-filing.jpg"],
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

export default function TaxAppealFilingPage() {
  return <TaxAppealFilingClient />;
}