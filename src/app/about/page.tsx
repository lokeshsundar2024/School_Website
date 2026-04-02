import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About St. Joseph&apos;s School Briand Square
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A legacy of excellence in education, character building, and
            community service.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20 px-4">
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30 bg-white rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/FrDeepak.jpg"
                alt="School building"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Our History
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 1867, St. Joseph&apos;s Briand Square began with a vision
                to provide quality education to the local community. Over the
                decades, it has grown from a small primary school into a premier
                educational institution, maintaining its core values while
                embracing modern teaching methodologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div>
                  <h4 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3 text-sm">
                      ✓
                    </span>
                    Our Mission
                  </h4>
                  <p className="text-gray-600">
                    To nurture students into responsible global citizens with a
                    passion for lifelong learning and service to humanity.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mr-3 text-sm">
                      ✓
                    </span>
                    Our Vision
                  </h4>
                  <p className="text-gray-600">
                    To be a leading center of educational excellence that
                    empowers students to achieve their full potential in all
                    aspects of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                desc: "Honesty and strong moral principles in everything we do.",
                icon: "⚖️",
              },
              {
                title: "Excellence",
                desc: "Striving for the highest standards in academics and beyond.",
                icon: "⭐",
              },
              {
                title: "Compassion",
                desc: "Empathy and kindness towards all members of society.",
                icon: "❤️",
              },
              {
                title: "Innovation",
                desc: "Embracing change and fostering creative problem solving.",
                icon: "💡",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Leadership
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Fr. Thomas Xavier",
                role: "Manager",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Sr. Maria Clara",
                role: "Principal",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Dr. Robert Wilson",
                role: "Vice Principal",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
              },
            ].map((leader, idx) => (
              <div key={idx} className="group">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6 shadow-md">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold">{leader.name}</h4>
                    <p className="text-blue-100">{leader.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
