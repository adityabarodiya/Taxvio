// data/city-slugs.ts
// One place that decides the URL slug for every district / sub-district page,
// so the index page, generateStaticParams() and [city]/page.tsx always agree.
//
// Slugs include the state so they are globally unique
// (e.g. "aurangabad-bihar" vs "aurangabad-maharashtra").
//   district     -> {district}-{state}                e.g. muzaffarnagar-uttar-pradesh
//   sub-district -> {sub-district}-{district}-{state} e.g. khatauli-muzaffarnagar-uttar-pradesh

import { indiaStates, type State, type District, type SubDistrict } from "./cities";

export const districtCitySlug = (s: State, d: District) => `${d.slug}-${s.slug}`;

export const subDistrictCitySlug = (s: State, d: District, x: SubDistrict) =>
  `${x.slug}-${d.slug}-${s.slug}`;

export const cityHref = (slug: string) => `/city/gst-services/${slug}`;

/** Every page slug: districts + sub-districts. Use for generateStaticParams(). */
export const allCitySlugs: string[] = indiaStates.flatMap((s) =>
  s.districts.flatMap((d) => [
    districtCitySlug(s, d),
    ...d.subDistricts.map((x) => subDistrictCitySlug(s, d, x)),
  ])
);