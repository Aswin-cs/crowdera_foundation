'use client';

import { motion } from 'framer-motion';

interface SmoothRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SmoothReveal({ children, delay = 0, duration = 1, className = '' }: SmoothRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: duration, 
        ease: [0.16, 1, 0.3, 1], 
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
