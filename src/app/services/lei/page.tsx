import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "lei")!;

export const metadata: Metadata = {
  title: category?.metadata?.title || "Legal Entity Identifier (LEI)",
  description: category?.metadata?.description || "LEI services by Nithya Gokul Associates",
  openGraph: {
    title: category?.metadata?.ogTitle || "Legal Entity Identifier (LEI)",
    description: category?.metadata?.description,
    url: "https://nithyagokul.com/services/lei",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category?.metadata?.ogTitle,
    description: category?.metadata?.description,
  },
  alternates: {
    canonical: "https://nithyagokul.com/services/lei",
  },
};

export default function LEIPage() {
  return <ServiceCategoryPage category={category} />;
}
