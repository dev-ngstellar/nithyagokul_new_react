import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "apeda")!;

export const metadata: Metadata = {
  title: category?.metadata?.title || "APEDA Registration & e-RCMC Services",
  description: category?.metadata?.description || "APEDA registration services by Nithya Gokul Associates",
  openGraph: {
    title: category?.metadata?.ogTitle || "APEDA Registration & e-RCMC Services",
    description: category?.metadata?.description,
    url: "https://nithyagokul.com/services/apeda",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category?.metadata?.ogTitle,
    description: category?.metadata?.description,
  },
  alternates: {
    canonical: "https://nithyagokul.com/services/apeda",
  },
};

export default function APEDAPage() {
  return <ServiceCategoryPage category={category} />;
}
