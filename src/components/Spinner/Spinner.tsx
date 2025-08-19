import React from "react";
import { clsx } from "clsx";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Ukuran spinner
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Warna spinner
   */
  color?: "primary" | "secondary" | "white" | "current";
  /**
   * Variant spinner
   */
  variant?: "spin" | "pulse" | "bounce" | "dots";
  /**
   * Label untuk accessibility
   */
  label?: string;
  /**
   * Kecepatan animasi
   */
  speed?: "slow" | "normal" | "fast";
}

const spinnerSizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

const spinnerColors = {
  primary: "text-primary-600",
  secondary: "text-secondary-600",
  white: "text-white",
  current: "text-current",
};

const animationSpeeds = {
  slow: "animate-spin [animation-duration:2s]",
  normal: "animate-spin",
  fast: "animate-spin [animation-duration:0.5s]",
};

// Spinner variants
const SpinVariant: React.FC<{
  size: string;
  color: string;
  speed: string;
  className?: string;
}> = ({ size, color, speed, className }) => (
  <svg
    className={clsx(size, color, speed, className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const PulseVariant: React.FC<{
  size: string;
  color: string;
  speed: string;
  className?: string;
}> = ({ size, color, speed, className }) => {
  const pulseSpeed =
    speed === "slow"
      ? "animate-pulse [animation-duration:2s]"
      : speed === "fast"
      ? "animate-pulse [animation-duration:0.5s]"
      : "animate-pulse";

  return (
    <div
      className={clsx(
        size,
        color,
        pulseSpeed,
        "bg-current rounded-full",
        className
      )}
    />
  );
};

const BounceVariant: React.FC<{
  size: string;
  color: string;
  speed: string;
  className?: string;
}> = ({ size, color, speed, className }) => {
  const bounceSpeed =
    speed === "slow"
      ? "animate-bounce [animation-duration:2s]"
      : speed === "fast"
      ? "animate-bounce [animation-duration:0.5s]"
      : "animate-bounce";

  return (
    <div
      className={clsx(
        size,
        color,
        bounceSpeed,
        "bg-current rounded-full",
        className
      )}
    />
  );
};

const DotsVariant: React.FC<{
  size: string;
  color: string;
  speed: string;
  className?: string;
}> = ({ size, color, speed, className }) => {
  // Convert size to dot size
  const dotSizes = {
    "w-3 h-3": "w-1 h-1",
    "w-4 h-4": "w-1.5 h-1.5",
    "w-6 h-6": "w-2 h-2",
    "w-8 h-8": "w-2.5 h-2.5",
    "w-12 h-12": "w-3 h-3",
  };

  const dotSize = dotSizes[size as keyof typeof dotSizes] || "w-2 h-2";

  const animationDelay =
    speed === "slow"
      ? "[animation-duration:1.6s]"
      : speed === "fast"
      ? "[animation-duration:0.8s]"
      : "[animation-duration:1.2s]";

  return (
    <div className={clsx("flex space-x-1", className)}>
      <div
        className={clsx(
          dotSize,
          color,
          "bg-current rounded-full animate-pulse",
          animationDelay,
          "[animation-delay:0ms]"
        )}
      />
      <div
        className={clsx(
          dotSize,
          color,
          "bg-current rounded-full animate-pulse",
          animationDelay,
          "[animation-delay:200ms]"
        )}
      />
      <div
        className={clsx(
          dotSize,
          color,
          "bg-current rounded-full animate-pulse",
          animationDelay,
          "[animation-delay:400ms]"
        )}
      />
    </div>
  );
};

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = "md",
      color = "primary",
      variant = "spin",
      label = "Loading...",
      speed = "normal",
      className,
      ...props
    },
    ref
  ) => {
    const sizeClass = spinnerSizes[size];
    const colorClass = spinnerColors[color];
    const speedClass = animationSpeeds[speed];

    const renderVariant = () => {
      const commonProps = {
        size: sizeClass,
        color: colorClass,
        speed: speedClass,
        className,
      };

      switch (variant) {
        case "spin":
          return <SpinVariant {...commonProps} />;
        case "pulse":
          return <PulseVariant {...commonProps} />;
        case "bounce":
          return <BounceVariant {...commonProps} />;
        case "dots":
          return <DotsVariant {...commonProps} />;
        default:
          return <SpinVariant {...commonProps} />;
      }
    };

    return (
      <div
        ref={ref}
        className="inline-flex items-center justify-center"
        role="status"
        aria-label={label}
        {...props}
      >
        {renderVariant()}
        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

// Spinner overlay component untuk full-screen loading
export interface SpinnerOverlayProps {
  /**
   * Apakah overlay ditampilkan
   */
  show?: boolean;
  /**
   * Spinner props
   */
  spinnerProps?: Omit<SpinnerProps, "className">;
  /**
   * Text loading
   */
  text?: string;
  /**
   * Background overlay opacity
   */
  opacity?: "light" | "medium" | "dark";
}

const overlayOpacities = {
  light: "bg-black/20",
  medium: "bg-black/50",
  dark: "bg-black/75",
};

export const SpinnerOverlay: React.FC<SpinnerOverlayProps> = ({
  show = false,
  spinnerProps = {},
  text = "Loading...",
  opacity = "medium",
}) => {
  if (!show) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center",
        overlayOpacities[opacity]
      )}
    >
      <div className="flex flex-col items-center space-y-3 bg-white rounded-lg p-6 shadow-lg">
        <Spinner color="primary" size="lg" {...spinnerProps} />
        {text && (
          <p className="text-sm font-medium text-secondary-700">{text}</p>
        )}
      </div>
    </div>
  );
};
