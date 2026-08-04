import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nithya Gokul Associates",
    default: "Nithya Gokul Associates | Company Secretaries & Legal Advisors",
  },
  description: "Corporate consulting, secretarial audits, trademark registrations, company incorporations, and business advisory services by Nithya Gokul Associates.",
  metadataBase: new URL("https://nithyagokul.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nithyagokul.com",
    title: "Nithya Gokul Associates | Legal & Compliance Experts",
    description: "Premium corporate compliance, secretarial audit, brand registration, and business valuations.",
    siteName: "Nithya Gokul Associates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithya Gokul Associates | Legal & Compliance Experts",
    description: "Premium corporate compliance, secretarial audit, brand registration, and business valuations.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-custom">
        <Header />
        <main className="flex-grow pt-00 md:pt-20 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
