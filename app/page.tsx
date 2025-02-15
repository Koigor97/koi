/**
 * @file Home.tsx
 * @description
 *   This file defines the Home component which serves as the landing page of the website.
 *   It composes several key sections: the HeroSection, AboutSection, and ExperienceAndSkillsSection.
 *   These sections collectively provide a captivating introduction, background details, and a showcase
 *   of skills and experience.
 *
 * @example
 *   // Example usage:
 *   import Home from "@/pages/index";
 *   export default function App() {
 *     return <Home />;
 *   }
 *
 * @remarks
 *   The layout is constructed using a simple grid with vertical gap spacing via Tailwind CSS.
 */

import HeroSection from "@/components/layout/HeroSection";
import AboutSection from "@/components/layout/AboutSection";
import ExperienceAndSkillsSection from "@/components/layout/ExperienceAndSkillsSection";

/**
 * Home Component
 *
 * Renders the homepage by arranging the following sections vertically:
 *  - HeroSection: The topmost section that provides an engaging introduction.
 *  - AboutSection: A section that outlines background information about the developer or website.
 *  - ExperienceAndSkillsSection: A section that highlights professional experience and technical skills.
 *
 * The component uses a grid layout with a gap of 7 (as defined by Tailwind CSS) to separate these sections.
 *
 * @returns {JSX.Element} The rendered homepage component.
 */
export default function Home() {
    return (
        <div className="grid gap-7">
            {/* Render the hero section */}
            <HeroSection />
            {/* Render the about section */}
            <AboutSection />
            {/* Render the experience and skills section */}
            <ExperienceAndSkillsSection />
        </div>
    );
}
