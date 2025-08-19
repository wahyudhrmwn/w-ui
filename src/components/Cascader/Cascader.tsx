import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import clsx from "clsx";

export interface CascaderOption {
  value: string | number;
  label: string;
  children?: CascaderOption[];
  disabled?: boolean;
  loading?: boolean;
  isLeaf?: boolean;
}

export type CascaderValue = (string | number)[];

export interface CascaderProps {
  options: CascaderOption[];
  value?: CascaderValue;
  defaultValue?: CascaderValue;
  onChange?: (value: CascaderValue, selectedOptions: CascaderOption[]) => void;
  onSelect?: (value: CascaderValue, selectedOptions: CascaderOption[]) => void;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  showSearch?: boolean;
  searchValue?: string;
  onSearch?: (value: string) => void;
  expandTrigger?: "click" | "hover";
  changeOnSelect?: boolean;
  displayRender?: (
    labels: string[],
    selectedOptions?: CascaderOption[]
  ) => React.ReactNode;
  fieldNames?: {
    label?: string;
    value?: string;
    children?: string;
  };
  separator?: string;
  size?: "sm" | "md" | "lg";
  popupPlacement?:
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "top"
    | "topLeft"
    | "topRight";
  notFoundContent?: React.ReactNode;
  loadData?: (selectedOptions: CascaderOption[]) => void;
  className?: string;
  popupClassName?: string;
  style?: React.CSSProperties;
}

const cascaderSizes = {
  sm: {
    input: "px-2 py-1 text-xs",
    popup: "text-xs",
    option: "px-2 py-1 text-xs",
    icon: "w-3 h-3",
  },
  md: {
    input: "px-3 py-2 text-sm",
    popup: "text-sm",
    option: "px-3 py-2 text-sm",
    icon: "w-4 h-4",
  },
  lg: {
    input: "px-4 py-3 text-base",
    popup: "text-base",
    option: "px-4 py-3 text-base",
    icon: "w-5 h-5",
  },
};

