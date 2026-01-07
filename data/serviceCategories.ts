import { ServiceCategory } from "@/types/serviceTypes";

export const serviceCategories: ServiceCategory[] = [
  /* ================= INCOME TAX ================= */
  {
    id: "income-tax",
    category: "Income Tax",
    description: "Complete income tax services for individuals, firms, and corporates",
    services: [
      {
        id: "pan-card",
        title: "PAN Card",
        shortDescription:
          "Complete assistance for new PAN card application, correction, reissue, and demographic updates with proper compliance support.",

        features: [
          "New PAN card application",
          "PAN correction & reprint",
          "Name, DOB & address update",
          "PAN status tracking support",
        ],

        documentsRequired: [
          "Aadhaar card",
          "Address proof",
          "Date of birth proof",
          "Passport size photograph",
        ],

        idealFor: [
          "Individuals applying for PAN for the first time",
          "Students & salaried employees",
          "Business owners & professionals",
        ],

        seo: {
          title: "PAN Card Services in India | AB Tax Solution",
          description:
            "Apply for new PAN card, correction, reissue, and PAN-related services with expert support.",
        },
      },

      // {
      //   id: "tan-application",
      //   title: "TAN Application",
      //   shortDescription:
      //     "End-to-end support for TAN application for businesses and professionals liable to deduct or collect tax at source.",
      //   seo: {
      //     title: "TAN Application Services | AB Tax Solution",
      //     description:
      //       "Professional assistance for TAN registration and compliance in India.",
      //   },
      // },
      // {
      //   id: "aadhar-pan-linking",
      //   title: "Aadhaar PAN Linking",
      //   shortDescription:
      //     "Quick and hassle-free Aadhaar–PAN linking services to ensure compliance and avoid penalties.",
      //   seo: {
      //     title: "Aadhaar PAN Linking Services",
      //     description:
      //       "Link your Aadhaar with PAN seamlessly with expert guidance.",
      //   },
      // },
      {
        id: "itr-salaried",
        title: "Income Tax Return – Individual (Salaried)",
        shortDescription:
          "Accurate income tax return filing for salaried individuals ensuring maximum deductions, compliance, and timely submission.",

        features: [
          "ITR filing with tax computation",
          "Deduction & exemption optimization",
          "Form 16 verification",
          "E-filing with acknowledgement",
        ],

        documentsRequired: [
          "Form 16",
          "Salary slips",
          "Investment proofs",
          "Bank statement",
          "Aadhaar & PAN",
        ],

        idealFor: [
          "Salaried employees",
          "Private & government job holders",
          "Individuals with multiple Form 16s",
        ],

        seo: {
          title: "ITR Filing for Salaried Individuals",
          description:
            "Professional income tax return filing services for salaried employees in India.",
        },
      }

      // {
      //   id: "itr-proprietor",
      //   title: "Income Tax Return – Individual Proprietor",
      //   shortDescription:
      //     "ITR filing services for proprietors with business income, including balance sheet and profit & loss preparation.",
      //   seo: {
      //     title: "ITR Filing for Proprietors",
      //     description:
      //       "Professional income tax return filing for proprietors and small businesses.",
      //   },
      // },
      // {
      //   id: "itr-firm-llp",
      //   title: "Income Tax Return – Firm / LLP",
      //   shortDescription:
      //     "Comprehensive ITR filing for partnership firms and LLPs ensuring statutory compliance and timely submissions.",
      //   seo: {
      //     title: "ITR Filing for Firm & LLP",
      //     description:
      //       "Expert income tax return filing for firms and LLPs in India.",
      //   },
      // },
      // {
      //   id: "itr-trust-company",
      //   title: "Income Tax Return – Trust / Pvt Ltd / Public Ltd",
      //   shortDescription:
      //     "Specialized income tax return filing for trusts and companies with complete compliance and audit coordination.",
      //   seo: {
      //     title: "ITR Filing for Trusts & Companies",
      //     description:
      //       "Reliable ITR filing services for trusts and corporate entities.",
      //   },
      // },
      // {
      //   id: "quarterly-tds",
      //   title: "Quarterly TDS Return",
      //   shortDescription:
      //     "Preparation and filing of quarterly TDS returns with accurate reconciliation and timely compliance.",
      //   seo: {
      //     title: "Quarterly TDS Return Filing",
      //     description:
      //       "Professional TDS return filing services for businesses and employers.",
      //   },
      // },
      // {
      //   id: "quarterly-tcs",
      //   title: "Quarterly TCS Return",
      //   shortDescription:
      //     "Assistance in quarterly TCS return filing ensuring correct reporting and statutory adherence.",
      //   seo: {
      //     title: "Quarterly TCS Return Filing",
      //     description:
      //       "Accurate and timely TCS return filing services.",
      //   },
      // },
      // {
      //   id: "income-tax-audit",
      //   title: "Income Tax Audit Compliance Assistance",
      //   shortDescription:
      //     "Complete support for income tax audit compliance including documentation, coordination, and reporting.",
      //   seo: {
      //     title: "Income Tax Audit Assistance",
      //     description:
      //       "Expert assistance for income tax audit compliance and documentation.",
      //   },
      // },
      // {
      //   id: "income-tax-scrutiny",
      //   title: "Income Tax Scrutiny & Financial Assessment",
      //   shortDescription:
      //     "Professional representation and support during income tax scrutiny, notices, and financial assessments.",
      //   seo: {
      //     title: "Income Tax Scrutiny Services",
      //     description:
      //       "Reliable assistance for income tax scrutiny and assessment proceedings.",
      //   },
      // },
      // {
      //   id: "12a-application",
      //   title: "12A Application",
      //   shortDescription:
      //     "Registration services under Section 12A for trusts and NGOs to claim income tax exemptions.",
      //   seo: {
      //     title: "12A Registration Services",
      //     description:
      //       "Apply for 12A registration with expert guidance.",
      //   },
      // },
      // {
      //   id: "80g-application",
      //   title: "80G Application",
      //   shortDescription:
      //     "End-to-end assistance for 80G registration enabling donors to claim tax deductions.",
      //   seo: {
      //     title: "80G Registration Services",
      //     description:
      //       "Professional support for 80G registration for trusts and NGOs.",
      //   },
      // },
      // {
      //   id: "15g-15h",
      //   title: "15G & 15H",
      //   shortDescription:
      //     "Preparation and submission of Form 15G and 15H to avoid excess TDS deduction on eligible income.",
      //   seo: {
      //     title: "Form 15G & 15H Services",
      //     description:
      //       "Assistance in filing Form 15G and 15H accurately.",
      //   },
      // },
    ],
  },

  /* ================= ROC ================= */
  // {
  //   id: "roc",
  //   category: "Registrar of Companies (ROC)",
  //   description: "Company formation, compliance, and ROC-related services",
  //   services: [
  //     {
  //       id: "private-limited-formation",
  //       title: "Private Limited Company Formation",
  //       shortDescription:
  //         "Complete incorporation services for private limited companies including documentation and ROC approval.",
  //       seo: {
  //         title: "Private Limited Company Registration",
  //         description:
  //           "Start your private limited company with expert assistance.",
  //       },
  //     },
  //     {
  //       id: "public-limited-formation",
  //       title: "Public Limited Company Formation",
  //       shortDescription:
  //         "End-to-end public limited company registration with compliance-focused execution.",
  //       seo: {
  //         title: "Public Limited Company Registration",
  //         description:
  //           "Professional public limited company formation services.",
  //       },
  //     },
  //     {
  //       id: "llp-formation",
  //       title: "LLP Formation",
  //       shortDescription:
  //         "Hassle-free LLP registration services with complete MCA and ROC compliance.",
  //       seo: {
  //         title: "LLP Registration Services",
  //         description:
  //           "Register your LLP smoothly with expert guidance.",
  //       },
  //     },
  //     {
  //       id: "annual-roc-return",
  //       title: "Annual ROC Return",
  //       shortDescription:
  //         "Preparation and filing of annual ROC returns ensuring statutory compliance.",
  //       seo: {
  //         title: "Annual ROC Return Filing",
  //         description:
  //           "Timely and accurate annual ROC return filing services.",
  //       },
  //     },
  //     {
  //       id: "din-application",
  //       title: "DIN Number Application",
  //       shortDescription:
  //         "Assistance in obtaining Director Identification Number (DIN) for company directors.",
  //       seo: {
  //         title: "DIN Application Services",
  //         description:
  //           "Apply for DIN quickly with professional support.",
  //       },
  //     },
  //   ],
  // },

  /* ================= GST ================= */
  {
    id: "gst",
    category: "GST Services",
    description: "Comprehensive GST registration, return filing, and advisory",
    services: [
      {
        id: "gst-registration",
        title: "GST Registration",
        shortDescription:
          "End-to-end GST registration services including eligibility assessment, documentation, and approval support.",

        features: [
          "GST eligibility consultation",
          "Document preparation & filing",
          "GSTIN allotment support",
          "Post-registration guidance",
        ],

        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "Business address proof",
          "Bank account details",
          "Photograph of proprietor/partners",
        ],

        idealFor: [
          "Small & medium businesses",
          "Startups & entrepreneurs",
          "Traders & service providers",
        ],

        seo: {
          title: "GST Registration Services | AB Tax Solution",
          description:
            "Quick and hassle-free GST registration services with expert guidance.",
        },
      }

      // {
      //   id: "gst-return",
      //   title: "GST Return Filing",
      //   shortDescription:
      //     "Monthly and quarterly GST return filing with reconciliation and compliance checks.",
      //   seo: {
      //     title: "GST Return Filing Services",
      //     description:
      //       "Accurate GST return filing for businesses.",
      //   },
      // },
      // {
      //   id: "gst-refund",
      //   title: "GST Refund Application",
      //   shortDescription:
      //     "Assistance in GST refund applications with proper documentation and follow-ups.",
      //   seo: {
      //     title: "GST Refund Services",
      //     description:
      //       "Professional support for GST refund claims.",
      //   },
      // },
    ],
  },
];
