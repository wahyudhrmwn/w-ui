import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Tabs } from "./Tabs";

// Icons untuk contoh
const HomeIcon = () => (
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
);

const UserIcon = () => (
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const SettingsIcon = () => (
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
);

const ChartIcon = () => (
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
);

// Sample data
const basicTabs = [
  {
    id: "home",
    label: "Home",
    content: (
      <div className="p-4 bg-secondary-50 rounded">
        Welcome to the home page! This is where you'll find an overview of
        everything.
      </div>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    content: (
      <div className="p-4 bg-secondary-50 rounded">
        Manage your profile information, avatar, and personal settings here.
      </div>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    content: (
      <div className="p-4 bg-secondary-50 rounded">
        Configure your application preferences and account settings.
      </div>
    ),
  },
];

const tabsWithIcons = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <HomeIcon />,
    content: (
      <div className="p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Dashboard</h3>
        <p className="text-blue-700">
          Monitor your key metrics and recent activity here.
        </p>
      </div>
    ),
  },
  {
    id: "users",
    label: "Users",
    icon: <UserIcon />,
    badge: "23",
    content: (
      <div className="p-6 bg-green-50 rounded-lg">
        <h3 className="font-semibold text-green-900 mb-2">Users Management</h3>
        <p className="text-green-700">Manage user accounts and permissions.</p>
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <ChartIcon />,
    content: (
      <div className="p-6 bg-purple-50 rounded-lg">
        <h3 className="font-semibold text-purple-900 mb-2">Analytics</h3>
        <p className="text-purple-700">View detailed analytics and reports.</p>
      </div>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    disabled: true,
    content: (
      <div className="p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Settings</h3>
        <p className="text-gray-700">Configure application settings.</p>
      </div>
    ),
  },
];

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Tabs untuk navigasi tab dengan berbagai variant, ukuran, dan orientasi. Mendukung icons, badges, disabled state, dan konten yang dapat dikustomisasi.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pills", "underline", "bordered"],
      description: "Variant styling untuk tabs",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran tabs",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientasi tabs",
    },
    contentPosition: {
      control: "select",
      options: ["below", "right"],
      description: "Posisi konten tabs",
    },
    scrollable: {
      control: "boolean",
      description: "Apakah tabs dapat di-scroll",
    },
    items: {
      control: false,
      description: "Array tab items",
    },
    onChange: { action: "tab-changed" },
  },
  args: {
    onChange: action("tab-changed"),
    items: basicTabs,
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("home");

    return (
      <div className="w-full max-w-2xl">
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("tab-changed")(tabId);
          }}
        />
      </div>
    );
  },
  args: {
    items: basicTabs,
    variant: "default",
  },
};

export const Pills: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("home");

    return (
      <div className="w-full max-w-2xl">
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("pills-tab-changed")(tabId);
          }}
        />
      </div>
    );
  },
  args: {
    items: basicTabs,
    variant: "pills",
  },
};

export const Underline: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("home");

    return (
      <div className="w-full max-w-2xl">
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("underline-tab-changed")(tabId);
          }}
        />
      </div>
    );
  },
  args: {
    items: basicTabs,
    variant: "underline",
  },
};

export const Bordered: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("home");

    return (
      <div className="w-full max-w-2xl">
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("bordered-tab-changed")(tabId);
          }}
        />
      </div>
    );
  },
  args: {
    items: basicTabs,
    variant: "bordered",
  },
};

// With icons and badges
export const WithIcons: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
      <div className="w-full max-w-3xl">
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("icon-tab-changed")(tabId);
          }}
        />
      </div>
    );
  },
  args: {
    items: tabsWithIcons,
    variant: "underline",
  },
};

// Size variations
export const Small: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("home");

    return (
      <div className="w-full max-w-2xl">
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("small-tab-changed")(tabId);
          }}
        />
      </div>
    );
  },
  args: {
    items: basicTabs,
    size: "sm",
  },
};

export const Large: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("home");

    return (
      <div className="w-full max-w-2xl">
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("large-tab-changed")(tabId);
          }}
        />
      </div>
    );
  },
  args: {
    items: basicTabs,
    size: "lg",
  },
};

