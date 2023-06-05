import React from "react";
import Image from "next/image";

function Home_Nav() {
  return (
    <div className=" w-full min-h-[80px] frcb items-center ">
      <div>
        <Image
          className="w-[40px]"
          src="/Messenger.svg"
          width={40}
          height={40}
          alt="Messenger"
        />
      </div>
      <div className=" w-[500px] frcb">
        <a href="https://www.messenger.com/features" className="Chats_page_Nav">
          Features
        </a>
        <a href="https://www.messenger.com/desktop" className="Chats_page_Nav">
          Desktop app
        </a>
        <a href="https://www.messenger.com/privacy" className="Chats_page_Nav">
          Privacy and safety
        </a>
        <a
          href="https://developers.facebook.com/products/messenger/"
          className="Chats_page_Nav"
        >
          For developers
        </a>
      </div>
    </div>
  );
}

export default Home_Nav;
