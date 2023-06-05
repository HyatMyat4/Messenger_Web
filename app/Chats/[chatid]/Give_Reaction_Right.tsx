import React from "react";
import { BsFillReplyFill, BsThreeDotsVertical } from "react-icons/bs";

import Reaction_Right from "./Reaction_Right";
function Give_Reaction_Right() {
  return (
    <div className=" w-[150px] h-full frcs  justify-end  mr-[7px]  relative ">
      <div className=" frcs justify-end  hidden group-hover:flex">
        <span className="p-[6px] rounded-full hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] cursor-pointer">
          <BsThreeDotsVertical />
        </span>
        <span className="p-[6px] rounded-full hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] cursor-pointer">
          <BsFillReplyFill className=" text-[18px]" />
        </span>
        <div
          id="Likethumbs"
          className="p-[6px] rounded-full hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] cursor-pointer"
        >
          <Reaction_Right />
          🍟
        </div>
      </div>
    </div>
  );
}

export default Give_Reaction_Right;
