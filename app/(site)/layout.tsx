import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Navigation from "@/components/layout/Navigation";
import "../globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

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
        url: "https://github.com/Koigor97/koi/blob/main/public/website-og-image.png", // Update with your image
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
        url: "https://github.com/Koigor97/koi/blob/main/public/website-og-image.png", // Ensure this image is optimized for Twitter
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
