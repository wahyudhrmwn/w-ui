import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Space, HSpace, VSpace, CompactSpace, Spacer } from "./Space";
import { Button } from "../Button";

const meta = {
  title: "Layout & Utility/Space",
  component: Space,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Space untuk mengatur spacing yang konsisten antar elemen. Mendukung horizontal/vertical direction, berbagai ukuran spacing, alignment, dan fitur split untuk separator.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Arah spacing",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Ukuran spacing",
    },
    align: {
      control: { type: "select" },
      options: ["start", "end", "center", "baseline"],
      description: "Alignment elemen",
    },
    wrap: {
      control: { type: "boolean" },
      description: "Apakah elemen bisa wrap",
    },
    compact: {
      control: { type: "boolean" },
      description: "Mode compact (spacing lebih kecil)",
    },
  },
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

// Demo components for visualization
const DemoBox: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`px-4 py-2 bg-primary-100 border border-primary-300 rounded text-primary-800 font-medium ${className}`}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};

export const BasicUsage: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Spacing</h3>
        <Space>
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
          <Button>Fourth</Button>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Vertical Spacing</h3>
        <Space direction="vertical">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Space>
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">XS Size</h3>
        <Space size="xs">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">SM Size</h3>
        <Space size="sm">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">MD Size (Default)</h3>
        <Space size="md">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">LG Size</h3>
        <Space size="lg">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">XL Size</h3>
        <Space size="xl">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Align Center</h3>
        <div className="bg-secondary-50 p-4 rounded">
          <Space align="center">
            <DemoBox className="h-8">Short</DemoBox>
            <DemoBox className="h-16">Tall</DemoBox>
            <DemoBox className="h-12">Medium</DemoBox>
          </Space>
        </div>
      </div>
    </div>
  ),
};

export const WithWrap: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">With Wrap</h3>
        <div className="bg-secondary-50 p-4 rounded w-80">
          <Space wrap>
            <DemoBox>Long Item 1</DemoBox>
            <DemoBox>Long Item 2</DemoBox>
            <DemoBox>Long Item 3</DemoBox>
            <DemoBox>Long Item 4</DemoBox>
          </Space>
        </div>
      </div>
    </div>
  ),
};

export const PresetComponents: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">HSpace (Horizontal)</h3>
        <HSpace>
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </HSpace>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">VSpace (Vertical)</h3>
        <VSpace>
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </VSpace>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">CompactSpace</h3>
        <CompactSpace>
          <Button>Save</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="ghost">Help</Button>
        </CompactSpace>
      </div>
    </div>
  ),
};

export const SpacerComponent: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Spacer in Flex Layout</h3>
        <div className="flex items-center p-4 bg-secondary-50 rounded">
          <div className="text-lg font-semibold">Title</div>
          <Spacer size="lg" />
          <div className="text-sm text-secondary-600">Subtitle</div>
          <Spacer size={8} />
          <Button size="sm">Action</Button>
        </div>
      </div>
    </div>
  ),
};
