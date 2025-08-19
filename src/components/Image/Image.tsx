import React, { useState, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";

export interface ImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "onError" | "onLoad" | "placeholder"
  > {
  // Basic props
  src: string;
  alt: string;

  // Loading and placeholder
  placeholder?: React.ReactNode | string;
  fallback?: React.ReactNode | string;
  loading?: "lazy" | "eager";

  // Preview and zoom
  preview?: boolean;
  previewSrc?: string;

  // Error handling
  onError?: (error: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;

  // Lazy loading
  rootMargin?: string;
  threshold?: number;

  // Styling
  width?: string | number;
  height?: string | number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  objectPosition?: string;

  // Wrapper props
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;

  className?: string;
  style?: React.CSSProperties;
}

const ImagePreview: React.FC<{
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ src, alt, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.max(0.1, Math.min(3, prev + delta)));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsDragging(true);
      setLastPosition({ x: e.clientX, y: e.clientY });
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - lastPosition.x;
        const deltaY = e.clientY - lastPosition.y;
        setPosition((prev) => ({ x: prev.x + deltaX, y: prev.y + deltaY }));
        setLastPosition({ x: e.clientX, y: e.clientY });
      }
    },
    [isDragging, lastPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleReset = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Keyboard event listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      {/* Toolbar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 rounded-lg px-4 py-2 flex items-center space-x-2 z-10">
        <button
          onClick={() => setScale((prev) => Math.max(0.1, prev - 0.2))}
          className="text-white hover:text-secondary-300 transition-colors p-1"
          title="Zoom Out"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
            />
          </svg>
        </button>

        <span className="text-white text-sm font-medium min-w-16 text-center">
          {Math.round(scale * 100)}%
        </span>

        <button
          onClick={() => setScale((prev) => Math.min(3, prev + 0.2))}
          className="text-white hover:text-secondary-300 transition-colors p-1"
          title="Zoom In"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </button>

        <div className="w-px h-6 bg-secondary-600" />

        <button
          onClick={handleReset}
          className="text-white hover:text-secondary-300 transition-colors p-1"
          title="Reset"
        >
          <svg
            className="w-5 h-5"
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
        </button>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-secondary-300 transition-colors z-10"
        title="Close (Esc)"
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

      {/* Image container */}
      <div
        className="relative cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-w-none select-none"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${
              position.y / scale
            }px)`,
            transition: isDragging ? "none" : "transform 0.1s ease-out",
          }}
        />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 rounded-lg px-4 py-2 text-white text-sm text-center">
        <div>Mouse wheel to zoom • Click and drag to move • ESC to close</div>
      </div>
    </div>
  );
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  placeholder,
  fallback,
  loading = "lazy",
  preview = false,
  previewSrc,
  onError,
  onLoad,
  rootMargin = "50px",
  threshold = 0.01,
  width,
  height,
  objectFit = "cover",
  objectPosition = "center",
  wrapperClassName,
  wrapperStyle,
  className,
  style,
  ...props
}) => {
  const [imageState, setImageState] = useState<"loading" | "loaded" | "error">(
    "loading"
  );
  const [isIntersecting, setIsIntersecting] = useState(loading === "eager");
  const [previewOpen, setPreviewOpen] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === "eager") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, [loading, rootMargin, threshold]);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setImageState("loaded");
      onLoad?.(e);
    },
    [onLoad]
  );

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setImageState("error");
      onError?.(e);
    },
    [onError]
  );

  const handlePreviewClick = useCallback(() => {
    if (preview && imageState === "loaded") {
      setPreviewOpen(true);
    }
  }, [preview, imageState]);

  const shouldLoad = loading === "eager" || isIntersecting;
  const displaySrc = shouldLoad ? src : "";
  const showPlaceholder = !shouldLoad || imageState === "loading";
  const showFallback = imageState === "error";
  const showImage = shouldLoad && imageState === "loaded";

  const imageStyles: React.CSSProperties = {
    width,
    height,
    objectFit,
    objectPosition,
    ...style,
  };

  const wrapperStyles: React.CSSProperties = {
    width: width || "auto",
    height: height || "auto",
    ...wrapperStyle,
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className={clsx(
          "relative inline-block overflow-hidden",
          {
            "cursor-pointer": preview && imageState === "loaded",
          },
          wrapperClassName
        )}
        style={wrapperStyles}
        onClick={handlePreviewClick}
      >
        {/* Placeholder */}
        {showPlaceholder && (
          <div
            className={clsx(
              "absolute inset-0 flex items-center justify-center bg-secondary-100",
              typeof placeholder === "string"
                ? "text-secondary-500 text-sm"
                : ""
            )}
            style={imageStyles}
          >
            {placeholder || (
              <div className="flex flex-col items-center space-y-2">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {loading === "lazy" && !isIntersecting && (
                  <div className="text-xs text-secondary-400">Loading...</div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Fallback */}
        {showFallback && (
          <div
            className={clsx(
              "absolute inset-0 flex items-center justify-center bg-secondary-100",
              typeof fallback === "string" ? "text-secondary-500 text-sm" : ""
            )}
            style={imageStyles}
          >
            {fallback || (
              <div className="flex flex-col items-center space-y-2">
                <svg
                  className="w-8 h-8 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.634 0L4.18 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <div className="text-xs text-red-500">Failed to load</div>
              </div>
            )}
          </div>
        )}

        {/* Image */}
        {shouldLoad && (
          <img
            ref={imgRef}
            src={displaySrc}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={clsx(
              "transition-opacity duration-300",
              {
                "opacity-0": !showImage,
                "opacity-100": showImage,
              },
              className
            )}
            style={imageStyles}
            {...props}
          />
        )}

        {/* Preview indicator */}
        {preview && imageState === "loaded" && (
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 rounded-full p-2">
              <svg
                className="w-6 h-6 text-secondary-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {preview && (
        <ImagePreview
          src={previewSrc || src}
          alt={alt}
          isOpen={previewOpen}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </>
  );
};
