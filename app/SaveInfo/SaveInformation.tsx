"use client";
import React from "react";
import Input from "./Input";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Send_Register_data } from "../../utils/auth/Send_Register_data";
import Spinner from "react-spinkit";
import toast from "react-hot-toast";

function SaveInformation() {
  const [Password, setPassword] = useState<string>("");
  const [PasswordFocus, setPasswordFocus] = useState<boolean>(false);
  const [ValidPassword, setValidPassword] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);

  const { data: session } = useSession();

  const handle_Send_data = async () => {
    if (!Password || !session?.user) return;
    setisLoading(true);
    if (session?.user) {
      const _data: Save_Informations = {
        email: session.user.email!,
        name: session.user.name!,
        image: session.user.image!,
        Pasword: Password,
      };
      console.log(_data, "_data");

      const Response = await Send_Register_data(
        `${process.env.BASE_URL}/Register/`,
        _data
      );
      console.log(Response?.data.message, "Here Response");
      if (Response?.data.message === "Success Create User") {
        toast.success(Response?.data.message);
      } else {
        setisLoading(false);
        setValidPassword(false);
        setPassword("");
        toast.error(Response?.data.message);
      }
    }
  };

  return (
    <div className="w-auto h-auto fccc">
      <Input
        Type={"password"}
        Placeholder={"Password"}
        Password={Password}
        setPassword={setPassword}
        PasswordFocus={PasswordFocus}
        setPasswordFocus={setPasswordFocus}
        ValidPassword={ValidPassword}
        setValidPassword={setValidPassword}
      />
      {!ValidPassword ? (
        <div
          className={`  w-auto h-auto px-[40px] py-[9px] opacity-[0.6] z-[-1] rounded-[20px] bg-gray-400 mt-[25px] cursor-pointer font-medium 
           active:scale-90 transition-all duration-150 select-none  hover:bg-gray-500 `}
        >
          Register Information
        </div>
      ) : isLoading ? (
        <div className=" mt-[20px]">
          <Spinner
            name="cube-grid"
            style={{
              height: "50px", // Adjust the height as desired
              width: "50px", // Adjust the width as desired
            }}
            fadeIn="none"
            color="#2DD4BF"
          />
        </div>
      ) : (
        <div
          onClick={() => handle_Send_data()}
          className={`  w-auto h-auto px-[40px] py-[9px] rounded-[20px] bg-blue-600 mt-[25px] cursor-pointer font-medium 
         active:scale-90 transition-all duration-150 select-none  hover:bg-blue-500 `}
        >
          Register Information
        </div>
      )}
    </div>
  );
}

export default SaveInformation;
