// Place this file at: app/state/bihar/gst-services/[city]/page.tsx

import type { Metadata } from "next";
import BiharGSTCityClient from "./Bihargstcityclient";
import { ALL_AREA_SLUGS, getAreaData, formatAreaDisplay } from "@/data/bihar-cities"; // ← adjust path if needed

export function generateStaticParams() {
  return ALL_AREA_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const data = getAreaData(city);
  const areaName = data?.name ?? formatAreaDisplay(city);
  const district = data?.district ?? areaName;

  return {
    title: `GST Registration & Return Filing in ${areaName}, Bihar | Taxvio`,
    description: `Expert GST registration, GSTR-1/GSTR-3B filing, GST refund, LUT filing, GSTIN verification, e-commerce GST and freelancer GST in ${areaName}, ${district}, Bihar. CA-assisted, 100% online, starting ₹999. Get your GSTIN in 3–7 days.`,
    keywords: [
      `GST registration ${areaName}`,
      `GST return filing ${areaName} Bihar`,
      `GSTIN ${areaName} ${district}`,
      `GST consultant ${areaName} Bihar`,
      `GST refund ${areaName}`,
      `GST for e-commerce ${areaName}`,
      `GST for freelancers ${areaName}`,
      `GSTIN verification ${areaName}`,
      `online GST ${areaName} Bihar`,
      `CA GST services ${district}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/state/bihar/gst-services/${city}` },
    openGraph: {
      title: `GST Services in ${areaName}, Bihar | Taxvio`,
      description: `GST registration, GSTR filing, refund, LUT, e-commerce & freelancer GST in ${areaName}, ${district}, Bihar — CA-assisted, from ₹999.`,
      url: `https://www.taxvio.in/state/bihar/gst-services/${city}`,
      siteName: "Taxvio",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `GST Services in ${areaName}, Bihar | Taxvio` },
    robots: { index: true, follow: true },
  };
}

export default async function BiharGSTAreaPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  return <BiharGSTCityClient citySlug={city} />;
}