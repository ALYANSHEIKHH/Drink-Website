"use client";
import React, { useEffect } from "react";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-black via-gray-800 to-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section - Quick Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-red-500 mb-6">Quick Links</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <a href="#home" className="hover:text-red-500 transition duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-red-500 transition duration-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1 mr-40">
          <div data-aos="fade-up" data-aos-delay="200" className="text-center md:justify-center">
            <h3 className="text-2xl font-semibold text-red-500 mb-6">Subscribe to Our Newsletter</h3>
            <form action="#" className="flex flex-col sm:flex-row items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full sm:w-72 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          </div>
          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-semibold text-red-500 mb-6">Contact Us</h3>
            <p className="text-lg mb-2">123 Main St, City, Country</p>
            <p className="text-lg mb-2">Phone: +123-456-7890</p>
            <p className="text-lg">Email: contact@yourcompany.com</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-red-500 mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-red-500 transition-all duration-300"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-red-500 transition-all duration-300"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-red-500 transition-all duration-300"
            >
              <IoLogoInstagram />
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mb-8">
          <a
            href="#top"
            className="text-xl font-semibold text-red-500 flex items-center hover:text-white transition duration-300"
          >
            <FaArrowUp className="mr-2" size={24} />
            Back to Top
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p className="text-lg">
            © {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
