import { Badge } from "../ui/badge";

function AboutSection() {
  return (
    <section
      className=" grid gap-5 bg-gradient-to-r from-[#7a8f8dfb] via-[#80a7a1] to-[#7f9996]
              backdrop-blur-md bg-opacity-20 
              rounded-lg shadow-lg py-10 px-8"
    >
      <Badge className="bg-primary1 text-bodyText w-fit">
        <h2 className="text-base">About Me</h2>
      </Badge>

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
