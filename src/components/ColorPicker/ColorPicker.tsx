import React from "react";
import { clsx } from "clsx";

export interface ColorPickerProps {
  /**
   * Nilai warna saat ini
   */
  value?: string;
  /**
   * Nilai default warna
   */
  defaultValue?: string;
  /**
   * Callback ketika warna berubah
   */
  onChange?: (color: string) => void;
  /**
   * Format output warna
   */
  format?: "hex" | "rgb" | "hsl";
  /**
   * Apakah disabled
   */
  disabled?: boolean;
  /**
   * Ukuran color picker
   */
  size?: "sm" | "md" | "lg";
  /**
   * Custom className
   */
  className?: string;
  /**
   * Apakah menampilkan input text
   */
  showInput?: boolean;
  /**
   * Apakah menampilkan eyedropper (jika supported)
   */
  showEyeDropper?: boolean;
  /**
   * Preset colors
   */
  presets?: string[];
  /**
   * Apakah menampilkan alpha/transparency
   */
  showAlpha?: boolean;
  /**
   * Custom className untuk picker popup
   */
  pickerClassName?: string;
}

interface HSV {
  h: number; // 0-360
  s: number; // 0-100
  v: number; // 0-100
}

interface RGB {
  r: number; // 0-255
  g: number; // 0-255
  b: number; // 0-255
}

const colorPickerSizes = {
  sm: {
    trigger: "w-8 h-8",
    input: "text-xs px-2 py-1",
    picker: "w-64",
  },
  md: {
    trigger: "w-10 h-10",
    input: "text-sm px-3 py-2",
    picker: "w-80",
  },
  lg: {
    trigger: "w-12 h-12",
    input: "text-base px-4 py-3",
    picker: "w-96",
  },
};

const defaultPresets = [
  "#FF0000",
  "#FF8000",
  "#FFFF00",
  "#80FF00",
  "#00FF00",
  "#00FF80",
  "#00FFFF",
  "#0080FF",
  "#0000FF",
  "#8000FF",
  "#FF00FF",
  "#FF0080",
  "#000000",
  "#404040",
  "#808080",
  "#C0C0C0",
  "#FFFFFF",
  "#800000",
  "#808000",
  "#008000",
  "#008080",
  "#000080",
  "#800080",
  "#8B4513",
];

// Color conversion utilities
const hexToRgb = (hex: string): RGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};

const rgbToHsv = (r: number, g: number, b: number): HSV => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h = 0;
  let s = max === 0 ? 0 : diff / max;
  let v = max;

  if (diff !== 0) {
    if (max === r) {
      h = ((g - b) / diff) % 6;
    } else if (max === g) {
      h = (b - r) / diff + 2;
    } else {
      h = (r - g) / diff + 4;
    }
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;
  s = Math.round(s * 100);
  v = Math.round(v * 100);

  return { h, s, v };
};

const hsvToRgb = (h: number, s: number, v: number): RGB => {
  h /= 60;
  s /= 100;
  v /= 100;

  const c = v * s;
  const x = c * (1 - Math.abs((h % 2) - 1));
  const m = v - c;

  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 1) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 1 && h < 2) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 2 && h < 3) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 3 && h < 4) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 4 && h < 5) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 5 && h < 6) {
    r = c;
    g = 0;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
};

