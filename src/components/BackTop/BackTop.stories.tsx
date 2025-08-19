import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { BackTop } from "./BackTop";

const meta = {
  title: "Navigation/BackTop",
  component: BackTop,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Komponen BackTop untuk tombol scroll ke atas halaman dengan smooth scrolling. Muncul otomatis ketika user scroll ke bawah melewati threshold tertentu. Mendukung custom positioning, styling, dan berbagai konfigurasi behavior.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    visibilityHeight: {
      control: { type: "number", min: 0, max: 1000 },
      description: "Tinggi scroll untuk menampilkan tombol (px)",
    },
    right: {
      control: { type: "number" },
      description: "Jarak dari kanan (px)",
    },
    bottom: {
      control: { type: "number" },
      description: "Jarak dari bawah (px)",
    },
    smooth: {
      control: { type: "boolean" },
      description: "Apakah menggunakan smooth scrolling",
    },
    duration: {
      control: { type: "number", min: 100, max: 2000 },
      description: "Durasi animasi scroll (ms)",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran tombol",
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
      description: "Bentuk tombol",
    },
    showText: {
      control: { type: "boolean" },
      description: "Apakah menampilkan text",
    },
    text: {
      control: { type: "text" },
      description: "Text tombol",
    },
  },
} satisfies Meta<typeof BackTop>;

export default meta;
type Story = StoryObj<typeof meta>;

// Create long content for scrolling demo
const LongContent: React.FC = () => (
  <div className="space-y-8 p-8">
    <div className="text-center mb-12">
      <h1 className="text-3xl font-bold text-secondary-900 mb-4">
        BackTop Component Demo
      </h1>
      <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
        Scroll down to see the BackTop button appear. The button will show up
        after you scroll down 400 pixels by default.
      </p>
    </div>

    {Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto"
      >
        <h2 className="text-xl font-semibold mb-4">Section {i + 1}</h2>
        <div className="space-y-4 text-secondary-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    ))}

    <div className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-4">End of Content</h2>
      <p className="text-secondary-600">
        Use the BackTop button to scroll back to the top!
      </p>
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <div className="relative">
      <LongContent />
      <BackTop onClick={action("back-to-top-clicked")} />
    </div>
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div className="relative">
      <LongContent />

      {/* Different positions */}
      <BackTop
        right={24}
        bottom={24}
        size="sm"
        onClick={action("bottom-right-clicked")}
      />

      <BackTop
        right={24}
        bottom={80}
        size="sm"
        shape="square"
        onClick={action("bottom-right-square-clicked")}
      />

      <BackTop
        right={80}
        bottom={24}
        size="sm"
        text="Top"
        showText
        onClick={action("with-text-clicked")}
      />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="relative">
      <LongContent />

      {/* Different sizes */}
      <BackTop
        size="sm"
        right={24}
        bottom={24}
        onClick={action("small-clicked")}
      />

      <BackTop
        size="md"
        right={24}
        bottom={80}
        onClick={action("medium-clicked")}
      />

      <BackTop
        size="lg"
        right={24}
        bottom={150}
        onClick={action("large-clicked")}
      />
    </div>
  ),
};

export const DifferentShapes: Story = {
  render: () => (
    <div className="relative">
      <LongContent />

      {/* Circle and square shapes */}
      <BackTop
        shape="circle"
        right={24}
        bottom={24}
        onClick={action("circle-clicked")}
      />

      <BackTop
        shape="square"
        right={24}
        bottom={90}
        onClick={action("square-clicked")}
      />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="relative">
      <LongContent />

      {/* With different text configurations */}
      <BackTop
        text="Back to Top"
        showText
        shape="square"
        right={24}
        bottom={24}
        onClick={action("text-clicked")}
      />

      <BackTop
        text="↑ Top"
        showText
        shape="square"
        size="sm"
        right={24}
        bottom={90}
        onClick={action("arrow-text-clicked")}
      />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div className="relative">
      <LongContent />

      <BackTop
        icon={
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
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        }
        right={24}
        bottom={24}
        onClick={action("custom-icon-clicked")}
      />

      <BackTop
        icon={
          <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">↑</span>
          </div>
        }
        right={24}
        bottom={90}
        onClick={action("gradient-icon-clicked")}
      />
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="relative">
      <LongContent />

      {/* Custom styled buttons */}
      <BackTop
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        right={24}
        bottom={24}
        onClick={action("gradient-clicked")}
      />

      <BackTop
        className="bg-green-500 hover:bg-green-600 border-2 border-white"
        right={24}
        bottom={90}
        size="lg"
        onClick={action("green-clicked")}
      />

      <BackTop
        className="bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25"
        right={24}
        bottom={170}
        shape="square"
        onClick={action("red-clicked")}
      />
    </div>
  ),
};

