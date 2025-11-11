import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HabitTracker = () => {
  const slides = [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80",
  ];

  return (
    <div className="container mx-auto py-6 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="h-[380px] sm:h-[480px]   flex items-center justify-center">
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  
    </div>
  );
};

export default HabitTracker;
