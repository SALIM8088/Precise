import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const images = [
    "/images/dam1.jpg",
    "/images/dam2.jpg",
    "/images/dam3.jpg",
    "/images/dam4.jpg",
    "/images/dam5.jpg",
  ];

  return (
    <section className="w-full h-[700px] bg-gray-900">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
