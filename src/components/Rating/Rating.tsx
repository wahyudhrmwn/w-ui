import React from "react";
import { clsx } from "clsx";

export interface RatingProps {
  /**
   * Nilai rating saat ini
   */
  value?: number;
  /**
   * Nilai default rating
   */
  defaultValue?: number;
  /**
   * Jumlah total star/icon
   */
  count?: number;
  /**
   * Apakah mendukung half rating
   */
  allowHalf?: boolean;
  /**
   * Apakah rating bisa diubah (interactive)
   */
  allowClear?: boolean;
  /**
   * Apakah dalam mode read-only
   */
  disabled?: boolean;
  /**
   * Ukuran rating
   */
  size?: "sm" | "md" | "lg";
  /**
   * Warna rating
   */
  color?: "yellow" | "red" | "blue" | "green" | "purple";
  /**
   * Custom className
   */
  className?: string;
  /**
   * Callback ketika rating berubah
   */
  onChange?: (value: number) => void;
  /**
   * Callback ketika rating di-hover
   */
  onHover?: (value: number) => void;
  /**
   * Custom icon untuk rating
   */
  character?: React.ReactNode;
  /**
   * Array tooltip untuk setiap rating level
   */
  tooltips?: string[];
  /**
   * Apakah menampilkan tooltip
   */
  showTooltip?: boolean;
  /**
   * Apakah menampilkan nilai rating sebagai text
   */
  showText?: boolean;
  /**
   * Custom text untuk rating levels
   */
  texts?: string[];
}

const ratingSizes = {
  sm: {
    icon: "w-4 h-4",
    gap: "gap-0.5",
    text: "text-sm",
  },
  md: {
    icon: "w-5 h-5",
    gap: "gap-1",
    text: "text-base",
  },
  lg: {
    icon: "w-6 h-6",
    gap: "gap-1.5",
    text: "text-lg",
  },
};

const ratingColors = {
  yellow: {
    filled: "text-yellow-400",
    empty: "text-secondary-300",
    hover: "text-yellow-300",
  },
  red: {
    filled: "text-red-500",
    empty: "text-secondary-300",
    hover: "text-red-400",
  },
  blue: {
    filled: "text-blue-500",
    empty: "text-secondary-300",
    hover: "text-blue-400",
  },
  green: {
    filled: "text-green-500",
    empty: "text-secondary-300",
    hover: "text-green-400",
  },
  purple: {
    filled: "text-purple-500",
    empty: "text-secondary-300",
    hover: "text-purple-400",
  },
};

// Default star icon
const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    className="w-full h-full"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value: controlledValue,
      defaultValue = 0,
      count = 5,
      allowHalf = false,
      allowClear = true,
      disabled = false,
      size = "md",
      color = "yellow",
      className,
      onChange,
      onHover,
      character,
      tooltips,
      showTooltip = false,
      showText = false,
      texts = ["Terrible", "Bad", "Normal", "Good", "Excellent"],
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);
    const [tooltipIndex, setTooltipIndex] = React.useState<number | null>(null);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;
    const displayValue = hoverValue !== null ? hoverValue : currentValue;

    const handleClick = (index: number, isHalf: boolean = false) => {
      if (disabled) return;

      const newValue = isHalf ? index + 0.5 : index + 1;

      // Clear if clicking the same value and allowClear is true
      if (allowClear && newValue === currentValue) {
        const clearedValue = 0;
        if (!isControlled) {
          setInternalValue(clearedValue);
        }
        onChange?.(clearedValue);
        return;
      }

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleMouseEnter = (index: number, isHalf: boolean = false) => {
      if (disabled) return;

      const hoverVal = isHalf ? index + 0.5 : index + 1;
      setHoverValue(hoverVal);
      setTooltipIndex(index);
      onHover?.(hoverVal);
    };

    const handleMouseLeave = () => {
      if (disabled) return;

      setHoverValue(null);
      setTooltipIndex(null);
    };

    const getStarState = (index: number) => {
      const starValue = index + 1;
      const halfValue = index + 0.5;

      if (displayValue >= starValue) {
        return "full";
      } else if (allowHalf && displayValue >= halfValue) {
        return "half";
      }
      return "empty";
    };

    const renderStar = (index: number) => {
      const starState = getStarState(index);
      const isHovered = hoverValue !== null;

      return (
        <div
          key={index}
          className={clsx(
            "relative inline-flex cursor-pointer transition-colors duration-200",
            ratingSizes[size].icon,
            disabled && "cursor-not-allowed opacity-50"
          )}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background star (empty) */}
          <div
            className={clsx(
              "absolute inset-0",
              isHovered ? ratingColors[color].hover : ratingColors[color].empty
            )}
          >
            {character || <StarIcon filled={false} />}
          </div>

          {/* Half star (if applicable) */}
          {allowHalf && (
            <div
              className={clsx(
                "absolute inset-0 overflow-hidden cursor-pointer",
                starState === "half" ||
                  (isHovered && hoverValue === index + 0.5)
                  ? ratingColors[color].filled
                  : "opacity-0"
              )}
              style={{ width: "50%" }}
              onMouseEnter={() => handleMouseEnter(index, true)}
              onClick={() => handleClick(index, true)}
            >
              {character || <StarIcon filled={true} />}
            </div>
          )}

          {/* Full star */}
          <div
            className={clsx(
              "absolute inset-0 cursor-pointer transition-opacity duration-200",
              starState === "full" || (isHovered && hoverValue >= index + 1)
                ? ratingColors[color].filled
                : "opacity-0"
            )}
            onClick={() => handleClick(index)}
          >
            {character || <StarIcon filled={true} />}
          </div>

          {/* Tooltip */}
          {showTooltip &&
            tooltipIndex === index &&
            (tooltips?.[index] || texts?.[index]) && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-10">
                <div className="px-2 py-1 text-xs text-white bg-secondary-800 rounded whitespace-nowrap">
                  {tooltips?.[index] || texts?.[index]}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-secondary-800" />
              </div>
            )}
        </div>
      );
    };

    const getCurrentText = () => {
      if (!showText) return null;

      const textIndex = Math.ceil(displayValue) - 1;
      return texts?.[textIndex] || displayValue.toString();
    };

    return (
      <div
        ref={ref}
        className={clsx(
          "inline-flex items-center",
          ratingSizes[size].gap,
          className
        )}
        {...props}
      >
        {/* Stars */}
        <div
          className={clsx("inline-flex items-center", ratingSizes[size].gap)}
        >
          {Array.from({ length: count }, (_, index) => renderStar(index))}
        </div>

        {/* Text display */}
        {showText && getCurrentText() && (
          <span
            className={clsx("ml-2 text-secondary-600", ratingSizes[size].text)}
          >
            {getCurrentText()}
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = "Rating";
