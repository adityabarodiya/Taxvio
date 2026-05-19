import type { Metadata } from "next";
import FSSAIModificationClient from "./Fssaimodificationclient";

export const metadata: Metadata = {
  title: "FSSAI Licence Modification India 2025 — Amendment, Product Addition, Address Change | Taxvio",
  description:
    "Expert FSSAI licence modification — food product addition/deletion, address change, ownership transfer, business name change, new activity addition, and licence upgrade (Basic to State, State to Central). FoSCos amendment filing. Starting ₹999. Pan India.",
  keywords: [
    "FSSAI modification India",
    "FSSAI licence amendment India",
    "FSSAI food product addition",
    "FSSAI address change",
    "FSSAI ownership change",
    "FSSAI name change",
    "FSSAI licence upgrade",
    "FSSAI basic to state upgrade",
    "FSSAI state to central upgrade",
    "FSSAI amendment FoSCos",
    "FSSAI activity addition",
    "FSSAI modification Form B",
    "FSSAI modification penalty",
    "FSSAI product category addition",
    "FSSAI premises change India",
    "FSSAI modification Muzaffarnagar",
    "FSSAI modification Uttar Pradesh",
    "FSSAI modification Khatauli",
    "food licence modification India",
    "FSSAI amendment vs renewal",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/fssai/fssai-modification",
  },
  openGraph: {
    title: "FSSAI Licence Modification India — Product Addition, Address & Ownership Change | Taxvio",
    description:
      "FSSAI amendment for all change types — product, address, ownership, name, activity, upgrade. FoSCos portal. Starting ₹999. Pan India.",
    url: "https://www.taxvio.in/serviceslist/fssai/fssai-modification",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/fssai-modification.jpg",
        width: 1200,
        height: 630,
        alt: "FSSAI Licence Modification India — Amendment Services — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FSSAI Licence Modification India | Taxvio",
    description:
      "FSSAI product addition, address change, ownership transfer, licence upgrade. FoSCos amendment. Starting ₹999.",
    images: ["https://www.taxvio.in/og/fssai-modification.jpg"],
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

export default function FSSAIModificationPage() {
  return <FSSAIModificationClient />;
}