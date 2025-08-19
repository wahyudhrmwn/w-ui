import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

// Sample data
const basicItems: BreadcrumbItem[] = [
  { label: "Home", href: "/", onClick: action("navigate-home") },
  {
    label: "Products",
    href: "/products",
    onClick: action("navigate-products"),
  },
  {
    label: "Electronics",
    href: "/products/electronics",
    onClick: action("navigate-electronics"),
  },
  { label: "Smartphones", current: true },
];

const longItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analytics", href: "/dashboard/analytics" },
  { label: "Reports", href: "/dashboard/analytics/reports" },
  { label: "Monthly", href: "/dashboard/analytics/reports/monthly" },
  { label: "2024", href: "/dashboard/analytics/reports/monthly/2024" },
  { label: "March", href: "/dashboard/analytics/reports/monthly/2024/march" },
  { label: "Sales Data", current: true },
];

const itemsWithIcons: BreadcrumbItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    onClick: action("navigate-dashboard"),
  },
  {
    label: "Users",
    href: "/users",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a4 4 0 11-8-4c.546 0 1.067.095 1.55.263"
        />
      </svg>
    ),
    onClick: action("navigate-users"),
  },
  {
    label: "Profile Settings",
    current: true,
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const meta = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Breadcrumb untuk navigasi path dengan support untuk collapsing, icon, berbagai ukuran, dan custom separator. Membantu user memahami lokasi mereka dalam hierarki aplikasi.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran breadcrumb",
    },
    maxItems: {
      control: { type: "number", min: 3, max: 10 },
      description: "Maksimal item yang ditampilkan",
    },
    showHomeIcon: {
      control: "boolean",
      description: "Tampilkan icon home untuk item pertama",
    },
    items: {
      control: false,
      description: "Array item breadcrumb",
    },
    separator: {
      control: false,
      description: "Custom separator",
    },
  },
  args: {
    items: basicItems,
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: basicItems,
  },
};

export const WithHomeIcon: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    showHomeIcon: true,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: itemsWithIcons,
  },
};

// Size variations
export const Small: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    size: "sm",
  },
};

export const Medium: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    size: "md",
  },
};

export const Large: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    size: "lg",
    showHomeIcon: true,
  },
};

// Collapsed breadcrumb
export const Collapsed: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: longItems,
    maxItems: 4,
  },
};

export const VeryCollapsed: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: longItems,
    maxItems: 3,
  },
};

// Custom separator
export const CustomSeparator: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    separator: (
      <svg
        className="w-4 h-4 text-secondary-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    ),
  },
};

export const SlashSeparator: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    separator: <span className="text-secondary-400 font-medium">/</span>,
  },
};

export const DotSeparator: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    separator: <span className="text-secondary-400 text-lg">•</span>,
  },
};

// Real world examples
export const EcommercePath: Story = {
  render: () => {
    const ecommerceItems: BreadcrumbItem[] = [
      {
        label: "Home",
        href: "/",
        icon: (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
        onClick: action("home-clicked"),
      },
      {
        label: "Electronics",
        href: "/electronics",
        onClick: action("electronics-clicked"),
      },
      {
        label: "Smartphones",
        href: "/electronics/smartphones",
        onClick: action("smartphones-clicked"),
      },
      {
        label: "Apple",
        href: "/electronics/smartphones/apple",
        onClick: action("apple-clicked"),
      },
      {
        label: "iPhone 15 Pro Max",
        current: true,
      },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            E-commerce Product Page
          </h3>
          <Breadcrumb items={ecommerceItems} size="md" />
        </div>

        <div className="p-4 bg-secondary-50 rounded-lg">
          <h4 className="font-medium text-secondary-900 mb-2">
            iPhone 15 Pro Max
          </h4>
          <p className="text-secondary-600 text-sm">
            Navigate through the product hierarchy to understand where this
            product belongs.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh penggunaan breadcrumb untuk halaman produk e-commerce dengan navigasi hierarki yang jelas.",
      },
    },
  },
};

