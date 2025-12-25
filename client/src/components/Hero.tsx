import Button from "./Button";
import { FaLocationArrow, FaFile } from "react-icons/fa6";
import { Meteors } from "./ui/meteors";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "motion/react";

const words = "Hi! I'm Daniyal, a Full Stack Web Developer & Linux Geek";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.docx";
    link.download = "resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="pb-15 flex justify-center items-center min-h-screen"
      id="hero"
    >
      <div className="hidden sm:block">
        <Spotlight />
        <Spotlight />
      </div>
      <div className="flex flex-col items-center justify-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-6xl text-center font-bold bg-clip-text text-transparent bg-linear-to-b from-textColor to-secondaryColor bg-opacity-50"
        >
          SOFTWARE ENGINEER
        </motion.h1>
        <TextGenerateEffect
          words={words}
          className="mt-4 font-normal text-base max-w-lg text-center mx-auto"
        />
        <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
          <Button
            position="right"
            title="My work"
            icon={<FaLocationArrow />}
            handleClick={() => scrollToSection("projects")}
          />

          <Button
            position="right"
            title="Resume"
            icon={<FaFile />}
            handleClick={handleDownload}
          />
        </div>
      </div>
      <Meteors number={100} />
    </section>
  );
};

export default Hero;
