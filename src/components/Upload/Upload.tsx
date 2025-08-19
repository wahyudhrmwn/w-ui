import React from "react";
import { clsx } from "clsx";

export interface UploadFile {
  /**
   * Unique ID untuk file
   */
  id: string;
  /**
   * File object
   */
  file: File;
  /**
   * Status upload
   */
  status: "pending" | "uploading" | "success" | "error";
  /**
   * Progress percentage (0-100)
   */
  progress?: number;
  /**
   * Error message jika ada
   */
  error?: string;
  /**
   * URL preview jika file adalah gambar
   */
  previewUrl?: string;
}

export interface UploadProps {
  /**
   * File types yang diterima
   */
  accept?: string;
  /**
   * Apakah multiple files
   */
  multiple?: boolean;
  /**
   * Maximum file size dalam bytes
   */
  maxSize?: number;
  /**
   * Maximum jumlah file (untuk multiple)
   */
  maxFiles?: number;
  /**
   * Apakah disabled
   */
  disabled?: boolean;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Children untuk custom UI
   */
  children?: React.ReactNode;
  /**
   * Callback ketika file dipilih
   */
  onFilesSelected?: (files: FileList) => void;
  /**
   * Callback untuk custom upload
   */
  onUpload?: (file: File) => Promise<void>;
  /**
   * Callback ketika file dihapus
   */
  onRemove?: (fileId: string) => void;
  /**
   * List file yang sudah diupload (controlled)
   */
  fileList?: UploadFile[];
  /**
   * Callback ketika file list berubah
   */
  onFileListChange?: (files: UploadFile[]) => void;
  /**
   * Apakah menampilkan preview untuk gambar
   */
  showPreview?: boolean;
  /**
   * Apakah drag and drop
   */
  dragAndDrop?: boolean;
  /**
   * Custom text dan labels
   */
  texts?: {
    uploadText?: string;
    dragText?: string;
    selectText?: string;
    maxSizeText?: string;
    typeText?: string;
  };
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const isImageFile = (file: File): boolean => {
  return file.type.startsWith("image/");
};

const createPreviewUrl = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
};

const UploadIcon = () => (
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
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const FileIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
      clipRule="evenodd"
    />
  </svg>
);

