"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { set_Reaction } from "../../../Setting/actionSlice";
type NewType = {
  SenderId: string;
  SenderProfile: string;
  SenderMessage: string;
  Reactions: {
    Love: [];
    Haha: [];
    Care: [];
    Wow: [];
    Sad: [];
    Anger: [];
  };
  Image: string;
  Link: string;
};

interface Props {
  message: NewType;
}

function Message_Reactions({ message }: Props) {
  const Total_Reaction =
    message.Reactions.Love.length +
    message.Reactions.Haha.length +
    message.Reactions.Care.length +
    message.Reactions.Sad.length +
    message.Reactions.Anger.length;
  const dispatch = useDispatch();
  return (
    <div
      className="w-auto h-[19px] cursor-pointer select-none frcc hover:scale-105 transition-all 
duration-100 absolute right-[15px] bottom-[-13px]   text-[14px]
 bg-[#ffffff] shadow-lg darkL:bg-[#ffffff] rounded-full  "
    >
      <div className=" w-auto h-[19px] frcc">
        <span
          onClick={() =>
            dispatch(
              set_Reaction({
                User_Id: "12345678",
                Giver_Name: "Htet Myat",
                Giver_Profile: "/profile.jpg",
                Reaction: "Love",
              })
            )
          }
          className={`${message.Reactions.Love.length > 0 ? "" : " hidden"}`}
        >
          ❤️
        </span>
        <span
          onClick={() =>
            dispatch(
              set_Reaction({
                User_Id: "12345678",
                Giver_Name: "Htet Myat",
                Giver_Profile: "/profile.jpg",
                Reaction: "Haha",
              })
            )
          }
          className={`${
            message.Reactions.Haha.length > 0 ? "" : " hidden"
          } translate-x-[-4] `}
        >
          😆
        </span>
        <span
          onClick={() =>
            dispatch(
              set_Reaction({
                User_Id: "12345678",
                Giver_Name: "Htet Myat",
                Giver_Profile: "/profile.jpg",
                Reaction: "Care",
              })
            )
          }
          className={`${
            message.Reactions.Care.length > 0 ? "" : " hidden"
          } translate-x-[-8]  `}
        >
          🥰
        </span>
        <span
          onClick={() =>
            dispatch(
              set_Reaction({
                User_Id: "12345678",
                Giver_Name: "Htet Myat",
                Giver_Profile: "/profile.jpg",
                Reaction: "Wow",
              })
            )
          }
          className={` ${
            message.Reactions.Wow.length > 0 ? "" : " hidden"
          } translate-x-[-12]`}
        >
          😯
        </span>
        <span
          onClick={() =>
            dispatch(
              set_Reaction({
                User_Id: "12345678",
                Giver_Name: "Htet Myat",
                Giver_Profile: "/profile.jpg",
                Reaction: "Sad",
              })
            )
          }
          className={` ${
            message.Reactions.Sad.length > 0 ? "" : " hidden"
          } translate-x-[-16] `}
        >
          😢
        </span>
        <span
          onClick={() =>
            dispatch(
              set_Reaction({
                User_Id: "12345678",
                Giver_Name: "Htet Myat",
                Giver_Profile: "/profile.jpg",
                Reaction: "Anger",
              })
            )
          }
          className={` ${
            message.Reactions.Anger.length > 0 ? "" : " hidden"
          } translate-x-[-20]`}
        >
          😡
        </span>
        <span
          className={` ${
            Total_Reaction > 0 ? "" : " hidden"
          } text-black pl-[4px] pr-[6px] text-[12px]`}
        >
          {Total_Reaction}
        </span>
      </div>
    </div>
  );
}

export default Message_Reactions;
