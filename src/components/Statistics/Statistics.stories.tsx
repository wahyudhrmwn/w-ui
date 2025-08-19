import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { Statistics } from "./Statistics";

const meta = {
  title: "Data Display/Statistics",
  component: Statistics,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Statistics untuk menampilkan angka dan metrics dengan visualisasi yang menarik. Dilengkapi dengan animated counting, trend indicators, berbagai format angka, dan kustomisasi styling yang fleksibel untuk dashboard dan analytics.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number" },
      description: "Nilai angka yang akan ditampilkan",
    },
    title: {
      control: { type: "text" },
      description: "Judul/label untuk statistik",
    },
    animated: {
      control: { type: "boolean" },
      description: "Apakah menggunakan animasi counting",
    },
    trend: {
      control: { type: "select" },
      options: [undefined, "up", "down", "stable"],
      description: "Indikator trend",
    },
    trendValue: {
      control: { type: "number" },
      description: "Nilai persentase trend",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Ukuran komponen",
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "success", "warning", "error", "info"],
      description: "Tema warna",
    },
    layout: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      description: "Layout komponen",
    },
    precision: {
      control: { type: "number", min: 0, max: 4 },
      description: "Jumlah digit desimal",
    },
  },
} satisfies Meta<typeof Statistics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1234,
    title: "Total Users",
  },
};

export const WithAnimation: Story = {
  args: {
    value: 5678,
    title: "Revenue",
    prefix: "$",
    animated: true,
    animationDuration: 2000,
  },
};

export const WithTrend: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Statistics
        value={1234}
        title="Sales"
        trend="up"
        trendValue={12.5}
        trendText="vs last month"
        color="success"
      />

      <Statistics
        value={987}
        title="Orders"
        trend="down"
        trendValue={8.2}
        trendText="vs last week"
        color="error"
      />

      <Statistics
        value={456}
        title="Customers"
        trend="stable"
        trendText="no change"
        color="info"
      />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Statistics size="sm" value={123} title="Users" animated />
          <Statistics
            size="sm"
            value={456}
            title="Sales"
            prefix="$"
            trend="up"
            trendValue={5.2}
          />
          <Statistics
            size="sm"
            value={789}
            title="Orders"
            trend="down"
            trendValue={2.1}
          />
          <Statistics
            size="sm"
            value={321}
            title="Reviews"
            suffix="/5"
            precision={1}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Statistics
            value={12345}
            title="Revenue"
            prefix="$"
            trend="up"
            trendValue={15.8}
            color="success"
            animated
          />
          <Statistics
            value={6789}
            title="Visitors"
            trend="up"
            trendValue={8.4}
            color="primary"
            animated
          />
          <Statistics
            value={2468}
            title="Conversions"
            trend="stable"
            color="info"
            animated
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Statistics
            size="lg"
            value={98765}
            title="Total Revenue"
            prefix="$"
            description="Accumulated since launch"
            trend="up"
            trendValue={23.7}
            trendText="vs last quarter"
            color="success"
            animated
          />
          <Statistics
            size="lg"
            value={54321}
            title="Active Users"
            description="Monthly active users"
            trend="up"
            trendValue={11.2}
            trendText="growth rate"
            color="primary"
            animated
          />
        </div>
      </div>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <Statistics value={1234} title="Default" color="default" animated />

      <Statistics
        value={2345}
        title="Primary"
        color="primary"
        trend="up"
        trendValue={5.2}
        animated
      />

      <Statistics
        value={3456}
        title="Success"
        color="success"
        prefix="$"
        trend="up"
        trendValue={12.8}
        animated
      />

      <Statistics
        value={4567}
        title="Warning"
        color="warning"
        trend="stable"
        animated
      />

      <Statistics
        value={5678}
        title="Error"
        color="error"
        trend="down"
        trendValue={3.4}
        animated
      />

      <Statistics
        value={6789}
        title="Info"
        color="info"
        suffix="%"
        precision={1}
        animated
      />
    </div>
  ),
};

export const WithFormatting: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <Statistics
        value={1234567}
        title="Large Number"
        description="Auto-formatted to M/K"
        animated
      />

      <Statistics
        value={98.567}
        title="Percentage"
        suffix="%"
        precision={2}
        color="success"
        animated
      />

      <Statistics
        value={1234.56}
        title="Currency"
        prefix="$"
        precision={2}
        color="primary"
        animated
      />

      <Statistics
        value={4.8}
        title="Rating"
        suffix=" ★"
        precision={1}
        color="warning"
        formatter={(value) => value.toFixed(1)}
        animated
      />
    </div>
  ),
};

export const CustomFormatter: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Statistics
        value={150}
        title="Time Spent"
        formatter={(value) => {
          const hours = Math.floor(value / 60);
          const minutes = value % 60;
          return `${hours}h ${minutes}m`;
        }}
        color="info"
        animated
      />

      <Statistics
        value={2048000}
        title="File Size"
        formatter={(value) => {
          if (value >= 1024 * 1024)
            return `${(value / (1024 * 1024)).toFixed(1)} MB`;
          if (value >= 1024) return `${(value / 1024).toFixed(1)} KB`;
          return `${value} B`;
        }}
        color="primary"
        animated
      />

      <Statistics
        value={7}
        title="Days Left"
        formatter={(value) =>
          `${Math.floor(value)} ${value === 1 ? "day" : "days"}`
        }
        color="warning"
        animated
      />
    </div>
  ),
};

