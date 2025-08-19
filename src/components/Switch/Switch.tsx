"use client";

import React from "react";
import { clsx } from "clsx";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Label untuk switch
   */
  label?: string;
  /**
   * Helper text di bawah switch
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Ukuran switch
   */
  size?: "sm" | "md" | "lg";
  /**
   * Warna switch ketika aktif
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Posisi label
   */
  labelPosition?: "left" | "right";
}

const switchSizes = {
  sm: {
    track: "w-9 h-5",
    thumb: "w-4 h-4",
    translate: "translate-x-4",
    thumbPosition: "top-0.5 left-0.5",
  },
  md: {
    track: "w-11 h-6",
    thumb: "w-5 h-5",
    translate: "translate-x-5",
    thumbPosition: "top-0.5 left-0.5",
  },
  lg: {
    track: "w-14 h-8",
    thumb: "w-7 h-7",
    translate: "translate-x-6",
    thumbPosition: "top-0.5 left-0.5",
  },
};

const switchColors = {
  primary: "bg-primary-600",
  secondary: "bg-secondary-600",
  success: "bg-green-600",
  warning: "bg-yellow-600",
  error: "bg-red-600",
};

const switchFocusColors = {
  primary: "focus:ring-primary-500",
  secondary: "focus:ring-secondary-500",
  success: "focus:ring-green-500",
  warning: "focus:ring-yellow-500",
  error: "focus:ring-red-500",
};

const labelSizes = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      color = "primary",
      labelPosition = "right",
      className,
      id,
      checked,
      ...props
    },
    ref
  ) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    const SwitchComponent = (
      <label
        htmlFor={switchId}
        className={clsx(
          "relative inline-flex cursor-pointer",
          props.disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <input
          ref={ref}
          id={switchId}
          type="checkbox"
          checked={checked}
          className="sr-only"
          {...props}
        />

        {/* Track */}
        <div
          className={clsx(
            // Base styles
            "relative rounded-full transition-colors duration-200 ease-in-out",
            "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2",

            // Size styles
            switchSizes[size].track,

            // Color styles
            checked ? switchColors[color] : "bg-secondary-300",

            // Focus styles
            switchFocusColors[color],

            // Error styles
            hasError && "ring-2 ring-red-500 ring-offset-2",

            className
          )}
        >
          {/* Thumb */}
          <span
            className={clsx(
              // Base styles
              "absolute bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out",
              "ring-0",

              // Size styles
              switchSizes[size].thumb,

              // Position styles
              switchSizes[size].thumbPosition,

              // Transform styles
              checked ? switchSizes[size].translate : "translate-x-0"
            )}
          />
        </div>
      </label>
    );

    const LabelComponent = label && (
      <label
        htmlFor={switchId}
        className={clsx(
          "font-medium cursor-pointer",
          labelSizes[size],
          hasError ? "text-red-700" : "text-secondary-700",
          props.disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {label}
      </label>
    );

    return (
      <div className="flex flex-col">
        <div
          className={clsx(
            "flex items-center",
            labelPosition === "left" ? "flex-row-reverse" : "flex-row",
            label &&
              (labelPosition === "left" ? "justify-end" : "justify-start")
          )}
        >
          {labelPosition === "left" && LabelComponent && (
            <div className="mr-3">{LabelComponent}</div>
          )}

          {SwitchComponent}

          {labelPosition === "right" && LabelComponent && (
            <div className="ml-3">{LabelComponent}</div>
          )}
        </div>

        {(helperText || error) && (
          <div
            className={clsx(
              "mt-1",
              label && labelPosition === "left" ? "text-right" : "text-left"
            )}
          >
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

Switch.displayName = "Switch";
