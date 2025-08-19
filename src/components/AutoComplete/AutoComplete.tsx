import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import clsx from "clsx";

export interface AutoCompleteOption {
  value: string;
  label?: string;
  disabled?: boolean;
  data?: any;
}

export type AutoCompleteDataSource = string[] | AutoCompleteOption[];

export interface AutoCompleteProps {
  value?: string;
  defaultValue?: string;
  dataSource?: AutoCompleteDataSource;
  onChange?: (value: string) => void;
  onSelect?: (value: string, option: AutoCompleteOption | string) => void;
  onSearch?: (value: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  autoFocus?: boolean;
  backfill?: boolean;
  defaultActiveFirstOption?: boolean;
  filterOption?:
    | boolean
    | ((inputValue: string, option: AutoCompleteOption) => boolean);
  notFoundContent?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  status?: "error" | "warning";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  popupClassName?: string;
  style?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  dropdownMatchSelectWidth?: boolean;
}

const autoCompleteSizes = {
  sm: {
    input: "px-2 py-1 text-xs",
    option: "px-2 py-1 text-xs",
    icon: "w-3 h-3",
  },
  md: {
    input: "px-3 py-2 text-sm",
    option: "px-3 py-2 text-sm",
    icon: "w-4 h-4",
  },
  lg: {
    input: "px-4 py-3 text-base",
    option: "px-4 py-3 text-base",
    icon: "w-5 h-5",
  },
};

const defaultFilterOption = (
  inputValue: string,
  option: AutoCompleteOption
): boolean => {
  const label = option.label || option.value;
  return label.toLowerCase().includes(inputValue.toLowerCase());
};

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  value,
  defaultValue = "",
  dataSource = [],
  onChange,
  onSelect,
  onSearch,
  onFocus,
  onBlur,
  placeholder = "Input here",
  disabled = false,
  allowClear = false,
  autoFocus = false,
  backfill = false,
  defaultActiveFirstOption = true,
  filterOption = true,
  notFoundContent = "Not Found",
  size = "md",
  status,
  prefix,
  suffix,
  className,
  popupClassName,
  style,
  dropdownStyle,
  dropdownMatchSelectWidth = true,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const sizeClasses = autoCompleteSizes[size];

  // Convert dataSource to consistent format
  const normalizedOptions = useMemo((): AutoCompleteOption[] => {
    return dataSource.map((item) => {
      if (typeof item === "string") {
        return { value: item, label: item };
      }
      return item;
    });
  }, [dataSource]);

  // Filter options based on input value
  const filteredOptions = useMemo(() => {
    if (!currentValue.trim()) return normalizedOptions;

    if (filterOption === false) return normalizedOptions;

    if (typeof filterOption === "function") {
      return normalizedOptions.filter((option) =>
        filterOption(currentValue, option)
      );
    }

    return normalizedOptions.filter((option) =>
      defaultFilterOption(currentValue, option)
    );
  }, [normalizedOptions, currentValue, filterOption]);

  // Handle value change
  const handleValueChange = useCallback(
    (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      onSearch?.(newValue);
    },
    [value, onChange, onSearch]
  );

  // Handle option select
  const handleSelect = useCallback(
    (option: AutoCompleteOption) => {
      if (option.disabled) return;

      const selectedValue = option.value;
      handleValueChange(selectedValue);
      onSelect?.(selectedValue, option);
      setIsOpen(false);
      setActiveIndex(-1);

      // Focus back to input
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    [handleValueChange, onSelect]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) {
        if (e.key === "ArrowDown" || e.key === "Enter") {
          setIsOpen(true);
          if (defaultActiveFirstOption && filteredOptions.length > 0) {
            setActiveIndex(0);
          }
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) => {
            const nextIndex =
              prev < filteredOptions.length - 1 ? prev + 1 : prev;

            // Backfill logic
            if (backfill && nextIndex >= 0) {
              const option = filteredOptions[nextIndex];
              if (option) {
                handleValueChange(option.value);
              }
            }

            return nextIndex;
          });
          break;

        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => {
            const nextIndex = prev > 0 ? prev - 1 : -1;

            // Backfill logic
            if (backfill && nextIndex >= 0) {
              const option = filteredOptions[nextIndex];
              if (option) {
                handleValueChange(option.value);
              }
            }

            return nextIndex;
          });
          break;

        case "Enter":
          e.preventDefault();
          if (activeIndex >= 0 && filteredOptions[activeIndex]) {
            handleSelect(filteredOptions[activeIndex]);
          }
          break;

        case "Escape":
          setIsOpen(false);
          setActiveIndex(-1);
          if (inputRef.current) {
            inputRef.current.blur();
          }
          break;

