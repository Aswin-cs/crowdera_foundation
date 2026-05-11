import React from 'react';

interface BarChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  animated?: boolean;
}

export const BarChartIcon = ({ 
  className = "w-6 h-6", 
  size = 24, 
  strokeWidth = 2, 
  animated = true,
  ...props 
}: BarChartIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`bar-chart-svg ${className}`}
      {...props}
    >
      {animated && (
        <style>
          {`
            @keyframes bar-grow {
              0% { transform: scaleY(0); }
              100% { transform: scaleY(1); }
            }
            .bar-anim {
              transform-origin: bottom;
              transform-box: fill-box;
            }
            .bar-chart-svg:hover .bar-anim,
            [class*="group"]:hover .bar-anim {
              animation: bar-grow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1.2) both;
            }
            .bar-chart-svg:hover .bar-delay-1, [class*="group"]:hover .bar-delay-1 { animation-delay: 0s; }
            .bar-chart-svg:hover .bar-delay-2, [class*="group"]:hover .bar-delay-2 { animation-delay: 0.1s; }
            .bar-chart-svg:hover .bar-delay-3, [class*="group"]:hover .bar-delay-3 { animation-delay: 0.2s; }
          `}
        </style>
      )}
      <rect width="24" height="24" fill="transparent" stroke="none" />
      <rect className={animated ? "bar-anim bar-delay-1" : ""} x="3" y="12" width="6" height="9" rx="1" vectorEffect="non-scaling-stroke" />
      <rect className={animated ? "bar-anim bar-delay-2" : ""} x="9" y="3" width="6" height="18" rx="1" vectorEffect="non-scaling-stroke" />
      <rect className={animated ? "bar-anim bar-delay-3" : ""} x="15" y="7" width="6" height="14" rx="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};
