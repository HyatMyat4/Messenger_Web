import React from "react";
import Image from "next/image";
import Give_Reaction_Left from "./Give_Reaction_Left";
import Message_Reactions from "./Message_Reactions";
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

function Message_left({ message }: Props) {
  return (
    <div className="w-full h-auto fccc items-start  mb-[5px] ">
      <div className=" w-auto h-auto frcs items-start">
        <Image
          className="w-[28px] h-auto rounded-full mr-[8px] "
          src={message.SenderProfile}
          width={28}
          height={28}
          alt="HtetMyat"
        />
        {message.SenderMessage.length ? (
          <div className="pt-[18px] mr-[40px] frcs group ">
            <p
              id="white-space"
              className="px-[20px] py-[5px]  frcs relative prose   break-all text-black dark:text-white   text-[15px] bg-[#E4E6EB] dark:bg-[#282828] rounded-[30px] rounded-tl-[5px] "
            >
              {`${message.SenderMessage}\n`}
              <Message_Reactions message={message} />
            </p>
            <Give_Reaction_Left />
          </div>
        ) : (
          <div className="pt-[18px] mr-[40px] frcs group ">
            <div className="w-auto h-auto relative">
              <img
                className="w-[600px] h-auto rounded  "
                src={message.Image}
                alt="HtetMyat  "
              />
              <Message_Reactions message={message} />
            </div>
            <Give_Reaction_Left />
          </div>
        )}
      </div>
      {message.Image.length && message.SenderMessage.length ? (
        <div className=" frcs mt-[10px] group ">
          <div className="w-[28px] h-auto rounded-full mr-[8px]"></div>
          <img
            className="w-[600px] h-auto rounded  "
            src={message.Image}
            alt="HtetMyat  "
          />
          <Give_Reaction_Left />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Message_left;
