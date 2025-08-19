import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { DatePicker } from "./DatePicker";

const meta = {
  title: "Form Controls/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen DatePicker untuk input tanggal yang user-friendly. Mendukung berbagai format, validasi tanggal, dan navigasi calendar yang intuitif. Dilengkapi dengan fitur seperti disabled dates, min/max dates, dan custom formatting.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "date" },
      description: "Nilai tanggal saat ini (controlled)",
    },
    defaultValue: {
      control: { type: "date" },
      description: "Nilai default tanggal (uncontrolled)",
    },
    format: {
      control: { type: "select" },
      options: ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"],
      description: "Format tanggal yang ditampilkan",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah disabled",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran input",
    },
    allowClear: {
      control: { type: "boolean" },
      description: "Apakah menampilkan tombol clear",
    },
    showToday: {
      control: { type: "boolean" },
      description: "Apakah menampilkan today button",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Select date",
    format: "MM/DD/YYYY",
    allowClear: true,
    showToday: true,
    onChange: action("date-changed"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Small Size
        </label>
        <DatePicker
          size="sm"
          placeholder="Select date"
          onChange={action("small-date-changed")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Medium Size (Default)
        </label>
        <DatePicker
          size="md"
          placeholder="Select date"
          onChange={action("medium-date-changed")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Large Size
        </label>
        <DatePicker
          size="lg"
          placeholder="Select date"
          onChange={action("large-date-changed")}
        />
      </div>
    </div>
  ),
};

export const Formats: Story = {
  render: () => {
    const [date1, setDate1] = useState<Date | null>(new Date());
    const [date2, setDate2] = useState<Date | null>(new Date());
    const [date3, setDate3] = useState<Date | null>(new Date());

    return (
      <div className="space-y-6 w-80">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            US Format (MM/DD/YYYY)
          </label>
          <DatePicker
            value={date1}
            onChange={(date) => {
              setDate1(date);
              action("us-format-changed")(date);
            }}
            format="MM/DD/YYYY"
            placeholder="MM/DD/YYYY"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            European Format (DD/MM/YYYY)
          </label>
          <DatePicker
            value={date2}
            onChange={(date) => {
              setDate2(date);
              action("eu-format-changed")(date);
            }}
            format="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            ISO Format (YYYY-MM-DD)
          </label>
          <DatePicker
            value={date3}
            onChange={(date) => {
              setDate3(date);
              action("iso-format-changed")(date);
            }}
            format="YYYY-MM-DD"
            placeholder="YYYY-MM-DD"
          />
        </div>
      </div>
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 7); // 7 days from now

    return (
      <div className="w-80">
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          With Default Value (7 days from today)
        </label>
        <DatePicker
          defaultValue={defaultDate}
          placeholder="Select date"
          onChange={action("default-value-changed")}
        />
      </div>
    );
  },
};

export const MinMaxDates: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() - 7); // 7 days ago

    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30); // 30 days from now

    return (
      <div className="w-80">
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Date Range (7 days ago to 30 days from now)
        </label>
        <DatePicker
          minDate={minDate}
          maxDate={maxDate}
          placeholder="Select date within range"
          onChange={action("range-date-changed")}
        />
        <p className="text-xs text-secondary-500 mt-1">
          Min: {minDate.toLocaleDateString()} - Max:{" "}
          {maxDate.toLocaleDateString()}
        </p>
      </div>
    );
  },
};

export const DisabledDates: Story = {
  render: () => {
    // Disable weekends (Saturday and Sunday)
    const getDisabledDates = () => {
      const dates: Date[] = [];
      const today = new Date();

      for (let i = -30; i <= 30; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        // Disable weekends (0 = Sunday, 6 = Saturday)
        if (date.getDay() === 0 || date.getDay() === 6) {
          dates.push(date);
        }
      }

      return dates;
    };

    return (
      <div className="w-80">
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Weekdays Only (Weekends Disabled)
        </label>
        <DatePicker
          disabledDates={getDisabledDates()}
          placeholder="Select weekday"
          onChange={action("weekday-changed")}
        />
        <p className="text-xs text-secondary-500 mt-1">
          Weekends are disabled in this example
        </p>
      </div>
    );
  },
};

