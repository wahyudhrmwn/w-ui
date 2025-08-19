import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { TimePicker } from "./TimePicker";

const meta = {
  title: "Form Controls/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen TimePicker untuk memilih waktu dengan presisi tinggi. Mendukung format 12/24 jam, step interval yang dapat dikustomisasi, validasi waktu, dan berbagai opsi konfigurasi untuk kebutuhan input waktu yang beragam.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah disabled",
    },
    allowClear: {
      control: { type: "boolean" },
      description: "Apakah menampilkan tombol clear",
    },
    autoFocus: {
      control: { type: "boolean" },
      description: "Apakah auto focus saat mount",
    },
    format: {
      control: { type: "select" },
      options: ["HH:mm", "HH:mm:ss", "hh:mm A", "hh:mm:ss A"],
      description: "Format tampilan waktu",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran time picker",
    },
    status: {
      control: { type: "select" },
      options: [undefined, "error", "warning"],
      description: "Status validation",
    },
    showNow: {
      control: { type: "boolean" },
      description: "Apakah menampilkan tombol Now",
    },
    use12Hours: {
      control: { type: "boolean" },
      description: "Apakah menggunakan format 12 jam",
    },
    inputReadOnly: {
      control: { type: "boolean" },
      description: "Apakah input read-only",
    },
    hourStep: {
      control: { type: "number", min: 1, max: 12 },
      description: "Step interval untuk jam",
    },
    minuteStep: {
      control: { type: "number", min: 1, max: 30 },
      description: "Step interval untuk menit",
    },
    secondStep: {
      control: { type: "number", min: 1, max: 30 },
      description: "Step interval untuk detik",
    },
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: action("time-changed"),
    onSelect: action("time-selected"),
    onOpenChange: action("open-changed"),
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "14:30:00",
    onChange: action("time-changed"),
    onSelect: action("time-selected"),
  },
};

export const Format12Hours: Story = {
  args: {
    use12Hours: true,
    defaultValue: "02:30:45 PM",
    onChange: action("12h-time-changed"),
    onSelect: action("12h-time-selected"),
  },
};

export const HourMinuteOnly: Story = {
  args: {
    format: "HH:mm",
    defaultValue: "09:15",
    onChange: action("hm-time-changed"),
    onSelect: action("hm-time-selected"),
  },
};

