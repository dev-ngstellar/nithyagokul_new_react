"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Users, Briefcase, FileSignature, Landmark, Coins, 
  ShieldCheck, Target, TrendingUp, Lock, ArrowUpRight, BarChart3,
  CheckCircle2, IdCard, MapPin, FileCheck
} from "lucide-react";

import SlideUp from "./animations/SlideUp";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

const companyTypes = [
  { icon: <Building2 className="w-6 h-6" />, title: "Private Limited", desc: "The most popular corporate structure for startups and growing businesses." },
  { icon: <Users className="w-6 h-6" />, title: "Public Limited", desc: "For large scale businesses planning to raise capital from the public." },
  { icon: <Briefcase className="w-6 h-6" />, title: "One Person Company", desc: "A corporate structure tailored for solo entrepreneurs." },
  { icon: <FileSignature className="w-6 h-6" />, title: "LLP", desc: "Limited Liability Partnership offering flexibility and limited liability." },
  { icon: <Landmark className="w-6 h-6" />, title: "Section 8 Company", desc: "For non-profit organizations operating for charitable objectives." },
  { icon: <Coins className="w-6 h-6" />, title: "Nidhi Company", desc: "A type of NBFC focused on borrowing and lending among members." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Investment Venture", desc: "Specialized structures for investments and holding companies." }
];

const benefits = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Limited Liability", desc: "Shield from personal liability and protects from other risks and losses." },
  { icon: <Target className="w-6 h-6" />, title: "Customer Trust", desc: "A registered company increases the authenticity of your business and attracts more customers." },
  { icon: <Landmark className="w-6 h-6" />, title: "Easy Financing", desc: "Procure bank credits and good investment from reliable investors with ease." },
  { icon: <Lock className="w-6 h-6" />, title: "Asset Protection", desc: "Offers liability protection to protect your company's assets." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Capital Stability", desc: "Greater capital contribution and greater stability." },
  { icon: <ArrowUpRight className="w-6 h-6" />, title: "Expansion Potential", desc: "Increases the potential to grow big and expand." }
];

const documents = {
  identity: [
    "Scanned copy of PAN card or passport (foreign nationals & NRIs)",
    "Scanned copy of voter ID/passport/driving licence",
    "Scanned copy of the latest bank statement/telephone or mobile bill/electricity or gas bill",
    "Scanned passport-sized photograph",
    "Specimen signature (blank document with signature [directors only])"
  ],
  office: [
    "Scanned copy of the latest bank statement/telephone or mobile bill/electricity or gas bill",
    "Scanned copy of notarized rental agreement in English",
    "Scanned copy of no-objection certificate from the property owner",
    "Scanned copy of sale deed/property deed in English (in case of owned property)"
  ]
};

const packageIncludes = [
  "DIN and DSC for all Directors",
  "Drafting of MoA & AoA",
  "Registration fees and stamp duty",
  "Company incorporation certificate",
  "Company PAN and TAN"
];

export default function CompanyFormationContent() {
  const [activeTab, setActiveTab] = useState<"identity" | "office">("identity");

  return (
    <div className="w-full">
      {/* 1. Types of Business Structures */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-semibold tracking-widest uppercase text-xs">COMPANY TYPES</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-navy">Types Of Business Structures</h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {companyTypes.map((type, idx) => (
            <StaggerItem key={idx} className="bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)] hover:border-gold/30 group">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-navy mb-4 transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold group-hover:border-gold/20">
                {type.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">{type.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{type.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 2. Benefits Of Company Registration */}
      <section className="bg-slate-50 py-[70px] md:py-[90px] lg:py-[120px] border-y border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs">ADVANTAGES</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-navy">Benefits Of Company Registration</h2>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <StaggerItem key={idx} className="relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[24px] p-8 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:bg-white group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full -z-10 transition-all duration-500 group-hover:scale-150" />
                <div className="w-14 h-14 rounded-2xl bg-blue/5 flex items-center justify-center text-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">{benefit.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Documents Required */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-semibold tracking-widest uppercase text-xs">CHECKLIST</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-navy">Documents Required</h2>
          <p className="text-slate-500 text-[16px]">Accepted by the MCA for the online company registration process.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab("identity")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "identity" 
                  ? "bg-navy text-white shadow-lg" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <IdCard className="w-4 h-4" />
              Identity & Address Proof
            </button>
            <button
              onClick={() => setActiveTab("office")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "office" 
                  ? "bg-navy text-white shadow-lg" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <MapPin className="w-4 h-4" />
              Registered Office Proof
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 md:p-10 relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {documents[activeTab].map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <FileCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed">{doc}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {activeTab === "office" && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="mt-8 p-4 bg-blue/5 rounded-xl border border-blue/10 text-sm text-blue text-center font-medium"
              >
                Note: Your registered office need not be a commercial space; it can be your residence too.
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Registration Package Includes */}
      <section className="bg-navy py-[70px] md:py-[90px] lg:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#071B38,#0F2E5E)]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <SlideUp className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-white">Our Registration Package Includes</h2>
              <p className="text-slate-300 text-lg">Everything you need to launch your business compliantly.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packageIncludes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/[0.05] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center pt-8 border-t border-white/10">
              <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                With this, you will be well on your way to forming your own company. It is recommended that you consult with the experts and make the finest decision for smoother growth.
              </p>
            </div>
          </SlideUp>
        </div>
      </section>

    </div>
  );
}