export const AdminDashboard: Story = {
  render: () => {
    const adminItems: BreadcrumbItem[] = [
      {
        label: "Dashboard",
        href: "/admin",
        icon: (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
        onClick: action("dashboard-clicked"),
      },
      {
        label: "User Management",
        href: "/admin/users",
        icon: (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a4 4 0 11-8-4c.546 0 1.067.095 1.55.263"
            />
          </svg>
        ),
        onClick: action("users-clicked"),
      },
      {
        label: "Roles & Permissions",
        current: true,
        icon: (
          <svg
            className="w-4 h-4"
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
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Admin Panel Navigation</h3>
          <Breadcrumb items={adminItems} size="md" variant="filled" />
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-900 mb-2">
            Roles & Permissions Management
          </h4>
          <p className="text-blue-700 text-sm">
            Configure user roles and manage access permissions across the
            system.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh penggunaan breadcrumb untuk panel admin dengan ikon yang menunjukkan konteks setiap halaman.",
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      size: "md" as const,
      maxItems: 5,
      showHomeIcon: false,
      separatorType: "chevron" as const,
    });

    const [currentPath, setCurrentPath] = useState<BreadcrumbItem[]>([
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics", current: true },
    ]);

    const handleSettingChange = (key: keyof typeof settings, value: any) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    };

    const addLevel = () => {
      const newItem = {
        label: `Level ${currentPath.length + 1}`,
        href: `/level-${currentPath.length + 1}`,
        onClick: action(`level-${currentPath.length + 1}-clicked`),
      };

      setCurrentPath((prev) => [
        ...prev.map((item) => ({ ...item, current: false })),
        { ...newItem, current: true },
      ]);
    };

    const removeLevel = () => {
      if (currentPath.length > 1) {
        setCurrentPath((prev) => {
          const newPath = prev.slice(0, -1);
          return newPath.map((item, index) => ({
            ...item,
            current: index === newPath.length - 1,
          }));
        });
      }
    };

    const getSeparator = () => {
      switch (settings.separatorType) {
        case "slash":
          return <span className="text-secondary-400 font-medium">/</span>;
        case "dot":
          return <span className="text-secondary-400 text-lg">•</span>;
        case "arrow":
          return (
            <svg
              className="w-4 h-4 text-secondary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          );
        default:
          return undefined;
      }
    };

    return (
      <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold">Interactive Breadcrumb Demo</h3>

        {/* Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-50 rounded-lg">
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
            <label className="block text-sm font-medium mb-2">Max Items:</label>
            <select
              value={settings.maxItems}
              onChange={(e) =>
                handleSettingChange("maxItems", parseInt(e.target.value))
              }
              className="w-full p-2 border rounded text-sm"
            >
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={10}>No limit</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Separator:</label>
            <select
              value={settings.separatorType}
              onChange={(e) =>
                handleSettingChange("separatorType", e.target.value)
              }
              className="w-full p-2 border rounded text-sm"
            >
              <option value="chevron">Chevron</option>
              <option value="slash">Slash</option>
              <option value="dot">Dot</option>
              <option value="arrow">Arrow</option>
            </select>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={settings.showHomeIcon}
                onChange={(e) =>
                  handleSettingChange("showHomeIcon", e.target.checked)
                }
                className="mr-2"
              />
              Home Icon
            </label>
          </div>
        </div>

        {/* Path controls */}
        <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <button
            onClick={addLevel}
            className="px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Add Level
          </button>
          <button
            onClick={removeLevel}
            disabled={currentPath.length <= 1}
            className="px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Remove Level
          </button>
          <span className="flex items-center text-sm text-blue-700">
            Current depth:{" "}
            <strong className="ml-1">{currentPath.length}</strong>
          </span>
        </div>

        {/* Breadcrumb */}
        <div className="p-4 border border-secondary-200 rounded-lg bg-white">
          <Breadcrumb
            items={currentPath}
            size={settings.size}
            maxItems={settings.maxItems === 10 ? undefined : settings.maxItems}
            showHomeIcon={settings.showHomeIcon}
            separator={getSeparator()}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif untuk mencoba berbagai pengaturan breadcrumb. Tambah/kurangi level, ubah separator, dan lihat efek collapsing!",
      },
    },
  },
};
