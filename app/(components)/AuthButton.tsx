"use client";
import Image from "next/image";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
interface Props {
  AuthImage: string;
  AuthName: string;
  providers: Awaited<ReturnType<typeof getProviders>>;
  providers_Name: string;
}

export default function AuthButton({
  AuthImage,
  AuthName,
  providers,
  providers_Name,
}: Props) {
  const { data: session } = useSession();
  console.log(session, " Here Auth data");
  return providers_Name === "messenger" ? (
    <Link
      href={"/Register"}
      key={providers_Name}
      onClick={() =>
        signIn(providers_Name, { callbackUrl: "http://localhost:3000" })
      }
      className="w-full 430:w-[400px] p-[10px]  h-[60px] mt-[20px] frcc select-none  bg-slate-100 rounded-[10px]   hover:bg-slate-200 ScaleAnimation "
    >
      <div className="w-auto h-full frcc ">
        <div className=" w-[30px] 350:w-[40px] h-[30px] 350:h-[40px] ">
          <Image src={AuthImage} width={40} height={40} alt={providers_Name} />
        </div>

        <span className="w-[150px] 350:w-[200px] text-black hidden 250:flex h-full frcs  ml-[20px] text-[15px] 400:text-[20px] font-medium mr-[18px]">
          {AuthName}
        </span>
      </div>
    </Link>
  ) : (
    <div
      key={providers_Name}
      onClick={() =>
        signIn(providers_Name, { callbackUrl: "http://localhost:3000" })
      }
      className="w-full 430:w-[400px] p-[10px]  h-[60px] mt-[20px] frcc select-none  bg-slate-100 rounded-[10px]   hover:bg-slate-200 ScaleAnimation "
    >
      <div className="w-auto h-full frcc ">
        <div className=" w-[30px] 350:w-[40px] h-[30px] 350:h-[40px] ">
          <Image src={AuthImage} width={40} height={40} alt={providers_Name} />
        </div>

        <span className="w-[150px] 350:w-[200px] text-black hidden 250:flex h-full frcs  ml-[20px] text-[15px] 400:text-[20px] font-medium mr-[18px]">
          {AuthName}
        </span>
      </div>
    </div>
  );
}
