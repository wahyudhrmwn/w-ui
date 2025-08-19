import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Progress, CircularProgress, SteppedProgress } from "./Progress";

const meta = {
  title: "Data Display/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Komponen Progress untuk menunjukkan kemajuan loading atau proses. Tersedia dalam bentuk linear progress bar, circular progress, dan stepped progress dengan berbagai ukuran dan styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Nilai progress (0-100)",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Ukuran progress",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      description: "Warna progress",
    },
    variant: {
      control: "select",
      options: ["default", "striped", "animated"],
      description: "Variant progress bar",
    },
    showPercentage: {
      control: "boolean",
      description: "Tampilkan persentase",
    },
    label: {
      control: "text",
      description: "Label text",
    },
  },
  args: {
    value: 60,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Progress Bar stories
export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 60,
    label: "Loading...",
  },
};

export const WithPercentage: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 75,
    label: "Upload Progress",
    showPercentage: true,
  },
};

// Size variations
export const ExtraSmall: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 45,
    size: "xs",
    label: "Extra Small",
  },
};

export const Small: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 45,
    size: "sm",
    label: "Small",
  },
};

export const Medium: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 45,
    size: "md",
    label: "Medium",
  },
};

export const Large: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 45,
    size: "lg",
    label: "Large",
  },
};

export const ExtraLarge: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 45,
    size: "xl",
    label: "Extra Large",
  },
};

// Color variations
export const Primary: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 60,
    color: "primary",
    label: "Primary",
    showPercentage: true,
  },
};

export const Success: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 80,
    color: "success",
    label: "Success",
    showPercentage: true,
  },
};

export const Warning: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 40,
    color: "warning",
    label: "Warning",
    showPercentage: true,
  },
};

export const Error: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 25,
    color: "error",
    label: "Error",
    showPercentage: true,
  },
};

// Variant styles
export const Striped: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 70,
    variant: "striped",
    label: "Striped Progress",
    size: "lg",
  },
};

export const Animated: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 65,
    variant: "animated",
    label: "Animated Progress",
    size: "lg",
  },
};

// Circular Progress stories
export const CircularDefault: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <CircularProgress value={75} showPercentage />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Circular progress dengan persentase di tengah.",
      },
    },
  },
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-8">
      <div className="text-center">
        <CircularProgress value={25} size="xs" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">XS</p>
      </div>
      <div className="text-center">
        <CircularProgress value={50} size="sm" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">SM</p>
      </div>
      <div className="text-center">
        <CircularProgress value={75} size="md" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">MD</p>
      </div>
      <div className="text-center">
        <CircularProgress value={90} size="lg" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">LG</p>
      </div>
      <div className="text-center">
        <CircularProgress value={60} size="xl" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">XL</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Berbagai ukuran circular progress dari XS hingga XL.",
      },
    },
  },
};

export const CircularColors: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-6 p-8">
      <div className="text-center">
        <CircularProgress value={60} color="primary" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Primary</p>
      </div>
      <div className="text-center">
        <CircularProgress value={40} color="secondary" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Secondary</p>
      </div>
      <div className="text-center">
        <CircularProgress value={85} color="success" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Success</p>
      </div>
      <div className="text-center">
        <CircularProgress value={30} color="warning" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Warning</p>
      </div>
      <div className="text-center">
        <CircularProgress value={15} color="error" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Error</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Circular progress dengan berbagai warna.",
      },
    },
  },
};

export const CircularWithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-8">
      <CircularProgress value={75} size="lg" label="3/4" />
      <CircularProgress value={60} size="lg" label="12GB" color="success" />
      <CircularProgress
        value={25}
        size="lg"
        label={
          <div className="text-center">
            <div className="text-lg">⏰</div>
            <div className="text-xs">Loading</div>
          </div>
        }
        color="warning"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Circular progress dengan custom labels di tengah.",
      },
    },
  },
};

// Stepped Progress stories
export const SteppedDefault: Story = {
  render: () => (
    <div className="w-full max-w-2xl p-8">
      <SteppedProgress
        currentStep={2}
        totalSteps={4}
        stepLabels={["Account", "Profile", "Preferences", "Complete"]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Stepped progress untuk wizard atau multi-step process.",
      },
    },
  },
};

