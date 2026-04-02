import React from "react";

const AdmissionPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section */}
      <section className="relative bg-blue-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join the St. Joseph&apos;s family at Briand Square. We are now accepting
            applications for Primary, High School, and Pre-University (PUC)
            courses for the upcoming academic year.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary School Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-48 bg-blue-600 flex items-center justify-center text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Primary School</h2>
                <p className="text-blue-100">Grades 1 - 7</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Eligibility & Requirements
              </h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Minimum age of 6 years for Grade 1
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Original Birth Certificate
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Previous school records (if applicable)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Immunization records
                </li>
              </ul>
              <button className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors">
                Download Primary Prospectus
              </button>
            </div>
          </div>

          {/* High School Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-48 bg-yellow-500 flex items-center justify-center text-blue-900">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">High School</h2>
                <p className="text-blue-800">Grades 8 - 10</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Eligibility & Requirements
              </h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Transfer Certificate from previous school
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Academic transcripts for last 2 years
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Entrance Exam (for Grades 9-11)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Aadhar Card / Identity Proof
                </li>
              </ul>
              <button className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors">
                Download High School Prospectus
              </button>
            </div>
          </div>
        </div>

        {/* PUC Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-48 bg-purple-600 flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">
                Pre-University College (PUC)
              </h2>
              <p className="text-purple-100">Science & Commerce Streams</p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Streams & Combinations
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-bold text-purple-600 mr-2">
                      Science:
                    </span>{" "}
                    PCMB (Phy, Che, Mat, Bio), PCMC (Phy, Che, Mat, Comp)
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-purple-600 mr-2">
                      Commerce:
                    </span>{" "}
                    EBAC (Eco, Bus, Acc, Comp), EBAS (Eco, Bus, Acc, Stat)
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-purple-600 mr-2">
                      Languages:
                    </span>{" "}
                    English (Compulsory), Kannada/Hindi (Optional)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Eligibility
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Successful completion of SSLC/10th Grade
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Original Transfer Certificate (TC)
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    SSLC Marks Card (Original + 3 Attested Copies)
                  </li>
                </ul>
              </div>
            </div>
            <button className="mt-8 w-full bg-purple-700 text-white font-bold py-4 rounded-xl hover:bg-purple-800 transition-colors shadow-lg">
              Download PUC Prospectus & Apply Online
            </button>
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              How to Apply
            </h2>
            <p className="text-gray-600">
              Follow these simple steps to secure your admission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Inquiry",
                desc: "Fill out the online inquiry form or visit our campus.",
              },
              {
                step: "02",
                title: "Visit",
                desc: "Schedule a campus tour and meet our counselors.",
              },
              {
                step: "03",
                title: "Submit",
                desc: "Submit the application form with required documents.",
              },
              {
                step: "04",
                title: "Interact",
                desc: "Student interaction and assessment process.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative"
              >
                <span className="text-4xl font-black text-blue-50/50 absolute top-4 right-4">
                  {item.step}
                </span>
                <h4 className="text-lg font-bold text-blue-900 mb-2 relative z-10">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Form Placeholder */}
        <div className="mt-20 bg-blue-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
              Online Admission Inquiry
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Grade Applying For
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 font-medium text-black">
                  <option>Select Grade / Course</option>
                  <optgroup label="Primary School">
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                  </optgroup>
                  <optgroup label="High School">
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                  </optgroup>
                  <optgroup label="PUC College">
                    <option value="I PUC Science">I PUC Science</option>
                    <option value="I PUC Commerce">I PUC Commerce</option>
                    <option value="II PUC Science">II PUC Science</option>
                    <option value="II PUC Commerce">II PUC Commerce</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Parent name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Phone number"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
