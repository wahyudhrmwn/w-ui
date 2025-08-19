import React from "react";
import { clsx } from "clsx";

export interface BreadcrumbItem {
  /**
   * Label yang ditampilkan
   */
  label: string;
  /**
   * URL/href untuk navigasi
   */
  href?: string;
  /**
   * Apakah item ini adalah current/aktif
   */
  current?: boolean;
  /**
   * Custom icon
   */
  icon?: React.ReactNode;
  /**
   * Callback click handler
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface BreadcrumbProps {
  /**
   * Array item breadcrumb
   */
  items: BreadcrumbItem[];
  /**
   * Custom separator
   */
  separator?: React.ReactNode;
  /**
   * Ukuran breadcrumb
   */
  size?: "sm" | "md" | "lg";
  /**
   * Maksimal item yang ditampilkan sebelum collapse
   */
  maxItems?: number;
  /**
   * Custom className untuk container
   */
  className?: string;
  /**
   * Custom className untuk item
   */
  itemClassName?: string;
  /**
   * Apakah menampilkan icon home untuk item pertama
   */
  showHomeIcon?: boolean;
}

const breadcrumbSizes = {
  sm: {
    text: "text-xs",
    spacing: "space-x-1",
    padding: "px-2 py-1",
    icon: "w-3 h-3",
  },
  md: {
    text: "text-sm",
    spacing: "space-x-2",
    padding: "px-3 py-1.5",
    icon: "w-4 h-4",
  },
  lg: {
    text: "text-base",
    spacing: "space-x-3",
    padding: "px-4 py-2",
    icon: "w-5 h-5",
  },
};

// Default icons
const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const DotsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </svg>
);

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      items,
      separator,
      size = "md",
      maxItems,
      className,
      itemClassName,
      showHomeIcon = false,
      ...props
    },
    ref
  ) => {
    // Process items for collapsing
    const processedItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) {
        return items;
      }

      // Always show first and last items, collapse middle items
      const firstItem = items[0];
      const lastItems = items.slice(-(maxItems - 2));

      return [
        firstItem,
        {
          label: "...",
          current: false,
          icon: <DotsIcon className={breadcrumbSizes[size].icon} />,
        },
        ...lastItems,
      ];
    }, [items, maxItems, size]);

    const defaultSeparator = (
      <ChevronRightIcon
        className={clsx(breadcrumbSizes[size].icon, "text-secondary-400")}
      />
    );

    const renderItem = (item: BreadcrumbItem, index: number) => {
      const isLast = index === processedItems.length - 1;
      const isFirst = index === 0;
      const isCollapsedIndicator = item.label === "...";

      // Choose icon
      let itemIcon = item.icon;
      if (showHomeIcon && isFirst && !item.icon) {
        itemIcon = <HomeIcon className={breadcrumbSizes[size].icon} />;
      }

      const content = (
        <>
          {itemIcon && <span className="flex-shrink-0">{itemIcon}</span>}
          <span className={clsx(itemIcon && "ml-1")}>{item.label}</span>
        </>
      );

      const baseClasses = clsx(
        "inline-flex items-center transition-colors duration-200",
        breadcrumbSizes[size].text,
        breadcrumbSizes[size].padding,
        "rounded-md",
        itemClassName
      );

      if (isCollapsedIndicator) {
        return (
          <span
            key={`collapsed-${index}`}
            className={clsx(baseClasses, "text-secondary-400 cursor-default")}
          >
            {content}
          </span>
        );
      }

      if (item.current || isLast) {
        return (
          <span
            key={item.label}
            className={clsx(
              baseClasses,
              "text-secondary-900 font-medium cursor-default",
              "bg-secondary-100"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {content}
          </span>
        );
      }

      if (item.href) {
        return (
          <a
            key={item.label}
            href={item.href}
            onClick={item.onClick}
            className={clsx(
              baseClasses,
              "text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
            )}
          >
            {content}
          </a>
        );
      }

      if (item.onClick) {
        return (
          <button
            key={item.label}
            onClick={item.onClick}
            className={clsx(
              baseClasses,
              "text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
            )}
          >
            {content}
          </button>
        );
      }

      return (
        <span
          key={item.label}
          className={clsx(baseClasses, "text-secondary-600")}
        >
          {content}
        </span>
      );
    };

    return (
      <nav
        ref={ref}
        className={clsx("breadcrumb", className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol
          className={clsx("flex items-center", breadcrumbSizes[size].spacing)}
        >
          {processedItems.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center">
              {renderItem(item, index)}

              {/* Separator */}
              {index < processedItems.length - 1 && (
                <span
                  className={clsx(
                    "flex items-center justify-center",
                    breadcrumbSizes[size].spacing.replace("space-x-", "mx-")
                  )}
                  aria-hidden="true"
                >
                  {separator || defaultSeparator}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";
