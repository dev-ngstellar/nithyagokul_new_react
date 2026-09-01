import React from "react";
import Link from "next/link";
import {
  Leaf, Search, FileText, BarChart3, Globe,
  ArrowRight, Factory, Monitor, HeartPulse, Landmark, Building, Zap,
  ShoppingCart, Truck, Target, Database,
  PlayCircle, BookOpen, Eye, Users2
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata = {
  title: "ESG Reporting Services | Environmental Social Governance | Nithya Gokul Associates",
  description:
    "Expert ESG Reporting services covering Environmental, Social & Governance disclosures. End-to-end ESG strategy, data collection, sustainability reporting, and stakeholder transparency for businesses across all industries.",
};

/* ─── FAQ Data ─── */
const esgFaqs = [
  {
    question: "What is ESG Reporting and why is it mandatory?",
    answer:
      "ESG Reporting is the disclosure of a company's Environmental, Social, and Governance performance data to stakeholders. In India, SEBI mandates Business Responsibility and Sustainability Reporting (BRSR) for the top 1,000 listed companies by market capitalisation. Beyond compliance, it builds investor trust, attracts sustainable capital, and improves long-term business resilience.",
  },
  {
    question: "Which frameworks does Nithya Gokul Associates support?",
    answer:
      "We support all major international and domestic frameworks including GRI (Global Reporting Initiative), BRSR (SEBI), TCFD (Task Force on Climate-related Financial Disclosures), CDP, UN SDGs, and ISO 14001/45001. We tailor the approach to your industry and regulatory obligations.",
  },
  {
    question: "How long does the ESG assessment and reporting process take?",
    answer:
      "A first-time ESG baseline assessment typically takes 4–8 weeks depending on the size of the organisation and data availability. A complete reporting cycle (strategy → data collection → report publication) is usually completed within 3–6 months for mid-to-large enterprises.",
  },
  {
    question: "Is ESG Reporting only for listed companies?",
    answer:
      "No. While SEBI's BRSR mandate currently targets listed companies, unlisted SMEs, private equity-backed firms, and multinational subsidiaries are increasingly required to produce ESG data by investors, banks, and global supply-chain partners. Voluntary ESG reporting also strengthens funding eligibility and brand reputation.",
  },
  {
    question: "What data do we need to provide for ESG Reporting?",
    answer:
      "We work with your existing operational data — energy bills, water consumption records, waste logs, HR data (diversity, training hours, safety incidents), board composition, and governance policies. Our team provides a structured data-collection template to make the process efficient and audit-ready.",
  },
  {
    question: "Can ESG Reporting improve our access to green finance?",
    answer:
      "Absolutely. Banks, DFIs, and institutional investors increasingly use ESG scores to underwrite loans and allocate capital. A robust ESG report with verified data positions your company for green bonds, sustainability-linked loans, and priority consideration in responsible investment funds.",
  },
];

/* ─── ESG Reporting Cards ─── */
const esgReportingCards = [
  {
    icon: FileText,
    title: "ESG Disclosures",
    desc: "Structured disclosure of environmental, social, and governance data aligned with SEBI BRSR, GRI, TCFD, and other applicable frameworks.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    desc: "Define and monitor KPIs across all three ESG pillars — carbon intensity, water usage, gender diversity, board independence, and more.",
  },
  {
    icon: Globe,
    title: "Sustainability Reporting",
    desc: "Publish credible, third-party-verified sustainability reports that communicate your ESG journey, targets, and progress to global stakeholders.",
  },
  {
    icon: Users2,
    title: "Stakeholder Transparency",
    desc: "Build trust with investors, regulators, customers, and employees through clear, consistent, and comparable ESG communication.",
  },
];

/* ─── Industries ─── */
const industries = [
  { icon: Factory,      title: "Manufacturing",         desc: "Carbon footprint, energy efficiency, supply-chain ESG, and worker safety disclosures." },
  { icon: Monitor,      title: "Information Technology", desc: "Data privacy, e-waste, DEI metrics, and responsible AI governance reporting." },
  { icon: HeartPulse,   title: "Healthcare & Pharma",   desc: "Patient safety, ethical sourcing, waste management, and community health impact." },
  { icon: Landmark,     title: "Finance & Banking",     desc: "Climate risk, responsible lending, AML governance, and portfolio ESG integration." },
  { icon: Building,     title: "Real Estate",           desc: "Green buildings, energy certifications, tenant welfare, and biodiversity risk reporting." },
  { icon: Zap,          title: "Energy & Utilities",    desc: "Renewable transition plans, emissions intensity, water stewardship, and Just Transition disclosures." },
  { icon: ShoppingCart, title: "Retail & FMCG",         desc: "Sustainable sourcing, plastic reduction, circular economy targets, and labour standards." },
  { icon: Truck,        title: "Logistics & Supply Chain", desc: "Fleet emissions, last-mile sustainability, supplier ESG assessments, and Scope 3 reporting." },
];

export default function ESGReportingPage() {
  return (
    <div className="block w-full bg-slate-50 font-sans">

      {/* ─── 1. HERO ─── */}
      <section className="relative bg-[#0a192f] pt-[70px] pb-[100px] md:pt-[90px] md:pb-[140px] lg:pt-[140px] lg:pb-[240px] overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">

        {/* Glowing Orbs — site palette */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
          <FadeIn>
            {/* Badge — gold like trademark */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-widest text-gold uppercase mb-8 shadow-2xl">
              <Leaf className="w-3.5 h-3.5" />
              <span>Environmental · Social · Governance</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold text-white tracking-tight leading-[1.1] mb-8 font-serif">
              Build a Future-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
                ESG Strategy.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-12">
              End-to-end ESG assessment, strategy design, data collection, and verified reporting — helping Indian businesses meet regulatory standards and unlock sustainable capital.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-navy font-semibold text-sm hover:bg-gold transition-colors duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Start ESG Assessment
              </Link>
              <Link
                href="#what-is-esg"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Diagonal Cut — same as trademark */}
        <div
          className="absolute -bottom-[2px] left-0 right-0 h-32 bg-slate-50"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
      </section>

      {/* ─── 2. WHAT IS ESG? ─── */}
      <section id="what-is-esg" className="py-[70px] md:py-[100px] lg:py-[140px] bg-slate-50 relative">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <SlideUp className="relative h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden group bg-[#0a192f] flex flex-col items-center justify-center p-12">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue/20 rounded-full blur-[60px]" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold/15 rounded-full blur-[80px]" />

            {/* E · S · G Pillars */}
            <div className="relative z-10 grid grid-cols-3 gap-5 w-full max-w-sm">
              {[
                { letter: "E", label: "Environmental", color: "bg-blue",      icon: Leaf },
                { letter: "S", label: "Social",         color: "bg-gold",      icon: Users2 },
                { letter: "G", label: "Governance",     color: "bg-navy",      icon: Landmark },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.letter} className="flex flex-col items-center gap-3">
                    <div className={`w-20 h-20 rounded-2xl ${p.color} flex items-center justify-center shadow-2xl border border-white/10`}>
                      <span className="text-3xl font-black text-white">{p.letter}</span>
                    </div>
                    <Icon className="w-4 h-4 text-white/50" />
                    <span className="text-[11px] text-white/60 font-medium text-center leading-tight">{p.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-8 left-8 right-8 p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
              <Leaf className="w-7 h-7 text-gold mb-3" />
              <p className="text-white font-serif text-base leading-tight">
                ESG is the new language of sustainable business credibility.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.2} className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-8">
              What is ESG?{" "}
              <br className="hidden lg:block" />
              <span className="text-gold">— An Introduction</span>
            </h2>

            <div className="space-y-6 text-[17px] md:text-[18px] text-slate-600 leading-[1.8] font-light">
              <p>
                <strong className="text-navy font-semibold">ESG</strong> stands for{" "}
                <strong className="text-blue font-semibold">Environmental</strong>,{" "}
                <strong className="text-blue font-semibold">Social</strong>, and{" "}
                <strong className="text-gold font-semibold">Governance</strong> — the three core pillars that measure a company's sustainability and ethical impact beyond traditional financial metrics.
              </p>
              <p>
                <strong className="text-navy font-semibold">Environmental</strong> criteria assess how a business manages its carbon footprint, energy use, water consumption, and biodiversity impact.{" "}
                <strong className="text-navy font-semibold">Social</strong> factors evaluate relationships with employees, communities, and supply chains.{" "}
                <strong className="text-navy font-semibold">Governance</strong> examines leadership ethics, board diversity, and anti-corruption policies.
              </p>
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
                <p className="text-navy font-semibold text-lg">
                  In India, SEBI's BRSR framework mandates ESG disclosures for the top 1,000 listed companies — and global investors increasingly apply ESG screens before committing capital.
                </p>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ─── 3. ESG PROCESS (Horizontal Dark Timeline) ─── */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-[#0a192f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <SlideUp className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">The ESG Process</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A structured, six-phase journey that transforms your business into a credible, data-backed ESG leader.
            </p>
          </SlideUp>

          <SlideUp delay={0.2} className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-4 relative">
              {[
                { icon: Search,     title: "Assessment",      desc: "Baseline materiality assessment to identify the ESG topics most significant to your business and stakeholders." },
                { icon: Target,     title: "Strategy",        desc: "Design a tailored ESG strategy with clear goals, timelines, ownership, and alignment to global frameworks." },
                { icon: Database,   title: "Data Collection", desc: "Structured collection of environmental metrics, HR data, governance documents, and supply-chain information." },
                { icon: PlayCircle, title: "Implementation",  desc: "Embed ESG initiatives into operations — energy audits, policy updates, training programmes, and governance reforms." },
                { icon: BookOpen,   title: "Reporting",       desc: "Draft, verify, and publish a comprehensive ESG/sustainability report aligned with BRSR, GRI, TCFD, or CDP." },
                { icon: Eye,        title: "Monitoring",      desc: "Ongoing KPI tracking, annual improvement cycles, and stakeholder engagement to maintain ESG leadership." },
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex flex-col items-center text-center group">
                    {/* Ghost Number */}
                    <div className="absolute -top-4 -right-2 text-[72px] font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none select-none z-0">
                      0{idx + 1}
                    </div>

                    {/* Icon Node — gold hover like trademark */}
                    <div className="w-[76px] h-[76px] rounded-full bg-[#0a192f] border-2 border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <Icon className="w-7 h-7 text-white/50 group-hover:text-gold transition-colors duration-500" />
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-serif text-base font-bold text-white mb-3">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-[170px] mx-auto">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ─── 4. ESG REPORTING CARDS ─── */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                badge="Disclosures & Transparency"
                title="ESG Reporting"
                subtitle="Communicate your sustainability story with credibility, clarity, and compliance."
              />
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                An ESG report is more than a compliance document — it is your company's public commitment to responsible business. We help you design, write, verify, and publish reports that satisfy regulators, attract investors, and inspire trust across all stakeholders.
              </p>
            </div>

            <div className="lg:col-span-7">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {esgReportingCards.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={idx}>
                      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center mb-5">
                          <Icon className="w-5 h-5 text-blue" />
                        </div>
                        <h4 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. INDUSTRIES ─── */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="Sector Coverage"
            title="Industries We Serve"
            subtitle="ESG requirements vary by sector. We bring deep domain expertise across all major industries."
          />

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index}>
                  <div className="h-full bg-white border border-slate-100 p-7 rounded-[28px] group hover:bg-[#0a192f] transition-colors duration-500 cursor-default shadow-sm">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 shadow-sm flex items-center justify-center mb-5 group-hover:bg-white/10 group-hover:shadow-none transition-all duration-500">
                      <Icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-500" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-navy group-hover:text-white mb-2 transition-colors duration-500">{item.title}</h3>
                    <p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 6. FAQ ─── */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="FAQs"
            title="Common ESG Questions"
          />
          <div className="mt-16 max-w-3xl mx-auto">
            <FAQAccordion items={esgFaqs} />
          </div>
        </div>
      </section>

      {/* ─── 7. CTA STRIP ─── */}
      <section className="py-[60px] bg-[#0a192f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-blue/10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Lead on Sustainability?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Talk to our ESG specialists and get a customised roadmap for your business today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-navy font-semibold text-sm hover:bg-yellow-300 transition-colors duration-300 shadow-[0_0_40px_rgba(254,179,36,0.25)]"
            >
              Get a Free ESG Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
