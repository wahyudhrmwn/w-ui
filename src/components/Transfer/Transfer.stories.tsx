import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { Transfer, TransferItem } from "./Transfer";

const meta = {
  title: "Data Display/Transfer",
  component: Transfer,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Transfer untuk memindahkan item antar dua list. Ideal untuk scenarios seperti pemilihan permissions, assignment users ke groups, atau konfigurasi data yang memerlukan seleksi dari sumber ke target.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showSearch: {
      control: { type: "boolean" },
      description: "Apakah menampilkan search box",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah disabled",
    },
    showSelectAll: {
      control: { type: "boolean" },
      description: "Apakah menampilkan select all checkbox",
    },
    oneWay: {
      control: { type: "boolean" },
      description: "Apakah one-way transfer (tanpa tombol kembali)",
    },
  },
} satisfies Meta<typeof Transfer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleData: TransferItem[] = [
  { key: "user1", title: "John Smith", description: "Senior Developer" },
  { key: "user2", title: "Jane Doe", description: "Product Manager" },
  { key: "user3", title: "Mike Johnson", description: "UI/UX Designer" },
  { key: "user4", title: "Sarah Wilson", description: "QA Engineer" },
  { key: "user5", title: "David Brown", description: "DevOps Engineer" },
  { key: "user6", title: "Lisa Davis", description: "Marketing Specialist" },
  { key: "user7", title: "Tom Anderson", description: "Business Analyst" },
  { key: "user8", title: "Emily Chen", description: "Frontend Developer" },
  { key: "user9", title: "Robert Taylor", description: "Backend Developer" },
  { key: "user10", title: "Maria Garcia", description: "Data Scientist" },
  {
    key: "user11",
    title: "Chris Wilson",
    description: "Mobile Developer",
    disabled: true,
  },
  { key: "user12", title: "Amy Johnson", description: "Technical Writer" },
];

