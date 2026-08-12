export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  features: string[];
  process: { step: string; title: string; description: string }[];
  documentsRequired: string[];
  faqs: FAQItem[];
}

export interface RegistrationDetail {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  eligibility: string[];
  documentsRequired: string[];
  process: string[];
  timeline: string;
  faqs: FAQItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "secretarial-consulting",
    title: "Secretarial Consulting",
    shortDesc: "Comprehensive board advisory, corporate governance guidance, and corporate compliance services.",
    longDesc: "Our Secretarial Consulting services help companies navigate the complex maze of corporate laws and governance requirements. From board meetings to regulatory approvals, we act as your dedicated corporate secretarial advisors to ensure seamless operations.",
    benefits: [
      "Ensures 100% compliance with Companies Act, 2013",
      "Reduces legal liability for Directors and Key Managerial Personnel",
      "Improves corporate transparency and investor confidence",
      "Seamless management of complex corporate restructurings"
    ],
    features: [
      "Board meeting facilitation and drafting minutes",
      "Filing of annual returns and financial statements",
      "Advising on corporate governance best practices",
      "Maintenance of statutory registers and records"
    ],
    process: [
      { step: "01", title: "Call Us", description: "Call us confidently , will understand your need" },
      { step: "02", title: "We'll Analyse", description: "We analyse the need and propose the quote" },
      { step: "03", title: "Addressing Needs", description: "We make sure the need is addressed successfully" },
      { step: "04", title: "Ongoing Support", description: "Continuous monitoring and advisory on future compliance needs" }
    ],
    documentsRequired: [
      "Certificate of Incorporation",
      "Memorandum and Articles of Association (MOA & AOA)",
      "PAN & TAN of the Company",
      "Director KYC Documents (PAN, Aadhaar, Passport-size photo)"
    ],
    faqs: [
      { question: "What is corporate secretarial consulting?", answer: "It is the process of advising companies on corporate governance, board procedures, and compliance with the Companies Act and other corporate legislations." },
      { question: "Why is a Company Secretary necessary?", answer: "Under law, certain classes of companies must appoint a qualified Company Secretary. Furthermore, a CS acts as the chief compliance officer to safeguard the board from legal defaults." }
    ]
  },
  {
    slug: "secretarial-audit-due-diligence",
    title: "Secretarial Audit & Due Diligence",
    shortDesc: "Rigorous corporate audits and legal due diligence for acquisitions, fundraising, and IPO readiness.",
    longDesc: "We provide an independent, third-party verification of your company's compliance history. A Secretarial Audit is a tool to detect compliance lapses and safeguard the interests of stakeholders, partners, and institutional investors.",
    benefits: [
      "Minimizes risks of regulatory penalties and prosecution",
      "Essential for raising venture capital, private equity, or bank loans",
      "Enhances the market reputation and credibility of the enterprise",
      "Provides assurance to independent directors regarding compliance"
    ],
    features: [
      "Comprehensive audit under Section 204 of the Companies Act",
      "Legal and regulatory due diligence for mergers & acquisitions",
      "Review of FEMA, SEBI, and local labor law compliance",
      "Detailed Audit Reports (Form MR-3)"
    ],
    process: [
      { step: "01", title: "Scope Definition", description: "Outlining the audit period, relevant laws, and business units to review." },
      { step: "02", title: "Document Request", description: "Gathering corporate records, registers, board packets, and past filings." },
      { step: "03", title: "Audit Verification", description: "Detailed check of physical records against MCA and other regulatory databases." },
      { step: "04", title: "Report & Recommendations", description: "Issuing formal MR-3 report with management feedback and corrective actions." }
    ],
    documentsRequired: [
      "Minutes of Board and General Meetings",
      "Statutory Registers (Members, Directors, Share Transfers)",
      "Filings made with MCA, SEBI, RBI during the audit period",
      "Copies of agreements (Venture Capital, Shareholder Agreements, Lease Deeds)"
    ],
    faqs: [
      { question: "For whom is Secretarial Audit mandatory?", answer: "It is mandatory for every listed company, public companies with paid-up capital of Rs. 50 crore or more, or public companies with turnover of Rs. 250 crore or more." },
      { question: "What is the difference between Financial Audit and Secretarial Audit?", answer: "Financial audit reviews the accounts and financial statements. Secretarial audit reviews compliance with all corporate, securities, and labor laws governing the company's administration." }
    ]
  },
  {
    slug: "company-registration",
    title: "Company Formation",
    shortDesc: "End-to-end incorporation services for Private Limited, One Person Company, and Section 8 entities.",
    longDesc: "Launch your business on a solid legal footing. We handle the entire incorporation process including name availability, drafting corporate bylaws, applying for digital signatures, obtaining PAN/TAN, and securing the Certificate of Incorporation.",
    benefits: [
      "Establishes a separate legal entity with limited liability status",
      "Opens doors to corporate financing and venture capital investment",
      "Improves client trust, enabling corporate bidding and contracts",
      "Perpetual succession allows easy transferability of shares"
    ],
    features: [
      "Name reservation (RUN service)",
      "Digital Signature Certificate (DSC) setup",
      "Drafting MOA & AOA tailored to business activities",
      "PAN, TAN, and EPFO/ESIC initial registrations"
    ],
    process: [
      { step: "01", title: "Name Approval", description: "Reserve your company name and receive professional guidance for selecting the right business identity." },
      { step: "02", title: "Verification", description: "Verification of directors, documents, compliance requirements and eligibility criteria." },
      { step: "03", title: "Registration", description: "Preparation and filing of incorporation documents including MoA and AoA with MCA." },
      { step: "04", title: "Company Launch", description: "Receive your incorporation certificate and begin operations with compliance support." }
    ],
    documentsRequired: [
      "PAN and Aadhaar of all Directors/Shareholders",
      "Proof of identity (Voter ID, Passport, or Driving License)",
      "Proof of address (Bank statement or utility bill not older than 2 months)",
      "Registered office proof (NOC from owner and utility bill)"
    ],
    faqs: [
      { question: "How long does it take to register a Private Limited Company?", answer: "Typically it takes 5 to 7 business days, depending on government processing times and document accuracy." },
      { question: "What is the minimum number of directors required?", answer: "At least two directors are required for a Private Limited Company, one of whom must be an Indian resident." },
      { question: "How long does registration take?", answer: "The entire process usually takes 10 to 14 working days from the date of submission of all required documents to the ROC." },
      { question: "Can NRIs register a company?", answer: "Yes, NRIs and foreign nationals can register a company in India. However, at least one director must be a resident of India." },
      { question: "Do I need an office space?", answer: "Yes, a registered office is mandatory for company incorporation. However, it can be a residential or commercial property, and you only need a NOC from the owner along with a utility bill." },
      { question: "What is an Audit?", answer: "Audit is an independent examination of financial information of an entity, irrespective of its form, nature, and objective, with a view to express an opinion on such financial information." },
      { question: "What are the different types of Audit?", answer: "(1) Audit required under law: The organisations which require audit under law are the following: Companies governed by the Companies Act; Banking companies; other statutory bodies required by their regulators or by specific Act. (2) Voluntary category: Accounts of proprietary entities, partnership firms, Hindu undivided families, etc. In respect of such accounts, there is no basic legal requirement of audit. Many of such enterprises as a matter of internal rules require audit. Some may be required to get their accounts audited on the directives of Government for various purposes like sanction of grants, loans, etc." },
      { question: "What is Corporate Identification Number (CIN)?", answer: "CIN is the number allotted to a company registered in India by the Ministry of Corporate Affairs, Government of India. CIN is a 21-digit number that contains the information such as Status (listed / unlisted), NIC code of business activity, State of registration, Year of registration, Private or Public and the Registration Number in the respective state (for example, U-74110-KA-2008-PTC-046914)." }
    ]
  },
  {
    slug: "business-valuation-insolvency",
    title: "Business Valuation & Insolvency",
    shortDesc: "Registered valuer certifications for regulatory compliance, transactions, and corporate recovery advisory.",
    longDesc: "We provide professional business, share, and asset valuation services for corporate transactions, tax compliance, and regulatory submissions. Additionally, we offer consultation on insolvency procedures, debt restructuring, and voluntary liquidations.",
    benefits: [
      "Accurate valuation reports compliant with IBBI guidelines",
      "Facilitates smooth mergers, acquisitions, and joint ventures",
      "Provides legal compliance for FEMA and Income Tax valuation needs",
      "Clear guidance on legal exits and structured corporate wind-ups"
    ],
    features: [
      "DCF, relative, and asset-based valuation models",
      "Valuation certificates by IBBI Registered Valuers",
      "Voluntary liquidation planning and execution",
      "Advisory on Insolvency and Bankruptcy Code (IBC) provisions"
    ],
    process: [
      { step: "01", title: "Call Us", description: "Call us confidently , will understand your need" },
      { step: "02", title: "We Analyse", description: "We analyse the need and propose the quote" },
      { step: "03", title: "Addressing needs", description: "We make sure the need is addressed successfully" },
      { step: "04", title: "Delivery & Support", description: "We deliver the final report and provide post-valuation support" }
    ],
    documentsRequired: [
      "Audited financial statements for the past 3 to 5 years",
      "Provisional financials for the current year",
      "Financial projections for the next 5 years with assumptions",
      "Company Profile and list of major assets"
    ],
    faqs: [
      { question: "Why is a Registered Valuer report required?", answer: "Under the Companies Act 2013, valuations for issuance of shares, mergers, or purchase of assets must be certified by a Registered Valuer registered with the IBBI." },
      { question: "What is voluntary liquidation?", answer: "It is a process where a solvent company decides to wind up its operations and distribute its assets to stakeholders in an orderly manner under the IBC." }
    ]
  },
  {
    slug: "professional-web-designing",
    title: "Professional Web Designing",
    shortDesc: "Modern, high-performance web development and UX design to establish a premium corporate digital identity.",
    longDesc: "A corporate website is the digital face of your business. We design and build fast, secure, search-engine-optimized websites and portals customized for professional services, financial agencies, and high-end firms.",
    benefits: [
      "Stunning modern layouts that command trust and brand premium",
      "Mobile-first responsive engineering with fast page load speeds",
      "Built-in SEO structures for organic search discoverability",
      "Secure development protecting client data and portfolio details"
    ],
    features: [
      "Custom UI/UX designs featuring dark/light modes",
      "Modern frameworks (Next.js, React, Tailwind CSS)",
      "Interactive lead generation forms and client portals",
      "Speed optimization and static site generation"
    ],
    process: [
      { step: "01", title: "Wireframing", description: "Mapping out the pages, user navigation, and call-to-actions." },
      { step: "02", title: "UI Design", description: "Creating premium visuals, custom typography scales, and interactive previews." },
      { step: "03", title: "Engineering", description: "Coding the application using Next.js, Framer Motion, and Tailwind CSS." },
      { step: "04", title: "Launch & SEO", description: "Deploying the site to fast hosting systems and setting up search console listings." }
    ],
    documentsRequired: [
      "Company logo assets and brand guidelines",
      "Content copy and details of services/practice areas",
      "Team bios and high-resolution professional headshots",
      "Hosting and Domain registrar account access"
    ],
    faqs: [
      { question: "What technology stack do you use?", answer: "We primarily build websites using Next.js, React, TypeScript, Tailwind CSS, and headless content management systems (CMS) for superior speed and flexibility." },
      { question: "Do you provide website maintenance?", answer: "Yes, we offer monthly maintenance packages which include security updates, speed audits, content modifications, and backups." }
    ]
  }
];

