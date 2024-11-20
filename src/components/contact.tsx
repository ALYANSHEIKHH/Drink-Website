"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Image from "next/image";

// Contact Us Page Component
const ContactUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white">
      {/* Contact Header */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        {/* <Image
          src="/LKK.jpg"
          alt="Contact Us Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-50"
        /> */}
        <div className="z-10 max-w-3xl px-6 text-center">
          <h1 className="text-6xl font-extrabold text-white leading-tight mb-4" data-aos="fade-up">
            Get in Touch with <span className="text-red-500">Us</span>
          </h1>
          <p className="text-lg text-gray-300" data-aos="fade-up" data-aos-delay="200">
            Have any questions? We’re here to help! Reach out to us and let’s create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500" data-aos="fade-up">
            Contact Form
          </h2>
          <p className="mt-4 text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
            We’d love to hear from you. Fill out the form and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg shadow-xl border-2 border-red-500" data-aos="fade-up">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-xl font-semibold text-white" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xl font-semibold text-white" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xl font-semibold text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={6}
                className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 text-xl font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
              >
                Send Message <IoMdSend className="ml-2" size={22} />
              </button>
            </div>
          </form>
        </div>
      </section>

     
    </div>

      {/* Location Map Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-yellow-500 mb-6" data-aos="fade-up">
            Find Us on the Map
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen={true}  // Pass a boolean, not a string
  loading="lazy"
  className="rounded-lg shadow-lg"
/>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
