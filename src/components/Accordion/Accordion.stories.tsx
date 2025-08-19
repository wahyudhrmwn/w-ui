import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Accordion } from "./Accordion";

// Sample data
const basicItems = [
  {
    id: "item1",
    title: "What is React?",
    content: (
      <div>
        <p className="mb-2">
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook and is now maintained by Facebook and the
          community.
        </p>
        <p>
          React makes it painless to create interactive UIs with a
          component-based architecture.
        </p>
      </div>
    ),
  },
  {
    id: "item2",
    title: "How do you install React?",
    content: (
      <div>
        <p className="mb-2">You can install React in several ways:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Using Create React App:{" "}
            <code className="bg-secondary-100 px-2 py-1 rounded text-sm">
              npx create-react-app my-app
            </code>
          </li>
          <li>
            Using Vite:{" "}
            <code className="bg-secondary-100 px-2 py-1 rounded text-sm">
              npm create vite@latest my-app -- --template react
            </code>
          </li>
          <li>
            Adding to existing project:{" "}
            <code className="bg-secondary-100 px-2 py-1 rounded text-sm">
              npm install react react-dom
            </code>
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: "item3",
    title: "What are React Hooks?",
    content: (
      <div>
        <p className="mb-2">
          Hooks are functions that let you use state and other React features in
          functional components.
        </p>
        <p className="mb-2">Common hooks include:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>useState</strong> - for managing state
          </li>
          <li>
            <strong>useEffect</strong> - for side effects
          </li>
          <li>
            <strong>useContext</strong> - for consuming context
          </li>
          <li>
            <strong>useReducer</strong> - for complex state logic
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "item4",
    title: "Disabled Item",
    content: <p>This content won't be visible because the item is disabled.</p>,
    disabled: true,
  },
];

const featureItems = [
  {
    id: "features1",
    title: "🚀 Performance",
    content: (
      <div className="space-y-3">
        <p>Our application is built with performance in mind:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-1">Fast Loading</h4>
            <p className="text-green-700 text-sm">
              Optimized bundles and lazy loading for quick page loads.
            </p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-1">
              Smooth Interactions
            </h4>
            <p className="text-blue-700 text-sm">
              60fps animations and responsive user interface.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "features2",
    title: "🔒 Security",
    content: (
      <div className="space-y-3">
        <p>Security is our top priority with multiple layers of protection:</p>
        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium">End-to-end Encryption</h4>
              <p className="text-sm text-secondary-600">
                All data is encrypted in transit and at rest.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium">Multi-factor Authentication</h4>
              <p className="text-sm text-secondary-600">
                Additional security layers for account protection.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium">Regular Security Audits</h4>
              <p className="text-sm text-secondary-600">
                Third-party security assessments and vulnerability testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "features3",
    title: "🎨 Customization",
    content: (
      <div>
        <p className="mb-4">
          Customize the application to match your brand and workflow:
        </p>
        <div className="bg-secondary-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Available Themes</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center text-white text-xs font-medium">
              Ocean
            </div>
            <div className="h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center text-white text-xs font-medium">
              Sunset
            </div>
            <div className="h-16 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center text-white text-xs font-medium">
              Forest
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const pricingItems = [
  {
    id: "free",
    title: "Free Plan - $0/month",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <span className="text-green-800 font-medium">
            Perfect for individuals
          </span>
          <span className="text-2xl font-bold text-green-600">$0</span>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Up to 5 projects</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Basic templates</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Community support</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-red-500">✗</span>
            <span>Advanced analytics</span>
          </li>
        </ul>
        <button className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Get Started Free
        </button>
      </div>
    ),
  },
  {
    id: "pro",
    title: "Pro Plan - $19/month",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <span className="text-blue-800 font-medium">For growing teams</span>
          <span className="text-2xl font-bold text-blue-600">$19</span>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Unlimited projects</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Premium templates</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Priority support</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Advanced analytics</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Team collaboration</span>
          </li>
        </ul>
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Upgrade to Pro
        </button>
      </div>
    ),
  },
];

const meta = {
  title: "Layout/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Accordion untuk konten yang dapat diperluas dan dilipat. Mendukung mode eksklusif/multiple, berbagai ukuran, dan styling yang dapat dikustomisasi.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    exclusive: {
      control: "boolean",
      description: "Apakah hanya satu item yang bisa terbuka",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran accordion",
    },
    variant: {
      control: "select",
      options: ["default", "bordered", "filled"],
      description: "Variant styling",
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Posisi icon toggle",
    },
    items: {
      control: false,
      description: "Array data item accordion",
    },
    onChange: { action: "accordion-changed" },
  },
  args: {
    onChange: action("accordion-changed"),
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    defaultOpen: ["item1"],
  },
};

export const Exclusive: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    exclusive: true,
    defaultOpen: "item1",
  },
};

export const Multiple: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems,
    exclusive: false,
    defaultOpen: ["item1", "item2"],
  },
};

