import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Nithya Gokul Associates for elite corporate secretarial, legal compliance, and business advisory services.",
};

export default function ContactPage() {
  const allowedServices = [
    "Secretarial Services",
    "Company Formation",
    "Trademark Registration",
    "FSSAI License",
    "IEC Code",
    "GST Registration",
    "Compliance Services",
    "Legal Advisory"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-[70px] md:py-[90px] lg:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-gold/5 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center space-y-4">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Reach Out
            </span>
            <h1 className="font-serif text-4xl md:text-[52px] lg:text-[64px] font-bold leading-[1.1] mb-6">
              Contact Us
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-300 max-w-2xl mx-auto leading-[1.8]">
              Connect with our corporate secretary specialists to schedule a consultation or discuss your compliance needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content (Contact Info + Form) */}
      <section id="consultation" className="py-[70px] md:py-[90px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left Column: Contact Information Cards */}
            <div className="space-y-4">
              <SlideUp>
                <div className="space-y-2 mb-2">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-tight">
                    Let&apos;s Discuss Your Corporate Strategy
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-[15px] max-w-[500px]">
                    Whether you are incorporating a new entity, scaling operations, or navigating complex regulatory requirements, we are here to provide expert legal counsel.
                  </p>
                </div>
              </SlideUp>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* Phone Card */}
                <SlideUp delay={0.1}>
                  <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-[16px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gold/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group h-full">
                    <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-gold transition-colors duration-300">
                      <Phone className="w-3.5 h-3.5 text-gold group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</h3>
                    <a href="tel:+917695858055" className="text-base font-bold text-navy hover:text-gold transition-colors">
                      +91 76958 58055
                    </a>
                  </div>
                </SlideUp>

                {/* Email Card */}
                <SlideUp delay={0.2}>
                  <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-[16px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gold/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group h-full">
                    <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-gold transition-colors duration-300">
                      <Mail className="w-3.5 h-3.5 text-gold group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h3>
                    <a href="mailto:info@nithyagokul.com" className="text-base font-bold text-navy hover:text-gold transition-colors break-all">
                      info@nithyagokul.com
                    </a>
                  </div>
                </SlideUp>
              </div>

              {/* Office Info Card */}
              <SlideUp delay={0.3}>
                <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-[16px] p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none" />

                  <div className="flex flex-col md:flex-row gap-4 relative z-10">
                    <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Head Office</h3>
                      <div className="font-serif text-base font-bold text-navy mb-0.5">Nithya Gokul Associates</div>
                      <div className="text-[11px] text-gold font-bold mb-2 uppercase tracking-widest">Erode Office</div>
                      <p className="text-slate-600 leading-[1.5] text-[14px]">
                        Bharathipalayam 1st Street<br />
                        Opposite lane to Kotak Mahindra Bank<br />
                        Netaji Nagar, Moolapalayam<br />
                        Erode – 638002
                      </p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>

            {/* Right Column: Lead Form */}
            <div className="relative">
              <SlideUp delay={0.4}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 via-transparent to-blue/5 rounded-[40px] blur-2xl pointer-events-none" />
                  <LeadForm
                    title="Request a Consultation"
                    subtitle="Fill out the form below and our team will get back to you shortly."
                    buttonText="Send Message"
                    allowedServices={allowedServices}
                    className="relative z-10 bg-white/90 backdrop-blur-xl border border-white/40"
                  />
                </div>
              </SlideUp>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="pb-[70px] md:pb-[90px] lg:pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SlideUp>
            <div className="w-full h-[550px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200/60 relative group">
              {/* Optional: Add an interactive overlay to map if we wanted, but standard embed is fine */}
              <iframe
                src="https://maps.google.com/maps?q=Nithya+Gokul+Associates,+Erode,+Tamil+Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-all duration-700"
              />
            </div>
          </SlideUp>
        </div>
      </section>



    </div>
  );
}
