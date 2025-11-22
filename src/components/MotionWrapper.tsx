import { motion } from "motion/react";
import { cn } from "./lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MotionWrapper({ children, className }: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
