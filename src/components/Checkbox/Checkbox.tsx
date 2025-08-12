"use client";

import React from "react";
import { clsx } from "clsx";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Label untuk checkbox
   */
  label?: string;
  /**
   * Helper text di bawah checkbox
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Ukuran checkbox
   */
  size?: "sm" | "md" | "lg";
  /**
   * State indeterminate
   */
  indeterminate?: boolean;
}

const checkboxSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const labelSizes = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      indeterminate = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId =
      id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    // Handle indeterminate state
    React.useEffect(() => {
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.indeterminate = indeterminate;
      }
    }, [indeterminate, ref]);

    return (
      <div className="flex flex-col">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              className={clsx(
                // Base styles
                "rounded border transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-0",
                "disabled:opacity-50 disabled:cursor-not-allowed",

                // Size styles
                checkboxSizes[size],

                // State styles
                hasError
                  ? "border-red-300 text-red-600 focus:ring-red-500 focus:border-red-500"
                  : "border-secondary-300 text-primary-600 focus:ring-primary-500 focus:border-primary-500",

                // Custom className
                className
              )}
              {...props}
            />
          </div>

          {label && (
            <div className="ml-3 flex-1">
              <label
                htmlFor={checkboxId}
                className={clsx(
                  "font-medium cursor-pointer",
                  labelSizes[size],
                  hasError ? "text-red-700" : "text-secondary-700"
                )}
              >
                {label}
              </label>
            </div>
          )}
        </div>

        {(helperText || error) && (
          <div className={clsx("mt-1", label ? "ml-8" : "")}>
            <p
              className={clsx(
                "text-sm",
                hasError ? "text-red-600" : "text-secondary-500"
              )}
            >
              {error || helperText}
            </p>
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
