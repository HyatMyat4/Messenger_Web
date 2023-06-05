import React from "react";

import SaveInfoFooter from "../SaveInfo/SaveInfoFooter";
import RegisterInformation from "./RegisterInformation";
import ImageComponents from "./ImageComponents";
function page() {
  return (
    <div className=" w-full h-screen fccc relative ">
      <ImageComponents />
      <span className=" text-[20px]  350:text-[30px] my-[30px] text-center ">
        Create New Information For Messenger
      </span>
      <RegisterInformation />
      <SaveInfoFooter
        data={"Already have account Login!"}
        Navigation_Link={"/SaveInfo/Login"}
      />
    </div>
  );
}

export default page;