export const registrationsData: RegistrationDetail[] = [
  {
    slug: "fssai",
    title: "FSSAI Registration",
    shortDesc: "Food Safety License and Registration for manufacturers, distributors, hotels, and cloud kitchens.",
    longDesc: "FSSAI registration or license is a mandatory legal compliance for all food business operators in India. It guarantees the hygiene and safety of food products, building customer confidence and protecting your business from heavy penalties.",
    benefits: [
      "Legal permit to sell and manufacture food items in India",
      "Builds customer trust and allows use of the FSSAI logo on packaging",
      "Enables onboarding onto e-commerce portals like Swiggy, Zomato, and Amazon",
      "Facilitates easy business expansion and exports"
    ],
    eligibility: [
      "Basic Registration: For petty food businesses with annual turnover under Rs. 12 Lakhs",
      "State License: For manufacturers and processors with annual turnover between Rs. 12 Lakhs and Rs. 20 Crores",
      "Central License: For importers, large-scale manufacturers, or multi-state operators with turnover exceeding Rs. 20 Crores"
    ],
    documentsRequired: [
      "Photo ID and Address proof of the Proprietor/Partners/Directors",
      "Proof of possession of premises (Rent agreement, NOC, or Sale deed)",
      "Food Safety Management System (FSMS) Plan (for licenses)",
      "List of food categories to be manufactured or handled"
    ],
    process: [
      "Selection of the right FSSAI category based on expected business capacity and turnover.",
      "Preparation of details and documentation (FSMS plan, layout blueprints).",
      "Filing the application online on the FoSCoS portal.",
      "Responding to any clarifications or inspections requested by the food safety officer.",
      "Issuance of the FSSAI certificate with the unique 14-digit registration number."
    ],
    timeline: "Basic: 7-10 days | State/Central License: 30-45 days",
    faqs: [
      { question: "Is FSSAI mandatory for home bakers?", answer: "Yes, even small home bakers or home kitchens must obtain at least a Basic FSSAI Registration if they distribute food." },
      { question: "How long is an FSSAI certificate valid?", answer: "It can be applied for a period of 1 to 5 years. Renewal applications must be filed at least 30 days before expiration." }
    ]
  },
  {
    slug: "iec-code",
    title: "IEC Code (Import Export Code)",
    shortDesc: "Mandatory registration with the DGFT to import or export goods and services from India.",
    longDesc: "The Import Export Code (IEC) is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. It is mandatory for any individual or business looking to clear shipments from customs or send international payments.",
    benefits: [
      "Opens access to international markets for trade and distribution",
      "Lifetime validity with zero post-registration compliance requirements",
      "Allows exporters to claim government export schemes and subsidies",
      "Required by customs officials and international shipping agencies"
    ],
    eligibility: [
      "Proprietorships, Partnerships, LLPs, Private Limited Companies, and HUFs",
      "Must have an active bank account in the name of the entity",
      "Active PAN card issued by the Income Tax Department"
    ],
    documentsRequired: [
      "PAN Card of the entity or individual proprietor",
      "Aadhaar card or passport copy of the promoter",
      "Cancelled cheque or bank certificate with pre-printed account name",
      "Address proof of the business (utility bill or rent agreement)"
    ],
    process: [
      "Accessing the DGFT portal and logging in via digital signature or Aadhaar OTP.",
      "Filling out the online IEC application (Form ANF 2A) and uploading files.",
      "Paying the government application fees online.",
      "Automatic processing and instantaneous digital generation of the IEC Certificate."
    ],
    timeline: "1-2 business days",
    faqs: [
      { question: "Is physical import-export code card sent?", answer: "No, DGFT issues a digitally signed e-IEC certificate which can be downloaded online and has identical legal validity." },
      { question: "Does IEC need renewal every year?", answer: "The IEC is valid for lifetime. However, you must update your details on the DGFT portal once every year (between April and June) to keep it active." }
    ]
  },
  {
    slug: "gst-registration",
    title: "GST Registration",
    shortDesc: "Goods & Services Tax registration for compliance, input tax credit, and interstate sales.",
    longDesc: "GST is the single comprehensive indirect tax structure in India. Registering for GST is mandatory upon crossing turnover limits or carrying out interstate trade. It enables you to collect tax from customers and claim Input Tax Credit on your purchases.",
    benefits: [
      "Eliminates the cascading effect of taxation on goods/services",
      "Legally authorized to collect GST from customers and pass on credit",
      "Entitled to claim Input Tax Credit (ITC) on business expenses",
      "Enables seamless interstate sales without regional checkpost delays"
    ],
    eligibility: [
      "Service providers with annual turnover exceeding Rs. 20 Lakhs (Rs. 10 Lakhs in special category states)",
      "Goods suppliers with annual turnover exceeding Rs. 40 Lakhs (Rs. 20 Lakhs in special category states)",
      "Any business selling goods or services interstate (mandatory irrespective of turnover)",
      "E-commerce sellers (selling via Amazon, Flipkart, Shopify, etc.)"
    ],
    documentsRequired: [
      "PAN and Aadhaar card of the applicant",
      "Certificate of Incorporation or Partnership deed",
      "Address proof of the business (Rent deed & Electricity bill)",
      "Bank account details (cancelled cheque or statement)"
    ],
    process: [
      "Drafting and compiling promoter and company details.",
      "Submitting Part A of GST REG-01 to generate a Temporary Reference Number (TRN).",
      "Completing Part B of the form, uploading documentation and address proofs.",
      "Undergoing Aadhaar verification/authentication online.",
      "Verification by the tax officer and generation of the GSTIN certificate (Form GST REG-06)."
    ],
    timeline: "3-5 business days",
    faqs: [
      { question: "What is Input Tax Credit (ITC)?", answer: "ITC is the credit of tax you paid on buying business assets or raw materials, which you can reduce from the tax liability you collect on sales." },
      { question: "Are there penalties for late filing of GST returns?", answer: "Yes, late filing of GSTR-1 or GSTR-3B attracts a late fee per day along with interest on outstanding tax dues." }
    ]
  },
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    shortDesc: "Udyam Registration to unlock bank loan priorities, subsidies, and protection against delayed payments.",
    longDesc: "MSME (Micro, Small & Medium Enterprises) or Udyam Registration is a free government certification. It provides recognition to micro, small, and medium businesses, giving them legal protection and prioritizing them for various central and state assistance programs.",
    benefits: [
      "Protection against delayed payments (mandatory interest if not paid within 45 days)",
      "Collateral-free business loans under Credit Guarantee Scheme (CGTMSE)",
      "Concession on electricity bills and trademark/patent application fees",
      "Priority Sector Lending benefits from major commercial banks"
    ],
    eligibility: [
      "Micro Enterprise: Investment in plant/machinery < Rs. 1 Crore and Turnover < Rs. 5 Crore",
      "Small Enterprise: Investment in plant/machinery < Rs. 10 Crore and Turnover < Rs. 50 Crore",
      "Medium Enterprise: Investment in plant/machinery < Rs. 50 Crore and Turnover < Rs. 250 Crore"
    ],
    documentsRequired: [
      "Aadhaar card of the proprietor, partner, or director",
      "PAN Card of the business entity",
      "GSTIN number of the firm (if applicable)",
      "Bank Account details (IFS code and Account number)"
    ],
    process: [
      "Entering the Aadhaar and PAN details on the government Udyam portal.",
      "Retrieving past investment and turnover details automatically via GSTIN/ITR links.",
      "Providing employment figures and core industrial classification (NIC) codes.",
      "Submitting and instantly generating the Udyam Registration Certificate."
    ],
    timeline: "1-2 days",
    faqs: [
      { question: "Is Udyam registration free?", answer: "Yes, there is no government fee for registering under the Udyam portal." },
      { question: "Do traders qualify for Udyam registration?", answer: "Yes, wholesale and retail traders are eligible to register under MSME to avail credit facilities, but do not receive all benefits reserved for manufacturers." }
    ]
  },
  {
    slug: "startup-registration",
    title: "Startup India Registration",
    shortDesc: "DPIIT recognition to secure income tax exemptions, relaxed bidding norms, and seed funding access.",
    longDesc: "DPIIT recognition under the Startup India initiative is a prestige status designed for innovative startups. It provides critical benefits including access to government grants, fast-track intellectual property processing, and income tax exemptions under Section 80-IAC.",
    benefits: [
      "3-year Income Tax holiday exemption under Section 80-IAC (subject to board approval)",
      "80% rebate on patent filings and 50% rebate on trademark applications",
      "Self-certification for environmental and labor compliance laws for 3-5 years",
      "Easy compliance wind-up (90-day fast-track exit under IBC)"
    ],
    eligibility: [
      "Registered as a Private Limited, LLP, or Partnership firm in India",
      "Incorporated for less than 10 years",
      "Annual turnover must not have exceeded Rs. 100 Crores in any financial year",
      "Business model must be innovative, scalable, or generate new employment"
    ],
    documentsRequired: [
      "Certificate of Incorporation or Partnership deed",
      "Detailed pitch deck or brief write-up highlighting innovation and scalability",
      "Website link, mobile app, or video demonstration of the prototype",
      "List of awards, patents, or incubation letters (if any)"
    ],
    process: [
      "Registering the entity on the Startup India portal.",
      "Creating the profile and filling out the DPIIT recognition application form.",
      "Uploading the product/service description and justification of innovation.",
      "Review by the inter-ministerial board and issuance of the DPIIT recognition certificate."
    ],
    timeline: "7-15 business days",
    faqs: [
      { question: "Does a simple trading firm qualify for Startup India?", answer: "No, the business must demonstrate innovation in product, service, or process. Regular trading or services without technology or innovative processes are usually rejected." },
      { question: "How does tax exemption work for startups?", answer: "Once recognized by DPIIT, the startup must apply to the Inter-Ministerial Board (IMB) separately to obtain tax exemption under Section 80-IAC." }
    ]
  },
  {
    slug: "llp-registration",
    title: "LLP Registration",
    shortDesc: "Limited Liability Partnership setup combining partnership flexibility with limited liability protection.",
    longDesc: "A Limited Liability Partnership (LLP) is an alternative corporate structure that combines the operational flexibility of a partnership with the robust legal security of a private limited company. It is an ideal framework for professional consulting practices, services, and small businesses.",
    benefits: [
      "Limited liability ensures partners are not personally liable for company debts",
      "No mandatory audit requirement if turnover is under Rs. 40 Lakhs and capital is under Rs. 25 Lakhs",
      "Low compliance costs compared to a Private Limited Company",
      "No minimum capital contribution requirement"
    ],
    eligibility: [
      "Minimum of two partners (no maximum limit)",
      "At least one designated partner must be an Indian resident",
      "Registered office premises situated in India"
    ],
    documentsRequired: [
      "PAN and Aadhaar card of all partners",
      "Passport-size photographs of partners",
      "Rent agreement and NOC for registered office address",
      "Utility bill of the office location (not older than 2 months)"
    ],
    process: [
      "Obtaining Digital Signature Certificates (DSC) for all designated partners.",
      "Filing name approval application under Form RUN-LLP.",
      "Filing the main incorporation application (FiLLiP) on the MCA portal.",
      "Drafting and executing the LLP Agreement, and filing it in Form 3 within 30 days of incorporation."
    ],
    timeline: "10-15 business days",
    faqs: [
      { question: "Can a company be a partner in an LLP?", answer: "Yes, a body corporate like a Private Limited Company can become a partner in an LLP through its authorized representative." },
      { question: "What happens if the LLP Agreement is not filed?", answer: "Failing to file the LLP Agreement within 30 days of incorporation invites a heavy daily penalty of Rs. 100 until filed." }
    ]
  },
  {
    slug: "partnership-registration",
    title: "Partnership Registration",
    shortDesc: "Traditional partnership firm registration with local Registrar of Firms (RoF).",
    longDesc: "A Partnership Firm is a popular structure for small traditional businesses run by two or more founders. It is governed by the Indian Partnership Act, 1932. Registering the partnership deed with the Registrar of Firms gives the entity legal status to sue third parties and enforce contracts.",
    benefits: [
      "Quick setup process with minimal government interface",
      "Highly flexible operations based on the mutual Partnership Deed",
      "Easy winding-up procedure without MCA intervention",
      "Fewer statutory annual compliance filings compared to corporate entities"
    ],
    eligibility: [
      "Minimum two individuals (maximum limit of 50 partners)",
      "Partners must be competent to enter into a contract",
      "A clearly drafted Partnership Deed detailing profit sharing, capital, and operations"
    ],
    documentsRequired: [
      "Partnership Deed printed on stamp paper of appropriate value",
      "PAN Card of the Partnership Firm (applied after deed execution)",
      "PAN and Address proof of all partners",
      "Rent agreement or ownership proof of office premises"
    ],
    process: [
      "Drafting the Partnership Deed specifying capital, profit-sharing ratio, and duties.",
      "Executing the deed by signing it in front of witnesses and paying stamp duty.",
      "Applying for a corporate PAN card in the name of the firm.",
      "Filing the registration application with the Registrar of Firms (RoF) of the respective state."
    ],
    timeline: "5-10 business days",
    faqs: [
      { question: "Is registration of a partnership firm mandatory?", answer: "No, under the Indian Partnership Act, registration is optional. However, unregistered firms cannot file lawsuits against third parties to enforce contractual rights." },
      { question: "What is the liability of partners?", answer: "Unlike LLPs, the liability of partners in a traditional partnership firm is unlimited, meaning their personal assets can be seized to pay off firm debts." }
    ]
  },
  {
    slug: "iso",
    title: "ISO Certification",
    shortDesc: "International Organization for Standardization (ISO) certification services to establish global quality, security, and management standards.",
    longDesc: "ISO certification enhances your organization's credibility, operational efficiency, and market reputation. From ISO 9001 (Quality Management) to ISO 27001 (Information Security), our experts guide you through documentation, internal audits, process alignment, and final certification.",
    benefits: [
      "Boosts customer trust and enhances brand credibility globally",
      "Streamlines business processes and reduces operational errors",
      "Pre-requisite for many government tenders and enterprise contracts",
      "Demonstrates commitment to high quality, security, and safety standards"
    ],
    eligibility: [
      "Proprietorships, Partnerships, LLPs, Private Limited & Public Limited entities",
      "Startups, SMEs, and large enterprises across manufacturing and service sectors",
      "Organizations seeking compliance with ISO 9001, ISO 14001, ISO 27001, ISO 45001, etc."
    ],
    documentsRequired: [
      "Company Registration Certificate (GST, COI, or Udyam)",
      "Scope of Business Operations & Organization Structure Chart",
      "Process Flowcharts & Quality Policy documentation",
      "Address proof of registered office and operational premises"
    ],
    process: [
      "Initial Consultation: Identifying the right ISO standard suitable for your business model.",
      "Gap Analysis & Documentation: Reviewing existing workflows and preparing standard operating procedures (SOPs).",
      "Implementation & Internal Audit: Aligning operations to ISO guidelines and conducting internal review audits.",
      "Final Certification Audit: Certification body audit and issuance of the official ISO Certificate."
    ],
    timeline: "3-7 business days",
    faqs: [
      { question: "Which ISO certification is right for my business?", answer: "ISO 9001:2015 (Quality Management System) is ideal for almost all businesses. For IT and software firms, ISO 27001 (Information Security) is recommended. For food businesses, ISO 22000 (Food Safety) is most suitable." },
      { question: "How long is an ISO certificate valid?", answer: "ISO certificates are typically valid for 3 years, subject to annual surveillance audits to ensure ongoing compliance." }
    ]
  },
  {
    slug: "icegate",
    title: "ICEGATE Registration",
    shortDesc: "Official Indian Customs Electronic Data Interchange Gateway (ICEGATE) registration for importers, exporters, and customs brokers.",
    longDesc: "ICEGATE is the national portal of Indian Customs that facilitates electronic filing of Shipping Bills, Bills of Entry, and customs declarations. Registering on ICEGATE is essential for cross-border traders to track customs clearance, e-payment of duties, and smooth port operations.",
    benefits: [
      "Seamless online filing of Bill of Entry & Shipping Bills with Indian Customs",
      "Direct online payment of Customs duties and automated duty drawback processing",
      "Real-time tracking of import/export shipment status and customs clearances",
      "Integration with DGFT, RBI (EDPMS/IDPMS), and port logistics authorities"
    ],
    eligibility: [
      "Importers and Exporters holding a valid IEC (Import Export Code)",
      "Customs Broker Agencies & Logistics Service Providers",
      "Authorized Economic Operators (AEO) and shipping lines"
    ],
    documentsRequired: [
      "Import Export Code (IEC) certificate copy",
      "Class-3 Digital Signature Certificate (DSC) for primary authorized signatory",
      "PAN Card and Aadhaar card of the authorized signatory",
      "Active bank account details linked with AD Code at customs port"
    ],
    process: [
      "Registration Initiated: Creating user profile on the ICEGATE portal using IEC & PAN.",
      "DSC Token Registration: Registering and pairing Class-3 DSC with ICEGATE account.",
      "AD Code & Bank Linking: Submitting Authorized Dealer (AD) code for port registration.",
      "Customs Verification: Verification of credentials by Customs EDI system and account activation."
    ],
    timeline: "2-4 business days",
    faqs: [
      { question: "Why is ICEGATE registration necessary if I already have an IEC?", answer: "While IEC allows you to trade internationally, ICEGATE is the actual portal where electronic customs declarations, duty payments, and export refunds are processed." },
      { question: "Do I need a Digital Signature Certificate (DSC) for ICEGATE?", answer: "Yes, a valid Class-3 Digital Signature Certificate (DSC) registered with the signatory's PAN is mandatory for e-filing on ICEGATE." }
    ]
  },
  {
    slug: "apeda",
    title: "APEDA Registration",
    shortDesc: "Agricultural and Processed Food Products Export Development Authority (APEDA) registration & e-RCMC issuance.",
    longDesc: "APEDA registration is mandatory for businesses engaged in exporting scheduled agricultural, horticultural, and processed food products from India. Obtaining the APEDA Registration-cum-Membership Certificate (RCMC) unlocks export benefits, financial subsidies, and market access worldwide.",
    benefits: [
      "Mandatory legal permit for exporting scheduled agricultural & food items",
      "Access to APEDA export promotion schemes, subsidies, and trade fairs",
      "Builds international buyer trust with verified exporter credentials",
      "Provides quality compliance guidance and market intelligence support"
    ],
    eligibility: [
      "Exporters of fruits, vegetables, meat products, dairy, poultry, cereal products, and processed foods",
      "Merchant exporters, manufacturer exporters, and agricultural producer organizations",
      "Must possess an active Import Export Code (IEC) issued by DGFT"
    ],
    documentsRequired: [
      "Import Export Code (IEC) Certificate issued by DGFT",
      "Bank Certificate signed by Authorized Dealer (AD Bank)",
      "PAN Card of the Proprietorship / Partnership / Company",
      "Canceled Cheque in the name of the business entity"
    ],
    process: [
      "Document Preparation: Compiling IEC certificate, bank details, and promoter credentials.",
      "Online Application: Submitting the e-RCMC application on the APEDA portal.",
      "Fee Payment: Online payment of government membership fees.",
      "RCMC Issuance: Verification by APEDA officials and issuance of the digital APEDA RCMC."
    ],
    timeline: "3-5 business days",
    faqs: [
      { question: "Which products come under APEDA scope?", answer: "APEDA covers fruits, vegetables, meat, poultry, dairy, bakery products, confectionery, honey, jaggery, cocoa, cereals, and processed food items." },
      { question: "How long is the APEDA RCMC certificate valid?", answer: "APEDA RCMC is issued with multi-year validity and can be renewed online by updating export details." }
    ]
  },
  {
    slug: "lei",
    title: "Legal Entity Identifier (LEI)",
    shortDesc: "Unique 20-character global reference code required for financial transactions and RBI regulatory compliance.",
    longDesc: "The Legal Entity Identifier (LEI) is a 20-character global reference code that uniquely identifies distinct legal entities participating in financial transactions. In India, the RBI mandates LEI registration for corporate borrowers with aggregate exposure of ₹5 Crore and above, as well as large cross-border remittances.",
    benefits: [
      "Mandatory RBI compliance for corporate credit exposure & large remittances",
      "Enhances global financial transparency and counterparty credibility",
      "Uniquely identifies your entity in global financial databases and banking networks",
      "Facilitates smooth cross-border trade settlements and corporate borrowing"
    ],
    eligibility: [
      "Private Limited, Public Limited, LLPs, Partnerships & Trusts in India",
      "Entities having total credit exposure (fund-based and non-fund-based) of ₹5 Crore or more",
      "Corporates engaging in large cross-border financial transactions & derivatives"
    ],
    documentsRequired: [
      "Certificate of Incorporation / Partnership Deed / Registration Proof",
      "PAN Card of the entity and authorized signatories",
      "Audited Financial Statements / Latest Annual Return",
      "Board Resolution authorizing LEI registration & signatory declaration"
    ],
    process: [
      "Data Collection: Compiling entity details, parent structure, and LEIL forms.",
      "Application Submission: Filing online application on the LEIL (Legal Entity Identifier India Ltd) portal.",
      "Document Verification: Validation of corporate details against official MCA/Income Tax records.",
      "LEI Code Issuance: Allocation of the unique 20-digit global LEI code."
    ],
    timeline: "2-3 business days",
    faqs: [
      { question: "Is LEI registration mandatory in India?", answer: "Yes, as per RBI guidelines, LEI is mandatory for companies with aggregate credit exposure of ₹5 Crore and above, and for non-individual entities undertaking forex/over-the-counter transactions." },
      { question: "How often does LEI need renewal?", answer: "LEI codes must be renewed annually to ensure entity information in the global database remains accurate and active." }
    ]
  },
  {
    slug: "business-sale-investment",
    title: "Business Sale & Investment",
    shortDesc: "Helping entrepreneurs buy, sell, invest and grow businesses with confidence.",
    longDesc: "We provide end-to-end advisory for business acquisitions, divestments, and investment structuring. Whether you are looking to sell your business, acquire a target, or attract strategic investors, our team guides you through valuation, due diligence, negotiation, and transaction closure.",
    benefits: [
      "Accurate business valuation to maximise deal value",
      "Structured due diligence protecting buyer and seller interests",
      "Expert negotiation support at every stage of the transaction",
      "Comprehensive documentation — SHA, SPA, and related agreements"
    ],
    eligibility: [
      "Business valuation and financial modelling",
      "Buyer / seller identification and matchmaking",
      "Transaction structuring and term sheet negotiation",
      "Post-merger integration advisory"
    ],
    timeline: "Varies depending on transaction complexity",
    process: [
      "Mandate & Scope: Understanding your objectives — buy-side, sell-side, or investment — and defining the engagement scope.",
      "Valuation & Positioning: Preparing an information memorandum, financial model, and business valuation report.",
      "Outreach & Negotiation: Identifying counterparties, managing confidentiality, and leading structured negotiations.",
      "Closure & Documentation: Executing Share Purchase Agreements, completing regulatory filings, and closing the transaction."
    ],
    documentsRequired: [
      "Audited financial statements for the past 3 years",
      "Company incorporation and shareholder documents",
      "Asset and liability schedules",
      "Business plan or investor deck"
    ],
    faqs: [
      { question: "How is a business valued for sale?", answer: "Valuations are typically based on a combination of earnings multiples (EBITDA), discounted cash flow models, and comparable transaction analysis." },
      { question: "How long does a business sale take?", answer: "A typical business sale or acquisition process takes 3 to 9 months depending on deal complexity, due diligence depth, and regulatory requirements." }
    ]
  },
  {
    slug: "fema-foreign-investment",
    title: "FEMA & Foreign Investment",
    shortDesc: "Cross-border investment advisory and FEMA compliance services.",
    longDesc: "Our FEMA practice covers all aspects of cross-border transactions — inbound FDI, outbound investments, ECB, compounding of contraventions, and RBI reporting. We ensure complete compliance with the Foreign Exchange Management Act and associated RBI regulations for corporates, promoters, and NRIs.",
    benefits: [
      "End-to-end FEMA compliance reducing RBI penalty risk",
      "Timely RBI filings and reporting for FDI / ODI transactions",
      "Expert advice on permissible routes, pricing, and sectoral caps",
      "Representation before RBI for compounding and regularisation"
    ],
    eligibility: [
      "FDI structuring — automatic and government approval routes",
      "FC-GPR, FC-TRS, and other RBI reporting filings",
      "Overseas Direct Investment (ODI) advisory",
      "FEMA compounding and regularisation before RBI"
    ],
    timeline: "5-10 business days",
    process: [
      "Transaction Review: Reviewing the cross-border transaction structure for FEMA permissibility and RBI compliance.",
      "Structuring: Advising on optimal entry routes, valuation requirements, and sectoral restrictions.",
      "Documentation: Drafting investment agreements and preparing RBI filing packages.",
      "Filing & Closure: Submitting RBI / AD Bank reports and securing necessary approvals."
    ],
    documentsRequired: [
      "Shareholder agreements and term sheets",
      "Valuation certificates from registered valuers",
      "Board resolutions and shareholder approvals",
      "KYC documents of foreign investor / investee entity"
    ],
    faqs: [
      { question: "What is FEMA compounding?", answer: "Compounding is a process by which FEMA contraventions (such as delayed RBI filings) are voluntarily regularised by paying a compounding fee to the RBI or Adjudicating Authority." },
      { question: "Is FDI allowed in all sectors in India?", answer: "No, certain sectors are prohibited under the FDI policy. Others have caps (e.g., 49% in insurance). Most sectors permit 100% FDI under the automatic route without government approval." }
    ]
  },
  {
    slug: "listed-company-services",
    title: "Listed Company Services",
    shortDesc: "SEBI compliance, stock exchange filings and listed company advisory.",
    longDesc: "We provide comprehensive secretarial and compliance services for companies listed on BSE and NSE. From quarterly disclosures and insider trading compliance to board governance and SEBI regulation adherence, our listed-company practice ensures your obligations are met accurately and on time.",
    benefits: [
      "Zero-default compliance calendar for all SEBI / exchange obligations",
      "Robust insider trading compliance framework and UPSI management",
      "Expert board secretarial support for listed-entity governance",
      "Timely handling of investor grievances and SCORES portal responses"
    ],
    eligibility: [
      "SEBI LODR compliance — quarterly and annual filings",
      "Insider trading framework (SEBI PIT Regulations)",
      "Secretarial audit under Section 204 (Form MR-3)",
      "Stock exchange intimations and corporate action filings"
    ],
    timeline: "Ongoing support / quarterly filings",
    process: [
      "Compliance Mapping: Mapping all applicable SEBI / exchange obligations to a master compliance calendar.",
      "Board Governance: Structuring board committees, drafting board packs, and maintaining statutory registers.",
      "Regulatory Filings: Preparing and submitting all quarterly, annual, and event-based disclosures on time.",
      "Audit & Reporting: Conducting the mandatory secretarial audit and issuing the MR-3 report."
    ],
    documentsRequired: [
      "Certificate of Incorporation and listing agreement",
      "Board and committee composition details",
      "Previous secretarial audit reports",
      "Shareholding pattern and promoter declarations"
    ],
    faqs: [
      { question: "What is SEBI LODR?", answer: "SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 govern the continuous obligations of listed companies — from financial disclosures to corporate governance and related-party transactions." },
      { question: "Is secretarial audit mandatory for all listed companies?", answer: "Yes, every listed company and certain unlisted public companies are required to conduct a secretarial audit and annex the MR-3 report with their Annual Report." }
    ]
  },
  {
    slug: "private-limited-registration",
    title: "Private Limited Registration",
    shortDesc: "Launch a Private Limited company with complete credibility, limited liability, and scale.",
    longDesc: "A Private Limited Company is the gold standard of business structures in India. It offers limited liability protection, separates ownership from management, and has the credibility needed to secure equity funding from venture capital firms, making it ideal for growth-focused startups.",
    benefits: [
      "Separate legal entity status with high institutional credibility",
      "Limited liability protects personal assets of shareholders",
      "Ability to issue ESOPs to attract and retain top talent",
      "Easy transferability of ownership via share certificates"
    ],
    eligibility: [
      "Minimum of two shareholders and two directors (can be the same people)",
      "At least one director must be an Indian resident",
      "No minimum paid-up capital requirement"
    ],
    documentsRequired: [
      "PAN Card of all Directors and Shareholders",
      "Address proof of directors (Bank statement, phone bill, or electricity bill)",
      "Proof of identity (Voter ID, Passport, or Driving License)",
      "Registered office proof (NOC from landlord, Rent agreement, and current utility bill)"
    ],
    process: [
      "Procuring Digital Signature Certificates (DSC) for directors.",
      "Filing name reservation request through MCA's SPICe+ Part A.",
      "Drafting the Memorandum and Articles of Association (MOA & AOA).",
      "Filing SPICe+ Part B along with AGILE-PRO-S (for GST, EPFO, ESIC, and bank account opening).",
      "Obtaining the Certificate of Incorporation (COI), DIN, PAN, and TAN."
    ],
    timeline: "7-10 business days",
    faqs: [
      { question: "Can a foreigner be a director in a Private Limited company?", answer: "Yes, foreign nationals can be directors and shareholders, provided at least one director on the board is a resident of India." },
      { question: "What are the key annual compliance requirements?", answer: "A Private Limited company must file annual returns (MGT-7), financial statements (AOC-4), hold annual general meetings (AGM), and maintain statutory audit records." }
    ]
  }
];

