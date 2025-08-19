"use client";

import React from "react";
import { clsx } from "clsx";

export interface TabItem {
  id: string;
  label: string;
  content?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface TabsProps {
  /**
   * Array tab items
   */
  items: TabItem[];
  /**
   * Tab yang aktif saat ini
   */
  activeTab?: string;
  /**
   * Default tab yang aktif
   */
  defaultTab?: string;
  /**
   * Callback ketika tab berubah
   */
  onChange?: (tabId: string) => void;
  /**
   * Variant styling untuk tabs
   */
  variant?: "default" | "pills" | "underline" | "bordered";
  /**
   * Ukuran tabs
   */
  size?: "sm" | "md" | "lg";
  /**
   * Orientasi tabs
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Posisi konten tabs
   */
  contentPosition?: "below" | "right";
  /**
   * Custom className untuk container
   */
  className?: string;
  /**
   * Custom className untuk tab list
   */
  tabListClassName?: string;
  /**
   * Custom className untuk tab content
   */
  tabContentClassName?: string;
  /**
   * Apakah tabs bisa di-scroll
   */
  scrollable?: boolean;
}

const tabVariants = {
  default: {
    tab: "px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-800 hover:bg-secondary-50 rounded-md transition-colors duration-200",
    activeTab: "bg-primary-100 text-primary-700 hover:bg-primary-200",
    indicator: "",
  },
  pills: {
    tab: "px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100 rounded-full transition-colors duration-200",
    activeTab: "bg-primary-600 text-white hover:bg-primary-700",
    indicator: "",
  },
  underline: {
    tab: "px-4 py-3 text-sm font-medium text-secondary-600 hover:text-secondary-800 border-b-2 border-transparent transition-colors duration-200",
    activeTab: "text-primary-600 border-primary-600",
    indicator: "",
  },
  bordered: {
    tab: "px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-800 border border-secondary-300 bg-secondary-50 transition-colors duration-200",
    activeTab: "bg-white text-primary-600 border-primary-300 relative",
    indicator: "",
  },
};

const tabSizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      activeTab,
      defaultTab,
      onChange,
      variant = "default",
      size = "md",
      orientation = "horizontal",
      contentPosition = "below",
      className,
      tabListClassName,
      tabContentClassName,
      scrollable = false,
      ...props
    },
    ref
  ) => {
    const [internalActiveTab, setInternalActiveTab] = React.useState(
      activeTab || defaultTab || items[0]?.id || ""
    );

    const currentActiveTab = activeTab || internalActiveTab;

    const handleTabChange = (tabId: string) => {
      const tab = items.find((item) => item.id === tabId);
      if (tab?.disabled) return;

      if (activeTab === undefined) {
        setInternalActiveTab(tabId);
      }

      if (onChange) {
        onChange(tabId);
      }
    };

    const activeTabContent = items.find(
      (item) => item.id === currentActiveTab
    )?.content;

    const renderTab = (item: TabItem) => {
      const isActive = item.id === currentActiveTab;

      return (
        <button
          key={item.id}
          onClick={() => handleTabChange(item.id)}
          disabled={item.disabled}
          className={clsx(
            // Base styles
            "relative inline-flex items-center justify-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",

            // Size styles
            size === "sm"
              ? tabSizes.sm
              : size === "md"
              ? tabSizes.md
              : tabSizes.lg,

            // Variant styles
            isActive
              ? clsx(tabVariants[variant].tab, tabVariants[variant].activeTab)
              : tabVariants[variant].tab,

            // Disabled styles
            item.disabled && "opacity-50 cursor-not-allowed",

            // Bordered variant specific styles
            variant === "bordered" &&
              !isActive &&
              "first:rounded-l-md last:rounded-r-md",
            variant === "bordered" && !isActive && "-ml-px first:ml-0",
            variant === "bordered" && isActive && "z-10"
          )}
        >
          {item.icon && (
            <span
              className={clsx("mr-2", size === "sm" ? "w-3 h-3" : "w-4 h-4")}
            >
              {item.icon}
            </span>
          )}

          <span>{item.label}</span>

          {item.badge && (
            <span
              className={clsx(
                "ml-2 px-1.5 py-0.5 text-xs rounded-full",
                isActive && variant === "pills"
                  ? "bg-white/20 text-white"
                  : "bg-secondary-200 text-secondary-700"
              )}
            >
              {item.badge}
            </span>
          )}
        </button>
      );
    };

    const tabList = (
      <div
        className={clsx(
          // Base styles
          "flex",

          // Orientation styles
          orientation === "horizontal" ? "flex-row" : "flex-col",

          // Scrollable styles
          scrollable && orientation === "horizontal" && "overflow-x-auto",
          scrollable && orientation === "vertical" && "overflow-y-auto",

          // Variant specific styles
          variant === "underline" &&
            orientation === "horizontal" &&
            "border-b border-secondary-200",
          variant === "bordered" && "rounded-md",

          // Custom className
          tabListClassName
        )}
        role="tablist"
        aria-orientation={orientation}
      >
        {items.map(renderTab)}
      </div>
    );

    const tabContent = activeTabContent && (
      <div
        className={clsx(
          "mt-4",
          orientation === "vertical" &&
            contentPosition === "right" &&
            "ml-4 mt-0",
          tabContentClassName
        )}
        role="tabpanel"
        tabIndex={0}
      >
        {activeTabContent}
      </div>
    );

    return (
      <div
        ref={ref}
        className={clsx(
          "w-full",
          orientation === "vertical" && "flex",
          className
        )}
        {...props}
      >
        {tabList}
        {tabContent}
      </div>
    );
  }
);

Tabs.displayName = "Tabs";
