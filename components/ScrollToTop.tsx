'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle visibility based on scroll position and activity
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Show button if scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
        setIsScrolling(true);

        // Hide after 2 seconds of inactivity
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsScrolling(false);
        }, 2000);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: isScrolling ? 1 : 0, 
            scale: isScrolling ? 1 : 0.8,
            pointerEvents: isScrolling ? 'auto' : 'none',
            y: 0 
          }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-neutral-100 flex items-center justify-center group transition-all duration-300"
          aria-label="Scroll to top"
        >
          {/* Progress Circle SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-neutral-100"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="var(--color-primary, #1A237E)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress,
                // Apply a subtle gradient effect via stroke color if desired, 
                // but keeping it simple with primary color as requested.
              }}
            />
          </svg>

          {/* Arrow Icon */}
          <span className="material-symbols-outlined text-primary text-2xl group-hover:text-secondary transition-colors duration-300">
            arrow_upward
          </span>
          
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5 -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
