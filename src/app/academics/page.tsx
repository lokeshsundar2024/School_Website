import React from "react";
import Image from "next/image";
import Link from "next/link";

const AcademicsPage = () => {
  const categories = [
    {
      id: "primary-english",
      title: "Primary School",
      medium: "English Medium",
      grades: "Grades 1 - 7",
      description:
        "A strong foundation in English medium education, focusing on core subjects and holistic development in the primary years.",
      subjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Science",
        "Kannada/Hindi",
        "Physical Education",
        "Art & Craft",
      ],
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      color: "blue",
    },
    {
      id: "primary-kannada",
      title: "Primary School",
      medium: "Kannada Medium",
      grades: "Grades 1 - 7",
      description:
        "Providing quality primary education in the regional language, ensuring students stay connected to their roots while excelling academically.",
      subjects: [
        "Kannada",
        "English",
        "Mathematics",
        "Science",
        "Social Science",
        "Physical Education",
        "Moral Science",
      ],
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
      color: "amber",
    },
    {
      id: "highschool-english",
      title: "High School",
      medium: "English Medium",
      grades: "Grades 8 - 10",
      description:
        "Preparing students for the SSLC board examinations with rigorous academic training and a focus on critical thinking and career orientation.",
      subjects: [
        "English (FL)",
        "Mathematics",
        "Science",
        "Social Science",
        "Kannada (SL)",
        "Hindi (TL)",
        "Information Technology",
      ],
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
      color: "indigo",
    },
    {
      id: "highschool-kannada",
      title: "High School",
      medium: "Kannada Medium",
      grades: "Grades 8 - 10",
      description:
        "High school education in Kannada medium, preparing students for the state board exams with specialized attention to regional language proficiency.",
      subjects: [
        "Kannada (FL)",
        "Mathematics",
        "Science",
        "Social Science",
        "English (SL)",
        "Hindi (TL)",
        "Physical Education",
      ],
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop",
      color: "emerald",
    },
    {
      id: "puc-science",
      title: "PUC - Science",
      medium: "English Medium",
      grades: "I & II PUC",
      description:
        "Providing advanced scientific education with state-of-the-art laboratories and expert coaching for competitive exams like KCET, NEET, and JEE.",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "English",
        "Kannada/Hindi",
        "Electronics",
        "Computer Science",
      ],
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      color: "purple",
    },
    {
      id: "puc-commerce",
      title: "PUC - Commerce",
      medium: "English Medium",
      grades: "I & II PUC",
      description:
        "A comprehensive commerce program focusing on business studies, accountancy, and economics to prepare students for professional careers in finance and management.",
      subjects: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Statistics",
        "English",
        "Kannada/Hindi",
        "Computer Science",
      ],
      image:
        "https://images.unsplash.com/photo-1454165833767-027ffea9e78b?q=80&w=2070&auto=format&fit=crop",
      color: "rose",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="relative bg-blue-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            At St. Joseph's Briand Square, we offer diverse educational pathways
            through our Primary, High School, and Pre-University sections.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300 scroll-mt-24"
            >
              <Link
                href={`/academics/${category.id}`}
                className="relative h-64 block"
              >
                <Image
                  src={category.image}
                  alt={category.medium}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                    category.color === "blue"
                      ? "bg-blue-600"
                      : category.color === "amber"
                        ? "bg-amber-600"
                        : category.color === "indigo"
                          ? "bg-indigo-600"
                          : "bg-emerald-600"
                  }`}
                >
                  {category.grades}
                </div>
              </Link>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Link
                      href={`/academics/${category.id}`}
                      className="block group/title"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 group-hover/title:text-blue-600 transition-colors">
                        {category.title}
                      </h2>
                    </Link>
                    <p
                      className={`text-lg font-semibold ${
                        category.color === "blue"
                          ? "text-blue-600"
                          : category.color === "amber"
                            ? "text-amber-600"
                            : category.color === "indigo"
                              ? "text-indigo-600"
                              : "text-emerald-600"
                      }`}
                    >
                      {category.medium}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Key Subjects
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {category.subjects.slice(0, 5).map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                    {category.subjects.length > 5 && (
                      <span className="px-3 py-1 bg-gray-50 text-gray-400 text-sm rounded-lg font-medium">
                        +{category.subjects.length - 5} more
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/academics/${category.id}`}
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-md hover:shadow-lg ${
                      category.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : category.color === "amber"
                          ? "bg-amber-600 hover:bg-amber-700 text-white"
                          : category.color === "indigo"
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                            : category.color === "emerald"
                              ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                              : category.color === "purple"
                                ? "bg-purple-600 hover:bg-purple-700 text-white"
                                : "bg-rose-600 hover:bg-rose-700 text-white"
                    }`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose St. Joseph's Academics? */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Academic Approach
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Holistic Curriculum
              </h3>
              <p className="text-gray-600">
                Balanced focus on academics, co-curricular activities, and
                physical education for all-round growth.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Experienced Faculty
              </h3>
              <p className="text-gray-600">
                Highly qualified and dedicated teachers who are passionate about
                nurturing young minds.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Critical Thinking
              </h3>
              <p className="text-gray-600">
                Encouraging curiosity and logical reasoning to prepare students
                for real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
