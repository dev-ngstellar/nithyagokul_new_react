import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "iso")!;

export const metadata: Metadata = {
  title: category?.metadata?.title || "ISO Certification Assistance",
  description: category?.metadata?.description || "ISO certification assistance by Nithya Gokul Associates",
  openGraph: {
    title: category?.metadata?.ogTitle || "ISO Certification Assistance",
    description: category?.metadata?.description,
    url: "https://nithyagokul.com/services/iso",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category?.metadata?.ogTitle,
    description: category?.metadata?.description,
  },
  alternates: {
    canonical: "https://nithyagokul.com/services/iso",
  },
};

export default function ISOPage() {
  return <ServiceCategoryPage category={category} />;
}
