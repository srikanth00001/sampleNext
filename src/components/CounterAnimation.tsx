import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function CounterAnimation({ value, suffix = '', duration = 2 }: CounterAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        onUpdate(latest) {
          setCount(Math.floor(latest));
        }
      });
      return controls.stop;
    }
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}{suffix}
    </motion.span>
  );
}