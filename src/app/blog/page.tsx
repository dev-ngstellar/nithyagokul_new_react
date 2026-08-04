"use client";

import React, { useState, useMemo } from "react";
import { Search, Calendar, Clock, User, ArrowRight, X, BookOpen, ChevronRight, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "companies-act-compliance-2026",
    title: "Understanding Companies Act, 2013: Key Compliance Deadlines for 2026",
    excerpt: "Stay ahead of regulatory fines by keeping track of the mandatory annual filings, board meetings, and statutory audits required for Private Limited Companies.",
    content: [
      "Operating a Private Limited Company in India comes with a structured compliance framework governed by the Ministry of Corporate Affairs (MCA) and the Companies Act, 2013. Non-compliance can lead to heavy financial penalties, disqualification of directors, and legal actions. Knowing your key deadlines in advance is the first step to maintaining a clean compliance record.",
      "Every financial year, companies must host a minimum of four board meetings with a maximum interval of 120 days between two consecutive meetings. In addition, the Annual General Meeting (AGM) must be held within six months from the closing of the financial year. For most companies operating on the April-March cycle, this means the AGM must occur on or before September 30.",
      "Following the AGM, two crucial statutory forms must be filed with the Registrar of Companies (RoC): Form AOC-4 (for filing financial statements, including balance sheet and profit & loss account) within 30 days of the AGM, and Form MGT-7 (for filing the Annual Return) within 60 days of the AGM.",
      "Additionally, companies must file Form MSME-1 semi-annually to declare outstanding payments to MSME vendors, and Form DPT-3 annually to return information about deposits and outstanding loans. Maintaining proper statutory registers at the registered office and keeping directors' KYC updated via DIR-3 KYC are other recurring compliance tasks that cannot be ignored.",
      "At Nithya Gokul Associates, we advise corporate boards to set up compliance calendars in advance of the financial year. Partnering with a dedicated corporate secretary minimizes governance risks and lets founders focus entirely on business growth."
    ],
    category: "Compliance",
    date: "July 2, 2026",
    readTime: "5 min read",
    author: "CS R Nithya Gokul",
    authorRole: "Managing Partner",
    tags: ["Companies Act", "MCA", "Annual Filings", "Corporate Governance"]
  },
  {
    id: "secretarial-audit-funding-readiness",
    title: "Why a Secretarial Audit is Crucial for Venture Capital and Funding",
    excerpt: "Before signing term sheets, institutional investors execute intensive compliance due diligence. Discover how a Secretarial Audit ensures deal success.",
    content: [
      "When a startup or growing enterprise seeks institutional funding—whether through Venture Capital (VC), Private Equity (PE), or a joint venture—the due diligence process can make or break the deal. While financial and business due diligence are widely discussed, secretarial and legal compliance due diligence are equally critical.",
      "Venture Capitalists are highly risk-averse when it comes to regulatory defaults. A compliance failure in the past—such as unauthorized share allotments, incorrect filing of capital structures, or missing board resolutions—can stall or terminate an investment. This is where a voluntary Secretarial Audit acts as a powerful preemptive tool.",
      "A Secretarial Audit, conducted under Section 204 of the Companies Act, is an independent review of the company's compliance history. It examines not just MCA filings, but also FEMA regulations (crucial for foreign direct investments), SEBI guidelines (for public or listed structures), employment laws, and intellectual property registrations.",
      "By identifying gaps beforehand, the company can take corrective measures—such as filing compounding applications or back-filing forms—prior to initiating investor negotiations. Showing investors a clean, audited compliance report instills confidence and speeds up the transaction process.",
      "Investing in governance early isn't a cost; it's a value-driver. A startup with impeccable legal records and clean corporate books always commands a higher premium and negotiates from a position of strength."
    ],
    category: "Audits",
    date: "June 18, 2026",
    readTime: "7 min read",
    author: "CS R Nithya Gokul",
    authorRole: "Sr. Associate Consultant",
    tags: ["Due Diligence", "Venture Capital", "Fundraising", "FEMA"]
  },
  {
    id: "trademark-registration-brand-protection",
    title: "Trademark Registration in India: Protecting Your Brand Identity",
    excerpt: "Your brand is your most valuable asset. Learn the legal step-by-step process of securing trademarks to prevent copycats and build brand equity.",
    content: [
      "In today's competitive marketplace, a unique brand name, logo, or slogan distinguishes your business from competitors. However, simply using a brand name does not grant you exclusive legal rights. To prevent competitors from copying or dilute your identity, registering a trademark is essential.",
      "The trademark registration process in India is governed by the Trade Marks Act, 1999. The first and most critical step is conducting a comprehensive trademark search. This search determines whether your proposed mark is unique and ensures it does not conflict with existing registered trademarks or pending applications.",
      "Once uniqueness is verified, the trademark application (Form TM-A) is filed online with the Controller General of Patents, Designs and Trade Marks. Upon filing, you can immediately begin using the symbol 'TM' next to your brand name. The Registrar then reviews the application for distinctiveness and potential conflicts.",
      "If the Registrar finds no issues, the trademark is advertised in the Trade Marks Journal for a period of four months. This window allows third parties to oppose the registration if they believe it infringes on their existing rights. If no oppositions are filed, or if oppositions are resolved in your favor, the trademark is registered, and the symbol '®' can be used.",
      "A registered trademark is valid for 10 years and can be renewed indefinitely. It acts as an intangible asset that can be licensed, franchised, or sold, significantly enhancing the enterprise value of your firm."
    ],
    category: "Intellectual Property",
    date: "June 05, 2026",
    readTime: "6 min read",
    author: "CS R Nithya Gokul",
    authorRole: "Associate Consultant",
    tags: ["Trademark", "IP Rights", "Brand Protection", "Legal Assets"]
  },
  {
    id: "business-valuation-methods-guide",
    title: "Demystifying Business Valuation: Key Methods and Best Practices",
    excerpt: "Whether preparing for equity allocation, tax compliance, or mergers, understanding how your business is valued is essential. Here is a simplified guide.",
    content: [
      "Business valuation is both an art and a science. It is the process of determining the economic value of a business, share, or asset. Valuations are required under various regulatory frameworks, including the Companies Act, Income Tax Act, FEMA, and IBBI, as well as for commercial purposes like mergers, acquisitions, and joint ventures.",
      "There are three primary approaches to business valuation: the Asset Approach, the Income Approach, and the Market Approach. The choice of method depends on the nature of the business, its stage of development, and the purpose of the valuation.",
      "1. The Income Approach (Discounted Cash Flow - DCF): This method values a company based on the present value of its projected future cash flows. It is highly suitable for stable, growth-oriented companies with predictable earnings. It requires detailed financial projections and a carefully calculated discount rate.",
      "2. The Market Approach (Relative Valuation): This approach compares the target company to similar publicly traded companies or recent transaction values in the same industry. Common multiples used include Price-to-Earnings (P/E), EV-to-EBITDA, and Price-to-Sales (P/S). It reflects real-time market sentiment but depends heavily on finding truly comparable peers.",
      "3. The Asset Approach (Net Asset Value - NAV): This method calculates the value of the company's assets minus its liabilities. It is generally used for asset-heavy businesses, holding companies, or firms undergoing liquidation.",
      "Under Indian regulations, valuations for official or regulatory purposes must be certified by an IBBI Registered Valuer. Ensuring that your assumptions are realistic and supported by market data is key to a robust valuation report that stands up to regulatory scrutiny."
    ],
    category: "Corporate Finance",
    date: "May 24, 2026",
    readTime: "8 min read",
    author: "CS R Nithya Gokul",
    authorRole: "Managing Partner",
    tags: ["Business Valuation", "Registered Valuer", "DCF", "M&A"]
  },
  {
    id: "incorporation-pvt-ltd-guide",
    title: "The Step-by-Step Guide to Private Limited Company Incorporation",
    excerpt: "Ready to launch your business? Here is the complete roadmap to registering a Private Limited Company in India from scratch.",
    content: [
      "Incorporating a Private Limited (Pvt Ltd) Company is the most popular way to start a business in India. It offers limited liability protection, a distinct legal status, and high credibility among investors, clients, and partners. Here is a step-by-step roadmap to the incorporation journey.",
      "Step 1: Obtain Digital Signature Certificates (DSC). Since all filings are done online, the proposed directors must secure a Class-3 DSC to sign incorporation documents electronically.",
      "Step 2: Reserve Company Name. Using the SPICe+ Part A form on the MCA portal, you can apply for name approval. The name must be unique, descriptive of your business activities, and not infringe on any existing trademarks.",
      "Step 3: Draft MOA & AOA. The Memorandum of Association (MOA) defines the company's objectives and scope, while the Articles of Association (AOA) establish the rules for internal management and share capital distribution.",
      "Step 4: File SPICe+ Part B. This is the main incorporation application, which applies for the Certificate of Incorporation, Director Identification Numbers (DIN), PAN, TAN, and mandatory bank account creation, along with registrations for EPFO, ESIC, and Professional Tax in one integrated process.",
      "Step 5: Receive Certificate of Incorporation. Once verified by the Central Registration Centre (CRC) of the MCA, the Certificate of Incorporation is issued, bearing your unique Corporate Identification Number (CIN). You are now legally ready to start operations and open your business bank account!"
    ],
    category: "Incorporation",
    date: "May 10, 2026",
    readTime: "6 min read",
    author: "CS R Nithya Gokul",
    authorRole: "Associate Consultant",
    tags: ["Company Registration", "SPICe+", "MCA Portal", "Startup Launch"]
  },
  {
    id: "voluntary-liquidation-solvent-exit",
    title: "A Guide to Voluntary Liquidation for Solvent Businesses",
    excerpt: "Closing a business doesn't have to be a legal headache. Learn the clean, structured exit process under the Insolvency and Bankruptcy Code.",
    content: [
      "While setting up a business is a milestone, there are times when shareholders choose to close operations. Whether it is due to the completion of the business purpose, restructuring, or shareholders deciding to retire, a solvent business can choose a structured legal exit through Voluntary Liquidation.",
      "In India, voluntary liquidation is governed by Section 59 of the Insolvency and Bankruptcy Code (IBC), 2016. To initiate this process, the company must be fully solvent, meaning it has no debts or is able to pay all its debts in full from the sale of its assets.",
      "The process starts with a Declaration of Solvency backed by audited financial statements of the company. This declaration is signed by a majority of the directors, stating that the company has no debts or that it will pay its debts within a specified period, and that the company is not being liquidated to defraud any person.",
      "Within four weeks of the declaration, a Special Resolution must be passed by the shareholders in a general meeting, approving the voluntary liquidation of the company and appointing an IBBI Registered Insolvency Professional as the Liquidator.",
      "The Liquidator takes control of the company's assets, publicizes the liquidation to receive any claims from creditors, settles any outstanding liabilities, and distributes the remaining proceeds to the shareholders. Once the affairs of the company are fully wound up, the Liquidator files an application with the National Company Law Tribunal (NCLT) for a formal dissolution order."
    ],
    category: "Corporate Finance",
    date: "April 29, 2026",
    readTime: "7 min read",
    author: "CS R Nithya Gokul",
    authorRole: "Managing Partner",
    tags: ["Insolvency", "Voluntary Liquidation", "NCLT", "IBC 2016"]
  }
];

