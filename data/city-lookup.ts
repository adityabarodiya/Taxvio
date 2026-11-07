// data/city-lookup.ts
// Turns a [city] URL slug into the district / sub-district it stands for.
// Needs data/cities.ts and data/city-slugs.ts (districtCitySlug, subDistrictCitySlug).

import { indiaStates, type State, type District, type SubDistrict } from "./cities";
import { districtCitySlug, subDistrictCitySlug } from "./city-slugs";

export interface CityLocation {
  slug: string;
  kind: "district" | "subdistrict";
  /** Name of the place the page is about, e.g. "Khatauli" or "Muzaffarnagar" */
  name: string;
  state: State;
  district: District;
  subDistrict?: SubDistrict;
}

const cityIndex = new Map<string, CityLocation>();

for (const state of indiaStates) {
  for (const district of state.districts) {
    const dSlug = districtCitySlug(state, district);
    cityIndex.set(dSlug, { slug: dSlug, kind: "district", name: district.name, state, district });
    for (const sub of district.subDistricts) {
      const sSlug = subDistrictCitySlug(state, district, sub);
      cityIndex.set(sSlug, { slug: sSlug, kind: "subdistrict", name: sub.name, state, district, subDistrict: sub });
    }
  }
}

/** Slug -> location (district or sub-district), or undefined for an unknown slug. */
export const resolveCity = (slug: string): CityLocation | undefined => cityIndex.get(slug);