import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Tour, TourStep } from "./Tour";
import { Button } from "../Button";
import { Input } from "../Input";

const meta = {
  title: "Navigation/Tour",
  component: Tour,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Komponen Tour untuk membuat walkthrough dan onboarding yang interaktif. Dilengkapi dengan spotlight mask, positioning otomatis, keyboard navigation, dan berbagai kustomisasi untuk membuat user experience yang engaging.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Apakah tour sedang aktif",
    },
    mask: {
      control: { type: "boolean" },
      description: "Apakah menampilkan mask overlay",
    },
    maskClosable: {
      control: { type: "boolean" },
      description: "Apakah bisa ditutup dengan click mask",
    },
    scrollSmooth: {
      control: { type: "boolean" },
      description: "Apakah menggunakan smooth scroll",
    },
    placement: {
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight",
      ],
      description: "Default placement untuk popup",
    },
    primaryColor: {
      control: { type: "color" },
      description: "Warna primary untuk tour",
    },
  },
} satisfies Meta<typeof Tour>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tour steps
const basicSteps: TourStep[] = [
  {
    target: "#tour-step-1",
    title: "Welcome!",
    description:
      "Welcome to our application! This tour will guide you through the main features.",
    placement: "bottom",
  },
  {
    target: "#tour-step-2",
    title: "Navigation Menu",
    description:
      "Use this navigation menu to access different sections of the application.",
    placement: "right",
  },
  {
    target: "#tour-step-3",
    title: "Search Functionality",
    description:
      "Type here to search for anything in the application. Use filters for more precise results.",
    placement: "bottom",
  },
  {
    target: "#tour-step-4",
    title: "User Profile",
    description:
      "Click here to access your profile settings, notifications, and account preferences.",
    placement: "bottomLeft",
  },
  {
    target: "#tour-step-5",
    title: "Main Content",
    description:
      "This is where you'll spend most of your time. All your content and tools are here.",
    placement: "top",
  },
];

// Demo UI Component
const DemoUI: React.FC = () => (
  <div className="min-h-screen bg-secondary-50">
    {/* Header */}
    <header className="bg-white shadow-sm border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div
              id="tour-step-1"
              className="text-xl font-bold text-primary-600"
            >
              MyApp
            </div>
            <nav
              id="tour-step-2"
              className="hidden md:ml-8 md:flex md:space-x-8"
            >
              <a
                href="#"
                className="text-secondary-700 hover:text-secondary-900"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-secondary-700 hover:text-secondary-900"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-secondary-700 hover:text-secondary-900"
              >
                Team
              </a>
              <a
                href="#"
                className="text-secondary-700 hover:text-secondary-900"
              >
                Reports
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div id="tour-step-3">
              <Input placeholder="Search..." className="w-64" />
            </div>
            <div
              id="tour-step-4"
              className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-medium cursor-pointer"
            >
              JD
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div
        id="tour-step-5"
        className="bg-white rounded-lg shadow-sm p-8 min-h-96"
      >
        <h1 className="text-2xl font-bold text-secondary-900 mb-4">
          Dashboard
        </h1>
        <p className="text-secondary-600 mb-8">
          Welcome to your dashboard. Here you can manage your projects, view
          analytics, and collaborate with your team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Projects</h3>
            <p className="text-blue-700 text-sm">
              Manage your active projects and tasks.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">Analytics</h3>
            <p className="text-green-700 text-sm">
              View performance metrics and insights.
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-2">Team</h3>
            <p className="text-purple-700 text-sm">
              Collaborate with team members.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export const BasicTour: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div className="p-4 bg-white">
          <Button onClick={() => setIsOpen(true)}>Start Tour</Button>
        </div>

        <DemoUI />

        <Tour
          steps={basicSteps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onStepChange={action("step-changed")}
          onFinish={action("tour-finished")}
        />
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div className="p-4 bg-white">
          <Button onClick={() => setIsOpen(true)}>Start Custom Tour</Button>
        </div>

        <DemoUI />

        <Tour
          steps={basicSteps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryColor="#10B981"
          indicatorSize={8}
          onStepChange={action("custom-step-changed")}
          onFinish={action("custom-tour-finished")}
        />
      </div>
    );
  },
};

