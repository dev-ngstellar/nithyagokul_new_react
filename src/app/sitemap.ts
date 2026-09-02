import type { MetadataRoute } from "next";
import { servicesData, registrationsData, openPositions } from "@/data/mockData";
import { categoriesData } from "@/data/categoryData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nithyagokul.in";
  const currentDate = new Date().toISOString();

  // Static routes
  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/careers",
    "/esg-reporting",
    "/background-verification",
    "/trademark",
    "/privacy-policy",
    "/terms-conditions",
    "/nithya-gokul-associates-business-journey",
    "/services",
    "/registrations",
    "/registrations/fssai-license",
    "/registrations/ie-code",
    "/registrations/apeda",
    "/registrations/icegate",
    "/registrations/iso",
    "/registrations/lei",
    "/templates",
  ];

  const staticRoutes = staticPaths.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Service categories (5 category pages)
  const categoryRoutes = categoriesData.map((category) => ({
    url: `${baseUrl}/services/${category.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic service detail pages
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Filter out registration slugs that already have explicit static page routes above
  const staticRegistrationSlugs = new Set([
    "apeda",
    "icegate",
    "iso",
    "lei",
    "ie-code",
  ]);

  const registrationRoutes = registrationsData
    .filter((reg) => !staticRegistrationSlugs.has(reg.slug))
    .map((reg) => ({
      url: `${baseUrl}/registrations/${reg.slug}/`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  // Career position pages
  const careerRoutes = openPositions.map((job) => ({
    url: `${baseUrl}/careers/${job.id}/`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...registrationRoutes,
    ...careerRoutes,
  ];
}
