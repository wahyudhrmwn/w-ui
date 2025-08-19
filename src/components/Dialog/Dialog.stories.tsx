import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Dialog } from "./Dialog";
import { Button } from "../Button";

const meta = {
  title: "Feedback/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Dialog untuk konfirmasi, alerts, dan interaksi sederhana. Berbeda dari Modal, Dialog biasanya lebih kecil dan fokus pada aksi spesifik.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Apakah dialog terbuka",
    },
    title: {
      control: { type: "text" },
      description: "Title dialog",
    },
    description: {
      control: { type: "text" },
      description: "Deskripsi/konten dialog",
    },
    type: {
      control: { type: "select" },
      options: ["default", "success", "warning", "error", "info"],
      description: "Tipe dialog",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Ukuran dialog",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Apakah menampilkan close button (X)",
    },
    closeOnOverlayClick: {
      control: { type: "boolean" },
      description: "Apakah dialog bisa ditutup dengan overlay click",
    },
    closeOnEscapeKey: {
      control: { type: "boolean" },
      description: "Apakah dialog bisa ditutup dengan ESC key",
    },
    showIcon: {
      control: { type: "boolean" },
      description: "Apakah menampilkan default icon sesuai tipe",
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Confirm Action",
    description:
      "Are you sure you want to proceed with this action? This cannot be undone.",
    type: "default",
    size: "md",
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEscapeKey: true,
    showIcon: true,
    confirmButton: {
      label: "Confirm",
      onClick: action("confirmed"),
      variant: "primary",
    },
    cancelButton: {
      label: "Cancel",
      onClick: action("cancelled"),
    },
    onClose: action("dialog-closed"),
  },
};

export const Types: Story = {
  render: () => {
    const [openDialog, setOpenDialog] = useState<string | null>(null);

    const dialogs = [
      {
        id: "success",
        type: "success" as const,
        title: "Success",
        description: "Your changes have been saved successfully!",
        confirmLabel: "Continue",
      },
      {
        id: "warning",
        type: "warning" as const,
        title: "Warning",
        description:
          "This action may have unintended consequences. Please review before continuing.",
        confirmLabel: "Proceed",
      },
      {
        id: "error",
        type: "error" as const,
        title: "Error",
        description:
          "Something went wrong. Please try again or contact support if the problem persists.",
        confirmLabel: "Retry",
      },
      {
        id: "info",
        type: "info" as const,
        title: "Information",
        description:
          "Here's some important information you should know before proceeding.",
        confirmLabel: "Got it",
      },
    ];

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {dialogs.map((dialog) => (
            <Button
              key={dialog.id}
              onClick={() => setOpenDialog(dialog.id)}
              variant="outline"
              className="capitalize"
            >
              Show {dialog.type} Dialog
            </Button>
          ))}
        </div>

        {dialogs.map((dialog) => (
          <Dialog
            key={dialog.id}
            isOpen={openDialog === dialog.id}
            onClose={() => setOpenDialog(null)}
            type={dialog.type}
            title={dialog.title}
            description={dialog.description}
            confirmButton={{
              label: dialog.confirmLabel,
              onClick: () => {
                action(`${dialog.id}-confirmed`)();
                setOpenDialog(null);
              },
              variant: dialog.type === "error" ? "destructive" : "primary",
            }}
            cancelButton={{
              label: "Cancel",
              onClick: () => setOpenDialog(null),
            }}
          />
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);

    const sizes = [
      { id: "xs", label: "Extra Small", size: "xs" as const },
      { id: "sm", label: "Small", size: "sm" as const },
      { id: "md", label: "Medium", size: "md" as const },
      { id: "lg", label: "Large", size: "lg" as const },
      { id: "xl", label: "Extra Large", size: "xl" as const },
    ];

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          {sizes.map((sizeOption) => (
            <Button
              key={sizeOption.id}
              onClick={() => setOpenSize(sizeOption.id)}
              variant="outline"
            >
              {sizeOption.label}
            </Button>
          ))}
        </div>

        {sizes.map((sizeOption) => (
          <Dialog
            key={sizeOption.id}
            isOpen={openSize === sizeOption.id}
            onClose={() => setOpenSize(null)}
            size={sizeOption.size}
            title={`${sizeOption.label} Dialog`}
            description={`This is a ${sizeOption.label.toLowerCase()} dialog example with different content length to show how the dialog adapts to different sizes.`}
            confirmButton={{
              label: "Confirm",
              onClick: () => setOpenSize(null),
            }}
            cancelButton={{
              label: "Cancel",
              onClick: () => setOpenSize(null),
            }}
          />
        ))}
      </div>
    );
  },
};

export const ConfirmationDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleConfirm = () => {
      setIsLoading(true);
      // Simulate async operation
      setTimeout(() => {
        setIsLoading(false);
        setIsOpen(false);
        action("item-deleted")();
      }, 2000);
    };

    return (
      <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)} variant="destructive">
          Delete Item
        </Button>

        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="error"
          title="Delete Item"
          description="Are you sure you want to delete this item? This action cannot be undone."
          confirmButton={{
            label: isLoading ? "Deleting..." : "Delete",
            onClick: handleConfirm,
            variant: "destructive",
            disabled: isLoading,
          }}
          cancelButton={{
            label: "Cancel",
            onClick: () => setIsOpen(false),
          }}
          closeOnOverlayClick={!isLoading}
          closeOnEscapeKey={!isLoading}
        />
      </div>
    );
  },
};

