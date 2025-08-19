import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { Drawer } from "./Drawer";
import { Button } from "../Button";

const meta = {
  title: "Layout/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Komponen Drawer untuk menampilkan panel yang slide dari sisi layar. Cocok untuk navigation menu, detail panel, settings, dan filters. Mendukung berbagai posisi dan mode tampilan.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Apakah drawer terbuka",
    },
    placement: {
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
      description: "Posisi drawer",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      description: "Ukuran drawer",
    },
    title: {
      control: { type: "text" },
      description: "Title drawer",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Apakah menampilkan close button (X)",
    },
    closeOnOverlayClick: {
      control: { type: "boolean" },
      description: "Apakah drawer bisa ditutup dengan overlay click",
    },
    closeOnEscapeKey: {
      control: { type: "boolean" },
      description: "Apakah drawer bisa ditutup dengan ESC key",
    },
    mode: {
      control: { type: "select" },
      options: ["overlay", "push"],
      description: "Mode drawer (overlay atau push content)",
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-secondary-900">Drawer Content</h3>
    <p className="text-secondary-600">
      This is sample content inside the drawer. You can put any content here
      including forms, navigation menus, settings panels, or detailed
      information.
    </p>
    <div className="space-y-2">
      <Button variant="primary" className="w-full">
        Primary Action
      </Button>
      <Button variant="outline" className="w-full">
        Secondary Action
      </Button>
    </div>
    <div className="space-y-2">
      <h4 className="font-medium text-secondary-700">List Items:</h4>
      <ul className="space-y-1">
        <li className="flex items-center p-2 hover:bg-secondary-100 rounded">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Active item
        </li>
        <li className="flex items-center p-2 hover:bg-secondary-100 rounded">
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
          Pending item
        </li>
        <li className="flex items-center p-2 hover:bg-secondary-100 rounded">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          Inactive item
        </li>
      </ul>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Default Drawer",
    placement: "right",
    size: "md",
    children: <SampleContent />,
    onClose: action("drawer-closed"),
  },
};

