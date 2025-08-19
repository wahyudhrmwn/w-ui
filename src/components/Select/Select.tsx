"use client";

import React from "react";
import { clsx } from "clsx";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /**
   * Label untuk select
   */
  label?: string;
  /**
   * Helper text di bawah select
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Ukuran select
   */
  size?: "sm" | "md" | "lg";
  /**
   * Options untuk select
   */
  options?: SelectOption[];
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Icon di sebelah kiri select
   */
  leftIcon?: React.ReactNode;
}

const selectSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

const ChevronDownIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      options = [],
      placeholder,
      leftIcon,
      className,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
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

          <select
            ref={ref}
            id={selectId}
            className={clsx(
              // Base styles
              "block w-full rounded-lg border transition-colors duration-200 appearance-none bg-white",
              "focus:outline-none focus:ring-2 focus:ring-offset-0",
              "disabled:opacity-50 disabled:cursor-not-allowed",

              // Size styles
              selectSizes[size],

              // Icon padding
              leftIcon && "pl-10",
              "pr-10", // Always add right padding for chevron

              // State styles
              hasError
                ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500"
                : "border-secondary-300 text-secondary-900 focus:ring-primary-500 focus:border-primary-500",

              // Custom className
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}

            {children}
          </select>

          {/* Chevron down icon */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span
              className={clsx(hasError ? "text-red-400" : "text-secondary-400")}
            >
              <ChevronDownIcon />
            </span>
          </div>
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

Select.displayName = "Select";
