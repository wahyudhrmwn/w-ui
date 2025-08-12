import React from "react";
import { clsx } from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant styling untuk card
   */
  variant?: "default" | "outlined" | "elevated";
  /**
   * Padding size untuk card
   */
  padding?: "none" | "sm" | "md" | "lg";
}

const cardVariants = {
  default: "bg-white border border-secondary-200",
  outlined: "bg-white border-2 border-secondary-300",
  elevated: "bg-white shadow-lg border border-secondary-100",
};

const cardPadding = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = "default", padding = "md", className, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          // Base styles
          "rounded-lg",

          // Variant styles
          cardVariants[variant],

          // Padding styles
          cardPadding[padding],

          // Custom className
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Card sub-components
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("mb-4", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("text-secondary-600", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("mt-4 pt-4 border-t border-secondary-200", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";
