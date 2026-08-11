import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "dsc")!;

export const metadata: Metadata = {
  title: category?.metadata?.title || "Digital Signature Certificate (DSC)",
  description: category?.metadata?.description || "DSC services by Nithya Gokul Associates",
  openGraph: {
    title: category?.metadata?.ogTitle || "Digital Signature Certificate (DSC)",
    description: category?.metadata?.description,
    url: "https://nithyagokul.com/services/dsc",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category?.metadata?.ogTitle,
    description: category?.metadata?.description,
  },
  alternates: {
    canonical: "https://nithyagokul.com/services/dsc",
  },
};

export default function DSCPage() {
  return <ServiceCategoryPage category={category} />;
}
