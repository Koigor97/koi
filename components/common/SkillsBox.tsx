/**
 * @file ExperienceBox.tsx
 * @description
 *   The ExperienceBox component renders a visually appealing card that showcases
 *   a developer's technical skills, grouped by category. It leverages pre-built UI
 *   components (Card, CardContent, and Badge) and Tailwind CSS classes to achieve a
 *   modern, responsive design with a gradient background and subtle blur effects.
 *
 *   The component is divided into sections that list skills under the following categories:
 *     - Frontend Development
 *     - Backend Development
 *     - Other Tools
 *     - Languages
 *
 * @example
 *   <ExperienceBox />
 */

import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

/**
 * ExperienceBox Component
 *
 * Renders a card containing a badge ("Skills") and a list of categorized skills.
 * Each category is presented with a bold title and a bulleted list.
 *
 * @returns {JSX.Element} The rendered experience box with technical skills.
 */
function ExperienceBox() {
  return (
      <Card
          className="flex flex-col gap-5 bg-gradient-to-r from-[#eee1c0] via-[#e1dac1] to-[#eee3ce]
              backdrop-blur-md bg-opacity-20
              rounded-lg shadow-lg py-10 px-8"
      >
        {/* Badge displaying the section title */}
        <Badge className="bg-[#338b80] w-fit h-fit text-base md:text-lg">
          Skills
        </Badge>

        {/* CardContent containing grouped lists of skills */}
        <CardContent className="p-0 grid gap-3">
          {/* Frontend Development skills */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Frontend Development:
            </h3>
            <ul className="md:text-lg pl-6 list-disc">
              <li>React.js, HTML5, CSS3, JavaScript, Tailwind CSS, SASS</li>
            </ul>
          </div>
          {/* Backend Development skills */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Backend Development:
            </h3>
            <ul className="md:text-lg pl-6 list-disc">
              <li>Node.js, Express, MongoDB, Next.js, PostgreSQL</li>
            </ul>
          </div>
          {/* Other Tools */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Other Tools:</h3>
            <ul className="md:text-lg pl-6 list-disc">
              <li>Git, REST APIs, Redux, Trello</li>
            </ul>
          </div>
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Languages:</h3>
            <ul className="md:text-lg pl-6 list-disc">
              <li>HTML5, CSS3, JavaScript, TypeScript, Python, C#</li>
            </ul>
          </div>
        </CardContent>
      </Card>
  );
}

export default ExperienceBox;
