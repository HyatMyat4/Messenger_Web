"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Send_Logout } from "../../utils/auth/Send_Register_data";
function Signout() {
  const { data } = useSession();

  const Log_out = async () => {
    console.log(data?.user);
    if (data?.user) {
      if (
        data.user.email !== "" ||
        data.user.email !== null ||
        data.user.email !== undefined
      ) {
        const logout_data = { Logout: true };
        const response = await Send_Logout(
          "http://localhost:4000/Register/Logout",
          logout_data
        );
        console.log(response, "response from logout");
        localStorage.removeItem("Token");
        if (response?.data.message === "Success Cookie cleared") {
          signOut();
        }
      }
    } else {
    }
  };
  return (
    <div
      onClick={() => Log_out()}
      className=" p-[8px] mt-[12px] rounded-full bg-[#F5F5F5] dark:bg-[#1d1d1d] hover:bg-[#eeeeee] dark:hover:bg-[#2b2b2b] cursor-pointer  "
    >
      <HiArrowRightOnRectangle className=" text-[20px]" />
    </div>
  );
}

export default Signout;
