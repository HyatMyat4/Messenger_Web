import React from "react";
import { BsFillReplyFill, BsThreeDotsVertical } from "react-icons/bs";

import Image from "next/image";
import Reaction_Left from "./Reaction_Left";
function Give_Reaction_Left() {
  return (
    <div className=" w-[150px] h-full frcb ml-[7px]  relative   ">
      <div className=" frcb hidden group-hover:flex ">
        <div
          id="Likethumbs"
          className="p-[6px] rounded-full  hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] cursor-pointer"
        >
          <Reaction_Left />
          🍟
        </div>
        <span className="p-[6px] rounded-full hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] cursor-pointer">
          <BsFillReplyFill className=" text-[18px]" />
        </span>
        <span className="p-[6px] rounded-full hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  );
}

export default Give_Reaction_Left;
