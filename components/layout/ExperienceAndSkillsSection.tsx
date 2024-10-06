import ExperienceBox from "../common/ExperienceBox";
import SkillsBox from "../common/SkillsBox";

function ExperienceAndSkillsSection() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <ExperienceBox />
      <SkillsBox />
    </section>
  );
}

export default ExperienceAndSkillsSection;
