"use client";

import React from "react";
import { clsx } from "clsx";

export interface TooltipProps {
  /**
   * Konten tooltip
   */
  content: React.ReactNode;
  /**
   * Children element yang akan memicu tooltip
   */
  children: React.ReactNode;
  /**
   * Posisi tooltip
   */
  placement?: "top" | "bottom" | "left" | "right";
  /**
   * Ukuran tooltip
   */
  size?: "sm" | "md" | "lg";
  /**
   * Variant styling
   */
  variant?: "dark" | "light";
  /**
   * Delay sebelum tooltip muncul (ms)
   */
  showDelay?: number;
  /**
   * Delay sebelum tooltip hilang (ms)
   */
  hideDelay?: number;
  /**
   * Apakah tooltip disabled
   */
  disabled?: boolean;
  /**
   * Custom className untuk tooltip
   */
  className?: string;
  /**
   * Custom className untuk arrow
   */
  arrowClassName?: string;
  /**
   * Trigger event
   */
  trigger?: "hover" | "click" | "focus";
  /**
   * Apakah menampilkan arrow
   */
  showArrow?: boolean;
  /**
   * Offset dari target element (px)
   */
  offset?: number;
}

const tooltipVariants = {
  dark: {
    tooltip: "bg-gray-900 text-white border-gray-900",
    arrow: "border-gray-900",
  },
  light: {
    tooltip: "bg-white text-gray-900 border-gray-300 shadow-lg",
    arrow: "border-gray-300",
  },
};

const tooltipSizes = {
  sm: "px-2 py-1 text-xs max-w-xs",
  md: "px-3 py-2 text-sm max-w-sm",
  lg: "px-4 py-3 text-base max-w-md",
};

const placementClasses = {
  top: {
    tooltip: "bottom-full left-1/2 transform -translate-x-1/2",
    arrow:
      "top-full left-1/2 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-transparent",
  },
  bottom: {
    tooltip: "top-full left-1/2 transform -translate-x-1/2",
    arrow:
      "bottom-full left-1/2 transform -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent",
  },
  left: {
    tooltip: "right-full top-1/2 transform -translate-y-1/2",
    arrow:
      "left-full top-1/2 transform -translate-y-1/2 border-l-4 border-t-4 border-b-4 border-transparent",
  },
  right: {
    tooltip: "left-full top-1/2 transform -translate-y-1/2",
    arrow:
      "right-full top-1/2 transform -translate-y-1/2 border-r-4 border-t-4 border-b-4 border-transparent",
  },
};

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      children,
      placement = "top",
      size = "md",
      variant = "dark",
      showDelay = 100,
      hideDelay = 0,
      disabled = false,
      className,
      arrowClassName,
      trigger = "hover",
      showArrow = true,
      offset = 8,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
    const tooltipRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLElement>(null);

    const clearTooltipTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    const showTooltip = () => {
      if (disabled) return;

      clearTooltipTimeout();
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, showDelay);
    };

    const hideTooltip = () => {
      clearTooltipTimeout();
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
    };

    const handleMouseEnter = () => {
      if (trigger === "hover") {
        showTooltip();
      }
    };

    const handleMouseLeave = () => {
      if (trigger === "hover") {
        hideTooltip();
      }
    };

    const handleClick = () => {
      if (trigger === "click") {
        if (isVisible) {
          hideTooltip();
        } else {
          showTooltip();
        }
      }
    };

    const handleFocus = () => {
      if (trigger === "focus") {
        showTooltip();
      }
    };

    const handleBlur = () => {
      if (trigger === "focus") {
        hideTooltip();
      }
    };

    // Calculate position
    const updatePosition = React.useCallback(() => {
      if (!triggerRef.current || !tooltipRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let x = 0;
      let y = 0;

      switch (placement) {
        case "top":
          x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          y = triggerRect.top - tooltipRect.height - offset;
          break;
        case "bottom":
          x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          y = triggerRect.bottom + offset;
          break;
        case "left":
          x = triggerRect.left - tooltipRect.width - offset;
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
        case "right":
          x = triggerRect.right + offset;
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
      }

      // Keep tooltip within viewport
      const padding = 8;
      x = Math.max(
        padding,
        Math.min(x, window.innerWidth - tooltipRect.width - padding)
      );
      y = Math.max(
        padding,
        Math.min(y, window.innerHeight - tooltipRect.height - padding)
      );

      setPosition({ x, y });
    }, [placement, offset]);

    React.useEffect(() => {
      if (isVisible) {
        updatePosition();

        const handleResize = () => updatePosition();
        const handleScroll = () => updatePosition();

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("resize", handleResize);
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, [isVisible, updatePosition]);

    React.useEffect(() => {
      return () => {
        clearTooltipTimeout();
      };
    }, []);

    // Clone children to add event listeners
    const triggerElement = React.cloneElement(children as React.ReactElement, {
      ref: (node: HTMLElement | null) => {
        if (node) {
          triggerRef.current = node;
        }
        const childRef = (children as any).ref;
        if (typeof childRef === "function") {
          childRef(node);
        } else if (childRef && childRef.current !== undefined) {
          childRef.current = node;
        }
      },
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      onFocus: handleFocus,
      onBlur: handleBlur,
      "aria-describedby": isVisible ? "tooltip" : undefined,
    });

    return (
      <>
        {triggerElement}

        {/* Portal-like tooltip */}
        {isVisible && (
          <div
            ref={tooltipRef}
            id="tooltip"
            role="tooltip"
            className={clsx(
              // Base styles
              "fixed z-50 rounded border transition-opacity duration-200 pointer-events-none",

              // Size styles
              tooltipSizes[size],

              // Variant styles
              tooltipVariants[variant].tooltip,

              // Custom className
              className
            )}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
            {...props}
          >
            {content}

            {showArrow && (
              <div
                className={clsx(
                  "absolute w-0 h-0",
                  placementClasses[placement].arrow,
                  tooltipVariants[variant].arrow,
                  arrowClassName
                )}
              />
            )}
          </div>
        )}
      </>
    );
  }
);

Tooltip.displayName = "Tooltip";
