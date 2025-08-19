import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Stepper, StepItem } from "./Stepper";
import { Button } from "../Button";

const meta = {
  title: "Navigation/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Stepper untuk menampilkan progress dalam multi-step processes seperti form wizard, checkout process, dan setup wizard. Mendukung orientasi horizontal dan vertikal dengan berbagai status step.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    current: {
      control: { type: "number", min: 0, max: 4 },
      description: "Current active step (0-based index)",
    },
    status: {
      control: { type: "select" },
      options: ["wait", "process", "finish", "error"],
      description: "Status untuk current step",
    },
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Orientasi stepper",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran stepper",
    },
    clickable: {
      control: { type: "boolean" },
      description: "Apakah step bisa diklik untuk navigasi",
    },
    showNumbers: {
      control: { type: "boolean" },
      description: "Apakah menampilkan nomor step",
    },
    connectorType: {
      control: { type: "select" },
      options: ["solid", "dashed", "dotted"],
      description: "Type connector line",
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample steps
const basicSteps: StepItem[] = [
  {
    key: "step1",
    title: "Personal Info",
    description: "Enter your personal information",
  },
  {
    key: "step2",
    title: "Account Details",
    description: "Set up your account",
  },
  {
    key: "step3",
    title: "Payment",
    description: "Choose payment method",
  },
  {
    key: "step4",
    title: "Confirmation",
    description: "Review and confirm",
  },
];

const checkoutSteps: StepItem[] = [
  {
    key: "cart",
    title: "Shopping Cart",
    description: "Review items",
  },
  {
    key: "shipping",
    title: "Shipping",
    description: "Delivery information",
  },
  {
    key: "payment",
    title: "Payment",
    description: "Payment details",
  },
  {
    key: "review",
    title: "Review Order",
    description: "Final review",
  },
  {
    key: "complete",
    title: "Order Complete",
    description: "Order confirmation",
  },
];

export const Default: Story = {
  args: {
    steps: basicSteps,
    current: 1,
    status: "process",
    direction: "horizontal",
    size: "md",
    clickable: false,
    showNumbers: true,
    connectorType: "solid",
    onChange: action("step-changed"),
  },
};

export const Directions: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Horizontal Stepper
        </h3>
        <Stepper
          steps={basicSteps}
          current={2}
          direction="horizontal"
          onChange={action("horizontal-step-changed")}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Vertical Stepper
        </h3>
        <div className="max-w-md">
          <Stepper
            steps={basicSteps}
            current={2}
            direction="vertical"
            onChange={action("vertical-step-changed")}
          />
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Small</h3>
        <Stepper
          steps={basicSteps.slice(0, 3)}
          current={1}
          size="sm"
          onChange={action("small-step-changed")}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Medium
        </h3>
        <Stepper
          steps={basicSteps.slice(0, 3)}
          current={1}
          size="md"
          onChange={action("medium-step-changed")}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Large</h3>
        <Stepper
          steps={basicSteps.slice(0, 3)}
          current={1}
          size="lg"
          onChange={action("large-step-changed")}
        />
      </div>
    </div>
  ),
};

export const StepStatuses: Story = {
  render: () => {
    const statusSteps: StepItem[] = [
      { key: "wait", title: "Waiting", status: "wait" },
      { key: "process", title: "In Progress", status: "process" },
      { key: "finish", title: "Completed", status: "finish" },
      { key: "error", title: "Error", status: "error" },
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Different Step Statuses
          </h3>
          <Stepper
            steps={statusSteps}
            current={1}
            onChange={action("status-step-changed")}
          />
        </div>
      </div>
    );
  },
};

