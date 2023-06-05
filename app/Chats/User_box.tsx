import React from "react";
import { BsPatchCheckFill, BsLaptop } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Image from "next/image";

interface Props {
  _data: _data;
}

function User_box({ _data }: Props) {
  return (
    <div className="w-full h-[65px] rounded-[10px] relative hover:bg-[#F2F2F2] dark:hover:bg-[#1d1d1dde] transition cursor-pointer group frcb p-[10px] mb-[5px] ">
      <div className=" frcs">
        <Image
          className="w-[48px] h-auto rounded-full "
          src={_data?.ProfileImage}
          width={48}
          height={48}
          alt="Messenger"
        />
        <div className=" ml-[10px] fccb items-start ">
          <span className=" font-medium text-[15px]">{_data?.Name}</span>
          <span className=" text-[12px] text-[#000000c9] dark:text-slate-200">
            Xello {_data?.Name} <span>. 7h</span>
          </span>
        </div>
      </div>
      <div>
        <BsPatchCheckFill className=" text-[#007DF2] " />
      </div>
      <div
        className=" absolute right-[10px] p-[5px] hidden group-hover:flex  rounded-full border border-gray-200 dark:border-[#101010]
       bg-white dark:bg-[#121212] "
      >
        <HiOutlineDotsHorizontal className=" text-[20px]" />
      </div>
    </div>
  );
}

export default User_box;
