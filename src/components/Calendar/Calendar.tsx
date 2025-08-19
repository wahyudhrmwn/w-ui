import React, { useState, useMemo, useCallback } from "react";
import clsx from "clsx";

export interface CalendarValue {
  year: number;
  month: number; // 0-based (0 = January, 11 = December)
  date: number;
}

export interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date, value: CalendarValue) => void;
  onSelect?: (date: Date, value: CalendarValue) => void;
  onPanelChange?: (value: CalendarValue, mode: "month" | "year") => void;
  disabledDate?: (date: Date) => boolean;
  mode?: "month" | "year";
  fullscreen?: boolean;
  size?: "sm" | "md" | "lg";
  locale?: {
    months?: string[];
    weekdays?: string[];
    weekdaysShort?: string[];
    today?: string;
  };
  showToday?: boolean;
  showWeekNumber?: boolean;
  firstDayOfWeek?: 0 | 1; // 0 = Sunday, 1 = Monday
  monthCellRender?: (date: Date, value: CalendarValue) => React.ReactNode;
  dateCellRender?: (date: Date, value: CalendarValue) => React.ReactNode;
  headerRender?: (
    value: CalendarValue,
    type: "month" | "year",
    onChange: (date: Date) => void,
    onTypeChange: (type: "month" | "year") => void
  ) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const defaultLocale = {
  months: [
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
  ],
  weekdays: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "Today",
};

const calendarSizes = {
  sm: {
    container: "text-xs",
    header: "text-sm p-2",
    cell: "h-6 text-xs",
    button: "text-xs px-2 py-1",
    monthCell: "h-16 text-xs p-1",
  },
  md: {
    container: "text-sm",
    header: "text-base p-3",
    cell: "h-8 text-sm",
    button: "text-sm px-3 py-1",
    monthCell: "h-20 text-sm p-2",
  },
  lg: {
    container: "text-base",
    header: "text-lg p-4",
    cell: "h-10 text-base",
    button: "text-base px-4 py-2",
    monthCell: "h-24 text-base p-2",
  },
};

const getWeekNumber = (date: Date): number => {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isSameMonth = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth()
  );
};

