import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import LineFooter from "./Dashboard/LineFooter";

export const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <Link to="/">
            <img
              className="w-32 mb-4"
              src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
              alt="Logo"
            />
          </Link>
          <p className="text-sm text-gray-400">
            Bringing you the best services with quality and reliability.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-2 px-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-white"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>

          <h2 className="text-lg font-semibold mt-6">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
       <LineFooter/>
      </div>
    </footer>
  );
};
