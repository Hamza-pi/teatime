"use client";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { MdMenu } from "react-icons/md";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { PiBell } from "react-icons/pi";
import { RiSettings4Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FiCheckCircle, FiUser, FiUsers } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import { useState } from "react";
import Image from "next/image";
import CIcon from "@/components/CIcon";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function AdminLayout({ children }) {
  const [sider, setSider] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);

  const links = [
    {
      icon: RxDashboard,
      title: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: FiCheckCircle,
      title: "Approval requests",
      count: 1,
      route: "/dashboard/approvals",
    },
    {
      icon: TbMessageCircle,
      title: "Broadcast",
      route: "",
    },
    {
      icon: FiUser,
      title: "Residents",
      route: "",
    },
    {
      icon: FiUsers,
      title: "Family",
      route: "",
    },
    {
      icon: FaRegHeart,
      title: "Care workers",
      route: "",
    },
  ];

  return (
    <section className={`bg-shade min-h-screen ${outfit.className}`}>
      <nav className="sticky top-0 z-50 w-full bg-dark">
        <div className="px-3 py-4 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                className="inline-flex items-center p-2 text-xl text-lightWhite rounded-lg lg:hidden outline-none"
              >
                <span className="sr-only">Open sidebar</span>
                <MdMenu onClick={() => setSider(!sider)} />
              </button>
              <Link href="/dashboard" className="flex ms-2 md:me-24">
                <img
                  src="/images/logo.png"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-sm whitespace-nowrap dark:text-white">
                  Tea Time
                </span>
              </Link>
            </div>
            {/* Info */}
            <div className="text-white sm:flex hidden items-center justify-between w-[75%]">
              <h3 className="font-bold text-xl">👋Jimmy Trick</h3>
              <div className="flex items-center justify-between gap-x-8">
                <button className="w-full flex items-center justify-between py-[.5rem] px-[1rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-base font-bold">
                  <FaPlus /> Broadcast
                </button>
                <div className="relative cursor-pointer">
                  <p className="w-[1rem] h-[1rem] rounded-full bg-gradient-to-r from-btnFrom to-btnTo flex items-center justify-center text-[8px] absolute -top-1 right-0">
                    1
                  </p>
                  <PiBell className="text-[1.5rem]" />
                </div>
                <div className=" cursor-pointer">
                  <RiSettings4Line className="text-[1.5rem]" />
                </div>
              </div>
            </div>
            {/* User */}
            <div className="flex items-center">
              <div className="flex items-center ms-3 relative">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setMenu(!menu)}
                >
                  <Image
                    className="rounded-full"
                    width={32}
                    height={32}
                    src="/images/user.png"
                    alt="user photo"
                  />
                </button>
                <div
                  className={`z-50 my-4 text-base sm:hidden ${
                    menu ? "block" : "hidden"
                  } list-none bg-dark divide-y divide-gray-100 rounded shadow  text-white absolute top-10 right-0`}
                >
                  <div className="px-4 py-3">
                    <p className="text-sm">Jimmy Trick</p>
                    <p className="text-sm font-medium" role="none">
                      jimmy.trick@teatime.com
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-x-4 py-4 px-2">
                    <button className="w-full flex items-center justify-between py-[.5rem] px-[1rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-base font-bold">
                      <FaPlus /> Broadcast
                    </button>
                    <div className="relative cursor-pointer">
                      <p className="w-[1rem] h-[1rem] rounded-full bg-gradient-to-r from-btnFrom to-btnTo flex items-center justify-center text-[8px] absolute -top-1 right-0">
                        1
                      </p>
                      <PiBell className="text-[1.5rem]" />
                    </div>
                    <div className=" cursor-pointer">
                      <RiSettings4Line className="text-[1.5rem]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-start">
        <aside
          className={`fixed top-18 lg:pt-0 left-0 z-40 w-64 h-[calc(100vh-72px)] transition-transform ${
            sider ? "translate-x-0" : "-translate-x-full"
          } bg-dark lg:translate-x-0`}
        >
          <div className="h-full pb-4 flex flex-col items-start justify-between overflow-y-auto bg-dark text-disable">
            <ul className="space-y-8 font-medium">
              {links.map((item, i) => (
                <li key={i} onClick={() => setActive(i)}>
                  <Link
                    href={`${item.route}`}
                    className={`font-bold text-base flex items-center gap-3 relative ${
                      active === i
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-btnFrom to-btnTo"
                        : ""
                    }`}
                  >
                    <div
                      className={`min-w-[3px] min-h-[28px] ${
                        active === i
                          ? "bg-gradient-to-r from-btnFrom to-btnTo "
                          : "bg-none"
                      } rounded-r-full`}
                    ></div>
                    <div className="text-[1.5rem]">
                      {
                        <CIcon
                          isActive={active === i ? true : false}
                          Icon={item.icon}
                        />
                      }
                    </div>
                    <span className="ms-3">{item.title}</span>
                    {item.count ? (
                      <span className="w-[1rem] h-[1rem] rounded-full bg-btnFrom flex items-center justify-center text-[8px] absolute -right-10 text-white">
                        {item.count}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-bold text-xs px-[2rem]">
              © 2023 TeaTime Media Pty Ltd. All rights reserved.
            </p>
          </div>
        </aside>
        <div className="flex-1 lg:ml-64 px-4 2xl:px-16 overflow-hidden">
          <div className="w-full mx-auto">
            {children}
          </div>
        </div>
      </div>

    </section>
  );
}