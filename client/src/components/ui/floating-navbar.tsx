/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    id: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (window.innerWidth <= 768) {
      setVisible(true);
    } else {
      if (typeof current === "number") {
        const direction = current! - scrollYProgress.getPrevious()!;

        if (scrollYProgress.get() < 0.05) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border-2 border-secondaryColor rounded-2xl bg-primaryColor shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-5000 px-8 py-2 items-center justify-center space-x-4 w-75 md:w-auto",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <div
            key={idx}
            className={cn(
              "relative items-center flex space-x-1 text-textColor hover:text-accentColor"
            )}
          >
            <button
              className="text-xs md:block md:text-[1.1rem] cursor-pointer"
              onClick={() => scrollToSection(navItem.id)}
            >
              {navItem.name}
            </button>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
