"use client";

import React from "react";
import { clsx } from "clsx";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label untuk textarea
   */
  label?: string;
  /**
   * Helper text di bawah textarea
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Ukuran textarea
   */
  size?: "sm" | "md" | "lg";
  /**
   * Resize behavior
   */
  resize?: "none" | "vertical" | "horizontal" | "both";
  /**
   * Auto resize berdasarkan konten
   */
  autoResize?: boolean;
  /**
   * Menampilkan character counter
   */
  showCounter?: boolean;
  /**
   * Maximum characters (untuk counter)
   */
  maxLength?: number;
}

const textareaSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

const textareaResize = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      resize = "vertical",
      autoResize = false,
      showCounter = false,
      maxLength,
      className,
      id,
      value,
      onChange,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const textareaId =
      id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);
    const [internalValue, setInternalValue] = React.useState(value || "");

    // Handle controlled vs uncontrolled
    const currentValue = value !== undefined ? value : internalValue;
    const characterCount = String(currentValue).length;

    // Auto resize functionality
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useImperativeHandle(ref, () => textareaRef.current!);

    const adjustHeight = React.useCallback(() => {
      const textarea = textareaRef.current;
      if (textarea && autoResize) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [autoResize]);

    React.useEffect(() => {
      if (autoResize) {
        adjustHeight();
      }
    }, [currentValue, adjustHeight]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      if (value === undefined) {
        setInternalValue(newValue);
      }

      if (autoResize) {
        setTimeout(adjustHeight, 0);
      }

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-secondary-700 mb-1"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <textarea
            ref={textareaRef}
            id={textareaId}
            rows={autoResize ? 1 : rows}
            maxLength={maxLength}
            className={clsx(
              // Base styles
              "block w-full rounded-lg border transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-offset-0",
              "disabled:opacity-50 disabled:cursor-not-allowed",

              // Size styles
              textareaSizes[size],

              // Resize styles
              textareaResize[resize],

              // Auto resize specific
              autoResize && "overflow-hidden",

              // State styles
              hasError
                ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-secondary-300 text-secondary-900 placeholder-secondary-400 focus:ring-primary-500 focus:border-primary-500",

              // Custom className
              className
            )}
            value={currentValue}
            onChange={handleChange}
            {...props}
          />
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex-1">
            {(helperText || error) && (
              <p
                className={clsx(
                  "text-sm",
                  hasError ? "text-red-600" : "text-secondary-500"
                )}
              >
                {error || helperText}
              </p>
            )}
          </div>

          {showCounter && (
            <div className="flex-shrink-0 ml-2">
              <p
                className={clsx(
                  "text-sm",
                  maxLength && characterCount > maxLength * 0.9
                    ? "text-red-600"
                    : "text-secondary-500"
                )}
              >
                {characterCount}
                {maxLength && `/${maxLength}`}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
