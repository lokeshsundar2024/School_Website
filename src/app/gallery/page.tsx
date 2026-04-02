"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const events = [
  {
    id: "independence-day-2025",
    title: "Independence Day 2025",
    date: "Aug 15, 2025",
    thumbnail: "/IndependenceDay.jpg",
    count: 12,
  },
  {
    id: "alumni-meet-2025",
    title: "Alumni Meet 2025",
    date: "May 01, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    count: 18,
  },
  {
    id: "republic-day-2025",
    title: "Republic Day 2025",
    date: "Jan 26, 2025",
    thumbnail: "/republicDay.jpg",
    count: 15,
  },
  {
    id: "annual-day-2025",
    title: "Annual Day 2025",
    date: "Jan 20, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
  {
    id: "sports-meet-2024",
    title: "Sports Meet 2024",
    date: "Dec 15, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&fit=crop&w=800&q=80",
    count: 24,
  },
  {
    id: "science-fair-2024",
    title: "Science Fair 2024",
    date: "Nov 10, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    count: 18,
  },
  {
    id: "art-exhibition-2024",
    title: "Art Exhibition 2024",
    date: "Oct 05, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
    count: 15,
  },
  {
    id: "graduation-2024",
    title: "Graduation 2024",
    date: "Aug 30, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    count: 30,
  },
  {
    id: "cultural-fest-2024",
    title: "Cultural Fest 2024",
    date: "Jul 12, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    count: 22,
  },
];

const GalleryPage = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState("All");

  const years = useMemo(() => {
    const allYears = events.map((event) => event.date.split(", ")[1]);
    return ["All", ...Array.from(new Set(allYears))].sort((a, b) =>
      b.localeCompare(a),
    );
  }, []);

  const eventTypes = useMemo(() => {
    // Extract event name by removing the year (4 digits at the end)
    const allTypes = events.map((event) => event.title.replace(/\s\d{4}$/, ""));
    return ["All", ...Array.from(new Set(allTypes))].sort();
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesYear =
        selectedYear === "All" || event.date.endsWith(selectedYear);
      const matchesEvent =
        selectedEvent === "All" || event.title.startsWith(selectedEvent);
      return matchesYear && matchesEvent;
    });
  }, [selectedYear, selectedEvent]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="relative bg-blue-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Glimpses of life at St. Joseph&apos;s Briand Square. Explore our
            events, celebrations, and achievements.
          </p>
        </div>
      </section>

      {/* Filter and Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="py-20">
          {/* Filters Dropdown */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedYear === "All" && selectedEvent === "All"
                ? "All Gallery Items"
                : `${selectedEvent === "All" ? "Events" : selectedEvent} ${
                    selectedYear === "All" ? "" : `from ${selectedYear}`
                  }`}
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              {/* Event Filter */}
              <div className="flex items-center gap-3">
                <label
                  htmlFor="event-filter"
                  className="text-sm font-semibold text-gray-600 whitespace-nowrap"
                >
                  Filter by Event:
                </label>
                <select
                  id="event-filter"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-sm min-w-[150px]"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="flex items-center gap-3">
                <label
                  htmlFor="year-filter"
                  className="text-sm font-semibold text-gray-600 whitespace-nowrap"
                >
                  Filter by Year:
                </label>
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-sm"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/gallery/${event.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    objectFit="contain"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-900 shadow-sm">
                    {event.count} Photos
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-600 text-sm font-semibold mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                    {event.title}
                  </h3>
                  <div className="mt-4 flex items-center text-blue-800 font-bold text-sm">
                    View Album
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No events found for the selected year.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
