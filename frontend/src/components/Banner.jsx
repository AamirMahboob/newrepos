import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Banner = () => {
   const [currentSlide,setCurrentSlide]=useState(0)
  const images = [
    "https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/23/19/38/shopping-carts-1275480_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev)=> prev-1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3? 0 : (prev)=> prev+1)
  }
  return (
    <div className="w-full h-auto overflow-x-hidden   ">
      <div
        
        className="relative w-screen h-[550px]"
      >
        <div className="flex    transition-transform duration-1000   h-full w-[400vw] " style={{transform: `translateX(-${currentSlide * 100}vw)`}} >
          {images.map((image, index) => (
            <img src={image} alt="dsa" className="w-screen  object-cover " />
          ))}
        </div>
        <div className="flex gap-5 absolute z-20 mx-auto bottom-10 left-0 right-0 justify-center w-fit">

          <div
            onClick={prevSlide}
            className="w-14 border border-black p-4  text-white hover:bg-gray-700 cursor-pointer active:bg-gray-900  hover:text-white duration-300"
          >
            <BsArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 border border-black p-4 text-white hover:bg-gray-700 active:bg-gray-900  cursor-pointer hover:text-white duration-300"
          >
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
