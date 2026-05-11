"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#FF6D00", // Defaulting to Crowdera secondary orange
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  // Bake opacity directly into the color so CSS opacity isn't needed
  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#1A237E40",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full aspect-[2/1] rounded-3xl shadow-[0_20px_50px_rgba(26,35,126,0.05)] border border-primary/10 relative font-sans overflow-hidden"
    >
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`path-group-${i}`}>
              {/* Animated Connection Line */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  delay: 0.5 + i * 0.4,
                  ease: "easeInOut",
                }}
              />

              {/* Start Point */}
              <g transform={`translate(${startPoint.x}, ${startPoint.y})`}>
                <motion.circle
                  r="3"
                  fill={lineColor}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.4, duration: 0.5 }}
                />
                <motion.circle
                  r="3"
                  fill={lineColor}
                  opacity="0.5"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                {dot.start.label && (
                  <motion.text
                    y="-10"
                    textAnchor="middle"
                    className="fill-primary dark:fill-white text-[8px] font-bold uppercase tracking-wider"
                    initial={{ opacity: 0, y: -5 }}
                    whileInView={{ opacity: 1, y: -10 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.4 }}
                  >
                    {dot.start.label}
                  </motion.text>
                )}
              </g>

              {/* End Point */}
              <g transform={`translate(${endPoint.x}, ${endPoint.y})`}>
                <motion.circle
                  r="3"
                  fill={lineColor}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2 + i * 0.4, duration: 0.5 }}
                />
                <motion.circle
                  r="3"
                  fill={lineColor}
                  opacity="0.5"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1.5,
                  }}
                />
                {dot.end.label && (
                  <motion.text
                    y="15"
                    textAnchor="middle"
                    className="fill-secondary text-[8px] font-bold uppercase tracking-wider"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 15 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.2 + i * 0.4 }}
                  >
                    {dot.end.label}
                  </motion.text>
                )}
              </g>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}
