"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { handleToast } from "@/utils/showToast";
import { FiCheckCircle } from "react-icons/fi";

const Templates = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selected, setSelected] = useState(0);
  const [total, setTotal] = useState(0);

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
        <h3 className="font-bold">Select template</h3>
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

export default Templates;