export const SteppedSizes: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-2xl p-8">
      <div>
        <h4 className="text-sm font-medium mb-4">Small</h4>
        <SteppedProgress
          currentStep={2}
          totalSteps={3}
          size="sm"
          stepLabels={["Start", "Process", "Done"]}
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Medium</h4>
        <SteppedProgress
          currentStep={2}
          totalSteps={3}
          size="md"
          stepLabels={["Start", "Process", "Done"]}
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Large</h4>
        <SteppedProgress
          currentStep={2}
          totalSteps={3}
          size="lg"
          stepLabels={["Start", "Process", "Done"]}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Berbagai ukuran stepped progress.",
      },
    },
  },
};

// Interactive demos
export const InteractiveProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    React.useEffect(() => {
      let interval: NodeJS.Timeout;

      if (isRunning) {
        interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              setIsRunning(false);
              return 100;
            }
            return prev + 1;
          });
        }, 50);
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }, [isRunning]);

    const handleStart = () => {
      if (progress >= 100) {
        setProgress(0);
      }
      setIsRunning(true);
      action("progress-started")();
    };

    const handleStop = () => {
      setIsRunning(false);
      action("progress-stopped")();
    };

    const handleReset = () => {
      setIsRunning(false);
      setProgress(0);
      action("progress-reset")();
    };

    return (
      <div className="space-y-6 p-8 w-full max-w-2xl">
        <h3 className="text-lg font-semibold">Interactive Progress Demo</h3>

        <div className="space-y-4">
          <Progress
            value={progress}
            label="Auto Progress"
            showPercentage
            size="lg"
            color={progress >= 100 ? "success" : "primary"}
          />

          <div className="flex gap-3">
            <button
              onClick={handleStart}
              disabled={isRunning}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
            >
              {progress >= 100 ? "Restart" : "Start"}
            </button>
            <button
              onClick={handleStop}
              disabled={!isRunning}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
            >
              Stop
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <CircularProgress
            value={progress}
            size="xl"
            showPercentage
            color={progress >= 100 ? "success" : "primary"}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif dengan kontrol start, stop, dan reset. Progress akan berjalan otomatis dari 0-100%.",
      },
    },
  },
};

export const InteractiveSteps: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
      "Account Setup",
      "Personal Info",
      "Verification",
      "Preferences",
      "Complete",
    ];

    const handleNext = () => {
      if (currentStep < steps.length) {
        setCurrentStep((prev) => prev + 1);
        action("step-next")(currentStep + 1);
      }
    };

    const handlePrev = () => {
      if (currentStep > 1) {
        setCurrentStep((prev) => prev - 1);
        action("step-prev")(currentStep - 1);
      }
    };

    const handleReset = () => {
      setCurrentStep(1);
      action("steps-reset")();
    };

    return (
      <div className="space-y-8 p-8 w-full max-w-3xl">
        <h3 className="text-lg font-semibold">Interactive Stepped Progress</h3>

        <SteppedProgress
          currentStep={currentStep}
          totalSteps={steps.length}
          stepLabels={steps}
          size="lg"
          color="primary"
        />

        <div className="text-center">
          <div className="p-6 bg-secondary-50 rounded-lg mb-4">
            <h4 className="font-semibold text-lg mb-2">
              Step {currentStep}: {steps[currentStep - 1]}
            </h4>
            <p className="text-secondary-600">
              {currentStep === 1 &&
                "Set up your account with basic information."}
              {currentStep === 2 &&
                "Fill in your personal details and contact information."}
              {currentStep === 3 &&
                "Verify your email address and phone number."}
              {currentStep === 4 && "Configure your preferences and settings."}
              {currentStep === 5 && "🎉 All done! Your setup is complete."}
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
            >
              {currentStep === steps.length ? "Completed" : "Next"}
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demo interaktif stepped progress dengan navigasi next/previous dan content yang berubah sesuai step.",
      },
    },
  },
};
