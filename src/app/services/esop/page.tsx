import React from "react";
import type { Metadata } from "next";
import { categoriesData } from "@/data/categoryData";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

const category = categoriesData.find((c) => c.slug === "esop")!;

export const metadata: Metadata = {
  title: category?.metadata?.title || "ESOP & Share-Based Benefit Schemes",
  description: category?.metadata?.description || "ESOP advisory services by Nithya Gokul Associates",
  openGraph: {
    title: category?.metadata?.ogTitle || "ESOP & Share-Based Benefit Schemes",
    description: category?.metadata?.description,
    url: "https://nithyagokul.in/services/esop",
    siteName: "Nithya Gokul Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: category?.metadata?.ogTitle,
    description: category?.metadata?.description,
  },
  alternates: {
    canonical: "https://nithyagokul.in/services/esop",
  },
};

export default function ESOPPage() {
  return <ServiceCategoryPage category={category} />;
}
