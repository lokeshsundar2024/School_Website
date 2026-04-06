import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Timetable from "@/components/Timetable";

interface CategoryData {
  title: string;
  medium: string;
  grades: string;
  description: string;
  curriculum: string[];
  subjects: string[];
  image: string;
  color: string;
}

const categoryData: Record<string, CategoryData> = {
  "primary-english": {
    title: "Primary School",
    medium: "English Medium",
    grades: "Grades 1 - 7",
    description:
      "Our Primary School (English Medium) at St. Joseph's Briand Square focuses on providing a strong academic foundation while nurturing the natural curiosity and creativity of young learners. We follow a comprehensive curriculum that integrates core subjects with extracurricular activities.",
    curriculum: [
      "Language development in English through phonics and reading programs.",
      "Mathematical reasoning and problem-solving skills.",
      "Environmental science to build awareness of the natural world.",
      "Holistic development through art, music, and physical education.",
      "Introduction to computers and digital literacy.",
    ],
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social Science",
      "Kannada/Hindi",
      "Physical Education",
      "Art & Craft",
      "Computer Science",
    ],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    color: "blue",
  },
  "primary-kannada": {
    title: "Primary School",
    medium: "Kannada Medium",
    grades: "Grades 1 - 7",
    description:
      "The Primary School (Kannada Medium) at St. Joseph's ensures that students receive a high-quality education in their regional language, fostering a deep connection to their heritage and identity while maintaining academic excellence.",
    curriculum: [
      "Strong emphasis on Kannada language proficiency and literature.",
      "Foundational mathematics and logical thinking.",
      "General science and social awareness through Kannada medium.",
      "Traditional arts and cultural integration.",
      "Basic English as a second language to ensure bilingual proficiency.",
    ],
    subjects: [
      "Kannada",
      "English",
      "Mathematics",
      "Science",
      "Social Science",
      "Physical Education",
      "Moral Science",
      "Yoga",
    ],
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    color: "amber",
  },
  "highschool-english": {
    title: "High School",
    medium: "English Medium",
    grades: "Grades 8 - 10",
    description:
      "Our High School (English Medium) prepares students for the challenges of higher education and professional life. We emphasize critical thinking, leadership, and a rigorous academic program that culminates in the SSLC board examinations.",
    curriculum: [
      "In-depth study of Sciences (Physics, Chemistry, Biology) and Mathematics.",
      "Comprehensive Social Science program covering History, Civics, and Geography.",
      "Advanced English language and literature studies.",
      "Career guidance and personality development workshops.",
      "Preparatory tests and intensive coaching for board exams.",
    ],
    subjects: [
      "English (FL)",
      "Mathematics",
      "Science",
      "Social Science",
      "Kannada (SL)",
      "Hindi (TL)",
      "Information Technology",
      "Laboratory Work",
    ],
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
    color: "indigo",
  },
  "highschool-kannada": {
    title: "High School",
    medium: "Kannada Medium",
    grades: "Grades 8 - 10",
    description:
      "The High School (Kannada Medium) program is dedicated to empowering students with a robust education in Kannada. We prepare students for the state board examinations with specialized attention to regional language proficiency and academic success.",
    curriculum: [
      "Rigorous training in core subjects through Kannada medium.",
      "Special focus on Kannada literature and creative writing.",
      "Practical science experiments and field studies.",
      "Civic education and leadership development.",
      "Systematic preparation for the SSLC examinations.",
    ],
    subjects: [
      "Kannada (FL)",
      "Mathematics",
      "Science",
      "Social Science",
      "English (SL)",
      "Hindi (TL)",
      "Physical Education",
      "Civics",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop",
    color: "emerald",
  },
  "puc-science": {
    title: "PUC - Science",
    medium: "English Medium",
    grades: "I & II PUC",
    description:
      "Our Pre-University Course in Science is designed to prepare students for professional careers in engineering, medicine, and pure sciences. We provide a rigorous academic environment with specialized coaching for competitive exams.",
    curriculum: [
      "Intensive practical training in Physics, Chemistry, and Biology laboratories.",
      "Integrated coaching for NEET, JEE, and KCET exams.",
      "Guest lectures by industry experts and academic scholars.",
      "Regular assessments and mock tests for board and competitive exams.",
      "Career guidance for national and international science careers.",
    ],
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
  "puc-commerce": {
    title: "PUC - Commerce",
    medium: "English Medium",
    grades: "I & II PUC",
    description:
      "The PUC Commerce stream at St. Joseph's provides a strong foundation in business, accounting, and economics. Our goal is to prepare students for professional courses like CA, CS, and management studies.",
    curriculum: [
      "In-depth understanding of financial accounting and auditing.",
      "Business management and entrepreneurship skills development.",
      "Analysis of macro and microeconomics in the global context.",
      "Computer applications in business and accounting (Tally, Excel).",
      "Soft skills and communication training for professional environments.",
    ],
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
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    color: "rose",
  },
};

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }));
}

