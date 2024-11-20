"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      {/* <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/Lk.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-40"
        />
        <div className="z-10 max-w-3xl px-6 text-center">
          <h1 className="text-6xl font-extrabold text-white tracking-wider leading-tight mb-4" data-aos="fade-up">
            About <span className="text-red-500">Us</span>
          </h1>
          <p className="mt-6 text-xl font-light text-gray-300" data-aos="fade-up" data-aos-delay="200">
            We redefine innovation, blending creativity and technology to
            deliver unparalleled experiences.
          </p>
          <button className="mt-8 bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-red-700 transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </section> */}

      
      {/* Values Section */}
      <section className="py-16 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-red-500" data-aos="fade-up">
            Our Core Values
          </h2>
          <p className="mt-4 text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
            Integrity, innovation, and collaboration are at the heart of everything we do.
          </p>
        </div>

        <div className="flex justify-center gap-12">
          {/* Values */}
          {["Integrity", "Innovation", "Collaboration"].map((value, i) => (
            <div key={i} className="text-center max-w-[250px]" data-aos="fade-up" data-aos-delay={i * 200}>
              <div className="bg-red-600 p-6 rounded-full mb-4">
                <i className="ri-leaf-line text-white text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">{value}</h3>
              <p className="text-sm text-gray-400 mt-2">We prioritize these values to drive success.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Highlights Section */}
      <section className="py-16 bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-red-500 tracking-wide" data-aos="fade-up">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
            Our team consists of passionate and dedicated professionals who
            bring their expertise to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-16">
          {/* Team Member */}
          {["1.png", "3.png", "2.png"].map((img, i) => (
            <div key={i} className="text-center max-w-[200px]" data-aos="fade-up" data-aos-delay={i * 100}>
              <Image
                src={`/${img}`}
                alt="Team Member"
                width={150}
                height={150}
                className="rounded-full border-8 border-red-600 transform hover:scale-105 transition-all duration-500 ease-in-out shadow-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold text-white">John Doe</h3>
              <p className="text-sm text-gray-400">Chief Executive Officer</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
