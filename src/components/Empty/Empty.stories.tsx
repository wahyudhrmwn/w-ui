import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Empty,
  EmptySearch,
  EmptyData,
  EmptyCart,
  EmptyNotification,
  EmptyFile,
  EmptyMessage,
  EmptyUser,
  EmptyNetwork,
} from "./Empty";
import { Button } from "../Button";

const meta = {
  title: "Layout & Utility/Empty",
  component: Empty,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Empty untuk menampilkan state kosong yang informatif dan menarik. Dilengkapi dengan berbagai preset untuk use case yang umum seperti no search results, empty cart, no notifications.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    imageType: {
      control: { type: "select" },
      options: [
        "default",
        "search",
        "network",
        "file",
        "data",
        "cart",
        "notification",
        "user",
        "message",
      ],
      description: "Tipe built-in empty state",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran empty state",
    },
    direction: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      description: "Layout direction",
    },
    title: {
      control: { type: "text" },
      description: "Custom title",
    },
    description: {
      control: { type: "text" },
      description: "Custom description",
    },
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllBuiltInTypes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="default" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="search" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="data" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="file" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="cart" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="notification" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="user" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="message" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="network" />
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <div className="border border-secondary-200 rounded-lg max-w-md">
          <Empty size="sm" imageType="search" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <div className="border border-secondary-200 rounded-lg max-w-md">
          <Empty size="md" imageType="search" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <div className="border border-secondary-200 rounded-lg max-w-md">
          <Empty size="lg" imageType="search" />
        </div>
      </div>
    </div>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Custom Title and Description
        </h3>
        <div className="border border-secondary-200 rounded-lg max-w-lg">
          <Empty
            imageType="data"
            title="Welcome to Your Dashboard!"
            description="Connect your data sources to see beautiful analytics and insights here."
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Icon</h3>
        <div className="border border-secondary-200 rounded-lg max-w-lg">
          <Empty
            title="Coming Soon"
            description="This feature is under development and will be available soon."
            image={
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            }
          />
        </div>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Empty Cart with Actions</h3>
        <div className="border border-secondary-200 rounded-lg max-w-lg">
          <Empty imageType="cart">
            <div className="space-y-3">
              <Button variant="primary">Browse Products</Button>
              <Button variant="ghost">View Wishlist</Button>
            </div>
          </Empty>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">No Search Results</h3>
        <div className="border border-secondary-200 rounded-lg max-w-lg">
          <Empty imageType="search">
            <div className="space-y-3">
              <div className="flex justify-center space-x-3">
                <Button size="sm">Clear Filters</Button>
                <Button size="sm" variant="outline">
                  Browse All
                </Button>
              </div>
              <p className="text-xs text-secondary-500">
                Or try searching for something else
              </p>
            </div>
          </Empty>
        </div>
      </div>
    </div>
  ),
};

export const HorizontalLayout: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Layout</h3>
        <div className="border border-secondary-200 rounded-lg max-w-2xl">
          <Empty
            direction="horizontal"
            imageType="network"
            title="Connection Failed"
            description="Unable to connect to the server. Please check your internet connection and try again."
          >
            <div className="flex space-x-3">
              <Button size="sm" variant="primary">
                Retry
              </Button>
              <Button size="sm" variant="outline">
                Go Offline
              </Button>
            </div>
          </Empty>
        </div>
      </div>
    </div>
  ),
};

export const PresetComponents: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-medium mb-3">EmptySearch</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptySearch size="sm">
            <Button size="sm" variant="outline">
              Clear Search
            </Button>
          </EmptySearch>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyData</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyData size="sm">
            <Button size="sm" variant="primary">
              Import Data
            </Button>
          </EmptyData>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyCart</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyCart size="sm">
            <Button size="sm" variant="primary">
              Start Shopping
            </Button>
          </EmptyCart>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyFile</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyFile size="sm">
            <Button size="sm" variant="primary">
              Upload Files
            </Button>
          </EmptyFile>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyUser</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyUser size="sm">
            <Button size="sm" variant="primary">
              Invite Users
            </Button>
          </EmptyUser>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyMessage</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyMessage size="sm">
            <Button size="sm" variant="primary">
              Send Message
            </Button>
          </EmptyMessage>
        </div>
      </div>
    </div>
  ),
};
