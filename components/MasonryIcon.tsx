import React from 'react';

interface MasonryIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MasonryIcon = ({ size = 24, className = "", ...props }: MasonryIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // The 'group' class is required on the parent SVG to trigger hover states on children
      className={`group-masonry cursor-pointer ${className}`}
      {...props}
    >
      {/* Top Left (Tall): Explode Left/Up + Shift Up */}
      <rect 
        x="3" 
        y="3" 
        width="8" 
        height="11" 
        rx="2" 
        className="transition-transform duration-300 ease-out group-masonry-hover:-translate-x-[2px] group-masonry-hover:-translate-y-[6px] group-hover/sidebar:-translate-x-[2px] group-hover/sidebar:-translate-y-[6px] group-hover:-translate-x-[2px] group-hover:-translate-y-[6px]" 
      />
      
      {/* Top Right (Short): Explode Right/Up + Shift Down */}
      <rect 
        x="13" 
        y="3" 
        width="8" 
        height="5" 
        rx="2" 
        className="transition-transform duration-300 ease-out group-masonry-hover:translate-x-[2px] group-masonry-hover:translate-y-[2px] group-hover/sidebar:translate-x-[2px] group-hover/sidebar:translate-y-[2px] group-hover:translate-x-[2px] group-hover:translate-y-[2px]" 
      />
      
      {/* Bottom Left (Short): Explode Left/Down + Shift Up */}
      <rect 
        x="3" 
        y="16" 
        width="8" 
        height="5" 
        rx="2" 
        className="transition-transform duration-300 ease-out group-masonry-hover:-translate-x-[2px] group-masonry-hover:-translate-y-[2px] group-hover/sidebar:-translate-x-[2px] group-hover/sidebar:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]" 
      />
      
      {/* Bottom Right (Tall): Explode Right/Down + Shift Down */}
      <rect 
        x="13" 
        y="10" 
        width="8" 
        height="11" 
        rx="2" 
        className="transition-transform duration-300 ease-out group-masonry-hover:translate-x-[2px] group-masonry-hover:translate-y-[6px] group-hover/sidebar:translate-x-[2px] group-hover/sidebar:translate-y-[6px] group-hover:translate-x-[2px] group-hover:translate-y-[6px]" 
      />
    </svg>
  );
};

export default MasonryIcon;
