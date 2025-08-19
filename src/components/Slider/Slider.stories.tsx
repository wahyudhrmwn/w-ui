import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { Slider } from "./Slider";

const meta = {
  title: "Form Controls/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Slider untuk input range dengan support untuk single value dan range (multiple values). Mendukung berbagai ukuran, warna, orientasi, marks, tooltip, dan keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    min: {
      control: { type: "number" },
      description: "Nilai minimum",
    },
    max: {
      control: { type: "number" },
      description: "Nilai maksimum",
    },
    step: {
      control: { type: "number", min: 0.1, step: 0.1 },
      description: "Step increment",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran slider",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      description: "Warna slider",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientasi slider",
    },
    showTooltip: {
      control: "boolean",
      description: "Tampilkan tooltip value",
    },
    showMarks: {
      control: "boolean",
      description: "Tampilkan marks",
    },
    disabled: {
      control: "boolean",
      description: "Disable slider",
    },
    label: {
      control: "text",
      description: "Label slider",
    },
    helperText: {
      control: "text",
      description: "Helper text",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    onChange: { action: "slider-changed" },
  },
  args: {
    onChange: action("slider-changed"),
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(50);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    label: "Volume",
  },
};

export const WithTooltip: Story = {
  render: (args) => {
    const [value, setValue] = useState(75);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("tooltip-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    label: "Brightness",
    showTooltip: true,
    formatValue: (value) => `${value}%`,
  },
};

export const WithMarks: Story = {
  render: (args) => {
    const [value, setValue] = useState(50);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("marks-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    step: 25,
    label: "Quality",
    showMarks: true,
  },
};

// Range slider
export const Range: Story = {
  render: (args) => {
    const [value, setValue] = useState([20, 80]);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number[]);
            action("range-slider-changed")(newValue);
          }}
        />
        <div className="mt-2 text-sm text-secondary-600">
          Range: {value[0]} - {value[1]}
        </div>
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    label: "Price Range",
    showTooltip: true,
    formatValue: (value) => `$${value}`,
  },
};

// Size variations
export const Small: Story = {
  render: (args) => {
    const [value, setValue] = useState(30);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("small-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    size: "sm",
    label: "Small Slider",
  },
};

export const Medium: Story = {
  render: (args) => {
    const [value, setValue] = useState(50);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("medium-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    size: "md",
    label: "Medium Slider",
  },
};

export const Large: Story = {
  render: (args) => {
    const [value, setValue] = useState(70);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("large-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    size: "lg",
    label: "Large Slider",
  },
};

// Color variations
export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState(60);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("primary-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    color: "primary",
    label: "Primary Color",
  },
};

export const Success: Story = {
  render: (args) => {
    const [value, setValue] = useState(80);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("success-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    color: "success",
    label: "Success Color",
  },
};

export const Warning: Story = {
  render: (args) => {
    const [value, setValue] = useState(40);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("warning-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    color: "warning",
    label: "Warning Color",
  },
};

export const Error: Story = {
  render: (args) => {
    const [value, setValue] = useState(25);

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("error-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    color: "error",
    label: "Error Color",
    error: "Value is too low!",
  },
};

// Custom marks
export const CustomMarks: Story = {
  render: (args) => {
    const [value, setValue] = useState(2);

    const marks = [
      { value: 1, label: "Slow" },
      { value: 2, label: "Normal" },
      { value: 3, label: "Fast" },
      { value: 4, label: "Very Fast" },
    ];

    return (
      <div className="w-80 p-4">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("custom-marks-changed")(newValue);
          }}
          marks={marks}
        />
      </div>
    );
  },
  args: {
    min: 1,
    max: 4,
    step: 1,
    label: "Speed Settings",
    showTooltip: true,
    formatValue: (value) => {
      const labels = ["", "Slow", "Normal", "Fast", "Very Fast"];
      return labels[value] || value.toString();
    },
  },
};

// Vertical slider
export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState(60);

    return (
      <div className="flex items-center justify-center p-8">
        <Slider
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue as number);
            action("vertical-slider-changed")(newValue);
          }}
        />
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    orientation: "vertical",
    label: "Vertical Slider",
    showTooltip: true,
  },
};

// Disabled state
export const Disabled: Story = {
  render: (args) => (
    <div className="w-80 p-4">
      <Slider {...args} />
    </div>
  ),
  args: {
    value: 50,
    min: 0,
    max: 100,
    disabled: true,
    label: "Disabled Slider",
    helperText: "This slider is disabled",
    onChange: action("disabled-slider-changed"),
  },
};

