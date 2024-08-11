"use client";
import React, { useEffect, useState } from "react";
import { slides } from "./Slides"; // Ensure `slides` is an array of objects with `src`, `title`, and `p` properties
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide show
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Changes every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Set arrow slide
  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[80dvh] md:h-screen overflow-hidden">
      {/* Image carousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              className="w-full h-full object-cover"
              alt={slide.title}
              layout="fill" // Ensure images cover the container
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Slides text */}
          <div className="absolute top-0 left-0 right-0 mt-[10rem] md:mt-[15rem] text-center text-white z-10">
            <h2 className="font-bold text-3xl md:text-8xl text-orange-500">
              {slide.title}
            </h2>
            <p className="my-2 text-[18px]">{slide.p}</p>
          </div>

          {/* Arrow navigation */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 z-20">
            <BsChevronCompactLeft
              onClick={prevSlide}
              className="text-6xl cursor-pointer text-white"
            />
            <BsChevronCompactRight
              onClick={nextSlide}
              className="text-6xl cursor-pointer text-white"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
