import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Cascader, CascaderOption } from "./Cascader";

const meta = {
  title: "Form Controls/Cascader",
  component: Cascader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Cascader untuk memilih nilai dari data hierarkis bertingkat. Sangat berguna untuk kasus seperti pemilihan lokasi (negara → provinsi → kota), kategori produk, atau struktur organisasi dengan navigasi yang intuitif.",
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
    showSearch: {
      control: { type: "boolean" },
      description: "Apakah menampilkan search functionality",
    },
    expandTrigger: {
      control: { type: "select" },
      options: ["click", "hover"],
      description: "Trigger untuk expand menu",
    },
    changeOnSelect: {
      control: { type: "boolean" },
      description: "Apakah trigger onChange saat memilih parent option",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran cascader",
    },
    separator: {
      control: { type: "text" },
      description: "Separator untuk display label",
    },
  },
} satisfies Meta<typeof Cascader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample location data
const locationOptions: CascaderOption[] = [
  {
    value: "indonesia",
    label: "Indonesia",
    children: [
      {
        value: "jakarta",
        label: "DKI Jakarta",
        children: [
          { value: "jaksel", label: "Jakarta Selatan" },
          { value: "jakpus", label: "Jakarta Pusat" },
          { value: "jakut", label: "Jakarta Utara" },
          { value: "jakbar", label: "Jakarta Barat" },
          { value: "jaktim", label: "Jakarta Timur" },
        ],
      },
      {
        value: "jabar",
        label: "Jawa Barat",
        children: [
          { value: "bandung", label: "Bandung" },
          { value: "bekasi", label: "Bekasi" },
          { value: "depok", label: "Depok" },
          { value: "bogor", label: "Bogor" },
        ],
      },
      {
        value: "jateng",
        label: "Jawa Tengah",
        children: [
          { value: "semarang", label: "Semarang" },
          { value: "solo", label: "Surakarta" },
          { value: "yogya", label: "Yogyakarta" },
        ],
      },
      {
        value: "jatim",
        label: "Jawa Timur",
        children: [
          { value: "surabaya", label: "Surabaya" },
          { value: "malang", label: "Malang" },
          { value: "sidoarjo", label: "Sidoarjo" },
        ],
      },
    ],
  },
  {
    value: "singapore",
    label: "Singapore",
    children: [
      {
        value: "central",
        label: "Central Region",
        children: [
          { value: "orchard", label: "Orchard" },
          { value: "marina", label: "Marina Bay" },
        ],
      },
      {
        value: "north",
        label: "North Region",
        children: [
          { value: "woodlands", label: "Woodlands" },
          { value: "yishun", label: "Yishun" },
        ],
      },
    ],
  },
  {
    value: "malaysia",
    label: "Malaysia",
    children: [
      {
        value: "kl",
        label: "Kuala Lumpur",
        children: [
          { value: "klcc", label: "KLCC" },
          { value: "bukit-bintang", label: "Bukit Bintang" },
        ],
      },
      {
        value: "selangor",
        label: "Selangor",
        children: [
          { value: "shah-alam", label: "Shah Alam" },
          { value: "petaling-jaya", label: "Petaling Jaya" },
        ],
      },
    ],
  },
];

