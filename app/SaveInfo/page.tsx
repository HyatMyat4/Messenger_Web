import React from "react";
import Image from "next/image";
import SaveInformation from "./SaveInformation";
import SaveInfoFooter from "./SaveInfoFooter";

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
      <span className=" text-[20px] 350:text-[30px] my-[30px] text-center ">
        Create <span className="text-blue-500">New Password</span> For Messenger
      </span>
      <SaveInformation />
      <SaveInfoFooter
        data={"Already have account Login!"}
        Navigation_Link={"/SaveInfo/Login"}
      />
    </div>
  );
}

export default page;
