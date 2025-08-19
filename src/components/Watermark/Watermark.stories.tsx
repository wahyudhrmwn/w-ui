import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import clsx from "clsx";
import { Watermark } from "./Watermark";

const meta = {
  title: "Layout/Watermark",
  component: Watermark,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Watermark untuk menambahkan watermark pada content sebagai background pattern. Mendukung text dan image watermark dengan berbagai kustomisasi styling, positioning, dan opacity. Berguna untuk branding, copyright protection, atau status indicators.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "Text content untuk watermark",
    },
    image: {
      control: { type: "text" },
      description: "URL gambar untuk watermark",
    },
    rotate: {
      control: { type: "number", min: -180, max: 180 },
      description: "Rotasi watermark (derajat)",
    },
    opacity: {
      control: { type: "number", min: 0, max: 1, step: 0.1 },
      description: "Opacity watermark",
    },
    fontSize: {
      control: { type: "number", min: 8, max: 48 },
      description: "Ukuran font text watermark",
    },
    fontColor: {
      control: { type: "color" },
      description: "Warna font text watermark",
    },
  },
} satisfies Meta<typeof Watermark>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content component
const SampleContent: React.FC<{ height?: string }> = ({ height = "h-96" }) => (
  <div className={clsx("bg-white p-8 rounded-lg shadow-sm", height)}>
    <h2 className="text-2xl font-bold text-secondary-900 mb-4">
      Sample Document
    </h2>
    <div className="space-y-4 text-secondary-700">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-blue-50 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">Feature 1</h3>
          <p className="text-blue-700 text-sm">
            This is a sample feature description.
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded">
          <h3 className="font-semibold text-green-900 mb-2">Feature 2</h3>
          <p className="text-green-700 text-sm">
            Another sample feature description.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <Watermark content="CONFIDENTIAL">
      <SampleContent />
    </Watermark>
  ),
};

export const CustomText: Story = {
  render: () => (
    <Watermark content="My Company © 2024">
      <SampleContent />
    </Watermark>
  ),
};

export const MultilineText: Story = {
  render: () => (
    <Watermark content={["DRAFT", "DO NOT DISTRIBUTE"]}>
      <SampleContent />
    </Watermark>
  ),
};

export const DifferentOpacity: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Low Opacity (0.1)</h3>
        <Watermark content="WATERMARK" opacity={0.1}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Medium Opacity (0.3)</h3>
        <Watermark content="WATERMARK" opacity={0.3}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">High Opacity (0.6)</h3>
        <Watermark content="WATERMARK" opacity={0.6}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
  ),
};

export const DifferentRotations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">No Rotation (0°)</h3>
        <Watermark content="HORIZONTAL" rotate={0}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Default Rotation (-20°)</h3>
        <Watermark content="DIAGONAL" rotate={-20}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Vertical Rotation (-90°)</h3>
        <Watermark content="VERTICAL" rotate={-90}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Small Font (12px)</h3>
        <Watermark content="Small Watermark" fontSize={12}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Medium Font (16px - Default)
        </h3>
        <Watermark content="Medium Watermark" fontSize={16}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Large Font (24px)</h3>
        <Watermark content="Large Watermark" fontSize={24}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Red Watermark</h3>
        <Watermark content="URGENT" fontColor="rgba(239, 68, 68, 0.3)">
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Blue Watermark</h3>
        <Watermark content="INTERNAL USE" fontColor="rgba(59, 130, 246, 0.25)">
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Green Watermark</h3>
        <Watermark content="APPROVED" fontColor="rgba(34, 197, 94, 0.3)">
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
  ),
};

export const CustomSpacing: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Dense Pattern (small gap)
        </h3>
        <Watermark content="DENSE" gap={[60, 60]}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Sparse Pattern (large gap)
        </h3>
        <Watermark content="SPARSE" gap={[200, 200]}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Custom Offset</h3>
        <Watermark content="OFFSET" offset={[100, 50]}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
  ),
};

