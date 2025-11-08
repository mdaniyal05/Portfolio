import Button from "./Button";
import { FaLocationArrow } from "react-icons/fa6";
import { Meteors } from "./ui/meteors";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "Hi! I'm Daniyal, a Full Stack Web Developer & Linux Geek";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-15 flex justify-center items-center min-h-screen"
      id="hero"
    >
      <div className="hidden sm:block">
        <Spotlight />
        <Spotlight />
      </div>
      <div className="flex flex-col items-center justify-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-semibold text-center bg-clip-text text-transparent bg-linear-to-b from-textColor to-secondaryColor bg-opacity-50">
          Transforming Ideas into Seamless User Experiences
        </h1>
        <TextGenerateEffect
          words={words}
          className="mt-4 font-normal text-base max-w-lg text-center mx-auto"
        />
        <Button
          position="right"
          title="My work"
          icon={<FaLocationArrow />}
          handleClick={() => scrollToSection("projects")}
        />
      </div>
      <Meteors number={50} />
    </section>
  );
};

export default Hero;
