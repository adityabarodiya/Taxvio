// data/roc-service-groups.ts
// Groups the ROC services for the filter chips and the side navigation.
// Every slug in data/roc-services.ts should appear in exactly one group; any slug
// that is missing is shown under "Other ROC services" so nothing disappears.

export interface RocGroup {
  id: string;
  label: string;
  blurb: string;
  slugs: string[];
}

export const rocGroups: RocGroup[] = [
  {
    id: "incorporation",
    label: "Company registration",
    blurb: "Start a new company, LLP or non-profit",
    slugs: [
      "private-limited-formation",
      "llp-formation",
      "opc-formation",
      "public-limited-company-formation",
      "section-8-company",
      "nidhi-company-registration",
      "producer-company-registration",
    ],
  },
  {
    id: "annual",
    label: "Annual compliance",
    blurb: "Yearly and half-yearly MCA filings",
    slugs: [
      "annual-roc-compliance",
      "agm-compliance",
      "adt-1-auditor-appointment",
      "dir-3-kyc",
      "dpt-3-filing",
      "msme-1-filing",
      "sbo-ben-2-filing",
    ],
  },
  {
    id: "changes",
    label: "Changes and amendments",
    blurb: "Update directors, name, capital, address or shareholding",
    slugs: [
      "director-appointment-resignation",
      "company-name-change",
      "authorized-capital-increase",
      "registered-office-change",
      "share-transfer",
      "charge-registration-satisfaction",
    ],
  },
  {
    id: "conversion",
    label: "Conversion and funding",
    blurb: "Change structure or bring in investors",
    slugs: [
      "company-conversion-private-to-public",
      "llp-to-company-conversion",
      "fc-gpr-fdi-compliance",
      "csr-1-registration",
    ],
  },
  {
    id: "closure",
    label: "Closure and revival",
    blurb: "Wind up or restore an entity",
    slugs: ["company-closure", "llp-closure", "company-revival-restoration"],
  },
];

/** slug -> group id (falls back to "other") */
export const rocGroupOf = (slug: string): string => {
  for (const g of rocGroups) if (g.slugs.includes(slug)) return g.id;
  return "other";
};