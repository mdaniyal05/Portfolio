import { motion } from "motion/react";
import React, { Suspense } from "react";

const GlobeComp = React.lazy(() =>
  import("./Globe").then((module) => ({ default: module.GlobeComp }))
);

const Grid3 = () => {
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
      <Suspense fallback={null}>
        <GlobeComp />
      </Suspense>
    </motion.div>
  );
};

export default Grid3;
