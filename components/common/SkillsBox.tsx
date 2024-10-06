import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

function ExperienceBox() {
  return (
    <Card
      className="flex flex-col gap-5 bg-gradient-to-r from-[#eee1c0] via-[#e1dac1] to-[#eee3ce]
              backdrop-blur-md bg-opacity-20 
              rounded-lg shadow-lg py-10 px-8"
    >
      <Badge className="bg-[#338b80] w-fit h-fit">
        <h2 className="text-base md:text-lg">Skills</h2>
      </Badge>

      <CardContent className="p-0 grid gap-3">
        <div>
          <h3 className=" text-xl md:text-2xl font-bold">
            Frontend Development:
          </h3>
          <ul className="md:text-lg pl-6 list-disc">
            <li>React.js, HTML5, CSS3, JavaScript, Tailwind CSS, SASS</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-xl md:text-2xl font-bold">
            Backend Development:
          </h3>
          <ul className="md:text-lg pl-6 list-disc">
            <li>Node.js, Express, MongoDB, Next.js, PostgreSQL</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-xl md:text-2xl font-bold">Other Tools:</h3>
          <ul className="md:text-lg pl-6 list-disc">
            <li>Git, REST APIs, Redux, Trello</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-xl md:text-2xl font-bold">Languages:</h3>
          <ul className="md:text-lg pl-6 list-disc">
            <li>HTML5, CSS3, JavaScript, TypeScript, Python, C#</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExperienceBox;
