import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./Card";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

const meta = {
  title: "W-UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Card untuk mengelompokkan konten. Tersedia dengan sub-komponen CardHeader, CardContent, dan CardFooter.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
      description: "Variant styling untuk card",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Padding untuk card",
    },
    children: {
      control: false,
      description: "Konten card",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    variant: "default",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Default Card
        </h3>
        <p className="text-gray-600">
          This is a default card with basic styling.
        </p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Outlined Card
        </h3>
        <p className="text-gray-600">This card has a thicker border outline.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Elevated Card
        </h3>
        <p className="text-gray-600">
          This card has a shadow for elevation effect.
        </p>
      </div>
    ),
  },
};

// Padding variations
export const NoPadding: Story = {
  args: {
    padding: "none",
    children: (
      <div className="p-4 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Padding</h3>
        <p className="text-gray-600">
          Card with no internal padding (content has its own padding).
        </p>
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Small Padding
        </h3>
        <p className="text-gray-600">Card with small internal padding.</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: "lg",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Large Padding
        </h3>
        <p className="text-gray-600">Card with large internal padding.</p>
      </div>
    ),
  },
};

// With sub-components
export const WithSubComponents: Story = {
  render: () => (
    <Card variant="elevated" className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
          <Badge variant="primary">New</Badge>
        </div>
        <p className="text-sm text-gray-600">
          This is a subtitle or description
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This is the main content of the card. It can contain any type of
          content like text, images, forms, or other components.
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button variant="primary" size="sm">
            Confirm
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card dengan semua sub-komponen: Header, Content, dan Footer.",
      },
    },
    controls: { disable: true },
  },
};

// Product card example
export const ProductCard: Story = {
  render: () => (
    <Card variant="elevated" className="w-64">
      <CardContent padding="none">
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg"></div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Product Name
            </h3>
            <Badge variant="success" size="sm">
              In Stock
            </Badge>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            A great product with amazing features that you'll love.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">$99.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan Card untuk product showcase.",
      },
    },
    controls: { disable: true },
  },
};

// Stats card example
export const StatsCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="outlined">
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">12,345</p>
            </div>
            <Badge variant="success">+12%</Badge>
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$45,678</p>
            </div>
            <Badge variant="warning">-3%</Badge>
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">Orders</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
            <Badge variant="success">+8%</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan Card untuk menampilkan statistik.",
      },
    },
    controls: { disable: true },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="default">
        <CardHeader>
          <h4 className="font-semibold">Default</h4>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Default card variant</p>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader>
          <h4 className="font-semibold">Outlined</h4>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Outlined card variant</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <h4 className="font-semibold">Elevated</h4>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Elevated card variant</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua variant card yang tersedia.",
      },
    },
    controls: { disable: true },
  },
};
