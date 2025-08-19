import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import clsx from "clsx";
import { Image } from "./Image";

const meta = {
  title: "Data Display/Image",
  component: Image,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Image yang canggih dengan lazy loading, error handling, placeholder, fallback, dan preview modal dengan zoom/pan functionality. Optimized untuk performance dan user experience dengan berbagai opsi kustomisasi.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: { type: "text" },
      description: "URL gambar",
    },
    alt: {
      control: { type: "text" },
      description: "Alt text untuk accessibility",
    },
    loading: {
      control: { type: "select" },
      options: ["lazy", "eager"],
      description: "Loading strategy",
    },
    preview: {
      control: { type: "boolean" },
      description: "Apakah menampilkan preview modal",
    },
    width: {
      control: { type: "text" },
      description: "Width gambar",
    },
    height: {
      control: { type: "text" },
      description: "Height gambar",
    },
    objectFit: {
      control: { type: "select" },
      options: ["contain", "cover", "fill", "none", "scale-down"],
      description: "CSS object-fit property",
    },
    objectPosition: {
      control: { type: "text" },
      description: "CSS object-position property",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample image URLs (using placeholder services)
const sampleImages = {
  landscape:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
  portrait:
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=600&fit=crop",
  square:
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
  small:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
  large:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
  cat: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
  city: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop",
  nature:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
};

export const Default: Story = {
  args: {
    src: sampleImages.landscape,
    alt: "Beautiful landscape",
    width: 300,
    height: 200,
    onLoad: action("image-loaded"),
    onError: action("image-error"),
  },
};

export const WithPreview: Story = {
  args: {
    src: sampleImages.large,
    alt: "Large landscape image",
    width: 300,
    height: 200,
    preview: true,
    onLoad: action("image-loaded"),
  },
};

export const LazyLoading: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-secondary-600">
        Scroll down to see lazy loading in action. Images will load when they
        come into view.
      </p>

      {/* Some spacing to require scrolling */}
      <div className="h-96 bg-secondary-50 flex items-center justify-center">
        <p className="text-secondary-500">
          Scroll down to see lazy loaded images
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Lazy Loaded Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={sampleImages.cat}
              alt="Cat"
              width={300}
              height={200}
              loading="lazy"
              onLoad={action("lazy-cat-loaded")}
            />
            <Image
              src={sampleImages.city}
              alt="City"
              width={300}
              height={200}
              loading="lazy"
              onLoad={action("lazy-city-loaded")}
            />
            <Image
              src={sampleImages.nature}
              alt="Nature"
              width={300}
              height={200}
              loading="lazy"
              onLoad={action("lazy-nature-loaded")}
            />
            <Image
              src={sampleImages.landscape}
              alt="Landscape"
              width={300}
              height={200}
              loading="lazy"
              onLoad={action("lazy-landscape-loaded")}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Text Placeholder</h3>
        <Image
          src={sampleImages.landscape}
          alt="Landscape with text placeholder"
          width={300}
          height={200}
          placeholder="Loading image..."
          onLoad={action("placeholder-loaded")}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Custom Placeholder Component
        </h3>
        <Image
          src={sampleImages.portrait}
          alt="Portrait with custom placeholder"
          width={300}
          height={400}
          placeholder={
            <div className="flex flex-col items-center space-y-2 text-secondary-500">
              <div className="animate-spin">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div className="text-sm">Loading beautiful image...</div>
            </div>
          }
          onLoad={action("custom-placeholder-loaded")}
        />
      </div>
    </div>
  ),
};

export const ErrorHandling: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Default Error State</h3>
        <Image
          src="https://invalid-url-that-will-fail.com/image.jpg"
          alt="This image will fail to load"
          width={300}
          height={200}
          onError={action("default-error")}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Custom Fallback</h3>
        <Image
          src="https://another-invalid-url.com/image.jpg"
          alt="This image will also fail"
          width={300}
          height={200}
          fallback={
            <div className="flex flex-col items-center space-y-2 text-red-500">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.846-.5 3.578-1.374 5.06"
                />
              </svg>
              <div className="text-center">
                <div className="font-medium">Oops! Image not found</div>
                <div className="text-sm">
                  Please check the URL and try again
                </div>
              </div>
            </div>
          }
          onError={action("custom-fallback-error")}
        />
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Fixed Sizes</h3>
        <div className="flex items-end space-x-4">
          <Image
            src={sampleImages.square}
            alt="Small square"
            width={100}
            height={100}
          />
          <Image
            src={sampleImages.square}
            alt="Medium square"
            width={150}
            height={150}
          />
          <Image
            src={sampleImages.square}
            alt="Large square"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Responsive Width</h3>
        <Image
          src={sampleImages.landscape}
          alt="Responsive landscape"
          width="100%"
          height={200}
          className="max-w-md"
        />
      </div>
    </div>
  ),
};

