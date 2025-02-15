/**
 * @file HeroBox.tsx
 * @description
 *   The HeroBox component serves as the hero section of the website's homepage.
 *   It displays a friendly greeting, a brief introduction about the developer, actionable
 *   buttons for contacting and downloading the resume, and social media links.
 *
 *   This component uses pre-built UI components such as Card, CardContent, and Button, along with
 *   icons from react-simple-icons for GitHub, LinkedIn, and Instagram. It is styled using Tailwind CSS,
 *   featuring a gradient background with blur effects and responsive typography.
 *
 * @example
 *   <HeroBox className="custom-class" />
 *
 * @remarks
 *   - The `className` prop allows additional styling to be passed in from the parent component.
 *   - The Button component uses the `asChild` prop to render anchor tags as its children,
 *     ensuring proper semantics for links.
 */

import { Card, CardContent } from "../ui/card";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import { Button } from "../ui/button";
import Link from "next/link";

/**
 * HeroBox Component
 *
 * Renders a hero section containing:
 *  - A greeting and introduction text.
 *  - Action buttons for contacting via email and downloading the resume.
 *  - Social media icon links for GitHub, LinkedIn, and Instagram.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Optional additional class names for custom styling.
 * @returns {JSX.Element} The rendered hero section.
 */
function HeroBox({ className }: { className?: string }) {
  return (
      <Card
          className={`${className} bg-gradient-to-r from-[#f3cc6b] via-[#fcd17a] to-[#fad997] bg-opacity-30 backdrop-blur-md shadow-lg py-10 px-8`}
      >
        <CardContent className="grid gap-6 p-0">
          {/* Hero Text Section */}
          <div className="grid gap-2">
            <h1 className="text-3xl md:text-4xl font-bold">
              Hi 👋🏾, I&apos;m Koigor, a dedicated Software Developer. Turning
              complex problems into innovative solutions with code.
            </h1>
            <p className="text-lg md:text-xl">
              I specialize in creating scalable, dynamic, and responsive web
              applications using modern technologies like React, Node.js, MongoDB,
              and more.
            </p>
          </div>

          {/* Action Buttons Section */}
          <div className="flex items-center gap-2">
            {/* Contact Me button */}
            <Button className="bg-bodyText text-base" asChild>
              <a href="mailto:koigorfogbawa@gmail.com">Contact Me</a>
            </Button>
            {/* Resume download button */}
            <Button className="bg-secondary1 text-base hover:bg-green-800" asChild>
              <a
                  href="/docs/SamuelTuray_Resume%20.pdf"
                  download="SamuelTuray_Resume.pdf"
              >
                Resume
              </a>
            </Button>
          </div>

          {/* Social Media Links Section */}
          <div className="flex gap-4">
            <Link href="https://github.com/Koigor97">
              <SiGithub className="hover:text-secondary1" />
            </Link>
            <Link href="https://www.linkedin.com/in/samuel-turay1/">
              <SiLinkedin className="hover:text-secondary1" />
            </Link>
            <Link href="https://www.instagram.com/koigor101/">
              <SiInstagram className="hover:text-secondary1" />
            </Link>
          </div>
        </CardContent>
      </Card>
  );
}

export default HeroBox;
