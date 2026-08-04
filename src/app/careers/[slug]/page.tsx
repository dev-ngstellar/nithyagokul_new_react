import React from "react";

import { notFound } from "next/navigation";
import { openPositions } from "@/data/mockData";
import { MapPin, Briefcase, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import JobApplicationForm from "@/components/JobApplicationForm";
import FadeIn from "@/components/animations/FadeIn";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return openPositions.map((job) => ({
    slug: job.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const job = openPositions.find((j) => j.id === resolvedParams.slug);
  if (!job) return { title: "Job Not Found" };
  return {
    title: `${job.title} | Careers | Nithya Gokul Associates`,
    description: job.description,
  };
}

export default async function JobDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const job = openPositions.find((j) => j.id === resolvedParams.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/careers" className="hover:text-navy transition-colors">Careers</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy">{job.department}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Content */}
          <div className="w-full space-y-10">
            
            {/* Header Section */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">{job.title}</h1>
              
              <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-md">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-md">
                  <Briefcase className="w-3.5 h-3.5 text-gold" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-md">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>{job.experience}</span>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Description */}
            <section>
              <h2 className="font-semibold text-lg text-navy mb-3">About The Role</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                {job.description}
              </p>
            </section>

            {/* Requirements (Chips) */}
            <section>
              <h2 className="font-semibold text-lg text-navy mb-4">Requirements</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills && job.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-md text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Responsibilities (Timeline) */}
            <section>
              <h2 className="font-semibold text-lg text-navy mb-6">Responsibilities</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent pl-8 md:pl-0">
                {job.requirements.slice(0, 4).map((req, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* Timeline Node */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-slate-100 group-hover:bg-gold transition-colors text-slate-400 group-hover:text-white shadow shrink-0 absolute left-[-32px] md:relative md:left-auto md:mx-auto">
                      <span className="text-[10px] font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Content Card */}
                    <div className="w-full md:w-[calc(50%-2rem)] p-4 rounded-xl bg-white border border-slate-100 shadow-sm group-hover:border-gold/30 transition-all">
                      <p className="text-sm text-slate-600 leading-relaxed">{req}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sticky Form */}
          <div className="w-full relative lg:sticky lg:top-24">
            <JobApplicationForm jobTitle={job.title} />
          </div>

        </div>
      </div>
    </div>
  );
}
