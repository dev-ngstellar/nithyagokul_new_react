import fs from "fs/promises";
import path from "path";

export interface DynamicTemplateFolder {
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  imageCount: number;
}

const templateMetadata: Record<string, { title: string; description: string }> = {
  "startup-landing-page": {
    title: "Startup Landing Page",
    description: "A premium modern SaaS startup landing page template designed for high conversion."
  },
  "freelancer": {
    title: "Freelancer Template",
    description: "A premium, creative portfolio template crafted for independent freelancers, designers, and creatives."
  },
  "photography": {
    title: "Photography Template",
    description: "An elegant, highly visual portfolio designed for professional photographers, studios, and visual artists."
  },
  "portfolio-new": {
    title: "Portfolio Template",
    description: "A clean, professional 3-page developer portfolio designed to showcase your skills, experience, and projects effectively."
  }
};

// Desired display order for template categories
const desiredOrder = [
  "startup-landing-page",
  "freelancer",
  "photography",
  "portfolio-new"
];

// Custom priority ordering for template page screenshots
const pagePriorityOrder = [
  "home",
  "about",
  "services",
  "service",
  "features",
  "portfolio",
  "gallery",
  "doctor",
  "caseStudies",
  "appointment",
  "pricing",
  "contact"
];

function findHomeImage(files: string[]): string {
  // 1. home.webp, home.png, Home.webp, Home.png
  const homeMatch = files.find((f) => /^home\.(webp|png|jpg|jpeg|avif|svg)$/i.test(f));
  if (homeMatch) return homeMatch;

  // 2. index.webp, index.png, Index.webp
  const indexMatch = files.find((f) => /^index\.(webp|png|jpg|jpeg|avif|svg)$/i.test(f));
  if (indexMatch) return indexMatch;

  // 3. Starts with home (e.g., home-preview)
  const startsWithHome = files.find((f) => /^home[-_.]/i.test(f));
  if (startsWithHome) return startsWithHome;

  // 4. Fallback to first image
  return files[0];
}

function sortTemplateImages(files: string[]): string[] {
  return [...files].sort((a, b) => {
    const nameA = path.parse(a).name.toLowerCase();
    const nameB = path.parse(b).name.toLowerCase();

    let indexA = pagePriorityOrder.findIndex((p) => nameA === p || nameA.startsWith(p));
    let indexB = pagePriorityOrder.findIndex((p) => nameB === p || nameB.startsWith(p));

    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;

    if (indexA !== indexB) {
      return indexA - indexB;
    }

    return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
  });
}

export async function getDynamicTemplates(): Promise<DynamicTemplateFolder[]> {
  const templateDir = path.join(process.cwd(), "public", "template-images");

  try {
    const entries = await fs.readdir(templateDir, { withFileTypes: true });
    const folders = entries.filter((e) => e.isDirectory() && desiredOrder.includes(e.name));

    const templates: DynamicTemplateFolder[] = [];

    for (const folder of folders) {
      const folderName = folder.name;
      const folderPath = path.join(templateDir, folderName);
      const files = await fs.readdir(folderPath);

      const imageFiles = files.filter((f) => /\.(webp|png|jpg|jpeg|avif|svg)$/i.test(f) && !f.endsWith(".tmp"));

      if (imageFiles.length > 0) {
        const homeImageFile = findHomeImage(imageFiles);

        const meta = templateMetadata[folderName] || {
          title: folderName.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Template",
          description: "Professional web template package designed for high conversion."
        };

        templates.push({
          slug: folderName,
          name: meta.title,
          description: meta.description,
          thumbnail: `/template-images/${folderName}/${homeImageFile}`,
          imageCount: imageFiles.length,
        });
      }
    }

    templates.sort((a, b) => {
      const indexA = desiredOrder.indexOf(a.slug);
      const indexB = desiredOrder.indexOf(b.slug);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.imageCount - b.imageCount;
    });

    return templates;
  } catch (error) {
    console.error("Error reading template-images directory:", error);
    return [];
  }
}

export async function getDynamicTemplateDetails(slug: string) {
  if (!desiredOrder.includes(slug)) {
    return null;
  }

  const folderPath = path.join(process.cwd(), "public", "template-images", slug);

  try {
    const files = await fs.readdir(folderPath);
    const rawImageFiles = files.filter((f) => /\.(webp|png|jpg|jpeg|avif|svg)$/i.test(f) && !f.endsWith(".tmp"));

    const imageFiles = sortTemplateImages(rawImageFiles);
    const homeFile = findHomeImage(imageFiles);

    const meta = templateMetadata[slug] || {
      title: slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Template",
      description: "Professional web template package designed for high conversion."
    };

    const images = imageFiles.map((file) => {
      const nameWithoutExt = path.parse(file).name;
      const formattedImageName = nameWithoutExt
        .split(/[-_]/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      return {
        name: formattedImageName,
        file: `/template-images/${slug}/${file}`,
        isHome: file === homeFile,
      };
    });

    return {
      slug,
      name: meta.title,
      description: meta.description,
      homeImage: `/template-images/${slug}/${homeFile}`,
      images,
    };
  } catch (error) {
    console.error(`Error reading template folder ${slug}:`, error);
    return null;
  }
}