const CATEGORIES = ["All", "Compliance", "Audits", "Incorporation", "Intellectual Property", "Corporate Finance"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Filter blog posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  return (
    <div className="block w-full min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-[70px] md:py-[90px] lg:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#071B38,#0F2E5E)]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Knowledge &amp; Insights
          </span>
          <h1 className="font-serif text-4xl md:text-[52px] lg:text-[64px] font-bold leading-[1.1]">
            NGA Knowledge Hub
          </h1>
          <p className="text-[16px] md:text-[18px] text-slate-300 max-w-xl mx-auto leading-[1.8]">
            Expert commentary, compliance updates, and guides to help you navigate corporate governance, trademarks, and business operations.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-[70px] md:py-[90px] max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Left Side: Filter and Search Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Search Box */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-800 text-[16px]">Search Posts</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue text-[14px]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Categories List */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="font-semibold text-slate-800 text-[16px]">Categories</h3>
            <div className="flex flex-col space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedTag(null); // Reset tag filter on category change
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-[14px] text-left transition-all ${selectedCategory === cat
                      ? "bg-navy/5 text-navy font-semibold border-l-4 border-gold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                >
                  <span>{cat}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="font-semibold text-slate-800 text-[16px]">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-3 py-1 rounded-full text-[12px] flex items-center gap-1.5 transition-all ${selectedTag === tag
                      ? "bg-gold text-navy font-semibold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                    }`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </button>
              ))}
            </div>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-[12px] text-red-500 hover:underline pt-1 block"
              >
                Clear Tag Filter
              </button>
            )}
          </div>
        </div>

        {/* Right Side: Blog Posts List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center border-b border-slate-200 pb-4">
            <p className="text-slate-500 text-[14px]">
              Showing <span className="font-semibold text-slate-800">{filteredPosts.length}</span> articles
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-[18px] font-semibold text-slate-700">No Articles Found</h3>
              <p className="text-slate-500 max-w-sm mx-auto text-[14px]">
                We couldn't find any blog posts matching your search query or filters. Try adjusting your search term or category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedTag(null);
                }}
                className="px-5 py-2 bg-navy text-white rounded-xl text-[14px] font-semibold hover:bg-navy/90 transition-all"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-gold/10 text-navy text-[12px] font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-slate-400 text-[12px] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-[20px] font-bold text-navy leading-snug group-hover:text-blue transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-[14px] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center text-navy font-bold text-[12px]">
                        {post.author[0]}
                      </div>
                      <div>
                        <p className="text-slate-700 font-semibold text-[12px] leading-none">
                          {post.author}
                        </p>
                        <p className="text-slate-400 text-[10px] mt-0.5">
                          {post.authorRole}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActivePost(post)}
                      className="flex items-center gap-1 text-[13px] font-bold text-navy group-hover:text-gold transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-[800px] w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">

            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center z-10">
              <span className="bg-gold/15 text-navy text-[12px] font-bold px-3 py-1 rounded-full">
                {activePost.category}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10 space-y-6">
              <div className="space-y-4">
                <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-navy leading-tight">
                  {activePost.title}
                </h2>

                {/* Meta details */}
                <div className="flex flex-wrap gap-4 text-slate-500 text-[13px] py-2 border-y border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-gold" />
                    <span>By <strong className="text-slate-700">{activePost.author}</strong> ({activePost.authorRole})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>{activePost.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{activePost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Main Content Paragraphs */}
              <div className="text-slate-700 text-[15px] md:text-[16px] leading-[1.8] space-y-5 font-sans">
                {activePost.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-100 space-y-2">
                <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Article Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {activePost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[12px] flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3 text-slate-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 rounded-b-3xl border-t border-slate-100 text-center">
              <p className="text-slate-500 text-[13px]">
                Need expert advice on this topic?{" "}
                <a
                  href="/contact"
                  className="text-navy font-bold hover:underline inline-flex items-center gap-1 text-gold"
                >
                  Contact Our Specialists <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