export const generalFaqs: FAQItem[] = [
  {
    question: "What services does Nithya Gokul Associates provide?",
    answer: "We offer professional services in Company Secretarial consulting, compliance audits, business registration, trademark & IP filings, business valuation, and boutique web design solutions."
  },
  {
    question: "How do I book a consultation with your experts?",
    answer: "You can book a consultation directly by clicking our 'Request Consultation' button, filling out the contact form, or calling us at our official hotline +91 97109 09727."
  },
  {
    question: "Where is your office located?",
    answer: "Our main corporate office is located in Chennai, Tamil Nadu, and we service clients across multiple cities globally."
  },
  {
    question: "What is your average timeline for company registration?",
    answer: "Most company registrations (such as Private Limited or LLP) are completed within 7 to 10 working days, subject to MCA portal performance and prompt document submission."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Nithya Gokul",
    role: "Founder & Managing Partner",
    bio: "A fellow member of the Institute of Company Secretaries of India (ICSI) with over 10 years of experience in corporate governance, joint ventures, secretarial audits, and business restructurings.",
    image: "/team/founder.svg"
  },
  {
    name: "Gokul Prasad",
    role: "Co-Founder & Corporate Consultant",
    bio: "Specializes in business valuation, corporate insolvency matters, FEMA regulations, and strategic advisory for scale-up startups and SMEs.",
    image: "/team/partner.svg"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    name: "Raja Sidharthan",
    role: "Founder & CEO",
    company: "Thoht Delata OPC Pvt Ltd",
    quote: "Very knowledgeable CS team in town. Team works with us well in advance of the deadlines for all the filings. It's a breeze working with their team.",
    rating: 5
  },
  {
    name: "D Manivannan",
    role: "Founder & CEO",
    company: "Shasta Auto Tech LLP",
    quote: "CS R. Nithya Gokul is always providing an excellent guidance on the company setup with her deep knowledge and experience on the various industries.",
    rating: 5
  },
  {
    name: "CA M Mohan",
    role: "FCA",
    company: "Erode",
    quote: "Working with CS. Nithya Gokul for more than 6 years and find always productive in following up and support.",
    rating: 5
  }
];

