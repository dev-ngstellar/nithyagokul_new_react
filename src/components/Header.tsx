"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, ChevronDown, FileText,
  Building2, FileCheck, BriefcaseBusiness, ShieldCheck, Scale, ArrowRight,
  Utensils, Globe, Handshake, BarChart3, Ship, Leaf, ClipboardCheck, TrendingUp,
  Users, Award
} from "lucide-react";

/* ─────────────────────────────────────────────
   MEGA-MENU DATA
───────────────────────────────────────────── */
const megaMenuCategories = [
  {
    icon: Building2,
    title: "Company Incorporation",
    description: "Register your Pvt Ltd, LLP, OPC, or any business entity seamlessly.",
    href: "/services/company-incorporation"
  },
  {
    icon: FileCheck,
    title: "Corporate Compliance",
    description: "Annual filings, ROC returns & statutory compliance made easy.",
    href: "/services/corporate-compliance"
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Advisory",
    description: "Strategic advisory on restructuring, M&A & corporate governance.",
    href: "/services/corporate-advisory"
  },
  {
    icon: ShieldCheck,
    title: "Trademark & Governance",
    description: "Protect your brand with trademark registration & governance support.",
    href: "/services/trademark-governance"
  },
  {
    icon: Award,
    title: "Trademark & IP",
    description: "End-to-end trademark search, filing, and intellectual property protection.",
    href: "/trademark"
  },
  {
    icon: Handshake,
    title: "Business Sale & Investment",
    description: "End-to-end support for business acquisitions, sales & investments.",
    href: "/services/business-sale-investment"
  },
  {
    icon: Globe,
    title: "FEMA & Foreign Investment",
    description: "Navigate FEMA regulations for FDI, ODI & cross-border transactions.",
    href: "/services/fema-foreign-investment"
  },
  {
    icon: BarChart3,
    title: "Listed Company Services",
    description: "SEBI compliance, LODR filings & listed company secretarial services.",
    href: "/services/listed-company-services"
  },
  {
    icon: Scale,
    title: "Litigation & Business Exit",
    description: "NCLT matters, winding up, strike-off & business exit strategies.",
    href: "/services/litigation-business-exit"
  },
  {
    icon: ShieldCheck,
    title: "Digital Signature Certificate (DSC)",
    description: "Class 3 DSC for MCA, GST, e-Tendering & Income Tax filings.",
    href: "/services/dsc"
  },
  {
    icon: TrendingUp,
    title: "ESOP & Share-Based Schemes",
    description: "Design & implement ESOP, SWEAT equity & share-based incentive plans.",
    href: "/services/esop"
  },
];

