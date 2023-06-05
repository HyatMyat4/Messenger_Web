"use client";
import React from "react";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { useState, useEffect } from "react";
function Input_({
  Type,
  Placeholder,
  AnyText,
  setAnyText,
  AnyTextFocus,
  setAnyTextFocus,
  ValidAnyText,
  setValidAnyText,
  Any_REGEX,
}: Props_Input_any) {
  const _REGEX = Any_REGEX;

  useEffect(() => {
    setValidAnyText(false);
    const result = _REGEX.test(AnyText);
    setValidAnyText(result);
  }, [AnyText, setAnyText]);

  return (
    <div
      className={`w-[340px] h-[48px] relative mb-[20px]   frcb ${
        AnyTextFocus
          ? " border border-blue-500"
          : "outline-none border border-gray-200 dark:border-[#727272]"
      } rounded  `}
    >
      <input
        type={Type}
        onFocus={() => setAnyTextFocus(true)}
        onBlur={() => setAnyTextFocus(false)}
        value={AnyText}
        onChange={(e) => setAnyText(e.target.value)}
        placeholder={Placeholder}
        className={`w-full h-full frcs px-[15px] bg-transparent rounded  outline-none py-[6px]  `}
      />
      {!ValidAnyText && AnyTextFocus && AnyText.length > 3 ? (
        <div
          className={` w-full h-auto frcs items-start  rounded-[10px] p-[15px] z-10 bg-black absolute ${
            Type === "text" ? "bottom-[-100px]" : "bottom-[-145px]"
          }`}
        >
          <div className=" min-w-[18px] mr-[5px]">
            <BsFillPatchExclamationFill className=" text-rose-600 mt-[3px]  " />
          </div>
          {Type === "text" ? (
            <p className=" text-[14px]">
              Must be Contains <br />
              lowercase letter , uppercase letter <br />
              Must be Contains 2 characters.
            </p>
          ) : (
            <p className=" text-[14px]">
              Must be Contains <br />
              Only lowercase letter <br />
              and at least one digit and Must be Conatins @gmail.com <br />
              eg. example123 Must be 8 characters.
            </p>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Input_;
