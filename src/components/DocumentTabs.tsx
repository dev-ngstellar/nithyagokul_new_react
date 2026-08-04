"use client";

import React, { useState } from "react";
import { CheckCircle2, Building2, User, Users, Briefcase } from "lucide-react";

interface TabContent {
  id: string;
  label: string;
  icon: React.ReactNode;
  documents: string[];
}

const tabs: TabContent[] = [
  {
    id: "proprietorship",
    label: "Proprietorship",
    icon: <User className="w-5 h-5" />,
    documents: [
      "PAN Card of the individual proprietor",
      "Aadhaar card or passport copy of the proprietor",
      "Cancelled cheque or bank certificate with pre-printed account name",
      "Address proof of the business (utility bill or rent agreement)"
    ]
  },
  {
    id: "partnership",
    label: "Partnership",
    icon: <Users className="w-5 h-5" />,
    documents: [
      "PAN Card of the Partnership Firm",
      "Aadhaar card and PAN of all Partners",
      "Partnership Deed",
      "Cancelled cheque with pre-printed firm name",
      "Address proof of the business premises"
    ]
  },
  {
    id: "company",
    label: "Company",
    icon: <Building2 className="w-5 h-5" />,
    documents: [
      "PAN Card of the Private Limited / Public Limited Company",
      "Aadhaar and PAN of all Directors",
      "Certificate of Incorporation (COI)",
      "Board Resolution authorizing IEC application",
      "Cancelled cheque with pre-printed company name",
      "Address proof of the registered office"
    ]
  },
  {
    id: "llp",
    label: "LLP",
    icon: <Briefcase className="w-5 h-5" />,
    documents: [
      "PAN Card of the Limited Liability Partnership",
      "Aadhaar and PAN of all Designated Partners",
      "Certificate of Incorporation & LLP Agreement",
      "Resolution by Designated Partners",
      "Cancelled cheque with pre-printed LLP name",
      "Address proof of the registered office"
    ]
  }
];

export default function DocumentTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? "bg-blue text-white shadow-lg shadow-blue/20 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue/30 hover:text-blue hover:bg-slate-50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`transition-all duration-500 absolute w-full top-0 left-0 ${
                isActive
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-8 pointer-events-none z-0"
              }`}
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center text-blue">
                    {tab.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy">
                      Documents for {tab.label}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Checklist required for DGFT registration
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tab.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue/20 hover:bg-white transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-blue" />
                      </div>
                      <span className="text-[15px] font-medium text-slate-700 leading-relaxed">
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
