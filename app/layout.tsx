/**
 * @file RootLayout.tsx
 * @description
 *   This file defines the RootLayout component which serves as the top-level layout for the entire
 *   application. It sets up global metadata (used for SEO, social sharing, and browser configuration)
 *   using Next.js' Metadata API, applies a global Google Font (Nunito), and wraps all page content with
 *   consistent UI elements including a Navigation header and a Footer.
 *
 *   The layout component ensures that every page in the application receives a consistent structure
 *   and styling. Global styles are imported from "globals.css".
 *
 * @usage
 *   This component is automatically used by Next.js in the app directory as the root layout.
 *   All pages rendered by the application are children of this layout.
 *
 * @remarks
 *   - The Nunito font is loaded with the "swap" display property to optimize rendering.
 *   - The Metadata object provides key SEO and social sharing information such as title, description,
 *     keywords, and open graph data.
 */

import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Navigation from "@/components/layout/Navigation";
import "./globals.css";
import Footer from "@/components/layout/Footer";

// Load the Nunito font from Google with the latin subset and swap display.
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

// Define global metadata for the site.
export const metadata: Metadata = {
  title: "Koigor | Dev Portfolio ",
  description:
      "Explore my software development journey, where I combine creativity, problem-solving, and technical expertise. From web applications and mobile solutions to dynamic blogs and data-driven projects, I continuously build and refine my skills across multiple domains. Follow my blog for insights into development techniques, project highlights, and lessons learned as I navigate the world of software engineering.",
  keywords: [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Data Science",
  ],
  authors: { name: "Koigor" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Koigor's Dev Journey | Portfolio & Blog",
    description:
        "Welcome to my personal portfolio, where I showcase my development projects, blog, and career journey.",
    siteName: "Koigor | Dev Portfolio",
    images: [
      {
        url: "https://github.com/Koigor97/koi/blob/main/public/website-og-image.png",
        width: 1200,
        height: 630,
        alt: "Koigor Developer Journey Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@koigor_f",
    creator: "@koigor_f",
    title: "Koigor's Dev Journey | Portfolio & Blog",
    description:
        "Follow my journey in software development, read blog posts, and explore my projects.",
    images: [
      {
        url: "https://github.com/Koigor97/koi/blob/main/public/website-og-image.png",
        width: 1200,
        height: 630,
        alt: "Koigor's Developer Journey Twitter Image",
      },
    ],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * RootLayout Component
 *
 * This component serves as the global layout for the application. It wraps all page content with
 * a consistent header (Navigation) and footer (Footer) and applies the Nunito font globally.
 * The layout also ensures that global metadata is available for SEO and social media sharing.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The page content to render within the layout.
 * @returns {JSX.Element} The complete layout with header, main content, and footer.
 */
export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
      <body className={`${nunito.className} antialiased`}>
      {/* Header: Contains the Navigation component */}
      <header className="max-w-custom-clamp-3 mx-auto md:max-w-custom-clamp-2">
        <Navigation />
      </header>
      {/* Main content area where all child pages are rendered */}
      <main className="max-w-custom-clamp-3 mx-auto md:max-w-custom-clamp-2">
        {children}
      </main>
      {/* Footer component */}
      <Footer />
      </body>
      </html>
  );
}
