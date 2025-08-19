import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Table, TableColumn } from "./Table";
import { Button } from "../Button";
import { Badge } from "../Badge";

const meta = {
  title: "Data Display/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Table yang powerful untuk menampilkan data dalam bentuk tabel. Mendukung sorting, selection, paging, dan berbagai kustomisasi tampilan.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      description: "Data untuk table",
      control: false,
    },
    columns: {
      description: "Konfigurasi kolom",
      control: false,
    },
    loading: {
      control: { type: "boolean" },
      description: "Loading state",
    },
    bordered: {
      control: { type: "boolean" },
      description: "Apakah menampilkan border",
    },
    striped: {
      control: { type: "boolean" },
      description: "Apakah menampilkan zebra stripes",
    },
    hoverable: {
      control: { type: "boolean" },
      description: "Apakah hover effect aktif",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran table",
    },
    emptyText: {
      control: { type: "text" },
      description: "Empty state message",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  age: number;
  joinDate: string;
}

const sampleData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    age: 32,
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active",
    age: 28,
    joinDate: "2023-02-20",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Moderator",
    status: "inactive",
    age: 35,
    joinDate: "2023-03-10",
  },
  {
    id: 4,
    name: "Alice Wilson",
    email: "alice@example.com",
    role: "User",
    status: "pending",
    age: 24,
    joinDate: "2023-04-05",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Admin",
    status: "active",
    age: 29,
    joinDate: "2023-01-25",
  },
];

// Sample columns
const basicColumns: TableColumn<User>[] = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
    sortable: true,
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
    sortable: true,
  },
  {
    key: "role",
    title: "Role",
    dataIndex: "role",
    sortable: true,
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    render: (status: string) => {
      const variants = {
        active: "success" as const,
        inactive: "secondary" as const,
        pending: "warning" as const,
      };
      return (
        <Badge variant={variants[status as keyof typeof variants]}>
          {status}
        </Badge>
      );
    },
  },
  {
    key: "age",
    title: "Age",
    dataIndex: "age",
    sortable: true,
    align: "center",
  },
];

const advancedColumns: TableColumn<User>[] = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
    sortable: true,
    width: 200,
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
    sortable: true,
    width: 250,
  },
  {
    key: "role",
    title: "Role",
    dataIndex: "role",
    sortable: true,
    width: 120,
    render: (role: string) => (
      <span
        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          role === "Admin"
            ? "bg-red-100 text-red-800"
            : role === "Moderator"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {role}
      </span>
    ),
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    width: 100,
    render: (status: string) => {
      const variants = {
        active: "success" as const,
        inactive: "secondary" as const,
        pending: "warning" as const,
      };
      return (
        <Badge variant={variants[status as keyof typeof variants]}>
          {status}
        </Badge>
      );
    },
  },
  {
    key: "joinDate",
    title: "Join Date",
    dataIndex: "joinDate",
    sortable: true,
    width: 120,
    render: (date: string) => new Date(date).toLocaleDateString(),
  },
  {
    key: "actions",
    title: "Actions",
    width: 120,
    align: "center",
    render: (_, record: User) => (
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            action("edit-clicked")(record);
          }}
        >
          Edit
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={(e) => {
            e.stopPropagation();
            action("delete-clicked")(record);
          }}
        >
          Delete
        </Button>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    bordered: false,
    striped: false,
    hoverable: true,
    size: "md",
    onRowClick: action("row-clicked"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Small</h3>
        <Table
          data={sampleData.slice(0, 3)}
          columns={basicColumns.slice(0, 4)}
          size="sm"
          bordered
        />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Medium (Default)</h3>
        <Table
          data={sampleData.slice(0, 3)}
          columns={basicColumns.slice(0, 4)}
          size="md"
          bordered
        />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Large</h3>
        <Table
          data={sampleData.slice(0, 3)}
          columns={basicColumns.slice(0, 4)}
          size="lg"
          bordered
        />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Basic</h3>
        <Table data={sampleData} columns={basicColumns} />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Bordered</h3>
        <Table data={sampleData} columns={basicColumns} bordered />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Striped</h3>
        <Table data={sampleData} columns={basicColumns} striped />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Bordered + Striped</h3>
        <Table data={sampleData} columns={basicColumns} bordered striped />
      </div>
    </div>
  ),
};

export const WithSelection: Story = {
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    return (
      <div className="space-y-4">
        <div className="text-sm text-secondary-600">
          Selected: {selectedRowKeys.join(", ")}
        </div>

        <Table
          data={sampleData}
          columns={basicColumns}
          bordered
          rowSelection={{
            selectedRowKeys,
            onChange: (keys, rows) => {
              setSelectedRowKeys(keys);
              action("selection-changed")(keys, rows);
            },
            onSelect: action("row-selected"),
            onSelectAll: action("select-all"),
          }}
          onRowClick={action("row-clicked")}
        />
      </div>
    );
  },
};

