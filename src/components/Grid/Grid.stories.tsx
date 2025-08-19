import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Row, Col, Container, Grid } from "./Grid";

const meta = {
  title: "Layout/Grid",
  component: Row,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Sistem Grid yang powerful dengan Row, Col, dan Container untuk membuat layout responsive. Menggunakan sistem 24-kolom dengan dukungan breakpoint dan flex properties yang fleksibel untuk berbagai kebutuhan layout modern.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    gutter: {
      control: { type: "number" },
      description: "Spacing antar kolom",
    },
    justify: {
      control: { type: "select" },
      options: [
        "start",
        "end",
        "center",
        "space-around",
        "space-between",
        "space-evenly",
      ],
      description: "Horizontal alignment",
    },
    align: {
      control: { type: "select" },
      options: ["top", "middle", "bottom", "stretch"],
      description: "Vertical alignment",
    },
    wrap: {
      control: { type: "boolean" },
      description: "Apakah columns dapat wrap ke baris baru",
    },
  },
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

// Demo box component for visualization
const DemoBox: React.FC<{
  children: React.ReactNode;
  className?: string;
  height?: string;
  style?: React.CSSProperties;
}> = ({ children, className = "", height = "h-12", style }) => (
  <div
    className={`${height} bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-lg shadow-sm flex items-center justify-center font-medium text-primary-700 text-sm transition-all hover:shadow-md ${className}`}
    style={style}
  >
    {children}
  </div>
);

export const BasicGrid: Story = {
  render: () => (
    <div className="space-y-4">
      <Row>
        <Col span={24}>
          <DemoBox>col-24</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <DemoBox>col-12</DemoBox>
        </Col>
        <Col span={12}>
          <DemoBox>col-12</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <DemoBox>col-8</DemoBox>
        </Col>
        <Col span={8}>
          <DemoBox>col-8</DemoBox>
        </Col>
        <Col span={8}>
          <DemoBox>col-8</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <DemoBox>col-6</DemoBox>
        </Col>
        <Col span={6}>
          <DemoBox>col-6</DemoBox>
        </Col>
        <Col span={6}>
          <DemoBox>col-6</DemoBox>
        </Col>
        <Col span={6}>
          <DemoBox>col-6</DemoBox>
        </Col>
      </Row>
    </div>
  ),
};

export const WithGutter: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">No Gutter (Default)</h3>
        <Row>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Small Gutter (8px)</h3>
        <Row gutter={8}>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium Gutter (16px)</h3>
        <Row gutter={16}>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large Gutter (24px)</h3>
        <Row gutter={24}>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Different Gutter [H:16px, V:24px] (with wrap)
        </h3>
        <Row gutter={[16, 24]} className="max-w-2xl">
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <div className="space-y-4">
      <Row>
        <Col span={8}>
          <DemoBox>col-8</DemoBox>
        </Col>
        <Col span={8} offset={8}>
          <DemoBox>col-8 offset-8</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={6} offset={6}>
          <DemoBox>col-6 offset-6</DemoBox>
        </Col>
        <Col span={6} offset={6}>
          <DemoBox>col-6 offset-6</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={12} offset={6}>
          <DemoBox>col-12 offset-6</DemoBox>
        </Col>
      </Row>
    </div>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 bg-secondary-50 rounded">
        <p className="text-sm text-secondary-700 mb-2">
          <strong>Responsive behavior:</strong> Resize your screen to see
          changes
        </p>
        <ul className="text-xs text-secondary-600 space-y-1">
          <li>• xs (default): 1 column (24 span each)</li>
          <li>• sm (640px+): 2 columns (12 span each)</li>
          <li>• md (768px+): 3 columns (8 span each)</li>
          <li>• lg (1024px+): 4 columns (6 span each)</li>
          <li>• xl (1280px+): 6 columns (4 span each)</li>
        </ul>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
      </Row>
    </div>
  ),
};