export const openPositions = [
  {
    id: "fresh-graduates",
    title: "Fresh Graduates",
    department: "Trainee / Entry Level",
    location: "Erode, India, Tamilnadu",
    type: "Full Time",
    experience: "Freshers or Less than 1 year",
    description: "We are looking for motivated fresh graduates who are eager to learn and grow in the field of corporate governance and secretarial compliance.",
    requirements: [
      "Effective Communicator",
      "Good Drafting Skills (English)",
      "Good hands-on using Computer & Microsoft Office Software",
      "Quick Learner",
      "Understanding of Secretarial Works"
    ],
    skills: [
      "Effective Communicator",
      "Good Drafting Skills (English)",
      "Computer & MS Office",
      "Quick Learner",
      "Understanding Secretarial Works"
    ]
  },
  {
    id: "secretarial-assistant",
    title: "Secretarial Assistant",
    department: "Secretarial & Compliance",
    location: "Erode, India, Tamilnadu",
    type: "Full Time",
    experience: "2 -5 Years",
    description: "Seeking a dedicated Secretarial Assistant to support our compliance team with documentation, filing, and managing statutory records.",
    requirements: [
      "Experience in Company formation",
      "Good Drafting skills",
      "Good interpersonal skills",
      "Must have hands on experience in all Secretarial Areas",
      "Strong exposure in client handling",
      "Strong in MCA/eFilings"
    ],
    skills: [
      "Company Formation",
      "Drafting Skills",
      "Interpersonal Skills",
      "Secretarial Areas",
      "Client Handling",
      "MCA/eFilings"
    ]
  }
];

