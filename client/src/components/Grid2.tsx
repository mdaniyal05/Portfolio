import { motion } from "motion/react";
import { useState } from "react";
import Button from "./Button";
import { FaCopy } from "react-icons/fa6";

const Grid2 = () => {
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

export default Grid2;
