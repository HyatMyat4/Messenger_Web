"use client";
import React from "react";
import { BsLaptop } from "react-icons/bs";
import { useState } from "react";
import Sidebar_2_Nav from "./Sidebar_2_Nav";
import Image from "next/image";
import jwt_decode from "jwt-decode";
import User_box from "./User_box";
import { useEffect } from "react";
import { Send_Search_data } from "../../utils/Search_Query/Send_Search_data";
import { Get_User_data } from "../../utils/User/Get_User_data";
import Spinner from "react-spinkit";

interface Props {
  _User_data: any;
}

function SiderBar_2() {
  const [SearchFocus, setSearchFocus] = useState<boolean>();
  const [input_data, setinput_data] = useState<string>("");
  const [_data, set_data] = useState<any>();
  const [user_data, set_user_data] = useState<_data>();

  const Fetch_User = async () => {
    const response: any = await Send_Search_data(
      `http://localhost:4000/Search/${input_data}`
    );
    if (response?.data?.message === "Success") {
      set_data(response?.data.data);
    }
  };

  const Fetch_data = async (email: string) => {
    if (!email) return;

    const Response: any | _data = await Get_User_data(
      `http://localhost:4000/User/Single/${email}`
    );
    set_user_data(Response);
  };

  useEffect(() => {
    Fetch_User();
  }, [input_data]);

  useEffect(() => {
    const Token: any = localStorage.getItem("Token");
    if (Token) {
      var decoded: UserInfo = jwt_decode(Token);
      Fetch_data(decoded.UserInfo.email);
    }
  }, []);

  return (
    <div className="w-[360px] h-screen fccb border-r border-gray-200 dark:border-[#2b2b2b]   ">
      <Sidebar_2_Nav
        SearchFocus={SearchFocus}
        setSearchFocus={setSearchFocus}
        input_data={input_data}
        setinput_data={setinput_data}
        set_data={set_data}
      />
      {SearchFocus || input_data.length ? (
        <div className="w-full h-full px-[15px]  overflow-y-scroll ">
          {_data?.length ? (
            _data.map((_data: _data) => (
              <User_box key={_data.id} _data={_data} />
            ))
          ) : (
            <div className=" w-full h-full frcc">
              {input_data.length ? (
                <Spinner
                  name="cube-grid"
                  style={{
                    height: "50px", // Adjust the height as desired
                    width: "50px", // Adjust the width as desired
                  }}
                  fadeIn="none"
                  color="#2DD4BF"
                />
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-full px-[15px]  overflow-y-scroll "></div>
      )}

      <div className="w-full h-[60px] border-t px-[10px] frcc border-gray-200 dark:border-[#2b2b2b]">
        <div className=" w-full h-[40px] rounded hover:bg-[#F2F2F2] dark:hover:bg-[#2b2b2b] select-none cursor-pointer frcc ">
          <BsLaptop className=" text-[20px] " />
          <span className=" ml-[5px] font-medium text-[13px]">
            Try Messenger for window
          </span>
        </div>
      </div>
    </div>
  );
}

export default SiderBar_2;
