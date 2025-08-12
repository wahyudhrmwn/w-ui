"use client";

import React from "react";
import { clsx } from "clsx";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Label untuk input
   */
  label?: string;
  /**
   * Helper text di bawah input
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Ukuran input
   */
  size?: "sm" | "md" | "lg";
  /**
   * Icon di sebelah kiri input
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon di sebelah kanan input
   */
  rightIcon?: React.ReactNode;
}

const inputSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-secondary-700 mb-1"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-secondary-400">{leftIcon}</span>
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={clsx(
              // Base styles
              "block w-full rounded-lg border transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-offset-0",
              "disabled:opacity-50 disabled:cursor-not-allowed",

              // Size styles
              inputSizes[size],

              // Icon padding
              leftIcon && "pl-10",
              rightIcon && "pr-10",

              // State styles
              hasError
                ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-secondary-300 text-secondary-900 placeholder-secondary-400 focus:ring-primary-500 focus:border-primary-500",

              // Custom className
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span
                className={clsx(
                  hasError ? "text-red-400" : "text-secondary-400"
                )}
              >
                {rightIcon}
              </span>
            </div>
          )}
        </div>

        {(helperText || error) && (
          <p
            className={clsx(
              "mt-1 text-sm",
              hasError ? "text-red-600" : "text-secondary-500"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
