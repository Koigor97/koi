/**
 * @file HeroSection.tsx
 * @description
 *   The HeroSection component serves as the top section of the homepage, displaying a dynamic
 *   introduction alongside a visual element. It arranges the HeroBox (textual introduction) and
 *   the ImageBox (a representative image) in a responsive grid layout.
 *
 *   On smaller screens, the sections stack vertically; on medium and larger screens, the HeroBox
 *   occupies two-thirds of the width while the ImageBox takes up the remaining third.
 *
 * @example
 *   <HeroSection />
 *
 * @remarks
 *   - The component uses Tailwind CSS classes to manage the responsive grid layout.
 *   - HeroBox and ImageBox are imported from the common components directory.
 */

import HeroBox from "../common/HeroBox";
import ImageBox from "../common/ImageBox";

/**
 * HeroSection Component
 *
 * Renders a section that combines the HeroBox and ImageBox components in a responsive grid layout.
 * This section is intended to serve as the hero area on the homepage, providing an engaging
 * introduction to the site along with a complementary visual.
 *
 * @returns {JSX.Element} The rendered HeroSection component.
 */
function HeroSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* HeroBox occupies two columns on medium and larger screens */}
            <HeroBox className="md:col-span-2" />
            {/* ImageBox occupies one column and displays a shadow */}
            <ImageBox className="md:col-start-3 md:col-end-3 shadow-lg" />
        </section>
    );
}

export default HeroSection;
