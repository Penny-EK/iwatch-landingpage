import HeroText from "./HeroText";
import Gallery from "./Gallery";

const Hero = () => {
  return (
    // <section className="grid3-1 hero innerSection">
    <section className="mx-auto my-20 grid max-w-[1211px] grid-cols-[2fr_1fr] gap-5">
      <HeroText />
      <Gallery />
    </section>
  );
};

export default Hero;
