'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Timeline({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative py-10 w-full">
      {/* Background Line (Ghost) */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-primary/10 -ml-[1px]" />
      
      {/* Animated Progress Line */}
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-primary -ml-[1px] z-10"
      />
      
      {children}
    </div>
  );
}