export const Cascader: React.FC<CascaderProps> = ({
  options = [],
  value,
  defaultValue = [],
  onChange,
  onSelect,
  placeholder = "Please select",
  disabled = false,
  allowClear = true,
  showSearch = false,
  searchValue,
  onSearch,
  expandTrigger = "click",
  changeOnSelect = false,
  displayRender,
  fieldNames = { label: "label", value: "value", children: "children" },
  separator = " / ",
  size = "md",
  popupPlacement = "bottomLeft",
  notFoundContent = "Not Found",
  loadData,
  className,
  popupClassName,
  style,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState<CascaderValue>(
    defaultValue || []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeValue, setActiveValue] = useState<(string | number)[]>([]);
  const [internalSearchValue, setInternalSearchValue] = useState("");
  const [hoverValue, setHoverValue] = useState<CascaderValue>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const currentSearchValue =
    searchValue !== undefined ? searchValue : internalSearchValue;
  const sizeClasses = cascaderSizes[size];

  // Get field names with defaults
  const labelField = fieldNames.label || "label";
  const valueField = fieldNames.value || "value";
  const childrenField = fieldNames.children || "children";

  // Find option by value path
  const findOption = useCallback(
    (
      options: CascaderOption[],
      valuePath: CascaderValue
    ): CascaderOption | null => {
      if (valuePath.length === 0) return null;

      for (const option of options) {
        if (option[valueField as keyof CascaderOption] === valuePath[0]) {
          if (valuePath.length === 1) {
            return option;
          }
          const children = option[childrenField as keyof CascaderOption] as
            | CascaderOption[]
            | undefined;
          if (children) {
            return findOption(children, valuePath.slice(1));
          }
        }
      }
      return null;
    },
    [valueField, childrenField]
  );

  // Get selected options
  const selectedOptions = useMemo(() => {
    const result: CascaderOption[] = [];
    let currentOptions = options;

    for (const val of currentValue) {
      const option = currentOptions.find(
        (opt) => opt[valueField as keyof CascaderOption] === val
      );
      if (option) {
        result.push(option);
        currentOptions =
          (option[childrenField as keyof CascaderOption] as CascaderOption[]) ||
          [];
      } else {
        break;
      }
    }

    return result;
  }, [currentValue, options, valueField, childrenField]);

  // Get display label
  const displayLabel = useMemo(() => {
    if (displayRender) {
      return displayRender(
        selectedOptions.map(
          (opt) => opt[labelField as keyof CascaderOption] as string
        ),
        selectedOptions
      );
    }
    return selectedOptions
      .map((opt) => opt[labelField as keyof CascaderOption] as string)
      .join(separator);
  }, [selectedOptions, displayRender, labelField, separator]);

  // Get string representation for input value
  const displayText = useMemo(() => {
    return selectedOptions
      .map((opt) => opt[labelField as keyof CascaderOption] as string)
      .join(separator);
  }, [selectedOptions, labelField, separator]);

  // Filter options for search
  const getFilteredOptions = useCallback(
    (options: CascaderOption[], searchText: string): CascaderOption[] => {
      if (!searchText.trim()) return options;

      const filterRecursive = (opts: CascaderOption[]): CascaderOption[] => {
        return opts
          .filter((option) => {
            const label = option[labelField as keyof CascaderOption] as string;
            const hasMatch = label
              .toLowerCase()
              .includes(searchText.toLowerCase());

            const children = option[childrenField as keyof CascaderOption] as
              | CascaderOption[]
              | undefined;
            const filteredChildren = children ? filterRecursive(children) : [];

            return hasMatch || filteredChildren.length > 0;
          })
          .map((option) => {
            const children = option[childrenField as keyof CascaderOption] as
              | CascaderOption[]
              | undefined;
            return children
              ? {
                  ...option,
                  [childrenField]: filterRecursive(children),
                }
              : option;
          });
      };

      return filterRecursive(options);
    },
    [labelField, childrenField]
  );

  const filteredOptions = showSearch
    ? getFilteredOptions(options, currentSearchValue)
    : options;

  // Generate menu levels
  const menuLevels = useMemo(() => {
    const levels: CascaderOption[][] = [filteredOptions];
    let currentOptions = filteredOptions;

    for (let i = 0; i < activeValue.length; i++) {
      const levelValue = activeValue[i];
      if (!levelValue) break;

      const option = currentOptions.find(
        (opt) => opt[valueField as keyof CascaderOption] === levelValue
      );
      if (option) {
        const children = option[childrenField as keyof CascaderOption] as
          | CascaderOption[]
          | undefined;
        if (children && children.length > 0) {
          levels.push(children);
          currentOptions = children;
        }
      }
    }

    return levels;
  }, [filteredOptions, activeValue, valueField, childrenField]);

  const handleOptionClick = useCallback(
    (option: CascaderOption, level: number) => {
      if (option.disabled) return;

      const newValue: CascaderValue = [
        ...currentValue.slice(0, level),
        option[valueField as keyof CascaderOption] as string | number,
      ];
      const newActiveValue = [...activeValue];
      newActiveValue[level] = option[valueField as keyof CascaderOption] as
        | string
        | number;
      setActiveValue(newActiveValue.slice(0, level + 1));

      // Load data if needed
      if (
        loadData &&
        !option.isLeaf &&
        !option[childrenField as keyof CascaderOption]
      ) {
        const selectedPath: CascaderOption[] = [];
        let currentOptions = options;

        for (const val of newValue) {
          const opt = currentOptions.find(
            (o) => o[valueField as keyof CascaderOption] === val
          );
          if (opt) {
            selectedPath.push(opt);
            currentOptions =
              (opt[
                childrenField as keyof CascaderOption
              ] as CascaderOption[]) || [];
          }
        }

        loadData(selectedPath);
      }

      // Check if this is a leaf node or if changeOnSelect is true
      const children = option[childrenField as keyof CascaderOption] as
        | CascaderOption[]
        | undefined;
      const isLeaf = option.isLeaf || !children || children.length === 0;

      // Build selected options for callbacks
      const newSelectedOptions: CascaderOption[] = [];
      let currentOpts = options;

      for (const val of newValue) {
        const opt = currentOpts.find(
          (o) => o[valueField as keyof CascaderOption] === val
        );
        if (opt) {
          newSelectedOptions.push(opt);
          currentOpts =
            (opt[
              childrenField as keyof CascaderOption
            ] as CascaderOption[]) || [];
        }
      }

      if (isLeaf || changeOnSelect) {
        if (value === undefined) {
          setInternalValue(newValue);
        }

        onChange?.(newValue, newSelectedOptions);

        if (isLeaf) {
          setIsOpen(false);
          setActiveValue([]);
        }
      }

      onSelect?.(newValue, newSelectedOptions);
    },
    [
      currentValue,
      activeValue,
      loadData,
      options,
      valueField,
      childrenField,
      changeOnSelect,
      value,
      onChange,
      onSelect,
    ]
  );

  const handleOptionHover = useCallback(
    (option: CascaderOption, level: number) => {
      if (expandTrigger !== "hover" || option.disabled) return;

      const newValue: CascaderValue = [
        ...currentValue.slice(0, level),
        option[valueField as keyof CascaderOption] as string | number,
      ];
      setHoverValue(newValue);

      // Update active value for hover expansion
      const newActiveValue = [...activeValue];
      newActiveValue[level] = option[valueField as keyof CascaderOption] as
        | string
        | number;
      setActiveValue(newActiveValue.slice(0, level + 1));
    },
    [expandTrigger, currentValue, activeValue, valueField]
  );

  const handleClear = useCallback(() => {
    if (disabled) return;

    const emptyValue: CascaderValue = [];
    if (value === undefined) {
      setInternalValue(emptyValue);
    }
    setActiveValue([]);
    setHoverValue([]);
    onChange?.(emptyValue, []);
  }, [disabled, value, onChange]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchValue = e.target.value;
      if (searchValue === undefined) {
        setInternalSearchValue(newSearchValue);
      }
      onSearch?.(newSearchValue);
    },
    [searchValue, onSearch]
  );

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveValue([]);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          setActiveValue([]);
          break;
        case "Enter":
          if (!isOpen) {
            setIsOpen(true);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          }
          break;
        case "Backspace":
          if (showSearch && currentSearchValue) {
            // Let default backspace behavior handle search input
          } else if (allowClear && currentValue.length > 0) {
            handleClear();
          }
          break;
      }
    },
    [
      disabled,
      isOpen,
      showSearch,
      currentSearchValue,
      allowClear,
      currentValue.length,
      handleClear,
    ]
  );

  const renderMenu = () => (
    <div
      className={clsx(
        "absolute z-50 mt-1 bg-white border border-secondary-300 rounded-md shadow-lg max-h-64 overflow-hidden",
        sizeClasses.popup,
        {
          "top-full": popupPlacement.startsWith("bottom"),
          "bottom-full mb-1 mt-0": popupPlacement.startsWith("top"),
        },
        popupClassName
      )}
      style={{ minWidth: "100%" }}
    >
      <div className="flex">
        {menuLevels.map((levelOptions, levelIndex) => (
          <div
            key={levelIndex}
            className="flex-1 min-w-32 border-r border-secondary-200 last:border-r-0"
          >
            <div className="max-h-64 overflow-y-auto">
              {levelOptions.length === 0 ? (
                <div
                  className={clsx(
                    "text-center text-secondary-500 py-4",
                    sizeClasses.option
                  )}
                >
                  {notFoundContent}
                </div>
              ) : (
                levelOptions.map((option) => {
                  const optionValue =
                    option[valueField as keyof CascaderOption];
                  const optionLabel = option[
                    labelField as keyof CascaderOption
                  ] as string;
                  const hasChildren =
                    option[childrenField as keyof CascaderOption] &&
                    (
                      option[
                        childrenField as keyof CascaderOption
                      ] as CascaderOption[]
                    ).length > 0;

                  const isSelected = activeValue[levelIndex] === optionValue;
                  const isInPath = currentValue[levelIndex] === optionValue;

                  return (
                    <div
                      key={String(optionValue)}
                      className={clsx(
                        "flex items-center justify-between cursor-pointer transition-colors",
                        sizeClasses.option,
                        {
                          "bg-primary-50 text-primary-700": isSelected,
                          "bg-secondary-50": isInPath && !isSelected,
                          "hover:bg-secondary-50":
                            !option.disabled && !isSelected,
                          "opacity-50 cursor-not-allowed": option.disabled,
                          "text-secondary-400": option.loading,
                        }
                      )}
                      onClick={() => handleOptionClick(option, levelIndex)}
                      onMouseEnter={() => handleOptionHover(option, levelIndex)}
                    >
                      <span className="flex-1 truncate">{optionLabel}</span>

                      {option.loading ? (
                        <svg
                          className={clsx("animate-spin", sizeClasses.icon)}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      ) : (
                        hasChildren &&
                        !option.isLeaf && (
                          <svg
                            className={clsx(
                              sizeClasses.icon,
                              "text-secondary-400"
                            )}
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
                        )
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>
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
              isOpen,
            "hover:border-secondary-400": !disabled && !isOpen,
            "opacity-50 cursor-not-allowed": disabled,
          }
        )}
        onClick={() => {
          if (disabled) return;
          setIsOpen(!isOpen);
          if (showSearch && inputRef.current) {
            inputRef.current.focus();
          }
        }}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
      >
        {showSearch ? (
          <input
            ref={inputRef}
            type="text"
            value={isOpen ? currentSearchValue : displayText || ""}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none"
            disabled={disabled}
            readOnly={!isOpen}
          />
        ) : (
          <span
            className={clsx("flex-1 truncate", {
              "text-secondary-500": !displayLabel && placeholder,
            })}
          >
            {displayLabel || placeholder}
          </span>
        )}

        <div className="flex items-center ml-2 space-x-1">
          {allowClear && currentValue.length > 0 && !disabled && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
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

          <svg
            className={clsx(
              "transition-transform text-secondary-400",
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

      {isOpen && renderMenu()}
    </div>
  );
};
