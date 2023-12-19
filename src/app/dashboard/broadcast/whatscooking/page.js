"use client";
import Link from "next/link";
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import  { useState } from "react";
import { handleToast } from "@/utils/showToast";
import { FiCheckCircle, FiPlusCircle, FiSearch } from "react-icons/fi";
import Switch from "react-switch";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { CgCalendar } from "react-icons/cg";
import Template1 from "@/components/WhatsCoking/Template1";
import Template2 from "@/components/WhatsCoking/Template2";
import Template3 from "@/components/WhatsCoking/Template3";
import Template4 from "@/components/WhatsCoking/Template4";
import Template5 from "@/components/WhatsCoking/Template5";
const WhatsCooking = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const [selected, setSelected] = useState(0);

  const [total, setTotal] = useState(0);

  const [starterFields, setStarterFields] = useState(2);

  const [mainFields, setMainFields] = useState(2);

  const [dessertFields, setDessertFields] = useState(2);

  const [resident, setResident] = useState(0);

  const [checked, setChecked] = useState(true);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const inputStyle =
    "outline-none border-none placeholder:text-white text-white font-bold bg-[#FFFFFF0D] rounded-xl pl-5 pr-8 py-3";

  const date = useRef(null);
 
  const pagination = {
    clickable: true,
  };
  const slides = [
    { url: "/images/brtemp1.png" },
    { url: "/images/brtemp2.png" },
    { url: "/images/brtemp3.png" },
  ];
  const templateSlides = [
    { component: Template1 },
    { component: Template2 },
    { component: Template3 },
    { component: Template4 },
    { component: Template5 },
  ];
  const selectedSlide = templateSlides[selected];

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

  const handleAddStarterField = () => {
    setStarterFields((prevCount) => prevCount + 1);
  };

  const handleAddMainField = () => {
    setMainFields((prevCount) => prevCount + 1);
  };

  const handleAddDessertField = () => {
    setDessertFields((prevCount) => prevCount + 1);
  };
  


  const tableRef = useRef(null);
  const handleScrollButtonClick = (direction) => {
    // Scroll the table horizontally based on the direction (left or right)
    if (tableRef.current) {
      const scrollAmount = 80; // Adjust the scroll amount as needed
      if (direction === 'left') {
        tableRef.current.scrollLeft -= scrollAmount;
      } else {
        tableRef.current.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <>
     <style>
        {`
          .swiper-container {
            // space-between: 20px;
            width: 95%; /* Default width */
          }
          .hide{
            display: none;
}

          @media (max-width: 1106px) {
            .hide{
              display: block;
  }
          }
          @media (max-width: 1400px) {
            .swiper-container {
              width: 98%;
            }
          }

          @media (max-width: 1330px) {
            .swiper-container {
              width: 85%;
            }
          }

          @media (max-width: 1090px) {
            .swiper-container {
              width: 95%;
            }
          }

          @media (max-width: 768px) {
            .swiper-container {
              width: 60%;
            }
          }

          @media (max-width: 640px) {
            .swiper-container {
              width: 70%;
            }
          }
          @media (max-width: 500px) {
            .swiper-container {
              width: 95%;
            }
          }
          @media (max-width: 400px) {
            .swiper-container {
              width: 98%;
            }
          }
          @media (max-width: 350px) {
            .swiper-container {
              width: 95%;
            }
          }
        `}
      </style>
    <div className=" bg-lightDark rounded-xl ">
      {/* Heading */}
      <div className="relative flex sm:flex-row flex-col items-center justify-between px-8 sm:px-16 sm:py-4 py-6 border-b border-[#FFFFFF0D]">
        <h3 className="font-bold">Whats on this week</h3>
        <h3 className="font-bold">
          {activeIndex === 1
            ? "Add details"
            : activeIndex === 2
            ? "Select template"
            : activeIndex === 3
            ? "Preview"
            : activeIndex===4?'Who is it for?':''}
        </h3>
        <h3 className="sm:static absolute top-2 right-10">
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
          className="w-[full] "
          onPaginationRender={(swiper) => setTotal(swiper.slides.length)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex + 1);
          }}
        >
          <SwiperSlide
  className="py-6 border-b border-[#FFFFFF0D]"
  style={{
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 1024px)': {  // Apply styles until lg screens (1024px)
      justifyContent: 'flex-start',  // Change to 'flex-start' for lg screens
    },
  }}
