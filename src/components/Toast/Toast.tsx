import React from "react";
import { clsx } from "clsx";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Apakah toast visible
   */
  isVisible: boolean;
  /**
   * Title toast
   */
  title?: string;
  /**
   * Pesan toast
   */
  message: string;
  /**
   * Tipe toast
   */
  type?: "success" | "error" | "warning" | "info";
  /**
   * Durasi auto dismiss (ms), 0 untuk tidak auto dismiss
   */
  duration?: number;
  /**
   * Posisi toast
   */
  position?:
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-right"
    | "bottom-left"
    | "bottom-center";
  /**
   * Apakah menampilkan close button
   */
  showCloseButton?: boolean;
  /**
   * Apakah menampilkan icon
   */
  showIcon?: boolean;
  /**
   * Ukuran toast
   */
  size?: "sm" | "md" | "lg";
  /**
   * Callback ketika toast ditutup
   */
  onClose?: () => void;
  /**
   * Callback ketika toast diklik
   */
  onClick?: () => void;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom icon
   */
  icon?: React.ReactNode;
  /**
   * Action button
   */
  action?: {
    label: string;
    onClick: () => void;
  };
}

const toastTypes = {
  success: {
    container: "bg-green-50 border-green-200 text-green-800",
    icon: "text-green-600",
    closeButton: "text-green-600 hover:text-green-800",
    actionButton: "text-green-600 hover:text-green-800 border-green-300",
  },
  error: {
    container: "bg-red-50 border-red-200 text-red-800",
    icon: "text-red-600",
    closeButton: "text-red-600 hover:text-red-800",
    actionButton: "text-red-600 hover:text-red-800 border-red-300",
  },
  warning: {
    container: "bg-yellow-50 border-yellow-200 text-yellow-800",
    icon: "text-yellow-600",
    closeButton: "text-yellow-600 hover:text-yellow-800",
    actionButton: "text-yellow-600 hover:text-yellow-800 border-yellow-300",
  },
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-800",
    icon: "text-blue-600",
    closeButton: "text-blue-600 hover:text-blue-800",
    actionButton: "text-blue-600 hover:text-blue-800 border-blue-300",
  },
};

const toastSizes = {
  sm: {
    container: "p-3 text-sm max-w-xs",
    title: "text-sm font-medium",
    message: "text-xs",
    icon: "w-4 h-4",
    closeButton: "w-4 h-4",
  },
  md: {
    container: "p-4 text-base max-w-sm",
    title: "text-base font-medium",
    message: "text-sm",
    icon: "w-5 h-5",
    closeButton: "w-5 h-5",
  },
  lg: {
    container: "p-5 text-lg max-w-md",
    title: "text-lg font-medium",
    message: "text-base",
    icon: "w-6 h-6",
    closeButton: "w-6 h-6",
  },
};

const toastPositions = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 transform -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
};

// Default icons untuk setiap tipe
const DefaultIcons = {
  success: () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
  info: () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const CloseIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      isVisible,
      title,
      message,
      type = "info",
      duration = 5000,
      position = "top-right",
      showCloseButton = true,
      showIcon = true,
      size = "md",
      onClose,
      onClick,
      className,
      icon,
      action,
      ...props
    },
    ref
  ) => {
    const [isAnimating, setIsAnimating] = React.useState(false);

    // Auto dismiss
    React.useEffect(() => {
      if (isVisible && duration > 0) {
        const timer = setTimeout(() => {
          onClose?.();
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [isVisible, duration, onClose]);

    // Handle animation
    React.useEffect(() => {
      if (isVisible) {
        setIsAnimating(true);
      } else {
        const timer = setTimeout(() => setIsAnimating(false), 300);
        return () => clearTimeout(timer);
      }
    }, [isVisible]);

    if (!isVisible && !isAnimating) {
      return null;
    }

    const DefaultIcon = DefaultIcons[type];

    return (
      <div
        ref={ref}
        className={clsx(
          // Base styles
          "fixed z-50 transition-all duration-300 ease-in-out",
          "border rounded-lg shadow-lg backdrop-blur-sm",

          // Position styles
          toastPositions[position],

          // Size and type styles
          toastSizes[size].container,
          toastTypes[type].container,

          // Animation styles
          isVisible
            ? "opacity-100 transform translate-y-0 scale-100"
            : "opacity-0 transform translate-y-2 scale-95",

          // Custom className
          className
        )}
        onClick={onClick}
        role="alert"
        aria-live="polite"
        {...props}
      >
        <div className="flex items-start gap-3">
          {/* Icon */}
          {showIcon && (
            <div
              className={clsx(
                "flex-shrink-0",
                toastSizes[size].icon,
                toastTypes[type].icon
              )}
            >
              {icon || <DefaultIcon />}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            {title && (
              <p className={clsx("mb-1", toastSizes[size].title)}>{title}</p>
            )}

            {/* Message */}
            <p className={clsx("leading-relaxed", toastSizes[size].message)}>
              {message}
            </p>

            {/* Action */}
            {action && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  action.onClick();
                }}
                className={clsx(
                  "mt-2 px-2 py-1 text-xs font-medium border rounded transition-colors",
                  toastTypes[type].actionButton
                )}
              >
                {action.label}
              </button>
            )}
          </div>

          {/* Close button */}
          {showCloseButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
              className={clsx(
                "flex-shrink-0 transition-colors rounded p-0.5",
                toastSizes[size].closeButton,
                toastTypes[type].closeButton
              )}
              aria-label="Close notification"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Toast.displayName = "Toast";

// Toast Provider Context untuk managing multiple toasts
interface ToastContextType {
  showToast: (toast: Omit<ToastProps, "isVisible" | "onClose">) => string;
  hideToast: (id: string) => void;
  hideAllToasts: () => void;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastData extends ToastProps {
  id: string;
}

interface ToastProviderProps {
  children: React.ReactNode;
  defaultDuration?: number;
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  defaultDuration = 5000,
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);
  const idCounter = React.useRef(0);

  const showToast = React.useCallback(
    (toastProps: Omit<ToastProps, "isVisible" | "onClose">) => {
      const id = `toast-${++idCounter.current}`;
      const newToast: ToastData = {
        ...toastProps,
        id,
        isVisible: true,
        duration: toastProps.duration ?? defaultDuration,
        onClose: () => hideToast(id),
      };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        // Limit max toasts
        return updated.length > maxToasts ? updated.slice(-maxToasts) : updated;
      });

      return id;
    },
    [defaultDuration, maxToasts]
  );

  const hideToast = React.useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, isVisible: false } : toast
      )
    );

    // Remove from array after animation
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);
  }, []);

  const hideAllToasts = React.useCallback(() => {
    setToasts((prev) => prev.map((toast) => ({ ...toast, isVisible: false })));

    setTimeout(() => {
      setToasts([]);
    }, 300);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      showToast,
      hideToast,
      hideAllToasts,
    }),
    [showToast, hideToast, hideAllToasts]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {/* Render all toasts */}
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </ToastContext.Provider>
  );
};
