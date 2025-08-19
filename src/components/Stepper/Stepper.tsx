import React from "react";
import { clsx } from "clsx";

export interface StepItem {
  /**
   * Unique key untuk step
   */
  key: string;
  /**
   * Title step
   */
  title: string;
  /**
   * Deskripsi step (opsional)
   */
  description?: string;
  /**
   * Icon untuk step (opsional)
   */
  icon?: React.ReactNode;
  /**
   * Status step
   */
  status?: "wait" | "process" | "finish" | "error";
  /**
   * Apakah step disabled (tidak bisa diklik)
   */
  disabled?: boolean;
  /**
   * Custom className untuk step
   */
  className?: string;
}

export interface StepperProps {
  /**
   * Array step items
   */
  steps: StepItem[];
  /**
   * Current active step (0-based index)
   */
  current?: number;
  /**
   * Status untuk current step
   */
  status?: "wait" | "process" | "finish" | "error";
  /**
   * Orientasi stepper
   */
  direction?: "horizontal" | "vertical";
  /**
   * Ukuran stepper
   */
  size?: "sm" | "md" | "lg";
  /**
   * Apakah step bisa diklik untuk navigasi
   */
  clickable?: boolean;
  /**
   * Callback ketika step diklik
   */
  onChange?: (current: number) => void;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Apakah menampilkan nomor step
   */
  showNumbers?: boolean;
  /**
   * Type connector line
   */
  connectorType?: "solid" | "dashed" | "dotted";
}

const stepperSizes = {
  sm: {
    icon: "w-6 h-6 text-xs",
    title: "text-sm",
    description: "text-xs",
    spacing: "gap-2",
  },
  md: {
    icon: "w-8 h-8 text-sm",
    title: "text-base",
    description: "text-sm",
    spacing: "gap-3",
  },
  lg: {
    icon: "w-10 h-10 text-base",
    title: "text-lg",
    description: "text-base",
    spacing: "gap-4",
  },
};

const stepStatuses = {
  wait: {
    icon: "bg-secondary-100 text-secondary-400 border-secondary-300",
    title: "text-secondary-600",
    description: "text-secondary-400",
    connector: "bg-secondary-300",
  },
  process: {
    icon: "bg-primary-600 text-white border-primary-600",
    title: "text-primary-600 font-medium",
    description: "text-secondary-600",
    connector: "bg-secondary-300",
  },
  finish: {
    icon: "bg-green-600 text-white border-green-600",
    title: "text-green-600 font-medium",
    description: "text-secondary-600",
    connector: "bg-green-600",
  },
  error: {
    icon: "bg-red-600 text-white border-red-600",
    title: "text-red-600 font-medium",
    description: "text-red-400",
    connector: "bg-secondary-300",
  },
};