export const ObjectFitModes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <h4 className="font-medium mb-2">Cover (Default)</h4>
          <Image
            src={sampleImages.landscape}
            alt="Cover fit"
            width={200}
            height={150}
            objectFit="cover"
            className="border border-secondary-200"
          />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Contain</h4>
          <Image
            src={sampleImages.landscape}
            alt="Contain fit"
            width={200}
            height={150}
            objectFit="contain"
            className="border border-secondary-200 bg-secondary-50"
          />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Fill</h4>
          <Image
            src={sampleImages.landscape}
            alt="Fill fit"
            width={200}
            height={150}
            objectFit="fill"
            className="border border-secondary-200"
          />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Scale Down</h4>
          <Image
            src={sampleImages.small}
            alt="Scale down fit"
            width={200}
            height={150}
            objectFit="scale-down"
            className="border border-secondary-200 bg-secondary-50"
          />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">None</h4>
          <Image
            src={sampleImages.landscape}
            alt="None fit"
            width={200}
            height={150}
            objectFit="none"
            className="border border-secondary-200"
          />
        </div>
      </div>
    </div>
  ),
};

export const ObjectPosition: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-secondary-600">
        Object position controls where the image is positioned within its
        container when using object-fit.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <h4 className="font-medium mb-2">Left</h4>
          <Image
            src={sampleImages.landscape}
            alt="Left positioned"
            width={150}
            height={200}
            objectFit="cover"
            objectPosition="left"
            className="border border-secondary-200"
          />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Center</h4>
          <Image
            src={sampleImages.landscape}
            alt="Center positioned"
            width={150}
            height={200}
            objectFit="cover"
            objectPosition="center"
            className="border border-secondary-200"
          />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Right</h4>
          <Image
            src={sampleImages.landscape}
            alt="Right positioned"
            width={150}
            height={200}
            objectFit="cover"
            objectPosition="right"
            className="border border-secondary-200"
          />
        </div>
      </div>
    </div>
  ),
};

export const InteractiveGallery: Story = {
  render: () => {
    const [selectedImage, setSelectedImage] = useState(sampleImages.landscape);

    const images = [
      { src: sampleImages.landscape, alt: "Landscape", name: "Landscape" },
      { src: sampleImages.cat, alt: "Cat", name: "Cat" },
      { src: sampleImages.city, alt: "City", name: "City" },
      { src: sampleImages.nature, alt: "Nature", name: "Nature" },
    ];

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Interactive Gallery with Preview
          </h3>

          {/* Main image */}
          <div className="mb-4">
            <Image
              src={selectedImage}
              alt="Selected image"
              width={500}
              height={300}
              preview
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-2">
            {images.map((image) => (
              <button
                key={image.src}
                onClick={() => setSelectedImage(image.src)}
                className={clsx(
                  "relative overflow-hidden rounded border-2 transition-colors",
                  selectedImage === image.src
                    ? "border-primary-500"
                    : "border-secondary-200 hover:border-secondary-300"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={60}
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center">
                  {image.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const ControlledLoading: Story = {
  render: () => {
    const [loading, setLoading] = useState<"lazy" | "eager">("lazy");
    const [showImages, setShowImages] = useState(true);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Loading Strategy
            </label>
            <select
              value={loading}
              onChange={(e) => setLoading(e.target.value as "lazy" | "eager")}
              className="px-3 py-1 border border-secondary-300 rounded text-sm"
            >
              <option value="lazy">Lazy</option>
              <option value="eager">Eager</option>
            </select>
          </div>

          <button
            onClick={() => {
              setShowImages(false);
              setTimeout(() => setShowImages(true), 100);
            }}
            className="px-4 py-2 bg-primary-600 text-white rounded text-sm hover:bg-primary-700"
          >
            Reload Images
          </button>
        </div>

        {showImages && (
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={sampleImages.cat}
              alt="Cat"
              width={250}
              height={200}
              loading={loading}
              onLoad={action(`${loading}-cat-loaded`)}
            />
            <Image
              src={sampleImages.city}
              alt="City"
              width={250}
              height={200}
              loading={loading}
              onLoad={action(`${loading}-city-loaded`)}
            />
          </div>
        )}
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Rounded Images</h3>
        <div className="flex space-x-4">
          <Image
            src={sampleImages.square}
            alt="Rounded small"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <Image
            src={sampleImages.square}
            alt="Rounded full"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">With Shadow and Border</h3>
        <Image
          src={sampleImages.landscape}
          alt="Styled image"
          width={300}
          height={200}
          className="rounded-xl shadow-lg border-4 border-white"
          wrapperClassName="inline-block shadow-xl"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Grayscale Hover Effect</h3>
        <Image
          src={sampleImages.nature}
          alt="Hover effect"
          width={300}
          height={200}
          className="grayscale hover:grayscale-0 transition-all duration-300 rounded-lg"
        />
      </div>
    </div>
  ),
};
