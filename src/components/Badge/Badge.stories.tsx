import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge } from "./Badge";

// Icons untuk stories
const CheckIcon = () => (
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
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const BellIcon = () => (
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
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Badge untuk menampilkan status, label, atau informasi singkat. Mendukung berbagai variant, ukuran, dan bentuk.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
      ],
      description: "Variant styling untuk badge",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran badge",
    },
    pill: {
      control: "boolean",
      description: "Bentuk pill (rounded penuh)",
    },
    children: {
      control: "text",
      description: "Konten badge",
    },
    leftIcon: {
      control: false,
      description: "Icon di sebelah kiri text",
    },
    rightIcon: {
      control: false,
      description: "Icon di sebelah kanan text",
    },
  },
  args: {
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

// Shape variations
export const Pill: Story = {
  args: {
    pill: true,
    children: "Pill Badge",
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    leftIcon: <CheckIcon />,
    variant: "success",
    children: "Completed",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <StarIcon />,
    variant: "warning",
    children: "Featured",
  },
};

export const NotificationBadge: Story = {
  args: {
    leftIcon: <BellIcon />,
    variant: "primary",
    pill: true,
    children: "3",
  },
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua variant badge yang tersedia.",
      },
    },
  },
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran badge yang tersedia.",
      },
    },
  },
};

// Status examples
export const StatusExamples: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success" leftIcon={<CheckIcon />}>
        Completed
      </Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="primary" pill>
        New
      </Badge>
      <Badge variant="secondary" rightIcon={<StarIcon />}>
        Featured
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan badge untuk status yang berbeda.",
      },
    },
  },
};
