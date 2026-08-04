import React from "react";
import Link from "next/link";
import { openPositions } from "@/data/mockData";
import { BookOpen, Users, TrendingUp, Award, MapPin, Briefcase, Clock, ChevronRight, Building2, Coffee, Heart } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Careers | Join Our Elite Corporate Advisory Team",
  description: "Build your expertise in corporate governance. Explore career opportunities and trainee recruitment at Nithya Gokul Associates.",
};

const benefits = [
  {
    icon: <BookOpen className="w-6 h-6 text-gold" />,
    title: "Continuous Learning",
    desc: "Access to premium ICSI resources, internal seminars, and direct mentorship from industry veterans."
  },
  {
    icon: <Users className="w-6 h-6 text-gold" />,
    title: "Elite Network",
    desc: "Collaborate with high-growth startups, established corporations, and top-tier institutional investors."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-gold" />,
    title: "Fast-Track Growth",
    desc: "Clear performance-based progression paths from trainee to senior advisory roles."
  },
  {
    icon: <Award className="w-6 h-6 text-gold" />,
    title: "Impactful Work",
    desc: "Work on complex restructurings, M&A due diligence, and critical corporate governance projects."
  }
];

export default function CareersPage() {
  return (
    <div className="block w-full bg-slate-50 font-sans">

      {/* 1. HERO */}
      <section className="relative bg-[#0a192f] pt-[70px] pb-[100px] md:pt-[90px] md:pb-[140px] lg:pt-[140px] lg:pb-[300px] overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] mix-blend-screen" />
        </div>

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-widest text-gold uppercase mb-8 shadow-2xl">
              <Building2 className="w-3.5 h-3.5" />
              <span>Shape The Future of Business</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Build A Legacy in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Corporate Advisory.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-12">
              Join an elite firm of practitioners defining the standards of compliance, governance, and business structuring. Accelerate your career with us.
            </p>

            <Link href="#open-positions" className="px-8 py-4 rounded-full bg-gold text-navy font-semibold text-sm hover:bg-yellow-400 transition-colors duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              View Open Roles
            </Link>
          </FadeIn>
        </div>
        <div className="absolute -bottom-[2px] left-0 right-0 h-32 bg-slate-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* 2. WHY JOIN NGA (Perks & Benefits) */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] max-w-[1280px] mx-auto px-6">
        <SectionHeading
          align="center"
          badge="The NGA Advantage"
          title="Why Build Your Professional Path Here?"
          subtitle="We believe in creating a space where corporate law experts and trainees can perform detailed legal work while growing their skills."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-gold/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full group cursor-default">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 3. OPEN POSITIONS */}
      <section id="open-positions" className="py-[70px] md:py-[100px] lg:py-[140px] bg-white border-y border-slate-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <SectionHeading
            align="center"
            badge="Careers"
            title="Job Positions"
            subtitle="Explore our current openings. Don't see a fit? Send us an open application."
          />
          <div className="mt-16 space-y-6">
            {openPositions.map((job) => (
              <SlideUp key={job.id}>
                <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-10 hover:border-gold/20 hover:shadow-xl hover:bg-white transition-all duration-500 group flex flex-col md:flex-row md:items-center justify-between gap-8">

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-navy text-white text-xs font-semibold rounded-full tracking-wide">
                        {job.department}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-slate-400" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        {job.experience}
                      </div>
                    </div>

                    {job.skills && (
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="md:border-l md:border-slate-200 md:pl-8 md:py-4 shrink-0">
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-white border border-slate-200 text-navy font-semibold rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM CULTURE */}
      <section className="py-[70px] md:py-[100px] lg:py-[140px] bg-[#0a192f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideUp>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Culture of Excellence</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              At Nithya Gokul Associates, we don&apos;t just process paperwork; we provide strategic advisory. Our team culture is built on deep research, ethical practice, and a passion for simplifying complex corporate laws for our clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Coffee className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1">Work-Life Balance</h4>
                  <p className="text-slate-400 text-sm">We respect your time. High performance doesn&apos;t mean burnout.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1">Inclusive Environment</h4>
                  <p className="text-slate-400 text-sm">A flat hierarchy where the best ideas win, regardless of your title.</p>
                </div>
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.2} className="relative h-[400px] lg:h-[500px] rounded-[40px] overflow-hidden group">
            {/* Using a premium placeholder image for office culture */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
              alt="Office Culture"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[40px]" />
          </SlideUp>

        </div>
      </section>

    </div>
  );
}
