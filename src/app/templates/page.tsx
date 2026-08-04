import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, LayoutGrid } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import { getDynamicTemplates } from "@/lib/getTemplates";

export const metadata = {
  title: "Templates Collection | Nithya Gokul Associates",
  description: "Browse our production-ready UI website templates dynamically rendered from our file repository.",
};

export default async function TemplatesPage() {
  const templates = await getDynamicTemplates();

  return (
    <div className="min-h-screen bg-navy text-white pt-28 pb-24 px-6 relative overflow-hidden font-sans">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <SlideUp className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            TEMPLATES COLLECTION
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Templates <span className="text-gold">Catalog</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-300 font-sans leading-relaxed">
            Select a template below to view its complete collection of layout screens and responsive designs.
          </p>
        </SlideUp>

        {/* 6 Category Cards Grid - Entire Card wrapped in Link */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {templates.map((template, index) => (
            <SlideUp key={template.slug} delay={index * 0.08}>
              <Link
                href={`/templates/${template.slug}`}
                className="group relative bg-slate-900/80 border border-white/10 rounded-[24px] overflow-hidden gloss-card-dark transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(254,179,36,0.15)] flex flex-col h-full cursor-pointer block outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {/* Dynamic First Image Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={template.thumbnail}
                    alt={template.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Screens count badge */}
                  <span className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-medium border border-white/10 flex items-center gap-1.5 backdrop-blur-md pointer-events-none">
                    <LayoutGrid className="w-3.5 h-3.5 text-gold" />
                    {template.imageCount} Screens
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors leading-snug">
                      {template.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2.5 font-sans">
                      {template.description}
                    </p>
                  </div>

                  {/* View Template Button */}
                  <div className="pt-2">
                    <div className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3 rounded-xl bg-gold text-navy font-bold text-sm shadow-md group-hover:bg-yellow-400 transition-all duration-300">
                      <span>View Template</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </SlideUp>
          ))}
        </div>
      </div>
    </div>
  );
}
