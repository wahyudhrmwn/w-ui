"use client";

import React from "react";
import { clsx } from "clsx";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  /**
   * Array data item accordion
   */
  items: AccordionItemData[];
  /**
   * Item yang terbuka secara default
   */
  defaultOpen?: string | string[];
  /**
   * Apakah hanya satu item yang bisa terbuka (exclusive)
   */
  exclusive?: boolean;
  /**
   * Ukuran accordion
   */
  size?: "sm" | "md" | "lg";
  /**
   * Variant styling
   */
  variant?: "default" | "bordered" | "filled";
  /**
   * Callback ketika item dibuka/ditutup
   */
  onChange?: (openItems: string[]) => void;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom icon untuk toggle
   */
  toggleIcon?: React.ReactNode;
  /**
   * Posisi icon toggle
   */
  iconPosition?: "left" | "right";
}

export interface AccordionItemProps {
  /**
   * Data item
   */
  item: AccordionItemData;
  /**
   * Apakah item terbuka
   */
  isOpen: boolean;
  /**
   * Callback toggle
   */
  onToggle: () => void;
  /**
   * Ukuran accordion
   */
  size?: "sm" | "md" | "lg";
  /**
   * Variant styling
   */
  variant?: "default" | "bordered" | "filled";
  /**
   * Custom toggle icon
   */
  toggleIcon?: React.ReactNode;
  /**
   * Posisi icon
   */
  iconPosition?: "left" | "right";
  /**
   * Custom className
   */
  className?: string;
}

const accordionSizes = {
  sm: {
    header: "px-3 py-2 text-sm",
    content: "px-3 pb-3 text-sm",
    icon: "w-4 h-4",
  },
  md: {
    header: "px-4 py-3 text-base",
    content: "px-4 pb-4 text-base",
    icon: "w-5 h-5",
  },
  lg: {
    header: "px-6 py-4 text-lg",
    content: "px-6 pb-6 text-lg",
    icon: "w-6 h-6",
  },
};

const accordionVariants = {
  default: {
    container: "bg-white",
    header: "bg-white hover:bg-secondary-50 border-b border-secondary-200",
    headerOpen: "bg-secondary-50",
    content: "bg-white",
  },
  bordered: {
    container: "border border-secondary-200 rounded-lg overflow-hidden",
    header:
      "bg-white hover:bg-secondary-50 border-b border-secondary-200 last:border-b-0",
    headerOpen: "bg-secondary-50 border-b border-secondary-200",
    content: "bg-white border-b border-secondary-200 last:border-b-0",
  },
  filled: {
    container: "bg-secondary-50 rounded-lg overflow-hidden",
    header:
      "bg-secondary-100 hover:bg-secondary-200 border-b border-secondary-200 last:border-b-0",
    headerOpen: "bg-secondary-200 border-b border-secondary-200",
    content: "bg-white border-b border-secondary-200 last:border-b-0",
  },
};

// Default chevron icon
const ChevronDownIcon = ({ className }: { className?: string }) => (
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
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Single Accordion Item Component
export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(
  (
    {
      item,
      isOpen,
      onToggle,
      size = "md",
      variant = "default",
      toggleIcon,
      iconPosition = "right",
      className,
      ...props
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = React.useState<number>(0);

    React.useEffect(() => {
      if (contentRef.current) {
        setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
      }
    }, [isOpen, item.content]);

    const handleToggle = () => {
      if (!item.disabled) {
        onToggle();
      }
    };

    const icon = toggleIcon || (
      <ChevronDownIcon className={accordionSizes[size].icon} />
    );

    return (
      <div ref={ref} className={clsx("accordion-item", className)} {...props}>
        {/* Header */}
        <button
          onClick={handleToggle}
          disabled={item.disabled}
          className={clsx(
            // Base styles
            "w-full flex items-center justify-between text-left font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset",

            // Size styles
            accordionSizes[size].header,

            // Variant styles
            isOpen
              ? accordionVariants[variant].headerOpen
              : accordionVariants[variant].header,

            // Disabled styles
            item.disabled && "opacity-50 cursor-not-allowed",

            // Icon position styles
            iconPosition === "left" && "flex-row-reverse"
          )}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${item.id}`}
        >
          <span
            className={clsx(iconPosition === "left" && "text-right flex-1")}
          >
            {item.title}
          </span>

          <span
            className={clsx(
              "flex-shrink-0 transition-transform duration-200",
              iconPosition === "left" ? "mr-2" : "ml-2",
              isOpen && "transform rotate-180"
            )}
          >
            {icon}
          </span>
        </button>

        {/* Content */}
        <div
          style={{ height: `${contentHeight}px` }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div
            ref={contentRef}
            id={`accordion-content-${item.id}`}
            className={clsx(
              accordionSizes[size].content,
              accordionVariants[variant].content,
              "text-secondary-700"
            )}
          >
            {item.content}
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

// Main Accordion Component
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      defaultOpen = [],
      exclusive = false,
      size = "md",
      variant = "default",
      onChange,
      className,
      toggleIcon,
      iconPosition = "right",
      ...props
    },
    ref
  ) => {
    const [openItems, setOpenItems] = React.useState<string[]>(() => {
      if (typeof defaultOpen === "string") {
        return [defaultOpen];
      }
      return Array.isArray(defaultOpen) ? defaultOpen : [];
    });

    const handleToggle = React.useCallback(
      (itemId: string) => {
        setOpenItems((prev) => {
          let newOpenItems: string[];

          if (exclusive) {
            // Exclusive mode: only one item can be open
            newOpenItems = prev.includes(itemId) ? [] : [itemId];
          } else {
            // Multiple mode: toggle the item
            newOpenItems = prev.includes(itemId)
              ? prev.filter((id) => id !== itemId)
              : [...prev, itemId];
          }

          onChange?.(newOpenItems);
          return newOpenItems;
        });
      },
      [exclusive, onChange]
    );

    return (
      <div
        ref={ref}
        className={clsx(
          "accordion",
          accordionVariants[variant].container,
          className
        )}
        {...props}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItems.includes(item.id)}
            onToggle={() => handleToggle(item.id)}
            size={size}
            variant={variant}
            toggleIcon={toggleIcon}
            iconPosition={iconPosition}
            className={clsx(
              variant === "default" &&
                index !== items.length - 1 &&
                "border-b border-secondary-200"
            )}
          />
        ))}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";
