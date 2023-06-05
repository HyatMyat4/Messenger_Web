import React from "react";
import SideBar_1 from "./SideBar_1";
import SiderBar_2 from "./SiderBar_2";

interface Props {
  _data: _data | any;
}

export default function SideBarComponents() {
  return (
    <div className="w-auto h-screen frcb">
      <SideBar_1 />
      <SiderBar_2 />
    </div>
  );
}
