import React from 'react';
import {
  Laptop,
  Utensils,
  Building,
  HeartPulse,
  Factory,
  ShoppingCart,
  GraduationCap,
  Landmark
} from 'lucide-react';

const industries = [
  { name: "Information Technology & SaaS", icon: Laptop },
  { name: "Food Processing & QSRs", icon: Utensils },
  { name: "Real Estate & Infrastructure", icon: Building },
  { name: "Healthcare & Pharmaceuticals", icon: HeartPulse },
  { name: "Manufacturing & Logistics", icon: Factory },
  { name: "E-Commerce & Retail Partnerships", icon: ShoppingCart },
  { name: "Education & EdTech", icon: GraduationCap },
  { name: "Financial Services & Wealth Advisory", icon: Landmark },
];

export default function IndustryMarquee() {
  return (
    <div className="w-full overflow-hidden relative py-10">

      {/* Inject Custom CSS for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } /* -50% of the flex container minus gap */
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50% - 1rem)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 80s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 80s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Fade Gradients for Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-6">

        {/* ROW 1: Scrolling Left (Desktop & Mobile) */}
        <div className="flex w-max animate-scroll-left pause-on-hover gap-6 px-3">
          {/* We duplicate the array 3 times to ensure infinite scroll fills large screens */}
          {[...industries, ...industries, ...industries].map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-navy border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-slate-200 font-medium whitespace-nowrap group-hover:text-white transition-colors">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* ROW 2: Scrolling Right (Desktop Only) */}
        <div className="hidden md:flex w-max animate-scroll-right pause-on-hover gap-6 px-3">
          {/* We duplicate the array 3 times and reverse it for visual variety */}
          {[...industries].reverse().concat([...industries].reverse(), [...industries].reverse()).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-navy border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-slate-200 font-medium whitespace-nowrap group-hover:text-white transition-colors">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
