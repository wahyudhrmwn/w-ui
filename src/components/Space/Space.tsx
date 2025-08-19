import React from "react";
import clsx from "clsx";

export type SpaceSize = "xs" | "sm" | "md" | "lg" | "xl" | number;
export type SpaceDirection = "horizontal" | "vertical";
export type SpaceAlign = "start" | "end" | "center" | "baseline";
export type SpaceJustify =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between"
  | "space-evenly";

export interface SpaceProps {
  // Basic props
  children: React.ReactNode;
  direction?: SpaceDirection;
  size?: SpaceSize | [SpaceSize, SpaceSize]; // [horizontal, vertical]
  align?: SpaceAlign;
  justify?: SpaceJustify;
  wrap?: boolean;
  split?: React.ReactNode;

  // Compact mode
  compact?: boolean;

  // Style props
  className?: string;
  style?: React.CSSProperties;
}

const spaceTokens = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

const getSpaceSize = (size: SpaceSize): number => {
  if (typeof size === "number") return size;
  return spaceTokens[size] || spaceTokens.md;
};

const getAlignClass = (
  align: SpaceAlign,
  direction: SpaceDirection
): string => {
  if (direction === "horizontal") {
    const alignMap = {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
    };
    return alignMap[align] || "";
  } else {
    const alignMap = {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      baseline: "justify-start", // baseline doesn't apply to vertical
    };
    return alignMap[align] || "";
  }
};

const getJustifyClass = (
  justify: SpaceJustify,
  direction: SpaceDirection
): string => {
  if (direction === "horizontal") {
    const justifyMap = {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      "space-around": "justify-around",
      "space-between": "justify-between",
      "space-evenly": "justify-evenly",
    };
    return justifyMap[justify] || "";
  } else {
    const justifyMap = {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      "space-around": "items-around", // Not standard in flexbox
      "space-between": "items-between", // Not standard in flexbox
      "space-evenly": "items-evenly", // Not standard in flexbox
    };
    return justifyMap[justify] || "";
  }
};

export const Space: React.FC<SpaceProps> = ({
  children,
  direction = "horizontal",
  size = "md",
  align = "center",
  justify = "start",
  wrap = false,
  split,
  compact = false,
  className,
  style,
  ...props
}) => {
  // Calculate spacing
  const [horizontalSize, verticalSize] = Array.isArray(size)
    ? [getSpaceSize(size[0]), getSpaceSize(size[1])]
    : [getSpaceSize(size), getSpaceSize(size)];

  // Filter out null/undefined children
  const validChildren = React.Children.toArray(children).filter(
    (child) => child !== null && child !== undefined
  );

  if (validChildren.length === 0) {
    return null;
  }

  // Get CSS classes
  const alignClass = getAlignClass(align, direction);
  const justifyClass = getJustifyClass(justify, direction);

  const containerClasses = clsx(
    "flex",
    {
      "flex-row": direction === "horizontal",
      "flex-col": direction === "vertical",
      "flex-wrap": wrap,
    },
    alignClass,
    justifyClass,
    className
  );

  const renderChildren = () => {
    return validChildren.map((child, index) => {
      const isLast = index === validChildren.length - 1;

      // Calculate spacing for this child
      let childSpacing: React.CSSProperties = {};

      if (!isLast) {
        if (direction === "horizontal") {
          childSpacing.marginRight = `${horizontalSize}px`;
        } else {
          childSpacing.marginBottom = `${verticalSize}px`;
        }
      }

      // Compact mode reduces spacing
      if (compact && !isLast) {
        if (direction === "horizontal") {
          childSpacing.marginRight = `${Math.max(2, horizontalSize / 2)}px`;
        } else {
          childSpacing.marginBottom = `${Math.max(2, verticalSize / 2)}px`;
        }
      }

      return (
        <React.Fragment key={index}>
          <div style={childSpacing}>{child}</div>

          {/* Split element */}
          {split && !isLast && (
            <div
              style={{
                [direction === "horizontal"
                  ? "marginRight"
                  : "marginBottom"]: `${
                  compact
                    ? Math.max(2, horizontalSize / 2)
                    : direction === "horizontal"
                    ? horizontalSize
                    : verticalSize
                }px`,
              }}
            >
              {split}
            </div>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={containerClasses} style={style} {...props}>
      {renderChildren()}
    </div>
  );
};

// Preset components for common use cases
export const HSpace: React.FC<Omit<SpaceProps, "direction">> = (props) => (
  <Space {...props} direction="horizontal" />
);

export const VSpace: React.FC<Omit<SpaceProps, "direction">> = (props) => (
  <Space {...props} direction="vertical" />
);

// Compact versions
export const CompactSpace: React.FC<Omit<SpaceProps, "compact">> = (props) => (
  <Space {...props} compact />
);

export const CompactHSpace: React.FC<
  Omit<SpaceProps, "direction" | "compact">
> = (props) => <Space {...props} direction="horizontal" compact />;

export const CompactVSpace: React.FC<
  Omit<SpaceProps, "direction" | "compact">
> = (props) => <Space {...props} direction="vertical" compact />;

// Utility component for custom spacing
export const Spacer: React.FC<{
  size?: SpaceSize;
  direction?: SpaceDirection;
  className?: string;
  style?: React.CSSProperties;
}> = ({
  size = "md",
  direction = "horizontal",
  className,
  style,
  ...props
}) => {
  const spacing = getSpaceSize(size);

  const spacerStyle: React.CSSProperties = {
    [direction === "horizontal" ? "width" : "height"]: `${spacing}px`,
    [direction === "horizontal" ? "height" : "width"]: "1px",
    ...style,
  };

  return (
    <div
      className={clsx("flex-shrink-0", className)}
      style={spacerStyle}
      {...props}
    />
  );
};

// Export everything under Space namespace for convenience
export const SpaceComponents = {
  Space,
  HSpace,
  VSpace,
  CompactSpace,
  CompactHSpace,
  CompactVSpace,
  Spacer,
};
