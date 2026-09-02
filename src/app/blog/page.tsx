import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Calendar, Clock, User, ShieldCheck, Sparkles, TrendingUp, Building2, Landmark } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Blog & Knowledge Hub | Nithya Gokul Associates",
  description:
    "Expert commentary, compliance updates, and guides to help you navigate corporate governance, trademarks, and business operations.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    id: "nithya-gokul-associates-business-journey",
    title: "Building a Business That Lasts: The Journey of Nithya Gokul Associates",
    slug: "nithya-gokul-associates-business-journey",
    href: "/nithya-gokul-associates-business-journey/",
    excerpt:
      "Discover the journey of Nithya Gokul Associates, from a one-person practice to a growing corporate advisory firm built on trust, governance, people, process and technology.",
    category: "Corporate Journey",
    author: "CS Rajmohan Nithya",
    authorRole: "Founder & Practising CS",
    date: "June 1, 2026",
    readTime: "8 min read",
    featured: true,
    image: "/founder_message_leftimage.webp",
  },
  {
    id: "secretarial-audit-guide-2026",
    title: "Complete Guide to Secretarial Audits under Companies Act 2013",
    slug: "secretarial-audit-due-diligence",
    href: "/services/secretarial-audit-due-diligence/",
    excerpt:
      "Understand Section 204 requirements, mandatory audit thresholds, MR-3 form filing, and compliance checklists for public and listed companies.",
    category: "Compliance & Governance",
    author: "NGA Advisory Team",
    authorRole: "Corporate Practice",
    date: "May 20, 2026",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "fssai-license-compliance-roadmap",
    title: "FSSAI Food License Registration: Basic vs State vs Central Guidelines",
    slug: "fssai-license",
    href: "/registrations/fssai-license/",
    excerpt:
      "A complete walkthrough for food business operators on turnover limits, FoSCoS filing procedures, hygiene ratings, and mandatory documentation.",
    category: "Registrations & Licenses",
    author: "NGA Licensing Team",
    authorRole: "Regulatory Affairs",
    date: "May 12, 2026",
    readTime: "5 min read",
    featured: false,
    image: "/FSSAI.webp",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      {/* ─── 1. HERO SECTION (Matches Exact UI Banner Design) ─── */}
      <section className="relative bg-navy text-white py-20 md:py-28 lg:py-32 overflow-hidden text-center">
        {/* Subtle background glow and radial gradient effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-4">
          <FadeIn className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
              KNOWLEDGE &amp; INSIGHTS
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              NGA Knowledge Hub
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Expert commentary, compliance updates, and guides to help you navigate corporate governance, trademarks, and business operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── 2. FEATURED BLOG TILE SECTION ─── */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6">
        <SlideUp className="mb-10">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy">
                Featured Article
              </h2>
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
              Latest Insights
            </span>
          </div>
        </SlideUp>

        {/* Primary Featured Article Card */}
        <SlideUp delay={0.1}>
          <Link
            href={featuredPost.href}
            className="group block bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Image Section */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[380px] bg-slate-100 overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-navy/90 text-gold text-xs font-semibold backdrop-blur-md border border-gold/30">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="hidden lg:flex items-center gap-3 text-xs font-medium text-slate-500">
                    <span className="px-3 py-1 rounded-full bg-gold/10 text-navy font-semibold">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-navy group-hover:text-blue transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                {/* Footer metadata & Action CTA */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-gold font-serif font-bold flex items-center justify-center text-sm border border-gold/30">
                      CS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-navy">{featuredPost.author}</div>
                      <div className="text-xs text-slate-500">{featuredPost.authorRole}</div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SlideUp>
      </section>
    </main>
  );
}
