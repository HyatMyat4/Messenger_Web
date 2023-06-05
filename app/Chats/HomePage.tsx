"use client";
import React from "react";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Home_Nav from "./Home_Nav";
function HomePage() {
  const router = useRouter();

  useLayoutEffect(() => {
    //const Token = localStorage.getItem("Token");
    //if (!Token) {
    //  router.push("/");
    // }
  }, []);
  return (
    <div className="w-full h-screen fccb px-[30px] overflow-hidden ">
      <Home_Nav />
      <div className=" frcc">
        <div className=" w-[49%] h-auto flex flex-col items-start justify-start pb-[100px] animate-slideleft2 ">
          <span id="colours" className=" text-[65px] font-medium">
            Hang out <br />
            anytime, <br />
            anywhere
          </span>
          <span className=" opacity-[0.9] mt-[15px] mb-[30px]">
            Messenger makes it easy and fun to stay close to your <br />
            favourite people.
          </span>
          <div className=" frcc">
            <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fp%2Fmessenger%2F9wzdncrf0083%3Factivetab%3Dpivot%253Aoverviewtab&h=AT3lMedsgcxRFwkE_uqFoFmpmEoMMWc0YNab6tpGsgEApf_IxSksqUwh-WEjjK5RZoNhweQAOAWCi4Ovl-_48hw8sFoMsSG_K9SGjqMH8fjss7ca-pXtY8f2y4-j9jk_jzoHOe-rM8IQ08okbu_BSdsuPmbtHdEk_5g7bA">
              <Image
                className="w-[130px] mr-[15px] "
                src="/c48ZOHvW58y.png"
                width={1920}
                height={1080}
                alt="Messenger"
              />
            </a>
            <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fmessenger%2Fid1480068668%3Fmt%3D12&h=AT3lMedsgcxRFwkE_uqFoFmpmEoMMWc0YNab6tpGsgEApf_IxSksqUwh-WEjjK5RZoNhweQAOAWCi4Ovl-_48hw8sFoMsSG_K9SGjqMH8fjss7ca-pXtY8f2y4-j9jk_jzoHOe-rM8IQ08okbu_BSdsuPmbtHdEk_5g7bA">
              <Image
                className="w-[130px] "
                src="/E0Xmh71WBR7.png"
                width={1920}
                height={1080}
                alt="Messenger"
              />
            </a>
          </div>
        </div>
        <div className=" w-[49%] h-auto fccc">
          <Image
            className="w-auto animate-slideright2 "
            src="/photo1.png"
            width={1920}
            height={1080}
            alt="Messenger"
          />
        </div>
      </div>
      <div className=" frcc animate-slideup ">
        <span
          id="colours"
          className=" text-[20px] 350:text-[30px] my-[40px] text-center mr-[10px] "
        >
          Connect with your favourite people
        </span>
        <Image
          className="w-[40px]  "
          src="/Messenger.svg"
          width={40}
          height={40}
          alt="Messenger"
        />
      </div>
    </div>
  );
}

export default HomePage;
