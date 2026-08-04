"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, ChevronDown, FileText,
  Building2, FileCheck, BriefcaseBusiness, ShieldCheck, Scale, ArrowRight,
  Utensils, Globe, Handshake, BarChart3
} from "lucide-react";

/* ─────────────────────────────────────────────
   MEGA-MENU DATA
───────────────────────────────────────────── */
const megaMenuCategories = [
  {
    icon: Building2,
    title: "Company Incorporation",
    description: "Start your business with complete incorporation and registration support.",
    href: "/services/company-incorporation"
  },
  {
    icon: FileCheck,
    title: "Corporate Compliance",
    description: "Corporate governance, ROC compliance and statutory services.",
    href: "/services/corporate-compliance"
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Advisory",
    description: "Legal documentation and strategic business advisory.",
    href: "/services/corporate-advisory"
  },
  {
    icon: ShieldCheck,
    title: "Trademark & Governance",
    description: "Protect your business and ensure responsible governance.",
    href: "/services/trademark-governance"
  },
  {
    icon: Handshake,
    title: "Business Sale & Investment",
    description: "Helping entrepreneurs buy, sell, invest and grow businesses with confidence.",
    href: "/services/business-sale-investment"
  },
  {
    icon: Globe,
    title: "FEMA & Foreign Investment",
    description: "Cross-border investment advisory and FEMA compliance services.",
    href: "/services/fema-foreign-investment"
  },
  {
    icon: BarChart3,
    title: "Listed Company Services",
    description: "SEBI compliance, stock exchange filings and listed company advisory.",
    href: "/services/listed-company-services"
  },
  {
    icon: Scale,
    title: "Litigation & Business Exit",
    description: "Legal proceedings, restructuring and business closure support.",
    href: "/services/litigation-business-exit"
  },
];

