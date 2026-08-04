"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight,
  LayoutGrid, CheckCircle2, Sparkles, Download, ArrowDown, Send
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SlideUp from "@/components/animations/SlideUp";

interface DynamicTemplateDetails {
  slug: string;
  name: string;
  description?: string;
  homeImage: string;
  images: { name: string; file: string; isHome?: boolean }[];
}

interface TemplateDetailsClientProps {
  template: DynamicTemplateDetails;
}

export default function TemplateDetailsClient({ template }: TemplateDetailsClientProps) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [hasScrolledInModal, setHasScrolledInModal] = useState(false);
  const [direction, setDirection] = useState<number>(0);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  // Consultation Modal State
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    lookingFor: `${template.name} Regarding`,
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; city?: string; lookingFor?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update lookingFor when template prop changes or modal opens
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      lookingFor: `${template.name} Regarding`,
    }));
  }, [template.name]);

  const homeIndex = template.images.findIndex((img) => img.file === template.homeImage);
  const activeHeroIndex = homeIndex >= 0 ? homeIndex : 0;

  const openModal = (index: number) => {
    setModalIndex(index);
    setHasScrolledInModal(false);
    setDirection(0);
  };

  const closeModal = () => {
    setModalIndex(null);
    setHasScrolledInModal(false);
  };

  const nextModalImage = () => {
    if (modalIndex !== null && modalIndex < template.images.length - 1) {
      setDirection(1);
      setModalIndex((prev) => prev! + 1);
      setHasScrolledInModal(false);
    }
  };

  const prevModalImage = () => {
    if (modalIndex !== null && modalIndex > 0) {
      setDirection(-1);
      setModalIndex((prev) => prev! - 1);
      setHasScrolledInModal(false);
    }
  };

  // Keyboard navigation & Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex !== null) {
        if (e.key === "Escape") closeModal();
        else if (e.key === "ArrowRight") nextModalImage();
        else if (e.key === "ArrowLeft") prevModalImage();
      } else if (isConsultationOpen) {
        if (e.key === "Escape") setIsConsultationOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex, isConsultationOpen, template.images.length]);

  // Reset modal scroll position on image change
  useEffect(() => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }
  }, [modalIndex]);

  const handleModalScroll = () => {
    if (modalScrollRef.current && modalScrollRef.current.scrollTop > 30) {
      if (!hasScrolledInModal) {
        setHasScrolledInModal(true);
      }
    }
  };

  const handleDownload = () => {
    if (modalIndex === null || !template.images[modalIndex]) return;
    const currentImg = template.images[modalIndex];
    const link = document.createElement("a");
    link.href = currentImg.file;
    link.download = `${template.slug}-${currentImg.name.toLowerCase().replace(/\s+/g, "-")}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Form Validation & Submission
  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string; city?: string; lookingFor?: string } = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should contain only letters";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com)";
    }

    // Phone Validation
    const cleanPhone = formData.phone.replace(/[\s-+]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(cleanPhone)) {
      newErrors.phone = "Phone number must contain numbers only";
    } else if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      newErrors.phone = "Phone number must be between 10 and 15 digits";
    }

    // City Validation
    if (formData.city.trim() && !/^[a-zA-Z\s.-]+$/.test(formData.city.trim())) {
      newErrors.city = "City should contain letters only";
    }

    // Looking For Validation
    if (!formData.lookingFor.trim()) {
      newErrors.lookingFor = "Please specify what you are looking for";
    } else if (formData.lookingFor.trim().length < 4) {
      newErrors.lookingFor = "Requirement details must be at least 4 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          service: `${formData.lookingFor} (Template: ${template.name})`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setIsConsultationOpen(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            lookingFor: `${template.name} Regarding`,
          });
        }, 2000);
      } else {
        alert("Failed to send email request. Please try again.");
      }
    } catch (err) {
      console.error("Failed to submit template request:", err);
      alert("Error sending request. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white pt-28 pb-24 px-6 relative overflow-hidden font-sans">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Back Link to /templates */}
        <SlideUp className="mb-8">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-gold" />
            <span>Back to Collection</span>
          </Link>
        </SlideUp>

        {/* Template Header & Large Hero Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 border-b border-white/10 pb-16">
          {/* Left Column: Template Information */}
          <SlideUp className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              TEMPLATE OVERVIEW
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {template.name}
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              {template.description || `Full-featured web template package containing ${template.images.length} responsive page layouts built with modern UI design standards and optimized performance.`}
            </p>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI", "Production Ready"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3.5">
                <div className="text-gold font-serif font-bold text-xl md:text-2xl">{template.images.length}</div>
                <div className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">Page Screens</div>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3.5">
                <div className="text-gold font-serif font-bold text-xl md:text-2xl">100%</div>
                <div className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">Responsive</div>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3.5">
                <div className="text-gold font-serif font-bold text-xl md:text-2xl">A+</div>
                <div className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">Performance</div>
              </div>
            </div>

            {/* Request Customization Button -> Opens Consultation Modal */}
            <div className="pt-2">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold text-navy font-bold text-sm shadow-lg shadow-gold/20 hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
              >
                <span>Request Customization</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </SlideUp>

          {/* Right Column: Large Hero Preview (Static Display showing full aspect ratio image) */}
          {template.homeImage && (
            <SlideUp delay={0.2} className="lg:col-span-6">
              <div className="relative rounded-[24px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-blue/30 to-gold/20 rounded-[24px] blur-lg opacity-50 pointer-events-none" />
                <div className="relative rounded-[24px] bg-slate-900/90 border border-white/10 shadow-2xl overflow-hidden gloss-card-dark flex flex-col">
                  <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider">Home Page Preview</span>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-[380px] md:h-[450px] w-full bg-slate-950 overflow-hidden">
                    <img
                      src={template.homeImage}
                      alt={`${template.name} - Home Page`}
                      className="w-full h-auto object-top"
                    />
                  </div>
                </div>
              </div>
            </SlideUp>
          )}
        </div>

        {/* Page Previews Section - Entire Card Clickable Button */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-white flex items-center gap-3">
              <LayoutGrid className="w-6 h-6 text-gold" />
              <span>Page Previews ({template.images.length})</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Click anywhere on a card to launch the Fullscreen Interactive Template Viewer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {template.images.map((img, index) => (
              <SlideUp key={index} delay={index * 0.08}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openModal(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(index);
                    }
                  }}
                  className="group bg-slate-900/80 border border-white/10 rounded-[24px] overflow-hidden gloss-card-dark cursor-pointer flex flex-col hover:border-gold/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between px-5 py-3 bg-slate-950/90 border-b border-white/10 pointer-events-none">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-slate-300 text-xs font-mono font-medium">
                      {img.name}
                    </span>
                    <span className="text-gold text-xs font-semibold">
                      Screen {index + 1}
                    </span>
                  </div>

                  {/* Preview Container */}
                  <div className="relative h-[340px] md:h-[400px] w-full overflow-hidden bg-slate-950">
                    <img
                      src={img.file}
                      alt={`${template.name} - ${img.name}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="w-full h-auto object-top transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Card Caption Footer */}
                  <div className="p-5 flex items-center justify-between border-t border-white/10 bg-slate-900/90 pointer-events-none">
                    <h3 className="font-serif font-bold text-white text-lg group-hover:text-gold transition-colors">
                      {img.name}
                    </h3>
                    <div className="text-xs text-gold flex items-center gap-1 font-semibold group-hover:underline">
                      <span>Expand View</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

      </div>

      {/* ── FULLSCREEN MARKETPLACE TEMPLATE VIEWER ── */}
      <AnimatePresence>
        {modalIndex !== null && template.images[modalIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#050810]"
            onClick={closeModal}
          >
            {/* Main Modal Window Container - Full Screen */}
            <div
              className="relative w-full h-full flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Header Bar */}
              <div className="flex items-center justify-between px-8 py-4 bg-[#090d16] border-b border-white/10 shrink-0 z-20">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white leading-tight">
                    {template.images[modalIndex].name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Page {modalIndex + 1} of {template.images.length}
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Viewer Body Canvas - Full Width Container */}
              <div className="relative flex-1 w-full overflow-hidden bg-[#030509] flex items-center justify-center">
                
                {/* Left Circular Nav Arrow */}
                {modalIndex > 0 && (
                  <button
                    onClick={prevModalImage}
                    className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 w-13 h-13 rounded-full bg-[#0e1422]/90 hover:bg-gold hover:text-navy text-white border border-white/15 flex items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110 backdrop-blur-md"
                    title="Previous Page (Left Arrow Key)"
                  >
                    <ChevronLeft className="w-7 h-7" />
                  </button>
                )}

                {/* Right Circular Nav Arrow */}
                {modalIndex < template.images.length - 1 && (
                  <button
                    onClick={nextModalImage}
                    className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 w-13 h-13 rounded-full bg-[#0e1422]/90 hover:bg-gold hover:text-navy text-white border border-white/15 flex items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110 backdrop-blur-md"
                    title="Next Page (Right Arrow Key)"
                  >
                    <ChevronRight className="w-7 h-7" />
                  </button>
                )}

                {/* Vertical Scroll Area for Screenshot - Full Height & Width with Arrow Padding */}
                <div
                  ref={modalScrollRef}
                  onScroll={handleModalScroll}
                  className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gold/50 scrollbar-track-slate-950 px-16 md:px-28 py-6 flex justify-center items-start"
                >
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={modalIndex}
                      custom={direction}
                      initial={{ opacity: 0, x: direction > 0 ? 60 : direction < 0 ? -60 : 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -60 : direction < 0 ? 60 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full max-w-[1280px]"
                    >
                      <img
                        src={template.images[modalIndex].file}
                        alt={template.images[modalIndex].name}
                        className="w-full h-auto rounded-xl border border-white/10 shadow-2xl block mx-auto"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Scroll Hint */}
                <AnimatePresence>
                  {!hasScrolledInModal && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-20"
                    >
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-gold/40 text-gold text-xs font-semibold shadow-2xl backdrop-blur-md animate-bounce">
                        <ArrowDown className="w-4 h-4 text-gold" />
                        <span>Scroll down to view full page</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── REQUEST CUSTOMIZATION / CONSULTATION MODAL ── */}
      <AnimatePresence>
        {isConsultationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsConsultationOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-navy border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl gloss-card-dark"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 space-y-1">
                <span className="text-gold text-xs font-semibold uppercase tracking-wider block">
                  Customization Inquiry
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                  Request a Consultation
                </h3>
                <p className="text-slate-300 text-xs md:text-sm">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Request Received!</h4>
                  <p className="text-sm text-slate-300">
                    Thank you. Our advisors will contact you regarding {template.name} customization.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Read-Only Selected Template Field */}
                  <div>
                    <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1.5">
                      Selected Template
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={template.name}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-xl text-white text-sm font-semibold focus:outline-none cursor-not-allowed select-none"
                    />
                  </div>

                  {/* Name Field - Strict Alphabet Sanitization */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => {
                        // Allow only letters, spaces, dots, apostrophes, and hyphens
                        const val = e.target.value.replace(/[^a-zA-Z\s.'-]/g, "");
                        setFormData({ ...formData, name: val });
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: val.trim() ? undefined : "Full name is required" }));
                        }
                      }}
                      onBlur={() => {
                        if (!formData.name.trim()) setErrors((prev) => ({ ...prev, name: "Full name is required" }));
                        else if (formData.name.trim().length < 3) setErrors((prev) => ({ ...prev, name: "Name must be at least 3 characters" }));
                      }}
                      className={`w-full px-4 py-2.5 bg-slate-900/90 border rounded-xl text-white text-sm focus:outline-none transition-colors ${errors.name ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                        }`}
                    />
                    {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, email: val });
                          if (errors.email) {
                            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
                            setErrors((prev) => ({ ...prev, email: isValid ? undefined : "Please enter a valid email (e.g. name@domain.com)" }));
                          }
                        }}
                        onBlur={() => {
                          if (!formData.email.trim()) setErrors((prev) => ({ ...prev, email: "Email address is required" }));
                          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
                            setErrors((prev) => ({ ...prev, email: "Please enter a valid email (e.g. name@domain.com)" }));
                          }
                        }}
                        className={`w-full px-4 py-2.5 bg-slate-900/90 border rounded-xl text-white text-sm focus:outline-none transition-colors ${errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                          }`}
                      />
                      {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="10-15 digits"
                        value={formData.phone}
                        onChange={(e) => {
                          // Allow strictly numbers only
                          const val = e.target.value.replace(/\D/g, "");
                          setFormData({ ...formData, phone: val });
                          if (errors.phone) {
                            if (!val) setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
                            else if (val.length < 10 || val.length > 15) setErrors((prev) => ({ ...prev, phone: "Phone must be 10 to 15 digits" }));
                            else setErrors((prev) => ({ ...prev, phone: undefined }));
                          }
                        }}
                        onBlur={() => {
                          if (!formData.phone) setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
                          else if (formData.phone.length < 10 || formData.phone.length > 15) setErrors((prev) => ({ ...prev, phone: "Phone must be 10 to 15 digits" }));
                        }}
                        className={`w-full px-4 py-2.5 bg-slate-900/90 border rounded-xl text-white text-sm focus:outline-none transition-colors ${errors.phone ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                          }`}
                      />
                      {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* City - Strict Alphabet Sanitization */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai, Bangalore"
                      value={formData.city}
                      onChange={(e) => {
                        // Allow only letters, spaces, dots, and hyphens
                        const val = e.target.value.replace(/[^a-zA-Z\s.-]/g, "");
                        setFormData({ ...formData, city: val });
                      }}
                      className={`w-full px-4 py-2.5 bg-slate-900/90 border rounded-xl text-white text-sm focus:outline-none transition-colors ${errors.city ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                        }`}
                    />
                    {errors.city && <p className="text-red-400 text-[11px] mt-1">{errors.city}</p>}
                  </div>

                  {/* Looking For */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Looking For <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Customization requirements"
                      value={formData.lookingFor}
                      onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                      className={`w-full px-4 py-2.5 bg-slate-900/90 border rounded-xl text-white text-sm focus:outline-none transition-colors ${errors.lookingFor ? "border-red-500" : "border-white/10 focus:border-gold"
                        }`}
                    />
                    {errors.lookingFor && <p className="text-red-400 text-[11px] mt-1">{errors.lookingFor}</p>}
                  </div>

                  {/* Form Actions */}
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setIsConsultationOpen(false)}
                      className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl bg-gold text-navy font-bold text-sm shadow-md hover:bg-yellow-400 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
