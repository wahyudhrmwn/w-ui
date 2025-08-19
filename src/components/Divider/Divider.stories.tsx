import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Divider } from "./Divider";

const meta = {
  title: "Layout/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Divider untuk memisahkan content dengan garis pemisah. Mendukung orientasi horizontal dan vertikal, berbagai style garis, ukuran, dan dapat menampilkan text atau content di tengahnya.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Orientasi divider",
    },
    type: {
      control: { type: "select" },
      options: ["solid", "dashed", "dotted"],
      description: "Tipe garis divider",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
      description: "Ukuran thickness divider",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "light", "dark", "primary"],
      description: "Warna divider",
    },
    textAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Posisi text/content",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Apakah divider mengambil full width/height",
    },
    spacing: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Margin/spacing di sekitar divider",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <p className="text-secondary-600 mb-4">
        This is some content above the divider.
      </p>

      <Divider />

      <p className="text-secondary-600 mt-4">
        This is some content below the divider.
      </p>
    </div>
  ),
};

export const Orientations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Horizontal Dividers
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-secondary-600">Content above</p>
            <Divider />
            <p className="text-secondary-600">Content below</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Vertical Dividers
        </h3>
        <div className="flex items-center space-x-4 h-16">
          <span className="text-secondary-600">Left content</span>
          <Divider orientation="vertical" />
          <span className="text-secondary-600">Middle content</span>
          <Divider orientation="vertical" />
          <span className="text-secondary-600">Right content</span>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Extra Small (xs)
        </h4>
        <Divider size="xs" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Small (sm)
        </h4>
        <Divider size="sm" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Medium (md)
        </h4>
        <Divider size="md" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Large (lg)
        </h4>
        <Divider size="lg" />
      </div>
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Solid (default)
        </h4>
        <Divider type="solid" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Dashed</h4>
        <Divider type="dashed" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Dotted</h4>
        <Divider type="dotted" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Default</h4>
        <Divider variant="default" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Light</h4>
        <Divider variant="light" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Dark</h4>
        <Divider variant="dark" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Primary</h4>
        <Divider variant="primary" />
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-4">
          Center Aligned (default)
        </h4>
        <div>
          <p className="text-secondary-600 mb-4">
            Some content above the divider with centered text.
          </p>
          <Divider textAlign="center">OR</Divider>
          <p className="text-secondary-600 mt-4">
            Some content below the divider.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-4">
          Left Aligned
        </h4>
        <div>
          <p className="text-secondary-600 mb-4">
            Some content above the divider with left-aligned text.
          </p>
          <Divider textAlign="left">Section 1</Divider>
          <p className="text-secondary-600 mt-4">
            Some content below the divider.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-4">
          Right Aligned
        </h4>
        <div>
          <p className="text-secondary-600 mb-4">
            Some content above the divider with right-aligned text.
          </p>
          <Divider textAlign="right">End of Section</Divider>
          <p className="text-secondary-600 mt-4">
            Some content below the divider.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-secondary-600 mb-4">
          User profile information section
        </p>
        <Divider>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Personal Info
          </span>
        </Divider>
        <p className="text-secondary-600 mt-4">
          Name, email, phone number, etc.
        </p>
      </div>

      <div>
        <p className="text-secondary-600 mb-4">
          Account settings and preferences
        </p>
        <Divider variant="primary">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            Settings
          </span>
        </Divider>
        <p className="text-secondary-600 mt-4">
          Privacy, notifications, security, etc.
        </p>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-4">
          Different Spacing Options
        </h4>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="none">No Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="sm">Small Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="md">Medium Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="lg">Large Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="xl">Extra Large Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>
      </div>
    </div>
  ),
};

export const VerticalSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <h4 className="text-sm font-medium text-secondary-700">
        Vertical Divider Sizes
      </h4>

      <div className="flex items-center space-x-4 h-20">
        <span className="text-secondary-600">Content</span>
        <Divider orientation="vertical" size="xs" fullWidth />
        <span className="text-secondary-600">XS</span>
        <Divider orientation="vertical" size="sm" fullWidth />
        <span className="text-secondary-600">SM</span>
        <Divider orientation="vertical" size="md" fullWidth />
        <span className="text-secondary-600">MD</span>
        <Divider orientation="vertical" size="lg" fullWidth />
        <span className="text-secondary-600">LG</span>
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="max-w-md mx-auto">
      <div className="bg-white border border-secondary-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-secondary-900">
          User Profile
        </h3>
        <p className="text-sm text-secondary-600 mt-1">
          Manage your account settings
        </p>

        <Divider className="my-4" />

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-secondary-700">Name</span>
            <span className="text-sm font-medium text-secondary-900">
              John Doe
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-secondary-700">Email</span>
            <span className="text-sm font-medium text-secondary-900">
              john@example.com
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-secondary-700">Role</span>
            <span className="text-sm font-medium text-secondary-900">
              Administrator
            </span>
          </div>
        </div>

        <Divider>Account Settings</Divider>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-700">Notifications</span>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-700">Two-factor Auth</span>
            <input type="checkbox" className="rounded" />
          </div>
        </div>

        <Divider variant="light" spacing="lg" />

        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <div className="max-w-xs">
      <nav className="bg-white border border-secondary-200 rounded-lg p-4">
        <div className="space-y-1">
          <a
            href="#"
            className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded"
          >
            Projects
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded"
          >
            Tasks
          </a>
        </div>

        <Divider spacing="sm" />

        <div className="space-y-1">
          <a
            href="#"
            className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded"
          >
            Profile
          </a>
        </div>

        <Divider spacing="sm" />

        <div className="space-y-1">
          <a
            href="#"
            className="block px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
          >
            Sign Out
          </a>
        </div>
      </nav>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    orientation: "horizontal",
    type: "solid",
    size: "xs",
    variant: "default",
    textAlign: "center",
    fullWidth: true,
    spacing: "md",
    children: "Divider Text",
  },
};
