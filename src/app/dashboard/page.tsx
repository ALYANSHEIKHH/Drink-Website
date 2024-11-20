import Navbar from '@/components/Navbars'
import React from 'react'
import Image from 'next/image'
import {  RiShoppingBag3Line, RiAddFill } from "react-icons/ri";
import Categories from '@/components/Products';
import AboutPage from '@/components/About';
import CustomerRatingsPage from '@/components/Rating';
import ContactUsPage from '@/components/contact';
import Footer from '@/components/footer';


const page = () => {
  return (
    <div>
      <Navbar/>
      <section className="w-full h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/warsawpoland-september-2014-coca-cola-600nw-494968117.webp"
        alt="Coca-Cola"
        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-80"
        width={1200}
        height={600}
      />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 text-white">
        {/* Left Section */}
        <div className="md:w-1/3 space-y-6 mt-20" >
          <h1 className="text-3xl md:text-6xl font-extrabold">
            Your favorite <span className="text-red-500">Coke</span> just got reinvented.
          </h1>
          <p className="text-lg md:text-lg leading-relaxed">
            Discover the fizz, the flavor, and the moments that make life special. Taste the luxury today!
          </p>
          <button className="flex items-center space-x-3 bg-red-600 hover:bg-red-700 py-3 px-6 rounded-lg shadow-lg transition-all">
            <RiShoppingBag3Line className="text-2xl" />
            <span className="text-lg font-medium">Taste Now</span>
          </button>
        </div>

        {/* Center Image */}
        <div className="hidden md:block md:w-1/3 mt-20">
          <Image
            src="/imagess.png"
            alt="Coca-Cola Bottle"
            className="rounded-xl shadow-2xl"
            width={400}
            height={500}
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 mt-20 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Description</h1>
            <RiAddFill className="text-2xl cursor-pointer" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Nutrients</h1>
            <RiAddFill className="text-2xl cursor-pointer" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Ingredients</h1>
            <p className="text-sm text-gray-300">
              Made with carbonated water, sugar, caffeine, and love.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Categories/>
    <AboutPage/>
    <CustomerRatingsPage/>
    <ContactUsPage/>
    <Footer/>
    </div>
  )
}

export default page
