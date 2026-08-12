"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroPanel {
  id: string;
  num: string;
  title: string;
  desc: string;
  href: string;
  bgImage: string;
}

export default function InteractiveHero() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const panels: HeroPanel[] = [
    {
      id: "panel-1",
      num: "01",
      title: "Company Registration",
      desc: "Establish your corporate entity with complete regulatory compliance and premium legal structural frameworks.",
      href: "/registrations/private-limited-registration",
      bgImage: "/hero-banner/company-reg.webp",
    },
    {
      id: "panel-2",
      num: "02",
      title: "Secretarial Consulting",
      desc: "Advising board administration, corporate compliance audits, and legal counsel overseen by CS practitioners.",
      href: "/services/secretarial-consulting",
      bgImage: "/hero-banner/sec-advisory.webp",
    },
    {
      id: "panel-3",
      num: "03",
      title: "Trademark & IP Registry",
      desc: "Protect your brand identity, secure name marks, register design patents, and enforce copyright defenses.",
      href: "/trademark",
      bgImage: "/hero-banner/trademar_and_ip_registry.webp",
    },
    {
      id: "panel-4",
      num: "04",
      title: "Business Valuation & Insolvency",
      desc: "Certified IBBI business, share, and asset valuations alongside statutory insolvency and debt restructurings.",
      href: "/services/business-valuation-insolvency",
      bgImage: "/hero-banner/business_valuation.webp",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [mobileIdx, setMobileIdx] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePanelInteraction = (idx: number) => {
    if (isMobile) {
      setMobileIdx(idx);
    } else {
      setHoveredIdx(idx);
    }
  };

  if (!mounted) {
    return (
      <section className="relative w-full h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] min-h-[550px] max-h-[900px] overflow-hidden bg-navy select-none" />
    );
  }

  return (
    <section className="relative w-full h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] min-h-[550px] max-h-[900px] overflow-hidden bg-navy select-none">
      {/* Background Images Layer with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {panels.map((panel, idx) => {
          const isVisible = isMobile
            ? mobileIdx === idx
            : hoveredIdx === idx || (hoveredIdx === null && idx === 0);
          return (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${panel.bgImage})` }}
            />
          );
        })}
        {/* Dark Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-navy/20 z-1" />
        <div className="absolute inset-0 bg-black/5 z-1" />
      </div>

      {/* Floating Vertical Panels Container (Desktop) or Premium Slide Container (Mobile) */}
      {!isMobile ? (
        <div
          onMouseLeave={() => setHoveredIdx(null)}
          className="absolute inset-0 z-10 flex flex-row h-full w-full"
        >
          {panels.map((panel, idx) => {
            const isActive = hoveredIdx === idx;
            const currentActiveIdx = hoveredIdx;

            return (
              <motion.div
                key={panel.id}
                onMouseEnter={() => handlePanelInteraction(idx)}
                animate={{
                  width: "25%",
                  borderColor: "rgba(255, 255, 255, 0.1)"
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full border-r flex flex-col justify-end overflow-hidden"
              >
                {/* Cinematic panel background overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                {/* Panel Content Wrapper */}
                <div className="relative z-20 w-full flex flex-col justify-end h-full">
                  {/* Unified Bottom Card Container with Animated Gloss Matte Background */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)",
                      backdropFilter: isActive ? "blur(14px)" : "blur(0px)",
                      borderColor: isActive ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                      paddingLeft: isActive ? "2.25rem" : "1.75rem",
                      paddingRight: isActive ? "2.25rem" : "1.75rem",
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full py-6 md:py-8 lg:py-10 space-y-3 md:space-y-4 border-t border-transparent z-30"
                  >
                    {/* Number & Fraction Indicator */}
                    <div className="flex items-baseline gap-1.5 text-white/45 text-xs font-semibold tracking-wider font-sans">
                      <span className="text-white text-sm font-serif">{panel.num}</span>
                      <span>/04</span>
                    </div>

                    {/* Divider Line */}
                    <motion.div
                      className="h-0.5 bg-gold"
                      animate={{ width: isActive ? "60px" : "30px" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Title */}
                    <motion.h3
                      animate={{
                        opacity: currentActiveIdx !== null && !isActive ? 0.35 : 1,
                      }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="font-serif text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight"
                    >
                      {panel.title}
                    </motion.h3>

                    {/* Expanded Description & Button Details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden space-y-3 md:space-y-4"
                    >
                      <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-md pt-1">
                        {panel.desc}
                      </p>

                      <div className="pt-1">
                        <Link
                          href={panel.href}
                          className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-blue text-white rounded-none text-xs font-semibold hover:bg-blue/90 transition-colors tracking-wider uppercase"
                        >
                          <span>Explore Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* Mobile slider container using opacity + scale animations */
        <div className="absolute inset-0 z-10 flex flex-col justify-end w-full h-full pb-20">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none" />

          <div className="relative z-20 w-full min-h-[320px] px-6 flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIdx}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col space-y-4"
              >
                {/* Number Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="flex items-baseline gap-1.5 text-white/45 text-xs font-semibold tracking-wider font-sans"
                >
                  <span className="text-white text-sm font-serif">{panels[mobileIdx].num}</span>
                  <span>/04</span>
                </motion.div>

                {/* Divider Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="h-0.5 bg-gold"
                />

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="font-serif text-[36px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1]"
                >
                  {panels[mobileIdx].title}
                </motion.h3>

                {/* Description & Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="space-y-6"
                >
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {panels[mobileIdx].desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={panels[mobileIdx].href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue text-white rounded-none text-xs font-semibold tracking-wider uppercase"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Mobile/Tablet Indicator Dots */}
      {isMobile && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {panels.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePanelInteraction(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${mobileIdx === idx ? "bg-gold w-6" : "bg-white/40 w-2 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
