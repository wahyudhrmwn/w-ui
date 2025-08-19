import React from "react";
import { clsx } from "clsx";

export interface DividerProps {
  /**
   * Orientasi divider
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Tipe garis divider
   */
  type?: "solid" | "dashed" | "dotted";
  /**
   * Ukuran thickness divider
   */
  size?: "xs" | "sm" | "md" | "lg";
  /**
   * Warna divider
   */
  variant?: "default" | "light" | "dark" | "primary";
  /**
   * Text atau content di tengah divider (hanya untuk horizontal)
   */
  children?: React.ReactNode;
  /**
   * Posisi text/content
   */
  textAlign?: "left" | "center" | "right";
  /**
   * Custom className
   */
  className?: string;
  /**
   * Apakah divider mengambil full width/height
   */
  fullWidth?: boolean;
  /**
   * Margin/spacing di sekitar divider
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

const dividerSizes = {
  xs: "border-t",
  sm: "border-t-2",
  md: "border-t-4",
  lg: "border-t-8",
};

const dividerVerticalSizes = {
  xs: "border-l",
  sm: "border-l-2",
  md: "border-l-4",
  lg: "border-l-8",
};

const dividerVariants = {
  default: "border-secondary-300",
  light: "border-secondary-200",
  dark: "border-secondary-500",
  primary: "border-primary-300",
};

const dividerTypes = {
  solid: "",
  dashed: "border-dashed",
  dotted: "border-dotted",
};

const dividerSpacing = {
  none: "",
  sm: "my-2",
  md: "my-4",
  lg: "my-6",
  xl: "my-8",
};

const dividerVerticalSpacing = {
  none: "",
  sm: "mx-2",
  md: "mx-4",
  lg: "mx-6",
  xl: "mx-8",
};

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      type = "solid",
      size = "xs",
      variant = "default",
      children,
      textAlign = "center",
      className,
      fullWidth = true,
      spacing = "md",
      ...props
    },
    ref
  ) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          className={clsx(
            "inline-block",
            dividerVerticalSizes[size],
            dividerVariants[variant],
            dividerTypes[type],
            dividerVerticalSpacing[spacing],
            !fullWidth && "h-6", // Default height for vertical divider
            fullWidth && "self-stretch",
            className
          )}
          {...props}
        />
      );
    }

    // Horizontal divider
    if (children) {
      return (
        <div
          ref={ref}
          className={clsx(
            "flex items-center",
            fullWidth && "w-full",
            dividerSpacing[spacing],
            className
          )}
          {...props}
        >
          {/* Left line */}
          <div
            className={clsx(
              "flex-1",
              dividerSizes[size],
              dividerVariants[variant],
              dividerTypes[type],
              textAlign === "left" && "flex-none w-8",
              textAlign === "right" && "flex-auto"
            )}
          />

          {/* Content */}
          <div
            className={clsx(
              "px-3 text-sm text-secondary-600 font-medium whitespace-nowrap",
              variant === "primary" && "text-primary-600",
              variant === "dark" && "text-secondary-700"
            )}
          >
            {children}
          </div>

          {/* Right line */}
          <div
            className={clsx(
              "flex-1",
              dividerSizes[size],
              dividerVariants[variant],
              dividerTypes[type],
              textAlign === "left" && "flex-auto",
              textAlign === "right" && "flex-none w-8"
            )}
          />
        </div>
      );
    }

    // Simple horizontal line
    return (
      <div
        ref={ref}
        className={clsx(
          dividerSizes[size],
          dividerVariants[variant],
          dividerTypes[type],
          dividerSpacing[spacing],
          fullWidth && "w-full",
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
