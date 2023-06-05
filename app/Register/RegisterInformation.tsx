"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Input_ from "./Input_";
import Password_Input from "../SaveInfo/Input";
import { Image_URL_data } from "../../Setting/actionSlice";
import { useSelector } from "react-redux";
function RegisterInformation() {
  const { data: session } = useSession();
  const Image_URL = useSelector(Image_URL_data);

  // Full_Name Register
  const [Text, setText] = useState<string>("");
  const [TextFocus, setTextFocus] = useState<boolean>(false);
  const [ValidText, setValidText] = useState<boolean>(false);

  const Name_REGEX = /^[A-Za-z\s.'-]{2,30}$/;
  // Email Register
  const [Email, setEmail] = useState<string>("");
  const [EmailFocus, setEmailFocus] = useState<boolean>(false);
  const [ValidEmail, setValidEmail] = useState<boolean>(false);

  const Email_REGEX = /^(?=.*[a-z])(?=.*[@])(?=.*[0-9]).{8,20}$/;
  //  Password Register
  const [Password, setPassword] = useState<string>("");
  const [PasswordFocus, setPasswordFocus] = useState<boolean>(false);
  const [ValidPassword, setValidPassword] = useState<boolean>(false);

  const handle_Send_data = async () => {
    if (!Email.includes("@gmail.com")) {
      setValidEmail(false);
    }
    const Send_data: Save_Informations = {
      email: Email.toLocaleLowerCase(),
      name: Text,
      image: Image_URL,
      Pasword: Password,
    };
    console.log(Send_data);
  };

  return (
    <div className="w-auto h-auto fccc">
      <Input_
        Type={"text"}
        Placeholder={"Full Name"}
        AnyText={Text}
        setAnyText={setText}
        AnyTextFocus={TextFocus}
        setAnyTextFocus={setTextFocus}
        ValidAnyText={ValidText}
        setValidAnyText={setValidText}
        Any_REGEX={Name_REGEX}
      />
      <Input_
        Type={"email"}
        Placeholder={"Email Address"}
        AnyText={Email}
        setAnyText={setEmail}
        AnyTextFocus={EmailFocus}
        setAnyTextFocus={setEmailFocus}
        ValidAnyText={ValidEmail}
        setValidAnyText={setValidEmail}
        Any_REGEX={Email_REGEX}
      />
      <Password_Input
        Type={"password"}
        Placeholder={"Password"}
        Password={Password}
        setPassword={setPassword}
        PasswordFocus={PasswordFocus}
        setPasswordFocus={setPasswordFocus}
        ValidPassword={ValidPassword}
        setValidPassword={setValidPassword}
      />
      {!ValidEmail || !ValidText || !Image_URL || !ValidPassword ? (
        <div
          className={`  w-auto h-auto px-[40px] py-[9px] opacity-[0.6] z-[-1] rounded-[20px] bg-gray-400 mt-[25px] cursor-pointer font-medium 
       active:scale-90 transition-all duration-150 select-none  hover:bg-gray-500 `}
        >
          Register Information
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

export default RegisterInformation;
