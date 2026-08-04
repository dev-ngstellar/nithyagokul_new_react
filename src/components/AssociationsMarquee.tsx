"use client";

import React from "react";
import Image from "next/image";

const associations = [
  { name: "IPR", src: "/associations/IPR.webp" },
  { name: "MCA21", src: "/associations/MCA21.webp" },
  { name: "NASSCOM", src: "/associations/Nasscom.webp" },
];

export default function AssociationsMarquee() {
  // Duplicate the array to create enough items for a seamless infinite loop
  const marqueeItems = [...associations, ...associations, ...associations, ...associations];

  return (
    <div className="w-full relative py-8 mt-4 border-y border-slate-100">

      {/* Section Heading */}
      {/* <div className="mb-6">
        <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-2">
          Trusted Associations & Industry Networks
        </h3>
        <p className="text-slate-500 text-xs md:text-sm max-w-md">
          Recognized and connected with leading regulatory, technology, and intellectual property ecosystems.
        </p>
      </div> */}

      <div className="w-full overflow-hidden relative">
        {/* Inject Custom CSS for Infinite Marquee and Floating */}
        <style dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll-left-assoc {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } 
        }
        .animate-scroll-left-assoc {
          animation: scroll-left-assoc 30s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
        
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-1 { animation: float-subtle 4s ease-in-out infinite; }
        .animate-float-2 { animation: float-subtle 5s ease-in-out infinite 1s; }
        .animate-float-3 { animation: float-subtle 4.5s ease-in-out infinite 2s; }
      `}} />

        {/* Fade Gradients for Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-scroll-left-assoc pause-on-hover gap-6 px-2 py-4">
          {marqueeItems.map((assoc, index) => {
            // Assign different float animation classes for staggered floating
            const floatClass = index % 3 === 0 ? 'animate-float-1' : index % 3 === 1 ? 'animate-float-2' : 'animate-float-3';

            return (
              <div
                key={index}
                className={`${floatClass} flex-shrink-0 w-48 h-28 relative group`}
              >
                <div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] group-hover:border-gold/40 transition-all duration-500 overflow-hidden">
                  {/* Subtle spotlight gradient behind card content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={assoc.src}
                        alt={assoc.name}
                        fill
                        className="object-contain object-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
