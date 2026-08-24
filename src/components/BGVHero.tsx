"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MapPin, Briefcase, ShieldCheck, UserCheck, ShieldAlert } from "lucide-react";

const verificationCategories = [
  {
    word: "Partners",
    image: "/bgv-partners-hero.jpg",
    candidate: {
      name: "Natasha Doe",
      dob: "07-03- 1991"
    },
    verifications: [
      {
        icon: UserCheck,
        title: "Address verification",
        subtitle: "Current Address"
      },
      {
        icon: Briefcase,
        title: "Employment",
        subtitle: "1 Record"
      }
    ]
  },
  {
    word: "Contractors",
    image: "/bgv-contractors-hero.jpg",
    candidate: {
      name: "Vikas Sahu",
      dob: "12-08- 1988"
    },
    verifications: [
      {
        icon: UserCheck,
        title: "Identity Verification",
        subtitle: "Voter ID"
      },
      {
        icon: MapPin,
        title: "Address Verification",
        subtitle: "Current Address"
      },
      {
        icon: ShieldAlert,
        title: "Criminal Check",
        subtitle: "1 Record"
      }
    ]
  },
  {
    word: "Employees",
    image: "/bgv-hero-professional.jpg",
    candidate: {
      name: "Natasha Doe",
      dob: "07-03- 1991"
    },
    verifications: [
      {
        icon: UserCheck,
        title: "Address verification",
        subtitle: "Current Address"
      },
      {
        icon: Briefcase,
        title: "Employment",
        subtitle: "1 Record"
      }
    ]
  }
];

export default function BGVHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % verificationCategories.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeCategory = verificationCategories[index];

  return (
    <section className="relative bg-[#071B38] min-h-[90vh] pt-28 pb-16 sm:pt-32 md:pt-36 lg:pt-40 md:pb-24 overflow-hidden font-sans flex items-center justify-center">
      {/* Background Radial Orbs & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gold/15 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Heading with Rotating Category Word, Subtitle & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Digital Trust & Compliance Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[62px] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              <span className="inline-block relative mr-3 font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeCategory.word}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {activeCategory.word}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              <span className="font-serif text-white font-bold inline">
                Background Verification
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mb-8">
              Digital Trust Platform Empowering HR managers and service providers through comprehensive Background Verifications (BGV) and checks for ensuring trust and accountability, and for achieving HR/ISO compliance!
            </p>
          </div>

          {/* Right Column: Hero Image & Verification Cards with Dynamic Transitions */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px]">

              {/* Main Dynamic Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] bg-slate-900 border border-white/15 aspect-[4/4.8]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.word}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeCategory.image}
                      alt={`${activeCategory.word} Background Verification`}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B38]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating UI Card 1: Verifications Widget (Top-Left overlay) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.word}
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -10, y: -5 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 -left-6 sm:-left-16 md:-left-28 lg:-left-36 xl:-left-44 bg-[#0b2246]/95 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/15 w-[240px] sm:w-[270px] z-20"
                >
                  <div className="text-[11px] font-semibold text-gold/90 tracking-wider uppercase mb-2.5 flex items-center justify-between">
                    <span>Verifications</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {activeCategory.word}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {activeCategory.verifications.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-6.5 h-6.5 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5 text-gold" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-[12.5px] font-semibold text-white truncate leading-tight">
                                {item.title}
                              </h4>
                              <p className="text-[10.5px] text-slate-400 truncate leading-tight mt-0.5">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                          <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 ml-2 shadow-sm">
                            <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating UI Card 2: Candidate Detail Widget (Bottom-Right overlay) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.word}
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 10, y: 5 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute -bottom-5 -right-2 sm:-right-6 lg:-right-8 bg-[#0b2246]/95 backdrop-blur-xl rounded-2xl p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/15 w-[220px] sm:w-[250px] z-20"
                >
                  <div className="text-[11px] font-semibold text-gold/90 tracking-wider uppercase mb-2">
                    Candidate detail
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div>
                      <span className="text-[10px] text-slate-400 font-medium block">Name</span>
                      <span className="text-[12px] font-bold text-white block truncate">
                        {activeCategory.candidate.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-medium block">Date of birth</span>
                      <span className="text-[12px] font-bold text-white block truncate">
                        {activeCategory.candidate.dob}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
