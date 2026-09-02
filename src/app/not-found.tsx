import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileText, Landmark, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Nithya Gokul Associates",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-16 px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-sm text-center space-y-8">
        
        {/* Badge / Code */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold/10 text-navy font-mono font-bold text-sm">
          HTTP STATUS 404
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            The page you requested does not exist, has been removed, or is no longer available.
          </p>
        </div>

        {/* Quick Links */}
        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
            You might be looking for
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/services"
              className="p-4 rounded-xl bg-slate-50 hover:bg-gold/10 border border-slate-100 hover:border-gold/30 transition-all group"
            >
              <Landmark className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-navy text-sm">Our Services</div>
              <div className="text-xs text-slate-500">Corporate & Legal</div>
            </Link>

            <Link
              href="/registrations"
              className="p-4 rounded-xl bg-slate-50 hover:bg-gold/10 border border-slate-100 hover:border-gold/30 transition-all group"
            >
              <FileText className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-navy text-sm">Registrations</div>
              <div className="text-xs text-slate-500">FSSAI, IEC, ISO</div>
            </Link>

            <Link
              href="/contact"
              className="p-4 rounded-xl bg-slate-50 hover:bg-gold/10 border border-slate-100 hover:border-gold/30 transition-all group"
            >
              <PhoneCall className="w-5 h-5 text-gold mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-navy text-sm">Contact Us</div>
              <div className="text-xs text-slate-500">Get Legal Support</div>
            </Link>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy hover:bg-navy/90 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
