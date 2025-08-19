import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import clsx from "clsx";

export interface TimePickerValue {
  hour: number;
  minute: number;
  second: number;
}

export interface TimePickerProps {
  value?: string; // Format: "HH:mm:ss" or "HH:mm"
  defaultValue?: string;
  onChange?: (time: string, timeValue: TimePickerValue) => void;
  onSelect?: (time: string, timeValue: TimePickerValue) => void;
  onOpenChange?: (open: boolean) => void;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  autoFocus?: boolean;
  format?: "HH:mm" | "HH:mm:ss" | "hh:mm A" | "hh:mm:ss A";
  size?: "sm" | "md" | "lg";
  status?: "error" | "warning";
  showNow?: boolean;
  use12Hours?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  hideDisabledOptions?: boolean;
  disabledHours?: () => number[];
  disabledMinutes?: (hour: number) => number[];
  disabledSeconds?: (hour: number, minute: number) => number[];
  inputReadOnly?: boolean;
  suffixIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  className?: string;
  popupClassName?: string;
  style?: React.CSSProperties;
}

const timePickerSizes = {
  sm: {
    input: "px-2 py-1.5 text-xs",
    panel: "text-xs p-2",
    column: "max-h-36 min-w-[50px]",
    option: "px-2 py-1.5 text-xs h-7 rounded",
    icon: "w-3 h-3",
    panelWidth: "250px",
  },
  md: {
    input: "px-3 py-2 text-sm",
    panel: "text-sm p-3",
    column: "max-h-44 min-w-[55px]",
    option: "px-3 py-2 text-sm h-8 rounded",
    icon: "w-4 h-4",
    panelWidth: "280px",
  },
  lg: {
    input: "px-4 py-3 text-base",
    panel: "text-base p-4",
    column: "max-h-52 min-w-[60px]",
    option: "px-4 py-2.5 text-base h-10 rounded",
    icon: "w-5 h-5",
    panelWidth: "320px",
  },
};

const formatTime = (
  hour: number,
  minute: number,
  second: number,
  format: string
): string => {
  const pad = (n: number) => n.toString().padStart(2, "0");

  if (format === "HH:mm") {
    return `${pad(hour)}:${pad(minute)}`;
  }
  if (format === "HH:mm:ss") {
    return `${pad(hour)}:${pad(minute)}:${pad(second)}`;
  }
  if (format === "hh:mm A") {
    const isPM = hour >= 12;
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${pad(displayHour)}:${pad(minute)} ${isPM ? "PM" : "AM"}`;
  }
  if (format === "hh:mm:ss A") {
    const isPM = hour >= 12;
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${pad(displayHour)}:${pad(minute)}:${pad(second)} ${
      isPM ? "PM" : "AM"
    }`;
  }

  return `${pad(hour)}:${pad(minute)}:${pad(second)}`;
};

const parseTime = (timeString: string): TimePickerValue => {
  if (!timeString) return { hour: 0, minute: 0, second: 0 };

  // Remove AM/PM for parsing
  const cleanTime = timeString.replace(/\s*(AM|PM)\s*/i, "");
  const isAM = /AM/i.test(timeString);
  const isPM = /PM/i.test(timeString);

  const parts = cleanTime.split(":").map((p) => parseInt(p, 10) || 0);
  let [hour, minute = 0, second = 0] = parts;

  // Convert 12-hour to 24-hour
  if (isPM && hour !== 12) {
    hour += 12;
  } else if (isAM && hour === 12) {
    hour = 0;
  }

  return {
    hour: Math.max(0, Math.min(23, hour)),
    minute: Math.max(0, Math.min(59, minute)),
    second: Math.max(0, Math.min(59, second)),
  };
};

