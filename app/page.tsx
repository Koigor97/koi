import HeroSection from "@/components/layout/HeroSection";
import AboutSection from "@/components/layout/AboutSection";
import ExperienceAndSkillsSection from "@/components/layout/ExperienceAndSkillsSection";

export default function Home() {
  return (
    <div className="grid gap-7">
      <HeroSection />
      <AboutSection />
      <ExperienceAndSkillsSection />
    </div>
  );
}
