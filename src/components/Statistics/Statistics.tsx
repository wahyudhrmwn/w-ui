import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

export interface StatisticsProps {
  // Data
  value: number;
  title?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  description?: React.ReactNode;

  // Formatting
  precision?: number;
  formatter?: (value: number) => string;

  // Animation
  animated?: boolean;
  animationDuration?: number;
  animationDelay?: number;

  // Trend
  trend?: "up" | "down" | "stable";
  trendValue?: number;
  trendText?: string;

  // Styling
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "success" | "warning" | "error" | "info";
  layout?: "vertical" | "horizontal";

  // Extra content
  extra?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
}

const statisticsSizes = {
  sm: {
    value: "text-lg font-semibold",
    title: "text-xs font-medium",
    description: "text-xs",
    trend: "text-xs",
    container: "p-3",
  },
  md: {
    value: "text-2xl font-bold",
    title: "text-sm font-medium",
    description: "text-sm",
    trend: "text-sm",
    container: "p-4",
  },
  lg: {
    value: "text-4xl font-bold",
    title: "text-base font-semibold",
    description: "text-base",
    trend: "text-base",
    container: "p-6",
  },
};

const colorStyles = {
  default: {
    value: "text-secondary-900",
    title: "text-secondary-600",
    description: "text-secondary-500",
    container: "bg-white border-secondary-200",
  },
  primary: {
    value: "text-primary-700",
    title: "text-primary-600",
    description: "text-primary-500",
    container: "bg-primary-50 border-primary-200",
  },
  success: {
    value: "text-green-700",
    title: "text-green-600",
    description: "text-green-500",
    container: "bg-green-50 border-green-200",
  },
  warning: {
    value: "text-yellow-700",
    title: "text-yellow-600",
    description: "text-yellow-500",
    container: "bg-yellow-50 border-yellow-200",
  },
  error: {
    value: "text-red-700",
    title: "text-red-600",
    description: "text-red-500",
    container: "bg-red-50 border-red-200",
  },
  info: {
    value: "text-blue-700",
    title: "text-blue-600",
    description: "text-blue-500",
    container: "bg-blue-50 border-blue-200",
  },
};

const trendColors = {
  up: "text-green-600",
  down: "text-red-600",
  stable: "text-secondary-500",
};

const TrendIcon: React.FC<{
  trend: "up" | "down" | "stable";
  className?: string;
}> = ({ trend, className }) => {
  const icons = {
    up: (
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    down: (
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
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
    ),
    stable: (
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
          d="M20 12H4"
        />
      </svg>
    ),
  };

  return icons[trend];
};

// Custom hook for animated counting
const useCountUp = (
  endValue: number,
  duration: number,
  delay: number,
  enabled: boolean
): number => {
  const [currentValue, setCurrentValue] = useState(enabled ? 0 : endValue);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const startValueRef = useRef(enabled ? 0 : endValue);

  useEffect(() => {
    if (!enabled) {
      setCurrentValue(endValue);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp + delay;
        startValueRef.current = currentValue;
      }

      if (timestamp < startTimeRef.current) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newValue =
        startValueRef.current + (endValue - startValueRef.current) * easeOut;

      setCurrentValue(newValue);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    setCurrentValue(enabled ? 0 : endValue);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [endValue, duration, delay, enabled]);

  // Reset refs when endValue changes
  useEffect(() => {
    startTimeRef.current = undefined;
  }, [endValue]);

  return currentValue;
};

// Default number formatter
const defaultFormatter = (value: number, precision: number = 0): string => {
  if (Math.abs(value) >= 1000000000) {
    return (value / 1000000000).toFixed(precision) + "B";
  } else if (Math.abs(value) >= 1000000) {
    return (value / 1000000).toFixed(precision) + "M";
  } else if (Math.abs(value) >= 1000) {
    return (value / 1000).toFixed(precision) + "K";
  }
  return value.toFixed(precision);
};

export const Statistics: React.FC<StatisticsProps> = ({
  value,
  title,
  prefix,
  suffix,
  description,
  precision = 0,
  formatter,
  animated = false,
  animationDuration = 2000,
  animationDelay = 0,
  trend,
  trendValue,
  trendText,
  size = "md",
  color = "default",
  layout = "vertical",
  extra,
  className,
  style,
  ...props
}) => {
  const animatedValue = useCountUp(
    value,
    animationDuration,
    animationDelay,
    animated
  );
  const displayValue = animated ? animatedValue : value;

  const sizeClasses = statisticsSizes[size];
  const colorClasses = colorStyles[color];

  // Format the display value
  const formattedValue = React.useMemo(() => {
    if (formatter) {
      return formatter(displayValue);
    }
    return defaultFormatter(displayValue, precision);
  }, [displayValue, formatter, precision]);

  const containerClasses = clsx(
    "rounded-lg border transition-all duration-200 hover:shadow-md",
    sizeClasses.container,
    colorClasses.container,
    {
      "flex items-center space-x-4": layout === "horizontal",
      "space-y-2": layout === "vertical",
    },
    className
  );

  const renderTrend = () => {
    if (!trend) return null;

    const trendClass = trendColors[trend];
    const iconSize =
      size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-5 h-5";

    return (
      <div
        className={clsx(
          "flex items-center space-x-1",
          sizeClasses.trend,
          trendClass
        )}
      >
        <TrendIcon trend={trend} className={iconSize} />
        {trendValue !== undefined && (
          <span>
            {trend === "up" ? "+" : trend === "down" ? "-" : ""}
            {Math.abs(trendValue)}%
          </span>
        )}
        {trendText && <span>{trendText}</span>}
      </div>
    );
  };

  const renderValue = () => (
    <div
      className={clsx(
        "flex items-baseline space-x-1",
        sizeClasses.value,
        colorClasses.value
      )}
    >
      {prefix && <span className="flex-shrink-0">{prefix}</span>}
      <span className="font-mono tabular-nums">{formattedValue}</span>
      {suffix && <span className="flex-shrink-0">{suffix}</span>}
    </div>
  );

  const renderContent = () => (
    <>
      {/* Title */}
      {title && (
        <div
          className={clsx(
            sizeClasses.title,
            colorClasses.title,
            "leading-tight"
          )}
        >
          {title}
        </div>
      )}

      {/* Value */}
      {renderValue()}

      {/* Trend */}
      {renderTrend()}

      {/* Description */}
      {description && (
        <div
          className={clsx(
            sizeClasses.description,
            colorClasses.description,
            "leading-relaxed"
          )}
        >
          {description}
        </div>
      )}
    </>
  );

  return (
    <div className={containerClasses} style={style} {...props}>
      {layout === "horizontal" ? (
        <>
          <div className="flex-1 space-y-1">{renderContent()}</div>
          {extra && <div className="flex-shrink-0">{extra}</div>}
        </>
      ) : (
        <>
          {renderContent()}
          {extra && <div className="mt-4">{extra}</div>}
        </>
      )}
    </div>
  );
};