export const DifferentBehavior: Story = {
  render: () => (
    <div className="relative">
      <div className="space-y-4 p-8">
        <h1 className="text-2xl font-bold">Different Scroll Behaviors</h1>
        <p>
          Try the different BackTop buttons to see various scroll behaviors.
        </p>
      </div>

      <LongContent />

      {/* Different behaviors */}
      <BackTop
        smooth={false}
        text="Instant"
        showText
        shape="square"
        size="sm"
        right={24}
        bottom={24}
        onClick={action("instant-scroll")}
      />

      <BackTop
        smooth={true}
        duration={200}
        text="Fast"
        showText
        shape="square"
        size="sm"
        right={24}
        bottom={80}
        onClick={action("fast-scroll")}
      />

      <BackTop
        smooth={true}
        duration={1000}
        text="Slow"
        showText
        shape="square"
        size="sm"
        right={24}
        bottom={136}
        onClick={action("slow-scroll")}
      />
    </div>
  ),
};

export const LowVisibilityHeight: Story = {
  render: () => (
    <div className="relative">
      <div className="space-y-4 p-8">
        <h1 className="text-2xl font-bold">Low Visibility Height</h1>
        <p>This BackTop button appears after scrolling just 100px.</p>
      </div>

      <LongContent />

      <BackTop
        visibilityHeight={100}
        text="Top"
        showText
        shape="square"
        className="bg-orange-500 hover:bg-orange-600"
        right={24}
        bottom={24}
        onClick={action("low-threshold-clicked")}
      />
    </div>
  ),
};

export const MultipleBackTops: Story = {
  render: () => (
    <div className="relative">
      <div className="space-y-4 p-8">
        <h1 className="text-2xl font-bold">Multiple BackTop Buttons</h1>
        <p>Multiple BackTop buttons with different styles and positions.</p>
      </div>

      <LongContent />

      {/* Main BackTop */}
      <BackTop right={24} bottom={24} onClick={action("main-clicked")} />

      {/* Alternative BackTop with text */}
      <BackTop
        text="↑ Top"
        showText
        shape="square"
        size="sm"
        className="bg-indigo-500 hover:bg-indigo-600"
        right={24}
        bottom={90}
        onClick={action("alt-clicked")}
      />

      {/* Left side BackTop */}
      <BackTop
        right={window.innerWidth - 100} // Left side
        bottom={24}
        size="sm"
        className="bg-emerald-500 hover:bg-emerald-600"
        onClick={action("left-clicked")}
      />
    </div>
  ),
};

export const InScrollableContainer: Story = {
  render: () => {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          BackTop in Scrollable Container
        </h1>
        <div
          className="h-96 overflow-auto bg-secondary-50 rounded-lg relative"
          id="scrollable-container"
        >
          <div className="space-y-6 p-6">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="bg-white rounded p-4 shadow-sm">
                <h3 className="font-semibold mb-2">Item {i + 1}</h3>
                <p className="text-secondary-600 text-sm">
                  This is content inside a scrollable container. The BackTop
                  button will scroll this container instead of the whole page.
                </p>
              </div>
            ))}
          </div>

          <BackTop
            target={() => document.getElementById("scrollable-container")!}
            visibilityHeight={100}
            right={16}
            bottom={16}
            size="sm"
            onClick={action("container-scroll-clicked")}
          />
        </div>
      </div>
    );
  },
};
