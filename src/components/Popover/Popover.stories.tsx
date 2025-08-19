import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { Popover } from "./Popover";
import { Button } from "../Button";

const meta = {
  title: "Feedback/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Popover untuk menampilkan contextual information yang lebih kaya dari tooltip. Mendukung berbagai trigger (click, hover, focus) dan positioning yang fleksibel dengan konten yang dapat berupa forms, buttons, atau rich content lainnya.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight",
      ],
      description: "Posisi popover",
    },
    trigger: {
      control: { type: "select" },
      options: ["click", "hover", "focus", "contextMenu"],
      description: "Trigger event",
    },
    visible: {
      control: { type: "boolean" },
      description: "Apakah popover visible (controlled)",
    },
    showArrow: {
      control: { type: "boolean" },
      description: "Apakah menampilkan arrow",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Apakah menampilkan close button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah disabled",
    },
    mouseEnterDelay: {
      control: { type: "number", min: 0, max: 1000 },
      description: "Delay untuk show (ms)",
    },
    mouseLeaveDelay: {
      control: { type: "number", min: 0, max: 1000 },
      description: "Delay untuk hide (ms)",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleContent = () => (
  <div>
    <p className="text-sm text-secondary-600">
      This is a simple popover content with some information that helps users
      understand the feature.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    content: <SimpleContent />,
    placement: "top",
    trigger: "click",
    showArrow: true,
    onVisibleChange: action("visibility-changed"),
    children: <Button>Click me</Button>,
  },
};

export const Placements: Story = {
  render: () => {
    const placements = [
      { placement: "top" as const, label: "Top" },
      { placement: "bottom" as const, label: "Bottom" },
      { placement: "left" as const, label: "Left" },
      { placement: "right" as const, label: "Right" },
      { placement: "topLeft" as const, label: "Top Left" },
      { placement: "topRight" as const, label: "Top Right" },
      { placement: "bottomLeft" as const, label: "Bottom Left" },
      { placement: "bottomRight" as const, label: "Bottom Right" },
    ];

    const content = (
      <div>
        <p className="text-sm text-secondary-600">
          Popover content positioned accordingly.
        </p>
      </div>
    );

    return (
      <div className="grid grid-cols-4 gap-8 p-20">
        {placements.map((item) => (
          <Popover
            key={item.placement}
            content={content}
            placement={item.placement}
            trigger="click"
          >
            <Button variant="outline" className="w-full">
              {item.label}
            </Button>
          </Popover>
        ))}
      </div>
    );
  },
};

export const TriggerTypes: Story = {
  render: () => {
    const content = (placement: string) => (
      <div>
        <p className="text-sm text-secondary-600">
          This popover was triggered by <strong>{placement}</strong>.
        </p>
      </div>
    );

    return (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Popover content={content("click")} trigger="click" placement="top">
            <Button>Click Trigger</Button>
          </Popover>

          <Popover
            content={content("hover")}
            trigger="hover"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={200}
          >
            <Button variant="outline">Hover Trigger</Button>
          </Popover>

          <Popover content={content("focus")} trigger="focus" placement="top">
            <Button variant="secondary">Focus Trigger</Button>
          </Popover>

          <Popover
            content={content("right-click")}
            trigger="contextMenu"
            placement="top"
          >
            <Button variant="ghost">Right Click</Button>
          </Popover>
        </div>

        <div className="text-sm text-secondary-500 space-y-1">
          <p>• Click: Click the button to toggle popover</p>
          <p>• Hover: Hover over the button to show popover</p>
          <p>• Focus: Focus the button (tab or click) to show popover</p>
          <p>• Right Click: Right click the button to show popover</p>
        </div>
      </div>
    );
  },
};

export const WithTitle: Story = {
  render: () => {
    const content = (
      <div className="space-y-3">
        <p className="text-sm text-secondary-600">
          This popover has a title in the header and demonstrates how you can
          structure content with proper hierarchy.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="primary">
            Action
          </Button>
          <Button size="sm" variant="outline">
            Cancel
          </Button>
        </div>
      </div>
    );

    return (
      <div className="space-y-4">
        <div className="flex gap-4">
          <Popover
            content={content}
            title="Information"
            placement="bottom"
            trigger="click"
            width={280}
          >
            <Button>With Title</Button>
          </Popover>

          <Popover
            content={content}
            title="Confirm Action"
            showCloseButton
            placement="bottom"
            trigger="click"
            width={280}
            onClose={action("popover-closed")}
          >
            <Button variant="outline">With Close Button</Button>
          </Popover>
        </div>
      </div>
    );
  },
};

export const FormContent: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const formContent = (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={3}
            className="w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="primary"
            className="flex-1"
            onClick={() => {
              action("form-submitted")(formData);
              // Reset form
              setFormData({ name: "", email: "", message: "" });
            }}
          >
            Submit
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Cancel
          </Button>
        </div>
      </div>
    );

    return (
      <Popover
        content={formContent}
        title="Quick Contact"
        showCloseButton
        placement="bottomLeft"
        trigger="click"
        width={320}
        onVisibleChange={action("form-visibility-changed")}
      >
        <Button>Open Contact Form</Button>
      </Popover>
    );
  },
};

