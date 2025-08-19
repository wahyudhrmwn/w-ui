import React from "react";
import { clsx } from "clsx";

export interface SliderProps {
  /**
   * Nilai slider
   */
  value: number | number[];
  /**
   * Callback ketika nilai berubah
   */
  onChange: (value: number | number[]) => void;
  /**
   * Nilai minimum
   */
  min?: number;
  /**
   * Nilai maksimum
   */
  max?: number;
  /**
   * Step increment
   */
  step?: number;
  /**
   * Label untuk slider
   */
  label?: string;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Ukuran slider
   */
  size?: "sm" | "md" | "lg";
  /**
   * Warna slider
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Apakah disabled
   */
  disabled?: boolean;
  /**
   * Apakah menampilkan tooltip value
   */
  showTooltip?: boolean;
  /**
   * Apakah menampilkan marks
   */
  showMarks?: boolean;
  /**
   * Custom marks
   */
  marks?: { value: number; label?: string }[];
  /**
   * Format untuk tooltip/display value
   */
  formatValue?: (value: number) => string;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Orientasi slider
   */
  orientation?: "horizontal" | "vertical";
}

const sliderSizes = {
  sm: {
    track: "h-1",
    thumb: "w-4 h-4",
    label: "text-sm",
    marks: "text-xs",
  },
  md: {
    track: "h-2",
    thumb: "w-5 h-5",
    label: "text-base",
    marks: "text-sm",
  },
  lg: {
    track: "h-3",
    thumb: "w-6 h-6",
    label: "text-lg",
    marks: "text-base",
  },
};

