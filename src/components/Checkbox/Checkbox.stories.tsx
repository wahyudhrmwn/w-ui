import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Form Controls/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Checkbox untuk pilihan boolean dan multiple selection. Mendukung label, helper text, error state, dan indeterminate state.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label untuk checkbox",
    },
    helperText: {
      control: "text",
      description: "Helper text di bawah checkbox",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran checkbox",
    },
    checked: {
      control: "boolean",
      description: "Checked state",
    },
    indeterminate: {
      control: "boolean",
      description: "Indeterminate state",
    },
    disabled: {
      control: "boolean",
      description: "Disable checkbox",
    },
    onChange: { action: "changed" },
  },
  args: {
    onChange: action("changed"),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic checkbox
export const Default: Story = {
  args: {
    label: "Default Checkbox",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    defaultChecked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Accept Terms and Conditions",
    helperText: "By checking this box, you agree to our terms and conditions.",
  },
};

export const WithError: Story = {
  args: {
    label: "Required Checkbox",
    error: "You must accept the terms to continue",
    helperText: "This field is required",
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Checkbox",
    defaultChecked: true,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Checkbox",
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Checkbox",
    defaultChecked: true,
  },
};

// States
export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked",
    disabled: true,
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate State",
    indeterminate: true,
    helperText: "This represents a partially selected state",
  },
};

// Without label
export const WithoutLabel: Story = {
  args: {
    helperText: "Checkbox without label",
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox size="sm" label="Small checkbox" defaultChecked />
      <Checkbox size="md" label="Medium checkbox" defaultChecked />
      <Checkbox size="lg" label="Large checkbox" defaultChecked />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran checkbox yang tersedia.",
      },
    },
    controls: { disable: true },
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled defaultChecked />
      <Checkbox label="With Error" error="This is an error message" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua state checkbox yang tersedia.",
      },
    },
    controls: { disable: true },
  },
};

// Form example
export const PreferencesForm: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Notification Preferences
        </h3>
        <div className="space-y-3">
          <Checkbox
            label="Email Notifications"
            helperText="Receive notifications via email"
            defaultChecked
          />
          <Checkbox
            label="Push Notifications"
            helperText="Receive push notifications on your device"
          />
          <Checkbox
            label="SMS Notifications"
            helperText="Receive notifications via SMS"
          />
          <Checkbox
            label="Marketing Emails"
            helperText="Receive promotional emails and updates"
            defaultChecked
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan Checkbox dalam form preferences.",
      },
    },
    controls: { disable: true },
  },
};

// Interactive Select All example
export const SelectAllExample: Story = {
  render: () => {
    const SelectAllWrapper = () => {
      const [items, setItems] = useState([
        { id: 1, label: "Item 1", checked: true },
        { id: 2, label: "Item 2", checked: true },
        { id: 3, label: "Item 3", checked: false },
        { id: 4, label: "Item 4", checked: false },
      ]);

      const checkedCount = items.filter((item) => item.checked).length;
      const isAllChecked = checkedCount === items.length;
      const isIndeterminate = checkedCount > 0 && checkedCount < items.length;

      const handleSelectAll = (checked: boolean) => {
        setItems(items.map((item) => ({ ...item, checked })));
        action("select-all")(checked);
      };

      const handleItemChange = (id: number, checked: boolean) => {
        setItems(
          items.map((item) => (item.id === id ? { ...item, checked } : item))
        );
        action("item-changed")({ id, checked });
      };

      return (
        <div className="w-80 space-y-3">
          <Checkbox
            label="Select All"
            checked={isAllChecked}
            indeterminate={isIndeterminate}
            helperText={`${checkedCount} of ${items.length} items selected`}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
            {items.map((item) => (
              <Checkbox
                key={item.id}
                label={item.label}
                checked={item.checked}
                onChange={(e) => handleItemChange(item.id, e.target.checked)}
              />
            ))}
          </div>
        </div>
      );
    };

    return <SelectAllWrapper />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Contoh interaktif "Select All" functionality dengan state management yang benar. Checkbox parent akan menunjukkan indeterminate state ketika sebagian item dipilih.',
      },
    },
    controls: { disable: true },
  },
};
