import React from "react";
import { clsx } from "clsx";

export interface DrawerProps {
  /**
   * Apakah drawer terbuka
   */
  isOpen: boolean;
  /**
   * Callback ketika drawer ditutup
   */
  onClose: () => void;
  /**
   * Posisi drawer
   */
  placement?: "left" | "right" | "top" | "bottom";
  /**
   * Ukuran drawer
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  /**
   * Custom width/height (override size)
   */
  width?: string | number;
  /**
   * Custom height (untuk top/bottom placement)
   */
  height?: string | number;
  /**
   * Title drawer
   */
  title?: string;
  /**
   * Children content
   */
  children?: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * Apakah menampilkan close button (X)
   */
  showCloseButton?: boolean;
  /**
   * Apakah drawer bisa ditutup dengan overlay click
   */
  closeOnOverlayClick?: boolean;
  /**
   * Apakah drawer bisa ditutup dengan ESC key
   */
  closeOnEscapeKey?: boolean;
  /**
   * Mode drawer (overlay atau push content)
   */
  mode?: "overlay" | "push";
  /**
   * Custom className untuk drawer
   */
  className?: string;
  /**
   * Custom className untuk overlay
   */
  overlayClassName?: string;
  /**
   * Custom className untuk header
   */
  headerClassName?: string;
  /**
   * Custom className untuk body
   */
  bodyClassName?: string;
  /**
   * Custom className untuk footer
   */
  footerClassName?: string;
  /**
   * Z-index untuk drawer
   */
  zIndex?: number;
}

const drawerSizes = {
  xs: "256px", // 16rem
  sm: "320px", // 20rem
  md: "384px", // 24rem
  lg: "512px", // 32rem
  xl: "768px", // 48rem
  full: "100%",
};

const drawerHeights = {
  xs: "160px", // 10rem
  sm: "240px", // 15rem
  md: "320px", // 20rem
  lg: "480px", // 30rem
  xl: "640px", // 40rem
  full: "100%",
};

const getDrawerClasses = (placement: string, isOpen: boolean) => {
  const baseClasses =
    "fixed bg-white shadow-xl transition-transform duration-300 ease-in-out";

  switch (placement) {
    case "left":
      return clsx(
        baseClasses,
        "top-0 left-0 h-full border-r border-secondary-200",
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      );
    case "right":
      return clsx(
        baseClasses,
        "top-0 right-0 h-full border-l border-secondary-200",
        isOpen ? "transform translate-x-0" : "transform translate-x-full"
      );
    case "top":
      return clsx(
        baseClasses,
        "top-0 left-0 w-full border-b border-secondary-200",
        isOpen ? "transform translate-y-0" : "transform -translate-y-full"
      );
    case "bottom":
      return clsx(
        baseClasses,
        "bottom-0 left-0 w-full border-t border-secondary-200",
        isOpen ? "transform translate-y-0" : "transform translate-y-full"
      );
    default:
      return baseClasses;
  }
};

const getDrawerSize = (
  placement: string,
  size: string,
  customWidth?: string | number,
  customHeight?: string | number
) => {
  if (placement === "top" || placement === "bottom") {
    if (customHeight) {
      return {
        height:
          typeof customHeight === "number" ? `${customHeight}px` : customHeight,
      };
    }
    return { height: drawerHeights[size as keyof typeof drawerHeights] };
  } else {
    if (customWidth) {
      return {
        width:
          typeof customWidth === "number" ? `${customWidth}px` : customWidth,
      };
    }
    return { width: drawerSizes[size as keyof typeof drawerSizes] };
  }
};

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

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      placement = "right",
      size = "md",
      width,
      height,
      title,
      children,
      footer,
      showCloseButton = true,
      closeOnOverlayClick = true,
      closeOnEscapeKey = true,
      mode = "overlay",
      className,
      overlayClassName,
      headerClassName,
      bodyClassName,
      footerClassName,
      zIndex = 1000,
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
        if (mode === "overlay") {
          document.body.style.overflow = "hidden";
        }

        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          if (mode === "overlay") {
            document.body.style.overflow = "unset";
          }
        };
      }
    }, [isOpen, closeOnEscapeKey, onClose, mode]);

    // Push mode effect
    React.useEffect(() => {
      if (mode === "push" && isOpen) {
        const body = document.body;
        const pushDistance = drawerSizes[size as keyof typeof drawerSizes];

        if (placement === "left") {
          body.style.transform = `translateX(${pushDistance})`;
        } else if (placement === "right") {
          body.style.transform = `translateX(-${pushDistance})`;
        } else if (placement === "top") {
          body.style.transform = `translateY(${
            drawerHeights[size as keyof typeof drawerHeights]
          })`;
        } else if (placement === "bottom") {
          body.style.transform = `translateY(-${
            drawerHeights[size as keyof typeof drawerHeights]
          })`;
        }

        body.style.transition = "transform 300ms ease-in-out";

        return () => {
          body.style.transform = "";
          body.style.transition = "";
        };
      }
    }, [isOpen, mode, size, placement]);

    if (!isOpen && mode === "overlay") return null;

    const drawerStyle = {
      ...getDrawerSize(placement, size, width, height),
      zIndex,
    };

    return (
      <div className="fixed inset-0" style={{ zIndex }}>
        {/* Overlay */}
        {mode === "overlay" && (
          <div
            className={clsx(
              "fixed inset-0 bg-black transition-opacity duration-300",
              isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none",
              overlayClassName
            )}
            onClick={closeOnOverlayClick ? onClose : undefined}
          />
        )}

        {/* Drawer */}
        <div
          ref={ref}
          className={clsx(getDrawerClasses(placement, isOpen), className)}
          style={drawerStyle}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div
              className={clsx(
                "flex items-center justify-between px-6 py-4 border-b border-secondary-200",
                headerClassName
              )}
            >
              {/* Title */}
              {title && (
                <h2 className="text-lg font-semibold text-secondary-900">
                  {title}
                </h2>
              )}

              {/* Close button */}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="text-secondary-400 hover:text-secondary-600 transition-colors p-1"
                  aria-label="Close drawer"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div
            className={clsx(
              "flex-1 overflow-auto",
              (title || showCloseButton) && footer
                ? "h-[calc(100%-8rem)]"
                : title || showCloseButton
                ? "h-[calc(100%-4rem)]"
                : footer
                ? "h-[calc(100%-4rem)]"
                : "h-full",
              bodyClassName
            )}
          >
            <div className="p-6">{children}</div>
          </div>

          {/* Footer */}
          {footer && (
            <div
              className={clsx(
                "px-6 py-4 border-t border-secondary-200 bg-secondary-50",
                footerClassName
              )}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Drawer.displayName = "Drawer";
