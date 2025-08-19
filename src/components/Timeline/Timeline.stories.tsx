import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Timeline, TimelineItem } from "./Timeline";

const meta = {
  title: "Data Display/Timeline",
  component: Timeline,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Timeline untuk menampilkan chronological events atau progress dengan visual yang menarik. Mendukung berbagai mode layout, status warna, dan custom content untuk setiap timeline item.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["left", "right", "alternate"],
      description: "Mode timeline",
    },
    showConnector: {
      control: { type: "boolean" },
      description: "Apakah menampilkan connector line",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran timeline",
    },
    showTimestamp: {
      control: { type: "boolean" },
      description: "Apakah menampilkan timestamp",
    },
    timestampFormat: {
      control: { type: "select" },
      options: ["relative", "absolute", "date", "time"],
      description: "Format timestamp",
    },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample timeline data
const basicItems: TimelineItem[] = [
  {
    key: "1",
    title: "Project Started",
    description: "Initial project setup and planning phase completed",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    status: "success",
  },
  {
    key: "2",
    title: "Design Phase",
    description: "UI/UX design mockups and wireframes created",
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    status: "primary",
  },
  {
    key: "3",
    title: "Development Started",
    description: "Backend and frontend development in progress",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    status: "warning",
    active: true,
  },
  {
    key: "4",
    title: "Testing Phase",
    description: "Quality assurance and testing scheduled",
    timestamp: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    status: "default",
  },
];

const projectItems: TimelineItem[] = [
  {
    key: "1",
    title: "Project Kickoff",
    description: "Team meeting and requirements gathering",
    timestamp: "2024-01-15T09:00:00",
    status: "success",
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: "2",
    title: "Design Review",
    description: "Stakeholder feedback and design approval",
    timestamp: "2024-01-20T14:30:00",
    status: "primary",
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 2h2v5L7 7l-2 2V4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    key: "3",
    title: "Development Sprint 1",
    description: "Core functionality implementation",
    timestamp: "2024-01-25T10:00:00",
    status: "info",
    active: true,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    key: "4",
    title: "Bug Fixes",
    description: "Addressing QA feedback and issues",
    timestamp: "2024-02-01T16:00:00",
    status: "error",
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    key: "5",
    title: "Release",
    description: "Production deployment and monitoring",
    timestamp: "2024-02-10T12:00:00",
    status: "default",
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
    mode: "left",
    showConnector: true,
    size: "md",
    showTimestamp: true,
    timestampFormat: "relative",
  },
};

export const Modes: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Left Mode (Default)
        </h3>
        <Timeline items={basicItems} mode="left" size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Right Mode
        </h3>
        <Timeline items={basicItems} mode="right" size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Alternate Mode
        </h3>
        <Timeline items={basicItems} mode="alternate" size="sm" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Small Size
        </h3>
        <Timeline items={basicItems.slice(0, 3)} size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Medium Size (Default)
        </h3>
        <Timeline items={basicItems.slice(0, 3)} size="md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Large Size
        </h3>
        <Timeline items={basicItems.slice(0, 3)} size="lg" />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    items: projectItems,
    mode: "left",
    size: "md",
    showTimestamp: true,
    timestampFormat: "absolute",
  },
};

export const StatusColors: Story = {
  render: () => {
    const statusItems: TimelineItem[] = [
      {
        key: "1",
        title: "Default Status",
        description: "Standard timeline item",
        timestamp: new Date(),
        status: "default",
      },
      {
        key: "2",
        title: "Primary Status",
        description: "Important or featured item",
        timestamp: new Date(),
        status: "primary",
      },
      {
        key: "3",
        title: "Success Status",
        description: "Completed or successful action",
        timestamp: new Date(),
        status: "success",
      },
      {
        key: "4",
        title: "Warning Status",
        description: "Attention needed or in progress",
        timestamp: new Date(),
        status: "warning",
      },
      {
        key: "5",
        title: "Error Status",
        description: "Failed or error state",
        timestamp: new Date(),
        status: "error",
      },
      {
        key: "6",
        title: "Info Status",
        description: "Informational or note item",
        timestamp: new Date(),
        status: "info",
      },
    ];

    return <Timeline items={statusItems} showTimestamp={false} size="md" />;
  },
};

