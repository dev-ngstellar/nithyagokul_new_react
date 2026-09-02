import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nithya Gokul Associates: Building a Business on Trust, Governance & Growth",
  description:
    "Discover the journey of Nithya Gokul Associates, from a one-person practice to a growing corporate advisory firm built on trust, governance, people, process and technology.",
  keywords: [
    "Nithya Gokul Associates",
    "corporate compliance services",
    "company secretary Erode",
    "secretarial advisory services",
    "corporate governance Tamil Nadu",
    "business advisory Erode",
    "company compliance services",
    "practising company secretary Erode"
  ],
  alternates: {
    canonical: "/nithya-gokul-associates-business-journey",
  },
  openGraph: {
    title: "Nithya Gokul Associates: Building a Business on Trust, Governance & Growth",
    description:
      "Discover the journey of Nithya Gokul Associates, from a one-person practice to a growing corporate advisory firm built on trust, governance, people, process and technology.",
    url: "https://nithyagokul.in/nithya-gokul-associates-business-journey",
    type: "article",
    siteName: "Nithya Gokul Associates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithya Gokul Associates: Building a Business on Trust, Governance & Growth",
    description:
      "Discover the journey of Nithya Gokul Associates, from a one-person practice to a growing corporate advisory firm built on trust, governance, people, process and technology.",
  },
};

export default function BusinessJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
