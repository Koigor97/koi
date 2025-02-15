/**
 * @file ExperienceBox.tsx
 * @description
 *   The ExperienceBox component is a reusable UI element that displays a summary of a professional
 *   experience. It uses pre-built UI components such as Card, Badge, CardHeader, CardTitle, CardDescription,
 *   and CardContent to create a styled container that includes a title, description, and a bullet list
 *   of key responsibilities or achievements.
 *
 *   The component is designed with a gradient background, subtle blur effects, and shadow to enhance visual appeal.
 *
 * @example
 *   import ExperienceBox from "@/components/ExperienceBox";
 *   // Use it within your page layout
 *   <ExperienceBox />
 *
 * @remarks
 *   The component leverages Tailwind CSS for styling and is structured to be easily integrated into larger layouts.
 */

import { Badge } from "../ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

/**
 * ExperienceBox Component
 *
 * Renders a card styled with a gradient background and blur effect that displays a professional
 * experience summary. It includes a badge indicating the section ("Experience"), a title (e.g. "Programming Intern"),
 * a description of the role's company, and a list of key achievements and responsibilities.
 *
 * @returns {JSX.Element} The rendered experience box card.
 */
function ExperienceBox() {
  return (
      <Card
          className="grid gap-4 bg-gradient-to-r from-[#eee1c0] via-[#e1dac1] to-[#eee3ce]
              backdrop-blur-md bg-opacity-20
              rounded-lg shadow-lg py-10 px-8"
      >
        {/* Section badge */}
        <Badge className="bg-[#5f9e5f] w-fit text-base md:text-lg">
          Experience
        </Badge>
        <CardHeader className="p-0">
          {/* Job Title */}
          <CardTitle className="text-xl md:text-2xl text-secondary1 font-bold">
            Programming Intern
          </CardTitle>
          {/* Company/Organization description */}
          <CardDescription className="text-lg text-bodyText font-semibold">
            Research and Business Development Center (RBDC)
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* List of responsibilities and achievements */}
          <ul className="flex flex-col gap-2 md:text-lg pl-6 list-disc">
            <li>
              Collaborated with a cross-functional team, our backend and the
              frontend team as the environment specialist to resolve and
              troubleshoot technical issues on technologies used, ensuring 90%
              seamless application operation.
            </li>
            <li>
              Engaged in agile development methodologies, participating in sprint
              planning, code reviews, and daily stand-ups, fostering collaborative
              and efficient development.
            </li>
            <li>
              Implemented robust features to web application for enhanced
              functionality, increasing best user experience by 50%.
            </li>
          </ul>
        </CardContent>
      </Card>
  );
}

export default ExperienceBox;