export const NoMask: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div className="p-4 bg-white">
          <Button onClick={() => setIsOpen(true)}>Start Tour (No Mask)</Button>
        </div>

        <DemoUI />

        <Tour
          steps={basicSteps}
          isOpen={isOpen}
          mask={false}
          onClose={() => setIsOpen(false)}
          onStepChange={action("no-mask-step-changed")}
          onFinish={action("no-mask-tour-finished")}
        />
      </div>
    );
  },
};

export const CustomSteps: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const customSteps: TourStep[] = [
      {
        target: "#custom-step-1",
        title: "🎉 Getting Started",
        description:
          "This is a custom step with emoji and custom button text. Notice how we can customize each step individually.",
        placement: "bottom",
        nextButtonProps: {
          children: "Let's Go!",
        },
        hideSkipButton: true,
      },
      {
        target: "#custom-step-2",
        title: "⚠️ Important Feature",
        description:
          "This step has a custom previous button and shows how you can disable the beacon animation.",
        placement: "right",
        disableBeacon: true,
        prevButtonProps: {
          children: "← Back",
        },
        nextButtonProps: {
          children: "Continue →",
        },
      },
      {
        target: "#custom-step-3",
        title: "🔍 Advanced Options",
        description:
          "This step hides the close button and progress indicators to create a more focused experience.",
        placement: "topRight",
        hideCloseButton: true,
        showProgress: false,
        nextButtonProps: {
          children: "Finish Tutorial",
        },
      },
    ];

    return (
      <div>
        <div className="p-4 bg-white space-y-4">
          <Button onClick={() => setIsOpen(true)}>
            Start Custom Steps Tour
          </Button>

          <div className="flex space-x-4">
            <div id="custom-step-1" className="p-4 bg-blue-100 rounded">
              Custom Step 1
            </div>
            <div id="custom-step-2" className="p-4 bg-green-100 rounded">
              Custom Step 2
            </div>
            <div id="custom-step-3" className="p-4 bg-purple-100 rounded">
              Custom Step 3
            </div>
          </div>
        </div>

        <Tour
          steps={customSteps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryColor="#8B5CF6"
          onStepChange={action("custom-steps-changed")}
          onFinish={action("custom-steps-finished")}
        />
      </div>
    );
  },
};

export const InteractiveTour: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const interactiveSteps: TourStep[] = [
      {
        target: "#interactive-input",
        title: "Try the Input",
        description:
          "Type something in this input field before proceeding to the next step.",
        placement: "bottom",
        nextButtonProps: {
          disabled: false, // You could make this conditional based on input value
        },
      },
      {
        target: "#interactive-button",
        title: "Click the Button",
        description: "Now try clicking this button to see it in action.",
        placement: "top",
      },
      {
        target: "#interactive-result",
        title: "See the Result",
        description:
          "Great! You've completed the interactive tour. The result of your actions is displayed here.",
        placement: "left",
      },
    ];

    const [inputValue, setInputValue] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    return (
      <div className="p-8">
        <div className="space-y-6">
          <Button onClick={() => setIsOpen(true)}>
            Start Interactive Tour
          </Button>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Interactive Input
              </label>
              <Input
                id="interactive-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something here..."
              />
            </div>

            <Button
              id="interactive-button"
              onClick={() => setButtonClicked(true)}
              variant="primary"
            >
              Click Me!
            </Button>

            <div
              id="interactive-result"
              className="p-4 bg-secondary-50 rounded-lg"
            >
              <strong>Result:</strong>
              <div>Input: {inputValue || "(nothing typed)"}</div>
              <div>Button clicked: {buttonClicked ? "Yes" : "No"}</div>
            </div>
          </div>
        </div>

        <Tour
          steps={interactiveSteps}
          isOpen={isOpen}
          currentStepIndex={currentStep}
          onClose={() => {
            setIsOpen(false);
            setCurrentStep(0);
          }}
          onStepChange={setCurrentStep}
          onFinish={() => {
            setCurrentStep(0);
            action("interactive-tour-finished")();
          }}
        />
      </div>
    );
  },
};

