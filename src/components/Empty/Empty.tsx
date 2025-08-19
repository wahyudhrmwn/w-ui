import React from "react";
import clsx from "clsx";

export interface EmptyProps {
  // Content
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  children?: React.ReactNode;

  // Built-in image types
  imageType?:
    | "default"
    | "search"
    | "network"
    | "file"
    | "data"
    | "cart"
    | "notification"
    | "user"
    | "message";

  // Styling
  size?: "sm" | "md" | "lg";

  // Layout
  direction?: "vertical" | "horizontal";

  className?: string;
  style?: React.CSSProperties;
}

const emptySizes = {
  sm: {
    container: "p-4",
    image: "w-16 h-16",
    title: "text-sm font-medium",
    description: "text-xs",
    spacing: "space-y-2",
  },
  md: {
    container: "p-8",
    image: "w-24 h-24",
    title: "text-lg font-semibold",
    description: "text-sm",
    spacing: "space-y-4",
  },
  lg: {
    container: "p-12",
    image: "w-32 h-32",
    title: "text-xl font-bold",
    description: "text-base",
    spacing: "space-y-6",
  },
};

// Built-in SVG icons for different empty states
const EmptyIcons = {
  default: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-3a2 2 0 00-2 2v1M7 13h10v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2z"
      />
    </svg>
  ),

  search: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),

  network: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  ),

  file: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.846-.5 3.578-1.374 5.06"
      />
    </svg>
  ),

  data: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),

  cart: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13a2 2 0 100 4 2 2 0 000-4zM9 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),

  notification: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),

  user: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  ),

  message: (className: string) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  ),
};

// Default content for different types
const defaultContent = {
  default: {
    title: "No Data",
    description: "There is no data available at the moment.",
  },
  search: {
    title: "No Results Found",
    description: "Try adjusting your search terms or filters.",
  },
  network: {
    title: "Connection Error",
    description: "Please check your internet connection and try again.",
  },
  file: {
    title: "No Files",
    description: "Upload files to get started.",
  },
  data: {
    title: "No Data Available",
    description: "Data will appear here once available.",
  },
  cart: {
    title: "Your Cart is Empty",
    description: "Add some items to your cart to continue shopping.",
  },
  notification: {
    title: "No Notifications",
    description: "You're all caught up! No new notifications.",
  },
  user: {
    title: "No Users Found",
    description: "Invite team members to get started.",
  },
  message: {
    title: "No Messages",
    description: "Start a conversation to see messages here.",
  },
};

export const Empty: React.FC<EmptyProps> = ({
  title,
  description,
  image,
  children,
  imageType = "default",
  size = "md",
  direction = "vertical",
  className,
  style,
  ...props
}) => {
  const sizeClasses = emptySizes[size];

  // Use provided content or fallback to defaults
  const displayTitle = title ?? defaultContent[imageType].title;
  const displayDescription =
    description ?? defaultContent[imageType].description;
  const displayImage =
    image ??
    EmptyIcons[imageType](clsx(sizeClasses.image, "text-secondary-300"));

  const containerClasses = clsx(
    "flex items-center justify-center text-center",
    sizeClasses.container,
    {
      "flex-col": direction === "vertical",
      "flex-row space-x-6": direction === "horizontal",
      [sizeClasses.spacing]: direction === "vertical",
    },
    className
  );

  const contentClasses = clsx({
    "space-y-2": direction === "vertical" && size === "sm",
    "space-y-3": direction === "vertical" && size === "md",
    "space-y-4": direction === "vertical" && size === "lg",
  });

  return (
    <div className={containerClasses} style={style} {...props}>
      {/* Image */}
      {displayImage && <div className="flex-shrink-0">{displayImage}</div>}

      {/* Content */}
      {(displayTitle || displayDescription || children) && (
        <div className={contentClasses}>
          {/* Title */}
          {displayTitle && (
            <h3 className={clsx(sizeClasses.title, "text-secondary-900 m-0")}>
              {displayTitle}
            </h3>
          )}

          {/* Description */}
          {displayDescription && (
            <p
              className={clsx(
                sizeClasses.description,
                "text-secondary-500 m-0"
              )}
            >
              {displayDescription}
            </p>
          )}

          {/* Custom children (typically actions) */}
          {children && <div className="mt-4">{children}</div>}
        </div>
      )}
    </div>
  );
};

// Preset empty states for common use cases
export const EmptySearch: React.FC<Omit<EmptyProps, "imageType">> = (props) => (
  <Empty {...props} imageType="search" />
);

export const EmptyData: React.FC<Omit<EmptyProps, "imageType">> = (props) => (
  <Empty {...props} imageType="data" />
);

export const EmptyCart: React.FC<Omit<EmptyProps, "imageType">> = (props) => (
  <Empty {...props} imageType="cart" />
);

export const EmptyNotification: React.FC<Omit<EmptyProps, "imageType">> = (
  props
) => <Empty {...props} imageType="notification" />;

export const EmptyFile: React.FC<Omit<EmptyProps, "imageType">> = (props) => (
  <Empty {...props} imageType="file" />
);

export const EmptyMessage: React.FC<Omit<EmptyProps, "imageType">> = (
  props
) => <Empty {...props} imageType="message" />;

export const EmptyUser: React.FC<Omit<EmptyProps, "imageType">> = (props) => (
  <Empty {...props} imageType="user" />
);

export const EmptyNetwork: React.FC<Omit<EmptyProps, "imageType">> = (
  props
) => <Empty {...props} imageType="network" />;

// Export everything under Empty namespace
export const EmptyComponents = {
  Empty,
  EmptySearch,
  EmptyData,
  EmptyCart,
  EmptyNotification,
  EmptyFile,
  EmptyMessage,
  EmptyUser,
  EmptyNetwork,
};
