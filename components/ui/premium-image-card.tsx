"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumImageCardProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const PremiumImageCard = ({
  src,
  alt,
  className,
  containerClassName,
}: PremiumImageCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full h-full perspective-1000 group cursor-pointer",
        containerClassName
      )}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-500 group-hover:shadow-primary/20"
      >
        {/* Main Image */}
        <motion.img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            translateZ: "0px",
          }}
        />

        {/* Dynamic Shine Overlay */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: useTransform(
              [shineX, shineY],
              ([sx, sy]) =>
                `radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.2) 0%, transparent 60%)`
            ),
          }}
        />

        {/* Inner Border Glow */}
        <div className="absolute inset-0 z-20 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors pointer-events-none" />
        
        {/* Reflection Streak */}
        <motion.div 
          className="absolute inset-0 z-15 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            transform: useTransform(mouseX, [-0.5, 0.5], ["translateX(-10%)", "translateX(10%)"]),
          }}
        />
      </motion.div>

      {/* Floating Ambient Shadow */}
      <motion.div
        className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          x: useTransform(mouseX, [-0.5, 0.5], [10, -10]),
          y: useTransform(mouseY, [-0.5, 0.5], [10, -10]),
        }}
      />
    </div>
  );
};
