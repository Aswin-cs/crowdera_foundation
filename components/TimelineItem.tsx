'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItemProps {
  children: React.ReactNode;
  side: 'left' | 'right';
  className?: string;
}

export default function TimelineItem({ children, side, className = '' }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`mb-12 relative ${className}`}>
      {/* Dot Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className={`absolute top-1 w-5 h-5 rounded-full bg-secondary border-4 border-white z-20 
          ${side === 'left' ? 'left-[7px] md:right-[-11px] md:left-auto' : 'left-[7px] md:left-[-11px]'}`}
      />
      
      {/* Content Animation */}
      <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === 'left' ? -30 : 30 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
