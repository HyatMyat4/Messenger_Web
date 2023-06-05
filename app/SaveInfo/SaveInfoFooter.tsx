import React from "react";
import Link from "next/link";
interface Props {
  data: string;
  Navigation_Link: string;
}

function SaveInfoFooter({ data, Navigation_Link }: Props) {
  return (
    <div className="w-full h-[60px] absolute bottom-0 frcc ">
      <div className="w-full 790:w-[800px] h-full frca m-auto text-[12px] flex-wrap 790:text-[14px] ">
        <Link href={Navigation_Link} className="hoverUnderline">
          {data}
        </Link>
        <span className="hoverUnderline">Forgotten password</span>
        <span className="hoverUnderline">Privacy Policy</span>
        <span className="hoverUnderline">Cookies Policy</span>
        <span className="hoverUnderline">&copy; Htet Myat 2023</span>
      </div>
    </div>
  );
}

export default SaveInfoFooter;
