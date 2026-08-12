import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock, FileCheck, Check, Leaf } from "lucide-react";
import { registrationsData } from "@/data/mockData";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export async function generateMetadata() {
  const registration = registrationsData.find((r) => r.slug === "apeda");
  if (!registration) return {};
  return {
    title: `APEDA Registration Services | Nithya Gokul Associates`,
    description: registration.shortDesc,
  };
}

export default function APEDAPage() {
  const registration = registrationsData.find((r) => r.slug === "apeda");

  if (!registration) {
    return <div>Data not found</div>;
  }

  return (
    <div className="block w-full bg-white">
      {/* 1. Hero + LeadForm */}
      <section className="relative bg-navy text-white pt-[60px] pb-[100px] md:pt-[70px] md:pb-[40px] lg:pt-[90px] lg:pb-[80px] overflow-hidden">
        {/* Subtle radial glow effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE (60%) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold tracking-widest text-gold uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <Leaf className="w-4 h-4 text-gold" />
                <span>AGRICULTURAL EXPORT AUTHORITY</span>
              </div>

              <h1 className="font-serif text-4xl md:text-[52px] lg:text-[60px] font-bold leading-[1.15] text-white">
                APEDA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Registration Services</span>
              </h1>

              <p className="text-[16px] md:text-[18px] text-slate-300 max-w-2xl leading-[1.8] font-light">
                {registration.longDesc}
              </p>
            </FadeIn>

            {/* Visual Badge */}
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-5 p-4 pr-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] relative group hover:border-gold/50 transition-colors duration-500">
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 border border-gold/20">
                  <Leaf className="w-9 h-9 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-white leading-tight mb-1">
                    APEDA e-RCMC Certification
                  </h4>
                  <p className="text-sm text-gold font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Ministry of Commerce &amp; Industry Support
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {[
                "e-RCMC Certificate",
                "Agricultural Exporters",
                "Processed Food Products",
                "Export Subsidy Access",
                "DGFT & AD Code Linking",
                "Fast Documentation"
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
              <div className="p-8 pb-2 text-center">
                <div className="w-16 h-16 mx-auto bg-blue/10 rounded-full p-2 shadow-sm border border-slate-100 mb-4 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-blue" />
                </div>
                <h3 className="font-serif text-[22px] font-bold text-navy mb-2">Apply For APEDA Registration</h3>
                <p className="text-sm text-slate-600">Get your e-RCMC for exporting agricultural items.</p>
              </div>

              <LeadForm
                buttonText="Start APEDA Registration"
                isRadio={true}
                lockedService="APEDA Registration"
                className="!bg-transparent !border-none !shadow-none !pt-2 !pb-8 !px-8 [&_button[type='submit']]:!bg-gradient-to-r [&_button[type='submit']]:!from-gold [&_button[type='submit']]:!to-yellow-500 [&_button[type='submit']]:!text-navy [&_button[type='submit']]:hover:!shadow-[0_10px_20px_rgba(212,175,55,0.4)] [&_button[type='submit']]:hover:!-translate-y-1"
              />
            </div>
          </SlideUp>

        </div>
      </section>

      {/* 2. Eligibility & Criteria */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-slate-50 relative">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideUp className="space-y-6">
            <SectionHeading
              align="left"
              badge="Eligibility"
              title="Who Needs APEDA Registration?"
              subtitle="Mandatory for exporters of scheduled agricultural and processed food products from India."
            />
            <div className="space-y-4">
              {registration.eligibility.map((crit, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                  <h4 className="font-serif text-lg font-bold text-navy group-hover:text-blue transition-colors">
                    {crit}
                  </h4>
                </div>
              ))}
            </div>
          </SlideUp>

          <SlideUp delay={0.2} className="relative h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
            <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src="/hero-banner/apeda-export.png"
              alt="APEDA Export Promotion"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-navy">
                  Unlock government export subsidies, international trade fairs, and global buyer recognition.
                </p>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 3. Benefits Of APEDA */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="Advantages"
            title="Benefits of APEDA Registration"
            subtitle="Promote your agri-exports globally with official government recognition."
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

      {/* 4. Documents & Timeline */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/10 to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideUp>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5 mb-4">
              <FileCheck className="w-4 h-4 text-gold" />
              Checklist
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-6">
              Documents Required
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Keep your IEC and bank certificate handy for e-RCMC application filing.
            </p>
            <div className="space-y-4">
              {registration.documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{doc}</span>
                </div>
              ))}
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl text-navy">
              <h3 className="font-serif text-2xl font-bold mb-8 text-navy flex items-center gap-3">
                <Clock className="w-6 h-6 text-gold" />
                Registration Process
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {registration.process.map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform group-hover:scale-110 group-hover:bg-gold">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm group-hover:border-gold/30 group-hover:shadow-md transition-all">
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 5. FAQs */}
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