export const OnboardingFlow: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
      name: "",
      email: "",
      preferences: false,
    });

    const onboardingSteps: TourStep[] = [
      {
        target: "#onboarding-welcome",
        title: "Welcome to MyApp! 🎉",
        description:
          "We're excited to have you here! Let's set up your account in just a few simple steps.",
        placement: "bottom",
        hideSkipButton: true,
        nextButtonProps: {
          children: "Let's Start!",
        },
      },
      {
        target: "#onboarding-profile",
        title: "Set Up Your Profile",
        description:
          "First, let's add some basic information about you. This helps us personalize your experience.",
        placement: "right",
        nextButtonProps: {
          children: "Continue Setup",
        },
      },
      {
        target: "#onboarding-preferences",
        title: "Choose Your Preferences",
        description:
          "Enable notifications to stay updated with important information and updates from your team.",
        placement: "top",
      },
      {
        target: "#onboarding-complete",
        title: "You're All Set! ✨",
        description:
          "Congratulations! Your account is now configured. Click below to start exploring the platform.",
        placement: "bottom",
        nextButtonProps: {
          children: "Start Exploring!",
        },
      },
    ];

    return (
      <div className="p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <Button onClick={() => setIsOpen(true)}>Start Onboarding</Button>

          <div id="onboarding-welcome" className="text-center py-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-4">
              Welcome to MyApp
            </h1>
            <p className="text-secondary-600">Your journey starts here</p>
          </div>

          <div
            id="onboarding-profile"
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input
                  value={userProfile.name}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, email: e.target.value })
                  }
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          <div
            id="onboarding-preferences"
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={userProfile.preferences}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      preferences: e.target.checked,
                    })
                  }
                  className="mr-3"
                />
                <span>Enable email notifications</span>
              </label>
            </div>
          </div>

          <div
            id="onboarding-complete"
            className="text-center py-8 bg-green-50 rounded-lg"
          >
            <div className="text-4xl mb-4">🎊</div>
            <h2 className="text-2xl font-semibold text-green-900 mb-2">
              Setup Complete!
            </h2>
            <p className="text-green-700">
              You're ready to start using the platform
            </p>
          </div>
        </div>

        <Tour
          steps={onboardingSteps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          maskClosable={false}
          primaryColor="#10B981"
          locale={{
            skip: "Skip Setup",
            finish: "Complete Onboarding",
          }}
          onStepChange={action("onboarding-step-changed")}
          onFinish={action("onboarding-completed")}
        />
      </div>
    );
  },
};

export const ControlledTour: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const controlledSteps: TourStep[] = [
      {
        target: "#controlled-step-1",
        title: "Step 1",
        description:
          "This is the first step of a controlled tour. Use the external controls to navigate.",
        placement: "bottom",
      },
      {
        target: "#controlled-step-2",
        title: "Step 2",
        description:
          "Second step with external navigation controls. Notice how the tour state is managed externally.",
        placement: "right",
      },
      {
        target: "#controlled-step-3",
        title: "Step 3",
        description:
          "Final step of the controlled tour. The parent component manages all the state.",
        placement: "top",
      },
    ];

    return (
      <div className="p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Button onClick={() => setIsOpen(true)}>
              Start Controlled Tour
            </Button>

            {isOpen && (
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                <span className="text-sm">
                  Step {currentStep + 1} of {controlledSteps.length}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    if (currentStep < controlledSteps.length - 1) {
                      setCurrentStep(currentStep + 1);
                    } else {
                      setIsOpen(false);
                      setCurrentStep(0);
                    }
                  }}
                >
                  {currentStep < controlledSteps.length - 1 ? "Next" : "Finish"}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentStep(0);
                  }}
                >
                  Close Tour
                </Button>
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            <div id="controlled-step-1" className="p-6 bg-blue-100 rounded-lg">
              <h3 className="font-semibold">Feature A</h3>
              <p className="text-sm text-secondary-600">
                This is an important feature
              </p>
            </div>
            <div id="controlled-step-2" className="p-6 bg-green-100 rounded-lg">
              <h3 className="font-semibold">Feature B</h3>
              <p className="text-sm text-secondary-600">Another key feature</p>
            </div>
            <div
              id="controlled-step-3"
              className="p-6 bg-purple-100 rounded-lg"
            >
              <h3 className="font-semibold">Feature C</h3>
              <p className="text-sm text-secondary-600">The final feature</p>
            </div>
          </div>
        </div>

        <Tour
          steps={controlledSteps}
          isOpen={isOpen}
          currentStepIndex={currentStep}
          onClose={() => {
            setIsOpen(false);
            setCurrentStep(0);
          }}
          onStepChange={(stepIndex) => {
            setCurrentStep(stepIndex);
            action("controlled-step-changed")(stepIndex);
          }}
          onFinish={() => {
            setIsOpen(false);
            setCurrentStep(0);
            action("controlled-tour-finished")();
          }}
        />
      </div>
    );
  },
};
