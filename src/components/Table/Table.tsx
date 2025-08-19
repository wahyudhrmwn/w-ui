import React from "react";
import { clsx } from "clsx";

export interface TableColumn<T = any> {
  /**
   * Key unik untuk kolom
   */
  key: string;
  /**
   * Header text untuk kolom
   */
  title: React.ReactNode;
  /**
   * Data index untuk mengambil value dari row
   */
  dataIndex?: keyof T;
  /**
   * Custom render function untuk cell
   */
  render?: (value: any, record: T, index: number) => React.ReactNode;
  /**
   * Lebar kolom
   */
  width?: string | number;
  /**
   * Apakah kolom bisa di-sort
   */
  sortable?: boolean;
  /**
   * Custom sort function
   */
  sorter?: (a: T, b: T) => number;
  /**
   * Alignment untuk kolom
   */
  align?: "left" | "center" | "right";
  /**
   * Apakah kolom fixed
   */
  fixed?: "left" | "right";
  /**
   * Custom className untuk header
   */
  headerClassName?: string;
  /**
   * Custom className untuk cell
   */
  cellClassName?: string;
}

export interface TableProps<T = any> {
  /**
   * Data untuk table
   */
  data: T[];
  /**
   * Konfigurasi kolom
   */
  columns: TableColumn<T>[];
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Empty state message
   */
  emptyText?: string;
  /**
   * Apakah menampilkan border
   */
  bordered?: boolean;
  /**
   * Apakah menampilkan zebra stripes
   */
  striped?: boolean;
  /**
   * Apakah hover effect aktif
   */
  hoverable?: boolean;
  /**
   * Ukuran table
   */
  size?: "sm" | "md" | "lg";
  /**
   * Row key untuk identifikasi unique row
   */
  rowKey?: keyof T | ((record: T, index: number) => string);
  /**
   * Row selection configuration
   */
  rowSelection?: {
    selectedRowKeys?: string[];
    onChange?: (selectedRowKeys: string[], selectedRows: T[]) => void;
    onSelectAll?: (
      selected: boolean,
      selectedRows: T[],
      changeRows: T[]
    ) => void;
    onSelect?: (record: T, selected: boolean, selectedRows: T[]) => void;
    type?: "checkbox" | "radio";
    fixed?: boolean;
  };
  /**
   * Callback ketika row diklik
   */
  onRowClick?: (record: T, index: number) => void;
  /**
   * Custom row className
   */
  rowClassName?: (record: T, index: number) => string;
  /**
   * Custom className untuk table
   */
  className?: string;
  /**
   * Scroll configuration
   */
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
  /**
   * Caption untuk table
   */
  caption?: React.ReactNode;
}

const tableSizes = {
  sm: {
    cell: "px-3 py-2 text-sm",
    header: "px-3 py-3 text-sm font-medium",
  },
  md: {
    cell: "px-4 py-3 text-base",
    header: "px-4 py-4 text-base font-medium",
  },
  lg: {
    cell: "px-6 py-4 text-lg",
    header: "px-6 py-5 text-lg font-medium",
  },
};

