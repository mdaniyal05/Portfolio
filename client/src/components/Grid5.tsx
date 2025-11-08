import { motion } from "motion/react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { tools1, tools2 } from "@/data/tools";

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
