import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { Pagination, SimplePagination } from "./Pagination";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Pagination untuk navigasi data dalam halaman. Tersedia dalam 2 variant: Pagination lengkap dengan nomor halaman dan SimplePagination untuk navigasi sederhana previous/next.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1, max: 20 },
      description: "Halaman saat ini (1-based)",
    },
    totalPages: {
      control: { type: "number", min: 1, max: 100 },
      description: "Total halaman",
    },
    siblingCount: {
      control: { type: "number", min: 0, max: 5 },
      description: "Jumlah halaman di sekitar halaman aktif",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran pagination",
    },
    variant: {
      control: "select",
      options: ["default", "outlined", "minimal"],
      description: "Variant styling",
    },
    showPrevNext: {
      control: "boolean",
      description: "Tampilkan tombol Previous/Next",
    },
    showFirstLast: {
      control: "boolean",
      description: "Tampilkan tombol First/Last",
    },
    disabled: {
      control: "boolean",
      description: "Disable pagination",
    },
    onPageChange: { action: "page-changed" },
  },
  args: {
    onPageChange: action("page-changed"),
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
  },
};

export const WithCurrentPage: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(5);

    return (
      <div className="p-4">
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
            action("page-changed")(page);
          }}
        />
      </div>
    );
  },
  args: {
    totalPages: 15,
    siblingCount: 2,
  },
};

// Size variations
export const Small: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 3,
    totalPages: 10,
    size: "sm",
  },
};

export const Medium: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 3,
    totalPages: 10,
    size: "md",
  },
};

export const Large: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 3,
    totalPages: 10,
    size: "lg",
  },
};

// Variant styles
export const DefaultVariant: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "default",
  },
};

export const Outlined: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "outlined",
  },
};

export const Minimal: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "minimal",
  },
};

// With all navigation buttons
export const WithAllButtons: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 5,
    totalPages: 20,
    showPrevNext: true,
    showFirstLast: true,
    siblingCount: 2,
  },
};

// Different sibling counts
export const SiblingCount0: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 0,
  },
};

export const SiblingCount2: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 2,
  },
};

// Edge cases
export const FirstPage: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 1,
    totalPages: 10,
    showFirstLast: true,
  },
};

export const LastPage: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 10,
    totalPages: 10,
    showFirstLast: true,
  },
};

export const SinglePage: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};

export const FewPages: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 2,
    totalPages: 3,
    showFirstLast: true,
  },
};

// Disabled state
export const Disabled: Story = {
  render: (args) => (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 3,
    totalPages: 10,
    disabled: true,
    showFirstLast: true,
  },
};

// Simple Pagination
export const SimplePaginationDefault: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <div className="p-4 max-w-md">
        <SimplePagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={(page) => {
            setCurrentPage(page);
            action("simple-page-changed")(page);
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "SimplePagination untuk navigasi sederhana dengan hanya tombol Previous/Next dan info halaman.",
      },
    },
  },
};

export const SimplePaginationSizes: Story = {
  render: () => (
    <div className="p-4 space-y-4 max-w-md">
      <div>
        <p className="text-sm text-secondary-600 mb-2">Small</p>
        <SimplePagination
          currentPage={2}
          totalPages={10}
          onPageChange={action("simple-sm-page-changed")}
          size="sm"
        />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Medium</p>
        <SimplePagination
          currentPage={2}
          totalPages={10}
          onPageChange={action("simple-md-page-changed")}
          size="md"
        />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Large</p>
        <SimplePagination
          currentPage={2}
          totalPages={10}
          onPageChange={action("simple-lg-page-changed")}
          size="lg"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "SimplePagination dalam berbagai ukuran.",
      },
    },
  },
};

