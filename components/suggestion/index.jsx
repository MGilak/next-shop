import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SuggestItem from "./suggestItem";

export default function Suggestion() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={8}
        spaceBetween={2}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper suggestSlider container  mt-12"
      >
        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>

        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>

        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>

        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
