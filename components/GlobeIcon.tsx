import React from 'react';

interface GlobeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  animated?: boolean;
}

export const GlobeIcon = ({ 
  className = "w-6 h-6", 
  size = 24, 
  strokeWidth = 2, 
  animated = true,
  ...props 
}: GlobeIconProps) => {
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
      className={`globe-svg ${className}`}
      {...props}
    >
      {animated && (
        <style>
          {`
            @keyframes globe-spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .globe-svg:hover .globe-lines,
            [class*="group"]:hover .globe-lines {
              animation: globe-spin 10s linear infinite;
              transform-origin: center;
            }
            @keyframes pulse-path {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            .globe-svg:hover .globe-circle,
            [class*="group"]:hover .globe-circle {
              animation: pulse-path 2s ease-in-out infinite;
            }
          `}
        </style>
      )}
      <circle className="globe-circle" cx="12" cy="12" r="10" />
      <g className="globe-lines">
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </g>
    </svg>
  );
};
