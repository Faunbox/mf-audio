'use client'
import {  motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3,
      rootMargin: "-30% 0px",
    });
  
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        {children}
      </motion.section>
    );
  }