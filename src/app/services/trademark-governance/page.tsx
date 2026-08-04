import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "trademark-governance")!;

export const metadata: Metadata = {
  title: category.metadata.title,
  description: category.metadata.description,
  openGraph: {
    title: category.metadata.ogTitle,
    description: category.metadata.description,
    url: "https://nithyagokul.com/services/trademark-governance",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category.metadata.ogTitle,
    description: category.metadata.description,
  },
  alternates: {
    canonical: "https://nithyagokul.com/services/trademark-governance",
  },
};

export default function TrademarkGovernancePage() {
  return <ServiceCategoryPage category={category} />;
}
