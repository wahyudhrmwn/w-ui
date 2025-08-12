import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalContent, ModalFooter } from "./Modal";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Checkbox } from "../Checkbox/Checkbox";
import { Badge } from "../Badge/Badge";

const meta = {
  title: "W-UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Modal untuk menampilkan konten overlay. Mendukung berbagai ukuran, keyboard navigation, dan click outside untuk close.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Apakah modal terbuka",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Ukuran modal",
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "Modal bisa ditutup dengan klik overlay",
    },
    closeOnEscape: {
      control: "boolean",
      description: "Modal bisa ditutup dengan ESC key",
    },
    onClose: { action: "closed" },
  },
  args: {
    onClose: action("closed"),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive example di Docs: tombol membuka modal
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="w-full max-w-lg mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">
              Interactive Modal
            </h3>
            <p className="text-sm text-gray-600">Opened from Docs button</p>
          </ModalHeader>
          <ModalContent>
            <p className="text-gray-700">
              This example lives in the Docs tab. Click Cancel or the close
              button to dismiss the modal.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={action("docs-confirmed")}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};

// Basic modal story dengan wrapper untuk state management
const ModalWrapper = ({
  children,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: {
  children: React.ReactNode | ((ctx: { close: () => void }) => React.ReactNode);
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    action("modal-closed")();
  };

  // Clone children and inject close handler
  const childrenWithProps = React.Children.map(
    typeof children === "function"
      ? (children as any)({ close: handleClose })
      : children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { onClose: handleClose } as any);
      }
      return child as any;
    }
  );

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        size={size}
        closeOnOverlayClick={closeOnOverlayClick}
        closeOnEscape={closeOnEscape}
      >
        {childrenWithProps}
      </Modal>
    </div>
  );
};

// Basic modal
export const BasicInline: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="w-full max-w-lg mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Basic Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">Modal Title</h3>
            <p className="text-sm text-gray-600">
              This is a basic modal with interactive close functionality
            </p>
          </ModalHeader>
          <ModalContent>
            <p className="text-gray-700">
              This is a basic modal with default settings. You can close it by:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
              <li>Clicking the X button in the header</li>
              <li>Pressing the ESC key</li>
              <li>Clicking outside the modal</li>
              <li>Clicking the Cancel button</li>
            </ul>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={action("confirmed")}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};

// Size variations
export const SmallModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="w-full max-w-md mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Small Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">Small Modal</h3>
          </ModalHeader>
          <ModalContent>
            <p className="text-gray-700">This is a small modal.</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};

export const LargeModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="w-full max-w-2xl mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Large Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">Large Modal</h3>
          </ModalHeader>
          <ModalContent>
            <p className="text-gray-700">
              This is a large modal with more space for content. It's perfect
              for forms, detailed information, or complex layouts that need more
              room.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">
                Additional Content
              </h4>
              <p className="text-sm text-gray-600">
                You can add more complex content here like forms, tables, or
                other components.
              </p>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary">Save Changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};

// Form modal example dengan state management
export const FormModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      acceptTerms: false,
      newsletter: false,
    });

    const handleSubmit = () => {
      action("form-submitted")(formData);
      setIsOpen(false);
    };

    return (
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>Create Account</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">
              Create Account
            </h3>
            <p className="text-sm text-gray-600">
              Fill in your information to create a new account
            </p>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-4">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Input
                label="Password"
                type="password"
                placeholder="Create a password"
                helperText="Password must be at least 8 characters"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <div className="space-y-2">
                <Checkbox
                  label="I agree to the Terms and Conditions"
                  checked={formData.acceptTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      acceptTerms: e.target.checked,
                    })
                  }
                />
                <Checkbox
                  label="Subscribe to newsletter"
                  helperText="Get updates about new features"
                  checked={formData.newsletter}
                  onChange={(e) =>
                    setFormData({ ...formData, newsletter: e.target.checked })
                  }
                />
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={
                !formData.fullName ||
                !formData.email ||
                !formData.password ||
                !formData.acceptTerms
              }
            >
              Create Account
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};

// Confirmation modal dengan state management
export const ConfirmationModal: Story = {
  render: (_args, context) => {
    const isDocs = (context as any)?.viewMode === "docs";
    if (isDocs) {
      return (
        <div className="w-full max-w-sm mx-auto">
          <Modal open inline size="sm">
            <ModalHeader showCloseButton={false}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Delete Item
                  </h3>
                  <p className="text-sm text-gray-600">
                    This action cannot be undone
                  </p>
                </div>
              </div>
            </ModalHeader>
            <ModalContent>
              <p className="text-gray-700">
                Are you sure you want to delete this item? This action cannot be
                undone and the item will be permanently removed from your
                account.
              </p>
            </ModalContent>
            <ModalFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }

    const ConfirmationModalWrapper = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);

      const handleDelete = async () => {
        setIsDeleting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        action("item-deleted")();
        setIsDeleting(false);
        setIsOpen(false);
      };

      return (
        <div className="p-4">
          <Button variant="destructive" onClick={() => setIsOpen(true)}>
            Delete Item
          </Button>
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            size="sm"
            closeOnOverlayClick={false}
          >
            <ModalHeader showCloseButton={false}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Delete Item
                  </h3>
                  <p className="text-sm text-gray-600">
                    This action cannot be undone
                  </p>
                </div>
              </div>
            </ModalHeader>
            <ModalContent>
              <p className="text-gray-700">
                Are you sure you want to delete this item? This action cannot be
                undone and the item will be permanently removed from your
                account.
              </p>
            </ModalContent>
            <ModalFooter>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                loading={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    };

    return <ConfirmationModalWrapper />;
  },
  parameters: {
    docs: { disable: true },
    controls: { disable: true },
  },
};

// Info modal with no close on outside click
export const InfoModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="w-full max-w-lg mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Info Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                Info
              </Badge>
              <h3 className="text-lg font-semibold text-gray-900">
                Important Information
              </h3>
            </div>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                This modal cannot be closed by clicking outside. You must use
                the close button or press ESC to close it.
              </p>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                  <li>closeOnOverlayClick disabled</li>
                  <li>ESC key still works</li>
                  <li>Must use close button</li>
                </ul>
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Got it
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};

// Content only modal
export const ContentOnly: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="w-full max-w-lg mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Content-only Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalContent>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Success!
              </h3>
              <p className="text-gray-600 mb-6">
                Your action has been completed successfully.
              </p>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Continue
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </div>
    );
  },
};
