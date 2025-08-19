import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { ColorPicker } from "./ColorPicker";
import { Button } from "../Button";

const meta = {
  title: "Form Controls/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen ColorPicker untuk memilih warna dengan berbagai format output (hex, rgb, hsl). Dilengkapi dengan saturation/value picker, hue slider, preset colors, dan dukungan EyeDropper API untuk mengambil warna dari layar.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "color" },
      description: "Nilai warna saat ini (controlled)",
    },
    defaultValue: {
      control: { type: "color" },
      description: "Nilai default warna (uncontrolled)",
    },
    format: {
      control: { type: "select" },
      options: ["hex", "rgb", "hsl"],
      description: "Format output warna",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah disabled",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran color picker",
    },
    showInput: {
      control: { type: "boolean" },
      description: "Apakah menampilkan input text",
    },
    showEyeDropper: {
      control: { type: "boolean" },
      description: "Apakah menampilkan eyedropper button",
    },
    showAlpha: {
      control: { type: "boolean" },
      description: "Apakah menampilkan alpha/transparency",
    },
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "#3B82F6",
    format: "hex",
    size: "md",
    showInput: true,
    showEyeDropper: true,
    onChange: action("color-changed"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-6">
      <div className="text-center space-y-2">
        <div className="text-sm text-secondary-700">Small</div>
        <ColorPicker
          size="sm"
          defaultValue="#EF4444"
          onChange={action("small-color-changed")}
        />
      </div>

      <div className="text-center space-y-2">
        <div className="text-sm text-secondary-700">Medium (Default)</div>
        <ColorPicker
          size="md"
          defaultValue="#10B981"
          onChange={action("medium-color-changed")}
        />
      </div>

      <div className="text-center space-y-2">
        <div className="text-sm text-secondary-700">Large</div>
        <ColorPicker
          size="lg"
          defaultValue="#8B5CF6"
          onChange={action("large-color-changed")}
        />
      </div>
    </div>
  ),
};

export const Formats: Story = {
  render: () => {
    const [hexColor, setHexColor] = useState("#3B82F6");
    const [rgbColor, setRgbColor] = useState("rgb(59, 130, 246)");
    const [hslColor, setHslColor] = useState("hsl(217, 91%, 60%)");

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-secondary-700">
            HEX Format
          </label>
          <ColorPicker
            value={hexColor}
            onChange={(color) => {
              setHexColor(color);
              action("hex-color-changed")(color);
            }}
            format="hex"
            showInput
          />
          <div className="text-xs text-secondary-500">Output: {hexColor}</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-secondary-700">
            RGB Format
          </label>
          <ColorPicker
            value={rgbColor}
            onChange={(color) => {
              setRgbColor(color);
              action("rgb-color-changed")(color);
            }}
            format="rgb"
            showInput
          />
          <div className="text-xs text-secondary-500">Output: {rgbColor}</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-secondary-700">
            HSL Format
          </label>
          <ColorPicker
            value={hslColor}
            onChange={(color) => {
              setHslColor(color);
              action("hsl-color-changed")(color);
            }}
            format="hsl"
            showInput
          />
          <div className="text-xs text-secondary-500">Output: {hslColor}</div>
        </div>
      </div>
    );
  },
};

export const WithoutInput: Story = {
  args: {
    defaultValue: "#F59E0B",
    showInput: false,
    onChange: action("color-without-input-changed"),
  },
};

export const WithoutEyeDropper: Story = {
  args: {
    defaultValue: "#EC4899",
    showEyeDropper: false,
    onChange: action("color-without-eyedropper-changed"),
  },
};

export const CustomPresets: Story = {
  render: () => {
    const customPresets = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
      "#85C1E9",
      "#F8C471",
      "#82E0AA",
    ];

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Custom Color Palette
          </label>
          <ColorPicker
            defaultValue="#FF6B6B"
            presets={customPresets}
            onChange={action("custom-preset-changed")}
          />
        </div>

        <div className="text-sm text-secondary-500">
          This ColorPicker uses a custom set of preset colors instead of the
          default palette.
        </div>
      </div>
    );
  },
};

export const ControlledColorPicker: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState("#10B981");

    const predefinedColors = [
      { name: "Red", value: "#EF4444" },
      { name: "Green", value: "#10B981" },
      { name: "Blue", value: "#3B82F6" },
      { name: "Purple", value: "#8B5CF6" },
      { name: "Yellow", value: "#F59E0B" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Controlled Color Picker
          </label>
          <ColorPicker
            value={selectedColor}
            onChange={(color) => {
              setSelectedColor(color);
              action("controlled-color-changed")(color);
            }}
            format="hex"
          />
        </div>

        <div>
          <div className="text-sm font-medium text-secondary-700 mb-2">
            Quick Colors:
          </div>
          <div className="flex space-x-2">
            {predefinedColors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={clsx(
                  "px-3 py-1 text-sm rounded border transition-colors",
                  selectedColor === color.value
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-secondary-700 border-secondary-300 hover:border-secondary-400"
                )}
              >
                {color.name}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-secondary-50 rounded-lg">
          <div className="text-sm text-secondary-700">
            <strong>Selected Color:</strong> {selectedColor}
          </div>
          <div
            className="w-full h-8 mt-2 rounded border border-secondary-300"
            style={{ backgroundColor: selectedColor }}
          />
        </div>
      </div>
    );
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    defaultValue: "#6B7280",
    onChange: action("disabled-color-changed"),
  },
};