export const HorizontalLayout: Story = {
  render: () => (
    <div className="space-y-4">
      <Statistics
        layout="horizontal"
        value={12345}
        title="Total Revenue"
        prefix="$"
        description="This month"
        trend="up"
        trendValue={15.2}
        color="success"
        animated
        extra={
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
        }
      />

      <Statistics
        layout="horizontal"
        value={6789}
        title="Active Users"
        description="Online now"
        trend="up"
        trendValue={8.4}
        color="primary"
        animated
        extra={
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        }
      />
    </div>
  ),
};

export const WithExtraContent: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Statistics
        value={8547}
        title="Downloads"
        trend="up"
        trendValue={23.1}
        color="primary"
        animated
        extra={
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded hover:bg-primary-200">
              View Details
            </button>
            <button className="px-3 py-1 text-xs bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200">
              Export
            </button>
          </div>
        }
      />

      <Statistics
        value={92.5}
        title="Satisfaction Score"
        suffix="%"
        precision={1}
        description="Customer feedback"
        color="success"
        animated
        extra={
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: "92.5%" }}
            />
          </div>
        }
      />
    </div>
  ),
};

export const RealTimeData: Story = {
  render: () => {
    const [stats, setStats] = useState({
      visitors: 1234,
      sales: 5678,
      revenue: 12345,
      orders: 987,
    });

    useEffect(() => {
      const interval = setInterval(() => {
        setStats((prev) => ({
          visitors: prev.visitors + Math.floor(Math.random() * 10) - 3,
          sales: prev.sales + Math.floor(Math.random() * 20) - 8,
          revenue: prev.revenue + Math.floor(Math.random() * 100) - 30,
          orders: prev.orders + Math.floor(Math.random() * 5) - 2,
        }));
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Real-time Dashboard</h3>
          <p className="text-sm text-secondary-600">
            Data updates every 3 seconds
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Statistics
            value={stats.visitors}
            title="Visitors"
            color="info"
            animated
            animationDuration={1500}
            trend="up"
            trendValue={Math.round(Math.random() * 10 + 2)}
          />

          <Statistics
            value={stats.sales}
            title="Sales"
            color="success"
            animated
            animationDuration={1500}
            trend={Math.random() > 0.3 ? "up" : "down"}
            trendValue={Math.round(Math.random() * 15 + 5)}
          />

          <Statistics
            value={stats.revenue}
            title="Revenue"
            prefix="$"
            color="primary"
            animated
            animationDuration={1500}
            trend="up"
            trendValue={Math.round(Math.random() * 20 + 10)}
          />

          <Statistics
            value={stats.orders}
            title="Orders"
            color="warning"
            animated
            animationDuration={1500}
            trend={Math.random() > 0.5 ? "up" : "stable"}
            trendValue={Math.round(Math.random() * 8 + 1)}
          />
        </div>
      </div>
    );
  },
};

export const DashboardExample: Story = {
  render: () => (
    <div className="space-y-8 bg-secondary-50 p-8 rounded-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-secondary-900 mb-2">
          Analytics Dashboard
        </h2>
        <p className="text-secondary-600">Key performance indicators</p>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Statistics
          value={125678}
          title="Total Revenue"
          prefix="$"
          description="This quarter"
          trend="up"
          trendValue={18.2}
          trendText="vs last quarter"
          color="success"
          animated
          animationDelay={100}
        />

        <Statistics
          value={45123}
          title="New Customers"
          description="This month"
          trend="up"
          trendValue={12.5}
          trendText="growth"
          color="primary"
          animated
          animationDelay={200}
        />

        <Statistics
          value={8567}
          title="Orders"
          description="Last 30 days"
          trend="up"
          trendValue={6.8}
          color="info"
          animated
          animationDelay={300}
        />

        <Statistics
          value={94.2}
          title="Satisfaction"
          suffix="%"
          precision={1}
          description="Customer rating"
          trend="stable"
          color="success"
          animated
          animationDelay={400}
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <Statistics
          size="sm"
          value={1234}
          title="Page Views"
          trend="up"
          trendValue={5.2}
          animated
          animationDelay={500}
        />

        <Statistics
          size="sm"
          value={456}
          title="Conversions"
          suffix="%"
          precision={1}
          trend="up"
          trendValue={2.1}
          color="success"
          animated
          animationDelay={600}
        />

        <Statistics
          size="sm"
          value={78}
          title="Bounce Rate"
          suffix="%"
          precision={0}
          trend="down"
          trendValue={1.8}
          color="warning"
          animated
          animationDelay={700}
        />

        <Statistics
          size="sm"
          value={234}
          title="Support Tickets"
          trend="down"
          trendValue={12.3}
          color="error"
          animated
          animationDelay={800}
        />

        <Statistics
          size="sm"
          value={567}
          title="Newsletter"
          description="Subscribers"
          trend="up"
          trendValue={8.9}
          color="info"
          animated
          animationDelay={900}
        />

        <Statistics
          size="sm"
          value={89}
          title="Load Time"
          suffix="ms"
          trend="stable"
          color="success"
          animated
          animationDelay={1000}
        />
      </div>
    </div>
  ),
};
