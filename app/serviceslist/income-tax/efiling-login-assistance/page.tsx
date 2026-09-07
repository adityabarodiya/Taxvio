// app/serviceslist/income-tax/efiling-login-assistance/page.tsx
import type { Metadata } from "next";
import EFilingLoginClient from "./EFilingLoginClient";

export const metadata: Metadata = {
  title: "E-Filing Login & Portal Assistance | Registration, Password Reset | Taxvio",
  description:
    "Expert support for income tax e-filing portal registration, login issues, password reset, profile update, EVC generation, and portal navigation. Assistance for first-time filers, senior citizens, and technical issues. Starting ₹199. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "e-filing portal registration India",
    "income tax login help",
    "e-filing password reset",
    "forgot e-filing portal password",
    "e-filing portal OTP issues",
    "register on income tax portal",
    "e-filing account locked",
    "bank account pre-validation",
    "EVC generation help",
    "e-filing portal navigation",
    "income tax portal assistance",
    "e-filing login troubleshooting",
    "Aadhaar PAN linking for e-filing",
    "e-filing portal for senior citizens",
    "remote e-filing portal support",
    "e-filing portal Khatauli",
    "e-filing portal Muzaffarnagar",
    "income tax portal technical support",
    "first time ITR filer help",
    "e-filing portal profile update",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/income-tax/efiling-login-assistance",
  },
  openGraph: {
    title: "E-Filing Login & Portal Assistance | Registration & Password Reset | Taxvio",
    description:
      "Complete support for e-filing portal registration, login issues, password reset, EVC generation, profile update. Expert help for first-time filers & seniors. Starting ₹199.",
    url: "https://www.taxvio.in/serviceslist/income-tax/efiling-login-assistance",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/efiling-login-assistance.jpg",
        width: 1200,
        height: 630,
        alt: "E-Filing Login & Portal Assistance — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Filing Portal Assistance | Registration & Login Help | Taxvio",
    description:
      "Expert e-filing portal support — registration, login, password reset, navigation. Starting ₹199.",
    images: ["https://www.taxvio.in/og/efiling-login-assistance.jpg"],
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

export default function EFilingLoginPage() {
  return <EFilingLoginClient />;
}