const permissionsData: TransferItem[] = [
  {
    key: "read",
    title: "Read",
    description: "View data and content",
    icon: (
      <svg
        className="w-4 h-4 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    key: "write",
    title: "Write",
    description: "Create and edit content",
    icon: (
      <svg
        className="w-4 h-4 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    key: "delete",
    title: "Delete",
    description: "Remove data and content",
    icon: (
      <svg
        className="w-4 h-4 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    ),
  },
  {
    key: "admin",
    title: "Admin",
    description: "Full administrative access",
    icon: (
      <svg
        className="w-4 h-4 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    key: "export",
    title: "Export",
    description: "Export data to external formats",
    icon: (
      <svg
        className="w-4 h-4 text-indigo-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    key: "import",
    title: "Import",
    description: "Import data from external sources",
    disabled: true,
    icon: (
      <svg
        className="w-4 h-4 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    ),
  },
];

export const Default: Story = {
  args: {
    dataSource: sampleData,
    targetKeys: ["user2", "user4"],
    titles: ["Available Users", "Selected Users"],
    onChange: action("transfer-changed"),
    onSelectChange: action("selection-changed"),
  },
};

export const WithSearch: Story = {
  args: {
    dataSource: sampleData,
    targetKeys: ["user1", "user3"],
    titles: ["All Users", "Team Members"],
    showSearch: true,
    searchPlaceholder: ["Search available users", "Search team members"],
    onChange: action("transfer-changed"),
    onSelectChange: action("selection-changed"),
  },
};

export const WithIcons: Story = {
  args: {
    dataSource: permissionsData,
    targetKeys: ["read"],
    titles: ["Available Permissions", "Granted Permissions"],
    showSearch: true,
    onChange: action("permissions-changed"),
    onSelectChange: action("selection-changed"),
  },
};

export const OneWayTransfer: Story = {
  args: {
    dataSource: permissionsData,
    targetKeys: [],
    titles: ["Available Features", "Enabled Features"],
    oneWay: true,
    showSearch: true,
    operations: ["Enable →", ""],
    onChange: action("features-enabled"),
    onSelectChange: action("selection-changed"),
  },
};

// Create more data for pagination demo (moved outside render for performance)
const bigData: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: `item${i + 1}`,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
}));

export const WithPagination: Story = {
  render: () => {
    return (
      <Transfer
        dataSource={bigData}
        targetKeys={["item2", "item5", "item8", "item12", "item15"]}
        titles={["Available Items", "Selected Items"]}
        showSearch
        operations={["Transfer →", "← Return"]}
        pagination={{ pageSize: 5 }}
        onChange={action("paginated-transfer")}
        onSelectChange={action("paginated-selection")}
      />
    );
  },
};

export const CustomRender: Story = {
  render: () => {
    const customData: TransferItem[] = [
      {
        key: "task1",
        title: "Setup Development Environment",
        description: "High Priority",
      },
      {
        key: "task2",
        title: "Design System Components",
        description: "Medium Priority",
      },
      { key: "task3", title: "API Integration", description: "High Priority" },
      { key: "task4", title: "Testing Framework", description: "Low Priority" },
      { key: "task5", title: "Documentation", description: "Medium Priority" },
    ];

    const customRender = (item: TransferItem) => (
      <div className="w-full">
        <div className="flex items-center justify-between">
          <span className="font-medium text-secondary-900">{item.title}</span>
          <span
            className={clsx("px-2 py-1 text-xs rounded-full", {
              "bg-red-100 text-red-800": item.description === "High Priority",
              "bg-yellow-100 text-yellow-800":
                item.description === "Medium Priority",
              "bg-green-100 text-green-800":
                item.description === "Low Priority",
            })}
          >
            {item.description}
          </span>
        </div>
      </div>
    );

    return (
      <Transfer
        dataSource={customData}
        targetKeys={["task1", "task3"]}
        titles={["Backlog", "Sprint Tasks"]}
        render={customRender}
        showSearch
        onChange={action("tasks-moved")}
        onSelectChange={action("task-selection")}
      />
    );
  },
};

export const ControlledTransfer: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(["user2", "user4"]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    const handleChange = (
      newTargetKeys: string[],
      direction: "left" | "right",
      moveKeys: string[]
    ) => {
      setTargetKeys(newTargetKeys);
      action("controlled-change")({ newTargetKeys, direction, moveKeys });
    };

    const handleSelectChange = (
      sourceSelectedKeys: string[],
      targetSelectedKeys: string[]
    ) => {
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
      action("controlled-select")({ sourceSelectedKeys, targetSelectedKeys });
    };

    const resetTransfer = () => {
      setTargetKeys([]);
      setSelectedKeys([]);
    };

    const selectAll = () => {
      setTargetKeys(
        sampleData.filter((item) => !item.disabled).map((item) => item.key)
      );
      setSelectedKeys([]);
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={resetTransfer}
            className="px-4 py-2 text-sm bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200 transition-colors"
          >
            Reset All
          </button>
          <button
            onClick={selectAll}
            className="px-4 py-2 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200 transition-colors"
          >
            Move All to Target
          </button>
        </div>

        <Transfer
          dataSource={sampleData}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          titles={["Source List", "Target List"]}
          showSearch
          showSelectAll
          onChange={handleChange}
          onSelectChange={handleSelectChange}
        />

        <div className="text-sm text-secondary-600 space-y-1">
          <div>Target Keys: {targetKeys.join(", ") || "none"}</div>
          <div>Selected Keys: {selectedKeys.join(", ") || "none"}</div>
        </div>
      </div>
    );
  },
};

export const DisabledState: Story = {
  args: {
    dataSource: sampleData.slice(0, 6),
    targetKeys: ["user2", "user4"],
    titles: ["Available Users", "Selected Users"],
    disabled: true,
    showSearch: true,
    onChange: action("disabled-transfer"),
  },
};

export const CustomOperations: Story = {
  args: {
    dataSource: permissionsData,
    targetKeys: ["read", "write"],
    titles: ["Available Permissions", "User Permissions"],
    operations: ["Grant →", "← Revoke"],
    showSearch: true,
    selectAllLabels: ["Select all permissions", "Select all granted"],
    onChange: action("permissions-transfer"),
    onSelectChange: action("permissions-select"),
  },
};
