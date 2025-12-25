import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  FaHandsHelping,
  FaProjectDiagram,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";
import Grid3 from "./Grid3";
import Grid4 from "./Grid4";
import Grid5 from "./Grid5";

const items = [
  {
    title: "About Me",
    description: (
      <span>
        I'm a Full Stack Web Developer and linux nerd based in Pakistan. I love
        and enjoy building stuff.
      </span>
    ),
    header: <Grid1 />,
    className: "lg:col-span-1 border-2",
    icon: <FaHandsHelping className="h-4 w-4 text-secondaryColor" />,
  },
  {
    title: "Team Up",
    description: (
      <span>
        Partner with me on your next big idea. Together, we’ll make it happen.
      </span>
    ),
    header: <Grid2 />,
    className: "lg:col-span-1 border-2",
    icon: <FaProjectDiagram className="h-4 w-4 text-secondaryColor" />,
  },
  {
    title: "Open-Ended",
    description: (
      <span>
        I'm flexible with different time zones. I can work from anywhere.
      </span>
    ),
    header: <Grid3 />,
    className: "lg:col-span-1 border-2",
    icon: <FaGlobe className="h-4 w-4 text-secondaryColor" />,
  },
  {
    title: "Building Websites",
    description: (
      <span>
        I focus on building functional, scalable, and user friendly web
        applications. I work with modern technologies like MERN & PERN Stack to
        create clean and maintainable solutions.
      </span>
    ),
    header: <Grid4 />,
    className: "lg:col-span-2 border-2",
    icon: <FaLaptopCode className="h-4 w-4 text-secondaryColor" />,
  },

  {
    title: "Ardent",
    description: (
      <span>
        Driven by curiosity about exploring and mastering cutting edge
        technologies and tools.
      </span>
    ),
    header: <Grid5 />,
    className: "md:col-span-1 border-2",
    icon: <GrTechnology className="h-4 w-4 text-secondaryColor" />,
  },
];

function BentoGridComp() {
  return (
    <BentoGrid className="max-w-7xl mx-auto py-15 lg:auto-rows-[25rem] min-h-screen">
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

export default BentoGridComp;
