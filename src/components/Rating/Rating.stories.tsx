import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Rating } from "./Rating";

const meta = {
  title: "Form Controls/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Rating untuk menampilkan dan mengumpulkan rating dari user. Mendukung star rating dengan berbagai kustomisasi termasuk half rating, custom icons, dan berbagai ukuran.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
      description: "Nilai rating saat ini",
    },
    defaultValue: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
      description: "Nilai default rating",
    },
    count: {
      control: { type: "number", min: 3, max: 10 },
      description: "Jumlah total star/icon",
    },
    allowHalf: {
      control: { type: "boolean" },
      description: "Apakah mendukung half rating",
    },
    allowClear: {
      control: { type: "boolean" },
      description: "Apakah rating bisa diubah (interactive)",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah dalam mode read-only",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran rating",
    },
    color: {
      control: { type: "select" },
      options: ["yellow", "red", "blue", "green", "purple"],
      description: "Warna rating",
    },
    showTooltip: {
      control: { type: "boolean" },
      description: "Apakah menampilkan tooltip",
    },
    showText: {
      control: { type: "boolean" },
      description: "Apakah menampilkan nilai rating sebagai text",
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 3,
    count: 5,
    onChange: action("rating-changed"),
    onHover: action("rating-hovered"),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-secondary-700">Small</h3>
        <Rating defaultValue={3} size="sm" onChange={action("small-changed")} />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-secondary-700">
          Medium (Default)
        </h3>
        <Rating
          defaultValue={3}
          size="md"
          onChange={action("medium-changed")}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-secondary-700">Large</h3>
        <Rating defaultValue={3} size="lg" onChange={action("large-changed")} />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Yellow:</span>
        <Rating
          defaultValue={4}
          color="yellow"
          onChange={action("yellow-changed")}
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Red:</span>
        <Rating defaultValue={4} color="red" onChange={action("red-changed")} />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Blue:</span>
        <Rating
          defaultValue={4}
          color="blue"
          onChange={action("blue-changed")}
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Green:</span>
        <Rating
          defaultValue={4}
          color="green"
          onChange={action("green-changed")}
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Purple:</span>
        <Rating
          defaultValue={4}
          color="purple"
          onChange={action("purple-changed")}
        />
      </div>
    </div>
  ),
};

export const HalfRating: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Half Rating Enabled
        </h3>
        <Rating
          defaultValue={3.5}
          allowHalf
          onChange={action("half-rating-changed")}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Different Half Values
        </h3>
        <div className="space-y-2">
          <Rating value={1.5} allowHalf disabled />
          <Rating value={2.5} allowHalf disabled />
          <Rating value={4.5} allowHalf disabled />
        </div>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Default Text Labels
        </h3>
        <Rating
          defaultValue={3}
          showText
          onChange={action("text-rating-changed")}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Custom Text Labels
        </h3>
        <Rating
          defaultValue={2}
          showText
          texts={[
            "😢 Buruk",
            "😐 Kurang",
            "🙂 Cukup",
            "😊 Bagus",
            "🤩 Sangat Bagus",
          ]}
          onChange={action("custom-text-changed")}
        />
      </div>
    </div>
  ),
};

export const WithTooltips: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Hover to see tooltips
        </h3>
        <Rating
          defaultValue={0}
          showTooltip
          tooltips={[
            "Sangat Buruk",
            "Buruk",
            "Biasa Saja",
            "Bagus",
            "Luar Biasa",
          ]}
          onChange={action("tooltip-rating-changed")}
          onHover={action("tooltip-hovered")}
        />
      </div>
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => {
    const HeartIcon = ({ filled }: { filled?: boolean }) => (
      <svg
        className="w-full h-full"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    );

    const ThumbsUpIcon = ({ filled }: { filled?: boolean }) => (
      <svg
        className="w-full h-full"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    );

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            Heart Icons
          </h3>
          <Rating
            defaultValue={4}
            character={<HeartIcon />}
            color="red"
            onChange={action("heart-rating-changed")}
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            Thumbs Up Icons
          </h3>
          <Rating
            defaultValue={3}
            character={<ThumbsUpIcon />}
            color="blue"
            onChange={action("thumbs-rating-changed")}
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            Text Characters
          </h3>
          <Rating
            defaultValue={2}
            character="👍"
            size="lg"
            onChange={action("emoji-rating-changed")}
          />
        </div>
      </div>
    );
  },
};

export const ReadOnlyStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Read-only Ratings
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="w-12 text-sm text-secondary-600">1.0:</span>
            <Rating value={1} disabled />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-12 text-sm text-secondary-600">2.5:</span>
            <Rating value={2.5} allowHalf disabled />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-12 text-sm text-secondary-600">4.0:</span>
            <Rating value={4} disabled />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-12 text-sm text-secondary-600">4.8:</span>
            <Rating value={4.8} allowHalf disabled showText />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CustomCounts: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">3 Stars:</span>
        <Rating
          defaultValue={2}
          count={3}
          onChange={action("3-star-changed")}
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">7 Stars:</span>
        <Rating
          defaultValue={4}
          count={7}
          onChange={action("7-star-changed")}
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">10 Stars:</span>
        <Rating
          defaultValue={8}
          count={10}
          size="sm"
          onChange={action("10-star-changed")}
        />
      </div>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    const [halfRating, setHalfRating] = useState(0);

    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-medium text-secondary-700">
            Interactive Rating Demo
          </h3>

          <div className="space-y-2">
            <p className="text-sm text-secondary-600">
              Current Rating: <span className="font-semibold">{rating}</span>
            </p>
            <Rating
              value={rating}
              onChange={(value) => {
                setRating(value);
                action("interactive-rating-changed")(value);
              }}
              showText
              size="lg"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-secondary-600">
              Half Rating: <span className="font-semibold">{halfRating}</span>
            </p>
            <Rating
              value={halfRating}
              onChange={(value) => {
                setHalfRating(value);
                action("interactive-half-rating-changed")(value);
              }}
              allowHalf
              showText
              texts={["😢", "😔", "😐", "🙂", "😊"]}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const AllowClear: Story = {
  render: () => {
    const [rating1, setRating1] = useState(3);
    const [rating2, setRating2] = useState(3);

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            Allow Clear (click same star to clear)
          </h3>
          <p className="text-sm text-secondary-600 mb-2">
            Current: {rating1} - Click the same star to clear
          </p>
          <Rating value={rating1} onChange={setRating1} allowClear showText />
        </div>

        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            No Clear (normal behavior)
          </h3>
          <p className="text-sm text-secondary-600 mb-2">Current: {rating2}</p>
          <Rating
            value={rating2}
            onChange={setRating2}
            allowClear={false}
            showText
          />
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    defaultValue: 3,
    count: 5,
    allowHalf: false,
    allowClear: true,
    disabled: false,
    size: "md",
    color: "yellow",
    showTooltip: false,
    showText: false,
    onChange: action("rating-changed"),
    onHover: action("rating-hovered"),
  },
};
