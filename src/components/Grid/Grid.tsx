import React from "react";
import clsx from "clsx";

// Breakpoint system
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

export interface ColSize {
  span?: number;
  offset?: number;
  order?: number;
  push?: number;
  pull?: number;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  // Basic props
  span?: ResponsiveValue<number>;
  offset?: ResponsiveValue<number>;
  order?: ResponsiveValue<number>;
  push?: ResponsiveValue<number>;
  pull?: ResponsiveValue<number>;

  // Responsive breakpoints
  xs?: number | ColSize;
  sm?: number | ColSize;
  md?: number | ColSize;
  lg?: number | ColSize;
  xl?: number | ColSize;
  "2xl"?: number | ColSize;

  // Flex properties
  flex?: ResponsiveValue<string | number>;

  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  // Gutters
  gutter?: ResponsiveValue<number | [number, number]>; // [horizontal, vertical]

  // Flex properties
  justify?: ResponsiveValue<
    | "start"
    | "end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
  >;
  align?: ResponsiveValue<"top" | "middle" | "bottom" | "stretch">;

  // Layout
  wrap?: boolean; // Default: true (for better responsive behavior)

  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const breakpoints: Breakpoint[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

const getResponsiveClasses = (
  value: ResponsiveValue<any>,
  prefix: string,
  transformer?: (val: any) => string | string[]
): string[] => {
  if (typeof value === "object" && value !== null) {
    const classes: string[] = [];

    breakpoints.forEach((bp) => {
      const val = value[bp];
      if (val !== undefined) {
        const suffix = bp === "xs" ? "" : `${bp}:`;
        const transformed = transformer ? transformer(val) : val.toString();

        if (Array.isArray(transformed)) {
          transformed.forEach((cls) =>
            classes.push(`${suffix}${prefix}${cls}`)
          );
        } else {
          classes.push(`${suffix}${prefix}${transformed}`);
        }
      }
    });

    return classes;
  }

  const transformed = transformer ? transformer(value) : value.toString();
  return Array.isArray(transformed)
    ? transformed.map((cls) => `${prefix}${cls}`)
    : [`${prefix}${transformed}`];
};

const getJustifyClass = (justify: string): string => {
  const justifyMap = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    "space-around": "justify-around",
    "space-between": "justify-between",
    "space-evenly": "justify-evenly",
  };
  return justifyMap[justify as keyof typeof justifyMap] || justify;
};

const getAlignClass = (align: string): string => {
  const alignMap = {
    top: "items-start",
    middle: "items-center",
    bottom: "items-end",
    stretch: "items-stretch",
  };
  return alignMap[align as keyof typeof alignMap] || align;
};

const getGutterClass = (gutter: number | [number, number]): string => {
  if (typeof gutter === "number") {
    // Convert px to Tailwind gap classes
    const gutterMap: Record<number, string> = {
      0: "gap-0",
      4: "gap-1",
      8: "gap-2",
      12: "gap-3",
      16: "gap-4",
      20: "gap-5",
      24: "gap-6",
      32: "gap-8",
      40: "gap-10",
      48: "gap-12",
    };
    return gutterMap[gutter] || `gap-[${gutter}px]`;
  }

  const [horizontal, vertical] = gutter;
  if (horizontal === vertical) {
    return getGutterClass(horizontal);
  }

  const hMap: Record<number, string> = {
    0: "gap-x-0",
    4: "gap-x-1",
    8: "gap-x-2",
    12: "gap-x-3",
    16: "gap-x-4",
    20: "gap-x-5",
    24: "gap-x-6",
    32: "gap-x-8",
  };
  const vMap: Record<number, string> = {
    0: "gap-y-0",
    4: "gap-y-1",
    8: "gap-y-2",
    12: "gap-y-3",
    16: "gap-y-4",
    20: "gap-y-5",
    24: "gap-y-6",
    32: "gap-y-8",
  };

  return `${hMap[horizontal] || `gap-x-[${horizontal}px]`} ${
    vMap[vertical] || `gap-y-[${vertical}px]`
  }`;
};

// Remove this function as we'll use flex-wrap and gap instead

export const Row: React.FC<RowProps> = ({
  gutter,
  justify = "start",
  align = "top",
  wrap = true,
  children,
  className,
  style,
  ...props
}) => {
  // Generate classes for justify and align
  const justifyClasses = getResponsiveClasses(justify, "", getJustifyClass);
  const alignClasses = getResponsiveClasses(align, "", getAlignClass);

  // Calculate gutter classes
  let gutterClasses = "";
  if (gutter) {
    if (typeof gutter === "object" && gutter !== null) {
      // For responsive gutters, use the default value
      const gutterObject = gutter as Partial<Record<Breakpoint, number | [number, number]>>;
      const defaultGutter = gutterObject.xs || gutterObject.sm || gutterObject.md || 0;
      gutterClasses = getGutterClass(typeof defaultGutter === 'number' ? defaultGutter : (Array.isArray(defaultGutter) ? defaultGutter[0] : 0));
    } else {
      gutterClasses = getGutterClass(gutter as number | [number, number]);
    }
  }

  const rowClasses = clsx(
    "flex",
    {
      "flex-wrap": wrap !== false, // Default to wrap unless explicitly false
      "flex-nowrap": wrap === false,
    },
    gutterClasses,
    justifyClasses,
    alignClasses,
    "w-full", // Ensure full width
    className
  );

  return (
    <div className={rowClasses} style={style} {...props}>
      {children}
    </div>
  );
};

export const Col: React.FC<ColProps> = ({
  span = 24,
  offset,
  order,
  push,
  pull,
  xs,
  sm,
  md,
  lg,
  xl,
  "2xl": xxl,
  flex,
  children,
  className,
  style,
  ...props
}) => {
  const classes: string[] = [];

  // Process responsive breakpoint props
  const breakpointProps = { xs, sm, md, lg, xl, "2xl": xxl };

  Object.entries(breakpointProps).forEach(([bp, value]) => {
    if (value !== undefined) {
      const bpPrefix = bp === "xs" ? "" : `${bp}:`;

      if (typeof value === "number") {
        // Simple span
        classes.push(`${bpPrefix}w-${Math.round((value / 24) * 100)}`);
      } else if (typeof value === "object") {
        // ColSize object
        const {
          span: bpSpan,
          offset: bpOffset,
          order: bpOrder,
          push: bpPush,
          pull: bpPull,
        } = value;

        if (bpSpan !== undefined) {
          if (bpSpan === 0) {
            classes.push(`${bpPrefix}hidden`);
          } else {
            classes.push(`${bpPrefix}w-${Math.round((bpSpan / 24) * 100)}`);
          }
        }

        if (bpOffset !== undefined) {
          classes.push(`${bpPrefix}ml-[${(bpOffset / 24) * 100}%]`);
        }

        if (bpOrder !== undefined) {
          classes.push(`${bpPrefix}order-${bpOrder}`);
        }

        if (bpPush !== undefined) {
          classes.push(`${bpPrefix}left-[${(bpPush / 24) * 100}%]`);
        }

        if (bpPull !== undefined) {
          classes.push(`${bpPrefix}right-[${(bpPull / 24) * 100}%]`);
        }
      }
    }
  });

  // Default span (only if no breakpoint-specific spans are defined)
  const hasBreakpointSpans = Object.values(breakpointProps).some(
    (v) =>
      v !== undefined &&
      (typeof v === "number" || (typeof v === "object" && v.span !== undefined))
  );

  if (!hasBreakpointSpans && span !== undefined && typeof span === 'number') {
    if (span === 0) {
      classes.push("hidden");
    } else {
      // Map 24-grid system to standard Tailwind width classes
      const widthMap: Record<number, string> = {
        1: "w-[4.166667%]", // 1/24
        2: "w-[8.333333%]", // 2/24 = 1/12
        3: "w-1/8", // 3/24 = 1/8
        4: "w-1/6", // 4/24 = 1/6
        6: "w-1/4", // 6/24 = 1/4
        8: "w-1/3", // 8/24 = 1/3
        9: "w-[37.5%]", // 9/24 = 3/8
        12: "w-1/2", // 12/24 = 1/2
        16: "w-2/3", // 16/24 = 2/3
        18: "w-3/4", // 18/24 = 3/4
        20: "w-5/6", // 20/24 = 5/6
        24: "w-full", // 24/24 = full
      };

      classes.push(
        widthMap[span] || `w-[${Math.round((span / 24) * 10000) / 100}%]`
      );
    }
  }

  // Handle other props
  if (offset !== undefined) {
    if (typeof offset === "object") {
      classes.push(
        ...getResponsiveClasses(
          offset,
          "ml-[",
          (val) => `${Math.round((val / 24) * 10000) / 100}%]`
        )
      );
    } else if (typeof offset === "number") {
      classes.push(`ml-[${Math.round((offset / 24) * 10000) / 100}%]`);
    }
  }

  if (order !== undefined) {
    if (typeof order === "object") {
      classes.push(...getResponsiveClasses(order, "order-"));
    } else if (typeof order === "number") {
      classes.push(`order-${order}`);
    }
  }

  if (push !== undefined) {
    if (typeof push === "object") {
      classes.push(
        ...getResponsiveClasses(
          push,
          "left-[",
          (val) => `${(val / 24) * 100}%]`
        )
      );
    } else if (typeof push === "number") {
      classes.push(`left-[${(push / 24) * 100}%]`);
    }
  }

  if (pull !== undefined) {
    if (typeof pull === "object") {
      classes.push(
        ...getResponsiveClasses(
          pull,
          "right-[",
          (val) => `${(val / 24) * 100}%]`
        )
      );
    } else if (typeof pull === "number") {
      classes.push(`right-[${(pull / 24) * 100}%]`);
    }
  }

  // Handle flex prop
  let flexStyle: React.CSSProperties = {};
  if (flex !== undefined) {
    if (typeof flex === "object") {
      // For responsive flex, use the first available value as fallback
      const flexValue =
        flex.xs ||
        flex.sm ||
        flex.md ||
        flex.lg ||
        flex.xl ||
        flex["2xl"] ||
        "1";
      flexStyle.flex = flexValue;
    } else {
      flexStyle.flex = flex;
    }
  }

  const colClasses = clsx(
    "relative", // For push/pull positioning
    "min-w-0", // Prevent flex items from overflowing
    classes,
    className
  );

  return (
    <div
      className={colClasses}
      style={{
        ...flexStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Pre-built common layouts
export const Container: React.FC<{
  fluid?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ fluid = false, children, className, style, ...props }) => {
  const containerClasses = clsx(
    "mx-auto px-4",
    {
      "max-w-none": fluid,
      "max-w-screen-2xl": !fluid,
    },
    className
  );

  return (
    <div className={containerClasses} style={style} {...props}>
      {children}
    </div>
  );
};

// Export the Grid namespace for convenience
export const Grid = {
  Row,
  Col,
  Container,
};
