// data/roc-slugs.ts
// URLs and build scope for the /city/roc pages. Location slugs are the same ones used by
// /city/gst-services (see data/city-slugs.ts), so a place has the same slug everywhere.

import { indiaStates } from "./cities";
import { allCitySlugs, districtCitySlug } from "./city-slugs";

/**
 * "all"       -> a page for every district AND every tehsil / sub-district (7,684 pages)
 * "districts" -> district pages only (763 pages). Smaller build, lower duplicate-content risk.
 *                The index page automatically stops linking to tehsil pages.
 */
export const ROC_PAGE_SCOPE: "all" | "districts" = "all";

export const rocCityHref = (slug: string) => `/city/roc/${slug}`;

/** Slugs to pre-render in generateStaticParams() */
export const rocCitySlugs: string[] =
  ROC_PAGE_SCOPE === "all"
    ? allCitySlugs
    : indiaStates.flatMap((s) => s.districts.map((d) => districtCitySlug(s, d)));