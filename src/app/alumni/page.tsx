import React from "react";
import Image from "next/image";

const AlumniPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/Alumni.jpeg"
              alt="Alumni Logo"
              width={220}
              height={220}
              className="rounded-full border-4 border-white shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Alumni Trust
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connecting generations of Josephites at Briand Square. Stay
            connected, give back, and celebrate our shared heritage.
          </p>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Notable Alumni
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "John Doe",
                batch: "Class of 1995",
                role: "CEO, Tech Corp",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Sarah Smith",
                batch: "Class of 2002",
                role: "Award-winning Author",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Michael Chen",
                batch: "Class of 2010",
                role: "Social Entrepreneur",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "John Doe",
                batch: "Class of 1995",
                role: "CEO, Tech Corp",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Sarah Smith",
                batch: "Class of 2002",
                role: "Award-winning Author",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Michael Chen",
                batch: "Class of 2010",
                role: "Social Entrepreneur",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "John Doe",
                batch: "Class of 1995",
                role: "CEO, Tech Corp",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Sarah Smith",
                batch: "Class of 2002",
                role: "Award-winning Author",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Michael Chen",
                batch: "Class of 2010",
                role: "Social Entrepreneur",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
              },
            ].map((alumnus, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-50">
                  <Image
                    src={alumnus.image}
                    alt={alumnus.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  {alumnus.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-2">
                  {alumnus.batch}
                </p>
                <p className="text-gray-600 italic">&quot;{alumnus.role}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Network */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Reconnect with your roots
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Join our global alumni network of over 50,000 former students.
                Share your progress, mentor current students, and attend
                exclusive alumni events.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
                    ✓
                  </div>
                  <span>Access to alumni-only job boards</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
                    ✓
                  </div>
                  <span>Annual Homecoming invitations</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
                    ✓
                  </div>
                  <span>Opportunity to mentor current students</span>
                </div>
              </div>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-all shadow-md">
                Register as Alumni
              </button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
                alt="Alumni gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Alumni Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Upcoming Events
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow gap-6 sm:gap-0">
              <div className="bg-blue-800 text-white p-4 rounded-lg text-center min-w-[120px] sm:min-w-[100px]">
                <span className="block text-2xl font-bold">15</span>
                <span className="text-xs uppercase font-semibold">
                  Dec 2026
                </span>
              </div>
              <div className="sm:ml-6 text-center sm:text-left">
                <h4 className="text-xl font-bold text-blue-900">
                  Grand Homecoming 2026
                </h4>
                <p className="text-gray-600">
                  Celebrating the 160th Anniversary of St. Joseph&apos;s
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow gap-6 sm:gap-0">
              <div className="bg-yellow-500 text-blue-900 p-4 rounded-lg text-center min-w-[120px] sm:min-w-[100px]">
                <span className="block text-2xl font-bold">05</span>
                <span className="text-xs uppercase font-semibold">
                  Jan 2027
                </span>
              </div>
              <div className="sm:ml-6 text-center sm:text-left">
                <h4 className="text-xl font-bold text-blue-900">
                  Alumni Networking Dinner
                </h4>
                <p className="text-gray-600">
                  A night of connection and opportunity at City Convention
                  Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;
