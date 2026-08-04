"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    title: "100% Legal Safeguards",
    benefits: [
      "Zero structural compliance risks",
      "Double-vetted recommendations",
      "Absolute regulatory protection"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Dedicated Specialists",
    benefits: [
      "Fellowship-qualified secretaries",
      "Expert legal advisory directors",
      "Direct executive-level access"
    ],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Timely Approvals",
    benefits: [
      "Swift government clearances",
      "Streamlined digital pathways",
      "Pre-empted regulatory queries"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Statutory Excellence",
    benefits: [
      "Premium governance benchmarks",
      "Rigorous board administration",
      "Comprehensive audit mandates"
    ],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial setup
    gsap.set(imagesRef.current.slice(1), { opacity: 0, scale: 1.2, filter: "blur(10px)" });
    gsap.set(imagesRef.current[0], { opacity: 1, scale: 1, filter: "blur(0px)" });

    gsap.set(contentRef.current.slice(1), { opacity: 0, y: 100 });
    gsap.set(contentRef.current[0], { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // Reduced from 400% to 200% to make scrolling much faster
        scrub: 0.5,    // Tighter scrub responsiveness
        pin: true,
      }
    });

    // Animate progress bar
    tl.to(progressRef.current, {
      scaleY: 1,
      ease: "none",
      duration: scenes.length - 1
    }, 0);

    // Sequence the scenes
    for (let i = 0; i < scenes.length - 1; i++) {
      const nextIndex = i + 1;

      tl.to(imagesRef.current[i], {
        opacity: 0,
        scale: 1.1,
        filter: "blur(5px)",
        duration: 1,
        ease: "power2.inOut"
      }, `transition${i}`)

        .to(contentRef.current[i], {
          opacity: 0,
          y: -100,
          duration: 1,
          ease: "power2.inOut"
        }, `transition${i}`)

        .to(imagesRef.current[nextIndex], {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.inOut"
        }, `transition${i}`)

        .to(contentRef.current[nextIndex], {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut"
        }, `transition${i}`);

      // Pause at each scene to let the user read
      if (i < scenes.length - 2) {
        tl.to({}, { duration: 0.5 });
      }
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#0a192f] overflow-hidden">

      {/* Background Images Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {scenes.map((scene, i) => (
          <div
            key={i}
            ref={el => { if (el) imagesRef.current[i] = el; }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <Image
              src={scene.image}
              alt={scene.title}
              fill
              className="object-cover object-center"
              priority={i === 0}
            />
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
            <div className="absolute inset-0 bg-navy/30" />
          </div>
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-[1280px] mx-auto px-6 flex flex-col pt-[70px] md:pt-[80px] lg:pt-[100px] pb-8 md:pb-10 lg:pb-12">

        {/* Sticky Header */}
        <div className="mb-4 lg:mb-6">
          <SectionHeading
            dark
            badge="Why Choose Us"
            title="Engineered For Modern Business Compliance"
            subtitle="Discover how Nithya Gokul Associates stands out as your strategic compliance advisory."
          />
        </div>

        {/* Scroll Content Area */}
        <div className="relative flex-grow flex items-center pb-10 md:pb-16 lg:pb-20">

          {/* Progress Track */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-white/10 rounded-full hidden md:block">
            <div
              ref={progressRef}
              className="w-full h-full bg-gold rounded-full origin-top scale-y-0"
            />
          </div>

          <div className="relative w-full max-w-xl md:pl-12 grid" style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
            {scenes.map((scene, i) => (
              <div
                key={i}
                ref={el => { if (el) contentRef.current[i] = el; }}
                style={{ gridColumn: 1, gridRow: 1 }}
                className="w-full p-6 lg:p-8 rounded-[24px] bg-[#0a192f]/40 backdrop-blur-2xl border border-white/10 shadow-2xl will-change-transform"
              >
                {/* Scene Indicator */}
                <div className="text-gold font-serif text-5xl opacity-20 absolute top-5 right-6 pointer-events-none select-none">
                  0{i + 1}
                </div>

                <h3 className="font-serif text-[22px] lg:text-[28px] font-bold text-white leading-tight mb-4">
                  {scene.title}
                </h3>

                <div className="space-y-3 mb-6">
                  {scene.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3.5">
                      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-slate-200 text-sm md:text-[15px] lg:text-[16px] leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link href="/contact" className="inline-flex items-center gap-3 text-white font-semibold text-sm tracking-wide group/link">
                    <span className="relative">
                      Connect With Us
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-gold transition-colors duration-300 border border-white/10 group-hover/link:border-gold">
                      <ArrowRight className="w-4 h-4 text-white group-hover/link:text-[#0a192f] transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