export const TimestampFormats: Story = {
  render: () => {
    const sampleDate = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 hours ago

    return (
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-medium text-secondary-700 mb-4">
            Relative Format ("2h ago")
          </h4>
          <Timeline
            items={[
              {
                key: "1",
                title: "Recent Event",
                description: "Shows relative time",
                timestamp: sampleDate,
                status: "primary",
              },
            ]}
            timestampFormat="relative"
            size="sm"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-secondary-700 mb-4">
            Absolute Format (Full date and time)
          </h4>
          <Timeline
            items={[
              {
                key: "1",
                title: "Absolute Event",
                description: "Shows full timestamp",
                timestamp: sampleDate,
                status: "success",
              },
            ]}
            timestampFormat="absolute"
            size="sm"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-secondary-700 mb-4">
            Date Only Format
          </h4>
          <Timeline
            items={[
              {
                key: "1",
                title: "Date Event",
                description: "Shows date only",
                timestamp: sampleDate,
                status: "info",
              },
            ]}
            timestampFormat="date"
            size="sm"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-secondary-700 mb-4">
            Time Only Format
          </h4>
          <Timeline
            items={[
              {
                key: "1",
                title: "Time Event",
                description: "Shows time only",
                timestamp: sampleDate,
                status: "warning",
              },
            ]}
            timestampFormat="time"
            size="sm"
          />
        </div>
      </div>
    );
  },
};

export const WithCustomContent: Story = {
  render: () => {
    const contentItems: TimelineItem[] = [
      {
        key: "1",
        title: "Order Placed",
        description: "Your order has been successfully placed",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        status: "success",
        icon: (
          <svg
            className="w-full h-full"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        ),
        content: (
          <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-sm text-green-800">
              <strong>Order #12345</strong>
            </div>
            <div className="text-sm text-green-600 mt-1">
              Items: MacBook Pro, Magic Mouse
            </div>
            <div className="text-sm text-green-600">Total: $2,499.00</div>
          </div>
        ),
      },
      {
        key: "2",
        title: "Payment Processed",
        description: "Payment has been successfully charged",
        timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000),
        status: "primary",
        icon: (
          <svg
            className="w-full h-full"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        ),
        content: (
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-800">Card ending in ****4532</div>
            <div className="text-sm text-blue-600 mt-1">
              Transaction ID: TXN789012345
            </div>
          </div>
        ),
      },
      {
        key: "3",
        title: "Order Shipped",
        description: "Your order is on its way!",
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
        status: "info",
        active: true,
        icon: (
          <svg
            className="w-full h-full"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
        ),
        content: (
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-800">
              <strong>Tracking Number:</strong> 1Z999AA1234567890
            </div>
            <div className="text-sm text-blue-600 mt-1">
              Carrier: UPS Ground
            </div>
            <div className="text-sm text-blue-600">
              Estimated Delivery: Tomorrow
            </div>
            <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 underline">
              Track Package
            </button>
          </div>
        ),
      },
      {
        key: "4",
        title: "Delivered",
        description: "Order delivered successfully",
        timestamp: new Date(Date.now() + 24 * 60 * 60 * 1000),
        status: "default",
        icon: (
          <svg
            className="w-full h-full"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ];

    return (
      <div className="max-w-2xl">
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Order Tracking Timeline
        </h3>
        <Timeline items={contentItems} size="md" timestampFormat="relative" />
      </div>
    );
  },
};

export const ActivityFeed: Story = {
  render: () => {
    const activityItems: TimelineItem[] = [
      {
        key: "1",
        title: "John commented on your post",
        description: "Great work on the new design! I love the color scheme.",
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        status: "primary",
        icon: (
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            J
          </div>
        ),
      },
      {
        key: "2",
        title: "Sarah liked your photo",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        status: "error",
        icon: (
          <svg
            className="w-full h-full"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        key: "3",
        title: "You uploaded a new document",
        description: "Project_Proposal_v2.pdf",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        status: "success",
        icon: (
          <svg
            className="w-full h-full"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        key: "4",
        title: "Team meeting scheduled",
        description: "Weekly standup - Tomorrow at 10:00 AM",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        status: "warning",
        icon: (
          <svg
            className="w-full h-full"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ];

    return (
      <div className="max-w-lg">
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Recent Activity
        </h3>
        <Timeline items={activityItems} size="sm" timestampFormat="relative" />
      </div>
    );
  },
};

export const WithoutConnector: Story = {
  args: {
    items: basicItems,
    showConnector: false,
    size: "md",
  },
};

export const WithoutTimestamp: Story = {
  args: {
    items: basicItems,
    showTimestamp: false,
    size: "md",
  },
};

export const Playground: Story = {
  args: {
    items: basicItems,
    mode: "left",
    showConnector: true,
    size: "md",
    showTimestamp: true,
    timestampFormat: "relative",
  },
};
