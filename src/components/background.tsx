"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CocaColaBackground = () => {
  const router = useRouter();

  // Redirect to dashboard after 6 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/dashboard");
    }, 6000); // 6-second delay

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden text-white">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-black to-red-800 animate-gradient z-0"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random()}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="z-20 text-center">
        <h1 className="text-6xl font-extrabold mb-8 text-red-500 animate-fadeIn">
          Taste the Luxury of <span className="text-white">Coca-Cola</span>
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Elevate your moments with a world of fizz and flavor.
        </p>

        {/* 3D Rotating Globe */}
        <div className="relative w-64 h-64 mx-auto rounded-full animate-spin-slow">
          <div className="absolute inset-0 border-[15px] border-red-600 rounded-full opacity-60"></div>
          <Image
            src="/coca-cola-logo-png-3.png"
            alt="Coca-Cola Logo"
            fill
            className="object-contain rounded-full"
          />
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-red-500 rounded-full blur-3xl opacity-40 top-1/4 left-1/4"></div>
      <div className="absolute w-[500px] h-[500px] bg-red-700 rounded-full blur-3xl opacity-40 bottom-1/4 right-1/4"></div>

      {/* Animation Styles */}
      <style jsx>{`
        /* Gradient Animation */
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }

        /* Floating Particles Animation */
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.2);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        /* Fade-In Effect */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }

        /* Slow Spin Effect */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CocaColaBackground;
