"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const academicCategories = [
    { name: "Primary School - English", href: "/academics/primary-english" },
    { name: "Primary School - Kannada", href: "/academics/primary-kannada" },
    { name: "High School - English", href: "/academics/highschool-english" },
    { name: "High School - Kannada", href: "/academics/highschool-kannada" },
    { name: "PUC - Science", href: "/academics/puc-science" },
    { name: "PUC - Commerce", href: "/academics/puc-commerce" },
  ];

  return (
    <nav className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo and Branding */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/STJOSEPHSLOGO.png"
                alt="St. Joseph's Logo"
                width={45}
                height={45}
                className="rounded-full md:w-[50px] md:h-[50px] transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl xl:text-2xl font-bold tracking-tight">
                  St. Joseph&apos;s School
                </span>
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
                  Briand Square
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="flex items-center space-x-1">
              <Link
                href="/"
                className="hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all"
              >
                About
              </Link>
              <Link
                href="/admission"
                className="hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all"
              >
                Admission
              </Link>

              {/* Academics Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsAcademicsOpen(true)}
                onMouseLeave={() => setIsAcademicsOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    href="/academics"
                    className="hover:bg-blue-700 px-3 py-2 rounded-l-lg text-sm font-semibold transition-all"
                  >
                    Academics
                  </Link>
                  <button
                    className="hover:bg-blue-700 px-2 py-2 rounded-r-lg transition-all"
                    onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isAcademicsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Dropdown Menu */}
                {isAcademicsOpen && (
                  <div className="absolute left-0 mt-0 w-64 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100 transform origin-top transition-all animate-in fade-in slide-in-from-top-2">
                    {academicCategories.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b last:border-0 border-gray-50"
                        onClick={() => setIsAcademicsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className="hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all"
              >
                Gallery
              </Link>
              <Link
                href="/alumni"
                className="hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all"
              >
                Alumni
              </Link>
              <Link
                href="/institute-of-skills"
                className="hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all"
              >
                (SJIS) Institute Of Skills
              </Link>

              <div className="h-6 w-px bg-blue-700 mx-2" />

              {/* Account Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsAccountOpen(true)}
                onMouseLeave={() => setIsAccountOpen(false)}
              >
                <button
                  className="flex items-center space-x-2 bg-blue-900/50 hover:bg-blue-700 px-4 py-2 rounded-xl transition-all border border-blue-400/30"
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                >
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold">Account</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isAccountOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isAccountOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100 transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2">
                    <Link
                      href="/profile"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-50 font-medium"
                      onClick={() => setIsAccountOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/login"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors border-b border-gray-50 font-medium"
                      onClick={() => setIsAccountOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors font-medium"
                      onClick={() => setIsAccountOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-5 py-2.5 rounded-xl text-sm font-black transition-all shadow-lg active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-4">
            <Link
              href="/login"
              className="p-2 bg-blue-900/50 rounded-lg border border-blue-400/30"
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
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
            <button
              className="p-2 rounded-xl hover:bg-blue-700 focus:outline-none transition-all border border-transparent active:border-blue-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-blue-900 border-t border-blue-700 py-6 px-4 space-y-2 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <Link
            href="/"
            className="block px-4 py-3 rounded-xl text-base font-bold hover:bg-blue-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-3 rounded-xl text-base font-bold hover:bg-blue-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/admission"
            className="block px-4 py-3 rounded-xl text-base font-bold hover:bg-blue-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Admission
          </Link>

          <div className="space-y-1">
            <button
              className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-blue-800 flex justify-between items-center"
              onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
            >
              <span>Academics</span>
              <svg
                className={`w-4 h-4 transition-transform ${isAcademicsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAcademicsOpen && (
              <div className="pl-6 space-y-1 bg-blue-950/50 rounded-xl py-2">
                <Link
                  href="/academics"
                  className="block px-4 py-2 text-sm font-bold text-yellow-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Academics
                </Link>
                {academicCategories.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-blue-200 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="block px-4 py-3 rounded-xl text-base font-bold hover:bg-blue-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/alumni"
            className="block px-4 py-3 rounded-xl text-base font-bold hover:bg-blue-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Alumni
          </Link>
          <Link
            href="/institute-of-skills"
            className="block px-4 py-3 rounded-xl text-base font-bold hover:bg-blue-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills Institute
          </Link>

          <div className="h-px bg-blue-700 my-4" />

          <div className="space-y-1">
            <button
              className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-blue-800 flex justify-between items-center"
              onClick={() => setIsAccountOpen(!isAccountOpen)}
            >
              <span>Account</span>
              <svg
                className={`w-4 h-4 transition-transform ${isAccountOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAccountOpen && (
              <div className="pl-6 space-y-1 bg-blue-950/50 rounded-xl py-2">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm font-medium text-blue-200 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/login"
                  className="block px-4 py-2 text-sm font-medium text-blue-200 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-sm font-medium text-blue-200 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="block px-4 py-4 rounded-xl text-center text-base font-black bg-yellow-500 text-blue-900 mt-6 shadow-xl active:scale-95 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
