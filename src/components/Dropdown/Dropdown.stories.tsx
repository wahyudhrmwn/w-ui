import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Dropdown, DropdownItem } from "./Dropdown";
import { Button } from "../Button";

const meta = {
  title: "Navigation/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Dropdown yang fleksibel untuk menampilkan menu pilihan. Mendukung keyboard navigation, berbagai ukuran, dan placement yang dapat dikustomisasi.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "Array items untuk dropdown menu",
      control: false,
    },
    trigger: {
      description: "Element yang akan men-trigger dropdown",
      control: false,
    },
    placement: {
      control: { type: "select" },
      options: [
        "bottom-start",
        "bottom-end",
        "bottom-center",
        "top-start",
        "top-end",
        "top-center",
      ],
      description: "Posisi dropdown relatif terhadap trigger",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran dropdown",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah dropdown disabled",
    },
    closeOnClick: {
      control: { type: "boolean" },
      description: "Apakah dropdown tertutup ketika item diklik",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons untuk stories
const ChevronDownIcon = () => (
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
      d="M19 9l-7 7-7-7"
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

const LogoutIcon = () => (
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
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

// Sample items
const basicItems: DropdownItem[] = [
  {
    id: "profile",
    label: "Profile",
    icon: <UserIcon />,
    onClick: action("profile-clicked"),
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    onClick: action("settings-clicked"),
  },
  { id: "divider-1", label: "", divider: true },
  {
    id: "logout",
    label: "Logout",
    icon: <LogoutIcon />,
    onClick: action("logout-clicked"),
  },
];

const manyItems: DropdownItem[] = [
  { id: "recent", label: "Recent Files", onClick: action("recent-clicked") },
  { id: "starred", label: "Starred", onClick: action("starred-clicked") },
  { id: "shared", label: "Shared with me", onClick: action("shared-clicked") },
  { id: "divider-1", label: "", divider: true },
  { id: "upload", label: "Upload", onClick: action("upload-clicked") },
  {
    id: "create-folder",
    label: "Create Folder",
    onClick: action("create-folder-clicked"),
  },
  { id: "divider-2", label: "", divider: true },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    onClick: action("settings-clicked"),
  },
  { id: "help", label: "Help", onClick: action("help-clicked") },
  {
    id: "feedback",
    label: "Send Feedback",
    onClick: action("feedback-clicked"),
  },
];

const itemsWithDisabled: DropdownItem[] = [
  { id: "copy", label: "Copy", onClick: action("copy-clicked") },
  { id: "cut", label: "Cut", disabled: true, onClick: action("cut-clicked") },
  { id: "paste", label: "Paste", onClick: action("paste-clicked") },
  { id: "divider-1", label: "", divider: true },
  {
    id: "delete",
    label: "Delete",
    disabled: true,
    onClick: action("delete-clicked"),
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
    trigger: (
      <Button variant="outline" size="md">
        Actions <ChevronDownIcon />
      </Button>
    ),
    placement: "bottom-start",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Dropdown
        items={basicItems}
        trigger={
          <Button variant="outline" size="sm">
            Small <ChevronDownIcon />
          </Button>
        }
        size="sm"
        placement="bottom-start"
      />
      <Dropdown
        items={basicItems}
        trigger={
          <Button variant="outline" size="md">
            Medium <ChevronDownIcon />
          </Button>
        }
        size="md"
        placement="bottom-start"
      />
      <Dropdown
        items={basicItems}
        trigger={
          <Button variant="outline" size="lg">
            Large <ChevronDownIcon />
          </Button>
        }
        size="lg"
        placement="bottom-start"
      />
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-16">
      <Dropdown
        items={basicItems}
        trigger={<Button variant="outline">Top Start</Button>}
        placement="top-start"
      />
      <Dropdown
        items={basicItems}
        trigger={<Button variant="outline">Top Center</Button>}
        placement="top-center"
      />
      <Dropdown
        items={basicItems}
        trigger={<Button variant="outline">Top End</Button>}
        placement="top-end"
      />
      <Dropdown
        items={basicItems}
        trigger={<Button variant="outline">Bottom Start</Button>}
        placement="bottom-start"
      />
      <Dropdown
        items={basicItems}
        trigger={<Button variant="outline">Bottom Center</Button>}
        placement="bottom-center"
      />
      <Dropdown
        items={basicItems}
        trigger={<Button variant="outline">Bottom End</Button>}
        placement="bottom-end"
      />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const WithDisabledItems: Story = {
  args: {
    items: itemsWithDisabled,
    trigger: (
      <Button variant="outline">
        Edit <ChevronDownIcon />
      </Button>
    ),
    placement: "bottom-start",
  },
};

export const ManyItems: Story = {
  args: {
    items: manyItems,
    trigger: (
      <Button variant="primary">
        File <ChevronDownIcon />
      </Button>
    ),
    placement: "bottom-start",
  },
};

export const CustomTrigger: Story = {
  render: () => (
    <div className="flex gap-4">
      <Dropdown
        items={basicItems}
        trigger={
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-secondary-300 hover:bg-secondary-50 cursor-pointer">
            <UserIcon />
            <span>John Doe</span>
            <ChevronDownIcon />
          </div>
        }
        placement="bottom-start"
      />

      <Dropdown
        items={basicItems}
        trigger={
          <button className="p-2 rounded-full hover:bg-secondary-100">
            <SettingsIcon />
          </button>
        }
        placement="bottom-end"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    items: basicItems,
    trigger: (
      <Button variant="outline" disabled>
        Disabled <ChevronDownIcon />
      </Button>
    ),
    disabled: true,
  },
};

export const ControlledDropdown: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</Button>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={!isOpen}
          >
            Close Dropdown
          </Button>
        </div>

        <Dropdown
          items={basicItems}
          trigger={
            <Button variant="outline">
              Controlled Menu <ChevronDownIcon />
            </Button>
          }
          isOpen={isOpen}
          onToggle={setIsOpen}
          closeOnClick={false}
        />
      </div>
    );
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [selectedAction, setSelectedAction] = useState("None");
    const [isOpen, setIsOpen] = useState(false);

    const demoItems: DropdownItem[] = [
      {
        id: "save",
        label: "Save File",
        icon: <UserIcon />,
        onClick: () => setSelectedAction("Save File"),
      },
      {
        id: "export",
        label: "Export",
        icon: <SettingsIcon />,
        onClick: () => setSelectedAction("Export"),
      },
      { id: "divider-1", label: "", divider: true },
      {
        id: "share",
        label: "Share",
        onClick: () => setSelectedAction("Share"),
      },
      {
        id: "delete",
        label: "Delete",
        onClick: () => setSelectedAction("Delete"),
      },
    ];

    return (
      <div className="space-y-4">
        <div className="text-sm text-secondary-600">
          Status: Dropdown is {isOpen ? "open" : "closed"}
        </div>
        <div className="text-sm text-secondary-600">
          Last action: {selectedAction}
        </div>

        <Dropdown
          items={demoItems}
          trigger={
            <Button variant="primary">
              File Actions <ChevronDownIcon />
            </Button>
          }
          onToggle={setIsOpen}
          placement="bottom-start"
        />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    items: basicItems,
    trigger: (
      <Button variant="outline">
        Menu <ChevronDownIcon />
      </Button>
    ),
    placement: "bottom-start",
    size: "md",
    disabled: false,
    closeOnClick: true,
  },
};