export const Placements: Story = {
  render: () => {
    const [openDrawer, setOpenDrawer] = useState<string | null>(null);

    const placements = [
      { id: "left", label: "Left", placement: "left" as const },
      { id: "right", label: "Right", placement: "right" as const },
      { id: "top", label: "Top", placement: "top" as const },
      { id: "bottom", label: "Bottom", placement: "bottom" as const },
    ];

    return (
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Different Placements
        </h3>

        <div className="grid grid-cols-2 gap-4 max-w-md">
          {placements.map((item) => (
            <Button
              key={item.id}
              onClick={() => setOpenDrawer(item.id)}
              variant="outline"
            >
              Open {item.label} Drawer
            </Button>
          ))}
        </div>

        {placements.map((item) => (
          <Drawer
            key={item.id}
            isOpen={openDrawer === item.id}
            onClose={() => setOpenDrawer(null)}
            placement={item.placement}
            title={`${item.label} Drawer`}
            children={<SampleContent />}
          />
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);

    const sizes = [
      { id: "xs", label: "Extra Small", size: "xs" as const },
      { id: "sm", label: "Small", size: "sm" as const },
      { id: "md", label: "Medium", size: "md" as const },
      { id: "lg", label: "Large", size: "lg" as const },
      { id: "xl", label: "Extra Large", size: "xl" as const },
      { id: "full", label: "Full Width", size: "full" as const },
    ];

    return (
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Different Sizes
        </h3>

        <div className="grid grid-cols-2 gap-4 max-w-md">
          {sizes.map((item) => (
            <Button
              key={item.id}
              onClick={() => setOpenSize(item.id)}
              variant="outline"
            >
              {item.label}
            </Button>
          ))}
        </div>

        {sizes.map((item) => (
          <Drawer
            key={item.id}
            isOpen={openSize === item.id}
            onClose={() => setOpenSize(null)}
            size={item.size}
            title={`${item.label} Drawer`}
            children={<SampleContent />}
          />
        ))}
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const footer = (
      <div className="flex gap-3 justify-end">
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            action("save-clicked")();
            setIsOpen(false);
          }}
        >
          Save Changes
        </Button>
      </div>
    );

    return (
      <div className="p-6">
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Open Drawer with Footer
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Settings"
          footer={footer}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 mb-4">
                User Preferences
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notifications"
                    className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label
                    htmlFor="notifications"
                    className="ml-2 text-sm text-secondary-600"
                  >
                    Enable email notifications
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const NavigationDrawer: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigationItems = [
      { icon: "🏠", label: "Dashboard", active: true },
      { icon: "📊", label: "Analytics", active: false },
      { icon: "👥", label: "Users", active: false },
      { icon: "⚙️", label: "Settings", active: false },
      { icon: "💼", label: "Projects", active: false },
      { icon: "📝", label: "Documentation", active: false },
    ];

    return (
      <div className="p-6">
        <Button onClick={() => setIsOpen(true)} variant="primary">
          ☰ Open Navigation
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement="left"
          title="Navigation"
          size="sm"
        >
          <nav className="space-y-1">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={clsx(
                  "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                  item.active
                    ? "bg-primary-100 text-primary-700 font-medium"
                    : "text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  action("nav-clicked")(item.label);
                }}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-4 border-t border-secondary-200">
            <div className="flex items-center px-3 py-2">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                JD
              </div>
              <div>
                <div className="text-sm font-medium text-secondary-900">
                  John Doe
                </div>
                <div className="text-xs text-secondary-500">
                  john@example.com
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const FilterDrawer: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
      category: "",
      priceRange: [0, 1000],
      brand: [] as string[],
      inStock: false,
    });

    const footer = (
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => {
            setFilters({
              category: "",
              priceRange: [0, 1000],
              brand: [],
              inStock: false,
            });
          }}
        >
          Clear All
        </Button>
        <Button
          variant="primary"
          className="flex-1"
          onClick={() => {
            action("apply-filters")(filters);
            setIsOpen(false);
          }}
        >
          Apply Filters
        </Button>
      </div>
    );

    return (
      <div className="p-6">
        <Button onClick={() => setIsOpen(true)} variant="outline">
          🔽 Open Filters
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement="right"
          title="Filters"
          footer={footer}
          size="sm"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Garden</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Price Range
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    priceRange: [
                      filters.priceRange[0],
                      parseInt(e.target.value),
                    ],
                  })
                }
                className="w-full"
              />
              <div className="flex justify-between text-xs text-secondary-500 mt-1">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Brands
              </label>
              <div className="space-y-2">
                {["Apple", "Samsung", "Sony", "Nike", "Adidas"].map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFilters({
                            ...filters,
                            brand: [...filters.brand, brand],
                          });
                        } else {
                          setFilters({
                            ...filters,
                            brand: filters.brand.filter((b) => b !== brand),
                          });
                        }
                      }}
                      className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-secondary-600">
                      {brand}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="inStock"
                checked={filters.inStock}
                onChange={(e) =>
                  setFilters({ ...filters, inStock: e.target.checked })
                }
                className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
              />
              <label
                htmlFor="inStock"
                className="ml-2 text-sm text-secondary-600"
              >
                In Stock Only
              </label>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const PushMode: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            Push Mode Demo
          </h3>
          <p className="text-secondary-600 mb-4">
            Push mode will push the page content aside instead of showing an
            overlay.
          </p>
          <Button onClick={() => setIsOpen(true)} variant="primary">
            Open Push Drawer
          </Button>
        </div>

        <div className="bg-secondary-100 p-4 rounded-lg">
          <h4 className="font-medium text-secondary-900 mb-2">Page Content</h4>
          <p className="text-secondary-600">
            This content will be pushed aside when the drawer opens in push
            mode. Watch how the entire page content moves to accommodate the
            drawer.
          </p>
        </div>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement="left"
          title="Push Mode Drawer"
          mode="push"
          size="sm"
        >
          <div className="space-y-4">
            <p className="text-secondary-600">
              This drawer uses push mode, so it pushes the main content aside
              instead of overlaying it.
            </p>
            <Button
              variant="primary"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Close Drawer
            </Button>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const CustomSizes: Story = {
  render: () => {
    const [openDrawer, setOpenDrawer] = useState<string | null>(null);

    return (
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Custom Sizes
        </h3>

        <div className="space-y-2">
          <Button
            onClick={() => setOpenDrawer("custom-width")}
            variant="outline"
            className="mr-2"
          >
            Custom Width (600px)
          </Button>

          <Button
            onClick={() => setOpenDrawer("custom-height")}
            variant="outline"
          >
            Custom Height (300px)
          </Button>
        </div>

        <Drawer
          isOpen={openDrawer === "custom-width"}
          onClose={() => setOpenDrawer(null)}
          title="Custom Width Drawer"
          width={600}
        >
          <p>This drawer has a custom width of 600px.</p>
        </Drawer>

        <Drawer
          isOpen={openDrawer === "custom-height"}
          onClose={() => setOpenDrawer(null)}
          placement="bottom"
          title="Custom Height Drawer"
          height={300}
        >
          <p>This drawer has a custom height of 300px.</p>
        </Drawer>
      </div>
    );
  },
};

export const NoCloseOptions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-6">
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Open Modal Drawer
        </Button>

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Drawer"
          showCloseButton={false}
          closeOnOverlayClick={false}
          closeOnEscapeKey={false}
          footer={
            <Button
              variant="primary"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Close with Button Only
            </Button>
          }
        >
          <div className="space-y-4">
            <p className="text-secondary-600">
              This drawer can only be closed using the button in the footer.
              Clicking outside or pressing ESC won't close it.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    isOpen: true,
    title: "Playground Drawer",
    placement: "right",
    size: "md",
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEscapeKey: true,
    mode: "overlay",
    children: <SampleContent />,
    onClose: action("drawer-closed"),
  },
};
