import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";

export default function Footer() {
  const socialLinks = [
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "https://linkedin.com",
      name: "LinkedIn"
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://facebook.com",
      name: "Facebook"
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: "https://instagram.com",
      name: "Instagram"
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.53 12 3.53 12 3.53s-7.53 0-9.388.525a3.003 3.003 0 0 0-2.11 2.108C0 8.02 0 12 0 12s0 3.98.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.47 12 20.47 12 20.47s7.53 0 9.388-.525a3.003 3.003 0 0 0 2.11-2.108C24 15.98 24 12 24 12s0-3.98-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: "https://youtube.com",
      name: "YouTube"
    }
  ];

  return (
    <footer className="relative bg-[#071A3D] text-white py-10 md:py-12 overflow-hidden border-t border-white/10 font-sans">
      {/* Decorative Premium Background Gradients */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4A017]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* SECTION 1: 4-Column Compact Footer Layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* Column 1: Brand Information */}
          <StaggerItem className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/nga_logo.png"
                alt="Nithya Gokul Associates"
                width={200}
                height={100}
                className="object-contain w-auto h-30 sm:h-20"
                priority
              />
            </Link>
            <div className="space-y-1">
              <h3 className="text-base font-semibold tracking-wide text-white">
                Nithya Gokul Associates
              </h3>
              <p className="text-[11px] font-bold text-[#D4A017] uppercase tracking-wider">
                Since 2010
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light max-w-xs">
              Corporate Compliance, Registration, Trademark & Legal Advisory Services.
            </p>
          </StaggerItem>

          {/* Column 2: Services */}
          <StaggerItem className="space-y-4">
            <h4 className="font-serif text-base lg:text-lg font-semibold text-white tracking-wide border-b border-white/10 pb-2 relative uppercase">
              Services
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#D4A017]" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Secretarial Services", href: "/services/secretarial-consulting" },
                { name: "Audit & Due Diligence", href: "/services/secretarial-audit-due-diligence" },
                { name: "Company Formation", href: "/services/company-registration" },
                { name: "Trademark & IP", href: "/trademark" },
                { name: "FSSAI Registration", href: "/registrations/fssai-license" },
                { name: "IEC Registration", href: "/registrations/ie-code" }
              ].map((link, idx) => (
                <li key={idx} className="transition-all duration-200 hover:translate-x-0.5">
                  <Link href={link.href} className="text-slate-300 hover:text-[#D4A017] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Column 3: Quick Links */}
          <StaggerItem className="space-y-4">
            <h4 className="font-serif text-base lg:text-lg font-semibold text-white tracking-wide border-b border-white/10 pb-2 relative uppercase">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#D4A017]" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services/secretarial-consulting" },
                { name: "Registrations", href: "/registrations/fssai-license" },
                { name: "ESG Reporting", href: "/esg-reporting" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" }
              ].map((link, idx) => (
                <li key={idx} className="transition-all duration-200 hover:translate-x-0.5">
                  <Link href={link.href} className="text-slate-300 hover:text-[#D4A017] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Column 4: Contact & Social Icons */}
          <StaggerItem className="space-y-4">
            <h4 className="font-serif text-base lg:text-lg font-semibold text-white tracking-wide border-b border-white/10 pb-2 relative uppercase">
              Contact
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#D4A017]" />
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span>Erode, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href="tel:+9176958 58055" className="hover:text-[#D4A017] transition-colors">
                  +91 76958 58055
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href="mailto:info@nithyagokul.com" className="hover:text-[#D4A017] transition-colors break-all">
                  info@nithyagokul.com
                </a>
              </li>
            </ul>

            {/* Social Icons within Contact Column */}
            <div className="flex gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017] hover:text-[#D4A017] hover:shadow-[0_0_10px_rgba(212,160,23,0.3)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* SECTION 2: Horizontal Statistics */}
        <FadeIn delay={0.2}>
          <div className="py-6 my-8 border-y border-white/10">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300 py-6 px-4 md:px-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 text-center">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl lg:text-3xl font-bold text-[#D4A017]">16+ Years</span>
                  <span className="text-sm text-slate-300 uppercase tracking-wide">Experience</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl lg:text-3xl font-bold text-[#D4A017]">500+</span>
                  <span className="text-sm text-slate-300 uppercase tracking-wide">Clients</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl lg:text-3xl font-bold text-[#D4A017]">1000+</span>
                  <span className="text-sm text-slate-300 uppercase tracking-wide">Consultations</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* SECTION 3: Bottom Bar */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
            <div>
              &copy; 2026 Nithya Gokul Associates
            </div>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-[#D4A017] transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-[#D4A017] transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
}