const TrashIcon = () => (
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
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

export const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  (
    {
      accept,
      multiple = false,
      maxSize,
      maxFiles,
      disabled = false,
      className,
      children,
      onFilesSelected,
      onUpload,
      onRemove,
      fileList,
      onFileListChange,
      showPreview = true,
      dragAndDrop = true,
      texts = {},
      ...props
    },
    ref
  ) => {
    const [internalFileList, setInternalFileList] = React.useState<
      UploadFile[]
    >([]);
    const [isDragActive, setIsDragActive] = React.useState(false);
    const [dragCounter, setDragCounter] = React.useState(0);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const isControlled = fileList !== undefined;
    const currentFileList = isControlled ? fileList : internalFileList;

    const {
      uploadText = "Click to upload files",
      dragText = "Drag and drop files here",
      selectText = "or select files",
      maxSizeText = maxSize ? `Max file size: ${formatFileSize(maxSize)}` : "",
      typeText = accept ? `Accepted types: ${accept}` : "",
    } = texts;

    const updateFileList = (newFiles: UploadFile[]) => {
      if (!isControlled) {
        setInternalFileList(newFiles);
      }
      onFileListChange?.(newFiles);
    };

    const validateFile = (file: File): string | null => {
      if (maxSize && file.size > maxSize) {
        return `File size exceeds ${formatFileSize(maxSize)}`;
      }

      if (accept) {
        const acceptedTypes = accept.split(",").map((type) => type.trim());
        const isValidType = acceptedTypes.some((type) => {
          if (type.startsWith(".")) {
            return file.name.toLowerCase().endsWith(type.toLowerCase());
          }
          return file.type.match(type.replace("*", ".*"));
        });

        if (!isValidType) {
          return `File type not accepted. Accepted types: ${accept}`;
        }
      }

      if (maxFiles && currentFileList.length >= maxFiles) {
        return `Maximum ${maxFiles} files allowed`;
      }

      return null;
    };

    const handleFiles = async (files: FileList) => {
      if (disabled) return;

      const newFiles: UploadFile[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const validation = validateFile(file);

        if (validation) {
          // Show error for invalid file
          const errorFile: UploadFile = {
            id: `${Date.now()}-${i}`,
            file,
            status: "error",
            error: validation,
          };
          newFiles.push(errorFile);
          continue;
        }

        // Create upload file object
        const uploadFile: UploadFile = {
          id: `${Date.now()}-${i}`,
          file,
          status: onUpload ? "pending" : "success",
          progress: 0,
        };

        // Add preview URL for images
        if (showPreview && isImageFile(file)) {
          uploadFile.previewUrl = await createPreviewUrl(file);
        }

        newFiles.push(uploadFile);
      }

      const updatedFiles = multiple
        ? [...currentFileList, ...newFiles]
        : newFiles;

      updateFileList(updatedFiles);
      onFilesSelected?.(files);

      // Auto-upload if onUpload is provided
      if (onUpload) {
        for (const uploadFile of newFiles) {
          if (uploadFile.status === "pending") {
            try {
              // Update status to uploading
              const uploadingFiles = updatedFiles.map((f) =>
                f.id === uploadFile.id
                  ? { ...f, status: "uploading" as const }
                  : f
              );
              updateFileList(uploadingFiles);

              await onUpload(uploadFile.file);

              // Update status to success
              const successFiles = updatedFiles.map((f) =>
                f.id === uploadFile.id
                  ? { ...f, status: "success" as const, progress: 100 }
                  : f
              );
              updateFileList(successFiles);
            } catch (error) {
              // Update status to error
              const errorFiles = updatedFiles.map((f) =>
                f.id === uploadFile.id
                  ? {
                      ...f,
                      status: "error" as const,
                      error:
                        error instanceof Error
                          ? error.message
                          : "Upload failed",
                    }
                  : f
              );
              updateFileList(errorFiles);
            }
          }
        }
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFiles(e.target.files);
      }
    };

    const handleRemove = (fileId: string) => {
      const updatedFiles = currentFileList.filter((f) => f.id !== fileId);
      updateFileList(updatedFiles);
      onRemove?.(fileId);
    };

    const handleDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragCounter((prev) => prev + 1);
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        setIsDragActive(true);
      }
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragCounter((prev) => prev - 1);
      if (dragCounter <= 1) {
        setIsDragActive(false);
      }
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      setDragCounter(0);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
        e.dataTransfer.clearData();
      }
    };

    const openFileDialog = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    const dragProps = dragAndDrop
      ? {
          onDragEnter: handleDragEnter,
          onDragLeave: handleDragLeave,
          onDragOver: handleDragOver,
          onDrop: handleDrop,
        }
      : {};

    return (
      <div className={clsx("upload-container", className)}>
        {/* Upload Area */}
        <div
          className={clsx(
            "relative border-2 border-dashed rounded-lg transition-colors duration-200",
            isDragActive
              ? "border-primary-500 bg-primary-50"
              : disabled
              ? "border-secondary-300 bg-secondary-50 cursor-not-allowed"
              : "border-secondary-300 hover:border-secondary-400 cursor-pointer",
            "p-6 text-center"
          )}
          onClick={!disabled ? openFileDialog : undefined}
          {...dragProps}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleInputChange}
            disabled={disabled}
            className="sr-only"
            {...props}
          />

          {children || (
            <div className="space-y-2">
              <div
                className={clsx(
                  "mx-auto text-secondary-400",
                  isDragActive && "text-primary-500"
                )}
              >
                <UploadIcon />
              </div>

              <div>
                <div
                  className={clsx(
                    "text-sm font-medium",
                    isDragActive ? "text-primary-600" : "text-secondary-900"
                  )}
                >
                  {isDragActive && dragAndDrop ? dragText : uploadText}
                </div>

                {!isDragActive && dragAndDrop && (
                  <div className="text-sm text-secondary-500 mt-1">
                    {selectText}
                  </div>
                )}
              </div>

              <div className="text-xs text-secondary-500 space-y-1">
                {maxSizeText && <div>{maxSizeText}</div>}
                {typeText && <div>{typeText}</div>}
                {maxFiles && <div>Maximum {maxFiles} files</div>}
              </div>
            </div>
          )}
        </div>

        {/* File List */}
        {currentFileList.length > 0 && (
          <div className="mt-4 space-y-2">
            {currentFileList.map((uploadFile) => (
              <div
                key={uploadFile.id}
                className={clsx(
                  "flex items-center p-3 border rounded-lg",
                  uploadFile.status === "error"
                    ? "border-red-200 bg-red-50"
                    : uploadFile.status === "success"
                    ? "border-green-200 bg-green-50"
                    : "border-secondary-200 bg-secondary-50"
                )}
              >
                {/* File Preview/Icon */}
                <div className="flex-shrink-0 mr-3">
                  {uploadFile.previewUrl ? (
                    <img
                      src={uploadFile.previewUrl}
                      alt={uploadFile.file.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center text-secondary-400">
                      <FileIcon />
                    </div>
                  )}
                </div>

                {/* File Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-secondary-900 truncate">
                    {uploadFile.file.name}
                  </div>
                  <div className="text-xs text-secondary-500">
                    {formatFileSize(uploadFile.file.size)}
                  </div>

                  {/* Status */}
                  <div className="mt-1">
                    {uploadFile.status === "uploading" && (
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-secondary-200 rounded-full h-1">
                          <div
                            className="bg-primary-600 h-1 rounded-full transition-all duration-300"
                            style={{ width: `${uploadFile.progress || 0}%` }}
                          />
                        </div>
                        <span className="text-xs text-primary-600">
                          {uploadFile.progress || 0}%
                        </span>
                      </div>
                    )}

                    {uploadFile.status === "success" && (
                      <span className="text-xs text-green-600">✓ Uploaded</span>
                    )}

                    {uploadFile.status === "error" && (
                      <span className="text-xs text-red-600">
                        ✗ {uploadFile.error}
                      </span>
                    )}
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(uploadFile.id)}
                  className="flex-shrink-0 ml-2 p-1 text-secondary-400 hover:text-red-600 transition-colors"
                  aria-label="Remove file"
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Upload.displayName = "Upload";
