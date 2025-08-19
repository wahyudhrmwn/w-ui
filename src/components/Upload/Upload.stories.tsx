import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Upload, UploadFile } from "./Upload";
import { Button } from "../Button";

const meta = {
  title: "Form Controls/Upload",
  component: Upload,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Upload untuk file handling dengan drag & drop functionality. Mendukung validasi file, preview gambar, progress tracking, dan berbagai konfigurasi upload yang fleksibel.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    accept: {
      control: { type: "text" },
      description: "File types yang diterima",
    },
    multiple: {
      control: { type: "boolean" },
      description: "Apakah multiple files",
    },
    maxSize: {
      control: { type: "number" },
      description: "Maximum file size dalam bytes",
    },
    maxFiles: {
      control: { type: "number" },
      description: "Maximum jumlah file",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Apakah disabled",
    },
    showPreview: {
      control: { type: "boolean" },
      description: "Apakah menampilkan preview untuk gambar",
    },
    dragAndDrop: {
      control: { type: "boolean" },
      description: "Apakah drag and drop",
    },
  },
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onFilesSelected: action("files-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed"),
  },
};

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    maxFiles: 5,
    onFilesSelected: action("multiple-files-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed"),
  },
};

export const ImageUpload: Story = {
  args: {
    accept: "image/*",
    multiple: true,
    maxFiles: 4,
    maxSize: 5 * 1024 * 1024, // 5MB
    showPreview: true,
    onFilesSelected: action("images-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed"),
  },
};

export const DocumentUpload: Story = {
  args: {
    accept: ".pdf,.doc,.docx,.txt",
    multiple: true,
    maxSize: 10 * 1024 * 1024, // 10MB
    showPreview: false,
    texts: {
      uploadText: "Upload Documents",
      dragText: "Drop documents here",
      selectText: "or browse files",
      typeText: "PDF, DOC, DOCX, TXT files only",
    },
    onFilesSelected: action("documents-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed"),
  },
};

export const WithFileSizeLimit: Story = {
  args: {
    maxSize: 2 * 1024 * 1024, // 2MB limit
    accept: "image/*,application/pdf",
    multiple: true,
    onFilesSelected: action("files-with-limit-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed"),
  },
};

export const SingleFile: Story = {
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    return (
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Profile Picture Upload
        </h3>
        <Upload
          accept="image/*"
          multiple={false}
          maxSize={3 * 1024 * 1024} // 3MB
          fileList={fileList}
          onFileListChange={(files) => {
            setFileList(files);
            action("profile-file-changed")(files);
          }}
          onFilesSelected={action("profile-file-selected")}
          onRemove={action("profile-file-removed")}
          texts={{
            uploadText: "Upload Profile Picture",
            dragText: "Drop your image here",
            selectText: "or click to select",
            maxSizeText: "Max size: 3MB",
            typeText: "Images only",
          }}
        />

        {fileList.length > 0 && (
          <div className="mt-4 text-sm text-secondary-600">
            Selected: {fileList[0]?.file.name}
          </div>
        )}
      </div>
    );
  },
};

export const WithCustomUpload: Story = {
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    // Simulate upload function
    const mockUpload = async (file: File) => {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate random success/failure
      if (Math.random() > 0.7) {
        throw new Error("Upload failed - server error");
      }

      action("file-uploaded")(file.name);
    };

    return (
      <div className="w-full max-w-lg">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Upload with Progress Tracking
        </h3>
        <Upload
          multiple
          maxFiles={3}
          fileList={fileList}
          onFileListChange={setFileList}
          onUpload={mockUpload}
          onFilesSelected={action("files-with-upload-selected")}
          onRemove={action("file-with-upload-removed")}
          texts={{
            uploadText: "Upload Files",
            dragText: "Drop files for auto-upload",
          }}
        />
      </div>
    );
  },
};

export const CustomUploadArea: Story = {
  render: () => {
    return (
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Custom Upload UI
        </h3>
        <Upload
          accept="image/*"
          multiple
          onFilesSelected={action("custom-files-selected")}
          onFileListChange={action("custom-file-list-changed")}
          onRemove={action("custom-file-removed")}
        >
          <div className="py-12">
            <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div className="text-center">
              <div className="text-lg font-semibold text-secondary-900 mb-2">
                Upload Images
              </div>
              <div className="text-sm text-secondary-500 mb-4">
                Drag and drop your images here or click to browse
              </div>
              <Button variant="primary" size="sm">
                Browse Files
              </Button>
            </div>
          </div>
        </Upload>
      </div>
    );
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    onFilesSelected: action("disabled-files-selected"),
  },
};