const sliderColors = {
  primary: {
    track: "bg-primary-600",
    thumb:
      "bg-primary-600 border-primary-600 hover:bg-primary-700 focus:ring-primary-500",
    tooltip: "bg-primary-600",
  },
  secondary: {
    track: "bg-secondary-600",
    thumb:
      "bg-secondary-600 border-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500",
    tooltip: "bg-secondary-600",
  },
  success: {
    track: "bg-green-600",
    thumb:
      "bg-green-600 border-green-600 hover:bg-green-700 focus:ring-green-500",
    tooltip: "bg-green-600",
  },
  warning: {
    track: "bg-yellow-500",
    thumb:
      "bg-yellow-500 border-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500",
    tooltip: "bg-yellow-500",
  },
  error: {
    track: "bg-red-600",
    thumb: "bg-red-600 border-red-600 hover:bg-red-700 focus:ring-red-500",
    tooltip: "bg-red-600",
  },
};

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value,
      onChange,
      min = 0,
      max = 100,
      step = 1,
      label,
      helperText,
      error,
      size = "md",
      color = "primary",
      disabled = false,
      showTooltip = false,
      showMarks = false,
      marks,
      formatValue,
      className,
      orientation = "horizontal",
      ...props
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragIndex, setDragIndex] = React.useState<number | null>(null);
    const sliderRef = React.useRef<HTMLDivElement>(null);

    const isRange = Array.isArray(value);
    const values = isRange ? value : [value];

    // Calculate percentage for positioning
    const getPercentage = (val: number) => {
      return ((val - min) / (max - min)) * 100;
    };

    // Get value from position
    const getValueFromPosition = (clientX: number, clientY: number) => {
      if (!sliderRef.current) return min;

      const rect = sliderRef.current.getBoundingClientRect();
      let percentage: number;

      if (orientation === "horizontal") {
        percentage = ((clientX - rect.left) / rect.width) * 100;
      } else {
        percentage = ((rect.bottom - clientY) / rect.height) * 100;
      }

      percentage = Math.max(0, Math.min(100, percentage));
      const rawValue = min + (percentage / 100) * (max - min);

      // Snap to step
      const steppedValue = Math.round(rawValue / step) * step;
      return Math.max(min, Math.min(max, steppedValue));
    };

    // Handle mouse/touch events
    const handlePointerDown =
      (index: number) => (event: React.PointerEvent) => {
        if (disabled) return;

        event.preventDefault();
        setIsDragging(true);
        setDragIndex(index);

        const handlePointerMove = (e: PointerEvent) => {
          e.preventDefault();
          const newValue = getValueFromPosition(e.clientX, e.clientY);

          // Throttle untuk smoother performance saat dragging cepat
          if (isRange) {
            const newValues = [...values];
            newValues[index] = newValue;

            // Ensure range values don't cross over
            if (index === 0 && newValue > values[1]) {
              newValues[1] = newValue;
            } else if (index === 1 && newValue < values[0]) {
              newValues[0] = newValue;
            }

            onChange(newValues);
          } else {
            onChange(newValue);
          }
        };

        const handlePointerUp = () => {
          setIsDragging(false);
          setDragIndex(null);
          document.removeEventListener("pointermove", handlePointerMove);
          document.removeEventListener("pointerup", handlePointerUp);
        };

        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp);
      };

    // Handle track click
    const handleTrackClick = (event: React.MouseEvent) => {
      if (disabled || isDragging) return;

      const newValue = getValueFromPosition(event.clientX, event.clientY);

      if (isRange) {
        // Find closest thumb to move
        const distances = values.map((v) => Math.abs(v - newValue));
        const closestIndex = distances.indexOf(Math.min(...distances));

        const newValues = [...values];
        newValues[closestIndex] = newValue;
        onChange(newValues);
      } else {
        onChange(newValue);
      }
    };

    // Generate default marks
    const defaultMarks: { value: number; label?: string }[] = showMarks
      ? Array.from({ length: Math.floor((max - min) / step) + 1 }, (_, i) => ({
          value: min + i * step,
        }))
      : [];

    const allMarks = marks || defaultMarks;

    const renderThumb = (val: number, index: number) => (
      <div
        key={index}
        className={clsx(
          // Base styles
          "absolute rounded-full border-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 z-10",
          // Smooth transitions
          "transition-transform duration-300 ease-out",
          "transform -translate-x-1/2 -translate-y-1/2",

          // Size styles
          sliderSizes[size].thumb,

          // Color styles
          sliderColors[color].thumb,

          // Disabled styles
          disabled && "cursor-not-allowed opacity-50",

          // Active state
          isDragging &&
            dragIndex === index &&
            "scale-110 shadow-lg transition-transform duration-150 ease-out"
        )}
        style={{
          left: orientation === "horizontal" ? `${getPercentage(val)}%` : "50%",
          bottom: orientation === "vertical" ? `${getPercentage(val)}%` : "50%",
          top: orientation === "horizontal" ? "50%" : "auto",
        }}
        onPointerDown={handlePointerDown(index)}
        tabIndex={disabled ? -1 : 0}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={val}
        aria-label={`Slider thumb ${index + 1}`}
        onKeyDown={(e) => {
          if (disabled) return;

          let newValue = val;
          switch (e.key) {
            case "ArrowUp":
            case "ArrowRight":
              newValue = Math.min(max, val + step);
              break;
            case "ArrowDown":
            case "ArrowLeft":
              newValue = Math.max(min, val - step);
              break;
            case "Home":
              newValue = min;
              break;
            case "End":
              newValue = max;
              break;
            default:
              return;
          }

          e.preventDefault();

          if (isRange) {
            const newValues = [...values];
            newValues[index] = newValue;
            onChange(newValues);
          } else {
            onChange(newValue);
          }
        }}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div
            className={clsx(
              "absolute bottom-full mb-2 px-2 py-1 text-xs text-white rounded whitespace-nowrap transform -translate-x-1/2 left-1/2",
              sliderColors[color].tooltip
            )}
          >
            {formatValue ? formatValue(val) : val}
            <div
              className={clsx(
                "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent",
                `border-t-${color}-600`
              )}
              style={{ borderTopColor: `var(--color-${color}-600)` }}
            />
          </div>
        )}
      </div>
    );

    const renderMarks = () => {
      if (!showMarks && !marks) return null;

      return (
        <div className="absolute inset-0">
          {allMarks.map((mark, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left:
                  orientation === "horizontal"
                    ? `${getPercentage(mark.value)}%`
                    : "50%",
                bottom:
                  orientation === "vertical"
                    ? `${getPercentage(mark.value)}%`
                    : "0",
                transform:
                  orientation === "horizontal"
                    ? "translateX(-50%)"
                    : "translateX(-50%)",
              }}
            >
              {/* Mark dot */}
              <div
                className={clsx(
                  "w-2 h-2 rounded-full bg-secondary-400 transform",
                  orientation === "horizontal"
                    ? "-translate-x-1/2"
                    : "-translate-x-1/2 -translate-y-1/2"
                )}
                style={{
                  [orientation === "horizontal" ? "top" : "left"]:
                    orientation === "horizontal" ? "50%" : "50%",
                }}
              />

              {/* Mark label */}
              {mark.label && (
                <div
                  className={clsx(
                    "absolute whitespace-nowrap text-secondary-600 mt-4 transform -translate-x-1/2",
                    sliderSizes[size].marks
                  )}
                  style={{
                    top: orientation === "horizontal" ? "100%" : "50%",
                    left: "50%",
                  }}
                >
                  {mark.label}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    };

    const fillWidth = isRange
      ? getPercentage(Math.max(...values)) - getPercentage(Math.min(...values))
      : getPercentage(values[0]);

    const fillOffset = isRange ? getPercentage(Math.min(...values)) : 0;

    return (
      <div ref={ref} className={clsx("slider w-full", className)} {...props}>
        {/* Label */}
        {label && (
          <label
            className={clsx(
              "block font-medium text-secondary-700 mb-2",
              sliderSizes[size].label
            )}
          >
            {label}
          </label>
        )}

        {/* Slider container */}
        <div
          className={clsx(
            "relative flex items-center py-4",
            orientation === "vertical" && "h-48 w-8 flex-col justify-center"
          )}
        >
          {/* Track */}
          <div
            ref={sliderRef}
            className={clsx(
              // Base styles
              "relative bg-secondary-200 rounded-full cursor-pointer",

              // Size and orientation
              orientation === "horizontal"
                ? clsx("w-full", sliderSizes[size].track)
                : clsx("h-full w-2"),

              // Disabled styles
              disabled && "cursor-not-allowed opacity-50"
            )}
            onClick={handleTrackClick}
          >
            {/* Fill */}
            <div
              className={clsx(
                "absolute rounded-full transition-all duration-300 ease-out",
                sliderColors[color].track,
                orientation === "horizontal"
                  ? sliderSizes[size].track
                  : "w-full"
              )}
              style={{
                [orientation === "horizontal"
                  ? "width"
                  : "height"]: `${fillWidth}%`,
                [orientation === "horizontal"
                  ? "left"
                  : "bottom"]: `${fillOffset}%`,
                top: orientation === "horizontal" ? "50%" : "auto",
                transform:
                  orientation === "horizontal" ? "translateY(-50%)" : "none",
              }}
            />

            {/* Marks */}
            {renderMarks()}

            {/* Thumbs */}
            {values.map(renderThumb)}
          </div>
        </div>

        {/* Helper text or error */}
        {(helperText || error) && (
          <p
            className={clsx(
              "mt-1 text-sm",
              error ? "text-red-600" : "text-secondary-600"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Slider.displayName = "Slider";
