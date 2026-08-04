import React from "react";
import { notFound } from "next/navigation";
import { getDynamicTemplateDetails, getDynamicTemplates } from "@/lib/getTemplates";
import TemplateDetailsClient from "@/components/TemplateDetailsClient";

interface TemplatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const templates = await getDynamicTemplates();
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: TemplatePageProps) {
  const resolvedParams = await params;
  const template = await getDynamicTemplateDetails(resolvedParams.slug);

  if (!template) {
    return {
      title: "Template Not Found",
    };
  }

  return {
    title: `${template.name} Template | Nithya Gokul Associates`,
    description: `Explore the ${template.name} template screens and layout designs.`,
  };
}

export default async function TemplateDetailsPage({ params }: TemplatePageProps) {
  const resolvedParams = await params;
  const template = await getDynamicTemplateDetails(resolvedParams.slug);

  if (!template) {
    notFound();
  }

  return <TemplateDetailsClient template={template} />;
}
