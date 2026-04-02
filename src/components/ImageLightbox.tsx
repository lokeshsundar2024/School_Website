"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const ImageLightbox = ({
  images,
  initialIndex,
  onClose,
}: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleNext, handlePrev, onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm transition-opacity duration-300">
      {/* Header with Close Button */}
      <div className="absolute top-0 left-0 right-0 z-[110] flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
          aria-label="Close lightbox"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Main Image Viewport */}
      <div
        className="flex-grow relative flex items-center justify-center p-4 md:p-12 select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full max-w-6xl max-h-[70vh]">
          <Image
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-contain transition-all duration-300"
            style={{ imageOrientation: "from-image" }}
            priority
            quality={90}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] text-white/70 hover:text-white transition-all p-3 bg-white/10 hover:bg-white/20 rounded-full group"
          aria-label="Previous image"
        >
          <svg
            className="w-8 h-8 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] text-white/70 hover:text-white transition-all p-3 bg-white/10 hover:bg-white/20 rounded-full group"
          aria-label="Next image"
        >
          <svg
            className="w-8 h-8 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Thumbnail Strip at Bottom */}
      <div className="w-full bg-black/50 border-t border-white/10 p-4 pb-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide flex gap-3 px-4 py-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              ref={(el) => {
                thumbnailRefs.current[idx] = el;
              }}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                currentIndex === idx
                  ? "ring-2 ring-yellow-500 scale-105 opacity-100"
                  : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                style={{ imageOrientation: "from-image" }}
                sizes="80px"
              />
            </button>
          ))}
        </div>
        <div className="text-center mt-2 text-white/40 text-xs font-medium uppercase tracking-widest">
          {currentIndex + 1} of {images.length}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ImageLightbox;
