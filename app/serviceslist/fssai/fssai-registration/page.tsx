import type { Metadata } from "next";
import FSSAIRegistrationClient from "./Fssairegistrationclient";

export const metadata: Metadata = {
  title: "FSSAI Registration India 2025 — Basic, State & Central Food Licence | Taxvio",
  description:
    "Expert FSSAI registration — Basic Registration (Form A), State Licence, and Central Licence. FoSCos portal filing, food category selection, document preparation. Mandatory for every food business under FSS Act 2006. Starting ₹999. Pan India.",
  keywords: [
    "FSSAI registration India",
    "FSSAI licence India",
    "FSSAI basic registration",
    "FSSAI state licence",
    "FSSAI central licence",
    "food licence India",
    "FoSCos FSSAI registration",
    "FSSAI Form A registration",
    "FSSAI Form B licence",
    "FSSAI registration for restaurant",
    "FSSAI registration for home food business",
    "FSSAI registration for cloud kitchen",
    "FSSAI food category selection",
    "FSSAI annual return Form D1",
    "FSS Act 2006 food licence",
    "FSSAI registration Muzaffarnagar",
    "FSSAI registration Uttar Pradesh",
    "FSSAI registration Khatauli",
    "FSSAI licence for food manufacturer",
    "FSSAI registration penalty India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/fssai/fssai-registration",
  },
  openGraph: {
    title: "FSSAI Registration India — Basic, State & Central Food Licence | Taxvio",
    description:
      "FSSAI registration for all food businesses — Basic (Form A), State Licence, Central Licence. FoSCos portal filing, all food categories. Starting ₹999. Pan India.",
    url: "https://www.taxvio.in/serviceslist/fssai/fssai-registration",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/fssai-registration.jpg",
        width: 1200,
        height: 630,
        alt: "FSSAI Registration India — Basic State Central Food Licence — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FSSAI Registration India — Food Licence | Taxvio",
    description:
      "Basic, State & Central FSSAI licence. FoSCos portal filing. All food categories. Starting ₹999.",
    images: ["https://www.taxvio.in/og/fssai-registration.jpg"],
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

export default function FSSAIRegistrationPage() {
  return <FSSAIRegistrationClient />;
}