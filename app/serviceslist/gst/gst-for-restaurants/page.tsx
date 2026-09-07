// app/serviceslist/gst/gst-for-restaurants/page.tsx
import type { Metadata } from "next";
import GSTForRestaurantsClient from "./GSTForRestaurantsClient";

export const metadata: Metadata = {
  title: "GST for Restaurants & Hospitality | Zomato/Swiggy Compliance | Taxvio",
  description:
    "Specialized GST services for restaurants, cafes, cloud kitchens, hotels & hospitality businesses. Expert GST registration, composition scheme advisory (5% rate), Section 9(5) TCS compliance for aggregator platforms (Zomato/Swiggy), monthly GSTR-1/GSTR-3B filing, platform settlement reconciliation, ITC optimization on food inputs, FSSAI-GST linking, and complete compliance support. Starting ₹2,999/month. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "GST for restaurants",
    "restaurant GST registration",
    "cloud kitchen GST",
    "hotel GST compliance",
    "Zomato GST",
    "Swiggy GST",
    "restaurant composition scheme",
    "5% GST on food",
    "Section 9(5) GST",
    "TCS on food delivery",
    "food aggregator GST",
    "FSSAI GST linking",
    "restaurant return filing",
    "hospitality GST",
    "cafe GST registration",
    "banquet hall GST",
    "restaurant ITC claim",
    "GST Muzaffarnagar",
    "GST Noida restaurants",
    "food business GST India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-for-restaurants",
  },
  openGraph: {
    title: "GST for Restaurants & Hospitality | Zomato/Swiggy Compliance | Taxvio",
    description:
      "Complete GST compliance for restaurants, cloud kitchens, hotels — Registration, composition scheme, platform reconciliation. Starting ₹2,999/month.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-for-restaurants",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-for-restaurants.jpg",
        width: 1200,
        height: 630,
        alt: "GST for Restaurants & Hospitality — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST for Restaurants & Hospitality | Taxvio",
    description:
      "GST compliance for restaurants, cloud kitchens, Zomato/Swiggy sellers. Starting ₹2,999/month.",
    images: ["https://www.taxvio.in/og/gst-for-restaurants.jpg"],
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

export default function GSTForRestaurantsPage() {
  return <GSTForRestaurantsClient />;
}