// Sort icons
const SortIcon = ({ direction }: { direction?: "asc" | "desc" | null }) => (
  <span className="inline-flex flex-col ml-1">
    <svg
      className={clsx(
        "w-3 h-3 -mb-0.5",
        direction === "asc" ? "text-primary-600" : "text-secondary-400"
      )}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
    <svg
      className={clsx(
        "w-3 h-3",
        direction === "desc" ? "text-primary-600" : "text-secondary-400"
      )}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

// Loading component
const TableSkeleton: React.FC<{ columns: number; rows?: number }> = ({
  columns,
  rows = 5,
}) => (
  <>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <tr key={rowIndex} className="border-b border-secondary-200">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <td key={colIndex} className="px-4 py-3">
            <div className="h-4 bg-secondary-200 rounded animate-pulse" />
          </td>
        ))}
      </tr>
    ))}
  </>
);

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  emptyText = "No data available",
  bordered = false,
  striped = false,
  hoverable = true,
  size = "md",
  rowKey = "id",
  rowSelection,
  onRowClick,
  rowClassName,
  className,
  scroll,
  caption,
  ...props
}: TableProps<T>) => {
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<
    "asc" | "desc" | null
  >(null);
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>(
    rowSelection?.selectedRowKeys || []
  );

  // Generate row key
  const getRowKey = React.useCallback(
    (record: T, index: number): string => {
      if (typeof rowKey === "function") {
        return rowKey(record, index);
      }
      return String(record[rowKey] || index);
    },
    [rowKey]
  );

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortKey || !sortDirection) return data;

    const column = columns.find((col) => col.key === sortKey);
    if (!column) return data;

    return [...data].sort((a, b) => {
      if (column.sorter) {
        const result = column.sorter(a, b);
        return sortDirection === "asc" ? result : -result;
      }

      const aValue = column.dataIndex ? a[column.dataIndex] : a;
      const bValue = column.dataIndex ? b[column.dataIndex] : b;

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, columns, sortKey, sortDirection]);

  // Handle sort
  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable) return;

    if (sortKey === column.key) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortKey(null);
        setSortDirection(null);
      }
    } else {
      setSortKey(column.key);
      setSortDirection("asc");
    }
  };

  // Handle row selection
  const handleRowSelect = (record: T, selected: boolean) => {
    const key = getRowKey(record, 0);
    let newSelectedKeys: string[];

    if (rowSelection?.type === "radio") {
      newSelectedKeys = selected ? [key] : [];
    } else {
      newSelectedKeys = selected
        ? [...selectedKeys, key]
        : selectedKeys.filter((k) => k !== key);
    }

    setSelectedKeys(newSelectedKeys);
    const selectedRows = sortedData.filter((item) =>
      newSelectedKeys.includes(getRowKey(item, 0))
    );

    rowSelection?.onChange?.(newSelectedKeys, selectedRows);
    rowSelection?.onSelect?.(record, selected, selectedRows);
  };

  // Handle select all
  const handleSelectAll = (selected: boolean) => {
    const newSelectedKeys = selected
      ? sortedData.map((record, index) => getRowKey(record, index))
      : [];

    setSelectedKeys(newSelectedKeys);
    const selectedRows = selected ? sortedData : [];
    const changeRows = selected
      ? sortedData
      : sortedData.filter((item) => selectedKeys.includes(getRowKey(item, 0)));

    rowSelection?.onChange?.(newSelectedKeys, selectedRows);
    rowSelection?.onSelectAll?.(selected, selectedRows, changeRows);
  };

  // Check if all rows are selected
  const isAllSelected =
    sortedData.length > 0 && selectedKeys.length === sortedData.length;
  const isIndeterminate =
    selectedKeys.length > 0 && selectedKeys.length < sortedData.length;

  // Generate columns with selection
  const finalColumns = React.useMemo(() => {
    const cols = [...columns];

    if (rowSelection) {
      cols.unshift({
        key: "selection",
        title:
          rowSelection.type === "checkbox" ? (
            <input
              type="checkbox"
              checked={isAllSelected}
              ref={(input) => {
                if (input) input.indeterminate = isIndeterminate;
              }}
              onChange={(e) => handleSelectAll(e.target.checked)}
              className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
            />
          ) : (
            ""
          ),
        width: 50,
        fixed: rowSelection.fixed ? "left" : undefined,
        render: (_: any, record: T, index: number) => {
          const key = getRowKey(record, index);
          const checked = selectedKeys.includes(key);

          return (
            <input
              type={rowSelection.type || "checkbox"}
              name={rowSelection.type === "radio" ? "table-radio" : undefined}
              checked={checked}
              onChange={(e) => handleRowSelect(record, e.target.checked)}
              className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
              onClick={(e) => e.stopPropagation()}
            />
          );
        },
      });
    }

    return cols;
  }, [
    columns,
    rowSelection,
    isAllSelected,
    isIndeterminate,
    selectedKeys,
    getRowKey,
  ]);

  const tableContent = (
    <table className={clsx("w-full", className)} {...props}>
      {caption && (
        <caption className="text-left mb-4 text-secondary-600">
          {caption}
        </caption>
      )}

      <thead className="bg-secondary-50">
        <tr>
          {finalColumns.map((column) => (
            <th
              key={column.key}
              className={clsx(
                // Base styles
                "text-left font-medium text-secondary-900 border-b border-secondary-200",
                tableSizes[size].header,

                // Alignment
                column.align === "center" && "text-center",
                column.align === "right" && "text-right",

                // Sortable cursor
                column.sortable &&
                  "cursor-pointer select-none hover:bg-secondary-100",

                // Bordered
                bordered && "border-r border-secondary-200 last:border-r-0",

                // Custom className
                column.headerClassName
              )}
              style={{ width: column.width }}
              onClick={() => handleSort(column)}
            >
              <div className="flex items-center justify-between">
                <span>{column.title}</span>
                {column.sortable && (
                  <SortIcon
                    direction={sortKey === column.key ? sortDirection : null}
                  />
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-white">
        {loading ? (
          <TableSkeleton columns={finalColumns.length} />
        ) : sortedData.length === 0 ? (
          <tr>
            <td
              colSpan={finalColumns.length}
              className="px-4 py-8 text-center text-secondary-500"
            >
              {emptyText}
            </td>
          </tr>
        ) : (
          sortedData.map((record, index) => {
            const key = getRowKey(record, index);
            const isSelected = selectedKeys.includes(key);

            return (
              <tr
                key={key}
                className={clsx(
                  // Base styles
                  "border-b border-secondary-200 transition-colors",

                  // Striped
                  striped && index % 2 === 1 && "bg-secondary-50",

                  // Hoverable
                  hoverable && "hover:bg-secondary-50",

                  // Selected
                  isSelected && "bg-primary-50",

                  // Clickable
                  onRowClick && "cursor-pointer",

                  // Custom className
                  rowClassName?.(record, index)
                )}
                onClick={() => onRowClick?.(record, index)}
              >
                {finalColumns.map((column) => {
                  const value = column.dataIndex
                    ? record[column.dataIndex]
                    : record;
                  const content = column.render
                    ? column.render(value, record, index)
                    : String(value ?? "");

                  return (
                    <td
                      key={column.key}
                      className={clsx(
                        // Base styles
                        "text-secondary-900",
                        tableSizes[size].cell,

                        // Alignment
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right",

                        // Bordered
                        bordered &&
                          "border-r border-secondary-200 last:border-r-0",

                        // Custom className
                        column.cellClassName
                      )}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );

  // Wrap with scroll container if needed
  if (scroll?.x || scroll?.y) {
    return (
      <div
        className={clsx(
          "overflow-auto",
          bordered && "border border-secondary-200 rounded-lg"
        )}
        style={{
          maxWidth: scroll.x,
          maxHeight: scroll.y,
        }}
      >
        {tableContent}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        bordered && "border border-secondary-200 rounded-lg overflow-hidden"
      )}
    >
      {tableContent}
    </div>
  );
};

Table.displayName = "Table";
