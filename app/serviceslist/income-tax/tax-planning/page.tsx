import type { Metadata } from "next";
import TaxPlanningClient from "./TaxPlanningClient";

export const metadata: Metadata = {
  title:
    "Tax Planning Services | Tax Optimization for Individuals & Businesses | Taxvio",
  description:
    "Comprehensive tax planning and optimization services to minimize tax liability through legal investment strategies, deduction maximization, capital gains planning and business expense structuring. Expert guidance from CA professionals. Nationwide service across India.",
  keywords: [
    "tax planning services India",
    "tax optimization strategies India",
    "income tax saving investments",
    "Section 80C deduction planning",
    "Section 80D health insurance deduction",
    "HRA optimization salaried employees",
    "capital gains tax planning India",
    "business expense structuring",
    "tax saving for high net worth individuals",
    "tax planning for business owners",
    "tax planning for salaried professionals",
    "legal tax avoidance India",
    "tax consultant for tax planning",
    "investment planning for tax saving",
    "professional tax planning services nationwide",
    "tax efficient investment portfolio India",
    "NPS investment tax benefits",
    "ELSS tax saving mutual funds",
    "home loan interest tax deduction",
    "CA for tax planning India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/tax-planning",
  },
  openGraph: {
    title:
      "Tax Planning Services | Tax Optimization for Individuals & Businesses | Taxvio",
    description:
      "Expert tax planning to minimize tax liability through legal strategies. Deduction optimization, capital gains planning and expense structuring. Nationwide service. Starting ₹2,999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/tax-planning",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/tax-planning.jpg",
        width: 1200,
        height: 630,
        alt: "Tax Planning Services by Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Planning Services | Tax Optimization | Taxvio",
    description:
      "Professional tax planning to minimize tax liability for individuals and businesses across India.",
    images: ["https://www.taxvio.in/og/tax-planning.jpg"],
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

export default function TaxPlanningPage() {
  return <TaxPlanningClient />;
}