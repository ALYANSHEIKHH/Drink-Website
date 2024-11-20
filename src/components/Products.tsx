"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
type ArrowProps = {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  };
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Categories = () => {
  const categories = [
    { id: 1, title: "Classic Coke", image: "/warsawpoland-september-2014-coca-cola-600nw-494968117.webp" },
    { id: 2, title: "Diet Coke", image: "/warsawpoland-september-2014-coca-cola-600nw-494968117.webp" },
    { id: 3, title: "Coke Zero", image: "/warsawpoland-september-2014-coca-cola-600nw-494968117.webp" },
    { id: 4, title: "Vanilla Coke", image: "/warsawpoland-september-2014-coca-cola-600nw-494968117.webp" },
    { id: 5, title: "Cherry Coke", image: "/warsawpoland-september-2014-coca-cola-600nw-494968117.webp" },
  ];

  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
      className="absolute top-[50%] right-[-40px] z-10 cursor-pointer text-red-600"
      onClick={onClick}
    >
      <RiArrowRightSLine size={40} />
    </div>
  );
  
  const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
      className="absolute top-[50%] left-[-40px] z-10 cursor-pointer text-red-600"
      onClick={onClick}
    >
      <RiArrowLeftSLine size={40} />
    </div>
  );
  
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full py-12 bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Explore Our <span className="text-red-600">Categories</span>
        </h2>
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <div key={category.id} className="px-4">
              <div className="group bg-gradient-to-b from-gray-700 to-black rounded-lg shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-300">
                    Indulge in the classic taste of Coca-Cola, reimagined with a twist.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Categories;
