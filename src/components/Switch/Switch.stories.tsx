import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Switch } from "./Switch";

const meta = {
  title: "Form Controls/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Switch untuk toggle on/off state. Alternatif yang lebih visual untuk checkbox dalam konteks pengaturan dan preferensi. Mendukung berbagai ukuran, warna, dan posisi label.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran switch",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      description: "Warna switch ketika aktif",
    },
    labelPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Posisi label relatif terhadap switch",
    },
    checked: {
      control: "boolean",
      description: "State aktif/tidak aktif",
    },
    disabled: {
      control: "boolean",
      description: "Disable switch",
    },
    label: {
      control: "text",
      description: "Label untuk switch",
    },
    helperText: {
      control: "text",
      description: "Helper text di bawah switch",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    onChange: { action: "changed" },
  },
  args: {
    onChange: action("changed"),
    label: "Enable notifications",
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("default-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("checked-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    label: "Enable notifications",
  },
};

export const WithoutLabel: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("no-label-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {},
};

export const Disabled: Story = {
  args: {
    label: "Disabled switch",
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked switch",
    disabled: true,
    checked: true,
  },
};

// Size variations
export const Small: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("small-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    size: "sm",
    label: "Small switch",
  },
};

export const Medium: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("medium-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    size: "md",
    label: "Medium switch",
  },
};

export const Large: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("large-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    size: "lg",
    label: "Large switch",
  },
};

// Color variations
export const Primary: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("primary-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    color: "primary",
    label: "Primary switch",
  },
};

export const Secondary: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("secondary-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    color: "secondary",
    label: "Secondary switch",
  },
};

export const Success: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("success-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    color: "success",
    label: "Success switch",
  },
};

export const Warning: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("warning-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    color: "warning",
    label: "Warning switch",
  },
};

export const Error: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("error-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    color: "error",
    label: "Error switch",
  },
};

// Label position
export const LabelLeft: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("label-left-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    label: "Label on left",
    labelPosition: "left",
  },
};

export const LabelRight: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("label-right-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    label: "Label on right",
    labelPosition: "right",
  },
};

// With helper text and error
export const WithHelperText: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("helper-text-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    label: "Enable notifications",
    helperText: "You will receive email notifications for important updates",
  },
};

export const WithError: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          action("error-changed")(e.target.checked);
        }}
      />
    );
  },
  args: {
    label: "Enable notifications",
    error: "This setting is required for your account type",
  },
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => {
    const [switches, setSwitches] = useState({
      small: false,
      medium: false,
      large: false,
    });

    const handleChange =
      (key: keyof typeof switches) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSwitches((prev) => ({
          ...prev,
          [key]: e.target.checked,
        }));
        action(`${key}-changed`)(e.target.checked);
      };

    return (
      <div className="flex flex-col gap-4">
        <Switch
          size="sm"
          label="Small switch"
          checked={switches.small}
          onChange={handleChange("small")}
        />
        <Switch
          size="md"
          label="Medium switch"
          checked={switches.medium}
          onChange={handleChange("medium")}
        />
        <Switch
          size="lg"
          label="Large switch"
          checked={switches.large}
          onChange={handleChange("large")}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Semua ukuran switch yang tersedia dari small hingga large. Klik untuk mencoba!",
      },
    },
  },
};

// Showcase all colors
export const AllColors: Story = {
  render: () => {
    const [switches, setSwitches] = useState({
      primary: true,
      secondary: true,
      success: true,
      warning: true,
      error: true,
    });

    const handleChange =
      (key: keyof typeof switches) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSwitches((prev) => ({
          ...prev,
          [key]: e.target.checked,
        }));
        action(`${key}-color-changed`)(e.target.checked);
      };

    return (
      <div className="flex flex-col gap-4">
        <Switch
          color="primary"
          label="Primary"
          checked={switches.primary}
          onChange={handleChange("primary")}
        />
        <Switch
          color="secondary"
          label="Secondary"
          checked={switches.secondary}
          onChange={handleChange("secondary")}
        />
        <Switch
          color="success"
          label="Success"
          checked={switches.success}
          onChange={handleChange("success")}
        />
        <Switch
          color="warning"
          label="Warning"
          checked={switches.warning}
          onChange={handleChange("warning")}
        />
        <Switch
          color="error"
          label="Error"
          checked={switches.error}
          onChange={handleChange("error")}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Semua warna switch yang tersedia. Klik untuk mencoba toggle dan melihat perbedaan warna!",
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      soundEffects: false,
    });

    const handleChange =
      (key: keyof typeof settings) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSettings((prev) => ({
          ...prev,
          [key]: e.target.checked,
        }));
        action(`${key}-changed`)(e.target.checked);
      };

    return (
      <div className="space-y-4 p-6 bg-secondary-50 rounded-lg">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          Settings
        </h3>

        <Switch
          label="Push Notifications"
          helperText="Receive notifications on your device"
          checked={settings.notifications}
          onChange={handleChange("notifications")}
        />

        <Switch
          label="Dark Mode"
          helperText="Use dark theme for better night reading"
          checked={settings.darkMode}
          onChange={handleChange("darkMode")}
          color="secondary"
        />

        <Switch
          label="Auto Save"
          helperText="Automatically save your work"
          checked={settings.autoSave}
          onChange={handleChange("autoSave")}
          color="success"
        />

        <Switch
          label="Sound Effects"
          helperText="Play sounds for actions and notifications"
          checked={settings.soundEffects}
          onChange={handleChange("soundEffects")}
          color="warning"
        />

        <div className="mt-6 p-4 bg-white rounded border">
          <h4 className="font-medium text-secondary-800 mb-2">
            Current Settings:
          </h4>
          <pre className="text-sm text-secondary-600">
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh interaktif penggunaan Switch dalam form pengaturan. Klik switch untuk melihat perubahan dan check Actions panel.",
      },
    },
  },
};

