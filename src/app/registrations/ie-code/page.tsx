import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock, Check } from "lucide-react";
import { registrationsData } from "@/data/mockData";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import DocumentTabs from "@/components/DocumentTabs";
import WhyChooseUs from "@/components/WhyChooseUs";

export async function generateMetadata() {
  const registration = registrationsData.find((r) => r.slug === "iec-code");
  if (!registration) return {};
  return {
    title: `Premium Import Export Code (IEC) Registration | Nithya Gokul Associates`,
    description: registration.shortDesc,
  };
}

export default function IECodePage() {
  const registration = registrationsData.find((r) => r.slug === "iec-code");

  if (!registration) {
    return <div>Data not found</div>;
  }

  return (
    <div className="block w-full bg-white">
      {/* 1. Hero + LeadForm */}
      <section className="relative bg-navy text-white pt-[60px] pb-[100px] md:pt-[70px] md:pb-[40px] lg:pt-[90px] lg:pb-[80px] overflow-hidden">
        {/* Subtle radial glow effects and floating particles */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE (60%) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold tracking-widest text-gold uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>DGFT APPROVED REGISTRATION</span>
              </div>

              <h1 className="font-serif text-4xl md:text-[52px] lg:text-[60px] font-bold leading-[1.15] text-white">
                Import Export Code <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Registration (IEC)</span>
              </h1>

              <p className="text-[16px] md:text-[18px] text-slate-300 max-w-2xl leading-[1.8] font-light">
                IEC stands for Import Export Code.
                <br /><br />
                The certificate is issued by the Directorate General of Foreign Trade (DGFT) and is mandatory for businesses involved in importing or exporting goods and services.
              </p>
            </FadeIn>

            {/* Trust Indicators */}
            <StaggerContainer className="grid grid-cols-2 gap-4 pt-4">
              {[
                "DGFT Registration",
                "Lifetime Validity",
                "Global Trade Access",
                "Quick Processing"
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

          {/* RIGHT SIDE (40%) */}
          <SlideUp delay={0.4} className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-b from-gold/30 to-blue/20 blur-2xl opacity-40 rounded-[40px] -z-10" />
            <div className="bg-[rgba(255,255,255,0.92)] backdrop-blur-xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 overflow-hidden relative">

              {/* Form Top Section */}
              <div className="p-8 pb-2 text-center">
                <div className="w-16 h-16 mx-auto bg-blue/10 rounded-full p-2 shadow-sm border border-slate-100 mb-4 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-blue" />
                </div>
                <h3 className="font-serif text-[22px] font-bold text-navy mb-2">Apply For IEC Code</h3>
                <p className="text-sm text-slate-600">Quick registration support from experienced compliance professionals.</p>
              </div>

              {/* LeadForm */}
              <LeadForm
                buttonText="Start IEC Registration"
                isRadio={true}
                lockedService="Import Export Code (IEC)"
                className="!bg-transparent !border-none !shadow-none !pt-2 !pb-8 !px-8 [&_button[type='submit']]:!bg-gradient-to-r [&_button[type='submit']]:!from-gold [&_button[type='submit']]:!to-yellow-500 [&_button[type='submit']]:!text-navy [&_button[type='submit']]:hover:!shadow-[0_10px_20px_rgba(212,175,55,0.4)] [&_button[type='submit']]:hover:!-translate-y-1"
              />
            </div>
          </SlideUp>

        </div>
      </section>

      {/* 2. What Is IEC Code */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <SlideUp className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg shadow-slate-200/50 mb-8 border border-slate-100">
              <ShieldCheck className="w-10 h-10 text-blue" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-bold text-navy leading-tight">
              What is an Import Export Code?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {registration.longDesc}
            </p>
          </SlideUp>
        </div>
      </section>

      {/* 3. Benefits Of IEC */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="Advantages"
            title="Benefits of IEC Registration"
            subtitle="Unlock global trade opportunities and government subsidies."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {registration.benefits.map((benefit, index) => (
              <StaggerItem key={index} className="group">
                <div className="h-full bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:border-gold/30 hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-blue group-hover:text-gold transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed group-hover:text-navy transition-colors">
                    {benefit}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Documents Required */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="Checklist"
            title="Documents Required"
            subtitle="Select your business type to view the specific documents needed for IEC registration."
          />
          <FadeIn className="mt-12 max-w-5xl mx-auto">
            <DocumentTabs />
          </FadeIn>
        </div>
      </section>

      {/* 6. Registration Process */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-navy text-white relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <SlideUp>
            <SectionHeading
              dark
              align="left"
              badge="Workflow"
              title="Registration Process"
              subtitle="A fully digital and hassle-free process from application to issuance."
            />
            <div className="mt-10 space-y-8">
              {registration.process.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white/5 border-2 border-white/20 flex items-center justify-center font-bold text-white group-hover:border-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-300 relative z-10 shadow-sm">
                      {idx + 1}
                    </div>
                    {idx !== registration.process.length - 1 && (
                      <div className="absolute top-12 bottom-[-2rem] left-1/2 -translate-x-1/2 w-0.5 bg-white/20 group-hover:bg-gold/50 transition-colors duration-300" />
                    )}
                  </div>
                  <div className="pt-2 pb-6">
                    <p className="text-[16px] md:text-[17px] text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 max-w-sm backdrop-blur-sm group hover:border-gold/30 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <p className="text-sm font-bold text-white">
                DGFT Processing Time: <br />
                <span className="text-gold text-base tracking-wide">24 - 48 Hours</span>
              </p>
            </div>
          </SlideUp>
          <SlideUp delay={0.3} className="relative h-full min-h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop"
              alt="International Trade Shipping"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm mb-4">
                <ShieldCheck className="w-4 h-4 text-gold" />
                DGFT Trusted Partner
              </div>
              <h3 className="font-serif text-3xl font-bold text-white mb-2">Seamless Global Expansion</h3>
              <p className="text-slate-200 text-sm leading-relaxed max-w-md">Our team handles all DGFT interactions and compliance requirements on your behalf.</p>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6">
        <SectionHeading
          badge="FAQs"
          title="Common Questions Answered"
        />
        <FadeIn delay={0.2} className="max-w-4xl mx-auto">
          <FAQAccordion items={registration.faqs} />
        </FadeIn>
      </section>
    </div>
  );
}
