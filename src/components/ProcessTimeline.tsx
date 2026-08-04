"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "lucide-react";

export interface TimelineStep {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface ProcessTimelineProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  steps: TimelineStep[];
  trustStripItems?: string[];
}

export default function ProcessTimeline({
  badge,
  title,
  description,
  steps,
  trustStripItems,
}: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  // Transform scroll progress for connecting line scaling
  const scaleX = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-slate-50 py-[70px] md:py-[90px] lg:py-[120px] overflow-hidden border-y border-slate-200"
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue/5 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gold/5 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="px-4 py-1.5 bg-blue/10 border border-blue/20 text-blue text-xs font-semibold uppercase tracking-widest rounded-full">
            {badge}
          </span>
          <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[52px] font-bold text-navy leading-[1.1] max-w-3xl">
            {title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-slate-600 max-w-2xl leading-[1.8]">
            {description}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex justify-center items-center py-8">

          {/* Connecting Line - Desktop (Horizontal) */}
          <div className="hidden lg:block absolute top-[130px] left-[15%] right-[15%] h-[3px] bg-slate-200 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-blue to-gold shadow-[0_0_10px_rgba(212,175,55,0.3)]"
              style={{ scaleX: scaleX, transformOrigin: "left" }}
            />
          </div>

          {/* Connecting Line - Mobile/Tablet (Vertical) */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-[40px] bottom-[40px] w-[3px] bg-slate-200 z-0">
            <motion.div
              className="w-full bg-gradient-to-b from-blue to-gold shadow-[0_0_10px_rgba(212,175,55,0.3)]"
              style={{ scaleY: scaleY, transformOrigin: "top" }}
            />
          </div>

          {/* Steps Stagger Cards Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10 w-full max-w-xs lg:max-w-none justify-items-center"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative flex flex-col items-center w-full"
              >
                {/* Card Container */}
                <div className="relative z-10 w-[280px] h-[260px] p-8 flex flex-col justify-between items-start bg-white rounded-[24px] border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[10px] hover:border-gold hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] group select-none">

                  {/* Large Watermark Number (Top Right) */}
                  <span className="absolute top-4 right-6 font-serif font-bold text-[72px] leading-none text-navy opacity-[0.08] pointer-events-none select-none">
                    {step.num}
                  </span>

                  {/* Icon Holder */}
                  <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center border border-slate-100 bg-slate-50 text-navy transition-all duration-500 ease-out group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:text-gold group-hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
                    {step.icon}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2 mt-4">
                    <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Strip Below */}
        {trustStripItems && trustStripItems.length > 0 && (
          <div className="pt-8 border-t border-slate-200 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm font-semibold text-slate-600">
            {trustStripItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
