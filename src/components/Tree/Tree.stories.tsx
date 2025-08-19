import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Tree, TreeNode } from "./Tree";
import { Button } from "../Button";

const meta = {
  title: "Data Display/Tree",
  component: Tree,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Tree untuk menampilkan data hierarkis seperti folder structure, organization chart, atau menu navigasi. Mendukung selection, checkbox, drag & drop, dan lazy loading dengan berbagai kustomisasi tampilan.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checkable: {
      control: { type: "boolean" },
      description: "Apakah menampilkan checkbox",
    },
    selectable: {
      control: { type: "boolean" },
      description: "Apakah node bisa diselect",
    },
    multiple: {
      control: { type: "boolean" },
      description: "Apakah multiple selection",
    },
    showLine: {
      control: { type: "boolean" },
      description: "Apakah menampilkan connector line",
    },
    showIcon: {
      control: { type: "boolean" },
      description: "Apakah menampilkan default icon",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran tree",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah disabled",
    },
    draggable: {
      control: { type: "boolean" },
      description: "Apakah bisa drag and drop",
    },
  },
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tree data
const sampleTreeData: TreeNode[] = [
  {
    key: "documents",
    title: "Documents",
    children: [
      {
        key: "work",
        title: "Work",
        children: [
          { key: "project1", title: "Project 1.docx", isLeaf: true },
          { key: "project2", title: "Project 2.pdf", isLeaf: true },
          { key: "presentation", title: "Presentation.pptx", isLeaf: true },
        ],
      },
      {
        key: "personal",
        title: "Personal",
        children: [
          { key: "resume", title: "Resume.pdf", isLeaf: true },
          {
            key: "photos",
            title: "Photos",
            children: [
              { key: "vacation", title: "Vacation 2023", isLeaf: true },
              { key: "family", title: "Family", isLeaf: true },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "downloads",
    title: "Downloads",
    children: [
      { key: "software", title: "Software", children: [] },
      { key: "music", title: "Music", isLeaf: true },
      { key: "videos", title: "Videos", isLeaf: true },
    ],
  },
  {
    key: "desktop",
    title: "Desktop",
    disabled: true,
    children: [{ key: "shortcut1", title: "Shortcut 1", isLeaf: true }],
  },
];

const organizationData: TreeNode[] = [
  {
    key: "ceo",
    title: "CEO - John Smith",
    icon: (
      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-xs text-white font-bold">C</span>
      </div>
    ),
    children: [
      {
        key: "cto",
        title: "CTO - Jane Doe",
        icon: (
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">T</span>
          </div>
        ),
        children: [
          {
            key: "dev1",
            title: "Senior Developer - Alice Johnson",
            isLeaf: true,
          },
          { key: "dev2", title: "Junior Developer - Bob Wilson", isLeaf: true },
          { key: "qa", title: "QA Engineer - Carol Brown", isLeaf: true },
        ],
      },
      {
        key: "cmo",
        title: "CMO - Mike Davis",
        icon: (
          <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">M</span>
          </div>
        ),
        children: [
          {
            key: "marketing1",
            title: "Marketing Specialist - Eva Martinez",
            isLeaf: true,
          },
          {
            key: "marketing2",
            title: "Content Creator - David Lee",
            isLeaf: true,
          },
        ],
      },
      {
        key: "hr",
        title: "HR Manager - Sarah Wilson",
        icon: (
          <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">H</span>
          </div>
        ),
        isLeaf: true,
      },
    ],
  },
];

export const Default: Story = {
  args: {
    treeData: sampleTreeData,
    defaultExpandedKeys: ["documents"],
    onExpand: action("node-expanded"),
    onSelect: action("node-selected"),
  },
};

export const WithCheckbox: Story = {
  args: {
    treeData: sampleTreeData,
    checkable: true,
    defaultExpandedKeys: ["documents", "work"],
    defaultCheckedKeys: ["project1", "resume"],
    onCheck: action("node-checked"),
    onExpand: action("node-expanded"),
  },
};

export const WithIcons: Story = {
  args: {
    treeData: organizationData,
    showIcon: true,
    defaultExpandedKeys: ["ceo"],
    onExpand: action("node-expanded"),
    onSelect: action("node-selected"),
  },
};

export const MultipleSelection: Story = {
  args: {
    treeData: sampleTreeData,
    multiple: true,
    defaultExpandedKeys: ["documents", "downloads"],
    defaultSelectedKeys: ["project1", "music"],
    onSelect: action("nodes-selected"),
    onExpand: action("node-expanded"),
  },
};

export const WithLines: Story = {
  args: {
    treeData: sampleTreeData,
    showLine: true,
    showIcon: true,
    defaultExpandedKeys: ["documents", "work", "personal"],
    onExpand: action("node-expanded"),
    onSelect: action("node-selected"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Tree
          treeData={sampleTreeData}
          size="sm"
          showIcon
          defaultExpandedKeys={["documents"]}
          onExpand={action("expand-sm")}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <Tree
          treeData={sampleTreeData}
          size="md"
          showIcon
          defaultExpandedKeys={["documents"]}
          onExpand={action("expand-md")}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Tree
          treeData={sampleTreeData}
          size="lg"
          showIcon
          defaultExpandedKeys={["documents"]}
          onExpand={action("expand-lg")}
        />
      </div>
    </div>
  ),
};

export const DragAndDrop: Story = {
  render: () => {
    const [treeData, setTreeData] = useState<TreeNode[]>([
      {
        key: "folder1",
        title: "Folder 1",
        children: [
          { key: "file1", title: "File 1.txt", isLeaf: true },
          { key: "file2", title: "File 2.txt", isLeaf: true },
        ],
      },
      {
        key: "folder2",
        title: "Folder 2",
        children: [{ key: "file3", title: "File 3.txt", isLeaf: true }],
      },
      { key: "file4", title: "File 4.txt", isLeaf: true },
    ]);

    const handleDrop = (info: { node: TreeNode; dragNode: TreeNode }) => {
      console.log("Drop:", info);
      // In a real app, you would update the tree structure here
      action("node-dropped")(info);
    };

    return (
      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Drag and drop nodes to reorganize the tree structure.
        </p>
        <Tree
          treeData={treeData}
          draggable
          showIcon
          defaultExpandedKeys={["folder1", "folder2"]}
          onDrop={handleDrop}
          onDragStart={action("drag-start")}
          onDragEnd={action("drag-end")}
        />
      </div>
    );
  },
};

export const ControlledTree: Story = {
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<string[]>(["documents"]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [checkedKeys, setCheckedKeys] = useState<string[]>([]);

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              setExpandedKeys(["documents", "work", "personal", "downloads"])
            }
          >
            Expand All
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setExpandedKeys([])}
          >
            Collapse All
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCheckedKeys(["project1", "project2", "resume"])}
          >
            Check Some
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCheckedKeys([])}
          >
            Uncheck All
          </Button>
        </div>

        <Tree
          treeData={sampleTreeData}
          checkable
          showIcon
          expandedKeys={expandedKeys}
          selectedKeys={selectedKeys}
          checkedKeys={checkedKeys}
          onExpand={(keys) => {
            setExpandedKeys(keys);
            action("controlled-expand")(keys);
          }}
          onSelect={(keys) => {
            setSelectedKeys(keys);
            action("controlled-select")(keys);
          }}
          onCheck={(keys) => {
            setCheckedKeys(keys);
            action("controlled-check")(keys);
          }}
        />

        <div className="text-xs text-secondary-600 space-y-1">
          <div>Expanded: {expandedKeys.join(", ") || "none"}</div>
          <div>Selected: {selectedKeys.join(", ") || "none"}</div>
          <div>Checked: {checkedKeys.join(", ") || "none"}</div>
        </div>
      </div>
    );
  },
};

export const LazyLoading: Story = {
  render: () => {
    const [treeData, setTreeData] = useState<TreeNode[]>([
      {
        key: "root1",
        title: "Lazy Load Folder 1",
      },
      {
        key: "root2",
        title: "Lazy Load Folder 2",
      },
      {
        key: "root3",
        title: "Normal Folder",
        children: [
          { key: "child1", title: "Child 1", isLeaf: true },
          { key: "child2", title: "Child 2", isLeaf: true },
        ],
      },
    ]);

    const loadData = (node: TreeNode): Promise<void> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate API call
          const newChildren = [
            {
              key: `${node.key}-child1`,
              title: `${node.title} - Child 1`,
              isLeaf: true,
            },
            {
              key: `${node.key}-child2`,
              title: `${node.title} - Child 2`,
              isLeaf: true,
            },
            { key: `${node.key}-child3`, title: `${node.title} - Child 3` }, // This one can also be lazy loaded
          ];

          setTreeData((prevData) => {
            const updateNode = (nodes: TreeNode[]): TreeNode[] => {
              return nodes.map((n) => {
                if (n.key === node.key) {
                  return { ...n, children: newChildren };
                }
                if (n.children) {
                  return { ...n, children: updateNode(n.children) };
                }
                return n;
              });
            };
            return updateNode(prevData);
          });

          resolve();
        }, 1000);
      });
    };

    return (
      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Click on "Lazy Load Folder" nodes to load their children dynamically.
        </p>
        <Tree
          treeData={treeData}
          showIcon
          loadData={loadData}
          onExpand={action("lazy-expand")}
        />
      </div>
    );
  },
};

export const SearchableTree: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("");

    const filterTreeNode = (node: TreeNode): boolean => {
      if (!searchValue) return true;
      return node.title.toLowerCase().includes(searchValue.toLowerCase());
    };

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Search Tree</label>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Type to filter nodes..."
            className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <Tree
          treeData={sampleTreeData}
          showIcon
          filterTreeNode={filterTreeNode}
          defaultExpandedKeys={
            searchValue
              ? ["documents", "work", "personal", "downloads"]
              : ["documents"]
          }
          onSelect={action("search-select")}
        />
      </div>
    );
  },
};
