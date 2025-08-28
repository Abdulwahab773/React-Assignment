import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white cursor-pointer mb-4">Wahabstore</h2>
          <p className="text-gray-400 leading-relaxed">
            Your one-stop shop for quality and affordable products. At{" "}
            <span className="text-white font-medium">Wahabstore</span>, we
            believe shopping should be simple, reliable, and enjoyable.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest offers and product updates.
          </p>
          <div className="flex items-center">
            <input 
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg outline-none text-white border border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 px-5 py-2 ml-5 rounded-r-lg text-white hover:bg-blue-700 transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Wahabstore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
