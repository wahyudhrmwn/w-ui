import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Form Controls/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Textarea untuk input teks multiline. Mendukung auto-resize, character counter, berbagai ukuran, dan resize behavior. Cocok untuk input seperti komentar, deskripsi, atau pesan panjang.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran textarea",
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
      description: "Behavior resize textarea",
    },
    label: {
      control: "text",
      description: "Label untuk textarea",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    helperText: {
      control: "text",
      description: "Helper text di bawah textarea",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    autoResize: {
      control: "boolean",
      description: "Auto resize berdasarkan konten",
    },
    showCounter: {
      control: "boolean",
      description: "Tampilkan character counter",
    },
    maxLength: {
      control: "number",
      description: "Maximum characters",
    },
    rows: {
      control: "number",
      description: "Jumlah baris default",
    },
    disabled: {
      control: "boolean",
      description: "Disable textarea",
    },
    onChange: { action: "changed" },
  },
  args: {
    onChange: action("changed"),
    label: "Message",
    placeholder: "Enter your message...",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Description",
    placeholder: "Describe your project in detail...",
    rows: 4,
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "What's on your mind?",
    rows: 3,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled textarea",
    placeholder: "Cannot edit...",
    disabled: true,
    value: "This content cannot be edited",
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small textarea",
    placeholder: "Small sized textarea...",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium textarea",
    placeholder: "Medium sized textarea...",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large textarea",
    placeholder: "Large sized textarea...",
  },
};

// Resize variations
export const ResizeNone: Story = {
  args: {
    label: "No resize",
    placeholder: "This textarea cannot be resized...",
    resize: "none",
    rows: 4,
  },
};

export const ResizeVertical: Story = {
  args: {
    label: "Vertical resize",
    placeholder: "This textarea can be resized vertically...",
    resize: "vertical",
    rows: 4,
  },
};

export const ResizeHorizontal: Story = {
  args: {
    label: "Horizontal resize",
    placeholder: "This textarea can be resized horizontally...",
    resize: "horizontal",
    rows: 4,
  },
};

export const ResizeBoth: Story = {
  args: {
    label: "Resize both",
    placeholder: "This textarea can be resized in both directions...",
    resize: "both",
    rows: 4,
  },
};

// Auto resize
export const AutoResize: Story = {
  args: {
    label: "Auto resize",
    placeholder: "Start typing and watch this textarea grow automatically...",
    autoResize: true,
  },
};

// With counter
export const WithCounter: Story = {
  args: {
    label: "Comment",
    placeholder: "Leave a comment...",
    showCounter: true,
    maxLength: 200,
    helperText: "Share your thoughts (max 200 characters)",
  },
};

export const CounterNoLimit: Story = {
  args: {
    label: "Feedback",
    placeholder: "Your feedback...",
    showCounter: true,
    helperText: "We value your feedback",
  },
};

// With helper text and error
export const WithHelperText: Story = {
  args: {
    label: "Product Description",
    placeholder: "Describe your product...",
    helperText: "Provide a detailed description to attract more customers",
    rows: 5,
  },
};

export const WithError: Story = {
  args: {
    label: "Message",
    placeholder: "Your message...",
    error: "Message is required and must be at least 10 characters",
    value: "Too short",
  },
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Textarea
        size="sm"
        label="Small textarea"
        placeholder="Small sized..."
        onChange={action("small-changed")}
      />
      <Textarea
        size="md"
        label="Medium textarea"
        placeholder="Medium sized..."
        onChange={action("medium-changed")}
      />
      <Textarea
        size="lg"
        label="Large textarea"
        placeholder="Large sized..."
        onChange={action("large-changed")}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran textarea yang tersedia dari small hingga large.",
      },
    },
  },
};

// Interactive form example
export const InteractiveForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      feedback: "",
      description: "",
      notes: "",
    });

    const handleChange =
      (field: keyof typeof formData) =>
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setFormData((prev) => ({
          ...prev,
          [field]: value,
        }));
        action(`${field}-changed`)(value);
      };

    return (
      <div className="space-y-6 p-6 bg-secondary-50 rounded-lg w-96">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          Feedback Form
        </h3>

        <Textarea
          label="Product Feedback"
          placeholder="Tell us what you think about our product..."
          value={formData.feedback}
          onChange={handleChange("feedback")}
          showCounter
          maxLength={500}
          helperText="Your feedback helps us improve"
          rows={4}
        />

        <Textarea
          label="Issue Description"
          placeholder="Describe the issue you're experiencing..."
          value={formData.description}
          onChange={handleChange("description")}
          autoResize
          helperText="Be as detailed as possible"
        />

        <Textarea
          label="Additional Notes"
          placeholder="Any additional information..."
          value={formData.notes}
          onChange={handleChange("notes")}
          showCounter
          resize="none"
          rows={3}
          helperText="Optional field"
        />

        <div className="mt-6 p-4 bg-white rounded border">
          <h4 className="font-medium text-secondary-800 mb-2">Form Data:</h4>
          <div className="space-y-2 text-sm text-secondary-600">
            <div>
              <strong>Feedback:</strong> {formData.feedback.length} chars
            </div>
            <div>
              <strong>Description:</strong> {formData.description.length} chars
            </div>
            <div>
              <strong>Notes:</strong> {formData.notes.length} chars
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh interaktif penggunaan Textarea dalam form feedback. Ketik untuk melihat auto-resize dan character counter bekerja.",
      },
    },
  },
};

// Advanced features demo
export const AdvancedFeatures: Story = {
  render: () => {
    const [content, setContent] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setContent(value);
      setIsValid(value.length >= 10);
      action("content-changed")(value);
    };

    return (
      <div className="space-y-4 w-96">
        <Textarea
          label="Smart Textarea"
          placeholder="This textarea has validation, auto-resize, and smart counter..."
          value={content}
          onChange={handleChange}
          autoResize
          showCounter
          maxLength={300}
          error={
            !isValid && content.length > 0
              ? "Minimum 10 characters required"
              : undefined
          }
          helperText={isValid ? "Looking good!" : undefined}
        />

        <div className="p-3 bg-secondary-100 rounded text-sm">
          <p>
            <strong>Features:</strong>
          </p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Auto-resize as you type</li>
            <li>Character counter with limit</li>
            <li>Real-time validation</li>
            <li>Dynamic helper text/error</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo fitur-fitur advanced textarea termasuk validasi real-time dan smart feedback.",
      },
    },
  },
};
