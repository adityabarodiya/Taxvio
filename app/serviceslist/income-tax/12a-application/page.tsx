import type { Metadata } from "next";
import Section12AClient from "./Section12AClient";

export const metadata: Metadata = {
  title: "Section 12A / 12AB Registration for Trusts & NGOs | Form 10A 10AB | Taxvio",
  description:
    "Professional Section 12A and 12AB registration services for charitable trusts, NGOs, societies & Section 8 companies in India. Form 10A / 10AB filing, provisional & regular registration, 80G approval, renewal every 5 years. Starting ₹3,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "section 12A registration trust India",
    "section 12AB registration NGO India",
    "12AB trust registration service",
    "Form 10A filing trust registration",
    "Form 10AB trust renewal",
    "charitable trust income tax exemption",
    "NGO tax exemption registration India",
    "section 8 company 12AB registration",
    "80G approval trust India",
    "provisional registration trust 12AB",
    "trust registration renewal 5 years",
    "Form 10BD donor statement trust",
    "section 11 12 income tax exemption trust",
    "12A registration Khatauli",
    "12A registration Muzaffarnagar",
    "CA assisted trust registration India",
    "PCIT trust registration application",
    "old 12A re-registration 12AB",
    "trust income tax exemption 85 percent",
    "section 2(15) charitable purpose trust",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/income-tax/12a-application",
  },
  openGraph: {
    title: "Section 12A / 12AB Registration for Trusts & NGOs | Form 10A 10AB | Taxvio",
    description:
      "Expert 12AB trust registration — Form 10A/10AB, provisional & regular, 80G approval, 5-year renewal. Starting ₹3,999. CA-assisted pan-India service.",
    url: "https://www.taxvio.in/income-tax/12a-application",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/12a-application.jpg",
        width: 1200,
        height: 630,
        alt: "Section 12A 12AB Registration for Trusts and NGOs — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Section 12AB Registration for Trusts & NGOs | Taxvio",
    description:
      "CA-assisted 12AB trust registration — Form 10A/10AB, provisional & regular, 80G approval. Starting ₹3,999.",
    images: ["https://www.taxvio.in/og/12a-application.jpg"],
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

export default function Section12APage() {
  return <Section12AClient />;
}