import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              St. Joseph&apos;s School Briand Square
            </h3>
            <p className="text-blue-200 mb-6 max-w-md">
              Providing quality education since 1867. Nurturing students to
              become responsible citizens and future leaders through excellence
              in academics, sports, PUC education, and skills development.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/alumni"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  href="/institute-of-skills"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Institute of Skills
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-2 text-blue-200">
              <li>Sultan Rd, New Tharagupet,</li>
              <li>Bengaluru, Karnataka 560002</li>
              <li>
                <Mail size={20} strokeWidth={1} />
                info@stjosephsbriandsquare.com
              </li>
              <li>
                <Phone size={20} strokeWidth={1} /> +91 8317435158
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-400 text-sm">
          &copy; {new Date().getFullYear()} St. Joseph&apos;s Briand Square All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
