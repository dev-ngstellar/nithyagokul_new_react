import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "business-sale-investment")!;

export const metadata: Metadata = {
  title: category.metadata.title,
  description: category.metadata.description,
  openGraph: {
    title: category.metadata.ogTitle,
    description: category.metadata.description,
    url: "https://nithyagokul.in/services/business-sale-investment",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category.metadata.ogTitle,
    description: category.metadata.description,
  },
  alternates: {
    canonical: "https://nithyagokul.in/services/business-sale-investment",
  },
};

export default function BusinessSaleInvestmentPage() {
  return <ServiceCategoryPage category={category} />;
}