export const NoDragDrop: Story = {
  args: {
    dragAndDrop: false,
    multiple: true,
    texts: {
      uploadText: "Click to select files",
      selectText: "(drag and drop disabled)",
    },
    onFilesSelected: action("no-drag-files-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed"),
  },
};

export const FileValidation: Story = {
  render: () => {
    return (
      <div className="space-y-8">
        <div>
          <h4 className="text-md font-medium text-secondary-900 mb-4">
            PDF Files Only (Max 5MB)
          </h4>
          <Upload
            accept="application/pdf"
            maxSize={5 * 1024 * 1024}
            multiple
            onFilesSelected={action("pdf-files-selected")}
            onFileListChange={action("pdf-file-list-changed")}
            texts={{
              uploadText: "Upload PDF Documents",
              typeText: "PDF files only",
              maxSizeText: "Max size: 5MB per file",
            }}
          />
        </div>

        <div>
          <h4 className="text-md font-medium text-secondary-900 mb-4">
            Images Only (Max 2MB, Max 3 files)
          </h4>
          <Upload
            accept="image/*"
            maxSize={2 * 1024 * 1024}
            maxFiles={3}
            multiple
            onFilesSelected={action("image-files-selected")}
            onFileListChange={action("image-file-list-changed")}
            texts={{
              uploadText: "Upload Images",
              typeText: "Images only",
              maxSizeText: "Max size: 2MB per image",
            }}
          />
        </div>

        <div>
          <h4 className="text-md font-medium text-secondary-900 mb-4">
            Code Files Only
          </h4>
          <Upload
            accept=".js,.jsx,.ts,.tsx,.css,.html,.json"
            multiple
            onFilesSelected={action("code-files-selected")}
            onFileListChange={action("code-file-list-changed")}
            texts={{
              uploadText: "Upload Code Files",
              typeText: "JS, JSX, TS, TSX, CSS, HTML, JSON",
            }}
          />
        </div>
      </div>
    );
  },
};

export const RealWorldExample: Story = {
  render: () => {
    const [attachments, setAttachments] = useState<UploadFile[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
      setIsSubmitting(true);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      action("form-submitted")({
        attachments: attachments.map((f) => f.file.name),
      });

      setIsSubmitting(false);
    };

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-secondary-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Submit Support Ticket
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Brief description of the issue"
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Detailed description of the issue..."
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Attachments (Optional)
              </label>
              <Upload
                accept="image/*,.pdf,.doc,.docx,.txt,.log"
                multiple
                maxFiles={5}
                maxSize={10 * 1024 * 1024} // 10MB
                fileList={attachments}
                onFileListChange={(files) => {
                  setAttachments(files);
                  action("attachments-changed")(files);
                }}
                onFilesSelected={action("attachments-selected")}
                onRemove={action("attachment-removed")}
                texts={{
                  uploadText: "Attach Files",
                  dragText: "Drop files here",
                  selectText: "or browse",
                  typeText: "Images, PDF, DOC, TXT, LOG files",
                  maxSizeText: "Max 10MB per file, 5 files total",
                }}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-secondary-200">
              <Button variant="outline">Cancel</Button>
              <Button
                variant="primary"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </Button>
            </div>
          </div>
        </div>

        {attachments.length > 0 && (
          <div className="mt-4 p-4 bg-secondary-50 rounded-lg">
            <div className="text-sm text-secondary-700">
              <strong>Attached Files ({attachments.length}):</strong>
            </div>
            <div className="text-sm text-secondary-600 mt-1">
              {attachments.map((f) => f.file.name).join(", ")}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    accept: "image/*,application/pdf",
    multiple: true,
    maxSize: 5 * 1024 * 1024,
    maxFiles: 3,
    disabled: false,
    showPreview: true,
    dragAndDrop: true,
    onFilesSelected: action("playground-files-selected"),
    onFileListChange: action("playground-file-list-changed"),
    onRemove: action("playground-file-removed"),
  },
};
