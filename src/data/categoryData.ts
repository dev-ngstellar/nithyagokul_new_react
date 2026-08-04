// ─────────────────────────────────────────────────────────────────────────────
// categoryData.ts
// Central data source for all five service category pages.
// Icons are stored as string names; the rendering component resolves them.
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceItem {
  iconName: string;
  name: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhyPoint {
  title: string;
  desc: string;
}

export interface CategoryData {
  slug: string;
  title: string;
  badge: string;
  heroTitleGold: string;
  heroTitleWhite: string;
  heroSubtitle: string;
  description: string;
  longDescription: string;
  iconName: string;
  keyHighlights: string[];
  services: ServiceItem[];
  whyPoints: WhyPoint[];
  process: ProcessStep[];
  faqs: FAQItem[];
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
  };
}

export const categoriesData: CategoryData[] = [
  // ─────────────────────────────────────────────────────────
  // CATEGORY 1: Company Incorporation
  // ─────────────────────────────────────────────────────────
  {
    slug: "company-incorporation",
    title: "Company Incorporation",
    badge: "Business Formation",
    heroTitleGold: "Company",
    heroTitleWhite: "Incorporation",
    heroSubtitle: "Expert-Led Business Formation & Registration Support",
    description: "Start your business with the right legal structure and complete registration support.",
    longDescription:
      "Whether you are a first-time founder or an established enterprise looking to expand, our expert team provides end-to-end company incorporation services. We guide you through entity selection, regulatory filings, and post-incorporation compliance so you can focus on building your business.",
    iconName: "Building2",
    keyHighlights: [
      "MCA Compliant Process",
      "16+ Years Experience",
      "500+ Companies Registered",
      "PAN / TAN / GST Assistance",
    ],
    services: [
      {
        iconName: "Building2",
        name: "Company / LLP / OPC Registration",
        description:
          "Seamless incorporation of Private Limited, LLP, and One Person Companies with complete MCA compliance and end-to-end filing support.",
      },
      {
        iconName: "GitBranch",
        name: "Business Structure Conversion",
        description:
          "Convert your existing entity — Proprietorship, Partnership, or LLP — into a more scalable and compliant corporate structure.",
      },
      {
        iconName: "Rocket",
        name: "Startup India Recognition",
        description:
          "Get your startup recognised under DPIIT's Startup India programme to unlock tax benefits, funding access, and government support.",
      },
      {
        iconName: "Globe",
        name: "IEC Registration",
        description:
          "Obtain your Import Export Code (IEC) to legally engage in international trade and cross-border commercial transactions.",
      },
      {
        iconName: "Ship",
        name: "ICEGATE Registration",
        description:
          "Register on ICEGATE for seamless customs e-filing, import/export declarations, and direct port connectivity.",
      },
    ],
    whyPoints: [
      {
        title: "Single Window Service",
        desc: "We handle everything — from name approval to certificate of incorporation — through a single seamless engagement.",
      },
      {
        title: "Zero Errors, Zero Rejections",
        desc: "Our experienced team ensures all filings are accurate and complete, eliminating costly government rejections.",
      },
      {
        title: "Post-Incorporation Support",
        desc: "We don't stop at registration — we ensure your new entity is fully compliant from day one of operations.",
      },
      {
        title: "Digital & Remote Process",
        desc: "Our fully online process means your company can be registered from anywhere in India, quickly and efficiently.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consultation",
        description: "Understand your business goals and recommend the most suitable entity type and structure.",
        iconName: "PhoneCall",
      },
      {
        step: "02",
        title: "Documentation",
        description: "Collect KYC documents, draft MOA/AOA, and prepare all statutory forms and filings.",
        iconName: "FileText",
      },
      {
        step: "03",
        title: "Government Filing",
        description: "Submit all forms on MCA/government portals and actively track your application in real time.",
        iconName: "Upload",
      },
      {
        step: "04",
        title: "Certificate Delivery",
        description: "Receive your Certificate of Incorporation and begin operations with full regulatory confidence.",
        iconName: "CheckCircle2",
      },
    ],
    faqs: [
      {
        question: "How long does it take to register a Private Limited Company?",
        answer:
          "Typically 7–14 working days from the date of submission of complete documents, subject to government processing times and MCA portal availability.",
      },
      {
        question: "What is the difference between LLP and Private Limited Company?",
        answer:
          "A Private Limited Company offers limited liability with easier equity fundraising and structured governance. An LLP is simpler to manage with fewer compliance requirements — ideal for professional services firms.",
      },
      {
        question: "Can an NRI or foreign national register a company in India?",
        answer:
          "Yes. Foreign nationals and NRIs can be directors and shareholders in an Indian Private Limited Company, subject to FDI guidelines and FEMA compliance.",
      },
      {
        question: "Do I need a physical office address for incorporation?",
        answer:
          "Yes, a registered office address in India is mandatory. We assist in providing guidance on registered address requirements.",
      },
      {
        question: "What documents are required for company registration?",
        answer:
          "PAN, Aadhaar, passport-size photos, address proof of directors and shareholders, and proof of registered office address are typically required.",
      },
    ],
    metadata: {
      title: "Company Incorporation Services | Nithya Gokul Associates",
      description:
        "Expert company incorporation, LLP registration, OPC formation, Startup India recognition, and IEC registration services by Nithya Gokul Associates.",
      ogTitle: "Company Incorporation | Nithya Gokul Associates",
    },
  },

  // ─────────────────────────────────────────────────────────
  // CATEGORY 2: Corporate Compliance
  // ─────────────────────────────────────────────────────────
  {
    slug: "corporate-compliance",
    title: "Corporate Compliance",
    badge: "Statutory Compliance",
    heroTitleGold: "Corporate",
    heroTitleWhite: "Compliance",
    heroSubtitle: "End-to-End Statutory Governance & Compliance Management",
    description: "Stay compliant with statutory requirements through end-to-end corporate governance.",
    longDescription:
      "Corporate compliance is not a one-time task — it is an ongoing responsibility. Our compliance services ensure your company meets every statutory deadline, from ROC filings and board meetings to XBRL submissions and secretarial audits, keeping you safe from penalties and regulatory action.",
    iconName: "FileCheck",
    keyHighlights: [
      "Zero Penalty Track Record",
      "Proactive Deadline Alerts",
      "ICSI Qualified Professionals",
      "Comprehensive Audit Coverage",
    ],
    services: [
      {
        iconName: "FileCheck",
        name: "ROC Annual Compliance",
        description:
          "Complete annual return filings (MGT-7, AOC-4) and event-based MCA filings handled on time, every time — zero late fees.",
      },
      {
        iconName: "BookOpen",
        name: "LLP Annual Compliance",
        description:
          "Form 11 (Annual Return) and Form 8 (Statement of Accounts) filings to keep your LLP in good regulatory standing.",
      },
      {
        iconName: "Users",
        name: "Board Meetings",
        description:
          "Drafting board and general meeting notices, agendas, minutes, and resolutions as per Companies Act requirements.",
      },
      {
        iconName: "UserCheck",
        name: "Director Compliance",
        description:
          "Director KYC (DIR-3 KYC), DIN management, and director appointment or resignation filings handled professionally.",
      },
      {
        iconName: "BarChart3",
        name: "XBRL Filings",
        description:
          "Accurate XBRL financial data tagging and MCA21 submission for listed companies and prescribed classes of companies.",
      },
      {
        iconName: "ClipboardCheck",
        name: "Secretarial Audit",
        description:
          "Comprehensive secretarial audit under Section 204 of the Companies Act, issued by a qualified Company Secretary.",
      },
      {
        iconName: "CalendarCheck",
        name: "Monthly Compliance Retainer",
        description:
          "A dedicated compliance partner for your company — proactive monitoring, filings, and advisory on an ongoing monthly basis.",
      },
    ],
    whyPoints: [
      {
        title: "Proactive Monitoring",
        desc: "We track all your compliance deadlines and alert you well in advance, eliminating last-minute scrambles and penalties.",
      },
      {
        title: "ICSI Qualified Secretaries",
        desc: "All compliance work is handled by registered Fellow Company Secretaries — not paralegals or junior staff.",
      },
      {
        title: "Penalty-Free Track Record",
        desc: "Our clients maintain a clean compliance record with zero late filing penalties under our watch.",
      },
      {
        title: "Technology-Driven",
        desc: "We use compliance management tools to automate reminders, document storage, and status reporting.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Compliance Audit",
        description: "Review your existing compliance status and identify any gaps or pending filings.",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Annual Calendar",
        description: "Prepare a custom compliance calendar with all applicable due dates for your company.",
        iconName: "CalendarCheck",
      },
      {
        step: "03",
        title: "Execution",
        description: "Draft, review, and file all statutory documents on time with government authorities.",
        iconName: "FileCheck",
      },
      {
        step: "04",
        title: "Reporting",
        description: "Provide monthly compliance reports and proactive alerts for upcoming obligations.",
        iconName: "BarChart3",
      },
    ],
    faqs: [
      {
        question: "What is ROC Annual Compliance?",
        answer:
          "Every registered company must file annual returns (MGT-7) and financial statements (AOC-4) with the Registrar of Companies. Failure to do so attracts significant late fees and legal consequences.",
      },
      {
        question: "Is a Secretarial Audit mandatory?",
        answer:
          "Yes, for listed companies and certain classes of unlisted public companies. It is also recommended for large private companies for good corporate governance.",
      },
      {
        question: "What happens if we miss ROC filing deadlines?",
        answer:
          "Late filing attracts penalties of ₹100 per day per document, which can accumulate significantly. Continued non-compliance can result in company strike-off.",
      },
      {
        question: "What is included in a Monthly Compliance Retainer?",
        answer:
          "Our retainer typically covers board meeting documentation, statutory register maintenance, event-based filings, compliance calendar updates, and advisory support.",
      },
      {
        question: "Can you handle compliance for multiple group companies?",
        answer:
          "Yes. We handle compliance for corporate groups and holding structures at competitive group pricing arrangements.",
      },
    ],
    metadata: {
      title: "Corporate Compliance Services | Nithya Gokul Associates",
      description:
        "ROC compliance, LLP filings, board meetings, XBRL, secretarial audit, and compliance retainer services by Nithya Gokul Associates.",
      ogTitle: "Corporate Compliance | Nithya Gokul Associates",
    },
  },

  // ─────────────────────────────────────────────────────────
  // CATEGORY 3: Corporate Advisory
  // ─────────────────────────────────────────────────────────
  {
    slug: "corporate-advisory",
    title: "Corporate Advisory",
    badge: "Legal & Strategic Advisory",
    heroTitleGold: "Corporate",
    heroTitleWhite: "Advisory",
    heroSubtitle: "Strategic Legal Documentation & Business Advisory",
    description: "Legal documentation and strategic advisory for growing businesses.",
    longDescription:
      "Sound legal documentation is the backbone of every successful business relationship. Our corporate advisory practice provides founders, investors, and enterprises with expertly crafted agreements, strategic governance guidance, and investor readiness support to protect your interests at every stage of growth.",
    iconName: "BriefcaseBusiness",
    keyHighlights: [
      "Founder-Friendly Agreements",
      "Investor-Ready Documentation",
      "Due Diligence Specialists",
      "Strategic Governance Advice",
    ],
    services: [
      {
        iconName: "FileText",
        name: "Legal Agreements",
        description:
          "Professionally drafted commercial agreements — NDAs, service agreements, vendor contracts, and employment agreements.",
      },
      {
        iconName: "Handshake",
        name: "Founders Agreement",
        description:
          "Protect co-founder relationships with clear equity splits, defined roles, vesting schedules, and exit clauses from day one.",
      },
      {
        iconName: "Users",
        name: "Shareholders Agreement",
        description:
          "Comprehensive SHA covering governance rights, tag-along, drag-along, pre-emptive rights, and anti-dilution provisions.",
      },
      {
        iconName: "TrendingUp",
        name: "Investor Term Sheet",
        description:
          "Negotiate and draft legally sound term sheets for seed, angel, and venture capital funding rounds.",
      },
      {
        iconName: "Banknote",
        name: "Share Capital Compliance",
        description:
          "Rights issues, bonus shares, ESOPs, and share transfer filings — complete share capital management for growing companies.",
      },
      {
        iconName: "Search",
        name: "Due Diligence",
        description:
          "Comprehensive legal and secretarial due diligence for M&A transactions, investment rounds, and business acquisitions.",
      },
      {
        iconName: "Target",
        name: "Investor Readiness",
        description:
          "Prepare your company for fundraising — cap table clean-up, governance structuring, and investor documentation packs.",
      },
    ],
    whyPoints: [
      {
        title: "Founder-First Approach",
        desc: "We understand startup dynamics and draft agreements that protect founders while remaining investor-friendly.",
      },
      {
        title: "End-to-End Transaction Support",
        desc: "From term sheet negotiation to closing, we provide legal support at every stage of your funding journey.",
      },
      {
        title: "Customised, Not Templates",
        desc: "Every agreement we draft is tailored to your specific business context — never a generic off-the-shelf template.",
      },
      {
        title: "M&A Ready",
        desc: "We prepare your legal house for due diligence, ensuring a clean corporate structure ahead of acquisitions or exits.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description: "Understand your business structure, relationships, and specific legal documentation needs.",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Drafting",
        description: "Our qualified Company Secretaries draft agreements aligned with Companies Act and SEBI regulations.",
        iconName: "FileText",
      },
      {
        step: "03",
        title: "Review & Negotiation",
        description: "Review drafts with you, incorporate feedback, and assist in negotiations with counterparties.",
        iconName: "MessageSquare",
      },
      {
        step: "04",
        title: "Execution & Filing",
        description: "Finalise, execute, and file agreements with appropriate authorities where required.",
        iconName: "CheckCircle2",
      },
    ],
    faqs: [
      {
        question: "Do I need a Founders Agreement even if I trust my co-founder?",
        answer:
          "Absolutely. A Founders Agreement is not about distrust — it is about clarity. It defines equity splits, roles, vesting, and what happens if a founder exits, preventing disputes down the line.",
      },
      {
        question: "What is a Shareholders Agreement and why is it important?",
        answer:
          "A Shareholders Agreement (SHA) governs the relationship between shareholders and the company. It covers voting rights, transfer restrictions, governance provisions, and exit mechanisms — essential for investor-backed companies.",
      },
      {
        question: "When should a startup get investor-ready documentation?",
        answer:
          "Ideally before beginning fundraising conversations. Investors conduct due diligence and clean, well-structured legal documentation significantly accelerates the funding process.",
      },
      {
        question: "What does your Due Diligence service cover?",
        answer:
          "We cover secretarial due diligence — reviewing statutory registers, board resolutions, compliance status, share capital structure, and past filings to identify any red flags before a transaction.",
      },
      {
        question: "Can you assist with ESOP plan structuring?",
        answer:
          "Yes. We help design, structure, and file Employee Stock Option Plans (ESOPs) in compliance with Companies Act provisions and SEBI guidelines.",
      },
    ],
    metadata: {
      title: "Corporate Advisory Services | Nithya Gokul Associates",
      description:
        "Legal agreements, founders agreements, shareholders agreements, investor term sheets, due diligence, and investor readiness by Nithya Gokul Associates.",
      ogTitle: "Corporate Advisory | Nithya Gokul Associates",
    },
  },

  // ─────────────────────────────────────────────────────────
  // CATEGORY 4: Trademark & Governance
  // ─────────────────────────────────────────────────────────
  {
    slug: "trademark-governance",
    title: "Trademark & Governance",
    badge: "IP & Governance",
    heroTitleGold: "Trademark &",
    heroTitleWhite: "Governance",
    heroSubtitle: "Brand Protection & Responsible Corporate Governance",
    description: "Protect your business while ensuring responsible governance.",
    longDescription:
      "Your brand is one of your most valuable assets, and your governance practices define your company's culture. We provide comprehensive trademark registration services alongside modern governance frameworks including POSH compliance, ESG audits, and CSR advisory to help your business operate responsibly and sustainably.",
    iconName: "ShieldCheck",
    keyHighlights: [
      "IP Protection Experts",
      "All 45 Trademark Classes",
      "POSH & ESG Specialists",
      "Corporate Governance Advisory",
    ],
    services: [
      {
        iconName: "ShieldCheck",
        name: "Trademark Registration",
        description:
          "End-to-end trademark registration across all 45 classes — from trademark search and application to registration certificate.",
      },
      {
        iconName: "Heart",
        name: "POSH Compliance",
        description:
          "Internal Complaints Committee (ICC) setup, POSH policy drafting, training programmes, and annual compliance reporting.",
      },
      {
        iconName: "Leaf",
        name: "ESG Audit",
        description:
          "Environmental, Social & Governance (ESG) assessment and audit to benchmark your company's sustainability performance.",
      },
      {
        iconName: "HeartHandshake",
        name: "CSR Advisory",
        description:
          "CSR policy drafting, activity planning, Section 135 compliance, and annual CSR reporting for prescribed companies.",
      },
    ],
    whyPoints: [
      {
        title: "Full Trademark Lifecycle",
        desc: "We handle search, application, examination, objection response, and registration — a complete trademark journey.",
      },
      {
        title: "POSH Act Experts",
        desc: "Our POSH compliance framework ensures your company meets all legal requirements for workplace safety and dignity.",
      },
      {
        title: "ESG-Ready Advisory",
        desc: "We help companies align with modern ESG standards as governance and sustainability become business imperatives.",
      },
      {
        title: "CSR Compliance Management",
        desc: "We design CSR programmes that align with your corporate values while meeting mandatory Section 135 requirements.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Trademark Search",
        description: "Conduct a comprehensive search across the Trademark Registry to assess availability and risk.",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Application Filing",
        description: "Prepare and file your trademark application with the correct class and specification.",
        iconName: "Upload",
      },
      {
        step: "03",
        title: "Examination & Objection",
        description: "Respond to trademark examination reports or third-party oppositions professionally.",
        iconName: "Shield",
      },
      {
        step: "04",
        title: "Registration & Maintenance",
        description: "Receive your registration certificate and maintain your IP with timely renewals.",
        iconName: "CheckCircle2",
      },
    ],
    faqs: [
      {
        question: "How long does trademark registration take in India?",
        answer:
          "The process typically takes 18–24 months from application to registration, though you receive the trademark symbol ™ immediately upon filing.",
      },
      {
        question: "What is the difference between ™ and ® symbols?",
        answer:
          "™ can be used immediately upon trademark application. The ® symbol can only be used after the trademark is officially registered by the Trademark Registry.",
      },
      {
        question: "Is POSH compliance mandatory for all companies?",
        answer:
          "Yes, the POSH Act applies to all organisations with 10 or more employees. Non-compliance can result in penalties and significant reputational damage.",
      },
      {
        question: "Which companies must comply with CSR under Section 135?",
        answer:
          "Companies with net worth ≥ ₹500 crore, or turnover ≥ ₹1000 crore, or net profit ≥ ₹5 crore in any financial year are required to comply with CSR provisions.",
      },
      {
        question: "Can we register both a logo and a brand name as trademarks?",
        answer:
          "Yes. You can register a word mark (name), device mark (logo), or combination mark. We recommend registering both for maximum brand protection.",
      },
    ],
    metadata: {
      title: "Trademark Registration & Governance | Nithya Gokul Associates",
      description:
        "Trademark registration, POSH compliance, ESG audit, and CSR advisory services by Nithya Gokul Associates.",
      ogTitle: "Trademark & Governance | Nithya Gokul Associates",
    },
  },

  // ─────────────────────────────────────────────────────────
  // CATEGORY 5: Litigation & Business Exit
  // ─────────────────────────────────────────────────────────
  {
    slug: "litigation-business-exit",
    title: "Litigation & Business Exit",
    badge: "Litigation & Exit",
    heroTitleGold: "Litigation &",
    heroTitleWhite: "Business Exit",
    heroSubtitle: "NCLT Representation & Structured Business Closure Support",
    description: "Support for restructuring, legal proceedings and company closure.",
    longDescription:
      "Navigating NCLT proceedings and business exit strategies requires specialised expertise and careful legal planning. Our team provides experienced representation before the National Company Law Tribunal and manages the complete company strike-off process to ensure a clean, legally compliant business closure.",
    iconName: "Scale",
    keyHighlights: [
      "NCLT Experienced Practitioners",
      "Clean Exit Strategy",
      "Insolvency Support",
      "Regulatory Risk Mitigation",
    ],
    services: [
      {
        iconName: "Scale",
        name: "NCLT Representation",
        description:
          "Expert representation before the National Company Law Tribunal for insolvency, winding-up petitions, and corporate disputes.",
      },
      {
        iconName: "XCircle",
        name: "Company Strike Off",
        description:
          "Voluntary strike-off (LLP or Company) under the Fast Track Exit (FTE) scheme — a clean, legal business closure process.",
      },
    ],
    whyPoints: [
      {
        title: "Specialist NCLT Practice",
        desc: "We have direct experience with NCLT filings, appearances, and strategic advocacy for corporate matters.",
      },
      {
        title: "Clean Exit Planning",
        desc: "We structure your business exit to minimise liability, protect directors, and ensure full regulatory compliance.",
      },
      {
        title: "Insolvency Advisory",
        desc: "Strategic guidance through the IBC (Insolvency and Bankruptcy Code) process for stressed or distressed companies.",
      },
      {
        title: "Confidential & Efficient",
        desc: "We handle sensitive business closure matters with complete confidentiality and professional efficiency.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Case Assessment",
        description: "Evaluate the legal position, outstanding liabilities, and the most appropriate exit or litigation route.",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Strategy Planning",
        description: "Develop a clear legal strategy and timeline for NCLT representation or strike-off proceedings.",
        iconName: "FileText",
      },
      {
        step: "03",
        title: "Filings & Representation",
        description: "Prepare and file all necessary petitions, applications, and documents with the NCLT or ROC.",
        iconName: "Scale",
      },
      {
        step: "04",
        title: "Closure & Sign-Off",
        description: "Obtain final orders, close statutory accounts, and ensure complete regulatory sign-off.",
        iconName: "CheckCircle2",
      },
    ],
    faqs: [
      {
        question: "What is the NCLT and what cases does it handle?",
        answer:
          "The National Company Law Tribunal (NCLT) is a quasi-judicial body that handles corporate disputes, insolvency proceedings, mergers, amalgamations, and winding-up petitions under the Companies Act and IBC.",
      },
      {
        question: "What is Company Strike Off and when is it used?",
        answer:
          "Company Strike Off (Section 248) allows a dormant or non-operative company to be removed from the Registrar's records. It is used when a company has no assets or liabilities and wishes to close formally.",
      },
      {
        question: "How long does the strike-off process take?",
        answer:
          "Under the Fast Track Exit (FTE) scheme, the process typically takes 3–6 months, subject to regulatory approvals and the absence of pending liabilities.",
      },
      {
        question: "Can directors be personally liable during company winding-up?",
        answer:
          "Directors can face personal liability if found to have engaged in fraudulent or wrongful trading. Proper legal guidance significantly minimises this risk during exit proceedings.",
      },
      {
        question: "What is the difference between voluntary winding-up and strike-off?",
        answer:
          "Strike-off under Section 248 is a simpler administrative process for defunct companies. Voluntary winding-up involves distributing assets, settling liabilities, and is used for operational companies that wish to close.",
      },
    ],
    metadata: {
      title: "Litigation & Business Exit | Nithya Gokul Associates",
      description:
        "NCLT representation, company strike-off, insolvency advisory, and business exit support by Nithya Gokul Associates.",
      ogTitle: "Litigation & Business Exit | Nithya Gokul Associates",
    },
  },

  // ─────────────────────────────────────────────────────────
  // CATEGORY 6: Business Sale & Investment
  // ─────────────────────────────────────────────────────────
  {
    slug: "business-sale-investment",
    title: "Business Sale & Investment",
    badge: "M&A Advisory",
    heroTitleGold: "Business Sale &",
    heroTitleWhite: "Investment",
    heroSubtitle: "Expert-Led M&A Advisory, Deal Structuring & Investment Support",
    description: "Helping entrepreneurs buy, sell, invest and grow businesses with confidence.",
    longDescription:
      "Whether you are looking to exit your business, acquire a target company, or attract strategic investors, our expert team provides end-to-end advisory across every stage of the transaction. We bring together business valuation, due diligence, deal structuring, and documentation expertise to maximise value and minimise risk.",
    iconName: "Handshake",
    keyHighlights: [
      "Registered Business Valuers",
      "End-to-End Deal Support",
      "Confidential Process",
      "SHA & SPA Drafting",
    ],
    services: [
      {
        iconName: "Handshake",
        name: "Business Sale Advisory",
        description:
          "Structured sell-side advisory — from business valuation and information memorandum preparation to buyer identification and deal closure.",
      },
      {
        iconName: "Target",
        name: "Acquisition Advisory",
        description:
          "Buy-side support including target identification, financial and secretarial due diligence, valuation, and negotiation assistance.",
      },
      {
        iconName: "TrendingUp",
        name: "Investment Structuring",
        description:
          "Advising on investment entry structures — equity, convertible notes, or strategic partnerships — to attract growth capital efficiently.",
      },
      {
        iconName: "FileText",
        name: "Transaction Documentation",
        description:
          "Drafting and reviewing Share Purchase Agreements (SPA), Shareholders Agreements (SHA), term sheets, and all ancillary transaction documents.",
      },
      {
        iconName: "Search",
        name: "Due Diligence",
        description:
          "Comprehensive secretarial and legal due diligence to uncover risks, compliance gaps, and liabilities before any transaction.",
      },
      {
        iconName: "Banknote",
        name: "Valuation & Financial Modelling",
        description:
          "IBBI-compliant business valuation reports using DCF, earnings multiples, and comparable transaction analysis for regulatory and commercial purposes.",
      },
    ],
    whyPoints: [
      {
        title: "Registered Business Valuers",
        desc: "Our IBBI-registered valuers provide valuation reports that are accepted by MCA, RBI, SEBI, and income-tax authorities.",
      },
      {
        title: "Confidential & Structured",
        desc: "We manage the entire transaction process with strict confidentiality protocols, ensuring sensitive information is protected at all times.",
      },
      {
        title: "Experienced Negotiators",
        desc: "Our advisors have guided numerous buy-side and sell-side transactions, bringing battle-tested negotiation experience to every deal.",
      },
      {
        title: "End-to-End Coverage",
        desc: "From the first mandate call to final deal closure and post-transaction integration, we stay with you at every step.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Mandate & Scope",
        description: "Understand your objectives — buy, sell, or invest — and define the engagement scope and timelines.",
        iconName: "PhoneCall",
      },
      {
        step: "02",
        title: "Valuation & Positioning",
        description: "Prepare valuation report, information memorandum, and financial model to position the business attractively.",
        iconName: "Banknote",
      },
      {
        step: "03",
        title: "Outreach & Negotiation",
        description: "Identify and approach counterparties, manage confidentiality, and lead structured negotiations toward agreed terms.",
        iconName: "Handshake",
      },
      {
        step: "04",
        title: "Closure & Documentation",
        description: "Execute transaction documents, complete regulatory filings, and close the deal with full legal compliance.",
        iconName: "CheckCircle2",
      },
    ],
    faqs: [
      {
        question: "How is a business valued for sale in India?",
        answer:
          "Business valuations use a combination of methods including discounted cash flow (DCF), earnings multiples (EBITDA), asset-based valuation, and comparable transaction analysis. IBBI-registered valuers issue reports accepted by regulators.",
      },
      {
        question: "How long does a typical M&A transaction take?",
        answer:
          "A typical business sale or acquisition process takes 3 to 9 months depending on deal complexity, due diligence depth, regulatory requirements, and the negotiation pace of the parties.",
      },
      {
        question: "What is a Share Purchase Agreement (SPA)?",
        answer:
          "An SPA is the definitive legal document that records the terms of a business acquisition — purchase price, representations and warranties, conditions precedent, and closing mechanics. It is the cornerstone document of any M&A transaction.",
      },
      {
        question: "Do I need regulatory approval to sell my business?",
        answer:
          "Depending on the structure, certain approvals may be needed — such as RBI approval under FEMA for transactions involving foreign buyers, or CCI clearance for large transactions that meet merger control thresholds.",
      },
      {
        question: "What is secretarial due diligence?",
        answer:
          "Secretarial due diligence reviews the statutory registers, board resolutions, shareholding history, compliance filings, and corporate structure to identify any legal or regulatory risks before a transaction closes.",
      },
    ],
    metadata: {
      title: "Business Sale & Investment Advisory | Nithya Gokul Associates",
      description:
        "M&A advisory, business valuation, due diligence, deal structuring, and transaction documentation services by Nithya Gokul Associates.",
      ogTitle: "Business Sale & Investment | Nithya Gokul Associates",
    },
  },

  // ─────────────────────────────────────────────────────────
  // CATEGORY 7: FEMA & Foreign Investment
  // ─────────────────────────────────────────────────────────
  {
    slug: "fema-foreign-investment",
    title: "FEMA & Foreign Investment",
    badge: "Cross-Border Advisory",
    heroTitleGold: "FEMA &",
    heroTitleWhite: "Foreign Investment",
    heroSubtitle: "Cross-Border Investment Advisory & RBI Compliance Services",
    description: "Cross-border investment advisory and FEMA compliance services.",
    longDescription:
      "India's foreign exchange regulations under FEMA are complex and ever-evolving. Our FEMA practice provides end-to-end advisory for inbound FDI, outbound investments, ECB, compounding of contraventions, and all RBI reporting obligations — ensuring your cross-border transactions are fully compliant and efficiently executed.",
    iconName: "Globe",
    keyHighlights: [
      "FEMA Specialists",
      "RBI Reporting Experts",
      "FDI & ODI Advisory",
      "Compounding Support",
    ],
    services: [
      {
        iconName: "Globe",
        name: "FDI Structuring & Advisory",
        description:
          "Advisory on permissible FDI routes (automatic and government approval), pricing guidelines, sectoral caps, and regulatory conditions for inbound foreign investments.",
      },
      {
        iconName: "FileCheck",
        name: "RBI Reporting & Filings",
        description:
          "Preparation and filing of FC-GPR, FC-TRS, FLA returns, ESOP reporting, and all other RBI/AD Bank compliance filings on time.",
      },
      {
        iconName: "TrendingUp",
        name: "Overseas Direct Investment (ODI)",
        description:
          "Complete advisory for Indian companies and individuals investing abroad — structuring, Form ODI filings, and ongoing compliance.",
      },
      {
        iconName: "FileText",
        name: "FEMA Compounding",
        description:
          "Voluntary regularisation of FEMA contraventions through the RBI compounding process — preparation of compounding applications and representation before the authority.",
      },
      {
        iconName: "Banknote",
        name: "External Commercial Borrowings (ECB)",
        description:
          "Advisory on ECB structuring under the RBI framework, eligibility assessment, end-use monitoring, and mandatory reporting to the AD Bank.",
      },
      {
        iconName: "ShieldCheck",
        name: "NRI Investment Advisory",
        description:
          "Guidance on NRI repatriation, NRO/NRE account investments, immovable property transactions, and inheritance compliance under FEMA.",
      },
    ],
    whyPoints: [
      {
        title: "Deep FEMA Expertise",
        desc: "Our team has handled complex cross-border structures across multiple sectors, industries, and regulatory scenarios.",
      },
      {
        title: "Zero-Penalty Track Record",
        desc: "Our proactive approach to FEMA compliance ensures timely filings and eliminates the risk of compounding or adjudication.",
      },
      {
        title: "RBI Representation",
        desc: "We represent clients before the Reserve Bank of India for compounding applications and approval requests with a strong success record.",
      },
      {
        title: "End-to-End Coverage",
        desc: "From transaction structuring and due diligence to ongoing compliance and reporting, we are your single point of contact for all FEMA matters.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Transaction Review",
        description: "Evaluate the proposed cross-border transaction for FEMA permissibility, applicable sectoral caps, and RBI guidelines.",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Structuring",
        description: "Advise on the optimal investment route, pricing methodology, valuation requirements, and documentation.",
        iconName: "FileText",
      },
      {
        step: "03",
        title: "Documentation",
        description: "Draft investment agreements, board resolutions, valuation certificates, and prepare complete RBI filing packages.",
        iconName: "ClipboardCheck",
      },
      {
        step: "04",
        title: "Filing & Closure",
        description: "Submit all required RBI and AD Bank reports, obtain necessary approvals, and maintain ongoing compliance monitoring.",
        iconName: "CheckCircle2",
      },
    ],
    faqs: [
      {
        question: "What is FEMA and why does it matter for businesses?",
        answer:
          "The Foreign Exchange Management Act (FEMA) regulates all cross-border transactions in India. Non-compliance — such as delayed RBI filings, exceeding sectoral FDI caps, or incorrect pricing — can result in significant penalties and compounding proceedings.",
      },
      {
        question: "What is FEMA compounding?",
        answer:
          "Compounding is a process by which FEMA contraventions are voluntarily regularised by paying a compounding fee to the RBI or Adjudicating Authority. It provides legal closure on past violations and protects the company and its directors.",
      },
      {
        question: "Is FDI allowed in all sectors in India?",
        answer:
          "No. Certain sectors (e.g., lottery, gambling, real estate) are prohibited. Others have caps — for example, 49% in defence, 74% in private banking. Most sectors permit 100% FDI under the automatic route without prior government approval.",
      },
      {
        question: "What is FC-GPR and when must it be filed?",
        answer:
          "FC-GPR (Foreign Currency – Gross Provisional Return) must be filed by an Indian company within 30 days of issuing shares to a foreign investor. Late filing attracts compounding liability.",
      },
      {
        question: "Can an NRI invest in Indian real estate?",
        answer:
          "NRIs can invest in residential and commercial property in India but are restricted from buying agricultural land, plantation property, or farmhouses. Repatriation of proceeds is subject to specific FEMA conditions.",
      },
    ],
    metadata: {
      title: "FEMA & Foreign Investment Advisory | Nithya Gokul Associates",
      description:
        "FDI structuring, RBI reporting, FEMA compounding, ODI advisory, and cross-border investment compliance by Nithya Gokul Associates.",
      ogTitle: "FEMA & Foreign Investment | Nithya Gokul Associates",
    },
  },

  // ─────────────────────────────────────────────────────────
  // CATEGORY 8: Listed Company Services
  // ─────────────────────────────────────────────────────────
  {
    slug: "listed-company-services",
    title: "Listed Company Services",
    badge: "SEBI & Exchange Compliance",
    heroTitleGold: "Listed Company",
    heroTitleWhite: "Services",
    heroSubtitle: "SEBI Compliance, Stock Exchange Filings & Listed Entity Advisory",
    description: "SEBI compliance, stock exchange filings and listed company advisory.",
    longDescription:
      "Listed companies operate under a heightened compliance framework governed by SEBI and the stock exchanges. Our specialised listed company practice provides comprehensive secretarial services — from LODR compliance and insider trading frameworks to secretarial audits and investor grievance management — ensuring your listed entity meets every obligation accurately and on time.",
    iconName: "BarChart3",
    keyHighlights: [
      "SEBI LODR Specialists",
      "BSE & NSE Filing Experts",
      "Secretarial Audit (MR-3)",
      "Insider Trading Frameworks",
    ],
    services: [
      {
        iconName: "BarChart3",
        name: "SEBI LODR Compliance",
        description:
          "Comprehensive compliance under SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 — quarterly filings, annual reports, and event-based disclosures.",
      },
      {
        iconName: "ShieldCheck",
        name: "Insider Trading Compliance (PIT)",
        description:
          "Design and implementation of SEBI (Prohibition of Insider Trading) Regulations framework — UPSI management, trading windows, and designated person monitoring.",
      },
      {
        iconName: "FileCheck",
        name: "Secretarial Audit (MR-3)",
        description:
          "Mandatory secretarial audit under Section 204 of the Companies Act — comprehensive compliance review and issuance of the MR-3 report.",
      },
      {
        iconName: "CalendarCheck",
        name: "Board & Committee Secretarial Services",
        description:
          "Board meeting management, committee secretarial support, drafting board packs, recording minutes, and maintaining statutory registers.",
      },
      {
        iconName: "UserCheck",
        name: "Investor Grievance Management",
        description:
          "SCORES portal management, investor complaint resolution, and coordination with share transfer agents for efficient grievance redressal.",
      },
      {
        iconName: "BookOpen",
        name: "Corporate Actions & Disclosures",
        description:
          "Management of corporate actions — dividends, rights issues, buybacks, bonus shares — and all associated stock exchange intimations and disclosures.",
      },
    ],
    whyPoints: [
      {
        title: "Specialist Listed-Company Practice",
        desc: "We focus exclusively on the unique compliance obligations of SEBI-regulated listed entities — not a generic corporate services approach.",
      },
      {
        title: "Zero-Default Compliance Calendar",
        desc: "We maintain a master compliance calendar for every client ensuring no quarterly, annual, or event-based filing is ever missed.",
      },
      {
        title: "Trusted Secretarial Auditors",
        desc: "Our ICSI-qualified Company Secretaries issue MR-3 reports accepted by auditors, SEBI, and stock exchanges.",
      },
      {
        title: "Proactive Regulatory Monitoring",
        desc: "We track SEBI circulars, exchange notifications, and regulatory changes to keep your compliance framework continuously updated.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Compliance Mapping",
        description: "Map all applicable SEBI and exchange obligations to a customised master compliance calendar for the year.",
        iconName: "ClipboardCheck",
      },
      {
        step: "02",
        title: "Board Governance Setup",
        description: "Structure board committees, implement insider trading policies, and establish governance frameworks.",
        iconName: "Users",
      },
      {
        step: "03",
        title: "Ongoing Filings",
        description: "Prepare and submit all quarterly, annual, and event-based disclosures to stock exchanges and SEBI on time.",
        iconName: "Upload",
      },
      {
        step: "04",
        title: "Audit & Reporting",
        description: "Conduct the annual secretarial audit, issue the MR-3 report, and provide annual compliance health assessment.",
        iconName: "CheckCircle2",
      },
    ],
    faqs: [
      {
        question: "What is SEBI LODR and what does it require?",
        answer:
          "SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 govern continuous obligations of listed companies — including quarterly financial results, shareholding pattern disclosures, related-party transaction approvals, board composition requirements, and corporate governance reports.",
      },
      {
        question: "Is secretarial audit mandatory for all listed companies?",
        answer:
          "Yes. Every company listed on a stock exchange is required to conduct a secretarial audit and annex the MR-3 report with their Annual Report. Unlisted public companies above prescribed thresholds are also required to comply.",
      },
      {
        question: "What is UPSI under the PIT Regulations?",
        answer:
          "Unpublished Price Sensitive Information (UPSI) is any information relating to a listed company that is not publicly available and would materially affect the price of its securities if disclosed. Managing UPSI — who has access and when — is a core PIT compliance obligation.",
      },
      {
        question: "What is the SCORES portal?",
        answer:
          "SCORES (SEBI Complaints Redress System) is SEBI's online platform for investor grievances. Listed companies are required to resolve complaints lodged through SCORES within stipulated timeframes.",
      },
      {
        question: "What are the consequences of LODR non-compliance?",
        answer:
          "Non-compliance with SEBI LODR can attract fines, trading suspensions, debarment of promoters and directors, and adjudication proceedings. Timely and accurate compliance is critical for listed entities.",
      },
    ],
    metadata: {
      title: "Listed Company Services | SEBI Compliance | Nithya Gokul Associates",
      description:
        "SEBI LODR compliance, insider trading framework, secretarial audit, stock exchange filings, and listed company advisory by Nithya Gokul Associates.",
      ogTitle: "Listed Company Services | Nithya Gokul Associates",
    },
  },
];

export const getCategoryBySlug = (slug: string): CategoryData | undefined =>
  categoriesData.find((c) => c.slug === slug);
