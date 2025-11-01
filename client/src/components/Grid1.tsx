import { motion } from "motion/react";

const Grid1 = () => {
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

export default Grid1;
