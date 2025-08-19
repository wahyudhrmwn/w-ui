import React from "react";
import { clsx } from "clsx";

export interface PaginationProps {
  /**
   * Halaman saat ini (1-based)
   */
  currentPage: number;
  /**
   * Total halaman
   */
  totalPages: number;
  /**
   * Callback ketika halaman berubah
   */
  onPageChange: (page: number) => void;
  /**
   * Jumlah halaman yang ditampilkan di sekitar halaman aktif
   */
  siblingCount?: number;
  /**
   * Ukuran pagination
   */
  size?: "sm" | "md" | "lg";
  /**
   * Variant styling
   */
  variant?: "default" | "outlined" | "minimal";
  /**
   * Apakah menampilkan tombol Previous/Next
   */
  showPrevNext?: boolean;
  /**
   * Apakah menampilkan tombol First/Last
   */
  showFirstLast?: boolean;
  /**
   * Label untuk tombol navigasi
   */
  labels?: {
    previous?: string;
    next?: string;
    first?: string;
    last?: string;
  };
  /**
   * Custom className
   */
  className?: string;
  /**
   * Apakah pagination disabled
   */
  disabled?: boolean;
}

const paginationSizes = {
  sm: {
    button: "px-2 py-1 text-xs min-w-[28px] h-7",
    icon: "w-3 h-3",
  },
  md: {
    button: "px-3 py-2 text-sm min-w-[36px] h-9",
    icon: "w-4 h-4",
  },
  lg: {
    button: "px-4 py-3 text-base min-w-[44px] h-11",
    icon: "w-5 h-5",
  },
};

const paginationVariants = {
  default: {
    button:
      "bg-white border border-secondary-300 text-secondary-700 hover:bg-secondary-50 hover:border-secondary-400",
    active:
      "bg-primary-600 border-primary-600 text-white hover:bg-primary-700 hover:border-primary-700",
    disabled:
      "bg-secondary-100 border-secondary-200 text-secondary-400 cursor-not-allowed",
  },
  outlined: {
    button:
      "bg-transparent border border-secondary-300 text-secondary-700 hover:bg-secondary-50 hover:border-secondary-400",
    active:
      "bg-transparent border-primary-600 text-primary-600 hover:bg-primary-50",
    disabled:
      "bg-transparent border-secondary-200 text-secondary-400 cursor-not-allowed",
  },
  minimal: {
    button:
      "bg-transparent border-none text-secondary-700 hover:bg-secondary-100",
    active: "bg-primary-100 text-primary-700 font-medium",
    disabled: "bg-transparent text-secondary-400 cursor-not-allowed",
  },
};

