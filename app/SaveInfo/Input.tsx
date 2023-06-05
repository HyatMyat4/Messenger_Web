"use client";
import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function Input({
  Type,
  Placeholder,
  Password,
  setPassword,
  PasswordFocus,
  setPasswordFocus,
  ValidPassword,
  setValidPassword,
}: Props_Input) {
  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [isPassword, setisPassword] = useState<boolean>(true);

  useEffect(() => {
    setValidPassword(false);
    const result = PWD_REGEX.test(Password);
    setValidPassword(result);
  }, [Password, setPassword]);

  return (
    <div
      className={`w-[340px] h-[48px] relative   frcb ${
        PasswordFocus
          ? " border border-blue-500"
          : "outline-none border border-gray-200 dark:border-[#727272]"
      } rounded  `}
    >
      <input
        type={isPassword ? Type : "text"}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={Placeholder}
        className={`w-full h-full frcs px-[15px] bg-transparent rounded  outline-none py-[6px]  `}
      />
      {!ValidPassword && PasswordFocus && Password.length > 3 ? (
        <div className=" w-full h-auto frcs items-start  rounded-[10px] p-[15px] bg-black absolute bottom-[-145px]">
          <div className=" min-w-[18px] mr-[5px]">
            <BsFillPatchExclamationFill className=" text-rose-600 mt-[3px]  " />
          </div>
          <p className=" text-[14px]">
            Must be Contains <br />
            lowercase letter , uppercase letter <br />
            and at least one digit at least one special character from the set
            [@, $, !, %, *, ?, &].
            <br />
            Must be 8 characters.
          </p>
        </div>
      ) : (
        <div></div>
      )}

      <div className=" w-[50px]   right-[10px]  h-full frcc">
        {isPassword ? (
          <AiFillEye
            onClick={() => setisPassword(false)}
            className=" text-[20px] cursor-pointer   active:scale-90 transition-all duration-100  "
          />
        ) : (
          <AiFillEyeInvisible
            onClick={() => setisPassword(true)}
            className=" text-[20px] cursor-pointer   active:scale-90 transition-all duration-100  "
          />
        )}
      </div>
    </div>
  );
}

export default Input;