/* ─────────────────────────────────────────────
   HEADER COMPONENT
───────────────────────────────────────────── */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRegistrationsOpen, setMobileRegistrationsOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  const prevPathname = React.useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setIsOpen(false);
      setActiveDropdown(null);
      setMobileServicesOpen(false);
      setMobileRegistrationsOpen(false);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  const registrationItems = [
    {
      icon: Utensils,
      title: "Food License (FSSAI)",
      description: "Get your FSSAI registration to legally operate your food business.",
      href: "/registrations/fssai-license"
    },
    {
      icon: Globe,
      title: "Import/Export Code (IE Code)",
      description: "Obtain your IE Code for international trade and customs clearance.",
      href: "/registrations/ie-code"
    },
  ];

  const isServicesActive = megaMenuCategories.some((cat) => pathname === cat.href);
  const isRegistrationsActive = registrationItems.some((item) => pathname === item.href);

  const otherLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Trademark & IP", href: "/trademark" },
    { name: "Careers", href: "/careers" },
    { name: "Template", href: "/templates" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md h-16 md:h-20 ${scrolled
          ? "bg-navy/55 border-b border-white/10 shadow-xl shadow-navy/20"
          : "bg-navy/100 border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full relative gap-2.5">
          {/* Logo */}
          <div className="flex items-center h-full">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50">
              <Link href="/" className="flex items-center group shrink-0">
                <Image
                  src="/nga_logo.png"
                  alt="Nithya Gokul Associates"
                  width={1080}
                  height={564}
                  priority
                  className="object-contain transition-all duration-300 w-auto h-16 sm:h-20 md:h-24 lg:h-28"
                />
              </Link>
            </div>
            <div className="transition-all duration-300 shrink-0 w-32 sm:w-40 md:w-48 lg:w-56" />
          </div>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center lg:gap-3 xl:gap-6">

            {/* Home & About Us */}
            {["Home", "About Us"].map((name) => {
              const link = otherLinks.find((l) => l.name === name)!;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={name}
                  href={link.href}
                  className={`font-sans text-xs xl:text-sm font-medium tracking-wide transition-colors py-2 whitespace-nowrap ${isActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                    }`}
                >
                  {name}
                </Link>
              );
            })}

            {/* ── SERVICES MEGA MENU ── */}
            <div
              ref={megaMenuRef}
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 font-sans text-xs xl:text-sm font-medium tracking-wide transition-colors py-2 cursor-pointer whitespace-nowrap ${isServicesActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                  }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-max max-w-[860px]"
                  >
                    <div className="bg-[#071B38] border border-white/10 rounded-[18px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
                      {/* ── 4×2 Category Grid ── */}
                      <div className="grid grid-cols-4 gap-2 p-5 pb-3">
                        {megaMenuCategories.map((cat) => {
                          const Icon = cat.icon;
                          const isActive = pathname === cat.href;
                          return (
                            <Link
                              href={cat.href}
                              key={cat.title}
                              className="group px-4 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.04] hover:shadow-[0_4px_20px_-4px_rgba(197,155,80,0.15)] cursor-pointer block"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                  <Icon className="w-4 h-4 text-gold" />
                                </div>
                                <h3 className={`text-[12px] font-bold leading-tight group-hover:text-gold transition-colors ${isActive ? "text-gold" : "text-white"}`}>
                                  {cat.title}
                                </h3>
                              </div>
                              <p className="text-[10.5px] text-slate-400 leading-[1.6]">
                                {cat.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>

                      {/* ── Full-width Need Help CTA strip ── */}
                      <div className="mx-5 mb-5 mt-1 border-t border-white/[0.06] pt-3">
                        <Link
                          href="/contact#consultation"
                          className="group flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-200 hover:bg-white/[0.03] hover:border-blue/30 cursor-pointer bg-gradient-to-r from-blue/10 via-blue/5 to-transparent border border-blue/10"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center shrink-0 group-hover:bg-blue/20 transition-colors">
                              <Phone className="w-4 h-4 text-blue" />
                            </div>
                            <div>
                              <h3 className="text-[13px] font-bold text-white group-hover:text-blue transition-colors leading-tight">
                                Need Help?
                              </h3>
                              <p className="text-[11px] text-slate-400 leading-snug">
                                Unsure where to start? Get a custom roadmap from our experts.
                              </p>
                            </div>
                          </div>
                          <div className="text-[11px] font-semibold text-blue flex items-center gap-1 group-hover:gap-2 transition-all whitespace-nowrap shrink-0">
                            Free Consultation <ArrowRight className="w-3 h-3" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── REGISTRATIONS dropdown ── */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("registrations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 font-sans text-xs xl:text-sm font-medium tracking-wide transition-colors py-2 cursor-pointer whitespace-nowrap ${isRegistrationsActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                  }`}
              >
                Registrations
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "registrations" ? "rotate-180" : ""
                    }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "registrations" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-max max-w-[600px]"
                  >
                    <div className="bg-[#071B38] border border-white/10 rounded-[18px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
                      <div className="grid grid-cols-2 gap-0 p-5">
                        {registrationItems.map((item, idx) => {
                          const Icon = item.icon;
                          const isLastCol = idx === registrationItems.length - 1;
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              href={item.href}
                              key={item.title}
                              className={`group px-5 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.04] cursor-pointer block ${!isLastCol ? "border-r border-white/[0.07]" : ""
                                }`}
                            >
                              <div className="flex items-center gap-2.5 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                  <Icon className="w-4 h-4 text-gold" />
                                </div>
                                <h3 className={`text-[13px] font-bold leading-tight group-hover:text-gold transition-colors ${isActive ? "text-gold" : "text-white"}`}>
                                  {item.title}
                                </h3>
                              </div>
                              <p className="text-[11px] text-slate-400 leading-[1.6]">
                                {item.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining simple links: Trademark & IP -> Careers -> Template -> Blog -> Contact Us */}
            {["Trademark & IP", "Careers", "Template", "Blog", "Contact Us"].map((name) => {
              const link = otherLinks.find((l) => l.name === name)!;
              const isActive = pathname === link.href || (link.name === "Template" && pathname.startsWith("/templates"));
              return (
                <Link
                  key={name}
                  href={link.href}
                  className={`font-sans text-xs xl:text-sm font-medium tracking-wide transition-colors py-2 whitespace-nowrap ${isActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                    }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center lg:gap-3 xl:gap-5 shrink-0">
            <a
              href="tel:+919710909727"
              className="flex items-center gap-1 text-white/90 hover:text-blue transition-colors font-sans text-xs xl:text-sm font-medium whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-blue shrink-0" />
              <span>+91 97109 09727</span>
            </a>
            <Link
              href="/contact#consultation"
              className="px-3 xl:px-5 py-2.5 bg-blue text-white rounded-lg font-sans text-xs xl:text-sm font-semibold hover:bg-blue/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue/20 whitespace-nowrap"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy z-40 shadow-2xl flex flex-col p-6 pt-24 border-l border-white/10"
          >
            <div className="flex-1 overflow-y-auto space-y-1 pr-1">

              {/* Home & About */}
              {[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block text-base font-medium py-3 px-3 rounded-lg transition-colors ${isActive ? "text-gold bg-white/5" : "text-white/90 hover:text-gold hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* ── SERVICES Accordion ── */}
              <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-medium transition-colors ${isServicesActive || mobileServicesOpen ? "text-gold bg-white/5" : "text-white/90 hover:text-gold"
                    }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-white/[0.02] border-t border-white/[0.06]"
                    >
                      <div className="p-3 space-y-1">
                        {megaMenuCategories.map((cat) => {
                          const Icon = cat.icon;
                          const isActive = pathname === cat.href;
                          return (
                            <Link
                              key={cat.title}
                              href={cat.href}
                              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors border border-white/[0.06] rounded-xl overflow-hidden ${isActive ? "text-gold bg-white/[0.04]" : "text-white/80 hover:text-gold hover:bg-white/[0.04]"
                                }`}
                            >
                              <div className="w-6 h-6 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                                <Icon className="w-3.5 h-3.5 text-gold" />
                              </div>
                              <span className="flex-1 text-left">{cat.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── REGISTRATIONS Accordion ── */}
              <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileRegistrationsOpen(!mobileRegistrationsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-medium transition-colors ${isRegistrationsActive || mobileRegistrationsOpen ? "text-gold bg-white/5" : "text-white/90 hover:text-gold"
                    }`}
                >
                  Registrations
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileRegistrationsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileRegistrationsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-white/[0.02] border-t border-white/[0.06]"
                    >
                      <div className="p-3 space-y-1">
                        {registrationItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors border border-white/[0.06] rounded-xl overflow-hidden ${isActive ? "text-gold bg-white/[0.04]" : "text-white/80 hover:text-gold hover:bg-white/[0.04]"
                                }`}
                            >
                              <div className="w-6 h-6 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                                <Icon className="w-3.5 h-3.5 text-gold" />
                              </div>
                              <span className="flex-1 text-left">{item.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining links in mobile drawer */}
              {["Trademark & IP", "Careers", "Template", "Blog", "Contact Us"].map((name) => {
                const link = otherLinks.find((l) => l.name === name)!;
                const isActive = pathname === link.href || (link.name === "Template" && pathname.startsWith("/templates"));
                return (
                  <Link
                    key={name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium py-3 px-3 rounded-lg transition-colors ${isActive ? "text-gold bg-white/5" : "text-white/90 hover:text-gold hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
              <a
                href="tel:+919710909727"
                className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue" />
                <span>+91 97109 09727</span>
              </a>
              <Link
                href="/contact#consultation"
                className="block text-center py-3 bg-blue text-white rounded-lg font-semibold hover:bg-blue/90 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS variable for mega menu top offset */}
      <style>{`
        :root { --header-h: 80px; }
        @media (max-width: 767px) { :root { --header-h: 64px; } }
      `}</style>
    </>
  );
}
