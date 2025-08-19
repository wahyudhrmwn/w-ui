import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Select } from "./Select";

// Icons untuk stories
const LocationIcon = () => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
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

// Sample data
const countries = [
  { value: "id", label: "Indonesia" },
  { value: "us", label: "United States" },
  { value: "sg", label: "Singapore" },
  { value: "my", label: "Malaysia" },
  { value: "th", label: "Thailand" },
  { value: "ph", label: "Philippines" },
];

const roles = [
  { value: "admin", label: "Administrator" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
  { value: "guest", label: "Guest", disabled: true },
];

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "strawberry", label: "Strawberry" },
];

const meta = {
  title: "Form Controls/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Select untuk memilih satu opsi dari daftar pilihan yang tersedia. Mendukung berbagai ukuran, icon, dan state error. Dapat menggunakan options prop atau children untuk menampilkan pilihan.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran select",
    },
    label: {
      control: "text",
      description: "Label untuk select",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    helperText: {
      control: "text",
      description: "Helper text di bawah select",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    disabled: {
      control: "boolean",
      description: "Disable select",
    },
    options: {
      control: false,
      description: "Array options untuk select",
    },
    leftIcon: {
      control: false,
      description: "Icon di sebelah kiri select",
    },
    onChange: { action: "changed" },
  },
  args: {
    onChange: action("changed"),
    label: "Select an option",
    options: fruits,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  args: {
    label: "Choose a fruit",
    options: fruits,
    placeholder: "Select a fruit...",
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Choose a country",
    options: countries,
    placeholder: "Select your country...",
  },
};

export const WithoutLabel: Story = {
  args: {
    options: fruits,
    placeholder: "Select a fruit...",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled select",
    options: fruits,
    placeholder: "Cannot select...",
    disabled: true,
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small select",
    options: fruits,
    placeholder: "Select...",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium select",
    options: fruits,
    placeholder: "Select...",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large select",
    options: fruits,
    placeholder: "Select...",
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    label: "Choose location",
    leftIcon: <LocationIcon />,
    options: countries,
    placeholder: "Select country...",
  },
};

export const WithUserIcon: Story = {
  args: {
    label: "User role",
    leftIcon: <UserIcon />,
    options: roles,
    placeholder: "Select role...",
  },
};

// With helper text and error
export const WithHelperText: Story = {
  args: {
    label: "User role",
    options: roles,
    placeholder: "Select role...",
    helperText: "Choose the appropriate role for this user",
  },
};

export const WithError: Story = {
  args: {
    label: "User role",
    options: roles,
    placeholder: "Select role...",
    error: "Please select a valid role",
  },
};

// With disabled options
export const WithDisabledOptions: Story = {
  args: {
    label: "User role",
    options: roles,
    placeholder: "Select role...",
    helperText: "Note: Guest role is currently disabled",
  },
};

// Using children instead of options
export const WithChildren: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="js">JavaScript</option>
      <option value="ts">TypeScript</option>
      <option value="py">Python</option>
      <option value="java">Java</option>
      <option value="go" disabled>
        Go (Coming Soon)
      </option>
    </Select>
  ),
  args: {
    label: "Programming Language",
    placeholder: "Select language...",
    onChange: action("language-changed"),
  },
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Select
        size="sm"
        label="Small select"
        options={fruits}
        placeholder="Select..."
        onChange={action("small-changed")}
      />
      <Select
        size="md"
        label="Medium select"
        options={fruits}
        placeholder="Select..."
        onChange={action("medium-changed")}
      />
      <Select
        size="lg"
        label="Large select"
        options={fruits}
        placeholder="Select..."
        onChange={action("large-changed")}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran select yang tersedia dari small hingga large.",
      },
    },
  },
};

// Interactive form example
export const InteractiveForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: "",
      role: "",
      language: "",
    });

    const handleChange =
      (field: keyof typeof formData) =>
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFormData((prev) => ({
          ...prev,
          [field]: value,
        }));
        action(`${field}-changed`)(value);
      };

    return (
      <div className="space-y-4 p-6 bg-secondary-50 rounded-lg">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          User Profile
        </h3>

        <Select
          label="Country"
          leftIcon={<LocationIcon />}
          options={countries}
          placeholder="Select your country..."
          value={formData.country}
          onChange={handleChange("country")}
          helperText="Choose your current location"
        />

        <Select
          label="Role"
          leftIcon={<UserIcon />}
          options={roles}
          placeholder="Select your role..."
          value={formData.role}
          onChange={handleChange("role")}
          helperText="This determines your access level"
        />

        <Select
          label="Preferred Language"
          placeholder="Select programming language..."
          value={formData.language}
          onChange={handleChange("language")}
        >
          <option value="js">JavaScript</option>
          <option value="ts">TypeScript</option>
          <option value="py">Python</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
        </Select>

        <div className="mt-6 p-4 bg-white rounded border">
          <h4 className="font-medium text-secondary-800 mb-2">
            Selected Values:
          </h4>
          <pre className="text-sm text-secondary-600">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh interaktif penggunaan Select dalam form. Pilih opsi untuk melihat perubahan dan check Actions panel.",
      },
    },
  },
};
