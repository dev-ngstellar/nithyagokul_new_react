import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Heart, Eye, Award, Shield, Users, Clock, CheckCircle2, FileCheck, Globe } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { teamMembers, testimonialsData } from "@/data/mockData";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AssociationsMarquee from "@/components/AssociationsMarquee";
import LeadForm from "@/components/LeadForm";
import SlideUp from "@/components/animations/SlideUp";
import AboutTheFirm from "@/components/AboutTheFirm";


export const metadata = {
  title: "About Our Firm",
  description: "Learn about Nithya Gokul Associates, our company secretaries, legal practices, core values, and founding mission.",
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Excellence",
      desc: "Rigorous attention to drafting, statutory registers, and regulatory deadlines."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      title: "Integrity",
      desc: "We adhere strictly to professional ethics, ensuring all actions meet high legal benchmarks."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "Mutual Success",
      desc: "We align compliance processes to serve and enable your business scale-up goals."
    },
    {
      icon: <Globe className="w-8 h-8 text-gold" />,
      title: "Social Responsibility",
      desc: "We are dedicated to sustainable business practices that positively impact our community and the environment."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-gold" />,
      title: "Commitment & Accountability",
      desc: "Clear upfront fee structures, progress reporting, and direct access to filing details."
    }
  ];

  const executiveTeam = [
    {
      name: "Latha",
      role: "Sr. Associate Consultant",
      badge: "Senior Consultant",
    },
    {
      name: "Krithika",
      role: "Associate Consultant",
      badge: "Expert Consultant",
    },
    {
      name: "Vaishnavi",
      role: "Associate Consultant",
      badge: "Expert Consultant",
    },
    {
      name: "Nandhini",
      role: "Jr. Associate Consultant",
      badge: "Junior Consultant",
    }
  ];

  return (
    <div className="block w-full">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-[70px] md:py-[90px] lg:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-gold/5" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Who We Are
          </span>
          <h1 className="font-serif text-4xl md:text-[52px] lg:text-[64px] font-bold leading-[1.1]">
            About Nithya Gokul Associates
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-300 max-w-xl mx-auto leading-[1.8]">
            A specialized corporate secretarial practice offering elite legal compliance, governance audits, and business advisory services.
          </p>
        </div>
      </section>
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

      <AboutTheFirm />

      {/* Vision & Mission Redesign */}
      <section className="relative bg-navy py-[70px] md:py-[90px] lg:py-[120px] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Vision Side */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <Target className="w-4 h-4 text-gold" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-gold">Our Vision</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6 md:mb-8">
                Guiding Principles for Enduring Value
              </h2>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                "To be a valued consulting partner to all our clients.",
                "To provide experienced and knowledge based consulting services resulting in value returns.",
                "To maintain continuous learning and development processes within our system to better our Consulting services anytime."
              ].map((item, idx) => (
                <SlideUp key={idx} delay={idx * 0.1} className="flex gap-4 md:gap-5 group">
                  <div className="mt-1 md:mt-1.5 w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center border border-blue/20 shrink-0 group-hover:bg-blue/20 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-blue" />
                  </div>
                  <p className="text-[16px] md:text-[18px] text-slate-300 leading-[1.8] font-light">
                    {item}
                  </p>
                </SlideUp>
              ))}
            </div>
          </div>

          {/* Mission Side */}
          <div className="lg:col-span-5">
            <SlideUp delay={0.3} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[32px] shadow-2xl relative overflow-hidden group hover:bg-white/[0.07] transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <Award className="w-32 h-32 text-gold" />
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="w-10 h-1 bg-gold rounded-full" />
                  Our Mission
                </h3>
                <p className="text-[16px] md:text-[18px] text-slate-300 leading-[1.9] font-light">
                  To simplify statutory governance for businesses of all scales, delivering ethical advisory services that mitigate liabilities and unlock sustainable business expansion.
                </p>
              </div>
            </SlideUp>
          </div>

        </div>
      </section>

      {/* Premium Core Values Redesign */}
      <section className="relative py-[70px] md:py-[90px] lg:py-[120px] bg-slate-50 overflow-hidden border-y border-slate-100">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <SectionHeading
            badge="Core Values"
            title="The Principles That Drive Our Work"
            subtitle="Our firm operates under a strict code of ethics, focusing on diligence and transparency."
          />

          <div className="flex flex-wrap justify-center gap-[30px] mt-16">
            {coreValues.map((value, index) => (
              <SlideUp
                key={index}
                delay={index * 0.1}
                className="w-full md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)] flex flex-col"
              >
                <div className="group relative flex-1 rounded-[24px] p-6 lg:p-8 bg-white border border-slate-200/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:-translate-y-[10px] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] hover:border-gold/40 overflow-hidden flex flex-col">

                  {/* Top Animated Gold Line */}
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold transition-all duration-500 ease-out group-hover:w-full" />

                  {/* Watermark Number */}
                  <div className="absolute top-4 right-6 text-5xl lg:text-6xl font-serif font-bold text-slate-100/80 pointer-events-none select-none transition-colors duration-500 group-hover:text-gold/10">
                    0{index + 1}
                  </div>

                  <div className="relative z-10">
                    {/* Icon Holder */}
                    <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center border border-slate-100 bg-slate-50 shadow-sm transition-all duration-500 ease-out group-hover:rotate-[8deg] group-hover:scale-105 group-hover:border-gold/30 group-hover:bg-gold/5 group-hover:shadow-[0_10px_20px_rgba(255,180,0,0.1)]">
                      {React.cloneElement(value.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-gold" })}
                    </div>

                    <h3 className="mt-6 mb-4 font-serif text-[24px] lg:text-[26px] font-bold text-navy leading-[1.2] tracking-tight group-hover:text-blue transition-colors duration-300 pr-12">
                      {value.title}
                    </h3>
                  </div>

                  <p className="relative z-10 mt-auto text-[15px] lg:text-[16px] text-slate-600 leading-[1.7] font-light group-hover:text-slate-700 transition-colors">
                    {value.desc}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Team Showcase */}
      <section className="relative py-[70px] md:py-[90px] lg:py-[120px] bg-navy overflow-hidden">
        {/* Abstract Particles & Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
          {/* Subtle gold particles */}
          <div className="absolute top-20 right-[20%] w-2 h-2 bg-gold/40 rounded-full blur-[1px]" />
          <div className="absolute bottom-40 left-[10%] w-1.5 h-1.5 bg-gold/30 rounded-full blur-[1px]" />
          <div className="absolute top-1/2 right-[10%] w-2.5 h-2.5 bg-blue/40 rounded-full blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <SectionHeading
            dark
            badge="Meet Our Experts"
            title="The Professionals Behind Your Business Success"
            subtitle="Our experienced consultants help businesses navigate governance, compliance, registrations, and strategic advisory services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {executiveTeam.map((member, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className="group relative h-[340px] rounded-[28px] p-6 bg-white/[0.05] backdrop-blur-[18px] border border-white/[0.08] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-[10px] hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">

                  {/* Experience Badge */}
                  <div className="absolute top-5 right-5 px-3 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold shadow-[0_4px_15px_rgba(255,180,0,0.1)]">
                    {member.badge}
                  </div>

                  {/* Avatar Monogram */}
                  <div className="relative w-[110px] h-[110px] mt-8 mb-8 rounded-full p-[3px] bg-gradient-to-br from-gold/30 to-blue/10 transition-transform duration-500 group-hover:scale-105 group-hover:from-gold group-hover:to-gold/40 shadow-lg">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-navy bg-[#0B1F3A] flex items-center justify-center">
                      <span className="font-serif text-[42px] text-gold font-bold group-hover:scale-110 transition-transform duration-500">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full flex flex-col items-center">
                    <h3 className="font-serif text-[26px] font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[16px] text-slate-300 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6">
        <SectionHeading
          badge="Reviews"
          title="What Clients Say About Our Team"
        />
        <TestimonialCarousel testimonials={testimonialsData} />
      </section>

      {/* Contact CTA */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-4xl mx-auto px-6 text-center space-y-6">
        <h3 className="font-serif text-[32px] md:text-[42px] font-bold text-navy leading-[1.1]">Need Independent Secretarial Advice?</h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-500 leading-[1.8] max-w-md mx-auto">
          Book a strategic consultation call with Nithya Gokul or our senior partners to address your corporate concerns.
        </p>
        <Link
          href="/contact#consultation"
          className="px-8 py-3.5 bg-blue text-white hover:bg-blue/90 font-semibold rounded-lg transition-colors inline-block"
        >
          Book An Appointment
        </Link>
      </section>
    </div>
  );
}
