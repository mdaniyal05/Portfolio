import Button from "./Button";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa6";

const words = "Hi! I'm Daniyal, a Full Stack Web Developer based in Pakistan";

const Hero = () => {
  return (
    <section className="py-15 flex justify-center items-center min-h-screen" id="hero">
      <Spotlight />
      <div className="flex flex-col items-center justify-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-semibold text-center bg-clip-text text-transparent bg-linear-to-b from-textColor to-secondaryColor bg-opacity-50">
          Transforming Ideas into Seamless User Experiences
        </h1>
        <TextGenerateEffect
          words={words}
          className="mt-4 font-normal text-base max-w-lg text-center mx-auto"
        />
        <Button position="right" title="My work" icon={<FaLocationArrow />} />
      </div>
      <Spotlight />
    </section>
  );
};

export default Hero;
