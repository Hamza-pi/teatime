"use client";
import { MdOutlineDelete } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { CgCalendar } from "react-icons/cg";
import { useRef } from "react";
import Link from "next/link";

const WhatsOn = () => {
  const inputStyle =
    "outline-none border-none placeholder:text-white text-white font-bold bg-[#FFFFFF0D] rounded-xl pl-5 pr-8 py-3";

  const date = useRef(null);

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="pt-6 2xl:pt-12 bg-lightDark rounded-xl py-4">
      {/* Heading */}
      <div className="flex items-center justify-between px-8 sm:px-16 pt-4 pb-8 border-b border-[#FFFFFF0D]">
        <h3 className="font-bold">Whats on this week</h3>
        <div className="flex items-center sm:gap-x-10 gap-x-2 text-[1.5rem] text-lightWhite">
          <Link href='/dashboard/broadcast'>
            <MdOutlineDelete className="cursor-pointer" />
          </Link>
          <RiSettings4Line className="cursor-pointer" />
        </div>
      </div>
      {/* Form */}
      <div className="flex xl:flex-row flex-col items-start justify-normal 2xl:justify-center gap-x-20 px-2">
        {/* Table */}
        <div className="bg-lightDark px-6 py-4 rounded-xl max-w-full">
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] font-bold text-lightWhite uppercase">
                <tr>
                  <th scope="col" className="px-6 py-1 rounded-s-xl">
                    Day
                  </th>
                  <th scope="col" className="px-6 py-1">
                    What
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Where
                  </th>
                </tr>
              </thead>
              <tbody>
                {weekDays.map((day, i) => (
                  <tr
                    key={i}
                    className=" last:border-none border-b border-[#FFFFFF0D]"
                  >
                    <th
                      scope="row"
                      className="pl-8 pr-6 py-4 font-bold text-white whitespace-nowrap"
                    >
                      {day}
                    </th>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        placeholder="event name"
                        className={inputStyle}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        placeholder="event location"
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Inputs */}
        <div className="flex xl:flex-col sm:flex-row flex-col gap-4 pt-10 xl:pb-0 xl:pl-0 sm:pl-8 pl-2 pb-4">
          <div className="flex flex-col gap-2">
            <p className="uppercase text-lightWhite text-[10px]">
              Week commencing
            </p>
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
      </div>
      {/* Buttons */}
      <div className="px-10">
        <div className="border-t border-[#FFFFFF0D] py-6 font-bold text-xs text-white flex sm:flex-row flex-col items-center justify-center gap-4">
          <Link href="/dashboard/broadcast">
            <button className="px-20 py-3 bg-[#FFFFFF0D] rounded-2xl">
              Cancel
            </button>
          </Link>
          <Link href="/dashboard/broadcast/whatson/template">
            <button className="px-20 py-3 bg-gradient-to-r from-btnFrom to-btnTo rounded-2xl">
              Preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