// Navigation icons
const ChevronLeftIcon = ({ className }: { className?: string }) => (
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
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

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

const ChevronsLeftIcon = ({ className }: { className?: string }) => (
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
      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
    />
  </svg>
);

const ChevronsRightIcon = ({ className }: { className?: string }) => (
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
      d="M13 5l7 7-7 7M5 5l7 7-7 7"
    />
  </svg>
);

// Generate page numbers with ellipsis
const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | "ellipsis")[] => {
  const totalNumbers = siblingCount * 2 + 5; // siblings + first + last + current + 2 ellipsis

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, "ellipsis", totalPages];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [1, "ellipsis", ...rightRange];
  }

  if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [1, "ellipsis", ...middleRange, "ellipsis", totalPages];
  }

  return [];
};

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      size = "md",
      variant = "default",
      showPrevNext = true,
      showFirstLast = false,
      labels = {},
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const {
      previous = "Previous",
      next = "Next",
      first = "First",
      last = "Last",
    } = labels;

    const pageNumbers = generatePageNumbers(
      currentPage,
      totalPages,
      siblingCount
    );

    const canGoPrevious = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    const handlePageClick = (page: number) => {
      if (
        !disabled &&
        page !== currentPage &&
        page >= 1 &&
        page <= totalPages
      ) {
        onPageChange(page);
      }
    };

    const renderButton = (
      content: React.ReactNode,
      page?: number,
      isActive = false,
      isDisabled = false,
      ariaLabel?: string
    ) => {
      const buttonDisabled = disabled || isDisabled;

      return (
        <button
          onClick={() => page && handlePageClick(page)}
          disabled={buttonDisabled}
          aria-label={ariaLabel}
          aria-current={isActive ? "page" : undefined}
          className={clsx(
            // Base styles
            "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded",

            // Size styles
            paginationSizes[size].button,

            // Variant styles based on state
            buttonDisabled
              ? paginationVariants[variant].disabled
              : isActive
              ? paginationVariants[variant].active
              : paginationVariants[variant].button
          )}
        >
          {content}
        </button>
      );
    };

    return (
      <nav
        ref={ref}
        className={clsx("pagination flex items-center space-x-1", className)}
        aria-label="Pagination Navigation"
        {...props}
      >
        {/* First page button */}
        {showFirstLast &&
          renderButton(
            <span className="flex items-center">
              <ChevronsLeftIcon className={paginationSizes[size].icon} />
              <span className="ml-1 hidden sm:inline">{first}</span>
            </span>,
            1,
            false,
            !canGoPrevious,
            `Go to first page`
          )}

        {/* Previous button */}
        {showPrevNext &&
          renderButton(
            <span className="flex items-center">
              <ChevronLeftIcon className={paginationSizes[size].icon} />
              <span className="ml-1 hidden sm:inline">{previous}</span>
            </span>,
            currentPage - 1,
            false,
            !canGoPrevious,
            `Go to previous page`
          )}

        {/* Page numbers */}
        {pageNumbers.map((pageNumber, index) => {
          if (pageNumber === "ellipsis") {
            return (
              <span
                key={`ellipsis-${index}`}
                className={clsx(
                  "inline-flex items-center justify-center text-secondary-400",
                  paginationSizes[size].button
                )}
                aria-hidden="true"
              >
                ...
              </span>
            );
          }

          const isActive = pageNumber === currentPage;

          return (
            <span key={pageNumber}>
              {renderButton(
                pageNumber,
                pageNumber,
                isActive,
                false,
                `Go to page ${pageNumber}`
              )}
            </span>
          );
        })}

        {/* Next button */}
        {showPrevNext &&
          renderButton(
            <span className="flex items-center">
              <span className="mr-1 hidden sm:inline">{next}</span>
              <ChevronRightIcon className={paginationSizes[size].icon} />
            </span>,
            currentPage + 1,
            false,
            !canGoNext,
            `Go to next page`
          )}

        {/* Last page button */}
        {showFirstLast &&
          renderButton(
            <span className="flex items-center">
              <span className="mr-1 hidden sm:inline">{last}</span>
              <ChevronsRightIcon className={paginationSizes[size].icon} />
            </span>,
            totalPages,
            false,
            !canGoNext,
            `Go to last page`
          )}
      </nav>
    );
  }
);

Pagination.displayName = "Pagination";

// Simple pagination component for basic use cases
export interface SimplePaginationProps {
  /**
   * Halaman saat ini
   */
  currentPage: number;
  /**
   * Total halaman
   */
  totalPages: number;
  /**
   * Callback ketika halaman berubah
   */
  onPageChange: (page: number) => void;
  /**
   * Ukuran
   */
  size?: "sm" | "md" | "lg";
  /**
   * Custom className
   */
  className?: string;
  /**
   * Apakah disabled
   */
  disabled?: boolean;
}

export const SimplePagination = React.forwardRef<
  HTMLDivElement,
  SimplePaginationProps
>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      size = "md",
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const canGoPrevious = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    const handlePrevious = () => {
      if (!disabled && canGoPrevious) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (!disabled && canGoNext) {
        onPageChange(currentPage + 1);
      }
    };

    return (
      <nav
        ref={ref}
        className={clsx(
          "flex items-center justify-between px-4 py-3 bg-white border border-secondary-200 rounded-lg",
          className
        )}
        {...props}
      >
        <button
          onClick={handlePrevious}
          disabled={disabled || !canGoPrevious}
          className={clsx(
            "inline-flex items-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded",
            paginationSizes[size].button,
            disabled || !canGoPrevious
              ? "text-secondary-400 cursor-not-allowed"
              : "text-secondary-700 hover:text-secondary-900"
          )}
        >
          <ChevronLeftIcon
            className={clsx(paginationSizes[size].icon, "mr-1")}
          />
          Previous
        </button>

        <span
          className={clsx(
            "font-medium text-secondary-700",
            paginationSizes[size].button.split(" ")[2]
          )}
        >
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={disabled || !canGoNext}
          className={clsx(
            "inline-flex items-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded",
            paginationSizes[size].button,
            disabled || !canGoNext
              ? "text-secondary-400 cursor-not-allowed"
              : "text-secondary-700 hover:text-secondary-900"
          )}
        >
          Next
          <ChevronRightIcon
            className={clsx(paginationSizes[size].icon, "ml-1")}
          />
        </button>
      </nav>
    );
  }
);

SimplePagination.displayName = "SimplePagination";
