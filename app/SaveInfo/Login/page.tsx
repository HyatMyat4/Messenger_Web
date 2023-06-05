import React from "react";
import Image from "next/image";
import SaveInformation from "./Saveinformation";
import SaveInfoFooter from "../SaveInfoFooter";

function page() {
  return (
    <div className=" w-full h-screen fccc relative ">
      <Image
        className="w-[50px] 350:w-[90px]"
        src="/Messenger.svg"
        width={50}
        height={50}
        alt="Messenger"
      />
      <span className=" text-[20px] 350:text-[30px] select-none my-[30px] text-center ">
        Connect with your favourite people
      </span>
      <SaveInformation />
      <SaveInfoFooter
        data={"Not have account Register!"}
        Navigation_Link={"/SaveInfo"}
      />
    </div>
  );
}

export default page;
