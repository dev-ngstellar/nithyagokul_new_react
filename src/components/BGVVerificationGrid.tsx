"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  CreditCard,
  Globe,
  ScanFace,
  Scale,
  Building2,
  ShieldCheck,
  Database,
  FileWarning,
  MapPin,
  Mail,
  Smartphone,
  ClipboardCheck,
  Briefcase,
  Users,
  History,
  Lock,
  FileText,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  FlaskConical,
  Share2,
  ArrowRight
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  { id: "all", label: "All Checks" },
  { id: "identity", label: "Identity Verification" },
  { id: "criminal", label: "Criminal Checks" },
  { id: "address", label: "Address Verification" },
  { id: "field", label: "Field Audit Checks" },
  { id: "employment", label: "Employment Verification" },
  { id: "education", label: "Education Verification" },
  { id: "credit", label: "Credit & Financial" },
  { id: "other", label: "Specialized Checks" },
];

const verificationsData = [
  // 1. Identity Verification
  {
    category: "identity",
    categoryName: "Identity Verification",
    icon: UserCheck,
    title: "Voter ID Verification",
    description: "Confirming the identity and eligibility of a candidate's Voter ID issued by the Election Commission of India. Confirms ID number, validity, name, constituency, etc."
  },
  {
    category: "identity",
    categoryName: "Identity Verification",
    icon: CreditCard,
    title: "Driving License Verification",
    description: "Confirming the authenticity and validity of a driver's license. Confirms DL validity, name, place of issue, document ID, etc. to ensure genuine licenses."
  },
  {
    category: "identity",
    categoryName: "Identity Verification",
    icon: Globe,
    title: "Passport Verification",
    description: "Confirming the authenticity and validity of an individual's passport by scrutinizing identity information, passport number, and official records."
  },
  {
    category: "identity",
    categoryName: "Identity Verification",
    icon: ScanFace,
    title: "Face Match Check",
    description: "Enable secure and accurate identity verification by matching profile photos with ID documents, backed by automatic liveness check for added authenticity."
  },

  // 2. Criminal Checks
  {
    category: "criminal",
    categoryName: "Criminal Checks",
    icon: Scale,
    title: "Criminal Court Record Check",
    description: "Identifying if candidate information matches any registered criminal or civil cases in digitized court records databases to eliminate professional risk."
  },
  {
    category: "criminal",
    categoryName: "Criminal Checks",
    icon: Building2,
    title: "Criminal Record Check via Law Firm",
    description: "Verifying background for criminal records within the jurisdiction of local police stations through an advocate/law firm with relevant police authorities."
  },
  {
    category: "criminal",
    categoryName: "Criminal Checks",
    icon: ShieldCheck,
    title: "Police Clearance Certificate (PCC)",
    description: "State government law enforcement background check verifying criminal records and personal history. Final output is PCC or signed acknowledgment copy."
  },
  {
    category: "criminal",
    categoryName: "Criminal Checks",
    icon: Database,
    title: "Global Database Check",
    description: "Examining international databases for fraudulent, terrorist, criminal activities, political exposure (PEP), sanctions, blacklists, or regulatory enforcement."
  },
  {
    category: "criminal",
    categoryName: "Criminal Checks",
    icon: FileWarning,
    title: "eFIR Check",
    description: "Digital screening process that verifies whether an individual has an online FIR registered against them, identifying early-stage complaints before court escalation."
  },

  // 3. Address Verification
  {
    category: "address",
    categoryName: "Address Verification",
    icon: MapPin,
    title: "Physical Address Verification",
    description: "Confirming the current or permanent address of a candidate by conducting an in-person visit, matching documentation with physical existence."
  },
  {
    category: "address",
    categoryName: "Address Verification",
    icon: Mail,
    title: "Postal Address Verification",
    description: "Confirming permanent or current address by sending a verification letter containing a 4-digit PIN for the candidate to acknowledge."
  },
  {
    category: "address",
    categoryName: "Address Verification",
    icon: Smartphone,
    title: "Digital Address Verification",
    description: "Validating address provided by a candidate using a digital web link via SMS, collecting geo-location and digital address evidence efficiently."
  },

  // 4. Field Audit Checks
  {
    category: "field",
    categoryName: "Field Audit Checks",
    icon: ClipboardCheck,
    title: "Physical Due Diligence",
    description: "Comprehensive evaluation of physical assets, helping organizations mitigate operational risks and ensure compliance with relevant standards."
  },

  // 5. Employment Verification
  {
    category: "employment",
    categoryName: "Employment Verification",
    icon: Briefcase,
    title: "Employment Verification",
    description: "Validating employment credentials such as designation, tenure, exit reason, and conduct directly via previous employer HR or platforms like eLockr."
  },
  {
    category: "employment",
    categoryName: "Employment Verification",
    icon: Users,
    title: "Professional Reference Check (PRC)",
    description: "Obtaining subjective performance-related information and feedback from reporting managers or teammates of previous employers via structured questionnaires."
  },
  {
    category: "employment",
    categoryName: "Employment Verification",
    icon: History,
    title: "Employment History / Moonlighting Check",
    description: "Examining simultaneous Provident Fund (PF) deposits from multiple employers during a specific period to identify unauthorized dual employment."
  },
  {
    category: "employment",
    categoryName: "Employment Verification",
    icon: Lock,
    title: "eLockr Reference Check (EREF)",
    description: "Instant reference verification examining a vast repository of credentials issued on eLockr to fetch unwithheld tenure, designation, and manager references."
  },
  {
    category: "employment",
    categoryName: "Employment Verification",
    icon: FileText,
    title: "Curriculum Vitae Verification",
    description: "Confirming the accuracy and authenticity of information, achievements, and claims provided on a job applicant's CV or resume."
  },

  // 6. Education Verification
  {
    category: "education",
    categoryName: "Education Verification",
    icon: GraduationCap,
    title: "Education Verification",
    description: "Validating academic credentials, qualification, completion status, and percentage directly with university registries to detect forged or inflated records."
  },

  // 7. Credit & Financial Checks
  {
    category: "credit",
    categoryName: "Credit & Financial Checks",
    icon: TrendingUp,
    title: "Credit Check (CIBIL)",
    description: "Assessing credit score, loan repayment history, and credit card activity from reputable credit bureaus to evaluate financial reliability and risk."
  },
  {
    category: "credit",
    categoryName: "Credit & Financial Checks",
    icon: CheckCircle2,
    title: "Bank Account Verification",
    description: "Validating bank account numbers to retrieve account holder name, bank branch, MICR, and IFSC code, ensuring payment transfers never fail."
  },

  // 8. Other Checks
  {
    category: "other",
    categoryName: "Specialized Checks",
    icon: FlaskConical,
    title: "Drug Test",
    description: "Determining if a candidate has consumed prohibited substances based on specific panel types (Drug Panel 5 to 12) for workplace safety compliance."
  },
  {
    category: "other",
    categoryName: "Specialized Checks",
    icon: Share2,
    title: "Social Media Check (SMC)",
    description: "Identifying flagged content, behavioral risks, or reputational concerns associated with a candidate across public social media handles."
  }
];

export default function BGVVerificationGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all"
    ? verificationsData
    : verificationsData.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative font-sans">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          badge="COMPREHENSIVE BGV SUITE"
          title="Background Verification Solutions & Checks"
          subtitle="Explore our full spectrum of legal, identity, employment, and financial screening checks engineered for absolute corporate compliance."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10 mb-14">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-navy text-gold shadow-md shadow-navy/20 border border-gold/40 scale-105"
                    : "bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Verification Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={item.title}
                >
                  <div className="group bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Icon Badge - Matching Careers page styling */}
                      <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-5 text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title & Description */}
                      <h4 className="font-serif text-lg md:text-xl font-bold text-navy group-hover:text-gold transition-colors mb-2.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-navy transition-colors mt-auto pt-2"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