// Real-world examples
export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState(65);
    const [isMuted, setIsMuted] = useState(false);

    const effectiveVolume = isMuted ? 0 : volume;

    return (
      <div className="w-80 p-4 bg-white rounded-lg border border-secondary-200">
        <div className="flex items-center space-x-3 mb-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded"
          >
            {isMuted ? (
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
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
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
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>
          <div className="flex-1">
            <Slider
              value={effectiveVolume}
              onChange={(newValue) => {
                setVolume(newValue as number);
                if (isMuted && newValue > 0) {
                  setIsMuted(false);
                }
                action("volume-changed")(newValue);
              }}
              min={0}
              max={100}
              color="primary"
              showTooltip
              formatValue={(value) => `${Math.round(value)}%`}
            />
          </div>
          <span className="text-sm text-secondary-600 w-10 text-right">
            {Math.round(effectiveVolume)}%
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh implementasi volume control dengan tombol mute dan tooltip.",
      },
    },
  },
};

export const PriceRange: Story = {
  render: () => {
    const [priceRange, setPriceRange] = useState([250, 750]);

    return (
      <div className="w-80 p-4 bg-white rounded-lg border border-secondary-200">
        <h4 className="font-medium text-secondary-900 mb-4">Price Filter</h4>
        <Slider
          value={priceRange}
          onChange={(newValue) => {
            setPriceRange(newValue as number[]);
            action("price-range-changed")(newValue);
          }}
          min={0}
          max={1000}
          step={10}
          color="success"
          showTooltip
          formatValue={(value) => `$${value}`}
        />
        <div className="flex justify-between mt-3 text-sm text-secondary-600">
          <span>Min: ${priceRange[0]}</span>
          <span>Max: ${priceRange[1]}</span>
        </div>
        <button className="w-full mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
          Apply Filter
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh implementasi price range filter untuk e-commerce.",
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      size: "md" as const,
      color: "primary" as const,
      orientation: "horizontal" as const,
      showTooltip: true,
      showMarks: false,
      disabled: false,
      isRange: false,
      min: 0,
      max: 100,
      step: 1,
    });

    const [singleValue, setSingleValue] = useState(50);
    const [rangeValue, setRangeValue] = useState([25, 75]);

    const handleSettingChange = (key: keyof typeof settings, value: any) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    };

    const handleValueChange = (newValue: number | number[]) => {
      if (settings.isRange) {
        setRangeValue(newValue as number[]);
      } else {
        setSingleValue(newValue as number);
      }
      action("interactive-slider-changed")(newValue);
    };

    return (
      <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold">Interactive Slider Demo</h3>

        {/* Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select
              value={settings.size}
              onChange={(e) => handleSettingChange("size", e.target.value)}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Color:</label>
            <select
              value={settings.color}
              onChange={(e) => handleSettingChange("color", e.target.value)}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Orientation:
            </label>
            <select
              value={settings.orientation}
              onChange={(e) =>
                handleSettingChange("orientation", e.target.value)
              }
              className="w-full p-2 border rounded text-sm"
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Step:</label>
            <select
              value={settings.step}
              onChange={(e) =>
                handleSettingChange("step", parseInt(e.target.value))
              }
              className="w-full p-2 border rounded text-sm"
            >
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={settings.showTooltip}
                onChange={(e) =>
                  handleSettingChange("showTooltip", e.target.checked)
                }
                className="mr-2"
              />
              Show Tooltip
            </label>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={settings.showMarks}
                onChange={(e) =>
                  handleSettingChange("showMarks", e.target.checked)
                }
                className="mr-2"
              />
              Show Marks
            </label>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={settings.isRange}
                onChange={(e) =>
                  handleSettingChange("isRange", e.target.checked)
                }
                className="mr-2"
              />
              Range Mode
            </label>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={settings.disabled}
                onChange={(e) =>
                  handleSettingChange("disabled", e.target.checked)
                }
                className="mr-2"
              />
              Disabled
            </label>
          </div>
        </div>

        {/* Value display */}
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Current Value:</strong>{" "}
            {settings.isRange
              ? `${rangeValue[0]} - ${rangeValue[1]}`
              : singleValue}{" "}
            •<strong> Mode:</strong> {settings.isRange ? "Range" : "Single"} •
            <strong> State:</strong>{" "}
            {settings.disabled ? "Disabled" : "Enabled"}
          </p>
        </div>

        {/* Slider */}
        <div
          className={clsx(
            "flex justify-center p-6 bg-white rounded-lg border border-secondary-200",
            settings.orientation === "vertical" ? "h-64" : "h-auto"
          )}
        >
          <div
            className={settings.orientation === "vertical" ? "h-full" : "w-80"}
          >
            <Slider
              value={settings.isRange ? rangeValue : singleValue}
              onChange={handleValueChange}
              min={settings.min}
              max={settings.max}
              step={settings.step}
              size={settings.size}
              color={settings.color}
              orientation={settings.orientation}
              showTooltip={settings.showTooltip}
              showMarks={settings.showMarks}
              disabled={settings.disabled}
              label="Interactive Slider"
              formatValue={(value) => `${value}${settings.isRange ? "" : "%"}`}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif untuk mencoba semua pengaturan slider. Ubah ukuran, warna, orientasi, mode range, dan lihat hasilnya!",
      },
    },
  },
};
