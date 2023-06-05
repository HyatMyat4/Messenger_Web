"use client";
import React from "react";
import { TbVideoPlus } from "react-icons/tb";
import { BiMessageSquareEdit } from "react-icons/bi";
import { BsSearch, BsLaptop } from "react-icons/bs";
import { RxArrowLeft } from "react-icons/rx";

interface Props {
  SearchFocus: boolean | any;
  setSearchFocus: boolean | any;
  input_data: string;
  setinput_data: any;
  set_data: any;
}

function Sidebar_2_Nav({
  SearchFocus,
  setSearchFocus,
  input_data,
  setinput_data,
  set_data,
}: Props) {
  const handleClear = () => {
    setinput_data("");
    set_data([]);
  };

  return (
    <div className="w-full h-auto fccb px-[15px] mb-[10px]">
      <div className=" w-full h-[60px] frcb  ">
        <span className=" font-extrabold text-[20px] select-none ">Chats</span>
        <div className=" frcb">
          <div className="p-[7px] bg-[#efefef] dark:bg-[#1d1d1d] hover:bg-[#e6e6e6] dark:hover:bg-[#2b2b2b] cursor-pointer  rounded-full mr-[10px]">
            <TbVideoPlus className=" text-[23px]" />
          </div>
          <div className="p-[7px] bg-[#efefef] dark:bg-[#1d1d1d] hover:bg-[#e6e6e6] dark:hover:bg-[#2b2b2b] cursor-pointer rounded-full">
            <BiMessageSquareEdit className=" text-[23px]" />
          </div>
        </div>
      </div>
      <div className="w-full h-auto frcb ">
        <div
          onClick={() => handleClear()}
          className={`p-[7px] ${
            SearchFocus || input_data.length ? "" : " hidden"
          } bg-[#F2F2F2] dark:bg-[#1d1d1d] cursor-pointer rounded-full mr-[5px]`}
        >
          <RxArrowLeft className=" text-[23px]" />
        </div>
        <div
          className="w-full h-[38px] rounded-[20px]  frcs bg-[#F3F3F5] dark:bg-[#1d1d1d] px-[14px]
  "
        >
          <BsSearch
            className={` text-gray-500 dark:text-gray-300 mr-[10px] ${
              SearchFocus || input_data.length ? " hidden" : ""
            } `}
          />
          <input
            type="text"
            value={input_data}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            onChange={(e) => setinput_data(e.target.value)}
            placeholder="Search Friends"
            className=" w-full h-full bg-transparent outline-none  dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar_2_Nav;