const getNow = (): TimePickerValue => {
  const now = new Date();
  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
};

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  defaultValue = "",
  onChange,
  onSelect,
  onOpenChange,
  placeholder = "Select time",
  disabled = false,
  allowClear = true,
  autoFocus = false,
  format = "HH:mm:ss",
  size = "md",
  status,
  showNow = true,
  use12Hours = false,
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  hideDisabledOptions = false,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  inputReadOnly = false,
  suffixIcon,
  clearIcon,
  className,
  popupClassName,
  style,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const sizeClasses = timePickerSizes[size];
  const showSecond = format.includes("ss");
  const effectiveFormat = use12Hours
    ? showSecond
      ? "hh:mm:ss A"
      : "hh:mm A"
    : format;

  // Parse current time value
  const timeValue = useMemo(() => parseTime(currentValue), [currentValue]);

  // Generate time options
  const timeOptions = useMemo(() => {
    const hours: number[] = [];
    const minutes: number[] = [];
    const seconds: number[] = [];

    const maxHour = use12Hours ? 12 : 23;
    const startHour = use12Hours ? 1 : 0;

    // Hours
    for (let h = startHour; h <= maxHour; h += hourStep) {
      const disabledHoursList = disabledHours?.() || [];
      if (hideDisabledOptions && disabledHoursList.includes(h)) continue;
      hours.push(h);
    }

    // Minutes
    for (let m = 0; m < 60; m += minuteStep) {
      const disabledMinutesList = disabledMinutes?.(timeValue.hour) || [];
      if (hideDisabledOptions && disabledMinutesList.includes(m)) continue;
      minutes.push(m);
    }

    // Seconds
    if (showSecond) {
      for (let s = 0; s < 60; s += secondStep) {
        const disabledSecondsList =
          disabledSeconds?.(timeValue.hour, timeValue.minute) || [];
        if (hideDisabledOptions && disabledSecondsList.includes(s)) continue;
        seconds.push(s);
      }
    }

    return { hours, minutes, seconds };
  }, [
    use12Hours,
    hourStep,
    minuteStep,
    secondStep,
    showSecond,
    hideDisabledOptions,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    timeValue.hour,
    timeValue.minute,
  ]);

  // Update input value when current value changes
  useEffect(() => {
    if (currentValue) {
      const formatted = formatTime(
        timeValue.hour,
        timeValue.minute,
        timeValue.second,
        effectiveFormat
      );
      setInputValue(formatted);
    } else {
      setInputValue("");
    }
  }, [currentValue, timeValue, effectiveFormat]);

  // Handle value change
  const handleValueChange = useCallback(
    (newTimeValue: TimePickerValue) => {
      const formatted = formatTime(
        newTimeValue.hour,
        newTimeValue.minute,
        newTimeValue.second,
        effectiveFormat
      );

      if (value === undefined) {
        setInternalValue(formatted);
      }

      onChange?.(formatted, newTimeValue);
    },
    [value, onChange, effectiveFormat]
  );

  // Handle time selection
  const handleTimeSelect = useCallback(
    (type: "hour" | "minute" | "second", selectedValue: number) => {
      let newTimeValue = { ...timeValue };

      if (type === "hour") {
        // Handle 12-hour format conversion
        if (use12Hours) {
          const currentHour24 = timeValue.hour;
          const isPM = currentHour24 >= 12;

          if (selectedValue === 12) {
            newTimeValue.hour = isPM ? 12 : 0;
          } else {
            newTimeValue.hour = isPM ? selectedValue + 12 : selectedValue;
          }
        } else {
          newTimeValue.hour = selectedValue;
        }
      } else if (type === "minute") {
        newTimeValue.minute = selectedValue;
      } else if (type === "second") {
        newTimeValue.second = selectedValue;
      }

      handleValueChange(newTimeValue);
      onSelect?.(
        formatTime(
          newTimeValue.hour,
          newTimeValue.minute,
          newTimeValue.second,
          effectiveFormat
        ),
        newTimeValue
      );
    },
    [timeValue, use12Hours, handleValueChange, onSelect, effectiveFormat]
  );

  // Handle AM/PM toggle
  const handleAmPmToggle = useCallback(() => {
    if (!use12Hours) return;

    const newHour =
      timeValue.hour >= 12 ? timeValue.hour - 12 : timeValue.hour + 12;
    handleTimeSelect("hour", newHour);
  }, [use12Hours, timeValue.hour, handleTimeSelect]);

  // Handle now button click
  const handleNowClick = useCallback(() => {
    const now = getNow();
    handleValueChange(now);
    setIsOpen(false);
  }, [handleValueChange]);

  // Handle clear
  const handleClear = useCallback(() => {
    if (disabled) return;

    if (value === undefined) {
      setInternalValue("");
    }
    setInputValue("");
    onChange?.("", { hour: 0, minute: 0, second: 0 });

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled, value, onChange]);

  // Handle input change
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputVal = e.target.value;
      setInputValue(inputVal);

      // Try to parse and validate the input
      if (inputVal) {
        try {
          const parsed = parseTime(inputVal);
          handleValueChange(parsed);
        } catch {
          // Invalid time format, ignore
        }
      }
    },
    [handleValueChange]
  );

  // Handle input focus/blur
  const handleInputFocus = useCallback(() => {
    if (!disabled) {
      setIsOpen(true);
      onOpenChange?.(true);
    }
  }, [disabled, onOpenChange]);

  const handleInputBlur = useCallback(() => {
    // Delay closing to allow panel clicks
    setTimeout(() => {
      setIsOpen(false);
      onOpenChange?.(false);
    }, 200);
  }, [onOpenChange]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onOpenChange]);

  // Auto focus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Scroll selected options into view
  useEffect(() => {
    if (!isOpen) return;

    const scrollIntoView = (
      ref: React.RefObject<HTMLDivElement>,
      value: number,
      step: number
    ) => {
      if (!ref.current) return;

      const option = ref.current.querySelector(
        `[data-value="${value}"]`
      ) as HTMLElement;
      if (option) {
        option.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    };

    setTimeout(() => {
      const displayHour = use12Hours
        ? timeValue.hour === 0
          ? 12
          : timeValue.hour > 12
          ? timeValue.hour - 12
          : timeValue.hour
        : timeValue.hour;

      scrollIntoView(hourRef, displayHour, hourStep);
      scrollIntoView(minuteRef, timeValue.minute, minuteStep);
      if (showSecond) {
        scrollIntoView(secondRef, timeValue.second, secondStep);
      }
    }, 50);
  }, [
    isOpen,
    timeValue,
    use12Hours,
    hourStep,
    minuteStep,
    secondStep,
    showSecond,
  ]);

  const renderColumn = (
    type: "hour" | "minute" | "second",
    options: number[],
    selectedValue: number,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={clsx(
        "flex-1 overflow-y-auto border-r border-secondary-100 last:border-r-0 scrollbar-thin scrollbar-thumb-secondary-300 scrollbar-track-transparent",
        sizeClasses.column
      )}
    >
      {options.map((option) => {
        const isDisabled =
          (type === "hour" && disabledHours?.().includes(option)) ||
          (type === "minute" &&
            disabledMinutes?.(timeValue.hour).includes(option)) ||
          (type === "second" &&
            disabledSeconds?.(timeValue.hour, timeValue.minute).includes(
              option
            ));

        const isSelected = option === selectedValue;

        return (
          <div
            key={option}
            data-value={option}
            onClick={() => !isDisabled && handleTimeSelect(type, option)}
            className={clsx(
              "cursor-pointer transition-all duration-200 flex items-center justify-center mx-1 my-0.5",
              sizeClasses.option,
              {
                "bg-primary-100 text-primary-700 font-semibold shadow-sm":
                  isSelected,
                "hover:bg-secondary-50 text-secondary-700":
                  !isSelected && !isDisabled,
                "opacity-40 cursor-not-allowed": isDisabled,
              }
            )}
          >
            {option.toString().padStart(2, "0")}
          </div>
        );
      })}
    </div>
  );

  const renderPanel = () => (
    <div
      className={clsx(
        "absolute z-50 mt-2 bg-white border border-secondary-200 rounded-xl shadow-xl",
        sizeClasses.panel,
        popupClassName
      )}
      style={{ minWidth: sizeClasses.panelWidth }}
    >
      <div className="flex gap-1">
        {/* Hour column */}
        {renderColumn(
          "hour",
          timeOptions.hours,
          use12Hours
            ? timeValue.hour === 0
              ? 12
              : timeValue.hour > 12
              ? timeValue.hour - 12
              : timeValue.hour
            : timeValue.hour,
          hourRef
        )}

        {/* Minute column */}
        {renderColumn(
          "minute",
          timeOptions.minutes,
          timeValue.minute,
          minuteRef
        )}

        {/* Second column */}
        {showSecond &&
          renderColumn(
            "second",
            timeOptions.seconds,
            timeValue.second,
            secondRef
          )}

        {/* AM/PM column */}
        {use12Hours && (
          <div className="flex flex-col w-20 px-1">
            <button
              onClick={handleAmPmToggle}
              className={clsx(
                "flex items-center justify-center border-b border-secondary-100 transition-all duration-200",
                sizeClasses.option,
                {
                  "bg-primary-100 text-primary-700 font-medium":
                    timeValue.hour < 12,
                  "hover:bg-secondary-50 text-secondary-600":
                    timeValue.hour >= 12,
                }
              )}
            >
              AM
            </button>
            <button
              onClick={handleAmPmToggle}
              className={clsx(
                "flex items-center justify-center transition-all duration-200",
                sizeClasses.option,
                {
                  "bg-primary-100 text-primary-700 font-medium":
                    timeValue.hour >= 12,
                  "hover:bg-secondary-50 text-secondary-600":
                    timeValue.hour < 12,
                }
              )}
            >
              PM
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      {showNow && (
        <div className="border-t border-secondary-200 p-2">
          <button
            onClick={handleNowClick}
            className="w-full px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded transition-colors"
          >
            Now
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={clsx("relative", className)}
      style={style}
      {...props}
    >
      <div
        className={clsx(
          "flex items-center border border-secondary-300 rounded-md bg-white cursor-pointer transition-colors",
          sizeClasses.input,
          {
            "border-primary-500 ring-2 ring-primary-500 ring-opacity-20":
              isOpen && !status,
            "border-red-500 ring-2 ring-red-500 ring-opacity-20":
              status === "error",
            "border-yellow-500 ring-2 ring-yellow-500 ring-opacity-20":
              status === "warning",
            "hover:border-secondary-400": !disabled && !isOpen && !status,
            "opacity-50 cursor-not-allowed": disabled,
          }
        )}
        onClick={() => {
          if (disabled) return;
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={inputReadOnly}
          className="flex-1 bg-transparent outline-none"
        />

        <div className="flex items-center ml-2 space-x-1">
          {allowClear && currentValue && !disabled && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="text-secondary-400 hover:text-secondary-600 transition-colors"
            >
              {clearIcon || (
                <svg
                  className={clsx(sizeClasses.icon)}
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
              )}
            </button>
          )}

          {suffixIcon || (
            <svg
              className={clsx("text-secondary-400", sizeClasses.icon)}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
      </div>

      {isOpen && renderPanel()}
    </div>
  );
};
