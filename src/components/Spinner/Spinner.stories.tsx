import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Spinner, SpinnerOverlay } from "./Spinner";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Spinner untuk menunjukkan loading state. Tersedia dalam berbagai ukuran, warna, variant animasi, dan kecepatan. Dilengkapi juga dengan SpinnerOverlay untuk full-screen loading.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Ukuran spinner",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "white", "current"],
      description: "Warna spinner",
    },
    variant: {
      control: "select",
      options: ["spin", "pulse", "bounce", "dots"],
      description: "Variant animasi spinner",
    },
    speed: {
      control: "select",
      options: ["slow", "normal", "fast"],
      description: "Kecepatan animasi",
    },
    label: {
      control: "text",
      description: "Label untuk accessibility",
    },
  },
  args: {
    label: "Loading...",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    variant: "spin",
    size: "md",
    color: "primary",
  },
};

export const Spin: Story = {
  args: {
    variant: "spin",
    size: "md",
    color: "primary",
  },
};

export const Pulse: Story = {
  args: {
    variant: "pulse",
    size: "md",
    color: "primary",
  },
};

export const Bounce: Story = {
  args: {
    variant: "bounce",
    size: "md",
    color: "primary",
  },
};

export const Dots: Story = {
  args: {
    variant: "dots",
    size: "md",
    color: "primary",
  },
};

// Size variations
export const ExtraSmall: Story = {
  args: {
    size: "xs",
    variant: "spin",
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    variant: "spin",
    color: "primary",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    variant: "spin",
    color: "primary",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "spin",
    color: "primary",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    variant: "spin",
    color: "primary",
  },
};

// Color variations
export const Primary: Story = {
  args: {
    color: "primary",
    variant: "spin",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    variant: "spin",
    size: "md",
  },
};

export const White: Story = {
  args: {
    color: "white",
    variant: "spin",
    size: "md",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Current: Story = {
  render: (args) => (
    <div className="text-green-600">
      <p className="mb-2 text-sm">
        This spinner inherits the text color (green)
      </p>
      <Spinner {...args} />
    </div>
  ),
  args: {
    color: "current",
    variant: "spin",
    size: "md",
  },
};

// Speed variations
export const SlowSpeed: Story = {
  args: {
    speed: "slow",
    variant: "spin",
    size: "md",
    color: "primary",
  },
};

export const NormalSpeed: Story = {
  args: {
    speed: "normal",
    variant: "spin",
    size: "md",
    color: "primary",
  },
};

export const FastSpeed: Story = {
  args: {
    speed: "fast",
    variant: "spin",
    size: "md",
    color: "primary",
  },
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <div className="text-center">
        <Spinner variant="spin" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Spin</p>
      </div>
      <div className="text-center">
        <Spinner variant="pulse" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Pulse</p>
      </div>
      <div className="text-center">
        <Spinner variant="bounce" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Bounce</p>
      </div>
      <div className="text-center">
        <Spinner variant="dots" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Dots</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Semua variant spinner yang tersedia: spin, pulse, bounce, dan dots.",
      },
    },
  },
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center space-x-6">
      <div className="text-center">
        <Spinner size="xs" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">XS</p>
      </div>
      <div className="text-center">
        <Spinner size="sm" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">SM</p>
      </div>
      <div className="text-center">
        <Spinner size="md" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">MD</p>
      </div>
      <div className="text-center">
        <Spinner size="lg" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">LG</p>
      </div>
      <div className="text-center">
        <Spinner size="xl" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">XL</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran spinner yang tersedia dari XS hingga XL.",
      },
    },
  },
};

// In context examples
export const InButton: Story = {
  render: () => (
    <div className="space-y-4">
      <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
        <Spinner size="sm" color="white" className="mr-2" />
        Loading...
      </button>

      <button className="inline-flex items-center px-4 py-2 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50">
        <Spinner size="sm" color="current" className="mr-2" />
        Processing...
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Contoh penggunaan spinner di dalam button untuk menunjukkan loading state.",
      },
    },
  },
};

export const InCard: Story = {
  render: () => (
    <div className="max-w-sm mx-auto bg-white border border-secondary-200 rounded-lg p-6">
      <div className="text-center">
        <Spinner size="lg" color="primary" />
        <h3 className="mt-4 text-lg font-medium text-secondary-900">
          Loading Data
        </h3>
        <p className="mt-2 text-sm text-secondary-600">
          Please wait while we fetch your information...
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Contoh penggunaan spinner di dalam card untuk menunjukkan loading content.",
      },
    },
  },
};

// Speed comparison
export const SpeedComparison: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <div className="text-center">
        <Spinner speed="slow" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Slow</p>
      </div>
      <div className="text-center">
        <Spinner speed="normal" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Normal</p>
      </div>
      <div className="text-center">
        <Spinner speed="fast" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Fast</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Perbandingan kecepatan animasi spinner: slow, normal, dan fast.",
      },
    },
  },
};

// SpinnerOverlay examples
export const OverlayExample: Story = {
  render: () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => {
      setShowOverlay(true);
      setTimeout(() => setShowOverlay(false), 3000);
    };

    return (
      <div className="text-center">
        <button
          onClick={toggleOverlay}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Show Loading Overlay (3s)
        </button>

        <SpinnerOverlay
          show={showOverlay}
          text="Loading data..."
          opacity="medium"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh SpinnerOverlay untuk full-screen loading. Klik tombol untuk melihat overlay selama 3 detik.",
      },
    },
  },
};

export const OverlayVariants: Story = {
  render: () => {
    const [currentOverlay, setCurrentOverlay] = useState<string | null>(null);

    const showOverlay = (type: string) => {
      setCurrentOverlay(type);
      setTimeout(() => setCurrentOverlay(null), 2000);
    };

    return (
      <div className="space-y-3">
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => showOverlay("light")}
            className="px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            Light Overlay
          </button>
          <button
            onClick={() => showOverlay("medium")}
            className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Medium Overlay
          </button>
          <button
            onClick={() => showOverlay("dark")}
            className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Dark Overlay
          </button>
        </div>

        <SpinnerOverlay
          show={currentOverlay === "light"}
          text="Light overlay..."
          opacity="light"
        />

        <SpinnerOverlay
          show={currentOverlay === "medium"}
          text="Medium overlay..."
          opacity="medium"
        />

        <SpinnerOverlay
          show={currentOverlay === "dark"}
          text="Dark overlay..."
          opacity="dark"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Berbagai variant opacity untuk SpinnerOverlay: light, medium, dan dark.",
      },
    },
  },
};
