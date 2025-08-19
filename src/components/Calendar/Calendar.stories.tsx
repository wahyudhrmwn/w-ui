import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { Calendar, CalendarValue } from "./Calendar";

const meta = {
  title: "Data Display/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Calendar penuh untuk menampilkan dan navigasi tanggal. Berbeda dari DatePicker, Calendar selalu terlihat dan cocok untuk dashboard, event management, atau aplikasi yang memerlukan tampilan kalender yang prominan dengan berbagai kustomisasi.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["month", "year"],
      description: "Mode tampilan kalender",
    },
    fullscreen: {
      control: { type: "boolean" },
      description: "Apakah fullscreen",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran kalender",
    },
    showToday: {
      control: { type: "boolean" },
      description: "Apakah menampilkan tombol Today",
    },
    showWeekNumber: {
      control: { type: "boolean" },
      description: "Apakah menampilkan nomor minggu",
    },
    firstDayOfWeek: {
      control: { type: "select" },
      options: [0, 1],
      description: "Hari pertama dalam minggu (0=Minggu, 1=Senin)",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: action("date-changed"),
    onSelect: action("date-selected"),
    onPanelChange: action("panel-changed"),
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: new Date(2024, 5, 15), // June 15, 2024
    onChange: action("date-changed"),
    onSelect: action("date-selected"),
  },
};

export const YearMode: Story = {
  args: {
    mode: "year",
    onChange: action("date-changed"),
    onPanelChange: action("panel-changed"),
  },
};

export const WithWeekNumbers: Story = {
  args: {
    showWeekNumber: true,
    onChange: action("date-changed"),
    onSelect: action("date-selected"),
  },
};

export const MondayFirst: Story = {
  args: {
    firstDayOfWeek: 1,
    onChange: action("date-changed"),
    onSelect: action("date-selected"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Calendar size="sm" onChange={action("small-changed")} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <Calendar size="md" onChange={action("medium-changed")} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Calendar size="lg" onChange={action("large-changed")} />
      </div>
    </div>
  ),
};

export const WithDisabledDates: Story = {
  render: () => {
    const disabledDate = (date: Date) => {
      // Disable weekends
      const day = date.getDay();
      return day === 0 || day === 6;
    };

    return (
      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Weekends are disabled in this calendar.
        </p>
        <Calendar
          disabledDate={disabledDate}
          onChange={action("disabled-dates-changed")}
          onSelect={action("disabled-dates-selected")}
        />
      </div>
    );
  },
};

export const WithCustomLocale: Story = {
  render: () => {
    const indonesianLocale = {
      months: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
      weekdays: [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ],
      weekdaysShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
      today: "Hari Ini",
    };

    return (
      <Calendar
        locale={indonesianLocale}
        firstDayOfWeek={1}
        onChange={action("locale-changed")}
        onSelect={action("locale-selected")}
      />
    );
  },
};

export const WithCustomCellRender: Story = {
  render: () => {
    // Sample events data
    const events = {
      "2024-06-15": [{ title: "Meeting", color: "bg-blue-500" }],
      "2024-06-20": [
        { title: "Conference", color: "bg-green-500" },
        { title: "Dinner", color: "bg-purple-500" },
      ],
      "2024-06-25": [{ title: "Workshop", color: "bg-orange-500" }],
    };

    const dateCellRender = (date: Date) => {
      const dateKey = date.toISOString().split("T")[0];
      const dayEvents = events[dateKey as keyof typeof events] || [];

      if (dayEvents.length === 0) return null;

      return (
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-center space-x-0.5">
            {dayEvents.slice(0, 3).map((event, index) => (
              <div
                key={index}
                className={clsx("w-1 h-1 rounded-full", event.color)}
                title={event.title}
              />
            ))}
            {dayEvents.length > 3 && (
              <div className="w-1 h-1 rounded-full bg-secondary-400" />
            )}
          </div>
        </div>
      );
    };

    return (
      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Calendar with event indicators (dots show events on specific dates).
        </p>
        <Calendar
          defaultValue={new Date(2024, 5, 15)}
          dateCellRender={dateCellRender}
          onChange={action("events-changed")}
          onSelect={action("events-selected")}
        />
      </div>
    );
  },
};

export const ControlledCalendar: Story = {
  render: () => {
    const [value, setValue] = useState(new Date());
    const [mode, setMode] = useState<"month" | "year">("month");

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Controlled Calendar</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setMode(mode === "month" ? "year" : "month")}
              className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200"
            >
              Switch to {mode === "month" ? "Year" : "Month"} View
            </button>
          </div>
        </div>

        <Calendar
          value={value}
          mode={mode}
          onChange={(date, calendarValue) => {
            setValue(date);
            action("controlled-changed")({ date, calendarValue });
          }}
          onSelect={(date, calendarValue) => {
            setValue(date);
            action("controlled-selected")({ date, calendarValue });
          }}
          onPanelChange={(calendarValue, panelMode) => {
            action("controlled-panel-changed")({ calendarValue, panelMode });
          }}
        />

        <div className="text-sm text-secondary-600 space-y-1">
          <div>
            <span className="font-medium">Selected:</span>{" "}
            {value.toDateString()}
          </div>
          <div>
            <span className="font-medium">Mode:</span> {mode}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setValue(new Date())}
            className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
          >
            Today
          </button>
          <button
            onClick={() => setValue(new Date(2024, 11, 25))}
            className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Christmas
          </button>
          <button
            onClick={() => setValue(new Date(2024, 0, 1))}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
          >
            New Year
          </button>
        </div>
      </div>
    );
  },
};

