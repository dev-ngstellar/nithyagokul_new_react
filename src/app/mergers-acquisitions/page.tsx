import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Handshake,
  TrendingUp,
  ShieldCheck,
  Building2,
  FileCheck,
  CheckCircle2,
  Users,
  Search,
  Scale,
  Briefcase,
  ArrowRight,
  PieChart,
  Target,
  Clock,
  Check
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Mergers & Acquisitions (M&A) Advisory Services | Nithya Gokul Associates",
  description:
    "End-to-end M&A advisory, sell-side & buy-side representation, IBBI certified business valuations, deal structuring, due diligence, and NCLT merger execution by Nithya Gokul Associates.",
  alternates: {
    canonical: "/mergers-acquisitions",
  },
};

const maPillars = [
  {
    icon: TrendingUp,
    title: "Sell-Side Advisory",
    description:
      "Comprehensive preparation for business sale, exit positioning, confidential information memorandum (CIM) creation, and valuation optimization to achieve peak transaction value.",
  },
  {
    icon: Search,
    title: "Buy-Side Advisory",
    description:
      "Strategic acquisition search, target screening, commercial synergy analysis, valuation modeling, and execution guidance for corporate acquirers and growth investors.",
  },
  {
    icon: PieChart,
    title: "Business Valuation",
    description:
      "IBBI Registered Valuer reports utilizing Discounted Cash Flow (DCF), Relative Valuation, and Net Asset Value (NAV) methods for Companies Act, Income Tax, FEMA, and investor rounds.",
  },
  {
    icon: Target,
    title: "Buyer & Investor Identification",
    description:
      "Targeted outreach connecting sell-side clients with strategic corporate buyers, private equity (PE) funds, venture capital (VC) firms, and institutional investors.",
  },
  {
    icon: Scale,
    title: "Deal Structuring",
    description:
      "Tax-optimized deal architecture covering Share Purchase Agreements (SPA), Asset Sale vs Slump Sale analysis, Joint Ventures (JV), and share swap ratios.",
  },
  {
    icon: FileCheck,
    title: "Due Diligence Support",
    description:
      "Rigorous secretarial, legal, financial, labor law, and tax due diligence audit to detect hidden compliance liabilities and validate transactional representations.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Transaction Support",
    description:
      "Expert representation during SPA, SHA, and Escrow agreement negotiations, closing conditions management, and transactional dispute safeguards.",
  },
  {
    icon: Building2,
    title: "Merger & Strategic Investment Advisory",
    description:
      "Drafting schemes of arrangement, managing MCA and NCLT approval procedures, cross-border FDI/FEMA filings, and post-merger integration oversight.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Strategic Assessment & Valuation",
    desc: "Diagnostic audit of financial health, growth projections, corporate governance readiness, and IBBI valuation benchmarks.",
  },
  {
    step: "02",
    title: "Teaser & Investor Outreach",
    desc: "Preparation of confidential teasers, execution of NDAs, and discreet outreach to targeted buyers and institutional investors.",
  },
  {
    step: "03",
    title: "Due Diligence & Term Sheet",
    desc: "Virtual Data Room (VDR) setup, managing buy/sell-side due diligence audits, and negotiating the binding Letter of Intent (LOI) / Term Sheet.",
  },
  {
    step: "04",
    title: "Definitive Agreements & Closing",
    desc: "Drafting SPA, SHA, slump sale deeds, securing NCLT/MCA regulatory approvals, escrow setup, and transactional fund closing.",
  },
];

const maDeliverables = [
  "IBBI Certified Valuation Reports (DCF / Relative / Asset)",
  "Confidential Information Memorandum (CIM) & Investor Teaser",
  "Secretarial & Legal Due Diligence Reports",
  "Share Purchase Agreement (SPA) & Asset Sale Agreements",
  "Shareholders Agreement (SHA) & Joint Venture Contracts",
  "NCLT Merger Schemes & Statutory MCA Filings",
  "FEMA / RBI Cross-Border Investment Filings (FC-GPR / FC-TRS)",
];

const maFaqs = [
  {
    question: "What is the role of a Practising Company Secretary in M&A transactions?",
    answer:
      "A Practising Company Secretary ensures the deal is legally binding, compliant with the Companies Act 2013, SEBI (LODR), FEMA guidelines, and MCA/NCLT regulations. We manage due diligence, deal structuring, agreement drafting, and statutory filings.",
  },
  {
    question: "Why is an IBBI Registered Valuer report required for M&A?",
    answer:
      "Under Section 247 of the Companies Act 2013, statutory share issuance, mergers, rights issues, and corporate restructuring require a valuation report certified by an IBBI Registered Valuer to ensure regulatory validity and tax compliance.",
  },
  {
    question: "What is the difference between Sell-Side and Buy-Side Advisory?",
    answer:
      "Sell-Side Advisory represents the company owner looking to sell or raise capital to maximize valuation and exit terms. Buy-Side Advisory assists acquirers in finding suitable target companies, evaluating synergies, and conducting due diligence.",
  },
  {
    question: "How do you protect business confidentiality during buyer outreach?",
    answer:
      "We execute strict non-disclosure agreements (NDAs) before revealing company identities or detailed financials, utilizing blind teasers and secure Virtual Data Rooms (VDR).",
  },
  {
    question: "How long does an M&A transaction or merger approval take in India?",
    answer:
      "Direct share acquisitions or slump sales typically complete within 30 to 60 days. Formal court-approved mergers through NCLT generally require 6 to 9 months depending on tribunal schedules.",
  },
];