const formatColor = (rgb: RGB, format: string): string => {
  switch (format) {
    case "rgb":
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    case "hsl":
      const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
      // Convert HSV to HSL (approximate)
      const l = (hsv.v * (2 - hsv.s / 100)) / 2;
      const s =
        l === 0 || l === 100 ? 0 : ((hsv.v - l) / Math.min(l, 100 - l)) * 100;
      return `hsl(${hsv.h}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    case "hex":
    default:
      return rgbToHex(rgb.r, rgb.g, rgb.b);
  }
};

const parseColor = (color: string): RGB => {
  if (color.startsWith("#")) {
    return hexToRgb(color);
  } else if (color.startsWith("rgb")) {
    const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match) {
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
      };
    }
  }
  return { r: 0, g: 0, b: 0 };
};

const EyeDropperIcon = () => (
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
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m0 0h-2v-2a2 2 0 012-2z"
    />
  </svg>
);

export const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      value: controlledValue,
      defaultValue = "#3B82F6",
      onChange,
      format = "hex",
      disabled = false,
      size = "md",
      className,
      showInput = true,
      showEyeDropper = true,
      presets = defaultPresets,
      showAlpha = false,
      pickerClassName,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [isOpen, setIsOpen] = React.useState(false);
    const [hsv, setHsv] = React.useState(() => {
      const rgb = parseColor(defaultValue);
      return rgbToHsv(rgb.r, rgb.g, rgb.b);
    });

    const containerRef = React.useRef<HTMLDivElement>(null);
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;
    const currentRgb = parseColor(currentValue);

    const updateColor = (newRgb: RGB) => {
      const colorString = formatColor(newRgb, format);
      if (!isControlled) {
        setInternalValue(colorString);
      }
      onChange?.(colorString);
    };

    const updateHsv = (newHsv: HSV) => {
      setHsv(newHsv);
      const rgb = hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
      updateColor(rgb);
    };

    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    }, [isOpen]);

    const handleEyeDropper = async () => {
      // Check if browser supports EyeDropper API
      if ("EyeDropper" in window) {
        try {
          // @ts-ignore - EyeDropper API not fully typed yet
          const eyeDropper = new EyeDropper();
          const result = await eyeDropper.open();
          const rgb = hexToRgb(result.sRGBHex);
          updateColor(rgb);
          setHsv(rgbToHsv(rgb.r, rgb.g, rgb.b));
        } catch (error) {
          console.warn("EyeDropper failed:", error);
        }
      }
    };

    const handlePresetClick = (color: string) => {
      const rgb = parseColor(color);
      updateColor(rgb);
      setHsv(rgbToHsv(rgb.r, rgb.g, rgb.b));
      setIsOpen(false);
    };

    const handleSaturationMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const handleMouseMove = (e: MouseEvent) => {
        const x = Math.max(
          0,
          Math.min(1, (e.clientX - rect.left) / rect.width)
        );
        const y = Math.max(
          0,
          Math.min(1, (e.clientY - rect.top) / rect.height)
        );
        updateHsv({
          ...hsv,
          s: x * 100,
          v: (1 - y) * 100,
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      handleMouseMove(e.nativeEvent);
    };

    const handleHueMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const handleMouseMove = (e: MouseEvent) => {
        const x = Math.max(
          0,
          Math.min(1, (e.clientX - rect.left) / rect.width)
        );
        updateHsv({
          ...hsv,
          h: x * 360,
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      handleMouseMove(e.nativeEvent);
    };

    return (
      <div
        ref={containerRef}
        className={clsx("relative inline-block", className)}
        {...props}
      >
        <div className="flex items-center gap-2">
          {/* Color Trigger */}
          <button
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            className={clsx(
              "border-2 border-secondary-300 rounded-md overflow-hidden transition-all duration-200",
              "hover:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500",
              colorPickerSizes[size].trigger,
              disabled && "opacity-50 cursor-not-allowed"
            )}
            style={{
              backgroundColor: currentValue,
            }}
          >
            <div
              className="w-full h-full"
              style={{ backgroundColor: currentValue }}
            />
          </button>

          {/* Input Field */}
          {showInput && (
            <input
              type="text"
              value={currentValue}
              onChange={(e) => {
                const rgb = parseColor(e.target.value);
                updateColor(rgb);
                setHsv(rgbToHsv(rgb.r, rgb.g, rgb.b));
              }}
              disabled={disabled}
              className={clsx(
                "border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",
                colorPickerSizes[size].input,
                disabled && "opacity-50 cursor-not-allowed bg-secondary-100"
              )}
            />
          )}

          {/* Eye Dropper */}
          {showEyeDropper && "EyeDropper" in window && (
            <button
              onClick={handleEyeDropper}
              disabled={disabled}
              className={clsx(
                "p-2 text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100 rounded-md transition-colors",
                disabled && "opacity-50 cursor-not-allowed"
              )}
              title="Pick color from screen"
            >
              <EyeDropperIcon />
            </button>
          )}
        </div>

        {/* Color Picker Popup */}
        {isOpen && (
          <div
            className={clsx(
              "absolute top-full left-0 mt-2 bg-white border border-secondary-300 rounded-lg shadow-lg z-50",
              "animate-in fade-in-0 zoom-in-95 duration-200",
              colorPickerSizes[size].picker,
              pickerClassName
            )}
          >
            <div className="p-4 space-y-4">
              {/* Saturation/Value Area */}
              <div
                className="relative w-full h-48 cursor-crosshair"
                style={{
                  backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
                }}
                onMouseDown={handleSaturationMouseDown}
              >
                {/* White to transparent gradient (saturation) */}
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />

                {/* Transparent to black gradient (value) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                {/* Cursor */}
                <div
                  className="absolute w-3 h-3 border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    left: `${hsv.s}%`,
                    top: `${100 - hsv.v}%`,
                  }}
                />
              </div>

              {/* Hue Slider */}
              <div
                className="relative w-full h-4 cursor-pointer rounded"
                style={{
                  background:
                    "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)",
                }}
                onMouseDown={handleHueMouseDown}
              >
                {/* Hue Cursor */}
                <div
                  className="absolute w-4 h-4 bg-white border-2 border-secondary-300 rounded-full shadow-lg transform -translate-x-1/2 pointer-events-none"
                  style={{
                    left: `${(hsv.h / 360) * 100}%`,
                    top: "0",
                  }}
                />
              </div>

              {/* Preset Colors */}
              {presets.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-secondary-700 mb-2">
                    Presets
                  </div>
                  <div className="grid grid-cols-8 gap-1">
                    {presets.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handlePresetClick(color)}
                        className={clsx(
                          "w-6 h-6 rounded border hover:scale-110 transition-transform",
                          currentValue.toLowerCase() === color.toLowerCase()
                            ? "border-secondary-900 border-2"
                            : "border-secondary-300"
                        )}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Color Values */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary-600">HEX:</span>
                  <span className="font-mono text-secondary-900">
                    {rgbToHex(
                      currentRgb.r,
                      currentRgb.g,
                      currentRgb.b
                    ).toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">RGB:</span>
                  <span className="font-mono text-secondary-900">
                    {currentRgb.r}, {currentRgb.g}, {currentRgb.b}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">HSV:</span>
                  <span className="font-mono text-secondary-900">
                    {Math.round(hsv.h)}°, {Math.round(hsv.s)}%,{" "}
                    {Math.round(hsv.v)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = "ColorPicker";
