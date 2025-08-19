import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import {
  Skeleton,
  SkeletonGroup,
  SkeletonCard,
  SkeletonTable,
  SkeletonList,
} from "./Skeleton";

const meta = {
  title: "Data Display/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Skeleton untuk loading placeholder dengan berbagai bentuk, ukuran, dan animasi. Tersedia juga pre-built patterns untuk card, table, dan list.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "rectangle", "circle", "rounded"],
      description: "Bentuk skeleton",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Ukuran preset",
    },
    animation: {
      control: "select",
      options: ["pulse", "wave", "none"],
      description: "Animasi skeleton",
    },
    width: {
      control: "text",
      description: "Lebar custom (px atau %)",
    },
    height: {
      control: "text",
      description: "Tinggi custom (px atau %)",
    },
  },
  args: {
    animation: "pulse",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic skeleton stories
export const Default: Story = {
  render: (args) => (
    <div className="p-4">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    variant: "text",
  },
};

// Variant stories
export const Text: Story = {
  render: (args) => (
    <div className="p-4 space-y-2">
      <Skeleton {...args} width="100%" />
      <Skeleton {...args} width="90%" />
      <Skeleton {...args} width="75%" />
    </div>
  ),
  args: {
    variant: "text",
  },
};

export const Rectangle: Story = {
  render: (args) => (
    <div className="p-4">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    variant: "rectangle",
    width: 300,
    height: 200,
  },
};

export const Circle: Story = {
  render: (args) => (
    <div className="p-4 flex space-x-4">
      <Skeleton {...args} width={40} height={40} />
      <Skeleton {...args} width={64} height={64} />
      <Skeleton {...args} width={96} height={96} />
    </div>
  ),
  args: {
    variant: "circle",
  },
};

export const Rounded: Story = {
  render: (args) => (
    <div className="p-4">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    variant: "rounded",
    width: 300,
    height: 120,
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="p-4 space-y-4">
      <div>
        <p className="text-sm text-secondary-600 mb-2">Small</p>
        <Skeleton variant="text" size="sm" />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Medium</p>
        <Skeleton variant="text" size="md" />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Large</p>
        <Skeleton variant="text" size="lg" />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Extra Large</p>
        <Skeleton variant="text" size="xl" />
      </div>
    </div>
  ),
};

// Animation variations
export const Animations: Story = {
  render: () => (
    <div className="p-4 space-y-6">
      <div>
        <p className="text-sm text-secondary-600 mb-2">Pulse Animation</p>
        <div className="space-y-2">
          <Skeleton variant="text" animation="pulse" />
          <Skeleton variant="text" animation="pulse" width="80%" />
        </div>
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-2">No Animation</p>
        <div className="space-y-2">
          <Skeleton variant="text" animation="none" />
          <Skeleton variant="text" animation="none" width="80%" />
        </div>
      </div>
    </div>
  ),
};

// Skeleton Group
export const Group: Story = {
  render: () => (
    <div className="p-4 space-y-8">
      <div>
        <p className="text-sm text-secondary-600 mb-2">
          Default Group (3 items)
        </p>
        <SkeletonGroup />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-2">
          Custom Count (5 items)
        </p>
        <SkeletonGroup count={5} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-2">Large Spacing</p>
        <SkeletonGroup count={3} spacing="lg" />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-2">Custom Props</p>
        <SkeletonGroup
          count={4}
          skeletonProps={{ variant: "rounded", height: 60 }}
          spacing="md"
        />
      </div>
    </div>
  ),
};

// Skeleton Card
export const Card: Story = {
  render: () => (
    <div className="p-4 grid gap-6 max-w-4xl">
      <div>
        <p className="text-sm text-secondary-600 mb-4">Basic Card</p>
        <SkeletonCard />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Without Avatar</p>
        <SkeletonCard showAvatar={false} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">More Text Lines</p>
        <SkeletonCard textLines={5} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Without Actions</p>
        <SkeletonCard showActions={false} />
      </div>
    </div>
  ),
};

// Skeleton Table
export const Table: Story = {
  render: () => (
    <div className="p-4 space-y-6 max-w-4xl">
      <div>
        <p className="text-sm text-secondary-600 mb-4">Basic Table (5x4)</p>
        <SkeletonTable />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Custom Size (3x6)</p>
        <SkeletonTable rows={3} columns={6} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Without Header</p>
        <SkeletonTable showHeader={false} />
      </div>
    </div>
  ),
};

// Skeleton List
export const List: Story = {
  render: () => (
    <div className="p-4 space-y-6 max-w-2xl">
      <div>
        <p className="text-sm text-secondary-600 mb-4">Basic List</p>
        <SkeletonList />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Without Avatar</p>
        <SkeletonList showAvatar={false} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Without Secondary Text
        </p>
        <SkeletonList showSecondary={false} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">More Items</p>
        <SkeletonList count={8} />
      </div>
    </div>
  ),
};

// Loading state demo
export const LoadingStates: Story = {
  render: () => {
    const [loadingStates, setLoadingStates] = useState({
      card: true,
      table: true,
      list: true,
    });

    const toggleLoading = (type: keyof typeof loadingStates) => {
      setLoadingStates((prev) => ({
        ...prev,
        [type]: !prev[type],
      }));
      action(`${type}-loading-toggled`)();
    };

    return (
      <div className="p-6 space-y-8 max-w-4xl">
        <h3 className="text-lg font-semibold">Interactive Loading States</h3>

        <div className="flex gap-4">
          <button
            onClick={() => toggleLoading("card")}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Toggle Card: {loadingStates.card ? "Loading" : "Loaded"}
          </button>
          <button
            onClick={() => toggleLoading("table")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Toggle Table: {loadingStates.table ? "Loading" : "Loaded"}
          </button>
          <button
            onClick={() => toggleLoading("list")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Toggle List: {loadingStates.list ? "Loading" : "Loaded"}
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card */}
          <div>
            <h4 className="text-md font-medium mb-4">Card Component</h4>
            <SkeletonCard loading={loadingStates.card}>
              <div className="p-6 bg-white border border-secondary-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold">John Doe</h5>
                    <p className="text-sm text-secondary-600">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
                  alt="Content"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-secondary-700 mb-4">
                  This is the actual content that appears after loading. The
                  skeleton provides a nice placeholder while data is being
                  fetched.
                </p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm">
                    Like
                  </button>
                  <button className="px-4 py-2 bg-secondary-200 text-secondary-700 rounded-lg text-sm">
                    Share
                  </button>
                  <button className="px-4 py-2 bg-secondary-200 text-secondary-700 rounded-lg text-sm">
                    Save
                  </button>
                </div>
              </div>
            </SkeletonCard>
          </div>

          {/* List */}
          <div>
            <h4 className="text-md font-medium mb-4">List Component</h4>
            <SkeletonList loading={loadingStates.list} count={4}>
              <div className="bg-white border border-secondary-200 rounded-lg overflow-hidden">
                <div className="divide-y divide-secondary-200">
                  <div className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                      A
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold">Alice Johnson</h5>
                      <p className="text-sm text-secondary-600">
                        Product Manager
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Online
                    </span>
                  </div>
                  <div className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                      B
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold">Bob Smith</h5>
                      <p className="text-sm text-secondary-600">Designer</p>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Away
                    </span>
                  </div>
                  <div className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">
                      C
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold">Carol Davis</h5>
                      <p className="text-sm text-secondary-600">Developer</p>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      Offline
                    </span>
                  </div>
                </div>
              </div>
            </SkeletonList>
          </div>
        </div>

        {/* Table */}
        <div>
          <h4 className="text-md font-medium mb-4">Table Component</h4>
          <SkeletonTable loading={loadingStates.table} rows={3} columns={4}>
            <div className="bg-white border border-secondary-200 rounded-lg overflow-hidden">
              <div className="bg-secondary-50 px-6 py-4 border-b border-secondary-200">
                <div className="grid grid-cols-4 gap-4">
                  <span className="text-sm font-medium text-secondary-700">
                    Name
                  </span>
                  <span className="text-sm font-medium text-secondary-700">
                    Email
                  </span>
                  <span className="text-sm font-medium text-secondary-700">
                    Role
                  </span>
                  <span className="text-sm font-medium text-secondary-700">
                    Status
                  </span>
                </div>
              </div>
              <div className="divide-y divide-secondary-200">
                <div className="px-6 py-4 grid grid-cols-4 gap-4">
                  <span className="text-sm">John Doe</span>
                  <span className="text-sm">john@example.com</span>
                  <span className="text-sm">Admin</span>
                  <span className="text-sm">Active</span>
                </div>
                <div className="px-6 py-4 grid grid-cols-4 gap-4">
                  <span className="text-sm">Jane Smith</span>
                  <span className="text-sm">jane@example.com</span>
                  <span className="text-sm">User</span>
                  <span className="text-sm">Inactive</span>
                </div>
                <div className="px-6 py-4 grid grid-cols-4 gap-4">
                  <span className="text-sm">Bob Johnson</span>
                  <span className="text-sm">bob@example.com</span>
                  <span className="text-sm">Moderator</span>
                  <span className="text-sm">Active</span>
                </div>
              </div>
            </div>
          </SkeletonTable>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif untuk melihat transisi dari skeleton ke konten sebenarnya. Klik tombol untuk toggle loading state.",
      },
    },
  },
};
