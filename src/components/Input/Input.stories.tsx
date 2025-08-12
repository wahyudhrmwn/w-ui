import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "../Button/Button";

// Icons untuk stories
const UserIcon = () => (
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const LockIcon = () => (
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
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const EmailIcon = () => (
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
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
);

const CheckIcon = () => (
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
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const meta = {
  title: "W-UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Input untuk form dengan label, helper text, error state, dan icons. Mendukung semua tipe HTML input.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label untuk input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    helperText: {
      control: "text",
      description: "Helper text di bawah input",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran input",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Tipe input",
    },
    disabled: {
      control: "boolean",
      description: "Disable input",
    },
    leftIcon: {
      control: false,
      description: "Icon di sebelah kiri input",
    },
    rightIcon: {
      control: false,
      description: "Icon di sebelah kanan input",
    },
    onChange: { action: "changed" },
  },
  args: {
    onChange: action("changed"),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic input
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "We will never share your email with anyone.",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email",
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Input",
    placeholder: "Small size",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Input",
    placeholder: "Medium size",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Input",
    placeholder: "Large size",
  },
};

// Input types
export const EmailInput: Story = {
  args: {
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    leftIcon: <EmailIcon />,
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    leftIcon: <LockIcon />,
    helperText: "Password must be at least 8 characters",
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    label: "Age",
    placeholder: "25",
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    leftIcon: <UserIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Verified Email",
    placeholder: "Enter email",
    rightIcon: <CheckIcon />,
    defaultValue: "user@example.com",
  },
};

export const WithBothIcons: Story = {
  args: {
    label: "Search User",
    placeholder: "Search...",
    leftIcon: <UserIcon />,
    rightIcon: <CheckIcon />,
  },
};

// States
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This is disabled",
    disabled: true,
    defaultValue: "Cannot edit this",
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read Only",
    defaultValue: "This is read only",
    readOnly: true,
  },
};

// Form example
export const LoginForm: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input
        type="email"
        label="Email"
        placeholder="your@email.com"
        leftIcon={<EmailIcon />}
        helperText="Use your work email"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter password"
        leftIcon={<LockIcon />}
        helperText="Must be at least 8 characters"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan Input dalam form login.",
      },
    },
  },
};

// Interactive validation example
export const ValidationStates: Story = {
  render: () => {
    const ValidationWrapper = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");

      const emailError =
        email && !email.includes("@")
          ? "Please enter a valid email address"
          : "";
      const passwordError =
        password && password.length < 8
          ? "Password must be at least 8 characters"
          : "";
      const confirmError =
        confirmPassword && password !== confirmPassword
          ? "Passwords do not match"
          : "";

      const handleSubmit = () => {
        if (
          !emailError &&
          !passwordError &&
          !confirmError &&
          email &&
          password &&
          confirmPassword
        ) {
          action("form-valid-submitted")({ email, password });
        } else {
          action("form-invalid-submitted")({
            emailError,
            passwordError,
            confirmError,
          });
        }
      };

      return (
        <div className="w-80 space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError || "Enter a valid email address"}
            rightIcon={email && !emailError ? <CheckIcon /> : undefined}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordError || "Must be at least 8 characters"}
            rightIcon={password && !passwordError ? <CheckIcon /> : undefined}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmError}
            helperText={confirmError || "Re-enter your password"}
            rightIcon={
              confirmPassword && !confirmError ? <CheckIcon /> : undefined
            }
          />
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={
              !email ||
              !password ||
              !confirmPassword ||
              !!emailError ||
              !!passwordError ||
              !!confirmError
            }
            className="w-full"
          >
            Submit
          </Button>
        </div>
      );
    };

    return <ValidationWrapper />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contoh interaktif validasi form dengan real-time feedback. Input akan menampilkan error dan success states berdasarkan nilai yang dimasukkan.",
      },
    },
    controls: { disable: true },
  },
};