export const InForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      accentColor: "#3B82F6",
      borderColor: "#E5E7EB",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      action("form-submitted")(formData);
    };

    return (
      <div className="max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-secondary-200 rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Theme Customization
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Background Color
              </label>
              <ColorPicker
                value={formData.backgroundColor}
                onChange={(color) =>
                  setFormData({ ...formData, backgroundColor: color })
                }
                format="hex"
                size="sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Text Color
              </label>
              <ColorPicker
                value={formData.textColor}
                onChange={(color) =>
                  setFormData({ ...formData, textColor: color })
                }
                format="hex"
                size="sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Accent Color
              </label>
              <ColorPicker
                value={formData.accentColor}
                onChange={(color) =>
                  setFormData({ ...formData, accentColor: color })
                }
                format="hex"
                size="sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Border Color
              </label>
              <ColorPicker
                value={formData.borderColor}
                onChange={(color) =>
                  setFormData({ ...formData, borderColor: color })
                }
                format="hex"
                size="sm"
              />
            </div>
          </div>

          <div
            className="mt-6 p-4 rounded-lg border"
            style={{
              backgroundColor: formData.backgroundColor,
              color: formData.textColor,
              borderColor: formData.borderColor,
            }}
          >
            <div
              className="text-sm font-medium"
              style={{ color: formData.accentColor }}
            >
              Theme Preview
            </div>
            <div className="text-sm mt-1">
              This is how your theme will look with the selected colors.
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline" type="button">
              Reset
            </Button>
            <Button variant="primary" type="submit">
              Apply Theme
            </Button>
          </div>
        </form>
      </div>
    );
  },
};

export const EyeDropperDemo: Story = {
  render: () => {
    const [pickedColor, setPickedColor] = useState("#3B82F6");
    const supportsEyeDropper = "EyeDropper" in window;

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Color Picker with EyeDropper
          </label>
          <ColorPicker
            value={pickedColor}
            onChange={(color) => {
              setPickedColor(color);
              action("eyedropper-color-changed")(color);
            }}
            showEyeDropper={supportsEyeDropper}
          />
        </div>

        <div className="text-sm text-secondary-500">
          {supportsEyeDropper ? (
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>
                EyeDropper API is supported. Click the eyedropper icon to pick
                colors from your screen.
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>❌</span>
              <span>EyeDropper API is not supported in this browser.</span>
            </div>
          )}
        </div>

        <div className="p-4 bg-secondary-50 rounded-lg">
          <div className="text-sm text-secondary-700 mb-2">
            <strong>Picked Color:</strong> {pickedColor}
          </div>
          <div
            className="w-full h-12 rounded border border-secondary-300"
            style={{ backgroundColor: pickedColor }}
          />
        </div>
      </div>
    );
  },
};

export const ColorPalette: Story = {
  render: () => {
    const [palette, setPalette] = useState([
      "#EF4444",
      "#F97316",
      "#F59E0B",
      "#EAB308",
      "#84CC16",
      "#22C55E",
      "#10B981",
      "#14B8A6",
      "#06B6D4",
      "#0EA5E9",
      "#3B82F6",
      "#6366F1",
      "#8B5CF6",
      "#A855F7",
      "#D946EF",
      "#EC4899",
    ]);

    const updateColor = (index: number, color: string) => {
      const newPalette = [...palette];
      newPalette[index] = color;
      setPalette(newPalette);
      action("palette-updated")(newPalette);
    };

    const exportPalette = () => {
      const css = palette
        .map((color, index) => `--color-${index + 1}: ${color};`)
        .join("\n");
      action("palette-exported")(css);

      // Copy to clipboard
      navigator.clipboard?.writeText(css);
    };

    return (
      <div className="max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-secondary-900">
            Color Palette Builder
          </h3>
          <Button onClick={exportPalette} variant="outline" size="sm">
            Export CSS
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {palette.map((color, index) => (
            <div key={index} className="space-y-2">
              <div
                className="w-full h-16 rounded-lg border border-secondary-300"
                style={{ backgroundColor: color }}
              />
              <ColorPicker
                value={color}
                onChange={(newColor) => updateColor(index, newColor)}
                size="sm"
                showInput={false}
              />
              <div className="text-xs text-secondary-500 font-mono text-center">
                {color}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
          <div className="text-sm font-medium text-secondary-700 mb-2">
            CSS Variables:
          </div>
          <code className="text-xs text-secondary-600 whitespace-pre-wrap">
            {palette
              .map((color, index) => `--color-${index + 1}: ${color};`)
              .join("\n")}
          </code>
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    defaultValue: "#3B82F6",
    format: "hex",
    disabled: false,
    size: "md",
    showInput: true,
    showEyeDropper: true,
    showAlpha: false,
    onChange: action("playground-color-changed"),
  },
};
