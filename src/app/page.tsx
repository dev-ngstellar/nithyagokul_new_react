import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Users, Clock, Award, Landmark, FileCheck, MapPin, MessageSquare } from "lucide-react";
import { servicesData, testimonialsData, generalFaqs, industriesServed } from "@/data/mockData";
import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import InteractiveHero from "@/components/InteractiveHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import AboutTheFirm from "@/components/AboutTheFirm";
import IndustryMarquee from "@/components/IndustryMarquee";
import AssociationsMarquee from "@/components/AssociationsMarquee";

export default function HomePage() {
  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8 text-blue" />,
      title: "100% Legal Safeguards",
      desc: "Every recommendation and filing is double-vetted to eliminate structural compliance risks."
    },
    {
      icon: <Users className="w-8 h-8 text-blue" />,
      title: "Dedicated Specialists",
      desc: "Direct access to fellowship-qualified Company Secretaries and legal advisory directors."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue" />,
      title: "Timely Approvals",
      desc: "Streamlined operational pathways with government portals to assure swift turnaround times."
    },
    {
      icon: <Award className="w-8 h-8 text-blue" />,
      title: "Statutory Excellence",
      desc: "Setting corporate governance benchmarks across board administration and audit mandates."
    }
  ];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "Understand your business structure, capital, and regulatory requirements." },
    { step: "02", title: "Documentation", desc: "Drafting corporate bylaws, board solutions, and compiling paperwork." },
    { step: "03", title: "Registration", desc: "Filing forms on government portals and resolving queries immediately." },
    { step: "04", title: "Compliance Support", desc: "Ongoing monitoring, annual filings, and governance support." }
  ];

  return (
    <div className="block w-full">
      {/* SECTION 1: Luxury Expanding Hover Panels Hero */}
      <InteractiveHero />

      {/* Floating Statistics Panel has been moved to AboutTheFirm */}

      {/* About & Lead Form Section */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Why Choose Us */}
            <SlideUp className="lg:col-span-7 space-y-6 lg:pr-4">
              <div className="space-y-3">
                <div className="w-16 h-1 bg-gold rounded-full" />
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                  Why Industry Leaders Partner With NGA
                </h2>
                <p className="text-[16px] md:text-[17px] lg:text-[18px] text-slate-500 leading-[1.8] max-w-[700px]">
                  We streamline complex legal and secretarial workflows so you can focus on scaling your business with complete compliance confidence.
                </p>
              </div>

              <AssociationsMarquee />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: <Award className="w-5 h-5 text-gold" />, title: "16+ Years Experience", desc: "A decade of legal, corporate structural, and advisory expertise." },
                  { icon: <Users className="w-5 h-5 text-gold" />, title: "500+ Happy Clients", desc: "Trusted by growing startups to established corporations." },
                  { icon: <Shield className="w-5 h-5 text-gold" />, title: "Expert Compliance Team", desc: "Registered fellow ICSI members overseeing filings." },
                  { icon: <Clock className="w-5 h-5 text-gold" />, title: "Fast Turnaround", desc: "Optimized filing routes to ensure rapid government approvals." },
                  { icon: <CheckCircle2 className="w-5 h-5 text-gold" />, title: "Transparent Pricing", desc: "Clear legal fees with zero hidden charges or surprises." },
                  { icon: <FileCheck className="w-5 h-5 text-gold" />, title: "End-to-End Support", desc: "Complete support from incorporation to daily secretarial management." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-gold/30 hover:bg-white transition-all duration-300 flex-col h-full">
                    <div className="flex items-center gap-3 mb-[12px]">
                      {benefit.icon}
                      <h3 className="font-semibold text-navy text-[16px] md:text-[17px] lg:text-[18px]">{benefit.title}</h3>
                    </div>
                    <p className="text-[16px] md:text-[17px] lg:text-[18px] text-slate-500 leading-[1.8] mb-[20px]">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </SlideUp>

            {/* Right Column: Sticky Lead Form */}
            <SlideUp delay={0.2} className="lg:col-span-5 lg:sticky lg:top-28">
              <LeadForm />
            </SlideUp>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          badge="Practice Areas"
          title="Premium Services Tailored For Corporate Growth"
          subtitle="Explore our comprehensive suite of legal and company secretarial support options."
        />
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes float-svg {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          @keyframes rotate-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse-soft {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.05); }
          }
          .animate-float-svg {
            animation: float-svg 4s ease-in-out infinite;
          }
          .animate-rotate-slow {
            animation: rotate-slow 15s linear infinite;
            transform-origin: 50% 50%;
          }
          .animate-pulse-soft {
            animation: pulse-soft 3s ease-in-out infinite;
          }
          .card-gold-gradient {
            background: linear-gradient(135deg, #ffffff 0%, #fefcf8 60%, #fcf6e8 100%);
          }
          .card-blue-gradient {
            background: linear-gradient(135deg, #ffffff 0%, #f7faff 60%, #eef5fc 100%);
          }
        `}} />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Row 1, Card 1: Secretarial Services (Span 7) */}
          <StaggerItem className="lg:col-span-7 relative overflow-hidden group rounded-[24px] bg-navy border border-navy-light/20 p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(11,60,93,0.3)] flex flex-col justify-between min-h-[260px]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex justify-between items-start mb-4">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold border border-white/10 uppercase tracking-wider">Corporate Advisory</span>
              <span className="text-3xl font-serif font-light text-white/20 group-hover:text-white/40 transition-colors">01</span>
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">Secretarial <span className="text-gold">Services</span></h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                Company Law, Corporate Governance, Shareholder Management, XBRL, and Annual filings.
              </p>

              <ul className="text-white/60 text-xs space-y-1.5 mb-6">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold"></div> Board Meetings &amp; Resolutions</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold"></div> Annual Compliance Filing</li>
              </ul>

              <Link href="/services/secretarial-consulting" className="inline-flex items-center gap-2 text-white text-sm font-semibold group/link">
                <span className="group-hover/link:underline underline-offset-4 decoration-gold transition-all">Explore</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover/link:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Very faint background icon */}
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-40 h-40">
                <circle cx="50" cy="50" r="40" fill="#d4af37" />
                <rect x="40" y="30" width="20" height="50" fill="#ffffff" rx="2" />
              </svg>
            </div>
          </StaggerItem>

          {/* Row 1, Card 2: Company Registration (Span 5) */}
          <StaggerItem className="lg:col-span-5 relative overflow-hidden group rounded-[24px] bg-blue border border-blue-light/20 p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)] flex flex-col justify-between min-h-[260px]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex justify-between items-start mb-4">
              <span className="px-3 py-1 rounded-full bg-navy/20 text-white/90 text-xs font-semibold border border-white/10 uppercase tracking-wider">Incorporation</span>
              <span className="text-3xl font-serif font-light text-white/20 group-hover:text-white/40 transition-colors">02</span>
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">Company <br />Registration</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
                Experts in all types of company &amp; Non-Profit incorporation.
              </p>

              <ul className="text-white/70 text-xs space-y-1.5 mb-6">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-white"></div> Fully Online Process</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-white"></div> Quick Turnaround Time</li>
              </ul>

              <Link href="/services/company-registration" className="inline-flex items-center gap-2 text-white text-sm font-semibold group/link">
                <span className="group-hover/link:underline underline-offset-4 decoration-white transition-all">Explore</span>
                <ArrowRight className="w-4 h-4 text-white group-hover/link:translate-x-1 transition-all" />
              </Link>
            </div>
          </StaggerItem>

          {/* Row 2, Card 1: Secretarial Audit (Span 5) */}
          <StaggerItem className="lg:col-span-5 relative overflow-hidden group rounded-[24px] bg-gradient-to-b from-[#ffffff] to-[#f8fafc] border border-slate-200 p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[260px]">
            <div className="absolute right-0 top-0 w-24 h-24 bg-blue/5 rounded-bl-full transition-transform duration-700 group-hover:scale-125" />

            <div className="relative z-10 flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span className="text-3xl font-serif font-light text-slate-200 group-hover:text-blue/30 transition-colors">03</span>
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-navy mb-2 leading-tight group-hover:text-blue transition-colors">Secretarial Audit &amp; <br />Due Diligence</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                Compliance checking and investigative due diligence.
              </p>

              <ul className="text-slate-500 text-xs space-y-1.5 mb-6">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue"></div> Risk Assessment</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue"></div> Regulatory Compliance</li>
              </ul>

              <Link href="/services/secretarial-audit-due-diligence" className="inline-flex items-center gap-2 text-navy text-sm font-bold hover:text-blue transition-colors group/link">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>

          {/* Row 2, Card 2: Business Valuation (Span 7) */}
          <StaggerItem className="lg:col-span-7 relative overflow-hidden group rounded-[24px] bg-white border border-slate-200 p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[260px]">
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-50 to-transparent" />

            <div className="relative z-10 flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <span className="text-3xl font-serif font-light text-slate-200 group-hover:text-gold/40 transition-colors">04</span>
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-navy mb-2 leading-tight group-hover:text-gold transition-colors">Business Valuation <br />&amp; Insolvency</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                Guiding you through complex valuation metrics and insolvency procedures.
              </p>

              <ul className="text-slate-500 text-xs space-y-1.5 mb-6">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold"></div> Certified Professionals</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold"></div> Accurate Metrics &amp; Reporting</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold"></div> End-to-End Resolution Support</li>
              </ul>

              <Link href="/services/business-valuation-insolvency" className="inline-flex items-center gap-2 text-navy text-sm font-bold hover:text-gold transition-colors group/link">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* SECTION 3, 4 & 6 */}
      {/* SECTION 3: About The Firm */}
      <AboutTheFirm />

      {/* SECTION 4: Why Choose Us */}
      <WhyChooseUs />
      {/* SECTION 6: Process Timeline */}
      <section className="bg-slate-50/50 py-[70px] md:py-[90px] lg:py-[120px] border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            badge="How We Work"
            title="Our Seamless Engagement Model"
            subtitle="A step-by-step approach to securing your company compliance and registration timelines."
          />

          <div className="relative mt-16">
            {/* Horizontal Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200">
              <div className="absolute top-0 left-0 h-full bg-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <StaggerItem key={index} className="relative group h-full">
                  <div className="flex flex-col items-center text-center h-full bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] group-hover:-translate-y-2 transition-all duration-500">
                    {/* Step Number Badge */}
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-100 text-slate-400 font-serif font-bold text-lg flex items-center justify-center shrink-0 mb-[12px] group-hover:border-gold group-hover:bg-gold group-hover:text-navy group-hover:scale-110 transition-all duration-500 shadow-sm relative z-20">
                      {step.step}
                    </div>

                    {/* Card Content */}
                    <h3 className="font-serif text-[24px] font-bold text-navy mb-[12px] group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.8] text-slate-500">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>


      {/* SECTION 5: Industries Served */}
      <section className="bg-navy text-white py-[70px] md:py-[90px] lg:py-[120px] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            dark
            badge="Expertise Across Domains"
            title="Industries We Strategically Serve"
            subtitle="We advise businesses across diverse industries, from rapid-scale tech ecosystems to heavy manufacturing."
          />
        </div>

        <div className="mt-8">
          <IndustryMarquee />
        </div>
      </section>
      {/* SECTION 2: Our Services - The Value Proposition */}
      <section className="bg-slate-50/50 py-[70px] md:py-[90px] lg:py-[120px] border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            badge="Testimonials"
            title="Feedback From Our Valued Corporate Partners"
            subtitle="Read what corporate leaders, directors, and start-up founders say about working with us."
          />
          <FadeIn delay={0.2}>
            <TestimonialCarousel testimonials={testimonialsData} />
          </FadeIn>
        </div>
      </section>


      {/* SECTION 9: Contact CTA */}
      {/* <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-navy text-white rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue/10 rounded-full blur-3xl" />
          <div className="space-y-6 relative z-10">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest block">
              Consultation Form
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Solidify Your Corporate Compliance?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Submit your compliance concerns or business registration details. Our qualified practitioners will reach out to organize a discovery consultation session.
            </p>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>Certified Company Secretary Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>Complete confidentiality under statutory compliance rules</span>
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <LeadForm title="Request Callback" />
          </div>
        </FadeIn>
      </section> */}
    </div>
  );
}
