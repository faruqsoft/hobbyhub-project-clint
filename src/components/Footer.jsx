import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-14 mt-24 border-t-4 border-indigo-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">HobbyHub</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-indigo-300 transition">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition">Our Mission</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition">Community Guidelines</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">Explore</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/groups" className="hover:text-indigo-300 transition">All Groups</a></li>
            <li><a href="/create" className="hover:text-indigo-300 transition">Create a Group</a></li>
            <li><a href="/myGroups" className="hover:text-indigo-300 transition">My Groups</a></li>
            <li><a href="/faq" className="hover:text-indigo-300 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-indigo-300 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition">Safety Tips</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition">Terms of Use</a></li>
            <li><a href="#" className="hover:text-indigo-300 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/omar.faruq.399"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-xl transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@omarfaruq1905"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 text-xl transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-faruq-5a771a267/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-xl transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/omar.sau/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-xl transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 border-t border-gray-700">
        <div className="text-center py-6 text-sm text-gray-500">
          © 2025 <span className="text-indigo-400 font-semibold">HobbyHub</span> by Omar Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
