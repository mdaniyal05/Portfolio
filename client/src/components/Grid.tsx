import { useState } from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "motion/react";
import {
  FaHandsHelping,
  FaProjectDiagram,
  FaCopy,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import Button from "./Button";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { GlobeDemo } from "../components/Globe";

export default function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[23rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      y: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileHover="animate"
      className="flex w-full h-full justify-center items-center min-h-24 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <img
        src="/me.jpg"
        className="h-40 w-40 rounded-full animate-[spin_30s_linear_infinite]"
      />
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "mdaniyal5454@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 justify-center items-center w-full h-full min-h-24 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Button
        title={copied ? "Email is Copied!" : "mdaniyal5454@gmail.com"}
        icon={<FaCopy />}
        position="left"
        handleClick={handleCopy}
      />
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-24 dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
    >
      <GlobeDemo />
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-24 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/10 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="/dollar.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-20 w-20 bg-white"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-300 mt-4">
          Websites that stand out
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Leading
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/10 border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="/bolt.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-20 w-20 bg-white"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-300 mt-4">
          Websites that make a difference
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Top
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/10 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="/sword.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-20 w-20 bg-white p-2"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-300 mt-4">
          Websites that present your brand the best
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Supreme
        </p>
      </motion.div>
    </motion.div>
  );
};

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

const SkeletonFive = () => {
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

const items = [
  {
    title: "Collaboration",
    description: (
      <span className="text-sm">
        Collaboration is at the heart of my work - I prioritize strong client
        partnerships and open communication to achieve the best results.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <FaHandsHelping className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Team Up",
    description: (
      <span className="text-sm">
        Ready to create something amazing together? Partner with me on your next
        big idea - together, we’ll make it happen.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <FaProjectDiagram className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Open-Ended",
    description: (
      <span className="text-sm">
        I'm flexible with different time zones - let's not let distance stand in
        the way of bringing our ideas to life.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <FaGlobe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Building Websites",
    description: (
      <span className="text-sm">
        I develop robust, scalable, and intuitive web applications optimized for
        performance and usability.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <FaLaptopCode className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Ardent",
    description: (
      <span className="text-sm">
        Passionate and Driven by curiosity about exploring and mastering
        cutting-edge technologies and tools.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <GrTechnology className="h-4 w-4 text-neutral-500" />,
  },
];