export const industriesServed = [
  "Information Technology & SaaS",
  "Food Processing & QSRs",
  "Real Estate & Infrastructure",
  "Healthcare & Pharmaceuticals",
  "Manufacturing & Logistics",
  "E-Commerce & Retail Partnerships",
  "Education & EdTech",
  "Financial Services & Wealth Advisory"
];

export const trademarkData = {
  classes: [
    { classNum: "Class 9", desc: "Software, Electronics, Computers" },
    { classNum: "Class 25", desc: "Clothing, Footwear, Headgear" },
    { classNum: "Class 35", desc: "Advertising, Business Management, E-Commerce" },
    { classNum: "Class 41", desc: "Education, Entertainment, Training" },
    { classNum: "Class 42", desc: "Scientific & Technological Services" },
    { classNum: "Class 30", desc: "Coffee, Tea, Bakery, Confectionery" },
  ],
  whyRegister: [
    { title: "Exclusive Rights", desc: "Gain exclusive nationwide right to use the mark." },
    { title: "Legal Protection", desc: "Deter unauthorized use and claim statutory damages." },
    { title: "Intangible Asset", desc: "Builds business valuation and brand equity." },
    { title: "Trust & Credibility", desc: "Assures customers of your brand's authenticity." },
  ],
  faqs: [
    { question: "What is the difference between ™ and ®?", answer: "The ™ symbol is used when a trademark application is pending, claiming common law rights. The ® symbol can only be used after the trademark is officially registered by the Trademark Registry." },
    { question: "How long is a trademark valid?", answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely for successive 10-year periods." },
    { question: "Can I trademark a logo and a name together?", answer: "Yes, you can file a composite trademark for a logo that includes a name. However, for the strongest protection, filing separate applications for the word mark (name) and device mark (logo) is recommended." },
    { question: "How long does the registration process take?", answer: "Typically, if there are no objections or oppositions, the process takes 6 to 12 months. However, the ™ symbol can be used immediately upon filing the application." },
  ]
};

