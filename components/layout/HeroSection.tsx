import HeroBox from "../common/HeroBox";
import ImageBox from "../common/ImageBox";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <HeroBox className=" md:col-span-2 " />
      <ImageBox className=" md:col-start-3 md:col-end-3  shadow-lg" />
    </section>
  );
}

export default HeroSection;
