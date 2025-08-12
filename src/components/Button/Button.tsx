"use client";

import React from "react";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant styling untuk button
   */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  /**
   * Ukuran button
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Apakah button dalam state loading
   */
  loading?: boolean;
  /**
   * Icon di sebelah kiri text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon di sebelah kanan text
   */
  rightIcon?: React.ReactNode;
}

const buttonVariants = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm",
  secondary:
    "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500",
  outline:
    "border border-secondary-300 text-secondary-700 hover:bg-secondary-50 focus:ring-primary-500",
  ghost: "text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={clsx(
          // Base styles
          "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",

          // Variant styles
          buttonVariants[variant],

          // Size styles
          buttonSizes[size],

          // Loading state
          loading && "cursor-wait",

          // Custom className
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}

        {children}

        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
