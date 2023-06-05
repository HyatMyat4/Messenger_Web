"use client";
import React from "react";
import AuthButton from "../AuthButton";
import { getProviders } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
interface Props {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

export default function AuthComponents({ providers }: Props) {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    const Token: any = localStorage?.getItem("Token");
    if (Token) {
      router.push("http://localhost:3000/Chats");
    } else if (
      data?.user?.email === "" ||
      data?.user?.email === undefined ||
      data?.user?.email === null
    ) {
      router.push("http://localhost:3000/");
    } else {
      router.push("http://localhost:3000/SaveInfo/");
    }
  }, [data]);
  //

  return (
    <div className="w-full 430:w-auto">
      <AuthButton
        AuthImage={"/google.png"}
        AuthName={"Sing With Google"}
        providers={providers}
        providers_Name={"google"}
      />
      <AuthButton
        AuthImage={"/fb.webp"}
        AuthName={"Sing With Facebook"}
        providers={providers}
        providers_Name={"facebook"}
      />
      <AuthButton
        AuthImage={"/Messenger.svg"}
        AuthName={"Messenger Register"}
        providers={providers}
        providers_Name={"messenger"}
      />
    </div>
  );
}