export const FlexAlignment: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Horizontal Alignment (justify)
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">justify="start"</p>
            <Row justify="start" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">justify="center"</p>
            <Row justify="center" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">justify="end"</p>
            <Row justify="end" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">justify="space-between"</p>
            <Row
              justify="space-between"
              className="bg-secondary-50 p-2 rounded"
            >
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">justify="space-around"</p>
            <Row justify="space-around" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Vertical Alignment (align)
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">align="top"</p>
            <Row align="top" className="bg-secondary-50 p-2 rounded">
              <Col span={8}>
                <DemoBox height="h-8">col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-16">col-8 (tall)</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-12">col-8</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">align="middle"</p>
            <Row align="middle" className="bg-secondary-50 p-2 rounded">
              <Col span={8}>
                <DemoBox height="h-8">col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-16">col-8 (tall)</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-12">col-8</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">align="bottom"</p>
            <Row align="bottom" className="bg-secondary-50 p-2 rounded">
              <Col span={8}>
                <DemoBox height="h-8">col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-16">col-8 (tall)</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-12">col-8</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">align="stretch"</p>
            <Row align="stretch" className="bg-secondary-50 p-2 rounded">
              <Col span={8}>
                <DemoBox className="h-full">col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-16">col-8 (tall)</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox className="h-full">col-8</DemoBox>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColumnOrder: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Column Order</h3>
        <Row>
          <Col span={6} order={4}>
            <DemoBox>1 (order-4)</DemoBox>
          </Col>
          <Col span={6} order={3}>
            <DemoBox>2 (order-3)</DemoBox>
          </Col>
          <Col span={6} order={2}>
            <DemoBox>3 (order-2)</DemoBox>
          </Col>
          <Col span={6} order={1}>
            <DemoBox>4 (order-1)</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Responsive Order</h3>
        <p className="text-sm text-secondary-600 mb-3">
          On mobile: 1,2,3,4 order. On desktop: 4,3,2,1 order.
        </p>
        <Row>
          <Col span={6} xs={{ order: 1 }} lg={{ order: 4 }}>
            <DemoBox>First</DemoBox>
          </Col>
          <Col span={6} xs={{ order: 2 }} lg={{ order: 3 }}>
            <DemoBox>Second</DemoBox>
          </Col>
          <Col span={6} xs={{ order: 3 }} lg={{ order: 2 }}>
            <DemoBox>Third</DemoBox>
          </Col>
          <Col span={6} xs={{ order: 4 }} lg={{ order: 1 }}>
            <DemoBox>Fourth</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
  ),
};

export const FlexColumns: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Flex Auto</h3>
        <Row>
          <Col flex="100px">
            <DemoBox>100px</DemoBox>
          </Col>
          <Col flex="auto">
            <DemoBox>flex: auto</DemoBox>
          </Col>
          <Col flex="100px">
            <DemoBox>100px</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Flex Ratio</h3>
        <Row>
          <Col flex={2}>
            <DemoBox>flex: 2</DemoBox>
          </Col>
          <Col flex={3}>
            <DemoBox>flex: 3</DemoBox>
          </Col>
          <Col flex={1}>
            <DemoBox>flex: 1</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
  ),
};

export const WithContainer: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Container (Fixed Width)</h3>
        <div className="bg-secondary-100 p-4">
          <Container>
            <Row gutter={16}>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Container Fluid (Full Width)
        </h3>
        <div className="bg-secondary-100 p-4">
          <Container fluid>
            <Row gutter={16}>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <Container>
      <div className="space-y-4">
        {/* Header */}
        <Row>
          <Col span={24}>
            <DemoBox className="bg-blue-100 border-blue-300 text-blue-800">
              Header
            </DemoBox>
          </Col>
        </Row>

        {/* Navigation */}
        <Row gutter={16}>
          <Col xs={24} lg={4}>
            <DemoBox
              className="bg-green-100 border-green-300 text-green-800"
              height="h-24"
            >
              Navigation
            </DemoBox>
          </Col>

          <Col xs={24} lg={16}>
            <Row gutter={[0, 16]}>
              <Col span={24}>
                <DemoBox className="bg-yellow-100 border-yellow-300 text-yellow-800">
                  Main Content
                </DemoBox>
              </Col>

              <Col xs={24} md={12}>
                <DemoBox className="bg-purple-100 border-purple-300 text-purple-800">
                  Article 1
                </DemoBox>
              </Col>

              <Col xs={24} md={12}>
                <DemoBox className="bg-purple-100 border-purple-300 text-purple-800">
                  Article 2
                </DemoBox>
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={4}>
            <DemoBox
              className="bg-red-100 border-red-300 text-red-800"
              height="h-40"
            >
              Sidebar
            </DemoBox>
          </Col>
        </Row>

        {/* Footer */}
        <Row>
          <Col span={24}>
            <DemoBox className="bg-secondary-200 border-secondary-400 text-secondary-700">
              Footer
            </DemoBox>
          </Col>
        </Row>
      </div>
    </Container>
  ),
};

export const GridNamespaceUsage: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-secondary-600 mb-4">
        Using the Grid namespace for cleaner imports: Grid.Row, Grid.Col,
        Grid.Container
      </p>

      <Grid.Container>
        <Grid.Row gutter={16}>
          <Grid.Col span={8}>
            <DemoBox>Grid.Col span={8}</DemoBox>
          </Grid.Col>
          <Grid.Col span={8}>
            <DemoBox>Grid.Col span={8}</DemoBox>
          </Grid.Col>
          <Grid.Col span={8}>
            <DemoBox>Grid.Col span={8}</DemoBox>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
  ),
};
