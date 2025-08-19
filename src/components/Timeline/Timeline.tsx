import React from "react";
import { clsx } from "clsx";

export interface TimelineItem {
  /**
   * Unique key untuk item
   */
  key: string;
  /**
   * Judul event
   */
  title: string;
  /**
   * Deskripsi event
   */
  description?: string;
  /**
   * Timestamp event
   */
  timestamp?: string | Date;
  /**
   * Status/warna item
   */
  status?: "default" | "primary" | "success" | "warning" | "error" | "info";
  /**
   * Icon untuk item
   */
  icon?: React.ReactNode;
  /**
   * Content tambahan
   */
  content?: React.ReactNode;
  /**
   * Apakah item aktif/highlighted
   */
  active?: boolean;
}

export interface TimelineProps {
  /**
   * Array timeline items
   */
  items: TimelineItem[];
  /**
   * Mode timeline
   */
  mode?: "left" | "right" | "alternate";
  /**
   * Apakah menampilkan connector line
   */
  showConnector?: boolean;
  /**
   * Ukuran timeline
   */
  size?: "sm" | "md" | "lg";
  /**
   * Custom className
   */
  className?: string;
  /**
   * Apakah menampilkan timestamp
   */
  showTimestamp?: boolean;
  /**
   * Format timestamp
   */
  timestampFormat?: "relative" | "absolute" | "date" | "time";
}

const timelineSizes = {
  sm: {
    dot: "w-2 h-2",
    icon: "w-4 h-4 p-0.5",
    title: "text-sm",
    description: "text-xs",
    timestamp: "text-xs",
    spacing: "pb-4",
    connector: "w-0.5",
  },
  md: {
    dot: "w-3 h-3",
    icon: "w-6 h-6 p-1",
    title: "text-base",
    description: "text-sm",
    timestamp: "text-sm",
    spacing: "pb-6",
    connector: "w-0.5",
  },
  lg: {
    dot: "w-4 h-4",
    icon: "w-8 h-8 p-1.5",
    title: "text-lg",
    description: "text-base",
    timestamp: "text-base",
    spacing: "pb-8",
    connector: "w-1",
  },
};

const timelineStatuses = {
  default: {
    dot: "bg-secondary-400 border-secondary-300",
    line: "bg-secondary-300",
    icon: "bg-secondary-100 text-secondary-600 border-secondary-300",
  },
  primary: {
    dot: "bg-primary-600 border-primary-500",
    line: "bg-primary-300",
    icon: "bg-primary-100 text-primary-600 border-primary-500",
  },
  success: {
    dot: "bg-green-600 border-green-500",
    line: "bg-green-300",
    icon: "bg-green-100 text-green-600 border-green-500",
  },
  warning: {
    dot: "bg-yellow-500 border-yellow-400",
    line: "bg-yellow-300",
    icon: "bg-yellow-100 text-yellow-600 border-yellow-400",
  },
  error: {
    dot: "bg-red-600 border-red-500",
    line: "bg-red-300",
    icon: "bg-red-100 text-red-600 border-red-500",
  },
  info: {
    dot: "bg-blue-600 border-blue-500",
    line: "bg-blue-300",
    icon: "bg-blue-100 text-blue-600 border-blue-500",
  },
};

const formatTimestamp = (
  timestamp: string | Date,
  format: "relative" | "absolute" | "date" | "time"
): string => {
  const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;

  switch (format) {
    case "relative":
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      if (diffMinutes < 1) return "Just now";
      if (diffMinutes < 60) return `${diffMinutes}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays < 30) return `${diffDays}d ago`;
      return date.toLocaleDateString();

    case "date":
      return date.toLocaleDateString();

    case "time":
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

    case "absolute":
    default:
      return date.toLocaleString();
  }
};

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      items,
      mode = "left",
      showConnector = true,
      size = "md",
      className,
      showTimestamp = true,
      timestampFormat = "relative",
      ...props
    },
    ref
  ) => {
    const renderTimelineItem = (
      item: TimelineItem,
      index: number,
      isLast: boolean
    ) => {
      const status = item.status || "default";
      const isAlternate = mode === "alternate";
      const isRightSide = isAlternate && index % 2 === 1;

      return (
        <div
          key={item.key}
          className={clsx(
            "flex",
            isAlternate
              ? isRightSide
                ? "flex-row-reverse"
                : "flex-row"
              : "flex-row",
            !isLast && timelineSizes[size].spacing
          )}
        >
          {/* Timeline track */}
          <div className="flex flex-col items-center mr-4">
            {/* Dot or Icon */}
            <div
              className={clsx(
                "relative flex items-center justify-center rounded-full border-2 z-10",
                item.icon
                  ? clsx(
                      timelineSizes[size].icon,
                      timelineStatuses[status].icon
                    )
                  : clsx(timelineSizes[size].dot, timelineStatuses[status].dot),
                item.active && "ring-2 ring-primary-200"
              )}
            >
              {item.icon || null}
            </div>

            {/* Connector line */}
            {showConnector && !isLast && (
              <div
                className={clsx(
                  "flex-1 mt-2",
                  timelineSizes[size].connector,
                  timelineStatuses[status].line,
                  "min-h-8"
                )}
              />
            )}
          </div>

          {/* Content */}
          <div
            className={clsx(
              "flex-1",
              isAlternate && isRightSide && "text-right"
            )}
          >
            {/* Title and Timestamp */}
            <div
              className={clsx(
                "flex items-start",
                isAlternate && isRightSide ? "flex-row-reverse" : "flex-row"
              )}
            >
              <h3
                className={clsx(
                  "font-medium text-secondary-900",
                  timelineSizes[size].title,
                  item.active && "text-primary-600"
                )}
              >
                {item.title}
              </h3>

              {showTimestamp && item.timestamp && (
                <span
                  className={clsx(
                    "text-secondary-500 ml-2",
                    timelineSizes[size].timestamp,
                    isAlternate && isRightSide && "ml-0 mr-2"
                  )}
                >
                  {formatTimestamp(item.timestamp, timestampFormat)}
                </span>
              )}
            </div>

            {/* Description */}
            {item.description && (
              <p
                className={clsx(
                  "text-secondary-600 mt-1",
                  timelineSizes[size].description
                )}
              >
                {item.description}
              </p>
            )}

            {/* Additional Content */}
            {item.content && <div className="mt-2">{item.content}</div>}
          </div>
        </div>
      );
    };

    return (
      <div ref={ref} className={clsx("timeline", className)} {...props}>
        {items.map((item, index) =>
          renderTimelineItem(item, index, index === items.length - 1)
        )}
      </div>
    );
  }
);

Timeline.displayName = "Timeline";
