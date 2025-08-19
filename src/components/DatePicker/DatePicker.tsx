import React from "react";
import { clsx } from "clsx";

export interface DatePickerProps {
  /**
   * Nilai tanggal saat ini
   */
  value?: Date;
  /**
   * Nilai default tanggal
   */
  defaultValue?: Date;
  /**
   * Callback ketika tanggal berubah
   */
  onChange?: (date: Date | null) => void;
  /**
   * Format tanggal yang ditampilkan
   */
  format?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Apakah disabled
   */
  disabled?: boolean;
  /**
   * Ukuran input
   */
  size?: "sm" | "md" | "lg";
  /**
   * Custom className
   */
  className?: string;
  /**
   * Tanggal minimum yang bisa dipilih
   */
  minDate?: Date;
  /**
   * Tanggal maksimum yang bisa dipilih
   */
  maxDate?: Date;
  /**
   * Array tanggal yang disabled
   */
  disabledDates?: Date[];
  /**
   * Apakah menampilkan tombol clear
   */
  allowClear?: boolean;
  /**
   * Apakah menampilkan today button
   */
  showToday?: boolean;
  /**
   * Custom className untuk picker
   */
  pickerClassName?: string;
}

const datePickerSizes = {
  sm: {
    input: "px-3 py-1.5 text-sm",
    icon: "w-4 h-4",
  },
  md: {
    input: "px-3 py-2 text-sm",
    icon: "w-5 h-5",
  },
  lg: {
    input: "px-4 py-3 text-base",
    icon: "w-5 h-5",
  },
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const formatDate = (date: Date, format: string = "MM/DD/YYYY"): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return format.replace("DD", day).replace("MM", month).replace("YYYY", year);
};

