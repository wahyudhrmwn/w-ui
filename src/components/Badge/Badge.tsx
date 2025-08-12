import React from "react";
import { clsx } from "clsx";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Variant styling untuk badge
   */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
  /**
   * Ukuran badge
   */
  size?: "sm" | "md" | "lg";
  /**
   * Apakah badge berbentuk pill (rounded)
   */
  pill?: boolean;
  /**
   * Icon di sebelah kiri text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon di sebelah kanan text
   */
  rightIcon?: React.ReactNode;
}

const badgeVariants = {
  default: "bg-secondary-100 text-secondary-800 border-secondary-200",
  primary: "bg-primary-100 text-primary-800 border-primary-200",
  secondary: "bg-secondary-100 text-secondary-800 border-secondary-200",
  success: "bg-green-100 text-green-800 border-green-200",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
  error: "bg-red-100 text-red-800 border-red-200",
};

const badgeSizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "md",
      pill = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={clsx(
          // Base styles
          "inline-flex items-center font-medium border",

          // Shape
          pill ? "rounded-full" : "rounded-md",

          // Variant styles
          badgeVariants[variant],

          // Size styles
          badgeSizes[size],

          // Custom className
          className
        )}
        {...props}
      >
        {leftIcon && (
          <span className={clsx("mr-1", size === "sm" ? "w-3 h-3" : "w-4 h-4")}>
            {leftIcon}
          </span>
        )}

        {children}

        {rightIcon && (
          <span className={clsx("ml-1", size === "sm" ? "w-3 h-3" : "w-4 h-4")}>
            {rightIcon}
          </span>
        )}
      </span>
    );
  }
);

Badge.displayName = "Badge";
