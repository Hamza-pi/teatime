import React from "react";
import { BsThreeDots } from "react-icons/bs";

const BroadCastLayout = ({ children }) => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between">
        <h3 className="uppercase text-grey font-bold text-xs pb-6">
          MY BROADCASTS
        </h3>
        <BsThreeDots className=" text-greyText2 text-[1rem] cursor-pointer" />
      </div>
      {children}
    </div>
  );
};

export default BroadCastLayout;
