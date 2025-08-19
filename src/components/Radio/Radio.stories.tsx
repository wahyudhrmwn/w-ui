import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Radio, RadioGroup } from "./Radio";

// Sample data
const paymentOptions = [
  {
    value: "credit_card",
    label: "Credit Card",
    description: "Pay with your credit or debit card",
  },
  {
    value: "bank_transfer",
    label: "Bank Transfer",
    description: "Transfer directly from your bank account",
  },
  {
    value: "digital_wallet",
    label: "Digital Wallet",
    description: "Use PayPal, GoPay, or other digital wallets",
  },
  {
    value: "cash",
    label: "Cash on Delivery",
    description: "Pay when your order arrives",
    disabled: true,
  },
];

const planOptions = [
  {
    value: "basic",
    label: "Basic Plan",
    description: "Perfect for individuals just getting started",
  },
  {
    value: "pro",
    label: "Pro Plan",
    description: "Best for growing teams and businesses",
  },
  {
    value: "enterprise",
    label: "Enterprise Plan",
    description: "Advanced features for large organizations",
  },
];

const sizeOptions = [
  { value: "xs", label: "Extra Small" },
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large" },
  { value: "xl", label: "Extra Large" },
];

const meta = {
  title: "Form Controls/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Radio untuk pilihan eksklusif dalam sebuah grup. Tersedia sebagai Radio individual atau RadioGroup untuk mengelola multiple options. Mendukung berbagai ukuran, warna, layout direction, dan descriptions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran radio",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      description: "Warna radio ketika aktif",
    },
    label: {
      control: "text",
      description: "Label untuk radio",
    },
    description: {
      control: "text",
      description: "Deskripsi tambahan",
    },
    helperText: {
      control: "text",
      description: "Helper text di bawah radio",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    checked: {
      control: "boolean",
      description: "State checked",
    },
    disabled: {
      control: "boolean",
      description: "Disable radio",
    },
    onChange: { action: "changed" },
  },
  args: {
    onChange: action("changed"),
    label: "Option 1",
    name: "example",
    value: "option1",
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories - Individual Radio
export const Default: Story = {
  args: {
    label: "Default radio option",
    name: "default",
    value: "option",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked radio option",
    name: "checked",
    value: "option",
    checked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Premium Plan",
    description: "Get access to all premium features and priority support",
    name: "plan",
    value: "premium",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled option",
    description: "This option is currently not available",
    name: "disabled",
    value: "option",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked option",
    description: "This option is selected but disabled",
    name: "disabled-checked",
    value: "option",
    checked: true,
    disabled: true,
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small radio",
    description: "Small sized radio button",
    name: "small",
    value: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium radio",
    description: "Medium sized radio button (default)",
    name: "medium",
    value: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large radio",
    description: "Large sized radio button",
    name: "large",
    value: "large",
  },
};

// Color variations
export const Primary: Story = {
  args: {
    color: "primary",
    label: "Primary radio",
    name: "primary",
    value: "primary",
    checked: true,
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    label: "Secondary radio",
    name: "secondary",
    value: "secondary",
    checked: true,
  },
};

export const Success: Story = {
  args: {
    color: "success",
    label: "Success radio",
    name: "success",
    value: "success",
    checked: true,
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    label: "Warning radio",
    name: "warning",
    value: "warning",
    checked: true,
  },
};

export const Error: Story = {
  args: {
    color: "error",
    label: "Error radio",
    name: "error",
    value: "error",
    checked: true,
  },
};

// With helper text and error
export const WithHelperText: Story = {
  args: {
    label: "Subscribe to newsletter",
    description: "Get the latest updates and offers",
    helperText: "We'll never spam your inbox",
    name: "newsletter",
    value: "subscribe",
  },
};

export const WithError: Story = {
  args: {
    label: "Terms and conditions",
    description: "I agree to the terms and conditions",
    error: "You must accept the terms to continue",
    name: "terms",
    value: "accept",
  },
};

// RadioGroup Stories
export const RadioGroupBasic: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState("basic");

    return (
      <RadioGroup
        name="plan"
        label="Choose your plan"
        value={selectedPlan}
        onChange={(value) => {
          setSelectedPlan(value);
          action("plan-changed")(value);
        }}
        options={planOptions}
        helperText="You can upgrade or downgrade at any time"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup dasar dengan beberapa opsi dan descriptions.",
      },
    },
  },
};

export const RadioGroupHorizontal: Story = {
  render: () => {
    const [selectedSize, setSelectedSize] = useState("m");

    return (
      <RadioGroup
        name="size"
        label="Select size"
        value={selectedSize}
        onChange={(value) => {
          setSelectedSize(value);
          action("size-changed")(value);
        }}
        options={sizeOptions}
        direction="horizontal"
        helperText="Choose the size that fits you best"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "RadioGroup dengan layout horizontal untuk opsi yang lebih sederhana.",
      },
    },
  },
};

