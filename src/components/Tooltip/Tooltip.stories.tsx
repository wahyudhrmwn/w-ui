import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";

const meta = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Tooltip untuk menampilkan informasi tambahan saat hover, click, atau focus. Mendukung berbagai posisi, ukuran, dan styling dengan positioning yang otomatis menyesuaikan viewport.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Posisi tooltip",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran tooltip",
    },
    variant: {
      control: "select",
      options: ["dark", "light"],
      description: "Variant styling",
    },
    trigger: {
      control: "select",
      options: ["hover", "click", "focus"],
      description: "Event trigger",
    },
    showDelay: {
      control: "number",
      description: "Delay sebelum muncul (ms)",
    },
    hideDelay: {
      control: "number",
      description: "Delay sebelum hilang (ms)",
    },
    showArrow: {
      control: "boolean",
      description: "Tampilkan arrow",
    },
    disabled: {
      control: "boolean",
      description: "Disable tooltip",
    },
    content: {
      control: "text",
      description: "Konten tooltip",
    },
  },
  args: {
    content: "This is a helpful tooltip!",
    showArrow: true,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "This is a helpful tooltip!",
    placement: "top",
  },
};

// Placement variations
export const TopPlacement: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Top tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip positioned at the top",
    placement: "top",
  },
};

export const BottomPlacement: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Bottom tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip positioned at the bottom",
    placement: "bottom",
  },
};

export const LeftPlacement: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Left tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip positioned on the left",
    placement: "left",
  },
};

export const RightPlacement: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Right tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip positioned on the right",
    placement: "right",
  },
};

// Size variations
export const Small: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-3 py-1.5 text-sm bg-primary-600 text-white rounded hover:bg-primary-700">
          Small tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Small tooltip",
    size: "sm",
  },
};

export const Medium: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Medium tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "This is a medium sized tooltip with more content",
    size: "md",
  },
};

export const Large: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-6 py-3 text-lg bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Large tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content:
      "This is a large tooltip that can contain more detailed information and longer text content.",
    size: "lg",
  },
};

// Variant styles
export const Dark: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Dark tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Dark themed tooltip",
    variant: "dark",
  },
};

export const Light: Story = {
  render: (args) => (
    <div className="p-8 bg-gray-800">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100">
          Light tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Light themed tooltip",
    variant: "light",
  },
};

// Different triggers
export const HoverTrigger: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Hover trigger
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Triggered by hover",
    trigger: "hover",
  },
};

export const ClickTrigger: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Click trigger
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Triggered by click (click again to hide)",
    trigger: "click",
  },
};

export const FocusTrigger: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <input
          type="text"
          placeholder="Focus trigger"
          className="px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </Tooltip>
    </div>
  ),
  args: {
    content: "Triggered by focus (tab to this input)",
    trigger: "focus",
  },
};

// Without arrow
export const NoArrow: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          No arrow
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip without arrow",
    showArrow: false,
  },
};

// Disabled tooltip
export const Disabled: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
          Disabled tooltip
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "This tooltip is disabled",
    disabled: true,
  },
};

// Rich content
export const RichContent: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Rich content
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: (
      <div>
        <h4 className="font-semibold mb-1">User Profile</h4>
        <p className="text-sm opacity-90">Click to view detailed information</p>
        <div className="mt-2 text-xs opacity-75">Last updated: 2 hours ago</div>
      </div>
    ),
    size: "lg",
  },
};

// Showcase all placements
export const AllPlacements: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center space-y-16 p-16">
      {/* Top */}
      <Tooltip content="Top tooltip" placement="top">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Top
        </button>
      </Tooltip>

      <div className="flex items-center space-x-16">
        {/* Left */}
        <Tooltip content="Left tooltip" placement="left">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Left
          </button>
        </Tooltip>

        <div className="px-8 py-4 bg-secondary-100 rounded-lg text-secondary-600">
          Hover buttons around me
        </div>

        {/* Right */}
        <Tooltip content="Right tooltip" placement="right">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Right
          </button>
        </Tooltip>
      </div>

      {/* Bottom */}
      <Tooltip content="Bottom tooltip" placement="bottom">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Bottom
        </button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrasi semua posisi tooltip yang tersedia. Hover pada setiap button untuk melihat tooltip.",
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);

    return (
      <div className="p-8 space-y-6">
        <h3 className="text-lg font-semibold mb-4">Interactive Tooltip Demo</h3>

        <div className="flex flex-wrap gap-4">
          <Tooltip content={`Button clicked ${count} times`} trigger="hover">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Counter: {count}
            </button>
          </Tooltip>

          <Tooltip
            content={liked ? "Click to unlike" : "Click to like"}
            placement="bottom"
          >
            <button
              onClick={() => setLiked(!liked)}
              className={clsx(
                "px-4 py-2 rounded-lg transition-colors",
                liked
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
            >
              {liked ? "❤️ Liked" : "🤍 Like"}
            </button>
          </Tooltip>

          <Tooltip
            content="This tooltip has a longer delay"
            showDelay={500}
            placement="right"
          >
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Slow tooltip
            </button>
          </Tooltip>

          <Tooltip
            content={
              <div className="text-center">
                <div className="text-lg mb-1">🎉</div>
                <div className="font-semibold">Congratulations!</div>
                <div className="text-sm opacity-90 mt-1">
                  You found the special button!
                </div>
              </div>
            }
            variant="light"
            size="lg"
            trigger="click"
            placement="left"
          >
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600">
              Special ✨
            </button>
          </Tooltip>
        </div>

        <div className="p-4 bg-secondary-50 rounded-lg">
          <p className="text-sm text-secondary-600">
            Try different interactions: hover, click, and see how tooltips
            behave with different triggers and content!
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif dengan berbagai trigger, konten dinamis, dan styling. Coba hover, click, dan lihat berbagai jenis tooltip!",
      },
    },
  },
};
