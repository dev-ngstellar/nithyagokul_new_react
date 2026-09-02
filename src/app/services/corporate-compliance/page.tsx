import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "corporate-compliance")!;

export const metadata: Metadata = {
  title: category.metadata.title,
  description: category.metadata.description,
  openGraph: {
    title: category.metadata.ogTitle,
    description: category.metadata.description,
    url: "https://nithyagokul.in/services/corporate-compliance",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category.metadata.ogTitle,
    description: category.metadata.description,
  },
  alternates: {
    canonical: "https://nithyagokul.in/services/corporate-compliance",
  },
};

export default function CorporateCompliancePage() {
  return <ServiceCategoryPage category={category} />;
}
