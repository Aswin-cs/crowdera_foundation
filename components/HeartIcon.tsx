import React from 'react';

interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  animated?: boolean;
}

export const HeartIcon = ({ 
  className = "w-6 h-6", 
  size = 24, 
  strokeWidth = 2, 
  animated = true,
  ...props 
}: HeartIconProps) => {
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
      className={`heart-svg ${className}`}
      {...props}
    >
      {animated && (
        <style>
          {`
            @keyframes heart-beat {
              0% { transform: scale(1); }
              15% { transform: scale(1.1); }
              30% { transform: scale(1); }
              45% { transform: scale(1.15); }
              60% { transform: scale(1); }
            }
            .heart-svg:hover path,
            [class*="group"]:hover path {
              animation: heart-beat 1.2s ease-in-out infinite;
              transform-origin: center;
              transform-box: fill-box;
            }
          `}
        </style>
      )}
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
};
