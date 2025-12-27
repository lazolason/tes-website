"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

// Image requirement: use matched pairs (same angle, lighting, geometry); only surface condition changes.
interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  captionTitle?: string;
  caption?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  captionTitle,
  caption,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const clampPosition = useCallback((value: number) => {
    return Math.max(0, Math.min(value, 100));
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(clampPosition(percentage));
  }, [clampPosition]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 5 : 1;
    let nextValue = sliderPosition;

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        nextValue = sliderPosition - step;
        break;
      case "ArrowRight":
      case "ArrowUp":
        nextValue = sliderPosition + step;
        break;
      case "Home":
        nextValue = 0;
        break;
      case "End":
        nextValue = 100;
        break;
      default:
        return;
    }

    event.preventDefault();
    setSliderPosition(clampPosition(nextValue));
  };

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchend", stopDragging);
    } else {
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    }
    return () => {
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, stopDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full select-none overflow-hidden cursor-ew-resize group ${className}`}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* After Image (Background - Visible on the RIGHT side) */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
        <div className="absolute top-4 right-4 rounded bg-slate-950/60 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground - Visible on the LEFT side, clipped) */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
        <div className="absolute top-4 left-4 rounded bg-slate-950/60 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {caption && (
        <div className="absolute bottom-9 left-4 max-w-xs rounded-lg bg-slate-950/60 px-3 py-2 text-xs text-white backdrop-blur-sm">
          {captionTitle && (
            <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-200">
              {captionTitle}
            </p>
          )}
          <p className={captionTitle ? "mt-1 text-white/90" : "text-white/90"}>
            {caption}
          </p>
          <p className="mt-1 text-[10px] text-white/60">
            Indicators tracked: TR, TTD, condenser vacuum.
          </p>
        </div>
      )}

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 cursor-ew-resize bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
        style={{ left: `${sliderPosition}%` }}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald-600 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              transform="rotate(90 12 12)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
