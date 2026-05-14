"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

interface GalleryClientProps {
  event: {
    title: string;
    date: string;
    description: string;
    images: string[];
  };
}

export default function GalleryClient({ event }: GalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 20;
  const totalPages = Math.ceil(event.images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = event.images.slice(startIndex, endIndex);

  const openLightbox = (index: number) => {
    // Adjust index for the full image array
    setInitialIndex(startIndex + index);
    setLightboxOpen(true);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    const pages = [] as (number | string)[];
    const maxButtons = 5;
    const siblings = 1;

    if (totalPages <= maxButtons + 2) {
      return Array.from({ length: totalPages }, (_, idx) => idx + 1);
    }

    pages.push(1);

    const left = Math.max(2, currentPage - siblings);
    const right = Math.min(totalPages - 1, currentPage + siblings);

    if (left > 2) {
      pages.push("...");
    }

    for (let page = left; page <= right; page += 1) {
      pages.push(page);
    }

    if (right < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);
    return pages;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={event.images}
          initialIndex={initialIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* Navigation */}
      <div className="bg-gray-50 border-b border-gray-100 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link
            href="/gallery"
            className="text-blue-800 font-bold flex items-center hover:text-blue-900"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Gallery
          </Link>
          <span className="mx-4 text-gray-300">/</span>
          <span className="text-gray-500">{event.title}</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-bold mb-2 uppercase tracking-wider">
              {event.date}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {event.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                « First
              </button>
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ‹ Prev
              </button>
              {getVisiblePages().map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-3 py-2 text-sm font-medium text-gray-500"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page as number)}
                    className={`px-3 py-2 text-sm font-medium rounded-md border ${
                      page === currentPage
                        ? "text-blue-600 bg-blue-50 border-blue-300"
                        : "text-gray-500 bg-white border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next ›
              </button>
              <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last »
              </button>
            </div>
          )}

          <div className="columns-2 md:columns-4 lg:columns-5 gap-6 space-y-6">
            {currentImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all cursor-pointer bg-gray-100"
              >
                <Image
                  src={img}
                  alt={`${event.title} photo ${startIndex + idx + 1}`}
                  width={500}
                  height={500}
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
                  style={{ imageOrientation: "from-image" }}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Count */}
          <div className="mt-6 text-center text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, event.images.length)}{" "}
            of {event.images.length} photos
          </div>
        </div>
      </section>
    </div>
  );
}
