import type { Metadata } from "next";
import FSSAIAnnualReturnClient from "./Fssaiannualreturnclient";

export const metadata: Metadata = {
  title: "FSSAI Annual Return Filing India 2025 — Form D1 & Form D2 | Taxvio",
  description:
    "Expert FSSAI annual return filing — Form D1 for State and Central licence holders, Form D2 for dairy businesses. Due 31 May. Late fee handling, GST reconciliation, multi-year pending return clearance, renewal unblock. Starting ₹699/year. Pan India.",
  keywords: [
    "FSSAI annual return India",
    "FSSAI Form D1 filing",
    "FSSAI Form D2 dairy return",
    "FSSAI annual return due date",
    "FSSAI annual return 31 May",
    "FSSAI annual return late fee",
    "FSSAI annual return FoSCos",
    "FSSAI annual return state licence",
    "FSSAI annual return central licence",
    "FSSAI annual return pending clearance",
    "FSSAI Form D1 multiple years",
    "Regulation 2.1.12 FSSAI return",
    "FSSAI return blocks renewal",
    "FSSAI annual return penalty ₹100/day",
    "FSSAI annual return GST reconciliation",
    "FSSAI annual return Muzaffarnagar",
    "FSSAI annual return Uttar Pradesh",
    "FSSAI annual return Khatauli",
    "food business annual return India",
    "FSSAI Form D1 importer exporter",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/fssai/fssai-annual-return",
  },
  openGraph: {
    title: "FSSAI Annual Return Filing India — Form D1 & Form D2 | Taxvio",
    description:
      "FSSAI Form D1 annual return for State/Central licences. Due 31 May. Late fee, GST reconciliation, multi-year clearance. Starting ₹699/year. Pan India.",
    url: "https://www.taxvio.in/serviceslist/fssai/fssai-annual-return",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/fssai-annual-return.jpg",
        width: 1200,
        height: 630,
        alt: "FSSAI Annual Return Form D1 Filing India — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FSSAI Annual Return India — Form D1 Filing | Taxvio",
    description:
      "FSSAI Form D1 due 31 May. Late fee ₹100/day. Blocks renewal. Multi-year clearance. Starting ₹699.",
    images: ["https://www.taxvio.in/og/fssai-annual-return.jpg"],
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

export default function FSSAIAnnualReturnPage() {
  return <FSSAIAnnualReturnClient />;
}