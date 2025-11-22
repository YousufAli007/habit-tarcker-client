import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children, delay = 0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }, // ← এখানে y: 0 করতে হবে!
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94], // সুন্দর easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
