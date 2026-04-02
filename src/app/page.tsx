import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        <div className="absolute inset-0 bg-[url('/Schoolground.jpg')] bg-cover bg-center" />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to St. Joseph&apos;s School Briand Square
          </h1>
          <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
            Empowering minds, building character, and shaping futures since
            1867.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admission"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-full font-bold text-lg transition-all"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white px-8 py-3 rounded-full font-bold text-lg transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose St. Joseph&apos;s School?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-800">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-800">
                <svg
                  className="w-6 h-6"
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
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Academic Excellence
              </h3>
              <p className="text-gray-600">
                Consistently ranked among the top schools for our rigorous
                curriculum and outstanding board results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-800">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.642.321a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.168 1.168a2 2 0 00-.586 1.414v1.414c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-1.414a2 2 0 00-.586-1.414l-1.168-1.168z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11V3m0 0l-3 3m3-3l3 3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Holistic Development
              </h3>
              <p className="text-gray-600">
                Focus on sports, arts, and character building to ensure our
                students are well-rounded individuals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-800">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 13a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Skills & Innovation
              </h3>
              <p className="text-gray-600">
                Our Institute of Skills provides students with modern, hands-on
                technical training for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates / Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                School Life & Events
              </h2>
              <div className="w-16 h-1 bg-yellow-500" />
            </div>
            <Link
              href="/gallery"
              className="text-blue-800 font-bold hover:underline"
            >
              View Gallery &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "1509062522246-3755977927d7", title: "School Building" },
              { id: "1523050854058-8df90110c9f1", title: "Graduation" },
              { id: "1503676260728-1c00da094a0b", title: "Classroom" },
              { id: "1511632765486-a01980e01a18", title: "Campus Life" },
            ].map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg aspect-square shadow-md"
              >
                <Image
                  src={`https://images.unsplash.com/photo-${img.id}?auto=format&fit=crop&w=800&q=80`}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Admissions are open for the upcoming academic year. Take the first
            step towards a bright future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admission"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Start Admission Process
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
