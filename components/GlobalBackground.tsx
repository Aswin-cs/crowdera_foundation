"use client";

import { usePathname } from "next/navigation";
import ShapeGrid from "./ui/shape-grid";

export default function GlobalBackground() {
  const pathname = usePathname();

  if (pathname === "/donate") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-auto">
      <ShapeGrid
        speed={0.6}
        squareSize={50}
        direction="diagonal"
        borderColor="rgba(26, 35, 126, 0.04)"
        hoverFillColor="rgba(255, 109, 0, 0.15)"
        shape="hexagon"
        hoverTrailAmount={8}
      />
    </div>
  );
}
