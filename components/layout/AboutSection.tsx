/**
 * @file AboutSection.tsx
 * @description
 *   The AboutSection component renders a section that provides a brief personal introduction.
 *   It includes a badge labeled "About Me" and a paragraph describing the developer's background,
 *   skills, and motivation in software development.
 *
 *   This component uses Tailwind CSS classes for styling, featuring a gradient background,
 *   a blur effect, and responsive typography to ensure a modern, visually appealing design.
 *
 * @example
 *   <AboutSection />
 *
 * @remarks
 *   The component is designed to be used on the homepage or an "About" page to introduce the developer.
 */

import { Badge } from "../ui/badge";

/**
 * AboutSection Component
 *
 * Renders an "About Me" section with a styled badge and a descriptive paragraph about the developer.
 *
 * @returns {JSX.Element} The rendered AboutSection component.
 */
function AboutSection() {
  return (
      <section
          className="grid gap-5 bg-gradient-to-r from-[#7a8f8dfb] via-[#80a7a1] to-[#7f9996]
              backdrop-blur-md bg-opacity-20
              rounded-lg shadow-lg py-10 px-8"
      >
        {/* Badge displaying the section title */}
        <Badge className="bg-primary1 text-bodyText w-fit text-base">
          About Me
        </Badge>

        {/* Descriptive text about the developer */}
        <div>
          <p className="text-lg md:text-xl text-white">
            I&apos;m a software development student with a strong passion for
            building impactful software solutions. Over the past few years,
            I&apos;ve honed my skills in full-stack development, focusing on
            creating applications that solve real-world problems. I&apos;m driven
            by a constant desire to learn, grow, and adapt to the rapidly evolving
            world of technology. Whether it&apos;s collaborating in a team
            environment or working solo on projects, I thrive on bringing ideas to
            life through code. My goal is to become a proficient Software Engineer
            and to contribute meaningfully to software solutions that impact the
            world positively.
          </p>
        </div>
      </section>
  );
}

export default AboutSection;
