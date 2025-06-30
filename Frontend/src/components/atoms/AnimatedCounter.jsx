// components/AnimatedCounter.jsx
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ from = 0, to = 100, duration = 3, suffix = "+" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (val) => Math.round(val));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        onUpdate(value) {
          setDisplayValue(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className="md:text-3xl sm:text-[1.6rem] text-[1.2rem] font-bold">
      {displayValue}
      {suffix}
    </span>
  );
}
