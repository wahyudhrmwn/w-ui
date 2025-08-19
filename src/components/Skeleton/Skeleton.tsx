import React from "react";
import { clsx } from "clsx";

export interface SkeletonProps {
  /**
   * Variant bentuk skeleton
   */
  variant?: "text" | "rectangle" | "circle" | "rounded";
  /**
   * Lebar skeleton (px atau %)
   */
  width?: string | number;
  /**
   * Tinggi skeleton (px atau %)
   */
  height?: string | number;
  /**
   * Ukuran preset skeleton
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Animasi skeleton
   */
  animation?: "pulse" | "wave" | "none";
  /**
   * Custom className
   */
  className?: string;
  /**
   * Children untuk skeleton wrapper
   */
  children?: React.ReactNode;
}

export interface SkeletonGroupProps {
  /**
   * Jumlah skeleton yang ditampilkan
   */
  count?: number;
  /**
   * Space antara skeleton
   */
  spacing?: "none" | "sm" | "md" | "lg";
  /**
   * Props untuk setiap skeleton
   */
  skeletonProps?: Omit<SkeletonProps, "children">;
  /**
   * Custom className untuk container
   */
  className?: string;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Children yang akan ditampilkan setelah loading
   */
  children?: React.ReactNode;
}

const skeletonSizes = {
  sm: { width: "80px", height: "16px" },
  md: { width: "120px", height: "20px" },
  lg: { width: "200px", height: "24px" },
  xl: { width: "300px", height: "32px" },
};

const skeletonAnimations = {
  pulse: "animate-pulse",
  wave: "animate-wave",
  none: "",
};

const spacingClasses = {
  none: "space-y-0",
  sm: "space-y-1",
  md: "space-y-2",
  lg: "space-y-4",
};

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = "text",
      width,
      height,
      size,
      animation = "pulse",
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Determine dimensions
    let dimensions: { width?: string; height?: string } = {};

    if (size && !width && !height) {
      dimensions = {
        width: skeletonSizes[size].width,
        height: skeletonSizes[size].height,
      };
    } else {
      if (width)
        dimensions.width = typeof width === "number" ? `${width}px` : width;
      if (height)
        dimensions.height = typeof height === "number" ? `${height}px` : height;
    }

    // Default dimensions based on variant
    if (!dimensions.width && !dimensions.height) {
      switch (variant) {
        case "text":
          dimensions = { width: "100%", height: "20px" };
          break;
        case "rectangle":
          dimensions = { width: "100%", height: "200px" };
          break;
        case "circle":
          dimensions = { width: "48px", height: "48px" };
          break;
        case "rounded":
          dimensions = { width: "100%", height: "120px" };
          break;
      }
    }

    return (
      <div
        ref={ref}
        className={clsx(
          // Base styles
          "bg-secondary-200 bg-gradient-to-r from-secondary-200 via-secondary-300 to-secondary-200 bg-size-200 bg-pos-0",

          // Variant styles
          variant === "text" && "rounded",
          variant === "rectangle" && "rounded-none",
          variant === "circle" && "rounded-full",
          variant === "rounded" && "rounded-lg",

          // Animation styles
          skeletonAnimations[animation],

          // Custom className
          className
        )}
        style={dimensions}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Skeleton.displayName = "Skeleton";

// Skeleton Group Component
export const SkeletonGroup = React.forwardRef<
  HTMLDivElement,
  SkeletonGroupProps
>(
  (
    {
      count = 3,
      spacing = "md",
      skeletonProps = {},
      className,
      loading = true,
      children,
      ...props
    },
    ref
  ) => {
    if (!loading && children) {
      return <>{children}</>;
    }

    return (
      <div
        ref={ref}
        className={clsx(spacingClasses[spacing], className)}
        {...props}
      >
        {Array.from({ length: count }, (_, index) => (
          <Skeleton key={index} {...skeletonProps} />
        ))}
      </div>
    );
  }
);

SkeletonGroup.displayName = "SkeletonGroup";

// Pre-built skeleton patterns
export interface SkeletonCardProps {
  /**
   * Apakah menampilkan avatar
   */
  showAvatar?: boolean;
  /**
   * Jumlah baris text
   */
  textLines?: number;
  /**
   * Apakah menampilkan actions
   */
  showActions?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Children content
   */
  children?: React.ReactNode;
  /**
   * Custom className
   */
  className?: string;
}

export const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonCardProps>(
  (
    {
      showAvatar = true,
      textLines = 3,
      showActions = true,
      loading = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    if (!loading && children) {
      return <>{children}</>;
    }

    return (
      <div
        ref={ref}
        className={clsx(
          "p-6 bg-white border border-secondary-200 rounded-lg",
          className
        )}
        {...props}
      >
        {/* Header dengan avatar */}
        {showAvatar && (
          <div className="flex items-center space-x-3 mb-4">
            <Skeleton variant="circle" width={48} height={48} />
            <div className="space-y-2 flex-1">
              <Skeleton variant="text" width="40%" height={16} />
              <Skeleton variant="text" width="60%" height={14} />
            </div>
          </div>
        )}

        {/* Content image/rectangle */}
        <Skeleton variant="rounded" height={200} className="mb-4" />

        {/* Text lines */}
        <div className="space-y-2 mb-4">
          {Array.from({ length: textLines }, (_, index) => (
            <Skeleton
              key={index}
              variant="text"
              width={index === textLines - 1 ? "70%" : "100%"}
              height={16}
            />
          ))}
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex space-x-2">
            <Skeleton variant="rounded" width={80} height={32} />
            <Skeleton variant="rounded" width={80} height={32} />
            <Skeleton variant="rounded" width={60} height={32} />
          </div>
        )}
      </div>
    );
  }
);

