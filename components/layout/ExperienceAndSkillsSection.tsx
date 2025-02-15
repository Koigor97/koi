/**
 * @file ExperienceAndSkillsSection.tsx
 * @description
 *   The ExperienceAndSkillsSection component renders a responsive layout containing two key
 *   sub-components: ExperienceBox and SkillsBox. This section is designed to display professional
 *   experience alongside technical skills in a clean, side-by-side arrangement on medium to larger screens,
 *   and stacked vertically on smaller screens.
 *
 * @example
 *   <ExperienceAndSkillsSection />
 *
 * @remarks
 *   This component is typically used on the homepage or portfolio pages to provide visitors with a quick
 *   overview of the developer's experience and skillset.
 */

import ExperienceBox from "../common/ExperienceBox";
import SkillsBox from "../common/SkillsBox";

/**
 * ExperienceAndSkillsSection Component
 *
 * Renders a section that includes two child components:
 *  - ExperienceBox: Displays professional experience details.
 *  - SkillsBox: Displays technical skills details.
 *
 * The layout is controlled by Tailwind CSS classes that define a grid with a single column on small screens
 * and two columns on medium and larger screens.
 *
 * @returns {JSX.Element} The rendered ExperienceAndSkillsSection component.
 */
function ExperienceAndSkillsSection() {
    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ExperienceBox />
            <SkillsBox />
        </section>
    );
}

export default ExperienceAndSkillsSection;
