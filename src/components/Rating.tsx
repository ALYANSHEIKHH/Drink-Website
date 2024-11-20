"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaStar } from "react-icons/fa";

// Next.js Component
const CustomerRatingsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
            Discover why we are loved by our customers.
          </p>
        </div>

        {/* Customer Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {/* Customer Review 1 */}
          <div
            className="bg-gray-700 rounded-lg shadow-md text-center py-8 px-6 transition-all duration-300 transform hover:bg-gray-600 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="mb-6">
              <Image
                src="/1.png"
                alt="Customer"
                width={100}
                height={100}
                className="rounded-full mx-auto border-4 border-red-500 transition-all duration-300 transform hover:scale-110"
              />
            </div>
            <p className="text-lg text-gray-200 mb-4">
            `&quot;This service changed the way we approach projects. Absolutely transformative!`
            </p>
            <div className="flex justify-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">Alice Johnson</h3>
            <p className="text-sm text-gray-400">Creative Director at XYZ Corp.</p>
          </div>

          {/* Customer Review 2 */}
          <div
            className="bg-gray-700 rounded-lg shadow-md text-center py-8 px-6 transition-all duration-300 transform hover:bg-gray-600 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="mb-6">
              <Image
                src="/2.png"
                alt="Customer"
                width={100}
                height={100}
                className="rounded-full mx-auto border-4 border-red-500 transition-all duration-300 transform hover:scale-110"
              />
            </div>
            <p className="text-lg text-gray-200 mb-4">
            `&quot;An incredible experience with amazing results. Highly recommend!`
            </p>
            <div className="flex justify-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">Mark Smith</h3>
            <p className="text-sm text-gray-400">Lead Engineer at InnovateTech</p>
          </div>

          {/* Customer Review 3 */}
          <div
            className="bg-gray-700 rounded-lg shadow-md text-center py-8 px-6 transition-all duration-300 transform hover:bg-gray-600 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="mb-6">
              <Image
                src="/3.png"
                alt="Customer"
                width={100}
                height={100}
                className="rounded-full mx-auto border-4 border-red-500 transition-all duration-300 transform hover:scale-110"
              />
            </div>
            <p className="text-lg text-gray-200 mb-4">
            `&quot;Truly a next-level service, exceeded all of our expectations!`
            </p>
            <div className="flex justify-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">Sara Lee</h3>
            <p className="text-sm text-gray-400">Marketing Manager at GlobalReach</p>
          </div>

          {/* Customer Review 4 */}
          {/* <div
            className="bg-gray-700 rounded-lg shadow-md text-center py-8 px-6 transition-all duration-300 transform hover:bg-gray-600 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="mb-6">
              <Image
                src="/customer4.jpg"
                alt="Customer"
                width={100}
                height={100}
                className="rounded-full mx-auto border-4 border-red-500 transition-all duration-300 transform hover:scale-110"
              />
            </div>
            <p className="text-lg text-gray-200 mb-4">
              "A game changer in our industry. We saw massive growth thanks to their services!"
            </p>
            <div className="flex justify-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">David Brown</h3>
            <p className="text-sm text-gray-400">CEO at Visionary Solutions</p>
          </div>
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default CustomerRatingsPage;
