import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
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
        <SwiperSlide>
          <img
            className="w-full"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/665e64874b02d76cc3e8b4015bd8715ea2409e86_1681542692.jpg?x-oss-process=image/quality,q_95"
            alt="logo-header"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/fe2491448fa82a761c8e01d3e77b73180f5c9bae_1681542840.jpg?x-oss-process=image/quality,q_95"
            alt="logo-header"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a841802b4c0e1f054c65333b1c5c81dc8c76b27b_1681541858.jpg?x-oss-process=image/quality,q_95"
            alt="logo-header"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
