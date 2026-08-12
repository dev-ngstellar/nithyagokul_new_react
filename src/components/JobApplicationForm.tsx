"use client";

import React, { useState } from "react";
import { UploadCloud, CheckCircle2, Send, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

export default function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("jobTitle", jobTitle);

      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit application");

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-navy/5 text-center"
      >
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy mb-3">Application Received!</h3>
        <p className="text-slate-500 leading-relaxed">
          Thank you for applying for the <span className="font-semibold text-navy">{jobTitle}</span> role. Our HR team will review your profile and get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden">
      {/* Decorative gradient blur behind the form */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

      <div className="mb-5 relative z-10">
        <h3 className="text-lg font-bold text-navy mb-1">Apply for this position</h3>
        <p className="text-slate-500 text-xs leading-relaxed">
          Submit your application for {jobTitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            className="w-full bg-white/50 border border-slate-200/60 rounded-lg px-3 py-2 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-white/50 border border-slate-200/60 rounded-lg px-3 py-2 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full bg-white/50 border border-slate-200/60 rounded-lg px-3 py-2 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm"
            placeholder="+91 99999 99999"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Bio *</label>
          <textarea
            name="bio"
            rows={2}
            required
            className="w-full bg-white/50 border border-slate-200/60 rounded-lg px-3 py-2 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm resize-none"
            placeholder="Tell us a bit about yourself..."
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Upload CV/Resume *</label>
          <div className="relative">
            <input
              type="file"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className={`w-full border border-dashed rounded-lg px-3 py-4 text-center transition-colors ${fileName ? 'border-gold bg-gold/5' : 'border-slate-300 bg-white/50 hover:border-gold hover:bg-white'}`}>
              <UploadCloud className={`w-5 h-5 mx-auto mb-1.5 ${fileName ? 'text-gold' : 'text-slate-400'}`} />
              {fileName ? (
                <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-navy">
                  <Paperclip className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate max-w-[150px]">{fileName}</span>
                </div>
              ) : (
                <>
                  <p className="text-xs font-medium text-navy mb-0.5">Choose file</p>
                  <p className="text-[10px] text-slate-500">PDF, DOC, DOCX</p>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3 rounded-lg hover:bg-[#1a2b4b] shadow-md shadow-navy/10 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2 text-sm"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <>
              Submit Application
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
