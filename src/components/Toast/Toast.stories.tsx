import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Toast, ToastProvider, useToast } from "./Toast";
import { Button } from "../Button";

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Komponen Toast untuk menampilkan notifikasi yang muncul secara temporary. Mendukung berbagai tipe, posisi, auto-dismiss, dan dapat dikelola dengan ToastProvider.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isVisible: {
      control: { type: "boolean" },
      description: "Apakah toast visible",
    },
    title: {
      control: { type: "text" },
      description: "Title toast",
    },
    message: {
      control: { type: "text" },
      description: "Pesan toast",
    },
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
      description: "Tipe toast",
    },
    duration: {
      control: { type: "number" },
      description: "Durasi auto dismiss (ms), 0 untuk tidak auto dismiss",
    },
    position: {
      control: { type: "select" },
      options: [
        "top-right",
        "top-left",
        "top-center",
        "bottom-right",
        "bottom-left",
        "bottom-center",
      ],
      description: "Posisi toast",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran toast",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Apakah menampilkan close button",
    },
    showIcon: {
      control: { type: "boolean" },
      description: "Apakah menampilkan icon",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isVisible: true,
    title: "Success",
    message: "Your changes have been saved successfully.",
    type: "success",
    position: "top-right",
    size: "md",
    showCloseButton: true,
    showIcon: true,
    duration: 0, // Disable auto dismiss untuk demo
    onClose: action("toast-closed"),
    onClick: action("toast-clicked"),
  },
};

export const Types: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Toast
        isVisible={true}
        title="Success"
        message="Operation completed successfully."
        type="success"
        position="top-right"
        duration={0}
        onClose={action("success-closed")}
      />
      <Toast
        isVisible={true}
        title="Error"
        message="Something went wrong. Please try again."
        type="error"
        position="top-right"
        duration={0}
        onClose={action("error-closed")}
        style={{ top: "5rem" }}
      />
      <Toast
        isVisible={true}
        title="Warning"
        message="Please review your input before continuing."
        type="warning"
        position="top-right"
        duration={0}
        onClose={action("warning-closed")}
        style={{ top: "10rem" }}
      />
      <Toast
        isVisible={true}
        title="Info"
        message="New features are available in settings."
        type="info"
        position="top-right"
        duration={0}
        onClose={action("info-closed")}
        style={{ top: "15rem" }}
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Toast
        isVisible={true}
        title="Small Toast"
        message="This is a small toast notification."
        type="info"
        size="sm"
        position="top-left"
        duration={0}
        onClose={action("small-closed")}
      />
      <Toast
        isVisible={true}
        title="Medium Toast"
        message="This is a medium toast notification with more content."
        type="success"
        size="md"
        position="top-left"
        duration={0}
        onClose={action("medium-closed")}
        style={{ top: "5rem" }}
      />
      <Toast
        isVisible={true}
        title="Large Toast"
        message="This is a large toast notification with even more content and details."
        type="warning"
        size="lg"
        position="top-left"
        duration={0}
        onClose={action("large-closed")}
        style={{ top: "11rem" }}
      />
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="h-screen">
      <Toast
        isVisible={true}
        message="Top Left"
        type="info"
        position="top-left"
        duration={0}
        onClose={action("top-left-closed")}
      />
      <Toast
        isVisible={true}
        message="Top Center"
        type="success"
        position="top-center"
        duration={0}
        onClose={action("top-center-closed")}
      />
      <Toast
        isVisible={true}
        message="Top Right"
        type="warning"
        position="top-right"
        duration={0}
        onClose={action("top-right-closed")}
      />
      <Toast
        isVisible={true}
        message="Bottom Left"
        type="error"
        position="bottom-left"
        duration={0}
        onClose={action("bottom-left-closed")}
      />
      <Toast
        isVisible={true}
        message="Bottom Center"
        type="info"
        position="bottom-center"
        duration={0}
        onClose={action("bottom-center-closed")}
      />
      <Toast
        isVisible={true}
        message="Bottom Right"
        type="success"
        position="bottom-right"
        duration={0}
        onClose={action("bottom-right-closed")}
      />
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    isVisible: true,
    title: "No Icon",
    message: "This toast doesn't have an icon.",
    type: "info",
    showIcon: false,
    duration: 0,
    onClose: action("no-icon-closed"),
  },
};

