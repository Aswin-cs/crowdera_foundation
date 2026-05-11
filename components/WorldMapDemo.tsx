"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function WorldMapDemo() {
  return (
    <div className="py-8 w-full">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">
          Our Global Impact Network
        </p>
        <div className="flex justify-center flex-wrap gap-1 mb-4">
          {"Connectivity".split("").map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block text-secondary font-heading font-bold text-xl md:text-2xl"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.04 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <p className="font-body text-sm md:text-lg text-on-surface/70 max-w-2xl mx-auto py-4">
          From California to Mumbai, we bridge the gap between global generosity and grassroots impact. Our technology empowers NGOs across continents to deliver life-changing results.
        </p>
      </div>
      <WorldMap
        lineColor="#FF6D00"
        dots={[
          {
            start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
            end: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
          },
          {
            start: { lat: 40.7128, lng: -74.0060, label: "New York" },
            end: { lat: 28.6139, lng: 77.2090, label: "New Delhi" },
          },
          {
            start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
            end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
          },
          {
            start: { lat: 38.7223, lng: -9.1393, label: "Lisbon" },
            end: { lat: 51.5074, lng: -0.1278, label: "London" },
          },
          {
            start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" },
            end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
          },
          {
            start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
            end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
          },
        ]}
      />
    </div>
  );
}
