import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Avatar untuk menampilkan foto profil pengguna dengan berbagai ukuran, bentuk, dan state placeholder. Mendukung loading state dan Avatar Group untuk menampilkan multiple avatar.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["circle", "rounded", "square"],
      description: "Bentuk avatar",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Ukuran avatar",
    },
    src: {
      control: "text",
      description: "URL gambar avatar",
    },
    alt: {
      control: "text",
      description: "Alt text untuk gambar",
    },
    placeholder: {
      control: "text",
      description: "Text placeholder ketika tidak ada gambar",
    },
    bgColor: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      description: "Warna background placeholder",
    },
  },
  args: {
    placeholder: "John Doe",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  args: {
    placeholder: "John Doe",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "John Doe",
    placeholder: "John Doe",
  },
};

export const WithBrokenImage: Story = {
  args: {
    src: "https://broken-image-url.jpg",
    alt: "John Doe",
    placeholder: "John Doe",
  },
};

// Size variations
export const ExtraSmall: Story = {
  args: {
    size: "xs",
    placeholder: "JD",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "JD",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "JD",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "JD",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    placeholder: "JD",
  },
};

export const ExtraLarge2: Story = {
  args: {
    size: "2xl",
    placeholder: "JD",
  },
};

// Variant shapes
export const Circle: Story = {
  args: {
    variant: "circle",
    placeholder: "JD",
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    placeholder: "JD",
  },
};

export const Square: Story = {
  args: {
    variant: "square",
    placeholder: "JD",
  },
};

// Background colors
export const PrimaryBg: Story = {
  args: {
    placeholder: "JD",
    bgColor: "primary",
  },
};

export const SuccessBg: Story = {
  args: {
    placeholder: "JD",
    bgColor: "success",
  },
};

export const WarningBg: Story = {
  args: {
    placeholder: "JD",
    bgColor: "warning",
  },
};

export const ErrorBg: Story = {
  args: {
    placeholder: "JD",
    bgColor: "error",
  },
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" placeholder="XS" />
      <Avatar size="sm" placeholder="SM" />
      <Avatar size="md" placeholder="MD" />
      <Avatar size="lg" placeholder="LG" />
      <Avatar size="xl" placeholder="XL" />
      <Avatar size="2xl" placeholder="2XL" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran avatar yang tersedia dari XS hingga 2XL.",
      },
    },
  },
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        variant="circle"
        placeholder="Circle"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        variant="rounded"
        placeholder="Rounded"
        src="https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        variant="square"
        placeholder="Square"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Semua bentuk avatar: circle (bulat), rounded (sudut membulat), dan square (kotak).",
      },
    },
  },
};

// Avatar Group stories
export const AvatarGroupStory: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="John Doe"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Jane Smith"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Mike Johnson"
      />
      <Avatar placeholder="Alex Brown" bgColor="primary" />
      <Avatar placeholder="Sarah Davis" bgColor="success" />
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Avatar Group untuk menampilkan beberapa avatar secara bersamaan dengan batasan maksimal dan indikator jumlah tersisa.",
      },
    },
  },
};

export const AvatarGroupLarge: Story = {
  render: () => (
    <AvatarGroup max={4} size="lg">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="John Doe"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Jane Smith"
      />
      <Avatar placeholder="Mike Johnson" bgColor="primary" />
      <Avatar placeholder="Alex Brown" bgColor="success" />
      <Avatar placeholder="Sarah Davis" bgColor="warning" />
      <Avatar placeholder="Tom Wilson" bgColor="error" />
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar Group dengan ukuran large dan lebih banyak avatar.",
      },
    },
  },
};
