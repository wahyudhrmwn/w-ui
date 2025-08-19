import React from "react";
import { clsx } from "clsx";

export interface PopoverProps {
  /**
   * Konten yang akan di-trigger popover
   */
  children: React.ReactNode;
  /**
   * Konten popover
   */
  content: React.ReactNode;
  /**
   * Title popover (opsional)
   */
  title?: React.ReactNode;
  /**
   * Posisi popover
   */
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  /**
   * Trigger event
   */
  trigger?: "click" | "hover" | "focus" | "contextMenu";
  /**
   * Apakah popover visible (controlled)
   */
  visible?: boolean;
  /**
   * Default visible state (uncontrolled)
   */
  defaultVisible?: boolean;
  /**
   * Callback ketika visibility berubah
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * Apakah menampilkan arrow
   */
  showArrow?: boolean;
  /**
   * Apakah menampilkan close button
   */
  showCloseButton?: boolean;
  /**
   * Lebar popover
   */
  width?: number | string;
  /**
   * Custom className untuk popover
   */
  overlayClassName?: string;
  /**
   * Z-index untuk popover
   */
  zIndex?: number;
  /**
   * Apakah disabled
   */
  disabled?: boolean;
  /**
   * Delay untuk show/hide (ms)
   */
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  /**
   * Callback ketika popover ditutup dengan tombol close
   */
  onClose?: () => void;
}

const placementStyles = {
  top: {
    transform: "translate(-50%, calc(-100% - 8px))",
    left: "50%",
    bottom: "100%",
  },
  bottom: {
    transform: "translate(-50%, 8px)",
    left: "50%",
    top: "100%",
  },
  left: {
    transform: "translate(calc(-100% - 8px), -50%)",
    right: "100%",
    top: "50%",
  },
  right: {
    transform: "translate(8px, -50%)",
    left: "100%",
    top: "50%",
  },
  topLeft: {
    transform: "translate(0%, calc(-100% - 8px))",
    left: "0%",
    bottom: "100%",
  },
  topRight: {
    transform: "translate(-100%, calc(-100% - 8px))",
    right: "0%",
    bottom: "100%",
  },
  bottomLeft: {
    transform: "translate(0%, 8px)",
    left: "0%",
    top: "100%",
  },
  bottomRight: {
    transform: "translate(-100%, 8px)",
    right: "0%",
    top: "100%",
  },
};

const arrowStyles = {
  top: {
    bottom: "-6px",
    left: "50%",
    transform: "translateX(-50%) rotate(45deg)",
    zIndex: 1,
  },
  bottom: {
    top: "-6px",
    left: "50%",
    transform: "translateX(-50%) rotate(45deg)",
    zIndex: 1,
  },
  left: {
    right: "-6px",
    top: "50%",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 1,
  },
  right: {
    left: "-6px",
    top: "50%",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 1,
  },
  topLeft: {
    bottom: "-6px",
    left: "16px",
    transform: "rotate(45deg)",
    zIndex: 1,
  },
  topRight: {
    bottom: "-6px",
    right: "16px",
    transform: "rotate(45deg)",
    zIndex: 1,
  },
  bottomLeft: {
    top: "-6px",
    left: "16px",
    transform: "rotate(45deg)",
    zIndex: 1,
  },
  bottomRight: {
    top: "-6px",
    right: "16px",
    transform: "rotate(45deg)",
    zIndex: 1,
  },
};