// Size variations
export const Small: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3),
    size: "sm",
    defaultOpen: ["item1"],
  },
};

export const Medium: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3),
    size: "md",
    defaultOpen: ["item1"],
  },
};

export const Large: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3),
    size: "lg",
    defaultOpen: ["item1"],
  },
};

// Variant styles
export const DefaultVariant: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3),
    variant: "default",
    defaultOpen: ["item1"],
  },
};

export const Bordered: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3),
    variant: "bordered",
    defaultOpen: ["item1"],
  },
};

export const Filled: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3),
    variant: "filled",
    defaultOpen: ["item1"],
  },
};

// Icon position
export const IconLeft: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3),
    iconPosition: "left",
    variant: "bordered",
    defaultOpen: ["item1"],
  },
};

// Custom icon
export const CustomIcon: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3),
    variant: "bordered",
    toggleIcon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    defaultOpen: ["item1"],
  },
};

// Rich content examples
export const FeatureList: Story = {
  render: () => (
    <div className="w-full max-w-3xl">
      <h3 className="text-xl font-semibold mb-6">Product Features</h3>
      <Accordion
        items={featureItems}
        variant="bordered"
        size="lg"
        defaultOpen={["features1"]}
        onChange={action("features-changed")}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Accordion dengan konten kaya untuk menampilkan fitur produk dengan card, icon, dan layout yang kompleks.",
      },
    },
  },
};

export const PricingFAQ: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <h3 className="text-xl font-semibold mb-6">Pricing Plans</h3>
      <Accordion
        items={pricingItems}
        variant="filled"
        exclusive={true}
        size="md"
        onChange={action("pricing-changed")}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Accordion mode eksklusif untuk pricing plans dengan button dan styling yang menarik.",
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [accordionSettings, setAccordionSettings] = useState({
      exclusive: false,
      size: "md" as const,
      variant: "bordered" as const,
      iconPosition: "right" as const,
    });

    const [openItems, setOpenItems] = useState<string[]>(["item1"]);

    const handleSettingChange = (
      key: keyof typeof accordionSettings,
      value: any
    ) => {
      setAccordionSettings((prev) => ({ ...prev, [key]: value }));
    };

    const handleAccordionChange = (items: string[]) => {
      setOpenItems(items);
      action("interactive-accordion-changed")(items);
    };

    return (
      <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold">Interactive Accordion Demo</h3>

        {/* Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">Mode:</label>
            <select
              value={accordionSettings.exclusive ? "exclusive" : "multiple"}
              onChange={(e) =>
                handleSettingChange("exclusive", e.target.value === "exclusive")
              }
              className="w-full p-2 border rounded text-sm"
            >
              <option value="multiple">Multiple</option>
              <option value="exclusive">Exclusive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select
              value={accordionSettings.size}
              onChange={(e) => handleSettingChange("size", e.target.value)}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Variant:</label>
            <select
              value={accordionSettings.variant}
              onChange={(e) => handleSettingChange("variant", e.target.value)}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="default">Default</option>
              <option value="bordered">Bordered</option>
              <option value="filled">Filled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Icon:</label>
            <select
              value={accordionSettings.iconPosition}
              onChange={(e) =>
                handleSettingChange("iconPosition", e.target.value)
              }
              className="w-full p-2 border rounded text-sm"
            >
              <option value="right">Right</option>
              <option value="left">Left</option>
            </select>
          </div>
        </div>

        {/* Status */}
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Open Items:</strong>{" "}
            {openItems.length === 0 ? "None" : openItems.join(", ")}
            {accordionSettings.exclusive &&
              openItems.length > 0 &&
              " (Exclusive Mode)"}
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          items={basicItems}
          exclusive={accordionSettings.exclusive}
          size={accordionSettings.size}
          variant={accordionSettings.variant}
          iconPosition={accordionSettings.iconPosition}
          defaultOpen={openItems}
          onChange={handleAccordionChange}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif dengan kontrol untuk mengubah pengaturan accordion secara real-time. Coba ubah mode, ukuran, variant, dan posisi icon!",
      },
    },
  },
};
