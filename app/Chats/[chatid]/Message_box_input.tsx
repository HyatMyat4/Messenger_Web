"use client";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import {
  BsImage,
  BsStickyFill,
  BsFillGiftFill,
  BsChatDotsFill,
} from "react-icons/bs";

import EmojiPicker from "emoji-picker-react";
import { EmojiStyle } from "emoji-picker-react";
import { useState } from "react";

function Message_box_input({
  setmessage,
  setshowPicker,
  setSearchFocus,
  message,
  showPicker,
  SearchFocus,
  Send_Message,
  handle_Key,
}: any) {
  const onEmojiClick = (emojiObject: any) => {
    setmessage(message + emojiObject.emoji);
  };

  return (
    <div className="w-full h-[60px]  frcb px-[10px] ">
      <div className=" frcb">
        <div className=" p-[7px] rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#2b2b2b] cursor-pointer ">
          <IoMdAddCircle className=" text-[22px] text-[#007DF2]" />
        </div>
        <div className=" p-[7px] rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#2b2b2b] cursor-pointer ">
          <BsImage className=" text-[19px] text-[#007DF2]" />
        </div>
        {message?.length > 0 ? (
          <div></div>
        ) : (
          <div className="frcb">
            <div className=" p-[7px] rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#2b2b2b] animate-slowfade cursor-pointer ">
              <BsStickyFill className=" text-[19px] text-[#007DF2]" />
            </div>
            <div className=" p-[7px] rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#2b2b2b] cursor-pointer animate-slowfade ">
              <BsFillGiftFill className=" text-[19px] text-[#007DF2]" />
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-auto frcb ml-[10px]">
        <div
          className={` ${
            SearchFocus
              ? "w-[100%] animate-widthChange transition-all   duration-1000 ease-in  "
              : " w-full "
          } h-[35px]     frcb rounded-[20px] bg-[#F3F3F5] dark:bg-[#1d1d1d] pl-[15px] overflow-hidden `}
        >
          <input
            type="text"
            value={message}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            onChange={(e) => setmessage(e.target.value)}
            onKeyUp={handle_Key}
            className="w-full h-full outline-none z-40  bg-transparent text-[16px]  "
            placeholder="Message"
          />
          <div
            onClick={() => setshowPicker(!showPicker)}
            className="p-[8px] select-none text-[19px] hover:bg-slate-200 dark:hover:bg-[#2b2b2b] rounded-full cursor-pointer"
          >
            🥰
          </div>
          {showPicker ? (
            <div className=" absolute right-[70px] bottom-[50px] z-0 overflow-hidden bg-[#FFFFFF]  rounded-[8px] ">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                emojiStyle={EmojiStyle.FACEBOOK}
              />
              .
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {message?.length >= 0 ? (
          <div
            onClick={() => Send_Message()}
            className=" py-[5px] px-[6px] rounded-full mr-[10px]  text-[21px] hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] ml-[10px] cursor-pointer "
          >
            <BsChatDotsFill className="text-[#007DF2]" />
          </div>
        ) : (
          <div className="mr-[10px]">
            <span
              onClick={(e: any) => setmessage((prev: string) => prev + "💗")}
              className=" py-[3px] px-[4px] rounded-full 
             text-[21px] hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] animate-slowfade ml-[10px]  cursor-pointer "
            >
              💗
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message_box_input;
