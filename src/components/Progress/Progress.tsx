import React from "react";
import { clsx } from "clsx";

export interface ProgressProps {
  /**
   * Nilai progress (0-100)
   */
  value: number;
  /**
   * Nilai maksimum
   */
  max?: number;
  /**
   * Ukuran progress
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Warna progress
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Variant progress
   */
  variant?: "default" | "striped" | "animated";
  /**
   * Label text
   */
  label?: string;
  /**
   * Apakah menampilkan persentase
   */
  showPercentage?: boolean;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom className untuk bar
   */
  barClassName?: string;
}

export interface CircularProgressProps {
  /**
   * Nilai progress (0-100)
   */
  value: number;
  /**
   * Nilai maksimum
   */
  max?: number;
  /**
   * Ukuran circular progress
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Warna progress
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Ketebalan stroke
   */
  strokeWidth?: number;
  /**
   * Apakah menampilkan persentase di tengah
   */
  showPercentage?: boolean;
  /**
   * Custom label di tengah
   */
  label?: React.ReactNode;
  /**
   * Custom className
   */
  className?: string;
}

const progressSizes = {
  xs: "h-1",
  sm: "h-2",
  md: "h-3",
  lg: "h-4",
  xl: "h-6",
};

const progressColors = {
  primary: "bg-primary-600",
  secondary: "bg-secondary-600",
  success: "bg-green-600",
  warning: "bg-yellow-500",
  error: "bg-red-600",
};

const circularSizes = {
  xs: { size: 24, fontSize: "text-xs" },
  sm: { size: 32, fontSize: "text-sm" },
  md: { size: 48, fontSize: "text-base" },
  lg: { size: 64, fontSize: "text-lg" },
  xl: { size: 96, fontSize: "text-2xl" },
};

const circularColors = {
  primary: "#2563eb",
  secondary: "#6b7280",
  success: "#059669",
  warning: "#eab308",
  error: "#dc2626",
};

// Linear Progress Bar
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      size = "md",
      color = "primary",
      variant = "default",
      label,
      showPercentage = false,
      className,
      barClassName,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div ref={ref} className={clsx("w-full", className)} {...props}>
        {(label || showPercentage) && (
          <div className="flex justify-between items-center mb-2">
            {label && (
              <span className="text-sm font-medium text-secondary-700">
                {label}
              </span>
            )}
            {showPercentage && (
              <span className="text-sm text-secondary-500">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}

        <div
          className={clsx(
            // Base styles
            "w-full bg-secondary-200 rounded-full overflow-hidden",

            // Size styles
            progressSizes[size]
          )}
        >
          <div
            className={clsx(
              // Base styles
              "h-full transition-all duration-300 ease-out rounded-full",

              // Color styles
              progressColors[color],

              // Variant styles
              variant === "striped" && "bg-stripe",
              variant === "animated" && "bg-stripe animate-stripe",

              // Custom className
              barClassName
            )}
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";

// Circular Progress
export const CircularProgress = React.forwardRef<
  SVGSVGElement,
  CircularProgressProps
>(
  (
    {
      value,
      max = 100,
      size = "md",
      color = "primary",
      strokeWidth,
      showPercentage = false,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    const { size: circleSize, fontSize } = circularSizes[size];
    const radius = circleSize / 2 - (strokeWidth || circleSize * 0.1);
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const defaultStrokeWidth = strokeWidth || circleSize * 0.1;

    return (
      <div
        className={clsx(
          "relative inline-flex items-center justify-center",
          className
        )}
      >
        <svg
          ref={ref}
          width={circleSize}
          height={circleSize}
          className="transform -rotate-90"
          {...props}
        >
          {/* Background circle */}
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={defaultStrokeWidth}
            fill="none"
          />

          {/* Progress circle */}
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke={circularColors[color]}
            strokeWidth={defaultStrokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Center content */}
        {(showPercentage || label) && (
          <div
            className={clsx(
              "absolute inset-0 flex items-center justify-center",
              fontSize,
              "font-semibold text-secondary-700"
            )}
          >
            {label || (showPercentage && `${Math.round(percentage)}%`)}
          </div>
        )}
      </div>
    );
  }
);

CircularProgress.displayName = "CircularProgress";

// Progress with steps
export interface SteppedProgressProps {
  /**
   * Step saat ini (1-based)
   */
  currentStep: number;
  /**
   * Total steps
   */
  totalSteps: number;
  /**
   * Ukuran stepped progress
   */
  size?: "sm" | "md" | "lg";
  /**
   * Warna progress
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Labels untuk setiap step
   */
  stepLabels?: string[];
  /**
   * Custom className
   */
  className?: string;
}

const stepSizes = {
  sm: {
    circle: "w-6 h-6 text-xs",
    line: "h-0.5",
  },
  md: {
    circle: "w-8 h-8 text-sm",
    line: "h-1",
  },
  lg: {
    circle: "w-10 h-10 text-base",
    line: "h-1.5",
  },
};

export const SteppedProgress = React.forwardRef<
  HTMLDivElement,
  SteppedProgressProps
>(
  (
    {
      currentStep,
      totalSteps,
      size = "md",
      color = "primary",
      stepLabels = [],
      className,
      ...props
    },
    ref
  ) => {
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

    return (
      <div ref={ref} className={clsx("w-full", className)} {...props}>
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = step <= currentStep;
            const isActive = step === currentStep;
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  {/* Step circle */}
                  <div
                    className={clsx(
                      // Base styles
                      "flex items-center justify-center rounded-full border-2 font-medium transition-all duration-200",

                      // Size styles
                      stepSizes[size].circle,

                      // State styles
                      isCompleted
                        ? clsx(
                            "border-transparent",
                            progressColors[color],
                            "text-white"
                          )
                        : isActive
                        ? clsx(
                            "border-2",
                            color === "primary"
                              ? "border-primary-600"
                              : `border-${color}-600`,
                            "bg-white text-primary-600"
                          )
                        : "border-secondary-300 bg-white text-secondary-400"
                    )}
                  >
                    {isCompleted ? "✓" : step}
                  </div>

                  {/* Step label */}
                  {stepLabels[index] && (
                    <span
                      className={clsx(
                        "mt-2 text-xs font-medium text-center max-w-20",
                        isCompleted || isActive
                          ? "text-secondary-900"
                          : "text-secondary-400"
                      )}
                    >
                      {stepLabels[index]}
                    </span>
                  )}
                </div>

                {/* Connection line */}
                {!isLast && (
                  <div
                    className={clsx(
                      "flex-1 mx-2",
                      stepSizes[size].line,
                      step < currentStep
                        ? progressColors[color]
                        : "bg-secondary-300"
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
);

SteppedProgress.displayName = "SteppedProgress";
