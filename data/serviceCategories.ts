import { ServiceCategory } from "@/types/serviceTypes";

export const serviceCategories: ServiceCategory[] = [
  /* ================= GST ================= */
  {
    slug: "gst",
    category: "GST Services",
    description: "Comprehensive GST registration, return filing, and advisory",
    services: [
      {
        slug: "gst-registration",
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
          title: "GST Registration Services | Taxvio",
          description:
            "Quick and hassle-free GST registration services with expert guidance.",
        },
      },

      {
        slug: "gst-return",
        title: "GST Return Filing",
        shortDescription:
          "Monthly and quarterly GST return filing with reconciliation and compliance checks.",
        features: [
          "GSTR-1, GSTR-3B filing",
          "Invoice reconciliation",
          "Late fee & interest guidance",
          "Compliance monitoring",
        ],
        documentsRequired: [
          "GSTIN",
          "Sales & purchase invoices",
          "Bank statements",
        ],
        idealFor: [
          "Registered GST businesses",
          "Traders & manufacturers",
          "Service providers",
        ],
        seo: {
          title: "GST Return Filing Services",
          description: "Accurate GST return filing for businesses.",
        },
      },

      {
        slug: "gst-refund",
        title: "GST Refund Application",
        shortDescription:
          "Assistance in GST refund applications with proper documentation and follow-ups.",
        features: [
          "Refund eligibility analysis",
          "Application preparation",
          "Department follow-up",
          "Refund tracking",
        ],
        documentsRequired: [
          "GST returns",
          "Export invoices (if applicable)",
          "Bank account details",
        ],
        idealFor: ["Exporters", "Businesses with excess ITC"],
        seo: {
          title: "GST Refund Services",
          description: "Professional support for GST refund claims.",
        },
      },

      {
        slug: "gst-cancellation",
        title: "GST Cancellation",
        shortDescription:
          "Professional assistance for GST cancellation application with proper documentation and closure compliance.",
        features: [
          "Eligibility check",
          "Application filing",
          "Final return guidance",
          "Cancellation order follow-up",
        ],
        documentsRequired: [
          "GSTIN",
          "Reason for cancellation",
          "Business closure proof (if any)",
        ],
        idealFor: ["Closed businesses", "Non-operational GST holders"],
        seo: {
          title: "GST Cancellation Services",
          description:
            "Apply for GST cancellation with expert support and compliance assistance.",
        },
      },

      {
        slug: "gst-amendment",
        title: "GST Amendment / Update",
        shortDescription:
          "Update GST registration details such as address, business name, and contact details with proper filing support.",
        features: [
          "Core field amendment",
          "Non-core field update",
          "Document upload",
          "Approval tracking",
        ],
        documentsRequired: ["GSTIN", "Updated address proof", "PAN / Aadhaar"],
        idealFor: ["Businesses with changed details"],
        seo: {
          title: "GST Amendment Services",
          description:
            "Make changes in GST registration details with professional support.",
        },
      },

      {
        slug: "gst-search",
        title: "GSTIN Search & Verification",
        shortDescription:
          "Instant GSTIN verification to check business legal name, registration status, taxpayer type and jurisdiction details.",
        features: [
          "GSTIN format validation",
          "Real-time GST status check",
          "Legal & trade name verification",
          "Jurisdiction & registration date details",
          "Fraud prevention support",
        ],
        documentsRequired: ["Valid 15-digit GSTIN number"],
        idealFor: [
          "Businesses verifying vendors",
          "Accountants & tax professionals",
          "Buyers claiming Input Tax Credit",
          "Due diligence checks",
        ],
        seo: {
          title: "GSTIN Search & Verification Tool | Check GST Number Online",
          description:
            "Verify GSTIN online instantly. Check GST registration status, legal name, taxpayer type and jurisdiction details with our GST search tool.",
        },
      },

      {
        slug: "gst-lut",
        title: "GST LUT Filing",
        shortDescription:
          "Filing of Letter of Undertaking (LUT) for exporters to supply goods or services without payment of IGST.",
        features: [
          "Eligibility check",
          "LUT preparation",
          "Online filing",
          "Acknowledgement support",
        ],
        documentsRequired: ["GSTIN", "PAN", "Previous LUT (if any)"],
        idealFor: ["Exporters", "Service exporters"],
        seo: {
          title: "GST LUT Filing Services",
          description: "Professional LUT filing services for GST exporters.",
        },
      },

      {
        slug: "gstr-9",
        title: "GST Annual Return (GSTR-9)",
        shortDescription:
          "Preparation and filing of GST annual return with reconciliation and compliance review.",
        features: [
          "Annual data reconciliation",
          "GSTR-9 filing",
          "Error identification",
          "Compliance verification",
        ],
        documentsRequired: [
          "GST returns",
          "Books of accounts",
          "Sales & purchase data",
        ],
        idealFor: ["All GST registered businesses"],
        seo: {
          title: "GSTR-9 Filing Services",
          description:
            "Accurate GST annual return filing with professional assistance.",
        },
      },

      {
        slug: "gst-notice-reply",
        title: "GST Notice Reply & Compliance",
        shortDescription:
          "Expert assistance in drafting and filing replies to GST notices and departmental queries.",
        features: [
          "Notice analysis",
          "Reply drafting",
          "Document submission",
          "Case follow-up",
        ],
        documentsRequired: [
          "GST notice",
          "GST returns",
          "Supporting documents",
        ],
        idealFor: ["Businesses receiving GST notices"],
        seo: {
          title: "GST Notice Reply Services",
          description: "Professional GST notice reply and compliance services.",
        },
      },

      {
        slug: "gst-audit",
        title: "GST Audit Assistance",
        shortDescription:
          "Complete support for GST audit including reconciliation, documentation, and departmental coordination.",
        features: [
          "Audit applicability check",
          "Data reconciliation",
          "Audit report preparation",
          "Department coordination",
        ],
        documentsRequired: [
          "GST returns",
          "Sales & purchase registers",
          "Books of accounts",
        ],
        idealFor: ["Large businesses", "Entities under GST audit"],
        seo: {
          title: "GST Audit Services",
          description: "Expert GST audit assistance and compliance services.",
        },
      },

      {
        slug: "gst-e-invoicing",
        title: "GST E-Invoicing Setup & Compliance",
        shortDescription:
          "Implementation and compliance support for GST e-invoicing including IRN generation and system setup.",
        features: [
          "E-invoice registration",
          "IRN generation support",
          "System integration",
          "Compliance monitoring",
        ],
        documentsRequired: ["GSTIN", "Accounting software access"],
        idealFor: ["Large businesses", "High turnover entities"],
        seo: {
          title: "GST E-Invoicing Services",
          description:
            "Professional e-invoicing compliance support for GST registered businesses.",
        },
      },
    ],
  },

  /* ================= FSSAI ================= */
  {
    slug: "fssai",
    category: "FSSAI Services",
    description:
      "FSSAI registration, license renewal, modification, annual return filing and food compliance support for restaurants, manufacturers and food businesses across India.",
    services: [
      {
        slug: "fssai-registration",
        title: "FSSAI Registration (Basic / State / Central)",
        shortDescription:
          "Complete assistance in obtaining FSSAI food license including Basic, State and Central registration with documentation and approval support.",
        features: [
          "Eligibility assessment",
          "Basic FSSAI registration",
          "State license filing",
          "Central license filing",
          "Document preparation",
          "Approval tracking",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "Business address proof",
          "Food business details",
          "Product list",
        ],
        idealFor: [
          "Restaurants & cafes",
          "Cloud kitchens",
          "Food manufacturers",
          "Food importers/exporters",
          "Grocery stores",
        ],
        seo: {
          title: "FSSAI Registration Services | Basic, State & Central License",
          description:
            "Apply for FSSAI registration online with expert support. Get Basic, State or Central food license with complete documentation assistance.",
        },
      },

      {
        slug: "fssai-renewal",
        title: "FSSAI License Renewal",
        shortDescription:
          "Timely renewal of FSSAI license to avoid penalties and business interruption.",
        features: [
          "Renewal eligibility check",
          "Document update",
          "Online filing",
          "Validity extension",
        ],
        documentsRequired: [
          "Existing FSSAI license",
          "Updated business details",
        ],
        idealFor: ["Existing food businesses"],
        seo: {
          title: "FSSAI Renewal Services | Renew Food License Online",
          description:
            "Renew your FSSAI food license easily and avoid penalties with professional support.",
        },
      },

      {
        slug: "fssai-modification",
        title: "FSSAI License Modification",
        shortDescription:
          "Update FSSAI license details such as address, product category, or business structure.",
        features: [
          "Core field modification",
          "Non-core field update",
          "Document upload",
          "Approval tracking",
        ],
        documentsRequired: ["Existing FSSAI license", "Updated business proof"],
        idealFor: ["Food businesses with changed details"],
        seo: {
          title: "FSSAI License Modification Services",
          description:
            "Modify or update your FSSAI license details with expert compliance support.",
        },
      },

      {
        slug: "fssai-annual-return",
        title: "FSSAI Annual Return Filing",
        shortDescription:
          "Preparation and filing of FSSAI annual return for manufacturers and importers as per FSSAI regulations.",
        features: [
          "Return preparation",
          "Online filing",
          "Compliance verification",
          "Penalty guidance",
        ],
        documentsRequired: ["FSSAI license", "Production & sales data"],
        idealFor: ["Food manufacturers", "Food importers"],
        seo: {
          title: "FSSAI Annual Return Filing Services",
          description:
            "Professional FSSAI annual return filing services for manufacturers and importers.",
        },
      },

      {
        slug: "fssai-notice-reply",
        title: "FSSAI Notice Reply & Compliance",
        shortDescription:
          "Expert drafting and response filing for FSSAI notices and departmental queries.",
        features: [
          "Notice analysis",
          "Reply drafting",
          "Supporting document submission",
          "Department coordination",
        ],
        documentsRequired: [
          "FSSAI notice",
          "License copy",
          "Supporting records",
        ],
        idealFor: ["Food businesses receiving FSSAI notices"],
        seo: {
          title: "FSSAI Notice Reply Services",
          description:
            "Professional assistance in replying to FSSAI notices and handling compliance matters.",
        },
      },

      {
        slug: "fssai-search",
        title: "FSSAI License Search & Verification",
        shortDescription:
          "Verify FSSAI license number and check food business registration details instantly.",
        features: [
          "License number verification",
          "Business name check",
          "License validity status",
          "Fraud prevention support",
        ],
        documentsRequired: ["FSSAI license number"],
        idealFor: ["Businesses verifying vendors", "Distributors", "Consumers"],
        seo: {
          title: "FSSAI License Search Online",
          description:
            "Verify FSSAI license number online and check registration details instantly.",
        },
      },
    ],
  },

  /* ================= INCOME TAX ================= */
  {
    slug: "income-tax",
    category: "Income Tax",
    description:
      "Complete income tax services for individuals, firms, and corporates",
    services: [
      {
        slug: "pan-card",
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
          title: "PAN Card Services in India | Taxvio",
          description:
            "Apply for new PAN card, correction, reissue, and PAN-related services with expert support.",
        },
      },

      {
        slug: "tan-application",
        title: "TAN Application",
        shortDescription:
          "End-to-end support for TAN application for businesses and professionals liable to deduct or collect tax at source.",
        features: [
          "New TAN application",
          "Correction in existing TAN",
          "TAN allotment tracking",
          "Compliance guidance for TDS/TCS",
        ],
        documentsRequired: [
          "PAN of deductor",
          "Proof of business registration",
          "Address proof",
          "Authorized signatory ID proof",
        ],
        idealFor: [
          "Employers",
          "Businesses deducting TDS",
          "Companies & firms",
        ],
        seo: {
          title: "TAN Application Services | Taxvio",
          description:
            "Professional assistance for TAN registration and compliance in India.",
        },
      },

      {
        slug: "itr-salaried",
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
      },

      {
        slug: "itr-proprietor",
        title: "Income Tax Return – Individual Proprietor",
        shortDescription:
          "ITR filing services for proprietors with business income, including balance sheet and profit & loss preparation.",
        features: [
          "Business income computation",
          "P&L and balance sheet preparation",
          "Tax saving advisory",
          "ITR filing & verification",
        ],
        documentsRequired: [
          "PAN & Aadhaar",
          "Business bank statements",
          "Sales & expense records",
          "Previous ITR (if any)",
        ],
        idealFor: ["Shop owners", "Freelancers", "Small business proprietors"],
        seo: {
          title: "ITR Filing for Proprietors",
          description:
            "Professional income tax return filing for proprietors and small businesses.",
        },
      },

      {
        slug: "itr-firm-llp",
        title: "Income Tax Return – Firm / LLP",
        shortDescription:
          "Comprehensive ITR filing for partnership firms and LLPs ensuring statutory compliance and timely submissions.",
        features: [
          "Firm/LLP income computation",
          "Partner capital & profit sharing",
          "Tax audit coordination",
          "ITR filing & verification",
        ],
        documentsRequired: [
          "PAN of firm/LLP",
          "Partnership/LLP agreement",
          "Financial statements",
          "Bank statements",
        ],
        idealFor: ["Partnership firms", "LLPs", "Professional firms"],
        seo: {
          title: "ITR Filing for Firm & LLP",
          description:
            "Expert income tax return filing for firms and LLPs in India.",
        },
      },

      {
        slug: "itr-trust-company",
        title: "Income Tax Return – Trust / Pvt Ltd / Public Ltd",
        shortDescription:
          "Specialized income tax return filing for trusts and companies with complete compliance and audit coordination.",
        features: [
          "Corporate & trust ITR filing",
          "Compliance with applicable sections",
          "Audit coordination support",
          "Notice handling assistance",
        ],
        documentsRequired: [
          "PAN of entity",
          "Incorporation/Trust deed",
          "Audited financial statements",
          "Bank statements",
        ],
        idealFor: [
          "Private limited companies",
          "Public limited companies",
          "Trusts & NGOs",
        ],
        seo: {
          title: "ITR Filing for Trusts & Companies",
          description:
            "Reliable ITR filing services for trusts and corporate entities.",
        },
      },

      {
        slug: "quarterly-tds",
        title: "Quarterly TDS Return",
        shortDescription:
          "Preparation and filing of quarterly TDS returns with accurate reconciliation and timely compliance.",
        features: [
          "TDS computation",
          "Return filing (24Q, 26Q, 27Q)",
          "Challan reconciliation",
          "TDS certificate guidance",
        ],
        documentsRequired: [
          "TAN",
          "Challan details",
          "Deductee details",
          "Salary/payment records",
        ],
        idealFor: ["Employers", "Businesses", "Companies & firms"],
        seo: {
          title: "Quarterly TDS Return Filing",
          description:
            "Professional TDS return filing services for businesses and employers.",
        },
      },

      {
        slug: "quarterly-tcs",
        title: "Quarterly TCS Return",
        shortDescription:
          "Assistance in quarterly TCS return filing ensuring correct reporting and statutory adherence.",
        features: [
          "TCS computation",
          "Return filing",
          "Challan reconciliation",
          "Compliance support",
        ],
        documentsRequired: [
          "TAN",
          "TCS challan details",
          "Collector & collectee details",
        ],
        idealFor: [
          "Scrap dealers",
          "Liquor traders",
          "Specified goods sellers",
        ],
        seo: {
          title: "Quarterly TCS Return Filing",
          description: "Accurate and timely TCS return filing services.",
        },
      },

      {
        slug: "income-tax-audit",
        title: "Income Tax Audit Compliance Assistance",
        shortDescription:
          "Complete support for income tax audit compliance including documentation, coordination, and reporting.",
        features: [
          "Audit applicability assessment",
          "Document preparation",
          "Audit coordination",
          "Report submission support",
        ],
        documentsRequired: [
          "Books of accounts",
          "Bank statements",
          "Invoices & vouchers",
          "Previous audit reports",
        ],
        idealFor: [
          "Businesses under audit",
          "Professionals",
          "Companies & firms",
        ],
        seo: {
          title: "Income Tax Audit Assistance",
          description:
            "Expert assistance for income tax audit compliance and documentation.",
        },
      },

      {
        slug: "income-tax-scrutiny",
        title: "Income Tax Scrutiny & Financial Assessment",
        shortDescription:
          "Professional representation and support during income tax scrutiny, notices, and financial assessments.",
        features: [
          "Notice analysis",
          "Reply drafting",
          "Online/offline representation",
          "Assessment closure support",
        ],
        documentsRequired: [
          "Scrutiny notice",
          "ITR & computation",
          "Supporting financial documents",
        ],
        idealFor: [
          "Individual taxpayers",
          "Businesses",
          "Companies under assessment",
        ],
        seo: {
          title: "Income Tax Scrutiny Services",
          description:
            "Reliable assistance for income tax scrutiny and assessment proceedings.",
        },
      },

      {
        slug: "12a-application",
        title: "12A Application",
        shortDescription:
          "Registration services under Section 12A for trusts and NGOs to claim income tax exemptions.",
        features: [
          "Eligibility evaluation",
          "Document preparation",
          "Online application filing",
          "Registration follow-up",
        ],
        documentsRequired: [
          "Trust deed",
          "PAN of trust",
          "Activity details",
          "Financial statements",
        ],
        idealFor: ["Charitable trusts", "NGOs", "Non-profit organizations"],
        seo: {
          title: "12A Registration Services",
          description: "Apply for 12A registration with expert guidance.",
        },
      },

      {
        slug: "80g-application",
        title: "80G Application",
        shortDescription:
          "End-to-end assistance for 80G registration enabling donors to claim tax deductions.",
        features: [
          "Eligibility assessment",
          "Application preparation",
          "Online filing",
          "Approval follow-up",
        ],
        documentsRequired: [
          "12A certificate",
          "Trust deed",
          "PAN of trust",
          "Activity & donation details",
        ],
        idealFor: ["Charitable trusts", "NGOs"],
        seo: {
          title: "80G Registration Services",
          description:
            "Professional support for 80G registration for trusts and NGOs.",
        },
      },

      {
        slug: "15g-15h",
        title: "15G & 15H",
        shortDescription:
          "Preparation and submission of Form 15G and 15H to avoid excess TDS deduction on eligible income.",
        features: [
          "Eligibility verification",
          "Form preparation",
          "Submission guidance",
          "Compliance confirmation",
        ],
        documentsRequired: [
          "PAN card",
          "Income proof",
          "Bank interest details",
        ],
        idealFor: ["Senior citizens", "Individuals with low taxable income"],
        seo: {
          title: "Form 15G & 15H Services",
          description: "Assistance in filing Form 15G and 15H accurately.",
        },
      },
    ],
  },

  /* ================= ROC ================= */
  {
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
    ],
  },
];
