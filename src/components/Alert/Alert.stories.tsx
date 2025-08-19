import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Alert } from "./Alert";

// Custom icons for examples
const HeartIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Alert untuk menampilkan pesan penting, notifikasi, atau feedback kepada pengguna. Mendukung berbagai variant (info, success, warning, error), ukuran, dan opsi dismissible.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "Variant styling untuk alert",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran alert",
    },
    title: {
      control: "text",
      description: "Judul alert",
    },
    dismissible: {
      control: "boolean",
      description: "Apakah alert dapat ditutup",
    },
    hideIcon: {
      control: "boolean",
      description: "Sembunyikan icon default",
    },
    children: {
      control: "text",
      description: "Konten alert",
    },
    onDismiss: { action: "dismissed" },
  },
  args: {
    onDismiss: action("dismissed"),
    children: "This is an alert message.",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    children: "Here's some helpful information for you to consider.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    children: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please review your input before proceeding.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again.",
  },
};

// Without titles
export const InfoNoTitle: Story = {
  args: {
    variant: "info",
    children: "This is an informational message without a title.",
  },
};

export const SuccessNoTitle: Story = {
  args: {
    variant: "success",
    children: "Operation completed successfully!",
  },
};

// Dismissible alerts
export const Dismissible: Story = {
  args: {
    variant: "info",
    title: "Dismissible Alert",
    children: "You can close this alert by clicking the X button.",
    dismissible: true,
  },
};

export const DismissibleSuccess: Story = {
  args: {
    variant: "success",
    title: "Task Completed",
    children:
      "Your task has been completed successfully. You can dismiss this notification.",
    dismissible: true,
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    variant: "info",
    title: "Small Alert",
    children: "This is a small sized alert.",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    variant: "info",
    title: "Medium Alert",
    children: "This is a medium sized alert (default size).",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "info",
    title: "Large Alert",
    children: "This is a large sized alert with more prominent styling.",
  },
};

// Without icons
export const NoIcon: Story = {
  args: {
    variant: "info",
    title: "No Icon Alert",
    children: "This alert doesn't display an icon.",
    hideIcon: true,
  },
};

// Custom icons
export const CustomIcon: Story = {
  args: {
    variant: "success",
    title: "Custom Icon",
    children:
      "This alert uses a custom heart icon instead of the default success icon.",
    icon: <HeartIcon />,
  },
};

export const NotificationIcon: Story = {
  args: {
    variant: "info",
    title: "Notification",
    children: "You have new messages waiting in your inbox.",
    icon: <BellIcon />,
  },
};

// Long content
export const LongContent: Story = {
  args: {
    variant: "warning",
    title: "Important Security Notice",
    children:
      "We've detected some unusual activity on your account. As a precautionary measure, please review your recent transactions and update your password. If you notice any unauthorized activities, please contact our support team immediately. Your account security is our top priority.",
    dismissible: true,
  },
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert
        variant="info"
        title="Information"
        onDismiss={action("info-dismissed")}
      >
        This is an informational message.
      </Alert>

      <Alert
        variant="success"
        title="Success"
        onDismiss={action("success-dismissed")}
      >
        Operation completed successfully!
      </Alert>

      <Alert
        variant="warning"
        title="Warning"
        onDismiss={action("warning-dismissed")}
      >
        Please review before continuing.
      </Alert>

      <Alert
        variant="error"
        title="Error"
        onDismiss={action("error-dismissed")}
      >
        Something went wrong.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Semua variant alert yang tersedia: info, success, warning, dan error.",
      },
    },
  },
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert
        size="sm"
        variant="info"
        title="Small Alert"
        onDismiss={action("small-dismissed")}
      >
        Small sized alert message.
      </Alert>

      <Alert
        size="md"
        variant="success"
        title="Medium Alert"
        onDismiss={action("medium-dismissed")}
      >
        Medium sized alert message.
      </Alert>

      <Alert
        size="lg"
        variant="warning"
        title="Large Alert"
        onDismiss={action("large-dismissed")}
      >
        Large sized alert message with more prominent styling.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran alert yang tersedia dari small hingga large.",
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [alerts, setAlerts] = useState([
      {
        id: 1,
        variant: "info" as const,
        title: "Welcome!",
        message: "Welcome to our application. Explore the features!",
      },
      {
        id: 2,
        variant: "success" as const,
        title: "Profile Updated",
        message: "Your profile has been updated successfully.",
      },
    ]);

    const addAlert = (variant: "info" | "success" | "warning" | "error") => {
      const messages = {
        info: "Here's some information for you.",
        success: "Operation completed successfully!",
        warning: "Please be cautious with this action.",
        error: "An error occurred. Please try again.",
      };

      const newAlert = {
        id: Date.now(),
        variant,
        title: variant.charAt(0).toUpperCase() + variant.slice(1),
        message: messages[variant],
      };

      setAlerts((prev) => [...prev, newAlert]);
      action(`${variant}-alert-added`)(newAlert);
    };

    const removeAlert = (id: number) => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
      action("alert-removed")(id);
    };

    return (
      <div className="space-y-6 w-96">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => addAlert("info")}
            className="px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
          >
            Add Info
          </button>
          <button
            onClick={() => addAlert("success")}
            className="px-3 py-1.5 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
          >
            Add Success
          </button>
          <button
            onClick={() => addAlert("warning")}
            className="px-3 py-1.5 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
          >
            Add Warning
          </button>
          <button
            onClick={() => addAlert("error")}
            className="px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Add Error
          </button>
        </div>

        <div className="space-y-3">
          {alerts.length === 0 && (
            <p className="text-secondary-500 text-sm italic">
              No alerts. Try adding some using the buttons above!
            </p>
          )}

          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              variant={alert.variant}
              title={alert.title}
              dismissible
              onDismiss={() => removeAlert(alert.id)}
            >
              {alert.message}
            </Alert>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif untuk menambah dan menghapus alert. Klik tombol untuk menambah alert dan X untuk menghapusnya.",
      },
    },
  },
};