// Quick demo with toggle counter
export const ClickDemo: Story = {
  render: () => {
    const [isOn, setIsOn] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsOn(e.target.checked);
      setClickCount((prev) => prev + 1);
      action("demo-toggled")(e.target.checked);
    };

    return (
      <div className="p-6 bg-secondary-50 rounded-lg text-center">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          🎯 Coba Klik Switch Ini!
        </h3>

        <div className="mb-6">
          <Switch
            size="lg"
            label={`Switch is ${isOn ? "ON" : "OFF"}`}
            checked={isOn}
            onChange={handleToggle}
            color={isOn ? "success" : "secondary"}
          />
        </div>

        <div className="space-y-2 text-sm text-secondary-600">
          <p>
            Status:{" "}
            <span
              className={`font-bold ${
                isOn ? "text-green-600" : "text-red-600"
              }`}
            >
              {isOn ? "✅ AKTIF" : "❌ NONAKTIF"}
            </span>
          </p>
          <p>
            Total klik:{" "}
            <span className="font-bold text-blue-600">{clickCount}</span>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo sederhana untuk mencoba klik switch. Klik untuk toggle dan lihat perubahan status!",
      },
    },
  },
};

// Live playground demo
export const LivePlayground: Story = {
  render: () => {
    const [config, setConfig] = useState({
      size: "md" as const,
      color: "primary" as const,
      labelPosition: "right" as const,
      checked: false,
      disabled: false,
      hasHelperText: false,
      hasError: false,
    });

    const handleConfigChange = (key: keyof typeof config, value: any) => {
      setConfig((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfig((prev) => ({
        ...prev,
        checked: e.target.checked,
      }));
      action("playground-changed")(e.target.checked);
    };

    return (
      <div className="space-y-6 p-6 bg-secondary-50 rounded-lg">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          Interactive Switch Playground
        </h3>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded border">
          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select
              value={config.size}
              onChange={(e) => handleConfigChange("size", e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Color:</label>
            <select
              value={config.color}
              onChange={(e) => handleConfigChange("color", e.target.value)}
              className="w-full p-2 border rounded"
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
              Label Position:
            </label>
            <select
              value={config.labelPosition}
              onChange={(e) =>
                handleConfigChange("labelPosition", e.target.value)
              }
              className="w-full p-2 border rounded"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.disabled}
                onChange={(e) =>
                  handleConfigChange("disabled", e.target.checked)
                }
                className="mr-2"
              />
              Disabled
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.hasHelperText}
                onChange={(e) =>
                  handleConfigChange("hasHelperText", e.target.checked)
                }
                className="mr-2"
              />
              Helper Text
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.hasError}
                onChange={(e) =>
                  handleConfigChange("hasError", e.target.checked)
                }
                className="mr-2"
              />
              Error State
            </label>
          </div>
        </div>

        {/* Preview */}
        <div className="p-6 bg-white rounded border">
          <h4 className="font-medium mb-4">Preview:</h4>
          <Switch
            size={config.size}
            color={config.color}
            labelPosition={config.labelPosition}
            label="Interactive Switch"
            checked={config.checked}
            disabled={config.disabled}
            helperText={
              config.hasHelperText ? "This is a helper text" : undefined
            }
            error={config.hasError ? "This is an error message" : undefined}
            onChange={handleSwitchChange}
          />
        </div>

        {/* Code preview */}
        <div className="p-4 bg-gray-900 rounded text-green-400 font-mono text-sm overflow-auto">
          <div className="text-gray-400 mb-2">// Generated code:</div>
          <div>{`<Switch`}</div>
          <div>{`  size="${config.size}"`}</div>
          <div>{`  color="${config.color}"`}</div>
          <div>{`  labelPosition="${config.labelPosition}"`}</div>
          <div>{`  label="Interactive Switch"`}</div>
          <div>{`  checked={${config.checked}}`}</div>
          {config.disabled && <div>{`  disabled={true}`}</div>}
          {config.hasHelperText && (
            <div>{`  helperText="This is a helper text"`}</div>
          )}
          {config.hasError && <div>{`  error="This is an error message"`}</div>}
          <div>{`  onChange={handleChange}`}</div>
          <div>{`/>`}</div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Playground interaktif untuk mencoba berbagai konfigurasi Switch. Ubah settings dan lihat hasilnya secara real-time!",
      },
    },
  },
};
