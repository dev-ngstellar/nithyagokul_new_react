"use client";

import React from "react";
import ProcessTimeline from "./ProcessTimeline";
import { Building2, ClipboardCheck, FileCheck2, Rocket } from "lucide-react";

export default function RegistrationTimeline() {
  return (
    <ProcessTimeline
      badge="COMPANY REGISTRATION PROCESS"
      title={
        <>
          Your Registration Journey <br />
          In 4 Simple Steps
        </>
      }
      description="From company name approval to incorporation certificate, we handle every stage professionally."
      steps={[
        {
          num: "01",
          icon: <Building2 className="w-6 h-6 transition-all duration-300" />,
          title: "Name Approval",
          desc: "Reserve your company name and receive professional guidance for selecting the right business identity.",
        },
        {
          num: "02",
          icon: <ClipboardCheck className="w-6 h-6 transition-all duration-300" />,
          title: "Verification",
          desc: "Verification of directors, documents, compliance requirements and eligibility criteria.",
        },
        {
          num: "03",
          icon: <FileCheck2 className="w-6 h-6 transition-all duration-300" />,
          title: "Registration",
          desc: "Preparation and filing of incorporation documents including MoA and AoA with MCA.",
        },
        {
          num: "04",
          icon: <Rocket className="w-6 h-6 transition-all duration-300" />,
          title: "Company Launch",
          desc: "Receive your incorporation certificate and begin operations with compliance support.",
        },
      ]}
      trustStripItems={[
        "MCA Compliant",
        "Expert Assistance",
        "Fast Processing",
        "Dedicated Consultant",
      ]}
    />
  );
}
