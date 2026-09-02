"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  Cpu,
  HelpCircle,
  Share2,
  Check
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

const FAQS = [
  {
    question: "What is Nithya Gokul Associates?",
    answer: "Nithya Gokul Associates is a professional secretarial advisory and services firm based in Erode, Tamil Nadu. Its services include corporate compliance, company incorporation, secretarial services, ROC filings, XBRL services, business valuation and other corporate advisory areas."
  },
  {
    question: "When was Nithya Gokul Associates established?",
    answer: "The organisation was founded in 2010 and has developed its professional practice over more than 16 years. Its LinkedIn company profile identifies Erode, Tamil Nadu as its headquarters."
  },
  {
    question: "What is the People, Process and Technology approach?",
    answer: "The approach places people first, processes second and technology third. The idea is that technology should accelerate well-designed processes while professional people provide judgement, accountability and trust."
  },
  {
    question: "Does Nithya Gokul Associates use artificial intelligence?",
    answer: "Yes. The organisation says it is investing in AI, automation and improved technology to help professionals serve clients more effectively. Its stated position is to build with AI rather than view AI as a replacement for professional expertise."
  },
  {
    question: "Why is corporate governance important for growing businesses?",
    answer: "Corporate governance provides a framework for responsible decision-making, accountability and compliance. As a company grows, stronger governance and well-defined processes can help reduce regulatory risk and support more sustainable business development."
  }
];

