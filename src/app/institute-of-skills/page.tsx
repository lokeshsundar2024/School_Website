import React from "react";
import Image from "next/image";

const InstituteOfSkillsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Institute of Skills
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Empowering students with practical vocational skills for a brighter
            future.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Preparing for the Future
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                The St. Joseph's Institute of Skills (SJIS) at Briand Square is
                a dedicated wing of our institution focused on vocational and
                technical excellence. We believe that modern education must
                include practical skills that empower students to innovate and
                lead in a rapidly changing world.
              </p>
              <div className="space-y-4">
                {[
                  "Hands-on learning with industry-standard equipment",
                  "Expert trainers from professional backgrounds",
                  "Certification programs recognized by industry leaders",
                  "Career guidance and placement support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                alt="Technical skills training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Courses Offered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Programs
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Robotics & AI",
                desc: "Learn to build and program robots, exploring the fundamentals of artificial intelligence.",
                icon: "🤖",
                color: "blue",
              },
              {
                title: "Digital Media",
                desc: "Master graphic design, video editing, and digital storytelling techniques.",
                icon: "🎨",
                color: "purple",
              },
              {
                title: "Renewable Energy",
                desc: "Understand solar and wind technologies through practical projects and experiments.",
                icon: "☀️",
                color: "green",
              },
              {
                title: "Entrepreneurship",
                desc: "Develop business acumen and leadership skills to turn ideas into successful ventures.",
                icon: "💼",
                color: "orange",
              },
              {
                title: "Coding & Web",
                desc: "Learn modern programming languages and build real-world web applications.",
                icon: "💻",
                color: "cyan",
              },
              {
                title: "Creative Arts",
                desc: "Advanced training in music, fine arts, and performing arts for creative careers.",
                icon: "🎭",
                color: "red",
              },
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {course.desc}
                </p>
                <button className="text-blue-800 font-bold text-sm hover:underline">
                  Learn more about {course.title} &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 bg-blue-800 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Enroll in a Course Today</h2>
          <p className="text-xl text-blue-100 mb-10">
            Open for students from all schools and colleges. Enhance your skill
            set and stand out from the crowd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all">
              Apply for SJIS
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstituteOfSkillsPage;