// Vertical orientation
export const Vertical: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
      <div className="w-full max-w-4xl">
        <Tabs
          {...args}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("vertical-tab-changed")(tabId);
          }}
        />
      </div>
    );
  },
  args: {
    items: tabsWithIcons,
    orientation: "vertical",
    contentPosition: "right",
    variant: "pills",
  },
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => {
    const [tabs, setTabs] = useState({
      default: "home",
      pills: "home",
      underline: "home",
      bordered: "home",
    });

    const handleTabChange = (variant: keyof typeof tabs) => (tabId: string) => {
      setTabs((prev) => ({ ...prev, [variant]: tabId }));
      action(`${variant}-tab-changed`)(tabId);
    };

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-medium mb-4">Default</h3>
          <Tabs
            items={basicTabs}
            activeTab={tabs.default}
            onChange={handleTabChange("default")}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Pills</h3>
          <Tabs
            items={basicTabs}
            activeTab={tabs.pills}
            onChange={handleTabChange("pills")}
            variant="pills"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Underline</h3>
          <Tabs
            items={basicTabs}
            activeTab={tabs.underline}
            onChange={handleTabChange("underline")}
            variant="underline"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Bordered</h3>
          <Tabs
            items={basicTabs}
            activeTab={tabs.bordered}
            onChange={handleTabChange("bordered")}
            variant="bordered"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Perbandingan semua variant tabs yang tersedia. Setiap variant memiliki state independent.",
      },
    },
  },
};

// Interactive dashboard demo
export const InteractiveDashboard: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [notifications, setNotifications] = useState(5);

    const dashboardTabs = [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: <HomeIcon />,
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border">
                <h4 className="font-semibold text-blue-900">Total Users</h4>
                <p className="text-2xl font-bold text-blue-600">1,234</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border">
                <h4 className="font-semibold text-green-900">Revenue</h4>
                <p className="text-2xl font-bold text-green-600">$12,345</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border">
                <h4 className="font-semibold text-purple-900">Orders</h4>
                <p className="text-2xl font-bold text-purple-600">567</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <h4 className="font-semibold mb-2">Recent Activity</h4>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• User John Doe registered</li>
                <li>• Order #1234 was processed</li>
                <li>• Payment received from customer</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "users",
        label: "Users",
        icon: <UserIcon />,
        badge: "23",
        content: (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">User Management</h4>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Add User
              </button>
            </div>
            <div className="bg-white rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-secondary-700">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-secondary-700">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-secondary-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3 text-sm">John Doe</td>
                    <td className="px-4 py-3 text-sm">john@example.com</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Jane Smith</td>
                    <td className="px-4 py-3 text-sm">jane@example.com</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        id: "analytics",
        label: "Analytics",
        icon: <ChartIcon />,
        content: (
          <div className="space-y-4">
            <h4 className="font-semibold">Analytics Overview</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border">
                <h5 className="font-medium text-secondary-900 mb-2">
                  Page Views
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>/dashboard</span>
                    <span>1,234</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h5 className="font-medium text-secondary-900 mb-2">
                  Conversion Rate
                </h5>
                <div className="text-3xl font-bold text-green-600">3.2%</div>
                <div className="text-sm text-secondary-600">
                  +0.5% from last month
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "notifications",
        label: "Notifications",
        badge: notifications,
        content: (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Recent Notifications</h4>
              <button
                onClick={() => setNotifications(0)}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Mark all as read
              </button>
            </div>
            <div className="space-y-3">
              {Array.from({ length: notifications }, (_, i) => (
                <div
                  key={i}
                  className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400"
                >
                  <p className="text-sm font-medium text-blue-900">
                    New notification #{i + 1}
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    {new Date(Date.now() - i * 3600000).toLocaleTimeString()}
                  </p>
                </div>
              ))}
              {notifications === 0 && (
                <p className="text-center text-secondary-500 py-8">
                  All caught up! No new notifications.
                </p>
              )}
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="w-full max-w-6xl">
        <h3 className="text-xl font-semibold mb-6">Interactive Dashboard</h3>
        <Tabs
          items={dashboardTabs}
          activeTab={activeTab}
          onChange={(tabId) => {
            setActiveTab(tabId);
            action("dashboard-tab-changed")(tabId);
          }}
          variant="underline"
          size="md"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo dashboard interaktif dengan tabs yang menampilkan konten dinamis. Coba klik tab Notifications dan gunakan tombol 'Mark all as read'.",
      },
    },
  },
};
