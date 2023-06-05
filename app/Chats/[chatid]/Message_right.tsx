import React from "react";
import Image from "next/image";
import Give_Reaction_Right from "./Give_Reaction_Right";
interface Props {
  message: {
    SenderId: string;
    SenderProfile: string;
    SenderMessage: string;
    Image: string;
    Link: string;
  };
}
function Message_right({ message }: Props) {
  return (
    <div className="w-full h-auto frcc items-start justify-end mb-[5px] ">
      <div className="pt-[18px] ml-[40px] frcs  group ">
        <Give_Reaction_Right />
        <p
          id="white-space"
          className="px-[20px] py-[5px] frcs prose break-all    text-[15px] bg-[#E4E6EB] dark:bg-[#282828] rounded-[30px] rounded-tr-[5px] text-black dark:text-white  "
        >
          {message.SenderMessage}
        </p>
      </div>
      <Image
        className="w-[28px] h-auto rounded-full ml-[8px] "
        src={message.SenderProfile}
        width={28}
        height={28}
        alt="HtetMyat"
      />
    </div>
  );
}

export default Message_right;
