"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Student",
    class: "10th Grade",
    section: "A",
    admissionNo: "SJBS-2024-001",
    joinDate: "June 2024",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-blue-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Profile</h1>
          <p className="text-xl text-blue-100">Welcome back, {user.name}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Avatar & Quick Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-32 bg-gradient-to-r from-blue-800 to-blue-600" />
              <div className="px-8 pb-8">
                <div className="relative -mt-16 mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mt-1">
                    {user.role}
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-500">Admission No</span>
                    <span className="font-bold text-gray-900">{user.admissionNo}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-500">Joined</span>
                    <span className="font-bold text-gray-900">{user.joinDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-gray-500">Status</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                      Active
                    </span>
                  </div>
                </div>
                <button className="mt-8 w-full bg-blue-800 text-white font-bold py-3 rounded-xl hover:bg-blue-900 transition-all shadow-md active:scale-95">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Academic Progress */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b border-gray-100 pb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">
                    Full Name
                  </p>
                  <p className="text-lg text-gray-900 font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">
                    Email Address
                  </p>
                  <p className="text-lg text-gray-900 font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">
                    Class & Section
                  </p>
                  <p className="text-lg text-gray-900 font-medium">
                    {user.class} - Section {user.section}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">
                    Phone Number
                  </p>
                  <p className="text-lg text-gray-900 font-medium">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b border-gray-100 pb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/academics"
                  className="p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors text-center group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-3 group-hover:bg-blue-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-blue-900">Time Table</span>
                </Link>
                <Link
                  href="/gallery"
                  className="p-4 bg-amber-50 rounded-2xl hover:bg-amber-100 transition-colors text-center group"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-3 group-hover:bg-amber-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-amber-900">My Gallery</span>
                </Link>
                <Link
                  href="/contact"
                  className="p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-colors text-center group"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-3 group-hover:bg-emerald-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-emerald-900">Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
