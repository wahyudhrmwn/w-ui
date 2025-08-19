import React, { useState, useMemo, useCallback, useEffect } from "react";
import clsx from "clsx";

export interface TransferItem {
  key: string;
  title: string;
  description?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TransferProps {
  dataSource: TransferItem[];
  targetKeys?: string[];
  selectedKeys?: string[];
  onChange?: (
    targetKeys: string[],
    direction: "left" | "right",
    moveKeys: string[]
  ) => void;
  onSelectChange?: (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => void;
  onScroll?: (
    direction: "left" | "right",
    e: React.UIEvent<HTMLDivElement, UIEvent>
  ) => void;
  render?: (item: TransferItem) => React.ReactNode;
  titles?: [string, string];
  operations?: [string, string];
  showSearch?: boolean;
  searchPlaceholder?: [string, string];
  filterOption?: (inputValue: string, item: TransferItem) => boolean;
  disabled?: boolean;
  showSelectAll?: boolean;
  selectAllLabels?: [React.ReactNode, React.ReactNode];
  oneWay?: boolean;
  pagination?: {
    pageSize?: number;
    simple?: boolean;
  };
  listStyle?: React.CSSProperties;
  operationStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
}

const defaultFilterOption = (
  inputValue: string,
  item: TransferItem
): boolean => {
  return Boolean(
    item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
    (item.description &&
      item.description.toLowerCase().includes(inputValue.toLowerCase()))
  );
};

export const Transfer: React.FC<TransferProps> = ({
  dataSource = [],
  targetKeys = [],
  selectedKeys = [],
  onChange,
  onSelectChange,
  onScroll,
  render,
  titles = ["Source", "Target"],
  operations = ["→", "←"],
  showSearch = false,
  searchPlaceholder = ["Search source", "Search target"],
  filterOption = defaultFilterOption,
  disabled = false,
  showSelectAll = true,
  selectAllLabels = ["Select all", "Select all"],
  oneWay = false,
  pagination,
  listStyle,
  operationStyle,
  className,
  style,
  ...props
}) => {
  const [leftSearch, setLeftSearch] = useState("");
  const [rightSearch, setRightSearch] = useState("");
  const [leftSelectedKeys, setLeftSelectedKeys] = useState<string[]>([]);
  const [rightSelectedKeys, setRightSelectedKeys] = useState<string[]>([]);
  const [leftCurrentPage, setLeftCurrentPage] = useState(1);
  const [rightCurrentPage, setRightCurrentPage] = useState(1);

  // Filter data into source and target
  const { sourceData, targetData } = useMemo(() => {
    const source = dataSource.filter((item) => !targetKeys.includes(item.key));
    const target = dataSource.filter((item) => targetKeys.includes(item.key));
    return { sourceData: source, targetData: target };
  }, [dataSource, targetKeys]);

  // Filter data based on search
  const filteredSourceData = useMemo(() => {
    if (!leftSearch) return sourceData;
    return sourceData.filter((item) => filterOption(leftSearch, item));
  }, [sourceData, leftSearch, filterOption]);

  const filteredTargetData = useMemo(() => {
    if (!rightSearch) return targetData;
    return targetData.filter((item) => filterOption(rightSearch, item));
  }, [targetData, rightSearch, filterOption]);

  // Pagination - optimized with useMemo
  const paginationData = useMemo(() => {
    const pageSize = pagination?.pageSize || 10;
    const showPagination =
      pagination &&
      (filteredSourceData.length > pageSize ||
        filteredTargetData.length > pageSize);

    const paginatedSourceData = showPagination
      ? filteredSourceData.slice(
          (leftCurrentPage - 1) * pageSize,
          leftCurrentPage * pageSize
        )
      : filteredSourceData;

    const paginatedTargetData = showPagination
      ? filteredTargetData.slice(
          (rightCurrentPage - 1) * pageSize,
          rightCurrentPage * pageSize
        )
      : filteredTargetData;

    return {
      pageSize,
      showPagination,
      paginatedSourceData,
      paginatedTargetData,
    };
  }, [
    pagination,
    filteredSourceData,
    filteredTargetData,
    leftCurrentPage,
    rightCurrentPage,
  ]);

  const { pageSize, showPagination, paginatedSourceData, paginatedTargetData } = paginationData;

  // Update internal selected keys when prop changes
  useEffect(() => {
    const leftKeys = selectedKeys.filter((key) => !targetKeys.includes(key));
    const rightKeys = selectedKeys.filter((key) => targetKeys.includes(key));
    setLeftSelectedKeys(leftKeys);
    setRightSelectedKeys(rightKeys);
  }, [selectedKeys, targetKeys]);

  const handleMove = useCallback(
    (direction: "left" | "right") => {
      const moveKeys =
        direction === "right" ? leftSelectedKeys : rightSelectedKeys;
      if (moveKeys.length === 0) return;

      const newTargetKeys =
        direction === "right"
          ? [...targetKeys, ...moveKeys]
          : targetKeys.filter((key) => !moveKeys.includes(key));

      onChange?.(newTargetKeys, direction, moveKeys);

      // Clear selections after move
      if (direction === "right") {
        setLeftSelectedKeys([]);
      } else {
        setRightSelectedKeys([]);
      }

      onSelectChange?.([], []);
    },
    [leftSelectedKeys, rightSelectedKeys, targetKeys, onChange, onSelectChange]
  );

  const handleSelectChange = useCallback(
    (keys: string[], side: "left" | "right") => {
      if (side === "left") {
        setLeftSelectedKeys(keys);
      } else {
        setRightSelectedKeys(keys);
      }
      onSelectChange?.(
        side === "left" ? keys : leftSelectedKeys,
        side === "right" ? keys : rightSelectedKeys
      );
    },
    [leftSelectedKeys, rightSelectedKeys, onSelectChange]
  );

  const handleSelectAll = useCallback(
    (side: "left" | "right", checked: boolean) => {
      const currentData =
        side === "left" ? paginatedSourceData : paginatedTargetData;
      const availableKeys = currentData
        .filter((item) => !item.disabled)
        .map((item) => item.key);

      if (checked) {
        handleSelectChange(availableKeys, side);
      } else {
        handleSelectChange([], side);
      }
    },
    [paginatedSourceData, paginatedTargetData, handleSelectChange]
  );

  const renderList = (
    data: TransferItem[],
    side: "left" | "right",
    selectedKeys: string[],
    search: string,
    onSearchChange: (value: string) => void
  ) => {
    const allSelectableKeys = data
      .filter((item) => !item.disabled)
      .map((item) => item.key);
    const isAllSelected =
      allSelectableKeys.length > 0 &&
      allSelectableKeys.every((key) => selectedKeys.includes(key));
    const isIndeterminate =
      selectedKeys.length > 0 && selectedKeys.length < allSelectableKeys.length;

    return (
      <div className="flex flex-col h-80 border border-secondary-200 rounded-xl bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-secondary-150 bg-secondary-25 rounded-t-xl">
          <div className="flex items-center">
            {showSelectAll && (
              <label className="flex items-center mr-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isAllSelected}
                  ref={(input) => {
                    if (input) input.indeterminate = isIndeterminate;
                  }}
                  onChange={(e) => handleSelectAll(side, e.target.checked)}
                  disabled={disabled || allSelectableKeys.length === 0}
                />
                <div
                  className={clsx(
                    "w-4 h-4 border-2 rounded-sm transition-all duration-200 flex items-center justify-center mr-2",
                    "group-hover:border-primary-400 group-hover:shadow-sm",
                    {
                      "border-primary-500 bg-primary-500 shadow-primary-100 shadow-sm": isAllSelected,
                      "border-secondary-300 bg-white":
                        !isAllSelected && !isIndeterminate,
                      "border-primary-500 bg-primary-50": isIndeterminate,
                      "opacity-50 cursor-not-allowed": disabled,
                    }
                  )}
                >
                  {isAllSelected && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                  {isIndeterminate && (
                    <div className="w-2.5 h-0.5 bg-primary-500 rounded-full" />
                  )}
                </div>
              </label>
            )}
            <h3 className="font-semibold text-secondary-900 text-sm">
              {titles[side === "left" ? 0 : 1]}
            </h3>
          </div>
          <div className="text-xs text-secondary-600 bg-white border border-secondary-200 px-2.5 py-1 rounded-full shadow-sm">
            <span className="font-semibold text-primary-600">{selectedKeys.length}</span>
            <span className="mx-1 text-secondary-400">/</span>
            <span className="font-medium">{data.length}</span>
          </div>
        </div>

        {/* Search */}
        {showSearch && (
          <div className="p-3 border-b border-secondary-100 bg-secondary-50/30">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={searchPlaceholder[side === "left" ? 0 : 1]}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-secondary-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                disabled={disabled}
              />
            </div>
          </div>
        )}

        {/* List */}
        <div
          className="flex-1 overflow-auto"
          style={listStyle}
          onScroll={(e) => onScroll?.(side, e)}
        >
          {data.length === 0 ? (
            <div className="flex items-center justify-center h-full text-secondary-500">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-2 text-secondary-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-3a2 2 0 00-2 2v1M7 13h10v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2z"
                  />
                </svg>
                <p className="text-sm">No data</p>
              </div>
            </div>
          ) : (
            <div className="p-2 space-y-1">
              {data.map((item) => (
                <label
                  key={item.key}
                  className={clsx(
                    "flex items-center p-2 rounded cursor-pointer transition-colors group",
                    {
                      "hover:bg-secondary-50": !item.disabled && !disabled,
                      "bg-primary-50": selectedKeys.includes(item.key),
                      "opacity-50 cursor-not-allowed":
                        item.disabled || disabled,
                    }
                  )}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={selectedKeys.includes(item.key)}
                    onChange={(e) => {
                      const newKeys = e.target.checked
                        ? [...selectedKeys, item.key]
                        : selectedKeys.filter((key) => key !== item.key);
                      handleSelectChange(newKeys, side);
                    }}
                    disabled={item.disabled || disabled}
                  />
                  <div
                    className={clsx(
                      "w-4 h-4 border-2 rounded transition-colors flex items-center justify-center mr-3 flex-shrink-0",
                      {
                        "border-primary-500 bg-primary-500":
                          selectedKeys.includes(item.key),
                        "border-secondary-300": !selectedKeys.includes(
                          item.key
                        ),
                        "opacity-50": item.disabled || disabled,
                      }
                    )}
                  >
                    {selectedKeys.includes(item.key) && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>

                  {item.icon && (
                    <div className="w-4 h-4 mr-3 flex-shrink-0">
                      {item.icon}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    {render ? (
                      render(item)
                    ) : (
                      <>
                        <div className="text-sm font-medium text-secondary-900 truncate">
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="text-xs text-secondary-500 truncate mt-1">
                            {item.description}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {showPagination && (
          <div className="flex items-center justify-between p-3 border-t border-secondary-100 bg-secondary-25 rounded-b-xl">
            <span className="text-xs text-secondary-600 font-medium">
              Page <span className="text-primary-600">{side === "left" ? leftCurrentPage : rightCurrentPage}</span> of {Math.ceil(
                (side === "left"
                  ? filteredSourceData.length
                  : filteredTargetData.length) / pageSize
              )}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => {
                  if (side === "left") {
                    setLeftCurrentPage((prev) => Math.max(1, prev - 1));
                  } else {
                    setRightCurrentPage((prev) => Math.max(1, prev - 1));
                  }
                }}
                disabled={
                  side === "left"
                    ? leftCurrentPage === 1
                    : rightCurrentPage === 1
                }
                className="w-7 h-7 rounded-md bg-white border border-secondary-200 text-secondary-600 hover:text-primary-600 hover:border-primary-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center text-sm"
                title="Previous page"
              >
                ←
              </button>
              <button
                onClick={() => {
                  if (side === "left") {
                    setLeftCurrentPage((prev) =>
                      Math.min(
                        Math.ceil(filteredSourceData.length / pageSize),
                        prev + 1
                      )
                    );
                  } else {
                    setRightCurrentPage((prev) =>
                      Math.min(
                        Math.ceil(filteredTargetData.length / pageSize),
                        prev + 1
                      )
                    );
                  }
                }}
                disabled={
                  side === "left"
                    ? leftCurrentPage >=
                      Math.ceil(filteredSourceData.length / pageSize)
                    : rightCurrentPage >=
                      Math.ceil(filteredTargetData.length / pageSize)
                }
                className="w-7 h-7 rounded-md bg-white border border-secondary-200 text-secondary-600 hover:text-primary-600 hover:border-primary-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center text-sm"
                title="Next page"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={clsx("flex items-center gap-4", className)}
      style={style}
      {...props}
    >
      {/* Left List */}
      <div className="flex-1">
        {renderList(
          paginatedSourceData,
          "left",
          leftSelectedKeys,
          leftSearch,
          setLeftSearch
        )}
      </div>

      {/* Operations */}
      <div className="flex flex-col gap-3 items-center" style={operationStyle}>
        <div className="bg-white border border-secondary-200 rounded-xl p-3 shadow-sm">
          <button
            onClick={() => handleMove("right")}
            disabled={disabled || leftSelectedKeys.length === 0}
            className={clsx(
              "w-12 h-10 text-lg font-bold rounded-lg border-2 transition-all duration-200 flex items-center justify-center",
              "hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              {
                "bg-primary-600 text-white border-primary-600 hover:bg-primary-700 hover:border-primary-700 shadow-primary-200":
                  !disabled && leftSelectedKeys.length > 0,
                "bg-secondary-50 text-secondary-400 border-secondary-200 cursor-not-allowed shadow-none":
                  disabled || leftSelectedKeys.length === 0,
              }
            )}
            title={`Move ${leftSelectedKeys.length} items to target`}
          >
            {operations[0]}
          </button>

          {!oneWay && (
            <button
              onClick={() => handleMove("left")}
              disabled={disabled || rightSelectedKeys.length === 0}
              className={clsx(
                "w-12 h-10 text-lg font-bold rounded-lg border-2 transition-all duration-200 flex items-center justify-center mt-2",
                "hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                {
                  "bg-primary-600 text-white border-primary-600 hover:bg-primary-700 hover:border-primary-700 shadow-primary-200":
                    !disabled && rightSelectedKeys.length > 0,
                  "bg-secondary-50 text-secondary-400 border-secondary-200 cursor-not-allowed shadow-none":
                    disabled || rightSelectedKeys.length === 0,
                }
              )}
              title={`Move ${rightSelectedKeys.length} items to source`}
            >
              {operations[1]}
            </button>
          )}
        </div>
      </div>

      {/* Right List */}
      <div className="flex-1">
        {renderList(
          paginatedTargetData,
          "right",
          rightSelectedKeys,
          rightSearch,
          setRightSearch
        )}
      </div>
    </div>
  );
};
