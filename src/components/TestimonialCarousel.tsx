"use client";

import React, { useState } from "react";

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/data/mockData";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div className="max-w-4xl mx-auto gloss-card-dark text-white rounded-[24px] p-8 md:p-16 relative overflow-hidden border border-white/10 multi-shadow-premium">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Quote className="w-48 h-48 text-gold" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        {/* Stars */}
        <div className="flex gap-1 justify-center">
          {Array.from({ length: current.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>

        {/* Quote */}
        <p className="font-serif text-lg md:text-2xl italic leading-relaxed text-slate-200">
          &ldquo;{current.quote}&rdquo;
        </p>

        {/* Profile */}
        <div className="space-y-1">
          <h4 className="font-serif text-lg font-bold text-white">{current.name}</h4>
          <p className="text-xs uppercase tracking-widest text-gold font-medium">
            {current.role}, <span className="text-slate-400">{current.company}</span>
          </p>
        </div>

        {/* Nav controls */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
