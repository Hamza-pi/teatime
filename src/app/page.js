"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { IoEyeOutline } from "react-icons/io5";

export default function SignIn() {
  const [type, setType] = useState(false);

  const [pass, setPass] = useState("");

  const inputStyle =
    "sm:w-full w-[280px] border-none outline-none bg-field text-sm font-medium text-white px-[1.3rem] py-[.7rem] rounded-xl";

  return (
    <div className="flex justify-between items-center sm:px-[6rem] 2xl:px-[10rem] xl:py-[3rem] py-[1.5rem] min-h-screen max-h-screen overflow-hidden">
      {/* Left Heading */}
      <div className="lg:flex hidden flex-col items-start gap-y-4 font-bold text-disable pl-[1rem]">
        <h3 className="text-[2rem]">Welcome to</h3>
        <div className="">
          <Image src="/images/logo.png" width={173.07} height={173.07} />
        </div>
        <h1 className="text-white text-[3rem]">Tea time</h1>
        <h2 className="text-[2.5rem] leading-10">
          The <span className="text-primary">easy and fun</span> way to <br />{" "}
          manage your <span className="text-primary">age care</span>
        </h2>
      </div>
      {/* Sign Up From */}
      <div className="2xl:pt-[20rem] flex items-center justify-center lg:w-auto w-full relative">
        <Image
          src="/images/img1.png"
          width={167}
          height={167}
          className="absolute sm:top-0 lg:-top-8 2xl:top-44 lg:-right-16 sm:right-0"
        />
        <Image
          src="/images/img2.png"
          width={183}
          height={183}
          className="absolute lg:-left-40 sm:left-0"
        />
        <Image
          src="/images/img3.png"
          width={95}
          height={95}
          className="absolute sm:bottom-0 lg:-bottom-5 2xl:-bottom-24 sm:right-0 lg:-right-20"
        />
        <form className="bg-lightDark rounded-3xl shadow-form text-center xl:py-[2rem] py-[1rem] sm:px-[1.5rem] px-[1rem] z-10">
          <div className="py-[1rem] flex flex-col gap-y-[.7rem]">
            <h3 className="font-bold text-xl">Getting Started</h3>
            <p className="text-grey font-normal text-sm">
              Create an account to continue!
            </p>
          </div>
          {/* Inputs */}
          <div className="inputs pt-[1rem] flex flex-col sm:gap-y-3 gap-y-2">
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className={inputStyle}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={inputStyle}
                required
              />
            </div>
            <div className={`${inputStyle} flex items-center justify-between`}>
              <input
                type={`${type ? "text" : "password"}`}
                placeholder="Create Password"
                className={`${inputStyle} !p-0 bg-transparent !rounded-none`}
                onChange={(e) => setPass(e.target.value)}
                required
              />
              <IoEyeOutline
                className="font-medium text-[1.4rem] text-lightWhite cursor-pointer"
                onClick={() => {
                  setType(!type);
                }}
              />
            </div>
          </div>
          <div className="py-[1rem]">
            <PasswordStrengthBar
              minLength={6}
              barColors={[
                "rgba(255, 255, 255, 0.05)",
                "rgba(255, 255, 255, 0.1)",
                "rgba(255, 255, 255, 0.3)",
                "rgba(255, 255, 255, 0.5)",
                "rgba(255, 255, 255, 0.7)",
                "rgba(255, 255, 255, 1)",
              ]}
              password={pass}
            />
          </div>
          <div className="terms flex items-start gap-x-[.5rem] text-grey text-sm font-normal">
            <input
              type="checkbox"
              className="mt-[.3rem] border border-[#DEEBFF] outline-none rounded-lg"
              required
            />
            <p className="text-left">
              By creating an account, you agree to our <br />
              <Link href="" className="text-primary font-bold">
                Term and Conditions
              </Link>
            </p>
          </div>
          <div className="py-[1rem]">
            <button className="w-full py-[1rem] rounded-2xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-sm font-bold">
              Register
            </button>
          </div>
          <div className="haveAccount py-[.8rem] text-grey text-base font-medium">
            <p>
              Already have an account?
              <Link
                href="/login"
                className="text-transparent bg-clip-text bg-gradient-to-r from-btnFrom from-5% to-btnTo to-80% font-bold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
