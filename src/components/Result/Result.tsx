import React from "react";
import clsx from "clsx";

export interface ResultProps {
  // Status and content
  status?: "success" | "error" | "info" | "warning" | "404" | "403" | "500";
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  icon?: React.ReactNode;
  extra?: React.ReactNode;

  // Styling
  size?: "sm" | "md" | "lg";

  className?: string;
  style?: React.CSSProperties;
}

const resultSizes = {
  sm: {
    container: "p-6",
    icon: "w-12 h-12",
    title: "text-lg font-semibold",
    subtitle: "text-sm",
    spacing: "space-y-3",
  },
  md: {
    container: "p-12",
    icon: "w-16 h-16",
    title: "text-2xl font-bold",
    subtitle: "text-base",
    spacing: "space-y-6",
  },
  lg: {
    container: "p-16",
    icon: "w-20 h-20",
    title: "text-3xl font-bold",
    subtitle: "text-lg",
    spacing: "space-y-8",
  },
};

// Built-in icons for different statuses
const StatusIcons = {
  success: (className: string) => (
    <div
      className={clsx(
        "bg-green-100 rounded-full flex items-center justify-center",
        className
      )}
    >
      <svg
        className="w-1/2 h-1/2 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  ),

  error: (className: string) => (
    <div
      className={clsx(
        "bg-red-100 rounded-full flex items-center justify-center",
        className
      )}
    >
      <svg
        className="w-1/2 h-1/2 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  ),

  info: (className: string) => (
    <div
      className={clsx(
        "bg-blue-100 rounded-full flex items-center justify-center",
        className
      )}
    >
      <svg
        className="w-1/2 h-1/2 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  ),

  warning: (className: string) => (
    <div
      className={clsx(
        "bg-yellow-100 rounded-full flex items-center justify-center",
        className
      )}
    >
      <svg
        className="w-1/2 h-1/2 text-yellow-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.634 0L4.18 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    </div>
  ),

  "404": (className: string) => (
    <div
      className={clsx(
        "bg-secondary-100 rounded-full flex items-center justify-center",
        className
      )}
    >
      <div className="text-center">
        <div className="text-3xl font-bold text-secondary-600">404</div>
      </div>
    </div>
  ),

  "403": (className: string) => (
    <div
      className={clsx(
        "bg-red-100 rounded-full flex items-center justify-center",
        className
      )}
    >
      <svg
        className="w-1/2 h-1/2 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    </div>
  ),

  "500": (className: string) => (
    <div
      className={clsx(
        "bg-red-100 rounded-full flex items-center justify-center",
        className
      )}
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-red-600">500</div>
      </div>
    </div>
  ),
};

// Default content for different statuses
const defaultContent = {
  success: {
    title: "Success!",
    subTitle: "Your action was completed successfully.",
  },
  error: {
    title: "Something went wrong",
    subTitle: "An error occurred while processing your request.",
  },
  info: {
    title: "Information",
    subTitle: "Here's some important information for you.",
  },
  warning: {
    title: "Warning",
    subTitle: "Please pay attention to this important notice.",
  },
  "404": {
    title: "404 - Page Not Found",
    subTitle: "Sorry, the page you visited does not exist.",
  },
  "403": {
    title: "403 - Forbidden",
    subTitle: "Sorry, you don't have permission to access this resource.",
  },
  "500": {
    title: "500 - Internal Server Error",
    subTitle: "Something went wrong on our end. Please try again later.",
  },
};

// Status color mapping
const statusColors = {
  success: "text-green-700",
  error: "text-red-700",
  info: "text-blue-700",
  warning: "text-yellow-700",
  "404": "text-secondary-700",
  "403": "text-red-700",
  "500": "text-red-700",
};

export const Result: React.FC<ResultProps> = ({
  status = "info",
  title,
  subTitle,
  icon,
  extra,
  size = "md",
  className,
  style,
  ...props
}) => {
  const sizeClasses = resultSizes[size];

  // Use provided content or fallback to defaults
  const displayTitle = title ?? defaultContent[status].title;
  const displaySubTitle = subTitle ?? defaultContent[status].subTitle;
  const displayIcon = icon ?? StatusIcons[status](sizeClasses.icon);

  const containerClasses = clsx(
    "flex flex-col items-center justify-center text-center",
    sizeClasses.container,
    sizeClasses.spacing,
    className
  );

  const titleColor = statusColors[status];

  return (
    <div className={containerClasses} style={style} {...props}>
      {/* Icon */}
      {displayIcon && <div className="flex-shrink-0">{displayIcon}</div>}

      {/* Title */}
      {displayTitle && (
        <h1 className={clsx(sizeClasses.title, titleColor, "m-0")}>
          {displayTitle}
        </h1>
      )}

      {/* Subtitle */}
      {displaySubTitle && (
        <p
          className={clsx(
            sizeClasses.subtitle,
            "text-secondary-600 m-0 max-w-md"
          )}
        >
          {displaySubTitle}
        </p>
      )}

      {/* Extra content (typically actions) */}
      {extra && <div className="mt-6">{extra}</div>}
    </div>
  );
};

// Preset result components for common use cases
export const ResultSuccess: React.FC<Omit<ResultProps, "status">> = (props) => (
  <Result {...props} status="success" />
);

export const ResultError: React.FC<Omit<ResultProps, "status">> = (props) => (
  <Result {...props} status="error" />
);

export const ResultInfo: React.FC<Omit<ResultProps, "status">> = (props) => (
  <Result {...props} status="info" />
);

export const ResultWarning: React.FC<Omit<ResultProps, "status">> = (props) => (
  <Result {...props} status="warning" />
);

export const Result404: React.FC<Omit<ResultProps, "status">> = (props) => (
  <Result {...props} status="404" />
);

export const Result403: React.FC<Omit<ResultProps, "status">> = (props) => (
  <Result {...props} status="403" />
);

export const Result500: React.FC<Omit<ResultProps, "status">> = (props) => (
  <Result {...props} status="500" />
);

// Export everything under Result namespace
export const ResultComponents = {
  Result,
  ResultSuccess,
  ResultError,
  ResultInfo,
  ResultWarning,
  Result404,
  Result403,
  Result500,
};