export const Calendar: React.FC<CalendarProps> = ({
  value,
  defaultValue,
  onChange,
  onSelect,
  onPanelChange,
  disabledDate,
  mode: initialMode = "month",
  fullscreen = false,
  size = "md",
  locale = defaultLocale,
  showToday = true,
  showWeekNumber = false,
  firstDayOfWeek = 0,
  monthCellRender,
  dateCellRender,
  headerRender,
  className,
  style,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(
    defaultValue || new Date()
  );
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [mode, setMode] = useState(initialMode);

  const currentValue = value !== undefined ? value : internalValue;
  const sizeClasses = calendarSizes[size];
  const today = new Date();

  // Merge locale with defaults
  const mergedLocale = { ...defaultLocale, ...locale };

  const calendarValue: CalendarValue = useMemo(
    () => ({
      year: currentMonth.getFullYear(),
      month: currentMonth.getMonth(),
      date: currentMonth.getDate(),
    }),
    [currentMonth]
  );

  // Navigate to previous month/year
  const navigatePrevious = useCallback(() => {
    const newDate = new Date(currentMonth);
    if (mode === "month") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setFullYear(newDate.getFullYear() - 1);
    }
    setCurrentMonth(newDate);

    const newValue: CalendarValue = {
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      date: newDate.getDate(),
    };
    onPanelChange?.(newValue, mode);
  }, [currentMonth, mode, onPanelChange]);

  // Navigate to next month/year
  const navigateNext = useCallback(() => {
    const newDate = new Date(currentMonth);
    if (mode === "month") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setFullYear(newDate.getFullYear() + 1);
    }
    setCurrentMonth(newDate);

    const newValue: CalendarValue = {
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      date: newDate.getDate(),
    };
    onPanelChange?.(newValue, mode);
  }, [currentMonth, mode, onPanelChange]);

  // Handle date selection
  const handleDateSelect = useCallback(
    (date: Date) => {
      if (disabledDate?.(date)) return;

      if (value === undefined) {
        setInternalValue(date);
      }

      const newValue: CalendarValue = {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
      };

      onChange?.(date, newValue);
      onSelect?.(date, newValue);
    },
    [value, onChange, onSelect, disabledDate]
  );

  // Handle month selection
  const handleMonthSelect = useCallback(
    (monthIndex: number) => {
      const newDate = new Date(currentMonth.getFullYear(), monthIndex, 1);
      setCurrentMonth(newDate);
      setMode("month");

      const newValue: CalendarValue = {
        year: newDate.getFullYear(),
        month: monthIndex,
        date: 1,
      };
      onPanelChange?.(newValue, "month");
    },
    [currentMonth, onPanelChange]
  );

  // Go to today
  const goToToday = useCallback(() => {
    const todayDate = new Date();
    setCurrentMonth(todayDate);
    handleDateSelect(todayDate);
  }, [handleDateSelect]);

  // Generate calendar days for month view
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDate = new Date(firstDay);
    const daysFromStart = (firstDay.getDay() - firstDayOfWeek + 7) % 7;
    startDate.setDate(startDate.getDate() - daysFromStart);

    const days: Date[] = [];
    const current = new Date(startDate);

    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  }, [currentMonth, firstDayOfWeek]);

  // Generate months for year view
  const calendarMonths = useMemo(() => {
    const year = currentMonth.getFullYear();
    return Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));
  }, [currentMonth]);

  // Generate weekdays header
  const weekdaysHeader = useMemo(() => {
    const days = [...mergedLocale.weekdaysShort];
    if (firstDayOfWeek === 1) {
      days.push(days.shift()!); // Move Sunday to end
    }
    return days;
  }, [mergedLocale.weekdaysShort, firstDayOfWeek]);

  const renderHeader = () => {
    if (headerRender) {
      return headerRender(calendarValue, mode, handleDateSelect, setMode);
    }

    return (
      <div
        className={clsx(
          "flex items-center justify-between border-b border-secondary-200",
          sizeClasses.header
        )}
      >
        <div className="flex items-center space-x-2">
          <button
            onClick={navigatePrevious}
            className="p-1 rounded hover:bg-secondary-100 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => setMode(mode === "month" ? "year" : "month")}
              className="font-semibold hover:text-primary-600 transition-colors"
            >
              {mode === "month"
                ? `${
                    mergedLocale.months[currentMonth.getMonth()]
                  } ${currentMonth.getFullYear()}`
                : `${currentMonth.getFullYear()}`}
            </button>
          </div>

          <button
            onClick={navigateNext}
            className="p-1 rounded hover:bg-secondary-100 transition-colors"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {showToday && (
          <button
            onClick={goToToday}
            className={clsx(
              "rounded border border-primary-500 text-primary-600 hover:bg-primary-50 transition-colors",
              sizeClasses.button
            )}
          >
            {mergedLocale.today}
          </button>
        )}
      </div>
    );
  };

  const renderMonthView = () => (
    <div className="p-4">
      {/* Weekdays Header */}
      <div className="grid grid-cols-8 mb-2">
        {showWeekNumber && (
          <div
            className={clsx(
              "text-center font-medium text-secondary-500",
              sizeClasses.cell
            )}
          >
            W
          </div>
        )}
        {weekdaysHeader.map((day) => (
          <div
            key={day}
            className={clsx(
              "text-center font-medium text-secondary-700",
              sizeClasses.cell
            )}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="space-y-1">
        {Array.from({ length: 6 }, (_, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-8 gap-1">
            {showWeekNumber && (
              <div
                className={clsx(
                  "text-center text-secondary-500 flex items-center justify-center",
                  sizeClasses.cell
                )}
              >
                {getWeekNumber(calendarDays[weekIndex * 7])}
              </div>
            )}
            {calendarDays
              .slice(weekIndex * 7, (weekIndex + 1) * 7)
              .map((date, dayIndex) => {
                const isToday = isSameDay(date, today);
                const isSelected = isSameDay(date, currentValue);
                const isCurrentMonth = isSameMonth(date, currentMonth);
                const isDisabled = disabledDate?.(date) || false;

                return (
                  <div key={dayIndex} className="relative">
                    <button
                      onClick={() => handleDateSelect(date)}
                      disabled={isDisabled}
                      className={clsx(
                        "w-full flex items-center justify-center rounded transition-colors relative",
                        sizeClasses.cell,
                        {
                          "bg-primary-600 text-white": isSelected,
                          "bg-primary-100 text-primary-700":
                            isToday && !isSelected,
                          "text-secondary-400": !isCurrentMonth && !isSelected,
                          "hover:bg-primary-50":
                            !isSelected && !isDisabled && isCurrentMonth,
                          "opacity-50 cursor-not-allowed": isDisabled,
                          "font-semibold": isToday,
                        }
                      )}
                    >
                      <span>{date.getDate()}</span>

                      {/* Custom cell render */}
                      {dateCellRender && (
                        <div className="absolute inset-0">
                          {dateCellRender(date, {
                            year: date.getFullYear(),
                            month: date.getMonth(),
                            date: date.getDate(),
                          })}
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );

  const renderYearView = () => (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {calendarMonths.map((monthDate, index) => {
          const isCurrentMonth =
            monthDate.getMonth() === currentValue.getMonth() &&
            monthDate.getFullYear() === currentValue.getFullYear();
          const isThisMonth =
            monthDate.getMonth() === today.getMonth() &&
            monthDate.getFullYear() === today.getFullYear();

          return (
            <div key={index} className="relative">
              <button
                onClick={() => handleMonthSelect(index)}
                className={clsx(
                  "w-full rounded border border-secondary-200 transition-colors flex flex-col",
                  sizeClasses.monthCell,
                  {
                    "bg-primary-600 text-white border-primary-600":
                      isCurrentMonth,
                    "bg-primary-100 text-primary-700 border-primary-300":
                      isThisMonth && !isCurrentMonth,
                    "hover:bg-secondary-50": !isCurrentMonth && !isThisMonth,
                  }
                )}
              >
                <div className="font-medium">{mergedLocale.months[index]}</div>

                {/* Custom month cell render */}
                {monthCellRender && (
                  <div className="flex-1">
                    {monthCellRender(monthDate, {
                      year: monthDate.getFullYear(),
                      month: monthDate.getMonth(),
                      date: monthDate.getDate(),
                    })}
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className={clsx(
        "bg-white border border-secondary-300 rounded-lg shadow-sm",
        sizeClasses.container,
        {
          "w-full h-full": fullscreen,
          "max-w-md": !fullscreen,
        },
        className
      )}
      style={style}
      {...props}
    >
      {renderHeader()}
      {mode === "month" ? renderMonthView() : renderYearView()}
    </div>
  );
};