// Default icons
const CheckIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      current = 0,
      status = "process",
      direction = "horizontal",
      size = "md",
      clickable = false,
      onChange,
      className,
      showNumbers = true,
      connectorType = "solid",
      ...props
    },
    ref
  ) => {
    const getStepStatus = (
      index: number,
      step: StepItem
    ): keyof typeof stepStatuses => {
      // Use custom status if provided
      if (step.status) return step.status;

      // Determine status based on current position
      if (index < current) return "finish";
      if (index === current) return status;
      return "wait";
    };

    const handleStepClick = (index: number, step: StepItem) => {
      if (clickable && !step.disabled && onChange) {
        onChange(index);
      }
    };

    const renderStepIcon = (
      index: number,
      step: StepItem,
      stepStatus: keyof typeof stepStatuses
    ) => {
      let iconContent: React.ReactNode;

      if (step.icon) {
        iconContent = step.icon;
      } else if (stepStatus === "finish") {
        iconContent = <CheckIcon />;
      } else if (stepStatus === "error") {
        iconContent = <XIcon />;
      } else if (showNumbers) {
        iconContent = index + 1;
      } else {
        iconContent = null;
      }

      return (
        <div
          className={clsx(
            "flex items-center justify-center rounded-full border-2 transition-colors duration-200 flex-shrink-0",
            stepperSizes[size].icon,
            stepStatuses[stepStatus].icon,
            clickable && !step.disabled && "cursor-pointer hover:scale-105",
            step.disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {iconContent}
        </div>
      );
    };

    const renderConnector = (
      index: number,
      stepStatus: keyof typeof stepStatuses
    ) => {
      if (index === steps.length - 1) return null;

      const connectorStyles = {
        solid: "",
        dashed: "border-dashed",
        dotted: "border-dotted",
      };

      const nextStepStatus = getStepStatus(index + 1, steps[index + 1]);
      const connectorColor =
        stepStatus === "finish"
          ? stepStatuses.finish.connector
          : stepStatuses.wait.connector;

      if (direction === "horizontal") {
        return (
          <div className="flex-1 flex items-center px-2">
            <div
              className={clsx(
                "h-0.5 w-full transition-colors duration-200",
                connectorType === "solid"
                  ? connectorColor
                  : `border-t-2 ${
                      connectorStyles[connectorType]
                    } ${connectorColor.replace("bg-", "border-")}`
              )}
            />
          </div>
        );
      } else {
        return (
          <div className="flex justify-center">
            <div
              className={clsx(
                "w-0.5 h-8 transition-colors duration-200",
                connectorType === "solid"
                  ? connectorColor
                  : `border-l-2 ${
                      connectorStyles[connectorType]
                    } ${connectorColor.replace("bg-", "border-")}`
              )}
            />
          </div>
        );
      }
    };

    if (direction === "vertical") {
      return (
        <div
          ref={ref}
          className={clsx("stepper-vertical", className)}
          {...props}
        >
          {steps.map((step, index) => {
            const stepStatus = getStepStatus(index, step);
            const isLast = index === steps.length - 1;

            return (
              <div key={step.key} className="flex">
                {/* Icon column */}
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => handleStepClick(index, step)}
                    className={clsx(step.className)}
                  >
                    {renderStepIcon(index, step, stepStatus)}
                  </div>
                  {!isLast && renderConnector(index, stepStatus)}
                </div>

                {/* Content column */}
                <div
                  className={clsx("flex-1 pb-8", stepperSizes[size].spacing)}
                >
                  <div
                    className={clsx(
                      "cursor-pointer",
                      !clickable && "cursor-default"
                    )}
                    onClick={() => handleStepClick(index, step)}
                  >
                    <div
                      className={clsx(
                        stepperSizes[size].title,
                        stepStatuses[stepStatus].title
                      )}
                    >
                      {step.title}
                    </div>
                    {step.description && (
                      <div
                        className={clsx(
                          "mt-1",
                          stepperSizes[size].description,
                          stepStatuses[stepStatus].description
                        )}
                      >
                        {step.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={clsx(
          "stepper-horizontal flex items-center w-full",
          className
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const stepStatus = getStepStatus(index, step);

          return (
            <React.Fragment key={step.key}>
              <div
                className={clsx(
                  "flex flex-col items-center text-center flex-shrink-0",
                  stepperSizes[size].spacing,
                  step.className
                )}
              >
                <div
                  onClick={() => handleStepClick(index, step)}
                  className={clsx(!clickable && "cursor-default")}
                >
                  {renderStepIcon(index, step, stepStatus)}
                </div>
                <div className="mt-2">
                  <div
                    className={clsx(
                      stepperSizes[size].title,
                      stepStatuses[stepStatus].title
                    )}
                  >
                    {step.title}
                  </div>
                  {step.description && (
                    <div
                      className={clsx(
                        "mt-1",
                        stepperSizes[size].description,
                        stepStatuses[stepStatus].description
                      )}
                    >
                      {step.description}
                    </div>
                  )}
                </div>
              </div>

              {renderConnector(index, stepStatus)}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = "Stepper";
