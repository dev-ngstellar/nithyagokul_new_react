"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Award } from "lucide-react";
import StatsCounter from "./StatsCounter";

export default function AboutTheFirm() {
  const metrics = [
    { value: 16, label: "Years Experience" },
    { value: 500, label: "Clients Served" },
    { value: 1000, label: "Consultations" },
  ];

  return (
    <section
      className="py-[70px] md:py-[90px] lg:py-[120px] relative overflow-hidden bg-white border-y border-slate-100"
      style={{
        backgroundImage: `
          radial-gradient(circle at left top, rgba(10,40,90,.08), transparent 40%),
          radial-gradient(circle at right bottom, rgba(255,180,0,.05), transparent 40%)
        `
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE: Founder Image Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            {/* The Floating Image Card */}
            <motion.div
              className="relative w-full h-[500px] lg:h-[650px] rounded-[32px] bg-navy border border-gold/30 shadow-[0_0_40px_rgba(10,40,90,0.15)] group"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(10,40,90,0.3)" }}
            >
              {/* Decorative Scale Watermark */}
              <Scale className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-white/5 opacity-50 z-0 pointer-events-none" />

              <Image
                src="/founder_message_leftimage.webp"
                alt="Gokul Rengarajan - Founder"
                fill
                className="object-cover object-top rounded-[32px] z-10"
              />

              {/* Soft glow behind image */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-navy via-navy/20 to-transparent z-10 pointer-events-none" />

              {/* Decorative Corporate Seal Badge */}
              <div className="absolute top-6 right-6 z-20 w-14 h-14 bg-navy/80 backdrop-blur-md rounded-full border border-gold/40 flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-7 h-7 text-gold" />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Founder Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 max-w-[700px] flex flex-col justify-center"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 mb-6 self-start">
              <Award className="w-4 h-4 text-blue" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-navy">Founder&apos;s Message</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[52px] font-bold text-navy leading-[1.1] mb-8">
              Leading With Integrity, Compliance &amp; Trust
            </h2>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative border-l-4 border-gold pl-6 md:pl-8 mb-8"
            >
              <span className="absolute -top-6 -left-4 text-7xl font-serif text-gold/30 leading-none select-none">&quot;</span>
              <p className="font-serif text-[20px] md:text-[24px] text-navy font-medium leading-[1.6]">
                We navigate the complexities of corporate governance so you can focus entirely on scaling your vision.
              </p>
            </motion.div>

            {/* Existing Text Content */}
            <div className="space-y-6 text-[16px] md:text-[17px] lg:text-[18px] text-slate-600 leading-[1.9]">
              <p>
                At Nithya Gokul Associates, we operate at the critical intersection of business strategy and regulatory compliance. Established by corporate secretarial specialists, our firm is built on a foundation of ethical foresight.
              </p>
              <p>
                Whether you are an early-stage startup structuring agreements or a public enterprise facing audit mandates, we protect your boardroom from liability.
              </p>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-200">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="flex flex-col"
                >
                  <StatsCounter
                    value={metric.value}
                    suffix="+"
                    label=""
                    textClassName="!text-[32px] md:!text-[40px] font-serif font-bold text-navy leading-none"
                  />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mt-2">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