export const ControlledDatePicker: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
      <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Controlled DatePicker
          </label>
          <DatePicker
            value={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              action("controlled-date-changed")(date);
            }}
            placeholder="Select date"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-secondary-600">
            Selected Date:{" "}
            {selectedDate ? selectedDate.toLocaleDateString() : "None"}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => setSelectedDate(new Date())}
              className="px-3 py-1 text-xs bg-primary-600 text-white rounded hover:bg-primary-700"
            >
              Set Today
            </button>
            <button
              onClick={() => setSelectedDate(null)}
              className="px-3 py-1 text-xs bg-secondary-600 text-white rounded hover:bg-secondary-700"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  },
};

export const WithoutClearButton: Story = {
  args: {
    allowClear: false,
    showToday: true,
    defaultValue: new Date(),
    placeholder: "Date without clear button",
    onChange: action("no-clear-date-changed"),
  },
};

export const WithoutTodayButton: Story = {
  args: {
    allowClear: true,
    showToday: false,
    placeholder: "Date without today button",
    onChange: action("no-today-date-changed"),
  },
};

export const DisabledState: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Disabled Empty
        </label>
        <DatePicker disabled placeholder="Disabled date picker" />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Disabled with Value
        </label>
        <DatePicker
          disabled
          defaultValue={new Date()}
          placeholder="Disabled with value"
        />
      </div>
    </div>
  ),
};

export const InFormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      startDate: null as Date | null,
      endDate: null as Date | null,
      meetingDate: new Date(),
    });

    return (
      <div className="max-w-md">
        <div className="bg-white p-6 border border-secondary-200 rounded-lg">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Event Planning Form
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Start Date *
              </label>
              <DatePicker
                value={formData.startDate}
                onChange={(date) => {
                  setFormData((prev) => ({ ...prev, startDate: date }));
                  action("start-date-changed")(date);
                }}
                placeholder="Select start date"
                minDate={new Date()}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                End Date *
              </label>
              <DatePicker
                value={formData.endDate}
                onChange={(date) => {
                  setFormData((prev) => ({ ...prev, endDate: date }));
                  action("end-date-changed")(date);
                }}
                placeholder="Select end date"
                minDate={formData.startDate || new Date()}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Meeting Date
              </label>
              <DatePicker
                value={formData.meetingDate}
                onChange={(date) => {
                  setFormData((prev) => ({ ...prev, meetingDate: date }));
                  action("meeting-date-changed")(date);
                }}
                placeholder="Select meeting date"
                format="DD/MM/YYYY"
                size="sm"
              />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-secondary-200">
            <div className="text-sm text-secondary-600 space-y-1">
              <p>
                <strong>Selected Dates:</strong>
              </p>
              <p>
                Start:{" "}
                {formData.startDate?.toLocaleDateString() || "Not selected"}
              </p>
              <p>
                End: {formData.endDate?.toLocaleDateString() || "Not selected"}
              </p>
              <p>
                Meeting:{" "}
                {formData.meetingDate?.toLocaleDateString() || "Not selected"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="w-80">
      <label className="block text-sm font-medium text-secondary-700 mb-2">
        Custom Styled DatePicker
      </label>
      <DatePicker
        placeholder="Custom styled date picker"
        className="border-2 border-blue-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200"
        pickerClassName="border-2 border-blue-300 shadow-xl"
        onChange={action("custom-styled-changed")}
      />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    placeholder: "Select date",
    format: "MM/DD/YYYY",
    size: "md",
    disabled: false,
    allowClear: true,
    showToday: true,
    onChange: action("playground-date-changed"),
  },
};
