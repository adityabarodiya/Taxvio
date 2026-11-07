// data/roc-services.ts
// The ROC category and its services, exactly as you supplied them.
// If you already export this object from your main services file, delete this file and
// point the `rocCategory` import in the ROC pages at yours.

export interface RocService {
  slug: string;
  title: string;
  shortDescription: string;
  features: string[];
  documentsRequired: string[];
  idealFor: string[];
  seo: { title: string; description: string };
}

export interface RocCategory {
  slug: string;
  category: string;
  description: string;
  services: RocService[];
}

export const rocCategory: RocCategory = {
    slug: "roc",
    category: "Registrar of Companies (ROC)",
    description:
      "Company formation, statutory compliance, and ROC-related services for businesses",
    services: [
      {
        slug: "private-limited-formation",
        title: "Private Limited Company Formation",
        shortDescription:
          "Complete incorporation services for private limited companies including documentation and MCA filing.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Certificate of Incorporation",
          "PAN & TAN application",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors",
          "Registered office proof",
        ],
        idealFor: ["Startups", "Growing businesses"],
        seo: {
          title: "Private Limited Company Registration",
          description:
            "Start your private limited company with expert assistance.",
        },
      },

      {
        slug: "llp-formation",
        title: "LLP Registration",
        shortDescription:
          "Professional LLP registration services with MCA compliance and documentation support.",
        features: [
          "Name reservation",
          "LLP agreement drafting",
          "Incorporation certificate",
        ],
        documentsRequired: [
          "PAN & Aadhaar of partners",
          "Registered office proof",
        ],
        idealFor: ["Professionals", "Small businesses"],
        seo: {
          title: "LLP Registration Services",
          description:
            "Register your LLP with complete ROC compliance and expert support.",
        },
      },

      {
        slug: "opc-formation",
        title: "One Person Company (OPC) Registration",
        shortDescription:
          "OPC registration services for solo entrepreneurs with complete MCA compliance.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Incorporation certificate",
        ],
        documentsRequired: [
          "PAN & Aadhaar of director",
          "Registered office proof",
        ],
        idealFor: ["Solo entrepreneurs"],
        seo: {
          title: "OPC Registration Services",
          description:
            "Register your One Person Company easily with expert assistance.",
        },
      },

      {
        slug: "section-8-company",
        title: "Section 8 Company Registration",
        shortDescription:
          "Formation of non-profit Section 8 companies for charitable and social objectives.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "License under Section 8",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors",
          "Registered office proof",
        ],
        idealFor: ["NGOs", "Charitable institutions"],
        seo: {
          title: "Section 8 Company Registration",
          description:
            "Professional Section 8 company registration services in India.",
        },
      },

      {
        slug: "annual-roc-compliance",
        title: "Annual ROC Compliance",
        shortDescription:
          "Filing of annual ROC returns and compliance documents for companies and LLPs.",
        features: ["AOC-4 filing", "MGT-7 filing", "LLP Form 11 & 8"],
        documentsRequired: ["Balance sheet", "Profit & loss account"],
        idealFor: ["Private limited companies", "LLPs"],
        seo: {
          title: "Annual ROC Compliance Services",
          description:
            "Ensure timely ROC annual return filing with expert support.",
        },
      },

      {
        slug: "director-appointment-resignation",
        title: "Director Appointment / Resignation",
        shortDescription:
          "ROC filing services for appointment and resignation of company directors.",
        features: [
          "DIR-12 filing",
          "Board resolution drafting",
          "MCA approval tracking",
        ],
        documentsRequired: ["PAN & Aadhaar of director", "DSC"],
        idealFor: ["Private limited companies"],
        seo: {
          title: "Director Appointment & Resignation ROC Filing",
          description:
            "Professional assistance for director appointment and resignation ROC filings.",
        },
      },

      {
        slug: "company-name-change",
        title: "Company Name Change",
        shortDescription:
          "ROC compliance support for changing company name with MCA approval.",
        features: [
          "Name availability check",
          "RUN form filing",
          "MOA & AOA alteration",
        ],
        documentsRequired: ["Certificate of incorporation", "Board resolution"],
        idealFor: ["Companies rebranding"],
        seo: {
          title: "Company Name Change ROC Filing",
          description:
            "Change your company name legally with ROC compliance support.",
        },
      },

      {
        slug: "authorized-capital-increase",
        title: "Increase in Authorized Share Capital",
        shortDescription:
          "ROC filing for increasing authorized share capital of a company.",
        features: ["SH-7 filing", "MOA alteration", "Capital structure update"],
        documentsRequired: ["MOA", "Board resolution"],
        idealFor: ["Growing companies"],
        seo: {
          title: "Increase Authorized Capital ROC Filing",
          description:
            "Increase your company's authorized capital with expert ROC compliance.",
        },
      },

      {
        slug: "company-closure",
        title: "Company Closure / Strike Off",
        shortDescription:
          "Professional assistance for company closure and strike-off under ROC.",
        features: [
          "STK-2 filing",
          "Document preparation",
          "Closure certificate",
        ],
        documentsRequired: ["PAN of company", "Financial statements"],
        idealFor: ["Inactive companies"],
        seo: {
          title: "Company Closure & Strike Off",
          description:
            "Close your inactive company legally with ROC strike-off services.",
        },
      },
      /**
 * New ROC services — paste these objects into the `services` array
 * of the `roc` category, right after "company-closure".
 */

      {
        slug: "public-limited-company-formation",
        title: "Public Limited Company Formation",
        shortDescription:
          "Complete incorporation services for public limited companies, including documentation, MCA filing, and compliance with minimum member and director requirements.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Certificate of Incorporation",
          "PAN & TAN application",
          "Statutory compliance setup",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors",
          "Registered office proof",
          "Director Identification Numbers (DIN)",
        ],
        idealFor: [
          "Large-scale businesses",
          "Companies planning to raise public capital",
        ],
        seo: {
          title: "Public Limited Company Registration Services | Taxvio",
          description:
            "Incorporate your public limited company with expert MCA filing and complete documentation support.",
        },
      },

      {
        slug: "nidhi-company-registration",
        title: "Nidhi Company Registration",
        shortDescription:
          "Formation of Nidhi companies for member-based lending and borrowing activities, with complete MCA and NDH compliance support.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Incorporation certificate",
          "NDH-4 declaration filing",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors",
          "Registered office proof",
          "Minimum member details",
        ],
        idealFor: ["Mutual benefit societies", "Community lending groups"],
        seo: {
          title: "Nidhi Company Registration Services | Taxvio",
          description:
            "Register your Nidhi company with expert guidance on incorporation and NDH compliance requirements.",
        },
      },

      {
        slug: "producer-company-registration",
        title: "Producer Company Registration",
        shortDescription:
          "Incorporation of producer companies for farmers, artisans, and primary producers seeking collective business benefits.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Incorporation certificate",
          "Member share structuring",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors/members",
          "Registered office proof",
          "Proof of producer activity",
        ],
        idealFor: [
          "Farmer producer organizations",
          "Artisan collectives",
          "Agri-based businesses",
        ],
        seo: {
          title: "Producer Company Registration Services | Taxvio",
          description:
            "Register a producer company for farmers and primary producers with complete MCA incorporation support.",
        },
      },

      {
        slug: "registered-office-change",
        title: "Change in Registered Office Address",
        shortDescription:
          "ROC filing support for shifting a company's registered office within the same city, state, or to a different state.",
        features: [
          "INC-22 filing",
          "Board & shareholder resolution drafting",
          "Regional Director approval (inter-state shift)",
          "MOA address update",
        ],
        documentsRequired: [
          "New address proof",
          "NOC from property owner",
          "Board resolution",
        ],
        idealFor: [
          "Companies relocating offices",
          "Businesses expanding to new states",
        ],
        seo: {
          title: "Change of Registered Office Address ROC Filing | Taxvio",
          description:
            "Shift your company's registered office with proper ROC filing, resolution drafting, and approval support.",
        },
      },

      {
        slug: "dir-3-kyc",
        title: "DIN KYC (DIR-3 KYC) Filing",
        shortDescription:
          "Annual KYC filing for directors to keep DIN active and avoid deactivation, covering FY 2025-26 compliance deadlines.",
        features: [
          "DIR-3 KYC / KYC-Web filing",
          "DIN status verification",
          "Late fee avoidance guidance",
          "Deactivated DIN reactivation support",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "Personal mobile number & email (OTP verification)",
        ],
        idealFor: [
          "All company & LLP directors",
          "Directors renewing DIN for FY 2025-26",
        ],
        seo: {
          title: "DIR-3 KYC Filing Services FY 2025-26 | Taxvio",
          description:
            "File your DIR-3 KYC for FY 2025-26 before the deadline to keep your DIN active. Expert filing and reactivation support for deactivated DINs.",
        },
      },

      {
        slug: "dpt-3-filing",
        title: "Return of Deposits (DPT-3) Filing",
        shortDescription:
          "Annual filing of DPT-3 disclosing outstanding loans and deposits not classified as deposits, applicable for FY 2025-26.",
        features: [
          "Applicability assessment",
          "Loan & deposit data compilation",
          "DPT-3 preparation & filing",
          "Auditor certificate coordination",
        ],
        documentsRequired: [
          "Audited financial statements",
          "Loan & deposit ledgers",
          "Auditor's certificate",
        ],
        idealFor: [
          "Private & public limited companies",
          "Companies with outstanding loans from directors/shareholders",
        ],
        seo: {
          title: "DPT-3 Filing Services FY 2025-26 | Taxvio",
          description:
            "File your DPT-3 return of deposits for FY 2025-26 accurately and on time with expert compilation and filing support.",
        },
      },

      {
        slug: "charge-registration-satisfaction",
        title: "Charge Creation & Satisfaction (CHG-1/CHG-4)",
        shortDescription:
          "ROC filing for registering charges on company assets against loans, and filing satisfaction once the loan is repaid.",
        features: [
          "CHG-1 charge creation filing",
          "CHG-4 satisfaction of charge filing",
          "Charge register maintenance",
          "Lender coordination",
        ],
        documentsRequired: [
          "Loan agreement",
          "Sanction letter",
          "Board resolution",
          "No-dues certificate (for satisfaction)",
        ],
        idealFor: [
          "Companies availing secured loans",
          "Companies closing secured loans",
        ],
        seo: {
          title: "Charge Creation & Satisfaction ROC Filing | Taxvio",
          description:
            "Register or satisfy charges on company assets with expert CHG-1 and CHG-4 filing support.",
        },
      },

      {
        slug: "share-transfer",
        title: "Share Transfer & Transmission",
        shortDescription:
          "Documentation and ROC compliance support for transferring or transmitting shares between shareholders.",
        features: [
          "Share transfer deed (SH-4) preparation",
          "Board approval processing",
          "Share certificate endorsement",
          "Register of members update",
        ],
        documentsRequired: [
          "Share certificates",
          "Transfer deed",
          "PAN of transferor & transferee",
        ],
        idealFor: [
          "Companies with shareholding changes",
          "Family-owned businesses transferring shares",
        ],
        seo: {
          title: "Share Transfer & Transmission Services | Taxvio",
          description:
            "Complete share transfer and transmission compliance including transfer deed drafting and register updates.",
        },
      },

      {
        slug: "company-conversion-private-to-public",
        title: "Private to Public Company Conversion",
        shortDescription:
          "Conversion of a private limited company into a public limited company with MOA/AOA alteration and MCA approval.",
        features: [
          "Eligibility & structure review",
          "MOA & AOA alteration",
          "MGT-14 filing",
          "INC-27 conversion filing",
        ],
        documentsRequired: [
          "Special resolution copy",
          "Altered MOA & AOA",
          "Board resolution",
        ],
        idealFor: [
          "Growing private companies",
          "Companies planning to raise public funds",
        ],
        seo: {
          title: "Private to Public Company Conversion Services | Taxvio",
          description:
            "Convert your private limited company to a public limited company with expert MOA/AOA alteration and MCA filing support.",
        },
      },

      {
        slug: "llp-to-company-conversion",
        title: "LLP to Private Limited Company Conversion",
        shortDescription:
          "Conversion of an LLP into a private limited company to enable equity fundraising and corporate structuring.",
        features: [
          "Eligibility assessment",
          "Name approval",
          "URC-1 filing",
          "MOA & AOA drafting",
          "Incorporation certificate",
        ],
        documentsRequired: [
          "LLP agreement",
          "Partner consent",
          "PAN & Aadhaar of partners/directors",
          "Financial statements",
        ],
        idealFor: [
          "LLPs planning to raise equity funding",
          "Growing partnership businesses",
        ],
        seo: {
          title: "LLP to Private Limited Company Conversion | Taxvio",
          description:
            "Convert your LLP into a private limited company with complete MCA filing and incorporation support.",
        },
      },

      {
        slug: "adt-1-auditor-appointment",
        title: "Statutory Auditor Appointment (ADT-1)",
        shortDescription:
          "Filing of ADT-1 for appointment or reappointment of statutory auditors, applicable for FY 2025-26 annual compliance.",
        features: [
          "Auditor consent & eligibility letter",
          "Board/AGM resolution drafting",
          "ADT-1 preparation & filing",
          "Auditor tenure tracking",
        ],
        documentsRequired: [
          "Auditor consent letter",
          "Eligibility certificate",
          "Board or AGM resolution",
        ],
        idealFor: [
          "Newly incorporated companies",
          "Companies reappointing auditors for FY 2025-26",
        ],
        seo: {
          title: "ADT-1 Auditor Appointment Filing FY 2025-26 | Taxvio",
          description:
            "File ADT-1 for statutory auditor appointment or reappointment for FY 2025-26 with complete documentation support.",
        },
      },

      {
        slug: "sbo-ben-2-filing",
        title: "Significant Beneficial Owner (SBO) Declaration & BEN-2 Filing",
        shortDescription:
          "Identification of significant beneficial owners and filing of BEN-2 to comply with beneficial ownership disclosure norms.",
        features: [
          "SBO identification & threshold analysis",
          "BEN-1 declaration collection",
          "BEN-2 preparation & filing",
          "Register of SBOs maintenance",
        ],
        documentsRequired: [
          "Shareholding pattern",
          "BEN-1 declarations from SBOs",
          "Company ownership structure",
        ],
        idealFor: [
          "Companies with layered shareholding",
          "Companies with indirect beneficial owners",
        ],
        seo: {
          title: "SBO Declaration & BEN-2 Filing Services | Taxvio",
          description:
            "Identify significant beneficial owners and file BEN-2 with expert compliance support for beneficial ownership disclosure norms.",
        },
      },

      {
        slug: "msme-1-filing",
        title: "MSME-1 Half-Yearly Return Filing",
        shortDescription:
          "Half-yearly filing of MSME-1 disclosing outstanding payments to micro and small enterprise suppliers beyond 45 days, for FY 2025-26.",
        features: [
          "Vendor MSME status verification",
          "Outstanding payment compilation",
          "MSME-1 preparation & filing",
          "Half-yearly deadline tracking",
        ],
        documentsRequired: [
          "Vendor MSME registration certificates",
          "Purchase & payment records",
          "Outstanding dues ledger",
        ],
        idealFor: [
          "Companies purchasing from MSME vendors",
          "Companies with delayed vendor payments",
        ],
        seo: {
          title: "MSME-1 Filing Services FY 2025-26 | Taxvio",
          description:
            "File your half-yearly MSME-1 return for FY 2025-26 disclosing overdue payments to micro and small enterprises.",
        },
      },

      {
        slug: "agm-compliance",
        title: "Annual General Meeting (AGM) Compliance",
        shortDescription:
          "End-to-end support for conducting a company's Annual General Meeting in compliance with the Companies Act, including notice, minutes, and MGT-15 filing.",
        features: [
          "AGM notice drafting",
          "Agenda & resolution preparation",
          "Minutes drafting",
          "MGT-15 filing (listed companies)",
          "Extension application (if required)",
        ],
        documentsRequired: [
          "Financial statements",
          "Director's report",
          "Auditor's report",
        ],
        idealFor: [
          "Private & public limited companies",
          "Companies due for annual shareholder approval",
        ],
        seo: {
          title: "AGM Compliance Services | Taxvio",
          description:
            "Conduct your company's Annual General Meeting with expert notice drafting, minutes preparation, and MCA compliance support.",
        },
      },

      {
        slug: "company-revival-restoration",
        title: "Revival / Restoration of Struck-Off Company",
        shortDescription:
          "Assistance in restoring a company or LLP struck off by the ROC through NCLT application, enabling resumption of business operations.",
        features: [
          "Strike-off order review",
          "NCLT restoration application (Form NCLT-9)",
          "Pending return clearance",
          "Restoration order follow-up",
        ],
        documentsRequired: [
          "Strike-off order copy",
          "Certificate of incorporation",
          "Pending financial statements & returns",
        ],
        idealFor: [
          "Companies struck off by ROC",
          "Businesses needing to reactivate a closed entity",
        ],
        seo: {
          title: "Company Revival & Restoration Services | Taxvio",
          description:
            "Restore your struck-off company through NCLT application with expert documentation and follow-up support.",
        },
      },

      {
        slug: "llp-closure",
        title: "LLP Closure / Strike Off",
        shortDescription:
          "Professional assistance for winding up and striking off an inactive or non-operational LLP from the MCA register.",
        features: [
          "Form 24 preparation & filing",
          "Partner consent documentation",
          "Pending return clearance",
          "Closure confirmation follow-up",
        ],
        documentsRequired: [
          "PAN of LLP",
          "Partner consent letters",
          "Statement of accounts",
        ],
        idealFor: ["Inactive LLPs", "Non-operational partnerships"],
        seo: {
          title: "LLP Closure & Strike Off Services | Taxvio",
          description:
            "Close your inactive LLP legally with expert Form 24 filing and MCA strike-off support.",
        },
      },

      {
        slug: "csr-1-registration",
        title: "CSR-1 Registration",
        shortDescription:
          "Registration of NGOs, Section 8 companies, and trusts on the MCA CSR-1 portal to become eligible for receiving corporate CSR funding.",
        features: [
          "Eligibility verification",
          "CSR-1 form preparation & filing",
          "Digital signature coordination",
          "Registration acknowledgement support",
        ],
        documentsRequired: [
          "Trust deed / Section 8 license",
          "PAN of entity",
          "Governing body details",
        ],
        idealFor: [
          "NGOs & trusts seeking CSR funding",
          "Section 8 companies",
        ],
        seo: {
          title: "CSR-1 Registration Services | Taxvio",
          description:
            "Register your NGO or Section 8 company on the MCA CSR-1 portal to become eligible for corporate CSR funding.",
        },
      },

      {
        slug: "fc-gpr-fdi-compliance",
        title: "Foreign Investment (FC-GPR) Compliance",
        shortDescription:
          "RBI and MCA compliance support for companies receiving foreign direct investment, including FC-GPR filing on the FIRMS portal.",
        features: [
          "FDI structure & pricing guideline review",
          "FC-GPR filing on FIRMS portal",
          "KYC & valuation report coordination",
          "Share allotment ROC filing (PAS-3)",
        ],
        documentsRequired: [
          "FIRC (Foreign Inward Remittance Certificate)",
          "Valuation report",
          "Board & shareholder resolutions",
          "KYC of foreign investor",
        ],
        idealFor: [
          "Companies receiving foreign investment",
          "Startups with overseas investors",
        ],
        seo: {
          title: "FC-GPR Filing & FDI Compliance Services | Taxvio",
          description:
            "Complete FDI compliance for companies receiving foreign investment, including FC-GPR filing on the RBI FIRMS portal.",
        },
      },
    ],
  };