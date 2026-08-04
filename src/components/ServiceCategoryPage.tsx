"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2, GitBranch, Rocket, Globe, Ship,
  FileCheck, BookOpen, Users, UserCheck, BarChart3,
  ClipboardCheck, CalendarCheck, FileText, Handshake,
  TrendingUp, Banknote, Search, Target, ShieldCheck,
  Heart, Leaf, HeartHandshake, Scale, XCircle,
  BriefcaseBusiness, PhoneCall, Upload, CheckCircle2,
  Shield, MessageSquare, Landmark, ChevronRight,
  ChevronDown, ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { CategoryData } from "@/data/categoryData";
import LeadForm from "@/components/LeadForm";
import ProcessTimeline from "@/components/ProcessTimeline";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

/* ─────────────────────────────────────────────────────────
   Icon lookup map — resolves string names to Lucide icons
───────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, LucideIcon> = {
  Building2, GitBranch, Rocket, Globe, Ship,
  FileCheck, BookOpen, Users, UserCheck, BarChart3,
  ClipboardCheck, CalendarCheck, FileText, Handshake,
  TrendingUp, Banknote, Search, Target, ShieldCheck,
  Heart, Leaf, HeartHandshake, Scale, XCircle,
  BriefcaseBusiness, PhoneCall, Upload, CheckCircle2,
  Shield, MessageSquare, Landmark,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const Comp = ICON_MAP[name] ?? FileText;
  return <Comp className={className} />;
}

/* ─────────────────────────────────────────────────────────
   Why NGA — static 4-card section (not the GSAP scroll-pin)
───────────────────────────────────────────────────────── */
function WhyNGASection({ points }: { points: CategoryData["whyPoints"] }) {
  return (
    <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-navy text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Heading */}
        <FadeIn className="text-center mb-14 space-y-4">
          <span className="px-3 py-1 bg-blue/20 text-blue text-xs font-semibold uppercase tracking-widest rounded-full border border-blue/20">
            Why Choose Us
          </span>
          <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.1] text-white">
            Why Industry Leaders Trust{" "}
            <span className="text-gold">Nithya Gokul Associates</span>
          </h2>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto" />
        </FadeIn>

        {/* 4 benefit cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <StaggerItem key={idx}>
              <div className="group h-full bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                {/* Number badge */}
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <span className="font-serif font-bold text-gold text-sm">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   FAQ Accordion (inline, avoids separate client component import)
───────────────────────────────────────────────────────── */
function FAQSection({ faqs }: { faqs: CategoryData["faqs"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6">
      {/* Heading */}
      <FadeIn className="text-center mb-14 space-y-4">
        <span className="px-3 py-1 bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest rounded-full">
          FAQs
        </span>
        <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[52px] font-bold text-navy leading-[1.1]">
          Frequently Asked Questions
        </h2>
        <div className="w-20 h-1 bg-gold rounded-full mx-auto" />
      </FadeIn>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="font-serif text-base md:text-lg font-bold text-navy">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Page Component
───────────────────────────────────────────────────────── */
export default function ServiceCategoryPage({ category }: { category: CategoryData }) {
  const processSteps = category.process.map((step, idx) => ({
    num: step.step,
    title: step.title,
    desc: step.description,
    icon: <Icon name={step.iconName} className="w-6 h-6" />,
  }));

  return (
    <div className="block w-full">

      {/* ── 1. HERO ── */}
      <section className="bg-navy text-white pt-[120px] pb-[100px] relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#071B38,#0F2E5E)]" />
        <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
        {/* Decorative SVG curves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100,200 Q300,50 800,400 T1800,100" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="1.2" />
            <path d="M-50,300 Q400,150 900,500 T1900,200" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="1.2" />
          </svg>
        </div>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-gold/30 blur-[1px]" />
          <div className="absolute top-[60%] left-[45%] w-1.5 h-1.5 rounded-full bg-blue/30 blur-[1px]" />
          <div className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full bg-gold/20 blur-[1px]" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Category info */}
          <FadeIn className="lg:col-span-7 space-y-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] text-slate-400 font-medium">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services/company-incorporation" className="hover:text-gold transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gold">{category.title}</span>
            </nav>

            <div className="space-y-5">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-gold tracking-widest uppercase bg-white/[0.03] backdrop-blur-md border border-gold/30 shadow-[0_0_15px_rgba(254,179,36,0.15)]">
                <Landmark className="w-3.5 h-3.5" />
                {category.badge}
              </span>

              {/* H1 */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-wide">
                <span className="text-gold block">{category.heroTitleGold}</span>
                <span className="text-white block">{category.heroTitleWhite}</span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-lg md:text-xl font-semibold text-slate-200 max-w-[580px]">
                {category.heroSubtitle}
              </h2>

              {/* Description */}
              <p className="text-[15px] md:text-[16px] text-slate-300 leading-[1.7] max-w-[580px]">
                {category.longDescription}
              </p>
            </div>

            {/* Key highlights strip */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {category.keyHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/[0.05] border border-white/10 rounded-lg px-3.5 py-2 text-[12px] font-semibold text-slate-200 hover:border-gold/30 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  {hl}
                </div>
              ))}
            </div>

            <p className="text-indigo-400 font-semibold text-[13px] italic">
              *Professional Fees. EMI Option Available.
            </p>
          </FadeIn>

          {/* Right: Consultation form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <SlideUp
              delay={0.3}
              className="bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-[28px] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-blue/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10 mb-8 space-y-2 text-center">
                <h3 className="font-serif text-2xl font-bold text-white">Request A Consultation</h3>
                <p className="text-sm text-slate-400">Talk to our experts and receive a customized roadmap.</p>
              </div>
              <div className="relative z-10">
                <LeadForm
                  isDark
                  lockedService={category.title}
                  buttonText="GET STARTED NOW"
                  className="!bg-transparent !border-none !p-0 !shadow-none"
                />
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT THIS CATEGORY ── */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-white border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <SlideUp className="space-y-6">
              <div className="space-y-3">
                <span className="px-3 py-1 bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest rounded-full">
                  About This Service
                </span>
                <div className="w-12 h-1 bg-gold rounded-full" />
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-bold text-navy leading-tight">
                  {category.title}
                </h2>
                <p className="text-[16px] md:text-[17px] text-slate-600 leading-[1.9]">
                  {category.longDescription}
                </p>
                <p className="text-[16px] md:text-[17px] text-slate-500 leading-[1.8]">
                  {category.description} Our team of ICSI-qualified Company Secretaries brings 16+ years of hands-on experience across industries, delivering precision, speed, and absolute compliance confidence.
                </p>
              </div>
              <Link
                href="/contact#consultation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl font-semibold text-sm hover:bg-blue transition-colors duration-300 hover:shadow-lg hover:shadow-blue/20"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </SlideUp>

            {/* Right: highlight stats */}
            <FadeIn delay={0.15} className="grid grid-cols-2 gap-4">
              {[
                { value: "16+", label: "Years Experience", desc: "Trusted corporate advisory since 2010" },
                { value: "500+", label: "Clients Served", desc: "Startups to large corporations" },
                { value: "100%", label: "Compliance Rate", desc: "Zero penalty track record" },
                { value: "PAN India", label: "Service Coverage", desc: "Remote & on-site support" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-gold/30 hover:bg-white hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group"
                >
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-gold mb-1 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-navy text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{stat.desc}</div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3. OUR SERVICES (Cards) ── */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Heading */}
          <FadeIn className="text-center mb-14 space-y-4">
            <span className="px-3 py-1 bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest rounded-full">
              Our Services
            </span>
            <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[52px] font-bold text-navy leading-[1.1]">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-gold rounded-full mx-auto" />
            <p className="text-[16px] md:text-[18px] text-slate-600 max-w-2xl mx-auto leading-[1.8]">
              {category.description} Explore our complete range of professional services under this category.
            </p>
          </FadeIn>

          {/* Cards grid */}
          <StaggerContainer
            className={`grid gap-6 ${category.services.length <= 2
                ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
                : category.services.length <= 4
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
          >
            {category.services.map((service, idx) => (
              <StaggerItem key={idx}>
                <div className="group h-full bg-white border border-slate-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,175,55,0.1)] hover:border-gold/30 transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue/5 border border-blue/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300 shrink-0">
                    <Icon name={service.iconName} className="w-5 h-5 text-blue group-hover:text-gold transition-colors" />
                  </div>
                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors leading-snug">
                    {service.name}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow mb-5">
                    {service.description}
                  </p>
                  {/* Learn more */}
                  <Link
                    href="/contact#consultation"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue group-hover:text-gold transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 4. WHY NGA ── */}
      <WhyNGASection points={category.whyPoints} />

      {/* ── 5. PROCESS TIMELINE ── */}
      <ProcessTimeline
        badge="Work Flow"
        title="Our Engagement Process"
        description="A transparent, step-by-step approach to delivering results for your business."
        steps={processSteps}
        trustStripItems={category.keyHighlights}
      />

      {/* ── 6. FAQ ── */}
      <FAQSection faqs={category.faqs} />



    </div>
  );
}
