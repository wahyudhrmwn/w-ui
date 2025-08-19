import React from "react";
import { clsx } from "clsx";

export interface DialogProps {
  /**
   * Apakah dialog terbuka
   */
  isOpen: boolean;
  /**
   * Callback ketika dialog ditutup
   */
  onClose: () => void;
  /**
   * Title dialog
   */
  title?: string;
  /**
   * Deskripsi/konten dialog
   */
  description?: string;
  /**
   * Children content
   */
  children?: React.ReactNode;
  /**
   * Tipe dialog
   */
  type?: "default" | "success" | "warning" | "error" | "info";
  /**
   * Ukuran dialog
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Apakah menampilkan close button (X)
   */
  showCloseButton?: boolean;
  /**
   * Apakah dialog bisa ditutup dengan overlay click
   */
  closeOnOverlayClick?: boolean;
  /**
   * Apakah dialog bisa ditutup dengan ESC key
   */
  closeOnEscapeKey?: boolean;
  /**
   * Custom className untuk dialog
   */
  className?: string;
  /**
   * Custom className untuk overlay
   */
  overlayClassName?: string;
  /**
   * Confirm button props
   */
  confirmButton?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "success" | "warning" | "destructive" | "outline";
    disabled?: boolean;
  };
  /**
   * Cancel button props
   */
  cancelButton?: {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
  };
  /**
   * Icon untuk dialog
   */
  icon?: React.ReactNode;
  /**
   * Apakah menampilkan default icon sesuai tipe
   */
  showIcon?: boolean;
}

const dialogSizes = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

const dialogTypes = {
  default: {
    container: "bg-white border-secondary-200",
    icon: "text-secondary-600",
    title: "text-secondary-900",
    description: "text-secondary-600",
  },
  success: {
    container: "bg-white border-green-200",
    icon: "text-green-600",
    title: "text-secondary-900",
    description: "text-secondary-600",
  },
  warning: {
    container: "bg-white border-yellow-200",
    icon: "text-yellow-600",
    title: "text-secondary-900",
    description: "text-secondary-600",
  },
  error: {
    container: "bg-white border-red-200",
    icon: "text-red-600",
    title: "text-secondary-900",
    description: "text-secondary-600",
  },
  info: {
    container: "bg-white border-blue-200",
    icon: "text-blue-600",
    title: "text-secondary-900",
    description: "text-secondary-600",
  },
};

// Default icons untuk setiap tipe
const DefaultIcons = {
  default: () => (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z"
      />
    </svg>
  ),
  success: () => (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  warning: () => (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-1.732-.833-2.464 0L4.348 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  ),
  error: () => (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  info: () => (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
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

// Button component untuk dialog actions
const DialogButton: React.FC<{
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "destructive"
    | "outline";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}> = ({ variant = "primary", onClick, disabled, children }) => {
  const buttonVariants = {
    primary:
      "bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 text-white",
    secondary:
      "bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 text-white",
    success: "bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white",
    warning:
      "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 text-white",
    destructive: "bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white",
    outline:
      "bg-white hover:bg-secondary-50 focus:ring-secondary-500 text-secondary-700 border border-secondary-300",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        buttonVariants[variant],
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      isOpen,
      onClose,
      title,
      description,
      children,
      type = "default",
      size = "md",
      showCloseButton = true,
      closeOnOverlayClick = true,
      closeOnEscapeKey = true,
      className,
      overlayClassName,
      confirmButton,
      cancelButton,
      icon,
      showIcon = true,
      ...props
    },
    ref
  ) => {
    // Handle escape key
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && closeOnEscapeKey && isOpen) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.body.style.overflow = "unset";
        };
      }
    }, [isOpen, closeOnEscapeKey, onClose]);

    if (!isOpen) return null;

    const DefaultIcon = DefaultIcons[type];

    const handleCancelClick = () => {
      if (cancelButton?.onClick) {
        cancelButton.onClick();
      } else {
        onClose();
      }
    };

    return (
      <div className="fixed inset-0 z-50">
        {/* Overlay */}
        <div
          className={clsx(
            "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
            overlayClassName
          )}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />

        {/* Dialog container */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div
            ref={ref}
            className={clsx(
              // Base styles
              "relative w-full rounded-xl shadow-2xl border-0 transition-all",

              // Size styles
              dialogSizes[size],

              // Type styles
              dialogTypes[type].container,

              // Animation
              "animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-300",

              // Custom className
              className
            )}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "dialog-title" : undefined}
            aria-describedby={description ? "dialog-description" : undefined}
            {...props}
          >
            {/* Close button */}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-secondary-400 hover:text-secondary-600 transition-colors"
                aria-label="Close dialog"
              >
                <CloseIcon />
              </button>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Header dengan icon dan title */}
              {(title || showIcon) && (
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon */}
                  {(showIcon || icon) && (
                    <div
                      className={clsx(
                        "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                        {
                          "bg-secondary-100": type === "default",
                          "bg-green-100": type === "success",
                          "bg-yellow-100": type === "warning",
                          "bg-red-100": type === "error",
                          "bg-blue-100": type === "info",
                        },
                        dialogTypes[type].icon
                      )}
                    >
                      {icon || <DefaultIcon />}
                    </div>
                  )}

                  {/* Title */}
                  {title && (
                    <div className="flex-1 min-w-0">
                      <h2
                        id="dialog-title"
                        className={clsx(
                          "text-xl font-semibold leading-7 tracking-tight",
                          dialogTypes[type].title
                        )}
                      >
                        {title}
                      </h2>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              {description && (
                <div
                  id="dialog-description"
                  className={clsx(
                    "text-sm leading-relaxed",
                    dialogTypes[type].description,
                    (title || showIcon) && "pl-16",
                    children ? "mb-4" : "mb-6"
                  )}
                >
                  {description}
                </div>
              )}

              {/* Custom children */}
              {children && (
                <div
                  className={clsx(
                    "mb-6",
                    (title || showIcon) && !description && "pl-16"
                  )}
                >
                  {children}
                </div>
              )}
            </div>

            {/* Footer with actions */}
            {(confirmButton || cancelButton) && (
              <div className="px-6 py-4 bg-secondary-25 border-t border-secondary-100 rounded-b-xl">
                <div className="flex justify-end gap-3">
                  {/* Cancel button */}
                  {cancelButton && (
                    <DialogButton
                      variant={cancelButton.variant || "outline"}
                      onClick={handleCancelClick}
                    >
                      {cancelButton.label}
                    </DialogButton>
                  )}

                  {/* Confirm button */}
                  {confirmButton && (
                    <DialogButton
                      variant={confirmButton.variant || "primary"}
                      onClick={confirmButton.onClick}
                      disabled={confirmButton.disabled}
                    >
                      {confirmButton.label}
                    </DialogButton>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Dialog.displayName = "Dialog";
