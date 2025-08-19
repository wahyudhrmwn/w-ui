import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { AutoComplete, AutoCompleteOption } from "./AutoComplete";

const meta = {
  title: "Form Controls/AutoComplete",
  component: AutoComplete,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen AutoComplete untuk input dengan intelligent suggestions. Mendukung keyboard navigation, custom filtering, dan berbagai konfigurasi untuk pengalaman user yang optimal dalam pencarian dan pemilihan data.",
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
    backfill: {
      control: { type: "boolean" },
      description: "Apakah mengisi input saat navigasi keyboard",
    },
    defaultActiveFirstOption: {
      control: { type: "boolean" },
      description: "Apakah default active first option",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran autocomplete",
    },
    status: {
      control: { type: "select" },
      options: [undefined, "error", "warning"],
      description: "Status validation",
    },
    dropdownMatchSelectWidth: {
      control: { type: "boolean" },
      description: "Apakah lebar dropdown sama dengan input",
    },
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const countriesList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Pakistan",
  "Philippines",
  "Poland",
  "Portugal",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "United States",
  "Vietnam",
];

const emailSuggestions = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "protonmail.com",
  "zoho.com",
  "aol.com",
];

const programmingLanguages: AutoCompleteOption[] = [
  {
    value: "javascript",
    label: "JavaScript",
    data: { type: "interpreted", year: 1995 },
  },
  {
    value: "typescript",
    label: "TypeScript",
    data: { type: "compiled", year: 2012 },
  },
  {
    value: "python",
    label: "Python",
    data: { type: "interpreted", year: 1991 },
  },
  { value: "java", label: "Java", data: { type: "compiled", year: 1995 } },
  { value: "cpp", label: "C++", data: { type: "compiled", year: 1985 } },
  { value: "csharp", label: "C#", data: { type: "compiled", year: 2000 } },
  { value: "go", label: "Go", data: { type: "compiled", year: 2009 } },
  { value: "rust", label: "Rust", data: { type: "compiled", year: 2010 } },
  { value: "php", label: "PHP", data: { type: "interpreted", year: 1995 } },
  { value: "ruby", label: "Ruby", data: { type: "interpreted", year: 1995 } },
  { value: "swift", label: "Swift", data: { type: "compiled", year: 2014 } },
  { value: "kotlin", label: "Kotlin", data: { type: "compiled", year: 2011 } },
  { value: "scala", label: "Scala", data: { type: "compiled", year: 2003 } },
  { value: "r", label: "R", data: { type: "interpreted", year: 1993 } },
  {
    value: "matlab",
    label: "MATLAB",
    disabled: true,
    data: { type: "interpreted", year: 1984 },
  },
];

export const Default: Story = {
  args: {
    dataSource: countriesList,
    placeholder: "Select a country",
    onChange: action("value-changed"),
    onSelect: action("option-selected"),
    onSearch: action("search-performed"),
  },
};

export const WithDefaultValue: Story = {
  args: {
    dataSource: countriesList,
    defaultValue: "Indonesia",
    placeholder: "Select a country",
    onChange: action("value-changed"),
    onSelect: action("option-selected"),
  },
};

export const WithClearButton: Story = {
  args: {
    dataSource: programmingLanguages,
    allowClear: true,
    placeholder: "Type programming language",
    onChange: action("value-changed"),
    onSelect: action("language-selected"),
  },
};

