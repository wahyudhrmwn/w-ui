import React, { useState, useCallback, useMemo } from "react";
import clsx from "clsx";

export interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
  icon?: React.ReactNode;
  disabled?: boolean;
  disableCheckbox?: boolean;
  selectable?: boolean;
  isLeaf?: boolean;
  expanded?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  data?: any;
}

export interface TreeProps {
  treeData: TreeNode[];
  defaultExpandedKeys?: string[];
  defaultSelectedKeys?: string[];
  defaultCheckedKeys?: string[];
  expandedKeys?: string[];
  selectedKeys?: string[];
  checkedKeys?: string[];
  onExpand?: (
    expandedKeys: string[],
    info: { node: TreeNode; expanded: boolean }
  ) => void;
  onSelect?: (
    selectedKeys: string[],
    info: { node: TreeNode; selected: boolean }
  ) => void;
  onCheck?: (
    checkedKeys: string[],
    info: { node: TreeNode; checked: boolean; checkedNodes: TreeNode[] }
  ) => void;
  checkable?: boolean;
  selectable?: boolean;
  multiple?: boolean;
  showLine?: boolean;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  draggable?: boolean;
  onDragStart?: (info: { node: TreeNode; event: React.DragEvent }) => void;
  onDragEnd?: (info: { node: TreeNode; event: React.DragEvent }) => void;
  onDrop?: (info: {
    node: TreeNode;
    dragNode: TreeNode;
    dropToGap: boolean;
  }) => void;
  filterTreeNode?: (node: TreeNode) => boolean;
  loadData?: (node: TreeNode) => Promise<void>;
  className?: string;
  style?: React.CSSProperties;
}

const treeSizes = {
  sm: {
    node: "py-1 px-2 text-xs",
    icon: "w-3 h-3",
    indent: "ml-4",
    expander: "w-3 h-3",
  },
  md: {
    node: "py-1.5 px-3 text-sm",
    icon: "w-4 h-4",
    indent: "ml-5",
    expander: "w-4 h-4",
  },
  lg: {
    node: "py-2 px-4 text-base",
    icon: "w-5 h-5",
    indent: "ml-6",
    expander: "w-5 h-5",
  },
};