export const UserProfileCard: Story = {
  render: () => {
    const userContent = (
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div>
            <div className="text-sm font-semibold text-secondary-900">
              John Doe
            </div>
            <div className="text-xs text-secondary-500">Software Engineer</div>
          </div>
        </div>

        <div className="text-xs text-secondary-600 space-y-1">
          <div>📧 john.doe@company.com</div>
          <div>📱 +1 (555) 123-4567</div>
          <div>🏢 Tech Department</div>
        </div>

        <div className="pt-2 border-t border-secondary-200">
          <div className="flex gap-2">
            <Button size="sm" variant="primary" className="flex-1">
              Message
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Call
            </Button>
          </div>
        </div>
      </div>
    );

    return (
      <div className="text-center">
        <p className="text-secondary-600 mb-4">
          Hover over the avatar to see user details
        </p>

        <Popover
          content={userContent}
          trigger="hover"
          placement="bottom"
          width={280}
          mouseEnterDelay={200}
          mouseLeaveDelay={300}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-2 border border-secondary-200 rounded-lg hover:border-secondary-300 cursor-pointer">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              JD
            </div>
            <span className="text-sm text-secondary-700">John Doe</span>
          </div>
        </Popover>
      </div>
    );
  },
};

export const ConfirmationPopover: Story = {
  render: () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const confirmContent = (
      <div className="space-y-3">
        <div className="text-sm text-secondary-600">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="destructive"
            className="flex-1"
            disabled={isDeleting}
            onClick={() => {
              setIsDeleting(true);
              action("delete-confirmed")();
              setTimeout(() => {
                setIsDeleting(false);
                setIsVisible(false);
              }, 1000);
            }}
          >
            {isDeleting ? "Deleting..." : "Yes, Delete"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => setIsVisible(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    );

    return (
      <Popover
        content={confirmContent}
        title="Confirm Delete"
        visible={isVisible}
        onVisibleChange={setIsVisible}
        placement="top"
        trigger="click"
        width={250}
      >
        <Button variant="destructive">Delete Item</Button>
      </Popover>
    );
  },
};

export const MenuPopover: Story = {
  render: () => {
    const menuItems = [
      { icon: "👤", label: "Profile", action: "profile" },
      { icon: "⚙️", label: "Settings", action: "settings" },
      { icon: "❓", label: "Help", action: "help" },
      { type: "divider" },
      { icon: "🚪", label: "Sign Out", action: "signout", variant: "danger" },
    ];

    const menuContent = (
      <div className="py-1">
        {menuItems.map((item, index) => {
          if (item.type === "divider") {
            return (
              <div key={index} className="my-1 border-t border-secondary-200" />
            );
          }

          return (
            <button
              key={index}
              className={clsx(
                "w-full flex items-center px-3 py-2 text-sm text-left hover:bg-secondary-100 transition-colors",
                item.variant === "danger"
                  ? "text-red-600 hover:bg-red-50"
                  : "text-secondary-700"
              )}
              onClick={() => {
                action("menu-item-clicked")(item.action);
              }}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </div>
    );

    return (
      <Popover
        content={menuContent}
        placement="bottomRight"
        trigger="click"
        width={180}
        showArrow={false}
      >
        <Button variant="outline">Menu ⋮</Button>
      </Popover>
    );
  },
};

export const ControlledPopover: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    const content = (
      <div className="space-y-3">
        <p className="text-sm text-secondary-600">
          This is a controlled popover. Its visibility is managed externally.
        </p>
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={() => setVisible(false)}
        >
          Close from Inside
        </Button>
      </div>
    );

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setVisible(true)}>Show Popover</Button>
          <Button variant="outline" onClick={() => setVisible(false)}>
            Hide Popover
          </Button>
        </div>

        <Popover
          content={content}
          visible={visible}
          onVisibleChange={setVisible}
          placement="bottom"
          title="Controlled Popover"
          showCloseButton
          width={250}
        >
          <Button variant="secondary" disabled={visible}>
            {visible ? "Popover is Open" : "Target Element"}
          </Button>
        </Popover>

        <div className="text-sm text-secondary-500">
          Current state: <strong>{visible ? "Visible" : "Hidden"}</strong>
        </div>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    const richContent = (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-secondary-900">
            System Status: Online
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-secondary-600">CPU Usage</span>
            <span className="font-medium">45%</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-secondary-600">Memory</span>
            <span className="font-medium">67%</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div
              className="bg-yellow-500 h-2 rounded-full"
              style={{ width: "67%" }}
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-secondary-600">Storage</span>
            <span className="font-medium">23%</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "23%" }}
            ></div>
          </div>
        </div>
      </div>
    );

    return (
      <Popover
        content={richContent}
        title="Server Status"
        showCloseButton
        placement="bottom"
        trigger="click"
        width={280}
        overlayClassName="border-2 border-blue-200 shadow-xl"
        onClose={action("status-popover-closed")}
      >
        <Button>🖥️ Server Status</Button>
      </Popover>
    );
  },
};

export const Playground: Story = {
  args: {
    content: (
      <div>
        <p className="text-sm text-secondary-600">
          This is playground popover content. You can customize all the
          properties using the controls.
        </p>
      </div>
    ),
    title: "Playground Popover",
    placement: "top",
    trigger: "click",
    showArrow: true,
    showCloseButton: false,
    disabled: false,
    width: 250,
    mouseEnterDelay: 100,
    mouseLeaveDelay: 100,
    onVisibleChange: action("visibility-changed"),
    children: <Button>Playground Trigger</Button>,
  },
};
