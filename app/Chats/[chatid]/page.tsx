"use client";
import React from "react";
import Container from "./Container";
type Props = {
  params: {
    chatid: string;
  };
};
const Page = ({ params: { chatid } }: Props) => {
  return (
    <div className="w-full h-screen fccb">
      <Container chatid={chatid} />
    </div>
  );
};

export default Page;