const CloseIcon = () => (
  <svg
    className="w-4 h-4"
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

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      content,
      title,
      placement = "top",
      trigger = "click",
      visible: controlledVisible,
      defaultVisible = false,
      onVisibleChange,
      showArrow = true,
      showCloseButton = false,
      width = "auto",
      overlayClassName,
      zIndex = 1000,
      disabled = false,
      mouseEnterDelay = 100,
      mouseLeaveDelay = 100,
      onClose,
      ...props
    },
    ref
  ) => {
    const [internalVisible, setInternalVisible] =
      React.useState(defaultVisible);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const popoverRef = React.useRef<HTMLDivElement>(null);
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const isControlled = controlledVisible !== undefined;
    const isVisible = isControlled ? controlledVisible : internalVisible;

    const updateVisibility = (visible: boolean) => {
      if (!isControlled) {
        setInternalVisible(visible);
      }
      onVisibleChange?.(visible);
    };

    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          isVisible &&
          trigger === "click" &&
          triggerRef.current &&
          popoverRef.current &&
          !triggerRef.current.contains(event.target as Node) &&
          !popoverRef.current.contains(event.target as Node)
        ) {
          updateVisibility(false);
        }
      };

      if (isVisible) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    }, [isVisible, trigger]);

    // Handle escape key
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isVisible) {
          updateVisibility(false);
        }
      };

      if (isVisible) {
        document.addEventListener("keydown", handleEscape);
        return () => {
          document.removeEventListener("keydown", handleEscape);
        };
      }
    }, [isVisible]);

    const handleMouseEnter = () => {
      if (disabled || trigger !== "hover") return;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        updateVisibility(true);
      }, mouseEnterDelay);
    };

    const handleMouseLeave = () => {
      if (disabled || trigger !== "hover") return;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        updateVisibility(false);
      }, mouseLeaveDelay);
    };

    const handleClick = (event: React.MouseEvent) => {
      if (disabled) return;

      if (trigger === "click") {
        event.preventDefault();
        updateVisibility(!isVisible);
      }
    };

    const handleContextMenu = (event: React.MouseEvent) => {
      if (disabled || trigger !== "contextMenu") return;

      event.preventDefault();
      setPosition({ x: event.clientX, y: event.clientY });
      updateVisibility(true);
    };

    const handleFocus = () => {
      if (disabled || trigger !== "focus") return;
      updateVisibility(true);
    };

    const handleBlur = () => {
      if (disabled || trigger !== "focus") return;
      updateVisibility(false);
    };

    const handleClose = () => {
      updateVisibility(false);
      onClose?.();
    };

    const getPopoverStyle = () => {
      if (trigger === "contextMenu" && position.x && position.y) {
        return {
          position: "fixed" as const,
          left: position.x,
          top: position.y,
          zIndex,
          width,
        };
      }

      return {
        ...placementStyles[placement],
        zIndex,
        width,
      };
    };

    return (
      <>
        {/* Trigger element */}
        <div
          ref={triggerRef}
          className="inline-block"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onContextMenu={handleContextMenu}
        >
          {children}
        </div>

        {/* Popover content */}
        {isVisible && !disabled && (
          <div className="relative">
            <div
              ref={popoverRef}
              className={clsx(
                "absolute bg-white border border-secondary-200/80 rounded-lg",
                "shadow-lg shadow-secondary-900/10",
                "animate-in fade-in-0 zoom-in-95 duration-200 ease-out",
                "min-w-32 max-w-sm", // Better responsive sizing
                "z-50", // Ensure proper stacking
                trigger === "contextMenu" ? "fixed" : "absolute",
                overlayClassName
              )}
              style={{ ...getPopoverStyle(), zIndex }}
              {...props}
            >
              {/* Arrow */}
              {showArrow && trigger !== "contextMenu" && (
                <div
                  className="absolute w-3 h-3 bg-white border border-secondary-200/80"
                  style={{
                    ...arrowStyles[placement],
                    borderWidth: placement.includes("top")
                      ? "0 1px 1px 0"
                      : placement.includes("bottom")
                      ? "1px 0 0 1px"
                      : placement.includes("left")
                      ? "1px 1px 0 0"
                      : "0 0 1px 1px",
                    filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))",
                  }}
                />
              )}

              {/* Header */}
              {(title || showCloseButton) && (
                <div className="flex items-center justify-between px-4 py-3 border-b border-secondary-100 bg-secondary-50/40 rounded-t-lg backdrop-blur-sm">
                  {title && (
                    <div className="text-sm font-semibold text-secondary-900 truncate">
                      {title}
                    </div>
                  )}
                  {showCloseButton && (
                    <button
                      onClick={handleClose}
                      className="text-secondary-400 hover:text-secondary-600 transition-all duration-150 p-1.5 ml-2 rounded hover:bg-secondary-100 flex-shrink-0 hover:scale-105"
                      aria-label="Close popover"
                    >
                      <CloseIcon />
                    </button>
                  )}
                </div>
              )}

              {/* Content */}
              <div
                className={clsx(
                  "p-4",
                  title || showCloseButton ? "rounded-b-lg" : "rounded-lg",
                  "text-sm text-secondary-700 leading-relaxed",
                  "relative z-10" // Ensure content stays above arrow
                )}
              >
                {content}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

Popover.displayName = "Popover";
