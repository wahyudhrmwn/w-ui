"use client";

import React from "react";
import { clsx } from "clsx";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /**
   * Label untuk radio
   */
  label?: string;
  /**
   * Deskripsi tambahan
   */
  description?: string;
  /**
   * Helper text di bawah radio
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Ukuran radio
   */
  size?: "sm" | "md" | "lg";
  /**
   * Warna radio ketika active
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
}

export interface RadioGroupProps {
  /**
   * Nama grup radio
   */
  name: string;
  /**
   * Label untuk grup
   */
  label?: string;
  /**
   * Helper text di bawah grup
   */
  helperText?: string;
  /**
   * Error message untuk grup
   */
  error?: string;
  /**
   * Nilai yang dipilih
   */
  value?: string;
  /**
   * Callback ketika nilai berubah
   */
  onChange?: (value: string) => void;
  /**
   * Options untuk radio group
   */
  options: RadioOption[];
  /**
   * Ukuran radio
   */
  size?: "sm" | "md" | "lg";
  /**
   * Warna radio
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Layout direction
   */
  direction?: "vertical" | "horizontal";
  /**
   * Disabled state untuk seluruh grup
   */
  disabled?: boolean;
}

const radioSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const labelSizes = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

const descriptionSizes = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm",
};

const radioColors = {
  primary: "text-primary-600 focus:ring-primary-500 focus:border-primary-500",
  secondary:
    "text-secondary-600 focus:ring-secondary-500 focus:border-secondary-500",
  success: "text-green-600 focus:ring-green-500 focus:border-green-500",
  warning: "text-yellow-600 focus:ring-yellow-500 focus:border-yellow-500",
  error: "text-red-600 focus:ring-red-500 focus:border-red-500",
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      description,
      helperText,
      error,
      size = "md",
      color = "primary",
      className,
      id,
      ...props
    },
    ref
  ) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    return (
      <div className="flex flex-col">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              ref={ref}
              id={radioId}
              type="radio"
              className={clsx(
                // Base styles
                "border transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-0",
                "disabled:opacity-50 disabled:cursor-not-allowed",

                // Size styles
                radioSizes[size],

                // Color styles
                hasError
                  ? "border-red-300 text-red-600 focus:ring-red-500 focus:border-red-500"
                  : radioColors[color],

                // Default border when not checked
                !props.checked && !hasError && "border-secondary-300",

                // Custom className
                className
              )}
              {...props}
            />
          </div>

          {(label || description) && (
            <div className="ml-3 flex-1">
              {label && (
                <label
                  htmlFor={radioId}
                  className={clsx(
                    "font-medium cursor-pointer block",
                    labelSizes[size],
                    hasError ? "text-red-700" : "text-secondary-700"
                  )}
                >
                  {label}
                </label>
              )}

              {description && (
                <p
                  className={clsx(
                    "mt-0.5",
                    descriptionSizes[size],
                    hasError ? "text-red-600" : "text-secondary-500"
                  )}
                >
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {(helperText || error) && (
          <div className={clsx("mt-1", label || description ? "ml-8" : "")}>
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

Radio.displayName = "Radio";

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      label,
      helperText,
      error,
      value,
      onChange,
      options,
      size = "md",
      color = "primary",
      direction = "vertical",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error);

    const handleChange = (optionValue: string) => {
      if (onChange) {
        onChange(optionValue);
      }
    };

    return (
      <div ref={ref} {...props}>
        {label && (
          <legend className="block text-sm font-medium text-secondary-700 mb-2">
            {label}
          </legend>
        )}

        <div
          className={clsx(
            direction === "horizontal" ? "flex flex-wrap gap-4" : "space-y-3"
          )}
        >
          {options.map((option, index) => (
            <Radio
              key={option.value}
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => handleChange(option.value)}
              disabled={disabled || option.disabled}
              label={option.label}
              description={option.description}
              size={size}
              color={color}
              error={hasError && index === 0 ? error : undefined}
            />
          ))}
        </div>

        {helperText && !hasError && (
          <p className="mt-2 text-sm text-secondary-500">{helperText}</p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
