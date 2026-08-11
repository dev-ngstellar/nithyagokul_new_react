import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "icegate")!;

export const metadata: Metadata = {
  title: category?.metadata?.title || "ICEGATE Registration & Services",
  description: category?.metadata?.description || "ICEGATE registration services by Nithya Gokul Associates",
  openGraph: {
    title: category?.metadata?.ogTitle || "ICEGATE Registration & Services",
    description: category?.metadata?.description,
    url: "https://nithyagokul.com/services/icegate",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category?.metadata?.ogTitle,
    description: category?.metadata?.description,
  },
  alternates: {
    canonical: "https://nithyagokul.com/services/icegate",
  },
};

export default function ICEGATEPage() {
  return <ServiceCategoryPage category={category} />;
}
