"use client";
import Template1 from "@/components/Whatsontemp/Template1";
import Template2 from "@/components/Whatsontemp/Template2";
import Template3 from "@/components/Whatsontemp/Template3";
import Template4 from "@/components/Whatsontemp/Template4";
import Template5 from "@/components/Whatsontemp/Template5";
import { handleToast } from "@/utils/showToast";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiCheckCircle, FiSearch } from "react-icons/fi";
import { GoChevronRight } from "react-icons/go";
import Switch from "react-switch";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Templates = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const [selected, setSelected] = useState(0);

  const [total, setTotal] = useState(0);

  const [resident, setResident] = useState(0);

  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const pagination = {
    clickable: true,
  };

  const slides = [
    { url: "/images/temp1.png" },
    { url: "/images/temp2.png" },
    { url: "/images/temp3.png" },
  ];
  const templateSlides = [
    { component: Template1 },
    { component: Template2 },
    { component: Template3 },
    { component: Template4 },
    { component: Template5 },
  ];
  const selectedSlide = templateSlides[selected];
  // console.log(selectedSlide.component.name)

  const residents = [
    {
      img: "/images/avatar1.png",
      name: "All residents",
    },
    {
      img: "/images/avatar2.png",
      name: "Mia Sutton",
      post: 20,
    },
    {
      img: "/images/avatar3.png",
      name: "Daniel Thomas",
      post: 20,
    },
    {
      img: "/images/avatar4.png",
      name: "Joshua Smith",
      post: 20,
    },
    {
      img: "/images/avatar4.png",
      name: "Joshua Smith",
      post: 20,
    },
    {
      img: "/images/avatar4.png",
      name: "Joshua Smith",
      post: 20,
    },
    {
      img: "/images/avatar4.png",
      name: "Joshua Smith",
      post: 20,
    },
  ];

  return (
    <div className="2xl:pt-12 bg-lightDark rounded-xl py-2">
      {/* Heading */}
      <div className="relative flex sm:flex-row flex-col items-center justify-between px-8 sm:px-16 py-4 border-b border-[#FFFFFF0D] ">
        <h3 className="font-bold">Whats on this week</h3>
        <h3 className="font-bold">
          {activeIndex === 1
            ? "Select Template"
            : activeIndex === 2
              ? "Preview"
              : activeIndex === 3
                ? "Who is it for?"
                : ""}
        </h3>
        <h3 className="sm:static absolute -top-2 right-10">
          {activeIndex} of {total}
        </h3>
      </div>
      {/* Slider */}
      <div className="slider ">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          nested={true}
          slidesPerView={1}
          spaceBetween={50}
          className="w-[90%] "
          onPaginationRender={(swiper) => setTotal(swiper.slides.length)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex + 1);
          }}
        >
          <SwiperSlide className="pb-10">
            <Swiper
              spaceBetween={20}
              className="w-[90%] h-[700px]"
              pagination={pagination}
              modules={[Pagination]}
              breakpoints={{
                1400: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {templateSlides.map((slide, i) => (
                <SwiperSlide className="w-full pb-12 pt-8" key={i}>
                  <div
                    className={`${selected === i ? "bg-gradient-to-r from-btnFrom to-btnTo rounded-xl" : ""
                      }   p-1`}
                    onClick={() => setSelected(i)}
                  >
                    <slide.component />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>

          <SwiperSlide className="pb-12 pt-8">
            <div
              className={`bg-gradient-to-r from-btnFrom to-btnTo  p-1 xl:w-[40%] sm:w-1/2 mx-auto rounded-xl`}
            >
              {React.createElement(selectedSlide.component)}
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-12 pt-8 h-full">
            <div className="xl:w-[50%] sm:w-[75%] w-[100%] mx-auto space-y-4">
              {/* Toggle */}
              <div className="bg-[#FFFFFF1A] rounded-[3.28px] px-4 py-3 flex items-center justify-between">
                <p className="font-semibold text-[13.93px] leading-[18.03px] text-[#F2F2F2]">
                  Publish to my %ageCare% feed
                </p>
                <Switch
                  onChange={handleChange}
                  checked={checked}
                  onColor="#B1B1B1"
                  offColor="#B1B1B1"
                  onHandleColor="#F2F2F2"
                  offHandleColor="#F2F2F2"
                  handleDiameter={19.67}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </div>
              {/* Share to */}
              <div className="bg-[#FFFFFF1A] rounded-[3.28px] px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[13.93px] leading-[18.03px] text-[#F2F2F2]">
                    Share with individual residents group
                  </p>
                  <GoChevronRight className="text-[19.67px] cursor-pointer" />
                </div>
                {/* Searchbar */}
                <div className="pb-4 pt-8 px-2">
                  <div className="bg-[#FFFFFF1A] rounded-md px-4 py-1 flex items-center gap-2">
                    <FiSearch className="text-[14.75px]" />
                    <input
                      type="text"
                      placeholder="Search Residents"
                      className="bg-transparent px-1 py-0 w-full outline-none text-[17px] leading-[22px] text-disable"
                    />
                  </div>
                </div>
                {/* Residents */}
                <div className="xl:w-[80%] sm:w-[60%] w-[90%] mx-auto py-4 h-[350px]">
                  <ul className="flex flex-col gap-y-8 max-h-full overflow-y-scroll overflow-x-hidden px-2 scrollbar">
                    {residents.map((item, i) => (
                      <li className="flex items-center justify-between" key={i}>
                        <div className="flex items-center gap-2">
                          <Image
                            width={40.97}
                            height={40.97}
                            src={item.img}
                            alt="Residents Img"
                          />
                          <div className="flex flex-col items-start">
                            <p className="text-white font-semibold text-[15px] leading-[20px]">
                              {item.name}
                            </p>
                            <span className="text-[13px] leading-[18px] text-disable">
                              {item.post
                                ? `Last post ${item.post} hours ago`
                                : ""}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`w-[22.12px] h-[22.12px] rounded-full ${i === resident ? "bg-primary" : "bg-[#848484]"
                            } cursor-pointer`}
                          onClick={() => setResident(i)}
                        ></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
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
