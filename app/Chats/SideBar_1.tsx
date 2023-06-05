import React from "react";
import { BsMoon, BsShop, BsSun } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbMessageCircle, TbMessageCircle2 } from "react-icons/tb";
import Dark_Light_Mode from "../Provider/Dark_Light_Mode";
import { RxArchive } from "react-icons/rx";

import Signout from "./Signout";
import Image from "next/image";
function SideBar_1() {
  return (
    <div className="w-[60px] h-screen fccb border-r border-gray-200 dark:border-[#2b2b2b] py-[10px] ">
      <div>
        <div className=" p-[13px] rounded bg-[#F5F5F5] dark:bg-[#1f1f1f] cursor-pointer ">
          <TbMessageCircle2 className=" text-[21px] hover:scale-110 transition-all  duration-100" />
        </div>
        <div className=" p-[13px] rounded cursor-pointer mt-[2px]  hover:bg-[#F5F5F5] dark:hover:bg-[#1f1f1f] ">
          <HiOutlineUsers className=" text-[21px] hover:scale-110 transition-all  duration-100" />
        </div>
        <div className=" p-[13px] rounded cursor-pointer mt-[2px]  hover:bg-[#F5F5F5] dark:hover:bg-[#1f1f1f] ">
          <BsShop className=" text-[20px] hover:scale-110 transition-all  duration-100" />
        </div>
        <div className=" p-[13px] rounded cursor-pointer mt-[2px]  hover:bg-[#F5F5F5] dark:hover:bg-[#1f1f1f]">
          <TbMessageCircle className=" text-[22px]" />
        </div>
        <div className=" p-[13px] rounded cursor-pointer mt-[2px]  hover:bg-[#F5F5F5] dark:hover:bg-[#1f1f1f]">
          <RxArchive className=" text-[20px] hover:scale-110 transition-all  duration-100" />
        </div>
        <Dark_Light_Mode />
      </div>
      <div className=" fccb">
        <Image
          className="w-[35px] "
          src="/Messenger.svg"
          width={35}
          height={35}
          alt="Messenger"
        />
        <Signout />
      </div>
    </div>
  );
}

export default SideBar_1;
