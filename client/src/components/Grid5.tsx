import { motion } from "motion/react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const tools1 = [
  {
    svg: "/js.svg",
    name: "JavaScript",
  },
  {
    svg: "/ts.svg",
    name: "TypeScript",
  },
  {
    svg: "/nodejs.svg",
    name: "Node JS",
  },
  {
    svg: "/react.svg",
    name: "React",
  },
  {
    svg: "/mongodb.svg",
    name: "Mongo DB",
  },
  {
    svg: "/express.svg",
    name: "Express JS",
  },
  {
    svg: "/linux.svg",
    name: "Linux",
  },
  {
    svg: "/arch.svg",
    name: "Arch Linux",
  },
  {
    svg: "/api.svg",
    name: "REST API",
  },
  {
    svg: "/css.svg",
    name: "CSS",
  },
  {
    svg: "/git.svg",
    name: "Git",
  },
  {
    svg: "/github.svg",
    name: "Github",
  },
];

const tools2 = [
  {
    svg: "/html.svg",
    name: "HTML",
  },
  {
    svg: "/materialui.svg",
    name: "Material UI",
  },
  {
    svg: "/postgresql.svg",
    name: "PostgreSQL",
  },
  {
    svg: "/redux.svg",
    name: "Redux Toolkit",
  },
  {
    svg: "/npm.svg",
    name: "NPM",
  },
  {
    svg: "/tailwind.svg",
    name: "Tailwind CSS",
  },
  {
    svg: "/java.svg",
    name: "Java",
  },
  {
    svg: "/mongoose.svg",
    name: "Mongoose",
  },
  {
    svg: "/motion.svg",
    name: "Framer Motion",
  },
  {
    svg: "/nextjs.svg",
    name: "Next JS",
  },
  {
    svg: "/python.svg",
    name: "Python",
  },
  {
    svg: "/sequelize.svg",
    name: "Sequelize",
  },
];

const Grid5 = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-24 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div className="h-50 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={tools1} direction="right" speed="slow" />
        <InfiniteMovingCards items={tools2} direction="left" speed="slow" />
      </div>
    </motion.div>
  );
};

export default Grid5;
