import React, { useRef, useEffect, useMemo } from "react";
import clsx from "clsx";

export interface WatermarkProps {
  children: React.ReactNode;

  // Content
  content?: string | string[];
  image?: string;

  // Styling
  width?: number;
  height?: number;
  rotate?: number;
  zIndex?: number;

  // Text styling (when using content)
  fontColor?: string;
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: "normal" | "italic" | "oblique";
  fontWeight?: "normal" | "light" | "weight" | "bold" | number;
  fontVariant?: string;

  // Layout
  gap?: [number, number]; // [x, y] gaps between watermarks
  offset?: [number, number]; // [x, y] offset from top-left

  // Opacity
  opacity?: number;

  className?: string;
  style?: React.CSSProperties;
}

const toDataURL = (
  content: string | string[],
  width: number,
  height: number,
  options: {
    rotate: number;
    fontColor: string;
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
    fontWeight: string | number;
    fontVariant: string;
    opacity: number;
  }
): string => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  const ratio = window.devicePixelRatio || 1;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  ctx.scale(ratio, ratio);

  const markWidth = width;
  const markHeight = height;

  ctx.clearRect(0, 0, markWidth, markHeight);

  // Set text properties
  ctx.globalAlpha = options.opacity;
  ctx.fillStyle = options.fontColor;
  ctx.font = `${options.fontStyle} ${options.fontVariant} ${options.fontWeight} ${options.fontSize}px ${options.fontFamily}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Apply rotation
  const centerX = markWidth / 2;
  const centerY = markHeight / 2;

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate((Math.PI / 180) * options.rotate);

  // Draw text
  const contents = Array.isArray(content) ? content : [content];
  const lineHeight = options.fontSize * 1.2;
  const totalHeight = contents.length * lineHeight;
  const startY = -totalHeight / 2 + lineHeight / 2;

  contents.forEach((text, index) => {
    const y = startY + index * lineHeight;
    ctx.fillText(text, 0, y);
  });

  ctx.restore();

  return canvas.toDataURL();
};

const getWatermarkSize = (
  content: string | string[],
  fontSize: number,
  fontFamily: string
): { width: number; height: number } => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  ctx.font = `${fontSize}px ${fontFamily}`;

  const contents = Array.isArray(content) ? content : [content];
  const lineHeight = fontSize * 1.2;

  let maxWidth = 0;
  contents.forEach((text) => {
    const metrics = ctx.measureText(text);
    maxWidth = Math.max(maxWidth, metrics.width);
  });

  return {
    width: maxWidth + 40, // Add padding
    height: contents.length * lineHeight + 40, // Add padding
  };
};

export const Watermark: React.FC<WatermarkProps> = ({
  children,
  content,
  image,
  width: propWidth,
  height: propHeight,
  rotate = -20,
  zIndex = 1000,
  fontColor = "rgba(0, 0, 0, 0.15)",
  fontSize = 16,
  fontFamily = "sans-serif",
  fontStyle = "normal",
  fontWeight = "normal",
  fontVariant = "normal",
  gap = [100, 100],
  offset = [50, 50],
  opacity = 1,
  className,
  style,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate watermark size
  const watermarkSize = useMemo(() => {
    if (propWidth && propHeight) {
      return { width: propWidth, height: propHeight };
    }

    if (content) {
      return getWatermarkSize(content, fontSize, fontFamily);
    }

    // Default size for image watermarks
    return { width: 120, height: 120 };
  }, [content, fontSize, fontFamily, propWidth, propHeight]);

  // Generate watermark pattern
  const watermarkUrl = useMemo(() => {
    if (image) {
      return image;
    }

    if (content) {
      return toDataURL(content, watermarkSize.width, watermarkSize.height, {
        rotate,
        fontColor,
        fontSize,
        fontFamily,
        fontStyle,
        fontWeight,
        fontVariant,
        opacity,
      });
    }

    return "";
  }, [
    image,
    content,
    watermarkSize,
    rotate,
    fontColor,
    fontSize,
    fontFamily,
    fontStyle,
    fontWeight,
    fontVariant,
    opacity,
  ]);

  // Generate background style
  const backgroundStyle = useMemo(() => {
    if (!watermarkUrl) return {};

    const [gapX, gapY] = gap;
    const [offsetX, offsetY] = offset;

    return {
      backgroundImage: `url("${watermarkUrl}")`,
      backgroundSize: `${watermarkSize.width + gapX}px ${
        watermarkSize.height + gapY
      }px`,
      backgroundPosition: `${offsetX}px ${offsetY}px`,
      backgroundRepeat: "repeat",
    };
  }, [watermarkUrl, watermarkSize, gap, offset]);

  // Protect against tampering (basic protection)
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const watermarkElement = container.querySelector(
      "[data-watermark]"
    ) as HTMLElement;

    if (!watermarkElement) return;

    const observer = new MutationObserver(() => {
      // Re-apply watermark styles if they're modified
      Object.assign(watermarkElement.style, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: zIndex.toString(),
        ...backgroundStyle,
      });
    });

    observer.observe(watermarkElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => observer.disconnect();
  }, [backgroundStyle, zIndex]);

  const containerClasses = clsx("relative", className);

  const watermarkStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex,
    ...backgroundStyle,
  };

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      style={style}
      {...props}
    >
      {/* Watermark layer */}
      <div data-watermark="true" style={watermarkStyles} aria-hidden="true" />

      {/* Content */}
      <div style={{ position: "relative", zIndex: zIndex + 1 }}>{children}</div>
    </div>
  );
};