export const WithRadioSelection: Story = {
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    return (
      <div className="space-y-4">
        <div className="text-sm text-secondary-600">
          Selected: {selectedRowKeys.join(", ")}
        </div>

        <Table
          data={sampleData}
          columns={basicColumns}
          bordered
          rowSelection={{
            type: "radio",
            selectedRowKeys,
            onChange: (keys, rows) => {
              setSelectedRowKeys(keys);
              action("radio-selection-changed")(keys, rows);
            },
            onSelect: action("radio-selected"),
          }}
        />
      </div>
    );
  },
};

export const Sortable: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    bordered: true,
    onRowClick: action("row-clicked"),
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: basicColumns,
    loading: true,
    bordered: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: basicColumns,
    bordered: true,
    emptyText: "No users found",
  },
};

export const Advanced: Story = {
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([
      "1",
      "3",
    ]);

    return (
      <Table
        data={sampleData}
        columns={advancedColumns}
        bordered
        striped
        caption="User Management Table"
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
          onSelect: action("row-selected"),
          onSelectAll: action("select-all"),
        }}
        onRowClick={action("row-clicked")}
        rowClassName={(record, index) =>
          record.status === "inactive" ? "opacity-60" : ""
        }
      />
    );
  },
};

export const ScrollableTable: Story = {
  render: () => {
    // Generate more data for scrolling
    const largeData = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ["Admin", "User", "Moderator"][i % 3],
      status: ["active", "inactive", "pending"][i % 3] as
        | "active"
        | "inactive"
        | "pending",
      age: 20 + (i % 40),
      joinDate: `2023-${String(Math.floor(i / 12) + 1).padStart(
        2,
        "0"
      )}-${String((i % 12) + 1).padStart(2, "0")}`,
    }));

    const wideColumns: TableColumn[] = [
      ...advancedColumns,
      {
        key: "description",
        title: "Description",
        width: 300,
        render: () =>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      },
      {
        key: "location",
        title: "Location",
        width: 200,
        render: (_, record) => `City ${record.id}`,
      },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Horizontal Scroll</h3>
          <Table
            data={sampleData}
            columns={wideColumns}
            bordered
            scroll={{ x: 1200 }}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Vertical Scroll</h3>
          <Table
            data={largeData}
            columns={basicColumns}
            bordered
            scroll={{ y: 300 }}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Both Scrolls</h3>
          <Table
            data={largeData}
            columns={wideColumns}
            bordered
            scroll={{ x: 1200, y: 400 }}
          />
        </div>
      </div>
    );
  },
};

export const CustomRowClassName: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    bordered: true,
    rowClassName: (record: User, index: number) => {
      if (record.status === "inactive") return "bg-red-50";
      if (record.status === "pending") return "bg-yellow-50";
      if (index % 2 === 1) return "bg-blue-50";
      return "";
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [data, setData] = useState(sampleData);
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleDelete = (record: User) => {
      setLoading(true);
      setTimeout(() => {
        setData((prev) => prev.filter((item) => item.id !== record.id));
        setSelectedRowKeys((prev) =>
          prev.filter((key) => key !== String(record.id))
        );
        setLoading(false);
        action("deleted")(record);
      }, 1000);
    };

    const handleBulkDelete = () => {
      if (selectedRowKeys.length === 0) return;

      setLoading(true);
      setTimeout(() => {
        setData((prev) =>
          prev.filter((item) => !selectedRowKeys.includes(String(item.id)))
        );
        setSelectedRowKeys([]);
        setLoading(false);
        action("bulk-deleted")(selectedRowKeys);
      }, 1000);
    };

    const handleRefresh = () => {
      setLoading(true);
      setTimeout(() => {
        setData(sampleData);
        setSelectedRowKeys([]);
        setLoading(false);
        action("refreshed")();
      }, 1000);
    };

    const interactiveColumns: TableColumn<User>[] = [
      ...basicColumns.slice(0, -1), // Remove age column to make room
      {
        key: "actions",
        title: "Actions",
        align: "center",
        render: (_, record: User) => (
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                action("edit-clicked")(record);
              }}
            >
              Edit
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(record);
              }}
              disabled={loading}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ];

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-secondary-600">
            Selected: {selectedRowKeys.length} items
          </div>
          <div className="flex gap-2">
            <Button
              variant="destructive"
              disabled={selectedRowKeys.length === 0 || loading}
              onClick={handleBulkDelete}
            >
              Delete Selected
            </Button>
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={loading}
            >
              Refresh
            </Button>
          </div>
        </div>

        <Table
          data={data}
          columns={interactiveColumns}
          bordered
          loading={loading}
          rowSelection={{
            selectedRowKeys,
            onChange: setSelectedRowKeys,
            onSelect: action("row-selected"),
            onSelectAll: action("select-all"),
          }}
          onRowClick={action("row-clicked")}
          emptyText={loading ? "Loading..." : "No data available"}
        />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    loading: false,
    bordered: true,
    striped: false,
    hoverable: true,
    size: "md",
    emptyText: "No data available",
    onRowClick: action("row-clicked"),
  },
};
