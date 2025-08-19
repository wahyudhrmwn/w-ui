import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import clsx from "clsx";

export interface TourStep {
  target: string; // CSS selector
  title: string;
  description: string;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  offset?: number;
  disableBeacon?: boolean;
  hideCloseButton?: boolean;
  hideSkipButton?: boolean;
  showProgress?: boolean;
  nextButtonProps?: {
    children?: React.ReactNode;
    disabled?: boolean;
  };
  prevButtonProps?: {
    children?: React.ReactNode;
    disabled?: boolean;
  };
  locale?: {
    skip?: string;
    previous?: string;
    next?: string;
    close?: string;
  };
}

export interface TourProps {
  steps: TourStep[];
  isOpen: boolean;
  onClose: () => void;
  onStepChange?: (stepIndex: number, step: TourStep) => void;
  onFinish?: () => void;
  currentStepIndex?: number;

  // Global settings
  mask?: boolean;
  maskClosable?: boolean;
  scrollSmooth?: boolean;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  offset?: number;

  // Styling
  indicatorSize?: number;
  primaryColor?: string;

  // Locale
  locale?: {
    skip?: string;
    previous?: string;
    next?: string;
    close?: string;
    finish?: string;
  };

  className?: string;
  popupClassName?: string;
}

const defaultLocale = {
  skip: "Skip",
  previous: "Previous",
  next: "Next",
  close: "Close",
  finish: "Finish",
};

