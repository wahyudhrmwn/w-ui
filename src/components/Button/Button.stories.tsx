import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Button } from "./Button";

// Icons untuk stories
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

const ArrowRightIcon = () => (
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
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const meta = {
  title: "Form Controls/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Button yang fleksibel dengan berbagai variant, ukuran, dan state. Mendukung icons dan loading state.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
      description: "Variant styling untuk button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Ukuran button",
    },
    loading: {
      control: "boolean",
      description: "Menampilkan loading state",
    },
    disabled: {
      control: "boolean",
      description: "Disable button",
    },
    children: {
      control: "text",
      description: "Konten button",
    },
    leftIcon: {
      control: false,
      description: "Icon di sebelah kiri text",
    },
    rightIcon: {
      control: false,
      description: "Icon di sebelah kanan text",
    },
    onClick: { action: "clicked" },
  },
  args: {
    onClick: action("clicked"),
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "Extra Large Button",
  },
};

// State variations
export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    leftIcon: <UserIcon />,
    children: "With Left Icon",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ArrowRightIcon />,
    children: "With Right Icon",
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: <UserIcon />,
    rightIcon: <ArrowRightIcon />,
    children: "Both Icons",
  },
};

// Showcase all variants dengan actions
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" onClick={action("primary-clicked")}>
        Primary
      </Button>
      <Button variant="secondary" onClick={action("secondary-clicked")}>
        Secondary
      </Button>
      <Button variant="outline" onClick={action("outline-clicked")}>
        Outline
      </Button>
      <Button variant="ghost" onClick={action("ghost-clicked")}>
        Ghost
      </Button>
      <Button variant="destructive" onClick={action("destructive-clicked")}>
        Destructive
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Semua variant button yang tersedia. Klik setiap button untuk melihat action di Actions panel.",
      },
    },
  },
};

// Showcase all sizes dengan actions
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm" onClick={action("small-clicked")}>
        Small
      </Button>
      <Button size="md" onClick={action("medium-clicked")}>
        Medium
      </Button>
      <Button size="lg" onClick={action("large-clicked")}>
        Large
      </Button>
      <Button size="xl" onClick={action("xl-clicked")}>
        Extra Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Semua ukuran button yang tersedia. Klik untuk melihat action di Actions panel.",
      },
    },
  },
};
