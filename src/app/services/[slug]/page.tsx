import React from "react";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, FileText, ArrowRight, Landmark } from "lucide-react";
import { servicesData } from "@/data/mockData";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import RegistrationTimeline from "@/components/RegistrationTimeline";
import CompanyFormationContent from "@/components/CompanyFormationContent";
import ServiceDarkHero from "@/components/ServiceDarkHero";
import WebDesigningProcess from "@/components/WebDesigningProcess";
import ProcessTimeline from "@/components/ProcessTimeline";
import { PhoneCall, Search, ShieldCheck } from "lucide-react";


interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} Services`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="block w-full">
      {/* Hero */}
      {['company-registration', 'secretarial-consulting', 'business-valuation-insolvency', 'professional-web-designing'].includes(service.slug) ? (
        <ServiceDarkHero service={service} />
      ) : (
        <section className="bg-navy text-white py-[70px] md:py-[90px] lg:py-[120px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-gold/5" />
          <FadeIn className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-gold" />
              Corporate Services &amp; Advisory
            </span>
            <h1 className="font-serif text-4xl md:text-[52px] lg:text-[64px] font-bold max-w-3xl leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-300 max-w-xl leading-[1.8]">
              {service.shortDesc}
            </p>
          </FadeIn>
        </section>
      )}

      {/* Process Timeline */}
      {service.slug === 'company-registration' ? (
        <>
          <RegistrationTimeline />
          <CompanyFormationContent />
        </>
      ) : service.slug === 'professional-web-designing' ? (
        <WebDesigningProcess />
      ) : ['secretarial-consulting', 'business-valuation-insolvency'].includes(service.slug) ? (
        <ProcessTimeline
          badge="Work Flow"
          title="HOW IT WORKS?"
          description="A straightforward approach to analyzing and addressing your corporate compliance needs."
          steps={service.process.map((p, idx) => ({
            num: p.step,
            title: p.title,
            desc: p.description,
            icon: idx === 0 ? <PhoneCall className="w-6 h-6" /> : idx === 1 ? <Search className="w-6 h-6" /> : idx === 2 ? <CheckCircle2 className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />
          }))}
        />
      ) : (
        <section className="bg-light py-[70px] md:py-[90px] lg:py-[120px] border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionHeading
              badge="Work Flow"
              title="Engagement &amp; Filing Process"
              subtitle="How we structure your secretarial audits, company registrations, and legal filings."
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <StaggerItem key={index} className="bg-white p-6 rounded-2xl border border-slate-50 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-navy font-serif font-bold text-base flex items-center justify-center">
                    {step.step}
                  </div>
                  <h4 className="font-serif text-base font-bold text-navy">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}


      {/* FAQ Accordion */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6 border-t border-slate-100">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
        />
        <FadeIn delay={0.2}>
          <FAQAccordion items={service.faqs} />
        </FadeIn>
      </section>
    </div>
  );
}
