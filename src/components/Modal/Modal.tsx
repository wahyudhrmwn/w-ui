"use client";

import React, { useEffect } from "react";
import { clsx } from "clsx";

export interface ModalProps {
  /**
   * Apakah modal terbuka
   */
  open: boolean;
  /**
   * Callback ketika modal ditutup
   */
  onClose: () => void;
  /**
   * Ukuran modal
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * Apakah modal bisa ditutup dengan klik overlay
   */
  closeOnOverlayClick?: boolean;
  /**
   * Apakah modal bisa ditutup dengan ESC key
   */
  closeOnEscape?: boolean;
  /**
   * Konten modal
   */
  children: React.ReactNode;
  /**
   * Custom className untuk modal content
   */
  className?: string;
  /**
   * Render modal inline (untuk Storybook docs)
   */
  inline?: boolean;
}

const modalSizes = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-full mx-4",
};

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  children,
  className,
  inline = false,
}) => {
  // Handle ESC key and body scroll lock (skip in inline docs mode)
  useEffect(() => {
    if (inline) return; // Do not lock scroll or bind ESC in inline render (Docs mode)
    if (!closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    let didLockBody = false;
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      didLockBody = true;
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      if (didLockBody) {
        document.body.style.overflow = "unset";
      }
    };
  }, [open, onClose, closeOnEscape, inline]);

  if (!open) return null;

  // Inline rendering untuk Storybook docs
  if (inline) {
    return (
      <div className="relative">
        <div
          className={clsx(
            // Base styles
            "relative w-full transform rounded-lg bg-white shadow-xl border",

            // Size styles
            modalSizes[size],

            // Custom className
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={clsx(
            // Base styles
            "relative w-full transform rounded-lg bg-white shadow-xl transition-all",

            // Size styles
            modalSizes[size],

            // Custom className
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// Modal sub-components
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Apakah menampilkan tombol close
   */
  showCloseButton?: boolean;
  /**
   * Callback untuk tombol close
   */
  onClose?: () => void;
}

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ showCloseButton = true, onClose, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "flex items-center justify-between p-6 border-b border-secondary-200",
          className
        )}
        {...props}
      >
        <div className="flex-1">{children}</div>

        {showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-secondary-400 hover:text-secondary-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

ModalHeader.displayName = "ModalHeader";

export interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("p-6", className)} {...props}>
        {children}
      </div>
    );
  }
);

ModalContent.displayName = "ModalContent";

export interface ModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "flex items-center justify-end gap-3 p-6 border-t border-secondary-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalFooter.displayName = "ModalFooter";
