import React, { useState, useEffect, useCallback, useRef } from "react";
import clsx from "clsx";

export interface BackTopProps {
  // Visibility
  visibilityHeight?: number;

  // Positioning
  right?: number;
  bottom?: number;

  // Behavior
  smooth?: boolean;
  duration?: number;
  target?: () => HTMLElement | Window | Document;
  onClick?: () => void;

  // Styling
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";

  // Content
  children?: React.ReactNode;
  icon?: React.ReactNode;
  text?: string;
  showText?: boolean;

  className?: string;
  style?: React.CSSProperties;
}

const backTopSizes = {
  sm: {
    button: "w-10 h-10",
    icon: "w-4 h-4",
    text: "text-xs",
    withText: "px-3 py-2",
  },
  md: {
    button: "w-12 h-12",
    icon: "w-5 h-5",
    text: "text-sm",
    withText: "px-4 py-3",
  },
  lg: {
    button: "w-14 h-14",
    icon: "w-6 h-6",
    text: "text-base",
    withText: "px-5 py-4",
  },
};

const DefaultIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);

const easeInOutQuart = (t: number): number => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};

export const BackTop: React.FC<BackTopProps> = ({
  visibilityHeight = 400,
  right = 24,
  bottom = 24,
  smooth = true,
  duration = 450,
  target,
  onClick,
  size = "md",
  shape = "circle",
  children,
  icon,
  text,
  showText = false,
  className,
  style,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const animationRef = useRef<number | null>(null);
  const sizeClasses = backTopSizes[size];

  // Get scroll container
  const getTarget = useCallback(() => {
    if (target) {
      const targetElement = target();
      return targetElement === window || targetElement === document
        ? window
        : (targetElement as HTMLElement);
    }
    return window;
  }, [target]);

  // Get scroll position
  const getScrollTop = useCallback((element: HTMLElement | Window) => {
    if (element === window) {
      return document.documentElement.scrollTop || document.body.scrollTop;
    }
    return (element as HTMLElement).scrollTop;
  }, []);

  // Handle scroll to top
  const scrollToTop = useCallback(() => {
    if (scrolling) return;

    setScrolling(true);
    const targetElement = getTarget();
    const startScrollTop = getScrollTop(targetElement);
    const startTime = Date.now();

    const scroll = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      let easedProgress = progress;
      if (smooth) {
        easedProgress = easeInOutQuart(progress);
      }

      const currentScrollTop = startScrollTop * (1 - easedProgress);

      if (targetElement === window) {
        window.scrollTo(0, currentScrollTop);
      } else {
        (targetElement as HTMLElement).scrollTop = currentScrollTop;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(scroll);
      } else {
        setScrolling(false);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(scroll);
  }, [scrolling, getTarget, getScrollTop, duration, smooth]);

  // Handle click
  const handleClick = useCallback(() => {
    scrollToTop();
    onClick?.();
  }, [scrollToTop, onClick]);

  // Handle scroll visibility
  const handleScroll = useCallback(() => {
    const targetElement = getTarget();
    const scrollTop = getScrollTop(targetElement);

    setVisible(scrollTop >= visibilityHeight);
  }, [getTarget, getScrollTop, visibilityHeight]);

  // Set up scroll listener
  useEffect(() => {
    const targetElement = getTarget();

    // Initial check
    handleScroll();

    // Add listener
    if (targetElement === window) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      (targetElement as HTMLElement).addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    return () => {
      if (targetElement === window) {
        window.removeEventListener("scroll", handleScroll);
      } else {
        (targetElement as HTMLElement).removeEventListener(
          "scroll",
          handleScroll
        );
      }

      // Cancel animation if component unmounts
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [getTarget, handleScroll]);

  // Don't render if not visible
  if (!visible) return null;

  const hasText = showText && text;
  const displayIcon = icon || <DefaultIcon className={sizeClasses.icon} />;

  const buttonClasses = clsx(
    "fixed z-50 bg-secondary-900 text-white shadow-lg hover:bg-secondary-800 transition-all duration-200 hover:shadow-xl active:scale-95",
    "flex items-center justify-center cursor-pointer select-none",
    {
      "rounded-full": shape === "circle",
      "rounded-lg": shape === "square",
      [sizeClasses.button]: !hasText,
      [sizeClasses.withText]: hasText,
      "space-x-2": hasText,
    },
    className
  );

  const containerStyle: React.CSSProperties = {
    right: `${right}px`,
    bottom: `${bottom}px`,
    opacity: visible ? 1 : 0,
    transform: `translateY(${visible ? 0 : 10}px)`,
    ...style,
  };

  return (
    <div
      className={buttonClasses}
      style={containerStyle}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={text || "Back to top"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      {...props}
    >
      {children || (
        <>
          {displayIcon}
          {hasText && <span className={sizeClasses.text}>{text}</span>}
        </>
      )}
    </div>
  );
};
