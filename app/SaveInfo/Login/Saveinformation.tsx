"use client";
import React from "react";
import Input from "../Input";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Send_Login_data } from "../../../utils/auth/Send_Register_data";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "react-spinkit";
function SaveInformation() {
  const router = useRouter();

  const [Password, setPassword] = useState<string>("");
  const [PasswordFocus, setPasswordFocus] = useState<boolean>(false);
  const [ValidPassword, setValidPassword] = useState<boolean>(false);
  const [TooManyReq, setTooManyReq] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  console.log(session, " Here Auth data");

  const handle_Send_data = async () => {
    setTooManyReq(false);
    setisLoading(true);
    if (!Password || !session?.user) return;
    if (session?.user) {
      const _data = {
        email: session.user.email!,
        Pasword: Password,
      };
      const data: any = await Send_Login_data(
        "http://localhost:4000/Register/Login",
        _data
      );
      console.log(data, "___________");
      if (data?.response?.status === 429) {
        setTooManyReq(true);
        toast.error(data?.response.data.message);
      } else if (data?.data?.message === "Success Login") {
        localStorage.setItem("Token", data?.data.Token);
        toast.success(data?.data.message);
        router.push("/Chats");
      } else {
        toast.error(data?.response?.data?.message);
        setisLoading(false);
        setValidPassword(false);
        setPassword("");
      }
      console.log(data?.response, "_data Login");
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
        isLoading ? (
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
            className={`  w-auto h-auto px-[40px] py-[9px]  opacity-[0.6] z-[-1] rounded-[20px] ${
              TooManyReq ? " bg-rose-600 " : "bg-gray-400"
            }  mt-[25px] cursor-pointer font-medium 
           active:scale-90 transition-all duration-150 select-none  hover:bg-gray-500 `}
          >
            {TooManyReq ? "Wait 5 minute" : "Log in"}
          </div>
        )
      ) : (
        <div
          onClick={() => handle_Send_data()}
          className={`  w-auto h-auto px-[40px] py-[9px] rounded-[20px] bg-blue-600 mt-[25px] cursor-pointer font-medium 
         active:scale-90 transition-all duration-150 select-none  hover:bg-blue-500 `}
        >
          Log in
        </div>
      )}
    </div>
  );
}

export default SaveInformation;
