import { Badge } from "../ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

function ExperienceBox() {
  return (
    <Card
      className="grid gap-4 bg-gradient-to-r from-[#eee1c0] via-[#e1dac1] to-[#eee3ce]
              backdrop-blur-md bg-opacity-20 
              rounded-lg shadow-lg py-10 px-8"
    >
      <Badge className="bg-[#5f9e5f] w-fit">
        <h2 className="text-base md:text-lg">Experience</h2>
      </Badge>
      <CardHeader className="p-0">
        <CardTitle>
          <h2 className=" text-xl md:text-2xl text-secondary1 font-bold">
            Programming Intern
          </h2>
        </CardTitle>
        <CardDescription className="text-lg text-bodyText font-semibold">
          Research and Business Development Center (RBDC)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="flex flex-col gap-2 md:text-lg pl-6 list-disc">
          <li>
            Collaborated with a cross-functional team, our backend and the
            frontend team as the environment specialist to resolve and
            troubleshoot technical issues on technologies used, ensuring 90%
            seamless application operation
          </li>
          <li>
            Engaged in agile development methodologies, participating in sprint
            planning, code reviews, and daily stand-ups, fostering collaborative
            and efficient development
          </li>
          <li>
            Implemented robust features to web application for enhanced
            functionality, increasing best user experience by 50%
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default ExperienceBox;
