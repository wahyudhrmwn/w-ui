import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Result,
  ResultSuccess,
  ResultError,
  ResultInfo,
  ResultWarning,
  Result404,
  Result403,
  Result500,
  ResultComponents,
} from "./Result";
import { Button } from "../Button";

const meta = {
  title: "Feedback/Result",
  component: Result,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Komponen Result untuk menampilkan feedback setelah user melakukan action atau ketika terjadi error/status tertentu. Dilengkapi dengan berbagai preset untuk success, error, warning, info, dan HTTP status codes seperti 404, 403, 500.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["success", "error", "info", "warning", "404", "403", "500"],
      description: "Status result",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran result",
    },
    title: {
      control: { type: "text" },
      description: "Custom title",
    },
    subTitle: {
      control: { type: "text" },
      description: "Custom subtitle/description",
    },
  },
} satisfies Meta<typeof Result>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "info",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
      <div className="border border-secondary-200 rounded-lg">
        <Result status="success" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="error" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="info" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="warning" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="404" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="403" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="500" size="sm" />
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-12 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">Small</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result size="sm" status="success" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Medium (Default)</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result size="md" status="success" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Large</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result size="lg" status="success" />
        </div>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      <div className="border border-secondary-200 rounded-lg">
        <Result
          status="success"
          title="Payment Successful!"
          subTitle="Your order has been confirmed and will be shipped soon."
          extra={
            <div className="space-y-3">
              <Button variant="primary" size="lg">
                Track Your Order
              </Button>
              <div className="flex space-x-3">
                <Button variant="outline">View Receipt</Button>
                <Button variant="ghost">Continue Shopping</Button>
              </div>
            </div>
          }
        />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result
          status="error"
          title="Payment Failed"
          subTitle="We couldn't process your payment. Please try again or use a different payment method."
          extra={
            <div className="space-y-3">
              <Button variant="primary">Try Again</Button>
              <div className="flex space-x-3">
                <Button variant="outline">Change Payment Method</Button>
                <Button variant="ghost">Contact Support</Button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="border border-secondary-200 rounded-lg">
        <Result
          title="Welcome to Our Platform!"
          subTitle="Your account has been created successfully. Let's get you started with some quick setup steps."
          icon={
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          }
          extra={
            <div className="space-y-4">
              <Button variant="primary" size="lg">
                Start Setup
              </Button>
              <p className="text-sm text-secondary-600">
                This will only take a few minutes to complete
              </p>
            </div>
          }
        />
      </div>
    </div>
  ),
};

