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
    title: "Collaboration",
    description: (
      <span className="text-sm">
        Collaboration is at the heart of my work - I prioritize strong client
        partnerships and open communication to achieve the best results.
      </span>
    ),
    header: <Grid1 />,
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
    header: <Grid2 />,
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
    header: <Grid3 />,
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
    header: <Grid4 />,
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
    header: <Grid5 />,
    className: "md:col-span-1",
    icon: <GrTechnology className="h-4 w-4 text-neutral-500" />,
  },
];

function BentoGridComp() {
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

export default BentoGridComp;
