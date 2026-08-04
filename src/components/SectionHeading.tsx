import React from "react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <StaggerContainer className={`flex flex-col ${alignClass} space-y-4 mb-14`}>
      {badge && (
        <StaggerItem>
          <span className="px-3 py-1 bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest rounded-full">
            {badge}
          </span>
        </StaggerItem>
      )}
      <StaggerItem>
        <h2
          className={`font-serif text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.1] max-w-3xl ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </StaggerItem>
      <StaggerItem>
        {align === "center" ? (
          <div className="w-20 h-1 bg-gold rounded-full" />
        ) : (
          <div className="w-16 h-1 bg-gold rounded-full" />
        )}
      </StaggerItem>
      {subtitle && (
        <StaggerItem>
          <p
            className={`text-[16px] md:text-[18px] lg:text-[20px] max-w-2xl leading-[1.8] ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {subtitle}
          </p>
        </StaggerItem>
      )}
    </StaggerContainer>
  );
}