export default function MergersAcquisitionsPage() {
  return (
    <div className="block w-full bg-white">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative bg-navy text-white pt-[60px] pb-[100px] md:pt-[80px] md:pb-[90px] lg:pt-[110px] lg:pb-[110px] overflow-hidden">
        {/* Background glow graphics */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (60%) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold tracking-widest text-gold uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <Handshake className="w-4 h-4 text-gold" />
                <span>STRATEGIC TRANSACTION ADVISORY</span>
              </div>

              <h1 className="font-serif text-4xl md:text-[52px] lg:text-[60px] font-bold leading-[1.15] text-white">
                Mergers &amp; Acquisitions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                  (M&amp;A) Advisory
                </span>
              </h1>

              <p className="text-[16px] md:text-[18px] text-slate-300 max-w-2xl leading-[1.8] font-light">
                End-to-end transaction advisory, IBBI certified business valuation, buy/sell-side representation, deal structuring, and due diligence support for businesses across India.
              </p>
            </FadeIn>

            {/* Visual Badge */}
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-5 p-4 pr-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] relative group hover:border-gold/50 transition-colors duration-500">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 border border-gold/20">
                  <TrendingUp className="w-9 h-9 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-white leading-tight mb-1">
                    IBBI Registered Valuers &amp; CS Practice
                  </h4>
                  <p className="text-sm text-gold font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> 100% Legally Compliant Transaction Structuring
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Key Trust Badges */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {[
                "Sell-Side Advisory",
                "Buy-Side Advisory",
                "IBBI Business Valuation",
                "Legal Due Diligence",
                "Deal Structuring & SPA",
                "NCLT Merger Filings",
              ].map((point, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{point}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column (40%) LeadForm */}
          <SlideUp delay={0.4} className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-b from-gold/30 to-blue/20 blur-2xl opacity-40 rounded-[40px] -z-10" />
            <div className="bg-[rgba(255,255,255,0.95)] backdrop-blur-xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 overflow-hidden relative">
              <div className="p-8 pb-2 text-center">
                <div className="w-16 h-16 mx-auto bg-blue/10 rounded-full p-2 shadow-sm border border-slate-100 mb-4 flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-blue" />
                </div>
                <h3 className="font-serif text-[22px] font-bold text-navy mb-1">Discuss Your M&amp;A Deal</h3>
                <p className="text-xs text-slate-600">Get confidential deal advisory &amp; valuation support.</p>
              </div>

              <LeadForm
                buttonText="Request M&A Consultation"
                isRadio={true}
                lockedService="Mergers & Acquisitions (M&A)"
                className="!bg-transparent !border-none !shadow-none !pt-2 !pb-8 !px-8 [&_button[type='submit']]:!bg-gradient-to-r [&_button[type='submit']]:!from-gold [&_button[type='submit']]:!to-yellow-500 [&_button[type='submit']]:!text-navy [&_button[type='submit']]:hover:!shadow-[0_10px_20px_rgba(212,175,55,0.4)] [&_button[type='submit']]:hover:!-translate-y-1"
              />
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ─── 2. 8 CORE ADVISORY OFFERINGS ─── */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="Advisory Capabilities"
            title="Comprehensive M&A Services"
            subtitle="Strategic, legal, valuation, and transactional advisory tailored for middle-market enterprises."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {maPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <StaggerItem key={index} className="group">
                  <div className="h-full bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-[0_12px_35px_rgba(212,175,55,0.15)] hover:border-gold/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                        <IconComponent className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-navy group-hover:text-blue transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 3. TRANSACTION PROCESS TIMELINE ─── */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="Execution Framework"
            title="The M&A Deal Lifecycle"
            subtitle="A structured 4-phase transaction methodology to safeguard confidentiality and maximize deal value."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, idx) => (
              <StaggerItem key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm space-y-3 relative">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-navy font-serif font-bold text-base flex items-center justify-center">
                  {step.step}
                </div>
                <h4 className="font-serif text-lg font-bold text-navy">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 4. DELIVERABLES & CHECKLIST ─── */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/10 to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <SlideUp className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-gold" />
              Documented Protection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight">
              M&amp;A Deliverables &amp; Documentation
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Every stage of your transaction is backed by legally enforceable agreements, independent valuation certifications, and regulatory MCA filings.
            </p>
          </SlideUp>

          <SlideUp delay={0.2} className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4 shadow-2xl backdrop-blur-md">
            {maDeliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-100">{item}</span>
              </div>
            ))}
          </SlideUp>
        </div>
      </section>

      {/* ─── 5. FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked M&amp;A Questions"
          subtitle="Key legal, valuation, and procedural concerns answered by our practitioners."
        />
        <FadeIn delay={0.2} className="max-w-4xl mx-auto mt-8">
          <FAQAccordion items={maFaqs} />
        </FadeIn>
      </section>
    </div>
  );
}