export const WithCustomIcons: Story = {
  render: () => {
    const UserIcon = () => (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    );

    const CreditCardIcon = () => (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path
          fillRule="evenodd"
          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
          clipRule="evenodd"
        />
      </svg>
    );

    const CheckCircleIcon = () => (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    );

    const iconSteps: StepItem[] = [
      {
        key: "profile",
        title: "Profile Setup",
        description: "Basic information",
        icon: <UserIcon />,
      },
      {
        key: "payment",
        title: "Payment Setup",
        description: "Payment method",
        icon: <CreditCardIcon />,
      },
      {
        key: "complete",
        title: "All Set!",
        description: "Setup complete",
        icon: <CheckCircleIcon />,
      },
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Custom Icons - Horizontal
          </h3>
          <Stepper
            steps={iconSteps}
            current={1}
            showNumbers={false}
            onChange={action("icon-horizontal-changed")}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Custom Icons - Vertical
          </h3>
          <div className="max-w-md">
            <Stepper
              steps={iconSteps}
              current={1}
              direction="vertical"
              showNumbers={false}
              onChange={action("icon-vertical-changed")}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const ConnectorTypes: Story = {
  render: () => (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Solid Connector
        </h3>
        <Stepper
          steps={basicSteps.slice(0, 3)}
          current={1}
          connectorType="solid"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Dashed Connector
        </h3>
        <Stepper
          steps={basicSteps.slice(0, 3)}
          current={1}
          connectorType="dashed"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Dotted Connector
        </h3>
        <Stepper
          steps={basicSteps.slice(0, 3)}
          current={1}
          connectorType="dotted"
        />
      </div>
    </div>
  ),
};

export const ClickableNavigation: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Clickable Navigation
          </h3>
          <p className="text-secondary-600 mb-4">
            Click on any step to navigate directly to it.
          </p>
        </div>

        <Stepper
          steps={basicSteps}
          current={currentStep}
          clickable
          onChange={(step) => {
            setCurrentStep(step);
            action("navigation-changed")(step);
          }}
        />

        <div className="flex gap-2 pt-4">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              setCurrentStep(Math.min(basicSteps.length - 1, currentStep + 1))
            }
            disabled={currentStep === basicSteps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const CheckoutProcess: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(2);
    const [stepStatuses, setStepStatuses] = useState<{
      [key: number]: "wait" | "process" | "finish" | "error";
    }>({
      0: "finish",
      1: "finish",
      2: "process",
    });

    const handleNext = () => {
      if (currentStep < checkoutSteps.length - 1) {
        const nextStep = currentStep + 1;
        setStepStatuses((prev) => ({
          ...prev,
          [currentStep]: "finish",
          [nextStep]: "process",
        }));
        setCurrentStep(nextStep);
      }
    };

    const handlePrevious = () => {
      if (currentStep > 0) {
        const prevStep = currentStep - 1;
        setStepStatuses((prev) => ({
          ...prev,
          [currentStep]: "wait",
          [prevStep]: "process",
        }));
        setCurrentStep(prevStep);
      }
    };

    const stepsWithStatus = checkoutSteps.map((step, index) => ({
      ...step,
      status: stepStatuses[index] || "wait",
    }));

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            E-commerce Checkout Process
          </h3>
          <p className="text-secondary-600 mb-6">
            Current Step: {checkoutSteps[currentStep].title}
          </p>
        </div>

        <Stepper
          steps={stepsWithStatus}
          current={currentStep}
          onChange={(step) => {
            setCurrentStep(step);
            action("checkout-step-changed")(step);
          }}
        />

        <div className="bg-secondary-50 p-6 rounded-lg">
          <h4 className="font-medium text-secondary-900 mb-2">
            {checkoutSteps[currentStep].title}
          </h4>
          <p className="text-secondary-600 mb-4">
            {checkoutSteps[currentStep].description}
          </p>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={currentStep === checkoutSteps.length - 1}
            >
              {currentStep === checkoutSteps.length - 1
                ? "Complete Order"
                : "Next"}
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export const FormWizard: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
      plan: "basic",
    });

    const wizardSteps: StepItem[] = [
      {
        key: "personal",
        title: "Personal Info",
        description: "Your basic information",
      },
      {
        key: "company",
        title: "Company Details",
        description: "About your company",
      },
      {
        key: "plan",
        title: "Choose Plan",
        description: "Select subscription plan",
      },
      {
        key: "review",
        title: "Review & Submit",
        description: "Confirm your information",
      },
    ];

    const isStepValid = (step: number) => {
      switch (step) {
        case 0:
          return formData.name && formData.email;
        case 1:
          return formData.company;
        case 2:
          return formData.plan;
        case 3:
          return true;
        default:
          return false;
      }
    };

    const handleNext = () => {
      if (currentStep < wizardSteps.length - 1 && isStepValid(currentStep)) {
        setCurrentStep(currentStep + 1);
      }
    };

    const renderStepContent = () => {
      switch (currentStep) {
        case 0:
          return (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          );
        case 1:
          return (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-3">
                  Choose Your Plan
                </label>
                <div className="space-y-2">
                  {[
                    { id: "basic", name: "Basic - $9/month" },
                    { id: "pro", name: "Pro - $29/month" },
                    { id: "enterprise", name: "Enterprise - $99/month" },
                  ].map((plan) => (
                    <label key={plan.id} className="flex items-center">
                      <input
                        type="radio"
                        name="plan"
                        value={plan.id}
                        checked={formData.plan === plan.id}
                        onChange={(e) =>
                          setFormData({ ...formData, plan: e.target.value })
                        }
                        className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-secondary-600">
                        {plan.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-4">
              <h4 className="font-medium text-secondary-900">
                Review Your Information
              </h4>
              <div className="bg-secondary-50 p-4 rounded-lg space-y-2">
                <div>
                  <strong>Name:</strong> {formData.name}
                </div>
                <div>
                  <strong>Email:</strong> {formData.email}
                </div>
                <div>
                  <strong>Company:</strong> {formData.company}
                </div>
                <div>
                  <strong>Plan:</strong> {formData.plan}
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Account Setup Wizard
          </h3>
        </div>

        <Stepper steps={wizardSteps} current={currentStep} />

        <div className="bg-white border border-secondary-200 rounded-lg p-6">
          <h4 className="font-medium text-secondary-900 mb-4">
            {wizardSteps[currentStep].title}
          </h4>

          {renderStepContent()}

          <div className="flex gap-2 mt-6 pt-4 border-t border-secondary-200">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
            >
              {currentStep === wizardSteps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    steps: basicSteps,
    current: 1,
    status: "process",
    direction: "horizontal",
    size: "md",
    clickable: true,
    showNumbers: true,
    connectorType: "solid",
    onChange: action("step-changed"),
  },
};
