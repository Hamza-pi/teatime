"use client";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { handleToast } from "@/utils/showToast";
import { FiCheckCircle,FiPlusCircle  } from "react-icons/fi";
import { CgCalendar } from "react-icons/cg";

const WhatsCooking = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const [selected, setSelected] = useState(0);

  const [total, setTotal] = useState(0);

  const inputStyle =
    "outline-none border-none placeholder:text-white text-white font-bold bg-[#FFFFFF0D] rounded-xl pl-5 pr-8 py-3";

  const date = useRef(null);

  const pagination = {
    clickable: true,
  };
  const slides = [
    [
      { url: "/images/temp1.png" },
      { url: "/images/temp2.png" },
      { url: "/images/temp3.png" },
    ],
    [{ url: "/images/temp3.png" }],
  ];

  return (
    <div className="pt-6 2xl:pt-12 bg-lightDark rounded-xl py-4">
      {/* Heading */}
      <div className="relative flex items-center justify-between px-8 sm:px-16 pt-4 pb-8 border-b border-[#FFFFFF0D]">
        <h3 className="font-bold">Whats on this week</h3>
        <h3 className="font-bold">
          {activeIndex === 1 ? "Add details" : "Select template"}
        </h3>
        <h3 className="sm:static absolute -top-2 right-10">
          {activeIndex} of {total}
        </h3>
      </div>
      {/* Slider */}
      <div className="slider">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={50}
          className="w-[90%] 2xl:w-[50%]"
          onPaginationRender={(swiper) => setTotal(swiper.slides.length)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex + 1);
          }}
        >
          <SwiperSlide className="py-6 border-b border-[#FFFFFF0D]">
            {/* Inputs */}
            <div className="flex gap-4 items-start justify-center">
              <div className="flex flex-col gap-2">
                <p className="uppercase text-lightWhite text-[10px]">Date</p>
                <div
                  className={`${inputStyle} flex items-center justify-between text-[14px]`}
                >
                  <input
                    type="date"
                    className="border-none outline-none h-full w-full bg-transparent text-white input"
                    ref={date}
                  />
                  <CgCalendar
                    className="text-[1.5rem] text-lightWhite cursor-pointer"
                    onClick={() => date.current.showPicker()}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="uppercase text-lightWhite text-[10px]">Venue</p>
                <div
                  className={`${inputStyle} flex items-center justify-between text-[14px]`}
                >
                  <input
                    type="text"
                    className="border-none outline-none h-full w-full font-medium bg-transparent text-lightWhite placeholder:text-lightWhite"
                    placeholder="Venue location"
                  />
                </div>
              </div>
            </div>
            {/* Fields */}
            <div className="relative overflow-x-auto py-8">
              <table className="w-full text-sm text-left">
                <thead className="text-sm font-bold text-white">
                  <tr className="divide-x-2 divide-[#FFFFFF0D] ">
                    <th scope="col" className="px-6 py-1 rounded-s-xl">
                      Starter
                    </th>
                    <th scope="col" className="px-6 py-1">
                      Main
                    </th>
                    <th scope="col" className="px-6 py-1">
                      Dessert
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2].map((item, i) => (
                    <tr className="divide-x-[1px] divide-[#FFFFFF0D] ">
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          placeholder="Add info"
                          className={inputStyle}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          placeholder="Add info"
                          className={inputStyle}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          placeholder="Add info"
                          className={inputStyle}
                        />
                      </td>
                    </tr>
                  ))}
                  <tr className="divide-x-[1px] divide-[#FFFFFF0D]">
                    <td className="px-6 py-4">
                      <div className="bg-gradient-to-r from-btnFrom to-btnTo">
                        <FiPlusCircle/>
                        Add field
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        placeholder="Add info"
                        className={inputStyle}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        placeholder="Add info"
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
          {slides.map((slide, i) => (
            <SwiperSlide className="w-full h-full pb-12 pt-8">
              <div className="flex flex-wrap gap-2 justify-around">
                {slide.map((image, j) => (
                  <div
                    className={`${
                      selected === i * 3 + j
                        ? "p-1 bg-gradient-to-r from-btnFrom to-btnTo"
                        : ""
                    }`}
                    key={j}
                    onClick={() => setSelected(i * 3 + j)}
                  >
                    <img
                      src={image.url}
                      className=" object-cover object-center"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Buttons */}
      <div className="px-10">
        <div className="py-6 font-bold text-xs text-white flex sm:flex-row flex-col items-center justify-center gap-4">
          <Link href="/dashboard/broadcast/whatson">
            <button className="px-20 py-3 bg-[#FFFFFF0D] rounded-2xl">
              Back
            </button>
          </Link>
          <Link href="/dashboard/broadcast">
            <button
              className="px-20 py-3 bg-gradient-to-r from-btnFrom to-btnTo rounded-2xl"
              onClick={() =>
                handleToast("Broadcast shared", <FiCheckCircle />, true)
              }
            >
              next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatsCooking;
