import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "company-incorporation")!;

export const metadata: Metadata = {
  title: category.metadata.title,
  description: category.metadata.description,
  openGraph: {
    title: category.metadata.ogTitle,
    description: category.metadata.description,
    url: "https://nithyagokul.in/services/company-incorporation",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category.metadata.ogTitle,
    description: category.metadata.description,
  },
  alternates: {
    canonical: "https://nithyagokul.in/services/company-incorporation",
  },
};

export default function CompanyIncorporationPage() {
  return <ServiceCategoryPage category={category} />;
}