const isSameDay = (date1: Date | null, date2: Date | null): boolean => {
  if (!date1 || !date2) return false;
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const isDateDisabled = (
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[]
): boolean => {
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  if (disabledDates?.some((d) => isSameDay(date, d))) return true;
  return false;
};

const CalendarIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    className="w-5 h-5"
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

const ChevronRightIcon = () => (
  <svg
    className="w-5 h-5"
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

const XIcon = () => (
  <svg
    className="w-4 h-4"
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
);

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      format = "MM/DD/YYYY",
      placeholder = "Select date",
      disabled = false,
      size = "md",
      className,
      minDate,
      maxDate,
      disabledDates,
      allowClear = true,
      showToday = true,
      pickerClassName,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<Date | null>(
      defaultValue || null
    );
    const [isOpen, setIsOpen] = React.useState(false);
    const [viewDate, setViewDate] = React.useState(
      () => controlledValue || defaultValue || new Date()
    );
    const containerRef = React.useRef<HTMLDivElement>(null);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    const updateValue = (date: Date | null) => {
      if (!isControlled) {
        setInternalValue(date);
      }
      onChange?.(date);
    };

    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    }, [isOpen]);

    // Handle escape key
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEscape);
        return () => {
          document.removeEventListener("keydown", handleEscape);
        };
      }
    }, [isOpen]);

    const handleInputClick = () => {
      if (!disabled) {
        setIsOpen(true);
      }
    };

    const handleDateSelect = (date: Date) => {
      if (isDateDisabled(date, minDate, maxDate, disabledDates)) return;

      updateValue(date);
      setIsOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      updateValue(null);
    };

    const handleTodayClick = () => {
      const today = new Date();
      if (!isDateDisabled(today, minDate, maxDate, disabledDates)) {
        updateValue(today);
        setViewDate(today);
        setIsOpen(false);
      }
    };

    const navigateMonth = (direction: "prev" | "next") => {
      setViewDate((prev) => {
        const newDate = new Date(prev);
        if (direction === "prev") {
          newDate.setMonth(newDate.getMonth() - 1);
        } else {
          newDate.setMonth(newDate.getMonth() + 1);
        }
        return newDate;
      });
    };

    const navigateYear = (direction: "prev" | "next") => {
      setViewDate((prev) => {
        const newDate = new Date(prev);
        if (direction === "prev") {
          newDate.setFullYear(newDate.getFullYear() - 1);
        } else {
          newDate.setFullYear(newDate.getFullYear() + 1);
        }
        return newDate;
      });
    };

    const renderCalendar = () => {
      const year = viewDate.getFullYear();
      const month = viewDate.getMonth();
      const today = new Date();

      // Get first day of month and calculate starting position
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startingDayOfWeek = firstDay.getDay();
      const daysInMonth = lastDay.getDate();

      // Generate calendar dates
      const dates: (Date | null)[] = [];

      // Add empty cells for days before month starts
      for (let i = 0; i < startingDayOfWeek; i++) {
        dates.push(null);
      }

      // Add actual month dates
      for (let day = 1; day <= daysInMonth; day++) {
        dates.push(new Date(year, month, day));
      }

      return (
        <div className="grid grid-cols-7 gap-1">
          {/* Week day headers */}
          {weekDays.map((day) => (
            <div
              key={day}
              className="p-2 text-xs font-medium text-secondary-500 text-center"
            >
              {day}
            </div>
          ))}

          {/* Calendar dates */}
          {dates.map((date, index) => {
            if (!date) {
              return <div key={index} className="p-2" />;
            }

            const isToday = isSameDay(date, today);
            const isSelected = isSameDay(date, currentValue);
            const isDisabled = isDateDisabled(
              date,
              minDate,
              maxDate,
              disabledDates
            );

            return (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={isDisabled}
                className={clsx(
                  "p-2 text-sm rounded-md transition-colors duration-200",
                  "hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500",
                  isToday && "font-semibold text-primary-600",
                  isSelected &&
                    "bg-primary-600 text-white hover:bg-primary-700",
                  isDisabled &&
                    "text-secondary-300 cursor-not-allowed hover:bg-transparent"
                )}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      );
    };

    return (
      <div ref={containerRef} className="relative inline-block w-full">
        {/* Input */}
        <div
          className={clsx(
            "relative flex items-center border border-secondary-300 rounded-md bg-white transition-colors duration-200",
            "hover:border-secondary-400 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500",
            disabled && "bg-secondary-100 cursor-not-allowed opacity-60",
            className
          )}
          onClick={handleInputClick}
        >
          <input
            ref={ref}
            type="text"
            value={currentValue ? formatDate(currentValue, format) : ""}
            placeholder={placeholder}
            disabled={disabled}
            readOnly
            className={clsx(
              "flex-1 border-none bg-transparent outline-none cursor-pointer",
              datePickerSizes[size].input,
              disabled && "cursor-not-allowed"
            )}
            {...props}
          />

          {/* Icons */}
          <div className="flex items-center pr-3 space-x-1">
            {allowClear && currentValue && !disabled && (
              <button
                onClick={handleClear}
                className="text-secondary-400 hover:text-secondary-600 transition-colors"
              >
                <XIcon />
              </button>
            )}

            <div
              className={clsx("text-secondary-400", datePickerSizes[size].icon)}
            >
              <CalendarIcon />
            </div>
          </div>
        </div>

        {/* Calendar Dropdown */}
        {isOpen && (
          <div
            className={clsx(
              "absolute top-full left-0 mt-1 bg-white border border-secondary-300 rounded-lg shadow-lg z-50",
              "animate-in fade-in-0 zoom-in-95 duration-200",
              pickerClassName
            )}
            style={{ minWidth: "280px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-secondary-200">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => navigateYear("prev")}
                  className="p-1 text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 rounded"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={() => navigateMonth("prev")}
                  className="p-1 text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 rounded"
                >
                  <ChevronLeftIcon />
                </button>
              </div>

              <div className="text-sm font-semibold text-secondary-900">
                {months[viewDate.getMonth()]} {viewDate.getFullYear()}
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={() => navigateMonth("next")}
                  className="p-1 text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 rounded"
                >
                  <ChevronRightIcon />
                </button>
                <button
                  onClick={() => navigateYear("next")}
                  className="p-1 text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 rounded"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>

            {/* Calendar */}
            <div className="p-3">{renderCalendar()}</div>

            {/* Footer */}
            {showToday && (
              <div className="px-3 py-2 border-t border-secondary-200">
                <button
                  onClick={handleTodayClick}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Today
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";
