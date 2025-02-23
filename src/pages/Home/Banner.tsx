"use client";

import { Carousel } from "antd";
import banner1 from "./../../assets/images/imag1.jpg";
import banner2 from "./../../assets/images/image2.jpg";
import banner3 from "./../../assets/images/image3.jpg";
import banner4 from "./../../assets/images/image4.jpg";
import banner5 from "./../../assets/images/image5.jpg";

const Banner = () => {
  const images = [banner1, banner2, banner3, banner4, banner5];

  return (
    <div className="relative">
      <Carousel
        autoplay
        className="mySwiper h-full overflow-hidden font-orbitron"
      >
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-transparent"
              style={{
                backgroundImage: `url(${image})`,
                filter: "brightness(1.1)",
              }}
            />
          </div>
        ))}
      </Carousel>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black font-orbitron bg-opacity-50 font-bold">
        {/* Text */}
        <div className="relative z-20 text-center max-w-4xl px-4 text-[10px] md:text-base lg:text-4xl font-orbitron font-bold">
          <h2 className="pb-2">
            <span className="text-blue-400 pr-2">Shop with Trust</span>
            <span className="text-red-500">and Confidence</span>
          </h2>
          <p className="text-[15px] md:text-xl mb-6">
            Join our Community to stay up to date
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex z-20 items-center justify-center max-w-lg md:w-full text-[10px] md:text-sm lg:text-base">
          <form className="flex w-full items-center space-x-2">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-l-md text-gray-800"
              placeholder="Search for shopping...."
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white font-semibold rounded-r-md"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
