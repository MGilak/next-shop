import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider({ data }) {
  return (
    <>
      <Swiper
        spaceBetween={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper main-slider container mx-auto mt-10"
      >
        {data.map((item) => (
          <SwiperSlide>
            <div className="h-full">
              <img
                className="w-full object-fill"
                src={item.url}
                alt="logo-header"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
