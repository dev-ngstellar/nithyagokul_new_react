import React from "react";
import BGVHero from "@/components/BGVHero";
import BGVVerificationGrid from "@/components/BGVVerificationGrid";

export const metadata = {
  title: "Background Verification Solutions | Nithya Gokul Associates",
  description: "Digital Trust Platform Empowering HR managers and service providers through comprehensive Background Verifications (BGV) and compliance checks.",
};

export default function BackgroundVerificationPage() {
  return (
    <main className="w-full bg-[#071B38] min-h-screen">
      <BGVHero />
      <BGVVerificationGrid />
    </main>
  );
}
