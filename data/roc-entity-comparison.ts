// data/roc-entity-comparison.ts
// Rows of the "which structure fits me" table on each location page.
// `service` is the slug of the matching service section, so a row can link to it.
// Rules change, so keep the on-page disclaimer.

export interface EntityRow {
  name: string;
  service: string;
  people: string;
  liability: string;
  audit: string;
  bestFor: string;
}

export const entityRows: EntityRow[] = [
  {
    name: "Private Limited Company",
    service: "private-limited-formation",
    people: "2 to 200 members, minimum 2 directors (one resident in India)",
    liability: "Limited to unpaid share capital",
    audit: "Every year",
    bestFor: "Startups and growing businesses planning to raise equity",
  },
  {
    name: "LLP",
    service: "llp-formation",
    people: "Minimum 2 partners, 2 designated partners (one resident in India)",
    liability: "Limited to agreed contribution",
    audit: "Only above ₹40 lakh turnover or ₹25 lakh contribution",
    bestFor: "Professionals and small businesses that want low compliance",
  },
  {
    name: "One Person Company",
    service: "opc-formation",
    people: "1 member, 1 nominee, minimum 1 director",
    liability: "Limited to unpaid share capital",
    audit: "Every year",
    bestFor: "Solo entrepreneurs who want a company structure",
  },
  {
    name: "Public Limited Company",
    service: "public-limited-company-formation",
    people: "Minimum 7 members, minimum 3 directors, no upper limit on members",
    liability: "Limited to unpaid share capital",
    audit: "Every year",
    bestFor: "Large businesses planning to raise money from the public",
  },
  {
    name: "Section 8 Company",
    service: "section-8-company",
    people: "Minimum 2 directors for a private company, 3 for a public one",
    liability: "Limited by shares or guarantee",
    audit: "Every year",
    bestFor: "NGOs and charitable bodies; profits go back into the objects, no dividends",
  },
  {
    name: "Nidhi Company",
    service: "nidhi-company-registration",
    people: "Minimum 7 members and 3 directors at start, 200 members within a year",
    liability: "Limited to unpaid share capital",
    audit: "Every year",
    bestFor: "Mutual benefit groups that accept deposits from and lend to their own members",
  },
  {
    name: "Producer Company",
    service: "producer-company-registration",
    people: "10 individual producers or 2 producer institutions, 5 to 15 directors",
    liability: "Limited to unpaid share capital",
    audit: "Every year",
    bestFor: "Farmers and artisans selling their produce together",
  },
];