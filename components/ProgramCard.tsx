'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ProgressBar from './ProgressBar';
import CountUp from './CountUp';
import { Button } from './ui/button';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: string;
  goal: string;
  progress: number;
  delay?: number;
}

export default function ProgramCard({
  title,
  description,
  image,
  category,
  icon,
  goal,
  progress,
  delay = 0
}: ProgramCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for ultra-smooth tilt (lower stiffness, higher damping for "premium" feel)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 25 });

  // Spotlight effect motion values with springs for fluidity
  const spotlightXSpring = useSpring(useMotionValue(0), { stiffness: 1000, damping: 50 });
  const spotlightYSpring = useSpring(useMotionValue(0), { stiffness: 1000, damping: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize mouse position between -0.5 and 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);

    // Spotlight position (relative to card top-left)
    spotlightXSpring.set(e.clientX - rect.left);
    spotlightYSpring.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      style={{
        perspective: 1200,
      }}
      className="relative group"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered 
            ? "0 25px 50px -12px rgba(26, 35, 126, 0.2)" 
            : "0 4px 20px 0px rgba(26, 35, 126, 0.08)",
          borderColor: isHovered ? "rgba(26, 35, 126, 0.3)" : "rgba(207, 216, 220, 1)"
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="bg-surface rounded-2xl overflow-hidden flex flex-col h-full border relative transition-colors duration-500"
      >
        {/* Spotlight Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [spotlightXSpring, spotlightYSpring],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(var(--primary-rgb), 0.1), transparent 40%)`
            ),
          }}
        />

        {/* Image Section */}
        <div className="h-52 relative overflow-hidden">
          <motion.img
            alt={title}
            src={image}
            className="w-full h-full object-cover"
            animate={{ 
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          />
          <div className="absolute top-4 left-4 z-20">
            <motion.div 
              animate={{ y: isHovered ? -2 : 0 }}
              className="bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-primary/10 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-sm" data-icon={icon}>{icon}</span>
              <span className="font-heading text-[10px] text-primary uppercase font-bold tracking-widest">{category}</span>
            </motion.div>
          </div>
          <motion.div 
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 z-10 pointer-events-none"
          >
             <motion.span 
               animate={{ y: isHovered ? 0 : 10 }}
               className="text-white text-xs font-heading font-bold uppercase tracking-widest"
             >
               Learn More & Support
             </motion.span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-7 flex-grow flex flex-col relative z-20">
          <h3 className="font-heading text-2xl text-primary mb-3 transition-colors duration-500 group-hover:text-secondary leading-tight">{title}</h3>
          
          <p className="font-body text-sm text-on-surface/80 mb-8 flex-grow leading-relaxed italic">
            {description}
          </p>
          
          <motion.div 
            animate={{ backgroundColor: isHovered ? "rgba(26, 35, 126, 0.04)" : "rgba(26, 35, 126, 0.02)" }}
            className="mb-6 space-y-3 p-4 rounded-xl border border-primary/[0.05] transition-colors duration-500"
          >
            <div className="flex justify-between items-end">
              <span className="font-heading text-xs text-on-surface/50 font-medium tracking-tight">Funding Goal: {goal}</span>
              <span className="font-heading text-xs text-secondary font-bold">
                <CountUp to={progress} />% Complete
              </span>
            </div>
            <ProgressBar progress={progress} />
          </motion.div>

          <Button 
            href="/program-detail" 
            variant="outline" 
            animation="spring" 
            className="w-full border-primary/20 hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 py-6 font-bold uppercase tracking-widest text-xs"
          >
            Support Program
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
