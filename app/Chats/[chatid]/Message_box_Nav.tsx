import React from "react";
import Image from "next/image";
import { BsFillCircleFill, BsCameraVideo, BsThreeDots } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
function Message_box_Nav() {
  return (
    <div className="w-full h-[60px] border-b border-gray-200 dark:border-[#2b2b2b] shadow  frcb px-[10px] ">
      <div className=" w-auto h-auto frcb py-[3px] px-[6px] rounded hover:bg-[#F2F2F2] dark:hover:bg-[#1e1e1e] cursor-pointer">
        <div className=" relative">
          <Image
            className="w-[39px] h-auto rounded-full "
            src="/profile.jpg"
            width={39}
            height={39}
            alt="HtetMyat"
          />
          <div className=" absolute bottom-0 right-0 border-[2px] rounded-full border-[#FFFFFF] dark:border-[#121212] ">
            <BsFillCircleFill className=" text-[10px]  text-[#63e93e]" />
          </div>
        </div>
        <div className=" w-auto h-auto  fccc items-start justify-center ml-[8px] ">
          <div className="   font-semibold text-[15px] ">Htet Myat</div>
          <span className="text-[13px] text-gray-600 dark:text-gray-300  ">
            Active 16 m ago
          </span>
        </div>
      </div>
      <div className=" frcb">
        <div className=" p-[7px] rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#2b2b2b] cursor-pointer ">
          <IoPhonePortraitOutline className=" text-[23px] text-[#007DF2] " />
        </div>
        <div className=" p-[7px] rounded-full mx-[10px] hover:bg-[#F2F2F2] dark:hover:bg-[#2b2b2b] cursor-pointer ">
          <BsCameraVideo className=" text-[23px] text-[#007DF2] " />
        </div>
        <div className=" p-[7px] rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#2b2b2b] cursor-pointer ">
          <BsThreeDots className=" text-[20px] text-[#007DF2] " />
        </div>
      </div>
    </div>
  );
}

export default Message_box_Nav;
