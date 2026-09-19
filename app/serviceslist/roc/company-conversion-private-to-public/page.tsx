// app/serviceslist/roc/company-conversion-private-to-public/page.tsx
import type { Metadata } from "next";
import CompanyConversionPrivateToPublicClient from "./CompanyConversionPrivateToPublicClient";

export const metadata: Metadata = {
  title: "Private to Public Company Conversion Services | Taxvio",
  description:
    "Convert your private limited company to a public limited company with expert MOA/AOA alteration and MCA filing support. Special Resolution drafting, MGT-14 & INC-27 filing, 7-shareholder and 3-director compliance. Starting ₹14,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "private to public company conversion India",
    "convert private limited to public limited",
    "section 14 companies act conversion",
    "section 18 company conversion",
    "MOA AOA alteration for public company",
    "MGT-14 filing",
    "INC-27 conversion filing",
    "special resolution company conversion",
    "public limited company registration",
    "private company to public company MCA",
    "minimum 7 shareholders public company",
    "minimum 3 directors public company",
    "company conversion Muzaffarnagar",
    "company conversion Meerut",
    "company conversion Noida",
    "company conversion Delhi NCR",
    "corporate restructuring services",
    "IPO readiness company conversion",
    "CA for company conversion",
    "CS for company conversion",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/company-conversion-private-to-public",
  },
  openGraph: {
    title: "Private to Public Company Conversion | Taxvio",
    description:
      "Convert your private limited company to a public limited company. MOA/AOA alteration, MGT-14 & INC-27 filing, expert MCA support. ₹14,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/company-conversion-private-to-public",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/company-conversion-private-to-public.jpg",
        width: 1200,
        height: 630,
        alt: "Private to Public Company Conversion Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private to Public Company Conversion | Taxvio",
    description:
      "Convert private to public company. MOA/AOA alteration, MGT-14/INC-27 filing. 20-25 days. ₹14,999+.",
    images: [
      "https://www.taxvio.in/og/company-conversion-private-to-public.jpg",
    ],
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

export default function CompanyConversionPrivateToPublicPage() {
  return <CompanyConversionPrivateToPublicClient />;
}