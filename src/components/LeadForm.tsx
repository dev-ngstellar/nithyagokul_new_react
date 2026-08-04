"use client";

import React, { useState } from "react";
import { CheckCircle2, User, Mail, Phone, MapPin, Briefcase } from "lucide-react";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  source?: string;
  buttonText?: string;
  isDark?: boolean;
  className?: string;
  lockedService?: string;
  allowedServices?: string[];
  isRadio?: boolean;
}

export default function LeadForm({
  title,
  subtitle,
  buttonText = "GET STARTED NOW",
  isDark = false,
  className = "",
  lockedService,
  allowedServices,
  isRadio = false,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: lockedService || (allowedServices && allowedServices.length > 0 ? allowedServices[0] : "Secretarial Services"),
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let newValue = value;
    let errorMsg = "";

    if (name === "name") {
      if (/\d/.test(value)) {
        errorMsg = "Name field should not contain numericals";
      }
      newValue = value.replace(/\d/g, "");
    } else if (name === "phone") {
      if (/[a-zA-Z]/.test(value)) {
        errorMsg = "Phone field should not allow alphanumeric characters (letters)";
      } else if (value && !/^\+?[0-9\s\-()]*$/.test(value)) {
        errorMsg = "Phone field can only contain numbers and valid symbols (+, -, space)";
      }
      newValue = value.replace(/[a-zA-Z]/g, "").replace(/[^\+0-9\s\-()]/g, "");
    } else if (name === "email") {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMsg = "Please enter a valid email address";
      }
    }

    setFormData(prev => ({ ...prev, [name]: newValue }));
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation checks
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };
    let hasError = false;

    if (/\d/.test(formData.name)) {
      newErrors.name = "Name field should not contain numericals";
      hasError = true;
    }

    if (/[a-zA-Z]/.test(formData.phone)) {
      newErrors.phone = "Phone field should not allow alphanumeric characters (letters)";
      hasError = true;
    } else if (formData.phone && !/^\+?[0-9\s\-()]*$/.test(formData.phone)) {
      newErrors.phone = "Phone field can only contain numbers and valid symbols (+, -, space)";
      hasError = true;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    try {
      const endpoint = "/api/contact";
        
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");
      
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        service: lockedService || (allowedServices && allowedServices.length > 0 ? allowedServices[0] : "Secretarial Services"),
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  // Theming classes
  const containerClass = isDark
    ? "border border-white/10 shadow-2xl text-white rounded-[24px]"
    : "bg-white border border-slate-100 shadow-xl shadow-slate-100/40 text-slate-800 rounded-[24px]";

  const inputBaseClass = (fieldName: string) => {
    const isFocused = activeField === fieldName;
    const hasError = fieldName in errors && !!errors[fieldName as keyof typeof errors];

    const borderClass = hasError
      ? "border-rose-500 ring-2 ring-rose-500/10 focus:border-rose-500 focus:ring-rose-500/10"
      : isFocused
        ? "border-blue ring-2 ring-blue/10"
        : isDark
          ? "border-white/10 hover:border-white/20"
          : "border-slate-300 hover:border-slate-400";

    const bgClass = isDark ? "bg-white/[0.04]" : "bg-white";
    const textClass = isDark ? "text-white placeholder:text-white/40" : "text-slate-900 placeholder:text-slate-500";

    return `w-full pl-11 pr-4 py-3.5 border rounded-xl text-base ${bgClass} ${borderClass} ${textClass} focus:outline-none transition-all duration-300 font-sans`;
  };

  const labelClass = isDark ? "text-white/80" : "text-slate-700 font-bold";

  return (
    <div className={`${containerClass} p-6 md:p-8 ${className}`}>
      {status === "success" || status === "error" ? (
        <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
          {status === "success" ? (
            <>
              <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
              <h3 className="font-serif text-2xl font-bold">Inquiry Received</h3>
              <p className={`text-sm ${isDark ? "text-white/80" : "text-slate-700"} max-w-sm`}>
                Thank you. Your enquiry has been submitted successfully.
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">Submission Failed</h3>
              <p className={`text-sm ${isDark ? "text-white/80" : "text-slate-700"} max-w-sm`}>
                Something went wrong. Please try again.
              </p>
            </>
          )}
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 bg-blue text-white rounded-lg font-semibold hover:bg-blue/90 transition-colors text-sm"
          >
            {status === "success" ? "Submit Another Inquiry" : "Try Again"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {(title || subtitle) && (
            <div className="space-y-1.5 pb-2">
              {title && <h3 className="font-serif text-2xl font-bold">{title}</h3>}
              {subtitle && <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>{subtitle}</p>}
            </div>
          )}

          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-1">
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${activeField === "name" ? (errors.name ? "text-rose-500" : "text-blue") : isDark ? "text-white/40" : "text-slate-400"}`}>
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  placeholder="Name"
                  className={inputBaseClass("name")}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-rose-500 font-medium pl-2 mt-1 transition-all duration-300">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${activeField === "email" ? (errors.email ? "text-rose-500" : "text-blue") : isDark ? "text-white/40" : "text-slate-400"}`}>
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  placeholder="Email*"
                  className={inputBaseClass("email")}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-rose-500 font-medium pl-2 mt-1 transition-all duration-300">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${activeField === "phone" ? (errors.phone ? "text-rose-500" : "text-blue") : isDark ? "text-white/40" : "text-slate-400"}`}>
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setActiveField("phone")}
                  onBlur={() => setActiveField(null)}
                  placeholder="Phone*"
                  className={inputBaseClass("phone")}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-rose-500 font-medium pl-2 mt-1 transition-all duration-300">{errors.phone}</p>
              )}
            </div>

            {/* City */}
            <div className="relative">
              <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${activeField === "city" ? "text-blue" : isDark ? "text-white/40" : "text-slate-400"}`}>
                <MapPin className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onFocus={() => setActiveField("city")}
                onBlur={() => setActiveField(null)}
                placeholder="City"
                className={inputBaseClass("city")}
              />
            </div>

            {/* Looking For */}
            <div className="space-y-1.5 relative">
              <label htmlFor="service" className={`block text-sm font-semibold uppercase tracking-wider ${labelClass}`}>
                Looking For*
              </label>
              {isRadio ? (
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="radio"
                    id="service_radio"
                    name="service"
                    value={formData.service}
                    checked={true}
                    readOnly
                    className="w-5 h-5 text-blue focus:ring-blue focus:ring-offset-0 border-slate-300 rounded-full bg-white checked:border-transparent checked:bg-blue cursor-pointer"
                    style={{ WebkitAppearance: 'none', appearance: 'none', boxShadow: 'inset 0 0 0 3px white' }}
                  />
                  <label htmlFor="service_radio" className={`text-base font-medium cursor-pointer ${isDark ? "text-white" : "text-slate-800"}`}>
                    {lockedService || formData.service}
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${activeField === "service" ? "text-blue" : isDark ? "text-white/40" : "text-slate-400"}`}>
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setActiveField("service")}
                    onBlur={() => setActiveField(null)}
                    className={`${inputBaseClass("service")} ${lockedService ? "pointer-events-none opacity-90" : "cursor-pointer"} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_16px_center] bg-no-repeat`}
                    tabIndex={lockedService ? -1 : 0}
                  >
                    {lockedService ? (
                      <option value={lockedService} className="bg-white text-slate-900">{lockedService}</option>
                    ) : allowedServices ? (
                      allowedServices.map(svc => (
                        <option key={svc} value={svc} className="bg-white text-slate-900">{svc}</option>
                      ))
                    ) : (
                      <>
                        <option value="Secretarial Services" className="bg-white text-slate-900">Secretarial Services</option>
                        <option value="Secretarial Audit & Due Diligence" className="bg-white text-slate-900">Secretarial Audit &amp; Due Diligence</option>
                        <option value="Business Valuation & Insolvency" className="bg-white text-slate-900">Business Valuation &amp; Insolvency</option>
                        <option value="Company Formation" className="bg-white text-slate-900">Company Formation</option>
                        <option value="Trademark & IP" className="bg-white text-slate-900">Trademark &amp; IP</option>
                        <option value="Business Broking" className="bg-white text-slate-900">Business Broking</option>
                        <option value="Other Services" className="bg-white text-slate-900">Other Services</option>
                      </>
                    )}
                  </select>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-blue text-white hover:bg-blue/90 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-blue/20 flex items-center justify-center min-h-[48px] cursor-pointer shine-btn"
          >
            {status === "loading" ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <span>{buttonText}</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