export default function BlogPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="block w-full min-h-screen bg-slate-50">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Nithya Gokul Associates: Building a Business on Trust, Governance & Growth",
              "description":
                "Discover the journey of Nithya Gokul Associates, from a one-person practice to a growing corporate advisory firm built on trust, governance, people, process and technology.",
              "author": {
                "@type": "Person",
                "name": "CS Rajmohan Nithya",
                "jobTitle": "Founder & Practising Company Secretary"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Nithya Gokul Associates",
                "url": "https://nithyagokul.in"
              },
              "mainEntityOfPage": "https://nithyagokul.in/nithya-gokul-associates-business-journey",
              "datePublished": "2026-06-01",
              "keywords": "Nithya Gokul Associates, corporate compliance services, company secretary Erode, secretarial advisory services, corporate governance Tamil Nadu, business advisory Erode, company compliance services, practising company secretary Erode"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQS.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])
        }}
      />

      {/* Dedicated Article Hero Banner Image */}
      <section className="relative bg-navy text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Image with Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner/sec-advisory.webp"
            alt="Corporate Advisory Banner"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/70" />
        </div>

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 space-y-6">
          <FadeIn className="space-y-6">
            {/* Breadcrumbs & Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/blog" className="text-xs uppercase tracking-wider text-gold hover:text-white font-semibold transition-colors">
                Blog
              </Link>
              <span className="text-slate-500 text-xs">•</span>
              <span className="bg-gold/20 text-gold border border-gold/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                Corporate Governance &amp; Strategy
              </span>
              <span className="bg-white/10 text-slate-200 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-gold" /> Erode, Tamil Nadu
              </span>
            </div>

            {/* Main Article Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-white">
              Building a Business That Lasts: The Journey of Nithya Gokul Associates
            </h1>

            {/* Author Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-slate-300 text-xs md:text-sm">
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-gold/20 text-gold border border-gold/40 flex items-center justify-center font-serif font-bold text-xs">
                    CS
                  </div>
                  <div>
                    <span className="block font-semibold text-white text-xs md:text-sm">
                      CS Rajmohan Nithya
                    </span>
                    <span className="text-[11px] text-slate-300">Founder &amp; Practising CS</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>June 2026</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>8 min read</span>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5 text-gold" />}
                <span>{copied ? "Link Copied!" : "Share Article"}</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Article Content Container */}
      <main className="py-[60px] md:py-[80px] max-w-[1000px] mx-auto px-6">

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <SlideUp delay={0.1}>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-gold/30 transition-all h-full">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-bold text-navy text-base mb-1">Founded in 2010</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Over 16+ years of dedicated secretarial advisory and statutory compliance experience headquartered in Erode.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-gold/30 transition-all h-full">
              <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-bold text-navy text-base mb-1">20+ Women Professionals</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Evolved from an individual practice into a multidisciplinary team empowering businesses across Tamil Nadu.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.3}>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-gold/30 transition-all h-full">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-blue" />
              </div>
              <h3 className="font-bold text-navy text-base mb-1">People, Process &amp; Tech</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Placing human judgement and accountability first, supported by standardized processes and AI acceleration.
              </p>
            </div>
          </SlideUp>
        </div>

        {/* Article Main Text Body with EXACT Document Bold Emphases */}
        <article className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-12 shadow-sm space-y-10 text-slate-700 text-base md:text-lg leading-[1.85]">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              Building a Business That Lasts: The Journey of Nithya Gokul Associates
            </h2>
            <p>
              Business success is often presented as a race. Companies are encouraged to grow faster, acquire more customers, adopt the newest technology and constantly compete with everyone around them. But what happens when an organisation chooses a different path? What happens when the priority is not becoming the biggest name in the market, but becoming a <strong>trusted professional partner that businesses can depend on for years</strong>?
            </p>
            <p>
              That philosophy sits at the heart of the journey of <strong>Nithya Gokul Associates</strong>, a professional firm based in Erode, Tamil Nadu. The organisation describes itself as an end-to-end secretarial advisory and services firm and has built its reputation around corporate compliance, governance, advisory and related professional services. According to its LinkedIn profile, the firm was founded in 2010 and works with clients across Tamil Nadu through its professional network.
            </p>
            <p>
              Its recent story is particularly relevant in a business environment increasingly dominated by artificial intelligence, automation and digital transformation. Rather than treating technology as a replacement for professional expertise, Nithya Gokul Associates presents technology as an enabler—something that can help experienced professionals deliver better service while keeping human judgement at the centre.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              A Journey Built on Purpose, Not Competition
            </h2>
            <p>
              The story of Nithya Gokul Associates is not simply about business expansion. It is about building professional credibility one relationship at a time. The organisation&apos;s June 2026 LinkedIn article reflects on more than 16 years of development and explains that its growth did not begin with a large marketing operation, sophisticated automation or artificial intelligence. It began with a vision, dedication and a commitment to clients.
            </p>
            <p>
              That distinction matters. In professional services, trust cannot be manufactured overnight. A company may invest heavily in advertising and digital visibility, but a client dealing with corporate compliance, regulatory requirements or governance decisions needs something deeper than visibility. They need confidence that the person advising them understands the implications of a decision and will remain accountable when circumstances become complicated.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy">
              From a One-Person Practice to a Growing Professional Team
            </h3>
            <p>
              Nithya Gokul Associates began as a much smaller practice, with its Founder and Practising Company Secretary, CS Rajmohan Nithya, personally managing client engagements during the firm&apos;s early years. The organisation says that this hands-on approach helped establish relationships that have continued over time.
            </p>
            <p>
              Today, the firm describes itself as a team of <strong>more than 20 women professionals</strong> serving businesses across industries. Its LinkedIn company profile lists its headquarters in Erode and identifies its areas of specialisation as including company incorporation, corporate compliance, ROC filings, secretarial services, XBRL services, business valuation, company closure and related corporate advisory work.
            </p>
            <p>
              The progression from an individual practice to a professional team demonstrates an important lesson for growing businesses: <strong>scale should strengthen service rather than weaken relationships</strong>. Growth becomes meaningful when additional people, processes and technology allow an organisation to serve more clients without losing the accountability that created its reputation in the first place.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              Solving Business Problems Before Chasing Trends
            </h2>
            <p>
              The business world changes quickly. Digital transformation was once the dominant conversation, followed by automation and now artificial intelligence. New platforms and technologies appear almost continuously, and businesses can easily fall into the trap of adopting something simply because everyone else is talking about it.
            </p>
            <p>
              Nithya Gokul Associates takes a different position. Its stated philosophy is centred on solving client problems first rather than building an organisation around whatever trend happens to dominate the market. This is particularly relevant to professional advisory services because clients rarely approach a Company Secretary simply because they want to use a particular technology. They approach because they have a business problem that needs to be understood, addressed and resolved properly.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy">
              Why Client Trust Became the Foundation
            </h3>
            <p>
              Corporate compliance is not an area where shortcuts are particularly attractive. Missed filings, incorrect documentation, governance gaps or poorly considered corporate decisions can create consequences that extend beyond a single administrative task. Businesses therefore need advisors who understand not only the process but also the context surrounding the decision.
            </p>
            <p>
              The Nithya Gokul Associates journey demonstrates how <strong>consistent service can become a powerful business asset</strong>. The organisation says that many early clients continued working with the firm, while professional networks including Chartered Accountants, Company Secretaries, lawyers, consultants and corporate advisors also became long-term partners.
            </p>
            <p>
              That kind of referral-driven growth is significant. When a professional recommends another professional to a client, they are effectively placing their own reputation alongside that recommendation. Reliability, therefore, becomes more valuable than simply competing on price.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              The Changing World of Corporate Compliance
            </h2>
            <p>
              Modern businesses operate in an environment where corporate governance and regulatory compliance are becoming increasingly important. Entrepreneurs have to think about incorporation, statutory filings, board processes, documentation, regulatory obligations, corporate restructuring and a wide range of other requirements depending on the nature and size of their organisation.
            </p>
            <p>
              This creates a growing need for professional <strong>secretarial advisory and corporate compliance services</strong>. Businesses do not simply need someone to complete forms; they need professionals who can help them understand requirements and make informed decisions.
            </p>
            <p>
              Nithya Gokul Associates positions itself within this broader professional ecosystem, offering services connected with company law, incorporation, secretarial compliance, governance, mergers and acquisitions, business valuation and other corporate matters. Its company profile also notes experience representing clients before relevant authorities and handling specialised corporate cases.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy">
              Embracing Technology Without Losing the Human Touch
            </h3>
            <p>
              Artificial intelligence is changing the way businesses work. Automation can reduce repetitive tasks, digital platforms can improve accessibility, and AI-assisted systems can help professionals process information more efficiently. Yet technology does not automatically understand the commercial priorities, risk tolerance or long-term objectives of a business owner.
            </p>
            <p>
              This is where professional judgement remains important. Nithya Gokul Associates describes its approach as <strong>building with AI rather than competing against AI</strong>, using better technology, automation and AI to help professionals improve client service.
            </p>
            <p>
              That is a practical approach to digital transformation. Technology becomes the accelerator, while professionals remain responsible for interpretation, judgement and accountability.
            </p>
          </section>

          {/* Section 8: People Process Technology */}
          <section className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              People, Process and Technology
            </h2>
            <p>
              One of the central ideas presented by Nithya Gokul Associates is that businesses grow through <strong>People, Process and Technology</strong>, in that order.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
              <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Step 1</span>
                <h4 className="font-bold text-navy text-lg">People First</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  People create relationships, exercise judgement, and establish trust on which professional services depend.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-navy">Step 2</span>
                <h4 className="font-bold text-navy text-lg">Process Second</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Processes create consistency and ensure statutory compliance is delivered accurately every time.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue">Step 3</span>
                <h4 className="font-bold text-navy text-lg">Technology Third</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Technology acts as an accelerator, automating repetitive tasks and empowering human expertise.
                </p>
              </div>
            </div>

            <p>
              The sequence is important. Technology can automate a process, but it cannot create a strong organisational culture on its own. A process can create consistency, but it still requires capable people to design, operate and improve it. People create relationships, exercise judgement and establish the trust on which professional services depend.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy">
              Why People Come First
            </h3>
            <p>
              For a Company Secretary or corporate advisor, technical knowledge is only one part of the job. Clients may need advice when they are considering a major business decision, dealing with regulatory uncertainty or trying to establish stronger governance structures. Those situations require communication and judgement as much as technical expertise.
            </p>
            <p>
              A digital platform can provide information. A professional can help a business owner understand what that information means in the context of their specific circumstances.
            </p>
            <p className="font-semibold text-slate-800 border-l-4 border-gold pl-4 py-1 italic bg-slate-50 rounded-r-xl">
              &quot;<strong>Clients remember the confidence they received, not merely the software used to deliver the service.</strong>&quot;
            </p>
            <p>
              Nithya Gokul Associates&apos; philosophy reflects this distinction by placing people and professional responsibility at the centre of its technology strategy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              The Power of Professional Partnerships
            </h2>
            <p>
              A strong professional-services business rarely operates in isolation. Companies often need the combined expertise of Chartered Accountants, Company Secretaries, lawyers, consultants, financial professionals and other specialists. Building a reliable network therefore creates value for both the firm and its clients.
            </p>
            <p>
              Nithya Gokul Associates says that professional firms and advisors have trusted the organisation as an outsourcing and execution partner over the years, with some relationships developing into long-term partnerships.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy">
              Building Long-Term Relationships Through Reliability
            </h3>
            <p>
              Professional partnerships are built differently from ordinary customer relationships. A partner needs confidence that work will be completed accurately, confidentially and on time. More importantly, the partner needs confidence that problems will be communicated rather than hidden.
            </p>
            <p>
              This is one reason why <strong>reliability is a competitive advantage in professional services</strong>. A company does not necessarily need to be the loudest voice in its market if other professionals consistently recommend its services.
            </p>
            <p>
              That approach also creates a virtuous cycle. Reliable execution earns trust, trust creates referrals, referrals create new relationships, and those relationships create opportunities to demonstrate reliability again.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              Why Erode Matters to the Nithya Gokul Associates Story
            </h2>
            <p>
              Erode is more than the location of Nithya Gokul Associates&apos; headquarters. In its LinkedIn article, the organisation describes Erode as a practical classroom for entrepreneurship and highlights the city&apos;s entrepreneurs, industrialists, traders, manufacturers and professionals as an important source of inspiration.
            </p>
            <p>
              This perspective is significant because business success does not only emerge from India&apos;s largest metropolitan centres. Regional cities have their own entrepreneurial ecosystems, established businesses, family enterprises, manufacturers, traders and emerging companies. These businesses need access to high-quality professional services just as much as larger organisations do.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy">
              Learning Business from Local Entrepreneurs
            </h3>
            <p>
              The organisation&apos;s vision extends beyond its own growth. It expresses an ambition to contribute to Erode&apos;s development as a respected business city by supporting stronger governance, ethical business practices, responsible leadership and organisations designed to last.
            </p>
            <p>
              That creates a broader definition of professional success. Instead of measuring achievement only through revenue, employee numbers or market share, a professional services firm can also measure its impact through the businesses it helps strengthen.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              Supporting Better Corporate Governance
            </h2>
            <p>
              Good corporate governance is not merely a regulatory requirement. It can help businesses establish clearer responsibilities, better decision-making structures and stronger accountability. As companies grow, informal decision-making becomes increasingly difficult to manage, making appropriate governance processes more important.
            </p>
            <p>
              A professional Company Secretary can play an important role in helping businesses navigate these requirements. From statutory compliance and corporate documentation to board-related processes and regulatory matters, professional guidance can reduce avoidable risks and give business owners greater clarity.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy">
              Helping Businesses Grow With Confidence
            </h3>
            <p>
              The role of a professional advisory firm is ultimately about enabling better business decisions. When compliance is properly managed, entrepreneurs can spend more time focusing on customers, employees, operations, innovation and growth.
            </p>
            <p>
              Nithya Gokul Associates describes its success in similar terms: not simply by how large the organisation has become, but by how many businesses can operate with greater confidence because their governance, compliance and corporate matters are being handled professionally.
            </p>
            <p className="font-semibold text-navy bg-gold/10 p-4 rounded-xl border-l-4 border-gold">
              <strong>Growth without governance can create fragility; growth supported by strong processes can create durability.</strong>
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              Looking Ahead: Building for the Next Decade
            </h2>
            <p>
              The next phase of business will undoubtedly bring new technologies, new regulations and new operating models. Artificial intelligence will continue to influence professional services, while automation will increasingly handle repetitive activities.
            </p>
            <p>
              But technology alone will not determine which professional organisations succeed. The firms that create lasting value are likely to be those that combine technology with expertise, accountability and strong client relationships.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy">
              Creating Lasting Value through Professional Excellence
            </h3>
            <p>
              The journey of Nithya Gokul Associates demonstrates a model based on gradual, sustainable development. The firm began with a small practice, built relationships through direct client service, developed professional partnerships and expanded its team while continuing to invest in technology. Its current message is not about winning a race but about becoming better every day.
            </p>
            <p>
              For entrepreneurs and business leaders, there is a useful lesson here: <strong>you do not always need to move faster than everyone else; you need to build something capable of lasting longer</strong>.
            </p>
            <p>
              A strong organisation is built through thousands of decisions that may never become headlines—an accurate filing, a timely advisory call, a carefully considered governance decision, a client relationship maintained over many years or a process improved behind the scenes. Those small decisions compound.
            </p>
          </section>

          {/* Section 18 */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-snug border-b border-slate-100 pb-3">
              Conclusion: Choosing the Journey over the Race
            </h2>
            <p>
              The story of Nithya Gokul Associates is ultimately a story about sustainable business building. From its beginnings as a small professional practice to a growing team serving businesses and professional partners, the organisation has emphasised relationships, accountability, governance and continuous improvement.
            </p>
            <p>
              Its approach to technology is equally relevant to today&apos;s business environment. AI and automation can make professionals more efficient, but they should strengthen human expertise rather than attempt to eliminate it. <strong>People create trust, processes create consistency and technology accelerates performance.</strong>
            </p>
            <p>
              For businesses in Erode, Tamil Nadu and beyond, the message is straightforward: sustainable success is not created by chasing every trend. It comes from understanding clients, solving real problems, building reliable systems and creating relationships strong enough to survive changing markets.
            </p>
            <p>
              The race for attention may never end. But businesses that focus on building a meaningful journey can create something much more valuable—a reputation that lasts.
            </p>
          </section>
        </article>

        {/* Frequently Asked Questions Section */}
        <section className="mt-14 space-y-6">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-gold" /> Frequently Asked Questions
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy">
              FAQs About Nithya Gokul Associates
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 md:p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors"
                  >
                    <span className="font-bold text-navy text-base md:text-lg">
                      {index + 1}. {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-navy" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-navy" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Consultation CTA Banner */}
        <div className="mt-16 bg-navy text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center space-y-6">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Partner With Us
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
              Ready to Strengthen Your Corporate Governance?
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Connect with our experienced corporate secretarial specialists in Erode to schedule a strategic consultation or manage your compliance filings.
            </p>
            <div className="pt-2">
              <Link
                href="/contact#consultation"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-bold rounded-xl hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