export const Tour: React.FC<TourProps> = ({
  steps = [],
  isOpen = false,
  onClose,
  onStepChange,
  onFinish,
  currentStepIndex = 0,
  mask = true,
  maskClosable = true,
  scrollSmooth = true,
  placement: globalPlacement = "bottom",
  offset: globalOffset = 8,
  indicatorSize = 6,
  primaryColor = "#1976d2",
  locale = defaultLocale,
  className,
  popupClassName,
}) => {
  const [stepIndex, setStepIndex] = useState(currentStepIndex);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [popupPlacement, setPopupPlacement] = useState<string>(globalPlacement);

  const popupRef = useRef<HTMLDivElement>(null);
  const beaconRef = useRef<HTMLDivElement>(null);

  const mergedLocale = { ...defaultLocale, ...locale };
  const currentStep = steps[stepIndex];

  // Get target element
  const updateTargetElement = useCallback(() => {
    if (!isOpen || !currentStep) return;

    const element = document.querySelector(currentStep.target) as HTMLElement;
    setTargetElement(element);

    if (element && scrollSmooth) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [isOpen, currentStep, scrollSmooth]);

  // Calculate popup position
  const calculatePosition = useCallback(() => {
    if (!targetElement || !popupRef.current) return;

    const targetRect = targetElement.getBoundingClientRect();
    const popupRect = popupRef.current.getBoundingClientRect();
    const placement = currentStep.placement || globalPlacement;
    const offset = currentStep.offset || globalOffset;

    let top = 0;
    let left = 0;
    let finalPlacement = placement;

    // Calculate initial position
    switch (placement) {
      case "top":
        top = targetRect.top - popupRect.height - offset;
        left = targetRect.left + (targetRect.width - popupRect.width) / 2;
        break;
      case "bottom":
        top = targetRect.bottom + offset;
        left = targetRect.left + (targetRect.width - popupRect.width) / 2;
        break;
      case "left":
        top = targetRect.top + (targetRect.height - popupRect.height) / 2;
        left = targetRect.left - popupRect.width - offset;
        break;
      case "right":
        top = targetRect.top + (targetRect.height - popupRect.height) / 2;
        left = targetRect.right + offset;
        break;
      case "topLeft":
        top = targetRect.top - popupRect.height - offset;
        left = targetRect.left;
        break;
      case "topRight":
        top = targetRect.top - popupRect.height - offset;
        left = targetRect.right - popupRect.width;
        break;
      case "bottomLeft":
        top = targetRect.bottom + offset;
        left = targetRect.left;
        break;
      case "bottomRight":
        top = targetRect.bottom + offset;
        left = targetRect.right - popupRect.width;
        break;
    }

    // Adjust for viewport boundaries
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (left < 10) {
      left = 10;
      if (placement.includes("Left"))
        finalPlacement = placement.replace("Left", "Right");
    } else if (left + popupRect.width > viewport.width - 10) {
      left = viewport.width - popupRect.width - 10;
      if (placement.includes("Right"))
        finalPlacement = placement.replace("Right", "Left");
    }

    if (top < 10) {
      top = 10;
      if (placement.includes("top"))
        finalPlacement = placement.replace("top", "bottom");
    } else if (top + popupRect.height > viewport.height - 10) {
      top = viewport.height - popupRect.height - 10;
      if (placement.includes("bottom"))
        finalPlacement = placement.replace("bottom", "top");
    }

    setPopupPosition({ top, left });
    setPopupPlacement(finalPlacement);
  }, [targetElement, currentStep, globalPlacement, globalOffset]);

  // Handle step change
  const handleStepChange = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= steps.length) return;

      setStepIndex(newIndex);
      onStepChange?.(newIndex, steps[newIndex]);
    },
    [steps, onStepChange]
  );

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (stepIndex < steps.length - 1) {
      handleStepChange(stepIndex + 1);
    } else {
      onFinish?.();
      onClose();
    }
  }, [stepIndex, steps.length, handleStepChange, onFinish, onClose]);

  const handlePrev = useCallback(() => {
    if (stepIndex > 0) {
      handleStepChange(stepIndex - 1);
    }
  }, [stepIndex, handleStepChange]);

  const handleSkip = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleMaskClick = useCallback(() => {
    if (maskClosable) {
      onClose();
    }
  }, [maskClosable, onClose]);

  // Update target element when step changes
  useEffect(() => {
    if (isOpen) {
      setStepIndex(currentStepIndex);
      updateTargetElement();
    }
  }, [isOpen, currentStepIndex, updateTargetElement]);

  // Update popup position
  useEffect(() => {
    if (isOpen && targetElement) {
      calculatePosition();

      const handleResize = () => calculatePosition();
      const handleScroll = () => calculatePosition();

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll, true);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll, true);
      };
    }
  }, [isOpen, targetElement, calculatePosition]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          handleSkip();
          break;
        case "ArrowRight":
        case "Enter":
          e.preventDefault();
          handleNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handlePrev();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, handleSkip]);

  // Spotlight mask style
  const maskStyle = useMemo(() => {
    if (!targetElement || !mask) return {};

    const rect = targetElement.getBoundingClientRect();
    const margin = 4;

    return {
      clipPath: `polygon(0% 0%, 0% 100%, ${rect.left - margin}px 100%, ${
        rect.left - margin
      }px ${rect.top - margin}px, ${rect.right + margin}px ${
        rect.top - margin
      }px, ${rect.right + margin}px ${rect.bottom + margin}px, ${
        rect.left - margin
      }px ${rect.bottom + margin}px, ${
        rect.left - margin
      }px 100%, 100% 100%, 100% 0%)`,
    };
  }, [targetElement, mask]);

  // Don't render if not open or no steps
  if (!isOpen || steps.length === 0 || !currentStep) {
    return null;
  }

  const isFirst = stepIndex === 0;
  const isLast = stepIndex === steps.length - 1;

  return (
    <>
      {/* Mask overlay */}
      {mask && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          style={maskStyle}
          onClick={handleMaskClick}
        />
      )}

      {/* Tour popup */}
      {targetElement && (
        <div
          ref={popupRef}
          className={clsx(
            "fixed z-50 bg-white rounded-lg shadow-lg border border-secondary-200 p-6 max-w-sm",
            popupClassName
          )}
          style={{
            top: popupPosition.top,
            left: popupPosition.left,
          }}
        >
          {/* Arrow */}
          <div
            className={clsx(
              "absolute w-3 h-3 bg-white border transform rotate-45",
              {
                "border-b-0 border-r-0 -top-1.5 left-1/2 -translate-x-1/2":
                  popupPlacement.startsWith("bottom"),
                "border-t-0 border-l-0 -bottom-1.5 left-1/2 -translate-x-1/2":
                  popupPlacement.startsWith("top"),
                "border-t-0 border-r-0 -left-1.5 top-1/2 -translate-y-1/2":
                  popupPlacement.startsWith("right"),
                "border-b-0 border-l-0 -right-1.5 top-1/2 -translate-y-1/2":
                  popupPlacement.startsWith("left"),
              }
            )}
          />

          {/* Close button */}
          {!currentStep.hideCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-secondary-400 hover:text-secondary-600 transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          {/* Content */}
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 pr-6">
                {currentStep.title}
              </h3>
              {currentStep.showProgress !== false && (
                <div className="flex items-center space-x-2 mt-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "rounded-full transition-colors",
                        index === stepIndex
                          ? "bg-primary-600"
                          : index < stepIndex
                          ? "bg-primary-300"
                          : "bg-secondary-200"
                      )}
                      style={{
                        width: indicatorSize,
                        height: indicatorSize,
                        backgroundColor:
                          index === stepIndex ? primaryColor : undefined,
                      }}
                    />
                  ))}
                  <span className="text-sm text-secondary-500 ml-2">
                    {stepIndex + 1} of {steps.length}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-secondary-600 text-sm leading-relaxed">
              {currentStep.description}
            </p>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div>
                {!currentStep.hideSkipButton && !isLast && (
                  <button
                    onClick={handleSkip}
                    className="text-sm text-secondary-500 hover:text-secondary-700 transition-colors"
                  >
                    {currentStep.locale?.skip || mergedLocale.skip}
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {!isFirst && (
                  <button
                    onClick={handlePrev}
                    disabled={currentStep.prevButtonProps?.disabled}
                    className="px-4 py-2 text-sm border border-secondary-300 rounded hover:bg-secondary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentStep.prevButtonProps?.children ||
                      currentStep.locale?.previous ||
                      mergedLocale.previous}
                  </button>
                )}

                <button
                  onClick={handleNext}
                  disabled={currentStep.nextButtonProps?.disabled}
                  className="px-4 py-2 text-sm bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: primaryColor }}
                >
                  {currentStep.nextButtonProps?.children ||
                    (isLast
                      ? currentStep.locale?.close || mergedLocale.finish
                      : currentStep.locale?.next || mergedLocale.next)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Beacon (pulsing dot) */}
      {targetElement && !currentStep.disableBeacon && (
        <div
          ref={beaconRef}
          className="fixed z-40 pointer-events-none"
          style={{
            top:
              targetElement.getBoundingClientRect().top +
              targetElement.offsetHeight / 2 -
              6,
            left:
              targetElement.getBoundingClientRect().left +
              targetElement.offsetWidth / 2 -
              6,
          }}
        >
          <div className="relative">
            <div
              className="absolute w-3 h-3 rounded-full animate-ping"
              style={{ backgroundColor: primaryColor, opacity: 0.7 }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
        </div>
      )}
    </>
  );
};
