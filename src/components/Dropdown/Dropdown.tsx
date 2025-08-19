import React from "react";
import { clsx } from "clsx";

export interface DropdownItem {
  /**
   * ID unik untuk item
   */
  id: string;
  /**
   * Label item
   */
  label: string;
  /**
   * Icon untuk item (opsional)
   */
  icon?: React.ReactNode;
  /**
   * Apakah item disabled
   */
  disabled?: boolean;
  /**
   * Apakah item adalah divider
   */
  divider?: boolean;
  /**
   * Callback ketika item diklik
   */
  onClick?: () => void;
}

export interface DropdownProps {
  /**
   * Items dropdown
   */
  items: DropdownItem[];
  /**
   * Trigger element
   */
  trigger: React.ReactNode;
  /**
   * Placement dropdown
   */
  placement?:
    | "bottom-start"
    | "bottom-end"
    | "top-start"
    | "top-end"
    | "bottom-center"
    | "top-center";
  /**
   * Ukuran dropdown
   */
  size?: "sm" | "md" | "lg";
  /**
   * Apakah dropdown disabled
   */
  disabled?: boolean;
  /**
   * Custom className untuk dropdown
   */
  className?: string;
  /**
   * Custom className untuk trigger
   */
  triggerClassName?: string;
  /**
   * Callback ketika dropdown dibuka/ditutup
   */
  onToggle?: (isOpen: boolean) => void;
  /**
   * Apakah dropdown terbuka secara controlled
   */
  isOpen?: boolean;
  /**
   * Apakah close on click item
   */
  closeOnClick?: boolean;
}

const dropdownSizes = {
  sm: {
    menu: "min-w-32 text-sm",
    item: "px-2 py-1.5 text-sm",
    divider: "my-1",
  },
  md: {
    menu: "min-w-40 text-base",
    item: "px-3 py-2 text-base",
    divider: "my-1.5",
  },
  lg: {
    menu: "min-w-48 text-lg",
    item: "px-4 py-3 text-lg",
    divider: "my-2",
  },
};

const dropdownPlacements = {
  "bottom-start": "top-full left-0 mt-1",
  "bottom-end": "top-full right-0 mt-1",
  "bottom-center": "top-full left-1/2 transform -translate-x-1/2 mt-1",
  "top-start": "bottom-full left-0 mb-1",
  "top-end": "bottom-full right-0 mb-1",
  "top-center": "bottom-full left-1/2 transform -translate-x-1/2 mb-1",
};

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      items,
      trigger,
      placement = "bottom-start",
      size = "md",
      disabled = false,
      className,
      triggerClassName,
      onToggle,
      isOpen: controlledIsOpen,
      closeOnClick = true,
      ...props
    },
    ref
  ) => {
    const [internalIsOpen, setInternalIsOpen] = React.useState(false);
    const [focusedIndex, setFocusedIndex] = React.useState(-1);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const isOpen =
      controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

    // Handle click outside to close dropdown
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          if (controlledIsOpen === undefined) {
            setInternalIsOpen(false);
          }
          onToggle?.(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
          document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, controlledIsOpen, onToggle]);

    // Handle escape key
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!isOpen) return;

        switch (event.key) {
          case "Escape":
            event.preventDefault();
            if (controlledIsOpen === undefined) {
              setInternalIsOpen(false);
            }
            onToggle?.(false);
            setFocusedIndex(-1);
            break;
          case "ArrowDown":
            event.preventDefault();
            setFocusedIndex((prev) => {
              const enabledItems = items.filter(
                (item) => !item.disabled && !item.divider
              );
              return prev < enabledItems.length - 1 ? prev + 1 : 0;
            });
            break;
          case "ArrowUp":
            event.preventDefault();
            setFocusedIndex((prev) => {
              const enabledItems = items.filter(
                (item) => !item.disabled && !item.divider
              );
              return prev > 0 ? prev - 1 : enabledItems.length - 1;
            });
            break;
          case "Enter":
          case " ":
            event.preventDefault();
            const enabledItems = items.filter(
              (item) => !item.disabled && !item.divider
            );
            const focusedItem = enabledItems[focusedIndex];
            if (focusedItem) {
              focusedItem.onClick?.();
              if (closeOnClick && controlledIsOpen === undefined) {
                setInternalIsOpen(false);
              }
              if (closeOnClick) {
                onToggle?.(false);
              }
            }
            break;
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }
    }, [isOpen, focusedIndex, items, closeOnClick, controlledIsOpen, onToggle]);

    const handleToggle = () => {
      if (disabled) return;

      const newIsOpen = !isOpen;
      if (controlledIsOpen === undefined) {
        setInternalIsOpen(newIsOpen);
      }
      onToggle?.(newIsOpen);

      if (!newIsOpen) {
        setFocusedIndex(-1);
      }
    };

    const handleItemClick = (item: DropdownItem) => {
      if (item.disabled) return;

      item.onClick?.();

      if (closeOnClick && controlledIsOpen === undefined) {
        setInternalIsOpen(false);
      }
      if (closeOnClick) {
        onToggle?.(false);
      }
      setFocusedIndex(-1);
    };

    const enabledItems = items.filter(
      (item) => !item.disabled && !item.divider
    );

    return (
      <div
        ref={ref}
        className={clsx("dropdown relative inline-block", className)}
        {...props}
      >
        {/* Trigger */}
        <div
          ref={dropdownRef}
          className={clsx(
            "dropdown-trigger cursor-pointer",
            disabled && "cursor-not-allowed opacity-50",
            triggerClassName
          )}
          onClick={handleToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToggle();
            }
          }}
          tabIndex={disabled ? -1 : 0}
          role="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {trigger}
        </div>

        {/* Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className={clsx(
              // Base styles
              "absolute z-50 bg-white border border-secondary-200 rounded-lg shadow-lg py-1",
              "transition-all duration-200 ease-out",
              "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",

              // Size styles
              dropdownSizes[size].menu,

              // Placement styles
              dropdownPlacements[placement]
            )}
            role="menu"
            aria-orientation="vertical"
          >
            {items.map((item, index) => {
              if (item.divider) {
                return (
                  <div
                    key={item.id}
                    className={clsx(
                      "border-t border-secondary-200",
                      dropdownSizes[size].divider
                    )}
                    role="separator"
                  />
                );
              }

              const enabledIndex = enabledItems.findIndex(
                (enabledItem) => enabledItem.id === item.id
              );
              const isFocused = enabledIndex === focusedIndex;

              return (
                <div
                  key={item.id}
                  className={clsx(
                    // Base styles
                    "flex items-center gap-2 cursor-pointer transition-colors duration-150",
                    dropdownSizes[size].item,

                    // State styles
                    item.disabled
                      ? "text-secondary-400 cursor-not-allowed"
                      : "text-secondary-700 hover:bg-secondary-50 hover:text-secondary-900",

                    // Focus styles
                    isFocused &&
                      !item.disabled &&
                      "bg-secondary-100 text-secondary-900"
                  )}
                  onClick={() => handleItemClick(item)}
                  role="menuitem"
                  tabIndex={-1}
                  aria-disabled={item.disabled}
                >
                  {/* Icon */}
                  {item.icon && (
                    <span className="flex-shrink-0 w-4 h-4">{item.icon}</span>
                  )}

                  {/* Label */}
                  <span className="flex-1 truncate">{item.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
