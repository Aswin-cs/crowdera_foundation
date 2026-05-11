"use client";
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-md",
        secondary: "bg-secondary text-white shadow-md",
        outline: "border-2 border-primary text-primary hover:bg-surface-variant bg-white",
        ghost: "hover:bg-primary/10 text-primary",
        error: "bg-error text-white shadow-md",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

import Link from "next/link";

const MotionLink = motion.create(Link);

import AnimatedHandshakeIcon from "../AnimatedHandshakeIcon";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref">,
    VariantProps<typeof buttonVariants> {
  animation?: "glow" | "spring" | "donate-hover" | "none";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, animation = "glow", href, children, ...props }, ref) => {
    
    // Choose the right component based on href
    const Component = href ? MotionLink : motion.button;
    const additionalProps = href ? { href } : {};
    
    // Donate hover animation
    if (animation === "donate-hover") {
      return (
        <Component
          ref={ref as any}
          className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden group")}
          whileHover="hover"
          initial="initial"
          {...additionalProps}
          {...(props as any)}
        >
          <motion.span
            className="flex items-center justify-center w-full h-full"
            variants={{
              initial: { y: 0, opacity: 1 },
              hover: { y: -40, opacity: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute inset-0 flex items-center justify-center w-full h-full"
            variants={{
              initial: { y: 40, opacity: 0 },
              hover: { y: 0, opacity: 1 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <AnimatedHandshakeIcon 
              size={40} 
              colorLeft="#1A237E" 
              colorRight="#FF6D00" 
              className="shrink-0"
            />
          </motion.span>
        </Component>
      )
    }

    // Spring animation settings
    if (animation === "spring") {
      return (
        <Component
          ref={ref as any}
          className={cn(buttonVariants({ variant, size, className }))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          {...additionalProps}
          {...(props as any)}
        >
          {children}
        </Component>
      )
    }

    // Glow animation settings
    if (animation === "glow") {
      // Determine glow color based on variant
      let glowColor = "bg-primary";
      if (variant === "secondary") glowColor = "bg-secondary";
      if (variant === "error") glowColor = "bg-error";
      if (variant === "outline" || variant === "ghost") glowColor = "bg-primary/50";

      return (
        <Component
          ref={ref as any}
          className={cn(buttonVariants({ variant, size, className }), "relative z-10")}
          whileHover="hover"
          whileTap="tap"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 }
          }}
          {...additionalProps}
          {...(props as any)}
        >
          {/* Glow shadow layer */}
          <motion.div 
            className={cn("absolute inset-0 -z-10 rounded-full blur-xl opacity-0", glowColor)}
            variants={{
              hover: { opacity: 0.6 },
              tap: { opacity: 0.4 }
            }}
            transition={{ duration: 0.3 }}
          />
          {children}
        </Component>
      )
    }

    // No animation fallback
    if (href) {
      return (
        <Link
          ref={ref as any}
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as any)}
        >
          {children}
        </Link>
      )
    }
    
    return (
      <button
        ref={ref as any}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
