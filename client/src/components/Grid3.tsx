import { motion } from "motion/react";
import Globe from "./Globe";

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
      className="flex flex-1 w-full h-full min-h-24 rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Globe />
    </motion.div>
  );
};

export default Grid3;