export const RadioGroupPayment: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState("credit_card");

    return (
      <RadioGroup
        name="payment"
        label="Payment Method"
        value={paymentMethod}
        onChange={(value) => {
          setPaymentMethod(value);
          action("payment-changed")(value);
        }}
        options={paymentOptions}
        size="lg"
        helperText="Select your preferred payment method"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "RadioGroup dengan ukuran large untuk payment method selection dengan disabled option.",
      },
    },
  },
};

// Different colors for RadioGroup
export const RadioGroupColors: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState("primary");

    const colorOptions = [
      { value: "primary", label: "Primary Color" },
      { value: "secondary", label: "Secondary Color" },
      { value: "success", label: "Success Color" },
      { value: "warning", label: "Warning Color" },
      { value: "error", label: "Error Color" },
    ];

    return (
      <RadioGroup
        name="colors"
        label="Select Color Theme"
        value={selectedColor}
        onChange={(value) => {
          setSelectedColor(value);
          action("color-changed")(value);
        }}
        options={colorOptions}
        color={selectedColor as any}
        direction="horizontal"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "RadioGroup yang mendemonstrasikan berbagai warna dengan color yang berubah dynamically.",
      },
    },
  },
};

// Error state for RadioGroup
export const RadioGroupWithError: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState("");

    return (
      <RadioGroup
        name="plan-error"
        label="Choose your plan"
        value={selectedPlan}
        onChange={(value) => {
          setSelectedPlan(value);
          action("plan-error-changed")(value);
        }}
        options={planOptions}
        error={!selectedPlan ? "Please select a plan to continue" : undefined}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "RadioGroup dengan error state ketika tidak ada pilihan yang dipilih.",
      },
    },
  },
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-secondary-900 mb-3">
          Small Size
        </h3>
        <div className="space-y-2">
          <Radio
            size="sm"
            label="Small option 1"
            name="small-group"
            value="1"
          />
          <Radio
            size="sm"
            label="Small option 2"
            name="small-group"
            value="2"
            checked
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-secondary-900 mb-3">
          Medium Size
        </h3>
        <div className="space-y-2">
          <Radio
            size="md"
            label="Medium option 1"
            name="medium-group"
            value="1"
          />
          <Radio
            size="md"
            label="Medium option 2"
            name="medium-group"
            value="2"
            checked
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-secondary-900 mb-3">
          Large Size
        </h3>
        <div className="space-y-2">
          <Radio
            size="lg"
            label="Large option 1"
            name="large-group"
            value="1"
          />
          <Radio
            size="lg"
            label="Large option 2"
            name="large-group"
            value="2"
            checked
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Perbandingan semua ukuran radio yang tersedia.",
      },
    },
  },
};

// Complex form example
export const ComplexForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      plan: "basic",
      payment: "credit_card",
      newsletter: "yes",
      notifications: "email",
    });

    const handleChange = (field: keyof typeof formData) => (value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
      action(`${field}-changed`)(value);
    };

    const newsletterOptions = [
      {
        value: "yes",
        label: "Yes, send me updates",
        description: "Get the latest news and offers",
      },
      {
        value: "no",
        label: "No, thanks",
        description: "I prefer not to receive emails",
      },
    ];

    const notificationOptions = [
      { value: "email", label: "Email notifications" },
      { value: "sms", label: "SMS notifications" },
      { value: "push", label: "Push notifications" },
      { value: "none", label: "No notifications" },
    ];

    return (
      <div className="max-w-2xl space-y-8 p-6 bg-secondary-50 rounded-lg">
        <h2 className="text-xl font-semibold text-secondary-900">
          Account Setup
        </h2>

        <RadioGroup
          name="plan"
          label="Subscription Plan"
          value={formData.plan}
          onChange={handleChange("plan")}
          options={planOptions}
          helperText="You can change your plan anytime"
        />

        <RadioGroup
          name="payment"
          label="Payment Method"
          value={formData.payment}
          onChange={handleChange("payment")}
          options={paymentOptions}
          color="success"
        />

        <RadioGroup
          name="newsletter"
          label="Newsletter Subscription"
          value={formData.newsletter}
          onChange={handleChange("newsletter")}
          options={newsletterOptions}
          size="lg"
        />

        <RadioGroup
          name="notifications"
          label="Notification Preferences"
          value={formData.notifications}
          onChange={handleChange("notifications")}
          options={notificationOptions}
          direction="horizontal"
          color="warning"
        />

        <div className="mt-8 p-4 bg-white rounded border">
          <h3 className="font-medium text-secondary-800 mb-2">
            Selected Options:
          </h3>
          <pre className="text-sm text-secondary-600">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh form kompleks dengan multiple RadioGroup dan berbagai konfigurasi.",
      },
    },
  },
};