export const CustomHeader: Story = {
  render: () => {
    const customHeaderRender = (
      value: CalendarValue,
      type: "month" | "year",
      onChange: (date: Date) => void,
      onTypeChange: (type: "month" | "year") => void
    ) => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      return (
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const newDate = new Date(value.year, value.month - 1, 1);
                onChange(newDate);
              }}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="text-center">
              <div className="font-bold text-lg">
                {type === "month"
                  ? `${months[value.month]} ${value.year}`
                  : `${value.year}`}
              </div>
              <button
                onClick={() =>
                  onTypeChange(type === "month" ? "year" : "month")
                }
                className="text-xs opacity-75 hover:opacity-100 underline"
              >
                Switch to {type === "month" ? "year" : "month"} view
              </button>
            </div>

            <button
              onClick={() => {
                const newDate = new Date(value.year, value.month + 1, 1);
                onChange(newDate);
              }}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={() => onChange(new Date())}
            className="px-3 py-1 bg-white bg-opacity-20 rounded text-sm hover:bg-opacity-30 transition-colors"
          >
            Today
          </button>
        </div>
      );
    };

    return (
      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Calendar with custom header styling and layout.
        </p>
        <Calendar
          headerRender={customHeaderRender}
          onChange={action("custom-header-changed")}
        />
      </div>
    );
  },
};

export const FullscreenCalendar: Story = {
  render: () => (
    <div className="h-96 w-full">
      <p className="text-sm text-secondary-600 mb-4">
        Fullscreen calendar that takes up all available space.
      </p>
      <Calendar
        fullscreen
        showWeekNumber
        onChange={action("fullscreen-changed")}
        onSelect={action("fullscreen-selected")}
      />
    </div>
  ),
};

export const CompactCalendar: Story = {
  args: {
    size: "sm",
    showToday: false,
    onChange: action("compact-changed"),
  },
};

export const BusinessCalendar: Story = {
  render: () => {
    const isBusinessDay = (date: Date) => {
      const day = date.getDay();
      return day !== 0 && day !== 6; // Not Sunday or Saturday
    };

    const disabledDate = (date: Date) => {
      return !isBusinessDay(date);
    };

    const dateCellRender = (date: Date) => {
      const isWeekend = !isBusinessDay(date);

      if (isWeekend) {
        return (
          <div className="absolute inset-0 bg-secondary-100 bg-opacity-50 flex items-center justify-center">
            <span className="text-xs text-secondary-400">🏠</span>
          </div>
        );
      }

      return null;
    };

    return (
      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Business calendar that highlights weekends as non-working days.
        </p>
        <Calendar
          firstDayOfWeek={1}
          showWeekNumber
          disabledDate={disabledDate}
          dateCellRender={dateCellRender}
          onChange={action("business-changed")}
          onSelect={action("business-selected")}
        />
      </div>
    );
  },
};