>
            <div className="2xl:w-[100%] xl:ml-24">
            {/* Inputs */}
            <div className="flex gap-4 items-start justify-center  ">
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
            <div className="relative overflow-x-scroll py-20 w-[90%] "  
          style={{ overflowX: 'auto' }}  ref={tableRef}>
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
                  {[
                    ...Array(
                      Math.max(starterFields, mainFields, dessertFields)
                    ),
                  ].map((_, index) => (
                    <tr
                      key={index}
                      className="divide-x-[1px] divide-[#FFFFFF0D] "
                    >
                      <td className="px-6 py-4">
                        {index < starterFields && (
                          <input
                            type="text"
                            placeholder="Add info"
                            className={inputStyle}
                          />
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {index < mainFields && (
                          <input
                            type="text"
                            placeholder="Add info"
                            className={inputStyle}
                          />
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {index < dessertFields && (
                          <input
                            type="text"
                            placeholder="Add info"
                            className={inputStyle}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="divide-x-[1px] divide-[#FFFFFF0D]">
                    <td className="px-6 py-4">
                      <div
                        className={`bg-gradient-to-r from-btnFrom to-btnTo p-[1px] rounded-xl w-fit cursor-pointer`}
                        onClick={handleAddStarterField}
                      >
                        <p className="bg-black px-16  py-2 rounded-xl text-[#E3E3E3] text-xs font-bold flex items-center justify-start gap-x-4">
                          <FiPlusCircle className="text-xl" />
                          Add field
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`bg-gradient-to-r from-btnFrom to-btnTo p-[1px] rounded-xl w-fit cursor-pointer`}
                        onClick={handleAddMainField}
                      >
                        <p className="bg-black px-16 py-2 rounded-xl text-[#E3E3E3] text-xs font-bold flex items-center justify-start gap-x-4">
                          <FiPlusCircle className="text-xl" />
                          Add field
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`bg-gradient-to-r from-btnFrom to-btnTo p-[1px] rounded-xl w-fit cursor-pointer`}
                        onClick={handleAddDessertField}
                      >
                        <p className="bg-black px-16 py-2 rounded-xl text-[#E3E3E3] text-xs font-bold flex items-center justify-start gap-x-4">
                          <FiPlusCircle className="text-xl" />
                          Add field
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
       
        
            </div>   <button  className="absolute left-[40%]  hide text-3xl" onClick={() => handleScrollButtonClick('left')}><FaAngleLeft /></button>
          <button className="absolute right-[40%]  hide text-3xl" onClick={() => handleScrollButtonClick('right')}><FaAngleRight /></button>
             </div>
           
          </SwiperSlide>
          <SwiperSlide className="">
            <Swiper
              spaceBetween={10}
              className="swiper-container"
              pagination={pagination}
              // modules={[Pagination]}
              breakpoints={{
                1600: {
                  slidesPerView: 3,
                },
                1330: {
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
                <SwiperSlide className="w-full pb-12 pt-6" key={i}>
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

          <SwiperSlide className="pb-1 pt-8">
            <div
              className={`bg-gradient-to-r from-btnFrom to-btnTo  p-1 max-w-[430px] sm:w-1/2 mx-auto rounded-xl`}
            >
              {React.createElement(selectedSlide.component)}
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-1 pt-12">
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
                <div className="2xl:w-[80%] sm:w-[60%] w-[90%] mx-auto py-4 h-[350px]">
                  <ul className="flex flex-col gap-y-8 max-h-full overflow-y-scroll overflow-x-hidden scrollbar">
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
                          className={`w-[22.12px] h-[22.12px] rounded-full ${
                            i === resident ? "bg-primary" : "bg-[#848484]"
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
    </>
  );
};

export default WhatsCooking;