export const WithoutCloseButton: Story = {
  args: {
    isVisible: true,
    title: "No Close Button",
    message: "This toast doesn't have a close button.",
    type: "success",
    showCloseButton: false,
    duration: 0,
    onClose: action("no-close-closed"),
  },
};

export const WithAction: Story = {
  args: {
    isVisible: true,
    title: "Action Required",
    message: "Please update your password to continue.",
    type: "warning",
    action: {
      label: "Update Now",
      onClick: action("action-clicked"),
    },
    duration: 0,
    onClose: action("action-toast-closed"),
  },
};

export const MessageOnly: Story = {
  args: {
    isVisible: true,
    message: "Simple message without title.",
    type: "info",
    duration: 0,
    onClose: action("message-only-closed"),
  },
};

// Custom icon example
const CustomIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

export const CustomIconExample: Story = {
  args: {
    isVisible: true,
    title: "Custom Icon",
    message: "This toast uses a custom heart icon.",
    type: "success",
    icon: <CustomIcon />,
    duration: 0,
    onClose: action("custom-icon-closed"),
  },
};

export const AutoDismiss: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="space-y-4 p-4">
        <Button onClick={() => setVisible(true)}>
          Show Auto Dismiss Toast (3s)
        </Button>

        <Toast
          isVisible={visible}
          title="Auto Dismiss"
          message="This toast will automatically disappear in 3 seconds."
          type="info"
          duration={3000}
          onClose={() => setVisible(false)}
        />
      </div>
    );
  },
};

// Toast Provider Demo
const ToastDemo: React.FC = () => {
  const { showToast, hideAllToasts } = useToast();

  const showSuccessToast = () => {
    showToast({
      title: "Success!",
      message: "Your data has been saved successfully.",
      type: "success",
      position: "top-right",
    });
  };

  const showErrorToast = () => {
    showToast({
      title: "Error!",
      message: "Failed to save data. Please try again.",
      type: "error",
      position: "top-right",
    });
  };

  const showWarningToast = () => {
    showToast({
      title: "Warning!",
      message: "This action cannot be undone.",
      type: "warning",
      position: "top-right",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo clicked"),
      },
    });
  };

  const showInfoToast = () => {
    showToast({
      message: "New version available for download.",
      type: "info",
      position: "bottom-right",
    });
  };

  const showMultipleToasts = () => {
    showSuccessToast();
    setTimeout(() => showErrorToast(), 500);
    setTimeout(() => showWarningToast(), 1000);
    setTimeout(() => showInfoToast(), 1500);
  };

  return (
    <div className="space-y-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={showSuccessToast} variant="success">
          Show Success Toast
        </Button>
        <Button onClick={showErrorToast} variant="destructive">
          Show Error Toast
        </Button>
        <Button onClick={showWarningToast} variant="warning">
          Show Warning Toast
        </Button>
        <Button onClick={showInfoToast} variant="outline">
          Show Info Toast
        </Button>
      </div>

      <div className="flex gap-4">
        <Button onClick={showMultipleToasts} variant="primary">
          Show Multiple Toasts
        </Button>
        <Button onClick={hideAllToasts} variant="secondary">
          Hide All Toasts
        </Button>
      </div>
    </div>
  );
};

export const ToastProviderDemo: Story = {
  render: () => (
    <ToastProvider maxToasts={5} defaultDuration={4000}>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const Playground: Story = {
  args: {
    isVisible: true,
    title: "Playground Toast",
    message: "This is a playground toast for testing all props.",
    type: "info",
    position: "top-right",
    size: "md",
    showCloseButton: true,
    showIcon: true,
    duration: 0,
    onClose: action("playground-closed"),
    onClick: action("playground-clicked"),
  },
};
