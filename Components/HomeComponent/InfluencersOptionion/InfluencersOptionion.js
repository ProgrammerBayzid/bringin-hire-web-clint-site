import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import Image from "next/image";

const InfluencersOptionion = () => {
  return (
    <div className="mb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <h2 className="text-[50px] font-bold mb-12 text-center">Influencers Opinion</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card w-[795px] h-[410px] bg-base-200 shadow-xl">
            <div className="flex gap-7 px-5 py-5">
              <div>
                <div className="card w-[289px] h-[368px] bg-white shadow-xl">
                  <figure className="mt-2 ">
                    <Image
                      src="/IMG20201226174637.jpg"
                      height={304}
                      width={269}
                      className=" rounded"
                    ></Image>
                  </figure>
                  <div className="card-body items-center text-center ">
                    <h2 className="card text-[16px] font-bold">Asif Mehdi</h2>
                    <p>Writter</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-[795px] h-[410px] bg-base-200 ">
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-[795px] h-[410px] bg-base-200 ">
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default InfluencersOptionion;