export const EmailAutoComplete: Story = {
  render: () => {
    const [value, setValue] = useState("");

    // Generate email suggestions based on input
    const getEmailSuggestions = (inputValue: string) => {
      if (!inputValue.includes("@")) {
        return emailSuggestions.map((domain) => `${inputValue}@${domain}`);
      }

      const [username, partialDomain] = inputValue.split("@");
      if (!partialDomain) return [];

      return emailSuggestions
        .filter((domain) =>
          domain.toLowerCase().includes(partialDomain.toLowerCase())
        )
        .map((domain) => `${username}@${domain}`);
    };

    return (
      <div className="w-80">
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <AutoComplete
          value={value}
          dataSource={getEmailSuggestions(value)}
          placeholder="Enter your email"
          allowClear
          onChange={(newValue) => {
            setValue(newValue);
            action("email-changed")(newValue);
          }}
          onSelect={(selectedValue) => {
            setValue(selectedValue);
            action("email-selected")(selectedValue);
          }}
          prefix={
            <svg
              className="w-4 h-4 text-secondary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          }
        />
      </div>
    );
  },
};

export const WithBackfill: Story = {
  args: {
    dataSource: countriesList,
    backfill: true,
    placeholder: "Type and use arrows (backfill enabled)",
    onChange: action("backfill-changed"),
    onSelect: action("backfill-selected"),
  },
};

export const CustomFilter: Story = {
  args: {
    dataSource: programmingLanguages,
    filterOption: (inputValue: string, option: AutoCompleteOption) => {
      // Custom filter: match both label and creation year
      const label = option.label || option.value;
      const year = option.data?.year?.toString() || "";
      return (
        label.toLowerCase().includes(inputValue.toLowerCase()) ||
        year.includes(inputValue)
      );
    },
    placeholder: "Search by name or year (e.g., '1995', 'java')",
    onChange: action("custom-filter-changed"),
    onSelect: action("custom-filter-selected"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Small</label>
        <AutoComplete
          dataSource={countriesList.slice(0, 10)}
          size="sm"
          placeholder="Small size"
          onChange={action("small-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Medium (Default)
        </label>
        <AutoComplete
          dataSource={countriesList.slice(0, 10)}
          size="md"
          placeholder="Medium size"
          onChange={action("medium-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large</label>
        <AutoComplete
          dataSource={countriesList.slice(0, 10)}
          size="lg"
          placeholder="Large size"
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
        <AutoComplete
          dataSource={countriesList.slice(0, 8)}
          placeholder="Normal state"
          onChange={action("normal-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-yellow-700">
          Warning
        </label>
        <AutoComplete
          dataSource={countriesList.slice(0, 8)}
          status="warning"
          placeholder="Warning state"
          onChange={action("warning-changed")}
        />
        <p className="text-xs text-yellow-600 mt-1">
          Please verify your selection
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-red-700">
          Error
        </label>
        <AutoComplete
          dataSource={countriesList.slice(0, 8)}
          status="error"
          placeholder="Error state"
          onChange={action("error-changed")}
        />
        <p className="text-xs text-red-600 mt-1">This field is required</p>
      </div>
    </div>
  ),
};

export const WithPrefixSuffix: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">
          Search with Icon
        </label>
        <AutoComplete
          dataSource={programmingLanguages}
          placeholder="Search programming languages"
          allowClear
          prefix={
            <svg
              className="w-4 h-4 text-secondary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          onChange={action("search-changed")}
          onSelect={action("search-selected")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">URL Input</label>
        <AutoComplete
          dataSource={[
            "https://google.com",
            "https://github.com",
            "https://stackoverflow.com",
            "https://developer.mozilla.org",
          ]}
          placeholder="Enter URL"
          prefix="🌐"
          suffix={
            <svg
              className="w-4 h-4 text-secondary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          }
          onChange={action("url-changed")}
        />
      </div>
    </div>
  ),
};

export const ControlledAutoComplete: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [dataSource, setDataSource] = useState<string[]>([]);

    const handleSearch = (searchValue: string) => {
      // Simulate API call
      if (searchValue) {
        const filtered = countriesList.filter((country) =>
          country.toLowerCase().includes(searchValue.toLowerCase())
        );
        setDataSource(filtered.slice(0, 10)); // Limit results
      } else {
        setDataSource([]);
      }
      action("controlled-search")(searchValue);
    };

    return (
      <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">
            Controlled AutoComplete
          </label>
          <AutoComplete
            value={value}
            dataSource={dataSource}
            placeholder="Start typing country name"
            allowClear
            onChange={(newValue) => {
              setValue(newValue);
              action("controlled-change")(newValue);
            }}
            onSearch={handleSearch}
            onSelect={(selectedValue, option) => {
              setValue(selectedValue);
              action("controlled-select")({ selectedValue, option });
            }}
          />
        </div>

        <div className="text-sm text-secondary-600 space-y-1">
          <div>
            <span className="font-medium">Value:</span> "{value}"
          </div>
          <div>
            <span className="font-medium">Suggestions:</span>{" "}
            {dataSource.length} items
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              setValue("Indonesia");
              setDataSource(["Indonesia"]);
            }}
            className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200"
          >
            Set Indonesia
          </button>
          <button
            onClick={() => {
              setValue("");
              setDataSource([]);
            }}
            className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Clear
          </button>
        </div>
      </div>
    );
  },
};

export const DisabledOptions: Story = {
  args: {
    dataSource: programmingLanguages, // Contains disabled MATLAB option
    placeholder: "Some options are disabled",
    onChange: action("disabled-options-changed"),
    onSelect: action("disabled-options-selected"),
  },
};

export const NoFilterMode: Story = {
  args: {
    dataSource: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    filterOption: false,
    placeholder: "Shows all options (no filtering)",
    onChange: action("no-filter-changed"),
    onSelect: action("no-filter-selected"),
  },
};

export const AutoFocus: Story = {
  args: {
    dataSource: programmingLanguages,
    autoFocus: true,
    placeholder: "Auto focused on mount",
    onChange: action("autofocus-changed"),
    onSelect: action("autofocus-selected"),
  },
};

export const CustomNotFound: Story = {
  args: {
    dataSource: ["Apple", "Banana", "Cherry"],
    placeholder: "Try typing 'orange'",
    notFoundContent: (
      <div className="text-center py-4">
        <div className="text-secondary-400 mb-2">🤷‍♂️</div>
        <div className="text-sm text-secondary-500">No fruits found</div>
        <div className="text-xs text-secondary-400">
          Try: apple, banana, or cherry
        </div>
      </div>
    ),
    onChange: action("not-found-changed"),
    onSelect: action("not-found-selected"),
  },
};

export const DisabledState: Story = {
  args: {
    dataSource: countriesList,
    disabled: true,
    defaultValue: "Indonesia",
    placeholder: "Disabled autocomplete",
  },
};
