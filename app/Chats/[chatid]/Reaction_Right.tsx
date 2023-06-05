import React from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import Image from "next/image";
function Reaction_Right() {
  return (
    <div
      id="reaction"
      className=" bg-[white] w-[250px]  hidden animate-slowfade   right-[-15px]    h-[35px] rounded-full frcb translate-x-[-9px] absolute top-[-50px] px-[10px]"
    >
      <div className=" right-[15px] absolute  bottom-[-13px] z-[-1] ">
        <TbTriangleInvertedFilled className=" text-[20px] text-[white]" />
      </div>
      <div id="Like" className="min-w-[30px] h-auto relative ">
        <Image
          className=" w-full h-auto transition_Emoji "
          src="/love.gif"
          width={30}
          height={30}
          alt="Messenger"
        />
        <span
          id="ltext"
          className="absolute top-[-33px]  left-[-5px]  bg-black px-[6px] text-[13px] font-bold rounded-[15px] transition-all opacity-0"
        >
          Love
        </span>
      </div>
      <div id="Like" className="min-w-[50px] h-auto relative ">
        <Image
          className="w-full transition_Emoji"
          src="/Haha.gif"
          width={30}
          height={30}
          alt="Messenger"
        />
        <span
          id="ltext"
          className="absolute top-[-25px] right-[3px] opacity-0 bg-black px-[6px] text-[13px] font-bold rounded-[15px]"
        >
          Haha
        </span>
      </div>
      <div id="Like" className="min-w-[29px] h-auto relative mr-[10px]">
        <Image
          className="w-full  transition_Emoji "
          src="/care.gif"
          width={30}
          height={30}
          alt="Messenger"
        />
        <span
          id="ltext"
          className="absolute opacity-0 left-[-5px] top-[-35px] bg-black px-[6px] text-[13px] font-bold rounded-[15px] "
        >
          Care
        </span>
      </div>
      <div id="Like" className="min-w-[29px] h-auto relative ">
        <Image
          className="w-[29px]  transition_Emoji"
          src="/Wow.gif"
          width={30}
          height={30}
          alt="Messenger"
        />
        <span
          id="ltext"
          className="absolute top-[-35px] left-[-8px] opacity-0  bg-black px-[6px] text-[13px] font-bold rounded-[15px]"
        >
          Wow
        </span>
      </div>
      <div id="Like" className="min-w-[51px] h-auto relative ">
        <Image
          className="w-full  transition_Emoji"
          src="/Sad.gif"
          width={30}
          height={30}
          alt="Messenger"
        />
        <span
          id="ltext"
          className="absolute top-[-25px]  right-[10px] opacity-0  bg-black px-[6px] text-[13px] font-bold rounded-[15px]"
        >
          Sad
        </span>
      </div>
      <div id="Like" className="min-w-[51px] h-auto relative ">
        <Image
          className="w-[51px]  transition_Emoji  translate-x-[-10px] "
          src="/Angry.gif"
          width={30}
          height={30}
          alt="Messenger"
        />
        <span
          id="ltext"
          className="absolute top-[-25px] left-[-7px]  opacity-0  bg-black px-[6px] text-[13px] font-bold rounded-[15px]"
        >
          Anger
        </span>
      </div>

      <div className="w-full h-[20px]  absolute  left-0 bottom-[-20px]  "></div>
    </div>
  );
}

export default Reaction_Right;
