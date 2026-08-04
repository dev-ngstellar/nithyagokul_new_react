"use client";

import React from 'react';
import { Calendar, MapPin, Send } from 'lucide-react';
import LeadForm from './LeadForm';
import FadeIn from './animations/FadeIn';
import SlideUp from './animations/SlideUp';

export default function WebDesigningHero() {
  return (
    <section className="bg-white text-slate-900 pt-[120px] pb-[100px] relative overflow-hidden border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content (60%) */}
        <FadeIn className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] text-navy">
            Get Your Website Developed By <br className="hidden md:block" />
            Professionals!
          </h1>
          
          <div className="w-20 h-1 bg-gold rounded-full mt-8 mb-6"></div>

          {/* Badges */}
          <div className="flex flex-wrap gap-8 text-[15px] font-bold text-navy">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-navy" />
              <span>In 1-5 Days</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-navy" />
              <span>From Any where</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Send className="w-5 h-5 text-navy" />
              <span>At a Single Click/Call</span>
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] text-slate-600 max-w-xl leading-[1.8] pt-4">
            Website/Portal for your business is quick, and easy, with Nithya Gokul Associates in simple steps:
          </p>
        </FadeIn>

        {/* Right Content Form (40%) */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
          <SlideUp delay={0.3}>
            <LeadForm 
              allowedServices={["Professional Web Designing", "E-Commerce", "Portal Development"]}
              buttonText="GET STARTED NOW"
              className="!shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            />
          </SlideUp>
        </div>

      </div>
    </section>
  );
}