        case "Tab":
          setIsOpen(false);
          setActiveIndex(-1);
          break;
      }
    },
    [
      isOpen,
      activeIndex,
      filteredOptions,
      defaultActiveFirstOption,
      backfill,
      handleValueChange,
      handleSelect,
    ]
  );

  // Handle input change
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      handleValueChange(newValue);

      if (!isOpen && newValue) {
        setIsOpen(true);
      }

      // Reset active index when typing
      if (defaultActiveFirstOption && filteredOptions.length > 0) {
        setActiveIndex(0);
      } else {
        setActiveIndex(-1);
      }
    },
    [
      handleValueChange,
      isOpen,
      defaultActiveFirstOption,
      filteredOptions.length,
    ]
  );

  // Handle input focus
  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);

      if (currentValue || filteredOptions.length > 0) {
        setIsOpen(true);
        if (defaultActiveFirstOption && filteredOptions.length > 0) {
          setActiveIndex(0);
        }
      }

      onFocus?.(e);
    },
    [currentValue, filteredOptions.length, defaultActiveFirstOption, onFocus]
  );

  // Handle input blur
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);

      // Delay closing to allow option clicks
      setTimeout(() => {
        setIsOpen(false);
        setActiveIndex(-1);
      }, 200);

      onBlur?.(e);
    },
    [onBlur]
  );

  // Handle clear
  const handleClear = useCallback(() => {
    if (disabled) return;

    handleValueChange("");
    setIsOpen(false);
    setActiveIndex(-1);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled, handleValueChange]);

  // Scroll active option into view
  useEffect(() => {
    if (isOpen && activeIndex >= 0 && optionsRef.current) {
      const activeOption = optionsRef.current.children[
        activeIndex
      ] as HTMLElement;
      if (activeOption) {
        activeOption.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [isOpen, activeIndex]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Auto focus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const renderOptions = () => (
    <div
      ref={optionsRef}
      className={clsx(
        "absolute z-50 mt-1 bg-white border border-secondary-300 rounded-md shadow-lg max-h-64 overflow-auto",
        sizeClasses.option
          .replace("px-", "")
          .replace("py-", "")
          .replace("text-", ""),
        {
          "w-full": dropdownMatchSelectWidth,
        },
        popupClassName
      )}
      style={{
        minWidth: dropdownMatchSelectWidth ? "100%" : "200px",
        ...dropdownStyle,
      }}
    >
      {filteredOptions.length === 0 ? (
        <div
          className={clsx(
            "text-center text-secondary-500 py-4",
            sizeClasses.option
          )}
        >
          {notFoundContent}
        </div>
      ) : (
        filteredOptions.map((option, index) => (
          <div
            key={option.value}
            className={clsx(
              "cursor-pointer transition-colors border-l-2 border-transparent",
              sizeClasses.option,
              {
                "bg-primary-50 text-primary-700 border-primary-500":
                  index === activeIndex,
                "hover:bg-secondary-50":
                  !option.disabled && index !== activeIndex,
                "opacity-50 cursor-not-allowed": option.disabled,
              }
            )}
            onClick={() => handleSelect(option)}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="truncate">{option.label || option.value}</div>
          </div>
        ))
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
          "flex items-center border border-secondary-300 rounded-md bg-white transition-colors",
          sizeClasses.input,
          {
            "border-primary-500 ring-2 ring-primary-500 ring-opacity-20":
              isFocused && !status,
            "border-red-500 ring-2 ring-red-500 ring-opacity-20":
              status === "error",
            "border-yellow-500 ring-2 ring-yellow-500 ring-opacity-20":
              status === "warning",
            "hover:border-secondary-400": !disabled && !isFocused && !status,
            "opacity-50 cursor-not-allowed": disabled,
          }
        )}
      >
        {prefix && (
          <div className="flex items-center mr-2 text-secondary-500">
            {prefix}
          </div>
        )}

        <input
          ref={inputRef}
          type="text"
          value={currentValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 bg-transparent outline-none"
        />

        <div className="flex items-center ml-2 space-x-1">
          {allowClear && currentValue && !disabled && (
            <button
              onClick={handleClear}
              className="text-secondary-400 hover:text-secondary-600 transition-colors"
            >
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
            </button>
          )}

          {suffix && (
            <div className="flex items-center text-secondary-500">{suffix}</div>
          )}

          <svg
            className={clsx(
              "text-secondary-400 transition-transform",
              sizeClasses.icon,
              { "rotate-180": isOpen }
            )}
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
        </div>
      </div>

      {isOpen && renderOptions()}
    </div>
  );
};