export const WithCustomContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");

    return (
      <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Subscribe to Newsletter
        </Button>

        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="info"
          title="Subscribe to Newsletter"
          description="Get the latest updates and news delivered to your inbox."
          confirmButton={{
            label: "Subscribe",
            onClick: () => {
              action("subscribed")(email);
              setIsOpen(false);
              setEmail("");
            },
            disabled: !email,
          }}
          cancelButton={{
            label: "Maybe Later",
            onClick: () => setIsOpen(false),
          }}
        >
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="your@email.com"
            />
          </div>
        </Dialog>
      </div>
    );
  },
};

export const WithoutIcon: Story = {
  args: {
    isOpen: true,
    title: "Simple Dialog",
    description: "This dialog doesn't have an icon.",
    showIcon: false,
    confirmButton: {
      label: "OK",
      onClick: action("ok-clicked"),
    },
    onClose: action("dialog-closed"),
  },
};

export const AlertDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)} variant="outline">
          Show Alert
        </Button>

        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="warning"
          title="Low Storage Space"
          description="Your device is running low on storage space. Please free up some space to continue."
          confirmButton={{
            label: "Free Up Space",
            onClick: () => {
              action("free-space-clicked")();
              setIsOpen(false);
            },
            variant: "warning",
          }}
          showCloseButton={false}
          closeOnOverlayClick={false}
          closeOnEscapeKey={false}
        />
      </div>
    );
  },
};

// Custom icon example
const HeartIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

export const CustomIcon: Story = {
  args: {
    isOpen: true,
    title: "Thank You!",
    description: "We appreciate your feedback and support.",
    type: "success",
    icon: <HeartIcon />,
    confirmButton: {
      label: "You're Welcome",
      onClick: action("welcome-clicked"),
    },
    onClose: action("dialog-closed"),
  },
};

export const OnlyButtons: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)} variant="outline">
          Show Choice Dialog
        </Button>

        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          confirmButton={{
            label: "Yes, I'm sure",
            onClick: () => {
              action("confirmed")();
              setIsOpen(false);
            },
            variant: "primary",
          }}
          cancelButton={{
            label: "No, cancel",
            onClick: () => setIsOpen(false),
            variant: "outline",
          }}
          showIcon={false}
        >
          <div className="text-center">
            <p className="text-lg font-medium text-secondary-900 mb-2">
              Are you absolutely sure?
            </p>
            <p className="text-sm text-secondary-600">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>
          </div>
        </Dialog>
      </div>
    );
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [dialogs, setDialogs] = useState({
      confirm: false,
      success: false,
      error: false,
    });

    const openDialog = (type: keyof typeof dialogs) => {
      setDialogs((prev) => ({ ...prev, [type]: true }));
    };

    const closeDialog = (type: keyof typeof dialogs) => {
      setDialogs((prev) => ({ ...prev, [type]: false }));
    };

    const handleAction = () => {
      closeDialog("confirm");
      // Simulate random success/error
      const isSuccess = Math.random() > 0.5;
      setTimeout(() => {
        openDialog(isSuccess ? "success" : "error");
      }, 300);
    };

    return (
      <div className="space-y-4">
        <div className="text-center">
          <Button onClick={() => openDialog("confirm")} variant="primary">
            Start Process
          </Button>
        </div>

        {/* Confirmation Dialog */}
        <Dialog
          isOpen={dialogs.confirm}
          onClose={() => closeDialog("confirm")}
          type="warning"
          title="Confirm Process"
          description="Do you want to start the process? This will take a few seconds."
          confirmButton={{
            label: "Start Process",
            onClick: handleAction,
            variant: "primary",
          }}
          cancelButton={{
            label: "Cancel",
            onClick: () => closeDialog("confirm"),
          }}
        />

        {/* Success Dialog */}
        <Dialog
          isOpen={dialogs.success}
          onClose={() => closeDialog("success")}
          type="success"
          title="Process Completed"
          description="The process has been completed successfully!"
          confirmButton={{
            label: "Great!",
            onClick: () => closeDialog("success"),
            variant: "success",
          }}
        />

        {/* Error Dialog */}
        <Dialog
          isOpen={dialogs.error}
          onClose={() => closeDialog("error")}
          type="error"
          title="Process Failed"
          description="Something went wrong during the process. Please try again."
          confirmButton={{
            label: "Try Again",
            onClick: () => {
              closeDialog("error");
              openDialog("confirm");
            },
            variant: "destructive",
          }}
          cancelButton={{
            label: "Cancel",
            onClick: () => closeDialog("error"),
          }}
        />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    isOpen: true,
    title: "Playground Dialog",
    description:
      "This is a playground dialog for testing all the different props and configurations.",
    type: "default",
    size: "md",
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEscapeKey: true,
    showIcon: true,
    confirmButton: {
      label: "Confirm",
      onClick: action("playground-confirmed"),
      variant: "primary",
      disabled: false,
    },
    cancelButton: {
      label: "Cancel",
      onClick: action("playground-cancelled"),
    },
    onClose: action("playground-closed"),
  },
};
