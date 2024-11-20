"use client";
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-6 relative">
      {/* Decorative Gradient Circle */}
      <div className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-30 -top-20 -left-40"></div>
      <div className="absolute w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-30 -bottom-20 -right-40"></div>

      {/* Hero Content */}
      <div className="z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-6">
          {subtitle}
        </p>
        <button
          className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
