import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Search, FileText, CheckCircle, FileBadge, Lock, ArrowRight, Building2, Tag, Box, Type, PenTool, Image as ImageIcon } from "lucide-react";
import { trademarkData } from "@/data/mockData";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import TrademarkClasses from "@/components/TrademarkClasses";

export const metadata = {
  title: "Premium Trademark Registration | Brand Protection | Nithya Gokul Associates",
  description: "Secure your brand identity with expert trademark registration services. We provide end-to-end IP protection, from trademark search to final registration.",
};

export default function TrademarkPage() {
  return (
    <div className="block w-full bg-slate-50 font-sans">

      {/* 1. HERO - Stripe/Apple LegalTech Style */}
      <section className="relative bg-[#0a192f] pt-[70px] pb-[100px] md:pt-[90px] md:pb-[140px] lg:pt-[140px] lg:pb-[240px] overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">

        {/* Abstract Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-widest text-gold uppercase mb-8 shadow-2xl">
              <Lock className="w-3.5 h-3.5" />
              <span>Intellectual Property Protection</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold text-white tracking-tight leading-[1.1] mb-8 font-serif">
              Secure Your Brand&apos;s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Legacy & Identity.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-12">
              Transform your business name and logo into a legally protected, exclusive intangible asset. End-to-end trademark registration by elite corporate experts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-navy font-semibold text-sm hover:bg-gold transition-colors duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Start Trademark Search
              </Link>
              <Link href="#overview" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 backdrop-blur-sm transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Diagonal Cut Bottom */}
        <div className="absolute -bottom-[2px] left-0 right-0 h-32 bg-slate-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* 2. OVERVIEW - Split Layout */}
      <section id="overview" className="py-[70px] md:py-[100px] lg:py-[140px] bg-slate-50 relative">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <SlideUp className="relative h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden group">
            {/* Premium Abstract Art */}
            <img
              src="/trademark-overview.png"
              alt="Trademark Protection"
              className="absolute inset-0 w-full h-full object-contain bg-slate-50 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[40px]" />
            <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-xs shadow-2xl">
              <Shield className="w-8 h-8 text-gold mb-4" />
              <p className="text-white font-serif text-xl leading-tight">Your brand is your most valuable asset. Protect it fiercely.</p>
            </div>
          </SlideUp>

          <SlideUp delay={0.2} className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-8">
              Trademark Registration In India <br className="hidden lg:block" />
              <span className="text-gold">— An Overview</span>
            </h2>

            <div className="space-y-6 text-[17px] md:text-[18px] text-slate-600 leading-[1.8] font-light">
              <p>
                A trademark can be defined as the unique identity that makes your company, product, or service stand out from the rest. A registered trademark is your business’s intellectual property/ intangible asset. It protects the investment made into creating trust and loyalty among your customers.
              </p>
              <p>
                The registration provides the right to sue against others who try to copy your trademark and prevents others from using a similar trademark to the one registered by you.
              </p>
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
                <p className="text-navy font-semibold text-lg">
                  Protect your brand identity and the trust your customers have in it easily, through us and our team of experts. Get hassle-free trademark registration.
                </p>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 3. WHAT CAN BE TRADEMARKED */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="Brand Assets"
            title="What Can Be Trademarked?"
            subtitle="Any unique mark that distinguishes your goods or services."
          />

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {[
              { icon: Building2, title: "Business Name", desc: "Your official corporate or firm name." },
              { icon: Type, title: "Brand Name", desc: "The specific name of your product line." },
              { icon: PenTool, title: "Logo & Design", desc: "Visual symbols and stylized typography." },
              { icon: Tag, title: "Tagline", desc: "Catchphrases and advertising slogans." },
              { icon: Box, title: "Product Name", desc: "Unique identifiers for individual items." },
              { icon: ImageIcon, title: "Packaging", desc: "Distinctive shapes and trade dress." }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index}>
                  <div className="h-full bg-slate-50 border border-slate-100 p-8 rounded-[32px] group hover:bg-[#0a192f] transition-colors duration-500 cursor-default shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:shadow-none transition-all duration-500">
                      <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-500" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{item.title}</h3>
                    <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. REGISTRATION PROCESS (Horizontal Timeline) */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-[#0a192f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <SlideUp className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">The Filing Journey</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">From exhaustive searches to the final seal of protection, we handle the entire lifecycle.</p>
          </SlideUp>

          <SlideUp delay={0.2} className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative">
              {[
                { icon: Search, title: "Trademark Search", desc: "Comprehensive registry search to ensure mark availability." },
                { icon: FileText, title: "Application Filing", desc: "Drafting and filing Form TM-A with the appropriate registry." },
                { icon: Search, title: "Examination", desc: "Registry issues an examination report. We file the reply." },
                { icon: FileBadge, title: "Publication", desc: "Mark is published in the Trademark Journal for opposition." },
                { icon: CheckCircle, title: "Registration", desc: "Issuance of the final Trademark Registration Certificate." }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex flex-col items-center text-center group">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-2 text-[80px] font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none select-none z-0">
                      0{idx + 1}
                    </div>

                    {/* Icon Node */}
                    <div className="w-[80px] h-[80px] rounded-full bg-[#0a192f] border-2 border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <Icon className="w-8 h-8 text-white/50 group-hover:text-gold transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="font-serif text-lg font-bold text-white mb-3">{step.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 6. WHY REGISTER */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                badge="Value Addition"
                title="Why Register A Trademark?"
                subtitle="Transform your brand from a mere name into a quantifiable, defensible corporate asset."
              />
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                Unregistered brands rely solely on common law rights, which are extremely difficult and expensive to prove in court. Registration provides an absolute presumption of ownership nationwide.
              </p>
            </div>

            <div className="lg:col-span-7">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trademarkData.whyRegister.map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center mb-5">
                        <CheckCircle className="w-5 h-5 text-blue" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="FAQs"
            title="Common IP Questions"
          />
          <div className="mt-16 max-w-3xl mx-auto">
            <FAQAccordion items={trademarkData.faqs} />
          </div>
        </div>
      </section>

    </div>
  );
}