export const ErrorPages: Story = {
  render: () => (
    <div className="space-y-12 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">404 - Page Not Found</h3>
        <div className="min-h-96 bg-secondary-50 rounded-lg">
          <Result404
            title="Oops! Page not found"
            subTitle="The page you're looking for doesn't exist or has been moved."
            extra={
              <div className="space-y-4">
                <Button variant="primary" size="lg">
                  Go Home
                </Button>
                <div className="flex space-x-3">
                  <Button variant="outline">Go Back</Button>
                  <Button variant="ghost">Contact Support</Button>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">403 - Access Forbidden</h3>
        <div className="min-h-96 bg-secondary-50 rounded-lg">
          <Result403
            title="Access Denied"
            subTitle="You don't have permission to access this resource. Contact your administrator if you think this is a mistake."
            extra={
              <div className="space-y-4">
                <Button variant="primary">Request Access</Button>
                <div className="flex space-x-3">
                  <Button variant="outline">Go Back</Button>
                  <Button variant="ghost">Login with Different Account</Button>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">500 - Server Error</h3>
        <div className="min-h-96 bg-secondary-50 rounded-lg">
          <Result500
            title="Server Error"
            subTitle="Something went wrong on our end. Our team has been notified and is working to fix this issue."
            extra={
              <div className="space-y-4">
                <Button variant="primary">Try Again</Button>
                <div className="flex space-x-3">
                  <Button variant="outline">Report Issue</Button>
                  <Button variant="ghost">Check Status</Button>
                </div>
                <p className="text-xs text-secondary-500">
                  Error ID: ERR_2024_001234 • {new Date().toLocaleString()}
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  ),
};

export const PresetComponents: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-3">ResultSuccess</h4>
          <div className="border border-secondary-200 rounded-lg">
            <ResultSuccess
              size="sm"
              extra={
                <Button size="sm" variant="primary">
                  Continue
                </Button>
              }
            />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">ResultError</h4>
          <div className="border border-secondary-200 rounded-lg">
            <ResultError
              size="sm"
              extra={
                <Button size="sm" variant="primary">
                  Try Again
                </Button>
              }
            />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">ResultInfo</h4>
          <div className="border border-secondary-200 rounded-lg">
            <ResultInfo
              size="sm"
              extra={
                <Button size="sm" variant="outline">
                  Learn More
                </Button>
              }
            />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">ResultWarning</h4>
          <div className="border border-secondary-200 rounded-lg">
            <ResultWarning
              size="sm"
              extra={
                <Button size="sm" variant="primary">
                  Acknowledge
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-12 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">
          E-commerce Checkout Success
        </h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result
            status="success"
            title="Order Placed Successfully!"
            subTitle="Thank you for your purchase. We've sent a confirmation email with your order details."
            extra={
              <div className="space-y-6">
                <div className="bg-secondary-50 rounded-lg p-4 max-w-md mx-auto">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Order Number:</div>
                    <div>#ORD-2024-001234</div>
                    <div className="font-medium">Total Amount:</div>
                    <div>$149.99</div>
                    <div className="font-medium">Estimated Delivery:</div>
                    <div>3-5 business days</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button variant="primary" size="lg">
                    Track Your Order
                  </Button>
                  <div className="flex space-x-3">
                    <Button variant="outline">Download Receipt</Button>
                    <Button variant="ghost">Continue Shopping</Button>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Form Submission Error</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result
            status="error"
            title="Submission Failed"
            subTitle="We encountered some issues while processing your form. Please review the errors below and try again."
            extra={
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto text-left">
                  <h4 className="font-medium text-red-800 mb-2">
                    Issues found:
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Email address is already in use</li>
                    <li>• Password must be at least 8 characters</li>
                    <li>• Phone number format is invalid</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <Button variant="primary">Fix Issues and Retry</Button>
                  <Button variant="ghost">Contact Support</Button>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Maintenance Mode</h3>
        <div className="min-h-96 bg-yellow-50 rounded-lg">
          <Result
            status="warning"
            title="Scheduled Maintenance"
            subTitle="We're currently performing scheduled maintenance to improve our service. We'll be back online soon."
            extra={
              <div className="space-y-6">
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-md mx-auto">
                  <div className="text-sm text-yellow-800">
                    <div className="font-medium mb-1">Expected Duration:</div>
                    <div>2 hours (until 3:00 AM PST)</div>
                    <div className="font-medium mt-3 mb-1">Status Updates:</div>
                    <div>Follow @status for real-time updates</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button variant="primary">Check Status Page</Button>
                  <Button variant="outline">Subscribe to Updates</Button>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Account Verification</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result
            status="info"
            title="Verify Your Email"
            subTitle="We've sent a verification link to your email address. Please click the link to activate your account."
            extra={
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto text-sm">
                  <div className="text-blue-800">
                    <div className="font-medium mb-1">Sent to:</div>
                    <div className="font-mono bg-blue-100 px-2 py-1 rounded">
                      user@example.com
                    </div>
                    <div className="font-medium mt-3 mb-1">
                      Didn't receive the email?
                    </div>
                    <div>Check your spam folder or try resending</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button variant="primary">Resend Verification Email</Button>
                  <div className="flex space-x-3">
                    <Button variant="outline">Change Email Address</Button>
                    <Button variant="ghost">Contact Support</Button>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  ),
};

export const NamespaceUsage: Story = {
  render: () => (
    <div className="space-y-4 p-8">
      <p className="text-sm text-secondary-600 mb-4">
        Using ResultComponents namespace for all result-related components
      </p>

      <div className="border border-secondary-200 rounded-lg">
        <ResultComponents.ResultSuccess
          size="sm"
          extra={
            <Button variant="primary" size="sm">
              Continue
            </Button>
          }
        />
      </div>
    </div>
  ),
};