export const FontStyles: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Bold Font</h3>
        <Watermark content="BOLD TEXT" fontWeight="bold">
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Italic Font</h3>
        <Watermark content="Italic Text" fontStyle="italic">
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Custom Font Family</h3>
        <Watermark content="Monospace Text" fontFamily="monospace">
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
  ),
};

export const ImageWatermark: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">SVG Logo Watermark</h3>
        <Watermark
          image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMikiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjYpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgo8cGF0aCBkPSJNMTIgMkw2IDhIMTBWMTZIMTRWOEgxOEwxMiAyWiIvPgo8L3N2Zz4KPC9zdmc+"
          gap={[150, 150]}
          opacity={0.8}
        >
          <SampleContent />
        </Watermark>
      </div>
    </div>
  ),
};

export const StatusWatermarks: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Draft Document</h3>
        <Watermark
          content={["DRAFT", new Date().toLocaleDateString()]}
          fontColor="rgba(234, 179, 8, 0.3)"
          rotate={-45}
        >
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Confidential</h3>
        <Watermark
          content="CONFIDENTIAL"
          fontColor="rgba(239, 68, 68, 0.4)"
          fontWeight="bold"
          fontSize={18}
        >
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Sample/Preview</h3>
        <Watermark
          content={["SAMPLE", "NOT FOR PRODUCTION"]}
          fontColor="rgba(107, 114, 128, 0.3)"
          rotate={0}
          gap={[120, 120]}
        >
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
  ),
};

export const InteractiveContent: Story = {
  render: () => {
    const [text, setText] = useState("WATERMARK");
    const [opacity, setOpacity] = useState(0.15);
    const [rotation, setRotation] = useState(-20);
    const [fontSize, setFontSize] = useState(16);
    const [color, setColor] = useState("#000000");

    return (
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border space-y-4">
          <h3 className="text-lg font-semibold">Watermark Controls</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Opacity: {opacity}
              </label>
              <input
                type="range"
                min="0.05"
                max="0.8"
                step="0.05"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Rotation: {rotation}°
              </label>
              <input
                type="range"
                min="-90"
                max="90"
                step="5"
                value={rotation}
                onChange={(e) => setRotation(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Font Size: {fontSize}px
              </label>
              <input
                type="range"
                min="12"
                max="32"
                step="2"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-9 border border-secondary-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <Watermark
          content={text}
          opacity={opacity}
          rotate={rotation}
          fontSize={fontSize}
          fontColor={`${color}${Math.round(opacity * 255)
            .toString(16)
            .padStart(2, "0")}`}
        >
          <SampleContent />
        </Watermark>
      </div>
    );
  },
};

export const LargeDocument: Story = {
  render: () => (
    <Watermark content={["CONFIDENTIAL", "© 2024 My Company"]}>
      <div className="space-y-8">
        <SampleContent />
        <SampleContent />
        <SampleContent />
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Data Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-secondary-300">
              <thead className="bg-secondary-50">
                <tr>
                  <th className="border border-secondary-300 px-4 py-2 text-left">
                    Name
                  </th>
                  <th className="border border-secondary-300 px-4 py-2 text-left">
                    Email
                  </th>
                  <th className="border border-secondary-300 px-4 py-2 text-left">
                    Role
                  </th>
                  <th className="border border-secondary-300 px-4 py-2 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }, (_, i) => (
                  <tr key={i} className="hover:bg-secondary-50">
                    <td className="border border-secondary-300 px-4 py-2">
                      User {i + 1}
                    </td>
                    <td className="border border-secondary-300 px-4 py-2">
                      user{i + 1}@example.com
                    </td>
                    <td className="border border-secondary-300 px-4 py-2">
                      {i % 3 === 0 ? "Admin" : "User"}
                    </td>
                    <td className="border border-secondary-300 px-4 py-2">
                      <span
                        className={clsx(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          i % 2 === 0
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        )}
                      >
                        {i % 2 === 0 ? "Active" : "Pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Watermark>
  ),
};
