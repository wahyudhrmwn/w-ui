import React from "react";
import { clsx } from "clsx";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant styling untuk alert
   */
  variant?: "info" | "success" | "warning" | "error";
  /**
   * Ukuran alert
   */
  size?: "sm" | "md" | "lg";
  /**
   * Judul alert
   */
  title?: string;
  /**
   * Apakah alert dapat ditutup
   */
  dismissible?: boolean;
  /**
   * Callback ketika alert ditutup
   */
  onDismiss?: () => void;
  /**
   * Icon custom (override icon default)
   */
  icon?: React.ReactNode;
  /**
   * Sembunyikan icon default
   */
  hideIcon?: boolean;
}

const alertVariants = {
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-800",
    icon: "text-blue-400",
    title: "text-blue-800",
    button: "text-blue-500 hover:bg-blue-100 focus:ring-blue-600",
  },
  success: {
    container: "bg-green-50 border-green-200 text-green-800",
    icon: "text-green-400",
    title: "text-green-800",
    button: "text-green-500 hover:bg-green-100 focus:ring-green-600",
  },
  warning: {
    container: "bg-yellow-50 border-yellow-200 text-yellow-800",
    icon: "text-yellow-400",
    title: "text-yellow-800",
    button: "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600",
  },
  error: {
    container: "bg-red-50 border-red-200 text-red-800",
    icon: "text-red-400",
    title: "text-red-800",
    button: "text-red-500 hover:bg-red-100 focus:ring-red-600",
  },
};

const alertSizes = {
  sm: "p-3 text-sm",
  md: "p-4 text-sm",
  lg: "p-4 text-base",
};

// Default icons
const InfoIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const WarningIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  </svg>
);

const CloseIcon = () => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const defaultIcons = {
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "info",
      size = "md",
      title,
      dismissible = false,
      onDismiss,
      icon,
      hideIcon = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      if (onDismiss) {
        onDismiss();
      }
    };

    if (!isVisible) {
      return null;
    }

    const IconComponent = icon || (!hideIcon && defaultIcons[variant]);

    return (
      <div
        ref={ref}
        className={clsx(
          // Base styles
          "rounded-lg border",

          // Variant styles
          alertVariants[variant].container,

          // Size styles
          alertSizes[size],

          // Custom className
          className
        )}
        {...props}
      >
        <div className="flex">
          {IconComponent && (
            <div className="flex-shrink-0">
              <div className={clsx("mt-0.5", alertVariants[variant].icon)}>
                {React.isValidElement(IconComponent) ? (
                  IconComponent
                ) : (
                  <IconComponent />
                )}
              </div>
            </div>
          )}

          <div className={clsx("flex-1", IconComponent && "ml-3")}>
            {title && (
              <h3
                className={clsx(
                  "font-medium mb-1",
                  alertVariants[variant].title
                )}
              >
                {title}
              </h3>
            )}

            {children && (
              <div className={clsx(!title && "mt-0")}>{children}</div>
            )}
          </div>

          {dismissible && (
            <div className="flex-shrink-0 ml-4">
              <button
                type="button"
                onClick={handleDismiss}
                className={clsx(
                  "inline-flex rounded-md p-1.5 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2",
                  alertVariants[variant].button
                )}
              >
                <span className="sr-only">Dismiss</span>
                <CloseIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";
