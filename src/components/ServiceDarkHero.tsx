"use client";

import React from "react";
import { CheckCircle2, Landmark, Calendar, MapPin, Send } from "lucide-react";
import LeadForm from "./LeadForm";
import FadeIn from "./animations/FadeIn";
import SlideUp from "./animations/SlideUp";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";
import type { ServiceDetail } from "@/data/mockData";

interface ServiceDarkHeroProps {
  service: ServiceDetail;
}

export default function ServiceDarkHero({ service }: ServiceDarkHeroProps) {
  // Use specific hardcoded texts for company-registration to match exactly what we had before,
  // and dynamically render for other services
  const isCompanyRegistration = service.slug === 'company-registration';
  const isSecretarialConsulting = service.slug === 'secretarial-consulting';
  const isBusinessValuation = service.slug === 'business-valuation-insolvency';
  const isProfessionalWebDesigning = service.slug === 'professional-web-designing';
  const isPremiumLayout = isCompanyRegistration || isSecretarialConsulting || isBusinessValuation || isProfessionalWebDesigning;

  const headingText = isCompanyRegistration ? (
    <>
      <span className="text-white block leading-[1.15] tracking-wide font-serif">Register Your Company</span>
      <span className="text-gold block leading-[1.15] tracking-wide font-serif">With Confidence</span>
    </>
  ) : isSecretarialConsulting ? (
    <>
      <span className="text-gold block leading-[1.15] tracking-wide font-serif mb-1 sm:mb-2">Secretarial</span>
      <span className="text-white block leading-[1.15] tracking-wide font-serif">Consulting</span>
    </>
  ) : isBusinessValuation ? (
    <>
      <span className="text-gold block leading-[1.15] tracking-wide font-serif mb-1 sm:mb-2">Business Valuation &</span>
      <span className="text-white block leading-[1.15] tracking-wide font-serif">Insolvency</span>
    </>
  ) : isProfessionalWebDesigning ? (
    <>
      <span className="text-gold block leading-[1.15] tracking-wide font-serif mb-1 sm:mb-2">Professional</span>
      <span className="text-white block leading-[1.15] tracking-wide font-serif">Web Designing</span>
    </>
  ) : (
    <>
      <span className="text-gold">{service.title.split(' ')[0]}</span>{' '}
      {service.title.split(' ').slice(1).join(' ')}
    </>
  );

  const subtitleText = isCompanyRegistration
    ? "Expert-Led Incorporation & Compliance Support"
    : service.shortDesc;

  const descriptionText = isCompanyRegistration
    ? "Start your entrepreneurial journey with professional company registration, regulatory compliance, and ongoing advisory support from experienced consultants."
    : service.longDesc;

  const featuresList = isCompanyRegistration
    ? [
      "MCA Compliant Process",
      "16+ Years Experience",
      "500+ Companies Registered",
      "PAN / TAN / GST Assistance"
    ]
    : service.features.slice(0, 4);

  const buttonText = isCompanyRegistration ? "START INCORPORATION" : "GET STARTED NOW";

  return (
    <section className="bg-navy text-white pt-[120px] pb-[100px] relative overflow-hidden">
      {/* Custom Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#071B38,#0F2E5E)]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Premium Decorative elements for Premium Submenu Pages */}
      {isPremiumLayout && (
        <>
          {/* Large blurred gold gradient orb behind heading */}
          <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] bg-gold/10 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDuration: '10s' }} />

          {/* Faint blue orb on the right */}
          <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDuration: '14s' }} />

          {/* Thin curved line pattern in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100,200 Q300,50 800,400 T1800,100" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="1.2" />
              <path d="M-50,300 Q400,150 900,500 T1900,200" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="1.2" />
            </svg>
          </div>

          {/* Floating background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-gold/30 blur-[1px] animate-float-slow" />
            <div className="absolute top-[60%] left-[45%] w-1.5 h-1.5 rounded-full bg-blue/30 blur-[1px] animate-float-slower" />
            <div className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full bg-gold/20 blur-[1px] animate-float-slow" />
            <div className="absolute top-[75%] left-[8%] w-3 h-3 rounded-full bg-gold/15 blur-[2px] animate-float-slower" />
          </div>
        </>
      )}

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Content (60%) */}
        <FadeIn className={`lg:col-span-7 space-y-8 flex flex-col justify-center ${isPremiumLayout ? "text-center lg:text-left items-center lg:items-start" : ""
          }`}>
          <div className="space-y-5">
            <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-gold tracking-widest uppercase shadow-sm transition-all duration-300 ${isPremiumLayout
                ? "bg-white/[0.03] backdrop-blur-md border border-gold/30 shadow-[0_0_15px_rgba(254,179,36,0.15)]"
                : "bg-gold/10 border border-gold/20"
              }`}>
              <Landmark className="w-3.5 h-3.5" />
              {service.title} Services
            </span>
            <h1 className={`font-serif font-bold leading-tight ${isPremiumLayout
                ? "text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-wide"
                : "text-4xl md:text-5xl lg:text-6xl"
              }`}>
              {headingText}
            </h1>
            <h2 className={`text-lg md:text-xl font-semibold text-slate-200 ${isPremiumLayout ? "max-w-[620px]" : ""
              }`}>
              {subtitleText}
            </h2>
            <p className={`text-[15px] md:text-[16px] text-slate-300 leading-[1.7] ${isPremiumLayout ? "max-w-[620px]" : "max-w-xl"
              }`}>
              {descriptionText}
            </p>
          </div>

          {/* Trust Highlights */}
          {isPremiumLayout ? (
            <div className="space-y-6 pt-3 w-full flex flex-col items-center lg:items-start">
              {/* Horizontal glass feature strip */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="bg-white/[0.04] backdrop-blur-[12px] border border-white/10 px-4 py-2 rounded-lg shadow-lg shadow-black/10 flex items-center gap-2.5 hover:border-gold/30 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300">
                  <Calendar className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-[13px] font-semibold text-slate-200 tracking-wide">
                    {isCompanyRegistration && "2 Weeks"}
                    {isSecretarialConsulting && "2 Hours"}
                    {isBusinessValuation && "5 Days"}
                    {isProfessionalWebDesigning && "1-5 Days"}
                  </span>
                </div>
                <div className="bg-white/[0.04] backdrop-blur-[12px] border border-white/10 px-4 py-2 rounded-lg shadow-lg shadow-black/10 flex items-center gap-2.5 hover:border-gold/30 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-[13px] font-semibold text-slate-200 tracking-wide">
                    {isBusinessValuation ? "PAN India" : "From Any where"}
                  </span>
                </div>
                <div className="bg-white/[0.04] backdrop-blur-[12px] border border-white/10 px-4 py-2 rounded-lg shadow-lg shadow-black/10 flex items-center gap-2.5 hover:border-gold/30 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300">
                  <Send className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-[13px] font-semibold text-slate-200 tracking-wide">
                    {isBusinessValuation ? "One Call Assistance" : "At a Single Click/Call"}
                  </span>
                </div>
              </div>

              {/* Explanatory text & footnote */}
              <div className="space-y-2.5 text-center lg:text-left">
                <p className="text-[15px] text-slate-300 leading-relaxed max-w-[620px] font-light mx-auto lg:mx-0">
                  {isCompanyRegistration && "Registering a Company is quick, easy, and can be done online with Nithya Gokul Associates in 3 simple steps:"}
                  {isSecretarialConsulting && "Ease your business requirements is our motto. A well-maintained compliance system can help your company cut costs."}
                  {isBusinessValuation && "Worried about the valuation and negotiation that arise while buying/selling your business? Don't worry, just call us"}
                  {isProfessionalWebDesigning && "Website/Portal for your business is quick, and easy, with Nithya Gokul Associates in simple steps:"}
                </p>
                {(isCompanyRegistration || isSecretarialConsulting || isBusinessValuation) && (
                  <p className="text-indigo-400 font-semibold text-[14px] italic">
                    *Professional Fees. EMI Option Available.
                  </p>
                )}
              </div>
            </div>
          ) : (
            featuresList && featuresList.length > 0 && (
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {featuresList.map((item, i) => (
                  <StaggerItem key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-sm font-semibold text-slate-200">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )
          )}
        </FadeIn>

        {/* Right Content Form (40%) */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
          <SlideUp
            delay={0.3}
            className="bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-[28px] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Internal Glow for Form Card */}
            <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-blue/20 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10 mb-8 space-y-2 text-center">
              <h3 className="font-serif text-2xl font-bold text-white">Request A Consultation</h3>
              <p className="text-sm text-slate-400">Talk to our experts and receive a customized roadmap.</p>
            </div>

            <div className="relative z-10">
              <LeadForm
                isDark
                lockedService={service.title}
                buttonText={buttonText}
                className="!bg-transparent !border-none !p-0 !shadow-none"
              />
            </div>
          </SlideUp>
        </div>

      </div>
    </section>
  );
}