const CategoryPage = async ({ params }: { params:Promise<{ category: string }> }) => {
  const { category } = await params;
  const data = categoryData[category];

  if (!data) {
    notFound();
  }

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-600 text-blue-600 border-blue-100";
      case "amber":
        return "bg-amber-600 text-amber-600 border-amber-100";
      case "indigo":
        return "bg-indigo-600 text-indigo-600 border-indigo-100";
      case "emerald":
        return "bg-emerald-600 text-emerald-600 border-emerald-100";
      case "purple":
        return "bg-purple-600 text-purple-600 border-purple-100";
      case "rose":
        return "bg-rose-600 text-rose-600 border-rose-100";
      default:
        return "bg-gray-600 text-gray-600 border-gray-100";
    }
  };

  const bgClass = getColorClass(data.color).split(" ")[0];
  const textClass = getColorClass(data.color).split(" ")[1];
  // const borderClass = getColorClass(data.color).split(" ")[2];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Banner */}
      <section className="relative bg-blue-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto">
          <Link
            href="/academics"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
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
            Back to Academics
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{data.title}</h1>
          <p className="text-2xl font-medium text-white/90">{data.medium}</p>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-12 min-w-0">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h2 className={`text-3xl font-bold ${textClass} mb-6`}>
                Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {data.description}
              </p>

              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 shadow-inner">
                <Image
                  src={data.image}
                  alt={data.medium}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className={`text-2xl font-bold ${textClass} mb-6`}>
                Key Curriculum Highlights
              </h3>
              <ul className="space-y-4">
                {data.curriculum.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`mt-1.5 mr-4 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${bgClass} text-white`}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timetable Section */}
            <div className="w-full overflow-hidden">
              <Timetable color={data.color} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full xl:w-80 space-y-8 flex-shrink-0">
            {/* Quick Info */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Quick Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Grades</span>
                  <span className={`font-bold ${textClass}`}>
                    {data.grades}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Medium</span>
                  <span className={`font-bold ${textClass}`}>
                    {data.medium.split(" ")[0]}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-500 font-medium">Session</span>
                  <span className={`font-bold ${textClass}`}>Morning</span>
                </div>
              </div>
            </div>

            {/* Subjects */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Subjects Offered
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.subjects.map((subject: string, index: number) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-xl font-medium text-sm bg-gray-50 text-gray-700 border border-gray-100`}
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`${bgClass} p-8 rounded-3xl shadow-xl text-white`}>
              <h3 className="text-xl font-bold mb-4">Interested in Joining?</h3>
              <p className="text-white/80 mb-6">
                Learn more about our admission process and requirements for this
                academic year.
              </p>
              <Link
                href="/admission"
                className="block w-full text-center bg-white text-gray-900 font-bold py-4 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg"
              >
                View Admission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
