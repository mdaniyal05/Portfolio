import { motion } from "motion/react";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-2 bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
        <span className="text-lg font-medium tracking-wide">
          Loading portfolio...
        </span>
      </div>
    </motion.div>
  );
}
