"use client";

import React from "react";
import ProcessTimeline from "./ProcessTimeline";
import { LayoutTemplate, Palette, Code2, Rocket } from "lucide-react";

export default function WebDesigningProcess() {
  return (
    <ProcessTimeline
      badge="WEB DESIGNING PROCESS"
      title={
        <>
          Your Digital Presence <br />
          In 4 Simple Steps
        </>
      }
      description="From wireframes to a blazing fast live website, we ensure a seamless and professional engineering process."
      steps={[
        {
          num: "01",
          icon: <LayoutTemplate className="w-6 h-6 transition-all duration-300" />,
          title: "Wireframing",
          desc: "Mapping out the pages, user navigation, and call-to-actions.",
        },
        {
          num: "02",
          icon: <Palette className="w-6 h-6 transition-all duration-300" />,
          title: "UI Design",
          desc: "Creating premium visuals, custom typography scales, and interactive previews.",
        },
        {
          num: "03",
          icon: <Code2 className="w-6 h-6 transition-all duration-300" />,
          title: "Engineering",
          desc: "Coding the application using Next.js, Framer Motion, and Tailwind CSS.",
        },
        {
          num: "04",
          icon: <Rocket className="w-6 h-6 transition-all duration-300" />,
          title: "Launch & SEO",
          desc: "Deploying the site to fast hosting systems and setting up search console listings.",
        },
      ]}
      trustStripItems={[
        "Modern Stack",
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
      ]}
    />
  );
}