export const WithSteps: Story = {
  args: {
    hourStep: 2,
    minuteStep: 15,
    secondStep: 10,
    defaultValue: "10:30:20",
    onChange: action("step-time-changed"),
    onSelect: action("step-time-selected"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Small</label>
        <TimePicker
          size="sm"
          placeholder="Small time picker"
          onChange={action("small-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Medium (Default)
        </label>
        <TimePicker
          size="md"
          placeholder="Medium time picker"
          onChange={action("medium-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large</label>
        <TimePicker
          size="lg"
          placeholder="Large time picker"
          onChange={action("large-changed")}
        />
      </div>
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Normal</label>
        <TimePicker
          placeholder="Normal state"
          onChange={action("normal-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-yellow-700">
          Warning
        </label>
        <TimePicker
          status="warning"
          defaultValue="23:59:59"
          placeholder="Warning state"
          onChange={action("warning-changed")}
        />
        <p className="text-xs text-yellow-600 mt-1">Late time detected</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-red-700">
          Error
        </label>
        <TimePicker
          status="error"
          placeholder="Error state"
          onChange={action("error-changed")}
        />
        <p className="text-xs text-red-600 mt-1">Invalid time format</p>
      </div>
    </div>
  ),
};

export const WithDisabledTimes: Story = {
  render: () => {
    const disabledHours = () => {
      // Disable night hours (22-06)
      return [22, 23, 0, 1, 2, 3, 4, 5, 6];
    };

    const disabledMinutes = (hour: number) => {
      // Disable odd minutes during lunch hours
      if (hour >= 12 && hour <= 13) {
        return Array.from({ length: 30 }, (_, i) => i * 2 + 1);
      }
      return [];
    };

    const disabledSeconds = (hour: number, minute: number) => {
      // Disable seconds ending with 0 during specific times
      if (hour === 9 && minute === 30) {
        return [0, 10, 20, 30, 40, 50];
      }
      return [];
    };

    return (
      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Night hours (22:00-06:59) are disabled. Odd minutes disabled during
          lunch (12:00-13:59). Some seconds disabled at 09:30.
        </p>
        <TimePicker
          defaultValue="09:30:15"
          disabledHours={disabledHours}
          disabledMinutes={disabledMinutes}
          disabledSeconds={disabledSeconds}
          onChange={action("disabled-time-changed")}
        />
      </div>
    );
  },
};

export const ReadOnlyInput: Story = {
  args: {
    inputReadOnly: true,
    defaultValue: "15:45:30",
    placeholder: "Click to select time",
    onChange: action("readonly-changed"),
  },
};

export const CustomIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">
          Custom Suffix Icon
        </label>
        <TimePicker
          suffixIcon={
            <svg
              className="w-4 h-4 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          onChange={action("custom-icon-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Custom Clear Icon
        </label>
        <TimePicker
          defaultValue="10:15:30"
          clearIcon={
            <svg
              className="w-4 h-4 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          }
          onChange={action("custom-clear-changed")}
        />
      </div>
    </div>
  ),
};

export const ControlledTimePicker: Story = {
  render: () => {
    const [time, setTime] = useState("09:30:45");
    const [format, setFormat] = useState<
      "HH:mm" | "HH:mm:ss" | "hh:mm A" | "hh:mm:ss A"
    >("HH:mm:ss");
    const [use12Hours, setUse12Hours] = useState(false);

    const handleFormatChange = (newFormat: typeof format) => {
      setFormat(newFormat);
      setUse12Hours(newFormat.includes("A"));
    };

    return (
      <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">
            Controlled TimePicker
          </label>
          <TimePicker
            value={time}
            format={format}
            use12Hours={use12Hours}
            onChange={(newTime, timeValue) => {
              setTime(newTime);
              action("controlled-changed")({ newTime, timeValue });
            }}
            onSelect={(selectedTime, timeValue) => {
              setTime(selectedTime);
              action("controlled-selected")({ selectedTime, timeValue });
            }}
          />
        </div>

        <div className="text-sm text-secondary-600 space-y-1">
          <div>
            <span className="font-medium">Current Time:</span> {time}
          </div>
          <div>
            <span className="font-medium">Format:</span> {format}
          </div>
          <div>
            <span className="font-medium">12 Hours:</span>{" "}
            {use12Hours ? "Yes" : "No"}
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <label className="block text-xs font-medium mb-1">
              Format Options
            </label>
            <div className="flex flex-wrap gap-1">
              {(["HH:mm", "HH:mm:ss", "hh:mm A", "hh:mm:ss A"] as const).map(
                (fmt) => (
                  <button
                    key={fmt}
                    onClick={() => handleFormatChange(fmt)}
                    className={clsx(
                      "px-2 py-1 text-xs rounded border transition-colors",
                      format === fmt
                        ? "bg-primary-100 text-primary-700 border-primary-300"
                        : "bg-secondary-100 text-secondary-700 border-secondary-300 hover:bg-secondary-200"
                    )}
                  >
                    {fmt}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setTime("08:00:00")}
              className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
            >
              Morning
            </button>
            <button
              onClick={() => setTime("12:30:00")}
              className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
            >
              Lunch
            </button>
            <button
              onClick={() => setTime("18:45:00")}
              className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded hover:bg-orange-200"
            >
              Evening
            </button>
            <button
              onClick={() => setTime("")}
              className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  },
};

export const MeetingTimePicker: Story = {
  render: () => {
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("10:00");

    const disabledEndHours = () => {
      if (!startTime) return [];
      const [startHour] = startTime.split(":").map(Number);
      return Array.from({ length: startHour }, (_, i) => i);
    };

    const disabledEndMinutes = (hour: number) => {
      if (!startTime) return [];
      const [startHour, startMinute] = startTime.split(":").map(Number);
      if (hour === startHour) {
        return Array.from({ length: startMinute }, (_, i) => i);
      }
      return [];
    };

    return (
      <div className="space-y-4 w-80">
        <h3 className="text-lg font-semibold">Schedule Meeting</h3>

        <div>
          <label className="block text-sm font-medium mb-1">Start Time</label>
          <TimePicker
            value={startTime}
            format="HH:mm"
            onChange={(time) => {
              setStartTime(time);
              action("start-time-changed")(time);
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">End Time</label>
          <TimePicker
            value={endTime}
            format="HH:mm"
            disabledHours={disabledEndHours}
            disabledMinutes={disabledEndMinutes}
            onChange={(time) => {
              setEndTime(time);
              action("end-time-changed")(time);
            }}
          />
          <p className="text-xs text-secondary-500 mt-1">
            End time must be after start time
          </p>
        </div>

        <div className="p-3 bg-secondary-50 rounded">
          <div className="text-sm">
            <div>
              <span className="font-medium">Meeting Duration:</span>
            </div>
            <div className="text-secondary-600">
              {startTime &&
                endTime &&
                (() => {
                  const [startH, startM] = startTime.split(":").map(Number);
                  const [endH, endM] = endTime.split(":").map(Number);
                  const diffMinutes = endH * 60 + endM - (startH * 60 + startM);
                  const hours = Math.floor(diffMinutes / 60);
                  const minutes = diffMinutes % 60;
                  return diffMinutes > 0
                    ? `${hours}h ${minutes}m`
                    : "Invalid time range";
                })()}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const HideDisabledOptions: Story = {
  render: () => {
    const businessHours = () => {
      // Only show business hours (9-17)
      return Array.from({ length: 24 }, (_, i) => i).filter(
        (h) => h < 9 || h > 17
      );
    };

    return (
      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Only business hours (09:00-17:59) are shown in this time picker.
        </p>
        <TimePicker
          hideDisabledOptions
          disabledHours={businessHours}
          minuteStep={15}
          onChange={action("business-time-changed")}
        />
      </div>
    );
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    defaultValue: "14:30:45",
    placeholder: "Disabled time picker",
  },
};

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    placeholder: "Auto focused on mount",
    onChange: action("autofocus-changed"),
  },
};
