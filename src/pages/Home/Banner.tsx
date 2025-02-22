"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./../../styles/styles.css";

import banner1 from './../../assets/images/imag1.jpg';
import banner2 from './../../assets/images/image2.jpg';
import banner3 from './../../assets/images/image3.jpg';
import banner4 from './../../assets/images/image4.jpg';
import banner5 from './../../assets/images/image5.jpg';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const images=[banner1,banner2,banner3,banner4,banner5];
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full  overflow-hidden font-orbitron"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 font-orbitron">
        {/* Text */}
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h2 className="text-lg md:text-3xl lg:text-5xl  font-bold md:p-4 font-jost">
            <span className="text-blue-400 pr-2">Shop with Trust</span>
            <span className="text-red-500">and Confidence</span>
          </h2>
          <p className="text-[15px] md:text-xl mb-6">
            Join our Community to up to date
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex z-20 items-center justify-center max-w-lg md:w-full">
          <form className="flex w-full items-center space-x-2">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-l-md text-gray-800"
              placeholder="Search for shoping...."
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
