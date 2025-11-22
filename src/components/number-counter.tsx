import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

type Props = {
  number: number;
};

export function NumberCounter({ number }: Props) {
  const count = useMotionValue(0);
  const countedValue = useTransform(() => count.get().toFixed(2));

  useEffect(() => {
    const controls = animate(count, number, { duration: 1.5 });

    return () => controls.stop();
  }, [number]);

  return <motion.pre>{countedValue}</motion.pre>;
}
