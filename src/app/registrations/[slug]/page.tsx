import React from "react";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck, Clock, FileCheck, HelpCircle } from "lucide-react";
import { registrationsData } from "@/data/mockData";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all registrations
export async function generateStaticParams() {
  return registrationsData.map((reg) => ({
    slug: reg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const registration = registrationsData.find((r) => r.slug === slug);
  if (!registration) return {};

  return {
    title: `${registration.title} Services`,
    description: registration.shortDesc,
  };
}

export default async function RegistrationPage({ params }: PageProps) {
  const { slug } = await params;
  const registration = registrationsData.find((r) => r.slug === slug);

  if (!registration) {
    notFound();
  }

  return (
    <div className="block w-full">
      {/* Hero */}
      <section className="bg-navy text-white py-[70px] md:py-[90px] lg:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-gold/5" />
        <FadeIn className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-gold" />
            Corporate &amp; Tax Registrations
          </span>
          <h1 className="font-serif text-4xl md:text-[52px] lg:text-[64px] font-bold max-w-3xl leading-[1.1]">
            {registration.title}
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-300 max-w-xl leading-[1.8]">
            {registration.shortDesc}
          </p>
        </FadeIn>
      </section>

      {/* Overview & Benefits */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <SlideUp className="lg:col-span-7 space-y-6">
          <SectionHeading
            align="left"
            badge="Details"
            title="Overview &amp; Guidelines"
          />
          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-slate-500 leading-[1.8]">
            {registration.longDesc}
          </p>

          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
            <h4 className="font-serif text-base font-bold text-navy flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue" />
              Eligibility Criteria:
            </h4>
            <ul className="space-y-2">
              {registration.eligibility.map((crit, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                  <span>{crit}</span>
                </li>
              ))}
            </ul>
          </div>
        </SlideUp>

        <SlideUp delay={0.2} className="lg:col-span-5 bg-light p-8 rounded-2xl border border-slate-100 space-y-4">
          <h3 className="font-serif text-xl font-bold text-navy mb-4">Registration Benefits</h3>
          <ul className="space-y-3">
            {registration.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </SlideUp>
      </section>

      {/* Process list */}
      <section className="bg-light py-[70px] md:py-[90px] lg:py-[120px] border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            badge="Process"
            title="Filing &amp; Certification Steps"
            subtitle="The typical process flow our practitioners coordinate on government portals."
          />
          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {registration.process.map((step, index) => (
              <StaggerItem key={index} className="bg-white border border-slate-100 rounded-xl p-5 flex gap-4 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-gold/10 text-navy font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed self-center">
                  {step}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Required Documents & Timeline */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <SlideUp className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[52px] font-bold text-navy leading-tight">
            Documents Checklist
          </h2>
          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-slate-500 leading-[1.8]">
            Ensure you submit digital copies of these KYC documents and office proofs. Our registration specialists will prepare files and submit them to the registry.
          </p>

          <div className="bg-blue/5 border border-blue/10 p-6 rounded-2xl flex items-center gap-4">
            <Clock className="w-8 h-8 text-blue shrink-0" />
            <div>
              <h4 className="font-serif text-base font-bold text-navy">Expected Timeline</h4>
              <p className="text-xs text-slate-600 mt-1">{registration.timeline}</p>
            </div>
          </div>
        </SlideUp>
        <SlideUp delay={0.2} className="lg:col-span-6 bg-white border border-slate-100 rounded-2xl p-8 space-y-4 shadow-sm">
          {registration.documentsRequired.map((doc, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <span>{doc}</span>
            </div>
          ))}
        </SlideUp>
      </section>

      {/* FAQ */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6 border-t border-slate-100">
        <SectionHeading
          badge="FAQs"
          title="Filing Concerns Answered"
        />
        <FadeIn delay={0.2}>
          <FAQAccordion items={registration.faqs} />
        </FadeIn>
      </section>

      {/* Direct Lead Form */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6">
        <FadeIn>
          <LeadForm title={`Register for ${registration.title}`} source={registration.title} />
        </FadeIn>
      </section>
    </div>
  );
}