// Table with pagination demo
export const TableWithPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 47;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Sample data
    const allData = Array.from({ length: totalItems }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ["Admin", "User", "Moderator"][i % 3],
      status: ["Active", "Inactive"][i % 2],
    }));

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = allData.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="p-6 max-w-4xl">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">User Management</h3>
          <p className="text-secondary-600 text-sm">
            Total {totalItems} users • Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-secondary-200 overflow-hidden mb-6">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-200">
              {currentData.map((user) => (
                <tr key={user.id} className="hover:bg-secondary-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={clsx(
                        "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      )}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              action("table-page-changed")(page);
            }}
            showFirstLast={totalPages > 7}
            siblingCount={1}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh penggunaan pagination dengan tabel data. Menampilkan 5 item per halaman dari total 47 item.",
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      totalPages: 20,
      size: "md" as const,
      variant: "default" as const,
      siblingCount: 1,
      showPrevNext: true,
      showFirstLast: false,
      disabled: false,
    });

    const [currentPage, setCurrentPage] = useState(5);

    const handleSettingChange = (key: keyof typeof settings, value: any) => {
      setSettings((prev) => ({ ...prev, [key]: value }));

      // Reset to valid page if needed
      if (key === "totalPages" && currentPage > value) {
        setCurrentPage(Math.max(1, value));
      }
    };

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      action("interactive-page-changed")(page);
    };

    return (
      <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold">Interactive Pagination Demo</h3>

        {/* Controls */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-secondary-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">
              Total Pages:
            </label>
            <select
              value={settings.totalPages}
              onChange={(e) =>
                handleSettingChange("totalPages", parseInt(e.target.value))
              }
              className="w-full p-2 border rounded text-sm"
            >
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select
              value={settings.size}
              onChange={(e) => handleSettingChange("size", e.target.value)}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Variant:</label>
            <select
              value={settings.variant}
              onChange={(e) => handleSettingChange("variant", e.target.value)}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="default">Default</option>
              <option value="outlined">Outlined</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Sibling Count:
            </label>
            <select
              value={settings.siblingCount}
              onChange={(e) =>
                handleSettingChange("siblingCount", parseInt(e.target.value))
              }
              className="w-full p-2 border rounded text-sm"
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={settings.showPrevNext}
                onChange={(e) =>
                  handleSettingChange("showPrevNext", e.target.checked)
                }
                className="mr-2"
              />
              Show Prev/Next
            </label>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={settings.showFirstLast}
                onChange={(e) =>
                  handleSettingChange("showFirstLast", e.target.checked)
                }
                className="mr-2"
              />
              Show First/Last
            </label>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={settings.disabled}
                onChange={(e) =>
                  handleSettingChange("disabled", e.target.checked)
                }
                className="mr-2"
              />
              Disabled
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Current Page:
            </label>
            <input
              type="number"
              min={1}
              max={settings.totalPages}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= settings.totalPages) {
                  setCurrentPage(page);
                }
              }}
              className="w-full p-2 border rounded text-sm"
            />
          </div>
        </div>

        {/* Status */}
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Current:</strong> Page {currentPage} of{" "}
            {settings.totalPages} •<strong> Buttons visible:</strong>{" "}
            {settings.showPrevNext ? "Prev/Next" : ""}{" "}
            {settings.showFirstLast ? "First/Last" : ""} •
            <strong> State:</strong>{" "}
            {settings.disabled ? "Disabled" : "Enabled"}
          </p>
        </div>

        {/* Pagination */}
        <div className="flex justify-center p-6 bg-white rounded-lg border border-secondary-200">
          <Pagination
            currentPage={currentPage}
            totalPages={settings.totalPages}
            onPageChange={handlePageChange}
            size={settings.size}
            variant={settings.variant}
            siblingCount={settings.siblingCount}
            showPrevNext={settings.showPrevNext}
            showFirstLast={settings.showFirstLast}
            disabled={settings.disabled}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif untuk mencoba semua pengaturan pagination. Ubah total halaman, ukuran, variant, dan lihat bagaimana ellipsis bekerja!",
      },
    },
  },
};
