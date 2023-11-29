import React from "react";
import { BsThreeDots } from "react-icons/bs";

const BroadCastLayout = ({ children }) => {
  return (
    <div className="py-8 px-2">
      <div className="flex items-center justify-between px-3 pb-12">
        <h3 className="uppercase text-grey leading-[20px] tracking-[1px] font-bold text-xs">
          MY BROADCASTS
        </h3>
      </div>
      {children}
    </div>
  );
};

export default BroadCastLayout;
