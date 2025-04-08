import React from 'react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/images/What-we-do-gallery1.jpeg"
import img2 from "../assets/images/What-we-do-gallery2.jpeg"
import img3 from "../assets/images/What-we-do-gallery3.jpeg"
import img4 from "../assets/images/What-we-do-gallery4-1.jpeg"
const WhatToDoSlider = () => {
    return (
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img3} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default WhatToDoSlider;