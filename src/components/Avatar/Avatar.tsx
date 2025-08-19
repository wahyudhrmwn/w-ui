import React from "react";
import { clsx } from "clsx";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant styling untuk avatar
   */
  variant?: "circle" | "rounded" | "square";
  /**
   * Ukuran avatar
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /**
   * Source URL gambar
   */
  src?: string;
  /**
   * Alt text untuk gambar
   */
  alt?: string;
  /**
   * Placeholder text ketika tidak ada gambar
   */
  placeholder?: string;
  /**
   * Warna background untuk placeholder
   */
  bgColor?: "primary" | "secondary" | "success" | "warning" | "error";
}

const avatarSizes = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl",
  "2xl": "w-20 h-20 text-2xl",
};

const avatarVariants = {
  circle: "rounded-full",
  rounded: "rounded-lg",
  square: "rounded-none",
};

const avatarBgColors = {
  primary: "bg-primary-500 text-white",
  secondary: "bg-secondary-500 text-white",
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-white",
  error: "bg-red-500 text-white",
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      variant = "circle",
      size = "md",
      src,
      alt,
      placeholder,
      bgColor = "secondary",
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    // Reset error state when src changes
    React.useEffect(() => {
      if (src) {
        setImageError(false);
        setImageLoaded(false);
      }
    }, [src]);

    const handleImageError = () => {
      setImageError(true);
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const showImage = src && !imageError;
    const showPlaceholder = !src || imageError;

    // Generate initials from placeholder text
    const getInitials = (text?: string) => {
      if (!text) return "";
      return text
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();
    };

    return (
      <div
        ref={ref}
        className={clsx(
          // Base styles
          "relative inline-flex items-center justify-center font-medium overflow-hidden",
          "bg-cover bg-center bg-no-repeat",

          // Size styles
          avatarSizes[size],

          // Variant styles
          avatarVariants[variant],

          // Background color for placeholder
          showPlaceholder && avatarBgColors[bgColor],

          // Custom className
          className
        )}
        {...props}
      >
        {showImage && (
          <img
            src={src}
            alt={alt || "Avatar"}
            className={clsx(
              "w-full h-full object-cover transition-opacity duration-200",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}

        {showPlaceholder && (
          <span className="select-none">
            {getInitials(placeholder || alt) || "?"}
          </span>
        )}

        {/* Loading state overlay */}
        {showImage && !imageLoaded && (
          <div
            className={clsx(
              "absolute inset-0 flex items-center justify-center",
              avatarBgColors[bgColor]
            )}
          >
            <svg
              className="animate-spin w-1/2 h-1/2"
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
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

// Avatar Group component
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maksimal avatar yang ditampilkan
   */
  max?: number;
  /**
   * Size untuk semua avatar dalam group
   */
  size?: AvatarProps["size"];
  /**
   * Variant untuk semua avatar dalam group
   */
  variant?: AvatarProps["variant"];
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { max = 4, size = "md", variant = "circle", className, children, ...props },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children);
    const visibleAvatars = childrenArray.slice(0, max);
    const remainingCount = Math.max(0, childrenArray.length - max);

    return (
      <div ref={ref} className={clsx("flex -space-x-2", className)} {...props}>
        {visibleAvatars.map((child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<AvatarProps>, {
                key: index,
                size,
                variant,
                className: clsx("ring-2 ring-white", child.props.className),
              })
            : child
        )}

        {remainingCount > 0 && (
          <Avatar
            size={size}
            variant={variant}
            placeholder={`+${remainingCount}`}
            bgColor="secondary"
            className="ring-2 ring-white"
          />
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";