SkeletonCard.displayName = "SkeletonCard";

// Table skeleton
export interface SkeletonTableProps {
  /**
   * Jumlah baris
   */
  rows?: number;
  /**
   * Jumlah kolom
   */
  columns?: number;
  /**
   * Apakah menampilkan header
   */
  showHeader?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Children content
   */
  children?: React.ReactNode;
  /**
   * Custom className
   */
  className?: string;
}

export const SkeletonTable = React.forwardRef<
  HTMLDivElement,
  SkeletonTableProps
>(
  (
    {
      rows = 5,
      columns = 4,
      showHeader = true,
      loading = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    if (!loading && children) {
      return <>{children}</>;
    }

    return (
      <div
        ref={ref}
        className={clsx(
          "bg-white border border-secondary-200 rounded-lg overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Header */}
        {showHeader && (
          <div className="bg-secondary-50 px-6 py-4 border-b border-secondary-200">
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
            >
              {Array.from({ length: columns }, (_, index) => (
                <Skeleton
                  key={`header-${index}`}
                  variant="text"
                  width="80%"
                  height={16}
                />
              ))}
            </div>
          </div>
        )}

        {/* Rows */}
        <div className="divide-y divide-secondary-200">
          {Array.from({ length: rows }, (_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="px-6 py-4">
              <div
                className="grid gap-4"
                style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
              >
                {Array.from({ length: columns }, (_, colIndex) => (
                  <Skeleton
                    key={`cell-${rowIndex}-${colIndex}`}
                    variant="text"
                    width={colIndex === 0 ? "60%" : "90%"}
                    height={16}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

SkeletonTable.displayName = "SkeletonTable";

// List skeleton
export interface SkeletonListProps {
  /**
   * Jumlah items
   */
  count?: number;
  /**
   * Apakah menampilkan avatar
   */
  showAvatar?: boolean;
  /**
   * Apakah menampilkan secondary text
   */
  showSecondary?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Children content
   */
  children?: React.ReactNode;
  /**
   * Custom className
   */
  className?: string;
}

export const SkeletonList = React.forwardRef<HTMLDivElement, SkeletonListProps>(
  (
    {
      count = 5,
      showAvatar = true,
      showSecondary = true,
      loading = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    if (!loading && children) {
      return <>{children}</>;
    }

    return (
      <div
        ref={ref}
        className={clsx(
          "bg-white border border-secondary-200 rounded-lg overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="divide-y divide-secondary-200">
          {Array.from({ length: count }, (_, index) => (
            <div key={`list-item-${index}`} className="p-4">
              <div className="flex items-center space-x-3">
                {showAvatar && (
                  <Skeleton variant="circle" width={40} height={40} />
                )}
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" width="70%" height={16} />
                  {showSecondary && (
                    <Skeleton variant="text" width="50%" height={14} />
                  )}
                </div>
                <Skeleton variant="rounded" width={60} height={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

SkeletonList.displayName = "SkeletonList";