/* ─────────────────────────────────────────────
   HEADER COMPONENT
───────────────────────────────────────────── */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRegistrationsOpen, setMobileRegistrationsOpen] = useState(false);
  const [mobileESGOpen, setMobileESGOpen] = useState(false);
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
      setMobileAboutOpen(false);
      setMobileServicesOpen(false);
      setMobileRegistrationsOpen(false);
      setMobileESGOpen(false);
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
    {
      icon: ClipboardCheck,
      title: "ISO Certification",
      description: "Obtain ISO certifications (ISO 9001, 27001, etc.) for quality & global standards.",
      href: "/registrations/iso"
    },
    {
      icon: Ship,
      title: "ICEGATE Registration",
      description: "Register on ICEGATE for seamless customs e-filing and port connectivity.",
      href: "/registrations/icegate"
    },
    {
      icon: Leaf,
      title: "APEDA Registration",
      description: "Obtain APEDA registration and e-RCMC for exporting agricultural products.",
      href: "/registrations/apeda"
    },
    {
      icon: Globe,
      title: "Legal Entity Identifier (LEI)",
      description: "Acquire a unique 20-digit LEI code for global financial transactions.",
      href: "/registrations/lei"
    },
  ];

  const aboutItems = [
    {
      icon: Users,
      title: "Who We Are",
      description: "Learn about our mission, core values, leadership & advisory excellence.",
      href: "/about"
    },
    {
      icon: BriefcaseBusiness,
      title: "Careers",
      description: "Explore opportunities and join our team of legal & corporate experts.",
      href: "/careers"
    },
  ];

  const isServicesActive = megaMenuCategories.some((cat) => pathname === cat.href || pathname.replace(/\/$/, "") === cat.href);
  const isRegistrationsActive = registrationItems.some((item) => pathname === item.href || pathname.replace(/\/$/, "") === item.href);
  const isAboutActive = aboutItems.some((item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));

  const esgItems = [
    {
      icon: Leaf,
      title: "ESG Reporting",
      description: "End-to-end ESG assessment, strategy, data collection, and verified sustainability reporting.",
      href: "/esg-reporting"
    },
  ];

  const isESGActive = pathname === "/esg-reporting" || pathname.startsWith("/esg-reporting");

  const otherLinks = [
    { name: "Home", href: "/" },
    { name: "Template", href: "/templates" },
    { name: "Background Verification", href: "/background-verification" },
    { name: "Blog", href: "/nithya-gokul-associates-business-journey" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md h-16 md:h-20 ${scrolled
          ? "bg-navy/95 border-b border-white/10 shadow-xl shadow-navy/20"
          : "bg-navy border-b border-transparent"
          }`}
      >
        <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 flex items-center justify-between h-full relative">
          {/* Logo - Large & Prominently Visible */}
          <Link href="/" className="flex items-center group shrink-0 mr-2 xl:mr-4 2xl:mr-6 z-50">
            <Image
              src="/nga_logo.png"
              alt="Nithya Gokul Associates"
              width={1080}
              height={564}
              priority
              className="object-contain transition-all duration-300 w-auto h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-24 max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[340px] py-1"
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden xl:flex items-center justify-center shrink gap-2 xl:gap-3 2xl:gap-5 font-sans">

            {/* Home Link */}
            <Link
              href="/"
              className={`font-sans text-[11.5px] xl:text-[12.5px] 2xl:text-sm font-medium tracking-tight xl:tracking-wide transition-colors py-2 whitespace-nowrap ${pathname === "/" ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                }`}
            >
              Home
            </Link>

            {/* ── ABOUT US DROPDOWN ── */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-0.5 font-sans text-[11.5px] xl:text-[12.5px] 2xl:text-sm font-medium tracking-tight xl:tracking-wide transition-colors py-2 cursor-pointer whitespace-nowrap ${isAboutActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                  }`}
              >
                About Us
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-max min-w-[290px] max-w-[360px]"
                  >
                    <div className="bg-[#071B38] border border-white/10 rounded-[18px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
                      <div className="flex flex-col gap-1 p-3">
                        {aboutItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                          return (
                            <Link
                              href={item.href}
                              key={item.title}
                              onClick={() => setActiveDropdown(null)}
                              className={`group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${isActive
                                ? "bg-white/[0.08] text-gold border border-gold/30 shadow-[0_2px_12px_rgba(212,175,55,0.15)]"
                                : "border border-transparent hover:bg-white/[0.06] hover:shadow-[0_4px_20px_-4px_rgba(197,155,80,0.15)]"
                                }`}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isActive ? "bg-gold text-navy" : "bg-gold/10 group-hover:bg-gold/20 text-gold"
                                }`}>
                                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-navy" : "text-gold"}`} />
                              </div>
                              <div className="min-w-0">
                                <h3 className={`text-[12.5px] leading-tight transition-colors ${isActive ? "text-gold font-bold" : "text-white group-hover:text-gold font-semibold"}`}>
                                  {item.title}
                                </h3>
                                <p className="text-[10.5px] leading-snug text-slate-400 mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── SERVICES MEGA MENU ── */}
            <div
              ref={megaMenuRef}
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-0.5 font-sans text-[11.5px] xl:text-[12.5px] 2xl:text-sm font-medium tracking-tight xl:tracking-wide transition-colors py-2 cursor-pointer whitespace-nowrap ${isServicesActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                  }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""
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
                    className="fixed top-[var(--header-h)] left-1/2 -translate-x-1/2 mt-0 z-50 w-[95vw] max-w-[1240px]"
                  >
                    <div className="bg-[#071B38] border border-white/10 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
                      {/* ── Row 1 & 2: 4-Column Grid (8 items = 2 full rows) ── */}
                      <div className="grid grid-cols-4 gap-x-3 gap-y-2 p-4 pb-2">
                        {megaMenuCategories.slice(0, 8).map((cat) => {
                          const Icon = cat.icon;
                          const isActive = pathname === cat.href || pathname.replace(/\/$/, "") === cat.href;
                          return (
                            <Link
                              href={cat.href}
                              key={cat.title}
                              onClick={() => setActiveDropdown(null)}
                              className={`group flex items-start gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${isActive
                                ? "bg-white/[0.08] text-gold border border-gold/30"
                                : "border border-transparent hover:bg-white/[0.05]"
                                }`}
                            >
                              <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isActive ? "bg-gold text-navy" : "bg-gold/10 group-hover:bg-gold/20 text-gold"
                                }`}>
                                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-navy" : "text-gold"}`} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className={`text-[12px] leading-tight transition-colors ${isActive ? "text-gold font-bold" : "text-white group-hover:text-gold font-semibold"}`}>
                                  {cat.title}
                                </h3>
                                <p className="text-[10px] leading-relaxed text-slate-400 mt-1">
                                  {cat.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* ── Row 3: 3-Column Grid (remaining items = 1 full row, no gaps) ── */}
                      <div className="grid grid-cols-3 gap-x-3 gap-y-2 px-4 pb-3 pt-0">
                        {megaMenuCategories.slice(8).map((cat) => {
                          const Icon = cat.icon;
                          const isActive = pathname === cat.href || pathname.replace(/\/$/, "") === cat.href;
                          return (
                            <Link
                              href={cat.href}
                              key={cat.title}
                              onClick={() => setActiveDropdown(null)}
                              className={`group flex items-start gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${isActive
                                ? "bg-white/[0.08] text-gold border border-gold/30"
                                : "border border-transparent hover:bg-white/[0.05]"
                                }`}
                            >
                              <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isActive ? "bg-gold text-navy" : "bg-gold/10 group-hover:bg-gold/20 text-gold"
                                }`}>
                                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-navy" : "text-gold"}`} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className={`text-[12px] leading-tight transition-colors ${isActive ? "text-gold font-bold" : "text-white group-hover:text-gold font-semibold"}`}>
                                  {cat.title}
                                </h3>
                                <p className="text-[10px] leading-relaxed text-slate-400 mt-1">
                                  {cat.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* ── Full-width Need Help CTA strip ── */}
                      <div className="mx-3.5 mb-3 mt-0.5 border-t border-white/[0.06] pt-2">
                        <Link
                          href="/contact#consultation"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between px-3.5 py-2 rounded-xl transition-all duration-200 hover:bg-white/[0.03] hover:border-blue/30 cursor-pointer bg-gradient-to-r from-blue/10 via-blue/5 to-transparent border border-blue/10"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-blue/10 flex items-center justify-center shrink-0 group-hover:bg-blue/20 transition-colors">
                              <Phone className="w-3 h-3 text-blue" />
                            </div>
                            <div>
                              <h3 className="text-[11px] font-bold text-white group-hover:text-blue transition-colors leading-tight">
                                Need Help?
                              </h3>
                              <p className="text-[9.5px] text-slate-400 leading-snug">
                                Unsure where to start? Get a custom roadmap from our experts.
                              </p>
                            </div>
                          </div>
                          <div className="text-[10px] font-semibold text-blue flex items-center gap-1 group-hover:gap-2 transition-all whitespace-nowrap shrink-0">
                            Free Consultation <ArrowRight className="w-2.5 h-2.5" />
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
                className={`flex items-center gap-0.5 font-sans text-[11.5px] xl:text-[12.5px] 2xl:text-sm font-medium tracking-tight xl:tracking-wide transition-colors py-2 cursor-pointer whitespace-nowrap ${isRegistrationsActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                  }`}
              >
                Registrations
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "registrations" ? "rotate-180" : ""
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-max max-w-[640px]"
                  >
                    <div className="bg-[#071B38] border border-white/10 rounded-[18px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
                      <div className="grid grid-cols-2 gap-x-5 gap-y-1 p-5">
                        {registrationItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = pathname === item.href || pathname.replace(/\/$/, "") === item.href;
                          return (
                            <Link
                              href={item.href}
                              key={item.title}
                              onClick={() => setActiveDropdown(null)}
                              className={`group flex items-start gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${isActive
                                ? "bg-white/[0.08] text-gold border border-gold/30 shadow-[0_2px_12px_rgba(212,175,55,0.15)]"
                                : "border border-transparent hover:bg-white/[0.06] hover:shadow-[0_4px_20px_-4px_rgba(197,155,80,0.15)]"
                                }`}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isActive ? "bg-gold text-navy" : "bg-gold/10 group-hover:bg-gold/20 text-gold"
                                }`}>
                                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-navy" : "text-gold"}`} />
                              </div>
                              <div className="min-w-0">
                                <h3 className={`text-[12.5px] leading-tight transition-colors ${isActive ? "text-gold font-bold" : "text-white group-hover:text-gold font-semibold"}`}>
                                  {item.title}
                                </h3>
                                <p className="text-[10.5px] leading-snug text-slate-400 mt-0.5 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── ESG REPORTING link ── */}
            <Link
              href="/esg-reporting"
              className={`font-sans text-[11.5px] xl:text-[12.5px] 2xl:text-sm font-medium tracking-tight xl:tracking-wide transition-colors py-2 whitespace-nowrap ${isESGActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                }`}
            >
              ESG Reporting
            </Link>

            {/* Remaining simple links */}
            {["Template", "Background Verification", "Blog", "Contact Us"].map((name) => {
              const link = otherLinks.find((l) => l.name === name)!;
              const isActive = pathname === link.href || (link.name === "Template" && pathname.startsWith("/templates")) || (link.name === "Background Verification" && pathname.startsWith("/background-verification"));
              return (
                <Link
                  key={name}
                  href={link.href}
                  className={`font-sans text-[11.5px] xl:text-[12.5px] 2xl:text-sm font-medium tracking-tight xl:tracking-wide transition-colors py-2 whitespace-nowrap ${isActive ? "text-gold border-b-2 border-gold" : "text-white/90 hover:text-gold"
                    }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden xl:flex items-center gap-2 xl:gap-3 shrink-0 ml-auto z-50">
            <a
              href="tel:+917695858055"
              className="flex items-center gap-1 text-white/90 hover:text-blue transition-colors font-sans text-[11px] xl:text-[12px] 2xl:text-[13px] font-medium whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-blue shrink-0" />
              <span>+91 76958 58055</span>
            </a>
            <Link
              href="/contact#consultation"
              className="px-3 xl:px-4 py-2 bg-blue text-white rounded-lg font-sans text-[11.5px] xl:text-[12.5px] 2xl:text-sm font-semibold hover:bg-blue/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue/20 whitespace-nowrap shrink-0"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile / Tablet Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-white/90 hover:text-gold transition-colors z-50 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Drawer & Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy z-50 shadow-2xl flex flex-col p-6 pt-20 border-l border-white/10"
            >
              <div className="flex-1 overflow-y-auto space-y-1 pr-1">

                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium py-3 px-3 rounded-lg transition-colors ${pathname === "/" ? "text-gold bg-white/5" : "text-white/90 hover:text-gold hover:bg-white/5"
                    }`}
                >
                  Home
                </Link>

                {/* ── ABOUT US Accordion ── */}
                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-medium transition-colors ${isAboutActive || mobileAboutOpen ? "text-gold bg-white/5" : "text-white/90 hover:text-gold"
                      }`}
                  >
                    About Us
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-white/[0.02] border-t border-white/[0.06]"
                      >
                        <div className="p-3 space-y-1">
                          {aboutItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
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
                            const isActive = pathname === cat.href || pathname.replace(/\/$/, "") === cat.href;
                            return (
                              <Link
                                key={cat.title}
                                href={cat.href}
                                onClick={() => setIsOpen(false)}
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
                                onClick={() => setIsOpen(false)}
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

                {/* ── ESG REPORTING Mobile Link ── */}
                <Link
                  href="/esg-reporting"
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium py-3 px-3 rounded-lg transition-colors ${isESGActive ? "text-gold bg-white/5" : "text-white/90 hover:text-gold hover:bg-white/5"
                    }`}
                >
                  ESG Reporting
                </Link>

                {/* Remaining links in mobile drawer */}
                {["Template", "Background Verification", "Blog", "Contact Us"].map((name) => {
                  const link = otherLinks.find((l) => l.name === name)!;
                  const isActive = pathname === link.href || (link.name === "Template" && pathname.startsWith("/templates")) || (link.name === "Background Verification" && pathname.startsWith("/background-verification"));
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
                  href="tel:+917695858055"
                  className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue" />
                  <span>+91 76958 58055</span>
                </a>
                <Link
                  href="/contact#consultation"
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3 bg-blue text-white rounded-lg font-semibold hover:bg-blue/90 transition-colors"
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          </>
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
