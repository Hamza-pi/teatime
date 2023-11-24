"use client";
import Link from "next/link";


const Templates = () => {
 

  return (
    <div className="pt-6 2xl:pt-12 bg-lightDark rounded-xl py-4">
      {/* Heading */}
      <div className="flex items-center justify-between px-8 sm:px-16 pt-4 pb-8 border-b border-[#FFFFFF0D]">
        <h3 className="font-bold">Whats on this week</h3>
        <h3 className="font-bold">Select template</h3>
        <h3>2 of 3</h3>
      </div>
      {/* Slider */}
    
      {/* Buttons */}
      <div className="px-10">
        <div className="py-6 font-bold text-xs text-white flex sm:flex-row flex-col items-center justify-center gap-4">
          <Link href="/dashboard/broadcast/whatson">
            <button className="px-20 py-3 bg-[#FFFFFF0D] rounded-2xl">
              Back
            </button>
          </Link>
          <button className="px-20 py-3 bg-gradient-to-r from-btnFrom to-btnTo rounded-2xl">
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
