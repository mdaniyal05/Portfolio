import { motion } from "motion/react";

const Grid4 = () => {
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

export default Grid4;