export const Tree: React.FC<TreeProps> = ({
  treeData,
  defaultExpandedKeys = [],
  defaultSelectedKeys = [],
  defaultCheckedKeys = [],
  expandedKeys: controlledExpandedKeys,
  selectedKeys: controlledSelectedKeys,
  checkedKeys: controlledCheckedKeys,
  onExpand,
  onSelect,
  onCheck,
  checkable = false,
  selectable = true,
  multiple = false,
  showLine = false,
  showIcon = false,
  size = "md",
  disabled = false,
  draggable = false,
  onDragStart,
  onDragEnd,
  onDrop,
  filterTreeNode,
  loadData,
  className,
  style,
  ...props
}) => {
  const [internalExpandedKeys, setInternalExpandedKeys] =
    useState<string[]>(defaultExpandedKeys);
  const [internalSelectedKeys, setInternalSelectedKeys] =
    useState<string[]>(defaultSelectedKeys);
  const [internalCheckedKeys, setInternalCheckedKeys] =
    useState<string[]>(defaultCheckedKeys);
  const [dragOverKey, setDragOverKey] = useState<string | null>(null);
  const [dropPosition, setDropPosition] = useState<number | null>(null);

  const expandedKeys =
    controlledExpandedKeys !== undefined
      ? controlledExpandedKeys
      : internalExpandedKeys;
  const selectedKeys =
    controlledSelectedKeys !== undefined
      ? controlledSelectedKeys
      : internalSelectedKeys;
  const checkedKeys =
    controlledCheckedKeys !== undefined
      ? controlledCheckedKeys
      : internalCheckedKeys;

  const sizeClasses = treeSizes[size];

  // Create flat map of all nodes for easy lookup
  const nodeMap = useMemo(() => {
    const map = new Map<string, TreeNode>();

    const traverse = (nodes: TreeNode[]) => {
      nodes.forEach((node) => {
        map.set(node.key, node);
        if (node.children) {
          traverse(node.children);
        }
      });
    };

    traverse(treeData);
    return map;
  }, [treeData]);

  // Calculate checked state including indeterminate
  const getCheckedState = useCallback(
    (node: TreeNode): { checked: boolean; indeterminate: boolean } => {
      if (!node.children || node.children.length === 0) {
        return {
          checked: checkedKeys.includes(node.key),
          indeterminate: false,
        };
      }

      const childStates = node.children.map((child) => getCheckedState(child));
      const checkedCount = childStates.filter((state) => state.checked).length;
      const indeterminateCount = childStates.filter(
        (state) => state.indeterminate
      ).length;

      if (checkedCount === 0 && indeterminateCount === 0) {
        return { checked: false, indeterminate: false };
      } else if (checkedCount === node.children.length) {
        return { checked: true, indeterminate: false };
      } else {
        return { checked: false, indeterminate: true };
      }
    },
    [checkedKeys]
  );

  const handleExpand = useCallback(
    (node: TreeNode) => {
      if (node.disabled) return;

      const newExpandedKeys = expandedKeys.includes(node.key)
        ? expandedKeys.filter((key) => key !== node.key)
        : [...expandedKeys, node.key];

      if (controlledExpandedKeys === undefined) {
        setInternalExpandedKeys(newExpandedKeys);
      }

      onExpand?.(newExpandedKeys, {
        node,
        expanded: !expandedKeys.includes(node.key),
      });

      // Load data if needed
      if (!expandedKeys.includes(node.key) && loadData && !node.children) {
        loadData(node);
      }
    },
    [expandedKeys, controlledExpandedKeys, onExpand, loadData]
  );

  const handleSelect = useCallback(
    (node: TreeNode) => {
      if (node.disabled || !selectable || node.selectable === false) return;

      let newSelectedKeys: string[];

      if (multiple) {
        newSelectedKeys = selectedKeys.includes(node.key)
          ? selectedKeys.filter((key) => key !== node.key)
          : [...selectedKeys, node.key];
      } else {
        newSelectedKeys = selectedKeys.includes(node.key) ? [] : [node.key];
      }

      if (controlledSelectedKeys === undefined) {
        setInternalSelectedKeys(newSelectedKeys);
      }

      onSelect?.(newSelectedKeys, {
        node,
        selected: !selectedKeys.includes(node.key),
      });
    },
    [selectedKeys, controlledSelectedKeys, onSelect, selectable, multiple]
  );

  const handleCheck = useCallback(
    (node: TreeNode) => {
      if (node.disabled || node.disableCheckbox) return;

      const getAllChildrenKeys = (parentNode: TreeNode): string[] => {
        if (!parentNode.children) return [];
        return parentNode.children.reduce((acc, child) => {
          return [...acc, child.key, ...getAllChildrenKeys(child)];
        }, [] as string[]);
      };

      const { checked } = getCheckedState(node);
      let newCheckedKeys = [...checkedKeys];

      if (checked) {
        // Uncheck this node and all children
        newCheckedKeys = newCheckedKeys.filter((key) => key !== node.key);
        const childKeys = getAllChildrenKeys(node);
        newCheckedKeys = newCheckedKeys.filter(
          (key) => !childKeys.includes(key)
        );
      } else {
        // Check this node and all children
        newCheckedKeys.push(node.key);
        const childKeys = getAllChildrenKeys(node);
        childKeys.forEach((key) => {
          if (!newCheckedKeys.includes(key)) {
            newCheckedKeys.push(key);
          }
        });
      }

      if (controlledCheckedKeys === undefined) {
        setInternalCheckedKeys(newCheckedKeys);
      }

      const checkedNodes = newCheckedKeys
        .map((key) => nodeMap.get(key))
        .filter(Boolean) as TreeNode[];

      onCheck?.(newCheckedKeys, {
        node,
        checked: !checked,
        checkedNodes,
      });
    },
    [checkedKeys, controlledCheckedKeys, onCheck, getCheckedState, nodeMap]
  );

  const handleDragStart = useCallback(
    (e: React.DragEvent, node: TreeNode) => {
      if (!draggable || node.disabled) {
        e.preventDefault();
        return;
      }

      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", node.key);
      onDragStart?.({ node, event: e });
    },
    [draggable, onDragStart]
  );

  const handleDragEnd = useCallback(
    (e: React.DragEvent, node: TreeNode) => {
      setDragOverKey(null);
      setDropPosition(null);
      onDragEnd?.({ node, event: e });
    },
    [onDragEnd]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent, node: TreeNode) => {
      if (!draggable) return;

      e.preventDefault();
      e.dataTransfer.dropEffect = "move";

      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const y = e.clientY - rect.top;
      const position = y < rect.height / 2 ? 0 : 1; // 0 = above, 1 = below

      setDragOverKey(node.key);
      setDropPosition(position);
    },
    [draggable]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent, node: TreeNode) => {
      if (!draggable) return;

      e.preventDefault();
      const draggedKey = e.dataTransfer.getData("text/plain");
      const draggedNode = nodeMap.get(draggedKey);

      if (draggedNode && draggedNode.key !== node.key) {
        onDrop?.({
          node,
          dragNode: draggedNode,
          dropToGap: dropPosition !== null,
        });
      }

      setDragOverKey(null);
      setDropPosition(null);
    },
    [draggable, onDrop, nodeMap, dropPosition]
  );

  const renderNode = (node: TreeNode, level: number = 0) => {
    if (filterTreeNode && !filterTreeNode(node)) {
      return null;
    }

    const isExpanded = expandedKeys.includes(node.key);
    const isSelected = selectedKeys.includes(node.key);
    const hasChildren = node.children && node.children.length > 0;
    const { checked, indeterminate } = checkable
      ? getCheckedState(node)
      : { checked: false, indeterminate: false };
    const isDragOver = dragOverKey === node.key;

    return (
      <div key={node.key}>
        {/* Node */}
        <div
          className={clsx(
            "flex items-center cursor-pointer transition-colors group",
            sizeClasses.node,
            {
              "bg-primary-50 text-primary-700": isSelected && !node.disabled,
              "opacity-50 cursor-not-allowed": node.disabled,
              "bg-primary-100": isDragOver,
              "border-t-2 border-primary-500": isDragOver && dropPosition === 0,
              "border-b-2 border-primary-500": isDragOver && dropPosition === 1,
            },
            !node.disabled && "hover:bg-secondary-50"
          )}
          style={{
            paddingLeft: `${
              level * (size === "sm" ? 16 : size === "md" ? 20 : 24)
            }px`,
          }}
          draggable={draggable && !node.disabled}
          onDragStart={(e) => handleDragStart(e, node)}
          onDragEnd={(e) => handleDragEnd(e, node)}
          onDragOver={(e) => handleDragOver(e, node)}
          onDrop={(e) => handleDrop(e, node)}
        >
          {/* Expander */}
          {hasChildren || !node.isLeaf ? (
            <button
              className={clsx(
                "flex items-center justify-center mr-2 rounded transition-colors",
                sizeClasses.expander,
                node.disabled ? "cursor-not-allowed" : "hover:bg-secondary-200"
              )}
              onClick={() => handleExpand(node)}
              disabled={node.disabled}
            >
              <svg
                className={clsx(
                  "w-3 h-3 transition-transform",
                  isExpanded && "rotate-90"
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
            </button>
          ) : (
            <div className={clsx("mr-2", sizeClasses.expander)} />
          )}

          {/* Checkbox */}
          {checkable && (
            <label
              className={clsx(
                "flex items-center mr-2 cursor-pointer",
                node.disabled && "cursor-not-allowed"
              )}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                ref={(input) => {
                  if (input) input.indeterminate = indeterminate;
                }}
                onChange={() => handleCheck(node)}
                disabled={node.disabled || node.disableCheckbox}
              />
              <div
                className={clsx(
                  "w-4 h-4 border-2 rounded transition-colors flex items-center justify-center",
                  {
                    "border-primary-500 bg-primary-500": checked,
                    "border-secondary-300": !checked && !indeterminate,
                    "border-primary-500 bg-primary-100": indeterminate,
                    "opacity-50": node.disabled || node.disableCheckbox,
                  }
                )}
              >
                {checked && (
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
                {indeterminate && (
                  <div className="w-2 h-0.5 bg-primary-500 rounded" />
                )}
              </div>
            </label>
          )}

          {/* Icon */}
          {(showIcon || node.icon) && (
            <div className={clsx("mr-2 flex-shrink-0", sizeClasses.icon)}>
              {node.icon || (
                <svg fill="currentColor" viewBox="0 0 24 24">
                  {hasChildren ? (
                    <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                  ) : (
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  )}
                </svg>
              )}
            </div>
          )}

          {/* Title */}
          <span
            className={clsx("flex-1 truncate", {
              "font-medium": isSelected,
            })}
            onClick={() => handleSelect(node)}
          >
            {node.title}
          </span>

          {/* Line connector */}
          {showLine && level > 0 && (
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-secondary-200"
              style={{
                left: `${
                  (level - 1) * (size === "sm" ? 16 : size === "md" ? 20 : 24) +
                  8
                }px`,
              }}
            />
          )}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div>
            {node.children!.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "tree-container select-none",
        {
          "opacity-50 pointer-events-none": disabled,
        },
        className
      )}
      style={style}
      {...props}
    >
      {treeData.map((node) => renderNode(node))}
    </div>
  );
};
