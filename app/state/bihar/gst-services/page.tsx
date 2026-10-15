// Place this file at: app/state/bihar/gst-services/page.tsx

import type { Metadata } from "next";
import BiharGSTServicesClient from "./Bihargstservicesclient";
import { BIHAR_AREAS } from "@/data/bihar-cities"; // ← adjust path if needed

export const metadata: Metadata = {
  title: "GST Registration & Return Filing Services Across Bihar | Taxvio",
  description:
    `Taxvio provides expert GST registration, GSTR-1/GSTR-3B filing, GST refund, LUT filing, e-commerce GST, freelancer GST, and notice reply across ${BIHAR_AREAS.length}+ areas in Bihar — Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, Purnia & more. CA-assisted, 100% online, starting ₹1,499.`,
  keywords: [
    "GST registration Bihar",
    "GST services Bihar areas",
    "GST consultant Bihar",
    "GST return filing Bihar",
    "GSTIN registration Bihar",
    "GST Patna Gaya Bhagalpur Muzaffarpur",
    "GST for e-commerce Bihar",
    "GST for freelancers Bihar",
    "Taxvio Bihar GST",
    "GST search verification Bihar",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/bihar/gst-services" },
  openGraph: {
    title: "GST Services Across 200+ Bihar Areas | Taxvio",
    description: "Expert GST registration, return filing, refund, LUT & e-commerce GST across all Bihar areas — CA-assisted, from ₹1,499.",
    url: "https://www.taxvio.in/state/bihar/gst-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Services Across Bihar | Taxvio",
    description: "GST registration & filing across 200+ Bihar areas — from ₹1,499.",
  },
  robots: { index: true, follow: true },
};

export default function BiharGSTIndexPage() {
  return <BiharGSTServicesClient />;
}