// Company structure data
const companyOptions: CascaderOption[] = [
  {
    value: "tech",
    label: "Technology",
    children: [
      {
        value: "engineering",
        label: "Engineering",
        children: [
          { value: "frontend", label: "Frontend Team" },
          { value: "backend", label: "Backend Team" },
          { value: "mobile", label: "Mobile Team" },
          { value: "devops", label: "DevOps Team" },
        ],
      },
      {
        value: "product",
        label: "Product",
        children: [
          { value: "pm", label: "Product Manager" },
          { value: "ux", label: "UX Designer" },
          { value: "ui", label: "UI Designer" },
        ],
      },
      {
        value: "qa",
        label: "Quality Assurance",
        children: [
          { value: "manual", label: "Manual Testing" },
          { value: "automation", label: "Automation Testing" },
        ],
      },
    ],
  },
  {
    value: "business",
    label: "Business",
    children: [
      {
        value: "sales",
        label: "Sales",
        children: [
          { value: "inside-sales", label: "Inside Sales" },
          { value: "field-sales", label: "Field Sales" },
          { value: "enterprise", label: "Enterprise Sales" },
        ],
      },
      {
        value: "marketing",
        label: "Marketing",
        children: [
          { value: "digital", label: "Digital Marketing" },
          { value: "content", label: "Content Marketing" },
          { value: "growth", label: "Growth Marketing" },
        ],
      },
      {
        value: "bd",
        label: "Business Development",
        children: [
          { value: "partnerships", label: "Partnerships" },
          { value: "strategy", label: "Strategic Planning" },
        ],
      },
    ],
  },
  {
    value: "operations",
    label: "Operations",
    children: [
      {
        value: "hr",
        label: "Human Resources",
        children: [
          { value: "recruitment", label: "Recruitment" },
          { value: "learning", label: "Learning & Development" },
          { value: "compensation", label: "Compensation & Benefits" },
        ],
      },
      {
        value: "finance",
        label: "Finance",
        children: [
          { value: "accounting", label: "Accounting" },
          { value: "fp&a", label: "Financial Planning & Analysis" },
          { value: "treasury", label: "Treasury" },
        ],
      },
      {
        value: "legal",
        label: "Legal",
        children: [
          { value: "contracts", label: "Contracts" },
          { value: "compliance", label: "Compliance" },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    options: locationOptions,
    placeholder: "Select location",
    onChange: action("location-changed"),
    onSelect: action("location-selected"),
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: locationOptions,
    defaultValue: ["indonesia", "jakarta", "jaksel"],
    placeholder: "Select location",
    onChange: action("location-changed"),
  },
};

export const WithSearch: Story = {
  args: {
    options: companyOptions,
    showSearch: true,
    placeholder: "Search departments",
    onChange: action("department-changed"),
    onSearch: action("search-changed"),
  },
};

export const HoverTrigger: Story = {
  args: {
    options: locationOptions,
    expandTrigger: "hover",
    placeholder: "Hover to expand",
    onChange: action("hover-changed"),
  },
};

export const ChangeOnSelect: Story = {
  args: {
    options: companyOptions,
    changeOnSelect: true,
    placeholder: "Select department (change on any level)",
    onChange: action("change-on-select"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Small</label>
        <Cascader
          options={locationOptions}
          size="sm"
          placeholder="Small size"
          onChange={action("small-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Medium (Default)
        </label>
        <Cascader
          options={locationOptions}
          size="md"
          placeholder="Medium size"
          onChange={action("medium-changed")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large</label>
        <Cascader
          options={locationOptions}
          size="lg"
          placeholder="Large size"
          onChange={action("large-changed")}
        />
      </div>
    </div>
  ),
};

export const CustomSeparator: Story = {
  args: {
    options: companyOptions,
    separator: " > ",
    defaultValue: ["tech", "engineering", "frontend"],
    placeholder: "Custom separator",
    onChange: action("separator-changed"),
  },
};

export const CustomDisplay: Story = {
  args: {
    options: locationOptions,
    displayRender: (labels, selectedOptions) => (
      <div className="flex items-center">
        <span className="text-primary-600 font-medium">📍</span>
        <span className="ml-1">{labels.join(" → ")}</span>
        {selectedOptions && selectedOptions.length > 0 && (
          <span className="ml-2 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs rounded">
            Level {selectedOptions.length}
          </span>
        )}
      </div>
    ),
    defaultValue: ["indonesia", "jakarta", "jakpus"],
    placeholder: "Custom display render",
    onChange: action("custom-display-changed"),
  },
};

export const WithDisabledOptions: Story = {
  render: () => {
    const disabledOptions: CascaderOption[] = [
      {
        value: "available",
        label: "Available Regions",
        children: [
          { value: "asia", label: "Asia Pacific" },
          { value: "europe", label: "Europe" },
        ],
      },
      {
        value: "maintenance",
        label: "Under Maintenance",
        disabled: true,
        children: [
          { value: "americas", label: "Americas" },
          { value: "africa", label: "Africa" },
        ],
      },
      {
        value: "coming-soon",
        label: "Coming Soon",
        children: [
          { value: "oceania", label: "Oceania", disabled: true },
          { value: "middle-east", label: "Middle East" },
        ],
      },
    ];

    return (
      <Cascader
        options={disabledOptions}
        placeholder="Select region (some disabled)"
        onChange={action("disabled-changed")}
      />
    );
  },
};

export const ControlledCascader: Story = {
  render: () => {
    const [value, setValue] = useState<(string | number)[]>([]);
    const [searchValue, setSearchValue] = useState("");

    return (
      <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">
            Controlled Cascader
          </label>
          <Cascader
            options={companyOptions}
            value={value}
            searchValue={searchValue}
            showSearch
            placeholder="Controlled cascader"
            onChange={(newValue, selectedOptions) => {
              setValue(newValue);
              action("controlled-change")({ newValue, selectedOptions });
            }}
            onSearch={(searchVal) => {
              setSearchValue(searchVal);
              action("controlled-search")(searchVal);
            }}
          />
        </div>

        <div className="text-sm space-y-1">
          <div>
            <span className="font-medium">Value:</span> {JSON.stringify(value)}
          </div>
          <div>
            <span className="font-medium">Search:</span> "{searchValue}"
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setValue(["tech", "engineering", "frontend"])}
            className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200"
          >
            Set Frontend
          </button>
          <button
            onClick={() => setValue(["business", "marketing", "digital"])}
            className="px-3 py-1 text-sm bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200"
          >
            Set Marketing
          </button>
          <button
            onClick={() => {
              setValue([]);
              setSearchValue("");
            }}
            className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Clear All
          </button>
        </div>
      </div>
    );
  },
};

export const LazyLoading: Story = {
  render: () => {
    const [lazyOptions, setLazyOptions] = useState<CascaderOption[]>([
      {
        value: "countries",
        label: "Countries",
        children: [
          { value: "indonesia", label: "Indonesia" },
          { value: "singapore", label: "Singapore" },
          { value: "malaysia", label: "Malaysia" },
        ],
      },
    ]);

    const loadData = (selectedOptions: CascaderOption[]) => {
      const targetOption = selectedOptions[selectedOptions.length - 1];

      // Simulate loading
      const newOptions = [...lazyOptions];
      const updateOptions = (
        options: CascaderOption[],
        path: (string | number)[]
      ): CascaderOption[] => {
        return options.map((option) => {
          if (path.length === 1 && option.value === path[0]) {
            return {
              ...option,
              loading: true,
              children: option.children || [],
            };
          } else if (option.children && path[0] === option.value) {
            return {
              ...option,
              children: updateOptions(option.children, path.slice(1)),
            };
          }
          return option;
        });
      };

      const valuePath = selectedOptions.map((opt) => opt.value);
      setLazyOptions(updateOptions(newOptions, valuePath));

      // Simulate API call
      setTimeout(() => {
        const mockChildren = [
          {
            value: `${targetOption.value}-city1`,
            label: `${targetOption.label} City 1`,
          },
          {
            value: `${targetOption.value}-city2`,
            label: `${targetOption.label} City 2`,
          },
          {
            value: `${targetOption.value}-city3`,
            label: `${targetOption.label} City 3`,
          },
        ];

        const finalOptions = [...lazyOptions];
        const updateWithData = (
          options: CascaderOption[],
          path: (string | number)[]
        ): CascaderOption[] => {
          return options.map((option) => {
            if (path.length === 1 && option.value === path[0]) {
              return {
                ...option,
                loading: false,
                children: mockChildren,
              };
            } else if (option.children && path[0] === option.value) {
              return {
                ...option,
                children: updateWithData(option.children, path.slice(1)),
              };
            }
            return option;
          });
        };

        setLazyOptions(updateWithData(finalOptions, valuePath));
      }, 1500);
    };

    return (
      <div className="w-80">
        <p className="text-sm text-secondary-600 mb-4">
          Click on country names to load cities dynamically.
        </p>
        <Cascader
          options={lazyOptions}
          loadData={loadData}
          placeholder="Select location (lazy loading)"
          onChange={action("lazy-changed")}
        />
      </div>
    );
  },
};

export const DisabledState: Story = {
  args: {
    options: locationOptions,
    disabled: true,
    defaultValue: ["indonesia", "jakarta", "jaksel"],
    placeholder: "Disabled cascader",
  },
};

export const NoData: Story = {
  args: {
    options: [],
    placeholder: "No options available",
    notFoundContent: "No data found",
    onChange: action("no-data-changed"),
  },
};
